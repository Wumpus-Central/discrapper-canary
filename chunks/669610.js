var n = i(620632),
    r = i(73153),
    l = i(627784),
    a = i(327891),
    d = i(951217),
    o = i(652215);
i.d(
    t,
    {},
    {
        B: async function (e) {
            try {
                let {
                    body: { game_organizations: t },
                } = await n.Bo.get({ url: o.Rsh.LINKABLE_GAME_ORGANIZATIONS(e), rejectWithError: !0 });
                return t.map(d.b);
            } catch (e) {
                throw new l.LG(e);
            }
        },
        G: async function (e) {
            if (null != e) {
                r.h.dispatch({ type: "GAME_ORGANIZATION_FETCH_START", guildId: e });
                try {
                    let {
                            body: { game_organization: t, application: i },
                        } = await n.Bo.get({ url: o.Rsh.GAME_ORGANIZATION(e), rejectWithError: !0 }),
                        l = (0, d.p)(t),
                        u = a.Ay.createFromServer(i);
                    r.h.dispatch({ type: "GAME_ORGANIZATION_FETCH_SUCCESS", gameOrganization: l, application: u });
                } catch (i) {
                    let t = new l.LG(i);
                    throw (r.h.dispatch({ type: "GAME_ORGANIZATION_FETCH_FAILURE", guildId: e, error: t }), i);
                }
            }
        },
    },
);
