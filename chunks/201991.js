n.d(t, { Mm: () => S, RA: () => P, Ay: () => w, j5: () => k });
var i = n(627968),
    a = n(64700),
    s = n(503698),
    r = n.n(s),
    l = n(883885),
    o = n.n(l),
    c = n(17928),
    d = n(834730),
    u = n(289873),
    m = n(534514),
    _ = n(964486),
    p = n(775602),
    f = n(58149),
    h = n(260509),
    x = n(954571),
    g = n(486020),
    v = n(515718),
    A = n(591552),
    j = n(713125),
    b = n(739408),
    N = n(113473),
    E = n(694268),
    I = n(896018),
    C = n(652215),
    O = n(985018),
    D = n(974669);
function y(e) {
    let t = (0, c.bG)([p.A], () => p.A.useReducedMotion),
        n = a.useRef(null);
    return (
        a.useEffect(() => {
            let i;
            return (
                null != n.current &&
                    (i = o().loadAnimation({
                        container: n.current,
                        renderer: "svg",
                        loop: !0,
                        autoplay: !t,
                        animationData: JSON.parse(JSON.stringify(e)),
                    })),
                () => {
                    i?.destroy();
                }
            );
        }, [n, t, e]),
        n
    );
}
function S() {
    let e = y(N);
    return (0, i.jsx)("div", { className: r()(D.vV, D.KP), children: (0, i.jsx)("div", { ref: e, className: D.yi }) });
}
function P() {
    let e = y(I);
    return (0, i.jsx)("div", { className: r()(D.M8, D.KP), children: (0, i.jsx)("div", { ref: e, className: D.D8 }) });
}
function k(e) {
    let { guild: t, mainIslandClassName: n, balloonDogClassName: s } = e,
        l = (0, c.bG)([p.A], () => p.A.useReducedMotion),
        d = a.useRef(null),
        u = y(b),
        m = g.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 96 });
    return (
        a.useEffect(() => {
            let e;
            return (
                null != d.current && null != m
                    ? (0, v.S4)(m).then((t) => {
                          var n, i;
                          let a,
                              s =
                                  ((n = JSON.parse(JSON.stringify(E))),
                                  (i = t[0]),
                                  (n.assets[0].p = m),
                                  (a = n.layers.findIndex((e) => "flag" === e.nm)),
                                  n.layers[a].shapes[0].it.forEach((e, t) => {
                                      "gr" === n.layers[a].shapes[0].it[t].ty &&
                                          n.layers[a].shapes[0].it[t].it.findIndex((e) => "fl" === e.ty) >= 0 &&
                                          (n.layers[a].shapes[0].it[t].it[1].c.k = [...i.map((e) => e / 256), 1]);
                                  }),
                                  n);
                          e = o().loadAnimation({
                              container: d.current,
                              renderer: "svg",
                              loop: !0,
                              autoplay: !l,
                              animationData: s,
                          });
                      })
                    : null != d.current &&
                      (e = o().loadAnimation({
                          container: d.current,
                          renderer: "svg",
                          loop: !0,
                          autoplay: !l,
                          animationData: JSON.parse(JSON.stringify(E)),
                      })),
                () => {
                    e?.destroy();
                }
            );
        }, [m, d, l]),
        (0, i.jsxs)("div", {
            className: r()(D.tu, D.fV),
            children: [
                (0, i.jsx)("div", { className: r()(D.Sb, s), ref: u }),
                (0, i.jsx)("div", { className: r()(D.$h, n), ref: d }),
            ],
        })
    );
}
function w(e) {
    let { guild: t, onStart: n, onboardingStatus: s, headerId: r, disableTracking: l } = e,
        o = (0, c.bG)([A.A], () => A.A.isLoading()),
        p = a.useRef(!1);
    a.useEffect(() => {
        if (!l)
            return (
                x.default.track(C.HAw.GUILD_ONBOARDING_STEP_VIEWED, { ...(0, f.H$)(t.id), step: -1, required: !0 }),
                () => {
                    x.default.track(C.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
                        ...(0, f.H$)(t.id),
                        step: -1,
                        skipped: !p.current,
                        is_final_step: !1,
                        in_onboarding: !0,
                    });
                }
            );
    }, [t.id, p, l]);
    let g = a.useMemo(() => (0, h.Iv)(t, 135, !1, !0), [t]);
    return (
        (0, _.Ay)(() => {
            setTimeout(() => {
                (p.current = !0), n();
            }, 3e3);
        }),
        (0, i.jsx)("div", {
            className: D.PY,
            children: (0, i.jsxs)("div", {
                className: D.Fo,
                children: [
                    (0, i.jsx)("div", { children: (0, i.jsx)("img", { className: D.D3, src: g, alt: "" }) }),
                    (0, i.jsxs)("div", {
                        className: D.rD,
                        children: [
                            (0, i.jsx)(d.E, {
                                className: D.CH,
                                variant: "text-lg/normal",
                                color: "always-white",
                                id: r,
                                children: O.intl.format(O.t["j59F/c"], { guildName: t?.name }),
                            }),
                            o
                                ? (0, i.jsx)(u.y, { className: D.__invalid_subtitle })
                                : s === j.$o.NOT_APPLICABLE
                                  ? (0, i.jsx)(m.D, {
                                        className: D.__invalid_subtitle,
                                        variant: "heading-xxl/normal",
                                        color: "always-white",
                                        children: O.intl.string(O.t.Q5ibtV),
                                    })
                                  : (0, i.jsx)(m.D, {
                                        className: D.__invalid_subtitle,
                                        variant: "heading-xxl/normal",
                                        color: "always-white",
                                        children: O.intl.string(O.t["Alcl/e"]),
                                    }),
                        ],
                    }),
                ],
            }),
        })
    );
}
