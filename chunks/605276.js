l.d(n, { Z: () => y });
var a = l(200651),
    i = l(192379),
    t = l(399606),
    r = l(481060),
    s = l(904245),
    d = l(368844),
    o = l(249842),
    c = l(838367),
    u = l(576306),
    h = l(65361),
    m = l(910200),
    g = l(6025),
    x = l(592125),
    f = l(375954),
    C = l(496675),
    _ = l(768581),
    v = l(526120),
    Z = l(825334),
    I = l(981631),
    p = l(388032),
    j = l(959454);
function N(e) {
    let { guild: n } = e,
        l = (0, t.e7)([c.Z], () => c.Z.getGuild(n.id), [n]);
    return (
        i.useEffect(() => {
            null == l && (0, o.P)(n.id);
        }, [n.id, l]),
        (0, a.jsx)(r.Zbd, {
            className: j.sidebarCardWrapper,
            children: (0, a.jsxs)('div', {
                className: j.sidebarCard,
                children: [
                    (0, a.jsx)(r.X6q, {
                        className: j.sidebarCardHeader,
                        variant: 'heading-md/bold',
                        color: 'header-primary',
                        children: p.intl.string(p.t['6YriCA'])
                    }),
                    (0, a.jsx)(r.Text, {
                        className: j.guildDescription,
                        variant: 'text-md/normal',
                        color: 'text-normal',
                        children: n.description
                    }),
                    (0, a.jsx)('div', {
                        className: j.guildInfo,
                        children:
                            (null == l ? void 0 : l.memberCount) != null &&
                            (null == l ? void 0 : l.presenceCount) != null &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)('div', { className: j.dotOnline }),
                                    (0, a.jsx)(r.Text, {
                                        className: j.guildInfoText,
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        children: p.intl.format(p.t.QAdRCw, {
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
let E = i.memo(function (e) {
        let { guild: n } = e;
        return (0, u.h)() ? (0, a.jsx)(b, { guild: n }) : (0, a.jsx)(N, { guild: n });
    }),
    A = (e) => {
        let { channelId: n, title: l, icon: o } = e,
            c = (0, t.e7)([x.Z], () => x.Z.getChannel(n)),
            u = (0, t.e7)([f.Z], () => f.Z.getMessages(n)),
            h = (0, t.e7)([C.Z], () => C.Z.can(I.Plq.VIEW_CHANNEL, c)),
            m = u.first(),
            Z = (0, d.zy)(m, !1),
            p = (null == Z ? void 0 : Z.length) > 0 ? Z[0] : null,
            N = null != c && null == m && !u.loadingMore && !u.ready && !u.hasFetched && h;
        i.useEffect(() => {
            N &&
                s.Z.fetchMessages({
                    channelId: n,
                    after: n,
                    limit: 5
                });
        }, [n, N]);
        let b = (e) => {
            null != c &&
                (e.shiftKey
                    ? (0, v.C3)(c.guild_id, c.id)
                    : g.Z.openResourceChannelAsSidebar({
                          guildId: c.guild_id,
                          channelId: c.id
                      }));
        };
        return (0, a.jsx)(
            r.P3F,
            {
                className: j.resourceChannel,
                onClick: (e) => b(e),
                children: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (() => {
                            let e = _.ZP.getResourceChannelIconURL({
                                channelId: n,
                                icon: o
                            });
                            return null != o && null != e
                                ? (0, a.jsx)('img', {
                                      src: e,
                                      className: j.resourceImage,
                                      alt: '',
                                      'aria-hidden': !0
                                  })
                                : null != p
                                  ? (0, a.jsx)('img', {
                                        className: j.resourceImage,
                                        src: p.src,
                                        alt: p.alt
                                    })
                                  : (0, a.jsx)('div', {
                                        className: j.placeholderImage,
                                        children: (0, a.jsx)(r.hH0, {
                                            size: 'xs',
                                            color: 'currentColor'
                                        })
                                    });
                        })(),
                        (0, a.jsx)(r.Text, {
                            className: j.guildInfoText,
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
    M = i.memo(function (e) {
        let { guild: n } = e,
            l = (0, Z.Z)(n.id);
        return 0 === l.length
            ? null
            : (0, a.jsx)(r.Zbd, {
                  className: j.sidebarCardWrapper,
                  children: (0, a.jsxs)('div', {
                      className: j.sidebarCard,
                      children: [
                          (0, a.jsx)(r.X6q, {
                              className: j.sidebarCardHeader,
                              variant: 'heading-md/bold',
                              color: 'header-primary',
                              children: p.intl.string(p.t.xwY4LS)
                          }),
                          (0, a.jsx)('div', {
                              className: j.resourceChannelsList,
                              children: l.map((e) =>
                                  (0, a.jsx)(
                                      A,
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
    y = i.memo(function (e) {
        let { guild: n, isNewMember: l } = e;
        return (0, a.jsxs)('aside', {
            className: j.sidebar,
            children: [(0, a.jsx)(E, { guild: n }), l && (0, a.jsx)(M, { guild: n })]
        });
    });
