n.d(t, { default: () => _ });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(313201),
    s = n(471253),
    c = n(930180),
    l = n(46920),
    a = n(939863),
    d = n(388032),
    u = n(467028);
function _(e) {
    var t,
        n,
        { channel: _, transitionState: h, onClose: b } = e,
        m = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['channel', 'transitionState', 'onClose']);
    let p = (0, o.Dt)(),
        g = (0, c._d)(_.id),
        f = (0, c.K3)(_.id),
        j = async () => {
            await (0, s.yi)(_), b();
        },
        N = async () => {
            await (0, s.RK)(_, !1), b();
        };
    return (0, r.jsx)(
        i.Y0X,
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
        })(
            {
                transitionState: h,
                'aria-labelledby': p
            },
            m
        )),
        (n = n =
            {
                size: i.CgR.SMALL,
                children: (0, r.jsxs)(i.hzk, {
                    className: u.content,
                    children: [
                        (0, r.jsx)(a.Z, {
                            children: (0, r.jsx)('div', {
                                className: u.stageIconBackground,
                                children: (0, r.jsx)(i.ewx, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 40,
                                    height: 40,
                                    className: u.stageIcon
                                })
                            })
                        }),
                        (0, r.jsx)(i.X6q, {
                            id: p,
                            variant: 'heading-xl/semibold',
                            color: 'header-primary',
                            className: u.headerTitle,
                            children: d.NW.string(d.t.njetU1)
                        }),
                        (0, r.jsx)(i.Text, {
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            className: u.headerSubtitle,
                            children: d.NW.string(d.t.LQY4JS)
                        }),
                        (g > 0 || f > 0) && (0, r.jsx)(l.mv, { channelId: _.id }),
                        (0, r.jsxs)('div', {
                            className: u.buttonsContainer,
                            children: [
                                (0, r.jsxs)(i.zxk, {
                                    color: i.zxk.Colors.PRIMARY,
                                    className: u.button,
                                    innerClassName: u.innerButton,
                                    onClick: N,
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: u.icon,
                                            children: (0, r.jsx)(i.S6n, {
                                                size: 'custom',
                                                color: 'currentColor',
                                                width: 20,
                                                height: 20
                                            })
                                        }),
                                        d.NW.string(d.t['Q8o/tb'])
                                    ]
                                }),
                                (0, r.jsxs)(i.zxk, {
                                    color: i.zxk.Colors.PRIMARY,
                                    className: u.button,
                                    innerClassName: u.innerButton,
                                    onClick: j,
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: u.icon,
                                            children: (0, r.jsx)(i.BFJ, {
                                                size: 'custom',
                                                color: 'currentColor',
                                                width: 20,
                                                height: 20
                                            })
                                        }),
                                        d.NW.string(d.t['N3/Oyc'])
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t)
    );
}
