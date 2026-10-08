a.d(e, { default: () => W });
var l = a(477900),
    n = a(582128),
    i = a(594247),
    s = a(620409),
    r = a(314116),
    o = a(189213),
    d = a(331322),
    u = a(297264),
    c = a(834730),
    m = a(821609),
    x = a(289873),
    f = a(866665),
    h = a(237528),
    g = a(376357),
    j = a(95477),
    b = a(441349),
    v = a(192308),
    p = a(123292),
    y = a(922016),
    C = a(980707),
    k = a(477782),
    S = a(408278),
    w = a(365199),
    E = a(761508),
    D = a(712808),
    P = a(128761),
    T = a(395592),
    M = a(967008);
function N(t) {
    let [e, a] = n.useState(0),
        [l, i] = n.useState(null);
    n.useEffect(() => {
        let e = !1;
        return (
            t().then(
                (a) => {
                    e || i({ load: t, state: { status: "loaded", data: a, nowMs: Date.now() } });
                },
                () => {
                    e || i({ load: t, state: { status: "failed" } });
                },
            ),
            () => {
                e = !0;
            }
        );
    }, [t, e]);
    let s = n.useCallback(() => {
            (i(null), a((t) => t + 1));
        }, []),
        r = n.useCallback(() => a((t) => t + 1), []);
    return { state: null != l && l.load === t ? l.state : { status: "loading" }, retry: s, refresh: r };
}
let B = [];
var I = a(155899),
    z = a(248675),
    R = a(660183),
    L = a(796734);
