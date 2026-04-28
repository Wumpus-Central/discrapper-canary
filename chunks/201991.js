i.d(a, { Mm: () => S, RA: () => R, Ay: () => G, j5: () => k });
var s = i(627968),
    t = i(64700),
    n = i(503698),
    r = i.n(n),
    l = i(883885),
    c = i.n(l),
    d = i(17928);
if (21552 == i.j) var u = i(834730);
if (21552 == i.j) var o = i(289873);
if (21552 == i.j) var f = i(534514);
var m = i(964486),
    v = i(775602),
    h = i(58149),
    p = i(260509),
    N = i(954571),
    x = i(486020),
    y = i(515718),
    j = i(591552),
    _ = i(713125),
    A = i(739408),
    g = i(113473),
    D = i(694268),
    E = i(896018),
    O = i(652215),
    b = i(985018),
    w = i(974669);
function I(e) {
    let a = (0, d.bG)([v.A], () => v.A.useReducedMotion),
        i = t.useRef(null);
    return (
        t.useEffect(() => {
            let s;
            return (
                null != i.current &&
                    (s = c().loadAnimation({
                        container: i.current,
                        renderer: "svg",
                        loop: !0,
                        autoplay: !a,
                        animationData: JSON.parse(JSON.stringify(e)),
                    })),
                () => {
                    s?.destroy();
                }
            );
        }, [i, a, e]),
        i
    );
}
function S() {
    let e = I(g);
    return (0, s.jsx)("div", { className: r()(w.vV, w.KP), children: (0, s.jsx)("div", { ref: e, className: w.yi }) });
}
function R() {
    let e = I(E);
    return (0, s.jsx)("div", { className: r()(w.M8, w.KP), children: (0, s.jsx)("div", { ref: e, className: w.D8 }) });
}
function k(e) {
    let { guild: a, mainIslandClassName: i, balloonDogClassName: n } = e,
        l = (0, d.bG)([v.A], () => v.A.useReducedMotion),
        u = t.useRef(null),
        o = I(A),
        f = x.Ay.getGuildIconURL({ id: a.id, icon: a.icon, size: 96 });
    return (
        t.useEffect(() => {
            let e;
            return (
                null != u.current && null != f
                    ? (0, y.S4)(f).then((a) => {
                          var i, s;
                          let t,
                              n =
                                  ((i = JSON.parse(JSON.stringify(D))),
                                  (s = a[0]),
                                  (i.assets[0].p = f),
                                  (t = i.layers.findIndex((e) => "flag" === e.nm)),
                                  i.layers[t].shapes[0].it.forEach((e, a) => {
                                      "gr" === i.layers[t].shapes[0].it[a].ty &&
                                          i.layers[t].shapes[0].it[a].it.findIndex((e) => "fl" === e.ty) >= 0 &&
                                          (i.layers[t].shapes[0].it[a].it[1].c.k = [...s.map((e) => e / 256), 1]);
                                  }),
                                  i);
                          e = c().loadAnimation({
                              container: u.current,
                              renderer: "svg",
                              loop: !0,
                              autoplay: !l,
                              animationData: n,
                          });
                      })
                    : null != u.current &&
                      (e = c().loadAnimation({
                          container: u.current,
                          renderer: "svg",
                          loop: !0,
                          autoplay: !l,
                          animationData: JSON.parse(JSON.stringify(D)),
                      })),
                () => {
                    e?.destroy();
                }
            );
        }, [f, u, l]),
        (0, s.jsxs)("div", {
            className: r()(w.tu, w.fV),
            children: [
                (0, s.jsx)("div", { className: r()(w.Sb, n), ref: o }),
                (0, s.jsx)("div", { className: r()(w.$h, i), ref: u }),
            ],
        })
    );
}
function G(e) {
    let { guild: a, onStart: i, onboardingStatus: n, headerId: r, disableTracking: l } = e,
        c = (0, d.bG)([j.A], () => j.A.isLoading()),
        v = t.useRef(!1);
    t.useEffect(() => {
        if (!l)
            return (
                N.default.track(O.HAw.GUILD_ONBOARDING_STEP_VIEWED, { ...(0, h.H$)(a.id), step: -1, required: !0 }),
                () => {
                    N.default.track(O.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
                        ...(0, h.H$)(a.id),
                        step: -1,
                        skipped: !v.current,
                        is_final_step: !1,
                        in_onboarding: !0,
                    });
                }
            );
    }, [a.id, v, l]);
    let x = t.useMemo(() => (0, p.Iv)(a, 135, !1, !0), [a]);
    return (
        (0, m.Ay)(() => {
            setTimeout(() => {
                (v.current = !0), i();
            }, 3e3);
        }),
        (0, s.jsx)("div", {
            className: w.PY,
            children: (0, s.jsxs)("div", {
                className: w.Fo,
                children: [
                    (0, s.jsx)("div", { children: (0, s.jsx)("img", { className: w.D3, src: x, alt: "" }) }),
                    (0, s.jsxs)("div", {
                        className: w.rD,
                        children: [
                            (0, s.jsx)(u.E, {
                                className: w.CH,
                                variant: "text-lg/normal",
                                color: "always-white",
                                id: r,
                                children: b.intl.format(b.t["j59F/c"], { guildName: a?.name }),
                            }),
                            c
                                ? (0, s.jsx)(o.y, { className: w.__invalid_subtitle })
                                : n === _.$o.NOT_APPLICABLE
                                  ? (0, s.jsx)(f.D, {
                                        className: w.__invalid_subtitle,
                                        variant: "heading-xxl/normal",
                                        color: "always-white",
                                        children: b.intl.string(b.t.Q5ibtV),
                                    })
                                  : (0, s.jsx)(f.D, {
                                        className: w.__invalid_subtitle,
                                        variant: "heading-xxl/normal",
                                        color: "always-white",
                                        children: b.intl.string(b.t["Alcl/e"]),
                                    }),
                        ],
                    }),
                ],
            }),
        })
    );
}
