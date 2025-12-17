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
    a = n(512722),
    l = n.n(a),
    o = n(661869),
    s = n(876215),
    c = n(884439),
    u = n(95015),
    d = n(442837),
    f = n(28664),
    h = n(481060),
    p = n(278323),
    m = n(24124),
    g = n(493683),
    b = n(13245),
    y = n(99690),
    O = n(493773),
    v = n(620662),
    E = n(835473),
    S = n(194082),
    x = n(297781),
    I = n(656709),
    C = n(692701),
    j = n(887413),
    _ = n(225559),
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
    Y = n(703863);
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
        { entry: n, currentUserActivity: a, idx: o, variant: s } = e,
        c = (0, d.e7)([L.default], () => L.default.getUser(n.author_id)),
        [u, m] = r.useState("unsent"),
        [y, O] = r.useState(!1);
    r.useEffect(() => {
        if ("sent" === u) {
            let e = setTimeout(() => O(!0), 2000);
            return () => clearTimeout(e);
        }
    }, [u]);
    let E = null != a && (0, v.Z)(a, F.xjy.JOIN),
        S = async (e) => {
            if (null != c && "unsent" === u) {
                e.stopPropagation();
                try {
                    if ((m("sending"), E))
                        await p.Z.sendActivityInviteUser({
                            type: F.mFx.JOIN,
                            userId: c.id,
                            activity: a,
                            location: F.Sbl.UNLOCKED_OVERLAY,
                        });
                    else {
                        var t;
                        let e = await g.Z.getOrEnsurePrivateChannel(c.id),
                            i = null != (t = A.Z.getChannel(e)) ? t : null;
                        l()(null != i, "Send channel must be defined"),
                            (0, Z.uL)(F.Z5c.CHANNEL(i.guild_id, i.id)),
                            (0, j.i)(F.IlC.OVERLAY, !0),
                            !0 === n.extra.fake_inventory_item
                                ? await (0, I.k)({
                                      channel: i,
                                      content: B.intl.formatToPlainString(B.t.UVBA9g, { gameName: n.extra.game_name }),
                                      whenReady: !0,
                                      doNotNotifyOnError: !1,
                                      location: H.dy.OVERLAY,
                                  })
                                : await (0, I.p)({
                                      channel: i,
                                      content: B.intl.string(B.t.DwAcMz),
                                      entry: n,
                                      whenReady: !0,
                                      doNotNotifyOnError: !1,
                                      location: H.dy.OVERLAY,
                                  });
                    }
                    b.Z.track(F.rMx.OVERLAY_GAME_INVITE_SENT, {
                        target_user_id: c.id,
                        target_content_entry_id: n.id,
                        target_index: o,
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
        x = async () => {
            var e;
            if (null == c) return;
            let t = await g.Z.getOrEnsurePrivateChannel(c.id),
                n = null != (e = A.Z.getChannel(t)) ? e : null;
            l()(null != n, "Send channel must be defined"),
                (0, Z.uL)(F.Z5c.CHANNEL(n.guild_id, n.id)),
                (0, j.i)(F.IlC.OVERLAY, !0),
                (0, W.Ws)(F.Odu.ACTIVITY, {
                    type: W.Qu.REDIRECT,
                    value: W.bk.CHAT,
                    userId: c.id,
                });
        },
        C = E ? B.intl.string(B.t["3fRySx"]) : B.intl.string(B.t.XHxDIV);
    return (
        (t = "sent" === u ? (y ? h.kBi : h.kSu) : E ? h.ejJ : h.Uuj),
        (0, i.jsx)(f.u, {
            text: C,
            "aria-label": C,
            children: (0, i.jsx)(h.hU, {
                icon: t,
                "aria-label": C,
                loading: "sending" === u,
                onClick: y ? x : S,
                variant: "subtle" === s ? "icon-only" : "secondary",
                size: "sm",
            }),
        })
    );
}
function J(e) {
    var t;
    let { entry: n, currentUserActivity: a, variant: l } = e,
        o = (0, d.e7)([L.default], () => L.default.getUser(n.author_id)),
        s = null != (t = null == a ? void 0 : a.application_id) ? t : n.extra.application_id,
        c = (0, d.e7)([D.Z], () => (null != o ? D.Z.getApplicationActivity(o.id, s) : null), [s, o]),
        [u, m] = r.useState("unsent");
    if (!(null != c && (0, v.Z)(c, F.xjy.JOIN))) return null;
    let g = async (e) => {
            if (null != o && "unsent" === u) {
                e.stopPropagation();
                try {
                    m("sending"),
                        await p.Z.sendActivityInviteUser({
                            type: F.mFx.JOIN_REQUEST,
                            userId: o.id,
                            activity: c,
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
        b = B.intl.string(B.t.OKsSCR);
    return (0, i.jsx)(f.u, {
        text: b,
        "aria-label": b,
        children: (0, i.jsx)(h.hU, {
            icon: "sent" === u ? h.kSu : h.V9,
            "aria-label": b,
            loading: "sending" === u,
            onClick: g,
            variant: "subtle" === l ? "icon-only" : "secondary",
            size: "sm",
        }),
    });
}
function q(e) {
    let { entry: t, currentUserActivity: n, idx: r, variant: a } = e,
        l = (0, d.e7)([L.default], () => L.default.getUser(t.author_id)),
        o = (0, d.e7)([P.Z], () => (null != l ? P.Z.getAnyStreamForUser(l.id) : null), [l]),
        { isMobileOnline: s, status: c } = (0, d.cj)(
            [D.Z],
            () =>
                null == l
                    ? {
                          isMobileOnline: void 0,
                          status: void 0,
                      }
                    : {
                          isMobileOnline: D.Z.isMobileOnline(l.id),
                          status: D.Z.getStatus(l.id),
                      },
            [l],
        );
    return null == l
        ? null
        : (0, i.jsxs)("div", {
              className: Y.row,
              children: [
                  (0, i.jsx)(y.Z, {
                      className: Y.avatar,
                      user: l,
                      isMobile: s,
                      status: c,
                  }),
                  (0, i.jsxs)("div", {
                      className: Y.details,
                      children: [
                          (0, i.jsxs)("div", {
                              className: Y.usernameWrapper,
                              children: [
                                  (0, i.jsx)(h.Text, {
                                      className: Y.username,
                                      variant: "text-md/medium",
                                      color: "text-strong",
                                      children: V.ZP.getName(void 0, void 0, l),
                                  }),
                                  null != o && (0, i.jsx)(S.ZP, { className: Y.liveIndicator }),
                              ],
                          }),
                          (0, i.jsx)(x.Gk, {
                              location: x.Gt.OVERLAY,
                              className: Y.badgesContainer,
                              children: [x.OV, x.wO, x.f, x.v1, x.pQ].map((e, n) =>
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
                              variant: a,
                          }),
                          (0, i.jsx)(X, {
                              entry: t,
                              currentUserActivity: n,
                              idx: r,
                              variant: a,
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
    let { entries: t, currentUserActivity: n, className: a, hideHeader: l = !1, variant: o = "default" } = e,
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
              className: a,
              children: [
                  !l &&
                      (0, i.jsx)("div", {
                          className: Y.contentInventoryHeader,
                          children: (0, i.jsx)(h.Text, {
                              variant: "text-xs/medium",
                              color: "subtle" === o ? "text-subtle" : "text-default",
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
        a = (0, C.Z)(t);
    (0, O.ZP)(() => {
        (0, N._)();
    });
    let l = (0, d.e7)([k.Z], () => (null == t ? null : k.Z.getApplicationActivity(t)), [t]),
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
                            dmProbability: a,
                            serverMessageProbability: l,
                            vcProbability: o,
                        } = e;
                        switch (!0) {
                            case r > i:
                            case a > i:
                            case l > i:
                            case o > i:
                                return !0;
                            default:
                                return t;
                        }
                    })(w.Z.getUserAffinity(t), i, n);
                });
        }, [t, i]);
    return (
        (0, O.ZP)(() => (_.L(), () => _.v())),
        {
            entries: r.useMemo(() => {
                let e = a.filter((e) => !u.some((t) => t.activityUser.id === e.author_id)),
                    t = [
                        ...u.map((e) =>
                            (function (e) {
                                var t, n, i, r, a, l, u;
                                let d =
                                    null !=
                                    (a = null == (n = e.activity) || null == (t = n.timestamps) ? void 0 : t.start)
                                        ? a
                                        : Date.now();
                                return {
                                    id: U.default.fromTimestamp(d),
                                    author_id: e.activityUser.id,
                                    extra: {
                                        type: "played_game_extra",
                                        game_name:
                                            null != (l = null == (i = e.activity) ? void 0 : i.name) ? l : e.game.name,
                                        application_id:
                                            null != (u = null == (r = e.activity) ? void 0 : r.application_id)
                                                ? u
                                                : e.game.id,
                                        fake_inventory_item: !0,
                                    },
                                    content_type: s.s.PLAYED_GAME,
                                    author_type: o.i.USER,
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
            }, [a, u, n]),
            currentUserActivity: l,
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
        a = null != t && (0, v.Z)(t, F.xjy.JOIN),
        l = (0, E.q)(null == t ? void 0 : t.application_id),
        o = null != l && (0, u.yE)(l.flags, F.udG.EMBEDDED);
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
                  a && !o && r
                      ? (0, i.jsx)("div", {
                            className: Y.inviteFriendsButton,
                            children: (0, i.jsx)(h.Button, {
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
        a = null == n ? void 0 : n.altId,
        l = (0, C.Z)(r),
        o = (0, d.e7)([L.default], () => L.default.getCurrentUser()),
        s = null != a ? a : r,
        c = (0, d.e7)([k.Z], () => (null == s ? null : k.Z.getApplicationActivity(s)), [s]);
    (0, O.ZP)(() => (_.L(), () => _.v()));
    let u = et({
        gamingId: s,
        userAffinityThresholdV2: 0.00145,
        maxUserShowCount: 12,
    });
    return t || (0 === l.length && null == c)
        ? null
        : (0, i.jsxs)("div", {
              className: Y.container,
              children: [
                  (0, i.jsx)(ei, {
                      activity: c,
                      currentUser: o,
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
