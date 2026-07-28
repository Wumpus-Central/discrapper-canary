n.d(t, { B: () => ri, T: () => rl }), n(321073);
var l,
    i,
    s = n(627968),
    r = n(64700),
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
    E = n(331322),
    x = n(297264),
    N = n(834730),
    _ = n(276293),
    S = n(983851),
    I = n(534890),
    b = n(951001),
    G = n(820284),
    R = n(913247),
    v = n(639627),
    j = n(192308),
    y = n(66834),
    M = n(999903),
    L = n(544169),
    T = n(659324),
    U = n(5180),
    D = n(770376),
    O = n(395504),
    P = n(924985),
    V = n(734057),
    w = n(769765),
    H = n(808728),
    B = n(71393),
    k = n(576705),
    F = n(967198),
    K = n(543465);
n(667532);
var z = n(95701),
    W = n(111613),
    Y = n(652215);
function X(e, t) {
    return null != e && null != t && (e === t || ((0, z.tr)(e) && (0, z.tr)(t)) || ((0, z.ay)(e) && (0, z.ay)(t)));
}
function q(e, t, n, l) {
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
        if (X(e.channel.type, n)) return e;
    }
    return null;
}
function J(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null == e) return 0;
    let l = null;
    return (
        t
            .filter((t) => {
                let {
                    channel: { type: l },
                } = t;
                return null != e && (n || X(e.type, l));
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
function Z(e) {
    return { referenceId: e.id, parentId: e.parent_id };
}
function $(e, t, n, l, i) {
    if (null == e || null == n) return null;
    let { GUILD_CATEGORY: s } = Y.rbe;
    if (e.type === s)
        return l === t || (l < t && e.type === n.type)
            ? Z(n)
            : l > t
              ? (function (e, t, n) {
                    let { GUILD_CATEGORY: l } = Y.rbe,
                        i = n[(J(t, n, !0) ?? 0) + 1],
                        s = q(-1, t.id, e.type, n);
                    return null == s || s.channel.id === e.id
                        ? null
                        : null == i || i.channel.type === l
                          ? { referenceId: s.channel.id, parentId: null }
                          : null;
                })(e, n, i)
              : null;
    if (X(e.type, n.type)) return Z(n);
    if (l < t) {
        let t, l;
        if (n.type === s) {
            let t = i[(J(n, i, !0) ?? 0) - 1],
                l = q(1, n.id, e.type, i);
            if (null == t) return { referenceId: null, parentId: null };
            if (null != l) {
                if (X(t.channel.type, e.type) || (e.isGuildVocal() && (0, z.tr)(t.channel.type)))
                    return { referenceId: l.channel.id, parentId: t.channel.parent_id };
                if (t.channel.isCategory()) return { referenceId: l.channel.id, parentId: t.channel.id };
            }
            return null;
        }
        return (
            (t = i[(J(n, i, !0) ?? 0) - 1]),
            (l = q(1, n.id, e.type, i)),
            null != t || e.isGuildVocal()
                ? (0, z.tr)(e.type) && null != l && ((0, z.tr)(t.channel.type) || t.channel.isCategory())
                    ? { referenceId: l.channel.id, parentId: n.parent_id }
                    : null
                : { referenceId: null != l ? l.channel.id : null, parentId: null }
        );
    }
    if (n.type === s) {
        let t = i[(J(n, i, !0) ?? 0) + 1],
            l = q(-1, n.id, e.type, i);
        if (null != l) {
            if (null == t) return { referenceId: l.channel.id, parentId: n.id };
            if (X(t.channel.type, e.type) || ((0, z.tr)(e.type) && t.channel.isGuildVocal()))
                return { referenceId: l.channel.id, parentId: t.channel.parent_id };
            if (t.channel.isCategory()) return { referenceId: l.channel.id, parentId: n.id };
        }
        return null;
    }
    let r = i[(J(n, i, !0) ?? 0) + 1],
        a = q(-1, n.id, e.type, i);
    if (null == a) return null;
    if (e.isGuildVocal()) {
        if (null == r || r.channel.isCategory()) return { referenceId: a.channel.id, parentId: n.parent_id };
        if (r.channel.isGuildVocal()) return { referenceId: a.channel.id, parentId: r.channel.parent_id };
    }
    return e.isCategory() && (null == r || r.channel.isCategory())
        ? { referenceId: a.channel.id, parentId: null }
        : null;
}
var Q = n(488926);
let ee = "DRAGGABLE_GUILD_CHANNEL";
function et(e, t) {
    if (null == e || null == t) return null;
    if (!(0, U.ai)(e)) return V.A.getChannel(t);
    let n = H.Ay.getChannels(e),
        l =
            n[H.I6].find((e) => e.channel.id === t) ??
            n[H.vM].find((e) => e.channel.id === t) ??
            n[Y.rbe.GUILD_CATEGORY].find((e) => e.channel.id === t);
    return l?.channel;
}
function en(e, t) {
    if (null != e.parent_id) {
        let t = V.A.getChannel(e.parent_id);
        if (null != t) return k.A.can(Y.xBc.MANAGE_CHANNELS, t);
    }
    return k.A.can(Y.xBc.MANAGE_CHANNELS, t);
}
function el(e) {
    return (0, R.T)(
        ee,
        {
            drop(e, t) {
                let n,
                    l = F.A.getGuildId(),
                    i = t.getItem(),
                    r = $(et(l, i.id), i.position, e.channel, e.position, i.channelList);
                if (null == r) return;
                let a = et(l, i.id);
                if (null == a) return;
                let o = w.A.getCategories(l),
                    d = B.A.getGuild(l);
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
                                    : W.Ay.moveItemFromTo(t, i, s)),
                            (r = r.concat(
                                W.Ay.calculatePositionDeltas({
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
                        (i = J(e, n)), (s = J(t, n)), (a = d(n)).unshift(o[0]);
                    }
                    if ((0, z.tr)(e.type) || e.isCategory()) {
                        let n = (0, M.A)(a.length > 0 ? a : o, l, (e) => {
                            let {
                                channel: { type: t },
                            } = e;
                            return (0, z.tr)(t);
                        });
                        (i = J(e, n)), (s = J(t, n)), d(n);
                    }
                    if (e.isGuildVocal() || e.isCategory()) {
                        let n = (0, M.A)(a.length > 0 ? a : o, l, (e) => {
                            let { channel: t } = e;
                            return t.isGuildVocal();
                        });
                        (i = J(e, n)), (s = J(t, n)), d(n);
                    }
                    return (
                        e.parent_id !== n &&
                            null == r.find((t) => t.id === e.id && ((t.parent_id = n), !0)) &&
                            r.push({ id: e.id, parent_id: n }),
                        r
                    );
                })(a, et(l, r.referenceId), r.parentId, o);
                if (0 !== c.length) {
                    if ((0, U.ai)(l)) return void (0, T.zN)(c);
                    if (
                        ((c = c.filter((e) => {
                            let { id: t } = e,
                                n = V.A.getChannel(t);
                            if (null == n) return !1;
                            let l = V.A.getChannel(n.parent_id);
                            return n.type === Y.rbe.GUILD_CATEGORY || null == l
                                ? k.A.can(Y.xBc.MANAGE_CHANNELS, d)
                                : k.A.can(Y.xBc.MANAGE_CHANNELS, l);
                        })),
                        a.parent_id !== r.parentId &&
                            c.find((e) => {
                                if (e.id !== a.id) return !1;
                                let t = V.A.getChannel(e.parent_id);
                                if (!(null != t && k.A.can(Y.xBc.MANAGE_ROLES, a) && k.A.can(Y.xBc.MANAGE_ROLES, t)))
                                    return !0;
                                let l = Q.r(a, t),
                                    i = Q.r(a, V.A.getChannel(a.parent_id));
                                return ((null != a.parent_id || l) && (!i || l)) || (n = e), !0;
                            }),
                        null != n)
                    ) {
                        let e = V.A.getChannel(n.parent_id);
                        null != e &&
                            (0, j.openModal)((t) =>
                                (0, s.jsx)(L.default, {
                                    ...t,
                                    channel: a,
                                    category: e,
                                    onConfirm: () => {
                                        null != n && ((n.lock_permissions = !0), y.A.batchChannelUpdate(l, c));
                                    },
                                    onCancel: () => {
                                        null != n && y.A.batchChannelUpdate(l, c);
                                    },
                                }),
                            );
                    } else y.A.batchChannelUpdate(l, c);
                }
            },
            canDrop(e, t) {
                let n = t.getItem(),
                    l = V.A.getChannel(n.id);
                if (null == l) return !1;
                let i = $(V.A.getChannel(n.id), n.position, e.channel, e.position, n.channelList);
                if (null == i) return !1;
                if ((0, U.ai)(F.A.getGuildId())) return !0;
                if (K.Ay.isFavorite(n.guildId, e.channel.id)) return !1;
                let s = B.A.getGuild(n.guildId);
                if (null == s) return !1;
                let r = V.A.getChannel(i.parentId),
                    a = V.A.getChannel(l.parent_id),
                    o = k.A.can(Y.xBc.MANAGE_CHANNELS, s),
                    d = null != a ? k.A.can(Y.xBc.MANAGE_CHANNELS, a) : o,
                    c = null != r ? k.A.can(Y.xBc.MANAGE_CHANNELS, r) : o;
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
        (0, v.I)(
            ee,
            {
                canDrag(e) {
                    let { channel: t } = e;
                    if ((0, U.ai)(F.A.getGuildId())) return !0;
                    let l = B.A.getGuild(t.getGuildId());
                    return (
                        null != l &&
                        ((0, O.WW)(l.id) && en(t, l)
                            ? ((0, D.A)() &&
                                  (0, j.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([n.e("57729"), n.e("24848")]).then(
                                          n.bind(n, 354643),
                                      );
                                      return (t) => (0, s.jsx)(e, { ...t });
                                  }),
                              !1)
                            : K.Ay.isFavorite(l.id, t.id) && en(t, l)
                              ? ((0, j.openModalLazy)(async () => {
                                    let { default: e } = await n.e("80545").then(n.bind(n, 933752));
                                    return (n) => (0, s.jsx)(e, { ...n, guildId: l.id, channelId: t.id });
                                }),
                                !1)
                              : en(t, l))
                    );
                },
                beginDrag(e) {
                    let {
                            channel: { id: t, parent_id: n, guild_id: l, type: i },
                            position: s,
                        } = e,
                        r = F.A.getGuildId(),
                        a = w.A.getCategories(r);
                    return {
                        isChannelDrag: !0,
                        id: t,
                        position: s,
                        parentId: n,
                        type: i,
                        channelList: (0, M.A)(a._categories, a, (e) => {
                            let { channel: t } = e;
                            return t.type === Y.rbe.GUILD_CATEGORY && null != a[t.id] && 0 === a[t.id].length
                                ? !!(0, U.ai)(r) ||
                                      (k.A.can(Y.xBc.MANAGE_CHANNELS, t) && k.A.can(Y.xBc.VIEW_CHANNEL, t))
                                : !P.A.isCollapsed(t.parent_id);
                        }),
                        guildId: l,
                    };
                },
            },
            (e) => ({ connectChannelDragSource: e.dragSource(), connectDragPreview: e.dragPreview() }),
        )(e),
    );
}
var ei = n(775602),
    es = n(793574),
    er = n(688810),
    ea = n(915089),
    eo = n(554146),
    ed = n(177953),
    ec = n(812993),
    eu = n(533550),
    eh = n(624458),
    eA = n(844944),
    eg = n(513461),
    em = n(663997),
    ef = n(652793),
    ep = n(221950),
    eC = n(375708);
function eE(e) {
    let { guild: t, selected: n } = e,
        l = (0, u.bG)([k.A], () => k.A.can(Y.xBc.KICK_MEMBERS, t)),
        i = (0, u.bG)([eA.A], () => eA.A.getSubmittedGuildJoinRequestTotal(t.id)),
        a = l ? (i ?? 0) : 0;
    r.useEffect(() => {
        l &&
            t.features.has(Y.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
            t.features.has(Y.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            eh.A.fetchGuildJoinRequests({ guildId: t.id, status: eg.B5.SUBMITTED, limit: em.L });
    }, [l, t]);
    let o = r.useCallback(() => {
            (0, ep.aZ)(t.id);
        }, [t.id]),
        d = (0, eu.q8)(t.id, eo.M.MEMBERS_LAUNCH_UPSELL);
    return (0, s.jsx)("div", {
        ref: d,
        children: (0, s.jsx)(ef.G, {
            id: `members-${t.id}`,
            renderIcon: (e) => (0, s.jsx)(ed.n, { size: "md", color: "currentColor", className: e }),
            text: eC.intl.string(eC.t.oclz3Z),
            selected: n,
            onClick: o,
            trailing: a > 0 ? (0, s.jsx)(ec.hV, { count: a }) : null,
        }),
    });
}
var ex = n(632015),
    eN = n(976860),
    e_ = n(746080);
function eS(e) {
    let { guild: t, selected: n } = e;
    return (0, s.jsx)(ef.G, {
        id: `guild-space-tab-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(ex.f, { size: "md", color: "currentColor", className: e }),
        text: eC.intl.string(eC.t["04IVMq"]),
        selected: n,
        onClick: function () {
            (0, eN.pX)(Y.BVt.CHANNEL(t.id, e_.VV.GUILD_SPACE));
        },
    });
}
var eI = n(581007),
    eb = n(522435),
    eG = n(285406),
    eR = n(582904),
    ev = n(419534),
    ej = n(866665),
    ey = n(939249),
    eM = n(789645),
    eL = n(687966),
    eT = n(131607),
    eU = n(49999),
    eD = n(576709),
    eO = n(204392),
    eP = n(180961);
let eV = r.memo(function (e) {
    let { guildId: t, selected: l } = e,
        [i, a] = (0, eT.ww)([eo.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        o = i === eo.M.GAME_SERVER_HOSTING_NEW_BADGE,
        d = r.useCallback(() => {
            a(eU.i.USER_DISMISS), (0, eN.pX)(Y.BVt.CHANNEL(t, e_.VV.GAME_SERVERS));
        }, [t, a]),
        c = r.useCallback(
            (e) => {
                e.stopPropagation(),
                    (0, j.openModalLazy)(async () => {
                        let { default: e } = await n.e("2872").then(n.bind(n, 128459));
                        return (n) => (0, s.jsx)(e, { ...n, guildId: t });
                    });
            },
            [t],
        ),
        u = (0, s.jsxs)("div", {
            className: eO.c,
            children: [
                (0, s.jsx)("div", {
                    className: eP.Xs,
                    children: (0, s.jsx)(ej.m, {
                        text: eC.intl.string(eC.t.fgq1gs),
                        position: "top",
                        children: (0, s.jsx)(ey.D, {
                            onClick: c,
                            "aria-label": eC.intl.string(eC.t.fgq1gs),
                            children: (0, s.jsx)(eM.P, { size: "xs", color: "currentColor", className: eP.gE }),
                        }),
                    }),
                }),
                o &&
                    (0, s.jsx)("div", {
                        className: eP.yW,
                        children: (0, s.jsx)(ec.Lp, {
                            disableColor: !0,
                            text: eC.intl.string(eC.t.y2b7CA),
                            className: eO.q,
                        }),
                    }),
            ],
        });
    return (0, s.jsx)(ef.G, {
        className: eP.Ki,
        id: `game-server-empty-${t}`,
        renderIcon: (e) => (0, s.jsx)(eL._, { size: "md", className: e, color: "currentColor" }),
        text: eC.intl.string(eD.default.vCzwM7),
        selected: l,
        onClick: d,
        trailing: u,
    });
});
var ew = n(361158),
    eH = n(186111),
    eB = n(270533),
    ek = n(603713);
let eF = r.memo(function (e) {
    let { guildId: t, selected: n } = e,
        l = (0, j.useHasAnyModalOpen)(),
        i = (0, u.bG)([eH.A], () => eH.A.hasLayers()),
        a = (0, ew.xr)((e) => e.fullScreenLayers.length > 0),
        [o, d] = (0, eT.ww)([eo.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        c = o === eo.M.GAME_SERVER_HOSTING_NEW_BADGE,
        [h, A] = (0, eT.ww)(l || i || a || !c ? [] : [eo.M.GAME_SERVER_HOSTING_NEW_COACHMARK], t),
        g = r.useCallback(
            (e) => {
                d(e), A(e);
            },
            [d, A],
        ),
        m = r.useCallback(() => {
            g(eU.i.USER_DISMISS), (0, eN.pX)(Y.BVt.CHANNEL(t, e_.VV.GAME_SERVERS));
        }, [t, g]),
        f = r.useRef(null),
        p = h === eo.M.GAME_SERVER_HOSTING_NEW_COACHMARK,
        C = r.useCallback(() => (0, s.jsx)(eB.mn, { channelRowRef: f, guildId: t, markAsDismissed: g }), [t, g]);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(ef.G, {
                ref: f,
                id: `game-server-${t}`,
                renderIcon: (e) => (0, s.jsx)(eL._, { size: "md", className: e, color: "currentColor" }),
                text: eC.intl.string(eD.default.vCzwM7),
                selected: n,
                onClick: m,
                trailing: c
                    ? (0, s.jsx)(ec.Lp, { disableColor: !0, text: eC.intl.string(eC.t.y2b7CA), className: ek.q })
                    : null,
            }),
            p && C(),
        ],
    });
});
var eK = n(503698),
    ez = n.n(eK),
    eW = n(695366),
    eY = n(104510),
    eX = n(544048),
    eq = n(868652),
    eJ = n(379229),
    eZ = n(482487),
    e$ = n(914732),
    eQ = n(828162),
    e0 = n(853513),
    e1 = n(689599);
function e2(e) {
    let { indicator: t } = e;
    if (null == t) return null;
    switch (t.type) {
        case eJ.cD.WARNING:
            return (0, s.jsx)(eW.E, { color: h.A.colors.STATUS_WARNING, size: "sm" });
        case eJ.cD.UNREAD:
            return (0, s.jsx)(ec.hV, { count: t.count });
        default:
            return null;
    }
}
let e3 = { animation: { BEG: 0, END: 75 }, LOOP: { BEG: 76, END: 376 } },
    e9 = r.memo(function (e) {
        let { guildId: t, selected: l } = e,
            i = (0, e$.Ay)(t),
            { showNewBadgeOnRow: a, dismissNewBadgeIfShown: o } = (0, eZ.A)(
                t,
                i?.indicator != null || i?.popout != null,
            ),
            d = r.useCallback(() => {
                o(),
                    (0, eq.Zm)(t),
                    (0, eQ.A)(t, es.A.GUILD_POWERUPS_CHANNEL_LIST_ROW),
                    i?.popout?.markAsDismissed(eU.i.INDIRECT_ACTION);
            }, [t, o, i]),
            c = r.useRef(null),
            A = (0, j.useModalsStore)(j.hasAnyModalOpenSelector),
            g = (0, u.bG)([eH.A], () => eH.A.hasLayers()),
            m = (0, ew.xr)((e) => e.fullScreenLayers.length > 0),
            f = A || g || m,
            p = r.useCallback(() => {
                if (i?.popout == null || f) return null;
                switch (i?.popout?.type) {
                    case eJ.o.LEVEL_REACHED:
                        return (0, s.jsx)(eB.HW, { guildId: t, channelRowRef: c, ...i.popout });
                    case eJ.o.PERKS_AVAILABLE:
                        return (0, s.jsx)(eB.UB, { guildId: t, channelRowRef: c, ...i.popout });
                    case eJ.o.PERKS_PURCHASABLE:
                        return (0, s.jsx)(eB.lw, { guildId: t, channelRowRef: c, ...i.popout });
                    case eJ.o.NEW_PERK_AVAILABLE:
                        return (0, s.jsx)(eB.bo, { guildId: t, channelRowRef: c, ...i.popout });
                    case eJ.o.BOOST_TO_UNLOCK:
                        return (0, s.jsx)(eB.Gw, { guildId: t, channelRowRef: c, ...i.popout });
                    case eJ.o.EXPIRING_PERK:
                        return (0, s.jsx)(eB.Mr, { guildId: t, channelRowRef: c, ...i.popout });
                    case eJ.o.GAME_SERVER_HOSTING_AVAILABLE:
                    case eJ.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE:
                        return (0, s.jsx)(eB.jz, { guildId: t, channelRowRef: c, ...i.popout });
                    case eJ.o.GAME_SERVER_NEW_GAMES:
                        return (0, s.jsx)(eB.YX, { guildId: t, channelRowRef: c, ...i.popout });
                    case eJ.o.GAME_SERVER_PRICING_CHANGE:
                        return (0, s.jsx)(eB.Ns, { guildId: t, channelRowRef: c, ...i.popout });
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
                (0, s.jsx)(ef.G, {
                    ref: c,
                    className: e1.kL,
                    id: `skill-trees-${t}`,
                    renderIcon: (e) => (0, s.jsx)(eY._, { size: "md", className: e, color: "currentColor" }),
                    background:
                        i?.popout != null &&
                        (0, s.jsx)("div", {
                            className: e1.Fi,
                            children: (0, s.jsx)(eX.t, {
                                nextScene: null == C ? "animation" : "LOOP",
                                className: e1.UU,
                                sceneSegments: e3,
                                importData: () => n.e("67807").then(n.t.bind(n, 217762, 19)),
                                onScenePlay: x,
                                rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                            }),
                        }),
                    text: (0, s.jsx)("span", {
                        className: ez()({ [e1.A7]: i?.showUnread === !0 }),
                        children: eC.intl.string(e0.default.yv3DJJ),
                    }),
                    selected: l,
                    onClick: d,
                    showUnread: i?.showUnread === !0,
                    trailing: a
                        ? (0, s.jsx)(ec.Lp, {
                              text: eC.intl.string(eC.t.y2b7CA),
                              color: h.A.colors.BACKGROUND_BRAND.css,
                          })
                        : (0, s.jsx)(e2, { indicator: i?.indicator }),
                }),
                p(),
            ],
        });
    });
var e6 = n(183812),
    e7 = n(717421),
    e5 = n(442433),
    e4 = n(230135),
    e8 = n(228366);
let te = {};
class tt extends u.Ay.PersistedStore {
    static displayName = "GuildBoostingProgressBarPersistedStore";
    static persistKey = "PremiumGuildProgressBarPersistedStore";
    initialize(e) {
        null != e && (te = e);
    }
    getState() {
        return te;
    }
    getCountForGuild(e) {
        return te[e];
    }
}
let tn = new tt(e8.h, {
    APPLIED_GUILD_BOOST_COUNT_UPDATE: function (e) {
        let { guildId: t, premiumCount: n } = e;
        te = { ...te, [t]: n };
    },
    APPLIED_GUILD_BOOST_COUNT_RESET: function () {
        te = {};
    },
});
var tl = n(147925),
    ti = n(363487),
    ts = n(568065);
function tr(e) {
    return (0, r.useMemo)(() => {
        if (null == e) return 0;
        let t = e?.features.has(Y.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0 ? 0 : Y.M2T[Y.TVA.TIER_3],
            n = Object.values(ts.sy),
            l = Object.values(ts.YV);
        return (
            n.concat(l).forEach((n) => {
                null == n.includedInLevel && (n.isEnabled?.(e.id) ?? !0) && (t += n.boostPrice);
            }),
            t
        );
    }, [e]);
}
var ta = n(511636);
let to = r.forwardRef((e, t) => {
    let { appliedBoostCount: n, maxBoostCount: l, premiumSubscriberCount: i, className: a } = e,
        o = n >= l,
        d = Math.min((n / l) * 100, 100),
        c = `calc(${d}% - 4px)`,
        [u, h] = (0, e7.z)(
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
            className: ta.hQ,
            children: [
                (0, s.jsx)("div", { className: ez()(ta.L$, a) }),
                (0, s.jsx)(e6.animated.div, { className: ez()(ta.qB, { [ta.mu]: d <= 5 }), style: u }),
                (0, s.jsxs)("div", {
                    className: ta.FS,
                    children: [
                        (0, s.jsxs)("div", {
                            className: ta.Ui,
                            children: [
                                (0, s.jsx)(N.E, {
                                    className: ta.Qq,
                                    variant: "text-xs/semibold",
                                    children: eC.intl.string(e0.default.NI6Ihe),
                                }),
                                i >= l &&
                                    (0, s.jsx)(N.E, {
                                        className: ta.Qq,
                                        variant: "text-xs/semibold",
                                        children: "\uD83C\uDF89",
                                    }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: ta.Ui,
                            children: [
                                (0, s.jsx)(N.E, {
                                    className: ez()(ta.Qq, ta.ue),
                                    variant: "text-xs/semibold",
                                    children: o
                                        ? eC.intl.formatToPlainString(e0.default["Ehpq+7"], { appliedBoostCount: n })
                                        : eC.intl.formatToPlainString(e0.default["/rbPDs"], {
                                              appliedBoostCount: n,
                                              maxBoostCount: l,
                                          }),
                                }),
                                (0, s.jsx)(tl.A, {
                                    width: 12,
                                    height: 12,
                                    direction: tl.A.Directions.RIGHT,
                                    className: ez()(ta.Qq, ta.ue),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
function td(e) {
    let { guild: t, withMargin: l } = e,
        i = tr(t),
        a = (0, ti.A)(t.id),
        o = r.useCallback(() => {
            (0, eQ.A)(t.id, es.A.GUILD_BOOSTING_SIDEBAR_DISPLAY);
        }, [t.id]),
        d = (0, u.bG)([tn], () => tn.getCountForGuild(t.id) ?? 0);
    r.useEffect(() => {
        d !== t.premiumSubscriberCount && (0, e4.u)(t.id, t.premiumSubscriberCount);
    }, [t.id, d, t.premiumSubscriberCount]);
    let c = r.useCallback(
        (e) => {
            a &&
                (0, e5.L3)(e, async () => {
                    let { default: e } = await n.e("71728").then(n.bind(n, 709843));
                    return (n) => (0, s.jsx)(e, { ...n, guild: t });
                });
        },
        [a, t],
    );
    return (0, s.jsx)(ey.D, {
        "aria-label": void 0,
        role: "button",
        focusProps: { offset: { left: 10, right: 4 } },
        onClick: o,
        className: ez()(ta.kL, { [ta.aF]: l }),
        onContextMenu: c,
        children: (0, s.jsx)(to, {
            appliedBoostCount: d,
            maxBoostCount: i,
            premiumSubscriberCount: t.premiumSubscriberCount,
        }),
    });
}
function tc(e) {
    let { guild: t, withMargin: n } = e;
    return (0, s.jsx)(td, { guild: t, withMargin: n });
}
to.displayName = "GuildPowerupsProgressBarUI";
var tu = n(455234),
    th = n(181079),
    tA = n(607567),
    tg = n(403362),
    tm = n(996439),
    tf = n(935208),
    tp = n(63995),
    tC = n(518769);
function tE(e) {
    let { voiceState: t, userNick: n, user: l } = e,
        i = (0, tA.hz)(t, n);
    return { user: l, voiceState: t, nick: n, comparator: i };
}
var tx = n(787541),
    tN = n(79858),
    t_ = n(600761),
    tS = n(72314),
    tI = n(297469),
    tb = n(960755),
    tG = n(866842),
    tR = n(633965),
    tv = n(702841),
    tj = n(41200),
    ty = n(496767),
    tM = n(134413),
    tL = n(701785),
    tT = n(101611),
    tU = n(473529),
    tD = n(978165),
    tO = n(960253),
    tP = n(770666),
    tV = n(508654),
    tw = n(470452),
    tH = n(521427),
    tB = n(488803),
    tk = n(969117);
let tF = (0, n(945810).mj)({
    name: "2026-04-mobile-boost-progress-bar",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var tK = n(871123),
    tz = n(491394),
    tW = n(281405),
    tY = n(3026),
    tX = n(821609),
    tq = n(187322),
    tJ = n(847374),
    tZ = n(499373),
    t$ = n(285796),
    tQ = n(914430),
    t0 = n(47167),
    t1 = n(485947),
    t2 = n(551851),
    t3 = n(485596);
function t9(e) {
    e.stopPropagation();
}
let t6 = el(
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
                m = (0, u.bG)([K.Ay], () => K.Ay.isChannelMuted(l.getGuildId(), l.id)),
                f = (0, u.bG)([P.A], () => P.A.isCollapsed(l.id)),
                p = (0, u.bG)([k.A], () => k.A.can(Y.xBc.MANAGE_CHANNELS, l)),
                C = (0, t0.Ay)(l);
            t = null != h ? (c > h ? t3.mU : t3.TR) : t3.fx;
            let E = r.useCallback(() => {
                    f ? (0, tQ.fh)(l.id) : (0, tQ.Gv)(l.id);
                }, [l.id, f]),
                x = r.useCallback(
                    (e) => {
                        if ("null" !== l.id) {
                            let t = B.A.getGuild(l.getGuildId());
                            null != t &&
                                (0, e5.L3)(e, async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("26132"),
                                        n.e("91763"),
                                        n.e("38730"),
                                        n.e("35321"),
                                        n.e("50033"),
                                        n.e("3998"),
                                        n.e("30997"),
                                        n.e("12255"),
                                        n.e("40959"),
                                        n.e("79995"),
                                        n.e("91377"),
                                        n.e("35723"),
                                        n.e("66378"),
                                        n.e("15675"),
                                    ]).then(n.bind(n, 740438));
                                    return (n) => (0, s.jsx)(e, { ...n, channel: l, guild: t });
                                });
                        }
                    },
                    [l],
                ),
                N = r.useCallback(() => {
                    let e = l.type === Y.rbe.GUILD_CATEGORY ? null : l.type,
                        t = l.getGuildId();
                    null != t &&
                        (0, j.openModalLazy)(async () => {
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
                { role: _, tabIndex: S, ...I } = (0, d.rm)(l.id),
                b = r.useRef(null),
                G = r.useRef(null),
                R = (0, s.jsxs)("li", {
                    className: t,
                    "data-dnd-name": C,
                    children: [
                        (0, s.jsx)(tq.vN, {
                            focusTarget: b,
                            ringTarget: G,
                            offset: { left: 4, right: 4 },
                            children: (0, s.jsxs)("div", {
                                ref: G,
                                className: ez()(t3.Ki, t3.iE, { [t3.yZ]: f, [t3.SU]: m, [t3.vk]: !0 }),
                                onContextMenu: x,
                                children: [
                                    (0, s.jsxs)(ey.D, {
                                        innerRef: b,
                                        className: t3.rb,
                                        tabIndex: S,
                                        ...I,
                                        onClick: E,
                                        "aria-label": eC.intl.formatToPlainString(eC.t.y5l3J2, { categoryName: C }),
                                        "aria-expanded": !f,
                                        focusProps: { enabled: !1 },
                                        children: [
                                            (0, s.jsx)(t1.A, {
                                                className: t3.UU,
                                                children: (0, s.jsx)(tY.A, { children: C }),
                                            }),
                                            A
                                                ? null
                                                : (0, s.jsx)(tJ.a, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: t3.Kk,
                                                  }),
                                        ],
                                    }),
                                    (0, s.jsx)("div", {
                                        onClick: t9,
                                        className: t3.Y_,
                                        children:
                                            p && !o
                                                ? (0, s.jsx)(ej.m, {
                                                      text: eC.intl.string(eC.t["fUYU+j"]),
                                                      children: (0, s.jsx)(ey.D, {
                                                          className: ez()(t3.c9, t3.ih),
                                                          onClick: N,
                                                          tabIndex: S,
                                                          role: "button",
                                                          "aria-label": eC.intl.string(eC.t["fUYU+j"]),
                                                          children: (0, s.jsx)(tZ.T, {
                                                              size: "xs",
                                                              color: "currentColor",
                                                              className: t3.hs,
                                                          }),
                                                      }),
                                                  })
                                                : null,
                                    }),
                                ],
                            }),
                        }),
                        g,
                    ],
                });
            return null != a && null != i ? a(i(R)) : R;
        }),
    ),
    t7 = r.memo(function (e) {
        let { name: t, onDismiss: n, className: l } = e;
        return (0, s.jsx)("li", {
            className: ez()(l, t3.fx),
            children: (0, s.jsxs)("div", {
                className: ez()(t3.Ki, t3._V),
                children: [
                    (0, s.jsx)("div", {
                        className: t3.rb,
                        children: (0, s.jsx)(t1.A, { className: t3.UU, children: (0, s.jsx)(tY.A, { children: t }) }),
                    }),
                    null != n
                        ? (0, s.jsx)(ej.m, {
                              asContainer: !0,
                              text: eC.intl.string(eC.t["5qNmsU"]),
                              children: (0, s.jsx)(ey.D, {
                                  className: t3.r,
                                  onClick: n,
                                  children: (0, s.jsx)(t$.a, { size: "md", color: "currentColor", className: t3.X8 }),
                              }),
                          })
                        : null,
                ],
            }),
        });
    }),
    t5 = r.memo(function (e) {
        let { category: t } = e,
            n = (0, u.bG)([t2.A], () => t2.A.isVoiceCategoryCollapsed(t.guild.id)),
            l = r.useCallback(() => {
                var e, l;
                n
                    ? ((e = t.guild.id), e8.h.dispatch({ type: "VOICE_CATEGORY_EXPAND", guildId: e, expand: !0 }))
                    : ((l = t.guild.id), e8.h.dispatch({ type: "VOICE_CATEGORY_COLLAPSE", guildId: l, expand: !1 }));
            }, [t.guild.id, n]);
        return (0, s.jsx)("div", {
            className: t3.oA,
            children: (0, s.jsx)(tX.$, {
                variant: "secondary",
                fullWidth: !0,
                onClick: l,
                icon: S.H,
                text: n ? eC.intl.string(eC.t["/eB9Bg"]) : eC.intl.string(eC.t.Q2gPWl),
            }),
        });
    }),
    t4 = r.memo(function (e) {
        let { category: t, channel: n } = e,
            l = (0, u.bG)([t2.A], () => t2.A.isVoiceCategoryCollapsed(t.guild.id));
        return l || null == n || n.record.type === Y.rbe.GUILD_CATEGORY
            ? l
                ? (0, s.jsx)("li", {
                      className: t3.fx,
                      children: (0, s.jsx)("div", {
                          className: ez()(t3.Ki, t3._V),
                          children: (0, s.jsx)(t1.A, {
                              className: t3.UU,
                              children: (0, s.jsx)(tY.A, { children: eC.intl.string(eC.t["V/u9Dy"]) }),
                          }),
                      }),
                  })
                : null
            : (0, s.jsx)("div", { style: { height: 16 } });
    }),
    t8 = r.memo(function (e) {
        let { channel: t } = e,
            n = (0, t0.Ay)(t);
        return (0, s.jsx)("li", {
            className: t3.fx,
            children: (0, s.jsx)("div", {
                className: ez()(t3.Ki, t3._V),
                children: (0, s.jsx)(t1.A, { className: t3.UU, children: (0, s.jsx)(tY.A, { children: n }) }),
            }),
        });
    });
var ne = n(728321),
    nt = n(244083);
let nn = { origin: { x: -36, y: 7 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } };
var nl = n(808240);
let ni = r.memo(function (e) {
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
            null != a && i.includes(a) && (t = (0, ev.xb)(l)), (0, ev.DD)(n.id, i, t);
        }, [n.id, a, l, i]),
        { density: c } = (0, C.wR)(),
        u = "compact" === c ? 8 : 12;
    switch (t) {
        case tI.PU:
            return (0, s.jsx)("div", { style: { height: u } });
        case tI.bK:
            if (n.features.has(Y.GuildFeatures.HUB)) return null;
            return (0, s.jsx)("div", { style: { height: u } });
        case tI.HP:
            return (0, s.jsx)(t7, { name: eC.intl.string(eC.t.mlPMCy) });
        case l.recentsSectionNumber:
            return (0, s.jsx)(t7, { name: eC.intl.string(eC.t.gKcrqM), onDismiss: d });
        case l.voiceChannelsSectionNumber: {
            let e = l.getCategoryFromSection(l.voiceChannelsSectionNumber);
            if (null == e || e.isEmpty()) return null;
            let n = l.getChannelFromSectionRow(t, 0)?.channel;
            return (0, s.jsxs)(r.Fragment, {
                children: [(0, s.jsx)("div", { className: nl.ts }), (0, s.jsx)(t4, { category: e, channel: n })],
            });
        }
        case tI.TF: {
            let e = l.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, s.jsx)(t6, {
                channel: e.record,
                position: e.position,
                disableManageChannels: o,
                children: (0, s.jsx)(ne.A, {
                    inlineSpecs: nn,
                    arrowAlignment: nt.oN.TOP,
                    tutorialId: "organize-by-topic",
                    position: "right",
                }),
            });
        }
        default: {
            let e = l.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, s.jsx)(t6, { channel: e.record, position: e.position, disableManageChannels: o });
        }
    }
});
var ns = n(104171),
    nr = n(186369),
    na = n(970812),
    no = n(871237);
function nd(e, t, n) {
    return {
        hasDivider:
            !(function (e, t) {
                if (t === tI.PU) {
                    let t = e.getGuildActionSection().getRows();
                    return (
                        (1 === t.length && t[0] === tW.n.GUILD_PREMIUM_PROGRESS_BAR) ||
                        e.getGuildActionSection().isEmpty()
                    );
                }
                return 0 === e.getSections(!1)[t];
            })(e, n) &&
            (n === tI.PU ||
                ((0, U.ai)(e.id)
                    ? n !== e.getSections(!1).length - 1
                    : n === tI.HP ||
                      (!!t && n !== tI.bK && (n === e.recentsSectionNumber || (e.voiceChannelsSectionNumber, !1))))),
        canHaveVoiceSummary:
            n !== tI.PU &&
            n !== tI.HP &&
            n !== tI.bK &&
            n !== e.recentsSectionNumber &&
            n !== e.voiceChannelsSectionNumber,
    };
}
let nc = r.memo(function (e) {
        let { guildChannels: t, guildChannelsVersion: n } = e,
            l = r.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
        return null == l ? null : (0, s.jsx)(t5, { category: l });
    }),
    nu = r.memo(function (e) {
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
            { hasDivider: h, canHaveVoiceSummary: A } = r.useMemo(() => nd(n, c, t), [n, c, t, l]),
            g = r.useMemo(() => (t === tI.PU ? null : n.getCategoryFromSection(t)), [n, t, l]),
            m = (0, O.jN)(a),
            { enableWaveformIcon: f } = (0, nr.b)(a, "ChannelListSectionFooter"),
            p = (0, u.yK)([K.Ay], () => {
                if (null == g || !g.isCollapsed || !A) return [];
                let e = g.getChannelRecords(),
                    t = [];
                for (let n of e) {
                    if (!n.isGuildVocal()) continue;
                    let e = K.Ay.isChannelOrParentOptedIn(a, n.id);
                    (!m || e) && t.push(n);
                }
                return t;
            }, [g, A, a, m]),
            C = r.useMemo(
                () => (0, no.fK)({ channels: p, selectedChannelId: o, selectedVoiceChannelId: d, voiceStates: i }),
                [p, o, d, i],
            );
        if (t === n.voiceChannelsSectionNumber) return (0, s.jsx)(nc, { guildChannels: n, guildChannelsVersion: l });
        let E = h ? (0, s.jsx)("div", { className: nl.ts }) : null;
        return A && 0 !== C.length
            ? (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)("div", {
                          className: nl.qz,
                          children: (0, s.jsx)(ns.Ay, {
                              renderIcon: !0,
                              users: C,
                              max: 8,
                              showUserPopout: !0,
                              guildId: a,
                              renderLeadingIcon: f
                                  ? (e) => (0, s.jsx)(na.A, { color: "currentColor", className: ez()(e, eP.Gj) })
                                  : void 0,
                          }),
                      }),
                      E,
                  ],
              })
            : E;
    });
var nh = n(625903),
    nA = n(283973),
    ng = n(933832),
    nm = n(435183),
    nf = n(698441),
    np = n(855687),
    nC = n(816662),
    nE = n(446600),
    nx = n(616356);
function nN(e, t, n) {
    return null != t && !!t && !X(n, e.type);
}
function n_(e, t) {
    return null == t ? eP.fx : e > t ? eP.mU : eP.TR;
}
function nS(e) {
    let { channel: t, disableManageChannels: n, tabIndex: l, forceShowButtons: i, hasChannelInfo: r = !1 } = e;
    return (0, u.bG)(
        [k.A, F.A],
        () =>
            n ||
            (0, U.ai)(F.A.getGuildId()) ||
            (!k.A.can(Y.xBc.MANAGE_CHANNELS, t) &&
                !k.A.can(Y.xBc.MANAGE_ROLES, t) &&
                !k.A.can(Y.xBc.MANAGE_WEBHOOKS, t)) ||
            ((0, z.tr)(t.type) && !k.A.can(Y.xBc.VIEW_CHANNEL, t)) ||
            (t.isGuildVocal() && !k.A.can(Y.xBc.CONNECT, t)) ||
            !z.bk.has(t.type) ||
            t.isModeratorReportChannel(),
    )
        ? null
        : (0, s.jsx)(ej.m, {
              asContainer: !0,
              text: eC.intl.string(eC.t["3gUsJb"]),
              children: (0, s.jsx)(ey.D, {
                  className: ez()(eP.Xs, i ? eP.Tf : void 0, r ? eP.bw : eP.UI),
                  onClick: function () {
                      nm.Ay.open(t.id);
                  },
                  tabIndex: l,
                  "aria-label": eC.intl.string(eC.t["3gUsJb"]),
                  children: (0, s.jsx)(nh.Z, { size: "xs", color: "currentColor", className: eP.gE }),
              }),
          });
}
function nI(e) {
    let {
            channel: t,
            isDefaultChannel: l = !1,
            locked: i,
            tabIndex: a,
            forceShowButtons: o,
            hasChannelInfo: d = !1,
        } = e,
        c = (0, u.bG)([B.A], () => B.A.getGuild(t.getGuildId())),
        h = (0, u.bG)([nE.A], () => nE.A.getStageInstanceByChannel(t.id), [t.id]),
        A = (0, u.bG)([nf.Ay], () => nf.Ay.getActiveEventByChannel(t.id), [t.id]),
        g = (0, u.bG)([k.A], () => (0, np.K)(k.A, c, t, h)),
        m = (0, u.bG)([], () =>
            t?.type === Y.rbe.GUILD_VOICE ? eC.intl.string(eC.t["EE+P0H"]) : eC.intl.string(eC.t["0jeAXt"]),
        ),
        f = r.useRef(null);
    if (i || !g || t.isModeratorReportChannel() || t.isThread()) return null;
    let p = (0, s.jsx)(nA.R, { size: "xs", className: eP.gE, "aria-hidden": !0, color: "currentColor" });
    return (
        l &&
            (p = (0, s.jsx)(ne.A, {
                childRef: f,
                tutorialId: "instant-invite",
                position: "left",
                children: (0, s.jsx)("div", { ref: f, children: p }),
            })),
        (0, s.jsx)(ej.m, {
            asContainer: !0,
            text: m,
            children: (0, s.jsx)(ey.D, {
                className: ez()(eP.Xs, o ? eP.Tf : void 0, d ? eP.bw : eP.UI),
                onClick: function () {
                    if (null != c) {
                        let e = nx.A.getAllActiveStreams().filter(
                            (e) => e.state !== Y.XYD.ENDED && e.channelId === t.id,
                        );
                        (0, j.openModalLazy)(async () => {
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
                                    source: Y.PE1.GUILD_CHANNELS,
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
function nb(e) {
    let { channel: t } = e;
    return (0, s.jsx)(ej.m, {
        asContainer: !0,
        text: eC.intl.string(eC.t["ROh4T+"]),
        children: (0, s.jsx)(ey.D, {
            className: eP.Xs,
            onClick: function () {
                (0, nC.Ol)(t.guild_id, t.id);
            },
            "aria-label": eC.intl.string(eC.t["ROh4T+"]),
            children: (0, s.jsx)(eM.P, { size: "xs", color: "currentColor", className: eP.gE }),
        }),
    });
}
function nG(e) {
    let { channel: t } = e;
    return (0, s.jsx)(ej.m, {
        asContainer: !0,
        text: eC.intl.string(eC.t["N2c/Un"]),
        children: (0, s.jsx)(ey.D, {
            className: eP.Xs,
            onClick: function () {
                (0, nC.jA)(t.guild_id, t.id, !0, { section: Y.JJy.CHANNEL_LIST });
            },
            "aria-label": eC.intl.string(eC.t["N2c/Un"]),
            children: (0, s.jsx)(ng.A, { size: "xs", color: "currentColor", className: eP.gE }),
        }),
    });
}
class nR extends r.PureComponent {
    static defaultProps = { isDefaultChannel: !1 };
    renderEditButton() {
        return (0, s.jsx)(nS, { ...this.props });
    }
    renderInviteButton() {
        return (0, s.jsx)(nI, { ...this.props });
    }
    renderRemoveSuggestionButton() {
        return (0, s.jsx)(nb, { ...this.props });
    }
    renderAcceptSuggestionButton() {
        return (0, s.jsx)(nG, { ...this.props });
    }
    getClassName() {
        let { position: e, sortingPosition: t } = this.props;
        return n_(e, t);
    }
    isDisabled() {
        let { channel: e, sorting: t, sortingType: n } = this.props;
        return nN(e, t, n);
    }
}
var nv = n(929481),
    nj = n(790782);
let ny = el(function (e) {
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
        m = (0, u.bG)([V.A, H.Ay], () => {
            let e = H.Ay.getDirectoryChannelIds(t.id);
            return 0 === e.length ? null : V.A.getChannel(e[0]);
        }),
        f = (0, u.bG)([V.A], () => V.A.getChannel(m?.parent_id)),
        p = l === m?.id,
        C = (0, t0.Ay)(m),
        E = (0, u.bG)([k.A], () =>
            null != f ? k.A.can(Y.xBc.MANAGE_CHANNELS, f) : null != t && k.A.can(Y.xBc.MANAGE_CHANNELS, t),
        ),
        x = r.useCallback(
            (e) => {
                null != m &&
                    (0, e5.L3)(e, async () => {
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
    let N = n_(i, c),
        _ = nN(m, o, d),
        S = (0, s.jsx)("div", {
            className: ez()(N, { [eP.r9]: _, [eP.wH]: p }),
            "data-dnd-name": C,
            children: (0, s.jsxs)(nv.Ay, {
                className: eP.Ki,
                channel: m,
                guild: t,
                selected: p,
                onContextMenu: x,
                forceInteractable: !0,
                resolvedUnreadSetting: nj.e.ONLY_MENTIONS,
                children: [
                    (0, s.jsx)(nI, { channel: m, tabIndex: g }),
                    (0, s.jsx)(nS, { channel: m, disableManageChannels: a, tabIndex: g }),
                ],
            }),
        });
    return E && (S = A(h(S))), S;
});
var nM = n(34188),
    nL = n(733391),
    nT = n(832163),
    nU = n(517907),
    nD = n(31969),
    nO = n(44724),
    nP = n(849134),
    nV = n(770178),
    nw = n(65347);
let nH = Math.ceil(Math.sqrt(115200)),
    nB = (nH - 240) / 2,
    nk = r.forwardRef(function (e, t) {
        let { children: n } = e,
            [l, i] = r.useState(-1),
            a = r.useCallback((e) => {
                i(e.contentRect.width);
            }, []),
            o = (0, nV.w)(a, [], { fireOnMount: !0 }),
            [{ shineSpring: d }, c] = (0, e7.z)(() => ({
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
                        (0, s.jsx)(e6.animated.div, {
                            className: nw.q,
                            style: {
                                transform: d.to(
                                    (e) => `translateX(calc(${e * l}px + ${e * nH}px)) translateY(-50%) rotate(45deg)`,
                                ),
                            },
                        }),
                    ),
                [n, l, d],
            );
        return (
            r.useImperativeHandle(t, () => ({ onMouseEnter: u, onMouseLeave: h }), [u, h]),
            (0, s.jsx)("div", {
                className: nw.i,
                onMouseEnter: u,
                onMouseLeave: h,
                onFocus: u,
                onBlur: h,
                ref: o,
                style: { "--custom-shine-dimensions": "240px", "--custom-shine-rotated-dimensions-delta": `${nB}px` },
                children: A,
            })
        );
    });
var nF = n(371794),
    nK = n(240248),
    nz = n(998218),
    nW = n(430825),
    nY = n(601551),
    nX = n(876772);
let nq = r.memo(function (e) {
    let { guild: t, selected: l } = e,
        i = r.useRef(null),
        a = r.useRef(null),
        o = (0, j.useHasAnyModalOpen)(),
        d = (0, u.bG)([eH.A], () => eH.A.hasLayers()),
        c = (0, ew.xr)((e) => e.fullScreenLayers.length > 0);
    r.useEffect(() => {
        (0, nL.Kh)(t.id);
    }, [t.id]);
    let A = (0, u.bG)([nT.A], () => nT.A.getAnnouncement(t.id)),
        g = A?.state === "success" ? A.announcement : void 0,
        [m, f] = (0, eT.x_)(eo.M.GAME_SHOP_NEW_BADGE, t.id, g?.id ?? "", void 0, !0),
        p = m === eo.M.GAME_SHOP_NEW_BADGE && null != g,
        C = (0, tK.nY)(t.id),
        E = (0, nD.F)("storefront_badge", { applicationId: C }),
        x = (0, nU.A)({ applicationId: C, location: "game_shop_channel_row" }),
        _ = null;
    p ? (_ = eC.intl.string(eC.t.y2b7CA)) : x && (_ = eC.intl.string(nW.default.hriMCc)), null != E && (_ = E.text);
    let [S, I] = (0, eT.x_)(eo.M.GAME_SHOP_NEW_DROP_POPOVER, t.id, g?.id ?? ""),
        b = S === eo.M.GAME_SHOP_NEW_DROP_POPOVER && null != g;
    r.useEffect(() => {
        l && (p && f(eU.i.INDIRECT_ACTION), b && I(eU.i.INDIRECT_ACTION));
    }, [f, I, l, p, b]);
    let G = r.useCallback(() => {
            f(eU.i.TAKE_ACTION), I(eU.i.TAKE_ACTION);
            let e = (0, tK.mq)(t.id),
                n = nT.A.getStorefrontState(e)?.activePage ?? 0;
            (0, eN.pX)(Y.BVt.CHANNELS_GAME_SHOP(t.id, n));
        }, [t.id, f, I]),
        R = r.useCallback(() => {
            (0, nO.X)({ guildId: t.id, forceFetch: b });
        }, [t.id, b]),
        v = r.useCallback(() => {
            I(eU.i.USER_DISMISS);
        }, [I]),
        y = r.useCallback(
            (e) => {
                null != t &&
                    (0, e5.L3)(e, async () => {
                        let { default: e } = await n.e("99523").then(n.bind(n, 41614));
                        return (n) => (0, s.jsx)(e, { ...n, guild: t });
                    });
            },
            [t],
        ),
        M = r.useCallback(() => {
            i.current?.onMouseEnter(null, 500);
        }, [i]),
        L = r.useCallback(
            (e) =>
                (0, s.jsx)(ef.G, {
                    background: (0, s.jsx)("div", { className: nX.D }),
                    innerClassName: nX.Z,
                    ref: a,
                    id: `game-shop-${t.id}`,
                    renderIcon: (e) =>
                        (0, s.jsx)(nM.U, {
                            size: "custom",
                            color: "currentColor",
                            width: 20,
                            height: 20,
                            className: e,
                        }),
                    text: (0, s.jsx)(N.E, {
                        variant: "text-md/medium",
                        className: nY.UU,
                        children: eC.intl.string(eC.t.vyaWs7),
                    }),
                    selected: l,
                    onMouseDown: R,
                    onClick: G,
                    onContextMenu: y,
                    trailing: (0, s.jsxs)(s.Fragment, {
                        children: [
                            null != _ && (0, s.jsx)(ec.Lp, { text: _, color: h.A.colors.BACKGROUND_BRAND.css }),
                            e,
                        ],
                    }),
                }),
            [t.id, l, R, G, y, _],
        ),
        T = r.useMemo(() => {
            if (null == g) return null;
            switch (g.type) {
                case "guild-application-announcement": {
                    let e =
                            null != g.assetId
                                ? nz.A.toURLSafe((0, nF.YE)(g.applicationId, g.assetId, 256, "webp"))
                                : void 0,
                        t =
                            null != g.backgroundImageAssetId
                                ? nz.A.toURLSafe((0, nF.YE)(g.applicationId, g.backgroundImageAssetId, 256, "webp"))
                                : void 0;
                    if (null == e) return null;
                    return {
                        graphicSource: { type: "sku", imageUrl: e, backgroundImageUrl: t },
                        title: eC.intl.string(eC.t["7PvvS9"]),
                        body: eC.intl.formatToPlainString(eC.t["9J4h1a"], { applicationName: g.applicationName }),
                    };
                }
                case "guild-discord-announcement": {
                    let { videoAssetFullyQualifiedURL: e, assetFullyQualifiedURL: t } = g;
                    if ((0, nK.uJ)(e) && (0, nK.uJ)(t)) return null;
                    return {
                        graphicSource: (0, nK.uJ)(e) ? { type: "asset", src: t } : { type: "video", src: e },
                        title: g.popoverTitle,
                        body: g.popoverBody,
                        actionLabel: g.popoverCta,
                    };
                }
                default:
                    return null;
            }
        }, [g]),
        U = r.useCallback(
            () =>
                b && null != T
                    ? (0, s.jsx)(nP.A, {
                          onActionClick: G,
                          onActionMouseDown: R,
                          onRender: M,
                          onRequestClose: v,
                          targetElementRef: a,
                          ...T,
                      })
                    : null,
            [b, T, G, R, M, v],
        );
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(nk, { ref: i, children: L }), !o && !d && !c && U()] });
});
var nJ = n(740426),
    nZ = n(826673),
    n$ = n(591552),
    nQ = n(202776),
    n0 = n(454058),
    n1 = n(568548);
function n2(e) {
    let { guild: t, selected: l } = e,
        i = (0, nQ.A)(t),
        a = (0, nZ.HX)(eo.M.CHANNEL_BROWSER_NEW_BADGE_NUX),
        o = (0, tv.yK)([n0.A], () =>
            Array.from(n0.A.getNewChannelIds(t.id)).filter((e) => n0.A.shouldIndicateNewChannel(t.id, e)),
        ),
        d = (0, tv.bG)([n1.Ay], () => n1.Ay.hasUnread(t.id, nj.P.GUILD_ONBOARDING_QUESTION)),
        c = o.length > tI.rR,
        u = (0, tv.bG)([n$.A, n1.Ay], () => {
            let e = n$.A.lastFetchedAt(t.id),
                n = n1.Ay.lastMessageId(t.id, nj.P.GUILD_ONBOARDING_QUESTION);
            if (null == n) return !1;
            let l = tf.default.extractTimestamp(n);
            return null != e && e > l;
        }),
        A = r.useCallback(() => {
            (0, eN.pX)(Y.BVt.CHANNEL(t.id, i ? e_.VV.CUSTOMIZE_COMMUNITY : e_.VV.CHANNEL_BROWSER));
        }, [t.id, i]),
        g = r.useCallback(
            (e) => {
                (0, e5.L3)(e, async () => {
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
            (m = (0, s.jsx)(ec.Lp, {
                color: h.A.colors.BADGE_BACKGROUND_BRAND.css,
                text: eC.intl.string(eC.t.y2b7CA),
            })),
        (0, s.jsx)(ef.G, {
            id: `channels-${t.id}`,
            renderIcon: (e) => (0, s.jsx)(nJ.k, { size: "md", color: "currentColor", className: e }),
            text: i ? eC.intl.string(eC.t.h9mGOP) : eC.intl.string(eC.t.et6wav),
            selected: l,
            onClick: A,
            onContextMenu: g,
            trailing: m,
        })
    );
}
var n3 = n(855473);
function n9(e) {
    let { guild: t, selected: n } = e;
    return (0, s.jsx)(ef.G, {
        id: `home-tab-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(n3.Z, { size: "md", color: "currentColor", className: e }),
        text: eC.intl.string(eC.t.VbpLyU),
        selected: n,
        onClick: function () {
            (0, eN.pX)(Y.BVt.CHANNEL(t.id, e_.VV.GUILD_HOME));
        },
    });
}
var n6 = n(5373),
    n7 = n(65995),
    n5 = n(408619);
function n4(e, t) {
    return (0, s.jsx)(N.E, { variant: "text-xs/bold", color: "text-default", children: e }, t);
}
let n8 = r.memo(function (e) {
    let { guild: t } = e,
        n = (0, u.bG)([tL.h], () => tL.h.getNewMemberActions(t.id), [t.id]),
        l = (0, u.bG)([n7.A], () => n7.A.getCompletedActions(t.id)),
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
            (0, s.jsxs)(ey.D, {
                ...o,
                role: "button",
                focusProps: { offset: { right: 4 } },
                className: n5.G9,
                onClick: function () {
                    (0, eN.pX)(Y.BVt.CHANNEL(t.id, e_.VV.GUILD_HOME));
                },
                children: [
                    (0, s.jsxs)("div", {
                        className: n5.A1,
                        children: [
                            (0, s.jsx)(x.D, { variant: "heading-sm/bold", children: eC.intl.string(eC.t.SnrR3x) }),
                            (0, s.jsxs)("div", {
                                className: n5.Ib,
                                children: [
                                    (0, s.jsx)(N.E, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        className: n5.Cv,
                                        children: eC.intl.format(eC.t.eqZ1lW, {
                                            numberHook: n4,
                                            total: a.toString(),
                                            completed: i.toString(),
                                        }),
                                    }),
                                    (0, s.jsx)(tl.A, {
                                        className: n5.UE,
                                        width: 16,
                                        height: 16,
                                        direction: tl.A.Directions.RIGHT,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, s.jsx)(n6.i, {
                        className: n5.hr,
                        foregroundGradientColor: [
                            h.A.unsafe_rawColors.GREEN_300.css,
                            h.A.unsafe_rawColors.GREEN_230.css,
                        ],
                        percent: (i / a) * 100 + 3,
                        animate: !0,
                    }),
                ],
            }),
            (0, s.jsx)("div", { role: "separator", className: n5.yF }),
        ],
    });
});
var le = n(581925);
function lt(e) {
    let { guild: t, selected: n } = e;
    return (0, s.jsx)(ef.G, {
        id: `official-messages-page-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(le.L, { size: "md", color: "currentColor", className: e }),
        text: eC.intl.string(eC.t.xHEzFh),
        selected: n,
        onClick: function () {
            (0, eN.pX)(Y.BVt.CHANNEL(t.id, e_.VV.GUILD_OFFICIAL_MESSAGES));
        },
    });
}
var ln = n(514179);
function ll(e) {
    let { guild: t, selected: l } = e;
    return (0, s.jsx)(ef.G, {
        id: `subscriptions-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(ln.A, { className: e }),
        text: eC.intl.string(eC.t["KzCF/6"]),
        selected: l,
        onClick: function () {
            (0, eN.pX)(Y.BVt.CHANNEL(t.id, e_.VV.ROLE_SUBSCRIPTIONS));
        },
        onContextMenu: function (e) {
            null != t &&
                (0, e5.L3)(e, async () => {
                    let { default: e } = await n.e("71911").then(n.bind(n, 978554));
                    return (n) => (0, s.jsx)(e, { ...n, guild: t });
                });
        },
    });
}
var li = n(506774),
    ls = n(95561),
    lr = n(289397),
    la = n(486418),
    lo = n(575926),
    ld = n(440293),
    lc = n(174459),
    lu = n(634654),
    lh = n(726965);
function lA(e) {
    let { guildId: t, selected: n, handleClick: l } = e,
        i = (0, ld.w)(t),
        r = (0, tv.bG)([B.A], () => B.A.getGuild(t)),
        a = r?.features.has(Y.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !0,
        o = "false" === li.w.get(lu.bJ, "false"),
        d = (0, tv.bG)([ei.Ay], () => ei.Ay.useReducedMotion);
    return (0, s.jsx)(ef.G, {
        id: `shop-${t}`,
        className: ez()(lh.A2, { [lh.wH]: n, [lh.ST]: o }),
        innerClassName: lh.LE,
        renderIcon: (e) => (0, s.jsx)(lo.h, { width: 20, height: 20, className: ez()([e, lh.sV]) }),
        text: eC.intl.string(eC.t.al5EXL),
        selected: n,
        onClick: l,
        trailing: (0, s.jsxs)("div", {
            className: lh.ai,
            children: [
                d
                    ? (0, s.jsx)(ec.Lp, {
                          color: h.A.unsafe_rawColors.BRAND_260.css,
                          text: eC.intl.string(eC.t.y2b7CA),
                          className: lh.Ad,
                      })
                    : (0, s.jsx)("img", {
                          src: (0, lr.n)("server_products/storefront/money.gif"),
                          className: lh.TG,
                          alt: "",
                      }),
                n &&
                    (0, s.jsx)(ey.D, {
                        className: lh.b,
                        onClick: function (e) {
                            e.stopPropagation(),
                                (0, nZ.Dr)(eo.M.SERVER_SHOP_PHANTOM_PREVIEW),
                                lc.default.track(Y.HAw.GUILD_SHOP_PREVIEW_CLICK, {
                                    ...(0, ls.H$)(t),
                                    action_taken: lu.hN.DISMISS_CHANNEL_ROW,
                                }),
                                (i && a) || (0, eN.bG)(Y.BVt.CHANNEL(t, H.Ay.getDefaultChannel(t)?.id));
                        },
                        "aria-label": eC.intl.string(eC.t.cpT0Cq),
                        children: (0, s.jsx)(t$.a, { size: "xs", color: "currentColor" }),
                    }),
            ],
        }),
    });
}
function lg(e) {
    let { guild: t, selected: l } = e;
    function i() {
        li.w.set(lu.bJ, "true"), (0, eN.pX)(Y.BVt.CHANNEL(t.id, e_.VV.GUILD_SHOP));
    }
    return (0, la.P)(t)
        ? (0, s.jsx)(lA, { guildId: t.id, selected: l, handleClick: i })
        : (0, s.jsx)(ef.G, {
              id: `shop-${t.id}`,
              renderIcon: (e) => (0, s.jsx)(lo.h, { width: 20, height: 20, className: e }),
              text: eC.intl.string(eC.t.al5EXL),
              selected: l,
              onClick: i,
              onContextMenu: function (e) {
                  null != t &&
                      (0, e5.L3)(e, async () => {
                          let { default: e } = await n.e("52565").then(n.bind(n, 345332));
                          return (n) => (0, s.jsx)(e, { ...n, guild: t });
                      });
              },
          });
}
var lm = n(308528),
    lf = n(262763),
    lp = n(499211),
    lC = n(406704),
    lE = n(747926),
    lx = n(977997),
    lN = n(807632),
    l_ = n(37411);
function lS(e) {
    let { thread: t, tabIndex: n } = e,
        l = (0, lN.YG)(t),
        i = (0, lN.IO)(t),
        r = (0, lC._M)(t);
    return l && i && r ? (0, s.jsx)(lI, { thread: t, tabIndex: n }) : null;
}
function lI(e) {
    let { thread: t, tabIndex: n } = e,
        l = (0, u.bG)([lx.A], () => lx.A.isInChannel(t.id), [t.id]),
        { needSubscriptionToAccess: i } = (0, lp.A)(t.id),
        a = r.useCallback(() => {
            lf.A.handleVoiceConnect({ channel: t, connected: l, needSubscriptionToAccess: i, locked: !1 });
        }, [t, l, i]),
        o = r.useCallback(() => {
            (0, lE.JA)(t, !0, l_.H9.CHANNEL_LIST);
        }, [t]);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(ej.m, {
                asContainer: !0,
                text: eC.intl.string(eC.t["96ANUN"]),
                children: (0, s.jsx)(ey.D, {
                    className: eP.Xs,
                    onClick: a,
                    tabIndex: n,
                    "aria-label": eC.intl.string(eC.t["96ANUN"]),
                    children: (0, s.jsx)(S.H, { size: "xs", color: "currentColor", className: eP.gE }),
                }),
            }),
            (0, s.jsx)(ej.m, {
                asContainer: !0,
                text: eC.intl.string(eC.t.ZXxLQg),
                children: (0, s.jsx)(ey.D, {
                    className: eP.Xs,
                    onClick: o,
                    tabIndex: n,
                    "aria-label": eC.intl.string(eC.t.ZXxLQg),
                    children: (0, s.jsx)(I.o, { size: "xs", color: "currentColor", className: eP.gE }),
                }),
            }),
        ],
    });
}
var lb = n(152007);
function lG(e) {
    return null != e && e > 0;
}
var lR = n(405018),
    lv = n(428689),
    lj = n(785574);
function ly(e) {
    let { total: t, users: n, videoLimit: l } = e;
    return (0, s.jsxs)("div", {
        className: lj.iE,
        children: [
            (0, s.jsxs)(N.E, {
                tag: "span",
                color: "text-subtle",
                variant: "text-xs/medium",
                className: ez()(lj.VV, { [lj.Ki]: l, [lj.$G]: n >= 100 }),
                children: [
                    l ? (0, s.jsx)(lv.n, { size: "md", color: "currentColor", className: lj.LB }) : null,
                    n.toString().padStart(2, "0"),
                ],
            }),
            (0, s.jsx)(N.E, {
                tag: "span",
                color: "text-subtle",
                variant: "text-xs/medium",
                className: ez()(lj.X5, { [lj.$G]: t >= 100 }),
                children: t.toString().padStart(2, "0"),
            }),
        ],
    });
}
function lM(e) {
    let { channel: t, video: n, userCount: l } = e,
        { limit: i } = (0, lR.A)(t),
        r = -1,
        a = !1;
    return (
        t.userLimit > 0 && (r = t.userLimit),
        n && i > 0 && ((a = r < 0 || i < r), (r = r > 0 ? Math.min(r, i) : i)),
        (0, s.jsx)(ly, { users: l, total: r, videoLimit: a })
    );
}
var lL = n(664841);
function lT(e) {
    let { mentionsCount: t, isMentionLowImportance: n } = e;
    return (0, s.jsx)("div", {
        className: lL.R,
        "aria-hidden": !0,
        children: (0, s.jsx)(ec.hV, {
            count: t,
            color: n ? h.A.colors.BACKGROUND_MOD_STRONG.css : h.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
        }),
    });
}
var lU = n(588224),
    lD = n(684086);
function lO(e) {
    let { thread: t, countInVoice: n, hasVideo: l, mentionCount: i, isMentionLowImportance: r } = e,
        a = n > 0 && t.userLimit > 0,
        o = lG(i);
    return a || o
        ? (0, s.jsxs)("div", {
              className: eP.yW,
              children: [
                  a ? (0, s.jsx)(lM, { userCount: n, video: l, channel: t }) : null,
                  o ? (0, s.jsx)(lT, { mentionsCount: i, isMentionLowImportance: r }) : null,
              ],
          })
        : null;
}
function lP(e) {
    let { style: t, withGuildIcon: n, inverted: l } = e,
        i = { className: ez()(lD.GI, { [lD.a7]: n }, { [lD.BJ]: l }), style: t },
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
let lV = r.memo(function (e) {
        let { thread: t, isSelectedChannel: l, isSelectedVoice: i, isLast: a, withGuildIcon: o } = e,
            c = (0, u.bG)([tA.Ay], () => tA.Ay.getVoiceStatesForChannel(t), [t]),
            h = (0, u.bG)([lx.A], () => lx.A.hasVideo(t.id)),
            {
                unread: A,
                mentionCount: g,
                isMentionLowImportance: m,
            } = (0, u.cf)([n1.Ay], () => ({
                unread: n1.Ay.hasUnread(t.id),
                mentionCount: n1.Ay.getMentionCount(t.id),
                isMentionLowImportance: n1.Ay.getIsMentionLowImportance(t.id),
            })),
            f = (0, u.bG)([lb.A], () => lb.A.isMuted(t.id)),
            p = r.useCallback(
                (e) => {
                    (0, lE.JA)(t, !e.shiftKey, l_.H9.CHANNEL_LIST);
                },
                [t],
            ),
            C = r.useCallback(() => {
                lm.A.preload(t.guild_id, t.id);
            }, [t.guild_id, t.id]),
            E = r.useCallback(
                (e) => {
                    let l = V.A.getChannel(t.id);
                    null != l &&
                        (0, e5.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("26132"),
                                n.e("91763"),
                                n.e("38730"),
                                n.e("47502"),
                                n.e("3998"),
                                n.e("43266"),
                                n.e("91671"),
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
            { role: _, ...S } = (0, d.rm)(t.id),
            I = r.useRef(null),
            b =
                g > 0
                    ? eC.intl.formatToPlainString(eC.t["ZL7+I6"], { channelName: t.name, mentionCount: g })
                    : A
                      ? eC.intl.formatToPlainString(eC.t.YlVvmc, { channelName: t.name })
                      : eC.intl.formatToPlainString(eC.t["0nZpiF"], { channelName: t.name });
        return (0, s.jsxs)("li", {
            role: _,
            className: ez()(eP.fx, { [eP.wH]: l }),
            children: [
                (0, s.jsx)(lP, { withGuildIcon: o }),
                a
                    ? null
                    : (0, s.jsx)(lP, {
                          withGuildIcon: o,
                          inverted: !0,
                          style: { transform: "rotateX(180deg) translateY(-9px)" },
                      }),
                (0, s.jsx)(tq.vN, {
                    focusTarget: I,
                    ringTarget: I,
                    offset: { top: 2, bottom: 2, right: 4 },
                    children: (0, s.jsxs)("div", {
                        className: ez()(eP.Ki, nY.iE, nY.ZS, {
                            [nY.J1]: l,
                            [nY.F4]: !l && f,
                            [nY.V2]: !f && !l && A,
                            [nY.lY]: o,
                        }),
                        onMouseDown: C,
                        onContextMenu: E,
                        children: [
                            !A || f || l ? null : (0, s.jsx)("div", { className: ez()(nY.gy, nY.WS) }),
                            (0, s.jsx)(ey.D, {
                                ...S,
                                innerRef: I,
                                className: nY.nf,
                                onClick: p,
                                "aria-label": b,
                                focusProps: { enabled: !1 },
                                children: (0, s.jsxs)("div", {
                                    className: ez()(nY.Y5, nY.__invalid_threadMainContent),
                                    children: [
                                        (0, s.jsx)(tY.A, {
                                            className: nY.UU,
                                            "aria-hidden": !0,
                                            children: (0, s.jsx)(N.E, {
                                                variant: "text-sm/medium",
                                                color: "none",
                                                children: t.name,
                                            }),
                                        }),
                                        (0, s.jsxs)("div", {
                                            className: nY.Y_,
                                            onClick: nv.dG,
                                            onKeyDown: nv.dG,
                                            children: [
                                                (0, s.jsx)(lO, {
                                                    thread: t,
                                                    countInVoice: x,
                                                    hasVideo: h,
                                                    mentionCount: g,
                                                    isMentionLowImportance: m,
                                                }),
                                                (0, s.jsx)(lS, { thread: t, tabIndex: S.tabIndex }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                }),
                (0, s.jsx)(lU.A, {
                    channel: t,
                    collapsed: !i && 1 !== c.length,
                    collapsedMax: 6,
                    voiceStates: c,
                    isThread: !0,
                }),
            ],
        });
    }),
    lw = r.memo(function (e) {
        let { channel: t, selectedChannel: n, selectedVoiceChannelId: l, sortedThreadIds: i, withGuildIcon: r } = e,
            a = (0, t0.Ay)(t),
            { density: o } = (0, C.wR)(),
            d = (0, u.yK)([V.A], () => i.map((e) => V.A.getChannel(e)).filter(tg.Vq), [i]),
            c = (0, u.bG)([tA.Ay], () => {
                let e = d[d.length - 1];
                if (null == e) return 0;
                let t = tA.Ay.getVoiceStates(e.guild_id)[e.id];
                return null == t || 0 === t.length ? 0 : l !== e.id ? 40 : 32 * t.length + 8;
            });
        return (0, s.jsx)("li", {
            className: lD.kL,
            children: (0, s.jsxs)("ul", {
                role: "group",
                "aria-label": eC.intl.formatToPlainString(eC.t.EiyIi6, { channelName: a }),
                children: [
                    (0, s.jsx)("div", {
                        className: ez()(lD.eh, { [lD.ET]: r }),
                        style: { bottom: ("cozy" === o ? 28 : 24) + c },
                    }),
                    d.map((e, t) =>
                        (0, s.jsx)(
                            lV,
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
var lH = n(922016),
    lB = n(367513),
    lk = n(296216),
    lF = n(963027),
    lK = n(202384),
    lz = n(51758),
    lW = n(139033),
    lY = n(305866),
    lX = n(123292),
    lq = n(830215),
    lJ = n(315982),
    lZ = n(480900),
    l$ = n(557722),
    lQ = n(834942),
    l0 = n(287809),
    l1 = n(53516),
    l2 = n(914081),
    l3 = (((l = {})[(l.VOICE = 0)] = "VOICE"), l);
let l9 = function (e) {
    let { type: t, guildId: l, closePopout: i } = e,
        r = (0, ea.GV)(),
        a = (0, u.bG)([lQ.A], () => lQ.A.getCheck(l), [l]),
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
                let e = eC.intl.string(eC.t["6zY8BI"]),
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
                    ? { header: e, body: eC.intl.string(eC.t.IRxUlG), buttonText: eC.intl.string(eC.t.fiNVin) }
                    : l
                      ? { header: e, body: eC.intl.string(eC.t.vW8iUF), buttonText: eC.intl.string(eC.t["50gfOv"]) }
                      : i
                        ? { header: e, body: eC.intl.string(eC.t.vdSOpz), buttonText: eC.intl.string(eC.t.lm1UKt) }
                        : s
                          ? {
                                header: e,
                                body: eC.intl.formatToPlainString(eC.t.v1ktYb, { min: Y.$8o.MEMBER_AGE }),
                                buttonText: eC.intl.string(eC.t.BddRzS),
                            }
                          : r
                            ? {
                                  header: e,
                                  body: eC.intl.formatToPlainString(eC.t.sncw41, { min: Y.$8o.ACCOUNT_AGE }),
                                  buttonText: eC.intl.string(eC.t.BddRzS),
                              }
                            : a && null != o && null === o.tags.guild_connections
                              ? {
                                    header: e,
                                    body: eC.intl.format(eC.t.MZbCuG, { roleName: `@${o.name}` }),
                                    buttonText: eC.intl.string(eC.t["6Ge2LG"]),
                                }
                              : { header: e, body: null, buttonText: null };
            }
        })(t, a);
    return null == g || null == m
        ? null
        : (0, s.jsxs)(lY.l, {
              className: l2.kL,
              "aria-labelledby": r,
              children: [
                  (0, s.jsx)("img", { alt: "", className: l2.Sl, src: n(303528) }),
                  (0, s.jsxs)("div", {
                      className: l2.Qs,
                      children: [
                          (0, s.jsx)(x.D, { variant: "heading-md/semibold", id: r, children: g }),
                          (0, s.jsx)(N.E, { color: "text-default", variant: "text-sm/normal", children: m }),
                          (0, s.jsxs)("div", {
                              className: l2.UD,
                              children: [
                                  null != f
                                      ? (0, s.jsx)("div", {
                                            "data-button-hoisted-classname-wrapper": !0,
                                            className: l2.FS,
                                            children: (0, s.jsx)(tX.$, {
                                                variant: "primary",
                                                text: f,
                                                onClick: function () {
                                                    o
                                                        ? lJ.R()
                                                        : c
                                                          ? (0, j.openModalLazy)(
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
                                                                            reason: l$.d.GUILD_PHONE_REQUIRED,
                                                                            ...t,
                                                                        });
                                                                },
                                                                { modalKey: l1.V },
                                                            )
                                                          : d
                                                            ? (lq.A.verifyResend(),
                                                              (0, lW.A)({
                                                                  title: eC.intl.string(eC.t.LykQYk),
                                                                  subtitle: eC.intl.format(eC.t.azKEPy, {
                                                                      email: l0.default.getCurrentUser()?.email,
                                                                  }),
                                                              }))
                                                            : h && null != A && (0, lZ.b)(A, l),
                                                        i();
                                                },
                                            }),
                                        })
                                      : null,
                                  o || c || d
                                      ? (0, s.jsx)(lX.Q, {
                                            onClick: i,
                                            text: eC.intl.string(eC.t.oEAioF),
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
var l6 = n(824865),
    l7 = n(378570),
    l5 = n(790535),
    l4 = n(113783),
    l8 = n(96566),
    ie = n(280450),
    it = n(312006),
    il = n(505543),
    ii = n(994500),
    is = n(685399),
    ir = n(475889),
    ia = n(693879),
    io = n(435470),
    id = n(35275),
    ic = n(138383);
function iu(e) {
    let { locked: t } = e;
    return (0, s.jsx)("div", {
        className: ez()(eP.Xs, ic.U),
        children: (0, s.jsx)(id.A, {
            className: eP.gE,
            color: t ? h.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css : void 0,
        }),
    });
}
var ih = n(695633),
    iA = n(669715),
    ig = n(769015),
    im = n(364132);
function ip(e) {
    let { className: t, embeddedApps: n, muted: l } = e;
    if (n.length <= 0) return null;
    {
        if (1 === n.length)
            return (0, s.jsx)("div", {
                className: ez()(im.kL, t, l && im.F4),
                children: (0, s.jsx)(ig.A, { game: n[0].application, className: im.wK }),
            });
        let e = n.length - 1;
        return (0, s.jsxs)("div", {
            className: ez()(im.kL, t, l && im.F4),
            children: [
                (0, s.jsx)(ig.A, { game: n[0].application, className: im.wK }),
                2 === n.length
                    ? (0, s.jsx)(ig.A, { game: n[1].application, className: im.wK })
                    : (0, s.jsx)(N.E, {
                          className: im.ju,
                          variant: "text-xs/bold",
                          color: "interactive-text-active",
                          children: `+${e}`,
                      }),
            ],
        });
    }
}
function iC(e) {
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
        m = (0, u.bG)([n1.Ay], () => n1.Ay.getMentionCount(t.id)),
        f = (0, u.bG)([n1.Ay], () => n1.Ay.getIsMentionLowImportance(t.id)),
        p = (0, is.Ay)(t),
        C = (0, u.bG)([k.A], () => !k.A.can(Y.xBc.CONNECT, t)),
        E = (0, ir.H)(t),
        x = (0, u.bG)([lx.A], () => lx.A.hasVideo(t.id)),
        _ = (0, l8.qT)(t.id) && t.isGuildStageVoice(),
        S = (function (e) {
            let { channel: t, locked: n, video: l, selected: i } = e;
            return (
                (function (e) {
                    let { channel: t, video: n, considerMaxStageVoiceUserLimit: l = !0 } = e,
                        { limit: i } = (0, lR.A)(t),
                        s = -1;
                    return (t.userLimit > 0 && (s = t.userLimit),
                    n && i > 0 && (s = s > 0 ? Math.min(s, i) : i),
                    l && s === Y.RCc)
                        ? 0
                        : s;
                })({ channel: t, video: l }) > 0 &&
                !n &&
                !i
            );
        })({ channel: t, locked: C, video: (x || _) && null == E, selected: n }),
        I = (0, u.bG)([ih.A], () => ih.A.getNewThreadCount(t.guild_id, t.id)),
        b = (0, io.ed)(t.guild_id, t.id),
        G = (0, u.bG)([B.A], () => B.A.getGuild(t.guild_id)?.features.has(Y.GuildFeatures.COMMUNITY) ?? !1);
    if (lG(m)) return (0, s.jsx)(lT, { mentionsCount: m, isMentionLowImportance: f });
    if (o) return (0, s.jsx)(iu, { locked: d });
    if (c)
        return (0, s.jsx)(ec.Lp, { text: eC.intl.string(eC.t.y2b7CA), color: h.A.colors.BADGE_BACKGROUND_BRAND.css });
    if (!A && g === nj.e.ALL_MESSAGES && t.isForumLikeChannel() && null != I && I > 0)
        return (0, s.jsx)(N.E, {
            variant: "text-xs/semibold",
            color: "text-brand",
            children: eC.intl.format(eC.t.GkAbqY, { count: (0, ec.Gu)(I) }),
        });
    if (!A && t.isForumLikeChannel() && null != b && b > 0)
        return (0, s.jsx)(N.E, { variant: "text-xs/semibold", color: "text-muted", children: (0, ec.Gu)(b) });
    let R = i?.length ?? 0;
    return null != r && r && S
        ? (0, s.jsx)(lM, { userCount: R, video: x || _, channel: t })
        : l && (0, iA.t)(i) && G
          ? (0, s.jsx)(ec.Lp, { text: eC.intl.string(eC.t.dI3q4h), color: h.A.unsafe_rawColors.RED_400.css })
          : null != E
            ? (0, s.jsx)(ia.z, { textColor: "text-feedback-positive", entry: { start: E } })
            : null != a && a && p.length > 0
              ? (0, s.jsx)(ip, { embeddedApps: p, muted: A })
              : null;
}
var iE = n(182222);
class ix extends nR {
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
        return (0, no.Pd)(e, lx.A, B.A);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return eP.ZS;
        if (null != t)
            if (e > t) return eP.mU;
            else return eP.TR;
        return eP.fx;
    }
    handleClick = () => {
        let { channel: e, locked: t, connected: n, unverifiedAccount: l, isSuggestedSection: i } = this.props,
            s = e.getGuildId();
        null != s && (0, lz.V)(s) && (0, lK.Ze)(s),
            l && this.setState({ shouldShowGuildVerificationPopout: !0 }),
            t || n || e.isRoleSubscriptionTemplatePreviewChannel() || (0, l5.av)(e),
            __OVERLAY__ || (0, l7.iN)(e.id, i ? { source: l6.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
    };
    handleClickChat = () => {
        let { channel: e, locked: t, isSuggestedSection: n } = this.props;
        __OVERLAY__ || t || (0, l7.iN)(e.id, n ? { source: l6.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            l = B.A.getGuild(t.getGuildId());
        null != l &&
            (0, e5.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("26132"),
                    n.e("46652"),
                    n.e("93103"),
                    n.e("93190"),
                    n.e("91763"),
                    n.e("38730"),
                    n.e("35321"),
                    n.e("50033"),
                    n.e("47502"),
                    n.e("3998"),
                    n.e("43266"),
                    n.e("9004"),
                    n.e("74610"),
                    n.e("30997"),
                    n.e("12255"),
                    n.e("40959"),
                    n.e("79995"),
                    n.e("80740"),
                    n.e("44058"),
                    n.e("91377"),
                    n.e("35723"),
                    n.e("66378"),
                    n.e("66540"),
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
        return (0, s.jsx)(lU.A, { channel: e, voiceStates: l, collapsed: t, tabIndex: n, numAudience: i });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        if (t)
            return (0, s.jsx)(l9, {
                type: l3.VOICE,
                guildId: e.guild_id,
                closePopout: this.closeGuildVerificationPopout,
            });
        throw Error("VoiceChannel.renderPopout: There must always be something to render");
    };
    renderOpenChatButton = () => {
        let { channel: e, locked: t, forceShowButtons: n } = this.props;
        if (!t)
            return (0, s.jsx)(ej.m, {
                asContainer: !0,
                text: eC.intl.string(eC.t.ZXxLQg),
                children: (0, s.jsx)(ey.D, {
                    className: ez()(eP.Xs, n ? eP.Tf : null),
                    onClick: () => {
                        lB.A.updateChatOpen(e.id, !0), this.handleClickChat();
                    },
                    "aria-label": eC.intl.string(eC.t.ZXxLQg),
                    children: (0, s.jsx)(I.o, { size: "xs", color: "currentColor", className: eP.gE }),
                }),
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, s.jsx)("div", { className: eP.yW, children: e });
    }
    getTooltipText = () => {
        let { connected: e } = this.props;
        return this.isFull() && !e ? eC.intl.string(eC.t.rZfiNq) : null;
    };
    renderSubtitle = () => {
        let e = this.props.stageInstance?.topic;
        return null == e ? null : (0, s.jsx)(tY.A, { children: e });
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
                className: ez()(this.getModeClass(), { [eP.r9]: this.isDisabled() }),
                "data-dnd-name": (0, t0.m1)(e, l0.default, ii.A),
                children: [
                    (0, s.jsx)(lH.Y, {
                        targetElementRef: this.channelItemRef,
                        position: "right",
                        renderPopout: this.renderPopout,
                        spacing: 17,
                        onRequestClose: this.closeGuildVerificationPopout,
                        shouldShow: C,
                        children: () =>
                            (0, s.jsx)(ej.m, {
                                text: this.getTooltipText(),
                                children: (0, s.jsxs)(nv.Ay, {
                                    ref: this.channelItemRef,
                                    className: eP.Ki,
                                    iconClassName: ez()({ [iE.G]: null != u }),
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
                                    "aria-label": (0, lF.Ay)({
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
let iN = el((0, lk.F)(ix));
function i_(e) {
    var t;
    let n,
        l,
        { guild: i, channel: r, disableSorting: a, isFavoriteCategory: o, collapsed: d, voiceStates: c } = e,
        h = (0, u.cf)([n1.Ay], () => ({ unread: n1.Ay.hasUnread(r.id), mentionCount: n1.Ay.getMentionCount(r.id) })),
        A = (0, u.bG)([K.Ay], () => K.Ay.resolveUnreadSetting(r)),
        g = (0, u.cf)([V.A, lQ.A, k.A], () => {
            let e = V.A.getChannel(r.parent_id),
                t = lQ.A.getCheck(r.guild_id);
            return {
                canManageChannel: null != i && k.A.can(Y.xBc.MANAGE_CHANNELS, r),
                canReorderChannel:
                    !0 !== a &&
                    ((0, U.ai)(i.id) ||
                        (null != e ? k.A.can(Y.xBc.MANAGE_CHANNELS, e) : k.A.can(Y.xBc.MANAGE_CHANNELS, i))),
                canMoveMembers: k.A.can(Y.xBc.MOVE_MEMBERS, r),
                locked: !k.A.can(Y.xBc.CONNECT, r),
                bypassLimit: k.A.can(Y.xBc.MOVE_MEMBERS, r),
                unverifiedAccount: !t.canChat,
            };
        }),
        m = (0, u.bG)([P.A], () => P.A.isCollapsed(r.parent_id)),
        f =
            ((t = r.id),
            (n = (0, il.A)(t)),
            (l = (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return (0, u.cf)([it.Ay, ie.default], () => {
                    let n = ie.default.getId();
                    return it.Ay.getPermissionsForUser(n, e, t);
                }, [e, t]);
            })(t, !0).moderator),
            !n && l ? 1 : 0),
        p = (0, u.bG)([nE.A], () => nE.A.getStageInstanceByChannel(r.id), [r.id]),
        C = (0, l4.zy)(r.id, tC.ip.AUDIENCE),
        { isSubscriptionGated: E, needSubscriptionToAccess: x } = (0, lp.A)(r.id),
        N = (0, u.bG)([K.Ay], () => K.Ay.isFavorite(i.id, r.id)),
        _ = (0, l8.xn)(r.id),
        S = iC({
            channel: r,
            isChannelSelected: !1,
            isChannelCollapsed: d,
            voiceStates: c,
            isSubscriptionGated: E,
            needSubscriptionToAccess: x,
            enableConnectedUserLimit: _ || (r.userLimit > 0 && r.userLimit < Y.RCc),
        }),
        I = e.connected && null == S;
    return (0, s.jsx)(iN, {
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
function iS(e, t) {
    let n = t.getGuildId();
    if (null == n) throw Error("TextChannel, preloadChannel: Channel does not have a guildId");
    lm.A.preload(n, t.id);
}
let iI = el(
        class extends nR {
            handleContextMenu = (e) => {
                let { channel: t } = this.props,
                    l = B.A.getGuild(t.getGuildId());
                null != l &&
                    (0, e5.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("26132"),
                            n.e("3998"),
                            n.e("9004"),
                            n.e("30997"),
                            n.e("12255"),
                            n.e("40959"),
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
                (0, eN.pX)(Y.BVt.CHANNEL(t, e.id), {
                    state: {
                        analyticsSource: {
                            page: Y.liQ.GUILD_CHANNEL,
                            section: Y.JJy.CHANNEL_LIST,
                            object: Y.ZSU.CHANNEL,
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
                        className: ez()(this.getClassName(), { [eP.r9]: this.isDisabled() }),
                        "data-dnd-name": (0, t0.m1)(e, l0.default, ii.A),
                        children: (0, s.jsxs)(nv.Ay, {
                            className: eP.Ki,
                            channel: e,
                            selected: t,
                            onClick: this.handleClick,
                            onMouseDown: iS,
                            onContextMenu: this.handleContextMenu,
                            connectDragPreview: r ? i : null,
                            "aria-label": (0, lF.Ay)({ channel: e }),
                            resolvedUnreadSetting: nj.e.ONLY_MENTIONS,
                            children: [this.renderInviteButton(), this.renderEditButton()],
                        }),
                    });
                return r ? n(l(a)) : a;
            }
        },
    ),
    ib = r.memo(function (e) {
        let { channel: t, guild: n, disableSorting: l } = e,
            i = (0, u.cf)([V.A, k.A], () => {
                let e = V.A.getChannel(t.parent_id);
                return {
                    canManageChannel: k.A.can(Y.xBc.MANAGE_CHANNELS, t),
                    canReorderChannel:
                        !0 !== l && null != e ? k.A.can(Y.xBc.MANAGE_CHANNELS, e) : k.A.can(Y.xBc.MANAGE_CHANNELS, n),
                };
            });
        return (0, s.jsx)(iI, { ...i, ...e });
    });
var iG = n(172218),
    iR = n(811024),
    iv = n(323073);
function ij(e) {
    if (null == e) return null;
    switch (e.type) {
        case "embedded-activities":
        case "event":
            return { subtitle: e.name };
        case "go-live":
            return { subtitle: eC.intl.string(eC.t.Pa817q) };
    }
    return null;
}
var iy = n(414808),
    iM = n(302005),
    iL = n(696451),
    iT = n(763827),
    iU = n(56059),
    iD = n(163328),
    iO = n(778712),
    iP = n(730134),
    iV = n(707539),
    iw = n(486020),
    iH = n(49741);
function iB(e) {
    let { channel: t } = e,
        l = (0, u.yK)([ih.A, n1.Ay, k.A], () => {
            let e = ih.A.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
            return o()(ih.A.getActiveJoinedThreadsForParent(t.guild_id, t.id))
                .values()
                .map((e) => e.channel)
                .concat(o().values(ih.A.getActiveUnjoinedThreadsForParent(t.guild_id, t.id)))
                .filter((t) => !(t.id in e) && k.A.can(Y.xBc.VIEW_CHANNEL, t))
                .sort((e, t) => {
                    let n = n1.Ay.lastMessageId(e.id),
                        l = n1.Ay.lastMessageId(t.id);
                    return tf.default.compare(n, l);
                })
                .reverse()
                .value();
        }),
        i = t.isForumLikeChannel() ? 5 : 3,
        a = t.isForumLikeChannel() ? iU.b : iD.y;
    return (
        r.useEffect(() => {
            (0, iV.TE)();
        }, []),
        (0, s.jsxs)("div", {
            className: iH.SW,
            children: [
                (0, s.jsx)(N.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: iH.DD,
                    children: t.isForumLikeChannel() ? eC.intl.string(eC.t.ioVdO2) : eC.intl.string(eC.t.VNYs2v),
                }),
                (0, s.jsxs)("div", {
                    className: iH.p_,
                    children: [
                        l
                            .slice(0, t.isForumLikeChannel() ? l.length : i)
                            .map((e) => (0, s.jsx)(ik, { thread: e }, e.id))
                            .filter((e) => r.isValidElement(e))
                            .slice(0, i),
                        (0, s.jsxs)(ey.D, {
                            className: iH.nM,
                            onClick: function () {
                                t.isForumLikeChannel()
                                    ? (0, l7.iN)(t.id)
                                    : (0, j.openModalLazy)(async () => {
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
                                    className: iH.R4,
                                    children: (0, s.jsx)(a, { size: "custom", className: iH.Kk }),
                                }),
                                (0, s.jsx)("div", {
                                    className: iH.Pf,
                                    children: (0, s.jsx)(N.E, {
                                        variant: "text-sm/normal",
                                        color: "none",
                                        children: eC.intl.string(eC.t["4qdZ93"]),
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
function ik(e) {
    let { thread: t } = e,
        n = (0, u.bG)([l0.default], () => l0.default.getUser(t.ownerId)),
        l = (0, iV.JO)(t);
    return (0, s.jsxs)(ey.D, {
        className: iH.nM,
        onClick: function (e) {
            (0, lE.JA)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, l_.H9.POPOUT);
        },
        children: [
            (0, s.jsx)("div", {
                className: iH.R4,
                children:
                    null == n
                        ? (0, s.jsx)("img", {
                              className: iH.my,
                              src: iw.Ay.getDefaultAvatarURL(void 0, void 0),
                              alt: "",
                          })
                        : (0, s.jsx)(iP.A, { className: iH.my, user: n, size: iO._3.SIZE_16 }),
            }),
            (0, s.jsxs)("div", {
                className: iH.Pf,
                children: [
                    (0, s.jsx)(N.E, { className: iH.UU, variant: "text-sm/normal", color: "none", children: t.name }),
                    (0, s.jsx)(N.E, { variant: "text-sm/normal", color: "text-muted", children: "\u2022" }),
                    (0, s.jsx)(N.E, {
                        className: iH.vE,
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: (0, iV.aK)(l),
                    }),
                ],
            }),
        ],
    });
}
var iF = n(364522),
    iK = n(302959),
    iz = n(35903),
    iW = n(970928),
    iY = n(427262),
    iX = n(989628);
let iq = ns.DN.SIZE_24;
function iJ(e) {
    let { activity: t, embeddedApp: n } = e,
        l = t?.assets,
        i = t?.application_id;
    if (null == l || (null == l.large_image && null == l.small_image)) {
        let e = iw.Ay.getApplicationIconURL({ id: n.application.id, icon: n.application.icon }),
            t = n.application.name;
        return (0, s.jsx)(ej.m, {
            text: t,
            position: "top",
            asContainer: !0,
            children: (0, s.jsx)("img", { alt: t, src: e, className: iX.P3 }),
        });
    }
    let r = l.large_image ?? l.small_image;
    return null != r
        ? (0, s.jsx)("img", { alt: l.large_text ?? "", src: (0, iW.uD)(i, r, [128, 128]), className: iX.P3 })
        : null;
}
function iZ(e) {
    let { activity: t, embeddedApp: n, channel: l } = e,
        i = Array.from(n.embeddedActivity.userIds),
        r = (0, u.yK)([l0.default], () => i.map((e) => l0.default.getUser(e)).filter(tg.Vq));
    return (0, s.jsx)("div", {
        className: iX.ec,
        children: (0, s.jsxs)("div", {
            className: iX.Wh,
            children: [
                (0, s.jsx)(iJ, { activity: t, embeddedApp: n }),
                (0, s.jsxs)("div", {
                    className: iX.X0,
                    children: [
                        (0, s.jsx)(x.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            className: iX.wx,
                            lineClamp: 1,
                            children: n.application.name,
                        }),
                        t?.details != null &&
                            "" !== t.details &&
                            (0, s.jsx)(N.E, {
                                variant: "text-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.details,
                            }),
                        t?.state != null &&
                            "" !== t.state &&
                            (0, s.jsx)(N.E, {
                                variant: "text-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.state,
                            }),
                        i.length > 0 &&
                            (0, s.jsx)(ns.Ay, {
                                className: iX.TN,
                                guildId: l.guild_id,
                                users: r,
                                size: iq,
                                max: 7,
                                renderUser: function (e) {
                                    if (null == e || e === ns.mt) return null;
                                    let t = iY.Ay.getName(e);
                                    return (0, s.jsx)(
                                        ej.m,
                                        {
                                            asContainer: !0,
                                            text: t,
                                            position: "bottom",
                                            children: (0, s.jsx)("img", {
                                                src: e.getAvatarURL(l.guild_id, iq),
                                                alt: t,
                                                className: iX.my,
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
var i$ = n(237913);
function iQ(e) {
    let { channel: t, presenceActivity: n, embeddedApp: l, onAction: i } = e,
        r = Array.from(l.embeddedActivity.userIds),
        a = (0, u.bG)([l0.default], () => l0.default.getUser(r[0]));
    return null == a
        ? null
        : (0, s.jsxs)("div", {
              className: i$.Eb,
              children: [
                  (0, s.jsx)("div", {
                      className: i$.Il,
                      children: (0, s.jsx)(iZ, { activity: n, embeddedApp: l, channel: t }),
                  }),
                  (0, s.jsx)("div", {
                      className: i$.M4,
                      children: (0, s.jsx)(iz.A, {
                          type: iK.M.VOICE_CHANNEL,
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
var i0 = n(713654),
    i1 = n(980248);
function i2(e) {
    let { channel: t } = e,
        n = (0, u.bG)([B.A], () => B.A.getGuild(t.guild_id)),
        l = (0, t0.Ay)(t),
        i = (0, i0.gU)(t, n);
    return null == i
        ? null
        : (0, s.jsxs)("div", {
              className: i1.hY,
              children: [
                  (0, s.jsx)(i, { className: i1.p }),
                  (0, s.jsx)(N.E, {
                      variant: "text-md/semibold",
                      color: "interactive-text-default",
                      className: i1.HA,
                      children: l,
                  }),
              ],
          });
}
var i3 = n(565449);
function i9(e) {
    let { channel: t, onAction: n } = e,
        l = (0, is.Ay)(t),
        i = Array.from((0, is.Rz)(l).values());
    return 0 === i.length
        ? null
        : (0, s.jsxs)(iF.Ip, {
              className: i3.kL,
              children: [
                  (0, s.jsx)("div", { className: i3.oT, children: (0, s.jsx)(i2, { channel: t }) }),
                  (0, s.jsx)("div", { className: i3.zN }),
                  i.map((e, l) =>
                      (0, s.jsx)(
                          iQ,
                          { embeddedApp: e, presenceActivity: e.presenceActivity ?? void 0, channel: t, onAction: n },
                          l,
                      ),
                  ),
              ],
          });
}
class i6 extends nR {
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
        lm.A.preload(t ?? Y.ME, e.id);
    };
    renderPopout = (e) => {
        let { channel: t, sorting: n, embeddedApps: l, channelIsContentGated: i } = this.props,
            { shouldShowActivities: r } = this.state;
        return t.isModeratorReportChannel() || i
            ? null
            : null != l && l.length > 0 && r && !n
              ? (0, s.jsx)(i9, { onAction: this.handleActivitiesPopoutClose, channel: t })
              : (0, s.jsx)(iB, { ...e, channel: this.props.channel });
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
        if (t.type === Y.rbe.GROUP_DM)
            return void (0, e5.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("26132"),
                    n.e("46652"),
                    n.e("93190"),
                    n.e("91763"),
                    n.e("38730"),
                    n.e("47502"),
                    n.e("80740"),
                    n.e("68530"),
                    n.e("66378"),
                    n.e("17244"),
                    n.e("53416"),
                    n.e("60200"),
                ]).then(n.bind(n, 4027));
                return (n) => (0, s.jsx)(e, { ...n, channel: t, selected: !0 });
            });
        if (t.type === Y.rbe.DM) {
            let l = l0.default.getUser(t.getRecipientId());
            null != l &&
                (0, e5.L3)(e, async () => {
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
                        n.e("34552"),
                        n.e("91763"),
                        n.e("8757"),
                        n.e("71210"),
                        n.e("85968"),
                        n.e("38730"),
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
                        n.e("36564"),
                        n.e("47502"),
                        n.e("45996"),
                        n.e("792"),
                        n.e("92822"),
                        n.e("23427"),
                        n.e("29422"),
                        n.e("74610"),
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
            return void (0, e5.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("26132"),
                    n.e("46652"),
                    n.e("91763"),
                    n.e("38730"),
                    n.e("35321"),
                    n.e("50033"),
                    n.e("47502"),
                    n.e("43266"),
                    n.e("30997"),
                    n.e("79995"),
                    n.e("78580"),
                ]).then(n.bind(n, 907647));
                return (n) => (0, s.jsx)(e, { ...n, channel: t });
            });
        let l = B.A.getGuild(t.getGuildId());
        null != l &&
            (0, e5.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("26132"),
                    n.e("46652"),
                    n.e("93190"),
                    n.e("91763"),
                    n.e("38730"),
                    n.e("35321"),
                    n.e("50033"),
                    n.e("47502"),
                    n.e("3998"),
                    n.e("43266"),
                    n.e("9004"),
                    n.e("30997"),
                    n.e("12255"),
                    n.e("40959"),
                    n.e("79995"),
                    n.e("80740"),
                    n.e("44058"),
                    n.e("91377"),
                    n.e("65200"),
                    n.e("35723"),
                    n.e("66378"),
                    n.e("66540"),
                    n.e("29542"),
                    n.e("48804"),
                    n.e("25173"),
                ]).then(n.bind(n, 468916));
                return (n) => (0, s.jsx)(e, { ...n, channel: t, guild: l });
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, s.jsx)("div", { className: eP.yW, children: e });
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
            R = ij(m),
            v = (0, s.jsxs)("li", {
                className: ez()(this.getClassName(), { [eP.r9]: this.isDisabled(), [eP.wH]: n }),
                "data-dnd-name": (0, t0.m1)(e, l0.default, ii.A),
                onMouseEnter: b || G ? this.handleMouseEnter : void 0,
                onMouseLeave: b || G ? this.handleMouseLeave : void 0,
                children: [
                    (0, s.jsx)(lH.Y, {
                        targetElementRef: I,
                        position: "right",
                        renderPopout: this.renderPopout,
                        onRequestClose: this.handleClosePopout,
                        spacing: 17,
                        shouldShow: (b && this.state.shouldShowThreadsPopout) || (G && this.state.shouldShowActivities),
                        children: () =>
                            (0, s.jsxs)(nv.Ay, {
                                ref: this.setChannelItemRef,
                                className: eP.Ki,
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
                                channelTypeOverride: f ? Y.rbe.GUILD_TEXT : void 0,
                                resolvedUnreadSetting: C,
                                transitionExtras: S ? { source: l6.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
                                "aria-label": (0, lF.Ay)({
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
                    x && (0, s.jsx)(iy.A, { targetElementRef: I, markMenuItemPopoverAsDismissed: N }),
                ],
            });
        return h ? d(c(v)) : v;
    }
}
let i7 = el(i6);
function i5(e) {
    let { channel: t, guild: n, disableSorting: l, isFavoriteCategory: i, muted: a, selected: o } = e,
        { hasActiveThreads: d, hasMoreActiveThreads: c } = (0, lC.NR)(t),
        h = (0, u.cf)([n1.Ay], () => ({
            unread: n1.Ay.hasUnread(t.id),
            ackMessageId: n1.Ay.ackMessageId(t.id),
            isLowImportanceMention: n1.Ay.getIsMentionLowImportance(t.id),
        })),
        A = (0, u.bG)([K.Ay], () => K.Ay.resolveUnreadSetting(t)),
        g = (0, u.cf)([V.A, k.A], () => {
            let e = V.A.getChannel(t.parent_id);
            return {
                canManageChannel: k.A.can(Y.xBc.MANAGE_CHANNELS, t),
                canReorderChannel:
                    !0 !== l &&
                    ((0, U.ai)(n.id) ||
                        (null != e ? k.A.can(Y.xBc.MANAGE_CHANNELS, e) : k.A.can(Y.xBc.MANAGE_CHANNELS, n))),
            };
        }),
        m = (0, u.bG)([n0.A], () => n0.A.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: f, isSubscriptionGated: p } = (0, lp.A)(t.id),
        C = (0, u.bG)([K.Ay], () => K.Ay.isFavorite(n.id, t.id)),
        E = (0, iv.ni)(t),
        x = (0, iR.Gp)(t.id),
        N = iC({
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
        _ = (0, is.Ay)(t),
        [S, I] = r.useState(!1),
        b = (0, iG.K)(
            r.useCallback((e) => {
                I(e);
            }, []),
        ),
        { showMenuItemPopover: G, markMenuItemPopoverAsDismissed: R } = (0, iM.z)({
            location: "TextChannel",
            isChannelSelected: o,
            isTargetInViewport: S,
            channelType: t.type,
            isPopoverAllowed: !(0, U.ai)(n.id),
        });
    return (0, u.bG)([iT.A, iL.Ay], () => iT.A.getChannelId() !== t.id && iL.Ay.isCurrentUserGuest(t.getGuildId()))
        ? null
        : (0, s.jsx)(i7, {
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
var i4 = n(900797),
    i8 = n(636585),
    se = n(531685),
    st =
        (((i = {}).HIDDEN = "hidden"),
        (i.UNREAD = "unread"),
        (i.MENTIONS = "mentions"),
        (i.VOICE_CHANNELS = "voice-channels"),
        i);
let sn = { mode: "hidden", mentionCount: 0, targetChannelId: null },
    sl = { topBar: sn, bottomBar: sn },
    si = {},
    ss = {};
function sr(e) {
    let t = V.A.getChannel(e);
    return (
        !(null == t || null == t.getGuildId() || t.isGuildVocal()) &&
        !(t.isThread() ? lb.A.isMuted(t.id) : K.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, tu.Y)(t)
    );
}
function sa(e) {
    let t = V.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let l = K.Ay.isGuildCollapsed(n),
        i = K.Ay.isChannelMuted(n, t.id);
    return (!l || !i) && n1.Ay.getMentionCount(e) > 0;
}
function so(e) {
    return (
        !K.Ay.isChannelMuted(e.guild_id, e.id) &&
        (e.isGuildStageVoice()
            ? tp.A.getMutableParticipants(e.id, tC.ip.SPEAKER).length > 0
            : tA.Ay.getVoiceStatesForChannel(e).length > 0)
    );
}
function sd(e) {
    let { guildChannels: t } = tb.A.getGuildWithoutChangingGuildActionRows(e),
        n = t.getChannels(ss[e] ?? []);
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
            ((sr(t.id) || o().some(t.threadIds, sr)) && (d = !1),
            (sa(t.id) || o().some(t.threadIds, sa)) && (a = !1),
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
            (sr(t.id) || o().some(t.threadIds, sr)) && (null == i && (i = t.id), (p = !0)),
                (sa(t.id) || o().some(t.threadIds, sa)) &&
                    (null == l && (l = t.id),
                    (f += n1.Ay.getMentionCount(t.id)),
                    (f += o().sumBy(t.threadIds, n1.Ay.getMentionCount)));
        }
    if (d || a)
        for (let e = 0; e < m.length; e++) {
            let t = m[e];
            if (!d && !a) break;
            (sr(t.id) || o().some(t.threadIds, sr)) && (null == r && (r = t.id), (E = !0)),
                (sa(t.id) || o().some(t.threadIds, sa)) &&
                    (null == s && (s = t.id),
                    (C += n1.Ay.getMentionCount(t.id)),
                    (C += o().sumBy(t.threadIds, n1.Ay.getMentionCount)));
        }
    let x = null,
        N = null,
        _ = u?.getChannelRecords() ?? [];
    a && C > 0
        ? (x = { mode: "mentions", mentionCount: C, targetChannelId: s })
        : !c && o().some(_, so)
          ? (x = { mode: "voice-channels", mentionCount: 0, targetChannelId: null })
          : d && E && (x = { mode: "unread", mentionCount: 0, targetChannelId: r }),
        a && f > 0
            ? (N = { mode: "mentions", mentionCount: f, targetChannelId: l })
            : d && p && (N = { mode: "unread", mentionCount: 0, targetChannelId: i });
    let S = null != N && (null == x || ("mentions" !== x.mode && "mentions" === N.mode)),
        I = null != x && ("mentions" === x.mode || !S);
    return (si[e] = { topBar: S ? (N ?? sn) : sn, bottomBar: I ? (x ?? sn) : sn }), !0;
}
let sc = o().throttle(sd, 200);
function su(e) {
    let { guildId: t } = e,
        n = B.A.getGuild(t);
    return null != n && !!n.features.has(Y.GuildFeatures.COMMUNITY) && sc(t);
}
function sh(e) {
    let { id: t } = e,
        n = V.A.getChannel(t);
    if (null == n) return !1;
    let l = B.A.getGuild(n.guild_id);
    return null != l && !!l.features.has(Y.GuildFeatures.COMMUNITY) && sc(n.guild_id);
}
function sA(e) {
    let { channel: t } = e,
        n = V.A.getChannel(t.id);
    if (null == n) return !1;
    let l = B.A.getGuild(t.guild_id);
    return null != l && !!l.features.has(Y.GuildFeatures.COMMUNITY) && sc(n.guild_id);
}
function sg(e) {
    let { channelId: t } = e,
        n = V.A.getChannel(t);
    if (null == n) return !1;
    let l = B.A.getGuild(n.guild_id);
    return (
        null != l && !!l.features.has(Y.GuildFeatures.COMMUNITY) && F.A.getGuildId() === n.guild_id && sc(n.guild_id)
    );
}
function sm(e) {
    let { guildId: t } = e;
    return null != t && sc(t);
}
class sf extends u.Ay.Store {
    static displayName = "ChannelListUnreadsStore";
    initialize() {
        this.waitFor(tb.A, V.A, B.A, lb.A, n1.Ay, F.A, tA.Ay, tp.A, K.Ay);
    }
    getUnreadStateForGuildId(e) {
        return si[e] ?? sl;
    }
}
let sp = new sf(e8.h, {
    UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
        let { guildId: t, channelIds: n } = e,
            l = B.A.getGuild(t);
        return (
            null != l &&
            !!l.features.has(Y.GuildFeatures.COMMUNITY) &&
            null != n &&
            !o().isEqual(ss[t], n) &&
            ((ss[t] = n), sd(t))
        );
    },
    BULK_ACK: function (e) {
        let { channels: t } = e,
            n = !1;
        return (
            o()(t)
                .map((e) => {
                    let { channelId: t } = e;
                    return V.A.getChannel(t)?.guild_id;
                })
                .filter(tg.Vq)
                .uniq()
                .forEach((e) => {
                    let t = B.A.getGuild(e);
                    null != t && t.features.has(Y.GuildFeatures.COMMUNITY) && sc(e) && (n = !0);
                }),
            n
        );
    },
    CHANNEL_ACK: sg,
    CHANNEL_DELETE: sA,
    CHANNEL_LOCAL_ACK: sg,
    MESSAGE_ACK: sg,
    MESSAGE_CREATE: sg,
    MESSAGE_DELETE_BULK: sg,
    MESSAGE_DELETE: sg,
    PASSIVE_UPDATE_V2: function (e) {
        let t = B.A.getGuild(e.guildId);
        return !!(e.channels.length > 0 && null != t && t.features.has(Y.GuildFeatures.COMMUNITY)) && sc(e.guildId);
    },
    RESORT_THREADS: sg,
    THREAD_CREATE: sA,
    THREAD_DELETE: sA,
    THREAD_LIST_SYNC: su,
    THREAD_MEMBER_UPDATE: sh,
    THREAD_MEMBERS_UPDATE: sh,
    THREAD_UPDATE: sA,
    BULK_CLEAR_RECENTS: su,
    CATEGORY_COLLAPSE_ALL: su,
    CATEGORY_EXPAND_ALL: su,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = F.A.getGuildId();
        if (null == n || !new Set(t.map((e) => e.guildId)).has(n)) return !1;
        let l = si[n];
        return null != l && "voice-channels" === l.bottomBar.mode && sc(n);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: sm,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: sm,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        for (let e of t) null != e.guild_id && sc(e.guild_id);
    },
    USER_GUILD_SETTINGS_GUILD_UPDATE: sm,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: sm,
});
var sC = n(168799);
let sE = { friction: 30, tension: 300 };
function sx(e) {
    let { guildChannels: t, jumpToVoiceChannels: n } = e,
        l = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
        i = (0, u.bG)([tA.Ay], () => tA.Ay.getVoiceStates(t.id), [t.id]),
        a = r.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), n();
            },
            [n],
        ),
        o = l?.getChannelRecords() ?? [],
        d = (0, no.fK)({ channels: o, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: i });
    return (0, s.jsxs)(ey.D, {
        className: ez()(sC.M0, sC.OF),
        onClick: a,
        children: [
            (0, s.jsx)(S.H, { size: "custom", className: sC.Gs, width: 14, height: 14, color: "currentColor" }),
            (0, s.jsx)(N.E, {
                variant: "text-xs/semibold",
                className: sC.pM,
                children: eC.intl.format(eC.t["fDlr+F"], { count: d.length }),
            }),
            (0, s.jsx)(i8.A, {
                guildId: t.id,
                className: sC.J$,
                users: d.slice(0, 4),
                renderMoreUsers: () => null,
                max: 4,
                size: iO._3.SIZE_16,
            }),
        ],
    });
}
function sN(e) {
    let { position: t, guildChannels: n, guildChannelsVersion: l, jumpToVoiceChannels: i, jumpToChannel: a } = e,
        { bottomBar: o, topBar: d } = (0, u.cf)([sp], () => sp.getUnreadStateForGuildId(n.id)),
        c = (0, u.bG)([se.A], () => se.A.isFocused()),
        { mode: h, mentionCount: A, targetChannelId: g } = "bottom" === t ? o : d,
        m = h === st.HIDDEN,
        f = (0, e7.z)(
            {
                to: { transform: m ? ("bottom" === t ? "translateY(180%)" : "translateY(-180%)") : "translateY(0%)" },
                config: sE,
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
        className: ez()(sC.kL, { [sC.Mn]: "top" === t, [sC.sQ]: "bottom" === t }),
        children: (0, s.jsx)(e6.animated.div, {
            className: sC.pK,
            style: f,
            "aria-hidden": m,
            children: (function () {
                switch (h) {
                    case st.HIDDEN:
                        return (0, s.jsx)("div", { className: ez()(sC.M0, sC.Te) });
                    case st.UNREAD:
                        return (0, s.jsxs)(ey.D, {
                            className: sC.M0,
                            onClick: p,
                            children: [
                                "bottom" === t
                                    ? (0, s.jsx)(tJ.a, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: sC.z_,
                                          height: 14,
                                          width: 14,
                                      })
                                    : (0, s.jsx)(i4.t, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: sC.z_,
                                          height: 14,
                                          width: 14,
                                      }),
                                (0, s.jsx)(N.E, {
                                    variant: "text-xs/semibold",
                                    color: "interactive-text-default",
                                    className: sC.pM,
                                    children: eC.intl.string(eC.t.FCRiT3),
                                }),
                            ],
                        });
                    case st.MENTIONS:
                        return (0, s.jsx)(ey.D, {
                            className: ez()(sC.M0, sC.vU),
                            onClick: p,
                            children: (0, s.jsx)(N.E, {
                                variant: "text-xs/semibold",
                                color: "badge-text-brand",
                                className: sC.pM,
                                children: eC.intl.format(eC.t.EQcLyp, { count: A }),
                            }),
                        });
                    case st.VOICE_CHANNELS:
                        return (0, s.jsx)(sx, { jumpToVoiceChannels: i, guildChannels: n, guildChannelsVersion: l });
                    default:
                        return;
                }
            })(),
        }),
    });
}
var s_ = n(310953),
    sS = n(173860);
function sI(e) {
    let t = V.A.getChannel(e);
    return (
        null != t &&
        null != t.getGuildId() &&
        !(t.isThread() ? lb.A.isMuted(t.id) : K.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, tu.Y)(t)
    );
}
function sb(e) {
    let t = V.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let l = K.Ay.isGuildCollapsed(n),
        i = K.Ay.isChannelMuted(n, t.id);
    return (!l || !i) && n1.Ay.getMentionCount(e) > 0;
}
let sG = r.forwardRef(function (e, t) {
    let { guildId: n, guildChannels: l, guildChannelsVersion: i, ...r } = e,
        a = (0, s_.W)(n, l, i, { withVoiceChannels: !1 }, { ignoreRecents: !0 }),
        o = (0, u.bG)([se.A], () => se.A.isFocused());
    return (0, s.jsx)(sS.A, { ref: t, ...r, isUnread: sI, isMentioned: sb, items: a, animate: o });
});
var sR = n(81466);
function sv(e) {
    let { guild: t, selected: l } = e,
        { hasUnread: i, mentionCount: r } = (0, u.cf)(
            [n1.Ay],
            () => ({
                hasUnread: n1.Ay.hasUnread(t.id, nj.P.GUILD_EVENT),
                mentionCount: n1.Ay.getMentionCount(t.id, nj.P.GUILD_EVENT),
            }),
            [t.id],
        ),
        a = (0, u.bG)([K.Ay], () => K.Ay.isMuteScheduledEventsEnabled(t.id));
    async function o() {
        await (0, j.openModalLazy)(async () => {
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
            (0, nZ.Dr)(eo.M.GUILD_HEADER_EVENT_UPSELL);
    }
    let d = (0, tV.Ay)(t.id),
        c = d.length > 0 ? eC.intl.formatToPlainString(eC.t.IBdqSu, { number: d.length }) : eC.intl.string(eC.t.tlopTM);
    return (0, s.jsx)(ef.G, {
        id: `upcoming-events-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(sR.C, { size: "md", color: "currentColor", className: e }),
        text: c,
        selected: l,
        onClick: o,
        onContextMenu: function (e) {
            (0, e5.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("26386"), n.e("19990")]).then(n.bind(n, 221621));
                return (n) => (0, s.jsx)(e, { ...n, guildId: t.id });
            });
        },
        showUnread: i && !a,
        trailing: !a && r > 0 ? (0, s.jsx)(ec.hV, { className: nY.Do, disableColor: !0, count: r }) : null,
    });
}
var sj = n(152367),
    sy = n(818085);
function sM(e) {
    let { guild: t, selected: n } = e;
    return (0, s.jsx)(ef.G, {
        id: `vibegrations-${t.id}`,
        renderIcon: (e) =>
            (0, s.jsx)(sj.D, { size: "custom", color: "currentColor", width: 20, height: 20, className: e }),
        text: eC.intl.string(sy.default.Xmvb23),
        selected: n,
        onClick: () => (0, eN.pX)(Y.BVt.CHANNEL(t.id, e_.VV.VIBEGRATIONS)),
    });
}
var sL = n(845056),
    sT = n(765379),
    sU = n(271683),
    sD = n(725613),
    sO = n(857253),
    sP = n(360729),
    sV = n(22231),
    sw = n(241326),
    sH = n(750943),
    sB = n(743674),
    sk = n(888697),
    sF = n(26741),
    sK = n(493819),
    sz = n(722884),
    sW = n(844045),
    sY = n(52102);
function sX(e) {
    let { channel: t, imageUrl: l, animatedUrl: i, bannerHash: a, canModifyHangout: o } = e,
        d = (0, sB.S)(l),
        c = (0, eb.je)(t),
        u = (0, sF.P9)({ guildId: t.guild_id, channelId: t.id, bannerHash: a }),
        h = r.useCallback(() => {
            (0, sF.J_)({ guildId: t.guild_id, channelId: t.id }), (0, sz.A)({ channel: t });
        }, [t]),
        A = r.useCallback(() => {
            (0, sF.nK)({ guildId: t.guild_id, channelId: t.id }), (0, sk.e2)(t.id);
        }, [t.guild_id, t.id]),
        g = r.useCallback(
            (e) => {
                c
                    ? (0, e5.L3)(e, async () => {
                          let { default: e } = await n.e("55558").then(n.bind(n, 316421));
                          return (n) => (0, s.jsx)(e, { ...n, channel: t });
                      })
                    : e.preventDefault();
            },
            [t, c],
        );
    return (0, s.jsxs)("div", {
        ref: u,
        className: sY.rs,
        onContextMenu: g,
        children: [
            (0, s.jsx)("div", {
                className: sY.ZS,
                style: null != d ? { backgroundColor: d } : void 0,
                children: (0, s.jsx)(sK.A, { imageUrl: l, animatedUrl: i, className: sY.Sl }),
            }),
            o
                ? (0, s.jsxs)("div", {
                      className: sY.n_,
                      children: [
                          (0, s.jsx)(ej.m, {
                              text: eC.intl.string(sW.default.XJ4UpB),
                              children: (0, s.jsx)(ey.D, {
                                  className: sY.HF,
                                  onClick: h,
                                  children: (0, s.jsx)(sV.R, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                          (0, s.jsx)(ej.m, {
                              text: eC.intl.string(sW.default.XV4qT6),
                              children: (0, s.jsx)(ey.D, {
                                  className: sY.HF,
                                  onClick: A,
                                  children: (0, s.jsx)(sw.u, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function sq(e) {
    let { channel: t } = e,
        n = (0, sF.dX)({ guildId: t.guild_id, channelId: t.id }),
        l = r.useCallback(() => {
            (0, sF.J_)({ guildId: t.guild_id, channelId: t.id }), (0, sz.A)({ channel: t });
        }, [t]);
    return (0, s.jsx)("div", {
        ref: n,
        className: sY._o,
        children: (0, s.jsxs)(ey.D, {
            className: sY.hH,
            onClick: l,
            children: [
                (0, s.jsx)(sH.X, { size: "xs", color: "currentColor" }),
                (0, s.jsx)(N.E, {
                    variant: "text-sm/medium",
                    color: "currentColor",
                    children: eC.intl.string(sW.default.NGcIOF),
                }),
            ],
        }),
    });
}
function sJ(e) {
    let { channel: t, isConnected: n } = e,
        { enableHangoutWindow: l } = (0, eI.Dm)({ guildId: t.guild_id, location: "HangoutWindow" }),
        i = (0, eb.W6)(t),
        a = n && i,
        o = t.voiceHangout,
        d = o?.banner_hash,
        c = r.useMemo(() => {
            if (null == d || null == t.guild_id) return null;
            let e = (0, eb.Sq)({ guildId: t.guild_id, bannerHash: d });
            return null == e ? null : { bannerHash: d, ...e };
        }, [t.guild_id, d]);
    return l
        ? null != c
            ? (0, s.jsx)(sX, {
                  channel: t,
                  imageUrl: c.imageUrl,
                  animatedUrl: c.animatedUrl,
                  bannerHash: c.bannerHash,
                  canModifyHangout: a,
              })
            : a
              ? (0, s.jsx)(sq, { channel: t })
              : null
        : null;
}
var sZ = n(290863),
    s$ = n(461213),
    sQ = n(532622),
    s0 = n(882840),
    s1 = n(208971),
    s2 = n(46054),
    s3 = n(500216),
    s9 = n(742715);
function s6(e) {
    let { channel: t, connected: n, hovered: l, subtitle: i, onClick: a } = e,
        o = (0, s1.G)((0, s0.l)(t)),
        { enableHangoutWindow: d } = (0, eI.Dm)({ guildId: t.guild_id, location: "VoiceChannelStatus" }),
        c = d && (0, eb.lr)(t),
        u = null != o && o.length > 0,
        h = (0, sQ.Ay)(t, !0),
        A = null != i && i.length > 0;
    if (
        (r.useEffect(() => {
            u && lc.default.track(Y.HAw.VOICE_CHANNEL_TOPIC_VIEWED, { channel_id: t.id, guild_id: t.guild_id });
        }, [u, t.id, t.guild_id]),
        null == t.guild_id)
    )
        return null;
    let g = ez()(s3.Ui, n && h ? s3.BI : null);
    return u
        ? (0, s.jsx)(ey.D, {
              className: g,
              onClick: h ? a : void 0,
              children: (0, s.jsx)(N.E, {
                  variant: "text-xs/medium",
                  className: ez()(s3.qS, s9.PT),
                  children: (0, s.jsx)(tY.A, { children: s2.A.parseVoiceChannelStatus(o, !0, { channelId: t.id }) }),
              }),
          })
        : n && h && !c && (!A || l)
          ? (0, s.jsxs)(ey.D, {
                className: g,
                onClick: a,
                children: [
                    (0, s.jsx)(N.E, {
                        variant: "text-xs/medium",
                        className: s3.qS,
                        children: eC.intl.string(eC.t.Mgpxiw),
                    }),
                    (0, s.jsx)(sV.R, { color: "currentColor", className: s3.rD, size: "xxs" }),
                ],
            })
          : A
            ? (0, s.jsx)(tY.A, { children: i })
            : null;
}
class s7 extends nR {
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
        o && lB.A.updateChatOpen(n.id, !0),
            lf.A.handleVoiceConnect({
                channel: n,
                connected: t,
                needSubscriptionToAccess: i,
                routeDirectlyToChannel: o || a,
                locked: e,
                transitionExtras: r ? { source: l6.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
            });
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            l = B.A.getGuild(t.getGuildId());
        null != l &&
            (0, e5.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("26132"),
                    n.e("46652"),
                    n.e("93103"),
                    n.e("93190"),
                    n.e("91763"),
                    n.e("38730"),
                    n.e("35321"),
                    n.e("50033"),
                    n.e("47502"),
                    n.e("3998"),
                    n.e("43266"),
                    n.e("9004"),
                    n.e("74610"),
                    n.e("30997"),
                    n.e("12255"),
                    n.e("40959"),
                    n.e("79995"),
                    n.e("80740"),
                    n.e("44058"),
                    n.e("91377"),
                    n.e("35723"),
                    n.e("66378"),
                    n.e("66540"),
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
        return (0, no.Pd)(e, lx.A, B.A);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return eP.ZS;
        if (null != t)
            if (e > t) return eP.mU;
            else return eP.TR;
        return eP.fx;
    }
    handleClick = () => {
        let { channel: e } = this.props,
            t = e.getGuildId();
        null != t && (0, lz.V)(t) && (0, lK.Ze)(t), this.handleVoiceConnect();
    };
    handleVoiceStatusClick = (e) => {
        let { connected: t, channel: n } = this.props;
        t && (e.stopPropagation(), (0, sU.A)({ channel: n }));
    };
    renderSubtitle() {
        let { channel: e, connected: t } = this.props,
            n = ij(this.props.subtitle)?.subtitle,
            { hovered: l } = this.state;
        return (0, s.jsx)(s6, {
            onClick: this.handleVoiceStatusClick,
            channel: e,
            connected: t,
            subtitle: n,
            hovered: l,
        });
    }
    renderVoiceUsers() {
        let { channel: e, voiceStates: t, collapsed: n, withGuildIcon: l, tabIndex: i } = this.props;
        return (0, s.jsx)(lU.A, {
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
        return !(null != n && n.length > 0) || l ? null : (0, s.jsx)(sJ, { channel: e, isConnected: t });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        return t
            ? (0, s.jsx)(l9, { type: l3.VOICE, guildId: e.guild_id, closePopout: this.closeGuildVerificationPopout })
            : null;
    };
    renderOpenChatButton = () => {
        let { channel: e, locked: t, forceShowButtons: n, isSuggestedSection: l } = this.props;
        if (!t)
            return (0, s.jsx)(ej.m, {
                asContainer: !0,
                text: eC.intl.string(eC.t.ZXxLQg),
                children: (0, s.jsx)(ey.D, {
                    className: ez()(eP.Xs, n ? eP.Tf : null),
                    onClick: () => {
                        lB.A.updateChatOpen(e.id, !0),
                            (0, l7.iN)(e.id, l ? { source: l6.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
                    },
                    "aria-label": eC.intl.string(eC.t.ZXxLQg),
                    children: (0, s.jsx)(I.o, { size: "xs", color: "currentColor", className: eP.gE }),
                }),
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, s.jsx)("div", { className: eP.yW, children: e });
    }
    getTooltipText = () => {
        let { connected: e } = this.props;
        return this.isFull() && !e ? eC.intl.string(eC.t.rZfiNq) : null;
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
                className: ez()(this.getModeClass(), { [eP.r9]: this.isDisabled(), [eP.fy]: _ }),
                "data-dnd-name": (0, t0.m1)(e, l0.default, ii.A),
                children: [
                    _ &&
                        (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsx)("div", { className: eP.UQ }),
                                (0, s.jsx)("div", { className: eP.l0 }),
                            ],
                        }),
                    (0, s.jsx)("div", {
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: (0, s.jsx)(lH.Y, {
                            targetElementRef: this.channelItemRef,
                            position: "right",
                            renderPopout: this.renderPopout,
                            onRequestClose: this.closeGuildVerificationPopout,
                            spacing: 17,
                            shouldShow: b,
                            children: () =>
                                (0, s.jsx)(ej.m, {
                                    text: this.getTooltipText(),
                                    children: (0, s.jsxs)(nv.Ay, {
                                        ref: this.channelItemRef,
                                        className: eP.Ki,
                                        iconClassName: ez()({ [eP.Gj]: m || x || G }),
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
                                        "aria-label": (0, lF.Ay)({
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
                (R = (0, s.jsx)(ne.A, {
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
let s5 = el((0, lk.F)(s7));
function s4(e) {
    let {
            guild: t,
            channel: n,
            disableSorting: l,
            isFavoriteCategory: i,
            selected: r,
            collapsed: a,
            voiceStates: o,
        } = e,
        d = (0, u.cf)([n1.Ay], () => ({ unread: n1.Ay.hasUnread(n.id), mentionCount: n1.Ay.getMentionCount(n.id) })),
        c = (0, u.bG)([K.Ay], () => K.Ay.resolveUnreadSetting(n)),
        h = (0, u.cf)([V.A, lQ.A, k.A], () => {
            let e = V.A.getChannel(n.parent_id),
                i = lQ.A.getCheck(n.guild_id);
            return {
                canManageChannel: k.A.can(Y.xBc.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== l &&
                    ((0, U.ai)(t.id) ||
                        (null != e ? k.A.can(Y.xBc.MANAGE_CHANNELS, e) : k.A.can(Y.xBc.MANAGE_CHANNELS, t))),
                canMoveMembers: k.A.can(Y.xBc.MOVE_MEMBERS, n),
                locked: !k.A.can(Y.xBc.CONNECT, n),
                bypassLimit: k.A.can(Y.xBc.MOVE_MEMBERS, n),
                unverifiedAccount: !i.canChat,
            };
        }),
        A = (0, u.bG)([lx.A], () => lx.A.hasVideo(n.id)),
        { enabled: g } = sP.A.useExperiment({ guildId: t.id, location: "VoiceChannel" }),
        m = (0, is.Ay)(n),
        f = (0, u.yK)([s$.A, sZ.A, ie.default], () => {
            if (null == o || 0 === o.length) return [];
            let e = ie.default.getId(),
                t = [];
            for (let { user: l } of o)
                for (let i of l.id === e ? s$.A.getActivities() : sZ.A.getActivities(l.id, n.guild_id))
                    !(0, sL.N)(i) || (0, sT.A)(i) || null == i.name || t.includes(i.name) || t.push(i.name);
            return t;
        }, [o, n.guild_id]),
        p = (0, t0.Ay)(n),
        C = (0, tV.Qs)(n.id),
        E = (0, u.bG)([sD.A], () => sD.A.getStartTime(n), [n]),
        { isSubscriptionGated: x, needSubscriptionToAccess: N } = (0, lp.A)(n.id),
        _ = (0, sO.A)(),
        S = (0, u.bG)([K.Ay], () => K.Ay.isFavorite(t.id, n.id)),
        I = e.connected || _?.channelId === n.id,
        { enableHighlight: b, enableWaveformIcon: G } = (0, nr.b)(t.id, "VoiceChannel"),
        R = null != o && o.length > 0,
        v = b && R,
        j = G && R,
        y = iC({
            channel: n,
            isChannelSelected: r,
            isChannelCollapsed: a,
            voiceStates: o,
            isSubscriptionGated: x,
            needSubscriptionToAccess: N,
            enableConnectedUserLimit: !0,
            enableActivities: !0,
        }),
        M = I && null == y;
    return (0, s.jsx)(s5, {
        channelName: p,
        embeddedApps: m,
        nonEmbeddedActivityNames: f,
        embeddedActivityType: Y.$pd.PLAYING,
        video: A,
        hasActiveEvent: null != C,
        isSubscriptionGated: x,
        needSubscriptionToAccess: N,
        ...d,
        ...h,
        ...e,
        connected: I,
        isFavoriteSuggestion: i && !S,
        forceShowButtons: M,
        channelInfo: y,
        resolvedUnreadSetting: c,
        hasChannelInfo: null != y,
        hasStartTime: null != E,
        voiceChannelStartTime: E,
        shouldHighlightChannel: v,
        shouldUseAnimatedWaveform: j,
        guildRoomsEnabled: g,
    });
}
n(131955);
var s8 = n(449817);
function re(e) {
    return (
        h.A.modules.channels.NAME_LINE_HEIGHT.resolve({ density: e }) +
        2 * h.A.space.SPACE_XXS.resolve({ density: e }) +
        2
    );
}
class rt extends r.PureComponent {
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
        this.setState({ initialized: !0 }), (0, tR.Ei)(this.getVisibleChannels);
    }
    componentWillUnmount() {
        this.updateChannelListScroll.cancel();
    }
    componentDidUpdate(e, t) {
        let { scrollToChannel: n, guildId: l, selectedChannelId: i } = this.props,
            { initialized: s } = this.state,
            { scrollTop: r } = tS.A.getGuildDimensions(l);
        null != n
            ? (this.scrollToChannel(n), b.A.clearChannelListScrollTo(l))
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
                    a = s.threadOffset * re(r);
                i.scrollIntoViewRect({ start: e + a, end: e + a + re(r), padding: n, animate: t, callback: l });
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
                if (l < tI.bK || e.isPlaceholderRow(l, i)) return !1;
                let s = e.getChannelFromSectionRow(l, i);
                if (null == s) return !1;
                let { channel: r, category: a } = s;
                return (
                    !!(0, z.ig)(r.record.type) &&
                    (!a.isCollapsed || !a.isMuted) &&
                    !r.isMuted &&
                    !!t.isItemVisible(l, i, !0) &&
                    (0, tu.Y)(r.record)
                );
            })
        );
    }
    updateChannelListScroll = (0, a.throttle)((e) => {
        b.A.updateChannelListScroll(this.props.guildId, e, this.getVisibleChannels());
    }, 100);
    getSectionHeight = (e) => {
        let { guild: t, guildChannels: n, density: l } = this.props,
            i = "compact" === l ? 8 : 12;
        if (e === tI.PU) return i;
        if (e === tI.bK) return t.features.has(Y.GuildFeatures.HUB) ? 0 : i;
        if (e === n.voiceChannelsSectionNumber) {
            let t = n.getCategoryFromSection(e);
            if (null == t || t.isEmpty()) return 0;
            if (t.isCollapsed) return 49;
            let l = n.getChannelFromSectionRow(e, 0)?.channel;
            return null == l || l.record.type === Y.rbe.GUILD_CATEGORY ? 9 : 25;
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
            let { hasDivider: d, canHaveVoiceSummary: c } = nd(n, r, t),
                u = d ? (a ? 9 : 12) : 0;
            if (!c || t === tI.PU) return u;
            let h = n.getNamedCategoryFromSection(t);
            return null == h ||
                !(function (e) {
                    let { category: t, voiceStates: n, selectedChannelId: l, selectedVoiceChannelId: i } = e;
                    return (
                        (function (e) {
                            let { category: t, voiceStates: n, selectedChannelId: l, selectedVoiceChannelId: i } = e;
                            return !0 !== P.A.isCollapsed(t.record.id)
                                ? []
                                : t.getChannelRecords().filter((e) => {
                                      if (!k.A.can(Y.xBc.VIEW_CHANNEL, e)) return !1;
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
            a = re(r);
        if (e === tI.PU) {
            let e = n.getGuildActionSection();
            return e.isEmpty()
                ? 0
                : e.getRow(t) === tW.n.GUILD_PREMIUM_PROGRESS_BAR
                  ? e.getRows().length > 1
                      ? 69
                      : 57
                  : a;
        }
        if (n.isPlaceholderRow(e, t)) return 0;
        let o = n.getChannelFromSectionRow(e, t);
        if (null == o) return 0;
        let { channel: d, category: c } = o;
        if (d.record.type === Y.rbe.GUILD_CATEGORY) return 40;
        for (let e of d.threadIds) {
            let { density: t = "default" } = this.props;
            a += re(t);
            let n = l[d.id];
            null != n && n.length > 0 && (a += s === e ? 32 * n.length : 32);
        }
        if (d.record.isGuildVoice()) {
            let e = l[d.id];
            if (null != e && e.length > 0) {
                let t = 32 * e.length;
                if (
                    (d.isCollapsed || c.isCollapsed ? (t = 32) : (0, eR.Ln)(d.record) && (t += 32),
                    (a += t + h.A.space.SPACE_XS.resolve({ density: r })),
                    !d.isCollapsed && !c.isCollapsed)
                ) {
                    let { enableHangoutWindow: e } = (0, eI.kY)({
                        guildId: d.record.guild_id,
                        location: "ChannelList",
                    });
                    e && ((0, eb.lr)(d.record) ? (a += 134) : s === d.id && (a += 44));
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
        null != n && s.includes(n) && (i = (0, ev.xb)(t)), (0, ev.DD)(e.id, s, i);
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
            ni,
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
                    case tI.PU:
                        return "hoisted-spacer";
                    case tI.bK:
                        return "uncategorized-spacer";
                    case tI.HP:
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
        if (t === tI.PU) {
            let e = c.getGuildActionSection(),
                t = e.getRow(n);
            if (null == t) return null;
            switch (t) {
                case tW.n.GUILD_HUB_HEADER_OPTIONS:
                    return (0, s.jsx)(
                        eG.A,
                        { guild: l, channel: H.Ay.getDefaultChannel(l.id) },
                        tW.n.GUILD_HUB_HEADER_OPTIONS,
                    );
                case tW.n.GUILD_PREMIUM_PROGRESS_BAR:
                    let i = e.getRows();
                    return (0, s.jsx)(tc, { guild: l, withMargin: i.length > 1 }, tW.n.GUILD_PREMIUM_PROGRESS_BAR);
                case tW.n.GUILD_SPACE:
                    return (0, s.jsx)(eS, { guild: l, selected: a === e_.VV.GUILD_SPACE }, tW.n.GUILD_SPACE);
                case tW.n.GUILD_HOME:
                    return (0, s.jsx)(n9, { guild: l, selected: a === e_.VV.GUILD_HOME }, tW.n.GUILD_HOME);
                case tW.n.GUILD_SCHEDULED_EVENTS:
                    return (0, s.jsx)(
                        sv,
                        { guild: l, selected: a === tW.n.GUILD_SCHEDULED_EVENTS },
                        tW.n.GUILD_SCHEDULED_EVENTS,
                    );
                case tW.n.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, s.jsx)(
                        ll,
                        { guild: l, selected: a === e_.VV.ROLE_SUBSCRIPTIONS },
                        tW.n.GUILD_ROLE_SUBSCRIPTIONS,
                    );
                case tW.n.GUILD_SHOP:
                    return (0, s.jsx)(lg, { guild: l, selected: a === e_.VV.GUILD_SHOP }, tW.n.GUILD_SHOP);
                case tW.n.GUILD_GAME_SHOP:
                    return (0, s.jsx)(nq, { guild: l, selected: a === e_.VV.GAME_SHOP }, tW.n.GUILD_GAME_SHOP);
                case tW.n.GUILD_VIBEGRATIONS:
                    return (0, s.jsx)(sM, { guild: l, selected: a === e_.VV.VIBEGRATIONS }, tW.n.GUILD_VIBEGRATIONS);
                case tW.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                    return (0, s.jsx)(n8, { guild: l });
                case tW.n.CHANNELS_AND_ROLES:
                    return (0, s.jsx)(
                        n2,
                        { guild: l, selected: a === e_.VV.CHANNEL_BROWSER || a === e_.VV.CUSTOMIZE_COMMUNITY },
                        tW.n.CHANNELS_AND_ROLES,
                    );
                case tW.n.GUILD_DIRECTORY:
                    return (0, s.jsx)(
                        ny,
                        { guild: l, selectedChannelId: a, disableManageChannels: h },
                        tW.n.GUILD_DIRECTORY,
                    );
                case tW.n.GUILD_MOD_DASH_MEMBER_SAFETY:
                    return (0, s.jsx)(
                        eE,
                        { guild: l, selected: a === e_.VV.MEMBER_SAFETY },
                        tW.n.GUILD_MOD_DASH_MEMBER_SAFETY,
                    );
                case tW.n.GUILD_BOOSTS:
                    return (0, s.jsx)(e9, { guildId: l.id, selected: a === e_.VV.GUILD_BOOSTS }, tW.n.GUILD_BOOSTS);
                case tW.n.GAME_SERVERS:
                    return (0, s.jsx)(eF, { guildId: l.id, selected: a === e_.VV.GAME_SERVERS }, tW.n.GAME_SERVERS);
                case tW.n.GAME_SERVERS_EMPTY:
                    return (0, s.jsx)(
                        eV,
                        { guildId: l.id, selected: a === e_.VV.GAME_SERVERS },
                        tW.n.GAME_SERVERS_EMPTY,
                    );
                case tW.n.GUILD_OFFICIAL_MESSAGES:
                    return (0, s.jsx)(
                        lt,
                        { guild: l, selected: a === e_.VV.GUILD_OFFICIAL_MESSAGES },
                        tW.n.GUILD_OFFICIAL_MESSAGES,
                    );
                default:
                    return null;
            }
        }
        if (c.isPlaceholderRow(t, n)) return null;
        let f = c.getChannelFromSectionRow(t, n);
        if (null == f) return null;
        let { category: p, channel: C } = f,
            E = p instanceof tI.xu,
            x = C.record,
            N = `${t}${C.id}`;
        switch (x.type) {
            case Y.rbe.GUILD_ANNOUNCEMENT:
            case Y.rbe.GUILD_TEXT:
            case Y.rbe.GUILD_FORUM:
            case Y.rbe.GUILD_MEDIA:
            case Y.rbe.DM:
            case Y.rbe.GROUP_DM:
                return (0, s.jsxs)(
                    r.Fragment,
                    {
                        children: [
                            (0, s.jsx)(i5, {
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
                                ? (0, s.jsx)(lw, {
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
            case Y.rbe.GUILD_STAGE_VOICE:
                return (0, s.jsx)(
                    i_,
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
            case Y.rbe.GUILD_VOICE:
                return (0, s.jsx)(
                    s4,
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
            case Y.rbe.GUILD_STORE:
                return (0, s.jsx)(ib, { channel: x, guild: l, position: C.position, selected: a === C.id }, N);
            case Y.rbe.GUILD_CATEGORY:
                if (t !== c.voiceChannelsSectionNumber) return null;
                return (0, s.jsx)(t8, { channel: x }, `readonly-${x.id}`);
            case Y.rbe.PUBLIC_THREAD:
            case Y.rbe.PRIVATE_THREAD:
            case Y.rbe.ANNOUNCEMENT_THREAD:
                return (0, s.jsx)(
                    i5,
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
            nu,
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
                let { hasDivider: l, canHaveVoiceSummary: i } = nd(t, n, e);
                return `section-footer-${e}${l ? "-divider" : ""}${i ? "-voice-summary" : ""}`;
            })(t, n, o),
        );
    };
    renderTopUnread() {
        let { topMention: e, bottomUnread: t, bottomMention: n, isUnreadVisible: l } = this.state,
            { guildId: i, guildChannels: r, guildChannelsVersion: a } = this.props;
        return (0, s.jsx)("div", {
            className: nl.Eo,
            children: (0, s.jsx)(sG, {
                ref: this.unreadTopRef,
                textUnread: eC.intl.string(eC.t.FCRiT3),
                textMention: eC.intl.string(eC.t["8zH0LJ"]),
                hide: null == e && (l || null != t || null != n),
                className: nl.Vq,
                barClassName: nl.bu,
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
        return (0, s.jsx)(sG, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: eC.intl.string(eC.t.FCRiT3),
            textMention: eC.intl.string(eC.t["8zH0LJ"]),
            hide: null == l && i,
            className: nl.di,
            barClassName: nl.bu,
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
        if (e !== tI.PU) {
            if (null == t)
                return e === tI.HP
                    ? "favorites-header"
                    : e === n.recentsSectionNumber
                      ? "recents-header"
                      : e === n.voiceChannelsSectionNumber
                        ? "voice-channels"
                        : e === tI.bK
                          ? "uncategorized-header"
                          : n.getNamedCategoryFromSection(e)?.id;
            if (!n.isPlaceholderRow(e, t)) return n.getChannelFromSectionRow(e, t)?.channel?.id;
        }
    };
    renderList() {
        let { guildChannels: e, guildBanner: t, selectedGuildId: n, density: l } = this.props,
            i = {};
        (0, U.ai)(n) && (i["data-favorites"] = !0);
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
                        className: nl.XG,
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
                        innerAriaLabel: eC.intl.string(eC.t.OGiMXJ),
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
        if (!tN.A.shouldShow("voice-conversations")) return;
        let { guildChannels: e } = this.props,
            t = e.getFirstVoiceChannel();
        if (null == t) return void tx.X8("voice-conversations");
        let n = this._list;
        if (null != n)
            for (let { section: e, row: l } of this.getSectionRowsFromChannel(t.id))
                n.isItemVisible(e, l) || tx.X8("voice-conversations");
    };
    render() {
        let { guildChannels: e, guildChannelsVersion: t, showNewUnreadsBar: n } = this.props;
        return (0, s.jsx)(ea.V0, {
            children: (l) =>
                (0, s.jsx)(f.F, {
                    component: (0, s.jsx)(p.A, {
                        children: (0, s.jsx)(f.H, { id: l, children: eC.intl.string(eC.t.OGiMXJ) }),
                    }),
                    children: n
                        ? (0, s.jsxs)(r.Fragment, {
                              children: [
                                  (0, s.jsx)("div", {
                                      className: nl.Eo,
                                      children: (0, s.jsx)(sN, {
                                          position: "top",
                                          guildChannels: e,
                                          guildChannelsVersion: t,
                                          jumpToVoiceChannels: this.jumpToVoiceChannels,
                                          jumpToChannel: this.jumpToChannel,
                                      }),
                                  }),
                                  this.renderList(),
                                  (0, s.jsx)(sN, {
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
let rn = (e) => {
    let { guildId: t, selectedChannelId: n, selectedVoiceChannelId: l } = e,
        i = (0, u.bG)([ei.Ay], () => ei.Ay.keyboardModeEnabled),
        { analyticsLocations: a } = (0, er.Ay)(es.A.GUILD_CHANNEL_LIST),
        o = (0, u.bG)([V.A], () => V.A.getChannel(n)),
        h = (0, u.bG)([V.A], () => V.A.getChannel(l)),
        A = (0, u.bG)([F.A], () => F.A.getGuildId()),
        g = (0, O.jN)(t),
        m = r.useRef(null),
        f = r.useCallback((e, t) => {
            let n = m.current;
            null != n &&
                (Y.Ut1.test(t) || (0, e_.jq)(t)
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
        x = E.setFocus;
    r.useEffect(() => {
        null != n && x(n);
    }, [n, x]);
    let N = (function (e) {
        let [t] = (0, u.bG)(
            [tp.A, V.A, th.A],
            () => {
                let t;
                return [
                    (t = (0, U.ai)(e)
                        ? tf.default
                              .keys(th.A.getFavoriteChannels())
                              .map((e) => V.A.getChannel(e))
                              .filter(tg.Vq)
                              .filter((e) => e.isGuildStageVoice())
                        : tp.A.getChannels(e)).reduce((e, t) => {
                        let n = tp.A.getMutableParticipants(t.id, tC.ip.SPEAKER);
                        return (e[t.id] = n.filter((e) => e.type === tC.wY.VOICE).map(tE)), e;
                    }, {}),
                    t.reduce((e, t) => {
                        let { id: n } = t;
                        return e + tp.A.getParticipantsVersion(n);
                    }, 0),
                ];
            },
            [e],
            tm.D,
        );
        return t;
    })(t);
    return (0, s.jsx)(er.f5, {
        value: a,
        children: (0, s.jsx)(G.A, {
            section: Y.JJy.GUILD_CHANNEL_LIST,
            children: (0, s.jsxs)(d.hD, {
                navigator: E,
                children: [
                    (0, s.jsx)(t_.q, { containerRef: E.containerProps.ref, itemType: ee }),
                    (0, s.jsx)(rt, {
                        ...e,
                        listNavigator: E,
                        ref: m,
                        selectedChannel: o,
                        selectedVoiceChannel: h,
                        stageChannelSpeakerVoiceStates: N,
                        selectedGuildId: A,
                        optInEnabled: g,
                    }),
                ],
            }),
        }),
    });
};
function rl(e) {
    let { guildChannels: t, shouldShowEmptyState: n } = (0, tG.D)(),
        { density: l } = (0, C.wR)();
    return n
        ? (0, s.jsx)("div", {
              className: nl.XG,
              children: (0, s.jsxs)(E.B, {
                  gap: 8,
                  children: [
                      (0, s.jsxs)(E.B, {
                          gap: 8,
                          padding: { top: 16, right: 16, bottom: 0, left: 16 },
                          fullWidth: !1,
                          children: [
                              (0, s.jsx)(x.D, {
                                  variant: "heading-md/semibold",
                                  children: eC.intl.string(s8.default["1n0TGE"]),
                              }),
                              (0, s.jsx)(N.E, {
                                  variant: "text-sm/medium",
                                  color: "text-muted",
                                  children: eC.intl.string(s8.default.Wwzrs9),
                              }),
                          ],
                      }),
                      (0, s.jsx)("div", { className: nl.ts }),
                      (0, s.jsxs)("div", {
                          className: nl.MS,
                          "aria-hidden": "true",
                          children: [
                              (0, s.jsxs)("div", {
                                  className: nl.pS,
                                  children: [
                                      (0, s.jsx)(_.N, { size: "xs", color: h.A.colors.ICON_MUTED }),
                                      (0, s.jsx)("div", { className: nl.Qs }),
                                  ],
                              }),
                              (0, s.jsxs)("div", {
                                  className: nl.pS,
                                  children: [
                                      (0, s.jsx)(S.H, { size: "xs", color: h.A.colors.ICON_MUTED }),
                                      (0, s.jsx)("div", { className: nl.iR }),
                                  ],
                              }),
                              (0, s.jsxs)("div", {
                                  className: nl.pS,
                                  children: [
                                      (0, s.jsx)(I.o, { size: "xs", color: h.A.colors.ICON_MUTED }),
                                      (0, s.jsx)("div", { className: nl.Qs }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : (0, s.jsx)(rn, { ...e, guildChannels: t, guildChannelsVersion: 0, withGuildIcon: !1, density: l });
}
function ri(e) {
    let t = (function (e) {
            var t;
            let n,
                l,
                i =
                    ((t = e.id),
                    (n = (0, tP.A)(t)),
                    (l = (0, tV.Ay)(t)),
                    !(0, u.bG)([B.A], () => {
                        if (null == t) return !1;
                        let e = B.A.getGuild(t);
                        return e?.features.has(Y.GuildFeatures.HUB) ?? !1;
                    }, [t]) &&
                        (n || l.length > 0)),
                s = (0, ty.W)(e.id),
                r = (0, tO.vz)(e.id),
                a = (0, tj.r)(e),
                o = (0, tK.jz)(e),
                d = (0, tU.d)(e.id),
                c = (0, tv.bG)([tL.h], () => tL.h.getNewMemberActions(e.id), [e.id]),
                h = (0, tz.QI)(e, "useGuildActionRows"),
                A = (0, tD.A)(e.id),
                g = (0, tT.jY)(e.id),
                m = (0, tM.fw)(e.id),
                f = (0, tw.U)(e, "useGuildActionRows"),
                p = [],
                C = e.features.has(Y.GuildFeatures.HUB),
                E = e.features.has(Y.GuildFeatures.COMMUNITY),
                x = e.features.has(Y.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
                N = (0, ti.A)(e.id);
            tF.useConfig({ location: "useGuildActionRows" }).enabled;
            let _ = tr(e),
                S = (0, tH.bW)(e.id, "useGuildActionRows"),
                I = (0, tB.C$)(e.id, "useGuildActionRows"),
                b = e.features.has(Y.GuildFeatures.GAME_SERVERS),
                G = (0, tk.N)("useGuildActionRows"),
                [R] = (0, eT.kn)(I && G && !b ? [eo.M.EMPTY_GAME_SERVER_TAB] : [], void 0, !0);
            return (
                f && p.push(tW.n.GUILD_SPACE),
                C && p.push(tW.n.GUILD_HUB_HEADER_OPTIONS),
                !g && d && A && null != c && c.length > 0
                    ? p.push(tW.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
                    : e.premiumProgressBarEnabled && _ > 0 && p.push(tW.n.GUILD_PREMIUM_PROGRESS_BAR),
                !C && d && p.push(tW.n.GUILD_HOME),
                i && p.push(tW.n.GUILD_SCHEDULED_EVENTS),
                !C && E && p.push(tW.n.CHANNELS_AND_ROLES),
                r && p.push(tW.n.GUILD_ROLE_SUBSCRIPTIONS),
                a && p.push(tW.n.GUILD_SHOP),
                o && p.push(tW.n.GUILD_GAME_SHOP),
                ((m && (E || x)) || (s && e.features.has(Y.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL))) &&
                    p.push(tW.n.GUILD_MOD_DASH_MEMBER_SAFETY),
                N && p.push(tW.n.GUILD_BOOSTS),
                S && p.push(tW.n.GUILD_OFFICIAL_MESSAGES),
                I && (b ? p.push(tW.n.GAME_SERVERS) : null != R && p.push(tW.n.GAME_SERVERS_EMPTY)),
                h && p.push(tW.n.GUILD_VIBEGRATIONS),
                p
            );
        })(e.guild),
        n = (0, u.cf)([tb.A], () => tb.A.getGuild(e.guildId, { guildActionRows: t })),
        { density: l } = (0, C.wR)();
    return (0, s.jsx)(rn, { ...e, ...n, density: l });
}
