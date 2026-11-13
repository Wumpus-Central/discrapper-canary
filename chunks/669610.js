var n = i(620632),
    l = i(73153),
    r = i(627784),
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
                throw new r.LG(e);
            }
        },
        G: async function (e) {
            if (null != e) {
                l.h.dispatch({ type: "GAME_ORGANIZATION_FETCH_START", guildId: e });
                try {
                    let {
                            body: { game_organization: t, application: i, application_config: r },
                        } = await n.Bo.get({ url: o.Rsh.GAME_ORGANIZATION(e), rejectWithError: !0 }),
                        u = (0, d.p)(t),
                        g = a.Ay.createFromServer(i);
                    l.h.dispatch({
                        type: "GAME_ORGANIZATION_FETCH_SUCCESS",
                        gameOrganization: u,
                        application: g,
                        displayNoun: r?.display_noun ?? null,
                    });
                } catch (i) {
                    let t = new r.LG(i);
                    throw (l.h.dispatch({ type: "GAME_ORGANIZATION_FETCH_FAILURE", guildId: e, error: t }), i);
                }
            }
        },
    },
);
