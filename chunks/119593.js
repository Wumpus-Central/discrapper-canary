l.d(n, { A: () => G });
var a = l(627968),
    s = l(64700),
    t = l(417597),
    i = l(261958),
    r = l(939249),
    d = l(834730),
    c = l(359778),
    o = l(534514),
    u = l(843472),
    h = l(256265),
    m = l(90084),
    x = l(42780),
    g = l(138298),
    A = l(734057),
    _ = l(320501),
    f = l(576705),
    j = l(486020),
    b = l(225142),
    I = l(639245),
    N = l(652215),
    C = l(985018),
    v = l(354476);
let p = s.memo(function (e) {
        let { guild: n } = e,
            { guildProfile: l, fetchGuildProfile: t } = (0, m.u)(n.id);
        return (s.useEffect(() => {
            t();
        }, [t]),
        null == l)
            ? null
            : (0, a.jsx)(x.Ay, { profile: l, disableCTA: !0, disableGuildNameClick: !0 });
    }),
    E = (e) => {
        let n,
            { channelId: l, title: c, icon: o } = e,
            m = (0, t.bG)([A.A], () => A.A.getChannel(l)),
            x = (0, t.bG)([_.A], () => _.A.getMessages(l)),
            I = (0, t.bG)([f.A], () => f.A.can(N.xBc.VIEW_CHANNEL, m)),
            C = x.first(),
            p = (0, h.yC)(C, !1),
            E = p?.length > 0 ? p[0] : null,
            y = null != m && null == C && !x.loadingMore && !x.ready && !x.hasFetched && I;
        return (
            s.useEffect(() => {
                y && u.A.fetchMessages({ channelId: l, after: l, limit: 5 });
            }, [l, y]),
            (0, a.jsx)(
                r.D,
                {
                    className: v.Km,
                    onClick: (e) => {
                        null != m &&
                            (e.shiftKey
                                ? (0, b.bN)(m.guild_id, m.id)
                                : g.A.openResourceChannelAsSidebar({ guildId: m.guild_id, channelId: m.id }));
                    },
                    children: (0, a.jsxs)(a.Fragment, {
                        children: [
                            ((n = j.Ay.getResourceChannelIconURL({ channelId: l, icon: o })),
                            null != o && null != n
                                ? (0, a.jsx)("img", { src: n, className: v.Oz, alt: "", "aria-hidden": !0 })
                                : null != E
                                  ? (0, a.jsx)("img", { className: v.Oz, src: E.src, alt: E.alt })
                                  : (0, a.jsx)("div", {
                                        className: v.jM,
                                        children: (0, a.jsx)(i.u, { size: "xs", color: "currentColor" }),
                                    })),
                            (0, a.jsx)(d.E, {
                                className: v.T2,
                                variant: "text-sm/semibold",
                                color: "none",
                                children: c,
                            }),
                        ],
                    }),
                },
                l,
            )
        );
    },
    y = s.memo(function (e) {
        let { guild: n } = e,
            l = (0, I.A)(n.id);
        return 0 === l.length
            ? null
            : (0, a.jsx)(c.Z, {
                  className: v.u2,
                  children: (0, a.jsxs)("div", {
                      className: v.Ln,
                      children: [
                          (0, a.jsx)(o.D, {
                              className: v.cx,
                              variant: "heading-md/bold",
                              color: "text-strong",
                              children: C.intl.string(C.t.xwY4La),
                          }),
                          (0, a.jsx)("div", {
                              className: v.Tb,
                              children: l.map((e) =>
                                  (0, a.jsx)(
                                      E,
                                      { channelId: e.channelId, title: e.title, icon: e.icon },
                                      `widget-resource-${e.channelId}`,
                                  ),
                              ),
                          }),
                      ],
                  }),
              });
    }),
    G = s.memo(function (e) {
        let { guild: n, isNewMember: l } = e;
        return (0, a.jsxs)("aside", {
            className: v.pz,
            children: [(0, a.jsx)(p, { guild: n }), l && (0, a.jsx)(y, { guild: n })],
        });
    });
