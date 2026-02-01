n.d(t, {
    T: () => R,
}),
    n(638769),
    n(896048),
    n(733351),
    n(321073);
var i = n(627968),
    r = n(64700),
    l = n(735438),
    a = n(837381),
    s = n(311907),
    o = n(397927),
    u = n(928039),
    c = n(485947),
    d = n(704554),
    h = n(21119),
    p = n(594831),
    f = n(616356),
    g = n(734057),
    m = n(197305),
    y = n(994500),
    A = n(309010),
    v = n(977997),
    b = n(256415),
    E = n(996439),
    O = n(810412),
    x = n(914853),
    _ = n(294809),
    S = n(406595),
    I = n(652215),
    j = n(895867),
    T = n(985018),
    C = n(416001);

function N(e) {
    return Array.from(e).sort();
}
let w = (0, l.throttle)(
    (e) => {
        (0, O.Y)(I.uss.FRIENDS, {
            locked: b.default.isInstanceLocked(),
            shownUserIds: e.shownUserIds,
            liveUserIds: e.liveUserIds,
            contentInventoryIds: [],
        });
    },
    3e3,
    {
        leading: !0,
        trailing: !1,
    },
);

function P(e) {
    let t = 0x811c9dc5;
    for (let n = 0; n < e.length; n += 1) (t ^= e.charCodeAt(n)), (t = Math.imul(t, 0x1000193));
    return t >>> 0;
}

function D(e) {
    let { title: t } = e;
    return (0, i.jsx)(c.A, {
        className: C.uW,
        children: t,
    });
}

