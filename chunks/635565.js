n.d(t, { B: () => rr, T: () => rs }), n(321073);
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
    m = n(312138),
    g = n(475825),
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
    em = n(513461),
    eg = n(663997),
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
            eh.A.fetchGuildJoinRequests({ guildId: t.id, status: em.B5.SUBMITTED, limit: eg.L });
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
        m = r.useCallback(
            (e) => {
                d(e), A(e);
            },
            [d, A],
        ),
        g = r.useCallback(() => {
            m(eU.i.USER_DISMISS), (0, eN.pX)(Y.BVt.CHANNEL(t, e_.VV.GAME_SERVERS));
        }, [t, m]),
        f = r.useRef(null),
        p = h === eo.M.GAME_SERVER_HOSTING_NEW_COACHMARK,
        C = r.useCallback(() => (0, s.jsx)(eB.mn, { channelRowRef: f, guildId: t, markAsDismissed: m }), [t, m]);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(ef.G, {
                ref: f,
                id: `game-server-${t}`,
                renderIcon: (e) => (0, s.jsx)(eL._, { size: "md", className: e, color: "currentColor" }),
                text: eC.intl.string(eD.default.vCzwM7),
                selected: n,
                onClick: g,
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
            m = (0, u.bG)([eH.A], () => eH.A.hasLayers()),
            g = (0, ew.xr)((e) => e.fullScreenLayers.length > 0),
            f = A || m || g,
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
var e6 = n(4798),
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
    tm = n(403362),
    tg = n(996439),
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
    tq = n(499373),
    tJ = n(187322),
    tZ = n(847374),
    t$ = n(285796),
    tQ = n(914430),
    t0 = n(47167),
    t1 = n(485947),
    t2 = n(323932),
    t3 = n(551851),
    t9 = n(485596);
function t6(e) {
    e.stopPropagation();
}
function t7(e) {
    let { label: t, onClick: n, tabIndex: l } = e;
    return (0, s.jsx)(ej.m, {
        text: t,
        children: (0, s.jsx)(ey.D, {
            className: ez()(t9.c9, t9.ih),
            onClick: n,
            tabIndex: l,
            role: "button",
            "aria-label": t,
            children: (0, s.jsx)(tq.T, { size: "xs", color: "currentColor", className: t9.hs }),
        }),
    });
}
let t5 = el(
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
                g = (0, u.bG)([K.Ay], () => K.Ay.isChannelMuted(l.getGuildId(), l.id)),
                f = (0, u.bG)([P.A], () => P.A.isCollapsed(l.id)),
                p = (0, u.bG)([k.A], () => k.A.can(Y.xBc.MANAGE_CHANNELS, l)),
                C = (0, t0.Ay)(l);
            t = null != h ? (c > h ? t9.mU : t9.TR) : t9.fx;
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
                                        n.e("73589"),
                                    ]).then(n.bind(n, 617396));
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
                _ = (0, t2.C)(l);
            null == _ && p && !o && (_ = { label: eC.intl.string(eC.t["fUYU+j"]), perform: N });
            let { role: S, tabIndex: I, ...b } = (0, d.rm)(l.id),
                G = r.useRef(null),
                R = r.useRef(null),
                v = (0, s.jsxs)("li", {
                    className: t,
                    "data-dnd-name": C,
                    children: [
                        (0, s.jsx)(tJ.vN, {
                            focusTarget: G,
                            ringTarget: R,
                            offset: { left: 4, right: 4 },
                            children: (0, s.jsxs)("div", {
                                ref: R,
                                className: ez()(t9.Ki, t9.iE, { [t9.yZ]: f, [t9.SU]: g, [t9.vk]: !0 }),
                                onContextMenu: x,
                                children: [
                                    (0, s.jsxs)(ey.D, {
                                        innerRef: G,
                                        className: t9.rb,
                                        tabIndex: I,
                                        ...b,
                                        onClick: E,
                                        "aria-label": eC.intl.formatToPlainString(eC.t.y5l3J2, { categoryName: C }),
                                        "aria-expanded": !f,
                                        focusProps: { enabled: !1 },
                                        children: [
                                            (0, s.jsx)(t1.A, {
                                                className: t9.UU,
                                                children: (0, s.jsx)(tY.A, { children: C }),
                                            }),
                                            A
                                                ? null
                                                : (0, s.jsx)(tZ.a, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: t9.Kk,
                                                  }),
                                        ],
                                    }),
                                    (0, s.jsx)("div", {
                                        onClick: t6,
                                        className: t9.Y_,
                                        children:
                                            null != _
                                                ? (0, s.jsx)(t7, { label: _.label, onClick: _.perform, tabIndex: I })
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
    t4 = r.memo(function (e) {
        let { name: t, onDismiss: n, className: l } = e;
        return (0, s.jsx)("li", {
            className: ez()(l, t9.fx),
            children: (0, s.jsxs)("div", {
                className: ez()(t9.Ki, t9._V),
                children: [
                    (0, s.jsx)("div", {
                        className: t9.rb,
                        children: (0, s.jsx)(t1.A, { className: t9.UU, children: (0, s.jsx)(tY.A, { children: t }) }),
                    }),
                    null != n
                        ? (0, s.jsx)(ej.m, {
                              asContainer: !0,
                              text: eC.intl.string(eC.t["5qNmsU"]),
                              children: (0, s.jsx)(ey.D, {
                                  className: t9.r,
                                  onClick: n,
                                  children: (0, s.jsx)(t$.a, { size: "md", color: "currentColor", className: t9.X8 }),
                              }),
                          })
                        : null,
                ],
            }),
        });
    }),
    t8 = r.memo(function (e) {
        let { category: t } = e,
            n = (0, u.bG)([t3.A], () => t3.A.isVoiceCategoryCollapsed(t.guild.id)),
            l = r.useCallback(() => {
                var e, l;
                n
                    ? ((e = t.guild.id), e8.h.dispatch({ type: "VOICE_CATEGORY_EXPAND", guildId: e, expand: !0 }))
                    : ((l = t.guild.id), e8.h.dispatch({ type: "VOICE_CATEGORY_COLLAPSE", guildId: l, expand: !1 }));
            }, [t.guild.id, n]);
        return (0, s.jsx)("div", {
            className: t9.oA,
            children: (0, s.jsx)(tX.$, {
                variant: "secondary",
                fullWidth: !0,
                onClick: l,
                icon: S.H,
                text: n ? eC.intl.string(eC.t["/eB9Bg"]) : eC.intl.string(eC.t.Q2gPWl),
            }),
        });
    }),
    ne = r.memo(function (e) {
        let { category: t, channel: n } = e,
            l = (0, u.bG)([t3.A], () => t3.A.isVoiceCategoryCollapsed(t.guild.id));
        return l || null == n || n.record.type === Y.rbe.GUILD_CATEGORY
            ? l
                ? (0, s.jsx)("li", {
                      className: t9.fx,
                      children: (0, s.jsx)("div", {
                          className: ez()(t9.Ki, t9._V),
                          children: (0, s.jsx)(t1.A, {
                              className: t9.UU,
                              children: (0, s.jsx)(tY.A, { children: eC.intl.string(eC.t["V/u9Dy"]) }),
                          }),
                      }),
                  })
                : null
            : (0, s.jsx)("div", { style: { height: 16 } });
    }),
    nt = r.memo(function (e) {
        let { channel: t } = e,
            n = (0, t0.Ay)(t);
        return (0, s.jsx)("li", {
            className: t9.fx,
            children: (0, s.jsx)("div", {
                className: ez()(t9.Ki, t9._V),
                children: (0, s.jsx)(t1.A, { className: t9.UU, children: (0, s.jsx)(tY.A, { children: n }) }),
            }),
        });
    });
var nn = n(728321),
    nl = n(244083);
let ni = { origin: { x: -36, y: 7 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } };
var ns = n(808240);
let nr = r.memo(function (e) {
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
            return (0, s.jsx)(t4, { name: eC.intl.string(eC.t.mlPMCy) });
        case l.recentsSectionNumber:
            return (0, s.jsx)(t4, { name: eC.intl.string(eC.t.gKcrqM), onDismiss: d });
        case l.voiceChannelsSectionNumber: {
            let e = l.getCategoryFromSection(l.voiceChannelsSectionNumber);
            if (null == e || e.isEmpty()) return null;
            let n = l.getChannelFromSectionRow(t, 0)?.channel;
            return (0, s.jsxs)(r.Fragment, {
                children: [(0, s.jsx)("div", { className: ns.ts }), (0, s.jsx)(ne, { category: e, channel: n })],
            });
        }
        case tI.TF: {
            let e = l.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, s.jsx)(t5, {
                channel: e.record,
                position: e.position,
                disableManageChannels: o,
                children: (0, s.jsx)(nn.A, {
                    inlineSpecs: ni,
                    arrowAlignment: nl.oN.TOP,
                    tutorialId: "organize-by-topic",
                    position: "right",
                }),
            });
        }
        default: {
            let e = l.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, s.jsx)(t5, { channel: e.record, position: e.position, disableManageChannels: o });
        }
    }
});
var na = n(104171),
    no = n(186369),
    nd = n(970812),
    nc = n(871237);
function nu(e, t, n) {
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
let nh = r.memo(function (e) {
        let { guildChannels: t, guildChannelsVersion: n } = e,
            l = r.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
        return null == l ? null : (0, s.jsx)(t8, { category: l });
    }),
    nA = r.memo(function (e) {
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
            { hasDivider: h, canHaveVoiceSummary: A } = r.useMemo(() => nu(n, c, t), [n, c, t, l]),
            m = r.useMemo(() => (t === tI.PU ? null : n.getCategoryFromSection(t)), [n, t, l]),
            g = (0, O.jN)(a),
            { enableWaveformIcon: f } = (0, no.b)(a, "ChannelListSectionFooter"),
            p = (0, u.yK)([K.Ay], () => {
                if (null == m || !m.isCollapsed || !A) return [];
                let e = m.getChannelRecords(),
                    t = [];
                for (let n of e) {
                    if (!n.isGuildVocal()) continue;
                    let e = K.Ay.isChannelOrParentOptedIn(a, n.id);
                    (!g || e) && t.push(n);
                }
                return t;
            }, [m, A, a, g]),
            C = r.useMemo(
                () => (0, nc.fK)({ channels: p, selectedChannelId: o, selectedVoiceChannelId: d, voiceStates: i }),
                [p, o, d, i],
            );
        if (t === n.voiceChannelsSectionNumber) return (0, s.jsx)(nh, { guildChannels: n, guildChannelsVersion: l });
        let E = h ? (0, s.jsx)("div", { className: ns.ts }) : null;
        return A && 0 !== C.length
            ? (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)("div", {
                          className: ns.qz,
                          children: (0, s.jsx)(na.Ay, {
                              renderIcon: !0,
                              users: C,
                              max: 8,
                              showUserPopout: !0,
                              guildId: a,
                              renderLeadingIcon: f
                                  ? (e) => (0, s.jsx)(nd.A, { color: "currentColor", className: ez()(e, eP.Gj) })
                                  : void 0,
                          }),
                      }),
                      E,
                  ],
              })
            : E;
    });
var nm = n(625903),
    ng = n(283973),
    nf = n(933832),
    np = n(435183),
    nC = n(698441),
    nE = n(855687),
    nx = n(816662),
    nN = n(446600),
    n_ = n(616356);
function nS(e, t, n) {
    return null != t && !!t && !X(n, e.type);
}
function nI(e, t) {
    return null == t ? eP.fx : e > t ? eP.mU : eP.TR;
}
function nb(e) {
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
                      np.Ay.open(t.id);
                  },
                  tabIndex: l,
                  "aria-label": eC.intl.string(eC.t["3gUsJb"]),
                  children: (0, s.jsx)(nm.Z, { size: "xs", color: "currentColor", className: eP.gE }),
              }),
          });
}
function nG(e) {
    let {
            channel: t,
            isDefaultChannel: l = !1,
            locked: i,
            tabIndex: a,
            forceShowButtons: o,
            hasChannelInfo: d = !1,
        } = e,
        c = (0, u.bG)([B.A], () => B.A.getGuild(t.getGuildId())),
        h = (0, u.bG)([nN.A], () => nN.A.getStageInstanceByChannel(t.id), [t.id]),
        A = (0, u.bG)([nC.Ay], () => nC.Ay.getActiveEventByChannel(t.id), [t.id]),
        m = (0, u.bG)([k.A], () => (0, nE.K)(k.A, c, t, h)),
        g = (0, u.bG)([], () =>
            t?.type === Y.rbe.GUILD_VOICE ? eC.intl.string(eC.t["EE+P0H"]) : eC.intl.string(eC.t["0jeAXt"]),
        ),
        f = r.useRef(null);
    if (i || !m || t.isModeratorReportChannel() || t.isThread()) return null;
    let p = (0, s.jsx)(ng.R, { size: "xs", className: eP.gE, "aria-hidden": !0, color: "currentColor" });
    return (
        l &&
            (p = (0, s.jsx)(nn.A, {
                childRef: f,
                tutorialId: "instant-invite",
                position: "left",
                children: (0, s.jsx)("div", { ref: f, children: p }),
            })),
        (0, s.jsx)(ej.m, {
            asContainer: !0,
            text: g,
            children: (0, s.jsx)(ey.D, {
                className: ez()(eP.Xs, o ? eP.Tf : void 0, d ? eP.bw : eP.UI),
                onClick: function () {
                    if (null != c) {
                        let e = n_.A.getAllActiveStreams().filter(
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
                "aria-label": g,
                children: p,
            }),
        })
    );
}
function nR(e) {
    let { channel: t } = e;
    return (0, s.jsx)(ej.m, {
        asContainer: !0,
        text: eC.intl.string(eC.t["ROh4T+"]),
        children: (0, s.jsx)(ey.D, {
            className: eP.Xs,
            onClick: function () {
                (0, nx.Ol)(t.guild_id, t.id);
            },
            "aria-label": eC.intl.string(eC.t["ROh4T+"]),
            children: (0, s.jsx)(eM.P, { size: "xs", color: "currentColor", className: eP.gE }),
        }),
    });
}
function nv(e) {
    let { channel: t } = e;
    return (0, s.jsx)(ej.m, {
        asContainer: !0,
        text: eC.intl.string(eC.t["N2c/Un"]),
        children: (0, s.jsx)(ey.D, {
            className: eP.Xs,
            onClick: function () {
                (0, nx.jA)(t.guild_id, t.id, !0, { section: Y.JJy.CHANNEL_LIST });
            },
            "aria-label": eC.intl.string(eC.t["N2c/Un"]),
            children: (0, s.jsx)(nf.A, { size: "xs", color: "currentColor", className: eP.gE }),
        }),
    });
}
class nj extends r.PureComponent {
    static defaultProps = { isDefaultChannel: !1 };
    renderEditButton() {
        return (0, s.jsx)(nb, { ...this.props });
    }
    renderInviteButton() {
        return (0, s.jsx)(nG, { ...this.props });
    }
    renderRemoveSuggestionButton() {
        return (0, s.jsx)(nR, { ...this.props });
    }
    renderAcceptSuggestionButton() {
        return (0, s.jsx)(nv, { ...this.props });
    }
    getClassName() {
        let { position: e, sortingPosition: t } = this.props;
        return nI(e, t);
    }
    isDisabled() {
        let { channel: e, sorting: t, sortingType: n } = this.props;
        return nS(e, t, n);
    }
}
var ny = n(929481),
    nM = n(790782);
let nL = el(function (e) {
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
        g = (0, u.bG)([V.A, H.Ay], () => {
            let e = H.Ay.getDirectoryChannelIds(t.id);
            return 0 === e.length ? null : V.A.getChannel(e[0]);
        }),
        f = (0, u.bG)([V.A], () => V.A.getChannel(g?.parent_id)),
        p = l === g?.id,
        C = (0, t0.Ay)(g),
        E = (0, u.bG)([k.A], () =>
            null != f ? k.A.can(Y.xBc.MANAGE_CHANNELS, f) : null != t && k.A.can(Y.xBc.MANAGE_CHANNELS, t),
        ),
        x = r.useCallback(
            (e) => {
                null != g &&
                    (0, e5.L3)(e, async () => {
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
    let N = nI(i, c),
        _ = nS(g, o, d),
        S = (0, s.jsx)("div", {
            className: ez()(N, { [eP.r9]: _, [eP.wH]: p }),
            "data-dnd-name": C,
            children: (0, s.jsxs)(ny.Ay, {
                className: eP.Ki,
                channel: g,
                guild: t,
                selected: p,
                onContextMenu: x,
                forceInteractable: !0,
                resolvedUnreadSetting: nM.e.ONLY_MENTIONS,
                children: [
                    (0, s.jsx)(nG, { channel: g, tabIndex: m }),
                    (0, s.jsx)(nb, { channel: g, disableManageChannels: a, tabIndex: m }),
                ],
            }),
        });
    return E && (S = A(h(S))), S;
});
var nT = n(34188),
    nU = n(733391),
    nD = n(832163),
    nO = n(517907),
    nP = n(31969),
    nV = n(44724),
    nw = n(849134),
    nH = n(770178),
    nB = n(65347);
let nk = Math.ceil(Math.sqrt(115200)),
    nF = (nk - 240) / 2,
    nK = r.forwardRef(function (e, t) {
        let { children: n } = e,
            [l, i] = r.useState(-1),
            a = r.useCallback((e) => {
                i(e.contentRect.width);
            }, []),
            o = (0, nH.w)(a, [], { fireOnMount: !0 }),
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
                            className: nB.q,
                            style: {
                                transform: d.to(
                                    (e) => `translateX(calc(${e * l}px + ${e * nk}px)) translateY(-50%) rotate(45deg)`,
                                ),
                            },
                        }),
                    ),
                [n, l, d],
            );
        return (
            r.useImperativeHandle(t, () => ({ onMouseEnter: u, onMouseLeave: h }), [u, h]),
            (0, s.jsx)("div", {
                className: nB.i,
                onMouseEnter: u,
                onMouseLeave: h,
                onFocus: u,
                onBlur: h,
                ref: o,
                style: { "--custom-shine-dimensions": "240px", "--custom-shine-rotated-dimensions-delta": `${nF}px` },
                children: A,
            })
        );
    });
var nz = n(371794),
    nW = n(240248),
    nY = n(998218),
    nX = n(430825),
    nq = n(601551),
    nJ = n(876772);
let nZ = r.memo(function (e) {
    let { guild: t, selected: l } = e,
        i = r.useRef(null),
        a = r.useRef(null),
        o = (0, j.useHasAnyModalOpen)(),
        d = (0, u.bG)([eH.A], () => eH.A.hasLayers()),
        c = (0, ew.xr)((e) => e.fullScreenLayers.length > 0);
    r.useEffect(() => {
        (0, nU.Kh)(t.id);
    }, [t.id]);
    let A = (0, u.bG)([nD.A], () => nD.A.getAnnouncement(t.id)),
        m = A?.state === "success" ? A.announcement : void 0,
        [g, f] = (0, eT.x_)(eo.M.GAME_SHOP_NEW_BADGE, t.id, m?.id ?? "", void 0, !0),
        p = g === eo.M.GAME_SHOP_NEW_BADGE && null != m,
        C = (0, tK.nY)(t.id),
        E = (0, nP.F)("storefront_badge", { applicationId: C }),
        x = (0, nO.A)({ applicationId: C, location: "game_shop_channel_row" }),
        _ = null;
    p ? (_ = eC.intl.string(eC.t.y2b7CA)) : x && (_ = eC.intl.string(nX.default.hriMCc)), null != E && (_ = E.text);
    let [S, I] = (0, eT.x_)(eo.M.GAME_SHOP_NEW_DROP_POPOVER, t.id, m?.id ?? ""),
        b = S === eo.M.GAME_SHOP_NEW_DROP_POPOVER && null != m;
    r.useEffect(() => {
        l && (p && f(eU.i.INDIRECT_ACTION), b && I(eU.i.INDIRECT_ACTION));
    }, [f, I, l, p, b]);
    let G = r.useCallback(() => {
            f(eU.i.TAKE_ACTION), I(eU.i.TAKE_ACTION);
            let e = (0, tK.mq)(t.id),
                n = nD.A.getStorefrontState(e)?.activePage ?? 0;
            (0, eN.pX)(Y.BVt.CHANNELS_GAME_SHOP(t.id, n));
        }, [t.id, f, I]),
        R = r.useCallback(() => {
            (0, nV.X)({ guildId: t.id, forceFetch: b });
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
                    background: (0, s.jsx)("div", { className: nJ.D }),
                    innerClassName: nJ.Z,
                    ref: a,
                    id: `game-shop-${t.id}`,
                    renderIcon: (e) =>
                        (0, s.jsx)(nT.U, {
                            size: "custom",
                            color: "currentColor",
                            width: 20,
                            height: 20,
                            className: e,
                        }),
                    text: (0, s.jsx)(N.E, {
                        variant: "text-md/medium",
                        className: nq.UU,
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
            if (null == m) return null;
            switch (m.type) {
                case "guild-application-announcement": {
                    let e =
                            null != m.assetId
                                ? nY.A.toURLSafe((0, nz.YE)(m.applicationId, m.assetId, 256, "webp"))
                                : void 0,
                        t =
                            null != m.backgroundImageAssetId
                                ? nY.A.toURLSafe((0, nz.YE)(m.applicationId, m.backgroundImageAssetId, 256, "webp"))
                                : void 0;
                    if (null == e) return null;
                    return {
                        graphicSource: { type: "sku", imageUrl: e, backgroundImageUrl: t },
                        title: eC.intl.string(eC.t["7PvvS9"]),
                        body: eC.intl.formatToPlainString(eC.t["9J4h1a"], { applicationName: m.applicationName }),
                    };
                }
                case "guild-discord-announcement": {
                    let { videoAssetFullyQualifiedURL: e, assetFullyQualifiedURL: t } = m;
                    if ((0, nW.uJ)(e) && (0, nW.uJ)(t)) return null;
                    return {
                        graphicSource: (0, nW.uJ)(e) ? { type: "asset", src: t } : { type: "video", src: e },
                        title: m.popoverTitle,
                        body: m.popoverBody,
                        actionLabel: m.popoverCta,
                    };
                }
                default:
                    return null;
            }
        }, [m]),
        U = r.useCallback(
            () =>
                b && null != T
                    ? (0, s.jsx)(nw.A, {
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
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(nK, { ref: i, children: L }), !o && !d && !c && U()] });
});
var n$ = n(740426),
    nQ = n(826673),
    n0 = n(591552),
    n1 = n(202776),
    n2 = n(454058),
    n3 = n(568548);
function n9(e) {
    let { guild: t, selected: l } = e,
        i = (0, n1.A)(t),
        a = (0, nQ.HX)(eo.M.CHANNEL_BROWSER_NEW_BADGE_NUX),
        o = (0, tv.yK)([n2.A], () =>
            Array.from(n2.A.getNewChannelIds(t.id)).filter((e) => n2.A.shouldIndicateNewChannel(t.id, e)),
        ),
        d = (0, tv.bG)([n3.Ay], () => n3.Ay.hasUnread(t.id, nM.P.GUILD_ONBOARDING_QUESTION)),
        c = o.length > tI.rR,
        u = (0, tv.bG)([n0.A, n3.Ay], () => {
            let e = n0.A.lastFetchedAt(t.id),
                n = n3.Ay.lastMessageId(t.id, nM.P.GUILD_ONBOARDING_QUESTION);
            if (null == n) return !1;
            let l = tf.default.extractTimestamp(n);
            return null != e && e > l;
        }),
        A = r.useCallback(() => {
            (0, eN.pX)(Y.BVt.CHANNEL(t.id, i ? e_.VV.CUSTOMIZE_COMMUNITY : e_.VV.CHANNEL_BROWSER));
        }, [t.id, i]),
        m = r.useCallback(
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
        g = null;
    return (
        (a && !d && !c) ||
            l ||
            u ||
            (g = (0, s.jsx)(ec.Lp, {
                color: h.A.colors.BADGE_BACKGROUND_BRAND.css,
                text: eC.intl.string(eC.t.y2b7CA),
            })),
        (0, s.jsx)(ef.G, {
            id: `channels-${t.id}`,
            renderIcon: (e) => (0, s.jsx)(n$.k, { size: "md", color: "currentColor", className: e }),
            text: i ? eC.intl.string(eC.t.h9mGOP) : eC.intl.string(eC.t.et6wav),
            selected: l,
            onClick: A,
            onContextMenu: m,
            trailing: g,
        })
    );
}
var n6 = n(855473);
function n7(e) {
    let { guild: t, selected: n } = e;
    return (0, s.jsx)(ef.G, {
        id: `home-tab-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(n6.Z, { size: "md", color: "currentColor", className: e }),
        text: eC.intl.string(eC.t.VbpLyU),
        selected: n,
        onClick: function () {
            (0, eN.pX)(Y.BVt.CHANNEL(t.id, e_.VV.GUILD_HOME));
        },
    });
}
var n5 = n(5373),
    n4 = n(65995),
    n8 = n(408619);
function le(e, t) {
    return (0, s.jsx)(N.E, { variant: "text-xs/bold", color: "text-default", children: e }, t);
}
let lt = r.memo(function (e) {
    let { guild: t } = e,
        n = (0, u.bG)([tL.h], () => tL.h.getNewMemberActions(t.id), [t.id]),
        l = (0, u.bG)([n4.A], () => n4.A.getCompletedActions(t.id)),
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
                className: n8.G9,
                onClick: function () {
                    (0, eN.pX)(Y.BVt.CHANNEL(t.id, e_.VV.GUILD_HOME));
                },
                children: [
                    (0, s.jsxs)("div", {
                        className: n8.A1,
                        children: [
                            (0, s.jsx)(x.D, { variant: "heading-sm/bold", children: eC.intl.string(eC.t.SnrR3x) }),
                            (0, s.jsxs)("div", {
                                className: n8.Ib,
                                children: [
                                    (0, s.jsx)(N.E, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        className: n8.Cv,
                                        children: eC.intl.format(eC.t.eqZ1lW, {
                                            numberHook: le,
                                            total: a.toString(),
                                            completed: i.toString(),
                                        }),
                                    }),
                                    (0, s.jsx)(tl.A, {
                                        className: n8.UE,
                                        width: 16,
                                        height: 16,
                                        direction: tl.A.Directions.RIGHT,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, s.jsx)(n5.i, {
                        className: n8.hr,
                        foregroundGradientColor: [
                            h.A.unsafe_rawColors.GREEN_300.css,
                            h.A.unsafe_rawColors.GREEN_230.css,
                        ],
                        percent: (i / a) * 100 + 3,
                        animate: !0,
                    }),
                ],
            }),
            (0, s.jsx)("div", { role: "separator", className: n8.yF }),
        ],
    });
});
var ln = n(581925);
function ll(e) {
    let { guild: t, selected: n } = e;
    return (0, s.jsx)(ef.G, {
        id: `official-messages-page-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(ln.L, { size: "md", color: "currentColor", className: e }),
        text: eC.intl.string(eC.t.xHEzFh),
        selected: n,
        onClick: function () {
            (0, eN.pX)(Y.BVt.CHANNEL(t.id, e_.VV.GUILD_OFFICIAL_MESSAGES));
        },
    });
}
var li = n(514179);
function ls(e) {
    let { guild: t, selected: l } = e;
    return (0, s.jsx)(ef.G, {
        id: `subscriptions-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(li.A, { className: e }),
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
var lr = n(506774),
    la = n(95561),
    lo = n(289397),
    ld = n(486418),
    lc = n(575926),
    lu = n(440293),
    lh = n(174459),
    lA = n(634654),
    lm = n(726965);
function lg(e) {
    let { guildId: t, selected: n, handleClick: l } = e,
        i = (0, lu.w)(t),
        r = (0, tv.bG)([B.A], () => B.A.getGuild(t)),
        a = r?.features.has(Y.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !0,
        o = "false" === lr.w.get(lA.bJ, "false"),
        d = (0, tv.bG)([ei.Ay], () => ei.Ay.useReducedMotion);
    return (0, s.jsx)(ef.G, {
        id: `shop-${t}`,
        className: ez()(lm.A2, { [lm.wH]: n, [lm.ST]: o }),
        innerClassName: lm.LE,
        renderIcon: (e) => (0, s.jsx)(lc.h, { width: 20, height: 20, className: ez()([e, lm.sV]) }),
        text: eC.intl.string(eC.t.al5EXL),
        selected: n,
        onClick: l,
        trailing: (0, s.jsxs)("div", {
            className: lm.ai,
            children: [
                d
                    ? (0, s.jsx)(ec.Lp, {
                          color: h.A.unsafe_rawColors.BRAND_260.css,
                          text: eC.intl.string(eC.t.y2b7CA),
                          className: lm.Ad,
                      })
                    : (0, s.jsx)("img", {
                          src: (0, lo.n)("server_products/storefront/money.gif"),
                          className: lm.TG,
                          alt: "",
                      }),
                n &&
                    (0, s.jsx)(ey.D, {
                        className: lm.b,
                        onClick: function (e) {
                            e.stopPropagation(),
                                (0, nQ.Dr)(eo.M.SERVER_SHOP_PHANTOM_PREVIEW),
                                lh.default.track(Y.HAw.GUILD_SHOP_PREVIEW_CLICK, {
                                    ...(0, la.H$)(t),
                                    action_taken: lA.hN.DISMISS_CHANNEL_ROW,
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
function lf(e) {
    let { guild: t, selected: l } = e;
    function i() {
        lr.w.set(lA.bJ, "true"), (0, eN.pX)(Y.BVt.CHANNEL(t.id, e_.VV.GUILD_SHOP));
    }
    return (0, ld.P)(t)
        ? (0, s.jsx)(lg, { guildId: t.id, selected: l, handleClick: i })
        : (0, s.jsx)(ef.G, {
              id: `shop-${t.id}`,
              renderIcon: (e) => (0, s.jsx)(lc.h, { width: 20, height: 20, className: e }),
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
var lp = n(308528),
    lC = n(262763),
    lE = n(499211),
    lx = n(406704),
    lN = n(747926),
    l_ = n(977997),
    lS = n(807632),
    lI = n(37411);
function lb(e) {
    let { thread: t, tabIndex: n } = e,
        l = (0, lS.YG)(t),
        i = (0, lS.IO)(t),
        r = (0, lx._M)(t);
    return l && i && r ? (0, s.jsx)(lG, { thread: t, tabIndex: n }) : null;
}
function lG(e) {
    let { thread: t, tabIndex: n } = e,
        l = (0, u.bG)([l_.A], () => l_.A.isInChannel(t.id), [t.id]),
        { needSubscriptionToAccess: i } = (0, lE.A)(t.id),
        a = r.useCallback(() => {
            lC.A.handleVoiceConnect({ channel: t, connected: l, needSubscriptionToAccess: i, locked: !1 });
        }, [t, l, i]),
        o = r.useCallback(() => {
            (0, lN.JA)(t, !0, lI.H9.CHANNEL_LIST);
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
var lR = n(152007);
function lv(e) {
    return null != e && e > 0;
}
var lj = n(405018),
    ly = n(428689),
    lM = n(785574);
function lL(e) {
    let { total: t, users: n, videoLimit: l } = e;
    return (0, s.jsxs)("div", {
        className: lM.iE,
        children: [
            (0, s.jsxs)(N.E, {
                tag: "span",
                color: "text-subtle",
                variant: "text-xs/medium",
                className: ez()(lM.VV, { [lM.Ki]: l, [lM.$G]: n >= 100 }),
                children: [
                    l ? (0, s.jsx)(ly.n, { size: "md", color: "currentColor", className: lM.LB }) : null,
                    n.toString().padStart(2, "0"),
                ],
            }),
            (0, s.jsx)(N.E, {
                tag: "span",
                color: "text-subtle",
                variant: "text-xs/medium",
                className: ez()(lM.X5, { [lM.$G]: t >= 100 }),
                children: t.toString().padStart(2, "0"),
            }),
        ],
    });
}
function lT(e) {
    let { channel: t, video: n, userCount: l } = e,
        { limit: i } = (0, lj.A)(t),
        r = -1,
        a = !1;
    return (
        t.userLimit > 0 && (r = t.userLimit),
        n && i > 0 && ((a = r < 0 || i < r), (r = r > 0 ? Math.min(r, i) : i)),
        (0, s.jsx)(lL, { users: l, total: r, videoLimit: a })
    );
}
var lU = n(664841);
function lD(e) {
    let { mentionsCount: t, isMentionLowImportance: n } = e;
    return (0, s.jsx)("div", {
        className: lU.R,
        "aria-hidden": !0,
        children: (0, s.jsx)(ec.hV, {
            count: t,
            color: n ? h.A.colors.BACKGROUND_MOD_STRONG.css : h.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
        }),
    });
}
var lO = n(588224),
    lP = n(684086);
function lV(e) {
    let { thread: t, countInVoice: n, hasVideo: l, mentionCount: i, isMentionLowImportance: r } = e,
        a = n > 0 && t.userLimit > 0,
        o = lv(i);
    return a || o
        ? (0, s.jsxs)("div", {
              className: eP.yW,
              children: [
                  a ? (0, s.jsx)(lT, { userCount: n, video: l, channel: t }) : null,
                  o ? (0, s.jsx)(lD, { mentionsCount: i, isMentionLowImportance: r }) : null,
              ],
          })
        : null;
}
function lw(e) {
    let { style: t, withGuildIcon: n, inverted: l } = e,
        i = { className: ez()(lP.GI, { [lP.a7]: n }, { [lP.BJ]: l }), style: t },
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
let lH = r.memo(function (e) {
        let { thread: t, isSelectedChannel: l, isSelectedVoice: i, isLast: a, withGuildIcon: o } = e,
            c = (0, u.bG)([tA.Ay], () => tA.Ay.getVoiceStatesForChannel(t), [t]),
            h = (0, u.bG)([l_.A], () => l_.A.hasVideo(t.id)),
            {
                unread: A,
                mentionCount: m,
                isMentionLowImportance: g,
            } = (0, u.cf)([n3.Ay], () => ({
                unread: n3.Ay.hasUnread(t.id),
                mentionCount: n3.Ay.getMentionCount(t.id),
                isMentionLowImportance: n3.Ay.getIsMentionLowImportance(t.id),
            })),
            f = (0, u.bG)([lR.A], () => lR.A.isMuted(t.id)),
            p = r.useCallback(
                (e) => {
                    (0, lN.JA)(t, !e.shiftKey, lI.H9.CHANNEL_LIST);
                },
                [t],
            ),
            C = r.useCallback(() => {
                lp.A.preload(t.guild_id, t.id);
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
                m > 0
                    ? eC.intl.formatToPlainString(eC.t["ZL7+I6"], { channelName: t.name, mentionCount: m })
                    : A
                      ? eC.intl.formatToPlainString(eC.t.YlVvmc, { channelName: t.name })
                      : eC.intl.formatToPlainString(eC.t["0nZpiF"], { channelName: t.name });
        return (0, s.jsxs)("li", {
            role: _,
            className: ez()(eP.fx, { [eP.wH]: l }),
            children: [
                (0, s.jsx)(lw, { withGuildIcon: o }),
                a
                    ? null
                    : (0, s.jsx)(lw, {
                          withGuildIcon: o,
                          inverted: !0,
                          style: { transform: "rotateX(180deg) translateY(-9px)" },
                      }),
                (0, s.jsx)(tJ.vN, {
                    focusTarget: I,
                    ringTarget: I,
                    offset: { top: 2, bottom: 2, right: 4 },
                    children: (0, s.jsxs)("div", {
                        className: ez()(eP.Ki, nq.iE, nq.ZS, {
                            [nq.J1]: l,
                            [nq.F4]: !l && f,
                            [nq.V2]: !f && !l && A,
                            [nq.lY]: o,
                        }),
                        onMouseDown: C,
                        onContextMenu: E,
                        children: [
                            !A || f || l ? null : (0, s.jsx)("div", { className: ez()(nq.gy, nq.WS) }),
                            (0, s.jsx)(ey.D, {
                                ...S,
                                innerRef: I,
                                className: nq.nf,
                                onClick: p,
                                "aria-label": b,
                                focusProps: { enabled: !1 },
                                children: (0, s.jsxs)("div", {
                                    className: ez()(nq.Y5, nq.__invalid_threadMainContent),
                                    children: [
                                        (0, s.jsx)(tY.A, {
                                            className: nq.UU,
                                            "aria-hidden": !0,
                                            children: (0, s.jsx)(N.E, {
                                                variant: "text-sm/medium",
                                                color: "none",
                                                children: t.name,
                                            }),
                                        }),
                                        (0, s.jsxs)("div", {
                                            className: nq.Y_,
                                            onClick: ny.dG,
                                            onKeyDown: ny.dG,
                                            children: [
                                                (0, s.jsx)(lV, {
                                                    thread: t,
                                                    countInVoice: x,
                                                    hasVideo: h,
                                                    mentionCount: m,
                                                    isMentionLowImportance: g,
                                                }),
                                                (0, s.jsx)(lb, { thread: t, tabIndex: S.tabIndex }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                }),
                (0, s.jsx)(lO.A, {
                    channel: t,
                    collapsed: !i && 1 !== c.length,
                    collapsedMax: 6,
                    voiceStates: c,
                    isThread: !0,
                }),
            ],
        });
    }),
    lB = r.memo(function (e) {
        let { channel: t, selectedChannel: n, selectedVoiceChannelId: l, sortedThreadIds: i, withGuildIcon: r } = e,
            a = (0, t0.Ay)(t),
            { density: o } = (0, C.wR)(),
            d = (0, u.yK)([V.A], () => i.map((e) => V.A.getChannel(e)).filter(tm.Vq), [i]),
            c = (0, u.bG)([tA.Ay], () => {
                let e = d[d.length - 1];
                if (null == e) return 0;
                let t = tA.Ay.getVoiceStates(e.guild_id)[e.id];
                return null == t || 0 === t.length ? 0 : l !== e.id ? 40 : 32 * t.length + 8;
            });
        return (0, s.jsx)("li", {
            className: lP.kL,
            children: (0, s.jsxs)("ul", {
                role: "group",
                "aria-label": eC.intl.formatToPlainString(eC.t.EiyIi6, { channelName: a }),
                children: [
                    (0, s.jsx)("div", {
                        className: ez()(lP.eh, { [lP.ET]: r }),
                        style: { bottom: ("cozy" === o ? 28 : 24) + c },
                    }),
                    d.map((e, t) =>
                        (0, s.jsx)(
                            lH,
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
var lk = n(922016),
    lF = n(367513),
    lK = n(296216),
    lz = n(963027),
    lW = n(202384),
    lY = n(51758),
    lX = n(139033),
    lq = n(305866),
    lJ = n(123292),
    lZ = n(830215),
    l$ = n(315982),
    lQ = n(480900),
    l0 = n(557722),
    l1 = n(834942),
    l2 = n(287809),
    l3 = n(53516),
    l9 = n(914081),
    l6 = (((l = {})[(l.VOICE = 0)] = "VOICE"), l);
let l7 = function (e) {
    let { type: t, guildId: l, closePopout: i } = e,
        r = (0, ea.GV)(),
        a = (0, u.bG)([l1.A], () => l1.A.getCheck(l), [l]),
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
    return null == m || null == g
        ? null
        : (0, s.jsxs)(lq.l, {
              className: l9.kL,
              "aria-labelledby": r,
              children: [
                  (0, s.jsx)("img", { alt: "", className: l9.Sl, src: n(303528) }),
                  (0, s.jsxs)("div", {
                      className: l9.Qs,
                      children: [
                          (0, s.jsx)(x.D, { variant: "heading-md/semibold", id: r, children: m }),
                          (0, s.jsx)(N.E, { color: "text-default", variant: "text-sm/normal", children: g }),
                          (0, s.jsxs)("div", {
                              className: l9.UD,
                              children: [
                                  null != f
                                      ? (0, s.jsx)("div", {
                                            "data-button-hoisted-classname-wrapper": !0,
                                            className: l9.FS,
                                            children: (0, s.jsx)(tX.$, {
                                                variant: "primary",
                                                text: f,
                                                onClick: function () {
                                                    o
                                                        ? l$.R()
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
                                                                            reason: l0.d.GUILD_PHONE_REQUIRED,
                                                                            ...t,
                                                                        });
                                                                },
                                                                { modalKey: l3.V },
                                                            )
                                                          : d
                                                            ? (lZ.A.verifyResend(),
                                                              (0, lX.A)({
                                                                  title: eC.intl.string(eC.t.LykQYk),
                                                                  subtitle: eC.intl.format(eC.t.azKEPy, {
                                                                      email: l2.default.getCurrentUser()?.email,
                                                                  }),
                                                              }))
                                                            : h && null != A && (0, lQ.b)(A, l),
                                                        i();
                                                },
                                            }),
                                        })
                                      : null,
                                  o || c || d
                                      ? (0, s.jsx)(lJ.Q, {
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
var l5 = n(824865),
    l4 = n(378570),
    l8 = n(790535),
    ie = n(113783),
    it = n(96566),
    il = n(280450),
    ii = n(312006),
    is = n(505543),
    ir = n(994500),
    ia = n(685399),
    io = n(475889),
    id = n(693879),
    ic = n(435470),
    iu = n(35275),
    ih = n(138383);
function iA(e) {
    let { locked: t } = e;
    return (0, s.jsx)("div", {
        className: ez()(eP.Xs, ih.U),
        children: (0, s.jsx)(iu.A, {
            className: eP.gE,
            color: t ? h.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css : void 0,
        }),
    });
}
var im = n(695633),
    ig = n(669715),
    ip = n(769015),
    iC = n(364132);
function iE(e) {
    let { className: t, embeddedApps: n, muted: l } = e;
    if (n.length <= 0) return null;
    {
        if (1 === n.length)
            return (0, s.jsx)("div", {
                className: ez()(iC.kL, t, l && iC.F4),
                children: (0, s.jsx)(ip.A, { game: n[0].application, className: iC.wK }),
            });
        let e = n.length - 1;
        return (0, s.jsxs)("div", {
            className: ez()(iC.kL, t, l && iC.F4),
            children: [
                (0, s.jsx)(ip.A, { game: n[0].application, className: iC.wK }),
                2 === n.length
                    ? (0, s.jsx)(ip.A, { game: n[1].application, className: iC.wK })
                    : (0, s.jsx)(N.E, {
                          className: iC.ju,
                          variant: "text-xs/bold",
                          color: "interactive-text-active",
                          children: `+${e}`,
                      }),
            ],
        });
    }
}
function ix(e) {
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
        g = (0, u.bG)([n3.Ay], () => n3.Ay.getMentionCount(t.id)),
        f = (0, u.bG)([n3.Ay], () => n3.Ay.getIsMentionLowImportance(t.id)),
        p = (0, ia.Ay)(t),
        C = (0, u.bG)([k.A], () => !k.A.can(Y.xBc.CONNECT, t)),
        E = (0, io.H)(t),
        x = (0, u.bG)([l_.A], () => l_.A.hasVideo(t.id)),
        _ = (0, it.qT)(t.id) && t.isGuildStageVoice(),
        S = (function (e) {
            let { channel: t, locked: n, video: l, selected: i } = e;
            return (
                (function (e) {
                    let { channel: t, video: n, considerMaxStageVoiceUserLimit: l = !0 } = e,
                        { limit: i } = (0, lj.A)(t),
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
        I = (0, u.bG)([im.A], () => im.A.getNewThreadCount(t.guild_id, t.id)),
        b = (0, ic.ed)(t.guild_id, t.id),
        G = (0, u.bG)([B.A], () => B.A.getGuild(t.guild_id)?.features.has(Y.GuildFeatures.COMMUNITY) ?? !1);
    if (lv(g)) return (0, s.jsx)(lD, { mentionsCount: g, isMentionLowImportance: f });
    if (o) return (0, s.jsx)(iA, { locked: d });
    if (c)
        return (0, s.jsx)(ec.Lp, { text: eC.intl.string(eC.t.y2b7CA), color: h.A.colors.BADGE_BACKGROUND_BRAND.css });
    if (!A && m === nM.e.ALL_MESSAGES && t.isForumLikeChannel() && null != I && I > 0)
        return (0, s.jsx)(N.E, {
            variant: "text-xs/semibold",
            color: "text-brand",
            children: eC.intl.format(eC.t.GkAbqY, { count: (0, ec.Gu)(I) }),
        });
    if (!A && t.isForumLikeChannel() && null != b && b > 0)
        return (0, s.jsx)(N.E, { variant: "text-xs/semibold", color: "text-muted", children: (0, ec.Gu)(b) });
    let R = i?.length ?? 0;
    return null != r && r && S
        ? (0, s.jsx)(lT, { userCount: R, video: x || _, channel: t })
        : l && (0, ig.t)(i) && G
          ? (0, s.jsx)(ec.Lp, { text: eC.intl.string(eC.t.dI3q4h), color: h.A.unsafe_rawColors.RED_400.css })
          : null != E
            ? (0, s.jsx)(id.z, { textColor: "text-feedback-positive", entry: { start: E } })
            : null != a && a && p.length > 0
              ? (0, s.jsx)(iE, { embeddedApps: p, muted: A })
              : null;
}
var iN = n(182222);
class i_ extends nj {
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
        return (0, nc.Pd)(e, l_.A, B.A);
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
        null != s && (0, lY.V)(s) && (0, lW.Ze)(s),
            l && this.setState({ shouldShowGuildVerificationPopout: !0 }),
            t || n || e.isRoleSubscriptionTemplatePreviewChannel() || (0, l8.av)(e),
            __OVERLAY__ || (0, l4.iN)(e.id, i ? { source: l5.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
    };
    handleClickChat = () => {
        let { channel: e, locked: t, isSuggestedSection: n } = this.props;
        __OVERLAY__ || t || (0, l4.iN)(e.id, n ? { source: l5.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
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
        return (0, s.jsx)(lO.A, { channel: e, voiceStates: l, collapsed: t, tabIndex: n, numAudience: i });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        if (t)
            return (0, s.jsx)(l7, {
                type: l6.VOICE,
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
                        lF.A.updateChatOpen(e.id, !0), this.handleClickChat();
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
                unread: m,
                resolvedUnreadSetting: g,
                mentionCount: f,
                isFavoriteSuggestion: p,
            } = this.props,
            { shouldShowGuildVerificationPopout: C } = this.state,
            E = (0, s.jsxs)("li", {
                className: ez()(this.getModeClass(), { [eP.r9]: this.isDisabled() }),
                "data-dnd-name": (0, t0.m1)(e, l2.default, ir.A),
                children: [
                    (0, s.jsx)(lk.Y, {
                        targetElementRef: this.channelItemRef,
                        position: "right",
                        renderPopout: this.renderPopout,
                        spacing: 17,
                        onRequestClose: this.closeGuildVerificationPopout,
                        shouldShow: C,
                        children: () =>
                            (0, s.jsx)(ej.m, {
                                text: this.getTooltipText(),
                                children: (0, s.jsxs)(ny.Ay, {
                                    ref: this.channelItemRef,
                                    className: eP.Ki,
                                    iconClassName: ez()({ [iN.G]: null != u }),
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
                                    "aria-label": (0, lz.Ay)({
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
let iS = el((0, lK.F)(i_));
function iI(e) {
    var t;
    let n,
        l,
        { guild: i, channel: r, disableSorting: a, isFavoriteCategory: o, collapsed: d, voiceStates: c } = e,
        h = (0, u.cf)([n3.Ay], () => ({ unread: n3.Ay.hasUnread(r.id), mentionCount: n3.Ay.getMentionCount(r.id) })),
        A = (0, u.bG)([K.Ay], () => K.Ay.resolveUnreadSetting(r)),
        m = (0, u.cf)([V.A, l1.A, k.A], () => {
            let e = V.A.getChannel(r.parent_id),
                t = l1.A.getCheck(r.guild_id);
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
        g = (0, u.bG)([P.A], () => P.A.isCollapsed(r.parent_id)),
        f =
            ((t = r.id),
            (n = (0, is.A)(t)),
            (l = (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return (0, u.cf)([ii.Ay, il.default], () => {
                    let n = il.default.getId();
                    return ii.Ay.getPermissionsForUser(n, e, t);
                }, [e, t]);
            })(t, !0).moderator),
            !n && l ? 1 : 0),
        p = (0, u.bG)([nN.A], () => nN.A.getStageInstanceByChannel(r.id), [r.id]),
        C = (0, ie.zy)(r.id, tC.ip.AUDIENCE),
        { isSubscriptionGated: E, needSubscriptionToAccess: x } = (0, lE.A)(r.id),
        N = (0, u.bG)([K.Ay], () => K.Ay.isFavorite(i.id, r.id)),
        _ = (0, it.xn)(r.id),
        S = ix({
            channel: r,
            isChannelSelected: !1,
            isChannelCollapsed: d,
            voiceStates: c,
            isSubscriptionGated: E,
            needSubscriptionToAccess: x,
            enableConnectedUserLimit: _ || (r.userLimit > 0 && r.userLimit < Y.RCc),
        }),
        I = e.connected && null == S;
    return (0, s.jsx)(iS, {
        categoryCollapsed: g,
        connectAction: f,
        numAudience: C,
        stageInstance: p,
        isSubscriptionGated: E,
        needSubscriptionToAccess: x,
        ...h,
        ...m,
        ...e,
        isFavoriteSuggestion: o && !N,
        forceShowButtons: I,
        channelInfo: S,
        resolvedUnreadSetting: A,
    });
}
function ib(e, t) {
    let n = t.getGuildId();
    if (null == n) throw Error("TextChannel, preloadChannel: Channel does not have a guildId");
    lp.A.preload(n, t.id);
}
let iG = el(
        class extends nj {
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
                        "data-dnd-name": (0, t0.m1)(e, l2.default, ir.A),
                        children: (0, s.jsxs)(ny.Ay, {
                            className: eP.Ki,
                            channel: e,
                            selected: t,
                            onClick: this.handleClick,
                            onMouseDown: ib,
                            onContextMenu: this.handleContextMenu,
                            connectDragPreview: r ? i : null,
                            "aria-label": (0, lz.Ay)({ channel: e }),
                            resolvedUnreadSetting: nM.e.ONLY_MENTIONS,
                            children: [this.renderInviteButton(), this.renderEditButton()],
                        }),
                    });
                return r ? n(l(a)) : a;
            }
        },
    ),
    iR = r.memo(function (e) {
        let { channel: t, guild: n, disableSorting: l } = e,
            i = (0, u.cf)([V.A, k.A], () => {
                let e = V.A.getChannel(t.parent_id);
                return {
                    canManageChannel: k.A.can(Y.xBc.MANAGE_CHANNELS, t),
                    canReorderChannel:
                        !0 !== l && null != e ? k.A.can(Y.xBc.MANAGE_CHANNELS, e) : k.A.can(Y.xBc.MANAGE_CHANNELS, n),
                };
            });
        return (0, s.jsx)(iG, { ...i, ...e });
    });
var iv = n(172218),
    ij = n(811024),
    iy = n(323073);
function iM(e) {
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
var iL = n(414808),
    iT = n(302005),
    iU = n(696451),
    iD = n(763827),
    iO = n(56059),
    iP = n(163328),
    iV = n(778712),
    iw = n(730134),
    iH = n(707539),
    iB = n(486020),
    ik = n(49741);
function iF(e) {
    let { channel: t } = e,
        l = (0, u.yK)([im.A, n3.Ay, k.A], () => {
            let e = im.A.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
            return o()(im.A.getActiveJoinedThreadsForParent(t.guild_id, t.id))
                .values()
                .map((e) => e.channel)
                .concat(o().values(im.A.getActiveUnjoinedThreadsForParent(t.guild_id, t.id)))
                .filter((t) => !(t.id in e) && k.A.can(Y.xBc.VIEW_CHANNEL, t))
                .sort((e, t) => {
                    let n = n3.Ay.lastMessageId(e.id),
                        l = n3.Ay.lastMessageId(t.id);
                    return tf.default.compare(n, l);
                })
                .reverse()
                .value();
        }),
        i = t.isForumLikeChannel() ? 5 : 3,
        a = t.isForumLikeChannel() ? iO.b : iP.y;
    return (
        r.useEffect(() => {
            (0, iH.TE)();
        }, []),
        (0, s.jsxs)("div", {
            className: ik.SW,
            children: [
                (0, s.jsx)(N.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: ik.DD,
                    children: t.isForumLikeChannel() ? eC.intl.string(eC.t.ioVdO2) : eC.intl.string(eC.t.VNYs2v),
                }),
                (0, s.jsxs)("div", {
                    className: ik.p_,
                    children: [
                        l
                            .slice(0, t.isForumLikeChannel() ? l.length : i)
                            .map((e) => (0, s.jsx)(iK, { thread: e }, e.id))
                            .filter((e) => r.isValidElement(e))
                            .slice(0, i),
                        (0, s.jsxs)(ey.D, {
                            className: ik.nM,
                            onClick: function () {
                                t.isForumLikeChannel()
                                    ? (0, l4.iN)(t.id)
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
                                    className: ik.R4,
                                    children: (0, s.jsx)(a, { size: "custom", className: ik.Kk }),
                                }),
                                (0, s.jsx)("div", {
                                    className: ik.Pf,
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
function iK(e) {
    let { thread: t } = e,
        n = (0, u.bG)([l2.default], () => l2.default.getUser(t.ownerId)),
        l = (0, iH.JO)(t);
    return (0, s.jsxs)(ey.D, {
        className: ik.nM,
        onClick: function (e) {
            (0, lN.JA)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, lI.H9.POPOUT);
        },
        children: [
            (0, s.jsx)("div", {
                className: ik.R4,
                children:
                    null == n
                        ? (0, s.jsx)("img", {
                              className: ik.my,
                              src: iB.Ay.getDefaultAvatarURL(void 0, void 0),
                              alt: "",
                          })
                        : (0, s.jsx)(iw.A, { className: ik.my, user: n, size: iV._3.SIZE_16 }),
            }),
            (0, s.jsxs)("div", {
                className: ik.Pf,
                children: [
                    (0, s.jsx)(N.E, { className: ik.UU, variant: "text-sm/normal", color: "none", children: t.name }),
                    (0, s.jsx)(N.E, { variant: "text-sm/normal", color: "text-muted", children: "\u2022" }),
                    (0, s.jsx)(N.E, {
                        className: ik.vE,
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: (0, iH.aK)(l),
                    }),
                ],
            }),
        ],
    });
}
var iz = n(364522),
    iW = n(302959),
    iY = n(35903),
    iX = n(970928),
    iq = n(427262),
    iJ = n(989628);
let iZ = na.DN.SIZE_24;
function i$(e) {
    let { activity: t, embeddedApp: n } = e,
        l = t?.assets,
        i = t?.application_id;
    if (null == l || (null == l.large_image && null == l.small_image)) {
        let e = iB.Ay.getApplicationIconURL({ id: n.application.id, icon: n.application.icon }),
            t = n.application.name;
        return (0, s.jsx)(ej.m, {
            text: t,
            position: "top",
            asContainer: !0,
            children: (0, s.jsx)("img", { alt: t, src: e, className: iJ.P3 }),
        });
    }
    let r = l.large_image ?? l.small_image;
    return null != r
        ? (0, s.jsx)("img", { alt: l.large_text ?? "", src: (0, iX.uD)(i, r, [128, 128]), className: iJ.P3 })
        : null;
}
function iQ(e) {
    let { activity: t, embeddedApp: n, channel: l } = e,
        i = Array.from(n.embeddedActivity.userIds),
        r = (0, u.yK)([l2.default], () => i.map((e) => l2.default.getUser(e)).filter(tm.Vq));
    return (0, s.jsx)("div", {
        className: iJ.ec,
        children: (0, s.jsxs)("div", {
            className: iJ.Wh,
            children: [
                (0, s.jsx)(i$, { activity: t, embeddedApp: n }),
                (0, s.jsxs)("div", {
                    className: iJ.X0,
                    children: [
                        (0, s.jsx)(x.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            className: iJ.wx,
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
                            (0, s.jsx)(na.Ay, {
                                className: iJ.TN,
                                guildId: l.guild_id,
                                users: r,
                                size: iZ,
                                max: 7,
                                renderUser: function (e) {
                                    if (null == e || e === na.mt) return null;
                                    let t = iq.Ay.getName(e);
                                    return (0, s.jsx)(
                                        ej.m,
                                        {
                                            asContainer: !0,
                                            text: t,
                                            position: "bottom",
                                            children: (0, s.jsx)("img", {
                                                src: e.getAvatarURL(l.guild_id, iZ),
                                                alt: t,
                                                className: iJ.my,
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
var i0 = n(237913);
function i1(e) {
    let { channel: t, presenceActivity: n, embeddedApp: l, onAction: i } = e,
        r = Array.from(l.embeddedActivity.userIds),
        a = (0, u.bG)([l2.default], () => l2.default.getUser(r[0]));
    return null == a
        ? null
        : (0, s.jsxs)("div", {
              className: i0.Eb,
              children: [
                  (0, s.jsx)("div", {
                      className: i0.Il,
                      children: (0, s.jsx)(iQ, { activity: n, embeddedApp: l, channel: t }),
                  }),
                  (0, s.jsx)("div", {
                      className: i0.M4,
                      children: (0, s.jsx)(iY.A, {
                          type: iW.M.VOICE_CHANNEL,
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
var i2 = n(713654),
    i3 = n(980248);
function i9(e) {
    let { channel: t } = e,
        n = (0, u.bG)([B.A], () => B.A.getGuild(t.guild_id)),
        l = (0, t0.Ay)(t),
        i = (0, i2.gU)(t, n);
    return null == i
        ? null
        : (0, s.jsxs)("div", {
              className: i3.hY,
              children: [
                  (0, s.jsx)(i, { className: i3.p }),
                  (0, s.jsx)(N.E, {
                      variant: "text-md/semibold",
                      color: "interactive-text-default",
                      className: i3.HA,
                      children: l,
                  }),
              ],
          });
}
var i6 = n(565449);
function i7(e) {
    let { channel: t, onAction: n } = e,
        l = (0, ia.Ay)(t),
        i = Array.from((0, ia.Rz)(l).values());
    return 0 === i.length
        ? null
        : (0, s.jsxs)(iz.Ip, {
              className: i6.kL,
              children: [
                  (0, s.jsx)("div", { className: i6.oT, children: (0, s.jsx)(i9, { channel: t }) }),
                  (0, s.jsx)("div", { className: i6.zN }),
                  i.map((e, l) =>
                      (0, s.jsx)(
                          i1,
                          { embeddedApp: e, presenceActivity: e.presenceActivity ?? void 0, channel: t, onAction: n },
                          l,
                      ),
                  ),
              ],
          });
}
class i5 extends nj {
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
        lp.A.preload(t ?? Y.ME, e.id);
    };
    renderPopout = (e) => {
        let { channel: t, sorting: n, embeddedApps: l, channelIsContentGated: i } = this.props,
            { shouldShowActivities: r } = this.state;
        return t.isModeratorReportChannel() || i
            ? null
            : null != l && l.length > 0 && r && !n
              ? (0, s.jsx)(i7, { onAction: this.handleActivitiesPopoutClose, channel: t })
              : (0, s.jsx)(iF, { ...e, channel: this.props.channel });
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
            let l = l2.default.getUser(t.getRecipientId());
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
                isFavoriteSuggestion: m,
                subtitle: g,
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
            R = iM(g),
            v = (0, s.jsxs)("li", {
                className: ez()(this.getClassName(), { [eP.r9]: this.isDisabled(), [eP.wH]: n }),
                "data-dnd-name": (0, t0.m1)(e, l2.default, ir.A),
                onMouseEnter: b || G ? this.handleMouseEnter : void 0,
                onMouseLeave: b || G ? this.handleMouseLeave : void 0,
                children: [
                    (0, s.jsx)(lk.Y, {
                        targetElementRef: I,
                        position: "right",
                        renderPopout: this.renderPopout,
                        onRequestClose: this.handleClosePopout,
                        spacing: 17,
                        shouldShow: (b && this.state.shouldShowThreadsPopout) || (G && this.state.shouldShowActivities),
                        children: () =>
                            (0, s.jsxs)(ny.Ay, {
                                ref: this.setChannelItemRef,
                                className: eP.Ki,
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
                                channelTypeOverride: f ? Y.rbe.GUILD_TEXT : void 0,
                                resolvedUnreadSetting: C,
                                transitionExtras: S ? { source: l5.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
                                "aria-label": (0, lz.Ay)({
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
                    x && (0, s.jsx)(iL.A, { targetElementRef: I, markMenuItemPopoverAsDismissed: N }),
                ],
            });
        return h ? d(c(v)) : v;
    }
}
let i4 = el(i5);
function i8(e) {
    let { channel: t, guild: n, disableSorting: l, isFavoriteCategory: i, muted: a, selected: o } = e,
        { hasActiveThreads: d, hasMoreActiveThreads: c } = (0, lx.NR)(t),
        h = (0, u.cf)([n3.Ay], () => ({
            unread: n3.Ay.hasUnread(t.id),
            ackMessageId: n3.Ay.ackMessageId(t.id),
            isLowImportanceMention: n3.Ay.getIsMentionLowImportance(t.id),
        })),
        A = (0, u.bG)([K.Ay], () => K.Ay.resolveUnreadSetting(t)),
        m = (0, u.cf)([V.A, k.A], () => {
            let e = V.A.getChannel(t.parent_id);
            return {
                canManageChannel: k.A.can(Y.xBc.MANAGE_CHANNELS, t),
                canReorderChannel:
                    !0 !== l &&
                    ((0, U.ai)(n.id) ||
                        (null != e ? k.A.can(Y.xBc.MANAGE_CHANNELS, e) : k.A.can(Y.xBc.MANAGE_CHANNELS, n))),
            };
        }),
        g = (0, u.bG)([n2.A], () => n2.A.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: f, isSubscriptionGated: p } = (0, lE.A)(t.id),
        C = (0, u.bG)([K.Ay], () => K.Ay.isFavorite(n.id, t.id)),
        E = (0, iy.ni)(t),
        x = (0, ij.Gp)(t.id),
        N = ix({
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
        _ = (0, ia.Ay)(t),
        [S, I] = r.useState(!1),
        b = (0, iv.K)(
            r.useCallback((e) => {
                I(e);
            }, []),
        ),
        { showMenuItemPopover: G, markMenuItemPopoverAsDismissed: R } = (0, iT.z)({
            location: "TextChannel",
            isChannelSelected: o,
            isTargetInViewport: S,
            channelType: t.type,
            isPopoverAllowed: !(0, U.ai)(n.id),
        });
    return (0, u.bG)([iD.A, iU.Ay], () => iD.A.getChannelId() !== t.id && iU.Ay.isCurrentUserGuest(t.getGuildId()))
        ? null
        : (0, s.jsx)(i4, {
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
var se = n(900797),
    st = n(636585),
    sn = n(531685),
    sl =
        (((i = {}).HIDDEN = "hidden"),
        (i.UNREAD = "unread"),
        (i.MENTIONS = "mentions"),
        (i.VOICE_CHANNELS = "voice-channels"),
        i);
let si = { mode: "hidden", mentionCount: 0, targetChannelId: null },
    ss = { topBar: si, bottomBar: si },
    sr = {},
    sa = {};
function so(e) {
    let t = V.A.getChannel(e);
    return (
        !(null == t || null == t.getGuildId() || t.isGuildVocal()) &&
        !(t.isThread() ? lR.A.isMuted(t.id) : K.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, tu.Y)(t)
    );
}
function sd(e) {
    let t = V.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let l = K.Ay.isGuildCollapsed(n),
        i = K.Ay.isChannelMuted(n, t.id);
    return (!l || !i) && n3.Ay.getMentionCount(e) > 0;
}
function sc(e) {
    return (
        !K.Ay.isChannelMuted(e.guild_id, e.id) &&
        (e.isGuildStageVoice()
            ? tp.A.getMutableParticipants(e.id, tC.ip.SPEAKER).length > 0
            : tA.Ay.getVoiceStatesForChannel(e).length > 0)
    );
}
function su(e) {
    let { guildChannels: t } = tb.A.getGuildWithoutChangingGuildActionRows(e),
        n = t.getChannels(sa[e] ?? []);
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
            ((so(t.id) || o().some(t.threadIds, so)) && (d = !1),
            (sd(t.id) || o().some(t.threadIds, sd)) && (a = !1),
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
            (so(t.id) || o().some(t.threadIds, so)) && (null == i && (i = t.id), (p = !0)),
                (sd(t.id) || o().some(t.threadIds, sd)) &&
                    (null == l && (l = t.id),
                    (f += n3.Ay.getMentionCount(t.id)),
                    (f += o().sumBy(t.threadIds, n3.Ay.getMentionCount)));
        }
    if (d || a)
        for (let e = 0; e < g.length; e++) {
            let t = g[e];
            if (!d && !a) break;
            (so(t.id) || o().some(t.threadIds, so)) && (null == r && (r = t.id), (E = !0)),
                (sd(t.id) || o().some(t.threadIds, sd)) &&
                    (null == s && (s = t.id),
                    (C += n3.Ay.getMentionCount(t.id)),
                    (C += o().sumBy(t.threadIds, n3.Ay.getMentionCount)));
        }
    let x = null,
        N = null,
        _ = u?.getChannelRecords() ?? [];
    a && C > 0
        ? (x = { mode: "mentions", mentionCount: C, targetChannelId: s })
        : !c && o().some(_, sc)
          ? (x = { mode: "voice-channels", mentionCount: 0, targetChannelId: null })
          : d && E && (x = { mode: "unread", mentionCount: 0, targetChannelId: r }),
        a && f > 0
            ? (N = { mode: "mentions", mentionCount: f, targetChannelId: l })
            : d && p && (N = { mode: "unread", mentionCount: 0, targetChannelId: i });
    let S = null != N && (null == x || ("mentions" !== x.mode && "mentions" === N.mode)),
        I = null != x && ("mentions" === x.mode || !S);
    return (sr[e] = { topBar: S ? (N ?? si) : si, bottomBar: I ? (x ?? si) : si }), !0;
}
let sh = o().throttle(su, 200);
function sA(e) {
    let { guildId: t } = e,
        n = B.A.getGuild(t);
    return null != n && !!n.features.has(Y.GuildFeatures.COMMUNITY) && sh(t);
}
function sm(e) {
    let { id: t } = e,
        n = V.A.getChannel(t);
    if (null == n) return !1;
    let l = B.A.getGuild(n.guild_id);
    return null != l && !!l.features.has(Y.GuildFeatures.COMMUNITY) && sh(n.guild_id);
}
function sg(e) {
    let { channel: t } = e,
        n = V.A.getChannel(t.id);
    if (null == n) return !1;
    let l = B.A.getGuild(t.guild_id);
    return null != l && !!l.features.has(Y.GuildFeatures.COMMUNITY) && sh(n.guild_id);
}
function sf(e) {
    let { channelId: t } = e,
        n = V.A.getChannel(t);
    if (null == n) return !1;
    let l = B.A.getGuild(n.guild_id);
    return (
        null != l && !!l.features.has(Y.GuildFeatures.COMMUNITY) && F.A.getGuildId() === n.guild_id && sh(n.guild_id)
    );
}
function sp(e) {
    let { guildId: t } = e;
    return null != t && sh(t);
}
class sC extends u.Ay.Store {
    static displayName = "ChannelListUnreadsStore";
    initialize() {
        this.waitFor(tb.A, V.A, B.A, lR.A, n3.Ay, F.A, tA.Ay, tp.A, K.Ay);
    }
    getUnreadStateForGuildId(e) {
        return sr[e] ?? ss;
    }
}
let sE = new sC(e8.h, {
    UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
        let { guildId: t, channelIds: n } = e,
            l = B.A.getGuild(t);
        return (
            null != l &&
            !!l.features.has(Y.GuildFeatures.COMMUNITY) &&
            null != n &&
            !o().isEqual(sa[t], n) &&
            ((sa[t] = n), su(t))
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
                .filter(tm.Vq)
                .uniq()
                .forEach((e) => {
                    let t = B.A.getGuild(e);
                    null != t && t.features.has(Y.GuildFeatures.COMMUNITY) && sh(e) && (n = !0);
                }),
            n
        );
    },
    CHANNEL_ACK: sf,
    CHANNEL_DELETE: sg,
    CHANNEL_LOCAL_ACK: sf,
    MESSAGE_ACK: sf,
    MESSAGE_CREATE: sf,
    MESSAGE_DELETE_BULK: sf,
    MESSAGE_DELETE: sf,
    PASSIVE_UPDATE_V2: function (e) {
        let t = B.A.getGuild(e.guildId);
        return !!(e.channels.length > 0 && null != t && t.features.has(Y.GuildFeatures.COMMUNITY)) && sh(e.guildId);
    },
    RESORT_THREADS: sf,
    THREAD_CREATE: sg,
    THREAD_DELETE: sg,
    THREAD_LIST_SYNC: sA,
    THREAD_MEMBER_UPDATE: sm,
    THREAD_MEMBERS_UPDATE: sm,
    THREAD_UPDATE: sg,
    BULK_CLEAR_RECENTS: sA,
    CATEGORY_COLLAPSE_ALL: sA,
    CATEGORY_EXPAND_ALL: sA,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = F.A.getGuildId();
        if (null == n || !new Set(t.map((e) => e.guildId)).has(n)) return !1;
        let l = sr[n];
        return null != l && "voice-channels" === l.bottomBar.mode && sh(n);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: sp,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: sp,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        for (let e of t) null != e.guild_id && sh(e.guild_id);
    },
    USER_GUILD_SETTINGS_GUILD_UPDATE: sp,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: sp,
});
var sx = n(168799);
let sN = { friction: 30, tension: 300 };
function s_(e) {
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
        d = (0, nc.fK)({ channels: o, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: i });
    return (0, s.jsxs)(ey.D, {
        className: ez()(sx.M0, sx.OF),
        onClick: a,
        children: [
            (0, s.jsx)(S.H, { size: "custom", className: sx.Gs, width: 14, height: 14, color: "currentColor" }),
            (0, s.jsx)(N.E, {
                variant: "text-xs/semibold",
                className: sx.pM,
                children: eC.intl.format(eC.t["fDlr+F"], { count: d.length }),
            }),
            (0, s.jsx)(st.A, {
                guildId: t.id,
                className: sx.J$,
                users: d.slice(0, 4),
                renderMoreUsers: () => null,
                max: 4,
                size: iV._3.SIZE_16,
            }),
        ],
    });
}
function sS(e) {
    let { position: t, guildChannels: n, guildChannelsVersion: l, jumpToVoiceChannels: i, jumpToChannel: a } = e,
        { bottomBar: o, topBar: d } = (0, u.cf)([sE], () => sE.getUnreadStateForGuildId(n.id)),
        c = (0, u.bG)([sn.A], () => sn.A.isFocused()),
        { mode: h, mentionCount: A, targetChannelId: m } = "bottom" === t ? o : d,
        g = h === sl.HIDDEN,
        f = (0, e7.z)(
            {
                to: { transform: g ? ("bottom" === t ? "translateY(180%)" : "translateY(-180%)") : "translateY(0%)" },
                config: sN,
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
        className: ez()(sx.kL, { [sx.Mn]: "top" === t, [sx.sQ]: "bottom" === t }),
        children: (0, s.jsx)(e6.animated.div, {
            className: sx.pK,
            style: f,
            "aria-hidden": g,
            children: (function () {
                switch (h) {
                    case sl.HIDDEN:
                        return (0, s.jsx)("div", { className: ez()(sx.M0, sx.Te) });
                    case sl.UNREAD:
                        return (0, s.jsxs)(ey.D, {
                            className: sx.M0,
                            onClick: p,
                            children: [
                                "bottom" === t
                                    ? (0, s.jsx)(tZ.a, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: sx.z_,
                                          height: 14,
                                          width: 14,
                                      })
                                    : (0, s.jsx)(se.t, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: sx.z_,
                                          height: 14,
                                          width: 14,
                                      }),
                                (0, s.jsx)(N.E, {
                                    variant: "text-xs/semibold",
                                    color: "interactive-text-default",
                                    className: sx.pM,
                                    children: eC.intl.string(eC.t.FCRiT3),
                                }),
                            ],
                        });
                    case sl.MENTIONS:
                        return (0, s.jsx)(ey.D, {
                            className: ez()(sx.M0, sx.vU),
                            onClick: p,
                            children: (0, s.jsx)(N.E, {
                                variant: "text-xs/semibold",
                                color: "badge-text-brand",
                                className: sx.pM,
                                children: eC.intl.format(eC.t.EQcLyp, { count: A }),
                            }),
                        });
                    case sl.VOICE_CHANNELS:
                        return (0, s.jsx)(s_, { jumpToVoiceChannels: i, guildChannels: n, guildChannelsVersion: l });
                    default:
                        return;
                }
            })(),
        }),
    });
}
var sI = n(310953),
    sb = n(173860);
function sG(e) {
    let t = V.A.getChannel(e);
    return (
        null != t &&
        null != t.getGuildId() &&
        !(t.isThread() ? lR.A.isMuted(t.id) : K.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, tu.Y)(t)
    );
}
function sR(e) {
    let t = V.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let l = K.Ay.isGuildCollapsed(n),
        i = K.Ay.isChannelMuted(n, t.id);
    return (!l || !i) && n3.Ay.getMentionCount(e) > 0;
}
let sv = r.forwardRef(function (e, t) {
    let { guildId: n, guildChannels: l, guildChannelsVersion: i, ...r } = e,
        a = (0, sI.W)(n, l, i, { withVoiceChannels: !1 }, { ignoreRecents: !0 }),
        o = (0, u.bG)([sn.A], () => sn.A.isFocused());
    return (0, s.jsx)(sb.A, { ref: t, ...r, isUnread: sG, isMentioned: sR, items: a, animate: o });
});
var sj = n(81466);
function sy(e) {
    let { guild: t, selected: l } = e,
        { hasUnread: i, mentionCount: r } = (0, u.cf)(
            [n3.Ay],
            () => ({
                hasUnread: n3.Ay.hasUnread(t.id, nM.P.GUILD_EVENT),
                mentionCount: n3.Ay.getMentionCount(t.id, nM.P.GUILD_EVENT),
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
            (0, nQ.Dr)(eo.M.GUILD_HEADER_EVENT_UPSELL);
    }
    let d = (0, tV.Ay)(t.id),
        c = d.length > 0 ? eC.intl.formatToPlainString(eC.t.IBdqSu, { number: d.length }) : eC.intl.string(eC.t.tlopTM);
    return (0, s.jsx)(ef.G, {
        id: `upcoming-events-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(sj.C, { size: "md", color: "currentColor", className: e }),
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
        trailing: !a && r > 0 ? (0, s.jsx)(ec.hV, { className: nq.Do, disableColor: !0, count: r }) : null,
    });
}
var sM = n(152367),
    sL = n(818085);
function sT(e) {
    let { guild: t, selected: n } = e;
    return (0, s.jsx)(ef.G, {
        id: `vibegrations-${t.id}`,
        renderIcon: (e) =>
            (0, s.jsx)(sM.D, { size: "custom", color: "currentColor", width: 20, height: 20, className: e }),
        text: eC.intl.string(sL.default.Xmvb23),
        selected: n,
        onClick: () => (0, eN.pX)(Y.BVt.CHANNEL(t.id, e_.VV.VIBEGRATIONS)),
    });
}
var sU = n(845056),
    sD = n(765379),
    sO = n(271683),
    sP = n(725613),
    sV = n(857253),
    sw = n(360729),
    sH = n(22231),
    sB = n(241326),
    sk = n(750943),
    sF = n(743674),
    sK = n(888697),
    sz = n(26741),
    sW = n(493819),
    sY = n(722884),
    sX = n(844045),
    sq = n(52102);
function sJ(e) {
    let { channel: t, imageUrl: l, animatedUrl: i, bannerHash: a, canModifyHangout: o } = e,
        d = (0, sF.S)(l),
        c = (0, eb.je)(t),
        u = (0, sz.P9)({ guildId: t.guild_id, channelId: t.id, bannerHash: a }),
        h = r.useCallback(() => {
            (0, sz.J_)({ guildId: t.guild_id, channelId: t.id }), (0, sY.A)({ channel: t });
        }, [t]),
        A = r.useCallback(() => {
            (0, sz.nK)({ guildId: t.guild_id, channelId: t.id }), (0, sK.e2)(t.id);
        }, [t.guild_id, t.id]),
        m = r.useCallback(
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
        className: sq.rs,
        onContextMenu: m,
        children: [
            (0, s.jsx)("div", {
                className: sq.ZS,
                style: null != d ? { backgroundColor: d } : void 0,
                children: (0, s.jsx)(sW.A, { imageUrl: l, animatedUrl: i, className: sq.Sl }),
            }),
            o
                ? (0, s.jsxs)("div", {
                      className: sq.n_,
                      children: [
                          (0, s.jsx)(ej.m, {
                              text: eC.intl.string(sX.default.XJ4UpB),
                              children: (0, s.jsx)(ey.D, {
                                  className: sq.HF,
                                  onClick: h,
                                  children: (0, s.jsx)(sH.R, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                          (0, s.jsx)(ej.m, {
                              text: eC.intl.string(sX.default.XV4qT6),
                              children: (0, s.jsx)(ey.D, {
                                  className: sq.HF,
                                  onClick: A,
                                  children: (0, s.jsx)(sB.u, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function sZ(e) {
    let { channel: t } = e,
        n = (0, sz.dX)({ guildId: t.guild_id, channelId: t.id }),
        l = r.useCallback(() => {
            (0, sz.J_)({ guildId: t.guild_id, channelId: t.id }), (0, sY.A)({ channel: t });
        }, [t]);
    return (0, s.jsx)("div", {
        ref: n,
        className: sq._o,
        children: (0, s.jsxs)(ey.D, {
            className: sq.hH,
            onClick: l,
            children: [
                (0, s.jsx)(sk.X, { size: "xs", color: "currentColor" }),
                (0, s.jsx)(N.E, {
                    variant: "text-sm/medium",
                    color: "currentColor",
                    children: eC.intl.string(sX.default.NGcIOF),
                }),
            ],
        }),
    });
}
function s$(e) {
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
            ? (0, s.jsx)(sJ, {
                  channel: t,
                  imageUrl: c.imageUrl,
                  animatedUrl: c.animatedUrl,
                  bannerHash: c.bannerHash,
                  canModifyHangout: a,
              })
            : a
              ? (0, s.jsx)(sZ, { channel: t })
              : null
        : null;
}
var sQ = n(290863),
    s0 = n(461213),
    s1 = n(532622),
    s2 = n(882840),
    s3 = n(208971),
    s9 = n(46054),
    s6 = n(500216),
    s7 = n(742715);
function s5(e) {
    let { channel: t, connected: n, hovered: l, subtitle: i, onClick: a } = e,
        o = (0, s3.G)((0, s2.l)(t)),
        { enableHangoutWindow: d } = (0, eI.Dm)({ guildId: t.guild_id, location: "VoiceChannelStatus" }),
        c = d && (0, eb.lr)(t),
        u = null != o && o.length > 0,
        h = (0, s1.Ay)(t, !0),
        A = null != i && i.length > 0;
    if (
        (r.useEffect(() => {
            u && lh.default.track(Y.HAw.VOICE_CHANNEL_TOPIC_VIEWED, { channel_id: t.id, guild_id: t.guild_id });
        }, [u, t.id, t.guild_id]),
        null == t.guild_id)
    )
        return null;
    let m = ez()(s6.Ui, n && h ? s6.BI : null);
    return u
        ? (0, s.jsx)(ey.D, {
              className: m,
              onClick: h ? a : void 0,
              children: (0, s.jsx)(N.E, {
                  variant: "text-xs/medium",
                  className: ez()(s6.qS, s7.PT),
                  children: (0, s.jsx)(tY.A, { children: s9.A.parseVoiceChannelStatus(o, !0, { channelId: t.id }) }),
              }),
          })
        : n && h && !c && (!A || l)
          ? (0, s.jsxs)(ey.D, {
                className: m,
                onClick: a,
                children: [
                    (0, s.jsx)(N.E, {
                        variant: "text-xs/medium",
                        className: s6.qS,
                        children: eC.intl.string(eC.t.Mgpxiw),
                    }),
                    (0, s.jsx)(sH.R, { color: "currentColor", className: s6.rD, size: "xxs" }),
                ],
            })
          : A
            ? (0, s.jsx)(tY.A, { children: i })
            : null;
}
class s4 extends nj {
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
        o && lF.A.updateChatOpen(n.id, !0),
            lC.A.handleVoiceConnect({
                channel: n,
                connected: t,
                needSubscriptionToAccess: i,
                routeDirectlyToChannel: o || a,
                locked: e,
                transitionExtras: r ? { source: l5.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
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
        return (0, nc.Pd)(e, l_.A, B.A);
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
        null != t && (0, lY.V)(t) && (0, lW.Ze)(t), this.handleVoiceConnect();
    };
    handleVoiceStatusClick = (e) => {
        let { connected: t, channel: n } = this.props;
        t && (e.stopPropagation(), (0, sO.A)({ channel: n }));
    };
    renderSubtitle() {
        let { channel: e, connected: t } = this.props,
            n = iM(this.props.subtitle)?.subtitle,
            { hovered: l } = this.state;
        return (0, s.jsx)(s5, {
            onClick: this.handleVoiceStatusClick,
            channel: e,
            connected: t,
            subtitle: n,
            hovered: l,
        });
    }
    renderVoiceUsers() {
        let { channel: e, voiceStates: t, collapsed: n, withGuildIcon: l, tabIndex: i } = this.props;
        return (0, s.jsx)(lO.A, {
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
        return !(null != n && n.length > 0) || l ? null : (0, s.jsx)(s$, { channel: e, isConnected: t });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        return t
            ? (0, s.jsx)(l7, { type: l6.VOICE, guildId: e.guild_id, closePopout: this.closeGuildVerificationPopout })
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
                        lF.A.updateChatOpen(e.id, !0),
                            (0, l4.iN)(e.id, l ? { source: l5.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
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
                showTutorial: m,
                hasActiveEvent: g,
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
                "data-dnd-name": (0, t0.m1)(e, l2.default, ir.A),
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
                        children: (0, s.jsx)(lk.Y, {
                            targetElementRef: this.channelItemRef,
                            position: "right",
                            renderPopout: this.renderPopout,
                            onRequestClose: this.closeGuildVerificationPopout,
                            spacing: 17,
                            shouldShow: b,
                            children: () =>
                                (0, s.jsx)(ej.m, {
                                    text: this.getTooltipText(),
                                    children: (0, s.jsxs)(ny.Ay, {
                                        ref: this.channelItemRef,
                                        className: eP.Ki,
                                        iconClassName: ez()({ [eP.Gj]: g || x || G }),
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
                                        "aria-label": (0, lz.Ay)({
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
            m &&
                (R = (0, s.jsx)(nn.A, {
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
let s8 = el((0, lK.F)(s4));
function re(e) {
    let {
            guild: t,
            channel: n,
            disableSorting: l,
            isFavoriteCategory: i,
            selected: r,
            collapsed: a,
            voiceStates: o,
        } = e,
        d = (0, u.cf)([n3.Ay], () => ({ unread: n3.Ay.hasUnread(n.id), mentionCount: n3.Ay.getMentionCount(n.id) })),
        c = (0, u.bG)([K.Ay], () => K.Ay.resolveUnreadSetting(n)),
        h = (0, u.cf)([V.A, l1.A, k.A], () => {
            let e = V.A.getChannel(n.parent_id),
                i = l1.A.getCheck(n.guild_id);
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
        A = (0, u.bG)([l_.A], () => l_.A.hasVideo(n.id)),
        { enabled: m } = sw.A.useExperiment({ guildId: t.id, location: "VoiceChannel" }),
        g = (0, ia.Ay)(n),
        f = (0, u.yK)([s0.A, sQ.A, il.default], () => {
            if (null == o || 0 === o.length) return [];
            let e = il.default.getId(),
                t = [];
            for (let { user: l } of o)
                for (let i of l.id === e ? s0.A.getActivities() : sQ.A.getActivities(l.id, n.guild_id))
                    !(0, sU.N)(i) || (0, sD.A)(i) || null == i.name || t.includes(i.name) || t.push(i.name);
            return t;
        }, [o, n.guild_id]),
        p = (0, t0.Ay)(n),
        C = (0, tV.Qs)(n.id),
        E = (0, u.bG)([sP.A], () => sP.A.getStartTime(n), [n]),
        { isSubscriptionGated: x, needSubscriptionToAccess: N } = (0, lE.A)(n.id),
        _ = (0, sV.A)(),
        S = (0, u.bG)([K.Ay], () => K.Ay.isFavorite(t.id, n.id)),
        I = e.connected || _?.channelId === n.id,
        { enableHighlight: b, enableWaveformIcon: G } = (0, no.b)(t.id, "VoiceChannel"),
        R = null != o && o.length > 0,
        v = b && R,
        j = G && R,
        y = ix({
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
    return (0, s.jsx)(s8, {
        channelName: p,
        embeddedApps: g,
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
        guildRoomsEnabled: m,
    });
}
n(131955);
var rt = n(449817);
function rn(e) {
    return (
        h.A.modules.channels.NAME_LINE_HEIGHT.resolve({ density: e }) +
        2 * h.A.space.SPACE_XXS.resolve({ density: e }) +
        2
    );
}
class rl extends r.PureComponent {
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
                    a = s.threadOffset * rn(r);
                i.scrollIntoViewRect({ start: e + a, end: e + a + rn(r), padding: n, animate: t, callback: l });
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
            let { hasDivider: d, canHaveVoiceSummary: c } = nu(n, r, t),
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
            a = rn(r);
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
            a += rn(t);
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
            nr,
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
                optInEnabled: m,
                withGuildIcon: g,
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
                    return (0, s.jsx)(n7, { guild: l, selected: a === e_.VV.GUILD_HOME }, tW.n.GUILD_HOME);
                case tW.n.GUILD_SCHEDULED_EVENTS:
                    return (0, s.jsx)(
                        sy,
                        { guild: l, selected: a === tW.n.GUILD_SCHEDULED_EVENTS },
                        tW.n.GUILD_SCHEDULED_EVENTS,
                    );
                case tW.n.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, s.jsx)(
                        ls,
                        { guild: l, selected: a === e_.VV.ROLE_SUBSCRIPTIONS },
                        tW.n.GUILD_ROLE_SUBSCRIPTIONS,
                    );
                case tW.n.GUILD_SHOP:
                    return (0, s.jsx)(lf, { guild: l, selected: a === e_.VV.GUILD_SHOP }, tW.n.GUILD_SHOP);
                case tW.n.GUILD_GAME_SHOP:
                    return (0, s.jsx)(nZ, { guild: l, selected: a === e_.VV.GAME_SHOP }, tW.n.GUILD_GAME_SHOP);
                case tW.n.GUILD_VIBEGRATIONS:
                    return (0, s.jsx)(sT, { guild: l, selected: a === e_.VV.VIBEGRATIONS }, tW.n.GUILD_VIBEGRATIONS);
                case tW.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                    return (0, s.jsx)(lt, { guild: l });
                case tW.n.CHANNELS_AND_ROLES:
                    return (0, s.jsx)(
                        n9,
                        { guild: l, selected: a === e_.VV.CHANNEL_BROWSER || a === e_.VV.CUSTOMIZE_COMMUNITY },
                        tW.n.CHANNELS_AND_ROLES,
                    );
                case tW.n.GUILD_DIRECTORY:
                    return (0, s.jsx)(
                        nL,
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
                        ll,
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
                            (0, s.jsx)(i8, {
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
                                ? (0, s.jsx)(lB, {
                                      withGuildIcon: g,
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
                    iI,
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
                    re,
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
                    N,
                );
            case Y.rbe.GUILD_STORE:
                return (0, s.jsx)(iR, { channel: x, guild: l, position: C.position, selected: a === C.id }, N);
            case Y.rbe.GUILD_CATEGORY:
                if (t !== c.voiceChannelsSectionNumber) return null;
                return (0, s.jsx)(nt, { channel: x }, `readonly-${x.id}`);
            case Y.rbe.PUBLIC_THREAD:
            case Y.rbe.PRIVATE_THREAD:
            case Y.rbe.ANNOUNCEMENT_THREAD:
                return (0, s.jsx)(
                    i8,
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
            nA,
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
                let { hasDivider: l, canHaveVoiceSummary: i } = nu(t, n, e);
                return `section-footer-${e}${l ? "-divider" : ""}${i ? "-voice-summary" : ""}`;
            })(t, n, o),
        );
    };
    renderTopUnread() {
        let { topMention: e, bottomUnread: t, bottomMention: n, isUnreadVisible: l } = this.state,
            { guildId: i, guildChannels: r, guildChannelsVersion: a } = this.props;
        return (0, s.jsx)("div", {
            className: ns.Eo,
            children: (0, s.jsx)(sv, {
                ref: this.unreadTopRef,
                textUnread: eC.intl.string(eC.t.FCRiT3),
                textMention: eC.intl.string(eC.t["8zH0LJ"]),
                hide: null == e && (l || null != t || null != n),
                className: ns.Vq,
                barClassName: ns.bu,
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
        return (0, s.jsx)(sv, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: eC.intl.string(eC.t.FCRiT3),
            textMention: eC.intl.string(eC.t["8zH0LJ"]),
            hide: null == l && i,
            className: ns.di,
            barClassName: ns.bu,
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
        return (0, s.jsx)(m.sk, {
            children: (t) =>
                (0, s.jsx)(
                    g.OZ,
                    {
                        ref: this.setListRef,
                        className: ns.XG,
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
                                      className: ns.Eo,
                                      children: (0, s.jsx)(sS, {
                                          position: "top",
                                          guildChannels: e,
                                          guildChannelsVersion: t,
                                          jumpToVoiceChannels: this.jumpToVoiceChannels,
                                          jumpToChannel: this.jumpToChannel,
                                      }),
                                  }),
                                  this.renderList(),
                                  (0, s.jsx)(sS, {
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
let ri = (e) => {
    let { guildId: t, selectedChannelId: n, selectedVoiceChannelId: l } = e,
        i = (0, u.bG)([ei.Ay], () => ei.Ay.keyboardModeEnabled),
        { analyticsLocations: a } = (0, er.Ay)(es.A.GUILD_CHANNEL_LIST),
        o = (0, u.bG)([V.A], () => V.A.getChannel(n)),
        h = (0, u.bG)([V.A], () => V.A.getChannel(l)),
        A = (0, u.bG)([F.A], () => F.A.getGuildId()),
        m = (0, O.jN)(t),
        g = r.useRef(null),
        f = r.useCallback((e, t) => {
            let n = g.current;
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
                              .filter(tm.Vq)
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
            tg.D,
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
                    (0, s.jsx)(rl, {
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
function rs(e) {
    let { guildChannels: t, shouldShowEmptyState: n } = (0, tG.D)(),
        { density: l } = (0, C.wR)();
    return n
        ? (0, s.jsx)("div", {
              className: ns.XG,
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
                                  children: eC.intl.string(rt.default["1n0TGE"]),
                              }),
                              (0, s.jsx)(N.E, {
                                  variant: "text-sm/medium",
                                  color: "text-muted",
                                  children: eC.intl.string(rt.default.Wwzrs9),
                              }),
                          ],
                      }),
                      (0, s.jsx)("div", { className: ns.ts }),
                      (0, s.jsxs)("div", {
                          className: ns.MS,
                          "aria-hidden": "true",
                          children: [
                              (0, s.jsxs)("div", {
                                  className: ns.pS,
                                  children: [
                                      (0, s.jsx)(_.N, { size: "xs", color: h.A.colors.ICON_MUTED }),
                                      (0, s.jsx)("div", { className: ns.Qs }),
                                  ],
                              }),
                              (0, s.jsxs)("div", {
                                  className: ns.pS,
                                  children: [
                                      (0, s.jsx)(S.H, { size: "xs", color: h.A.colors.ICON_MUTED }),
                                      (0, s.jsx)("div", { className: ns.iR }),
                                  ],
                              }),
                              (0, s.jsxs)("div", {
                                  className: ns.pS,
                                  children: [
                                      (0, s.jsx)(I.o, { size: "xs", color: h.A.colors.ICON_MUTED }),
                                      (0, s.jsx)("div", { className: ns.Qs }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : (0, s.jsx)(ri, { ...e, guildChannels: t, guildChannelsVersion: 0, withGuildIcon: !1, density: l });
}
function rr(e) {
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
                m = (0, tT.jY)(e.id),
                g = (0, tM.fw)(e.id),
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
                !m && d && A && null != c && c.length > 0
                    ? p.push(tW.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
                    : e.premiumProgressBarEnabled && _ > 0 && p.push(tW.n.GUILD_PREMIUM_PROGRESS_BAR),
                !C && d && p.push(tW.n.GUILD_HOME),
                i && p.push(tW.n.GUILD_SCHEDULED_EVENTS),
                !C && E && p.push(tW.n.CHANNELS_AND_ROLES),
                r && p.push(tW.n.GUILD_ROLE_SUBSCRIPTIONS),
                a && p.push(tW.n.GUILD_SHOP),
                o && p.push(tW.n.GUILD_GAME_SHOP),
                ((g && (E || x)) || (s && e.features.has(Y.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL))) &&
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
    return (0, s.jsx)(ri, { ...e, ...n, density: l });
}
