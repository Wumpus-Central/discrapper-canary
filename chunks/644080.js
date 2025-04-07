t.d(n, { Z: () => y });
var r = t(200651),
    l = t(192379),
    a = t(120356),
    i = t.n(a),
    s = t(442837),
    o = t(692547),
    c = t(481060),
    d = t(410030),
    u = t(565138),
    m = t(523751),
    h = t(637853),
    f = t(434404),
    g = t(159300),
    p = t(496675),
    x = t(709586),
    b = t(768581),
    j = t(981631),
    C = t(388032),
    v = t(18314),
    _ = t(63190),
    I = t(102219);
let Z = (e) => {
    let n = l.useMemo(
        () =>
            null == e
                ? null
                : b.ZP.getGuildHomeHeaderURL({
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
            f.Z.open(n.id, j.pNK.ONBOARDING, void 0, j.KsC.SERVER_GUIDE);
        };
    return n.hasFeature(j.oNc.BANNER)
        ? (0, r.jsxs)(c.zxk, {
              className: v.editButton,
              innerClassName: v.editButtonInner,
              type: 'button',
              size: c.zxk.Sizes.MEDIUM,
              color: c.zxk.Colors.BRAND,
              onClick: t,
              children: [
                  (0, r.jsx)(c.FmF, {
                      size: 'xs',
                      color: o.Z.unsafe_rawColors.WHITE_500.css
                  }),
                  C.NW.string(C.t.b0y3DA)
              ]
          })
        : (0, r.jsxs)(c.gtL, {
              color: c.zxk.Colors.GREEN,
              className: v.editButton,
              innerClassName: v.editButtonInner,
              onClick: t,
              children: [
                  (0, r.jsx)(x.Z, {
                      height: 16,
                      width: 16
                  }),
                  C.NW.string(C.t['+7XY39'])
              ]
          });
}
let y = l.memo(function (e) {
    let { guild: n, titleClassName: l } = e,
        { homeHeaderImage: a, isHomeHeaderImageSet: o } = Z(n),
        f = (0, h.b$)(n.id),
        x = (0, s.e7)([p.Z], () => (0, g.b)(p.Z, n)),
        b = (0, d.ZP)();
    return (0, r.jsxs)('div', {
        className: v.header,
        children: [
            (0, r.jsxs)('div', {
                className: v.headerArtWrapper,
                children: [
                    (0, r.jsx)('div', {
                        className: i()(v.headerArt, { [v.headerArtPlaceholder]: !o }),
                        style: { backgroundImage: 'url('.concat(o ? a : 'dark' === b ? _ : I, ')') }
                    }),
                    f && (0, r.jsx)(N, { guild: n })
                ]
            }),
            (0, r.jsx)('div', {
                className: v.titleWrapper,
                children: (0, r.jsxs)('div', {
                    className: l,
                    children: [
                        (0, r.jsx)(u.Z, {
                            className: v.headerIcon,
                            guild: n,
                            size: u.Z.Sizes.XLARGE,
                            active: !0
                        }),
                        (0, r.jsx)(c.y5t, {
                            children: (0, r.jsxs)('div', {
                                className: v.headerName,
                                children: [
                                    (0, r.jsx)(c.X6q, {
                                        className: v.headerName,
                                        variant: 'heading-xxl/bold',
                                        children: n.name
                                    }),
                                    (0, r.jsx)(m.Z, {
                                        size: 24,
                                        guild: n,
                                        tooltipPosition: 'bottom',
                                        tooltipColor: c.ua7.Colors.PRIMARY
                                    }),
                                    x &&
                                        (0, r.jsx)(c.zxk, {
                                            className: v.inviteButton,
                                            size: c.zxk.Sizes.MEDIUM,
                                            color: c.zxk.Colors.PRIMARY,
                                            onClick: () =>
                                                (0, c.ZDy)(async () => {
                                                    let { default: e } = await Promise.all([t.e('7654'), t.e('17439')]).then(t.bind(t, 560114));
                                                    return (t) => {
                                                        var l, a;
                                                        return (0, r.jsx)(
                                                            e,
                                                            ((l = (function (e) {
                                                                for (var n = 1; n < arguments.length; n++) {
                                                                    var t = null != arguments[n] ? arguments[n] : {},
                                                                        r = Object.keys(t);
                                                                    'function' == typeof Object.getOwnPropertySymbols &&
                                                                        (r = r.concat(
                                                                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                                                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                                                            })
                                                                        )),
                                                                        r.forEach(function (n) {
                                                                            var r;
                                                                            (r = t[n]),
                                                                                n in e
                                                                                    ? Object.defineProperty(e, n, {
                                                                                          value: r,
                                                                                          enumerable: !0,
                                                                                          configurable: !0,
                                                                                          writable: !0
                                                                                      })
                                                                                    : (e[n] = r);
                                                                        });
                                                                }
                                                                return e;
                                                            })({}, t)),
                                                            (a = a =
                                                                {
                                                                    guild: n,
                                                                    source: j.t4x.GUILD_HOME
                                                                }),
                                                            Object.getOwnPropertyDescriptors
                                                                ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a))
                                                                : (function (e, n) {
                                                                      var t = Object.keys(e);
                                                                      if (Object.getOwnPropertySymbols) {
                                                                          var r = Object.getOwnPropertySymbols(e);
                                                                          t.push.apply(t, r);
                                                                      }
                                                                      return t;
                                                                  })(Object(a)).forEach(function (e) {
                                                                      Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e));
                                                                  }),
                                                            l)
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
