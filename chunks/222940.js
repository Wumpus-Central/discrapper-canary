n.d(t, { Z: () => _ }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(399606),
    r = n(846519),
    s = n(481060),
    o = n(317632),
    c = n(174767),
    d = n(594174),
    u = n(388032),
    m = n(23943);
function _(e) {
    let { inboxIconRef: t, recentsPopoutShown: n } = e,
        [_, h] = l.useState(!1),
        p = (0, a.e7)([o.Z], () => o.Z.getLastUnseenInvite()),
        g = (0, a.e7)([d.default], () => (null != p ? d.default.getUser(p.inviter_id) : null));
    return (l.useEffect(() => {
        n && h(!1);
    }, [n]),
    l.useEffect(() => {
        if (null == p) {
            h(!1);
            return;
        }
        (0, c.Br)(p), h(!0);
        let e = new r.V7();
        return (
            e.start(5000, () => {
                h(!1);
            }),
            () => {
                e.stop();
            }
        );
    }, [p]),
    _ && null != p && null != g)
        ? (0, i.jsxs)(s.Cys, {
              tooltipClassName: m.tooltip,
              tooltipContentClassName: m.tooltipContent,
              targetElementRef: t,
              position: 'bottom',
              color: s.FGA.BLACK,
              children: [
                  (0, i.jsxs)('div', {
                      className: m.iconContainer,
                      children: [
                          (0, i.jsx)('img', {
                              className: m.inviteImage,
                              src: p.application_asset,
                              alt: 'Game Invite'
                          }),
                          (0, i.jsx)('div', {
                              className: m.offsetAvatarContainer,
                              children: (0, i.jsx)(s.qEK, {
                                  'aria-label': 'Inviter',
                                  className: m.inviterImage,
                                  src: g.getAvatarURL(null, 24),
                                  size: s.EFr.SIZE_24
                              })
                          })
                      ]
                  }),
                  (0, i.jsxs)('div', {
                      className: m.titleContainer,
                      children: [
                          (0, i.jsx)(s.Text, {
                              className: m.__invalid_title,
                              variant: 'text-xs/semibold',
                              children: u.intl.format(u.t['8gTZ8v'], { username: g.username })
                          }),
                          (0, i.jsx)(s.Text, {
                              className: m.__invalid_subtitle,
                              variant: 'text-xxs/medium',
                              children: p.application_name
                          })
                      ]
                  })
              ]
          })
        : null;
}
