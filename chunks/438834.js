a.d(e, { default: () => Q });
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
    g = a(858899),
    j = a(95477),
    b = a(441349),
    v = a(192308),
    p = a(123292),
    y = a(922016),
    k = a(980707),
    C = a(477782),
    w = a(408278),
    S = a(365199),
    P = a(761508),
    D = a(712808),
    E = a(502707),
    T = a(128761),
    M = a(395592),
    N = a(967008);
function B(t) {
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
let z = [];
var I = a(155899),
    R = a(248675),
    V = a(660183),
    A = a(796734);
function L(t) {
    let { title: e, body: a, onRetry: n } = t;
    return (0, l.jsx)("div", {
        className: A.wk,
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
                          text: V.intl.string(R.default.HOuQ9H),
                          onClick: n,
                      })
                    : null,
            ],
        }),
    });
}
function G() {
    return (0, l.jsx)("div", { className: A.wk, children: (0, l.jsx)(x.y, {}) });
}
function Y(t) {
    let { items: e, getMs: a, nowMs: n, renderItem: i } = t;
    return (0, l.jsx)(d.B, {
        gap: 16,
        children: (0, T.v9)(e, a, n).map((t) =>
            (0, l.jsxs)(
                "section",
                {
                    "aria-label": t.label ?? void 0,
                    children: [
                        null != t.label
                            ? (0, l.jsx)(c.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  className: A.$l,
                                  children: t.label,
                              })
                            : null,
                        (0, l.jsx)("ul", { className: A.Ge, children: t.items.map(i) }),
                    ],
                },
                t.key,
            ),
        ),
    });
}
function q(t) {
    let { title: e, fullTitle: a, muted: n = !1, meta: i, trailing: s } = t;
    return (0, l.jsxs)("li", {
        className: A.nM,
        children: [
            (0, l.jsx)("div", {
                className: A.qg,
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
function F(t) {
    let { versions: e, previewBackups: a, restoreDisabled: n, showsPublishState: i, onRetry: s, onRestore: r } = t;
    if ("loading" === e.status) return (0, l.jsx)(G, {});
    if ("failed" === e.status)
        return (0, l.jsx)(L, {
            title: V.intl.string(R.default.Xduqn2),
            body: V.intl.string(R.default.TOFCh3),
            onRetry: s,
        });
    let { entries: o, publishedSha: d } = e.data,
        u = (0, T.FA)(e.data);
    return 0 === o.length
        ? (0, l.jsx)(L, { title: V.intl.string(R.default.MczNnb), body: V.intl.string(R.default["8L/U2T"]) })
        : (0, l.jsx)(Y, {
              items: o,
              getMs: (t) => (0, T.YD)(t.authoredAt),
              nowMs: e.nowMs,
              renderItem: (t) => {
                  let e = (0, T.T4)(t.subject, !0 === t.restored),
                      s = (0, T.YD)(t.authoredAt),
                      o = t.sha === u;
                  return (0, l.jsx)(
                      q,
                      {
                          title: e.short,
                          fullTitle: e.full,
                          meta: (0, l.jsxs)(l.Fragment, {
                              children: [
                                  null != s
                                      ? (0, l.jsx)(c.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: (0, T.nY)(s),
                                        })
                                      : null,
                                  i && o
                                      ? (0, l.jsx)(h.v, {
                                            text: V.intl.string(R.default.KVnLPd),
                                            variant: "blurpleLight",
                                        })
                                      : null,
                                  i && t.sha === d
                                      ? (0, l.jsx)(h.v, {
                                            text: V.intl.string(R.default.qulPhb),
                                            variant: "greenLight",
                                        })
                                      : null,
                              ],
                          }),
                          trailing:
                              o || !1 === t.restorable
                                  ? null
                                  : (0, l.jsx)(m.$, {
                                        variant: "secondary",
                                        size: "sm",
                                        text: V.intl.string(R.default["1NAPyC"]),
                                        "aria-label": V.intl.formatToPlainString(R.default["2KgEnm"], {
                                            title: e.short,
                                        }),
                                        disabled: n,
                                        onClick: () =>
                                            (0, I.F)({ matchingBackup: (0, T.y0)(t, a), onConfirm: (e) => r(t, e) }),
                                    }),
                      },
                      t.sha,
                  );
              },
          });
}
function H(t) {
    let { projectId: e, environment: a, targetMs: l, execute: n, onSettled: i } = t,
        s = (0, T.Nc)(a, l);
    (0, r.A)({
        title: s.title,
        subtitle: s.body,
        confirmText: s.confirmText,
        variant: s.critical ? "critical" : "primary",
        onConfirm: async (t) => {
            let a = await (0, N.b)(e, n);
            if (a.ok) {
                ((0, g.P0)({ text: V.intl.string(R.default.yHchfE), variant: "success" }), i());
                return;
            }
            if ("unconfirmed" === a.code) {
                ((0, g.P0)({ text: V.intl.string(R.default.iqN7YA), variant: "critical" }), i());
                return;
            }
            throw (
                "expired" === a.code && i(),
                t(V.intl.string("expired" === a.code ? R.default.a5pfx4 : R.default.uyjFNZ)),
                Error(`data rewind ${a.code}`)
            );
        },
    });
}
function K(t) {
    let { projectId: e, environment: a, onSaved: i, transitionState: s, onClose: r } = t,
        [d, u] = n.useState(""),
        [c, m] = n.useState(!1),
        [x, f] = n.useState(!1);
    return (0, l.jsx)(o.a, {
        transitionState: s,
        onClose: r,
        title: V.intl.string(R.default.qywOto),
        subtitle: V.intl.formatToPlainString(R.default.sXGNm5, { environment: (0, T.K1)(a) }),
        notice: x ? { message: V.intl.string(R.default.TOxYEF), type: "critical" } : void 0,
        actions: [
            { text: V.intl.string(V.t["ETE/oC"]), variant: "secondary", onClick: r },
            {
                text: V.intl.string(R.default["5/xCdF"]),
                variant: "primary",
                loading: c,
                onClick: function () {
                    (m(!0),
                        f(!1),
                        (0, M.x)(e, () => (0, D._m)(e, a, d))
                            .then((t) => {
                                if (null == t) throw Error("database busy");
                            })
                            .then(
                                () => {
                                    ((0, g.P0)({ text: V.intl.string(R.default.OoHJfv), variant: "success" }),
                                        i(),
                                        r());
                                },
                                () => {
                                    (m(!1), f(!0));
                                },
                            ));
                },
            },
        ],
        children: (0, l.jsx)(j.k, {
            label: V.intl.string(R.default.WKmhsD),
            value: d,
            onChange: u,
            maxLength: 200,
            disabled: c,
        }),
    });
}
function O(t) {
    return (0, i.tR)((0, i.Bq)(new Date(t), (0, s.Xj)()));
}
function X(t) {
    let { projectId: e, environment: a, restoreWindow: r, onSettled: d, transitionState: u, onClose: c } = t,
        [m] = n.useState(() => Date.now()),
        [x, f] = n.useState(null),
        h = r.earliestRestoreTimestampMs,
        g = null != x ? x.toDate((0, s.Xj)()).getTime() : null,
        j = null != g && g >= h && g <= m;
    return (0, l.jsx)(o.a, {
        transitionState: u,
        onClose: c,
        title: V.intl.string(R.default.L2iFYN),
        subtitle: V.intl.formatToPlainString(R.default.MbjMdo, { days: 30 }),
        actions: [
            { text: V.intl.string(V.t["ETE/oC"]), variant: "secondary", onClick: c },
            {
                text: V.intl.string(R.default.vzbISt),
                variant: "critical-primary",
                disabled: !j,
                onClick: () => {
                    null != g &&
                        j &&
                        (c(),
                        H({
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
            label: V.intl.string(R.default["8lOVBi"]),
            granularity: "minute",
            value: x,
            onChange: (t) => f(null == t ? null : (0, i.tR)(t)),
            minValue: O(h),
            maxValue: O(m),
            errorMessage: null == g || j ? void 0 : V.intl.formatToPlainString(R.default["E+5VOP"], { days: 30 }),
        }),
    });
}
function $(t) {
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
        k = (0, T.u4)(b, s),
        C = "loaded" === y.state.status ? y.state.data.window : null,
        w = y.state;
    if ("loading" === w.status) e = (0, l.jsx)(G, {});
    else if ("failed" === w.status)
        e = (0, l.jsx)(L, {
            title: V.intl.string(R.default.Xduqn2),
            body: V.intl.string(R.default["VGh9H+"]),
            onRetry: y.retry,
        });
    else if (0 === w.data.points.length)
        e = (0, l.jsx)(c.E, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: V.intl.string(R.default.G2DTWl),
        });
    else {
        let { shown: t, collapsible: a } = (0, T.KA)(w.data.points, h);
        e = (0, l.jsxs)(d.B, {
            gap: 4,
            children: [
                (0, l.jsx)("ul", {
                    className: A.Ge,
                    children: t.map((t) => {
                        let e = (0, T.fd)(t, r),
                            { restoreToMs: a } = e;
                        return (0, l.jsx)(
                            q,
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
                                              children: V.intl.string(R.default.zPhIa9),
                                          })
                                        : (0, l.jsx)(m.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: V.intl.string(R.default.K3Q49G),
                                              "aria-label": V.intl.formatToPlainString(R.default["hXP0m/"], {
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
                              text: V.intl.string(h ? R.default.GgleNC : R.default.qCWKAE),
                              onClick: () => g((t) => !t),
                          }),
                      })
                    : null,
            ],
        });
    }
    return (0, l.jsx)("section", {
        "aria-labelledby": j,
        className: A.$H,
        children: (0, l.jsxs)(d.B, {
            gap: 12,
            children: [
                (0, l.jsxs)(d.B, {
                    direction: "horizontal",
                    justify: "space-between",
                    align: "center",
                    gap: 12,
                    children: [
                        (0, l.jsx)(u.D, { variant: "heading-lg/semibold", id: j, children: k }),
                        (0, l.jsx)(W, {
                            label: V.intl.formatToPlainString(R.default.tmSDLN, { database: k }),
                            saveDisabled: "failed" === w.status || o,
                            restoreDisabled: null == C || o,
                            onSaveBackup: function () {
                                return (0, v.openModalLazy)(() =>
                                    Promise.resolve((t) =>
                                        (0, l.jsx)(K, { ...t, projectId: a, environment: b, onSaved: f }),
                                    ),
                                );
                            },
                            onRestoreToTime: function () {
                                null != C &&
                                    (0, v.openModalLazy)(() =>
                                        Promise.resolve((t) =>
                                            (0, l.jsx)(X, {
                                                ...t,
                                                projectId: a,
                                                environment: b,
                                                restoreWindow: C,
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
function W(t) {
    let { label: e, saveDisabled: a, restoreDisabled: i, onSaveBackup: s, onRestoreToTime: r } = t,
        o = n.useRef(null);
    return (0, l.jsx)(y.Y, {
        targetElementRef: o,
        position: "bottom",
        align: "right",
        animation: y.Y.Animation.NONE,
        renderPopout: (t) => {
            let { closePopout: n } = t;
            return (0, l.jsxs)(k.W, {
                navId: "conjure-history-database-options",
                "aria-label": e,
                onClose: n,
                onSelect: n,
                children: [
                    (0, l.jsx)(C.Dr, {
                        id: "back-up-now",
                        label: V.intl.string(R.default.uNd2Je),
                        disabled: a,
                        action: s,
                    }),
                    (0, l.jsx)(C.Dr, {
                        id: "restore-to-time",
                        label: V.intl.string(R.default.Xi6pDt),
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
                    children: (0, l.jsx)(w.K, {
                        icon: S.MoreHorizontalIcon,
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
function Q(t) {
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
        { projectId: p, installScope: y, restoreDisabled: k, onRestoreVersion: C, transitionState: w, onClose: S } = t,
        [N, I] = n.useState("versions"),
        {
            sharedDatabase: L,
            versions: G,
            databases: Y,
            previewBackups: q,
            previewBackupsLoading: K,
            refreshAllBackups: O,
            versionTitles: X,
        } = ((a = (e = n.useMemo(() => ("user" === y ? ["stable"] : ["stable", "preview"]), [y])).includes("preview")),
        (i = B(n.useCallback(() => (0, D.Du)(p), [p]))),
        (s = B(
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
        (r = B(n.useCallback(() => (a ? (0, D.DM)(p, "preview") : Promise.resolve(z)), [p, a]))),
        (u = B(n.useCallback(() => (a ? (0, D.ms)(p, "preview") : Promise.resolve(null)), [p, a]))),
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
            if ("loaded" === j.status) for (let e of j.data.entries) t.set(e.sha, (0, T.T4)(e.subject).short);
            return t;
        }, [j])),
        {
            sharedDatabase: !a,
            versions: i,
            databases: g,
            previewBackups: "loaded" === (v = r.state).status ? v.data : z,
            previewBackupsLoading: "loading" === v.status,
            refreshAllBackups: h,
            versionTitles: b,
        }),
        W = (0, M.u)(p),
        Q = (0, E.A)(p),
        _ = n.useCallback(
            (t, e) => {
                (S(), C(t, e));
            },
            [S, C],
        ),
        J = n.useCallback(
            (t, e) => {
                H({
                    projectId: p,
                    environment: t.environment,
                    targetMs: e,
                    execute: () => (0, D.$D)(p, t.id),
                    onSettled: O,
                });
            },
            [p, O],
        );
    return (0, l.jsxs)(o.a, {
        transitionState: w,
        onClose: S,
        size: "md",
        title: V.intl.string(R.default["3hIVou"]),
        actions: [],
        children: [
            (0, l.jsxs)(P.V, {
                type: "top",
                selectedItem: N,
                onItemSelect: I,
                "aria-label": V.intl.string(R.default["/2GnYy"]),
                children: [
                    (0, l.jsx)(P.V.Item, { id: "versions", children: V.intl.string(R.default.aEg2bh) }),
                    (0, l.jsx)(P.V.Item, { id: "database", children: V.intl.string(R.default["GSu/n6"]) }),
                ],
            }),
            (0, l.jsx)(P.V.Panel, {
                id: N,
                className: A.nd,
                children:
                    "versions" === N
                        ? (0, l.jsx)(F, {
                              versions: G.state,
                              previewBackups: q,
                              restoreDisabled: k || K || W,
                              showsPublishState: !Q,
                              onRetry: G.retry,
                              onRestore: _,
                          })
                        : (0, l.jsxs)(d.B, {
                              gap: 24,
                              children: [
                                  (0, l.jsx)(c.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: V.intl.formatToPlainString(R.default.ptsHZu, { days: 30 }),
                                  }),
                                  Y.map((t) =>
                                      (0, l.jsx)(
                                          $,
                                          {
                                              projectId: p,
                                              database: t,
                                              sharedDatabase: L,
                                              versionTitles: X,
                                              busy: W,
                                              onRestoreBackup: J,
                                              onSettled: O,
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
