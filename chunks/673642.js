var r = e(620632),
    _ = e(73153),
    i = e(909289),
    h = e(679787),
    a = e(652215),
    p = e(792996);
let s = /^#?[0-9a-fA-F]{6}$/;
function c(t) {
    if (!s.test(t)) throw Error("Invalid guild theme preview color.");
    let E = t.toUpperCase();
    return E.startsWith("#") ? E : `#${E}`;
}
e.d(
    E,
    {},
    {
        GC: function (t) {
            _.h.dispatch({ type: "GUILD_THEME_PREVIEW_SELECT_PRESET", presetId: t });
        },
        HN: async function () {
            let t = i.Ay.guildId,
                E = i.Ay.draft;
            if (null == t) return;
            let e = i.Ay.draftEnabled;
            _.h.dispatch({ type: "GUILD_THEME_PREVIEW_SAVE_START" });
            try {
                let i = await r.Bo.patch({
                        url: a.Rsh.GUILD_THEME(t),
                        body: { ...(0, h.QK)(E), enabled: e },
                        rejectWithError: !0,
                    }),
                    p = { ...(0, h.QK)(E), enabled: e },
                    s = i.body,
                    c = s?.theme !== void 0 ? s.theme : p,
                    o = (0, h.UW)(c);
                _.h.dispatch({ type: "GUILD_THEME_PREVIEW_SAVE_SUCCESS", guildId: t, guildTheme: o });
            } catch (e) {
                let E = e?.body?.message ?? e?.message ?? p.intl.string(p.t.fEptJP);
                throw (_.h.dispatch({ type: "GUILD_THEME_PREVIEW_SAVE_FAILURE", guildId: t, error: E }), e);
            }
        },
        Jt: function (t) {
            _.h.dispatch({ type: "GUILD_THEME_PREVIEW_TRANSFER_OWNERSHIP", owner: t });
        },
        WV: function () {
            _.h.dispatch({ type: "GUILD_THEME_PREVIEW_END" });
        },
        t$: function (t) {
            _.h.dispatch({ type: "GUILD_THEME_PREVIEW_UPDATE_CUSTOM", ...t, colors: t.colors.map(c) });
        },
        tA: function (t) {
            _.h.dispatch({ type: "GUILD_THEME_PREVIEW_START", ...t });
        },
    },
);
