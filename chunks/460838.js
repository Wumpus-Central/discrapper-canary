t.d(n, {
    Q: () => P,
    Z: () => S,
}),
    t(953529);
var a,
    r = t(951288),
    i = t(647438),
    o = t(120356),
    l = t.n(o),
    c = t(442837),
    d = t(481060),
    _ = t(447003),
    s = t(471445),
    u = t(357156),
    b = t(496675),
    p = t(725436),
    h = t(274311),
    f = t(954313),
    m = t(285784),
    g = t(95291),
    v = t(742593),
    x = t(810561),
    C = t(131154),
    I = t(765305),
    w = t(981631),
    j = t(388032),
    k = t(187881);
function N(e) {
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
function y(e, n) {
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
var P = (((a = {})[(a.BANNER = 0)] = "BANNER"), (a[(a.THUMBNAIL = 1)] = "THUMBNAIL"), a);
function Z(e) {
    let { channel: n, onClick: t } = e,
        { canManageAllEvents: a } = (0, u.XJ)(n),
        o = (0, c.e7)([b.Z], () => !n.isGuildVocal() || b.Z.can(w.Plq.CONNECT, n), [n]),
        p = i.useMemo(() => (0, _.Z)(n), [n]),
        h = (0, s.KS)(n);
    return (0, r.jsx)(d.ua7, {
        text: j.intl.string(j.t.nHjY9P),
        shouldShow: !o && null != t,
        children: (e) =>
            (0, r.jsxs)(
                d.P3F,
                y(N({}, e), {
                    className: l()(k.inline, k.channelContainer, {
                        [k.channelContainerEnabled]: o && null != t,
                        [k.channelContainerDisabled]: !o && null != t,
                    }),
                    onClick: t,
                    children: [
                        (0, r.jsx)(d.ua7, {
                            text: j.intl.string(j.t["48WXaW"]),
                            shouldShow: a && p && o && null != t,
                            children: (e) =>
                                null != h
                                    ? (0, r.jsx)(
                                          h,
                                          y(N({}, e), {
                                              color: "currentColor",
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              className: k.icon,
                                          }),
                                      )
                                    : null,
                        }),
                        (0, r.jsx)(d.Text, {
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
function U(e) {
    let { channel: n, onJoinClick: t, handleLocationClick: a, location: i, isExternal: o } = e;
    return null != n
        ? (0, r.jsx)(Z, {
              channel: n,
              onClick: t,
          })
        : (0, r.jsxs)(d.P3F, {
              className: k.inline,
              onClick: a,
              children: [
                  (0, r.jsx)(d._tJ, {
                      size: "custom",
                      color: "currentColor",
                      height: 20,
                      width: 20,
                      className: l()(k.channelContainer, k.icon),
                  }),
                  (0, r.jsx)(d.Text, {
                      className: o ? k.externalLocation : k.channelLocation,
                      variant: "text-sm/normal",
                      children: (0, p.m)(i, !0),
                  }),
              ],
          });
}
function E(e) {
    let {
            channel: n,
            entityType: t,
            isJoined: a,
            isActive: i,
            isUserLurking: o,
            rsvped: l,
            canInvite: c,
            onContextMenu: _,
            onJoinClick: s,
            onRsvpClick: u,
            onStartClick: b,
            onInviteClick: p,
            onEndClick: f,
            onJoinGuildClick: g,
        } = e,
        v = (0, h.Q)(n, t),
        x = (0, m.Zs)({
            entityType: t,
            isJoined: a,
            isActive: i,
            isUserLurking: o,
            rsvped: l,
            canInvite: c,
            isChannelPublic: v,
            onJoinClick: s,
            onRsvpClick: u,
            onStartClick: b,
            onInviteClick: p,
            onEndClick: f,
            onJoinGuildClick: g,
        });
    return (0, r.jsxs)(d.hE2, {
        fullWidth: !1,
        size: "sm",
        children: [
            null != _ ? (0, r.jsx)(m.b5, { onClick: _ }) : null,
            null == x ? void 0 : x.map((e, n) => (0, r.jsx)(d.zxk, N({}, e), n)),
        ],
    });
}
function S(e) {
    let {
            className: n,
            guild: t,
            channel: a,
            creator: i,
            name: o,
            entityType: c,
            description: _,
            imageLocation: s = 0,
            imageSource: u,
            isActive: b,
            isUserLurking: p,
            isJoined: h = !1,
            isMember: m = !1,
            speakers: w,
            speakerCount: j,
            rsvped: N,
            canInvite: y,
            location: P,
            truncate: Z,
            onContextMenu: S,
            onJoinClick: T,
            onJoinGuildClick: R,
            onRsvpClick: O,
            onStartClick: B,
            onInviteClick: D,
            onEndClick: L,
            onClick: A,
            isNew: H,
            guildEvent: W,
            eventPreview: G,
            recurrenceRule: M,
            recurrenceId: F,
        } = e,
        q = c === I.WX.EXTERNAL,
        J = q ? (e) => e.stopPropagation() : void 0,
        z = [];
    if (null != M && null != event) {
        let e = (0, f.Ho)(M);
        z = (0, f.PJ)(4, e, new Date(W.scheduled_start_time));
    }
    let X = z.length > 0;
    return (0, r.jsxs)(d.kL8, {
        "aria-label": o,
        onClick: () => (null == A ? void 0 : A(F)),
        onContextMenu: S,
        className: l()(
            k.card,
            {
                [k.joined]: h,
                [k.lurking]: p,
            },
            n,
        ),
        children: [
            (0, r.jsxs)("div", {
                className: l()(k.padding, { [k.isRecurring]: X }),
                children: [
                    0 === s && (0, r.jsx)(g.Z, { source: u }),
                    (0, r.jsx)(v.ZP, {
                        creator: i,
                        name: o,
                        description: _,
                        imageSource: 1 === s ? u : null,
                        truncate: Z,
                        guildId: null == t ? void 0 : t.id,
                        isNew: H,
                        guildEvent: W,
                        eventPreview: G,
                        recurrenceId: F,
                    }),
                    b &&
                        null != t &&
                        null != w &&
                        j > 0 &&
                        (0, r.jsx)(C.Z, {
                            guild: t,
                            speakers: w,
                            speakerCount: j,
                            className: k.spacing,
                        }),
                    (0, r.jsx)("hr", { className: k.divider }),
                    (0, r.jsxs)("div", {
                        className: l()(k.inline, k.footer),
                        children: [
                            (0, r.jsx)(U, {
                                channel: a,
                                onJoinClick: T,
                                handleLocationClick: J,
                                location: P,
                                isExternal: q,
                            }),
                            (0, r.jsx)("div", {
                                children: (0, r.jsx)(E, {
                                    channel: a,
                                    entityType: c,
                                    isActive: b,
                                    isJoined: h,
                                    isUserLurking: p,
                                    isMember: m,
                                    rsvped: N,
                                    canInvite: y,
                                    onContextMenu: S,
                                    onRsvpClick: O,
                                    onJoinGuildClick: R,
                                    onInviteClick: D,
                                    onJoinClick: T,
                                    onStartClick: B,
                                    onEndClick: L,
                                }),
                            }),
                        ],
                    }),
                    X && (0, r.jsx)("hr", { className: k.divider }),
                ],
            }),
            X &&
                (0, r.jsx)(x.Z, {
                    guildId: null == t ? void 0 : t.id,
                    recurrenceRule: M,
                    guildEventId: W.id,
                    onRecurrenceClick: A,
                }),
        ],
    });
}
