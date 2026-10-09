n.d(t, { L: () => _ });
var i = n(562708),
    r = n(73153),
    a = n(587895),
    s = n(395671),
    l = n(403362),
    o = n(499785),
    d = n(933958),
    c = n(652215);
function u(e, t, n) {
    let { guildId: i } = n;
    (i === e || (null == i && null == e)) && t();
}
async function _(e) {
    let { guildId: t, force: n = !1 } = e,
        _ = d.Ay.getShelfActivities(t),
        E = _.map((e) => a.A.getApplication(e.application_id)).filter(l.Vq);
    if (!n && !d.Ay.shouldFetchShelf(t)) {
        if (d.Ay.getShelfFetchStatus(t)?.isFetching) {
            let e,
                n,
                i = new Promise((n) => {
                    ((e = u.bind(null, t, n)), r.h.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", e));
                }),
                a = new Promise((e) => {
                    ((n = u.bind(null, t, e)), r.h.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", n));
                });
            (await Promise.race([i, a]),
                null != e && (r.h.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", e), (e = void 0)),
                null != n && (r.h.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", n), (n = void 0)));
        }
        return { activityConfigs: _, applications: E };
    }
    try {
        r.h.dispatch({ type: "EMBEDDED_ACTIVITY_FETCH_SHELF", guildId: t });
        let e = void 0 !== t && "" !== t ? { guild_id: t } : void 0,
            n = await o.A.get({
                url: c.Rsh.ACTIVITY_SHELF,
                query: e,
                trackedActionData: {
                    event: i.NetworkActionNames.EMBEDDED_ACTIVITIES_FETCH_SHELF,
                    properties: { guild_id: t },
                },
                retries: 0,
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
            a = n.body.activities ?? [],
            l = n.body.applications ?? [],
            d = n.body.assets ?? {};
        return (
            r.h.dispatch({
                type: "EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS",
                guildId: t,
                activities: a,
                applications: l,
                assets: d,
            }),
            l.length > 0 && r.h.dispatch({ type: "APPLICATIONS_FETCH_SUCCESS", applications: l }),
            { activityConfigs: a, applications: l.map((e) => s.Ay.createFromServer(e)) }
        );
    } catch (e) {
        return (
            r.h.dispatch({ type: "EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", guildId: t }),
            { activityConfigs: _, applications: E }
        );
    }
}
