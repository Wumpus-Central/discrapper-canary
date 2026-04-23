n.d(t, { A: () => Y });
var i = n(627968),
    s = n(64700),
    l = n(735438),
    a = n.n(l),
    r = n(111956),
    o = n.n(r),
    c = n(311907),
    d = n(265872),
    u = n(289873),
    m = n(534514),
    A = n(834730),
    h = n(73153),
    x = n(829219),
    p = n(859703),
    g = n(341915),
    N = n(843490),
    f = n(890687),
    _ = n(710969),
    I = n(639214),
    v = n(814793),
    j = n(219271),
    C = n(21119),
    y = n(287809),
    S = n(943577),
    E = n(954571),
    T = n(927813),
    b = n(279877),
    P = n(112273),
    L = n(666290),
    R = n(928636),
    D = n(502696),
    O = n(282447),
    k = n(652215),
    F = n(654487),
    w = n(985018),
    G = n(522986);
let M = 15 * T.A.Millis.MINUTE,
    U = (0, O.A)(function (e) {
        let { party: t, onUserContextMenu: n, onChannelContextMenu: l, quest: a } = e,
            r = s.useRef(null),
            c = (0, i.jsx)(L.A, { party: t, onUserContextMenu: n }),
            u = (0, i.jsx)(P.A, { party: t, onChannelContextMenu: l, quest: a }),
            { partiedMembers: m, applicationStreams: A, currentActivities: h, voiceChannels: x } = t,
            p = m.length,
            g = A.length,
            N = h.length,
            f = x.length > 0,
            _ = s.useCallback(() => {
                let e = h
                    .filter((e) => e.game?.name != null && (0, E.isGameApplicationType)(e.game?.type))
                    .map((e) => e.game.name);
                E.default.track(k.HAw.NOW_PLAYING_CARD_HOVERED, {
                    num_users: p,
                    num_streams: g,
                    num_activities: N,
                    in_voice_channel: f,
                    games_detected: e,
                });
            }, [p, g, N, f, h]),
            I = s.useMemo(() => o()(_, M), [_]);
        return null != c || null != u
            ? (0, i.jsx)(d.Y, {
                  targetElementRef: r,
                  position: "left",
                  renderPopout: (e) => {
                      let { closePopout: n } = e;
                      return (0, i.jsx)(D.A, { party: t, close: n });
                  },
                  spacing: 8,
                  children: (e, t) => {
                      let { isShown: n } = t;
                      return (0, i.jsx)(R.A, {
                          ...e,
                          ref: r,
                          onMouseEnter: I,
                          "aria-haspopup": "menu",
                          className: G.MP,
                          active: n,
                          children: (0, i.jsxs)("div", { children: [c, u] }),
                      });
                  },
              })
            : null;
    }),
    V = a().throttle(() => j.u(), 3e5);
function Y() {
    let {
            nowPlayingCards: e,
            loaded: t,
            needsRefresh: n,
            fetching: l,
            currentUser: a,
        } = (0, c.cf)([S.A, C.A, y.default], () => ({
            nowPlayingCards: S.A.nowPlayingCards,
            loaded: S.A.loaded,
            needsRefresh: C.A.shouldFetch(),
            fetching: C.A.isFetching(),
            currentUser: y.default.getCurrentUser(),
        })),
        r = (0, c.bG)([p.A], () => p.A.quests),
        o = (0, f.oH)(Array.from(r.values()));
    s.useEffect(
        () => (
            h.h.wait(() => b.O()),
            () => {
                h.h.wait(() => b.v());
            }
        ),
        [a?.id],
    ),
        s.useEffect(() => {
            n && !l && V();
        }, [n, l]);
    let { use_api_call: d } = N.M.getConfig({ location: "NowPlaying" }),
        { questsByPartyId: j, questIdsByPartyId: E } = s.useMemo(() => {
            let t = new Map(),
                n = new Map(),
                i = new Set(),
                s = (0, v.$e)(r, F.B3);
            for (let l of e)
                l.party.currentActivities.forEach((e) => {
                    let { activity: a } = e;
                    if (null == a) return;
                    let r = (0, I.nq)(s, a);
                    null == r || i.has(r.id) || (t.set(l.party.id, r), i.add(r.id), n.set(l.party.id, r.id));
                });
            return { questsByPartyId: t, questIdsByPartyId: n };
        }, [e, r, o]),
        T = (0, c.bG)([p.A], () => p.A.earnedQuestForPlacement.get(g.uF.ACTIVITY_PANEL), []),
        P = s.useRef([]),
        L = s.useMemo(() => {
            let e = Array.from(E.values()),
                t = P.current;
            return t.length === e.length && e.every((e, n) => e === t[n]) ? t : ((P.current = e), e);
        }, [E]);
    s.useEffect(() => {
        d && 0 !== L.length && (0, x.yO)(L, g.uF.ACTIVITY_PANEL, "NowPlaying");
    }, [L, d, T]);
    let R = s.useMemo(() => {
            if (!d) return j;
            if (null == T) return new Map();
            let e = new Map();
            for (let [t, n] of E.entries()) {
                let i = T.earnedDecisionByQuestId.get(n),
                    s = r.get(n);
                (0, _.Oh)(i) && i.shouldDeliver && null != s && e.set(t, s);
            }
            return e;
        }, [T, E, j, d, r]),
        D = null;
    return t
        ? (D =
              e.length > 0
                  ? e.map((e) => {
                        let { party: t } = e;
                        return (0, i.jsx)(U, { party: t, quest: R.get(t.id) }, t.id);
                    })
                  : (0, i.jsxs)("div", {
                        className: G.aM,
                        children: [
                            (0, i.jsx)(m.D, {
                                variant: "heading-md/semibold",
                                className: G.jU,
                                children: w.intl.string(w.t["ngJ/5u"]),
                            }),
                            (0, i.jsx)(A.E, {
                                color: "none",
                                className: G.BI,
                                variant: "text-sm/normal",
                                children: w.intl.string(w.t["99ZWxQ"]),
                            }),
                        ],
                    }))
        : (0, i.jsx)("div", { className: G.aM, children: (0, i.jsx)(u.y, {}) });
}
