n.d(t, { A: () => D }), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(735438),
    a = n.n(l),
    s = n(111956),
    o = n.n(s),
    c = n(311907),
    u = n(397927),
    d = n(73153),
    p = n(859703),
    f = n(890687),
    h = n(639214),
    A = n(814793),
    g = n(219271),
    m = n(21119),
    b = n(287809),
    _ = n(943577),
    E = n(954571),
    O = n(927813),
    y = n(279877),
    I = n(112273),
    v = n(666290),
    S = n(928636),
    C = n(502696),
    N = n(282447),
    T = n(652215),
    j = n(654487),
    x = n(985018),
    P = n(23729);
let w = 15 * O.A.Millis.MINUTE,
    L = (0, N.A)(function (e) {
        let { party: t, onUserContextMenu: n, onChannelContextMenu: l, quest: a } = e,
            s = i.useRef(null),
            c = (0, r.jsx)(v.A, {
                party: t,
                onUserContextMenu: n,
            }),
            d = (0, r.jsx)(I.A, {
                party: t,
                onChannelContextMenu: l,
                quest: a,
            }),
            { partiedMembers: p, applicationStreams: f, currentActivities: h, voiceChannels: A } = t,
            g = p.length,
            m = f.length,
            b = h.length,
            _ = A.length > 0,
            O = i.useCallback(() => {
                let e = h
                    .filter((e) => {
                        var t, n;
                        return (
                            (null == (t = e.game) ? void 0 : t.name) != null &&
                            (0, E.isGameApplicationType)(null == (n = e.game) ? void 0 : n.type)
                        );
                    })
                    .map((e) => e.game.name);
                E.default.track(T.HAw.NOW_PLAYING_CARD_HOVERED, {
                    num_users: g,
                    num_streams: m,
                    num_activities: b,
                    in_voice_channel: _,
                    games_detected: e,
                });
            }, [g, m, b, _, h]),
            y = i.useMemo(() => o()(O, w), [O]);
        return null != c || null != d
            ? (0, r.jsx)(u.YNO, {
                  targetElementRef: s,
                  position: "left",
                  renderPopout: (e) => {
                      let { closePopout: n } = e;
                      return (0, r.jsx)(C.A, {
                          party: t,
                          close: n,
                      });
                  },
                  spacing: 8,
                  children: (e, t) => {
                      var n, i;
                      let { isShown: l } = t;
                      return (0, r.jsx)(
                          S.A,
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
                                  onMouseEnter: y,
                                  "aria-haspopup": "menu",
                                  className: P.MP,
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
    R = a().throttle(() => g.u(), 300000);
function D() {
    let {
            nowPlayingCards: e,
            loaded: t,
            needsRefresh: n,
            fetching: l,
            currentUser: a,
        } = (0, c.cf)([_.A, m.A, b.default], () => ({
            nowPlayingCards: _.A.nowPlayingCards,
            loaded: _.A.loaded,
            needsRefresh: m.A.shouldFetch(),
            fetching: m.A.isFetching(),
            currentUser: b.default.getCurrentUser(),
        })),
        s = (0, c.bG)([p.A], () => p.A.quests),
        o = (0, f.oH)(Array.from(s.values()));
    i.useEffect(() => (d.h.wait(() => y.O()), () => d.h.wait(() => y.v())), [null == a ? void 0 : a.id]),
        i.useEffect(() => {
            n && !l && R();
        }, [n, l]);
    let g = i.useMemo(() => {
            let t = new Map(),
                n = new Set(),
                r = (0, A.$e)(s, j.B3);
            for (let i of e)
                i.party.currentActivities.forEach((e) => {
                    let { activity: l } = e;
                    if (null == l) return;
                    let a = (0, h.nq)(r, l);
                    null == a || n.has(a.id) || (t.set(i.party.id, a), n.add(a.id));
                });
            return t;
        }, [e, s, o]),
        E = null;
    return t
        ? (E =
              e.length > 0
                  ? e.map((e) => {
                        let { party: t } = e;
                        return (0, r.jsx)(
                            L,
                            {
                                party: t,
                                quest: g.get(t.id),
                            },
                            t.id,
                        );
                    })
                  : (0, r.jsxs)("div", {
                        className: P.aM,
                        children: [
                            (0, r.jsx)(u.Heading, {
                                variant: "heading-md/semibold",
                                className: P.jU,
                                children: x.intl.string(x.t["ngJ/5u"]),
                            }),
                            (0, r.jsx)(u.Text, {
                                color: "none",
                                className: P.BI,
                                variant: "text-sm/normal",
                                children: x.intl.string(x.t["99ZWxQ"]),
                            }),
                        ],
                    }))
        : (0, r.jsx)("div", {
              className: P.aM,
              children: (0, r.jsx)(u.y$y, {}),
          });
}
