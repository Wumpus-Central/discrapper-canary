t.d(e, {
    Q: () => G,
    Z: () => N
});
var i,
    a = t(200651),
    r = t(192379),
    o = t(120356),
    l = t.n(o),
    d = t(442837),
    _ = t(481060),
    c = t(447003),
    s = t(471445),
    p = t(565138),
    u = t(357156),
    m = t(496675),
    I = t(725436),
    g = t(274311),
    b = t(854698),
    C = t(285784),
    v = t(95291),
    T = t(742593),
    U = t(810561),
    h = t(187443),
    f = t(131154),
    E = t(765305),
    L = t(981631),
    x = t(388032),
    D = t(596622),
    G = (((i = {})[(i.BANNER = 0)] = 'BANNER'), (i[(i.THUMBNAIL = 1)] = 'THUMBNAIL'), i);
function S(n) {
    let { channel: e, onClick: t } = n,
        { canManageAllEvents: i } = (0, u.XJ)(e),
        o = (0, d.e7)([m.Z], () => !e.isGuildVocal() || m.Z.can(L.Plq.CONNECT, e), [e]),
        p = r.useMemo(() => (0, c.Z)(e), [e]),
        I = (0, s.KS)(e);
    return (0, a.jsx)(_.ua7, {
        text: x.intl.string(x.t.nHjY9P),
        shouldShow: !o && null != t,
        children: (n) =>
            (0, a.jsxs)(_.P3F, {
                ...n,
                className: l()(D.inline, D.channelContainer, {
                    [D.channelContainerEnabled]: o && null != t,
                    [D.channelContainerDisabled]: !o && null != t
                }),
                onClick: t,
                children: [
                    (0, a.jsx)(_.ua7, {
                        text: x.intl.string(x.t['48WXaW']),
                        shouldShow: i && p && o && null != t,
                        children: (n) =>
                            null != I
                                ? (0, a.jsx)(I, {
                                      ...n,
                                      color: 'currentColor',
                                      size: 'custom',
                                      width: 20,
                                      height: 20,
                                      className: D.icon
                                  })
                                : null
                    }),
                    (0, a.jsx)(_.Text, {
                        variant: 'text-sm/normal',
                        color: 'none',
                        className: D.channelLocation,
                        children: e.name
                    })
                ]
            })
    });
}
function y(n) {
    let { guild: e, channel: t, onJoinClick: i, handleLocationClick: r, location: o, isExternal: d, isHub: c } = n;
    return c
        ? null == e
            ? (0, a.jsx)('div', {})
            : (0, a.jsxs)('div', {
                  className: D.inline,
                  children: [
                      (0, a.jsx)(p.Z, {
                          className: D.guildIcon,
                          size: p.Z.Sizes.MINI,
                          active: !0,
                          guild: e
                      }),
                      (0, a.jsx)(_.Text, {
                          variant: 'text-sm/normal',
                          color: 'header-secondary',
                          children: null == e ? void 0 : e.name
                      })
                  ]
              })
        : null != t
          ? (0, a.jsx)(S, {
                channel: t,
                onClick: i
            })
          : (0, a.jsxs)(_.P3F, {
                className: D.inline,
                onClick: r,
                children: [
                    (0, a.jsx)(_._tJ, {
                        size: 'custom',
                        color: 'currentColor',
                        height: 20,
                        width: 20,
                        className: l()(D.channelContainer, D.icon)
                    }),
                    (0, a.jsx)(_.Text, {
                        className: d ? D.externalLocation : D.channelLocation,
                        variant: 'text-sm/normal',
                        children: (0, I.m)(o, !0)
                    })
                ]
            });
}
function N(n) {
    let { className: e, guild: t, channel: i, creator: r, name: o, entityType: d, description: c, imageLocation: s = 0, imageSource: p, isActive: u, isUserLurking: m, isJoined: I = !1, isMember: L = !1, isHub: x = !1, speakers: G, speakerCount: S, rsvped: N, canInvite: z, location: A, truncate: O, onContextMenu: B, onJoinClick: R, onJoinGuildClick: H, onGoToGuildClick: k, onRsvpClick: w, onStartClick: j, onInviteClick: P, onEndClick: M, onClick: Z, isNew: X, guildEvent: V, eventPreview: Y, recurrenceRule: q, recurrenceId: F } = n,
        W = (0, g.Q)(i, d),
        K = d === E.WX.EXTERNAL,
        J = K ? (n) => n.stopPropagation() : void 0,
        Q = [];
    if (null != q && null != event) {
        let n = (0, b.Ho)(q);
        Q = (0, b.PJ)(4, n, new Date(V.scheduled_start_time));
    }
    let $ = Q.length > 0;
    return (0, a.jsxs)(_.kL8, {
        'aria-label': o,
        onClick: () => (null == Z ? void 0 : Z(F)),
        onContextMenu: B,
        className: l()(
            D.card,
            {
                [D.joined]: I,
                [D.lurking]: m
            },
            e
        ),
        children: [
            (0, a.jsxs)('div', {
                className: l()(D.padding, { [D.isRecurring]: $ }),
                children: [
                    0 === s && (0, a.jsx)(v.Z, { source: p }),
                    (0, a.jsx)(T.ZP, {
                        creator: r,
                        name: o,
                        description: c,
                        imageSource: 1 === s ? p : null,
                        truncate: O,
                        guildId: null == t ? void 0 : t.id,
                        isHub: x,
                        isNew: X,
                        guildEvent: V,
                        eventPreview: Y,
                        recurrenceId: F
                    }),
                    u &&
                        null != t &&
                        null != G &&
                        S > 0 &&
                        (0, a.jsx)(f.Z, {
                            guild: t,
                            speakers: G,
                            speakerCount: S,
                            className: D.spacing
                        }),
                    (0, a.jsx)('hr', { className: D.divider }),
                    (0, a.jsxs)('div', {
                        className: l()(D.inline, D.footer),
                        children: [
                            (0, a.jsx)(y, {
                                guild: t,
                                channel: i,
                                onJoinClick: R,
                                handleLocationClick: J,
                                location: A,
                                isExternal: K,
                                isHub: x
                            }),
                            x
                                ? (0, a.jsx)(h.Z, {
                                      isActive: u,
                                      isUserLurking: m,
                                      isMember: L,
                                      rsvped: N,
                                      onRsvpClick: w,
                                      onJoinGuildClick: H,
                                      onGoToGuildClick: k,
                                      guildName: null == t ? void 0 : t.name,
                                      canInvite: z,
                                      isChannelPublic: W,
                                      onInviteClick: P
                                  })
                                : (0, a.jsx)(C.ZP, {
                                      entityType: d,
                                      isJoined: I,
                                      isActive: u,
                                      isUserLurking: m,
                                      rsvped: N,
                                      canInvite: z,
                                      isChannelPublic: W,
                                      onContextMenu: B,
                                      onJoinClick: R,
                                      onRsvpClick: w,
                                      onStartClick: j,
                                      onInviteClick: P,
                                      onEndClick: M
                                  })
                        ]
                    }),
                    $ && (0, a.jsx)('hr', { className: D.divider })
                ]
            }),
            $ &&
                (0, a.jsx)(U.Z, {
                    guildId: null == t ? void 0 : t.id,
                    recurrenceRule: q,
                    guildEventId: V.id,
                    onRecurrenceClick: Z
                })
        ]
    });
}
