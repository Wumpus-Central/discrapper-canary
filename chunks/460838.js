i.d(e, {
    Q: function () {
        return t;
    },
    Z: function () {
        return S;
    }
});
var l,
    t,
    a = i(200651),
    r = i(192379),
    s = i(120356),
    c = i.n(s),
    o = i(442837),
    u = i(481060),
    d = i(447003),
    h = i(471445),
    v = i(565138),
    x = i(357156),
    m = i(496675),
    C = i(725436),
    g = i(274311),
    N = i(854698),
    j = i(285784),
    p = i(95291),
    k = i(742593),
    f = i(810561),
    I = i(187443),
    E = i(131154),
    y = i(765305),
    T = i(981631),
    Z = i(388032),
    w = i(662416);
function b(n) {
    let { channel: e, onClick: i } = n,
        { canManageAllEvents: l } = (0, x.XJ)(e),
        t = (0, o.e7)([m.Z], () => !e.isGuildVocal() || m.Z.can(T.Plq.CONNECT, e), [e]),
        s = r.useMemo(() => (0, d.Z)(e), [e]),
        v = (0, h.KS)(e);
    return (0, a.jsx)(u.Tooltip, {
        text: Z.intl.string(Z.t.nHjY9P),
        shouldShow: !t && null != i,
        children: (n) =>
            (0, a.jsxs)(u.Clickable, {
                ...n,
                className: c()(w.inline, w.channelContainer, {
                    [w.channelContainerEnabled]: t && null != i,
                    [w.channelContainerDisabled]: !t && null != i
                }),
                onClick: i,
                children: [
                    (0, a.jsx)(u.Tooltip, {
                        text: Z.intl.string(Z.t['48WXaW']),
                        shouldShow: l && s && t && null != i,
                        children: (n) =>
                            null != v
                                ? (0, a.jsx)(v, {
                                      ...n,
                                      color: 'currentColor',
                                      size: 'custom',
                                      width: 20,
                                      height: 20,
                                      className: w.icon
                                  })
                                : null
                    }),
                    (0, a.jsx)(u.Text, {
                        variant: 'text-sm/normal',
                        color: 'none',
                        className: w.channelLocation,
                        children: e.name
                    })
                ]
            })
    });
}
function _(n) {
    let { guild: e, channel: i, onJoinClick: l, handleLocationClick: t, location: r, isExternal: s, isHub: o } = n;
    if (o)
        return null == e
            ? (0, a.jsx)('div', {})
            : (0, a.jsxs)('div', {
                  className: w.inline,
                  children: [
                      (0, a.jsx)(v.Z, {
                          className: w.guildIcon,
                          size: v.Z.Sizes.MINI,
                          active: !0,
                          guild: e
                      }),
                      (0, a.jsx)(u.Text, {
                          variant: 'text-sm/normal',
                          color: 'header-secondary',
                          children: null == e ? void 0 : e.name
                      })
                  ]
              });
    return null != i
        ? (0, a.jsx)(b, {
              channel: i,
              onClick: l
          })
        : (0, a.jsxs)(u.Clickable, {
              className: w.inline,
              onClick: t,
              children: [
                  (0, a.jsx)(u.LocationIcon, {
                      size: 'custom',
                      color: 'currentColor',
                      height: 20,
                      width: 20,
                      className: c()(w.channelContainer, w.icon)
                  }),
                  (0, a.jsx)(u.Text, {
                      className: s ? w.externalLocation : w.channelLocation,
                      variant: 'text-sm/normal',
                      children: (0, C.m)(r, !0)
                  })
              ]
          });
}
function S(n) {
    let { className: e, guild: i, channel: l, creator: t, name: r, entityType: s, description: o, imageLocation: d = 0, imageSource: h, isActive: v, isUserLurking: x, isJoined: m = !1, isMember: C = !1, isHub: T = !1, speakers: Z, speakerCount: b, rsvped: S, canInvite: A, location: G, truncate: L, onContextMenu: R, onJoinClick: X, onJoinGuildClick: M, onGoToGuildClick: P, onRsvpClick: W, onStartClick: U, onInviteClick: B, onEndClick: H, onClick: V, isNew: z, guildEvent: O, eventPreview: J, recurrenceRule: q, recurrenceId: D } = n,
        K = (0, g.Q)(l, s),
        Q = s === y.WX.EXTERNAL,
        Y = Q ? (n) => n.stopPropagation() : void 0,
        F = [];
    if (null != q && null != event) {
        let n = (0, N.Ho)(q);
        F = (0, N.PJ)(4, n, new Date(O.scheduled_start_time));
    }
    let $ = F.length > 0;
    return (0, a.jsxs)(u.ClickableContainer, {
        'aria-label': r,
        onClick: () => (null == V ? void 0 : V(D)),
        onContextMenu: R,
        className: c()(
            w.card,
            {
                [w.joined]: m,
                [w.lurking]: x
            },
            e
        ),
        children: [
            (0, a.jsxs)('div', {
                className: c()(w.padding, { [w.isRecurring]: $ }),
                children: [
                    0 === d && (0, a.jsx)(p.Z, { source: h }),
                    (0, a.jsx)(k.ZP, {
                        creator: t,
                        name: r,
                        description: o,
                        imageSource: 1 === d ? h : null,
                        truncate: L,
                        guildId: null == i ? void 0 : i.id,
                        isHub: T,
                        isNew: z,
                        guildEvent: O,
                        eventPreview: J,
                        recurrenceId: D
                    }),
                    v &&
                        null != i &&
                        null != Z &&
                        b > 0 &&
                        (0, a.jsx)(E.Z, {
                            guild: i,
                            speakers: Z,
                            speakerCount: b,
                            className: w.spacing
                        }),
                    (0, a.jsx)('hr', { className: w.divider }),
                    (0, a.jsxs)('div', {
                        className: c()(w.inline, w.footer),
                        children: [
                            (0, a.jsx)(_, {
                                guild: i,
                                channel: l,
                                onJoinClick: X,
                                handleLocationClick: Y,
                                location: G,
                                isExternal: Q,
                                isHub: T
                            }),
                            T
                                ? (0, a.jsx)(I.Z, {
                                      isActive: v,
                                      isUserLurking: x,
                                      isMember: C,
                                      rsvped: S,
                                      onRsvpClick: W,
                                      onJoinGuildClick: M,
                                      onGoToGuildClick: P,
                                      guildName: null == i ? void 0 : i.name,
                                      canInvite: A,
                                      isChannelPublic: K,
                                      onInviteClick: B
                                  })
                                : (0, a.jsx)(j.ZP, {
                                      entityType: s,
                                      isJoined: m,
                                      isActive: v,
                                      isUserLurking: x,
                                      rsvped: S,
                                      canInvite: A,
                                      isChannelPublic: K,
                                      onContextMenu: R,
                                      onJoinClick: X,
                                      onRsvpClick: W,
                                      onStartClick: U,
                                      onInviteClick: B,
                                      onEndClick: H
                                  })
                        ]
                    }),
                    $ && (0, a.jsx)('hr', { className: w.divider })
                ]
            }),
            $ &&
                (0, a.jsx)(f.Z, {
                    guildId: null == i ? void 0 : i.id,
                    recurrenceRule: q,
                    guildEventId: O.id,
                    onRecurrenceClick: V
                })
        ]
    });
}
((l = t || (t = {}))[(l.BANNER = 0)] = 'BANNER'), (l[(l.THUMBNAIL = 1)] = 'THUMBNAIL');
