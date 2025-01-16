var a = l(200651),
    i = l(192379),
    t = l(399606),
    r = l(481060),
    s = l(904245),
    d = l(368844),
    o = l(249842),
    c = l(838367),
    u = l(576306),
    h = l(934269),
    m = l(910200),
    g = l(6025),
    x = l(592125),
    f = l(375954),
    C = l(496675),
    v = l(768581),
    I = l(526120),
    p = l(825334),
    Z = l(981631),
    j = l(388032),
    N = l(588898);
function _(e) {
    let { guild: n } = e,
        l = (0, t.e7)([c.Z], () => c.Z.getGuild(n.id), [n]);
    return (
        i.useEffect(() => {
            null == l && (0, o.P)(n.id);
        }, [n.id, l]),
        (0, a.jsx)('div', {
            className: N.sidebarCardWrapper,
            children: (0, a.jsxs)('div', {
                className: N.sidebarCard,
                children: [
                    (0, a.jsx)(r.Heading, {
                        className: N.sidebarCardHeader,
                        variant: 'heading-md/bold',
                        color: 'header-primary',
                        children: j.intl.string(j.t['6YriCA'])
                    }),
                    (0, a.jsx)(r.Text, {
                        className: N.guildDescription,
                        variant: 'text-md/normal',
                        color: 'text-normal',
                        children: n.description
                    }),
                    (0, a.jsx)('div', {
                        className: N.guildInfo,
                        children:
                            (null == l ? void 0 : l.memberCount) != null &&
                            (null == l ? void 0 : l.presenceCount) != null &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)('div', { className: N.dotOnline }),
                                    (0, a.jsx)(r.Text, {
                                        className: N.guildInfoText,
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        children: j.intl.format(j.t.QAdRCw, {
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
function b(e) {
    let { guild: n } = e,
        { guildProfile: l, fetchGuildProfile: t } = (0, h.u)(n.id);
    return (i.useEffect(() => {
        t();
    }, [t]),
    null == l)
        ? null
        : (0, a.jsx)(m.Z, { profile: l });
}
let A = i.memo(function (e) {
        let { guild: n } = e;
        return (0, u.h)() ? (0, a.jsx)(b, { guild: n }) : (0, a.jsx)(_, { guild: n });
    }),
    E = (e) => {
        let { channelId: n, title: l, icon: o } = e,
            c = (0, t.e7)([x.Z], () => x.Z.getChannel(n)),
            u = (0, t.e7)([f.Z], () => f.Z.getMessages(n)),
            h = (0, t.e7)([C.Z], () => C.Z.can(Z.Plq.VIEW_CHANNEL, c)),
            m = u.first(),
            p = (0, d.zy)(m, !1),
            j = (null == p ? void 0 : p.length) > 0 ? p[0] : null,
            _ = null != c && null == m && !u.loadingMore && !u.ready && !u.hasFetched && h;
        i.useEffect(() => {
            _ &&
                s.Z.fetchMessages({
                    channelId: n,
                    after: n,
                    limit: 5
                });
        }, [n, _]);
        let b = (e) => {
            null != c &&
                (e.shiftKey
                    ? (0, I.C3)(c.guild_id, c.id)
                    : g.Z.openResourceChannelAsSidebar({
                          guildId: c.guild_id,
                          channelId: c.id
                      }));
        };
        return (0, a.jsx)(
            r.Clickable,
            {
                className: N.resourceChannel,
                onClick: (e) => b(e),
                children: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (() => {
                            let e = v.ZP.getResourceChannelIconURL({
                                channelId: n,
                                icon: o
                            });
                            return null != o && null != e
                                ? (0, a.jsx)('img', {
                                      src: e,
                                      className: N.resourceImage,
                                      alt: '',
                                      'aria-hidden': !0
                                  })
                                : null != j
                                  ? (0, a.jsx)('img', {
                                        className: N.resourceImage,
                                        src: j.src,
                                        alt: j.alt
                                    })
                                  : (0, a.jsx)('div', {
                                        className: N.placeholderImage,
                                        children: (0, a.jsx)(r.PaperIcon, {
                                            size: 'xs',
                                            color: 'currentColor'
                                        })
                                    });
                        })(),
                        (0, a.jsx)(r.Text, {
                            className: N.guildInfoText,
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
    S = i.memo(function (e) {
        let { guild: n } = e,
            l = (0, p.Z)(n.id);
        return 0 === l.length
            ? null
            : (0, a.jsx)('div', {
                  className: N.sidebarCardWrapper,
                  children: (0, a.jsxs)('div', {
                      className: N.sidebarCard,
                      children: [
                          (0, a.jsx)(r.Heading, {
                              className: N.sidebarCardHeader,
                              variant: 'heading-md/bold',
                              color: 'header-primary',
                              children: j.intl.string(j.t.xwY4LS)
                          }),
                          (0, a.jsx)('div', {
                              className: N.resourceChannelsList,
                              children: l.map((e) =>
                                  (0, a.jsx)(
                                      E,
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
    M = i.memo(function (e) {
        let { guild: n, isNewMember: l } = e;
        return (0, a.jsxs)('aside', {
            className: N.sidebar,
            children: [(0, a.jsx)(A, { guild: n }), l && (0, a.jsx)(S, { guild: n })]
        });
    });
n.Z = M;
