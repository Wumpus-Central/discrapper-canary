n.d(t, { A: () => k });
var i = n(627968),
    r = n(64700),
    a = n(735438),
    l = n.n(a),
    s = n(111956),
    o = n.n(s),
    d = n(311907),
    c = n(397927),
    u = n(73153),
    A = n(829219),
    h = n(859703),
    _ = n(341915),
    m = n(843490),
    g = n(890687),
    p = n(710969),
    E = n(639214),
    I = n(814793),
    f = n(219271),
    C = n(21119),
    T = n(287809),
    N = n(943577),
    S = n(954571),
    x = n(927813),
    v = n(279877),
    b = n(112273),
    y = n(666290),
    O = n(928636),
    L = n(502696),
    R = n(282447),
    P = n(652215),
    D = n(654487),
    j = n(985018),
    M = n(724410);
let w = 15 * x.A.Millis.MINUTE,
    U = (0, R.A)(function (e) {
        let { party: t, onUserContextMenu: n, onChannelContextMenu: a, quest: l } = e,
            s = r.useRef(null),
            d = (0, i.jsx)(y.A, { party: t, onUserContextMenu: n }),
            u = (0, i.jsx)(b.A, { party: t, onChannelContextMenu: a, quest: l }),
            { partiedMembers: A, applicationStreams: h, currentActivities: _, voiceChannels: m } = t,
            g = A.length,
            p = h.length,
            E = _.length,
            I = m.length > 0,
            f = r.useCallback(() => {
                let e = _.filter((e) => e.game?.name != null && (0, S.isGameApplicationType)(e.game?.type)).map(
                    (e) => e.game.name,
                );
                S.default.track(P.HAw.NOW_PLAYING_CARD_HOVERED, {
                    num_users: g,
                    num_streams: p,
                    num_activities: E,
                    in_voice_channel: I,
                    games_detected: e,
                });
            }, [g, p, E, I, _]),
            C = r.useMemo(() => o()(f, w), [f]);
        return null != d || null != u
            ? (0, i.jsx)(c.YNO, {
                  targetElementRef: s,
                  position: "left",
                  renderPopout: (e) => {
                      let { closePopout: n } = e;
                      return (0, i.jsx)(L.A, { party: t, close: n });
                  },
                  spacing: 8,
                  children: (e, t) => {
                      let { isShown: n } = t;
                      return (0, i.jsx)(O.A, {
                          ...e,
                          ref: s,
                          onMouseEnter: C,
                          "aria-haspopup": "menu",
                          className: M.MP,
                          active: n,
                          children: (0, i.jsxs)("div", { children: [d, u] }),
                      });
                  },
              })
            : null;
    }),
    G = l().throttle(() => f.u(), 3e5);
function k() {
    let {
            nowPlayingCards: e,
            loaded: t,
            needsRefresh: n,
            fetching: a,
            currentUser: l,
        } = (0, d.cf)([N.A, C.A, T.default], () => ({
            nowPlayingCards: N.A.nowPlayingCards,
            loaded: N.A.loaded,
            needsRefresh: C.A.shouldFetch(),
            fetching: C.A.isFetching(),
            currentUser: T.default.getCurrentUser(),
        })),
        s = (0, d.bG)([h.A], () => h.A.quests),
        o = (0, g.oH)(Array.from(s.values()));
    r.useEffect(
        () => (
            u.h.wait(() => v.O()),
            () => {
                u.h.wait(() => v.v());
            }
        ),
        [l?.id],
    ),
        r.useEffect(() => {
            n && !a && G();
        }, [n, a]);
    let { use_api_call: f } = m.M.getConfig({ location: "NowPlaying" }),
        { questsByPartyId: S, questIdsByPartyId: x } = r.useMemo(() => {
            let t = new Map(),
                n = new Map(),
                i = new Set(),
                r = (0, I.$e)(s, D.B3);
            for (let a of e)
                a.party.currentActivities.forEach((e) => {
                    let { activity: l } = e;
                    if (null == l) return;
                    let s = (0, E.nq)(r, l);
                    null == s || i.has(s.id) || (t.set(a.party.id, s), i.add(s.id), n.set(a.party.id, s.id));
                });
            return { questsByPartyId: t, questIdsByPartyId: n };
        }, [e, s, o]),
        b = (0, d.bG)([h.A], () => h.A.earnedQuestForPlacement.get(_.uF.ACTIVITY_PANEL), []),
        y = r.useRef([]),
        O = r.useMemo(() => {
            let e = Array.from(x.values()),
                t = y.current;
            return t.length === e.length && e.every((e, n) => e === t[n]) ? t : ((y.current = e), e);
        }, [x]);
    r.useEffect(() => {
        f && 0 !== O.length && (0, A.yO)(O, _.uF.ACTIVITY_PANEL, "NowPlaying");
    }, [O, f, b]);
    let L = r.useMemo(() => {
            if (!f) return S;
            if (null == b) return new Map();
            let e = new Map();
            for (let [t, n] of x.entries()) {
                let i = b.earnedDecisionByQuestId.get(n),
                    r = s.get(n);
                (0, p.Oh)(i) && i.shouldDeliver && null != r && e.set(t, r);
            }
            return e;
        }, [b, x, S, f, s]),
        R = null;
    return t
        ? (R =
              e.length > 0
                  ? e.map((e) => {
                        let { party: t } = e;
                        return (0, i.jsx)(U, { party: t, quest: L.get(t.id) }, t.id);
                    })
                  : (0, i.jsxs)("div", {
                        className: M.aM,
                        children: [
                            (0, i.jsx)(c.Heading, {
                                variant: "heading-md/semibold",
                                className: M.jU,
                                children: j.intl.string(j.t["ngJ/5u"]),
                            }),
                            (0, i.jsx)(c.Text, {
                                color: "none",
                                className: M.BI,
                                variant: "text-sm/normal",
                                children: j.intl.string(j.t["99ZWxQ"]),
                            }),
                        ],
                    }))
        : (0, i.jsx)("div", { className: M.aM, children: (0, i.jsx)(c.y$y, {}) });
}
