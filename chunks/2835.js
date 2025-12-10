n.d(t, { Z: () => v }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(467721),
    l = n(442837),
    c = n(481060),
    u = n(515970),
    d = n(5888),
    f = n(12532),
    p = n(564756),
    _ = n(612776),
    m = n(591666);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function g(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
let E = {
        tension: 1200,
        friction: 70,
    },
    b = {
        [_.yD.WELCOME]: c.tvw,
        [_.yD.MESSAGES]: c.kBi,
        [_.yD.EMOJIS]: c.EO4,
        [_.yD.VOICE]: c.S6n,
        [_.yD.GUILDS]: c.QTo,
        [_.yD.FRIENDS]: c.iFz,
        [_.yD.GAMING]: c.iWm,
        [_.yD.QUESTS]: c.qDn,
        [_.yD.END]: c.d5i,
    };
function y(e) {
    let { isSelected: t, icon: n, color: a, onClick: o } = e,
        [l, u] = i.useState(!1),
        d = (0, c.q_F)({
            from: { scale: 0 },
            to: { scale: 1 },
            config: E,
        }),
        f = n;
    return (0, r.jsx)(s.animated.div, {
        style: g({}, d),
        children: (0, r.jsx)(c.P3F, {
            onClick: o,
            className: m.clickable,
            onMouseEnter: () => u(!0),
            onMouseLeave: () => u(!1),
            children: (0, r.jsx)(f, {
                colorClass: m.stepColor,
                color: a,
                style: { opacity: t || l ? 1 : 0.5 },
            }),
        }),
    });
}
function O() {
    let e = (0, p.Z)();
    return (0, f.Z)(e).map((e) => ({
        slide: e,
        icon: b[e],
    }));
}
function v(e) {
    let { activeSlide: t, setActiveSlide: n, color: a, className: s } = e,
        c = Number.parseInt(t.toString(), 10),
        f = (0, l.e7)([d.Z], () => Number.parseInt(d.Z.highestSlideSeen)),
        p = O();
    return (
        i.useEffect(() => {
            c > f && (0, u.f7)("".concat(c));
        }, [c, f]),
        (0, r.jsx)("div", {
            className: o()(m.container, s),
            children: p.map((e, t) => {
                let { icon: i, slide: o } = e,
                    s = Number.parseInt(o, 10);
                return f >= s
                    ? (0, r.jsx)(
                          y,
                          {
                              isSelected: c === s,
                              icon: i,
                              onClick: () => n(o),
                              color: a,
                          },
                          "step-indicator-".concat(t),
                      )
                    : (0, r.jsx)(
                          "div",
                          {
                              className: m.unknownIcon,
                              style: {
                                  borderColor: a,
                                  opacity: 0.5,
                              },
                          },
                          "step-indicator-".concat(t),
                      );
            }),
        })
    );
}
