n.d(t, { B: () => ru, i: () => rc }), n(321073);
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
                        (i = z(e, n)), (s = z(t, n)), (a = d(n)).unshift(o[0]);
                    }
                    if ((0, H.tr)(e.type) || e.isCategory()) {
                        let n = (0, G.A)(a.length > 0 ? a : o, l, (e) => {
                            let {
                                channel: { type: t },
                            } = e;
                            return (0, H.tr)(t);
                        });
                        (i = z(e, n)), (s = z(t, n)), d(n);
                    }
                    if (e.isGuildVocal() || e.isCategory()) {
                        let n = (0, G.A)(a.length > 0 ? a : o, l, (e) => {
                            let { channel: t } = e;
                            return t.isGuildVocal();
                        });
                        (i = z(e, n)), (s = z(t, n)), d(n);
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
                                return ((null != a.parent_id || i) && (!s || i)) || (n = e), !0;
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
    eg = n(632847),
    em = n(375708),
    ef = n(275833),
    ep = n(964306);
let eC = r.memo(function (e) {
    let { guildId: t, selected: l } = e,
        [i, a] = (0, ed.ww)([el.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        o = i === el.M.GAME_SERVER_HOSTING_NEW_BADGE,
        d = r.useCallback(() => {
            a(eA.i.USER_DISMISS), (0, eu.pX)(k.BVt.CHANNEL(t, eh.VV.GAME_SERVERS));
        }, [t, a]),
        c = r.useCallback(
            (e) => {
                e.stopPropagation(),
                    (0, I.openModalLazy)(async () => {
                        let { default: e } = await n.e("726702").then(n.bind(n, 758909));
                        return (n) => (0, s.jsx)(e, { ...n, guildId: t });
                    });
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
                d(e), A(e);
            },
            [d, A],
        ),
        m = r.useCallback(() => {
            g(eA.i.USER_DISMISS), (0, eu.pX)(k.BVt.CHANNEL(t, eh.VV.GAME_SERVERS));
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
    eb = n(533550),
    eG = n(624458),
    ej = n(844944),
    ev = n(513461),
    eR = n(663997),
    ey = n(221950);
function eM(e) {
    let { guild: t, selected: n } = e,
        l = (0, u.bG)([P.A], () => P.A.can(k.xBc.KICK_MEMBERS, t)),
        i = (0, u.bG)([ej.A], () => ej.A.getSubmittedGuildJoinRequestTotal(t.id)),
        a = l ? (i ?? 0) : 0;
    r.useEffect(() => {
        l &&
            t.features.has(k.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
            t.features.has(k.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            eG.A.fetchGuildJoinRequests({ guildId: t.id, status: ev.B5.SUBMITTED, limit: eR.L });
    }, [l, t]);
    let o = r.useCallback(() => {
            (0, ey.aZ)(t.id);
        }, [t.id]),
        d = (0, eb.q8)(t.id, el.M.MEMBERS_LAUNCH_UPSELL);
    return (0, s.jsx)("div", {
        ref: d,
        children: (0, s.jsx)(ec.G, {
            id: `members-${t.id}`,
            renderIcon: (e) => (0, s.jsx)(eS.n, { size: "md", color: "currentColor", className: e }),
            text: em.intl.string(em.t.oclz3Z),
            selected: n,
            onClick: o,
            trailing: a > 0 ? (0, s.jsx)(ea.hV, { count: a }) : null,
        }),
    });
}
var eL = n(632015);
function eT(e) {
    let { guild: t, selected: n } = e;
    return (0, s.jsx)(ec.G, {
        id: `guild-space-tab-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(eL.f, { size: "md", color: "currentColor", className: e }),
        text: em.intl.string(em.t["04IVMq"]),
        selected: n,
        onClick: function () {
            (0, eu.pX)(k.BVt.CHANNEL(t.id, eh.VV.GUILD_SPACE));
        },
    });
}
var eU = n(581007),
    eD = n(522435),
    eO = n(285406),
    eP = n(582904),
    eV = n(419534),
    ew = n(503698),
    eH = n.n(ew),
    eB = n(695366),
    ek = n(104510),
    eF = n(544048),
    eK = n(868652),
    ez = n(379229),
    eW = n(482487),
    eY = n(914732),
    eX = n(828162),
    eq = n(641641),
    eZ = n(247806);
function eJ(e) {
    let { indicator: t } = e;
    if (null == t) return null;
    switch (t.type) {
        case ez.cD.WARNING:
            return (0, s.jsx)(eB.E, { color: h.A.colors.STATUS_WARNING, size: "sm" });
        case ez.cD.UNREAD:
            return (0, s.jsx)(ea.hV, { count: t.count });
        default:
            return null;
    }
}
let e$ = { animation: { BEG: 0, END: 75 }, LOOP: { BEG: 76, END: 376 } },
    eQ = r.memo(function (e) {
        let { guildId: t, selected: l } = e,
            i = (0, eY.Ay)(t),
            { showNewBadgeOnRow: a, dismissNewBadgeIfShown: o } = (0, eW.A)(
                t,
                i?.indicator != null || i?.popout != null,
            ),
            d = r.useCallback(() => {
                o(),
                    (0, eK.Zm)(t),
                    (0, eX.A)(t, ee.A.GUILD_POWERUPS_CHANNEL_LIST_ROW),
                    i?.popout?.markAsDismissed(eA.i.INDIRECT_ACTION);
            }, [t, o, i]),
            c = r.useRef(null),
            A = (0, I.useModalsStore)(I.hasAnyModalOpenSelector),
            g = (0, u.bG)([eN.A], () => eN.A.hasLayers()),
            m = (0, eE.xr)((e) => e.fullScreenLayers.length > 0),
            f = A || g || m,
            p = r.useCallback(() => {
                if (i?.popout == null || f) return null;
                switch (i?.popout?.type) {
                    case ez.o.LEVEL_REACHED:
                        return (0, s.jsx)(ex.HW, { guildId: t, channelRowRef: c, ...i.popout });
                    case ez.o.PERKS_AVAILABLE:
                        return (0, s.jsx)(ex.UB, { guildId: t, channelRowRef: c, ...i.popout });
                    case ez.o.PERKS_PURCHASABLE:
                        return (0, s.jsx)(ex.lw, { guildId: t, channelRowRef: c, ...i.popout });
                    case ez.o.NEW_PERK_AVAILABLE:
                        return (0, s.jsx)(ex.bo, { guildId: t, channelRowRef: c, ...i.popout });
                    case ez.o.BOOST_TO_UNLOCK:
                        return (0, s.jsx)(ex.Gw, { guildId: t, channelRowRef: c, ...i.popout });
                    case ez.o.EXPIRING_PERK:
                        return (0, s.jsx)(ex.Mr, { guildId: t, channelRowRef: c, ...i.popout });
                    case ez.o.GAME_SERVER_HOSTING_AVAILABLE:
                    case ez.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE:
                        return (0, s.jsx)(ex.jz, { guildId: t, channelRowRef: c, ...i.popout });
                    case ez.o.GAME_SERVER_NEW_GAMES:
                        return (0, s.jsx)(ex.YX, { guildId: t, channelRowRef: c, ...i.popout });
                    case ez.o.GAME_SERVER_PRICING_CHANGE:
                        return (0, s.jsx)(ex.Ns, { guildId: t, channelRowRef: c, ...i.popout });
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
                (0, s.jsx)(ec.G, {
                    ref: c,
                    className: eZ.kL,
                    id: `skill-trees-${t}`,
                    renderIcon: (e) => (0, s.jsx)(ek._, { size: "md", className: e, color: "currentColor" }),
                    background:
                        i?.popout != null &&
                        (0, s.jsx)("div", {
                            className: eZ.Fi,
                            children: (0, s.jsx)(eF.t, {
                                nextScene: null == C ? "animation" : "LOOP",
                                className: eZ.UU,
                                sceneSegments: e$,
                                importData: () => n.e("867807").then(n.t.bind(n, 217762, 19)),
                                onScenePlay: x,
                                rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                            }),
                        }),
                    text: (0, s.jsx)("span", {
                        className: eH()({ [eZ.A7]: i?.showUnread === !0 }),
                        children: em.intl.string(eq.default.yv3DJJ),
                    }),
                    selected: l,
                    onClick: d,
                    showUnread: i?.showUnread === !0,
                    trailing: a
                        ? (0, s.jsx)(ea.Lp, {
                              text: em.intl.string(em.t.y2b7CA),
                              color: h.A.colors.BACKGROUND_BRAND.css,
                          })
                        : (0, s.jsx)(eJ, { indicator: i?.indicator }),
                }),
                p(),
            ],
        });
    });
var e0 = n(221877),
    e1 = n(834730),
    e3 = n(717421),
    e2 = n(442433),
    e9 = n(230135),
    e6 = n(228366);
let e7 = {};
class e5 extends u.Ay.PersistedStore {
    static displayName = "GuildBoostingProgressBarPersistedStore";
    static persistKey = "PremiumGuildProgressBarPersistedStore";
    initialize(e) {
        null != e && (e7 = e);
    }
    getState() {
        return e7;
    }
    getCountForGuild(e) {
        return e7[e];
    }
}
let e4 = new e5(e6.h, {
    APPLIED_GUILD_BOOST_COUNT_UPDATE: function (e) {
        let { guildId: t, premiumCount: n } = e;
        e7 = { ...e7, [t]: n };
    },
    APPLIED_GUILD_BOOST_COUNT_RESET: function () {
        e7 = {};
    },
});
var e8 = n(147925),
    te = n(363487),
    tt = n(568065);
function tn(e) {
    return (0, r.useMemo)(() => {
        if (null == e) return 0;
        let t = e?.features.has(k.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0 ? 0 : k.M2T[k.TVA.TIER_3],
            n = Object.values(tt.sy),
            l = Object.values(tt.YV);
        return (
            n.concat(l).forEach((n) => {
                null == n.includedInLevel && (n.isEnabled?.(e.id) ?? !0) && (t += n.boostPrice);
            }),
            t
        );
    }, [e]);
}
var tl = n(196577);
let ti = r.forwardRef((e, t) => {
    let { appliedBoostCount: n, maxBoostCount: l, premiumSubscriberCount: i, className: a } = e,
        o = n >= l,
        d = Math.min((n / l) * 100, 100),
        c = `calc(${d}% - 4px)`,
        [u, h] = (0, e3.z)(
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
            className: tl.hQ,
            children: [
                (0, s.jsx)("div", { className: eH()(tl.L$, a) }),
                (0, s.jsx)(e0.animated.div, { className: eH()(tl.qB, { [tl.mu]: d <= 5 }), style: u }),
                (0, s.jsxs)("div", {
                    className: tl.FS,
                    children: [
                        (0, s.jsxs)("div", {
                            className: tl.Ui,
                            children: [
                                (0, s.jsx)(e1.E, {
                                    className: tl.Qq,
                                    variant: "text-xs/semibold",
                                    children: em.intl.string(eq.default.NI6Ihe),
                                }),
                                i >= l &&
                                    (0, s.jsx)(e1.E, {
                                        className: tl.Qq,
                                        variant: "text-xs/semibold",
                                        children: "\uD83C\uDF89",
                                    }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: tl.Ui,
                            children: [
                                (0, s.jsx)(e1.E, {
                                    className: eH()(tl.Qq, tl.ue),
                                    variant: "text-xs/semibold",
                                    children: o
                                        ? em.intl.formatToPlainString(eq.default["Ehpq+7"], { appliedBoostCount: n })
                                        : em.intl.formatToPlainString(eq.default["/rbPDs"], {
                                              appliedBoostCount: n,
                                              maxBoostCount: l,
                                          }),
                                }),
                                (0, s.jsx)(e8.A, {
                                    width: 12,
                                    height: 12,
                                    direction: e8.A.Directions.RIGHT,
                                    className: eH()(tl.Qq, tl.ue),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
function ts(e) {
    let { guild: t, withMargin: l } = e,
        i = tn(t),
        a = (0, te.A)(t.id),
        o = r.useCallback(() => {
            (0, eX.A)(t.id, ee.A.GUILD_BOOSTING_SIDEBAR_DISPLAY);
        }, [t.id]),
        d = (0, u.bG)([e4], () => e4.getCountForGuild(t.id) ?? 0);
    r.useEffect(() => {
        d !== t.premiumSubscriberCount && (0, e9.u)(t.id, t.premiumSubscriberCount);
    }, [t.id, d, t.premiumSubscriberCount]);
    let c = r.useCallback(
        (e) => {
            a &&
                (0, e2.L3)(e, async () => {
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
        className: eH()(tl.kL, { [tl.aF]: l }),
        onContextMenu: c,
        children: (0, s.jsx)(ti, {
            appliedBoostCount: d,
            maxBoostCount: i,
            premiumSubscriberCount: t.premiumSubscriberCount,
        }),
    });
}
function tr(e) {
    let { guild: t, withMargin: n } = e;
    return (0, s.jsx)(ts, { guild: t, withMargin: n });
}
ti.displayName = "GuildPowerupsProgressBarUI";
var ta = n(455234),
    to = n(181079),
    td = n(607567),
    tc = n(403362),
    tu = n(996439),
    th = n(935208),
    tA = n(63995),
    tg = n(518769);
function tm(e) {
    let { voiceState: t, userNick: n, user: l } = e,
        i = (0, td.hz)(t, n);
    return { user: l, voiceState: t, nick: n, comparator: i };
}
var tf = n(787541),
    tp = n(79858),
    tC = n(600761),
    tE = n(72314),
    tx = n(297469),
    tN = n(960755),
    t_ = n(633965),
    tI = n(702841),
    tS = n(41200),
    tb = n(831617),
    tG = n(589603),
    tj = n(496767),
    tv = n(134413),
    tR = n(701785),
    ty = n(101611),
    tM = n(473529),
    tL = n(978165),
    tT = n(960253),
    tU = n(770666),
    tD = n(508654),
    tO = n(470452),
    tP = n(521427);
let tV = (0, n(945810).mj)({
    name: "2026-04-mobile-boost-progress-bar",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var tw = n(871123),
    tH = n(683180),
    tB = n(281405),
    tk = n(3026),
    tF = n(821609),
    tK = n(499373),
    tz = n(259678),
    tW = n(508770),
    tY = n(847374),
    tX = n(285796),
    tq = n(983851),
    tZ = n(914430),
    tJ = n(47167),
    t$ = n(485947),
    tQ = n(970853),
    t0 = n(93055),
    t1 = n(349828),
    t3 = n(266361),
    t2 = n(551851),
    t9 = n(391507);
function t6(e) {
    e.stopPropagation();
}
function t7(e) {
    let { label: t, onClick: n, tabIndex: l } = e;
    return (0, s.jsx)(ei.m, {
        text: t,
        children: (0, s.jsx)(es.D, {
            className: eH()(t9.c9, t9.ih),
            onClick: n,
            tabIndex: l,
            role: "button",
            "aria-label": t,
            children: (0, s.jsx)(tK.T, { size: "xs", color: "currentColor", className: t9.hs }),
        }),
    });
}
let t5 = $(
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
                C = (0, tJ.Ay)(l);
            t = null != h ? (c > h ? t9.mU : t9.TR) : t9.fx;
            let E = r.useCallback(() => {
                    f ? (0, tZ.fh)(l.id) : (0, tZ.Gv)(l.id);
                }, [l.id, f]),
                x = r.useCallback(
                    (e) => {
                        if ("null" !== l.id) {
                            let t = O.A.getGuild(l.getGuildId());
                            null != t &&
                                (0, e2.L3)(e, async () => {
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
                                n.e("766811"),
                                n.e("746309"),
                                n.e("778799"),
                                n.e("203589"),
                                n.e("692513"),
                                n.e("589916"),
                                n.e("460773"),
                                n.e("208018"),
                                n.e("120379"),
                                n.e("993199"),
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
                    let n = (0, u.bG)([to.A], () => to.A.autoAddJoinedThreads),
                        { isAtLimit: l } = (0, t0.ft)();
                    return n &&
                        l &&
                        null != t &&
                        (0, R.ai)(e.getGuildId()) &&
                        e.type === k.rbe.GUILD_CATEGORY &&
                        t.trim().toLowerCase() === t1.A.toLowerCase()
                        ? { label: em.intl.string(t3.default.WsUrMD), tooltip: em.intl.string(t3.default.dW9Kov) }
                        : null;
                })(l, C),
                S = (0, tQ.A)(l);
            null == S && p && !o && (S = { label: em.intl.string(em.t["fUYU+j"]), perform: N });
            let { role: b, tabIndex: G, ...j } = (0, d.rm)(l.id),
                v = r.useRef(null),
                y = r.useRef(null),
                M = (0, s.jsxs)("li", {
                    className: t,
                    "data-dnd-name": C,
                    children: [
                        (0, s.jsx)(tz.vN, {
                            focusTarget: v,
                            ringTarget: y,
                            offset: { left: 4, right: 4 },
                            children: (0, s.jsxs)("div", {
                                ref: y,
                                className: eH()(t9.Ki, t9.iE, { [t9.yZ]: f, [t9.SU]: m, [t9.vk]: !0 }),
                                onContextMenu: x,
                                children: [
                                    (0, s.jsxs)(es.D, {
                                        innerRef: v,
                                        className: t9.rb,
                                        tabIndex: G,
                                        ...j,
                                        onClick: E,
                                        "aria-label": em.intl.formatToPlainString(em.t.y5l3J2, { categoryName: C }),
                                        "aria-expanded": !f,
                                        focusProps: { enabled: !1 },
                                        children: [
                                            (0, s.jsx)(t$.A, {
                                                className: t9.UU,
                                                children: (0, s.jsx)(tk.A, { children: C }),
                                            }),
                                            null != _
                                                ? (0, s.jsx)("span", {
                                                      className: t9.qS,
                                                      children: (0, s.jsx)(ei.m, {
                                                          asContainer: !0,
                                                          text: _.tooltip,
                                                          children: (0, s.jsx)(tW.E, {
                                                              type: { text: _.label },
                                                              variant: "default",
                                                          }),
                                                      }),
                                                  })
                                                : null,
                                            A
                                                ? null
                                                : (0, s.jsx)(tY.a, {
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
                                            null != S
                                                ? (0, s.jsx)(t7, { label: S.label, onClick: S.perform, tabIndex: G })
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
    t4 = r.memo(function (e) {
        let { name: t, onDismiss: n, className: l } = e;
        return (0, s.jsx)("li", {
            className: eH()(l, t9.fx),
            children: (0, s.jsxs)("div", {
                className: eH()(t9.Ki, t9._V),
                children: [
                    (0, s.jsx)("div", {
                        className: t9.rb,
                        children: (0, s.jsx)(t$.A, { className: t9.UU, children: (0, s.jsx)(tk.A, { children: t }) }),
                    }),
                    null != n
                        ? (0, s.jsx)(ei.m, {
                              asContainer: !0,
                              text: em.intl.string(em.t["5qNmsU"]),
                              children: (0, s.jsx)(es.D, {
                                  className: t9.r,
                                  onClick: n,
                                  children: (0, s.jsx)(tX.a, { size: "md", color: "currentColor", className: t9.X8 }),
                              }),
                          })
                        : null,
                ],
            }),
        });
    }),
    t8 = r.memo(function (e) {
        let { category: t } = e,
            n = (0, u.bG)([t2.A], () => t2.A.isVoiceCategoryCollapsed(t.guild.id)),
            l = r.useCallback(() => {
                var e, l;
                n
                    ? ((e = t.guild.id), e6.h.dispatch({ type: "VOICE_CATEGORY_EXPAND", guildId: e, expand: !0 }))
                    : ((l = t.guild.id), e6.h.dispatch({ type: "VOICE_CATEGORY_COLLAPSE", guildId: l, expand: !1 }));
            }, [t.guild.id, n]);
        return (0, s.jsx)("div", {
            className: t9.oA,
            children: (0, s.jsx)(tF.$, {
                variant: "secondary",
                fullWidth: !0,
                onClick: l,
                icon: tq.H,
                text: n ? em.intl.string(em.t["/eB9Bg"]) : em.intl.string(em.t.Q2gPWl),
            }),
        });
    }),
    ne = r.memo(function (e) {
        let { category: t, channel: n } = e,
            l = (0, u.bG)([t2.A], () => t2.A.isVoiceCategoryCollapsed(t.guild.id));
        return l || null == n || n.record.type === k.rbe.GUILD_CATEGORY
            ? l
                ? (0, s.jsx)("li", {
                      className: t9.fx,
                      children: (0, s.jsx)("div", {
                          className: eH()(t9.Ki, t9._V),
                          children: (0, s.jsx)(t$.A, {
                              className: t9.UU,
                              children: (0, s.jsx)(tk.A, { children: em.intl.string(em.t["V/u9Dy"]) }),
                          }),
                      }),
                  })
                : null
            : (0, s.jsx)("div", { style: { height: 16 } });
    }),
    nt = r.memo(function (e) {
        let { channel: t } = e,
            n = (0, tJ.Ay)(t);
        return (0, s.jsx)("li", {
            className: t9.fx,
            children: (0, s.jsx)("div", {
                className: eH()(t9.Ki, t9._V),
                children: (0, s.jsx)(t$.A, { className: t9.UU, children: (0, s.jsx)(tk.A, { children: n }) }),
            }),
        });
    });
var nn = n(728321),
    nl = n(244083);
let ni = { origin: { x: -36, y: 7 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } };
var ns = n(906659);
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
            null != a && i.includes(a) && (t = (0, eV.xb)(l)), (0, eV.DD)(n.id, i, t);
        }, [n.id, a, l, i]),
        { density: c } = (0, C.wR)(),
        u = "compact" === c ? 8 : 12;
    switch (t) {
        case tx.PU:
            return (0, s.jsx)("div", { style: { height: u } });
        case tx.bK:
            if (n.features.has(k.GuildFeatures.HUB)) return null;
            return (0, s.jsx)("div", { style: { height: u } });
        case tx.HP:
            return (0, s.jsx)(t4, { name: em.intl.string(em.t.mlPMCy) });
        case l.recentsSectionNumber:
            return (0, s.jsx)(t4, { name: em.intl.string(em.t.gKcrqM), onDismiss: d });
        case l.voiceChannelsSectionNumber: {
            let e = l.getCategoryFromSection(l.voiceChannelsSectionNumber);
            if (null == e || e.isEmpty()) return null;
            let n = l.getChannelFromSectionRow(t, 0)?.channel;
            return (0, s.jsxs)(r.Fragment, {
                children: [(0, s.jsx)("div", { className: ns.ts }), (0, s.jsx)(ne, { category: e, channel: n })],
            });
        }
        case tx.TF: {
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
    nc = n(147036);
function nu(e, t, n) {
    return {
        hasDivider:
            !(function (e, t) {
                if (t === tx.PU) {
                    let t = e.getGuildActionSection().getRows();
                    return (
                        (1 === t.length && t[0] === tB.n.GUILD_PREMIUM_PROGRESS_BAR) ||
                        e.getGuildActionSection().isEmpty()
                    );
                }
                return 0 === e.getSections(!1)[t];
            })(e, n) &&
            (n === tx.PU ||
                ((0, R.ai)(e.id)
                    ? n !== e.getSections(!1).length - 1
                    : n === tx.HP ||
                      (!!t && n !== tx.bK && (n === e.recentsSectionNumber || (e.voiceChannelsSectionNumber, !1))))),
        canHaveVoiceSummary:
            n !== tx.PU &&
            n !== tx.HP &&
            n !== tx.bK &&
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
            g = r.useMemo(() => (t === tx.PU ? null : n.getCategoryFromSection(t)), [n, t, l]),
            m = (0, M.jN)(a),
            { enableWaveformIcon: f } = (0, no.b)(a, "ChannelListSectionFooter"),
            p = (0, u.yK)([w.Ay], () => {
                if (null == g || !g.isCollapsed || !A) return [];
                let e = g.getChannelRecords(),
                    t = [];
                for (let n of e) {
                    if (!n.isGuildVocal()) continue;
                    let e = w.Ay.isChannelOrParentOptedIn(a, n.id);
                    (!m || e) && t.push(n);
                }
                return t;
            }, [g, A, a, m]),
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
                                  ? (e) => (0, s.jsx)(nd.A, { color: "currentColor", className: eH()(e, ep.Gj) })
                                  : void 0,
                          }),
                      }),
                      E,
                  ],
              })
            : E;
    });
var ng = n(625903),
    nm = n(283973),
    nf = n(933832),
    np = n(435183),
    nC = n(698441),
    nE = n(855687),
    nx = n(816662),
    nN = n(446600),
    n_ = n(616356);
function nI(e, t, n) {
    return null != t && !!t && !F(n, e.type);
}
function nS(e, t) {
    return null == t ? ep.fx : e > t ? ep.mU : ep.TR;
}
function nb(e) {
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
                  className: eH()(ep.Xs, i ? ep.Tf : void 0, r ? ep.bw : ep.UI),
                  onClick: function () {
                      np.Ay.open(t.id);
                  },
                  tabIndex: l,
                  "aria-label": em.intl.string(em.t["3gUsJb"]),
                  children: (0, s.jsx)(ng.SettingsIcon, { size: "xs", color: "currentColor", className: ep.gE }),
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
        c = (0, u.bG)([O.A], () => O.A.getGuild(t.getGuildId())),
        h = (0, u.bG)([nN.A], () => nN.A.getStageInstanceByChannel(t.id), [t.id]),
        A = (0, u.bG)([nC.Ay], () => nC.Ay.getActiveEventByChannel(t.id), [t.id]),
        g = (0, u.bG)([P.A], () => (0, nE.K)(P.A, c, t, h)),
        m = (0, u.bG)([], () =>
            t?.type === k.rbe.GUILD_VOICE ? em.intl.string(em.t["EE+P0H"]) : em.intl.string(em.t["0jeAXt"]),
        ),
        f = r.useRef(null);
    if (i || !g || t.isModeratorReportChannel() || t.isThread()) return null;
    let p = (0, s.jsx)(nm.R, { size: "xs", className: ep.gE, "aria-hidden": !0, color: "currentColor" });
    return (
        l &&
            (p = (0, s.jsx)(nn.A, {
                childRef: f,
                tutorialId: "instant-invite",
                position: "left",
                children: (0, s.jsx)("div", { ref: f, children: p }),
            })),
        (0, s.jsx)(ei.m, {
            asContainer: !0,
            text: m,
            children: (0, s.jsx)(es.D, {
                className: eH()(ep.Xs, o ? ep.Tf : void 0, d ? ep.bw : ep.UI),
                onClick: function () {
                    if (null != c) {
                        let e = n_.A.getAllActiveStreams().filter(
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
function nj(e) {
    let { channel: t } = e;
    return (0, s.jsx)(ei.m, {
        asContainer: !0,
        text: em.intl.string(em.t["ROh4T+"]),
        children: (0, s.jsx)(es.D, {
            className: ep.Xs,
            onClick: function () {
                (0, nx.Ol)(t.guild_id, t.id);
            },
            "aria-label": em.intl.string(em.t["ROh4T+"]),
            children: (0, s.jsx)(er.P, { size: "xs", color: "currentColor", className: ep.gE }),
        }),
    });
}
function nv(e) {
    let { channel: t } = e;
    return (0, s.jsx)(ei.m, {
        asContainer: !0,
        text: em.intl.string(em.t["N2c/Un"]),
        children: (0, s.jsx)(es.D, {
            className: ep.Xs,
            onClick: function () {
                (0, nx.jA)(t.guild_id, t.id, !0, { section: k.JJy.CHANNEL_LIST });
            },
            "aria-label": em.intl.string(em.t["N2c/Un"]),
            children: (0, s.jsx)(nf.CheckmarkLargeIcon, { size: "xs", color: "currentColor", className: ep.gE }),
        }),
    });
}
class nR extends r.PureComponent {
    static defaultProps = { isDefaultChannel: !1 };
    renderEditButton() {
        return (0, s.jsx)(nb, { ...this.props });
    }
    renderInviteButton() {
        return (0, s.jsx)(nG, { ...this.props });
    }
    renderRemoveSuggestionButton() {
        return (0, s.jsx)(nj, { ...this.props });
    }
    renderAcceptSuggestionButton() {
        return (0, s.jsx)(nv, { ...this.props });
    }
    getClassName() {
        let { position: e, sortingPosition: t } = this.props;
        return nS(e, t);
    }
    isDisabled() {
        let { channel: e, sorting: t, sortingType: n } = this.props;
        return nI(e, t, n);
    }
}
var ny = n(166444),
    nM = n(790782);
let nL = $(function (e) {
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
        C = (0, tJ.Ay)(m),
        E = (0, u.bG)([P.A], () =>
            null != f ? P.A.can(k.xBc.MANAGE_CHANNELS, f) : null != t && P.A.can(k.xBc.MANAGE_CHANNELS, t),
        ),
        x = r.useCallback(
            (e) => {
                null != m &&
                    (0, e2.L3)(e, async () => {
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
    let N = nS(i, c),
        _ = nI(m, o, d),
        I = (0, s.jsx)("div", {
            className: eH()(N, { [ep.r9]: _, [ep.wH]: p }),
            "data-dnd-name": C,
            children: (0, s.jsxs)(ny.Ay, {
                className: ep.Ki,
                channel: m,
                guild: t,
                selected: p,
                onContextMenu: x,
                forceInteractable: !0,
                resolvedUnreadSetting: nM.e.ONLY_MENTIONS,
                children: [
                    (0, s.jsx)(nG, { channel: m, tabIndex: g }),
                    (0, s.jsx)(nb, { channel: m, disableManageChannels: a, tabIndex: g }),
                ],
            }),
        });
    return E && (I = A(h(I))), I;
});
var nT = n(34188),
    nU = n(733391),
    nD = n(832163),
    nO = n(517907),
    nP = n(31969),
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
            [{ shineSpring: d }, c] = (0, e3.z)(() => ({
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
                        (0, s.jsx)(e0.animated.div, {
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
    nX = n(680649),
    nq = n(672812),
    nZ = n(427797);
let nJ = r.memo(function (e) {
    let { guild: t, selected: l } = e,
        i = r.useRef(null),
        a = r.useRef(null),
        o = (0, I.useHasAnyModalOpen)(),
        d = (0, u.bG)([eN.A], () => eN.A.hasLayers()),
        c = (0, eE.xr)((e) => e.fullScreenLayers.length > 0);
    r.useEffect(() => {
        (0, nU.Kh)(t.id);
    }, [t.id]);
    let A = (0, u.bG)([nD.A], () => nD.A.getAnnouncement(t.id)),
        g = A?.state === "success" ? A.announcement : void 0,
        [m, f] = (0, ed.x_)(el.M.GAME_SHOP_NEW_BADGE, t.id, g?.id ?? "", void 0, !0),
        p = m === el.M.GAME_SHOP_NEW_BADGE && null != g,
        C = (0, tw.nY)(t.id),
        E = (0, nP.F)("storefront_badge", { applicationId: C }),
        x = (0, nO.A)({ applicationId: C, location: "game_shop_channel_row" }),
        N = null;
    p ? (N = em.intl.string(em.t.y2b7CA)) : x && (N = em.intl.string(nX.default.hriMCc)), null != E && (N = E.text);
    let [_, S] = (0, ed.x_)(el.M.GAME_SHOP_NEW_DROP_POPOVER, t.id, g?.id ?? ""),
        b = _ === el.M.GAME_SHOP_NEW_DROP_POPOVER && null != g;
    r.useEffect(() => {
        l && (p && f(eA.i.INDIRECT_ACTION), b && S(eA.i.INDIRECT_ACTION));
    }, [f, S, l, p, b]);
    let G = r.useCallback(() => {
            f(eA.i.TAKE_ACTION), S(eA.i.TAKE_ACTION);
            let e = (0, tw.mq)(t.id),
                n = nD.A.getStorefrontState(e)?.activePage ?? 0;
            (0, eu.pX)(k.BVt.CHANNELS_GAME_SHOP(t.id, n));
        }, [t.id, f, S]),
        j = r.useCallback(() => {
            (0, nV.X)({ guildId: t.id, forceFetch: b });
        }, [t.id, b]),
        v = r.useCallback(() => {
            S(eA.i.USER_DISMISS);
        }, [S]),
        R = r.useCallback(
            (e) => {
                null != t &&
                    (0, e2.L3)(e, async () => {
                        let { default: e } = await n.e("899523").then(n.bind(n, 41614));
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
                (0, s.jsx)(ec.G, {
                    background: (0, s.jsx)("div", { className: nZ.D }),
                    innerClassName: nZ.Z,
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
                    text: (0, s.jsx)(e1.E, {
                        variant: "text-md/medium",
                        className: nq.UU,
                        children: em.intl.string(em.t.vyaWs7),
                    }),
                    selected: l,
                    onMouseDown: j,
                    onClick: G,
                    onContextMenu: R,
                    trailing: (0, s.jsxs)(s.Fragment, {
                        children: [
                            null != N && (0, s.jsx)(ea.Lp, { text: N, color: h.A.colors.BACKGROUND_BRAND.css }),
                            e,
                        ],
                    }),
                }),
            [t.id, l, j, G, R, N],
        ),
        L = r.useMemo(() => {
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
        T = r.useCallback(
            () =>
                b && null != L
                    ? (0, s.jsx)(nw.A, {
                          onActionClick: G,
                          onActionMouseDown: j,
                          onRender: y,
                          onRequestClose: v,
                          targetElementRef: a,
                          ...L,
                      })
                    : null,
            [b, L, G, j, y, v],
        );
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(nK, { ref: i, children: M }), !o && !d && !c && T()] });
});
var n$ = n(740426),
    nQ = n(826673),
    n0 = n(591552),
    n1 = n(202776),
    n3 = n(454058),
    n2 = n(573163);
function n9(e) {
    let { guild: t, selected: l } = e,
        i = (0, n1.A)(t),
        a = (0, nQ.HX)(el.M.CHANNEL_BROWSER_NEW_BADGE_NUX),
        o = (0, tI.yK)([n3.A], () =>
            Array.from(n3.A.getNewChannelIds(t.id)).filter((e) => n3.A.shouldIndicateNewChannel(t.id, e)),
        ),
        d = (0, tI.bG)([n2.Ay], () => n2.Ay.hasUnread(t.id, nM.P.GUILD_ONBOARDING_QUESTION)),
        c = o.length > tx.rR,
        u = (0, tI.bG)([n0.A, n2.Ay], () => {
            let e = n0.A.lastFetchedAt(t.id),
                n = n2.Ay.lastMessageId(t.id, nM.P.GUILD_ONBOARDING_QUESTION);
            if (null == n) return !1;
            let l = th.default.extractTimestamp(n);
            return null != e && e > l;
        }),
        A = r.useCallback(() => {
            (0, eu.pX)(k.BVt.CHANNEL(t.id, i ? eh.VV.CUSTOMIZE_COMMUNITY : eh.VV.CHANNEL_BROWSER));
        }, [t.id, i]),
        g = r.useCallback(
            (e) => {
                (0, e2.L3)(e, async () => {
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
            renderIcon: (e) => (0, s.jsx)(n$.k, { size: "md", color: "currentColor", className: e }),
            text: i ? em.intl.string(em.t.h9mGOP) : em.intl.string(em.t.et6wav),
            selected: l,
            onClick: A,
            onContextMenu: g,
            trailing: m,
        })
    );
}
var n6 = n(855473);
function n7(e) {
    let { guild: t, selected: n } = e;
    return (0, s.jsx)(ec.G, {
        id: `home-tab-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(n6.Z, { size: "md", color: "currentColor", className: e }),
        text: em.intl.string(em.t.VbpLyU),
        selected: n,
        onClick: function () {
            (0, eu.pX)(k.BVt.CHANNEL(t.id, eh.VV.GUILD_HOME));
        },
    });
}
var n5 = n(297264),
    n4 = n(5373),
    n8 = n(65995),
    le = n(195702);
function lt(e, t) {
    return (0, s.jsx)(e1.E, { variant: "text-xs/bold", color: "text-default", children: e }, t);
}
let ln = r.memo(function (e) {
    let { guild: t } = e,
        n = (0, u.bG)([tR.h], () => tR.h.getNewMemberActions(t.id), [t.id]),
        l = (0, u.bG)([n8.A], () => n8.A.getCompletedActions(t.id)),
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
                className: le.G9,
                onClick: function () {
                    (0, eu.pX)(k.BVt.CHANNEL(t.id, eh.VV.GUILD_HOME));
                },
                children: [
                    (0, s.jsxs)("div", {
                        className: le.A1,
                        children: [
                            (0, s.jsx)(n5.D, { variant: "heading-sm/bold", children: em.intl.string(em.t.SnrR3x) }),
                            (0, s.jsxs)("div", {
                                className: le.Ib,
                                children: [
                                    (0, s.jsx)(e1.E, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        className: le.Cv,
                                        children: em.intl.format(em.t.eqZ1lW, {
                                            numberHook: lt,
                                            total: a.toString(),
                                            completed: i.toString(),
                                        }),
                                    }),
                                    (0, s.jsx)(e8.A, {
                                        className: le.UE,
                                        width: 16,
                                        height: 16,
                                        direction: e8.A.Directions.RIGHT,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, s.jsx)(n4.i, {
                        className: le.hr,
                        foregroundGradientColor: [
                            h.A.unsafe_rawColors.GREEN_300.css,
                            h.A.unsafe_rawColors.GREEN_230.css,
                        ],
                        percent: (i / a) * 100 + 3,
                        animate: !0,
                    }),
                ],
            }),
            (0, s.jsx)("div", { role: "separator", className: le.yF }),
        ],
    });
});
var ll = n(581925);
function li(e) {
    let { guild: t, selected: n } = e;
    return (0, s.jsx)(ec.G, {
        id: `official-messages-page-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(ll.L, { size: "md", color: "currentColor", className: e }),
        text: em.intl.string(em.t.xHEzFh),
        selected: n,
        onClick: function () {
            (0, eu.pX)(k.BVt.CHANNEL(t.id, eh.VV.GUILD_OFFICIAL_MESSAGES));
        },
    });
}
var ls = n(514179);
function lr(e) {
    let { guild: t, selected: l } = e;
    return (0, s.jsx)(ec.G, {
        id: `subscriptions-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(ls.A, { className: e }),
        text: em.intl.string(em.t["KzCF/6"]),
        selected: l,
        onClick: function () {
            (0, eu.pX)(k.BVt.CHANNEL(t.id, eh.VV.ROLE_SUBSCRIPTIONS));
        },
        onContextMenu: function (e) {
            null != t &&
                (0, e2.L3)(e, async () => {
                    let { default: e } = await n.e("571911").then(n.bind(n, 978554));
                    return (n) => (0, s.jsx)(e, { ...n, guild: t });
                });
        },
    });
}
var la = n(506774),
    lo = n(95561),
    ld = n(289397),
    lc = n(486418),
    lu = n(575926),
    lh = n(440293),
    lA = n(174459),
    lg = n(634654),
    lm = n(888918);
function lf(e) {
    let { guildId: t, selected: n, handleClick: l } = e,
        i = (0, lh.w)(t),
        r = (0, tI.bG)([O.A], () => O.A.getGuild(t)),
        a = r?.features.has(k.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !0,
        o = "false" === la.w.get(lg.bJ, "false"),
        d = (0, tI.bG)([Q.Ay], () => Q.Ay.useReducedMotion);
    return (0, s.jsx)(ec.G, {
        id: `shop-${t}`,
        className: eH()(lm.A2, { [lm.wH]: n, [lm.ST]: o }),
        innerClassName: lm.LE,
        renderIcon: (e) => (0, s.jsx)(lu.h, { width: 20, height: 20, className: eH()([e, lm.sV]) }),
        text: em.intl.string(em.t.al5EXL),
        selected: n,
        onClick: l,
        trailing: (0, s.jsxs)("div", {
            className: lm.ai,
            children: [
                d
                    ? (0, s.jsx)(ea.Lp, {
                          color: h.A.unsafe_rawColors.BRAND_260.css,
                          text: em.intl.string(em.t.y2b7CA),
                          className: lm.Ad,
                      })
                    : (0, s.jsx)("img", {
                          src: (0, ld.n)("server_products/storefront/money.gif"),
                          className: lm.TG,
                          alt: "",
                      }),
                n &&
                    (0, s.jsx)(es.D, {
                        className: lm.b,
                        onClick: function (e) {
                            e.stopPropagation(),
                                (0, nQ.Dr)(el.M.SERVER_SHOP_PHANTOM_PREVIEW),
                                lA.default.track(k.HAw.GUILD_SHOP_PREVIEW_CLICK, {
                                    ...(0, lo.H$)(t),
                                    action_taken: lg.hN.DISMISS_CHANNEL_ROW,
                                }),
                                (i && a) || (0, eu.bG)(k.BVt.CHANNEL(t, D.Ay.getDefaultChannel(t)?.id));
                        },
                        "aria-label": em.intl.string(em.t.cpT0Cq),
                        children: (0, s.jsx)(tX.a, { size: "xs", color: "currentColor" }),
                    }),
            ],
        }),
    });
}
function lp(e) {
    let { guild: t, selected: l } = e;
    function i() {
        la.w.set(lg.bJ, "true"), (0, eu.pX)(k.BVt.CHANNEL(t.id, eh.VV.GUILD_SHOP));
    }
    return (0, lc.P)(t)
        ? (0, s.jsx)(lf, { guildId: t.id, selected: l, handleClick: i })
        : (0, s.jsx)(ec.G, {
              id: `shop-${t.id}`,
              renderIcon: (e) => (0, s.jsx)(lu.h, { width: 20, height: 20, className: e }),
              text: em.intl.string(em.t.al5EXL),
              selected: l,
              onClick: i,
              onContextMenu: function (e) {
                  null != t &&
                      (0, e2.L3)(e, async () => {
                          let { default: e } = await n.e("852565").then(n.bind(n, 345332));
                          return (n) => (0, s.jsx)(e, { ...n, guild: t });
                      });
              },
          });
}
var lC = n(308528),
    lE = n(534890),
    lx = n(262763),
    lN = n(499211),
    l_ = n(406704),
    lI = n(747926),
    lS = n(977997),
    lb = n(807632),
    lG = n(37411);
function lj(e) {
    let { thread: t, tabIndex: n } = e,
        l = (0, lb.YG)(t),
        i = (0, lb.IO)(t),
        r = (0, l_._M)(t);
    return l && i && r ? (0, s.jsx)(lv, { thread: t, tabIndex: n }) : null;
}
function lv(e) {
    let { thread: t, tabIndex: n } = e,
        l = (0, u.bG)([lS.A], () => lS.A.isInChannel(t.id), [t.id]),
        { needSubscriptionToAccess: i } = (0, lN.A)(t.id),
        a = r.useCallback(() => {
            lx.A.handleVoiceConnect({ channel: t, connected: l, needSubscriptionToAccess: i, locked: !1 });
        }, [t, l, i]),
        o = r.useCallback(() => {
            (0, lI.JA)(t, !0, lG.H9.CHANNEL_LIST);
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
                    children: (0, s.jsx)(tq.H, { size: "xs", color: "currentColor", className: ep.gE }),
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
                    children: (0, s.jsx)(lE.ChatIcon, { size: "xs", color: "currentColor", className: ep.gE }),
                }),
            }),
        ],
    });
}
var lR = n(897898),
    ly = n(152007);
function lM(e) {
    return null != e && e > 0;
}
var lL = n(405018),
    lT = n(428689),
    lU = n(525093);
function lD(e) {
    let { total: t, users: n, videoLimit: l } = e;
    return (0, s.jsxs)("div", {
        className: lU.iE,
        children: [
            (0, s.jsxs)(e1.E, {
                tag: "span",
                color: "text-subtle",
                variant: "text-xs/medium",
                className: eH()(lU.VV, { [lU.Ki]: l, [lU.$G]: n >= 100 }),
                children: [
                    l ? (0, s.jsx)(lT.VideoIcon, { size: "md", color: "currentColor", className: lU.LB }) : null,
                    n.toString().padStart(2, "0"),
                ],
            }),
            (0, s.jsx)(e1.E, {
                tag: "span",
                color: "text-subtle",
                variant: "text-xs/medium",
                className: eH()(lU.X5, { [lU.$G]: t >= 100 }),
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
var lP = n(146630);
function lV(e) {
    let { mentionsCount: t, isMentionLowImportance: n } = e;
    return (0, s.jsx)("div", {
        className: lP.R,
        "aria-hidden": !0,
        children: (0, s.jsx)(ea.hV, {
            count: t,
            color: n ? h.A.colors.BACKGROUND_MOD_STRONG.css : h.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
        }),
    });
}
var lw = n(588224),
    lH = n(447199);
function lB(e) {
    let { thread: t, countInVoice: n, hasVideo: l, mentionCount: i, isMentionLowImportance: r } = e,
        a = n > 0 && t.userLimit > 0,
        o = lM(i);
    return a || o
        ? (0, s.jsxs)("div", {
              className: ep.yW,
              children: [
                  a ? (0, s.jsx)(lO, { userCount: n, video: l, channel: t }) : null,
                  o ? (0, s.jsx)(lV, { mentionsCount: i, isMentionLowImportance: r }) : null,
              ],
          })
        : null;
}
function lk(e) {
    let { style: t, withGuildIcon: n, inverted: l } = e,
        i = { className: eH()(lH.GI, { [lH.a7]: n }, { [lH.BJ]: l }), style: t },
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
            c = (0, u.bG)([td.Ay], () => td.Ay.getVoiceStatesForChannel(t), [t]),
            h = (0, u.bG)([lS.A], () => lS.A.hasVideo(t.id)),
            {
                unread: A,
                mentionCount: g,
                isMentionLowImportance: m,
            } = (0, u.cf)([n2.Ay], () => ({
                unread: n2.Ay.hasUnread(t.id),
                mentionCount: n2.Ay.getMentionCount(t.id),
                isMentionLowImportance: n2.Ay.getIsMentionLowImportance(t.id),
            })),
            f = (0, u.bG)([ly.A], () => ly.A.isMuted(t.id)),
            p = r.useCallback(
                (e) => {
                    (0, lI.JA)(t, !e.shiftKey, lG.H9.CHANNEL_LIST);
                },
                [t],
            ),
            C = r.useCallback(() => {
                lC.A.preload(t.guild_id, t.id);
            }, [t.guild_id, t.id]),
            E = r.useCallback(
                (e) => {
                    (0, lR.A)(e, t);
                },
                [t],
            ),
            x = r.useCallback(
                (e) => {
                    let l = T.A.getChannel(t.id);
                    null != l &&
                        (0, e2.L3)(e, async () => {
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
            N = null == c ? 0 : c.length,
            { role: _, ...I } = (0, d.rm)(t.id),
            S = r.useRef(null),
            b =
                g > 0
                    ? em.intl.formatToPlainString(em.t["ZL7+I6"], { channelName: t.name, mentionCount: g })
                    : A
                      ? em.intl.formatToPlainString(em.t.YlVvmc, { channelName: t.name })
                      : em.intl.formatToPlainString(em.t["0nZpiF"], { channelName: t.name });
        return (0, s.jsxs)("li", {
            role: _,
            className: eH()(ep.fx, { [ep.wH]: l }),
            children: [
                (0, s.jsx)(lk, { withGuildIcon: o }),
                a
                    ? null
                    : (0, s.jsx)(lk, {
                          withGuildIcon: o,
                          inverted: !0,
                          style: { transform: "rotateX(180deg) translateY(-9px)" },
                      }),
                (0, s.jsx)(tz.vN, {
                    focusTarget: S,
                    ringTarget: S,
                    offset: { top: 2, bottom: 2, right: 4 },
                    children: (0, s.jsxs)("div", {
                        className: eH()(ep.Ki, nq.iE, nq.ZS, {
                            [nq.J1]: l,
                            [nq.F4]: !l && f,
                            [nq.V2]: !f && !l && A,
                            [nq.lY]: o,
                        }),
                        onMouseDown: C,
                        onContextMenu: x,
                        children: [
                            !A || f || l ? null : (0, s.jsx)("div", { className: eH()(nq.gy, nq.WS) }),
                            (0, s.jsx)(es.D, {
                                ...I,
                                innerRef: S,
                                className: nq.nf,
                                onClick: p,
                                onAuxClick: E,
                                "aria-label": b,
                                focusProps: { enabled: !1 },
                                children: (0, s.jsxs)("div", {
                                    className: eH()(nq.Y5, nq.__invalid_threadMainContent),
                                    children: [
                                        (0, s.jsx)(tk.A, {
                                            className: nq.UU,
                                            "aria-hidden": !0,
                                            children: (0, s.jsx)(e1.E, {
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
                                                (0, s.jsx)(lB, {
                                                    thread: t,
                                                    countInVoice: N,
                                                    hasVideo: h,
                                                    mentionCount: g,
                                                    isMentionLowImportance: m,
                                                }),
                                                (0, s.jsx)(lj, { thread: t, tabIndex: I.tabIndex }),
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
            a = (0, tJ.Ay)(t),
            { density: o } = (0, C.wR)(),
            d = (0, u.yK)([T.A], () => i.map((e) => T.A.getChannel(e)).filter(tc.Vq), [i]),
            c = (0, u.bG)([td.Ay], () => {
                let e = d[d.length - 1];
                if (null == e) return 0;
                let t = td.Ay.getVoiceStates(e.guild_id)[e.id];
                return null == t || 0 === t.length ? 0 : l !== e.id ? 40 : 32 * t.length + 8;
            });
        return (0, s.jsx)("li", {
            className: lH.kL,
            children: (0, s.jsxs)("ul", {
                role: "group",
                "aria-label": em.intl.formatToPlainString(em.t.EiyIi6, { channelName: a }),
                children: [
                    (0, s.jsx)("div", {
                        className: eH()(lH.eh, { [lH.ET]: r }),
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
    lZ = n(51758),
    lJ = n(139033),
    l$ = n(305866),
    lQ = n(123292),
    l0 = n(830215),
    l1 = n(315982),
    l3 = n(480900),
    l2 = n(557722),
    l9 = n(834942),
    l6 = n(287809),
    l7 = n(53516),
    l5 = n(648580),
    l4 = (((l = {})[(l.VOICE = 0)] = "VOICE"), l);
let l8 = function (e) {
    let { type: t, guildId: l, closePopout: i } = e,
        r = (0, en.GV)(),
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
        : (0, s.jsxs)(l$.l, {
              className: l5.kL,
              "aria-labelledby": r,
              children: [
                  (0, s.jsx)("img", { alt: "", className: l5.Sl, src: n(303528) }),
                  (0, s.jsxs)("div", {
                      className: l5.Qs,
                      children: [
                          (0, s.jsx)(n5.D, { variant: "heading-md/semibold", id: r, children: g }),
                          (0, s.jsx)(e1.E, { color: "text-default", variant: "text-sm/normal", children: m }),
                          (0, s.jsxs)("div", {
                              className: l5.UD,
                              children: [
                                  null != f
                                      ? (0, s.jsx)("div", {
                                            "data-button-hoisted-classname-wrapper": !0,
                                            className: l5.FS,
                                            children: (0, s.jsx)(tF.$, {
                                                variant: "primary",
                                                text: f,
                                                onClick: function () {
                                                    o
                                                        ? l1.R()
                                                        : c
                                                          ? (0, I.openModalLazy)(
                                                                async () => {
                                                                    let { default: e } = await Promise.all([
                                                                        n.e("590275"),
                                                                        n.e("334179"),
                                                                        n.e("14775"),
                                                                        n.e("989545"),
                                                                        n.e("991531"),
                                                                        n.e("311493"),
                                                                        n.e("84704"),
                                                                    ]).then(n.bind(n, 615715));
                                                                    return (t) =>
                                                                        (0, s.jsx)(e, {
                                                                            reason: l2.d.GUILD_PHONE_REQUIRED,
                                                                            ...t,
                                                                        });
                                                                },
                                                                { modalKey: l7.V },
                                                            )
                                                          : d
                                                            ? (l0.A.verifyResend(),
                                                              (0, lJ.A)({
                                                                  title: em.intl.string(em.t.LykQYk),
                                                                  subtitle: em.intl.format(em.t.azKEPy, {
                                                                      email: l6.default.getCurrentUser()?.email,
                                                                  }),
                                                              }))
                                                            : h && null != A && (0, l3.b)(A, l),
                                                        i();
                                                },
                                            }),
                                        })
                                      : null,
                                  o || c || d
                                      ? (0, s.jsx)(lQ.Q, {
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
    im = n(300596);
function ip(e) {
    let { locked: t } = e;
    return (0, s.jsx)("div", {
        className: eH()(ep.Xs, im.U),
        children: (0, s.jsx)(ig.A, {
            className: ep.gE,
            color: t ? h.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css : void 0,
        }),
    });
}
var iC = n(863005),
    iE = n(669715),
    ix = n(769015),
    iN = n(217223);
function i_(e) {
    let { className: t, embeddedApps: n, muted: l } = e;
    if (n.length <= 0) return null;
    {
        if (1 === n.length)
            return (0, s.jsx)("div", {
                className: eH()(iN.kL, t, l && iN.F4),
                children: (0, s.jsx)(ix.A, { game: n[0].application, className: iN.wK }),
            });
        let e = n.length - 1;
        return (0, s.jsxs)("div", {
            className: eH()(iN.kL, t, l && iN.F4),
            children: [
                (0, s.jsx)(ix.A, { game: n[0].application, className: iN.wK }),
                2 === n.length
                    ? (0, s.jsx)(ix.A, { game: n[1].application, className: iN.wK })
                    : (0, s.jsx)(e1.E, {
                          className: iN.ju,
                          variant: "text-xs/bold",
                          color: "interactive-text-active",
                          children: `+${e}`,
                      }),
            ],
        });
    }
}
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
        m = (0, u.bG)([n2.Ay], () => n2.Ay.getMentionCount(t.id)),
        f = (0, u.bG)([n2.Ay], () => n2.Ay.getIsMentionLowImportance(t.id)),
        p = (0, ic.Ay)(t),
        C = (0, u.bG)([P.A], () => !P.A.can(k.xBc.CONNECT, t)),
        E = (0, iu.H)(t),
        x = (0, u.bG)([lS.A], () => lS.A.hasVideo(t.id)),
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
                    l && s === k.RCc)
                        ? 0
                        : s;
                })({ channel: t, video: l }) > 0 &&
                !n &&
                !i
            );
        })({ channel: t, locked: C, video: (x || N) && null == E, selected: n }),
        I = (0, u.bG)([iC.A], () => iC.A.getNewThreadCount(t.guild_id, t.id)),
        S = (0, iA.ed)(t.guild_id, t.id),
        b = (0, u.bG)([O.A], () => O.A.getGuild(t.guild_id)?.features.has(k.GuildFeatures.COMMUNITY) ?? !1);
    if (lM(m)) return (0, s.jsx)(lV, { mentionsCount: m, isMentionLowImportance: f });
    if (o) return (0, s.jsx)(ip, { locked: d });
    if (c)
        return (0, s.jsx)(ea.Lp, { text: em.intl.string(em.t.y2b7CA), color: h.A.colors.BADGE_BACKGROUND_BRAND.css });
    if (!A && g === nM.e.ALL_MESSAGES && t.isForumLikeChannel() && null != I && I > 0)
        return (0, s.jsx)(e1.E, {
            variant: "text-xs/semibold",
            color: "text-brand",
            children: em.intl.format(em.t.GkAbqY, { count: (0, ea.Gu)(I) }),
        });
    if (!A && t.isForumLikeChannel() && null != S && S > 0)
        return (0, s.jsx)(e1.E, { variant: "text-xs/semibold", color: "text-muted", children: (0, ea.Gu)(S) });
    let G = i?.length ?? 0;
    return null != r && r && _
        ? (0, s.jsx)(lO, { userCount: G, video: x || N, channel: t })
        : l && (0, iE.t)(i) && b
          ? (0, s.jsx)(ea.Lp, { text: em.intl.string(em.t.dI3q4h), color: h.A.unsafe_rawColors.RED_400.css })
          : null != E
            ? (0, s.jsx)(ih.z, { textColor: "text-feedback-positive", entry: { start: E } })
            : null != a && a && p.length > 0
              ? (0, s.jsx)(i_, { embeddedApps: p, muted: A })
              : null;
}
var iS = n(714619);
class ib extends nR {
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
        return (0, nc.Pd)(e, lS.A, O.A);
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
        let { channel: e, locked: t, connected: n, unverifiedAccount: l, isSuggestedSection: i } = this.props,
            s = e.getGuildId();
        null != s && (0, lZ.V)(s) && (0, lq.Ze)(s),
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
            l = O.A.getGuild(t.getGuildId());
        null != l &&
            (0, e2.L3)(e, async () => {
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
                    n.e("187048"),
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
        return (0, s.jsx)(lw.A, { channel: e, voiceStates: l, collapsed: t, tabIndex: n, numAudience: i });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        if (t)
            return (0, s.jsx)(l8, {
                type: l4.VOICE,
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
                    className: eH()(ep.Xs, n ? ep.Tf : null),
                    onClick: () => {
                        lW.A.updateChatOpen(e.id, !0), this.handleClickChat();
                    },
                    "aria-label": em.intl.string(em.t.ZXxLQg),
                    children: (0, s.jsx)(lE.ChatIcon, { size: "xs", color: "currentColor", className: ep.gE }),
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
        return null == e ? null : (0, s.jsx)(tk.A, { children: e });
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
                className: eH()(this.getModeClass(), { [ep.r9]: this.isDisabled() }),
                "data-dnd-name": (0, tJ.m1)(e, l6.default, id.A),
                children: [
                    (0, s.jsx)(lz.Y, {
                        targetElementRef: this.channelItemRef,
                        position: "right",
                        renderPopout: this.renderPopout,
                        spacing: 17,
                        onRequestClose: this.closeGuildVerificationPopout,
                        shouldShow: C,
                        children: () =>
                            (0, s.jsx)(ei.m, {
                                text: this.getTooltipText(),
                                children: (0, s.jsxs)(ny.Ay, {
                                    ref: this.channelItemRef,
                                    className: ep.Ki,
                                    iconClassName: eH()({ [iS.G]: null != u }),
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
let iG = $((0, lY.F)(ib));
function ij(e) {
    var t;
    let n,
        l,
        { guild: i, channel: r, disableSorting: a, isFavoriteCategory: o, collapsed: d, voiceStates: c } = e,
        h = (0, u.cf)([n2.Ay], () => ({ unread: n2.Ay.hasUnread(r.id), mentionCount: n2.Ay.getMentionCount(r.id) })),
        A = (0, u.bG)([w.Ay], () => w.Ay.resolveUnreadSetting(r)),
        g = (0, u.cf)([T.A, l9.A, P.A], () => {
            let e = T.A.getChannel(r.parent_id),
                t = l9.A.getCheck(r.guild_id);
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
            (n = (0, io.A)(t)),
            (l = (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return (0, u.cf)([ia.Ay, ir.default], () => {
                    let n = ir.default.getId();
                    return ia.Ay.getPermissionsForUser(n, e, t);
                }, [e, t]);
            })(t, !0).moderator),
            !n && l ? 1 : 0),
        p = (0, u.bG)([nN.A], () => nN.A.getStageInstanceByChannel(r.id), [r.id]),
        C = (0, ii.zy)(r.id, tg.ip.AUDIENCE),
        { isSubscriptionGated: E, needSubscriptionToAccess: x } = (0, lN.A)(r.id),
        N = (0, u.bG)([w.Ay], () => w.Ay.isFavorite(i.id, r.id)),
        _ = (0, is.xn)(r.id),
        I = iI({
            channel: r,
            isChannelSelected: !1,
            isChannelCollapsed: d,
            voiceStates: c,
            isSubscriptionGated: E,
            needSubscriptionToAccess: x,
            enableConnectedUserLimit: _ || (r.userLimit > 0 && r.userLimit < k.RCc),
        }),
        S = e.connected && null == I;
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
        channelInfo: I,
        resolvedUnreadSetting: A,
    });
}
function iv(e, t) {
    let n = t.getGuildId();
    if (null == n) throw Error("TextChannel, preloadChannel: Channel does not have a guildId");
    lC.A.preload(n, t.id);
}
let iR = $(
        class extends nR {
            handleContextMenu = (e) => {
                let { channel: t } = this.props,
                    l = O.A.getGuild(t.getGuildId());
                null != l &&
                    (0, e2.L3)(e, async () => {
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
                        className: eH()(this.getClassName(), { [ep.r9]: this.isDisabled() }),
                        "data-dnd-name": (0, tJ.m1)(e, l6.default, id.A),
                        children: (0, s.jsxs)(ny.Ay, {
                            className: ep.Ki,
                            channel: e,
                            selected: t,
                            onClick: this.handleClick,
                            onMouseDown: iv,
                            onContextMenu: this.handleContextMenu,
                            connectDragPreview: r ? i : null,
                            "aria-label": (0, lX.Ay)({ channel: e }),
                            resolvedUnreadSetting: nM.e.ONLY_MENTIONS,
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
        l = (0, u.yK)([iC.A, n2.Ay, P.A], () => {
            let e = iC.A.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
            return o()(iC.A.getActiveJoinedThreadsForParent(t.guild_id, t.id))
                .values()
                .map((e) => e.channel)
                .concat(o().values(iC.A.getActiveUnjoinedThreadsForParent(t.guild_id, t.id)))
                .filter((t) => !(t.id in e) && P.A.can(k.xBc.VIEW_CHANNEL, t))
                .sort((e, t) => {
                    let n = n2.Ay.lastMessageId(e.id),
                        l = n2.Ay.lastMessageId(t.id);
                    return th.default.compare(n, l);
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
                (0, s.jsx)(e1.E, {
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
                                    ? (0, it.iN)(t.id)
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
                                              n.e("472789"),
                                              n.e("179049"),
                                              n.e("31267"),
                                              n.e("444567"),
                                              n.e("665927"),
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
                                    children: (0, s.jsx)(e1.E, {
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
        n = (0, u.bG)([l6.default], () => l6.default.getUser(t.ownerId)),
        l = (0, ik.JO)(t);
    return (0, s.jsxs)(es.D, {
        className: iK.nM,
        onClick: function (e) {
            (0, lI.JA)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, lG.H9.POPOUT);
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
                    (0, s.jsx)(e1.E, { className: iK.UU, variant: "text-sm/normal", color: "none", children: t.name }),
                    (0, s.jsx)(e1.E, { variant: "text-sm/normal", color: "text-muted", children: "\u2022" }),
                    (0, s.jsx)(e1.E, {
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
var iY = n(364522),
    iX = n(302959),
    iq = n(35903),
    iZ = n(970928),
    iJ = n(427262),
    i$ = n(641635);
let iQ = na.DN.SIZE_24;
function i0(e) {
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
            children: (0, s.jsx)("img", { alt: t, src: e, className: i$.P3 }),
        });
    }
    let r = l.large_image ?? l.small_image;
    return null != r
        ? (0, s.jsx)("img", { alt: l.large_text ?? "", src: (0, iZ.uD)(i, r, [128, 128]), className: i$.P3 })
        : null;
}
function i1(e) {
    let { activity: t, embeddedApp: n, channel: l } = e,
        i = Array.from(n.embeddedActivity.userIds),
        r = (0, u.yK)([l6.default], () => i.map((e) => l6.default.getUser(e)).filter(tc.Vq));
    return (0, s.jsx)("div", {
        className: i$.ec,
        children: (0, s.jsxs)("div", {
            className: i$.Wh,
            children: [
                (0, s.jsx)(i0, { activity: t, embeddedApp: n }),
                (0, s.jsxs)("div", {
                    className: i$.X0,
                    children: [
                        (0, s.jsx)(n5.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            className: i$.wx,
                            lineClamp: 1,
                            children: n.application.name,
                        }),
                        t?.details != null &&
                            "" !== t.details &&
                            (0, s.jsx)(e1.E, {
                                variant: "text-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.details,
                            }),
                        t?.state != null &&
                            "" !== t.state &&
                            (0, s.jsx)(e1.E, {
                                variant: "text-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.state,
                            }),
                        i.length > 0 &&
                            (0, s.jsx)(na.Ay, {
                                className: i$.TN,
                                guildId: l.guild_id,
                                users: r,
                                size: iQ,
                                max: 7,
                                renderUser: function (e) {
                                    if (null == e || e === na.mt) return null;
                                    let t = iJ.Ay.getName(e);
                                    return (0, s.jsx)(
                                        ei.m,
                                        {
                                            asContainer: !0,
                                            text: t,
                                            position: "bottom",
                                            children: (0, s.jsx)("img", {
                                                src: e.getAvatarURL(l.guild_id, iQ),
                                                alt: t,
                                                className: i$.my,
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
var i3 = n(584960);
function i2(e) {
    let { channel: t, presenceActivity: n, embeddedApp: l, onAction: i } = e,
        r = Array.from(l.embeddedActivity.userIds),
        a = (0, u.bG)([l6.default], () => l6.default.getUser(r[0]));
    return null == a
        ? null
        : (0, s.jsxs)("div", {
              className: i3.Eb,
              children: [
                  (0, s.jsx)("div", {
                      className: i3.Il,
                      children: (0, s.jsx)(i1, { activity: n, embeddedApp: l, channel: t }),
                  }),
                  (0, s.jsx)("div", {
                      className: i3.M4,
                      children: (0, s.jsx)(iq.A, {
                          type: iX.M.VOICE_CHANNEL,
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
var i9 = n(713654),
    i6 = n(744399);
function i7(e) {
    let { channel: t } = e,
        n = (0, u.bG)([O.A], () => O.A.getGuild(t.guild_id)),
        l = (0, tJ.Ay)(t),
        i = (0, i9.gU)(t, n);
    return null == i
        ? null
        : (0, s.jsxs)("div", {
              className: i6.hY,
              children: [
                  (0, s.jsx)(i, { className: i6.p }),
                  (0, s.jsx)(e1.E, {
                      variant: "text-md/semibold",
                      color: "interactive-text-default",
                      className: i6.HA,
                      children: l,
                  }),
              ],
          });
}
var i5 = n(220650);
function i4(e) {
    let { channel: t, onAction: n } = e,
        l = (0, ic.Ay)(t),
        i = Array.from((0, ic.Rz)(l).values());
    return 0 === i.length
        ? null
        : (0, s.jsxs)(iY.Ip, {
              className: i5.kL,
              children: [
                  (0, s.jsx)("div", { className: i5.oT, children: (0, s.jsx)(i7, { channel: t }) }),
                  (0, s.jsx)("div", { className: i5.zN }),
                  i.map((e, l) =>
                      (0, s.jsx)(
                          i2,
                          { embeddedApp: e, presenceActivity: e.presenceActivity ?? void 0, channel: t, onAction: n },
                          l,
                      ),
                  ),
              ],
          });
}
var i8 = n(662980);
function se(e) {
    let { channel: t, transitionExtras: n } = e,
        l = em.intl.string(em.t.ZXxLQg);
    return (0, s.jsx)(ei.m, {
        asContainer: !0,
        text: l,
        children: (0, s.jsx)(es.D, {
            className: ep.Xs,
            onClick: function () {
                (0, i8.T)(t.id, !0), (0, it.iN)(t.id, n);
            },
            "aria-label": l,
            children: (0, s.jsx)(lE.ChatIcon, { size: "xs", color: "currentColor", className: ep.gE }),
        }),
    });
}
class st extends nR {
    state = { shouldShowThreadsPopout: !1, shouldShowActivities: !1, isMenuItemPopoverVisible: !1 };
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
    handleMenuItemPopoverVisibilityChange = (e) => {
        this.setState({ isMenuItemPopoverVisible: e });
    };
    handleClosePopout = () => {
        this.state.shouldShowActivities && this.handleActivitiesPopoutClose(),
            this.state.shouldShowThreadsPopout && this.handleThreadsPopoutClose();
    };
    handleMouseDown = () => {
        this.handleActivitiesPopoutClose(), this.handleThreadsPopoutClose();
        let { channel: e } = this.props,
            t = e.getGuildId();
        lC.A.preload(t ?? k.ME, e.id);
    };
    renderPopout = (e) => {
        let { channel: t, sorting: n, embeddedApps: l, channelIsContentGated: i } = this.props,
            { shouldShowActivities: r } = this.state;
        return t.isModeratorReportChannel() || i
            ? null
            : null != l && l.length > 0 && r && !n
              ? (0, s.jsx)(i4, { onAction: this.handleActivitiesPopoutClose, channel: t })
              : (0, s.jsx)(iz, { ...e, channel: this.props.channel });
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
        if (t.type === k.rbe.GROUP_DM)
            return void (0, e2.L3)(e, async () => {
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
                    n.e("187048"),
                    n.e("566378"),
                    n.e("17244"),
                    n.e("153416"),
                    n.e("760200"),
                ]).then(n.bind(n, 4027));
                return (n) => (0, s.jsx)(e, { ...n, channel: t, selected: !0 });
            });
        if (t.type === k.rbe.DM) {
            let l = l6.default.getUser(t.getRecipientId());
            null != l &&
                (0, e2.L3)(e, async () => {
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
                        n.e("187048"),
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
            return void (0, e2.L3)(e, async () => {
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
            (0, e2.L3)(e, async () => {
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
                    n.e("187048"),
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
        return !0 === n ? null : (0, s.jsx)(se, { channel: t, transitionExtras: e });
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
            v = _ ? { source: ie.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
            R = (0, tH.kg)(e, "TextChannel"),
            y = (0, s.jsxs)("li", {
                className: eH()(this.getClassName(), { [ep.r9]: this.isDisabled(), [ep.wH]: n }),
                "data-dnd-name": (0, tJ.m1)(e, l6.default, id.A),
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
                            (0, s.jsxs)(ny.Ay, {
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
                                    R && !g && this.renderVibegrationsChatButton(v),
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
let sn = $(st);
function sl(e) {
    let { channel: t, guild: n, disableSorting: l, isFavoriteCategory: i, muted: a, selected: o } = e,
        { hasActiveThreads: d, hasMoreActiveThreads: c } = (0, l_.NR)(t),
        h = (0, u.cf)([n2.Ay], () => ({
            unread: n2.Ay.hasUnread(t.id),
            ackMessageId: n2.Ay.ackMessageId(t.id),
            isLowImportanceMention: n2.Ay.getIsMentionLowImportance(t.id),
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
        m = (0, u.bG)([n3.A], () => n3.A.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: f, isSubscriptionGated: p } = (0, lN.A)(t.id),
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
        _ = (0, ic.Ay)(t),
        [I, S] = r.useState(!1),
        b = (0, iM.K)(
            r.useCallback((e) => {
                S(e);
            }, []),
        );
    return (0, u.bG)([iP.A, iO.Ay], () => iP.A.getChannelId() !== t.id && iO.Ay.isCurrentUserGuest(t.getGuildId()))
        ? null
        : (0, s.jsx)(sn, {
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
var si = n(900797),
    ss = n(636585),
    sr = n(531685),
    sa =
        (((i = {}).HIDDEN = "hidden"),
        (i.UNREAD = "unread"),
        (i.MENTIONS = "mentions"),
        (i.VOICE_CHANNELS = "voice-channels"),
        i);
let so = { mode: "hidden", mentionCount: 0, targetChannelId: null },
    sd = { topBar: so, bottomBar: so },
    sc = {},
    su = {};
function sh(e) {
    let t = T.A.getChannel(e);
    return (
        !(null == t || null == t.getGuildId() || t.isGuildVocal()) &&
        !(t.isThread() ? ly.A.isMuted(t.id) : w.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, ta.Y)(t)
    );
}
function sA(e) {
    let t = T.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let l = w.Ay.isGuildCollapsed(n),
        i = w.Ay.isChannelMuted(n, t.id);
    return (!l || !i) && n2.Ay.getMentionCount(e) > 0;
}
function sg(e) {
    return (
        !w.Ay.isChannelMuted(e.guild_id, e.id) &&
        (e.isGuildStageVoice()
            ? tA.A.getMutableParticipants(e.id, tg.ip.SPEAKER).length > 0
            : td.Ay.getVoiceStatesForChannel(e).length > 0)
    );
}
function sm(e) {
    let { guildChannels: t } = tN.A.getGuildWithoutChangingGuildActionRows(e),
        n = t.getChannels(su[e] ?? []);
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
            ((sh(t.id) || o().some(t.threadIds, sh)) && (d = !1),
            (sA(t.id) || o().some(t.threadIds, sA)) && (a = !1),
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
            (sh(t.id) || o().some(t.threadIds, sh)) && (null == i && (i = t.id), (p = !0)),
                (sA(t.id) || o().some(t.threadIds, sA)) &&
                    (null == l && (l = t.id),
                    (f += n2.Ay.getMentionCount(t.id)),
                    (f += o().sumBy(t.threadIds, n2.Ay.getMentionCount)));
        }
    if (d || a)
        for (let e = 0; e < m.length; e++) {
            let t = m[e];
            if (!d && !a) break;
            (sh(t.id) || o().some(t.threadIds, sh)) && (null == r && (r = t.id), (E = !0)),
                (sA(t.id) || o().some(t.threadIds, sA)) &&
                    (null == s && (s = t.id),
                    (C += n2.Ay.getMentionCount(t.id)),
                    (C += o().sumBy(t.threadIds, n2.Ay.getMentionCount)));
        }
    let x = null,
        N = null,
        _ = u?.getChannelRecords() ?? [];
    a && C > 0
        ? (x = { mode: "mentions", mentionCount: C, targetChannelId: s })
        : !c && o().some(_, sg)
          ? (x = { mode: "voice-channels", mentionCount: 0, targetChannelId: null })
          : d && E && (x = { mode: "unread", mentionCount: 0, targetChannelId: r }),
        a && f > 0
            ? (N = { mode: "mentions", mentionCount: f, targetChannelId: l })
            : d && p && (N = { mode: "unread", mentionCount: 0, targetChannelId: i });
    let I = null != N && (null == x || ("mentions" !== x.mode && "mentions" === N.mode)),
        S = null != x && ("mentions" === x.mode || !I);
    return (sc[e] = { topBar: I ? (N ?? so) : so, bottomBar: S ? (x ?? so) : so }), !0;
}
let sf = o().throttle(sm, 200);
function sp(e) {
    let { guildId: t } = e,
        n = O.A.getGuild(t);
    return null != n && !!n.features.has(k.GuildFeatures.COMMUNITY) && sf(t);
}
function sC(e) {
    let { id: t } = e,
        n = T.A.getChannel(t);
    if (null == n) return !1;
    let l = O.A.getGuild(n.guild_id);
    return null != l && !!l.features.has(k.GuildFeatures.COMMUNITY) && sf(n.guild_id);
}
function sE(e) {
    let { channel: t } = e,
        n = T.A.getChannel(t.id);
    if (null == n) return !1;
    let l = O.A.getGuild(t.guild_id);
    return null != l && !!l.features.has(k.GuildFeatures.COMMUNITY) && sf(n.guild_id);
}
function sx(e) {
    let { channelId: t } = e,
        n = T.A.getChannel(t);
    if (null == n) return !1;
    let l = O.A.getGuild(n.guild_id);
    return (
        null != l && !!l.features.has(k.GuildFeatures.COMMUNITY) && V.A.getGuildId() === n.guild_id && sf(n.guild_id)
    );
}
function sN(e) {
    let { guildId: t } = e;
    return null != t && sf(t);
}
class s_ extends u.Ay.Store {
    static displayName = "ChannelListUnreadsStore";
    initialize() {
        this.waitFor(tN.A, T.A, O.A, ly.A, n2.Ay, V.A, td.Ay, tA.A, w.Ay);
    }
    getUnreadStateForGuildId(e) {
        return sc[e] ?? sd;
    }
}
let sI = new s_(e6.h, {
    UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
        let { guildId: t, channelIds: n } = e,
            l = O.A.getGuild(t);
        return (
            null != l &&
            !!l.features.has(k.GuildFeatures.COMMUNITY) &&
            null != n &&
            !o().isEqual(su[t], n) &&
            ((su[t] = n), sm(t))
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
                .filter(tc.Vq)
                .uniq()
                .forEach((e) => {
                    let t = O.A.getGuild(e);
                    null != t && t.features.has(k.GuildFeatures.COMMUNITY) && sf(e) && (n = !0);
                }),
            n
        );
    },
    CHANNEL_ACK: sx,
    CHANNEL_DELETE: sE,
    CHANNEL_LOCAL_ACK: sx,
    MESSAGE_ACK: sx,
    MESSAGE_CREATE: sx,
    MESSAGE_DELETE_BULK: sx,
    MESSAGE_DELETE: sx,
    PASSIVE_UPDATE_V2: function (e) {
        let t = O.A.getGuild(e.guildId);
        return !!(e.channels.length > 0 && null != t && t.features.has(k.GuildFeatures.COMMUNITY)) && sf(e.guildId);
    },
    RESORT_THREADS: sx,
    THREAD_CREATE: sE,
    THREAD_DELETE: sE,
    THREAD_LIST_SYNC: sp,
    THREAD_MEMBER_UPDATE: sC,
    THREAD_MEMBERS_UPDATE: sC,
    THREAD_UPDATE: sE,
    BULK_CLEAR_RECENTS: sp,
    CATEGORY_COLLAPSE_ALL: sp,
    CATEGORY_EXPAND_ALL: sp,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = V.A.getGuildId();
        if (null == n || !new Set(t.map((e) => e.guildId)).has(n)) return !1;
        let l = sc[n];
        return null != l && "voice-channels" === l.bottomBar.mode && sf(n);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: sN,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: sN,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        for (let e of t) null != e.guild_id && sf(e.guild_id);
    },
    USER_GUILD_SETTINGS_GUILD_UPDATE: sN,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: sN,
});
var sS = n(350536);
let sb = { friction: 30, tension: 300 };
function sG(e) {
    let { guildChannels: t, jumpToVoiceChannels: n } = e,
        l = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
        i = (0, u.bG)([td.Ay], () => td.Ay.getVoiceStates(t.id), [t.id]),
        a = r.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), n();
            },
            [n],
        ),
        o = l?.getChannelRecords() ?? [],
        d = (0, nc.fK)({ channels: o, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: i });
    return (0, s.jsxs)(es.D, {
        className: eH()(sS.M0, sS.OF),
        onClick: a,
        children: [
            (0, s.jsx)(tq.H, { size: "custom", className: sS.Gs, width: 14, height: 14, color: "currentColor" }),
            (0, s.jsx)(e1.E, {
                variant: "text-xs/semibold",
                className: sS.pM,
                children: em.intl.format(em.t["fDlr+F"], { count: d.length }),
            }),
            (0, s.jsx)(ss.A, {
                guildId: t.id,
                className: sS.J$,
                users: d.slice(0, 4),
                renderMoreUsers: () => null,
                max: 4,
                size: iH._3.SIZE_16,
            }),
        ],
    });
}
function sj(e) {
    let { position: t, guildChannels: n, guildChannelsVersion: l, jumpToVoiceChannels: i, jumpToChannel: a } = e,
        { bottomBar: o, topBar: d } = (0, u.cf)([sI], () => sI.getUnreadStateForGuildId(n.id)),
        c = (0, u.bG)([sr.A], () => sr.A.isFocused()),
        { mode: h, mentionCount: A, targetChannelId: g } = "bottom" === t ? o : d,
        m = h === sa.HIDDEN,
        f = (0, e3.z)(
            {
                to: { transform: m ? ("bottom" === t ? "translateY(180%)" : "translateY(-180%)") : "translateY(0%)" },
                config: sb,
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
        className: eH()(sS.kL, { [sS.Mn]: "top" === t, [sS.sQ]: "bottom" === t }),
        children: (0, s.jsx)(e0.animated.div, {
            className: sS.pK,
            style: f,
            "aria-hidden": m,
            children: (function () {
                switch (h) {
                    case sa.HIDDEN:
                        return (0, s.jsx)("div", { className: eH()(sS.M0, sS.Te) });
                    case sa.UNREAD:
                        return (0, s.jsxs)(es.D, {
                            className: sS.M0,
                            onClick: p,
                            children: [
                                "bottom" === t
                                    ? (0, s.jsx)(tY.a, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: sS.z_,
                                          height: 14,
                                          width: 14,
                                      })
                                    : (0, s.jsx)(si.t, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: sS.z_,
                                          height: 14,
                                          width: 14,
                                      }),
                                (0, s.jsx)(e1.E, {
                                    variant: "text-xs/semibold",
                                    color: "interactive-text-default",
                                    className: sS.pM,
                                    children: em.intl.string(em.t.FCRiT3),
                                }),
                            ],
                        });
                    case sa.MENTIONS:
                        return (0, s.jsx)(es.D, {
                            className: eH()(sS.M0, sS.vU),
                            onClick: p,
                            children: (0, s.jsx)(e1.E, {
                                variant: "text-xs/semibold",
                                color: "badge-text-brand",
                                className: sS.pM,
                                children: em.intl.format(em.t.EQcLyp, { count: A }),
                            }),
                        });
                    case sa.VOICE_CHANNELS:
                        return (0, s.jsx)(sG, { jumpToVoiceChannels: i, guildChannels: n, guildChannelsVersion: l });
                    default:
                        return;
                }
            })(),
        }),
    });
}
var sv = n(310953),
    sR = n(173860);
function sy(e) {
    let t = T.A.getChannel(e);
    return (
        null != t &&
        null != t.getGuildId() &&
        !(t.isThread() ? ly.A.isMuted(t.id) : w.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, ta.Y)(t)
    );
}
function sM(e) {
    let t = T.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let l = w.Ay.isGuildCollapsed(n),
        i = w.Ay.isChannelMuted(n, t.id);
    return (!l || !i) && n2.Ay.getMentionCount(e) > 0;
}
let sL = r.forwardRef(function (e, t) {
    let { guildId: n, guildChannels: l, guildChannelsVersion: i, ...r } = e,
        a = (0, sv.W)(n, l, i, { withVoiceChannels: !1 }, { ignoreRecents: !0 }),
        o = (0, u.bG)([sr.A], () => sr.A.isFocused());
    return (0, s.jsx)(sR.A, { ref: t, ...r, isUnread: sy, isMentioned: sM, items: a, animate: o });
});
var sT = n(81466);
function sU(e) {
    let { guild: t, selected: l } = e,
        { hasUnread: i, mentionCount: r } = (0, u.cf)(
            [n2.Ay],
            () => ({
                hasUnread: n2.Ay.hasUnread(t.id, nM.P.GUILD_EVENT),
                mentionCount: n2.Ay.getMentionCount(t.id, nM.P.GUILD_EVENT),
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
                n.e("931937"),
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
                n.e("711588"),
            ]).then(n.bind(n, 15823));
            return (n) => (0, s.jsx)(e, { ...n, guildId: t.id });
        }),
            (0, nQ.Dr)(el.M.GUILD_HEADER_EVENT_UPSELL);
    }
    let d = (0, tD.Ay)(t.id),
        c = d.length > 0 ? em.intl.formatToPlainString(em.t.IBdqSu, { number: d.length }) : em.intl.string(em.t.tlopTM);
    return (0, s.jsx)(ec.G, {
        id: `upcoming-events-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(sT.CalendarIcon, { size: "md", color: "currentColor", className: e }),
        text: c,
        selected: l,
        onClick: o,
        onContextMenu: function (e) {
            (0, e2.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("426386"), n.e("819990")]).then(n.bind(n, 221621));
                return (n) => (0, s.jsx)(e, { ...n, guildId: t.id });
            });
        },
        showUnread: i && !a,
        trailing: !a && r > 0 ? (0, s.jsx)(ea.hV, { className: nq.Do, disableColor: !0, count: r }) : null,
    });
}
var sD = n(152367),
    sO = n(972786),
    sP = n(321593),
    sV = n(309010),
    sw = n(295813);
function sH(e) {
    let { guild: t, selected: n } = e,
        l = (0, u.bG)([sO.Ay], () => sO.Ay.getSelectedProjectId(t.id), [t.id]),
        i = (0, u.bG)([sV.Ay], () => sV.Ay.getChannelId(), []),
        r = (0, u.bG)([V.A], () => V.A.getGuildId(), []);
    return (0, s.jsx)(ec.G, {
        id: `vibegrations-${t.id}`,
        renderIcon: (e) =>
            (0, s.jsx)(sD.D, { size: "custom", color: "currentColor", width: 20, height: 20, className: e }),
        text: em.intl.string(sw.default.Xmvb23),
        selected: n,
        background: (0, s.jsx)(sP.gT, { guildId: t.id }),
        onClick: () => {
            let e = i === eh.VV.VIBEGRATIONS && r === t.id;
            (0, eu.pX)(k.BVt.CHANNEL(t.id, eh.VV.VIBEGRATIONS, null == l || e ? null : l));
        },
    });
}
var sB = n(845056),
    sk = n(765379),
    sF = n(271683),
    sK = n(725613),
    sz = n(857253),
    sW = n(360729),
    sY = n(22231),
    sX = n(241326),
    sq = n(750943),
    sZ = n(743674),
    sJ = n(888697),
    s$ = n(26741),
    sQ = n(493819),
    s0 = n(722884),
    s1 = n(31021),
    s3 = n(176431);
function s2(e) {
    let { channel: t, imageUrl: l, animatedUrl: i, bannerHash: a, canModifyHangout: o } = e,
        d = (0, sZ.S)(l),
        c = (0, eD.je)(t),
        u = (0, s$.P9)({ guildId: t.guild_id, channelId: t.id, bannerHash: a }),
        h = r.useCallback(() => {
            (0, s$.J_)({ guildId: t.guild_id, channelId: t.id }), (0, s0.A)({ channel: t });
        }, [t]),
        A = r.useCallback(() => {
            (0, s$.nK)({ guildId: t.guild_id, channelId: t.id }), (0, sJ.e2)(t.id);
        }, [t.guild_id, t.id]),
        g = r.useCallback(
            (e) => {
                c
                    ? (0, e2.L3)(e, async () => {
                          let { default: e } = await n.e("555558").then(n.bind(n, 316421));
                          return (n) => (0, s.jsx)(e, { ...n, channel: t });
                      })
                    : e.preventDefault();
            },
            [t, c],
        );
    return (0, s.jsxs)("div", {
        ref: u,
        className: s3.rs,
        onContextMenu: g,
        children: [
            (0, s.jsx)("div", {
                className: s3.ZS,
                style: null != d ? { backgroundColor: d } : void 0,
                children: (0, s.jsx)(sQ.A, { imageUrl: l, animatedUrl: i, className: s3.Sl }),
            }),
            o
                ? (0, s.jsxs)("div", {
                      className: s3.n_,
                      children: [
                          (0, s.jsx)(ei.m, {
                              text: em.intl.string(s1.default.XJ4UpB),
                              children: (0, s.jsx)(es.D, {
                                  className: s3.HF,
                                  onClick: h,
                                  children: (0, s.jsx)(sY.PencilIcon, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                          (0, s.jsx)(ei.m, {
                              text: em.intl.string(s1.default.XV4qT6),
                              children: (0, s.jsx)(es.D, {
                                  className: s3.HF,
                                  onClick: A,
                                  children: (0, s.jsx)(sX.TrashIcon, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function s9(e) {
    let { channel: t } = e,
        n = (0, s$.dX)({ guildId: t.guild_id, channelId: t.id }),
        l = r.useCallback(() => {
            (0, s$.J_)({ guildId: t.guild_id, channelId: t.id }), (0, s0.A)({ channel: t });
        }, [t]);
    return (0, s.jsx)("div", {
        ref: n,
        className: s3._o,
        children: (0, s.jsxs)(es.D, {
            className: s3.hH,
            onClick: l,
            children: [
                (0, s.jsx)(sq.X, { size: "xs", color: "currentColor" }),
                (0, s.jsx)(e1.E, {
                    variant: "text-sm/medium",
                    color: "currentColor",
                    children: em.intl.string(s1.default.NGcIOF),
                }),
            ],
        }),
    });
}
function s6(e) {
    let { channel: t, isConnected: n } = e,
        { enableHangoutWindow: l } = (0, eU.Dm)({ guildId: t.guild_id, location: "HangoutWindow" }),
        i = (0, eD.W6)(t),
        a = n && i,
        o = t.voiceHangout,
        d = o?.banner_hash,
        c = r.useMemo(() => {
            if (null == d || null == t.guild_id) return null;
            let e = (0, eD.Sq)({ guildId: t.guild_id, bannerHash: d });
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
              ? (0, s.jsx)(s9, { channel: t })
              : null
        : null;
}
var s7 = n(290863),
    s5 = n(461213),
    s4 = n(532622),
    s8 = n(882840),
    re = n(208971),
    rt = n(46054),
    rn = n(569381),
    rl = n(165648);
function ri(e) {
    let { channel: t, connected: n, hovered: l, subtitle: i, onClick: a } = e,
        o = (0, re.G)((0, s8.l)(t)),
        { enableHangoutWindow: d } = (0, eU.Dm)({ guildId: t.guild_id, location: "VoiceChannelStatus" }),
        c = d && (0, eD.lr)(t),
        u = null != o && o.length > 0,
        h = (0, s4.Ay)(t, !0),
        A = null != i && i.length > 0;
    if (
        (r.useEffect(() => {
            u && lA.default.track(k.HAw.VOICE_CHANNEL_TOPIC_VIEWED, { channel_id: t.id, guild_id: t.guild_id });
        }, [u, t.id, t.guild_id]),
        null == t.guild_id)
    )
        return null;
    let g = eH()(rn.Ui, n && h ? rn.BI : null);
    return u
        ? (0, s.jsx)(es.D, {
              className: g,
              onClick: h ? a : void 0,
              children: (0, s.jsx)(e1.E, {
                  variant: "text-xs/medium",
                  className: eH()(rn.qS, rl.PT),
                  children: (0, s.jsx)(tk.A, { children: rt.A.parseVoiceChannelStatus(o, !0, { channelId: t.id }) }),
              }),
          })
        : n && h && !c && (!A || l)
          ? (0, s.jsxs)(es.D, {
                className: g,
                onClick: a,
                children: [
                    (0, s.jsx)(e1.E, {
                        variant: "text-xs/medium",
                        className: rn.qS,
                        children: em.intl.string(em.t.Mgpxiw),
                    }),
                    (0, s.jsx)(sY.PencilIcon, { color: "currentColor", className: rn.rD, size: "xxs" }),
                ],
            })
          : A
            ? (0, s.jsx)(tk.A, { children: i })
            : null;
}
class rs extends nR {
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
            lx.A.handleVoiceConnect({
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
            l = O.A.getGuild(t.getGuildId());
        null != l &&
            (0, e2.L3)(e, async () => {
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
                    n.e("187048"),
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
        return (0, nc.Pd)(e, lS.A, O.A);
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
        null != t && (0, lZ.V)(t) && (0, lq.Ze)(t), this.handleVoiceConnect();
    };
    handleVoiceStatusClick = (e) => {
        let { connected: t, channel: n } = this.props;
        t && (e.stopPropagation(), (0, sF.A)({ channel: n }));
    };
    renderSubtitle() {
        let { channel: e, connected: t } = this.props,
            n = iU(this.props.subtitle)?.subtitle,
            { hovered: l } = this.state;
        return (0, s.jsx)(ri, {
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
        return !(null != n && n.length > 0) || l ? null : (0, s.jsx)(s6, { channel: e, isConnected: t });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        return t
            ? (0, s.jsx)(l8, { type: l4.VOICE, guildId: e.guild_id, closePopout: this.closeGuildVerificationPopout })
            : null;
    };
    renderOpenChatButton = () => {
        let { channel: e, locked: t, forceShowButtons: n, isSuggestedSection: l } = this.props;
        if (!t)
            return (0, s.jsx)(ei.m, {
                asContainer: !0,
                text: em.intl.string(em.t.ZXxLQg),
                children: (0, s.jsx)(es.D, {
                    className: eH()(ep.Xs, n ? ep.Tf : null),
                    onClick: () => {
                        lW.A.updateChatOpen(e.id, !0),
                            (0, it.iN)(e.id, l ? { source: ie.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
                    },
                    "aria-label": em.intl.string(em.t.ZXxLQg),
                    children: (0, s.jsx)(lE.ChatIcon, { size: "xs", color: "currentColor", className: ep.gE }),
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
                className: eH()(this.getModeClass(), { [ep.r9]: this.isDisabled(), [ep.fy]: _ }),
                "data-dnd-name": (0, tJ.m1)(e, l6.default, id.A),
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
                        children: (0, s.jsx)(lz.Y, {
                            targetElementRef: this.channelItemRef,
                            position: "right",
                            renderPopout: this.renderPopout,
                            onRequestClose: this.closeGuildVerificationPopout,
                            spacing: 17,
                            shouldShow: b,
                            children: () =>
                                (0, s.jsx)(ei.m, {
                                    text: this.getTooltipText(),
                                    children: (0, s.jsxs)(ny.Ay, {
                                        ref: this.channelItemRef,
                                        className: ep.Ki,
                                        iconClassName: eH()({ [ep.Gj]: m || x || G }),
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
                (j = (0, s.jsx)(nn.A, {
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
let rr = $((0, lY.F)(rs));
function ra(e) {
    let {
            guild: t,
            channel: n,
            disableSorting: l,
            isFavoriteCategory: i,
            selected: r,
            collapsed: a,
            voiceStates: o,
        } = e,
        d = (0, u.cf)([n2.Ay], () => ({ unread: n2.Ay.hasUnread(n.id), mentionCount: n2.Ay.getMentionCount(n.id) })),
        c = (0, u.bG)([w.Ay], () => w.Ay.resolveUnreadSetting(n)),
        h = (0, u.cf)([T.A, l9.A, P.A], () => {
            let e = T.A.getChannel(n.parent_id),
                i = l9.A.getCheck(n.guild_id);
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
        A = (0, u.bG)([lS.A], () => lS.A.hasVideo(n.id)),
        { enabled: g } = (0, sW.mf)({ guildId: t.id, location: "VoiceChannel" }),
        m = (0, ic.Ay)(n),
        f = (0, u.yK)([s5.A, s7.A, ir.default], () => {
            if (null == o || 0 === o.length) return [];
            let e = ir.default.getId(),
                t = [];
            for (let { user: l } of o)
                for (let i of l.id === e ? s5.A.getActivities() : s7.A.getActivities(l.id, n.guild_id))
                    !(0, sB.N)(i) || (0, sk.A)(i) || null == i.name || t.includes(i.name) || t.push(i.name);
            return t;
        }, [o, n.guild_id]),
        p = (0, tJ.Ay)(n),
        C = (0, tD.Qs)(n.id),
        E = (0, u.bG)([sK.A], () => sK.A.getStartTime(n), [n]),
        { isSubscriptionGated: x, needSubscriptionToAccess: N } = (0, lN.A)(n.id),
        _ = (0, sz.A)(),
        I = (0, u.bG)([w.Ay], () => w.Ay.isFavorite(t.id, n.id)),
        S = e.connected || _?.channelId === n.id,
        { enableHighlight: b, enableWaveformIcon: G } = (0, no.b)(t.id, "VoiceChannel"),
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
    return (0, s.jsx)(rr, {
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
function ro(e) {
    return (
        h.A.modules.channels.NAME_LINE_HEIGHT.resolve({ density: e }) +
        2 * h.A.space.SPACE_XXS.resolve({ density: e }) +
        2
    );
}
class rd extends r.PureComponent {
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
        this.setState({ initialized: !0 }), (0, t_.Ei)(this.getVisibleChannels);
    }
    componentWillUnmount() {
        this.updateChannelListScroll.cancel();
    }
    componentDidUpdate(e, t) {
        let { scrollToChannel: n, guildId: l, selectedChannelId: i } = this.props,
            { initialized: s } = this.state,
            { scrollTop: r } = tE.A.getGuildDimensions(l);
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
                    a = s.threadOffset * ro(r);
                i.scrollIntoViewRect({ start: e + a, end: e + a + ro(r), padding: n, animate: t, callback: l });
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
                if (l < tx.bK || e.isPlaceholderRow(l, i)) return !1;
                let s = e.getChannelFromSectionRow(l, i);
                if (null == s) return !1;
                let { channel: r, category: a } = s;
                return (
                    !!(0, H.ig)(r.record.type) &&
                    (!a.isCollapsed || !a.isMuted) &&
                    !r.isMuted &&
                    !!t.isItemVisible(l, i, !0) &&
                    (0, ta.Y)(r.record)
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
        if (e === tx.PU) return i;
        if (e === tx.bK) return t.features.has(k.GuildFeatures.HUB) ? 0 : i;
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
            let { hasDivider: d, canHaveVoiceSummary: c } = nu(n, r, t),
                u = d ? (a ? 9 : 12) : 0;
            if (!c || t === tx.PU) return u;
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
            a = ro(r);
        if (e === tx.PU) {
            let e = n.getGuildActionSection();
            return e.isEmpty()
                ? 0
                : e.getRow(t) === tB.n.GUILD_PREMIUM_PROGRESS_BAR
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
            a += ro(t);
            let n = l[d.id];
            null != n && n.length > 0 && (a += s === e ? 32 * n.length : 32);
        }
        if (d.record.isGuildVoice()) {
            let e = l[d.id];
            if (null != e && e.length > 0) {
                let t = 32 * e.length;
                if (
                    (d.isCollapsed || c.isCollapsed ? (t = 32) : (0, eP.Ln)(d.record) && (t += 32),
                    (a += t + h.A.space.SPACE_XS.resolve({ density: r })),
                    !d.isCollapsed && !c.isCollapsed)
                ) {
                    let { enableHangoutWindow: e } = (0, eU.kY)({
                        guildId: d.record.guild_id,
                        location: "ChannelList",
                    });
                    e && ((0, eD.lr)(d.record) ? (a += 134) : s === d.id && (a += 44));
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
        null != n && s.includes(n) && (i = (0, eV.xb)(t)), (0, eV.DD)(e.id, s, i);
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
                    case tx.PU:
                        return "hoisted-spacer";
                    case tx.bK:
                        return "uncategorized-spacer";
                    case tx.HP:
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
        if (t === tx.PU) {
            let e = c.getGuildActionSection(),
                t = e.getRow(n);
            if (null == t) return null;
            switch (t) {
                case tB.n.GUILD_HUB_HEADER_OPTIONS:
                    return (0, s.jsx)(
                        eO.A,
                        { guild: l, channel: D.Ay.getDefaultChannel(l.id) },
                        tB.n.GUILD_HUB_HEADER_OPTIONS,
                    );
                case tB.n.GUILD_PREMIUM_PROGRESS_BAR:
                    let i = e.getRows();
                    return (0, s.jsx)(tr, { guild: l, withMargin: i.length > 1 }, tB.n.GUILD_PREMIUM_PROGRESS_BAR);
                case tB.n.GUILD_SPACE:
                    return (0, s.jsx)(eT, { guild: l, selected: a === eh.VV.GUILD_SPACE }, tB.n.GUILD_SPACE);
                case tB.n.GUILD_HOME:
                    return (0, s.jsx)(n7, { guild: l, selected: a === eh.VV.GUILD_HOME }, tB.n.GUILD_HOME);
                case tB.n.GUILD_SCHEDULED_EVENTS:
                    return (0, s.jsx)(
                        sU,
                        { guild: l, selected: a === tB.n.GUILD_SCHEDULED_EVENTS },
                        tB.n.GUILD_SCHEDULED_EVENTS,
                    );
                case tB.n.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, s.jsx)(
                        lr,
                        { guild: l, selected: a === eh.VV.ROLE_SUBSCRIPTIONS },
                        tB.n.GUILD_ROLE_SUBSCRIPTIONS,
                    );
                case tB.n.GUILD_SHOP:
                    return (0, s.jsx)(lp, { guild: l, selected: a === eh.VV.GUILD_SHOP }, tB.n.GUILD_SHOP);
                case tB.n.GUILD_GAME_SHOP:
                    return (0, s.jsx)(nJ, { guild: l, selected: a === eh.VV.GAME_SHOP }, tB.n.GUILD_GAME_SHOP);
                case tB.n.GUILD_VIBEGRATIONS:
                    return (0, s.jsx)(sH, { guild: l, selected: a === eh.VV.VIBEGRATIONS }, tB.n.GUILD_VIBEGRATIONS);
                case tB.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                    return (0, s.jsx)(ln, { guild: l });
                case tB.n.CHANNELS_AND_ROLES:
                    return (0, s.jsx)(
                        n9,
                        { guild: l, selected: a === eh.VV.CHANNEL_BROWSER || a === eh.VV.CUSTOMIZE_COMMUNITY },
                        tB.n.CHANNELS_AND_ROLES,
                    );
                case tB.n.GUILD_DIRECTORY:
                    return (0, s.jsx)(
                        nL,
                        { guild: l, selectedChannelId: a, disableManageChannels: h },
                        tB.n.GUILD_DIRECTORY,
                    );
                case tB.n.GUILD_MOD_DASH_MEMBER_SAFETY:
                    return (0, s.jsx)(
                        eM,
                        { guild: l, selected: a === eh.VV.MEMBER_SAFETY },
                        tB.n.GUILD_MOD_DASH_MEMBER_SAFETY,
                    );
                case tB.n.GUILD_BOOSTS:
                    return (0, s.jsx)(eQ, { guildId: l.id, selected: a === eh.VV.GUILD_BOOSTS }, tB.n.GUILD_BOOSTS);
                case tB.n.GAME_SERVERS:
                    return (0, s.jsx)(eI, { guildId: l.id, selected: a === eh.VV.GAME_SERVERS }, tB.n.GAME_SERVERS);
                case tB.n.GAME_SERVERS_EMPTY:
                    return (0, s.jsx)(
                        eC,
                        { guildId: l.id, selected: a === eh.VV.GAME_SERVERS },
                        tB.n.GAME_SERVERS_EMPTY,
                    );
                case tB.n.GUILD_OFFICIAL_MESSAGES:
                    return (0, s.jsx)(
                        li,
                        { guild: l, selected: a === eh.VV.GUILD_OFFICIAL_MESSAGES },
                        tB.n.GUILD_OFFICIAL_MESSAGES,
                    );
                default:
                    return null;
            }
        }
        if (c.isPlaceholderRow(t, n)) return null;
        let f = c.getChannelFromSectionRow(t, n);
        if (null == f) return null;
        let { category: p, channel: C } = f,
            E = p instanceof tx.xu,
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
                            (0, s.jsx)(sl, {
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
                    ra,
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
                return (0, s.jsx)(nt, { channel: x }, `readonly-${x.id}`);
            case k.rbe.PUBLIC_THREAD:
            case k.rbe.PRIVATE_THREAD:
            case k.rbe.ANNOUNCEMENT_THREAD:
                return (0, s.jsx)(
                    sl,
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
            children: (0, s.jsx)(sL, {
                ref: this.unreadTopRef,
                textUnread: em.intl.string(em.t.FCRiT3),
                textMention: em.intl.string(em.t["8zH0LJ"]),
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
        return (0, s.jsx)(sL, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: em.intl.string(em.t.FCRiT3),
            textMention: em.intl.string(em.t["8zH0LJ"]),
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
        if (e !== tx.PU) {
            if (null == t)
                return e === tx.HP
                    ? "favorites-header"
                    : e === n.recentsSectionNumber
                      ? "recents-header"
                      : e === n.voiceChannelsSectionNumber
                        ? "voice-channels"
                        : e === tx.bK
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
        if (!tp.A.shouldShow("voice-conversations")) return;
        let { guildChannels: e } = this.props,
            t = e.getFirstVoiceChannel();
        if (null == t) return void tf.X8("voice-conversations");
        let n = this._list;
        if (null != n)
            for (let { section: e, row: l } of this.getSectionRowsFromChannel(t.id))
                n.isItemVisible(e, l) || tf.X8("voice-conversations");
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
                                      className: ns.Eo,
                                      children: (0, s.jsx)(sj, {
                                          position: "top",
                                          guildChannels: e,
                                          guildChannelsVersion: t,
                                          jumpToVoiceChannels: this.jumpToVoiceChannels,
                                          jumpToChannel: this.jumpToChannel,
                                      }),
                                  }),
                                  this.renderList(),
                                  (0, s.jsx)(sj, {
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
let rc = (e) => {
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
            [tA.A, T.A, to.A],
            () => {
                let t;
                return [
                    (t = (0, R.ai)(e)
                        ? th.default
                              .keys(to.A.getFavoriteChannels())
                              .map((e) => T.A.getChannel(e))
                              .filter(tc.Vq)
                              .filter((e) => e.isGuildStageVoice())
                        : tA.A.getChannels(e)).reduce((e, t) => {
                        let n = tA.A.getMutableParticipants(t.id, tg.ip.SPEAKER);
                        return (e[t.id] = n.filter((e) => e.type === tg.wY.VOICE).map(tm)), e;
                    }, {}),
                    t.reduce((e, t) => {
                        let { id: n } = t;
                        return e + tA.A.getParticipantsVersion(n);
                    }, 0),
                ];
            },
            [e],
            tu.D,
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
                    (0, s.jsx)(tC.q, { containerRef: E.containerProps.ref, itemType: q }),
                    (0, s.jsx)(rd, {
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
function ru(e) {
    let t = (function (e) {
            var t;
            let n,
                l,
                i =
                    ((t = e.id),
                    (n = (0, tU.A)(t)),
                    (l = (0, tD.Ay)(t)),
                    !(0, u.bG)([O.A], () => {
                        if (null == t) return !1;
                        let e = O.A.getGuild(t);
                        return e?.features.has(k.GuildFeatures.HUB) ?? !1;
                    }, [t]) &&
                        (n || l.length > 0)),
                s = (0, tj.W)(e.id),
                r = (0, tT.vz)(e.id),
                a = (0, tS.r)(e),
                o = (0, tw.jz)(e),
                d = (0, tM.d)(e.id),
                c = (0, tI.bG)([tR.h], () => tR.h.getNewMemberActions(e.id), [e.id]),
                h = (0, tH.by)(e, "useGuildActionRows"),
                A = (0, tL.A)(e.id),
                g = (0, ty.jY)(e.id),
                m = (0, tv.fw)(e.id),
                f = (0, tO.Uq)(e.id, "useGuildActionRows"),
                p = [],
                C = e.features.has(k.GuildFeatures.HUB),
                E = e.features.has(k.GuildFeatures.COMMUNITY),
                x = e.features.has(k.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
                N = (0, te.A)(e.id);
            tV.useConfig({ location: "useGuildActionRows" }).enabled;
            let _ = tn(e),
                I = (0, tP.bW)(e.id, "useGuildActionRows"),
                S = (0, tb.C$)(e.id, "useGuildActionRows"),
                b = e.features.has(k.GuildFeatures.GAME_SERVERS),
                G = (0, tG.N)("useGuildActionRows"),
                [j] = (0, ed.kn)(S && G && !b ? [el.M.EMPTY_GAME_SERVER_TAB] : [], void 0, !0);
            return (
                C && p.push(tB.n.GUILD_HUB_HEADER_OPTIONS),
                !g && d && A && null != c && c.length > 0
                    ? p.push(tB.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
                    : e.premiumProgressBarEnabled && _ > 0 && p.push(tB.n.GUILD_PREMIUM_PROGRESS_BAR),
                !C && d && p.push(tB.n.GUILD_HOME),
                f && p.push(tB.n.GUILD_SPACE),
                i && p.push(tB.n.GUILD_SCHEDULED_EVENTS),
                !C && E && p.push(tB.n.CHANNELS_AND_ROLES),
                r && p.push(tB.n.GUILD_ROLE_SUBSCRIPTIONS),
                a && p.push(tB.n.GUILD_SHOP),
                o && p.push(tB.n.GUILD_GAME_SHOP),
                ((m && (E || x)) || (s && e.features.has(k.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL))) &&
                    p.push(tB.n.GUILD_MOD_DASH_MEMBER_SAFETY),
                N && p.push(tB.n.GUILD_BOOSTS),
                I && p.push(tB.n.GUILD_OFFICIAL_MESSAGES),
                S && (b ? p.push(tB.n.GAME_SERVERS) : null != j && p.push(tB.n.GAME_SERVERS_EMPTY)),
                h && p.push(tB.n.GUILD_VIBEGRATIONS),
                p
            );
        })(e.guild),
        n = (0, u.cf)([tN.A], () => tN.A.getGuild(e.guildId, { guildActionRows: t })),
        { density: l } = (0, C.wR)();
    return (0, s.jsx)(rc, { ...e, ...n, density: l });
}
