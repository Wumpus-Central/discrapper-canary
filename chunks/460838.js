t.d(n, {
    Q: () => Z,
    Z: () => B,
}),
    t(953529);
var a,
    i = t(951288),
    r = t(647438),
    o = t(120356),
    l = t.n(o),
    c = t(442837),
    d = t(481060),
    _ = t(447003),
    s = t(471445),
    u = t(565138),
    b = t(357156),
    p = t(496675),
    f = t(725436),
    h = t(274311),
    m = t(954313),
    g = t(285784),
    v = t(95291),
    x = t(742593),
    C = t(810561),
    I = t(187443),
    j = t(131154),
    k = t(765305),
    w = t(981631),
    y = t(388032),
    N = t(187881);
function P(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            a = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            a.forEach(function (n) {
                var a;
                (a = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = a);
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
                      var a = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, a);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
var Z = (((a = {})[(a.BANNER = 0)] = "BANNER"), (a[(a.THUMBNAIL = 1)] = "THUMBNAIL"), a);
function O(e) {
    let { channel: n, onClick: t } = e,
        { canManageAllEvents: a } = (0, b.XJ)(n),
        o = (0, c.e7)([p.Z], () => !n.isGuildVocal() || p.Z.can(w.Plq.CONNECT, n), [n]),
        u = r.useMemo(() => (0, _.Z)(n), [n]),
        f = (0, s.KS)(n);
    return (0, i.jsx)(d.ua7, {
        text: y.intl.string(y.t.nHjY9P),
        shouldShow: !o && null != t,
        children: (e) =>
            (0, i.jsxs)(
                d.P3F,
                S(P({}, e), {
                    className: l()(N.inline, N.channelContainer, {
                        [N.channelContainerEnabled]: o && null != t,
                        [N.channelContainerDisabled]: !o && null != t,
                    }),
                    onClick: t,
                    children: [
                        (0, i.jsx)(d.ua7, {
                            text: y.intl.string(y.t["48WXaW"]),
                            shouldShow: a && u && o && null != t,
                            children: (e) =>
                                null != f
                                    ? (0, i.jsx)(
                                          f,
                                          S(P({}, e), {
                                              color: "currentColor",
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              className: N.icon,
                                          }),
                                      )
                                    : null,
                        }),
                        (0, i.jsx)(d.Text, {
                            variant: "text-sm/normal",
                            color: "none",
                            className: N.channelLocation,
                            children: n.name,
                        }),
                    ],
                }),
            ),
    });
}
function T(e) {
    let { guild: n, channel: t, onJoinClick: a, handleLocationClick: r, location: o, isExternal: c, isHub: _ } = e;
    return _
        ? null == n
            ? (0, i.jsx)("div", {})
            : (0, i.jsxs)("div", {
                  className: N.inline,
                  children: [
                      (0, i.jsx)(u.Z, {
                          className: N.guildIcon,
                          size: u.Z.Sizes.MINI,
                          active: !0,
                          guild: n,
                      }),
                      (0, i.jsx)(d.Text, {
                          variant: "text-sm/normal",
                          color: "header-secondary",
                          children: null == n ? void 0 : n.name,
                      }),
                  ],
              })
        : null != t
          ? (0, i.jsx)(O, {
                channel: t,
                onClick: a,
            })
          : (0, i.jsxs)(d.P3F, {
                className: N.inline,
                onClick: r,
                children: [
                    (0, i.jsx)(d._tJ, {
                        size: "custom",
                        color: "currentColor",
                        height: 20,
                        width: 20,
                        className: l()(N.channelContainer, N.icon),
                    }),
                    (0, i.jsx)(d.Text, {
                        className: c ? N.externalLocation : N.channelLocation,
                        variant: "text-sm/normal",
                        children: (0, f.m)(o, !0),
                    }),
                ],
            });
}
function E(e) {
    var { isHub: n } = e,
        t = (function (e, n) {
            if (null == e) return {};
            var t,
                a,
                i = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        a,
                        i = {},
                        r = Object.keys(e);
                    for (a = 0; a < r.length; a++) (t = r[a]), n.indexOf(t) >= 0 || (i[t] = e[t]);
                    return i;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (a = 0; a < r.length; a++)
                    (t = r[a]),
                        !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]);
            }
            return i;
        })(e, ["isHub"]);
    return n ? (0, i.jsx)(R, P({}, t)) : (0, i.jsx)(U, P({}, t));
}
function U(e) {
    let {
            channel: n,
            entityType: t,
            isJoined: a,
            isActive: r,
            isUserLurking: o,
            rsvped: l,
            canInvite: c,
            onContextMenu: _,
            onJoinClick: s,
            onRsvpClick: u,
            onStartClick: b,
            onInviteClick: p,
            onEndClick: f,
            onJoinGuildClick: m,
        } = e,
        v = (0, h.Q)(n, t),
        x = (0, g.Zs)({
            entityType: t,
            isJoined: a,
            isActive: r,
            isUserLurking: o,
            rsvped: l,
            canInvite: c,
            isChannelPublic: v,
            onJoinClick: s,
            onRsvpClick: u,
            onStartClick: b,
            onInviteClick: p,
            onEndClick: f,
            onJoinGuildClick: m,
        });
    return (0, i.jsxs)(d.hE2, {
        fullWidth: !1,
        size: "sm",
        children: [
            null != _ ? (0, i.jsx)(g.b5, { onClick: _ }) : null,
            null == x ? void 0 : x.map((e, n) => (0, i.jsx)(d.zxk, P({}, e), n)),
        ],
    });
}
function R(e) {
    let {
            channel: n,
            entityType: t,
            guild: a,
            isActive: r,
            isUserLurking: o,
            isMember: l,
            rsvped: c,
            canInvite: _,
            onRsvpClick: s,
            onJoinGuildClick: u,
            onGoToGuildClick: b,
            onInviteClick: p,
        } = e,
        f = (0, h.Q)(n, t),
        m = (0, I.u)({
            isActive: r,
            isUserLurking: o,
            isMember: l,
            rsvped: c,
            canInvite: _,
            isChannelPublic: f,
            guildName: null == a ? void 0 : a.name,
            onRsvpClick: s,
            onJoinGuildClick: u,
            onGoToGuildClick: b,
            onInviteClick: p,
        });
    return (0, i.jsx)(d.hE2, {
        fullWidth: !1,
        size: "sm",
        children: null == m ? void 0 : m.map((e, n) => (0, i.jsx)(d.zxk, P({}, e), n)),
    });
}
function B(e) {
    let {
            className: n,
            guild: t,
            channel: a,
            creator: r,
            name: o,
            entityType: c,
            description: _,
            imageLocation: s = 0,
            imageSource: u,
            isActive: b,
            isUserLurking: p,
            isJoined: f = !1,
            isMember: h = !1,
            isHub: g = !1,
            speakers: I,
            speakerCount: w,
            rsvped: y,
            canInvite: P,
            location: S,
            truncate: Z,
            onContextMenu: O,
            onJoinClick: U,
            onJoinGuildClick: R,
            onGoToGuildClick: B,
            onRsvpClick: D,
            onStartClick: L,
            onInviteClick: H,
            onEndClick: A,
            onClick: G,
            isNew: W,
            guildEvent: M,
            eventPreview: z,
            recurrenceRule: F,
            recurrenceId: J,
        } = e,
        q = c === k.WX.EXTERNAL,
        X = q ? (e) => e.stopPropagation() : void 0,
        Q = [];
    if (null != F && null != event) {
        let e = (0, m.Ho)(F);
        Q = (0, m.PJ)(4, e, new Date(M.scheduled_start_time));
    }
    let V = Q.length > 0;
    return (0, i.jsxs)(d.kL8, {
        "aria-label": o,
        onClick: () => (null == G ? void 0 : G(J)),
        onContextMenu: O,
        className: l()(
            N.card,
            {
                [N.joined]: f,
                [N.lurking]: p,
            },
            n,
        ),
        children: [
            (0, i.jsxs)("div", {
                className: l()(N.padding, { [N.isRecurring]: V }),
                children: [
                    0 === s && (0, i.jsx)(v.Z, { source: u }),
                    (0, i.jsx)(x.ZP, {
                        creator: r,
                        name: o,
                        description: _,
                        imageSource: 1 === s ? u : null,
                        truncate: Z,
                        guildId: null == t ? void 0 : t.id,
                        isHub: g,
                        isNew: W,
                        guildEvent: M,
                        eventPreview: z,
                        recurrenceId: J,
                    }),
                    b &&
                        null != t &&
                        null != I &&
                        w > 0 &&
                        (0, i.jsx)(j.Z, {
                            guild: t,
                            speakers: I,
                            speakerCount: w,
                            className: N.spacing,
                        }),
                    (0, i.jsx)("hr", { className: N.divider }),
                    (0, i.jsxs)("div", {
                        className: l()(N.inline, N.footer),
                        children: [
                            (0, i.jsx)(T, {
                                guild: t,
                                channel: a,
                                onJoinClick: U,
                                handleLocationClick: X,
                                location: S,
                                isExternal: q,
                                isHub: g,
                            }),
                            (0, i.jsx)("div", {
                                children: (0, i.jsx)(E, {
                                    isHub: g,
                                    channel: a,
                                    entityType: c,
                                    guild: t,
                                    isActive: b,
                                    isJoined: f,
                                    isUserLurking: p,
                                    isMember: h,
                                    rsvped: y,
                                    canInvite: P,
                                    onContextMenu: O,
                                    onRsvpClick: D,
                                    onJoinGuildClick: R,
                                    onGoToGuildClick: B,
                                    onInviteClick: H,
                                    onJoinClick: U,
                                    onStartClick: L,
                                    onEndClick: A,
                                }),
                            }),
                        ],
                    }),
                    V && (0, i.jsx)("hr", { className: N.divider }),
                ],
            }),
            V &&
                (0, i.jsx)(C.Z, {
                    guildId: null == t ? void 0 : t.id,
                    recurrenceRule: F,
                    guildEventId: M.id,
                    onRecurrenceClick: G,
                }),
        ],
    });
}
