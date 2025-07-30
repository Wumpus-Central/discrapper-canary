(t.d(n, {
    Q: () => T,
    Z: () => P
}),
    t(953529));
var i,
    l = t(255367),
    r = t(73800),
    a = t(120356),
    s = t.n(a),
    c = t(442837),
    o = t(481060),
    u = t(447003),
    d = t(471445),
    h = t(565138),
    v = t(357156),
    m = t(496675),
    g = t(725436),
    x = t(274311),
    p = t(854698),
    C = t(285784),
    j = t(95291),
    N = t(742593),
    f = t(810561),
    y = t(187443),
    k = t(131154),
    E = t(765305),
    b = t(981631),
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
        a = (0, c.e7)([m.Z], () => !n.isGuildVocal() || m.Z.can(b.Plq.CONNECT, n), [n]),
        h = r.useMemo(() => (0, u.Z)(n), [n]),
        g = (0, d.KS)(n);
    return (0, l.jsx)(o.ua7, {
        text: w.intl.string(w.t.nHjY9P),
        shouldShow: !a && null != t,
        children: (e) =>
            (0, l.jsxs)(
                o.P3F,
                S(Z({}, e), {
                    className: s()(I.inline, I.channelContainer, {
                        [I.channelContainerEnabled]: a && null != t,
                        [I.channelContainerDisabled]: !a && null != t
                    }),
                    onClick: t,
                    children: [
                        (0, l.jsx)(o.ua7, {
                            text: w.intl.string(w.t['48WXaW']),
                            shouldShow: i && h && a && null != t,
                            children: (e) =>
                                null != g
                                    ? (0, l.jsx)(
                                          g,
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
    let { guild: n, channel: t, onJoinClick: i, handleLocationClick: r, location: a, isExternal: c, isHub: u } = e;
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
                onClick: r,
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
                        children: (0, g.m)(a, !0)
                    })
                ]
            });
}
function P(e) {
    let { className: n, guild: t, channel: i, creator: r, name: a, entityType: c, description: u, imageLocation: d = 0, imageSource: h, isActive: v, isUserLurking: m, isJoined: g = !1, isMember: b = !1, isHub: w = !1, speakers: Z, speakerCount: S, rsvped: T, canInvite: O, location: P, truncate: A, onContextMenu: G, onJoinClick: L, onJoinGuildClick: X, onGoToGuildClick: R, onRsvpClick: M, onStartClick: W, onInviteClick: U, onEndClick: J, onClick: V, isNew: D, guildEvent: H, eventPreview: z, recurrenceRule: q, recurrenceId: B } = e,
        K = (0, x.Q)(i, c),
        Q = c === E.WX.EXTERNAL,
        F = Q ? (e) => e.stopPropagation() : void 0,
        Y = [];
    if (null != q && null != event) {
        let e = (0, p.Ho)(q);
        Y = (0, p.PJ)(4, e, new Date(H.scheduled_start_time));
    }
    let $ = Y.length > 0;
    return (0, l.jsxs)(o.kL8, {
        'aria-label': a,
        onClick: () => (null == V ? void 0 : V(B)),
        onContextMenu: G,
        className: s()(
            I.card,
            {
                [I.joined]: g,
                [I.lurking]: m
            },
            n
        ),
        children: [
            (0, l.jsxs)('div', {
                className: s()(I.padding, { [I.isRecurring]: $ }),
                children: [
                    0 === d && (0, l.jsx)(j.Z, { source: h }),
                    (0, l.jsx)(N.ZP, {
                        creator: r,
                        name: a,
                        description: u,
                        imageSource: 1 === d ? h : null,
                        truncate: A,
                        guildId: null == t ? void 0 : t.id,
                        isHub: w,
                        isNew: D,
                        guildEvent: H,
                        eventPreview: z,
                        recurrenceId: B
                    }),
                    v &&
                        null != t &&
                        null != Z &&
                        S > 0 &&
                        (0, l.jsx)(k.Z, {
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
                                handleLocationClick: F,
                                location: P,
                                isExternal: Q,
                                isHub: w
                            }),
                            w
                                ? (0, l.jsx)(y.Z, {
                                      isActive: v,
                                      isUserLurking: m,
                                      isMember: b,
                                      rsvped: T,
                                      onRsvpClick: M,
                                      onJoinGuildClick: X,
                                      onGoToGuildClick: R,
                                      guildName: null == t ? void 0 : t.name,
                                      canInvite: O,
                                      isChannelPublic: K,
                                      onInviteClick: U
                                  })
                                : (0, l.jsx)(C.ZP, {
                                      entityType: c,
                                      isJoined: g,
                                      isActive: v,
                                      isUserLurking: m,
                                      rsvped: T,
                                      canInvite: O,
                                      isChannelPublic: K,
                                      onContextMenu: G,
                                      onJoinClick: L,
                                      onRsvpClick: M,
                                      onStartClick: W,
                                      onInviteClick: U,
                                      onEndClick: J
                                  })
                        ]
                    }),
                    $ && (0, l.jsx)('hr', { className: I.divider })
                ]
            }),
            $ &&
                (0, l.jsx)(f.Z, {
                    guildId: null == t ? void 0 : t.id,
                    recurrenceRule: q,
                    guildEventId: H.id,
                    onRecurrenceClick: V
                })
        ]
    });
}
