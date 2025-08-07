t.d(n, {
    Q: () => N,
    Z: () => D,
}),
    t(953529);
var r,
    a = t(255367),
    i = t(73800),
    o = t(120356),
    l = t.n(o),
    c = t(442837),
    s = t(481060),
    d = t(447003),
    u = t(471445),
    _ = t(565138),
    p = t(357156),
    b = t(496675),
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
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            r.forEach(function (n) {
                var r;
                (r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = r);
            });
    }
    return e;
}
function k(e, n) {
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
var N = (((r = {})[(r.BANNER = 0)] = "BANNER"), (r[(r.THUMBNAIL = 1)] = "THUMBNAIL"), r);
function S(e) {
    let { channel: n, onClick: t } = e,
        { canManageAllEvents: r } = (0, p.XJ)(n),
        o = (0, c.e7)([b.Z], () => !n.isGuildVocal() || b.Z.can(j.Plq.CONNECT, n), [n]),
        _ = i.useMemo(() => (0, d.Z)(n), [n]),
        f = (0, u.KS)(n);
    return (0, a.jsx)(s.ua7, {
        text: E.intl.string(E.t.nHjY9P),
        shouldShow: !o && null != t,
        children: (e) =>
            (0, a.jsxs)(
                s.P3F,
                k(P({}, e), {
                    className: l()(w.inline, w.channelContainer, {
                        [w.channelContainerEnabled]: o && null != t,
                        [w.channelContainerDisabled]: !o && null != t,
                    }),
                    onClick: t,
                    children: [
                        (0, a.jsx)(s.ua7, {
                            text: E.intl.string(E.t["48WXaW"]),
                            shouldShow: r && _ && o && null != t,
                            children: (e) =>
                                null != f
                                    ? (0, a.jsx)(
                                          f,
                                          k(P({}, e), {
                                              color: "currentColor",
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              className: w.icon,
                                          }),
                                      )
                                    : null,
                        }),
                        (0, a.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: "none",
                            className: w.channelLocation,
                            children: n.name,
                        }),
                    ],
                }),
            ),
    });
}
function T(e) {
    let { guild: n, channel: t, onJoinClick: r, handleLocationClick: i, location: o, isExternal: c, isHub: d } = e;
    return d
        ? null == n
            ? (0, a.jsx)("div", {})
            : (0, a.jsxs)("div", {
                  className: w.inline,
                  children: [
                      (0, a.jsx)(_.Z, {
                          className: w.guildIcon,
                          size: _.Z.Sizes.MINI,
                          active: !0,
                          guild: n,
                      }),
                      (0, a.jsx)(s.Text, {
                          variant: "text-sm/normal",
                          color: "header-secondary",
                          children: null == n ? void 0 : n.name,
                      }),
                  ],
              })
        : null != t
          ? (0, a.jsx)(S, {
                channel: t,
                onClick: r,
            })
          : (0, a.jsxs)(s.P3F, {
                className: w.inline,
                onClick: i,
                children: [
                    (0, a.jsx)(s._tJ, {
                        size: "custom",
                        color: "currentColor",
                        height: 20,
                        width: 20,
                        className: l()(w.channelContainer, w.icon),
                    }),
                    (0, a.jsx)(s.Text, {
                        className: c ? w.externalLocation : w.channelLocation,
                        variant: "text-sm/normal",
                        children: (0, f.m)(o, !0),
                    }),
                ],
            });
}
function Z(e) {
    var { isHub: n } = e,
        t = (function (e, n) {
            if (null == e) return {};
            var t,
                r,
                a = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        r,
                        a = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (a[t] = e[t]);
                    return a;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    (t = i[r]),
                        !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t]);
            }
            return a;
        })(e, ["isHub"]);
    return n ? (0, a.jsx)(U, P({}, t)) : (0, a.jsx)(R, P({}, t));
}
function R(e) {
    let {
            channel: n,
            entityType: t,
            isJoined: r,
            isActive: i,
            isUserLurking: o,
            rsvped: l,
            canInvite: c,
            onContextMenu: d,
            onJoinClick: u,
            onRsvpClick: _,
            onStartClick: p,
            onInviteClick: b,
            onEndClick: f,
            onJoinGuildClick: m,
        } = e,
        v = (0, h.Q)(n, t),
        x = (0, g.Zs)({
            entityType: t,
            isJoined: r,
            isActive: i,
            isUserLurking: o,
            rsvped: l,
            canInvite: c,
            isChannelPublic: v,
            onJoinClick: u,
            onRsvpClick: _,
            onStartClick: p,
            onInviteClick: b,
            onEndClick: f,
            onJoinGuildClick: m,
        });
    return (0, a.jsxs)(s.hE2, {
        fullWidth: !1,
        size: "sm",
        children: [
            null != d ? (0, a.jsx)(g.b5, { onClick: d }) : null,
            null == x ? void 0 : x.map((e, n) => (0, a.jsx)(s.zxk, P({}, e), n)),
        ],
    });
}
function U(e) {
    let {
            channel: n,
            entityType: t,
            guild: r,
            isActive: i,
            isUserLurking: o,
            isMember: l,
            rsvped: c,
            canInvite: d,
            onRsvpClick: u,
            onJoinGuildClick: _,
            onGoToGuildClick: p,
            onInviteClick: b,
        } = e,
        f = (0, h.Q)(n, t),
        m = (0, O.u)({
            isActive: i,
            isUserLurking: o,
            isMember: l,
            rsvped: c,
            canInvite: d,
            isChannelPublic: f,
            guildName: null == r ? void 0 : r.name,
            onRsvpClick: u,
            onJoinGuildClick: _,
            onGoToGuildClick: p,
            onInviteClick: b,
        });
    return (0, a.jsx)(s.hE2, {
        fullWidth: !1,
        size: "sm",
        children: null == m ? void 0 : m.map((e, n) => (0, a.jsx)(s.zxk, P({}, e), n)),
    });
}
function D(e) {
    let {
            className: n,
            guild: t,
            channel: r,
            creator: i,
            name: o,
            entityType: c,
            description: d,
            imageLocation: u = 0,
            imageSource: _,
            isActive: p,
            isUserLurking: b,
            isJoined: f = !1,
            isMember: h = !1,
            isHub: g = !1,
            speakers: O,
            speakerCount: j,
            rsvped: E,
            canInvite: P,
            location: k,
            truncate: N,
            onContextMenu: S,
            onJoinClick: R,
            onJoinGuildClick: U,
            onGoToGuildClick: D,
            onRsvpClick: A,
            onStartClick: L,
            onInviteClick: B,
            onEndClick: M,
            onClick: F,
            isNew: H,
            guildEvent: G,
            eventPreview: z,
            recurrenceRule: W,
            recurrenceId: V,
        } = e,
        q = c === I.WX.EXTERNAL,
        J = q ? (e) => e.stopPropagation() : void 0,
        X = [];
    if (null != W && null != event) {
        let e = (0, m.Ho)(W);
        X = (0, m.PJ)(4, e, new Date(G.scheduled_start_time));
    }
    let Y = X.length > 0;
    return (0, a.jsxs)(s.kL8, {
        "aria-label": o,
        onClick: () => (null == F ? void 0 : F(V)),
        onContextMenu: S,
        className: l()(
            w.card,
            {
                [w.joined]: f,
                [w.lurking]: b,
            },
            n,
        ),
        children: [
            (0, a.jsxs)("div", {
                className: l()(w.padding, { [w.isRecurring]: Y }),
                children: [
                    0 === u && (0, a.jsx)(v.Z, { source: _ }),
                    (0, a.jsx)(x.ZP, {
                        creator: i,
                        name: o,
                        description: d,
                        imageSource: 1 === u ? _ : null,
                        truncate: N,
                        guildId: null == t ? void 0 : t.id,
                        isHub: g,
                        isNew: H,
                        guildEvent: G,
                        eventPreview: z,
                        recurrenceId: V,
                    }),
                    p &&
                        null != t &&
                        null != O &&
                        j > 0 &&
                        (0, a.jsx)(y.Z, {
                            guild: t,
                            speakers: O,
                            speakerCount: j,
                            className: w.spacing,
                        }),
                    (0, a.jsx)("hr", { className: w.divider }),
                    (0, a.jsxs)("div", {
                        className: l()(w.inline, w.footer),
                        children: [
                            (0, a.jsx)(T, {
                                guild: t,
                                channel: r,
                                onJoinClick: R,
                                handleLocationClick: J,
                                location: k,
                                isExternal: q,
                                isHub: g,
                            }),
                            (0, a.jsx)(Z, {
                                isHub: g,
                                channel: r,
                                entityType: c,
                                guild: t,
                                isActive: p,
                                isJoined: f,
                                isUserLurking: b,
                                isMember: h,
                                rsvped: E,
                                canInvite: P,
                                onContextMenu: S,
                                onRsvpClick: A,
                                onJoinGuildClick: U,
                                onGoToGuildClick: D,
                                onInviteClick: B,
                                onJoinClick: R,
                                onStartClick: L,
                                onEndClick: M,
                            }),
                        ],
                    }),
                    Y && (0, a.jsx)("hr", { className: w.divider }),
                ],
            }),
            Y &&
                (0, a.jsx)(C.Z, {
                    guildId: null == t ? void 0 : t.id,
                    recurrenceRule: W,
                    guildEventId: G.id,
                    onRecurrenceClick: F,
                }),
        ],
    });
}
