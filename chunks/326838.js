n.d(t, { Z: () => f }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(913527),
    r = n.n(a),
    s = n(442837),
    o = n(481060),
    c = n(727637),
    d = n(782568),
    u = n(317632),
    m = n(174767),
    _ = n(594174),
    h = n(55935),
    p = n(388032),
    g = n(905180);
function f(e) {
    let { invite: t, expired: n } = e,
        a = (0, s.e7)([_.default], () => {
            var e, n;
            return null !== (n = null === (e = _.default.getUser(t.inviter_id)) || void 0 === e ? void 0 : e.username) && void 0 !== n ? n : '';
        }),
        d = (0, h.vc)(r()(t.created_at), 'LT'),
        u = l.useRef(null),
        f = (0, c.Z)(u);
    return (
        l.useEffect(() => {
            n || (0, m.Br)(t);
        }, [t, n]),
        (0, i.jsxs)('div', {
            className: g.container,
            ref: u,
            children: [
                (0, i.jsxs)('div', {
                    className: g.primaryRow,
                    children: [
                        (0, i.jsx)('img', {
                            className: g.inviteImage,
                            src: t.application_asset,
                            alt: 'Game Invite'
                        }),
                        (0, i.jsx)(o.Text, {
                            className: g.title,
                            variant: 'text-md/semibold',
                            color: 'interactive-active',
                            children: p.intl.format(p.t.vtUO3d, { username: a })
                        }),
                        (0, i.jsxs)('div', {
                            className: g.buttonContainer,
                            children: [
                                (0, i.jsx)(x, {
                                    expired: n,
                                    invite: t,
                                    isHoveringInvite: f
                                }),
                                (0, i.jsx)(o.M0o, {
                                    className: g.deleteButton,
                                    tooltip: p.intl.string(p.t.oyYWHB),
                                    color: o.YX$.SECONDARY,
                                    icon: (0, i.jsx)(o.XHJ, { size: 'xs' }),
                                    onClick: () => {
                                        (0, m.UF)(t);
                                    }
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)('div', { className: g.divider }),
                (0, i.jsxs)('div', {
                    className: g.secondaryRow,
                    children: [
                        (0, i.jsxs)(o.Text, {
                            variant: 'text-xs/medium',
                            className: g.subtitle,
                            color: 'text-muted',
                            children: [t.application_name, ' \xB7 ', d]
                        }),
                        n &&
                            (0, i.jsx)('div', {
                                className: g.metaContainer,
                                children: (0, i.jsx)(o.Text, {
                                    variant: 'text-xxs/semibold',
                                    className: g.__invalid_metaText,
                                    color: 'text-muted',
                                    children: p.intl.string(p.t['//8Uqa'])
                                })
                            })
                    ]
                })
            ]
        })
    );
}
function x(e) {
    let { expired: t, invite: n, isHoveringInvite: a } = e,
        r = (0, s.e7)([u.Z], () => u.Z.isInviteGameInstalled(n)),
        c = (0, s.e7)([u.Z], () => u.Z.isInviteJoinable(n)),
        [_, h] = l.useState(!1),
        f = l.useCallback(async () => {
            h(!0);
            try {
                await (0, m.MH)(n);
            } catch {}
            h(!1);
        }, [n]),
        x = l.useCallback(async () => {
            h(!0);
            try {
                await (0, m.Ol)(n);
            } catch {}
            h(!1);
        }, [n]);
    return t
        ? r && a
            ? (0, i.jsx)(o.zxk, {
                  className: g.primaryButton,
                  color: o.Ttl.TRANSPARENT,
                  disabled: _,
                  size: o.PhG.SMALL,
                  onClick: f,
                  children: p.intl.string(p.t['s+J8Dg'])
              })
            : null
        : r && c
          ? (0, i.jsx)(o.zxk, {
                className: g.primaryButton,
                color: o.Ttl.GREEN,
                disabled: _,
                size: o.PhG.SMALL,
                onClick: x,
                children: p.intl.string(p.t['/loN9/'])
            })
          : null != n.fallback_url
            ? (0, i.jsx)(o.zxk, {
                  className: g.primaryButton,
                  disabled: _,
                  size: o.PhG.SMALL,
                  color: o.Ttl.TRANSPARENT,
                  onClick: () => (0, d.Z)(n.fallback_url),
                  children: p.intl.string(p.t['27y8KC'])
              })
            : (0, i.jsx)(o.ua7, {
                  text: p.intl.formatToPlainString(p.t.issFLC, { gameTitle: n.application_name }),
                  children: (e) =>
                      (0, i.jsx)(o.zxk, {
                          ...e,
                          className: g.primaryButton,
                          disabled: !0,
                          size: o.PhG.SMALL,
                          color: o.Ttl.TRANSPARENT,
                          onClick: () => (0, d.Z)(n.fallback_url),
                          children: (0, i.jsxs)('div', {
                              className: g.launchToJoinContainer,
                              children: [
                                  (0, i.jsx)(o.Text, {
                                      variant: 'text-xxs/medium',
                                      className: g.launchToJoinText,
                                      color: 'text-muted',
                                      children: p.intl.string(p.t.dai1Oz)
                                  }),
                                  (0, i.jsx)(o.d3s, {
                                      size: 'xxs',
                                      color: o.TVs.colors.TEXT_MUTED.css
                                  })
                              ]
                          })
                      })
              });
}
