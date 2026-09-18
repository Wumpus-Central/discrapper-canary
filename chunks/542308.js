(n.d(t, { B: () => rC, i: () => rp }), n(321073));
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
var eM = n(43105),
    eL = n(632015),
    eT = n(508770),
    eU = n(93675),
    eD = n(942857),
    eO = n(968176);
function eP(e) {
    let { guild: t, selected: n } = e,
        l = (0, eD.A)(),
        [i, a] = (0, ed.kn)(l ? [] : [el.M.GUILD_SPACE_COACHMARK], void 0, !0),
        o = i === el.M.GUILD_SPACE_COACHMARK,
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
                renderIcon: (e) => (0, s.jsx)(eL.f, { size: "md", color: "currentColor", className: e }),
                text: em.intl.string(em.t["04IVMq"]),
                selected: n,
                onClick: c,
                trailing: o ? (0, s.jsx)(eT.E, { type: "new", variant: "brand" }) : null,
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
    e1 = n(25525),
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
    e5 = r.memo(function (e) {
        let { guildId: t, selected: l } = e,
            i = (0, eJ.Ay)(t),
            { showHighlight: a, markAsDismissed: o } = (function () {
                let e = (0, e0.c)(eQ.C.GUILD_BOOST_TAB_BANNER),
                    t = null != e && "guildBoostTabBanner" === e.properties.properties.oneofKind,
                    [n, l] = (0, ed.Cc)(t ? el.M.GUILD_BOOST_TAB_HIGHLIGHT : null, e?.promotionId ?? "");
                return { showHighlight: n === el.M.GUILD_BOOST_TAB_HIGHLIGHT, markAsDismissed: l };
            })(),
            { showNewBadgeOnRow: d, dismissNewBadgeIfShown: c } = (0, eZ.A)(
                t,
                i?.indicator != null || i?.popout != null,
            ),
            A = r.useCallback(() => {
                (c(),
                    (0, eX.Zm)(t),
                    (0, e$.A)(t, ee.A.GUILD_POWERUPS_CHANNEL_LIST_ROW),
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
                    case eq.o.LEVEL_REACHED:
                        return (0, s.jsx)(ex.HW, { guildId: t, channelRowRef: g, ...i.popout });
                    case eq.o.PERKS_AVAILABLE:
                        return (0, s.jsx)(ex.UB, { guildId: t, channelRowRef: g, ...i.popout });
                    case eq.o.PERKS_PURCHASABLE:
                        return (0, s.jsx)(ex.lw, { guildId: t, channelRowRef: g, ...i.popout });
                    case eq.o.NEW_PERK_AVAILABLE:
                        return (0, s.jsx)(ex.bo, { guildId: t, channelRowRef: g, ...i.popout });
                    case eq.o.BOOST_TO_UNLOCK:
                        return (0, s.jsx)(ex.Gw, { guildId: t, channelRowRef: g, ...i.popout });
                    case eq.o.EXPIRING_PERK:
                        return (0, s.jsx)(ex.Mr, { guildId: t, channelRowRef: g, ...i.popout });
                    case eq.o.GAME_SERVER_HOSTING_AVAILABLE:
                    case eq.o.GAME_SERVER_HOSTING_GUILD_ELIGIBLE:
                        return (0, s.jsx)(ex.jz, { guildId: t, channelRowRef: g, ...i.popout });
                    case eq.o.GAME_SERVER_NEW_GAMES:
                        return (0, s.jsx)(ex.YX, { guildId: t, channelRowRef: g, ...i.popout });
                    case eq.o.GAME_SERVER_PRICING_CHANGE:
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
                                onScenePlay: S,
                                rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                            }),
                        }),
                    text: (0, s.jsx)("span", {
                        className: eK()({ [e3.A7]: i?.showUnread === !0 }),
                        children: em.intl.string(e1.default.yv3DJJ),
                    }),
                    selected: l,
                    onClick: A,
                    showUnread: i?.showUnread === !0,
                    trailing: d
                        ? (0, s.jsx)(ea.Lp, {
                              text: em.intl.string(em.t.y2b7CA),
                              color: h.A.colors.BACKGROUND_BRAND.css,
                          })
                        : (0, s.jsx)(e2, { indicator: i?.indicator }),
                }),
                E(),
            ],
        });
    });
var e7 = n(202091),
    e6 = n(834730),
    e4 = n(717421),
    e8 = n(442433),
    te = n(230135),
    tt = n(228366);
