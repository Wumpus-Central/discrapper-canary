l.d(n, { Z: () => w }), l(266796);
var t = l(200651),
    r = l(192379),
    a = l(399606),
    i = l(481060),
    s = l(904245),
    o = l(368844),
    c = l(249842),
    d = l(838367),
    u = l(576306),
    m = l(65361),
    h = l(910200),
    g = l(6025),
    f = l(592125),
    x = l(375954),
    p = l(496675),
    b = l(768581),
    j = l(526120),
    C = l(825334),
    v = l(981631),
    _ = l(388032),
    I = l(883920);
function Z(e) {
    let { guild: n } = e,
        l = (0, a.e7)([d.Z], () => d.Z.getGuild(n.id), [n]);
    return (
        r.useEffect(() => {
            null == l && (0, c.P)(n.id);
        }, [n.id, l]),
        (0, t.jsx)(i.Zbd, {
            className: I.sidebarCardWrapper,
            children: (0, t.jsxs)('div', {
                className: I.sidebarCard,
                children: [
                    (0, t.jsx)(i.X6q, {
                        className: I.sidebarCardHeader,
                        variant: 'heading-md/bold',
                        color: 'header-primary',
                        children: _.NW.string(_.t['6YriCA'])
                    }),
                    (0, t.jsx)(i.Text, {
                        className: I.guildDescription,
                        variant: 'text-md/normal',
                        color: 'text-normal',
                        children: n.description
                    }),
                    (0, t.jsx)('div', {
                        className: I.guildInfo,
                        children:
                            (null == l ? void 0 : l.memberCount) != null &&
                            (null == l ? void 0 : l.presenceCount) != null &&
                            (0, t.jsxs)(t.Fragment, {
                                children: [
                                    (0, t.jsx)('div', { className: I.dotOnline }),
                                    (0, t.jsx)(i.Text, {
                                        className: I.guildInfoText,
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        children: _.NW.format(_.t.QAdRCw, {
                                            online: null == l ? void 0 : l.presenceCount,
                                            total: null == l ? void 0 : l.memberCount
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
        { guildProfile: l, fetchGuildProfile: a } = (0, m.u)(n.id);
    return (r.useEffect(() => {
        a();
    }, [a]),
    null == l)
        ? null
        : (0, t.jsx)(h.Z, {
              profile: l,
              disableCTA: !0
          });
}
let y = r.memo(function (e) {
        let { guild: n } = e;
        return (0, u.h)() ? (0, t.jsx)(N, { guild: n }) : (0, t.jsx)(Z, { guild: n });
    }),
    O = (e) => {
        let { channelId: n, title: l, icon: c } = e,
            d = (0, a.e7)([f.Z], () => f.Z.getChannel(n)),
            u = (0, a.e7)([x.Z], () => x.Z.getMessages(n)),
            m = (0, a.e7)([p.Z], () => p.Z.can(v.Plq.VIEW_CHANNEL, d)),
            h = u.first(),
            C = (0, o.zy)(h, !1),
            _ = (null == C ? void 0 : C.length) > 0 ? C[0] : null,
            Z = null != d && null == h && !u.loadingMore && !u.ready && !u.hasFetched && m;
        r.useEffect(() => {
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
                    : g.Z.openResourceChannelAsSidebar({
                          guildId: d.guild_id,
                          channelId: d.id
                      }));
        };
        return (0, t.jsx)(
            i.P3F,
            {
                className: I.resourceChannel,
                onClick: (e) => N(e),
                children: (0, t.jsxs)(t.Fragment, {
                    children: [
                        (() => {
                            let e = b.ZP.getResourceChannelIconURL({
                                channelId: n,
                                icon: c
                            });
                            return null != c && null != e
                                ? (0, t.jsx)('img', {
                                      src: e,
                                      className: I.resourceImage,
                                      alt: '',
                                      'aria-hidden': !0
                                  })
                                : null != _
                                  ? (0, t.jsx)('img', {
                                        className: I.resourceImage,
                                        src: _.src,
                                        alt: _.alt
                                    })
                                  : (0, t.jsx)('div', {
                                        className: I.placeholderImage,
                                        children: (0, t.jsx)(i.hH0, {
                                            size: 'xs',
                                            color: 'currentColor'
                                        })
                                    });
                        })(),
                        (0, t.jsx)(i.Text, {
                            className: I.guildInfoText,
                            variant: 'text-sm/semibold',
                            color: 'none',
                            children: l
                        })
                    ]
                })
            },
            n
        );
    },
    P = r.memo(function (e) {
        let { guild: n } = e,
            l = (0, C.Z)(n.id);
        return 0 === l.length
            ? null
            : (0, t.jsx)(i.Zbd, {
                  className: I.sidebarCardWrapper,
                  children: (0, t.jsxs)('div', {
                      className: I.sidebarCard,
                      children: [
                          (0, t.jsx)(i.X6q, {
                              className: I.sidebarCardHeader,
                              variant: 'heading-md/bold',
                              color: 'header-primary',
                              children: _.NW.string(_.t.xwY4LS)
                          }),
                          (0, t.jsx)('div', {
                              className: I.resourceChannelsList,
                              children: l.map((e) =>
                                  (0, t.jsx)(
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
    w = r.memo(function (e) {
        let { guild: n, isNewMember: l } = e;
        return (0, t.jsxs)('aside', {
            className: I.sidebar,
            children: [(0, t.jsx)(y, { guild: n }), l && (0, t.jsx)(P, { guild: n })]
        });
    });
