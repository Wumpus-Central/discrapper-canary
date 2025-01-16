n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(913527),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(727637),
    d = n(782568),
    u = n(317632),
    m = n(174767),
    h = n(594174),
    f = n(55935),
    p = n(388032),
    _ = n(905180);
function g(e) {
    let { invite: t, expired: n } = e,
        l = (0, o.e7)([h.default], () => {
            var e, n;
            return null !== (n = null === (e = h.default.getUser(t.inviter_id)) || void 0 === e ? void 0 : e.username) && void 0 !== n ? n : '';
        }),
        d = (0, f.vc)(a()(t.created_at), 'LT'),
        u = r.useRef(null),
        g = (0, c.Z)(u);
    return (
        r.useEffect(() => {
            !n && (0, m.Br)(t);
        }, [t, n]),
        (0, i.jsxs)('div', {
            className: _.container,
            ref: u,
            children: [
                (0, i.jsxs)('div', {
                    className: _.primaryRow,
                    children: [
                        (0, i.jsx)('img', {
                            className: _.inviteImage,
                            src: t.application_asset,
                            alt: 'Game Invite'
                        }),
                        (0, i.jsx)(s.Text, {
                            className: _.title,
                            variant: 'text-md/semibold',
                            color: 'interactive-active',
                            children: p.intl.format(p.t.vtUO3d, { username: l })
                        }),
                        (0, i.jsxs)('div', {
                            className: _.buttonContainer,
                            children: [
                                (0, i.jsx)(E, {
                                    expired: n,
                                    invite: t,
                                    isHoveringInvite: g
                                }),
                                (0, i.jsx)(s.CircleIconButton, {
                                    className: _.deleteButton,
                                    tooltip: p.intl.string(p.t.oyYWHB),
                                    color: s.CircleIconButtonColors.SECONDARY,
                                    icon: (0, i.jsx)(s.TrashIcon, { size: 'xs' }),
                                    onClick: () => {
                                        (0, m.UF)(t);
                                    }
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)('div', { className: _.divider }),
                (0, i.jsxs)('div', {
                    className: _.secondaryRow,
                    children: [
                        (0, i.jsxs)(s.Text, {
                            variant: 'text-xs/medium',
                            className: _.subtitle,
                            color: 'text-muted',
                            children: [t.application_name, ' \xB7 ', d]
                        }),
                        n &&
                            (0, i.jsx)('div', {
                                className: _.metaContainer,
                                children: (0, i.jsx)(s.Text, {
                                    variant: 'text-xxs/semibold',
                                    className: _.__invalid_metaText,
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
function E(e) {
    let { expired: t, invite: n, isHoveringInvite: l } = e,
        a = (0, o.e7)([u.Z], () => u.Z.isInviteGameInstalled(n)),
        c = (0, o.e7)([u.Z], () => u.Z.isInviteJoinable(n)),
        [h, f] = r.useState(!1),
        g = r.useCallback(async () => {
            f(!0);
            try {
                await (0, m.MH)(n);
            } catch {}
            f(!1);
        }, [n]),
        E = r.useCallback(async () => {
            f(!0);
            try {
                await (0, m.Ol)(n);
            } catch {}
            f(!1);
        }, [n]);
    if (t)
        return a && l
            ? (0, i.jsx)(s.Button, {
                  className: _.primaryButton,
                  color: s.ButtonColors.TRANSPARENT,
                  disabled: h,
                  size: s.ButtonSizes.SMALL,
                  onClick: g,
                  children: p.intl.string(p.t['s+J8Dg'])
              })
            : null;
    return a && c
        ? (0, i.jsx)(s.Button, {
              className: _.primaryButton,
              color: s.ButtonColors.GREEN,
              disabled: h,
              size: s.ButtonSizes.SMALL,
              onClick: E,
              children: p.intl.string(p.t['/loN9/'])
          })
        : null != n.fallback_url
          ? (0, i.jsx)(s.Button, {
                className: _.primaryButton,
                disabled: h,
                size: s.ButtonSizes.SMALL,
                color: s.ButtonColors.TRANSPARENT,
                onClick: () => (0, d.Z)(n.fallback_url),
                children: p.intl.string(p.t['27y8KC'])
            })
          : (0, i.jsx)(s.Tooltip, {
                text: p.intl.formatToPlainString(p.t.issFLC, { gameTitle: n.application_name }),
                children: (e) =>
                    (0, i.jsx)(s.Button, {
                        ...e,
                        className: _.primaryButton,
                        disabled: !0,
                        size: s.ButtonSizes.SMALL,
                        color: s.ButtonColors.TRANSPARENT,
                        onClick: () => (0, d.Z)(n.fallback_url),
                        children: (0, i.jsxs)('div', {
                            className: _.launchToJoinContainer,
                            children: [
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-xxs/medium',
                                    className: _.launchToJoinText,
                                    color: 'text-muted',
                                    children: p.intl.string(p.t.dai1Oz)
                                }),
                                (0, i.jsx)(s.CircleInformationIcon, {
                                    size: 'xxs',
                                    color: s.tokens.colors.TEXT_MUTED.css
                                })
                            ]
                        })
                    })
            });
}
