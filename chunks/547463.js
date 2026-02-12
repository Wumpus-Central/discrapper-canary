n.d(t, { Ay: () => en, ru: () => ee }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(284009),
    s = n.n(a),
    r = n(6161),
    o = n(681154),
    d = n(974690),
    u = n(311907),
    c = n(990078),
    h = n(397927),
    A = n(308368),
    m = n(298990),
    g = n(308528),
    p = n(684013),
    f = n(730134),
    _ = n(964486),
    E = n(833349),
    x = n(429913),
    S = n(20015),
    I = n(402216),
    T = n(506326),
    C = n(428249),
    y = n(661908),
    v = n(474397),
    N = n(279877),
    O = n(976860),
    j = n(219271),
    b = n(21119),
    w = n(712785),
    L = n(616356),
    R = n(734057),
    D = n(375492),
    M = n(290863),
    k = n(994500),
    z = n(287809),
    V = n(943577),
    P = n(256415),
    U = n(562153),
    G = n(661191),
    H = n(810412),
    Y = n(243612),
    F = n(652215),
    W = n(381941),
    Z = n(985018),
    X = n(72007);
function K(e) {
    let t,
        { entry: n, currentUserActivity: a, idx: r, variant: o } = e,
        d = (0, u.bG)([z.default], () => z.default.getUser(n.author_id)),
        [m, f] = l.useState("unsent"),
        [_, x] = l.useState(!1);
    l.useEffect(() => {
        if ("sent" === m) {
            let e = setTimeout(() => x(!0), 2e3);
            return () => clearTimeout(e);
        }
    }, [m]);
    let S = null != a && (0, E.A)(a, F.jUm.JOIN),
        I = async (e) => {
            if (null != d && "unsent" === m) {
                e.stopPropagation();
                try {
                    if ((f("sending"), S))
                        await A.A.sendActivityInviteUser({
                            type: F.xL.JOIN,
                            userId: d.id,
                            activity: a,
                            location: F.ThZ.UNLOCKED_OVERLAY,
                        });
                    else {
                        let e = await g.A.getOrEnsurePrivateChannel(d.id),
                            t = R.A.getChannel(e) ?? null;
                        s()(null != t, "Send channel must be defined"),
                            (0, O.pX)(F.BVt.CHANNEL(t.guild_id, t.id)),
                            (0, v.A)(F.BRT.OVERLAY, !0),
                            !0 === n.extra.fake_inventory_item
                                ? await (0, C.J)({
                                      channel: t,
                                      content: Z.intl.formatToPlainString(Z.t.UVBA9g, { gameName: n.extra.game_name }),
                                      whenReady: !0,
                                      doNotNotifyOnError: !1,
                                      location: W.Hx.OVERLAY,
                                  })
                                : await (0, C.d)({
                                      channel: t,
                                      content: Z.intl.string(Z.t.DwAcMz),
                                      entry: n,
                                      whenReady: !0,
                                      doNotNotifyOnError: !1,
                                      location: W.Hx.OVERLAY,
                                  });
                    }
                    p.A.track(F.HAw.OVERLAY_GAME_INVITE_SENT, {
                        target_user_id: d.id,
                        target_content_entry_id: n.id,
                        target_index: r,
                    }),
                        (0, H.YX)(F.uss.ACTIVITY, { type: H.Z5.INVITE, value: H.IP.INVITE_SENT, userId: d.id }),
                        f("sent");
                } catch (e) {
                    f("unsent");
                }
            }
        },
        T = async () => {
            if (null == d) return;
            let e = await g.A.getOrEnsurePrivateChannel(d.id),
                t = R.A.getChannel(e) ?? null;
            s()(null != t, "Send channel must be defined"),
                (0, O.pX)(F.BVt.CHANNEL(t.guild_id, t.id)),
                (0, v.A)(F.BRT.OVERLAY, !0),
                (0, H.YX)(F.uss.ACTIVITY, { type: H.Z5.REDIRECT, value: H.IP.CHAT, userId: d.id });
        },
        y = S ? Z.intl.string(Z.t["3fRySx"]) : Z.intl.string(Z.t.XHxDIV);
    return (
        (t = "sent" === m ? (_ ? h.oyn : h.BNr) : S ? h.DpX : h.lX7),
        (0, i.jsx)(c.m, {
            text: y,
            "aria-label": y,
            children: (0, i.jsx)(h.K0, {
                icon: t,
                "aria-label": y,
                loading: "sending" === m,
                onClick: _ ? T : I,
                variant: "subtle" === o ? "icon-only" : "secondary",
                size: "sm",
            }),
        })
    );
}
function B(e) {
    let { entry: t, currentUserActivity: n, variant: a } = e,
        s = (0, u.bG)([z.default], () => z.default.getUser(t.author_id)),
        r = n?.application_id ?? t.extra.application_id,
        o = (0, u.bG)([M.A], () => (null != s ? M.A.getApplicationActivity(s.id, r) : null), [r, s]),
        [d, m] = l.useState("unsent");
    if (!(null != o && (0, E.A)(o, F.jUm.JOIN))) return null;
    let g = async (e) => {
            if (null != s && "unsent" === d) {
                e.stopPropagation();
                try {
                    m("sending"),
                        await A.A.sendActivityInviteUser({
                            type: F.xL.JOIN_REQUEST,
                            userId: s.id,
                            activity: o,
                            location: F.ThZ.UNLOCKED_OVERLAY,
                        }),
                        (0, H.YX)(F.uss.ACTIVITY, { type: H.Z5.INVITE, value: H.IP.JOIN_REQUEST_SENT, userId: s.id }),
                        m("sent");
                } catch (e) {
                    m("unsent");
                }
            }
        },
        p = Z.intl.string(Z.t.OKsSCR);
    return (0, i.jsx)(c.m, {
        text: p,
        "aria-label": p,
        children: (0, i.jsx)(h.K0, {
            icon: "sent" === d ? h.BNr : h.E7M,
            "aria-label": p,
            loading: "sending" === d,
            onClick: g,
            variant: "subtle" === a ? "icon-only" : "secondary",
            size: "sm",
        }),
    });
}
function J(e) {
    let { entry: t, currentUserActivity: n, idx: l, variant: a } = e,
        s = (0, u.bG)([z.default], () => z.default.getUser(t.author_id)),
        r = (0, u.bG)([L.A], () => (null != s ? L.A.getAnyStreamForUser(s.id) : null), [s]),
        {
            isMobileOnline: o,
            isVROnline: d,
            status: c,
        } = (0, u.cf)(
            [M.A],
            () =>
                null == s
                    ? { isMobileOnline: void 0, isVROnline: void 0, status: void 0 }
                    : {
                          isMobileOnline: M.A.isMobileOnline(s.id),
                          isVROnline: M.A.isVROnline(s.id),
                          status: M.A.getStatus(s.id),
                      },
            [s],
        );
    return null == s
        ? null
        : (0, i.jsxs)("div", {
              className: X.nM,
              children: [
                  (0, i.jsx)(f.A, { className: X.my, user: s, isMobile: o, isVR: d, status: c }),
                  (0, i.jsxs)("div", {
                      className: X.zH,
                      children: [
                          (0, i.jsxs)("div", {
                              className: X.Yn,
                              children: [
                                  (0, i.jsx)(h.Text, {
                                      className: X.Xh,
                                      variant: "text-md/medium",
                                      color: "text-strong",
                                      children: U.Ay.getName(void 0, void 0, s),
                                  }),
                                  null != r && (0, i.jsx)(I.Ay, { className: X.Ok }),
                              ],
                          }),
                          (0, i.jsx)(T.mG, {
                              location: T.N5.OVERLAY,
                              className: X.cV,
                              children: [T.iq, T.tR, T.K7, T.sp, T.MK].map((e, n) =>
                                  (0, i.jsx)(e, { entry: t }, `entry-${n}`),
                              ),
                          }),
                      ],
                  }),
                  (0, i.jsxs)("div", {
                      className: X.nB,
                      children: [
                          (0, i.jsx)(B, { entry: t, currentUserActivity: n, idx: l, variant: a }),
                          (0, i.jsx)(K, { entry: t, currentUserActivity: n, idx: l, variant: a }),
                      ],
                  }),
              ],
          });
}
function Q(e) {
    return new Set(e.map((e) => e.author_id));
}
function q(e) {
    let { entries: t, currentUserActivity: n, className: a, hideHeader: s = !1, variant: r = "default" } = e,
        o = (0, H.Dk)(() => Q(t), [t]),
        u = (0, H.Dk)(
            () =>
                new Set(
                    Array.from(Q(t)).filter((e) => {
                        let n = t.find((t) => {
                            let { author_id: n } = t;
                            return e === n;
                        });
                        return (
                            null != n &&
                            n.traits.find((e) => {
                                let { type: t } = e;
                                return t === d.K.IS_LIVE;
                            })
                        );
                    }),
                ),
            [t],
        ),
        c = (0, H.Dk)(() => new Set(t.map((e) => e.id)), [t]);
    return (l.useEffect(() => {
        (0, H.Y)(F.uss.ACTIVITY, {
            locked: P.default.isInstanceLocked(),
            shownUserIds: Array.from(o),
            liveUserIds: Array.from(u),
            contentInventoryIds: Array.from(c),
        });
    }, [o, u, c]),
    0 === t.length)
        ? null
        : (0, i.jsxs)("div", {
              className: a,
              children: [
                  !s &&
                      (0, i.jsx)("div", {
                          className: X.v4,
                          children: (0, i.jsx)(h.Text, {
                              variant: "text-xs/medium",
                              color: "subtle" === r ? "text-subtle" : "text-default",
                              tag: "div",
                              children: Z.intl.string(Z.t.y9eo7a),
                          }),
                      }),
                  t.map((e, t) => (0, i.jsx)(J, { idx: t, entry: e, currentUserActivity: n, variant: r }, t)),
              ],
          });
}
function $(e) {
    let { gamingId: t, maxUserShowCount: n, userAffinityThresholdV2: i = 0.0029 } = e,
        a = (0, y.A)(t);
    (0, _.Ay)(() => {
        (0, j.u)();
    });
    let s = (0, u.bG)([D.A], () => (null == t ? null : D.A.getApplicationActivity(t)), [t]),
        c = (0, u.yK)([V.A, k.A, b.A], () => {
            if (null == t) return [];
            let e = V.A.nowPlayingCards,
                n = { v2: i };
            return e
                .reduce((e, n) => {
                    if (n.type !== F.ZzC.USER) return e;
                    let i = n.party.currentActivities;
                    if (0 === i.length) return e;
                    for (let n of i) n.game.id === t && null != n.activity && e.push(n);
                    return e;
                }, [])
                .filter((e) => {
                    let t = e.activityUser.id,
                        i = k.A.isFriend(t);
                    return (function (e, t, n) {
                        let { v2: i } = n;
                        if (null == e) return t;
                        let {
                            communicationProbability: l,
                            dmProbability: a,
                            serverMessageProbability: s,
                            vcProbability: r,
                        } = e;
                        switch (!0) {
                            case l > i:
                            case a > i:
                            case s > i:
                            case r > i:
                                return !0;
                            default:
                                return t;
                        }
                    })(b.A.getUserAffinity(t), i, n);
                });
        }, [t, i]);
    return (
        (0, _.Ay)(() => (N.O(), () => N.v())),
        {
            entries: l.useMemo(() => {
                let e = a.filter((e) => !c.some((t) => t.activityUser.id === e.author_id)),
                    t = [
                        ...c.map((e) => {
                            let t;
                            return (
                                (t = e.activity?.timestamps?.start ?? Date.now()),
                                {
                                    id: G.default.fromTimestamp(t),
                                    author_id: e.activityUser.id,
                                    extra: {
                                        type: "played_game_extra",
                                        game_name: e.activity?.name ?? e.game.name,
                                        application_id: e.activity?.application_id ?? e.game.id,
                                        fake_inventory_item: !0,
                                    },
                                    content_type: o.ContentInventoryEntryType.PLAYED_GAME,
                                    author_type: r.ContentInventoryAuthorType.USER,
                                    participants: e.playingMembers.map((e) => e.id),
                                    traits: [{ type: d.K.IS_LIVE, is_live: !0 }],
                                }
                            );
                        }),
                        ...e,
                    ];
                return null != n ? t.slice(0, n) : t;
            }, [a, c, n]),
            currentUserActivity: s,
        }
    );
}
function ee(e) {
    let t = $(e);
    return (0, i.jsx)(q, { ...t, className: e.className, variant: e.variant });
}
function et(e) {
    let { activity: t, currentUser: n, showInviteButton: l = !0 } = e,
        a = null != t && (0, E.A)(t, F.jUm.JOIN),
        s = (0, x.h)(t?.application_id),
        r = (0, S.n)(s, F.gfo.EMBEDDED);
    return null == t || null == n
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(w.A, { className: X.M4, activity: t, user: n, currentUser: n, appContext: F.BRT.OVERLAY }),
                  a && !r && l
                      ? (0, i.jsx)("div", {
                            className: X.DJ,
                            children: (0, i.jsx)(h.Button, {
                                text: Z.intl.string(Z.t["6Qgrev"]),
                                size: "sm",
                                variant: "secondary",
                                onClick: () => {
                                    (0, m.qf)(t, !1, F.BRT.POPOUT),
                                        (0, H.YX)(F.uss.ACTIVITY, { type: H.Z5.INVITE, value: H.IP.PANEL_OPENED });
                                },
                            }),
                        })
                      : null,
              ],
          });
}
function en(e) {
    let { locked: t } = e,
        n = (0, Y.b4)(),
        l = n?.id,
        a = n?.altId,
        s = (0, y.A)(l),
        r = (0, u.bG)([z.default], () => z.default.getCurrentUser()),
        o = null != a ? a : l,
        d = (0, u.bG)([D.A], () => (null == o ? null : D.A.getApplicationActivity(o)), [o]);
    (0, _.Ay)(() => (N.O(), () => N.v()));
    let c = $({ gamingId: o, userAffinityThresholdV2: 0.00145, maxUserShowCount: 12 });
    return t || (0 === s.length && null == d)
        ? null
        : (0, i.jsxs)("div", {
              className: X.kL,
              children: [
                  (0, i.jsx)(et, { activity: d, currentUser: r }),
                  (0, i.jsx)(q, { ...c, className: X.l_, hideHeader: !0 }),
              ],
          });
}
