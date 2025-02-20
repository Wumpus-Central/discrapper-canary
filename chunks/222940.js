n.d(t, { Z: () => m }), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(399606),
    o = n(846519),
    l = n(481060),
    s = n(317632),
    c = n(174767),
    d = n(594174),
    u = n(388032),
    p = n(99977);
function m(e) {
    let { inboxIconRef: t, recentsPopoutShown: n } = e,
        [m, f] = i.useState(!1),
        h = (0, a.e7)([s.Z], () => s.Z.getLastUnseenInvite()),
        g = (0, a.e7)([d.default], () => (null != h ? d.default.getUser(h.inviter_id) : null));
    return (i.useEffect(() => {
        n && f(!1);
    }, [n]),
    i.useEffect(() => {
        if (null == h) {
            f(!1);
            return;
        }
        (0, c.Br)(h), f(!0);
        let e = new o.V7();
        return (
            e.start(5000, () => {
                f(!1);
            }),
            () => {
                e.stop();
            }
        );
    }, [h]),
    m && null != h && null != g)
        ? (0, r.jsxs)(l.Cys, {
              tooltipClassName: p.tooltip,
              tooltipContentClassName: p.tooltipContent,
              targetElementRef: t,
              position: 'bottom',
              color: l.FGA.BLACK,
              children: [
                  (0, r.jsxs)('div', {
                      className: p.iconContainer,
                      children: [
                          (0, r.jsx)('img', {
                              className: p.inviteImage,
                              src: h.application_asset,
                              alt: 'Game Invite'
                          }),
                          (0, r.jsx)('div', {
                              className: p.offsetAvatarContainer,
                              children: (0, r.jsx)(l.qEK, {
                                  'aria-label': 'Inviter',
                                  className: p.inviterImage,
                                  src: g.getAvatarURL(null, 24),
                                  size: l.EFr.SIZE_24
                              })
                          })
                      ]
                  }),
                  (0, r.jsxs)('div', {
                      className: p.titleContainer,
                      children: [
                          (0, r.jsx)(l.Text, {
                              className: p.__invalid_title,
                              variant: 'text-xs/semibold',
                              children: u.NW.format(u.t['8gTZ8v'], { username: g.username })
                          }),
                          (0, r.jsx)(l.Text, {
                              className: p.__invalid_subtitle,
                              variant: 'text-xxs/medium',
                              children: h.application_name
                          })
                      ]
                  })
              ]
          })
        : null;
}
