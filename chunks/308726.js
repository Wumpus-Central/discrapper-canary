i.d(e, { Ay: () => tp, ru: () => tf }), i(321073);
var n = i(627968),
    l = i(64700),
    a = i(284009),
    r = i.n(a),
    s = i(6161),
    o = i(681154),
    u = i(974690),
    c = i(17928),
    d = i(990078),
    A = i(534890),
    f = i(820081),
    y = i(241541),
    p = i(559647),
    m = i(408278),
    I = i(297152),
    E = i(834730),
    g = i(821609),
    _ = i(308368),
    N = i(298990),
    S = i(308528),
    T = i(684013),
    C = i(730134),
    h = i(964486),
    v = i(55730),
    O = i(429913),
    x = i(20015),
    L = i(402216),
    D = i(506326),
    b = i(428249),
    R = i(205184),
    k = i(427358),
    U = i(927813),
    V = i(935208),
    j = i(20805),
    M = i(832384);
let P = U.A.Millis.WEEK;
function w(t) {
    let e = (0, R.s)(t),
        i = (0, c.cf)([k.A], () => k.A.getUserAffinitiesMap());
    return l.useMemo(
        () =>
            null == e
                ? []
                : e
                      .filter(
                          (e) => (0, j.zD)(e) && (0, j.P)(e) && e.extra.application_id === t && V.default.age(e.id) < P,
                      )
                      .sort((t, e) => Y(i, e) - Y(i, t)),
        [e, t, i],
    );
}
let K = 30 * U.A.Seconds.MINUTE;
function Y(t, e) {
    let i = e.participants;
    if (0 === i.length) return 0;
    let n = Math.max(
            ...i.map((e) => {
                let i = t.get(e);
                return (i?.communicationProbability ?? 0) + 1e-4;
            }),
        ),
        l = Math.exp(-((V.default.age(e.id) / 1e3 / K) * 0.01)),
        a = e.traits.some((t) => t.type !== u.K.DURATION_SECONDS),
        r = (0, M.I5)(e);
    return n * l * (1 + 0.6 * (a && !r ? 1 : 0));
}
var F = i(474397),
    G = i(279877),
    H = i(976860),
    J = i(219271),
    z = i(580763),
    B = i(616356),
    X = i(734057),
    W = i(290863),
    q = i(994500),
    Q = i(287809),
    Z = i(943577),
    $ = i(184809),
    tt = i(562153),
    te = i(810412),
    ti = i(243612),
    tn = i(652215),
    tl = i(381941),
    ta = i(375708),
    tr = i(575322);
