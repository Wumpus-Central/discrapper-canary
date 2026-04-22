t.d(n, { A: () => E, W: () => b });
var l = t(627968),
    i = t(64700),
    s = t(311907),
    a = t(192308),
    r = t(892547),
    d = t(821609),
    c = t(307301),
    o = t(812771),
    u = t(274541),
    _ = t(761640),
    h = t(769765),
    m = t(808728),
    x = t(71393),
    A = t(576705),
    C = t(954571),
    g = t(637248),
    f = t(743015),
    p = t(652215),
    N = t(746080),
    j = t(985018),
    v = t(551348);
function b(e) {
    let { channelId: n } = e;
    return (0, l.jsx)(o.A, {
        sidebarType: o.X.ThreadSidebar,
        maxWidth: 600,
        children: (0, l.jsx)(u.A, { channelId: n, baseChannelId: N.VV.CHANNEL_BROWSER }),
    });
}
function E(e) {
    let { guildId: n } = e,
        [o, u] = i.useState(""),
        b = (0, s.bG)([x.A], () => x.A.getGuild(n)),
        E = (0, s.bG)([m.Ay], () => m.Ay.getChannels(n)),
        I = (0, s.bG)([h.A], () => h.A.getCategories(n)),
        w = (0, g.vh)(n, I, E, o),
        S = (0, s.bG)([A.A], () => A.A.canWithPartialContext(p.xBc.MANAGE_CHANNELS, { guildId: n })),
        y = (0, s.bG)([_.Ay], () => null != _.Ay.getCurrentSidebarChannelId(N.VV.CHANNEL_BROWSER)),
        D = i.useCallback(() => u(""), [u]),
        O = i.useCallback(() => {
            (0, a.openModalLazy)(async () => {
                let { default: e } = await Promise.all([t.e("64233"), t.e("40988")]).then(t.bind(t, 409200));
                return (t) => (0, l.jsx)(e, { ...t, channelType: null, guildId: n });
            });
        }, [n]);
    return null == b
        ? null
        : (0, l.jsxs)("div", {
              className: v.kw,
              children: [
                  (0, l.jsxs)("div", {
                      className: v.wx,
                      children: [
                          (0, l.jsx)(r.I, {
                              query: o,
                              onChange: (e) => {
                                  "" === o &&
                                      "" !== e &&
                                      C.default.track(p.HAw.SEARCH_STARTED, { search_type: "channel browser" }),
                                      u(e.toLowerCase());
                              },
                              onClear: D,
                              placeholder: j.intl.string(j.t.s5MnmC),
                          }),
                          S ? (0, l.jsx)(d.$, { icon: c.j, onClick: O, text: j.intl.string(j.t.CumH4u) }) : null,
                      ],
                  }),
                  (0, l.jsx)(f.A, { className: v.T, channels: E, categories: w, guild: b, hasSidebar: y }),
              ],
          });
}
