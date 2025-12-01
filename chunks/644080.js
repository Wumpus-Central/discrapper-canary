t.d(n, { Z: () => Z });
var l = t(54381),
    r = t(473749),
    a = t(120356),
    i = t.n(a),
    s = t(442837),
    c = t(481060),
    o = t(410030),
    d = t(565138),
    u = t(523751),
    m = t(637853),
    h = t(434404),
    f = t(159300),
    g = t(496675),
    p = t(768581),
    x = t(981631),
    b = t(388032),
    j = t(917733),
    C = t(63190),
    v = t(102219);
function _(e) {
    let { guild: n } = e,
        {
            variant: t,
            icon: r,
            text: a,
        } = n.features.has(x.GuildFeatures.BANNER)
            ? {
                  variant: "overlay-secondary",
                  icon: c.FmF,
                  text: b.intl.string(b.t.b0y3DL),
              }
            : {
                  variant: "expressive",
                  icon: c.Ucv,
                  text: b.intl.string(b.t["+7XY31"]),
              };
    return (0, l.jsx)("div", {
        className: j.editButtonContainer,
        children: (0, l.jsx)(c.Button, {
            variant: t,
            icon: r,
            text: a,
            onClick: () => {
                h.Z.open(n.id, x.pNK.ONBOARDING, void 0, x.KsC.SERVER_GUIDE);
            },
        }),
    });
}
let Z = r.memo(function (e) {
    let { guild: n, titleClassName: a } = e,
        { homeHeaderImage: h, isHomeHeaderImageSet: Z } = ((e) => {
            let n = r.useMemo(
                () =>
                    null == e
                        ? null
                        : p.ZP.getGuildHomeHeaderURL({
                              id: e.id,
                              homeHeader: e.homeHeader,
                          }),
                [e],
            );
            return {
                homeHeaderImage: n,
                isHomeHeaderImageSet: null != n,
                homeHeaderScroll: 200 * (null != n),
            };
        })(n),
        I = (0, m.b$)(n.id),
        y = (0, s.e7)([g.Z], () => (0, f.b)(g.Z, n)),
        N = (0, o.ZP)();
    return (0, l.jsxs)("div", {
        className: j.header,
        children: [
            (0, l.jsxs)("div", {
                className: j.headerArtWrapper,
                children: [
                    (0, l.jsx)("div", {
                        className: i()(j.headerArt, { [j.headerArtPlaceholder]: !Z }),
                        style: { backgroundImage: "url(".concat(Z ? h : "dark" === N ? C : v, ")") },
                    }),
                    I && (0, l.jsx)(_, { guild: n }),
                ],
            }),
            (0, l.jsx)("div", {
                className: j.titleWrapper,
                children: (0, l.jsxs)("div", {
                    className: a,
                    children: [
                        (0, l.jsx)(d.Z, {
                            className: j.headerIcon,
                            guild: n,
                            size: d.Z.Sizes.XLARGE,
                            active: !0,
                        }),
                        (0, l.jsx)(c.y5t, {
                            children: (0, l.jsxs)("div", {
                                className: j.headerName,
                                children: [
                                    (0, l.jsx)(c.Heading, {
                                        className: j.headerName,
                                        variant: "heading-xxl/bold",
                                        children: n.name,
                                    }),
                                    (0, l.jsx)(u.Z, {
                                        size: 24,
                                        guild: n,
                                        tooltipPosition: "bottom",
                                        tooltipColor: c.aML.Colors.PRIMARY,
                                    }),
                                    y &&
                                        (0, l.jsx)("div", {
                                            "data-button-hoisted-classname-wrapper": !0,
                                            className: j.inviteButton,
                                            children: (0, l.jsx)(c.Button, {
                                                variant: "secondary",
                                                text: b.intl.string(b.t.VINpSK),
                                                onClick: () =>
                                                    (0, c.ZDy)(async () => {
                                                        let { default: e } = await Promise.all([
                                                            t.e("7654"),
                                                            t.e("77653"),
                                                        ]).then(t.bind(t, 560114));
                                                        return (t) => {
                                                            var r, a;
                                                            return (0, l.jsx)(
                                                                e,
                                                                ((r = (function (e) {
                                                                    for (var n = 1; n < arguments.length; n++) {
                                                                        var t =
                                                                                null != arguments[n]
                                                                                    ? arguments[n]
                                                                                    : {},
                                                                            l = Object.keys(t);
                                                                        "function" ==
                                                                            typeof Object.getOwnPropertySymbols &&
                                                                            (l = l.concat(
                                                                                Object.getOwnPropertySymbols(t).filter(
                                                                                    function (e) {
                                                                                        return Object.getOwnPropertyDescriptor(
                                                                                            t,
                                                                                            e,
                                                                                        ).enumerable;
                                                                                    },
                                                                                ),
                                                                            )),
                                                                            l.forEach(function (n) {
                                                                                var l;
                                                                                (l = t[n]),
                                                                                    n in e
                                                                                        ? Object.defineProperty(e, n, {
                                                                                              value: l,
                                                                                              enumerable: !0,
                                                                                              configurable: !0,
                                                                                              writable: !0,
                                                                                          })
                                                                                        : (e[n] = l);
                                                                            });
                                                                    }
                                                                    return e;
                                                                })({}, t)),
                                                                (a = a =
                                                                    {
                                                                        guild: n,
                                                                        source: x.t4x.GUILD_HOME,
                                                                    }),
                                                                Object.getOwnPropertyDescriptors
                                                                    ? Object.defineProperties(
                                                                          r,
                                                                          Object.getOwnPropertyDescriptors(a),
                                                                      )
                                                                    : (function (e, n) {
                                                                          var t = Object.keys(e);
                                                                          if (Object.getOwnPropertySymbols) {
                                                                              var l = Object.getOwnPropertySymbols(e);
                                                                              t.push.apply(t, l);
                                                                          }
                                                                          return t;
                                                                      })(Object(a)).forEach(function (e) {
                                                                          Object.defineProperty(
                                                                              r,
                                                                              e,
                                                                              Object.getOwnPropertyDescriptor(a, e),
                                                                          );
                                                                      }),
                                                                r),
                                                            );
                                                        };
                                                    }),
                                            }),
                                        }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
        ],
    });
});
