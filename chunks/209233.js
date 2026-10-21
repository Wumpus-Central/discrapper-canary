a.d(e, { default: () => ti });
var n = a(477900),
    l = a(582128),
    s = a(594247),
    i = a(620409),
    r = a(314116),
    d = a(189213),
    o = a(331322),
    u = a(297264),
    c = a(834730),
    x = a(821609),
    m = a(289873),
    f = a(866665),
    h = a(237528),
    g = a(858899),
    j = a(95477),
    v = a(441349),
    p = a(192308),
    b = a(123292),
    y = a(265872),
    C = a(980707),
    w = a(477782),
    k = a(408278),
    S = a(365199),
    E = a(761508),
    P = a(502707),
    T = a(128761),
    N = a(395592),
    M = a(12177),
    D = a(967008);
function I(t) {
    let [e, a] = l.useState(0),
        [n, s] = l.useState(null);
    l.useEffect(() => {
        let e = !1;
        return (
            t().then(
                (a) => {
                    e || s({ load: t, state: { status: "loaded", data: a, nowMs: Date.now() } });
                },
                () => {
                    e || s({ load: t, state: { status: "failed" } });
                },
            ),
            () => {
                e = !0;
            }
        );
    }, [t, e]);
    let i = l.useCallback(() => {
            (s(null), a((t) => t + 1));
        }, []),
        r = l.useCallback(() => a((t) => t + 1), []);
    return { state: null != n && n.load === t ? n.state : { status: "loading" }, retry: i, refresh: r };
}
let B = [];
var z = a(908492);
(a(134528), a(947204));
var L = a(536637),
    $ = a.n(L),
    H = a(688954);
async function A(t, e) {
    let a = await (0, H.h)(t, "/agent/publish-history", { query: null == e ? void 0 : { before: e } });
    if (!a.ok) throw Error(`publish history failed (${a.status})`);
    return await a.json();
}
async function O(t, e) {
    let a = await (0, H.h)(t, `/agent/publish-history/${encodeURIComponent(e)}/notes`, { method: "POST" });
    if (!a.ok) throw Error(`publish history notes failed (${a.status})`);
    return (await a.json()).notes;
}
var R = a(248675),
    V = a(105292),
    q = a(131270),
    G = a(165648);
