(n.d(t, { Z: () => h }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(399606),
    a = n(846519),
    o = n(481060),
    s = n(317632),
    c = n(174767),
    u = n(594174),
    d = n(388032),
    p = n(950127);
function h(e) {
    let { inboxIconRef: t, recentsPopoutShown: n } = e,
        [h, f] = i.useState(!1),
        g = (0, l.e7)([s.Z], () => s.Z.getLastUnseenInvite()),
        m = (0, l.e7)([u.default], () => (null != g ? u.default.getUser(g.inviter_id) : null));
    return (i.useEffect(() => {
        n && f(!1);
    }, [n]),
    i.useEffect(() => {
        if (null == g) return void f(!1);
        ((0, c.Br)(g), f(!0));
        let e = new a.V7();
        return (
            e.start(5000, () => {
                f(!1);
            }),
            () => {
                e.stop();
            }
        );
    }, [g]),
    h && null != g && null != m)
        ? (0, r.jsxs)(o.Cys, {
              tooltipClassName: p.tooltip,
              tooltipContentClassName: p.tooltipContent,
              targetElementRef: t,
              position: 'bottom',
              color: o.FGA.PRIMARY,
              children: [
                  (0, r.jsxs)('div', {
                      className: p.iconContainer,
                      children: [
                          (0, r.jsx)('img', {
                              className: p.inviteImage,
                              src: g.application_asset,
                              alt: 'Game Invite'
                          }),
                          (0, r.jsx)('div', {
                              className: p.offsetAvatarContainer,
                              children: (0, r.jsx)(o.qEK, {
                                  'aria-label': 'Inviter',
                                  className: p.inviterImage,
                                  src: m.getAvatarURL(null, 24),
                                  size: o.EFr.SIZE_24
                              })
                          })
                      ]
                  }),
                  (0, r.jsxs)('div', {
                      className: p.titleContainer,
                      children: [
                          (0, r.jsx)(o.Text, {
                              className: p.__invalid_title,
                              variant: 'text-xs/semibold',
                              children: d.intl.format(d.t['8gTZ8v'], { username: m.username })
                          }),
                          (0, r.jsx)(o.Text, {
                              className: p.__invalid_subtitle,
                              variant: 'text-xxs/medium',
                              children: g.application_name
                          })
                      ]
                  })
              ]
          })
        : null;
}
