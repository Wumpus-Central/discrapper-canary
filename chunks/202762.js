i.d(t, { Fj: () => m, GP: () => _, Vk: () => I, Wd: () => f, iX: () => g, j0: () => h, lr: () => E });
var n = i(562465),
    l = i(228366),
    a = i(626584),
    r = i(88592),
    s = i(716357),
    d = i(855823),
    u = i(652215);
let c = new a.A("GuildSpaceEditorActionCreators"),
    o = 0;
function f(e) {
    let t = s.A.getSpace(e);
    null != t && l.h.dispatch({ type: "GUILD_SPACE_EDIT_START", guildId: e, space: t });
}
function g(e) {
    l.h.dispatch({ type: "GUILD_SPACE_EDIT_CANCEL", guildId: e });
}
function E(e, t, i) {
    l.h.dispatch({ type: "GUILD_SPACE_EDIT_ADD_WIDGET", guildId: e, widget: (0, d.ox)(t, i) });
}
function h(e, t, i, n) {
    l.h.dispatch({ type: "GUILD_SPACE_EDIT_MOVE_WIDGET", guildId: e, widgetId: t, targetColumn: i, targetIndex: n });
}
function _(e, t) {
    l.h.dispatch({ type: "GUILD_SPACE_EDIT_REMOVE_WIDGET", guildId: e, widgetId: t });
}
function I(e, t, i) {
    l.h.dispatch({ type: "GUILD_SPACE_EDIT_UPDATE_WIDGET_CONFIG", guildId: e, widgetId: t, config: i });
}
async function m(e) {
    let t = r.A.getDraft(e);
    if (null == t || "saving" === r.A.getSaveStatus(e)) return;
    let i = {
            header: t.header,
            widgets: t.widgets.map((e) => {
                let { id: t, type: i, position: n, config: l } = e,
                    a = { type: i, position: n, config: (0, d.y0)(l) };
                return (0, d.Ny)(t) || (a.id = t), a;
            }),
        },
        a = o++;
    l.h.dispatch({ type: "GUILD_SPACE_EDIT_SAVE_START", guildId: e, requestId: a });
    try {
        let { body: t } = await n.Bo.put({ url: u.Rsh.GUILD_SPACE(e), body: i, rejectWithError: !0 });
        l.h.dispatch({ type: "GUILD_SPACE_UPDATE_SUCCESS", guildId: e, space: t });
    } catch (t) {
        c.error("Failed to save guild space", { guildId: e, error: t }),
            l.h.dispatch({ type: "GUILD_SPACE_EDIT_SAVE_FAILURE", guildId: e, requestId: a });
    }
}
