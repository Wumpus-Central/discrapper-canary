n.d(t, { default: () => h });
var r = n(255367);
n(73800);
var i = n(481060),
    o = n(313201),
    l = n(471253),
    s = n(930180),
    c = n(320596),
    a = n(939863),
    u = n(388032),
    d = n(22946);
function h(e) {
    var t,
        n,
        { channel: h, transitionState: _, onClose: b } = e,
        p = (function (e, t) {
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
    let g = (0, o.Dt)(),
        f = (0, s._d)(h.id),
        m = (0, s.K3)(h.id),
        j = async () => {
            await (0, l.yi)(h), b();
        },
        O = async () => {
            await (0, l.RK)(h, !1), b();
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
                transitionState: _,
                'aria-labelledby': g
            },
            p
        )),
        (n = n =
            {
                size: i.CgR.SMALL,
                parentComponent: 'StageChannelModeratorJoinModal',
                children: (0, r.jsxs)(i.hzk, {
                    className: d.content,
                    children: [
                        (0, r.jsx)(a.Z, {
                            children: (0, r.jsx)('div', {
                                className: d.stageIconBackground,
                                children: (0, r.jsx)(i.ewx, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 40,
                                    height: 40,
                                    className: d.stageIcon
                                })
                            })
                        }),
                        (0, r.jsx)(i.X6q, {
                            id: g,
                            variant: 'heading-xl/semibold',
                            color: 'header-primary',
                            className: d.headerTitle,
                            children: u.intl.string(u.t.njetU1)
                        }),
                        (0, r.jsx)(i.Text, {
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            className: d.headerSubtitle,
                            children: u.intl.string(u.t.LQY4JS)
                        }),
                        (f > 0 || m > 0) && (0, r.jsx)(c.mv, { channelId: h.id }),
                        (0, r.jsxs)('div', {
                            className: d.buttonsContainer,
                            children: [
                                (0, r.jsxs)(i.zxk, {
                                    color: i.zxk.Colors.PRIMARY,
                                    className: d.button,
                                    innerClassName: d.innerButton,
                                    onClick: O,
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: d.icon,
                                            children: (0, r.jsx)(i.S6n, {
                                                size: 'custom',
                                                color: 'currentColor',
                                                width: 20,
                                                height: 20
                                            })
                                        }),
                                        u.intl.string(u.t['Q8o/tb'])
                                    ]
                                }),
                                (0, r.jsxs)(i.zxk, {
                                    color: i.zxk.Colors.PRIMARY,
                                    className: d.button,
                                    innerClassName: d.innerButton,
                                    onClick: j,
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: d.icon,
                                            children: (0, r.jsx)(i.BFJ, {
                                                size: 'custom',
                                                color: 'currentColor',
                                                width: 20,
                                                height: 20
                                            })
                                        }),
                                        u.intl.string(u.t['N3/Oyc'])
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
