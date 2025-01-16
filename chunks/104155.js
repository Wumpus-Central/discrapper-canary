t.d(n, {
    I: function () {
        return I;
    },
    Z: function () {
        return N;
    }
}),
    t(47120);
var l = t(200651),
    a = t(192379),
    i = t(442837),
    r = t(481060),
    o = t(325708),
    s = t(213557),
    c = t(433355),
    d = t(324067),
    u = t(984933),
    h = t(430824),
    m = t(496675),
    f = t(626135),
    p = t(216306),
    x = t(775028),
    C = t(981631),
    g = t(176505),
    _ = t(388032),
    b = t(206378);
function I(e) {
    let { channelId: n } = e;
    return (0, l.jsx)(o.Z, {
        sidebarType: o.y.ThreadSidebar,
        maxWidth: 600,
        children: (0, l.jsx)(s.Z, {
            channelId: n,
            baseChannelId: g.oC.CHANNEL_BROWSER
        })
    });
}
function N(e) {
    let { guildId: n } = e,
        [o, s] = a.useState(''),
        I = (0, i.e7)([h.Z], () => h.Z.getGuild(n)),
        N = (0, i.e7)([u.ZP], () => u.ZP.getChannels(n)),
        v = (0, i.e7)([d.Z], () => d.Z.getCategories(n)),
        Z = (0, p.Fo)(n, v, N, o),
        j = (0, i.e7)([m.Z], () => m.Z.canWithPartialContext(C.Plq.MANAGE_CHANNELS, { guildId: n })),
        B = (0, i.e7)([c.ZP], () => null != c.ZP.getCurrentSidebarChannelId(g.oC.CHANNEL_BROWSER)),
        E = a.useCallback(() => s(''), [s]),
        S = a.useCallback(() => {
            (0, r.openModalLazy)(async () => {
                let { default: e } = await Promise.all([t.e('45094'), t.e('5506')]).then(t.bind(t, 218613));
                return (t) =>
                    (0, l.jsx)(e, {
                        ...t,
                        channelType: null,
                        guildId: n
                    });
            });
        }, [n]);
    return null == I
        ? null
        : (0, l.jsxs)('div', {
              className: b.pageBody,
              children: [
                  (0, l.jsxs)('div', {
                      className: b.header,
                      children: [
                          (0, l.jsx)(r.SearchBar, {
                              className: b.search,
                              size: r.SearchBar.Sizes.MEDIUM,
                              query: o,
                              onChange: (e) => {
                                  '' === o && '' !== e && f.default.track(C.rMx.SEARCH_STARTED, { search_type: 'channel browser' }), s(e.toLowerCase());
                              },
                              onClear: E,
                              placeholder: _.intl.string(_.t.s5MnmJ)
                          }),
                          j
                              ? (0, l.jsxs)(r.Button, {
                                    className: b.createButton,
                                    innerClassName: b.createButtonInner,
                                    onClick: S,
                                    children: [
                                        (0, l.jsx)(r.PlusSmallIcon, {
                                            size: 'sm',
                                            color: 'currentColor',
                                            className: b.createIcon
                                        }),
                                        _.intl.string(_.t.CumH4u)
                                    ]
                                })
                              : null
                      ]
                  }),
                  (0, l.jsx)(x.Z, {
                      className: b.browser,
                      channels: N,
                      categories: Z,
                      guild: I,
                      hasSidebar: B
                  })
              ]
          });
}