function V(t) {
    let { title: e, body: a, onRetry: n } = t;
    return (0, l.jsx)("div", {
        className: L.wk,
        role: null != n ? "alert" : void 0,
        children: (0, l.jsxs)(d.B, {
            gap: 8,
            align: "center",
            children: [
                (0, l.jsx)(u.D, { variant: "heading-md/semibold", children: e }),
                (0, l.jsx)(c.E, { variant: "text-sm/normal", color: "text-muted", children: a }),
                null != n
                    ? (0, l.jsx)(m.$, {
                          variant: "secondary",
                          size: "sm",
                          text: R.intl.string(z.default.HOuQ9H),
                          onClick: n,
                      })
                    : null,
            ],
        }),
    });
}
function A() {
    return (0, l.jsx)("div", { className: L.wk, children: (0, l.jsx)(x.y, {}) });
}
function F(t) {
    let { items: e, getMs: a, nowMs: n, renderItem: i } = t;
    return (0, l.jsx)(d.B, {
        gap: 16,
        children: (0, P.v9)(e, a, n).map((t) =>
            (0, l.jsxs)(
                "section",
                {
                    "aria-label": t.label ?? void 0,
                    children: [
                        null != t.label
                            ? (0, l.jsx)(c.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  className: L.$l,
                                  children: t.label,
                              })
                            : null,
                        (0, l.jsx)("ul", { className: L.Ge, children: t.items.map(i) }),
                    ],
                },
                t.key,
            ),
        ),
    });
}
function G(t) {
    let { title: e, fullTitle: a, muted: n = !1, meta: i, trailing: s } = t;
    return (0, l.jsxs)("li", {
        className: L.nM,
        children: [
            (0, l.jsx)("div", {
                className: L.qg,
                children: (0, l.jsxs)(d.B, {
                    gap: 4,
                    children: [
                        (0, l.jsx)(f.m, {
                            text: null != a && a !== e ? a : null,
                            children: (0, l.jsx)(c.E, {
                                variant: "text-md/medium",
                                color: n ? "text-muted" : "text-default",
                                children: e,
                            }),
                        }),
                        (0, l.jsx)(d.B, { direction: "horizontal", gap: 8, align: "center", children: i }),
                    ],
                }),
            }),
            s,
        ],
    });
}
function Y(t) {
    let { versions: e, previewBackups: a, restoreDisabled: n, onRetry: i, onRestore: s } = t;
    if ("loading" === e.status) return (0, l.jsx)(A, {});
    if ("failed" === e.status)
        return (0, l.jsx)(V, {
            title: R.intl.string(z.default.Xduqn2),
            body: R.intl.string(z.default.TOFCh3),
            onRetry: i,
        });
    let { entries: r, publishedSha: o } = e.data,
        d = (0, P.FA)(e.data);
    return 0 === r.length
        ? (0, l.jsx)(V, { title: R.intl.string(z.default.MczNnb), body: R.intl.string(z.default["8L/U2T"]) })
        : (0, l.jsx)(F, {
              items: r,
              getMs: (t) => (0, P.YD)(t.authoredAt),
              nowMs: e.nowMs,
              renderItem: (t) => {
                  let e = (0, P.T4)(t.subject, !0 === t.restored),
                      i = (0, P.YD)(t.authoredAt),
                      r = t.sha === d;
                  return (0, l.jsx)(
                      G,
                      {
                          title: e.short,
                          fullTitle: e.full,
                          meta: (0, l.jsxs)(l.Fragment, {
                              children: [
                                  null != i
                                      ? (0, l.jsx)(c.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: (0, P.nY)(i),
                                        })
                                      : null,
                                  r
                                      ? (0, l.jsx)(h.v, {
                                            text: R.intl.string(z.default.KVnLPd),
                                            variant: "blurpleLight",
                                        })
                                      : null,
                                  t.sha === o
                                      ? (0, l.jsx)(h.v, {
                                            text: R.intl.string(z.default.qulPhb),
                                            variant: "greenLight",
                                        })
                                      : null,
                              ],
                          }),
                          trailing: r
                              ? null
                              : (0, l.jsx)(m.$, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: R.intl.string(z.default["1NAPyC"]),
                                    "aria-label": R.intl.formatToPlainString(z.default["2KgEnm"], { title: e.short }),
                                    disabled: n,
                                    onClick: () =>
                                        (0, I.F)({ matchingBackup: (0, P.y0)(t, a), onConfirm: (e) => s(t, e) }),
                                }),
                      },
                      t.sha,
                  );
              },
          });
}
function q(t) {
    let { projectId: e, environment: a, targetMs: l, execute: n, onSettled: i } = t,
        s = (0, P.Nc)(a, l);
    (0, r.A)({
        title: s.title,
        subtitle: s.body,
        confirmText: s.confirmText,
        variant: s.critical ? "critical" : "primary",
        onConfirm: async (t) => {
            let a = await (0, M.b)(e, n);
            if (a.ok) {
                ((0, g.P0)((0, g.ox)(R.intl.string(z.default.yHchfE), g.Ck.SUCCESS)), i());
                return;
            }
            if ("unconfirmed" === a.code) {
                ((0, g.P0)((0, g.ox)(R.intl.string(z.default.iqN7YA), g.Ck.FAILURE)), i());
                return;
            }
            throw (
                "expired" === a.code && i(),
                t(R.intl.string("expired" === a.code ? z.default.a5pfx4 : z.default.uyjFNZ)),
                Error(`data rewind ${a.code}`)
            );
        },
    });
}
function H(t) {
    let { projectId: e, environment: a, onSaved: i, transitionState: s, onClose: r } = t,
        [d, u] = n.useState(""),
        [c, m] = n.useState(!1),
        [x, f] = n.useState(!1);
    return (0, l.jsx)(o.a, {
        transitionState: s,
        onClose: r,
        title: R.intl.string(z.default.qywOto),
        subtitle: R.intl.formatToPlainString(z.default.sXGNm5, { environment: (0, P.K1)(a) }),
        notice: x ? { message: R.intl.string(z.default.TOxYEF), type: "critical" } : void 0,
        actions: [
            { text: R.intl.string(R.t["ETE/oC"]), variant: "secondary", onClick: r },
            {
                text: R.intl.string(z.default["5/xCdF"]),
                variant: "primary",
                loading: c,
                onClick: function () {
                    (m(!0),
                        f(!1),
                        (0, T.x)(e, () => (0, D._m)(e, a, d))
                            .then((t) => {
                                if (null == t) throw Error("database busy");
                            })
                            .then(
                                () => {
                                    ((0, g.P0)((0, g.ox)(R.intl.string(z.default.OoHJfv), g.Ck.SUCCESS)), i(), r());
                                },
                                () => {
                                    (m(!1), f(!0));
                                },
                            ));
                },
            },
        ],
        children: (0, l.jsx)(j.k, {
            label: R.intl.string(z.default.WKmhsD),
            value: d,
            onChange: u,
            maxLength: 200,
            disabled: c,
        }),
    });
}
function K(t) {
    return (0, i.tR)((0, i.Bq)(new Date(t), (0, s.Xj)()));
}
function O(t) {
    let { projectId: e, environment: a, restoreWindow: r, onSettled: d, transitionState: u, onClose: c } = t,
        [m] = n.useState(() => Date.now()),
        [x, f] = n.useState(null),
        h = r.earliestRestoreTimestampMs,
        g = null != x ? x.toDate((0, s.Xj)()).getTime() : null,
        j = null != g && g >= h && g <= m;
    return (0, l.jsx)(o.a, {
        transitionState: u,
        onClose: c,
        title: R.intl.string(z.default.L2iFYN),
        subtitle: R.intl.formatToPlainString(z.default.MbjMdo, { days: 30 }),
        actions: [
            { text: R.intl.string(R.t["ETE/oC"]), variant: "secondary", onClick: c },
            {
                text: R.intl.string(z.default.vzbISt),
                variant: "critical-primary",
                disabled: !j,
                onClick: () => {
                    null != g &&
                        j &&
                        (c(),
                        q({
                            projectId: e,
                            environment: a,
                            targetMs: g,
                            execute: () => (0, D.dz)(e, a, g),
                            onSettled: d,
                        }));
                },
            },
        ],
        children: (0, l.jsx)(b.l, {
            label: R.intl.string(z.default["8lOVBi"]),
            granularity: "minute",
            value: x,
            onChange: (t) => f(null == t ? null : (0, i.tR)(t)),
            minValue: K(h),
            maxValue: K(m),
            errorMessage: null == g || j ? void 0 : R.intl.formatToPlainString(z.default["E+5VOP"], { days: 30 }),
        }),
    });
}
function X(t) {
    let e,
        {
            projectId: a,
            database: i,
            sharedDatabase: s,
            versionTitles: r,
            busy: o,
            onRestoreBackup: x,
            onSettled: f,
        } = t,
        [h, g] = n.useState(!1),
        j = n.useId(),
        { environment: b, backups: y } = i,
        C = (0, P.u4)(b, s),
        k = "loaded" === y.state.status ? y.state.data.window : null,
        S = y.state;
    if ("loading" === S.status) e = (0, l.jsx)(A, {});
    else if ("failed" === S.status)
        e = (0, l.jsx)(V, {
            title: R.intl.string(z.default.Xduqn2),
            body: R.intl.string(z.default["VGh9H+"]),
            onRetry: y.retry,
        });
    else if (0 === S.data.points.length)
        e = (0, l.jsx)(c.E, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: R.intl.string(z.default.G2DTWl),
        });
    else {
        let { shown: t, collapsible: a } = (0, P.KA)(S.data.points, h);
        e = (0, l.jsxs)(d.B, {
            gap: 4,
            children: [
                (0, l.jsx)("ul", {
                    className: L.Ge,
                    children: t.map((t) => {
                        let e = (0, P.fd)(t, r),
                            { restoreToMs: a } = e;
                        return (0, l.jsx)(
                            G,
                            {
                                title: e.title,
                                muted: null == a,
                                meta: (0, l.jsx)(c.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: e.detail,
                                }),
                                trailing:
                                    null == a
                                        ? (0, l.jsx)(c.E, {
                                              variant: "text-sm/normal",
                                              color: "text-muted",
                                              children: R.intl.string(z.default.zPhIa9),
                                          })
                                        : (0, l.jsx)(m.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: R.intl.string(z.default.K3Q49G),
                                              "aria-label": R.intl.formatToPlainString(z.default["hXP0m/"], {
                                                  title: e.title,
                                              }),
                                              disabled: o,
                                              onClick: () => x(t, a),
                                          }),
                            },
                            t.id,
                        );
                    }),
                }),
                a
                    ? (0, l.jsx)(d.B, {
                          align: "start",
                          children: (0, l.jsx)(p.Q, {
                              text: R.intl.string(h ? z.default.GgleNC : z.default.qCWKAE),
                              onClick: () => g((t) => !t),
                          }),
                      })
                    : null,
            ],
        });
    }
    return (0, l.jsx)("section", {
        "aria-labelledby": j,
        className: L.$H,
        children: (0, l.jsxs)(d.B, {
            gap: 12,
            children: [
                (0, l.jsxs)(d.B, {
                    direction: "horizontal",
                    justify: "space-between",
                    align: "center",
                    gap: 12,
                    children: [
                        (0, l.jsx)(u.D, { variant: "heading-lg/semibold", id: j, children: C }),
                        (0, l.jsx)($, {
                            label: R.intl.formatToPlainString(z.default.tmSDLN, { database: C }),
                            saveDisabled: "failed" === S.status || o,
                            restoreDisabled: null == k || o,
                            onSaveBackup: function () {
                                return (0, v.openModalLazy)(() =>
                                    Promise.resolve((t) =>
                                        (0, l.jsx)(H, { ...t, projectId: a, environment: b, onSaved: f }),
                                    ),
                                );
                            },
                            onRestoreToTime: function () {
                                null != k &&
                                    (0, v.openModalLazy)(() =>
                                        Promise.resolve((t) =>
                                            (0, l.jsx)(O, {
                                                ...t,
                                                projectId: a,
                                                environment: b,
                                                restoreWindow: k,
                                                onSettled: f,
                                            }),
                                        ),
                                    );
                            },
                        }),
                    ],
                }),
                e,
            ],
        }),
    });
}
function $(t) {
    let { label: e, saveDisabled: a, restoreDisabled: i, onSaveBackup: s, onRestoreToTime: r } = t,
        o = n.useRef(null);
    return (0, l.jsx)(y.Y, {
        targetElementRef: o,
        position: "bottom",
        align: "right",
        animation: y.Y.Animation.NONE,
        renderPopout: (t) => {
            let { closePopout: n } = t;
            return (0, l.jsxs)(C.W, {
                navId: "conjure-history-database-options",
                "aria-label": e,
                onClose: n,
                onSelect: n,
                children: [
                    (0, l.jsx)(k.Dr, {
                        id: "back-up-now",
                        label: R.intl.string(z.default.uNd2Je),
                        disabled: a,
                        action: s,
                    }),
                    (0, l.jsx)(k.Dr, {
                        id: "restore-to-time",
                        label: R.intl.string(z.default.Xi6pDt),
                        disabled: i,
                        action: r,
                    }),
                ],
            });
        },
        children: (t, a) => {
            let { onClick: n } = t,
                { isShown: i } = a;
            return (0, l.jsx)("div", {
                ref: o,
                children: (0, l.jsx)(f.m, {
                    text: e,
                    children: (0, l.jsx)(S.K, {
                        icon: w.MoreHorizontalIcon,
                        variant: "secondary",
                        size: "sm",
                        "aria-label": e,
                        "aria-haspopup": "menu",
                        "aria-expanded": i,
                        onClick: n,
                    }),
                }),
            });
        },
    });
}
function W(t) {
    let e,
        a,
        i,
        s,
        r,
        u,
        m,
        x,
        f,
        h,
        g,
        j,
        b,
        v,
        { projectId: p, installScope: y, restoreDisabled: C, onRestoreVersion: k, transitionState: S, onClose: w } = t,
        [M, I] = n.useState("versions"),
        {
            sharedDatabase: V,
            versions: A,
            databases: F,
            previewBackups: G,
            previewBackupsLoading: H,
            refreshAllBackups: K,
            versionTitles: O,
        } = ((a = (e = n.useMemo(() => ("user" === y ? ["stable"] : ["stable", "preview"]), [y])).includes("preview")),
        (i = N(n.useCallback(() => (0, D.Du)(p), [p]))),
        (s = N(
            n.useCallback(() => {
                var t;
                return (
                    (t = "stable"),
                    Promise.all([(0, D.DM)(p, t), (0, D.ms)(p, t)]).then((t) => {
                        let [e, a] = t;
                        return { points: e, window: a };
                    })
                );
            }, [p]),
        )),
        (r = N(n.useCallback(() => (a ? (0, D.DM)(p, "preview") : Promise.resolve(B)), [p, a]))),
        (u = N(n.useCallback(() => (a ? (0, D.ms)(p, "preview") : Promise.resolve(null)), [p, a]))),
        (m = s.refresh),
        (x = r.refresh),
        (f = u.refresh),
        (h = n.useCallback(() => {
            (m(), x(), f());
        }, [m, x, f])),
        (g = e.map((t) => {
            var e, a;
            let l, n;
            return {
                environment: t,
                backups:
                    "preview" === t
                        ? ((e = r),
                          (a = u),
                          (l = e.state),
                          (n = a.state),
                          {
                              state:
                                  "failed" === l.status || "failed" === n.status
                                      ? { status: "failed" }
                                      : "loading" === l.status || "loading" === n.status
                                        ? { status: "loading" }
                                        : null == n.data
                                          ? { status: "failed" }
                                          : {
                                                status: "loaded",
                                                data: { points: l.data, window: n.data },
                                                nowMs: l.nowMs,
                                            },
                              retry: function () {
                                  (e.retry(), a.retry());
                              },
                              refresh: function () {
                                  (e.refresh(), a.refresh());
                              },
                          })
                        : s,
            };
        })),
        (j = i.state),
        (b = n.useMemo(() => {
            let t = new Map();
            if ("loaded" === j.status) for (let e of j.data.entries) t.set(e.sha, (0, P.T4)(e.subject).short);
            return t;
        }, [j])),
        {
            sharedDatabase: !a,
            versions: i,
            databases: g,
            previewBackups: "loaded" === (v = r.state).status ? v.data : B,
            previewBackupsLoading: "loading" === v.status,
            refreshAllBackups: h,
            versionTitles: b,
        }),
        $ = (0, T.u)(p),
        W = n.useCallback(
            (t, e) => {
                (w(), k(t, e));
            },
            [w, k],
        ),
        U = n.useCallback(
            (t, e) => {
                q({
                    projectId: p,
                    environment: t.environment,
                    targetMs: e,
                    execute: () => (0, D.$D)(p, t.id),
                    onSettled: K,
                });
            },
            [p, K],
        );
    return (0, l.jsxs)(o.a, {
        transitionState: S,
        onClose: w,
        size: "md",
        title: R.intl.string(z.default["3hIVou"]),
        actions: [],
        children: [
            (0, l.jsxs)(E.V, {
                type: "top",
                selectedItem: M,
                onItemSelect: I,
                "aria-label": R.intl.string(z.default["/2GnYy"]),
                children: [
                    (0, l.jsx)(E.V.Item, { id: "versions", children: R.intl.string(z.default.aEg2bh) }),
                    (0, l.jsx)(E.V.Item, { id: "database", children: R.intl.string(z.default["GSu/n6"]) }),
                ],
            }),
            (0, l.jsx)(E.V.Panel, {
                id: M,
                className: L.nd,
                children:
                    "versions" === M
                        ? (0, l.jsx)(Y, {
                              versions: A.state,
                              previewBackups: G,
                              restoreDisabled: C || H || $,
                              onRetry: A.retry,
                              onRestore: W,
                          })
                        : (0, l.jsxs)(d.B, {
                              gap: 24,
                              children: [
                                  (0, l.jsx)(c.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: R.intl.formatToPlainString(z.default.ptsHZu, { days: 30 }),
                                  }),
                                  F.map((t) =>
                                      (0, l.jsx)(
                                          X,
                                          {
                                              projectId: p,
                                              database: t,
                                              sharedDatabase: V,
                                              versionTitles: O,
                                              busy: $,
                                              onRestoreBackup: U,
                                              onSettled: K,
                                          },
                                          t.environment,
                                      ),
                                  ),
                              ],
                          }),
            }),
        ],
    });
}
