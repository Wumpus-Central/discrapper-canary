"use strict";
n.d(t, { Ay: () => eo, ru: () => es }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(6161),
    l = n(681154),
    u = n(974690),
    c = n(311907),
    d = n(990078),
    _ = n(397927),
    f = n(308368),
    p = n(298990),
    h = n(308528),
    m = n(684013),
    E = n(730134),
    g = n(964486),
    A = n(833349),
    I = n(429913),
    T = n(20015),
    S = n(402216),
    y = n(506326),
    v = n(428249),
    N = n(661908),
    C = n(474397),
    R = n(279877),
    O = n(976860),
    b = n(219271),
    D = n(21119),
    L = n(712785),
    w = n(616356),
    M = n(734057),
    x = n(290863),
    P = n(994500),
    k = n(287809),
    U = n(943577),
    G = n(256415),
    F = n(562153),
    V = n(661191),
    B = n(810412),
    H = n(243612),
    j = n(652215),
    Y = n(381941),
    W = n(985018),
    K = n(796938);
function $(e) {
    let t,
        { entry: n, currentUserActivity: s, idx: o, variant: l } = e,
        u = (0, c.bG)([k.default], () => k.default.getUser(n.author_id)),
        [p, E] = i.useState("unsent"),
        [g, A] = i.useState(!1);
    i.useEffect(() => {
        if ("sent" === p) {
            let e = setTimeout(() => A(!0), 2e3);
            return () => clearTimeout(e);
        }
    }, [p]);
    let I = (0, H.JH)(s?.application_id ?? n.extra.application_id),
        T = null != I,
        S = async (e) => {
            if (null != u && "unsent" === p) {
                e.stopPropagation();
                try {
                    if ((E("sending"), T && null != I))
                        await f.A.sendActivityInviteUser({
                            type: j.xL.JOIN,
                            userId: u.id,
                            activity: I,
                            location: j.ThZ.UNLOCKED_OVERLAY,
                        });
                    else {
                        let e = await h.A.getOrEnsurePrivateChannel(u.id),
                            t = M.A.getChannel(e) ?? null;
                        a()(null != t, "Send channel must be defined"),
                            (0, O.pX)(j.BVt.CHANNEL(t.guild_id, t.id)),
                            (0, C.A)(j.BRT.OVERLAY, !0),
                            !0 === n.extra.fake_inventory_item
                                ? await (0, v.J)({
                                      channel: t,
                                      content: W.intl.formatToPlainString(W.t.UVBA9g, { gameName: n.extra.game_name }),
                                      whenReady: !0,
                                      doNotNotifyOnError: !1,
                                      location: Y.Hx.OVERLAY,
                                  })
                                : await (0, v.d)({
                                      channel: t,
                                      content: W.intl.string(W.t.DwAcMz),
                                      entry: n,
                                      whenReady: !0,
                                      doNotNotifyOnError: !1,
                                      location: Y.Hx.OVERLAY,
                                  });
                    }
                    m.A.track(j.HAw.OVERLAY_GAME_INVITE_SENT, {
                        target_user_id: u.id,
                        target_content_entry_id: n.id,
                        target_index: o,
                    }),
                        (0, B.YX)(j.uss.ACTIVITY, { type: B.Z5.INVITE, value: B.IP.INVITE_SENT, userId: u.id }),
                        E("sent");
                } catch (e) {
                    E("unsent");
                }
            }
        },
        y = async () => {
            if (null == u) return;
            let e = await h.A.getOrEnsurePrivateChannel(u.id),
                t = M.A.getChannel(e) ?? null;
            a()(null != t, "Send channel must be defined"),
                (0, O.pX)(j.BVt.CHANNEL(t.guild_id, t.id)),
                (0, C.A)(j.BRT.OVERLAY, !0),
                (0, B.YX)(j.uss.ACTIVITY, { type: B.Z5.REDIRECT, value: B.IP.CHAT, userId: u.id });
        },
        N = T ? W.intl.string(W.t["3fRySx"]) : W.intl.string(W.t.XHxDIV);
    return (
        (t = "sent" === p ? (g ? _.oyn : _.BNr) : T ? _.DpX : _.lX7),
        (0, r.jsx)(d.m, {
            text: N,
            "aria-label": N,
            children: (0, r.jsx)(_.K0, {
                icon: t,
                "aria-label": N,
                loading: "sending" === p,
                onClick: g ? y : S,
                variant: "subtle" === l ? "icon-only" : "secondary",
                size: "sm",
            }),
        })
    );
}
function z(e) {
    let { entry: t, currentUserActivity: n, variant: s } = e,
        a = (0, c.bG)([k.default], () => k.default.getUser(t.author_id)),
        o = n?.application_id ?? t.extra.application_id,
        l = (0, c.bG)([x.A], () => (null != a ? x.A.getApplicationActivity(a.id, o) : null), [o, a]),
        [u, p] = i.useState("unsent");
    if (!(null != l && (0, A.A)(l, j.jUm.JOIN))) return null;
    let h = async (e) => {
            if (null != a && "unsent" === u) {
                e.stopPropagation();
                try {
                    p("sending"),
                        await f.A.sendActivityInviteUser({
                            type: j.xL.JOIN_REQUEST,
                            userId: a.id,
                            activity: l,
                            location: j.ThZ.UNLOCKED_OVERLAY,
                        }),
                        (0, B.YX)(j.uss.ACTIVITY, { type: B.Z5.INVITE, value: B.IP.JOIN_REQUEST_SENT, userId: a.id }),
                        p("sent");
                } catch (e) {
                    p("unsent");
                }
            }
        },
        m = W.intl.string(W.t.OKsSCR);
    return (0, r.jsx)(d.m, {
        text: m,
        "aria-label": m,
        children: (0, r.jsx)(_.K0, {
            icon: "sent" === u ? _.BNr : _.E7M,
            "aria-label": m,
            loading: "sending" === u,
            onClick: h,
            variant: "subtle" === s ? "icon-only" : "secondary",
            size: "sm",
        }),
    });
}
function q(e) {
    let { entry: t, currentUserActivity: n, idx: i, variant: s } = e,
        a = (0, c.bG)([k.default], () => k.default.getUser(t.author_id)),
        o = (0, c.bG)([w.A], () => (null != a ? w.A.getAnyStreamForUser(a.id) : null), [a]),
        {
            isMobileOnline: l,
            isVROnline: u,
            status: d,
        } = (0, c.cf)(
            [x.A],
            () =>
                null == a
                    ? { isMobileOnline: void 0, isVROnline: void 0, status: void 0 }
                    : {
                          isMobileOnline: x.A.isMobileOnline(a.id),
                          isVROnline: x.A.isVROnline(a.id),
                          status: x.A.getStatus(a.id),
                      },
            [a],
        );
    return null == a
        ? null
        : (0, r.jsxs)("div", {
              className: K.nM,
              children: [
                  (0, r.jsx)(E.A, { className: K.my, user: a, isMobile: l, isVR: u, status: d }),
                  (0, r.jsxs)("div", {
                      className: K.zH,
                      children: [
                          (0, r.jsxs)("div", {
                              className: K.Yn,
                              children: [
                                  (0, r.jsx)(_.Text, {
                                      className: K.Xh,
                                      variant: "text-md/medium",
                                      color: "text-strong",
                                      children: F.Ay.getName(void 0, void 0, a),
                                  }),
                                  null != o && (0, r.jsx)(S.Ay, { className: K.Ok }),
                              ],
                          }),
                          (0, r.jsx)(y.mG, {
                              location: y.N5.OVERLAY,
                              className: K.cV,
                              children: [y.iq, y.tR, y.K7, y.sp, y.MK].map((e, n) =>
                                  (0, r.jsx)(e, { entry: t }, `entry-${n}`),
                              ),
                          }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      className: K.nB,
                      children: [
                          (0, r.jsx)(z, { entry: t, currentUserActivity: n, idx: i, variant: s }),
                          (0, r.jsx)($, { entry: t, currentUserActivity: n, idx: i, variant: s }),
                      ],
                  }),
              ],
          });
}
function Z(e) {
    return new Set(e.map((e) => e.author_id));
}
function X(e) {
    return new Set(
        Array.from(Z(e)).filter((t) => {
            let n = e.find((e) => {
                let { author_id: n } = e;
                return t === n;
            });
            return (
                null != n &&
                n.traits.find((e) => {
                    let { type: t } = e;
                    return t === u.K.IS_LIVE;
                })
            );
        }),
    );
}
function Q(e) {
    return new Set(e.map((e) => e.id));
}
function J(e) {
    let { entries: t, currentUserActivity: n, className: s, hideHeader: a = !1, variant: o = "default" } = e,
        l = (0, B.Dk)(() => Z(t), [t]),
        u = (0, B.Dk)(() => X(t), [t]),
        c = (0, B.Dk)(() => Q(t), [t]);
    return (i.useEffect(() => {
        (0, B.Y)(j.uss.ACTIVITY, {
            locked: G.default.isInstanceLocked(),
            shownUserIds: Array.from(l),
            liveUserIds: Array.from(u),
            contentInventoryIds: Array.from(c),
        });
    }, [l, u, c]),
    0 === t.length)
        ? null
        : (0, r.jsxs)("div", {
              className: s,
              children: [
                  !a &&
                      (0, r.jsx)("div", {
                          className: K.v4,
                          children: (0, r.jsx)(_.Text, {
                              variant: "text-xs/medium",
                              color: "subtle" === o ? "text-subtle" : "text-default",
                              tag: "div",
                              children: W.intl.string(W.t.y9eo7a),
                          }),
                      }),
                  t.map((e, t) => (0, r.jsx)(q, { idx: t, entry: e, currentUserActivity: n, variant: o }, t)),
              ],
          });
}
function ee(e) {
    let t = e.activity?.timestamps?.start ?? Date.now();
    return {
        id: V.default.fromTimestamp(t),
        author_id: e.activityUser.id,
        extra: {
            type: "played_game_extra",
            game_name: e.activity?.name ?? e.game.name,
            application_id: e.activity?.application_id ?? e.game.id,
            fake_inventory_item: !0,
        },
        content_type: l.ContentInventoryEntryType.PLAYED_GAME,
        author_type: o.ContentInventoryAuthorType.USER,
        participants: e.playingMembers.map((e) => e.id),
        traits: [{ type: u.K.IS_LIVE, is_live: !0 }],
    };
}
function et(e, t) {
    return t.reduce((t, n) => {
        if (n.type !== j.ZzC.USER) return t;
        let r = n.party.currentActivities;
        if (0 === r.length) return t;
        for (let n of r) n.game.id === e && null != n.activity && t.push(n);
        return t;
    }, []);
}
let en = 0.0029;
function er(e, t, n) {
    let { v2: r } = n;
    if (null == e) return t;
    let { communicationProbability: i, dmProbability: s, serverMessageProbability: a, vcProbability: o } = e;
    switch (!0) {
        case i > r:
        case s > r:
        case a > r:
        case o > r:
            return !0;
        default:
            return t;
    }
}
function ei(e) {
    let { gamingId: t, maxUserShowCount: n, userAffinityThresholdV2: r = en } = e,
        s = (0, N.A)(t);
    (0, g.Ay)(() => {
        (0, b.u)();
    });
    let a = (0, H.xl)(t),
        o = (0, c.yK)([U.A, P.A, D.A], () => {
            if (null == t) return [];
            let e = U.A.nowPlayingCards,
                n = { v2: r };
            return et(t, e).filter((e) => {
                let t = e.activityUser.id,
                    r = P.A.isFriend(t);
                return er(D.A.getUserAffinity(t), r, n);
            });
        }, [t, r]);
    return (
        (0, g.Ay)(() => (R.O(), () => R.v())),
        {
            entries: i.useMemo(() => {
                let e = s.filter((e) => !o.some((t) => t.activityUser.id === e.author_id)),
                    t = [...o.map((e) => ee(e)), ...e];
                return null != n ? t.slice(0, n) : t;
            }, [s, o, n]),
            currentUserActivity: a,
        }
    );
}
function es(e) {
    let t = ei(e);
    return (0, r.jsx)(J, { ...t, className: e.className, variant: e.variant });
}
function ea(e) {
    let { activity: t, currentUser: n, showInviteButton: i = !0 } = e,
        s = (0, H.JH)(t?.application_id),
        a = (0, I.h)(t?.application_id),
        o = (0, T.n)(a, j.gfo.EMBEDDED);
    return null == t || null == n
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(L.A, { className: K.M4, activity: t, user: n, currentUser: n, appContext: j.BRT.OVERLAY }),
                  null != s && !o && i
                      ? (0, r.jsx)("div", {
                            className: K.DJ,
                            children: (0, r.jsx)(_.Button, {
                                text: W.intl.string(W.t["6Qgrev"]),
                                size: "sm",
                                variant: "secondary",
                                onClick: () => {
                                    (0, p.qf)(s, !1, j.BRT.POPOUT),
                                        (0, B.YX)(j.uss.ACTIVITY, { type: B.Z5.INVITE, value: B.IP.PANEL_OPENED });
                                },
                            }),
                        })
                      : null,
              ],
          });
}
function eo(e) {
    let { locked: t } = e,
        n = (0, H.b4)(),
        i = n?.id,
        s = n?.altId,
        a = (0, N.A)(i),
        o = (0, c.bG)([k.default], () => k.default.getCurrentUser()),
        l = null != s ? s : i,
        u = (0, H.xl)(l);
    (0, g.Ay)(() => (R.O(), () => R.v()));
    let d = ei({ gamingId: l, userAffinityThresholdV2: en / 2, maxUserShowCount: 12 });
    return t || (0 === a.length && null == u)
        ? null
        : (0, r.jsxs)("div", {
              className: K.kL,
              children: [
                  (0, r.jsx)(ea, { activity: u, currentUser: o }),
                  (0, r.jsx)(J, { ...d, className: K.l_, hideHeader: !0 }),
              ],
          });
}
