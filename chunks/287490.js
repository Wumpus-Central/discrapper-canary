n.d(t, { Z: () => I }), n(388685), n(953529), n(49124), n(539854), n(642613);
var r = n(54381),
    i = n(473749),
    a = n(392711),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(922699),
    u = n(492435),
    d = n(389494),
    f = n(353926),
    p = n(667344),
    _ = n(453032),
    m = n(493075),
    h = n(314897),
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
function S(e) {
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
function I() {
    let { experiments: e, overridesInfo: t } = (0, p.Qb)(),
        { experiments: n, overridesInfo: a } = (0, m.sI)(),
        o = i.useMemo(() => S({}, n, e), [n, e]),
        s = i.useMemo(() => S({}, a, t), [a, t]),
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
                      let t = "guild" === e.experiment.kind ? C : T;
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
function T(e) {
    let { experiment: t, experimentId: n, overrideInfo: a, defaultOpen: p } = e,
        [m, g] = i.useState(p),
        [b, v] = i.useState(!1),
        S = i.useCallback(() => {
            g((e) => !e);
        }, []),
        I = (0, s.e7)([h.default], () => h.default.getId()),
        T = (0, _.qD)(t, I),
        C = (0, _.aN)(t, I),
        A = (0, s.Wu)([f.Z], () =>
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
        P = (0, r.jsx)(l.kL8, {
            "aria-label": "Toggle visibility",
            onClick: S,
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
    if (!m)
        return (0, r.jsx)("div", {
            className: O.group,
            children: P,
        });
    let R = "";
    return (
        (R =
            t.system === u.I.LEGACY
                ? "Currently assigned to bucket ".concat(null != T ? T : y.NZ.NOT_ELIGIBLE)
                : null != T
                  ? "Currently assigned to variant ".concat(T)
                  : "Currently unassigned"),
        (0, r.jsxs)("div", {
            className: O.group,
            children: [
                P,
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(d.y, {
                        label: t.system === u.I.LEGACY ? "Bucket Override" : "Variant Override",
                        description: R,
                        experiment: t,
                        experimentId: n,
                        overrideInfo: a,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: O.description,
                    children:
                        null == C
                            ? (0, r.jsx)(l.Text, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
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
                                  children: null == C ? "None" : JSON.stringify(C, void 0, 2),
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
                                  children: 0 === A.length ? "None" : A.join("\n"),
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
function C(e) {
    let { experiment: t, experimentId: n, overrideInfo: a } = e,
        [c, u] = i.useState(null != a),
        [p, _] = i.useState(!1),
        m = i.useCallback(() => {
            u((e) => !e);
        }, []),
        h = (0, s.e7)([f.Z], () => f.Z.getLoadedGuildExperiment(n)),
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
        S = (0, r.jsx)(l.P3F, {
            onClick: m,
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
                  S,
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
                          null == h
                              ? (0, r.jsx)(l.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children:
                                        'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.',
                                })
                              : null,
                  }),
                  p
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
                                    children: null == h ? "None" : JSON.stringify(h, void 0, 2),
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
                                onClick: () => _(!0),
                            }),
                        }),
                  (0, r.jsx)(l.izJ, { className: O.divider }),
              ],
          })
        : (0, r.jsx)("div", {
              className: O.group,
              children: S,
          });
}
