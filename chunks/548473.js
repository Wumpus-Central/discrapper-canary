n.d(t, {
    B0: () => P,
    ZP: () => L,
    _I: () => A,
    xm: () => y,
}),
    n(49124);
var l = n(54381),
    i = n(473749),
    r = n(120356),
    s = n.n(r),
    a = n(500923),
    o = n.n(a),
    c = n(442837),
    d = n(481060),
    u = n(493773),
    m = n(607070),
    g = n(367907),
    f = n(601964),
    h = n(626135),
    N = n(768581),
    I = n(956664),
    p = n(45966),
    O = n(819553),
    E = n(487533),
    S = n(279876),
    x = n(787117),
    T = n(790711),
    _ = n(535170),
    j = n(981631),
    v = n(388032),
    b = n(576085);
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function G(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function C(e) {
    let t = (0, c.e7)([m.Z], () => m.Z.useReducedMotion),
        n = i.useRef(null);
    return (
        i.useEffect(() => {
            let l;
            return (
                null != n.current &&
                    (l = o().loadAnimation({
                        container: n.current,
                        renderer: "svg",
                        loop: !0,
                        autoplay: !t,
                        animationData: JSON.parse(JSON.stringify(e)),
                    })),
                () => {
                    null == l || l.destroy();
                }
            );
        }, [n, t, e]),
        n
    );
}
function y() {
    let e = C(x);
    return (0, l.jsx)("div", {
        className: s()(b.leftArt, b.altFloat),
        children: (0, l.jsx)("div", {
            ref: e,
            className: b.grillingIsland,
        }),
    });
}
function P() {
    let e = C(_);
    return (0, l.jsx)("div", {
        className: s()(b.rightArt, b.altFloat),
        children: (0, l.jsx)("div", {
            ref: e,
            className: b.waffleIsland,
        }),
    });
}
function A(e) {
    let { guild: t, mainIslandClassName: n, balloonDogClassName: r } = e,
        a = (0, c.e7)([m.Z], () => m.Z.useReducedMotion),
        d = i.useRef(null),
        u = C(S),
        g = N.ZP.getGuildIconURL({
            id: t.id,
            icon: t.icon,
            size: 96,
        });
    return (
        i.useEffect(() => {
            let e;
            return (
                null != d.current && null != g
                    ? (0, I.OF)(g).then((t) => {
                          let n = (0, E.Z)(JSON.parse(JSON.stringify(T)), g, t[0]);
                          e = o().loadAnimation({
                              container: d.current,
                              renderer: "svg",
                              loop: !0,
                              autoplay: !a,
                              animationData: n,
                          });
                      })
                    : null != d.current &&
                      (e = o().loadAnimation({
                          container: d.current,
                          renderer: "svg",
                          loop: !0,
                          autoplay: !a,
                          animationData: JSON.parse(JSON.stringify(T)),
                      })),
                () => {
                    null == e || e.destroy();
                }
            );
        }, [g, d, a]),
        (0, l.jsxs)("div", {
            className: s()(b.centerArt, b.float),
            children: [
                (0, l.jsx)("div", {
                    className: s()(b.balloonDog, r),
                    ref: u,
                }),
                (0, l.jsx)("div", {
                    className: s()(b.mainIsland, n),
                    ref: d,
                }),
            ],
        })
    );
}
function L(e) {
    let { guild: t, onStart: n, onboardingStatus: r, headerId: s, disableTracking: a } = e,
        o = (0, c.e7)([p.Z], () => p.Z.isLoading()),
        m = i.useRef(!1);
    i.useEffect(() => {
        if (!a)
            return (
                h.default.track(
                    j.rMx.GUILD_ONBOARDING_STEP_VIEWED,
                    G(D({}, (0, g.hH)(t.id)), {
                        step: -1,
                        required: !0,
                    }),
                ),
                () => {
                    h.default.track(
                        j.rMx.GUILD_ONBOARDING_STEP_COMPLETED,
                        G(D({}, (0, g.hH)(t.id)), {
                            step: -1,
                            skipped: !m.current,
                            is_final_step: !1,
                            in_onboarding: !0,
                        }),
                    );
                }
            );
    }, [t.id, m, a]);
    let N = i.useMemo(() => (0, f.EB)(t, 135, !1, !0), [t]);
    return (
        (0, u.ZP)(() => {
            setTimeout(() => {
                (m.current = !0), n();
            }, 3000);
        }),
        (0, l.jsx)("div", {
            className: b.coverContainer,
            children: (0, l.jsxs)("div", {
                className: b.centerContent,
                children: [
                    (0, l.jsx)("div", {
                        children: (0, l.jsx)("img", {
                            className: b.guildImage,
                            src: N,
                            alt: "",
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: b.coverContent,
                        children: [
                            (0, l.jsx)(d.Text, {
                                className: b.coverTitle,
                                variant: "text-lg/normal",
                                color: "always-white",
                                id: s,
                                children: v.intl.format(v.t["j59F/c"], { guildName: null == t ? void 0 : t.name }),
                            }),
                            o
                                ? (0, l.jsx)(d.$jN, { className: b.__invalid_subtitle })
                                : r === O.uX.NOT_APPLICABLE
                                  ? (0, l.jsx)(d.Heading, {
                                        className: b.__invalid_subtitle,
                                        variant: "heading-xxl/normal",
                                        color: "always-white",
                                        children: v.intl.string(v.t.Q5ibtV),
                                    })
                                  : (0, l.jsx)(d.Heading, {
                                        className: b.__invalid_subtitle,
                                        variant: "heading-xxl/normal",
                                        color: "always-white",
                                        children: v.intl.string(v.t["Alcl/e"]),
                                    }),
                        ],
                    }),
                ],
            }),
        })
    );
}
