n.d(t, { Z: () => s }), n(388685);
var r = n(192379),
    i = n(881052),
    l = n(728345);
function s() {
    let [e, t] = r.useState(!1),
        [n, s] = r.useState(),
        a = r.useRef(null);
    return {
        createGuildApplication: async (e, n, r, o) => {
            s(void 0);
            try {
                return (
                    t(!0),
                    null == a.current &&
                        (a.current = await l.ZP.createApplication({
                            name: o,
                            guildId: e.id,
                            type: r,
                            teamId: n
                        })),
                    await l.ZP.getApplicationsForGuild(e.id, {
                        type: r,
                        includeTeam: !0
                    }),
                    !0
                );
            } catch (e) {
                return s(new i.Hx(e)), !1;
            } finally {
                t(!1);
            }
        },
        submitting: e,
        error: n
    };
}
