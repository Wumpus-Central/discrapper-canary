n.d(t, { c: () => i }), n(388685);
var r = n(192379),
    a = n(489863),
    o = n(828878),
    l = n(388032);
function i(e, t, n) {
    let [i, s] = r.useState(!1),
        [c, d] = r.useState(null),
        u = r.useCallback(async () => {
            try {
                s(!0);
                let n = await (0, a.tV)(e);
                s(!1),
                    t({
                        userCode: e,
                        clientId: n.body.client_id,
                        scopes: n.body.scopes,
                        twoWayLinkCode: n.body.two_way_link_code
                    });
            } catch (e) {
                var r;
                d(429 === (r = null == e ? void 0 : e.status) ? l.NW.string(l.t.BPmZvr) : 404 === r || 400 === r ? l.NW.string(l.t.aWa1Pz) : l.NW.string(l.t.JNQRU1)), s(!1), (null == e ? void 0 : e.status) === 401 && n();
            }
        }, [e, t, n]);
    return (
        r.useEffect(() => {
            e.length === o.A.USER_CODE_LENGTH ? u() : d(null);
        }, [e, u]),
        {
            manualSubmit: u,
            error: c,
            submitting: i
        }
    );
}
