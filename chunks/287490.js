n.d(t, { Z: () => T }), n(388685), n(953529), n(49124), n(539854), n(642613);
var r = n(951288),
    i = n(647438),
    a = n(392711),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(922699),
    u = n(492435),
    d = n(389494),
    f = n(353926),
    _ = n(667344),
    p = n(453032),
    h = n(493075),
    m = n(314897),
    g = n(430824),
    E = n(572004),
    b = n(878209),
    y = n(987338),
    O = n(758746);
function v(e, t, n) {
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
function I(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function T() {
    let { experiments: e, overridesInfo: t } = (0, _.Qb)(),
        { experiments: n, overridesInfo: a } = (0, h.sI)(),
        o = i.useMemo(() => I({}, n, e), [n, e]),
        s = i.useMemo(() => I({}, a, t), [a, t]),
        [c, u] = i.useState(""),
        d = (0, b.Ro)((0, b.Tc)((0, b.Cg)(o), s), c);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(l.E1j, {
                placeholder: "Search experiments",
                query: c,
                onChange: u,
                onClear: () => u(""),
            }),
            d.length > 0
                ? d.map((e) => {
                      let t = "guild" === e.experiment.kind ? A : S;
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
                      className: O.emptyState,
                      children: (0, r.jsx)(l.Heading, {
                          variant: "heading-md/semibold",
                          children: "No Experiments Found",
                      }),
                  }),
        ],
    });
}
function S(e) {
    let { experiment: t, experimentId: n, overrideInfo: a, defaultOpen: _ } = e,
        [h, g] = i.useState(_),
        [b, v] = i.useState(!1),
        I = i.useCallback(() => {
            g((e) => !e);
        }, []),
        T = (0, s.e7)([m.default], () => m.default.getId()),
        S = (0, p.qD)(t, T),
        A = (0, p.aN)(t, T),
        C = (0, s.Wu)([f.Z], () =>
            o()
                .sortBy(f.Z.getRecentExposures(y.xY.USER, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return "".concat(new Date(n).toLocaleString(), " (").concat(t, ")");
                }),
        ),
        N = i.useCallback(
            (e) => {
                (0, E.JG)((0, c.sZ)(n), () => {
                    (0, l.showToast)({
                        id: "experiment-link-copied",
                        message: "Copied experiment link",
                        type: l.ToastType.SUCCESS,
                    }),
                        e.preventDefault(),
                        e.stopPropagation();
                });
            },
            [n],
        ),
        R = (0, r.jsx)(l.kL8, {
            "aria-label": "Toggle visibility",
            onClick: I,
            children: (0, r.jsxs)(l.Text, {
                variant: "text-md/medium",
                className: O.title,
                children: [
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)(l.Kqy, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                children: [
                                    t.title,
                                    " ",
                                    E.wS &&
                                        (0, r.jsx)(l.P3F, {
                                            onClick: N,
                                            children: (0, r.jsx)(l.xPt, { size: "xs" }),
                                        }),
                                ],
                            }),
                            (0, r.jsx)(l.Text, {
                                color: "text-muted",
                                variant: "text-sm/normal",
                                children: n,
                            }),
                        ],
                    }),
                    (0, r.jsx)("span", {
                        className: O.experimentDate,
                        children: "User",
                    }),
                ],
            }),
        });
    if (!h)
        return (0, r.jsx)("div", {
            className: O.group,
            children: R,
        });
    let P = "";
    return (
        (P =
            t.system === u.I.LEGACY
                ? "Currently assigned to bucket ".concat(null != S ? S : y.NZ.NOT_ELIGIBLE)
                : null != S
                  ? "Currently assigned to variant ".concat(S)
                  : "Currently unassigned"),
        (0, r.jsxs)("div", {
            className: O.group,
            children: [
                R,
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(d.y, {
                        label: t.system === u.I.LEGACY ? "Bucket Override" : "Variant Override",
                        description: P,
                        experiment: t,
                        experimentId: n,
                        overrideInfo: a,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: O.description,
                    children:
                        null == A
                            ? (0, r.jsx)(l.Text, {
                                  variant: "text-sm/normal",
                                  color: "text-secondary",
                                  children:
                                      'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.',
                              })
                            : null,
                }),
                b
                    ? (0, r.jsxs)("div", {
                          children: [
                              (0, r.jsx)(l.Text, {
                                  variant: "text-lg/medium",
                                  className: O.debugTitle,
                                  children: "Server Descriptor",
                              }),
                              (0, r.jsx)(l.Text, {
                                  variant: "code",
                                  className: O.pre,
                                  children: null == A ? "None" : JSON.stringify(A, void 0, 2),
                              }),
                              (0, r.jsx)(l.Text, {
                                  variant: "text-lg/medium",
                                  className: O.debugTitle,
                                  children: "Override Descriptor",
                              }),
                              (0, r.jsx)(l.Text, {
                                  variant: "code",
                                  className: O.pre,
                                  children:
                                      (null == a ? void 0 : a.originalDescriptor) == null
                                          ? "None"
                                          : JSON.stringify(a.originalDescriptor, void 0, 2),
                              }),
                              (0, r.jsx)(l.Text, {
                                  variant: "text-lg/medium",
                                  className: O.debugTitle,
                                  children: "Recent Exposures",
                              }),
                              (0, r.jsx)(l.Text, {
                                  variant: "code",
                                  className: O.pre,
                                  children: 0 === C.length ? "None" : C.join("\n"),
                              }),
                          ],
                      })
                    : (0, r.jsx)("div", {
                          className: O.debugTitle,
                          children: (0, r.jsx)(l.Avr, {
                              variant: "secondary",
                              text: "More Details \xBB",
                              onClick: () => v(!0),
                          }),
                      }),
                (0, r.jsx)(l.izJ, { className: O.divider }),
            ],
        })
    );
}
function A(e) {
    let { experiment: t, experimentId: n, overrideInfo: a } = e,
        [c, u] = i.useState(null != a),
        [_, p] = i.useState(!1),
        h = i.useCallback(() => {
            u((e) => !e);
        }, []),
        m = (0, s.e7)([f.Z], () => f.Z.getLoadedGuildExperiment(n)),
        E = (0, s.Wu)([f.Z], () =>
            o()
                .sortBy(f.Z.getRecentExposures(y.xY.GUILD, n), (e) => {
                    let [t, n] = e;
                    return -n;
                })
                .map((e) => {
                    let [t, n] = e;
                    return "".concat(new Date(n).toLocaleString(), " (").concat(t, ")");
                }),
        ),
        [b, v] = (0, s.Wu)([g.Z, f.Z], () => {
            let e = o().sortBy(g.Z.getGuildsArray(), (e) => e.name.toLowerCase()),
                t = {},
                r = [];
            for (let a of e) {
                var i;
                let e = f.Z.getGuildExperimentDescriptor(n, a.id),
                    o = null != (i = null == e ? void 0 : e.bucket) ? i : y.NZ.NOT_ELIGIBLE;
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
        I = (0, r.jsx)(l.P3F, {
            onClick: h,
            children: (0, r.jsxs)(l.Text, {
                variant: "text-md/medium",
                className: O.title,
                children: [
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)("span", { children: t.title }),
                            (0, r.jsx)(l.Text, {
                                color: "text-muted",
                                variant: "text-sm/normal",
                                children: n,
                            }),
                        ],
                    }),
                    (0, r.jsx)("span", {
                        className: O.experimentDate,
                        children: "Guild",
                    }),
                ],
            }),
        });
    return c
        ? (0, r.jsxs)("div", {
              className: O.group,
              children: [
                  I,
                  (0, r.jsx)(d.y, {
                      label: "Bucket Override",
                      description: "Current Assignments: ".concat(v),
                      experiment: t,
                      experimentId: n,
                      overrideInfo: a,
                  }),
                  (0, r.jsx)("div", {
                      className: O.description,
                      children:
                          null == m
                              ? (0, r.jsx)(l.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-secondary",
                                    children:
                                        'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.',
                                })
                              : null,
                  }),
                  _
                      ? (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(l.Text, {
                                    variant: "text-lg/medium",
                                    className: O.debugTitle,
                                    children: "Guild Assignments",
                                }),
                                (0, r.jsx)(l.Text, {
                                    variant: "code",
                                    className: O.pre,
                                    children: b,
                                }),
                                (0, r.jsx)(l.Text, {
                                    variant: "text-lg/medium",
                                    className: O.debugTitle,
                                    children: "Server Descriptor",
                                }),
                                (0, r.jsx)(l.Text, {
                                    variant: "code",
                                    className: O.pre,
                                    children: null == m ? "None" : JSON.stringify(m, void 0, 2),
                                }),
                                (0, r.jsx)(l.Text, {
                                    variant: "text-lg/medium",
                                    className: O.debugTitle,
                                    children: "Override Descriptor",
                                }),
                                (0, r.jsx)(l.Text, {
                                    variant: "code",
                                    className: O.pre,
                                    children:
                                        (null == a ? void 0 : a.originalDescriptor) == null
                                            ? "None"
                                            : JSON.stringify(a.originalDescriptor, void 0, 2),
                                }),
                                (0, r.jsx)(l.Text, {
                                    variant: "text-lg/medium",
                                    className: O.debugTitle,
                                    children: "Recent Exposures",
                                }),
                                (0, r.jsx)(l.Text, {
                                    variant: "code",
                                    className: O.pre,
                                    children: 0 === E.length ? "None" : E.join("\n"),
                                }),
                            ],
                        })
                      : (0, r.jsx)("div", {
                            className: O.debugTitle,
                            children: (0, r.jsx)(l.Avr, {
                                variant: "secondary",
                                text: "More Details \xBB",
                                onClick: () => p(!0),
                            }),
                        }),
                  (0, r.jsx)(l.izJ, { className: O.divider }),
              ],
          })
        : (0, r.jsx)("div", {
              className: O.group,
              children: I,
          });
}
