n.d(t, { default: () => m });
var r = n(951288);
n(647438);
var o = n(755721),
    s = n(481060),
    c = n(313201),
    a = n(471253),
    i = n(930180),
    l = n(320596),
    d = n(939863),
    u = n(388032),
    b = n(376589);
function m(e) {
    var t,
        n,
        { channel: m, transitionState: x, onClose: j } = e,
        p = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++)
                    (n = s[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ["channel", "transitionState", "onClose"]);
    let h = (0, c.Dt)(),
        g = (0, i._d)(m.id),
        f = (0, i.K3)(m.id),
        O = async () => {
            await (0, a.yi)(m), j();
        },
        y = async () => {
            await (0, a.RK)(m, !1), j();
        };
    return (0, r.jsx)(
        s.Y0X,
        ((t = (function (e) {
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
        })(
            {
                transitionState: x,
                "aria-labelledby": h,
            },
            p,
        )),
        (n = n =
            {
                size: s.CgR.SMALL,
                parentComponent: "StageChannelModeratorJoinModal",
                children: (0, r.jsxs)(s.hzk, {
                    className: b.content,
                    children: [
                        (0, r.jsx)(d.Z, {
                            children: (0, r.jsx)("div", {
                                className: b.stageIconBackground,
                                children: (0, r.jsx)(s.ewx, {
                                    size: "custom",
                                    color: "currentColor",
                                    width: 40,
                                    height: 40,
                                    className: b.stageIcon,
                                }),
                            }),
                        }),
                        (0, r.jsx)(s.X6q, {
                            id: h,
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            className: b.headerTitle,
                            children: u.intl.string(u.t.njetU1),
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: b.headerSubtitle,
                            children: u.intl.string(u.t.LQY4JS),
                        }),
                        (g > 0 || f > 0) && (0, r.jsx)(l.mv, { channelId: m.id }),
                        (0, r.jsxs)("div", {
                            className: b.buttonsContainer,
                            children: [
                                (0, r.jsxs)(o.zx, {
                                    color: o.zx.Colors.PRIMARY,
                                    className: b.button,
                                    innerClassName: b.innerButton,
                                    onClick: y,
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: b.icon,
                                            children: (0, r.jsx)(s.S6n, {
                                                size: "custom",
                                                color: "currentColor",
                                                width: 20,
                                                height: 20,
                                            }),
                                        }),
                                        u.intl.string(u.t["Q8o/tb"]),
                                    ],
                                }),
                                (0, r.jsxs)(o.zx, {
                                    color: o.zx.Colors.PRIMARY,
                                    className: b.button,
                                    innerClassName: b.innerButton,
                                    onClick: O,
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: b.icon,
                                            children: (0, r.jsx)(s.BFJ, {
                                                size: "custom",
                                                color: "currentColor",
                                                width: 20,
                                                height: 20,
                                            }),
                                        }),
                                        u.intl.string(u.t["N3/Oyc"]),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
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
        t),
    );
}