function R() {
    let [e, t] = r.useState(""),
        n = e.trim().toLowerCase(),
        [l, c] = r.useState(() => new Set()),
        b = (0, p.qZ)(),
        I = r.useMemo(() => {
            let e = new Map();
            for (let t of b) e.set(t.channel.id, t.voiceStates);
            return e;
        }, [b]),
        R = r.useCallback((e) => {
            c((t) => {
                let n = new Set(t);
                return n.has(e) ? n.delete(e) : n.add(e), n;
            });
        }, []),
        k = r.useMemo(() => new Set(b.map((e) => e.channel.id)), [b]),
        [M, L] = r.useState([]);
    (0, d.RT)(e, b, L, p.MV);
    let U = r.useRef(null),
        G = (0, u.A)("friends-widget-voice", U),
        [V, z] = (0, s.bG)([S.A], () => S.A.getFavoriteTargetIdsForTab(x.x.VOICE), [], E.D),
        F = r.useMemo(() => V.filter((e) => k.has(e)), [V, k]),
        { friendVoiceChannelIds: H, recentVoiceChannelIds: Y } = (0, p.S4)(),
        K = r.useMemo(() => H.filter((e) => k.has(e)), [H, k]),
        W = r.useMemo(() => Y.filter((e) => k.has(e)), [Y, k]),
        B = (0, s.bG)([A.A], () => A.A.getVoiceChannelId(), []),
        Z = (0, s.bG)(
            [m.A],
            () =>
                m.A.affinities
                    .filter((e) => {
                        var t;
                        return (null != (t = e.score) ? t : 0) > 0;
                    })
                    .slice(0, 2)
                    .map((e) => e.guildId),
            [],
        ),
        X = r.useMemo(() => {
            let e, t, n, i;
            return (
                (t = String((e = new Date()).getDate()).padStart(2, "0")),
                (n = String(e.getMonth() + 1).padStart(2, "0")),
                (i = String(e.getFullYear() % 100).padStart(2, "0")),
                P("".concat(t).concat(n).concat(i))
            );
        }, []),
        J = r.useMemo(() => new Set(V), [V]),
        Q = r.useMemo(() => K.filter((e) => !J.has(e)), [K, J]),
        q = r.useMemo(() => W.filter((e) => !J.has(e)), [W, J]),
        $ = r.useMemo(() => {
            var e, t;
            let n = [],
                i = new Set(),
                r = (e) => {
                    null == e || !k.has(e) || J.has(e) || i.has(e) || (i.add(e), n.push(e));
                };
            for (let i of (null != B &&
                null != (e = null == (t = g.A.getChannel(B)) ? void 0 : t.isVocal()) &&
                e &&
                r(B),
            q)) {
                if (n.length >= 8) break;
                r(i);
            }
            let l = new Set(Z),
                a = new Set([...J, ...Q]),
                s = b
                    .filter((e) => {
                        var t, n, r, s;
                        let o = e.channel;
                        if (!(null != (t = null == o || null == (r = o.isVocal) ? void 0 : r.call(o)) && t)) return !1;
                        let u = null != (n = null == (s = o.getGuildId) ? void 0 : s.call(o)) ? n : null;
                        return !(null == u || !l.has(u) || a.has(o.id) || i.has(o.id));
                    })
                    .map((e) => {
                        var t, n, i;
                        return {
                            channelId: e.channel.id,
                            voiceUserCount: null != (t = null == (n = e.voiceStates) ? void 0 : n.length) ? t : 0,
                            shuffle: ((i = e.channel.id), P("".concat(X, ":").concat(i))),
                        };
                    }),
                o = s.filter((e) => e.voiceUserCount > 0),
                u = s.filter((e) => 0 === e.voiceUserCount);
            for (let e of (o.sort((e, t) =>
                e.voiceUserCount !== t.voiceUserCount ? t.voiceUserCount - e.voiceUserCount : e.shuffle - t.shuffle,
            ),
            u.sort((e, t) => e.shuffle - t.shuffle),
            [...o, ...u])) {
                if (n.length >= 8) break;
                r(e.channelId);
            }
            return n;
        }, [b, k, B, J, Q, q, X, Z]),
        ee = r.useMemo(() => {
            let e = [];
            return (
                "" !== n
                    ? e.push({
                          kind: "SEARCH_RESULTS",
                          key: "SEARCH_RESULTS",
                          title: T.intl.string(j.default.DUIbKP),
                          rows: M.map((e) => ({
                              channelId: e.channel.id,
                              voiceStates: e.voiceStates,
                          })),
                          length: M.length,
                      })
                    : (V.length > 0 &&
                          z > 0 &&
                          e.push({
                              kind: "FAVORITES",
                              key: "FAVORITES",
                              title: T.intl.string(j.default.OskevP),
                              rows: F.map((e) => ({
                                  channelId: e,
                                  voiceStates: I.get(e),
                              })),
                              length: F.length,
                          }),
                      Q.length > 0 &&
                          e.push({
                              kind: "FRIENDS_IN_VOICE",
                              key: "FRIENDS_IN_VOICE",
                              title: T.intl.string(j.default["C+ojiQ"]),
                              rows: Q.map((e) => ({
                                  channelId: e,
                                  voiceStates: I.get(e),
                              })),
                              length: Q.length,
                          }),
                      $.length > 0 &&
                          e.push({
                              kind: "SUGGESTED_VOICE_CHANNELS",
                              key: "SUGGESTED_VOICE_CHANNELS",
                              title: T.intl.string(j.default["9ME4wE"]),
                              rows: $.map((e) => ({
                                  channelId: e,
                                  voiceStates: I.get(e),
                              })),
                              length: $.length,
                          })),
                e
            );
        }, [n, F, V.length, z, Q, M, $, I]),
        et = r.useMemo(() => ee.map((e) => e.length), [ee]),
        en = (0, O.Dk)(() => {
            let e = new Set();
            for (let t of ee) for (let n of t.rows) e.add(n.channelId);
            return e;
        }, [ee]),
        { shownUserIds: ei, liveUserIds: er } = (0, s.cf)([g.A, f.A], () => {
            let e = new Map();
            for (let t of b) e.set(t.channel.id, t.voiceStates);
            let t = new Set(),
                n = new Set();
            for (let a of en) {
                var i, r, l;
                let s = g.A.getChannel(a),
                    o =
                        null !=
                        (i =
                            null != (r = null == s || null == (l = s.getGuildId) ? void 0 : l.call(s))
                                ? r
                                : null == s
                                  ? void 0
                                  : s.guild_id)
                            ? i
                            : null;
                for (let i of (function (e, t) {
                    let n = Array.from(
                        new Set((null != t ? t : Object.values(v.A.getVoiceStatesForChannel(e))).map((e) => e.userId)),
                    );
                    return (
                        n.sort((e, t) => {
                            var n, i, r, l;
                            let a = y.A.isFriend(e),
                                s = y.A.isFriend(t);
                            return a && !s
                                ? -1
                                : !a && s
                                  ? 1
                                  : (null != (n = null == (r = h.A.getUserAffinity(t)) ? void 0 : r.vcProbability)
                                        ? n
                                        : 0) -
                                    (null != (i = null == (l = h.A.getUserAffinity(e)) ? void 0 : l.vcProbability)
                                        ? i
                                        : 0);
                        }),
                        n.slice(0, 4)
                    );
                })(a, e.get(a)))
                    t.add(i), null != o && null != f.A.getStreamForUser(i, o) && n.add(i);
            }
            return {
                shownUserIds: t,
                liveUserIds: n,
            };
        }, [en, b]),
        el = (0, O.Dk)(() => ei, [ei]),
        ea = (0, O.Dk)(() => er, [er]);
    r.useEffect(() => {
        (0 !== el.size || 0 !== ea.size) &&
            w({
                shownUserIds: N(el),
                liveUserIds: N(ea),
            });
    }, [el, ea]);
    let es = r.useCallback((e) => ee[e], [ee]),
        eo = r.useCallback(
            (e) => {
                let { section: t } = e,
                    n = es(t);
                return null == n
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(o.AC4, {
                                  children: n.title,
                              }),
                              (0, i.jsx)(D, {
                                  title: n.title,
                              }),
                          ],
                      });
            },
            [es],
        ),
        eu = r.useCallback(
            (e) => {
                let t = es(e.section);
                if (null == t) return null;
                let n = t.rows[e.row];
                if (null == n) return null;
                let r = "".concat(t.key, ":").concat(e.row),
                    a = l.has(n.channelId);
                return (0, i.jsx)(
                    _.C,
                    {
                        channelId: n.channelId,
                        listItemId: r,
                        voiceStates: n.voiceStates,
                        isExpanded: a,
                        onToggleExpanded: R,
                        shouldHighlightIfRecentlyAdded: "FAVORITES" === t.kind,
                    },
                    r,
                );
            },
            [l, es, R],
        ),
        ec = r.useCallback(() => 40, []),
        ed = r.useCallback(
            (e, t) => {
                var n, i;
                let r = ee[e],
                    a = null == r ? void 0 : r.rows[t];
                if (null == a || !l.has(a.channelId)) return 50;
                let s = Math.min(null != (n = null == (i = a.voiceStates) ? void 0 : i.length) ? n : 0, 25);
                return s <= 0 ? 50 : 64 + 30 * s;
            },
            [l, ee],
        ),
        eh = r.useCallback((e) => {
            var n;
            t(e), null == (n = U.current) || n.scrollToTop();
        }, []);
    return (0, i.jsxs)("div", {
        className: C.kL,
        children: [
            (0, i.jsx)("div", {
                className: C.MT,
                children: (0, i.jsx)(o.IWV, {
                    query: e,
                    onChange: eh,
                    onClear: () => t(""),
                    placeholder: T.intl.string(j.default.OV3KfO),
                    size: "md",
                }),
            }),
            (0, i.jsx)(a.hD, {
                navigator: G,
                children: (0, i.jsx)(a.PR, {
                    children: (e) => {
                        let { ref: t, role: n } = e,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    i,
                                    r,
                                    l = {};
                                if ("u" > typeof Reflect && Reflect.ownKeys) {
                                    for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++)
                                        (i = n[r]),
                                            !(t.indexOf(i) >= 0) &&
                                                Object.prototype.propertyIsEnumerable.call(e, i) &&
                                                (l[i] = e[i]);
                                    return l;
                                }
                                if (
                                    ((l = (function (e, t) {
                                        if (null == e) return {};
                                        var n,
                                            i,
                                            r = {},
                                            l = Object.getOwnPropertyNames(e);
                                        for (i = 0; i < l.length; i++)
                                            (n = l[i]),
                                                !(t.indexOf(n) >= 0) &&
                                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                    (r[n] = e[n]);
                                        return r;
                                    })(e, t)),
                                    Object.getOwnPropertySymbols)
                                )
                                    for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
                                        (i = n[r]),
                                            !(t.indexOf(i) >= 0) &&
                                                Object.prototype.propertyIsEnumerable.call(e, i) &&
                                                (l[i] = e[i]);
                                return l;
                            })(e, ["ref", "role"]);
                        return (0, i.jsx)(o.skg, {
                            children: (e) =>
                                (0, i.jsx)(
                                    o.B8B,
                                    (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                i = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols &&
                                                (i = i.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                    }),
                                                )),
                                                i.forEach(function (t) {
                                                    var i;
                                                    (i = n[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: i,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0,
                                                              })
                                                            : (e[t] = i);
                                                });
                                        }
                                        return e;
                                    })(
                                        {
                                            innerRole: n,
                                            innerAriaLabel: T.intl.string(T.t.OGiMXJ),
                                            ref: (e) => {
                                                var n;
                                                (U.current = e),
                                                    (t.current =
                                                        null != (n = null == e ? void 0 : e.getScrollerNode())
                                                            ? n
                                                            : null);
                                            },
                                            className: C.p_,
                                            sectionHeight: ec,
                                            rowHeight: ed,
                                            sidebarHeight: 0,
                                            renderSection: eo,
                                            renderRow: eu,
                                            sections: et,
                                            paddingBottom: 8,
                                        },
                                        r,
                                        e,
                                    ),
                                ),
                        });
                    },
                }),
            }),
        ],
    });
}
