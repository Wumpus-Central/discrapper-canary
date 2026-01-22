r.d(t, {
    e: () => l,
}),
    r(896048);
var a = r(64700),
    n = r(716965),
    s = r(533553),
    i = r(985018);

function l(e, t, r) {
    let [l, c] = a.useState(!1),
        [o, d] = a.useState(null),
        u = a.useCallback(async () => {
            try {
                c(!0);
                let r = await (0, n.cG)(e);
                c(!1),
                    t({
                        userCode: e,
                        clientId: r.body.client_id,
                        scopes: r.body.scopes,
                        twoWayLinkCode: r.body.two_way_link_code,
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
                    (null == e ? void 0 : e.status) === 401 && r();
            }
        }, [e, t, r]);
    return (
        a.useEffect(() => {
            e.length === s.D.USER_CODE_LENGTH ? u() : d(null);
        }, [e, u]),
        {
            manualSubmit: u,
            error: o,
            submitting: l,
        }
    );
}
