i.d(n, {
    Q: () => w,
    Z: () => A
});
var l,
    t = i(200651),
    a = i(192379),
    s = i(120356),
    r = i.n(s),
    c = i(442837),
    o = i(481060),
    d = i(447003),
    u = i(471445),
    h = i(565138),
    v = i(357156),
    x = i(496675),
    m = i(725436),
    g = i(274311),
    C = i(854698),
    N = i(285784),
    j = i(95291),
    p = i(742593),
    k = i(810561),
    E = i(187443),
    I = i(131154),
    Z = i(765305),
    y = i(981631),
    f = i(388032),
    T = i(820137),
    w = (((l = {})[(l.BANNER = 0)] = 'BANNER'), (l[(l.THUMBNAIL = 1)] = 'THUMBNAIL'), l);
function _(e) {
    let { channel: n, onClick: i } = e,
        { canManageAllEvents: l } = (0, v.XJ)(n),
        s = (0, c.e7)([x.Z], () => !n.isGuildVocal() || x.Z.can(y.Plq.CONNECT, n), [n]),
        h = a.useMemo(() => (0, d.Z)(n), [n]),
        m = (0, u.KS)(n);
    return (0, t.jsx)(o.ua7, {
        text: f.intl.string(f.t.nHjY9P),
        shouldShow: !s && null != i,
        children: (e) =>
            (0, t.jsxs)(o.P3F, {
                ...e,
                className: r()(T.inline, T.channelContainer, {
                    [T.channelContainerEnabled]: s && null != i,
                    [T.channelContainerDisabled]: !s && null != i
                }),
                onClick: i,
                children: [
                    (0, t.jsx)(o.ua7, {
                        text: f.intl.string(f.t['48WXaW']),
                        shouldShow: l && h && s && null != i,
                        children: (e) =>
                            null != m
                                ? (0, t.jsx)(m, {
                                      ...e,
                                      color: 'currentColor',
                                      size: 'custom',
                                      width: 20,
                                      height: 20,
                                      className: T.icon
                                  })
                                : null
                    }),
                    (0, t.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        color: 'none',
                        className: T.channelLocation,
                        children: n.name
                    })
                ]
            })
    });
}
function S(e) {
    let { guild: n, channel: i, onJoinClick: l, handleLocationClick: a, location: s, isExternal: c, isHub: d } = e;
    return d
        ? null == n
            ? (0, t.jsx)('div', {})
            : (0, t.jsxs)('div', {
                  className: T.inline,
                  children: [
                      (0, t.jsx)(h.Z, {
                          className: T.guildIcon,
                          size: h.Z.Sizes.MINI,
                          active: !0,
                          guild: n
                      }),
                      (0, t.jsx)(o.Text, {
                          variant: 'text-sm/normal',
                          color: 'header-secondary',
                          children: null == n ? void 0 : n.name
                      })
                  ]
              })
        : null != i
          ? (0, t.jsx)(_, {
                channel: i,
                onClick: l
            })
          : (0, t.jsxs)(o.P3F, {
                className: T.inline,
                onClick: a,
                children: [
                    (0, t.jsx)(o._tJ, {
                        size: 'custom',
                        color: 'currentColor',
                        height: 20,
                        width: 20,
                        className: r()(T.channelContainer, T.icon)
                    }),
                    (0, t.jsx)(o.Text, {
                        className: c ? T.externalLocation : T.channelLocation,
                        variant: 'text-sm/normal',
                        children: (0, m.m)(s, !0)
                    })
                ]
            });
}
function A(e) {
    let { className: n, guild: i, channel: l, creator: a, name: s, entityType: c, description: d, imageLocation: u = 0, imageSource: h, isActive: v, isUserLurking: x, isJoined: m = !1, isMember: y = !1, isHub: f = !1, speakers: w, speakerCount: _, rsvped: A, canInvite: G, location: L, truncate: b, onContextMenu: X, onJoinClick: R, onJoinGuildClick: P, onGoToGuildClick: M, onRsvpClick: z, onStartClick: W, onInviteClick: U, onEndClick: J, onClick: V, isNew: H, guildEvent: O, eventPreview: q, recurrenceRule: B, recurrenceId: D } = e,
        K = (0, g.Q)(l, c),
        Q = c === Z.WX.EXTERNAL,
        Y = Q ? (e) => e.stopPropagation() : void 0,
        F = [];
    if (null != B && null != event) {
        let e = (0, C.Ho)(B);
        F = (0, C.PJ)(4, e, new Date(O.scheduled_start_time));
    }
    let $ = F.length > 0;
    return (0, t.jsxs)(o.kL8, {
        'aria-label': s,
        onClick: () => (null == V ? void 0 : V(D)),
        onContextMenu: X,
        className: r()(
            T.card,
            {
                [T.joined]: m,
                [T.lurking]: x
            },
            n
        ),
        children: [
            (0, t.jsxs)('div', {
                className: r()(T.padding, { [T.isRecurring]: $ }),
                children: [
                    0 === u && (0, t.jsx)(j.Z, { source: h }),
                    (0, t.jsx)(p.ZP, {
                        creator: a,
                        name: s,
                        description: d,
                        imageSource: 1 === u ? h : null,
                        truncate: b,
                        guildId: null == i ? void 0 : i.id,
                        isHub: f,
                        isNew: H,
                        guildEvent: O,
                        eventPreview: q,
                        recurrenceId: D
                    }),
                    v &&
                        null != i &&
                        null != w &&
                        _ > 0 &&
                        (0, t.jsx)(I.Z, {
                            guild: i,
                            speakers: w,
                            speakerCount: _,
                            className: T.spacing
                        }),
                    (0, t.jsx)('hr', { className: T.divider }),
                    (0, t.jsxs)('div', {
                        className: r()(T.inline, T.footer),
                        children: [
                            (0, t.jsx)(S, {
                                guild: i,
                                channel: l,
                                onJoinClick: R,
                                handleLocationClick: Y,
                                location: L,
                                isExternal: Q,
                                isHub: f
                            }),
                            f
                                ? (0, t.jsx)(E.Z, {
                                      isActive: v,
                                      isUserLurking: x,
                                      isMember: y,
                                      rsvped: A,
                                      onRsvpClick: z,
                                      onJoinGuildClick: P,
                                      onGoToGuildClick: M,
                                      guildName: null == i ? void 0 : i.name,
                                      canInvite: G,
                                      isChannelPublic: K,
                                      onInviteClick: U
                                  })
                                : (0, t.jsx)(N.ZP, {
                                      entityType: c,
                                      isJoined: m,
                                      isActive: v,
                                      isUserLurking: x,
                                      rsvped: A,
                                      canInvite: G,
                                      isChannelPublic: K,
                                      onContextMenu: X,
                                      onJoinClick: R,
                                      onRsvpClick: z,
                                      onStartClick: W,
                                      onInviteClick: U,
                                      onEndClick: J
                                  })
                        ]
                    }),
                    $ && (0, t.jsx)('hr', { className: T.divider })
                ]
            }),
            $ &&
                (0, t.jsx)(k.Z, {
                    guildId: null == i ? void 0 : i.id,
                    recurrenceRule: B,
                    guildEventId: O.id,
                    onRecurrenceClick: V
                })
        ]
    });
}
