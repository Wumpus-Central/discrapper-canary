r.d(e, { GC: () => h, HN: () => _, Jt: () => u, WV: () => f, t$: () => p, tA: () => o });
var s = r(636537),
    n = r(228366),
    i = r(759532),
    a = r(679787),
    l = r(652215),
    d = r(375708);
let c = /^#?[0-9a-fA-F]{6}$/;
function E(t) {
    if (!c.test(t)) throw Error("Invalid guild theme preview color.");
    let e = t.toUpperCase();
    return e.startsWith("#") ? e : `#${e}`;
}
function o(t) {
    n.h.dispatch({ type: "GUILD_THEME_PREVIEW_START", ...t });
}
function u(t) {
    n.h.dispatch({ type: "GUILD_THEME_PREVIEW_TRANSFER_OWNERSHIP", owner: t });
}
function h(t) {
    n.h.dispatch({ type: "GUILD_THEME_PREVIEW_SELECT_PRESET", presetId: t });
}
function p(t) {
    n.h.dispatch({ type: "GUILD_THEME_PREVIEW_UPDATE_CUSTOM", ...t, colors: t.colors.map(E) });
}
function f() {
    n.h.dispatch({ type: "GUILD_THEME_PREVIEW_END" });
}
async function _() {
    let t = i.Ay.guildId,
        e = i.Ay.draft;
    if (null == t) return;
    let r = i.Ay.draftEnabled;
    n.h.dispatch({ type: "GUILD_THEME_PREVIEW_SAVE_START" });
    try {
        let i = await s.Bo.patch({
                url: l.Rsh.GUILD_THEME(t),
                body: { ...(0, a.QK)(e), enabled: r },
                rejectWithError: !0,
            }),
            d = { ...(0, a.QK)(e), enabled: r },
            c = i.body,
            E = c?.theme !== void 0 ? c.theme : d,
            o = (0, a.UW)(E);
        n.h.dispatch({ type: "GUILD_THEME_PREVIEW_SAVE_SUCCESS", guildId: t, guildTheme: o });
    } catch (r) {
        let e = r?.body?.message ?? r?.message ?? d.intl.string(d.t.fEptJP);
        throw (n.h.dispatch({ type: "GUILD_THEME_PREVIEW_SAVE_FAILURE", guildId: t, error: e }), r);
    }
}
