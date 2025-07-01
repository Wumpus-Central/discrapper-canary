(n.d(t, { Z: () => E }), n(388685));
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    o = n(846519),
    u = n(481060),
    s = n(458725),
    c = n(906467),
    d = n(63063),
    f = n(618158),
    p = n(981631),
    m = n(388032),
    g = n(975985);
function E(e) {
    let { errorMessage: t, className: n, avError: i } = e,
        E = '',
        { text: h, node: v } = (function (e) {
            var t;
            if (null == e)
                return {
                    text: null,
                    node: null
                };
            let n = null == (t = (0, s.hp)(e)) ? void 0 : t.errorCode,
                l = m.intl.formatToPlainString(m.t['ejOT9/'], { errorCode: n }),
                i = m.intl.format(m.t.If5Q0t, {
                    errorCode: n,
                    helpDeskURL: d.Z.getArticleURL(p.BhN.AV_ERROR_CODES)
                }),
                a = c.Z.isDeveloper;
            return {
                text: a ? ''.concat(l, ' (').concat(e, ')') : l,
                node: a
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [i, ' (', e, ')']
                      })
                    : i
            };
        })(i);
    null != t && null != h ? (E = ''.concat(t, ' ').concat(h)) : null != t && (E = t);
    let [S] = l.useState(new o.V7()),
        [b, O] = l.useState(!1);
    function y() {
        S.start(250, () => {
            O(!1);
        });
    }
    function Z() {
        (S.stop(), O(!0));
    }
    return (0, r.jsx)(u.ua7, {
        forceOpen: b,
        disableTooltipPointerEvents: !1,
        text: (0, r.jsx)(f.Z, {
            children: (0, r.jsxs)('div', {
                onMouseEnter: Z,
                onMouseLeave: y,
                children: [
                    t,
                    null != v &&
                        (0, r.jsx)(u.Text, {
                            variant: 'text-sm/semibold',
                            color: 'text-muted',
                            className: g.errorCodeMessage,
                            children: v
                        })
                ]
            })
        }),
        position: 'bottom',
        color: u.FGA.GREY,
        'aria-label': E,
        children: (e) => {
            var t, l;
            return (0, r.jsx)(
                'div',
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                ((r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r));
                            }));
                    }
                    return e;
                })({}, e)),
                (l = l =
                    {
                        onMouseEnter: Z,
                        onMouseLeave: y,
                        className: a()(n, g.root),
                        children: (0, r.jsx)(f.Z, {
                            children: (0, r.jsx)(u.P4T, {
                                onMouseEnter: Z,
                                onMouseLeave: y,
                                size: 'custom',
                                width: 20,
                                height: 20,
                                color: 'currentColor',
                                'aria-label': E,
                                className: g.warningIcon
                            })
                        })
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(l)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e));
                      }),
                t)
            );
        }
    });
}
