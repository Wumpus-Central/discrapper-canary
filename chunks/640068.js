n.d(t, { A: () => I }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    d = n(100392),
    c = n(102609),
    u = n(271478),
    h = n(49463),
    A = n(386976),
    g = n(257433),
    m = n(32523),
    p = n(961350),
    _ = n(71393),
    x = n(957565),
    f = n(222735),
    E = n(688151),
    C = n(612422);
function I() {
    let { experiments: e, overridesInfo: t } = (0, A.op)(),
        { experiments: n, overridesInfo: s } = (0, m.hI)(),
        a = l.useMemo(() => ({ ...n, ...e }), [n, e]),
        r = l.useMemo(() => ({ ...s, ...t }), [s, t]),
        [d, c] = l.useState(""),
        u = (0, f.oC)((0, f.R3)((0, f.Fm)(a), r), d);
    return (0, i.jsxs)("div", {
        "data-mtctest-ignore": "true",
        children: [
            (0, i.jsx)(o.IWV, { placeholder: "Search experiments", query: d, onChange: c, onClear: () => c("") }),
            u.length > 0
                ? u.map((e) => {
                      let t = "guild" === e.experiment.kind ? b : S;
                      return (0, i.jsx)(
                          t,
                          {
                              experiment: e.experiment,
                              experimentId: e.id,
                              overrideInfo: r[e.id],
                              defaultOpen: null != r[e.id],
                          },
                          e.id,
                      );
                  })
                : (0, i.jsx)("div", {
                      className: C.p$,
                      children: (0, i.jsx)(o.Heading, {
                          variant: "heading-md/semibold",
                          children: "No Experiments Found",
                      }),
                  }),
        ],
    });
}
function S(e) {
    let { experiment: t, experimentId: n, overrideInfo: s, defaultOpen: A } = e,
        [m, _] = l.useState(A),
        [f, I] = l.useState(!1),
        S = l.useCallback(() => {
            _((e) => !e);
        }, []),
        b = (0, r.bG)([p.default], () => p.default.getId()),
        N = (0, g.iN)(t, b),
        T = (0, g.Fm)(t, b),
        j = (0, r.yK)([h.A], () =>
            a()
                .sortBy(h.A.getRecentExposures(E.Vh.USER, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${new Date(n).toLocaleString()} (${t})`;
                }),
        ),
        v = l.useCallback(
            (e) => {
                (0, x.C)((0, d.yA)(n), () => {
                    (0, o.showToast)({
                        id: "experiment-link-copied",
                        message: "Copied experiment link",
                        type: o.ToastType.SUCCESS,
                    }),
                        e.preventDefault(),
                        e.stopPropagation();
                });
            },
            [n],
        ),
        y = (0, i.jsx)(o.sqX, {
            "aria-label": "Toggle visibility",
            onClick: S,
            children: (0, i.jsxs)(o.Text, {
                variant: "text-md/medium",
                className: C.DD,
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsxs)(o.BJc, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                children: [
                                    t.title,
                                    " ",
                                    x.p5 &&
                                        (0, i.jsx)(o.DUT, { onClick: v, children: (0, i.jsx)(o.qYV, { size: "xs" }) }),
                                ],
                            }),
                            (0, i.jsx)(o.Text, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, i.jsx)("span", { className: C.km, children: "User" }),
                ],
            }),
        });
    if (!m) return (0, i.jsx)("div", { className: C.Os, children: y });
    let R = "";
    return (
        (R =
            t.system === c.l5.LEGACY
                ? `Currently assigned to bucket ${N ?? E.RE.NOT_ELIGIBLE}`
                : null != N
                  ? `Currently assigned to variant ${N}`
                  : "Currently unassigned"),
        (0, i.jsxs)("div", {
            className: C.Os,
            children: [
                y,
                (0, i.jsx)("div", {
                    children: (0, i.jsx)(u.g, {
                        label: t.system === c.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: R,
                        experiment: t,
                        experimentId: n,
                        overrideInfo: s,
                    }),
                }),
                (0, i.jsx)("div", {
                    className: C.h_,
                    children:
                        null == T
                            ? (0, i.jsx)(o.Text, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  children:
                                      'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.',
                              })
                            : null,
                }),
                f
                    ? (0, i.jsxs)("div", {
                          children: [
                              (0, i.jsx)(o.Text, {
                                  variant: "text-lg/medium",
                                  className: C.id,
                                  children: "Server Descriptor",
                              }),
                              (0, i.jsx)(o.Text, {
                                  variant: "code",
                                  className: C.AS,
                                  children: null == T ? "None" : JSON.stringify(T, void 0, 2),
                              }),
                              (0, i.jsx)(o.Text, {
                                  variant: "text-lg/medium",
                                  className: C.id,
                                  children: "Override Descriptor",
                              }),
                              (0, i.jsx)(o.Text, {
                                  variant: "code",
                                  className: C.AS,
                                  children:
                                      s?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(s.originalDescriptor, void 0, 2),
                              }),
                              (0, i.jsx)(o.Text, {
                                  variant: "text-lg/medium",
                                  className: C.id,
                                  children: "Recent Exposures",
                              }),
                              (0, i.jsx)(o.Text, {
                                  variant: "code",
                                  className: C.AS,
                                  children: 0 === j.length ? "None" : j.join("\n"),
                              }),
                          ],
                      })
                    : (0, i.jsx)("div", {
                          className: C.id,
                          children: (0, i.jsx)(o.QWc, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => I(!0),
                          }),
                      }),
                (0, i.jsx)(o.cGx, { className: C.yF }),
            ],
        })
    );
}
function b(e) {
    let { experiment: t, experimentId: n, overrideInfo: s } = e,
        [d, c] = l.useState(null != s),
        [A, g] = l.useState(!1),
        m = l.useCallback(() => {
            c((e) => !e);
        }, []),
        p = (0, r.bG)([h.A], () => h.A.getLoadedGuildExperiment(n)),
        x = (0, r.yK)([h.A], () =>
            a()
                .sortBy(h.A.getRecentExposures(E.Vh.GUILD, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${new Date(n).toLocaleString()} (${t})`;
                }),
        ),
        [f, I] = (0, r.yK)([_.A, h.A], () => {
            let e = a().sortBy(_.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                t = {},
                i = [];
            for (let l of e) {
                let e = h.A.getGuildExperimentDescriptor(n, l.id),
                    s = e?.bucket ?? E.RE.NOT_ELIGIBLE;
                s in t || (t[s] = 0), t[s]++, i.push(`${l.name}: ${s}`);
            }
            let l = a()(t)
                .keys()
                .map(Number)
                .sort()
                .map((e) => `${t[e]} guilds in bucket ${e}`)
                .join(", ");
            return [i.join("\n"), l];
        }),
        S = (0, i.jsx)(o.DUT, {
            onClick: m,
            children: (0, i.jsxs)(o.Text, {
                variant: "text-md/medium",
                className: C.DD,
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)("span", { children: t.title }),
                            (0, i.jsx)(o.Text, { color: "text-muted", variant: "text-sm/normal", children: n }),
                        ],
                    }),
                    (0, i.jsx)("span", { className: C.km, children: "Guild" }),
                ],
            }),
        });
    return d
        ? (0, i.jsxs)("div", {
              className: C.Os,
              children: [
                  S,
                  (0, i.jsx)(u.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${I}`,
                      experiment: t,
                      experimentId: n,
                      overrideInfo: s,
                  }),
                  (0, i.jsx)("div", {
                      className: C.h_,
                      children:
                          null == p
                              ? (0, i.jsx)(o.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children:
                                        'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.',
                                })
                              : null,
                  }),
                  A
                      ? (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(o.Text, {
                                    variant: "text-lg/medium",
                                    className: C.id,
                                    children: "Guild Assignments",
                                }),
                                (0, i.jsx)(o.Text, { variant: "code", className: C.AS, children: f }),
                                (0, i.jsx)(o.Text, {
                                    variant: "text-lg/medium",
                                    className: C.id,
                                    children: "Server Descriptor",
                                }),
                                (0, i.jsx)(o.Text, {
                                    variant: "code",
                                    className: C.AS,
                                    children: null == p ? "None" : JSON.stringify(p, void 0, 2),
                                }),
                                (0, i.jsx)(o.Text, {
                                    variant: "text-lg/medium",
                                    className: C.id,
                                    children: "Override Descriptor",
                                }),
                                (0, i.jsx)(o.Text, {
                                    variant: "code",
                                    className: C.AS,
                                    children:
                                        s?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(s.originalDescriptor, void 0, 2),
                                }),
                                (0, i.jsx)(o.Text, {
                                    variant: "text-lg/medium",
                                    className: C.id,
                                    children: "Recent Exposures",
                                }),
                                (0, i.jsx)(o.Text, {
                                    variant: "code",
                                    className: C.AS,
                                    children: 0 === x.length ? "None" : x.join("\n"),
                                }),
                            ],
                        })
                      : (0, i.jsx)("div", {
                            className: C.id,
                            children: (0, i.jsx)(o.QWc, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => g(!0),
                            }),
                        }),
                  (0, i.jsx)(o.cGx, { className: C.yF }),
              ],
          })
        : (0, i.jsx)("div", { className: C.Os, children: S });
}
