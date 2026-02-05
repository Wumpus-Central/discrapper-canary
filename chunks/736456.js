"use strict";
n.d(t, { A: () => r });
var i = n(64700),
    s = n(198982),
    l = n(627363);
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
                        (a.current = await l.Ay.createApplication({ name: o, guildId: e.id, type: i, teamId: n })),
                    await l.Ay.getApplicationsForGuild(e.id, { type: i, includeTeam: !0 }),
                    !0
                );
            } catch (e) {
                return r(new s.LG(e)), !1;
            } finally {
                t(!1);
            }
        },
        submitting: e,
        error: n,
    };
}
