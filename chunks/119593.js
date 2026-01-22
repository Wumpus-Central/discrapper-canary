l.d(n, {
    A: () => O,
});
var t = l(627968),
    a = l(64700),
    r = l(417597),
    i = l(397927),
    s = l(843472),
    c = l(256265),
    d = l(90084),
    o = l(42780),
    u = l(138298),
    f = l(734057),
    h = l(320501),
    b = l(576705),
    m = l(486020),
    x = l(225142),
    g = l(639245),
    j = l(652215),
    A = l(985018),
    p = l(159453);
let v = a.memo(function (e) {
        let { guild: n } = e,
            { guildProfile: l, fetchGuildProfile: r } = (0, d.u)(n.id);
        return (a.useEffect(() => {
            r();
        }, [r]),
        null == l)
            ? null
            : (0, t.jsx)(o.Ay, {
                  profile: l,
                  disableCTA: !0,
                  disableGuildNameClick: !0,
              });
    }),
    y = (e) => {
        let n,
            { channelId: l, title: d, icon: o } = e,
            g = (0, r.bG)([f.A], () => f.A.getChannel(l)),
            A = (0, r.bG)([h.A], () => h.A.getMessages(l)),
            v = (0, r.bG)([b.A], () => b.A.can(j.xBc.VIEW_CHANNEL, g)),
            y = A.first(),
            N = (0, c.yC)(y, !1),
            O = (null == N ? void 0 : N.length) > 0 ? N[0] : null,
            I = null != g && null == y && !A.loadingMore && !A.ready && !A.hasFetched && v;
        return (
            a.useEffect(() => {
                I &&
                    s.A.fetchMessages({
                        channelId: l,
                        after: l,
                        limit: 5,
                    });
            }, [l, I]),
            (0, t.jsx)(
                i.DUT,
                {
                    className: p.Km,
                    onClick: (e) => {
                        null != g &&
                            (e.shiftKey
                                ? (0, x.bN)(g.guild_id, g.id)
                                : u.A.openResourceChannelAsSidebar({
                                      guildId: g.guild_id,
                                      channelId: g.id,
                                  }));
                    },
                    children: (0, t.jsxs)(t.Fragment, {
                        children: [
                            ((n = m.Ay.getResourceChannelIconURL({
                                channelId: l,
                                icon: o,
                            })),
                            null != o && null != n
                                ? (0, t.jsx)("img", {
                                      src: n,
                                      className: p.Oz,
                                      alt: "",
                                      "aria-hidden": !0,
                                  })
                                : null != O
                                  ? (0, t.jsx)("img", {
                                        className: p.Oz,
                                        src: O.src,
                                        alt: O.alt,
                                    })
                                  : (0, t.jsx)("div", {
                                        className: p.jM,
                                        children: (0, t.jsx)(i.ueQ, {
                                            size: "xs",
                                            color: "currentColor",
                                        }),
                                    })),
                            (0, t.jsx)(i.Text, {
                                className: p.T2,
                                variant: "text-sm/semibold",
                                color: "none",
                                children: d,
                            }),
                        ],
                    }),
                },
                l,
            )
        );
    },
    N = a.memo(function (e) {
        let { guild: n } = e,
            l = (0, g.A)(n.id);
        return 0 === l.length
            ? null
            : (0, t.jsx)(i.ZpM, {
                  className: p.u2,
                  children: (0, t.jsxs)("div", {
                      className: p.Ln,
                      children: [
                          (0, t.jsx)(i.Heading, {
                              className: p.cx,
                              variant: "heading-md/bold",
                              color: "text-strong",
                              children: A.intl.string(A.t.xwY4La),
                          }),
                          (0, t.jsx)("div", {
                              className: p.Tb,
                              children: l.map((e) =>
                                  (0, t.jsx)(
                                      y,
                                      {
                                          channelId: e.channelId,
                                          title: e.title,
                                          icon: e.icon,
                                      },
                                      "widget-resource-".concat(e.channelId),
                                  ),
                              ),
                          }),
                      ],
                  }),
              });
    }),
    O = a.memo(function (e) {
        let { guild: n, isNewMember: l } = e;
        return (0, t.jsxs)("aside", {
            className: p.pz,
            children: [
                (0, t.jsx)(v, {
                    guild: n,
                }),
                l &&
                    (0, t.jsx)(N, {
                        guild: n,
                    }),
            ],
        });
    });
