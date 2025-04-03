n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(642128),
    a = n(481060),
    s = n(871499),
    c = n(388032),
    u = n(46152);
function d(e) {
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
function p(e, t) {
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
let h = (0, o.animated)((e) => {
    let { percentComplete: t } = e;
    return (0, r.jsx)('svg', {
        className: u.countdown,
        width: 40,
        height: 40,
        viewBox: '0 0 '.concat(40, ' ').concat(40),
        children: (0, r.jsx)('circle', {
            style: { strokeDashoffset: Math.round(100 * t) },
            className: u.progress,
            cx: 20,
            cy: 20,
            r: 14,
            fill: 'none',
            stroke: '#4F545C',
            pathLength: '100'
        })
    });
});
function f(e) {
    var { totalCooldownSeconds: t, remainingCooldownSeconds: n, onClick: i, onKeyDown: f, onMouseEnter: m, onMouseLeave: g, isActive: b = !1, isCenterButton: _ = !1 } = e,
        C = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['totalCooldownSeconds', 'remainingCooldownSeconds', 'onClick', 'onKeyDown', 'onMouseEnter', 'onMouseLeave', 'isActive', 'isCenterButton']);
    let y = n > 0,
        x = (0, a.q_F)(
            {
                percentComplete: 0 !== n ? (t - n) / t : 0,
                config: p(d({}, o.config.molasses), { duration: 1000 })
            },
            'animate-always'
        ),
        v = y ? c.NW.formatToPlainString(c.t.D8Drx8, { seconds: n }) : void 0,
        j = _ ? s.d : s.Z;
    return (0, r.jsxs)('div', {
        className: u.container,
        children: [
            y ? (0, r.jsx)(h, { percentComplete: x.percentComplete }) : null,
            (0, r.jsx)(
                j,
                p(d({}, C), {
                    disabled: y,
                    label: v,
                    iconComponent: a.EO4,
                    iconClassName: l()(u.iconHover, b && u.active),
                    className: l()(C.className, u.button),
                    onClick: i,
                    onKeyDown: f,
                    onMouseEnter: m,
                    onMouseLeave: g,
                    isActive: b,
                    grow: !1
                })
            )
        ]
    });
}
