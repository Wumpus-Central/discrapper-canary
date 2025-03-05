x.d(i, {
    B0: () => j,
    ZP: () => R,
    _I: () => L,
    xm: () => w
}),
    x(26686);
var k = x(200651),
    r = x(192379),
    t = x(120356),
    s = x.n(t),
    o = x(500923),
    n = x.n(o),
    m = x(442837),
    e = x(481060),
    p = x(493773),
    l = x(607070),
    h = x(367907),
    d = x(540059),
    c = x(594174),
    y = x(626135),
    f = x(768581),
    u = x(956664),
    G = x(45966),
    A = x(819553),
    D = x(487533),
    E = x(279876),
    B = x(180504),
    V = x(790711),
    b = x(535170),
    F = x(981631),
    g = x(388032),
    S = x(658020);
function v(a) {
    for (var i = 1; i < arguments.length; i++) {
        var x = null != arguments[i] ? arguments[i] : {},
            k = Object.keys(x);
        'function' == typeof Object.getOwnPropertySymbols &&
            (k = k.concat(
                Object.getOwnPropertySymbols(x).filter(function (a) {
                    return Object.getOwnPropertyDescriptor(x, a).enumerable;
                })
            )),
            k.forEach(function (i) {
                var k;
                (k = x[i]),
                    i in a
                        ? Object.defineProperty(a, i, {
                              value: k,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (a[i] = k);
            });
    }
    return a;
}
function P(a, i) {
    return (
        (i = null != i ? i : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(i))
            : (function (a, i) {
                  var x = Object.keys(a);
                  if (Object.getOwnPropertySymbols) {
                      var k = Object.getOwnPropertySymbols(a);
                      x.push.apply(x, k);
                  }
                  return x;
              })(Object(i)).forEach(function (x) {
                  Object.defineProperty(a, x, Object.getOwnPropertyDescriptor(i, x));
              }),
        a
    );
}
function T(a) {
    let i = (0, m.e7)([l.Z], () => l.Z.useReducedMotion),
        x = r.useRef(null);
    return (
        r.useEffect(() => {
            let k;
            return (
                null != x.current &&
                    (k = n().loadAnimation({
                        container: x.current,
                        renderer: 'svg',
                        loop: !0,
                        autoplay: !i,
                        animationData: JSON.parse(JSON.stringify(a))
                    })),
                () => {
                    null == k || k.destroy();
                }
            );
        }, [x, i, a]),
        x
    );
}
function w() {
    let a = T(B);
    return (0, k.jsx)('div', {
        className: s()(S.leftArt, S.altFloat),
        children: (0, k.jsx)('div', {
            ref: a,
            className: S.grillingIsland
        })
    });
}
function j() {
    let a = T(b);
    return (0, k.jsx)('div', {
        className: s()(S.rightArt, S.altFloat),
        children: (0, k.jsx)('div', {
            ref: a,
            className: S.waffleIsland
        })
    });
}
function L(a) {
    let { guild: i, mainIslandClassName: x, balloonDogClassName: t } = a,
        o = (0, m.e7)([l.Z], () => l.Z.useReducedMotion),
        e = r.useRef(null),
        p = T(E),
        h = f.ZP.getGuildIconURL({
            id: i.id,
            icon: i.icon,
            size: 96
        });
    return (
        r.useEffect(() => {
            let a;
            return (
                null != e.current && null != h
                    ? (0, u.OF)(h).then((i) => {
                          let x = (0, D.Z)(JSON.parse(JSON.stringify(V)), h, i[0]);
                          a = n().loadAnimation({
                              container: e.current,
                              renderer: 'svg',
                              loop: !0,
                              autoplay: !o,
                              animationData: x
                          });
                      })
                    : null != e.current &&
                      (a = n().loadAnimation({
                          container: e.current,
                          renderer: 'svg',
                          loop: !0,
                          autoplay: !o,
                          animationData: JSON.parse(JSON.stringify(V))
                      })),
                () => {
                    null == a || a.destroy();
                }
            );
        }, [h, e, o]),
        (0, k.jsxs)('div', {
            className: s()(S.centerArt, S.float),
            children: [
                (0, k.jsx)('div', {
                    className: s()(S.balloonDog, t),
                    ref: p
                }),
                (0, k.jsx)('div', {
                    className: s()(S.mainIsland, x),
                    ref: e
                })
            ]
        })
    );
}
function R(a) {
    var i, x;
    let { guild: t, onStart: s, onboardingStatus: o, headerId: n, disableTracking: l } = a,
        f = (0, m.e7)([G.Z], () => G.Z.isLoading()),
        u = (0, d.Q3)('GuildOnboardingCover'),
        D = null !== (x = null === (i = c.default.getCurrentUser()) || void 0 === i ? void 0 : i.isStaff()) && void 0 !== x && x,
        E = r.useRef(!1);
    r.useEffect(() => {
        if (!l)
            return (
                y.default.track(
                    F.rMx.GUILD_ONBOARDING_STEP_VIEWED,
                    P(v({}, (0, h.hH)(t.id)), {
                        step: -1,
                        required: !0
                    })
                ),
                () => {
                    y.default.track(
                        F.rMx.GUILD_ONBOARDING_STEP_COMPLETED,
                        P(v({}, (0, h.hH)(t.id)), {
                            step: -1,
                            skipped: !E.current,
                            is_final_step: !1,
                            in_onboarding: !0
                        })
                    );
                }
            );
    }, [t.id, E, l]);
    let B = r.useMemo(() => t.getIconURL(135, !1, !0), [t]),
        V = () => {
            (E.current = !0), s();
        };
    return (
        (0, p.ZP)(() => {
            setTimeout(() => {
                V();
            }, 3000);
        }),
        (0, k.jsx)('div', {
            className: S.coverContainer,
            children: (0, k.jsxs)('div', {
                className: S.centerContent,
                children: [
                    u && D
                        ? (0, k.jsx)('div', {
                              children: (0, k.jsx)('img', {
                                  className: S.guildImage,
                                  src: B,
                                  alt: ''
                              })
                          })
                        : (0, k.jsx)(L, { guild: t }),
                    (0, k.jsxs)('div', {
                        className: S.coverContent,
                        children: [
                            (0, k.jsx)(e.Text, {
                                className: S.coverTitle,
                                variant: u && D ? 'text-lg/normal' : 'text-md/medium',
                                color: 'always-white',
                                id: n,
                                children: g.NW.format(g.t['j59F/f'], { guildName: null == t ? void 0 : t.name })
                            }),
                            f
                                ? (0, k.jsx)(e.$jN, { className: S.__invalid_subtitle })
                                : o === A.uX.NOT_APPLICABLE
                                  ? (0, k.jsx)(e.X6q, {
                                        className: S.__invalid_subtitle,
                                        variant: u && D ? 'heading-xxl/normal' : 'heading-xl/semibold',
                                        color: 'always-white',
                                        children: g.NW.string(g.t.Q5ibtb)
                                    })
                                  : (0, k.jsx)(e.X6q, {
                                        className: S.__invalid_subtitle,
                                        variant: u && D ? 'heading-xxl/normal' : 'heading-xl/semibold',
                                        color: 'always-white',
                                        children: g.NW.string(g.t['Alcl/f'])
                                    })
                        ]
                    })
                ]
            })
        })
    );
}
