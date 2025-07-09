t.d(n, { Z: () => O });
var l = t(255367),
    r = t(73800),
    a = t(120356),
    i = t.n(a),
    s = t(442837),
    c = t(692547),
    o = t(755721),
    d = t(481060),
    u = t(410030),
    h = t(565138),
    m = t(523751),
    f = t(637853),
    g = t(434404),
    p = t(159300),
    x = t(496675),
    b = t(709586),
    j = t(768581),
    C = t(981631),
    _ = t(388032),
    v = t(18314),
    I = t(63190),
    Z = t(102219);
let y = (e) => {
    let n = r.useMemo(
        () =>
            null == e
                ? null
                : j.ZP.getGuildHomeHeaderURL({
                      id: e.id,
                      homeHeader: e.homeHeader
                  }),
        [e]
    );
    return {
        homeHeaderImage: n,
        isHomeHeaderImageSet: null != n,
        homeHeaderScroll: 200 * (null != n)
    };
};
function N(e) {
    let { guild: n } = e,
        t = () => {
            g.Z.open(n.id, C.pNK.ONBOARDING, void 0, C.KsC.SERVER_GUIDE);
        };
    return n.features.has(C.oNc.BANNER)
        ? (0, l.jsxs)(o.zx, {
              className: v.editButton,
              innerClassName: v.editButtonInner,
              type: 'button',
              size: o.zx.Sizes.MEDIUM,
              color: o.zx.Colors.BRAND,
              onClick: t,
              children: [
                  (0, l.jsx)(d.FmF, {
                      size: 'xs',
                      color: c.Z.unsafe_rawColors.WHITE_500.css
                  }),
                  _.intl.string(_.t.b0y3DA)
              ]
          })
        : (0, l.jsxs)(d.gtL, {
              color: o.zx.Colors.GREEN,
              className: v.editButton,
              innerClassName: v.editButtonInner,
              onClick: t,
              children: [
                  (0, l.jsx)(b.Z, {
                      height: 16,
                      width: 16
                  }),
                  _.intl.string(_.t['+7XY39'])
              ]
          });
}
let O = r.memo(function (e) {
    let { guild: n, titleClassName: r } = e,
        { homeHeaderImage: a, isHomeHeaderImageSet: c } = y(n),
        o = (0, f.b$)(n.id),
        g = (0, s.e7)([x.Z], () => (0, p.b)(x.Z, n)),
        b = (0, u.ZP)();
    return (0, l.jsxs)('div', {
        className: v.header,
        children: [
            (0, l.jsxs)('div', {
                className: v.headerArtWrapper,
                children: [
                    (0, l.jsx)('div', {
                        className: i()(v.headerArt, { [v.headerArtPlaceholder]: !c }),
                        style: { backgroundImage: 'url('.concat(c ? a : 'dark' === b ? I : Z, ')') }
                    }),
                    o && (0, l.jsx)(N, { guild: n })
                ]
            }),
            (0, l.jsx)('div', {
                className: v.titleWrapper,
                children: (0, l.jsxs)('div', {
                    className: r,
                    children: [
                        (0, l.jsx)(h.Z, {
                            className: v.headerIcon,
                            guild: n,
                            size: h.Z.Sizes.XLARGE,
                            active: !0
                        }),
                        (0, l.jsx)(d.y5t, {
                            children: (0, l.jsxs)('div', {
                                className: v.headerName,
                                children: [
                                    (0, l.jsx)(d.X6q, {
                                        className: v.headerName,
                                        variant: 'heading-xxl/bold',
                                        children: n.name
                                    }),
                                    (0, l.jsx)(m.Z, {
                                        size: 24,
                                        guild: n,
                                        tooltipPosition: 'bottom',
                                        tooltipColor: d.ua7.Colors.PRIMARY
                                    }),
                                    g &&
                                        (0, l.jsx)('div', {
                                            'data-button-hoisted-classname-wrapper': !0,
                                            className: v.inviteButton,
                                            children: (0, l.jsx)(d.zxk, {
                                                variant: 'secondary',
                                                text: _.intl.string(_.t.VINpSE),
                                                onClick: () =>
                                                    (0, d.ZDy)(async () => {
                                                        let { default: e } = await Promise.all([t.e('7654'), t.e('34946')]).then(t.bind(t, 560114));
                                                        return (t) => {
                                                            var r, a;
                                                            return (0, l.jsx)(
                                                                e,
                                                                ((r = (function (e) {
                                                                    for (var n = 1; n < arguments.length; n++) {
                                                                        var t = null != arguments[n] ? arguments[n] : {},
                                                                            l = Object.keys(t);
                                                                        ('function' == typeof Object.getOwnPropertySymbols &&
                                                                            (l = l.concat(
                                                                                Object.getOwnPropertySymbols(t).filter(function (e) {
                                                                                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                                                                })
                                                                            )),
                                                                            l.forEach(function (n) {
                                                                                var l;
                                                                                ((l = t[n]),
                                                                                    n in e
                                                                                        ? Object.defineProperty(e, n, {
                                                                                              value: l,
                                                                                              enumerable: !0,
                                                                                              configurable: !0,
                                                                                              writable: !0
                                                                                          })
                                                                                        : (e[n] = l));
                                                                            }));
                                                                    }
                                                                    return e;
                                                                })({}, t)),
                                                                (a = a =
                                                                    {
                                                                        guild: n,
                                                                        source: C.t4x.GUILD_HOME
                                                                    }),
                                                                Object.getOwnPropertyDescriptors
                                                                    ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a))
                                                                    : (function (e, n) {
                                                                          var t = Object.keys(e);
                                                                          if (Object.getOwnPropertySymbols) {
                                                                              var l = Object.getOwnPropertySymbols(e);
                                                                              t.push.apply(t, l);
                                                                          }
                                                                          return t;
                                                                      })(Object(a)).forEach(function (e) {
                                                                          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e));
                                                                      }),
                                                                r)
                                                            );
                                                        };
                                                    })
                                            })
                                        })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
});
