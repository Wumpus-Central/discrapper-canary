t.d(n, {
    Q: () => w,
    Z: () => P,
}),
    t(953529);
var a,
    i = t(54381),
    r = t(473749),
    l = t(120356),
    c = t.n(l),
    o = t(442837),
    d = t(681715),
    s = t(481060),
    u = t(447003),
    b = t(471445),
    f = t(357156),
    p = t(496675),
    m = t(725436),
    h = t(274311),
    v = t(854698),
    g = t(285784),
    x = t(95291),
    _ = t(742593),
    C = t(810561),
    k = t(131154),
    I = t(765305),
    j = t(981631),
    N = t(388032),
    Z = t(518838),
    w = (((a = {})[(a.BANNER = 0)] = "BANNER"), (a[(a.THUMBNAIL = 1)] = "THUMBNAIL"), a);
function E(e) {
    let { channel: n, onClick: t } = e,
        { canManageAllEvents: a } = (0, f.XJ)(n),
        l = (0, o.e7)([p.Z], () => !n.isGuildVocal() || p.Z.can(j.Plq.CONNECT, n), [n]),
        m = r.useMemo(() => (0, u.Z)(n), [n]),
        h = r.useMemo(() => {
            let e = (0, b.KS)(n);
            return null != e
                ? r.createElement(e, {
                      color: "currentColor",
                      size: "custom",
                      width: 20,
                      height: 20,
                      className: Z.icon,
                  })
                : null;
        }, [n]);
    return (0, i.jsx)(d.u, {
        text: N.intl.string(N.t.nHjY9C),
        shouldShow: !l && null != t,
        children: (0, i.jsxs)(s.P3F, {
            className: c()(Z.inline, Z.channelContainer, {
                [Z.channelContainerEnabled]: l && null != t,
                [Z.channelContainerDisabled]: !l && null != t,
            }),
            onClick: t,
            children: [
                (0, i.jsx)(d.u, {
                    text: N.intl.string(N.t["48WXaW"]),
                    shouldShow: a && m && l && null != t,
                    children: h,
                }),
                (0, i.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: Z.channelLocation,
                    children: n.name,
                }),
            ],
        }),
    });
}
function y(e) {
    let { channel: n, onJoinClick: t, handleLocationClick: a, location: r, isExternal: l } = e;
    return null != n
        ? (0, i.jsx)(E, {
              channel: n,
              onClick: t,
          })
        : (0, i.jsxs)(s.P3F, {
              className: Z.inline,
              onClick: a,
              children: [
                  (0, i.jsx)(s._tJ, {
                      size: "custom",
                      color: "currentColor",
                      height: 20,
                      width: 20,
                      className: c()(Z.channelContainer, Z.icon),
                  }),
                  (0, i.jsx)(s.Text, {
                      className: l ? Z.externalLocation : Z.channelLocation,
                      variant: "text-sm/normal",
                      children: (0, m.m)(r, !0),
                  }),
              ],
          });
}
function S(e) {
    let {
            channel: n,
            entityType: t,
            isJoined: a,
            isActive: r,
            isUserLurking: l,
            rsvped: c,
            canInvite: o,
            onContextMenu: d,
            onJoinClick: u,
            onRsvpClick: b,
            onStartClick: f,
            onInviteClick: p,
            onEndClick: m,
            onJoinGuildClick: v,
        } = e,
        x = (0, h.Q)(n, t),
        _ = (0, g.Zs)({
            entityType: t,
            isJoined: a,
            isActive: r,
            isUserLurking: l,
            rsvped: c,
            canInvite: o,
            isChannelPublic: x,
            channel: n,
            onJoinClick: u,
            onRsvpClick: b,
            onStartClick: f,
            onInviteClick: p,
            onEndClick: m,
            onJoinGuildClick: v,
        });
    return (0, i.jsxs)(s.ButtonGroup, {
        fullWidth: !1,
        size: "sm",
        children: [
            null != d ? (0, i.jsx)(g.b5, { onClick: d }) : null,
            null == _
                ? void 0
                : _.map((e, n) =>
                      (0, i.jsx)(
                          s.Button,
                          (function (e) {
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
                          })({}, e),
                          n,
                      ),
                  ),
        ],
    });
}
function P(e) {
    let {
            className: n,
            guild: t,
            channel: a,
            creator: r,
            name: l,
            entityType: o,
            description: d,
            imageLocation: u = 0,
            imageSource: b,
            isActive: f,
            isUserLurking: p,
            isJoined: m = !1,
            isMember: h = !1,
            speakers: g,
            speakerCount: j,
            rsvped: N,
            canInvite: w,
            location: E,
            truncate: P,
            onContextMenu: T,
            onJoinClick: U,
            onJoinGuildClick: D,
            onRsvpClick: B,
            onStartClick: O,
            onInviteClick: R,
            onEndClick: A,
            onClick: L,
            isNew: W,
            guildEvent: z,
            eventPreview: G,
            recurrenceRule: H,
            recurrenceId: M,
        } = e,
        q = o === I.WX.EXTERNAL,
        J = q ? (e) => e.stopPropagation() : void 0,
        X = [];
    if (null != H && null != event) {
        let e = (0, v.Ho)(H);
        X = (0, v.PJ)(4, e, new Date(z.scheduled_start_time));
    }
    let V = X.length > 0;
    return (0, i.jsxs)(s.kL8, {
        "aria-label": l,
        onClick: () => (null == L ? void 0 : L(M)),
        onContextMenu: T,
        className: c()(
            Z.card,
            {
                [Z.joined]: m,
                [Z.lurking]: p,
            },
            n,
        ),
        children: [
            (0, i.jsxs)("div", {
                className: c()(Z.padding, { [Z.isRecurring]: V }),
                children: [
                    0 === u && (0, i.jsx)(x.Z, { source: b }),
                    (0, i.jsx)(_.ZP, {
                        creator: r,
                        name: l,
                        description: d,
                        imageSource: 1 === u ? b : null,
                        truncate: P,
                        guildId: null == t ? void 0 : t.id,
                        isNew: W,
                        guildEvent: z,
                        eventPreview: G,
                        recurrenceId: M,
                    }),
                    f &&
                        null != t &&
                        null != g &&
                        j > 0 &&
                        (0, i.jsx)(k.Z, {
                            guild: t,
                            speakers: g,
                            speakerCount: j,
                            className: Z.spacing,
                        }),
                    (0, i.jsx)("hr", { className: Z.divider }),
                    (0, i.jsxs)("div", {
                        className: c()(Z.inline, Z.footer),
                        children: [
                            (0, i.jsx)(y, {
                                channel: a,
                                onJoinClick: U,
                                handleLocationClick: J,
                                location: E,
                                isExternal: q,
                            }),
                            (0, i.jsx)("div", {
                                className: Z.eventActions,
                                children: (0, i.jsx)(S, {
                                    channel: a,
                                    entityType: o,
                                    isActive: f,
                                    isJoined: m,
                                    isUserLurking: p,
                                    isMember: h,
                                    rsvped: N,
                                    canInvite: w,
                                    onContextMenu: T,
                                    onRsvpClick: B,
                                    onJoinGuildClick: D,
                                    onInviteClick: R,
                                    onJoinClick: U,
                                    onStartClick: O,
                                    onEndClick: A,
                                }),
                            }),
                        ],
                    }),
                    V && (0, i.jsx)("hr", { className: Z.divider }),
                ],
            }),
            V &&
                (0, i.jsx)(C.Z, {
                    guildId: null == t ? void 0 : t.id,
                    recurrenceRule: H,
                    guildEventId: z.id,
                    onRecurrenceClick: L,
                }),
        ],
    });
}
