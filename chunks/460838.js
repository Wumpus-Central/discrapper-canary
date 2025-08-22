t.d(n, {
    Q: () => Z,
    Z: () => O,
}),
    t(953529);
var i,
    r = t(951288),
    a = t(647438),
    l = t(120356),
    o = t.n(l),
    c = t(442837),
    s = t(481060),
    d = t(447003),
    u = t(471445),
    _ = t(357156),
    b = t(496675),
    p = t(725436),
    h = t(274311),
    f = t(954313),
    g = t(285784),
    m = t(95291),
    v = t(742593),
    x = t(810561),
    C = t(131154),
    j = t(765305),
    I = t(981631),
    y = t(388032),
    w = t(187881);
function k(e) {
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
function P(e, n) {
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
var Z = (((i = {})[(i.BANNER = 0)] = "BANNER"), (i[(i.THUMBNAIL = 1)] = "THUMBNAIL"), i);
function E(e) {
    let { channel: n, onClick: t } = e,
        { canManageAllEvents: i } = (0, _.XJ)(n),
        l = (0, c.e7)([b.Z], () => !n.isGuildVocal() || b.Z.can(I.Plq.CONNECT, n), [n]),
        p = a.useMemo(() => (0, d.Z)(n), [n]),
        h = (0, u.KS)(n);
    return (0, r.jsx)(s.ua7, {
        text: y.intl.string(y.t.nHjY9P),
        shouldShow: !l && null != t,
        children: (e) =>
            (0, r.jsxs)(
                s.P3F,
                P(k({}, e), {
                    className: o()(w.inline, w.channelContainer, {
                        [w.channelContainerEnabled]: l && null != t,
                        [w.channelContainerDisabled]: !l && null != t,
                    }),
                    onClick: t,
                    children: [
                        (0, r.jsx)(s.ua7, {
                            text: y.intl.string(y.t["48WXaW"]),
                            shouldShow: i && p && l && null != t,
                            children: (e) =>
                                null != h
                                    ? (0, r.jsx)(
                                          h,
                                          P(k({}, e), {
                                              color: "currentColor",
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              className: w.icon,
                                          }),
                                      )
                                    : null,
                        }),
                        (0, r.jsx)(s.Text, {
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
function N(e) {
    let { channel: n, onJoinClick: t, handleLocationClick: i, location: a, isExternal: l } = e;
    return null != n
        ? (0, r.jsx)(E, {
              channel: n,
              onClick: t,
          })
        : (0, r.jsxs)(s.P3F, {
              className: w.inline,
              onClick: i,
              children: [
                  (0, r.jsx)(s._tJ, {
                      size: "custom",
                      color: "currentColor",
                      height: 20,
                      width: 20,
                      className: o()(w.channelContainer, w.icon),
                  }),
                  (0, r.jsx)(s.Text, {
                      className: l ? w.externalLocation : w.channelLocation,
                      variant: "text-sm/normal",
                      children: (0, p.m)(a, !0),
                  }),
              ],
          });
}
function S(e) {
    let {
            channel: n,
            entityType: t,
            isJoined: i,
            isActive: a,
            isUserLurking: l,
            rsvped: o,
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
            isJoined: i,
            isActive: a,
            isUserLurking: l,
            rsvped: o,
            canInvite: c,
            isChannelPublic: v,
            onJoinClick: u,
            onRsvpClick: _,
            onStartClick: b,
            onInviteClick: p,
            onEndClick: f,
            onJoinGuildClick: m,
        });
    return (0, r.jsxs)(s.hE2, {
        fullWidth: !1,
        size: "sm",
        children: [
            null != d ? (0, r.jsx)(g.b5, { onClick: d }) : null,
            null == x ? void 0 : x.map((e, n) => (0, r.jsx)(s.zxk, k({}, e), n)),
        ],
    });
}
function O(e) {
    let {
            className: n,
            guild: t,
            channel: i,
            creator: a,
            name: l,
            entityType: c,
            description: d,
            imageLocation: u = 0,
            imageSource: _,
            isActive: b,
            isUserLurking: p,
            isJoined: h = !1,
            isMember: g = !1,
            speakers: I,
            speakerCount: y,
            rsvped: k,
            canInvite: P,
            location: Z,
            truncate: E,
            onContextMenu: O,
            onJoinClick: T,
            onJoinGuildClick: D,
            onRsvpClick: U,
            onStartClick: R,
            onInviteClick: B,
            onEndClick: L,
            onClick: A,
            isNew: H,
            guildEvent: z,
            eventPreview: G,
            recurrenceRule: W,
            recurrenceId: M,
        } = e,
        q = c === j.WX.EXTERNAL,
        F = q ? (e) => e.stopPropagation() : void 0,
        X = [];
    if (null != W && null != event) {
        let e = (0, f.Ho)(W);
        X = (0, f.PJ)(4, e, new Date(z.scheduled_start_time));
    }
    let J = X.length > 0;
    return (0, r.jsxs)(s.kL8, {
        "aria-label": l,
        onClick: () => (null == A ? void 0 : A(M)),
        onContextMenu: O,
        className: o()(
            w.card,
            {
                [w.joined]: h,
                [w.lurking]: p,
            },
            n,
        ),
        children: [
            (0, r.jsxs)("div", {
                className: o()(w.padding, { [w.isRecurring]: J }),
                children: [
                    0 === u && (0, r.jsx)(m.Z, { source: _ }),
                    (0, r.jsx)(v.ZP, {
                        creator: a,
                        name: l,
                        description: d,
                        imageSource: 1 === u ? _ : null,
                        truncate: E,
                        guildId: null == t ? void 0 : t.id,
                        isNew: H,
                        guildEvent: z,
                        eventPreview: G,
                        recurrenceId: M,
                    }),
                    b &&
                        null != t &&
                        null != I &&
                        y > 0 &&
                        (0, r.jsx)(C.Z, {
                            guild: t,
                            speakers: I,
                            speakerCount: y,
                            className: w.spacing,
                        }),
                    (0, r.jsx)("hr", { className: w.divider }),
                    (0, r.jsxs)("div", {
                        className: o()(w.inline, w.footer),
                        children: [
                            (0, r.jsx)(N, {
                                channel: i,
                                onJoinClick: T,
                                handleLocationClick: F,
                                location: Z,
                                isExternal: q,
                            }),
                            (0, r.jsx)("div", {
                                children: (0, r.jsx)(S, {
                                    channel: i,
                                    entityType: c,
                                    isActive: b,
                                    isJoined: h,
                                    isUserLurking: p,
                                    isMember: g,
                                    rsvped: k,
                                    canInvite: P,
                                    onContextMenu: O,
                                    onRsvpClick: U,
                                    onJoinGuildClick: D,
                                    onInviteClick: B,
                                    onJoinClick: T,
                                    onStartClick: R,
                                    onEndClick: L,
                                }),
                            }),
                        ],
                    }),
                    J && (0, r.jsx)("hr", { className: w.divider }),
                ],
            }),
            J &&
                (0, r.jsx)(x.Z, {
                    guildId: null == t ? void 0 : t.id,
                    recurrenceRule: W,
                    guildEventId: z.id,
                    onRecurrenceClick: A,
                }),
        ],
    });
}
