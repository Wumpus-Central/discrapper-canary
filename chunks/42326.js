(n.d(t, { Z: () => v }), n(388685));
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(846519),
    l = n(481060),
    c = n(458725),
    u = n(906467),
    d = n(63063),
    f = n(618158),
    _ = n(981631),
    p = n(388032),
    h = n(975985);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function g(e) {
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
                m(e, t, n[t]);
            }));
    }
    return e;
}
function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = 250;
function O(e) {
    var t;
    if (null == e)
        return {
            text: null,
            node: null
        };
    let n = null == (t = (0, c.hp)(e)) ? void 0 : t.errorCode,
        i = p.intl.formatToPlainString(p.t['ejOT9/'], { errorCode: n }),
        o = p.intl.format(p.t.If5Q0t, {
            errorCode: n,
            helpDeskURL: d.Z.getArticleURL(_.BhN.AV_ERROR_CODES)
        }),
        a = u.Z.isDeveloper;
    return {
        text: a ? ''.concat(i, ' (').concat(e, ')') : i,
        node: a
            ? (0, r.jsxs)(r.Fragment, {
                  children: [o, ' (', e, ')']
              })
            : o
    };
}
function v(e) {
    let { errorMessage: t, className: n, avError: o } = e,
        c = '',
        { text: u, node: d } = O(o);
    null != t && null != u ? (c = ''.concat(t, ' ').concat(u)) : null != t && (c = t);
    let [_] = i.useState(new s.V7()),
        [p, m] = i.useState(!1);
    function E() {
        _.start(y, () => {
            m(!1);
        });
    }
    function v() {
        (_.stop(), m(!0));
    }
    return (0, r.jsx)(l.ua7, {
        forceOpen: p,
        disableTooltipPointerEvents: !1,
        text: (0, r.jsx)(f.Z, {
            children: (0, r.jsxs)('div', {
                onMouseEnter: v,
                onMouseLeave: E,
                children: [
                    t,
                    null != d &&
                        (0, r.jsx)(l.Text, {
                            variant: 'text-sm/semibold',
                            color: 'text-muted',
                            className: h.errorCodeMessage,
                            children: d
                        })
                ]
            })
        }),
        position: 'bottom',
        color: l.FGA.GREY,
        'aria-label': c,
        children: (e) =>
            (0, r.jsx)(
                'div',
                b(g({}, e), {
                    onMouseEnter: v,
                    onMouseLeave: E,
                    className: a()(n, h.root),
                    children: (0, r.jsx)(f.Z, {
                        children: (0, r.jsx)(l.Mgn, {
                            onMouseEnter: v,
                            onMouseLeave: E,
                            size: 'custom',
                            width: 20,
                            height: 20,
                            color: 'currentColor',
                            'aria-label': c,
                            className: h.warningIcon
                        })
                    })
                })
            )
    });
}
