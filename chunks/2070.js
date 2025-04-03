n.d(t, { Z: () => a }), n(47120);
var r = n(192379),
    i = n(881052),
    s = n(728345);
function a() {
    let [e, t] = r.useState(!1),
        [n, a] = r.useState(),
        l = r.useRef();
    return {
        createGuildApplication: async (e, n, r, o) => {
            a(void 0);
            try {
                return (
                    t(!0),
                    null == l.current &&
                        (l.current = await s.ZP.createApplication({
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
                return a(new i.Hx(e)), !1;
            } finally {
                t(!1);
            }
        },
        submitting: e,
        error: n
    };
}
