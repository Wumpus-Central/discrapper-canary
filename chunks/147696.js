(a.r(t), a.d(t, { default: () => A }));
var s = a(477900),
    n = a(582128),
    l = a(435558),
    i = a.n(l),
    r = a(17928),
    c = a(189213),
    o = a(834730),
    d = a(276293),
    m = a(939249),
    x = a(658675),
    u = a(150934),
    h = a(702805),
    j = a(788026),
    g = a(148719),
    v = a(47167),
    y = a(713654),
    N = a(495273),
    b = a(7584),
    C = a(808728),
    k = a(105292),
    p = a(499542);
function f(e) {
    let { onClose: t, handleReviewPermissions: a, transitionState: l } = e;
    function i(e) {
        return (0, s.jsx)(o.E, { tag: "span", variant: "body-md/medium", color: "text-strong", children: e });
    }
    let r = n.useMemo(
        () => [
            { variant: "secondary", text: k.intl.string(k.t["ETE/oC"]), onClick: t },
            { variant: "primary", text: k.intl.string(k.t.bEnleq), onClick: a },
        ],
        [a, t],
    );
    return (0, s.jsx)(c.a, {
        title: k.intl.string(k.t.PJOCL6),
        actions: r,
        onClose: t,
        transitionState: l,
        children: (0, s.jsxs)("ul", {
            className: p.Dj,
            children: [
                (0, s.jsxs)("li", {
                    className: p.KN,
                    children: [
                        (0, s.jsx)("div", {
                            className: p.P0,
                            children: (0, s.jsx)(j.A, { emojiName: b.Ay.getByName("eyes")?.surrogates, alt: "" }),
                        }),
                        (0, s.jsx)(o.E, {
                            variant: "body-md/normal",
                            color: "text-muted",
                            children: k.intl.format(k.t["8JzOBn"], { emphasisHook: i }),
                        }),
                    ],
                }),
                (0, s.jsxs)("li", {
                    className: p.KN,
                    children: [
                        (0, s.jsx)("div", {
                            className: p.P0,
                            children: (0, s.jsx)(j.A, {
                                emojiName: b.Ay.getByName("star_struck")?.surrogates,
                                alt: "",
                            }),
                        }),
                        (0, s.jsx)(o.E, {
                            variant: "body-md/normal",
                            color: "text-muted",
                            children: k.intl.format(k.t.UcGDkt, { emphasisHook: i }),
                        }),
                    ],
                }),
                (0, s.jsxs)("li", {
                    className: p.KN,
                    children: [
                        (0, s.jsx)("div", {
                            className: p.P0,
                            children: (0, s.jsx)(j.A, { emojiName: b.Ay.getByName("books")?.surrogates, alt: "" }),
                        }),
                        (0, s.jsx)(o.E, {
                            variant: "body-md/normal",
                            color: "text-muted",
                            children: k.intl.format(k.t.kALJ5q, { emphasisHook: i }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function E(e) {
    let { channel: t, selected: a, onChange: l } = e,
        i = (0, v.Ay)(t),
        r = (0, y.gU)(t) ?? d.N,
        c = n.useCallback(() => {
            l(t);
        }, [t, l]);
    return (0, s.jsxs)(m.D, {
        "aria-label": i ?? void 0,
        "aria-checked": a,
        className: p.qC,
        onClick: c,
        children: [
            (0, s.jsxs)("div", {
                className: p.yB,
                children: [
                    (0, s.jsx)(r, { className: p.p, size: "xs", color: "currentColor" }),
                    (0, s.jsx)(o.E, {
                        className: p.HA,
                        variant: "body-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: i,
                    }),
                ],
            }),
            (0, s.jsx)("div", { className: p.Mv, children: (0, s.jsx)(x.P, { checked: a }) }),
        ],
    });
}
function A(e) {
    let { transitionState: t, onClose: a, guildId: l, startingChannelId: d } = e,
        m = (0, r.yK)([C.Ay], () => {
            let e = C.Ay.getChannels(l);
            return (e[C.I6] ?? [])
                .concat(e[C.vM] ?? [])
                .filter((e) => (0, g.A)(e.channel))
                .map((e) => e.channel);
        }),
        [x, j] = n.useState(0),
        v = m.find((e) => e.id === d),
        [y, b] = n.useState(null != v ? [v] : []),
        A = y.length === m.length,
        P = n.useCallback(() => {
            j(1);
        }, [j]),
        S = n.useCallback(
            (e) => {
                b((t) => (t.includes(e) ? [...i().pull(t, e)] : [...t, e]));
            },
            [b],
        ),
        B = n.useCallback(() => {
            A ? b([]) : b(m);
        }, [A, m, b]),
        K = n.useCallback(() => {
            y.forEach((e) => {
                let t = (0, N.es)(e, e.accessPermissions, !0);
                ((0, h.R$)(e.id, [t]), a());
            });
        }, [y, a]),
        q = n.useMemo(
            () => [
                { variant: "secondary", text: k.intl.string(k.t["ETE/oC"]), onClick: a },
                { variant: "primary", text: k.intl.string(k.t.PggHmu), onClick: K, disabled: 0 === y.length },
            ],
            [K, a, y.length],
        );
    return 0 === x
        ? (0, s.jsx)(f, { handleReviewPermissions: P, onClose: a, transitionState: t })
        : (0, s.jsxs)(c.a, {
              title: k.intl.string(k.t.y77PiT),
              subtitle: k.intl.string(k.t.ZSzBe5),
              actions: q,
              onClose: a,
              transitionState: t,
              input: (0, s.jsxs)("div", {
                  className: p.TY,
                  children: [
                      (0, s.jsx)(o.E, {
                          className: p.ko,
                          variant: "body-xs/semibold",
                          color: "text-muted",
                          children: k.intl.format(k.t.rrYCq2, { count: m.length }),
                      }),
                      (0, s.jsx)("div", {
                          className: p.L7,
                          children: (0, s.jsx)(u.S, {
                              onChange: B,
                              checked: A,
                              label: k.intl.string(k.t.l4rqaz),
                              labelType: "secondary",
                          }),
                      }),
                  ],
              }),
              children: [
                  (0, s.jsx)("div", {
                      className: p.XK,
                      children: m.map((e) => (0, s.jsx)(E, { channel: e, selected: y.includes(e), onChange: S }, e.id)),
                  }),
                  (0, s.jsx)("div", {
                      className: p.PE,
                      children: (0, s.jsx)(o.E, {
                          variant: "body-xs/normal",
                          color: "text-muted",
                          children: k.intl.format(k.t["OP/pKr"], {
                              emphasisHook: function (e) {
                                  return (0, s.jsx)(o.E, {
                                      tag: "span",
                                      variant: "body-xs/medium",
                                      color: "interactive-text-active",
                                      children: e,
                                  });
                              },
                              brandHook: function (e) {
                                  return (0, s.jsx)(o.E, {
                                      tag: "span",
                                      variant: "body-xs/normal",
                                      color: "text-brand",
                                      children: e,
                                  });
                              },
                          }),
                      }),
                  }),
              ],
          });
}