function ts(t) {
    let e,
        { entry: i, currentUserActivity: a, idx: s, variant: o } = t,
        u = (0, c.bG)([Q.default], () => Q.default.getUser(i.author_id)),
        [I, E] = l.useState("unsent"),
        [g, N] = l.useState(!1);
    l.useEffect(() => {
        if ("sent" === I) {
            let t = setTimeout(() => N(!0), 2e3);
            return () => clearTimeout(t);
        }
    }, [I]);
    let C = (0, ti.JH)(a?.application_id ?? i.extra.application_id),
        h = null != C,
        v = async (t) => {
            if (null != u && "unsent" === I) {
                t.stopPropagation();
                try {
                    if ((E("sending"), h && null != C))
                        await _.A.sendActivityInviteUser({
                            type: tn.xL.JOIN,
                            userId: u.id,
                            activity: C,
                            location: tn.ThZ.UNLOCKED_OVERLAY,
                        });
                    else {
                        let t = await S.A.getOrEnsurePrivateChannel(u.id),
                            e = X.A.getChannel(t) ?? null;
                        r()(null != e, "Send channel must be defined"),
                            (0, H.pX)(tn.BVt.CHANNEL(e.guild_id, e.id)),
                            (0, F.A)(tn.BRT.OVERLAY, !0),
                            !0 === i.extra.fake_inventory_item
                                ? await (0, b.J)({
                                      channel: e,
                                      content: ta.intl.formatToPlainString(ta.t.UVBA9g, {
                                          gameName: i.extra.game_name,
                                      }),
                                      whenReady: !0,
                                      doNotNotifyOnError: !1,
                                      location: tl.Hx.OVERLAY,
                                  })
                                : await (0, b.d)({
                                      channel: e,
                                      content: ta.intl.string(ta.t.DwAcMz),
                                      entry: i,
                                      whenReady: !0,
                                      doNotNotifyOnError: !1,
                                      location: tl.Hx.OVERLAY,
                                  });
                    }
                    T.A.track(tn.HAw.OVERLAY_GAME_INVITE_SENT, {
                        target_user_id: u.id,
                        target_content_entry_id: i.id,
                        target_index: s,
                    }),
                        (0, te.YX)(tn.uss.ACTIVITY, { type: te.Z5.INVITE, value: te.IP.INVITE_SENT, userId: u.id }),
                        E("sent");
                } catch (t) {
                    E("unsent");
                }
            }
        },
        O = async () => {
            if (null == u) return;
            let t = await S.A.getOrEnsurePrivateChannel(u.id),
                e = X.A.getChannel(t) ?? null;
            r()(null != e, "Send channel must be defined"),
                (0, H.pX)(tn.BVt.CHANNEL(e.guild_id, e.id)),
                (0, F.A)(tn.BRT.OVERLAY, !0),
                (0, te.YX)(tn.uss.ACTIVITY, { type: te.Z5.REDIRECT, value: te.IP.CHAT, userId: u.id });
        },
        x = h ? ta.intl.string(ta.t["3fRySx"]) : ta.intl.string(ta.t.XHxDIV);
    return (
        (e = "sent" === I ? (g ? A.o : f.B) : h ? y.D : p.l),
        (0, n.jsx)(d.m, {
            text: x,
            "aria-label": x,
            children: (0, n.jsx)(m.K, {
                icon: e,
                "aria-label": x,
                loading: "sending" === I,
                onClick: g ? O : v,
                variant: "subtle" === o ? "icon-only" : "secondary",
                size: "sm",
            }),
        })
    );
}
function to(t) {
    let { entry: e, currentUserActivity: i, variant: a } = t,
        r = (0, c.bG)([Q.default], () => Q.default.getUser(e.author_id)),
        s = i?.application_id ?? e.extra.application_id,
        o = (0, c.bG)([W.A], () => (null != r ? W.A.getApplicationActivity(r.id, s) : null), [s, r]),
        [u, A] = l.useState("unsent");
    if (!(null != o && (0, v.A)(o, tn.jUm.JOIN))) return null;
    let y = async (t) => {
            if (null != r && "unsent" === u) {
                t.stopPropagation();
                try {
                    A("sending"),
                        await _.A.sendActivityInviteUser({
                            type: tn.xL.JOIN_REQUEST,
                            userId: r.id,
                            activity: o,
                            location: tn.ThZ.UNLOCKED_OVERLAY,
                        }),
                        (0, te.YX)(tn.uss.ACTIVITY, {
                            type: te.Z5.INVITE,
                            value: te.IP.JOIN_REQUEST_SENT,
                            userId: r.id,
                        }),
                        A("sent");
                } catch (t) {
                    A("unsent");
                }
            }
        },
        p = ta.intl.string(ta.t.OKsSCR);
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
function tu(t) {
    let { entry: e, currentUserActivity: i, idx: l, variant: a } = t,
        r = (0, c.bG)([Q.default], () => Q.default.getUser(e.author_id)),
        s = (0, c.bG)([B.A], () => (null != r ? B.A.getAnyStreamForUser(r.id) : null), [r]),
        {
            isMobileOnline: o,
            isVROnline: u,
            status: d,
        } = (0, c.cf)(
            [W.A],
            () =>
                null == r
                    ? { isMobileOnline: void 0, isVROnline: void 0, status: void 0 }
                    : {
                          isMobileOnline: W.A.isMobileOnline(r.id),
                          isVROnline: W.A.isVROnline(r.id),
                          status: W.A.getStatus(r.id),
                      },
            [r],
        );
    return null == r
        ? null
        : (0, n.jsxs)("div", {
              className: tr.nM,
              children: [
                  (0, n.jsx)(C.A, { className: tr.my, user: r, isMobile: o, isVR: u, status: d }),
                  (0, n.jsxs)("div", {
                      className: tr.zH,
                      children: [
                          (0, n.jsxs)("div", {
                              className: tr.Yn,
                              children: [
                                  (0, n.jsx)(E.E, {
                                      className: tr.Xh,
                                      variant: "text-md/medium",
                                      color: "text-strong",
                                      children: tt.Ay.getName(void 0, void 0, r),
                                  }),
                                  null != s && (0, n.jsx)(L.Ay, { className: tr.Ok }),
                              ],
                          }),
                          (0, n.jsx)(D.mG, {
                              location: D.N5.OVERLAY,
                              className: tr.cV,
                              children: [D.iq, D.tR, D.K7, D.sp, D.MK].map((t, i) =>
                                  (0, n.jsx)(t, { entry: e }, `entry-${i}`),
                              ),
                          }),
                      ],
                  }),
                  (0, n.jsxs)("div", {
                      className: tr.nB,
                      children: [
                          (0, n.jsx)(to, { entry: e, currentUserActivity: i, idx: l, variant: a }),
                          (0, n.jsx)(ts, { entry: e, currentUserActivity: i, idx: l, variant: a }),
                      ],
                  }),
              ],
          });
}
function tc(t) {
    return new Set(t.map((t) => t.author_id));
}
function td(t) {
    let { entries: e, currentUserActivity: i, className: a, hideHeader: r = !1, variant: s = "default" } = t,
        o = (0, te.Dk)(() => tc(e), [e]),
        c = (0, te.Dk)(
            () =>
                new Set(
                    Array.from(tc(e)).filter((t) => {
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
        d = (0, te.Dk)(() => new Set(e.map((t) => t.id)), [e]);
    return (l.useEffect(() => {
        (0, te.Y)(tn.uss.ACTIVITY, {
            locked: $.default.isInstanceLocked(),
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
                          className: tr.v4,
                          children: (0, n.jsx)(E.E, {
                              variant: "text-xs/medium",
                              color: "subtle" === s ? "text-subtle" : "text-default",
                              tag: "div",
                              children: ta.intl.string(ta.t.y9eo7a),
                          }),
                      }),
                  e.map((t, e) => (0, n.jsx)(tu, { idx: e, entry: t, currentUserActivity: i, variant: s }, e)),
              ],
          });
}
function tA(t) {
    let { gamingId: e, maxUserShowCount: i, userAffinityThresholdV2: n = 0.0029 } = t,
        a = w(e);
    (0, h.Ay)(() => {
        (0, J.u)();
    });
    let r = (0, ti.xl)(e),
        d = (0, c.yK)([Z.A, q.A, k.A], () => {
            if (null == e) return [];
            let t = Z.A.nowPlayingCards,
                i = { v2: n };
            return t
                .reduce((t, i) => {
                    if (i.type !== tn.ZzC.USER) return t;
                    let n = i.party.currentActivities;
                    if (0 === n.length) return t;
                    for (let i of n) i.application.id === e && null != i.activity && t.push(i);
                    return t;
                }, [])
                .filter((t) => {
                    let e = t.activityUser.id,
                        n = q.A.isFriend(e);
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
                    })(k.A.getUserAffinity(e), n, i);
                });
        }, [e, n]);
    return (
        (0, h.Ay)(() => (G.O(), () => G.v())),
        {
            entries: l.useMemo(() => {
                let t = a.filter((t) => !d.some((e) => e.activityUser.id === t.author_id)),
                    e = [
                        ...d.map((t) => {
                            let e;
                            return (
                                (e = t.activity?.timestamps?.start ?? Date.now()),
                                {
                                    id: V.default.fromTimestamp(e),
                                    author_id: t.activityUser.id,
                                    extra: {
                                        type: "played_game_extra",
                                        game_name: t.activity?.name ?? t.application.name,
                                        application_id: t.activity?.application_id ?? t.application.id,
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
function tf(t) {
    let e = tA(t);
    return (0, n.jsx)(td, { ...e, className: t.className, variant: t.variant });
}
function ty(t) {
    let { activity: e, currentUser: i, showInviteButton: l = !0 } = t,
        a = (0, ti.JH)(e?.application_id),
        r = (0, O.h)(e?.application_id),
        s = (0, x.n)(r, tn.gfo.EMBEDDED);
    return null == e || null == i
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(z.A, {
                      className: tr.M4,
                      activity: e,
                      user: i,
                      currentUser: i,
                      appContext: tn.BRT.OVERLAY,
                  }),
                  null != a && !s && l
                      ? (0, n.jsx)("div", {
                            className: tr.DJ,
                            children: (0, n.jsx)(g.$, {
                                text: ta.intl.string(ta.t["6Qgrev"]),
                                size: "sm",
                                variant: "secondary",
                                onClick: () => {
                                    (0, N.qf)(a, !1, tn.BRT.POPOUT),
                                        (0, te.YX)(tn.uss.ACTIVITY, { type: te.Z5.INVITE, value: te.IP.PANEL_OPENED });
                                },
                            }),
                        })
                      : null,
              ],
          });
}
function tp(t) {
    let { locked: e } = t,
        i = (0, ti.b4)(),
        l = i?.id,
        a = i?.altId,
        r = w(l),
        s = (0, c.bG)([Q.default], () => Q.default.getCurrentUser()),
        o = null != a ? a : l,
        u = (0, ti.xl)(o);
    (0, h.Ay)(() => (G.O(), () => G.v()));
    let d = tA({ gamingId: o, userAffinityThresholdV2: 0.00145, maxUserShowCount: 12 });
    return e || (0 === r.length && null == u)
        ? null
        : (0, n.jsxs)("div", {
              className: tr.kL,
              children: [
                  (0, n.jsx)(ty, { activity: u, currentUser: s }),
                  (0, n.jsx)(td, { ...d, className: tr.l_, hideHeader: !0 }),
              ],
          });
}
