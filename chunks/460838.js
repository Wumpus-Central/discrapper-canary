t.d(n, {
    Q: () => Z,
    Z: () => O,
}),
    t(953529);
var a,
    i = t(54381),
    r = t(473749),
    o = t(120356),
    c = t.n(o),
    l = t(442837),
    s = t(481060),
    d = t(447003),
    _ = t(471445),
    u = t(357156),
    p = t(496675),
    f = t(725436),
    b = t(274311),
    v = t(854698),
    g = t(285784),
    m = t(95291),
    x = t(742593),
    h = t(810561),
    C = t(131154),
    I = t(765305),
    k = t(981631),
    j = t(388032),
    N = t(187881);
function w(e) {
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
var Z = (((a = {})[(a.BANNER = 0)] = "BANNER"), (a[(a.THUMBNAIL = 1)] = "THUMBNAIL"), a);
function P(e) {
    let { channel: n, onClick: t } = e,
        { canManageAllEvents: a } = (0, u.XJ)(n),
        o = (0, l.e7)([p.Z], () => !n.isGuildVocal() || p.Z.can(k.Plq.CONNECT, n), [n]),
        f = r.useMemo(() => (0, d.Z)(n), [n]),
        b = (0, _.KS)(n);
    return (0, i.jsx)(s.aML, {
        "data-migration-pending": !0,
        text: j.intl.string(j.t.nHjY9C),
        shouldShow: !o && null != t,
        children: (e) =>
            (0, i.jsxs)(
                s.P3F,
                y(w({}, e), {
                    className: c()(N.inline, N.channelContainer, {
                        [N.channelContainerEnabled]: o && null != t,
                        [N.channelContainerDisabled]: !o && null != t,
                    }),
                    onClick: t,
                    children: [
                        (0, i.jsx)(s.aML, {
                            "data-migration-pending": !0,
                            text: j.intl.string(j.t["48WXaW"]),
                            shouldShow: a && f && o && null != t,
                            children: (e) =>
                                null != b
                                    ? (0, i.jsx)(
                                          b,
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
                        (0, i.jsx)(s.Text, {
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
function U(e) {
    let { channel: n, onJoinClick: t, handleLocationClick: a, location: r, isExternal: o } = e;
    return null != n
        ? (0, i.jsx)(P, {
              channel: n,
              onClick: t,
          })
        : (0, i.jsxs)(s.P3F, {
              className: N.inline,
              onClick: a,
              children: [
                  (0, i.jsx)(s._tJ, {
                      size: "custom",
                      color: "currentColor",
                      height: 20,
                      width: 20,
                      className: c()(N.channelContainer, N.icon),
                  }),
                  (0, i.jsx)(s.Text, {
                      className: o ? N.externalLocation : N.channelLocation,
                      variant: "text-sm/normal",
                      children: (0, f.m)(r, !0),
                  }),
              ],
          });
}
function E(e) {
    let {
            channel: n,
            entityType: t,
            isJoined: a,
            isActive: r,
            isUserLurking: o,
            rsvped: c,
            canInvite: l,
            onContextMenu: d,
            onJoinClick: _,
            onRsvpClick: u,
            onStartClick: p,
            onInviteClick: f,
            onEndClick: v,
            onJoinGuildClick: m,
        } = e,
        x = (0, b.Q)(n, t),
        h = (0, g.Zs)({
            entityType: t,
            isJoined: a,
            isActive: r,
            isUserLurking: o,
            rsvped: c,
            canInvite: l,
            isChannelPublic: x,
            channel: n,
            onJoinClick: _,
            onRsvpClick: u,
            onStartClick: p,
            onInviteClick: f,
            onEndClick: v,
            onJoinGuildClick: m,
        });
    return (0, i.jsxs)(s.ButtonGroup, {
        fullWidth: !1,
        size: "sm",
        children: [
            null != d ? (0, i.jsx)(g.b5, { onClick: d }) : null,
            null == h ? void 0 : h.map((e, n) => (0, i.jsx)(s.Button, w({}, e), n)),
        ],
    });
}
function O(e) {
    let {
            className: n,
            guild: t,
            channel: a,
            creator: r,
            name: o,
            entityType: l,
            description: d,
            imageLocation: _ = 0,
            imageSource: u,
            isActive: p,
            isUserLurking: f,
            isJoined: b = !1,
            isMember: g = !1,
            speakers: k,
            speakerCount: j,
            rsvped: w,
            canInvite: y,
            location: Z,
            truncate: P,
            onContextMenu: O,
            onJoinClick: T,
            onJoinGuildClick: S,
            onRsvpClick: R,
            onStartClick: B,
            onInviteClick: L,
            onEndClick: A,
            onClick: D,
            isNew: W,
            guildEvent: M,
            eventPreview: G,
            recurrenceRule: H,
            recurrenceId: q,
        } = e,
        J = l === I.WX.EXTERNAL,
        X = J ? (e) => e.stopPropagation() : void 0,
        z = [];
    if (null != H && null != event) {
        let e = (0, v.Ho)(H);
        z = (0, v.PJ)(4, e, new Date(M.scheduled_start_time));
    }
    let F = z.length > 0;
    return (0, i.jsxs)(s.kL8, {
        "aria-label": o,
        onClick: () => (null == D ? void 0 : D(q)),
        onContextMenu: O,
        className: c()(
            N.card,
            {
                [N.joined]: b,
                [N.lurking]: f,
            },
            n,
        ),
        children: [
            (0, i.jsxs)("div", {
                className: c()(N.padding, { [N.isRecurring]: F }),
                children: [
                    0 === _ && (0, i.jsx)(m.Z, { source: u }),
                    (0, i.jsx)(x.ZP, {
                        creator: r,
                        name: o,
                        description: d,
                        imageSource: 1 === _ ? u : null,
                        truncate: P,
                        guildId: null == t ? void 0 : t.id,
                        isNew: W,
                        guildEvent: M,
                        eventPreview: G,
                        recurrenceId: q,
                    }),
                    p &&
                        null != t &&
                        null != k &&
                        j > 0 &&
                        (0, i.jsx)(C.Z, {
                            guild: t,
                            speakers: k,
                            speakerCount: j,
                            className: N.spacing,
                        }),
                    (0, i.jsx)("hr", { className: N.divider }),
                    (0, i.jsxs)("div", {
                        className: c()(N.inline, N.footer),
                        children: [
                            (0, i.jsx)(U, {
                                channel: a,
                                onJoinClick: T,
                                handleLocationClick: X,
                                location: Z,
                                isExternal: J,
                            }),
                            (0, i.jsx)("div", {
                                className: N.eventActions,
                                children: (0, i.jsx)(E, {
                                    channel: a,
                                    entityType: l,
                                    isActive: p,
                                    isJoined: b,
                                    isUserLurking: f,
                                    isMember: g,
                                    rsvped: w,
                                    canInvite: y,
                                    onContextMenu: O,
                                    onRsvpClick: R,
                                    onJoinGuildClick: S,
                                    onInviteClick: L,
                                    onJoinClick: T,
                                    onStartClick: B,
                                    onEndClick: A,
                                }),
                            }),
                        ],
                    }),
                    F && (0, i.jsx)("hr", { className: N.divider }),
                ],
            }),
            F &&
                (0, i.jsx)(h.Z, {
                    guildId: null == t ? void 0 : t.id,
                    recurrenceRule: H,
                    guildEventId: M.id,
                    onRecurrenceClick: D,
                }),
        ],
    });
}
