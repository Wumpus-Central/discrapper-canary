t.d(n, {
    Q: () => T,
    Z: () => B
});
var a,
    i = t(200651),
    o = t(192379),
    r = t(120356),
    c = t.n(r),
    l = t(442837),
    _ = t(481060),
    d = t(447003),
    s = t(471445),
    u = t(565138),
    b = t(357156),
    h = t(496675),
    p = t(725436),
    f = t(274311),
    m = t(854698),
    v = t(285784),
    g = t(95291),
    x = t(742593),
    I = t(810561),
    C = t(187443),
    N = t(131154),
    k = t(765305),
    w = t(981631),
    Z = t(388032),
    j = t(40040),
    T = (((a = {})[(a.BANNER = 0)] = 'BANNER'), (a[(a.THUMBNAIL = 1)] = 'THUMBNAIL'), a);
function U(e) {
    let { channel: n, onClick: t } = e,
        { canManageAllEvents: a } = (0, b.XJ)(n),
        r = (0, l.e7)([h.Z], () => !n.isGuildVocal() || h.Z.can(w.Plq.CONNECT, n), [n]),
        u = o.useMemo(() => (0, d.Z)(n), [n]),
        p = (0, s.KS)(n);
    return (0, i.jsx)(_.ua7, {
        text: Z.intl.string(Z.t.nHjY9P),
        shouldShow: !r && null != t,
        children: (e) =>
            (0, i.jsxs)(_.P3F, {
                ...e,
                className: c()(j.inline, j.channelContainer, {
                    [j.channelContainerEnabled]: r && null != t,
                    [j.channelContainerDisabled]: !r && null != t
                }),
                onClick: t,
                children: [
                    (0, i.jsx)(_.ua7, {
                        text: Z.intl.string(Z.t['48WXaW']),
                        shouldShow: a && u && r && null != t,
                        children: (e) =>
                            null != p
                                ? (0, i.jsx)(p, {
                                      ...e,
                                      color: 'currentColor',
                                      size: 'custom',
                                      width: 20,
                                      height: 20,
                                      className: j.icon
                                  })
                                : null
                    }),
                    (0, i.jsx)(_.Text, {
                        variant: 'text-sm/normal',
                        color: 'none',
                        className: j.channelLocation,
                        children: n.name
                    })
                ]
            })
    });
}
function S(e) {
    let { guild: n, channel: t, onJoinClick: a, handleLocationClick: o, location: r, isExternal: l, isHub: d } = e;
    return d
        ? null == n
            ? (0, i.jsx)('div', {})
            : (0, i.jsxs)('div', {
                  className: j.inline,
                  children: [
                      (0, i.jsx)(u.Z, {
                          className: j.guildIcon,
                          size: u.Z.Sizes.MINI,
                          active: !0,
                          guild: n
                      }),
                      (0, i.jsx)(_.Text, {
                          variant: 'text-sm/normal',
                          color: 'header-secondary',
                          children: null == n ? void 0 : n.name
                      })
                  ]
              })
        : null != t
          ? (0, i.jsx)(U, {
                channel: t,
                onClick: a
            })
          : (0, i.jsxs)(_.P3F, {
                className: j.inline,
                onClick: o,
                children: [
                    (0, i.jsx)(_._tJ, {
                        size: 'custom',
                        color: 'currentColor',
                        height: 20,
                        width: 20,
                        className: c()(j.channelContainer, j.icon)
                    }),
                    (0, i.jsx)(_.Text, {
                        className: l ? j.externalLocation : j.channelLocation,
                        variant: 'text-sm/normal',
                        children: (0, p.m)(r, !0)
                    })
                ]
            });
}
function B(e) {
    let { className: n, guild: t, channel: a, creator: o, name: r, entityType: l, description: d, imageLocation: s = 0, imageSource: u, isActive: b, isUserLurking: h, isJoined: p = !1, isMember: w = !1, isHub: Z = !1, speakers: T, speakerCount: U, rsvped: B, canInvite: P, location: R, truncate: E, onContextMenu: y, onJoinClick: L, onJoinGuildClick: A, onGoToGuildClick: D, onRsvpClick: H, onStartClick: G, onInviteClick: M, onEndClick: F, onClick: q, isNew: z, guildEvent: W, eventPreview: X, recurrenceRule: J, recurrenceId: O } = e,
        V = (0, f.Q)(a, l),
        K = l === k.WX.EXTERNAL,
        Q = K ? (e) => e.stopPropagation() : void 0,
        Y = [];
    if (null != J && null != event) {
        let e = (0, m.Ho)(J);
        Y = (0, m.PJ)(4, e, new Date(W.scheduled_start_time));
    }
    let $ = Y.length > 0;
    return (0, i.jsxs)(_.kL8, {
        'aria-label': r,
        onClick: () => (null == q ? void 0 : q(O)),
        onContextMenu: y,
        className: c()(
            j.card,
            {
                [j.joined]: p,
                [j.lurking]: h
            },
            n
        ),
        children: [
            (0, i.jsxs)('div', {
                className: c()(j.padding, { [j.isRecurring]: $ }),
                children: [
                    0 === s && (0, i.jsx)(g.Z, { source: u }),
                    (0, i.jsx)(x.ZP, {
                        creator: o,
                        name: r,
                        description: d,
                        imageSource: 1 === s ? u : null,
                        truncate: E,
                        guildId: null == t ? void 0 : t.id,
                        isHub: Z,
                        isNew: z,
                        guildEvent: W,
                        eventPreview: X,
                        recurrenceId: O
                    }),
                    b &&
                        null != t &&
                        null != T &&
                        U > 0 &&
                        (0, i.jsx)(N.Z, {
                            guild: t,
                            speakers: T,
                            speakerCount: U,
                            className: j.spacing
                        }),
                    (0, i.jsx)('hr', { className: j.divider }),
                    (0, i.jsxs)('div', {
                        className: c()(j.inline, j.footer),
                        children: [
                            (0, i.jsx)(S, {
                                guild: t,
                                channel: a,
                                onJoinClick: L,
                                handleLocationClick: Q,
                                location: R,
                                isExternal: K,
                                isHub: Z
                            }),
                            Z
                                ? (0, i.jsx)(C.Z, {
                                      isActive: b,
                                      isUserLurking: h,
                                      isMember: w,
                                      rsvped: B,
                                      onRsvpClick: H,
                                      onJoinGuildClick: A,
                                      onGoToGuildClick: D,
                                      guildName: null == t ? void 0 : t.name,
                                      canInvite: P,
                                      isChannelPublic: V,
                                      onInviteClick: M
                                  })
                                : (0, i.jsx)(v.ZP, {
                                      entityType: l,
                                      isJoined: p,
                                      isActive: b,
                                      isUserLurking: h,
                                      rsvped: B,
                                      canInvite: P,
                                      isChannelPublic: V,
                                      onContextMenu: y,
                                      onJoinClick: L,
                                      onRsvpClick: H,
                                      onStartClick: G,
                                      onInviteClick: M,
                                      onEndClick: F
                                  })
                        ]
                    }),
                    $ && (0, i.jsx)('hr', { className: j.divider })
                ]
            }),
            $ &&
                (0, i.jsx)(I.Z, {
                    guildId: null == t ? void 0 : t.id,
                    recurrenceRule: J,
                    guildEventId: W.id,
                    onRecurrenceClick: q
                })
        ]
    });
}
