x.d(i, {
    B0: () => T,
    ZP: () => j,
    _I: () => w,
    xm: () => P
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
    d = x(626135),
    c = x(768581),
    y = x(956664),
    f = x(45966),
    u = x(819553),
    G = x(487533),
    A = x(279876),
    D = x(180504),
    E = x(790711),
    B = x(535170),
    V = x(981631),
    b = x(388032),
    F = x(964264);
function g(a) {
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
function S(a, i) {
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
function v(a) {
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
function P() {
    let a = v(D);
    return (0, k.jsx)('div', {
        className: s()(F.leftArt, F.altFloat),
        children: (0, k.jsx)('div', {
            ref: a,
            className: F.grillingIsland
        })
    });
}
function T() {
    let a = v(B);
    return (0, k.jsx)('div', {
        className: s()(F.rightArt, F.altFloat),
        children: (0, k.jsx)('div', {
            ref: a,
            className: F.waffleIsland
        })
    });
}
function w(a) {
    let { guild: i, mainIslandClassName: x, balloonDogClassName: t } = a,
        o = (0, m.e7)([l.Z], () => l.Z.useReducedMotion),
        e = r.useRef(null),
        p = v(A),
        h = c.ZP.getGuildIconURL({
            id: i.id,
            icon: i.icon,
            size: 96
        });
    return (
        r.useEffect(() => {
            let a;
            return (
                null != e.current && null != h
                    ? (0, y.OF)(h).then((i) => {
                          let x = (0, G.Z)(JSON.parse(JSON.stringify(E)), h, i[0]);
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
                          animationData: JSON.parse(JSON.stringify(E))
                      })),
                () => {
                    null == a || a.destroy();
                }
            );
        }, [h, e, o]),
        (0, k.jsxs)('div', {
            className: s()(F.centerArt, F.float),
            children: [
                (0, k.jsx)('div', {
                    className: s()(F.balloonDog, t),
                    ref: p
                }),
                (0, k.jsx)('div', {
                    className: s()(F.mainIsland, x),
                    ref: e
                })
            ]
        })
    );
}
function j(a) {
    let { guild: i, onStart: x, onboardingStatus: t, headerId: s, disableTracking: o } = a,
        n = (0, m.e7)([f.Z], () => f.Z.isLoading()),
        l = r.useRef(!1);
    r.useEffect(() => {
        if (!o)
            return (
                d.default.track(
                    V.rMx.GUILD_ONBOARDING_STEP_VIEWED,
                    S(g({}, (0, h.hH)(i.id)), {
                        step: -1,
                        required: !0
                    })
                ),
                () => {
                    d.default.track(
                        V.rMx.GUILD_ONBOARDING_STEP_COMPLETED,
                        S(g({}, (0, h.hH)(i.id)), {
                            step: -1,
                            skipped: !l.current,
                            is_final_step: !1,
                            in_onboarding: !0
                        })
                    );
                }
            );
    }, [i.id, l, o]);
    let c = () => {
        (l.current = !0), x();
    };
    return (
        (0, p.ZP)(() => {
            setTimeout(() => {
                c();
            }, 3000);
        }),
        (0, k.jsx)('div', {
            className: F.coverContainer,
            children: (0, k.jsxs)('div', {
                className: F.centerContent,
                children: [
                    (0, k.jsx)(w, { guild: i }),
                    (0, k.jsxs)('div', {
                        className: F.coverContent,
                        children: [
                            (0, k.jsx)(e.Text, {
                                className: F.coverTitle,
                                variant: 'text-md/medium',
                                color: 'always-white',
                                id: s,
                                children: b.NW.format(b.t['j59F/f'], { guildName: null == i ? void 0 : i.name })
                            }),
                            n
                                ? (0, k.jsx)(e.$jN, { className: F.__invalid_subtitle })
                                : t === u.uX.NOT_APPLICABLE
                                  ? (0, k.jsx)(e.X6q, {
                                        className: F.__invalid_subtitle,
                                        variant: 'heading-xl/semibold',
                                        color: 'always-white',
                                        children: b.NW.string(b.t.Q5ibtb)
                                    })
                                  : (0, k.jsx)(e.X6q, {
                                        className: F.__invalid_subtitle,
                                        variant: 'heading-xl/semibold',
                                        color: 'always-white',
                                        children: b.NW.string(b.t['Alcl/f'])
                                    })
                        ]
                    })
                ]
            })
        })
    );
}
