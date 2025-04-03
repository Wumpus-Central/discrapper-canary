n.d(t, { Z: () => N }), n(47120);
var r = n(200651),
    s = n(192379),
    o = n(392711),
    a = n(772848),
    i = n(481060),
    c = n(377171),
    l = n(668826),
    u = n(18582),
    d = n(483601),
    f = n(81829),
    p = n(892689),
    m = n(477839),
    g = n(622802),
    b = n(388032),
    y = n(885270);
function h(e) {
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
let x = () => [
    {
        title: b.NW.string(g.Z.edfgq6),
        color: c.Z.BUTTON_POSITIVE_BACKGROUND,
        primaryButtonCTA: b.NW.string(b.t.BddRzc),
        secondaryButtonCTA: b.NW.string(b.t.f3Pet7),
        primaryButtonPoints: 1000,
        secondaryButtonPoints: 500,
        closeButtonPoints: 200
    },
    {
        title: b.NW.string(g.Z.isjTh4),
        color: c.Z.BUTTON_DANGER_BACKGROUND,
        closeButtonPoints: 200
    },
    {
        title: b.NW.string(g.Z['1aOLws']),
        color: c.Z.BG_BRAND,
        primaryButtonCTA: b.NW.string(b.t['+TBKLy']),
        primaryButtonPoints: -1000,
        closeButtonPoints: 200
    },
    {
        title: b.NW.string(g.Z.M3lUXV),
        color: c.Z.BG_BRAND,
        primaryButtonCTA: b.NW.string(b.t.f3Pet7),
        primaryButtonPoints: 700,
        closeButtonPoints: 200
    },
    {
        title: b.NW.string(g.Z.StUVd3),
        color: c.Z.BUTTON_POSITIVE_BACKGROUND,
        primaryButtonCTA: b.NW.string(b.t['3xjX0d']),
        primaryButtonPoints: 2000,
        closeButtonPoints: 200
    },
    {
        title: b.NW.string(g.Z.vHm2PD),
        color: c.Z.BUTTON_POSITIVE_BACKGROUND,
        primaryButtonCTA: b.NW.string(g.Z.ZOqU29),
        primaryButtonPoints: 1000,
        closeButtonPoints: 200
    },
    {
        title: b.NW.string(g.Z.vNywt7),
        color: c.Z.BUTTON_DANGER_BACKGROUND,
        primaryButtonCTA: b.NW.string(b.t['9iFR6+']),
        primaryButtonPoints: -200,
        closeButtonPoints: 200
    }
];
function N(e) {
    let { isPaused: t } = e,
        n = (0, s.useRef)(),
        [c, g] = (0, s.useState)((0, o.sample)(x())),
        [b, N] = (0, s.useState)({}),
        [v, O] = (0, s.useState)({
            x: 0,
            y: 0
        }),
        j = (e, t) => {
            var n, r;
            O({
                x: e.clientX,
                y: e.clientY
            }),
                N(
                    ((n = h({}, b)),
                    (r = r = { [(0, a.Z)()]: t }),
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
                (0, l.KH)(m.yN.NAGBAR, t);
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(p.Z, {
                ref: n,
                isPaused: t,
                itemId: m.yN.NAGBAR,
                chance: 0.2,
                points: 0,
                maxDrops: 1,
                width: 0,
                height: 0,
                children: (e) =>
                    (0, r.jsxs)('div', {
                        className: y.container,
                        style: { backgroundColor: null == c ? void 0 : c.color },
                        children: [
                            null == c ? void 0 : c.title,
                            (null == c ? void 0 : c.primaryButtonCTA) != null &&
                                (0, r.jsx)(d.Z, {
                                    size: i.zxk.Sizes.TINY,
                                    look: i.zxk.Looks.OUTLINED,
                                    color: i.zxk.Colors.WHITE,
                                    onClick: (t) => {
                                        var r;
                                        j(t, c.primaryButtonPoints), null == (r = n.current) || r.removeDrop(e), g((0, o.sample)(x()));
                                    },
                                    children: c.primaryButtonCTA
                                }),
                            (null == c ? void 0 : c.secondaryButtonCTA) != null &&
                                (0, r.jsx)(d.Z, {
                                    size: i.zxk.Sizes.TINY,
                                    look: i.zxk.Looks.OUTLINED,
                                    color: i.zxk.Colors.WHITE,
                                    onClick: (t) => {
                                        var r;
                                        j(t, c.secondaryButtonPoints), null == (r = n.current) || r.removeDrop(e), g((0, o.sample)(x()));
                                    },
                                    children: c.secondaryButtonCTA
                                }),
                            null != c &&
                                (0, r.jsx)(u.Z, {
                                    className: y.closeButton,
                                    focusProps: { offset: 6 },
                                    onClick: (t) => {
                                        var r;
                                        j(t, c.closeButtonPoints), null == (r = n.current) || r.removeDrop(e), g((0, o.sample)(x()));
                                    },
                                    children: (0, r.jsx)(i.Dio, {
                                        size: 'md',
                                        color: 'white'
                                    })
                                })
                        ]
                    })
            }),
            (0, r.jsx)(f.Z, {
                renderedPoints: b,
                onRemovePoint: (e) => {
                    N((t) => {
                        let n = h({}, t);
                        return delete n[e], n;
                    });
                },
                offset: v,
                fullWidth: !1
            })
        ]
    });
}
