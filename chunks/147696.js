a.r(e), a.d(e, { default: () => A });
var s = a(627968),
    n = a(64700),
    l = a(735438),
    i = a.n(l),
    r = a(189213),
    c = a(17928),
    o = a(834730),
    d = a(276293),
    m = a(939249),
    x = a(658675),
    u = a(150934),
    h = a(702805),
    j = a(565645),
    g = a(148719),
    v = a(47167),
    N = a(713654),
    C = a(495273),
    k = a(7584),
    p = a(808728),
    y = a(375708),
    b = a(734157);
function f(t) {
    let { onClose: e, handleReviewPermissions: a, transitionState: l } = t;
    function i(t) {
        return (0, s.jsx)(o.E, { tag: "span", variant: "text-md/medium", color: "text-strong", children: t });
    }
    let c = n.useMemo(
        () => [
            { variant: "secondary", text: y.intl.string(y.t["ETE/oC"]), onClick: e },
            { variant: "primary", text: y.intl.string(y.t.bEnleq), onClick: a },
        ],
        [a, e],
    );
    return (0, s.jsx)(r.Modal, {
        title: y.intl.string(y.t.PJOCL6),
        actions: c,
        onClose: e,
        transitionState: l,
        children: (0, s.jsxs)("ul", {
            className: b.Dj,
            children: [
                (0, s.jsxs)("li", {
                    className: b.KN,
                    children: [
                        (0, s.jsx)("div", {
                            className: b.P0,
                            children: (0, s.jsx)(j.A, { emojiName: k.Ay.getByName("eyes")?.surrogates, alt: "" }),
                        }),
                        (0, s.jsx)(o.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: y.intl.format(y.t["8JzOBn"], { emphasisHook: i }),
                        }),
                    ],
                }),
                (0, s.jsxs)("li", {
                    className: b.KN,
                    children: [
                        (0, s.jsx)("div", {
                            className: b.P0,
                            children: (0, s.jsx)(j.A, {
                                emojiName: k.Ay.getByName("star_struck")?.surrogates,
                                alt: "",
                            }),
                        }),
                        (0, s.jsx)(o.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: y.intl.format(y.t.UcGDkt, { emphasisHook: i }),
                        }),
                    ],
                }),
                (0, s.jsxs)("li", {
                    className: b.KN,
                    children: [
                        (0, s.jsx)("div", {
                            className: b.P0,
                            children: (0, s.jsx)(j.A, { emojiName: k.Ay.getByName("books")?.surrogates, alt: "" }),
                        }),
                        (0, s.jsx)(o.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: y.intl.format(y.t.kALJ5q, { emphasisHook: i }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function E(t) {
    let { channel: e, selected: a, onChange: l } = t,
        i = (0, v.Ay)(e),
        r = (0, N.gU)(e) ?? d.N,
        c = n.useCallback(() => {
            l(e);
        }, [e, l]);
    return (0, s.jsxs)(m.D, {
        "aria-label": i ?? void 0,
        "aria-checked": a,
        className: b.qC,
        onClick: c,
        children: [
            (0, s.jsxs)("div", {
                className: b.yB,
                children: [
                    (0, s.jsx)(r, { className: b.p, size: "xs", color: "currentColor" }),
                    (0, s.jsx)(o.E, {
                        className: b.HA,
                        variant: "text-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: i,
                    }),
                ],
            }),
            (0, s.jsx)("div", { className: b.Mv, children: (0, s.jsx)(x.P, { checked: a }) }),
        ],
    });
}
function A(t) {
    let { transitionState: e, onClose: a, guildId: l, startingChannelId: d } = t,
        m = (0, c.yK)([p.Ay], () => {
            let t = p.Ay.getChannels(l);
            return (t[p.I6] ?? [])
                .concat(t[p.vM] ?? [])
                .filter((t) => (0, g.A)(t.channel))
                .map((t) => t.channel);
        }),
        [x, j] = n.useState(0),
        v = m.find((t) => t.id === d),
        [N, k] = n.useState(null != v ? [v] : []),
        A = N.length === m.length,
        P = n.useCallback(() => {
            j(1);
        }, [j]),
        S = n.useCallback(
            (t) => {
                k((e) => (e.includes(t) ? [...i().pull(e, t)] : [...e, t]));
            },
            [k],
        ),
        B = n.useCallback(() => {
            A ? k([]) : k(m);
        }, [A, m, k]),
        K = n.useCallback(() => {
            N.forEach((t) => {
                let e = (0, C.es)(t, t.accessPermissions, !0);
                (0, h.R$)(t.id, [e]), a();
            });
        }, [N, a]),
        M = n.useMemo(
            () => [
                { variant: "secondary", text: y.intl.string(y.t["ETE/oC"]), onClick: a },
                { variant: "primary", text: y.intl.string(y.t.PggHmu), onClick: K, disabled: 0 === N.length },
            ],
            [K, a, N.length],
        );
    return 0 === x
        ? (0, s.jsx)(f, { handleReviewPermissions: P, onClose: a, transitionState: e })
        : (0, s.jsxs)(r.Modal, {
              title: y.intl.string(y.t.y77PiT),
              subtitle: y.intl.string(y.t.ZSzBe5),
              actions: M,
              onClose: a,
              transitionState: e,
              input: (0, s.jsxs)("div", {
                  className: b.TY,
                  children: [
                      (0, s.jsx)(o.E, {
                          className: b.ko,
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: y.intl.format(y.t.rrYCq2, { count: m.length }),
                      }),
                      (0, s.jsx)("div", {
                          className: b.L7,
                          children: (0, s.jsx)(u.S, {
                              onChange: B,
                              checked: A,
                              label: y.intl.string(y.t.l4rqaz),
                              labelType: "secondary",
                          }),
                      }),
                  ],
              }),
              children: [
                  (0, s.jsx)("div", {
                      className: b.XK,
                      children: m.map((t) => (0, s.jsx)(E, { channel: t, selected: N.includes(t), onChange: S }, t.id)),
                  }),
                  (0, s.jsx)("div", {
                      className: b.PE,
                      children: (0, s.jsx)(o.E, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          children: y.intl.format(y.t["OP/pKr"], {
                              emphasisHook: function (t) {
                                  return (0, s.jsx)(o.E, {
                                      tag: "span",
                                      variant: "text-xs/medium",
                                      color: "interactive-text-active",
                                      children: t,
                                  });
                              },
                              brandHook: function (t) {
                                  return (0, s.jsx)(o.E, {
                                      tag: "span",
                                      variant: "text-xs/normal",
                                      color: "text-brand",
                                      children: t,
                                  });
                              },
                          }),
                      }),
                  }),
              ],
          });
}
