a.r(t), a.d(t, { default: () => p });
var l = a(627968),
    s = a(64700),
    n = a(735438),
    i = a.n(n),
    r = a(158954),
    c = a(311907),
    o = a(397927),
    d = a(702805),
    x = a(565645),
    m = a(148719),
    h = a(713654),
    u = a(495273),
    j = a(7584),
    C = a(808728),
    v = a(985018),
    g = a(533578);
function N(e) {
    let { onClose: t, handleReviewPermissions: a, transitionState: n } = e,
        i = (e) => (0, l.jsx)(o.Text, { tag: "span", variant: "text-md/medium", color: "text-strong", children: e }),
        c = s.useMemo(
            () => [
                { variant: "secondary", text: v.intl.string(v.t["ETE/oC"]), onClick: t },
                { variant: "primary", text: v.intl.string(v.t.bEnleq), onClick: a },
            ],
            [a, t],
        );
    return (0, l.jsx)(r.Modal, {
        title: v.intl.string(v.t.PJOCL6),
        actions: c,
        onClose: t,
        transitionState: n,
        children: (0, l.jsxs)("ul", {
            className: g.Dj,
            children: [
                (0, l.jsxs)("li", {
                    className: g.KN,
                    children: [
                        (0, l.jsx)("div", {
                            className: g.P0,
                            children: (0, l.jsx)(x.A, { emojiName: j.Ay.getByName("eyes")?.surrogates }),
                        }),
                        (0, l.jsx)(o.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: v.intl.format(v.t["8JzOBn"], { emphasisHook: i }),
                        }),
                    ],
                }),
                (0, l.jsxs)("li", {
                    className: g.KN,
                    children: [
                        (0, l.jsx)("div", {
                            className: g.P0,
                            children: (0, l.jsx)(x.A, { emojiName: j.Ay.getByName("star_struck")?.surrogates }),
                        }),
                        (0, l.jsx)(o.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: v.intl.format(v.t.UcGDkt, { emphasisHook: i }),
                        }),
                    ],
                }),
                (0, l.jsxs)("li", {
                    className: g.KN,
                    children: [
                        (0, l.jsx)("div", {
                            className: g.P0,
                            children: (0, l.jsx)(x.A, { emojiName: j.Ay.getByName("books")?.surrogates }),
                        }),
                        (0, l.jsx)(o.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: v.intl.format(v.t.kALJ5q, { emphasisHook: i }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function f(e) {
    let { channel: t, selected: a, onChange: n } = e,
        i = (0, h.gU)(t) ?? o.N$i,
        r = s.useCallback(() => {
            n(t);
        }, [t, n]);
    return (0, l.jsxs)(o.DUT, {
        "aria-label": t.name,
        "aria-checked": a,
        className: g.qC,
        onClick: r,
        children: [
            (0, l.jsxs)("div", {
                className: g.yB,
                children: [
                    (0, l.jsx)(i, { className: g.p, size: "xs", color: "currentColor" }),
                    (0, l.jsx)(o.Text, {
                        className: g.HA,
                        variant: "text-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: t.name,
                    }),
                ],
            }),
            (0, l.jsx)("div", { className: g.Mv, children: (0, l.jsx)(o.P7L, { checked: a }) }),
        ],
    });
}
function p(e) {
    let { transitionState: t, onClose: a, guildId: n, startingChannelId: x } = e,
        h = (0, c.yK)([C.Ay], () => {
            let e = C.Ay.getChannels(n);
            return (e[C.I6] ?? [])
                .concat(e[C.vM] ?? [])
                .filter((e) => (0, m.A)(e.channel))
                .map((e) => e.channel);
        }),
        [j, p] = s.useState(0),
        k = h.find((e) => e.id === x),
        [b, y] = s.useState(null != k ? [k] : []),
        T = b.length === h.length,
        _ = s.useCallback(() => {
            p(1);
        }, [p]),
        A = s.useCallback(
            (e) => {
                y((t) => (t.includes(e) ? [...i().pull(t, e)] : [...t, e]));
            },
            [y],
        ),
        P = s.useCallback(() => {
            T ? y([]) : y(h);
        }, [T, h, y]),
        E = s.useCallback(() => {
            b.forEach((e) => {
                let t = (0, u.es)(e, e.accessPermissions, !0);
                (0, d.R$)(e.id, [t]), a();
            });
        }, [b, a]),
        B = s.useMemo(
            () => [
                { variant: "secondary", text: v.intl.string(v.t["ETE/oC"]), onClick: a },
                { variant: "primary", text: v.intl.string(v.t.PggHmu), onClick: E, disabled: 0 === b.length },
            ],
            [E, a, b.length],
        );
    return 0 === j
        ? (0, l.jsx)(N, { handleReviewPermissions: _, onClose: a, transitionState: t })
        : (0, l.jsxs)(r.Modal, {
              title: v.intl.string(v.t.y77PiT),
              subtitle: v.intl.string(v.t.ZSzBe5),
              actions: B,
              onClose: a,
              transitionState: t,
              input: (0, l.jsxs)("div", {
                  className: g.TY,
                  children: [
                      (0, l.jsx)(o.Text, {
                          className: g.ko,
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: v.intl.format(v.t.rrYCq2, { count: h.length }),
                      }),
                      (0, l.jsx)("div", {
                          className: g.L7,
                          children: (0, l.jsx)(o.Checkbox, {
                              onChange: P,
                              checked: T,
                              label: v.intl.string(v.t.l4rqaz),
                              labelType: "secondary",
                          }),
                      }),
                  ],
              }),
              children: [
                  (0, l.jsx)("div", {
                      className: g.XK,
                      children: h.map((e) => (0, l.jsx)(f, { channel: e, selected: b.includes(e), onChange: A }, e.id)),
                  }),
                  (0, l.jsx)("div", {
                      className: g.PE,
                      children: (0, l.jsx)(o.Text, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          children: v.intl.format(v.t["OP/pKr"], {
                              emphasisHook: (e) =>
                                  (0, l.jsx)(o.Text, {
                                      tag: "span",
                                      variant: "text-xs/medium",
                                      color: "interactive-text-active",
                                      children: e,
                                  }),
                              brandHook: (e) =>
                                  (0, l.jsx)(o.Text, {
                                      tag: "span",
                                      variant: "text-xs/normal",
                                      color: "text-brand",
                                      children: e,
                                  }),
                          }),
                      }),
                  }),
              ],
          });
}
