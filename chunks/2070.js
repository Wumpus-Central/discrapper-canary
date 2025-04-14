n.d(t, { Z: () => l }), n(388685);
var r = n(192379),
    i = n(881052),
    s = n(728345);
function l() {
    let [e, t] = r.useState(!1),
        [n, l] = r.useState(),
        a = r.useRef(null);
    return {
        createGuildApplication: async (e, n, r, o) => {
            l(void 0);
            try {
                return (
                    t(!0),
                    null == a.current &&
                        (a.current = await s.ZP.createApplication({
                            name: o,
                            guildId: e.id,
                            type: r,
                            teamId: n
                        })),
                    await s.ZP.getApplicationsForGuild(e.id, {
                        type: r,
                        includeTeam: !0
                    }),
                    !0
                );
            } catch (e) {
                return l(new i.Hx(e)), !1;
            } finally {
                t(!1);
            }
        },
        submitting: e,
        error: n
    };
}
