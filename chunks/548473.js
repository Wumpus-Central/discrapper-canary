x.d(i, {
    B0: () => w,
    ZP: () => L,
    _I: () => j,
    xm: () => T
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
    c = x(626135),
    y = x(768581),
    f = x(956664),
    u = x(45966),
    G = x(819553),
    A = x(487533),
    D = x(279876),
    E = x(180504),
    B = x(790711),
    V = x(535170),
    b = x(981631),
    F = x(388032),
    g = x(597094);
function S(a) {
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
function v(a, i) {
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
function P(a) {
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
function T() {
    let a = P(E);
    return (0, k.jsx)('div', {
        className: s()(g.leftArt, g.altFloat),
        children: (0, k.jsx)('div', {
            ref: a,
            className: g.grillingIsland
        })
    });
}
function w() {
    let a = P(V);
    return (0, k.jsx)('div', {
        className: s()(g.rightArt, g.altFloat),
        children: (0, k.jsx)('div', {
            ref: a,
            className: g.waffleIsland
        })
    });
}
function j(a) {
    let { guild: i, mainIslandClassName: x, balloonDogClassName: t } = a,
        o = (0, m.e7)([l.Z], () => l.Z.useReducedMotion),
        e = r.useRef(null),
        p = P(D),
        h = y.ZP.getGuildIconURL({
            id: i.id,
            icon: i.icon,
            size: 96
        });
    return (
        r.useEffect(() => {
            let a;
            return (
                null != e.current && null != h
                    ? (0, f.OF)(h).then((i) => {
                          let x = (0, A.Z)(JSON.parse(JSON.stringify(B)), h, i[0]);
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
                          animationData: JSON.parse(JSON.stringify(B))
                      })),
                () => {
                    null == a || a.destroy();
                }
            );
        }, [h, e, o]),
        (0, k.jsxs)('div', {
            className: s()(g.centerArt, g.float),
            children: [
                (0, k.jsx)('div', {
                    className: s()(g.balloonDog, t),
                    ref: p
                }),
                (0, k.jsx)('div', {
                    className: s()(g.mainIsland, x),
                    ref: e
                })
            ]
        })
    );
}
function L(a) {
    let { guild: i, onStart: x, onboardingStatus: t, headerId: s, disableTracking: o } = a,
        n = (0, m.e7)([u.Z], () => u.Z.isLoading()),
        l = (0, d.Q3)('GuildOnboardingCover'),
        y = r.useRef(!1);
    r.useEffect(() => {
        if (!o)
            return (
                c.default.track(
                    b.rMx.GUILD_ONBOARDING_STEP_VIEWED,
                    v(S({}, (0, h.hH)(i.id)), {
                        step: -1,
                        required: !0
                    })
                ),
                () => {
                    c.default.track(
                        b.rMx.GUILD_ONBOARDING_STEP_COMPLETED,
                        v(S({}, (0, h.hH)(i.id)), {
                            step: -1,
                            skipped: !y.current,
                            is_final_step: !1,
                            in_onboarding: !0
                        })
                    );
                }
            );
    }, [i.id, y, o]);
    let f = r.useMemo(() => i.getIconURL(135, !1, !0), [i]),
        A = () => {
            (y.current = !0), x();
        };
    return (
        (0, p.ZP)(() => {
            setTimeout(() => {
                A();
            }, 3000);
        }),
        (0, k.jsx)('div', {
            className: g.coverContainer,
            children: (0, k.jsxs)('div', {
                className: g.centerContent,
                children: [
                    l
                        ? (0, k.jsx)('div', {
                              children: (0, k.jsx)('img', {
                                  className: g.guildImage,
                                  src: f,
                                  alt: ''
                              })
                          })
                        : (0, k.jsx)(j, { guild: i }),
                    (0, k.jsxs)('div', {
                        className: g.coverContent,
                        children: [
                            (0, k.jsx)(e.Text, {
                                className: g.coverTitle,
                                variant: l ? 'text-lg/normal' : 'text-md/medium',
                                color: 'always-white',
                                id: s,
                                children: F.NW.format(F.t['j59F/f'], { guildName: null == i ? void 0 : i.name })
                            }),
                            n
                                ? (0, k.jsx)(e.$jN, { className: g.__invalid_subtitle })
                                : t === G.uX.NOT_APPLICABLE
                                  ? (0, k.jsx)(e.X6q, {
                                        className: g.__invalid_subtitle,
                                        variant: l ? 'heading-xxl/normal' : 'heading-xl/semibold',
                                        color: 'always-white',
                                        children: F.NW.string(F.t.Q5ibtb)
                                    })
                                  : (0, k.jsx)(e.X6q, {
                                        className: g.__invalid_subtitle,
                                        variant: l ? 'heading-xxl/normal' : 'heading-xl/semibold',
                                        color: 'always-white',
                                        children: F.NW.string(F.t['Alcl/f'])
                                    })
                        ]
                    })
                ]
            })
        })
    );
}
