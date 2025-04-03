i.d(n, {
    Q: () => T,
    Z: () => P
}),
    i(266796);
var t,
    l = i(200651),
    a = i(192379),
    r = i(120356),
    s = i.n(r),
    c = i(442837),
    o = i(481060),
    u = i(447003),
    d = i(471445),
    h = i(565138),
    v = i(357156),
    m = i(496675),
    x = i(725436),
    g = i(274311),
    N = i(854698),
    j = i(285784),
    p = i(95291),
    C = i(742593),
    y = i(810561),
    f = i(187443),
    k = i(131154),
    b = i(765305),
    E = i(981631),
    w = i(388032),
    I = i(565585);
function Z(e) {
    for (var n = 1; n < arguments.length; n++) {
        var i = null != arguments[n] ? arguments[n] : {},
            t = Object.keys(i);
        'function' == typeof Object.getOwnPropertySymbols &&
            (t = t.concat(
                Object.getOwnPropertySymbols(i).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(i, e).enumerable;
                })
            )),
            t.forEach(function (n) {
                var t;
                (t = i[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: t,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = t);
            });
    }
    return e;
}
function S(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var i = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var t = Object.getOwnPropertySymbols(e);
                      i.push.apply(i, t);
                  }
                  return i;
              })(Object(n)).forEach(function (i) {
                  Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
              }),
        e
    );
}
var T = (((t = {})[(t.BANNER = 0)] = 'BANNER'), (t[(t.THUMBNAIL = 1)] = 'THUMBNAIL'), t);
function O(e) {
    let { channel: n, onClick: i } = e,
        { canManageAllEvents: t } = (0, v.XJ)(n),
        r = (0, c.e7)([m.Z], () => !n.isGuildVocal() || m.Z.can(E.Plq.CONNECT, n), [n]),
        h = a.useMemo(() => (0, u.Z)(n), [n]),
        x = (0, d.KS)(n);
    return (0, l.jsx)(o.ua7, {
        text: w.NW.string(w.t.nHjY9P),
        shouldShow: !r && null != i,
        children: (e) =>
            (0, l.jsxs)(
                o.P3F,
                S(Z({}, e), {
                    className: s()(I.inline, I.channelContainer, {
                        [I.channelContainerEnabled]: r && null != i,
                        [I.channelContainerDisabled]: !r && null != i
                    }),
                    onClick: i,
                    children: [
                        (0, l.jsx)(o.ua7, {
                            text: w.NW.string(w.t['48WXaW']),
                            shouldShow: t && h && r && null != i,
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
    let { guild: n, channel: i, onJoinClick: t, handleLocationClick: a, location: r, isExternal: c, isHub: u } = e;
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
        : null != i
          ? (0, l.jsx)(O, {
                channel: i,
                onClick: t
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
    let { className: n, guild: i, channel: t, creator: a, name: r, entityType: c, description: u, imageLocation: d = 0, imageSource: h, isActive: v, isUserLurking: m, isJoined: x = !1, isMember: E = !1, isHub: w = !1, speakers: Z, speakerCount: S, rsvped: T, canInvite: O, location: P, truncate: A, onContextMenu: G, onJoinClick: L, onJoinGuildClick: X, onGoToGuildClick: W, onRsvpClick: R, onStartClick: M, onInviteClick: z, onEndClick: U, onClick: D, isNew: J, guildEvent: V, eventPreview: H, recurrenceRule: q, recurrenceId: B } = e,
        K = (0, g.Q)(t, c),
        Q = c === b.WX.EXTERNAL,
        Y = Q ? (e) => e.stopPropagation() : void 0,
        F = [];
    if (null != q && null != event) {
        let e = (0, N.Ho)(q);
        F = (0, N.PJ)(4, e, new Date(V.scheduled_start_time));
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
                    0 === d && (0, l.jsx)(p.Z, { source: h }),
                    (0, l.jsx)(C.ZP, {
                        creator: a,
                        name: r,
                        description: u,
                        imageSource: 1 === d ? h : null,
                        truncate: A,
                        guildId: null == i ? void 0 : i.id,
                        isHub: w,
                        isNew: J,
                        guildEvent: V,
                        eventPreview: H,
                        recurrenceId: B
                    }),
                    v &&
                        null != i &&
                        null != Z &&
                        S > 0 &&
                        (0, l.jsx)(k.Z, {
                            guild: i,
                            speakers: Z,
                            speakerCount: S,
                            className: I.spacing
                        }),
                    (0, l.jsx)('hr', { className: I.divider }),
                    (0, l.jsxs)('div', {
                        className: s()(I.inline, I.footer),
                        children: [
                            (0, l.jsx)(_, {
                                guild: i,
                                channel: t,
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
                                      isMember: E,
                                      rsvped: T,
                                      onRsvpClick: R,
                                      onJoinGuildClick: X,
                                      onGoToGuildClick: W,
                                      guildName: null == i ? void 0 : i.name,
                                      canInvite: O,
                                      isChannelPublic: K,
                                      onInviteClick: z
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
                                      onRsvpClick: R,
                                      onStartClick: M,
                                      onInviteClick: z,
                                      onEndClick: U
                                  })
                        ]
                    }),
                    $ && (0, l.jsx)('hr', { className: I.divider })
                ]
            }),
            $ &&
                (0, l.jsx)(y.Z, {
                    guildId: null == i ? void 0 : i.id,
                    recurrenceRule: q,
                    guildEventId: V.id,
                    onRecurrenceClick: D
                })
        ]
    });
}