let tn = {};
class tl extends u.Ay.PersistedStore {
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
let ti = new tl(tt.h, {
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
            l = Object.values(ta.YV);
        return (
            n.concat(l).forEach((n) => {
                null == n.includedInLevel && (n.isEnabled?.(e.id) ?? !0) && (t += n.boostPrice);
            }),
            t
        );
    }, [e]);
}
var td = n(196577);
let tc = r.forwardRef((e, t) => {
    let { appliedBoostCount: n, maxBoostCount: l, premiumSubscriberCount: i, className: a } = e,
        o = n >= l,
        d = Math.min((n / l) * 100, 100),
        c = `calc(${d}% - 4px)`,
        [u, h] = (0, e4.z)(
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
            className: td.hQ,
            children: [
                (0, s.jsx)("div", { className: eK()(td.L$, a) }),
                (0, s.jsx)(e7.animated.div, { className: eK()(td.qB, { [td.mu]: d <= 5 }), style: u }),
                (0, s.jsxs)("div", {
                    className: td.FS,
                    children: [
                        (0, s.jsxs)("div", {
                            className: td.Ui,
                            children: [
                                (0, s.jsx)(e6.E, {
                                    className: td.Qq,
                                    variant: "text-xs/semibold",
                                    children: em.intl.string(e1.default.NI6Ihe),
                                }),
                                i >= l &&
                                    (0, s.jsx)(e6.E, {
                                        className: td.Qq,
                                        variant: "text-xs/semibold",
                                        children: "\uD83C\uDF89",
                                    }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: td.Ui,
                            children: [
                                (0, s.jsx)(e6.E, {
                                    className: eK()(td.Qq, td.ue),
                                    variant: "text-xs/semibold",
                                    children: o
                                        ? em.intl.formatToPlainString(e1.default["Ehpq+7"], { appliedBoostCount: n })
                                        : em.intl.formatToPlainString(e1.default["/rbPDs"], {
                                              appliedBoostCount: n,
                                              maxBoostCount: l,
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
    let { guild: t, withMargin: l } = e,
        i = to(t),
        a = (0, tr.A)(t.id),
        o = r.useCallback(() => {
            (0, e$.A)(t.id, ee.A.GUILD_BOOSTING_SIDEBAR_DISPLAY);
        }, [t.id]),
        d = (0, u.bG)([ti], () => ti.getCountForGuild(t.id) ?? 0);
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
        className: eK()(td.kL, { [td.aF]: l }),
        onContextMenu: c,
        children: (0, s.jsx)(tc, {
            appliedBoostCount: d,
            maxBoostCount: i,
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
    let { voiceState: t, userNick: n, user: l } = e,
        i = (0, tm.hz)(t, n);
    return { user: l, voiceState: t, nick: n, comparator: i };
}
var t_ = n(787541),
    tI = n(79858),
    tS = n(600761),
    tb = n(72314),
    tG = n(297469),
    tj = n(960755),
    tv = n(633965),
    tR = n(702841),
    ty = n(41200),
    tM = n(831617),
    tL = n(589603),
    tT = n(496767),
    tU = n(134413),
    tD = n(701785),
    tO = n(101611),
    tP = n(473529),
    tV = n(978165),
    tw = n(960253),
    tH = n(770666),
    tB = n(508654),
    tk = n(470452),
    tF = n(521427);
let tK = (0, n(945810).mj)({
    name: "2026-04-mobile-boost-progress-bar",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var tz = n(871123),
    tW = n(683180),
    tY = n(281405),
    tX = n(3026),
    tq = n(821609),
    tZ = n(499373),
    tJ = n(259678),
    t$ = n(847374),
    tQ = n(285796),
    t0 = n(983851),
    t1 = n(914430),
    t3 = n(47167),
    t2 = n(485947),
    t9 = n(970853),
    t5 = n(93055),
    t7 = n(349828),
    t6 = n(22277),
    t4 = n(551851),
    t8 = n(391507);
function ne(e) {
    e.stopPropagation();
}
function nt(e) {
    let { label: t, onClick: n, tabIndex: l } = e;
    return (0, s.jsx)(ei.m, {
        text: t,
        children: (0, s.jsx)(es.D, {
            className: eK()(t8.c9, t8.ih),
            onClick: n,
            tabIndex: l,
            role: "button",
            "aria-label": t,
            children: (0, s.jsx)(tZ.T, { size: "xs", color: "currentColor", className: t8.hs }),
        }),
    });
}
let nn = $(
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
                C = (0, t3.Ay)(l);
            t = null != h ? (c > h ? t8.mU : t8.TR) : t8.fx;
            let E = r.useCallback(() => {
                    f ? (0, t1.fh)(l.id) : (0, t1.Gv)(l.id);
                }, [l.id, f]),
                x = r.useCallback(
                    (e) => {
                        if ("null" !== l.id) {
                            let t = O.A.getGuild(l.getGuildId());
                            null != t &&
                                (0, e8.L3)(e, async () => {
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
                    let n = (0, u.bG)([tg.A], () => tg.A.autoAddJoinedThreads),
                        { isAtLimit: l } = (0, t5.ft)();
                    return n &&
                        l &&
                        null != t &&
                        (0, R.ai)(e.getGuildId()) &&
                        e.type === k.rbe.GUILD_CATEGORY &&
                        t.trim().toLowerCase() === t7.A.toLowerCase()
                        ? { label: em.intl.string(t6.default.WsUrMD), tooltip: em.intl.string(t6.default.dW9Kov) }
                        : null;
                })(l, C),
                S = (0, t9.A)(l);
            null == S && p && !o && (S = { label: em.intl.string(em.t["fUYU+j"]), perform: N });
            let { role: b, tabIndex: G, ...j } = (0, d.rm)(l.id),
                v = r.useRef(null),
                y = r.useRef(null),
                M = (0, s.jsxs)("li", {
                    className: t,
                    "data-dnd-name": C,
                    children: [
                        (0, s.jsx)(tJ.vN, {
                            focusTarget: v,
                            ringTarget: y,
                            offset: { left: 4, right: 4 },
                            children: (0, s.jsxs)("div", {
                                ref: y,
                                className: eK()(t8.Ki, t8.iE, { [t8.yZ]: f, [t8.SU]: m, [t8.vk]: !0 }),
                                onContextMenu: x,
                                children: [
                                    (0, s.jsxs)(es.D, {
                                        innerRef: v,
                                        className: t8.rb,
                                        tabIndex: G,
                                        ...j,
                                        onClick: E,
                                        "aria-label": em.intl.formatToPlainString(em.t.y5l3J2, { categoryName: C }),
                                        "aria-expanded": !f,
                                        focusProps: { enabled: !1 },
                                        children: [
                                            (0, s.jsx)(t2.A, {
                                                className: t8.UU,
                                                children: (0, s.jsx)(tX.A, { children: C }),
                                            }),
                                            null != _
                                                ? (0, s.jsx)("span", {
                                                      className: t8.qS,
                                                      children: (0, s.jsx)(ei.m, {
                                                          asContainer: !0,
                                                          text: _.tooltip,
                                                          children: (0, s.jsx)(eT.E, {
                                                              type: { text: _.label },
                                                              variant: "default",
                                                          }),
                                                      }),
                                                  })
                                                : null,
                                            A
                                                ? null
                                                : (0, s.jsx)(t$.a, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: t8.Kk,
                                                  }),
                                        ],
                                    }),
                                    (0, s.jsx)("div", {
                                        onClick: ne,
                                        className: t8.Y_,
                                        children:
                                            null != S
                                                ? (0, s.jsx)(nt, { label: S.label, onClick: S.perform, tabIndex: G })
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
    nl = r.memo(function (e) {
        let { name: t, onDismiss: n, className: l } = e;
        return (0, s.jsx)("li", {
            className: eK()(l, t8.fx),
            children: (0, s.jsxs)("div", {
                className: eK()(t8.Ki, t8._V),
                children: [
                    (0, s.jsx)("div", {
                        className: t8.rb,
                        children: (0, s.jsx)(t2.A, { className: t8.UU, children: (0, s.jsx)(tX.A, { children: t }) }),
                    }),
                    null != n
                        ? (0, s.jsx)(ei.m, {
                              asContainer: !0,
                              text: em.intl.string(em.t["5qNmsU"]),
                              children: (0, s.jsx)(es.D, {
                                  className: t8.r,
                                  onClick: n,
                                  children: (0, s.jsx)(tQ.a, { size: "md", color: "currentColor", className: t8.X8 }),
                              }),
                          })
                        : null,
                ],
            }),
        });
    }),
    ni = r.memo(function (e) {
        let { category: t } = e,
            n = (0, u.bG)([t4.A], () => t4.A.isVoiceCategoryCollapsed(t.guild.id)),
            l = r.useCallback(() => {
                var e, l;
                n
                    ? ((e = t.guild.id), tt.h.dispatch({ type: "VOICE_CATEGORY_EXPAND", guildId: e, expand: !0 }))
                    : ((l = t.guild.id), tt.h.dispatch({ type: "VOICE_CATEGORY_COLLAPSE", guildId: l, expand: !1 }));
            }, [t.guild.id, n]);
        return (0, s.jsx)("div", {
            className: t8.oA,
            children: (0, s.jsx)(tq.$, {
                variant: "secondary",
                fullWidth: !0,
                onClick: l,
                icon: t0.H,
                text: n ? em.intl.string(em.t["/eB9Bg"]) : em.intl.string(em.t.Q2gPWl),
            }),
        });
    }),
    ns = r.memo(function (e) {
        let { category: t, channel: n } = e,
            l = (0, u.bG)([t4.A], () => t4.A.isVoiceCategoryCollapsed(t.guild.id));
        return l || null == n || n.record.type === k.rbe.GUILD_CATEGORY
            ? l
                ? (0, s.jsx)("li", {
                      className: t8.fx,
                      children: (0, s.jsx)("div", {
                          className: eK()(t8.Ki, t8._V),
                          children: (0, s.jsx)(t2.A, {
                              className: t8.UU,
                              children: (0, s.jsx)(tX.A, { children: em.intl.string(em.t["V/u9Dy"]) }),
                          }),
                      }),
                  })
                : null
            : (0, s.jsx)("div", { style: { height: 16 } });
    }),
    nr = r.memo(function (e) {
        let { channel: t } = e,
            n = (0, t3.Ay)(t);
        return (0, s.jsx)("li", {
            className: t8.fx,
            children: (0, s.jsx)("div", {
                className: eK()(t8.Ki, t8._V),
                children: (0, s.jsx)(t2.A, { className: t8.UU, children: (0, s.jsx)(tX.A, { children: n }) }),
            }),
        });
    });
var na = n(728321),
    no = n(244083);
let nd = { origin: { x: -36, y: 7 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } };
var nc = n(906659);
let nu = r.memo(function (e) {
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
            (null != a && i.includes(a) && (t = (0, ek.xb)(l)), (0, ek.DD)(n.id, i, t));
        }, [n.id, a, l, i]),
        { density: c } = (0, C.wR)(),
        u = "compact" === c ? 8 : 12;
    switch (t) {
        case tG.PU:
            return (0, s.jsx)("div", { style: { height: u } });
        case tG.bK:
            if (n.features.has(k.GuildFeatures.HUB)) return null;
            return (0, s.jsx)("div", { style: { height: u } });
        case tG.HP:
            return (0, s.jsx)(nl, { name: em.intl.string(em.t.mlPMCy) });
        case l.recentsSectionNumber:
            return (0, s.jsx)(nl, { name: em.intl.string(em.t.gKcrqM), onDismiss: d });
        case l.voiceChannelsSectionNumber: {
            let e = l.getCategoryFromSection(l.voiceChannelsSectionNumber);
            if (null == e || e.isEmpty()) return null;
            let n = l.getChannelFromSectionRow(t, 0)?.channel;
            return (0, s.jsxs)(r.Fragment, {
                children: [(0, s.jsx)("div", { className: nc.ts }), (0, s.jsx)(ns, { category: e, channel: n })],
            });
        }
        case tG.TF: {
            let e = l.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, s.jsx)(nn, {
                channel: e.record,
                position: e.position,
                disableManageChannels: o,
                children: (0, s.jsx)(na.A, {
                    inlineSpecs: nd,
                    arrowAlignment: no.oN.TOP,
                    tutorialId: "organize-by-topic",
                    position: "right",
                }),
            });
        }
        default: {
            let e = l.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, s.jsx)(nn, { channel: e.record, position: e.position, disableManageChannels: o });
        }
    }
});
var nh = n(104171),
    nA = n(186369),
    ng = n(970812),
    nm = n(147036);
function nf(e, t, n) {
    return {
        hasDivider:
            !(function (e, t) {
                if (t === tG.PU) {
                    let t = e.getGuildActionSection().getRows();
                    return (
                        (1 === t.length && t[0] === tY.n.GUILD_PREMIUM_PROGRESS_BAR) ||
                        e.getGuildActionSection().isEmpty()
                    );
                }
                return 0 === e.getSections(!1)[t];
            })(e, n) &&
            (n === tG.PU ||
                ((0, R.ai)(e.id)
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
let np = r.memo(function (e) {
        let { guildChannels: t, guildChannelsVersion: n } = e,
            l = r.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
        return null == l ? null : (0, s.jsx)(ni, { category: l });
    }),
    nC = r.memo(function (e) {
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
            { hasDivider: h, canHaveVoiceSummary: A } = r.useMemo(() => nf(n, c, t), [n, c, t, l]),
            g = r.useMemo(() => (t === tG.PU ? null : n.getCategoryFromSection(t)), [n, t, l]),
            m = (0, M.jN)(a),
            { enableWaveformIcon: f } = (0, nA.b)(a, "ChannelListSectionFooter"),
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
                () => (0, nm.fK)({ channels: p, selectedChannelId: o, selectedVoiceChannelId: d, voiceStates: i }),
                [p, o, d, i],
            );
        if (t === n.voiceChannelsSectionNumber) return (0, s.jsx)(np, { guildChannels: n, guildChannelsVersion: l });
        let E = h ? (0, s.jsx)("div", { className: nc.ts }) : null;
        return A && 0 !== C.length
            ? (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)("div", {
                          className: nc.qz,
                          children: (0, s.jsx)(nh.Ay, {
                              renderIcon: !0,
                              users: C,
                              max: 8,
                              showUserPopout: !0,
                              guildId: a,
                              renderLeadingIcon: f
                                  ? (e) => (0, s.jsx)(ng.A, { color: "currentColor", className: eK()(e, ep.Gj) })
                                  : void 0,
                          }),
                      }),
                      E,
                  ],
              })
            : E;
    });
var nE = n(625903),
    nx = n(283973),
    nN = n(933832),
    n_ = n(435183),
    nI = n(698441),
    nS = n(855687),
    nb = n(816662),
    nG = n(446600),
    nj = n(616356);
function nv(e, t, n) {
    return null != t && !!t && !F(n, e.type);
}
function nR(e, t) {
    return null == t ? ep.fx : e > t ? ep.mU : ep.TR;
}
function ny(e) {
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
                  className: eK()(ep.Xs, i ? ep.Tf : void 0, r ? ep.bw : ep.UI),
                  onClick: function () {
                      n_.Ay.open(t.id);
                  },
                  tabIndex: l,
                  "aria-label": em.intl.string(em.t["3gUsJb"]),
                  children: (0, s.jsx)(nE.SettingsIcon, { size: "xs", color: "currentColor", className: ep.gE }),
              }),
          });
}
function nM(e) {
    let {
            channel: t,
            isDefaultChannel: l = !1,
            locked: i,
            tabIndex: a,
            forceShowButtons: o,
            hasChannelInfo: d = !1,
        } = e,
        c = (0, u.bG)([O.A], () => O.A.getGuild(t.getGuildId())),
        h = (0, u.bG)([nG.A], () => nG.A.getStageInstanceByChannel(t.id), [t.id]),
        A = (0, u.bG)([nI.Ay], () => nI.Ay.getActiveEventByChannel(t.id), [t.id]),
        g = (0, u.bG)([P.A], () => (0, nS.K)(P.A, c, t, h)),
        m = (0, u.bG)([], () =>
            t?.type === k.rbe.GUILD_VOICE ? em.intl.string(em.t["EE+P0H"]) : em.intl.string(em.t["0jeAXt"]),
        ),
        f = r.useRef(null);
    if (i || !g || t.isModeratorReportChannel() || t.isThread()) return null;
    let p = (0, s.jsx)(nx.R, { size: "xs", className: ep.gE, "aria-hidden": !0, color: "currentColor" });
    return (
        l &&
            (p = (0, s.jsx)(na.A, {
                childRef: f,
                tutorialId: "instant-invite",
                position: "left",
                children: (0, s.jsx)("div", { ref: f, children: p }),
            })),
        (0, s.jsx)(ei.m, {
            asContainer: !0,
            text: m,
            children: (0, s.jsx)(es.D, {
                className: eK()(ep.Xs, o ? ep.Tf : void 0, d ? ep.bw : ep.UI),
                onClick: function () {
                    if (null != c) {
                        let e = nj.A.getAllActiveStreams().filter(
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
function nL(e) {
    let { channel: t } = e;
    return (0, s.jsx)(ei.m, {
        asContainer: !0,
        text: em.intl.string(em.t["ROh4T+"]),
        children: (0, s.jsx)(es.D, {
            className: ep.Xs,
            onClick: function () {
                (0, nb.Ol)(t.guild_id, t.id);
            },
            "aria-label": em.intl.string(em.t["ROh4T+"]),
            children: (0, s.jsx)(er.P, { size: "xs", color: "currentColor", className: ep.gE }),
        }),
    });
}
function nT(e) {
    let { channel: t } = e;
    return (0, s.jsx)(ei.m, {
        asContainer: !0,
        text: em.intl.string(em.t["N2c/Un"]),
        children: (0, s.jsx)(es.D, {
            className: ep.Xs,
            onClick: function () {
                (0, nb.jA)(t.guild_id, t.id, !0, { section: k.JJy.CHANNEL_LIST });
            },
            "aria-label": em.intl.string(em.t["N2c/Un"]),
            children: (0, s.jsx)(nN.CheckmarkLargeIcon, { size: "xs", color: "currentColor", className: ep.gE }),
        }),
    });
}
class nU extends r.PureComponent {
    static defaultProps = { isDefaultChannel: !1 };
    renderEditButton() {
        return (0, s.jsx)(ny, { ...this.props });
    }
    renderInviteButton() {
        return (0, s.jsx)(nM, { ...this.props });
    }
    renderRemoveSuggestionButton() {
        return (0, s.jsx)(nL, { ...this.props });
    }
    renderAcceptSuggestionButton() {
        return (0, s.jsx)(nT, { ...this.props });
    }
    getClassName() {
        let { position: e, sortingPosition: t } = this.props;
        return nR(e, t);
    }
    isDisabled() {
        let { channel: e, sorting: t, sortingType: n } = this.props;
        return nv(e, t, n);
    }
}
var nD = n(166444),
    nO = n(790782);
let nP = $(function (e) {
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
        C = (0, t3.Ay)(m),
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
    let N = nR(i, c),
        _ = nv(m, o, d),
        I = (0, s.jsx)("div", {
            className: eK()(N, { [ep.r9]: _, [ep.wH]: p }),
            "data-dnd-name": C,
            children: (0, s.jsxs)(nD.Ay, {
                className: ep.Ki,
                channel: m,
                guild: t,
                selected: p,
                onContextMenu: x,
                forceInteractable: !0,
                resolvedUnreadSetting: nO.e.ONLY_MENTIONS,
                children: [
                    (0, s.jsx)(nM, { channel: m, tabIndex: g }),
                    (0, s.jsx)(ny, { channel: m, disableManageChannels: a, tabIndex: g }),
                ],
            }),
        });
    return (E && (I = A(h(I))), I);
});
var nV = n(34188),
    nw = n(733391),
    nH = n(832163),
    nB = n(831024),
    nk = n(44724),
    nF = n(849134),
    nK = n(770178),
    nz = n(307076);
let nW = Math.ceil(Math.sqrt(115200)),
    nY = (nW - 240) / 2,
    nX = r.forwardRef(function (e, t) {
        let { children: n } = e,
            [l, i] = r.useState(-1),
            a = r.useCallback((e) => {
                i(e.contentRect.width);
            }, []),
            o = (0, nK.w)(a, [], { fireOnMount: !0 }),
            [{ shineSpring: d }, c] = (0, e4.z)(() => ({
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
                        (0, s.jsx)(e7.animated.div, {
                            className: nz.q,
                            style: {
                                transform: d.to(
                                    (e) => `translateX(calc(${e * l}px + ${e * nW}px)) translateY(-50%) rotate(45deg)`,
                                ),
                            },
                        }),
                    ),
                [n, l, d],
            );
        return (
            r.useImperativeHandle(t, () => ({ onMouseEnter: u, onMouseLeave: h }), [u, h]),
            (0, s.jsx)("div", {
                className: nz.i,
                onMouseEnter: u,
                onMouseLeave: h,
                onFocus: u,
                onBlur: h,
                ref: o,
                style: { "--custom-shine-dimensions": "240px", "--custom-shine-rotated-dimensions-delta": `${nY}px` },
                children: A,
            })
        );
    });
var nq = n(371794),
    nZ = n(240248),
    nJ = n(998218),
    n$ = n(672812),
    nQ = n(427797);
let n0 = r.memo(function (e) {
    let { guild: t, selected: l } = e,
        i = r.useRef(null),
        a = r.useRef(null),
        o = (0, I.useHasAnyModalOpen)(),
        d = (0, u.bG)([eN.A], () => eN.A.hasLayers()),
        c = (0, eE.xr)((e) => e.fullScreenLayers.length > 0);
    r.useEffect(() => {
        (0, nw.Kh)(t.id);
    }, [t.id]);
    let A = (0, u.bG)([nH.A], () => nH.A.getAnnouncement(t.id)),
        g = A?.state === "success" ? A.announcement : void 0,
        [m, f] = (0, ed.x_)(el.M.GAME_SHOP_NEW_BADGE, t.id, g?.id ?? "", void 0, !0),
        p = m === el.M.GAME_SHOP_NEW_BADGE && null != g,
        C = (0, tz.nY)(t.id),
        E = (0, nB.u)({ surface: "storefront_badge", applicationId: C }),
        x = null;
    (p && (x = em.intl.string(em.t.y2b7CA)), null != E && (x = E.text));
    let [N, _] = (0, ed.x_)(el.M.GAME_SHOP_NEW_DROP_POPOVER, t.id, g?.id ?? ""),
        S = N === el.M.GAME_SHOP_NEW_DROP_POPOVER && null != g;
    r.useEffect(() => {
        l && (p && f(eA.i.INDIRECT_ACTION), S && _(eA.i.INDIRECT_ACTION));
    }, [f, _, l, p, S]);
    let b = r.useCallback(() => {
            (f(eA.i.TAKE_ACTION), _(eA.i.TAKE_ACTION));
            let e = (0, tz.mq)(t.id),
                n = nH.A.getStorefrontState(e)?.activePage ?? 0;
            (0, eu.pX)(k.BVt.CHANNELS_GAME_SHOP(t.id, n));
        }, [t.id, f, _]),
        G = r.useCallback(() => {
            (0, nk.X)({ guildId: t.id, forceFetch: S });
        }, [t.id, S]),
        j = r.useCallback(() => {
            _(eA.i.USER_DISMISS);
        }, [_]),
        v = r.useCallback(
            (e) => {
                null != t &&
                    (0, e8.L3)(e, async () => {
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
                    background: (0, s.jsx)("div", { className: nQ.D }),
                    innerClassName: nQ.Z,
                    ref: a,
                    id: `game-shop-${t.id}`,
                    renderIcon: (e) =>
                        (0, s.jsx)(nV.U, {
                            size: "custom",
                            color: "currentColor",
                            width: 20,
                            height: 20,
                            className: e,
                        }),
                    text: (0, s.jsx)(e6.E, {
                        variant: "text-md/medium",
                        className: n$.UU,
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
                                ? nJ.A.toURLSafe((0, nq.YE)(g.applicationId, g.assetId, 256, "webp"))
                                : void 0,
                        t =
                            null != g.backgroundImageAssetId
                                ? nJ.A.toURLSafe((0, nq.YE)(g.applicationId, g.backgroundImageAssetId, 256, "webp"))
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
                    if ((0, nZ.uJ)(e) && (0, nZ.uJ)(t)) return null;
                    return {
                        graphicSource: (0, nZ.uJ)(e) ? { type: "asset", src: t } : { type: "video", src: e },
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
                    ? (0, s.jsx)(nF.A, {
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
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(nX, { ref: i, children: y }), !o && !d && !c && L()] });
});
var n1 = n(740426),
    n3 = n(826673),
    n2 = n(591552),
    n9 = n(202776),
    n5 = n(454058),
    n7 = n(573163);
function n6(e) {
    let { guild: t, selected: l } = e,
        i = (0, n9.A)(t),
        a = (0, n3.HX)(el.M.CHANNEL_BROWSER_NEW_BADGE_NUX),
        o = (0, tR.yK)([n5.A], () =>
            Array.from(n5.A.getNewChannelIds(t.id)).filter((e) => n5.A.shouldIndicateNewChannel(t.id, e)),
        ),
        d = (0, tR.bG)([n7.Ay], () => n7.Ay.hasUnread(t.id, nO.P.GUILD_ONBOARDING_QUESTION)),
        c = o.length > tG.rR,
        u = (0, tR.bG)([n2.A, n7.Ay], () => {
            let e = n2.A.lastFetchedAt(t.id),
                n = n7.Ay.lastMessageId(t.id, nO.P.GUILD_ONBOARDING_QUESTION);
            if (null == n) return !1;
            let l = tC.default.extractTimestamp(n);
            return null != e && e > l;
        }),
        A = r.useCallback(() => {
            (0, eu.pX)(k.BVt.CHANNEL(t.id, i ? eh.VV.CUSTOMIZE_COMMUNITY : eh.VV.CHANNEL_BROWSER));
        }, [t.id, i]),
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
            l ||
            u ||
            (m = (0, s.jsx)(ea.Lp, {
                color: h.A.colors.BADGE_BACKGROUND_BRAND.css,
                text: em.intl.string(em.t.y2b7CA),
            })),
        (0, s.jsx)(ec.G, {
            id: `channels-${t.id}`,
            renderIcon: (e) => (0, s.jsx)(n1.k, { size: "md", color: "currentColor", className: e }),
            text: i ? em.intl.string(em.t.h9mGOP) : em.intl.string(em.t.et6wav),
            selected: l,
            onClick: A,
            onContextMenu: g,
            trailing: m,
        })
    );
}
var n4 = n(855473);
function n8(e) {
    let { guild: t, selected: n } = e;
    return (0, s.jsx)(ec.G, {
        id: `home-tab-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(n4.Z, { size: "md", color: "currentColor", className: e }),
        text: em.intl.string(em.t.VbpLyU),
        selected: n,
        onClick: function () {
            (0, eu.pX)(k.BVt.CHANNEL(t.id, eh.VV.GUILD_HOME));
        },
    });
}
var le = n(297264),
    lt = n(5373),
    ln = n(65995),
    ll = n(195702);
function li(e, t) {
    return (0, s.jsx)(e6.E, { variant: "text-xs/bold", color: "text-default", children: e }, t);
}
let ls = r.memo(function (e) {
    let { guild: t } = e,
        n = (0, u.bG)([tD.h], () => tD.h.getNewMemberActions(t.id), [t.id]),
        l = (0, u.bG)([ln.A], () => ln.A.getCompletedActions(t.id)),
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
                className: ll.G9,
                onClick: function () {
                    (0, eu.pX)(k.BVt.CHANNEL(t.id, eh.VV.GUILD_HOME));
                },
                children: [
                    (0, s.jsxs)("div", {
                        className: ll.A1,
                        children: [
                            (0, s.jsx)(le.D, { variant: "heading-sm/bold", children: em.intl.string(em.t.SnrR3x) }),
                            (0, s.jsxs)("div", {
                                className: ll.Ib,
                                children: [
                                    (0, s.jsx)(e6.E, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        className: ll.Cv,
                                        children: em.intl.format(em.t.eqZ1lW, {
                                            numberHook: li,
                                            total: a.toString(),
                                            completed: i.toString(),
                                        }),
                                    }),
                                    (0, s.jsx)(ts.A, {
                                        className: ll.UE,
                                        width: 16,
                                        height: 16,
                                        direction: ts.A.Directions.RIGHT,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, s.jsx)(lt.i, {
                        className: ll.hr,
                        foregroundGradientColor: [
                            h.A.unsafe_rawColors.GREEN_300.css,
                            h.A.unsafe_rawColors.GREEN_230.css,
                        ],
                        percent: (i / a) * 100 + 3,
                        animate: !0,
                    }),
                ],
            }),
            (0, s.jsx)("div", { role: "separator", className: ll.yF }),
        ],
    });
});
var lr = n(581925);
function la(e) {
    let { guild: t, selected: n } = e;
    return (0, s.jsx)(ec.G, {
        id: `official-messages-page-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(lr.L, { size: "md", color: "currentColor", className: e }),
        text: em.intl.string(em.t.xHEzFh),
        selected: n,
        onClick: function () {
            (0, eu.pX)(k.BVt.CHANNEL(t.id, eh.VV.GUILD_OFFICIAL_MESSAGES));
        },
    });
}
var lo = n(514179);
function ld(e) {
    let { guild: t, selected: l } = e;
    return (0, s.jsx)(ec.G, {
        id: `subscriptions-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(lo.A, { className: e }),
        text: em.intl.string(em.t["KzCF/6"]),
        selected: l,
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
var lc = n(506774),
    lu = n(95561),
    lh = n(289397),
    lA = n(486418),
    lg = n(575926),
    lm = n(440293),
    lf = n(174459),
    lp = n(634654),
    lC = n(888918);
function lE(e) {
    let { guildId: t, selected: n, handleClick: l } = e,
        i = (0, lm.w)(t),
        r = (0, tR.bG)([O.A], () => O.A.getGuild(t)),
        a = r?.features.has(k.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !0,
        o = "false" === lc.w.get(lp.bJ, "false"),
        d = (0, tR.bG)([Q.Ay], () => Q.Ay.useReducedMotion);
    return (0, s.jsx)(ec.G, {
        id: `shop-${t}`,
        className: eK()(lC.A2, { [lC.wH]: n, [lC.ST]: o }),
        innerClassName: lC.LE,
        renderIcon: (e) => (0, s.jsx)(lg.h, { width: 20, height: 20, className: eK()([e, lC.sV]) }),
        text: em.intl.string(em.t.al5EXL),
        selected: n,
        onClick: l,
        trailing: (0, s.jsxs)("div", {
            className: lC.ai,
            children: [
                d
                    ? (0, s.jsx)(ea.Lp, {
                          color: h.A.unsafe_rawColors.BRAND_260.css,
                          text: em.intl.string(em.t.y2b7CA),
                          className: lC.Ad,
                      })
                    : (0, s.jsx)("img", {
                          src: (0, lh.n)("server_products/storefront/money.gif"),
                          className: lC.TG,
                          alt: "",
                      }),
                n &&
                    (0, s.jsx)(es.D, {
                        className: lC.b,
                        onClick: function (e) {
                            (e.stopPropagation(),
                                (0, n3.Dr)(el.M.SERVER_SHOP_PHANTOM_PREVIEW),
                                lf.default.track(k.HAw.GUILD_SHOP_PREVIEW_CLICK, {
                                    ...(0, lu.H$)(t),
                                    action_taken: lp.hN.DISMISS_CHANNEL_ROW,
                                }),
                                (i && a) || (0, eu.bG)(k.BVt.CHANNEL(t, D.Ay.getDefaultChannel(t)?.id)));
                        },
                        "aria-label": em.intl.string(em.t.cpT0Cq),
                        children: (0, s.jsx)(tQ.a, { size: "xs", color: "currentColor" }),
                    }),
            ],
        }),
    });
}
function lx(e) {
    let { guild: t, selected: l } = e;
    function i() {
        (lc.w.set(lp.bJ, "true"), (0, eu.pX)(k.BVt.CHANNEL(t.id, eh.VV.GUILD_SHOP)));
    }
    return (0, lA.P)(t)
        ? (0, s.jsx)(lE, { guildId: t.id, selected: l, handleClick: i })
        : (0, s.jsx)(ec.G, {
              id: `shop-${t.id}`,
              renderIcon: (e) => (0, s.jsx)(lg.h, { width: 20, height: 20, className: e }),
              text: em.intl.string(em.t.al5EXL),
              selected: l,
              onClick: i,
              onContextMenu: function (e) {
                  null != t &&
                      (0, e8.L3)(e, async () => {
                          let { default: e } = await n.e("852565").then(n.bind(n, 345332));
                          return (n) => (0, s.jsx)(e, { ...n, guild: t });
                      });
              },
          });
}
var lN = n(308528),
    l_ = n(534890),
    lI = n(262763),
    lS = n(499211),
    lb = n(406704),
    lG = n(747926),
    lj = n(977997),
    lv = n(807632),
    lR = n(37411);
function ly(e) {
    let { thread: t, tabIndex: n } = e,
        l = (0, lv.YG)(t),
        i = (0, lv.IO)(t),
        r = (0, lb._M)(t);
    return l && i && r ? (0, s.jsx)(lM, { thread: t, tabIndex: n }) : null;
}
function lM(e) {
    let { thread: t, tabIndex: n } = e,
        l = (0, u.bG)([lj.A], () => lj.A.isInChannel(t.id), [t.id]),
        { needSubscriptionToAccess: i } = (0, lS.A)(t.id),
        a = r.useCallback(() => {
            lI.A.handleVoiceConnect({ channel: t, connected: l, needSubscriptionToAccess: i, locked: !1 });
        }, [t, l, i]),
        o = r.useCallback(() => {
            (0, lG.JA)(t, !0, lR.H9.CHANNEL_LIST);
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
                    children: (0, s.jsx)(t0.H, { size: "xs", color: "currentColor", className: ep.gE }),
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
                    children: (0, s.jsx)(l_.ChatIcon, { size: "xs", color: "currentColor", className: ep.gE }),
                }),
            }),
        ],
    });
}
var lL = n(897898),
    lT = n(152007);
function lU(e) {
    return null != e && e > 0;
}
var lD = n(405018),
    lO = n(428689),
    lP = n(525093);
function lV(e) {
    let { total: t, users: n, videoLimit: l } = e;
    return (0, s.jsxs)("div", {
        className: lP.iE,
        children: [
            (0, s.jsxs)(e6.E, {
                tag: "span",
                color: "text-subtle",
                variant: "text-xs/medium",
                className: eK()(lP.VV, { [lP.Ki]: l, [lP.$G]: n >= 100 }),
                children: [
                    l ? (0, s.jsx)(lO.VideoIcon, { size: "md", color: "currentColor", className: lP.LB }) : null,
                    n.toString().padStart(2, "0"),
                ],
            }),
            (0, s.jsx)(e6.E, {
                tag: "span",
                color: "text-subtle",
                variant: "text-xs/medium",
                className: eK()(lP.X5, { [lP.$G]: t >= 100 }),
                children: t.toString().padStart(2, "0"),
            }),
        ],
    });
}
function lw(e) {
    let { channel: t, video: n, userCount: l } = e,
        { limit: i } = (0, lD.A)(t),
        r = -1,
        a = !1;
    return (
        t.userLimit > 0 && (r = t.userLimit),
        n && i > 0 && ((a = r < 0 || i < r), (r = r > 0 ? Math.min(r, i) : i)),
        (0, s.jsx)(lV, { users: l, total: r, videoLimit: a })
    );
}
var lH = n(146630);
function lB(e) {
    let { mentionsCount: t, isMentionLowImportance: n } = e;
    return (0, s.jsx)("div", {
        className: lH.R,
        "aria-hidden": !0,
        children: (0, s.jsx)(ea.hV, {
            count: t,
            color: n ? h.A.colors.BACKGROUND_MOD_STRONG.css : h.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
        }),
    });
}
var lk = n(588224),
    lF = n(447199);
function lK(e) {
    let { thread: t, countInVoice: n, hasVideo: l, mentionCount: i, isMentionLowImportance: r } = e,
        a = n > 0 && t.userLimit > 0,
        o = lU(i);
    return a || o
        ? (0, s.jsxs)("div", {
              className: ep.yW,
              children: [
                  a ? (0, s.jsx)(lw, { userCount: n, video: l, channel: t }) : null,
                  o ? (0, s.jsx)(lB, { mentionsCount: i, isMentionLowImportance: r }) : null,
              ],
          })
        : null;
}
function lz(e) {
    let { style: t, withGuildIcon: n, inverted: l } = e,
        i = { className: eK()(lF.GI, { [lF.a7]: n }, { [lF.BJ]: l }), style: t },
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
let lW = r.memo(function (e) {
        let { thread: t, isSelectedChannel: l, isSelectedVoice: i, isLast: a, withGuildIcon: o } = e,
            c = (0, u.bG)([tm.Ay], () => tm.Ay.getVoiceStatesForChannel(t), [t]),
            h = (0, u.bG)([lj.A], () => lj.A.hasVideo(t.id)),
            A = (0, t3.Ay)(t),
            {
                unread: g,
                mentionCount: m,
                isMentionLowImportance: f,
            } = (0, u.cf)([n7.Ay], () => ({
                unread: n7.Ay.hasUnread(t.id),
                mentionCount: n7.Ay.getMentionCount(t.id),
                isMentionLowImportance: n7.Ay.getIsMentionLowImportance(t.id),
            })),
            p = (0, u.bG)([lT.A], () => lT.A.isMuted(t.id)),
            C = r.useCallback(
                (e) => {
                    (0, lG.JA)(t, !e.shiftKey, lR.H9.CHANNEL_LIST);
                },
                [t],
            ),
            E = r.useCallback(() => {
                lN.A.preload(t.guild_id, t.id);
            }, [t.guild_id, t.id]),
            x = r.useCallback(
                (e) => {
                    (0, lL.A)(e, t);
                },
                [t],
            ),
            N = r.useCallback(
                (e) => {
                    let l = T.A.getChannel(t.id);
                    null != l &&
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
            className: eK()(ep.fx, { [ep.wH]: l }),
            children: [
                (0, s.jsx)(lz, { withGuildIcon: o }),
                a
                    ? null
                    : (0, s.jsx)(lz, {
                          withGuildIcon: o,
                          inverted: !0,
                          style: { transform: "rotateX(180deg) translateY(-9px)" },
                      }),
                (0, s.jsx)(tJ.vN, {
                    focusTarget: b,
                    ringTarget: b,
                    offset: { top: 2, bottom: 2, right: 4 },
                    children: (0, s.jsxs)("div", {
                        className: eK()(ep.Ki, n$.iE, n$.ZS, {
                            [n$.J1]: l,
                            [n$.F4]: !l && p,
                            [n$.V2]: !p && !l && g,
                            [n$.lY]: o,
                        }),
                        onMouseDown: E,
                        onContextMenu: N,
                        children: [
                            !g || p || l ? null : (0, s.jsx)("div", { className: eK()(n$.gy, n$.WS) }),
                            (0, s.jsx)(es.D, {
                                ...S,
                                innerRef: b,
                                className: n$.nf,
                                onClick: C,
                                onAuxClick: x,
                                "aria-label": G,
                                focusProps: { enabled: !1 },
                                children: (0, s.jsxs)("div", {
                                    className: eK()(n$.Y5, n$.__invalid_threadMainContent),
                                    children: [
                                        (0, s.jsx)(e6.E, {
                                            variant: "text-sm/medium",
                                            color: "none",
                                            className: n$.UU,
                                            children: (0, s.jsx)(tX.A, { "aria-hidden": !0, children: A }),
                                        }),
                                        (0, s.jsxs)("div", {
                                            className: n$.Y_,
                                            onClick: nD.dG,
                                            onKeyDown: nD.dG,
                                            children: [
                                                (0, s.jsx)(lK, {
                                                    thread: t,
                                                    countInVoice: _,
                                                    hasVideo: h,
                                                    mentionCount: m,
                                                    isMentionLowImportance: f,
                                                }),
                                                (0, s.jsx)(ly, { thread: t, tabIndex: S.tabIndex }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                }),
                (0, s.jsx)(lk.A, {
                    channel: t,
                    collapsed: !i && 1 !== c.length,
                    collapsedMax: 6,
                    voiceStates: c,
                    isThread: !0,
                }),
            ],
        });
    }),
    lY = r.memo(function (e) {
        let { channel: t, selectedChannel: n, selectedVoiceChannelId: l, sortedThreadIds: i, withGuildIcon: r } = e,
            a = (0, t3.Ay)(t),
            { density: o } = (0, C.wR)(),
            d = (0, u.yK)([T.A], () => i.map((e) => T.A.getChannel(e)).filter(tf.Vq), [i]),
            c = (0, u.bG)([tm.Ay], () => {
                let e = d[d.length - 1];
                if (null == e) return 0;
                let t = tm.Ay.getVoiceStates(e.guild_id)[e.id];
                return null == t || 0 === t.length ? 0 : l !== e.id ? 40 : 32 * t.length + 8;
            });
        return (0, s.jsx)("li", {
            className: lF.kL,
            children: (0, s.jsxs)("ul", {
                role: "group",
                "aria-label": em.intl.formatToPlainString(em.t.EiyIi6, { channelName: a }),
                children: [
                    (0, s.jsx)("div", {
                        className: eK()(lF.eh, { [lF.ET]: r }),
                        style: { bottom: ("cozy" === o ? 28 : 24) + c },
                    }),
                    d.map((e, t) =>
                        (0, s.jsx)(
                            lW,
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
var lX = n(922016),
    lq = n(367513),
    lZ = n(296216),
    lJ = n(963027),
    l$ = n(202384),
    lQ = n(51758),
    l0 = n(139033),
    l1 = n(305866),
    l3 = n(123292),
    l2 = n(830215),
    l9 = n(315982),
    l5 = n(480900),
    l7 = n(557722),
    l6 = n(834942),
    l4 = n(287809),
    l8 = n(53516),
    ie = n(648580),
    it = (((l = {})[(l.VOICE = 0)] = "VOICE"), l);
let il = function (e) {
    let { type: t, guildId: l, closePopout: i } = e,
        r = (0, en.GV)(),
        a = (0, u.bG)([l6.A], () => l6.A.getCheck(l), [l]),
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
        : (0, s.jsxs)(l1.l, {
              className: ie.kL,
              "aria-labelledby": r,
              children: [
                  (0, s.jsx)("img", { alt: "", className: ie.Sl, src: n(303528) }),
                  (0, s.jsxs)("div", {
                      className: ie.Qs,
                      children: [
                          (0, s.jsx)(le.D, { variant: "heading-md/semibold", id: r, children: g }),
                          (0, s.jsx)(e6.E, { color: "text-default", variant: "text-sm/normal", children: m }),
                          (0, s.jsxs)("div", {
                              className: ie.UD,
                              children: [
                                  null != f
                                      ? (0, s.jsx)("div", {
                                            "data-button-hoisted-classname-wrapper": !0,
                                            className: ie.FS,
                                            children: (0, s.jsx)(tq.$, {
                                                variant: "primary",
                                                text: f,
                                                onClick: function () {
                                                    (o
                                                        ? l9.R()
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
                                                                            reason: l7.d.GUILD_PHONE_REQUIRED,
                                                                            ...t,
                                                                        });
                                                                },
                                                                { modalKey: l8.V },
                                                            )
                                                          : d
                                                            ? (l2.A.verifyResend(),
                                                              (0, l0.A)({
                                                                  title: em.intl.string(em.t.LykQYk),
                                                                  subtitle: em.intl.format(em.t.azKEPy, {
                                                                      email: l4.default.getCurrentUser()?.email,
                                                                  }),
                                                              }))
                                                            : h && null != A && (0, l5.b)(A, l),
                                                        i());
                                                },
                                            }),
                                        })
                                      : null,
                                  o || c || d
                                      ? (0, s.jsx)(l3.Q, {
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
var ii = n(824865),
    is = n(378570),
    ir = n(790535),
    ia = n(113783),
    io = n(96566),
    id = n(280450),
    ic = n(312006),
    iu = n(505543),
    ih = n(994500),
    iA = n(685399),
    ig = n(475889),
    im = n(693879),
    ip = n(435470),
    iC = n(35275),
    iE = n(300596);
function ix(e) {
    let { locked: t } = e;
    return (0, s.jsx)("div", {
        className: eK()(ep.Xs, iE.U),
        children: (0, s.jsx)(iC.A, {
            className: ep.gE,
            color: t ? h.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css : void 0,
        }),
    });
}
var iN = n(863005),
    i_ = n(669715),
    iI = n(769015),
    iS = n(217223);
function ib(e) {
    let { className: t, embeddedApps: n, muted: l } = e;
    if (n.length <= 0) return null;
    {
        if (1 === n.length)
            return (0, s.jsx)("div", {
                className: eK()(iS.kL, t, l && iS.F4),
                children: (0, s.jsx)(iI.A, { game: n[0].application, className: iS.wK }),
            });
        let e = n.length - 1;
        return (0, s.jsxs)("div", {
            className: eK()(iS.kL, t, l && iS.F4),
            children: [
                (0, s.jsx)(iI.A, { game: n[0].application, className: iS.wK }),
                2 === n.length
                    ? (0, s.jsx)(iI.A, { game: n[1].application, className: iS.wK })
                    : (0, s.jsx)(e6.E, {
                          className: iS.ju,
                          variant: "text-xs/bold",
                          color: "interactive-text-active",
                          children: `+${e}`,
                      }),
            ],
        });
    }
}
var iG = n(905695);
function ij(e) {
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
        m = (0, u.bG)([n7.Ay], () => n7.Ay.getMentionCount(t.id)),
        f = (0, u.bG)([n7.Ay], () => n7.Ay.getIsMentionLowImportance(t.id)),
        p = (0, iA.Ay)(t),
        C = (0, u.bG)([P.A], () => !P.A.can(k.xBc.CONNECT, t)),
        E = (0, ig.H)(t),
        x = (0, u.bG)([lj.A], () => lj.A.hasVideo(t.id)),
        N = (0, io.qT)(t.id) && t.isGuildStageVoice(),
        _ = (function (e) {
            let { channel: t, locked: n, video: l, selected: i } = e;
            return (
                (function (e) {
                    let { channel: t, video: n, considerMaxStageVoiceUserLimit: l = !0 } = e,
                        { limit: i } = (0, lD.A)(t),
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
        I = (0, u.bG)([iN.A], () => iN.A.getNewThreadCount(t.guild_id, t.id)),
        S = (0, ip.ed)(t.guild_id, t.id),
        b = (0, u.bG)([O.A], () => O.A.getGuild(t.guild_id)?.features.has(k.GuildFeatures.COMMUNITY) ?? !1);
    if (lU(m)) return (0, s.jsx)(lB, { mentionsCount: m, isMentionLowImportance: f });
    if (o) return (0, s.jsx)(ix, { locked: d });
    if (c)
        return (0, s.jsx)(ea.Lp, { text: em.intl.string(em.t.y2b7CA), color: h.A.colors.BADGE_BACKGROUND_BRAND.css });
    if (!A && g === nO.e.ALL_MESSAGES && t.isForumLikeChannel() && null != I && I > 0)
        return (0, s.jsx)(e6.E, {
            variant: "text-xs/semibold",
            color: "text-brand",
            className: iG.O,
            children: em.intl.format(em.t.GkAbqY, { count: (0, ea.Gu)(I) }),
        });
    if (!A && t.isForumLikeChannel() && null != S && S > 0)
        return (0, s.jsx)(e6.E, { variant: "text-xs/semibold", color: "text-muted", children: (0, ea.Gu)(S) });
    let G = i?.length ?? 0;
    return null != r && r && _
        ? (0, s.jsx)(lw, { userCount: G, video: x || N, channel: t })
        : l && (0, i_.t)(i) && b
          ? (0, s.jsx)(ea.Lp, { text: em.intl.string(em.t.dI3q4h), color: h.A.unsafe_rawColors.RED_400.css })
          : null != E
            ? (0, s.jsx)(im.z, { textColor: "text-feedback-positive", entry: { start: E } })
            : null != a && a && p.length > 0
              ? (0, s.jsx)(ib, { embeddedApps: p, muted: A })
              : null;
}
var iv = n(714619);
class iR extends nU {
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
        return (0, nm.Pd)(e, lj.A, O.A);
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
        (null != r && (0, lQ.V)(r) && (0, l$.Ze)(r),
            l && this.setState({ shouldShowGuildVerificationPopout: !0 }),
            t ||
                n ||
                e.isRoleSubscriptionTemplatePreviewChannel() ||
                (s ? lq.A.updateChatOpen(e.id, !0) : (0, ir.av)(e)),
            __OVERLAY__ || (0, is.iN)(e.id, i ? { source: ii.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0));
    };
    handleClickChat = () => {
        let { channel: e, locked: t, isSuggestedSection: n } = this.props;
        __OVERLAY__ || t || (0, is.iN)(e.id, n ? { source: ii.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0);
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            l = O.A.getGuild(t.getGuildId());
        null != l &&
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
        return (0, s.jsx)(lk.A, { channel: e, voiceStates: l, collapsed: t, tabIndex: n, numAudience: i });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        if (t)
            return (0, s.jsx)(il, {
                type: it.VOICE,
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
                    className: eK()(ep.Xs, n ? ep.Tf : null),
                    onClick: () => {
                        (lq.A.updateChatOpen(e.id, !0), this.handleClickChat());
                    },
                    "aria-label": em.intl.string(em.t.ZXxLQg),
                    children: (0, s.jsx)(l_.ChatIcon, { size: "xs", color: "currentColor", className: ep.gE }),
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
        return null == e ? null : (0, s.jsx)(tX.A, { children: e });
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
                className: eK()(this.getModeClass(), { [ep.r9]: this.isDisabled() }),
                "data-dnd-name": (0, t3.m1)(e, l4.default, ih.A),
                children: [
                    (0, s.jsx)(lX.Y, {
                        targetElementRef: this.channelItemRef,
                        position: "right",
                        renderPopout: this.renderPopout,
                        spacing: 17,
                        onRequestClose: this.closeGuildVerificationPopout,
                        shouldShow: C,
                        children: () =>
                            (0, s.jsx)(ei.m, {
                                text: this.getTooltipText(),
                                children: (0, s.jsxs)(nD.Ay, {
                                    ref: this.channelItemRef,
                                    className: ep.Ki,
                                    iconClassName: eK()({ [iv.G]: null != u }),
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
                                    "aria-label": (0, lJ.Ay)({
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
let iy = $((0, lZ.F)(iR));
function iM(e) {
    var t;
    let n,
        l,
        { guild: i, channel: r, disableSorting: a, isFavoriteCategory: o, collapsed: d, voiceStates: c } = e,
        h = (0, u.cf)([n7.Ay], () => ({ unread: n7.Ay.hasUnread(r.id), mentionCount: n7.Ay.getMentionCount(r.id) })),
        A = (0, u.bG)([w.Ay], () => w.Ay.resolveUnreadSetting(r)),
        g = (0, u.cf)([T.A, l6.A, P.A], () => {
            let e = T.A.getChannel(r.parent_id),
                t = l6.A.getCheck(r.guild_id);
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
            (n = (0, iu.A)(t)),
            (l = (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return (0, u.cf)(
                    [ic.Ay, id.default],
                    () => {
                        let n = id.default.getId();
                        return ic.Ay.getPermissionsForUser(n, e, t);
                    },
                    [e, t],
                );
            })(t, !0).moderator),
            !n && l ? 1 : 0),
        p = (0, u.bG)([nG.A], () => nG.A.getStageInstanceByChannel(r.id), [r.id]),
        C = (0, ia.zy)(r.id, tx.ip.AUDIENCE),
        { isSubscriptionGated: E, needSubscriptionToAccess: x } = (0, lS.A)(r.id),
        N = (0, u.bG)([w.Ay], () => w.Ay.isFavorite(i.id, r.id)),
        _ = (0, io.xn)(r.id),
        I = ij({
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
    return (0, s.jsx)(iy, {
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
function iL(e, t) {
    let n = t.getGuildId();
    if (null == n) throw Error("TextChannel, preloadChannel: Channel does not have a guildId");
    lN.A.preload(n, t.id);
}
let iT = $(
        class extends nU {
            handleContextMenu = (e) => {
                let { channel: t } = this.props,
                    l = O.A.getGuild(t.getGuildId());
                null != l &&
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
                        className: eK()(this.getClassName(), { [ep.r9]: this.isDisabled() }),
                        "data-dnd-name": (0, t3.m1)(e, l4.default, ih.A),
                        children: (0, s.jsxs)(nD.Ay, {
                            className: ep.Ki,
                            channel: e,
                            selected: t,
                            onClick: this.handleClick,
                            onMouseDown: iL,
                            onContextMenu: this.handleContextMenu,
                            connectDragPreview: r ? i : null,
                            "aria-label": (0, lJ.Ay)({ channel: e }),
                            resolvedUnreadSetting: nO.e.ONLY_MENTIONS,
                            children: [this.renderInviteButton(), this.renderEditButton()],
                        }),
                    });
                return r ? n(l(a)) : a;
            }
        },
    ),
    iU = r.memo(function (e) {
        let { channel: t, guild: n, disableSorting: l } = e,
            i = (0, u.cf)([T.A, P.A], () => {
                let e = T.A.getChannel(t.parent_id);
                return {
                    canManageChannel: P.A.can(k.xBc.MANAGE_CHANNELS, t),
                    canReorderChannel:
                        !0 !== l && null != e ? P.A.can(k.xBc.MANAGE_CHANNELS, e) : P.A.can(k.xBc.MANAGE_CHANNELS, n),
                };
            });
        return (0, s.jsx)(iT, { ...i, ...e });
    });
var iD = n(172218),
    iO = n(811024),
    iP = n(323073);
function iV(e) {
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
var iw = n(3322),
    iH = n(696451),
    iB = n(763827),
    ik = n(56059),
    iF = n(163328),
    iK = n(778712),
    iz = n(730134),
    iW = n(707539),
    iY = n(486020),
    iX = n(98098);
function iq(e) {
    let { channel: t } = e,
        l = (0, u.yK)([iN.A, n7.Ay, P.A], () => {
            let e = iN.A.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
            return o()(iN.A.getActiveJoinedThreadsForParent(t.guild_id, t.id))
                .values()
                .map((e) => e.channel)
                .concat(o().values(iN.A.getActiveUnjoinedThreadsForParent(t.guild_id, t.id)))
                .filter((t) => !(t.id in e) && P.A.can(k.xBc.VIEW_CHANNEL, t))
                .sort((e, t) => {
                    let n = n7.Ay.lastMessageId(e.id),
                        l = n7.Ay.lastMessageId(t.id);
                    return tC.default.compare(n, l);
                })
                .reverse()
                .value();
        }),
        i = t.isForumLikeChannel() ? 5 : 3,
        a = t.isForumLikeChannel() ? ik.b : iF.y;
    return (
        r.useEffect(() => {
            (0, iW.TE)();
        }, []),
        (0, s.jsxs)("div", {
            className: iX.SW,
            children: [
                (0, s.jsx)(e6.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: iX.DD,
                    children: t.isForumLikeChannel() ? em.intl.string(em.t.ioVdO2) : em.intl.string(em.t.VNYs2v),
                }),
                (0, s.jsxs)("div", {
                    className: iX.p_,
                    children: [
                        l
                            .slice(0, t.isForumLikeChannel() ? l.length : i)
                            .map((e) => (0, s.jsx)(iZ, { thread: e }, e.id))
                            .filter((e) => r.isValidElement(e))
                            .slice(0, i),
                        (0, s.jsxs)(es.D, {
                            className: iX.nM,
                            onClick: function () {
                                t.isForumLikeChannel()
                                    ? (0, is.iN)(t.id)
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
                                    className: iX.R4,
                                    children: (0, s.jsx)(a, { size: "custom", className: iX.Kk }),
                                }),
                                (0, s.jsx)("div", {
                                    className: iX.Pf,
                                    children: (0, s.jsx)(e6.E, {
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
function iZ(e) {
    let { thread: t } = e,
        n = (0, u.bG)([l4.default], () => l4.default.getUser(t.ownerId)),
        l = (0, iW.JO)(t);
    return (0, s.jsxs)(es.D, {
        className: iX.nM,
        onClick: function (e) {
            (0, lG.JA)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, lR.H9.POPOUT);
        },
        children: [
            (0, s.jsx)("div", {
                className: iX.R4,
                children:
                    null == n
                        ? (0, s.jsx)("img", {
                              className: iX.my,
                              src: iY.Ay.getDefaultAvatarURL(void 0, void 0),
                              alt: "",
                          })
                        : (0, s.jsx)(iz.A, { className: iX.my, user: n, size: iK._3.SIZE_16 }),
            }),
            (0, s.jsxs)("div", {
                className: iX.Pf,
                children: [
                    (0, s.jsx)(e6.E, { className: iX.UU, variant: "text-sm/normal", color: "none", children: t.name }),
                    (0, s.jsx)(e6.E, { variant: "text-sm/normal", color: "text-muted", children: "\u2022" }),
                    (0, s.jsx)(e6.E, {
                        className: iX.vE,
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: (0, iW.aK)(l),
                    }),
                ],
            }),
        ],
    });
}
var iJ = n(138298),
    i$ = n(940382);
function iQ(e) {
    let { channel: t, isSuggestedSection: n } = e;
    return (0, s.jsx)(ei.m, {
        asContainer: !0,
        text: em.intl.string(em.t.ZXxLQg),
        children: (0, s.jsx)(es.D, {
            className: ep.Xs,
            onClick: () => {
                (iJ.A.openChannelAsSidebar({
                    guildId: t.getGuildId(),
                    channelId: t.id,
                    baseChannelId: t.id,
                    details: { type: i$.kk.CHAT },
                }),
                    (0, is.iN)(t.id, n ? { source: ii.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0));
            },
            "aria-label": em.intl.string(em.t.ZXxLQg),
            children: (0, s.jsx)(l_.ChatIcon, { size: "xs", color: "currentColor", className: ep.gE }),
        }),
    });
}
var i0 = n(364522),
    i1 = n(302959),
    i3 = n(35903),
    i2 = n(970928),
    i9 = n(427262),
    i5 = n(641635);
let i7 = nh.DN.SIZE_24;
function i6(e) {
    let { activity: t, embeddedApp: n } = e,
        l = t?.assets,
        i = t?.application_id;
    if (null == l || (null == l.large_image && null == l.small_image)) {
        let e = iY.Ay.getApplicationIconURL({ id: n.application.id, icon: n.application.icon }),
            t = n.application.name;
        return (0, s.jsx)(ei.m, {
            text: t,
            position: "top",
            asContainer: !0,
            children: (0, s.jsx)("img", { alt: t, src: e, className: i5.P3 }),
        });
    }
    let r = l.large_image ?? l.small_image;
    return null != r
        ? (0, s.jsx)("img", { alt: l.large_text ?? "", src: (0, i2.uD)(i, r, [128, 128]), className: i5.P3 })
        : null;
}
function i4(e) {
    let { activity: t, embeddedApp: n, channel: l } = e,
        i = Array.from(n.embeddedActivity.userIds),
        r = (0, u.yK)([l4.default], () => i.map((e) => l4.default.getUser(e)).filter(tf.Vq));
    return (0, s.jsx)("div", {
        className: i5.ec,
        children: (0, s.jsxs)("div", {
            className: i5.Wh,
            children: [
                (0, s.jsx)(i6, { activity: t, embeddedApp: n }),
                (0, s.jsxs)("div", {
                    className: i5.X0,
                    children: [
                        (0, s.jsx)(le.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            className: i5.wx,
                            lineClamp: 1,
                            children: n.application.name,
                        }),
                        t?.details != null &&
                            "" !== t.details &&
                            (0, s.jsx)(e6.E, {
                                variant: "text-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.details,
                            }),
                        t?.state != null &&
                            "" !== t.state &&
                            (0, s.jsx)(e6.E, {
                                variant: "text-xs/normal",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.state,
                            }),
                        i.length > 0 &&
                            (0, s.jsx)(nh.Ay, {
                                className: i5.TN,
                                guildId: l.guild_id,
                                users: r,
                                size: i7,
                                max: 7,
                                renderUser: function (e) {
                                    if (null == e || e === nh.mt) return null;
                                    let t = i9.Ay.getName(e);
                                    return (0, s.jsx)(
                                        ei.m,
                                        {
                                            asContainer: !0,
                                            text: t,
                                            position: "bottom",
                                            children: (0, s.jsx)("img", {
                                                src: e.getAvatarURL(l.guild_id, i7),
                                                alt: t,
                                                className: i5.my,
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
var i8 = n(584960);
function se(e) {
    let { channel: t, presenceActivity: n, embeddedApp: l, onAction: i } = e,
        r = Array.from(l.embeddedActivity.userIds),
        a = (0, u.bG)([l4.default], () => l4.default.getUser(r[0]));
    return null == a
        ? null
        : (0, s.jsxs)("div", {
              className: i8.Eb,
              children: [
                  (0, s.jsx)("div", {
                      className: i8.Il,
                      children: (0, s.jsx)(i4, { activity: n, embeddedApp: l, channel: t }),
                  }),
                  (0, s.jsx)("div", {
                      className: i8.M4,
                      children: (0, s.jsx)(i3.A, {
                          type: i1.M.VOICE_CHANNEL,
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
var st = n(713654),
    sn = n(744399);
function sl(e) {
    let { channel: t } = e,
        n = (0, u.bG)([O.A], () => O.A.getGuild(t.guild_id)),
        l = (0, t3.Ay)(t),
        i = (0, st.gU)(t, n);
    return null == i
        ? null
        : (0, s.jsxs)("div", {
              className: sn.hY,
              children: [
                  (0, s.jsx)(i, { className: sn.p }),
                  (0, s.jsx)(e6.E, {
                      variant: "text-md/semibold",
                      color: "interactive-text-default",
                      className: sn.HA,
                      children: l,
                  }),
              ],
          });
}
var si = n(220650);
function ss(e) {
    let { channel: t, onAction: n } = e,
        l = (0, iA.Ay)(t),
        i = Array.from((0, iA.Rz)(l).values());
    return 0 === i.length
        ? null
        : (0, s.jsxs)(i0.Ip, {
              className: si.kL,
              children: [
                  (0, s.jsx)("div", { className: si.oT, children: (0, s.jsx)(sl, { channel: t }) }),
                  (0, s.jsx)("div", { className: si.zN }),
                  i.map((e, l) =>
                      (0, s.jsx)(
                          se,
                          { embeddedApp: e, presenceActivity: e.presenceActivity ?? void 0, channel: t, onAction: n },
                          l,
                      ),
                  ),
              ],
          });
}
var sr = n(662980);
function sa(e) {
    let { channel: t, transitionExtras: n } = e,
        l = em.intl.string(em.t.ZXxLQg);
    return (0, s.jsx)(ei.m, {
        asContainer: !0,
        text: l,
        children: (0, s.jsx)(es.D, {
            className: ep.Xs,
            onClick: function () {
                ((0, sr.T)(t.id, !0), (0, is.iN)(t.id, n));
            },
            "aria-label": l,
            children: (0, s.jsx)(l_.ChatIcon, { size: "xs", color: "currentColor", className: ep.gE }),
        }),
    });
}
class so extends nU {
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
        lN.A.preload(t ?? k.ME, e.id);
    };
    renderPopout = (e) => {
        let { channel: t, sorting: n, embeddedApps: l, channelIsContentGated: i } = this.props,
            { shouldShowActivities: r } = this.state;
        return t.isModeratorReportChannel() || i
            ? null
            : null != l && l.length > 0 && r && !n
              ? (0, s.jsx)(ss, { onAction: this.handleActivitiesPopoutClose, channel: t })
              : (0, s.jsx)(iq, { ...e, channel: this.props.channel });
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
            let l = l4.default.getUser(t.getRecipientId());
            null != l &&
                (0, e8.L3)(e, async () => {
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
            return void (0, e8.L3)(e, async () => {
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
            (0, e8.L3)(e, async () => {
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
        return !0 === n ? null : (0, s.jsx)(sa, { channel: t, transitionExtras: e });
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
            j = iV(m),
            v = _ ? { source: ii.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
            R = (0, tW.kg)(e, "TextChannel"),
            y = (0, s.jsxs)("li", {
                className: eK()(this.getClassName(), { [ep.r9]: this.isDisabled(), [ep.wH]: n }),
                "data-dnd-name": (0, t3.m1)(e, l4.default, ih.A),
                onMouseEnter: b || G ? this.handleMouseEnter : void 0,
                onMouseLeave: b || G ? this.handleMouseLeave : void 0,
                children: [
                    (0, s.jsx)(lX.Y, {
                        targetElementRef: I,
                        position: "right",
                        renderPopout: this.renderPopout,
                        onRequestClose: this.handleClosePopout,
                        spacing: 17,
                        shouldShow: (b && this.state.shouldShowThreadsPopout) || (G && this.state.shouldShowActivities),
                        children: () =>
                            (0, s.jsxs)(nD.Ay, {
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
                                "aria-label": (0, lJ.Ay)({
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
                                                    ? (0, s.jsx)(iQ, { channel: e, isSuggestedSection: _ })
                                                    : null,
                                                this.renderInviteButton(),
                                                this.renderEditButton(),
                                            ],
                                        }),
                                ],
                            }),
                    }),
                    n &&
                        (0, s.jsx)(iw.A, {
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
let sd = $(so);
function sc(e) {
    let { channel: t, guild: n, disableSorting: l, isFavoriteCategory: i, muted: a, selected: o } = e,
        { hasActiveThreads: d, hasMoreActiveThreads: c } = (0, lb.NR)(t),
        h = (0, u.cf)([n7.Ay], () => ({
            unread: n7.Ay.hasUnread(t.id),
            ackMessageId: n7.Ay.ackMessageId(t.id),
            isLowImportanceMention: n7.Ay.getIsMentionLowImportance(t.id),
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
        m = (0, u.bG)([n5.A], () => n5.A.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: f, isSubscriptionGated: p } = (0, lS.A)(t.id),
        C = (0, u.bG)([w.Ay], () => w.Ay.isFavorite(n.id, t.id)),
        E = (0, iP.ni)(t),
        x = (0, iO.Gp)(t.id),
        N = ij({
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
        _ = (0, iA.Ay)(t),
        [I, S] = r.useState(!1),
        b = (0, iD.K)(
            r.useCallback((e) => {
                S(e);
            }, []),
        );
    return (0, u.bG)([iB.A, iH.Ay], () => iB.A.getChannelId() !== t.id && iH.Ay.isCurrentUserGuest(t.getGuildId()))
        ? null
        : (0, s.jsx)(sd, {
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
var su = n(900797),
    sh = n(636585),
    sA = n(531685),
    sg =
        (((i = {}).HIDDEN = "hidden"),
        (i.UNREAD = "unread"),
        (i.MENTIONS = "mentions"),
        (i.VOICE_CHANNELS = "voice-channels"),
        i);
let sm = { mode: "hidden", mentionCount: 0, targetChannelId: null },
    sf = { topBar: sm, bottomBar: sm },
    sp = {},
    sC = {};
function sE(e) {
    let t = T.A.getChannel(e);
    return (
        !(null == t || null == t.getGuildId() || t.isGuildVocal()) &&
        !(t.isThread() ? lT.A.isMuted(t.id) : w.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, tA.Y)(t)
    );
}
function sx(e) {
    let t = T.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let l = w.Ay.isGuildCollapsed(n),
        i = w.Ay.isChannelMuted(n, t.id);
    return (!l || !i) && n7.Ay.getMentionCount(e) > 0;
}
function sN(e) {
    return (
        !w.Ay.isChannelMuted(e.guild_id, e.id) &&
        (e.isGuildStageVoice()
            ? tE.A.getMutableParticipants(e.id, tx.ip.SPEAKER).length > 0
            : tm.Ay.getVoiceStatesForChannel(e).length > 0)
    );
}
function s_(e) {
    let { guildChannels: t } = tj.A.getGuildWithoutChangingGuildActionRows(e),
        n = t.getChannels(sC[e] ?? []);
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
            ((sE(t.id) || o().some(t.threadIds, sE)) && (d = !1),
            (sx(t.id) || o().some(t.threadIds, sx)) && (a = !1),
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
            ((sE(t.id) || o().some(t.threadIds, sE)) && (null == i && (i = t.id), (p = !0)),
                (sx(t.id) || o().some(t.threadIds, sx)) &&
                    (null == l && (l = t.id),
                    (f += n7.Ay.getMentionCount(t.id)),
                    (f += o().sumBy(t.threadIds, n7.Ay.getMentionCount))));
        }
    if (d || a)
        for (let e = 0; e < m.length; e++) {
            let t = m[e];
            if (!d && !a) break;
            ((sE(t.id) || o().some(t.threadIds, sE)) && (null == r && (r = t.id), (E = !0)),
                (sx(t.id) || o().some(t.threadIds, sx)) &&
                    (null == s && (s = t.id),
                    (C += n7.Ay.getMentionCount(t.id)),
                    (C += o().sumBy(t.threadIds, n7.Ay.getMentionCount))));
        }
    let x = null,
        N = null,
        _ = u?.getChannelRecords() ?? [];
    (a && C > 0
        ? (x = { mode: "mentions", mentionCount: C, targetChannelId: s })
        : !c && o().some(_, sN)
          ? (x = { mode: "voice-channels", mentionCount: 0, targetChannelId: null })
          : d && E && (x = { mode: "unread", mentionCount: 0, targetChannelId: r }),
        a && f > 0
            ? (N = { mode: "mentions", mentionCount: f, targetChannelId: l })
            : d && p && (N = { mode: "unread", mentionCount: 0, targetChannelId: i }));
    let I = null != N && (null == x || ("mentions" !== x.mode && "mentions" === N.mode)),
        S = null != x && ("mentions" === x.mode || !I);
    return ((sp[e] = { topBar: I ? (N ?? sm) : sm, bottomBar: S ? (x ?? sm) : sm }), !0);
}
let sI = o().throttle(s_, 200);
function sS(e) {
    let { guildId: t } = e,
        n = O.A.getGuild(t);
    return null != n && !!n.features.has(k.GuildFeatures.COMMUNITY) && sI(t);
}
function sb(e) {
    let { id: t } = e,
        n = T.A.getChannel(t);
    if (null == n) return !1;
    let l = O.A.getGuild(n.guild_id);
    return null != l && !!l.features.has(k.GuildFeatures.COMMUNITY) && sI(n.guild_id);
}
function sG(e) {
    let { channel: t } = e,
        n = T.A.getChannel(t.id);
    if (null == n) return !1;
    let l = O.A.getGuild(t.guild_id);
    return null != l && !!l.features.has(k.GuildFeatures.COMMUNITY) && sI(n.guild_id);
}
function sj(e) {
    let { channelId: t } = e,
        n = T.A.getChannel(t);
    if (null == n) return !1;
    let l = O.A.getGuild(n.guild_id);
    return (
        null != l && !!l.features.has(k.GuildFeatures.COMMUNITY) && V.A.getGuildId() === n.guild_id && sI(n.guild_id)
    );
}
function sv(e) {
    let { guildId: t } = e;
    return null != t && sI(t);
}
class sR extends u.Ay.Store {
    static displayName = "ChannelListUnreadsStore";
    initialize() {
        this.waitFor(tj.A, T.A, O.A, lT.A, n7.Ay, V.A, tm.Ay, tE.A, w.Ay);
    }
    getUnreadStateForGuildId(e) {
        return sp[e] ?? sf;
    }
}
let sy = new sR(tt.h, {
    UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
        let { guildId: t, channelIds: n } = e,
            l = O.A.getGuild(t);
        return (
            null != l &&
            !!l.features.has(k.GuildFeatures.COMMUNITY) &&
            null != n &&
            !o().isEqual(sC[t], n) &&
            ((sC[t] = n), s_(t))
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
                .filter(tf.Vq)
                .uniq()
                .forEach((e) => {
                    let t = O.A.getGuild(e);
                    null != t && t.features.has(k.GuildFeatures.COMMUNITY) && sI(e) && (n = !0);
                }),
            n
        );
    },
    CHANNEL_ACK: sj,
    CHANNEL_DELETE: sG,
    CHANNEL_LOCAL_ACK: sj,
    MESSAGE_ACK: sj,
    MESSAGE_CREATE: sj,
    MESSAGE_DELETE_BULK: sj,
    MESSAGE_DELETE: sj,
    PASSIVE_UPDATE_V2: function (e) {
        let t = O.A.getGuild(e.guildId);
        return !!(e.channels.length > 0 && null != t && t.features.has(k.GuildFeatures.COMMUNITY)) && sI(e.guildId);
    },
    RESORT_THREADS: sj,
    THREAD_CREATE: sG,
    THREAD_DELETE: sG,
    THREAD_LIST_SYNC: sS,
    THREAD_MEMBER_UPDATE: sb,
    THREAD_MEMBERS_UPDATE: sb,
    THREAD_UPDATE: sG,
    BULK_CLEAR_RECENTS: sS,
    CATEGORY_COLLAPSE_ALL: sS,
    CATEGORY_EXPAND_ALL: sS,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = V.A.getGuildId();
        if (null == n || !new Set(t.map((e) => e.guildId)).has(n)) return !1;
        let l = sp[n];
        return null != l && "voice-channels" === l.bottomBar.mode && sI(n);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: sv,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: sv,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        for (let e of t) null != e.guild_id && sI(e.guild_id);
    },
    USER_GUILD_SETTINGS_GUILD_UPDATE: sv,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: sv,
});
var sM = n(350536);
let sL = { friction: 30, tension: 300 };
function sT(e) {
    let { guildChannels: t, jumpToVoiceChannels: n } = e,
        l = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
        i = (0, u.bG)([tm.Ay], () => tm.Ay.getVoiceStates(t.id), [t.id]),
        a = r.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), n());
            },
            [n],
        ),
        o = l?.getChannelRecords() ?? [],
        d = (0, nm.fK)({ channels: o, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: i });
    return (0, s.jsxs)(es.D, {
        className: eK()(sM.M0, sM.OF),
        onClick: a,
        children: [
            (0, s.jsx)(t0.H, { size: "custom", className: sM.Gs, width: 14, height: 14, color: "currentColor" }),
            (0, s.jsx)(e6.E, {
                variant: "text-xs/semibold",
                className: sM.pM,
                children: em.intl.format(em.t["fDlr+F"], { count: d.length }),
            }),
            (0, s.jsx)(sh.A, {
                guildId: t.id,
                className: sM.J$,
                users: d.slice(0, 4),
                renderMoreUsers: () => null,
                max: 4,
                size: iK._3.SIZE_16,
            }),
        ],
    });
}
function sU(e) {
    let { position: t, guildChannels: n, guildChannelsVersion: l, jumpToVoiceChannels: i, jumpToChannel: a } = e,
        { bottomBar: o, topBar: d } = (0, u.cf)([sy], () => sy.getUnreadStateForGuildId(n.id)),
        c = (0, u.bG)([sA.A], () => sA.A.isFocused()),
        { mode: h, mentionCount: A, targetChannelId: g } = "bottom" === t ? o : d,
        m = h === sg.HIDDEN,
        f = (0, e4.z)(
            {
                to: { transform: m ? ("bottom" === t ? "translateY(180%)" : "translateY(-180%)") : "translateY(0%)" },
                config: sL,
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
        className: eK()(sM.kL, { [sM.Mn]: "top" === t, [sM.sQ]: "bottom" === t }),
        children: (0, s.jsx)(e7.animated.div, {
            className: sM.pK,
            style: f,
            "aria-hidden": m,
            children: (function () {
                switch (h) {
                    case sg.HIDDEN:
                        return (0, s.jsx)("div", { className: eK()(sM.M0, sM.Te) });
                    case sg.UNREAD:
                        return (0, s.jsxs)(es.D, {
                            className: sM.M0,
                            onClick: p,
                            children: [
                                "bottom" === t
                                    ? (0, s.jsx)(t$.a, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: sM.z_,
                                          height: 14,
                                          width: 14,
                                      })
                                    : (0, s.jsx)(su.t, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: sM.z_,
                                          height: 14,
                                          width: 14,
                                      }),
                                (0, s.jsx)(e6.E, {
                                    variant: "text-xs/semibold",
                                    color: "interactive-text-default",
                                    className: sM.pM,
                                    children: em.intl.string(em.t.FCRiT3),
                                }),
                            ],
                        });
                    case sg.MENTIONS:
                        return (0, s.jsx)(es.D, {
                            className: eK()(sM.M0, sM.vU),
                            onClick: p,
                            children: (0, s.jsx)(e6.E, {
                                variant: "text-xs/semibold",
                                color: "badge-text-brand",
                                className: sM.pM,
                                children: em.intl.format(em.t.EQcLyp, { count: A }),
                            }),
                        });
                    case sg.VOICE_CHANNELS:
                        return (0, s.jsx)(sT, { jumpToVoiceChannels: i, guildChannels: n, guildChannelsVersion: l });
                    default:
                        return;
                }
            })(),
        }),
    });
}
var sD = n(310953),
    sO = n(173860);
function sP(e) {
    let t = T.A.getChannel(e);
    return (
        null != t &&
        null != t.getGuildId() &&
        !(t.isThread() ? lT.A.isMuted(t.id) : w.Ay.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, tA.Y)(t)
    );
}
function sV(e) {
    let t = T.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let l = w.Ay.isGuildCollapsed(n),
        i = w.Ay.isChannelMuted(n, t.id);
    return (!l || !i) && n7.Ay.getMentionCount(e) > 0;
}
let sw = r.forwardRef(function (e, t) {
    let { guildId: n, guildChannels: l, guildChannelsVersion: i, ...r } = e,
        a = (0, sD.W)(n, l, i, { withVoiceChannels: !1 }, { ignoreRecents: !0 }),
        o = (0, u.bG)([sA.A], () => sA.A.isFocused());
    return (0, s.jsx)(sO.A, { ref: t, ...r, isUnread: sP, isMentioned: sV, items: a, animate: o });
});
var sH = n(81466);
function sB(e) {
    let { guild: t, selected: l } = e,
        { hasUnread: i, mentionCount: r } = (0, u.cf)(
            [n7.Ay],
            () => ({
                hasUnread: n7.Ay.hasUnread(t.id, nO.P.GUILD_EVENT),
                mentionCount: n7.Ay.getMentionCount(t.id, nO.P.GUILD_EVENT),
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
    let d = (0, tB.Ay)(t.id),
        c = d.length > 0 ? em.intl.formatToPlainString(em.t.IBdqSu, { number: d.length }) : em.intl.string(em.t.tlopTM);
    return (0, s.jsx)(ec.G, {
        id: `upcoming-events-${t.id}`,
        renderIcon: (e) => (0, s.jsx)(sH.CalendarIcon, { size: "md", color: "currentColor", className: e }),
        text: c,
        selected: l,
        onClick: o,
        onContextMenu: function (e) {
            (0, e8.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("426386"), n.e("819990")]).then(n.bind(n, 221621));
                return (n) => (0, s.jsx)(e, { ...n, guildId: t.id });
            });
        },
        showUnread: i && !a,
        trailing: !a && r > 0 ? (0, s.jsx)(ea.hV, { className: n$.Do, disableColor: !0, count: r }) : null,
    });
}
var sk = n(152367),
    sF = n(972786),
    sK = n(321593),
    sz = n(309010),
    sW = n(50617);
function sY(e) {
    let { guild: t, selected: n } = e,
        l = (0, u.bG)([sF.Ay], () => sF.Ay.getSelectedProjectId(t.id), [t.id]),
        i = (0, u.bG)([sz.Ay], () => sz.Ay.getChannelId(), []),
        r = (0, u.bG)([V.A], () => V.A.getGuildId(), []);
    return (0, s.jsx)(ec.G, {
        id: `vibegrations-${t.id}`,
        renderIcon: (e) =>
            (0, s.jsx)(sk.D, { size: "custom", color: "currentColor", width: 20, height: 20, className: e }),
        text: em.intl.string(sW.default.Xmvb23),
        selected: n,
        background: (0, s.jsx)(sK.gT, { guildId: t.id }),
        onClick: () => {
            let e = i === eh.VV.VIBEGRATIONS && r === t.id;
            (0, eu.pX)(k.BVt.CHANNEL(t.id, eh.VV.VIBEGRATIONS, null == l || e ? null : l));
        },
    });
}
var sX = n(845056),
    sq = n(765379),
    sZ = n(271683),
    sJ = n(725613),
    s$ = n(857253),
    sQ = n(360729),
    s0 = n(22231),
    s1 = n(241326),
    s3 = n(750943),
    s2 = n(743674),
    s9 = n(888697),
    s5 = n(26741),
    s7 = n(493819),
    s6 = n(722884),
    s4 = n(579129),
    s8 = n(176431);
function re(e) {
    let { channel: t, imageUrl: l, animatedUrl: i, bannerHash: a, canModifyHangout: o } = e,
        d = (0, s2.S)(l),
        c = (0, ew.je)(t),
        u = (0, s5.P9)({ guildId: t.guild_id, channelId: t.id, bannerHash: a }),
        h = r.useCallback(() => {
            ((0, s5.J_)({ guildId: t.guild_id, channelId: t.id }), (0, s6.A)({ channel: t }));
        }, [t]),
        A = r.useCallback(() => {
            ((0, s5.nK)({ guildId: t.guild_id, channelId: t.id }), (0, s9.e2)(t.id));
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
        className: s8.rs,
        onContextMenu: g,
        children: [
            (0, s.jsx)("div", {
                className: s8.ZS,
                style: null != d ? { backgroundColor: d } : void 0,
                children: (0, s.jsx)(s7.A, { imageUrl: l, animatedUrl: i, className: s8.Sl }),
            }),
            o
                ? (0, s.jsxs)("div", {
                      className: s8.n_,
                      children: [
                          (0, s.jsx)(ei.m, {
                              text: em.intl.string(s4.default.XJ4UpB),
                              children: (0, s.jsx)(es.D, {
                                  className: s8.HF,
                                  onClick: h,
                                  children: (0, s.jsx)(s0.PencilIcon, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                          (0, s.jsx)(ei.m, {
                              text: em.intl.string(s4.default.XV4qT6),
                              children: (0, s.jsx)(es.D, {
                                  className: s8.HF,
                                  onClick: A,
                                  children: (0, s.jsx)(s1.TrashIcon, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function rt(e) {
    let { channel: t } = e,
        n = (0, s5.dX)({ guildId: t.guild_id, channelId: t.id }),
        l = r.useCallback(() => {
            ((0, s5.J_)({ guildId: t.guild_id, channelId: t.id }), (0, s6.A)({ channel: t }));
        }, [t]);
    return (0, s.jsx)("div", {
        ref: n,
        className: s8._o,
        children: (0, s.jsxs)(es.D, {
            className: s8.hH,
            onClick: l,
            children: [
                (0, s.jsx)(s3.X, { size: "xs", color: "currentColor" }),
                (0, s.jsx)(e6.E, {
                    variant: "text-sm/medium",
                    color: "currentColor",
                    children: em.intl.string(s4.default.NGcIOF),
                }),
            ],
        }),
    });
}
function rn(e) {
    let { channel: t, isConnected: n } = e,
        { enableHangoutWindow: l } = (0, eV.Dm)({ guildId: t.guild_id, location: "HangoutWindow" }),
        i = (0, ew.W6)(t),
        a = n && i,
        o = t.voiceHangout,
        d = o?.banner_hash,
        c = r.useMemo(() => {
            if (null == d || null == t.guild_id) return null;
            let e = (0, ew.Sq)({ guildId: t.guild_id, bannerHash: d });
            return null == e ? null : { bannerHash: d, ...e };
        }, [t.guild_id, d]);
    return l
        ? null != c
            ? (0, s.jsx)(re, {
                  channel: t,
                  imageUrl: c.imageUrl,
                  animatedUrl: c.animatedUrl,
                  bannerHash: c.bannerHash,
                  canModifyHangout: a,
              })
            : a
              ? (0, s.jsx)(rt, { channel: t })
              : null
        : null;
}
var rl = n(290863),
    ri = n(461213),
    rs = n(532622),
    rr = n(882840),
    ra = n(208971),
    ro = n(46054),
    rd = n(569381),
    rc = n(165648);
function ru(e) {
    let { channel: t, connected: n, hovered: l, subtitle: i, onClick: a } = e,
        o = (0, ra.G)((0, rr.l)(t)),
        { enableHangoutWindow: d } = (0, eV.Dm)({ guildId: t.guild_id, location: "VoiceChannelStatus" }),
        c = d && (0, ew.lr)(t),
        u = null != o && o.length > 0,
        h = (0, rs.Ay)(t, !0),
        A = null != i && i.length > 0;
    if (
        (r.useEffect(() => {
            u && lf.default.track(k.HAw.VOICE_CHANNEL_TOPIC_VIEWED, { channel_id: t.id, guild_id: t.guild_id });
        }, [u, t.id, t.guild_id]),
        null == t.guild_id)
    )
        return null;
    let g = eK()(rd.Ui, n && h ? rd.BI : null);
    return u
        ? (0, s.jsx)(es.D, {
              className: g,
              onClick: h ? a : void 0,
              children: (0, s.jsx)(e6.E, {
                  variant: "text-xs/medium",
                  className: eK()(rd.qS, rc.PT),
                  children: (0, s.jsx)(tX.A, { children: ro.A.parseVoiceChannelStatus(o, !0, { channelId: t.id }) }),
              }),
          })
        : n && h && !c && (!A || l)
          ? (0, s.jsxs)(es.D, {
                className: g,
                onClick: a,
                children: [
                    (0, s.jsx)(e6.E, {
                        variant: "text-xs/medium",
                        className: rd.qS,
                        children: em.intl.string(em.t.Mgpxiw),
                    }),
                    (0, s.jsx)(s0.PencilIcon, { color: "currentColor", className: rd.rD, size: "xxs" }),
                ],
            })
          : A
            ? (0, s.jsx)(tX.A, { children: i })
            : null;
}
class rh extends nU {
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
        (o && lq.A.updateChatOpen(n.id, !0),
            lI.A.handleVoiceConnect({
                channel: n,
                connected: t,
                needSubscriptionToAccess: i,
                routeDirectlyToChannel: o || a,
                locked: e,
                transitionExtras: r ? { source: ii.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
            }));
    };
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            l = O.A.getGuild(t.getGuildId());
        null != l &&
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
        return (0, nm.Pd)(e, lj.A, O.A);
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
        (null != t && (0, lQ.V)(t) && (0, l$.Ze)(t), this.handleVoiceConnect());
    };
    handleVoiceStatusClick = (e) => {
        let { connected: t, channel: n } = this.props;
        t && (e.stopPropagation(), (0, sZ.A)({ channel: n }));
    };
    renderSubtitle() {
        let { channel: e, connected: t } = this.props,
            n = iV(this.props.subtitle)?.subtitle,
            { hovered: l } = this.state;
        return (0, s.jsx)(ru, {
            onClick: this.handleVoiceStatusClick,
            channel: e,
            connected: t,
            subtitle: n,
            hovered: l,
        });
    }
    renderVoiceUsers() {
        let { channel: e, voiceStates: t, collapsed: n, withGuildIcon: l, tabIndex: i } = this.props;
        return (0, s.jsx)(lk.A, {
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
        return !(null != n && n.length > 0) || l ? null : (0, s.jsx)(rn, { channel: e, isConnected: t });
    }
    renderPopout = () => {
        let { channel: e } = this.props,
            { shouldShowGuildVerificationPopout: t } = this.state;
        return t
            ? (0, s.jsx)(il, { type: it.VOICE, guildId: e.guild_id, closePopout: this.closeGuildVerificationPopout })
            : null;
    };
    renderOpenChatButton = () => {
        let { channel: e, locked: t, forceShowButtons: n, isSuggestedSection: l } = this.props;
        if (!t)
            return (0, s.jsx)(ei.m, {
                asContainer: !0,
                text: em.intl.string(em.t.ZXxLQg),
                children: (0, s.jsx)(es.D, {
                    className: eK()(ep.Xs, n ? ep.Tf : null),
                    onClick: () => {
                        (lq.A.updateChatOpen(e.id, !0),
                            (0, is.iN)(e.id, l ? { source: ii.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0));
                    },
                    "aria-label": em.intl.string(em.t.ZXxLQg),
                    children: (0, s.jsx)(l_.ChatIcon, { size: "xs", color: "currentColor", className: ep.gE }),
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
                className: eK()(this.getModeClass(), { [ep.r9]: this.isDisabled(), [ep.fy]: _ }),
                "data-dnd-name": (0, t3.m1)(e, l4.default, ih.A),
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
                        children: (0, s.jsx)(lX.Y, {
                            targetElementRef: this.channelItemRef,
                            position: "right",
                            renderPopout: this.renderPopout,
                            onRequestClose: this.closeGuildVerificationPopout,
                            spacing: 17,
                            shouldShow: b,
                            children: () =>
                                (0, s.jsx)(ei.m, {
                                    text: this.getTooltipText(),
                                    children: (0, s.jsxs)(nD.Ay, {
                                        ref: this.channelItemRef,
                                        className: ep.Ki,
                                        iconClassName: eK()({ [ep.Gj]: m || x || G }),
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
                                        "aria-label": (0, lJ.Ay)({
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
                (j = (0, s.jsx)(na.A, {
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
let rA = $((0, lZ.F)(rh));
function rg(e) {
    let {
            guild: t,
            channel: n,
            disableSorting: l,
            isFavoriteCategory: i,
            selected: r,
            collapsed: a,
            voiceStates: o,
        } = e,
        d = (0, u.cf)([n7.Ay], () => ({ unread: n7.Ay.hasUnread(n.id), mentionCount: n7.Ay.getMentionCount(n.id) })),
        c = (0, u.bG)([w.Ay], () => w.Ay.resolveUnreadSetting(n)),
        h = (0, u.cf)([T.A, l6.A, P.A], () => {
            let e = T.A.getChannel(n.parent_id),
                i = l6.A.getCheck(n.guild_id);
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
        A = (0, u.bG)([lj.A], () => lj.A.hasVideo(n.id)),
        { enabled: g } = (0, sQ.mf)({ guildId: t.id, location: "VoiceChannel" }),
        m = (0, iA.Ay)(n),
        f = (0, u.yK)(
            [ri.A, rl.A, id.default],
            () => {
                if (null == o || 0 === o.length) return [];
                let e = id.default.getId(),
                    t = [];
                for (let { user: l } of o)
                    for (let i of l.id === e ? ri.A.getActivities() : rl.A.getActivities(l.id, n.guild_id))
                        !(0, sX.N)(i) || (0, sq.A)(i) || null == i.name || t.includes(i.name) || t.push(i.name);
                return t;
            },
            [o, n.guild_id],
        ),
        p = (0, t3.Ay)(n),
        C = (0, tB.Qs)(n.id),
        E = (0, u.bG)([sJ.A], () => sJ.A.getStartTime(n), [n]),
        { isSubscriptionGated: x, needSubscriptionToAccess: N } = (0, lS.A)(n.id),
        _ = (0, s$.A)(),
        I = (0, u.bG)([w.Ay], () => w.Ay.isFavorite(t.id, n.id)),
        S = e.connected || _?.channelId === n.id,
        { enableHighlight: b, enableWaveformIcon: G } = (0, nA.b)(t.id, "VoiceChannel"),
        j = null != o && o.length > 0,
        v = b && j,
        y = G && j,
        M = ij({
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
    return (0, s.jsx)(rA, {
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
function rm(e) {
    return (
        h.A.modules.channels.NAME_LINE_HEIGHT.resolve({ density: e }) +
        2 * h.A.space.SPACE_XXS.resolve({ density: e }) +
        2
    );
}
class rf extends r.PureComponent {
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
        (this.setState({ initialized: !0 }), (0, tv.Ei)(this.getVisibleChannels));
    }
    componentWillUnmount() {
        this.updateChannelListScroll.cancel();
    }
    componentDidUpdate(e, t) {
        let { scrollToChannel: n, guildId: l, selectedChannelId: i } = this.props,
            { initialized: s } = this.state,
            { scrollTop: r } = tb.A.getGuildDimensions(l);
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
                    a = s.threadOffset * rm(r);
                i.scrollIntoViewRect({ start: e + a, end: e + a + rm(r), padding: n, animate: t, callback: l });
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
                if (l < tG.bK || e.isPlaceholderRow(l, i)) return !1;
                let s = e.getChannelFromSectionRow(l, i);
                if (null == s) return !1;
                let { channel: r, category: a } = s;
                return (
                    !!(0, H.ig)(r.record.type) &&
                    (!a.isCollapsed || !a.isMuted) &&
                    !r.isMuted &&
                    !!t.isItemVisible(l, i, !0) &&
                    (0, tA.Y)(r.record)
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
        if (e === tG.PU) return i;
        if (e === tG.bK) return t.features.has(k.GuildFeatures.HUB) ? 0 : i;
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
            let { hasDivider: d, canHaveVoiceSummary: c } = nf(n, r, t),
                u = d ? (a ? 9 : 12) : 0;
            if (!c || t === tG.PU) return u;
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
            a = rm(r);
        if (e === tG.PU) {
            let e = n.getGuildActionSection();
            return e.isEmpty()
                ? 0
                : e.getRow(t) === tY.n.GUILD_PREMIUM_PROGRESS_BAR
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
            a += rm(t);
            let n = l[d.id];
            null != n && n.length > 0 && (a += s === e ? 32 * n.length : 32);
        }
        if (d.record.isGuildVoice()) {
            let e = l[d.id];
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
        (null != n && s.includes(n) && (i = (0, ek.xb)(t)), (0, ek.DD)(e.id, s, i));
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
            nu,
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
        if (t === tG.PU) {
            let e = c.getGuildActionSection(),
                t = e.getRow(n);
            if (null == t) return null;
            switch (t) {
                case tY.n.GUILD_HUB_HEADER_OPTIONS:
                    return (0, s.jsx)(
                        eH.A,
                        { guild: l, channel: D.Ay.getDefaultChannel(l.id) },
                        tY.n.GUILD_HUB_HEADER_OPTIONS,
                    );
                case tY.n.GUILD_PREMIUM_PROGRESS_BAR:
                    let i = e.getRows();
                    return (0, s.jsx)(th, { guild: l, withMargin: i.length > 1 }, tY.n.GUILD_PREMIUM_PROGRESS_BAR);
                case tY.n.GUILD_SPACE:
                    return (0, s.jsx)(eP, { guild: l, selected: a === eh.VV.GUILD_SPACE }, tY.n.GUILD_SPACE);
                case tY.n.GUILD_HOME:
                    return (0, s.jsx)(n8, { guild: l, selected: a === eh.VV.GUILD_HOME }, tY.n.GUILD_HOME);
                case tY.n.GUILD_SCHEDULED_EVENTS:
                    return (0, s.jsx)(
                        sB,
                        { guild: l, selected: a === tY.n.GUILD_SCHEDULED_EVENTS },
                        tY.n.GUILD_SCHEDULED_EVENTS,
                    );
                case tY.n.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, s.jsx)(
                        ld,
                        { guild: l, selected: a === eh.VV.ROLE_SUBSCRIPTIONS },
                        tY.n.GUILD_ROLE_SUBSCRIPTIONS,
                    );
                case tY.n.GUILD_SHOP:
                    return (0, s.jsx)(lx, { guild: l, selected: a === eh.VV.GUILD_SHOP }, tY.n.GUILD_SHOP);
                case tY.n.GUILD_GAME_SHOP:
                    return (0, s.jsx)(n0, { guild: l, selected: a === eh.VV.GAME_SHOP }, tY.n.GUILD_GAME_SHOP);
                case tY.n.GUILD_VIBEGRATIONS:
                    return (0, s.jsx)(sY, { guild: l, selected: a === eh.VV.VIBEGRATIONS }, tY.n.GUILD_VIBEGRATIONS);
                case tY.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                    return (0, s.jsx)(ls, { guild: l });
                case tY.n.CHANNELS_AND_ROLES:
                    return (0, s.jsx)(
                        n6,
                        { guild: l, selected: a === eh.VV.CHANNEL_BROWSER || a === eh.VV.CUSTOMIZE_COMMUNITY },
                        tY.n.CHANNELS_AND_ROLES,
                    );
                case tY.n.GUILD_DIRECTORY:
                    return (0, s.jsx)(
                        nP,
                        { guild: l, selectedChannelId: a, disableManageChannels: h },
                        tY.n.GUILD_DIRECTORY,
                    );
                case tY.n.GUILD_MOD_DASH_MEMBER_SAFETY:
                    return (0, s.jsx)(
                        ey,
                        { guild: l, selected: a === eh.VV.MEMBER_SAFETY },
                        tY.n.GUILD_MOD_DASH_MEMBER_SAFETY,
                    );
                case tY.n.GUILD_BOOSTS:
                    return (0, s.jsx)(e5, { guildId: l.id, selected: a === eh.VV.GUILD_BOOSTS }, tY.n.GUILD_BOOSTS);
                case tY.n.GAME_SERVERS:
                    return (0, s.jsx)(eI, { guildId: l.id, selected: a === eh.VV.GAME_SERVERS }, tY.n.GAME_SERVERS);
                case tY.n.GAME_SERVERS_EMPTY:
                    return (0, s.jsx)(
                        eC,
                        { guildId: l.id, selected: a === eh.VV.GAME_SERVERS },
                        tY.n.GAME_SERVERS_EMPTY,
                    );
                case tY.n.GUILD_OFFICIAL_MESSAGES:
                    return (0, s.jsx)(
                        la,
                        { guild: l, selected: a === eh.VV.GUILD_OFFICIAL_MESSAGES },
                        tY.n.GUILD_OFFICIAL_MESSAGES,
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
                            (0, s.jsx)(sc, {
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
                                ? (0, s.jsx)(lY, {
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
                    iM,
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
                    rg,
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
                return (0, s.jsx)(iU, { channel: x, guild: l, position: C.position, selected: a === C.id }, N);
            case k.rbe.GUILD_CATEGORY:
                if (t !== c.voiceChannelsSectionNumber) return null;
                return (0, s.jsx)(nr, { channel: x }, `readonly-${x.id}`);
            case k.rbe.PUBLIC_THREAD:
            case k.rbe.PRIVATE_THREAD:
            case k.rbe.ANNOUNCEMENT_THREAD:
                return (0, s.jsx)(
                    sc,
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
            nC,
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
                let { hasDivider: l, canHaveVoiceSummary: i } = nf(t, n, e);
                return `section-footer-${e}${l ? "-divider" : ""}${i ? "-voice-summary" : ""}`;
            })(t, n, o),
        );
    };
    renderTopUnread() {
        let { topMention: e, bottomUnread: t, bottomMention: n, isUnreadVisible: l } = this.state,
            { guildId: i, guildChannels: r, guildChannelsVersion: a } = this.props;
        return (0, s.jsx)("div", {
            className: nc.Eo,
            children: (0, s.jsx)(sw, {
                ref: this.unreadTopRef,
                textUnread: em.intl.string(em.t.FCRiT3),
                textMention: em.intl.string(em.t["8zH0LJ"]),
                hide: null == e && (l || null != t || null != n),
                className: nc.Vq,
                barClassName: nc.bu,
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
        return (0, s.jsx)(sw, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: em.intl.string(em.t.FCRiT3),
            textMention: em.intl.string(em.t["8zH0LJ"]),
            hide: null == l && i,
            className: nc.di,
            barClassName: nc.bu,
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
                        className: nc.XG,
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
        if (!tI.A.shouldShow("voice-conversations")) return;
        let { guildChannels: e } = this.props,
            t = e.getFirstVoiceChannel();
        if (null == t) return void t_.X8("voice-conversations");
        let n = this._list;
        if (null != n)
            for (let { section: e, row: l } of this.getSectionRowsFromChannel(t.id))
                n.isItemVisible(e, l) || t_.X8("voice-conversations");
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
                                      className: nc.Eo,
                                      children: (0, s.jsx)(sU, {
                                          position: "top",
                                          guildChannels: e,
                                          guildChannelsVersion: t,
                                          jumpToVoiceChannels: this.jumpToVoiceChannels,
                                          jumpToChannel: this.jumpToChannel,
                                      }),
                                  }),
                                  this.renderList(),
                                  (0, s.jsx)(sU, {
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
let rp = (e) => {
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
            [tE.A, T.A, tg.A],
            () => {
                let t;
                return [
                    (t = (0, R.ai)(e)
                        ? tC.default
                              .keys(tg.A.getFavoriteChannels())
                              .map((e) => T.A.getChannel(e))
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
                    (0, s.jsx)(tS.q, { containerRef: E.containerProps.ref, itemType: q }),
                    (0, s.jsx)(rf, {
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
function rC(e) {
    let t = (function (e) {
            var t;
            let n,
                l,
                i =
                    ((t = e.id),
                    (n = (0, tH.A)(t)),
                    (l = (0, tB.Ay)(t)),
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
                s = (0, tT.W)(e.id),
                r = (0, tw.vz)(e.id),
                a = (0, ty.r)(e),
                o = (0, tz.jz)(e),
                d = (0, tP.d)(e.id),
                c = (0, tR.bG)([tD.h], () => tD.h.getNewMemberActions(e.id), [e.id]),
                h = (0, tW.by)(e, "useGuildActionRows"),
                A = (0, tV.A)(e.id),
                g = (0, tO.jY)(e.id),
                m = (0, tU.fw)(e.id),
                f = (0, tk.Uq)(e.id, "useGuildActionRows"),
                p = [],
                C = e.features.has(k.GuildFeatures.HUB),
                E = e.features.has(k.GuildFeatures.COMMUNITY),
                x = e.features.has(k.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
                N = (0, tr.A)(e.id);
            tK.useConfig({ location: "useGuildActionRows" }).enabled;
            let _ = to(e),
                I = (0, tF.bW)(e.id, "useGuildActionRows"),
                S = (0, tM.C$)(e.id, "useGuildActionRows"),
                b = e.features.has(k.GuildFeatures.GAME_SERVERS),
                G = (0, tL.N)("useGuildActionRows"),
                [j] = (0, ed.kn)(S && G && !b ? [el.M.EMPTY_GAME_SERVER_TAB] : [], void 0, !0);
            return (
                C && p.push(tY.n.GUILD_HUB_HEADER_OPTIONS),
                !g && d && A && null != c && c.length > 0
                    ? p.push(tY.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
                    : e.premiumProgressBarEnabled && _ > 0 && p.push(tY.n.GUILD_PREMIUM_PROGRESS_BAR),
                !C && d && p.push(tY.n.GUILD_HOME),
                f && p.push(tY.n.GUILD_SPACE),
                i && p.push(tY.n.GUILD_SCHEDULED_EVENTS),
                !C && E && p.push(tY.n.CHANNELS_AND_ROLES),
                r && p.push(tY.n.GUILD_ROLE_SUBSCRIPTIONS),
                a && p.push(tY.n.GUILD_SHOP),
                o && p.push(tY.n.GUILD_GAME_SHOP),
                ((m && (E || x)) || (s && e.features.has(k.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL))) &&
                    p.push(tY.n.GUILD_MOD_DASH_MEMBER_SAFETY),
                N && p.push(tY.n.GUILD_BOOSTS),
                I && p.push(tY.n.GUILD_OFFICIAL_MESSAGES),
                S && (b ? p.push(tY.n.GAME_SERVERS) : null != j && p.push(tY.n.GAME_SERVERS_EMPTY)),
                h && p.push(tY.n.GUILD_VIBEGRATIONS),
                p
            );
        })(e.guild),
        n = (0, u.cf)([tj.A], () => tj.A.getGuild(e.guildId, { guildActionRows: t })),
        { density: l } = (0, C.wR)();
    return (0, s.jsx)(rp, { ...e, ...n, density: l });
}
