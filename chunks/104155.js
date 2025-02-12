t.d(n, {
    I: () => I,
    Z: () => j
}),
    t(47120);
var l = t(200651),
    i = t(192379),
    a = t(442837),
    r = t(481060),
    o = t(325708),
    s = t(213557),
    d = t(433355),
    c = t(324067),
    u = t(984933),
    m = t(430824),
    h = t(496675),
    x = t(626135),
    _ = t(216306),
    p = t(775028),
    f = t(981631),
    g = t(176505),
    C = t(388032),
    v = t(663844);
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
function j(e) {
    let { guildId: n } = e,
        [o, s] = i.useState(''),
        I = (0, a.e7)([m.Z], () => m.Z.getGuild(n)),
        j = (0, a.e7)([u.ZP], () => u.ZP.getChannels(n)),
        N = (0, a.e7)([c.Z], () => c.Z.getCategories(n)),
        Z = (0, _.Fo)(n, N, j, o),
        b = (0, a.e7)([h.Z], () => h.Z.canWithPartialContext(f.Plq.MANAGE_CHANNELS, { guildId: n })),
        E = (0, a.e7)([d.ZP], () => null != d.ZP.getCurrentSidebarChannelId(g.oC.CHANNEL_BROWSER)),
        w = i.useCallback(() => s(''), [s]),
        S = i.useCallback(() => {
            (0, r.ZDy)(async () => {
                let { default: e } = await Promise.all([t.e('45094'), t.e('94191')]).then(t.bind(t, 218613));
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
              className: v.pageBody,
              children: [
                  (0, l.jsxs)('div', {
                      className: v.header,
                      children: [
                          (0, l.jsx)(r.E1j, {
                              className: v.search,
                              size: r.E1j.Sizes.MEDIUM,
                              query: o,
                              onChange: (e) => {
                                  '' === o && '' !== e && x.default.track(f.rMx.SEARCH_STARTED, { search_type: 'channel browser' }), s(e.toLowerCase());
                              },
                              onClear: w,
                              placeholder: C.intl.string(C.t.s5MnmJ)
                          }),
                          b
                              ? (0, l.jsxs)(r.zxk, {
                                    className: v.createButton,
                                    innerClassName: v.createButtonInner,
                                    onClick: S,
                                    children: [
                                        (0, l.jsx)(r.qJs, {
                                            size: 'sm',
                                            color: 'currentColor',
                                            className: v.createIcon
                                        }),
                                        C.intl.string(C.t.CumH4u)
                                    ]
                                })
                              : null
                      ]
                  }),
                  (0, l.jsx)(p.Z, {
                      className: v.browser,
                      channels: j,
                      categories: Z,
                      guild: I,
                      hasSidebar: E
                  })
              ]
          });
}
