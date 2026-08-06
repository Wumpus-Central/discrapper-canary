n.d(t, { B: () => r_, T: () => rx }), n(321073);
var l,
    i,
    s = n(477900),
    r = n(582128),
    a = n(435558),
    o = n.n(a),
    d = n(837381),
    c = n(887129),
    u = n(17928),
    h = n(661531),
    A = n(715828),
    m = n(312138),
    g = n(475825),
    f = n(707554),
    p = n(140735),
    C = n(38021),
    E = n(951001),
    x = n(820284),
    _ = n(629675),
    N = n(263619),
    S = n(192308),
    I = n(66834),
    b = n(999903),
    G = n(544169),
    R = n(422258),
    j = n(5180),
    v = n(770376),
    y = n(395504),
    M = n(924985),
    L = n(734057),
    T = n(769765),
    U = n(808728),
    D = n(71393),
    O = n(576705),
    P = n(967198),
    V = n(543465);
n(667532);
var w = n(95701),
    H = n(111613),
    B = n(652215);
function k(e, t) {
    return null != e && null != t && (e === t || ((0, w.tr)(e) && (0, w.tr)(t)) || ((0, w.ay)(e) && (0, w.ay)(t)));
}
function F(e, t, n, l) {
    let i = -1;
    if (
        (l.find((e, n) => {
            let { channel: l } = e;
            return l.id === t && ((i = n), !0);
        }),
        i < 0)
    )
        return null;
    for (let t = i; t >= 0 && t < l.length; t += e) {
        let e = l[t];
        if (k(e.channel.type, n)) return e;
    }
    return null;
}
function K(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null == e) return 0;
    let l = null;
    return (
        t
            .filter((t) => {
                let {
                    channel: { type: l },
                } = t;
                return null != e && (n || k(e.type, l));
            })
            .find((t, n) => {
                let {
                    channel: { id: i },
                } = t;
                return null != e && i === e.id && ((l = n), !0);
            }),
        l
    );
}
function z(e) {
    return { referenceId: e.id, parentId: e.parent_id };
}
function W(e, t, n, l, i) {
    if (null == e || null == n) return null;
    let { GUILD_CATEGORY: s } = B.rbe;
    if (e.type === s)
        return l === t || (l < t && e.type === n.type)
            ? z(n)
            : l > t
              ? (function (e, t, n) {
                    let { GUILD_CATEGORY: l } = B.rbe,
                        i = n[(K(t, n, !0) ?? 0) + 1],
                        s = F(-1, t.id, e.type, n);
                    return null == s || s.channel.id === e.id
                        ? null
                        : null == i || i.channel.type === l
                          ? { referenceId: s.channel.id, parentId: null }
                          : null;
                })(e, n, i)
              : null;
    if (k(e.type, n.type)) return z(n);
    if (l < t) {
        let t, l;
        if (n.type === s) {
            let t = i[(K(n, i, !0) ?? 0) - 1],
                l = F(1, n.id, e.type, i);
            if (null == t) return { referenceId: null, parentId: null };
            if (null != l) {
                if (k(t.channel.type, e.type) || (e.isGuildVocal() && (0, w.tr)(t.channel.type)))
                    return { referenceId: l.channel.id, parentId: t.channel.parent_id };
                if (t.channel.isCategory()) return { referenceId: l.channel.id, parentId: t.channel.id };
            }
            return null;
        }
        return (
            (t = i[(K(n, i, !0) ?? 0) - 1]),
            (l = F(1, n.id, e.type, i)),
            null != t || e.isGuildVocal()
                ? (0, w.tr)(e.type) && null != l && ((0, w.tr)(t.channel.type) || t.channel.isCategory())
                    ? { referenceId: l.channel.id, parentId: n.parent_id }
                    : null
                : { referenceId: null != l ? l.channel.id : null, parentId: null }
        );
    }
    if (n.type === s) {
        let t = i[(K(n, i, !0) ?? 0) + 1],
            l = F(-1, n.id, e.type, i);
        if (null != l) {
            if (null == t) return { referenceId: l.channel.id, parentId: n.id };
            if (k(t.channel.type, e.type) || ((0, w.tr)(e.type) && t.channel.isGuildVocal()))
                return { referenceId: l.channel.id, parentId: t.channel.parent_id };
            if (t.channel.isCategory()) return { referenceId: l.channel.id, parentId: n.id };
        }
        return null;
    }
    let r = i[(K(n, i, !0) ?? 0) + 1],
        a = F(-1, n.id, e.type, i);
    if (null == a) return null;
    if (e.isGuildVocal()) {
        if (null == r || r.channel.isCategory()) return { referenceId: a.channel.id, parentId: n.parent_id };
        if (r.channel.isGuildVocal()) return { referenceId: a.channel.id, parentId: r.channel.parent_id };
    }
    return e.isCategory() && (null == r || r.channel.isCategory())
        ? { referenceId: a.channel.id, parentId: null }
        : null;
}
var Y = n(488926);
let X = "DRAGGABLE_GUILD_CHANNEL";
function q(e, t) {
    if (null == e || null == t) return null;
    if (!(0, j.ai)(e)) return L.A.getChannel(t);
    let n = U.Ay.getChannels(e),
        l =
            n[U.I6].find((e) => e.channel.id === t) ??
            n[U.vM].find((e) => e.channel.id === t) ??
            n[B.rbe.GUILD_CATEGORY].find((e) => e.channel.id === t);
    return l?.channel;
}
function Z(e, t) {
    if (null != e.parent_id) {
        let t = L.A.getChannel(e.parent_id);
        if (null != t) return O.A.can(B.xBc.MANAGE_CHANNELS, t);
    }
    return O.A.can(B.xBc.MANAGE_CHANNELS, t);
}
function J(e) {
    return (0, _.T)(
        X,
        {
            drop(e, t) {
                let n,
                    l = P.A.getGuildId(),
                    i = t.getItem(),
                    r = W(q(l, i.id), i.position, e.channel, e.position, i.channelList);
                if (null == r) return;
                let a = q(l, i.id);
                if (null == a) return;
                let o = T.A.getCategories(l),
                    d = D.A.getGuild(l);
                if (null == d) return;
                let c = (function (e, t, n, l) {
                    let i,
                        s,
                        r = [],
                        a = [],
                        o = l._categories;
                    function d(t) {
                        var n, l;
                        let a;
                        return (
                            (a =
                                null == i ||
                                null == s ||
                                ((n = i),
                                (l = s),
                                +(null == n || null == l || null == t[n] || t[n].channel !== e || null == t[l]))
                                    ? [...t]
                                    : H.Ay.moveItemFromTo(t, i, s)),
                            (r = r.concat(
                                H.Ay.calculatePositionDeltas({
                                    oldOrdering: t,
                                    newOrdering: a,
                                    idGetter: (e) => {
                                        let { channel: t } = e;
                                        return t.id;
                                    },
                                    existingPositionGetter: (e) => {
                                        let { channel: t } = e;
                                        return t.position;
                                    },
                                }),
                            )),
                            a
                        );
                    }
                    if (e.isCategory()) {
                        let n = [...o].slice(1);
                        (i = K(e, n)), (s = K(t, n)), (a = d(n)).unshift(o[0]);
                    }
                    if ((0, w.tr)(e.type) || e.isCategory()) {
                        let n = (0, b.A)(a.length > 0 ? a : o, l, (e) => {
                            let {
                                channel: { type: t },
                            } = e;
                            return (0, w.tr)(t);
                        });
                        (i = K(e, n)), (s = K(t, n)), d(n);
                    }
                    if (e.isGuildVocal() || e.isCategory()) {
                        let n = (0, b.A)(a.length > 0 ? a : o, l, (e) => {
                            let { channel: t } = e;
                            return t.isGuildVocal();
                        });
                        (i = K(e, n)), (s = K(t, n)), d(n);
                    }
                    return (
                        e.parent_id !== n &&
                            null == r.find((t) => t.id === e.id && ((t.parent_id = n), !0)) &&
                            r.push({ id: e.id, parent_id: n }),
                        r
                    );
                })(a, q(l, r.referenceId), r.parentId, o);
                if (0 !== c.length) {
                    if ((0, j.ai)(l)) return void (0, R.zN)(c);
                    if (
                        ((c = c.filter((e) => {
                            let { id: t } = e,
                                n = L.A.getChannel(t);
                            if (null == n) return !1;
                            let l = L.A.getChannel(n.parent_id);
                            return n.type === B.rbe.GUILD_CATEGORY || null == l
                                ? O.A.can(B.xBc.MANAGE_CHANNELS, d)
                                : O.A.can(B.xBc.MANAGE_CHANNELS, l);
                        })),
                        a.parent_id !== r.parentId &&
                            c.find((e) => {
                                if (e.id !== a.id) return !1;
                                let t = L.A.getChannel(e.parent_id);
                                if (!(null != t && O.A.can(B.xBc.MANAGE_ROLES, a) && O.A.can(B.xBc.MANAGE_ROLES, t)))
                                    return !0;
                                let l = Y.r(a, t),
                                    i = Y.r(a, L.A.getChannel(a.parent_id));
                                return ((null != a.parent_id || l) && (!i || l)) || (n = e), !0;
                            }),
                        null != n)
                    ) {
                        let e = L.A.getChannel(n.parent_id);
                        null != e &&
                            (0, S.openModal)((t) =>
                                (0, s.jsx)(G.default, {
                                    ...t,
                                    channel: a,
                                    category: e,
                                    onConfirm: () => {
                                        null != n && ((n.lock_permissions = !0), I.A.batchChannelUpdate(l, c));
                                    },
                                    onCancel: () => {
                                        null != n && I.A.batchChannelUpdate(l, c);
                                    },
                                }),
                            );
                    } else I.A.batchChannelUpdate(l, c);
                }
            },
            canDrop(e, t) {
                let n = t.getItem(),
                    l = L.A.getChannel(n.id);
                if (null == l) return !1;
                let i = W(L.A.getChannel(n.id), n.position, e.channel, e.position, n.channelList);
                if (null == i) return !1;
                if ((0, j.ai)(P.A.getGuildId())) return !0;
                if (V.Ay.isFavorite(n.guildId, e.channel.id)) return !1;
                let s = D.A.getGuild(n.guildId);
                if (null == s) return !1;
                let r = L.A.getChannel(i.parentId),
                    a = L.A.getChannel(l.parent_id),
                    o = O.A.can(B.xBc.MANAGE_CHANNELS, s),
                    d = null != a ? O.A.can(B.xBc.MANAGE_CHANNELS, a) : o,
                    c = null != r ? O.A.can(B.xBc.MANAGE_CHANNELS, r) : o;
                return d && c;
            },
        },
        (e, t) => {
            let n = t.getItem();
            return null == n || null == n.isChannelDrag
                ? {
                      connectChannelDropTarget: e.dropTarget(),
                      sorting: !1,
                      sortingType: null,
                      sortingPosition: null,
                      sortingParent: null,
                  }
                : {
                      connectChannelDropTarget: e.dropTarget(),
                      sorting: !0,
                      sortingType: n.type,
                      sortingPosition: t.isOver() && t.canDrop() ? n.position : null,
                      sortingParent: t.isOver() && t.canDrop() ? n.parentId : null,
                  };
        },
    )(
        (0, N.I)(
            X,
            {
                canDrag(e) {
                    let { channel: t } = e;
                    if ((0, j.ai)(P.A.getGuildId())) return !0;
                    let l = D.A.getGuild(t.getGuildId());
                    return (
                        null != l &&
                        ((0, y.WW)(l.id) && Z(t, l)
                            ? ((0, v.A)() &&
                                  (0, S.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([n.e("57729"), n.e("24848")]).then(
                                          n.bind(n, 354643),
                                      );
                                      return (t) => (0, s.jsx)(e, { ...t });
                                  }),
                              !1)
                            : V.Ay.isFavorite(l.id, t.id) && Z(t, l)
                              ? ((0, S.openModalLazy)(async () => {
                                    let { default: e } = await n.e("80545").then(n.bind(n, 933752));
                                    return (n) => (0, s.jsx)(e, { ...n, guildId: l.id, channelId: t.id });
                                }),
                                !1)
                              : Z(t, l))
                    );
                },
                beginDrag(e) {
                    let {
                            channel: { id: t, parent_id: n, guild_id: l, type: i },
                            position: s,
                        } = e,
                        r = P.A.getGuildId(),
                        a = T.A.getCategories(r);
                    return {
                        isChannelDrag: !0,
                        id: t,
                        position: s,
                        parentId: n,
                        type: i,
                        channelList: (0, b.A)(a._categories, a, (e) => {
                            let { channel: t } = e;
                            return t.type === B.rbe.GUILD_CATEGORY && null != a[t.id] && 0 === a[t.id].length
                                ? !!(0, j.ai)(r) ||
                                      (O.A.can(B.xBc.MANAGE_CHANNELS, t) && O.A.can(B.xBc.VIEW_CHANNEL, t))
                                : !M.A.isCollapsed(t.parent_id);
                        }),
                        guildId: l,
                    };
                },
            },
            (e) => ({ connectChannelDragSource: e.dragSource(), connectDragPreview: e.dragPreview() }),
        )(e),
    );
}
var $ = n(775602),
    Q = n(793574),
    ee = n(688810),
    et = n(915089),
    en = n(796637),
    el = n(313281),
    ei = n(834730),
    es = n(331322),
    er = n(276293),
    ea = n(983851),
    eo = n(534890),
    ed = n(297264),
    ec = n(611371),
    eu = n(532794),
    eh = n(158045),
    eA = n(518082),
    em = n(349828),
    eg = n(202541),
    ef = n(449817),
    ep = n(375708),
    eC = n(496327);
