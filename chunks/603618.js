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
    u = n(442837),
    d = n(28664),
    h = n(755721),
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
    C = n(887413),
    j = n(225559),
    N = n(703656),
    Z = n(93127),
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
    V = n(630388),
    U = n(5192),
    W = n(709054),
    G = n(444295),
    F = n(388627),
    B = n(981631),
    H = n(959517),
    Y = n(388032),
    Q = n(988486);
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
        s = (0, u.e7)([L.default], () => L.default.getUser(t.author_id)),
        [c, m] = r.useState("unsent"),
        [O, v] = r.useState(!1);
    r.useEffect(() => {
        if ("sent" === c) {
            let e = setTimeout(() => v(!0), 2000);
            return () => clearTimeout(e);
        }
    }, [c]);
    let b = null != n && (0, E.Z)(n, B.xjy.JOIN),
        _ = async (e) => {
            if (null != s && "unsent" === c) {
                e.stopPropagation();
                try {
                    if ((m("sending"), b))
                        await f.Z.sendActivityInviteUser({
                            type: B.mFx.JOIN,
                            userId: s.id,
                            activity: n,
                            location: B.Sbl.UNLOCKED_OVERLAY,
                        });
                    else {
                        var i;
                        let e = await g.Z.getOrEnsurePrivateChannel(s.id),
                            n = null != (i = A.Z.getChannel(e)) ? i : null;
                        o()(null != n, "Send channel must be defined"),
                            (0, N.uL)(B.Z5c.CHANNEL(n.guild_id, n.id)),
                            (0, C.i)(B.IlC.OVERLAY, !0),
                            !0 === t.extra.fake_inventory_item
                                ? await (0, x.k)({
                                      channel: n,
                                      content: Y.intl.formatToPlainString(Y.t.UVBA9g, { gameName: t.extra.game_name }),
                                      whenReady: !0,
                                      doNotNotifyOnError: !1,
                                      location: H.dy.OVERLAY,
                                  })
                                : await (0, x.p)({
                                      channel: n,
                                      content: Y.intl.string(Y.t.DwAcMz),
                                      entry: t,
                                      whenReady: !0,
                                      doNotNotifyOnError: !1,
                                      location: H.dy.OVERLAY,
                                  });
                    }
                    y.Z.track(B.rMx.OVERLAY_GAME_INVITE_SENT, {
                        target_user_id: s.id,
                        target_content_entry_id: t.id,
                        target_index: l,
                    }),
                        (0, G.Ws)(B.Odu.ACTIVITY, {
                            type: G.Qu.INVITE,
                            value: G.bk.INVITE_SENT,
                            userId: s.id,
                        }),
                        m("sent");
                } catch (e) {
                    m("unsent");
                }
            }
        },
        S = async () => {
            var e;
            if (null == s) return;
            let t = await g.Z.getOrEnsurePrivateChannel(s.id),
                n = null != (e = A.Z.getChannel(t)) ? e : null;
            o()(null != n, "Send channel must be defined"),
                (0, N.uL)(B.Z5c.CHANNEL(n.guild_id, n.id)),
                (0, C.i)(B.IlC.OVERLAY, !0),
                (0, G.Ws)(B.Odu.ACTIVITY, {
                    type: G.Qu.REDIRECT,
                    value: G.bk.CHAT,
                    userId: s.id,
                });
        },
        I = "subtle" === a ? p.TVs.colors.ICON_SECONDARY : "currentColor",
        j = b ? Y.intl.string(Y.t["3fRySx"]) : Y.intl.string(Y.t.XHxDIV),
        Z = b
            ? (0, i.jsx)(p.ejJ, {
                  color: I,
                  size: "sm",
              })
            : (0, i.jsx)(p.Uuj, {
                  color: I,
                  size: "sm",
              });
    return (0, i.jsx)(d.u, {
        text: j,
        "aria-label": j,
        children: (0, i.jsx)(h.zx, {
            submitting: "sending" === c,
            onClick: O ? S : _,
            className: "subtle" === a ? Q.inviteButtonSubtle : Q.inviteButton,
            wrapperClassName: Q.inviteButtonWrapper,
            innerClassName: Q.inviteButtonInner,
            color: h.Tt.TRANSPARENT,
            look: "subtle" === a ? h.iL.BLANK : h.iL.FILLED,
            size: h.Ph.ICON,
            grow: !1,
            children:
                "sent" === c
                    ? O
                        ? (0, i.jsx)(p.kBi, {
                              color: I,
                              size: "sm",
                          })
                        : (0, i.jsx)(p.kSu, {
                              color: I,
                              size: "sm",
                          })
                    : Z,
        }),
    });
}
function q(e) {
    var t;
    let { entry: n, currentUserActivity: l, variant: o } = e,
        a = (0, u.e7)([L.default], () => L.default.getUser(n.author_id)),
        s = null != (t = null == l ? void 0 : l.application_id) ? t : n.extra.application_id,
        c = (0, u.e7)([D.Z], () => (null != a ? D.Z.getApplicationActivity(a.id, s) : null), [s, a]),
        [m, g] = r.useState("unsent");
    if (!(null != c && (0, E.Z)(c, B.xjy.JOIN))) return null;
    let y = async (e) => {
            if (null != a && "unsent" === m) {
                e.stopPropagation();
                try {
                    g("sending"),
                        await f.Z.sendActivityInviteUser({
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
        O = "subtle" === o ? p.TVs.colors.ICON_SECONDARY : "currentColor",
        v = Y.intl.string(Y.t.OKsSCR);
    return (0, i.jsx)(d.u, {
        text: v,
        "aria-label": v,
        children: (0, i.jsx)(h.zx, {
            submitting: "sending" === m,
            onClick: y,
            className: "subtle" === o ? Q.inviteButtonSubtle : Q.inviteButton,
            wrapperClassName: Q.inviteButtonWrapper,
            innerClassName: Q.inviteButtonInner,
            color: h.Tt.TRANSPARENT,
            look: "subtle" === o ? h.iL.BLANK : h.iL.FILLED,
            size: h.Ph.ICON,
            grow: !1,
            children:
                "sent" === m
                    ? (0, i.jsx)(p.kSu, {
                          color: O,
                          size: "sm",
                      })
                    : (0, i.jsx)(p.V9, {
                          color: O,
                          size: "sm",
                      }),
        }),
    });
}
function $(e) {
    let { entry: t, currentUserActivity: n, idx: r, variant: l } = e,
        o = (0, u.e7)([L.default], () => L.default.getUser(t.author_id)),
        a = (0, u.e7)([P.Z], () => (null != o ? P.Z.getAnyStreamForUser(o.id) : null), [o]),
        { isMobileOnline: s, status: c } = (0, u.cj)(
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
              className: Q.row,
              children: [
                  (0, i.jsx)(O.Z, {
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
                                  (0, i.jsx)(p.Text, {
                                      className: Q.username,
                                      variant: "text-md/medium",
                                      color: "header-primary",
                                      children: U.ZP.getName(void 0, void 0, o),
                                  }),
                                  null != a && (0, i.jsx)(_.ZP, { className: Q.liveIndicator }),
                              ],
                          }),
                          (0, i.jsx)(S.Gk, {
                              location: S.Gt.OVERLAY,
                              className: Q.badgesContainer,
                              children: [S.OV, S.wO, S.f, S.v1, S.pQ].map((e, n) =>
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
                          className: Q.contentInventoryHeader,
                          children: (0, i.jsx)(p.Text, {
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
        l = (0, I.Z)(t);
    (0, v.ZP)(() => {
        (0, Z._)();
    });
    let o = (0, u.e7)([k.Z], () => (null == t ? null : k.Z.getApplicationActivity(t)), [t]),
        d = (0, u.Wu)([M.Z, R.Z, w.Z], () => {
            if (null == t) return [];
            let e = M.Z.nowPlayingCards,
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
        (0, v.ZP)(() => (j.L(), () => j.v())),
        {
            entries: r.useMemo(() => {
                let e = l.filter((e) => !d.some((t) => t.activityUser.id === e.author_id)),
                    t = [
                        ...d.map((e) =>
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
            }, [l, d, n]),
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
        l = null != t && (0, E.Z)(t, B.xjy.JOIN),
        o = (0, b.q)(null == t ? void 0 : t.application_id),
        a = null != o && (0, V.yE)(o.flags, B.udG.EMBEDDED);
    return null == t || null == n
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(T.Z, {
                      className: Q.activityCard,
                      activity: t,
                      user: n,
                      currentUser: n,
                      appContext: B.IlC.OVERLAY,
                  }),
                  l && !a && r
                      ? (0, i.jsx)(h.zx, {
                            className: Q.inviteFriendsButton,
                            onClick: () => {
                                (0, m.h7)(t, !1, B.IlC.POPOUT),
                                    (0, G.Ws)(B.Odu.ACTIVITY, {
                                        type: G.Qu.INVITE,
                                        value: G.bk.PANEL_OPENED,
                                    });
                            },
                            size: h.Ph.SMALL,
                            color: h.Tt.PRIMARY,
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
        o = (0, I.Z)(r),
        a = (0, u.e7)([L.default], () => L.default.getCurrentUser()),
        s = null != l ? l : r,
        c = (0, u.e7)([k.Z], () => (null == s ? null : k.Z.getApplicationActivity(s)), [s]);
    (0, v.ZP)(() => (j.L(), () => j.v()));
    let d = en({
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
                      X(K({}, d), {
                          className: Q.contentInventoryContainer,
                          hideHeader: !0,
                      }),
                  ),
              ],
          });
}
