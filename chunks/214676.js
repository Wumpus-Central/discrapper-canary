r.d(t, {
    L: () => _,
    T: () => v,
}),
    r(896048);
var n = r(627968),
    a = r(64700),
    l = r(503698),
    s = r.n(l),
    c = r(397927),
    i = r(328006),
    o = r(334840),
    d = r(48736),
    u = r(610042),
    b = r(29086),
    f = r(203656),
    p = r(525104),
    m = r(176201),
    j = r(178758),
    x = r(652215),
    g = r(743981),
    h = r(985018),
    O = r(273034),
    y = r(191017);

function v() {
    var e;
    let [t, r] = a.useState(() => {
            let e = Math.floor(Math.random() * j.Oz.length);
            return {
                primary_color: j.Oz[e].start,
                secondary_color: j.Oz[e].end,
                tertiary_color: null,
            };
        }),
        { gradientStyle: l, gradientClassname: o } = (0, c.v5K)({
            colorStrings: (0, m.K3)(t),
            roleStyle: "username",
            includeConvenienceGlow: !0,
            animateGradient: !0,
        });
    return (0, n.jsxs)("div", {
        className: O.kL,
        children: [
            (0, n.jsx)("div", {
                className: O.zC,
                children: (0, n.jsx)(b.V, {
                    avatar: i.A,
                    username: "Cherry",
                    usernameStyle: l,
                    usernameClassName: s()(o, y.q),
                    message: h.intl.string(h.t["6OSasb"]),
                }),
            }),
            (0, n.jsx)(d.default, {
                defaultColor: x.TGz,
                colors: j.Oz,
                value: t.primary_color,
                secondaryValue: null != (e = t.secondary_color) ? e : void 0,
                onChange: (e) => {
                    var n, a;
                    return r(
                        ((n = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (n = n.concat(
                                        Object.getOwnPropertySymbols(r).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                        }),
                                    )),
                                    n.forEach(function (t) {
                                        var n;
                                        (n = r[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: n,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = n);
                                    });
                            }
                            return e;
                        })({}, t)),
                        (a = a =
                            {
                                primary_color: e,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a))
                            : (function (e, t) {
                                  var r = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var n = Object.getOwnPropertySymbols(e);
                                      r.push.apply(r, n);
                                  }
                                  return r;
                              })(Object(a)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e));
                              }),
                        n),
                    );
                },
                onChangeGradientColors: (e) =>
                    r({
                        primary_color: e[0],
                        secondary_color: e[1],
                        tertiary_color: null,
                    }),
                isGradient: !0,
            }),
        ],
    });
}

function _(e) {
    let { guildId: t } = e,
        [r, l] = a.useState(g.bl.HEART),
        s = (0, p.A)(),
        c = a.useMemo(
            () => ({
                unlockedBadges: s.unlockedBadges.slice(0, 10),
                lockedBadges: [],
            }),
            [s],
        );
    return (0, n.jsxs)("div", {
        className: O.kL,
        children: [
            (0, n.jsx)("div", {
                className: O.zC,
                children: (0, n.jsx)(b.V, {
                    avatar: o.A,
                    username: "Roka",
                    usernameStyle: {
                        color: "var(--brand-400)",
                    },
                    message: h.intl.string(h.t["6OSasb"]),
                    decorations: (0, n.jsx)(f.M, {
                        guildId: t,
                        tag: "GGEZ",
                        badge: r,
                    }),
                }),
            }),
            (0, n.jsx)(u.y, {
                selectedBadge: r,
                onBadgeClicked: l,
                badgeCollection: c,
            }),
        ],
    });
}
