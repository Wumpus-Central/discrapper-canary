n.d(t, { Z: () => v }), n(388685);
var r = n(54381);
n(473749);
var i = n(544891),
    l = n(846519),
    a = n(481060),
    s = n(496929),
    o = n(115130),
    c = n(812206),
    u = n(594174),
    d = n(580130),
    p = n(695103),
    f = n(70956),
    g = n(998502),
    h = n(996106),
    m = n(186901),
    _ = n(981631);
function b(e) {
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
function E(e, t) {
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
let O = 10 * f.Z.Millis.SECOND,
    v = {
        [_.Etm.VALIDATE_APPLICATION]: {
            scope: m.lH,
            handler(e) {
                let { socket: t } = e,
                    i = t.application.id;
                try {
                    if (null == i) throw new h.Z({ errorCode: _.lTL.INVALID_COMMAND }, "No application.");
                    let e = c.Z.getApplication(i);
                    if (null == e) throw new h.Z({ errorCode: _.lTL.INVALID_ENTITLEMENT }, "SKU does not exist.");
                    let t = e.primarySkuId;
                    if (null == t) throw new h.Z({ errorCode: _.lTL.INVALID_ENTITLEMENT }, "SKU does not exist.");
                    return Promise.race([
                        (function (e, t) {
                            let n = d.Z.isEntitledToSku(u.default.getCurrentUser(), e, t);
                            return null != n
                                ? Promise.resolve(n)
                                : (0, s.yD)(t).then(() => !0 === d.Z.isEntitledToSku(u.default.getCurrentUser(), e, t));
                        })(t, e.id).then((e) => {
                            if (!e)
                                throw new h.Z(
                                    { errorCode: _.lTL.INVALID_ENTITLEMENT },
                                    "User does not have entitlement.",
                                );
                        }),
                        (0, l.GR)(O).then(() => {
                            throw new h.Z({ errorCode: _.lTL.INVALID_ENTITLEMENT }, "Timed out fetching entitlement.");
                        }),
                    ]);
                } catch (e) {
                    throw (
                        (e.code === _.lTL.INVALID_ENTITLEMENT &&
                            (g.ZP.focus(null, !0),
                            (0, a.ZDy)(async () => {
                                let { default: e } = await n.e("48748").then(n.bind(n, 52004));
                                return (t) => (0, r.jsx)(e, E(b({}, t), { applicationId: i }));
                            })),
                        e)
                    );
                }
            },
        },
        [_.Etm.GET_ENTITLEMENT_TICKET]: {
            scope: m.lH,
            handler(e) {
                let { socket: t } = e,
                    l = t.application.id;
                if (null == l) throw new h.Z({ errorCode: _.lTL.INVALID_COMMAND }, "No application.");
                return i.tn
                    .post({
                        url: _.ANM.ENTITLEMENT_TICKET(l),
                        body: { test_mode: p.Z.inTestModeForApplication(l) || o.Z.inDevModeForApplication(l) },
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
                            (g.ZP.focus(null, !0),
                            (0, a.ZDy)(async () => {
                                let { default: e } = await n.e("48748").then(n.bind(n, 52004));
                                return (t) => (0, r.jsx)(e, E(b({}, t), { applicationId: l }));
                            }),
                            e)
                        );
                    });
            },
        },
    };
