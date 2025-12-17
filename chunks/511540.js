n.d(t, { c: () => s }), n(388685);
var a = n(473749),
    r = n(489863),
    o = n(828878),
    i = n(388032);
function s(e, t, n) {
    let [s, c] = a.useState(!1),
        [l, d] = a.useState(null),
        u = a.useCallback(async () => {
            try {
                c(!0);
                let n = await (0, r.tV)(e);
                c(!1),
                    t({
                        userCode: e,
                        clientId: n.body.client_id,
                        scopes: n.body.scopes,
                        twoWayLinkCode: n.body.two_way_link_code,
                    });
            } catch (e) {
                var a;
                d(
                    429 === (a = null == e ? void 0 : e.status)
                        ? i.intl.string(i.t.BPmZvj)
                        : 404 === a || 400 === a
                          ? i.intl.string(i.t.aWa1Pw)
                          : i.intl.string(i.t.JNQRU4),
                ),
                    c(!1),
                    (null == e ? void 0 : e.status) === 401 && n();
            }
        }, [e, t, n]);
    return (
        a.useEffect(() => {
            e.length === o.A.USER_CODE_LENGTH ? u() : d(null);
        }, [e, u]),
        {
            manualSubmit: u,
            error: l,
            submitting: s,
        }
    );
}
