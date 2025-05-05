n.d(t, { Z: () => g }), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    o = n(846519),
    s = n(481060),
    u = n(458725),
    c = n(906467),
    d = n(63063),
    f = n(618158),
    m = n(981631),
    p = n(388032),
    E = n(975985);
function g(e) {
    let { errorMessage: t, className: n, avError: i } = e,
        g = '',
        { text: v, node: h } = (function (e) {
            var t;
            if (null == e)
                return {
                    text: null,
                    node: null
                };
            let n = null == (t = (0, u.hp)(e)) ? void 0 : t.errorCode,
                l = p.intl.formatToPlainString(p.t['ejOT9/'], { errorCode: n }),
                i = p.intl.format(p.t.If5Q0t, {
                    errorCode: n,
                    helpDeskURL: d.Z.getArticleURL(m.BhN.AV_ERROR_CODES)
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
    null != t && null != v ? (g = ''.concat(t, ' ').concat(v)) : null != t && (g = t);
    let [S] = l.useState(new o.V7()),
        [b, y] = l.useState(!1);
    function O() {
        S.start(250, () => {
            y(!1);
        });
    }
    function Z() {
        S.stop(), y(!0);
    }
    return (0, r.jsx)(s.ua7, {
        forceOpen: b,
        disableTooltipPointerEvents: !1,
        text: (0, r.jsx)(f.Z, {
            children: (0, r.jsxs)('div', {
                onMouseEnter: Z,
                onMouseLeave: O,
                children: [
                    t,
                    null != h &&
                        (0, r.jsx)(s.Text, {
                            variant: 'text-sm/semibold',
                            color: 'text-muted',
                            className: E.errorCodeMessage,
                            children: h
                        })
                ]
            })
        }),
        position: 'bottom',
        color: s.FGA.GREY,
        'aria-label': g,
        children: (e) => {
            var t, l;
            return (0, r.jsx)(
                'div',
                ((t = (function (e) {
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
                })({}, e)),
                (l = l =
                    {
                        onMouseEnter: Z,
                        onMouseLeave: O,
                        className: a()(n, E.root),
                        children: (0, r.jsx)(f.Z, {
                            children: (0, r.jsx)(s.P4T, {
                                onMouseEnter: Z,
                                onMouseLeave: O,
                                size: 'custom',
                                width: 20,
                                height: 20,
                                color: 'currentColor',
                                'aria-label': g,
                                className: E.warningIcon
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
