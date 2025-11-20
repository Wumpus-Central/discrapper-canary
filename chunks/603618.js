n.d(t, {
    ZP: () => el,
    lE: () => er,
    lX: () => ei,
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
    p = n(755721),
    f = n(481060),
    m = n(278323),
    g = n(24124),
    y = n(493683),
    O = n(13245),
    v = n(99690),
    E = n(493773),
    b = n(620662),
    _ = n(835473),
    S = n(194082),
    x = n(297781),
    I = n(656709),
    C = n(692701),
    j = n(887413),
    N = n(225559),
    Z = n(703656),
    w = n(93127),
    T = n(752048),
    P = n(409057),
    A = n(199902),
    k = n(592125),
    D = n(293273),
    R = n(158776),
    L = n(699516),
    M = n(594174),
    z = n(801077),
    V = n(237997),
    U = n(5192),
    W = n(709054),
    G = n(444295),
    F = n(388627),
    B = n(981631),
    H = n(959517),
    Y = n(388032),
    Q = n(847121);
function K(e) {
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
function X(e, t) {
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
function J(e) {
    let { entry: t, currentUserActivity: n, idx: l, variant: a } = e,
        s = (0, d.e7)([M.default], () => M.default.getUser(t.author_id)),
        [c, u] = r.useState("unsent"),
        [g, v] = r.useState(!1);
    r.useEffect(() => {
        if ("sent" === c) {
            let e = setTimeout(() => v(!0), 2000);
            return () => clearTimeout(e);
        }
    }, [c]);
    let E = null != n && (0, b.Z)(n, B.xjy.JOIN),
        _ = async (e) => {
            if (null != s && "unsent" === c) {
                e.stopPropagation();
                try {
                    if ((u("sending"), E))
                        await m.Z.sendActivityInviteUser({
                            type: B.mFx.JOIN,
                            userId: s.id,
                            activity: n,
                            location: B.Sbl.UNLOCKED_OVERLAY,
                        });
                    else {
                        var i;
                        let e = await y.Z.getOrEnsurePrivateChannel(s.id),
                            n = null != (i = k.Z.getChannel(e)) ? i : null;
                        o()(null != n, "Send channel must be defined"),
                            (0, Z.uL)(B.Z5c.CHANNEL(n.guild_id, n.id)),
                            (0, j.i)(B.IlC.OVERLAY, !0),
                            !0 === t.extra.fake_inventory_item
                                ? await (0, I.k)({
                                      channel: n,
                                      content: Y.intl.formatToPlainString(Y.t.UVBA9g, { gameName: t.extra.game_name }),
                                      whenReady: !0,
                                      doNotNotifyOnError: !1,
                                      location: H.dy.OVERLAY,
                                  })
                                : await (0, I.p)({
                                      channel: n,
                                      content: Y.intl.string(Y.t.DwAcMz),
                                      entry: t,
                                      whenReady: !0,
                                      doNotNotifyOnError: !1,
                                      location: H.dy.OVERLAY,
                                  });
                    }
                    O.Z.track(B.rMx.OVERLAY_GAME_INVITE_SENT, {
                        target_user_id: s.id,
                        target_content_entry_id: t.id,
                        target_index: l,
                    }),
                        (0, G.Ws)(B.Odu.ACTIVITY, {
                            type: G.Qu.INVITE,
                            value: G.bk.INVITE_SENT,
                            userId: s.id,
                        }),
                        u("sent");
                } catch (e) {
                    u("unsent");
                }
            }
        },
        S = async () => {
            var e;
            if (null == s) return;
            let t = await y.Z.getOrEnsurePrivateChannel(s.id),
                n = null != (e = k.Z.getChannel(t)) ? e : null;
            o()(null != n, "Send channel must be defined"),
                (0, Z.uL)(B.Z5c.CHANNEL(n.guild_id, n.id)),
                (0, j.i)(B.IlC.OVERLAY, !0),
                (0, G.Ws)(B.Odu.ACTIVITY, {
                    type: G.Qu.REDIRECT,
                    value: G.bk.CHAT,
                    userId: s.id,
                });
        },
        x = "subtle" === a ? f.TVs.colors.ICON_SECONDARY : "currentColor",
        C = E ? Y.intl.string(Y.t["3fRySx"]) : Y.intl.string(Y.t.XHxDIV),
        N = E
            ? (0, i.jsx)(f.ejJ, {
                  color: x,
                  size: "sm",
              })
            : (0, i.jsx)(f.Uuj, {
                  color: x,
                  size: "sm",
              });
    return (0, i.jsx)(h.u, {
        text: C,
        "aria-label": C,
        children: (0, i.jsx)(p.zx, {
            submitting: "sending" === c,
            onClick: g ? S : _,
            className: "subtle" === a ? Q.inviteButtonSubtle : Q.inviteButton,
            wrapperClassName: Q.inviteButtonWrapper,
            innerClassName: Q.inviteButtonInner,
            color: p.Tt.TRANSPARENT,
            look: "subtle" === a ? p.iL.BLANK : p.iL.FILLED,
            size: p.Ph.ICON,
            grow: !1,
            children:
                "sent" === c
                    ? g
                        ? (0, i.jsx)(f.kBi, {
                              color: x,
                              size: "sm",
                          })
                        : (0, i.jsx)(f.kSu, {
                              color: x,
                              size: "sm",
                          })
                    : N,
        }),
    });
}
function q(e) {
    var t;
    let { entry: n, currentUserActivity: l, variant: o } = e,
        a = (0, d.e7)([M.default], () => M.default.getUser(n.author_id)),
        s = null != (t = null == l ? void 0 : l.application_id) ? t : n.extra.application_id,
        c = (0, d.e7)([R.Z], () => (null != a ? R.Z.getApplicationActivity(a.id, s) : null), [s, a]),
        [u, g] = r.useState("unsent");
    if (!(null != c && (0, b.Z)(c, B.xjy.JOIN))) return null;
    let y = async (e) => {
            if (null != a && "unsent" === u) {
                e.stopPropagation();
                try {
                    g("sending"),
                        await m.Z.sendActivityInviteUser({
                            type: B.mFx.JOIN_REQUEST,
                            userId: a.id,
                            activity: c,
                            location: B.Sbl.UNLOCKED_OVERLAY,
                        }),
                        (0, G.Ws)(B.Odu.ACTIVITY, {
                            type: G.Qu.INVITE,
                            value: G.bk.JOIN_REQUEST_SENT,
                            userId: a.id,
                        }),
                        g("sent");
                } catch (e) {
                    g("unsent");
                }
            }
        },
        O = "subtle" === o ? f.TVs.colors.ICON_SECONDARY : "currentColor",
        v = Y.intl.string(Y.t.OKsSCR);
    return (0, i.jsx)(h.u, {
        text: v,
        "aria-label": v,
        children: (0, i.jsx)(p.zx, {
            submitting: "sending" === u,
            onClick: y,
            className: "subtle" === o ? Q.inviteButtonSubtle : Q.inviteButton,
            wrapperClassName: Q.inviteButtonWrapper,
            innerClassName: Q.inviteButtonInner,
            color: p.Tt.TRANSPARENT,
            look: "subtle" === o ? p.iL.BLANK : p.iL.FILLED,
            size: p.Ph.ICON,
            grow: !1,
            children:
                "sent" === u
                    ? (0, i.jsx)(f.kSu, {
                          color: O,
                          size: "sm",
                      })
                    : (0, i.jsx)(f.V9, {
                          color: O,
                          size: "sm",
                      }),
        }),
    });
}
function $(e) {
    let { entry: t, currentUserActivity: n, idx: r, variant: l } = e,
        o = (0, d.e7)([M.default], () => M.default.getUser(t.author_id)),
        a = (0, d.e7)([A.Z], () => (null != o ? A.Z.getAnyStreamForUser(o.id) : null), [o]),
        { isMobileOnline: s, status: c } = (0, d.cj)(
            [R.Z],
            () =>
                null == o
                    ? {
                          isMobileOnline: void 0,
                          status: void 0,
                      }
                    : {
                          isMobileOnline: R.Z.isMobileOnline(o.id),
                          status: R.Z.getStatus(o.id),
                      },
            [o],
        );
    return null == o
        ? null
        : (0, i.jsxs)("div", {
              className: Q.row,
              children: [
                  (0, i.jsx)(v.Z, {
                      className: Q.avatar,
                      user: o,
                      isMobile: s,
                      status: c,
                  }),
                  (0, i.jsxs)("div", {
                      className: Q.details,
                      children: [
                          (0, i.jsxs)("div", {
                              className: Q.usernameWrapper,
                              children: [
                                  (0, i.jsx)(f.Text, {
                                      className: Q.username,
                                      variant: "text-md/medium",
                                      color: "header-primary",
                                      children: U.ZP.getName(void 0, void 0, o),
                                  }),
                                  null != a && (0, i.jsx)(S.ZP, { className: Q.liveIndicator }),
                              ],
                          }),
                          (0, i.jsx)(x.Gk, {
                              location: x.Gt.OVERLAY,
                              className: Q.badgesContainer,
                              children: [x.OV, x.wO, x.f, x.v1, x.pQ].map((e, n) =>
                                  (0, i.jsx)(e, { entry: t }, "entry-".concat(n)),
                              ),
                          }),
                      ],
                  }),
                  (0, i.jsx)(q, {
                      entry: t,
                      currentUserActivity: n,
                      idx: r,
                      variant: l,
                  }),
                  (0, i.jsx)(J, {
                      entry: t,
                      currentUserActivity: n,
                      idx: r,
                      variant: l,
                  }),
              ],
          });
}
function ee(e) {
    return new Set(e.map((e) => e.author_id));
}
function et(e) {
    let { entries: t, currentUserActivity: n, className: l, hideHeader: o = !1, variant: a = "default" } = e,
        s = (0, G.ee)(() => ee(t), [t]),
        u = (0, G.ee)(
            () =>
                new Set(
                    Array.from(ee(t)).filter((e) => {
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
        d = (0, G.ee)(() => new Set(t.map((e) => e.id)), [t]);
    return (r.useEffect(() => {
        (0, G.zi)(B.Odu.ACTIVITY, {
            locked: V.default.isInstanceLocked(),
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
                          className: Q.contentInventoryHeader,
                          children: (0, i.jsx)(f.Text, {
                              variant: "text-xs/medium",
                              color: "subtle" === a ? "text-secondary" : "header-secondary",
                              tag: "div",
                              children: Y.intl.string(Y.t.y9eo7a),
                          }),
                      }),
                  t.map((e, t) =>
                      (0, i.jsx)(
                          $,
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
function en(e) {
    let { gamingId: t, maxUserShowCount: n, userAffinityThresholdV2: i = 0.0029 } = e,
        l = (0, C.Z)(t);
    (0, E.ZP)(() => {
        (0, w._)();
    });
    let o = (0, d.e7)([D.Z], () => (null == t ? null : D.Z.getApplicationActivity(t)), [t]),
        u = (0, d.Wu)([z.Z, L.Z, T.Z], () => {
            if (null == t) return [];
            let e = z.Z.nowPlayingCards,
                n = { v2: i };
            return e
                .reduce((e, n) => {
                    if (n.type !== B.GOo.USER) return e;
                    let i = n.party.currentActivities;
                    if (0 === i.length) return e;
                    for (let n of i) n.game.id === t && null != n.activity && e.push(n);
                    return e;
                }, [])
                .filter((e) => {
                    let t = e.activityUser.id,
                        i = L.Z.isFriend(t);
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
                    })(T.Z.getUserAffinity(t), i, n);
                });
        }, [t, i]);
    return (
        (0, E.ZP)(() => (N.L(), () => N.v())),
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
                                    id: W.default.fromTimestamp(d),
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
function ei(e) {
    let t = en(e);
    return (0, i.jsx)(
        et,
        X(K({}, t), {
            className: e.className,
            variant: e.variant,
        }),
    );
}
function er(e) {
    let { activity: t, currentUser: n, showInviteButton: r = !0 } = e,
        l = null != t && (0, b.Z)(t, B.xjy.JOIN),
        o = (0, _.q)(null == t ? void 0 : t.application_id),
        a = null != o && (0, u.yE)(o.flags, B.udG.EMBEDDED);
    return null == t || null == n
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(P.Z, {
                      className: Q.activityCard,
                      activity: t,
                      user: n,
                      currentUser: n,
                      appContext: B.IlC.OVERLAY,
                  }),
                  l && !a && r
                      ? (0, i.jsx)(p.zx, {
                            className: Q.inviteFriendsButton,
                            onClick: () => {
                                (0, g.h7)(t, !1, B.IlC.POPOUT),
                                    (0, G.Ws)(B.Odu.ACTIVITY, {
                                        type: G.Qu.INVITE,
                                        value: G.bk.PANEL_OPENED,
                                    });
                            },
                            size: p.Ph.SMALL,
                            color: p.Tt.PRIMARY,
                            children: Y.intl.string(Y.t["6Qgrev"]),
                        })
                      : null,
              ],
          });
}
function el(e) {
    let { locked: t } = e,
        n = (0, F.II)(),
        r = null == n ? void 0 : n.id,
        l = null == n ? void 0 : n.altId,
        o = (0, C.Z)(r),
        a = (0, d.e7)([M.default], () => M.default.getCurrentUser()),
        s = null != l ? l : r,
        c = (0, d.e7)([D.Z], () => (null == s ? null : D.Z.getApplicationActivity(s)), [s]);
    (0, E.ZP)(() => (N.L(), () => N.v()));
    let u = en({
        gamingId: s,
        userAffinityThresholdV2: 0.00145,
        maxUserShowCount: 12,
    });
    return t || (0 === o.length && null == c)
        ? null
        : (0, i.jsxs)("div", {
              className: Q.container,
              children: [
                  (0, i.jsx)(er, {
                      activity: c,
                      currentUser: a,
                  }),
                  (0, i.jsx)(
                      et,
                      X(K({}, u), {
                          className: Q.contentInventoryContainer,
                          hideHeader: !0,
                      }),
                  ),
              ],
          });
}
