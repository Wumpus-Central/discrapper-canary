t.d(n, {
    Q: () => N,
    Z: () => D,
}),
    t(953529);
var r,
    o = t(255367),
    i = t(73800),
    a = t(120356),
    l = t.n(a),
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
    y = t(187443),
    j = t(131154),
    O = t(765305),
    I = t(981631),
    w = t(388032),
    k = t(145496);
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
function S(e, n) {
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
function E(e) {
    let { channel: n, onClick: t } = e,
        { canManageAllEvents: r } = (0, b.XJ)(n),
        a = (0, c.e7)([p.Z], () => !n.isGuildVocal() || p.Z.can(I.Plq.CONNECT, n), [n]),
        _ = i.useMemo(() => (0, d.Z)(n), [n]),
        f = (0, u.KS)(n);
    return (0, o.jsx)(s.ua7, {
        text: w.intl.string(w.t.nHjY9P),
        shouldShow: !a && null != t,
        children: (e) =>
            (0, o.jsxs)(
                s.P3F,
                S(P({}, e), {
                    className: l()(k.inline, k.channelContainer, {
                        [k.channelContainerEnabled]: a && null != t,
                        [k.channelContainerDisabled]: !a && null != t,
                    }),
                    onClick: t,
                    children: [
                        (0, o.jsx)(s.ua7, {
                            text: w.intl.string(w.t["48WXaW"]),
                            shouldShow: r && _ && a && null != t,
                            children: (e) =>
                                null != f
                                    ? (0, o.jsx)(
                                          f,
                                          S(P({}, e), {
                                              color: "currentColor",
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              className: k.icon,
                                          }),
                                      )
                                    : null,
                        }),
                        (0, o.jsx)(s.Text, {
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
function Z(e) {
    let { guild: n, channel: t, onJoinClick: r, handleLocationClick: i, location: a, isExternal: c, isHub: d } = e;
    return d
        ? null == n
            ? (0, o.jsx)("div", {})
            : (0, o.jsxs)("div", {
                  className: k.inline,
                  children: [
                      (0, o.jsx)(_.Z, {
                          className: k.guildIcon,
                          size: _.Z.Sizes.MINI,
                          active: !0,
                          guild: n,
                      }),
                      (0, o.jsx)(s.Text, {
                          variant: "text-sm/normal",
                          color: "header-secondary",
                          children: null == n ? void 0 : n.name,
                      }),
                  ],
              })
        : null != t
          ? (0, o.jsx)(E, {
                channel: t,
                onClick: r,
            })
          : (0, o.jsxs)(s.P3F, {
                className: k.inline,
                onClick: i,
                children: [
                    (0, o.jsx)(s._tJ, {
                        size: "custom",
                        color: "currentColor",
                        height: 20,
                        width: 20,
                        className: l()(k.channelContainer, k.icon),
                    }),
                    (0, o.jsx)(s.Text, {
                        className: c ? k.externalLocation : k.channelLocation,
                        variant: "text-sm/normal",
                        children: (0, f.m)(a, !0),
                    }),
                ],
            });
}
function U(e) {
    var { isHub: n } = e,
        t = (function (e, n) {
            if (null == e) return {};
            var t,
                r,
                o = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        r,
                        o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
                    return o;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    (t = i[r]),
                        !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
            }
            return o;
        })(e, ["isHub"]);
    return n ? (0, o.jsx)(T, P({}, t)) : (0, o.jsx)(R, P({}, t));
}
function R(e) {
    let {
            channel: n,
            entityType: t,
            isJoined: r,
            isActive: i,
            isUserLurking: a,
            rsvped: l,
            canInvite: c,
            onContextMenu: d,
            onJoinClick: u,
            onRsvpClick: _,
            onStartClick: b,
            onInviteClick: p,
            onEndClick: f,
            onJoinGuildClick: m,
        } = e,
        v = (0, h.Q)(n, t),
        x = (0, g.Zs)({
            entityType: t,
            isJoined: r,
            isActive: i,
            isUserLurking: a,
            rsvped: l,
            canInvite: c,
            isChannelPublic: v,
            onJoinClick: u,
            onRsvpClick: _,
            onStartClick: b,
            onInviteClick: p,
            onEndClick: f,
            onJoinGuildClick: m,
        });
    return (0, o.jsxs)(s.hE2, {
        fullWidth: !1,
        size: "sm",
        children: [
            null != d ? (0, o.jsx)(g.b5, { onClick: d }) : null,
            null == x ? void 0 : x.map((e, n) => (0, o.jsx)(s.zxk, P({}, e), n)),
        ],
    });
}
function T(e) {
    let {
            channel: n,
            entityType: t,
            guild: r,
            isActive: i,
            isUserLurking: a,
            isMember: l,
            rsvped: c,
            canInvite: d,
            onRsvpClick: u,
            onJoinGuildClick: _,
            onGoToGuildClick: b,
            onInviteClick: p,
        } = e,
        f = (0, h.Q)(n, t),
        m = (0, y.u)({
            isActive: i,
            isUserLurking: a,
            isMember: l,
            rsvped: c,
            canInvite: d,
            isChannelPublic: f,
            guildName: null == r ? void 0 : r.name,
            onRsvpClick: u,
            onJoinGuildClick: _,
            onGoToGuildClick: b,
            onInviteClick: p,
        });
    return (0, o.jsx)(s.hE2, {
        fullWidth: !1,
        size: "sm",
        children: null == m ? void 0 : m.map((e, n) => (0, o.jsx)(s.zxk, P({}, e), n)),
    });
}
function D(e) {
    let {
            className: n,
            guild: t,
            channel: r,
            creator: i,
            name: a,
            entityType: c,
            description: d,
            imageLocation: u = 0,
            imageSource: _,
            isActive: b,
            isUserLurking: p,
            isJoined: f = !1,
            isMember: h = !1,
            isHub: g = !1,
            speakers: y,
            speakerCount: I,
            rsvped: w,
            canInvite: P,
            location: S,
            truncate: N,
            onContextMenu: E,
            onJoinClick: R,
            onJoinGuildClick: T,
            onGoToGuildClick: D,
            onRsvpClick: B,
            onStartClick: A,
            onInviteClick: L,
            onEndClick: M,
            onClick: z,
            isNew: G,
            guildEvent: H,
            eventPreview: F,
            recurrenceRule: W,
            recurrenceId: J,
        } = e,
        q = c === O.WX.EXTERNAL,
        X = q ? (e) => e.stopPropagation() : void 0,
        V = [];
    if (null != W && null != event) {
        let e = (0, m.Ho)(W);
        V = (0, m.PJ)(4, e, new Date(H.scheduled_start_time));
    }
    let Q = V.length > 0;
    return (0, o.jsxs)(s.kL8, {
        "aria-label": a,
        onClick: () => (null == z ? void 0 : z(J)),
        onContextMenu: E,
        className: l()(
            k.card,
            {
                [k.joined]: f,
                [k.lurking]: p,
            },
            n,
        ),
        children: [
            (0, o.jsxs)("div", {
                className: l()(k.padding, { [k.isRecurring]: Q }),
                children: [
                    0 === u && (0, o.jsx)(v.Z, { source: _ }),
                    (0, o.jsx)(x.ZP, {
                        creator: i,
                        name: a,
                        description: d,
                        imageSource: 1 === u ? _ : null,
                        truncate: N,
                        guildId: null == t ? void 0 : t.id,
                        isHub: g,
                        isNew: G,
                        guildEvent: H,
                        eventPreview: F,
                        recurrenceId: J,
                    }),
                    b &&
                        null != t &&
                        null != y &&
                        I > 0 &&
                        (0, o.jsx)(j.Z, {
                            guild: t,
                            speakers: y,
                            speakerCount: I,
                            className: k.spacing,
                        }),
                    (0, o.jsx)("hr", { className: k.divider }),
                    (0, o.jsxs)("div", {
                        className: l()(k.inline, k.footer),
                        children: [
                            (0, o.jsx)(Z, {
                                guild: t,
                                channel: r,
                                onJoinClick: R,
                                handleLocationClick: X,
                                location: S,
                                isExternal: q,
                                isHub: g,
                            }),
                            (0, o.jsx)("div", {
                                children: (0, o.jsx)(U, {
                                    isHub: g,
                                    channel: r,
                                    entityType: c,
                                    guild: t,
                                    isActive: b,
                                    isJoined: f,
                                    isUserLurking: p,
                                    isMember: h,
                                    rsvped: w,
                                    canInvite: P,
                                    onContextMenu: E,
                                    onRsvpClick: B,
                                    onJoinGuildClick: T,
                                    onGoToGuildClick: D,
                                    onInviteClick: L,
                                    onJoinClick: R,
                                    onStartClick: A,
                                    onEndClick: M,
                                }),
                            }),
                        ],
                    }),
                    Q && (0, o.jsx)("hr", { className: k.divider }),
                ],
            }),
            Q &&
                (0, o.jsx)(C.Z, {
                    guildId: null == t ? void 0 : t.id,
                    recurrenceRule: W,
                    guildEventId: H.id,
                    onRecurrenceClick: z,
                }),
        ],
    });
}
