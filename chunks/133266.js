n.d(t, { Ay: () => y, Mm: () => L, RA: () => b, j5: () => R });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(883885),
    d = n.n(a),
    o = n(311907);
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
    x = n(71876),
    T = n(739408),
    D = n(113473),
    j = n(694268),
    p = n(896018),
    O = n(652215),
    G = n(985018),
    v = n(974669);
function C(e) {
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
function L() {
    let e = C(D);
    return (0, i.jsx)("div", { className: r()(v.vV, v.KP), children: (0, i.jsx)("div", { ref: e, className: v.yi }) });
}
function b() {
    let e = C(p);
    return (0, i.jsx)("div", { className: r()(v.M8, v.KP), children: (0, i.jsx)("div", { ref: e, className: v.D8 }) });
}
function R(e) {
    let { guild: t, mainIslandClassName: n, balloonDogClassName: s } = e,
        a = (0, o.bG)([h.A], () => h.A.useReducedMotion),
        c = l.useRef(null),
        u = C(T),
        m = A.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 96 });
    return (
        l.useEffect(() => {
            let e;
            return (
                null != c.current && null != m
                    ? (0, S.S4)(m).then((t) => {
                          let n = (0, x.A)(JSON.parse(JSON.stringify(j)), m, t[0]);
                          e = d().loadAnimation({
                              container: c.current,
                              renderer: "svg",
                              loop: !0,
                              autoplay: !a,
                              animationData: n,
                          });
                      })
                    : null != c.current &&
                      (e = d().loadAnimation({
                          container: c.current,
                          renderer: "svg",
                          loop: !0,
                          autoplay: !a,
                          animationData: JSON.parse(JSON.stringify(j)),
                      })),
                () => {
                    e?.destroy();
                }
            );
        }, [m, c, a]),
        (0, i.jsxs)("div", {
            className: r()(v.tu, v.fV),
            children: [
                (0, i.jsx)("div", { className: r()(v.Sb, s), ref: u }),
                (0, i.jsx)("div", { className: r()(v.$h, n), ref: c }),
            ],
        })
    );
}
function y(e) {
    let { guild: t, onStart: n, onboardingStatus: s, headerId: r, disableTracking: a } = e,
        d = (0, o.bG)([_.A], () => _.A.isLoading()),
        h = l.useRef(!1);
    l.useEffect(() => {
        if (!a)
            return (
                g.default.track(O.HAw.GUILD_ONBOARDING_STEP_VIEWED, { ...(0, I.H$)(t.id), step: -1, required: !0 }),
                () => {
                    g.default.track(O.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
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
            className: v.PY,
            children: (0, i.jsxs)("div", {
                className: v.Fo,
                children: [
                    (0, i.jsx)("div", { children: (0, i.jsx)("img", { className: v.D3, src: A, alt: "" }) }),
                    (0, i.jsxs)("div", {
                        className: v.rD,
                        children: [
                            (0, i.jsx)(c.E, {
                                className: v.CH,
                                variant: "text-lg/normal",
                                color: "always-white",
                                id: r,
                                children: G.intl.format(G.t["j59F/c"], { guildName: t?.name }),
                            }),
                            d
                                ? (0, i.jsx)(u.y, { className: v.__invalid_subtitle })
                                : s === f.$o.NOT_APPLICABLE
                                  ? (0, i.jsx)(m.D, {
                                        className: v.__invalid_subtitle,
                                        variant: "heading-xxl/normal",
                                        color: "always-white",
                                        children: G.intl.string(G.t.Q5ibtV),
                                    })
                                  : (0, i.jsx)(m.D, {
                                        className: v.__invalid_subtitle,
                                        variant: "heading-xxl/normal",
                                        color: "always-white",
                                        children: G.intl.string(G.t["Alcl/e"]),
                                    }),
                        ],
                    }),
                ],
            }),
        })
    );
}
