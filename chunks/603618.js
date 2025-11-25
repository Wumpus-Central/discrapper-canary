n.d(t, {
    ZP: () => er,
    lE: () => ei,
    lX: () => en,
}),
    n(388685),
    n(539854),
    n(997841);
var i = n(54381),
    r = n(473749),
    l = n(512722),
    a = n.n(l),
    o = n(661869),
    s = n(876215),
    u = n(884439),
    c = n(95015),
    d = n(442837),
    h = n(28664),
    p = n(481060),
    f = n(278323),
    m = n(24124),
    g = n(493683),
    y = n(13245),
    O = n(99690),
    E = n(493773),
    v = n(620662),
    S = n(835473),
    b = n(194082),
    x = n(297781),
    j = n(656709),
    I = n(692701),
    C = n(887413),
    Z = n(225559),
    N = n(703656),
    w = n(93127),
    T = n(752048),
    _ = n(409057),
    P = n(199902),
    A = n(592125),
    D = n(293273),
    R = n(158776),
    k = n(699516),
    L = n(594174),
    M = n(801077),
    V = n(237997),
    z = n(5192),
    U = n(709054),
    W = n(444295),
    G = n(388627),
    F = n(981631),
    H = n(959517),
    Y = n(388032),
    B = n(847121);
function Q(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function K(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function X(e) {
    let t,
        { entry: n, currentUserActivity: l, idx: o, variant: s } = e,
        u = (0, d.e7)([L.default], () => L.default.getUser(n.author_id)),
        [c, m] = r.useState("unsent"),
        [O, E] = r.useState(!1);
    r.useEffect(() => {
        if ("sent" === c) {
            let e = setTimeout(() => E(!0), 2000);
            return () => clearTimeout(e);
        }
    }, [c]);
    let S = null != l && (0, v.Z)(l, F.xjy.JOIN),
        b = async (e) => {
            if (null != u && "unsent" === c) {
                e.stopPropagation();
                try {
                    if ((m("sending"), S))
                        await f.Z.sendActivityInviteUser({
                            type: F.mFx.JOIN,
                            userId: u.id,
                            activity: l,
                            location: F.Sbl.UNLOCKED_OVERLAY,
                        });
                    else {
                        var t;
                        let e = await g.Z.getOrEnsurePrivateChannel(u.id),
                            i = null != (t = A.Z.getChannel(e)) ? t : null;
                        a()(null != i, "Send channel must be defined"),
                            (0, N.uL)(F.Z5c.CHANNEL(i.guild_id, i.id)),
                            (0, C.i)(F.IlC.OVERLAY, !0),
                            !0 === n.extra.fake_inventory_item
                                ? await (0, j.k)({
                                      channel: i,
                                      content: Y.intl.formatToPlainString(Y.t.UVBA9g, { gameName: n.extra.game_name }),
                                      whenReady: !0,
                                      doNotNotifyOnError: !1,
                                      location: H.dy.OVERLAY,
                                  })
                                : await (0, j.p)({
                                      channel: i,
                                      content: Y.intl.string(Y.t.DwAcMz),
                                      entry: n,
                                      whenReady: !0,
                                      doNotNotifyOnError: !1,
                                      location: H.dy.OVERLAY,
                                  });
                    }
                    y.Z.track(F.rMx.OVERLAY_GAME_INVITE_SENT, {
                        target_user_id: u.id,
                        target_content_entry_id: n.id,
                        target_index: o,
                    }),
                        (0, W.Ws)(F.Odu.ACTIVITY, {
                            type: W.Qu.INVITE,
                            value: W.bk.INVITE_SENT,
                            userId: u.id,
                        }),
                        m("sent");
                } catch (e) {
                    m("unsent");
                }
            }
        },
        x = async () => {
            var e;
            if (null == u) return;
            let t = await g.Z.getOrEnsurePrivateChannel(u.id),
                n = null != (e = A.Z.getChannel(t)) ? e : null;
            a()(null != n, "Send channel must be defined"),
                (0, N.uL)(F.Z5c.CHANNEL(n.guild_id, n.id)),
                (0, C.i)(F.IlC.OVERLAY, !0),
                (0, W.Ws)(F.Odu.ACTIVITY, {
                    type: W.Qu.REDIRECT,
                    value: W.bk.CHAT,
                    userId: u.id,
                });
        },
        I = S ? Y.intl.string(Y.t["3fRySx"]) : Y.intl.string(Y.t.XHxDIV);
    return (
        (t = "sent" === c ? (O ? p.kBi : p.kSu) : S ? p.ejJ : p.Uuj),
        (0, i.jsx)(h.u, {
            text: I,
            "aria-label": I,
            children: (0, i.jsx)(p.hU, {
                icon: t,
                "aria-label": I,
                loading: "sending" === c,
                onClick: O ? x : b,
                variant: "subtle" === s ? "icon-only" : "secondary",
                size: "sm",
            }),
        })
    );
}
function J(e) {
    var t;
    let { entry: n, currentUserActivity: l, variant: a } = e,
        o = (0, d.e7)([L.default], () => L.default.getUser(n.author_id)),
        s = null != (t = null == l ? void 0 : l.application_id) ? t : n.extra.application_id,
        u = (0, d.e7)([R.Z], () => (null != o ? R.Z.getApplicationActivity(o.id, s) : null), [s, o]),
        [c, m] = r.useState("unsent");
    if (!(null != u && (0, v.Z)(u, F.xjy.JOIN))) return null;
    let g = async (e) => {
            if (null != o && "unsent" === c) {
                e.stopPropagation();
                try {
                    m("sending"),
                        await f.Z.sendActivityInviteUser({
                            type: F.mFx.JOIN_REQUEST,
                            userId: o.id,
                            activity: u,
                            location: F.Sbl.UNLOCKED_OVERLAY,
                        }),
                        (0, W.Ws)(F.Odu.ACTIVITY, {
                            type: W.Qu.INVITE,
                            value: W.bk.JOIN_REQUEST_SENT,
                            userId: o.id,
                        }),
                        m("sent");
                } catch (e) {
                    m("unsent");
                }
            }
        },
        y = Y.intl.string(Y.t.OKsSCR);
    return (0, i.jsx)(h.u, {
        text: y,
        "aria-label": y,
        children: (0, i.jsx)(p.hU, {
            icon: "sent" === c ? p.kSu : p.V9,
            "aria-label": y,
            loading: "sending" === c,
            onClick: g,
            variant: "subtle" === a ? "icon-only" : "secondary",
            size: "sm",
        }),
    });
}
function q(e) {
    let { entry: t, currentUserActivity: n, idx: r, variant: l } = e,
        a = (0, d.e7)([L.default], () => L.default.getUser(t.author_id)),
        o = (0, d.e7)([P.Z], () => (null != a ? P.Z.getAnyStreamForUser(a.id) : null), [a]),
        { isMobileOnline: s, status: u } = (0, d.cj)(
            [R.Z],
            () =>
                null == a
                    ? {
                          isMobileOnline: void 0,
                          status: void 0,
                      }
                    : {
                          isMobileOnline: R.Z.isMobileOnline(a.id),
                          status: R.Z.getStatus(a.id),
                      },
            [a],
        );
    return null == a
        ? null
        : (0, i.jsxs)("div", {
              className: B.row,
              children: [
                  (0, i.jsx)(O.Z, {
                      className: B.avatar,
                      user: a,
                      isMobile: s,
                      status: u,
                  }),
                  (0, i.jsxs)("div", {
                      className: B.details,
                      children: [
                          (0, i.jsxs)("div", {
                              className: B.usernameWrapper,
                              children: [
                                  (0, i.jsx)(p.Text, {
                                      className: B.username,
                                      variant: "text-md/medium",
                                      color: "header-primary",
                                      children: z.ZP.getName(void 0, void 0, a),
                                  }),
                                  null != o && (0, i.jsx)(b.ZP, { className: B.liveIndicator }),
                              ],
                          }),
                          (0, i.jsx)(x.Gk, {
                              location: x.Gt.OVERLAY,
                              className: B.badgesContainer,
                              children: [x.OV, x.wO, x.f, x.v1, x.pQ].map((e, n) =>
                                  (0, i.jsx)(e, { entry: t }, "entry-".concat(n)),
                              ),
                          }),
                      ],
                  }),
                  (0, i.jsxs)("div", {
                      className: B.inviteButtons,
                      children: [
                          (0, i.jsx)(J, {
                              entry: t,
                              currentUserActivity: n,
                              idx: r,
                              variant: l,
                          }),
                          (0, i.jsx)(X, {
                              entry: t,
                              currentUserActivity: n,
                              idx: r,
                              variant: l,
                          }),
                      ],
                  }),
              ],
          });
}
function $(e) {
    return new Set(e.map((e) => e.author_id));
}
function ee(e) {
    let { entries: t, currentUserActivity: n, className: l, hideHeader: a = !1, variant: o = "default" } = e,
        s = (0, W.ee)(() => $(t), [t]),
        c = (0, W.ee)(
            () =>
                new Set(
                    Array.from($(t)).filter((e) => {
                        let n = t.find((t) => {
                            let { author_id: n } = t;
                            return e === n;
                        });
                        return (
                            null != n &&
                            n.traits.find((e) => {
                                let { type: t } = e;
                                return t === u.N.IS_LIVE;
                            })
                        );
                    }),
                ),
            [t],
        ),
        d = (0, W.ee)(() => new Set(t.map((e) => e.id)), [t]);
    return (r.useEffect(() => {
        (0, W.zi)(F.Odu.ACTIVITY, {
            locked: V.default.isInstanceLocked(),
            shownUserIds: Array.from(s),
            liveUserIds: Array.from(c),
            contentInventoryIds: Array.from(d),
        });
    }, [s, c, d]),
    0 === t.length)
        ? null
        : (0, i.jsxs)("div", {
              className: l,
              children: [
                  !a &&
                      (0, i.jsx)("div", {
                          className: B.contentInventoryHeader,
                          children: (0, i.jsx)(p.Text, {
                              variant: "text-xs/medium",
                              color: "subtle" === o ? "text-secondary" : "header-secondary",
                              tag: "div",
                              children: Y.intl.string(Y.t.y9eo7a),
                          }),
                      }),
                  t.map((e, t) =>
                      (0, i.jsx)(
                          q,
                          {
                              idx: t,
                              entry: e,
                              currentUserActivity: n,
                              variant: o,
                          },
                          t,
                      ),
                  ),
              ],
          });
}
function et(e) {
    let { gamingId: t, maxUserShowCount: n, userAffinityThresholdV2: i = 0.0029 } = e,
        l = (0, I.Z)(t);
    (0, E.ZP)(() => {
        (0, w._)();
    });
    let a = (0, d.e7)([D.Z], () => (null == t ? null : D.Z.getApplicationActivity(t)), [t]),
        c = (0, d.Wu)([M.Z, k.Z, T.Z], () => {
            if (null == t) return [];
            let e = M.Z.nowPlayingCards,
                n = { v2: i };
            return e
                .reduce((e, n) => {
                    if (n.type !== F.GOo.USER) return e;
                    let i = n.party.currentActivities;
                    if (0 === i.length) return e;
                    for (let n of i) n.game.id === t && null != n.activity && e.push(n);
                    return e;
                }, [])
                .filter((e) => {
                    let t = e.activityUser.id,
                        i = k.Z.isFriend(t);
                    return (function (e, t, n) {
                        let { v2: i } = n;
                        if (null == e) return t;
                        let {
                            communicationProbability: r,
                            dmProbability: l,
                            serverMessageProbability: a,
                            vcProbability: o,
                        } = e;
                        switch (!0) {
                            case r > i:
                            case l > i:
                            case a > i:
                            case o > i:
                                return !0;
                            default:
                                return t;
                        }
                    })(T.Z.getUserAffinity(t), i, n);
                });
        }, [t, i]);
    return (
        (0, E.ZP)(() => (Z.L(), () => Z.v())),
        {
            entries: r.useMemo(() => {
                let e = l.filter((e) => !c.some((t) => t.activityUser.id === e.author_id)),
                    t = [
                        ...c.map((e) =>
                            (function (e) {
                                var t, n, i, r, l, a, c;
                                let d =
                                    null !=
                                    (l = null == (n = e.activity) || null == (t = n.timestamps) ? void 0 : t.start)
                                        ? l
                                        : Date.now();
                                return {
                                    id: U.default.fromTimestamp(d),
                                    author_id: e.activityUser.id,
                                    extra: {
                                        type: "played_game_extra",
                                        game_name:
                                            null != (a = null == (i = e.activity) ? void 0 : i.name) ? a : e.game.name,
                                        application_id:
                                            null != (c = null == (r = e.activity) ? void 0 : r.application_id)
                                                ? c
                                                : e.game.id,
                                        fake_inventory_item: !0,
                                    },
                                    content_type: s.s.PLAYED_GAME,
                                    author_type: o.i.USER,
                                    participants: e.playingMembers.map((e) => e.id),
                                    traits: [
                                        {
                                            type: u.N.IS_LIVE,
                                            is_live: !0,
                                        },
                                    ],
                                };
                            })(e),
                        ),
                        ...e,
                    ];
                return null != n ? t.slice(0, n) : t;
            }, [l, c, n]),
            currentUserActivity: a,
        }
    );
}
function en(e) {
    let t = et(e);
    return (0, i.jsx)(
        ee,
        K(Q({}, t), {
            className: e.className,
            variant: e.variant,
        }),
    );
}
function ei(e) {
    let { activity: t, currentUser: n, showInviteButton: r = !0 } = e,
        l = null != t && (0, v.Z)(t, F.xjy.JOIN),
        a = (0, S.q)(null == t ? void 0 : t.application_id),
        o = null != a && (0, c.yE)(a.flags, F.udG.EMBEDDED);
    return null == t || null == n
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(_.Z, {
                      className: B.activityCard,
                      activity: t,
                      user: n,
                      currentUser: n,
                      appContext: F.IlC.OVERLAY,
                  }),
                  l && !o && r
                      ? (0, i.jsx)("div", {
                            className: B.inviteFriendsButton,
                            children: (0, i.jsx)(p.Button, {
                                text: Y.intl.string(Y.t["6Qgrev"]),
                                size: "sm",
                                variant: "secondary",
                                onClick: () => {
                                    (0, m.h7)(t, !1, F.IlC.POPOUT),
                                        (0, W.Ws)(F.Odu.ACTIVITY, {
                                            type: W.Qu.INVITE,
                                            value: W.bk.PANEL_OPENED,
                                        });
                                },
                            }),
                        })
                      : null,
              ],
          });
}
function er(e) {
    let { locked: t } = e,
        n = (0, G.II)(),
        r = null == n ? void 0 : n.id,
        l = null == n ? void 0 : n.altId,
        a = (0, I.Z)(r),
        o = (0, d.e7)([L.default], () => L.default.getCurrentUser()),
        s = null != l ? l : r,
        u = (0, d.e7)([D.Z], () => (null == s ? null : D.Z.getApplicationActivity(s)), [s]);
    (0, E.ZP)(() => (Z.L(), () => Z.v()));
    let c = et({
        gamingId: s,
        userAffinityThresholdV2: 0.00145,
        maxUserShowCount: 12,
    });
    return t || (0 === a.length && null == u)
        ? null
        : (0, i.jsxs)("div", {
              className: B.container,
              children: [
                  (0, i.jsx)(ei, {
                      activity: u,
                      currentUser: o,
                  }),
                  (0, i.jsx)(
                      ee,
                      K(Q({}, c), {
                          className: B.contentInventoryContainer,
                          hideHeader: !0,
                      }),
                  ),
              ],
          });
}
