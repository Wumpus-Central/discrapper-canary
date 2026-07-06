t.d(i, { Mm: () => R, RA: () => k, Ay: () => P, j5: () => G });
var a = t(627968),
    s = t(64700),
    r = t(503698),
    n = t.n(r),
    l = t(883885),
    c = t.n(l),
    d = t(17928);
if (21552 == t.j) var o = t(834730);
if (21552 == t.j) var u = t(289873);
if (21552 == t.j) var f = t(534514);
var m = t(964486),
    v = t(775602),
    h = t(95561),
    p = t(260509),
    y = t(174459),
    N = t(486020),
    x = t(515718),
    g = t(591552),
    j = t(713125),
    _ = t(739408),
    A = t(113473),
    D = t(694268),
    E = t(896018),
    O = t(652215),
    b = t(375708),
    I = t(974669);
function S(e) {
    let i = (0, d.bG)([v.Ay], () => v.Ay.useReducedMotion),
        t = s.useRef(null);
    return (
        s.useEffect(() => {
            let a;
            return (
                null != t.current &&
                    (a = c().loadAnimation({
                        container: t.current,
                        renderer: "svg",
                        loop: !0,
                        autoplay: !i,
                        animationData: JSON.parse(JSON.stringify(e)),
                    })),
                () => {
                    a?.destroy();
                }
            );
        }, [t, i, e]),
        t
    );
}
function R() {
    let e = S(A);
    return (0, a.jsx)("div", { className: n()(I.vV, I.KP), children: (0, a.jsx)("div", { ref: e, className: I.yi }) });
}
function k() {
    let e = S(E);
    return (0, a.jsx)("div", { className: n()(I.M8, I.KP), children: (0, a.jsx)("div", { ref: e, className: I.D8 }) });
}
function G(e) {
    let { guild: i, mainIslandClassName: t, balloonDogClassName: r } = e,
        l = (0, d.bG)([v.Ay], () => v.Ay.useReducedMotion),
        o = s.useRef(null),
        u = S(_),
        f = N.Ay.getGuildIconURL({ id: i.id, icon: i.icon, size: 96 });
    return (
        s.useEffect(() => {
            let e;
            return (
                null != o.current && null != f
                    ? (0, x.S4)(f).then((i) => {
                          var t, a;
                          let s,
                              r =
                                  ((t = JSON.parse(JSON.stringify(D))),
                                  (a = i[0]),
                                  (t.assets[0].p = f),
                                  (s = t.layers.findIndex((e) => "flag" === e.nm)),
                                  t.layers[s].shapes[0].it.forEach((e, i) => {
                                      "gr" === t.layers[s].shapes[0].it[i].ty &&
                                          t.layers[s].shapes[0].it[i].it.findIndex((e) => "fl" === e.ty) >= 0 &&
                                          (t.layers[s].shapes[0].it[i].it[1].c.k = [...a.map((e) => e / 256), 1]);
                                  }),
                                  t);
                          e = c().loadAnimation({
                              container: o.current,
                              renderer: "svg",
                              loop: !0,
                              autoplay: !l,
                              animationData: r,
                          });
                      })
                    : null != o.current &&
                      (e = c().loadAnimation({
                          container: o.current,
                          renderer: "svg",
                          loop: !0,
                          autoplay: !l,
                          animationData: JSON.parse(JSON.stringify(D)),
                      })),
                () => {
                    e?.destroy();
                }
            );
        }, [f, o, l]),
        (0, a.jsxs)("div", {
            className: n()(I.tu, I.fV),
            children: [
                (0, a.jsx)("div", { className: n()(I.Sb, r), ref: u }),
                (0, a.jsx)("div", { className: n()(I.$h, t), ref: o }),
            ],
        })
    );
}
function P(e) {
    let { guild: i, onStart: t, onboardingStatus: r, headerId: n, disableTracking: l } = e,
        c = (0, d.bG)([g.A], () => g.A.isLoading()),
        v = s.useRef(!1);
    s.useEffect(() => {
        if (!l)
            return (
                y.default.track(O.HAw.GUILD_ONBOARDING_STEP_VIEWED, { ...(0, h.H$)(i.id), step: -1, required: !0 }),
                () => {
                    y.default.track(O.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
                        ...(0, h.H$)(i.id),
                        step: -1,
                        skipped: !v.current,
                        is_final_step: !1,
                        in_onboarding: !0,
                    });
                }
            );
    }, [i.id, v, l]);
    let N = s.useMemo(() => (0, p.Iv)(i, 135, !1, !0), [i]);
    return (
        (0, m.Ay)(() => {
            setTimeout(() => {
                (v.current = !0), t();
            }, 3e3);
        }),
        (0, a.jsx)("div", {
            className: I.PY,
            children: (0, a.jsxs)("div", {
                className: I.Fo,
                children: [
                    (0, a.jsx)("div", { children: (0, a.jsx)("img", { className: I.D3, src: N, alt: "" }) }),
                    (0, a.jsxs)("div", {
                        className: I.rD,
                        children: [
                            (0, a.jsx)(o.E, {
                                className: I.CH,
                                variant: "text-lg/normal",
                                color: "text-overlay-light",
                                id: n,
                                children: b.intl.format(b.t["j59F/c"], { guildName: i?.name }),
                            }),
                            c
                                ? (0, a.jsx)(u.y, { className: I.__invalid_subtitle })
                                : r === j.$o.NOT_APPLICABLE
                                  ? (0, a.jsx)(f.D, {
                                        className: I.__invalid_subtitle,
                                        variant: "heading-xxl/normal",
                                        color: "text-overlay-light",
                                        children: b.intl.string(b.t.Q5ibtV),
                                    })
                                  : (0, a.jsx)(f.D, {
                                        className: I.__invalid_subtitle,
                                        variant: "heading-xxl/normal",
                                        color: "text-overlay-light",
                                        children: b.intl.string(b.t["Alcl/e"]),
                                    }),
                        ],
                    }),
                ],
            }),
        })
    );
}
