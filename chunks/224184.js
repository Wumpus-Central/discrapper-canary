var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(399606),
    o = n(481060),
    c = n(287734),
    d = n(654904),
    u = n(314897),
    h = n(271383),
    p = n(496675),
    m = n(19780),
    f = n(594174),
    g = n(626135),
    C = n(906605),
    x = n(574176),
    v = n(833858),
    _ = n(866071),
    I = n(223135),
    E = n(625938),
    b = n(981631),
    Z = n(388032),
    S = n(239856);
t.Z = (e) => {
    let { hangStatusActivity: t, userId: r, channel: N, previewIsOpen: T } = e,
        { enableHangStatus: j } = x.n.useExperiment({
            guildId: N.guild_id,
            location: 'HangStatusPopout'
        }),
        A = (0, s.e7)([u.default], () => u.default.getId()),
        y = (0, s.e7)([f.default], () => f.default.getUser(r)),
        P = (0, s.e7)([m.Z], () => m.Z.getChannelId() === N.id),
        M = (0, s.e7)([p.Z], () => p.Z.can(b.Plq.CONNECT, N)),
        R = (null == t ? void 0 : t.emoji) == null || (0, _.K)(t.emoji, N),
        L = (0, s.e7)([h.ZP], () => (null != N.guild_id && null != y ? h.ZP.getMember(N.guild_id, r) : null)),
        k = l.useMemo(() => (null != y ? (0, d.SG)(void 0, L, y, { size: 40 }) : void 0), [L, y]);
    return (l.useEffect(() => {
        (0, C.UP)();
    }, []),
    l.useEffect(() => {
        j &&
            null != t &&
            T &&
            null != y &&
            A !== r &&
            g.default.track(b.rMx.VIEW_HANG_STATUS, {
                source: 'HangStatusPopout',
                guild_id: N.guild_id,
                channel_id: N.id
            });
    }, [j, t, T, y, A, r, N]),
    j && null != y)
        ? A === r
            ? (0, i.jsx)('div', {
                  className: a()(S.popoutWrapper, { [S.mounted]: T }),
                  children: (0, i.jsx)(E.y, {
                      currentStatus: t,
                      channel: N
                  })
              })
            : null == t
              ? null
              : (0, i.jsx)('div', {
                    className: a()(S.popoutWrapper, { [S.mounted]: T }),
                    children: (0, i.jsxs)('div', {
                        className: S.popout,
                        children: [
                            (0, i.jsxs)('div', {
                                className: S.contentContainer,
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: S.statusGroup,
                                        children: [
                                            (0, i.jsx)(o.Text, {
                                                variant: 'text-xs/medium',
                                                color: 'text-muted',
                                                children: Z.intl.string(Z.t['74vS//'])
                                            }),
                                            (0, i.jsx)(o.Text, {
                                                variant: 'text-sm/semibold',
                                                color: 'text-normal',
                                                className: S.statusText,
                                                children: (0, v.O8)(t)
                                            })
                                        ]
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: S.iconGroup,
                                        children: [
                                            (0, i.jsx)(I.Z, {
                                                className: S.statusIcon,
                                                hangStatusActivity: t
                                            }),
                                            (0, i.jsxs)('div', {
                                                className: S.avatarWrapper,
                                                children: [
                                                    (0, i.jsx)(o.Avatar, {
                                                        className: S.avatar,
                                                        size: o.AvatarSizes.SIZE_40,
                                                        src: k,
                                                        'aria-hidden': !0
                                                    }),
                                                    (0, i.jsx)('div', { className: S.outline })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            !P && M
                                ? (0, i.jsx)(o.Button, {
                                      className: S.cta,
                                      size: o.Button.Sizes.SMALL,
                                      onClick: () => {
                                          !P &&
                                              M &&
                                              (c.default.selectVoiceChannel(N.id),
                                              g.default.track(b.rMx.HANG_STATUS_CTA_CLICKED, {
                                                  source: 'HangStatusPopout',
                                                  guild_id: N.guild_id,
                                                  channel_id: N.id
                                              }));
                                      },
                                      children: Z.intl.string(Z.t['B/dHXF'])
                                  })
                                : null,
                            P && R
                                ? (0, i.jsx)(o.Button, {
                                      className: S.cta,
                                      size: o.Button.Sizes.SMALL,
                                      onClick: () => {
                                          let e = t.state;
                                          e === b.tNA.CUSTOM
                                              ? (0, o.openModalLazy)(async () => {
                                                    let { default: e } = await n.e('1631').then(n.bind(n, 333541));
                                                    return (n) =>
                                                        (0, i.jsx)(e, {
                                                            ...n,
                                                            startingText: t.details,
                                                            startingEmoji: t.emoji
                                                        });
                                                })
                                              : (0, C.Zx)(e, !0),
                                              g.default.track(b.rMx.SWIPE_HANG_STATUS, {
                                                  guild_id: N.guild_id,
                                                  channel_id: N.id,
                                                  media_session_id: m.Z.getMediaSessionId()
                                              });
                                      },
                                      children: Z.intl.string(Z.t.xcVcFR)
                                  })
                                : null
                        ]
                    })
                })
        : null;
};
