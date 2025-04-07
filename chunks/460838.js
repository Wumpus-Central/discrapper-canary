t.d(n, {
    Q: () => I,
    Z: () => _
}),
    t(953529);
var r,
    i = t(200651),
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
    N = t(765305),
    P = t(981631),
    C = t(388032),
    E = t(565585);
function k(e) {
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
function w(e, n) {
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
var I = (((r = {})[(r.BANNER = 0)] = 'BANNER'), (r[(r.THUMBNAIL = 1)] = 'THUMBNAIL'), r);
function S(e) {
    let { channel: n, onClick: t } = e,
        { canManageAllEvents: r } = (0, p.XJ)(n),
        o = (0, a.e7)([h.Z], () => !n.isGuildVocal() || h.Z.can(P.Plq.CONNECT, n), [n]),
        g = l.useMemo(() => (0, u.Z)(n), [n]),
        f = (0, d.KS)(n);
    return (0, i.jsx)(s.ua7, {
        text: C.NW.string(C.t.nHjY9P),
        shouldShow: !o && null != t,
        children: (e) =>
            (0, i.jsxs)(
                s.P3F,
                w(k({}, e), {
                    className: c()(E.inline, E.channelContainer, {
                        [E.channelContainerEnabled]: o && null != t,
                        [E.channelContainerDisabled]: !o && null != t
                    }),
                    onClick: t,
                    children: [
                        (0, i.jsx)(s.ua7, {
                            text: C.NW.string(C.t['48WXaW']),
                            shouldShow: r && g && o && null != t,
                            children: (e) =>
                                null != f
                                    ? (0, i.jsx)(
                                          f,
                                          w(k({}, e), {
                                              color: 'currentColor',
                                              size: 'custom',
                                              width: 20,
                                              height: 20,
                                              className: E.icon
                                          })
                                      )
                                    : null
                        }),
                        (0, i.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            color: 'none',
                            className: E.channelLocation,
                            children: n.name
                        })
                    ]
                })
            )
    });
}
function T(e) {
    let { guild: n, channel: t, onJoinClick: r, handleLocationClick: l, location: o, isExternal: a, isHub: u } = e;
    return u
        ? null == n
            ? (0, i.jsx)('div', {})
            : (0, i.jsxs)('div', {
                  className: E.inline,
                  children: [
                      (0, i.jsx)(g.Z, {
                          className: E.guildIcon,
                          size: g.Z.Sizes.MINI,
                          active: !0,
                          guild: n
                      }),
                      (0, i.jsx)(s.Text, {
                          variant: 'text-sm/normal',
                          color: 'header-secondary',
                          children: null == n ? void 0 : n.name
                      })
                  ]
              })
        : null != t
          ? (0, i.jsx)(S, {
                channel: t,
                onClick: r
            })
          : (0, i.jsxs)(s.P3F, {
                className: E.inline,
                onClick: l,
                children: [
                    (0, i.jsx)(s._tJ, {
                        size: 'custom',
                        color: 'currentColor',
                        height: 20,
                        width: 20,
                        className: c()(E.channelContainer, E.icon)
                    }),
                    (0, i.jsx)(s.Text, {
                        className: a ? E.externalLocation : E.channelLocation,
                        variant: 'text-sm/normal',
                        children: (0, f.m)(o, !0)
                    })
                ]
            });
}
function _(e) {
    let { className: n, guild: t, channel: r, creator: l, name: o, entityType: a, description: u, imageLocation: d = 0, imageSource: g, isActive: p, isUserLurking: h, isJoined: f = !1, isMember: P = !1, isHub: C = !1, speakers: k, speakerCount: w, rsvped: I, canInvite: S, location: _, truncate: D, onContextMenu: G, onJoinClick: W, onJoinGuildClick: L, onGoToGuildClick: R, onRsvpClick: M, onStartClick: U, onInviteClick: H, onEndClick: A, onClick: z, isNew: B, guildEvent: X, eventPreview: J, recurrenceRule: V, recurrenceId: q } = e,
        K = (0, v.Q)(r, a),
        F = a === N.WX.EXTERNAL,
        Q = F ? (e) => e.stopPropagation() : void 0,
        Y = [];
    if (null != V && null != event) {
        let e = (0, m.Ho)(V);
        Y = (0, m.PJ)(4, e, new Date(X.scheduled_start_time));
    }
    let $ = Y.length > 0;
    return (0, i.jsxs)(s.kL8, {
        'aria-label': o,
        onClick: () => (null == z ? void 0 : z(q)),
        onContextMenu: G,
        className: c()(
            E.card,
            {
                [E.joined]: f,
                [E.lurking]: h
            },
            n
        ),
        children: [
            (0, i.jsxs)('div', {
                className: c()(E.padding, { [E.isRecurring]: $ }),
                children: [
                    0 === d && (0, i.jsx)(b.Z, { source: g }),
                    (0, i.jsx)(y.ZP, {
                        creator: l,
                        name: o,
                        description: u,
                        imageSource: 1 === d ? g : null,
                        truncate: D,
                        guildId: null == t ? void 0 : t.id,
                        isHub: C,
                        isNew: B,
                        guildEvent: X,
                        eventPreview: J,
                        recurrenceId: q
                    }),
                    p &&
                        null != t &&
                        null != k &&
                        w > 0 &&
                        (0, i.jsx)(O.Z, {
                            guild: t,
                            speakers: k,
                            speakerCount: w,
                            className: E.spacing
                        }),
                    (0, i.jsx)('hr', { className: E.divider }),
                    (0, i.jsxs)('div', {
                        className: c()(E.inline, E.footer),
                        children: [
                            (0, i.jsx)(T, {
                                guild: t,
                                channel: r,
                                onJoinClick: W,
                                handleLocationClick: Q,
                                location: _,
                                isExternal: F,
                                isHub: C
                            }),
                            C
                                ? (0, i.jsx)(Z.Z, {
                                      isActive: p,
                                      isUserLurking: h,
                                      isMember: P,
                                      rsvped: I,
                                      onRsvpClick: M,
                                      onJoinGuildClick: L,
                                      onGoToGuildClick: R,
                                      guildName: null == t ? void 0 : t.name,
                                      canInvite: S,
                                      isChannelPublic: K,
                                      onInviteClick: H
                                  })
                                : (0, i.jsx)(j.ZP, {
                                      entityType: a,
                                      isJoined: f,
                                      isActive: p,
                                      isUserLurking: h,
                                      rsvped: I,
                                      canInvite: S,
                                      isChannelPublic: K,
                                      onContextMenu: G,
                                      onJoinClick: W,
                                      onRsvpClick: M,
                                      onStartClick: U,
                                      onInviteClick: H,
                                      onEndClick: A
                                  })
                        ]
                    }),
                    $ && (0, i.jsx)('hr', { className: E.divider })
                ]
            }),
            $ &&
                (0, i.jsx)(x.Z, {
                    guildId: null == t ? void 0 : t.id,
                    recurrenceRule: V,
                    guildEventId: X.id,
                    onRecurrenceClick: z
                })
        ]
    });
}
