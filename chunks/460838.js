t.d(n, {
    Q: () => y,
    Z: () => T,
}),
    t(953529);
var a,
    i = t(54381),
    r = t(473749),
    l = t(120356),
    o = t.n(l),
    c = t(442837),
    d = t(681715),
    s = t(481060),
    u = t(447003),
    b = t(471445),
    f = t(357156),
    h = t(937096),
    p = t(496675),
    m = t(725436),
    v = t(274311),
    g = t(854698),
    x = t(285784),
    _ = t(95291),
    C = t(742593),
    j = t(810561),
    k = t(131154),
    I = t(765305),
    N = t(981631),
    Z = t(388032),
    w = t(518838),
    y = (((a = {})[(a.BANNER = 0)] = "BANNER"), (a[(a.THUMBNAIL = 1)] = "THUMBNAIL"), a);
function E(e) {
    let { channel: n, onClick: t } = e,
        { canManageAllEvents: a } = (0, f.XJ)(n),
        l = (0, c.e7)([p.Z], () => !n.isGuildVocal() || p.Z.can(N.Plq.CONNECT, n), [n]),
        h = r.useMemo(() => (0, u.Z)(n), [n]),
        m = r.useMemo(() => {
            let e = (0, b.KS)(n);
            return null != e
                ? r.createElement(e, {
                      color: "currentColor",
                      size: "custom",
                      width: 20,
                      height: 20,
                      className: w.icon,
                  })
                : null;
        }, [n]);
    return (0, i.jsx)(d.u, {
        text: Z.intl.string(Z.t.nHjY9C),
        shouldShow: !l && null != t,
        children: (0, i.jsxs)(s.P3F, {
            className: o()(w.inline, w.channelContainer, {
                [w.channelContainerEnabled]: l && null != t,
                [w.channelContainerDisabled]: !l && null != t,
            }),
            onClick: t,
            children: [
                (0, i.jsx)(d.u, {
                    text: Z.intl.string(Z.t["48WXaW"]),
                    shouldShow: a && h && l && null != t,
                    children: m,
                }),
                (0, i.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: w.channelLocation,
                    children: n.name,
                }),
            ],
        }),
    });
}
function S(e) {
    let { channel: n, onJoinClick: t, handleLocationClick: a, location: r, isExternal: l } = e;
    return null != n
        ? (0, i.jsx)(E, {
              channel: n,
              onClick: t,
          })
        : (0, i.jsxs)(s.P3F, {
              className: w.inline,
              onClick: a,
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
                      children: (0, m.m)(r, !0),
                  }),
              ],
          });
}
function P(e) {
    let {
            channel: n,
            entityType: t,
            isJoined: a,
            isActive: r,
            isUserLurking: l,
            rsvped: o,
            canInvite: c,
            onContextMenu: d,
            onJoinClick: u,
            onRsvpClick: b,
            onStartClick: f,
            onInviteClick: h,
            onEndClick: p,
            onJoinGuildClick: m,
        } = e,
        g = (0, v.Q)(n, t),
        _ = (0, x.Zs)({
            entityType: t,
            isJoined: a,
            isActive: r,
            isUserLurking: l,
            rsvped: o,
            canInvite: c,
            isChannelPublic: g,
            channel: n,
            onJoinClick: u,
            onRsvpClick: b,
            onStartClick: f,
            onInviteClick: h,
            onEndClick: p,
            onJoinGuildClick: m,
        });
    return (0, i.jsxs)(s.ButtonGroup, {
        fullWidth: !1,
        size: "sm",
        children: [
            null != d ? (0, i.jsx)(x.b5, { onClick: d }) : null,
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
function T(e) {
    let {
            className: n,
            guild: t,
            channel: a,
            creator: r,
            name: l,
            entityType: c,
            description: d,
            imageLocation: u = 0,
            imageSource: b,
            isActive: f,
            isUserLurking: p,
            isJoined: m = !1,
            isMember: v = !1,
            speakers: x,
            speakerCount: N,
            rsvped: Z,
            canInvite: y,
            location: E,
            truncate: T,
            onContextMenu: U,
            onJoinClick: D,
            onJoinGuildClick: R,
            onRsvpClick: A,
            onStartClick: O,
            onInviteClick: B,
            onEndClick: L,
            onClick: W,
            isNew: G,
            guildEvent: z,
            eventPreview: M,
            recurrenceRule: H,
            recurrenceId: J,
            hideAgeVerificationNotice: q,
        } = e,
        V = c === I.WX.EXTERNAL,
        X = V ? (e) => e.stopPropagation() : void 0,
        F = [];
    if (null != H && null != event) {
        let e = (0, g.Ho)(H);
        F = (0, g.PJ)(4, e, new Date(z.scheduled_start_time));
    }
    let K = F.length > 0;
    return (0, i.jsxs)(s.kL8, {
        "aria-label": l,
        onClick: () => (null == W ? void 0 : W(J)),
        onContextMenu: U,
        className: o()(
            w.card,
            {
                [w.joined]: m,
                [w.lurking]: p,
            },
            n,
        ),
        children: [
            (0, i.jsxs)("div", {
                className: o()(w.padding, { [w.isRecurring]: K }),
                children: [
                    0 === u && (0, i.jsx)(_.Z, { source: b }),
                    (0, i.jsx)(C.ZP, {
                        creator: r,
                        name: l,
                        description: d,
                        imageSource: 1 === u ? b : null,
                        truncate: T,
                        guildId: null == t ? void 0 : t.id,
                        isNew: G,
                        guildEvent: z,
                        eventPreview: M,
                        recurrenceId: J,
                    }),
                    f &&
                        null != t &&
                        null != x &&
                        N > 0 &&
                        (0, i.jsx)(k.Z, {
                            guild: t,
                            speakers: x,
                            speakerCount: N,
                            className: w.spacing,
                        }),
                    (0, i.jsx)("hr", { className: w.divider }),
                    !q &&
                        I.Qk.has(z.entity_type) &&
                        (0, i.jsx)(h.Z, {
                            className: w.ageVerificationNoticeSpacing,
                            noBackground: !0,
                            divider: !0,
                        }),
                    (0, i.jsxs)("div", {
                        className: o()(w.inline, w.footer),
                        children: [
                            (0, i.jsx)(S, {
                                channel: a,
                                onJoinClick: D,
                                handleLocationClick: X,
                                location: E,
                                isExternal: V,
                            }),
                            (0, i.jsx)("div", {
                                className: w.eventActions,
                                children: (0, i.jsx)(P, {
                                    channel: a,
                                    entityType: c,
                                    isActive: f,
                                    isJoined: m,
                                    isUserLurking: p,
                                    isMember: v,
                                    rsvped: Z,
                                    canInvite: y,
                                    onContextMenu: U,
                                    onRsvpClick: A,
                                    onJoinGuildClick: R,
                                    onInviteClick: B,
                                    onJoinClick: D,
                                    onStartClick: O,
                                    onEndClick: L,
                                }),
                            }),
                        ],
                    }),
                    K && (0, i.jsx)("hr", { className: w.divider }),
                ],
            }),
            K &&
                (0, i.jsx)(j.Z, {
                    guildId: null == t ? void 0 : t.id,
                    recurrenceRule: H,
                    guildEventId: z.id,
                    onRecurrenceClick: W,
                }),
        ],
    });
}
