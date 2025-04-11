t.d(n, {
    Q: () => S,
    Z: () => T
}),
    t(953529);
var r,
    a = t(200651),
    i = t(192379),
    o = t(120356),
    l = t.n(o),
    c = t(442837),
    s = t(481060),
    d = t(447003),
    u = t(471445),
    _ = t(565138),
    b = t(357156),
    p = t(496675),
    f = t(725436),
    h = t(274311),
    m = t(854698),
    g = t(285784),
    v = t(95291),
    x = t(742593),
    C = t(810561),
    O = t(187443),
    y = t(131154),
    I = t(765305),
    j = t(981631),
    E = t(388032),
    w = t(565585);
function P(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            r.forEach(function (n) {
                var r;
                (r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = r);
            });
    }
    return e;
}
function N(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, r);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
var S = (((r = {})[(r.BANNER = 0)] = 'BANNER'), (r[(r.THUMBNAIL = 1)] = 'THUMBNAIL'), r);
function k(e) {
    let { channel: n, onClick: t } = e,
        { canManageAllEvents: r } = (0, b.XJ)(n),
        o = (0, c.e7)([p.Z], () => !n.isGuildVocal() || p.Z.can(j.Plq.CONNECT, n), [n]),
        _ = i.useMemo(() => (0, d.Z)(n), [n]),
        f = (0, u.KS)(n);
    return (0, a.jsx)(s.ua7, {
        text: E.NW.string(E.t.nHjY9P),
        shouldShow: !o && null != t,
        children: (e) =>
            (0, a.jsxs)(
                s.P3F,
                N(P({}, e), {
                    className: l()(w.inline, w.channelContainer, {
                        [w.channelContainerEnabled]: o && null != t,
                        [w.channelContainerDisabled]: !o && null != t
                    }),
                    onClick: t,
                    children: [
                        (0, a.jsx)(s.ua7, {
                            text: E.NW.string(E.t['48WXaW']),
                            shouldShow: r && _ && o && null != t,
                            children: (e) =>
                                null != f
                                    ? (0, a.jsx)(
                                          f,
                                          N(P({}, e), {
                                              color: 'currentColor',
                                              size: 'custom',
                                              width: 20,
                                              height: 20,
                                              className: w.icon
                                          })
                                      )
                                    : null
                        }),
                        (0, a.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            color: 'none',
                            className: w.channelLocation,
                            children: n.name
                        })
                    ]
                })
            )
    });
}
function Z(e) {
    let { guild: n, channel: t, onJoinClick: r, handleLocationClick: i, location: o, isExternal: c, isHub: d } = e;
    return d
        ? null == n
            ? (0, a.jsx)('div', {})
            : (0, a.jsxs)('div', {
                  className: w.inline,
                  children: [
                      (0, a.jsx)(_.Z, {
                          className: w.guildIcon,
                          size: _.Z.Sizes.MINI,
                          active: !0,
                          guild: n
                      }),
                      (0, a.jsx)(s.Text, {
                          variant: 'text-sm/normal',
                          color: 'header-secondary',
                          children: null == n ? void 0 : n.name
                      })
                  ]
              })
        : null != t
          ? (0, a.jsx)(k, {
                channel: t,
                onClick: r
            })
          : (0, a.jsxs)(s.P3F, {
                className: w.inline,
                onClick: i,
                children: [
                    (0, a.jsx)(s._tJ, {
                        size: 'custom',
                        color: 'currentColor',
                        height: 20,
                        width: 20,
                        className: l()(w.channelContainer, w.icon)
                    }),
                    (0, a.jsx)(s.Text, {
                        className: c ? w.externalLocation : w.channelLocation,
                        variant: 'text-sm/normal',
                        children: (0, f.m)(o, !0)
                    })
                ]
            });
}
function T(e) {
    let { className: n, guild: t, channel: r, creator: i, name: o, entityType: c, description: d, imageLocation: u = 0, imageSource: _, isActive: b, isUserLurking: p, isJoined: f = !1, isMember: j = !1, isHub: E = !1, speakers: P, speakerCount: N, rsvped: S, canInvite: k, location: T, truncate: R, onContextMenu: U, onJoinClick: A, onJoinGuildClick: D, onGoToGuildClick: L, onRsvpClick: M, onStartClick: F, onInviteClick: B, onEndClick: H, onClick: G, isNew: z, guildEvent: W, eventPreview: q, recurrenceRule: V, recurrenceId: J } = e,
        X = (0, h.Q)(r, c),
        Y = c === I.WX.EXTERNAL,
        K = Y ? (e) => e.stopPropagation() : void 0,
        Q = [];
    if (null != V && null != event) {
        let e = (0, m.Ho)(V);
        Q = (0, m.PJ)(4, e, new Date(W.scheduled_start_time));
    }
    let $ = Q.length > 0;
    return (0, a.jsxs)(s.kL8, {
        'aria-label': o,
        onClick: () => (null == G ? void 0 : G(J)),
        onContextMenu: U,
        className: l()(
            w.card,
            {
                [w.joined]: f,
                [w.lurking]: p
            },
            n
        ),
        children: [
            (0, a.jsxs)('div', {
                className: l()(w.padding, { [w.isRecurring]: $ }),
                children: [
                    0 === u && (0, a.jsx)(v.Z, { source: _ }),
                    (0, a.jsx)(x.ZP, {
                        creator: i,
                        name: o,
                        description: d,
                        imageSource: 1 === u ? _ : null,
                        truncate: R,
                        guildId: null == t ? void 0 : t.id,
                        isHub: E,
                        isNew: z,
                        guildEvent: W,
                        eventPreview: q,
                        recurrenceId: J
                    }),
                    b &&
                        null != t &&
                        null != P &&
                        N > 0 &&
                        (0, a.jsx)(y.Z, {
                            guild: t,
                            speakers: P,
                            speakerCount: N,
                            className: w.spacing
                        }),
                    (0, a.jsx)('hr', { className: w.divider }),
                    (0, a.jsxs)('div', {
                        className: l()(w.inline, w.footer),
                        children: [
                            (0, a.jsx)(Z, {
                                guild: t,
                                channel: r,
                                onJoinClick: A,
                                handleLocationClick: K,
                                location: T,
                                isExternal: Y,
                                isHub: E
                            }),
                            E
                                ? (0, a.jsx)(O.Z, {
                                      isActive: b,
                                      isUserLurking: p,
                                      isMember: j,
                                      rsvped: S,
                                      onRsvpClick: M,
                                      onJoinGuildClick: D,
                                      onGoToGuildClick: L,
                                      guildName: null == t ? void 0 : t.name,
                                      canInvite: k,
                                      isChannelPublic: X,
                                      onInviteClick: B
                                  })
                                : (0, a.jsx)(g.ZP, {
                                      entityType: c,
                                      isJoined: f,
                                      isActive: b,
                                      isUserLurking: p,
                                      rsvped: S,
                                      canInvite: k,
                                      isChannelPublic: X,
                                      onContextMenu: U,
                                      onJoinClick: A,
                                      onRsvpClick: M,
                                      onStartClick: F,
                                      onInviteClick: B,
                                      onEndClick: H
                                  })
                        ]
                    }),
                    $ && (0, a.jsx)('hr', { className: w.divider })
                ]
            }),
            $ &&
                (0, a.jsx)(C.Z, {
                    guildId: null == t ? void 0 : t.id,
                    recurrenceRule: V,
                    guildEventId: W.id,
                    onRecurrenceClick: G
                })
        ]
    });
}
