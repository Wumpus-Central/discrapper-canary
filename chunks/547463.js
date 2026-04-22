i.d(e, { Ay: () => to, ru: () => tr }), i(321073);
var n = i(627968),
    l = i(64700),
    a = i(284009),
    r = i.n(a),
    s = i(6161),
    o = i(681154),
    u = i(974690),
    c = i(311907),
    d = i(990078),
    A = i(534890),
    f = i(820081),
    y = i(241541),
    p = i(559647),
    m = i(408278),
    I = i(297152),
    g = i(834730),
    E = i(821609),
    N = i(308368),
    _ = i(298990),
    T = i(308528),
    S = i(684013),
    C = i(730134),
    h = i(964486),
    v = i(833349),
    O = i(429913),
    x = i(20015),
    L = i(402216),
    D = i(506326),
    b = i(428249),
    R = i(661908),
    k = i(474397),
    U = i(279877),
    V = i(976860),
    M = i(219271),
    j = i(21119),
    P = i(712785),
    w = i(616356),
    K = i(734057),
    Y = i(290863),
    G = i(994500),
    F = i(287809),
    H = i(943577),
    J = i(256415),
    z = i(562153),
    B = i(661191),
    X = i(810412),
    W = i(243612),
    q = i(652215),
    Q = i(381941),
    Z = i(985018),
    $ = i(575322);
