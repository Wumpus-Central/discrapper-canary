n.d(t, {
    Z: function () {
        return s;
    }
}),
    n(47120);
var i = n(192379),
    r = n(881052),
    l = n(728345);
function s() {
    let [e, t] = i.useState(!1),
        [n, s] = i.useState(),
        a = i.useRef();
    return {
        createGuildApplication: async (e, n, i, o) => {
            s(void 0);
            try {
                if ((t(!0), null == a.current)) {
                    let t = await l.ZP.createApplication({
                        name: o,
                        guildId: e.id,
                        type: i,
                        teamId: n
                    });
                    a.current = t;
                }
                return (
                    await l.ZP.getApplicationsForGuild(e.id, {
                        type: i,
                        includeTeam: !0
                    }),
                    !0
                );
            } catch (e) {
                return s(new r.Hx(e)), !1;
            } finally {
                t(!1);
            }
        },
        submitting: e,
        error: n
    };
}
