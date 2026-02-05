n.d(t, { T: () => w }), n(321073);
var l = n(627968),
    i = n(64700),
    s = n(735438),
    r = n(837381),
    a = n(311907),
    u = n(397927),
    o = n(928039),
    d = n(485947),
    c = n(704554),
    h = n(21119),
    g = n(594831),
    I = n(616356),
    E = n(734057),
    A = n(197305),
    f = n(994500),
    m = n(309010),
    S = n(977997),
    p = n(607567),
    N = n(256415),
    T = n(996439),
    _ = n(810412),
    y = n(914853),
    C = n(294809),
    x = n(406595),
    v = n(652215),
    M = n(895867),
    D = n(985018),
    R = n(416001);
function U(e) {
    return Array.from(e).sort();
}
let O = (0, s.throttle)(
    (e) => {
        (0, _.Y)(v.uss.FRIENDS, {
            locked: N.default.isInstanceLocked(),
            shownUserIds: e.shownUserIds,
            liveUserIds: e.liveUserIds,
            contentInventoryIds: [],
        });
    },
    3e3,
    { leading: !0, trailing: !1 },
);
function G(e) {
    let t = 0x811c9dc5;
    for (let n = 0; n < e.length; n += 1) (t ^= e.charCodeAt(n)), (t = Math.imul(t, 0x1000193));
    return t >>> 0;
}
function b(e) {
    let { title: t } = e;
    return (0, l.jsx)(d.A, { className: R.uW, children: t });
}
function w() {
    let { onPrimaryAction: e, onContextMenu: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [n, s] = i.useState(""),
        d = n.trim().toLowerCase(),
        [N, v] = i.useState(() => new Set()),
        w = (0, g.qZ)(),
        L = i.useMemo(() => {
            let e = new Map();
            for (let t of w) e.set(t.channel.id, t.voiceStates);
            return e;
        }, [w]),
        k = i.useCallback((e) => {
            v((t) => {
                let n = new Set(t);
                return n.has(e) ? n.delete(e) : n.add(e), n;
            });
        }, []),
        F = i.useMemo(() => new Set(w.map((e) => e.channel.id)), [w]),
        [P, j] = i.useState([]);
    (0, c.RT)(n, w, j, g.MV);
    let V = i.useRef(null),
        H = (0, o.A)("friends-widget-voice", V),
        [Y, z] = (0, a.bG)([x.A], () => x.A.getFavoriteTargetIdsForTab(y.x.VOICE), [], T.D),
        W = i.useMemo(() => Y.filter((e) => F.has(e)), [Y, F]),
        { friendVoiceChannelIds: B, recentVoiceChannelIds: $ } = (0, g.S4)(),
        X = i.useMemo(() => B.filter((e) => F.has(e)), [B, F]),
        K = i.useMemo(() => $.filter((e) => F.has(e)), [$, F]),
        Q = (0, a.bG)([m.A], () => m.A.getVoiceChannelId(), []),
        Z = (0, a.bG)(
            [A.A],
            () =>
                A.A.affinities
                    .filter((e) => (e.score ?? 0) > 0)
                    .slice(0, 2)
                    .map((e) => e.guildId),
            [],
        ),
        q = i.useMemo(() => {
            let e, t, n, l;
            return (
                (t = String((e = new Date()).getDate()).padStart(2, "0")),
                (n = String(e.getMonth() + 1).padStart(2, "0")),
                (l = String(e.getFullYear() % 100).padStart(2, "0")),
                G(`${t}${n}${l}`)
            );
        }, []),
        J = i.useMemo(() => new Set(Y), [Y]),
        ee = i.useMemo(() => X.filter((e) => !J.has(e)), [X, J]),
        et = i.useMemo(() => K.filter((e) => !J.has(e)), [K, J]),
        en = i.useMemo(() => {
            let e = [],
                t = new Set(),
                n = (n) => {
                    null == n || !F.has(n) || J.has(n) || t.has(n) || (t.add(n), e.push(n));
                };
            for (let t of (null != Q && E.A.getChannel(Q)?.isVocal() && n(Q), et)) {
                if (e.length >= 8) break;
                n(t);
            }
            let l = new Set(Z),
                i = new Set([...J, ...ee]),
                s = w
                    .filter((e) => {
                        let n = e.channel;
                        if (!n?.isVocal?.()) return !1;
                        let s = n.getGuildId?.() ?? null;
                        return !(null == s || !l.has(s) || i.has(n.id) || t.has(n.id));
                    })
                    .map((e) => {
                        var t;
                        return {
                            channelId: e.channel.id,
                            voiceUserCount: e.voiceStates?.length ?? 0,
                            shuffle: ((t = e.channel.id), G(`${q}:${t}`)),
                        };
                    }),
                r = s.filter((e) => e.voiceUserCount > 0),
                a = s.filter((e) => 0 === e.voiceUserCount);
            for (let t of (r.sort((e, t) =>
                e.voiceUserCount !== t.voiceUserCount ? t.voiceUserCount - e.voiceUserCount : e.shuffle - t.shuffle,
            ),
            a.sort((e, t) => e.shuffle - t.shuffle),
            [...r, ...a])) {
                if (e.length >= 8) break;
                n(t.channelId);
            }
            return e;
        }, [w, F, Q, J, ee, et, q, Z]),
        el = i.useMemo(() => {
            let e = [];
            return (
                "" !== d
                    ? e.push({
                          kind: "SEARCH_RESULTS",
                          key: "SEARCH_RESULTS",
                          title: D.intl.string(M.default.DUIbKP),
                          rows: P.map((e) => ({ channelId: e.channel.id, voiceStates: e.voiceStates })),
                          length: P.length,
                      })
                    : (Y.length > 0 &&
                          z > 0 &&
                          e.push({
                              kind: "FAVORITES",
                              key: "FAVORITES",
                              title: D.intl.string(M.default.OskevP),
                              rows: W.map((e) => ({ channelId: e, voiceStates: L.get(e) })),
                              length: W.length,
                          }),
                      ee.length > 0 &&
                          e.push({
                              kind: "FRIENDS_IN_VOICE",
                              key: "FRIENDS_IN_VOICE",
                              title: D.intl.string(M.default["C+ojiQ"]),
                              rows: ee.map((e) => ({ channelId: e, voiceStates: L.get(e) })),
                              length: ee.length,
                          }),
                      en.length > 0 &&
                          e.push({
                              kind: "SUGGESTED_VOICE_CHANNELS",
                              key: "SUGGESTED_VOICE_CHANNELS",
                              title: D.intl.string(M.default["9ME4wE"]),
                              rows: en.map((e) => ({ channelId: e, voiceStates: L.get(e) })),
                              length: en.length,
                          })),
                e
            );
        }, [d, W, Y.length, z, ee, P, en, L]),
        ei = i.useMemo(() => el.map((e) => e.length), [el]),
        es = (0, _.Dk)(() => {
            let e = new Set();
            for (let t of el) for (let n of t.rows) e.add(n.channelId);
            return e;
        }, [el]),
        { shownUserIds: er, liveUserIds: ea } = (0, a.cf)([E.A, I.A], () => {
            let e = new Map();
            for (let t of w) e.set(t.channel.id, t.voiceStates);
            let t = new Set(),
                n = new Set();
            for (let l of es) {
                let i = E.A.getChannel(l),
                    s = i?.getGuildId?.() ?? i?.guild_id ?? null;
                for (let i of (function (e, t) {
                    let n = Array.from(
                        new Set((t ?? Object.values(S.A.getVoiceStatesForChannel(e))).map((e) => e.userId)),
                    );
                    return (
                        n.sort((e, t) => {
                            let n = f.A.isFriend(e),
                                l = f.A.isFriend(t);
                            return n && !l
                                ? -1
                                : !n && l
                                  ? 1
                                  : (h.A.getUserAffinity(t)?.vcProbability ?? 0) -
                                    (h.A.getUserAffinity(e)?.vcProbability ?? 0);
                        }),
                        n.slice(0, 4)
                    );
                })(l, e.get(l)))
                    t.add(i), null != s && null != I.A.getStreamForUser(i, s) && n.add(i);
            }
            return { shownUserIds: t, liveUserIds: n };
        }, [es, w]),
        eu = (0, _.Dk)(() => er, [er]),
        eo = (0, _.Dk)(() => ea, [ea]);
    i.useEffect(() => {
        (0 !== eu.size || 0 !== eo.size) && O({ shownUserIds: U(eu), liveUserIds: U(eo) });
    }, [eu, eo]);
    let ed = i.useCallback((e) => el[e], [el]),
        ec = i.useCallback(
            (e) => {
                let { section: t } = e,
                    n = ed(t);
                return null == n
                    ? null
                    : (0, l.jsxs)(l.Fragment, {
                          children: [(0, l.jsx)(u.AC4, { children: n.title }), (0, l.jsx)(b, { title: n.title })],
                      });
            },
            [ed],
        ),
        eh = i.useCallback(
            (n) => {
                let i = ed(n.section);
                if (null == i) return null;
                let s = i.rows[n.row];
                if (null == s) return null;
                let r = `${i.key}:${s.channelId}`,
                    a = N.has(s.channelId);
                return (0, l.jsx)(
                    C.C,
                    {
                        channelId: s.channelId,
                        listItemId: r,
                        voiceStates: s.voiceStates,
                        isExpanded: a,
                        onToggleExpanded: k,
                        shouldHighlightIfRecentlyAdded: "FAVORITES" === i.kind,
                        onPrimaryAction: e,
                        onContextMenu: t,
                    },
                    r,
                );
            },
            [N, ed, t, e, k],
        ),
        eg = i.useCallback(() => 40, []),
        eI = i.useCallback(
            (e, t) => {
                let n = ed(e),
                    l = n?.rows[t];
                if (null == l || !N.has(l.channelId)) return 50;
                let i = E.A.getChannel(l.channelId),
                    s = Math.min((null != i ? p.Ay.getVoiceStatesForChannel(i) : []).length, 25);
                return s <= 0 ? 50 : 50 + (32 * s + (s - 1) * 2 + 8);
            },
            [N, ed],
        ),
        eE = i.useCallback((e) => {
            s(e), V.current?.scrollToTop();
        }, []);
    return (0, l.jsxs)("div", {
        className: R.kL,
        children: [
            (0, l.jsx)("div", {
                className: R.MT,
                children: (0, l.jsx)(u.IWV, {
                    query: n,
                    onChange: eE,
                    onClear: () => s(""),
                    placeholder: D.intl.string(M.default.OV3KfO),
                    size: "md",
                }),
            }),
            (0, l.jsx)(r.hD, {
                navigator: H,
                children: (0, l.jsx)(r.PR, {
                    children: (e) => {
                        let { ref: t, role: n, ...i } = e;
                        return (0, l.jsx)(u.skg, {
                            children: (e) =>
                                (0, l.jsx)(u.B8B, {
                                    innerRole: n,
                                    innerAriaLabel: D.intl.string(D.t.OGiMXJ),
                                    ref: (e) => {
                                        (V.current = e), (t.current = e?.getScrollerNode() ?? null);
                                    },
                                    className: R.p_,
                                    sectionHeight: eg,
                                    rowHeight: eI,
                                    sidebarHeight: 0,
                                    renderSection: ec,
                                    renderRow: eh,
                                    sections: ei,
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
