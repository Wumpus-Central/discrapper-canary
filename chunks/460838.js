t.d(n, {
    Q: () => O,
    Z: () => k,
}),
    t(953529);
var i,
    a = t(951288),
    r = t(647438),
    l = t(120356),
    o = t.n(l),
    d = t(442837),
    _ = t(481060),
    c = t(447003),
    s = t(471445),
    p = t(565138),
    u = t(357156),
    m = t(496675),
    g = t(725436),
    I = t(274311),
    b = t(954313),
    C = t(285784),
    f = t(95291),
    h = t(742593),
    U = t(810561),
    v = t(187443),
    T = t(131154),
    E = t(765305),
    L = t(981631),
    x = t(388032),
    y = t(187881);
function D(e) {
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
var O = (((i = {})[(i.BANNER = 0)] = "BANNER"), (i[(i.THUMBNAIL = 1)] = "THUMBNAIL"), i);
function S(e) {
    let { channel: n, onClick: t } = e,
        { canManageAllEvents: i } = (0, u.XJ)(n),
        l = (0, d.e7)([m.Z], () => !n.isGuildVocal() || m.Z.can(L.Plq.CONNECT, n), [n]),
        p = r.useMemo(() => (0, c.Z)(n), [n]),
        g = (0, s.KS)(n);
    return (0, a.jsx)(_.ua7, {
        text: x.intl.string(x.t.nHjY9P),
        shouldShow: !l && null != t,
        children: (e) =>
            (0, a.jsxs)(
                _.P3F,
                G(D({}, e), {
                    className: o()(y.inline, y.channelContainer, {
                        [y.channelContainerEnabled]: l && null != t,
                        [y.channelContainerDisabled]: !l && null != t,
                    }),
                    onClick: t,
                    children: [
                        (0, a.jsx)(_.ua7, {
                            text: x.intl.string(x.t["48WXaW"]),
                            shouldShow: i && p && l && null != t,
                            children: (e) =>
                                null != g
                                    ? (0, a.jsx)(
                                          g,
                                          G(D({}, e), {
                                              color: "currentColor",
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              className: y.icon,
                                          }),
                                      )
                                    : null,
                        }),
                        (0, a.jsx)(_.Text, {
                            variant: "text-sm/normal",
                            color: "none",
                            className: y.channelLocation,
                            children: n.name,
                        }),
                    ],
                }),
            ),
    });
}
function z(e) {
    let { guild: n, channel: t, onJoinClick: i, handleLocationClick: r, location: l, isExternal: d, isHub: c } = e;
    return c
        ? null == n
            ? (0, a.jsx)("div", {})
            : (0, a.jsxs)("div", {
                  className: y.inline,
                  children: [
                      (0, a.jsx)(p.Z, {
                          className: y.guildIcon,
                          size: p.Z.Sizes.MINI,
                          active: !0,
                          guild: n,
                      }),
                      (0, a.jsx)(_.Text, {
                          variant: "text-sm/normal",
                          color: "header-secondary",
                          children: null == n ? void 0 : n.name,
                      }),
                  ],
              })
        : null != t
          ? (0, a.jsx)(S, {
                channel: t,
                onClick: i,
            })
          : (0, a.jsxs)(_.P3F, {
                className: y.inline,
                onClick: r,
                children: [
                    (0, a.jsx)(_._tJ, {
                        size: "custom",
                        color: "currentColor",
                        height: 20,
                        width: 20,
                        className: o()(y.channelContainer, y.icon),
                    }),
                    (0, a.jsx)(_.Text, {
                        className: d ? y.externalLocation : y.channelLocation,
                        variant: "text-sm/normal",
                        children: (0, g.m)(l, !0),
                    }),
                ],
            });
}
function N(e) {
    var { isHub: n } = e,
        t = (function (e, n) {
            if (null == e) return {};
            var t,
                i,
                a = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        i,
                        a = {},
                        r = Object.keys(e);
                    for (i = 0; i < r.length; i++) (t = r[i]), n.indexOf(t) >= 0 || (a[t] = e[t]);
                    return a;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (i = 0; i < r.length; i++)
                    (t = r[i]),
                        !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t]);
            }
            return a;
        })(e, ["isHub"]);
    return n ? (0, a.jsx)(j, D({}, t)) : (0, a.jsx)(A, D({}, t));
}
function A(e) {
    let {
            channel: n,
            entityType: t,
            isJoined: i,
            isActive: r,
            isUserLurking: l,
            rsvped: o,
            canInvite: d,
            onContextMenu: c,
            onJoinClick: s,
            onRsvpClick: p,
            onStartClick: u,
            onInviteClick: m,
            onEndClick: g,
            onJoinGuildClick: b,
        } = e,
        f = (0, I.Q)(n, t),
        h = (0, C.Zs)({
            entityType: t,
            isJoined: i,
            isActive: r,
            isUserLurking: l,
            rsvped: o,
            canInvite: d,
            isChannelPublic: f,
            onJoinClick: s,
            onRsvpClick: p,
            onStartClick: u,
            onInviteClick: m,
            onEndClick: g,
            onJoinGuildClick: b,
        });
    return (0, a.jsxs)(_.hE2, {
        fullWidth: !1,
        size: "sm",
        children: [
            null != c ? (0, a.jsx)(C.b5, { onClick: c }) : null,
            null == h ? void 0 : h.map((e, n) => (0, a.jsx)(_.zxk, D({}, e), n)),
        ],
    });
}
function j(e) {
    let {
            channel: n,
            entityType: t,
            guild: i,
            isActive: r,
            isUserLurking: l,
            isMember: o,
            rsvped: d,
            canInvite: c,
            onRsvpClick: s,
            onJoinGuildClick: p,
            onGoToGuildClick: u,
            onInviteClick: m,
        } = e,
        g = (0, I.Q)(n, t),
        b = (0, v.u)({
            isActive: r,
            isUserLurking: l,
            isMember: o,
            rsvped: d,
            canInvite: c,
            isChannelPublic: g,
            guildName: null == i ? void 0 : i.name,
            onRsvpClick: s,
            onJoinGuildClick: p,
            onGoToGuildClick: u,
            onInviteClick: m,
        });
    return (0, a.jsx)(_.hE2, {
        fullWidth: !1,
        size: "sm",
        children: null == b ? void 0 : b.map((e, n) => (0, a.jsx)(_.zxk, D({}, e), n)),
    });
}
function k(e) {
    let {
            className: n,
            guild: t,
            channel: i,
            creator: r,
            name: l,
            entityType: d,
            description: c,
            imageLocation: s = 0,
            imageSource: p,
            isActive: u,
            isUserLurking: m,
            isJoined: g = !1,
            isMember: I = !1,
            isHub: C = !1,
            speakers: v,
            speakerCount: L,
            rsvped: x,
            canInvite: D,
            location: G,
            truncate: O,
            onContextMenu: S,
            onJoinClick: A,
            onJoinGuildClick: j,
            onGoToGuildClick: k,
            onRsvpClick: H,
            onStartClick: B,
            onInviteClick: R,
            onEndClick: w,
            onClick: P,
            isNew: M,
            guildEvent: Z,
            eventPreview: X,
            recurrenceRule: V,
            recurrenceId: Y,
        } = e,
        q = d === E.WX.EXTERNAL,
        W = q ? (e) => e.stopPropagation() : void 0,
        F = [];
    if (null != V && null != event) {
        let e = (0, b.Ho)(V);
        F = (0, b.PJ)(4, e, new Date(Z.scheduled_start_time));
    }
    let J = F.length > 0;
    return (0, a.jsxs)(_.kL8, {
        "aria-label": l,
        onClick: () => (null == P ? void 0 : P(Y)),
        onContextMenu: S,
        className: o()(
            y.card,
            {
                [y.joined]: g,
                [y.lurking]: m,
            },
            n,
        ),
        children: [
            (0, a.jsxs)("div", {
                className: o()(y.padding, { [y.isRecurring]: J }),
                children: [
                    0 === s && (0, a.jsx)(f.Z, { source: p }),
                    (0, a.jsx)(h.ZP, {
                        creator: r,
                        name: l,
                        description: c,
                        imageSource: 1 === s ? p : null,
                        truncate: O,
                        guildId: null == t ? void 0 : t.id,
                        isHub: C,
                        isNew: M,
                        guildEvent: Z,
                        eventPreview: X,
                        recurrenceId: Y,
                    }),
                    u &&
                        null != t &&
                        null != v &&
                        L > 0 &&
                        (0, a.jsx)(T.Z, {
                            guild: t,
                            speakers: v,
                            speakerCount: L,
                            className: y.spacing,
                        }),
                    (0, a.jsx)("hr", { className: y.divider }),
                    (0, a.jsxs)("div", {
                        className: o()(y.inline, y.footer),
                        children: [
                            (0, a.jsx)(z, {
                                guild: t,
                                channel: i,
                                onJoinClick: A,
                                handleLocationClick: W,
                                location: G,
                                isExternal: q,
                                isHub: C,
                            }),
                            (0, a.jsx)("div", {
                                children: (0, a.jsx)(N, {
                                    isHub: C,
                                    channel: i,
                                    entityType: d,
                                    guild: t,
                                    isActive: u,
                                    isJoined: g,
                                    isUserLurking: m,
                                    isMember: I,
                                    rsvped: x,
                                    canInvite: D,
                                    onContextMenu: S,
                                    onRsvpClick: H,
                                    onJoinGuildClick: j,
                                    onGoToGuildClick: k,
                                    onInviteClick: R,
                                    onJoinClick: A,
                                    onStartClick: B,
                                    onEndClick: w,
                                }),
                            }),
                        ],
                    }),
                    J && (0, a.jsx)("hr", { className: y.divider }),
                ],
            }),
            J &&
                (0, a.jsx)(U.Z, {
                    guildId: null == t ? void 0 : t.id,
                    recurrenceRule: V,
                    guildEventId: Z.id,
                    onRecurrenceClick: P,
                }),
        ],
    });
}
