n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var r = n(562465),
    a = n(451988),
    l = n(192308),
    s = n(339048),
    o = n(587895),
    d = n(977445),
    u = n(287809),
    c = n(469778),
    A = n(927813),
    h = n(837921),
    _ = n(636401),
    E = n(613057),
    p = n(652215);
let m = 10 * A.A.Millis.SECOND,
    g = {
        [p.e$_.VALIDATE_APPLICATION]: {
            scope: E.hj,
            handler(e) {
                let { socket: t } = e,
                    r = t.application.id;
                try {
                    var d;
                    let e;
                    if (null == r) throw new _.A({ errorCode: p.Lw6.INVALID_COMMAND }, "No application.");
                    let t = o.A.getApplication(r);
                    if (null == t) throw new _.A({ errorCode: p.Lw6.INVALID_ENTITLEMENT }, "SKU does not exist.");
                    let n = t.primarySkuId;
                    if (null == n) throw new _.A({ errorCode: p.Lw6.INVALID_ENTITLEMENT }, "SKU does not exist.");
                    return Promise.race([
                        ((d = t.id),
                        (e = c.A.isEntitledToSku(u.default.getCurrentUser(), n, d)),
                        null != e
                            ? Promise.resolve(e)
                            : (0, s.LM)(d).then(
                                  () => !0 === c.A.isEntitledToSku(u.default.getCurrentUser(), n, d),
                              )).then((e) => {
                            if (!e)
                                throw new _.A(
                                    { errorCode: p.Lw6.INVALID_ENTITLEMENT },
                                    "User does not have entitlement.",
                                );
                        }),
                        (0, a.BK)(m).then(() => {
                            throw new _.A({ errorCode: p.Lw6.INVALID_ENTITLEMENT }, "Timed out fetching entitlement.");
                        }),
                    ]);
                } catch (e) {
                    throw (
                        (e.code === p.Lw6.INVALID_ENTITLEMENT &&
                            (h.Ay.focus(null, !0),
                            (0, l.openModalLazy)(async () => {
                                let { default: e } = await n.e("26766").then(n.bind(n, 448701));
                                return (t) => (0, i.jsx)(e, { ...t, applicationId: r });
                            })),
                        e)
                    );
                }
            },
        },
        [p.e$_.GET_ENTITLEMENT_TICKET]: {
            scope: E.hj,
            handler(e) {
                let { socket: t } = e,
                    a = t.application.id;
                if (null == a) throw new _.A({ errorCode: p.Lw6.INVALID_COMMAND }, "No application.");
                return r.Bo.post({
                    url: p.Rsh.ENTITLEMENT_TICKET(a),
                    body: { test_mode: (0, d.F)(a) },
                    retries: 3,
                    oldFormErrors: !0,
                    rejectWithError: !1,
                })
                    .then((e) => {
                        let { body: t } = e;
                        return t;
                    })
                    .catch((e) => {
                        throw (
                            (h.Ay.focus(null, !0),
                            (0, l.openModalLazy)(async () => {
                                let { default: e } = await n.e("26766").then(n.bind(n, 448701));
                                return (t) => (0, i.jsx)(e, { ...t, applicationId: a });
                            }),
                            e)
                        );
                    });
            },
        },
    };
