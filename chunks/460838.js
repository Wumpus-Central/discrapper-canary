(t.d(n, {
    Q: () => S,
    Z: () => A
}),
    t(953529));
var i,
    a = t(255367),
    r = t(73800),
    l = t(120356),
    o = t.n(l),
    d = t(442837),
    _ = t(481060),
    c = t(447003),
    s = t(471445),
    p = t(565138),
    u = t(357156),
    g = t(496675),
    m = t(725436),
    I = t(274311),
    b = t(854698),
    C = t(285784),
    U = t(95291),
    f = t(742593),
    T = t(810561),
    v = t(187443),
    h = t(131154),
    E = t(765305),
    L = t(981631),
    x = t(388032),
    y = t(565585);
function D(e) {
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
function G(e, n) {
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
var S = (((i = {})[(i.BANNER = 0)] = 'BANNER'), (i[(i.THUMBNAIL = 1)] = 'THUMBNAIL'), i);
function O(e) {
    let { channel: n, onClick: t } = e,
        { canManageAllEvents: i } = (0, u.XJ)(n),
        l = (0, d.e7)([g.Z], () => !n.isGuildVocal() || g.Z.can(L.Plq.CONNECT, n), [n]),
        p = r.useMemo(() => (0, c.Z)(n), [n]),
        m = (0, s.KS)(n);
    return (0, a.jsx)(_.ua7, {
        text: x.intl.string(x.t.nHjY9P),
        shouldShow: !l && null != t,
        children: (e) =>
            (0, a.jsxs)(
                _.P3F,
                G(D({}, e), {
                    className: o()(y.inline, y.channelContainer, {
                        [y.channelContainerEnabled]: l && null != t,
                        [y.channelContainerDisabled]: !l && null != t
                    }),
                    onClick: t,
                    children: [
                        (0, a.jsx)(_.ua7, {
                            text: x.intl.string(x.t['48WXaW']),
                            shouldShow: i && p && l && null != t,
                            children: (e) =>
                                null != m
                                    ? (0, a.jsx)(
                                          m,
                                          G(D({}, e), {
                                              color: 'currentColor',
                                              size: 'custom',
                                              width: 20,
                                              height: 20,
                                              className: y.icon
                                          })
                                      )
                                    : null
                        }),
                        (0, a.jsx)(_.Text, {
                            variant: 'text-sm/normal',
                            color: 'none',
                            className: y.channelLocation,
                            children: n.name
                        })
                    ]
                })
            )
    });
}
function z(e) {
    let { guild: n, channel: t, onJoinClick: i, handleLocationClick: r, location: l, isExternal: d, isHub: c } = e;
    return c
        ? null == n
            ? (0, a.jsx)('div', {})
            : (0, a.jsxs)('div', {
                  className: y.inline,
                  children: [
                      (0, a.jsx)(p.Z, {
                          className: y.guildIcon,
                          size: p.Z.Sizes.MINI,
                          active: !0,
                          guild: n
                      }),
                      (0, a.jsx)(_.Text, {
                          variant: 'text-sm/normal',
                          color: 'header-secondary',
                          children: null == n ? void 0 : n.name
                      })
                  ]
              })
        : null != t
          ? (0, a.jsx)(O, {
                channel: t,
                onClick: i
            })
          : (0, a.jsxs)(_.P3F, {
                className: y.inline,
                onClick: r,
                children: [
                    (0, a.jsx)(_._tJ, {
                        size: 'custom',
                        color: 'currentColor',
                        height: 20,
                        width: 20,
                        className: o()(y.channelContainer, y.icon)
                    }),
                    (0, a.jsx)(_.Text, {
                        className: d ? y.externalLocation : y.channelLocation,
                        variant: 'text-sm/normal',
                        children: (0, m.m)(l, !0)
                    })
                ]
            });
}
function A(e) {
    let { className: n, guild: t, channel: i, creator: r, name: l, entityType: d, description: c, imageLocation: s = 0, imageSource: p, isActive: u, isUserLurking: g, isJoined: m = !1, isMember: L = !1, isHub: x = !1, speakers: D, speakerCount: G, rsvped: S, canInvite: O, location: A, truncate: N, onContextMenu: B, onJoinClick: H, onJoinGuildClick: R, onGoToGuildClick: k, onRsvpClick: w, onStartClick: j, onInviteClick: P, onEndClick: M, onClick: Z, isNew: X, guildEvent: V, eventPreview: Y, recurrenceRule: q, recurrenceId: F } = e,
        W = (0, I.Q)(i, d),
        K = d === E.WX.EXTERNAL,
        J = K ? (e) => e.stopPropagation() : void 0,
        Q = [];
    if (null != q && null != event) {
        let e = (0, b.Ho)(q);
        Q = (0, b.PJ)(4, e, new Date(V.scheduled_start_time));
    }
    let $ = Q.length > 0;
    return (0, a.jsxs)(_.kL8, {
        'aria-label': l,
        onClick: () => (null == Z ? void 0 : Z(F)),
        onContextMenu: B,
        className: o()(
            y.card,
            {
                [y.joined]: m,
                [y.lurking]: g
            },
            n
        ),
        children: [
            (0, a.jsxs)('div', {
                className: o()(y.padding, { [y.isRecurring]: $ }),
                children: [
                    0 === s && (0, a.jsx)(U.Z, { source: p }),
                    (0, a.jsx)(f.ZP, {
                        creator: r,
                        name: l,
                        description: c,
                        imageSource: 1 === s ? p : null,
                        truncate: N,
                        guildId: null == t ? void 0 : t.id,
                        isHub: x,
                        isNew: X,
                        guildEvent: V,
                        eventPreview: Y,
                        recurrenceId: F
                    }),
                    u &&
                        null != t &&
                        null != D &&
                        G > 0 &&
                        (0, a.jsx)(h.Z, {
                            guild: t,
                            speakers: D,
                            speakerCount: G,
                            className: y.spacing
                        }),
                    (0, a.jsx)('hr', { className: y.divider }),
                    (0, a.jsxs)('div', {
                        className: o()(y.inline, y.footer),
                        children: [
                            (0, a.jsx)(z, {
                                guild: t,
                                channel: i,
                                onJoinClick: H,
                                handleLocationClick: J,
                                location: A,
                                isExternal: K,
                                isHub: x
                            }),
                            x
                                ? (0, a.jsx)(v.Z, {
                                      isActive: u,
                                      isUserLurking: g,
                                      isMember: L,
                                      rsvped: S,
                                      onRsvpClick: w,
                                      onJoinGuildClick: R,
                                      onGoToGuildClick: k,
                                      guildName: null == t ? void 0 : t.name,
                                      canInvite: O,
                                      isChannelPublic: W,
                                      onInviteClick: P
                                  })
                                : (0, a.jsx)(C.ZP, {
                                      entityType: d,
                                      isJoined: m,
                                      isActive: u,
                                      isUserLurking: g,
                                      rsvped: S,
                                      canInvite: O,
                                      isChannelPublic: W,
                                      onContextMenu: B,
                                      onJoinClick: H,
                                      onRsvpClick: w,
                                      onStartClick: j,
                                      onInviteClick: P,
                                      onEndClick: M,
                                      onJoinGuildClick: R
                                  })
                        ]
                    }),
                    $ && (0, a.jsx)('hr', { className: y.divider })
                ]
            }),
            $ &&
                (0, a.jsx)(T.Z, {
                    guildId: null == t ? void 0 : t.id,
                    recurrenceRule: q,
                    guildEventId: V.id,
                    onRecurrenceClick: Z
                })
        ]
    });
}
