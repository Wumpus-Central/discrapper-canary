n.d(t, { Z: () => S }), n(388685), n(953529), n(49124), n(539854), n(642613);
var r = n(951288),
    i = n(647438),
    a = n(392711),
    o = n.n(a),
    s = n(442837),
    l = n(755721),
    c = n(481060),
    u = n(887580),
    d = n(492435),
    f = n(389494),
    _ = n(353926),
    p = n(667344),
    h = n(453032),
    m = n(493075),
    g = n(314897),
    E = n(430824),
    b = n(572004),
    y = n(878209),
    O = n(987338),
    v = n(758746);
function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                I(e, t, n[t]);
            });
    }
    return e;
}
function S() {
    let { experiments: e, overridesInfo: t } = (0, p.Q)(),
        { experiments: n, overridesInfo: a } = (0, m.s)(),
        o = i.useMemo(() => T({}, n, e), [n, e]),
        s = i.useMemo(() => T({}, a, t), [a, t]),
        [l, u] = i.useState(""),
        d = (0, y.Ro)((0, y.Tc)((0, y.Cg)(o), s), l);
    return (0, r.jsxs)(c.hjN, {
        tag: c.RB0.H1,
        title: "Experiments",
        children: [
            (0, r.jsx)(c.E1j, {
                query: l,
                onChange: u,
                onClear: () => u(""),
            }),
            d.length > 0
                ? d.map((e) => {
                      let t = "guild" === e.experiment.kind ? C : A;
                      return (0, r.jsx)(
                          t,
                          {
                              experiment: e.experiment,
                              experimentId: e.id,
                              overrideInfo: s[e.id],
                              defaultOpen: null != s[e.id],
                          },
                          e.id,
                      );
                  })
                : (0, r.jsx)("div", {
                      className: v.emptyState,
                      children: (0, r.jsx)(c.X6q, {
                          variant: "heading-md/semibold",
                          children: "No Experiments Found",
                      }),
                  }),
        ],
    });
}
function A(e) {
    let { experiment: t, experimentId: n, overrideInfo: a, defaultOpen: p } = e,
        [m, E] = i.useState(p),
        [y, I] = i.useState(!1),
        T = i.useCallback(() => {
            E((e) => !e);
        }, []),
        S = (0, s.e7)([g.default], () => g.default.getId()),
        A = (0, h.q)(t, S),
        C = (0, h.a)(t, S),
        N = (0, s.Wu)([_.Z], () =>
            o()
                .sortBy(_.Z.getRecentExposures(O.xY.USER, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return "".concat(new Date(n).toLocaleString(), " (").concat(t, ")");
                }),
        ),
        R = i.useCallback(
            (e) => {
                (0, b.JG)((0, u.sZ)(n), () => {
                    (0, c.showToast)({
                        id: "experiment-link-copied",
                        message: "Copied experiment link",
                        type: c.ToastType.SUCCESS,
                    }),
                        e.preventDefault(),
                        e.stopPropagation();
                });
            },
            [n],
        ),
        P = (0, r.jsx)(c.kL8, {
            "aria-label": "Toggle visibility",
            onClick: T,
            children: (0, r.jsxs)(c.vwX, {
                tag: c.RB0.H3,
                className: v.title,
                children: [
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)(c.Kqy, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                children: [
                                    t.title,
                                    " ",
                                    b.wS &&
                                        (0, r.jsx)(c.P3F, {
                                            onClick: R,
                                            children: (0, r.jsx)(c.xPt, { size: "xs" }),
                                        }),
                                ],
                            }),
                            (0, r.jsx)(c.Text, {
                                color: "text-muted",
                                variant: "text-sm/normal",
                                children: n,
                            }),
                        ],
                    }),
                    (0, r.jsx)("span", {
                        className: v.experimentDate,
                        children: "User",
                    }),
                ],
            }),
        });
    if (!m)
        return (0, r.jsx)("div", {
            className: v.group,
            children: (0, r.jsx)(c.hjN, { children: P }),
        });
    let w = "";
    return (
        (w =
            t.system === d.I.LEGACY
                ? "Currently assigned to bucket ".concat(null != A ? A : O.NZ.NOT_ELIGIBLE)
                : null != A
                  ? "Currently assigned to variant ".concat(A)
                  : "Currently unassigned"),
        (0, r.jsxs)("div", {
            className: v.group,
            children: [
                (0, r.jsxs)(c.hjN, {
                    children: [
                        P,
                        (0, r.jsx)("div", {
                            children: (0, r.jsx)(c.xJW, {
                                title: t.system === d.I.LEGACY ? "Bucket Override" : "Variant Override",
                                children: (0, r.jsx)(f.y, {
                                    experiment: t,
                                    experimentId: n,
                                    overrideInfo: a,
                                }),
                            }),
                        }),
                        (0, r.jsxs)("div", {
                            className: v.description,
                            children: [
                                (0, r.jsx)(c.R94, {
                                    type: c.geA.DESCRIPTION,
                                    children: w,
                                }),
                                null == C
                                    ? (0, r.jsx)(c.R94, {
                                          type: c.geA.DESCRIPTION,
                                          children:
                                              'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.',
                                      })
                                    : null,
                            ],
                        }),
                        y
                            ? (0, r.jsxs)("div", {
                                  children: [
                                      (0, r.jsx)(c.vwX, {
                                          tag: "h5",
                                          className: v.debugTitle,
                                          children: "Server Descriptor",
                                      }),
                                      (0, r.jsx)(c.Text, {
                                          variant: "code",
                                          className: v.pre,
                                          children: null == C ? "None" : JSON.stringify(C, void 0, 2),
                                      }),
                                      (0, r.jsx)(c.vwX, {
                                          tag: "h5",
                                          className: v.debugTitle,
                                          children: "Override Descriptor",
                                      }),
                                      (0, r.jsx)(c.Text, {
                                          variant: "code",
                                          className: v.pre,
                                          children:
                                              (null == a ? void 0 : a.originalDescriptor) == null
                                                  ? "None"
                                                  : JSON.stringify(a.originalDescriptor, void 0, 2),
                                      }),
                                      (0, r.jsx)(c.vwX, {
                                          tag: "h5",
                                          className: v.debugTitle,
                                          children: "Recent Exposures",
                                      }),
                                      (0, r.jsx)(c.Text, {
                                          variant: "code",
                                          className: v.pre,
                                          children: 0 === N.length ? "None" : N.join("\n"),
                                      }),
                                  ],
                              })
                            : (0, r.jsx)(l.zx, {
                                  className: v.debugButton,
                                  size: l.zx.Sizes.SMALL,
                                  look: l.zx.Looks.BLANK,
                                  onClick: () => I(!0),
                                  children: "More Details \xBB",
                              }),
                    ],
                }),
                (0, r.jsx)(c.$i$, { className: v.divider }),
            ],
        })
    );
}
function C(e) {
    let { experiment: t, experimentId: n, overrideInfo: a } = e,
        [u, d] = i.useState(null != a),
        [p, h] = i.useState(!1),
        m = i.useCallback(() => {
            d((e) => !e);
        }, []),
        g = (0, s.e7)([_.Z], () => _.Z.getLoadedGuildExperiment(n)),
        b = (0, s.Wu)([_.Z], () =>
            o()
                .sortBy(_.Z.getRecentExposures(O.xY.GUILD, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return "".concat(new Date(n).toLocaleString(), " (").concat(t, ")");
                }),
        ),
        [y, I] = (0, s.Wu)([E.Z, _.Z], () => {
            let e = o().sortBy(E.Z.getGuildsArray(), (e) => e.name.toLowerCase()),
                t = {},
                r = [];
            for (let a of e) {
                var i;
                let e = _.Z.getGuildExperimentDescriptor(n, a.id),
                    o = null != (i = null == e ? void 0 : e.bucket) ? i : O.NZ.NOT_ELIGIBLE;
                o in t || (t[o] = 0), t[o]++, r.push("".concat(a.name, ": ").concat(o));
            }
            let a = o()(t)
                .keys()
                .map(Number)
                .sort()
                .map((e) => "".concat(t[e], " guilds in bucket ").concat(e))
                .join(", ");
            return [r.join("\n"), a];
        }),
        T = (0, r.jsx)(c.P3F, {
            onClick: m,
            children: (0, r.jsxs)(c.vwX, {
                tag: c.RB0.H3,
                className: v.title,
                children: [
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)("span", { children: t.title }),
                            (0, r.jsx)(c.Text, {
                                color: "text-muted",
                                variant: "text-sm/normal",
                                children: n,
                            }),
                        ],
                    }),
                    (0, r.jsx)("span", {
                        className: v.experimentDate,
                        children: "Guild",
                    }),
                ],
            }),
        });
    return u
        ? (0, r.jsxs)("div", {
              className: v.group,
              children: [
                  (0, r.jsxs)(c.hjN, {
                      children: [
                          T,
                          (0, r.jsx)("div", {
                              children: (0, r.jsx)(c.xJW, {
                                  title: "Bucket Override",
                                  children: (0, r.jsx)(f.y, {
                                      experiment: t,
                                      experimentId: n,
                                      overrideInfo: a,
                                  }),
                              }),
                          }),
                          (0, r.jsxs)("div", {
                              className: v.description,
                              children: [
                                  (0, r.jsxs)(c.R94, {
                                      type: c.geA.DESCRIPTION,
                                      children: ["Current Assignments: ", I],
                                  }),
                                  null == g
                                      ? (0, r.jsx)(c.R94, {
                                            type: c.geA.DESCRIPTION,
                                            children:
                                                'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.',
                                        })
                                      : null,
                              ],
                          }),
                          p
                              ? (0, r.jsxs)("div", {
                                    children: [
                                        (0, r.jsx)(c.vwX, {
                                            tag: "h5",
                                            className: v.debugTitle,
                                            children: "Guild Assignments",
                                        }),
                                        (0, r.jsx)(c.Text, {
                                            variant: "code",
                                            className: v.pre,
                                            children: y,
                                        }),
                                        (0, r.jsx)(c.vwX, {
                                            tag: "h5",
                                            className: v.debugTitle,
                                            children: "Server Descriptor",
                                        }),
                                        (0, r.jsx)(c.Text, {
                                            variant: "code",
                                            className: v.pre,
                                            children: null == g ? "None" : JSON.stringify(g, void 0, 2),
                                        }),
                                        (0, r.jsx)(c.vwX, {
                                            tag: "h5",
                                            className: v.debugTitle,
                                            children: "Override Descriptor",
                                        }),
                                        (0, r.jsx)(c.Text, {
                                            variant: "code",
                                            className: v.pre,
                                            children:
                                                (null == a ? void 0 : a.originalDescriptor) == null
                                                    ? "None"
                                                    : JSON.stringify(a.originalDescriptor, void 0, 2),
                                        }),
                                        (0, r.jsx)(c.vwX, {
                                            tag: "h5",
                                            className: v.debugTitle,
                                            children: "Recent Exposures",
                                        }),
                                        (0, r.jsx)(c.Text, {
                                            variant: "code",
                                            className: v.pre,
                                            children: 0 === b.length ? "None" : b.join("\n"),
                                        }),
                                    ],
                                })
                              : (0, r.jsx)(l.zx, {
                                    className: v.debugButton,
                                    size: l.zx.Sizes.SMALL,
                                    look: l.zx.Looks.BLANK,
                                    onClick: () => h(!0),
                                    children: "More Details \xBB",
                                }),
                      ],
                  }),
                  (0, r.jsx)(c.$i$, { className: v.divider }),
              ],
          })
        : (0, r.jsx)("div", {
              className: v.group,
              children: (0, r.jsx)(c.hjN, { children: T }),
          });
}
