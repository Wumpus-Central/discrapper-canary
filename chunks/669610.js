var i = n(620632),
    l = n(73153),
    s = n(627784),
    r = n(327891),
    a = n(951217),
    o = n(652215);
n.d(
    t,
    {},
    {
        B: async function (e) {
            try {
                let {
                    body: { game_organizations: t },
                } = await i.Bo.get({ url: o.Rsh.LINKABLE_GAME_ORGANIZATIONS(e), rejectWithError: !0 });
                return t.map(a.b);
            } catch (e) {
                throw new s.LG(e);
            }
        },
        G: async function (e) {
            if (null != e) {
                l.h.dispatch({ type: "GAME_ORGANIZATION_FETCH_START", guildId: e });
                try {
                    let {
                            body: { game_organization: t, application: n },
                        } = await i.Bo.get({ url: o.Rsh.GAME_ORGANIZATION(e), rejectWithError: !0 }),
                        s = (0, a.p)(t),
                        d = r.Ay.createFromServer(n);
                    l.h.dispatch({ type: "GAME_ORGANIZATION_FETCH_SUCCESS", gameOrganization: s, application: d });
                } catch (n) {
                    let t = new s.LG(n);
                    throw (l.h.dispatch({ type: "GAME_ORGANIZATION_FETCH_FAILURE", guildId: e, error: t }), n);
                }
            }
        },
    },
);
