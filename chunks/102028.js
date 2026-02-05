"use strict";
a.d(t, { e: () => l });
var s = a(64700),
    r = a(716965),
    n = a(533553),
    i = a(985018);
function l(e, t, a) {
    let [l, o] = s.useState(!1),
        [c, d] = s.useState(null),
        u = s.useCallback(async () => {
            try {
                o(!0);
                let a = await (0, r.cG)(e);
                o(!1),
                    t({
                        userCode: e,
                        clientId: a.body.client_id,
                        scopes: a.body.scopes,
                        twoWayLinkCode: a.body.two_way_link_code,
                    });
            } catch (e) {
                var s;
                d(
                    429 === (s = e?.status)
                        ? i.intl.string(i.t.BPmZvj)
                        : 404 === s || 400 === s
                          ? i.intl.string(i.t.aWa1Pw)
                          : i.intl.string(i.t.JNQRU4),
                ),
                    o(!1),
                    e?.status === 401 && a();
            }
        }, [e, t, a]);
    return (
        s.useEffect(() => {
            e.length === n.D.USER_CODE_LENGTH ? u() : d(null);
        }, [e, u]),
        { manualSubmit: u, error: c, submitting: l }
    );
}
