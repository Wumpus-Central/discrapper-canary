(n.d(t, { Z: () => O }), n(388685));
var r = n(255367),
    s = n(73800),
    o = n(392711),
    i = n(772848),
    a = n(755721),
    c = n(481060),
    l = n(377171),
    u = n(668826),
    d = n(18582),
    f = n(483601),
    p = n(81829),
    m = n(892689),
    g = n(477839),
    b = n(603571),
    y = n(388032),
    h = n(885270);
function x(e) {
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
}
let v = () => [
    {
        title: y.intl.string(b.default.edfgq6),
        color: l.Z.BUTTON_POSITIVE_BACKGROUND,
        primaryButtonCTA: y.intl.string(y.t.BddRzc),
        secondaryButtonCTA: y.intl.string(y.t.f3Pet7),
        primaryButtonPoints: 1000,
        secondaryButtonPoints: 500,
        closeButtonPoints: 200
    },
    {
        title: y.intl.string(b.default.isjTh4),
        color: l.Z.BUTTON_DANGER_BACKGROUND,
        closeButtonPoints: 200
    },
    {
        title: y.intl.string(b.default['1aOLws']),
        color: l.Z.BG_BRAND,
        primaryButtonCTA: y.intl.string(y.t['+TBKLy']),
        primaryButtonPoints: -1000,
        closeButtonPoints: 200
    },
    {
        title: y.intl.string(b.default.M3lUXV),
        color: l.Z.BG_BRAND,
        primaryButtonCTA: y.intl.string(y.t.f3Pet7),
        primaryButtonPoints: 700,
        closeButtonPoints: 200
    },
    {
        title: y.intl.string(b.default.StUVd3),
        color: l.Z.BUTTON_POSITIVE_BACKGROUND,
        primaryButtonCTA: y.intl.string(y.t['3xjX0d']),
        primaryButtonPoints: 2000,
        closeButtonPoints: 200
    },
    {
        title: y.intl.string(b.default.vHm2PD),
        color: l.Z.BUTTON_POSITIVE_BACKGROUND,
        primaryButtonCTA: y.intl.string(b.default.ZOqU29),
        primaryButtonPoints: 1000,
        closeButtonPoints: 200
    },
    {
        title: y.intl.string(b.default.vNywt7),
        color: l.Z.BUTTON_DANGER_BACKGROUND,
        primaryButtonCTA: y.intl.string(y.t['9iFR6+']),
        primaryButtonPoints: -200,
        closeButtonPoints: 200
    }
];
function O(e) {
    let { isPaused: t } = e,
        n = (0, s.useRef)(null),
        [l, b] = (0, s.useState)((0, o.sample)(v())),
        [y, O] = (0, s.useState)({}),
        [j, N] = (0, s.useState)({
            x: 0,
            y: 0
        }),
        _ = (e, t) => {
            var n, r;
            (N({
                x: e.clientX,
                y: e.clientY
            }),
                O(
                    ((n = x({}, y)),
                    (r = r = { [(0, i.Z)()]: t }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(r)).forEach(function (e) {
                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                          }),
                    n)
                ),
                (0, u.KH)(g.yN.NAGBAR, t));
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(m.Z, {
                ref: n,
                isPaused: t,
                itemId: g.yN.NAGBAR,
                chance: 0.2,
                points: 0,
                maxDrops: 1,
                width: 0,
                height: 0,
                children: (e) =>
                    (0, r.jsxs)('div', {
                        className: h.container,
                        style: { backgroundColor: null == l ? void 0 : l.color },
                        children: [
                            null == l ? void 0 : l.title,
                            (null == l ? void 0 : l.primaryButtonCTA) != null &&
                                (0, r.jsx)(f.Z, {
                                    size: a.zx.Sizes.TINY,
                                    look: a.zx.Looks.OUTLINED,
                                    color: a.zx.Colors.WHITE,
                                    onClick: (t) => {
                                        var r;
                                        (_(t, l.primaryButtonPoints), null == (r = n.current) || r.removeDrop(e), b((0, o.sample)(v())));
                                    },
                                    children: l.primaryButtonCTA
                                }),
                            (null == l ? void 0 : l.secondaryButtonCTA) != null &&
                                (0, r.jsx)(f.Z, {
                                    size: a.zx.Sizes.TINY,
                                    look: a.zx.Looks.OUTLINED,
                                    color: a.zx.Colors.WHITE,
                                    onClick: (t) => {
                                        var r;
                                        (_(t, l.secondaryButtonPoints), null == (r = n.current) || r.removeDrop(e), b((0, o.sample)(v())));
                                    },
                                    children: l.secondaryButtonCTA
                                }),
                            null != l &&
                                (0, r.jsx)(d.Z, {
                                    className: h.closeButton,
                                    focusProps: { offset: 6 },
                                    onClick: (t) => {
                                        var r;
                                        (_(t, l.closeButtonPoints), null == (r = n.current) || r.removeDrop(e), b((0, o.sample)(v())));
                                    },
                                    children: (0, r.jsx)(c.Dio, {
                                        size: 'md',
                                        color: 'white'
                                    })
                                })
                        ]
                    })
            }),
            (0, r.jsx)(p.Z, {
                renderedPoints: y,
                onRemovePoint: (e) => {
                    O((t) => {
                        let n = x({}, t);
                        return (delete n[e], n);
                    });
                },
                offset: j,
                fullWidth: !1
            })
        ]
    });
}
