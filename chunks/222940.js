n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(399606),
    a = n(846519),
    o = n(481060),
    s = n(317632),
    c = n(174767),
    d = n(594174),
    u = n(388032),
    m = n(542532);
function h(e) {
    let { inboxIconRef: t, recentsPopoutShown: n } = e,
        [h, f] = r.useState(!1),
        p = (0, l.e7)([s.Z], () => s.Z.getLastUnseenInvite()),
        _ = (0, l.e7)([d.default], () => (null != p ? d.default.getUser(p.inviter_id) : null));
    return (r.useEffect(() => {
        n && f(!1);
    }, [n]),
    r.useEffect(() => {
        if (null == p) {
            f(!1);
            return;
        }
        (0, c.Br)(p), f(!0);
        let e = new a.V7();
        return (
            e.start(5000, () => {
                f(!1);
            }),
            () => {
                e.stop();
            }
        );
    }, [p]),
    h && null != p && null != _)
        ? (0, i.jsxs)(o.TooltipLayer, {
              tooltipClassName: m.tooltip,
              tooltipContentClassName: m.tooltipContent,
              targetElementRef: t,
              position: 'bottom',
              color: o.TooltipColors.BLACK,
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
                              children: (0, i.jsx)(o.Avatar, {
                                  'aria-label': 'Inviter',
                                  className: m.inviterImage,
                                  src: _.getAvatarURL(null, 24),
                                  size: o.AvatarSizes.SIZE_24
                              })
                          })
                      ]
                  }),
                  (0, i.jsxs)('div', {
                      className: m.titleContainer,
                      children: [
                          (0, i.jsx)(o.Text, {
                              className: m.__invalid_title,
                              variant: 'text-xs/semibold',
                              children: u.intl.format(u.t['8gTZ8v'], { username: _.username })
                          }),
                          (0, i.jsx)(o.Text, {
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
