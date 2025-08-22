t.d(n, {
    Q: () => N,
    Z: () => Z,
}),
    t(953529);
var r,
    i = t(951288),
    a = t(647438),
    l = t(120356),
    o = t.n(l),
    c = t(442837),
    s = t(481060),
    d = t(447003),
    u = t(471445),
    _ = t(357156),
    p = t(496675),
    b = t(725436),
    h = t(274311),
    m = t(954313),
    g = t(285784),
    f = t(95291),
    v = t(742593),
    x = t(810561),
    C = t(131154),
    j = t(765305),
    I = t(981631),
    k = t(388032),
    w = t(187881);
function y(e) {
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
var N = (((r = {})[(r.BANNER = 0)] = "BANNER"), (r[(r.THUMBNAIL = 1)] = "THUMBNAIL"), r);
function S(e) {
    let { channel: n, onClick: t } = e,
        { canManageAllEvents: r } = (0, _.XJ)(n),
        l = (0, c.e7)([p.Z], () => !n.isGuildVocal() || p.Z.can(I.Plq.CONNECT, n), [n]),
        b = a.useMemo(() => (0, d.Z)(n), [n]),
        h = (0, u.KS)(n);
    return (0, i.jsx)(s.ua7, {
        text: k.intl.string(k.t.nHjY9P),
        shouldShow: !l && null != t,
        children: (e) =>
            (0, i.jsxs)(
                s.P3F,
                P(y({}, e), {
                    className: o()(w.inline, w.channelContainer, {
                        [w.channelContainerEnabled]: l && null != t,
                        [w.channelContainerDisabled]: !l && null != t,
                    }),
                    onClick: t,
                    children: [
                        (0, i.jsx)(s.ua7, {
                            text: k.intl.string(k.t["48WXaW"]),
                            shouldShow: r && b && l && null != t,
                            children: (e) =>
                                null != h
                                    ? (0, i.jsx)(
                                          h,
                                          P(y({}, e), {
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
function O(e) {
    let { channel: n, onJoinClick: t, handleLocationClick: r, location: a, isExternal: l } = e;
    return null != n
        ? (0, i.jsx)(S, {
              channel: n,
              onClick: t,
          })
        : (0, i.jsxs)(s.P3F, {
              className: w.inline,
              onClick: r,
              children: [
                  (0, i.jsx)(s._tJ, {
                      size: "custom",
                      color: "currentColor",
                      height: 20,
                      width: 20,
                      className: o()(w.channelContainer, w.icon),
                  }),
                  (0, i.jsx)(s.Text, {
                      className: l ? w.externalLocation : w.channelLocation,
                      variant: "text-sm/normal",
                      children: (0, b.m)(a, !0),
                  }),
              ],
          });
}
function E(e) {
    let {
            channel: n,
            entityType: t,
            isJoined: r,
            isActive: a,
            isUserLurking: l,
            rsvped: o,
            canInvite: c,
            onContextMenu: d,
            onJoinClick: u,
            onRsvpClick: _,
            onStartClick: p,
            onInviteClick: b,
            onEndClick: m,
            onJoinGuildClick: f,
        } = e,
        v = (0, h.Q)(n, t),
        x = (0, g.Zs)({
            entityType: t,
            isJoined: r,
            isActive: a,
            isUserLurking: l,
            rsvped: o,
            canInvite: c,
            isChannelPublic: v,
            onJoinClick: u,
            onRsvpClick: _,
            onStartClick: p,
            onInviteClick: b,
            onEndClick: m,
            onJoinGuildClick: f,
        });
    return (0, i.jsxs)(s.hE2, {
        fullWidth: !1,
        size: "sm",
        children: [
            null != d ? (0, i.jsx)(g.b5, { onClick: d }) : null,
            null == x ? void 0 : x.map((e, n) => (0, i.jsx)(s.zxk, y({}, e), n)),
        ],
    });
}
function Z(e) {
    let {
            className: n,
            guild: t,
            channel: r,
            creator: a,
            name: l,
            entityType: c,
            description: d,
            imageLocation: u = 0,
            imageSource: _,
            isActive: p,
            isUserLurking: b,
            isJoined: h = !1,
            isMember: g = !1,
            speakers: I,
            speakerCount: k,
            rsvped: y,
            canInvite: P,
            location: N,
            truncate: S,
            onContextMenu: Z,
            onJoinClick: T,
            onJoinGuildClick: D,
            onRsvpClick: U,
            onStartClick: B,
            onInviteClick: R,
            onEndClick: L,
            onClick: A,
            isNew: H,
            guildEvent: z,
            eventPreview: W,
            recurrenceRule: G,
            recurrenceId: M,
        } = e,
        F = c === j.WX.EXTERNAL,
        X = F ? (e) => e.stopPropagation() : void 0,
        J = [];
    if (null != G && null != event) {
        let e = (0, m.Ho)(G);
        J = (0, m.PJ)(4, e, new Date(z.scheduled_start_time));
    }
    let q = J.length > 0;
    return (0, i.jsxs)(s.kL8, {
        "aria-label": l,
        onClick: () => (null == A ? void 0 : A(M)),
        onContextMenu: Z,
        className: o()(
            w.card,
            {
                [w.joined]: h,
                [w.lurking]: b,
            },
            n,
        ),
        children: [
            (0, i.jsxs)("div", {
                className: o()(w.padding, { [w.isRecurring]: q }),
                children: [
                    0 === u && (0, i.jsx)(f.Z, { source: _ }),
                    (0, i.jsx)(v.ZP, {
                        creator: a,
                        name: l,
                        description: d,
                        imageSource: 1 === u ? _ : null,
                        truncate: S,
                        guildId: null == t ? void 0 : t.id,
                        isNew: H,
                        guildEvent: z,
                        eventPreview: W,
                        recurrenceId: M,
                    }),
                    p &&
                        null != t &&
                        null != I &&
                        k > 0 &&
                        (0, i.jsx)(C.Z, {
                            guild: t,
                            speakers: I,
                            speakerCount: k,
                            className: w.spacing,
                        }),
                    (0, i.jsx)("hr", { className: w.divider }),
                    (0, i.jsxs)("div", {
                        className: o()(w.inline, w.footer),
                        children: [
                            (0, i.jsx)(O, {
                                channel: r,
                                onJoinClick: T,
                                handleLocationClick: X,
                                location: N,
                                isExternal: F,
                            }),
                            (0, i.jsx)("div", {
                                children: (0, i.jsx)(E, {
                                    channel: r,
                                    entityType: c,
                                    isActive: p,
                                    isJoined: h,
                                    isUserLurking: b,
                                    isMember: g,
                                    rsvped: y,
                                    canInvite: P,
                                    onContextMenu: Z,
                                    onRsvpClick: U,
                                    onJoinGuildClick: D,
                                    onInviteClick: R,
                                    onJoinClick: T,
                                    onStartClick: B,
                                    onEndClick: L,
                                }),
                            }),
                        ],
                    }),
                    q && (0, i.jsx)("hr", { className: w.divider }),
                ],
            }),
            q &&
                (0, i.jsx)(x.Z, {
                    guildId: null == t ? void 0 : t.id,
                    recurrenceRule: G,
                    guildEventId: z.id,
                    onRecurrenceClick: A,
                }),
        ],
    });
}