function K(t) {
    let e,
        a,
        s,
        { projectId: i, id: r, notesCache: d } = t,
        { state: u, retry: m } =
            ((e = `${i}/${r}`),
            (a = I(
                l.useCallback(() => {
                    let t = d.get(e);
                    if (t?.status === "loaded") return Promise.resolve(t.data);
                    if (t?.status === "loading") return t.promise;
                    let a = O(i, r).then(
                        (t) => (d.set(e, { status: "loaded", data: t, nowMs: Date.now() }), t),
                        (t) => {
                            throw (d.delete(e), t);
                        },
                    );
                    return (d.set(e, { status: "loading", promise: a }), a);
                }, [i, r, d, e]),
            )),
            (s = d.get(e)),
            { ...a, state: s?.status === "loaded" ? s : a.state });
    if ("failed" === u.status)
        return (0, n.jsxs)(o.B, {
            gap: 8,
            children: [
                (0, n.jsx)(c.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: V.intl.string(R.default.cBIaeW),
                }),
                (0, n.jsx)(x.$, {
                    variant: "secondary",
                    size: "sm",
                    text: V.intl.string(R.default.HOuQ9H),
                    onClick: m,
                }),
            ],
        });
    let f = "loaded" === u.status ? u.data : null;
    return (0, n.jsx)("div", {
        role: "status",
        className: q.Q2,
        children: (0, n.jsx)(c.E, {
            variant: "text-sm/normal",
            className: G.PT,
            children:
                "loading" === u.status
                    ? V.intl.string(R.default["LmWLc+"])
                    : null == f
                      ? V.intl.string(R.default.hcrQOo)
                      : "" === f
                        ? V.intl.string(R.default["0bDcBs"])
                        : (0, z.U)(f, !0, { allowList: !0, allowHeading: !0, allowLinks: !1 }),
        }),
    });
}
let Q = l.memo(function (t) {
    var e;
    let { projectId: a, entry: s, notesCache: i } = t,
        [r, d] = l.useState(!1),
        u = l.useId(),
        m = ((e = s.publishedAt), V.intl.formatToPlainString(R.default["/spQzC"], { date: $()(e).format("LLL") }));
    return (0, n.jsx)("li", {
        className: q.f_,
        children: (0, n.jsxs)(o.B, {
            gap: 12,
            children: [
                (0, n.jsx)(c.E, { variant: "text-md/medium", children: m }),
                (0, n.jsx)(x.$, {
                    variant: "secondary",
                    size: "sm",
                    text: V.intl.string(r ? R.default["Qro2x/"] : R.default.ufHcsq),
                    "aria-label": V.intl.formatToPlainString(R.default["M9L+3I"], { title: m }),
                    "aria-expanded": r,
                    "aria-controls": u,
                    onClick: () => d((t) => !t),
                }),
                (0, n.jsx)("div", {
                    id: u,
                    hidden: !r,
                    children: r ? (0, n.jsx)(K, { projectId: a, id: s.id, notesCache: i }) : null,
                }),
            ],
        }),
    });
});
function W(t) {
    let { projectId: e } = t,
        a = (function (t) {
            let e = l.useMemo(() => new Map(), []),
                [a, n] = l.useState([null]),
                s = a.at(-1) ?? null,
                i = I(l.useCallback(() => A(t, s), [t, s])),
                r = "loaded" === i.state.status ? i.state.data.nextCursor : null;
            return {
                state: i.state,
                notesCache: e,
                page: a.length,
                hasPrevious: a.length > 1,
                hasNext: null != r,
                previous: () => n((t) => (t.length > 1 ? t.slice(0, -1) : t)),
                next: () => {
                    null != r && n((t) => [...t, r]);
                },
                retry: () => {
                    (n([null]), i.retry());
                },
            };
        })(e),
        { state: s } = a;
    return "loading" === s.status
        ? (0, n.jsx)(c.E, { variant: "text-sm/normal", children: V.intl.string(R.default["d/Wf8N"]) })
        : "failed" === s.status
          ? (0, n.jsxs)(o.B, {
                gap: 12,
                children: [
                    (0, n.jsx)(c.E, { variant: "text-sm/normal", children: V.intl.string(R.default.TzCJWI) }),
                    (0, n.jsx)(x.$, { variant: "secondary", text: V.intl.string(R.default.HOuQ9H), onClick: a.retry }),
                ],
            })
          : 0 === s.data.entries.length
            ? (0, n.jsx)(c.E, {
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children: V.intl.string(R.default["19L92G"]),
              })
            : (0, n.jsxs)(o.B, {
                  gap: 16,
                  children: [
                      (0, n.jsx)(c.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: V.intl.string(R.default.Kzt1rI),
                      }),
                      (0, n.jsx)("ul", {
                          className: q.jO,
                          children: s.data.entries.map((t) =>
                              (0, n.jsx)(Q, { projectId: e, entry: t, notesCache: a.notesCache }, t.id),
                          ),
                      }),
                      (0, n.jsxs)("nav", {
                          className: q.X$,
                          "aria-label": V.intl.string(R.default.uMdX5T),
                          children: [
                              (0, n.jsx)(x.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: V.intl.string(R.default["4un98A"]),
                                  disabled: !a.hasPrevious,
                                  onClick: a.previous,
                              }),
                              (0, n.jsx)(c.E, {
                                  variant: "text-sm/normal",
                                  children: V.intl.formatToPlainString(R.default["54samz"], { page: a.page }),
                              }),
                              (0, n.jsx)(x.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: V.intl.string(R.default.HqheLL),
                                  disabled: !a.hasNext,
                                  onClick: a.next,
                              }),
                          ],
                      }),
                  ],
              });
}
var X = a(155899),
    Y = a(796734);
