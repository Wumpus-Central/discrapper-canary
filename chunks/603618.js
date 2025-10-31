n.d(t, {
    ZP: () => el,
    lE: () => er,
    lX: () => ei,
}),
    n(388685),
    n(539854),
    n(997841);
var i = n(951288),
    r = n(647438),
    l = n(512722),
    o = n.n(l),
    a = n(661869),
    s = n(876215),
    u = n(884439),
    c = n(442837),
    d = n(28664),
    p = n(755721),
    h = n(481060),
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
    z = n(630388),
    U = n(5192),
    W = n(709054),
    G = n(444295),
    F = n(388627),
    H = n(981631),
    B = n(959517),
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
    let { entry: t, currentUserActivity: n, idx: l } = e,
        a = (0, c.e7)([L.default], () => L.default.getUser(t.author_id)),
        [s, u] = r.useState("unsent"),
        [m, O] = r.useState(!1);
    r.useEffect(() => {
        if ("sent" === s) {
            let e = setTimeout(() => O(!0), 2000);
            return () => clearTimeout(e);
        }
    }, [s]);
    let E = null != n && (0, v.Z)(n, H.xjy.JOIN),
        S = async (e) => {
            if (null != a && "unsent" === s) {
                e.stopPropagation();
                try {
                    if ((u("sending"), E))
                        await f.Z.sendActivityInviteUser({
                            type: H.mFx.JOIN,
                            userId: a.id,
                            activity: n,
                            location: H.Sbl.UNLOCKED_OVERLAY,
                        });
                    else {
                        var i;
                        let e = await g.Z.getOrEnsurePrivateChannel(a.id),
                            n = null != (i = A.Z.getChannel(e)) ? i : null;
                        o()(null != n, "Send channel must be defined"),
                            (0, N.uL)(H.Z5c.CHANNEL(n.guild_id, n.id)),
                            (0, C.i)(H.IlC.OVERLAY, !0),
                            !0 === t.extra.fake_inventory_item
                                ? await (0, j.k)({
                                      channel: n,
                                      content: Y.intl.formatToPlainString(Y.t.UVBA9g, { gameName: t.extra.game_name }),
                                      whenReady: !0,
                                      doNotNotifyOnError: !1,
                                      location: B.dy.OVERLAY,
                                  })
                                : await (0, j.p)({
                                      channel: n,
                                      content: Y.intl.string(Y.t.DwAcMz),
                                      entry: t,
                                      whenReady: !0,
                                      doNotNotifyOnError: !1,
                                      location: B.dy.OVERLAY,
                                  });
                    }
                    y.Z.track(H.rMx.OVERLAY_GAME_INVITE_SENT, {
                        target_user_id: a.id,
                        target_content_entry_id: t.id,
                        target_index: l,
                    }),
                        (0, G.Ws)(H.Odu.ACTIVITY, {
                            type: G.Qu.INVITE,
                            value: G.bk.INVITE_SENT,
                            userId: a.id,
                        }),
                        u("sent");
                } catch (e) {
                    u("unsent");
                }
            }
        },
        b = async () => {
            var e;
            if (null == a) return;
            let t = await g.Z.getOrEnsurePrivateChannel(a.id),
                n = null != (e = A.Z.getChannel(t)) ? e : null;
            o()(null != n, "Send channel must be defined"),
                (0, N.uL)(H.Z5c.CHANNEL(n.guild_id, n.id)),
                (0, C.i)(H.IlC.OVERLAY, !0),
                (0, G.Ws)(H.Odu.ACTIVITY, {
                    type: G.Qu.REDIRECT,
                    value: G.bk.CHAT,
                    userId: a.id,
                });
        },
        x = E ? Y.intl.string(Y.t["3fRySx"]) : Y.intl.string(Y.t.XHxDIV),
        I = E
            ? (0, i.jsx)(h.ejJ, {
                  color: "currentColor",
                  size: "sm",
              })
            : (0, i.jsx)(h.Uuj, {
                  color: "currentColor",
                  size: "sm",
              });
    return (0, i.jsx)(d.u, {
        text: x,
        "aria-label": x,
        children: (0, i.jsx)(p.zx, {
            submitting: "sending" === s,
            onClick: m ? b : S,
            className: Q.inviteButton,
            wrapperClassName: Q.inviteButtonWrapper,
            innerClassName: Q.inviteButtonInner,
            color: p.Tt.TRANSPARENT,
            look: p.iL.FILLED,
            size: p.Ph.ICON,
            grow: !1,
            children:
                "sent" === s
                    ? m
                        ? (0, i.jsx)(h.kBi, {
                              color: "currentColor",
                              size: "sm",
                          })
                        : (0, i.jsx)(h.kSu, {
                              color: "currentColor",
                              size: "sm",
                          })
                    : I,
        }),
    });
}
function q(e) {
    var t;
    let { entry: n, currentUserActivity: l } = e,
        o = (0, c.e7)([L.default], () => L.default.getUser(n.author_id)),
        a = null != (t = null == l ? void 0 : l.application_id) ? t : n.extra.application_id,
        s = (0, c.e7)([R.Z], () => (null != o ? R.Z.getApplicationActivity(o.id, a) : null), [a, o]),
        [u, m] = r.useState("unsent");
    if (!(null != s && (0, v.Z)(s, H.xjy.JOIN))) return null;
    let g = async (e) => {
            if (null != o && "unsent" === u) {
                e.stopPropagation();
                try {
                    m("sending"),
                        await f.Z.sendActivityInviteUser({
                            type: H.mFx.JOIN_REQUEST,
                            userId: o.id,
                            activity: s,
                            location: H.Sbl.UNLOCKED_OVERLAY,
                        }),
                        (0, G.Ws)(H.Odu.ACTIVITY, {
                            type: G.Qu.INVITE,
                            value: G.bk.JOIN_REQUEST_SENT,
                            userId: o.id,
                        }),
                        m("sent");
                } catch (e) {
                    m("unsent");
                }
            }
        },
        y = Y.intl.string(Y.t.OKsSCR);
    return (0, i.jsx)(d.u, {
        text: y,
        "aria-label": y,
        children: (0, i.jsx)(p.zx, {
            submitting: "sending" === u,
            onClick: g,
            className: Q.inviteButton,
            wrapperClassName: Q.inviteButtonWrapper,
            innerClassName: Q.inviteButtonInner,
            color: p.Tt.TRANSPARENT,
            look: p.iL.FILLED,
            size: p.Ph.ICON,
            grow: !1,
            children:
                "sent" === u
                    ? (0, i.jsx)(h.kSu, {
                          color: "currentColor",
                          size: "sm",
                      })
                    : (0, i.jsx)(h.V9, {
                          color: "currentColor",
                          size: "sm",
                      }),
        }),
    });
}
function $(e) {
    let { entry: t, currentUserActivity: n, idx: r } = e,
        l = (0, c.e7)([L.default], () => L.default.getUser(t.author_id)),
        o = (0, c.e7)([P.Z], () => (null != l ? P.Z.getAnyStreamForUser(l.id) : null), [l]),
        { isMobileOnline: a, status: s } = (0, c.cj)(
            [R.Z],
            () =>
                null == l
                    ? {
                          isMobileOnline: void 0,
                          status: void 0,
                      }
                    : {
                          isMobileOnline: R.Z.isMobileOnline(l.id),
                          status: R.Z.getStatus(l.id),
                      },
            [l],
        );
    return null == l
        ? null
        : (0, i.jsxs)("div", {
              className: Q.row,
              children: [
                  (0, i.jsx)(O.Z, {
                      className: Q.avatar,
                      user: l,
                      isMobile: a,
                      status: s,
                  }),
                  (0, i.jsxs)("div", {
                      className: Q.details,
                      children: [
                          (0, i.jsxs)("div", {
                              className: Q.usernameWrapper,
                              children: [
                                  (0, i.jsx)(h.Text, {
                                      className: Q.username,
                                      variant: "text-md/medium",
                                      color: "header-primary",
                                      children: U.ZP.getName(void 0, void 0, l),
                                  }),
                                  null != o && (0, i.jsx)(b.ZP, { className: Q.liveIndicator }),
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
                  }),
                  (0, i.jsx)(J, {
                      entry: t,
                      currentUserActivity: n,
                      idx: r,
                  }),
              ],
          });
}
function ee(e) {
    return new Set(e.map((e) => e.author_id));
}
function et(e) {
    let { entries: t, currentUserActivity: n, className: l, hideHeader: o = !1 } = e,
        a = (0, G.ee)(() => ee(t), [t]),
        s = (0, G.ee)(
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
                                return t === u.N.IS_LIVE;
                            })
                        );
                    }),
                ),
            [t],
        ),
        c = (0, G.ee)(() => new Set(t.map((e) => e.id)), [t]);
    return (r.useEffect(() => {
        (0, G.zi)(H.Odu.ACTIVITY, {
            locked: V.default.isInstanceLocked(),
            shownUserIds: Array.from(a),
            liveUserIds: Array.from(s),
            contentInventoryIds: Array.from(c),
        });
    }, [a, s, c]),
    0 === t.length)
        ? null
        : (0, i.jsxs)("div", {
              className: l,
              children: [
                  !o &&
                      (0, i.jsx)("div", {
                          className: Q.contentInventoryHeader,
                          children: (0, i.jsx)(h.Text, {
                              variant: "text-xs/medium",
                              color: "header-secondary",
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
    (0, E.ZP)(() => {
        (0, w._)();
    });
    let o = (0, c.e7)([D.Z], () => (null == t ? null : D.Z.getApplicationActivity(t)), [t]),
        d = (0, c.Wu)([M.Z, k.Z, T.Z], () => {
            if (null == t) return [];
            let e = M.Z.nowPlayingCards,
                n = { v2: i };
            return e
                .reduce((e, n) => {
                    if (n.type !== H.GOo.USER) return e;
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
        (0, E.ZP)(() => (Z.L(), () => Z.v())),
        {
            entries: r.useMemo(() => {
                let e = l.filter((e) => !d.some((t) => t.activityUser.id === e.author_id)),
                    t = [
                        ...d.map((e) =>
                            (function (e) {
                                var t, n, i, r, l, o, c;
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
                                            null != (c = null == (r = e.activity) ? void 0 : r.application_id)
                                                ? c
                                                : e.game.id,
                                        fake_inventory_item: !0,
                                    },
                                    content_type: s.s.PLAYED_GAME,
                                    author_type: a.i.USER,
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
            }, [l, d, n]),
            currentUserActivity: o,
        }
    );
}
function ei(e) {
    let t = en(e);
    return (0, i.jsx)(et, X(K({}, t), { className: e.className }));
}
function er(e) {
    let { activity: t, currentUser: n, showInviteButton: r = !0 } = e,
        l = null != t && (0, v.Z)(t, H.xjy.JOIN),
        o = (0, S.q)(null == t ? void 0 : t.application_id),
        a = null != o && (0, z.yE)(o.flags, H.udG.EMBEDDED);
    return null == t || null == n
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(_.Z, {
                      className: Q.activityCard,
                      activity: t,
                      user: n,
                      currentUser: n,
                      appContext: H.IlC.OVERLAY,
                  }),
                  l && !a && r
                      ? (0, i.jsx)(p.zx, {
                            className: Q.inviteFriendsButton,
                            onClick: () => {
                                (0, m.h7)(t, !1, H.IlC.POPOUT),
                                    (0, G.Ws)(H.Odu.ACTIVITY, {
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
        o = (0, I.Z)(r),
        a = (0, c.e7)([L.default], () => L.default.getCurrentUser()),
        s = null != l ? l : r,
        u = (0, c.e7)([D.Z], () => (null == s ? null : D.Z.getApplicationActivity(s)), [s]);
    (0, E.ZP)(() => (Z.L(), () => Z.v()));
    let d = en({
        gamingId: s,
        userAffinityThresholdV2: 0.00145,
        maxUserShowCount: 12,
    });
    return t || (0 === o.length && null == u)
        ? null
        : (0, i.jsxs)("div", {
              className: Q.container,
              children: [
                  (0, i.jsx)(er, {
                      activity: u,
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
