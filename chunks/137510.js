n.d(t, { B: () => ru, T: () => rc }), n(321073);
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
    g = n(312138),
    m = n(475825),
    f = n(707554),
    p = n(140735),
    C = n(38021),
    E = n(951001),
    x = n(820284),
    N = n(629675),
    _ = n(263619),
    S = n(192308),
    I = n(66834),
    b = n(999903),
    G = n(544169),
    R = n(422258),
    v = n(5180),
    j = n(770376),
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
    if (!(0, v.ai)(e)) return L.A.getChannel(t);
    let n = U.Ay.getChannels(e),
        l =
            n[U.I6].find((e) => e.channel.id === t) ??
            n[U.vM].find((e) => e.channel.id === t) ??
            n[B.rbe.GUILD_CATEGORY].find((e) => e.channel.id === t);
    return l?.channel;
}
function J(e, t) {
    if (null != e.parent_id) {
        let t = L.A.getChannel(e.parent_id);
        if (null != t) return O.A.can(B.xBc.MANAGE_CHANNELS, t);
    }
    return O.A.can(B.xBc.MANAGE_CHANNELS, t);
}
function Z(e) {
    return (0, N.T)(
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
                    if ((0, v.ai)(l)) return void (0, R.zN)(c);
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
                if ((0, v.ai)(P.A.getGuildId())) return !0;
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
        (0, _.I)(
            X,
            {
                canDrag(e) {
                    let { channel: t } = e;
                    if ((0, v.ai)(P.A.getGuildId())) return !0;
                    let l = D.A.getGuild(t.getGuildId());
                    return (
                        null != l &&
                        ((0, y.WW)(l.id) && J(t, l)
                            ? ((0, j.A)() &&
                                  (0, S.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([n.e("57729"), n.e("24848")]).then(
                                          n.bind(n, 354643),
                                      );
                                      return (t) => (0, s.jsx)(e, { ...t });
                                  }),
                              !1)
                            : V.Ay.isFavorite(l.id, t.id) && J(t, l)
                              ? ((0, S.openModalLazy)(async () => {
                                    let { default: e } = await n.e("80545").then(n.bind(n, 933752));
                                    return (n) => (0, s.jsx)(e, { ...n, guildId: l.id, channelId: t.id });
                                }),
                                !1)
                              : J(t, l))
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
                                ? !!(0, v.ai)(r) ||
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
    el = n(331322),
    ei = n(297264),
    es = n(834730),
    er = n(276293),
    ea = n(983851),
    eo = n(534890),
    ed = n(449817),
    ec = n(375708),
    eu = n(784739);
function eh() {
    return (0, s.jsxs)(el.B, {
        gap: 8,
        children: [
            (0, s.jsxs)(el.B, {
                gap: 8,
                padding: { top: 16, right: 16, bottom: 0, left: 16 },
                fullWidth: !1,
                children: [
                    (0, s.jsx)(ei.D, {
                        variant: "heading-md/semibold",
                        children: ec.intl.string(ed.default["1n0TGE"]),
                    }),
                    (0, s.jsx)(es.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: ec.intl.string(ed.default.Wwzrs9),
                    }),
                ],
            }),
            (0, s.jsx)("div", { className: eu.yF }),
            (0, s.jsxs)("div", {
                className: eu.v0,
                "aria-hidden": "true",
                children: [
                    (0, s.jsxs)("div", {
                        className: eu._f,
                        children: [
                            (0, s.jsx)(er.N, { size: "xs", color: h.A.colors.ICON_MUTED }),
                            (0, s.jsx)("div", { className: eu.D_ }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: eu._f,
                        children: [
                            (0, s.jsx)(ea.H, { size: "xs", color: h.A.colors.ICON_MUTED }),
                            (0, s.jsx)("div", { className: eu.VG }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: eu._f,
                        children: [
                            (0, s.jsx)(eo.o, { size: "xs", color: h.A.colors.ICON_MUTED }),
                            (0, s.jsx)("div", { className: eu.D_ }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var eA = n(554146),
    eg = n(866665),
    em = n(939249),
    ef = n(789645),
    ep = n(812993),
    eC = n(687966),
    eE = n(131607),
    ex = n(652793),
    eN = n(976860),
    e_ = n(746080),
    eS = n(49999),
    eI = n(275695),
    eb = n(93790),
    eG = n(180961);
let eR = r.memo(function (e) {
    let { guildId: t, selected: l } = e,
        [i, a] = (0, eE.ww)([eA.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        o = i === eA.M.GAME_SERVER_HOSTING_NEW_BADGE,
        d = r.useCallback(() => {
            a(eS.i.USER_DISMISS), (0, eN.pX)(B.BVt.CHANNEL(t, e_.VV.GAME_SERVERS));
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
            className: eb.c,
            children: [
                (0, s.jsx)("div", {
                    className: eG.Xs,
                    children: (0, s.jsx)(eg.m, {
                        text: ec.intl.string(ec.t.fgq1gs),
                        position: "top",
                        children: (0, s.jsx)(em.D, {
                            onClick: c,
                            "aria-label": ec.intl.string(ec.t.fgq1gs),
                            children: (0, s.jsx)(ef.P, { size: "xs", color: "currentColor", className: eG.gE }),
                        }),
                    }),
                }),
                o &&
                    (0, s.jsx)("div", {
                        className: eG.yW,
                        children: (0, s.jsx)(ep.Lp, {
                            disableColor: !0,
                            text: ec.intl.string(ec.t.y2b7CA),
                            className: eb.q,
                        }),
                    }),
            ],
        });
    return (0, s.jsx)(ex.G, {
        className: eG.Ki,
        id: `game-server-empty-${t}`,
        renderIcon: (e) => (0, s.jsx)(eC._, { size: "md", className: e, color: "currentColor" }),
        text: ec.intl.string(eI.default.vCzwM7),
        selected: l,
        onClick: d,
        trailing: u,
    });
});
var ev = n(361158),
    ej = n(270533),
    ey = n(186111),
    eM = n(949019);
let eL = r.memo(function (e) {
    let { guildId: t, selected: n } = e,
        l = (0, S.useHasAnyModalOpen)(),
        i = (0, u.bG)([ey.A], () => ey.A.hasLayers()),
        a = (0, ev.xr)((e) => e.fullScreenLayers.length > 0),
        [o, d] = (0, eE.ww)([eA.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        c = o === eA.M.GAME_SERVER_HOSTING_NEW_BADGE,
        [h, A] = (0, eE.ww)(l || i || a || !c ? [] : [eA.M.GAME_SERVER_HOSTING_NEW_COACHMARK], t),
        g = r.useCallback(
            (e) => {
                d(e), A(e);
            },
            [d, A],
        ),
        m = r.useCallback(() => {
            g(eS.i.USER_DISMISS), (0, eN.pX)(B.BVt.CHANNEL(t, e_.VV.GAME_SERVERS));
        }, [t, g]),
        f = r.useRef(null),
        p = h === eA.M.GAME_SERVER_HOSTING_NEW_COACHMARK,
        C = r.useCallback(() => (0, s.jsx)(ej.mn, { channelRowRef: f, guildId: t, markAsDismissed: g }), [t, g]);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(ex.G, {
                ref: f,
                id: `game-server-${t}`,
                renderIcon: (e) => (0, s.jsx)(eC._, { size: "md", className: e, color: "currentColor" }),
                text: ec.intl.string(eI.default.vCzwM7),
                selected: n,
                onClick: m,
                trailing: c
                    ? (0, s.jsx)(ep.Lp, { disableColor: !0, text: ec.intl.string(ec.t.y2b7CA), className: eM.q })
                    : null,
            }),
            p && C(),
        ],
    });
});
var eT = n(177953),
    eU = n(533550),
    eD = n(624458),
    eO = n(844944),
    eP = n(513461),
    eV = n(663997),
    ew = n(221950);
function eH(e) {
    let { guild: t, selected: n } = e,
        l = (0, u.bG)([O.A], () => O.A.can(B.xBc.KICK_MEMBERS, t)),
        i = (0, u.bG)([eO.A], () => eO.A.getSubmittedGuildJoinRequestTotal(t.id)),
        a = l ? (i ?? 0) : 0;
    r.useEffect(() => {
        l &&
            t.features.has(B.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
            t.features.has(B.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            eD.A.fetchGuildJoinRequests({ guildId: t.id, status: eP.B5.SUBMITTED, limit: eV.L });
    }, [l, t]);
    let o = r.useCallback(() => {
            (0, ew.aZ)(t.id);
        }, [t.id]),
        d = (0, eU.q8)(t.id, eA.M.MEMBERS_LAUNCH_UPSELL);
    return (0, s.jsx)("div", {
        ref: d,
        children: (0, s.jsx)(ex.G, {
            id: `members-${t.id}`,
            renderIcon: (e) => (0, s.jsx)(eT.n, { size: "md", color: "currentColor", className: e }),
            text: ec.intl.string(ec.t.oclz3Z),
            selected: n,
            onClick: o,
            trailing: a > 0 ? (0, s.jsx)(ep.hV, { count: a }) : null,
        }),
    });
}
var eB = n(632015);
function ek(e) {
    let { guild: t, selected: n } = e;
    return (0, s.jsx)(ex.G, {
        id: `guild-space-tab-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(eB.f, { size: "md", color: "currentColor", className: e }),
        text: ec.intl.string(ec.t["04IVMq"]),
        selected: n,
        onClick: function () {
            (0, eN.pX)(B.BVt.CHANNEL(t.id, e_.VV.GUILD_SPACE));
        },
    });
}
var eF = n(581007),
    eK = n(522435),
    ez = n(285406),
    eW = n(582904),
    eY = n(419534),
    eX = n(503698),
    eq = n.n(eX),
    eJ = n(695366),
    eZ = n(104510),
    e$ = n(544048),
    eQ = n(868652),
    e0 = n(379229),
    e1 = n(482487),
    e2 = n(914732),
    e3 = n(828162),
    e9 = n(853513),
    e7 = n(689599);
function e5(e) {
    let { indicator: t } = e;
    if (null == t) return null;
    switch (t.type) {
        case e0.cD.WARNING:
            return (0, s.jsx)(eJ.E, { color: h.A.colors.STATUS_WARNING, size: "sm" });
        case e0.cD.UNREAD:
            return (0, s.jsx)(ep.hV, { count: t.count });
        default:
            return null;
    }
}
let e6 = { animation: { BEG: 0, END: 75 }, LOOP: { BEG: 76, END: 376 } },
    e8 = r.memo(function (e) {
        let { guildId: t, selected: l } = e,
            i = (0, e2.Ay)(t),
            { showNewBadgeOnRow: a, dismissNewBadgeIfShown: o } = (0, e1.A)(
                t,
                i?.indicator != null || i?.popout != null,
            ),
            d = r.useCallback(() => {
                o(),
                    (0, eQ.Zm)(t),
                    (0, e3.A)(t, Q.A.GUILD_POWERUPS_CHANNEL_LIST_ROW),
                    i?.popout?.markAsDismissed(eS.i.INDIRECT_ACTION);
            }, [t, o, i]),
            c = r.useRef(null),
            A = (0, S.useModalsStore)(S.hasAnyModalOpenSelector),
            g = (0, u.bG)([ey.A], () => ey.A.hasLayers()),
            m = (0, ev.xr)((e) => e.fullScreenLayers.length > 0),
            f = A || g || m,
            p = r.useCallback(() => {
                if (i?.popout == null || f) return null;
                switch (i?.popout?.type) {
                    case e0.o.LEVEL_REACHED:
                        return (0, s.jsx)(ej.HW, { guildId: t, channelRowRef: c, ...i.popout });
                    case e0.o.PERKS_AVAILABLE:
                        return (0, s.jsx)(ej.UB, { guildId: t, channelRowRef: c, ...i.popout });
                    case e0.o.PERKS_PURCHASABLE:
                        return (0, s.jsx)(ej.lw, { guildId: t, channelRowRef: c, ...i.popout });
                    case e0.o.NEW_PERK_AVAILABLE:
                        return (0, s.jsx)(ej.bo, { guildId: t, channelRowRef: c, ...i.popout });
                    case e0.o.BOOST_TO_UNLOCK:
                        return (0, s.jsx)(ej.Gw, { guildId: t, channelRowRef: c, ...i.popout });
                    case e0.o.EXPIRING_PERK:
                        return (0, s.jsx)(ej.Mr, { guildId: t, channelRowRef: c, ...i.popout });
                    case e0.o.GAME_SERVER_HOSTING_AVAILABLE:
                    case e0.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE:
                        return (0, s.jsx)(ej.jz, { guildId: t, channelRowRef: c, ...i.popout });
                    case e0.o.GAME_SERVER_NEW_GAMES:
                        return (0, s.jsx)(ej.YX, { guildId: t, channelRowRef: c, ...i.popout });
                    case e0.o.GAME_SERVER_PRICING_CHANGE:
                        return (0, s.jsx)(ej.Ns, { guildId: t, channelRowRef: c, ...i.popout });
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
                (0, s.jsx)(ex.G, {
                    ref: c,
                    className: e7.kL,
                    id: `skill-trees-${t}`,
                    renderIcon: (e) => (0, s.jsx)(eZ._, { size: "md", className: e, color: "currentColor" }),
                    background:
                        i?.popout != null &&
                        (0, s.jsx)("div", {
                            className: e7.Fi,
                            children: (0, s.jsx)(e$.t, {
                                nextScene: null == C ? "animation" : "LOOP",
                                className: e7.UU,
                                sceneSegments: e6,
                                importData: () => n.e("67807").then(n.t.bind(n, 217762, 19)),
                                onScenePlay: x,
                                rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                            }),
                        }),
                    text: (0, s.jsx)("span", {
                        className: eq()({ [e7.A7]: i?.showUnread === !0 }),
                        children: ec.intl.string(e9.default.yv3DJJ),
                    }),
                    selected: l,
                    onClick: d,
                    showUnread: i?.showUnread === !0,
                    trailing: a
                        ? (0, s.jsx)(ep.Lp, {
                              text: ec.intl.string(ec.t.y2b7CA),
                              color: h.A.colors.BACKGROUND_BRAND.css,
                          })
                        : (0, s.jsx)(e5, { indicator: i?.indicator }),
                }),
                p(),
            ],
        });
    });
var e4 = n(534740),
    te = n(717421),
    tt = n(442433),
    tn = n(230135),
    tl = n(228366);
let ti = {};
class ts extends u.Ay.PersistedStore {
    static displayName = "GuildBoostingProgressBarPersistedStore";
    static persistKey = "PremiumGuildProgressBarPersistedStore";
    initialize(e) {
        null != e && (ti = e);
    }
    getState() {
        return ti;
    }
    getCountForGuild(e) {
        return ti[e];
    }
}
let tr = new ts(tl.h, {
    APPLIED_GUILD_BOOST_COUNT_UPDATE: function (e) {
        let { guildId: t, premiumCount: n } = e;
        ti = { ...ti, [t]: n };
    },
    APPLIED_GUILD_BOOST_COUNT_RESET: function () {
        ti = {};
    },
});
var ta = n(147925),
    to = n(363487),
    td = n(568065);
function tc(e) {
    return (0, r.useMemo)(() => {
        if (null == e) return 0;
        let t = e?.features.has(B.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0 ? 0 : B.M2T[B.TVA.TIER_3],
            n = Object.values(td.sy),
            l = Object.values(td.YV);
        return (
            n.concat(l).forEach((n) => {
                null == n.includedInLevel && (n.isEnabled?.(e.id) ?? !0) && (t += n.boostPrice);
            }),
            t
        );
    }, [e]);
}
var tu = n(511636);
let th = r.forwardRef((e, t) => {
    let { appliedBoostCount: n, maxBoostCount: l, premiumSubscriberCount: i, className: a } = e,
        o = n >= l,
        d = Math.min((n / l) * 100, 100),
        c = `calc(${d}% - 4px)`,
        [u, h] = (0, te.z)(
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
            className: tu.hQ,
            children: [
                (0, s.jsx)("div", { className: eq()(tu.L$, a) }),
                (0, s.jsx)(e4.animated.div, { className: eq()(tu.qB, { [tu.mu]: d <= 5 }), style: u }),
                (0, s.jsxs)("div", {
                    className: tu.FS,
                    children: [
                        (0, s.jsxs)("div", {
                            className: tu.Ui,
                            children: [
                                (0, s.jsx)(es.E, {
                                    className: tu.Qq,
                                    variant: "text-xs/semibold",
                                    children: ec.intl.string(e9.default.NI6Ihe),
                                }),
                                i >= l &&
                                    (0, s.jsx)(es.E, {
                                        className: tu.Qq,
                                        variant: "text-xs/semibold",
                                        children: "\uD83C\uDF89",
                                    }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: tu.Ui,
                            children: [
                                (0, s.jsx)(es.E, {
                                    className: eq()(tu.Qq, tu.ue),
                                    variant: "text-xs/semibold",
                                    children: o
                                        ? ec.intl.formatToPlainString(e9.default["Ehpq+7"], { appliedBoostCount: n })
                                        : ec.intl.formatToPlainString(e9.default["/rbPDs"], {
                                              appliedBoostCount: n,
                                              maxBoostCount: l,
                                          }),
                                }),
                                (0, s.jsx)(ta.A, {
                                    width: 12,
                                    height: 12,
                                    direction: ta.A.Directions.RIGHT,
                                    className: eq()(tu.Qq, tu.ue),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
function tA(e) {
    let { guild: t, withMargin: l } = e,
        i = tc(t),
        a = (0, to.A)(t.id),
        o = r.useCallback(() => {
            (0, e3.A)(t.id, Q.A.GUILD_BOOSTING_SIDEBAR_DISPLAY);
        }, [t.id]),
        d = (0, u.bG)([tr], () => tr.getCountForGuild(t.id) ?? 0);
    r.useEffect(() => {
        d !== t.premiumSubscriberCount && (0, tn.u)(t.id, t.premiumSubscriberCount);
    }, [t.id, d, t.premiumSubscriberCount]);
    let c = r.useCallback(
        (e) => {
            a &&
                (0, tt.L3)(e, async () => {
                    let { default: e } = await n.e("71728").then(n.bind(n, 709843));
                    return (n) => (0, s.jsx)(e, { ...n, guild: t });
                });
        },
        [a, t],
    );
    return (0, s.jsx)(em.D, {
        "aria-label": void 0,
        role: "button",
        focusProps: { offset: { left: 10, right: 4 } },
        onClick: o,
        className: eq()(tu.kL, { [tu.aF]: l }),
        onContextMenu: c,
        children: (0, s.jsx)(th, {
            appliedBoostCount: d,
            maxBoostCount: i,
            premiumSubscriberCount: t.premiumSubscriberCount,
        }),
    });
}
function tg(e) {
    let { guild: t, withMargin: n } = e;
    return (0, s.jsx)(tA, { guild: t, withMargin: n });
}
th.displayName = "GuildPowerupsProgressBarUI";
var tm = n(455234),
    tf = n(181079),
    tp = n(607567),
    tC = n(403362),
    tE = n(996439),
    tx = n(935208),
    tN = n(63995),
    t_ = n(518769);
function tS(e) {
    let { voiceState: t, userNick: n, user: l } = e,
        i = (0, tp.hz)(t, n);
    return { user: l, voiceState: t, nick: n, comparator: i };
}
var tI = n(787541),
    tb = n(79858),
    tG = n(600761),
    tR = n(72314),
    tv = n(297469),
    tj = n(960755),
    ty = n(633965),
    tM = n(702841),
    tL = n(41200),
    tT = n(831617),
    tU = n(589603),
    tD = n(496767),
    tO = n(134413),
    tP = n(701785),
    tV = n(101611),
    tw = n(473529),
    tH = n(978165),
    tB = n(960253),
    tk = n(770666),
    tF = n(508654),
    tK = n(470452),
    tz = n(521427);
let tW = (0, n(945810).mj)({
    name: "2026-04-mobile-boost-progress-bar",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var tY = n(871123),
    tX = n(683180),
    tq = n(281405),
    tJ = n(3026),
    tZ = n(821609),
    t$ = n(499373),
    tQ = n(259678),
    t0 = n(847374),
    t1 = n(285796),
    t2 = n(914430),
    t3 = n(47167),
    t9 = n(485947),
    t7 = n(323932),
    t5 = n(551851),
    t6 = n(485596);
function t8(e) {
    e.stopPropagation();
}
function t4(e) {
    let { label: t, onClick: n, tabIndex: l } = e;
    return (0, s.jsx)(eg.m, {
        text: t,
        children: (0, s.jsx)(em.D, {
            className: eq()(t6.c9, t6.ih),
            onClick: n,
            tabIndex: l,
            role: "button",
            "aria-label": t,
            children: (0, s.jsx)(t$.T, { size: "xs", color: "currentColor", className: t6.hs }),
        }),
    });
}
let ne = Z(
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
                    children: g,
                } = e,
                m = (0, u.bG)([V.Ay], () => V.Ay.isChannelMuted(l.getGuildId(), l.id)),
                f = (0, u.bG)([M.A], () => M.A.isCollapsed(l.id)),
                p = (0, u.bG)([O.A], () => O.A.can(B.xBc.MANAGE_CHANNELS, l)),
                C = (0, t3.Ay)(l);
            t = null != h ? (c > h ? t6.mU : t6.TR) : t6.fx;
            let E = r.useCallback(() => {
                    f ? (0, t2.fh)(l.id) : (0, t2.Gv)(l.id);
                }, [l.id, f]),
                x = r.useCallback(
                    (e) => {
                        if ("null" !== l.id) {
                            let t = D.A.getGuild(l.getGuildId());
                            null != t &&
                                (0, tt.L3)(e, async () => {
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
                N = r.useCallback(() => {
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
                _ = (0, t7.C)(l);
            null == _ && p && !o && (_ = { label: ec.intl.string(ec.t["fUYU+j"]), perform: N });
            let { role: I, tabIndex: b, ...G } = (0, d.rm)(l.id),
                R = r.useRef(null),
                v = r.useRef(null),
                j = (0, s.jsxs)("li", {
                    className: t,
                    "data-dnd-name": C,
                    children: [
                        (0, s.jsx)(tQ.vN, {
                            focusTarget: R,
                            ringTarget: v,
                            offset: { left: 4, right: 4 },
                            children: (0, s.jsxs)("div", {
                                ref: v,
                                className: eq()(t6.Ki, t6.iE, { [t6.yZ]: f, [t6.SU]: m, [t6.vk]: !0 }),
                                onContextMenu: x,
                                children: [
                                    (0, s.jsxs)(em.D, {
                                        innerRef: R,
                                        className: t6.rb,
                                        tabIndex: b,
                                        ...G,
                                        onClick: E,
                                        "aria-label": ec.intl.formatToPlainString(ec.t.y5l3J2, { categoryName: C }),
                                        "aria-expanded": !f,
                                        focusProps: { enabled: !1 },
                                        children: [
                                            (0, s.jsx)(t9.A, {
                                                className: t6.UU,
                                                children: (0, s.jsx)(tJ.A, { children: C }),
                                            }),
                                            A
                                                ? null
                                                : (0, s.jsx)(t0.a, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: t6.Kk,
                                                  }),
                                        ],
                                    }),
                                    (0, s.jsx)("div", {
                                        onClick: t8,
                                        className: t6.Y_,
                                        children:
                                            null != _
                                                ? (0, s.jsx)(t4, { label: _.label, onClick: _.perform, tabIndex: b })
                                                : null,
                                    }),
                                ],
                            }),
                        }),
                        g,
                    ],
                });
            return null != a && null != i ? a(i(j)) : j;
        }),
    ),
    nt = r.memo(function (e) {
        let { name: t, onDismiss: n, className: l } = e;
        return (0, s.jsx)("li", {
            className: eq()(l, t6.fx),
            children: (0, s.jsxs)("div", {
                className: eq()(t6.Ki, t6._V),
                children: [
                    (0, s.jsx)("div", {
                        className: t6.rb,
                        children: (0, s.jsx)(t9.A, { className: t6.UU, children: (0, s.jsx)(tJ.A, { children: t }) }),
                    }),
                    null != n
                        ? (0, s.jsx)(eg.m, {
                              asContainer: !0,
                              text: ec.intl.string(ec.t["5qNmsU"]),
                              children: (0, s.jsx)(em.D, {
                                  className: t6.r,
                                  onClick: n,
                                  children: (0, s.jsx)(t1.a, { size: "md", color: "currentColor", className: t6.X8 }),
                              }),
                          })
                        : null,
                ],
            }),
        });
    }),
    nn = r.memo(function (e) {
        let { category: t } = e,
            n = (0, u.bG)([t5.A], () => t5.A.isVoiceCategoryCollapsed(t.guild.id)),
            l = r.useCallback(() => {
                var e, l;
                n
                    ? ((e = t.guild.id), tl.h.dispatch({ type: "VOICE_CATEGORY_EXPAND", guildId: e, expand: !0 }))
                    : ((l = t.guild.id), tl.h.dispatch({ type: "VOICE_CATEGORY_COLLAPSE", guildId: l, expand: !1 }));
            }, [t.guild.id, n]);
        return (0, s.jsx)("div", {
            className: t6.oA,
            children: (0, s.jsx)(tZ.$, {
                variant: "secondary",
                fullWidth: !0,
                onClick: l,
                icon: ea.H,
                text: n ? ec.intl.string(ec.t["/eB9Bg"]) : ec.intl.string(ec.t.Q2gPWl),
            }),
        });
    }),
    nl = r.memo(function (e) {
        let { category: t, channel: n } = e,
            l = (0, u.bG)([t5.A], () => t5.A.isVoiceCategoryCollapsed(t.guild.id));
        return l || null == n || n.record.type === B.rbe.GUILD_CATEGORY
            ? l
                ? (0, s.jsx)("li", {
                      className: t6.fx,
                      children: (0, s.jsx)("div", {
                          className: eq()(t6.Ki, t6._V),
                          children: (0, s.jsx)(t9.A, {
                              className: t6.UU,
                              children: (0, s.jsx)(tJ.A, { children: ec.intl.string(ec.t["V/u9Dy"]) }),
                          }),
                      }),
                  })
                : null
            : (0, s.jsx)("div", { style: { height: 16 } });
    }),
    ni = r.memo(function (e) {
        let { channel: t } = e,
            n = (0, t3.Ay)(t);
        return (0, s.jsx)("li", {
            className: t6.fx,
            children: (0, s.jsx)("div", {
                className: eq()(t6.Ki, t6._V),
                children: (0, s.jsx)(t9.A, { className: t6.UU, children: (0, s.jsx)(tJ.A, { children: n }) }),
            }),
        });
    });
var ns = n(728321),
    nr = n(244083);
let na = { origin: { x: -36, y: 7 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } };
var no = n(808240);
let nd = r.memo(function (e) {
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
            null != a && i.includes(a) && (t = (0, eY.xb)(l)), (0, eY.DD)(n.id, i, t);
        }, [n.id, a, l, i]),
        { density: c } = (0, C.wR)(),
        u = "compact" === c ? 8 : 12;
    switch (t) {
        case tv.PU:
            return (0, s.jsx)("div", { style: { height: u } });
        case tv.bK:
            if (n.features.has(B.GuildFeatures.HUB)) return null;
            return (0, s.jsx)("div", { style: { height: u } });
        case tv.HP:
            return (0, s.jsx)(nt, { name: ec.intl.string(ec.t.mlPMCy) });
        case l.recentsSectionNumber:
            return (0, s.jsx)(nt, { name: ec.intl.string(ec.t.gKcrqM), onDismiss: d });
        case l.voiceChannelsSectionNumber: {
            let e = l.getCategoryFromSection(l.voiceChannelsSectionNumber);
            if (null == e || e.isEmpty()) return null;
            let n = l.getChannelFromSectionRow(t, 0)?.channel;
            return (0, s.jsxs)(r.Fragment, {
                children: [(0, s.jsx)("div", { className: no.ts }), (0, s.jsx)(nl, { category: e, channel: n })],
            });
        }
        case tv.TF: {
            let e = l.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, s.jsx)(ne, {
                channel: e.record,
                position: e.position,
                disableManageChannels: o,
                children: (0, s.jsx)(ns.A, {
                    inlineSpecs: na,
                    arrowAlignment: nr.oN.TOP,
                    tutorialId: "organize-by-topic",
                    position: "right",
                }),
            });
        }
        default: {
            let e = l.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, s.jsx)(ne, { channel: e.record, position: e.position, disableManageChannels: o });
        }
    }
});
var nc = n(104171),
    nu = n(186369),
    nh = n(970812),
    nA = n(871237);
function ng(e, t, n) {
    return {
        hasDivider:
            !(function (e, t) {
                if (t === tv.PU) {
                    let t = e.getGuildActionSection().getRows();
                    return (
                        (1 === t.length && t[0] === tq.n.GUILD_PREMIUM_PROGRESS_BAR) ||
                        e.getGuildActionSection().isEmpty()
                    );
                }
                return 0 === e.getSections(!1)[t];
            })(e, n) &&
            (n === tv.PU ||
                ((0, v.ai)(e.id)
                    ? n !== e.getSections(!1).length - 1
                    : n === tv.HP ||
                      (!!t && n !== tv.bK && (n === e.recentsSectionNumber || (e.voiceChannelsSectionNumber, !1))))),
        canHaveVoiceSummary:
            n !== tv.PU &&
            n !== tv.HP &&
            n !== tv.bK &&
            n !== e.recentsSectionNumber &&
            n !== e.voiceChannelsSectionNumber,
    };
}
let nm = r.memo(function (e) {
        let { guildChannels: t, guildChannelsVersion: n } = e,
            l = r.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
        return null == l ? null : (0, s.jsx)(nn, { category: l });
    }),
    nf = r.memo(function (e) {
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
            { hasDivider: h, canHaveVoiceSummary: A } = r.useMemo(() => ng(n, c, t), [n, c, t, l]),
            g = r.useMemo(() => (t === tv.PU ? null : n.getCategoryFromSection(t)), [n, t, l]),
            m = (0, y.jN)(a),
            { enableWaveformIcon: f } = (0, nu.b)(a, "ChannelListSectionFooter"),
            p = (0, u.yK)([V.Ay], () => {
                if (null == g || !g.isCollapsed || !A) return [];
                let e = g.getChannelRecords(),
                    t = [];
                for (let n of e) {
                    if (!n.isGuildVocal()) continue;
                    let e = V.Ay.isChannelOrParentOptedIn(a, n.id);
                    (!m || e) && t.push(n);
                }
                return t;
            }, [g, A, a, m]),
            C = r.useMemo(
                () => (0, nA.fK)({ channels: p, selectedChannelId: o, selectedVoiceChannelId: d, voiceStates: i }),
                [p, o, d, i],
            );
        if (t === n.voiceChannelsSectionNumber) return (0, s.jsx)(nm, { guildChannels: n, guildChannelsVersion: l });
        let E = h ? (0, s.jsx)("div", { className: no.ts }) : null;
        return A && 0 !== C.length
            ? (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)("div", {
                          className: no.qz,
                          children: (0, s.jsx)(nc.Ay, {
                              renderIcon: !0,
                              users: C,
                              max: 8,
                              showUserPopout: !0,
                              guildId: a,
                              renderLeadingIcon: f
                                  ? (e) => (0, s.jsx)(nh.A, { color: "currentColor", className: eq()(e, eG.Gj) })
                                  : void 0,
                          }),
                      }),
                      E,
                  ],
              })
            : E;
    });
var np = n(625903),
    nC = n(283973),
    nE = n(933832),
    nx = n(435183),
    nN = n(698441),
    n_ = n(855687),
    nS = n(816662),
    nI = n(446600),
    nb = n(616356);
function nG(e, t, n) {
    return null != t && !!t && !k(n, e.type);
}
function nR(e, t) {
    return null == t ? eG.fx : e > t ? eG.mU : eG.TR;
}
function nv(e) {
    let { channel: t, disableManageChannels: n, tabIndex: l, forceShowButtons: i, hasChannelInfo: r = !1 } = e;
    return (0, u.bG)(
        [O.A, P.A],
        () =>
            n ||
            (0, v.ai)(P.A.getGuildId()) ||
            (!O.A.can(B.xBc.MANAGE_CHANNELS, t) &&
                !O.A.can(B.xBc.MANAGE_ROLES, t) &&
                !O.A.can(B.xBc.MANAGE_WEBHOOKS, t)) ||
            ((0, w.tr)(t.type) && !O.A.can(B.xBc.VIEW_CHANNEL, t)) ||
            (t.isGuildVocal() && !O.A.can(B.xBc.CONNECT, t)) ||
            !w.bk.has(t.type) ||
            t.isModeratorReportChannel(),
    )
        ? null
        : (0, s.jsx)(eg.m, {
              asContainer: !0,
              text: ec.intl.string(ec.t["3gUsJb"]),
              children: (0, s.jsx)(em.D, {
                  className: eq()(eG.Xs, i ? eG.Tf : void 0, r ? eG.bw : eG.UI),
                  onClick: function () {
                      nx.Ay.open(t.id);
                  },
                  tabIndex: l,
                  "aria-label": ec.intl.string(ec.t["3gUsJb"]),
                  children: (0, s.jsx)(np.Z, { size: "xs", color: "currentColor", className: eG.gE }),
              }),
          });
}
function nj(e) {
    let {
            channel: t,
            isDefaultChannel: l = !1,
            locked: i,
            tabIndex: a,
            forceShowButtons: o,
            hasChannelInfo: d = !1,
        } = e,
        c = (0, u.bG)([D.A], () => D.A.getGuild(t.getGuildId())),
        h = (0, u.bG)([nI.A], () => nI.A.getStageInstanceByChannel(t.id), [t.id]),
        A = (0, u.bG)([nN.Ay], () => nN.Ay.getActiveEventByChannel(t.id), [t.id]),
        g = (0, u.bG)([O.A], () => (0, n_.K)(O.A, c, t, h)),
        m = (0, u.bG)([], () =>
            t?.type === B.rbe.GUILD_VOICE ? ec.intl.string(ec.t["EE+P0H"]) : ec.intl.string(ec.t["0jeAXt"]),
        ),
        f = r.useRef(null);
    if (i || !g || t.isModeratorReportChannel() || t.isThread()) return null;
    let p = (0, s.jsx)(nC.R, { size: "xs", className: eG.gE, "aria-hidden": !0, color: "currentColor" });
    return (
        l &&
            (p = (0, s.jsx)(ns.A, {
                childRef: f,
                tutorialId: "instant-invite",
                position: "left",
                children: (0, s.jsx)("div", { ref: f, children: p }),
            })),
        (0, s.jsx)(eg.m, {
            asContainer: !0,
            text: m,
            children: (0, s.jsx)(em.D, {
                className: eq()(eG.Xs, o ? eG.Tf : void 0, d ? eG.bw : eG.UI),
                onClick: function () {
                    if (null != c) {
                        let e = nb.A.getAllActiveStreams().filter(
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
                "aria-label": m,
                children: p,
            }),
        })
    );
}
function ny(e) {
    let { channel: t } = e;
    return (0, s.jsx)(eg.m, {
        asContainer: !0,
        text: ec.intl.string(ec.t["ROh4T+"]),
        children: (0, s.jsx)(em.D, {
            className: eG.Xs,
            onClick: function () {
                (0, nS.Ol)(t.guild_id, t.id);
            },
            "aria-label": ec.intl.string(ec.t["ROh4T+"]),
            children: (0, s.jsx)(ef.P, { size: "xs", color: "currentColor", className: eG.gE }),
        }),
    });
}
function nM(e) {
    let { channel: t } = e;
    return (0, s.jsx)(eg.m, {
        asContainer: !0,
        text: ec.intl.string(ec.t["N2c/Un"]),
        children: (0, s.jsx)(em.D, {
            className: eG.Xs,
            onClick: function () {
                (0, nS.jA)(t.guild_id, t.id, !0, { section: B.JJy.CHANNEL_LIST });
            },
            "aria-label": ec.intl.string(ec.t["N2c/Un"]),
            children: (0, s.jsx)(nE.A, { size: "xs", color: "currentColor", className: eG.gE }),
        }),
    });
}
class nL extends r.PureComponent {
    static defaultProps = { isDefaultChannel: !1 };
    renderEditButton() {
        return (0, s.jsx)(nv, { ...this.props });
    }
    renderInviteButton() {
        return (0, s.jsx)(nj, { ...this.props });
    }
    renderRemoveSuggestionButton() {
        return (0, s.jsx)(ny, { ...this.props });
    }
    renderAcceptSuggestionButton() {
        return (0, s.jsx)(nM, { ...this.props });
    }
    getClassName() {
        let { position: e, sortingPosition: t } = this.props;
        return nR(e, t);
    }
    isDisabled() {
        let { channel: e, sorting: t, sortingType: n } = this.props;
        return nG(e, t, n);
    }
}
var nT = n(929481),
    nU = n(790782);
let nD = Z(function (e) {
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
            tabIndex: g,
        } = e,
        m = (0, u.bG)([L.A, U.Ay], () => {
            let e = U.Ay.getDirectoryChannelIds(t.id);
            return 0 === e.length ? null : L.A.getChannel(e[0]);
        }),
        f = (0, u.bG)([L.A], () => L.A.getChannel(m?.parent_id)),
        p = l === m?.id,
        C = (0, t3.Ay)(m),
        E = (0, u.bG)([O.A], () =>
            null != f ? O.A.can(B.xBc.MANAGE_CHANNELS, f) : null != t && O.A.can(B.xBc.MANAGE_CHANNELS, t),
        ),
        x = r.useCallback(
            (e) => {
                null != m &&
                    (0, tt.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("26132"),
                            n.e("30997"),
                            n.e("79995"),
                            n.e("29559"),
                        ]).then(n.bind(n, 994058));
                        return (t) => (0, s.jsx)(e, { ...t, channel: m });
                    });
            },
            [m],
        );
    if (null == m) return null;
    let N = nR(i, c),
        _ = nG(m, o, d),
        S = (0, s.jsx)("div", {
            className: eq()(N, { [eG.r9]: _, [eG.wH]: p }),
            "data-dnd-name": C,
            children: (0, s.jsxs)(nT.Ay, {
                className: eG.Ki,
                channel: m,
                guild: t,
                selected: p,
                onContextMenu: x,
                forceInteractable: !0,
                resolvedUnreadSetting: nU.e.ONLY_MENTIONS,
                children: [
                    (0, s.jsx)(nj, { channel: m, tabIndex: g }),
                    (0, s.jsx)(nv, { channel: m, disableManageChannels: a, tabIndex: g }),
                ],
            }),
        });
    return E && (S = A(h(S))), S;
});
var nO = n(34188),
    nP = n(733391),
    nV = n(832163),
    nw = n(517907),
    nH = n(31969),
    nB = n(44724),
    nk = n(849134),
    nF = n(770178),
    nK = n(65347);
let nz = Math.ceil(Math.sqrt(115200)),
    nW = (nz - 240) / 2,
    nY = r.forwardRef(function (e, t) {
        let { children: n } = e,
            [l, i] = r.useState(-1),
            a = r.useCallback((e) => {
                i(e.contentRect.width);
            }, []),
            o = (0, nF.w)(a, [], { fireOnMount: !0 }),
            [{ shineSpring: d }, c] = (0, te.z)(() => ({
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
                        (0, s.jsx)(e4.animated.div, {
                            className: nK.q,
                            style: {
                                transform: d.to(
                                    (e) => `translateX(calc(${e * l}px + ${e * nz}px)) translateY(-50%) rotate(45deg)`,
                                ),
                            },
                        }),
                    ),
                [n, l, d],
            );
        return (
            r.useImperativeHandle(t, () => ({ onMouseEnter: u, onMouseLeave: h }), [u, h]),
            (0, s.jsx)("div", {
                className: nK.i,
                onMouseEnter: u,
                onMouseLeave: h,
                onFocus: u,
                onBlur: h,
                ref: o,
                style: { "--custom-shine-dimensions": "240px", "--custom-shine-rotated-dimensions-delta": `${nW}px` },
                children: A,
            })
        );
    });
var nX = n(371794),
    nq = n(240248),
    nJ = n(998218),
    nZ = n(430825),
    n$ = n(601551),
    nQ = n(876772);
let n0 = r.memo(function (e) {
    let { guild: t, selected: l } = e,
        i = r.useRef(null),
        a = r.useRef(null),
        o = (0, S.useHasAnyModalOpen)(),
        d = (0, u.bG)([ey.A], () => ey.A.hasLayers()),
        c = (0, ev.xr)((e) => e.fullScreenLayers.length > 0);
    r.useEffect(() => {
        (0, nP.Kh)(t.id);
    }, [t.id]);
    let A = (0, u.bG)([nV.A], () => nV.A.getAnnouncement(t.id)),
        g = A?.state === "success" ? A.announcement : void 0,
        [m, f] = (0, eE.x_)(eA.M.GAME_SHOP_NEW_BADGE, t.id, g?.id ?? "", void 0, !0),
        p = m === eA.M.GAME_SHOP_NEW_BADGE && null != g,
        C = (0, tY.nY)(t.id),
        E = (0, nH.F)("storefront_badge", { applicationId: C }),
        x = (0, nw.A)({ applicationId: C, location: "game_shop_channel_row" }),
        N = null;
    p ? (N = ec.intl.string(ec.t.y2b7CA)) : x && (N = ec.intl.string(nZ.default.hriMCc)), null != E && (N = E.text);
    let [_, I] = (0, eE.x_)(eA.M.GAME_SHOP_NEW_DROP_POPOVER, t.id, g?.id ?? ""),
        b = _ === eA.M.GAME_SHOP_NEW_DROP_POPOVER && null != g;
    r.useEffect(() => {
        l && (p && f(eS.i.INDIRECT_ACTION), b && I(eS.i.INDIRECT_ACTION));
    }, [f, I, l, p, b]);
    let G = r.useCallback(() => {
            f(eS.i.TAKE_ACTION), I(eS.i.TAKE_ACTION);
            let e = (0, tY.mq)(t.id),
                n = nV.A.getStorefrontState(e)?.activePage ?? 0;
            (0, eN.pX)(B.BVt.CHANNELS_GAME_SHOP(t.id, n));
        }, [t.id, f, I]),
        R = r.useCallback(() => {
            (0, nB.X)({ guildId: t.id, forceFetch: b });
        }, [t.id, b]),
        v = r.useCallback(() => {
            I(eS.i.USER_DISMISS);
        }, [I]),
        j = r.useCallback(
            (e) => {
                null != t &&
                    (0, tt.L3)(e, async () => {
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
                (0, s.jsx)(ex.G, {
                    background: (0, s.jsx)("div", { className: nQ.D }),
                    innerClassName: nQ.Z,
                    ref: a,
                    id: `game-shop-${t.id}`,
                    renderIcon: (e) =>
                        (0, s.jsx)(nO.U, {
                            size: "custom",
                            color: "currentColor",
                            width: 20,
                            height: 20,
                            className: e,
                        }),
                    text: (0, s.jsx)(es.E, {
                        variant: "text-md/medium",
                        className: n$.UU,
                        children: ec.intl.string(ec.t.vyaWs7),
                    }),
                    selected: l,
                    onMouseDown: R,
                    onClick: G,
                    onContextMenu: j,
                    trailing: (0, s.jsxs)(s.Fragment, {
                        children: [
                            null != N && (0, s.jsx)(ep.Lp, { text: N, color: h.A.colors.BACKGROUND_BRAND.css }),
                            e,
                        ],
                    }),
                }),
            [t.id, l, R, G, j, N],
        ),
        L = r.useMemo(() => {
            if (null == g) return null;
            switch (g.type) {
                case "guild-application-announcement": {
                    let e =
                            null != g.assetId
                                ? nJ.A.toURLSafe((0, nX.YE)(g.applicationId, g.assetId, 256, "webp"))
                                : void 0,
                        t =
                            null != g.backgroundImageAssetId
                                ? nJ.A.toURLSafe((0, nX.YE)(g.applicationId, g.backgroundImageAssetId, 256, "webp"))
                                : void 0;
                    if (null == e) return null;
                    return {
                        graphicSource: { type: "sku", imageUrl: e, backgroundImageUrl: t },
                        title: ec.intl.string(ec.t["7PvvS9"]),
                        body: ec.intl.formatToPlainString(ec.t["9J4h1a"], { applicationName: g.applicationName }),
                    };
                }
                case "guild-discord-announcement": {
                    let { videoAssetFullyQualifiedURL: e, assetFullyQualifiedURL: t } = g;
                    if ((0, nq.uJ)(e) && (0, nq.uJ)(t)) return null;
                    return {
                        graphicSource: (0, nq.uJ)(e) ? { type: "asset", src: t } : { type: "video", src: e },
                        title: g.popoverTitle,
                        body: g.popoverBody,
                        actionLabel: g.popoverCta,
                    };
                }
                default:
                    return null;
            }
        }, [g]),
        T = r.useCallback(
            () =>
                b && null != L
                    ? (0, s.jsx)(nk.A, {
                          onActionClick: G,
                          onActionMouseDown: R,
                          onRender: y,
                          onRequestClose: v,
                          targetElementRef: a,
                          ...L,
                      })
                    : null,
            [b, L, G, R, y, v],
        );
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(nY, { ref: i, children: M }), !o && !d && !c && T()] });
});
var n1 = n(740426),
    n2 = n(826673),
    n3 = n(591552),
    n9 = n(202776),
    n7 = n(454058),
    n5 = n(568548);
function n6(e) {
    let { guild: t, selected: l } = e,
        i = (0, n9.A)(t),
        a = (0, n2.HX)(eA.M.CHANNEL_BROWSER_NEW_BADGE_NUX),
        o = (0, tM.yK)([n7.A], () =>
            Array.from(n7.A.getNewChannelIds(t.id)).filter((e) => n7.A.shouldIndicateNewChannel(t.id, e)),
        ),
        d = (0, tM.bG)([n5.Ay], () => n5.Ay.hasUnread(t.id, nU.P.GUILD_ONBOARDING_QUESTION)),
        c = o.length > tv.rR,
        u = (0, tM.bG)([n3.A, n5.Ay], () => {
            let e = n3.A.lastFetchedAt(t.id),
                n = n5.Ay.lastMessageId(t.id, nU.P.GUILD_ONBOARDING_QUESTION);
            if (null == n) return !1;
            let l = tx.default.extractTimestamp(n);
            return null != e && e > l;
        }),
        A = r.useCallback(() => {
            (0, eN.pX)(B.BVt.CHANNEL(t.id, i ? e_.VV.CUSTOMIZE_COMMUNITY : e_.VV.CHANNEL_BROWSER));
        }, [t.id, i]),
        g = r.useCallback(
            (e) => {
                (0, tt.L3)(e, async () => {
                    let { default: e } = await Promise.all([n.e("13446"), n.e("17699"), n.e("30412")]).then(
                        n.bind(n, 807431),
                    );
                    return (n) => (0, s.jsx)(e, { ...n, guild: t });
                });
            },
            [t],
        ),
        m = null;
    return (
        (a && !d && !c) ||
            l ||
            u ||
            (m = (0, s.jsx)(ep.Lp, {
                color: h.A.colors.BADGE_BACKGROUND_BRAND.css,
                text: ec.intl.string(ec.t.y2b7CA),
            })),
        (0, s.jsx)(ex.G, {
            id: `channels-${t.id}`,
            renderIcon: (e) => (0, s.jsx)(n1.k, { size: "md", color: "currentColor", className: e }),
            text: i ? ec.intl.string(ec.t.h9mGOP) : ec.intl.string(ec.t.et6wav),
            selected: l,
            onClick: A,
            onContextMenu: g,
            trailing: m,
        })
    );
}
var n8 = n(855473);
function n4(e) {
    let { guild: t, selected: n } = e;
    return (0, s.jsx)(ex.G, {
        id: `home-tab-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(n8.Z, { size: "md", color: "currentColor", className: e }),
        text: ec.intl.string(ec.t.VbpLyU),
        selected: n,
        onClick: function () {
            (0, eN.pX)(B.BVt.CHANNEL(t.id, e_.VV.GUILD_HOME));
        },
    });
}
var le = n(5373),
    lt = n(65995),
    ln = n(408619);
function ll(e, t) {
    return (0, s.jsx)(es.E, { variant: "text-xs/bold", color: "text-default", children: e }, t);
}
let li = r.memo(function (e) {
    let { guild: t } = e,
        n = (0, u.bG)([tP.h], () => tP.h.getNewMemberActions(t.id), [t.id]),
        l = (0, u.bG)([lt.A], () => lt.A.getCompletedActions(t.id)),
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
            (0, s.jsxs)(em.D, {
                ...o,
                role: "button",
                focusProps: { offset: { right: 4 } },
                className: ln.G9,
                onClick: function () {
                    (0, eN.pX)(B.BVt.CHANNEL(t.id, e_.VV.GUILD_HOME));
                },
                children: [
                    (0, s.jsxs)("div", {
                        className: ln.A1,
                        children: [
                            (0, s.jsx)(ei.D, { variant: "heading-sm/bold", children: ec.intl.string(ec.t.SnrR3x) }),
                            (0, s.jsxs)("div", {
                                className: ln.Ib,
                                children: [
                                    (0, s.jsx)(es.E, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        className: ln.Cv,
                                        children: ec.intl.format(ec.t.eqZ1lW, {
                                            numberHook: ll,
                                            total: a.toString(),
                                            completed: i.toString(),
                                        }),
                                    }),
                                    (0, s.jsx)(ta.A, {
                                        className: ln.UE,
                                        width: 16,
                                        height: 16,
                                        direction: ta.A.Directions.RIGHT,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, s.jsx)(le.i, {
                        className: ln.hr,
                        foregroundGradientColor: [
                            h.A.unsafe_rawColors.GREEN_300.css,
                            h.A.unsafe_rawColors.GREEN_230.css,
                        ],
                        percent: (i / a) * 100 + 3,
                        animate: !0,
                    }),
                ],
            }),
            (0, s.jsx)("div", { role: "separator", className: ln.yF }),
        ],
    });
});
var ls = n(581925);
function lr(e) {
    let { guild: t, selected: n } = e;
    return (0, s.jsx)(ex.G, {
        id: `official-messages-page-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(ls.L, { size: "md", color: "currentColor", className: e }),
        text: ec.intl.string(ec.t.xHEzFh),
        selected: n,
        onClick: function () {
            (0, eN.pX)(B.BVt.CHANNEL(t.id, e_.VV.GUILD_OFFICIAL_MESSAGES));
        },
    });
}
var la = n(514179);
function lo(e) {
    let { guild: t, selected: l } = e;
    return (0, s.jsx)(ex.G, {
        id: `subscriptions-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(la.A, { className: e }),
        text: ec.intl.string(ec.t["KzCF/6"]),
        selected: l,
        onClick: function () {
            (0, eN.pX)(B.BVt.CHANNEL(t.id, e_.VV.ROLE_SUBSCRIPTIONS));
        },
        onContextMenu: function (e) {
            null != t &&
                (0, tt.L3)(e, async () => {
                    let { default: e } = await n.e("71911").then(n.bind(n, 978554));
                    return (n) => (0, s.jsx)(e, { ...n, guild: t });
                });
        },
    });
}
var ld = n(506774),
    lc = n(95561),
    lu = n(289397),
    lh = n(486418),
    lA = n(575926),
    lg = n(440293),
    lm = n(174459),
    lf = n(634654),
    lp = n(726965);
function lC(e) {
    let { guildId: t, selected: n, handleClick: l } = e,
        i = (0, lg.w)(t),
        r = (0, tM.bG)([D.A], () => D.A.getGuild(t)),
        a = r?.features.has(B.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !0,
        o = "false" === ld.w.get(lf.bJ, "false"),
        d = (0, tM.bG)([$.Ay], () => $.Ay.useReducedMotion);
    return (0, s.jsx)(ex.G, {
        id: `shop-${t}`,
        className: eq()(lp.A2, { [lp.wH]: n, [lp.ST]: o }),
        innerClassName: lp.LE,
        renderIcon: (e) => (0, s.jsx)(lA.h, { width: 20, height: 20, className: eq()([e, lp.sV]) }),
        text: ec.intl.string(ec.t.al5EXL),
        selected: n,
        onClick: l,
        trailing: (0, s.jsxs)("div", {
            className: lp.ai,
            children: [
                d
                    ? (0, s.jsx)(ep.Lp, {
                          color: h.A.unsafe_rawColors.BRAND_260.css,
                          text: ec.intl.string(ec.t.y2b7CA),
                          className: lp.Ad,
                      })
                    : (0, s.jsx)("img", {
                          src: (0, lu.n)("server_products/storefront/money.gif"),
                          className: lp.TG,
                          alt: "",
                      }),
                n &&
                    (0, s.jsx)(em.D, {
                        className: lp.b,
                        onClick: function (e) {
                            e.stopPropagation(),
                                (0, n2.Dr)(eA.M.SERVER_SHOP_PHANTOM_PREVIEW),
                                lm.default.track(B.HAw.GUILD_SHOP_PREVIEW_CLICK, {
                                    ...(0, lc.H$)(t),
                                    action_taken: lf.hN.DISMISS_CHANNEL_ROW,
                                }),
                                (i && a) || (0, eN.bG)(B.BVt.CHANNEL(t, U.Ay.getDefaultChannel(t)?.id));
                        },
                        "aria-label": ec.intl.string(ec.t.cpT0Cq),
                        children: (0, s.jsx)(t1.a, { size: "xs", color: "currentColor" }),
                    }),
            ],
        }),
    });
}
function lE(e) {
    let { guild: t, selected: l } = e;
    function i() {
        ld.w.set(lf.bJ, "true"), (0, eN.pX)(B.BVt.CHANNEL(t.id, e_.VV.GUILD_SHOP));
    }
    return (0, lh.P)(t)
        ? (0, s.jsx)(lC, { guildId: t.id, selected: l, handleClick: i })
        : (0, s.jsx)(ex.G, {
              id: `shop-${t.id}`,
              renderIcon: (e) => (0, s.jsx)(lA.h, { width: 20, height: 20, className: e }),
              text: ec.intl.string(ec.t.al5EXL),
              selected: l,
              onClick: i,
              onContextMenu: function (e) {
                  null != t &&
                      (0, tt.L3)(e, async () => {
                          let { default: e } = await n.e("52565").then(n.bind(n, 345332));
                          return (n) => (0, s.jsx)(e, { ...n, guild: t });
                      });
              },
          });
}
var lx = n(308528),
    lN = n(262763),
    l_ = n(499211),
    lS = n(406704),
    lI = n(747926),
    lb = n(977997),
    lG = n(807632),
    lR = n(37411);
function lv(e) {
    let { thread: t, tabIndex: n } = e,
        l = (0, lG.YG)(t),
        i = (0, lG.IO)(t),
        r = (0, lS._M)(t);
    return l && i && r ? (0, s.jsx)(lj, { thread: t, tabIndex: n }) : null;
}
function lj(e) {
    let { thread: t, tabIndex: n } = e,
        l = (0, u.bG)([lb.A], () => lb.A.isInChannel(t.id), [t.id]),
        { needSubscriptionToAccess: i } = (0, l_.A)(t.id),
        a = r.useCallback(() => {
            lN.A.handleVoiceConnect({ channel: t, connected: l, needSubscriptionToAccess: i, locked: !1 });
        }, [t, l, i]),
        o = r.useCallback(() => {
            (0, lI.JA)(t, !0, lR.H9.CHANNEL_LIST);
        }, [t]);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(eg.m, {
                asContainer: !0,
                text: ec.intl.string(ec.t["96ANUN"]),
                children: (0, s.jsx)(em.D, {
                    className: eG.Xs,
                    onClick: a,
                    tabIndex: n,
                    "aria-label": ec.intl.string(ec.t["96ANUN"]),
                    children: (0, s.jsx)(ea.H, { size: "xs", color: "currentColor", className: eG.gE }),
                }),
            }),
            (0, s.jsx)(eg.m, {
                asContainer: !0,
                text: ec.intl.string(ec.t.ZXxLQg),
                children: (0, s.jsx)(em.D, {
                    className: eG.Xs,
                    onClick: o,
                    tabIndex: n,
                    "aria-label": ec.intl.string(ec.t.ZXxLQg),
                    children: (0, s.jsx)(eo.o, { size: "xs", color: "currentColor", className: eG.gE }),
                }),
            }),
        ],
    });
}
var ly = n(152007);
function lM(e) {
    return null != e && e > 0;
}
var lL = n(405018),
    lT = n(428689),
    lU = n(785574);
function lD(e) {
    let { total: t, users: n, videoLimit: l } = e;
    return (0, s.jsxs)("div", {
        className: lU.iE,
        children: [
            (0, s.jsxs)(es.E, {
                tag: "span",
                color: "text-subtle",
                variant: "text-xs/medium",
                className: eq()(lU.VV, { [lU.Ki]: l, [lU.$G]: n >= 100 }),
                children: [
                    l ? (0, s.jsx)(lT.n, { size: "md", color: "currentColor", className: lU.LB }) : null,
                    n.toString().padStart(2, "0"),
                ],
            }),
            (0, s.jsx)(es.E, {
                tag: "span",
                color: "text-subtle",
                variant: "text-xs/medium",
                className: eq()(lU.X5, { [lU.$G]: t >= 100 }),
                children: t.toString().padStart(2, "0"),
            }),
        ],
    });
}
function lO(e) {
    let { channel: t, video: n, userCount: l } = e,
        { limit: i } = (0, lL.A)(t),
        r = -1,
        a = !1;
    return (
        t.userLimit > 0 && (r = t.userLimit),
        n && i > 0 && ((a = r < 0 || i < r), (r = r > 0 ? Math.min(r, i) : i)),
        (0, s.jsx)(lD, { users: l, total: r, videoLimit: a })
    );
}
var lP = n(664841);
function lV(e) {
    let { mentionsCount: t, isMentionLowImportance: n } = e;
    return (0, s.jsx)("div", {
        className: lP.R,
        "aria-hidden": !0,
        children: (0, s.jsx)(ep.hV, {
            count: t,
            color: n ? h.A.colors.BACKGROUND_MOD_STRONG.css : h.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
        }),
    });
}
var lw = n(588224),
    lH = n(684086);
function lB(e) {
    let { thread: t, countInVoice: n, hasVideo: l, mentionCount: i, isMentionLowImportance: r } = e,
        a = n > 0 && t.userLimit > 0,
        o = lM(i);
    return a || o
        ? (0, s.jsxs)("div", {
              className: eG.yW,
              children: [
                  a ? (0, s.jsx)(lO, { userCount: n, video: l, channel: t }) : null,
                  o ? (0, s.jsx)(lV, { mentionsCount: i, isMentionLowImportance: r }) : null,
              ],
          })
        : null;
}
function lk(e) {
    let { style: t, withGuildIcon: n, inverted: l } = e,
        i = { className: eq()(lH.GI, { [lH.a7]: n }, { [lH.BJ]: l }), style: t },
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
let lF = r.memo(function (e) {
        let { thread: t, isSelectedChannel: l, isSelectedVoice: i, isLast: a, withGuildIcon: o } = e,
            c = (0, u.bG)([tp.Ay], () => tp.Ay.getVoiceStatesForChannel(t), [t]),
            h = (0, u.bG)([lb.A], () => lb.A.hasVideo(t.id)),
            {
                unread: A,
                mentionCount: g,
                isMentionLowImportance: m,
            } = (0, u.cf)([n5.Ay], () => ({
                unread: n5.Ay.hasUnread(t.id),
                mentionCount: n5.Ay.getMentionCount(t.id),
                isMentionLowImportance: n5.Ay.getIsMentionLowImportance(t.id),
            })),
            f = (0, u.bG)([ly.A], () => ly.A.isMuted(t.id)),
            p = r.useCallback(
                (e) => {
                    (0, lI.JA)(t, !e.shiftKey, lR.H9.CHANNEL_LIST);
                },
                [t],
            ),
            C = r.useCallback(() => {
                lx.A.preload(t.guild_id, t.id);
            }, [t.guild_id, t.id]),
            E = r.useCallback(
                (e) => {
                    let l = L.A.getChannel(t.id);
                    null != l &&
                        (0, tt.L3)(e, async () => {
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
            { role: N, ..._ } = (0, d.rm)(t.id),
            S = r.useRef(null),
            I =
                g > 0
                    ? ec.intl.formatToPlainString(ec.t["ZL7+I6"], { channelName: t.name, mentionCount: g })
                    : A
                      ? ec.intl.formatToPlainString(ec.t.YlVvmc, { channelName: t.name })
                      : ec.intl.formatToPlainString(ec.t["0nZpiF"], { channelName: t.name });
        return (0, s.jsxs)("li", {
            role: N,
            className: eq()(eG.fx, { [eG.wH]: l }),
            children: [
                (0, s.jsx)(lk, { withGuildIcon: o }),
                a
                    ? null
                    : (0, s.jsx)(lk, {
                          withGuildIcon: o,
                          inverted: !0,
                          style: { transform: "rotateX(180deg) translateY(-9px)" },
                      }),
                (0, s.jsx)(tQ.vN, {
                    focusTarget: S,
                    ringTarget: S,
                    offset: { top: 2, bottom: 2, right: 4 },
                    children: (0, s.jsxs)("div", {
                        className: eq()(eG.Ki, n$.iE, n$.ZS, {
                            [n$.J1]: l,
                            [n$.F4]: !l && f,
                            [n$.V2]: !f && !l && A,
                            [n$.lY]: o,
                        }),
                        onMouseDown: C,
                        onContextMenu: E,
                        children: [
                            !A || f || l ? null : (0, s.jsx)("div", { className: eq()(n$.gy, n$.WS) }),
                            (0, s.jsx)(em.D, {
                                ..._,
                                innerRef: S,
                                className: n$.nf,
                                onClick: p,
                                "aria-label": I,
                                focusProps: { enabled: !1 },
                                children: (0, s.jsxs)("div", {
                                    className: eq()(n$.Y5, n$.__invalid_threadMainContent),
                                    children: [
                                        (0, s.jsx)(tJ.A, {
                                            className: n$.UU,
                                            "aria-hidden": !0,
                                            children: (0, s.jsx)(es.E, {
                                                variant: "text-sm/medium",
                                                color: "none",
                                                children: t.name,
                                            }),
                                        }),
                                        (0, s.jsxs)("div", {
                                            className: n$.Y_,
                                            onClick: nT.dG,
                                            onKeyDown: nT.dG,
                                            children: [
                                                (0, s.jsx)(lB, {
                                                    thread: t,
                                                    countInVoice: x,
                                                    hasVideo: h,
                                                    mentionCount: g,
                                                    isMentionLowImportance: m,
                                                }),
                                                (0, s.jsx)(lv, { thread: t, tabIndex: _.tabIndex }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                }),
                (0, s.jsx)(lw.A, {
                    channel: t,
                    collapsed: !i && 1 !== c.length,
                    collapsedMax: 6,
                    voiceStates: c,
                    isThread: !0,
                }),
            ],
        });
    }),
    lK = r.memo(function (e) {
        let { channel: t, selectedChannel: n, selectedVoiceChannelId: l, sortedThreadIds: i, withGuildIcon: r } = e,
            a = (0, t3.Ay)(t),
            { density: o } = (0, C.wR)(),
            d = (0, u.yK)([L.A], () => i.map((e) => L.A.getChannel(e)).filter(tC.Vq), [i]),
            c = (0, u.bG)([tp.Ay], () => {
                let e = d[d.length - 1];
                if (null == e) return 0;
                let t = tp.Ay.getVoiceStates(e.guild_id)[e.id];
                return null == t || 0 === t.length ? 0 : l !== e.id ? 40 : 32 * t.length + 8;
            });
        return (0, s.jsx)("li", {
            className: lH.kL,
            children: (0, s.jsxs)("ul", {
                role: "group",
                "aria-label": ec.intl.formatToPlainString(ec.t.EiyIi6, { channelName: a }),
                children: [
                    (0, s.jsx)("div", {
                        className: eq()(lH.eh, { [lH.ET]: r }),
                        style: { bottom: ("cozy" === o ? 28 : 24) + c },
                    }),
                    d.map((e, t) =>
                        (0, s.jsx)(
                            lF,
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
var lz = n(922016),
    lW = n(367513),
    lY = n(296216),
    lX = n(963027),
    lq = n(202384),
    lJ = n(51758),
    lZ = n(139033),
    l$ = n(305866),
    lQ = n(123292),
    l0 = n(830215),
    l1 = n(315982),
    l2 = n(480900),
    l3 = n(557722),
    l9 = n(834942),
    l7 = n(287809),
    l5 = n(53516),
    l6 = n(914081),
    l8 = (((l = {})[(l.VOICE = 0)] = "VOICE"), l);
let l4 = function (e) {
    let { type: t, guildId: l, closePopout: i } = e,
        r = (0, et.GV)(),
        a = (0, u.bG)([l9.A], () => l9.A.getCheck(l), [l]),
        {
            notClaimed: o,
            notEmailVerified: d,
            notPhoneVerified: c,
            missingVerificationRole: h,
            verificationRole: A,
        } = a,
        {
            header: g,
            body: m,
            buttonText: f,
        } = (function (e, t) {
            if (0 !== e) return { header: null, body: null, buttonText: null };
            {
                let e = ec.intl.string(ec.t["6zY8BI"]),
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
                    ? { header: e, body: ec.intl.string(ec.t.IRxUlG), buttonText: ec.intl.string(ec.t.fiNVin) }
                    : l
                      ? { header: e, body: ec.intl.string(ec.t.vW8iUF), buttonText: ec.intl.string(ec.t["50gfOv"]) }
                      : i
                        ? { header: e, body: ec.intl.string(ec.t.vdSOpz), buttonText: ec.intl.string(ec.t.lm1UKt) }
                        : s
                          ? {
                                header: e,
                                body: ec.intl.formatToPlainString(ec.t.v1ktYb, { min: B.$8o.MEMBER_AGE }),
                                buttonText: ec.intl.string(ec.t.BddRzS),
                            }
                          : r
                            ? {
                                  header: e,
                                  body: ec.intl.formatToPlainString(ec.t.sncw41, { min: B.$8o.ACCOUNT_AGE }),
                                  buttonText: ec.intl.string(ec.t.BddRzS),
                              }
                            : a && null != o && null === o.tags.guild_connections
                              ? {
                                    header: e,
                                    body: ec.intl.format(ec.t.MZbCuG, { roleName: `@${o.name}` }),
                                    buttonText: ec.intl.string(ec.t["6Ge2LG"]),
                                }
                              : { header: e, body: null, buttonText: null };
            }
        })(t, a);
    return null == g || null == m
        ? null
        : (0, s.jsxs)(l$.l, {
              className: l6.kL,
              "aria-labelledby": r,
              children: [
                  (0, s.jsx)("img", { alt: "", className: l6.Sl, src: n(303528) }),
                  (0, s.jsxs)("div", {
                      className: l6.Qs,
                      children: [
                          (0, s.jsx)(ei.D, { variant: "heading-md/semibold", id: r, children: g }),
                          (0, s.jsx)(es.E, { color: "text-default", variant: "text-sm/normal", children: m }),
                          (0, s.jsxs)("div", {
                              className: l6.UD,
                              children: [
                                  null != f
                                      ? (0, s.jsx)("div", {
                                            "data-button-hoisted-classname-wrapper": !0,
                                            className: l6.FS,
                                            children: (0, s.jsx)(tZ.$, {
                                                variant: "primary",
                                                text: f,
                                                onClick: function () {
                                                    o
                                                        ? l1.R()
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
                                                                            reason: l3.d.GUILD_PHONE_REQUIRED,
                                                                            ...t,
                                                                        });
                                                                },
                                                                { modalKey: l5.V },
                                                            )
                                                          : d
                                                            ? (l0.A.verifyResend(),
                                                              (0, lZ.A)({
                                                                  title: ec.intl.string(ec.t.LykQYk),
                                                                  subtitle: ec.intl.format(ec.t.azKEPy, {
                                                                      email: l7.default.getCurrentUser()?.email,
                                                                  }),
                                                              }))
                                                            : h && null != A && (0, l2.b)(A, l),
                                                        i();
                                                },
                                            }),
                                        })
                                      : null,
                                  o || c || d
                                      ? (0, s.jsx)(lQ.Q, {
                                            onClick: i,
                                            text: ec.intl.string(ec.t.oEAioF),
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
var ie = n(824865),
    it = n(378570),
    il = n(790535),
    ii = n(113783),
    is = n(96566),
    ir = n(280450),
    ia = n(312006),
    io = n(505543),
    id = n(994500),
    ic = n(685399),
    iu = n(475889),
    ih = n(693879),
    iA = n(435470),
    ig = n(35275),
    im = n(138383);
function ip(e) {
    let { locked: t } = e;
    return (0, s.jsx)("div", {
        className: eq()(eG.Xs, im.U),
        children: (0, s.jsx)(ig.A, {
            className: eG.gE,
            color: t ? h.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css : void 0,
        }),
    });
}
var iC = n(695633),
    iE = n(669715),
    ix = n(769015),
    iN = n(364132);
function i_(e) {
    let { className: t, embeddedApps: n, muted: l } = e;
    if (n.length <= 0) return null;
    {
        if (1 === n.length)
            return (0, s.jsx)("div", {
                className: eq()(iN.kL, t, l && iN.F4),
                children: (0, s.jsx)(ix.A, { game: n[0].application, className: iN.wK }),
            });
        let e = n.length - 1;
        return (0, s.jsxs)("div", {
            className: eq()(iN.kL, t, l && iN.F4),
            children: [
                (0, s.jsx)(ix.A, { game: n[0].application, className: iN.wK }),
                2 === n.length
                    ? (0, s.jsx)(ix.A, { game: n[1].application, className: iN.wK })
                    : (0, s.jsx)(es.E, {
                          className: iN.ju,
                          variant: "text-xs/bold",
                          color: "interactive-text-active",
                          children: `+${e}`,
                      }),
            ],
        });
    }
}
function iS(e) {
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
            resolvedUnreadSetting: g,
        } = e,
        m = (0, u.bG)([n5.Ay], () => n5.Ay.getMentionCount(t.id)),
        f = (0, u.bG)([n5.Ay], () => n5.Ay.getIsMentionLowImportance(t.id)),
        p = (0, ic.Ay)(t),
        C = (0, u.bG)([O.A], () => !O.A.can(B.xBc.CONNECT, t)),
        E = (0, iu.H)(t),
        x = (0, u.bG)([lb.A], () => lb.A.hasVideo(t.id)),
        N = (0, is.qT)(t.id) && t.isGuildStageVoice(),
        _ = (function (e) {
            let { channel: t, locked: n, video: l, selected: i } = e;
            return (
                (function (e) {
                    let { channel: t, video: n, considerMaxStageVoiceUserLimit: l = !0 } = e,
                        { limit: i } = (0, lL.A)(t),
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
        })({ channel: t, locked: C, video: (x || N) && null == E, selected: n }),
        S = (0, u.bG)([iC.A], () => iC.A.getNewThreadCount(t.guild_id, t.id)),
        I = (0, iA.ed)(t.guild_id, t.id),
        b = (0, u.bG)([D.A], () => D.A.getGuild(t.guild_id)?.features.has(B.GuildFeatures.COMMUNITY) ?? !1);
    if (lM(m)) return (0, s.jsx)(lV, { mentionsCount: m, isMentionLowImportance: f });
    if (o) return (0, s.jsx)(ip, { locked: d });
    if (c)
        return (0, s.jsx)(ep.Lp, { text: ec.intl.string(ec.t.y2b7CA), color: h.A.colors.BADGE_BACKGROUND_BRAND.css });
    if (!A && g === nU.e.ALL_MESSAGES && t.isForumLikeChannel() && null != S && S > 0)
        return (0, s.jsx)(es.E, {
            variant: "text-xs/semibold",
            color: "text-brand",
            children: ec.intl.format(ec.t.GkAbqY, { count: (0, ep.Gu)(S) }),
        });
    if (!A && t.isForumLikeChannel() && null != I && I > 0)
        return (0, s.jsx)(es.E, { variant: "text-xs/semibold", color: "text-muted", children: (0, ep.Gu)(I) });
    let G = i?.length ?? 0;
    return null != r && r && _
        ? (0, s.jsx)(lO, { userCount: G, video: x || N, channel: t })
        : l && (0, iE.t)(i) && b
          ? (0, s.jsx)(ep.Lp, { text: ec.intl.string(ec.t.dI3q4h), color: h.A.unsafe_rawColors.RED_400.css })
          : null != E
            ? (0, s.jsx)(ih.z, { textColor: "text-feedback-positive", entry: { start: E } })
            : null != a && a && p.length > 0
              ? (0, s.jsx)(i_, { embeddedApps: p, muted: A })
              : null;
}
var iI = n(182222);
class ib extends nL {
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
        return (0, nA.Pd)(e, lb.A, D.A);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return eG.ZS;
        if (null != t)
            if (e > t) return eG.mU;
            else return eG.TR;
        return eG.fx;
    }
    handleClick = () => {
        let { channel: e, locked: t, connected: n, unverifiedAccount: l, isSuggestedSection: i } = this.props,
            s = e.getGuildId();
        null != s && (0, lJ.V)(s) && (0, lq.Ze)(s),
            l && this.setState({ shouldShowGuildVerificationPopout: !0 }),
            t || n || e.isRoleSubscriptionTemplatePreviewChannel() || (0, il.av)(e),
            __OVERLAY__ || (0, it.iN)(e.id, i ? { source: ie.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
    };
    handleClickChat = () => {
        let { channel: e, locked: t, isSuggestedSection: n } = this.props;
        __OVERLAY__ || t || (0, it.iN)(e.id, n ? { source: ie.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            l = D.A.getGuild(t.getGuildId());
        null != l &&
            (0, tt.L3)(e, async () => {
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
                    n.e("80740"),
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
        return (0, s.jsx)(lw.A, { channel: e, voiceStates: l, collapsed: t, tabIndex: n, numAudience: i });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        if (t)
            return (0, s.jsx)(l4, {
                type: l8.VOICE,
                guildId: e.guild_id,
                closePopout: this.closeGuildVerificationPopout,
            });
        throw Error("VoiceChannel.renderPopout: There must always be something to render");
    };
    renderOpenChatButton = () => {
        let { channel: e, locked: t, forceShowButtons: n } = this.props;
        if (!t)
            return (0, s.jsx)(eg.m, {
                asContainer: !0,
                text: ec.intl.string(ec.t.ZXxLQg),
                children: (0, s.jsx)(em.D, {
                    className: eq()(eG.Xs, n ? eG.Tf : null),
                    onClick: () => {
                        lW.A.updateChatOpen(e.id, !0), this.handleClickChat();
                    },
                    "aria-label": ec.intl.string(ec.t.ZXxLQg),
                    children: (0, s.jsx)(eo.o, { size: "xs", color: "currentColor", className: eG.gE }),
                }),
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, s.jsx)("div", { className: eG.yW, children: e });
    }
    getTooltipText = () => {
        let { connected: e } = this.props;
        return this.isFull() && !e ? ec.intl.string(ec.t.rZfiNq) : null;
    };
    renderSubtitle = () => {
        let e = this.props.stageInstance?.topic;
        return null == e ? null : (0, s.jsx)(tJ.A, { children: e });
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
                unread: g,
                resolvedUnreadSetting: m,
                mentionCount: f,
                isFavoriteSuggestion: p,
            } = this.props,
            { shouldShowGuildVerificationPopout: C } = this.state,
            E = (0, s.jsxs)("li", {
                className: eq()(this.getModeClass(), { [eG.r9]: this.isDisabled() }),
                "data-dnd-name": (0, t3.m1)(e, l7.default, id.A),
                children: [
                    (0, s.jsx)(lz.Y, {
                        targetElementRef: this.channelItemRef,
                        position: "right",
                        renderPopout: this.renderPopout,
                        spacing: 17,
                        onRequestClose: this.closeGuildVerificationPopout,
                        shouldShow: C,
                        children: () =>
                            (0, s.jsx)(eg.m, {
                                text: this.getTooltipText(),
                                children: (0, s.jsxs)(nT.Ay, {
                                    ref: this.channelItemRef,
                                    className: eG.Ki,
                                    iconClassName: eq()({ [iI.G]: null != u }),
                                    channel: e,
                                    selected: !p && t,
                                    connected: n,
                                    unread: n ? g : void 0,
                                    resolvedUnreadSetting: m,
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
                                    "aria-label": (0, lX.Ay)({
                                        channel: e,
                                        unread: g,
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
let iG = Z((0, lY.F)(ib));
function iR(e) {
    var t;
    let n,
        l,
        { guild: i, channel: r, disableSorting: a, isFavoriteCategory: o, collapsed: d, voiceStates: c } = e,
        h = (0, u.cf)([n5.Ay], () => ({ unread: n5.Ay.hasUnread(r.id), mentionCount: n5.Ay.getMentionCount(r.id) })),
        A = (0, u.bG)([V.Ay], () => V.Ay.resolveUnreadSetting(r)),
        g = (0, u.cf)([L.A, l9.A, O.A], () => {
            let e = L.A.getChannel(r.parent_id),
                t = l9.A.getCheck(r.guild_id);
            return {
                canManageChannel: null != i && O.A.can(B.xBc.MANAGE_CHANNELS, r),
                canReorderChannel:
                    !0 !== a &&
                    ((0, v.ai)(i.id) ||
                        (null != e ? O.A.can(B.xBc.MANAGE_CHANNELS, e) : O.A.can(B.xBc.MANAGE_CHANNELS, i))),
                canMoveMembers: O.A.can(B.xBc.MOVE_MEMBERS, r),
                locked: !O.A.can(B.xBc.CONNECT, r),
                bypassLimit: O.A.can(B.xBc.MOVE_MEMBERS, r),
                unverifiedAccount: !t.canChat,
            };
        }),
        m = (0, u.bG)([M.A], () => M.A.isCollapsed(r.parent_id)),
        f =
            ((t = r.id),
            (n = (0, io.A)(t)),
            (l = (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return (0, u.cf)([ia.Ay, ir.default], () => {
                    let n = ir.default.getId();
                    return ia.Ay.getPermissionsForUser(n, e, t);
                }, [e, t]);
            })(t, !0).moderator),
            !n && l ? 1 : 0),
        p = (0, u.bG)([nI.A], () => nI.A.getStageInstanceByChannel(r.id), [r.id]),
        C = (0, ii.zy)(r.id, t_.ip.AUDIENCE),
        { isSubscriptionGated: E, needSubscriptionToAccess: x } = (0, l_.A)(r.id),
        N = (0, u.bG)([V.Ay], () => V.Ay.isFavorite(i.id, r.id)),
        _ = (0, is.xn)(r.id),
        S = iS({
            channel: r,
            isChannelSelected: !1,
            isChannelCollapsed: d,
            voiceStates: c,
            isSubscriptionGated: E,
            needSubscriptionToAccess: x,
            enableConnectedUserLimit: _ || (r.userLimit > 0 && r.userLimit < B.RCc),
        }),
        I = e.connected && null == S;
    return (0, s.jsx)(iG, {
        categoryCollapsed: m,
        connectAction: f,
        numAudience: C,
        stageInstance: p,
        isSubscriptionGated: E,
        needSubscriptionToAccess: x,
        ...h,
        ...g,
        ...e,
        isFavoriteSuggestion: o && !N,
        forceShowButtons: I,
        channelInfo: S,
        resolvedUnreadSetting: A,
    });
}
function iv(e, t) {
    let n = t.getGuildId();
    if (null == n) throw Error("TextChannel, preloadChannel: Channel does not have a guildId");
    lx.A.preload(n, t.id);
}
let ij = Z(
        class extends nL {
            handleContextMenu = (e) => {
                let { channel: t } = this.props,
                    l = D.A.getGuild(t.getGuildId());
                null != l &&
                    (0, tt.L3)(e, async () => {
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
                (0, eN.pX)(B.BVt.CHANNEL(t, e.id), {
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
                        className: eq()(this.getClassName(), { [eG.r9]: this.isDisabled() }),
                        "data-dnd-name": (0, t3.m1)(e, l7.default, id.A),
                        children: (0, s.jsxs)(nT.Ay, {
                            className: eG.Ki,
                            channel: e,
                            selected: t,
                            onClick: this.handleClick,
                            onMouseDown: iv,
                            onContextMenu: this.handleContextMenu,
                            connectDragPreview: r ? i : null,
                            "aria-label": (0, lX.Ay)({ channel: e }),
                            resolvedUnreadSetting: nU.e.ONLY_MENTIONS,
                            children: [this.renderInviteButton(), this.renderEditButton()],
                        }),
                    });
                return r ? n(l(a)) : a;
            }
        },
    ),
    iy = r.memo(function (e) {
        let { channel: t, guild: n, disableSorting: l } = e,
            i = (0, u.cf)([L.A, O.A], () => {
                let e = L.A.getChannel(t.parent_id);
                return {
                    canManageChannel: O.A.can(B.xBc.MANAGE_CHANNELS, t),
                    canReorderChannel:
                        !0 !== l && null != e ? O.A.can(B.xBc.MANAGE_CHANNELS, e) : O.A.can(B.xBc.MANAGE_CHANNELS, n),
                };
            });
        return (0, s.jsx)(ij, { ...i, ...e });
    });
var iM = n(172218),
    iL = n(811024),
    iT = n(323073);
function iU(e) {
    if (null == e) return null;
    switch (e.type) {
        case "embedded-activities":
        case "event":
            return { subtitle: e.name };
        case "go-live":
            return { subtitle: ec.intl.string(ec.t.Pa817q) };
    }
    return null;
}
var iD = n(3322),
    iO = n(355145),
    iP = n(696451),
    iV = n(763827),
    iw = n(56059),
    iH = n(163328),
    iB = n(778712),
    ik = n(730134),
    iF = n(707539),
    iK = n(486020),
    iz = n(49741);
function iW(e) {
    let { channel: t } = e,
        l = (0, u.yK)([iC.A, n5.Ay, O.A], () => {
            let e = iC.A.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
            return o()(iC.A.getActiveJoinedThreadsForParent(t.guild_id, t.id))
                .values()
                .map((e) => e.channel)
                .concat(o().values(iC.A.getActiveUnjoinedThreadsForParent(t.guild_id, t.id)))
                .filter((t) => !(t.id in e) && O.A.can(B.xBc.VIEW_CHANNEL, t))
                .sort((e, t) => {
                    let n = n5.Ay.lastMessageId(e.id),
                        l = n5.Ay.lastMessageId(t.id);
                    return tx.default.compare(n, l);
                })
                .reverse()
                .value();
        }),
        i = t.isForumLikeChannel() ? 5 : 3,
        a = t.isForumLikeChannel() ? iw.b : iH.y;
    return (
        r.useEffect(() => {
            (0, iF.TE)();
        }, []),
        (0, s.jsxs)("div", {
            className: iz.SW,
            children: [
                (0, s.jsx)(es.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: iz.DD,
                    children: t.isForumLikeChannel() ? ec.intl.string(ec.t.ioVdO2) : ec.intl.string(ec.t.VNYs2v),
                }),
                (0, s.jsxs)("div", {
                    className: iz.p_,
                    children: [
                        l
                            .slice(0, t.isForumLikeChannel() ? l.length : i)
                            .map((e) => (0, s.jsx)(iY, { thread: e }, e.id))
                            .filter((e) => r.isValidElement(e))
                            .slice(0, i),
                        (0, s.jsxs)(em.D, {
                            className: iz.nM,
                            onClick: function () {
                                t.isForumLikeChannel()
                                    ? (0, it.iN)(t.id)
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
                                    className: iz.R4,
                                    children: (0, s.jsx)(a, { size: "custom", className: iz.Kk }),
                                }),
                                (0, s.jsx)("div", {
                                    className: iz.Pf,
                                    children: (0, s.jsx)(es.E, {
                                        variant: "text-sm/normal",
                                        color: "none",
                                        children: ec.intl.string(ec.t["4qdZ93"]),
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
function iY(e) {
    let { thread: t } = e,
        n = (0, u.bG)([l7.default], () => l7.default.getUser(t.ownerId)),
        l = (0, iF.JO)(t);
    return (0, s.jsxs)(em.D, {
        className: iz.nM,
        onClick: function (e) {
            (0, lI.JA)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, lR.H9.POPOUT);
        },
        children: [
            (0, s.jsx)("div", {
                className: iz.R4,
                children:
                    null == n
                        ? (0, s.jsx)("img", {
                              className: iz.my,
                              src: iK.Ay.getDefaultAvatarURL(void 0, void 0),
                              alt: "",
                          })
                        : (0, s.jsx)(ik.A, { className: iz.my, user: n, size: iB._3.SIZE_16 }),
            }),
            (0, s.jsxs)("div", {
                className: iz.Pf,
                children: [
                    (0, s.jsx)(es.E, { className: iz.UU, variant: "text-sm/normal", color: "none", children: t.name }),
                    (0, s.jsx)(es.E, { variant: "text-sm/normal", color: "text-muted", children: "\u2022" }),
                    (0, s.jsx)(es.E, {
                        className: iz.vE,
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: (0, iF.aK)(l),
                    }),
                ],
            }),
        ],
    });
}
var iX = n(364522),
    iq = n(302959),
    iJ = n(35903),
    iZ = n(970928),
    i$ = n(427262),
    iQ = n(989628);
let i0 = nc.DN.SIZE_24;
function i1(e) {
    let { activity: t, embeddedApp: n } = e,
        l = t?.assets,
        i = t?.application_id;
    if (null == l || (null == l.large_image && null == l.small_image)) {
        let e = iK.Ay.getApplicationIconURL({ id: n.application.id, icon: n.application.icon }),
            t = n.application.name;
        return (0, s.jsx)(eg.m, {
            text: t,
            position: "top",
            asContainer: !0,
            children: (0, s.jsx)("img", { alt: t, src: e, className: iQ.P3 }),
        });
    }
    let r = l.large_image ?? l.small_image;
    return null != r
        ? (0, s.jsx)("img", { alt: l.large_text ?? "", src: (0, iZ.uD)(i, r, [128, 128]), className: iQ.P3 })
        : null;
}
function i2(e) {
    let { activity: t, embeddedApp: n, channel: l } = e,
        i = Array.from(n.embeddedActivity.userIds),
        r = (0, u.yK)([l7.default], () => i.map((e) => l7.default.getUser(e)).filter(tC.Vq));
    return (0, s.jsx)("div", {
        className: iQ.ec,
        children: (0, s.jsxs)("div", {
            className: iQ.Wh,
            children: [
                (0, s.jsx)(i1, { activity: t, embeddedApp: n }),
                (0, s.jsxs)("div", {
                    className: iQ.X0,
                    children: [
                        (0, s.jsx)(ei.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            className: iQ.wx,
                            lineClamp: 1,
                            children: n.application.name,
                        }),
                        t?.details != null &&
                            "" !== t.details &&
                            (0, s.jsx)(es.E, {
                                variant: "text-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.details,
                            }),
                        t?.state != null &&
                            "" !== t.state &&
                            (0, s.jsx)(es.E, {
                                variant: "text-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.state,
                            }),
                        i.length > 0 &&
                            (0, s.jsx)(nc.Ay, {
                                className: iQ.TN,
                                guildId: l.guild_id,
                                users: r,
                                size: i0,
                                max: 7,
                                renderUser: function (e) {
                                    if (null == e || e === nc.mt) return null;
                                    let t = i$.Ay.getName(e);
                                    return (0, s.jsx)(
                                        eg.m,
                                        {
                                            asContainer: !0,
                                            text: t,
                                            position: "bottom",
                                            children: (0, s.jsx)("img", {
                                                src: e.getAvatarURL(l.guild_id, i0),
                                                alt: t,
                                                className: iQ.my,
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
var i3 = n(237913);
function i9(e) {
    let { channel: t, presenceActivity: n, embeddedApp: l, onAction: i } = e,
        r = Array.from(l.embeddedActivity.userIds),
        a = (0, u.bG)([l7.default], () => l7.default.getUser(r[0]));
    return null == a
        ? null
        : (0, s.jsxs)("div", {
              className: i3.Eb,
              children: [
                  (0, s.jsx)("div", {
                      className: i3.Il,
                      children: (0, s.jsx)(i2, { activity: n, embeddedApp: l, channel: t }),
                  }),
                  (0, s.jsx)("div", {
                      className: i3.M4,
                      children: (0, s.jsx)(iJ.A, {
                          type: iq.M.VOICE_CHANNEL,
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
var i7 = n(713654),
    i5 = n(980248);
function i6(e) {
    let { channel: t } = e,
        n = (0, u.bG)([D.A], () => D.A.getGuild(t.guild_id)),
        l = (0, t3.Ay)(t),
        i = (0, i7.gU)(t, n);
    return null == i
        ? null
        : (0, s.jsxs)("div", {
              className: i5.hY,
              children: [
                  (0, s.jsx)(i, { className: i5.p }),
                  (0, s.jsx)(es.E, {
                      variant: "text-md/semibold",
                      color: "interactive-text-default",
                      className: i5.HA,
                      children: l,
                  }),
              ],
          });
}
var i8 = n(565449);
function i4(e) {
    let { channel: t, onAction: n } = e,
        l = (0, ic.Ay)(t),
        i = Array.from((0, ic.Rz)(l).values());
    return 0 === i.length
        ? null
        : (0, s.jsxs)(iX.Ip, {
              className: i8.kL,
              children: [
                  (0, s.jsx)("div", { className: i8.oT, children: (0, s.jsx)(i6, { channel: t }) }),
                  (0, s.jsx)("div", { className: i8.zN }),
                  i.map((e, l) =>
                      (0, s.jsx)(
                          i9,
                          { embeddedApp: e, presenceActivity: e.presenceActivity ?? void 0, channel: t, onAction: n },
                          l,
                      ),
                  ),
              ],
          });
}
class se extends nL {
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
        lx.A.preload(t ?? B.ME, e.id);
    };
    renderPopout = (e) => {
        let { channel: t, sorting: n, embeddedApps: l, channelIsContentGated: i } = this.props,
            { shouldShowActivities: r } = this.state;
        return t.isModeratorReportChannel() || i
            ? null
            : null != l && l.length > 0 && r && !n
              ? (0, s.jsx)(i4, { onAction: this.handleActivitiesPopoutClose, channel: t })
              : (0, s.jsx)(iW, { ...e, channel: this.props.channel });
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
            return void (0, tt.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("26132"),
                    n.e("46652"),
                    n.e("93190"),
                    n.e("91763"),
                    n.e("38730"),
                    n.e("47502"),
                    n.e("68530"),
                    n.e("80740"),
                    n.e("66378"),
                    n.e("17244"),
                    n.e("53416"),
                    n.e("60200"),
                ]).then(n.bind(n, 4027));
                return (n) => (0, s.jsx)(e, { ...n, channel: t, selected: !0 });
            });
        if (t.type === B.rbe.DM) {
            let l = l7.default.getUser(t.getRecipientId());
            null != l &&
                (0, tt.L3)(e, async () => {
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
                        n.e("80740"),
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
            return void (0, tt.L3)(e, async () => {
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
            (0, tt.L3)(e, async () => {
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
                    n.e("80740"),
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
        return null == e ? null : (0, s.jsx)("div", { className: eG.yW, children: e });
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
                isFavoriteSuggestion: g,
                subtitle: m,
                forceTopLevelThread: f,
                embeddedApps: p,
                resolvedUnreadSetting: C,
                enableActivities: E,
                showMenuItemPopover: x,
                markMenuItemPopoverAsDismissed: N,
                channelItemRef: _,
                isSuggestedSection: S,
            } = this.props,
            I = _ ?? this.channelItemRef,
            b = !x && a,
            G = !x && E && null != p && p.length > 0,
            R = iU(m),
            v = (0, s.jsxs)("li", {
                className: eq()(this.getClassName(), { [eG.r9]: this.isDisabled(), [eG.wH]: n }),
                "data-dnd-name": (0, t3.m1)(e, l7.default, id.A),
                onMouseEnter: b || G ? this.handleMouseEnter : void 0,
                onMouseLeave: b || G ? this.handleMouseLeave : void 0,
                children: [
                    (0, s.jsx)(lz.Y, {
                        targetElementRef: I,
                        position: "right",
                        renderPopout: this.renderPopout,
                        onRequestClose: this.handleClosePopout,
                        spacing: 17,
                        shouldShow: (b && this.state.shouldShowThreadsPopout) || (G && this.state.shouldShowActivities),
                        children: () =>
                            (0, s.jsxs)(nT.Ay, {
                                ref: this.setChannelItemRef,
                                className: eG.Ki,
                                channel: e,
                                guild: t,
                                selected: !g && n,
                                muted: l,
                                unread: i,
                                mentionCount: o,
                                hasActiveThreads: r,
                                subtitle: R?.subtitle,
                                subtitleColor: R?.color,
                                onMouseDown: this.handleMouseDown,
                                onContextMenu: this.handleContextMenu,
                                connectDragPreview: h ? u : null,
                                isFavoriteSuggestion: g,
                                channelTypeOverride: f ? B.rbe.GUILD_TEXT : void 0,
                                resolvedUnreadSetting: C,
                                transitionExtras: S ? { source: ie.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
                                "aria-label": (0, lX.Ay)({
                                    channel: e,
                                    unread: i,
                                    mentionCount: o,
                                    isSubscriptionGated: A,
                                    embeddedActivitiesCount: p?.length,
                                }),
                                children: [
                                    g &&
                                        (0, s.jsxs)(s.Fragment, {
                                            children: [
                                                this.renderAcceptSuggestionButton(),
                                                this.renderRemoveSuggestionButton(),
                                            ],
                                        }),
                                    !g &&
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
                    x && (0, s.jsx)(iD.A, { targetElementRef: I, markMenuItemPopoverAsDismissed: N }),
                ],
            });
        return h ? d(c(v)) : v;
    }
}
let st = Z(se);
function sn(e) {
    let { channel: t, guild: n, disableSorting: l, isFavoriteCategory: i, muted: a, selected: o } = e,
        { hasActiveThreads: d, hasMoreActiveThreads: c } = (0, lS.NR)(t),
        h = (0, u.cf)([n5.Ay], () => ({
            unread: n5.Ay.hasUnread(t.id),
            ackMessageId: n5.Ay.ackMessageId(t.id),
            isLowImportanceMention: n5.Ay.getIsMentionLowImportance(t.id),
        })),
        A = (0, u.bG)([V.Ay], () => V.Ay.resolveUnreadSetting(t)),
        g = (0, u.cf)([L.A, O.A], () => {
            let e = L.A.getChannel(t.parent_id);
            return {
                canManageChannel: O.A.can(B.xBc.MANAGE_CHANNELS, t),
                canReorderChannel:
                    !0 !== l &&
                    ((0, v.ai)(n.id) ||
                        (null != e ? O.A.can(B.xBc.MANAGE_CHANNELS, e) : O.A.can(B.xBc.MANAGE_CHANNELS, n))),
            };
        }),
        m = (0, u.bG)([n7.A], () => n7.A.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: f, isSubscriptionGated: p } = (0, l_.A)(t.id),
        C = (0, u.bG)([V.Ay], () => V.Ay.isFavorite(n.id, t.id)),
        E = (0, iT.ni)(t),
        x = (0, iL.Gp)(t.id),
        N = iS({
            channel: t,
            isChannelCollapsed: !1,
            isChannelSelected: o,
            isSubscriptionGated: p,
            needSubscriptionToAccess: f,
            isNewChannel: m,
            muted: a,
            enableActivities: x,
            resolvedUnreadSetting: A,
        }),
        _ = (0, ic.Ay)(t),
        [S, I] = r.useState(!1),
        b = (0, iM.K)(
            r.useCallback((e) => {
                I(e);
            }, []),
        ),
        { showMenuItemPopover: G, markMenuItemPopoverAsDismissed: R } = (0, iO.B)({
            isChannelSelected: o,
            isTargetInViewport: S,
            channelType: t.type,
            isPopoverAllowed: !(0, v.ai)(n.id),
        });
    return (0, u.bG)([iV.A, iP.Ay], () => iV.A.getChannelId() !== t.id && iP.Ay.isCurrentUserGuest(t.getGuildId()))
        ? null
        : (0, s.jsx)(st, {
              ...h,
              ...g,
              ...e,
              hasActiveThreads: d,
              hasMoreActiveThreads: c,
              isSubscriptionGated: p,
              needSubscriptionToAccess: f,
              isNewChannel: m && e.canBeNewChannel,
              isFavoriteSuggestion: i && !C,
              channelIsContentGated: E,
              channelInfo: N,
              embeddedApps: _,
              resolvedUnreadSetting: A,
              hasChannelInfo: null != N,
              enableActivities: x,
              showMenuItemPopover: G,
              markMenuItemPopoverAsDismissed: R,
              channelItemRef: b,
          });
}
var sl = n(900797),
    si = n(636585),
    ss = n(531685),
    sr =
        (((i = {}).HIDDEN = "hidden"),
        (i.UNREAD = "unread"),
        (i.MENTIONS = "mentions"),
        (i.VOICE_CHANNELS = "voice-channels"),
        i);
let sa = { mode: "hidden", mentionCount: 0, targetChannelId: null },
    so = { topBar: sa, bottomBar: sa },
    sd = {},
    sc = {};
function su(e) {
    let t = L.A.getChannel(e);
    return (
        !(null == t || null == t.getGuildId() || t.isGuildVocal()) &&
        !(t.isThread() ? ly.A.isMuted(t.id) : V.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, tm.Y)(t)
    );
}
function sh(e) {
    let t = L.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let l = V.Ay.isGuildCollapsed(n),
        i = V.Ay.isChannelMuted(n, t.id);
    return (!l || !i) && n5.Ay.getMentionCount(e) > 0;
}
function sA(e) {
    return (
        !V.Ay.isChannelMuted(e.guild_id, e.id) &&
        (e.isGuildStageVoice()
            ? tN.A.getMutableParticipants(e.id, t_.ip.SPEAKER).length > 0
            : tp.Ay.getVoiceStatesForChannel(e).length > 0)
    );
}
function sg(e) {
    let { guildChannels: t } = tj.A.getGuildWithoutChangingGuildActionRows(e),
        n = t.getChannels(sc[e] ?? []);
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
        [A, g, m] = t.getSlicedChannels(n);
    for (let e = 0; e < g.length; e++) {
        let t = g[e];
        if (
            ((su(t.id) || o().some(t.threadIds, su)) && (d = !1),
            (sh(t.id) || o().some(t.threadIds, sh)) && (a = !1),
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
            (su(t.id) || o().some(t.threadIds, su)) && (null == i && (i = t.id), (p = !0)),
                (sh(t.id) || o().some(t.threadIds, sh)) &&
                    (null == l && (l = t.id),
                    (f += n5.Ay.getMentionCount(t.id)),
                    (f += o().sumBy(t.threadIds, n5.Ay.getMentionCount)));
        }
    if (d || a)
        for (let e = 0; e < m.length; e++) {
            let t = m[e];
            if (!d && !a) break;
            (su(t.id) || o().some(t.threadIds, su)) && (null == r && (r = t.id), (E = !0)),
                (sh(t.id) || o().some(t.threadIds, sh)) &&
                    (null == s && (s = t.id),
                    (C += n5.Ay.getMentionCount(t.id)),
                    (C += o().sumBy(t.threadIds, n5.Ay.getMentionCount)));
        }
    let x = null,
        N = null,
        _ = u?.getChannelRecords() ?? [];
    a && C > 0
        ? (x = { mode: "mentions", mentionCount: C, targetChannelId: s })
        : !c && o().some(_, sA)
          ? (x = { mode: "voice-channels", mentionCount: 0, targetChannelId: null })
          : d && E && (x = { mode: "unread", mentionCount: 0, targetChannelId: r }),
        a && f > 0
            ? (N = { mode: "mentions", mentionCount: f, targetChannelId: l })
            : d && p && (N = { mode: "unread", mentionCount: 0, targetChannelId: i });
    let S = null != N && (null == x || ("mentions" !== x.mode && "mentions" === N.mode)),
        I = null != x && ("mentions" === x.mode || !S);
    return (sd[e] = { topBar: S ? (N ?? sa) : sa, bottomBar: I ? (x ?? sa) : sa }), !0;
}
let sm = o().throttle(sg, 200);
function sf(e) {
    let { guildId: t } = e,
        n = D.A.getGuild(t);
    return null != n && !!n.features.has(B.GuildFeatures.COMMUNITY) && sm(t);
}
function sp(e) {
    let { id: t } = e,
        n = L.A.getChannel(t);
    if (null == n) return !1;
    let l = D.A.getGuild(n.guild_id);
    return null != l && !!l.features.has(B.GuildFeatures.COMMUNITY) && sm(n.guild_id);
}
function sC(e) {
    let { channel: t } = e,
        n = L.A.getChannel(t.id);
    if (null == n) return !1;
    let l = D.A.getGuild(t.guild_id);
    return null != l && !!l.features.has(B.GuildFeatures.COMMUNITY) && sm(n.guild_id);
}
function sE(e) {
    let { channelId: t } = e,
        n = L.A.getChannel(t);
    if (null == n) return !1;
    let l = D.A.getGuild(n.guild_id);
    return (
        null != l && !!l.features.has(B.GuildFeatures.COMMUNITY) && P.A.getGuildId() === n.guild_id && sm(n.guild_id)
    );
}
function sx(e) {
    let { guildId: t } = e;
    return null != t && sm(t);
}
class sN extends u.Ay.Store {
    static displayName = "ChannelListUnreadsStore";
    initialize() {
        this.waitFor(tj.A, L.A, D.A, ly.A, n5.Ay, P.A, tp.Ay, tN.A, V.Ay);
    }
    getUnreadStateForGuildId(e) {
        return sd[e] ?? so;
    }
}
let s_ = new sN(tl.h, {
    UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
        let { guildId: t, channelIds: n } = e,
            l = D.A.getGuild(t);
        return (
            null != l &&
            !!l.features.has(B.GuildFeatures.COMMUNITY) &&
            null != n &&
            !o().isEqual(sc[t], n) &&
            ((sc[t] = n), sg(t))
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
                .filter(tC.Vq)
                .uniq()
                .forEach((e) => {
                    let t = D.A.getGuild(e);
                    null != t && t.features.has(B.GuildFeatures.COMMUNITY) && sm(e) && (n = !0);
                }),
            n
        );
    },
    CHANNEL_ACK: sE,
    CHANNEL_DELETE: sC,
    CHANNEL_LOCAL_ACK: sE,
    MESSAGE_ACK: sE,
    MESSAGE_CREATE: sE,
    MESSAGE_DELETE_BULK: sE,
    MESSAGE_DELETE: sE,
    PASSIVE_UPDATE_V2: function (e) {
        let t = D.A.getGuild(e.guildId);
        return !!(e.channels.length > 0 && null != t && t.features.has(B.GuildFeatures.COMMUNITY)) && sm(e.guildId);
    },
    RESORT_THREADS: sE,
    THREAD_CREATE: sC,
    THREAD_DELETE: sC,
    THREAD_LIST_SYNC: sf,
    THREAD_MEMBER_UPDATE: sp,
    THREAD_MEMBERS_UPDATE: sp,
    THREAD_UPDATE: sC,
    BULK_CLEAR_RECENTS: sf,
    CATEGORY_COLLAPSE_ALL: sf,
    CATEGORY_EXPAND_ALL: sf,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = P.A.getGuildId();
        if (null == n || !new Set(t.map((e) => e.guildId)).has(n)) return !1;
        let l = sd[n];
        return null != l && "voice-channels" === l.bottomBar.mode && sm(n);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: sx,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: sx,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        for (let e of t) null != e.guild_id && sm(e.guild_id);
    },
    USER_GUILD_SETTINGS_GUILD_UPDATE: sx,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: sx,
});
var sS = n(168799);
let sI = { friction: 30, tension: 300 };
function sb(e) {
    let { guildChannels: t, jumpToVoiceChannels: n } = e,
        l = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
        i = (0, u.bG)([tp.Ay], () => tp.Ay.getVoiceStates(t.id), [t.id]),
        a = r.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), n();
            },
            [n],
        ),
        o = l?.getChannelRecords() ?? [],
        d = (0, nA.fK)({ channels: o, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: i });
    return (0, s.jsxs)(em.D, {
        className: eq()(sS.M0, sS.OF),
        onClick: a,
        children: [
            (0, s.jsx)(ea.H, { size: "custom", className: sS.Gs, width: 14, height: 14, color: "currentColor" }),
            (0, s.jsx)(es.E, {
                variant: "text-xs/semibold",
                className: sS.pM,
                children: ec.intl.format(ec.t["fDlr+F"], { count: d.length }),
            }),
            (0, s.jsx)(si.A, {
                guildId: t.id,
                className: sS.J$,
                users: d.slice(0, 4),
                renderMoreUsers: () => null,
                max: 4,
                size: iB._3.SIZE_16,
            }),
        ],
    });
}
function sG(e) {
    let { position: t, guildChannels: n, guildChannelsVersion: l, jumpToVoiceChannels: i, jumpToChannel: a } = e,
        { bottomBar: o, topBar: d } = (0, u.cf)([s_], () => s_.getUnreadStateForGuildId(n.id)),
        c = (0, u.bG)([ss.A], () => ss.A.isFocused()),
        { mode: h, mentionCount: A, targetChannelId: g } = "bottom" === t ? o : d,
        m = h === sr.HIDDEN,
        f = (0, te.z)(
            {
                to: { transform: m ? ("bottom" === t ? "translateY(180%)" : "translateY(-180%)") : "translateY(0%)" },
                config: sI,
            },
            c ? "respect-motion-settings" : "animate-never",
        ),
        p = r.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), null != g && a(g);
            },
            [a, g],
        );
    return (0, s.jsx)("div", {
        className: eq()(sS.kL, { [sS.Mn]: "top" === t, [sS.sQ]: "bottom" === t }),
        children: (0, s.jsx)(e4.animated.div, {
            className: sS.pK,
            style: f,
            "aria-hidden": m,
            children: (function () {
                switch (h) {
                    case sr.HIDDEN:
                        return (0, s.jsx)("div", { className: eq()(sS.M0, sS.Te) });
                    case sr.UNREAD:
                        return (0, s.jsxs)(em.D, {
                            className: sS.M0,
                            onClick: p,
                            children: [
                                "bottom" === t
                                    ? (0, s.jsx)(t0.a, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: sS.z_,
                                          height: 14,
                                          width: 14,
                                      })
                                    : (0, s.jsx)(sl.t, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: sS.z_,
                                          height: 14,
                                          width: 14,
                                      }),
                                (0, s.jsx)(es.E, {
                                    variant: "text-xs/semibold",
                                    color: "interactive-text-default",
                                    className: sS.pM,
                                    children: ec.intl.string(ec.t.FCRiT3),
                                }),
                            ],
                        });
                    case sr.MENTIONS:
                        return (0, s.jsx)(em.D, {
                            className: eq()(sS.M0, sS.vU),
                            onClick: p,
                            children: (0, s.jsx)(es.E, {
                                variant: "text-xs/semibold",
                                color: "badge-text-brand",
                                className: sS.pM,
                                children: ec.intl.format(ec.t.EQcLyp, { count: A }),
                            }),
                        });
                    case sr.VOICE_CHANNELS:
                        return (0, s.jsx)(sb, { jumpToVoiceChannels: i, guildChannels: n, guildChannelsVersion: l });
                    default:
                        return;
                }
            })(),
        }),
    });
}
var sR = n(310953),
    sv = n(173860);
function sj(e) {
    let t = L.A.getChannel(e);
    return (
        null != t &&
        null != t.getGuildId() &&
        !(t.isThread() ? ly.A.isMuted(t.id) : V.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, tm.Y)(t)
    );
}
function sy(e) {
    let t = L.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let l = V.Ay.isGuildCollapsed(n),
        i = V.Ay.isChannelMuted(n, t.id);
    return (!l || !i) && n5.Ay.getMentionCount(e) > 0;
}
let sM = r.forwardRef(function (e, t) {
    let { guildId: n, guildChannels: l, guildChannelsVersion: i, ...r } = e,
        a = (0, sR.W)(n, l, i, { withVoiceChannels: !1 }, { ignoreRecents: !0 }),
        o = (0, u.bG)([ss.A], () => ss.A.isFocused());
    return (0, s.jsx)(sv.A, { ref: t, ...r, isUnread: sj, isMentioned: sy, items: a, animate: o });
});
var sL = n(81466);
function sT(e) {
    let { guild: t, selected: l } = e,
        { hasUnread: i, mentionCount: r } = (0, u.cf)(
            [n5.Ay],
            () => ({
                hasUnread: n5.Ay.hasUnread(t.id, nU.P.GUILD_EVENT),
                mentionCount: n5.Ay.getMentionCount(t.id, nU.P.GUILD_EVENT),
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
            (0, n2.Dr)(eA.M.GUILD_HEADER_EVENT_UPSELL);
    }
    let d = (0, tF.Ay)(t.id),
        c = d.length > 0 ? ec.intl.formatToPlainString(ec.t.IBdqSu, { number: d.length }) : ec.intl.string(ec.t.tlopTM);
    return (0, s.jsx)(ex.G, {
        id: `upcoming-events-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(sL.C, { size: "md", color: "currentColor", className: e }),
        text: c,
        selected: l,
        onClick: o,
        onContextMenu: function (e) {
            (0, tt.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("26386"), n.e("19990")]).then(n.bind(n, 221621));
                return (n) => (0, s.jsx)(e, { ...n, guildId: t.id });
            });
        },
        showUnread: i && !a,
        trailing: !a && r > 0 ? (0, s.jsx)(ep.hV, { className: n$.Do, disableColor: !0, count: r }) : null,
    });
}
var sU = n(152367),
    sD = n(972786),
    sO = n(20386),
    sP = n(309010),
    sV = n(818085);
function sw(e) {
    let { guild: t, selected: n } = e,
        l = (0, u.bG)([sD.A], () => sD.A.getSelectedProjectId(t.id), [t.id]),
        i = (0, u.bG)([sP.Ay], () => sP.Ay.getChannelId(), []),
        r = (0, u.bG)([P.A], () => P.A.getGuildId(), []);
    return (0, s.jsx)(ex.G, {
        id: `vibegrations-${t.id}`,
        renderIcon: (e) =>
            (0, s.jsx)(sU.D, { size: "custom", color: "currentColor", width: 20, height: 20, className: e }),
        text: ec.intl.string(sV.default.Xmvb23),
        selected: n,
        trailing: (0, s.jsx)(sO.iT, { guildId: t.id }),
        onClick: () => {
            let e = i === e_.VV.VIBEGRATIONS && r === t.id;
            (0, eN.pX)(B.BVt.CHANNEL(t.id, e_.VV.VIBEGRATIONS, null == l || e ? null : l));
        },
    });
}
var sH = n(845056),
    sB = n(765379),
    sk = n(271683),
    sF = n(725613),
    sK = n(857253),
    sz = n(360729),
    sW = n(22231),
    sY = n(241326),
    sX = n(750943),
    sq = n(743674),
    sJ = n(888697),
    sZ = n(26741),
    s$ = n(493819),
    sQ = n(722884),
    s0 = n(844045),
    s1 = n(52102);
function s2(e) {
    let { channel: t, imageUrl: l, animatedUrl: i, bannerHash: a, canModifyHangout: o } = e,
        d = (0, sq.S)(l),
        c = (0, eK.je)(t),
        u = (0, sZ.P9)({ guildId: t.guild_id, channelId: t.id, bannerHash: a }),
        h = r.useCallback(() => {
            (0, sZ.J_)({ guildId: t.guild_id, channelId: t.id }), (0, sQ.A)({ channel: t });
        }, [t]),
        A = r.useCallback(() => {
            (0, sZ.nK)({ guildId: t.guild_id, channelId: t.id }), (0, sJ.e2)(t.id);
        }, [t.guild_id, t.id]),
        g = r.useCallback(
            (e) => {
                c
                    ? (0, tt.L3)(e, async () => {
                          let { default: e } = await n.e("55558").then(n.bind(n, 316421));
                          return (n) => (0, s.jsx)(e, { ...n, channel: t });
                      })
                    : e.preventDefault();
            },
            [t, c],
        );
    return (0, s.jsxs)("div", {
        ref: u,
        className: s1.rs,
        onContextMenu: g,
        children: [
            (0, s.jsx)("div", {
                className: s1.ZS,
                style: null != d ? { backgroundColor: d } : void 0,
                children: (0, s.jsx)(s$.A, { imageUrl: l, animatedUrl: i, className: s1.Sl }),
            }),
            o
                ? (0, s.jsxs)("div", {
                      className: s1.n_,
                      children: [
                          (0, s.jsx)(eg.m, {
                              text: ec.intl.string(s0.default.XJ4UpB),
                              children: (0, s.jsx)(em.D, {
                                  className: s1.HF,
                                  onClick: h,
                                  children: (0, s.jsx)(sW.R, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                          (0, s.jsx)(eg.m, {
                              text: ec.intl.string(s0.default.XV4qT6),
                              children: (0, s.jsx)(em.D, {
                                  className: s1.HF,
                                  onClick: A,
                                  children: (0, s.jsx)(sY.u, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function s3(e) {
    let { channel: t } = e,
        n = (0, sZ.dX)({ guildId: t.guild_id, channelId: t.id }),
        l = r.useCallback(() => {
            (0, sZ.J_)({ guildId: t.guild_id, channelId: t.id }), (0, sQ.A)({ channel: t });
        }, [t]);
    return (0, s.jsx)("div", {
        ref: n,
        className: s1._o,
        children: (0, s.jsxs)(em.D, {
            className: s1.hH,
            onClick: l,
            children: [
                (0, s.jsx)(sX.X, { size: "xs", color: "currentColor" }),
                (0, s.jsx)(es.E, {
                    variant: "text-sm/medium",
                    color: "currentColor",
                    children: ec.intl.string(s0.default.NGcIOF),
                }),
            ],
        }),
    });
}
function s9(e) {
    let { channel: t, isConnected: n } = e,
        { enableHangoutWindow: l } = (0, eF.Dm)({ guildId: t.guild_id, location: "HangoutWindow" }),
        i = (0, eK.W6)(t),
        a = n && i,
        o = t.voiceHangout,
        d = o?.banner_hash,
        c = r.useMemo(() => {
            if (null == d || null == t.guild_id) return null;
            let e = (0, eK.Sq)({ guildId: t.guild_id, bannerHash: d });
            return null == e ? null : { bannerHash: d, ...e };
        }, [t.guild_id, d]);
    return l
        ? null != c
            ? (0, s.jsx)(s2, {
                  channel: t,
                  imageUrl: c.imageUrl,
                  animatedUrl: c.animatedUrl,
                  bannerHash: c.bannerHash,
                  canModifyHangout: a,
              })
            : a
              ? (0, s.jsx)(s3, { channel: t })
              : null
        : null;
}
var s7 = n(290863),
    s5 = n(461213),
    s6 = n(532622),
    s8 = n(882840),
    s4 = n(208971),
    re = n(46054),
    rt = n(500216),
    rn = n(742715);
function rl(e) {
    let { channel: t, connected: n, hovered: l, subtitle: i, onClick: a } = e,
        o = (0, s4.G)((0, s8.l)(t)),
        { enableHangoutWindow: d } = (0, eF.Dm)({ guildId: t.guild_id, location: "VoiceChannelStatus" }),
        c = d && (0, eK.lr)(t),
        u = null != o && o.length > 0,
        h = (0, s6.Ay)(t, !0),
        A = null != i && i.length > 0;
    if (
        (r.useEffect(() => {
            u && lm.default.track(B.HAw.VOICE_CHANNEL_TOPIC_VIEWED, { channel_id: t.id, guild_id: t.guild_id });
        }, [u, t.id, t.guild_id]),
        null == t.guild_id)
    )
        return null;
    let g = eq()(rt.Ui, n && h ? rt.BI : null);
    return u
        ? (0, s.jsx)(em.D, {
              className: g,
              onClick: h ? a : void 0,
              children: (0, s.jsx)(es.E, {
                  variant: "text-xs/medium",
                  className: eq()(rt.qS, rn.PT),
                  children: (0, s.jsx)(tJ.A, { children: re.A.parseVoiceChannelStatus(o, !0, { channelId: t.id }) }),
              }),
          })
        : n && h && !c && (!A || l)
          ? (0, s.jsxs)(em.D, {
                className: g,
                onClick: a,
                children: [
                    (0, s.jsx)(es.E, {
                        variant: "text-xs/medium",
                        className: rt.qS,
                        children: ec.intl.string(ec.t.Mgpxiw),
                    }),
                    (0, s.jsx)(sW.R, { color: "currentColor", className: rt.rD, size: "xxs" }),
                ],
            })
          : A
            ? (0, s.jsx)(tJ.A, { children: i })
            : null;
}
class ri extends nL {
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
        o && lW.A.updateChatOpen(n.id, !0),
            lN.A.handleVoiceConnect({
                channel: n,
                connected: t,
                needSubscriptionToAccess: i,
                routeDirectlyToChannel: o || a,
                locked: e,
                transitionExtras: r ? { source: ie.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
            });
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            l = D.A.getGuild(t.getGuildId());
        null != l &&
            (0, tt.L3)(e, async () => {
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
                    n.e("80740"),
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
        return (0, nA.Pd)(e, lb.A, D.A);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return eG.ZS;
        if (null != t)
            if (e > t) return eG.mU;
            else return eG.TR;
        return eG.fx;
    }
    handleClick = () => {
        let { channel: e } = this.props,
            t = e.getGuildId();
        null != t && (0, lJ.V)(t) && (0, lq.Ze)(t), this.handleVoiceConnect();
    };
    handleVoiceStatusClick = (e) => {
        let { connected: t, channel: n } = this.props;
        t && (e.stopPropagation(), (0, sk.A)({ channel: n }));
    };
    renderSubtitle() {
        let { channel: e, connected: t } = this.props,
            n = iU(this.props.subtitle)?.subtitle,
            { hovered: l } = this.state;
        return (0, s.jsx)(rl, {
            onClick: this.handleVoiceStatusClick,
            channel: e,
            connected: t,
            subtitle: n,
            hovered: l,
        });
    }
    renderVoiceUsers() {
        let { channel: e, voiceStates: t, collapsed: n, withGuildIcon: l, tabIndex: i } = this.props;
        return (0, s.jsx)(lw.A, {
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
        return !(null != n && n.length > 0) || l ? null : (0, s.jsx)(s9, { channel: e, isConnected: t });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        return t
            ? (0, s.jsx)(l4, { type: l8.VOICE, guildId: e.guild_id, closePopout: this.closeGuildVerificationPopout })
            : null;
    };
    renderOpenChatButton = () => {
        let { channel: e, locked: t, forceShowButtons: n, isSuggestedSection: l } = this.props;
        if (!t)
            return (0, s.jsx)(eg.m, {
                asContainer: !0,
                text: ec.intl.string(ec.t.ZXxLQg),
                children: (0, s.jsx)(em.D, {
                    className: eq()(eG.Xs, n ? eG.Tf : null),
                    onClick: () => {
                        lW.A.updateChatOpen(e.id, !0),
                            (0, it.iN)(e.id, l ? { source: ie.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
                    },
                    "aria-label": ec.intl.string(ec.t.ZXxLQg),
                    children: (0, s.jsx)(eo.o, { size: "xs", color: "currentColor", className: eG.gE }),
                }),
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, s.jsx)("div", { className: eG.yW, children: e });
    }
    getTooltipText = () => {
        let { connected: e } = this.props;
        return this.isFull() && !e ? ec.intl.string(ec.t.rZfiNq) : null;
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
                showTutorial: g,
                hasActiveEvent: m,
                embeddedApps: f,
                isSubscriptionGated: p,
                isFavoriteSuggestion: C,
                withGuildIcon: E,
                hasStartTime: x,
                voiceChannelStartTime: N,
                shouldHighlightChannel: _,
                shouldUseAnimatedWaveform: S,
                voiceStates: I,
            } = this.props,
            { shouldShowGuildVerificationPopout: b } = this.state,
            G = _ || S,
            R = (0, s.jsxs)("li", {
                ref: this.ref,
                className: eq()(this.getModeClass(), { [eG.r9]: this.isDisabled(), [eG.fy]: _ }),
                "data-dnd-name": (0, t3.m1)(e, l7.default, id.A),
                children: [
                    _ &&
                        (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsx)("div", { className: eG.UQ }),
                                (0, s.jsx)("div", { className: eG.l0 }),
                            ],
                        }),
                    (0, s.jsx)("div", {
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: (0, s.jsx)(lz.Y, {
                            targetElementRef: this.channelItemRef,
                            position: "right",
                            renderPopout: this.renderPopout,
                            onRequestClose: this.closeGuildVerificationPopout,
                            spacing: 17,
                            shouldShow: b,
                            children: () =>
                                (0, s.jsx)(eg.m, {
                                    text: this.getTooltipText(),
                                    children: (0, s.jsxs)(nT.Ay, {
                                        ref: this.channelItemRef,
                                        className: eG.Ki,
                                        iconClassName: eq()({ [eG.Gj]: m || x || G }),
                                        hasActiveEvent: m,
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
                                        "aria-label": (0, lX.Ay)({
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
                                            voiceChannelStartTime: N,
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
            g &&
                (R = (0, s.jsx)(ns.A, {
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
let rs = Z((0, lY.F)(ri));
function rr(e) {
    let {
            guild: t,
            channel: n,
            disableSorting: l,
            isFavoriteCategory: i,
            selected: r,
            collapsed: a,
            voiceStates: o,
        } = e,
        d = (0, u.cf)([n5.Ay], () => ({ unread: n5.Ay.hasUnread(n.id), mentionCount: n5.Ay.getMentionCount(n.id) })),
        c = (0, u.bG)([V.Ay], () => V.Ay.resolveUnreadSetting(n)),
        h = (0, u.cf)([L.A, l9.A, O.A], () => {
            let e = L.A.getChannel(n.parent_id),
                i = l9.A.getCheck(n.guild_id);
            return {
                canManageChannel: O.A.can(B.xBc.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== l &&
                    ((0, v.ai)(t.id) ||
                        (null != e ? O.A.can(B.xBc.MANAGE_CHANNELS, e) : O.A.can(B.xBc.MANAGE_CHANNELS, t))),
                canMoveMembers: O.A.can(B.xBc.MOVE_MEMBERS, n),
                locked: !O.A.can(B.xBc.CONNECT, n),
                bypassLimit: O.A.can(B.xBc.MOVE_MEMBERS, n),
                unverifiedAccount: !i.canChat,
            };
        }),
        A = (0, u.bG)([lb.A], () => lb.A.hasVideo(n.id)),
        { enabled: g } = sz.A.useExperiment({ guildId: t.id, location: "VoiceChannel" }),
        m = (0, ic.Ay)(n),
        f = (0, u.yK)([s5.A, s7.A, ir.default], () => {
            if (null == o || 0 === o.length) return [];
            let e = ir.default.getId(),
                t = [];
            for (let { user: l } of o)
                for (let i of l.id === e ? s5.A.getActivities() : s7.A.getActivities(l.id, n.guild_id))
                    !(0, sH.N)(i) || (0, sB.A)(i) || null == i.name || t.includes(i.name) || t.push(i.name);
            return t;
        }, [o, n.guild_id]),
        p = (0, t3.Ay)(n),
        C = (0, tF.Qs)(n.id),
        E = (0, u.bG)([sF.A], () => sF.A.getStartTime(n), [n]),
        { isSubscriptionGated: x, needSubscriptionToAccess: N } = (0, l_.A)(n.id),
        _ = (0, sK.A)(),
        S = (0, u.bG)([V.Ay], () => V.Ay.isFavorite(t.id, n.id)),
        I = e.connected || _?.channelId === n.id,
        { enableHighlight: b, enableWaveformIcon: G } = (0, nu.b)(t.id, "VoiceChannel"),
        R = null != o && o.length > 0,
        j = b && R,
        y = G && R,
        M = iS({
            channel: n,
            isChannelSelected: r,
            isChannelCollapsed: a,
            voiceStates: o,
            isSubscriptionGated: x,
            needSubscriptionToAccess: N,
            enableConnectedUserLimit: !0,
            enableActivities: !0,
        }),
        T = I && null == M;
    return (0, s.jsx)(rs, {
        channelName: p,
        embeddedApps: m,
        nonEmbeddedActivityNames: f,
        embeddedActivityType: B.$pd.PLAYING,
        video: A,
        hasActiveEvent: null != C,
        isSubscriptionGated: x,
        needSubscriptionToAccess: N,
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
        shouldHighlightChannel: j,
        shouldUseAnimatedWaveform: y,
        guildRoomsEnabled: g,
    });
}
n(131955);
function ra(e) {
    return (
        h.A.modules.channels.NAME_LINE_HEIGHT.resolve({ density: e }) +
        2 * h.A.space.SPACE_XXS.resolve({ density: e }) +
        2
    );
}
class ro extends r.PureComponent {
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
        this.setState({ initialized: !0 }), (0, ty.Ei)(this.getVisibleChannels);
    }
    componentWillUnmount() {
        this.updateChannelListScroll.cancel();
    }
    componentDidUpdate(e, t) {
        let { scrollToChannel: n, guildId: l, selectedChannelId: i } = this.props,
            { initialized: s } = this.state,
            { scrollTop: r } = tR.A.getGuildDimensions(l);
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
                    a = s.threadOffset * ra(r);
                i.scrollIntoViewRect({ start: e + a, end: e + a + ra(r), padding: n, animate: t, callback: l });
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
                if (l < tv.bK || e.isPlaceholderRow(l, i)) return !1;
                let s = e.getChannelFromSectionRow(l, i);
                if (null == s) return !1;
                let { channel: r, category: a } = s;
                return (
                    !!(0, w.ig)(r.record.type) &&
                    (!a.isCollapsed || !a.isMuted) &&
                    !r.isMuted &&
                    !!t.isItemVisible(l, i, !0) &&
                    (0, tm.Y)(r.record)
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
        if (e === tv.PU) return i;
        if (e === tv.bK) return t.features.has(B.GuildFeatures.HUB) ? 0 : i;
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
            let { hasDivider: d, canHaveVoiceSummary: c } = ng(n, r, t),
                u = d ? (a ? 9 : 12) : 0;
            if (!c || t === tv.PU) return u;
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
            a = ra(r);
        if (e === tv.PU) {
            let e = n.getGuildActionSection();
            return e.isEmpty()
                ? 0
                : e.getRow(t) === tq.n.GUILD_PREMIUM_PROGRESS_BAR
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
            a += ra(t);
            let n = l[d.id];
            null != n && n.length > 0 && (a += s === e ? 32 * n.length : 32);
        }
        if (d.record.isGuildVoice()) {
            let e = l[d.id];
            if (null != e && e.length > 0) {
                let t = 32 * e.length;
                if (
                    (d.isCollapsed || c.isCollapsed ? (t = 32) : (0, eW.Ln)(d.record) && (t += 32),
                    (a += t + h.A.space.SPACE_XS.resolve({ density: r })),
                    !d.isCollapsed && !c.isCollapsed)
                ) {
                    let { enableHangoutWindow: e } = (0, eF.kY)({
                        guildId: d.record.guild_id,
                        location: "ChannelList",
                    });
                    e && ((0, eK.lr)(d.record) ? (a += 134) : s === d.id && (a += 44));
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
        null != n && s.includes(n) && (i = (0, eY.xb)(t)), (0, eY.DD)(e.id, s, i);
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
            nd,
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
                    case tv.PU:
                        return "hoisted-spacer";
                    case tv.bK:
                        return "uncategorized-spacer";
                    case tv.HP:
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
                optInEnabled: g,
                withGuildIcon: m,
            } = this.props;
        if (t === tv.PU) {
            let e = c.getGuildActionSection(),
                t = e.getRow(n);
            if (null == t) return null;
            switch (t) {
                case tq.n.GUILD_HUB_HEADER_OPTIONS:
                    return (0, s.jsx)(
                        ez.A,
                        { guild: l, channel: U.Ay.getDefaultChannel(l.id) },
                        tq.n.GUILD_HUB_HEADER_OPTIONS,
                    );
                case tq.n.GUILD_PREMIUM_PROGRESS_BAR:
                    let i = e.getRows();
                    return (0, s.jsx)(tg, { guild: l, withMargin: i.length > 1 }, tq.n.GUILD_PREMIUM_PROGRESS_BAR);
                case tq.n.GUILD_SPACE:
                    return (0, s.jsx)(ek, { guild: l, selected: a === e_.VV.GUILD_SPACE }, tq.n.GUILD_SPACE);
                case tq.n.GUILD_HOME:
                    return (0, s.jsx)(n4, { guild: l, selected: a === e_.VV.GUILD_HOME }, tq.n.GUILD_HOME);
                case tq.n.GUILD_SCHEDULED_EVENTS:
                    return (0, s.jsx)(
                        sT,
                        { guild: l, selected: a === tq.n.GUILD_SCHEDULED_EVENTS },
                        tq.n.GUILD_SCHEDULED_EVENTS,
                    );
                case tq.n.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, s.jsx)(
                        lo,
                        { guild: l, selected: a === e_.VV.ROLE_SUBSCRIPTIONS },
                        tq.n.GUILD_ROLE_SUBSCRIPTIONS,
                    );
                case tq.n.GUILD_SHOP:
                    return (0, s.jsx)(lE, { guild: l, selected: a === e_.VV.GUILD_SHOP }, tq.n.GUILD_SHOP);
                case tq.n.GUILD_GAME_SHOP:
                    return (0, s.jsx)(n0, { guild: l, selected: a === e_.VV.GAME_SHOP }, tq.n.GUILD_GAME_SHOP);
                case tq.n.GUILD_VIBEGRATIONS:
                    return (0, s.jsx)(sw, { guild: l, selected: a === e_.VV.VIBEGRATIONS }, tq.n.GUILD_VIBEGRATIONS);
                case tq.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                    return (0, s.jsx)(li, { guild: l });
                case tq.n.CHANNELS_AND_ROLES:
                    return (0, s.jsx)(
                        n6,
                        { guild: l, selected: a === e_.VV.CHANNEL_BROWSER || a === e_.VV.CUSTOMIZE_COMMUNITY },
                        tq.n.CHANNELS_AND_ROLES,
                    );
                case tq.n.GUILD_DIRECTORY:
                    return (0, s.jsx)(
                        nD,
                        { guild: l, selectedChannelId: a, disableManageChannels: h },
                        tq.n.GUILD_DIRECTORY,
                    );
                case tq.n.GUILD_MOD_DASH_MEMBER_SAFETY:
                    return (0, s.jsx)(
                        eH,
                        { guild: l, selected: a === e_.VV.MEMBER_SAFETY },
                        tq.n.GUILD_MOD_DASH_MEMBER_SAFETY,
                    );
                case tq.n.GUILD_BOOSTS:
                    return (0, s.jsx)(e8, { guildId: l.id, selected: a === e_.VV.GUILD_BOOSTS }, tq.n.GUILD_BOOSTS);
                case tq.n.GAME_SERVERS:
                    return (0, s.jsx)(eL, { guildId: l.id, selected: a === e_.VV.GAME_SERVERS }, tq.n.GAME_SERVERS);
                case tq.n.GAME_SERVERS_EMPTY:
                    return (0, s.jsx)(
                        eR,
                        { guildId: l.id, selected: a === e_.VV.GAME_SERVERS },
                        tq.n.GAME_SERVERS_EMPTY,
                    );
                case tq.n.GUILD_OFFICIAL_MESSAGES:
                    return (0, s.jsx)(
                        lr,
                        { guild: l, selected: a === e_.VV.GUILD_OFFICIAL_MESSAGES },
                        tq.n.GUILD_OFFICIAL_MESSAGES,
                    );
                default:
                    return null;
            }
        }
        if (c.isPlaceholderRow(t, n)) return null;
        let f = c.getChannelFromSectionRow(t, n);
        if (null == f) return null;
        let { category: p, channel: C } = f,
            E = p instanceof tv.xu,
            x = C.record,
            N = `${t}${C.id}`;
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
                            (0, s.jsx)(sn, {
                                channel: x,
                                guild: l,
                                position: C.position,
                                selected: a === C.id,
                                muted: C.isMuted,
                                subtitle: C.subtitle,
                                disableManageChannels: h,
                                canBeNewChannel: g && t === c.recentsSectionNumber,
                                isFavoriteCategory: E,
                                isSuggestedSection: t === c.recentsSectionNumber,
                            }),
                            C.threadCount > 0
                                ? (0, s.jsx)(lK, {
                                      withGuildIcon: m,
                                      channel: x,
                                      sortedThreadIds: C.threadIds,
                                      selectedChannel: null != i && (i.id === C.id || i.parent_id === x.id) ? i : null,
                                      selectedVoiceChannelId: o?.parent_id === x.id ? d : null,
                                  })
                                : null,
                        ],
                    },
                    N,
                );
            case B.rbe.GUILD_STAGE_VOICE:
                return (0, s.jsx)(
                    iR,
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
                    N,
                );
            case B.rbe.GUILD_VOICE:
                return (0, s.jsx)(
                    rr,
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
                        withGuildIcon: m,
                        isSuggestedSection: t === c.recentsSectionNumber,
                    },
                    N,
                );
            case B.rbe.GUILD_STORE:
                return (0, s.jsx)(iy, { channel: x, guild: l, position: C.position, selected: a === C.id }, N);
            case B.rbe.GUILD_CATEGORY:
                if (t !== c.voiceChannelsSectionNumber) return null;
                return (0, s.jsx)(ni, { channel: x }, `readonly-${x.id}`);
            case B.rbe.PUBLIC_THREAD:
            case B.rbe.PRIVATE_THREAD:
            case B.rbe.ANNOUNCEMENT_THREAD:
                return (0, s.jsx)(
                    sn,
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
                    N,
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
            nf,
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
                let { hasDivider: l, canHaveVoiceSummary: i } = ng(t, n, e);
                return `section-footer-${e}${l ? "-divider" : ""}${i ? "-voice-summary" : ""}`;
            })(t, n, o),
        );
    };
    renderTopUnread() {
        let { topMention: e, bottomUnread: t, bottomMention: n, isUnreadVisible: l } = this.state,
            { guildId: i, guildChannels: r, guildChannelsVersion: a } = this.props;
        return (0, s.jsx)("div", {
            className: no.Eo,
            children: (0, s.jsx)(sM, {
                ref: this.unreadTopRef,
                textUnread: ec.intl.string(ec.t.FCRiT3),
                textMention: ec.intl.string(ec.t["8zH0LJ"]),
                hide: null == e && (l || null != t || null != n),
                className: no.Vq,
                barClassName: no.bu,
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
        return (0, s.jsx)(sM, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: ec.intl.string(ec.t.FCRiT3),
            textMention: ec.intl.string(ec.t["8zH0LJ"]),
            hide: null == l && i,
            className: no.di,
            barClassName: no.bu,
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
        if (e !== tv.PU) {
            if (null == t)
                return e === tv.HP
                    ? "favorites-header"
                    : e === n.recentsSectionNumber
                      ? "recents-header"
                      : e === n.voiceChannelsSectionNumber
                        ? "voice-channels"
                        : e === tv.bK
                          ? "uncategorized-header"
                          : n.getNamedCategoryFromSection(e)?.id;
            if (!n.isPlaceholderRow(e, t)) return n.getChannelFromSectionRow(e, t)?.channel?.id;
        }
    };
    renderList() {
        let { guildChannels: e, guildBanner: t, selectedGuildId: n, density: l } = this.props,
            i = {};
        (0, v.ai)(n) && (i["data-favorites"] = !0);
        let { ref: r, ...a } = this.context,
            o = 0;
        null != t && (o = 84);
        let d = "compact" === l ? 8 : 12;
        return (0, s.jsx)(g.sk, {
            children: (t) =>
                (0, s.jsx)(
                    m.OZ,
                    {
                        ref: this.setListRef,
                        className: no.XG,
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
                        innerAriaLabel: ec.intl.string(ec.t.OGiMXJ),
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
        if (!tb.A.shouldShow("voice-conversations")) return;
        let { guildChannels: e } = this.props,
            t = e.getFirstVoiceChannel();
        if (null == t) return void tI.X8("voice-conversations");
        let n = this._list;
        if (null != n)
            for (let { section: e, row: l } of this.getSectionRowsFromChannel(t.id))
                n.isItemVisible(e, l) || tI.X8("voice-conversations");
    };
    render() {
        let { guildChannels: e, guildChannelsVersion: t, showNewUnreadsBar: n } = this.props;
        return (0, s.jsx)(et.V0, {
            children: (l) =>
                (0, s.jsx)(f.F, {
                    component: (0, s.jsx)(p.A, {
                        children: (0, s.jsx)(f.H, { id: l, children: ec.intl.string(ec.t.OGiMXJ) }),
                    }),
                    children: n
                        ? (0, s.jsxs)(r.Fragment, {
                              children: [
                                  (0, s.jsx)("div", {
                                      className: no.Eo,
                                      children: (0, s.jsx)(sG, {
                                          position: "top",
                                          guildChannels: e,
                                          guildChannelsVersion: t,
                                          jumpToVoiceChannels: this.jumpToVoiceChannels,
                                          jumpToChannel: this.jumpToChannel,
                                      }),
                                  }),
                                  this.renderList(),
                                  (0, s.jsx)(sG, {
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
let rd = (e) => {
    let { guildId: t, selectedChannelId: n, selectedVoiceChannelId: l } = e,
        i = (0, u.bG)([$.Ay], () => $.Ay.keyboardModeEnabled),
        { analyticsLocations: a } = (0, ee.Ay)(Q.A.GUILD_CHANNEL_LIST),
        o = (0, u.bG)([L.A], () => L.A.getChannel(n)),
        h = (0, u.bG)([L.A], () => L.A.getChannel(l)),
        A = (0, u.bG)([P.A], () => P.A.getGuildId()),
        g = (0, y.jN)(t),
        m = r.useRef(null),
        f = r.useCallback((e, t) => {
            let n = m.current;
            null != n &&
                (B.Ut1.test(t) || (0, e_.jq)(t)
                    ? n.scrollToChannel(t, !1, 16, () => {
                          requestAnimationFrame(() => document.querySelector(e)?.focus());
                      })
                    : document.querySelector(e)?.focus());
        }, []),
        p = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = m.current;
                    if (null == t) return e();
                    t.scrollTo(0, () => requestAnimationFrame(() => e()));
                }),
            [],
        ),
        C = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = m.current;
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
        N = E.setFocus;
    r.useEffect(() => {
        null != n && N(n);
    }, [n, N]);
    let _ = (function (e) {
        let [t] = (0, u.bG)(
            [tN.A, L.A, tf.A],
            () => {
                let t;
                return [
                    (t = (0, v.ai)(e)
                        ? tx.default
                              .keys(tf.A.getFavoriteChannels())
                              .map((e) => L.A.getChannel(e))
                              .filter(tC.Vq)
                              .filter((e) => e.isGuildStageVoice())
                        : tN.A.getChannels(e)).reduce((e, t) => {
                        let n = tN.A.getMutableParticipants(t.id, t_.ip.SPEAKER);
                        return (e[t.id] = n.filter((e) => e.type === t_.wY.VOICE).map(tS)), e;
                    }, {}),
                    t.reduce((e, t) => {
                        let { id: n } = t;
                        return e + tN.A.getParticipantsVersion(n);
                    }, 0),
                ];
            },
            [e],
            tE.D,
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
                    (0, s.jsx)(tG.q, { containerRef: E.containerProps.ref, itemType: X }),
                    (0, s.jsx)(ro, {
                        ...e,
                        listNavigator: E,
                        ref: m,
                        selectedChannel: o,
                        selectedVoiceChannel: h,
                        stageChannelSpeakerVoiceStates: _,
                        selectedGuildId: A,
                        optInEnabled: g,
                    }),
                ],
            }),
        }),
    });
};
function rc(e) {
    let { guildChannels: t, shouldShowEmptyState: n } = (0, en.D)(),
        { density: l } = (0, C.wR)();
    return n
        ? (0, s.jsx)("div", { className: no.XG, children: (0, s.jsx)(eh, {}) })
        : (0, s.jsx)(rd, { ...e, guildChannels: t, guildChannelsVersion: 0, withGuildIcon: !1, density: l });
}
function ru(e) {
    let t = (function (e) {
            var t;
            let n,
                l,
                i =
                    ((t = e.id),
                    (n = (0, tk.A)(t)),
                    (l = (0, tF.Ay)(t)),
                    !(0, u.bG)([D.A], () => {
                        if (null == t) return !1;
                        let e = D.A.getGuild(t);
                        return e?.features.has(B.GuildFeatures.HUB) ?? !1;
                    }, [t]) &&
                        (n || l.length > 0)),
                s = (0, tD.W)(e.id),
                r = (0, tB.vz)(e.id),
                a = (0, tL.r)(e),
                o = (0, tY.jz)(e),
                d = (0, tw.d)(e.id),
                c = (0, tM.bG)([tP.h], () => tP.h.getNewMemberActions(e.id), [e.id]),
                h = (0, tX.QI)(e, "useGuildActionRows"),
                A = (0, tH.A)(e.id),
                g = (0, tV.jY)(e.id),
                m = (0, tO.fw)(e.id),
                f = (0, tK.Uq)(e, "useGuildActionRows"),
                p = [],
                C = e.features.has(B.GuildFeatures.HUB),
                E = e.features.has(B.GuildFeatures.COMMUNITY),
                x = e.features.has(B.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
                N = (0, to.A)(e.id);
            tW.useConfig({ location: "useGuildActionRows" }).enabled;
            let _ = tc(e),
                S = (0, tz.bW)(e.id, "useGuildActionRows"),
                I = (0, tT.C$)(e.id, "useGuildActionRows"),
                b = e.features.has(B.GuildFeatures.GAME_SERVERS),
                G = (0, tU.N)("useGuildActionRows"),
                [R] = (0, eE.kn)(I && G && !b ? [eA.M.EMPTY_GAME_SERVER_TAB] : [], void 0, !0);
            return (
                f && p.push(tq.n.GUILD_SPACE),
                C && p.push(tq.n.GUILD_HUB_HEADER_OPTIONS),
                !g && d && A && null != c && c.length > 0
                    ? p.push(tq.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
                    : e.premiumProgressBarEnabled && _ > 0 && p.push(tq.n.GUILD_PREMIUM_PROGRESS_BAR),
                !C && d && p.push(tq.n.GUILD_HOME),
                i && p.push(tq.n.GUILD_SCHEDULED_EVENTS),
                !C && E && p.push(tq.n.CHANNELS_AND_ROLES),
                r && p.push(tq.n.GUILD_ROLE_SUBSCRIPTIONS),
                a && p.push(tq.n.GUILD_SHOP),
                o && p.push(tq.n.GUILD_GAME_SHOP),
                ((m && (E || x)) || (s && e.features.has(B.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL))) &&
                    p.push(tq.n.GUILD_MOD_DASH_MEMBER_SAFETY),
                N && p.push(tq.n.GUILD_BOOSTS),
                S && p.push(tq.n.GUILD_OFFICIAL_MESSAGES),
                I && (b ? p.push(tq.n.GAME_SERVERS) : null != R && p.push(tq.n.GAME_SERVERS_EMPTY)),
                h && p.push(tq.n.GUILD_VIBEGRATIONS),
                p
            );
        })(e.guild),
        n = (0, u.cf)([tj.A], () => tj.A.getGuild(e.guildId, { guildActionRows: t })),
        { density: l } = (0, C.wR)();
    return (0, s.jsx)(rd, { ...e, ...n, density: l });
}
