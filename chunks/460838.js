t.d(n, {
    Q: () => E,
    Z: () => D,
}),
    t(953529);
var r,
    i = t(951288),
    l = t(647438),
    c = t(120356),
    a = t.n(c),
    o = t(442837),
    s = t(481060),
    u = t(447003),
    d = t(471445),
    g = t(357156),
    p = t(496675),
    h = t(725436),
    m = t(274311),
    v = t(954313),
    j = t(285784),
    f = t(95291),
    b = t(742593),
    x = t(810561),
    O = t(131154),
    y = t(765305),
    C = t(981631),
    Z = t(388032),
    k = t(187881);
function N(e) {
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
function P(e, n) {
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
var E = (((r = {})[(r.BANNER = 0)] = "BANNER"), (r[(r.THUMBNAIL = 1)] = "THUMBNAIL"), r);
function w(e) {
    let { channel: n, onClick: t } = e,
        { canManageAllEvents: r } = (0, g.XJ)(n),
        c = (0, o.e7)([p.Z], () => !n.isGuildVocal() || p.Z.can(C.Plq.CONNECT, n), [n]),
        h = l.useMemo(() => (0, u.Z)(n), [n]),
        m = (0, d.KS)(n);
    return (0, i.jsx)(s.ua7, {
        text: Z.intl.string(Z.t.nHjY9P),
        shouldShow: !c && null != t,
        children: (e) =>
            (0, i.jsxs)(
                s.P3F,
                P(N({}, e), {
                    className: a()(k.inline, k.channelContainer, {
                        [k.channelContainerEnabled]: c && null != t,
                        [k.channelContainerDisabled]: !c && null != t,
                    }),
                    onClick: t,
                    children: [
                        (0, i.jsx)(s.ua7, {
                            text: Z.intl.string(Z.t["48WXaW"]),
                            shouldShow: r && h && c && null != t,
                            children: (e) =>
                                null != m
                                    ? (0, i.jsx)(
                                          m,
                                          P(N({}, e), {
                                              color: "currentColor",
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              className: k.icon,
                                          }),
                                      )
                                    : null,
                        }),
                        (0, i.jsx)(s.Text, {
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
function I(e) {
    let { channel: n, onJoinClick: t, handleLocationClick: r, location: l, isExternal: c } = e;
    return null != n
        ? (0, i.jsx)(w, {
              channel: n,
              onClick: t,
          })
        : (0, i.jsxs)(s.P3F, {
              className: k.inline,
              onClick: r,
              children: [
                  (0, i.jsx)(s._tJ, {
                      size: "custom",
                      color: "currentColor",
                      height: 20,
                      width: 20,
                      className: a()(k.channelContainer, k.icon),
                  }),
                  (0, i.jsx)(s.Text, {
                      className: c ? k.externalLocation : k.channelLocation,
                      variant: "text-sm/normal",
                      children: (0, h.m)(l, !0),
                  }),
              ],
          });
}
function S(e) {
    let {
            channel: n,
            entityType: t,
            isJoined: r,
            isActive: l,
            isUserLurking: c,
            rsvped: a,
            canInvite: o,
            onContextMenu: u,
            onJoinClick: d,
            onRsvpClick: g,
            onStartClick: p,
            onInviteClick: h,
            onEndClick: v,
            onJoinGuildClick: f,
        } = e,
        b = (0, m.Q)(n, t),
        x = (0, j.Zs)({
            entityType: t,
            isJoined: r,
            isActive: l,
            isUserLurking: c,
            rsvped: a,
            canInvite: o,
            isChannelPublic: b,
            onJoinClick: d,
            onRsvpClick: g,
            onStartClick: p,
            onInviteClick: h,
            onEndClick: v,
            onJoinGuildClick: f,
        });
    return (0, i.jsxs)(s.hE2, {
        fullWidth: !1,
        size: "sm",
        children: [
            null != u ? (0, i.jsx)(j.b5, { onClick: u }) : null,
            null == x ? void 0 : x.map((e, n) => (0, i.jsx)(s.zxk, N({}, e), n)),
        ],
    });
}
function D(e) {
    let {
            className: n,
            guild: t,
            channel: r,
            creator: l,
            name: c,
            entityType: o,
            description: u,
            imageLocation: d = 0,
            imageSource: g,
            isActive: p,
            isUserLurking: h,
            isJoined: m = !1,
            isMember: j = !1,
            speakers: C,
            speakerCount: Z,
            rsvped: N,
            canInvite: P,
            location: E,
            truncate: w,
            onContextMenu: D,
            onJoinClick: T,
            onJoinGuildClick: L,
            onRsvpClick: _,
            onStartClick: G,
            onInviteClick: M,
            onEndClick: R,
            onClick: z,
            isNew: A,
            guildEvent: U,
            eventPreview: J,
            recurrenceRule: B,
            recurrenceId: q,
        } = e,
        K = o === y.WX.EXTERNAL,
        W = K ? (e) => e.stopPropagation() : void 0,
        X = [];
    if (null != B && null != event) {
        let e = (0, v.Ho)(B);
        X = (0, v.PJ)(4, e, new Date(U.scheduled_start_time));
    }
    let F = X.length > 0;
    return (0, i.jsxs)(s.kL8, {
        "aria-label": c,
        onClick: () => (null == z ? void 0 : z(q)),
        onContextMenu: D,
        className: a()(
            k.card,
            {
                [k.joined]: m,
                [k.lurking]: h,
            },
            n,
        ),
        children: [
            (0, i.jsxs)("div", {
                className: a()(k.padding, { [k.isRecurring]: F }),
                children: [
                    0 === d && (0, i.jsx)(f.Z, { source: g }),
                    (0, i.jsx)(b.ZP, {
                        creator: l,
                        name: c,
                        description: u,
                        imageSource: 1 === d ? g : null,
                        truncate: w,
                        guildId: null == t ? void 0 : t.id,
                        isNew: A,
                        guildEvent: U,
                        eventPreview: J,
                        recurrenceId: q,
                    }),
                    p &&
                        null != t &&
                        null != C &&
                        Z > 0 &&
                        (0, i.jsx)(O.Z, {
                            guild: t,
                            speakers: C,
                            speakerCount: Z,
                            className: k.spacing,
                        }),
                    (0, i.jsx)("hr", { className: k.divider }),
                    (0, i.jsxs)("div", {
                        className: a()(k.inline, k.footer),
                        children: [
                            (0, i.jsx)(I, {
                                channel: r,
                                onJoinClick: T,
                                handleLocationClick: W,
                                location: E,
                                isExternal: K,
                            }),
                            (0, i.jsx)("div", {
                                children: (0, i.jsx)(S, {
                                    channel: r,
                                    entityType: o,
                                    isActive: p,
                                    isJoined: m,
                                    isUserLurking: h,
                                    isMember: j,
                                    rsvped: N,
                                    canInvite: P,
                                    onContextMenu: D,
                                    onRsvpClick: _,
                                    onJoinGuildClick: L,
                                    onInviteClick: M,
                                    onJoinClick: T,
                                    onStartClick: G,
                                    onEndClick: R,
                                }),
                            }),
                        ],
                    }),
                    F && (0, i.jsx)("hr", { className: k.divider }),
                ],
            }),
            F &&
                (0, i.jsx)(x.Z, {
                    guildId: null == t ? void 0 : t.id,
                    recurrenceRule: B,
                    guildEventId: U.id,
                    onRecurrenceClick: z,
                }),
        ],
    });
}
