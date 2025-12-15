t.d(n, {
    Q: () => w,
    Z: () => T,
}),
    t(953529);
var a,
    i = t(54381),
    r = t(473749),
    l = t(120356),
    o = t.n(l),
    c = t(442837),
    s = t(681715),
    d = t(481060),
    u = t(447003),
    b = t(471445),
    f = t(357156),
    p = t(937096),
    h = t(496675),
    m = t(725436),
    g = t(274311),
    v = t(854698),
    x = t(285784),
    _ = t(95291),
    C = t(742593),
    j = t(810561),
    k = t(131154),
    I = t(765305),
    N = t(981631),
    Z = t(388032),
    y = t(518838),
    w = (((a = {})[(a.BANNER = 0)] = "BANNER"), (a[(a.THUMBNAIL = 1)] = "THUMBNAIL"), a);
function E(e) {
    let { channel: n, onClick: t } = e,
        { canManageAllEvents: a } = (0, f.XJ)(n),
        l = (0, c.e7)([h.Z], () => !n.isGuildVocal() || h.Z.can(N.Plq.CONNECT, n), [n]),
        p = r.useMemo(() => (0, u.Z)(n), [n]),
        m = r.useMemo(() => {
            let e = (0, b.KS)(n);
            return null != e
                ? r.createElement(e, {
                      color: "currentColor",
                      size: "custom",
                      width: 20,
                      height: 20,
                      className: y.icon,
                  })
                : null;
        }, [n]);
    return (0, i.jsx)(s.u, {
        text: Z.intl.string(Z.t.nHjY9C),
        shouldShow: !l && null != t,
        children: (0, i.jsxs)(d.P3F, {
            className: o()(y.inline, y.channelContainer, {
                [y.channelContainerEnabled]: l && null != t,
                [y.channelContainerDisabled]: !l && null != t,
            }),
            onClick: t,
            children: [
                (0, i.jsx)(s.u, {
                    text: Z.intl.string(Z.t["48WXaW"]),
                    shouldShow: a && p && l && null != t,
                    children: m,
                }),
                (0, i.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: y.channelLocation,
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
        : (0, i.jsxs)(d.P3F, {
              className: y.inline,
              onClick: a,
              children: [
                  (0, i.jsx)(d._tJ, {
                      size: "custom",
                      color: "currentColor",
                      height: 20,
                      width: 20,
                      className: o()(y.channelContainer, y.icon),
                  }),
                  (0, i.jsx)(d.Text, {
                      className: l ? y.externalLocation : y.channelLocation,
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
            onContextMenu: s,
            onJoinClick: u,
            onRsvpClick: b,
            onStartClick: f,
            onInviteClick: p,
            onEndClick: h,
            onJoinGuildClick: m,
        } = e,
        v = (0, g.Q)(n, t),
        _ = (0, x.Zs)({
            entityType: t,
            isJoined: a,
            isActive: r,
            isUserLurking: l,
            rsvped: o,
            canInvite: c,
            isChannelPublic: v,
            channel: n,
            onJoinClick: u,
            onRsvpClick: b,
            onStartClick: f,
            onInviteClick: p,
            onEndClick: h,
            onJoinGuildClick: m,
        });
    return (0, i.jsxs)(d.ButtonGroup, {
        fullWidth: !1,
        size: "sm",
        children: [
            null != s ? (0, i.jsx)(x.b5, { onClick: s }) : null,
            null == _
                ? void 0
                : _.map((e, n) =>
                      (0, i.jsx)(
                          d.Button,
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
            description: s,
            imageLocation: u = 0,
            imageSource: b,
            isActive: f,
            isUserLurking: h,
            isJoined: m = !1,
            isMember: g = !1,
            speakers: x,
            speakerCount: N,
            rsvped: Z,
            canInvite: w,
            location: E,
            truncate: T,
            onContextMenu: U,
            onJoinClick: D,
            onJoinGuildClick: R,
            onRsvpClick: A,
            onStartClick: B,
            onInviteClick: O,
            onEndClick: L,
            onClick: W,
            isNew: G,
            guildEvent: z,
            eventPreview: M,
            recurrenceRule: H,
            recurrenceId: J,
            hideAgeVerificationNotice: V,
        } = e,
        q = c === I.WX.EXTERNAL,
        X = q ? (e) => e.stopPropagation() : void 0,
        F = [];
    if (null != H && null != event) {
        let e = (0, v.Ho)(H);
        F = (0, v.PJ)(4, e, new Date(z.scheduled_start_time));
    }
    let K = F.length > 0;
    return (0, i.jsxs)(d.kL8, {
        "aria-label": l,
        onClick: () => (null == W ? void 0 : W(J)),
        onContextMenu: U,
        className: o()(
            y.card,
            {
                [y.joined]: m,
                [y.lurking]: h,
            },
            n,
        ),
        children: [
            (0, i.jsxs)("div", {
                className: o()(y.padding, { [y.isRecurring]: K }),
                children: [
                    0 === u && (0, i.jsx)(_.Z, { source: b }),
                    (0, i.jsx)(C.ZP, {
                        creator: r,
                        name: l,
                        description: s,
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
                            className: y.spacing,
                        }),
                    (0, i.jsx)("hr", { className: y.divider }),
                    !V &&
                        I.Qk.has(z.entity_type) &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(p.Z, {
                                    className: y.ageVerificationNoticeSpacing,
                                    noBackground: !0,
                                }),
                                (0, i.jsx)(d.izJ, { gap: 16 }),
                            ],
                        }),
                    (0, i.jsxs)("div", {
                        className: o()(y.inline, y.footer),
                        children: [
                            (0, i.jsx)(S, {
                                channel: a,
                                onJoinClick: D,
                                handleLocationClick: X,
                                location: E,
                                isExternal: q,
                            }),
                            (0, i.jsx)("div", {
                                className: y.eventActions,
                                children: (0, i.jsx)(P, {
                                    channel: a,
                                    entityType: c,
                                    isActive: f,
                                    isJoined: m,
                                    isUserLurking: h,
                                    isMember: g,
                                    rsvped: Z,
                                    canInvite: w,
                                    onContextMenu: U,
                                    onRsvpClick: A,
                                    onJoinGuildClick: R,
                                    onInviteClick: O,
                                    onJoinClick: D,
                                    onStartClick: B,
                                    onEndClick: L,
                                }),
                            }),
                        ],
                    }),
                    K && (0, i.jsx)("hr", { className: y.divider }),
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
