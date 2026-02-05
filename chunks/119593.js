l.d(n, { A: () => p });
var a = l(627968),
    s = l(64700),
    t = l(417597),
    i = l(397927),
    r = l(843472),
    d = l(256265),
    c = l(90084),
    o = l(42780),
    u = l(138298),
    h = l(734057),
    m = l(320501),
    x = l(576705),
    g = l(486020),
    A = l(225142),
    _ = l(639245),
    f = l(652215),
    j = l(985018),
    b = l(159453);
let I = s.memo(function (e) {
        let { guild: n } = e,
            { guildProfile: l, fetchGuildProfile: t } = (0, c.u)(n.id);
        return (s.useEffect(() => {
            t();
        }, [t]),
        null == l)
            ? null
            : (0, a.jsx)(o.Ay, { profile: l, disableCTA: !0, disableGuildNameClick: !0 });
    }),
    N = (e) => {
        let n,
            { channelId: l, title: c, icon: o } = e,
            _ = (0, t.bG)([h.A], () => h.A.getChannel(l)),
            j = (0, t.bG)([m.A], () => m.A.getMessages(l)),
            I = (0, t.bG)([x.A], () => x.A.can(f.xBc.VIEW_CHANNEL, _)),
            N = j.first(),
            C = (0, d.yC)(N, !1),
            p = C?.length > 0 ? C[0] : null,
            v = null != _ && null == N && !j.loadingMore && !j.ready && !j.hasFetched && I;
        return (
            s.useEffect(() => {
                v && r.A.fetchMessages({ channelId: l, after: l, limit: 5 });
            }, [l, v]),
            (0, a.jsx)(
                i.DUT,
                {
                    className: b.Km,
                    onClick: (e) => {
                        null != _ &&
                            (e.shiftKey
                                ? (0, A.bN)(_.guild_id, _.id)
                                : u.A.openResourceChannelAsSidebar({ guildId: _.guild_id, channelId: _.id }));
                    },
                    children: (0, a.jsxs)(a.Fragment, {
                        children: [
                            ((n = g.Ay.getResourceChannelIconURL({ channelId: l, icon: o })),
                            null != o && null != n
                                ? (0, a.jsx)("img", { src: n, className: b.Oz, alt: "", "aria-hidden": !0 })
                                : null != p
                                  ? (0, a.jsx)("img", { className: b.Oz, src: p.src, alt: p.alt })
                                  : (0, a.jsx)("div", {
                                        className: b.jM,
                                        children: (0, a.jsx)(i.ueQ, { size: "xs", color: "currentColor" }),
                                    })),
                            (0, a.jsx)(i.Text, {
                                className: b.T2,
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
    C = s.memo(function (e) {
        let { guild: n } = e,
            l = (0, _.A)(n.id);
        return 0 === l.length
            ? null
            : (0, a.jsx)(i.ZpM, {
                  className: b.u2,
                  children: (0, a.jsxs)("div", {
                      className: b.Ln,
                      children: [
                          (0, a.jsx)(i.Heading, {
                              className: b.cx,
                              variant: "heading-md/bold",
                              color: "text-strong",
                              children: j.intl.string(j.t.xwY4La),
                          }),
                          (0, a.jsx)("div", {
                              className: b.Tb,
                              children: l.map((e) =>
                                  (0, a.jsx)(
                                      N,
                                      { channelId: e.channelId, title: e.title, icon: e.icon },
                                      `widget-resource-${e.channelId}`,
                                  ),
                              ),
                          }),
                      ],
                  }),
              });
    }),
    p = s.memo(function (e) {
        let { guild: n, isNewMember: l } = e;
        return (0, a.jsxs)("aside", {
            className: b.pz,
            children: [(0, a.jsx)(I, { guild: n }), l && (0, a.jsx)(C, { guild: n })],
        });
    });
