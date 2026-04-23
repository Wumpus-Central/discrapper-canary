"use strict";
s.d(t, { e: () => l });
var a = s(64700),
    r = s(716965),
    n = s(533553),
    i = s(985018);
function l(e, t, s) {
    let [l, o] = a.useState(!1),
        [c, d] = a.useState(null),
        u = a.useCallback(async () => {
            try {
                o(!0);
                let s = await (0, r.cG)(e);
                o(!1),
                    t({
                        userCode: e,
                        clientId: s.body.client_id,
                        scopes: s.body.scopes,
                        twoWayLinkCode: s.body.two_way_link_code,
                    });
            } catch (e) {
                var a;
                d(
                    429 === (a = e?.status)
                        ? i.intl.string(i.t.BPmZvj)
                        : 404 === a || 400 === a
                          ? i.intl.string(i.t.aWa1Pw)
                          : i.intl.string(i.t.JNQRU4),
                ),
                    o(!1),
                    e?.status === 401 && s();
            }
        }, [e, t, s]);
    return (
        a.useEffect(() => {
            e.length === n.D.USER_CODE_LENGTH ? u() : d(null);
        }, [e, u]),
        { manualSubmit: u, error: c, submitting: l }
    );
}
