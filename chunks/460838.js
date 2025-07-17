(t.d(n, {
    Q: () => T,
    Z: () => P
}),
    t(953529));
var i,
    l = t(255367),
    a = t(73800),
    r = t(120356),
    s = t.n(r),
    c = t(442837),
    o = t(481060),
    u = t(447003),
    d = t(471445),
    h = t(565138),
    v = t(357156),
    m = t(496675),
    x = t(725436),
    g = t(274311),
    p = t(854698),
    j = t(285784),
    C = t(95291),
    N = t(742593),
    y = t(810561),
    f = t(187443),
    b = t(131154),
    E = t(765305),
    k = t(981631),
    w = t(388032),
    I = t(565585);
function Z(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            i = Object.keys(t);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            i.forEach(function (n) {
                var i;
                ((i = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = i));
            }));
    }
    return e;
}
function S(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, i);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
var T = (((i = {})[(i.BANNER = 0)] = 'BANNER'), (i[(i.THUMBNAIL = 1)] = 'THUMBNAIL'), i);
function O(e) {
    let { channel: n, onClick: t } = e,
        { canManageAllEvents: i } = (0, v.XJ)(n),
        r = (0, c.e7)([m.Z], () => !n.isGuildVocal() || m.Z.can(k.Plq.CONNECT, n), [n]),
        h = a.useMemo(() => (0, u.Z)(n), [n]),
        x = (0, d.KS)(n);
    return (0, l.jsx)(o.ua7, {
        text: w.intl.string(w.t.nHjY9P),
        shouldShow: !r && null != t,
        children: (e) =>
            (0, l.jsxs)(
                o.P3F,
                S(Z({}, e), {
                    className: s()(I.inline, I.channelContainer, {
                        [I.channelContainerEnabled]: r && null != t,
                        [I.channelContainerDisabled]: !r && null != t
                    }),
                    onClick: t,
                    children: [
                        (0, l.jsx)(o.ua7, {
                            text: w.intl.string(w.t['48WXaW']),
                            shouldShow: i && h && r && null != t,
                            children: (e) =>
                                null != x
                                    ? (0, l.jsx)(
                                          x,
                                          S(Z({}, e), {
                                              color: 'currentColor',
                                              size: 'custom',
                                              width: 20,
                                              height: 20,
                                              className: I.icon
                                          })
                                      )
                                    : null
                        }),
                        (0, l.jsx)(o.Text, {
                            variant: 'text-sm/normal',
                            color: 'none',
                            className: I.channelLocation,
                            children: n.name
                        })
                    ]
                })
            )
    });
}
function _(e) {
    let { guild: n, channel: t, onJoinClick: i, handleLocationClick: a, location: r, isExternal: c, isHub: u } = e;
    return u
        ? null == n
            ? (0, l.jsx)('div', {})
            : (0, l.jsxs)('div', {
                  className: I.inline,
                  children: [
                      (0, l.jsx)(h.Z, {
                          className: I.guildIcon,
                          size: h.Z.Sizes.MINI,
                          active: !0,
                          guild: n
                      }),
                      (0, l.jsx)(o.Text, {
                          variant: 'text-sm/normal',
                          color: 'header-secondary',
                          children: null == n ? void 0 : n.name
                      })
                  ]
              })
        : null != t
          ? (0, l.jsx)(O, {
                channel: t,
                onClick: i
            })
          : (0, l.jsxs)(o.P3F, {
                className: I.inline,
                onClick: a,
                children: [
                    (0, l.jsx)(o._tJ, {
                        size: 'custom',
                        color: 'currentColor',
                        height: 20,
                        width: 20,
                        className: s()(I.channelContainer, I.icon)
                    }),
                    (0, l.jsx)(o.Text, {
                        className: c ? I.externalLocation : I.channelLocation,
                        variant: 'text-sm/normal',
                        children: (0, x.m)(r, !0)
                    })
                ]
            });
}
function P(e) {
    let { className: n, guild: t, channel: i, creator: a, name: r, entityType: c, description: u, imageLocation: d = 0, imageSource: h, isActive: v, isUserLurking: m, isJoined: x = !1, isMember: k = !1, isHub: w = !1, speakers: Z, speakerCount: S, rsvped: T, canInvite: O, location: P, truncate: A, onContextMenu: G, onJoinClick: L, onJoinGuildClick: X, onGoToGuildClick: R, onRsvpClick: M, onStartClick: z, onInviteClick: W, onEndClick: U, onClick: D, isNew: J, guildEvent: V, eventPreview: H, recurrenceRule: q, recurrenceId: B } = e,
        K = (0, g.Q)(i, c),
        Q = c === E.WX.EXTERNAL,
        Y = Q ? (e) => e.stopPropagation() : void 0,
        F = [];
    if (null != q && null != event) {
        let e = (0, p.Ho)(q);
        F = (0, p.PJ)(4, e, new Date(V.scheduled_start_time));
    }
    let $ = F.length > 0;
    return (0, l.jsxs)(o.kL8, {
        'aria-label': r,
        onClick: () => (null == D ? void 0 : D(B)),
        onContextMenu: G,
        className: s()(
            I.card,
            {
                [I.joined]: x,
                [I.lurking]: m
            },
            n
        ),
        children: [
            (0, l.jsxs)('div', {
                className: s()(I.padding, { [I.isRecurring]: $ }),
                children: [
                    0 === d && (0, l.jsx)(C.Z, { source: h }),
                    (0, l.jsx)(N.ZP, {
                        creator: a,
                        name: r,
                        description: u,
                        imageSource: 1 === d ? h : null,
                        truncate: A,
                        guildId: null == t ? void 0 : t.id,
                        isHub: w,
                        isNew: J,
                        guildEvent: V,
                        eventPreview: H,
                        recurrenceId: B
                    }),
                    v &&
                        null != t &&
                        null != Z &&
                        S > 0 &&
                        (0, l.jsx)(b.Z, {
                            guild: t,
                            speakers: Z,
                            speakerCount: S,
                            className: I.spacing
                        }),
                    (0, l.jsx)('hr', { className: I.divider }),
                    (0, l.jsxs)('div', {
                        className: s()(I.inline, I.footer),
                        children: [
                            (0, l.jsx)(_, {
                                guild: t,
                                channel: i,
                                onJoinClick: L,
                                handleLocationClick: Y,
                                location: P,
                                isExternal: Q,
                                isHub: w
                            }),
                            w
                                ? (0, l.jsx)(f.Z, {
                                      isActive: v,
                                      isUserLurking: m,
                                      isMember: k,
                                      rsvped: T,
                                      onRsvpClick: M,
                                      onJoinGuildClick: X,
                                      onGoToGuildClick: R,
                                      guildName: null == t ? void 0 : t.name,
                                      canInvite: O,
                                      isChannelPublic: K,
                                      onInviteClick: W
                                  })
                                : (0, l.jsx)(j.ZP, {
                                      entityType: c,
                                      isJoined: x,
                                      isActive: v,
                                      isUserLurking: m,
                                      rsvped: T,
                                      canInvite: O,
                                      isChannelPublic: K,
                                      onContextMenu: G,
                                      onJoinClick: L,
                                      onRsvpClick: M,
                                      onStartClick: z,
                                      onInviteClick: W,
                                      onEndClick: U
                                  })
                        ]
                    }),
                    $ && (0, l.jsx)('hr', { className: I.divider })
                ]
            }),
            $ &&
                (0, l.jsx)(y.Z, {
                    guildId: null == t ? void 0 : t.id,
                    recurrenceRule: q,
                    guildEventId: V.id,
                    onRecurrenceClick: D
                })
        ]
    });
}
