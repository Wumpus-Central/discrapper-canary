t.d(n, { Z: () => w }), t(953529);
var r = t(200651),
    l = t(192379),
    a = t(399606),
    i = t(481060),
    s = t(904245),
    o = t(368844),
    c = t(249842),
    d = t(838367),
    u = t(576306),
    m = t(65361),
    h = t(910200),
    f = t(6025),
    g = t(592125),
    p = t(375954),
    x = t(496675),
    b = t(768581),
    j = t(526120),
    C = t(825334),
    v = t(981631),
    _ = t(388032),
    I = t(617449);
function Z(e) {
    let { guild: n } = e,
        t = (0, a.e7)([d.Z], () => d.Z.getGuild(n.id), [n]);
    return (
        l.useEffect(() => {
            null == t && (0, c.P)(n.id);
        }, [n.id, t]),
        (0, r.jsx)(i.Zbd, {
            className: I.sidebarCardWrapper,
            children: (0, r.jsxs)('div', {
                className: I.sidebarCard,
                children: [
                    (0, r.jsx)(i.X6q, {
                        className: I.sidebarCardHeader,
                        variant: 'heading-md/bold',
                        color: 'header-primary',
                        children: _.NW.string(_.t['6YriCA'])
                    }),
                    (0, r.jsx)(i.Text, {
                        className: I.guildDescription,
                        variant: 'text-md/normal',
                        color: 'text-normal',
                        children: n.description
                    }),
                    (0, r.jsx)('div', {
                        className: I.guildInfo,
                        children:
                            (null == t ? void 0 : t.memberCount) != null &&
                            (null == t ? void 0 : t.presenceCount) != null &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)('div', { className: I.dotOnline }),
                                    (0, r.jsx)(i.Text, {
                                        className: I.guildInfoText,
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        children: _.NW.format(_.t.QAdRCw, {
                                            online: null == t ? void 0 : t.presenceCount,
                                            total: null == t ? void 0 : t.memberCount
                                        })
                                    })
                                ]
                            })
                    })
                ]
            })
        })
    );
}
function N(e) {
    let { guild: n } = e,
        { guildProfile: t, fetchGuildProfile: a } = (0, m.u)(n.id);
    return (l.useEffect(() => {
        a();
    }, [a]),
    null == t)
        ? null
        : (0, r.jsx)(h.ZP, {
              profile: t,
              disableCTA: !0
          });
}
let y = l.memo(function (e) {
        let { guild: n } = e;
        return (0, u.h)() ? (0, r.jsx)(N, { guild: n }) : (0, r.jsx)(Z, { guild: n });
    }),
    O = (e) => {
        let { channelId: n, title: t, icon: c } = e,
            d = (0, a.e7)([g.Z], () => g.Z.getChannel(n)),
            u = (0, a.e7)([p.Z], () => p.Z.getMessages(n)),
            m = (0, a.e7)([x.Z], () => x.Z.can(v.Plq.VIEW_CHANNEL, d)),
            h = u.first(),
            C = (0, o.zy)(h, !1),
            _ = (null == C ? void 0 : C.length) > 0 ? C[0] : null,
            Z = null != d && null == h && !u.loadingMore && !u.ready && !u.hasFetched && m;
        l.useEffect(() => {
            Z &&
                s.Z.fetchMessages({
                    channelId: n,
                    after: n,
                    limit: 5
                });
        }, [n, Z]);
        let N = (e) => {
            null != d &&
                (e.shiftKey
                    ? (0, j.C3)(d.guild_id, d.id)
                    : f.Z.openResourceChannelAsSidebar({
                          guildId: d.guild_id,
                          channelId: d.id
                      }));
        };
        return (0, r.jsx)(
            i.P3F,
            {
                className: I.resourceChannel,
                onClick: (e) => N(e),
                children: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (() => {
                            let e = b.ZP.getResourceChannelIconURL({
                                channelId: n,
                                icon: c
                            });
                            return null != c && null != e
                                ? (0, r.jsx)('img', {
                                      src: e,
                                      className: I.resourceImage,
                                      alt: '',
                                      'aria-hidden': !0
                                  })
                                : null != _
                                  ? (0, r.jsx)('img', {
                                        className: I.resourceImage,
                                        src: _.src,
                                        alt: _.alt
                                    })
                                  : (0, r.jsx)('div', {
                                        className: I.placeholderImage,
                                        children: (0, r.jsx)(i.hH0, {
                                            size: 'xs',
                                            color: 'currentColor'
                                        })
                                    });
                        })(),
                        (0, r.jsx)(i.Text, {
                            className: I.guildInfoText,
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
    P = l.memo(function (e) {
        let { guild: n } = e,
            t = (0, C.Z)(n.id);
        return 0 === t.length
            ? null
            : (0, r.jsx)(i.Zbd, {
                  className: I.sidebarCardWrapper,
                  children: (0, r.jsxs)('div', {
                      className: I.sidebarCard,
                      children: [
                          (0, r.jsx)(i.X6q, {
                              className: I.sidebarCardHeader,
                              variant: 'heading-md/bold',
                              color: 'header-primary',
                              children: _.NW.string(_.t.xwY4LS)
                          }),
                          (0, r.jsx)('div', {
                              className: I.resourceChannelsList,
                              children: t.map((e) =>
                                  (0, r.jsx)(
                                      O,
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
    w = l.memo(function (e) {
        let { guild: n, isNewMember: t } = e;
        return (0, r.jsxs)('aside', {
            className: I.sidebar,
            children: [(0, r.jsx)(y, { guild: n }), t && (0, r.jsx)(P, { guild: n })]
        });
    });
