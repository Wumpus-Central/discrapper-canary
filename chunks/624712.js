n.d(t, { A: () => f });
var i = n(627968);
n(64700);
var r = n(562465),
    a = n(451988),
    l = n(397927),
    s = n(339048),
    o = n(10716),
    d = n(587895),
    c = n(287809),
    u = n(469778),
    A = n(147964),
    h = n(927813),
    _ = n(837921),
    m = n(636401),
    p = n(613057),
    g = n(652215);
let E = 10 * h.A.Millis.SECOND,
    f = {
        [g.e$_.VALIDATE_APPLICATION]: {
            scope: p.hj,
            handler(e) {
                let { socket: t } = e,
                    r = t.application.id;
                try {
                    var o;
                    let e;
                    if (null == r) throw new m.A({ errorCode: g.Lw6.INVALID_COMMAND }, "No application.");
                    let t = d.A.getApplication(r);
                    if (null == t) throw new m.A({ errorCode: g.Lw6.INVALID_ENTITLEMENT }, "SKU does not exist.");
                    let n = t.primarySkuId;
                    if (null == n) throw new m.A({ errorCode: g.Lw6.INVALID_ENTITLEMENT }, "SKU does not exist.");
                    return Promise.race([
                        ((o = t.id),
                        (e = u.A.isEntitledToSku(c.default.getCurrentUser(), n, o)),
                        null != e
                            ? Promise.resolve(e)
                            : (0, s.LM)(o).then(
                                  () => !0 === u.A.isEntitledToSku(c.default.getCurrentUser(), n, o),
                              )).then((e) => {
                            if (!e)
                                throw new m.A(
                                    { errorCode: g.Lw6.INVALID_ENTITLEMENT },
                                    "User does not have entitlement.",
                                );
                        }),
                        (0, a.BK)(E).then(() => {
                            throw new m.A({ errorCode: g.Lw6.INVALID_ENTITLEMENT }, "Timed out fetching entitlement.");
                        }),
                    ]);
                } catch (e) {
                    throw (
                        (e.code === g.Lw6.INVALID_ENTITLEMENT &&
                            (_.Ay.focus(null, !0),
                            (0, l.mMO)(async () => {
                                let { default: e } = await n.e("26766").then(n.bind(n, 448701));
                                return (t) => (0, i.jsx)(e, { ...t, applicationId: r });
                            })),
                        e)
                    );
                }
            },
        },
        [g.e$_.GET_ENTITLEMENT_TICKET]: {
            scope: p.hj,
            handler(e) {
                let { socket: t } = e,
                    a = t.application.id;
                if (null == a) throw new m.A({ errorCode: g.Lw6.INVALID_COMMAND }, "No application.");
                return r.Bo.post({
                    url: g.Rsh.ENTITLEMENT_TICKET(a),
                    body: { test_mode: A.A.inTestModeForApplication(a) || o.A.inDevModeForApplication(a) },
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
                            (_.Ay.focus(null, !0),
                            (0, l.mMO)(async () => {
                                let { default: e } = await n.e("26766").then(n.bind(n, 448701));
                                return (t) => (0, i.jsx)(e, { ...t, applicationId: a });
                            }),
                            e)
                        );
                    });
            },
        },
    };
