t.d(n, {
    Q: () => S,
    Z: () => O,
}),
    t(953529);
var i,
    a = t(951288),
    r = t(647438),
    l = t(120356),
    o = t.n(l),
    c = t(442837),
    s = t(481060),
    d = t(447003),
    u = t(471445),
    _ = t(357156),
    p = t(496675),
    g = t(725436),
    m = t(274311),
    b = t(954313),
    h = t(285784),
    f = t(95291),
    v = t(742593),
    x = t(810561),
    C = t(131154),
    I = t(765305),
    j = t(981631),
    k = t(388032),
    w = t(187881);
function y(e) {
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
function N(e, n) {
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
var S = (((i = {})[(i.BANNER = 0)] = "BANNER"), (i[(i.THUMBNAIL = 1)] = "THUMBNAIL"), i);
function E(e) {
    let { channel: n, onClick: t } = e,
        { canManageAllEvents: i } = (0, _.XJ)(n),
        l = (0, c.e7)([p.Z], () => !n.isGuildVocal() || p.Z.can(j.Plq.CONNECT, n), [n]),
        g = r.useMemo(() => (0, d.Z)(n), [n]),
        m = (0, u.KS)(n);
    return (0, a.jsx)(s.ua7, {
        "data-migration-pending": !0,
        text: k.intl.string(k.t.nHjY9P),
        shouldShow: !l && null != t,
        children: (e) =>
            (0, a.jsxs)(
                s.P3F,
                N(y({}, e), {
                    className: o()(w.inline, w.channelContainer, {
                        [w.channelContainerEnabled]: l && null != t,
                        [w.channelContainerDisabled]: !l && null != t,
                    }),
                    onClick: t,
                    children: [
                        (0, a.jsx)(s.ua7, {
                            "data-migration-pending": !0,
                            text: k.intl.string(k.t["48WXaW"]),
                            shouldShow: i && g && l && null != t,
                            children: (e) =>
                                null != m
                                    ? (0, a.jsx)(
                                          m,
                                          N(y({}, e), {
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
function P(e) {
    let { channel: n, onJoinClick: t, handleLocationClick: i, location: r, isExternal: l } = e;
    return null != n
        ? (0, a.jsx)(E, {
              channel: n,
              onClick: t,
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
                      className: o()(w.channelContainer, w.icon),
                  }),
                  (0, a.jsx)(s.Text, {
                      className: l ? w.externalLocation : w.channelLocation,
                      variant: "text-sm/normal",
                      children: (0, g.m)(r, !0),
                  }),
              ],
          });
}
function Z(e) {
    let {
            channel: n,
            entityType: t,
            isJoined: i,
            isActive: r,
            isUserLurking: l,
            rsvped: o,
            canInvite: c,
            onContextMenu: d,
            onJoinClick: u,
            onRsvpClick: _,
            onStartClick: p,
            onInviteClick: g,
            onEndClick: b,
            onJoinGuildClick: f,
        } = e,
        v = (0, m.Q)(n, t),
        x = (0, h.Zs)({
            entityType: t,
            isJoined: i,
            isActive: r,
            isUserLurking: l,
            rsvped: o,
            canInvite: c,
            isChannelPublic: v,
            onJoinClick: u,
            onRsvpClick: _,
            onStartClick: p,
            onInviteClick: g,
            onEndClick: b,
            onJoinGuildClick: f,
        });
    return (0, a.jsxs)(s.hE2, {
        fullWidth: !1,
        size: "sm",
        children: [
            null != d ? (0, a.jsx)(h.b5, { onClick: d }) : null,
            null == x ? void 0 : x.map((e, n) => (0, a.jsx)(s.zxk, y({}, e), n)),
        ],
    });
}
function O(e) {
    let {
            className: n,
            guild: t,
            channel: i,
            creator: r,
            name: l,
            entityType: c,
            description: d,
            imageLocation: u = 0,
            imageSource: _,
            isActive: p,
            isUserLurking: g,
            isJoined: m = !1,
            isMember: h = !1,
            speakers: j,
            speakerCount: k,
            rsvped: y,
            canInvite: N,
            location: S,
            truncate: E,
            onContextMenu: O,
            onJoinClick: T,
            onJoinGuildClick: U,
            onRsvpClick: D,
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
        X = c === I.WX.EXTERNAL,
        J = X ? (e) => e.stopPropagation() : void 0,
        V = [];
    if (null != G && null != event) {
        let e = (0, b.Ho)(G);
        V = (0, b.PJ)(4, e, new Date(z.scheduled_start_time));
    }
    let q = V.length > 0;
    return (0, a.jsxs)(s.kL8, {
        "aria-label": l,
        onClick: () => (null == A ? void 0 : A(M)),
        onContextMenu: O,
        className: o()(
            w.card,
            {
                [w.joined]: m,
                [w.lurking]: g,
            },
            n,
        ),
        children: [
            (0, a.jsxs)("div", {
                className: o()(w.padding, { [w.isRecurring]: q }),
                children: [
                    0 === u && (0, a.jsx)(f.Z, { source: _ }),
                    (0, a.jsx)(v.ZP, {
                        creator: r,
                        name: l,
                        description: d,
                        imageSource: 1 === u ? _ : null,
                        truncate: E,
                        guildId: null == t ? void 0 : t.id,
                        isNew: H,
                        guildEvent: z,
                        eventPreview: W,
                        recurrenceId: M,
                    }),
                    p &&
                        null != t &&
                        null != j &&
                        k > 0 &&
                        (0, a.jsx)(C.Z, {
                            guild: t,
                            speakers: j,
                            speakerCount: k,
                            className: w.spacing,
                        }),
                    (0, a.jsx)("hr", { className: w.divider }),
                    (0, a.jsxs)("div", {
                        className: o()(w.inline, w.footer),
                        children: [
                            (0, a.jsx)(P, {
                                channel: i,
                                onJoinClick: T,
                                handleLocationClick: J,
                                location: S,
                                isExternal: X,
                            }),
                            (0, a.jsx)("div", {
                                children: (0, a.jsx)(Z, {
                                    channel: i,
                                    entityType: c,
                                    isActive: p,
                                    isJoined: m,
                                    isUserLurking: g,
                                    isMember: h,
                                    rsvped: y,
                                    canInvite: N,
                                    onContextMenu: O,
                                    onRsvpClick: D,
                                    onJoinGuildClick: U,
                                    onInviteClick: R,
                                    onJoinClick: T,
                                    onStartClick: B,
                                    onEndClick: L,
                                }),
                            }),
                        ],
                    }),
                    q && (0, a.jsx)("hr", { className: w.divider }),
                ],
            }),
            q &&
                (0, a.jsx)(x.Z, {
                    guildId: null == t ? void 0 : t.id,
                    recurrenceRule: G,
                    guildEventId: z.id,
                    onRecurrenceClick: A,
                }),
        ],
    });
}
