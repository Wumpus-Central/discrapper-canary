(n.d(t, { B: () => rv, i: () => rj }), n(321073));
var i,
    l,
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
    N = n(480747),
    _ = n(437725),
    S = n(192308),
    I = n(66834),
    b = n(443063),
    G = n(999903),
    R = n(544169),
    j = n(16236),
    v = n(5180),
    y = n(770376),
    M = n(395504),
    T = n(924985),
    L = n(734057),
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
function K(e, t, n, i) {
    let l = -1;
    if (
        (i.find((e, n) => {
            let { channel: i } = e;
            return i.id === t && ((l = n), !0);
        }),
        l < 0)
    )
        return null;
    for (let t = l; t >= 0 && t < i.length; t += e) {
        let e = i[t];
        if (F(e.channel.type, n)) return e;
    }
    return null;
}
function z(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null == e) return 0;
    let i = null;
    return (
        t
            .filter((t) => {
                let {
                    channel: { type: i },
                } = t;
                return null != e && (n || F(e.type, i));
            })
            .find((t, n) => {
                let {
                    channel: { id: l },
                } = t;
                return null != e && l === e.id && ((i = n), !0);
            }),
        i
    );
}
function W(e) {
    return { referenceId: e.id, parentId: e.parent_id };
}
function Y(e, t, n, i, l) {
    if (null == e || null == n) return null;
    let { GUILD_CATEGORY: s } = k.rbe;
    if (e.type === s)
        return i === t || (i < t && e.type === n.type)
            ? W(n)
            : i > t
              ? (function (e, t, n) {
                    let { GUILD_CATEGORY: i } = k.rbe,
                        l = n[(z(t, n, !0) ?? 0) + 1],
                        s = K(-1, t.id, e.type, n);
                    return null == s || s.channel.id === e.id
                        ? null
                        : null == l || l.channel.type === i
                          ? { referenceId: s.channel.id, parentId: null }
                          : null;
                })(e, n, l)
              : null;
    if (F(e.type, n.type)) return W(n);
    if (i < t) {
        let t, i;
        if (n.type === s) {
            let t = l[(z(n, l, !0) ?? 0) - 1],
                i = K(1, n.id, e.type, l);
            if (null == t) return { referenceId: null, parentId: null };
            if (null != i) {
                if (F(t.channel.type, e.type) || (e.isGuildVocal() && (0, H.tr)(t.channel.type)))
                    return { referenceId: i.channel.id, parentId: t.channel.parent_id };
                if (t.channel.isCategory()) return { referenceId: i.channel.id, parentId: t.channel.id };
            }
            return null;
        }
        return (
            (t = l[(z(n, l, !0) ?? 0) - 1]),
            (i = K(1, n.id, e.type, l)),
            null != t || e.isGuildVocal()
                ? (0, H.tr)(e.type) && null != i && ((0, H.tr)(t.channel.type) || t.channel.isCategory())
                    ? { referenceId: i.channel.id, parentId: n.parent_id }
                    : null
                : { referenceId: null != i ? i.channel.id : null, parentId: null }
        );
    }
    if (n.type === s) {
        let t = l[(z(n, l, !0) ?? 0) + 1],
            i = K(-1, n.id, e.type, l);
        if (null != i) {
            if (null == t) return { referenceId: i.channel.id, parentId: n.id };
            if (F(t.channel.type, e.type) || ((0, H.tr)(e.type) && t.channel.isGuildVocal()))
                return { referenceId: i.channel.id, parentId: t.channel.parent_id };
            if (t.channel.isCategory()) return { referenceId: i.channel.id, parentId: n.id };
        }
        return null;
    }
    let r = l[(z(n, l, !0) ?? 0) + 1],
        a = K(-1, n.id, e.type, l);
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
    if (!(0, v.ai)(e)) return L.A.getChannel(t);
    let n = D.Ay.getChannels(e),
        i =
            n[D.I6].find((e) => e.channel.id === t) ??
            n[D.vM].find((e) => e.channel.id === t) ??
            n[k.rbe.GUILD_CATEGORY].find((e) => e.channel.id === t);
    return i?.channel;
}
function J(e, t) {
    if (null != e.parent_id) {
        let t = L.A.getChannel(e.parent_id);
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
                    i = V.A.getGuildId(),
                    l = t.getItem(),
                    r = Y(Z(i, l.id), l.position, e.channel, e.position, l.channelList);
                if (null == r) return;
                let a = Z(i, l.id);
                if (null == a) return;
                let o = U.A.getCategories(i),
                    d = O.A.getGuild(i);
                if (null == d) return;
                let c = (function (e, t, n, i) {
                    let l,
                        s,
                        r = [],
                        a = [],
                        o = i._categories;
                    function d(t) {
                        var n, i;
                        let a;
                        return (
                            (a =
                                null == l ||
                                null == s ||
                                ((n = l),
                                (i = s),
                                +(null == n || null == i || null == t[n] || t[n].channel !== e || null == t[i]))
                                    ? [...t]
                                    : B.Ay.moveItemFromTo(t, l, s)),
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
                        ((l = z(e, n)), (s = z(t, n)), (a = d(n)).unshift(o[0]));
                    }
                    if ((0, H.tr)(e.type) || e.isCategory()) {
                        let n = (0, G.A)(a.length > 0 ? a : o, i, (e) => {
                            let {
                                channel: { type: t },
                            } = e;
                            return (0, H.tr)(t);
                        });
                        ((l = z(e, n)), (s = z(t, n)), d(n));
                    }
                    if (e.isGuildVocal() || e.isCategory()) {
                        let n = (0, G.A)(a.length > 0 ? a : o, i, (e) => {
                            let { channel: t } = e;
                            return t.isGuildVocal();
                        });
                        ((l = z(e, n)), (s = z(t, n)), d(n));
                    }
                    return (
                        e.parent_id !== n &&
                            null == r.find((t) => t.id === e.id && ((t.parent_id = n), !0)) &&
                            r.push({ id: e.id, parent_id: n }),
                        r
                    );
                })(a, Z(i, r.referenceId), r.parentId, o);
                if (0 !== c.length) {
                    if ((0, v.ai)(i)) return void (0, j.zN)(c);
                    if (
                        ((c = c.filter((e) => {
                            let { id: t } = e,
                                n = L.A.getChannel(t);
                            if (null == n) return !1;
                            let i = L.A.getChannel(n.parent_id);
                            return n.type === k.rbe.GUILD_CATEGORY || null == i
                                ? P.A.can(k.xBc.MANAGE_CHANNELS, d)
                                : P.A.can(k.xBc.MANAGE_CHANNELS, i);
                        })),
                        a.parent_id !== r.parentId &&
                            c.find((e) => {
                                if (e.id !== a.id) return !1;
                                let t = L.A.getChannel(e.parent_id);
                                if (!(null != t && P.A.can(k.xBc.MANAGE_ROLES, a) && P.A.can(k.xBc.MANAGE_ROLES, t)))
                                    return !0;
                                let i = (0, b.GY)(a),
                                    l = X.r(a, t, i),
                                    s = X.r(a, L.A.getChannel(a.parent_id), i);
                                return (((null != a.parent_id || l) && (!s || l)) || (n = e), !0);
                            }),
                        null != n)
                    ) {
                        let e = L.A.getChannel(n.parent_id);
                        null != e &&
                            (0, S.openModal)((t) =>
                                (0, s.jsx)(R.default, {
                                    ...t,
                                    channel: a,
                                    category: e,
                                    onConfirm: () => {
                                        null != n && ((n.lock_permissions = !0), I.A.batchChannelUpdate(i, c));
                                    },
                                    onCancel: () => {
                                        null != n && I.A.batchChannelUpdate(i, c);
                                    },
                                }),
                            );
                    } else I.A.batchChannelUpdate(i, c);
                }
            },
            canDrop(e, t) {
                let n = t.getItem(),
                    i = L.A.getChannel(n.id);
                if (null == i) return !1;
                let l = Y(L.A.getChannel(n.id), n.position, e.channel, e.position, n.channelList);
                if (null == l) return !1;
                if ((0, v.ai)(V.A.getGuildId())) return !0;
                if (w.Ay.isFavorite(n.guildId, e.channel.id)) return !1;
                let s = O.A.getGuild(n.guildId);
                if (null == s) return !1;
                let r = L.A.getChannel(l.parentId),
                    a = L.A.getChannel(i.parent_id),
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
                    if ((0, v.ai)(V.A.getGuildId())) return !0;
                    let i = O.A.getGuild(t.getGuildId());
                    return (
                        null != i &&
                        ((0, M.WW)(i.id) && J(t, i)
                            ? ((0, y.A)() &&
                                  (0, S.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([n.e("57729"), n.e("24848")]).then(
                                          n.bind(n, 354643),
                                      );
                                      return (t) => (0, s.jsx)(e, { ...t });
                                  }),
                              !1)
                            : w.Ay.isFavorite(i.id, t.id) && J(t, i)
                              ? ((0, S.openModalLazy)(async () => {
                                    let { default: e } = await n.e("280545").then(n.bind(n, 933752));
                                    return (n) => (0, s.jsx)(e, { ...n, guildId: i.id, channelId: t.id });
                                }),
                                !1)
                              : J(t, i))
                    );
                },
                beginDrag(e) {
                    let {
                            channel: { id: t, parent_id: n, guild_id: i, type: l },
                            position: s,
                        } = e,
                        r = V.A.getGuildId(),
                        a = U.A.getCategories(r);
                    return {
                        isChannelDrag: !0,
                        id: t,
                        position: s,
                        parentId: n,
                        type: l,
                        channelList: (0, G.A)(a._categories, a, (e) => {
                            let { channel: t } = e;
                            return t.type === k.rbe.GUILD_CATEGORY && null != a[t.id] && 0 === a[t.id].length
                                ? !!(0, v.ai)(r) ||
                                      (P.A.can(k.xBc.MANAGE_CHANNELS, t) && P.A.can(k.xBc.VIEW_CHANNEL, t))
                                : !T.A.isCollapsed(t.parent_id);
                        }),
                        guildId: i,
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
    ei = n(554146),
    el = n(866665),
    es = n(939249),
    er = n(789645),
    ea = n(812993),
    eo = n(687966),
    ed = n(131607),
    ec = n(652793),
    eu = n(976860),
    eh = n(746080),
    eA = n(49999),
    eg = n(344045),
    em = n(375708),
    ef = n(275833),
    ep = n(964306);
let eC = r.memo(function (e) {
    let { guildId: t, selected: i } = e,
        [l, a] = (0, ed.ww)([ei.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        o = l === ei.M.GAME_SERVER_HOSTING_NEW_BADGE,
        d = r.useCallback(() => {
            (a(eA.i.USER_DISMISS), (0, eu.pX)(k.BVt.CHANNEL(t, eh.VV.GAME_SERVERS)));
        }, [t, a]),
        c = r.useCallback(
            (e) => {
                (e.stopPropagation(),
                    (0, S.openModalLazy)(async () => {
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
                    children: (0, s.jsx)(el.m, {
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
        selected: i,
        onClick: d,
        trailing: u,
    });
});
var eE = n(361158),
    ex = n(270533),
    eN = n(186111),
    e_ = n(917782);
let eS = r.memo(function (e) {
    let { guildId: t, selected: n } = e,
        i = (0, S.useHasAnyModalOpen)(),
        l = (0, u.bG)([eN.A], () => eN.A.hasLayers()),
        a = (0, eE.xr)((e) => e.fullScreenLayers.length > 0),
        [o, d] = (0, ed.ww)([ei.M.GAME_SERVER_HOSTING_NEW_BADGE], t),
        c = o === ei.M.GAME_SERVER_HOSTING_NEW_BADGE,
        [h, A] = (0, ed.ww)(i || l || a || !c ? [] : [ei.M.GAME_SERVER_HOSTING_NEW_COACHMARK], t),
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
        p = h === ei.M.GAME_SERVER_HOSTING_NEW_COACHMARK,
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
var eI = n(177953),
    eb = n(624458),
    eG = n(844944),
    eR = n(513461),
    ej = n(663997),
    ev = n(221950);
function ey(e) {
    let { guild: t, selected: n } = e,
        i = (0, u.bG)([P.A], () => P.A.can(k.xBc.KICK_MEMBERS, t)),
        l = (0, u.bG)([eG.A], () => eG.A.getSubmittedGuildJoinRequestTotal(t.id)),
        a = i ? (l ?? 0) : 0;
    r.useEffect(() => {
        i &&
            t.features.has(k.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
            t.features.has(k.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            eb.A.fetchGuildJoinRequests({ guildId: t.id, status: eR.B5.SUBMITTED, limit: ej.L });
    }, [i, t]);
    let o = r.useCallback(() => {
        (0, ev.aZ)(t.id);
    }, [t.id]);
    return (0, s.jsx)(ec.G, {
        id: `members-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(eI.n, { size: "md", color: "currentColor", className: e }),
        text: em.intl.string(em.t.oclz3Z),
        selected: n,
        onClick: o,
        trailing: a > 0 ? (0, s.jsx)(ea.hV, { count: a }) : null,
    });
}
var eM = n(43105),
    eT = n(332837),
    eL = n(508770),
    eU = n(93675),
    eD = n(942857),
    eO = n(784890);
function eP(e) {
    let { guild: t, selected: n } = e,
        i = (0, eD.A)(),
        [l, a] = (0, ed.kn)(i ? [] : [ei.M.GUILD_SPACE_COACHMARK], void 0, !0),
        o = l === ei.M.GUILD_SPACE_COACHMARK,
        d = r.useRef(null),
        c = r.useCallback(() => {
            (a(eA.i.USER_DISMISS), (0, eu.pX)(k.BVt.CHANNEL(t.id, eh.VV.GUILD_SPACE)));
        }, [t.id, a]),
        u = r.useCallback(() => {
            (a(eA.i.TAKE_ACTION), (0, eu.pX)(k.BVt.CHANNEL(t.id, eh.VV.GUILD_SPACE)));
        }, [t.id, a]);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(ec.G, {
                ref: d,
                id: `guild-space-tab-${t.id}`,
                renderIcon: (e) => (0, s.jsx)(eT.HomeIcon, { size: "md", color: "currentColor", className: e }),
                text: em.intl.string(em.t["04IVMq"]),
                selected: n,
                onClick: c,
                trailing: o ? (0, s.jsx)(eL.E, { type: "new", variant: "brand" }) : null,
            }),
            o
                ? (0, s.jsx)(eM.A, {
                      targetElementRef: d,
                      title: em.intl.string(eO.default["+OEqVQ"]),
                      body: em.intl.string(eO.default["BP//Ot"]),
                      graphic: {
                          type: "rive",
                          rive: eU.f,
                          aspectRatio: "16/9",
                          props: { dataBinding: { on: !0 }, withReducedMotion: "halt", fit: "contain" },
                      },
                      actions: [{ text: em.intl.string(em.t.RzWDqY), variant: "primary", onClick: u }],
                      shouldShow: !0,
                      position: "right",
                      align: "top",
                      alignmentStrategy: "edge",
                      caretConfig: { align: "start" },
                      scrollBehavior: "close",
                      onRequestClose: () => a(eA.i.USER_DISMISS),
                  })
                : null,
        ],
    });
}
var eV = n(581007),
    ew = n(522435),
    eH = n(285406),
    eB = n(582904),
    ek = n(419534),
    eF = n(503698),
    eK = n.n(eF),
    ez = n(695366),
    eW = n(104510),
    eY = n(544048),
    eX = n(868652),
    eq = n(379229),
    eZ = n(482487),
    eJ = n(914732),
    e$ = n(828162),
    eQ = n(877624),
    e0 = n(549996),
    e1 = n(356863),
    e3 = n(247806);
function e2(e) {
    let { indicator: t } = e;
    if (null == t) return null;
    switch (t.type) {
        case eq.cD.WARNING:
            return (0, s.jsx)(ez.E, { color: h.A.colors.STATUS_WARNING, size: "sm" });
        case eq.cD.UNREAD:
            return (0, s.jsx)(ea.hV, { count: t.count });
        default:
            return null;
    }
}
let e9 = { animation: { BEG: 0, END: 75 }, LOOP: { BEG: 76, END: 376 } },
    e7 = r.memo(function (e) {
        let { guildId: t, selected: i } = e,
            l = (0, eJ.Ay)(t),
            { showHighlight: a, markAsDismissed: o } = (function () {
                let e = (0, e0.c)(eQ.C.GUILD_BOOST_TAB_BANNER),
                    t = null != e && "guildBoostTabBanner" === e.properties.properties.oneofKind,
                    [n, i] = (0, ed.Cc)(t ? ei.M.GUILD_BOOST_TAB_HIGHLIGHT : null, e?.promotionId ?? "");
                return { showHighlight: n === ei.M.GUILD_BOOST_TAB_HIGHLIGHT, markAsDismissed: i };
            })(),
            { showNewBadgeOnRow: d, dismissNewBadgeIfShown: c } = (0, eZ.A)(
                t,
                l?.indicator != null || l?.popout != null,
            ),
            A = r.useCallback(() => {
                (c(),
                    (0, eX.Zm)(t),
                    (0, e$.A)(t, ee.A.GUILD_POWERUPS_CHANNEL_LIST_ROW),
                    l?.popout?.markAsDismissed(eA.i.INDIRECT_ACTION));
            }, [t, c, l]),
            g = r.useRef(null),
            m = (0, S.useModalsStore)(S.hasAnyModalOpenSelector),
            f = (0, u.bG)([eN.A], () => eN.A.hasLayers()),
            p = (0, eE.xr)((e) => e.fullScreenLayers.length > 0),
            C = m || f || p,
            E = r.useCallback(() => {
                if (l?.popout == null || C) return null;
                switch (l?.popout?.type) {
                    case eq.o.LEVEL_REACHED:
                        return (0, s.jsx)(ex.HW, { guildId: t, channelRowRef: g, ...l.popout });
                    case eq.o.PERKS_AVAILABLE:
                        return (0, s.jsx)(ex.UB, { guildId: t, channelRowRef: g, ...l.popout });
                    case eq.o.PERKS_PURCHASABLE:
                        return (0, s.jsx)(ex.lw, { guildId: t, channelRowRef: g, ...l.popout });
                    case eq.o.NEW_PERK_AVAILABLE:
                        return (0, s.jsx)(ex.bo, { guildId: t, channelRowRef: g, ...l.popout });
                    case eq.o.BOOST_TO_UNLOCK:
                        return (0, s.jsx)(ex.Gw, { guildId: t, channelRowRef: g, ...l.popout });
                    case eq.o.EXPIRING_PERK:
                        return (0, s.jsx)(ex.Mr, { guildId: t, channelRowRef: g, ...l.popout });
                    case eq.o.GAME_SERVER_HOSTING_AVAILABLE:
                    case eq.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE:
                        return (0, s.jsx)(ex.jz, { guildId: t, channelRowRef: g, ...l.popout });
                    case eq.o.GAME_SERVER_NEW_GAMES:
                        return (0, s.jsx)(ex.YX, { guildId: t, channelRowRef: g, ...l.popout });
                    case eq.o.GAME_SERVER_PRICING_CHANGE:
                        return (0, s.jsx)(ex.Ns, { guildId: t, channelRowRef: g, ...l.popout });
                    default:
                        return (0, s.jsx)("div", {});
                }
            }, [t, l?.popout, g, C]);
        r.useEffect(() => {
            i && a && o(eA.i.AUTO_DISMISS);
        }, [i, a, o]);
        let x = l?.popout != null || a,
            [N, _] = r.useState(null);
        r.useEffect(() => {
            x || _(null);
        }, [x]);
        let I = r.useCallback((e) => {
            _(e);
        }, []);
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(ec.G, {
                    ref: g,
                    className: e3.kL,
                    id: `skill-trees-${t}`,
                    renderIcon: (e) => (0, s.jsx)(eW._, { size: "md", className: e, color: "currentColor" }),
                    background:
                        x &&
                        (0, s.jsx)("div", {
                            className: e3.Fi,
                            children: (0, s.jsx)(eY.t, {
                                nextScene: null == N ? "animation" : "LOOP",
                                className: e3.UU,
                                sceneSegments: e9,
                                importData: () => n.e("867807").then(n.t.bind(n, 217762, 19)),
                                onScenePlay: I,
                                rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                            }),
                        }),
                    text: (0, s.jsx)("span", {
                        className: eK()({ [e3.A7]: l?.showUnread === !0 }),
                        children: em.intl.string(e1.default.yv3DJJ),
                    }),
                    selected: i,
                    onClick: A,
                    showUnread: l?.showUnread === !0,
                    trailing: d
                        ? (0, s.jsx)(ea.Lp, {
                              text: em.intl.string(em.t.y2b7CA),
                              color: h.A.colors.BACKGROUND_BRAND.css,
                          })
                        : (0, s.jsx)(e2, { indicator: l?.indicator }),
                }),
                E(),
            ],
        });
    });
var e6 = n(202091),
    e5 = n(717421),
    e4 = n(834730),
    e8 = n(442433),
    te = n(230135),
    tt = n(228366);
let tn = {};
class ti extends u.Ay.PersistedStore {
    static displayName = "GuildBoostingProgressBarPersistedStore";
    static persistKey = "PremiumGuildProgressBarPersistedStore";
    initialize(e) {
        null != e && (tn = e);
    }
    getState() {
        return tn;
    }
    getCountForGuild(e) {
        return tn[e];
    }
}
let tl = new ti(tt.h, {
    APPLIED_GUILD_BOOST_COUNT_UPDATE: function (e) {
        let { guildId: t, premiumCount: n } = e;
        tn = { ...tn, [t]: n };
    },
    APPLIED_GUILD_BOOST_COUNT_RESET: function () {
        tn = {};
    },
});
var ts = n(147925),
    tr = n(363487),
    ta = n(568065);
function to(e) {
    return (0, r.useMemo)(() => {
        if (null == e) return 0;
        let t = e?.features.has(k.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) === !0 ? 0 : k.M2T[k.TVA.TIER_3],
            n = Object.values(ta.sy),
            i = Object.values(ta.YV);
        return (
            n.concat(i).forEach((n) => {
                null == n.includedInLevel && (n.isEnabled?.(e.id) ?? !0) && (t += n.boostPrice);
            }),
            t
        );
    }, [e]);
}
var td = n(196577);
let tc = r.forwardRef((e, t) => {
    let { appliedBoostCount: n, maxBoostCount: i, premiumSubscriberCount: l, className: a } = e,
        o = n >= i,
        d = Math.min((n / i) * 100, 100),
        c = `calc(${d}% - 4px)`,
        [u, h] = (0, e5.z)(
            () => ({ width: n === l ? c : "calc(0% - 0px)", config: { tension: 250, damping: 5, mass: 1 } }),
            "respect-motion-settings",
            [n, l],
        );
    return (
        r.useEffect(() => {
            h({ width: c });
        }, [c, h]),
        (0, s.jsxs)("div", {
            ref: t,
            className: td.hQ,
            children: [
                (0, s.jsx)("div", { className: eK()(td.L$, a) }),
                (0, s.jsx)(e6.animated.div, { className: eK()(td.qB, { [td.mu]: d <= 5 }), style: u }),
                (0, s.jsxs)("div", {
                    className: td.FS,
                    children: [
                        (0, s.jsxs)("div", {
                            className: td.Ui,
                            children: [
                                (0, s.jsx)(e4.E, {
                                    className: td.Qq,
                                    variant: "text-xs/semibold",
                                    children: em.intl.string(e1.default.NI6Ihe),
                                }),
                                l >= i &&
                                    (0, s.jsx)(e4.E, {
                                        className: td.Qq,
                                        variant: "text-xs/semibold",
                                        children: "\uD83C\uDF89",
                                    }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: td.Ui,
                            children: [
                                (0, s.jsx)(e4.E, {
                                    className: eK()(td.Qq, td.ue),
                                    variant: "text-xs/semibold",
                                    children: o
                                        ? em.intl.formatToPlainString(e1.default["Ehpq+7"], { appliedBoostCount: n })
                                        : em.intl.formatToPlainString(e1.default["/rbPDs"], {
                                              appliedBoostCount: n,
                                              maxBoostCount: i,
                                          }),
                                }),
                                (0, s.jsx)(ts.A, {
                                    width: 12,
                                    height: 12,
                                    direction: ts.A.Directions.RIGHT,
                                    className: eK()(td.Qq, td.ue, td.OW),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
function tu(e) {
    let { guild: t, withMargin: i } = e,
        l = to(t),
        a = (0, tr.A)(t.id),
        o = r.useCallback(() => {
            (0, e$.A)(t.id, ee.A.GUILD_BOOSTING_SIDEBAR_DISPLAY);
        }, [t.id]),
        d = (0, u.bG)([tl], () => tl.getCountForGuild(t.id) ?? 0);
    r.useEffect(() => {
        d !== t.premiumSubscriberCount && (0, te.u)(t.id, t.premiumSubscriberCount);
    }, [t.id, d, t.premiumSubscriberCount]);
    let c = r.useCallback(
        (e) => {
            a &&
                (0, e8.L3)(e, async () => {
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
        className: eK()(td.kL, { [td.aF]: i }),
        onContextMenu: c,
        children: (0, s.jsx)(tc, {
            appliedBoostCount: d,
            maxBoostCount: l,
            premiumSubscriberCount: t.premiumSubscriberCount,
        }),
    });
}
function th(e) {
    let { guild: t, withMargin: n } = e;
    return (0, s.jsx)(tu, { guild: t, withMargin: n });
}
tc.displayName = "GuildPowerupsProgressBarUI";
var tA = n(455234),
    tg = n(181079),
    tm = n(607567),
    tf = n(403362),
    tp = n(996439),
    tC = n(935208),
    tE = n(63995),
    tx = n(518769);
function tN(e) {
    let { voiceState: t, userNick: n, user: i } = e,
        l = (0, tm.hz)(t, n);
    return { user: i, voiceState: t, nick: n, comparator: l };
}
var t_ = n(787541),
    tS = n(79858),
    tI = n(600761),
    tb = n(72314),
    tG = n(297469),
    tR = n(960755),
    tj = n(633965),
    tv = n(702841),
    ty = n(41200),
    tM = n(770934),
    tT = n(831617),
    tL = n(589603),
    tU = n(496767),
    tD = n(134413),
    tO = n(701785),
    tP = n(101611),
    tV = n(473529);
let tw = new Set();
class tH extends u.Ay.PersistedStore {
    static displayName = "ServerOnboardingSetupProgressCompletionStore";
    static persistKey = "ServerOnboardingSetupProgressCompletedGuildIds";
    initialize(e) {
        tw = new Set(e?.completedGuildIds ?? []);
    }
    getState() {
        return { completedGuildIds: Array.from(tw) };
    }
    isComplete(e) {
        return tw.has(e);
    }
}
let tB = new tH(tt.h, {
    SERVER_ONBOARDING_SETUP_PROGRESS_COMPLETE: function (e) {
        let { guildId: t } = e;
        tw = new Set(tw).add(t);
    },
});
var tk = n(686978),
    tF = n(945810);
let tK = (0, tF.mj)({
    name: "2026-09-server-onboarding-setup-progress",
    kind: "user",
    defaultConfig: { showSetupProgressRow: !1 },
    variations: { 1: { showSetupProgressRow: !0 } },
});
var tz = n(978165),
    tW = n(960253),
    tY = n(770666),
    tX = n(508654),
    tq = n(313627),
    tZ = n(521427);
let tJ = (0, tF.mj)({
    name: "2026-04-mobile-boost-progress-bar",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var t$ = n(871123),
    tQ = n(683180),
    t0 = n(281405),
    t1 = n(3026),
    t3 = n(821609),
    t2 = n(499373),
    t9 = n(559106),
    t7 = n(847374),
    t6 = n(285796),
    t5 = n(983851),
    t4 = n(914430),
    t8 = n(47167),
    ne = n(485947),
    nt = n(970853),
    nn = n(93055),
    ni = n(349828),
    nl = n(384539),
    ns = n(551851),
    nr = n(391507);
function na(e) {
    e.stopPropagation();
}
function no(e) {
    let { label: t, onClick: n, tabIndex: i } = e;
    return (0, s.jsx)(el.m, {
        text: t,
        children: (0, s.jsx)(es.D, {
            className: eK()(nr.c9, nr.ih),
            onClick: n,
            tabIndex: i,
            role: "button",
            "aria-label": t,
            children: (0, s.jsx)(t2.T, { size: "xs", color: "currentColor", className: nr.hs }),
        }),
    });
}
let nd = $(
        r.memo(function (e) {
            let t,
                {
                    channel: i,
                    connectChannelDragSource: l,
                    connectChannelDropTarget: a,
                    disableManageChannels: o,
                    position: c,
                    sortingPosition: h,
                    hideIcon: A,
                    children: g,
                } = e,
                m = (0, u.bG)([w.Ay], () => w.Ay.isChannelMuted(i.getGuildId(), i.id)),
                f = (0, u.bG)([T.A], () => T.A.isCollapsed(i.id)),
                p = (0, u.bG)([P.A], () => P.A.can(k.xBc.MANAGE_CHANNELS, i)),
                C = (0, t8.Ay)(i);
            t = null != h ? (c > h ? nr.mU : nr.TR) : nr.fx;
            let E = r.useCallback(() => {
                    f ? (0, t4.fh)(i.id) : (0, t4.Gv)(i.id);
                }, [i.id, f]),
                x = r.useCallback(
                    (e) => {
                        if ("null" !== i.id) {
                            let t = O.A.getGuild(i.getGuildId());
                            null != t &&
                                (0, e8.L3)(e, async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("926132"),
                                        n.e("393336"),
                                        n.e("391763"),
                                        n.e("955557"),
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
                                    return (n) => (0, s.jsx)(e, { ...n, channel: i, guild: t });
                                });
                        }
                    },
                    [i],
                ),
                N = r.useCallback(() => {
                    let e = i.type === k.rbe.GUILD_CATEGORY ? null : i.type,
                        t = i.getGuildId();
                    null != t &&
                        (0, S.openModalLazy)(async () => {
                            let { default: l } = await Promise.all([
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
                                n.e("898377"),
                                n.e("819193"),
                                n.e("507775"),
                                n.e("662068"),
                                n.e("358608"),
                                n.e("221500"),
                            ]).then(n.bind(n, 684343));
                            return (n) =>
                                (0, s.jsx)(l, {
                                    ...n,
                                    channelType: e,
                                    guildId: t,
                                    categoryId: "null" !== i.id ? i.id : null,
                                });
                        });
                }, [i]),
                _ = (function (e, t) {
                    let n = (0, u.bG)([tg.A], () => tg.A.autoAddJoinedThreads),
                        { isAtLimit: i } = (0, nn.ft)();
                    return n &&
                        i &&
                        null != t &&
                        (0, v.ai)(e.getGuildId()) &&
                        e.type === k.rbe.GUILD_CATEGORY &&
                        t.trim().toLowerCase() === ni.A.toLowerCase()
                        ? { label: em.intl.string(nl.default.WsUrMD), tooltip: em.intl.string(nl.default.dW9Kov) }
                        : null;
                })(i, C),
                I = (0, nt.A)(i);
            null == I && p && !o && (I = { label: em.intl.string(em.t["fUYU+j"]), perform: N });
            let { role: b, tabIndex: G, ...R } = (0, d.rm)(i.id),
                j = r.useRef(null),
                y = r.useRef(null),
                M = (0, s.jsxs)("li", {
                    className: t,
                    "data-dnd-name": C,
                    children: [
                        (0, s.jsx)(t9.vN, {
                            focusTarget: j,
                            ringTarget: y,
                            offset: { left: 4, right: 4 },
                            children: (0, s.jsxs)("div", {
                                ref: y,
                                className: eK()(nr.Ki, nr.iE, { [nr.yZ]: f, [nr.SU]: m, [nr.vk]: !0 }),
                                onContextMenu: x,
                                children: [
                                    (0, s.jsxs)(es.D, {
                                        innerRef: j,
                                        className: nr.rb,
                                        tabIndex: G,
                                        ...R,
                                        onClick: E,
                                        "aria-label": em.intl.formatToPlainString(em.t.y5l3J2, { categoryName: C }),
                                        "aria-expanded": !f,
                                        focusProps: { enabled: !1 },
                                        children: [
                                            (0, s.jsx)(ne.A, {
                                                className: nr.UU,
                                                children: (0, s.jsx)(t1.A, { children: C }),
                                            }),
                                            null != _
                                                ? (0, s.jsx)("span", {
                                                      className: nr.qS,
                                                      children: (0, s.jsx)(el.m, {
                                                          asContainer: !0,
                                                          text: _.tooltip,
                                                          children: (0, s.jsx)(eL.E, {
                                                              type: { text: _.label },
                                                              variant: "default",
                                                          }),
                                                      }),
                                                  })
                                                : null,
                                            A
                                                ? null
                                                : (0, s.jsx)(t7.a, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: nr.Kk,
                                                  }),
                                        ],
                                    }),
                                    (0, s.jsx)("div", {
                                        onClick: na,
                                        className: nr.Y_,
                                        children:
                                            null != I
                                                ? (0, s.jsx)(no, { label: I.label, onClick: I.perform, tabIndex: G })
                                                : null,
                                    }),
                                ],
                            }),
                        }),
                        g,
                    ],
                });
            return null != a && null != l ? a(l(M)) : M;
        }),
    ),
    nc = r.memo(function (e) {
        let { name: t, onDismiss: n, className: i } = e;
        return (0, s.jsx)("li", {
            className: eK()(i, nr.fx),
            children: (0, s.jsxs)("div", {
                className: eK()(nr.Ki, nr._V),
                children: [
                    (0, s.jsx)("div", {
                        className: nr.rb,
                        children: (0, s.jsx)(ne.A, { className: nr.UU, children: (0, s.jsx)(t1.A, { children: t }) }),
                    }),
                    null != n
                        ? (0, s.jsx)(el.m, {
                              asContainer: !0,
                              text: em.intl.string(em.t["5qNmsU"]),
                              children: (0, s.jsx)(es.D, {
                                  className: nr.r,
                                  onClick: n,
                                  children: (0, s.jsx)(t6.a, { size: "md", color: "currentColor", className: nr.X8 }),
                              }),
                          })
                        : null,
                ],
            }),
        });
    }),
    nu = r.memo(function (e) {
        let { category: t } = e,
            n = (0, u.bG)([ns.A], () => ns.A.isVoiceCategoryCollapsed(t.guild.id)),
            i = r.useCallback(() => {
                var e, i;
                n
                    ? ((e = t.guild.id), tt.h.dispatch({ type: "VOICE_CATEGORY_EXPAND", guildId: e, expand: !0 }))
                    : ((i = t.guild.id), tt.h.dispatch({ type: "VOICE_CATEGORY_COLLAPSE", guildId: i, expand: !1 }));
            }, [t.guild.id, n]);
        return (0, s.jsx)("div", {
            className: nr.oA,
            children: (0, s.jsx)(t3.$, {
                variant: "secondary",
                fullWidth: !0,
                onClick: i,
                icon: t5.H,
                text: n ? em.intl.string(em.t["/eB9Bg"]) : em.intl.string(em.t.Q2gPWl),
            }),
        });
    }),
    nh = r.memo(function (e) {
        let { category: t, channel: n } = e,
            i = (0, u.bG)([ns.A], () => ns.A.isVoiceCategoryCollapsed(t.guild.id));
        return i || null == n || n.record.type === k.rbe.GUILD_CATEGORY
            ? i
                ? (0, s.jsx)("li", {
                      className: nr.fx,
                      children: (0, s.jsx)("div", {
                          className: eK()(nr.Ki, nr._V),
                          children: (0, s.jsx)(ne.A, {
                              className: nr.UU,
                              children: (0, s.jsx)(t1.A, { children: em.intl.string(em.t["V/u9Dy"]) }),
                          }),
                      }),
                  })
                : null
            : (0, s.jsx)("div", { style: { height: 16 } });
    }),
    nA = r.memo(function (e) {
        let { channel: t } = e,
            n = (0, t8.Ay)(t);
        return (0, s.jsx)("li", {
            className: nr.fx,
            children: (0, s.jsx)("div", {
                className: eK()(nr.Ki, nr._V),
                children: (0, s.jsx)(ne.A, { className: nr.UU, children: (0, s.jsx)(t1.A, { children: n }) }),
            }),
        });
    });
var ng = n(728321),
    nm = n(244083);
let nf = { origin: { x: -36, y: 7 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } };
var np = n(906659);
let nC = r.memo(function (e) {
    let {
            sectionIndex: t,
            guild: n,
            guildChannels: i,
            guildChannelsVersion: l,
            selectedChannelId: a,
            disableManageChannels: o,
        } = e,
        d = r.useCallback(() => {
            let e = i.getCategoryFromSection(i.recentsSectionNumber);
            if (null == e) return;
            let t = null,
                l = e.getShownChannelAndThreadIds();
            (null != a && l.includes(a) && (t = (0, ek.xb)(i)), (0, ek.DD)(n.id, l, t));
        }, [n.id, a, i, l]),
        { density: c } = (0, C.wR)(),
        u = "compact" === c ? 8 : 12;
    switch (t) {
        case tG.PU:
            return (0, s.jsx)("div", { style: { height: u } });
        case tG.bK:
            if (n.features.has(k.GuildFeatures.HUB)) return null;
            return (0, s.jsx)("div", { style: { height: u } });
        case tG.HP:
            return (0, s.jsx)(nc, { name: em.intl.string(em.t.mlPMCy) });
        case i.recentsSectionNumber:
            return (0, s.jsx)(nc, { name: em.intl.string(em.t.gKcrqM), onDismiss: d });
        case i.voiceChannelsSectionNumber: {
            let e = i.getCategoryFromSection(i.voiceChannelsSectionNumber);
            if (null == e || e.isEmpty()) return null;
            let n = i.getChannelFromSectionRow(t, 0)?.channel;
            return (0, s.jsxs)(r.Fragment, {
                children: [(0, s.jsx)("div", { className: np.ts }), (0, s.jsx)(nh, { category: e, channel: n })],
            });
        }
        case tG.TF: {
            let e = i.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, s.jsx)(nd, {
                channel: e.record,
                position: e.position,
                disableManageChannels: o,
                children: (0, s.jsx)(ng.A, {
                    inlineSpecs: nf,
                    arrowAlignment: nm.oN.TOP,
                    tutorialId: "organize-by-topic",
                    position: "right",
                }),
            });
        }
        default: {
            let e = i.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, s.jsx)(nd, { channel: e.record, position: e.position, disableManageChannels: o });
        }
    }
});
var nE = n(104171),
    nx = n(186369),
    nN = n(970812),
    n_ = n(147036);
function nS(e, t, n) {
    return {
        hasDivider:
            !(function (e, t) {
                if (t === tG.PU) {
                    let t = e.getGuildActionSection().getRows();
                    return (
                        (1 === t.length && t[0] === t0.n.GUILD_PREMIUM_PROGRESS_BAR) ||
                        e.getGuildActionSection().isEmpty()
                    );
                }
                return 0 === e.getSections(!1)[t];
            })(e, n) &&
            (n === tG.PU ||
                ((0, v.ai)(e.id)
                    ? n !== e.getSections(!1).length - 1
                    : n === tG.HP ||
                      (!!t && n !== tG.bK && (n === e.recentsSectionNumber || (e.voiceChannelsSectionNumber, !1))))),
        canHaveVoiceSummary:
            n !== tG.PU &&
            n !== tG.HP &&
            n !== tG.bK &&
            n !== e.recentsSectionNumber &&
            n !== e.voiceChannelsSectionNumber,
    };
}
let nI = r.memo(function (e) {
        let { guildChannels: t, guildChannelsVersion: n } = e,
            i = r.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
        return null == i ? null : (0, s.jsx)(nu, { category: i });
    }),
    nb = r.memo(function (e) {
        let {
                sectionIndex: t,
                guildChannels: n,
                guildChannelsVersion: i,
                voiceStates: l,
                guildId: a,
                selectedChannelId: o,
                selectedVoiceChannelId: d,
                optInEnabled: c,
            } = e,
            { hasDivider: h, canHaveVoiceSummary: A } = r.useMemo(() => nS(n, c, t), [n, c, t, i]),
            g = r.useMemo(() => (t === tG.PU ? null : n.getCategoryFromSection(t)), [n, t, i]),
            m = (0, M.jN)(a),
            { enableWaveformIcon: f } = (0, nx.b)(a, "ChannelListSectionFooter"),
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
                () => (0, n_.fK)({ channels: p, selectedChannelId: o, selectedVoiceChannelId: d, voiceStates: l }),
                [p, o, d, l],
            );
        if (t === n.voiceChannelsSectionNumber) return (0, s.jsx)(nI, { guildChannels: n, guildChannelsVersion: i });
        let E = h ? (0, s.jsx)("div", { className: np.ts }) : null;
        return A && 0 !== C.length
            ? (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)("div", {
                          className: np.qz,
                          children: (0, s.jsx)(nE.Ay, {
                              renderIcon: !0,
                              users: C,
                              max: 8,
                              showUserPopout: !0,
                              guildId: a,
                              renderLeadingIcon: f
                                  ? (e) => (0, s.jsx)(nN.A, { color: "currentColor", className: eK()(e, ep.Gj) })
                                  : void 0,
                          }),
                      }),
                      E,
                  ],
              })
            : E;
    });
var nG = n(625903),
    nR = n(283973),
    nj = n(933832),
    nv = n(435183),
    ny = n(698441),
    nM = n(855687),
    nT = n(816662),
    nL = n(446600),
    nU = n(616356);
function nD(e, t, n) {
    return null != t && !!t && !F(n, e.type);
}
function nO(e, t) {
    return null == t ? ep.fx : e > t ? ep.mU : ep.TR;
}
function nP(e) {
    let { channel: t, disableManageChannels: n, tabIndex: i, forceShowButtons: l, hasChannelInfo: r = !1 } = e;
    return (0, u.bG)(
        [P.A, V.A],
        () =>
            n ||
            (0, v.ai)(V.A.getGuildId()) ||
            (!P.A.can(k.xBc.MANAGE_CHANNELS, t) &&
                !P.A.can(k.xBc.MANAGE_ROLES, t) &&
                !P.A.can(k.xBc.MANAGE_WEBHOOKS, t)) ||
            ((0, H.tr)(t.type) && !P.A.can(k.xBc.VIEW_CHANNEL, t)) ||
            (t.isGuildVocal() && !P.A.can(k.xBc.CONNECT, t)) ||
            !H.bk.has(t.type) ||
            t.isModeratorReportChannel(),
    )
        ? null
        : (0, s.jsx)(el.m, {
              asContainer: !0,
              text: em.intl.string(em.t["3gUsJb"]),
              children: (0, s.jsx)(es.D, {
                  className: eK()(ep.Xs, l ? ep.Tf : void 0, r ? ep.bw : ep.UI),
                  onClick: function () {
                      nv.Ay.open(t.id);
                  },
                  tabIndex: i,
                  "aria-label": em.intl.string(em.t["3gUsJb"]),
                  children: (0, s.jsx)(nG.SettingsIcon, { size: "xs", color: "currentColor", className: ep.gE }),
              }),
          });
}
function nV(e) {
    let {
            channel: t,
            isDefaultChannel: i = !1,
            locked: l,
            tabIndex: a,
            forceShowButtons: o,
            hasChannelInfo: d = !1,
        } = e,
        c = (0, u.bG)([O.A], () => O.A.getGuild(t.getGuildId())),
        h = (0, u.bG)([nL.A], () => nL.A.getStageInstanceByChannel(t.id), [t.id]),
        A = (0, u.bG)([ny.Ay], () => ny.Ay.getActiveEventByChannel(t.id), [t.id]),
        g = (0, u.bG)([P.A], () => (0, nM.K)(P.A, c, t, h)),
        m = (0, u.bG)([], () =>
            t?.type === k.rbe.GUILD_VOICE ? em.intl.string(em.t["EE+P0H"]) : em.intl.string(em.t["0jeAXt"]),
        ),
        f = r.useRef(null);
    if (l || !g || t.isModeratorReportChannel() || t.isThread()) return null;
    let p = (0, s.jsx)(nR.R, { size: "xs", className: ep.gE, "aria-hidden": !0, color: "currentColor" });
    return (
        i &&
            (p = (0, s.jsx)(ng.A, {
                childRef: f,
                tutorialId: "instant-invite",
                position: "left",
                children: (0, s.jsx)("div", { ref: f, children: p }),
            })),
        (0, s.jsx)(el.m, {
            asContainer: !0,
            text: m,
            children: (0, s.jsx)(es.D, {
                className: eK()(ep.Xs, o ? ep.Tf : void 0, d ? ep.bw : ep.UI),
                onClick: function () {
                    if (null != c) {
                        let e = nU.A.getAllActiveStreams().filter(
                            (e) => e.state !== k.XYD.ENDED && e.channelId === t.id,
                        );
                        (0, S.openModalLazy)(async () => {
                            let { default: i } = await Promise.all([
                                n.e("683621"),
                                n.e("711162"),
                                n.e("159957"),
                                n.e("728136"),
                                n.e("216084"),
                                n.e("284819"),
                            ]).then(n.bind(n, 405342));
                            return (n) =>
                                (0, s.jsx)(i, {
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
function nw(e) {
    let { channel: t } = e;
    return (0, s.jsx)(el.m, {
        asContainer: !0,
        text: em.intl.string(em.t["ROh4T+"]),
        children: (0, s.jsx)(es.D, {
            className: ep.Xs,
            onClick: function () {
                (0, nT.Ol)(t.guild_id, t.id);
            },
            "aria-label": em.intl.string(em.t["ROh4T+"]),
            children: (0, s.jsx)(er.P, { size: "xs", color: "currentColor", className: ep.gE }),
        }),
    });
}
function nH(e) {
    let { channel: t } = e;
    return (0, s.jsx)(el.m, {
        asContainer: !0,
        text: em.intl.string(em.t["N2c/Un"]),
        children: (0, s.jsx)(es.D, {
            className: ep.Xs,
            onClick: function () {
                (0, nT.jA)(t.guild_id, t.id, !0, { section: k.JJy.CHANNEL_LIST });
            },
            "aria-label": em.intl.string(em.t["N2c/Un"]),
            children: (0, s.jsx)(nj.CheckmarkLargeIcon, { size: "xs", color: "currentColor", className: ep.gE }),
        }),
    });
}
class nB extends r.PureComponent {
    static defaultProps = { isDefaultChannel: !1 };
    renderEditButton() {
        return (0, s.jsx)(nP, { ...this.props });
    }
    renderInviteButton() {
        return (0, s.jsx)(nV, { ...this.props });
    }
    renderRemoveSuggestionButton() {
        return (0, s.jsx)(nw, { ...this.props });
    }
    renderAcceptSuggestionButton() {
        return (0, s.jsx)(nH, { ...this.props });
    }
    getClassName() {
        let { position: e, sortingPosition: t } = this.props;
        return nO(e, t);
    }
    isDisabled() {
        let { channel: e, sorting: t, sortingType: n } = this.props;
        return nD(e, t, n);
    }
}
var nk = n(166444),
    nF = n(790782);
let nK = $(function (e) {
    let {
            guild: t,
            selectedChannelId: i,
            position: l,
            disableManageChannels: a,
            sorting: o,
            sortingType: d,
            sortingPosition: c,
            connectChannelDragSource: h,
            connectChannelDropTarget: A,
            tabIndex: g,
        } = e,
        m = (0, u.bG)([L.A, D.Ay], () => {
            let e = D.Ay.getDirectoryChannelIds(t.id);
            return 0 === e.length ? null : L.A.getChannel(e[0]);
        }),
        f = (0, u.bG)([L.A], () => L.A.getChannel(m?.parent_id)),
        p = i === m?.id,
        C = (0, t8.Ay)(m),
        E = (0, u.bG)([P.A], () =>
            null != f ? P.A.can(k.xBc.MANAGE_CHANNELS, f) : null != t && P.A.can(k.xBc.MANAGE_CHANNELS, t),
        ),
        x = r.useCallback(
            (e) => {
                null != m &&
                    (0, e8.L3)(e, async () => {
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
    let N = nO(l, c),
        _ = nD(m, o, d),
        S = (0, s.jsx)("div", {
            className: eK()(N, { [ep.r9]: _, [ep.wH]: p }),
            "data-dnd-name": C,
            children: (0, s.jsxs)(nk.Ay, {
                className: ep.Ki,
                channel: m,
                guild: t,
                selected: p,
                onContextMenu: x,
                forceInteractable: !0,
                resolvedUnreadSetting: nF.e.ONLY_MENTIONS,
                children: [
                    (0, s.jsx)(nV, { channel: m, tabIndex: g }),
                    (0, s.jsx)(nP, { channel: m, disableManageChannels: a, tabIndex: g }),
                ],
            }),
        });
    return (E && (S = A(h(S))), S);
});
var nz = n(34188),
    nW = n(733391),
    nY = n(832163),
    nX = n(831024),
    nq = n(44724),
    nZ = n(849134),
    nJ = n(770178),
    n$ = n(307076);
let nQ = Math.ceil(Math.sqrt(115200)),
    n0 = (nQ - 240) / 2,
    n1 = r.forwardRef(function (e, t) {
        let { children: n } = e,
            [i, l] = r.useState(-1),
            a = r.useCallback((e) => {
                l(e.contentRect.width);
            }, []),
            o = (0, nJ.w)(a, [], { fireOnMount: !0 }),
            [{ shineSpring: d }, c] = (0, e5.z)(() => ({
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
                            className: n$.q,
                            style: {
                                transform: d.to(
                                    (e) => `translateX(calc(${e * i}px + ${e * nQ}px)) translateY(-50%) rotate(45deg)`,
                                ),
                            },
                        }),
                    ),
                [n, i, d],
            );
        return (
            r.useImperativeHandle(t, () => ({ onMouseEnter: u, onMouseLeave: h }), [u, h]),
            (0, s.jsx)("div", {
                className: n$.i,
                onMouseEnter: u,
                onMouseLeave: h,
                onFocus: u,
                onBlur: h,
                ref: o,
                style: { "--custom-shine-dimensions": "240px", "--custom-shine-rotated-dimensions-delta": `${n0}px` },
                children: A,
            })
        );
    });
var n3 = n(371794),
    n2 = n(240248),
    n9 = n(998218),
    n7 = n(672812),
    n6 = n(427797);
let n5 = r.memo(function (e) {
    let { guild: t, selected: i } = e,
        l = r.useRef(null),
        a = r.useRef(null),
        o = (0, S.useHasAnyModalOpen)(),
        d = (0, u.bG)([eN.A], () => eN.A.hasLayers()),
        c = (0, eE.xr)((e) => e.fullScreenLayers.length > 0);
    r.useEffect(() => {
        (0, nW.Kh)(t.id);
    }, [t.id]);
    let A = (0, u.bG)([nY.A], () => nY.A.getAnnouncement(t.id)),
        g = A?.state === "success" ? A.announcement : void 0,
        [m, f] = (0, ed.x_)(ei.M.GAME_SHOP_NEW_BADGE, t.id, g?.id ?? "", void 0, !0),
        p = m === ei.M.GAME_SHOP_NEW_BADGE && null != g,
        C = (0, t$.nY)(t.id),
        E = (0, nX.u)({ surface: "storefront_badge", applicationId: C }),
        x = null;
    (p && (x = em.intl.string(em.t.y2b7CA)), null != E && (x = E.text));
    let [N, _] = (0, ed.x_)(ei.M.GAME_SHOP_NEW_DROP_POPOVER, t.id, g?.id ?? ""),
        I = N === ei.M.GAME_SHOP_NEW_DROP_POPOVER && null != g;
    r.useEffect(() => {
        i && (p && f(eA.i.INDIRECT_ACTION), I && _(eA.i.INDIRECT_ACTION));
    }, [f, _, i, p, I]);
    let b = r.useCallback(() => {
            (f(eA.i.TAKE_ACTION), _(eA.i.TAKE_ACTION));
            let e = (0, t$.mq)(t.id),
                n = nY.A.getStorefrontState(e)?.activePage ?? 0;
            (0, eu.pX)(k.BVt.CHANNELS_GAME_SHOP(t.id, n));
        }, [t.id, f, _]),
        G = r.useCallback(() => {
            (0, nq.X)({ guildId: t.id, forceFetch: I });
        }, [t.id, I]),
        R = r.useCallback(() => {
            _(eA.i.USER_DISMISS);
        }, [_]),
        j = r.useCallback(
            (e) => {
                null != t &&
                    (0, e8.L3)(e, async () => {
                        let { default: e } = await n.e("899523").then(n.bind(n, 41614));
                        return (n) => (0, s.jsx)(e, { ...n, guild: t });
                    });
            },
            [t],
        ),
        v = r.useCallback(() => {
            l.current?.onMouseEnter(null, 500);
        }, [l]),
        y = r.useCallback(
            (e) =>
                (0, s.jsx)(ec.G, {
                    background: (0, s.jsx)("div", { className: n6.D }),
                    innerClassName: n6.Z,
                    ref: a,
                    id: `game-shop-${t.id}`,
                    renderIcon: (e) =>
                        (0, s.jsx)(nz.U, {
                            size: "custom",
                            color: "currentColor",
                            width: 20,
                            height: 20,
                            className: e,
                        }),
                    text: (0, s.jsx)(e4.E, {
                        variant: "text-md/medium",
                        className: n7.UU,
                        children: em.intl.string(em.t.vyaWs7),
                    }),
                    selected: i,
                    onMouseDown: G,
                    onClick: b,
                    onContextMenu: j,
                    trailing: (0, s.jsxs)(s.Fragment, {
                        children: [
                            null != x && (0, s.jsx)(ea.Lp, { text: x, color: h.A.colors.BACKGROUND_BRAND.css }),
                            e,
                        ],
                    }),
                }),
            [t.id, i, G, b, j, x],
        ),
        M = r.useMemo(() => {
            if (null == g) return null;
            switch (g.type) {
                case "guild-application-announcement": {
                    let e =
                            null != g.assetId
                                ? n9.A.toURLSafe((0, n3.YE)(g.applicationId, g.assetId, 256, "webp"))
                                : void 0,
                        t =
                            null != g.backgroundImageAssetId
                                ? n9.A.toURLSafe((0, n3.YE)(g.applicationId, g.backgroundImageAssetId, 256, "webp"))
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
                    if ((0, n2.uJ)(e) && (0, n2.uJ)(t)) return null;
                    return {
                        graphicSource: (0, n2.uJ)(e) ? { type: "asset", src: t } : { type: "video", src: e },
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
                I && null != M
                    ? (0, s.jsx)(nZ.A, {
                          onActionClick: b,
                          onActionMouseDown: G,
                          onRender: v,
                          onRequestClose: R,
                          targetElementRef: a,
                          ...M,
                      })
                    : null,
            [I, M, b, G, v, R],
        );
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(n1, { ref: l, children: y }), !o && !d && !c && T()] });
});
var n4 = n(740426),
    n8 = n(826673),
    ie = n(591552),
    it = n(202776),
    ii = n(454058),
    il = n(573163);
function is(e) {
    let { guild: t, selected: i } = e,
        l = (0, it.A)(t),
        a = (0, n8.HX)(ei.M.CHANNEL_BROWSER_NEW_BADGE_NUX),
        o = (0, tv.yK)([ii.A], () =>
            Array.from(ii.A.getNewChannelIds(t.id)).filter((e) => ii.A.shouldIndicateNewChannel(t.id, e)),
        ),
        d = (0, tv.bG)([il.Ay], () => il.Ay.hasUnread(t.id, nF.P.GUILD_ONBOARDING_QUESTION)),
        c = o.length > tG.rR,
        u = (0, tv.bG)([ie.A, il.Ay], () => {
            let e = ie.A.lastFetchedAt(t.id),
                n = il.Ay.lastMessageId(t.id, nF.P.GUILD_ONBOARDING_QUESTION);
            if (null == n) return !1;
            let i = tC.default.extractTimestamp(n);
            return null != e && e > i;
        }),
        A = r.useCallback(() => {
            (0, eu.pX)(k.BVt.CHANNEL(t.id, l ? eh.VV.CUSTOMIZE_COMMUNITY : eh.VV.CHANNEL_BROWSER));
        }, [t.id, l]),
        g = r.useCallback(
            (e) => {
                (0, e8.L3)(e, async () => {
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
            i ||
            u ||
            (m = (0, s.jsx)(ea.Lp, {
                color: h.A.colors.BADGE_BACKGROUND_BRAND.css,
                text: em.intl.string(em.t.y2b7CA),
            })),
        (0, s.jsx)(ec.G, {
            id: `channels-${t.id}`,
            renderIcon: (e) => (0, s.jsx)(n4.k, { size: "md", color: "currentColor", className: e }),
            text: l ? em.intl.string(em.t.h9mGOP) : em.intl.string(em.t.et6wav),
            selected: i,
            onClick: A,
            onContextMenu: g,
            trailing: m,
        })
    );
}
var ir = n(855473);
function ia(e) {
    let { guild: t, selected: n } = e;
    return (0, s.jsx)(ec.G, {
        id: `home-tab-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(ir.Z, { size: "md", color: "currentColor", className: e }),
        text: em.intl.string(em.t.VbpLyU),
        selected: n,
        onClick: function () {
            (0, eu.pX)(k.BVt.CHANNEL(t.id, eh.VV.GUILD_HOME));
        },
    });
}
var io = n(297264),
    id = n(5373),
    ic = n(65995),
    iu = n(195702);
function ih(e, t) {
    return (0, s.jsx)(e4.E, { variant: "text-xs/bold", color: "text-default", children: e }, t);
}
let iA = r.memo(function (e) {
    let { guild: t } = e,
        n = (0, u.bG)([tO.h], () => tO.h.getNewMemberActions(t.id), [t.id]),
        i = (0, u.bG)([ic.A], () => ic.A.getCompletedActions(t.id)),
        l = r.useMemo(() => {
            if (null == n || null == i) return 0;
            let e = 0;
            return (
                n.forEach((t) => {
                    null != i[t.channelId] && e++;
                }),
                e
            );
        }, [i, n]),
        a = null == n ? 0 : n.length,
        o = (0, d.rm)(`progress-bar-${t.id}`);
    return (0, s.jsxs)("li", {
        children: [
            (0, s.jsxs)(es.D, {
                ...o,
                role: "button",
                focusProps: { offset: { right: 4 } },
                className: iu.G9,
                onClick: function () {
                    (0, eu.pX)(k.BVt.CHANNEL(t.id, eh.VV.GUILD_HOME));
                },
                children: [
                    (0, s.jsxs)("div", {
                        className: iu.A1,
                        children: [
                            (0, s.jsx)(io.D, { variant: "heading-sm/bold", children: em.intl.string(em.t.SnrR3x) }),
                            (0, s.jsxs)("div", {
                                className: iu.Ib,
                                children: [
                                    (0, s.jsx)(e4.E, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        className: iu.Cv,
                                        children: em.intl.format(em.t.eqZ1lW, {
                                            numberHook: ih,
                                            total: a.toString(),
                                            completed: l.toString(),
                                        }),
                                    }),
                                    (0, s.jsx)(ts.A, {
                                        className: iu.UE,
                                        width: 16,
                                        height: 16,
                                        direction: ts.A.Directions.RIGHT,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, s.jsx)(id.i, {
                        className: iu.hr,
                        foregroundGradientColor: [
                            h.A.unsafe_rawColors.GREEN_300.css,
                            h.A.unsafe_rawColors.GREEN_230.css,
                        ],
                        percent: (l / a) * 100 + 3,
                        animate: !0,
                    }),
                ],
            }),
            (0, s.jsx)("div", { role: "separator", className: iu.yF }),
        ],
    });
});
var ig = n(581925);
function im(e) {
    let { guild: t, selected: n } = e;
    return (0, s.jsx)(ec.G, {
        id: `official-messages-page-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(ig.L, { size: "md", color: "currentColor", className: e }),
        text: em.intl.string(em.t.xHEzFh),
        selected: n,
        onClick: function () {
            (0, eu.pX)(k.BVt.CHANNEL(t.id, eh.VV.GUILD_OFFICIAL_MESSAGES));
        },
    });
}
var ip = n(590251),
    iC = n(413125),
    iE = n(411392);
let ix = r.memo(function (e) {
    let { guild: t } = e,
        i = (0, u.bG)([D.Ay], () => D.Ay.getDefaultChannel(t.id), [t.id]),
        { steps: l } = (0, iC.c)(i, t),
        a = l.length,
        o = l.filter((e) => e.completed).length,
        c = l.find((e) => !e.completed),
        A = (0, d.rm)(`setup-progress-${t.id}`),
        g = a > 0 && null == c;
    return (r.useEffect(() => {
        var e;
        g &&
            ((e = t.id),
            tB.isComplete(e) || tt.h.dispatch({ type: "SERVER_ONBOARDING_SETUP_PROGRESS_COMPLETE", guildId: e }));
    }, [t.id, g]),
    null == c)
        ? null
        : (0, s.jsxs)("li", {
              children: [
                  (0, s.jsxs)(es.D, {
                      ...A,
                      role: "button",
                      className: iE.nM,
                      onClick: function () {
                          var e;
                          ((e = t.id),
                              (0, S.openModalLazy)(async () => {
                                  let { default: t } = await Promise.all([
                                      n.e("883221"),
                                      n.e("457866"),
                                      n.e("270591"),
                                      n.e("149360"),
                                  ]).then(n.bind(n, 49843));
                                  return (n) => (0, s.jsx)(t, { guildId: e, ...n });
                              }));
                      },
                      children: [
                          (0, s.jsx)("div", {
                              className: iE.Ap,
                              children: (0, s.jsx)(ip.a, {
                                  percent: (o / a) * 100,
                                  colorOverride: h.A.colors.STATUS_POSITIVE.css,
                              }),
                          }),
                          (0, s.jsxs)("div", {
                              className: iE.FS,
                              children: [
                                  (0, s.jsx)(io.D, {
                                      variant: "heading-sm/bold",
                                      children: em.intl.string(em.t.o3HK3d),
                                  }),
                                  (0, s.jsx)(e4.E, {
                                      variant: "text-xs/medium",
                                      color: "text-muted",
                                      className: iE.VA,
                                      children: em.intl.formatToPlainString(em.t.zhHW5c, {
                                          currStep: o + 1,
                                          total: a,
                                          step: c.title,
                                      }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, s.jsx)("div", { role: "separator", className: iE.yF }),
              ],
          });
});
var iN = n(514179);
function i_(e) {
    let { guild: t, selected: i } = e;
    return (0, s.jsx)(ec.G, {
        id: `subscriptions-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(iN.A, { className: e }),
        text: em.intl.string(em.t["KzCF/6"]),
        selected: i,
        onClick: function () {
            (0, eu.pX)(k.BVt.CHANNEL(t.id, eh.VV.ROLE_SUBSCRIPTIONS));
        },
        onContextMenu: function (e) {
            null != t &&
                (0, e8.L3)(e, async () => {
                    let { default: e } = await n.e("571911").then(n.bind(n, 978554));
                    return (n) => (0, s.jsx)(e, { ...n, guild: t });
                });
        },
    });
}
var iS = n(506774),
    iI = n(95561),
    ib = n(289397),
    iG = n(486418),
    iR = n(575926),
    ij = n(440293),
    iv = n(174459),
    iy = n(634654),
    iM = n(888918);
function iT(e) {
    let { guildId: t, selected: n, handleClick: i } = e,
        l = (0, ij.w)(t),
        r = (0, tv.bG)([O.A], () => O.A.getGuild(t)),
        a = r?.features.has(k.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !0,
        o = "false" === iS.w.get(iy.bJ, "false"),
        d = (0, tv.bG)([Q.Ay], () => Q.Ay.useReducedMotion);
    return (0, s.jsx)(ec.G, {
        id: `shop-${t}`,
        className: eK()(iM.A2, { [iM.wH]: n, [iM.ST]: o }),
        innerClassName: iM.LE,
        renderIcon: (e) => (0, s.jsx)(iR.h, { width: 20, height: 20, className: eK()([e, iM.sV]) }),
        text: em.intl.string(em.t.al5EXL),
        selected: n,
        onClick: i,
        trailing: (0, s.jsxs)("div", {
            className: iM.ai,
            children: [
                d
                    ? (0, s.jsx)(ea.Lp, {
                          color: h.A.unsafe_rawColors.BRAND_260.css,
                          text: em.intl.string(em.t.y2b7CA),
                          className: iM.Ad,
                      })
                    : (0, s.jsx)("img", {
                          src: (0, ib.n)("server_products/storefront/money.gif"),
                          className: iM.TG,
                          alt: "",
                      }),
                n &&
                    (0, s.jsx)(es.D, {
                        className: iM.b,
                        onClick: function (e) {
                            (e.stopPropagation(),
                                (0, n8.Dr)(ei.M.SERVER_SHOP_PHANTOM_PREVIEW),
                                iv.default.track(k.HAw.GUILD_SHOP_PREVIEW_CLICK, {
                                    ...(0, iI.H$)(t),
                                    action_taken: iy.hN.DISMISS_CHANNEL_ROW,
                                }),
                                (l && a) || (0, eu.bG)(k.BVt.CHANNEL(t, D.Ay.getDefaultChannel(t)?.id)));
                        },
                        "aria-label": em.intl.string(em.t.cpT0Cq),
                        children: (0, s.jsx)(t6.a, { size: "xs", color: "currentColor" }),
                    }),
            ],
        }),
    });
}
function iL(e) {
    let { guild: t, selected: i } = e;
    function l() {
        (iS.w.set(iy.bJ, "true"), (0, eu.pX)(k.BVt.CHANNEL(t.id, eh.VV.GUILD_SHOP)));
    }
    return (0, iG.P)(t)
        ? (0, s.jsx)(iT, { guildId: t.id, selected: i, handleClick: l })
        : (0, s.jsx)(ec.G, {
              id: `shop-${t.id}`,
              renderIcon: (e) => (0, s.jsx)(iR.h, { width: 20, height: 20, className: e }),
              text: em.intl.string(em.t.al5EXL),
              selected: i,
              onClick: l,
              onContextMenu: function (e) {
                  null != t &&
                      (0, e8.L3)(e, async () => {
                          let { default: e } = await n.e("852565").then(n.bind(n, 345332));
                          return (n) => (0, s.jsx)(e, { ...n, guild: t });
                      });
              },
          });
}
var iU = n(308528),
    iD = n(534890),
    iO = n(262763),
    iP = n(499211),
    iV = n(406704),
    iw = n(747926),
    iH = n(977997),
    iB = n(807632),
    ik = n(37411);
function iF(e) {
    let { thread: t, tabIndex: n } = e,
        i = (0, iB.YG)(t),
        l = (0, iB.IO)(t),
        r = (0, iV._M)(t);
    return i && l && r ? (0, s.jsx)(iK, { thread: t, tabIndex: n }) : null;
}
function iK(e) {
    let { thread: t, tabIndex: n } = e,
        i = (0, u.bG)([iH.A], () => iH.A.isInChannel(t.id), [t.id]),
        { needSubscriptionToAccess: l } = (0, iP.A)(t.id),
        a = r.useCallback(() => {
            iO.A.handleVoiceConnect({ channel: t, connected: i, needSubscriptionToAccess: l, locked: !1 });
        }, [t, i, l]),
        o = r.useCallback(() => {
            (0, iw.JA)(t, !0, ik.H9.CHANNEL_LIST);
        }, [t]);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(el.m, {
                asContainer: !0,
                text: em.intl.string(em.t["96ANUN"]),
                children: (0, s.jsx)(es.D, {
                    className: ep.Xs,
                    onClick: a,
                    tabIndex: n,
                    "aria-label": em.intl.string(em.t["96ANUN"]),
                    children: (0, s.jsx)(t5.H, { size: "xs", color: "currentColor", className: ep.gE }),
                }),
            }),
            (0, s.jsx)(el.m, {
                asContainer: !0,
                text: em.intl.string(em.t.ZXxLQg),
                children: (0, s.jsx)(es.D, {
                    className: ep.Xs,
                    onClick: o,
                    tabIndex: n,
                    "aria-label": em.intl.string(em.t.ZXxLQg),
                    children: (0, s.jsx)(iD.ChatIcon, { size: "xs", color: "currentColor", className: ep.gE }),
                }),
            }),
        ],
    });
}
var iz = n(897898),
    iW = n(152007);
function iY(e) {
    return null != e && e > 0;
}
var iX = n(405018),
    iq = n(428689),
    iZ = n(525093);
function iJ(e) {
    let { total: t, users: n, videoLimit: i } = e;
    return (0, s.jsxs)("div", {
        className: iZ.iE,
        children: [
            (0, s.jsxs)(e4.E, {
                tag: "span",
                color: "text-subtle",
                variant: "text-xs/medium",
                className: eK()(iZ.VV, { [iZ.Ki]: i, [iZ.$G]: n >= 100 }),
                children: [
                    i ? (0, s.jsx)(iq.VideoIcon, { size: "md", color: "currentColor", className: iZ.LB }) : null,
                    n.toString().padStart(2, "0"),
                ],
            }),
            (0, s.jsx)(e4.E, {
                tag: "span",
                color: "text-subtle",
                variant: "text-xs/medium",
                className: eK()(iZ.X5, { [iZ.$G]: t >= 100 }),
                children: t.toString().padStart(2, "0"),
            }),
        ],
    });
}
function i$(e) {
    let { channel: t, video: n, userCount: i } = e,
        { limit: l } = (0, iX.A)(t),
        r = -1,
        a = !1;
    return (
        t.userLimit > 0 && (r = t.userLimit),
        n && l > 0 && ((a = r < 0 || l < r), (r = r > 0 ? Math.min(r, l) : l)),
        (0, s.jsx)(iJ, { users: i, total: r, videoLimit: a })
    );
}
var iQ = n(146630);
function i0(e) {
    let { mentionsCount: t, isMentionLowImportance: n } = e;
    return (0, s.jsx)("div", {
        className: iQ.R,
        "aria-hidden": !0,
        children: (0, s.jsx)(ea.hV, {
            count: t,
            color: n ? h.A.colors.BACKGROUND_MOD_STRONG.css : h.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
        }),
    });
}
var i1 = n(588224),
    i3 = n(447199);
function i2(e) {
    let { thread: t, countInVoice: n, hasVideo: i, mentionCount: l, isMentionLowImportance: r } = e,
        a = n > 0 && t.userLimit > 0,
        o = iY(l);
    return a || o
        ? (0, s.jsxs)("div", {
              className: ep.yW,
              children: [
                  a ? (0, s.jsx)(i$, { userCount: n, video: i, channel: t }) : null,
                  o ? (0, s.jsx)(i0, { mentionsCount: l, isMentionLowImportance: r }) : null,
              ],
          })
        : null;
}
function i9(e) {
    let { style: t, withGuildIcon: n, inverted: i } = e,
        l = { className: eK()(i3.GI, { [i3.a7]: n }, { [i3.BJ]: i }), style: t },
        { density: r } = (0, C.wR)();
    switch (r) {
        case "cozy":
            return (0, s.jsxs)("svg", {
                ...l,
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
                ...l,
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
                ...l,
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
let i7 = r.memo(function (e) {
        let { thread: t, isSelectedChannel: i, isSelectedVoice: l, isLast: a, withGuildIcon: o } = e,
            c = (0, u.bG)([tm.Ay], () => tm.Ay.getVoiceStatesForChannel(t), [t]),
            h = (0, u.bG)([iH.A], () => iH.A.hasVideo(t.id)),
            A = (0, t8.Ay)(t),
            {
                unread: g,
                mentionCount: m,
                isMentionLowImportance: f,
            } = (0, u.cf)([il.Ay], () => ({
                unread: il.Ay.hasUnread(t.id),
                mentionCount: il.Ay.getMentionCount(t.id),
                isMentionLowImportance: il.Ay.getIsMentionLowImportance(t.id),
            })),
            p = (0, u.bG)([iW.A], () => iW.A.isMuted(t.id)),
            C = r.useCallback(
                (e) => {
                    (0, iw.JA)(t, !e.shiftKey, ik.H9.CHANNEL_LIST);
                },
                [t],
            ),
            E = r.useCallback(() => {
                iU.A.preload(t.guild_id, t.id);
            }, [t.guild_id, t.id]),
            x = r.useCallback(
                (e) => {
                    (0, iz.A)(e, t);
                },
                [t],
            ),
            N = r.useCallback(
                (e) => {
                    let i = L.A.getChannel(t.id);
                    null != i &&
                        (0, e8.L3)(e, async () => {
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
                            return (t) => (0, s.jsx)(e, { ...t, channel: i });
                        });
                },
                [t.id],
            ),
            _ = null == c ? 0 : c.length,
            { role: S, ...I } = (0, d.rm)(t.id),
            b = r.useRef(null),
            G =
                m > 0
                    ? em.intl.formatToPlainString(em.t["ZL7+I6"], { channelName: A, mentionCount: m })
                    : g
                      ? em.intl.formatToPlainString(em.t.YlVvmc, { channelName: A })
                      : em.intl.formatToPlainString(em.t["0nZpiF"], { channelName: A });
        return (0, s.jsxs)("li", {
            role: S,
            className: eK()(ep.fx, { [ep.wH]: i }),
            children: [
                (0, s.jsx)(i9, { withGuildIcon: o }),
                a
                    ? null
                    : (0, s.jsx)(i9, {
                          withGuildIcon: o,
                          inverted: !0,
                          style: { transform: "rotateX(180deg) translateY(-9px)" },
                      }),
                (0, s.jsx)(t9.vN, {
                    focusTarget: b,
                    ringTarget: b,
                    offset: { top: 2, bottom: 2, right: 4 },
                    children: (0, s.jsxs)("div", {
                        className: eK()(ep.Ki, n7.iE, n7.ZS, {
                            [n7.J1]: i,
                            [n7.F4]: !i && p,
                            [n7.V2]: !p && !i && g,
                            [n7.lY]: o,
                        }),
                        onMouseDown: E,
                        onContextMenu: N,
                        children: [
                            !g || p || i ? null : (0, s.jsx)("div", { className: eK()(n7.gy, n7.WS) }),
                            (0, s.jsx)(es.D, {
                                ...I,
                                innerRef: b,
                                className: n7.nf,
                                onClick: C,
                                onAuxClick: x,
                                "aria-label": G,
                                focusProps: { enabled: !1 },
                                children: (0, s.jsxs)("div", {
                                    className: eK()(n7.Y5, n7.__invalid_threadMainContent),
                                    children: [
                                        (0, s.jsx)(e4.E, {
                                            variant: "text-sm/medium",
                                            color: "none",
                                            className: n7.UU,
                                            children: (0, s.jsx)(t1.A, { "aria-hidden": !0, children: A }),
                                        }),
                                        (0, s.jsxs)("div", {
                                            className: n7.Y_,
                                            onClick: nk.dG,
                                            onKeyDown: nk.dG,
                                            children: [
                                                (0, s.jsx)(i2, {
                                                    thread: t,
                                                    countInVoice: _,
                                                    hasVideo: h,
                                                    mentionCount: m,
                                                    isMentionLowImportance: f,
                                                }),
                                                (0, s.jsx)(iF, { thread: t, tabIndex: I.tabIndex }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                }),
                (0, s.jsx)(i1.A, {
                    channel: t,
                    collapsed: !l && 1 !== c.length,
                    collapsedMax: 6,
                    voiceStates: c,
                    isThread: !0,
                }),
            ],
        });
    }),
    i6 = r.memo(function (e) {
        let { channel: t, selectedChannel: n, selectedVoiceChannelId: i, sortedThreadIds: l, withGuildIcon: r } = e,
            a = (0, t8.Ay)(t),
            { density: o } = (0, C.wR)(),
            d = (0, u.yK)([L.A], () => l.map((e) => L.A.getChannel(e)).filter(tf.Vq), [l]),
            c = (0, u.bG)([tm.Ay], () => {
                let e = d[d.length - 1];
                if (null == e) return 0;
                let t = tm.Ay.getVoiceStates(e.guild_id)[e.id];
                return null == t || 0 === t.length ? 0 : i !== e.id ? 40 : 32 * t.length + 8;
            });
        return (0, s.jsx)("li", {
            className: i3.kL,
            children: (0, s.jsxs)("ul", {
                role: "group",
                "aria-label": em.intl.formatToPlainString(em.t.EiyIi6, { channelName: a }),
                children: [
                    (0, s.jsx)("div", {
                        className: eK()(i3.eh, { [i3.ET]: r }),
                        style: { bottom: ("cozy" === o ? 28 : 24) + c },
                    }),
                    d.map((e, t) =>
                        (0, s.jsx)(
                            i7,
                            {
                                thread: e,
                                isSelectedChannel: n?.id === e.id,
                                isSelectedVoice: i === e.id,
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
var i5 = n(922016),
    i4 = n(367513),
    i8 = n(296216),
    le = n(963027),
    lt = n(202384),
    ln = n(51758),
    li = n(139033),
    ll = n(305866),
    ls = n(123292),
    lr = n(830215),
    la = n(315982),
    lo = n(480900),
    ld = n(557722),
    lc = n(834942),
    lu = n(287809),
    lh = n(53516),
    lA = n(648580),
    lg = (((i = {})[(i.VOICE = 0)] = "VOICE"), i);
let lm = function (e) {
    let { type: t, guildId: i, closePopout: l } = e,
        r = (0, en.GV)(),
        a = (0, u.bG)([lc.A], () => lc.A.getCheck(i), [i]),
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
                        notPhoneVerified: i,
                        notEmailVerified: l,
                        newMember: s,
                        newAccount: r,
                        missingVerificationRole: a,
                        verificationRole: o,
                    } = t;
                return n
                    ? { header: e, body: em.intl.string(em.t.IRxUlG), buttonText: em.intl.string(em.t.fiNVin) }
                    : i
                      ? { header: e, body: em.intl.string(em.t.vW8iUF), buttonText: em.intl.string(em.t["50gfOv"]) }
                      : l
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
        : (0, s.jsxs)(ll.l, {
              className: lA.kL,
              "aria-labelledby": r,
              children: [
                  (0, s.jsx)("img", { alt: "", className: lA.Sl, src: n(303528) }),
                  (0, s.jsxs)("div", {
                      className: lA.Qs,
                      children: [
                          (0, s.jsx)(io.D, { variant: "heading-md/semibold", id: r, children: g }),
                          (0, s.jsx)(e4.E, { color: "text-default", variant: "text-sm/normal", children: m }),
                          (0, s.jsxs)("div", {
                              className: lA.UD,
                              children: [
                                  null != f
                                      ? (0, s.jsx)("div", {
                                            "data-button-hoisted-classname-wrapper": !0,
                                            className: lA.FS,
                                            children: (0, s.jsx)(t3.$, {
                                                variant: "primary",
                                                text: f,
                                                onClick: function () {
                                                    (o
                                                        ? la.R()
                                                        : c
                                                          ? (0, S.openModalLazy)(
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
                                                                            reason: ld.d.GUILD_PHONE_REQUIRED,
                                                                            ...t,
                                                                        });
                                                                },
                                                                { modalKey: lh.V },
                                                            )
                                                          : d
                                                            ? (lr.A.verifyResend(),
                                                              (0, li.A)({
                                                                  title: em.intl.string(em.t.LykQYk),
                                                                  subtitle: em.intl.format(em.t.azKEPy, {
                                                                      email: lu.default.getCurrentUser()?.email,
                                                                  }),
                                                              }))
                                                            : h && null != A && (0, lo.b)(A, i),
                                                        l());
                                                },
                                            }),
                                        })
                                      : null,
                                  o || c || d
                                      ? (0, s.jsx)(ls.Q, {
                                            onClick: l,
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
var lf = n(824865),
    lp = n(378570),
    lC = n(790535),
    lE = n(113783),
    lx = n(96566),
    lN = n(280450),
    l_ = n(312006),
    lS = n(505543),
    lI = n(994500),
    lb = n(685399),
    lG = n(475889),
    lR = n(693879),
    lj = n(435470),
    lv = n(35275),
    ly = n(300596);
function lM(e) {
    let { locked: t } = e;
    return (0, s.jsx)("div", {
        className: eK()(ep.Xs, ly.U),
        children: (0, s.jsx)(lv.A, {
            className: ep.gE,
            color: t ? h.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css : void 0,
        }),
    });
}
var lT = n(863005),
    lL = n(669715),
    lU = n(769015),
    lD = n(217223);
function lO(e) {
    let { className: t, embeddedApps: n, muted: i } = e;
    if (n.length <= 0) return null;
    {
        if (1 === n.length)
            return (0, s.jsx)("div", {
                className: eK()(lD.kL, t, i && lD.F4),
                children: (0, s.jsx)(lU.A, { game: n[0].application, className: lD.wK }),
            });
        let e = n.length - 1;
        return (0, s.jsxs)("div", {
            className: eK()(lD.kL, t, i && lD.F4),
            children: [
                (0, s.jsx)(lU.A, { game: n[0].application, className: lD.wK }),
                2 === n.length
                    ? (0, s.jsx)(lU.A, { game: n[1].application, className: lD.wK })
                    : (0, s.jsx)(e4.E, {
                          className: lD.ju,
                          variant: "text-xs/bold",
                          color: "interactive-text-active",
                          children: `+${e}`,
                      }),
            ],
        });
    }
}
var lP = n(905695);
function lV(e) {
    let {
            channel: t,
            isChannelSelected: n,
            isChannelCollapsed: i,
            voiceStates: l,
            enableConnectedUserLimit: r,
            enableActivities: a,
            isSubscriptionGated: o,
            needSubscriptionToAccess: d,
            isNewChannel: c,
            muted: A,
            resolvedUnreadSetting: g,
        } = e,
        m = (0, u.bG)([il.Ay], () => il.Ay.getMentionCount(t.id)),
        f = (0, u.bG)([il.Ay], () => il.Ay.getIsMentionLowImportance(t.id)),
        p = (0, lb.Ay)(t),
        C = (0, u.bG)([P.A], () => !P.A.can(k.xBc.CONNECT, t)),
        E = (0, lG.H)(t),
        x = (0, u.bG)([iH.A], () => iH.A.hasVideo(t.id)),
        N = (0, lx.qT)(t.id) && t.isGuildStageVoice(),
        _ = (function (e) {
            let { channel: t, locked: n, video: i, selected: l } = e;
            return (
                (function (e) {
                    let { channel: t, video: n, considerMaxStageVoiceUserLimit: i = !0 } = e,
                        { limit: l } = (0, iX.A)(t),
                        s = -1;
                    return (t.userLimit > 0 && (s = t.userLimit),
                    n && l > 0 && (s = s > 0 ? Math.min(s, l) : l),
                    i && s === k.RCc)
                        ? 0
                        : s;
                })({ channel: t, video: i }) > 0 &&
                !n &&
                !l
            );
        })({ channel: t, locked: C, video: (x || N) && null == E, selected: n }),
        S = (0, u.bG)([lT.A], () => lT.A.getNewThreadCount(t.guild_id, t.id)),
        I = (0, lj.ed)(t.guild_id, t.id),
        b = (0, u.bG)([O.A], () => O.A.getGuild(t.guild_id)?.features.has(k.GuildFeatures.COMMUNITY) ?? !1);
    if (iY(m)) return (0, s.jsx)(i0, { mentionsCount: m, isMentionLowImportance: f });
    if (o) return (0, s.jsx)(lM, { locked: d });
    if (c)
        return (0, s.jsx)(ea.Lp, { text: em.intl.string(em.t.y2b7CA), color: h.A.colors.BADGE_BACKGROUND_BRAND.css });
    if (!A && g === nF.e.ALL_MESSAGES && t.isForumLikeChannel() && null != S && S > 0)
        return (0, s.jsx)(e4.E, {
            variant: "text-xs/semibold",
            color: "text-brand",
            className: lP.O,
            children: em.intl.format(em.t.GkAbqY, { count: (0, ea.Gu)(S) }),
        });
    if (!A && t.isForumLikeChannel() && null != I && I > 0)
        return (0, s.jsx)(e4.E, { variant: "text-xs/semibold", color: "text-muted", children: (0, ea.Gu)(I) });
    let G = l?.length ?? 0;
    return null != r && r && _
        ? (0, s.jsx)(i$, { userCount: G, video: x || N, channel: t })
        : i && (0, lL.t)(l) && b
          ? (0, s.jsx)(ea.Lp, { text: em.intl.string(em.t.dI3q4h), color: h.A.unsafe_rawColors.RED_400.css })
          : null != E
            ? (0, s.jsx)(lR.z, { textColor: "text-feedback-positive", entry: { start: E } })
            : null != a && a && p.length > 0
              ? (0, s.jsx)(lO, { embeddedApps: p, muted: A })
              : null;
}
var lw = n(714619);
class lH extends nB {
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
        return (0, n_.Pd)(e, iH.A, O.A);
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
                unverifiedAccount: i,
                isSuggestedSection: l,
                openChatOnClick: s,
            } = this.props,
            r = e.getGuildId();
        (null != r && (0, ln.V)(r) && (0, lt.Ze)(r),
            i && this.setState({ shouldShowGuildVerificationPopout: !0 }),
            t ||
                n ||
                e.isRoleSubscriptionTemplatePreviewChannel() ||
                (s ? i4.A.updateChatOpen(e.id, !0) : (0, lC.av)(e)),
            __OVERLAY__ || (0, lp.iN)(e.id, l ? { source: lf.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0));
    };
    handleClickChat = () => {
        let { channel: e, locked: t, isSuggestedSection: n } = this.props;
        __OVERLAY__ || t || (0, lp.iN)(e.id, n ? { source: lf.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            i = O.A.getGuild(t.getGuildId());
        null != i &&
            (0, e8.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("926132"),
                    n.e("146652"),
                    n.e("993103"),
                    n.e("393336"),
                    n.e("893190"),
                    n.e("391763"),
                    n.e("955557"),
                    n.e("474610"),
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
                return (n) => (0, s.jsx)(e, { ...n, channel: t, guild: i });
            });
    };
    renderVoiceUsers() {
        let { channel: e, collapsed: t, tabIndex: n, speakerVoiceStates: i, numAudience: l } = this.props;
        return (0, s.jsx)(i1.A, { channel: e, voiceStates: i, collapsed: t, tabIndex: n, numAudience: l });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        if (t)
            return (0, s.jsx)(lm, {
                type: lg.VOICE,
                guildId: e.guild_id,
                closePopout: this.closeGuildVerificationPopout,
            });
        throw Error("VoiceChannel.renderPopout: There must always be something to render");
    };
    renderOpenChatButton = () => {
        let { channel: e, locked: t, forceShowButtons: n } = this.props;
        if (!t)
            return (0, s.jsx)(el.m, {
                asContainer: !0,
                text: em.intl.string(em.t.ZXxLQg),
                children: (0, s.jsx)(es.D, {
                    className: eK()(ep.Xs, n ? ep.Tf : null),
                    onClick: () => {
                        (i4.A.updateChatOpen(e.id, !0), this.handleClickChat());
                    },
                    "aria-label": em.intl.string(em.t.ZXxLQg),
                    children: (0, s.jsx)(iD.ChatIcon, { size: "xs", color: "currentColor", className: ep.gE }),
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
        return null == e ? null : (0, s.jsx)(t1.A, { children: e });
    };
    render() {
        let {
                channel: e,
                selected: t,
                connected: n,
                locked: i,
                connectChannelDropTarget: l,
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
                className: eK()(this.getModeClass(), { [ep.r9]: this.isDisabled() }),
                "data-dnd-name": (0, t8.m1)(e, lu.default, lI.A),
                children: [
                    (0, s.jsx)(i5.Y, {
                        targetElementRef: this.channelItemRef,
                        position: "right",
                        renderPopout: this.renderPopout,
                        spacing: 17,
                        onRequestClose: this.closeGuildVerificationPopout,
                        shouldShow: C,
                        children: () =>
                            (0, s.jsx)(el.m, {
                                text: this.getTooltipText(),
                                children: (0, s.jsxs)(nk.Ay, {
                                    ref: this.channelItemRef,
                                    className: ep.Ki,
                                    iconClassName: eK()({ [lw.G]: null != u }),
                                    channel: e,
                                    selected: !p && t,
                                    connected: n,
                                    unread: n ? g : void 0,
                                    resolvedUnreadSetting: m,
                                    mentionCount: f,
                                    locked: i,
                                    onClick: () => {
                                        this.handleClick();
                                    },
                                    onContextMenu: (e) => {
                                        this.handleContextMenu(e);
                                    },
                                    connectDragPreview: o,
                                    subtitle: this.renderSubtitle(),
                                    isFavoriteSuggestion: p,
                                    "aria-label": (0, le.Ay)({
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
        return (c && (E = a(E)), d && (E = l(r(E))), E);
    }
}
let lB = $((0, i8.F)(lH));
function lk(e) {
    var t;
    let n,
        i,
        { guild: l, channel: r, disableSorting: a, isFavoriteCategory: o, collapsed: d, voiceStates: c } = e,
        h = (0, u.cf)([il.Ay], () => ({ unread: il.Ay.hasUnread(r.id), mentionCount: il.Ay.getMentionCount(r.id) })),
        A = (0, u.bG)([w.Ay], () => w.Ay.resolveUnreadSetting(r)),
        g = (0, u.cf)([L.A, lc.A, P.A], () => {
            let e = L.A.getChannel(r.parent_id),
                t = lc.A.getCheck(r.guild_id);
            return {
                canManageChannel: null != l && P.A.can(k.xBc.MANAGE_CHANNELS, r),
                canReorderChannel:
                    !0 !== a &&
                    ((0, v.ai)(l.id) ||
                        (null != e ? P.A.can(k.xBc.MANAGE_CHANNELS, e) : P.A.can(k.xBc.MANAGE_CHANNELS, l))),
                canMoveMembers: P.A.can(k.xBc.MOVE_MEMBERS, r),
                locked: !P.A.can(k.xBc.CONNECT, r),
                bypassLimit: P.A.can(k.xBc.MOVE_MEMBERS, r),
                unverifiedAccount: !t.canChat,
            };
        }),
        m = (0, u.bG)([T.A], () => T.A.isCollapsed(r.parent_id)),
        f =
            ((t = r.id),
            (n = (0, lS.A)(t)),
            (i = (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return (0, u.cf)(
                    [l_.Ay, lN.default],
                    () => {
                        let n = lN.default.getId();
                        return l_.Ay.getPermissionsForUser(n, e, t);
                    },
                    [e, t],
                );
            })(t, !0).moderator),
            !n && i ? 1 : 0),
        p = (0, u.bG)([nL.A], () => nL.A.getStageInstanceByChannel(r.id), [r.id]),
        C = (0, lE.zy)(r.id, tx.ip.AUDIENCE),
        { isSubscriptionGated: E, needSubscriptionToAccess: x } = (0, iP.A)(r.id),
        N = (0, u.bG)([w.Ay], () => w.Ay.isFavorite(l.id, r.id)),
        _ = (0, lx.xn)(r.id),
        S = lV({
            channel: r,
            isChannelSelected: !1,
            isChannelCollapsed: d,
            voiceStates: c,
            isSubscriptionGated: E,
            needSubscriptionToAccess: x,
            enableConnectedUserLimit: _ || (r.userLimit > 0 && r.userLimit < k.RCc),
        }),
        I = e.connected && null == S,
        b = l.features.has(k.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
    return (0, s.jsx)(lB, {
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
        openChatOnClick: b,
        channelInfo: S,
        resolvedUnreadSetting: A,
    });
}
function lF(e, t) {
    let n = t.getGuildId();
    if (null == n) throw Error("TextChannel, preloadChannel: Channel does not have a guildId");
    iU.A.preload(n, t.id);
}
let lK = $(
        class extends nB {
            handleContextMenu = (e) => {
                let { channel: t } = this.props,
                    i = O.A.getGuild(t.getGuildId());
                null != i &&
                    (0, e8.L3)(e, async () => {
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
                        return (n) => (0, s.jsx)(e, { ...n, channel: t, guild: i });
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
                        connectChannelDragSource: i,
                        connectDragPreview: l,
                        canReorderChannel: r,
                    } = this.props,
                    a = (0, s.jsx)("li", {
                        className: eK()(this.getClassName(), { [ep.r9]: this.isDisabled() }),
                        "data-dnd-name": (0, t8.m1)(e, lu.default, lI.A),
                        children: (0, s.jsxs)(nk.Ay, {
                            className: ep.Ki,
                            channel: e,
                            selected: t,
                            onClick: this.handleClick,
                            onMouseDown: lF,
                            onContextMenu: this.handleContextMenu,
                            connectDragPreview: r ? l : null,
                            "aria-label": (0, le.Ay)({ channel: e }),
                            resolvedUnreadSetting: nF.e.ONLY_MENTIONS,
                            children: [this.renderInviteButton(), this.renderEditButton()],
                        }),
                    });
                return r ? n(i(a)) : a;
            }
        },
    ),
    lz = r.memo(function (e) {
        let { channel: t, guild: n, disableSorting: i } = e,
            l = (0, u.cf)([L.A, P.A], () => {
                let e = L.A.getChannel(t.parent_id);
                return {
                    canManageChannel: P.A.can(k.xBc.MANAGE_CHANNELS, t),
                    canReorderChannel:
                        !0 !== i && null != e ? P.A.can(k.xBc.MANAGE_CHANNELS, e) : P.A.can(k.xBc.MANAGE_CHANNELS, n),
                };
            });
        return (0, s.jsx)(lK, { ...l, ...e });
    });
var lW = n(172218),
    lY = n(811024),
    lX = n(323073);
function lq(e) {
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
var lZ = n(3322),
    lJ = n(696451),
    l$ = n(763827),
    lQ = n(56059),
    l0 = n(163328),
    l1 = n(778712),
    l3 = n(730134),
    l2 = n(707539),
    l9 = n(486020),
    l7 = n(98098);
function l6(e) {
    let { channel: t } = e,
        i = (0, u.yK)([lT.A, il.Ay, P.A], () => {
            let e = lT.A.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
            return o()(lT.A.getActiveJoinedThreadsForParent(t.guild_id, t.id))
                .values()
                .map((e) => e.channel)
                .concat(o().values(lT.A.getActiveUnjoinedThreadsForParent(t.guild_id, t.id)))
                .filter((t) => !(t.id in e) && P.A.can(k.xBc.VIEW_CHANNEL, t))
                .sort((e, t) => {
                    let n = il.Ay.lastMessageId(e.id),
                        i = il.Ay.lastMessageId(t.id);
                    return tC.default.compare(n, i);
                })
                .reverse()
                .value();
        }),
        l = t.isForumLikeChannel() ? 5 : 3,
        a = t.isForumLikeChannel() ? lQ.b : l0.y;
    return (
        r.useEffect(() => {
            (0, l2.TE)();
        }, []),
        (0, s.jsxs)("div", {
            className: l7.SW,
            children: [
                (0, s.jsx)(e4.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: l7.DD,
                    children: t.isForumLikeChannel() ? em.intl.string(em.t.ioVdO2) : em.intl.string(em.t.VNYs2v),
                }),
                (0, s.jsxs)("div", {
                    className: l7.p_,
                    children: [
                        i
                            .slice(0, t.isForumLikeChannel() ? i.length : l)
                            .map((e) => (0, s.jsx)(l5, { thread: e }, e.id))
                            .filter((e) => r.isValidElement(e))
                            .slice(0, l),
                        (0, s.jsxs)(es.D, {
                            className: l7.nM,
                            onClick: function () {
                                t.isForumLikeChannel()
                                    ? (0, lp.iN)(t.id)
                                    : (0, S.openModalLazy)(async () => {
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
                                    className: l7.R4,
                                    children: (0, s.jsx)(a, { size: "custom", className: l7.Kk }),
                                }),
                                (0, s.jsx)("div", {
                                    className: l7.Pf,
                                    children: (0, s.jsx)(e4.E, {
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
function l5(e) {
    let { thread: t } = e,
        n = (0, u.bG)([lu.default], () => lu.default.getUser(t.ownerId)),
        i = (0, l2.JO)(t);
    return (0, s.jsxs)(es.D, {
        className: l7.nM,
        onClick: function (e) {
            (0, iw.JA)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, ik.H9.POPOUT);
        },
        children: [
            (0, s.jsx)("div", {
                className: l7.R4,
                children:
                    null == n
                        ? (0, s.jsx)("img", {
                              className: l7.my,
                              src: l9.Ay.getDefaultAvatarURL(void 0, void 0),
                              alt: "",
                          })
                        : (0, s.jsx)(l3.A, { className: l7.my, user: n, size: l1._3.SIZE_16 }),
            }),
            (0, s.jsxs)("div", {
                className: l7.Pf,
                children: [
                    (0, s.jsx)(e4.E, { className: l7.UU, variant: "text-sm/normal", color: "none", children: t.name }),
                    (0, s.jsx)(e4.E, { variant: "text-sm/normal", color: "text-muted", children: "\u2022" }),
                    (0, s.jsx)(e4.E, {
                        className: l7.vE,
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: (0, l2.aK)(i),
                    }),
                ],
            }),
        ],
    });
}
var l4 = n(138298),
    l8 = n(940382);
function se(e) {
    let { channel: t, isSuggestedSection: n } = e;
    return (0, s.jsx)(el.m, {
        asContainer: !0,
        text: em.intl.string(em.t.ZXxLQg),
        children: (0, s.jsx)(es.D, {
            className: ep.Xs,
            onClick: () => {
                (l4.A.openChannelAsSidebar({
                    guildId: t.getGuildId(),
                    channelId: t.id,
                    baseChannelId: t.id,
                    details: { type: l8.kk.CHAT },
                }),
                    (0, lp.iN)(t.id, n ? { source: lf.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0));
            },
            "aria-label": em.intl.string(em.t.ZXxLQg),
            children: (0, s.jsx)(iD.ChatIcon, { size: "xs", color: "currentColor", className: ep.gE }),
        }),
    });
}
var st = n(364522),
    sn = n(302959),
    si = n(35903),
    sl = n(970928),
    ss = n(427262),
    sr = n(641635);
let sa = nE.DN.SIZE_24;
function so(e) {
    let { activity: t, embeddedApp: n } = e,
        i = t?.assets,
        l = t?.application_id;
    if (null == i || (null == i.large_image && null == i.small_image)) {
        let e = l9.Ay.getApplicationIconURL({ id: n.application.id, icon: n.application.icon }),
            t = n.application.name;
        return (0, s.jsx)(el.m, {
            text: t,
            position: "top",
            asContainer: !0,
            children: (0, s.jsx)("img", { alt: t, src: e, className: sr.P3 }),
        });
    }
    let r = i.large_image ?? i.small_image;
    return null != r
        ? (0, s.jsx)("img", { alt: i.large_text ?? "", src: (0, sl.uD)(l, r, [128, 128]), className: sr.P3 })
        : null;
}
function sd(e) {
    let { activity: t, embeddedApp: n, channel: i } = e,
        l = Array.from(n.embeddedActivity.userIds),
        r = (0, u.yK)([lu.default], () => l.map((e) => lu.default.getUser(e)).filter(tf.Vq));
    return (0, s.jsx)("div", {
        className: sr.ec,
        children: (0, s.jsxs)("div", {
            className: sr.Wh,
            children: [
                (0, s.jsx)(so, { activity: t, embeddedApp: n }),
                (0, s.jsxs)("div", {
                    className: sr.X0,
                    children: [
                        (0, s.jsx)(io.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            className: sr.wx,
                            lineClamp: 1,
                            children: n.application.name,
                        }),
                        t?.details != null &&
                            "" !== t.details &&
                            (0, s.jsx)(e4.E, {
                                variant: "text-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.details,
                            }),
                        t?.state != null &&
                            "" !== t.state &&
                            (0, s.jsx)(e4.E, {
                                variant: "text-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.state,
                            }),
                        l.length > 0 &&
                            (0, s.jsx)(nE.Ay, {
                                className: sr.TN,
                                guildId: i.guild_id,
                                users: r,
                                size: sa,
                                max: 7,
                                renderUser: function (e) {
                                    if (null == e || e === nE.mt) return null;
                                    let t = ss.Ay.getName(e);
                                    return (0, s.jsx)(
                                        el.m,
                                        {
                                            asContainer: !0,
                                            text: t,
                                            position: "bottom",
                                            children: (0, s.jsx)("img", {
                                                src: e.getAvatarURL(i.guild_id, sa),
                                                alt: t,
                                                className: sr.my,
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
var sc = n(584960);
function su(e) {
    let { channel: t, presenceActivity: n, embeddedApp: i, onAction: l } = e,
        r = Array.from(i.embeddedActivity.userIds),
        a = (0, u.bG)([lu.default], () => lu.default.getUser(r[0]));
    return null == a
        ? null
        : (0, s.jsxs)("div", {
              className: sc.Eb,
              children: [
                  (0, s.jsx)("div", {
                      className: sc.Il,
                      children: (0, s.jsx)(sd, { activity: n, embeddedApp: i, channel: t }),
                  }),
                  (0, s.jsx)("div", {
                      className: sc.M4,
                      children: (0, s.jsx)(si.A, {
                          type: sn.M.VOICE_CHANNEL,
                          activity: n,
                          embeddedActivity: i.embeddedActivity,
                          user: a,
                          guildId: t.getGuildId(),
                          channelId: t.id,
                          buttonVariant: "primary",
                          onAction: l,
                      }),
                  }),
              ],
          });
}
var sh = n(713654),
    sA = n(744399);
function sg(e) {
    let { channel: t } = e,
        n = (0, u.bG)([O.A], () => O.A.getGuild(t.guild_id)),
        i = (0, t8.Ay)(t),
        l = (0, sh.gU)(t, n);
    return null == l
        ? null
        : (0, s.jsxs)("div", {
              className: sA.hY,
              children: [
                  (0, s.jsx)(l, { className: sA.p }),
                  (0, s.jsx)(e4.E, {
                      variant: "text-md/semibold",
                      color: "interactive-text-default",
                      className: sA.HA,
                      children: i,
                  }),
              ],
          });
}
var sm = n(220650);
function sf(e) {
    let { channel: t, onAction: n } = e,
        i = (0, lb.Ay)(t),
        l = Array.from((0, lb.Rz)(i).values());
    return 0 === l.length
        ? null
        : (0, s.jsxs)(st.Ip, {
              className: sm.kL,
              children: [
                  (0, s.jsx)("div", { className: sm.oT, children: (0, s.jsx)(sg, { channel: t }) }),
                  (0, s.jsx)("div", { className: sm.zN }),
                  l.map((e, i) =>
                      (0, s.jsx)(
                          su,
                          { embeddedApp: e, presenceActivity: e.presenceActivity ?? void 0, channel: t, onAction: n },
                          i,
                      ),
                  ),
              ],
          });
}
var sp = n(662980);
function sC(e) {
    let { channel: t, transitionExtras: n } = e,
        i = em.intl.string(em.t.ZXxLQg);
    return (0, s.jsx)(el.m, {
        asContainer: !0,
        text: i,
        children: (0, s.jsx)(es.D, {
            className: ep.Xs,
            onClick: function () {
                ((0, sp.T)(t.id, !0), (0, lp.iN)(t.id, n));
            },
            "aria-label": i,
            children: (0, s.jsx)(iD.ChatIcon, { size: "xs", color: "currentColor", className: ep.gE }),
        }),
    });
}
class sE extends nB {
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
        iU.A.preload(t ?? k.ME, e.id);
    };
    renderPopout = (e) => {
        let { channel: t, sorting: n, embeddedApps: i, channelIsContentGated: l } = this.props,
            { shouldShowActivities: r } = this.state;
        return t.isModeratorReportChannel() || l
            ? null
            : null != i && i.length > 0 && r && !n
              ? (0, s.jsx)(sf, { onAction: this.handleActivitiesPopoutClose, channel: t })
              : (0, s.jsx)(l6, { ...e, channel: this.props.channel });
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
            return void (0, e8.L3)(e, async () => {
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
            let i = lu.default.getUser(t.getRecipientId());
            null != i &&
                (0, e8.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("790484"),
                        n.e("207322"),
                        n.e("622936"),
                        n.e("216947"),
                        n.e("463317"),
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
                        n.e("529422"),
                        n.e("823427"),
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
                    return (n) => (0, s.jsx)(e, { ...n, user: i, channel: t, showModalItems: !1 });
                });
            return;
        }
        if (t.isModeratorReportChannel())
            return void (0, e8.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("926132"),
                    n.e("146652"),
                    n.e("393336"),
                    n.e("391763"),
                    n.e("955557"),
                    n.e("550033"),
                    n.e("947502"),
                    n.e("343266"),
                    n.e("430997"),
                    n.e("379995"),
                    n.e("578580"),
                ]).then(n.bind(n, 907647));
                return (n) => (0, s.jsx)(e, { ...n, channel: t });
            });
        let i = O.A.getGuild(t.getGuildId());
        null != i &&
            (0, e8.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("926132"),
                    n.e("146652"),
                    n.e("993103"),
                    n.e("393336"),
                    n.e("893190"),
                    n.e("391763"),
                    n.e("955557"),
                    n.e("474610"),
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
                    n.e("670954"),
                    n.e("25173"),
                ]).then(n.bind(n, 468916));
                return (n) => (0, s.jsx)(e, { ...n, channel: t, guild: i });
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, s.jsx)("div", { className: ep.yW, children: e });
    }
    renderVibegrationsChatButton(e) {
        let { channel: t, locked: n } = this.props;
        return !0 === n ? null : (0, s.jsx)(sC, { channel: t, transitionExtras: e });
    }
    render() {
        let {
                channel: e,
                guild: t,
                selected: n,
                muted: i,
                unread: l,
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
            S = N ?? this.channelItemRef,
            { isMenuItemPopoverVisible: I } = this.state,
            b = !I && a,
            G = !I && E && null != p && p.length > 0,
            R = lq(m),
            j = _ ? { source: lf.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
            v = (0, tQ.kg)(e, "TextChannel"),
            y = (0, s.jsxs)("li", {
                className: eK()(this.getClassName(), { [ep.r9]: this.isDisabled(), [ep.wH]: n }),
                "data-dnd-name": (0, t8.m1)(e, lu.default, lI.A),
                onMouseEnter: b || G ? this.handleMouseEnter : void 0,
                onMouseLeave: b || G ? this.handleMouseLeave : void 0,
                children: [
                    (0, s.jsx)(i5.Y, {
                        targetElementRef: S,
                        position: "right",
                        renderPopout: this.renderPopout,
                        onRequestClose: this.handleClosePopout,
                        spacing: 17,
                        shouldShow: (b && this.state.shouldShowThreadsPopout) || (G && this.state.shouldShowActivities),
                        children: () =>
                            (0, s.jsxs)(nk.Ay, {
                                ref: this.setChannelItemRef,
                                className: ep.Ki,
                                channel: e,
                                guild: t,
                                selected: !g && n,
                                muted: i,
                                unread: l,
                                mentionCount: o,
                                hasActiveThreads: r,
                                subtitle: R?.subtitle,
                                subtitleColor: R?.color,
                                onMouseDown: this.handleMouseDown,
                                onContextMenu: this.handleContextMenu,
                                connectDragPreview: h ? u : null,
                                isFavoriteSuggestion: g,
                                channelTypeOverride: f ? k.rbe.GUILD_TEXT : void 0,
                                resolvedUnreadSetting: C,
                                transitionExtras: j,
                                "aria-label": (0, le.Ay)({
                                    channel: e,
                                    unread: l,
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
                                    v && !g && this.renderVibegrationsChatButton(j),
                                    !g &&
                                        (0, s.jsxs)(s.Fragment, {
                                            children: [
                                                this.renderChannelInfo(),
                                                e.type === k.rbe.GUILD_APP
                                                    ? (0, s.jsx)(se, { channel: e, isSuggestedSection: _ })
                                                    : null,
                                                this.renderInviteButton(),
                                                this.renderEditButton(),
                                            ],
                                        }),
                                ],
                            }),
                    }),
                    n &&
                        (0, s.jsx)(lZ.A, {
                            targetElementRef: S,
                            channelType: e.type,
                            isTargetInViewport: x,
                            onVisibilityChange: this.handleMenuItemPopoverVisibilityChange,
                        }),
                ],
            });
        return h ? d(c(y)) : y;
    }
}
let sx = $(sE);
function sN(e) {
    let { channel: t, guild: n, disableSorting: i, isFavoriteCategory: l, muted: a, selected: o } = e,
        { hasActiveThreads: d, hasMoreActiveThreads: c } = (0, iV.NR)(t),
        h = (0, u.cf)([il.Ay], () => ({
            unread: il.Ay.hasUnread(t.id),
            ackMessageId: il.Ay.ackMessageId(t.id),
            isLowImportanceMention: il.Ay.getIsMentionLowImportance(t.id),
        })),
        A = (0, u.bG)([w.Ay], () => w.Ay.resolveUnreadSetting(t)),
        g = (0, u.cf)([L.A, P.A], () => {
            let e = L.A.getChannel(t.parent_id);
            return {
                canManageChannel: P.A.can(k.xBc.MANAGE_CHANNELS, t),
                canReorderChannel:
                    !0 !== i &&
                    ((0, v.ai)(n.id) ||
                        (null != e ? P.A.can(k.xBc.MANAGE_CHANNELS, e) : P.A.can(k.xBc.MANAGE_CHANNELS, n))),
            };
        }),
        m = (0, u.bG)([ii.A], () => ii.A.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: f, isSubscriptionGated: p } = (0, iP.A)(t.id),
        C = (0, u.bG)([w.Ay], () => w.Ay.isFavorite(n.id, t.id)),
        E = (0, lX.ni)(t),
        x = (0, lY.Gp)(t.id),
        N = lV({
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
        _ = (0, lb.Ay)(t),
        [S, I] = r.useState(!1),
        b = (0, lW.K)(
            r.useCallback((e) => {
                I(e);
            }, []),
        );
    return (0, u.bG)([l$.A, lJ.Ay], () => l$.A.getChannelId() !== t.id && lJ.Ay.isCurrentUserGuest(t.getGuildId()))
        ? null
        : (0, s.jsx)(sx, {
              ...h,
              ...g,
              ...e,
              hasActiveThreads: d,
              hasMoreActiveThreads: c,
              isSubscriptionGated: p,
              needSubscriptionToAccess: f,
              isNewChannel: m && e.canBeNewChannel,
              isFavoriteSuggestion: l && !C,
              channelIsContentGated: E,
              channelInfo: N,
              embeddedApps: _,
              resolvedUnreadSetting: A,
              hasChannelInfo: null != N,
              enableActivities: x,
              isTargetInViewport: S,
              channelItemRef: b,
          });
}
var s_ = n(900797),
    sS = n(636585),
    sI = n(531685),
    sb =
        (((l = {}).HIDDEN = "hidden"),
        (l.UNREAD = "unread"),
        (l.MENTIONS = "mentions"),
        (l.VOICE_CHANNELS = "voice-channels"),
        l);
let sG = { mode: "hidden", mentionCount: 0, targetChannelId: null },
    sR = { topBar: sG, bottomBar: sG },
    sj = {},
    sv = {};
function sy(e) {
    let t = L.A.getChannel(e);
    return (
        !(null == t || null == t.getGuildId() || t.isGuildVocal()) &&
        !(t.isThread() ? iW.A.isMuted(t.id) : w.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, tA.Y)(t)
    );
}
function sM(e) {
    let t = L.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let i = w.Ay.isGuildCollapsed(n),
        l = w.Ay.isChannelMuted(n, t.id);
    return (!i || !l) && il.Ay.getMentionCount(e) > 0;
}
function sT(e) {
    return (
        !w.Ay.isChannelMuted(e.guild_id, e.id) &&
        (e.isGuildStageVoice()
            ? tE.A.getMutableParticipants(e.id, tx.ip.SPEAKER).length > 0
            : tm.Ay.getVoiceStatesForChannel(e).length > 0)
    );
}
function sL(e) {
    let { guildChannels: t } = tR.A.getGuildWithoutChangingGuildActionRows(e),
        n = t.getChannels(sv[e] ?? []);
    if (null == n || 0 === n.length) return !1;
    let i = null,
        l = null,
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
            ((sy(t.id) || o().some(t.threadIds, sy)) && (d = !1),
            (sM(t.id) || o().some(t.threadIds, sM)) && (a = !1),
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
            ((sy(t.id) || o().some(t.threadIds, sy)) && (null == l && (l = t.id), (p = !0)),
                (sM(t.id) || o().some(t.threadIds, sM)) &&
                    (null == i && (i = t.id),
                    (f += il.Ay.getMentionCount(t.id)),
                    (f += o().sumBy(t.threadIds, il.Ay.getMentionCount))));
        }
    if (d || a)
        for (let e = 0; e < m.length; e++) {
            let t = m[e];
            if (!d && !a) break;
            ((sy(t.id) || o().some(t.threadIds, sy)) && (null == r && (r = t.id), (E = !0)),
                (sM(t.id) || o().some(t.threadIds, sM)) &&
                    (null == s && (s = t.id),
                    (C += il.Ay.getMentionCount(t.id)),
                    (C += o().sumBy(t.threadIds, il.Ay.getMentionCount))));
        }
    let x = null,
        N = null,
        _ = u?.getChannelRecords() ?? [];
    (a && C > 0
        ? (x = { mode: "mentions", mentionCount: C, targetChannelId: s })
        : !c && o().some(_, sT)
          ? (x = { mode: "voice-channels", mentionCount: 0, targetChannelId: null })
          : d && E && (x = { mode: "unread", mentionCount: 0, targetChannelId: r }),
        a && f > 0
            ? (N = { mode: "mentions", mentionCount: f, targetChannelId: i })
            : d && p && (N = { mode: "unread", mentionCount: 0, targetChannelId: l }));
    let S = null != N && (null == x || ("mentions" !== x.mode && "mentions" === N.mode)),
        I = null != x && ("mentions" === x.mode || !S);
    return ((sj[e] = { topBar: S ? (N ?? sG) : sG, bottomBar: I ? (x ?? sG) : sG }), !0);
}
let sU = o().throttle(sL, 200);
function sD(e) {
    let { guildId: t } = e,
        n = O.A.getGuild(t);
    return null != n && !!n.features.has(k.GuildFeatures.COMMUNITY) && sU(t);
}
function sO(e) {
    let { id: t } = e,
        n = L.A.getChannel(t);
    if (null == n) return !1;
    let i = O.A.getGuild(n.guild_id);
    return null != i && !!i.features.has(k.GuildFeatures.COMMUNITY) && sU(n.guild_id);
}
function sP(e) {
    let { channel: t } = e,
        n = L.A.getChannel(t.id);
    if (null == n) return !1;
    let i = O.A.getGuild(t.guild_id);
    return null != i && !!i.features.has(k.GuildFeatures.COMMUNITY) && sU(n.guild_id);
}
function sV(e) {
    let { channelId: t } = e,
        n = L.A.getChannel(t);
    if (null == n) return !1;
    let i = O.A.getGuild(n.guild_id);
    return (
        null != i && !!i.features.has(k.GuildFeatures.COMMUNITY) && V.A.getGuildId() === n.guild_id && sU(n.guild_id)
    );
}
function sw(e) {
    let { guildId: t } = e;
    return null != t && sU(t);
}
class sH extends u.Ay.Store {
    static displayName = "ChannelListUnreadsStore";
    initialize() {
        this.waitFor(tR.A, L.A, O.A, iW.A, il.Ay, V.A, tm.Ay, tE.A, w.Ay);
    }
    getUnreadStateForGuildId(e) {
        return sj[e] ?? sR;
    }
}
let sB = new sH(tt.h, {
    UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
        let { guildId: t, channelIds: n } = e,
            i = O.A.getGuild(t);
        return (
            null != i &&
            !!i.features.has(k.GuildFeatures.COMMUNITY) &&
            null != n &&
            !o().isEqual(sv[t], n) &&
            ((sv[t] = n), sL(t))
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
                .filter(tf.Vq)
                .uniq()
                .forEach((e) => {
                    let t = O.A.getGuild(e);
                    null != t && t.features.has(k.GuildFeatures.COMMUNITY) && sU(e) && (n = !0);
                }),
            n
        );
    },
    CHANNEL_ACK: sV,
    CHANNEL_DELETE: sP,
    CHANNEL_LOCAL_ACK: sV,
    MESSAGE_ACK: sV,
    MESSAGE_CREATE: sV,
    MESSAGE_DELETE_BULK: sV,
    MESSAGE_DELETE: sV,
    PASSIVE_UPDATE_V2: function (e) {
        let t = O.A.getGuild(e.guildId);
        return !!(e.channels.length > 0 && null != t && t.features.has(k.GuildFeatures.COMMUNITY)) && sU(e.guildId);
    },
    RESORT_THREADS: sV,
    THREAD_CREATE: sP,
    THREAD_DELETE: sP,
    THREAD_LIST_SYNC: sD,
    THREAD_MEMBER_UPDATE: sO,
    THREAD_MEMBERS_UPDATE: sO,
    THREAD_UPDATE: sP,
    BULK_CLEAR_RECENTS: sD,
    CATEGORY_COLLAPSE_ALL: sD,
    CATEGORY_EXPAND_ALL: sD,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = V.A.getGuildId();
        if (null == n || !new Set(t.map((e) => e.guildId)).has(n)) return !1;
        let i = sj[n];
        return null != i && "voice-channels" === i.bottomBar.mode && sU(n);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: sw,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: sw,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        for (let e of t) null != e.guild_id && sU(e.guild_id);
    },
    USER_GUILD_SETTINGS_GUILD_UPDATE: sw,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: sw,
});
var sk = n(350536);
let sF = { friction: 30, tension: 300 };
function sK(e) {
    let { guildChannels: t, jumpToVoiceChannels: n } = e,
        i = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
        l = (0, u.bG)([tm.Ay], () => tm.Ay.getVoiceStates(t.id), [t.id]),
        a = r.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), n());
            },
            [n],
        ),
        o = i?.getChannelRecords() ?? [],
        d = (0, n_.fK)({ channels: o, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: l });
    return (0, s.jsxs)(es.D, {
        className: eK()(sk.M0, sk.OF),
        onClick: a,
        children: [
            (0, s.jsx)(t5.H, { size: "custom", className: sk.Gs, width: 14, height: 14, color: "currentColor" }),
            (0, s.jsx)(e4.E, {
                variant: "text-xs/semibold",
                className: sk.pM,
                children: em.intl.format(em.t["fDlr+F"], { count: d.length }),
            }),
            (0, s.jsx)(sS.A, {
                guildId: t.id,
                className: sk.J$,
                users: d.slice(0, 4),
                renderMoreUsers: () => null,
                max: 4,
                size: l1._3.SIZE_16,
            }),
        ],
    });
}
function sz(e) {
    let { position: t, guildChannels: n, guildChannelsVersion: i, jumpToVoiceChannels: l, jumpToChannel: a } = e,
        { bottomBar: o, topBar: d } = (0, u.cf)([sB], () => sB.getUnreadStateForGuildId(n.id)),
        c = (0, u.bG)([sI.A], () => sI.A.isFocused()),
        { mode: h, mentionCount: A, targetChannelId: g } = "bottom" === t ? o : d,
        m = h === sb.HIDDEN,
        f = (0, e5.z)(
            {
                to: { transform: m ? ("bottom" === t ? "translateY(180%)" : "translateY(-180%)") : "translateY(0%)" },
                config: sF,
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
        className: eK()(sk.kL, { [sk.Mn]: "top" === t, [sk.sQ]: "bottom" === t }),
        children: (0, s.jsx)(e6.animated.div, {
            className: sk.pK,
            style: f,
            "aria-hidden": m,
            children: (function () {
                switch (h) {
                    case sb.HIDDEN:
                        return (0, s.jsx)("div", { className: eK()(sk.M0, sk.Te) });
                    case sb.UNREAD:
                        return (0, s.jsxs)(es.D, {
                            className: sk.M0,
                            onClick: p,
                            children: [
                                "bottom" === t
                                    ? (0, s.jsx)(t7.a, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: sk.z_,
                                          height: 14,
                                          width: 14,
                                      })
                                    : (0, s.jsx)(s_.t, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: sk.z_,
                                          height: 14,
                                          width: 14,
                                      }),
                                (0, s.jsx)(e4.E, {
                                    variant: "text-xs/semibold",
                                    color: "interactive-text-default",
                                    className: sk.pM,
                                    children: em.intl.string(em.t.FCRiT3),
                                }),
                            ],
                        });
                    case sb.MENTIONS:
                        return (0, s.jsx)(es.D, {
                            className: eK()(sk.M0, sk.vU),
                            onClick: p,
                            children: (0, s.jsx)(e4.E, {
                                variant: "text-xs/semibold",
                                color: "badge-text-brand",
                                className: sk.pM,
                                children: em.intl.format(em.t.EQcLyp, { count: A }),
                            }),
                        });
                    case sb.VOICE_CHANNELS:
                        return (0, s.jsx)(sK, { jumpToVoiceChannels: l, guildChannels: n, guildChannelsVersion: i });
                    default:
                        return;
                }
            })(),
        }),
    });
}
var sW = n(310953),
    sY = n(173860);
function sX(e) {
    let t = L.A.getChannel(e);
    return (
        null != t &&
        null != t.getGuildId() &&
        !(t.isThread() ? iW.A.isMuted(t.id) : w.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, tA.Y)(t)
    );
}
function sq(e) {
    let t = L.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let i = w.Ay.isGuildCollapsed(n),
        l = w.Ay.isChannelMuted(n, t.id);
    return (!i || !l) && il.Ay.getMentionCount(e) > 0;
}
let sZ = r.forwardRef(function (e, t) {
    let { guildId: n, guildChannels: i, guildChannelsVersion: l, ...r } = e,
        a = (0, sW.W)(n, i, l, { withVoiceChannels: !1 }, { ignoreRecents: !0 }),
        o = (0, u.bG)([sI.A], () => sI.A.isFocused());
    return (0, s.jsx)(sY.A, { ref: t, ...r, isUnread: sX, isMentioned: sq, items: a, animate: o });
});
var sJ = n(81466);
function s$(e) {
    let { guild: t, selected: i } = e,
        { hasUnread: l, mentionCount: r } = (0, u.cf)(
            [il.Ay],
            () => ({
                hasUnread: il.Ay.hasUnread(t.id, nF.P.GUILD_EVENT),
                mentionCount: il.Ay.getMentionCount(t.id, nF.P.GUILD_EVENT),
            }),
            [t.id],
        ),
        a = (0, u.bG)([w.Ay], () => w.Ay.isMuteScheduledEventsEnabled(t.id));
    async function o() {
        await (0, S.openModalLazy)(async () => {
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
    let d = (0, tX.Ay)(t.id),
        c = d.length > 0 ? em.intl.formatToPlainString(em.t.IBdqSu, { number: d.length }) : em.intl.string(em.t.tlopTM);
    return (0, s.jsx)(ec.G, {
        id: `upcoming-events-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(sJ.CalendarIcon, { size: "md", color: "currentColor", className: e }),
        text: c,
        selected: i,
        onClick: o,
        onContextMenu: function (e) {
            (0, e8.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("426386"), n.e("819990")]).then(n.bind(n, 221621));
                return (n) => (0, s.jsx)(e, { ...n, guildId: t.id });
            });
        },
        showUnread: l && !a,
        trailing: !a && r > 0 ? (0, s.jsx)(ea.hV, { className: n7.Do, disableColor: !0, count: r }) : null,
    });
}
var sQ = n(152367),
    s0 = n(972786),
    s1 = n(321593),
    s3 = n(309010),
    s2 = n(759967);
function s9(e) {
    let { guild: t, selected: n } = e,
        i = (0, u.bG)([s0.Ay], () => s0.Ay.getSelectedProjectId(t.id), [t.id]),
        l = (0, u.bG)([s3.Ay], () => s3.Ay.getChannelId(), []),
        r = (0, u.bG)([V.A], () => V.A.getGuildId(), []);
    return (0, s.jsx)(ec.G, {
        id: `vibegrations-${t.id}`,
        renderIcon: (e) =>
            (0, s.jsx)(sQ.D, { size: "custom", color: "currentColor", width: 20, height: 20, className: e }),
        text: em.intl.string(s2.default.Xmvb23),
        selected: n,
        background: (0, s.jsx)(s1.gT, { guildId: t.id }),
        onClick: () => {
            let e = l === eh.VV.VIBEGRATIONS && r === t.id;
            (0, eu.pX)(k.BVt.CHANNEL(t.id, eh.VV.VIBEGRATIONS, null == i || e ? null : i));
        },
    });
}
var s7 = n(845056),
    s6 = n(765379),
    s5 = n(271683),
    s4 = n(725613),
    s8 = n(857253),
    re = n(360729),
    rt = n(22231),
    rn = n(241326),
    ri = n(750943),
    rl = n(743674),
    rs = n(888697),
    rr = n(26741),
    ra = n(493819),
    ro = n(722884),
    rd = n(433083),
    rc = n(176431);
function ru(e) {
    let { channel: t, imageUrl: i, animatedUrl: l, bannerHash: a, canModifyHangout: o } = e,
        d = (0, rl.S)(i),
        c = (0, ew.je)(t),
        u = (0, rr.P9)({ guildId: t.guild_id, channelId: t.id, bannerHash: a }),
        h = r.useCallback(() => {
            ((0, rr.J_)({ guildId: t.guild_id, channelId: t.id }), (0, ro.A)({ channel: t }));
        }, [t]),
        A = r.useCallback(() => {
            ((0, rr.nK)({ guildId: t.guild_id, channelId: t.id }), (0, rs.e2)(t.id));
        }, [t.guild_id, t.id]),
        g = r.useCallback(
            (e) => {
                c
                    ? (0, e8.L3)(e, async () => {
                          let { default: e } = await n.e("555558").then(n.bind(n, 316421));
                          return (n) => (0, s.jsx)(e, { ...n, channel: t });
                      })
                    : e.preventDefault();
            },
            [t, c],
        );
    return (0, s.jsxs)("div", {
        ref: u,
        className: rc.rs,
        onContextMenu: g,
        children: [
            (0, s.jsx)("div", {
                className: rc.ZS,
                style: null != d ? { backgroundColor: d } : void 0,
                children: (0, s.jsx)(ra.A, { imageUrl: i, animatedUrl: l, className: rc.Sl }),
            }),
            o
                ? (0, s.jsxs)("div", {
                      className: rc.n_,
                      children: [
                          (0, s.jsx)(el.m, {
                              text: em.intl.string(rd.default.XJ4UpB),
                              children: (0, s.jsx)(es.D, {
                                  className: rc.HF,
                                  onClick: h,
                                  children: (0, s.jsx)(rt.PencilIcon, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                          (0, s.jsx)(el.m, {
                              text: em.intl.string(rd.default.XV4qT6),
                              children: (0, s.jsx)(es.D, {
                                  className: rc.HF,
                                  onClick: A,
                                  children: (0, s.jsx)(rn.TrashIcon, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function rh(e) {
    let { channel: t } = e,
        n = (0, rr.dX)({ guildId: t.guild_id, channelId: t.id }),
        i = r.useCallback(() => {
            ((0, rr.J_)({ guildId: t.guild_id, channelId: t.id }), (0, ro.A)({ channel: t }));
        }, [t]);
    return (0, s.jsx)("div", {
        ref: n,
        className: rc._o,
        children: (0, s.jsxs)(es.D, {
            className: rc.hH,
            onClick: i,
            children: [
                (0, s.jsx)(ri.X, { size: "xs", color: "currentColor" }),
                (0, s.jsx)(e4.E, {
                    variant: "text-sm/medium",
                    color: "currentColor",
                    children: em.intl.string(rd.default.NGcIOF),
                }),
            ],
        }),
    });
}
function rA(e) {
    let { channel: t, isConnected: n } = e,
        { enableHangoutWindow: i } = (0, eV.Dm)({ guildId: t.guild_id, location: "HangoutWindow" }),
        l = (0, ew.W6)(t),
        a = n && l,
        o = t.voiceHangout,
        d = o?.banner_hash,
        c = r.useMemo(() => {
            if (null == d || null == t.guild_id) return null;
            let e = (0, ew.Sq)({ guildId: t.guild_id, bannerHash: d });
            return null == e ? null : { bannerHash: d, ...e };
        }, [t.guild_id, d]);
    return i
        ? null != c
            ? (0, s.jsx)(ru, {
                  channel: t,
                  imageUrl: c.imageUrl,
                  animatedUrl: c.animatedUrl,
                  bannerHash: c.bannerHash,
                  canModifyHangout: a,
              })
            : a
              ? (0, s.jsx)(rh, { channel: t })
              : null
        : null;
}
var rg = n(290863),
    rm = n(461213),
    rf = n(532622),
    rp = n(882840),
    rC = n(208971),
    rE = n(46054),
    rx = n(569381),
    rN = n(165648);
function r_(e) {
    let { channel: t, connected: n, hovered: i, subtitle: l, onClick: a } = e,
        o = (0, rC.G)((0, rp.l)(t)),
        { enableHangoutWindow: d } = (0, eV.Dm)({ guildId: t.guild_id, location: "VoiceChannelStatus" }),
        c = d && (0, ew.lr)(t),
        u = null != o && o.length > 0,
        h = (0, rf.Ay)(t, !0),
        A = null != l && l.length > 0;
    if (
        (r.useEffect(() => {
            u && iv.default.track(k.HAw.VOICE_CHANNEL_TOPIC_VIEWED, { channel_id: t.id, guild_id: t.guild_id });
        }, [u, t.id, t.guild_id]),
        null == t.guild_id)
    )
        return null;
    let g = eK()(rx.Ui, n && h ? rx.BI : null);
    return u
        ? (0, s.jsx)(es.D, {
              className: g,
              onClick: h ? a : void 0,
              children: (0, s.jsx)(e4.E, {
                  variant: "text-xs/medium",
                  className: eK()(rx.qS, rN.PT),
                  children: (0, s.jsx)(t1.A, { children: rE.A.parseVoiceChannelStatus(o, !0, { channelId: t.id }) }),
              }),
          })
        : n && h && !c && (!A || i)
          ? (0, s.jsxs)(es.D, {
                className: g,
                onClick: a,
                children: [
                    (0, s.jsx)(e4.E, {
                        variant: "text-xs/medium",
                        className: rx.qS,
                        children: em.intl.string(em.t.Mgpxiw),
                    }),
                    (0, s.jsx)(rt.PencilIcon, { color: "currentColor", className: rx.rD, size: "xxs" }),
                ],
            })
          : A
            ? (0, s.jsx)(t1.A, { children: l })
            : null;
}
class rS extends nB {
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
            unverifiedAccount: i,
            needSubscriptionToAccess: l,
            mentionCount: s,
            isSuggestedSection: r,
            guildRoomsEnabled: a,
        } = this.props;
        i && this.setState({ shouldShowGuildVerificationPopout: !0 });
        let o = s > 0;
        (o && i4.A.updateChatOpen(n.id, !0),
            iO.A.handleVoiceConnect({
                channel: n,
                connected: t,
                needSubscriptionToAccess: l,
                routeDirectlyToChannel: o || a,
                locked: e,
                transitionExtras: r ? { source: lf.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
            }));
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            i = O.A.getGuild(t.getGuildId());
        null != i &&
            (0, e8.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("926132"),
                    n.e("146652"),
                    n.e("993103"),
                    n.e("393336"),
                    n.e("893190"),
                    n.e("391763"),
                    n.e("955557"),
                    n.e("474610"),
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
                return (n) => (0, s.jsx)(e, { ...n, channel: t, guild: i });
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
        return (0, n_.Pd)(e, iH.A, O.A);
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
        (null != t && (0, ln.V)(t) && (0, lt.Ze)(t), this.handleVoiceConnect());
    };
    handleVoiceStatusClick = (e) => {
        let { connected: t, channel: n } = this.props;
        t && (e.stopPropagation(), (0, s5.A)({ channel: n }));
    };
    renderSubtitle() {
        let { channel: e, connected: t } = this.props,
            n = lq(this.props.subtitle)?.subtitle,
            { hovered: i } = this.state;
        return (0, s.jsx)(r_, {
            onClick: this.handleVoiceStatusClick,
            channel: e,
            connected: t,
            subtitle: n,
            hovered: i,
        });
    }
    renderVoiceUsers() {
        let { channel: e, voiceStates: t, collapsed: n, withGuildIcon: i, tabIndex: l } = this.props;
        return (0, s.jsx)(i1.A, {
            channel: e,
            collapsed: n,
            collapsedMax: 6,
            voiceStates: t,
            withGuildIcon: i,
            tabIndex: l,
        });
    }
    renderHangoutWindow() {
        let { channel: e, connected: t, voiceStates: n, collapsed: i } = this.props;
        return !(null != n && n.length > 0) || i ? null : (0, s.jsx)(rA, { channel: e, isConnected: t });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        return t
            ? (0, s.jsx)(lm, { type: lg.VOICE, guildId: e.guild_id, closePopout: this.closeGuildVerificationPopout })
            : null;
    };
    renderOpenChatButton = () => {
        let { channel: e, locked: t, forceShowButtons: n, isSuggestedSection: i } = this.props;
        if (!t)
            return (0, s.jsx)(el.m, {
                asContainer: !0,
                text: em.intl.string(em.t.ZXxLQg),
                children: (0, s.jsx)(es.D, {
                    className: eK()(ep.Xs, n ? ep.Tf : null),
                    onClick: () => {
                        (i4.A.updateChatOpen(e.id, !0),
                            (0, lp.iN)(e.id, i ? { source: lf.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0));
                    },
                    "aria-label": em.intl.string(em.t.ZXxLQg),
                    children: (0, s.jsx)(iD.ChatIcon, { size: "xs", color: "currentColor", className: ep.gE }),
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
                unread: i,
                resolvedUnreadSetting: l,
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
                className: eK()(this.getModeClass(), { [ep.r9]: this.isDisabled(), [ep.fy]: _ }),
                "data-dnd-name": (0, t8.m1)(e, lu.default, lI.A),
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
                        children: (0, s.jsx)(i5.Y, {
                            targetElementRef: this.channelItemRef,
                            position: "right",
                            renderPopout: this.renderPopout,
                            onRequestClose: this.closeGuildVerificationPopout,
                            spacing: 17,
                            shouldShow: b,
                            children: () =>
                                (0, s.jsx)(el.m, {
                                    text: this.getTooltipText(),
                                    children: (0, s.jsxs)(nk.Ay, {
                                        ref: this.channelItemRef,
                                        className: ep.Ki,
                                        iconClassName: eK()({ [ep.Gj]: m || x || G }),
                                        hasActiveEvent: m,
                                        channel: e,
                                        selected: !C && t,
                                        connected: n,
                                        unread: n ? i : void 0,
                                        resolvedUnreadSetting: l,
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
                                        "aria-label": (0, le.Ay)({
                                            channel: e,
                                            unread: i,
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
let rI = $((0, i8.F)(rS));
function rb(e) {
    let {
            guild: t,
            channel: n,
            disableSorting: i,
            isFavoriteCategory: l,
            selected: r,
            collapsed: a,
            voiceStates: o,
        } = e,
        d = (0, u.cf)([il.Ay], () => ({ unread: il.Ay.hasUnread(n.id), mentionCount: il.Ay.getMentionCount(n.id) })),
        c = (0, u.bG)([w.Ay], () => w.Ay.resolveUnreadSetting(n)),
        h = (0, u.cf)([L.A, lc.A, P.A], () => {
            let e = L.A.getChannel(n.parent_id),
                l = lc.A.getCheck(n.guild_id);
            return {
                canManageChannel: P.A.can(k.xBc.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== i &&
                    ((0, v.ai)(t.id) ||
                        (null != e ? P.A.can(k.xBc.MANAGE_CHANNELS, e) : P.A.can(k.xBc.MANAGE_CHANNELS, t))),
                canMoveMembers: P.A.can(k.xBc.MOVE_MEMBERS, n),
                locked: !P.A.can(k.xBc.CONNECT, n),
                bypassLimit: P.A.can(k.xBc.MOVE_MEMBERS, n),
                unverifiedAccount: !l.canChat,
            };
        }),
        A = (0, u.bG)([iH.A], () => iH.A.hasVideo(n.id)),
        { enabled: g } = (0, re.mf)({ guildId: t.id, location: "VoiceChannel" }),
        m = (0, lb.Ay)(n),
        f = (0, u.yK)(
            [rm.A, rg.A, lN.default],
            () => {
                if (null == o || 0 === o.length) return [];
                let e = lN.default.getId(),
                    t = [];
                for (let { user: i } of o)
                    for (let l of i.id === e ? rm.A.getActivities() : rg.A.getActivities(i.id, n.guild_id))
                        !(0, s7.N)(l) || (0, s6.A)(l) || null == l.name || t.includes(l.name) || t.push(l.name);
                return t;
            },
            [o, n.guild_id],
        ),
        p = (0, t8.Ay)(n),
        C = (0, tX.Qs)(n.id),
        E = (0, u.bG)([s4.A], () => s4.A.getStartTime(n), [n]),
        { isSubscriptionGated: x, needSubscriptionToAccess: N } = (0, iP.A)(n.id),
        _ = (0, s8.A)(),
        S = (0, u.bG)([w.Ay], () => w.Ay.isFavorite(t.id, n.id)),
        I = e.connected || _?.channelId === n.id,
        { enableHighlight: b, enableWaveformIcon: G } = (0, nx.b)(t.id, "VoiceChannel"),
        R = null != o && o.length > 0,
        j = b && R,
        y = G && R,
        M = lV({
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
    return (0, s.jsx)(rI, {
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
        connected: I,
        isFavoriteSuggestion: l && !S,
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
function rG(e) {
    return (
        h.A.modules.channels.NAME_LINE_HEIGHT.resolve({ density: e }) +
        2 * h.A.space.SPACE_XXS.resolve({ density: e }) +
        2
    );
}
class rR extends r.PureComponent {
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
        (this.setState({ initialized: !0 }), (0, tj.Ei)(this.getVisibleChannels));
    }
    componentWillUnmount() {
        this.updateChannelListScroll.cancel();
    }
    componentDidUpdate(e, t) {
        let { scrollToChannel: n, guildId: i, selectedChannelId: l } = this.props,
            { initialized: s } = this.state,
            { scrollTop: r } = tb.A.getGuildDimensions(i);
        (null != n
            ? (this.scrollToChannel(n), E.A.clearChannelListScrollTo(i))
            : i !== e.guildId
              ? null != r && this.scrollTo(r)
              : l !== e.selectedChannelId
                ? this.scrollToChannel(l)
                : !t.initialized &&
                  s &&
                  (null == r && null != l
                      ? this.scrollToChannel(l, !1, 8, this.handleListScroll)
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
            i = arguments.length > 3 ? arguments[3] : void 0,
            l = this._list,
            s = this.getSectionRowsFromChannel(e)[0];
        if (null != s && null != l)
            if (null != s.threadOffset) {
                let [e] = l.getScrollPosition(s.section, s.row),
                    { density: r = "default" } = this.props,
                    a = s.threadOffset * rG(r);
                l.scrollIntoViewRect({ start: e + a, end: e + a + rG(r), padding: n, animate: t, callback: i });
            } else l.scrollToIndex({ section: s.section, row: s.row, animate: t, padding: n, callback: i });
        else i?.();
    }
    jumpToVoiceChannels = () => {
        let { guildChannels: e, voiceStates: t } = this.props,
            n = 0,
            i = e.getCategoryFromSection(e.voiceChannelsSectionNumber)?.getShownChannelIds() ?? [];
        for (let e = 0; e < i.length - 1; e++)
            if ((t[i[e]] ?? []).length > 0) {
                n = e + 1;
                break;
            }
        this._list?.scrollToIndex({ section: e.voiceChannelsSectionNumber, row: n, animate: !0, padding: 8 });
    };
    jumpToChannel = (e) => this.scrollToChannel(e, !0, 32);
    jumpToChannelWithMentionsAndUnreads = (e, t) => {
        let [n, i] = t;
        return this.scrollToChannel(e, !0, null != n && null != i ? 32 : 8);
    };
    isChannelVisible = (e, t) => {
        let n = this.getSectionRowsFromChannel(e),
            i = this._list;
        if (null == i) return !1;
        for (let { row: e, section: l } of n) {
            let [n, s] = i.getScrollPosition(l, e),
                r = i.getScrollerState();
            if ((t && n + s < r.scrollTop + r.offsetHeight) || (!t && n > r.scrollTop)) return !0;
        }
        return !1;
    };
    getVisibleChannels = () => {
        let e = this._list;
        if (null == e) return [];
        let t = e.getItems(),
            n = e.getScrollerState(),
            i = [];
        for (var l = 0; l < t.length; l++) {
            let s = t[l];
            if ((0, A.o)(s) && s.section >= this.props.guildChannels.favoritesSectionNumber) {
                let t = this.props.guildChannels.getChannelFromSectionRow(s.section, s.row),
                    [l, r] = e.getScrollPosition(s.section, s.row);
                null != t && l + r < n.scrollTop + n.offsetHeight && l > n.scrollTop && i.push(t.channel.id);
            }
        }
        return i;
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
        let i = this.isUnreadVisible();
        n
            ? this.setState({ isUnreadVisible: i, bottomUnread: t, bottomMention: e })
            : this.setState({ isUnreadVisible: i, topUnread: t, topMention: e });
    };
    isUnreadVisible() {
        let { guildChannels: e } = this.props,
            t = this._list;
        return (
            null != t &&
            t.getItems().some((n) => {
                if ("row" !== n.type) return !1;
                let { section: i, row: l } = n;
                if (i < tG.bK || e.isPlaceholderRow(i, l)) return !1;
                let s = e.getChannelFromSectionRow(i, l);
                if (null == s) return !1;
                let { channel: r, category: a } = s;
                return (
                    !!(0, H.ig)(r.record.type) &&
                    (!a.isCollapsed || !a.isMuted) &&
                    !r.isMuted &&
                    !!t.isItemVisible(i, l, !0) &&
                    (0, tA.Y)(r.record)
                );
            })
        );
    }
    updateChannelListScroll = (0, a.throttle)((e) => {
        E.A.updateChannelListScroll(this.props.guildId, e, this.getVisibleChannels());
    }, 100);
    getSectionHeight = (e) => {
        let { guild: t, guildChannels: n, density: i } = this.props,
            l = "compact" === i ? 8 : 12;
        if (e === tG.PU) return l;
        if (e === tG.bK) return t.features.has(k.GuildFeatures.HUB) ? 0 : l;
        if (e === n.voiceChannelsSectionNumber) {
            let t = n.getCategoryFromSection(e);
            if (null == t || t.isEmpty()) return 0;
            if (t.isCollapsed) return 49;
            let i = n.getChannelFromSectionRow(e, 0)?.channel;
            return null == i || i.record.type === k.rbe.GUILD_CATEGORY ? 9 : 25;
        }
        return "compact" === i ? 32 : 40;
    };
    getSectionFooterHeight = (e) => {
        let {
            guildChannels: t,
            voiceStates: n,
            selectedVoiceChannelId: i,
            selectedChannelId: l,
            optInEnabled: s,
            guildChannelsVersion: r,
        } = this.props;
        return (function (e) {
            let {
                sectionIndex: t,
                guildChannels: n,
                voiceStates: i,
                selectedChannelId: l,
                selectedVoiceChannelId: s,
                optInEnabled: r,
                visualRefreshEnabled: a,
                density: o,
            } = e;
            if (t === n.voiceChannelsSectionNumber) return 44;
            let { hasDivider: d, canHaveVoiceSummary: c } = nS(n, r, t),
                u = d ? (a ? 9 : 12) : 0;
            if (!c || t === tG.PU) return u;
            let h = n.getNamedCategoryFromSection(t);
            return null == h ||
                !(function (e) {
                    let { category: t, voiceStates: n, selectedChannelId: i, selectedVoiceChannelId: l } = e;
                    return (
                        (function (e) {
                            let { category: t, voiceStates: n, selectedChannelId: i, selectedVoiceChannelId: l } = e;
                            return !0 !== T.A.isCollapsed(t.record.id)
                                ? []
                                : t.getChannelRecords().filter((e) => {
                                      if (!P.A.can(k.xBc.VIEW_CHANNEL, e)) return !1;
                                      let t = n[e.id] ?? [];
                                      return e.id !== l && e.id !== i && t.length > 0;
                                  });
                        })({ category: t, selectedChannelId: i, selectedVoiceChannelId: l, voiceStates: n }).length > 0
                    );
                })({ category: h, selectedChannelId: l, selectedVoiceChannelId: s, voiceStates: i })
                ? u
                : (a && "cozy" === o ? 42 : 34) + u;
        })({
            sectionIndex: e,
            guildChannels: t,
            guildChannelsVersion: r,
            voiceStates: n,
            selectedChannelId: l,
            selectedVoiceChannelId: i,
            optInEnabled: s,
            density: this.props.density,
        });
    };
    getRowHeight = (e, t) => {
        let {
                guildChannels: n,
                voiceStates: i,
                stageChannelSpeakerVoiceStates: l,
                selectedVoiceChannelId: s,
                density: r = "default",
            } = this.props,
            a = rG(r);
        if (e === tG.PU) {
            let e = n.getGuildActionSection();
            return e.isEmpty()
                ? 0
                : e.getRow(t) === t0.n.GUILD_PREMIUM_PROGRESS_BAR
                  ? e.getRows().length > 1
                      ? 69
                      : 57
                  : e.getRow(t) === t0.n.GUILD_ONBOARDING_SETUP_PROGRESS
                    ? e.getRows().length > 1
                        ? 63
                        : 51
                    : a;
        }
        if (n.isPlaceholderRow(e, t)) return 0;
        let o = n.getChannelFromSectionRow(e, t);
        if (null == o) return 0;
        let { channel: d, category: c } = o;
        if (d.record.type === k.rbe.GUILD_CATEGORY) return 40;
        for (let e of d.threadIds) {
            let { density: t = "default" } = this.props;
            a += rG(t);
            let n = i[d.id];
            null != n && n.length > 0 && (a += s === e ? 32 * n.length : 32);
        }
        if (d.record.isGuildVoice()) {
            let e = i[d.id];
            if (null != e && e.length > 0) {
                let t = 32 * e.length;
                if (
                    (d.isCollapsed || c.isCollapsed ? (t = 32) : (0, eB.Ln)(d.record) && (t += 32),
                    (a += t + h.A.space.SPACE_XS.resolve({ density: r })),
                    !d.isCollapsed && !c.isCollapsed)
                ) {
                    let { enableHangoutWindow: e } = (0, eV.kY)({
                        guildId: d.record.guild_id,
                        location: "ChannelList",
                    });
                    e && ((0, ew.lr)(d.record) ? (a += 134) : s === d.id && (a += 44));
                }
            }
            d.id === this.props.rtcConnectedChannelId && (a += 32 * this.props.rtcDesyncedVoiceStatesCount);
        }
        if (((null != d.subtitle || s === d.id) && (a += 16), d.record.isGuildStageVoice())) {
            let e = i[d.id] ?? [],
                t = l[d.id] ?? [];
            if (null != e && e.length > 0) {
                let e = 32 * t.length;
                (d.isCollapsed || c.isCollapsed ? (e = Math.ceil(e / 5)) : (e += 32), (a += e + 8));
            }
        }
        return a;
    };
    dismissRecents = () => {
        let { guild: e, guildChannels: t, selectedChannelId: n } = this.props,
            i = t.getCategoryFromSection(t.recentsSectionNumber);
        if (null == i) return;
        let l = null,
            s = i.getShownChannelAndThreadIds();
        (null != n && s.includes(n) && (l = (0, ek.xb)(t)), (0, ek.DD)(e.id, s, l));
    };
    renderSection = (e) => {
        let { section: t } = e,
            {
                guildChannels: n,
                guildChannelsVersion: i,
                guild: l,
                selectedChannelId: r,
                disableManageChannels: a,
            } = this.props;
        return (0, s.jsx)(
            nC,
            {
                sectionIndex: t,
                guild: l,
                guildChannels: n,
                guildChannelsVersion: i,
                selectedChannelId: r,
                disableManageChannels: a,
            },
            (function (e, t) {
                switch (e) {
                    case tG.PU:
                        return "hoisted-spacer";
                    case tG.bK:
                        return "uncategorized-spacer";
                    case tG.HP:
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
                guild: i,
                selectedChannel: l,
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
        if (t === tG.PU) {
            let e = c.getGuildActionSection(),
                t = e.getRow(n);
            if (null == t) return null;
            switch (t) {
                case t0.n.GUILD_HUB_HEADER_OPTIONS:
                    return (0, s.jsx)(
                        eH.A,
                        { guild: i, channel: D.Ay.getDefaultChannel(i.id) },
                        t0.n.GUILD_HUB_HEADER_OPTIONS,
                    );
                case t0.n.GUILD_PREMIUM_PROGRESS_BAR:
                    let l = e.getRows();
                    return (0, s.jsx)(th, { guild: i, withMargin: l.length > 1 }, t0.n.GUILD_PREMIUM_PROGRESS_BAR);
                case t0.n.GUILD_SPACE:
                    return (0, s.jsx)(eP, { guild: i, selected: a === eh.VV.GUILD_SPACE }, t0.n.GUILD_SPACE);
                case t0.n.GUILD_HOME:
                    return (0, s.jsx)(ia, { guild: i, selected: a === eh.VV.GUILD_HOME }, t0.n.GUILD_HOME);
                case t0.n.GUILD_SCHEDULED_EVENTS:
                    return (0, s.jsx)(
                        s$,
                        { guild: i, selected: a === t0.n.GUILD_SCHEDULED_EVENTS },
                        t0.n.GUILD_SCHEDULED_EVENTS,
                    );
                case t0.n.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, s.jsx)(
                        i_,
                        { guild: i, selected: a === eh.VV.ROLE_SUBSCRIPTIONS },
                        t0.n.GUILD_ROLE_SUBSCRIPTIONS,
                    );
                case t0.n.GUILD_SHOP:
                    return (0, s.jsx)(iL, { guild: i, selected: a === eh.VV.GUILD_SHOP }, t0.n.GUILD_SHOP);
                case t0.n.GUILD_GAME_SHOP:
                    return (0, s.jsx)(n5, { guild: i, selected: a === eh.VV.GAME_SHOP }, t0.n.GUILD_GAME_SHOP);
                case t0.n.GUILD_VIBEGRATIONS:
                    return (0, s.jsx)(s9, { guild: i, selected: a === eh.VV.VIBEGRATIONS }, t0.n.GUILD_VIBEGRATIONS);
                case t0.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                    return (0, s.jsx)(iA, { guild: i });
                case t0.n.GUILD_ONBOARDING_SETUP_PROGRESS:
                    return (0, s.jsx)(ix, { guild: i }, t0.n.GUILD_ONBOARDING_SETUP_PROGRESS);
                case t0.n.CHANNELS_AND_ROLES:
                    return (0, s.jsx)(
                        is,
                        { guild: i, selected: a === eh.VV.CHANNEL_BROWSER || a === eh.VV.CUSTOMIZE_COMMUNITY },
                        t0.n.CHANNELS_AND_ROLES,
                    );
                case t0.n.GUILD_DIRECTORY:
                    return (0, s.jsx)(
                        nK,
                        { guild: i, selectedChannelId: a, disableManageChannels: h },
                        t0.n.GUILD_DIRECTORY,
                    );
                case t0.n.GUILD_MOD_DASH_MEMBER_SAFETY:
                    return (0, s.jsx)(
                        ey,
                        { guild: i, selected: a === eh.VV.MEMBER_SAFETY },
                        t0.n.GUILD_MOD_DASH_MEMBER_SAFETY,
                    );
                case t0.n.GUILD_BOOSTS:
                    return (0, s.jsx)(e7, { guildId: i.id, selected: a === eh.VV.GUILD_BOOSTS }, t0.n.GUILD_BOOSTS);
                case t0.n.GAME_SERVERS:
                    return (0, s.jsx)(eS, { guildId: i.id, selected: a === eh.VV.GAME_SERVERS }, t0.n.GAME_SERVERS);
                case t0.n.GAME_SERVERS_EMPTY:
                    return (0, s.jsx)(
                        eC,
                        { guildId: i.id, selected: a === eh.VV.GAME_SERVERS },
                        t0.n.GAME_SERVERS_EMPTY,
                    );
                case t0.n.GUILD_OFFICIAL_MESSAGES:
                    return (0, s.jsx)(
                        im,
                        { guild: i, selected: a === eh.VV.GUILD_OFFICIAL_MESSAGES },
                        t0.n.GUILD_OFFICIAL_MESSAGES,
                    );
                default:
                    return null;
            }
        }
        if (c.isPlaceholderRow(t, n)) return null;
        let f = c.getChannelFromSectionRow(t, n);
        if (null == f) return null;
        let { category: p, channel: C } = f,
            E = p instanceof tG.xu,
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
                            (0, s.jsx)(sN, {
                                channel: x,
                                guild: i,
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
                                ? (0, s.jsx)(i6, {
                                      withGuildIcon: m,
                                      channel: x,
                                      sortedThreadIds: C.threadIds,
                                      selectedChannel: null != l && (l.id === C.id || l.parent_id === x.id) ? l : null,
                                      selectedVoiceChannelId: o?.parent_id === x.id ? d : null,
                                  })
                                : null,
                        ],
                    },
                    N,
                );
            case k.rbe.GUILD_STAGE_VOICE:
                return (0, s.jsx)(
                    lk,
                    {
                        channel: x,
                        guild: i,
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
                    rb,
                    {
                        channel: x,
                        guild: i,
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
                return (0, s.jsx)(lz, { channel: x, guild: i, position: C.position, selected: a === C.id }, N);
            case k.rbe.GUILD_CATEGORY:
                if (t !== c.voiceChannelsSectionNumber) return null;
                return (0, s.jsx)(nA, { channel: x }, `readonly-${x.id}`);
            case k.rbe.PUBLIC_THREAD:
            case k.rbe.PRIVATE_THREAD:
            case k.rbe.ANNOUNCEMENT_THREAD:
                return (0, s.jsx)(
                    sN,
                    {
                        channel: x,
                        guild: i,
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
                guildChannelsVersion: i,
                voiceStates: l,
                selectedChannelId: r,
                selectedVoiceChannelId: a,
                optInEnabled: o,
                guildId: d,
            } = this.props;
        return (0, s.jsx)(
            nb,
            {
                guildId: d,
                guildChannels: n,
                guildChannelsVersion: i,
                sectionIndex: t,
                voiceStates: l,
                selectedChannelId: r,
                selectedVoiceChannelId: a,
                optInEnabled: o,
            },
            (function (e, t, n) {
                if (e === t.voiceChannelsSectionNumber) return "voice-channels-button";
                let { hasDivider: i, canHaveVoiceSummary: l } = nS(t, n, e);
                return `section-footer-${e}${i ? "-divider" : ""}${l ? "-voice-summary" : ""}`;
            })(t, n, o),
        );
    };
    renderTopUnread() {
        let { topMention: e, bottomUnread: t, bottomMention: n, isUnreadVisible: i } = this.state,
            { guildId: l, guildChannels: r, guildChannelsVersion: a } = this.props;
        return (0, s.jsx)("div", {
            className: np.Eo,
            children: (0, s.jsx)(sZ, {
                ref: this.unreadTopRef,
                textUnread: em.intl.string(em.t.FCRiT3),
                textMention: em.intl.string(em.t["8zH0LJ"]),
                hide: null == e && (i || null != t || null != n),
                className: np.Vq,
                barClassName: np.bu,
                guildId: l,
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
            { bottomMention: i, isUnreadVisible: l } = this.state;
        return (0, s.jsx)(sZ, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: em.intl.string(em.t.FCRiT3),
            textMention: em.intl.string(em.t["8zH0LJ"]),
            hide: null == i && l,
            className: np.di,
            barClassName: np.bu,
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
        if (e !== tG.PU) {
            if (null == t)
                return e === tG.HP
                    ? "favorites-header"
                    : e === n.recentsSectionNumber
                      ? "recents-header"
                      : e === n.voiceChannelsSectionNumber
                        ? "voice-channels"
                        : e === tG.bK
                          ? "uncategorized-header"
                          : n.getNamedCategoryFromSection(e)?.id;
            if (!n.isPlaceholderRow(e, t)) return n.getChannelFromSectionRow(e, t)?.channel?.id;
        }
    };
    renderList() {
        let { guildChannels: e, guildBanner: t, selectedGuildId: n, density: i } = this.props,
            l = {};
        (0, v.ai)(n) && (l["data-favorites"] = !0);
        let { ref: r, ...a } = this.context,
            o = 0;
        null != t && (o = 84);
        let d = "compact" === i ? 8 : 12;
        return (0, s.jsx)(g.sk, {
            children: (t) =>
                (0, s.jsx)(
                    m.OZ,
                    {
                        ref: this.setListRef,
                        className: np.XG,
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
                        ...l,
                    },
                    "guild-channels",
                ),
        });
    }
    testShouldSkipTutorial = () => {
        if (!tS.A.shouldShow("voice-conversations")) return;
        let { guildChannels: e } = this.props,
            t = e.getFirstVoiceChannel();
        if (null == t) return void t_.X8("voice-conversations");
        let n = this._list;
        if (null != n)
            for (let { section: e, row: i } of this.getSectionRowsFromChannel(t.id))
                n.isItemVisible(e, i) || t_.X8("voice-conversations");
    };
    render() {
        let { guildChannels: e, guildChannelsVersion: t, showNewUnreadsBar: n } = this.props;
        return (0, s.jsx)(en.V0, {
            children: (i) =>
                (0, s.jsx)(f.F, {
                    component: (0, s.jsx)(p.A, {
                        children: (0, s.jsx)(f.H, { id: i, children: em.intl.string(em.t.OGiMXJ) }),
                    }),
                    children: n
                        ? (0, s.jsxs)(r.Fragment, {
                              children: [
                                  (0, s.jsx)("div", {
                                      className: np.Eo,
                                      children: (0, s.jsx)(sz, {
                                          position: "top",
                                          guildChannels: e,
                                          guildChannelsVersion: t,
                                          jumpToVoiceChannels: this.jumpToVoiceChannels,
                                          jumpToChannel: this.jumpToChannel,
                                      }),
                                  }),
                                  this.renderList(),
                                  (0, s.jsx)(sz, {
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
let rj = (e) => {
    let { guildId: t, selectedChannelId: n, selectedVoiceChannelId: i } = e,
        l = (0, u.bG)([Q.Ay], () => Q.Ay.keyboardModeEnabled),
        { analyticsLocations: a } = (0, et.Ay)(ee.A.GUILD_CHANNEL_LIST),
        o = (0, u.bG)([L.A], () => L.A.getChannel(n)),
        h = (0, u.bG)([L.A], () => L.A.getChannel(i)),
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
            isEnabled: l,
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
            [tE.A, L.A, tg.A],
            () => {
                let t;
                return [
                    (t = (0, v.ai)(e)
                        ? tC.default
                              .keys(tg.A.getFavoriteChannels())
                              .map((e) => L.A.getChannel(e))
                              .filter(tf.Vq)
                              .filter((e) => e.isGuildStageVoice())
                        : tE.A.getChannels(e)).reduce((e, t) => {
                        let n = tE.A.getMutableParticipants(t.id, tx.ip.SPEAKER);
                        return ((e[t.id] = n.filter((e) => e.type === tx.wY.VOICE).map(tN)), e);
                    }, {}),
                    t.reduce((e, t) => {
                        let { id: n } = t;
                        return e + tE.A.getParticipantsVersion(n);
                    }, 0),
                ];
            },
            [e],
            tp.D,
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
                    (0, s.jsx)(tI.q, { containerRef: E.containerProps.ref, itemType: q }),
                    (0, s.jsx)(rR, {
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
function rv(e) {
    let t = (function (e) {
            var t, n;
            let i,
                l,
                s =
                    ((t = e.id),
                    (i = (0, tY.A)(t)),
                    (l = (0, tX.Ay)(t)),
                    !(0, u.bG)(
                        [O.A],
                        () => {
                            if (null == t) return !1;
                            let e = O.A.getGuild(t);
                            return e?.features.has(k.GuildFeatures.HUB) ?? !1;
                        },
                        [t],
                    ) &&
                        (i || l.length > 0)),
                r = (0, tU.W)(e.id),
                a = (0, tW.vz)(e.id),
                o = (0, ty.r)(e),
                d = (0, t$.jz)(e),
                c = (0, tV.d)(e.id),
                h = (0, tv.bG)([tO.h], () => tO.h.getNewMemberActions(e.id), [e.id]),
                A = (0, tQ.by)(e, "useGuildActionRows"),
                g = (0, tz.A)(e.id),
                m = (0, tP.jY)(e.id),
                f = (0, tk.ye)(e.id),
                p = ((n = e.id), (0, u.bG)([tB], () => tB.isComplete(n), [n])),
                C = (0, tD.fw)(e.id),
                E = (0, tq.Uq)(e.id, "useGuildActionRows"),
                x = [],
                N = e.features.has(k.GuildFeatures.HUB),
                _ = e.features.has(k.GuildFeatures.COMMUNITY),
                S = e.features.has(k.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
                I = (0, tr.A)(e.id);
            tJ.useConfig({ location: "useGuildActionRows" }).enabled;
            let b = to(e),
                G = (0, tZ.bW)(e.id, "useGuildActionRows"),
                R = (0, tT.C$)(e.id, "useGuildActionRows"),
                j = e.features.has(k.GuildFeatures.GAME_SERVERS),
                v = (0, tL.N)("useGuildActionRows"),
                [y] = (0, ed.kn)(R && v && !j ? [ei.M.EMPTY_GAME_SERVER_TAB] : [], void 0, !0);
            return (
                (N && x.push(t0.n.GUILD_HUB_HEADER_OPTIONS),
                !I ||
                    (0, tM.j)(e.id) ||
                    f ||
                    p ||
                    !tK.getConfig({ location: "useGuildActionRows" }).showSetupProgressRow)
                    ? !m && c && g && null != h && h.length > 0
                        ? x.push(t0.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
                        : e.premiumProgressBarEnabled && b > 0 && x.push(t0.n.GUILD_PREMIUM_PROGRESS_BAR)
                    : x.push(t0.n.GUILD_ONBOARDING_SETUP_PROGRESS),
                !N && c && x.push(t0.n.GUILD_HOME),
                E && x.push(t0.n.GUILD_SPACE),
                s && x.push(t0.n.GUILD_SCHEDULED_EVENTS),
                !N && _ && x.push(t0.n.CHANNELS_AND_ROLES),
                a && x.push(t0.n.GUILD_ROLE_SUBSCRIPTIONS),
                o && x.push(t0.n.GUILD_SHOP),
                d && x.push(t0.n.GUILD_GAME_SHOP),
                ((C && (_ || S)) || (r && e.features.has(k.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL))) &&
                    x.push(t0.n.GUILD_MOD_DASH_MEMBER_SAFETY),
                I && x.push(t0.n.GUILD_BOOSTS),
                G && x.push(t0.n.GUILD_OFFICIAL_MESSAGES),
                R && (j ? x.push(t0.n.GAME_SERVERS) : null != y && x.push(t0.n.GAME_SERVERS_EMPTY)),
                A && x.push(t0.n.GUILD_VIBEGRATIONS),
                x
            );
        })(e.guild),
        n = (0, u.cf)([tR.A], () => tR.A.getGuild(e.guildId, { guildActionRows: t })),
        { density: i } = (0, C.wR)();
    return (0, s.jsx)(rj, { ...e, ...n, density: i });
}
