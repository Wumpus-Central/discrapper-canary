n.d(t, { Z: () => N }), n(47120);
var r = n(200651);
n(192379);
var i = n(544891),
    l = n(846519),
    a = n(481060),
    o = n(496929),
    s = n(115130),
    c = n(812206),
    u = n(594174),
    d = n(580130),
    p = n(695103),
    h = n(70956),
    f = n(998502),
    g = n(996106),
    m = n(186901),
    b = n(981631);
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
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
let O = 10 * h.Z.Millis.SECOND,
    N = {
        [b.Etm.VALIDATE_APPLICATION]: {
            scope: m.lH,
            handler(e) {
                let { socket: t } = e,
                    i = t.application.id;
                try {
                    if (null == i) throw new g.Z({ errorCode: b.lTL.INVALID_COMMAND }, 'No application.');
                    let e = c.Z.getApplication(i);
                    if (null == e) throw new g.Z({ errorCode: b.lTL.INVALID_ENTITLEMENT }, 'SKU does not exist.');
                    let t = e.primarySkuId;
                    if (null == t) throw new g.Z({ errorCode: b.lTL.INVALID_ENTITLEMENT }, 'SKU does not exist.');
                    return Promise.race([
                        (function (e, t) {
                            let n = d.Z.isEntitledToSku(u.default.getCurrentUser(), e, t);
                            return null != n ? Promise.resolve(n) : (0, o.yD)(t).then(() => !0 === d.Z.isEntitledToSku(u.default.getCurrentUser(), e, t));
                        })(t, e.id).then((e) => {
                            if (!e) throw new g.Z({ errorCode: b.lTL.INVALID_ENTITLEMENT }, 'User does not have entitlement.');
                        }),
                        (0, l.GR)(O).then(() => {
                            throw new g.Z({ errorCode: b.lTL.INVALID_ENTITLEMENT }, 'Timed out fetching entitlement.');
                        })
                    ]);
                } catch (e) {
                    throw (
                        (e.code === b.lTL.INVALID_ENTITLEMENT &&
                            (f.ZP.focus(null, !0),
                            (0, a.ZDy)(async () => {
                                let { default: e } = await n.e('48748').then(n.bind(n, 52004));
                                return (t) => (0, r.jsx)(e, E(_({}, t), { applicationId: i }));
                            })),
                        e)
                    );
                }
            }
        },
        [b.Etm.GET_ENTITLEMENT_TICKET]: {
            scope: m.lH,
            handler(e) {
                let { socket: t } = e,
                    l = t.application.id;
                if (null == l) throw new g.Z({ errorCode: b.lTL.INVALID_COMMAND }, 'No application.');
                return i.tn
                    .post({
                        url: b.ANM.ENTITLEMENT_TICKET(l),
                        body: { test_mode: p.Z.inTestModeForApplication(l) || s.Z.inDevModeForApplication(l) },
                        retries: 3,
                        oldFormErrors: !0,
                        rejectWithError: !1
                    })
                    .then((e) => {
                        let { body: t } = e;
                        return t;
                    })
                    .catch((e) => {
                        throw (
                            (f.ZP.focus(null, !0),
                            (0, a.ZDy)(async () => {
                                let { default: e } = await n.e('48748').then(n.bind(n, 52004));
                                return (t) => (0, r.jsx)(e, E(_({}, t), { applicationId: l }));
                            }),
                            e)
                        );
                    });
            }
        }
    };
