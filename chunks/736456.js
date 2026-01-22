n.d(t, { A: () => s }), n(896048);
var r = n(64700),
    i = n(198982),
    l = n(627363);
function s() {
    let [e, t] = r.useState(!1),
        [n, s] = r.useState(),
        a = r.useRef(null);
    return {
        createGuildApplication: async (e, n, r, c) => {
            s(void 0);
            try {
                return (
                    t(!0),
                    null == a.current &&
                        (a.current = await l.Ay.createApplication({
                            name: c,
                            guildId: e.id,
                            type: r,
                            teamId: n,
                        })),
                    await l.Ay.getApplicationsForGuild(e.id, {
                        type: r,
                        includeTeam: !0,
                    }),
                    !0
                );
            } catch (e) {
                return s(new i.LG(e)), !1;
            } finally {
                t(!1);
            }
        },
        submitting: e,
        error: n,
    };
}
