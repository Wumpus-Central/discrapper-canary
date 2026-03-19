n.d(t, { T: () => k }), n(321073);
var l = n(627968),
    i = n(64700),
    r = n(735438),
    s = n(837381),
    a = n(311907),
    u = n(397927),
    o = n(928039),
    d = n(704554),
    c = n(21119),
    h = n(594831),
    g = n(616356),
    I = n(734057),
    A = n(197305),
    f = n(994500),
    E = n(309010),
    m = n(977997),
    S = n(607567),
    _ = n(256415),
    p = n(996439),
    N = n(810412),
    T = n(914853),
    y = n(179917),
    C = n(419072),
    x = n(294809),
    v = n(316541),
    M = n(554932),
    D = n(406595),
    R = n(557404),
    O = n(652215),
    U = n(822889),
    G = n(985018),
    w = n(77347);
function L(e) {
    return Array.from(e).sort();
}
let F = (0, r.throttle)(
    (e) => {
        (0, N.Y)(O.uss.FRIENDS, {
            locked: _.default.isInstanceLocked(),
            shownUserIds: e.shownUserIds,
            liveUserIds: e.liveUserIds,
            contentInventoryIds: [],
        });
    },
    3e3,
    { leading: !0, trailing: !1 },
);
function b(e) {
    let t = 0x811c9dc5;
    for (let n = 0; n < e.length; n += 1) (t ^= e.charCodeAt(n)), (t = Math.imul(t, 0x1000193));
    return t >>> 0;
}
function k() {
    let { onPrimaryAction: e, onContextMenu: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [n, r] = i.useState(""),
        _ = n.trim().toLowerCase(),
        [O, k] = i.useState(() => new Set()),
        P = (0, a.bG)([C.A], () => C.A.getCollapsedSectionOverridesForTab(T.x.VOICE), []),
        j = (0, h.qZ)(),
        V = i.useMemo(() => {
            let e = new Map();
            for (let t of j) e.set(t.channel.id, t.voiceStates);
            return e;
        }, [j]),
        H = i.useCallback((e) => {
            k((t) => {
                let n = new Set(t);
                return n.has(e) ? n.delete(e) : n.add(e), n;
            });
        }, []),
        Y = i.useCallback((e) => {
            (0, M.G)({ tab: T.x.VOICE, sectionKey: e });
        }, []),
        W = i.useMemo(() => new Set(j.map((e) => e.channel.id)), [j]),
        [z, B] = i.useState([]);
    (0, d.RT)(n, j, B, h.MV);
    let $ = i.useRef(null),
        K = (0, o.A)("friends-widget-voice", $),
        [X, Z] = (0, a.bG)([D.A], () => D.A.getFavoriteTargetIdsForTab(T.x.VOICE), [], p.D),
        Q = i.useMemo(() => X.filter((e) => W.has(e)), [X, W]),
        { friendVoiceChannelIds: J, recentVoiceChannelIds: q } = (0, h.S4)(),
        ee = i.useMemo(() => J.filter((e) => W.has(e)), [J, W]),
        et = i.useMemo(() => q.filter((e) => W.has(e)), [q, W]),
        en = (0, a.bG)([E.A], () => E.A.getVoiceChannelId(), []),
        el = (0, a.bG)([v.A], () => v.A.getActiveNowChannelIds({ kind: v.u.Voice }), []),
        ei = (0, a.bG)(
            [A.A],
            () =>
                A.A.affinities
                    .filter((e) => (e.score ?? 0) > 0)
                    .slice(0, 2)
                    .map((e) => e.guildId),
            [],
        ),
        er = i.useMemo(() => {
            let e, t, n, l;
            return (
                (t = String((e = new Date()).getDate()).padStart(2, "0")),
                (n = String(e.getMonth() + 1).padStart(2, "0")),
                (l = String(e.getFullYear() % 100).padStart(2, "0")),
                b(`${t}${n}${l}`)
            );
        }, []),
        es = i.useMemo(() => new Set(X), [X]),
        ea = i.useMemo(() => ee.filter((e) => !es.has(e)), [ee, es]),
        eu = i.useMemo(() => et.filter((e) => !es.has(e)), [et, es]),
        eo = i.useMemo(() => new Set(ea), [ea]),
        ed = i.useMemo(() => el.filter((e) => !es.has(e) && !eo.has(e) && W.has(e)), [el, es, eo, W]),
        ec = i.useMemo(() => {
            let e = [],
                t = new Set(),
                n = (n) => {
                    null == n || !W.has(n) || es.has(n) || t.has(n) || (t.add(n), e.push(n));
                };
            for (let t of (null != en && I.A.getChannel(en)?.isVocal() && n(en), eu)) {
                if (e.length >= 8) break;
                n(t);
            }
            let l = new Set(ei),
                i = new Set([...es, ...ea]),
                r = j
                    .filter((e) => {
                        let n = e.channel;
                        if (!n?.isVocal?.()) return !1;
                        let r = n.getGuildId?.() ?? null;
                        return !(null == r || !l.has(r) || i.has(n.id) || t.has(n.id));
                    })
                    .map((e) => {
                        var t;
                        return {
                            channelId: e.channel.id,
                            voiceUserCount: e.voiceStates?.length ?? 0,
                            shuffle: ((t = e.channel.id), b(`${er}:${t}`)),
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
        }, [j, W, en, es, ea, eu, er, ei]),
        eh = i.useMemo(() => {
            let e = (e) => !0 === P[e],
                t = (e) => (e.voiceStates?.length ?? 0) > 0,
                n = [];
            if ("" !== _)
                return (
                    n.push({
                        kind: "SEARCH_RESULTS",
                        key: "SEARCH_RESULTS",
                        title: G.intl.string(U.default.DUIbKP),
                        count: z.length,
                        rows: z.map((e) => ({ channelId: e.channel.id, voiceStates: e.voiceStates })),
                        length: z.length,
                    }),
                    n
                );
            if (Q.length > 0 && Z > 0) {
                let l = Q.map((e) => ({ channelId: e, voiceStates: V.get(e) })),
                    i = e("FAVORITES") ? l.filter(t) : l;
                n.push({
                    kind: "FAVORITES",
                    key: "FAVORITES",
                    title: G.intl.string(U.default.OskevP),
                    count: l.length,
                    rows: i,
                    length: Math.max(i.length, 1),
                });
            }
            if (ea.length > 0) {
                let l = ea.map((e) => ({ channelId: e, voiceStates: V.get(e) })),
                    i = e("FRIENDS_IN_VOICE") ? l.filter(t) : l;
                n.push({
                    kind: "FRIENDS_IN_VOICE",
                    key: "FRIENDS_IN_VOICE",
                    title: G.intl.string(U.default["C+ojiQ"]),
                    count: l.length,
                    rows: i,
                    length: Math.max(i.length, 1),
                });
            }
            if (ed.length > 0) {
                let l = ed.map((e) => ({ channelId: e, voiceStates: V.get(e) })),
                    i = e("ACTIVE_NOW") ? l.filter(t) : l;
                n.push({
                    kind: "ACTIVE_NOW",
                    key: "ACTIVE_NOW",
                    title: G.intl.string(U.default.eiie2x),
                    count: l.length,
                    rows: i,
                    length: Math.max(i.length, 1),
                });
            }
            if (ec.length > 0) {
                let l = ec.map((e) => ({ channelId: e, voiceStates: V.get(e) })),
                    i = e("SUGGESTED_VOICE_CHANNELS") ? l.filter(t) : l;
                n.push({
                    kind: "SUGGESTED_VOICE_CHANNELS",
                    key: "SUGGESTED_VOICE_CHANNELS",
                    title: G.intl.string(U.default["9ME4wE"]),
                    count: l.length,
                    rows: i,
                    length: Math.max(i.length, 1),
                });
            }
            return n;
        }, [P, _, Q, Z, ed, ea, z, ec, V]),
        eg = i.useMemo(() => eh.map((e) => e.length), [eh]),
        eI = i.useCallback(
            (e) => {
                for (let t = 0; t < eh.length; t += 1) {
                    let n = eh[t].rows.findIndex((t) => t.channelId === e);
                    if (-1 !== n) return { section: t, row: n };
                }
                return null;
            },
            [eh],
        ),
        eA = i.useCallback(() => {
            let e = eh.findIndex((e) => "FAVORITES" === e.kind);
            return -1 === e ? null : { section: e, row: void 0 };
        }, [eh]);
    (0, R.$)({
        scrollerRef: $,
        favoriteTargetIds: Q,
        getScrollTargetForTargetId: (e) => eI(e),
        getFallbackScrollTarget: eA,
        padding: 8,
        animate: !1,
    });
    let ef = (0, N.Dk)(() => {
            let e = new Set();
            for (let t of eh) for (let n of t.rows) e.add(n.channelId);
            return e;
        }, [eh]),
        { shownUserIds: eE, liveUserIds: em } = (0, a.cf)([I.A, g.A], () => {
            let e = new Map();
            for (let t of j) e.set(t.channel.id, t.voiceStates);
            let t = new Set(),
                n = new Set();
            for (let l of ef) {
                let i = I.A.getChannel(l),
                    r = i?.getGuildId?.() ?? i?.guild_id ?? null;
                for (let i of (function (e, t) {
                    let n = Array.from(
                        new Set((t ?? Object.values(m.A.getVoiceStatesForChannel(e))).map((e) => e.userId)),
                    );
                    return (
                        n.sort((e, t) => {
                            let n = f.A.isFriend(e),
                                l = f.A.isFriend(t);
                            return n && !l
                                ? -1
                                : !n && l
                                  ? 1
                                  : (c.A.getUserAffinity(t)?.vcProbability ?? 0) -
                                    (c.A.getUserAffinity(e)?.vcProbability ?? 0);
                        }),
                        n.slice(0, 4)
                    );
                })(l, e.get(l)))
                    t.add(i), null != r && null != g.A.getStreamForUser(i, r) && n.add(i);
            }
            return { shownUserIds: t, liveUserIds: n };
        }, [ef, j]),
        eS = (0, N.Dk)(() => eE, [eE]),
        e_ = (0, N.Dk)(() => em, [em]);
    i.useEffect(() => {
        (0 !== eS.size || 0 !== e_.size) && F({ shownUserIds: L(eS), liveUserIds: L(e_) });
    }, [eS, e_]);
    let ep = i.useCallback((e) => eh[e], [eh]),
        eN = i.useCallback(
            (e) => {
                let { section: t } = e,
                    n = ep(t);
                if (null == n) return null;
                let i = "SEARCH_RESULTS" !== n.kind,
                    r = i && !0 === P[n.key];
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(u.AC4, { children: n.title }),
                        (0, l.jsx)(y.I, {
                            title: n.title,
                            count: n.count,
                            isCollapsed: r,
                            canCollapse: i,
                            onToggle: () => Y(n.key),
                        }),
                    ],
                });
            },
            [P, ep, Y],
        ),
        eT = i.useCallback(
            (n) => {
                let i = ep(n.section);
                if (null == i) return null;
                let r = i.rows[n.row];
                if (null == r) return null;
                let s = `${i.key}:${r.channelId}`,
                    a = O.has(r.channelId);
                return (0, l.jsx)(
                    x.C,
                    {
                        channelId: r.channelId,
                        listItemId: s,
                        voiceStates: r.voiceStates,
                        isExpanded: a,
                        onToggleExpanded: H,
                        shouldHighlightIfRecentlyAdded: "FAVORITES" === i.kind,
                        onPrimaryAction: e,
                        onContextMenu: t,
                    },
                    s,
                );
            },
            [O, ep, t, e, H],
        ),
        ey = i.useCallback(() => 40, []),
        eC = i.useCallback(
            (e, t) => {
                let n = ep(e);
                if (null == n) return 50;
                if (0 === n.rows.length) return 0;
                let l = n.rows[t];
                if (null == l || !O.has(l.channelId)) return 50;
                let i = I.A.getChannel(l.channelId),
                    r = Math.min((null != i ? S.Ay.getVoiceStatesForChannel(i) : []).length, 25);
                return r <= 0 ? 50 : 50 + (32 * r + (r - 1) * 2 + 8);
            },
            [O, ep],
        ),
        ex = i.useCallback((e) => {
            r(e), $.current?.scrollToTop();
        }, []);
    return (0, l.jsxs)("div", {
        className: w.kL,
        children: [
            (0, l.jsx)("div", {
                className: w.MT,
                children: (0, l.jsx)(u.IWV, {
                    query: n,
                    onChange: ex,
                    onClear: () => r(""),
                    placeholder: G.intl.string(U.default.OV3KfO),
                    size: "md",
                }),
            }),
            (0, l.jsx)(s.hD, {
                navigator: K,
                children: (0, l.jsx)(s.PR, {
                    children: (e) => {
                        let { ref: t, role: n, ...i } = e;
                        return (0, l.jsx)(u.skg, {
                            children: (e) =>
                                (0, l.jsx)(u.B8B, {
                                    innerRole: n,
                                    innerAriaLabel: G.intl.string(G.t.OGiMXJ),
                                    ref: (e) => {
                                        ($.current = e), (t.current = e?.getScrollerNode() ?? null);
                                    },
                                    className: w.p_,
                                    sectionHeight: ey,
                                    rowHeight: eC,
                                    sidebarHeight: 0,
                                    renderSection: eN,
                                    renderRow: eT,
                                    sections: eg,
                                    paddingBottom: 8,
                                    ...i,
                                    ...e,
                                }),
                        });
                    },
                }),
            }),
        ],
    });
}
