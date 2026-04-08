n.d(t, { Ay: () => b, Mm: () => v, RA: () => C, j5: () => L });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(883885),
    d = n.n(a),
    o = n(311907),
    c = n(397927),
    u = n(964486),
    m = n(775602),
    N = n(58149),
    h = n(260509),
    I = n(954571),
    g = n(486020),
    A = n(515718),
    E = n(591552),
    S = n(713125),
    x = n(71876),
    _ = n(739408),
    T = n(113473),
    f = n(694268),
    p = n(896018),
    D = n(652215),
    O = n(985018),
    G = n(350506);
function j(e) {
    let t = (0, o.bG)([m.A], () => m.A.useReducedMotion),
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
function v() {
    let e = j(T);
    return (0, i.jsx)("div", { className: r()(G.vV, G.KP), children: (0, i.jsx)("div", { ref: e, className: G.yi }) });
}
function C() {
    let e = j(p);
    return (0, i.jsx)("div", { className: r()(G.M8, G.KP), children: (0, i.jsx)("div", { ref: e, className: G.D8 }) });
}
function L(e) {
    let { guild: t, mainIslandClassName: n, balloonDogClassName: s } = e,
        a = (0, o.bG)([m.A], () => m.A.useReducedMotion),
        c = l.useRef(null),
        u = j(_),
        N = g.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 96 });
    return (
        l.useEffect(() => {
            let e;
            return (
                null != c.current && null != N
                    ? (0, A.S4)(N).then((t) => {
                          let n = (0, x.A)(JSON.parse(JSON.stringify(f)), N, t[0]);
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
                          animationData: JSON.parse(JSON.stringify(f)),
                      })),
                () => {
                    e?.destroy();
                }
            );
        }, [N, c, a]),
        (0, i.jsxs)("div", {
            className: r()(G.tu, G.fV),
            children: [
                (0, i.jsx)("div", { className: r()(G.Sb, s), ref: u }),
                (0, i.jsx)("div", { className: r()(G.$h, n), ref: c }),
            ],
        })
    );
}
function b(e) {
    let { guild: t, onStart: n, onboardingStatus: s, headerId: r, disableTracking: a } = e,
        d = (0, o.bG)([E.A], () => E.A.isLoading()),
        m = l.useRef(!1);
    l.useEffect(() => {
        if (!a)
            return (
                I.default.track(D.HAw.GUILD_ONBOARDING_STEP_VIEWED, { ...(0, N.H$)(t.id), step: -1, required: !0 }),
                () => {
                    I.default.track(D.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
                        ...(0, N.H$)(t.id),
                        step: -1,
                        skipped: !m.current,
                        is_final_step: !1,
                        in_onboarding: !0,
                    });
                }
            );
    }, [t.id, m, a]);
    let g = l.useMemo(() => (0, h.Iv)(t, 135, !1, !0), [t]);
    return (
        (0, u.Ay)(() => {
            setTimeout(() => {
                (m.current = !0), n();
            }, 3e3);
        }),
        (0, i.jsx)("div", {
            className: G.PY,
            children: (0, i.jsxs)("div", {
                className: G.Fo,
                children: [
                    (0, i.jsx)("div", { children: (0, i.jsx)("img", { className: G.D3, src: g, alt: "" }) }),
                    (0, i.jsxs)("div", {
                        className: G.rD,
                        children: [
                            (0, i.jsx)(c.Text, {
                                className: G.CH,
                                variant: "text-lg/normal",
                                color: "always-white",
                                id: r,
                                children: O.intl.format(O.t["j59F/c"], { guildName: t?.name }),
                            }),
                            d
                                ? (0, i.jsx)(c.y$y, { className: G.__invalid_subtitle })
                                : s === S.$o.NOT_APPLICABLE
                                  ? (0, i.jsx)(c.Heading, {
                                        className: G.__invalid_subtitle,
                                        variant: "heading-xxl/normal",
                                        color: "always-white",
                                        children: O.intl.string(O.t.Q5ibtV),
                                    })
                                  : (0, i.jsx)(c.Heading, {
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
