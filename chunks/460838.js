t.d(n, {
    Q: () => Z,
    Z: () => O,
}),
    t(953529);
var i,
    r = t(54381),
    a = t(473749),
    l = t(120356),
    o = t.n(l),
    c = t(442837),
    s = t(481060),
    d = t(447003),
    u = t(471445),
    _ = t(357156),
    p = t(496675),
    f = t(725436),
    m = t(274311),
    v = t(854698),
    g = t(285784),
    h = t(95291),
    b = t(742593),
    x = t(810561),
    C = t(131154),
    j = t(765305),
    k = t(981631),
    I = t(388032),
    N = t(187881);
function w(e) {
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
function y(e, n) {
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
        l = (0, c.e7)([p.Z], () => !n.isGuildVocal() || p.Z.can(k.Plq.CONNECT, n), [n]),
        f = a.useMemo(() => (0, d.Z)(n), [n]),
        m = (0, u.KS)(n);
    return (0, r.jsx)(s.aML, {
        "data-migration-pending": !0,
        text: I.intl.string(I.t.nHjY9C),
        shouldShow: !l && null != t,
        children: (e) =>
            (0, r.jsxs)(
                s.P3F,
                y(w({}, e), {
                    className: o()(N.inline, N.channelContainer, {
                        [N.channelContainerEnabled]: l && null != t,
                        [N.channelContainerDisabled]: !l && null != t,
                    }),
                    onClick: t,
                    children: [
                        (0, r.jsx)(s.aML, {
                            "data-migration-pending": !0,
                            text: I.intl.string(I.t["48WXaW"]),
                            shouldShow: i && f && l && null != t,
                            children: (e) =>
                                null != m
                                    ? (0, r.jsx)(
                                          m,
                                          y(w({}, e), {
                                              color: "currentColor",
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              className: N.icon,
                                          }),
                                      )
                                    : null,
                        }),
                        (0, r.jsx)(s.Text, {
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
function P(e) {
    let { channel: n, onJoinClick: t, handleLocationClick: i, location: a, isExternal: l } = e;
    return null != n
        ? (0, r.jsx)(E, {
              channel: n,
              onClick: t,
          })
        : (0, r.jsxs)(s.P3F, {
              className: N.inline,
              onClick: i,
              children: [
                  (0, r.jsx)(s._tJ, {
                      size: "custom",
                      color: "currentColor",
                      height: 20,
                      width: 20,
                      className: o()(N.channelContainer, N.icon),
                  }),
                  (0, r.jsx)(s.Text, {
                      className: l ? N.externalLocation : N.channelLocation,
                      variant: "text-sm/normal",
                      children: (0, f.m)(a, !0),
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
            onStartClick: p,
            onInviteClick: f,
            onEndClick: v,
            onJoinGuildClick: h,
        } = e,
        b = (0, m.Q)(n, t),
        x = (0, g.Zs)({
            entityType: t,
            isJoined: i,
            isActive: a,
            isUserLurking: l,
            rsvped: o,
            canInvite: c,
            isChannelPublic: b,
            channel: n,
            onJoinClick: u,
            onRsvpClick: _,
            onStartClick: p,
            onInviteClick: f,
            onEndClick: v,
            onJoinGuildClick: h,
        });
    return (0, r.jsxs)(s.ButtonGroup, {
        fullWidth: !1,
        size: "sm",
        children: [
            null != d ? (0, r.jsx)(g.b5, { onClick: d }) : null,
            null == x ? void 0 : x.map((e, n) => (0, r.jsx)(s.Button, w({}, e), n)),
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
            isActive: p,
            isUserLurking: f,
            isJoined: m = !1,
            isMember: g = !1,
            speakers: k,
            speakerCount: I,
            rsvped: w,
            canInvite: y,
            location: Z,
            truncate: E,
            onContextMenu: O,
            onJoinClick: T,
            onJoinGuildClick: U,
            onRsvpClick: D,
            onStartClick: B,
            onInviteClick: R,
            onEndClick: L,
            onClick: A,
            isNew: W,
            guildEvent: z,
            eventPreview: G,
            recurrenceRule: H,
            recurrenceId: M,
        } = e,
        q = c === j.WX.EXTERNAL,
        J = q ? (e) => e.stopPropagation() : void 0,
        X = [];
    if (null != H && null != event) {
        let e = (0, v.Ho)(H);
        X = (0, v.PJ)(4, e, new Date(z.scheduled_start_time));
    }
    let V = X.length > 0;
    return (0, r.jsxs)(s.kL8, {
        "aria-label": l,
        onClick: () => (null == A ? void 0 : A(M)),
        onContextMenu: O,
        className: o()(
            N.card,
            {
                [N.joined]: m,
                [N.lurking]: f,
            },
            n,
        ),
        children: [
            (0, r.jsxs)("div", {
                className: o()(N.padding, { [N.isRecurring]: V }),
                children: [
                    0 === u && (0, r.jsx)(h.Z, { source: _ }),
                    (0, r.jsx)(b.ZP, {
                        creator: a,
                        name: l,
                        description: d,
                        imageSource: 1 === u ? _ : null,
                        truncate: E,
                        guildId: null == t ? void 0 : t.id,
                        isNew: W,
                        guildEvent: z,
                        eventPreview: G,
                        recurrenceId: M,
                    }),
                    p &&
                        null != t &&
                        null != k &&
                        I > 0 &&
                        (0, r.jsx)(C.Z, {
                            guild: t,
                            speakers: k,
                            speakerCount: I,
                            className: N.spacing,
                        }),
                    (0, r.jsx)("hr", { className: N.divider }),
                    (0, r.jsxs)("div", {
                        className: o()(N.inline, N.footer),
                        children: [
                            (0, r.jsx)(P, {
                                channel: i,
                                onJoinClick: T,
                                handleLocationClick: J,
                                location: Z,
                                isExternal: q,
                            }),
                            (0, r.jsx)("div", {
                                className: N.eventActions,
                                children: (0, r.jsx)(S, {
                                    channel: i,
                                    entityType: c,
                                    isActive: p,
                                    isJoined: m,
                                    isUserLurking: f,
                                    isMember: g,
                                    rsvped: w,
                                    canInvite: y,
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
                    V && (0, r.jsx)("hr", { className: N.divider }),
                ],
            }),
            V &&
                (0, r.jsx)(x.Z, {
                    guildId: null == t ? void 0 : t.id,
                    recurrenceRule: H,
                    guildEventId: z.id,
                    onRecurrenceClick: A,
                }),
        ],
    });
}