function tt(t) {
    let e,
        { entry: i, currentUserActivity: a, idx: s, variant: o } = t,
        u = (0, c.bG)([F.default], () => F.default.getUser(i.author_id)),
        [I, g] = l.useState("unsent"),
        [E, _] = l.useState(!1);
    l.useEffect(() => {
        if ("sent" === I) {
            let t = setTimeout(() => _(!0), 2e3);
            return () => clearTimeout(t);
        }
    }, [I]);
    let C = (0, W.JH)(a?.application_id ?? i.extra.application_id),
        h = null != C,
        v = async (t) => {
            if (null != u && "unsent" === I) {
                t.stopPropagation();
                try {
                    if ((g("sending"), h && null != C))
                        await N.A.sendActivityInviteUser({
                            type: q.xL.JOIN,
                            userId: u.id,
                            activity: C,
                            location: q.ThZ.UNLOCKED_OVERLAY,
                        });
                    else {
                        let t = await T.A.getOrEnsurePrivateChannel(u.id),
                            e = K.A.getChannel(t) ?? null;
                        r()(null != e, "Send channel must be defined"),
                            (0, V.pX)(q.BVt.CHANNEL(e.guild_id, e.id)),
                            (0, k.A)(q.BRT.OVERLAY, !0),
                            !0 === i.extra.fake_inventory_item
                                ? await (0, b.J)({
                                      channel: e,
                                      content: Z.intl.formatToPlainString(Z.t.UVBA9g, { gameName: i.extra.game_name }),
                                      whenReady: !0,
                                      doNotNotifyOnError: !1,
                                      location: Q.Hx.OVERLAY,
                                  })
                                : await (0, b.d)({
                                      channel: e,
                                      content: Z.intl.string(Z.t.DwAcMz),
                                      entry: i,
                                      whenReady: !0,
                                      doNotNotifyOnError: !1,
                                      location: Q.Hx.OVERLAY,
                                  });
                    }
                    S.A.track(q.HAw.OVERLAY_GAME_INVITE_SENT, {
                        target_user_id: u.id,
                        target_content_entry_id: i.id,
                        target_index: s,
                    }),
                        (0, X.YX)(q.uss.ACTIVITY, { type: X.Z5.INVITE, value: X.IP.INVITE_SENT, userId: u.id }),
                        g("sent");
                } catch (t) {
                    g("unsent");
                }
            }
        },
        O = async () => {
            if (null == u) return;
            let t = await T.A.getOrEnsurePrivateChannel(u.id),
                e = K.A.getChannel(t) ?? null;
            r()(null != e, "Send channel must be defined"),
                (0, V.pX)(q.BVt.CHANNEL(e.guild_id, e.id)),
                (0, k.A)(q.BRT.OVERLAY, !0),
                (0, X.YX)(q.uss.ACTIVITY, { type: X.Z5.REDIRECT, value: X.IP.CHAT, userId: u.id });
        },
        x = h ? Z.intl.string(Z.t["3fRySx"]) : Z.intl.string(Z.t.XHxDIV);
    return (
        (e = "sent" === I ? (E ? A.o : f.B) : h ? y.D : p.l),
        (0, n.jsx)(d.m, {
            text: x,
            "aria-label": x,
            children: (0, n.jsx)(m.K, {
                icon: e,
                "aria-label": x,
                loading: "sending" === I,
                onClick: E ? O : v,
                variant: "subtle" === o ? "icon-only" : "secondary",
                size: "sm",
            }),
        })
    );
}
function te(t) {
    let { entry: e, currentUserActivity: i, variant: a } = t,
        r = (0, c.bG)([F.default], () => F.default.getUser(e.author_id)),
        s = i?.application_id ?? e.extra.application_id,
        o = (0, c.bG)([Y.A], () => (null != r ? Y.A.getApplicationActivity(r.id, s) : null), [s, r]),
        [u, A] = l.useState("unsent");
    if (!(null != o && (0, v.A)(o, q.jUm.JOIN))) return null;
    let y = async (t) => {
            if (null != r && "unsent" === u) {
                t.stopPropagation();
                try {
                    A("sending"),
                        await N.A.sendActivityInviteUser({
                            type: q.xL.JOIN_REQUEST,
                            userId: r.id,
                            activity: o,
                            location: q.ThZ.UNLOCKED_OVERLAY,
                        }),
                        (0, X.YX)(q.uss.ACTIVITY, { type: X.Z5.INVITE, value: X.IP.JOIN_REQUEST_SENT, userId: r.id }),
                        A("sent");
                } catch (t) {
                    A("unsent");
                }
            }
        },
        p = Z.intl.string(Z.t.OKsSCR);
    return (0, n.jsx)(d.m, {
        text: p,
        "aria-label": p,
        children: (0, n.jsx)(m.K, {
            icon: "sent" === u ? f.B : I.E,
            "aria-label": p,
            loading: "sending" === u,
            onClick: y,
            variant: "subtle" === a ? "icon-only" : "secondary",
            size: "sm",
        }),
    });
}
function ti(t) {
    let { entry: e, currentUserActivity: i, idx: l, variant: a } = t,
        r = (0, c.bG)([F.default], () => F.default.getUser(e.author_id)),
        s = (0, c.bG)([w.A], () => (null != r ? w.A.getAnyStreamForUser(r.id) : null), [r]),
        {
            isMobileOnline: o,
            isVROnline: u,
            status: d,
        } = (0, c.cf)(
            [Y.A],
            () =>
                null == r
                    ? { isMobileOnline: void 0, isVROnline: void 0, status: void 0 }
                    : {
                          isMobileOnline: Y.A.isMobileOnline(r.id),
                          isVROnline: Y.A.isVROnline(r.id),
                          status: Y.A.getStatus(r.id),
                      },
            [r],
        );
    return null == r
        ? null
        : (0, n.jsxs)("div", {
              className: $.nM,
              children: [
                  (0, n.jsx)(C.A, { className: $.my, user: r, isMobile: o, isVR: u, status: d }),
                  (0, n.jsxs)("div", {
                      className: $.zH,
                      children: [
                          (0, n.jsxs)("div", {
                              className: $.Yn,
                              children: [
                                  (0, n.jsx)(g.E, {
                                      className: $.Xh,
                                      variant: "text-md/medium",
                                      color: "text-strong",
                                      children: z.Ay.getName(void 0, void 0, r),
                                  }),
                                  null != s && (0, n.jsx)(L.Ay, { className: $.Ok }),
                              ],
                          }),
                          (0, n.jsx)(D.mG, {
                              location: D.N5.OVERLAY,
                              className: $.cV,
                              children: [D.iq, D.tR, D.K7, D.sp, D.MK].map((t, i) =>
                                  (0, n.jsx)(t, { entry: e }, `entry-${i}`),
                              ),
                          }),
                      ],
                  }),
                  (0, n.jsxs)("div", {
                      className: $.nB,
                      children: [
                          (0, n.jsx)(te, { entry: e, currentUserActivity: i, idx: l, variant: a }),
                          (0, n.jsx)(tt, { entry: e, currentUserActivity: i, idx: l, variant: a }),
                      ],
                  }),
              ],
          });
}
function tn(t) {
    return new Set(t.map((t) => t.author_id));
}
function tl(t) {
    let { entries: e, currentUserActivity: i, className: a, hideHeader: r = !1, variant: s = "default" } = t,
        o = (0, X.Dk)(() => tn(e), [e]),
        c = (0, X.Dk)(
            () =>
                new Set(
                    Array.from(tn(e)).filter((t) => {
                        let i = e.find((e) => {
                            let { author_id: i } = e;
                            return t === i;
                        });
                        return (
                            null != i &&
                            i.traits.find((t) => {
                                let { type: e } = t;
                                return e === u.K.IS_LIVE;
                            })
                        );
                    }),
                ),
            [e],
        ),
        d = (0, X.Dk)(() => new Set(e.map((t) => t.id)), [e]);
    return (l.useEffect(() => {
        (0, X.Y)(q.uss.ACTIVITY, {
            locked: J.default.isInstanceLocked(),
            shownUserIds: Array.from(o),
            liveUserIds: Array.from(c),
            contentInventoryIds: Array.from(d),
        });
    }, [o, c, d]),
    0 === e.length)
        ? null
        : (0, n.jsxs)("div", {
              className: a,
              children: [
                  !r &&
                      (0, n.jsx)("div", {
                          className: $.v4,
                          children: (0, n.jsx)(g.E, {
                              variant: "text-xs/medium",
                              color: "subtle" === s ? "text-subtle" : "text-default",
                              tag: "div",
                              children: Z.intl.string(Z.t.y9eo7a),
                          }),
                      }),
                  e.map((t, e) => (0, n.jsx)(ti, { idx: e, entry: t, currentUserActivity: i, variant: s }, e)),
              ],
          });
}
function ta(t) {
    let { gamingId: e, maxUserShowCount: i, userAffinityThresholdV2: n = 0.0029 } = t,
        a = (0, R.A)(e);
    (0, h.Ay)(() => {
        (0, M.u)();
    });
    let r = (0, W.xl)(e),
        d = (0, c.yK)([H.A, G.A, j.A], () => {
            if (null == e) return [];
            let t = H.A.nowPlayingCards,
                i = { v2: n };
            return t
                .reduce((t, i) => {
                    if (i.type !== q.ZzC.USER) return t;
                    let n = i.party.currentActivities;
                    if (0 === n.length) return t;
                    for (let i of n) i.game.id === e && null != i.activity && t.push(i);
                    return t;
                }, [])
                .filter((t) => {
                    let e = t.activityUser.id,
                        n = G.A.isFriend(e);
                    return (function (t, e, i) {
                        let { v2: n } = i;
                        if (null == t) return e;
                        let {
                            communicationProbability: l,
                            dmProbability: a,
                            serverMessageProbability: r,
                            vcProbability: s,
                        } = t;
                        switch (!0) {
                            case l > n:
                            case a > n:
                            case r > n:
                            case s > n:
                                return !0;
                            default:
                                return e;
                        }
                    })(j.A.getUserAffinity(e), n, i);
                });
        }, [e, n]);
    return (
        (0, h.Ay)(() => (U.O(), () => U.v())),
        {
            entries: l.useMemo(() => {
                let t = a.filter((t) => !d.some((e) => e.activityUser.id === t.author_id)),
                    e = [
                        ...d.map((t) => {
                            let e;
                            return (
                                (e = t.activity?.timestamps?.start ?? Date.now()),
                                {
                                    id: B.default.fromTimestamp(e),
                                    author_id: t.activityUser.id,
                                    extra: {
                                        type: "played_game_extra",
                                        game_name: t.activity?.name ?? t.game.name,
                                        application_id: t.activity?.application_id ?? t.game.id,
                                        fake_inventory_item: !0,
                                    },
                                    content_type: o.ContentInventoryEntryType.PLAYED_GAME,
                                    author_type: s.ContentInventoryAuthorType.USER,
                                    participants: t.playingMembers.map((t) => t.id),
                                    traits: [{ type: u.K.IS_LIVE, is_live: !0 }],
                                }
                            );
                        }),
                        ...t,
                    ];
                return null != i ? e.slice(0, i) : e;
            }, [a, d, i]),
            currentUserActivity: r,
        }
    );
}
function tr(t) {
    let e = ta(t);
    return (0, n.jsx)(tl, { ...e, className: t.className, variant: t.variant });
}
function ts(t) {
    let { activity: e, currentUser: i, showInviteButton: l = !0 } = t,
        a = (0, W.JH)(e?.application_id),
        r = (0, O.h)(e?.application_id),
        s = (0, x.n)(r, q.gfo.EMBEDDED);
    return null == e || null == i
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(P.A, { className: $.M4, activity: e, user: i, currentUser: i, appContext: q.BRT.OVERLAY }),
                  null != a && !s && l
                      ? (0, n.jsx)("div", {
                            className: $.DJ,
                            children: (0, n.jsx)(E.$, {
                                text: Z.intl.string(Z.t["6Qgrev"]),
                                size: "sm",
                                variant: "secondary",
                                onClick: () => {
                                    (0, _.qf)(a, !1, q.BRT.POPOUT),
                                        (0, X.YX)(q.uss.ACTIVITY, { type: X.Z5.INVITE, value: X.IP.PANEL_OPENED });
                                },
                            }),
                        })
                      : null,
              ],
          });
}
function to(t) {
    let { locked: e } = t,
        i = (0, W.b4)(),
        l = i?.id,
        a = i?.altId,
        r = (0, R.A)(l),
        s = (0, c.bG)([F.default], () => F.default.getCurrentUser()),
        o = null != a ? a : l,
        u = (0, W.xl)(o);
    (0, h.Ay)(() => (U.O(), () => U.v()));
    let d = ta({ gamingId: o, userAffinityThresholdV2: 0.00145, maxUserShowCount: 12 });
    return e || (0 === r.length && null == u)
        ? null
        : (0, n.jsxs)("div", {
              className: $.kL,
              children: [
                  (0, n.jsx)(ts, { activity: u, currentUser: s }),
                  (0, n.jsx)(tl, { ...d, className: $.l_, hideHeader: !0 }),
              ],
          });
}
