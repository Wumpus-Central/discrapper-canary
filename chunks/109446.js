n.d(t, { Z: () => b }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(392711),
    o = n.n(r),
    a = n(442837),
    s = n(481060),
    c = n(99690),
    d = n(359110),
    u = n(601070),
    h = n(91159),
    p = n(488131),
    m = n(496675),
    g = n(306680),
    f = n(594174),
    _ = n(768581),
    v = n(709054),
    C = n(981631),
    x = n(124368),
    I = n(388032),
    Z = n(968484);
function b(e) {
    let { channel: t } = e,
        r = (0, a.Wu)([u.Z, g.ZP, m.Z], () => {
            let e = u.Z.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
            return o()(u.Z.getActiveJoinedThreadsForParent(t.guild_id, t.id))
                .values()
                .map((e) => e.channel)
                .concat(o().values(u.Z.getActiveUnjoinedThreadsForParent(t.guild_id, t.id)))
                .filter((t) => !(t.id in e) && m.Z.can(C.Plq.VIEW_CHANNEL, t))
                .sort((e, t) => {
                    let n = g.ZP.lastMessageId(e.id),
                        i = g.ZP.lastMessageId(t.id);
                    return v.default.compare(n, i);
                })
                .reverse()
                .value();
        }),
        c = t.isForumLikeChannel() ? 5 : 3;
    return (
        l.useEffect(() => {
            (0, h.q)();
        }, []),
        (0, i.jsxs)('div', {
            className: Z.popout,
            children: [
                (0, i.jsx)(s.Text, {
                    className: Z.title,
                    variant: 'text-xs/bold',
                    color: 'header-secondary',
                    children: t.isForumLikeChannel() ? I.intl.string(I.t.ioVdOz) : I.intl.string(I.t.VNYs2t)
                }),
                r
                    .slice(0, t.isForumLikeChannel() ? r.length : c)
                    .map((e) => (0, i.jsx)(S, { thread: e }, e.id))
                    .filter((e) => l.isValidElement(e))
                    .slice(0, c),
                (0, i.jsx)(s.P3F, {
                    className: Z.more,
                    onClick: () => {
                        t.isForumLikeChannel()
                            ? (0, d.Kh)(t.id)
                            : (0, s.ZDy)(async () => {
                                  let { default: e } = await n.e('36970').then(n.bind(n, 223901));
                                  return (n) =>
                                      (0, i.jsx)(e, {
                                          channel: t,
                                          ...n
                                      });
                              });
                    },
                    children: (0, i.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        color: 'none',
                        children: I.intl.string(I.t['4qdZ9/'])
                    })
                })
            ]
        })
    );
}
function S(e) {
    let { thread: t } = e,
        n = (0, a.e7)([f.default], () => f.default.getUser(t.ownerId)),
        l = (0, h.Ok)(t);
    return (0, i.jsxs)(s.P3F, {
        className: Z.row,
        onClick: (e) => {
            (0, p.ok)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, x.on.POPOUT);
        },
        children: [
            null == n
                ? (0, i.jsx)('img', {
                      className: Z.avatar,
                      src: _.ZP.getDefaultAvatarURL(void 0, void 0),
                      alt: ''
                  })
                : (0, i.jsx)(c.Z, {
                      className: Z.avatar,
                      user: n,
                      size: s.EFr.SIZE_16
                  }),
            (0, i.jsx)(s.Text, {
                className: Z.name,
                variant: 'text-sm/normal',
                color: 'none',
                children: t.name
            }),
            (0, i.jsxs)(s.Text, {
                className: Z.timestamp,
                variant: 'text-sm/normal',
                color: 'none',
                children: [
                    (0, i.jsx)('span', {
                        className: Z.bullet,
                        children: '\u2022'
                    }),
                    (0, h.Ye)(l)
                ]
            })
        ]
    });
}
