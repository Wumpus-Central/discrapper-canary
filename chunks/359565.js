n.d(t, {
    q: function () {
        return g;
    },
    s: function () {
        return f;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
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
        r = (0, u.tc)(t);
    return (
        l.useEffect(() => {
            c.default.track(h.rMx.CHANNEL_BANNER_VIEWED, {
                ...(0, o.hH)(t.getGuildId()),
                ...(0, o.v_)(t),
                banner_type: 'thread'
            });
        }, [t]),
        (0, i.jsxs)('div', {
            className: a()(m.chatHeaderBar, { [m.narrow]: n }),
            children: [
                (0, i.jsx)(s.Text, {
                    className: m.chatHeaderBarText,
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: t.isForumPost() ? p.intl.string(p.t['833FDg']) : p.intl.string(p.t.rEeodH)
                }),
                r
                    ? (0, i.jsx)(s.Button, {
                          size: n ? s.Button.Sizes.SMALL : s.Button.Sizes.TINY,
                          className: m.chatHeaderBarButton,
                          color: s.Button.Colors.PRIMARY,
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
        r = (0, u.Xb)(t);
    return (
        l.useEffect(() => {
            c.default.track(h.rMx.CHANNEL_BANNER_VIEWED, {
                ...(0, o.hH)(t.getGuildId()),
                ...(0, o.v_)(t),
                banner_type: 'thread'
            });
        }, [t]),
        (0, i.jsxs)('div', {
            className: a()(m.chatHeaderBar, { [m.narrow]: n }),
            children: [
                (0, i.jsx)(s.Text, {
                    className: m.chatHeaderBarText,
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: t.isForumPost() ? p.intl.string(p.t.E7oO8v) : p.intl.string(p.t['V/JF2N'])
                }),
                r
                    ? (0, i.jsx)(s.Button, {
                          size: n ? s.Button.Sizes.SMALL : s.Button.Sizes.TINY,
                          className: m.chatHeaderBarButton,
                          color: s.Button.Colors.PRIMARY,
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