function eE() {
    let e = r.useCallback(() => {
        let { hasAccess: e } = (0, el.ad)();
        e
            ? (0, eA.A)(null, "favorites_empty_sidebar")
            : (0, S.openModalLazy)(async () => {
                  let { default: e } = await n.e("89946").then(n.bind(n, 507809));
                  return (t) => (0, s.jsx)(e, { ...t, source: "favorites_empty_sidebar" });
              });
    }, []);
    return (0, s.jsx)(ei.E, {
        variant: "text-sm/medium",
        color: "text-muted",
        children: ep.intl.format(ef.default.LyZZLX, { onClick: e }),
    });
}
function ex() {
    let { favoriteCount: e, favoriteLimit: t, isAtLimit: n } = (0, el.ft)(),
        { analyticsLocations: l } = (0, ee.Ay)(Q.A.FAVORITES_GUILD_UPSELL_BAR),
        i = r.useCallback(() => {
            (0, eu.A)({ subscriptionTier: eg.pe.TIER_2, analyticsLocations: l });
        }, [l]),
        a = r.useCallback(
            (e, t) =>
                (0, s.jsx)(
                    ei.E,
                    {
                        tag: "span",
                        variant: "text-sm/bold",
                        color: n ? "text-feedback-warning" : "text-default",
                        children: e,
                    },
                    t,
                ),
            [n],
        );
    return (0, s.jsxs)(es.B, {
        direction: "horizontal",
        align: "start",
        gap: 8,
        children: [
            (0, s.jsx)(ei.E, {
                variant: "text-sm/medium",
                color: "text-muted",
                className: eC.tD,
                children: ep.intl.format(ef.default.Yw4x8Q, {
                    count: e,
                    limit: t,
                    maxCount: em.lj,
                    nitroTierName: (0, eh.Dd)(eg.PremiumTypes.TIER_2),
                    onClick: i,
                    countHook: a,
                }),
            }),
            (0, s.jsx)(ec.A, { className: eC.TN }),
        ],
    });
}
function e_() {
    return (0, s.jsxs)("div", {
        className: eC.v0,
        "aria-hidden": "true",
        children: [
            (0, s.jsxs)("div", {
                className: eC._f,
                children: [
                    (0, s.jsx)(er.N, { size: "xs", color: h.A.colors.ICON_MUTED }),
                    (0, s.jsx)("div", { className: eC.D_ }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: eC._f,
                children: [
                    (0, s.jsx)(ea.H, { size: "xs", color: h.A.colors.ICON_MUTED }),
                    (0, s.jsx)("div", { className: eC.VG }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: eC._f,
                children: [
                    (0, s.jsx)(eo.o, { size: "xs", color: h.A.colors.ICON_MUTED }),
                    (0, s.jsx)("div", { className: eC.D_ }),
                ],
            }),
        ],
    });
}
function eN(e) {
    let { variant: t } = e,
        n = "empty" === t;
    return (0, s.jsxs)(es.B, {
        gap: 8,
        children: [
            (0, s.jsxs)(es.B, {
                gap: 8,
                padding: { top: 16, right: 16, bottom: 0, left: 16 },
                fullWidth: !1,
                children: [
                    (0, s.jsx)(ed.D, {
                        variant: "heading-md/semibold",
                        children: ep.intl.string(ef.default["1n0TGE"]),
                    }),
                    n ? (0, s.jsx)(eE, {}) : (0, s.jsx)(ex, {}),
                ],
            }),
            (0, s.jsx)("div", { className: eC.yF }),
            n ? (0, s.jsx)(e_, {}) : null,
        ],
    });
}
var eS = n(554146),
    eI = n(866665),
    eb = n(939249),
    eG = n(789645),
    eR = n(812993),
    ej = n(687966),
    ev = n(131607),
    ey = n(652793),
    eM = n(976860),
    eL = n(746080),
    eT = n(49999),
    eU = n(275695),
    eD = n(93790),
    eO = n(180961);
let eP = r.memo(function (e) {
    let { guildId: t, selected: l } = e,
        [i, a] = (0, ev.ww)([eS.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        o = i === eS.M.GAME_SERVER_HOSTING_NEW_BADGE,
        d = r.useCallback(() => {
            a(eT.i.USER_DISMISS), (0, eM.pX)(B.BVt.CHANNEL(t, eL.VV.GAME_SERVERS));
        }, [t, a]),
        c = r.useCallback(
            (e) => {
                e.stopPropagation(),
                    (0, S.openModalLazy)(async () => {
                        let { default: e } = await n.e("26702").then(n.bind(n, 758909));
                        return (n) => (0, s.jsx)(e, { ...n, guildId: t });
                    });
            },
            [t],
        ),
        u = (0, s.jsxs)("div", {
            className: eD.c,
            children: [
                (0, s.jsx)("div", {
                    className: eO.Xs,
                    children: (0, s.jsx)(eI.m, {
                        text: ep.intl.string(ep.t.fgq1gs),
                        position: "top",
                        children: (0, s.jsx)(eb.D, {
                            onClick: c,
                            "aria-label": ep.intl.string(ep.t.fgq1gs),
                            children: (0, s.jsx)(eG.P, { size: "xs", color: "currentColor", className: eO.gE }),
                        }),
                    }),
                }),
                o &&
                    (0, s.jsx)("div", {
                        className: eO.yW,
                        children: (0, s.jsx)(eR.Lp, {
                            disableColor: !0,
                            text: ep.intl.string(ep.t.y2b7CA),
                            className: eD.q,
                        }),
                    }),
            ],
        });
    return (0, s.jsx)(ey.G, {
        className: eO.Ki,
        id: `game-server-empty-${t}`,
        renderIcon: (e) => (0, s.jsx)(ej._, { size: "md", className: e, color: "currentColor" }),
        text: ep.intl.string(eU.default.vCzwM7),
        selected: l,
        onClick: d,
        trailing: u,
    });
});
var eV = n(361158),
    ew = n(270533),
    eH = n(186111),
    eB = n(949019);
let ek = r.memo(function (e) {
    let { guildId: t, selected: n } = e,
        l = (0, S.useHasAnyModalOpen)(),
        i = (0, u.bG)([eH.A], () => eH.A.hasLayers()),
        a = (0, eV.xr)((e) => e.fullScreenLayers.length > 0),
        [o, d] = (0, ev.ww)([eS.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        c = o === eS.M.GAME_SERVER_HOSTING_NEW_BADGE,
        [h, A] = (0, ev.ww)(l || i || a || !c ? [] : [eS.M.GAME_SERVER_HOSTING_NEW_COACHMARK], t),
        m = r.useCallback(
            (e) => {
                d(e), A(e);
            },
            [d, A],
        ),
        g = r.useCallback(() => {
            m(eT.i.USER_DISMISS), (0, eM.pX)(B.BVt.CHANNEL(t, eL.VV.GAME_SERVERS));
        }, [t, m]),
        f = r.useRef(null),
        p = h === eS.M.GAME_SERVER_HOSTING_NEW_COACHMARK,
        C = r.useCallback(() => (0, s.jsx)(ew.mn, { channelRowRef: f, guildId: t, markAsDismissed: m }), [t, m]);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(ey.G, {
                ref: f,
                id: `game-server-${t}`,
                renderIcon: (e) => (0, s.jsx)(ej._, { size: "md", className: e, color: "currentColor" }),
                text: ep.intl.string(eU.default.vCzwM7),
                selected: n,
                onClick: g,
                trailing: c
                    ? (0, s.jsx)(eR.Lp, { disableColor: !0, text: ep.intl.string(ep.t.y2b7CA), className: eB.q })
                    : null,
            }),
            p && C(),
        ],
    });
});
var eF = n(177953),
    eK = n(533550),
    ez = n(624458),
    eW = n(844944),
    eY = n(513461),
    eX = n(663997),
    eq = n(221950);
function eZ(e) {
    let { guild: t, selected: n } = e,
        l = (0, u.bG)([O.A], () => O.A.can(B.xBc.KICK_MEMBERS, t)),
        i = (0, u.bG)([eW.A], () => eW.A.getSubmittedGuildJoinRequestTotal(t.id)),
        a = l ? (i ?? 0) : 0;
    r.useEffect(() => {
        l &&
            t.features.has(B.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
            t.features.has(B.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            ez.A.fetchGuildJoinRequests({ guildId: t.id, status: eY.B5.SUBMITTED, limit: eX.L });
    }, [l, t]);
    let o = r.useCallback(() => {
            (0, eq.aZ)(t.id);
        }, [t.id]),
        d = (0, eK.q8)(t.id, eS.M.MEMBERS_LAUNCH_UPSELL);
    return (0, s.jsx)("div", {
        ref: d,
        children: (0, s.jsx)(ey.G, {
            id: `members-${t.id}`,
            renderIcon: (e) => (0, s.jsx)(eF.n, { size: "md", color: "currentColor", className: e }),
            text: ep.intl.string(ep.t.oclz3Z),
            selected: n,
            onClick: o,
            trailing: a > 0 ? (0, s.jsx)(eR.hV, { count: a }) : null,
        }),
    });
}
var eJ = n(632015);
function e$(e) {
    let { guild: t, selected: n } = e;
    return (0, s.jsx)(ey.G, {
        id: `guild-space-tab-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(eJ.f, { size: "md", color: "currentColor", className: e }),
        text: ep.intl.string(ep.t["04IVMq"]),
        selected: n,
        onClick: function () {
            (0, eM.pX)(B.BVt.CHANNEL(t.id, eL.VV.GUILD_SPACE));
        },
    });
}
var eQ = n(581007),
    e0 = n(522435),
    e1 = n(285406),
    e2 = n(582904),
    e3 = n(419534),
    e9 = n(503698),
    e7 = n.n(e9),
    e5 = n(695366),
    e8 = n(104510),
    e6 = n(544048),
    e4 = n(868652),
    te = n(379229),
    tt = n(482487),
    tn = n(914732),
    tl = n(828162),
    ti = n(853513),
    ts = n(689599);
function tr(e) {
    let { indicator: t } = e;
    if (null == t) return null;
    switch (t.type) {
        case te.cD.WARNING:
            return (0, s.jsx)(e5.E, { color: h.A.colors.STATUS_WARNING, size: "sm" });
        case te.cD.UNREAD:
            return (0, s.jsx)(eR.hV, { count: t.count });
        default:
            return null;
    }
}
let ta = { animation: { BEG: 0, END: 75 }, LOOP: { BEG: 76, END: 376 } },
    to = r.memo(function (e) {
        let { guildId: t, selected: l } = e,
            i = (0, tn.Ay)(t),
            { showNewBadgeOnRow: a, dismissNewBadgeIfShown: o } = (0, tt.A)(
                t,
                i?.indicator != null || i?.popout != null,
            ),
            d = r.useCallback(() => {
                o(),
                    (0, e4.Zm)(t),
                    (0, tl.A)(t, Q.A.GUILD_POWERUPS_CHANNEL_LIST_ROW),
                    i?.popout?.markAsDismissed(eT.i.INDIRECT_ACTION);
            }, [t, o, i]),
            c = r.useRef(null),
            A = (0, S.useModalsStore)(S.hasAnyModalOpenSelector),
            m = (0, u.bG)([eH.A], () => eH.A.hasLayers()),
            g = (0, eV.xr)((e) => e.fullScreenLayers.length > 0),
            f = A || m || g,
            p = r.useCallback(() => {
                if (i?.popout == null || f) return null;
                switch (i?.popout?.type) {
                    case te.o.LEVEL_REACHED:
                        return (0, s.jsx)(ew.HW, { guildId: t, channelRowRef: c, ...i.popout });
                    case te.o.PERKS_AVAILABLE:
                        return (0, s.jsx)(ew.UB, { guildId: t, channelRowRef: c, ...i.popout });
                    case te.o.PERKS_PURCHASABLE:
                        return (0, s.jsx)(ew.lw, { guildId: t, channelRowRef: c, ...i.popout });
                    case te.o.NEW_PERK_AVAILABLE:
                        return (0, s.jsx)(ew.bo, { guildId: t, channelRowRef: c, ...i.popout });
                    case te.o.BOOST_TO_UNLOCK:
                        return (0, s.jsx)(ew.Gw, { guildId: t, channelRowRef: c, ...i.popout });
                    case te.o.EXPIRING_PERK:
                        return (0, s.jsx)(ew.Mr, { guildId: t, channelRowRef: c, ...i.popout });
                    case te.o.GAME_SERVER_HOSTING_AVAILABLE:
                    case te.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE:
                        return (0, s.jsx)(ew.jz, { guildId: t, channelRowRef: c, ...i.popout });
                    case te.o.GAME_SERVER_NEW_GAMES:
                        return (0, s.jsx)(ew.YX, { guildId: t, channelRowRef: c, ...i.popout });
                    case te.o.GAME_SERVER_PRICING_CHANGE:
                        return (0, s.jsx)(ew.Ns, { guildId: t, channelRowRef: c, ...i.popout });
                    default:
                        return (0, s.jsx)("div", {});
                }
            }, [t, i?.popout, c, f]),
            [C, E] = r.useState(null);
        r.useEffect(() => {
            i?.popout == null && E(null);
        }, [i?.popout]);
        let x = r.useCallback((e) => {
            E(e);
        }, []);
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(ey.G, {
                    ref: c,
                    className: ts.kL,
                    id: `skill-trees-${t}`,
                    renderIcon: (e) => (0, s.jsx)(e8._, { size: "md", className: e, color: "currentColor" }),
                    background:
                        i?.popout != null &&
                        (0, s.jsx)("div", {
                            className: ts.Fi,
                            children: (0, s.jsx)(e6.t, {
                                nextScene: null == C ? "animation" : "LOOP",
                                className: ts.UU,
                                sceneSegments: ta,
                                importData: () => n.e("67807").then(n.t.bind(n, 217762, 19)),
                                onScenePlay: x,
                                rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                            }),
                        }),
                    text: (0, s.jsx)("span", {
                        className: e7()({ [ts.A7]: i?.showUnread === !0 }),
                        children: ep.intl.string(ti.default.yv3DJJ),
                    }),
                    selected: l,
                    onClick: d,
                    showUnread: i?.showUnread === !0,
                    trailing: a
                        ? (0, s.jsx)(eR.Lp, {
                              text: ep.intl.string(ep.t.y2b7CA),
                              color: h.A.colors.BACKGROUND_BRAND.css,
                          })
                        : (0, s.jsx)(tr, { indicator: i?.indicator }),
                }),
                p(),
            ],
        });
    });
var td = n(534740),
    tc = n(717421),
    tu = n(442433),
    th = n(230135),
    tA = n(228366);
let tm = {};
class tg extends u.Ay.PersistedStore {
    static displayName = "GuildBoostingProgressBarPersistedStore";
    static persistKey = "PremiumGuildProgressBarPersistedStore";
    initialize(e) {
        null != e && (tm = e);
    }
    getState() {
        return tm;
    }
    getCountForGuild(e) {
        return tm[e];
    }
}
let tf = new tg(tA.h, {
    APPLIED_GUILD_BOOST_COUNT_UPDATE: function (e) {
        let { guildId: t, premiumCount: n } = e;
        tm = { ...tm, [t]: n };
    },
    APPLIED_GUILD_BOOST_COUNT_RESET: function () {
        tm = {};
    },
});
var tp = n(147925),
    tC = n(363487),
    tE = n(568065);
function tx(e) {
    return (0, r.useMemo)(() => {
        if (null == e) return 0;
        let t = e?.features.has(B.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0 ? 0 : B.M2T[B.TVA.TIER_3],
            n = Object.values(tE.sy),
            l = Object.values(tE.YV);
        return (
            n.concat(l).forEach((n) => {
                null == n.includedInLevel && (n.isEnabled?.(e.id) ?? !0) && (t += n.boostPrice);
            }),
            t
        );
    }, [e]);
}
var t_ = n(511636);
let tN = r.forwardRef((e, t) => {
    let { appliedBoostCount: n, maxBoostCount: l, premiumSubscriberCount: i, className: a } = e,
        o = n >= l,
        d = Math.min((n / l) * 100, 100),
        c = `calc(${d}% - 4px)`,
        [u, h] = (0, tc.z)(
            () => ({ width: n === i ? c : "calc(0% - 0px)", config: { tension: 250, damping: 5, mass: 1 } }),
            "respect-motion-settings",
            [n, i],
        );
    return (
        r.useEffect(() => {
            h({ width: c });
        }, [c, h]),
        (0, s.jsxs)("div", {
            ref: t,
            className: t_.hQ,
            children: [
                (0, s.jsx)("div", { className: e7()(t_.L$, a) }),
                (0, s.jsx)(td.animated.div, { className: e7()(t_.qB, { [t_.mu]: d <= 5 }), style: u }),
                (0, s.jsxs)("div", {
                    className: t_.FS,
                    children: [
                        (0, s.jsxs)("div", {
                            className: t_.Ui,
                            children: [
                                (0, s.jsx)(ei.E, {
                                    className: t_.Qq,
                                    variant: "text-xs/semibold",
                                    children: ep.intl.string(ti.default.NI6Ihe),
                                }),
                                i >= l &&
                                    (0, s.jsx)(ei.E, {
                                        className: t_.Qq,
                                        variant: "text-xs/semibold",
                                        children: "\uD83C\uDF89",
                                    }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: t_.Ui,
                            children: [
                                (0, s.jsx)(ei.E, {
                                    className: e7()(t_.Qq, t_.ue),
                                    variant: "text-xs/semibold",
                                    children: o
                                        ? ep.intl.formatToPlainString(ti.default["Ehpq+7"], { appliedBoostCount: n })
                                        : ep.intl.formatToPlainString(ti.default["/rbPDs"], {
                                              appliedBoostCount: n,
                                              maxBoostCount: l,
                                          }),
                                }),
                                (0, s.jsx)(tp.A, {
                                    width: 12,
                                    height: 12,
                                    direction: tp.A.Directions.RIGHT,
                                    className: e7()(t_.Qq, t_.ue),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
function tS(e) {
    let { guild: t, withMargin: l } = e,
        i = tx(t),
        a = (0, tC.A)(t.id),
        o = r.useCallback(() => {
            (0, tl.A)(t.id, Q.A.GUILD_BOOSTING_SIDEBAR_DISPLAY);
        }, [t.id]),
        d = (0, u.bG)([tf], () => tf.getCountForGuild(t.id) ?? 0);
    r.useEffect(() => {
        d !== t.premiumSubscriberCount && (0, th.u)(t.id, t.premiumSubscriberCount);
    }, [t.id, d, t.premiumSubscriberCount]);
    let c = r.useCallback(
        (e) => {
            a &&
                (0, tu.L3)(e, async () => {
                    let { default: e } = await n.e("71728").then(n.bind(n, 709843));
                    return (n) => (0, s.jsx)(e, { ...n, guild: t });
                });
        },
        [a, t],
    );
    return (0, s.jsx)(eb.D, {
        "aria-label": void 0,
        role: "button",
        focusProps: { offset: { left: 10, right: 4 } },
        onClick: o,
        className: e7()(t_.kL, { [t_.aF]: l }),
        onContextMenu: c,
        children: (0, s.jsx)(tN, {
            appliedBoostCount: d,
            maxBoostCount: i,
            premiumSubscriberCount: t.premiumSubscriberCount,
        }),
    });
}
function tI(e) {
    let { guild: t, withMargin: n } = e;
    return (0, s.jsx)(tS, { guild: t, withMargin: n });
}
tN.displayName = "GuildPowerupsProgressBarUI";
var tb = n(455234),
    tG = n(181079),
    tR = n(607567),
    tj = n(403362),
    tv = n(996439),
    ty = n(935208),
    tM = n(63995),
    tL = n(518769);
function tT(e) {
    let { voiceState: t, userNick: n, user: l } = e,
        i = (0, tR.hz)(t, n);
    return { user: l, voiceState: t, nick: n, comparator: i };
}
var tU = n(787541),
    tD = n(79858),
    tO = n(600761),
    tP = n(72314),
    tV = n(297469),
    tw = n(960755),
    tH = n(633965),
    tB = n(702841),
    tk = n(41200),
    tF = n(831617),
    tK = n(589603),
    tz = n(496767),
    tW = n(134413),
    tY = n(701785),
    tX = n(101611),
    tq = n(473529),
    tZ = n(978165),
    tJ = n(960253),
    t$ = n(770666),
    tQ = n(508654),
    t0 = n(470452),
    t1 = n(521427);
let t2 = (0, n(945810).mj)({
    name: "2026-04-mobile-boost-progress-bar",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var t3 = n(871123),
    t9 = n(683180),
    t7 = n(281405),
    t5 = n(3026),
    t8 = n(821609),
    t6 = n(499373),
    t4 = n(259678),
    ne = n(847374),
    nt = n(285796),
    nn = n(914430),
    nl = n(47167),
    ni = n(485947),
    ns = n(20427),
    nr = n(551851),
    na = n(485596);
function no(e) {
    e.stopPropagation();
}
function nd(e) {
    let { label: t, onClick: n, tabIndex: l } = e;
    return (0, s.jsx)(eI.m, {
        text: t,
        children: (0, s.jsx)(eb.D, {
            className: e7()(na.c9, na.ih),
            onClick: n,
            tabIndex: l,
            role: "button",
            "aria-label": t,
            children: (0, s.jsx)(t6.T, { size: "xs", color: "currentColor", className: na.hs }),
        }),
    });
}
let nc = J(
        r.memo(function (e) {
            let t,
                {
                    channel: l,
                    connectChannelDragSource: i,
                    connectChannelDropTarget: a,
                    disableManageChannels: o,
                    position: c,
                    sortingPosition: h,
                    hideIcon: A,
                    children: m,
                } = e,
                g = (0, u.bG)([V.Ay], () => V.Ay.isChannelMuted(l.getGuildId(), l.id)),
                f = (0, u.bG)([M.A], () => M.A.isCollapsed(l.id)),
                p = (0, u.bG)([O.A], () => O.A.can(B.xBc.MANAGE_CHANNELS, l)),
                C = (0, nl.Ay)(l);
            t = null != h ? (c > h ? na.mU : na.TR) : na.fx;
            let E = r.useCallback(() => {
                    f ? (0, nn.fh)(l.id) : (0, nn.Gv)(l.id);
                }, [l.id, f]),
                x = r.useCallback(
                    (e) => {
                        if ("null" !== l.id) {
                            let t = D.A.getGuild(l.getGuildId());
                            null != t &&
                                (0, tu.L3)(e, async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("26132"),
                                        n.e("91763"),
                                        n.e("38730"),
                                        n.e("35321"),
                                        n.e("50033"),
                                        n.e("3998"),
                                        n.e("12255"),
                                        n.e("40959"),
                                        n.e("30997"),
                                        n.e("79995"),
                                        n.e("91377"),
                                        n.e("35723"),
                                        n.e("66378"),
                                        n.e("73589"),
                                    ]).then(n.bind(n, 617396));
                                    return (n) => (0, s.jsx)(e, { ...n, channel: l, guild: t });
                                });
                        }
                    },
                    [l],
                ),
                _ = r.useCallback(() => {
                    let e = l.type === B.rbe.GUILD_CATEGORY ? null : l.type,
                        t = l.getGuildId();
                    null != t &&
                        (0, S.openModalLazy)(async () => {
                            let { default: i } = await Promise.all([
                                n.e("98574"),
                                n.e("94629"),
                                n.e("99726"),
                                n.e("36865"),
                                n.e("3589"),
                                n.e("92513"),
                                n.e("89916"),
                                n.e("60773"),
                                n.e("8018"),
                                n.e("20379"),
                                n.e("77487"),
                                n.e("19193"),
                                n.e("7775"),
                                n.e("58608"),
                                n.e("28034"),
                            ]).then(n.bind(n, 333369));
                            return (n) =>
                                (0, s.jsx)(i, {
                                    ...n,
                                    channelType: e,
                                    guildId: t,
                                    categoryId: "null" !== l.id ? l.id : null,
                                });
                        });
                }, [l]),
                N = (0, ns.C)(l);
            null == N && p && !o && (N = { label: ep.intl.string(ep.t["fUYU+j"]), perform: _ });
            let { role: I, tabIndex: b, ...G } = (0, d.rm)(l.id),
                R = r.useRef(null),
                j = r.useRef(null),
                v = (0, s.jsxs)("li", {
                    className: t,
                    "data-dnd-name": C,
                    children: [
                        (0, s.jsx)(t4.vN, {
                            focusTarget: R,
                            ringTarget: j,
                            offset: { left: 4, right: 4 },
                            children: (0, s.jsxs)("div", {
                                ref: j,
                                className: e7()(na.Ki, na.iE, { [na.yZ]: f, [na.SU]: g, [na.vk]: !0 }),
                                onContextMenu: x,
                                children: [
                                    (0, s.jsxs)(eb.D, {
                                        innerRef: R,
                                        className: na.rb,
                                        tabIndex: b,
                                        ...G,
                                        onClick: E,
                                        "aria-label": ep.intl.formatToPlainString(ep.t.y5l3J2, { categoryName: C }),
                                        "aria-expanded": !f,
                                        focusProps: { enabled: !1 },
                                        children: [
                                            (0, s.jsx)(ni.A, {
                                                className: na.UU,
                                                children: (0, s.jsx)(t5.A, { children: C }),
                                            }),
                                            A
                                                ? null
                                                : (0, s.jsx)(ne.a, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: na.Kk,
                                                  }),
                                        ],
                                    }),
                                    (0, s.jsx)("div", {
                                        onClick: no,
                                        className: na.Y_,
                                        children:
                                            null != N
                                                ? (0, s.jsx)(nd, { label: N.label, onClick: N.perform, tabIndex: b })
                                                : null,
                                    }),
                                ],
                            }),
                        }),
                        m,
                    ],
                });
            return null != a && null != i ? a(i(v)) : v;
        }),
    ),
    nu = r.memo(function (e) {
        let { name: t, onDismiss: n, className: l } = e;
        return (0, s.jsx)("li", {
            className: e7()(l, na.fx),
            children: (0, s.jsxs)("div", {
                className: e7()(na.Ki, na._V),
                children: [
                    (0, s.jsx)("div", {
                        className: na.rb,
                        children: (0, s.jsx)(ni.A, { className: na.UU, children: (0, s.jsx)(t5.A, { children: t }) }),
                    }),
                    null != n
                        ? (0, s.jsx)(eI.m, {
                              asContainer: !0,
                              text: ep.intl.string(ep.t["5qNmsU"]),
                              children: (0, s.jsx)(eb.D, {
                                  className: na.r,
                                  onClick: n,
                                  children: (0, s.jsx)(nt.a, { size: "md", color: "currentColor", className: na.X8 }),
                              }),
                          })
                        : null,
                ],
            }),
        });
    }),
    nh = r.memo(function (e) {
        let { category: t } = e,
            n = (0, u.bG)([nr.A], () => nr.A.isVoiceCategoryCollapsed(t.guild.id)),
            l = r.useCallback(() => {
                var e, l;
                n
                    ? ((e = t.guild.id), tA.h.dispatch({ type: "VOICE_CATEGORY_EXPAND", guildId: e, expand: !0 }))
                    : ((l = t.guild.id), tA.h.dispatch({ type: "VOICE_CATEGORY_COLLAPSE", guildId: l, expand: !1 }));
            }, [t.guild.id, n]);
        return (0, s.jsx)("div", {
            className: na.oA,
            children: (0, s.jsx)(t8.$, {
                variant: "secondary",
                fullWidth: !0,
                onClick: l,
                icon: ea.H,
                text: n ? ep.intl.string(ep.t["/eB9Bg"]) : ep.intl.string(ep.t.Q2gPWl),
            }),
        });
    }),
    nA = r.memo(function (e) {
        let { category: t, channel: n } = e,
            l = (0, u.bG)([nr.A], () => nr.A.isVoiceCategoryCollapsed(t.guild.id));
        return l || null == n || n.record.type === B.rbe.GUILD_CATEGORY
            ? l
                ? (0, s.jsx)("li", {
                      className: na.fx,
                      children: (0, s.jsx)("div", {
                          className: e7()(na.Ki, na._V),
                          children: (0, s.jsx)(ni.A, {
                              className: na.UU,
                              children: (0, s.jsx)(t5.A, { children: ep.intl.string(ep.t["V/u9Dy"]) }),
                          }),
                      }),
                  })
                : null
            : (0, s.jsx)("div", { style: { height: 16 } });
    }),
    nm = r.memo(function (e) {
        let { channel: t } = e,
            n = (0, nl.Ay)(t);
        return (0, s.jsx)("li", {
            className: na.fx,
            children: (0, s.jsx)("div", {
                className: e7()(na.Ki, na._V),
                children: (0, s.jsx)(ni.A, { className: na.UU, children: (0, s.jsx)(t5.A, { children: n }) }),
            }),
        });
    });
var ng = n(728321),
    nf = n(244083);
let np = { origin: { x: -36, y: 7 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } };
var nC = n(808240);
let nE = r.memo(function (e) {
    let {
            sectionIndex: t,
            guild: n,
            guildChannels: l,
            guildChannelsVersion: i,
            selectedChannelId: a,
            disableManageChannels: o,
        } = e,
        d = r.useCallback(() => {
            let e = l.getCategoryFromSection(l.recentsSectionNumber);
            if (null == e) return;
            let t = null,
                i = e.getShownChannelAndThreadIds();
            null != a && i.includes(a) && (t = (0, e3.xb)(l)), (0, e3.DD)(n.id, i, t);
        }, [n.id, a, l, i]),
        { density: c } = (0, C.wR)(),
        u = "compact" === c ? 8 : 12;
    switch (t) {
        case tV.PU:
            return (0, s.jsx)("div", { style: { height: u } });
        case tV.bK:
            if (n.features.has(B.GuildFeatures.HUB)) return null;
            return (0, s.jsx)("div", { style: { height: u } });
        case tV.HP:
            return (0, s.jsx)(nu, { name: ep.intl.string(ep.t.mlPMCy) });
        case l.recentsSectionNumber:
            return (0, s.jsx)(nu, { name: ep.intl.string(ep.t.gKcrqM), onDismiss: d });
        case l.voiceChannelsSectionNumber: {
            let e = l.getCategoryFromSection(l.voiceChannelsSectionNumber);
            if (null == e || e.isEmpty()) return null;
            let n = l.getChannelFromSectionRow(t, 0)?.channel;
            return (0, s.jsxs)(r.Fragment, {
                children: [(0, s.jsx)("div", { className: nC.ts }), (0, s.jsx)(nA, { category: e, channel: n })],
            });
        }
        case tV.TF: {
            let e = l.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, s.jsx)(nc, {
                channel: e.record,
                position: e.position,
                disableManageChannels: o,
                children: (0, s.jsx)(ng.A, {
                    inlineSpecs: np,
                    arrowAlignment: nf.oN.TOP,
                    tutorialId: "organize-by-topic",
                    position: "right",
                }),
            });
        }
        default: {
            let e = l.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, s.jsx)(nc, { channel: e.record, position: e.position, disableManageChannels: o });
        }
    }
});
var nx = n(104171),
    n_ = n(186369),
    nN = n(970812),
    nS = n(871237);
function nI(e, t, n) {
    return {
        hasDivider:
            !(function (e, t) {
                if (t === tV.PU) {
                    let t = e.getGuildActionSection().getRows();
                    return (
                        (1 === t.length && t[0] === t7.n.GUILD_PREMIUM_PROGRESS_BAR) ||
                        e.getGuildActionSection().isEmpty()
                    );
                }
                return 0 === e.getSections(!1)[t];
            })(e, n) &&
            (n === tV.PU ||
                ((0, j.ai)(e.id)
                    ? n !== e.getSections(!1).length - 1
                    : n === tV.HP ||
                      (!!t && n !== tV.bK && (n === e.recentsSectionNumber || (e.voiceChannelsSectionNumber, !1))))),
        canHaveVoiceSummary:
            n !== tV.PU &&
            n !== tV.HP &&
            n !== tV.bK &&
            n !== e.recentsSectionNumber &&
            n !== e.voiceChannelsSectionNumber,
    };
}
let nb = r.memo(function (e) {
        let { guildChannels: t, guildChannelsVersion: n } = e,
            l = r.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
        return null == l ? null : (0, s.jsx)(nh, { category: l });
    }),
    nG = r.memo(function (e) {
        let {
                sectionIndex: t,
                guildChannels: n,
                guildChannelsVersion: l,
                voiceStates: i,
                guildId: a,
                selectedChannelId: o,
                selectedVoiceChannelId: d,
                optInEnabled: c,
            } = e,
            { hasDivider: h, canHaveVoiceSummary: A } = r.useMemo(() => nI(n, c, t), [n, c, t, l]),
            m = r.useMemo(() => (t === tV.PU ? null : n.getCategoryFromSection(t)), [n, t, l]),
            g = (0, y.jN)(a),
            { enableWaveformIcon: f } = (0, n_.b)(a, "ChannelListSectionFooter"),
            p = (0, u.yK)([V.Ay], () => {
                if (null == m || !m.isCollapsed || !A) return [];
                let e = m.getChannelRecords(),
                    t = [];
                for (let n of e) {
                    if (!n.isGuildVocal()) continue;
                    let e = V.Ay.isChannelOrParentOptedIn(a, n.id);
                    (!g || e) && t.push(n);
                }
                return t;
            }, [m, A, a, g]),
            C = r.useMemo(
                () => (0, nS.fK)({ channels: p, selectedChannelId: o, selectedVoiceChannelId: d, voiceStates: i }),
                [p, o, d, i],
            );
        if (t === n.voiceChannelsSectionNumber) return (0, s.jsx)(nb, { guildChannels: n, guildChannelsVersion: l });
        let E = h ? (0, s.jsx)("div", { className: nC.ts }) : null;
        return A && 0 !== C.length
            ? (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)("div", {
                          className: nC.qz,
                          children: (0, s.jsx)(nx.Ay, {
                              renderIcon: !0,
                              users: C,
                              max: 8,
                              showUserPopout: !0,
                              guildId: a,
                              renderLeadingIcon: f
                                  ? (e) => (0, s.jsx)(nN.A, { color: "currentColor", className: e7()(e, eO.Gj) })
                                  : void 0,
                          }),
                      }),
                      E,
                  ],
              })
            : E;
    });
var nR = n(625903),
    nj = n(283973),
    nv = n(933832),
    ny = n(435183),
    nM = n(698441),
    nL = n(855687),
    nT = n(816662),
    nU = n(446600),
    nD = n(616356);
function nO(e, t, n) {
    return null != t && !!t && !k(n, e.type);
}
function nP(e, t) {
    return null == t ? eO.fx : e > t ? eO.mU : eO.TR;
}
function nV(e) {
    let { channel: t, disableManageChannels: n, tabIndex: l, forceShowButtons: i, hasChannelInfo: r = !1 } = e;
    return (0, u.bG)(
        [O.A, P.A],
        () =>
            n ||
            (0, j.ai)(P.A.getGuildId()) ||
            (!O.A.can(B.xBc.MANAGE_CHANNELS, t) &&
                !O.A.can(B.xBc.MANAGE_ROLES, t) &&
                !O.A.can(B.xBc.MANAGE_WEBHOOKS, t)) ||
            ((0, w.tr)(t.type) && !O.A.can(B.xBc.VIEW_CHANNEL, t)) ||
            (t.isGuildVocal() && !O.A.can(B.xBc.CONNECT, t)) ||
            !w.bk.has(t.type) ||
            t.isModeratorReportChannel(),
    )
        ? null
        : (0, s.jsx)(eI.m, {
              asContainer: !0,
              text: ep.intl.string(ep.t["3gUsJb"]),
              children: (0, s.jsx)(eb.D, {
                  className: e7()(eO.Xs, i ? eO.Tf : void 0, r ? eO.bw : eO.UI),
                  onClick: function () {
                      ny.Ay.open(t.id);
                  },
                  tabIndex: l,
                  "aria-label": ep.intl.string(ep.t["3gUsJb"]),
                  children: (0, s.jsx)(nR.Z, { size: "xs", color: "currentColor", className: eO.gE }),
              }),
          });
}
function nw(e) {
    let {
            channel: t,
            isDefaultChannel: l = !1,
            locked: i,
            tabIndex: a,
            forceShowButtons: o,
            hasChannelInfo: d = !1,
        } = e,
        c = (0, u.bG)([D.A], () => D.A.getGuild(t.getGuildId())),
        h = (0, u.bG)([nU.A], () => nU.A.getStageInstanceByChannel(t.id), [t.id]),
        A = (0, u.bG)([nM.Ay], () => nM.Ay.getActiveEventByChannel(t.id), [t.id]),
        m = (0, u.bG)([O.A], () => (0, nL.K)(O.A, c, t, h)),
        g = (0, u.bG)([], () =>
            t?.type === B.rbe.GUILD_VOICE ? ep.intl.string(ep.t["EE+P0H"]) : ep.intl.string(ep.t["0jeAXt"]),
        ),
        f = r.useRef(null);
    if (i || !m || t.isModeratorReportChannel() || t.isThread()) return null;
    let p = (0, s.jsx)(nj.R, { size: "xs", className: eO.gE, "aria-hidden": !0, color: "currentColor" });
    return (
        l &&
            (p = (0, s.jsx)(ng.A, {
                childRef: f,
                tutorialId: "instant-invite",
                position: "left",
                children: (0, s.jsx)("div", { ref: f, children: p }),
            })),
        (0, s.jsx)(eI.m, {
            asContainer: !0,
            text: g,
            children: (0, s.jsx)(eb.D, {
                className: e7()(eO.Xs, o ? eO.Tf : void 0, d ? eO.bw : eO.UI),
                onClick: function () {
                    if (null != c) {
                        let e = nD.A.getAllActiveStreams().filter(
                            (e) => e.state !== B.XYD.ENDED && e.channelId === t.id,
                        );
                        (0, S.openModalLazy)(async () => {
                            let { default: l } = await Promise.all([
                                n.e("27574"),
                                n.e("21149"),
                                n.e("59957"),
                                n.e("28136"),
                                n.e("16084"),
                                n.e("22547"),
                            ]).then(n.bind(n, 1310));
                            return (n) =>
                                (0, s.jsx)(l, {
                                    ...n,
                                    guild: c,
                                    channel: t,
                                    streamUserId: 1 === e.length ? e[0].ownerId : null,
                                    source: B.PE1.GUILD_CHANNELS,
                                    guildScheduledEvent: A,
                                });
                        });
                    }
                },
                tabIndex: a,
                "aria-label": g,
                children: p,
            }),
        })
    );
}
function nH(e) {
    let { channel: t } = e;
    return (0, s.jsx)(eI.m, {
        asContainer: !0,
        text: ep.intl.string(ep.t["ROh4T+"]),
        children: (0, s.jsx)(eb.D, {
            className: eO.Xs,
            onClick: function () {
                (0, nT.Ol)(t.guild_id, t.id);
            },
            "aria-label": ep.intl.string(ep.t["ROh4T+"]),
            children: (0, s.jsx)(eG.P, { size: "xs", color: "currentColor", className: eO.gE }),
        }),
    });
}
function nB(e) {
    let { channel: t } = e;
    return (0, s.jsx)(eI.m, {
        asContainer: !0,
        text: ep.intl.string(ep.t["N2c/Un"]),
        children: (0, s.jsx)(eb.D, {
            className: eO.Xs,
            onClick: function () {
                (0, nT.jA)(t.guild_id, t.id, !0, { section: B.JJy.CHANNEL_LIST });
            },
            "aria-label": ep.intl.string(ep.t["N2c/Un"]),
            children: (0, s.jsx)(nv.A, { size: "xs", color: "currentColor", className: eO.gE }),
        }),
    });
}
class nk extends r.PureComponent {
    static defaultProps = { isDefaultChannel: !1 };
    renderEditButton() {
        return (0, s.jsx)(nV, { ...this.props });
    }
    renderInviteButton() {
        return (0, s.jsx)(nw, { ...this.props });
    }
    renderRemoveSuggestionButton() {
        return (0, s.jsx)(nH, { ...this.props });
    }
    renderAcceptSuggestionButton() {
        return (0, s.jsx)(nB, { ...this.props });
    }
    getClassName() {
        let { position: e, sortingPosition: t } = this.props;
        return nP(e, t);
    }
    isDisabled() {
        let { channel: e, sorting: t, sortingType: n } = this.props;
        return nO(e, t, n);
    }
}
var nF = n(929481),
    nK = n(790782);
let nz = J(function (e) {
    let {
            guild: t,
            selectedChannelId: l,
            position: i,
            disableManageChannels: a,
            sorting: o,
            sortingType: d,
            sortingPosition: c,
            connectChannelDragSource: h,
            connectChannelDropTarget: A,
            tabIndex: m,
        } = e,
        g = (0, u.bG)([L.A, U.Ay], () => {
            let e = U.Ay.getDirectoryChannelIds(t.id);
            return 0 === e.length ? null : L.A.getChannel(e[0]);
        }),
        f = (0, u.bG)([L.A], () => L.A.getChannel(g?.parent_id)),
        p = l === g?.id,
        C = (0, nl.Ay)(g),
        E = (0, u.bG)([O.A], () =>
            null != f ? O.A.can(B.xBc.MANAGE_CHANNELS, f) : null != t && O.A.can(B.xBc.MANAGE_CHANNELS, t),
        ),
        x = r.useCallback(
            (e) => {
                null != g &&
                    (0, tu.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("26132"),
                            n.e("30997"),
                            n.e("79995"),
                            n.e("29559"),
                        ]).then(n.bind(n, 994058));
                        return (t) => (0, s.jsx)(e, { ...t, channel: g });
                    });
            },
            [g],
        );
    if (null == g) return null;
    let _ = nP(i, c),
        N = nO(g, o, d),
        S = (0, s.jsx)("div", {
            className: e7()(_, { [eO.r9]: N, [eO.wH]: p }),
            "data-dnd-name": C,
            children: (0, s.jsxs)(nF.Ay, {
                className: eO.Ki,
                channel: g,
                guild: t,
                selected: p,
                onContextMenu: x,
                forceInteractable: !0,
                resolvedUnreadSetting: nK.e.ONLY_MENTIONS,
                children: [
                    (0, s.jsx)(nw, { channel: g, tabIndex: m }),
                    (0, s.jsx)(nV, { channel: g, disableManageChannels: a, tabIndex: m }),
                ],
            }),
        });
    return E && (S = A(h(S))), S;
});
var nW = n(34188),
    nY = n(733391),
    nX = n(832163),
    nq = n(517907),
    nZ = n(31969),
    nJ = n(44724),
    n$ = n(849134),
    nQ = n(770178),
    n0 = n(65347);
let n1 = Math.ceil(Math.sqrt(115200)),
    n2 = (n1 - 240) / 2,
    n3 = r.forwardRef(function (e, t) {
        let { children: n } = e,
            [l, i] = r.useState(-1),
            a = r.useCallback((e) => {
                i(e.contentRect.width);
            }, []),
            o = (0, nQ.w)(a, [], { fireOnMount: !0 }),
            [{ shineSpring: d }, c] = (0, tc.z)(() => ({
                from: { shineSpring: 0 },
                config: { clamp: !0, mass: 1, tension: 170, friction: 38 },
            })),
            u = r.useCallback(
                (e, t) => {
                    c({ shineSpring: 1, delay: t, reset: !0, loop: { reset: !0, delay: 1600 } });
                },
                [c],
            ),
            h = r.useCallback(() => {
                c({ shineSpring: 0, immediate: !0, loop: !1 });
            }, [c]),
            A = r.useMemo(
                () =>
                    n(
                        (0, s.jsx)(td.animated.div, {
                            className: n0.q,
                            style: {
                                transform: d.to(
                                    (e) => `translateX(calc(${e * l}px + ${e * n1}px)) translateY(-50%) rotate(45deg)`,
                                ),
                            },
                        }),
                    ),
                [n, l, d],
            );
        return (
            r.useImperativeHandle(t, () => ({ onMouseEnter: u, onMouseLeave: h }), [u, h]),
            (0, s.jsx)("div", {
                className: n0.i,
                onMouseEnter: u,
                onMouseLeave: h,
                onFocus: u,
                onBlur: h,
                ref: o,
                style: { "--custom-shine-dimensions": "240px", "--custom-shine-rotated-dimensions-delta": `${n2}px` },
                children: A,
            })
        );
    });
var n9 = n(371794),
    n7 = n(240248),
    n5 = n(998218),
    n8 = n(430825),
    n6 = n(601551),
    n4 = n(876772);
let le = r.memo(function (e) {
    let { guild: t, selected: l } = e,
        i = r.useRef(null),
        a = r.useRef(null),
        o = (0, S.useHasAnyModalOpen)(),
        d = (0, u.bG)([eH.A], () => eH.A.hasLayers()),
        c = (0, eV.xr)((e) => e.fullScreenLayers.length > 0);
    r.useEffect(() => {
        (0, nY.Kh)(t.id);
    }, [t.id]);
    let A = (0, u.bG)([nX.A], () => nX.A.getAnnouncement(t.id)),
        m = A?.state === "success" ? A.announcement : void 0,
        [g, f] = (0, ev.x_)(eS.M.GAME_SHOP_NEW_BADGE, t.id, m?.id ?? "", void 0, !0),
        p = g === eS.M.GAME_SHOP_NEW_BADGE && null != m,
        C = (0, t3.nY)(t.id),
        E = (0, nZ.F)("storefront_badge", { applicationId: C }),
        x = (0, nq.A)({ applicationId: C, location: "game_shop_channel_row" }),
        _ = null;
    p ? (_ = ep.intl.string(ep.t.y2b7CA)) : x && (_ = ep.intl.string(n8.default.hriMCc)), null != E && (_ = E.text);
    let [N, I] = (0, ev.x_)(eS.M.GAME_SHOP_NEW_DROP_POPOVER, t.id, m?.id ?? ""),
        b = N === eS.M.GAME_SHOP_NEW_DROP_POPOVER && null != m;
    r.useEffect(() => {
        l && (p && f(eT.i.INDIRECT_ACTION), b && I(eT.i.INDIRECT_ACTION));
    }, [f, I, l, p, b]);
    let G = r.useCallback(() => {
            f(eT.i.TAKE_ACTION), I(eT.i.TAKE_ACTION);
            let e = (0, t3.mq)(t.id),
                n = nX.A.getStorefrontState(e)?.activePage ?? 0;
            (0, eM.pX)(B.BVt.CHANNELS_GAME_SHOP(t.id, n));
        }, [t.id, f, I]),
        R = r.useCallback(() => {
            (0, nJ.X)({ guildId: t.id, forceFetch: b });
        }, [t.id, b]),
        j = r.useCallback(() => {
            I(eT.i.USER_DISMISS);
        }, [I]),
        v = r.useCallback(
            (e) => {
                null != t &&
                    (0, tu.L3)(e, async () => {
                        let { default: e } = await n.e("99523").then(n.bind(n, 41614));
                        return (n) => (0, s.jsx)(e, { ...n, guild: t });
                    });
            },
            [t],
        ),
        y = r.useCallback(() => {
            i.current?.onMouseEnter(null, 500);
        }, [i]),
        M = r.useCallback(
            (e) =>
                (0, s.jsx)(ey.G, {
                    background: (0, s.jsx)("div", { className: n4.D }),
                    innerClassName: n4.Z,
                    ref: a,
                    id: `game-shop-${t.id}`,
                    renderIcon: (e) =>
                        (0, s.jsx)(nW.U, {
                            size: "custom",
                            color: "currentColor",
                            width: 20,
                            height: 20,
                            className: e,
                        }),
                    text: (0, s.jsx)(ei.E, {
                        variant: "text-md/medium",
                        className: n6.UU,
                        children: ep.intl.string(ep.t.vyaWs7),
                    }),
                    selected: l,
                    onMouseDown: R,
                    onClick: G,
                    onContextMenu: v,
                    trailing: (0, s.jsxs)(s.Fragment, {
                        children: [
                            null != _ && (0, s.jsx)(eR.Lp, { text: _, color: h.A.colors.BACKGROUND_BRAND.css }),
                            e,
                        ],
                    }),
                }),
            [t.id, l, R, G, v, _],
        ),
        L = r.useMemo(() => {
            if (null == m) return null;
            switch (m.type) {
                case "guild-application-announcement": {
                    let e =
                            null != m.assetId
                                ? n5.A.toURLSafe((0, n9.YE)(m.applicationId, m.assetId, 256, "webp"))
                                : void 0,
                        t =
                            null != m.backgroundImageAssetId
                                ? n5.A.toURLSafe((0, n9.YE)(m.applicationId, m.backgroundImageAssetId, 256, "webp"))
                                : void 0;
                    if (null == e) return null;
                    return {
                        graphicSource: { type: "sku", imageUrl: e, backgroundImageUrl: t },
                        title: ep.intl.string(ep.t["7PvvS9"]),
                        body: ep.intl.formatToPlainString(ep.t["9J4h1a"], { applicationName: m.applicationName }),
                    };
                }
                case "guild-discord-announcement": {
                    let { videoAssetFullyQualifiedURL: e, assetFullyQualifiedURL: t } = m;
                    if ((0, n7.uJ)(e) && (0, n7.uJ)(t)) return null;
                    return {
                        graphicSource: (0, n7.uJ)(e) ? { type: "asset", src: t } : { type: "video", src: e },
                        title: m.popoverTitle,
                        body: m.popoverBody,
                        actionLabel: m.popoverCta,
                    };
                }
                default:
                    return null;
            }
        }, [m]),
        T = r.useCallback(
            () =>
                b && null != L
                    ? (0, s.jsx)(n$.A, {
                          onActionClick: G,
                          onActionMouseDown: R,
                          onRender: y,
                          onRequestClose: j,
                          targetElementRef: a,
                          ...L,
                      })
                    : null,
            [b, L, G, R, y, j],
        );
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n3, { ref: i, children: M }), !o && !d && !c && T()] });
});
var lt = n(740426),
    ln = n(826673),
    ll = n(591552),
    li = n(202776),
    ls = n(454058),
    lr = n(568548);
function la(e) {
    let { guild: t, selected: l } = e,
        i = (0, li.A)(t),
        a = (0, ln.HX)(eS.M.CHANNEL_BROWSER_NEW_BADGE_NUX),
        o = (0, tB.yK)([ls.A], () =>
            Array.from(ls.A.getNewChannelIds(t.id)).filter((e) => ls.A.shouldIndicateNewChannel(t.id, e)),
        ),
        d = (0, tB.bG)([lr.Ay], () => lr.Ay.hasUnread(t.id, nK.P.GUILD_ONBOARDING_QUESTION)),
        c = o.length > tV.rR,
        u = (0, tB.bG)([ll.A, lr.Ay], () => {
            let e = ll.A.lastFetchedAt(t.id),
                n = lr.Ay.lastMessageId(t.id, nK.P.GUILD_ONBOARDING_QUESTION);
            if (null == n) return !1;
            let l = ty.default.extractTimestamp(n);
            return null != e && e > l;
        }),
        A = r.useCallback(() => {
            (0, eM.pX)(B.BVt.CHANNEL(t.id, i ? eL.VV.CUSTOMIZE_COMMUNITY : eL.VV.CHANNEL_BROWSER));
        }, [t.id, i]),
        m = r.useCallback(
            (e) => {
                (0, tu.L3)(e, async () => {
                    let { default: e } = await Promise.all([n.e("13446"), n.e("17699"), n.e("30412")]).then(
                        n.bind(n, 807431),
                    );
                    return (n) => (0, s.jsx)(e, { ...n, guild: t });
                });
            },
            [t],
        ),
        g = null;
    return (
        (a && !d && !c) ||
            l ||
            u ||
            (g = (0, s.jsx)(eR.Lp, {
                color: h.A.colors.BADGE_BACKGROUND_BRAND.css,
                text: ep.intl.string(ep.t.y2b7CA),
            })),
        (0, s.jsx)(ey.G, {
            id: `channels-${t.id}`,
            renderIcon: (e) => (0, s.jsx)(lt.k, { size: "md", color: "currentColor", className: e }),
            text: i ? ep.intl.string(ep.t.h9mGOP) : ep.intl.string(ep.t.et6wav),
            selected: l,
            onClick: A,
            onContextMenu: m,
            trailing: g,
        })
    );
}
var lo = n(855473);
function ld(e) {
    let { guild: t, selected: n } = e;
    return (0, s.jsx)(ey.G, {
        id: `home-tab-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(lo.Z, { size: "md", color: "currentColor", className: e }),
        text: ep.intl.string(ep.t.VbpLyU),
        selected: n,
        onClick: function () {
            (0, eM.pX)(B.BVt.CHANNEL(t.id, eL.VV.GUILD_HOME));
        },
    });
}
var lc = n(5373),
    lu = n(65995),
    lh = n(408619);
function lA(e, t) {
    return (0, s.jsx)(ei.E, { variant: "text-xs/bold", color: "text-default", children: e }, t);
}
let lm = r.memo(function (e) {
    let { guild: t } = e,
        n = (0, u.bG)([tY.h], () => tY.h.getNewMemberActions(t.id), [t.id]),
        l = (0, u.bG)([lu.A], () => lu.A.getCompletedActions(t.id)),
        i = r.useMemo(() => {
            if (null == n || null == l) return 0;
            let e = 0;
            return (
                n.forEach((t) => {
                    null != l[t.channelId] && e++;
                }),
                e
            );
        }, [l, n]),
        a = null == n ? 0 : n.length,
        o = (0, d.rm)(`progress-bar-${t.id}`);
    return (0, s.jsxs)("li", {
        children: [
            (0, s.jsxs)(eb.D, {
                ...o,
                role: "button",
                focusProps: { offset: { right: 4 } },
                className: lh.G9,
                onClick: function () {
                    (0, eM.pX)(B.BVt.CHANNEL(t.id, eL.VV.GUILD_HOME));
                },
                children: [
                    (0, s.jsxs)("div", {
                        className: lh.A1,
                        children: [
                            (0, s.jsx)(ed.D, { variant: "heading-sm/bold", children: ep.intl.string(ep.t.SnrR3x) }),
                            (0, s.jsxs)("div", {
                                className: lh.Ib,
                                children: [
                                    (0, s.jsx)(ei.E, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        className: lh.Cv,
                                        children: ep.intl.format(ep.t.eqZ1lW, {
                                            numberHook: lA,
                                            total: a.toString(),
                                            completed: i.toString(),
                                        }),
                                    }),
                                    (0, s.jsx)(tp.A, {
                                        className: lh.UE,
                                        width: 16,
                                        height: 16,
                                        direction: tp.A.Directions.RIGHT,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, s.jsx)(lc.i, {
                        className: lh.hr,
                        foregroundGradientColor: [
                            h.A.unsafe_rawColors.GREEN_300.css,
                            h.A.unsafe_rawColors.GREEN_230.css,
                        ],
                        percent: (i / a) * 100 + 3,
                        animate: !0,
                    }),
                ],
            }),
            (0, s.jsx)("div", { role: "separator", className: lh.yF }),
        ],
    });
});
var lg = n(581925);
function lf(e) {
    let { guild: t, selected: n } = e;
    return (0, s.jsx)(ey.G, {
        id: `official-messages-page-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(lg.L, { size: "md", color: "currentColor", className: e }),
        text: ep.intl.string(ep.t.xHEzFh),
        selected: n,
        onClick: function () {
            (0, eM.pX)(B.BVt.CHANNEL(t.id, eL.VV.GUILD_OFFICIAL_MESSAGES));
        },
    });
}
var lp = n(514179);
function lC(e) {
    let { guild: t, selected: l } = e;
    return (0, s.jsx)(ey.G, {
        id: `subscriptions-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(lp.A, { className: e }),
        text: ep.intl.string(ep.t["KzCF/6"]),
        selected: l,
        onClick: function () {
            (0, eM.pX)(B.BVt.CHANNEL(t.id, eL.VV.ROLE_SUBSCRIPTIONS));
        },
        onContextMenu: function (e) {
            null != t &&
                (0, tu.L3)(e, async () => {
                    let { default: e } = await n.e("71911").then(n.bind(n, 978554));
                    return (n) => (0, s.jsx)(e, { ...n, guild: t });
                });
        },
    });
}
var lE = n(506774),
    lx = n(95561),
    l_ = n(289397),
    lN = n(486418),
    lS = n(575926),
    lI = n(440293),
    lb = n(174459),
    lG = n(634654),
    lR = n(726965);
function lj(e) {
    let { guildId: t, selected: n, handleClick: l } = e,
        i = (0, lI.w)(t),
        r = (0, tB.bG)([D.A], () => D.A.getGuild(t)),
        a = r?.features.has(B.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !0,
        o = "false" === lE.w.get(lG.bJ, "false"),
        d = (0, tB.bG)([$.Ay], () => $.Ay.useReducedMotion);
    return (0, s.jsx)(ey.G, {
        id: `shop-${t}`,
        className: e7()(lR.A2, { [lR.wH]: n, [lR.ST]: o }),
        innerClassName: lR.LE,
        renderIcon: (e) => (0, s.jsx)(lS.h, { width: 20, height: 20, className: e7()([e, lR.sV]) }),
        text: ep.intl.string(ep.t.al5EXL),
        selected: n,
        onClick: l,
        trailing: (0, s.jsxs)("div", {
            className: lR.ai,
            children: [
                d
                    ? (0, s.jsx)(eR.Lp, {
                          color: h.A.unsafe_rawColors.BRAND_260.css,
                          text: ep.intl.string(ep.t.y2b7CA),
                          className: lR.Ad,
                      })
                    : (0, s.jsx)("img", {
                          src: (0, l_.n)("server_products/storefront/money.gif"),
                          className: lR.TG,
                          alt: "",
                      }),
                n &&
                    (0, s.jsx)(eb.D, {
                        className: lR.b,
                        onClick: function (e) {
                            e.stopPropagation(),
                                (0, ln.Dr)(eS.M.SERVER_SHOP_PHANTOM_PREVIEW),
                                lb.default.track(B.HAw.GUILD_SHOP_PREVIEW_CLICK, {
                                    ...(0, lx.H$)(t),
                                    action_taken: lG.hN.DISMISS_CHANNEL_ROW,
                                }),
                                (i && a) || (0, eM.bG)(B.BVt.CHANNEL(t, U.Ay.getDefaultChannel(t)?.id));
                        },
                        "aria-label": ep.intl.string(ep.t.cpT0Cq),
                        children: (0, s.jsx)(nt.a, { size: "xs", color: "currentColor" }),
                    }),
            ],
        }),
    });
}
function lv(e) {
    let { guild: t, selected: l } = e;
    function i() {
        lE.w.set(lG.bJ, "true"), (0, eM.pX)(B.BVt.CHANNEL(t.id, eL.VV.GUILD_SHOP));
    }
    return (0, lN.P)(t)
        ? (0, s.jsx)(lj, { guildId: t.id, selected: l, handleClick: i })
        : (0, s.jsx)(ey.G, {
              id: `shop-${t.id}`,
              renderIcon: (e) => (0, s.jsx)(lS.h, { width: 20, height: 20, className: e }),
              text: ep.intl.string(ep.t.al5EXL),
              selected: l,
              onClick: i,
              onContextMenu: function (e) {
                  null != t &&
                      (0, tu.L3)(e, async () => {
                          let { default: e } = await n.e("52565").then(n.bind(n, 345332));
                          return (n) => (0, s.jsx)(e, { ...n, guild: t });
                      });
              },
          });
}
var ly = n(308528),
    lM = n(262763),
    lL = n(499211),
    lT = n(406704),
    lU = n(747926),
    lD = n(977997),
    lO = n(807632),
    lP = n(37411);
function lV(e) {
    let { thread: t, tabIndex: n } = e,
        l = (0, lO.YG)(t),
        i = (0, lO.IO)(t),
        r = (0, lT._M)(t);
    return l && i && r ? (0, s.jsx)(lw, { thread: t, tabIndex: n }) : null;
}
function lw(e) {
    let { thread: t, tabIndex: n } = e,
        l = (0, u.bG)([lD.A], () => lD.A.isInChannel(t.id), [t.id]),
        { needSubscriptionToAccess: i } = (0, lL.A)(t.id),
        a = r.useCallback(() => {
            lM.A.handleVoiceConnect({ channel: t, connected: l, needSubscriptionToAccess: i, locked: !1 });
        }, [t, l, i]),
        o = r.useCallback(() => {
            (0, lU.JA)(t, !0, lP.H9.CHANNEL_LIST);
        }, [t]);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(eI.m, {
                asContainer: !0,
                text: ep.intl.string(ep.t["96ANUN"]),
                children: (0, s.jsx)(eb.D, {
                    className: eO.Xs,
                    onClick: a,
                    tabIndex: n,
                    "aria-label": ep.intl.string(ep.t["96ANUN"]),
                    children: (0, s.jsx)(ea.H, { size: "xs", color: "currentColor", className: eO.gE }),
                }),
            }),
            (0, s.jsx)(eI.m, {
                asContainer: !0,
                text: ep.intl.string(ep.t.ZXxLQg),
                children: (0, s.jsx)(eb.D, {
                    className: eO.Xs,
                    onClick: o,
                    tabIndex: n,
                    "aria-label": ep.intl.string(ep.t.ZXxLQg),
                    children: (0, s.jsx)(eo.o, { size: "xs", color: "currentColor", className: eO.gE }),
                }),
            }),
        ],
    });
}
var lH = n(152007);
function lB(e) {
    return null != e && e > 0;
}
var lk = n(405018),
    lF = n(428689),
    lK = n(785574);
function lz(e) {
    let { total: t, users: n, videoLimit: l } = e;
    return (0, s.jsxs)("div", {
        className: lK.iE,
        children: [
            (0, s.jsxs)(ei.E, {
                tag: "span",
                color: "text-subtle",
                variant: "text-xs/medium",
                className: e7()(lK.VV, { [lK.Ki]: l, [lK.$G]: n >= 100 }),
                children: [
                    l ? (0, s.jsx)(lF.n, { size: "md", color: "currentColor", className: lK.LB }) : null,
                    n.toString().padStart(2, "0"),
                ],
            }),
            (0, s.jsx)(ei.E, {
                tag: "span",
                color: "text-subtle",
                variant: "text-xs/medium",
                className: e7()(lK.X5, { [lK.$G]: t >= 100 }),
                children: t.toString().padStart(2, "0"),
            }),
        ],
    });
}
function lW(e) {
    let { channel: t, video: n, userCount: l } = e,
        { limit: i } = (0, lk.A)(t),
        r = -1,
        a = !1;
    return (
        t.userLimit > 0 && (r = t.userLimit),
        n && i > 0 && ((a = r < 0 || i < r), (r = r > 0 ? Math.min(r, i) : i)),
        (0, s.jsx)(lz, { users: l, total: r, videoLimit: a })
    );
}
var lY = n(664841);
function lX(e) {
    let { mentionsCount: t, isMentionLowImportance: n } = e;
    return (0, s.jsx)("div", {
        className: lY.R,
        "aria-hidden": !0,
        children: (0, s.jsx)(eR.hV, {
            count: t,
            color: n ? h.A.colors.BACKGROUND_MOD_STRONG.css : h.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
        }),
    });
}
var lq = n(588224),
    lZ = n(684086);
function lJ(e) {
    let { thread: t, countInVoice: n, hasVideo: l, mentionCount: i, isMentionLowImportance: r } = e,
        a = n > 0 && t.userLimit > 0,
        o = lB(i);
    return a || o
        ? (0, s.jsxs)("div", {
              className: eO.yW,
              children: [
                  a ? (0, s.jsx)(lW, { userCount: n, video: l, channel: t }) : null,
                  o ? (0, s.jsx)(lX, { mentionsCount: i, isMentionLowImportance: r }) : null,
              ],
          })
        : null;
}
function l$(e) {
    let { style: t, withGuildIcon: n, inverted: l } = e,
        i = { className: e7()(lZ.GI, { [lZ.a7]: n }, { [lZ.BJ]: l }), style: t },
        { density: r } = (0, C.wR)();
    switch (r) {
        case "cozy":
            return (0, s.jsxs)("svg", {
                ...i,
                width: "10",
                height: "20",
                viewBox: "0 0 10 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    (0, s.jsx)("path", {
                        d: "M0 15H2c0 1.6569 1.3432 3 3 3v2c-2.7614 0-5-2.2386-5-7ZM0 4H2V15H0V4ZM2 4H0C0 3.4477.4477 3 1 3c.5523 0 1 .4477 1 1Z",
                        fill: "currentColor",
                    }),
                    (0, s.jsx)("path", {
                        d: "M6 20V18H9v2H6Zm3 0V18s1 0 1 1-1 1-.989 1.004ZM6 18v2H5V18H6Z",
                        fill: "currentColor",
                    }),
                ],
            });
        case "compact":
            return (0, s.jsxs)("svg", {
                ...i,
                width: "10",
                height: "19",
                viewBox: "0 0 10 19",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    (0, s.jsx)("path", {
                        d: "M0 11H2c0 1.6569 1.3432 3 3 3v2c-2.7614 0-5-2.2386-5-7ZM0 0H2V11H0V0ZM2 0H0C0-.5523.4477-1 1-1c.5523 0 1 .4477 1 1Z",
                        fill: "currentColor",
                    }),
                    (0, s.jsx)("path", {
                        d: "M6 16V14H9v2H6Zm3 0V14s1 0 1 1-1 1-.989 1.004ZM6 14v2H5V14H6Z",
                        fill: "currentColor",
                    }),
                ],
            });
        default:
            return (0, s.jsxs)("svg", {
                ...i,
                width: "10",
                height: "19",
                viewBox: "0 0 10 19",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    (0, s.jsx)("path", {
                        d: "M0 13H2c0 1.6569 1.3432 3 3 3v2c-2.7614 0-5-2.2386-5-7ZM0 2H2V13H0V2ZM2 2H0C0 1.4477.4477 1 1 1c.5523 0 1 .4477 1 1Z",
                        fill: "currentColor",
                    }),
                    (0, s.jsx)("path", {
                        d: "M6 18V16H9v2H6Zm3 0V16s1 0 1 1-1 1-.989 1.004ZM6 16v2H5V16H6Z",
                        fill: "currentColor",
                    }),
                ],
            });
    }
}
let lQ = r.memo(function (e) {
        let { thread: t, isSelectedChannel: l, isSelectedVoice: i, isLast: a, withGuildIcon: o } = e,
            c = (0, u.bG)([tR.Ay], () => tR.Ay.getVoiceStatesForChannel(t), [t]),
            h = (0, u.bG)([lD.A], () => lD.A.hasVideo(t.id)),
            {
                unread: A,
                mentionCount: m,
                isMentionLowImportance: g,
            } = (0, u.cf)([lr.Ay], () => ({
                unread: lr.Ay.hasUnread(t.id),
                mentionCount: lr.Ay.getMentionCount(t.id),
                isMentionLowImportance: lr.Ay.getIsMentionLowImportance(t.id),
            })),
            f = (0, u.bG)([lH.A], () => lH.A.isMuted(t.id)),
            p = r.useCallback(
                (e) => {
                    (0, lU.JA)(t, !e.shiftKey, lP.H9.CHANNEL_LIST);
                },
                [t],
            ),
            C = r.useCallback(() => {
                ly.A.preload(t.guild_id, t.id);
            }, [t.guild_id, t.id]),
            E = r.useCallback(
                (e) => {
                    let l = L.A.getChannel(t.id);
                    null != l &&
                        (0, tu.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("26132"),
                                n.e("91763"),
                                n.e("38730"),
                                n.e("91671"),
                                n.e("47502"),
                                n.e("3998"),
                                n.e("43266"),
                                n.e("12255"),
                                n.e("40959"),
                                n.e("96804"),
                                n.e("65200"),
                                n.e("85802"),
                                n.e("26250"),
                                n.e("51212"),
                                n.e("84615"),
                            ]).then(n.bind(n, 612826));
                            return (t) => (0, s.jsx)(e, { ...t, channel: l });
                        });
                },
                [t.id],
            ),
            x = null == c ? 0 : c.length,
            { role: _, ...N } = (0, d.rm)(t.id),
            S = r.useRef(null),
            I =
                m > 0
                    ? ep.intl.formatToPlainString(ep.t["ZL7+I6"], { channelName: t.name, mentionCount: m })
                    : A
                      ? ep.intl.formatToPlainString(ep.t.YlVvmc, { channelName: t.name })
                      : ep.intl.formatToPlainString(ep.t["0nZpiF"], { channelName: t.name });
        return (0, s.jsxs)("li", {
            role: _,
            className: e7()(eO.fx, { [eO.wH]: l }),
            children: [
                (0, s.jsx)(l$, { withGuildIcon: o }),
                a
                    ? null
                    : (0, s.jsx)(l$, {
                          withGuildIcon: o,
                          inverted: !0,
                          style: { transform: "rotateX(180deg) translateY(-9px)" },
                      }),
                (0, s.jsx)(t4.vN, {
                    focusTarget: S,
                    ringTarget: S,
                    offset: { top: 2, bottom: 2, right: 4 },
                    children: (0, s.jsxs)("div", {
                        className: e7()(eO.Ki, n6.iE, n6.ZS, {
                            [n6.J1]: l,
                            [n6.F4]: !l && f,
                            [n6.V2]: !f && !l && A,
                            [n6.lY]: o,
                        }),
                        onMouseDown: C,
                        onContextMenu: E,
                        children: [
                            !A || f || l ? null : (0, s.jsx)("div", { className: e7()(n6.gy, n6.WS) }),
                            (0, s.jsx)(eb.D, {
                                ...N,
                                innerRef: S,
                                className: n6.nf,
                                onClick: p,
                                "aria-label": I,
                                focusProps: { enabled: !1 },
                                children: (0, s.jsxs)("div", {
                                    className: e7()(n6.Y5, n6.__invalid_threadMainContent),
                                    children: [
                                        (0, s.jsx)(t5.A, {
                                            className: n6.UU,
                                            "aria-hidden": !0,
                                            children: (0, s.jsx)(ei.E, {
                                                variant: "text-sm/medium",
                                                color: "none",
                                                children: t.name,
                                            }),
                                        }),
                                        (0, s.jsxs)("div", {
                                            className: n6.Y_,
                                            onClick: nF.dG,
                                            onKeyDown: nF.dG,
                                            children: [
                                                (0, s.jsx)(lJ, {
                                                    thread: t,
                                                    countInVoice: x,
                                                    hasVideo: h,
                                                    mentionCount: m,
                                                    isMentionLowImportance: g,
                                                }),
                                                (0, s.jsx)(lV, { thread: t, tabIndex: N.tabIndex }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                }),
                (0, s.jsx)(lq.A, {
                    channel: t,
                    collapsed: !i && 1 !== c.length,
                    collapsedMax: 6,
                    voiceStates: c,
                    isThread: !0,
                }),
            ],
        });
    }),
    l0 = r.memo(function (e) {
        let { channel: t, selectedChannel: n, selectedVoiceChannelId: l, sortedThreadIds: i, withGuildIcon: r } = e,
            a = (0, nl.Ay)(t),
            { density: o } = (0, C.wR)(),
            d = (0, u.yK)([L.A], () => i.map((e) => L.A.getChannel(e)).filter(tj.Vq), [i]),
            c = (0, u.bG)([tR.Ay], () => {
                let e = d[d.length - 1];
                if (null == e) return 0;
                let t = tR.Ay.getVoiceStates(e.guild_id)[e.id];
                return null == t || 0 === t.length ? 0 : l !== e.id ? 40 : 32 * t.length + 8;
            });
        return (0, s.jsx)("li", {
            className: lZ.kL,
            children: (0, s.jsxs)("ul", {
                role: "group",
                "aria-label": ep.intl.formatToPlainString(ep.t.EiyIi6, { channelName: a }),
                children: [
                    (0, s.jsx)("div", {
                        className: e7()(lZ.eh, { [lZ.ET]: r }),
                        style: { bottom: ("cozy" === o ? 28 : 24) + c },
                    }),
                    d.map((e, t) =>
                        (0, s.jsx)(
                            lQ,
                            {
                                thread: e,
                                isSelectedChannel: n?.id === e.id,
                                isSelectedVoice: l === e.id,
                                isLast: t === d.length - 1,
                                withGuildIcon: r,
                            },
                            e.id,
                        ),
                    ),
                ],
            }),
        });
    });
var l1 = n(922016),
    l2 = n(367513),
    l3 = n(296216),
    l9 = n(963027),
    l7 = n(202384),
    l5 = n(51758),
    l8 = n(139033),
    l6 = n(305866),
    l4 = n(123292),
    ie = n(830215),
    it = n(315982),
    il = n(480900),
    ii = n(557722),
    is = n(834942),
    ir = n(287809),
    ia = n(53516),
    io = n(914081),
    id = (((l = {})[(l.VOICE = 0)] = "VOICE"), l);
let ic = function (e) {
    let { type: t, guildId: l, closePopout: i } = e,
        r = (0, et.GV)(),
        a = (0, u.bG)([is.A], () => is.A.getCheck(l), [l]),
        {
            notClaimed: o,
            notEmailVerified: d,
            notPhoneVerified: c,
            missingVerificationRole: h,
            verificationRole: A,
        } = a,
        {
            header: m,
            body: g,
            buttonText: f,
        } = (function (e, t) {
            if (0 !== e) return { header: null, body: null, buttonText: null };
            {
                let e = ep.intl.string(ep.t["6zY8BI"]),
                    {
                        notClaimed: n,
                        notPhoneVerified: l,
                        notEmailVerified: i,
                        newMember: s,
                        newAccount: r,
                        missingVerificationRole: a,
                        verificationRole: o,
                    } = t;
                return n
                    ? { header: e, body: ep.intl.string(ep.t.IRxUlG), buttonText: ep.intl.string(ep.t.fiNVin) }
                    : l
                      ? { header: e, body: ep.intl.string(ep.t.vW8iUF), buttonText: ep.intl.string(ep.t["50gfOv"]) }
                      : i
                        ? { header: e, body: ep.intl.string(ep.t.vdSOpz), buttonText: ep.intl.string(ep.t.lm1UKt) }
                        : s
                          ? {
                                header: e,
                                body: ep.intl.formatToPlainString(ep.t.v1ktYb, { min: B.$8o.MEMBER_AGE }),
                                buttonText: ep.intl.string(ep.t.BddRzS),
                            }
                          : r
                            ? {
                                  header: e,
                                  body: ep.intl.formatToPlainString(ep.t.sncw41, { min: B.$8o.ACCOUNT_AGE }),
                                  buttonText: ep.intl.string(ep.t.BddRzS),
                              }
                            : a && null != o && null === o.tags.guild_connections
                              ? {
                                    header: e,
                                    body: ep.intl.format(ep.t.MZbCuG, { roleName: `@${o.name}` }),
                                    buttonText: ep.intl.string(ep.t["6Ge2LG"]),
                                }
                              : { header: e, body: null, buttonText: null };
            }
        })(t, a);
    return null == m || null == g
        ? null
        : (0, s.jsxs)(l6.l, {
              className: io.kL,
              "aria-labelledby": r,
              children: [
                  (0, s.jsx)("img", { alt: "", className: io.Sl, src: n(303528) }),
                  (0, s.jsxs)("div", {
                      className: io.Qs,
                      children: [
                          (0, s.jsx)(ed.D, { variant: "heading-md/semibold", id: r, children: m }),
                          (0, s.jsx)(ei.E, { color: "text-default", variant: "text-sm/normal", children: g }),
                          (0, s.jsxs)("div", {
                              className: io.UD,
                              children: [
                                  null != f
                                      ? (0, s.jsx)("div", {
                                            "data-button-hoisted-classname-wrapper": !0,
                                            className: io.FS,
                                            children: (0, s.jsx)(t8.$, {
                                                variant: "primary",
                                                text: f,
                                                onClick: function () {
                                                    o
                                                        ? it.R()
                                                        : c
                                                          ? (0, S.openModalLazy)(
                                                                async () => {
                                                                    let { default: e } = await Promise.all([
                                                                        n.e("49747"),
                                                                        n.e("72712"),
                                                                        n.e("18423"),
                                                                        n.e("89545"),
                                                                        n.e("91531"),
                                                                        n.e("11493"),
                                                                        n.e("84704"),
                                                                    ]).then(n.bind(n, 615715));
                                                                    return (t) =>
                                                                        (0, s.jsx)(e, {
                                                                            reason: ii.d.GUILD_PHONE_REQUIRED,
                                                                            ...t,
                                                                        });
                                                                },
                                                                { modalKey: ia.V },
                                                            )
                                                          : d
                                                            ? (ie.A.verifyResend(),
                                                              (0, l8.A)({
                                                                  title: ep.intl.string(ep.t.LykQYk),
                                                                  subtitle: ep.intl.format(ep.t.azKEPy, {
                                                                      email: ir.default.getCurrentUser()?.email,
                                                                  }),
                                                              }))
                                                            : h && null != A && (0, il.b)(A, l),
                                                        i();
                                                },
                                            }),
                                        })
                                      : null,
                                  o || c || d
                                      ? (0, s.jsx)(l4.Q, {
                                            onClick: i,
                                            text: ep.intl.string(ep.t.oEAioF),
                                            variant: "secondary",
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
              ],
          });
};
var iu = n(824865),
    ih = n(378570),
    iA = n(790535),
    im = n(113783),
    ig = n(96566),
    ip = n(280450),
    iC = n(312006),
    iE = n(505543),
    ix = n(994500),
    i_ = n(685399),
    iN = n(475889),
    iS = n(693879),
    iI = n(435470),
    ib = n(35275),
    iG = n(138383);
function iR(e) {
    let { locked: t } = e;
    return (0, s.jsx)("div", {
        className: e7()(eO.Xs, iG.U),
        children: (0, s.jsx)(ib.A, {
            className: eO.gE,
            color: t ? h.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css : void 0,
        }),
    });
}
var ij = n(863005),
    iv = n(669715),
    iy = n(769015),
    iM = n(364132);
function iL(e) {
    let { className: t, embeddedApps: n, muted: l } = e;
    if (n.length <= 0) return null;
    {
        if (1 === n.length)
            return (0, s.jsx)("div", {
                className: e7()(iM.kL, t, l && iM.F4),
                children: (0, s.jsx)(iy.A, { game: n[0].application, className: iM.wK }),
            });
        let e = n.length - 1;
        return (0, s.jsxs)("div", {
            className: e7()(iM.kL, t, l && iM.F4),
            children: [
                (0, s.jsx)(iy.A, { game: n[0].application, className: iM.wK }),
                2 === n.length
                    ? (0, s.jsx)(iy.A, { game: n[1].application, className: iM.wK })
                    : (0, s.jsx)(ei.E, {
                          className: iM.ju,
                          variant: "text-xs/bold",
                          color: "interactive-text-active",
                          children: `+${e}`,
                      }),
            ],
        });
    }
}
function iT(e) {
    let {
            channel: t,
            isChannelSelected: n,
            isChannelCollapsed: l,
            voiceStates: i,
            enableConnectedUserLimit: r,
            enableActivities: a,
            isSubscriptionGated: o,
            needSubscriptionToAccess: d,
            isNewChannel: c,
            muted: A,
            resolvedUnreadSetting: m,
        } = e,
        g = (0, u.bG)([lr.Ay], () => lr.Ay.getMentionCount(t.id)),
        f = (0, u.bG)([lr.Ay], () => lr.Ay.getIsMentionLowImportance(t.id)),
        p = (0, i_.Ay)(t),
        C = (0, u.bG)([O.A], () => !O.A.can(B.xBc.CONNECT, t)),
        E = (0, iN.H)(t),
        x = (0, u.bG)([lD.A], () => lD.A.hasVideo(t.id)),
        _ = (0, ig.qT)(t.id) && t.isGuildStageVoice(),
        N = (function (e) {
            let { channel: t, locked: n, video: l, selected: i } = e;
            return (
                (function (e) {
                    let { channel: t, video: n, considerMaxStageVoiceUserLimit: l = !0 } = e,
                        { limit: i } = (0, lk.A)(t),
                        s = -1;
                    return (t.userLimit > 0 && (s = t.userLimit),
                    n && i > 0 && (s = s > 0 ? Math.min(s, i) : i),
                    l && s === B.RCc)
                        ? 0
                        : s;
                })({ channel: t, video: l }) > 0 &&
                !n &&
                !i
            );
        })({ channel: t, locked: C, video: (x || _) && null == E, selected: n }),
        S = (0, u.bG)([ij.A], () => ij.A.getNewThreadCount(t.guild_id, t.id)),
        I = (0, iI.ed)(t.guild_id, t.id),
        b = (0, u.bG)([D.A], () => D.A.getGuild(t.guild_id)?.features.has(B.GuildFeatures.COMMUNITY) ?? !1);
    if (lB(g)) return (0, s.jsx)(lX, { mentionsCount: g, isMentionLowImportance: f });
    if (o) return (0, s.jsx)(iR, { locked: d });
    if (c)
        return (0, s.jsx)(eR.Lp, { text: ep.intl.string(ep.t.y2b7CA), color: h.A.colors.BADGE_BACKGROUND_BRAND.css });
    if (!A && m === nK.e.ALL_MESSAGES && t.isForumLikeChannel() && null != S && S > 0)
        return (0, s.jsx)(ei.E, {
            variant: "text-xs/semibold",
            color: "text-brand",
            children: ep.intl.format(ep.t.GkAbqY, { count: (0, eR.Gu)(S) }),
        });
    if (!A && t.isForumLikeChannel() && null != I && I > 0)
        return (0, s.jsx)(ei.E, { variant: "text-xs/semibold", color: "text-muted", children: (0, eR.Gu)(I) });
    let G = i?.length ?? 0;
    return null != r && r && N
        ? (0, s.jsx)(lW, { userCount: G, video: x || _, channel: t })
        : l && (0, iv.t)(i) && b
          ? (0, s.jsx)(eR.Lp, { text: ep.intl.string(ep.t.dI3q4h), color: h.A.unsafe_rawColors.RED_400.css })
          : null != E
            ? (0, s.jsx)(iS.z, { textColor: "text-feedback-positive", entry: { start: E } })
            : null != a && a && p.length > 0
              ? (0, s.jsx)(iL, { embeddedApps: p, muted: A })
              : null;
}
var iU = n(182222);
class iD extends nk {
    channelItemRef = r.createRef();
    state = { shouldShowGuildVerificationPopout: !1 };
    closeGuildVerificationPopout = () => {
        this.setState({ shouldShowGuildVerificationPopout: !1 });
    };
    getVoiceStatesCount() {
        let { voiceStates: e } = this.props;
        return e?.length ?? 0;
    }
    isFull() {
        let { channel: e } = this.props;
        return (0, nS.Pd)(e, lD.A, D.A);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return eO.ZS;
        if (null != t)
            if (e > t) return eO.mU;
            else return eO.TR;
        return eO.fx;
    }
    handleClick = () => {
        let { channel: e, locked: t, connected: n, unverifiedAccount: l, isSuggestedSection: i } = this.props,
            s = e.getGuildId();
        null != s && (0, l5.V)(s) && (0, l7.Ze)(s),
            l && this.setState({ shouldShowGuildVerificationPopout: !0 }),
            t || n || e.isRoleSubscriptionTemplatePreviewChannel() || (0, iA.av)(e),
            __OVERLAY__ || (0, ih.iN)(e.id, i ? { source: iu.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
    };
    handleClickChat = () => {
        let { channel: e, locked: t, isSuggestedSection: n } = this.props;
        __OVERLAY__ || t || (0, ih.iN)(e.id, n ? { source: iu.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            l = D.A.getGuild(t.getGuildId());
        null != l &&
            (0, tu.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("26132"),
                    n.e("46652"),
                    n.e("93103"),
                    n.e("93190"),
                    n.e("91763"),
                    n.e("38730"),
                    n.e("35321"),
                    n.e("47502"),
                    n.e("50033"),
                    n.e("74610"),
                    n.e("3998"),
                    n.e("43266"),
                    n.e("9004"),
                    n.e("12255"),
                    n.e("40959"),
                    n.e("30997"),
                    n.e("79995"),
                    n.e("87048"),
                    n.e("44058"),
                    n.e("91377"),
                    n.e("35723"),
                    n.e("66378"),
                    n.e("56372"),
                    n.e("29542"),
                    n.e("19690"),
                    n.e("26792"),
                    n.e("48804"),
                    n.e("18663"),
                    n.e("99990"),
                    n.e("99854"),
                ]).then(n.bind(n, 119357));
                return (n) => (0, s.jsx)(e, { ...n, channel: t, guild: l });
            });
    };
    renderVoiceUsers() {
        let { channel: e, collapsed: t, tabIndex: n, speakerVoiceStates: l, numAudience: i } = this.props;
        return (0, s.jsx)(lq.A, { channel: e, voiceStates: l, collapsed: t, tabIndex: n, numAudience: i });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        if (t)
            return (0, s.jsx)(ic, {
                type: id.VOICE,
                guildId: e.guild_id,
                closePopout: this.closeGuildVerificationPopout,
            });
        throw Error("VoiceChannel.renderPopout: There must always be something to render");
    };
    renderOpenChatButton = () => {
        let { channel: e, locked: t, forceShowButtons: n } = this.props;
        if (!t)
            return (0, s.jsx)(eI.m, {
                asContainer: !0,
                text: ep.intl.string(ep.t.ZXxLQg),
                children: (0, s.jsx)(eb.D, {
                    className: e7()(eO.Xs, n ? eO.Tf : null),
                    onClick: () => {
                        l2.A.updateChatOpen(e.id, !0), this.handleClickChat();
                    },
                    "aria-label": ep.intl.string(ep.t.ZXxLQg),
                    children: (0, s.jsx)(eo.o, { size: "xs", color: "currentColor", className: eO.gE }),
                }),
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, s.jsx)("div", { className: eO.yW, children: e });
    }
    getTooltipText = () => {
        let { connected: e } = this.props;
        return this.isFull() && !e ? ep.intl.string(ep.t.rZfiNq) : null;
    };
    renderSubtitle = () => {
        let e = this.props.stageInstance?.topic;
        return null == e ? null : (0, s.jsx)(t5.A, { children: e });
    };
    render() {
        let {
                channel: e,
                selected: t,
                connected: n,
                locked: l,
                connectChannelDropTarget: i,
                connectChannelDragSource: r,
                connectUserDropTarget: a,
                connectDragPreview: o,
                canReorderChannel: d,
                canMoveMembers: c,
                stageInstance: u,
                isSubscriptionGated: h,
                needSubscriptionToAccess: A,
                unread: m,
                resolvedUnreadSetting: g,
                mentionCount: f,
                isFavoriteSuggestion: p,
            } = this.props,
            { shouldShowGuildVerificationPopout: C } = this.state,
            E = (0, s.jsxs)("li", {
                className: e7()(this.getModeClass(), { [eO.r9]: this.isDisabled() }),
                "data-dnd-name": (0, nl.m1)(e, ir.default, ix.A),
                children: [
                    (0, s.jsx)(l1.Y, {
                        targetElementRef: this.channelItemRef,
                        position: "right",
                        renderPopout: this.renderPopout,
                        spacing: 17,
                        onRequestClose: this.closeGuildVerificationPopout,
                        shouldShow: C,
                        children: () =>
                            (0, s.jsx)(eI.m, {
                                text: this.getTooltipText(),
                                children: (0, s.jsxs)(nF.Ay, {
                                    ref: this.channelItemRef,
                                    className: eO.Ki,
                                    iconClassName: e7()({ [iU.G]: null != u }),
                                    channel: e,
                                    selected: !p && t,
                                    connected: n,
                                    unread: n ? m : void 0,
                                    resolvedUnreadSetting: g,
                                    mentionCount: f,
                                    locked: l,
                                    onClick: () => {
                                        this.handleClick();
                                    },
                                    onContextMenu: (e) => {
                                        this.handleContextMenu(e);
                                    },
                                    connectDragPreview: o,
                                    subtitle: this.renderSubtitle(),
                                    isFavoriteSuggestion: p,
                                    "aria-label": (0, l9.Ay)({
                                        channel: e,
                                        unread: m,
                                        mentionCount: f,
                                        isSubscriptionGated: h,
                                        needSubscriptionToAccess: A,
                                    }),
                                    children: [
                                        p && this.renderAcceptSuggestionButton(),
                                        p && this.renderRemoveSuggestionButton(),
                                        !p && this.renderOpenChatButton(),
                                        !p && this.renderInviteButton(),
                                        !p && this.renderEditButton(),
                                        !p && this.renderChannelInfo(),
                                    ],
                                }),
                            }),
                    }),
                    this.renderVoiceUsers(),
                ],
            });
        return c && (E = a(E)), d && (E = i(r(E))), E;
    }
}
let iO = J((0, l3.F)(iD));
function iP(e) {
    var t;
    let n,
        l,
        { guild: i, channel: r, disableSorting: a, isFavoriteCategory: o, collapsed: d, voiceStates: c } = e,
        h = (0, u.cf)([lr.Ay], () => ({ unread: lr.Ay.hasUnread(r.id), mentionCount: lr.Ay.getMentionCount(r.id) })),
        A = (0, u.bG)([V.Ay], () => V.Ay.resolveUnreadSetting(r)),
        m = (0, u.cf)([L.A, is.A, O.A], () => {
            let e = L.A.getChannel(r.parent_id),
                t = is.A.getCheck(r.guild_id);
            return {
                canManageChannel: null != i && O.A.can(B.xBc.MANAGE_CHANNELS, r),
                canReorderChannel:
                    !0 !== a &&
                    ((0, j.ai)(i.id) ||
                        (null != e ? O.A.can(B.xBc.MANAGE_CHANNELS, e) : O.A.can(B.xBc.MANAGE_CHANNELS, i))),
                canMoveMembers: O.A.can(B.xBc.MOVE_MEMBERS, r),
                locked: !O.A.can(B.xBc.CONNECT, r),
                bypassLimit: O.A.can(B.xBc.MOVE_MEMBERS, r),
                unverifiedAccount: !t.canChat,
            };
        }),
        g = (0, u.bG)([M.A], () => M.A.isCollapsed(r.parent_id)),
        f =
            ((t = r.id),
            (n = (0, iE.A)(t)),
            (l = (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return (0, u.cf)([iC.Ay, ip.default], () => {
                    let n = ip.default.getId();
                    return iC.Ay.getPermissionsForUser(n, e, t);
                }, [e, t]);
            })(t, !0).moderator),
            !n && l ? 1 : 0),
        p = (0, u.bG)([nU.A], () => nU.A.getStageInstanceByChannel(r.id), [r.id]),
        C = (0, im.zy)(r.id, tL.ip.AUDIENCE),
        { isSubscriptionGated: E, needSubscriptionToAccess: x } = (0, lL.A)(r.id),
        _ = (0, u.bG)([V.Ay], () => V.Ay.isFavorite(i.id, r.id)),
        N = (0, ig.xn)(r.id),
        S = iT({
            channel: r,
            isChannelSelected: !1,
            isChannelCollapsed: d,
            voiceStates: c,
            isSubscriptionGated: E,
            needSubscriptionToAccess: x,
            enableConnectedUserLimit: N || (r.userLimit > 0 && r.userLimit < B.RCc),
        }),
        I = e.connected && null == S;
    return (0, s.jsx)(iO, {
        categoryCollapsed: g,
        connectAction: f,
        numAudience: C,
        stageInstance: p,
        isSubscriptionGated: E,
        needSubscriptionToAccess: x,
        ...h,
        ...m,
        ...e,
        isFavoriteSuggestion: o && !_,
        forceShowButtons: I,
        channelInfo: S,
        resolvedUnreadSetting: A,
    });
}
function iV(e, t) {
    let n = t.getGuildId();
    if (null == n) throw Error("TextChannel, preloadChannel: Channel does not have a guildId");
    ly.A.preload(n, t.id);
}
let iw = J(
        class extends nk {
            handleContextMenu = (e) => {
                let { channel: t } = this.props,
                    l = D.A.getGuild(t.getGuildId());
                null != l &&
                    (0, tu.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("26132"),
                            n.e("3998"),
                            n.e("9004"),
                            n.e("12255"),
                            n.e("40959"),
                            n.e("30997"),
                            n.e("79995"),
                            n.e("44058"),
                            n.e("15669"),
                        ]).then(n.bind(n, 313140));
                        return (n) => (0, s.jsx)(e, { ...n, channel: t, guild: l });
                    });
            };
            handleClick = (e) => {
                let t = e.getGuildId();
                if (null == t) throw Error("TextChannel, transitionTo: Channel does not have a guildId");
                (0, eM.pX)(B.BVt.CHANNEL(t, e.id), {
                    state: {
                        analyticsSource: {
                            page: B.liQ.GUILD_CHANNEL,
                            section: B.JJy.CHANNEL_LIST,
                            object: B.ZSU.CHANNEL,
                        },
                    },
                });
            };
            render() {
                let {
                        channel: e,
                        selected: t,
                        connectChannelDropTarget: n,
                        connectChannelDragSource: l,
                        connectDragPreview: i,
                        canReorderChannel: r,
                    } = this.props,
                    a = (0, s.jsx)("li", {
                        className: e7()(this.getClassName(), { [eO.r9]: this.isDisabled() }),
                        "data-dnd-name": (0, nl.m1)(e, ir.default, ix.A),
                        children: (0, s.jsxs)(nF.Ay, {
                            className: eO.Ki,
                            channel: e,
                            selected: t,
                            onClick: this.handleClick,
                            onMouseDown: iV,
                            onContextMenu: this.handleContextMenu,
                            connectDragPreview: r ? i : null,
                            "aria-label": (0, l9.Ay)({ channel: e }),
                            resolvedUnreadSetting: nK.e.ONLY_MENTIONS,
                            children: [this.renderInviteButton(), this.renderEditButton()],
                        }),
                    });
                return r ? n(l(a)) : a;
            }
        },
    ),
    iH = r.memo(function (e) {
        let { channel: t, guild: n, disableSorting: l } = e,
            i = (0, u.cf)([L.A, O.A], () => {
                let e = L.A.getChannel(t.parent_id);
                return {
                    canManageChannel: O.A.can(B.xBc.MANAGE_CHANNELS, t),
                    canReorderChannel:
                        !0 !== l && null != e ? O.A.can(B.xBc.MANAGE_CHANNELS, e) : O.A.can(B.xBc.MANAGE_CHANNELS, n),
                };
            });
        return (0, s.jsx)(iw, { ...i, ...e });
    });
var iB = n(172218),
    ik = n(811024),
    iF = n(323073);
function iK(e) {
    if (null == e) return null;
    switch (e.type) {
        case "embedded-activities":
        case "event":
            return { subtitle: e.name };
        case "go-live":
            return { subtitle: ep.intl.string(ep.t.Pa817q) };
    }
    return null;
}
var iz = n(3322),
    iW = n(355145),
    iY = n(696451),
    iX = n(763827),
    iq = n(56059),
    iZ = n(163328),
    iJ = n(778712),
    i$ = n(730134),
    iQ = n(707539),
    i0 = n(486020),
    i1 = n(49741);
function i2(e) {
    let { channel: t } = e,
        l = (0, u.yK)([ij.A, lr.Ay, O.A], () => {
            let e = ij.A.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
            return o()(ij.A.getActiveJoinedThreadsForParent(t.guild_id, t.id))
                .values()
                .map((e) => e.channel)
                .concat(o().values(ij.A.getActiveUnjoinedThreadsForParent(t.guild_id, t.id)))
                .filter((t) => !(t.id in e) && O.A.can(B.xBc.VIEW_CHANNEL, t))
                .sort((e, t) => {
                    let n = lr.Ay.lastMessageId(e.id),
                        l = lr.Ay.lastMessageId(t.id);
                    return ty.default.compare(n, l);
                })
                .reverse()
                .value();
        }),
        i = t.isForumLikeChannel() ? 5 : 3,
        a = t.isForumLikeChannel() ? iq.b : iZ.y;
    return (
        r.useEffect(() => {
            (0, iQ.TE)();
        }, []),
        (0, s.jsxs)("div", {
            className: i1.SW,
            children: [
                (0, s.jsx)(ei.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: i1.DD,
                    children: t.isForumLikeChannel() ? ep.intl.string(ep.t.ioVdO2) : ep.intl.string(ep.t.VNYs2v),
                }),
                (0, s.jsxs)("div", {
                    className: i1.p_,
                    children: [
                        l
                            .slice(0, t.isForumLikeChannel() ? l.length : i)
                            .map((e) => (0, s.jsx)(i3, { thread: e }, e.id))
                            .filter((e) => r.isValidElement(e))
                            .slice(0, i),
                        (0, s.jsxs)(eb.D, {
                            className: i1.nM,
                            onClick: function () {
                                t.isForumLikeChannel()
                                    ? (0, ih.iN)(t.id)
                                    : (0, S.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([
                                              n.e("61178"),
                                              n.e("47352"),
                                              n.e("69977"),
                                              n.e("1248"),
                                              n.e("94149"),
                                              n.e("58921"),
                                              n.e("70469"),
                                              n.e("98232"),
                                              n.e("77066"),
                                              n.e("81647"),
                                              n.e("76602"),
                                              n.e("40402"),
                                              n.e("39970"),
                                              n.e("72789"),
                                              n.e("79049"),
                                              n.e("31267"),
                                              n.e("66948"),
                                              n.e("65927"),
                                              n.e("51743"),
                                              n.e("84042"),
                                              n.e("65225"),
                                          ]).then(n.bind(n, 126768));
                                          return (n) => (0, s.jsx)(e, { channel: t, ...n });
                                      });
                            },
                            children: [
                                (0, s.jsx)("div", {
                                    className: i1.R4,
                                    children: (0, s.jsx)(a, { size: "custom", className: i1.Kk }),
                                }),
                                (0, s.jsx)("div", {
                                    className: i1.Pf,
                                    children: (0, s.jsx)(ei.E, {
                                        variant: "text-sm/normal",
                                        color: "none",
                                        children: ep.intl.string(ep.t["4qdZ93"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
function i3(e) {
    let { thread: t } = e,
        n = (0, u.bG)([ir.default], () => ir.default.getUser(t.ownerId)),
        l = (0, iQ.JO)(t);
    return (0, s.jsxs)(eb.D, {
        className: i1.nM,
        onClick: function (e) {
            (0, lU.JA)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, lP.H9.POPOUT);
        },
        children: [
            (0, s.jsx)("div", {
                className: i1.R4,
                children:
                    null == n
                        ? (0, s.jsx)("img", {
                              className: i1.my,
                              src: i0.Ay.getDefaultAvatarURL(void 0, void 0),
                              alt: "",
                          })
                        : (0, s.jsx)(i$.A, { className: i1.my, user: n, size: iJ._3.SIZE_16 }),
            }),
            (0, s.jsxs)("div", {
                className: i1.Pf,
                children: [
                    (0, s.jsx)(ei.E, { className: i1.UU, variant: "text-sm/normal", color: "none", children: t.name }),
                    (0, s.jsx)(ei.E, { variant: "text-sm/normal", color: "text-muted", children: "\u2022" }),
                    (0, s.jsx)(ei.E, {
                        className: i1.vE,
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: (0, iQ.aK)(l),
                    }),
                ],
            }),
        ],
    });
}
var i9 = n(364522),
    i7 = n(302959),
    i5 = n(35903),
    i8 = n(970928),
    i6 = n(427262),
    i4 = n(989628);
let se = nx.DN.SIZE_24;
function st(e) {
    let { activity: t, embeddedApp: n } = e,
        l = t?.assets,
        i = t?.application_id;
    if (null == l || (null == l.large_image && null == l.small_image)) {
        let e = i0.Ay.getApplicationIconURL({ id: n.application.id, icon: n.application.icon }),
            t = n.application.name;
        return (0, s.jsx)(eI.m, {
            text: t,
            position: "top",
            asContainer: !0,
            children: (0, s.jsx)("img", { alt: t, src: e, className: i4.P3 }),
        });
    }
    let r = l.large_image ?? l.small_image;
    return null != r
        ? (0, s.jsx)("img", { alt: l.large_text ?? "", src: (0, i8.uD)(i, r, [128, 128]), className: i4.P3 })
        : null;
}
function sn(e) {
    let { activity: t, embeddedApp: n, channel: l } = e,
        i = Array.from(n.embeddedActivity.userIds),
        r = (0, u.yK)([ir.default], () => i.map((e) => ir.default.getUser(e)).filter(tj.Vq));
    return (0, s.jsx)("div", {
        className: i4.ec,
        children: (0, s.jsxs)("div", {
            className: i4.Wh,
            children: [
                (0, s.jsx)(st, { activity: t, embeddedApp: n }),
                (0, s.jsxs)("div", {
                    className: i4.X0,
                    children: [
                        (0, s.jsx)(ed.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            className: i4.wx,
                            lineClamp: 1,
                            children: n.application.name,
                        }),
                        t?.details != null &&
                            "" !== t.details &&
                            (0, s.jsx)(ei.E, {
                                variant: "text-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.details,
                            }),
                        t?.state != null &&
                            "" !== t.state &&
                            (0, s.jsx)(ei.E, {
                                variant: "text-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.state,
                            }),
                        i.length > 0 &&
                            (0, s.jsx)(nx.Ay, {
                                className: i4.TN,
                                guildId: l.guild_id,
                                users: r,
                                size: se,
                                max: 7,
                                renderUser: function (e) {
                                    if (null == e || e === nx.mt) return null;
                                    let t = i6.Ay.getName(e);
                                    return (0, s.jsx)(
                                        eI.m,
                                        {
                                            asContainer: !0,
                                            text: t,
                                            position: "bottom",
                                            children: (0, s.jsx)("img", {
                                                src: e.getAvatarURL(l.guild_id, se),
                                                alt: t,
                                                className: i4.my,
                                            }),
                                        },
                                        e.id,
                                    );
                                },
                            }),
                    ],
                }),
            ],
        }),
    });
}
var sl = n(237913);
function si(e) {
    let { channel: t, presenceActivity: n, embeddedApp: l, onAction: i } = e,
        r = Array.from(l.embeddedActivity.userIds),
        a = (0, u.bG)([ir.default], () => ir.default.getUser(r[0]));
    return null == a
        ? null
        : (0, s.jsxs)("div", {
              className: sl.Eb,
              children: [
                  (0, s.jsx)("div", {
                      className: sl.Il,
                      children: (0, s.jsx)(sn, { activity: n, embeddedApp: l, channel: t }),
                  }),
                  (0, s.jsx)("div", {
                      className: sl.M4,
                      children: (0, s.jsx)(i5.A, {
                          type: i7.M.VOICE_CHANNEL,
                          activity: n,
                          embeddedActivity: l.embeddedActivity,
                          user: a,
                          guildId: t.getGuildId(),
                          channelId: t.id,
                          buttonVariant: "primary",
                          onAction: i,
                      }),
                  }),
              ],
          });
}
var ss = n(713654),
    sr = n(980248);
function sa(e) {
    let { channel: t } = e,
        n = (0, u.bG)([D.A], () => D.A.getGuild(t.guild_id)),
        l = (0, nl.Ay)(t),
        i = (0, ss.gU)(t, n);
    return null == i
        ? null
        : (0, s.jsxs)("div", {
              className: sr.hY,
              children: [
                  (0, s.jsx)(i, { className: sr.p }),
                  (0, s.jsx)(ei.E, {
                      variant: "text-md/semibold",
                      color: "interactive-text-default",
                      className: sr.HA,
                      children: l,
                  }),
              ],
          });
}
var so = n(565449);
function sd(e) {
    let { channel: t, onAction: n } = e,
        l = (0, i_.Ay)(t),
        i = Array.from((0, i_.Rz)(l).values());
    return 0 === i.length
        ? null
        : (0, s.jsxs)(i9.Ip, {
              className: so.kL,
              children: [
                  (0, s.jsx)("div", { className: so.oT, children: (0, s.jsx)(sa, { channel: t }) }),
                  (0, s.jsx)("div", { className: so.zN }),
                  i.map((e, l) =>
                      (0, s.jsx)(
                          si,
                          { embeddedApp: e, presenceActivity: e.presenceActivity ?? void 0, channel: t, onAction: n },
                          l,
                      ),
                  ),
              ],
          });
}
class sc extends nk {
    state = { shouldShowThreadsPopout: !1, shouldShowActivities: !1 };
    channelItemRef = r.createRef();
    assignRef = (e, t) => {
        null != e && (e.current = t);
    };
    setChannelItemRef = (e) => {
        (this.channelItemRef.current = e), this.assignRef(this.props.channelItemRef, e);
    };
    enterTimer = null;
    exitTimer = null;
    handleMouseEnter = () => {
        (this.props.channelIsContentGated && null == this.props.embeddedApps) ||
            (this.resetTextChannelPopoutTimers(),
            (this.enterTimer = setTimeout(() => {
                null != this.props.embeddedApps && this.props.embeddedApps.length > 0
                    ? this.setState({ shouldShowActivities: !0 })
                    : this.props.channelIsContentGated || this.setState({ shouldShowThreadsPopout: !0 });
            }, 200)));
    };
    handleMouseLeave = () => {
        this.resetTextChannelPopoutTimers(),
            (this.exitTimer = setTimeout(() => {
                this.state.shouldShowActivities && this.setState({ shouldShowActivities: !1 }),
                    this.state.shouldShowThreadsPopout && this.setState({ shouldShowThreadsPopout: !1 });
            }, 250));
    };
    handleThreadsPopoutClose = () => {
        this.resetTextChannelPopoutTimers(), this.setState({ shouldShowThreadsPopout: !1 });
    };
    handleActivitiesPopoutClose = () => {
        this.resetTextChannelPopoutTimers(), this.setState({ shouldShowActivities: !1 });
    };
    handleClosePopout = () => {
        this.state.shouldShowActivities && this.handleActivitiesPopoutClose(),
            this.state.shouldShowThreadsPopout && this.handleThreadsPopoutClose();
    };
    handleMouseDown = () => {
        this.handleActivitiesPopoutClose(), this.handleThreadsPopoutClose();
        let { channel: e } = this.props,
            t = e.getGuildId();
        ly.A.preload(t ?? B.ME, e.id);
    };
    renderPopout = (e) => {
        let { channel: t, sorting: n, embeddedApps: l, channelIsContentGated: i } = this.props,
            { shouldShowActivities: r } = this.state;
        return t.isModeratorReportChannel() || i
            ? null
            : null != l && l.length > 0 && r && !n
              ? (0, s.jsx)(sd, { onAction: this.handleActivitiesPopoutClose, channel: t })
              : (0, s.jsx)(i2, { ...e, channel: this.props.channel });
    };
    componentWillUnmount() {
        this.resetTextChannelPopoutTimers();
    }
    resetTextChannelPopoutTimers() {
        null != this.enterTimer && (clearTimeout(this.enterTimer), (this.enterTimer = null)),
            null != this.exitTimer && (clearTimeout(this.exitTimer), (this.exitTimer = null));
    }
    handleContextMenu = (e) => {
        let { channel: t } = this.props;
        if (t.type === B.rbe.GROUP_DM)
            return void (0, tu.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("26132"),
                    n.e("46652"),
                    n.e("93190"),
                    n.e("91763"),
                    n.e("38730"),
                    n.e("47502"),
                    n.e("68530"),
                    n.e("87048"),
                    n.e("66378"),
                    n.e("17244"),
                    n.e("53416"),
                    n.e("60200"),
                ]).then(n.bind(n, 4027));
                return (n) => (0, s.jsx)(e, { ...n, channel: t, selected: !0 });
            });
        if (t.type === B.rbe.DM) {
            let l = ir.default.getUser(t.getRecipientId());
            null != l &&
                (0, tu.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("97422"),
                        n.e("40351"),
                        n.e("76279"),
                        n.e("45309"),
                        n.e("97705"),
                        n.e("26132"),
                        n.e("46652"),
                        n.e("93103"),
                        n.e("93190"),
                        n.e("91763"),
                        n.e("34552"),
                        n.e("8757"),
                        n.e("71210"),
                        n.e("38730"),
                        n.e("85968"),
                        n.e("89673"),
                        n.e("68403"),
                        n.e("88342"),
                        n.e("29787"),
                        n.e("89421"),
                        n.e("98965"),
                        n.e("82073"),
                        n.e("97558"),
                        n.e("91994"),
                        n.e("76665"),
                        n.e("35313"),
                        n.e("76273"),
                        n.e("47502"),
                        n.e("74610"),
                        n.e("36564"),
                        n.e("45996"),
                        n.e("792"),
                        n.e("92822"),
                        n.e("23427"),
                        n.e("29422"),
                        n.e("38056"),
                        n.e("9291"),
                        n.e("7059"),
                        n.e("8829"),
                        n.e("87048"),
                        n.e("16054"),
                        n.e("98199"),
                        n.e("17244"),
                        n.e("64464"),
                        n.e("39778"),
                    ]).then(n.bind(n, 385913));
                    return (n) => (0, s.jsx)(e, { ...n, user: l, channel: t, showModalItems: !1 });
                });
            return;
        }
        if (t.isModeratorReportChannel())
            return void (0, tu.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("26132"),
                    n.e("46652"),
                    n.e("91763"),
                    n.e("38730"),
                    n.e("35321"),
                    n.e("47502"),
                    n.e("50033"),
                    n.e("43266"),
                    n.e("30997"),
                    n.e("79995"),
                    n.e("78580"),
                ]).then(n.bind(n, 907647));
                return (n) => (0, s.jsx)(e, { ...n, channel: t });
            });
        let l = D.A.getGuild(t.getGuildId());
        null != l &&
            (0, tu.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("26132"),
                    n.e("46652"),
                    n.e("93190"),
                    n.e("91763"),
                    n.e("38730"),
                    n.e("35321"),
                    n.e("47502"),
                    n.e("50033"),
                    n.e("3998"),
                    n.e("43266"),
                    n.e("9004"),
                    n.e("12255"),
                    n.e("40959"),
                    n.e("30997"),
                    n.e("79995"),
                    n.e("87048"),
                    n.e("44058"),
                    n.e("65200"),
                    n.e("91377"),
                    n.e("35723"),
                    n.e("66378"),
                    n.e("56372"),
                    n.e("29542"),
                    n.e("48804"),
                    n.e("25173"),
                ]).then(n.bind(n, 468916));
                return (n) => (0, s.jsx)(e, { ...n, channel: t, guild: l });
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, s.jsx)("div", { className: eO.yW, children: e });
    }
    render() {
        let {
                channel: e,
                guild: t,
                selected: n,
                muted: l,
                unread: i,
                hasActiveThreads: r,
                hasMoreActiveThreads: a,
                mentionCount: o,
                connectChannelDropTarget: d,
                connectChannelDragSource: c,
                connectDragPreview: u,
                canReorderChannel: h,
                isSubscriptionGated: A,
                isFavoriteSuggestion: m,
                subtitle: g,
                forceTopLevelThread: f,
                embeddedApps: p,
                resolvedUnreadSetting: C,
                enableActivities: E,
                showMenuItemPopover: x,
                markMenuItemPopoverAsDismissed: _,
                channelItemRef: N,
                isSuggestedSection: S,
            } = this.props,
            I = N ?? this.channelItemRef,
            b = !x && a,
            G = !x && E && null != p && p.length > 0,
            R = iK(g),
            j = (0, s.jsxs)("li", {
                className: e7()(this.getClassName(), { [eO.r9]: this.isDisabled(), [eO.wH]: n }),
                "data-dnd-name": (0, nl.m1)(e, ir.default, ix.A),
                onMouseEnter: b || G ? this.handleMouseEnter : void 0,
                onMouseLeave: b || G ? this.handleMouseLeave : void 0,
                children: [
                    (0, s.jsx)(l1.Y, {
                        targetElementRef: I,
                        position: "right",
                        renderPopout: this.renderPopout,
                        onRequestClose: this.handleClosePopout,
                        spacing: 17,
                        shouldShow: (b && this.state.shouldShowThreadsPopout) || (G && this.state.shouldShowActivities),
                        children: () =>
                            (0, s.jsxs)(nF.Ay, {
                                ref: this.setChannelItemRef,
                                className: eO.Ki,
                                channel: e,
                                guild: t,
                                selected: !m && n,
                                muted: l,
                                unread: i,
                                mentionCount: o,
                                hasActiveThreads: r,
                                subtitle: R?.subtitle,
                                subtitleColor: R?.color,
                                onMouseDown: this.handleMouseDown,
                                onContextMenu: this.handleContextMenu,
                                connectDragPreview: h ? u : null,
                                isFavoriteSuggestion: m,
                                channelTypeOverride: f ? B.rbe.GUILD_TEXT : void 0,
                                resolvedUnreadSetting: C,
                                transitionExtras: S ? { source: iu.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
                                "aria-label": (0, l9.Ay)({
                                    channel: e,
                                    unread: i,
                                    mentionCount: o,
                                    isSubscriptionGated: A,
                                    embeddedActivitiesCount: p?.length,
                                }),
                                children: [
                                    m &&
                                        (0, s.jsxs)(s.Fragment, {
                                            children: [
                                                this.renderAcceptSuggestionButton(),
                                                this.renderRemoveSuggestionButton(),
                                            ],
                                        }),
                                    !m &&
                                        (0, s.jsxs)(s.Fragment, {
                                            children: [
                                                this.renderChannelInfo(),
                                                this.renderInviteButton(),
                                                this.renderEditButton(),
                                            ],
                                        }),
                                ],
                            }),
                    }),
                    x && (0, s.jsx)(iz.A, { targetElementRef: I, markMenuItemPopoverAsDismissed: _ }),
                ],
            });
        return h ? d(c(j)) : j;
    }
}
let su = J(sc);
function sh(e) {
    let { channel: t, guild: n, disableSorting: l, isFavoriteCategory: i, muted: a, selected: o } = e,
        { hasActiveThreads: d, hasMoreActiveThreads: c } = (0, lT.NR)(t),
        h = (0, u.cf)([lr.Ay], () => ({
            unread: lr.Ay.hasUnread(t.id),
            ackMessageId: lr.Ay.ackMessageId(t.id),
            isLowImportanceMention: lr.Ay.getIsMentionLowImportance(t.id),
        })),
        A = (0, u.bG)([V.Ay], () => V.Ay.resolveUnreadSetting(t)),
        m = (0, u.cf)([L.A, O.A], () => {
            let e = L.A.getChannel(t.parent_id);
            return {
                canManageChannel: O.A.can(B.xBc.MANAGE_CHANNELS, t),
                canReorderChannel:
                    !0 !== l &&
                    ((0, j.ai)(n.id) ||
                        (null != e ? O.A.can(B.xBc.MANAGE_CHANNELS, e) : O.A.can(B.xBc.MANAGE_CHANNELS, n))),
            };
        }),
        g = (0, u.bG)([ls.A], () => ls.A.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: f, isSubscriptionGated: p } = (0, lL.A)(t.id),
        C = (0, u.bG)([V.Ay], () => V.Ay.isFavorite(n.id, t.id)),
        E = (0, iF.ni)(t),
        x = (0, ik.Gp)(t.id),
        _ = iT({
            channel: t,
            isChannelCollapsed: !1,
            isChannelSelected: o,
            isSubscriptionGated: p,
            needSubscriptionToAccess: f,
            isNewChannel: g,
            muted: a,
            enableActivities: x,
            resolvedUnreadSetting: A,
        }),
        N = (0, i_.Ay)(t),
        [S, I] = r.useState(!1),
        b = (0, iB.K)(
            r.useCallback((e) => {
                I(e);
            }, []),
        ),
        { showMenuItemPopover: G, markMenuItemPopoverAsDismissed: R } = (0, iW.B)({
            isChannelSelected: o,
            isTargetInViewport: S,
            channelType: t.type,
            isPopoverAllowed: !(0, j.ai)(n.id),
        });
    return (0, u.bG)([iX.A, iY.Ay], () => iX.A.getChannelId() !== t.id && iY.Ay.isCurrentUserGuest(t.getGuildId()))
        ? null
        : (0, s.jsx)(su, {
              ...h,
              ...m,
              ...e,
              hasActiveThreads: d,
              hasMoreActiveThreads: c,
              isSubscriptionGated: p,
              needSubscriptionToAccess: f,
              isNewChannel: g && e.canBeNewChannel,
              isFavoriteSuggestion: i && !C,
              channelIsContentGated: E,
              channelInfo: _,
              embeddedApps: N,
              resolvedUnreadSetting: A,
              hasChannelInfo: null != _,
              enableActivities: x,
              showMenuItemPopover: G,
              markMenuItemPopoverAsDismissed: R,
              channelItemRef: b,
          });
}
var sA = n(900797),
    sm = n(636585),
    sg = n(531685),
    sf =
        (((i = {}).HIDDEN = "hidden"),
        (i.UNREAD = "unread"),
        (i.MENTIONS = "mentions"),
        (i.VOICE_CHANNELS = "voice-channels"),
        i);
let sp = { mode: "hidden", mentionCount: 0, targetChannelId: null },
    sC = { topBar: sp, bottomBar: sp },
    sE = {},
    sx = {};
function s_(e) {
    let t = L.A.getChannel(e);
    return (
        !(null == t || null == t.getGuildId() || t.isGuildVocal()) &&
        !(t.isThread() ? lH.A.isMuted(t.id) : V.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, tb.Y)(t)
    );
}
function sN(e) {
    let t = L.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let l = V.Ay.isGuildCollapsed(n),
        i = V.Ay.isChannelMuted(n, t.id);
    return (!l || !i) && lr.Ay.getMentionCount(e) > 0;
}
function sS(e) {
    return (
        !V.Ay.isChannelMuted(e.guild_id, e.id) &&
        (e.isGuildStageVoice()
            ? tM.A.getMutableParticipants(e.id, tL.ip.SPEAKER).length > 0
            : tR.Ay.getVoiceStatesForChannel(e).length > 0)
    );
}
function sI(e) {
    let { guildChannels: t } = tw.A.getGuildWithoutChangingGuildActionRows(e),
        n = t.getChannels(sx[e] ?? []);
    if (null == n || 0 === n.length) return !1;
    let l = null,
        i = null,
        s = null,
        r = null,
        a = !0,
        d = !0,
        c = !1,
        u = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
        h = u?.getShownChannelIds() ?? [],
        [A, m, g] = t.getSlicedChannels(n);
    for (let e = 0; e < m.length; e++) {
        let t = m[e];
        if (
            ((s_(t.id) || o().some(t.threadIds, s_)) && (d = !1),
            (sN(t.id) || o().some(t.threadIds, sN)) && (a = !1),
            h.includes(t.id) && (c = !0),
            !d && !a && c)
        )
            break;
    }
    let f = 0,
        p = !1,
        C = 0,
        E = !1;
    if (d || a)
        for (let e = A.length - 1; e >= 0; e--) {
            let t = A[e];
            (s_(t.id) || o().some(t.threadIds, s_)) && (null == i && (i = t.id), (p = !0)),
                (sN(t.id) || o().some(t.threadIds, sN)) &&
                    (null == l && (l = t.id),
                    (f += lr.Ay.getMentionCount(t.id)),
                    (f += o().sumBy(t.threadIds, lr.Ay.getMentionCount)));
        }
    if (d || a)
        for (let e = 0; e < g.length; e++) {
            let t = g[e];
            if (!d && !a) break;
            (s_(t.id) || o().some(t.threadIds, s_)) && (null == r && (r = t.id), (E = !0)),
                (sN(t.id) || o().some(t.threadIds, sN)) &&
                    (null == s && (s = t.id),
                    (C += lr.Ay.getMentionCount(t.id)),
                    (C += o().sumBy(t.threadIds, lr.Ay.getMentionCount)));
        }
    let x = null,
        _ = null,
        N = u?.getChannelRecords() ?? [];
    a && C > 0
        ? (x = { mode: "mentions", mentionCount: C, targetChannelId: s })
        : !c && o().some(N, sS)
          ? (x = { mode: "voice-channels", mentionCount: 0, targetChannelId: null })
          : d && E && (x = { mode: "unread", mentionCount: 0, targetChannelId: r }),
        a && f > 0
            ? (_ = { mode: "mentions", mentionCount: f, targetChannelId: l })
            : d && p && (_ = { mode: "unread", mentionCount: 0, targetChannelId: i });
    let S = null != _ && (null == x || ("mentions" !== x.mode && "mentions" === _.mode)),
        I = null != x && ("mentions" === x.mode || !S);
    return (sE[e] = { topBar: S ? (_ ?? sp) : sp, bottomBar: I ? (x ?? sp) : sp }), !0;
}
let sb = o().throttle(sI, 200);
function sG(e) {
    let { guildId: t } = e,
        n = D.A.getGuild(t);
    return null != n && !!n.features.has(B.GuildFeatures.COMMUNITY) && sb(t);
}
function sR(e) {
    let { id: t } = e,
        n = L.A.getChannel(t);
    if (null == n) return !1;
    let l = D.A.getGuild(n.guild_id);
    return null != l && !!l.features.has(B.GuildFeatures.COMMUNITY) && sb(n.guild_id);
}
function sj(e) {
    let { channel: t } = e,
        n = L.A.getChannel(t.id);
    if (null == n) return !1;
    let l = D.A.getGuild(t.guild_id);
    return null != l && !!l.features.has(B.GuildFeatures.COMMUNITY) && sb(n.guild_id);
}
function sv(e) {
    let { channelId: t } = e,
        n = L.A.getChannel(t);
    if (null == n) return !1;
    let l = D.A.getGuild(n.guild_id);
    return (
        null != l && !!l.features.has(B.GuildFeatures.COMMUNITY) && P.A.getGuildId() === n.guild_id && sb(n.guild_id)
    );
}
function sy(e) {
    let { guildId: t } = e;
    return null != t && sb(t);
}
class sM extends u.Ay.Store {
    static displayName = "ChannelListUnreadsStore";
    initialize() {
        this.waitFor(tw.A, L.A, D.A, lH.A, lr.Ay, P.A, tR.Ay, tM.A, V.Ay);
    }
    getUnreadStateForGuildId(e) {
        return sE[e] ?? sC;
    }
}
let sL = new sM(tA.h, {
    UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
        let { guildId: t, channelIds: n } = e,
            l = D.A.getGuild(t);
        return (
            null != l &&
            !!l.features.has(B.GuildFeatures.COMMUNITY) &&
            null != n &&
            !o().isEqual(sx[t], n) &&
            ((sx[t] = n), sI(t))
        );
    },
    BULK_ACK: function (e) {
        let { channels: t } = e,
            n = !1;
        return (
            o()(t)
                .map((e) => {
                    let { channelId: t } = e;
                    return L.A.getChannel(t)?.guild_id;
                })
                .filter(tj.Vq)
                .uniq()
                .forEach((e) => {
                    let t = D.A.getGuild(e);
                    null != t && t.features.has(B.GuildFeatures.COMMUNITY) && sb(e) && (n = !0);
                }),
            n
        );
    },
    CHANNEL_ACK: sv,
    CHANNEL_DELETE: sj,
    CHANNEL_LOCAL_ACK: sv,
    MESSAGE_ACK: sv,
    MESSAGE_CREATE: sv,
    MESSAGE_DELETE_BULK: sv,
    MESSAGE_DELETE: sv,
    PASSIVE_UPDATE_V2: function (e) {
        let t = D.A.getGuild(e.guildId);
        return !!(e.channels.length > 0 && null != t && t.features.has(B.GuildFeatures.COMMUNITY)) && sb(e.guildId);
    },
    RESORT_THREADS: sv,
    THREAD_CREATE: sj,
    THREAD_DELETE: sj,
    THREAD_LIST_SYNC: sG,
    THREAD_MEMBER_UPDATE: sR,
    THREAD_MEMBERS_UPDATE: sR,
    THREAD_UPDATE: sj,
    BULK_CLEAR_RECENTS: sG,
    CATEGORY_COLLAPSE_ALL: sG,
    CATEGORY_EXPAND_ALL: sG,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = P.A.getGuildId();
        if (null == n || !new Set(t.map((e) => e.guildId)).has(n)) return !1;
        let l = sE[n];
        return null != l && "voice-channels" === l.bottomBar.mode && sb(n);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: sy,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: sy,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        for (let e of t) null != e.guild_id && sb(e.guild_id);
    },
    USER_GUILD_SETTINGS_GUILD_UPDATE: sy,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: sy,
});
var sT = n(168799);
let sU = { friction: 30, tension: 300 };
function sD(e) {
    let { guildChannels: t, jumpToVoiceChannels: n } = e,
        l = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
        i = (0, u.bG)([tR.Ay], () => tR.Ay.getVoiceStates(t.id), [t.id]),
        a = r.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), n();
            },
            [n],
        ),
        o = l?.getChannelRecords() ?? [],
        d = (0, nS.fK)({ channels: o, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: i });
    return (0, s.jsxs)(eb.D, {
        className: e7()(sT.M0, sT.OF),
        onClick: a,
        children: [
            (0, s.jsx)(ea.H, { size: "custom", className: sT.Gs, width: 14, height: 14, color: "currentColor" }),
            (0, s.jsx)(ei.E, {
                variant: "text-xs/semibold",
                className: sT.pM,
                children: ep.intl.format(ep.t["fDlr+F"], { count: d.length }),
            }),
            (0, s.jsx)(sm.A, {
                guildId: t.id,
                className: sT.J$,
                users: d.slice(0, 4),
                renderMoreUsers: () => null,
                max: 4,
                size: iJ._3.SIZE_16,
            }),
        ],
    });
}
function sO(e) {
    let { position: t, guildChannels: n, guildChannelsVersion: l, jumpToVoiceChannels: i, jumpToChannel: a } = e,
        { bottomBar: o, topBar: d } = (0, u.cf)([sL], () => sL.getUnreadStateForGuildId(n.id)),
        c = (0, u.bG)([sg.A], () => sg.A.isFocused()),
        { mode: h, mentionCount: A, targetChannelId: m } = "bottom" === t ? o : d,
        g = h === sf.HIDDEN,
        f = (0, tc.z)(
            {
                to: { transform: g ? ("bottom" === t ? "translateY(180%)" : "translateY(-180%)") : "translateY(0%)" },
                config: sU,
            },
            c ? "respect-motion-settings" : "animate-never",
        ),
        p = r.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), null != m && a(m);
            },
            [a, m],
        );
    return (0, s.jsx)("div", {
        className: e7()(sT.kL, { [sT.Mn]: "top" === t, [sT.sQ]: "bottom" === t }),
        children: (0, s.jsx)(td.animated.div, {
            className: sT.pK,
            style: f,
            "aria-hidden": g,
            children: (function () {
                switch (h) {
                    case sf.HIDDEN:
                        return (0, s.jsx)("div", { className: e7()(sT.M0, sT.Te) });
                    case sf.UNREAD:
                        return (0, s.jsxs)(eb.D, {
                            className: sT.M0,
                            onClick: p,
                            children: [
                                "bottom" === t
                                    ? (0, s.jsx)(ne.a, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: sT.z_,
                                          height: 14,
                                          width: 14,
                                      })
                                    : (0, s.jsx)(sA.t, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: sT.z_,
                                          height: 14,
                                          width: 14,
                                      }),
                                (0, s.jsx)(ei.E, {
                                    variant: "text-xs/semibold",
                                    color: "interactive-text-default",
                                    className: sT.pM,
                                    children: ep.intl.string(ep.t.FCRiT3),
                                }),
                            ],
                        });
                    case sf.MENTIONS:
                        return (0, s.jsx)(eb.D, {
                            className: e7()(sT.M0, sT.vU),
                            onClick: p,
                            children: (0, s.jsx)(ei.E, {
                                variant: "text-xs/semibold",
                                color: "badge-text-brand",
                                className: sT.pM,
                                children: ep.intl.format(ep.t.EQcLyp, { count: A }),
                            }),
                        });
                    case sf.VOICE_CHANNELS:
                        return (0, s.jsx)(sD, { jumpToVoiceChannels: i, guildChannels: n, guildChannelsVersion: l });
                    default:
                        return;
                }
            })(),
        }),
    });
}
var sP = n(310953),
    sV = n(173860);
function sw(e) {
    let t = L.A.getChannel(e);
    return (
        null != t &&
        null != t.getGuildId() &&
        !(t.isThread() ? lH.A.isMuted(t.id) : V.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, tb.Y)(t)
    );
}
function sH(e) {
    let t = L.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let l = V.Ay.isGuildCollapsed(n),
        i = V.Ay.isChannelMuted(n, t.id);
    return (!l || !i) && lr.Ay.getMentionCount(e) > 0;
}
let sB = r.forwardRef(function (e, t) {
    let { guildId: n, guildChannels: l, guildChannelsVersion: i, ...r } = e,
        a = (0, sP.W)(n, l, i, { withVoiceChannels: !1 }, { ignoreRecents: !0 }),
        o = (0, u.bG)([sg.A], () => sg.A.isFocused());
    return (0, s.jsx)(sV.A, { ref: t, ...r, isUnread: sw, isMentioned: sH, items: a, animate: o });
});
var sk = n(81466);
function sF(e) {
    let { guild: t, selected: l } = e,
        { hasUnread: i, mentionCount: r } = (0, u.cf)(
            [lr.Ay],
            () => ({
                hasUnread: lr.Ay.hasUnread(t.id, nK.P.GUILD_EVENT),
                mentionCount: lr.Ay.getMentionCount(t.id, nK.P.GUILD_EVENT),
            }),
            [t.id],
        ),
        a = (0, u.bG)([V.Ay], () => V.Ay.isMuteScheduledEventsEnabled(t.id));
    async function o() {
        await (0, S.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
                n.e("25996"),
                n.e("54948"),
                n.e("85251"),
                n.e("28634"),
                n.e("78638"),
                n.e("15462"),
                n.e("55513"),
                n.e("47626"),
                n.e("56373"),
                n.e("48263"),
                n.e("49347"),
                n.e("64287"),
                n.e("53934"),
                n.e("68248"),
                n.e("69647"),
                n.e("98354"),
                n.e("11588"),
            ]).then(n.bind(n, 15823));
            return (n) => (0, s.jsx)(e, { ...n, guildId: t.id });
        }),
            (0, ln.Dr)(eS.M.GUILD_HEADER_EVENT_UPSELL);
    }
    let d = (0, tQ.Ay)(t.id),
        c = d.length > 0 ? ep.intl.formatToPlainString(ep.t.IBdqSu, { number: d.length }) : ep.intl.string(ep.t.tlopTM);
    return (0, s.jsx)(ey.G, {
        id: `upcoming-events-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(sk.C, { size: "md", color: "currentColor", className: e }),
        text: c,
        selected: l,
        onClick: o,
        onContextMenu: function (e) {
            (0, tu.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("26386"), n.e("19990")]).then(n.bind(n, 221621));
                return (n) => (0, s.jsx)(e, { ...n, guildId: t.id });
            });
        },
        showUnread: i && !a,
        trailing: !a && r > 0 ? (0, s.jsx)(eR.hV, { className: n6.Do, disableColor: !0, count: r }) : null,
    });
}
var sK = n(152367),
    sz = n(972786),
    sW = n(20386),
    sY = n(309010),
    sX = n(818085);
function sq(e) {
    let { guild: t, selected: n } = e,
        l = (0, u.bG)([sz.A], () => sz.A.getSelectedProjectId(t.id), [t.id]),
        i = (0, u.bG)([sY.Ay], () => sY.Ay.getChannelId(), []),
        r = (0, u.bG)([P.A], () => P.A.getGuildId(), []);
    return (0, s.jsx)(ey.G, {
        id: `vibegrations-${t.id}`,
        renderIcon: (e) =>
            (0, s.jsx)(sK.D, { size: "custom", color: "currentColor", width: 20, height: 20, className: e }),
        text: ep.intl.string(sX.default.Xmvb23),
        selected: n,
        trailing: (0, s.jsx)(sW.iT, { guildId: t.id }),
        onClick: () => {
            let e = i === eL.VV.VIBEGRATIONS && r === t.id;
            (0, eM.pX)(B.BVt.CHANNEL(t.id, eL.VV.VIBEGRATIONS, null == l || e ? null : l));
        },
    });
}
var sZ = n(845056),
    sJ = n(765379),
    s$ = n(271683),
    sQ = n(725613),
    s0 = n(857253),
    s1 = n(360729),
    s2 = n(22231),
    s3 = n(241326),
    s9 = n(750943),
    s7 = n(743674),
    s5 = n(888697),
    s8 = n(26741),
    s6 = n(493819),
    s4 = n(722884),
    re = n(844045),
    rt = n(52102);
function rn(e) {
    let { channel: t, imageUrl: l, animatedUrl: i, bannerHash: a, canModifyHangout: o } = e,
        d = (0, s7.S)(l),
        c = (0, e0.je)(t),
        u = (0, s8.P9)({ guildId: t.guild_id, channelId: t.id, bannerHash: a }),
        h = r.useCallback(() => {
            (0, s8.J_)({ guildId: t.guild_id, channelId: t.id }), (0, s4.A)({ channel: t });
        }, [t]),
        A = r.useCallback(() => {
            (0, s8.nK)({ guildId: t.guild_id, channelId: t.id }), (0, s5.e2)(t.id);
        }, [t.guild_id, t.id]),
        m = r.useCallback(
            (e) => {
                c
                    ? (0, tu.L3)(e, async () => {
                          let { default: e } = await n.e("55558").then(n.bind(n, 316421));
                          return (n) => (0, s.jsx)(e, { ...n, channel: t });
                      })
                    : e.preventDefault();
            },
            [t, c],
        );
    return (0, s.jsxs)("div", {
        ref: u,
        className: rt.rs,
        onContextMenu: m,
        children: [
            (0, s.jsx)("div", {
                className: rt.ZS,
                style: null != d ? { backgroundColor: d } : void 0,
                children: (0, s.jsx)(s6.A, { imageUrl: l, animatedUrl: i, className: rt.Sl }),
            }),
            o
                ? (0, s.jsxs)("div", {
                      className: rt.n_,
                      children: [
                          (0, s.jsx)(eI.m, {
                              text: ep.intl.string(re.default.XJ4UpB),
                              children: (0, s.jsx)(eb.D, {
                                  className: rt.HF,
                                  onClick: h,
                                  children: (0, s.jsx)(s2.R, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                          (0, s.jsx)(eI.m, {
                              text: ep.intl.string(re.default.XV4qT6),
                              children: (0, s.jsx)(eb.D, {
                                  className: rt.HF,
                                  onClick: A,
                                  children: (0, s.jsx)(s3.u, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function rl(e) {
    let { channel: t } = e,
        n = (0, s8.dX)({ guildId: t.guild_id, channelId: t.id }),
        l = r.useCallback(() => {
            (0, s8.J_)({ guildId: t.guild_id, channelId: t.id }), (0, s4.A)({ channel: t });
        }, [t]);
    return (0, s.jsx)("div", {
        ref: n,
        className: rt._o,
        children: (0, s.jsxs)(eb.D, {
            className: rt.hH,
            onClick: l,
            children: [
                (0, s.jsx)(s9.X, { size: "xs", color: "currentColor" }),
                (0, s.jsx)(ei.E, {
                    variant: "text-sm/medium",
                    color: "currentColor",
                    children: ep.intl.string(re.default.NGcIOF),
                }),
            ],
        }),
    });
}
function ri(e) {
    let { channel: t, isConnected: n } = e,
        { enableHangoutWindow: l } = (0, eQ.Dm)({ guildId: t.guild_id, location: "HangoutWindow" }),
        i = (0, e0.W6)(t),
        a = n && i,
        o = t.voiceHangout,
        d = o?.banner_hash,
        c = r.useMemo(() => {
            if (null == d || null == t.guild_id) return null;
            let e = (0, e0.Sq)({ guildId: t.guild_id, bannerHash: d });
            return null == e ? null : { bannerHash: d, ...e };
        }, [t.guild_id, d]);
    return l
        ? null != c
            ? (0, s.jsx)(rn, {
                  channel: t,
                  imageUrl: c.imageUrl,
                  animatedUrl: c.animatedUrl,
                  bannerHash: c.bannerHash,
                  canModifyHangout: a,
              })
            : a
              ? (0, s.jsx)(rl, { channel: t })
              : null
        : null;
}
var rs = n(290863),
    rr = n(461213),
    ra = n(532622),
    ro = n(882840),
    rd = n(208971),
    rc = n(46054),
    ru = n(500216),
    rh = n(742715);
function rA(e) {
    let { channel: t, connected: n, hovered: l, subtitle: i, onClick: a } = e,
        o = (0, rd.G)((0, ro.l)(t)),
        { enableHangoutWindow: d } = (0, eQ.Dm)({ guildId: t.guild_id, location: "VoiceChannelStatus" }),
        c = d && (0, e0.lr)(t),
        u = null != o && o.length > 0,
        h = (0, ra.Ay)(t, !0),
        A = null != i && i.length > 0;
    if (
        (r.useEffect(() => {
            u && lb.default.track(B.HAw.VOICE_CHANNEL_TOPIC_VIEWED, { channel_id: t.id, guild_id: t.guild_id });
        }, [u, t.id, t.guild_id]),
        null == t.guild_id)
    )
        return null;
    let m = e7()(ru.Ui, n && h ? ru.BI : null);
    return u
        ? (0, s.jsx)(eb.D, {
              className: m,
              onClick: h ? a : void 0,
              children: (0, s.jsx)(ei.E, {
                  variant: "text-xs/medium",
                  className: e7()(ru.qS, rh.PT),
                  children: (0, s.jsx)(t5.A, { children: rc.A.parseVoiceChannelStatus(o, !0, { channelId: t.id }) }),
              }),
          })
        : n && h && !c && (!A || l)
          ? (0, s.jsxs)(eb.D, {
                className: m,
                onClick: a,
                children: [
                    (0, s.jsx)(ei.E, {
                        variant: "text-xs/medium",
                        className: ru.qS,
                        children: ep.intl.string(ep.t.Mgpxiw),
                    }),
                    (0, s.jsx)(s2.R, { color: "currentColor", className: ru.rD, size: "xxs" }),
                ],
            })
          : A
            ? (0, s.jsx)(t5.A, { children: i })
            : null;
}
class rm extends nk {
    state = { shouldShowGuildVerificationPopout: !1, hovered: !1 };
    ref = r.createRef();
    channelItemRef = r.createRef();
    closeGuildVerificationPopout = () => {
        this.setState({ shouldShowGuildVerificationPopout: !1 });
    };
    handleVoiceConnect = () => {
        let {
            locked: e,
            connected: t,
            channel: n,
            unverifiedAccount: l,
            needSubscriptionToAccess: i,
            mentionCount: s,
            isSuggestedSection: r,
            guildRoomsEnabled: a,
        } = this.props;
        l && this.setState({ shouldShowGuildVerificationPopout: !0 });
        let o = s > 0;
        o && l2.A.updateChatOpen(n.id, !0),
            lM.A.handleVoiceConnect({
                channel: n,
                connected: t,
                needSubscriptionToAccess: i,
                routeDirectlyToChannel: o || a,
                locked: e,
                transitionExtras: r ? { source: iu.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
            });
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            l = D.A.getGuild(t.getGuildId());
        null != l &&
            (0, tu.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("26132"),
                    n.e("46652"),
                    n.e("93103"),
                    n.e("93190"),
                    n.e("91763"),
                    n.e("38730"),
                    n.e("35321"),
                    n.e("47502"),
                    n.e("50033"),
                    n.e("74610"),
                    n.e("3998"),
                    n.e("43266"),
                    n.e("9004"),
                    n.e("12255"),
                    n.e("40959"),
                    n.e("30997"),
                    n.e("79995"),
                    n.e("87048"),
                    n.e("44058"),
                    n.e("91377"),
                    n.e("35723"),
                    n.e("66378"),
                    n.e("56372"),
                    n.e("29542"),
                    n.e("19690"),
                    n.e("26792"),
                    n.e("48804"),
                    n.e("18663"),
                    n.e("99990"),
                    n.e("99854"),
                ]).then(n.bind(n, 119357));
                return (n) => (0, s.jsx)(e, { ...n, channel: t, guild: l });
            });
    };
    handleMouseEnter = () => {
        this.setState({ hovered: !0 });
    };
    handleMouseLeave = () => {
        this.setState({ hovered: !1 });
    };
    getVoiceStatesCount() {
        let { voiceStates: e } = this.props;
        return e?.length ?? 0;
    }
    isFull() {
        let { channel: e } = this.props;
        return (0, nS.Pd)(e, lD.A, D.A);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return eO.ZS;
        if (null != t)
            if (e > t) return eO.mU;
            else return eO.TR;
        return eO.fx;
    }
    handleClick = () => {
        let { channel: e } = this.props,
            t = e.getGuildId();
        null != t && (0, l5.V)(t) && (0, l7.Ze)(t), this.handleVoiceConnect();
    };
    handleVoiceStatusClick = (e) => {
        let { connected: t, channel: n } = this.props;
        t && (e.stopPropagation(), (0, s$.A)({ channel: n }));
    };
    renderSubtitle() {
        let { channel: e, connected: t } = this.props,
            n = iK(this.props.subtitle)?.subtitle,
            { hovered: l } = this.state;
        return (0, s.jsx)(rA, {
            onClick: this.handleVoiceStatusClick,
            channel: e,
            connected: t,
            subtitle: n,
            hovered: l,
        });
    }
    renderVoiceUsers() {
        let { channel: e, voiceStates: t, collapsed: n, withGuildIcon: l, tabIndex: i } = this.props;
        return (0, s.jsx)(lq.A, {
            channel: e,
            collapsed: n,
            collapsedMax: 6,
            voiceStates: t,
            withGuildIcon: l,
            tabIndex: i,
        });
    }
    renderHangoutWindow() {
        let { channel: e, connected: t, voiceStates: n, collapsed: l } = this.props;
        return !(null != n && n.length > 0) || l ? null : (0, s.jsx)(ri, { channel: e, isConnected: t });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        return t
            ? (0, s.jsx)(ic, { type: id.VOICE, guildId: e.guild_id, closePopout: this.closeGuildVerificationPopout })
            : null;
    };
    renderOpenChatButton = () => {
        let { channel: e, locked: t, forceShowButtons: n, isSuggestedSection: l } = this.props;
        if (!t)
            return (0, s.jsx)(eI.m, {
                asContainer: !0,
                text: ep.intl.string(ep.t.ZXxLQg),
                children: (0, s.jsx)(eb.D, {
                    className: e7()(eO.Xs, n ? eO.Tf : null),
                    onClick: () => {
                        l2.A.updateChatOpen(e.id, !0),
                            (0, ih.iN)(e.id, l ? { source: iu.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
                    },
                    "aria-label": ep.intl.string(ep.t.ZXxLQg),
                    children: (0, s.jsx)(eo.o, { size: "xs", color: "currentColor", className: eO.gE }),
                }),
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, s.jsx)("div", { className: eO.yW, children: e });
    }
    getTooltipText = () => {
        let { connected: e } = this.props;
        return this.isFull() && !e ? ep.intl.string(ep.t.rZfiNq) : null;
    };
    render() {
        let {
                channel: e,
                selected: t,
                connected: n,
                unread: l,
                resolvedUnreadSetting: i,
                mentionCount: r,
                locked: a,
                connectChannelDropTarget: o,
                connectChannelDragSource: d,
                connectUserDropTarget: c,
                connectDragPreview: u,
                canReorderChannel: h,
                canMoveMembers: A,
                showTutorial: m,
                hasActiveEvent: g,
                embeddedApps: f,
                isSubscriptionGated: p,
                isFavoriteSuggestion: C,
                withGuildIcon: E,
                hasStartTime: x,
                voiceChannelStartTime: _,
                shouldHighlightChannel: N,
                shouldUseAnimatedWaveform: S,
                voiceStates: I,
            } = this.props,
            { shouldShowGuildVerificationPopout: b } = this.state,
            G = N || S,
            R = (0, s.jsxs)("li", {
                ref: this.ref,
                className: e7()(this.getModeClass(), { [eO.r9]: this.isDisabled(), [eO.fy]: N }),
                "data-dnd-name": (0, nl.m1)(e, ir.default, ix.A),
                children: [
                    N &&
                        (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsx)("div", { className: eO.UQ }),
                                (0, s.jsx)("div", { className: eO.l0 }),
                            ],
                        }),
                    (0, s.jsx)("div", {
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: (0, s.jsx)(l1.Y, {
                            targetElementRef: this.channelItemRef,
                            position: "right",
                            renderPopout: this.renderPopout,
                            onRequestClose: this.closeGuildVerificationPopout,
                            spacing: 17,
                            shouldShow: b,
                            children: () =>
                                (0, s.jsx)(eI.m, {
                                    text: this.getTooltipText(),
                                    children: (0, s.jsxs)(nF.Ay, {
                                        ref: this.channelItemRef,
                                        className: eO.Ki,
                                        iconClassName: e7()({ [eO.Gj]: g || x || G }),
                                        hasActiveEvent: g,
                                        channel: e,
                                        selected: !C && t,
                                        connected: n,
                                        unread: n ? l : void 0,
                                        resolvedUnreadSetting: i,
                                        mentionCount: r,
                                        locked: a,
                                        subtitle: this.renderSubtitle(),
                                        onClick: () => {
                                            this.handleClick();
                                        },
                                        onContextMenu: (e) => {
                                            this.handleContextMenu(e);
                                        },
                                        connectDragPreview: u,
                                        isFavoriteSuggestion: C,
                                        "aria-label": (0, l9.Ay)({
                                            channel: e,
                                            unread: l,
                                            mentionCount: r,
                                            voiceStates: I,
                                            activityNames: [
                                                ...new Set([
                                                    ...f.map((e) => e.application.name),
                                                    ...this.props.nonEmbeddedActivityNames,
                                                ]),
                                            ],
                                            isSubscriptionGated: p,
                                            voiceChannelStartTime: _,
                                        }),
                                        withGuildIcon: E,
                                        children: [
                                            C &&
                                                (0, s.jsxs)(s.Fragment, {
                                                    children: [
                                                        this.renderAcceptSuggestionButton(),
                                                        this.renderRemoveSuggestionButton(),
                                                    ],
                                                }),
                                            !C &&
                                                (0, s.jsxs)(s.Fragment, {
                                                    children: [
                                                        this.renderOpenChatButton(),
                                                        this.renderInviteButton(),
                                                        this.renderEditButton(),
                                                        this.renderChannelInfo(),
                                                    ],
                                                }),
                                        ],
                                    }),
                                }),
                        }),
                    }),
                    this.renderHangoutWindow(),
                    this.renderVoiceUsers(),
                ],
            });
        return (
            A && (R = c(R)),
            h && (R = o(d(R))),
            m &&
                (R = (0, s.jsx)(ng.A, {
                    childRef: this.ref,
                    tutorialId: "voice-conversations",
                    position: "right",
                    offsetX: -20,
                    children: R,
                })),
            R
        );
    }
}
let rg = J((0, l3.F)(rm));
function rf(e) {
    let {
            guild: t,
            channel: n,
            disableSorting: l,
            isFavoriteCategory: i,
            selected: r,
            collapsed: a,
            voiceStates: o,
        } = e,
        d = (0, u.cf)([lr.Ay], () => ({ unread: lr.Ay.hasUnread(n.id), mentionCount: lr.Ay.getMentionCount(n.id) })),
        c = (0, u.bG)([V.Ay], () => V.Ay.resolveUnreadSetting(n)),
        h = (0, u.cf)([L.A, is.A, O.A], () => {
            let e = L.A.getChannel(n.parent_id),
                i = is.A.getCheck(n.guild_id);
            return {
                canManageChannel: O.A.can(B.xBc.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== l &&
                    ((0, j.ai)(t.id) ||
                        (null != e ? O.A.can(B.xBc.MANAGE_CHANNELS, e) : O.A.can(B.xBc.MANAGE_CHANNELS, t))),
                canMoveMembers: O.A.can(B.xBc.MOVE_MEMBERS, n),
                locked: !O.A.can(B.xBc.CONNECT, n),
                bypassLimit: O.A.can(B.xBc.MOVE_MEMBERS, n),
                unverifiedAccount: !i.canChat,
            };
        }),
        A = (0, u.bG)([lD.A], () => lD.A.hasVideo(n.id)),
        { enabled: m } = s1.A.useExperiment({ guildId: t.id, location: "VoiceChannel" }),
        g = (0, i_.Ay)(n),
        f = (0, u.yK)([rr.A, rs.A, ip.default], () => {
            if (null == o || 0 === o.length) return [];
            let e = ip.default.getId(),
                t = [];
            for (let { user: l } of o)
                for (let i of l.id === e ? rr.A.getActivities() : rs.A.getActivities(l.id, n.guild_id))
                    !(0, sZ.N)(i) || (0, sJ.A)(i) || null == i.name || t.includes(i.name) || t.push(i.name);
            return t;
        }, [o, n.guild_id]),
        p = (0, nl.Ay)(n),
        C = (0, tQ.Qs)(n.id),
        E = (0, u.bG)([sQ.A], () => sQ.A.getStartTime(n), [n]),
        { isSubscriptionGated: x, needSubscriptionToAccess: _ } = (0, lL.A)(n.id),
        N = (0, s0.A)(),
        S = (0, u.bG)([V.Ay], () => V.Ay.isFavorite(t.id, n.id)),
        I = e.connected || N?.channelId === n.id,
        { enableHighlight: b, enableWaveformIcon: G } = (0, n_.b)(t.id, "VoiceChannel"),
        R = null != o && o.length > 0,
        v = b && R,
        y = G && R,
        M = iT({
            channel: n,
            isChannelSelected: r,
            isChannelCollapsed: a,
            voiceStates: o,
            isSubscriptionGated: x,
            needSubscriptionToAccess: _,
            enableConnectedUserLimit: !0,
            enableActivities: !0,
        }),
        T = I && null == M;
    return (0, s.jsx)(rg, {
        channelName: p,
        embeddedApps: g,
        nonEmbeddedActivityNames: f,
        embeddedActivityType: B.$pd.PLAYING,
        video: A,
        hasActiveEvent: null != C,
        isSubscriptionGated: x,
        needSubscriptionToAccess: _,
        ...d,
        ...h,
        ...e,
        connected: I,
        isFavoriteSuggestion: i && !S,
        forceShowButtons: T,
        channelInfo: M,
        resolvedUnreadSetting: c,
        hasChannelInfo: null != M,
        hasStartTime: null != E,
        voiceChannelStartTime: E,
        shouldHighlightChannel: v,
        shouldUseAnimatedWaveform: y,
        guildRoomsEnabled: m,
    });
}
n(131955);
function rp(e) {
    return (
        h.A.modules.channels.NAME_LINE_HEIGHT.resolve({ density: e }) +
        2 * h.A.space.SPACE_XXS.resolve({ density: e }) +
        2
    );
}
class rC extends r.PureComponent {
    static contextType = d.nC;
    _list = null;
    unreadTopRef = r.createRef();
    unreadBottomRef = r.createRef();
    static defaultProps = { density: "default" };
    state = {
        initialized: !1,
        isUnreadVisible: !0,
        topUnread: null,
        topMention: null,
        bottomUnread: null,
        bottomMention: null,
    };
    componentDidMount() {
        this.setState({ initialized: !0 }), (0, tH.Ei)(this.getVisibleChannels);
    }
    componentWillUnmount() {
        this.updateChannelListScroll.cancel();
    }
    componentDidUpdate(e, t) {
        let { scrollToChannel: n, guildId: l, selectedChannelId: i } = this.props,
            { initialized: s } = this.state,
            { scrollTop: r } = tP.A.getGuildDimensions(l);
        null != n
            ? (this.scrollToChannel(n), E.A.clearChannelListScrollTo(l))
            : l !== e.guildId
              ? null != r && this.scrollTo(r)
              : i !== e.selectedChannelId
                ? this.scrollToChannel(i)
                : !t.initialized &&
                  s &&
                  (null == r && null != i
                      ? this.scrollToChannel(i, !1, 8, this.handleListScroll)
                      : this.scrollTo(r ?? 0, this.handleListScroll)),
            this.testShouldSkipTutorial();
    }
    getSectionRowsFromChannel(e) {
        return this.props.guildChannels.getSectionRowsFromChannel(e);
    }
    setListRef = (e) => {
        let { ref: t } = this.context;
        (t.current = e?.getScrollerNode() ?? null), (this._list = e);
    };
    scrollTo(e, t) {
        this._list?.scrollTo({ to: e, animate: !1, callback: t });
    }
    scrollToChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8,
            l = arguments.length > 3 ? arguments[3] : void 0,
            i = this._list,
            s = this.getSectionRowsFromChannel(e)[0];
        if (null != s && null != i)
            if (null != s.threadOffset) {
                let [e] = i.getScrollPosition(s.section, s.row),
                    { density: r = "default" } = this.props,
                    a = s.threadOffset * rp(r);
                i.scrollIntoViewRect({ start: e + a, end: e + a + rp(r), padding: n, animate: t, callback: l });
            } else i.scrollToIndex({ section: s.section, row: s.row, animate: t, padding: n, callback: l });
        else l?.();
    }
    jumpToVoiceChannels = () => {
        let { guildChannels: e, voiceStates: t } = this.props,
            n = 0,
            l = e.getCategoryFromSection(e.voiceChannelsSectionNumber)?.getShownChannelIds() ?? [];
        for (let e = 0; e < l.length - 1; e++)
            if ((t[l[e]] ?? []).length > 0) {
                n = e + 1;
                break;
            }
        this._list?.scrollToIndex({ section: e.voiceChannelsSectionNumber, row: n, animate: !0, padding: 8 });
    };
    jumpToChannel = (e) => this.scrollToChannel(e, !0, 32);
    jumpToChannelWithMentionsAndUnreads = (e, t) => {
        let [n, l] = t;
        return this.scrollToChannel(e, !0, null != n && null != l ? 32 : 8);
    };
    isChannelVisible = (e, t) => {
        let n = this.getSectionRowsFromChannel(e),
            l = this._list;
        if (null == l) return !1;
        for (let { row: e, section: i } of n) {
            let [n, s] = l.getScrollPosition(i, e),
                r = l.getScrollerState();
            if ((t && n + s < r.scrollTop + r.offsetHeight) || (!t && n > r.scrollTop)) return !0;
        }
        return !1;
    };
    getVisibleChannels = () => {
        let e = this._list;
        if (null == e) return [];
        let t = e.getItems(),
            n = e.getScrollerState(),
            l = [];
        for (var i = 0; i < t.length; i++) {
            let s = t[i];
            if ((0, A.o)(s) && s.section >= this.props.guildChannels.favoritesSectionNumber) {
                let t = this.props.guildChannels.getChannelFromSectionRow(s.section, s.row),
                    [i, r] = e.getScrollPosition(s.section, s.row);
                null != t && i + r < n.scrollTop + n.offsetHeight && i > n.scrollTop && l.push(t.channel.id);
            }
        }
        return l;
    };
    handleResize = () => {
        let { showNewUnreadsBar: e } = this.props,
            t = this._list?.getScrollerState() ?? null;
        if ((this.setState({ isUnreadVisible: this.isUnreadVisible() }), e && null != t)) {
            let { scrollTop: e } = t;
            this.updateChannelListScroll(e);
        }
    };
    handleListScroll = () => {
        let { onScroll: e } = this.props,
            t = this._list?.getScrollerState() ?? null;
        if (null != t) {
            let { scrollTop: n } = t;
            null != e && e(t), this.updateChannelListScroll(n);
        }
        null != this.unreadTopRef.current && this.unreadTopRef.current.calculateState(),
            null != this.unreadBottomRef.current && this.unreadBottomRef.current.calculateState();
    };
    handleUnreadCalculate = (e, t, n) => {
        let l = this.isUnreadVisible();
        n
            ? this.setState({ isUnreadVisible: l, bottomUnread: t, bottomMention: e })
            : this.setState({ isUnreadVisible: l, topUnread: t, topMention: e });
    };
    isUnreadVisible() {
        let { guildChannels: e } = this.props,
            t = this._list;
        return (
            null != t &&
            t.getItems().some((n) => {
                if ("row" !== n.type) return !1;
                let { section: l, row: i } = n;
                if (l < tV.bK || e.isPlaceholderRow(l, i)) return !1;
                let s = e.getChannelFromSectionRow(l, i);
                if (null == s) return !1;
                let { channel: r, category: a } = s;
                return (
                    !!(0, w.ig)(r.record.type) &&
                    (!a.isCollapsed || !a.isMuted) &&
                    !r.isMuted &&
                    !!t.isItemVisible(l, i, !0) &&
                    (0, tb.Y)(r.record)
                );
            })
        );
    }
    updateChannelListScroll = (0, a.throttle)((e) => {
        E.A.updateChannelListScroll(this.props.guildId, e, this.getVisibleChannels());
    }, 100);
    getSectionHeight = (e) => {
        let { guild: t, guildChannels: n, density: l } = this.props,
            i = "compact" === l ? 8 : 12;
        if (e === tV.PU) return i;
        if (e === tV.bK) return t.features.has(B.GuildFeatures.HUB) ? 0 : i;
        if (e === n.voiceChannelsSectionNumber) {
            let t = n.getCategoryFromSection(e);
            if (null == t || t.isEmpty()) return 0;
            if (t.isCollapsed) return 49;
            let l = n.getChannelFromSectionRow(e, 0)?.channel;
            return null == l || l.record.type === B.rbe.GUILD_CATEGORY ? 9 : 25;
        }
        return "compact" === l ? 32 : 40;
    };
    getSectionFooterHeight = (e) => {
        let {
            guildChannels: t,
            voiceStates: n,
            selectedVoiceChannelId: l,
            selectedChannelId: i,
            optInEnabled: s,
            guildChannelsVersion: r,
        } = this.props;
        return (function (e) {
            let {
                sectionIndex: t,
                guildChannels: n,
                voiceStates: l,
                selectedChannelId: i,
                selectedVoiceChannelId: s,
                optInEnabled: r,
                visualRefreshEnabled: a,
                density: o,
            } = e;
            if (t === n.voiceChannelsSectionNumber) return 44;
            let { hasDivider: d, canHaveVoiceSummary: c } = nI(n, r, t),
                u = d ? (a ? 9 : 12) : 0;
            if (!c || t === tV.PU) return u;
            let h = n.getNamedCategoryFromSection(t);
            return null == h ||
                !(function (e) {
                    let { category: t, voiceStates: n, selectedChannelId: l, selectedVoiceChannelId: i } = e;
                    return (
                        (function (e) {
                            let { category: t, voiceStates: n, selectedChannelId: l, selectedVoiceChannelId: i } = e;
                            return !0 !== M.A.isCollapsed(t.record.id)
                                ? []
                                : t.getChannelRecords().filter((e) => {
                                      if (!O.A.can(B.xBc.VIEW_CHANNEL, e)) return !1;
                                      let t = n[e.id] ?? [];
                                      return e.id !== i && e.id !== l && t.length > 0;
                                  });
                        })({ category: t, selectedChannelId: l, selectedVoiceChannelId: i, voiceStates: n }).length > 0
                    );
                })({ category: h, selectedChannelId: i, selectedVoiceChannelId: s, voiceStates: l })
                ? u
                : (a && "cozy" === o ? 42 : 34) + u;
        })({
            sectionIndex: e,
            guildChannels: t,
            guildChannelsVersion: r,
            voiceStates: n,
            selectedChannelId: i,
            selectedVoiceChannelId: l,
            optInEnabled: s,
            density: this.props.density,
        });
    };
    getRowHeight = (e, t) => {
        let {
                guildChannels: n,
                voiceStates: l,
                stageChannelSpeakerVoiceStates: i,
                selectedVoiceChannelId: s,
                density: r = "default",
            } = this.props,
            a = rp(r);
        if (e === tV.PU) {
            let e = n.getGuildActionSection();
            return e.isEmpty()
                ? 0
                : e.getRow(t) === t7.n.GUILD_PREMIUM_PROGRESS_BAR
                  ? e.getRows().length > 1
                      ? 69
                      : 57
                  : a;
        }
        if (n.isPlaceholderRow(e, t)) return 0;
        let o = n.getChannelFromSectionRow(e, t);
        if (null == o) return 0;
        let { channel: d, category: c } = o;
        if (d.record.type === B.rbe.GUILD_CATEGORY) return 40;
        for (let e of d.threadIds) {
            let { density: t = "default" } = this.props;
            a += rp(t);
            let n = l[d.id];
            null != n && n.length > 0 && (a += s === e ? 32 * n.length : 32);
        }
        if (d.record.isGuildVoice()) {
            let e = l[d.id];
            if (null != e && e.length > 0) {
                let t = 32 * e.length;
                if (
                    (d.isCollapsed || c.isCollapsed ? (t = 32) : (0, e2.Ln)(d.record) && (t += 32),
                    (a += t + h.A.space.SPACE_XS.resolve({ density: r })),
                    !d.isCollapsed && !c.isCollapsed)
                ) {
                    let { enableHangoutWindow: e } = (0, eQ.kY)({
                        guildId: d.record.guild_id,
                        location: "ChannelList",
                    });
                    e && ((0, e0.lr)(d.record) ? (a += 134) : s === d.id && (a += 44));
                }
            }
            d.id === this.props.rtcConnectedChannelId && (a += 32 * this.props.rtcDesyncedVoiceStatesCount);
        }
        if (((null != d.subtitle || s === d.id) && (a += 16), d.record.isGuildStageVoice())) {
            let e = l[d.id] ?? [],
                t = i[d.id] ?? [];
            if (null != e && e.length > 0) {
                let e = 32 * t.length;
                d.isCollapsed || c.isCollapsed ? (e = Math.ceil(e / 5)) : (e += 32), (a += e + 8);
            }
        }
        return a;
    };
    dismissRecents = () => {
        let { guild: e, guildChannels: t, selectedChannelId: n } = this.props,
            l = t.getCategoryFromSection(t.recentsSectionNumber);
        if (null == l) return;
        let i = null,
            s = l.getShownChannelAndThreadIds();
        null != n && s.includes(n) && (i = (0, e3.xb)(t)), (0, e3.DD)(e.id, s, i);
    };
    renderSection = (e) => {
        let { section: t } = e,
            {
                guildChannels: n,
                guildChannelsVersion: l,
                guild: i,
                selectedChannelId: r,
                disableManageChannels: a,
            } = this.props;
        return (0, s.jsx)(
            nE,
            {
                sectionIndex: t,
                guild: i,
                guildChannels: n,
                guildChannelsVersion: l,
                selectedChannelId: r,
                disableManageChannels: a,
            },
            (function (e, t) {
                switch (e) {
                    case tV.PU:
                        return "hoisted-spacer";
                    case tV.bK:
                        return "uncategorized-spacer";
                    case tV.HP:
                        return "favorites";
                    case t.recentsSectionNumber:
                        return "recents-header";
                    case t.voiceChannelsSectionNumber:
                        return "voice-channels-header";
                    default: {
                        let n = t.getNamedCategoryFromSection(e);
                        if (null != n) return `category-${n.id}`;
                        return `section-${e}`;
                    }
                }
            })(t, n),
        );
    };
    renderRow = (e) => {
        let { section: t, row: n } = e,
            {
                guild: l,
                selectedChannel: i,
                selectedChannelId: a,
                selectedVoiceChannel: o,
                selectedVoiceChannelId: d,
                guildChannels: c,
                voiceStates: u,
                disableManageChannels: h,
                stageChannelSpeakerVoiceStates: A,
                optInEnabled: m,
                withGuildIcon: g,
            } = this.props;
        if (t === tV.PU) {
            let e = c.getGuildActionSection(),
                t = e.getRow(n);
            if (null == t) return null;
            switch (t) {
                case t7.n.GUILD_HUB_HEADER_OPTIONS:
                    return (0, s.jsx)(
                        e1.A,
                        { guild: l, channel: U.Ay.getDefaultChannel(l.id) },
                        t7.n.GUILD_HUB_HEADER_OPTIONS,
                    );
                case t7.n.GUILD_PREMIUM_PROGRESS_BAR:
                    let i = e.getRows();
                    return (0, s.jsx)(tI, { guild: l, withMargin: i.length > 1 }, t7.n.GUILD_PREMIUM_PROGRESS_BAR);
                case t7.n.GUILD_SPACE:
                    return (0, s.jsx)(e$, { guild: l, selected: a === eL.VV.GUILD_SPACE }, t7.n.GUILD_SPACE);
                case t7.n.GUILD_HOME:
                    return (0, s.jsx)(ld, { guild: l, selected: a === eL.VV.GUILD_HOME }, t7.n.GUILD_HOME);
                case t7.n.GUILD_SCHEDULED_EVENTS:
                    return (0, s.jsx)(
                        sF,
                        { guild: l, selected: a === t7.n.GUILD_SCHEDULED_EVENTS },
                        t7.n.GUILD_SCHEDULED_EVENTS,
                    );
                case t7.n.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, s.jsx)(
                        lC,
                        { guild: l, selected: a === eL.VV.ROLE_SUBSCRIPTIONS },
                        t7.n.GUILD_ROLE_SUBSCRIPTIONS,
                    );
                case t7.n.GUILD_SHOP:
                    return (0, s.jsx)(lv, { guild: l, selected: a === eL.VV.GUILD_SHOP }, t7.n.GUILD_SHOP);
                case t7.n.GUILD_GAME_SHOP:
                    return (0, s.jsx)(le, { guild: l, selected: a === eL.VV.GAME_SHOP }, t7.n.GUILD_GAME_SHOP);
                case t7.n.GUILD_VIBEGRATIONS:
                    return (0, s.jsx)(sq, { guild: l, selected: a === eL.VV.VIBEGRATIONS }, t7.n.GUILD_VIBEGRATIONS);
                case t7.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                    return (0, s.jsx)(lm, { guild: l });
                case t7.n.CHANNELS_AND_ROLES:
                    return (0, s.jsx)(
                        la,
                        { guild: l, selected: a === eL.VV.CHANNEL_BROWSER || a === eL.VV.CUSTOMIZE_COMMUNITY },
                        t7.n.CHANNELS_AND_ROLES,
                    );
                case t7.n.GUILD_DIRECTORY:
                    return (0, s.jsx)(
                        nz,
                        { guild: l, selectedChannelId: a, disableManageChannels: h },
                        t7.n.GUILD_DIRECTORY,
                    );
                case t7.n.GUILD_MOD_DASH_MEMBER_SAFETY:
                    return (0, s.jsx)(
                        eZ,
                        { guild: l, selected: a === eL.VV.MEMBER_SAFETY },
                        t7.n.GUILD_MOD_DASH_MEMBER_SAFETY,
                    );
                case t7.n.GUILD_BOOSTS:
                    return (0, s.jsx)(to, { guildId: l.id, selected: a === eL.VV.GUILD_BOOSTS }, t7.n.GUILD_BOOSTS);
                case t7.n.GAME_SERVERS:
                    return (0, s.jsx)(ek, { guildId: l.id, selected: a === eL.VV.GAME_SERVERS }, t7.n.GAME_SERVERS);
                case t7.n.GAME_SERVERS_EMPTY:
                    return (0, s.jsx)(
                        eP,
                        { guildId: l.id, selected: a === eL.VV.GAME_SERVERS },
                        t7.n.GAME_SERVERS_EMPTY,
                    );
                case t7.n.GUILD_OFFICIAL_MESSAGES:
                    return (0, s.jsx)(
                        lf,
                        { guild: l, selected: a === eL.VV.GUILD_OFFICIAL_MESSAGES },
                        t7.n.GUILD_OFFICIAL_MESSAGES,
                    );
                default:
                    return null;
            }
        }
        if (c.isPlaceholderRow(t, n)) return null;
        let f = c.getChannelFromSectionRow(t, n);
        if (null == f) return null;
        let { category: p, channel: C } = f,
            E = p instanceof tV.xu,
            x = C.record,
            _ = `${t}${C.id}`;
        switch (x.type) {
            case B.rbe.GUILD_ANNOUNCEMENT:
            case B.rbe.GUILD_TEXT:
            case B.rbe.GUILD_FORUM:
            case B.rbe.GUILD_MEDIA:
            case B.rbe.DM:
            case B.rbe.GROUP_DM:
                return (0, s.jsxs)(
                    r.Fragment,
                    {
                        children: [
                            (0, s.jsx)(sh, {
                                channel: x,
                                guild: l,
                                position: C.position,
                                selected: a === C.id,
                                muted: C.isMuted,
                                subtitle: C.subtitle,
                                disableManageChannels: h,
                                canBeNewChannel: m && t === c.recentsSectionNumber,
                                isFavoriteCategory: E,
                                isSuggestedSection: t === c.recentsSectionNumber,
                            }),
                            C.threadCount > 0
                                ? (0, s.jsx)(l0, {
                                      withGuildIcon: g,
                                      channel: x,
                                      sortedThreadIds: C.threadIds,
                                      selectedChannel: null != i && (i.id === C.id || i.parent_id === x.id) ? i : null,
                                      selectedVoiceChannelId: o?.parent_id === x.id ? d : null,
                                  })
                                : null,
                        ],
                    },
                    _,
                );
            case B.rbe.GUILD_STAGE_VOICE:
                return (0, s.jsx)(
                    iP,
                    {
                        channel: x,
                        guild: l,
                        position: C.position,
                        selected: a === C.id,
                        connected: d === C.id,
                        collapsed: C.isCollapsed || p.isCollapsed,
                        voiceStates: u[C.id] ?? [],
                        speakerVoiceStates: A[C.id] ?? [],
                        disableManageChannels: h,
                        isFavoriteCategory: E,
                        isSuggestedSection: t === c.recentsSectionNumber,
                    },
                    _,
                );
            case B.rbe.GUILD_VOICE:
                return (0, s.jsx)(
                    rf,
                    {
                        channel: x,
                        guild: l,
                        position: C.position,
                        selected: a === C.id,
                        connected: d === C.id,
                        collapsed: C.isCollapsed || p.isCollapsed,
                        voiceStates: u[C.id],
                        subtitle: C.subtitle,
                        disableManageChannels: h,
                        showTutorial: C.isFirstVoiceChannel,
                        isFavoriteCategory: E,
                        withGuildIcon: g,
                        isSuggestedSection: t === c.recentsSectionNumber,
                    },
                    _,
                );
            case B.rbe.GUILD_STORE:
                return (0, s.jsx)(iH, { channel: x, guild: l, position: C.position, selected: a === C.id }, _);
            case B.rbe.GUILD_CATEGORY:
                if (t !== c.voiceChannelsSectionNumber) return null;
                return (0, s.jsx)(nm, { channel: x }, `readonly-${x.id}`);
            case B.rbe.PUBLIC_THREAD:
            case B.rbe.PRIVATE_THREAD:
            case B.rbe.ANNOUNCEMENT_THREAD:
                return (0, s.jsx)(
                    sh,
                    {
                        channel: x,
                        guild: l,
                        position: C.position,
                        selected: a === C.id,
                        muted: C.isMuted,
                        subtitle: C.subtitle,
                        disableManageChannels: h,
                        canBeNewChannel: !1,
                        isFavoriteCategory: !1,
                        forceTopLevelThread: !0,
                    },
                    _,
                );
            default:
                return null;
        }
    };
    renderSectionFooter = (e) => {
        let { section: t } = e,
            {
                guildChannels: n,
                guildChannelsVersion: l,
                voiceStates: i,
                selectedChannelId: r,
                selectedVoiceChannelId: a,
                optInEnabled: o,
                guildId: d,
            } = this.props;
        return (0, s.jsx)(
            nG,
            {
                guildId: d,
                guildChannels: n,
                guildChannelsVersion: l,
                sectionIndex: t,
                voiceStates: i,
                selectedChannelId: r,
                selectedVoiceChannelId: a,
                optInEnabled: o,
            },
            (function (e, t, n) {
                if (e === t.voiceChannelsSectionNumber) return "voice-channels-button";
                let { hasDivider: l, canHaveVoiceSummary: i } = nI(t, n, e);
                return `section-footer-${e}${l ? "-divider" : ""}${i ? "-voice-summary" : ""}`;
            })(t, n, o),
        );
    };
    renderTopUnread() {
        let { topMention: e, bottomUnread: t, bottomMention: n, isUnreadVisible: l } = this.state,
            { guildId: i, guildChannels: r, guildChannelsVersion: a } = this.props;
        return (0, s.jsx)("div", {
            className: nC.Eo,
            children: (0, s.jsx)(sB, {
                ref: this.unreadTopRef,
                textUnread: ep.intl.string(ep.t.FCRiT3),
                textMention: ep.intl.string(ep.t["8zH0LJ"]),
                hide: null == e && (l || null != t || null != n),
                className: nC.Vq,
                barClassName: nC.bu,
                guildId: i,
                guildChannels: r,
                guildChannelsVersion: a,
                isVisible: this.isChannelVisible,
                onJumpTo: this.jumpToChannelWithMentionsAndUnreads,
                onCalculate: this.handleUnreadCalculate,
            }),
        });
    }
    renderBottomUnread() {
        let { guildId: e, guildChannels: t, guildChannelsVersion: n } = this.props,
            { bottomMention: l, isUnreadVisible: i } = this.state;
        return (0, s.jsx)(sB, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: ep.intl.string(ep.t.FCRiT3),
            textMention: ep.intl.string(ep.t["8zH0LJ"]),
            hide: null == l && i,
            className: nC.di,
            barClassName: nC.bu,
            guildId: e,
            guildChannels: t,
            guildChannelsVersion: n,
            isVisible: this.isChannelVisible,
            onJumpTo: this.jumpToChannelWithMentionsAndUnreads,
            onCalculate: this.handleUnreadCalculate,
        });
    }
    getAnchorId = (e, t) => {
        let { guildChannels: n } = this.props;
        if (e !== tV.PU) {
            if (null == t)
                return e === tV.HP
                    ? "favorites-header"
                    : e === n.recentsSectionNumber
                      ? "recents-header"
                      : e === n.voiceChannelsSectionNumber
                        ? "voice-channels"
                        : e === tV.bK
                          ? "uncategorized-header"
                          : n.getNamedCategoryFromSection(e)?.id;
            if (!n.isPlaceholderRow(e, t)) return n.getChannelFromSectionRow(e, t)?.channel?.id;
        }
    };
    renderList() {
        let { guildChannels: e, guildBanner: t, selectedGuildId: n, density: l } = this.props,
            i = {};
        (0, j.ai)(n) && (i["data-favorites"] = !0);
        let { ref: r, ...a } = this.context,
            o = 0;
        null != t && (o = 84);
        let d = "compact" === l ? 8 : 12;
        return (0, s.jsx)(m.sk, {
            children: (t) =>
                (0, s.jsx)(
                    g.OZ,
                    {
                        ref: this.setListRef,
                        className: nC.XG,
                        fade: !0,
                        sectionHeight: this.getSectionHeight,
                        footerHeight: this.getSectionFooterHeight,
                        rowHeight: this.getRowHeight,
                        paddingTop: o,
                        paddingBottom: d,
                        renderSection: this.renderSection,
                        renderFooter: this.renderSectionFooter,
                        renderRow: this.renderRow,
                        onScroll: this.handleListScroll,
                        onResize: this.handleResize,
                        onContentResize: this.handleResize,
                        sections: e.getSections(!0),
                        innerAriaLabel: ep.intl.string(ep.t.OGiMXJ),
                        innerTag: "ul",
                        getAnchorId: this.getAnchorId,
                        ...a,
                        ...t,
                        ...i,
                    },
                    "guild-channels",
                ),
        });
    }
    testShouldSkipTutorial = () => {
        if (!tD.A.shouldShow("voice-conversations")) return;
        let { guildChannels: e } = this.props,
            t = e.getFirstVoiceChannel();
        if (null == t) return void tU.X8("voice-conversations");
        let n = this._list;
        if (null != n)
            for (let { section: e, row: l } of this.getSectionRowsFromChannel(t.id))
                n.isItemVisible(e, l) || tU.X8("voice-conversations");
    };
    render() {
        let { guildChannels: e, guildChannelsVersion: t, showNewUnreadsBar: n } = this.props;
        return (0, s.jsx)(et.V0, {
            children: (l) =>
                (0, s.jsx)(f.F, {
                    component: (0, s.jsx)(p.A, {
                        children: (0, s.jsx)(f.H, { id: l, children: ep.intl.string(ep.t.OGiMXJ) }),
                    }),
                    children: n
                        ? (0, s.jsxs)(r.Fragment, {
                              children: [
                                  (0, s.jsx)("div", {
                                      className: nC.Eo,
                                      children: (0, s.jsx)(sO, {
                                          position: "top",
                                          guildChannels: e,
                                          guildChannelsVersion: t,
                                          jumpToVoiceChannels: this.jumpToVoiceChannels,
                                          jumpToChannel: this.jumpToChannel,
                                      }),
                                  }),
                                  this.renderList(),
                                  (0, s.jsx)(sO, {
                                      position: "bottom",
                                      guildChannels: e,
                                      guildChannelsVersion: t,
                                      jumpToVoiceChannels: this.jumpToVoiceChannels,
                                      jumpToChannel: this.jumpToChannel,
                                  }),
                              ],
                          })
                        : (0, s.jsxs)(r.Fragment, {
                              children: [this.renderTopUnread(), this.renderList(), this.renderBottomUnread()],
                          }),
                }),
        });
    }
}
let rE = (e) => {
    let { guildId: t, selectedChannelId: n, selectedVoiceChannelId: l } = e,
        i = (0, u.bG)([$.Ay], () => $.Ay.keyboardModeEnabled),
        { analyticsLocations: a } = (0, ee.Ay)(Q.A.GUILD_CHANNEL_LIST),
        o = (0, u.bG)([L.A], () => L.A.getChannel(n)),
        h = (0, u.bG)([L.A], () => L.A.getChannel(l)),
        A = (0, u.bG)([P.A], () => P.A.getGuildId()),
        m = (0, y.jN)(t),
        g = r.useRef(null),
        f = r.useCallback((e, t) => {
            let n = g.current;
            null != n &&
                (B.Ut1.test(t) || (0, eL.jq)(t)
                    ? n.scrollToChannel(t, !1, 16, () => {
                          requestAnimationFrame(() => document.querySelector(e)?.focus());
                      })
                    : document.querySelector(e)?.focus());
        }, []),
        p = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = g.current;
                    if (null == t) return e();
                    t.scrollTo(0, () => requestAnimationFrame(() => e()));
                }),
            [],
        ),
        C = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = g.current;
                    if (null == t) return e();
                    t.scrollTo(Number.MAX_SAFE_INTEGER, () => requestAnimationFrame(() => e()));
                }),
            [],
        ),
        E = (0, c.Ay)({
            id: "channels",
            defaultFocused: n ?? void 0,
            isEnabled: i,
            setFocus: f,
            scrollToStart: p,
            scrollToEnd: C,
        }),
        _ = E.setFocus;
    r.useEffect(() => {
        null != n && _(n);
    }, [n, _]);
    let N = (function (e) {
        let [t] = (0, u.bG)(
            [tM.A, L.A, tG.A],
            () => {
                let t;
                return [
                    (t = (0, j.ai)(e)
                        ? ty.default
                              .keys(tG.A.getFavoriteChannels())
                              .map((e) => L.A.getChannel(e))
                              .filter(tj.Vq)
                              .filter((e) => e.isGuildStageVoice())
                        : tM.A.getChannels(e)).reduce((e, t) => {
                        let n = tM.A.getMutableParticipants(t.id, tL.ip.SPEAKER);
                        return (e[t.id] = n.filter((e) => e.type === tL.wY.VOICE).map(tT)), e;
                    }, {}),
                    t.reduce((e, t) => {
                        let { id: n } = t;
                        return e + tM.A.getParticipantsVersion(n);
                    }, 0),
                ];
            },
            [e],
            tv.D,
        );
        return t;
    })(t);
    return (0, s.jsx)(ee.f5, {
        value: a,
        children: (0, s.jsx)(x.A, {
            section: B.JJy.GUILD_CHANNEL_LIST,
            children: (0, s.jsxs)(d.hD, {
                navigator: E,
                children: [
                    (0, s.jsx)(tO.q, { containerRef: E.containerProps.ref, itemType: X }),
                    (0, s.jsx)(rC, {
                        ...e,
                        listNavigator: E,
                        ref: g,
                        selectedChannel: o,
                        selectedVoiceChannel: h,
                        stageChannelSpeakerVoiceStates: N,
                        selectedGuildId: A,
                        optInEnabled: m,
                    }),
                ],
            }),
        }),
    });
};
function rx(e) {
    let { guildChannels: t, shouldShowEmptyState: n } = (0, en.D)(),
        { density: l } = (0, C.wR)(),
        { shouldShowUpsell: i } = (0, el.ft)();
    return n
        ? (0, s.jsx)("div", { className: nC.XG, children: (0, s.jsx)(eN, { variant: "empty" }) })
        : (0, s.jsxs)(s.Fragment, {
              children: [
                  i ? (0, s.jsx)(eN, { variant: "upsell" }) : null,
                  (0, s.jsx)(rE, { ...e, guildChannels: t, guildChannelsVersion: 0, withGuildIcon: !1, density: l }),
              ],
          });
}
function r_(e) {
    let t = (function (e) {
            var t;
            let n,
                l,
                i =
                    ((t = e.id),
                    (n = (0, t$.A)(t)),
                    (l = (0, tQ.Ay)(t)),
                    !(0, u.bG)([D.A], () => {
                        if (null == t) return !1;
                        let e = D.A.getGuild(t);
                        return e?.features.has(B.GuildFeatures.HUB) ?? !1;
                    }, [t]) &&
                        (n || l.length > 0)),
                s = (0, tz.W)(e.id),
                r = (0, tJ.vz)(e.id),
                a = (0, tk.r)(e),
                o = (0, t3.jz)(e),
                d = (0, tq.d)(e.id),
                c = (0, tB.bG)([tY.h], () => tY.h.getNewMemberActions(e.id), [e.id]),
                h = (0, t9.QI)(e, "useGuildActionRows"),
                A = (0, tZ.A)(e.id),
                m = (0, tX.jY)(e.id),
                g = (0, tW.fw)(e.id),
                f = (0, t0.Uq)(e, "useGuildActionRows"),
                p = [],
                C = e.features.has(B.GuildFeatures.HUB),
                E = e.features.has(B.GuildFeatures.COMMUNITY),
                x = e.features.has(B.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
                _ = (0, tC.A)(e.id);
            t2.useConfig({ location: "useGuildActionRows" }).enabled;
            let N = tx(e),
                S = (0, t1.bW)(e.id, "useGuildActionRows"),
                I = (0, tF.C$)(e.id, "useGuildActionRows"),
                b = e.features.has(B.GuildFeatures.GAME_SERVERS),
                G = (0, tK.N)("useGuildActionRows"),
                [R] = (0, ev.kn)(I && G && !b ? [eS.M.EMPTY_GAME_SERVER_TAB] : [], void 0, !0);
            return (
                f && p.push(t7.n.GUILD_SPACE),
                C && p.push(t7.n.GUILD_HUB_HEADER_OPTIONS),
                !m && d && A && null != c && c.length > 0
                    ? p.push(t7.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
                    : e.premiumProgressBarEnabled && N > 0 && p.push(t7.n.GUILD_PREMIUM_PROGRESS_BAR),
                !C && d && p.push(t7.n.GUILD_HOME),
                i && p.push(t7.n.GUILD_SCHEDULED_EVENTS),
                !C && E && p.push(t7.n.CHANNELS_AND_ROLES),
                r && p.push(t7.n.GUILD_ROLE_SUBSCRIPTIONS),
                a && p.push(t7.n.GUILD_SHOP),
                o && p.push(t7.n.GUILD_GAME_SHOP),
                ((g && (E || x)) || (s && e.features.has(B.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL))) &&
                    p.push(t7.n.GUILD_MOD_DASH_MEMBER_SAFETY),
                _ && p.push(t7.n.GUILD_BOOSTS),
                S && p.push(t7.n.GUILD_OFFICIAL_MESSAGES),
                I && (b ? p.push(t7.n.GAME_SERVERS) : null != R && p.push(t7.n.GAME_SERVERS_EMPTY)),
                h && p.push(t7.n.GUILD_VIBEGRATIONS),
                p
            );
        })(e.guild),
        n = (0, u.cf)([tw.A], () => tw.A.getGuild(e.guildId, { guildActionRows: t })),
        { density: l } = (0, C.wR)();
    return (0, s.jsx)(rE, { ...e, ...n, density: l });
}
