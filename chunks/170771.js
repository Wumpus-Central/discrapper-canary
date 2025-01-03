n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651),
    a = n(192379),
    l = n(120356),
    r = n.n(l),
    c = n(91192),
    o = n(481060),
    s = n(768581),
    d = n(4461),
    u = n(924489),
    m = n(824606),
    g = n(388032),
    f = n(743790);
function p(e) {
    var t, n, l, p;
    let { application: h, className: _, childrenClassName: x, showAdd: C, showMutualGuilds: v, showPrimaryCategory: b, children: j, onView: I, guildCountPosition: N = 'top', subheaderTextVariant: S = 'text-sm/normal', mutualGuildShownMax: y, guildIconSize: A, source: T } = e,
        L = (0, c.JA)(h.id),
        R = s.ZP.getApplicationIconURL({
            id: h.id,
            icon: h.icon,
            size: 48
        }),
        { canInstall: P, install: E } = (0, d.P)(h),
        Z = (0, m.Z)({
            application: h,
            showMutualGuilds: v
        }),
        M = a.useCallback(
            (e) => {
                e.stopPropagation(), E(T);
            },
            [E, T]
        ),
        k = null === (t = h.categories) || void 0 === t ? void 0 : t[0],
        w = (null !== (l = null === (n = h.directory_entry) || void 0 === n ? void 0 : n.guild_count) && void 0 !== l ? l : 0) > 0 || Z.length > 0,
        G = (0, i.jsx)(u.Z, {
            application: h,
            textVariant: S,
            mutualGuilds: Z,
            mutualGuildShownMax: y,
            guildIconSize: A,
            compact: !0
        }),
        O = b && null != k,
        D = w && 'top' === N,
        U = w && 'bottom' === N,
        B = null !== (p = h.storefront_available) && void 0 !== p && p,
        H = (0, i.jsxs)('article', {
            children: [
                (0, i.jsxs)('div', {
                    className: f.topWrapper,
                    children: [
                        (0, i.jsx)('img', {
                            className: f.icon,
                            alt: '',
                            'aria-hidden': !0,
                            src: R,
                            width: 48,
                            height: 48
                        }),
                        (0, i.jsxs)('div', {
                            className: f.info,
                            children: [
                                (0, i.jsx)(o.Heading, {
                                    variant: 'heading-md/medium',
                                    children: h.name
                                }),
                                (O || D) &&
                                    (0, i.jsxs)('div', {
                                        className: f.details,
                                        children: [
                                            O
                                                ? (0, i.jsx)(o.Text, {
                                                      tag: 'span',
                                                      color: 'header-secondary',
                                                      variant: S,
                                                      children: k.name
                                                  })
                                                : null,
                                            D
                                                ? (0, i.jsxs)(i.Fragment, {
                                                      children: [
                                                          O
                                                              ? (0, i.jsx)('span', {
                                                                    className: f.bullet,
                                                                    children: '\u2022'
                                                                })
                                                              : null,
                                                          G,
                                                          B
                                                              ? (0, i.jsxs)('div', {
                                                                    className: f.premiumContainer,
                                                                    children: [
                                                                        (0, i.jsx)('span', {
                                                                            className: f.bullet,
                                                                            children: '\u2022'
                                                                        }),
                                                                        (0, i.jsx)(o.TicketIcon, {
                                                                            size: 'xs',
                                                                            color: 'currentColor'
                                                                        }),
                                                                        (0, i.jsx)(o.Text, {
                                                                            variant: 'text-sm/medium',
                                                                            className: f.premiumText,
                                                                            children: g.intl.string(g.t['19wGKi'])
                                                                        })
                                                                    ]
                                                                })
                                                              : null
                                                      ]
                                                  })
                                                : null
                                        ]
                                    })
                            ]
                        }),
                        C
                            ? (0, i.jsx)(o.Button, {
                                  size: o.Button.Sizes.SMALL,
                                  onClick: M,
                                  disabled: !P,
                                  children: g.intl.string(g.t.qRZ35u)
                              })
                            : null
                    ]
                }),
                null != j || null != x
                    ? (0, i.jsx)('div', {
                          className: r()(x, f.__invalid_children),
                          children: j
                      })
                    : null,
                U
                    ? (0, i.jsx)('div', {
                          className: f.bottomGuildCountContainer,
                          children: G
                      })
                    : null
            ]
        });
    return null != I
        ? (0, i.jsx)(o.Clickable, {
              tag: 'li',
              onClick: () => I({ mutualGuilds: Z }),
              className: r()(_, f.listing, f.clickable),
              ...L,
              children: H
          })
        : (0, i.jsx)(o.FocusRing, {
              children: (0, i.jsx)('li', {
                  className: r()(_, f.listing),
                  ...L,
                  children: H
              })
          });
}
