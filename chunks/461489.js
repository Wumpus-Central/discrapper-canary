n.d(t, { A: () => P }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(735438),
    a = n.n(l),
    r = n(80703),
    o = n(311907),
    d = n(331322),
    u = n(834730),
    c = n(123292),
    g = n(691540),
    m = n(857250),
    _ = n(97483),
    A = n(892547),
    h = n(534514),
    p = n(890856),
    x = n(939249),
    E = n(173936),
    T = n(404778),
    S = n(100392),
    f = n(102609),
    b = n(271478),
    C = n(49463),
    v = n(386976),
    N = n(257433),
    I = n(32523),
    y = n(961350),
    j = n(71393),
    O = n(957565),
    R = n(222735),
    L = n(688151),
    D = n(491210);
function P() {
    let { experiments: e, overridesInfo: t } = (0, v.op)(),
        { experiments: n, overridesInfo: l } = (0, I.hI)(),
        a = s.useMemo(() => ({ ...n, ...e }), [n, e]),
        p = s.useMemo(() => ({ ...l, ...t }), [l, t]),
        x = (0, o.bG)([y.default], () => {
            let e = y.default.getInstallationForTracking();
            return null == e ? null : (0, r.v)(e);
        }),
        [E, T] = s.useState(""),
        S = (0, R.oC)((0, R.R3)((0, R.Fm)(a), p), E);
    return (0, i.jsxs)("div", {
        "data-mtctest-ignore": "true",
        children: [
            null != x &&
                (0, i.jsxs)(d.B, {
                    style: { gap: 8, marginBottom: 16 },
                    children: [
                        (0, i.jsxs)(u.E, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: ["Installation ID: ", x],
                        }),
                        O.p5 &&
                            (0, i.jsx)(c.Q, {
                                size: "sm",
                                onClick: () => {
                                    (0, O.C)(x, () => {
                                        (0, g.P0)((0, m.o)("Installation ID copied!", _.Ck.SUCCESS));
                                    });
                                },
                                text: "Copy",
                            }),
                    ],
                }),
            (0, i.jsx)(A.I, { placeholder: "Search experiments", query: E, onChange: T, onClear: () => T("") }),
            S.length > 0
                ? S.map((e) => {
                      let t = "guild" === e.experiment.kind ? M : G;
                      return (0, i.jsx)(
                          t,
                          {
                              experiment: e.experiment,
                              experimentId: e.id,
                              overrideInfo: p[e.id],
                              defaultOpen: null != p[e.id],
                          },
                          e.id,
                      );
                  })
                : (0, i.jsx)("div", {
                      className: D.p$,
                      children: (0, i.jsx)(h.D, { variant: "heading-md/semibold", children: "No Experiments Found" }),
                  }),
        ],
    });
}
function G(e) {
    let { experiment: t, experimentId: n, overrideInfo: l, defaultOpen: r } = e,
        [m, A] = s.useState(r),
        [h, v] = s.useState(!1),
        I = s.useCallback(() => {
            A((e) => !e);
        }, []),
        j = (0, o.bG)([y.default], () => y.default.getId()),
        R = (0, N.iN)(t, j),
        P = (0, N.Fm)(t, j),
        G = (0, o.yK)([C.A], () =>
            a()
                .sortBy(C.A.getRecentExposures(L.Vh.USER, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${new Date(n).toLocaleString()} (${t})`;
                }),
        ),
        M = s.useCallback(
            (e) => {
                (0, O.C)((0, S.yA)(n), () => {
                    (0, g.P0)({ id: "experiment-link-copied", message: "Copied experiment link", type: _.Ck.SUCCESS }),
                        e.preventDefault(),
                        e.stopPropagation();
                });
            },
            [n],
        ),
        U = (0, i.jsx)(p.s, {
            "aria-label": "Toggle visibility",
            onClick: I,
            children: (0, i.jsxs)(u.E, {
                variant: "text-md/medium",
                className: D.DD,
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsxs)(d.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                children: [
                                    t.title,
                                    " ",
                                    O.p5 && (0, i.jsx)(x.D, { onClick: M, children: (0, i.jsx)(E.q, { size: "xs" }) }),
                                ],
                            }),
                            (0, i.jsx)(u.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, i.jsx)("span", { className: D.km, children: "User" }),
                ],
            }),
        });
    if (!m) return (0, i.jsx)("div", { className: D.Os, children: U });
    let k = "";
    return (
        (k =
            t.system === f.l5.LEGACY
                ? `Currently assigned to bucket ${R ?? L.RE.NOT_ELIGIBLE}`
                : null != R
                  ? `Currently assigned to variant ${R}`
                  : "Currently unassigned"),
        (0, i.jsxs)("div", {
            className: D.Os,
            children: [
                U,
                (0, i.jsx)("div", {
                    children: (0, i.jsx)(b.g, {
                        label: t.system === f.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: k,
                        experiment: t,
                        experimentId: n,
                        overrideInfo: l,
                    }),
                }),
                (0, i.jsx)("div", {
                    className: D.h_,
                    children:
                        null == P
                            ? (0, i.jsx)(u.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  children:
                                      'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.',
                              })
                            : null,
                }),
                h
                    ? (0, i.jsxs)("div", {
                          children: [
                              (0, i.jsx)(u.E, {
                                  variant: "text-lg/medium",
                                  className: D.id,
                                  children: "Server Descriptor",
                              }),
                              (0, i.jsx)(u.E, {
                                  variant: "code",
                                  className: D.AS,
                                  children: null == P ? "None" : JSON.stringify(P, void 0, 2),
                              }),
                              (0, i.jsx)(u.E, {
                                  variant: "text-lg/medium",
                                  className: D.id,
                                  children: "Override Descriptor",
                              }),
                              (0, i.jsx)(u.E, {
                                  variant: "code",
                                  className: D.AS,
                                  children:
                                      l?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(l.originalDescriptor, void 0, 2),
                              }),
                              (0, i.jsx)(u.E, {
                                  variant: "text-lg/medium",
                                  className: D.id,
                                  children: "Recent Exposures",
                              }),
                              (0, i.jsx)(u.E, {
                                  variant: "code",
                                  className: D.AS,
                                  children: 0 === G.length ? "None" : G.join("\n"),
                              }),
                          ],
                      })
                    : (0, i.jsx)("div", {
                          className: D.id,
                          children: (0, i.jsx)(c.Q, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => v(!0),
                          }),
                      }),
                (0, i.jsx)(T.c, { className: D.yF }),
            ],
        })
    );
}
function M(e) {
    let { experiment: t, experimentId: n, overrideInfo: l } = e,
        [r, d] = s.useState(null != l),
        [g, m] = s.useState(!1),
        _ = s.useCallback(() => {
            d((e) => !e);
        }, []),
        A = (0, o.bG)([C.A], () => C.A.getLoadedGuildExperiment(n)),
        h = (0, o.yK)([C.A], () =>
            a()
                .sortBy(C.A.getRecentExposures(L.Vh.GUILD, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${new Date(n).toLocaleString()} (${t})`;
                }),
        ),
        [p, E] = (0, o.yK)([j.A, C.A], () => {
            let e = a().sortBy(j.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                t = {},
                i = [];
            for (let s of e) {
                let e = C.A.getGuildExperimentDescriptor(n, s.id),
                    l = e?.bucket ?? L.RE.NOT_ELIGIBLE;
                l in t || (t[l] = 0), t[l]++, i.push(`${s.name}: ${l}`);
            }
            let s = a()(t)
                .keys()
                .map(Number)
                .sort()
                .map((e) => `${t[e]} guilds in bucket ${e}`)
                .join(", ");
            return [i.join("\n"), s];
        }),
        S = (0, i.jsx)(x.D, {
            onClick: _,
            children: (0, i.jsxs)(u.E, {
                variant: "text-md/medium",
                className: D.DD,
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)("span", { children: t.title }),
                            (0, i.jsx)(u.E, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, i.jsx)("span", { className: D.km, children: "Guild" }),
                ],
            }),
        });
    return r
        ? (0, i.jsxs)("div", {
              className: D.Os,
              children: [
                  S,
                  (0, i.jsx)(b.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${E}`,
                      experiment: t,
                      experimentId: n,
                      overrideInfo: l,
                  }),
                  (0, i.jsx)("div", {
                      className: D.h_,
                      children:
                          null == A
                              ? (0, i.jsx)(u.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children:
                                        'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.',
                                })
                              : null,
                  }),
                  g
                      ? (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(u.E, {
                                    variant: "text-lg/medium",
                                    className: D.id,
                                    children: "Guild Assignments",
                                }),
                                (0, i.jsx)(u.E, { variant: "code", className: D.AS, children: p }),
                                (0, i.jsx)(u.E, {
                                    variant: "text-lg/medium",
                                    className: D.id,
                                    children: "Server Descriptor",
                                }),
                                (0, i.jsx)(u.E, {
                                    variant: "code",
                                    className: D.AS,
                                    children: null == A ? "None" : JSON.stringify(A, void 0, 2),
                                }),
                                (0, i.jsx)(u.E, {
                                    variant: "text-lg/medium",
                                    className: D.id,
                                    children: "Override Descriptor",
                                }),
                                (0, i.jsx)(u.E, {
                                    variant: "code",
                                    className: D.AS,
                                    children:
                                        l?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(l.originalDescriptor, void 0, 2),
                                }),
                                (0, i.jsx)(u.E, {
                                    variant: "text-lg/medium",
                                    className: D.id,
                                    children: "Recent Exposures",
                                }),
                                (0, i.jsx)(u.E, {
                                    variant: "code",
                                    className: D.AS,
                                    children: 0 === h.length ? "None" : h.join("\n"),
                                }),
                            ],
                        })
                      : (0, i.jsx)("div", {
                            className: D.id,
                            children: (0, i.jsx)(c.Q, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => m(!0),
                            }),
                        }),
                  (0, i.jsx)(T.c, { className: D.yF }),
              ],
          })
        : (0, i.jsx)("div", { className: D.Os, children: S });
}
