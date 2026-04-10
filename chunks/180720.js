n.d(t, { T: () => G }), n(321073);
var i = n(627968),
    l = n(64700),
    r = n(735438),
    s = n(837381),
    a = n(311907),
    o = n(397927),
    u = n(928039),
    d = n(704554),
    c = n(21119),
    h = n(594831),
    g = n(616356),
    m = n(734057),
    f = n(197305),
    A = n(994500),
    I = n(309010),
    E = n(977997),
    p = n(607567),
    _ = n(256415),
    S = n(996439),
    x = n(810412),
    T = n(914853),
    N = n(179917),
    C = n(419072),
    v = n(294809),
    y = n(316541),
    M = n(554932),
    R = n(406595),
    D = n(557404),
    b = n(652215),
    O = n(895867),
    w = n(985018),
    j = n(453748);
function U(e) {
    return Array.from(e).sort();
}
let L = (0, r.throttle)(
    (e) => {
        (0, x.Y)(b.uss.FRIENDS, {
            locked: _.default.isInstanceLocked(),
            shownUserIds: e.shownUserIds,
            liveUserIds: e.liveUserIds,
            contentInventoryIds: [],
        });
    },
    3e3,
    { leading: !0, trailing: !1 },
);
function k(e) {
    let t = 0x811c9dc5;
    for (let n = 0; n < e.length; n += 1) (t ^= e.charCodeAt(n)), (t = Math.imul(t, 0x1000193));
    return t >>> 0;
}
function G() {
    let { onPrimaryAction: e, onContextMenu: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [n, r] = l.useState(""),
        _ = n.trim().toLowerCase(),
        [b, G] = l.useState(() => new Set()),
        P = (0, a.bG)([C.A], () => C.A.getCollapsedSectionOverridesForTab(T.x.VOICE), []),
        F = (0, h.qZ)(),
        V = l.useMemo(() => {
            let e = new Map();
            for (let t of F) e.set(t.channel.id, t.voiceStates);
            return e;
        }, [F]),
        z = l.useCallback((e) => {
            G((t) => {
                let n = new Set(t);
                return n.has(e) ? n.delete(e) : n.add(e), n;
            });
        }, []),
        H = l.useCallback((e) => {
            (0, M.G)({ tab: T.x.VOICE, sectionKey: e });
        }, []),
        Y = l.useMemo(() => new Set(F.map((e) => e.channel.id)), [F]),
        [W, B] = l.useState([]);
    (0, d.RT)(n, F, B, h.MV);
    let X = l.useRef(null),
        Z = (0, u.A)("friends-widget-voice", X),
        [K, $] = (0, a.bG)([R.A], () => R.A.getFavoriteTargetIdsForTab(T.x.VOICE), [], S.D),
        q = l.useMemo(() => K.filter((e) => Y.has(e)), [K, Y]),
        { friendVoiceChannelIds: Q, recentVoiceChannelIds: J } = (0, h.S4)(),
        ee = l.useMemo(() => Q.filter((e) => Y.has(e)), [Q, Y]),
        et = l.useMemo(() => J.filter((e) => Y.has(e)), [J, Y]),
        en = (0, a.bG)([I.A], () => I.A.getVoiceChannelId(), []),
        ei = (0, a.bG)([y.A], () => y.A.getActiveNowChannelIds({ kind: y.u.Voice }), []),
        el = (0, a.bG)(
            [f.A],
            () =>
                f.A.affinities
                    .filter((e) => (e.score ?? 0) > 0)
                    .slice(0, 2)
                    .map((e) => e.guildId),
            [],
        ),
        er = l.useMemo(() => {
            let e, t, n, i;
            return (
                (t = String((e = new Date()).getDate()).padStart(2, "0")),
                (n = String(e.getMonth() + 1).padStart(2, "0")),
                (i = String(e.getFullYear() % 100).padStart(2, "0")),
                k(`${t}${n}${i}`)
            );
        }, []),
        es = l.useMemo(() => new Set(K), [K]),
        ea = l.useMemo(() => ee.filter((e) => !es.has(e)), [ee, es]),
        eo = l.useMemo(() => et.filter((e) => !es.has(e)), [et, es]),
        eu = l.useMemo(() => new Set(ea), [ea]),
        ed = l.useMemo(() => ei.filter((e) => !es.has(e) && !eu.has(e) && Y.has(e)), [ei, es, eu, Y]),
        ec = l.useMemo(() => {
            let e = [],
                t = new Set(),
                n = (n) => {
                    null == n || !Y.has(n) || es.has(n) || t.has(n) || (t.add(n), e.push(n));
                };
            for (let t of (null != en && m.A.getChannel(en)?.isVocal() && n(en), eo)) {
                if (e.length >= 8) break;
                n(t);
            }
            let i = new Set(el),
                l = new Set([...es, ...ea]),
                r = F.filter((e) => {
                    let n = e.channel;
                    if (!n?.isVocal?.()) return !1;
                    let r = n.getGuildId?.() ?? null;
                    return !(null == r || !i.has(r) || l.has(n.id) || t.has(n.id));
                }).map((e) => {
                    var t;
                    return {
                        channelId: e.channel.id,
                        voiceUserCount: e.voiceStates?.length ?? 0,
                        shuffle: ((t = e.channel.id), k(`${er}:${t}`)),
                    };
                }),
                s = r.filter((e) => e.voiceUserCount > 0),
                a = r.filter((e) => 0 === e.voiceUserCount);
            for (let t of (s.sort((e, t) =>
                e.voiceUserCount !== t.voiceUserCount ? t.voiceUserCount - e.voiceUserCount : e.shuffle - t.shuffle,
            ),
            a.sort((e, t) => e.shuffle - t.shuffle),
            [...s, ...a])) {
                if (e.length >= 8) break;
                n(t.channelId);
            }
            return e;
        }, [F, Y, en, es, ea, eo, er, el]),
        eh = l.useMemo(() => {
            let e = (e) => !0 === P[e],
                t = (e) => (e.voiceStates?.length ?? 0) > 0,
                n = [];
            if ("" !== _)
                return (
                    n.push({
                        kind: "SEARCH_RESULTS",
                        key: "SEARCH_RESULTS",
                        title: w.intl.string(O.default.DUIbKP),
                        count: W.length,
                        rows: W.map((e) => ({ channelId: e.channel.id, voiceStates: e.voiceStates })),
                        length: W.length,
                    }),
                    n
                );
            if (q.length > 0 && $ > 0) {
                let i = q.map((e) => ({ channelId: e, voiceStates: V.get(e) })),
                    l = e("FAVORITES") ? i.filter(t) : i;
                n.push({
                    kind: "FAVORITES",
                    key: "FAVORITES",
                    title: w.intl.string(O.default.OskevP),
                    count: i.length,
                    rows: l,
                    length: Math.max(l.length, 1),
                });
            }
            if (ea.length > 0) {
                let i = ea.map((e) => ({ channelId: e, voiceStates: V.get(e) })),
                    l = e("FRIENDS_IN_VOICE") ? i.filter(t) : i;
                n.push({
                    kind: "FRIENDS_IN_VOICE",
                    key: "FRIENDS_IN_VOICE",
                    title: w.intl.string(O.default["C+ojiQ"]),
                    count: i.length,
                    rows: l,
                    length: Math.max(l.length, 1),
                });
            }
            if (ed.length > 0) {
                let i = ed.map((e) => ({ channelId: e, voiceStates: V.get(e) })),
                    l = e("ACTIVE_NOW") ? i.filter(t) : i;
                n.push({
                    kind: "ACTIVE_NOW",
                    key: "ACTIVE_NOW",
                    title: w.intl.string(O.default.eiie2x),
                    count: i.length,
                    rows: l,
                    length: Math.max(l.length, 1),
                });
            }
            if (ec.length > 0) {
                let i = ec.map((e) => ({ channelId: e, voiceStates: V.get(e) })),
                    l = e("SUGGESTED_VOICE_CHANNELS") ? i.filter(t) : i;
                n.push({
                    kind: "SUGGESTED_VOICE_CHANNELS",
                    key: "SUGGESTED_VOICE_CHANNELS",
                    title: w.intl.string(O.default["9ME4wE"]),
                    count: i.length,
                    rows: l,
                    length: Math.max(l.length, 1),
                });
            }
            return n;
        }, [P, _, q, $, ed, ea, W, ec, V]),
        eg = l.useMemo(() => eh.map((e) => e.length), [eh]),
        em = l.useCallback(
            (e) => {
                for (let t = 0; t < eh.length; t += 1) {
                    let n = eh[t].rows.findIndex((t) => t.channelId === e);
                    if (-1 !== n) return { section: t, row: n };
                }
                return null;
            },
            [eh],
        ),
        ef = l.useCallback(() => {
            let e = eh.findIndex((e) => "FAVORITES" === e.kind);
            return -1 === e ? null : { section: e, row: void 0 };
        }, [eh]);
    (0, D.$)({
        scrollerRef: X,
        favoriteTargetIds: q,
        getScrollTargetForTargetId: (e) => em(e),
        getFallbackScrollTarget: ef,
        padding: 8,
        animate: !1,
    });
    let eA = (0, x.Dk)(() => {
            let e = new Set();
            for (let t of eh) for (let n of t.rows) e.add(n.channelId);
            return e;
        }, [eh]),
        { shownUserIds: eI, liveUserIds: eE } = (0, a.cf)([m.A, g.A], () => {
            let e = new Map();
            for (let t of F) e.set(t.channel.id, t.voiceStates);
            let t = new Set(),
                n = new Set();
            for (let i of eA) {
                let l = m.A.getChannel(i),
                    r = l?.getGuildId?.() ?? l?.guild_id ?? null;
                for (let l of (function (e, t) {
                    let n = Array.from(
                        new Set((t ?? Object.values(E.A.getVoiceStatesForChannel(e))).map((e) => e.userId)),
                    );
                    return (
                        n.sort((e, t) => {
                            let n = A.A.isFriend(e),
                                i = A.A.isFriend(t);
                            return n && !i
                                ? -1
                                : !n && i
                                  ? 1
                                  : (c.A.getUserAffinity(t)?.vcProbability ?? 0) -
                                    (c.A.getUserAffinity(e)?.vcProbability ?? 0);
                        }),
                        n.slice(0, 4)
                    );
                })(i, e.get(i)))
                    t.add(l), null != r && null != g.A.getStreamForUser(l, r) && n.add(l);
            }
            return { shownUserIds: t, liveUserIds: n };
        }, [eA, F]),
        ep = (0, x.Dk)(() => eI, [eI]),
        e_ = (0, x.Dk)(() => eE, [eE]);
    l.useEffect(() => {
        (0 !== ep.size || 0 !== e_.size) && L({ shownUserIds: U(ep), liveUserIds: U(e_) });
    }, [ep, e_]);
    let eS = l.useCallback((e) => eh[e], [eh]),
        ex = l.useCallback(
            (e) => {
                let { section: t } = e,
                    n = eS(t);
                if (null == n) return null;
                let l = "SEARCH_RESULTS" !== n.kind,
                    r = l && !0 === P[n.key];
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(o.AC4, { children: n.title }),
                        (0, i.jsx)(N.I, {
                            title: n.title,
                            count: n.count,
                            isCollapsed: r,
                            canCollapse: l,
                            onToggle: () => H(n.key),
                        }),
                    ],
                });
            },
            [P, eS, H],
        ),
        eT = l.useCallback(
            (n) => {
                let l = eS(n.section);
                if (null == l) return null;
                let r = l.rows[n.row];
                if (null == r) return null;
                let s = `${l.key}:${r.channelId}`,
                    a = b.has(r.channelId);
                return (0, i.jsx)(
                    v.C,
                    {
                        channelId: r.channelId,
                        listItemId: s,
                        voiceStates: r.voiceStates,
                        isExpanded: a,
                        onToggleExpanded: z,
                        shouldHighlightIfRecentlyAdded: "FAVORITES" === l.kind,
                        onPrimaryAction: e,
                        onContextMenu: t,
                    },
                    s,
                );
            },
            [b, eS, t, e, z],
        ),
        eN = l.useCallback(() => 40, []),
        eC = l.useCallback(
            (e, t) => {
                let n = eS(e);
                if (null == n) return 50;
                if (0 === n.rows.length) return 0;
                let i = n.rows[t];
                if (null == i || !b.has(i.channelId)) return 50;
                let l = m.A.getChannel(i.channelId),
                    r = Math.min((null != l ? p.Ay.getVoiceStatesForChannel(l) : []).length, 25);
                return r <= 0 ? 50 : 50 + (32 * r + (r - 1) * 2 + 8);
            },
            [b, eS],
        ),
        ev = l.useCallback((e) => {
            r(e), X.current?.scrollToTop();
        }, []);
    return (0, i.jsxs)("div", {
        className: j.kL,
        children: [
            (0, i.jsx)("div", {
                className: j.MT,
                children: (0, i.jsx)(o.IWV, {
                    query: n,
                    onChange: ev,
                    onClear: () => r(""),
                    placeholder: w.intl.string(O.default.OV3KfO),
                    size: "md",
                }),
            }),
            (0, i.jsx)(s.hD, {
                navigator: Z,
                children: (0, i.jsx)(s.PR, {
                    children: (e) => {
                        let { ref: t, role: n, ...l } = e;
                        return (0, i.jsx)(o.skg, {
                            children: (e) =>
                                (0, i.jsx)(o.B8B, {
                                    innerRole: n,
                                    innerAriaLabel: w.intl.string(w.t.OGiMXJ),
                                    ref: (e) => {
                                        (X.current = e), (t.current = e?.getScrollerNode() ?? null);
                                    },
                                    className: j.p_,
                                    sectionHeight: eN,
                                    rowHeight: eC,
                                    sidebarHeight: 0,
                                    renderSection: ex,
                                    renderRow: eT,
                                    sections: eg,
                                    paddingBottom: 8,
                                    ...l,
                                    ...e,
                                }),
                        });
                    },
                }),
            }),
        ],
    });
}
