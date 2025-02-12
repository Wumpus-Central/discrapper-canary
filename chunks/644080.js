l.d(n, { Z: () => E });
var a = l(200651),
    i = l(192379),
    t = l(120356),
    r = l.n(t),
    s = l(442837),
    d = l(692547),
    o = l(481060),
    c = l(410030),
    u = l(565138),
    h = l(523751),
    m = l(637853),
    g = l(434404),
    x = l(159300),
    f = l(496675),
    C = l(709586),
    _ = l(768581),
    v = l(981631),
    Z = l(388032),
    I = l(700878),
    p = l(63190),
    j = l(102219);
let N = (e) => {
    let n = i.useMemo(
        () =>
            null == e
                ? null
                : _.ZP.getGuildHomeHeaderURL({
                      id: e.id,
                      homeHeader: e.homeHeader
                  }),
        [e]
    );
    return {
        homeHeaderImage: n,
        isHomeHeaderImageSet: null != n,
        homeHeaderScroll: null != n ? 200 : 0
    };
};
function b(e) {
    let { guild: n } = e,
        l = () => {
            g.Z.open(n.id, v.pNK.ONBOARDING, void 0, v.KsC.SERVER_GUIDE);
        };
    return n.hasFeature(v.oNc.BANNER)
        ? (0, a.jsxs)(o.zxk, {
              className: I.editButton,
              innerClassName: I.editButtonInner,
              type: 'button',
              size: o.zxk.Sizes.MEDIUM,
              color: o.zxk.Colors.BRAND,
              onClick: l,
              children: [
                  (0, a.jsx)(o.FmF, {
                      size: 'xs',
                      color: d.Z.unsafe_rawColors.WHITE_500.css
                  }),
                  Z.intl.string(Z.t.b0y3DA)
              ]
          })
        : (0, a.jsxs)(o.gtL, {
              color: o.zxk.Colors.GREEN,
              className: I.editButton,
              innerClassName: I.editButtonInner,
              onClick: l,
              children: [
                  (0, a.jsx)(C.Z, {
                      height: 16,
                      width: 16
                  }),
                  Z.intl.string(Z.t['+7XY39'])
              ]
          });
}
let E = i.memo(function (e) {
    let { guild: n, titleClassName: i } = e,
        { homeHeaderImage: t, isHomeHeaderImageSet: d } = N(n),
        g = (0, m.b$)(n.id),
        C = (0, s.e7)([f.Z], () => (0, x.b)(f.Z, n)),
        _ = (0, c.ZP)();
    return (0, a.jsxs)('div', {
        className: I.header,
        children: [
            (0, a.jsxs)('div', {
                className: I.headerArtWrapper,
                children: [
                    (0, a.jsx)('div', {
                        className: r()(I.headerArt, { [I.headerArtPlaceholder]: !d }),
                        style: { backgroundImage: 'url('.concat(d ? t : 'dark' === _ ? p : j, ')') }
                    }),
                    g && (0, a.jsx)(b, { guild: n })
                ]
            }),
            (0, a.jsx)('div', {
                className: I.titleWrapper,
                children: (0, a.jsxs)('div', {
                    className: i,
                    children: [
                        (0, a.jsx)(u.Z, {
                            className: I.headerIcon,
                            guild: n,
                            size: u.Z.Sizes.XLARGE,
                            active: !0
                        }),
                        (0, a.jsx)(o.y5t, {
                            children: (0, a.jsxs)('div', {
                                className: I.headerName,
                                children: [
                                    (0, a.jsx)(o.X6q, {
                                        className: I.headerName,
                                        variant: 'heading-xxl/bold',
                                        children: n.name
                                    }),
                                    (0, a.jsx)(h.Z, {
                                        size: 24,
                                        guild: n,
                                        tooltipPosition: 'bottom',
                                        tooltipColor: o.ua7.Colors.PRIMARY
                                    }),
                                    C &&
                                        (0, a.jsx)(o.zxk, {
                                            className: I.inviteButton,
                                            size: o.zxk.Sizes.MEDIUM,
                                            color: o.zxk.Colors.PRIMARY,
                                            onClick: () =>
                                                (0, o.ZDy)(async () => {
                                                    let { default: e } = await Promise.all([l.e('7654'), l.e('13942')]).then(l.bind(l, 560114));
                                                    return (l) =>
                                                        (0, a.jsx)(e, {
                                                            ...l,
                                                            guild: n,
                                                            source: v.t4x.GUILD_HOME
                                                        });
                                                }),
                                            children: Z.intl.string(Z.t.VINpSE)
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
