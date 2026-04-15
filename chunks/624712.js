n.d(t, { A: () => E });
var i = n(627968);
n(64700);
var l = n(562465),
    a = n(451988),
    r = n(397927),
    s = n(339048),
    o = n(587895),
    d = n(977445),
    c = n(287809),
    u = n(469778),
    A = n(927813),
    h = n(837921),
    _ = n(636401),
    m = n(613057),
    g = n(652215);
let p = 10 * A.A.Millis.SECOND,
    E = {
        [g.e$_.VALIDATE_APPLICATION]: {
            scope: m.hj,
            handler(e) {
                let { socket: t } = e,
                    l = t.application.id;
                try {
                    var d;
                    let e;
                    if (null == l) throw new _.A({ errorCode: g.Lw6.INVALID_COMMAND }, "No application.");
                    let t = o.A.getApplication(l);
                    if (null == t) throw new _.A({ errorCode: g.Lw6.INVALID_ENTITLEMENT }, "SKU does not exist.");
                    let n = t.primarySkuId;
                    if (null == n) throw new _.A({ errorCode: g.Lw6.INVALID_ENTITLEMENT }, "SKU does not exist.");
                    return Promise.race([
                        ((d = t.id),
                        (e = u.A.isEntitledToSku(c.default.getCurrentUser(), n, d)),
                        null != e
                            ? Promise.resolve(e)
                            : (0, s.LM)(d).then(
                                  () => !0 === u.A.isEntitledToSku(c.default.getCurrentUser(), n, d),
                              )).then((e) => {
                            if (!e)
                                throw new _.A(
                                    { errorCode: g.Lw6.INVALID_ENTITLEMENT },
                                    "User does not have entitlement.",
                                );
                        }),
                        (0, a.BK)(p).then(() => {
                            throw new _.A({ errorCode: g.Lw6.INVALID_ENTITLEMENT }, "Timed out fetching entitlement.");
                        }),
                    ]);
                } catch (e) {
                    throw (
                        (e.code === g.Lw6.INVALID_ENTITLEMENT &&
                            (h.Ay.focus(null, !0),
                            (0, r.mMO)(async () => {
                                let { default: e } = await n.e("26766").then(n.bind(n, 448701));
                                return (t) => (0, i.jsx)(e, { ...t, applicationId: l });
                            })),
                        e)
                    );
                }
            },
        },
        [g.e$_.GET_ENTITLEMENT_TICKET]: {
            scope: m.hj,
            handler(e) {
                let { socket: t } = e,
                    a = t.application.id;
                if (null == a) throw new _.A({ errorCode: g.Lw6.INVALID_COMMAND }, "No application.");
                return l.Bo.post({
                    url: g.Rsh.ENTITLEMENT_TICKET(a),
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
                            (0, r.mMO)(async () => {
                                let { default: e } = await n.e("26766").then(n.bind(n, 448701));
                                return (t) => (0, i.jsx)(e, { ...t, applicationId: a });
                            }),
                            e)
                        );
                    });
            },
        },
    };
