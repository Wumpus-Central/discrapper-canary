n.d(t, { A: () => r });
var i = n(64700),
    l = n(198982),
    s = n(627363);
function r() {
    let [e, t] = i.useState(!1),
        [n, r] = i.useState(),
        a = i.useRef(null);
    return {
        createGuildApplication: async (e, n, i, o) => {
            r(void 0);
            try {
                return (
                    t(!0),
                    null == a.current &&
                        (a.current = await s.Ay.createApplication({ name: o, guildId: e.id, type: i, teamId: n })),
                    await s.Ay.getApplicationsForGuild(e.id, { type: i, includeTeam: !0 }),
                    !0
                );
            } catch (e) {
                return r(new l.LG(e)), !1;
            } finally {
                t(!1);
            }
        },
        submitting: e,
        error: n,
    };
}
