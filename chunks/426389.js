n.d(t, { A: () => k });
var i = n(627968),
    a = n(64700),
    l = n(735438),
    r = n.n(l),
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
    y = n(112273),
    b = n(666290),
    O = n(928636),
    L = n(502696),
    R = n(282447),
    P = n(652215),
    D = n(654487),
    M = n(985018),
    j = n(23729);
let w = 15 * x.A.Millis.MINUTE,
    U = (0, R.A)(function (e) {
        let { party: t, onUserContextMenu: n, onChannelContextMenu: l, quest: r } = e,
            s = a.useRef(null),
            d = (0, i.jsx)(b.A, { party: t, onUserContextMenu: n }),
            u = (0, i.jsx)(y.A, { party: t, onChannelContextMenu: l, quest: r }),
            { partiedMembers: A, applicationStreams: h, currentActivities: _, voiceChannels: m } = t,
            g = A.length,
            p = h.length,
            E = _.length,
            I = m.length > 0,
            f = a.useCallback(() => {
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
            C = a.useMemo(() => o()(f, w), [f]);
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
                          className: j.MP,
                          active: n,
                          children: (0, i.jsxs)("div", { children: [d, u] }),
                      });
                  },
              })
            : null;
    }),
    G = r().throttle(() => f.u(), 3e5);
function k() {
    let {
            nowPlayingCards: e,
            loaded: t,
            needsRefresh: n,
            fetching: l,
            currentUser: r,
        } = (0, d.cf)([N.A, C.A, T.default], () => ({
            nowPlayingCards: N.A.nowPlayingCards,
            loaded: N.A.loaded,
            needsRefresh: C.A.shouldFetch(),
            fetching: C.A.isFetching(),
            currentUser: T.default.getCurrentUser(),
        })),
        s = (0, d.bG)([h.A], () => h.A.quests),
        o = (0, g.oH)(Array.from(s.values()));
    a.useEffect(
        () => (
            u.h.wait(() => v.O()),
            () => {
                u.h.wait(() => v.v());
            }
        ),
        [r?.id],
    ),
        a.useEffect(() => {
            n && !l && G();
        }, [n, l]);
    let { use_api_call: f } = m.M.getConfig({ location: "NowPlaying" }),
        { questsByPartyId: S, questIdsByPartyId: x } = a.useMemo(() => {
            let t = new Map(),
                n = new Map(),
                i = new Set(),
                a = (0, I.$e)(s, D.B3);
            for (let l of e)
                l.party.currentActivities.forEach((e) => {
                    let { activity: r } = e;
                    if (null == r) return;
                    let s = (0, E.nq)(a, r);
                    null == s || i.has(s.id) || (t.set(l.party.id, s), i.add(s.id), n.set(l.party.id, s.id));
                });
            return { questsByPartyId: t, questIdsByPartyId: n };
        }, [e, s, o]),
        y = (0, d.bG)([h.A], () => h.A.earnedQuestForPlacement.get(_.uF.ACTIVITY_PANEL), []),
        b = a.useRef([]),
        O = a.useMemo(() => {
            let e = Array.from(x.values()),
                t = b.current;
            return t.length === e.length && e.every((e, n) => e === t[n]) ? t : ((b.current = e), e);
        }, [x]);
    a.useEffect(() => {
        f && 0 !== O.length && (0, A.yO)(O, _.uF.ACTIVITY_PANEL, "NowPlaying");
    }, [O, f, y]);
    let L = a.useMemo(() => {
            if (!f) return S;
            if (null == y) return new Map();
            let e = new Map();
            for (let [t, n] of x.entries()) {
                let i = y.quests.get(n);
                (0, p.Oh)(i) && null != i.questWithUserStatus && e.set(t, i.questWithUserStatus);
            }
            return e;
        }, [f, y, S, x]),
        R = null;
    return t
        ? (R =
              e.length > 0
                  ? e.map((e) => {
                        let { party: t } = e;
                        return (0, i.jsx)(U, { party: t, quest: L.get(t.id) }, t.id);
                    })
                  : (0, i.jsxs)("div", {
                        className: j.aM,
                        children: [
                            (0, i.jsx)(c.Heading, {
                                variant: "heading-md/semibold",
                                className: j.jU,
                                children: M.intl.string(M.t["ngJ/5u"]),
                            }),
                            (0, i.jsx)(c.Text, {
                                color: "none",
                                className: j.BI,
                                variant: "text-sm/normal",
                                children: M.intl.string(M.t["99ZWxQ"]),
                            }),
                        ],
                    }))
        : (0, i.jsx)("div", { className: j.aM, children: (0, i.jsx)(c.y$y, {}) });
}