function F(t) {
    let { title: e, body: a, onRetry: l } = t;
    return (0, n.jsx)("div", {
        className: Y.wk,
        role: null != l ? "alert" : void 0,
        children: (0, n.jsxs)(o.B, {
            gap: 8,
            align: "center",
            children: [
                (0, n.jsx)(u.D, { variant: "heading-md/semibold", children: e }),
                (0, n.jsx)(c.E, { variant: "text-sm/normal", color: "text-muted", children: a }),
                null != l
                    ? (0, n.jsx)(x.$, {
                          variant: "secondary",
                          size: "sm",
                          text: V.intl.string(R.default.HOuQ9H),
                          onClick: l,
                      })
                    : null,
            ],
        }),
    });
}
function _() {
    return (0, n.jsx)("div", { className: Y.wk, children: (0, n.jsx)(m.y, {}) });
}
function J(t) {
    let { items: e, getMs: a, nowMs: l, renderItem: s } = t;
    return (0, n.jsx)(o.B, {
        gap: 16,
        children: (0, T.v9)(e, a, l).map((t) =>
            (0, n.jsxs)(
                "section",
                {
                    "aria-label": t.label ?? void 0,
                    children: [
                        null != t.label
                            ? (0, n.jsx)(c.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  className: Y.$l,
                                  children: t.label,
                              })
                            : null,
                        (0, n.jsx)("ul", { className: Y.Ge, children: t.items.map(s) }),
                    ],
                },
                t.key,
            ),
        ),
    });
}
function U(t) {
    let { title: e, fullTitle: a, muted: l = !1, meta: s, trailing: i } = t;
    return (0, n.jsxs)("li", {
        className: Y.nM,
        children: [
            (0, n.jsx)("div", {
                className: Y.qg,
                children: (0, n.jsxs)(o.B, {
                    gap: 4,
                    children: [
                        (0, n.jsx)(f.m, {
                            text: null != a && a !== e ? a : null,
                            children: (0, n.jsx)(c.E, {
                                variant: "text-md/medium",
                                color: l ? "text-muted" : "text-default",
                                children: e,
                            }),
                        }),
                        (0, n.jsx)(o.B, { direction: "horizontal", gap: 8, align: "center", children: s }),
                    ],
                }),
            }),
            i,
        ],
    });
}
function Z(t) {
    let { versions: e, previewBackups: a, restoreDisabled: l, showsPublishState: s, onRetry: i, onRestore: r } = t;
    if ("loading" === e.status) return (0, n.jsx)(_, {});
    if ("failed" === e.status)
        return (0, n.jsx)(F, {
            title: V.intl.string(R.default.Xduqn2),
            body: V.intl.string(R.default.TOFCh3),
            onRetry: i,
        });
    let { entries: d, publishedSha: o } = e.data,
        u = (0, T.FA)(e.data);
    return 0 === d.length
        ? (0, n.jsx)(F, { title: V.intl.string(R.default.MczNnb), body: V.intl.string(R.default["8L/U2T"]) })
        : (0, n.jsx)(J, {
              items: d,
              getMs: (t) => (0, T.YD)(t.authoredAt),
              nowMs: e.nowMs,
              renderItem: (t) => {
                  let e = (0, T.T4)(t.subject, !0 === t.restored),
                      i = (0, T.YD)(t.authoredAt),
                      d = t.sha === u;
                  return (0, n.jsx)(
                      U,
                      {
                          title: e.short,
                          fullTitle: e.full,
                          meta: (0, n.jsxs)(n.Fragment, {
                              children: [
                                  null != i
                                      ? (0, n.jsx)(c.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: (0, T.nY)(i),
                                        })
                                      : null,
                                  s && d
                                      ? (0, n.jsx)(h.v, {
                                            text: V.intl.string(R.default.KVnLPd),
                                            variant: "blurpleLight",
                                        })
                                      : null,
                                  s && t.sha === o
                                      ? (0, n.jsx)(h.v, {
                                            text: V.intl.string(R.default.qulPhb),
                                            variant: "greenLight",
                                        })
                                      : null,
                              ],
                          }),
                          trailing:
                              d || !1 === t.restorable
                                  ? null
                                  : (0, n.jsx)(x.$, {
                                        variant: "secondary",
                                        size: "sm",
                                        text: V.intl.string(R.default["1NAPyC"]),
                                        "aria-label": V.intl.formatToPlainString(R.default["2KgEnm"], {
                                            title: e.short,
                                        }),
                                        disabled: l,
                                        onClick: () =>
                                            (0, X.F)({ matchingBackup: (0, T.y0)(t, a), onConfirm: (e) => r(t, e) }),
                                    }),
                      },
                      t.sha,
                  );
              },
          });
}
function tt(t) {
    let { projectId: e, environment: a, targetMs: n, execute: l, onSettled: s } = t,
        i = (0, T.Nc)(a, n);
    (0, r.A)({
        title: i.title,
        subtitle: i.body,
        confirmText: i.confirmText,
        variant: i.critical ? "critical" : "primary",
        onConfirm: async (t) => {
            let a = await (0, D.b)(e, l);
            if (a.ok) {
                ((0, g.P0)({ text: V.intl.string(R.default.yHchfE), variant: "success" }), s());
                return;
            }
            if ("unconfirmed" === a.code) {
                ((0, g.P0)({ text: V.intl.string(R.default.iqN7YA), variant: "critical" }), s());
                return;
            }
            throw (
                "expired" === a.code && s(),
                t(V.intl.string("expired" === a.code ? R.default.a5pfx4 : R.default.uyjFNZ)),
                Error(`data rewind ${a.code}`)
            );
        },
    });
}
function te(t) {
    let { projectId: e, environment: a, onSaved: s, transitionState: i, onClose: r } = t,
        [o, u] = l.useState(""),
        [c, x] = l.useState(!1),
        [m, f] = l.useState(!1);
    return (0, n.jsx)(d.a, {
        transitionState: i,
        onClose: r,
        title: V.intl.string(R.default.qywOto),
        subtitle: V.intl.formatToPlainString(R.default.sXGNm5, { environment: (0, T.K1)(a) }),
        notice: m ? { message: V.intl.string(R.default.TOxYEF), type: "critical", role: "alert" } : void 0,
        actions: [
            { text: V.intl.string(V.t["ETE/oC"]), variant: "secondary", onClick: r },
            {
                text: V.intl.string(R.default["5/xCdF"]),
                variant: "primary",
                loading: c,
                onClick: function () {
                    (x(!0),
                        f(!1),
                        (0, N.x)(e, () => (0, M._m)(e, a, o))
                            .then((t) => {
                                if (null == t) throw Error("database busy");
                            })
                            .then(
                                () => {
                                    ((0, g.P0)({ text: V.intl.string(R.default.OoHJfv), variant: "success" }),
                                        s(),
                                        r());
                                },
                                () => {
                                    (x(!1), f(!0));
                                },
                            ));
                },
            },
        ],
        children: (0, n.jsx)(j.k, {
            label: V.intl.string(R.default.WKmhsD),
            value: o,
            onChange: u,
            maxLength: 200,
            disabled: c,
        }),
    });
}
function ta(t) {
    return (0, s.tR)((0, s.Bq)(new Date(t), (0, i.Xj)()));
}
function tn(t) {
    let { projectId: e, environment: a, restoreWindow: r, onSettled: o, transitionState: u, onClose: c } = t,
        [x] = l.useState(() => Date.now()),
        [m, f] = l.useState(null),
        h = r.earliestRestoreTimestampMs,
        g = null != m ? m.toDate((0, i.Xj)()).getTime() : null,
        j = null != g && g >= h && g <= x;
    return (0, n.jsx)(d.a, {
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
                        tt({
                            projectId: e,
                            environment: a,
                            targetMs: g,
                            execute: () => (0, M.dz)(e, a, g),
                            onSettled: o,
                        }));
                },
            },
        ],
        children: (0, n.jsx)(v.l, {
            label: V.intl.string(R.default["8lOVBi"]),
            granularity: "minute",
            value: m,
            onChange: (t) => f(null == t ? null : (0, s.tR)(t)),
            minValue: ta(h),
            maxValue: ta(x),
            errorMessage: null == g || j ? void 0 : V.intl.formatToPlainString(R.default["E+5VOP"], { days: 30 }),
        }),
    });
}
function tl(t) {
    let e,
        {
            projectId: a,
            database: s,
            sharedDatabase: i,
            versionTitles: r,
            busy: d,
            onRestoreBackup: m,
            onSettled: f,
        } = t,
        [h, g] = l.useState(!1),
        j = l.useId(),
        { environment: v, backups: y } = s,
        C = (0, T.u4)(v, i),
        w = "loaded" === y.state.status ? y.state.data.window : null,
        k = y.state;
    if ("loading" === k.status) e = (0, n.jsx)(_, {});
    else if ("failed" === k.status)
        e = (0, n.jsx)(F, {
            title: V.intl.string(R.default.Xduqn2),
            body: V.intl.string(R.default["VGh9H+"]),
            onRetry: y.retry,
        });
    else if (0 === k.data.points.length)
        e = (0, n.jsx)(c.E, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: V.intl.string(R.default.G2DTWl),
        });
    else {
        let { shown: t, collapsible: a } = (0, T.KA)(k.data.points, h);
        e = (0, n.jsxs)(o.B, {
            gap: 4,
            children: [
                (0, n.jsx)("ul", {
                    className: Y.Ge,
                    children: t.map((t) => {
                        let e = (0, T.fd)(t, r),
                            { restoreToMs: a } = e;
                        return (0, n.jsx)(
                            U,
                            {
                                title: e.title,
                                muted: null == a,
                                meta: (0, n.jsx)(c.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: e.detail,
                                }),
                                trailing:
                                    null == a
                                        ? (0, n.jsx)(c.E, {
                                              variant: "text-sm/normal",
                                              color: "text-muted",
                                              children: V.intl.string(R.default.zPhIa9),
                                          })
                                        : (0, n.jsx)(x.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: V.intl.string(R.default.K3Q49G),
                                              "aria-label": V.intl.formatToPlainString(R.default["hXP0m/"], {
                                                  title: e.title,
                                              }),
                                              disabled: d,
                                              onClick: () => m(t, a),
                                          }),
                            },
                            t.id,
                        );
                    }),
                }),
                a
                    ? (0, n.jsx)(o.B, {
                          align: "start",
                          children: (0, n.jsx)(b.Q, {
                              text: V.intl.string(h ? R.default.GgleNC : R.default.qCWKAE),
                              onClick: () => g((t) => !t),
                          }),
                      })
                    : null,
            ],
        });
    }
    return (0, n.jsx)("section", {
        "aria-labelledby": j,
        className: Y.$H,
        children: (0, n.jsxs)(o.B, {
            gap: 12,
            children: [
                (0, n.jsxs)(o.B, {
                    direction: "horizontal",
                    justify: "space-between",
                    align: "center",
                    gap: 12,
                    children: [
                        (0, n.jsx)(u.D, { variant: "heading-lg/semibold", id: j, children: C }),
                        (0, n.jsx)(ts, {
                            label: V.intl.formatToPlainString(R.default.tmSDLN, { database: C }),
                            saveDisabled: "failed" === k.status || d,
                            restoreDisabled: null == w || d,
                            onSaveBackup: function () {
                                return (0, p.openModalLazy)(() =>
                                    Promise.resolve((t) =>
                                        (0, n.jsx)(te, { ...t, projectId: a, environment: v, onSaved: f }),
                                    ),
                                );
                            },
                            onRestoreToTime: function () {
                                null != w &&
                                    (0, p.openModalLazy)(() =>
                                        Promise.resolve((t) =>
                                            (0, n.jsx)(tn, {
                                                ...t,
                                                projectId: a,
                                                environment: v,
                                                restoreWindow: w,
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
function ts(t) {
    let { label: e, saveDisabled: a, restoreDisabled: s, onSaveBackup: i, onRestoreToTime: r } = t,
        d = l.useRef(null);
    return (0, n.jsx)(y.Y, {
        targetElementRef: d,
        position: "bottom",
        align: "right",
        animation: y.Y.Animation.NONE,
        renderPopout: (t) => {
            let { closePopout: l } = t;
            return (0, n.jsxs)(C.W, {
                navId: "conjure-history-database-options",
                "aria-label": e,
                onClose: l,
                onSelect: l,
                children: [
                    (0, n.jsx)(w.Dr, {
                        id: "back-up-now",
                        label: V.intl.string(R.default.uNd2Je),
                        disabled: a,
                        action: i,
                    }),
                    (0, n.jsx)(w.Dr, {
                        id: "restore-to-time",
                        label: V.intl.string(R.default.Xi6pDt),
                        disabled: s,
                        action: r,
                    }),
                ],
            });
        },
        children: (t, a) => {
            let { onClick: l } = t,
                { isShown: s } = a;
            return (0, n.jsx)("div", {
                ref: d,
                children: (0, n.jsx)(f.m, {
                    text: e,
                    children: (0, n.jsx)(k.K, {
                        icon: S.MoreHorizontalIcon,
                        variant: "secondary",
                        size: "sm",
                        "aria-label": e,
                        "aria-haspopup": "menu",
                        "aria-expanded": s,
                        onClick: l,
                    }),
                }),
            });
        },
    });
}
function ti(t) {
    let e,
        a,
        s,
        i,
        r,
        u,
        x,
        m,
        f,
        h,
        g,
        j,
        v,
        p,
        { projectId: b, installScope: y, restoreDisabled: C, onRestoreVersion: w, transitionState: k, onClose: S } = t,
        [D, z] = l.useState("versions"),
        {
            sharedDatabase: L,
            versions: $,
            databases: H,
            previewBackups: A,
            previewBackupsLoading: O,
            refreshAllBackups: q,
            versionTitles: G,
        } = ((a = (e = l.useMemo(() => ("user" === y ? ["stable"] : ["stable", "preview"]), [y])).includes("preview")),
        (s = I(l.useCallback(() => (0, M.Du)(b), [b]))),
        (i = I(
            l.useCallback(() => {
                var t;
                return (
                    (t = "stable"),
                    Promise.all([(0, M.DM)(b, t), (0, M.ms)(b, t)]).then((t) => {
                        let [e, a] = t;
                        return { points: e, window: a };
                    })
                );
            }, [b]),
        )),
        (r = I(l.useCallback(() => (a ? (0, M.DM)(b, "preview") : Promise.resolve(B)), [b, a]))),
        (u = I(l.useCallback(() => (a ? (0, M.ms)(b, "preview") : Promise.resolve(null)), [b, a]))),
        (x = i.refresh),
        (m = r.refresh),
        (f = u.refresh),
        (h = l.useCallback(() => {
            (x(), m(), f());
        }, [x, m, f])),
        (g = e.map((t) => {
            var e, a;
            let n, l;
            return {
                environment: t,
                backups:
                    "preview" === t
                        ? ((e = r),
                          (a = u),
                          (n = e.state),
                          (l = a.state),
                          {
                              state:
                                  "failed" === n.status || "failed" === l.status
                                      ? { status: "failed" }
                                      : "loading" === n.status || "loading" === l.status
                                        ? { status: "loading" }
                                        : null == l.data
                                          ? { status: "failed" }
                                          : {
                                                status: "loaded",
                                                data: { points: n.data, window: l.data },
                                                nowMs: n.nowMs,
                                            },
                              retry: function () {
                                  (e.retry(), a.retry());
                              },
                              refresh: function () {
                                  (e.refresh(), a.refresh());
                              },
                          })
                        : i,
            };
        })),
        (j = s.state),
        (v = l.useMemo(() => {
            let t = new Map();
            if ("loaded" === j.status) for (let e of j.data.entries) t.set(e.sha, (0, T.T4)(e.subject).short);
            return t;
        }, [j])),
        {
            sharedDatabase: !a,
            versions: s,
            databases: g,
            previewBackups: "loaded" === (p = r.state).status ? p.data : B,
            previewBackupsLoading: "loading" === p.status,
            refreshAllBackups: h,
            versionTitles: v,
        }),
        K = (0, N.u)(b),
        Q = (0, P.A)(b),
        X = l.useCallback(
            (t, e) => {
                (S(), w(t, e));
            },
            [S, w],
        ),
        F = l.useCallback(
            (t, e) => {
                tt({
                    projectId: b,
                    environment: t.environment,
                    targetMs: e,
                    execute: () => (0, M.$D)(b, t.id),
                    onSettled: q,
                });
            },
            [b, q],
        );
    return (0, n.jsxs)(d.a, {
        transitionState: k,
        onClose: S,
        size: "md",
        title: V.intl.string(R.default["3hIVou"]),
        actions: [],
        children: [
            (0, n.jsxs)(E.V, {
                type: "top",
                selectedItem: D,
                onItemSelect: z,
                "aria-label": V.intl.string(R.default["/2GnYy"]),
                children: [
                    (0, n.jsx)(E.V.Item, { id: "versions", children: V.intl.string(R.default.aEg2bh) }),
                    (0, n.jsx)(E.V.Item, { id: "database", children: V.intl.string(R.default["GSu/n6"]) }),
                    (0, n.jsx)(E.V.Item, { id: "publishes", children: V.intl.string(R.default["656Avb"]) }),
                ],
            }),
            (0, n.jsx)(E.V.Panel, {
                id: D,
                className: Y.nd,
                children:
                    "versions" === D
                        ? (0, n.jsx)(Z, {
                              versions: $.state,
                              previewBackups: A,
                              restoreDisabled: C || O || K,
                              showsPublishState: !Q,
                              onRetry: $.retry,
                              onRestore: X,
                          })
                        : "publishes" === D
                          ? (0, n.jsx)(W, { projectId: b }, b)
                          : (0, n.jsxs)(o.B, {
                                gap: 24,
                                children: [
                                    (0, n.jsx)(c.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: V.intl.formatToPlainString(R.default.ptsHZu, { days: 30 }),
                                    }),
                                    H.map((t) =>
                                        (0, n.jsx)(
                                            tl,
                                            {
                                                projectId: b,
                                                database: t,
                                                sharedDatabase: L,
                                                versionTitles: G,
                                                busy: K,
                                                onRestoreBackup: F,
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
