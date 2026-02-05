n.d(t, { Ay: () => en, ru: () => ee }), n(321073), n(938796);
var i = n(627968),
    l = n(64700),
    a = n(284009),
    s = n.n(a),
    r = n(6161),
    o = n(681154),
    d = n(974690),
    u = n(665260),
    c = n(311907),
    h = n(990078),
    A = n(397927),
    m = n(308368),
    g = n(298990),
    p = n(308528),
    f = n(684013),
    _ = n(730134),
    E = n(964486),
    x = n(833349),
    S = n(429913),
    I = n(402216),
    T = n(506326),
    C = n(428249),
    v = n(661908),
    y = n(474397),
    N = n(279877),
    O = n(976860),
    b = n(219271),
    j = n(21119),
    w = n(712785),
    L = n(616356),
    R = n(734057),
    D = n(375492),
    M = n(290863),
    k = n(994500),
    z = n(287809),
    V = n(943577),
    U = n(256415),
    P = n(562153),
    G = n(661191),
    H = n(810412),
    Y = n(243612),
    F = n(652215),
    W = n(381941),
    K = n(985018),
    Z = n(72007);
function B(e) {
    let t,
        { entry: n, currentUserActivity: a, idx: r, variant: o } = e,
        d = (0, c.bG)([z.default], () => z.default.getUser(n.author_id)),
        [u, g] = l.useState("unsent"),
        [_, E] = l.useState(!1);
    l.useEffect(() => {
        if ("sent" === u) {
            let e = setTimeout(() => E(!0), 2e3);
            return () => clearTimeout(e);
        }
    }, [u]);
    let S = null != a && (0, x.A)(a, F.jUm.JOIN),
        I = async (e) => {
            if (null != d && "unsent" === u) {
                e.stopPropagation();
                try {
                    if ((g("sending"), S))
                        await m.A.sendActivityInviteUser({
                            type: F.xL.JOIN,
                            userId: d.id,
                            activity: a,
                            location: F.ThZ.UNLOCKED_OVERLAY,
                        });
                    else {
                        let e = await p.A.getOrEnsurePrivateChannel(d.id),
                            t = R.A.getChannel(e) ?? null;
                        s()(null != t, "Send channel must be defined"),
                            (0, O.pX)(F.BVt.CHANNEL(t.guild_id, t.id)),
                            (0, y.A)(F.BRT.OVERLAY, !0),
                            !0 === n.extra.fake_inventory_item
                                ? await (0, C.J)({
                                      channel: t,
                                      content: K.intl.formatToPlainString(K.t.UVBA9g, { gameName: n.extra.game_name }),
                                      whenReady: !0,
                                      doNotNotifyOnError: !1,
                                      location: W.Hx.OVERLAY,
                                  })
                                : await (0, C.d)({
                                      channel: t,
                                      content: K.intl.string(K.t.DwAcMz),
                                      entry: n,
                                      whenReady: !0,
                                      doNotNotifyOnError: !1,
                                      location: W.Hx.OVERLAY,
                                  });
                    }
                    f.A.track(F.HAw.OVERLAY_GAME_INVITE_SENT, {
                        target_user_id: d.id,
                        target_content_entry_id: n.id,
                        target_index: r,
                    }),
                        (0, H.YX)(F.uss.ACTIVITY, { type: H.Z5.INVITE, value: H.IP.INVITE_SENT, userId: d.id }),
                        g("sent");
                } catch (e) {
                    g("unsent");
                }
            }
        },
        T = async () => {
            if (null == d) return;
            let e = await p.A.getOrEnsurePrivateChannel(d.id),
                t = R.A.getChannel(e) ?? null;
            s()(null != t, "Send channel must be defined"),
                (0, O.pX)(F.BVt.CHANNEL(t.guild_id, t.id)),
                (0, y.A)(F.BRT.OVERLAY, !0),
                (0, H.YX)(F.uss.ACTIVITY, { type: H.Z5.REDIRECT, value: H.IP.CHAT, userId: d.id });
        },
        v = S ? K.intl.string(K.t["3fRySx"]) : K.intl.string(K.t.XHxDIV);
    return (
        (t = "sent" === u ? (_ ? A.oyn : A.BNr) : S ? A.DpX : A.lX7),
        (0, i.jsx)(h.m, {
            text: v,
            "aria-label": v,
            children: (0, i.jsx)(A.K0, {
                icon: t,
                "aria-label": v,
                loading: "sending" === u,
                onClick: _ ? T : I,
                variant: "subtle" === o ? "icon-only" : "secondary",
                size: "sm",
            }),
        })
    );
}
function X(e) {
    let { entry: t, currentUserActivity: n, variant: a } = e,
        s = (0, c.bG)([z.default], () => z.default.getUser(t.author_id)),
        r = n?.application_id ?? t.extra.application_id,
        o = (0, c.bG)([M.A], () => (null != s ? M.A.getApplicationActivity(s.id, r) : null), [r, s]),
        [d, u] = l.useState("unsent");
    if (!(null != o && (0, x.A)(o, F.jUm.JOIN))) return null;
    let g = async (e) => {
            if (null != s && "unsent" === d) {
                e.stopPropagation();
                try {
                    u("sending"),
                        await m.A.sendActivityInviteUser({
                            type: F.xL.JOIN_REQUEST,
                            userId: s.id,
                            activity: o,
                            location: F.ThZ.UNLOCKED_OVERLAY,
                        }),
                        (0, H.YX)(F.uss.ACTIVITY, { type: H.Z5.INVITE, value: H.IP.JOIN_REQUEST_SENT, userId: s.id }),
                        u("sent");
                } catch (e) {
                    u("unsent");
                }
            }
        },
        p = K.intl.string(K.t.OKsSCR);
    return (0, i.jsx)(h.m, {
        text: p,
        "aria-label": p,
        children: (0, i.jsx)(A.K0, {
            icon: "sent" === d ? A.BNr : A.E7M,
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
        s = (0, c.bG)([z.default], () => z.default.getUser(t.author_id)),
        r = (0, c.bG)([L.A], () => (null != s ? L.A.getAnyStreamForUser(s.id) : null), [s]),
        {
            isMobileOnline: o,
            isVROnline: d,
            status: u,
        } = (0, c.cf)(
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
              className: Z.nM,
              children: [
                  (0, i.jsx)(_.A, { className: Z.my, user: s, isMobile: o, isVR: d, status: u }),
                  (0, i.jsxs)("div", {
                      className: Z.zH,
                      children: [
                          (0, i.jsxs)("div", {
                              className: Z.Yn,
                              children: [
                                  (0, i.jsx)(A.Text, {
                                      className: Z.Xh,
                                      variant: "text-md/medium",
                                      color: "text-strong",
                                      children: P.Ay.getName(void 0, void 0, s),
                                  }),
                                  null != r && (0, i.jsx)(I.Ay, { className: Z.Ok }),
                              ],
                          }),
                          (0, i.jsx)(T.mG, {
                              location: T.N5.OVERLAY,
                              className: Z.cV,
                              children: [T.iq, T.tR, T.K7, T.sp, T.MK].map((e, n) =>
                                  (0, i.jsx)(e, { entry: t }, `entry-${n}`),
                              ),
                          }),
                      ],
                  }),
                  (0, i.jsxs)("div", {
                      className: Z.nB,
                      children: [
                          (0, i.jsx)(X, { entry: t, currentUserActivity: n, idx: l, variant: a }),
                          (0, i.jsx)(B, { entry: t, currentUserActivity: n, idx: l, variant: a }),
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
            locked: U.default.isInstanceLocked(),
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
                          className: Z.v4,
                          children: (0, i.jsx)(A.Text, {
                              variant: "text-xs/medium",
                              color: "subtle" === r ? "text-subtle" : "text-default",
                              tag: "div",
                              children: K.intl.string(K.t.y9eo7a),
                          }),
                      }),
                  t.map((e, t) => (0, i.jsx)(J, { idx: t, entry: e, currentUserActivity: n, variant: r }, t)),
              ],
          });
}
function $(e) {
    let { gamingId: t, maxUserShowCount: n, userAffinityThresholdV2: i = 0.0029 } = e,
        a = (0, v.A)(t);
    (0, E.Ay)(() => {
        (0, b.u)();
    });
    let s = (0, c.bG)([D.A], () => (null == t ? null : D.A.getApplicationActivity(t)), [t]),
        u = (0, c.yK)([V.A, k.A, j.A], () => {
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
                    })(j.A.getUserAffinity(t), i, n);
                });
        }, [t, i]);
    return (
        (0, E.Ay)(() => (N.O(), () => N.v())),
        {
            entries: l.useMemo(() => {
                let e = a.filter((e) => !u.some((t) => t.activityUser.id === e.author_id)),
                    t = [
                        ...u.map((e) => {
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
            }, [a, u, n]),
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
        a = null != t && (0, x.A)(t, F.jUm.JOIN),
        s = (0, S.h)(t?.application_id),
        r = null != s && (0, u.Lt)(s.flags, F.gfo.EMBEDDED);
    return null == t || null == n
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(w.A, { className: Z.M4, activity: t, user: n, currentUser: n, appContext: F.BRT.OVERLAY }),
                  a && !r && l
                      ? (0, i.jsx)("div", {
                            className: Z.DJ,
                            children: (0, i.jsx)(A.Button, {
                                text: K.intl.string(K.t["6Qgrev"]),
                                size: "sm",
                                variant: "secondary",
                                onClick: () => {
                                    (0, g.qf)(t, !1, F.BRT.POPOUT),
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
        s = (0, v.A)(l),
        r = (0, c.bG)([z.default], () => z.default.getCurrentUser()),
        o = null != a ? a : l,
        d = (0, c.bG)([D.A], () => (null == o ? null : D.A.getApplicationActivity(o)), [o]);
    (0, E.Ay)(() => (N.O(), () => N.v()));
    let u = $({ gamingId: o, userAffinityThresholdV2: 0.00145, maxUserShowCount: 12 });
    return t || (0 === s.length && null == d)
        ? null
        : (0, i.jsxs)("div", {
              className: Z.kL,
              children: [
                  (0, i.jsx)(et, { activity: d, currentUser: r }),
                  (0, i.jsx)(q, { ...u, className: Z.l_, hideHeader: !0 }),
              ],
          });
}
