n.d(t, {
    A: () => U,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(735438),
    a = n.n(l),
    s = n(111956),
    o = n.n(s),
    c = n(311907),
    u = n(397927),
    d = n(73153),
    p = n(829219),
    h = n(859703),
    g = n(341915),
    f = n(843490),
    m = n(890687),
    A = n(639214),
    _ = n(814793),
    b = n(219271),
    E = n(21119),
    O = n(287809),
    y = n(943577),
    I = n(954571),
    v = n(927813),
    S = n(279877),
    C = n(112273),
    N = n(666290),
    T = n(928636),
    j = n(502696),
    x = n(282447),
    P = n(652215),
    w = n(654487),
    L = n(985018),
    R = n(23729);
let D = 15 * v.A.Millis.MINUTE,
    M = (0, x.A)(function (e) {
        let { party: t, onUserContextMenu: n, onChannelContextMenu: l, quest: a } = e,
            s = i.useRef(null),
            c = (0, r.jsx)(N.A, {
                party: t,
                onUserContextMenu: n,
            }),
            d = (0, r.jsx)(C.A, {
                party: t,
                onChannelContextMenu: l,
                quest: a,
            }),
            { partiedMembers: p, applicationStreams: h, currentActivities: g, voiceChannels: f } = t,
            m = p.length,
            A = h.length,
            _ = g.length,
            b = f.length > 0,
            E = i.useCallback(() => {
                let e = g
                    .filter((e) => {
                        var t, n;
                        return (
                            (null == (t = e.game) ? void 0 : t.name) != null &&
                            (0, I.isGameApplicationType)(null == (n = e.game) ? void 0 : n.type)
                        );
                    })
                    .map((e) => e.game.name);
                I.default.track(P.HAw.NOW_PLAYING_CARD_HOVERED, {
                    num_users: m,
                    num_streams: A,
                    num_activities: _,
                    in_voice_channel: b,
                    games_detected: e,
                });
            }, [m, A, _, b, g]),
            O = i.useMemo(() => o()(E, D), [E]);
        return null != c || null != d
            ? (0, r.jsx)(u.YNO, {
                  targetElementRef: s,
                  position: "left",
                  renderPopout: (e) => {
                      let { closePopout: n } = e;
                      return (0, r.jsx)(j.A, {
                          party: t,
                          close: n,
                      });
                  },
                  spacing: 8,
                  children: (e, t) => {
                      var n, i;
                      let { isShown: l } = t;
                      return (0, r.jsx)(
                          T.A,
                          ((n = (function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = null != arguments[t] ? arguments[t] : {},
                                      r = Object.keys(n);
                                  "function" == typeof Object.getOwnPropertySymbols &&
                                      (r = r.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                          }),
                                      )),
                                      r.forEach(function (t) {
                                          var r;
                                          (r = n[t]),
                                              t in e
                                                  ? Object.defineProperty(e, t, {
                                                        value: r,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0,
                                                    })
                                                  : (e[t] = r);
                                      });
                              }
                              return e;
                          })({}, e)),
                          (i = i =
                              {
                                  ref: s,
                                  onMouseEnter: O,
                                  "aria-haspopup": "menu",
                                  className: R.MP,
                                  active: l,
                                  children: (0, r.jsxs)("div", {
                                      children: [c, d],
                                  }),
                              }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                              : (function (e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, r);
                                    }
                                    return n;
                                })(Object(i)).forEach(function (e) {
                                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                }),
                          n),
                      );
                  },
              })
            : null;
    }),
    k = a().throttle(() => b.u(), 3e5);

function U() {
    let {
            nowPlayingCards: e,
            loaded: t,
            needsRefresh: n,
            fetching: l,
            currentUser: a,
        } = (0, c.cf)([y.A, E.A, O.default], () => ({
            nowPlayingCards: y.A.nowPlayingCards,
            loaded: y.A.loaded,
            needsRefresh: E.A.shouldFetch(),
            fetching: E.A.isFetching(),
            currentUser: O.default.getCurrentUser(),
        })),
        s = (0, c.bG)([h.A], () => h.A.quests),
        o = (0, m.oH)(Array.from(s.values()));
    i.useEffect(
        () => (
            d.h.wait(() => S.O()),
            () => {
                d.h.wait(() => S.v());
            }
        ),
        [null == a ? void 0 : a.id],
    ),
        i.useEffect(() => {
            n && !l && k();
        }, [n, l]);
    let { use_api_call: b } = f.M.getConfig({
            location: "NowPlaying",
        }),
        { questsByPartyId: I, questIdsByPartyId: v } = i.useMemo(() => {
            let t = new Map(),
                n = new Map(),
                r = new Set(),
                i = (0, _.$e)(s, w.B3);
            for (let l of e)
                l.party.currentActivities.forEach((e) => {
                    let { activity: a } = e;
                    if (null == a) return;
                    let s = (0, A.nq)(i, a);
                    null == s || r.has(s.id) || (t.set(l.party.id, s), r.add(s.id), n.set(l.party.id, s.id));
                });
            return {
                questsByPartyId: t,
                questIdsByPartyId: n,
            };
        }, [e, s, o]),
        C = i.useMemo(() => new Set(Array.from(v.values())), [v]);
    i.useEffect(() => {
        b && C.size > 0 && (0, p.yO)(Array.from(C), g.uF.ACTIVITY_PANEL, "NowPlaying");
    }, [C, b]);
    let N = (0, c.bG)([h.A], () => h.A.earnedQuestForPlacement.get(g.uF.ACTIVITY_PANEL), []),
        T = i.useMemo(() => {
            if (!b) return I;
            if (null == N) return new Map();
            let e = new Map();
            for (let [t, n] of v.entries()) {
                let r = N.quests.get(n);
                null != r && e.set(t, r);
            }
            return e;
        }, [b, N, I, v]),
        j = null;
    return t
        ? (j =
              e.length > 0
                  ? e.map((e) => {
                        let { party: t } = e;
                        return (0, r.jsx)(
                            M,
                            {
                                party: t,
                                quest: T.get(t.id),
                            },
                            t.id,
                        );
                    })
                  : (0, r.jsxs)("div", {
                        className: R.aM,
                        children: [
                            (0, r.jsx)(u.Heading, {
                                variant: "heading-md/semibold",
                                className: R.jU,
                                children: L.intl.string(L.t["ngJ/5u"]),
                            }),
                            (0, r.jsx)(u.Text, {
                                color: "none",
                                className: R.BI,
                                variant: "text-sm/normal",
                                children: L.intl.string(L.t["99ZWxQ"]),
                            }),
                        ],
                    }))
        : (0, r.jsx)("div", {
              className: R.aM,
              children: (0, r.jsx)(u.y$y, {}),
          });
}
