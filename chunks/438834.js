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
    f = a(289873),
    x = a(866665),
    h = a(237528),
    g = a(739187),
    j = a(857250),
    b = a(97483),
    v = a(95477),
    p = a(441349),
    y = a(192308),
    C = a(123292),
    k = a(922016),
    S = a(980707),
    w = a(477782),
    E = a(408278),
    D = a(365199),
    P = a(761508),
    T = a(712808),
    M = a(128761),
    N = a(395592),
    B = a(967008);
function I(t) {
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
var R = a(155899),
    L = a(248675),
    V = a(660183),
    A = a(796734);
function F(t) {
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
                          text: V.intl.string(L.default.HOuQ9H),
                          onClick: n,
                      })
                    : null,
            ],
        }),
    });
}
function G() {
    return (0, l.jsx)("div", { className: A.wk, children: (0, l.jsx)(f.y, {}) });
}
function Y(t) {
    let { items: e, getMs: a, nowMs: n, renderItem: i } = t;
    return (0, l.jsx)(d.B, {
        gap: 16,
        children: (0, M.v9)(e, a, n).map((t) =>
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
                        (0, l.jsx)(x.m, {
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
function H(t) {
    let { versions: e, previewBackups: a, restoreDisabled: n, onRetry: i, onRestore: s } = t;
    if ("loading" === e.status) return (0, l.jsx)(G, {});
    if ("failed" === e.status)
        return (0, l.jsx)(F, {
            title: V.intl.string(L.default.Xduqn2),
            body: V.intl.string(L.default.TOFCh3),
            onRetry: i,
        });
    let { entries: r, publishedSha: o } = e.data,
        d = (0, M.FA)(e.data);
    return 0 === r.length
        ? (0, l.jsx)(F, { title: V.intl.string(L.default.MczNnb), body: V.intl.string(L.default["8L/U2T"]) })
        : (0, l.jsx)(Y, {
              items: r,
              getMs: (t) => (0, M.YD)(t.authoredAt),
              nowMs: e.nowMs,
              renderItem: (t) => {
                  let e = (0, M.T4)(t.subject, !0 === t.restored),
                      i = (0, M.YD)(t.authoredAt),
                      r = t.sha === d;
                  return (0, l.jsx)(
                      q,
                      {
                          title: e.short,
                          fullTitle: e.full,
                          meta: (0, l.jsxs)(l.Fragment, {
                              children: [
                                  null != i
                                      ? (0, l.jsx)(c.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: (0, M.nY)(i),
                                        })
                                      : null,
                                  r
                                      ? (0, l.jsx)(h.v, {
                                            text: V.intl.string(L.default.KVnLPd),
                                            variant: "blurpleLight",
                                        })
                                      : null,
                                  t.sha === o
                                      ? (0, l.jsx)(h.v, {
                                            text: V.intl.string(L.default.qulPhb),
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
                                    text: V.intl.string(L.default["1NAPyC"]),
                                    "aria-label": V.intl.formatToPlainString(L.default["2KgEnm"], { title: e.short }),
                                    disabled: n,
                                    onClick: () =>
                                        (0, R.F)({ matchingBackup: (0, M.y0)(t, a), onConfirm: (e) => s(t, e) }),
                                }),
                      },
                      t.sha,
                  );
              },
          });
}
function K(t) {
    let { projectId: e, environment: a, targetMs: l, execute: n, onSettled: i } = t,
        s = (0, M.Nc)(a, l);
    (0, r.A)({
        title: s.title,
        subtitle: s.body,
        confirmText: s.confirmText,
        variant: s.critical ? "critical" : "primary",
        onConfirm: async (t) => {
            let a = await (0, B.b)(e, n);
            if (a.ok) {
                ((0, g.P)((0, j.o)(V.intl.string(L.default.yHchfE), b.Ck.SUCCESS)), i());
                return;
            }
            if ("unconfirmed" === a.code) {
                ((0, g.P)((0, j.o)(V.intl.string(L.default.iqN7YA), b.Ck.FAILURE)), i());
                return;
            }
            throw (
                "expired" === a.code && i(),
                t(V.intl.string("expired" === a.code ? L.default.a5pfx4 : L.default.uyjFNZ)),
                Error(`data rewind ${a.code}`)
            );
        },
    });
}
function O(t) {
    let { projectId: e, environment: a, onSaved: i, transitionState: s, onClose: r } = t,
        [d, u] = n.useState(""),
        [c, m] = n.useState(!1),
        [f, x] = n.useState(!1);
    return (0, l.jsx)(o.a, {
        transitionState: s,
        onClose: r,
        title: V.intl.string(L.default.qywOto),
        subtitle: V.intl.formatToPlainString(L.default.sXGNm5, { environment: (0, M.K1)(a) }),
        notice: f ? { message: V.intl.string(L.default.TOxYEF), type: "critical" } : void 0,
        actions: [
            { text: V.intl.string(V.t["ETE/oC"]), variant: "secondary", onClick: r },
            {
                text: V.intl.string(L.default["5/xCdF"]),
                variant: "primary",
                loading: c,
                onClick: function () {
                    (m(!0),
                        x(!1),
                        (0, N.x)(e, () => (0, T._m)(e, a, d))
                            .then((t) => {
                                if (null == t) throw Error("database busy");
                            })
                            .then(
                                () => {
                                    ((0, g.P)((0, j.o)(V.intl.string(L.default.OoHJfv), b.Ck.SUCCESS)), i(), r());
                                },
                                () => {
                                    (m(!1), x(!0));
                                },
                            ));
                },
            },
        ],
        children: (0, l.jsx)(v.k, {
            label: V.intl.string(L.default.WKmhsD),
            value: d,
            onChange: u,
            maxLength: 200,
            disabled: c,
        }),
    });
}
function X(t) {
    return (0, i.tR)((0, i.Bq)(new Date(t), (0, s.Xj)()));
}
function $(t) {
    let { projectId: e, environment: a, restoreWindow: r, onSettled: d, transitionState: u, onClose: c } = t,
        [m] = n.useState(() => Date.now()),
        [f, x] = n.useState(null),
        h = r.earliestRestoreTimestampMs,
        g = null != f ? f.toDate((0, s.Xj)()).getTime() : null,
        j = null != g && g >= h && g <= m;
    return (0, l.jsx)(o.a, {
        transitionState: u,
        onClose: c,
        title: V.intl.string(L.default.L2iFYN),
        subtitle: V.intl.formatToPlainString(L.default.MbjMdo, { days: 30 }),
        actions: [
            { text: V.intl.string(V.t["ETE/oC"]), variant: "secondary", onClick: c },
            {
                text: V.intl.string(L.default.vzbISt),
                variant: "critical-primary",
                disabled: !j,
                onClick: () => {
                    null != g &&
                        j &&
                        (c(),
                        K({
                            projectId: e,
                            environment: a,
                            targetMs: g,
                            execute: () => (0, T.dz)(e, a, g),
                            onSettled: d,
                        }));
                },
            },
        ],
        children: (0, l.jsx)(p.l, {
            label: V.intl.string(L.default["8lOVBi"]),
            granularity: "minute",
            value: f,
            onChange: (t) => x(null == t ? null : (0, i.tR)(t)),
            minValue: X(h),
            maxValue: X(m),
            errorMessage: null == g || j ? void 0 : V.intl.formatToPlainString(L.default["E+5VOP"], { days: 30 }),
        }),
    });
}
function W(t) {
    let e,
        {
            projectId: a,
            database: i,
            sharedDatabase: s,
            versionTitles: r,
            busy: o,
            onRestoreBackup: f,
            onSettled: x,
        } = t,
        [h, g] = n.useState(!1),
        j = n.useId(),
        { environment: b, backups: v } = i,
        p = (0, M.u4)(b, s),
        k = "loaded" === v.state.status ? v.state.data.window : null,
        S = v.state;
    if ("loading" === S.status) e = (0, l.jsx)(G, {});
    else if ("failed" === S.status)
        e = (0, l.jsx)(F, {
            title: V.intl.string(L.default.Xduqn2),
            body: V.intl.string(L.default["VGh9H+"]),
            onRetry: v.retry,
        });
    else if (0 === S.data.points.length)
        e = (0, l.jsx)(c.E, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: V.intl.string(L.default.G2DTWl),
        });
    else {
        let { shown: t, collapsible: a } = (0, M.KA)(S.data.points, h);
        e = (0, l.jsxs)(d.B, {
            gap: 4,
            children: [
                (0, l.jsx)("ul", {
                    className: A.Ge,
                    children: t.map((t) => {
                        let e = (0, M.fd)(t, r),
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
                                              children: V.intl.string(L.default.zPhIa9),
                                          })
                                        : (0, l.jsx)(m.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: V.intl.string(L.default.K3Q49G),
                                              "aria-label": V.intl.formatToPlainString(L.default["hXP0m/"], {
                                                  title: e.title,
                                              }),
                                              disabled: o,
                                              onClick: () => f(t, a),
                                          }),
                            },
                            t.id,
                        );
                    }),
                }),
                a
                    ? (0, l.jsx)(d.B, {
                          align: "start",
                          children: (0, l.jsx)(C.Q, {
                              text: V.intl.string(h ? L.default.GgleNC : L.default.qCWKAE),
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
                        (0, l.jsx)(u.D, { variant: "heading-lg/semibold", id: j, children: p }),
                        (0, l.jsx)(U, {
                            label: V.intl.formatToPlainString(L.default.tmSDLN, { database: p }),
                            saveDisabled: "failed" === S.status || o,
                            restoreDisabled: null == k || o,
                            onSaveBackup: function () {
                                return (0, y.openModalLazy)(() =>
                                    Promise.resolve((t) =>
                                        (0, l.jsx)(O, { ...t, projectId: a, environment: b, onSaved: x }),
                                    ),
                                );
                            },
                            onRestoreToTime: function () {
                                null != k &&
                                    (0, y.openModalLazy)(() =>
                                        Promise.resolve((t) =>
                                            (0, l.jsx)($, {
                                                ...t,
                                                projectId: a,
                                                environment: b,
                                                restoreWindow: k,
                                                onSettled: x,
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
function U(t) {
    let { label: e, saveDisabled: a, restoreDisabled: i, onSaveBackup: s, onRestoreToTime: r } = t,
        o = n.useRef(null);
    return (0, l.jsx)(k.Y, {
        targetElementRef: o,
        position: "bottom",
        align: "right",
        animation: k.Y.Animation.NONE,
        renderPopout: (t) => {
            let { closePopout: n } = t;
            return (0, l.jsxs)(S.W, {
                navId: "conjure-history-database-options",
                "aria-label": e,
                onClose: n,
                onSelect: n,
                children: [
                    (0, l.jsx)(w.Dr, {
                        id: "back-up-now",
                        label: V.intl.string(L.default.uNd2Je),
                        disabled: a,
                        action: s,
                    }),
                    (0, l.jsx)(w.Dr, {
                        id: "restore-to-time",
                        label: V.intl.string(L.default.Xi6pDt),
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
                children: (0, l.jsx)(x.m, {
                    text: e,
                    children: (0, l.jsx)(E.K, {
                        icon: D.MoreHorizontalIcon,
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
        f,
        x,
        h,
        g,
        j,
        b,
        v,
        { projectId: p, installScope: y, restoreDisabled: C, onRestoreVersion: k, transitionState: S, onClose: w } = t,
        [E, D] = n.useState("versions"),
        {
            sharedDatabase: B,
            versions: R,
            databases: F,
            previewBackups: G,
            previewBackupsLoading: Y,
            refreshAllBackups: q,
            versionTitles: O,
        } = ((a = (e = n.useMemo(() => ("user" === y ? ["stable"] : ["stable", "preview"]), [y])).includes("preview")),
        (i = I(n.useCallback(() => (0, T.Du)(p), [p]))),
        (s = I(
            n.useCallback(() => {
                var t;
                return (
                    (t = "stable"),
                    Promise.all([(0, T.DM)(p, t), (0, T.ms)(p, t)]).then((t) => {
                        let [e, a] = t;
                        return { points: e, window: a };
                    })
                );
            }, [p]),
        )),
        (r = I(n.useCallback(() => (a ? (0, T.DM)(p, "preview") : Promise.resolve(z)), [p, a]))),
        (u = I(n.useCallback(() => (a ? (0, T.ms)(p, "preview") : Promise.resolve(null)), [p, a]))),
        (m = s.refresh),
        (f = r.refresh),
        (x = u.refresh),
        (h = n.useCallback(() => {
            (m(), f(), x());
        }, [m, f, x])),
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
            if ("loaded" === j.status) for (let e of j.data.entries) t.set(e.sha, (0, M.T4)(e.subject).short);
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
        X = (0, N.u)(p),
        $ = n.useCallback(
            (t, e) => {
                (w(), k(t, e));
            },
            [w, k],
        ),
        U = n.useCallback(
            (t, e) => {
                K({
                    projectId: p,
                    environment: t.environment,
                    targetMs: e,
                    execute: () => (0, T.$D)(p, t.id),
                    onSettled: q,
                });
            },
            [p, q],
        );
    return (0, l.jsxs)(o.a, {
        transitionState: S,
        onClose: w,
        size: "md",
        title: V.intl.string(L.default["3hIVou"]),
        actions: [],
        children: [
            (0, l.jsxs)(P.V, {
                type: "top",
                selectedItem: E,
                onItemSelect: D,
                "aria-label": V.intl.string(L.default["/2GnYy"]),
                children: [
                    (0, l.jsx)(P.V.Item, { id: "versions", children: V.intl.string(L.default.aEg2bh) }),
                    (0, l.jsx)(P.V.Item, { id: "database", children: V.intl.string(L.default["GSu/n6"]) }),
                ],
            }),
            (0, l.jsx)(P.V.Panel, {
                id: E,
                className: A.nd,
                children:
                    "versions" === E
                        ? (0, l.jsx)(H, {
                              versions: R.state,
                              previewBackups: G,
                              restoreDisabled: C || Y || X,
                              onRetry: R.retry,
                              onRestore: $,
                          })
                        : (0, l.jsxs)(d.B, {
                              gap: 24,
                              children: [
                                  (0, l.jsx)(c.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: V.intl.formatToPlainString(L.default.ptsHZu, { days: 30 }),
                                  }),
                                  F.map((t) =>
                                      (0, l.jsx)(
                                          W,
                                          {
                                              projectId: p,
                                              database: t,
                                              sharedDatabase: B,
                                              versionTitles: O,
                                              busy: X,
                                              onRestoreBackup: U,
                                              onSettled: q,
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
