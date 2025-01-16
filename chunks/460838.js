t.d(n, {
    Q: function () {
        return a;
    },
    Z: function () {
        return A;
    }
});
var i,
    a,
    r = t(200651),
    c = t(192379),
    o = t(120356),
    d = t.n(o),
    l = t(442837),
    s = t(481060),
    _ = t(447003),
    u = t(471445),
    p = t(565138),
    m = t(357156),
    I = t(496675),
    f = t(725436),
    g = t(274311),
    C = t(854698),
    b = t(285784),
    v = t(95291),
    h = t(742593),
    T = t(810561),
    U = t(187443),
    E = t(131154),
    L = t(765305),
    x = t(981631),
    D = t(388032),
    G = t(596622);
function S(e) {
    let { channel: n, onClick: t } = e,
        { canManageAllEvents: i } = (0, m.XJ)(n),
        a = (0, l.e7)([I.Z], () => !n.isGuildVocal() || I.Z.can(x.Plq.CONNECT, n), [n]),
        o = c.useMemo(() => (0, _.Z)(n), [n]),
        p = (0, u.KS)(n);
    return (0, r.jsx)(s.Tooltip, {
        text: D.intl.string(D.t.nHjY9P),
        shouldShow: !a && null != t,
        children: (e) =>
            (0, r.jsxs)(s.Clickable, {
                ...e,
                className: d()(G.inline, G.channelContainer, {
                    [G.channelContainerEnabled]: a && null != t,
                    [G.channelContainerDisabled]: !a && null != t
                }),
                onClick: t,
                children: [
                    (0, r.jsx)(s.Tooltip, {
                        text: D.intl.string(D.t['48WXaW']),
                        shouldShow: i && o && a && null != t,
                        children: (e) =>
                            null != p
                                ? (0, r.jsx)(p, {
                                      ...e,
                                      color: 'currentColor',
                                      size: 'custom',
                                      width: 20,
                                      height: 20,
                                      className: G.icon
                                  })
                                : null
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        color: 'none',
                        className: G.channelLocation,
                        children: n.name
                    })
                ]
            })
    });
}
function y(e) {
    let { guild: n, channel: t, onJoinClick: i, handleLocationClick: a, location: c, isExternal: o, isHub: l } = e;
    if (l)
        return null == n
            ? (0, r.jsx)('div', {})
            : (0, r.jsxs)('div', {
                  className: G.inline,
                  children: [
                      (0, r.jsx)(p.Z, {
                          className: G.guildIcon,
                          size: p.Z.Sizes.MINI,
                          active: !0,
                          guild: n
                      }),
                      (0, r.jsx)(s.Text, {
                          variant: 'text-sm/normal',
                          color: 'header-secondary',
                          children: null == n ? void 0 : n.name
                      })
                  ]
              });
    return null != t
        ? (0, r.jsx)(S, {
              channel: t,
              onClick: i
          })
        : (0, r.jsxs)(s.Clickable, {
              className: G.inline,
              onClick: a,
              children: [
                  (0, r.jsx)(s.LocationIcon, {
                      size: 'custom',
                      color: 'currentColor',
                      height: 20,
                      width: 20,
                      className: d()(G.channelContainer, G.icon)
                  }),
                  (0, r.jsx)(s.Text, {
                      className: o ? G.externalLocation : G.channelLocation,
                      variant: 'text-sm/normal',
                      children: (0, f.m)(c, !0)
                  })
              ]
          });
}
function A(e) {
    let { className: n, guild: t, channel: i, creator: a, name: c, entityType: o, description: l, imageLocation: _ = 0, imageSource: u, isActive: p, isUserLurking: m, isJoined: I = !1, isMember: f = !1, isHub: x = !1, speakers: D, speakerCount: S, rsvped: A, canInvite: N, location: z, truncate: O, onContextMenu: B, onJoinClick: H, onJoinGuildClick: R, onGoToGuildClick: k, onRsvpClick: w, onStartClick: M, onInviteClick: j, onEndClick: P, onClick: Z, isNew: X, guildEvent: V, eventPreview: Y, recurrenceRule: q, recurrenceId: F } = e,
        W = (0, g.Q)(i, o),
        K = o === L.WX.EXTERNAL,
        J = K ? (e) => e.stopPropagation() : void 0,
        Q = [];
    if (null != q && null != event) {
        let e = (0, C.Ho)(q);
        Q = (0, C.PJ)(4, e, new Date(V.scheduled_start_time));
    }
    let $ = Q.length > 0;
    return (0, r.jsxs)(s.ClickableContainer, {
        'aria-label': c,
        onClick: () => (null == Z ? void 0 : Z(F)),
        onContextMenu: B,
        className: d()(
            G.card,
            {
                [G.joined]: I,
                [G.lurking]: m
            },
            n
        ),
        children: [
            (0, r.jsxs)('div', {
                className: d()(G.padding, { [G.isRecurring]: $ }),
                children: [
                    0 === _ && (0, r.jsx)(v.Z, { source: u }),
                    (0, r.jsx)(h.ZP, {
                        creator: a,
                        name: c,
                        description: l,
                        imageSource: 1 === _ ? u : null,
                        truncate: O,
                        guildId: null == t ? void 0 : t.id,
                        isHub: x,
                        isNew: X,
                        guildEvent: V,
                        eventPreview: Y,
                        recurrenceId: F
                    }),
                    p &&
                        null != t &&
                        null != D &&
                        S > 0 &&
                        (0, r.jsx)(E.Z, {
                            guild: t,
                            speakers: D,
                            speakerCount: S,
                            className: G.spacing
                        }),
                    (0, r.jsx)('hr', { className: G.divider }),
                    (0, r.jsxs)('div', {
                        className: d()(G.inline, G.footer),
                        children: [
                            (0, r.jsx)(y, {
                                guild: t,
                                channel: i,
                                onJoinClick: H,
                                handleLocationClick: J,
                                location: z,
                                isExternal: K,
                                isHub: x
                            }),
                            x
                                ? (0, r.jsx)(U.Z, {
                                      isActive: p,
                                      isUserLurking: m,
                                      isMember: f,
                                      rsvped: A,
                                      onRsvpClick: w,
                                      onJoinGuildClick: R,
                                      onGoToGuildClick: k,
                                      guildName: null == t ? void 0 : t.name,
                                      canInvite: N,
                                      isChannelPublic: W,
                                      onInviteClick: j
                                  })
                                : (0, r.jsx)(b.ZP, {
                                      entityType: o,
                                      isJoined: I,
                                      isActive: p,
                                      isUserLurking: m,
                                      rsvped: A,
                                      canInvite: N,
                                      isChannelPublic: W,
                                      onContextMenu: B,
                                      onJoinClick: H,
                                      onRsvpClick: w,
                                      onStartClick: M,
                                      onInviteClick: j,
                                      onEndClick: P
                                  })
                        ]
                    }),
                    $ && (0, r.jsx)('hr', { className: G.divider })
                ]
            }),
            $ &&
                (0, r.jsx)(T.Z, {
                    guildId: null == t ? void 0 : t.id,
                    recurrenceRule: q,
                    guildEventId: V.id,
                    onRecurrenceClick: Z
                })
        ]
    });
}
((i = a || (a = {}))[(i.BANNER = 0)] = 'BANNER'), (i[(i.THUMBNAIL = 1)] = 'THUMBNAIL');
