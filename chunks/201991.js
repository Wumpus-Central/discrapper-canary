n.d(t, { Mm: () => P, RA: () => S, Ay: () => T, j5: () => k });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(883885),
    o = n.n(a),
    c = n(17928),
    d = n(834730),
    u = n(289873),
    m = n(534514),
    _ = n(964486),
    p = n(775602),
    x = n(58149),
    g = n(260509),
    h = n(954571),
    f = n(486020),
    v = n(515718),
    A = n(591552),
    N = n(713125),
    E = n(739408),
    j = n(113473),
    b = n(694268),
    C = n(896018),
    I = n(652215),
    O = n(985018),
    D = n(974669);
function y(e) {
    let t = (0, c.bG)([p.A], () => p.A.useReducedMotion),
        n = s.useRef(null);
    return (
        s.useEffect(() => {
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
function P() {
    let e = y(j);
    return (0, i.jsx)("div", { className: r()(D.vV, D.KP), children: (0, i.jsx)("div", { ref: e, className: D.yi }) });
}
function S() {
    let e = y(C);
    return (0, i.jsx)("div", { className: r()(D.M8, D.KP), children: (0, i.jsx)("div", { ref: e, className: D.D8 }) });
}
function k(e) {
    let { guild: t, mainIslandClassName: n, balloonDogClassName: l } = e,
        a = (0, c.bG)([p.A], () => p.A.useReducedMotion),
        d = s.useRef(null),
        u = y(E),
        m = f.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 96 });
    return (
        s.useEffect(() => {
            let e;
            return (
                null != d.current && null != m
                    ? (0, v.S4)(m).then((t) => {
                          var n, i;
                          let s,
                              l =
                                  ((n = JSON.parse(JSON.stringify(b))),
                                  (i = t[0]),
                                  (n.assets[0].p = m),
                                  (s = n.layers.findIndex((e) => "flag" === e.nm)),
                                  n.layers[s].shapes[0].it.forEach((e, t) => {
                                      "gr" === n.layers[s].shapes[0].it[t].ty &&
                                          n.layers[s].shapes[0].it[t].it.findIndex((e) => "fl" === e.ty) >= 0 &&
                                          (n.layers[s].shapes[0].it[t].it[1].c.k = [...i.map((e) => e / 256), 1]);
                                  }),
                                  n);
                          e = o().loadAnimation({
                              container: d.current,
                              renderer: "svg",
                              loop: !0,
                              autoplay: !a,
                              animationData: l,
                          });
                      })
                    : null != d.current &&
                      (e = o().loadAnimation({
                          container: d.current,
                          renderer: "svg",
                          loop: !0,
                          autoplay: !a,
                          animationData: JSON.parse(JSON.stringify(b)),
                      })),
                () => {
                    e?.destroy();
                }
            );
        }, [m, d, a]),
        (0, i.jsxs)("div", {
            className: r()(D.tu, D.fV),
            children: [
                (0, i.jsx)("div", { className: r()(D.Sb, l), ref: u }),
                (0, i.jsx)("div", { className: r()(D.$h, n), ref: d }),
            ],
        })
    );
}
function T(e) {
    let { guild: t, onStart: n, onboardingStatus: l, headerId: r, disableTracking: a } = e,
        o = (0, c.bG)([A.A], () => A.A.isLoading()),
        p = s.useRef(!1);
    s.useEffect(() => {
        if (!a)
            return (
                h.default.track(I.HAw.GUILD_ONBOARDING_STEP_VIEWED, { ...(0, x.H$)(t.id), step: -1, required: !0 }),
                () => {
                    h.default.track(I.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
                        ...(0, x.H$)(t.id),
                        step: -1,
                        skipped: !p.current,
                        is_final_step: !1,
                        in_onboarding: !0,
                    });
                }
            );
    }, [t.id, p, a]);
    let f = s.useMemo(() => (0, g.Iv)(t, 135, !1, !0), [t]);
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
                    (0, i.jsx)("div", { children: (0, i.jsx)("img", { className: D.D3, src: f, alt: "" }) }),
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
                                : l === N.$o.NOT_APPLICABLE
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
