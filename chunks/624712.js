n.d(t, {
    A: () => O,
}),
    n(896048);
var r = n(627968);
n(64700);
var i = n(562465),
    l = n(451988),
    a = n(397927),
    s = n(339048),
    o = n(10716),
    c = n(587895),
    u = n(287809),
    d = n(469778),
    p = n(147964),
    h = n(927813),
    g = n(837921),
    m = n(636401),
    f = n(613057),
    A = n(652215);

function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = 10 * h.A.Millis.SECOND,
    O = {
        [A.e$_.VALIDATE_APPLICATION]: {
            scope: f.hj,
            handler(e) {
                let { socket: t } = e,
                    i = t.application.id;
                try {
                    var o;
                    let e;
                    if (null == i)
                        throw new m.A(
                            {
                                errorCode: A.Lw6.INVALID_COMMAND,
                            },
                            "No application.",
                        );
                    let t = c.A.getApplication(i);
                    if (null == t)
                        throw new m.A(
                            {
                                errorCode: A.Lw6.INVALID_ENTITLEMENT,
                            },
                            "SKU does not exist.",
                        );
                    let n = t.primarySkuId;
                    if (null == n)
                        throw new m.A(
                            {
                                errorCode: A.Lw6.INVALID_ENTITLEMENT,
                            },
                            "SKU does not exist.",
                        );
                    return Promise.race([
                        ((o = t.id),
                        (e = d.A.isEntitledToSku(u.default.getCurrentUser(), n, o)),
                        null != e
                            ? Promise.resolve(e)
                            : (0, s.LM)(o).then(
                                  () => !0 === d.A.isEntitledToSku(u.default.getCurrentUser(), n, o),
                              )).then((e) => {
                            if (!e)
                                throw new m.A(
                                    {
                                        errorCode: A.Lw6.INVALID_ENTITLEMENT,
                                    },
                                    "User does not have entitlement.",
                                );
                        }),
                        (0, l.BK)(E).then(() => {
                            throw new m.A(
                                {
                                    errorCode: A.Lw6.INVALID_ENTITLEMENT,
                                },
                                "Timed out fetching entitlement.",
                            );
                        }),
                    ]);
                } catch (e) {
                    throw (
                        (e.code === A.Lw6.INVALID_ENTITLEMENT &&
                            (g.Ay.focus(null, !0),
                            (0, a.mMO)(async () => {
                                let { default: e } = await n.e("26766").then(n.bind(n, 448701));
                                return (t) =>
                                    (0, r.jsx)(
                                        e,
                                        b(_({}, t), {
                                            applicationId: i,
                                        }),
                                    );
                            })),
                        e)
                    );
                }
            },
        },
        [A.e$_.GET_ENTITLEMENT_TICKET]: {
            scope: f.hj,
            handler(e) {
                let { socket: t } = e,
                    l = t.application.id;
                if (null == l)
                    throw new m.A(
                        {
                            errorCode: A.Lw6.INVALID_COMMAND,
                        },
                        "No application.",
                    );
                return i.Bo.post({
                    url: A.Rsh.ENTITLEMENT_TICKET(l),
                    body: {
                        test_mode: p.A.inTestModeForApplication(l) || o.A.inDevModeForApplication(l),
                    },
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
                            (g.Ay.focus(null, !0),
                            (0, a.mMO)(async () => {
                                let { default: e } = await n.e("26766").then(n.bind(n, 448701));
                                return (t) =>
                                    (0, r.jsx)(
                                        e,
                                        b(_({}, t), {
                                            applicationId: l,
                                        }),
                                    );
                            }),
                            e)
                        );
                    });
            },
        },
    };
