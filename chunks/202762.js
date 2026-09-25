n.d(t, { Fj: () => x, GP: () => h, Vk: () => E, Wd: () => o, iX: () => f, j0: () => m, lr: () => g, pC: () => p });
var l = n(636537),
    r = n(228366),
    i = n(960960),
    a = n(88592),
    u = n(716357),
    s = n(855823),
    c = n(652215);
let d = 0;
function o(e) {
    let t = u.A.getSpace(e);
    null != t && r.h.dispatch({ type: "GUILD_SPACE_EDIT_START", guildId: e, space: t });
}
function f(e) {
    r.h.dispatch({ type: "GUILD_SPACE_EDIT_CANCEL", guildId: e });
}
function g(e, t, n, l, i) {
    let a = (0, s.ox)(t, n, l);
    return (r.h.dispatch({ type: "GUILD_SPACE_EDIT_ADD_WIDGET", guildId: e, widget: a, insertionTarget: i }), a.id);
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
function p(e, t) {
    r.h.dispatch({ type: "GUILD_SPACE_EDIT_UPDATE_HEADER", guildId: e, customBanner: t });
}
async function x(e) {
    let t = a.A.getDraft(e);
    if (null == t || "saving" === a.A.getSaveStatus(e)) return;
    let n = {};
    void 0 !== t.header.custom_banner && (n.custom_banner = t.header.custom_banner);
    let u = {
            header: n,
            widgets: t.widgets.map((e) => {
                let { id: t, type: n, position: l, config: r } = e,
                    i = { type: n, position: l, config: (0, s.y0)(r) };
                return ((0, s.Ny)(t) || (i.id = t), i);
            }),
        },
        o = d++;
    r.h.dispatch({ type: "GUILD_SPACE_EDIT_SAVE_START", guildId: e, requestId: o });
    try {
        let { body: t } = await l.Bo.put({ url: c.Rsh.GUILD_SPACE(e), body: u, rejectWithError: !0 });
        r.h.dispatch({ type: "GUILD_SPACE_UPDATE_SUCCESS", guildId: e, space: t });
    } catch (a) {
        let n = (0, s.GE)(a, t.widgets),
            l = n?.message;
        if (null != n) {
            let t = i.A.getWidget(e, n.type)?.name;
            null != t && (l = `${t}: ${n.message}`);
        }
        r.h.dispatch({ type: "GUILD_SPACE_EDIT_SAVE_FAILURE", guildId: e, requestId: o, errorMessage: l });
    }
}
