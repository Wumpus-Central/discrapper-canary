n.d(t, { A: () => j, W: () => N });
var l = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(812771),
    d = n(274541),
    c = n(761640),
    o = n(769765),
    u = n(808728),
    _ = n(71393),
    h = n(576705),
    x = n(954571),
    m = n(637248),
    g = n(743015),
    A = n(652215),
    C = n(746080),
    f = n(985018),
    p = n(853124);
function N(e) {
    let { channelId: t } = e;
    return (0, l.jsx)(r.A, {
        sidebarType: r.X.ThreadSidebar,
        maxWidth: 600,
        children: (0, l.jsx)(d.A, { channelId: t, baseChannelId: C.VV.CHANNEL_BROWSER }),
    });
}
function j(e) {
    let { guildId: t } = e,
        [r, d] = i.useState(""),
        N = (0, s.bG)([_.A], () => _.A.getGuild(t)),
        j = (0, s.bG)([u.Ay], () => u.Ay.getChannels(t)),
        v = (0, s.bG)([o.A], () => o.A.getCategories(t)),
        b = (0, m.vh)(t, v, j, r),
        I = (0, s.bG)([h.A], () => h.A.canWithPartialContext(A.xBc.MANAGE_CHANNELS, { guildId: t })),
        E = (0, s.bG)([c.Ay], () => null != c.Ay.getCurrentSidebarChannelId(C.VV.CHANNEL_BROWSER)),
        S = i.useCallback(() => d(""), [d]),
        w = i.useCallback(() => {
            (0, a.mMO)(async () => {
                let { default: e } = await Promise.all([n.e("64233"), n.e("38405")]).then(n.bind(n, 409200));
                return (n) => (0, l.jsx)(e, { ...n, channelType: null, guildId: t });
            });
        }, [t]);
    return null == N
        ? null
        : (0, l.jsxs)("div", {
              className: p.kw,
              children: [
                  (0, l.jsxs)("div", {
                      className: p.wx,
                      children: [
                          (0, l.jsx)(a.IWV, {
                              query: r,
                              onChange: (e) => {
                                  "" === r &&
                                      "" !== e &&
                                      x.default.track(A.HAw.SEARCH_STARTED, { search_type: "channel browser" }),
                                      d(e.toLowerCase());
                              },
                              onClear: S,
                              placeholder: f.intl.string(f.t.s5MnmC),
                          }),
                          I ? (0, l.jsx)(a.Button, { icon: a.j96, onClick: w, text: f.intl.string(f.t.CumH4u) }) : null,
                      ],
                  }),
                  (0, l.jsx)(g.A, { className: p.T, channels: j, categories: b, guild: N, hasSidebar: E }),
              ],
          });
}
