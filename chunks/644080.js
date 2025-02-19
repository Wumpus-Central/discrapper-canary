l.d(n, { Z: () => y });
var t = l(200651),
    r = l(192379),
    a = l(120356),
    i = l.n(a),
    s = l(442837),
    o = l(692547),
    c = l(481060),
    d = l(410030),
    u = l(565138),
    m = l(523751),
    h = l(637853),
    g = l(434404),
    f = l(159300),
    x = l(496675),
    p = l(709586),
    j = l(768581),
    b = l(981631),
    C = l(388032),
    v = l(282870),
    _ = l(63190),
    I = l(102219);
let Z = (e) => {
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
        l = () => {
            g.Z.open(n.id, b.pNK.ONBOARDING, void 0, b.KsC.SERVER_GUIDE);
        };
    return n.hasFeature(b.oNc.BANNER)
        ? (0, t.jsxs)(c.zxk, {
              className: v.editButton,
              innerClassName: v.editButtonInner,
              type: 'button',
              size: c.zxk.Sizes.MEDIUM,
              color: c.zxk.Colors.BRAND,
              onClick: l,
              children: [
                  (0, t.jsx)(c.FmF, {
                      size: 'xs',
                      color: o.Z.unsafe_rawColors.WHITE_500.css
                  }),
                  C.NW.string(C.t.b0y3DA)
              ]
          })
        : (0, t.jsxs)(c.gtL, {
              color: c.zxk.Colors.GREEN,
              className: v.editButton,
              innerClassName: v.editButtonInner,
              onClick: l,
              children: [
                  (0, t.jsx)(p.Z, {
                      height: 16,
                      width: 16
                  }),
                  C.NW.string(C.t['+7XY39'])
              ]
          });
}
let y = r.memo(function (e) {
    let { guild: n, titleClassName: r } = e,
        { homeHeaderImage: a, isHomeHeaderImageSet: o } = Z(n),
        g = (0, h.b$)(n.id),
        p = (0, s.e7)([x.Z], () => (0, f.b)(x.Z, n)),
        j = (0, d.ZP)();
    return (0, t.jsxs)('div', {
        className: v.header,
        children: [
            (0, t.jsxs)('div', {
                className: v.headerArtWrapper,
                children: [
                    (0, t.jsx)('div', {
                        className: i()(v.headerArt, { [v.headerArtPlaceholder]: !o }),
                        style: { backgroundImage: 'url('.concat(o ? a : 'dark' === j ? _ : I, ')') }
                    }),
                    g && (0, t.jsx)(N, { guild: n })
                ]
            }),
            (0, t.jsx)('div', {
                className: v.titleWrapper,
                children: (0, t.jsxs)('div', {
                    className: r,
                    children: [
                        (0, t.jsx)(u.Z, {
                            className: v.headerIcon,
                            guild: n,
                            size: u.Z.Sizes.XLARGE,
                            active: !0
                        }),
                        (0, t.jsx)(c.y5t, {
                            children: (0, t.jsxs)('div', {
                                className: v.headerName,
                                children: [
                                    (0, t.jsx)(c.X6q, {
                                        className: v.headerName,
                                        variant: 'heading-xxl/bold',
                                        children: n.name
                                    }),
                                    (0, t.jsx)(m.Z, {
                                        size: 24,
                                        guild: n,
                                        tooltipPosition: 'bottom',
                                        tooltipColor: c.ua7.Colors.PRIMARY
                                    }),
                                    p &&
                                        (0, t.jsx)(c.zxk, {
                                            className: v.inviteButton,
                                            size: c.zxk.Sizes.MEDIUM,
                                            color: c.zxk.Colors.PRIMARY,
                                            onClick: () =>
                                                (0, c.ZDy)(async () => {
                                                    let { default: e } = await Promise.all([l.e('7654'), l.e('65699')]).then(l.bind(l, 560114));
                                                    return (l) => {
                                                        var r, a;
                                                        return (0, t.jsx)(
                                                            e,
                                                            ((r = (function (e) {
                                                                for (var n = 1; n < arguments.length; n++) {
                                                                    var l = null != arguments[n] ? arguments[n] : {},
                                                                        t = Object.keys(l);
                                                                    'function' == typeof Object.getOwnPropertySymbols &&
                                                                        (t = t.concat(
                                                                            Object.getOwnPropertySymbols(l).filter(function (e) {
                                                                                return Object.getOwnPropertyDescriptor(l, e).enumerable;
                                                                            })
                                                                        )),
                                                                        t.forEach(function (n) {
                                                                            var t;
                                                                            (t = l[n]),
                                                                                n in e
                                                                                    ? Object.defineProperty(e, n, {
                                                                                          value: t,
                                                                                          enumerable: !0,
                                                                                          configurable: !0,
                                                                                          writable: !0
                                                                                      })
                                                                                    : (e[n] = t);
                                                                        });
                                                                }
                                                                return e;
                                                            })({}, l)),
                                                            (a = a =
                                                                {
                                                                    guild: n,
                                                                    source: b.t4x.GUILD_HOME
                                                                }),
                                                            Object.getOwnPropertyDescriptors
                                                                ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a))
                                                                : (function (e, n) {
                                                                      var l = Object.keys(e);
                                                                      if (Object.getOwnPropertySymbols) {
                                                                          var t = Object.getOwnPropertySymbols(e);
                                                                          l.push.apply(l, t);
                                                                      }
                                                                      return l;
                                                                  })(Object(a)).forEach(function (e) {
                                                                      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e));
                                                                  }),
                                                            r)
                                                        );
                                                    };
                                                }),
                                            children: C.NW.string(C.t.VINpSE)
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
