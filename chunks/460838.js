t.d(n, {
    Q: () => k,
    Z: () => D,
}),
    t(953529);
var r,
    i = t(255367),
    a = t(73800),
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
    w = t(187881);
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
var k = (((r = {})[(r.BANNER = 0)] = "BANNER"), (r[(r.THUMBNAIL = 1)] = "THUMBNAIL"), r);
function N(e) {
    let { channel: n, onClick: t } = e,
        { canManageAllEvents: r } = (0, b.XJ)(n),
        o = (0, c.e7)([p.Z], () => !n.isGuildVocal() || p.Z.can(j.Plq.CONNECT, n), [n]),
        _ = a.useMemo(() => (0, d.Z)(n), [n]),
        f = (0, u.KS)(n);
    return (0, i.jsx)(s.ua7, {
        text: E.intl.string(E.t.nHjY9P),
        shouldShow: !o && null != t,
        children: (e) =>
            (0, i.jsxs)(
                s.P3F,
                S(P({}, e), {
                    className: l()(w.inline, w.channelContainer, {
                        [w.channelContainerEnabled]: o && null != t,
                        [w.channelContainerDisabled]: !o && null != t,
                    }),
                    onClick: t,
                    children: [
                        (0, i.jsx)(s.ua7, {
                            text: E.intl.string(E.t["48WXaW"]),
                            shouldShow: r && _ && o && null != t,
                            children: (e) =>
                                null != f
                                    ? (0, i.jsx)(
                                          f,
                                          S(P({}, e), {
                                              color: "currentColor",
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              className: w.icon,
                                          }),
                                      )
                                    : null,
                        }),
                        (0, i.jsx)(s.Text, {
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
function Z(e) {
    let { guild: n, channel: t, onJoinClick: r, handleLocationClick: a, location: o, isExternal: c, isHub: d } = e;
    return d
        ? null == n
            ? (0, i.jsx)("div", {})
            : (0, i.jsxs)("div", {
                  className: w.inline,
                  children: [
                      (0, i.jsx)(_.Z, {
                          className: w.guildIcon,
                          size: _.Z.Sizes.MINI,
                          active: !0,
                          guild: n,
                      }),
                      (0, i.jsx)(s.Text, {
                          variant: "text-sm/normal",
                          color: "header-secondary",
                          children: null == n ? void 0 : n.name,
                      }),
                  ],
              })
        : null != t
          ? (0, i.jsx)(N, {
                channel: t,
                onClick: r,
            })
          : (0, i.jsxs)(s.P3F, {
                className: w.inline,
                onClick: a,
                children: [
                    (0, i.jsx)(s._tJ, {
                        size: "custom",
                        color: "currentColor",
                        height: 20,
                        width: 20,
                        className: l()(w.channelContainer, w.icon),
                    }),
                    (0, i.jsx)(s.Text, {
                        className: c ? w.externalLocation : w.channelLocation,
                        variant: "text-sm/normal",
                        children: (0, f.m)(o, !0),
                    }),
                ],
            });
}
function T(e) {
    var { isHub: n } = e,
        t = (function (e, n) {
            if (null == e) return {};
            var t,
                r,
                i = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        r,
                        i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (t = a[r]), n.indexOf(t) >= 0 || (i[t] = e[t]);
                    return i;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++)
                    (t = a[r]),
                        !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]);
            }
            return i;
        })(e, ["isHub"]);
    return n ? (0, i.jsx)(U, P({}, t)) : (0, i.jsx)(R, P({}, t));
}
function R(e) {
    let {
            channel: n,
            entityType: t,
            isJoined: r,
            isActive: a,
            isUserLurking: o,
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
            isActive: a,
            isUserLurking: o,
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
    return (0, i.jsxs)(s.hE2, {
        fullWidth: !1,
        size: "sm",
        children: [
            null != d ? (0, i.jsx)(g.b5, { onClick: d }) : null,
            null == x ? void 0 : x.map((e, n) => (0, i.jsx)(s.zxk, P({}, e), n)),
        ],
    });
}
function U(e) {
    let {
            channel: n,
            entityType: t,
            guild: r,
            isActive: a,
            isUserLurking: o,
            isMember: l,
            rsvped: c,
            canInvite: d,
            onRsvpClick: u,
            onJoinGuildClick: _,
            onGoToGuildClick: b,
            onInviteClick: p,
        } = e,
        f = (0, h.Q)(n, t),
        m = (0, O.u)({
            isActive: a,
            isUserLurking: o,
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
    return (0, i.jsx)(s.hE2, {
        fullWidth: !1,
        size: "sm",
        children: null == m ? void 0 : m.map((e, n) => (0, i.jsx)(s.zxk, P({}, e), n)),
    });
}
function D(e) {
    let {
            className: n,
            guild: t,
            channel: r,
            creator: a,
            name: o,
            entityType: c,
            description: d,
            imageLocation: u = 0,
            imageSource: _,
            isActive: b,
            isUserLurking: p,
            isJoined: f = !1,
            isMember: h = !1,
            isHub: g = !1,
            speakers: O,
            speakerCount: j,
            rsvped: E,
            canInvite: P,
            location: S,
            truncate: k,
            onContextMenu: N,
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
            recurrenceId: q,
        } = e,
        J = c === I.WX.EXTERNAL,
        V = J ? (e) => e.stopPropagation() : void 0,
        X = [];
    if (null != W && null != event) {
        let e = (0, m.Ho)(W);
        X = (0, m.PJ)(4, e, new Date(G.scheduled_start_time));
    }
    let Y = X.length > 0;
    return (0, i.jsxs)(s.kL8, {
        "aria-label": o,
        onClick: () => (null == F ? void 0 : F(q)),
        onContextMenu: N,
        className: l()(
            w.card,
            {
                [w.joined]: f,
                [w.lurking]: p,
            },
            n,
        ),
        children: [
            (0, i.jsxs)("div", {
                className: l()(w.padding, { [w.isRecurring]: Y }),
                children: [
                    0 === u && (0, i.jsx)(v.Z, { source: _ }),
                    (0, i.jsx)(x.ZP, {
                        creator: a,
                        name: o,
                        description: d,
                        imageSource: 1 === u ? _ : null,
                        truncate: k,
                        guildId: null == t ? void 0 : t.id,
                        isHub: g,
                        isNew: H,
                        guildEvent: G,
                        eventPreview: z,
                        recurrenceId: q,
                    }),
                    b &&
                        null != t &&
                        null != O &&
                        j > 0 &&
                        (0, i.jsx)(y.Z, {
                            guild: t,
                            speakers: O,
                            speakerCount: j,
                            className: w.spacing,
                        }),
                    (0, i.jsx)("hr", { className: w.divider }),
                    (0, i.jsxs)("div", {
                        className: l()(w.inline, w.footer),
                        children: [
                            (0, i.jsx)(Z, {
                                guild: t,
                                channel: r,
                                onJoinClick: R,
                                handleLocationClick: V,
                                location: S,
                                isExternal: J,
                                isHub: g,
                            }),
                            (0, i.jsx)("div", {
                                children: (0, i.jsx)(T, {
                                    isHub: g,
                                    channel: r,
                                    entityType: c,
                                    guild: t,
                                    isActive: b,
                                    isJoined: f,
                                    isUserLurking: p,
                                    isMember: h,
                                    rsvped: E,
                                    canInvite: P,
                                    onContextMenu: N,
                                    onRsvpClick: A,
                                    onJoinGuildClick: U,
                                    onGoToGuildClick: D,
                                    onInviteClick: B,
                                    onJoinClick: R,
                                    onStartClick: L,
                                    onEndClick: M,
                                }),
                            }),
                        ],
                    }),
                    Y && (0, i.jsx)("hr", { className: w.divider }),
                ],
            }),
            Y &&
                (0, i.jsx)(C.Z, {
                    guildId: null == t ? void 0 : t.id,
                    recurrenceRule: W,
                    guildEventId: G.id,
                    onRecurrenceClick: F,
                }),
        ],
    });
}
