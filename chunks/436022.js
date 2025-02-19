e.d(r, { default: () => p }), e(47120), e(230036);
var n = e(200651),
    o = e(192379),
    i = e(481060),
    s = e(355467),
    l = e(362786),
    c = e(388032),
    u = e(851178);
let a = {
    [l.HZ.GIFTING_REFUND]: () => c.NW.string(c.t.o9vzKy),
    [l.HZ.BUYERS_REMORSE]: () => c.NW.string(c.t['OaU+ER']),
    [l.HZ.WRONG_PURCHASE]: () => c.NW.string(c.t.eAeOKC),
    [l.HZ.FORGOT_TO_CANCEL]: () => c.NW.string(c.t.IoDJdX),
    [l.HZ.SERVER_BOOSTING_COOLDOWN]: () => c.NW.string(c.t.MGTxUl),
    [l.HZ.USER_CONFUSION]: () => c.NW.string(c.t.PY5tHx),
    [l.HZ.WANT_TO_SWITCH_TIERS]: () => c.NW.string(c.t['o+aUCg']),
    [l.HZ.DONT_NEED]: () => c.NW.string(c.t['R++9BA']),
    [l.HZ.OTHER]: () => c.NW.string(c.t['sVo/9/'])
};
function p(t) {
    let r;
    var e,
        p,
        { payment: O, reportProblemUrl: b, onClose: d } = t,
        f = (function (t, r) {
            if (null == t) return {};
            var e,
                n,
                o = (function (t, r) {
                    if (null == t) return {};
                    var e,
                        n,
                        o = {},
                        i = Object.keys(t);
                    for (n = 0; n < i.length; n++) (e = i[n]), r.indexOf(e) >= 0 || (o[e] = t[e]);
                    return o;
                })(t, r);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                for (n = 0; n < i.length; n++) (e = i[n]), !(r.indexOf(e) >= 0) && Object.prototype.propertyIsEnumerable.call(t, e) && (o[e] = t[e]);
            }
            return o;
        })(t, ['payment', 'reportProblemUrl', 'onClose']);
    let [g, m] = o.useState(null),
        [N, y] = o.useState(!1),
        [j, x] = o.useState(null);
    r = N
        ? (0, n.jsx)(i.$jN, {})
        : null != j
          ? (0, n.jsxs)('div', {
                children: [
                    (0, n.jsx)(i.Text, {
                        variant: 'text-md/normal',
                        className: u.refundErrorTitle,
                        children: c.NW.format(c.t['1LaEh4'], { error: j })
                    }),
                    (0, n.jsx)(i.Text, {
                        className: u.refundErrorSupport,
                        variant: 'text-sm/normal',
                        children: c.NW.format(c.t.cugISU, { supportUrl: b })
                    })
                ]
            })
          : (0, n.jsxs)('div', {
                className: u.body,
                children: [
                    (0, n.jsx)(i.q4e, {
                        options: Object.entries(a)
                            .sort((t, r) => {
                                let [e] = t,
                                    [n] = r;
                                return Number(e) === l.HZ.OTHER ? 1 : Number(n) === l.HZ.OTHER ? -1 : 0;
                            })
                            .map((t) => {
                                let [r, e] = t;
                                return {
                                    value: parseInt(r),
                                    label: e()
                                };
                            }),
                        onChange: (t) => m(t),
                        value: g,
                        placeholder: c.NW.string(c.t['SQsI/P'])
                    }),
                    (0, n.jsxs)(i.Text, {
                        className: u.notice,
                        variant: 'text-sm/normal',
                        children: [c.NW.string(c.t.hZ2ql5), ' ', O.isPremiumSubscription || O.isPremiumGuildSubscription || O.isPremiumGift ? c.NW.string(c.t.IOkTho) : null]
                    })
                ]
            });
    let h = null == g || N || null != j;
    return (0, n.jsxs)(
        i.Y0X,
        ((e = (function (t) {
            for (var r = 1; r < arguments.length; r++) {
                var e = null != arguments[r] ? arguments[r] : {},
                    n = Object.keys(e);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(e).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })
                    )),
                    n.forEach(function (r) {
                        var n;
                        (n = e[r]),
                            r in t
                                ? Object.defineProperty(t, r, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (t[r] = n);
                    });
            }
            return t;
        })({}, f)),
        (p = p =
            {
                children: [
                    (0, n.jsx)(i.xBx, {
                        separator: !1,
                        children: (0, n.jsx)(i.X6q, {
                            variant: 'heading-lg/semibold',
                            children: null != j ? c.NW.string(c.t['UleS9/']) : c.NW.string(c.t.RK9GKC)
                        })
                    }),
                    (0, n.jsx)(i.hzk, { children: r }),
                    (0, n.jsxs)(i.mzw, {
                        children: [
                            (0, n.jsx)(i.zxk, {
                                type: 'submit',
                                color: i.zxk.Colors.RED,
                                onClick: async () => {
                                    if (!h && null != g) {
                                        y(!0), x(null);
                                        try {
                                            await (0, s.Os)(O.id, g), d();
                                        } catch (t) {
                                            x(t.body.message);
                                        } finally {
                                            y(!1);
                                        }
                                    }
                                },
                                disabled: h,
                                autoFocus: !0,
                                children: c.NW.string(c.t.geKm7u)
                            }),
                            (0, n.jsx)(i.zxk, {
                                type: 'button',
                                look: i.zxk.Looks.LINK,
                                color: i.zxk.Colors.PRIMARY,
                                onClick: () => {
                                    d();
                                },
                                children: c.NW.string(c.t.oEAioK)
                            })
                        ]
                    })
                ]
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(p))
            : (function (t, r) {
                  var e = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(t);
                      e.push.apply(e, n);
                  }
                  return e;
              })(Object(p)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(p, t));
              }),
        e)
    );
}
