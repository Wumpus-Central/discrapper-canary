n.d(t, { Mm: () => C, RA: () => L, Ay: () => R, j5: () => b });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(883885),
    d = n.n(a),
    o = n(17928);
if (21552 == n.j) var c = n(834730);
if (21552 == n.j) var u = n(289873);
if (21552 == n.j) var m = n(534514);
var N = n(964486),
    h = n(775602),
    I = n(58149),
    E = n(260509),
    g = n(954571),
    A = n(486020),
    S = n(515718),
    _ = n(591552),
    f = n(713125),
    x = n(739408),
    T = n(113473),
    D = n(694268),
    j = n(896018),
    p = n(652215),
    O = n(985018),
    G = n(974669);
function v(e) {
    let t = (0, o.bG)([h.A], () => h.A.useReducedMotion),
        n = l.useRef(null);
    return (
        l.useEffect(() => {
            let i;
            return (
                null != n.current &&
                    (i = d().loadAnimation({
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
function C() {
    let e = v(T);
    return (0, i.jsx)("div", { className: r()(G.vV, G.KP), children: (0, i.jsx)("div", { ref: e, className: G.yi }) });
}
function L() {
    let e = v(j);
    return (0, i.jsx)("div", { className: r()(G.M8, G.KP), children: (0, i.jsx)("div", { ref: e, className: G.D8 }) });
}
function b(e) {
    let { guild: t, mainIslandClassName: n, balloonDogClassName: s } = e,
        a = (0, o.bG)([h.A], () => h.A.useReducedMotion),
        c = l.useRef(null),
        u = v(x),
        m = A.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 96 });
    return (
        l.useEffect(() => {
            let e;
            return (
                null != c.current && null != m
                    ? (0, S.S4)(m).then((t) => {
                          var n, i;
                          let l,
                              s =
                                  ((n = JSON.parse(JSON.stringify(D))),
                                  (i = t[0]),
                                  (n.assets[0].p = m),
                                  (l = n.layers.findIndex((e) => "flag" === e.nm)),
                                  n.layers[l].shapes[0].it.forEach((e, t) => {
                                      "gr" === n.layers[l].shapes[0].it[t].ty &&
                                          n.layers[l].shapes[0].it[t].it.findIndex((e) => "fl" === e.ty) >= 0 &&
                                          (n.layers[l].shapes[0].it[t].it[1].c.k = [...i.map((e) => e / 256), 1]);
                                  }),
                                  n);
                          e = d().loadAnimation({
                              container: c.current,
                              renderer: "svg",
                              loop: !0,
                              autoplay: !a,
                              animationData: s,
                          });
                      })
                    : null != c.current &&
                      (e = d().loadAnimation({
                          container: c.current,
                          renderer: "svg",
                          loop: !0,
                          autoplay: !a,
                          animationData: JSON.parse(JSON.stringify(D)),
                      })),
                () => {
                    e?.destroy();
                }
            );
        }, [m, c, a]),
        (0, i.jsxs)("div", {
            className: r()(G.tu, G.fV),
            children: [
                (0, i.jsx)("div", { className: r()(G.Sb, s), ref: u }),
                (0, i.jsx)("div", { className: r()(G.$h, n), ref: c }),
            ],
        })
    );
}
function R(e) {
    let { guild: t, onStart: n, onboardingStatus: s, headerId: r, disableTracking: a } = e,
        d = (0, o.bG)([_.A], () => _.A.isLoading()),
        h = l.useRef(!1);
    l.useEffect(() => {
        if (!a)
            return (
                g.default.track(p.HAw.GUILD_ONBOARDING_STEP_VIEWED, { ...(0, I.H$)(t.id), step: -1, required: !0 }),
                () => {
                    g.default.track(p.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
                        ...(0, I.H$)(t.id),
                        step: -1,
                        skipped: !h.current,
                        is_final_step: !1,
                        in_onboarding: !0,
                    });
                }
            );
    }, [t.id, h, a]);
    let A = l.useMemo(() => (0, E.Iv)(t, 135, !1, !0), [t]);
    return (
        (0, N.Ay)(() => {
            setTimeout(() => {
                (h.current = !0), n();
            }, 3e3);
        }),
        (0, i.jsx)("div", {
            className: G.PY,
            children: (0, i.jsxs)("div", {
                className: G.Fo,
                children: [
                    (0, i.jsx)("div", { children: (0, i.jsx)("img", { className: G.D3, src: A, alt: "" }) }),
                    (0, i.jsxs)("div", {
                        className: G.rD,
                        children: [
                            (0, i.jsx)(c.E, {
                                className: G.CH,
                                variant: "text-lg/normal",
                                color: "always-white",
                                id: r,
                                children: O.intl.format(O.t["j59F/c"], { guildName: t?.name }),
                            }),
                            d
                                ? (0, i.jsx)(u.y, { className: G.__invalid_subtitle })
                                : s === f.$o.NOT_APPLICABLE
                                  ? (0, i.jsx)(m.D, {
                                        className: G.__invalid_subtitle,
                                        variant: "heading-xxl/normal",
                                        color: "always-white",
                                        children: O.intl.string(O.t.Q5ibtV),
                                    })
                                  : (0, i.jsx)(m.D, {
                                        className: G.__invalid_subtitle,
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
