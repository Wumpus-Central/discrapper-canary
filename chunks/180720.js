n.d(t, { T: () => V }), n(321073);
var l = n(627968),
    i = n(64700),
    r = n(735438),
    s = n(837381),
    a = n(311907),
    u = n(140735),
    o = n(892547),
    d = n(312138),
    c = n(475825),
    h = n(928039),
    g = n(704554),
    m = n(21119),
    I = n(594831),
    E = n(616356),
    A = n(734057),
    f = n(197305),
    p = n(994500),
    S = n(309010),
    N = n(977997),
    x = n(607567),
    T = n(256415),
    _ = n(996439),
    y = n(810412),
    v = n(914853),
    C = n(179917),
    R = n(419072),
    D = n(294809),
    b = n(316541),
    j = n(554932),
    M = n(406595),
    k = n(557404),
    O = n(652215),
    w = n(21197),
    L = n(985018),
    F = n(188644);
function G(e) {
    return Array.from(e).sort();
}
let U = (0, r.throttle)(
    (e) => {
        (0, y.Y)(O.uss.FRIENDS, {
            locked: T.default.isInstanceLocked(),
            shownUserIds: e.shownUserIds,
            liveUserIds: e.liveUserIds,
            contentInventoryIds: [],
        });
    },
    3e3,
    { leading: !0, trailing: !1 },
);
function P(e) {
    let t = 0x811c9dc5;
    for (let n = 0; n < e.length; n += 1) (t ^= e.charCodeAt(n)), (t = Math.imul(t, 0x1000193));
    return t >>> 0;
}
function V() {
    let { onPrimaryAction: e, onContextMenu: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [n, r] = i.useState(""),
        T = n.trim().toLowerCase(),
        [O, V] = i.useState(() => new Set()),
        H = (0, a.bG)([R.A], () => R.A.getCollapsedSectionOverridesForTab(v.x.VOICE), []),
        Y = (0, I.qZ)(),
        K = i.useMemo(() => {
            let e = new Map();
            for (let t of Y) e.set(t.channel.id, t.voiceStates);
            return e;
        }, [Y]),
        z = i.useCallback((e) => {
            V((t) => {
                let n = new Set(t);
                return n.has(e) ? n.delete(e) : n.add(e), n;
            });
        }, []),
        X = i.useCallback((e) => {
            (0, j.G)({ tab: v.x.VOICE, sectionKey: e });
        }, []),
        Z = i.useMemo(() => new Set(Y.map((e) => e.channel.id)), [Y]),
        [B, W] = i.useState([]);
    (0, g.RT)(n, Y, W, I.MV);
    let $ = i.useRef(null),
        q = (0, h.A)("friends-widget-voice", $),
        [Q, J] = (0, a.bG)([M.A], () => M.A.getFavoriteTargetIdsForTab(v.x.VOICE), [], _.D),
        ee = i.useMemo(() => Q.filter((e) => Z.has(e)), [Q, Z]),
        { friendVoiceChannelIds: et, recentVoiceChannelIds: en } = (0, I.S4)(),
        el = i.useMemo(() => et.filter((e) => Z.has(e)), [et, Z]),
        ei = i.useMemo(() => en.filter((e) => Z.has(e)), [en, Z]),
        er = (0, a.bG)([S.A], () => S.A.getVoiceChannelId(), []),
        es = (0, a.bG)([b.A], () => b.A.getActiveNowChannelIds({ kind: b.u.Voice }), []),
        ea = (0, a.bG)(
            [f.A],
            () =>
                f.A.affinities
                    .filter((e) => (e.score ?? 0) > 0)
                    .slice(0, 2)
                    .map((e) => e.guildId),
            [],
        ),
        eu = i.useMemo(() => {
            let e, t, n, l;
            return (
                (t = String((e = new Date()).getDate()).padStart(2, "0")),
                (n = String(e.getMonth() + 1).padStart(2, "0")),
                (l = String(e.getFullYear() % 100).padStart(2, "0")),
                P(`${t}${n}${l}`)
            );
        }, []),
        eo = i.useMemo(() => new Set(Q), [Q]),
        ed = i.useMemo(() => el.filter((e) => !eo.has(e)), [el, eo]),
        ec = i.useMemo(() => ei.filter((e) => !eo.has(e)), [ei, eo]),
        eh = i.useMemo(() => new Set(ed), [ed]),
        eg = i.useMemo(() => es.filter((e) => !eo.has(e) && !eh.has(e) && Z.has(e)), [es, eo, eh, Z]),
        em = i.useMemo(() => {
            let e = [],
                t = new Set(),
                n = (n) => {
                    null == n || !Z.has(n) || eo.has(n) || t.has(n) || (t.add(n), e.push(n));
                };
            for (let t of (null != er && A.A.getChannel(er)?.isVocal() && n(er), ec)) {
                if (e.length >= 8) break;
                n(t);
            }
            let l = new Set(ea),
                i = new Set([...eo, ...ed]),
                r = Y.filter((e) => {
                    let n = e.channel;
                    if (!n?.isVocal?.()) return !1;
                    let r = n.getGuildId?.() ?? null;
                    return !(null == r || !l.has(r) || i.has(n.id) || t.has(n.id));
                }).map((e) => {
                    var t;
                    return {
                        channelId: e.channel.id,
                        voiceUserCount: e.voiceStates?.length ?? 0,
                        shuffle: ((t = e.channel.id), P(`${eu}:${t}`)),
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
        }, [Y, Z, er, eo, ed, ec, eu, ea]),
        eI = i.useMemo(() => {
            let e = (e) => !0 === H[e],
                t = (e) => (e.voiceStates?.length ?? 0) > 0,
                n = [];
            if ("" !== T)
                return (
                    n.push({
                        kind: "SEARCH_RESULTS",
                        key: "SEARCH_RESULTS",
                        title: L.intl.string(w.default.DUIbKP),
                        count: B.length,
                        rows: B.map((e) => ({ channelId: e.channel.id, voiceStates: e.voiceStates })),
                        length: B.length,
                    }),
                    n
                );
            if (ee.length > 0 && J > 0) {
                let l = ee.map((e) => ({ channelId: e, voiceStates: K.get(e) })),
                    i = e("FAVORITES") ? l.filter(t) : l;
                n.push({
                    kind: "FAVORITES",
                    key: "FAVORITES",
                    title: L.intl.string(w.default.OskevP),
                    count: l.length,
                    rows: i,
                    length: Math.max(i.length, 1),
                });
            }
            if (ed.length > 0) {
                let l = ed.map((e) => ({ channelId: e, voiceStates: K.get(e) })),
                    i = e("FRIENDS_IN_VOICE") ? l.filter(t) : l;
                n.push({
                    kind: "FRIENDS_IN_VOICE",
                    key: "FRIENDS_IN_VOICE",
                    title: L.intl.string(w.default["C+ojiQ"]),
                    count: l.length,
                    rows: i,
                    length: Math.max(i.length, 1),
                });
            }
            if (eg.length > 0) {
                let l = eg.map((e) => ({ channelId: e, voiceStates: K.get(e) })),
                    i = e("ACTIVE_NOW") ? l.filter(t) : l;
                n.push({
                    kind: "ACTIVE_NOW",
                    key: "ACTIVE_NOW",
                    title: L.intl.string(w.default.eiie2x),
                    count: l.length,
                    rows: i,
                    length: Math.max(i.length, 1),
                });
            }
            if (em.length > 0) {
                let l = em.map((e) => ({ channelId: e, voiceStates: K.get(e) })),
                    i = e("SUGGESTED_VOICE_CHANNELS") ? l.filter(t) : l;
                n.push({
                    kind: "SUGGESTED_VOICE_CHANNELS",
                    key: "SUGGESTED_VOICE_CHANNELS",
                    title: L.intl.string(w.default["9ME4wE"]),
                    count: l.length,
                    rows: i,
                    length: Math.max(i.length, 1),
                });
            }
            return n;
        }, [H, T, ee, J, eg, ed, B, em, K]),
        eE = i.useMemo(() => eI.map((e) => e.length), [eI]),
        eA = i.useCallback(
            (e) => {
                for (let t = 0; t < eI.length; t += 1) {
                    let n = eI[t].rows.findIndex((t) => t.channelId === e);
                    if (-1 !== n) return { section: t, row: n };
                }
                return null;
            },
            [eI],
        ),
        ef = i.useCallback(() => {
            let e = eI.findIndex((e) => "FAVORITES" === e.kind);
            return -1 === e ? null : { section: e, row: void 0 };
        }, [eI]);
    (0, k.$)({
        scrollerRef: $,
        favoriteTargetIds: ee,
        getScrollTargetForTargetId: (e) => eA(e),
        getFallbackScrollTarget: ef,
        padding: 8,
        animate: !1,
    });
    let ep = (0, y.Dk)(() => {
            let e = new Set();
            for (let t of eI) for (let n of t.rows) e.add(n.channelId);
            return e;
        }, [eI]),
        { shownUserIds: eS, liveUserIds: eN } = (0, a.cf)([A.A, E.A], () => {
            let e = new Map();
            for (let t of Y) e.set(t.channel.id, t.voiceStates);
            let t = new Set(),
                n = new Set();
            for (let l of ep) {
                let i = A.A.getChannel(l),
                    r = i?.getGuildId?.() ?? i?.guild_id ?? null;
                for (let i of (function (e, t) {
                    let n = Array.from(
                        new Set((t ?? Object.values(N.A.getVoiceStatesForChannel(e))).map((e) => e.userId)),
                    );
                    return (
                        n.sort((e, t) => {
                            let n = p.A.isFriend(e),
                                l = p.A.isFriend(t);
                            return n && !l
                                ? -1
                                : !n && l
                                  ? 1
                                  : (m.A.getUserAffinity(t)?.vcProbability ?? 0) -
                                    (m.A.getUserAffinity(e)?.vcProbability ?? 0);
                        }),
                        n.slice(0, 4)
                    );
                })(l, e.get(l)))
                    t.add(i), null != r && null != E.A.getStreamForUser(i, r) && n.add(i);
            }
            return { shownUserIds: t, liveUserIds: n };
        }, [ep, Y]),
        ex = (0, y.Dk)(() => eS, [eS]),
        eT = (0, y.Dk)(() => eN, [eN]);
    i.useEffect(() => {
        (0 !== ex.size || 0 !== eT.size) && U({ shownUserIds: G(ex), liveUserIds: G(eT) });
    }, [ex, eT]);
    let e_ = i.useCallback((e) => eI[e], [eI]),
        ey = i.useCallback(
            (e) => {
                let { section: t } = e,
                    n = e_(t);
                if (null == n) return null;
                let i = "SEARCH_RESULTS" !== n.kind,
                    r = i && !0 === H[n.key];
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(u.A, { children: n.title }),
                        (0, l.jsx)(C.I, {
                            title: n.title,
                            count: n.count,
                            isCollapsed: r,
                            canCollapse: i,
                            onToggle: () => X(n.key),
                        }),
                    ],
                });
            },
            [H, e_, X],
        ),
        ev = i.useCallback(
            (n) => {
                let i = e_(n.section);
                if (null == i) return null;
                let r = i.rows[n.row];
                if (null == r) return null;
                let s = `${i.key}:${r.channelId}`,
                    a = O.has(r.channelId);
                return (0, l.jsx)(
                    D.C,
                    {
                        channelId: r.channelId,
                        listItemId: s,
                        voiceStates: r.voiceStates,
                        isExpanded: a,
                        onToggleExpanded: z,
                        shouldHighlightIfRecentlyAdded: "FAVORITES" === i.kind,
                        onPrimaryAction: e,
                        onContextMenu: t,
                    },
                    s,
                );
            },
            [O, e_, t, e, z],
        ),
        eC = i.useCallback(() => 40, []),
        eR = i.useCallback(
            (e, t) => {
                let n = e_(e);
                if (null == n) return 50;
                if (0 === n.rows.length) return 0;
                let l = n.rows[t];
                if (null == l || !O.has(l.channelId)) return 50;
                let i = A.A.getChannel(l.channelId),
                    r = Math.min((null != i ? x.Ay.getVoiceStatesForChannel(i) : []).length, 25);
                return r <= 0 ? 50 : 50 + (32 * r + (r - 1) * 2 + 8);
            },
            [O, e_],
        ),
        eD = i.useCallback((e) => {
            r(e), $.current?.scrollToTop();
        }, []);
    return (0, l.jsxs)("div", {
        className: F.kL,
        children: [
            (0, l.jsx)("div", {
                className: F.MT,
                children: (0, l.jsx)(o.I, {
                    query: n,
                    onChange: eD,
                    onClear: () => r(""),
                    placeholder: L.intl.string(w.default.OV3KfO),
                    size: "md",
                }),
            }),
            (0, l.jsx)(s.hD, {
                navigator: q,
                children: (0, l.jsx)(s.PR, {
                    children: (e) => {
                        let { ref: t, role: n, ...i } = e;
                        return (0, l.jsx)(d.sk, {
                            children: (e) =>
                                (0, l.jsx)(c.OZ, {
                                    innerRole: n,
                                    innerAriaLabel: L.intl.string(L.t.OGiMXJ),
                                    ref: (e) => {
                                        ($.current = e), (t.current = e?.getScrollerNode() ?? null);
                                    },
                                    className: F.p_,
                                    sectionHeight: eC,
                                    rowHeight: eR,
                                    sidebarHeight: 0,
                                    renderSection: ey,
                                    renderRow: ev,
                                    sections: eE,
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
