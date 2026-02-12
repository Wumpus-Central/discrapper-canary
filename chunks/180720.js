n.d(t, { T: () => L }), n(321073);
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
    f = n(197305),
    A = n(994500),
    E = n(309010),
    m = n(977997),
    S = n(607567),
    p = n(256415),
    N = n(996439),
    T = n(810412),
    _ = n(914853),
    C = n(179917),
    y = n(419072),
    x = n(294809),
    M = n(554932),
    v = n(406595),
    D = n(557404),
    R = n(652215),
    U = n(895867),
    O = n(985018),
    G = n(416001);
function b(e) {
    return Array.from(e).sort();
}
let w = (0, r.throttle)(
    (e) => {
        (0, T.Y)(R.uss.FRIENDS, {
            locked: p.default.isInstanceLocked(),
            shownUserIds: e.shownUserIds,
            liveUserIds: e.liveUserIds,
            contentInventoryIds: [],
        });
    },
    3e3,
    { leading: !0, trailing: !1 },
);
function F(e) {
    let t = 0x811c9dc5;
    for (let n = 0; n < e.length; n += 1) (t ^= e.charCodeAt(n)), (t = Math.imul(t, 0x1000193));
    return t >>> 0;
}
function L() {
    let { onPrimaryAction: e, onContextMenu: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [n, r] = i.useState(""),
        p = n.trim().toLowerCase(),
        [R, L] = i.useState(() => new Set()),
        k = (0, a.bG)([y.A], () => y.A.getCollapsedSectionOverridesForTab(_.x.VOICE), []),
        P = (0, h.qZ)(),
        j = i.useMemo(() => {
            let e = new Map();
            for (let t of P) e.set(t.channel.id, t.voiceStates);
            return e;
        }, [P]),
        V = i.useCallback((e) => {
            L((t) => {
                let n = new Set(t);
                return n.has(e) ? n.delete(e) : n.add(e), n;
            });
        }, []),
        H = i.useCallback((e) => {
            (0, M.G)({ tab: _.x.VOICE, sectionKey: e });
        }, []),
        Y = i.useMemo(() => new Set(P.map((e) => e.channel.id)), [P]),
        [W, z] = i.useState([]);
    (0, d.RT)(n, P, z, h.MV);
    let $ = i.useRef(null),
        B = (0, o.A)("friends-widget-voice", $),
        [K, X] = (0, a.bG)([v.A], () => v.A.getFavoriteTargetIdsForTab(_.x.VOICE), [], N.D),
        Z = i.useMemo(() => K.filter((e) => Y.has(e)), [K, Y]),
        { friendVoiceChannelIds: Q, recentVoiceChannelIds: J } = (0, h.S4)(),
        q = i.useMemo(() => Q.filter((e) => Y.has(e)), [Q, Y]),
        ee = i.useMemo(() => J.filter((e) => Y.has(e)), [J, Y]),
        et = (0, a.bG)([E.A], () => E.A.getVoiceChannelId(), []),
        en = (0, a.bG)(
            [f.A],
            () =>
                f.A.affinities
                    .filter((e) => (e.score ?? 0) > 0)
                    .slice(0, 2)
                    .map((e) => e.guildId),
            [],
        ),
        el = i.useMemo(() => {
            let e, t, n, l;
            return (
                (t = String((e = new Date()).getDate()).padStart(2, "0")),
                (n = String(e.getMonth() + 1).padStart(2, "0")),
                (l = String(e.getFullYear() % 100).padStart(2, "0")),
                F(`${t}${n}${l}`)
            );
        }, []),
        ei = i.useMemo(() => new Set(K), [K]),
        er = i.useMemo(() => q.filter((e) => !ei.has(e)), [q, ei]),
        es = i.useMemo(() => ee.filter((e) => !ei.has(e)), [ee, ei]),
        ea = i.useMemo(() => {
            let e = [],
                t = new Set(),
                n = (n) => {
                    null == n || !Y.has(n) || ei.has(n) || t.has(n) || (t.add(n), e.push(n));
                };
            for (let t of (null != et && I.A.getChannel(et)?.isVocal() && n(et), es)) {
                if (e.length >= 8) break;
                n(t);
            }
            let l = new Set(en),
                i = new Set([...ei, ...er]),
                r = P.filter((e) => {
                    let n = e.channel;
                    if (!n?.isVocal?.()) return !1;
                    let r = n.getGuildId?.() ?? null;
                    return !(null == r || !l.has(r) || i.has(n.id) || t.has(n.id));
                }).map((e) => {
                    var t;
                    return {
                        channelId: e.channel.id,
                        voiceUserCount: e.voiceStates?.length ?? 0,
                        shuffle: ((t = e.channel.id), F(`${el}:${t}`)),
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
        }, [P, Y, et, ei, er, es, el, en]),
        eu = i.useMemo(() => {
            let e = (e) => !0 === k[e],
                t = (e) => (e.voiceStates?.length ?? 0) > 0,
                n = [];
            if ("" !== p)
                return (
                    n.push({
                        kind: "SEARCH_RESULTS",
                        key: "SEARCH_RESULTS",
                        title: O.intl.string(U.default.DUIbKP),
                        count: W.length,
                        rows: W.map((e) => ({ channelId: e.channel.id, voiceStates: e.voiceStates })),
                        length: W.length,
                    }),
                    n
                );
            if (Z.length > 0 && X > 0) {
                let l = Z.map((e) => ({ channelId: e, voiceStates: j.get(e) })),
                    i = e("FAVORITES") ? l.filter(t) : l;
                n.push({
                    kind: "FAVORITES",
                    key: "FAVORITES",
                    title: O.intl.string(U.default.OskevP),
                    count: l.length,
                    rows: i,
                    length: Math.max(i.length, 1),
                });
            }
            if (er.length > 0) {
                let l = er.map((e) => ({ channelId: e, voiceStates: j.get(e) })),
                    i = e("FRIENDS_IN_VOICE") ? l.filter(t) : l;
                n.push({
                    kind: "FRIENDS_IN_VOICE",
                    key: "FRIENDS_IN_VOICE",
                    title: O.intl.string(U.default["C+ojiQ"]),
                    count: l.length,
                    rows: i,
                    length: Math.max(i.length, 1),
                });
            }
            if (ea.length > 0) {
                let l = ea.map((e) => ({ channelId: e, voiceStates: j.get(e) })),
                    i = e("SUGGESTED_VOICE_CHANNELS") ? l.filter(t) : l;
                n.push({
                    kind: "SUGGESTED_VOICE_CHANNELS",
                    key: "SUGGESTED_VOICE_CHANNELS",
                    title: O.intl.string(U.default["9ME4wE"]),
                    count: l.length,
                    rows: i,
                    length: Math.max(i.length, 1),
                });
            }
            return n;
        }, [k, p, Z, X, er, W, ea, j]),
        eo = i.useMemo(() => eu.map((e) => e.length), [eu]),
        ed = i.useCallback(
            (e) => {
                for (let t = 0; t < eu.length; t += 1) {
                    let n = eu[t].rows.findIndex((t) => t.channelId === e);
                    if (-1 !== n) return { section: t, row: n };
                }
                return null;
            },
            [eu],
        ),
        ec = i.useCallback(() => {
            let e = eu.findIndex((e) => "FAVORITES" === e.kind);
            return -1 === e ? null : { section: e, row: void 0 };
        }, [eu]);
    (0, D.$)({
        scrollerRef: $,
        favoriteTargetIds: Z,
        getScrollTargetForTargetId: (e) => ed(e),
        getFallbackScrollTarget: ec,
        padding: 8,
        animate: !1,
    });
    let eh = (0, T.Dk)(() => {
            let e = new Set();
            for (let t of eu) for (let n of t.rows) e.add(n.channelId);
            return e;
        }, [eu]),
        { shownUserIds: eg, liveUserIds: eI } = (0, a.cf)([I.A, g.A], () => {
            let e = new Map();
            for (let t of P) e.set(t.channel.id, t.voiceStates);
            let t = new Set(),
                n = new Set();
            for (let l of eh) {
                let i = I.A.getChannel(l),
                    r = i?.getGuildId?.() ?? i?.guild_id ?? null;
                for (let i of (function (e, t) {
                    let n = Array.from(
                        new Set((t ?? Object.values(m.A.getVoiceStatesForChannel(e))).map((e) => e.userId)),
                    );
                    return (
                        n.sort((e, t) => {
                            let n = A.A.isFriend(e),
                                l = A.A.isFriend(t);
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
        }, [eh, P]),
        ef = (0, T.Dk)(() => eg, [eg]),
        eA = (0, T.Dk)(() => eI, [eI]);
    i.useEffect(() => {
        (0 !== ef.size || 0 !== eA.size) && w({ shownUserIds: b(ef), liveUserIds: b(eA) });
    }, [ef, eA]);
    let eE = i.useCallback((e) => eu[e], [eu]),
        em = i.useCallback(
            (e) => {
                let { section: t } = e,
                    n = eE(t);
                if (null == n) return null;
                let i = "SEARCH_RESULTS" !== n.kind,
                    r = i && !0 === k[n.key];
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(u.AC4, { children: n.title }),
                        (0, l.jsx)(C.I, {
                            title: n.title,
                            count: n.count,
                            isCollapsed: r,
                            canCollapse: i,
                            onToggle: () => H(n.key),
                        }),
                    ],
                });
            },
            [k, eE, H],
        ),
        eS = i.useCallback(
            (n) => {
                let i = eE(n.section);
                if (null == i) return null;
                let r = i.rows[n.row];
                if (null == r) return null;
                let s = `${i.key}:${r.channelId}`,
                    a = R.has(r.channelId);
                return (0, l.jsx)(
                    x.C,
                    {
                        channelId: r.channelId,
                        listItemId: s,
                        voiceStates: r.voiceStates,
                        isExpanded: a,
                        onToggleExpanded: V,
                        shouldHighlightIfRecentlyAdded: "FAVORITES" === i.kind,
                        onPrimaryAction: e,
                        onContextMenu: t,
                    },
                    s,
                );
            },
            [R, eE, t, e, V],
        ),
        ep = i.useCallback(() => 40, []),
        eN = i.useCallback(
            (e, t) => {
                let n = eE(e);
                if (null == n) return 50;
                if (0 === n.rows.length) return 0;
                let l = n.rows[t];
                if (null == l || !R.has(l.channelId)) return 50;
                let i = I.A.getChannel(l.channelId),
                    r = Math.min((null != i ? S.Ay.getVoiceStatesForChannel(i) : []).length, 25);
                return r <= 0 ? 50 : 50 + (32 * r + (r - 1) * 2 + 8);
            },
            [R, eE],
        ),
        eT = i.useCallback((e) => {
            r(e), $.current?.scrollToTop();
        }, []);
    return (0, l.jsxs)("div", {
        className: G.kL,
        children: [
            (0, l.jsx)("div", {
                className: G.MT,
                children: (0, l.jsx)(u.IWV, {
                    query: n,
                    onChange: eT,
                    onClear: () => r(""),
                    placeholder: O.intl.string(U.default.OV3KfO),
                    size: "md",
                }),
            }),
            (0, l.jsx)(s.hD, {
                navigator: B,
                children: (0, l.jsx)(s.PR, {
                    children: (e) => {
                        let { ref: t, role: n, ...i } = e;
                        return (0, l.jsx)(u.skg, {
                            children: (e) =>
                                (0, l.jsx)(u.B8B, {
                                    innerRole: n,
                                    innerAriaLabel: O.intl.string(O.t.OGiMXJ),
                                    ref: (e) => {
                                        ($.current = e), (t.current = e?.getScrollerNode() ?? null);
                                    },
                                    className: G.p_,
                                    sectionHeight: ep,
                                    rowHeight: eN,
                                    sidebarHeight: 0,
                                    renderSection: em,
                                    renderRow: eS,
                                    sections: eo,
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
