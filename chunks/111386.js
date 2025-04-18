n.d(t, { Z: () => m }), n(388685);
var r = n(200651),
    i = n(192379),
    a = n(704215),
    o = n(481060),
    s = n(243778),
    l = n(388032),
    c = n(945554),
    u = n(442937);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = () =>
        (0, r.jsxs)('div', {
            className: c.coachtipInner,
            children: [
                (0, r.jsx)('img', {
                    src: u,
                    alt: l.NW.string(l.t['9wkT19']),
                    className: c.coachtipAsset
                }),
                (0, r.jsxs)('div', {
                    className: c.coachtipTextContainer,
                    children: [
                        (0, r.jsx)(o.X6q, {
                            variant: 'heading-lg/semibold',
                            children: l.NW.string(l.t.V5y3qa)
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            color: 'text-secondary',
                            children: l.NW.string(l.t.eSDHDg)
                        })
                    ]
                })
            ]
        }),
    m = (e) => {
        let { children: t } = e,
            [n] = (0, s.US)([a.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]),
            [l, u] = i.useState(!1);
        return (i.useEffect(() => {
            setTimeout(() => {
                u(!0);
            }, 300);
        }),
        n !== a.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP)
            ? t
            : (0, r.jsx)(o.ua7, {
                  text: (0, r.jsx)(h, {}),
                  tooltipClassName: c.coachtip,
                  tooltipContentClassName: c.coachtipContent,
                  position: 'left',
                  allowOverflow: !0,
                  forceOpen: l,
                  shouldShow: l,
                  hideOnClick: !1,
                  'aria-label': 'test',
                  children: (e) => (0, r.jsx)('div', p(f({}, e), { children: t }))
              });
    };
