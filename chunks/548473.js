x.d(i, {
    B0: function () {
        return v;
    },
    ZP: function () {
        return P;
    },
    _I: function () {
        return T;
    },
    xm: function () {
        return S;
    }
});
var r = x(200651),
    k = x(192379),
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
    F = x(490266);
function g(a) {
    let i = (0, m.e7)([l.Z], () => l.Z.useReducedMotion),
        x = k.useRef(null);
    return (
        k.useEffect(() => {
            let r;
            return (
                null != x.current &&
                    (r = n().loadAnimation({
                        container: x.current,
                        renderer: 'svg',
                        loop: !0,
                        autoplay: !i,
                        animationData: JSON.parse(JSON.stringify(a))
                    })),
                () => {
                    null == r || r.destroy();
                }
            );
        }, [x, i, a]),
        x
    );
}
function S() {
    let a = g(D);
    return (0, r.jsx)('div', {
        className: s()(F.leftArt, F.altFloat),
        children: (0, r.jsx)('div', {
            ref: a,
            className: F.grillingIsland
        })
    });
}
function v() {
    let a = g(B);
    return (0, r.jsx)('div', {
        className: s()(F.rightArt, F.altFloat),
        children: (0, r.jsx)('div', {
            ref: a,
            className: F.waffleIsland
        })
    });
}
function T(a) {
    let { guild: i, mainIslandClassName: x, balloonDogClassName: t } = a,
        o = (0, m.e7)([l.Z], () => l.Z.useReducedMotion),
        e = k.useRef(null),
        p = g(A),
        h = c.ZP.getGuildIconURL({
            id: i.id,
            icon: i.icon,
            size: 96
        });
    return (
        k.useEffect(() => {
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
        (0, r.jsxs)('div', {
            className: s()(F.centerArt, F.float),
            children: [
                (0, r.jsx)('div', {
                    className: s()(F.balloonDog, t),
                    ref: p
                }),
                (0, r.jsx)('div', {
                    className: s()(F.mainIsland, x),
                    ref: e
                })
            ]
        })
    );
}
function P(a) {
    let { guild: i, onStart: x, onboardingStatus: t, headerId: s, disableTracking: o } = a,
        n = (0, m.e7)([f.Z], () => f.Z.isLoading()),
        l = k.useRef(!1);
    k.useEffect(() => {
        if (!o)
            return (
                d.default.track(V.rMx.GUILD_ONBOARDING_STEP_VIEWED, {
                    ...(0, h.hH)(i.id),
                    step: -1,
                    required: !0
                }),
                () => {
                    d.default.track(V.rMx.GUILD_ONBOARDING_STEP_COMPLETED, {
                        ...(0, h.hH)(i.id),
                        step: -1,
                        skipped: !l.current,
                        is_final_step: !1,
                        in_onboarding: !0
                    });
                }
            );
    }, [i.id, l, o]);
    let c = () => {
        (l.current = !0), x();
    };
    return (
        (0, p.Z)(() => {
            setTimeout(() => {
                c();
            }, 3000);
        }),
        (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)('div', {
                className: F.coverContainer,
                children: (0, r.jsxs)('div', {
                    className: F.centerContent,
                    children: [
                        (0, r.jsx)(T, { guild: i }),
                        (0, r.jsxs)('div', {
                            className: F.coverContent,
                            children: [
                                (0, r.jsx)(e.Text, {
                                    className: F.coverTitle,
                                    variant: 'text-md/medium',
                                    color: 'always-white',
                                    id: s,
                                    children: b.intl.format(b.t['j59F/f'], { guildName: null == i ? void 0 : i.name })
                                }),
                                n
                                    ? (0, r.jsx)(e.Spinner, { className: F.__invalid_subtitle })
                                    : t === u.uX.NOT_APPLICABLE
                                      ? (0, r.jsx)(e.Heading, {
                                            className: F.__invalid_subtitle,
                                            variant: 'heading-xl/semibold',
                                            color: 'always-white',
                                            children: b.intl.string(b.t.Q5ibtb)
                                        })
                                      : (0, r.jsx)(e.Heading, {
                                            className: F.__invalid_subtitle,
                                            variant: 'heading-xl/semibold',
                                            color: 'always-white',
                                            children: b.intl.string(b.t['Alcl/f'])
                                        })
                            ]
                        })
                    ]
                })
            })
        })
    );
}
