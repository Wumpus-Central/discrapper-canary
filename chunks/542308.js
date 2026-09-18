(n.d(t, { B: () => rg, i: () => rA }), n(321073));
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
    I = n(192308),
    S = n(66834),
    b = n(443063),
    G = n(999903),
    j = n(544169),
    v = n(16236),
    R = n(5180),
    y = n(770376),
    M = n(395504),
    L = n(924985),
    T = n(734057),
    U = n(769765),
    D = n(808728),
    O = n(71393),
    P = n(576705),
    V = n(967198),
    w = n(543465);
n(667532);
var H = n(95701),
    B = n(111613),
    k = n(652215);
function F(e, t) {
    return null != e && null != t && (e === t || ((0, H.tr)(e) && (0, H.tr)(t)) || ((0, H.ay)(e) && (0, H.ay)(t)));
}
function K(e, t, n, l) {
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
        if (F(e.channel.type, n)) return e;
    }
    return null;
}
function z(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null == e) return 0;
    let l = null;
    return (
        t
            .filter((t) => {
                let {
                    channel: { type: l },
                } = t;
                return null != e && (n || F(e.type, l));
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
function W(e) {
    return { referenceId: e.id, parentId: e.parent_id };
}
function Y(e, t, n, l, i) {
    if (null == e || null == n) return null;
    let { GUILD_CATEGORY: s } = k.rbe;
    if (e.type === s)
        return l === t || (l < t && e.type === n.type)
            ? W(n)
            : l > t
              ? (function (e, t, n) {
                    let { GUILD_CATEGORY: l } = k.rbe,
                        i = n[(z(t, n, !0) ?? 0) + 1],
                        s = K(-1, t.id, e.type, n);
                    return null == s || s.channel.id === e.id
                        ? null
                        : null == i || i.channel.type === l
                          ? { referenceId: s.channel.id, parentId: null }
                          : null;
                })(e, n, i)
              : null;
    if (F(e.type, n.type)) return W(n);
    if (l < t) {
        let t, l;
        if (n.type === s) {
            let t = i[(z(n, i, !0) ?? 0) - 1],
                l = K(1, n.id, e.type, i);
            if (null == t) return { referenceId: null, parentId: null };
            if (null != l) {
                if (F(t.channel.type, e.type) || (e.isGuildVocal() && (0, H.tr)(t.channel.type)))
                    return { referenceId: l.channel.id, parentId: t.channel.parent_id };
                if (t.channel.isCategory()) return { referenceId: l.channel.id, parentId: t.channel.id };
            }
            return null;
        }
        return (
            (t = i[(z(n, i, !0) ?? 0) - 1]),
            (l = K(1, n.id, e.type, i)),
            null != t || e.isGuildVocal()
                ? (0, H.tr)(e.type) && null != l && ((0, H.tr)(t.channel.type) || t.channel.isCategory())
                    ? { referenceId: l.channel.id, parentId: n.parent_id }
                    : null
                : { referenceId: null != l ? l.channel.id : null, parentId: null }
        );
    }
    if (n.type === s) {
        let t = i[(z(n, i, !0) ?? 0) + 1],
            l = K(-1, n.id, e.type, i);
        if (null != l) {
            if (null == t) return { referenceId: l.channel.id, parentId: n.id };
            if (F(t.channel.type, e.type) || ((0, H.tr)(e.type) && t.channel.isGuildVocal()))
                return { referenceId: l.channel.id, parentId: t.channel.parent_id };
            if (t.channel.isCategory()) return { referenceId: l.channel.id, parentId: n.id };
        }
        return null;
    }
    let r = i[(z(n, i, !0) ?? 0) + 1],
        a = K(-1, n.id, e.type, i);
    if (null == a) return null;
    if (e.isGuildVocal()) {
        if (null == r || r.channel.isCategory()) return { referenceId: a.channel.id, parentId: n.parent_id };
        if (r.channel.isGuildVocal()) return { referenceId: a.channel.id, parentId: r.channel.parent_id };
    }
    return e.isCategory() && (null == r || r.channel.isCategory())
        ? { referenceId: a.channel.id, parentId: null }
        : null;
}
var X = n(488926);
let q = "DRAGGABLE_GUILD_CHANNEL";
function Z(e, t) {
    if (null == e || null == t) return null;
    if (!(0, R.ai)(e)) return T.A.getChannel(t);
    let n = D.Ay.getChannels(e),
        l =
            n[D.I6].find((e) => e.channel.id === t) ??
            n[D.vM].find((e) => e.channel.id === t) ??
            n[k.rbe.GUILD_CATEGORY].find((e) => e.channel.id === t);
    return l?.channel;
}
function J(e, t) {
    if (null != e.parent_id) {
        let t = T.A.getChannel(e.parent_id);
        if (null != t) return P.A.can(k.xBc.MANAGE_CHANNELS, t);
    }
    return P.A.can(k.xBc.MANAGE_CHANNELS, t);
}
function $(e) {
    return (0, N.T)(
        q,
        {
            drop(e, t) {
                let n,
                    l = V.A.getGuildId(),
                    i = t.getItem(),
                    r = Y(Z(l, i.id), i.position, e.channel, e.position, i.channelList);
                if (null == r) return;
                let a = Z(l, i.id);
                if (null == a) return;
                let o = U.A.getCategories(l),
                    d = O.A.getGuild(l);
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
                                    : B.Ay.moveItemFromTo(t, i, s)),
                            (r = r.concat(
                                B.Ay.calculatePositionDeltas({
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
                        ((i = z(e, n)), (s = z(t, n)), (a = d(n)).unshift(o[0]));
                    }
                    if ((0, H.tr)(e.type) || e.isCategory()) {
                        let n = (0, G.A)(a.length > 0 ? a : o, l, (e) => {
                            let {
                                channel: { type: t },
                            } = e;
                            return (0, H.tr)(t);
                        });
                        ((i = z(e, n)), (s = z(t, n)), d(n));
                    }
                    if (e.isGuildVocal() || e.isCategory()) {
                        let n = (0, G.A)(a.length > 0 ? a : o, l, (e) => {
                            let { channel: t } = e;
                            return t.isGuildVocal();
                        });
                        ((i = z(e, n)), (s = z(t, n)), d(n));
                    }
                    return (
                        e.parent_id !== n &&
                            null == r.find((t) => t.id === e.id && ((t.parent_id = n), !0)) &&
                            r.push({ id: e.id, parent_id: n }),
                        r
                    );
                })(a, Z(l, r.referenceId), r.parentId, o);
                if (0 !== c.length) {
                    if ((0, R.ai)(l)) return void (0, v.zN)(c);
                    if (
                        ((c = c.filter((e) => {
                            let { id: t } = e,
                                n = T.A.getChannel(t);
                            if (null == n) return !1;
                            let l = T.A.getChannel(n.parent_id);
                            return n.type === k.rbe.GUILD_CATEGORY || null == l
                                ? P.A.can(k.xBc.MANAGE_CHANNELS, d)
                                : P.A.can(k.xBc.MANAGE_CHANNELS, l);
                        })),
                        a.parent_id !== r.parentId &&
                            c.find((e) => {
                                if (e.id !== a.id) return !1;
                                let t = T.A.getChannel(e.parent_id);
                                if (!(null != t && P.A.can(k.xBc.MANAGE_ROLES, a) && P.A.can(k.xBc.MANAGE_ROLES, t)))
                                    return !0;
                                let l = (0, b.GY)(a),
                                    i = X.r(a, t, l),
                                    s = X.r(a, T.A.getChannel(a.parent_id), l);
                                return (((null != a.parent_id || i) && (!s || i)) || (n = e), !0);
                            }),
                        null != n)
                    ) {
                        let e = T.A.getChannel(n.parent_id);
                        null != e &&
                            (0, I.openModal)((t) =>
                                (0, s.jsx)(j.default, {
                                    ...t,
                                    channel: a,
                                    category: e,
                                    onConfirm: () => {
                                        null != n && ((n.lock_permissions = !0), S.A.batchChannelUpdate(l, c));
                                    },
                                    onCancel: () => {
                                        null != n && S.A.batchChannelUpdate(l, c);
                                    },
                                }),
                            );
                    } else S.A.batchChannelUpdate(l, c);
                }
            },
            canDrop(e, t) {
                let n = t.getItem(),
                    l = T.A.getChannel(n.id);
                if (null == l) return !1;
                let i = Y(T.A.getChannel(n.id), n.position, e.channel, e.position, n.channelList);
                if (null == i) return !1;
                if ((0, R.ai)(V.A.getGuildId())) return !0;
                if (w.Ay.isFavorite(n.guildId, e.channel.id)) return !1;
                let s = O.A.getGuild(n.guildId);
                if (null == s) return !1;
                let r = T.A.getChannel(i.parentId),
                    a = T.A.getChannel(l.parent_id),
                    o = P.A.can(k.xBc.MANAGE_CHANNELS, s),
                    d = null != a ? P.A.can(k.xBc.MANAGE_CHANNELS, a) : o,
                    c = null != r ? P.A.can(k.xBc.MANAGE_CHANNELS, r) : o;
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
            q,
            {
                canDrag(e) {
                    let { channel: t } = e;
                    if ((0, R.ai)(V.A.getGuildId())) return !0;
                    let l = O.A.getGuild(t.getGuildId());
                    return (
                        null != l &&
                        ((0, M.WW)(l.id) && J(t, l)
                            ? ((0, y.A)() &&
                                  (0, I.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([n.e("57729"), n.e("24848")]).then(
                                          n.bind(n, 354643),
                                      );
                                      return (t) => (0, s.jsx)(e, { ...t });
                                  }),
                              !1)
                            : w.Ay.isFavorite(l.id, t.id) && J(t, l)
                              ? ((0, I.openModalLazy)(async () => {
                                    let { default: e } = await n.e("280545").then(n.bind(n, 933752));
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
                        r = V.A.getGuildId(),
                        a = U.A.getCategories(r);
                    return {
                        isChannelDrag: !0,
                        id: t,
                        position: s,
                        parentId: n,
                        type: i,
                        channelList: (0, G.A)(a._categories, a, (e) => {
                            let { channel: t } = e;
                            return t.type === k.rbe.GUILD_CATEGORY && null != a[t.id] && 0 === a[t.id].length
                                ? !!(0, R.ai)(r) ||
                                      (P.A.can(k.xBc.MANAGE_CHANNELS, t) && P.A.can(k.xBc.VIEW_CHANNEL, t))
                                : !L.A.isCollapsed(t.parent_id);
                        }),
                        guildId: l,
                    };
                },
            },
            (e) => ({ connectChannelDragSource: e.dragSource(), connectDragPreview: e.dragPreview() }),
        )(e),
    );
}
var Q = n(775602),
    ee = n(793574),
    et = n(688810),
    en = n(915089),
    el = n(554146),
    ei = n(866665),
    es = n(939249),
    er = n(789645),
    ea = n(812993),
    eo = n(687966),
    ed = n(131607),
    ec = n(652793),
    eu = n(976860),
    eh = n(746080),
    eA = n(49999),
    eg = n(394107),
    em = n(375708),
    ef = n(275833),
    ep = n(964306);
let eC = r.memo(function (e) {
    let { guildId: t, selected: l } = e,
        [i, a] = (0, ed.ww)([el.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        o = i === el.M.GAME_SERVER_HOSTING_NEW_BADGE,
        d = r.useCallback(() => {
            (a(eA.i.USER_DISMISS), (0, eu.pX)(k.BVt.CHANNEL(t, eh.VV.GAME_SERVERS)));
        }, [t, a]),
        c = r.useCallback(
            (e) => {
                (e.stopPropagation(),
                    (0, I.openModalLazy)(async () => {
                        let { default: e } = await n.e("726702").then(n.bind(n, 758909));
                        return (n) => (0, s.jsx)(e, { ...n, guildId: t });
                    }));
            },
            [t],
        ),
        u = (0, s.jsxs)("div", {
            className: ef.c,
            children: [
                (0, s.jsx)("div", {
                    className: ep.Xs,
                    children: (0, s.jsx)(ei.m, {
                        text: em.intl.string(em.t.fgq1gs),
                        position: "top",
                        children: (0, s.jsx)(es.D, {
                            onClick: c,
                            "aria-label": em.intl.string(em.t.fgq1gs),
                            children: (0, s.jsx)(er.P, { size: "xs", color: "currentColor", className: ep.gE }),
                        }),
                    }),
                }),
                o &&
                    (0, s.jsx)("div", {
                        className: ep.yW,
                        children: (0, s.jsx)(ea.Lp, {
                            disableColor: !0,
                            text: em.intl.string(em.t.y2b7CA),
                            className: ef.q,
                        }),
                    }),
            ],
        });
    return (0, s.jsx)(ec.G, {
        className: ep.Ki,
        id: `game-server-empty-${t}`,
        renderIcon: (e) => (0, s.jsx)(eo.GameControllerIcon, { size: "md", className: e, color: "currentColor" }),
        text: em.intl.string(eg.default.vCzwM7),
        selected: l,
        onClick: d,
        trailing: u,
    });
});
var eE = n(361158),
    ex = n(270533),
    eN = n(186111),
    e_ = n(917782);
let eI = r.memo(function (e) {
    let { guildId: t, selected: n } = e,
        l = (0, I.useHasAnyModalOpen)(),
        i = (0, u.bG)([eN.A], () => eN.A.hasLayers()),
        a = (0, eE.xr)((e) => e.fullScreenLayers.length > 0),
        [o, d] = (0, ed.ww)([el.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        c = o === el.M.GAME_SERVER_HOSTING_NEW_BADGE,
        [h, A] = (0, ed.ww)(l || i || a || !c ? [] : [el.M.GAME_SERVER_HOSTING_NEW_COACHMARK], t),
        g = r.useCallback(
            (e) => {
                (d(e), A(e));
            },
            [d, A],
        ),
        m = r.useCallback(() => {
            (g(eA.i.USER_DISMISS), (0, eu.pX)(k.BVt.CHANNEL(t, eh.VV.GAME_SERVERS)));
        }, [t, g]),
        f = r.useRef(null),
        p = h === el.M.GAME_SERVER_HOSTING_NEW_COACHMARK,
        C = r.useCallback(() => (0, s.jsx)(ex.mn, { channelRowRef: f, guildId: t, markAsDismissed: g }), [t, g]);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(ec.G, {
                ref: f,
                id: `game-server-${t}`,
                renderIcon: (e) =>
                    (0, s.jsx)(eo.GameControllerIcon, { size: "md", className: e, color: "currentColor" }),
                text: em.intl.string(eg.default.vCzwM7),
                selected: n,
                onClick: m,
                trailing: c
                    ? (0, s.jsx)(ea.Lp, { disableColor: !0, text: em.intl.string(em.t.y2b7CA), className: e_.q })
                    : null,
            }),
            p && C(),
        ],
    });
});
var eS = n(177953),
    eb = n(624458),
    eG = n(844944),
    ej = n(513461),
    ev = n(663997),
    eR = n(221950);
function ey(e) {
    let { guild: t, selected: n } = e,
        l = (0, u.bG)([P.A], () => P.A.can(k.xBc.KICK_MEMBERS, t)),
        i = (0, u.bG)([eG.A], () => eG.A.getSubmittedGuildJoinRequestTotal(t.id)),
        a = l ? (i ?? 0) : 0;
    r.useEffect(() => {
        l &&
            t.features.has(k.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
            t.features.has(k.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            eb.A.fetchGuildJoinRequests({ guildId: t.id, status: ej.B5.SUBMITTED, limit: ev.L });
    }, [l, t]);
    let o = r.useCallback(() => {
        (0, eR.aZ)(t.id);
    }, [t.id]);
    return (0, s.jsx)(ec.G, {
        id: `members-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(eS.n, { size: "md", color: "currentColor", className: e }),
        text: em.intl.string(em.t.oclz3Z),
        selected: n,
        onClick: o,
        trailing: a > 0 ? (0, s.jsx)(ea.hV, { count: a }) : null,
    });
}
var eM = n(632015);
function eL(e) {
    let { guild: t, selected: n } = e;
    return (0, s.jsx)(ec.G, {
        id: `guild-space-tab-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(eM.f, { size: "md", color: "currentColor", className: e }),
        text: em.intl.string(em.t["04IVMq"]),
        selected: n,
        onClick: function () {
            (0, eu.pX)(k.BVt.CHANNEL(t.id, eh.VV.GUILD_SPACE));
        },
    });
}
var eT = n(581007),
    eU = n(522435),
    eD = n(285406),
    eO = n(582904),
    eP = n(419534),
    eV = n(503698),
    ew = n.n(eV),
    eH = n(695366),
    eB = n(104510),
    ek = n(544048),
    eF = n(868652),
    eK = n(379229),
    ez = n(482487),
    eW = n(914732),
    eY = n(828162),
    eX = n(877624),
    eq = n(549996),
    eZ = n(25525),
    eJ = n(247806);
function e$(e) {
    let { indicator: t } = e;
    if (null == t) return null;
    switch (t.type) {
        case eK.cD.WARNING:
            return (0, s.jsx)(eH.E, { color: h.A.colors.STATUS_WARNING, size: "sm" });
        case eK.cD.UNREAD:
            return (0, s.jsx)(ea.hV, { count: t.count });
        default:
            return null;
    }
}
let eQ = { animation: { BEG: 0, END: 75 }, LOOP: { BEG: 76, END: 376 } },
    e0 = r.memo(function (e) {
        let { guildId: t, selected: l } = e,
            i = (0, eW.Ay)(t),
            { showHighlight: a, markAsDismissed: o } = (function () {
                let e = (0, eq.c)(eX.C.GUILD_BOOST_TAB_BANNER),
                    t = null != e && "guildBoostTabBanner" === e.properties.properties.oneofKind,
                    [n, l] = (0, ed.Cc)(t ? el.M.GUILD_BOOST_TAB_HIGHLIGHT : null, e?.promotionId ?? "");
                return { showHighlight: n === el.M.GUILD_BOOST_TAB_HIGHLIGHT, markAsDismissed: l };
            })(),
            { showNewBadgeOnRow: d, dismissNewBadgeIfShown: c } = (0, ez.A)(
                t,
                i?.indicator != null || i?.popout != null,
            ),
            A = r.useCallback(() => {
                (c(),
                    (0, eF.Zm)(t),
                    (0, eY.A)(t, ee.A.GUILD_POWERUPS_CHANNEL_LIST_ROW),
                    i?.popout?.markAsDismissed(eA.i.INDIRECT_ACTION));
            }, [t, c, i]),
            g = r.useRef(null),
            m = (0, I.useModalsStore)(I.hasAnyModalOpenSelector),
            f = (0, u.bG)([eN.A], () => eN.A.hasLayers()),
            p = (0, eE.xr)((e) => e.fullScreenLayers.length > 0),
            C = m || f || p,
            E = r.useCallback(() => {
                if (i?.popout == null || C) return null;
                switch (i?.popout?.type) {
                    case eK.o.LEVEL_REACHED:
                        return (0, s.jsx)(ex.HW, { guildId: t, channelRowRef: g, ...i.popout });
                    case eK.o.PERKS_AVAILABLE:
                        return (0, s.jsx)(ex.UB, { guildId: t, channelRowRef: g, ...i.popout });
                    case eK.o.PERKS_PURCHASABLE:
                        return (0, s.jsx)(ex.lw, { guildId: t, channelRowRef: g, ...i.popout });
                    case eK.o.NEW_PERK_AVAILABLE:
                        return (0, s.jsx)(ex.bo, { guildId: t, channelRowRef: g, ...i.popout });
                    case eK.o.BOOST_TO_UNLOCK:
                        return (0, s.jsx)(ex.Gw, { guildId: t, channelRowRef: g, ...i.popout });
                    case eK.o.EXPIRING_PERK:
                        return (0, s.jsx)(ex.Mr, { guildId: t, channelRowRef: g, ...i.popout });
                    case eK.o.GAME_SERVER_HOSTING_AVAILABLE:
                    case eK.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE:
                        return (0, s.jsx)(ex.jz, { guildId: t, channelRowRef: g, ...i.popout });
                    case eK.o.GAME_SERVER_NEW_GAMES:
                        return (0, s.jsx)(ex.YX, { guildId: t, channelRowRef: g, ...i.popout });
                    case eK.o.GAME_SERVER_PRICING_CHANGE:
                        return (0, s.jsx)(ex.Ns, { guildId: t, channelRowRef: g, ...i.popout });
                    default:
                        return (0, s.jsx)("div", {});
                }
            }, [t, i?.popout, g, C]);
        r.useEffect(() => {
            l && a && o(eA.i.AUTO_DISMISS);
        }, [l, a, o]);
        let x = i?.popout != null || a,
            [N, _] = r.useState(null);
        r.useEffect(() => {
            x || _(null);
        }, [x]);
        let S = r.useCallback((e) => {
            _(e);
        }, []);
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(ec.G, {
                    ref: g,
                    className: eJ.kL,
                    id: `skill-trees-${t}`,
                    renderIcon: (e) => (0, s.jsx)(eB._, { size: "md", className: e, color: "currentColor" }),
                    background:
                        x &&
                        (0, s.jsx)("div", {
                            className: eJ.Fi,
                            children: (0, s.jsx)(ek.t, {
                                nextScene: null == N ? "animation" : "LOOP",
                                className: eJ.UU,
                                sceneSegments: eQ,
                                importData: () => n.e("867807").then(n.t.bind(n, 217762, 19)),
                                onScenePlay: S,
                                rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                            }),
                        }),
                    text: (0, s.jsx)("span", {
                        className: ew()({ [eJ.A7]: i?.showUnread === !0 }),
                        children: em.intl.string(eZ.default.yv3DJJ),
                    }),
                    selected: l,
                    onClick: A,
                    showUnread: i?.showUnread === !0,
                    trailing: d
                        ? (0, s.jsx)(ea.Lp, {
                              text: em.intl.string(em.t.y2b7CA),
                              color: h.A.colors.BACKGROUND_BRAND.css,
                          })
                        : (0, s.jsx)(e$, { indicator: i?.indicator }),
                }),
                E(),
            ],
        });
    });
var e1 = n(128954),
    e3 = n(834730),
    e2 = n(717421),
    e9 = n(442433),
    e5 = n(230135),
    e7 = n(228366);
let e6 = {};
class e4 extends u.Ay.PersistedStore {
    static displayName = "GuildBoostingProgressBarPersistedStore";
    static persistKey = "PremiumGuildProgressBarPersistedStore";
    initialize(e) {
        null != e && (e6 = e);
    }
    getState() {
        return e6;
    }
    getCountForGuild(e) {
        return e6[e];
    }
}
let e8 = new e4(e7.h, {
    APPLIED_GUILD_BOOST_COUNT_UPDATE: function (e) {
        let { guildId: t, premiumCount: n } = e;
        e6 = { ...e6, [t]: n };
    },
    APPLIED_GUILD_BOOST_COUNT_RESET: function () {
        e6 = {};
    },
});
var te = n(147925),
    tt = n(363487),
    tn = n(568065);
function tl(e) {
    return (0, r.useMemo)(() => {
        if (null == e) return 0;
        let t = e?.features.has(k.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0 ? 0 : k.M2T[k.TVA.TIER_3],
            n = Object.values(tn.sy),
            l = Object.values(tn.YV);
        return (
            n.concat(l).forEach((n) => {
                null == n.includedInLevel && (n.isEnabled?.(e.id) ?? !0) && (t += n.boostPrice);
            }),
            t
        );
    }, [e]);
}
var ti = n(196577);
let ts = r.forwardRef((e, t) => {
    let { appliedBoostCount: n, maxBoostCount: l, premiumSubscriberCount: i, className: a } = e,
        o = n >= l,
        d = Math.min((n / l) * 100, 100),
        c = `calc(${d}% - 4px)`,
        [u, h] = (0, e2.z)(
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
            className: ti.hQ,
            children: [
                (0, s.jsx)("div", { className: ew()(ti.L$, a) }),
                (0, s.jsx)(e1.animated.div, { className: ew()(ti.qB, { [ti.mu]: d <= 5 }), style: u }),
                (0, s.jsxs)("div", {
                    className: ti.FS,
                    children: [
                        (0, s.jsxs)("div", {
                            className: ti.Ui,
                            children: [
                                (0, s.jsx)(e3.E, {
                                    className: ti.Qq,
                                    variant: "text-xs/semibold",
                                    children: em.intl.string(eZ.default.NI6Ihe),
                                }),
                                i >= l &&
                                    (0, s.jsx)(e3.E, {
                                        className: ti.Qq,
                                        variant: "text-xs/semibold",
                                        children: "\uD83C\uDF89",
                                    }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: ti.Ui,
                            children: [
                                (0, s.jsx)(e3.E, {
                                    className: ew()(ti.Qq, ti.ue),
                                    variant: "text-xs/semibold",
                                    children: o
                                        ? em.intl.formatToPlainString(eZ.default["Ehpq+7"], { appliedBoostCount: n })
                                        : em.intl.formatToPlainString(eZ.default["/rbPDs"], {
                                              appliedBoostCount: n,
                                              maxBoostCount: l,
                                          }),
                                }),
                                (0, s.jsx)(te.A, {
                                    width: 12,
                                    height: 12,
                                    direction: te.A.Directions.RIGHT,
                                    className: ew()(ti.Qq, ti.ue, ti.OW),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
function tr(e) {
    let { guild: t, withMargin: l } = e,
        i = tl(t),
        a = (0, tt.A)(t.id),
        o = r.useCallback(() => {
            (0, eY.A)(t.id, ee.A.GUILD_BOOSTING_SIDEBAR_DISPLAY);
        }, [t.id]),
        d = (0, u.bG)([e8], () => e8.getCountForGuild(t.id) ?? 0);
    r.useEffect(() => {
        d !== t.premiumSubscriberCount && (0, e5.u)(t.id, t.premiumSubscriberCount);
    }, [t.id, d, t.premiumSubscriberCount]);
    let c = r.useCallback(
        (e) => {
            a &&
                (0, e9.L3)(e, async () => {
                    let { default: e } = await n.e("371728").then(n.bind(n, 709843));
                    return (n) => (0, s.jsx)(e, { ...n, guild: t });
                });
        },
        [a, t],
    );
    return (0, s.jsx)(es.D, {
        "aria-label": void 0,
        role: "button",
        focusProps: { offset: { left: 10, right: 4 } },
        onClick: o,
        className: ew()(ti.kL, { [ti.aF]: l }),
        onContextMenu: c,
        children: (0, s.jsx)(ts, {
            appliedBoostCount: d,
            maxBoostCount: i,
            premiumSubscriberCount: t.premiumSubscriberCount,
        }),
    });
}
function ta(e) {
    let { guild: t, withMargin: n } = e;
    return (0, s.jsx)(tr, { guild: t, withMargin: n });
}
ts.displayName = "GuildPowerupsProgressBarUI";
var to = n(455234),
    td = n(181079),
    tc = n(607567),
    tu = n(403362),
    th = n(996439),
    tA = n(935208),
    tg = n(63995),
    tm = n(518769);
function tf(e) {
    let { voiceState: t, userNick: n, user: l } = e,
        i = (0, tc.hz)(t, n);
    return { user: l, voiceState: t, nick: n, comparator: i };
}
var tp = n(787541),
    tC = n(79858),
    tE = n(600761),
    tx = n(72314),
    tN = n(297469),
    t_ = n(960755),
    tI = n(633965),
    tS = n(702841),
    tb = n(41200),
    tG = n(831617),
    tj = n(589603),
    tv = n(496767),
    tR = n(134413),
    ty = n(701785),
    tM = n(101611),
    tL = n(473529),
    tT = n(978165),
    tU = n(960253),
    tD = n(770666),
    tO = n(508654),
    tP = n(470452),
    tV = n(521427);
let tw = (0, n(945810).mj)({
    name: "2026-04-mobile-boost-progress-bar",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var tH = n(871123),
    tB = n(683180),
    tk = n(281405),
    tF = n(3026),
    tK = n(821609),
    tz = n(499373),
    tW = n(259678),
    tY = n(508770),
    tX = n(847374),
    tq = n(285796),
    tZ = n(983851),
    tJ = n(914430),
    t$ = n(47167),
    tQ = n(485947),
    t0 = n(970853),
    t1 = n(93055),
    t3 = n(349828),
    t2 = n(22277),
    t9 = n(551851),
    t5 = n(391507);
function t7(e) {
    e.stopPropagation();
}
function t6(e) {
    let { label: t, onClick: n, tabIndex: l } = e;
    return (0, s.jsx)(ei.m, {
        text: t,
        children: (0, s.jsx)(es.D, {
            className: ew()(t5.c9, t5.ih),
            onClick: n,
            tabIndex: l,
            role: "button",
            "aria-label": t,
            children: (0, s.jsx)(tz.T, { size: "xs", color: "currentColor", className: t5.hs }),
        }),
    });
}
let t4 = $(
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
                m = (0, u.bG)([w.Ay], () => w.Ay.isChannelMuted(l.getGuildId(), l.id)),
                f = (0, u.bG)([L.A], () => L.A.isCollapsed(l.id)),
                p = (0, u.bG)([P.A], () => P.A.can(k.xBc.MANAGE_CHANNELS, l)),
                C = (0, t$.Ay)(l);
            t = null != h ? (c > h ? t5.mU : t5.TR) : t5.fx;
            let E = r.useCallback(() => {
                    f ? (0, tJ.fh)(l.id) : (0, tJ.Gv)(l.id);
                }, [l.id, f]),
                x = r.useCallback(
                    (e) => {
                        if ("null" !== l.id) {
                            let t = O.A.getGuild(l.getGuildId());
                            null != t &&
                                (0, e9.L3)(e, async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("926132"),
                                        n.e("393336"),
                                        n.e("391763"),
                                        n.e("955557"),
                                        n.e("535321"),
                                        n.e("603998"),
                                        n.e("550033"),
                                        n.e("412255"),
                                        n.e("63340"),
                                        n.e("430997"),
                                        n.e("379995"),
                                        n.e("591377"),
                                        n.e("35723"),
                                        n.e("566378"),
                                        n.e("715675"),
                                    ]).then(n.bind(n, 740438));
                                    return (n) => (0, s.jsx)(e, { ...n, channel: l, guild: t });
                                });
                        }
                    },
                    [l],
                ),
                N = r.useCallback(() => {
                    let e = l.type === k.rbe.GUILD_CATEGORY ? null : l.type,
                        t = l.getGuildId();
                    null != t &&
                        (0, I.openModalLazy)(async () => {
                            let { default: i } = await Promise.all([
                                n.e("377476"),
                                n.e("403032"),
                                n.e("746309"),
                                n.e("778799"),
                                n.e("470068"),
                                n.e("203589"),
                                n.e("692513"),
                                n.e("589916"),
                                n.e("460773"),
                                n.e("208018"),
                                n.e("120379"),
                                n.e("824547"),
                                n.e("819193"),
                                n.e("507775"),
                                n.e("662068"),
                                n.e("358608"),
                                n.e("221500"),
                            ]).then(n.bind(n, 684343));
                            return (n) =>
                                (0, s.jsx)(i, {
                                    ...n,
                                    channelType: e,
                                    guildId: t,
                                    categoryId: "null" !== l.id ? l.id : null,
                                });
                        });
                }, [l]),
                _ = (function (e, t) {
                    let n = (0, u.bG)([td.A], () => td.A.autoAddJoinedThreads),
                        { isAtLimit: l } = (0, t1.ft)();
                    return n &&
                        l &&
                        null != t &&
                        (0, R.ai)(e.getGuildId()) &&
                        e.type === k.rbe.GUILD_CATEGORY &&
                        t.trim().toLowerCase() === t3.A.toLowerCase()
                        ? { label: em.intl.string(t2.default.WsUrMD), tooltip: em.intl.string(t2.default.dW9Kov) }
                        : null;
                })(l, C),
                S = (0, t0.A)(l);
            null == S && p && !o && (S = { label: em.intl.string(em.t["fUYU+j"]), perform: N });
            let { role: b, tabIndex: G, ...j } = (0, d.rm)(l.id),
                v = r.useRef(null),
                y = r.useRef(null),
                M = (0, s.jsxs)("li", {
                    className: t,
                    "data-dnd-name": C,
                    children: [
                        (0, s.jsx)(tW.vN, {
                            focusTarget: v,
                            ringTarget: y,
                            offset: { left: 4, right: 4 },
                            children: (0, s.jsxs)("div", {
                                ref: y,
                                className: ew()(t5.Ki, t5.iE, { [t5.yZ]: f, [t5.SU]: m, [t5.vk]: !0 }),
                                onContextMenu: x,
                                children: [
                                    (0, s.jsxs)(es.D, {
                                        innerRef: v,
                                        className: t5.rb,
                                        tabIndex: G,
                                        ...j,
                                        onClick: E,
                                        "aria-label": em.intl.formatToPlainString(em.t.y5l3J2, { categoryName: C }),
                                        "aria-expanded": !f,
                                        focusProps: { enabled: !1 },
                                        children: [
                                            (0, s.jsx)(tQ.A, {
                                                className: t5.UU,
                                                children: (0, s.jsx)(tF.A, { children: C }),
                                            }),
                                            null != _
                                                ? (0, s.jsx)("span", {
                                                      className: t5.qS,
                                                      children: (0, s.jsx)(ei.m, {
                                                          asContainer: !0,
                                                          text: _.tooltip,
                                                          children: (0, s.jsx)(tY.E, {
                                                              type: { text: _.label },
                                                              variant: "default",
                                                          }),
                                                      }),
                                                  })
                                                : null,
                                            A
                                                ? null
                                                : (0, s.jsx)(tX.a, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: t5.Kk,
                                                  }),
                                        ],
                                    }),
                                    (0, s.jsx)("div", {
                                        onClick: t7,
                                        className: t5.Y_,
                                        children:
                                            null != S
                                                ? (0, s.jsx)(t6, { label: S.label, onClick: S.perform, tabIndex: G })
                                                : null,
                                    }),
                                ],
                            }),
                        }),
                        g,
                    ],
                });
            return null != a && null != i ? a(i(M)) : M;
        }),
    ),
    t8 = r.memo(function (e) {
        let { name: t, onDismiss: n, className: l } = e;
        return (0, s.jsx)("li", {
            className: ew()(l, t5.fx),
            children: (0, s.jsxs)("div", {
                className: ew()(t5.Ki, t5._V),
                children: [
                    (0, s.jsx)("div", {
                        className: t5.rb,
                        children: (0, s.jsx)(tQ.A, { className: t5.UU, children: (0, s.jsx)(tF.A, { children: t }) }),
                    }),
                    null != n
                        ? (0, s.jsx)(ei.m, {
                              asContainer: !0,
                              text: em.intl.string(em.t["5qNmsU"]),
                              children: (0, s.jsx)(es.D, {
                                  className: t5.r,
                                  onClick: n,
                                  children: (0, s.jsx)(tq.a, { size: "md", color: "currentColor", className: t5.X8 }),
                              }),
                          })
                        : null,
                ],
            }),
        });
    }),
    ne = r.memo(function (e) {
        let { category: t } = e,
            n = (0, u.bG)([t9.A], () => t9.A.isVoiceCategoryCollapsed(t.guild.id)),
            l = r.useCallback(() => {
                var e, l;
                n
                    ? ((e = t.guild.id), e7.h.dispatch({ type: "VOICE_CATEGORY_EXPAND", guildId: e, expand: !0 }))
                    : ((l = t.guild.id), e7.h.dispatch({ type: "VOICE_CATEGORY_COLLAPSE", guildId: l, expand: !1 }));
            }, [t.guild.id, n]);
        return (0, s.jsx)("div", {
            className: t5.oA,
            children: (0, s.jsx)(tK.$, {
                variant: "secondary",
                fullWidth: !0,
                onClick: l,
                icon: tZ.H,
                text: n ? em.intl.string(em.t["/eB9Bg"]) : em.intl.string(em.t.Q2gPWl),
            }),
        });
    }),
    nt = r.memo(function (e) {
        let { category: t, channel: n } = e,
            l = (0, u.bG)([t9.A], () => t9.A.isVoiceCategoryCollapsed(t.guild.id));
        return l || null == n || n.record.type === k.rbe.GUILD_CATEGORY
            ? l
                ? (0, s.jsx)("li", {
                      className: t5.fx,
                      children: (0, s.jsx)("div", {
                          className: ew()(t5.Ki, t5._V),
                          children: (0, s.jsx)(tQ.A, {
                              className: t5.UU,
                              children: (0, s.jsx)(tF.A, { children: em.intl.string(em.t["V/u9Dy"]) }),
                          }),
                      }),
                  })
                : null
            : (0, s.jsx)("div", { style: { height: 16 } });
    }),
    nn = r.memo(function (e) {
        let { channel: t } = e,
            n = (0, t$.Ay)(t);
        return (0, s.jsx)("li", {
            className: t5.fx,
            children: (0, s.jsx)("div", {
                className: ew()(t5.Ki, t5._V),
                children: (0, s.jsx)(tQ.A, { className: t5.UU, children: (0, s.jsx)(tF.A, { children: n }) }),
            }),
        });
    });
var nl = n(728321),
    ni = n(244083);
let ns = { origin: { x: -36, y: 7 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } };
var nr = n(906659);
let na = r.memo(function (e) {
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
            (null != a && i.includes(a) && (t = (0, eP.xb)(l)), (0, eP.DD)(n.id, i, t));
        }, [n.id, a, l, i]),
        { density: c } = (0, C.wR)(),
        u = "compact" === c ? 8 : 12;
    switch (t) {
        case tN.PU:
            return (0, s.jsx)("div", { style: { height: u } });
        case tN.bK:
            if (n.features.has(k.GuildFeatures.HUB)) return null;
            return (0, s.jsx)("div", { style: { height: u } });
        case tN.HP:
            return (0, s.jsx)(t8, { name: em.intl.string(em.t.mlPMCy) });
        case l.recentsSectionNumber:
            return (0, s.jsx)(t8, { name: em.intl.string(em.t.gKcrqM), onDismiss: d });
        case l.voiceChannelsSectionNumber: {
            let e = l.getCategoryFromSection(l.voiceChannelsSectionNumber);
            if (null == e || e.isEmpty()) return null;
            let n = l.getChannelFromSectionRow(t, 0)?.channel;
            return (0, s.jsxs)(r.Fragment, {
                children: [(0, s.jsx)("div", { className: nr.ts }), (0, s.jsx)(nt, { category: e, channel: n })],
            });
        }
        case tN.TF: {
            let e = l.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, s.jsx)(t4, {
                channel: e.record,
                position: e.position,
                disableManageChannels: o,
                children: (0, s.jsx)(nl.A, {
                    inlineSpecs: ns,
                    arrowAlignment: ni.oN.TOP,
                    tutorialId: "organize-by-topic",
                    position: "right",
                }),
            });
        }
        default: {
            let e = l.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, s.jsx)(t4, { channel: e.record, position: e.position, disableManageChannels: o });
        }
    }
});
var no = n(104171),
    nd = n(186369),
    nc = n(970812),
    nu = n(147036);
function nh(e, t, n) {
    return {
        hasDivider:
            !(function (e, t) {
                if (t === tN.PU) {
                    let t = e.getGuildActionSection().getRows();
                    return (
                        (1 === t.length && t[0] === tk.n.GUILD_PREMIUM_PROGRESS_BAR) ||
                        e.getGuildActionSection().isEmpty()
                    );
                }
                return 0 === e.getSections(!1)[t];
            })(e, n) &&
            (n === tN.PU ||
                ((0, R.ai)(e.id)
                    ? n !== e.getSections(!1).length - 1
                    : n === tN.HP ||
                      (!!t && n !== tN.bK && (n === e.recentsSectionNumber || (e.voiceChannelsSectionNumber, !1))))),
        canHaveVoiceSummary:
            n !== tN.PU &&
            n !== tN.HP &&
            n !== tN.bK &&
            n !== e.recentsSectionNumber &&
            n !== e.voiceChannelsSectionNumber,
    };
}
let nA = r.memo(function (e) {
        let { guildChannels: t, guildChannelsVersion: n } = e,
            l = r.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
        return null == l ? null : (0, s.jsx)(ne, { category: l });
    }),
    ng = r.memo(function (e) {
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
            { hasDivider: h, canHaveVoiceSummary: A } = r.useMemo(() => nh(n, c, t), [n, c, t, l]),
            g = r.useMemo(() => (t === tN.PU ? null : n.getCategoryFromSection(t)), [n, t, l]),
            m = (0, M.jN)(a),
            { enableWaveformIcon: f } = (0, nd.b)(a, "ChannelListSectionFooter"),
            p = (0, u.yK)(
                [w.Ay],
                () => {
                    if (null == g || !g.isCollapsed || !A) return [];
                    let e = g.getChannelRecords(),
                        t = [];
                    for (let n of e) {
                        if (!n.isGuildVocal()) continue;
                        let e = w.Ay.isChannelOrParentOptedIn(a, n.id);
                        (!m || e) && t.push(n);
                    }
                    return t;
                },
                [g, A, a, m],
            ),
            C = r.useMemo(
                () => (0, nu.fK)({ channels: p, selectedChannelId: o, selectedVoiceChannelId: d, voiceStates: i }),
                [p, o, d, i],
            );
        if (t === n.voiceChannelsSectionNumber) return (0, s.jsx)(nA, { guildChannels: n, guildChannelsVersion: l });
        let E = h ? (0, s.jsx)("div", { className: nr.ts }) : null;
        return A && 0 !== C.length
            ? (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)("div", {
                          className: nr.qz,
                          children: (0, s.jsx)(no.Ay, {
                              renderIcon: !0,
                              users: C,
                              max: 8,
                              showUserPopout: !0,
                              guildId: a,
                              renderLeadingIcon: f
                                  ? (e) => (0, s.jsx)(nc.A, { color: "currentColor", className: ew()(e, ep.Gj) })
                                  : void 0,
                          }),
                      }),
                      E,
                  ],
              })
            : E;
    });
var nm = n(625903),
    nf = n(283973),
    np = n(933832),
    nC = n(435183),
    nE = n(698441),
    nx = n(855687),
    nN = n(816662),
    n_ = n(446600),
    nI = n(616356);
function nS(e, t, n) {
    return null != t && !!t && !F(n, e.type);
}
function nb(e, t) {
    return null == t ? ep.fx : e > t ? ep.mU : ep.TR;
}
function nG(e) {
    let { channel: t, disableManageChannels: n, tabIndex: l, forceShowButtons: i, hasChannelInfo: r = !1 } = e;
    return (0, u.bG)(
        [P.A, V.A],
        () =>
            n ||
            (0, R.ai)(V.A.getGuildId()) ||
            (!P.A.can(k.xBc.MANAGE_CHANNELS, t) &&
                !P.A.can(k.xBc.MANAGE_ROLES, t) &&
                !P.A.can(k.xBc.MANAGE_WEBHOOKS, t)) ||
            ((0, H.tr)(t.type) && !P.A.can(k.xBc.VIEW_CHANNEL, t)) ||
            (t.isGuildVocal() && !P.A.can(k.xBc.CONNECT, t)) ||
            !H.bk.has(t.type) ||
            t.isModeratorReportChannel(),
    )
        ? null
        : (0, s.jsx)(ei.m, {
              asContainer: !0,
              text: em.intl.string(em.t["3gUsJb"]),
              children: (0, s.jsx)(es.D, {
                  className: ew()(ep.Xs, i ? ep.Tf : void 0, r ? ep.bw : ep.UI),
                  onClick: function () {
                      nC.Ay.open(t.id);
                  },
                  tabIndex: l,
                  "aria-label": em.intl.string(em.t["3gUsJb"]),
                  children: (0, s.jsx)(nm.SettingsIcon, { size: "xs", color: "currentColor", className: ep.gE }),
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
        c = (0, u.bG)([O.A], () => O.A.getGuild(t.getGuildId())),
        h = (0, u.bG)([n_.A], () => n_.A.getStageInstanceByChannel(t.id), [t.id]),
        A = (0, u.bG)([nE.Ay], () => nE.Ay.getActiveEventByChannel(t.id), [t.id]),
        g = (0, u.bG)([P.A], () => (0, nx.K)(P.A, c, t, h)),
        m = (0, u.bG)([], () =>
            t?.type === k.rbe.GUILD_VOICE ? em.intl.string(em.t["EE+P0H"]) : em.intl.string(em.t["0jeAXt"]),
        ),
        f = r.useRef(null);
    if (i || !g || t.isModeratorReportChannel() || t.isThread()) return null;
    let p = (0, s.jsx)(nf.R, { size: "xs", className: ep.gE, "aria-hidden": !0, color: "currentColor" });
    return (
        l &&
            (p = (0, s.jsx)(nl.A, {
                childRef: f,
                tutorialId: "instant-invite",
                position: "left",
                children: (0, s.jsx)("div", { ref: f, children: p }),
            })),
        (0, s.jsx)(ei.m, {
            asContainer: !0,
            text: m,
            children: (0, s.jsx)(es.D, {
                className: ew()(ep.Xs, o ? ep.Tf : void 0, d ? ep.bw : ep.UI),
                onClick: function () {
                    if (null != c) {
                        let e = nI.A.getAllActiveStreams().filter(
                            (e) => e.state !== k.XYD.ENDED && e.channelId === t.id,
                        );
                        (0, I.openModalLazy)(async () => {
                            let { default: l } = await Promise.all([
                                n.e("683621"),
                                n.e("711162"),
                                n.e("159957"),
                                n.e("728136"),
                                n.e("216084"),
                                n.e("22547"),
                            ]).then(n.bind(n, 1310));
                            return (n) =>
                                (0, s.jsx)(l, {
                                    ...n,
                                    guild: c,
                                    channel: t,
                                    streamUserId: 1 === e.length ? e[0].ownerId : null,
                                    source: k.PE1.GUILD_CHANNELS,
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
function nv(e) {
    let { channel: t } = e;
    return (0, s.jsx)(ei.m, {
        asContainer: !0,
        text: em.intl.string(em.t["ROh4T+"]),
        children: (0, s.jsx)(es.D, {
            className: ep.Xs,
            onClick: function () {
                (0, nN.Ol)(t.guild_id, t.id);
            },
            "aria-label": em.intl.string(em.t["ROh4T+"]),
            children: (0, s.jsx)(er.P, { size: "xs", color: "currentColor", className: ep.gE }),
        }),
    });
}
function nR(e) {
    let { channel: t } = e;
    return (0, s.jsx)(ei.m, {
        asContainer: !0,
        text: em.intl.string(em.t["N2c/Un"]),
        children: (0, s.jsx)(es.D, {
            className: ep.Xs,
            onClick: function () {
                (0, nN.jA)(t.guild_id, t.id, !0, { section: k.JJy.CHANNEL_LIST });
            },
            "aria-label": em.intl.string(em.t["N2c/Un"]),
            children: (0, s.jsx)(np.CheckmarkLargeIcon, { size: "xs", color: "currentColor", className: ep.gE }),
        }),
    });
}
class ny extends r.PureComponent {
    static defaultProps = { isDefaultChannel: !1 };
    renderEditButton() {
        return (0, s.jsx)(nG, { ...this.props });
    }
    renderInviteButton() {
        return (0, s.jsx)(nj, { ...this.props });
    }
    renderRemoveSuggestionButton() {
        return (0, s.jsx)(nv, { ...this.props });
    }
    renderAcceptSuggestionButton() {
        return (0, s.jsx)(nR, { ...this.props });
    }
    getClassName() {
        let { position: e, sortingPosition: t } = this.props;
        return nb(e, t);
    }
    isDisabled() {
        let { channel: e, sorting: t, sortingType: n } = this.props;
        return nS(e, t, n);
    }
}
var nM = n(166444),
    nL = n(790782);
let nT = $(function (e) {
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
        m = (0, u.bG)([T.A, D.Ay], () => {
            let e = D.Ay.getDirectoryChannelIds(t.id);
            return 0 === e.length ? null : T.A.getChannel(e[0]);
        }),
        f = (0, u.bG)([T.A], () => T.A.getChannel(m?.parent_id)),
        p = l === m?.id,
        C = (0, t$.Ay)(m),
        E = (0, u.bG)([P.A], () =>
            null != f ? P.A.can(k.xBc.MANAGE_CHANNELS, f) : null != t && P.A.can(k.xBc.MANAGE_CHANNELS, t),
        ),
        x = r.useCallback(
            (e) => {
                null != m &&
                    (0, e9.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("926132"),
                            n.e("430997"),
                            n.e("379995"),
                            n.e("729559"),
                        ]).then(n.bind(n, 994058));
                        return (t) => (0, s.jsx)(e, { ...t, channel: m });
                    });
            },
            [m],
        );
    if (null == m) return null;
    let N = nb(i, c),
        _ = nS(m, o, d),
        I = (0, s.jsx)("div", {
            className: ew()(N, { [ep.r9]: _, [ep.wH]: p }),
            "data-dnd-name": C,
            children: (0, s.jsxs)(nM.Ay, {
                className: ep.Ki,
                channel: m,
                guild: t,
                selected: p,
                onContextMenu: x,
                forceInteractable: !0,
                resolvedUnreadSetting: nL.e.ONLY_MENTIONS,
                children: [
                    (0, s.jsx)(nj, { channel: m, tabIndex: g }),
                    (0, s.jsx)(nG, { channel: m, disableManageChannels: a, tabIndex: g }),
                ],
            }),
        });
    return (E && (I = A(h(I))), I);
});
var nU = n(34188),
    nD = n(733391),
    nO = n(832163),
    nP = n(831024),
    nV = n(44724),
    nw = n(849134),
    nH = n(770178),
    nB = n(307076);
let nk = Math.ceil(Math.sqrt(115200)),
    nF = (nk - 240) / 2,
    nK = r.forwardRef(function (e, t) {
        let { children: n } = e,
            [l, i] = r.useState(-1),
            a = r.useCallback((e) => {
                i(e.contentRect.width);
            }, []),
            o = (0, nH.w)(a, [], { fireOnMount: !0 }),
            [{ shineSpring: d }, c] = (0, e2.z)(() => ({
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
                        (0, s.jsx)(e1.animated.div, {
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
    nX = n(672812),
    nq = n(427797);
let nZ = r.memo(function (e) {
    let { guild: t, selected: l } = e,
        i = r.useRef(null),
        a = r.useRef(null),
        o = (0, I.useHasAnyModalOpen)(),
        d = (0, u.bG)([eN.A], () => eN.A.hasLayers()),
        c = (0, eE.xr)((e) => e.fullScreenLayers.length > 0);
    r.useEffect(() => {
        (0, nD.Kh)(t.id);
    }, [t.id]);
    let A = (0, u.bG)([nO.A], () => nO.A.getAnnouncement(t.id)),
        g = A?.state === "success" ? A.announcement : void 0,
        [m, f] = (0, ed.x_)(el.M.GAME_SHOP_NEW_BADGE, t.id, g?.id ?? "", void 0, !0),
        p = m === el.M.GAME_SHOP_NEW_BADGE && null != g,
        C = (0, tH.nY)(t.id),
        E = (0, nP.u)({ surface: "storefront_badge", applicationId: C }),
        x = null;
    (p && (x = em.intl.string(em.t.y2b7CA)), null != E && (x = E.text));
    let [N, _] = (0, ed.x_)(el.M.GAME_SHOP_NEW_DROP_POPOVER, t.id, g?.id ?? ""),
        S = N === el.M.GAME_SHOP_NEW_DROP_POPOVER && null != g;
    r.useEffect(() => {
        l && (p && f(eA.i.INDIRECT_ACTION), S && _(eA.i.INDIRECT_ACTION));
    }, [f, _, l, p, S]);
    let b = r.useCallback(() => {
            (f(eA.i.TAKE_ACTION), _(eA.i.TAKE_ACTION));
            let e = (0, tH.mq)(t.id),
                n = nO.A.getStorefrontState(e)?.activePage ?? 0;
            (0, eu.pX)(k.BVt.CHANNELS_GAME_SHOP(t.id, n));
        }, [t.id, f, _]),
        G = r.useCallback(() => {
            (0, nV.X)({ guildId: t.id, forceFetch: S });
        }, [t.id, S]),
        j = r.useCallback(() => {
            _(eA.i.USER_DISMISS);
        }, [_]),
        v = r.useCallback(
            (e) => {
                null != t &&
                    (0, e9.L3)(e, async () => {
                        let { default: e } = await n.e("899523").then(n.bind(n, 41614));
                        return (n) => (0, s.jsx)(e, { ...n, guild: t });
                    });
            },
            [t],
        ),
        R = r.useCallback(() => {
            i.current?.onMouseEnter(null, 500);
        }, [i]),
        y = r.useCallback(
            (e) =>
                (0, s.jsx)(ec.G, {
                    background: (0, s.jsx)("div", { className: nq.D }),
                    innerClassName: nq.Z,
                    ref: a,
                    id: `game-shop-${t.id}`,
                    renderIcon: (e) =>
                        (0, s.jsx)(nU.U, {
                            size: "custom",
                            color: "currentColor",
                            width: 20,
                            height: 20,
                            className: e,
                        }),
                    text: (0, s.jsx)(e3.E, {
                        variant: "text-md/medium",
                        className: nX.UU,
                        children: em.intl.string(em.t.vyaWs7),
                    }),
                    selected: l,
                    onMouseDown: G,
                    onClick: b,
                    onContextMenu: v,
                    trailing: (0, s.jsxs)(s.Fragment, {
                        children: [
                            null != x && (0, s.jsx)(ea.Lp, { text: x, color: h.A.colors.BACKGROUND_BRAND.css }),
                            e,
                        ],
                    }),
                }),
            [t.id, l, G, b, v, x],
        ),
        M = r.useMemo(() => {
            if (null == g) return null;
            switch (g.type) {
                case "guild-application-announcement": {
                    let e =
                            null != g.assetId
                                ? nY.A.toURLSafe((0, nz.YE)(g.applicationId, g.assetId, 256, "webp"))
                                : void 0,
                        t =
                            null != g.backgroundImageAssetId
                                ? nY.A.toURLSafe((0, nz.YE)(g.applicationId, g.backgroundImageAssetId, 256, "webp"))
                                : void 0;
                    if (null == e) return null;
                    return {
                        graphicSource: { type: "sku", imageUrl: e, backgroundImageUrl: t },
                        title: em.intl.string(em.t["7PvvS9"]),
                        body: em.intl.formatToPlainString(em.t["9J4h1a"], { applicationName: g.applicationName }),
                    };
                }
                case "guild-discord-announcement": {
                    let { videoAssetFullyQualifiedURL: e, assetFullyQualifiedURL: t } = g;
                    if ((0, nW.uJ)(e) && (0, nW.uJ)(t)) return null;
                    return {
                        graphicSource: (0, nW.uJ)(e) ? { type: "asset", src: t } : { type: "video", src: e },
                        title: g.popoverTitle,
                        body: g.popoverBody,
                        actionLabel: g.popoverCta,
                    };
                }
                default:
                    return null;
            }
        }, [g]),
        L = r.useCallback(
            () =>
                S && null != M
                    ? (0, s.jsx)(nw.A, {
                          onActionClick: b,
                          onActionMouseDown: G,
                          onRender: R,
                          onRequestClose: j,
                          targetElementRef: a,
                          ...M,
                      })
                    : null,
            [S, M, b, G, R, j],
        );
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(nK, { ref: i, children: y }), !o && !d && !c && L()] });
});
var nJ = n(740426),
    n$ = n(826673),
    nQ = n(591552),
    n0 = n(202776),
    n1 = n(454058),
    n3 = n(573163);
function n2(e) {
    let { guild: t, selected: l } = e,
        i = (0, n0.A)(t),
        a = (0, n$.HX)(el.M.CHANNEL_BROWSER_NEW_BADGE_NUX),
        o = (0, tS.yK)([n1.A], () =>
            Array.from(n1.A.getNewChannelIds(t.id)).filter((e) => n1.A.shouldIndicateNewChannel(t.id, e)),
        ),
        d = (0, tS.bG)([n3.Ay], () => n3.Ay.hasUnread(t.id, nL.P.GUILD_ONBOARDING_QUESTION)),
        c = o.length > tN.rR,
        u = (0, tS.bG)([nQ.A, n3.Ay], () => {
            let e = nQ.A.lastFetchedAt(t.id),
                n = n3.Ay.lastMessageId(t.id, nL.P.GUILD_ONBOARDING_QUESTION);
            if (null == n) return !1;
            let l = tA.default.extractTimestamp(n);
            return null != e && e > l;
        }),
        A = r.useCallback(() => {
            (0, eu.pX)(k.BVt.CHANNEL(t.id, i ? eh.VV.CUSTOMIZE_COMMUNITY : eh.VV.CHANNEL_BROWSER));
        }, [t.id, i]),
        g = r.useCallback(
            (e) => {
                (0, e9.L3)(e, async () => {
                    let { default: e } = await Promise.all([n.e("113446"), n.e("317699"), n.e("830412")]).then(
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
            (m = (0, s.jsx)(ea.Lp, {
                color: h.A.colors.BADGE_BACKGROUND_BRAND.css,
                text: em.intl.string(em.t.y2b7CA),
            })),
        (0, s.jsx)(ec.G, {
            id: `channels-${t.id}`,
            renderIcon: (e) => (0, s.jsx)(nJ.k, { size: "md", color: "currentColor", className: e }),
            text: i ? em.intl.string(em.t.h9mGOP) : em.intl.string(em.t.et6wav),
            selected: l,
            onClick: A,
            onContextMenu: g,
            trailing: m,
        })
    );
}
var n9 = n(855473);
function n5(e) {
    let { guild: t, selected: n } = e;
    return (0, s.jsx)(ec.G, {
        id: `home-tab-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(n9.Z, { size: "md", color: "currentColor", className: e }),
        text: em.intl.string(em.t.VbpLyU),
        selected: n,
        onClick: function () {
            (0, eu.pX)(k.BVt.CHANNEL(t.id, eh.VV.GUILD_HOME));
        },
    });
}
var n7 = n(297264),
    n6 = n(5373),
    n4 = n(65995),
    n8 = n(195702);
function le(e, t) {
    return (0, s.jsx)(e3.E, { variant: "text-xs/bold", color: "text-default", children: e }, t);
}
let lt = r.memo(function (e) {
    let { guild: t } = e,
        n = (0, u.bG)([ty.h], () => ty.h.getNewMemberActions(t.id), [t.id]),
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
            (0, s.jsxs)(es.D, {
                ...o,
                role: "button",
                focusProps: { offset: { right: 4 } },
                className: n8.G9,
                onClick: function () {
                    (0, eu.pX)(k.BVt.CHANNEL(t.id, eh.VV.GUILD_HOME));
                },
                children: [
                    (0, s.jsxs)("div", {
                        className: n8.A1,
                        children: [
                            (0, s.jsx)(n7.D, { variant: "heading-sm/bold", children: em.intl.string(em.t.SnrR3x) }),
                            (0, s.jsxs)("div", {
                                className: n8.Ib,
                                children: [
                                    (0, s.jsx)(e3.E, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        className: n8.Cv,
                                        children: em.intl.format(em.t.eqZ1lW, {
                                            numberHook: le,
                                            total: a.toString(),
                                            completed: i.toString(),
                                        }),
                                    }),
                                    (0, s.jsx)(te.A, {
                                        className: n8.UE,
                                        width: 16,
                                        height: 16,
                                        direction: te.A.Directions.RIGHT,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, s.jsx)(n6.i, {
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
    return (0, s.jsx)(ec.G, {
        id: `official-messages-page-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(ln.L, { size: "md", color: "currentColor", className: e }),
        text: em.intl.string(em.t.xHEzFh),
        selected: n,
        onClick: function () {
            (0, eu.pX)(k.BVt.CHANNEL(t.id, eh.VV.GUILD_OFFICIAL_MESSAGES));
        },
    });
}
var li = n(514179);
function ls(e) {
    let { guild: t, selected: l } = e;
    return (0, s.jsx)(ec.G, {
        id: `subscriptions-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(li.A, { className: e }),
        text: em.intl.string(em.t["KzCF/6"]),
        selected: l,
        onClick: function () {
            (0, eu.pX)(k.BVt.CHANNEL(t.id, eh.VV.ROLE_SUBSCRIPTIONS));
        },
        onContextMenu: function (e) {
            null != t &&
                (0, e9.L3)(e, async () => {
                    let { default: e } = await n.e("571911").then(n.bind(n, 978554));
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
    lg = n(888918);
function lm(e) {
    let { guildId: t, selected: n, handleClick: l } = e,
        i = (0, lu.w)(t),
        r = (0, tS.bG)([O.A], () => O.A.getGuild(t)),
        a = r?.features.has(k.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !0,
        o = "false" === lr.w.get(lA.bJ, "false"),
        d = (0, tS.bG)([Q.Ay], () => Q.Ay.useReducedMotion);
    return (0, s.jsx)(ec.G, {
        id: `shop-${t}`,
        className: ew()(lg.A2, { [lg.wH]: n, [lg.ST]: o }),
        innerClassName: lg.LE,
        renderIcon: (e) => (0, s.jsx)(lc.h, { width: 20, height: 20, className: ew()([e, lg.sV]) }),
        text: em.intl.string(em.t.al5EXL),
        selected: n,
        onClick: l,
        trailing: (0, s.jsxs)("div", {
            className: lg.ai,
            children: [
                d
                    ? (0, s.jsx)(ea.Lp, {
                          color: h.A.unsafe_rawColors.BRAND_260.css,
                          text: em.intl.string(em.t.y2b7CA),
                          className: lg.Ad,
                      })
                    : (0, s.jsx)("img", {
                          src: (0, lo.n)("server_products/storefront/money.gif"),
                          className: lg.TG,
                          alt: "",
                      }),
                n &&
                    (0, s.jsx)(es.D, {
                        className: lg.b,
                        onClick: function (e) {
                            (e.stopPropagation(),
                                (0, n$.Dr)(el.M.SERVER_SHOP_PHANTOM_PREVIEW),
                                lh.default.track(k.HAw.GUILD_SHOP_PREVIEW_CLICK, {
                                    ...(0, la.H$)(t),
                                    action_taken: lA.hN.DISMISS_CHANNEL_ROW,
                                }),
                                (i && a) || (0, eu.bG)(k.BVt.CHANNEL(t, D.Ay.getDefaultChannel(t)?.id)));
                        },
                        "aria-label": em.intl.string(em.t.cpT0Cq),
                        children: (0, s.jsx)(tq.a, { size: "xs", color: "currentColor" }),
                    }),
            ],
        }),
    });
}
function lf(e) {
    let { guild: t, selected: l } = e;
    function i() {
        (lr.w.set(lA.bJ, "true"), (0, eu.pX)(k.BVt.CHANNEL(t.id, eh.VV.GUILD_SHOP)));
    }
    return (0, ld.P)(t)
        ? (0, s.jsx)(lm, { guildId: t.id, selected: l, handleClick: i })
        : (0, s.jsx)(ec.G, {
              id: `shop-${t.id}`,
              renderIcon: (e) => (0, s.jsx)(lc.h, { width: 20, height: 20, className: e }),
              text: em.intl.string(em.t.al5EXL),
              selected: l,
              onClick: i,
              onContextMenu: function (e) {
                  null != t &&
                      (0, e9.L3)(e, async () => {
                          let { default: e } = await n.e("852565").then(n.bind(n, 345332));
                          return (n) => (0, s.jsx)(e, { ...n, guild: t });
                      });
              },
          });
}
var lp = n(308528),
    lC = n(534890),
    lE = n(262763),
    lx = n(499211),
    lN = n(406704),
    l_ = n(747926),
    lI = n(977997),
    lS = n(807632),
    lb = n(37411);
function lG(e) {
    let { thread: t, tabIndex: n } = e,
        l = (0, lS.YG)(t),
        i = (0, lS.IO)(t),
        r = (0, lN._M)(t);
    return l && i && r ? (0, s.jsx)(lj, { thread: t, tabIndex: n }) : null;
}
function lj(e) {
    let { thread: t, tabIndex: n } = e,
        l = (0, u.bG)([lI.A], () => lI.A.isInChannel(t.id), [t.id]),
        { needSubscriptionToAccess: i } = (0, lx.A)(t.id),
        a = r.useCallback(() => {
            lE.A.handleVoiceConnect({ channel: t, connected: l, needSubscriptionToAccess: i, locked: !1 });
        }, [t, l, i]),
        o = r.useCallback(() => {
            (0, l_.JA)(t, !0, lb.H9.CHANNEL_LIST);
        }, [t]);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(ei.m, {
                asContainer: !0,
                text: em.intl.string(em.t["96ANUN"]),
                children: (0, s.jsx)(es.D, {
                    className: ep.Xs,
                    onClick: a,
                    tabIndex: n,
                    "aria-label": em.intl.string(em.t["96ANUN"]),
                    children: (0, s.jsx)(tZ.H, { size: "xs", color: "currentColor", className: ep.gE }),
                }),
            }),
            (0, s.jsx)(ei.m, {
                asContainer: !0,
                text: em.intl.string(em.t.ZXxLQg),
                children: (0, s.jsx)(es.D, {
                    className: ep.Xs,
                    onClick: o,
                    tabIndex: n,
                    "aria-label": em.intl.string(em.t.ZXxLQg),
                    children: (0, s.jsx)(lC.ChatIcon, { size: "xs", color: "currentColor", className: ep.gE }),
                }),
            }),
        ],
    });
}
var lv = n(897898),
    lR = n(152007);
function ly(e) {
    return null != e && e > 0;
}
var lM = n(405018),
    lL = n(428689),
    lT = n(525093);
function lU(e) {
    let { total: t, users: n, videoLimit: l } = e;
    return (0, s.jsxs)("div", {
        className: lT.iE,
        children: [
            (0, s.jsxs)(e3.E, {
                tag: "span",
                color: "text-subtle",
                variant: "text-xs/medium",
                className: ew()(lT.VV, { [lT.Ki]: l, [lT.$G]: n >= 100 }),
                children: [
                    l ? (0, s.jsx)(lL.VideoIcon, { size: "md", color: "currentColor", className: lT.LB }) : null,
                    n.toString().padStart(2, "0"),
                ],
            }),
            (0, s.jsx)(e3.E, {
                tag: "span",
                color: "text-subtle",
                variant: "text-xs/medium",
                className: ew()(lT.X5, { [lT.$G]: t >= 100 }),
                children: t.toString().padStart(2, "0"),
            }),
        ],
    });
}
function lD(e) {
    let { channel: t, video: n, userCount: l } = e,
        { limit: i } = (0, lM.A)(t),
        r = -1,
        a = !1;
    return (
        t.userLimit > 0 && (r = t.userLimit),
        n && i > 0 && ((a = r < 0 || i < r), (r = r > 0 ? Math.min(r, i) : i)),
        (0, s.jsx)(lU, { users: l, total: r, videoLimit: a })
    );
}
var lO = n(146630);
function lP(e) {
    let { mentionsCount: t, isMentionLowImportance: n } = e;
    return (0, s.jsx)("div", {
        className: lO.R,
        "aria-hidden": !0,
        children: (0, s.jsx)(ea.hV, {
            count: t,
            color: n ? h.A.colors.BACKGROUND_MOD_STRONG.css : h.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
        }),
    });
}
var lV = n(588224),
    lw = n(447199);
function lH(e) {
    let { thread: t, countInVoice: n, hasVideo: l, mentionCount: i, isMentionLowImportance: r } = e,
        a = n > 0 && t.userLimit > 0,
        o = ly(i);
    return a || o
        ? (0, s.jsxs)("div", {
              className: ep.yW,
              children: [
                  a ? (0, s.jsx)(lD, { userCount: n, video: l, channel: t }) : null,
                  o ? (0, s.jsx)(lP, { mentionsCount: i, isMentionLowImportance: r }) : null,
              ],
          })
        : null;
}
function lB(e) {
    let { style: t, withGuildIcon: n, inverted: l } = e,
        i = { className: ew()(lw.GI, { [lw.a7]: n }, { [lw.BJ]: l }), style: t },
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
let lk = r.memo(function (e) {
        let { thread: t, isSelectedChannel: l, isSelectedVoice: i, isLast: a, withGuildIcon: o } = e,
            c = (0, u.bG)([tc.Ay], () => tc.Ay.getVoiceStatesForChannel(t), [t]),
            h = (0, u.bG)([lI.A], () => lI.A.hasVideo(t.id)),
            A = (0, t$.Ay)(t),
            {
                unread: g,
                mentionCount: m,
                isMentionLowImportance: f,
            } = (0, u.cf)([n3.Ay], () => ({
                unread: n3.Ay.hasUnread(t.id),
                mentionCount: n3.Ay.getMentionCount(t.id),
                isMentionLowImportance: n3.Ay.getIsMentionLowImportance(t.id),
            })),
            p = (0, u.bG)([lR.A], () => lR.A.isMuted(t.id)),
            C = r.useCallback(
                (e) => {
                    (0, l_.JA)(t, !e.shiftKey, lb.H9.CHANNEL_LIST);
                },
                [t],
            ),
            E = r.useCallback(() => {
                lp.A.preload(t.guild_id, t.id);
            }, [t.guild_id, t.id]),
            x = r.useCallback(
                (e) => {
                    (0, lv.A)(e, t);
                },
                [t],
            ),
            N = r.useCallback(
                (e) => {
                    let l = T.A.getChannel(t.id);
                    null != l &&
                        (0, e9.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("926132"),
                                n.e("393336"),
                                n.e("391763"),
                                n.e("955557"),
                                n.e("691671"),
                                n.e("603998"),
                                n.e("947502"),
                                n.e("343266"),
                                n.e("965789"),
                                n.e("412255"),
                                n.e("896804"),
                                n.e("63340"),
                                n.e("65200"),
                                n.e("285802"),
                                n.e("703869"),
                                n.e("51212"),
                                n.e("584615"),
                            ]).then(n.bind(n, 612826));
                            return (t) => (0, s.jsx)(e, { ...t, channel: l });
                        });
                },
                [t.id],
            ),
            _ = null == c ? 0 : c.length,
            { role: I, ...S } = (0, d.rm)(t.id),
            b = r.useRef(null),
            G =
                m > 0
                    ? em.intl.formatToPlainString(em.t["ZL7+I6"], { channelName: A, mentionCount: m })
                    : g
                      ? em.intl.formatToPlainString(em.t.YlVvmc, { channelName: A })
                      : em.intl.formatToPlainString(em.t["0nZpiF"], { channelName: A });
        return (0, s.jsxs)("li", {
            role: I,
            className: ew()(ep.fx, { [ep.wH]: l }),
            children: [
                (0, s.jsx)(lB, { withGuildIcon: o }),
                a
                    ? null
                    : (0, s.jsx)(lB, {
                          withGuildIcon: o,
                          inverted: !0,
                          style: { transform: "rotateX(180deg) translateY(-9px)" },
                      }),
                (0, s.jsx)(tW.vN, {
                    focusTarget: b,
                    ringTarget: b,
                    offset: { top: 2, bottom: 2, right: 4 },
                    children: (0, s.jsxs)("div", {
                        className: ew()(ep.Ki, nX.iE, nX.ZS, {
                            [nX.J1]: l,
                            [nX.F4]: !l && p,
                            [nX.V2]: !p && !l && g,
                            [nX.lY]: o,
                        }),
                        onMouseDown: E,
                        onContextMenu: N,
                        children: [
                            !g || p || l ? null : (0, s.jsx)("div", { className: ew()(nX.gy, nX.WS) }),
                            (0, s.jsx)(es.D, {
                                ...S,
                                innerRef: b,
                                className: nX.nf,
                                onClick: C,
                                onAuxClick: x,
                                "aria-label": G,
                                focusProps: { enabled: !1 },
                                children: (0, s.jsxs)("div", {
                                    className: ew()(nX.Y5, nX.__invalid_threadMainContent),
                                    children: [
                                        (0, s.jsx)(e3.E, {
                                            variant: "text-sm/medium",
                                            color: "none",
                                            className: nX.UU,
                                            children: (0, s.jsx)(tF.A, { "aria-hidden": !0, children: A }),
                                        }),
                                        (0, s.jsxs)("div", {
                                            className: nX.Y_,
                                            onClick: nM.dG,
                                            onKeyDown: nM.dG,
                                            children: [
                                                (0, s.jsx)(lH, {
                                                    thread: t,
                                                    countInVoice: _,
                                                    hasVideo: h,
                                                    mentionCount: m,
                                                    isMentionLowImportance: f,
                                                }),
                                                (0, s.jsx)(lG, { thread: t, tabIndex: S.tabIndex }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                }),
                (0, s.jsx)(lV.A, {
                    channel: t,
                    collapsed: !i && 1 !== c.length,
                    collapsedMax: 6,
                    voiceStates: c,
                    isThread: !0,
                }),
            ],
        });
    }),
    lF = r.memo(function (e) {
        let { channel: t, selectedChannel: n, selectedVoiceChannelId: l, sortedThreadIds: i, withGuildIcon: r } = e,
            a = (0, t$.Ay)(t),
            { density: o } = (0, C.wR)(),
            d = (0, u.yK)([T.A], () => i.map((e) => T.A.getChannel(e)).filter(tu.Vq), [i]),
            c = (0, u.bG)([tc.Ay], () => {
                let e = d[d.length - 1];
                if (null == e) return 0;
                let t = tc.Ay.getVoiceStates(e.guild_id)[e.id];
                return null == t || 0 === t.length ? 0 : l !== e.id ? 40 : 32 * t.length + 8;
            });
        return (0, s.jsx)("li", {
            className: lw.kL,
            children: (0, s.jsxs)("ul", {
                role: "group",
                "aria-label": em.intl.formatToPlainString(em.t.EiyIi6, { channelName: a }),
                children: [
                    (0, s.jsx)("div", {
                        className: ew()(lw.eh, { [lw.ET]: r }),
                        style: { bottom: ("cozy" === o ? 28 : 24) + c },
                    }),
                    d.map((e, t) =>
                        (0, s.jsx)(
                            lk,
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
var lK = n(922016),
    lz = n(367513),
    lW = n(296216),
    lY = n(963027),
    lX = n(202384),
    lq = n(51758),
    lZ = n(139033),
    lJ = n(305866),
    l$ = n(123292),
    lQ = n(830215),
    l0 = n(315982),
    l1 = n(480900),
    l3 = n(557722),
    l2 = n(834942),
    l9 = n(287809),
    l5 = n(53516),
    l7 = n(648580),
    l6 = (((l = {})[(l.VOICE = 0)] = "VOICE"), l);
let l4 = function (e) {
    let { type: t, guildId: l, closePopout: i } = e,
        r = (0, en.GV)(),
        a = (0, u.bG)([l2.A], () => l2.A.getCheck(l), [l]),
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
                let e = em.intl.string(em.t["6zY8BI"]),
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
                    ? { header: e, body: em.intl.string(em.t.IRxUlG), buttonText: em.intl.string(em.t.fiNVin) }
                    : l
                      ? { header: e, body: em.intl.string(em.t.vW8iUF), buttonText: em.intl.string(em.t["50gfOv"]) }
                      : i
                        ? { header: e, body: em.intl.string(em.t.vdSOpz), buttonText: em.intl.string(em.t.lm1UKt) }
                        : s
                          ? {
                                header: e,
                                body: em.intl.formatToPlainString(em.t.v1ktYb, { min: k.$8o.MEMBER_AGE }),
                                buttonText: em.intl.string(em.t.BddRzS),
                            }
                          : r
                            ? {
                                  header: e,
                                  body: em.intl.formatToPlainString(em.t.sncw41, { min: k.$8o.ACCOUNT_AGE }),
                                  buttonText: em.intl.string(em.t.BddRzS),
                              }
                            : a && null != o && null === o.tags.guild_connections
                              ? {
                                    header: e,
                                    body: em.intl.format(em.t.MZbCuG, { roleName: `@${o.name}` }),
                                    buttonText: em.intl.string(em.t["6Ge2LG"]),
                                }
                              : { header: e, body: null, buttonText: null };
            }
        })(t, a);
    return null == g || null == m
        ? null
        : (0, s.jsxs)(lJ.l, {
              className: l7.kL,
              "aria-labelledby": r,
              children: [
                  (0, s.jsx)("img", { alt: "", className: l7.Sl, src: n(303528) }),
                  (0, s.jsxs)("div", {
                      className: l7.Qs,
                      children: [
                          (0, s.jsx)(n7.D, { variant: "heading-md/semibold", id: r, children: g }),
                          (0, s.jsx)(e3.E, { color: "text-default", variant: "text-sm/normal", children: m }),
                          (0, s.jsxs)("div", {
                              className: l7.UD,
                              children: [
                                  null != f
                                      ? (0, s.jsx)("div", {
                                            "data-button-hoisted-classname-wrapper": !0,
                                            className: l7.FS,
                                            children: (0, s.jsx)(tK.$, {
                                                variant: "primary",
                                                text: f,
                                                onClick: function () {
                                                    (o
                                                        ? l0.R()
                                                        : c
                                                          ? (0, I.openModalLazy)(
                                                                async () => {
                                                                    let { default: e } = await Promise.all([
                                                                        n.e("590275"),
                                                                        n.e("766806"),
                                                                        n.e("14775"),
                                                                        n.e("989545"),
                                                                        n.e("991531"),
                                                                        n.e("311493"),
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
                                                            ? (lQ.A.verifyResend(),
                                                              (0, lZ.A)({
                                                                  title: em.intl.string(em.t.LykQYk),
                                                                  subtitle: em.intl.format(em.t.azKEPy, {
                                                                      email: l9.default.getCurrentUser()?.email,
                                                                  }),
                                                              }))
                                                            : h && null != A && (0, l1.b)(A, l),
                                                        i());
                                                },
                                            }),
                                        })
                                      : null,
                                  o || c || d
                                      ? (0, s.jsx)(l$.Q, {
                                            onClick: i,
                                            text: em.intl.string(em.t.oEAioF),
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
var l8 = n(824865),
    ie = n(378570),
    it = n(790535),
    il = n(113783),
    ii = n(96566),
    is = n(280450),
    ir = n(312006),
    ia = n(505543),
    io = n(994500),
    id = n(685399),
    ic = n(475889),
    iu = n(693879),
    ih = n(435470),
    iA = n(35275),
    ig = n(300596);
function im(e) {
    let { locked: t } = e;
    return (0, s.jsx)("div", {
        className: ew()(ep.Xs, ig.U),
        children: (0, s.jsx)(iA.A, {
            className: ep.gE,
            color: t ? h.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css : void 0,
        }),
    });
}
var ip = n(863005),
    iC = n(669715),
    iE = n(769015),
    ix = n(217223);
function iN(e) {
    let { className: t, embeddedApps: n, muted: l } = e;
    if (n.length <= 0) return null;
    {
        if (1 === n.length)
            return (0, s.jsx)("div", {
                className: ew()(ix.kL, t, l && ix.F4),
                children: (0, s.jsx)(iE.A, { game: n[0].application, className: ix.wK }),
            });
        let e = n.length - 1;
        return (0, s.jsxs)("div", {
            className: ew()(ix.kL, t, l && ix.F4),
            children: [
                (0, s.jsx)(iE.A, { game: n[0].application, className: ix.wK }),
                2 === n.length
                    ? (0, s.jsx)(iE.A, { game: n[1].application, className: ix.wK })
                    : (0, s.jsx)(e3.E, {
                          className: ix.ju,
                          variant: "text-xs/bold",
                          color: "interactive-text-active",
                          children: `+${e}`,
                      }),
            ],
        });
    }
}
var i_ = n(905695);
function iI(e) {
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
        m = (0, u.bG)([n3.Ay], () => n3.Ay.getMentionCount(t.id)),
        f = (0, u.bG)([n3.Ay], () => n3.Ay.getIsMentionLowImportance(t.id)),
        p = (0, id.Ay)(t),
        C = (0, u.bG)([P.A], () => !P.A.can(k.xBc.CONNECT, t)),
        E = (0, ic.H)(t),
        x = (0, u.bG)([lI.A], () => lI.A.hasVideo(t.id)),
        N = (0, ii.qT)(t.id) && t.isGuildStageVoice(),
        _ = (function (e) {
            let { channel: t, locked: n, video: l, selected: i } = e;
            return (
                (function (e) {
                    let { channel: t, video: n, considerMaxStageVoiceUserLimit: l = !0 } = e,
                        { limit: i } = (0, lM.A)(t),
                        s = -1;
                    return (t.userLimit > 0 && (s = t.userLimit),
                    n && i > 0 && (s = s > 0 ? Math.min(s, i) : i),
                    l && s === k.RCc)
                        ? 0
                        : s;
                })({ channel: t, video: l }) > 0 &&
                !n &&
                !i
            );
        })({ channel: t, locked: C, video: (x || N) && null == E, selected: n }),
        I = (0, u.bG)([ip.A], () => ip.A.getNewThreadCount(t.guild_id, t.id)),
        S = (0, ih.ed)(t.guild_id, t.id),
        b = (0, u.bG)([O.A], () => O.A.getGuild(t.guild_id)?.features.has(k.GuildFeatures.COMMUNITY) ?? !1);
    if (ly(m)) return (0, s.jsx)(lP, { mentionsCount: m, isMentionLowImportance: f });
    if (o) return (0, s.jsx)(im, { locked: d });
    if (c)
        return (0, s.jsx)(ea.Lp, { text: em.intl.string(em.t.y2b7CA), color: h.A.colors.BADGE_BACKGROUND_BRAND.css });
    if (!A && g === nL.e.ALL_MESSAGES && t.isForumLikeChannel() && null != I && I > 0)
        return (0, s.jsx)(e3.E, {
            variant: "text-xs/semibold",
            color: "text-brand",
            className: i_.O,
            children: em.intl.format(em.t.GkAbqY, { count: (0, ea.Gu)(I) }),
        });
    if (!A && t.isForumLikeChannel() && null != S && S > 0)
        return (0, s.jsx)(e3.E, { variant: "text-xs/semibold", color: "text-muted", children: (0, ea.Gu)(S) });
    let G = i?.length ?? 0;
    return null != r && r && _
        ? (0, s.jsx)(lD, { userCount: G, video: x || N, channel: t })
        : l && (0, iC.t)(i) && b
          ? (0, s.jsx)(ea.Lp, { text: em.intl.string(em.t.dI3q4h), color: h.A.unsafe_rawColors.RED_400.css })
          : null != E
            ? (0, s.jsx)(iu.z, { textColor: "text-feedback-positive", entry: { start: E } })
            : null != a && a && p.length > 0
              ? (0, s.jsx)(iN, { embeddedApps: p, muted: A })
              : null;
}
var iS = n(714619);
class ib extends ny {
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
        return (0, nu.Pd)(e, lI.A, O.A);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return ep.ZS;
        if (null != t)
            if (e > t) return ep.mU;
            else return ep.TR;
        return ep.fx;
    }
    handleClick = () => {
        let {
                channel: e,
                locked: t,
                connected: n,
                unverifiedAccount: l,
                isSuggestedSection: i,
                openChatOnClick: s,
            } = this.props,
            r = e.getGuildId();
        (null != r && (0, lq.V)(r) && (0, lX.Ze)(r),
            l && this.setState({ shouldShowGuildVerificationPopout: !0 }),
            t ||
                n ||
                e.isRoleSubscriptionTemplatePreviewChannel() ||
                (s ? lz.A.updateChatOpen(e.id, !0) : (0, it.av)(e)),
            __OVERLAY__ || (0, ie.iN)(e.id, i ? { source: l8.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0));
    };
    handleClickChat = () => {
        let { channel: e, locked: t, isSuggestedSection: n } = this.props;
        __OVERLAY__ || t || (0, ie.iN)(e.id, n ? { source: l8.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            l = O.A.getGuild(t.getGuildId());
        null != l &&
            (0, e9.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("926132"),
                    n.e("146652"),
                    n.e("993103"),
                    n.e("393336"),
                    n.e("893190"),
                    n.e("391763"),
                    n.e("955557"),
                    n.e("474610"),
                    n.e("535321"),
                    n.e("603998"),
                    n.e("550033"),
                    n.e("947502"),
                    n.e("343266"),
                    n.e("309004"),
                    n.e("965789"),
                    n.e("412255"),
                    n.e("63340"),
                    n.e("430997"),
                    n.e("379995"),
                    n.e("537796"),
                    n.e("544058"),
                    n.e("591377"),
                    n.e("35723"),
                    n.e("566378"),
                    n.e("256372"),
                    n.e("29542"),
                    n.e("419690"),
                    n.e("426792"),
                    n.e("248804"),
                    n.e("318663"),
                    n.e("599990"),
                    n.e("599854"),
                ]).then(n.bind(n, 119357));
                return (n) => (0, s.jsx)(e, { ...n, channel: t, guild: l });
            });
    };
    renderVoiceUsers() {
        let { channel: e, collapsed: t, tabIndex: n, speakerVoiceStates: l, numAudience: i } = this.props;
        return (0, s.jsx)(lV.A, { channel: e, voiceStates: l, collapsed: t, tabIndex: n, numAudience: i });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        if (t)
            return (0, s.jsx)(l4, {
                type: l6.VOICE,
                guildId: e.guild_id,
                closePopout: this.closeGuildVerificationPopout,
            });
        throw Error("VoiceChannel.renderPopout: There must always be something to render");
    };
    renderOpenChatButton = () => {
        let { channel: e, locked: t, forceShowButtons: n } = this.props;
        if (!t)
            return (0, s.jsx)(ei.m, {
                asContainer: !0,
                text: em.intl.string(em.t.ZXxLQg),
                children: (0, s.jsx)(es.D, {
                    className: ew()(ep.Xs, n ? ep.Tf : null),
                    onClick: () => {
                        (lz.A.updateChatOpen(e.id, !0), this.handleClickChat());
                    },
                    "aria-label": em.intl.string(em.t.ZXxLQg),
                    children: (0, s.jsx)(lC.ChatIcon, { size: "xs", color: "currentColor", className: ep.gE }),
                }),
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, s.jsx)("div", { className: ep.yW, children: e });
    }
    getTooltipText = () => {
        let { connected: e } = this.props;
        return this.isFull() && !e ? em.intl.string(em.t.rZfiNq) : null;
    };
    renderSubtitle = () => {
        let e = this.props.stageInstance?.topic;
        return null == e ? null : (0, s.jsx)(tF.A, { children: e });
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
                className: ew()(this.getModeClass(), { [ep.r9]: this.isDisabled() }),
                "data-dnd-name": (0, t$.m1)(e, l9.default, io.A),
                children: [
                    (0, s.jsx)(lK.Y, {
                        targetElementRef: this.channelItemRef,
                        position: "right",
                        renderPopout: this.renderPopout,
                        spacing: 17,
                        onRequestClose: this.closeGuildVerificationPopout,
                        shouldShow: C,
                        children: () =>
                            (0, s.jsx)(ei.m, {
                                text: this.getTooltipText(),
                                children: (0, s.jsxs)(nM.Ay, {
                                    ref: this.channelItemRef,
                                    className: ep.Ki,
                                    iconClassName: ew()({ [iS.G]: null != u }),
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
                                    "aria-label": (0, lY.Ay)({
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
        return (c && (E = a(E)), d && (E = i(r(E))), E);
    }
}
let iG = $((0, lW.F)(ib));
function ij(e) {
    var t;
    let n,
        l,
        { guild: i, channel: r, disableSorting: a, isFavoriteCategory: o, collapsed: d, voiceStates: c } = e,
        h = (0, u.cf)([n3.Ay], () => ({ unread: n3.Ay.hasUnread(r.id), mentionCount: n3.Ay.getMentionCount(r.id) })),
        A = (0, u.bG)([w.Ay], () => w.Ay.resolveUnreadSetting(r)),
        g = (0, u.cf)([T.A, l2.A, P.A], () => {
            let e = T.A.getChannel(r.parent_id),
                t = l2.A.getCheck(r.guild_id);
            return {
                canManageChannel: null != i && P.A.can(k.xBc.MANAGE_CHANNELS, r),
                canReorderChannel:
                    !0 !== a &&
                    ((0, R.ai)(i.id) ||
                        (null != e ? P.A.can(k.xBc.MANAGE_CHANNELS, e) : P.A.can(k.xBc.MANAGE_CHANNELS, i))),
                canMoveMembers: P.A.can(k.xBc.MOVE_MEMBERS, r),
                locked: !P.A.can(k.xBc.CONNECT, r),
                bypassLimit: P.A.can(k.xBc.MOVE_MEMBERS, r),
                unverifiedAccount: !t.canChat,
            };
        }),
        m = (0, u.bG)([L.A], () => L.A.isCollapsed(r.parent_id)),
        f =
            ((t = r.id),
            (n = (0, ia.A)(t)),
            (l = (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return (0, u.cf)(
                    [ir.Ay, is.default],
                    () => {
                        let n = is.default.getId();
                        return ir.Ay.getPermissionsForUser(n, e, t);
                    },
                    [e, t],
                );
            })(t, !0).moderator),
            !n && l ? 1 : 0),
        p = (0, u.bG)([n_.A], () => n_.A.getStageInstanceByChannel(r.id), [r.id]),
        C = (0, il.zy)(r.id, tm.ip.AUDIENCE),
        { isSubscriptionGated: E, needSubscriptionToAccess: x } = (0, lx.A)(r.id),
        N = (0, u.bG)([w.Ay], () => w.Ay.isFavorite(i.id, r.id)),
        _ = (0, ii.xn)(r.id),
        I = iI({
            channel: r,
            isChannelSelected: !1,
            isChannelCollapsed: d,
            voiceStates: c,
            isSubscriptionGated: E,
            needSubscriptionToAccess: x,
            enableConnectedUserLimit: _ || (r.userLimit > 0 && r.userLimit < k.RCc),
        }),
        S = e.connected && null == I,
        b = i.features.has(k.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
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
        forceShowButtons: S,
        openChatOnClick: b,
        channelInfo: I,
        resolvedUnreadSetting: A,
    });
}
function iv(e, t) {
    let n = t.getGuildId();
    if (null == n) throw Error("TextChannel, preloadChannel: Channel does not have a guildId");
    lp.A.preload(n, t.id);
}
let iR = $(
        class extends ny {
            handleContextMenu = (e) => {
                let { channel: t } = this.props,
                    l = O.A.getGuild(t.getGuildId());
                null != l &&
                    (0, e9.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("926132"),
                            n.e("603998"),
                            n.e("309004"),
                            n.e("412255"),
                            n.e("63340"),
                            n.e("430997"),
                            n.e("379995"),
                            n.e("544058"),
                            n.e("715669"),
                        ]).then(n.bind(n, 313140));
                        return (n) => (0, s.jsx)(e, { ...n, channel: t, guild: l });
                    });
            };
            handleClick = (e) => {
                let t = e.getGuildId();
                if (null == t) throw Error("TextChannel, transitionTo: Channel does not have a guildId");
                (0, eu.pX)(k.BVt.CHANNEL(t, e.id), {
                    state: {
                        analyticsSource: {
                            page: k.liQ.GUILD_CHANNEL,
                            section: k.JJy.CHANNEL_LIST,
                            object: k.ZSU.CHANNEL,
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
                        className: ew()(this.getClassName(), { [ep.r9]: this.isDisabled() }),
                        "data-dnd-name": (0, t$.m1)(e, l9.default, io.A),
                        children: (0, s.jsxs)(nM.Ay, {
                            className: ep.Ki,
                            channel: e,
                            selected: t,
                            onClick: this.handleClick,
                            onMouseDown: iv,
                            onContextMenu: this.handleContextMenu,
                            connectDragPreview: r ? i : null,
                            "aria-label": (0, lY.Ay)({ channel: e }),
                            resolvedUnreadSetting: nL.e.ONLY_MENTIONS,
                            children: [this.renderInviteButton(), this.renderEditButton()],
                        }),
                    });
                return r ? n(l(a)) : a;
            }
        },
    ),
    iy = r.memo(function (e) {
        let { channel: t, guild: n, disableSorting: l } = e,
            i = (0, u.cf)([T.A, P.A], () => {
                let e = T.A.getChannel(t.parent_id);
                return {
                    canManageChannel: P.A.can(k.xBc.MANAGE_CHANNELS, t),
                    canReorderChannel:
                        !0 !== l && null != e ? P.A.can(k.xBc.MANAGE_CHANNELS, e) : P.A.can(k.xBc.MANAGE_CHANNELS, n),
                };
            });
        return (0, s.jsx)(iR, { ...i, ...e });
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
            return { subtitle: em.intl.string(em.t.Pa817q) };
    }
    return null;
}
var iD = n(3322),
    iO = n(696451),
    iP = n(763827),
    iV = n(56059),
    iw = n(163328),
    iH = n(778712),
    iB = n(730134),
    ik = n(707539),
    iF = n(486020),
    iK = n(98098);
function iz(e) {
    let { channel: t } = e,
        l = (0, u.yK)([ip.A, n3.Ay, P.A], () => {
            let e = ip.A.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
            return o()(ip.A.getActiveJoinedThreadsForParent(t.guild_id, t.id))
                .values()
                .map((e) => e.channel)
                .concat(o().values(ip.A.getActiveUnjoinedThreadsForParent(t.guild_id, t.id)))
                .filter((t) => !(t.id in e) && P.A.can(k.xBc.VIEW_CHANNEL, t))
                .sort((e, t) => {
                    let n = n3.Ay.lastMessageId(e.id),
                        l = n3.Ay.lastMessageId(t.id);
                    return tA.default.compare(n, l);
                })
                .reverse()
                .value();
        }),
        i = t.isForumLikeChannel() ? 5 : 3,
        a = t.isForumLikeChannel() ? iV.b : iw.y;
    return (
        r.useEffect(() => {
            (0, ik.TE)();
        }, []),
        (0, s.jsxs)("div", {
            className: iK.SW,
            children: [
                (0, s.jsx)(e3.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: iK.DD,
                    children: t.isForumLikeChannel() ? em.intl.string(em.t.ioVdO2) : em.intl.string(em.t.VNYs2v),
                }),
                (0, s.jsxs)("div", {
                    className: iK.p_,
                    children: [
                        l
                            .slice(0, t.isForumLikeChannel() ? l.length : i)
                            .map((e) => (0, s.jsx)(iW, { thread: e }, e.id))
                            .filter((e) => r.isValidElement(e))
                            .slice(0, i),
                        (0, s.jsxs)(es.D, {
                            className: iK.nM,
                            onClick: function () {
                                t.isForumLikeChannel()
                                    ? (0, ie.iN)(t.id)
                                    : (0, I.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([
                                              n.e("327744"),
                                              n.e("852197"),
                                              n.e("225307"),
                                              n.e("332165"),
                                              n.e("618416"),
                                              n.e("524434"),
                                              n.e("849162"),
                                              n.e("802598"),
                                              n.e("242266"),
                                              n.e("552705"),
                                              n.e("481647"),
                                              n.e("776602"),
                                              n.e("140402"),
                                              n.e("139970"),
                                              n.e("179049"),
                                              n.e("294857"),
                                              n.e("713567"),
                                              n.e("242323"),
                                              n.e("444567"),
                                              n.e("695170"),
                                              n.e("49716"),
                                              n.e("751743"),
                                              n.e("384042"),
                                              n.e("65225"),
                                          ]).then(n.bind(n, 126768));
                                          return (n) => (0, s.jsx)(e, { channel: t, ...n });
                                      });
                            },
                            children: [
                                (0, s.jsx)("div", {
                                    className: iK.R4,
                                    children: (0, s.jsx)(a, { size: "custom", className: iK.Kk }),
                                }),
                                (0, s.jsx)("div", {
                                    className: iK.Pf,
                                    children: (0, s.jsx)(e3.E, {
                                        variant: "text-sm/normal",
                                        color: "none",
                                        children: em.intl.string(em.t["4qdZ93"]),
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
function iW(e) {
    let { thread: t } = e,
        n = (0, u.bG)([l9.default], () => l9.default.getUser(t.ownerId)),
        l = (0, ik.JO)(t);
    return (0, s.jsxs)(es.D, {
        className: iK.nM,
        onClick: function (e) {
            (0, l_.JA)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, lb.H9.POPOUT);
        },
        children: [
            (0, s.jsx)("div", {
                className: iK.R4,
                children:
                    null == n
                        ? (0, s.jsx)("img", {
                              className: iK.my,
                              src: iF.Ay.getDefaultAvatarURL(void 0, void 0),
                              alt: "",
                          })
                        : (0, s.jsx)(iB.A, { className: iK.my, user: n, size: iH._3.SIZE_16 }),
            }),
            (0, s.jsxs)("div", {
                className: iK.Pf,
                children: [
                    (0, s.jsx)(e3.E, { className: iK.UU, variant: "text-sm/normal", color: "none", children: t.name }),
                    (0, s.jsx)(e3.E, { variant: "text-sm/normal", color: "text-muted", children: "\u2022" }),
                    (0, s.jsx)(e3.E, {
                        className: iK.vE,
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: (0, ik.aK)(l),
                    }),
                ],
            }),
        ],
    });
}
var iY = n(138298),
    iX = n(940382);
function iq(e) {
    let { channel: t, isSuggestedSection: n } = e;
    return (0, s.jsx)(ei.m, {
        asContainer: !0,
        text: em.intl.string(em.t.ZXxLQg),
        children: (0, s.jsx)(es.D, {
            className: ep.Xs,
            onClick: () => {
                (iY.A.openChannelAsSidebar({
                    guildId: t.getGuildId(),
                    channelId: t.id,
                    baseChannelId: t.id,
                    details: { type: iX.kk.CHAT },
                }),
                    (0, ie.iN)(t.id, n ? { source: l8.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0));
            },
            "aria-label": em.intl.string(em.t.ZXxLQg),
            children: (0, s.jsx)(lC.ChatIcon, { size: "xs", color: "currentColor", className: ep.gE }),
        }),
    });
}
var iZ = n(364522),
    iJ = n(302959),
    i$ = n(35903),
    iQ = n(970928),
    i0 = n(427262),
    i1 = n(641635);
let i3 = no.DN.SIZE_24;
function i2(e) {
    let { activity: t, embeddedApp: n } = e,
        l = t?.assets,
        i = t?.application_id;
    if (null == l || (null == l.large_image && null == l.small_image)) {
        let e = iF.Ay.getApplicationIconURL({ id: n.application.id, icon: n.application.icon }),
            t = n.application.name;
        return (0, s.jsx)(ei.m, {
            text: t,
            position: "top",
            asContainer: !0,
            children: (0, s.jsx)("img", { alt: t, src: e, className: i1.P3 }),
        });
    }
    let r = l.large_image ?? l.small_image;
    return null != r
        ? (0, s.jsx)("img", { alt: l.large_text ?? "", src: (0, iQ.uD)(i, r, [128, 128]), className: i1.P3 })
        : null;
}
function i9(e) {
    let { activity: t, embeddedApp: n, channel: l } = e,
        i = Array.from(n.embeddedActivity.userIds),
        r = (0, u.yK)([l9.default], () => i.map((e) => l9.default.getUser(e)).filter(tu.Vq));
    return (0, s.jsx)("div", {
        className: i1.ec,
        children: (0, s.jsxs)("div", {
            className: i1.Wh,
            children: [
                (0, s.jsx)(i2, { activity: t, embeddedApp: n }),
                (0, s.jsxs)("div", {
                    className: i1.X0,
                    children: [
                        (0, s.jsx)(n7.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            className: i1.wx,
                            lineClamp: 1,
                            children: n.application.name,
                        }),
                        t?.details != null &&
                            "" !== t.details &&
                            (0, s.jsx)(e3.E, {
                                variant: "text-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.details,
                            }),
                        t?.state != null &&
                            "" !== t.state &&
                            (0, s.jsx)(e3.E, {
                                variant: "text-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.state,
                            }),
                        i.length > 0 &&
                            (0, s.jsx)(no.Ay, {
                                className: i1.TN,
                                guildId: l.guild_id,
                                users: r,
                                size: i3,
                                max: 7,
                                renderUser: function (e) {
                                    if (null == e || e === no.mt) return null;
                                    let t = i0.Ay.getName(e);
                                    return (0, s.jsx)(
                                        ei.m,
                                        {
                                            asContainer: !0,
                                            text: t,
                                            position: "bottom",
                                            children: (0, s.jsx)("img", {
                                                src: e.getAvatarURL(l.guild_id, i3),
                                                alt: t,
                                                className: i1.my,
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
var i5 = n(584960);
function i7(e) {
    let { channel: t, presenceActivity: n, embeddedApp: l, onAction: i } = e,
        r = Array.from(l.embeddedActivity.userIds),
        a = (0, u.bG)([l9.default], () => l9.default.getUser(r[0]));
    return null == a
        ? null
        : (0, s.jsxs)("div", {
              className: i5.Eb,
              children: [
                  (0, s.jsx)("div", {
                      className: i5.Il,
                      children: (0, s.jsx)(i9, { activity: n, embeddedApp: l, channel: t }),
                  }),
                  (0, s.jsx)("div", {
                      className: i5.M4,
                      children: (0, s.jsx)(i$.A, {
                          type: iJ.M.VOICE_CHANNEL,
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
var i6 = n(713654),
    i4 = n(744399);
function i8(e) {
    let { channel: t } = e,
        n = (0, u.bG)([O.A], () => O.A.getGuild(t.guild_id)),
        l = (0, t$.Ay)(t),
        i = (0, i6.gU)(t, n);
    return null == i
        ? null
        : (0, s.jsxs)("div", {
              className: i4.hY,
              children: [
                  (0, s.jsx)(i, { className: i4.p }),
                  (0, s.jsx)(e3.E, {
                      variant: "text-md/semibold",
                      color: "interactive-text-default",
                      className: i4.HA,
                      children: l,
                  }),
              ],
          });
}
var se = n(220650);
function st(e) {
    let { channel: t, onAction: n } = e,
        l = (0, id.Ay)(t),
        i = Array.from((0, id.Rz)(l).values());
    return 0 === i.length
        ? null
        : (0, s.jsxs)(iZ.Ip, {
              className: se.kL,
              children: [
                  (0, s.jsx)("div", { className: se.oT, children: (0, s.jsx)(i8, { channel: t }) }),
                  (0, s.jsx)("div", { className: se.zN }),
                  i.map((e, l) =>
                      (0, s.jsx)(
                          i7,
                          { embeddedApp: e, presenceActivity: e.presenceActivity ?? void 0, channel: t, onAction: n },
                          l,
                      ),
                  ),
              ],
          });
}
var sn = n(662980);
function sl(e) {
    let { channel: t, transitionExtras: n } = e,
        l = em.intl.string(em.t.ZXxLQg);
    return (0, s.jsx)(ei.m, {
        asContainer: !0,
        text: l,
        children: (0, s.jsx)(es.D, {
            className: ep.Xs,
            onClick: function () {
                ((0, sn.T)(t.id, !0), (0, ie.iN)(t.id, n));
            },
            "aria-label": l,
            children: (0, s.jsx)(lC.ChatIcon, { size: "xs", color: "currentColor", className: ep.gE }),
        }),
    });
}
class si extends ny {
    state = { shouldShowThreadsPopout: !1, shouldShowActivities: !1, isMenuItemPopoverVisible: !1 };
    channelItemRef = r.createRef();
    assignRef = (e, t) => {
        null != e && (e.current = t);
    };
    setChannelItemRef = (e) => {
        ((this.channelItemRef.current = e), this.assignRef(this.props.channelItemRef, e));
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
        (this.resetTextChannelPopoutTimers(),
            (this.exitTimer = setTimeout(() => {
                (this.state.shouldShowActivities && this.setState({ shouldShowActivities: !1 }),
                    this.state.shouldShowThreadsPopout && this.setState({ shouldShowThreadsPopout: !1 }));
            }, 250)));
    };
    handleThreadsPopoutClose = () => {
        (this.resetTextChannelPopoutTimers(), this.setState({ shouldShowThreadsPopout: !1 }));
    };
    handleActivitiesPopoutClose = () => {
        (this.resetTextChannelPopoutTimers(), this.setState({ shouldShowActivities: !1 }));
    };
    handleMenuItemPopoverVisibilityChange = (e) => {
        this.setState({ isMenuItemPopoverVisible: e });
    };
    handleClosePopout = () => {
        (this.state.shouldShowActivities && this.handleActivitiesPopoutClose(),
            this.state.shouldShowThreadsPopout && this.handleThreadsPopoutClose());
    };
    handleMouseDown = () => {
        (this.handleActivitiesPopoutClose(), this.handleThreadsPopoutClose());
        let { channel: e } = this.props,
            t = e.getGuildId();
        lp.A.preload(t ?? k.ME, e.id);
    };
    renderPopout = (e) => {
        let { channel: t, sorting: n, embeddedApps: l, channelIsContentGated: i } = this.props,
            { shouldShowActivities: r } = this.state;
        return t.isModeratorReportChannel() || i
            ? null
            : null != l && l.length > 0 && r && !n
              ? (0, s.jsx)(st, { onAction: this.handleActivitiesPopoutClose, channel: t })
              : (0, s.jsx)(iz, { ...e, channel: this.props.channel });
    };
    componentWillUnmount() {
        this.resetTextChannelPopoutTimers();
    }
    resetTextChannelPopoutTimers() {
        (null != this.enterTimer && (clearTimeout(this.enterTimer), (this.enterTimer = null)),
            null != this.exitTimer && (clearTimeout(this.exitTimer), (this.exitTimer = null)));
    }
    handleContextMenu = (e) => {
        let { channel: t } = this.props;
        if (t.type === k.rbe.GROUP_DM)
            return void (0, e9.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("926132"),
                    n.e("146652"),
                    n.e("393336"),
                    n.e("893190"),
                    n.e("391763"),
                    n.e("955557"),
                    n.e("947502"),
                    n.e("965789"),
                    n.e("368530"),
                    n.e("537796"),
                    n.e("566378"),
                    n.e("17244"),
                    n.e("153416"),
                    n.e("760200"),
                ]).then(n.bind(n, 4027));
                return (n) => (0, s.jsx)(e, { ...n, channel: t, selected: !0 });
            });
        if (t.type === k.rbe.DM) {
            let l = l9.default.getUser(t.getRecipientId());
            null != l &&
                (0, e9.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("790484"),
                        n.e("207322"),
                        n.e("622936"),
                        n.e("216947"),
                        n.e("866038"),
                        n.e("926132"),
                        n.e("146652"),
                        n.e("834552"),
                        n.e("708757"),
                        n.e("993103"),
                        n.e("585968"),
                        n.e("393336"),
                        n.e("776273"),
                        n.e("893190"),
                        n.e("391763"),
                        n.e("571210"),
                        n.e("88342"),
                        n.e("189673"),
                        n.e("955557"),
                        n.e("311802"),
                        n.e("229787"),
                        n.e("698965"),
                        n.e("882073"),
                        n.e("797558"),
                        n.e("691994"),
                        n.e("235313"),
                        n.e("576665"),
                        n.e("474610"),
                        n.e("436564"),
                        n.e("947502"),
                        n.e("245996"),
                        n.e("700792"),
                        n.e("592822"),
                        n.e("838056"),
                        n.e("965789"),
                        n.e("823427"),
                        n.e("529422"),
                        n.e("508829"),
                        n.e("309291"),
                        n.e("307059"),
                        n.e("537796"),
                        n.e("516054"),
                        n.e("298199"),
                        n.e("17244"),
                        n.e("864464"),
                        n.e("439778"),
                    ]).then(n.bind(n, 385913));
                    return (n) => (0, s.jsx)(e, { ...n, user: l, channel: t, showModalItems: !1 });
                });
            return;
        }
        if (t.isModeratorReportChannel())
            return void (0, e9.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("926132"),
                    n.e("146652"),
                    n.e("393336"),
                    n.e("391763"),
                    n.e("955557"),
                    n.e("535321"),
                    n.e("550033"),
                    n.e("947502"),
                    n.e("343266"),
                    n.e("430997"),
                    n.e("379995"),
                    n.e("578580"),
                ]).then(n.bind(n, 907647));
                return (n) => (0, s.jsx)(e, { ...n, channel: t });
            });
        let l = O.A.getGuild(t.getGuildId());
        null != l &&
            (0, e9.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("926132"),
                    n.e("146652"),
                    n.e("393336"),
                    n.e("893190"),
                    n.e("391763"),
                    n.e("955557"),
                    n.e("535321"),
                    n.e("603998"),
                    n.e("550033"),
                    n.e("947502"),
                    n.e("343266"),
                    n.e("309004"),
                    n.e("965789"),
                    n.e("412255"),
                    n.e("63340"),
                    n.e("430997"),
                    n.e("379995"),
                    n.e("537796"),
                    n.e("544058"),
                    n.e("65200"),
                    n.e("591377"),
                    n.e("35723"),
                    n.e("566378"),
                    n.e("256372"),
                    n.e("29542"),
                    n.e("248804"),
                    n.e("25173"),
                ]).then(n.bind(n, 468916));
                return (n) => (0, s.jsx)(e, { ...n, channel: t, guild: l });
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, s.jsx)("div", { className: ep.yW, children: e });
    }
    renderVibegrationsChatButton(e) {
        let { channel: t, locked: n } = this.props;
        return !0 === n ? null : (0, s.jsx)(sl, { channel: t, transitionExtras: e });
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
                isTargetInViewport: x,
                channelItemRef: N,
                isSuggestedSection: _,
            } = this.props,
            I = N ?? this.channelItemRef,
            { isMenuItemPopoverVisible: S } = this.state,
            b = !S && a,
            G = !S && E && null != p && p.length > 0,
            j = iU(m),
            v = _ ? { source: l8.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
            R = (0, tB.kg)(e, "TextChannel"),
            y = (0, s.jsxs)("li", {
                className: ew()(this.getClassName(), { [ep.r9]: this.isDisabled(), [ep.wH]: n }),
                "data-dnd-name": (0, t$.m1)(e, l9.default, io.A),
                onMouseEnter: b || G ? this.handleMouseEnter : void 0,
                onMouseLeave: b || G ? this.handleMouseLeave : void 0,
                children: [
                    (0, s.jsx)(lK.Y, {
                        targetElementRef: I,
                        position: "right",
                        renderPopout: this.renderPopout,
                        onRequestClose: this.handleClosePopout,
                        spacing: 17,
                        shouldShow: (b && this.state.shouldShowThreadsPopout) || (G && this.state.shouldShowActivities),
                        children: () =>
                            (0, s.jsxs)(nM.Ay, {
                                ref: this.setChannelItemRef,
                                className: ep.Ki,
                                channel: e,
                                guild: t,
                                selected: !g && n,
                                muted: l,
                                unread: i,
                                mentionCount: o,
                                hasActiveThreads: r,
                                subtitle: j?.subtitle,
                                subtitleColor: j?.color,
                                onMouseDown: this.handleMouseDown,
                                onContextMenu: this.handleContextMenu,
                                connectDragPreview: h ? u : null,
                                isFavoriteSuggestion: g,
                                channelTypeOverride: f ? k.rbe.GUILD_TEXT : void 0,
                                resolvedUnreadSetting: C,
                                transitionExtras: v,
                                "aria-label": (0, lY.Ay)({
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
                                    R && !g && this.renderVibegrationsChatButton(v),
                                    !g &&
                                        (0, s.jsxs)(s.Fragment, {
                                            children: [
                                                this.renderChannelInfo(),
                                                e.type === k.rbe.GUILD_APP
                                                    ? (0, s.jsx)(iq, { channel: e, isSuggestedSection: _ })
                                                    : null,
                                                this.renderInviteButton(),
                                                this.renderEditButton(),
                                            ],
                                        }),
                                ],
                            }),
                    }),
                    n &&
                        (0, s.jsx)(iD.A, {
                            targetElementRef: I,
                            channelType: e.type,
                            isTargetInViewport: x,
                            onVisibilityChange: this.handleMenuItemPopoverVisibilityChange,
                        }),
                ],
            });
        return h ? d(c(y)) : y;
    }
}
let ss = $(si);
function sr(e) {
    let { channel: t, guild: n, disableSorting: l, isFavoriteCategory: i, muted: a, selected: o } = e,
        { hasActiveThreads: d, hasMoreActiveThreads: c } = (0, lN.NR)(t),
        h = (0, u.cf)([n3.Ay], () => ({
            unread: n3.Ay.hasUnread(t.id),
            ackMessageId: n3.Ay.ackMessageId(t.id),
            isLowImportanceMention: n3.Ay.getIsMentionLowImportance(t.id),
        })),
        A = (0, u.bG)([w.Ay], () => w.Ay.resolveUnreadSetting(t)),
        g = (0, u.cf)([T.A, P.A], () => {
            let e = T.A.getChannel(t.parent_id);
            return {
                canManageChannel: P.A.can(k.xBc.MANAGE_CHANNELS, t),
                canReorderChannel:
                    !0 !== l &&
                    ((0, R.ai)(n.id) ||
                        (null != e ? P.A.can(k.xBc.MANAGE_CHANNELS, e) : P.A.can(k.xBc.MANAGE_CHANNELS, n))),
            };
        }),
        m = (0, u.bG)([n1.A], () => n1.A.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: f, isSubscriptionGated: p } = (0, lx.A)(t.id),
        C = (0, u.bG)([w.Ay], () => w.Ay.isFavorite(n.id, t.id)),
        E = (0, iT.ni)(t),
        x = (0, iL.Gp)(t.id),
        N = iI({
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
        _ = (0, id.Ay)(t),
        [I, S] = r.useState(!1),
        b = (0, iM.K)(
            r.useCallback((e) => {
                S(e);
            }, []),
        );
    return (0, u.bG)([iP.A, iO.Ay], () => iP.A.getChannelId() !== t.id && iO.Ay.isCurrentUserGuest(t.getGuildId()))
        ? null
        : (0, s.jsx)(ss, {
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
              isTargetInViewport: I,
              channelItemRef: b,
          });
}
var sa = n(900797),
    so = n(636585),
    sd = n(531685),
    sc =
        (((i = {}).HIDDEN = "hidden"),
        (i.UNREAD = "unread"),
        (i.MENTIONS = "mentions"),
        (i.VOICE_CHANNELS = "voice-channels"),
        i);
let su = { mode: "hidden", mentionCount: 0, targetChannelId: null },
    sh = { topBar: su, bottomBar: su },
    sA = {},
    sg = {};
function sm(e) {
    let t = T.A.getChannel(e);
    return (
        !(null == t || null == t.getGuildId() || t.isGuildVocal()) &&
        !(t.isThread() ? lR.A.isMuted(t.id) : w.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, to.Y)(t)
    );
}
function sf(e) {
    let t = T.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let l = w.Ay.isGuildCollapsed(n),
        i = w.Ay.isChannelMuted(n, t.id);
    return (!l || !i) && n3.Ay.getMentionCount(e) > 0;
}
function sp(e) {
    return (
        !w.Ay.isChannelMuted(e.guild_id, e.id) &&
        (e.isGuildStageVoice()
            ? tg.A.getMutableParticipants(e.id, tm.ip.SPEAKER).length > 0
            : tc.Ay.getVoiceStatesForChannel(e).length > 0)
    );
}
function sC(e) {
    let { guildChannels: t } = t_.A.getGuildWithoutChangingGuildActionRows(e),
        n = t.getChannels(sg[e] ?? []);
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
            ((sm(t.id) || o().some(t.threadIds, sm)) && (d = !1),
            (sf(t.id) || o().some(t.threadIds, sf)) && (a = !1),
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
            ((sm(t.id) || o().some(t.threadIds, sm)) && (null == i && (i = t.id), (p = !0)),
                (sf(t.id) || o().some(t.threadIds, sf)) &&
                    (null == l && (l = t.id),
                    (f += n3.Ay.getMentionCount(t.id)),
                    (f += o().sumBy(t.threadIds, n3.Ay.getMentionCount))));
        }
    if (d || a)
        for (let e = 0; e < m.length; e++) {
            let t = m[e];
            if (!d && !a) break;
            ((sm(t.id) || o().some(t.threadIds, sm)) && (null == r && (r = t.id), (E = !0)),
                (sf(t.id) || o().some(t.threadIds, sf)) &&
                    (null == s && (s = t.id),
                    (C += n3.Ay.getMentionCount(t.id)),
                    (C += o().sumBy(t.threadIds, n3.Ay.getMentionCount))));
        }
    let x = null,
        N = null,
        _ = u?.getChannelRecords() ?? [];
    (a && C > 0
        ? (x = { mode: "mentions", mentionCount: C, targetChannelId: s })
        : !c && o().some(_, sp)
          ? (x = { mode: "voice-channels", mentionCount: 0, targetChannelId: null })
          : d && E && (x = { mode: "unread", mentionCount: 0, targetChannelId: r }),
        a && f > 0
            ? (N = { mode: "mentions", mentionCount: f, targetChannelId: l })
            : d && p && (N = { mode: "unread", mentionCount: 0, targetChannelId: i }));
    let I = null != N && (null == x || ("mentions" !== x.mode && "mentions" === N.mode)),
        S = null != x && ("mentions" === x.mode || !I);
    return ((sA[e] = { topBar: I ? (N ?? su) : su, bottomBar: S ? (x ?? su) : su }), !0);
}
let sE = o().throttle(sC, 200);
function sx(e) {
    let { guildId: t } = e,
        n = O.A.getGuild(t);
    return null != n && !!n.features.has(k.GuildFeatures.COMMUNITY) && sE(t);
}
function sN(e) {
    let { id: t } = e,
        n = T.A.getChannel(t);
    if (null == n) return !1;
    let l = O.A.getGuild(n.guild_id);
    return null != l && !!l.features.has(k.GuildFeatures.COMMUNITY) && sE(n.guild_id);
}
function s_(e) {
    let { channel: t } = e,
        n = T.A.getChannel(t.id);
    if (null == n) return !1;
    let l = O.A.getGuild(t.guild_id);
    return null != l && !!l.features.has(k.GuildFeatures.COMMUNITY) && sE(n.guild_id);
}
function sI(e) {
    let { channelId: t } = e,
        n = T.A.getChannel(t);
    if (null == n) return !1;
    let l = O.A.getGuild(n.guild_id);
    return (
        null != l && !!l.features.has(k.GuildFeatures.COMMUNITY) && V.A.getGuildId() === n.guild_id && sE(n.guild_id)
    );
}
function sS(e) {
    let { guildId: t } = e;
    return null != t && sE(t);
}
class sb extends u.Ay.Store {
    static displayName = "ChannelListUnreadsStore";
    initialize() {
        this.waitFor(t_.A, T.A, O.A, lR.A, n3.Ay, V.A, tc.Ay, tg.A, w.Ay);
    }
    getUnreadStateForGuildId(e) {
        return sA[e] ?? sh;
    }
}
let sG = new sb(e7.h, {
    UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
        let { guildId: t, channelIds: n } = e,
            l = O.A.getGuild(t);
        return (
            null != l &&
            !!l.features.has(k.GuildFeatures.COMMUNITY) &&
            null != n &&
            !o().isEqual(sg[t], n) &&
            ((sg[t] = n), sC(t))
        );
    },
    BULK_ACK: function (e) {
        let { channels: t } = e,
            n = !1;
        return (
            o()(t)
                .map((e) => {
                    let { channelId: t } = e;
                    return T.A.getChannel(t)?.guild_id;
                })
                .filter(tu.Vq)
                .uniq()
                .forEach((e) => {
                    let t = O.A.getGuild(e);
                    null != t && t.features.has(k.GuildFeatures.COMMUNITY) && sE(e) && (n = !0);
                }),
            n
        );
    },
    CHANNEL_ACK: sI,
    CHANNEL_DELETE: s_,
    CHANNEL_LOCAL_ACK: sI,
    MESSAGE_ACK: sI,
    MESSAGE_CREATE: sI,
    MESSAGE_DELETE_BULK: sI,
    MESSAGE_DELETE: sI,
    PASSIVE_UPDATE_V2: function (e) {
        let t = O.A.getGuild(e.guildId);
        return !!(e.channels.length > 0 && null != t && t.features.has(k.GuildFeatures.COMMUNITY)) && sE(e.guildId);
    },
    RESORT_THREADS: sI,
    THREAD_CREATE: s_,
    THREAD_DELETE: s_,
    THREAD_LIST_SYNC: sx,
    THREAD_MEMBER_UPDATE: sN,
    THREAD_MEMBERS_UPDATE: sN,
    THREAD_UPDATE: s_,
    BULK_CLEAR_RECENTS: sx,
    CATEGORY_COLLAPSE_ALL: sx,
    CATEGORY_EXPAND_ALL: sx,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = V.A.getGuildId();
        if (null == n || !new Set(t.map((e) => e.guildId)).has(n)) return !1;
        let l = sA[n];
        return null != l && "voice-channels" === l.bottomBar.mode && sE(n);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: sS,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: sS,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        for (let e of t) null != e.guild_id && sE(e.guild_id);
    },
    USER_GUILD_SETTINGS_GUILD_UPDATE: sS,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: sS,
});
var sj = n(350536);
let sv = { friction: 30, tension: 300 };
function sR(e) {
    let { guildChannels: t, jumpToVoiceChannels: n } = e,
        l = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
        i = (0, u.bG)([tc.Ay], () => tc.Ay.getVoiceStates(t.id), [t.id]),
        a = r.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), n());
            },
            [n],
        ),
        o = l?.getChannelRecords() ?? [],
        d = (0, nu.fK)({ channels: o, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: i });
    return (0, s.jsxs)(es.D, {
        className: ew()(sj.M0, sj.OF),
        onClick: a,
        children: [
            (0, s.jsx)(tZ.H, { size: "custom", className: sj.Gs, width: 14, height: 14, color: "currentColor" }),
            (0, s.jsx)(e3.E, {
                variant: "text-xs/semibold",
                className: sj.pM,
                children: em.intl.format(em.t["fDlr+F"], { count: d.length }),
            }),
            (0, s.jsx)(so.A, {
                guildId: t.id,
                className: sj.J$,
                users: d.slice(0, 4),
                renderMoreUsers: () => null,
                max: 4,
                size: iH._3.SIZE_16,
            }),
        ],
    });
}
function sy(e) {
    let { position: t, guildChannels: n, guildChannelsVersion: l, jumpToVoiceChannels: i, jumpToChannel: a } = e,
        { bottomBar: o, topBar: d } = (0, u.cf)([sG], () => sG.getUnreadStateForGuildId(n.id)),
        c = (0, u.bG)([sd.A], () => sd.A.isFocused()),
        { mode: h, mentionCount: A, targetChannelId: g } = "bottom" === t ? o : d,
        m = h === sc.HIDDEN,
        f = (0, e2.z)(
            {
                to: { transform: m ? ("bottom" === t ? "translateY(180%)" : "translateY(-180%)") : "translateY(0%)" },
                config: sv,
            },
            c ? "respect-motion-settings" : "animate-never",
        ),
        p = r.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), null != g && a(g));
            },
            [a, g],
        );
    return (0, s.jsx)("div", {
        className: ew()(sj.kL, { [sj.Mn]: "top" === t, [sj.sQ]: "bottom" === t }),
        children: (0, s.jsx)(e1.animated.div, {
            className: sj.pK,
            style: f,
            "aria-hidden": m,
            children: (function () {
                switch (h) {
                    case sc.HIDDEN:
                        return (0, s.jsx)("div", { className: ew()(sj.M0, sj.Te) });
                    case sc.UNREAD:
                        return (0, s.jsxs)(es.D, {
                            className: sj.M0,
                            onClick: p,
                            children: [
                                "bottom" === t
                                    ? (0, s.jsx)(tX.a, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: sj.z_,
                                          height: 14,
                                          width: 14,
                                      })
                                    : (0, s.jsx)(sa.t, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: sj.z_,
                                          height: 14,
                                          width: 14,
                                      }),
                                (0, s.jsx)(e3.E, {
                                    variant: "text-xs/semibold",
                                    color: "interactive-text-default",
                                    className: sj.pM,
                                    children: em.intl.string(em.t.FCRiT3),
                                }),
                            ],
                        });
                    case sc.MENTIONS:
                        return (0, s.jsx)(es.D, {
                            className: ew()(sj.M0, sj.vU),
                            onClick: p,
                            children: (0, s.jsx)(e3.E, {
                                variant: "text-xs/semibold",
                                color: "badge-text-brand",
                                className: sj.pM,
                                children: em.intl.format(em.t.EQcLyp, { count: A }),
                            }),
                        });
                    case sc.VOICE_CHANNELS:
                        return (0, s.jsx)(sR, { jumpToVoiceChannels: i, guildChannels: n, guildChannelsVersion: l });
                    default:
                        return;
                }
            })(),
        }),
    });
}
var sM = n(310953),
    sL = n(173860);
function sT(e) {
    let t = T.A.getChannel(e);
    return (
        null != t &&
        null != t.getGuildId() &&
        !(t.isThread() ? lR.A.isMuted(t.id) : w.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, to.Y)(t)
    );
}
function sU(e) {
    let t = T.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let l = w.Ay.isGuildCollapsed(n),
        i = w.Ay.isChannelMuted(n, t.id);
    return (!l || !i) && n3.Ay.getMentionCount(e) > 0;
}
let sD = r.forwardRef(function (e, t) {
    let { guildId: n, guildChannels: l, guildChannelsVersion: i, ...r } = e,
        a = (0, sM.W)(n, l, i, { withVoiceChannels: !1 }, { ignoreRecents: !0 }),
        o = (0, u.bG)([sd.A], () => sd.A.isFocused());
    return (0, s.jsx)(sL.A, { ref: t, ...r, isUnread: sT, isMentioned: sU, items: a, animate: o });
});
var sO = n(81466);
function sP(e) {
    let { guild: t, selected: l } = e,
        { hasUnread: i, mentionCount: r } = (0, u.cf)(
            [n3.Ay],
            () => ({
                hasUnread: n3.Ay.hasUnread(t.id, nL.P.GUILD_EVENT),
                mentionCount: n3.Ay.getMentionCount(t.id, nL.P.GUILD_EVENT),
            }),
            [t.id],
        ),
        a = (0, u.bG)([w.Ay], () => w.Ay.isMuteScheduledEventsEnabled(t.id));
    async function o() {
        await (0, I.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
                n.e("489565"),
                n.e("684231"),
                n.e("570690"),
                n.e("886631"),
                n.e("476227"),
                n.e("998835"),
                n.e("947359"),
                n.e("694303"),
                n.e("147626"),
                n.e("256373"),
                n.e("970644"),
                n.e("449347"),
                n.e("464287"),
                n.e("853934"),
                n.e("468248"),
                n.e("469647"),
                n.e("798354"),
                n.e("188353"),
                n.e("886571"),
            ]).then(n.bind(n, 318104));
            return (n) => (0, s.jsx)(e, { ...n, guildId: t.id });
        });
    }
    let d = (0, tO.Ay)(t.id),
        c = d.length > 0 ? em.intl.formatToPlainString(em.t.IBdqSu, { number: d.length }) : em.intl.string(em.t.tlopTM);
    return (0, s.jsx)(ec.G, {
        id: `upcoming-events-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(sO.CalendarIcon, { size: "md", color: "currentColor", className: e }),
        text: c,
        selected: l,
        onClick: o,
        onContextMenu: function (e) {
            (0, e9.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("426386"), n.e("819990")]).then(n.bind(n, 221621));
                return (n) => (0, s.jsx)(e, { ...n, guildId: t.id });
            });
        },
        showUnread: i && !a,
        trailing: !a && r > 0 ? (0, s.jsx)(ea.hV, { className: nX.Do, disableColor: !0, count: r }) : null,
    });
}
var sV = n(152367),
    sw = n(972786),
    sH = n(321593),
    sB = n(309010),
    sk = n(50617);
function sF(e) {
    let { guild: t, selected: n } = e,
        l = (0, u.bG)([sw.Ay], () => sw.Ay.getSelectedProjectId(t.id), [t.id]),
        i = (0, u.bG)([sB.Ay], () => sB.Ay.getChannelId(), []),
        r = (0, u.bG)([V.A], () => V.A.getGuildId(), []);
    return (0, s.jsx)(ec.G, {
        id: `vibegrations-${t.id}`,
        renderIcon: (e) =>
            (0, s.jsx)(sV.D, { size: "custom", color: "currentColor", width: 20, height: 20, className: e }),
        text: em.intl.string(sk.default.Xmvb23),
        selected: n,
        background: (0, s.jsx)(sH.gT, { guildId: t.id }),
        onClick: () => {
            let e = i === eh.VV.VIBEGRATIONS && r === t.id;
            (0, eu.pX)(k.BVt.CHANNEL(t.id, eh.VV.VIBEGRATIONS, null == l || e ? null : l));
        },
    });
}
var sK = n(845056),
    sz = n(765379),
    sW = n(271683),
    sY = n(725613),
    sX = n(857253),
    sq = n(360729),
    sZ = n(22231),
    sJ = n(241326),
    s$ = n(750943),
    sQ = n(743674),
    s0 = n(888697),
    s1 = n(26741),
    s3 = n(493819),
    s2 = n(722884),
    s9 = n(579129),
    s5 = n(176431);
function s7(e) {
    let { channel: t, imageUrl: l, animatedUrl: i, bannerHash: a, canModifyHangout: o } = e,
        d = (0, sQ.S)(l),
        c = (0, eU.je)(t),
        u = (0, s1.P9)({ guildId: t.guild_id, channelId: t.id, bannerHash: a }),
        h = r.useCallback(() => {
            ((0, s1.J_)({ guildId: t.guild_id, channelId: t.id }), (0, s2.A)({ channel: t }));
        }, [t]),
        A = r.useCallback(() => {
            ((0, s1.nK)({ guildId: t.guild_id, channelId: t.id }), (0, s0.e2)(t.id));
        }, [t.guild_id, t.id]),
        g = r.useCallback(
            (e) => {
                c
                    ? (0, e9.L3)(e, async () => {
                          let { default: e } = await n.e("555558").then(n.bind(n, 316421));
                          return (n) => (0, s.jsx)(e, { ...n, channel: t });
                      })
                    : e.preventDefault();
            },
            [t, c],
        );
    return (0, s.jsxs)("div", {
        ref: u,
        className: s5.rs,
        onContextMenu: g,
        children: [
            (0, s.jsx)("div", {
                className: s5.ZS,
                style: null != d ? { backgroundColor: d } : void 0,
                children: (0, s.jsx)(s3.A, { imageUrl: l, animatedUrl: i, className: s5.Sl }),
            }),
            o
                ? (0, s.jsxs)("div", {
                      className: s5.n_,
                      children: [
                          (0, s.jsx)(ei.m, {
                              text: em.intl.string(s9.default.XJ4UpB),
                              children: (0, s.jsx)(es.D, {
                                  className: s5.HF,
                                  onClick: h,
                                  children: (0, s.jsx)(sZ.PencilIcon, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                          (0, s.jsx)(ei.m, {
                              text: em.intl.string(s9.default.XV4qT6),
                              children: (0, s.jsx)(es.D, {
                                  className: s5.HF,
                                  onClick: A,
                                  children: (0, s.jsx)(sJ.TrashIcon, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function s6(e) {
    let { channel: t } = e,
        n = (0, s1.dX)({ guildId: t.guild_id, channelId: t.id }),
        l = r.useCallback(() => {
            ((0, s1.J_)({ guildId: t.guild_id, channelId: t.id }), (0, s2.A)({ channel: t }));
        }, [t]);
    return (0, s.jsx)("div", {
        ref: n,
        className: s5._o,
        children: (0, s.jsxs)(es.D, {
            className: s5.hH,
            onClick: l,
            children: [
                (0, s.jsx)(s$.X, { size: "xs", color: "currentColor" }),
                (0, s.jsx)(e3.E, {
                    variant: "text-sm/medium",
                    color: "currentColor",
                    children: em.intl.string(s9.default.NGcIOF),
                }),
            ],
        }),
    });
}
function s4(e) {
    let { channel: t, isConnected: n } = e,
        { enableHangoutWindow: l } = (0, eT.Dm)({ guildId: t.guild_id, location: "HangoutWindow" }),
        i = (0, eU.W6)(t),
        a = n && i,
        o = t.voiceHangout,
        d = o?.banner_hash,
        c = r.useMemo(() => {
            if (null == d || null == t.guild_id) return null;
            let e = (0, eU.Sq)({ guildId: t.guild_id, bannerHash: d });
            return null == e ? null : { bannerHash: d, ...e };
        }, [t.guild_id, d]);
    return l
        ? null != c
            ? (0, s.jsx)(s7, {
                  channel: t,
                  imageUrl: c.imageUrl,
                  animatedUrl: c.animatedUrl,
                  bannerHash: c.bannerHash,
                  canModifyHangout: a,
              })
            : a
              ? (0, s.jsx)(s6, { channel: t })
              : null
        : null;
}
var s8 = n(290863),
    re = n(461213),
    rt = n(532622),
    rn = n(882840),
    rl = n(208971),
    ri = n(46054),
    rs = n(569381),
    rr = n(165648);
function ra(e) {
    let { channel: t, connected: n, hovered: l, subtitle: i, onClick: a } = e,
        o = (0, rl.G)((0, rn.l)(t)),
        { enableHangoutWindow: d } = (0, eT.Dm)({ guildId: t.guild_id, location: "VoiceChannelStatus" }),
        c = d && (0, eU.lr)(t),
        u = null != o && o.length > 0,
        h = (0, rt.Ay)(t, !0),
        A = null != i && i.length > 0;
    if (
        (r.useEffect(() => {
            u && lh.default.track(k.HAw.VOICE_CHANNEL_TOPIC_VIEWED, { channel_id: t.id, guild_id: t.guild_id });
        }, [u, t.id, t.guild_id]),
        null == t.guild_id)
    )
        return null;
    let g = ew()(rs.Ui, n && h ? rs.BI : null);
    return u
        ? (0, s.jsx)(es.D, {
              className: g,
              onClick: h ? a : void 0,
              children: (0, s.jsx)(e3.E, {
                  variant: "text-xs/medium",
                  className: ew()(rs.qS, rr.PT),
                  children: (0, s.jsx)(tF.A, { children: ri.A.parseVoiceChannelStatus(o, !0, { channelId: t.id }) }),
              }),
          })
        : n && h && !c && (!A || l)
          ? (0, s.jsxs)(es.D, {
                className: g,
                onClick: a,
                children: [
                    (0, s.jsx)(e3.E, {
                        variant: "text-xs/medium",
                        className: rs.qS,
                        children: em.intl.string(em.t.Mgpxiw),
                    }),
                    (0, s.jsx)(sZ.PencilIcon, { color: "currentColor", className: rs.rD, size: "xxs" }),
                ],
            })
          : A
            ? (0, s.jsx)(tF.A, { children: i })
            : null;
}
class ro extends ny {
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
        (o && lz.A.updateChatOpen(n.id, !0),
            lE.A.handleVoiceConnect({
                channel: n,
                connected: t,
                needSubscriptionToAccess: i,
                routeDirectlyToChannel: o || a,
                locked: e,
                transitionExtras: r ? { source: l8.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
            }));
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            l = O.A.getGuild(t.getGuildId());
        null != l &&
            (0, e9.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("926132"),
                    n.e("146652"),
                    n.e("993103"),
                    n.e("393336"),
                    n.e("893190"),
                    n.e("391763"),
                    n.e("955557"),
                    n.e("474610"),
                    n.e("535321"),
                    n.e("603998"),
                    n.e("550033"),
                    n.e("947502"),
                    n.e("343266"),
                    n.e("309004"),
                    n.e("965789"),
                    n.e("412255"),
                    n.e("63340"),
                    n.e("430997"),
                    n.e("379995"),
                    n.e("537796"),
                    n.e("544058"),
                    n.e("591377"),
                    n.e("35723"),
                    n.e("566378"),
                    n.e("256372"),
                    n.e("29542"),
                    n.e("419690"),
                    n.e("426792"),
                    n.e("248804"),
                    n.e("318663"),
                    n.e("599990"),
                    n.e("599854"),
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
        return (0, nu.Pd)(e, lI.A, O.A);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return ep.ZS;
        if (null != t)
            if (e > t) return ep.mU;
            else return ep.TR;
        return ep.fx;
    }
    handleClick = () => {
        let { channel: e } = this.props,
            t = e.getGuildId();
        (null != t && (0, lq.V)(t) && (0, lX.Ze)(t), this.handleVoiceConnect());
    };
    handleVoiceStatusClick = (e) => {
        let { connected: t, channel: n } = this.props;
        t && (e.stopPropagation(), (0, sW.A)({ channel: n }));
    };
    renderSubtitle() {
        let { channel: e, connected: t } = this.props,
            n = iU(this.props.subtitle)?.subtitle,
            { hovered: l } = this.state;
        return (0, s.jsx)(ra, {
            onClick: this.handleVoiceStatusClick,
            channel: e,
            connected: t,
            subtitle: n,
            hovered: l,
        });
    }
    renderVoiceUsers() {
        let { channel: e, voiceStates: t, collapsed: n, withGuildIcon: l, tabIndex: i } = this.props;
        return (0, s.jsx)(lV.A, {
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
        return !(null != n && n.length > 0) || l ? null : (0, s.jsx)(s4, { channel: e, isConnected: t });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        return t
            ? (0, s.jsx)(l4, { type: l6.VOICE, guildId: e.guild_id, closePopout: this.closeGuildVerificationPopout })
            : null;
    };
    renderOpenChatButton = () => {
        let { channel: e, locked: t, forceShowButtons: n, isSuggestedSection: l } = this.props;
        if (!t)
            return (0, s.jsx)(ei.m, {
                asContainer: !0,
                text: em.intl.string(em.t.ZXxLQg),
                children: (0, s.jsx)(es.D, {
                    className: ew()(ep.Xs, n ? ep.Tf : null),
                    onClick: () => {
                        (lz.A.updateChatOpen(e.id, !0),
                            (0, ie.iN)(e.id, l ? { source: l8.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0));
                    },
                    "aria-label": em.intl.string(em.t.ZXxLQg),
                    children: (0, s.jsx)(lC.ChatIcon, { size: "xs", color: "currentColor", className: ep.gE }),
                }),
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, s.jsx)("div", { className: ep.yW, children: e });
    }
    getTooltipText = () => {
        let { connected: e } = this.props;
        return this.isFull() && !e ? em.intl.string(em.t.rZfiNq) : null;
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
                shouldUseAnimatedWaveform: I,
                voiceStates: S,
            } = this.props,
            { shouldShowGuildVerificationPopout: b } = this.state,
            G = _ || I,
            j = (0, s.jsxs)("li", {
                ref: this.ref,
                className: ew()(this.getModeClass(), { [ep.r9]: this.isDisabled(), [ep.fy]: _ }),
                "data-dnd-name": (0, t$.m1)(e, l9.default, io.A),
                children: [
                    _ &&
                        (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsx)("div", { className: ep.UQ }),
                                (0, s.jsx)("div", { className: ep.l0 }),
                            ],
                        }),
                    (0, s.jsx)("div", {
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: (0, s.jsx)(lK.Y, {
                            targetElementRef: this.channelItemRef,
                            position: "right",
                            renderPopout: this.renderPopout,
                            onRequestClose: this.closeGuildVerificationPopout,
                            spacing: 17,
                            shouldShow: b,
                            children: () =>
                                (0, s.jsx)(ei.m, {
                                    text: this.getTooltipText(),
                                    children: (0, s.jsxs)(nM.Ay, {
                                        ref: this.channelItemRef,
                                        className: ep.Ki,
                                        iconClassName: ew()({ [ep.Gj]: m || x || G }),
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
                                        "aria-label": (0, lY.Ay)({
                                            channel: e,
                                            unread: l,
                                            mentionCount: r,
                                            voiceStates: S,
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
            A && (j = c(j)),
            h && (j = o(d(j))),
            g &&
                (j = (0, s.jsx)(nl.A, {
                    childRef: this.ref,
                    tutorialId: "voice-conversations",
                    position: "right",
                    offsetX: -20,
                    children: j,
                })),
            j
        );
    }
}
let rd = $((0, lW.F)(ro));
function rc(e) {
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
        c = (0, u.bG)([w.Ay], () => w.Ay.resolveUnreadSetting(n)),
        h = (0, u.cf)([T.A, l2.A, P.A], () => {
            let e = T.A.getChannel(n.parent_id),
                i = l2.A.getCheck(n.guild_id);
            return {
                canManageChannel: P.A.can(k.xBc.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== l &&
                    ((0, R.ai)(t.id) ||
                        (null != e ? P.A.can(k.xBc.MANAGE_CHANNELS, e) : P.A.can(k.xBc.MANAGE_CHANNELS, t))),
                canMoveMembers: P.A.can(k.xBc.MOVE_MEMBERS, n),
                locked: !P.A.can(k.xBc.CONNECT, n),
                bypassLimit: P.A.can(k.xBc.MOVE_MEMBERS, n),
                unverifiedAccount: !i.canChat,
            };
        }),
        A = (0, u.bG)([lI.A], () => lI.A.hasVideo(n.id)),
        { enabled: g } = (0, sq.mf)({ guildId: t.id, location: "VoiceChannel" }),
        m = (0, id.Ay)(n),
        f = (0, u.yK)(
            [re.A, s8.A, is.default],
            () => {
                if (null == o || 0 === o.length) return [];
                let e = is.default.getId(),
                    t = [];
                for (let { user: l } of o)
                    for (let i of l.id === e ? re.A.getActivities() : s8.A.getActivities(l.id, n.guild_id))
                        !(0, sK.N)(i) || (0, sz.A)(i) || null == i.name || t.includes(i.name) || t.push(i.name);
                return t;
            },
            [o, n.guild_id],
        ),
        p = (0, t$.Ay)(n),
        C = (0, tO.Qs)(n.id),
        E = (0, u.bG)([sY.A], () => sY.A.getStartTime(n), [n]),
        { isSubscriptionGated: x, needSubscriptionToAccess: N } = (0, lx.A)(n.id),
        _ = (0, sX.A)(),
        I = (0, u.bG)([w.Ay], () => w.Ay.isFavorite(t.id, n.id)),
        S = e.connected || _?.channelId === n.id,
        { enableHighlight: b, enableWaveformIcon: G } = (0, nd.b)(t.id, "VoiceChannel"),
        j = null != o && o.length > 0,
        v = b && j,
        y = G && j,
        M = iI({
            channel: n,
            isChannelSelected: r,
            isChannelCollapsed: a,
            voiceStates: o,
            isSubscriptionGated: x,
            needSubscriptionToAccess: N,
            enableConnectedUserLimit: !0,
            enableActivities: !0,
        }),
        L = S && null == M;
    return (0, s.jsx)(rd, {
        channelName: p,
        embeddedApps: m,
        nonEmbeddedActivityNames: f,
        embeddedActivityType: k.$pd.PLAYING,
        video: A,
        hasActiveEvent: null != C,
        isSubscriptionGated: x,
        needSubscriptionToAccess: N,
        ...d,
        ...h,
        ...e,
        connected: S,
        isFavoriteSuggestion: i && !I,
        forceShowButtons: L,
        channelInfo: M,
        resolvedUnreadSetting: c,
        hasChannelInfo: null != M,
        hasStartTime: null != E,
        voiceChannelStartTime: E,
        shouldHighlightChannel: v,
        shouldUseAnimatedWaveform: y,
        guildRoomsEnabled: g,
    });
}
n(131955);
function ru(e) {
    return (
        h.A.modules.channels.NAME_LINE_HEIGHT.resolve({ density: e }) +
        2 * h.A.space.SPACE_XXS.resolve({ density: e }) +
        2
    );
}
class rh extends r.PureComponent {
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
        (this.setState({ initialized: !0 }), (0, tI.Ei)(this.getVisibleChannels));
    }
    componentWillUnmount() {
        this.updateChannelListScroll.cancel();
    }
    componentDidUpdate(e, t) {
        let { scrollToChannel: n, guildId: l, selectedChannelId: i } = this.props,
            { initialized: s } = this.state,
            { scrollTop: r } = tx.A.getGuildDimensions(l);
        (null != n
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
            this.testShouldSkipTutorial());
    }
    getSectionRowsFromChannel(e) {
        return this.props.guildChannels.getSectionRowsFromChannel(e);
    }
    setListRef = (e) => {
        let { ref: t } = this.context;
        ((t.current = e?.getScrollerNode() ?? null), (this._list = e));
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
                    a = s.threadOffset * ru(r);
                i.scrollIntoViewRect({ start: e + a, end: e + a + ru(r), padding: n, animate: t, callback: l });
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
            (null != e && e(t), this.updateChannelListScroll(n));
        }
        (null != this.unreadTopRef.current && this.unreadTopRef.current.calculateState(),
            null != this.unreadBottomRef.current && this.unreadBottomRef.current.calculateState());
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
                if (l < tN.bK || e.isPlaceholderRow(l, i)) return !1;
                let s = e.getChannelFromSectionRow(l, i);
                if (null == s) return !1;
                let { channel: r, category: a } = s;
                return (
                    !!(0, H.ig)(r.record.type) &&
                    (!a.isCollapsed || !a.isMuted) &&
                    !r.isMuted &&
                    !!t.isItemVisible(l, i, !0) &&
                    (0, to.Y)(r.record)
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
        if (e === tN.PU) return i;
        if (e === tN.bK) return t.features.has(k.GuildFeatures.HUB) ? 0 : i;
        if (e === n.voiceChannelsSectionNumber) {
            let t = n.getCategoryFromSection(e);
            if (null == t || t.isEmpty()) return 0;
            if (t.isCollapsed) return 49;
            let l = n.getChannelFromSectionRow(e, 0)?.channel;
            return null == l || l.record.type === k.rbe.GUILD_CATEGORY ? 9 : 25;
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
            let { hasDivider: d, canHaveVoiceSummary: c } = nh(n, r, t),
                u = d ? (a ? 9 : 12) : 0;
            if (!c || t === tN.PU) return u;
            let h = n.getNamedCategoryFromSection(t);
            return null == h ||
                !(function (e) {
                    let { category: t, voiceStates: n, selectedChannelId: l, selectedVoiceChannelId: i } = e;
                    return (
                        (function (e) {
                            let { category: t, voiceStates: n, selectedChannelId: l, selectedVoiceChannelId: i } = e;
                            return !0 !== L.A.isCollapsed(t.record.id)
                                ? []
                                : t.getChannelRecords().filter((e) => {
                                      if (!P.A.can(k.xBc.VIEW_CHANNEL, e)) return !1;
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
            a = ru(r);
        if (e === tN.PU) {
            let e = n.getGuildActionSection();
            return e.isEmpty()
                ? 0
                : e.getRow(t) === tk.n.GUILD_PREMIUM_PROGRESS_BAR
                  ? e.getRows().length > 1
                      ? 69
                      : 57
                  : a;
        }
        if (n.isPlaceholderRow(e, t)) return 0;
        let o = n.getChannelFromSectionRow(e, t);
        if (null == o) return 0;
        let { channel: d, category: c } = o;
        if (d.record.type === k.rbe.GUILD_CATEGORY) return 40;
        for (let e of d.threadIds) {
            let { density: t = "default" } = this.props;
            a += ru(t);
            let n = l[d.id];
            null != n && n.length > 0 && (a += s === e ? 32 * n.length : 32);
        }
        if (d.record.isGuildVoice()) {
            let e = l[d.id];
            if (null != e && e.length > 0) {
                let t = 32 * e.length;
                if (
                    (d.isCollapsed || c.isCollapsed ? (t = 32) : (0, eO.Ln)(d.record) && (t += 32),
                    (a += t + h.A.space.SPACE_XS.resolve({ density: r })),
                    !d.isCollapsed && !c.isCollapsed)
                ) {
                    let { enableHangoutWindow: e } = (0, eT.kY)({
                        guildId: d.record.guild_id,
                        location: "ChannelList",
                    });
                    e && ((0, eU.lr)(d.record) ? (a += 134) : s === d.id && (a += 44));
                }
            }
            d.id === this.props.rtcConnectedChannelId && (a += 32 * this.props.rtcDesyncedVoiceStatesCount);
        }
        if (((null != d.subtitle || s === d.id) && (a += 16), d.record.isGuildStageVoice())) {
            let e = l[d.id] ?? [],
                t = i[d.id] ?? [];
            if (null != e && e.length > 0) {
                let e = 32 * t.length;
                (d.isCollapsed || c.isCollapsed ? (e = Math.ceil(e / 5)) : (e += 32), (a += e + 8));
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
        (null != n && s.includes(n) && (i = (0, eP.xb)(t)), (0, eP.DD)(e.id, s, i));
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
            na,
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
                    case tN.PU:
                        return "hoisted-spacer";
                    case tN.bK:
                        return "uncategorized-spacer";
                    case tN.HP:
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
        if (t === tN.PU) {
            let e = c.getGuildActionSection(),
                t = e.getRow(n);
            if (null == t) return null;
            switch (t) {
                case tk.n.GUILD_HUB_HEADER_OPTIONS:
                    return (0, s.jsx)(
                        eD.A,
                        { guild: l, channel: D.Ay.getDefaultChannel(l.id) },
                        tk.n.GUILD_HUB_HEADER_OPTIONS,
                    );
                case tk.n.GUILD_PREMIUM_PROGRESS_BAR:
                    let i = e.getRows();
                    return (0, s.jsx)(ta, { guild: l, withMargin: i.length > 1 }, tk.n.GUILD_PREMIUM_PROGRESS_BAR);
                case tk.n.GUILD_SPACE:
                    return (0, s.jsx)(eL, { guild: l, selected: a === eh.VV.GUILD_SPACE }, tk.n.GUILD_SPACE);
                case tk.n.GUILD_HOME:
                    return (0, s.jsx)(n5, { guild: l, selected: a === eh.VV.GUILD_HOME }, tk.n.GUILD_HOME);
                case tk.n.GUILD_SCHEDULED_EVENTS:
                    return (0, s.jsx)(
                        sP,
                        { guild: l, selected: a === tk.n.GUILD_SCHEDULED_EVENTS },
                        tk.n.GUILD_SCHEDULED_EVENTS,
                    );
                case tk.n.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, s.jsx)(
                        ls,
                        { guild: l, selected: a === eh.VV.ROLE_SUBSCRIPTIONS },
                        tk.n.GUILD_ROLE_SUBSCRIPTIONS,
                    );
                case tk.n.GUILD_SHOP:
                    return (0, s.jsx)(lf, { guild: l, selected: a === eh.VV.GUILD_SHOP }, tk.n.GUILD_SHOP);
                case tk.n.GUILD_GAME_SHOP:
                    return (0, s.jsx)(nZ, { guild: l, selected: a === eh.VV.GAME_SHOP }, tk.n.GUILD_GAME_SHOP);
                case tk.n.GUILD_VIBEGRATIONS:
                    return (0, s.jsx)(sF, { guild: l, selected: a === eh.VV.VIBEGRATIONS }, tk.n.GUILD_VIBEGRATIONS);
                case tk.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                    return (0, s.jsx)(lt, { guild: l });
                case tk.n.CHANNELS_AND_ROLES:
                    return (0, s.jsx)(
                        n2,
                        { guild: l, selected: a === eh.VV.CHANNEL_BROWSER || a === eh.VV.CUSTOMIZE_COMMUNITY },
                        tk.n.CHANNELS_AND_ROLES,
                    );
                case tk.n.GUILD_DIRECTORY:
                    return (0, s.jsx)(
                        nT,
                        { guild: l, selectedChannelId: a, disableManageChannels: h },
                        tk.n.GUILD_DIRECTORY,
                    );
                case tk.n.GUILD_MOD_DASH_MEMBER_SAFETY:
                    return (0, s.jsx)(
                        ey,
                        { guild: l, selected: a === eh.VV.MEMBER_SAFETY },
                        tk.n.GUILD_MOD_DASH_MEMBER_SAFETY,
                    );
                case tk.n.GUILD_BOOSTS:
                    return (0, s.jsx)(e0, { guildId: l.id, selected: a === eh.VV.GUILD_BOOSTS }, tk.n.GUILD_BOOSTS);
                case tk.n.GAME_SERVERS:
                    return (0, s.jsx)(eI, { guildId: l.id, selected: a === eh.VV.GAME_SERVERS }, tk.n.GAME_SERVERS);
                case tk.n.GAME_SERVERS_EMPTY:
                    return (0, s.jsx)(
                        eC,
                        { guildId: l.id, selected: a === eh.VV.GAME_SERVERS },
                        tk.n.GAME_SERVERS_EMPTY,
                    );
                case tk.n.GUILD_OFFICIAL_MESSAGES:
                    return (0, s.jsx)(
                        ll,
                        { guild: l, selected: a === eh.VV.GUILD_OFFICIAL_MESSAGES },
                        tk.n.GUILD_OFFICIAL_MESSAGES,
                    );
                default:
                    return null;
            }
        }
        if (c.isPlaceholderRow(t, n)) return null;
        let f = c.getChannelFromSectionRow(t, n);
        if (null == f) return null;
        let { category: p, channel: C } = f,
            E = p instanceof tN.xu,
            x = C.record,
            N = `${t}${C.id}`;
        switch (x.type) {
            case k.rbe.GUILD_ANNOUNCEMENT:
            case k.rbe.GUILD_TEXT:
            case k.rbe.GUILD_FORUM:
            case k.rbe.GUILD_MEDIA:
            case k.rbe.DM:
            case k.rbe.GROUP_DM:
            case k.rbe.GUILD_APP:
                return (0, s.jsxs)(
                    r.Fragment,
                    {
                        children: [
                            (0, s.jsx)(sr, {
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
                                ? (0, s.jsx)(lF, {
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
            case k.rbe.GUILD_STAGE_VOICE:
                return (0, s.jsx)(
                    ij,
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
            case k.rbe.GUILD_VOICE:
                return (0, s.jsx)(
                    rc,
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
            case k.rbe.GUILD_STORE:
                return (0, s.jsx)(iy, { channel: x, guild: l, position: C.position, selected: a === C.id }, N);
            case k.rbe.GUILD_CATEGORY:
                if (t !== c.voiceChannelsSectionNumber) return null;
                return (0, s.jsx)(nn, { channel: x }, `readonly-${x.id}`);
            case k.rbe.PUBLIC_THREAD:
            case k.rbe.PRIVATE_THREAD:
            case k.rbe.ANNOUNCEMENT_THREAD:
                return (0, s.jsx)(
                    sr,
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
            ng,
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
                let { hasDivider: l, canHaveVoiceSummary: i } = nh(t, n, e);
                return `section-footer-${e}${l ? "-divider" : ""}${i ? "-voice-summary" : ""}`;
            })(t, n, o),
        );
    };
    renderTopUnread() {
        let { topMention: e, bottomUnread: t, bottomMention: n, isUnreadVisible: l } = this.state,
            { guildId: i, guildChannels: r, guildChannelsVersion: a } = this.props;
        return (0, s.jsx)("div", {
            className: nr.Eo,
            children: (0, s.jsx)(sD, {
                ref: this.unreadTopRef,
                textUnread: em.intl.string(em.t.FCRiT3),
                textMention: em.intl.string(em.t["8zH0LJ"]),
                hide: null == e && (l || null != t || null != n),
                className: nr.Vq,
                barClassName: nr.bu,
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
        return (0, s.jsx)(sD, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: em.intl.string(em.t.FCRiT3),
            textMention: em.intl.string(em.t["8zH0LJ"]),
            hide: null == l && i,
            className: nr.di,
            barClassName: nr.bu,
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
        if (e !== tN.PU) {
            if (null == t)
                return e === tN.HP
                    ? "favorites-header"
                    : e === n.recentsSectionNumber
                      ? "recents-header"
                      : e === n.voiceChannelsSectionNumber
                        ? "voice-channels"
                        : e === tN.bK
                          ? "uncategorized-header"
                          : n.getNamedCategoryFromSection(e)?.id;
            if (!n.isPlaceholderRow(e, t)) return n.getChannelFromSectionRow(e, t)?.channel?.id;
        }
    };
    renderList() {
        let { guildChannels: e, guildBanner: t, selectedGuildId: n, density: l } = this.props,
            i = {};
        (0, R.ai)(n) && (i["data-favorites"] = !0);
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
                        className: nr.XG,
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
                        innerAriaLabel: em.intl.string(em.t.OGiMXJ),
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
        if (!tC.A.shouldShow("voice-conversations")) return;
        let { guildChannels: e } = this.props,
            t = e.getFirstVoiceChannel();
        if (null == t) return void tp.X8("voice-conversations");
        let n = this._list;
        if (null != n)
            for (let { section: e, row: l } of this.getSectionRowsFromChannel(t.id))
                n.isItemVisible(e, l) || tp.X8("voice-conversations");
    };
    render() {
        let { guildChannels: e, guildChannelsVersion: t, showNewUnreadsBar: n } = this.props;
        return (0, s.jsx)(en.V0, {
            children: (l) =>
                (0, s.jsx)(f.F, {
                    component: (0, s.jsx)(p.A, {
                        children: (0, s.jsx)(f.H, { id: l, children: em.intl.string(em.t.OGiMXJ) }),
                    }),
                    children: n
                        ? (0, s.jsxs)(r.Fragment, {
                              children: [
                                  (0, s.jsx)("div", {
                                      className: nr.Eo,
                                      children: (0, s.jsx)(sy, {
                                          position: "top",
                                          guildChannels: e,
                                          guildChannelsVersion: t,
                                          jumpToVoiceChannels: this.jumpToVoiceChannels,
                                          jumpToChannel: this.jumpToChannel,
                                      }),
                                  }),
                                  this.renderList(),
                                  (0, s.jsx)(sy, {
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
let rA = (e) => {
    let { guildId: t, selectedChannelId: n, selectedVoiceChannelId: l } = e,
        i = (0, u.bG)([Q.Ay], () => Q.Ay.keyboardModeEnabled),
        { analyticsLocations: a } = (0, et.Ay)(ee.A.GUILD_CHANNEL_LIST),
        o = (0, u.bG)([T.A], () => T.A.getChannel(n)),
        h = (0, u.bG)([T.A], () => T.A.getChannel(l)),
        A = (0, u.bG)([V.A], () => V.A.getGuildId()),
        g = (0, M.jN)(t),
        m = r.useRef(null),
        f = r.useCallback((e, t) => {
            let n = m.current;
            null != n &&
                (k.Ut1.test(t) || (0, eh.jq)(t)
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
            [tg.A, T.A, td.A],
            () => {
                let t;
                return [
                    (t = (0, R.ai)(e)
                        ? tA.default
                              .keys(td.A.getFavoriteChannels())
                              .map((e) => T.A.getChannel(e))
                              .filter(tu.Vq)
                              .filter((e) => e.isGuildStageVoice())
                        : tg.A.getChannels(e)).reduce((e, t) => {
                        let n = tg.A.getMutableParticipants(t.id, tm.ip.SPEAKER);
                        return ((e[t.id] = n.filter((e) => e.type === tm.wY.VOICE).map(tf)), e);
                    }, {}),
                    t.reduce((e, t) => {
                        let { id: n } = t;
                        return e + tg.A.getParticipantsVersion(n);
                    }, 0),
                ];
            },
            [e],
            th.D,
        );
        return t;
    })(t);
    return (0, s.jsx)(et.f5, {
        value: a,
        children: (0, s.jsx)(x.A, {
            section: k.JJy.GUILD_CHANNEL_LIST,
            children: (0, s.jsxs)(d.hD, {
                navigator: E,
                children: [
                    (0, s.jsx)(tE.q, { containerRef: E.containerProps.ref, itemType: q }),
                    (0, s.jsx)(rh, {
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
function rg(e) {
    let t = (function (e) {
            var t;
            let n,
                l,
                i =
                    ((t = e.id),
                    (n = (0, tD.A)(t)),
                    (l = (0, tO.Ay)(t)),
                    !(0, u.bG)(
                        [O.A],
                        () => {
                            if (null == t) return !1;
                            let e = O.A.getGuild(t);
                            return e?.features.has(k.GuildFeatures.HUB) ?? !1;
                        },
                        [t],
                    ) &&
                        (n || l.length > 0)),
                s = (0, tv.W)(e.id),
                r = (0, tU.vz)(e.id),
                a = (0, tb.r)(e),
                o = (0, tH.jz)(e),
                d = (0, tL.d)(e.id),
                c = (0, tS.bG)([ty.h], () => ty.h.getNewMemberActions(e.id), [e.id]),
                h = (0, tB.by)(e, "useGuildActionRows"),
                A = (0, tT.A)(e.id),
                g = (0, tM.jY)(e.id),
                m = (0, tR.fw)(e.id),
                f = (0, tP.Uq)(e.id, "useGuildActionRows"),
                p = [],
                C = e.features.has(k.GuildFeatures.HUB),
                E = e.features.has(k.GuildFeatures.COMMUNITY),
                x = e.features.has(k.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
                N = (0, tt.A)(e.id);
            tw.useConfig({ location: "useGuildActionRows" }).enabled;
            let _ = tl(e),
                I = (0, tV.bW)(e.id, "useGuildActionRows"),
                S = (0, tG.C$)(e.id, "useGuildActionRows"),
                b = e.features.has(k.GuildFeatures.GAME_SERVERS),
                G = (0, tj.N)("useGuildActionRows"),
                [j] = (0, ed.kn)(S && G && !b ? [el.M.EMPTY_GAME_SERVER_TAB] : [], void 0, !0);
            return (
                C && p.push(tk.n.GUILD_HUB_HEADER_OPTIONS),
                !g && d && A && null != c && c.length > 0
                    ? p.push(tk.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
                    : e.premiumProgressBarEnabled && _ > 0 && p.push(tk.n.GUILD_PREMIUM_PROGRESS_BAR),
                !C && d && p.push(tk.n.GUILD_HOME),
                f && p.push(tk.n.GUILD_SPACE),
                i && p.push(tk.n.GUILD_SCHEDULED_EVENTS),
                !C && E && p.push(tk.n.CHANNELS_AND_ROLES),
                r && p.push(tk.n.GUILD_ROLE_SUBSCRIPTIONS),
                a && p.push(tk.n.GUILD_SHOP),
                o && p.push(tk.n.GUILD_GAME_SHOP),
                ((m && (E || x)) || (s && e.features.has(k.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL))) &&
                    p.push(tk.n.GUILD_MOD_DASH_MEMBER_SAFETY),
                N && p.push(tk.n.GUILD_BOOSTS),
                I && p.push(tk.n.GUILD_OFFICIAL_MESSAGES),
                S && (b ? p.push(tk.n.GAME_SERVERS) : null != j && p.push(tk.n.GAME_SERVERS_EMPTY)),
                h && p.push(tk.n.GUILD_VIBEGRATIONS),
                p
            );
        })(e.guild),
        n = (0, u.cf)([t_.A], () => t_.A.getGuild(e.guildId, { guildActionRows: t })),
        { density: l } = (0, C.wR)();
    return (0, s.jsx)(rA, { ...e, ...n, density: l });
}
