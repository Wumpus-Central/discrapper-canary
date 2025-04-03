n.d(t, { Z: () => m }), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(399606),
    l = n(846519),
    o = n(481060),
    s = n(317632),
    c = n(174767),
    u = n(594174),
    d = n(388032),
    p = n(950127);
function m(e) {
    let { inboxIconRef: t, recentsPopoutShown: n } = e,
        [m, f] = i.useState(!1),
        h = (0, a.e7)([s.Z], () => s.Z.getLastUnseenInvite()),
        g = (0, a.e7)([u.default], () => (null != h ? u.default.getUser(h.inviter_id) : null));
    return (i.useEffect(() => {
        n && f(!1);
    }, [n]),
    i.useEffect(() => {
        if (null == h) return void f(!1);
        (0, c.Br)(h), f(!0);
        let e = new l.V7();
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
        ? (0, r.jsxs)(o.Cys, {
              tooltipClassName: p.tooltip,
              tooltipContentClassName: p.tooltipContent,
              targetElementRef: t,
              position: 'bottom',
              color: o.FGA.BLACK,
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
                              children: (0, r.jsx)(o.qEK, {
                                  'aria-label': 'Inviter',
                                  className: p.inviterImage,
                                  src: g.getAvatarURL(null, 24),
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
                              children: d.NW.format(d.t['8gTZ8v'], { username: g.username })
                          }),
                          (0, r.jsx)(o.Text, {
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
