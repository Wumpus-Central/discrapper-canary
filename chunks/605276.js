t.d(n, { Z: () => I });
var l = t(255367),
    r = t(73800),
    a = t(399606),
    i = t(481060),
    s = t(904245),
    c = t(368844),
    o = t(65361),
    d = t(798476),
    u = t(6025),
    m = t(592125),
    h = t(375954),
    f = t(496675),
    g = t(768581),
    p = t(526120),
    x = t(825334),
    b = t(981631),
    j = t(388032),
    C = t(617449);
let v = r.memo(function (e) {
        let { guild: n } = e,
            { guildProfile: t, fetchGuildProfile: a } = (0, o.u)(n.id);
        return (r.useEffect(() => {
            a();
        }, [a]),
        null == t)
            ? null
            : (0, l.jsx)(d.ZP, {
                  profile: t,
                  disableCTA: !0,
                  disableGuildNameClick: !0
              });
    }),
    _ = (e) => {
        let { channelId: n, title: t, icon: o } = e,
            d = (0, a.e7)([m.Z], () => m.Z.getChannel(n)),
            x = (0, a.e7)([h.Z], () => h.Z.getMessages(n)),
            j = (0, a.e7)([f.Z], () => f.Z.can(b.Plq.VIEW_CHANNEL, d)),
            v = x.first(),
            _ = (0, c.zy)(v, !1),
            Z = (null == _ ? void 0 : _.length) > 0 ? _[0] : null,
            I = null != d && null == v && !x.loadingMore && !x.ready && !x.hasFetched && j;
        r.useEffect(() => {
            I &&
                s.Z.fetchMessages({
                    channelId: n,
                    after: n,
                    limit: 5
                });
        }, [n, I]);
        let y = (e) => {
            null != d &&
                (e.shiftKey
                    ? (0, p.C3)(d.guild_id, d.id)
                    : u.Z.openResourceChannelAsSidebar({
                          guildId: d.guild_id,
                          channelId: d.id
                      }));
        };
        return (0, l.jsx)(
            i.P3F,
            {
                className: C.resourceChannel,
                onClick: (e) => y(e),
                children: (0, l.jsxs)(l.Fragment, {
                    children: [
                        (() => {
                            let e = g.ZP.getResourceChannelIconURL({
                                channelId: n,
                                icon: o
                            });
                            return null != o && null != e
                                ? (0, l.jsx)('img', {
                                      src: e,
                                      className: C.resourceImage,
                                      alt: '',
                                      'aria-hidden': !0
                                  })
                                : null != Z
                                  ? (0, l.jsx)('img', {
                                        className: C.resourceImage,
                                        src: Z.src,
                                        alt: Z.alt
                                    })
                                  : (0, l.jsx)('div', {
                                        className: C.placeholderImage,
                                        children: (0, l.jsx)(i.hH0, {
                                            size: 'xs',
                                            color: 'currentColor'
                                        })
                                    });
                        })(),
                        (0, l.jsx)(i.Text, {
                            className: C.guildInfoText,
                            variant: 'text-sm/semibold',
                            color: 'none',
                            children: t
                        })
                    ]
                })
            },
            n
        );
    },
    Z = r.memo(function (e) {
        let { guild: n } = e,
            t = (0, x.Z)(n.id);
        return 0 === t.length
            ? null
            : (0, l.jsx)(i.Zbd, {
                  className: C.sidebarCardWrapper,
                  children: (0, l.jsxs)('div', {
                      className: C.sidebarCard,
                      children: [
                          (0, l.jsx)(i.X6q, {
                              className: C.sidebarCardHeader,
                              variant: 'heading-md/bold',
                              color: 'header-primary',
                              children: j.intl.string(j.t.xwY4LS)
                          }),
                          (0, l.jsx)('div', {
                              className: C.resourceChannelsList,
                              children: t.map((e) =>
                                  (0, l.jsx)(
                                      _,
                                      {
                                          channelId: e.channelId,
                                          title: e.title,
                                          icon: e.icon
                                      },
                                      'widget-resource-'.concat(e.channelId)
                                  )
                              )
                          })
                      ]
                  })
              });
    }),
    I = r.memo(function (e) {
        let { guild: n, isNewMember: t } = e;
        return (0, l.jsxs)('aside', {
            className: C.sidebar,
            children: [(0, l.jsx)(v, { guild: n }), t && (0, l.jsx)(Z, { guild: n })]
        });
    });
