n.d(t, { Z: () => a }), n(388685);
var r = n(473749),
    i = n(881052),
    l = n(728345);
function a() {
    let [e, t] = r.useState(!1),
        [n, a] = r.useState(),
        s = r.useRef(null);
    return {
        createGuildApplication: async (e, n, r, o) => {
            a(void 0);
            try {
                return (
                    t(!0),
                    null == s.current &&
                        (s.current = await l.ZP.createApplication({
                            name: o,
                            guildId: e.id,
                            type: r,
                            teamId: n,
                        })),
                    await l.ZP.getApplicationsForGuild(e.id, {
                        type: r,
                        includeTeam: !0,
                    }),
                    !0
                );
            } catch (e) {
                return a(new i.Hx(e)), !1;
            } finally {
                t(!1);
            }
        },
        submitting: e,
        error: n,
    };
}
