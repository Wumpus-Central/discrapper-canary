t.d(n, {
    Q: () => G,
    Z: () => W
}),
    t(953529);
var i,
    a = t(200651),
    r = t(192379),
    o = t(120356),
    d = t.n(o),
    _ = t(442837),
    l = t(481060),
    c = t(447003),
    s = t(471445),
    p = t(565138),
    u = t(357156),
    b = t(496675),
    m = t(725436),
    g = t(274311),
    I = t(854698),
    N = t(285784),
    C = t(95291),
    v = t(742593),
    f = t(810561),
    T = t(187443),
    h = t(131154),
    U = t(765305),
    E = t(981631),
    L = t(388032),
    x = t(565585);
function y(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            i = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            i.forEach(function (n) {
                var i;
                (i = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = i);
            });
    }
    return e;
}
function D(e, n) {
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
var G = (((i = {})[(i.BANNER = 0)] = 'BANNER'), (i[(i.THUMBNAIL = 1)] = 'THUMBNAIL'), i);
function S(e) {
    let { channel: n, onClick: t } = e,
        { canManageAllEvents: i } = (0, u.XJ)(n),
        o = (0, _.e7)([b.Z], () => !n.isGuildVocal() || b.Z.can(E.Plq.CONNECT, n), [n]),
        p = r.useMemo(() => (0, c.Z)(n), [n]),
        m = (0, s.KS)(n);
    return (0, a.jsx)(l.ua7, {
        text: L.NW.string(L.t.nHjY9P),
        shouldShow: !o && null != t,
        children: (e) =>
            (0, a.jsxs)(
                l.P3F,
                D(y({}, e), {
                    className: d()(x.inline, x.channelContainer, {
                        [x.channelContainerEnabled]: o && null != t,
                        [x.channelContainerDisabled]: !o && null != t
                    }),
                    onClick: t,
                    children: [
                        (0, a.jsx)(l.ua7, {
                            text: L.NW.string(L.t['48WXaW']),
                            shouldShow: i && p && o && null != t,
                            children: (e) =>
                                null != m
                                    ? (0, a.jsx)(
                                          m,
                                          D(y({}, e), {
                                              color: 'currentColor',
                                              size: 'custom',
                                              width: 20,
                                              height: 20,
                                              className: x.icon
                                          })
                                      )
                                    : null
                        }),
                        (0, a.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            color: 'none',
                            className: x.channelLocation,
                            children: n.name
                        })
                    ]
                })
            )
    });
}
function O(e) {
    let { guild: n, channel: t, onJoinClick: i, handleLocationClick: r, location: o, isExternal: _, isHub: c } = e;
    return c
        ? null == n
            ? (0, a.jsx)('div', {})
            : (0, a.jsxs)('div', {
                  className: x.inline,
                  children: [
                      (0, a.jsx)(p.Z, {
                          className: x.guildIcon,
                          size: p.Z.Sizes.MINI,
                          active: !0,
                          guild: n
                      }),
                      (0, a.jsx)(l.Text, {
                          variant: 'text-sm/normal',
                          color: 'header-secondary',
                          children: null == n ? void 0 : n.name
                      })
                  ]
              })
        : null != t
          ? (0, a.jsx)(S, {
                channel: t,
                onClick: i
            })
          : (0, a.jsxs)(l.P3F, {
                className: x.inline,
                onClick: r,
                children: [
                    (0, a.jsx)(l._tJ, {
                        size: 'custom',
                        color: 'currentColor',
                        height: 20,
                        width: 20,
                        className: d()(x.channelContainer, x.icon)
                    }),
                    (0, a.jsx)(l.Text, {
                        className: _ ? x.externalLocation : x.channelLocation,
                        variant: 'text-sm/normal',
                        children: (0, m.m)(o, !0)
                    })
                ]
            });
}
function W(e) {
    let { className: n, guild: t, channel: i, creator: r, name: o, entityType: _, description: c, imageLocation: s = 0, imageSource: p, isActive: u, isUserLurking: b, isJoined: m = !1, isMember: E = !1, isHub: L = !1, speakers: y, speakerCount: D, rsvped: G, canInvite: S, location: W, truncate: z, onContextMenu: A, onJoinClick: B, onJoinGuildClick: w, onGoToGuildClick: R, onRsvpClick: H, onStartClick: j, onInviteClick: k, onEndClick: P, onClick: M, isNew: Z, guildEvent: X, eventPreview: V, recurrenceRule: Y, recurrenceId: q } = e,
        F = (0, g.Q)(i, _),
        K = _ === U.WX.EXTERNAL,
        J = K ? (e) => e.stopPropagation() : void 0,
        Q = [];
    if (null != Y && null != event) {
        let e = (0, I.Ho)(Y);
        Q = (0, I.PJ)(4, e, new Date(X.scheduled_start_time));
    }
    let $ = Q.length > 0;
    return (0, a.jsxs)(l.kL8, {
        'aria-label': o,
        onClick: () => (null == M ? void 0 : M(q)),
        onContextMenu: A,
        className: d()(
            x.card,
            {
                [x.joined]: m,
                [x.lurking]: b
            },
            n
        ),
        children: [
            (0, a.jsxs)('div', {
                className: d()(x.padding, { [x.isRecurring]: $ }),
                children: [
                    0 === s && (0, a.jsx)(C.Z, { source: p }),
                    (0, a.jsx)(v.ZP, {
                        creator: r,
                        name: o,
                        description: c,
                        imageSource: 1 === s ? p : null,
                        truncate: z,
                        guildId: null == t ? void 0 : t.id,
                        isHub: L,
                        isNew: Z,
                        guildEvent: X,
                        eventPreview: V,
                        recurrenceId: q
                    }),
                    u &&
                        null != t &&
                        null != y &&
                        D > 0 &&
                        (0, a.jsx)(h.Z, {
                            guild: t,
                            speakers: y,
                            speakerCount: D,
                            className: x.spacing
                        }),
                    (0, a.jsx)('hr', { className: x.divider }),
                    (0, a.jsxs)('div', {
                        className: d()(x.inline, x.footer),
                        children: [
                            (0, a.jsx)(O, {
                                guild: t,
                                channel: i,
                                onJoinClick: B,
                                handleLocationClick: J,
                                location: W,
                                isExternal: K,
                                isHub: L
                            }),
                            L
                                ? (0, a.jsx)(T.Z, {
                                      isActive: u,
                                      isUserLurking: b,
                                      isMember: E,
                                      rsvped: G,
                                      onRsvpClick: H,
                                      onJoinGuildClick: w,
                                      onGoToGuildClick: R,
                                      guildName: null == t ? void 0 : t.name,
                                      canInvite: S,
                                      isChannelPublic: F,
                                      onInviteClick: k
                                  })
                                : (0, a.jsx)(N.ZP, {
                                      entityType: _,
                                      isJoined: m,
                                      isActive: u,
                                      isUserLurking: b,
                                      rsvped: G,
                                      canInvite: S,
                                      isChannelPublic: F,
                                      onContextMenu: A,
                                      onJoinClick: B,
                                      onRsvpClick: H,
                                      onStartClick: j,
                                      onInviteClick: k,
                                      onEndClick: P
                                  })
                        ]
                    }),
                    $ && (0, a.jsx)('hr', { className: x.divider })
                ]
            }),
            $ &&
                (0, a.jsx)(f.Z, {
                    guildId: null == t ? void 0 : t.id,
                    recurrenceRule: Y,
                    guildEventId: X.id,
                    onRecurrenceClick: M
                })
        ]
    });
}
