t.d(n, {
    Q: () => I,
    Z: () => _
}),
    t(953529);
var i,
    r = t(200651),
    l = t(192379),
    o = t(120356),
    c = t.n(o),
    a = t(442837),
    s = t(481060),
    u = t(447003),
    d = t(471445),
    g = t(565138),
    p = t(357156),
    h = t(496675),
    f = t(725436),
    v = t(274311),
    m = t(854698),
    j = t(285784),
    b = t(95291),
    y = t(742593),
    x = t(810561),
    Z = t(187443),
    O = t(131154),
    P = t(765305),
    C = t(981631),
    E = t(388032),
    N = t(565585);
function k(e) {
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
function w(e, n) {
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
var I = (((i = {})[(i.BANNER = 0)] = 'BANNER'), (i[(i.THUMBNAIL = 1)] = 'THUMBNAIL'), i);
function S(e) {
    let { channel: n, onClick: t } = e,
        { canManageAllEvents: i } = (0, p.XJ)(n),
        o = (0, a.e7)([h.Z], () => !n.isGuildVocal() || h.Z.can(C.Plq.CONNECT, n), [n]),
        g = l.useMemo(() => (0, u.Z)(n), [n]),
        f = (0, d.KS)(n);
    return (0, r.jsx)(s.ua7, {
        text: E.intl.string(E.t.nHjY9P),
        shouldShow: !o && null != t,
        children: (e) =>
            (0, r.jsxs)(
                s.P3F,
                w(k({}, e), {
                    className: c()(N.inline, N.channelContainer, {
                        [N.channelContainerEnabled]: o && null != t,
                        [N.channelContainerDisabled]: !o && null != t
                    }),
                    onClick: t,
                    children: [
                        (0, r.jsx)(s.ua7, {
                            text: E.intl.string(E.t['48WXaW']),
                            shouldShow: i && g && o && null != t,
                            children: (e) =>
                                null != f
                                    ? (0, r.jsx)(
                                          f,
                                          w(k({}, e), {
                                              color: 'currentColor',
                                              size: 'custom',
                                              width: 20,
                                              height: 20,
                                              className: N.icon
                                          })
                                      )
                                    : null
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            color: 'none',
                            className: N.channelLocation,
                            children: n.name
                        })
                    ]
                })
            )
    });
}
function T(e) {
    let { guild: n, channel: t, onJoinClick: i, handleLocationClick: l, location: o, isExternal: a, isHub: u } = e;
    return u
        ? null == n
            ? (0, r.jsx)('div', {})
            : (0, r.jsxs)('div', {
                  className: N.inline,
                  children: [
                      (0, r.jsx)(g.Z, {
                          className: N.guildIcon,
                          size: g.Z.Sizes.MINI,
                          active: !0,
                          guild: n
                      }),
                      (0, r.jsx)(s.Text, {
                          variant: 'text-sm/normal',
                          color: 'header-secondary',
                          children: null == n ? void 0 : n.name
                      })
                  ]
              })
        : null != t
          ? (0, r.jsx)(S, {
                channel: t,
                onClick: i
            })
          : (0, r.jsxs)(s.P3F, {
                className: N.inline,
                onClick: l,
                children: [
                    (0, r.jsx)(s._tJ, {
                        size: 'custom',
                        color: 'currentColor',
                        height: 20,
                        width: 20,
                        className: c()(N.channelContainer, N.icon)
                    }),
                    (0, r.jsx)(s.Text, {
                        className: a ? N.externalLocation : N.channelLocation,
                        variant: 'text-sm/normal',
                        children: (0, f.m)(o, !0)
                    })
                ]
            });
}
function _(e) {
    let { className: n, guild: t, channel: i, creator: l, name: o, entityType: a, description: u, imageLocation: d = 0, imageSource: g, isActive: p, isUserLurking: h, isJoined: f = !1, isMember: C = !1, isHub: E = !1, speakers: k, speakerCount: w, rsvped: I, canInvite: S, location: _, truncate: D, onContextMenu: G, onJoinClick: L, onJoinGuildClick: R, onGoToGuildClick: M, onRsvpClick: U, onStartClick: H, onInviteClick: A, onEndClick: z, onClick: B, isNew: X, guildEvent: J, eventPreview: V, recurrenceRule: q, recurrenceId: W } = e,
        K = (0, v.Q)(i, a),
        F = a === P.WX.EXTERNAL,
        Q = F ? (e) => e.stopPropagation() : void 0,
        Y = [];
    if (null != q && null != event) {
        let e = (0, m.Ho)(q);
        Y = (0, m.PJ)(4, e, new Date(J.scheduled_start_time));
    }
    let $ = Y.length > 0;
    return (0, r.jsxs)(s.kL8, {
        'aria-label': o,
        onClick: () => (null == B ? void 0 : B(W)),
        onContextMenu: G,
        className: c()(
            N.card,
            {
                [N.joined]: f,
                [N.lurking]: h
            },
            n
        ),
        children: [
            (0, r.jsxs)('div', {
                className: c()(N.padding, { [N.isRecurring]: $ }),
                children: [
                    0 === d && (0, r.jsx)(b.Z, { source: g }),
                    (0, r.jsx)(y.ZP, {
                        creator: l,
                        name: o,
                        description: u,
                        imageSource: 1 === d ? g : null,
                        truncate: D,
                        guildId: null == t ? void 0 : t.id,
                        isHub: E,
                        isNew: X,
                        guildEvent: J,
                        eventPreview: V,
                        recurrenceId: W
                    }),
                    p &&
                        null != t &&
                        null != k &&
                        w > 0 &&
                        (0, r.jsx)(O.Z, {
                            guild: t,
                            speakers: k,
                            speakerCount: w,
                            className: N.spacing
                        }),
                    (0, r.jsx)('hr', { className: N.divider }),
                    (0, r.jsxs)('div', {
                        className: c()(N.inline, N.footer),
                        children: [
                            (0, r.jsx)(T, {
                                guild: t,
                                channel: i,
                                onJoinClick: L,
                                handleLocationClick: Q,
                                location: _,
                                isExternal: F,
                                isHub: E
                            }),
                            E
                                ? (0, r.jsx)(Z.Z, {
                                      isActive: p,
                                      isUserLurking: h,
                                      isMember: C,
                                      rsvped: I,
                                      onRsvpClick: U,
                                      onJoinGuildClick: R,
                                      onGoToGuildClick: M,
                                      guildName: null == t ? void 0 : t.name,
                                      canInvite: S,
                                      isChannelPublic: K,
                                      onInviteClick: A
                                  })
                                : (0, r.jsx)(j.ZP, {
                                      entityType: a,
                                      isJoined: f,
                                      isActive: p,
                                      isUserLurking: h,
                                      rsvped: I,
                                      canInvite: S,
                                      isChannelPublic: K,
                                      onContextMenu: G,
                                      onJoinClick: L,
                                      onRsvpClick: U,
                                      onStartClick: H,
                                      onInviteClick: A,
                                      onEndClick: z
                                  })
                        ]
                    }),
                    $ && (0, r.jsx)('hr', { className: N.divider })
                ]
            }),
            $ &&
                (0, r.jsx)(x.Z, {
                    guildId: null == t ? void 0 : t.id,
                    recurrenceRule: q,
                    guildEventId: J.id,
                    onRecurrenceClick: B
                })
        ]
    });
}
