t.d(n, {
    Q: () => I,
    Z: () => L,
}),
    t(953529);
var i,
    r = t(255367),
    l = t(73800),
    o = t(120356),
    c = t.n(o),
    a = t(442837),
    s = t(481060),
    u = t(447003),
    d = t(471445),
    g = t(565138),
    p = t(357156),
    f = t(496675),
    h = t(725436),
    v = t(274311),
    m = t(854698),
    j = t(285784),
    b = t(95291),
    y = t(742593),
    x = t(810561),
    O = t(187443),
    Z = t(131154),
    C = t(765305),
    P = t(981631),
    E = t(388032),
    k = t(565585);
function N(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            i = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            i.forEach(function (n) {
                var i;
                (i = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
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
var I = (((i = {})[(i.BANNER = 0)] = "BANNER"), (i[(i.THUMBNAIL = 1)] = "THUMBNAIL"), i);
function S(e) {
    let { channel: n, onClick: t } = e,
        { canManageAllEvents: i } = (0, p.XJ)(n),
        o = (0, a.e7)([f.Z], () => !n.isGuildVocal() || f.Z.can(P.Plq.CONNECT, n), [n]),
        g = l.useMemo(() => (0, u.Z)(n), [n]),
        h = (0, d.KS)(n);
    return (0, r.jsx)(s.ua7, {
        text: E.intl.string(E.t.nHjY9P),
        shouldShow: !o && null != t,
        children: (e) =>
            (0, r.jsxs)(
                s.P3F,
                w(N({}, e), {
                    className: c()(k.inline, k.channelContainer, {
                        [k.channelContainerEnabled]: o && null != t,
                        [k.channelContainerDisabled]: !o && null != t,
                    }),
                    onClick: t,
                    children: [
                        (0, r.jsx)(s.ua7, {
                            text: E.intl.string(E.t["48WXaW"]),
                            shouldShow: i && g && o && null != t,
                            children: (e) =>
                                null != h
                                    ? (0, r.jsx)(
                                          h,
                                          w(N({}, e), {
                                              color: "currentColor",
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              className: k.icon,
                                          }),
                                      )
                                    : null,
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: "none",
                            className: k.channelLocation,
                            children: n.name,
                        }),
                    ],
                }),
            ),
    });
}
function T(e) {
    let { guild: n, channel: t, onJoinClick: i, handleLocationClick: l, location: o, isExternal: a, isHub: u } = e;
    return u
        ? null == n
            ? (0, r.jsx)("div", {})
            : (0, r.jsxs)("div", {
                  className: k.inline,
                  children: [
                      (0, r.jsx)(g.Z, {
                          className: k.guildIcon,
                          size: g.Z.Sizes.MINI,
                          active: !0,
                          guild: n,
                      }),
                      (0, r.jsx)(s.Text, {
                          variant: "text-sm/normal",
                          color: "header-secondary",
                          children: null == n ? void 0 : n.name,
                      }),
                  ],
              })
        : null != t
          ? (0, r.jsx)(S, {
                channel: t,
                onClick: i,
            })
          : (0, r.jsxs)(s.P3F, {
                className: k.inline,
                onClick: l,
                children: [
                    (0, r.jsx)(s._tJ, {
                        size: "custom",
                        color: "currentColor",
                        height: 20,
                        width: 20,
                        className: c()(k.channelContainer, k.icon),
                    }),
                    (0, r.jsx)(s.Text, {
                        className: a ? k.externalLocation : k.channelLocation,
                        variant: "text-sm/normal",
                        children: (0, h.m)(o, !0),
                    }),
                ],
            });
}
function _(e) {
    var { isHub: n } = e,
        t = (function (e, n) {
            if (null == e) return {};
            var t,
                i,
                r = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        i,
                        r = {},
                        l = Object.keys(e);
                    for (i = 0; i < l.length; i++) (t = l[i]), n.indexOf(t) >= 0 || (r[t] = e[t]);
                    return r;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (i = 0; i < l.length; i++)
                    (t = l[i]),
                        !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]);
            }
            return r;
        })(e, ["isHub"]);
    return n ? (0, r.jsx)(G, N({}, t)) : (0, r.jsx)(D, N({}, t));
}
function D(e) {
    let {
            channel: n,
            entityType: t,
            isJoined: i,
            isActive: l,
            isUserLurking: o,
            rsvped: c,
            canInvite: a,
            onContextMenu: u,
            onJoinClick: d,
            onRsvpClick: g,
            onStartClick: p,
            onInviteClick: f,
            onEndClick: h,
            onJoinGuildClick: m,
        } = e,
        b = (0, v.Q)(n, t),
        y = (0, j.Zs)({
            entityType: t,
            isJoined: i,
            isActive: l,
            isUserLurking: o,
            rsvped: c,
            canInvite: a,
            isChannelPublic: b,
            onJoinClick: d,
            onRsvpClick: g,
            onStartClick: p,
            onInviteClick: f,
            onEndClick: h,
            onJoinGuildClick: m,
        });
    return (0, r.jsxs)(s.hE2, {
        fullWidth: !1,
        size: "sm",
        children: [
            null != u ? (0, r.jsx)(j.b5, { onClick: u }) : null,
            null == y ? void 0 : y.map((e, n) => (0, r.jsx)(s.zxk, N({}, e), n)),
        ],
    });
}
function G(e) {
    let {
            channel: n,
            entityType: t,
            guild: i,
            isActive: l,
            isUserLurking: o,
            isMember: c,
            rsvped: a,
            canInvite: u,
            onRsvpClick: d,
            onJoinGuildClick: g,
            onGoToGuildClick: p,
            onInviteClick: f,
        } = e,
        h = (0, v.Q)(n, t),
        m = (0, O.u)({
            isActive: l,
            isUserLurking: o,
            isMember: c,
            rsvped: a,
            canInvite: u,
            isChannelPublic: h,
            guildName: null == i ? void 0 : i.name,
            onRsvpClick: d,
            onJoinGuildClick: g,
            onGoToGuildClick: p,
            onInviteClick: f,
        });
    return (0, r.jsx)(s.hE2, {
        fullWidth: !1,
        size: "sm",
        children: null == m ? void 0 : m.map((e, n) => (0, r.jsx)(s.zxk, N({}, e), n)),
    });
}
function L(e) {
    let {
            className: n,
            guild: t,
            channel: i,
            creator: l,
            name: o,
            entityType: a,
            description: u,
            imageLocation: d = 0,
            imageSource: g,
            isActive: p,
            isUserLurking: f,
            isJoined: h = !1,
            isMember: v = !1,
            isHub: j = !1,
            speakers: O,
            speakerCount: P,
            rsvped: E,
            canInvite: N,
            location: w,
            truncate: I,
            onContextMenu: S,
            onJoinClick: D,
            onJoinGuildClick: G,
            onGoToGuildClick: L,
            onRsvpClick: R,
            onStartClick: H,
            onInviteClick: M,
            onEndClick: U,
            onClick: z,
            isNew: A,
            guildEvent: J,
            eventPreview: B,
            recurrenceRule: X,
            recurrenceId: W,
        } = e,
        V = a === C.WX.EXTERNAL,
        q = V ? (e) => e.stopPropagation() : void 0,
        K = [];
    if (null != X && null != event) {
        let e = (0, m.Ho)(X);
        K = (0, m.PJ)(4, e, new Date(J.scheduled_start_time));
    }
    let Q = K.length > 0;
    return (0, r.jsxs)(s.kL8, {
        "aria-label": o,
        onClick: () => (null == z ? void 0 : z(W)),
        onContextMenu: S,
        className: c()(
            k.card,
            {
                [k.joined]: h,
                [k.lurking]: f,
            },
            n,
        ),
        children: [
            (0, r.jsxs)("div", {
                className: c()(k.padding, { [k.isRecurring]: Q }),
                children: [
                    0 === d && (0, r.jsx)(b.Z, { source: g }),
                    (0, r.jsx)(y.ZP, {
                        creator: l,
                        name: o,
                        description: u,
                        imageSource: 1 === d ? g : null,
                        truncate: I,
                        guildId: null == t ? void 0 : t.id,
                        isHub: j,
                        isNew: A,
                        guildEvent: J,
                        eventPreview: B,
                        recurrenceId: W,
                    }),
                    p &&
                        null != t &&
                        null != O &&
                        P > 0 &&
                        (0, r.jsx)(Z.Z, {
                            guild: t,
                            speakers: O,
                            speakerCount: P,
                            className: k.spacing,
                        }),
                    (0, r.jsx)("hr", { className: k.divider }),
                    (0, r.jsxs)("div", {
                        className: c()(k.inline, k.footer),
                        children: [
                            (0, r.jsx)(T, {
                                guild: t,
                                channel: i,
                                onJoinClick: D,
                                handleLocationClick: q,
                                location: w,
                                isExternal: V,
                                isHub: j,
                            }),
                            (0, r.jsx)("div", {
                                children: (0, r.jsx)(_, {
                                    isHub: j,
                                    channel: i,
                                    entityType: a,
                                    guild: t,
                                    isActive: p,
                                    isJoined: h,
                                    isUserLurking: f,
                                    isMember: v,
                                    rsvped: E,
                                    canInvite: N,
                                    onContextMenu: S,
                                    onRsvpClick: R,
                                    onJoinGuildClick: G,
                                    onGoToGuildClick: L,
                                    onInviteClick: M,
                                    onJoinClick: D,
                                    onStartClick: H,
                                    onEndClick: U,
                                }),
                            }),
                        ],
                    }),
                    Q && (0, r.jsx)("hr", { className: k.divider }),
                ],
            }),
            Q &&
                (0, r.jsx)(x.Z, {
                    guildId: null == t ? void 0 : t.id,
                    recurrenceRule: X,
                    guildEventId: J.id,
                    onRecurrenceClick: z,
                }),
        ],
    });
}
