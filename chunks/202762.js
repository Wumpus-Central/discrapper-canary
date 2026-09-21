n.d(t, { Fj: () => p, GP: () => h, Vk: () => E, Wd: () => o, iX: () => f, j0: () => m, lr: () => g, pC: () => x });
var l = n(636537),
    r = n(228366),
    i = n(960960),
    a = n(88592),
    s = n(716357),
    u = n(855823),
    d = n(652215);
let c = 0;
function o(e) {
    let t = s.A.getSpace(e);
    null != t && r.h.dispatch({ type: "GUILD_SPACE_EDIT_START", guildId: e, space: t });
}
function f(e) {
    r.h.dispatch({ type: "GUILD_SPACE_EDIT_CANCEL", guildId: e });
}
function g(e, t, n, l, i) {
    r.h.dispatch({ type: "GUILD_SPACE_EDIT_ADD_WIDGET", guildId: e, widget: (0, u.ox)(t, n, l), insertionTarget: i });
}
function m(e, t, n, l) {
    r.h.dispatch({ type: "GUILD_SPACE_EDIT_MOVE_WIDGET", guildId: e, widgetId: t, targetColumn: n, targetIndex: l });
}
function h(e, t) {
    r.h.dispatch({ type: "GUILD_SPACE_EDIT_REMOVE_WIDGET", guildId: e, widgetId: t });
}
function E(e, t, n) {
    r.h.dispatch({ type: "GUILD_SPACE_EDIT_UPDATE_WIDGET_CONFIG", guildId: e, widgetId: t, config: n });
}
function x(e, t) {
    r.h.dispatch({ type: "GUILD_SPACE_EDIT_UPDATE_HEADER", guildId: e, customBanner: t });
}
async function p(e) {
    let t = a.A.getDraft(e);
    if (null == t || "saving" === a.A.getSaveStatus(e)) return;
    let n = {};
    void 0 !== t.header.custom_banner && (n.custom_banner = t.header.custom_banner);
    let s = {
            header: n,
            widgets: t.widgets.map((e) => {
                let { id: t, type: n, position: l, config: r } = e,
                    i = { type: n, position: l, config: (0, u.y0)(r) };
                return ((0, u.Ny)(t) || (i.id = t), i);
            }),
        },
        o = c++;
    r.h.dispatch({ type: "GUILD_SPACE_EDIT_SAVE_START", guildId: e, requestId: o });
    try {
        let { body: t } = await l.Bo.put({ url: d.Rsh.GUILD_SPACE(e), body: s, rejectWithError: !0 });
        r.h.dispatch({ type: "GUILD_SPACE_UPDATE_SUCCESS", guildId: e, space: t });
    } catch (a) {
        let n = (0, u.GE)(a, t.widgets),
            l = n?.message;
        if (null != n) {
            let t = i.A.getWidget(e, n.type)?.name;
            null != t && (l = `${t}: ${n.message}`);
        }
        r.h.dispatch({ type: "GUILD_SPACE_EDIT_SAVE_FAILURE", guildId: e, requestId: o, errorMessage: l });
    }
}
