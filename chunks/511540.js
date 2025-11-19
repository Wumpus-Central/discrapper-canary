n.d(t, { c: () => s }), n(388685);
var r = n(473749),
    a = n(489863),
    i = n(828878),
    o = n(388032);
function s(e, t, n) {
    let [s, l] = r.useState(!1),
        [c, d] = r.useState(null),
        u = r.useCallback(async () => {
            try {
                l(!0);
                let n = await (0, a.tV)(e);
                l(!1),
                    t({
                        userCode: e,
                        clientId: n.body.client_id,
                        scopes: n.body.scopes,
                        twoWayLinkCode: n.body.two_way_link_code,
                    });
            } catch (e) {
                var r;
                d(
                    429 === (r = null == e ? void 0 : e.status)
                        ? o.intl.string(o.t.BPmZvj)
                        : 404 === r || 400 === r
                          ? o.intl.string(o.t.aWa1Pw)
                          : o.intl.string(o.t.JNQRU4),
                ),
                    l(!1),
                    (null == e ? void 0 : e.status) === 401 && n();
            }
        }, [e, t, n]);
    return (
        r.useEffect(() => {
            e.length === i.A.USER_CODE_LENGTH ? u() : d(null);
        }, [e, u]),
        {
            manualSubmit: u,
            error: c,
            submitting: s,
        }
    );
}
