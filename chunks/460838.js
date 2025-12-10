t.d(n, {
    Q: () => O,
    Z: () => T,
}),
    t(953529);
var i,
    l = t(54381),
    a = t(473749),
    r = t(120356),
    s = t.n(r),
    c = t(442837),
    o = t(481060),
    u = t(447003),
    d = t(471445),
    h = t(357156),
    v = t(496675),
    m = t(725436),
    g = t(274311),
    x = t(854698),
    p = t(285784),
    C = t(95291),
    j = t(742593),
    f = t(810561),
    N = t(131154),
    y = t(765305),
    k = t(981631),
    b = t(388032),
    E = t(187881);
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
function I(e, n) {
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
        { canManageAllEvents: i } = (0, h.XJ)(n),
        r = (0, c.e7)([v.Z], () => !n.isGuildVocal() || v.Z.can(k.Plq.CONNECT, n), [n]),
        m = a.useMemo(() => (0, u.Z)(n), [n]),
        g = (0, d.KS)(n);
    return (0, l.jsx)(o.aML, {
        "data-migration-pending": !0,
        text: b.intl.string(b.t.nHjY9C),
        shouldShow: !r && null != t,
        children: (e) =>
            (0, l.jsxs)(
                o.P3F,
                I(w({}, e), {
                    className: s()(E.inline, E.channelContainer, {
                        [E.channelContainerEnabled]: r && null != t,
                        [E.channelContainerDisabled]: !r && null != t,
                    }),
                    onClick: t,
                    children: [
                        (0, l.jsx)(o.aML, {
                            "data-migration-pending": !0,
                            text: b.intl.string(b.t["48WXaW"]),
                            shouldShow: i && m && r && null != t,
                            children: (e) =>
                                null != g
                                    ? (0, l.jsx)(
                                          g,
                                          I(w({}, e), {
                                              color: "currentColor",
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              className: E.icon,
                                          }),
                                      )
                                    : null,
                        }),
                        (0, l.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "none",
                            className: E.channelLocation,
                            children: n.name,
                        }),
                    ],
                }),
            ),
    });
}
function Z(e) {
    let { channel: n, onJoinClick: t, handleLocationClick: i, location: a, isExternal: r } = e;
    return null != n
        ? (0, l.jsx)(S, {
              channel: n,
              onClick: t,
          })
        : (0, l.jsxs)(o.P3F, {
              className: E.inline,
              onClick: i,
              children: [
                  (0, l.jsx)(o._tJ, {
                      size: "custom",
                      color: "currentColor",
                      height: 20,
                      width: 20,
                      className: s()(E.channelContainer, E.icon),
                  }),
                  (0, l.jsx)(o.Text, {
                      className: r ? E.externalLocation : E.channelLocation,
                      variant: "text-sm/normal",
                      children: (0, m.m)(a, !0),
                  }),
              ],
          });
}
function _(e) {
    let {
            channel: n,
            entityType: t,
            isJoined: i,
            isActive: a,
            isUserLurking: r,
            rsvped: s,
            canInvite: c,
            onContextMenu: u,
            onJoinClick: d,
            onRsvpClick: h,
            onStartClick: v,
            onInviteClick: m,
            onEndClick: x,
            onJoinGuildClick: C,
        } = e,
        j = (0, g.Q)(n, t),
        f = (0, p.Zs)({
            entityType: t,
            isJoined: i,
            isActive: a,
            isUserLurking: r,
            rsvped: s,
            canInvite: c,
            isChannelPublic: j,
            channel: n,
            onJoinClick: d,
            onRsvpClick: h,
            onStartClick: v,
            onInviteClick: m,
            onEndClick: x,
            onJoinGuildClick: C,
        });
    return (0, l.jsxs)(o.ButtonGroup, {
        fullWidth: !1,
        size: "sm",
        children: [
            null != u ? (0, l.jsx)(p.b5, { onClick: u }) : null,
            null == f ? void 0 : f.map((e, n) => (0, l.jsx)(o.Button, w({}, e), n)),
        ],
    });
}
function T(e) {
    let {
            className: n,
            guild: t,
            channel: i,
            creator: a,
            name: r,
            entityType: c,
            description: u,
            imageLocation: d = 0,
            imageSource: h,
            isActive: v,
            isUserLurking: m,
            isJoined: g = !1,
            isMember: p = !1,
            speakers: k,
            speakerCount: b,
            rsvped: w,
            canInvite: I,
            location: O,
            truncate: S,
            onContextMenu: T,
            onJoinClick: L,
            onJoinGuildClick: P,
            onRsvpClick: A,
            onStartClick: G,
            onInviteClick: X,
            onEndClick: M,
            onClick: W,
            isNew: R,
            guildEvent: J,
            eventPreview: U,
            recurrenceRule: B,
            recurrenceId: D,
        } = e,
        V = c === y.WX.EXTERNAL,
        z = V ? (e) => e.stopPropagation() : void 0,
        H = [];
    if (null != B && null != event) {
        let e = (0, x.Ho)(B);
        H = (0, x.PJ)(4, e, new Date(J.scheduled_start_time));
    }
    let q = H.length > 0;
    return (0, l.jsxs)(o.kL8, {
        "aria-label": r,
        onClick: () => (null == W ? void 0 : W(D)),
        onContextMenu: T,
        className: s()(
            E.card,
            {
                [E.joined]: g,
                [E.lurking]: m,
            },
            n,
        ),
        children: [
            (0, l.jsxs)("div", {
                className: s()(E.padding, { [E.isRecurring]: q }),
                children: [
                    0 === d && (0, l.jsx)(C.Z, { source: h }),
                    (0, l.jsx)(j.ZP, {
                        creator: a,
                        name: r,
                        description: u,
                        imageSource: 1 === d ? h : null,
                        truncate: S,
                        guildId: null == t ? void 0 : t.id,
                        isNew: R,
                        guildEvent: J,
                        eventPreview: U,
                        recurrenceId: D,
                    }),
                    v &&
                        null != t &&
                        null != k &&
                        b > 0 &&
                        (0, l.jsx)(N.Z, {
                            guild: t,
                            speakers: k,
                            speakerCount: b,
                            className: E.spacing,
                        }),
                    (0, l.jsx)("hr", { className: E.divider }),
                    (0, l.jsxs)("div", {
                        className: s()(E.inline, E.footer),
                        children: [
                            (0, l.jsx)(Z, {
                                channel: i,
                                onJoinClick: L,
                                handleLocationClick: z,
                                location: O,
                                isExternal: V,
                            }),
                            (0, l.jsx)("div", {
                                className: E.eventActions,
                                children: (0, l.jsx)(_, {
                                    channel: i,
                                    entityType: c,
                                    isActive: v,
                                    isJoined: g,
                                    isUserLurking: m,
                                    isMember: p,
                                    rsvped: w,
                                    canInvite: I,
                                    onContextMenu: T,
                                    onRsvpClick: A,
                                    onJoinGuildClick: P,
                                    onInviteClick: X,
                                    onJoinClick: L,
                                    onStartClick: G,
                                    onEndClick: M,
                                }),
                            }),
                        ],
                    }),
                    q && (0, l.jsx)("hr", { className: E.divider }),
                ],
            }),
            q &&
                (0, l.jsx)(f.Z, {
                    guildId: null == t ? void 0 : t.id,
                    recurrenceRule: B,
                    guildEventId: J.id,
                    onRecurrenceClick: W,
                }),
        ],
    });
}
