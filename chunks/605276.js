t.d(n, { Z: () => y });
var a = t(54381),
    l = t(473749),
    r = t(399606),
    i = t(481060),
    c = t(904245),
    s = t(368844),
    d = t(65361),
    o = t(798476),
    u = t(6025),
    m = t(592125),
    h = t(375954),
    f = t(496675),
    b = t(768581),
    g = t(526120),
    p = t(825334),
    x = t(981631),
    j = t(388032),
    C = t(358053);
let v = l.memo(function (e) {
        let { guild: n } = e,
            { guildProfile: t, fetchGuildProfile: r } = (0, d.u)(n.id);
        return (l.useEffect(() => {
            r();
        }, [r]),
        null == t)
            ? null
            : (0, a.jsx)(o.ZP, {
                  profile: t,
                  disableCTA: !0,
                  disableGuildNameClick: !0,
              });
    }),
    Z = (e) => {
        let { channelId: n, title: t, icon: d } = e,
            o = (0, r.e7)([m.Z], () => m.Z.getChannel(n)),
            p = (0, r.e7)([h.Z], () => h.Z.getMessages(n)),
            j = (0, r.e7)([f.Z], () => f.Z.can(x.Plq.VIEW_CHANNEL, o)),
            v = p.first(),
            Z = (0, s.zy)(v, !1),
            I = (null == Z ? void 0 : Z.length) > 0 ? Z[0] : null,
            y = null != o && null == v && !p.loadingMore && !p.ready && !p.hasFetched && j;
        return (
            l.useEffect(() => {
                y &&
                    c.Z.fetchMessages({
                        channelId: n,
                        after: n,
                        limit: 5,
                    });
            }, [n, y]),
            (0, a.jsx)(
                i.P3F,
                {
                    className: C.resourceChannel,
                    onClick: (e) => {
                        null != o &&
                            (e.shiftKey
                                ? (0, g.C3)(o.guild_id, o.id)
                                : u.Z.openResourceChannelAsSidebar({
                                      guildId: o.guild_id,
                                      channelId: o.id,
                                  }));
                    },
                    children: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (() => {
                                let e = b.ZP.getResourceChannelIconURL({
                                    channelId: n,
                                    icon: d,
                                });
                                return null != d && null != e
                                    ? (0, a.jsx)("img", {
                                          src: e,
                                          className: C.resourceImage,
                                          alt: "",
                                          "aria-hidden": !0,
                                      })
                                    : null != I
                                      ? (0, a.jsx)("img", {
                                            className: C.resourceImage,
                                            src: I.src,
                                            alt: I.alt,
                                        })
                                      : (0, a.jsx)("div", {
                                            className: C.placeholderImage,
                                            children: (0, a.jsx)(i.hH0, {
                                                size: "xs",
                                                color: "currentColor",
                                            }),
                                        });
                            })(),
                            (0, a.jsx)(i.Text, {
                                className: C.guildInfoText,
                                variant: "text-sm/semibold",
                                color: "none",
                                children: t,
                            }),
                        ],
                    }),
                },
                n,
            )
        );
    },
    I = l.memo(function (e) {
        let { guild: n } = e,
            t = (0, p.Z)(n.id);
        return 0 === t.length
            ? null
            : (0, a.jsx)(i.Zbd, {
                  className: C.sidebarCardWrapper,
                  children: (0, a.jsxs)("div", {
                      className: C.sidebarCard,
                      children: [
                          (0, a.jsx)(i.Heading, {
                              className: C.sidebarCardHeader,
                              variant: "heading-md/bold",
                              color: "header-primary",
                              children: j.intl.string(j.t.xwY4La),
                          }),
                          (0, a.jsx)("div", {
                              className: C.resourceChannelsList,
                              children: t.map((e) =>
                                  (0, a.jsx)(
                                      Z,
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
    y = l.memo(function (e) {
        let { guild: n, isNewMember: t } = e;
        return (0, a.jsxs)("aside", {
            className: C.sidebar,
            children: [(0, a.jsx)(v, { guild: n }), t && (0, a.jsx)(I, { guild: n })],
        });
    });
