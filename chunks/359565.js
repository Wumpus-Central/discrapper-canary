n.d(t, {
    q: () => g,
    s: () => f
});
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(481060),
    o = n(367907),
    c = n(626135),
    d = n(346479),
    u = n(665906),
    h = n(981631),
    p = n(388032),
    m = n(676199);
function f(e) {
    let { channel: t, narrow: n } = e,
        a = (0, u.tc)(t);
    return (
        l.useEffect(() => {
            c.default.track(h.rMx.CHANNEL_BANNER_VIEWED, {
                ...(0, o.hH)(t.getGuildId()),
                ...(0, o.v_)(t),
                banner_type: 'thread'
            });
        }, [t]),
        (0, i.jsxs)('div', {
            className: r()(m.chatHeaderBar, { [m.narrow]: n }),
            children: [
                (0, i.jsx)(s.Text, {
                    className: m.chatHeaderBarText,
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: t.isForumPost() ? p.intl.string(p.t['833FDg']) : p.intl.string(p.t.rEeodH)
                }),
                a
                    ? (0, i.jsx)(s.zxk, {
                          size: n ? s.zxk.Sizes.SMALL : s.zxk.Sizes.TINY,
                          className: m.chatHeaderBarButton,
                          color: s.zxk.Colors.PRIMARY,
                          onClick: () => {
                              c.default.track(h.rMx.CHANNEL_BANNER_CTA_CLICKED, {
                                  ...(0, o.hH)(t.getGuildId()),
                                  ...(0, o.v_)(t),
                                  banner_type: 'thread',
                                  cta_type: 'unarchive'
                              }),
                                  d.Z.unarchiveThread(t, !1);
                          },
                          children: p.intl.string(p.t['0dvvEh'])
                      })
                    : null
            ]
        })
    );
}
function g(e) {
    let { channel: t, narrow: n } = e,
        a = (0, u.Xb)(t);
    return (
        l.useEffect(() => {
            c.default.track(h.rMx.CHANNEL_BANNER_VIEWED, {
                ...(0, o.hH)(t.getGuildId()),
                ...(0, o.v_)(t),
                banner_type: 'thread'
            });
        }, [t]),
        (0, i.jsxs)('div', {
            className: r()(m.chatHeaderBar, { [m.narrow]: n }),
            children: [
                (0, i.jsx)(s.Text, {
                    className: m.chatHeaderBarText,
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: t.isForumPost() ? p.intl.string(p.t.E7oO8v) : p.intl.string(p.t['V/JF2N'])
                }),
                a
                    ? (0, i.jsx)(s.zxk, {
                          size: n ? s.zxk.Sizes.SMALL : s.zxk.Sizes.TINY,
                          className: m.chatHeaderBarButton,
                          color: s.zxk.Colors.PRIMARY,
                          onClick: () => {
                              c.default.track(h.rMx.CHANNEL_BANNER_CTA_CLICKED, {
                                  ...(0, o.hH)(t.getGuildId()),
                                  ...(0, o.v_)(t),
                                  banner_type: 'thread',
                                  cta_type: 'unlock'
                              }),
                                  d.Z.unlockThread(t);
                          },
                          children: p.intl.string(p.t.zA9d1N)
                      })
                    : null
            ]
        })
    );
}
