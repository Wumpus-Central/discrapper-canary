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
    o = n.n(l),
    a = n(661869),
    s = n(876215),
    c = n(884439),
    u = n(95015),
    d = n(442837),
    h = n(28664),
    p = n(481060),
    f = n(278323),
    m = n(24124),
    g = n(493683),
    y = n(13245),
    O = n(99690),
    v = n(493773),
    E = n(620662),
    b = n(835473),
    _ = n(194082),
    S = n(297781),
    x = n(656709),
    I = n(692701),
    j = n(887413),
    C = n(225559),
    Z = n(703656),
    N = n(93127),
    w = n(752048),
    T = n(409057),
    P = n(199902),
    A = n(592125),
    k = n(293273),
    D = n(158776),
    R = n(699516),
    L = n(594174),
    M = n(801077),
    z = n(237997),
    V = n(5192),
    U = n(709054),
    W = n(444295),
    G = n(388627),
    F = n(981631),
    H = n(959517),
    B = n(388032),
    Y = n(847121);
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
        { entry: n, currentUserActivity: l, idx: a, variant: s } = e,
        c = (0, d.e7)([L.default], () => L.default.getUser(n.author_id)),
        [u, m] = r.useState("unsent"),
        [O, v] = r.useState(!1);
    r.useEffect(() => {
        if ("sent" === u) {
            let e = setTimeout(() => v(!0), 2000);
            return () => clearTimeout(e);
        }
    }, [u]);
    let b = null != l && (0, E.Z)(l, F.xjy.JOIN),
        _ = async (e) => {
            if (null != c && "unsent" === u) {
                e.stopPropagation();
                try {
                    if ((m("sending"), b))
                        await f.Z.sendActivityInviteUser({
                            type: F.mFx.JOIN,
                            userId: c.id,
                            activity: l,
                            location: F.Sbl.UNLOCKED_OVERLAY,
                        });
                    else {
                        var t;
                        let e = await g.Z.getOrEnsurePrivateChannel(c.id),
                            i = null != (t = A.Z.getChannel(e)) ? t : null;
                        o()(null != i, "Send channel must be defined"),
                            (0, Z.uL)(F.Z5c.CHANNEL(i.guild_id, i.id)),
                            (0, j.i)(F.IlC.OVERLAY, !0),
                            !0 === n.extra.fake_inventory_item
                                ? await (0, x.k)({
                                      channel: i,
                                      content: B.intl.formatToPlainString(B.t.UVBA9g, { gameName: n.extra.game_name }),
                                      whenReady: !0,
                                      doNotNotifyOnError: !1,
                                      location: H.dy.OVERLAY,
                                  })
                                : await (0, x.p)({
                                      channel: i,
                                      content: B.intl.string(B.t.DwAcMz),
                                      entry: n,
                                      whenReady: !0,
                                      doNotNotifyOnError: !1,
                                      location: H.dy.OVERLAY,
                                  });
                    }
                    y.Z.track(F.rMx.OVERLAY_GAME_INVITE_SENT, {
                        target_user_id: c.id,
                        target_content_entry_id: n.id,
                        target_index: a,
                    }),
                        (0, W.Ws)(F.Odu.ACTIVITY, {
                            type: W.Qu.INVITE,
                            value: W.bk.INVITE_SENT,
                            userId: c.id,
                        }),
                        m("sent");
                } catch (e) {
                    m("unsent");
                }
            }
        },
        S = async () => {
            var e;
            if (null == c) return;
            let t = await g.Z.getOrEnsurePrivateChannel(c.id),
                n = null != (e = A.Z.getChannel(t)) ? e : null;
            o()(null != n, "Send channel must be defined"),
                (0, Z.uL)(F.Z5c.CHANNEL(n.guild_id, n.id)),
                (0, j.i)(F.IlC.OVERLAY, !0),
                (0, W.Ws)(F.Odu.ACTIVITY, {
                    type: W.Qu.REDIRECT,
                    value: W.bk.CHAT,
                    userId: c.id,
                });
        },
        I = b ? B.intl.string(B.t["3fRySx"]) : B.intl.string(B.t.XHxDIV);
    return (
        (t = "sent" === u ? (O ? p.kBi : p.kSu) : b ? p.ejJ : p.Uuj),
        (0, i.jsx)(h.u, {
            text: I,
            "aria-label": I,
            children: (0, i.jsx)(p.hU, {
                icon: t,
                "aria-label": I,
                loading: "sending" === u,
                onClick: O ? S : _,
                variant: "subtle" === s ? "icon-only" : "secondary",
                size: "sm",
            }),
        })
    );
}
function J(e) {
    var t;
    let { entry: n, currentUserActivity: l, variant: o } = e,
        a = (0, d.e7)([L.default], () => L.default.getUser(n.author_id)),
        s = null != (t = null == l ? void 0 : l.application_id) ? t : n.extra.application_id,
        c = (0, d.e7)([D.Z], () => (null != a ? D.Z.getApplicationActivity(a.id, s) : null), [s, a]),
        [u, m] = r.useState("unsent");
    if (!(null != c && (0, E.Z)(c, F.xjy.JOIN))) return null;
    let g = async (e) => {
            if (null != a && "unsent" === u) {
                e.stopPropagation();
                try {
                    m("sending"),
                        await f.Z.sendActivityInviteUser({
                            type: F.mFx.JOIN_REQUEST,
                            userId: a.id,
                            activity: c,
                            location: F.Sbl.UNLOCKED_OVERLAY,
                        }),
                        (0, W.Ws)(F.Odu.ACTIVITY, {
                            type: W.Qu.INVITE,
                            value: W.bk.JOIN_REQUEST_SENT,
                            userId: a.id,
                        }),
                        m("sent");
                } catch (e) {
                    m("unsent");
                }
            }
        },
        y = B.intl.string(B.t.OKsSCR);
    return (0, i.jsx)(h.u, {
        text: y,
        "aria-label": y,
        children: (0, i.jsx)(p.hU, {
            icon: "sent" === u ? p.kSu : p.V9,
            "aria-label": y,
            loading: "sending" === u,
            onClick: g,
            variant: "subtle" === o ? "icon-only" : "secondary",
            size: "sm",
        }),
    });
}
function q(e) {
    let { entry: t, currentUserActivity: n, idx: r, variant: l } = e,
        o = (0, d.e7)([L.default], () => L.default.getUser(t.author_id)),
        a = (0, d.e7)([P.Z], () => (null != o ? P.Z.getAnyStreamForUser(o.id) : null), [o]),
        { isMobileOnline: s, status: c } = (0, d.cj)(
            [D.Z],
            () =>
                null == o
                    ? {
                          isMobileOnline: void 0,
                          status: void 0,
                      }
                    : {
                          isMobileOnline: D.Z.isMobileOnline(o.id),
                          status: D.Z.getStatus(o.id),
                      },
            [o],
        );
    return null == o
        ? null
        : (0, i.jsxs)("div", {
              className: Y.row,
              children: [
                  (0, i.jsx)(O.Z, {
                      className: Y.avatar,
                      user: o,
                      isMobile: s,
                      status: c,
                  }),
                  (0, i.jsxs)("div", {
                      className: Y.details,
                      children: [
                          (0, i.jsxs)("div", {
                              className: Y.usernameWrapper,
                              children: [
                                  (0, i.jsx)(p.Text, {
                                      className: Y.username,
                                      variant: "text-md/medium",
                                      color: "header-primary",
                                      children: V.ZP.getName(void 0, void 0, o),
                                  }),
                                  null != a && (0, i.jsx)(_.ZP, { className: Y.liveIndicator }),
                              ],
                          }),
                          (0, i.jsx)(S.Gk, {
                              location: S.Gt.OVERLAY,
                              className: Y.badgesContainer,
                              children: [S.OV, S.wO, S.f, S.v1, S.pQ].map((e, n) =>
                                  (0, i.jsx)(e, { entry: t }, "entry-".concat(n)),
                              ),
                          }),
                      ],
                  }),
                  (0, i.jsxs)("div", {
                      className: Y.inviteButtons,
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
    let { entries: t, currentUserActivity: n, className: l, hideHeader: o = !1, variant: a = "default" } = e,
        s = (0, W.ee)(() => $(t), [t]),
        u = (0, W.ee)(
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
                                return t === c.N.IS_LIVE;
                            })
                        );
                    }),
                ),
            [t],
        ),
        d = (0, W.ee)(() => new Set(t.map((e) => e.id)), [t]);
    return (r.useEffect(() => {
        (0, W.zi)(F.Odu.ACTIVITY, {
            locked: z.default.isInstanceLocked(),
            shownUserIds: Array.from(s),
            liveUserIds: Array.from(u),
            contentInventoryIds: Array.from(d),
        });
    }, [s, u, d]),
    0 === t.length)
        ? null
        : (0, i.jsxs)("div", {
              className: l,
              children: [
                  !o &&
                      (0, i.jsx)("div", {
                          className: Y.contentInventoryHeader,
                          children: (0, i.jsx)(p.Text, {
                              variant: "text-xs/medium",
                              color: "subtle" === a ? "text-subtle" : "text-default",
                              tag: "div",
                              children: B.intl.string(B.t.y9eo7a),
                          }),
                      }),
                  t.map((e, t) =>
                      (0, i.jsx)(
                          q,
                          {
                              idx: t,
                              entry: e,
                              currentUserActivity: n,
                              variant: a,
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
    (0, v.ZP)(() => {
        (0, N._)();
    });
    let o = (0, d.e7)([k.Z], () => (null == t ? null : k.Z.getApplicationActivity(t)), [t]),
        u = (0, d.Wu)([M.Z, R.Z, w.Z], () => {
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
                        i = R.Z.isFriend(t);
                    return (function (e, t, n) {
                        let { v2: i } = n;
                        if (null == e) return t;
                        let {
                            communicationProbability: r,
                            dmProbability: l,
                            serverMessageProbability: o,
                            vcProbability: a,
                        } = e;
                        switch (!0) {
                            case r > i:
                            case l > i:
                            case o > i:
                            case a > i:
                                return !0;
                            default:
                                return t;
                        }
                    })(w.Z.getUserAffinity(t), i, n);
                });
        }, [t, i]);
    return (
        (0, v.ZP)(() => (C.L(), () => C.v())),
        {
            entries: r.useMemo(() => {
                let e = l.filter((e) => !u.some((t) => t.activityUser.id === e.author_id)),
                    t = [
                        ...u.map((e) =>
                            (function (e) {
                                var t, n, i, r, l, o, u;
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
                                            null != (o = null == (i = e.activity) ? void 0 : i.name) ? o : e.game.name,
                                        application_id:
                                            null != (u = null == (r = e.activity) ? void 0 : r.application_id)
                                                ? u
                                                : e.game.id,
                                        fake_inventory_item: !0,
                                    },
                                    content_type: s.s.PLAYED_GAME,
                                    author_type: a.i.USER,
                                    participants: e.playingMembers.map((e) => e.id),
                                    traits: [
                                        {
                                            type: c.N.IS_LIVE,
                                            is_live: !0,
                                        },
                                    ],
                                };
                            })(e),
                        ),
                        ...e,
                    ];
                return null != n ? t.slice(0, n) : t;
            }, [l, u, n]),
            currentUserActivity: o,
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
        l = null != t && (0, E.Z)(t, F.xjy.JOIN),
        o = (0, b.q)(null == t ? void 0 : t.application_id),
        a = null != o && (0, u.yE)(o.flags, F.udG.EMBEDDED);
    return null == t || null == n
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(T.Z, {
                      className: Y.activityCard,
                      activity: t,
                      user: n,
                      currentUser: n,
                      appContext: F.IlC.OVERLAY,
                  }),
                  l && !a && r
                      ? (0, i.jsx)("div", {
                            className: Y.inviteFriendsButton,
                            children: (0, i.jsx)(p.Button, {
                                text: B.intl.string(B.t["6Qgrev"]),
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
        o = (0, I.Z)(r),
        a = (0, d.e7)([L.default], () => L.default.getCurrentUser()),
        s = null != l ? l : r,
        c = (0, d.e7)([k.Z], () => (null == s ? null : k.Z.getApplicationActivity(s)), [s]);
    (0, v.ZP)(() => (C.L(), () => C.v()));
    let u = et({
        gamingId: s,
        userAffinityThresholdV2: 0.00145,
        maxUserShowCount: 12,
    });
    return t || (0 === o.length && null == c)
        ? null
        : (0, i.jsxs)("div", {
              className: Y.container,
              children: [
                  (0, i.jsx)(ei, {
                      activity: c,
                      currentUser: a,
                  }),
                  (0, i.jsx)(
                      ee,
                      K(Q({}, u), {
                          className: Y.contentInventoryContainer,
                          hideHeader: !0,
                      }),
                  ),
              ],
          });
}
