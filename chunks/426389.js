n.d(t, { A: () => G });
var i = n(627968),
    r = n(64700),
    l = n(735438),
    a = n.n(l),
    s = n(111956),
    o = n.n(s),
    d = n(311907),
    c = n(397927),
    u = n(73153),
    A = n(829219),
    h = n(859703),
    _ = n(341915),
    m = n(843490),
    p = n(890687),
    g = n(639214),
    E = n(814793),
    I = n(219271),
    f = n(21119),
    C = n(287809),
    N = n(943577),
    T = n(954571),
    S = n(927813),
    x = n(279877),
    v = n(112273),
    y = n(666290),
    b = n(928636),
    L = n(502696),
    O = n(282447),
    R = n(652215),
    P = n(654487),
    j = n(985018),
    D = n(23729);
let w = 15 * S.A.Millis.MINUTE,
    M = (0, O.A)(function (e) {
        let { party: t, onUserContextMenu: n, onChannelContextMenu: l, quest: a } = e,
            s = r.useRef(null),
            d = (0, i.jsx)(y.A, { party: t, onUserContextMenu: n }),
            u = (0, i.jsx)(v.A, { party: t, onChannelContextMenu: l, quest: a }),
            { partiedMembers: A, applicationStreams: h, currentActivities: _, voiceChannels: m } = t,
            p = A.length,
            g = h.length,
            E = _.length,
            I = m.length > 0,
            f = r.useCallback(() => {
                let e = _.filter((e) => e.game?.name != null && (0, T.isGameApplicationType)(e.game?.type)).map(
                    (e) => e.game.name,
                );
                T.default.track(R.HAw.NOW_PLAYING_CARD_HOVERED, {
                    num_users: p,
                    num_streams: g,
                    num_activities: E,
                    in_voice_channel: I,
                    games_detected: e,
                });
            }, [p, g, E, I, _]),
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
                      return (0, i.jsx)(b.A, {
                          ...e,
                          ref: s,
                          onMouseEnter: C,
                          "aria-haspopup": "menu",
                          className: D.MP,
                          active: n,
                          children: (0, i.jsxs)("div", { children: [d, u] }),
                      });
                  },
              })
            : null;
    }),
    U = a().throttle(() => I.u(), 3e5);
function G() {
    let {
            nowPlayingCards: e,
            loaded: t,
            needsRefresh: n,
            fetching: l,
            currentUser: a,
        } = (0, d.cf)([N.A, f.A, C.default], () => ({
            nowPlayingCards: N.A.nowPlayingCards,
            loaded: N.A.loaded,
            needsRefresh: f.A.shouldFetch(),
            fetching: f.A.isFetching(),
            currentUser: C.default.getCurrentUser(),
        })),
        s = (0, d.bG)([h.A], () => h.A.quests),
        o = (0, p.oH)(Array.from(s.values()));
    r.useEffect(
        () => (
            u.h.wait(() => x.O()),
            () => {
                u.h.wait(() => x.v());
            }
        ),
        [a?.id],
    ),
        r.useEffect(() => {
            n && !l && U();
        }, [n, l]);
    let { use_api_call: I } = m.M.getConfig({ location: "NowPlaying" }),
        { questsByPartyId: T, questIdsByPartyId: S } = r.useMemo(() => {
            let t = new Map(),
                n = new Map(),
                i = new Set(),
                r = (0, E.$e)(s, P.B3);
            for (let l of e)
                l.party.currentActivities.forEach((e) => {
                    let { activity: a } = e;
                    if (null == a) return;
                    let s = (0, g.nq)(r, a);
                    null == s || i.has(s.id) || (t.set(l.party.id, s), i.add(s.id), n.set(l.party.id, s.id));
                });
            return { questsByPartyId: t, questIdsByPartyId: n };
        }, [e, s, o]),
        v = r.useMemo(() => new Set(Array.from(S.values())), [S]);
    r.useEffect(() => {
        I && v.size > 0 && (0, A.yO)(Array.from(v), _.uF.ACTIVITY_PANEL, "NowPlaying");
    }, [v, I]);
    let y = (0, d.bG)([h.A], () => h.A.earnedQuestForPlacement.get(_.uF.ACTIVITY_PANEL), []),
        b = r.useMemo(() => {
            if (!I) return T;
            if (null == y) return new Map();
            let e = new Map();
            for (let [t, n] of S.entries()) {
                let i = y.quests.get(n);
                null != i && e.set(t, i);
            }
            return e;
        }, [I, y, T, S]),
        L = null;
    return t
        ? (L =
              e.length > 0
                  ? e.map((e) => {
                        let { party: t } = e;
                        return (0, i.jsx)(M, { party: t, quest: b.get(t.id) }, t.id);
                    })
                  : (0, i.jsxs)("div", {
                        className: D.aM,
                        children: [
                            (0, i.jsx)(c.Heading, {
                                variant: "heading-md/semibold",
                                className: D.jU,
                                children: j.intl.string(j.t["ngJ/5u"]),
                            }),
                            (0, i.jsx)(c.Text, {
                                color: "none",
                                className: D.BI,
                                variant: "text-sm/normal",
                                children: j.intl.string(j.t["99ZWxQ"]),
                            }),
                        ],
                    }))
        : (0, i.jsx)("div", { className: D.aM, children: (0, i.jsx)(c.y$y, {}) });
}
