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
    v = l(768581),
    I = l(981631),
    p = l(388032),
    Z = l(521509),
    j = l(63190),
    N = l(102219);
let _ = (e) => {
    let n = i.useMemo(
        () =>
            null == e
                ? null
                : v.ZP.getGuildHomeHeaderURL({
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
            g.Z.open(n.id, I.pNK.ONBOARDING, void 0, I.KsC.SERVER_GUIDE);
        };
    return n.hasFeature(I.oNc.BANNER)
        ? (0, a.jsxs)(o.Button, {
              className: Z.editButton,
              innerClassName: Z.editButtonInner,
              type: 'button',
              size: o.Button.Sizes.MEDIUM,
              color: o.Button.Colors.BRAND,
              onClick: l,
              children: [
                  (0, a.jsx)(o.ImagePlusIcon, {
                      size: 'xs',
                      color: d.Z.unsafe_rawColors.WHITE_500.css
                  }),
                  p.intl.string(p.t.b0y3DA)
              ]
          })
        : (0, a.jsxs)(o.ShinyButton, {
              color: o.Button.Colors.GREEN,
              className: Z.editButton,
              innerClassName: Z.editButtonInner,
              onClick: l,
              children: [
                  (0, a.jsx)(C.Z, {
                      height: 16,
                      width: 16
                  }),
                  p.intl.string(p.t['+7XY39'])
              ]
          });
}
let A = i.memo(function (e) {
    let { guild: n, titleClassName: i } = e,
        { homeHeaderImage: t, isHomeHeaderImageSet: d } = _(n),
        g = (0, m.b$)(n.id),
        C = (0, s.e7)([f.Z], () => (0, x.b)(f.Z, n)),
        v = (0, c.ZP)();
    return (0, a.jsxs)('div', {
        className: Z.header,
        children: [
            (0, a.jsxs)('div', {
                className: Z.headerArtWrapper,
                children: [
                    (0, a.jsx)('div', {
                        className: r()(Z.headerArt, { [Z.headerArtPlaceholder]: !d }),
                        style: { backgroundImage: 'url('.concat(d ? t : 'dark' === v ? j : N, ')') }
                    }),
                    g && (0, a.jsx)(b, { guild: n })
                ]
            }),
            (0, a.jsx)('div', {
                className: Z.titleWrapper,
                children: (0, a.jsxs)('div', {
                    className: i,
                    children: [
                        (0, a.jsx)(u.Z, {
                            className: Z.headerIcon,
                            guild: n,
                            size: u.Z.Sizes.XLARGE,
                            active: !0
                        }),
                        (0, a.jsx)(o.HeadingLevel, {
                            children: (0, a.jsxs)('div', {
                                className: Z.headerName,
                                children: [
                                    (0, a.jsx)(o.Heading, {
                                        className: Z.headerName,
                                        variant: 'heading-xxl/bold',
                                        children: n.name
                                    }),
                                    (0, a.jsx)(h.Z, {
                                        size: 24,
                                        guild: n,
                                        tooltipPosition: 'bottom',
                                        tooltipColor: o.Tooltip.Colors.PRIMARY
                                    }),
                                    C &&
                                        (0, a.jsx)(o.Button, {
                                            className: Z.inviteButton,
                                            size: o.Button.Sizes.MEDIUM,
                                            color: o.Button.Colors.PRIMARY,
                                            onClick: () =>
                                                (0, o.openModalLazy)(async () => {
                                                    let { default: e } = await Promise.all([l.e('7654'), l.e('54655')]).then(l.bind(l, 560114));
                                                    return (l) =>
                                                        (0, a.jsx)(e, {
                                                            ...l,
                                                            guild: n,
                                                            source: I.t4x.GUILD_HOME
                                                        });
                                                }),
                                            children: p.intl.string(p.t.VINpSE)
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
n.Z = A;
