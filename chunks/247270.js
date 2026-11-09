a.d(e, { default: () => tr });
var n = a(477900),
    l = a(582128),
    s = a(594247),
    i = a(70254),
    r = a(314116),
    d = a(189213),
    o = a(331322),
    u = a(534514),
    c = a(834730),
    m = a(821609),
    f = a(289873),
    h = a(866665),
    x = a(237528),
    g = a(858899),
    j = a(95477),
    b = a(441349),
    v = a(192308),
    p = a(123292),
    y = a(265872),
    C = a(165862),
    w = a(477782),
    k = a(408278),
    S = a(365199),
    E = a(761508),
    P = a(855986),
    T = a(260498),
    N = a(951178);
function M(t) {
    return (0, P.bG)([T.Ay], () => {
        let e = T.Ay.getProject(t);
        return null == e || (0, N._7)(e);
    });
}
var D = a(128761),
    I = a(395592),
    B = a(503922),
    z = a(967008);
function L(t) {
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
let $ = [];
var H = a(908492);
(a(134528), a(947204));
var A = a(536637),
    O = a.n(A),
    R = a(688954),
    V = a(191850),
    q = a(792996),
    G = a(131270),
    K = a(165648);
function Q(t) {
    let e,
        a,
        s,
        { projectId: i, id: r, notesCache: d } = t,
        { state: u, retry: f } =
            ((e = `${i}/${r}`),
            (a = L(
                l.useCallback(() => {
                    let t = d.get(e);
                    if (t?.status === "loaded") return Promise.resolve(t.data);
                    if (t?.status === "loading") return t.promise;
                    let a = (async function (t, e) {
                        let a = await (0, R.h)(t, `/agent/publish-history/${encodeURIComponent(e)}/notes`, {
                            method: "POST",
                        });
                        if (!a.ok) throw Error(`publish history notes failed (${a.status})`);
                        return (await a.json()).notes;
                    })(i, r).then(
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
                    variant: "body-sm/normal",
                    color: "text-muted",
                    children: q.intl.string(V.default.cBIaeW),
                }),
                (0, n.jsx)(m.$, {
                    variant: "secondary",
                    size: "sm",
                    text: q.intl.string(V.default.HOuQ9H),
                    onClick: f,
                }),
            ],
        });
    let h = "loaded" === u.status ? u.data : null;
    return (0, n.jsx)("div", {
        role: "status",
        className: G.Q2,
        children: (0, n.jsx)(c.E, {
            variant: "body-sm/normal",
            className: K.PT,
            children:
                "loading" === u.status
                    ? q.intl.string(V.default["LmWLc+"])
                    : null == h
                      ? q.intl.string(V.default.hcrQOo)
                      : "" === h
                        ? q.intl.string(V.default["0bDcBs"])
                        : (0, H.U)(h, !0, { allowList: !0, allowHeading: !0, allowLinks: !1 }),
        }),
    });
}
let W = l.memo(function (t) {
    var e;
    let { projectId: a, entry: s, notesCache: i } = t,
        [r, d] = l.useState(!1),
        u = l.useId(),
        f = ((e = s.publishedAt), q.intl.formatToPlainString(V.default["/spQzC"], { date: O()(e).format("LLL") }));
    return (0, n.jsx)("li", {
        className: G.f_,
        children: (0, n.jsxs)(o.B, {
            gap: 12,
            children: [
                (0, n.jsx)(c.E, { variant: "body-md/medium", children: f }),
                (0, n.jsx)(m.$, {
                    variant: "secondary",
                    size: "sm",
                    text: q.intl.string(r ? V.default["Qro2x/"] : V.default.ufHcsq),
                    "aria-label": q.intl.formatToPlainString(V.default["M9L+3I"], { title: f }),
                    "aria-expanded": r,
                    "aria-controls": u,
                    onClick: () => d((t) => !t),
                }),
                (0, n.jsx)("div", {
                    id: u,
                    hidden: !r,
                    children: r ? (0, n.jsx)(Q, { projectId: a, id: s.id, notesCache: i }) : null,
                }),
            ],
        }),
    });
});
function X(t) {
    let { projectId: e } = t,
        a = (function (t) {
            let e = l.useMemo(() => new Map(), []),
                [a, n] = l.useState([null]),
                s = a.at(-1) ?? null,
                i = L(
                    l.useCallback(
                        () =>
                            (async function (t, e) {
                                let a = await (0, R.h)(t, "/agent/publish-history", {
                                    query: null == e ? void 0 : { before: e },
                                });
                                if (!a.ok) throw Error(`publish history failed (${a.status})`);
                                return await a.json();
                            })(t, s),
                        [t, s],
                    ),
                ),
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
        ? (0, n.jsx)(c.E, { variant: "body-sm/normal", children: q.intl.string(V.default["d/Wf8N"]) })
        : "failed" === s.status
          ? (0, n.jsxs)(o.B, {
                gap: 12,
                children: [
                    (0, n.jsx)(c.E, { variant: "body-sm/normal", children: q.intl.string(V.default.TzCJWI) }),
                    (0, n.jsx)(m.$, { variant: "secondary", text: q.intl.string(V.default.HOuQ9H), onClick: a.retry }),
                ],
            })
          : 0 === s.data.entries.length
            ? (0, n.jsx)(c.E, {
                  variant: "body-sm/normal",
                  color: "text-muted",
                  children: q.intl.string(V.default["19L92G"]),
              })
            : (0, n.jsxs)(o.B, {
                  gap: 16,
                  children: [
                      (0, n.jsx)(c.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: q.intl.string(V.default.Kzt1rI),
                      }),
                      (0, n.jsx)("ul", {
                          className: G.jO,
                          children: s.data.entries.map((t) =>
                              (0, n.jsx)(W, { projectId: e, entry: t, notesCache: a.notesCache }, t.id),
                          ),
                      }),
                      (0, n.jsxs)("nav", {
                          className: G.X$,
                          "aria-label": q.intl.string(V.default.uMdX5T),
                          children: [
                              (0, n.jsx)(m.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: q.intl.string(V.default["4un98A"]),
                                  disabled: !a.hasPrevious,
                                  onClick: a.previous,
                              }),
                              (0, n.jsx)(c.E, {
                                  variant: "body-sm/normal",
                                  children: q.intl.formatToPlainString(V.default["54samz"], { page: a.page }),
                              }),
                              (0, n.jsx)(m.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: q.intl.string(V.default.HqheLL),
                                  disabled: !a.hasNext,
                                  onClick: a.next,
                              }),
                          ],
                      }),
                  ],
              });
}
var Y = a(155899),
    F = a(796734);
function _(t) {
    let { title: e, body: a, onRetry: l } = t;
    return (0, n.jsx)("div", {
        className: F.wk,
        role: null != l ? "alert" : void 0,
        children: (0, n.jsxs)(o.B, {
            gap: 8,
            align: "center",
            children: [
                (0, n.jsx)(u.D, { variant: "heading-sm/semibold", children: e }),
                (0, n.jsx)(c.E, { variant: "body-sm/normal", color: "text-muted", children: a }),
                null != l
                    ? (0, n.jsx)(m.$, {
                          variant: "secondary",
                          size: "sm",
                          text: q.intl.string(V.default.HOuQ9H),
                          onClick: l,
                      })
                    : null,
            ],
        }),
    });
}
function J() {
    return (0, n.jsx)("div", { className: F.wk, children: (0, n.jsx)(f.y, {}) });
}
function U(t) {
    let { items: e, getMs: a, nowMs: l, renderItem: s } = t;
    return (0, n.jsx)(o.B, {
        gap: 16,
        children: (0, D.v9)(e, a, l).map((t) =>
            (0, n.jsxs)(
                "section",
                {
                    "aria-label": t.label ?? void 0,
                    children: [
                        null != t.label
                            ? (0, n.jsx)(c.E, {
                                  variant: "body-xs/semibold",
                                  color: "text-muted",
                                  className: F.$l,
                                  children: t.label,
                              })
                            : null,
                        (0, n.jsx)("ul", { className: F.Ge, children: t.items.map(s) }),
                    ],
                },
                t.key,
            ),
        ),
    });
}
function Z(t) {
    let { title: e, fullTitle: a, muted: l = !1, meta: s, trailing: i } = t;
    return (0, n.jsxs)("li", {
        className: F.nM,
        children: [
            (0, n.jsx)("div", {
                className: F.qg,
                children: (0, n.jsxs)(o.B, {
                    gap: 4,
                    children: [
                        (0, n.jsx)(h.m, {
                            text: null != a && a !== e ? a : null,
                            children: (0, n.jsx)(c.E, {
                                variant: "body-md/medium",
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
function tt(t) {
    let { versions: e, previewBackups: a, restoreDisabled: l, showsPublishState: s, onRetry: i, onRestore: r } = t;
    if ("loading" === e.status) return (0, n.jsx)(J, {});
    if ("failed" === e.status)
        return (0, n.jsx)(_, {
            title: q.intl.string(V.default.Xduqn2),
            body: q.intl.string(V.default.TOFCh3),
            onRetry: i,
        });
    let { entries: d, publishedSha: o } = e.data,
        u = (0, D.FA)(e.data);
    return 0 === d.length
        ? (0, n.jsx)(_, { title: q.intl.string(V.default.MczNnb), body: q.intl.string(V.default["8L/U2T"]) })
        : (0, n.jsx)(U, {
              items: d,
              getMs: (t) => (0, D.YD)(t.authoredAt),
              nowMs: e.nowMs,
              renderItem: (t) => {
                  let e = (0, D.T4)(t.subject, !0 === t.restored),
                      i = (0, D.YD)(t.authoredAt),
                      d = t.sha === u;
                  return (0, n.jsx)(
                      Z,
                      {
                          title: e.short,
                          fullTitle: e.full,
                          meta: (0, n.jsxs)(n.Fragment, {
                              children: [
                                  null != i
                                      ? (0, n.jsx)(c.E, {
                                            variant: "body-sm/normal",
                                            color: "text-muted",
                                            children: (0, D.nY)(i),
                                        })
                                      : null,
                                  s && d
                                      ? (0, n.jsx)(x.v, {
                                            text: q.intl.string(V.default.KVnLPd),
                                            variant: "blurpleLight",
                                        })
                                      : null,
                                  s && t.sha === o
                                      ? (0, n.jsx)(x.v, {
                                            text: q.intl.string(V.default.qulPhb),
                                            variant: "greenLight",
                                        })
                                      : null,
                              ],
                          }),
                          trailing:
                              d || !1 === t.restorable || null == r
                                  ? null
                                  : (0, n.jsx)(m.$, {
                                        variant: "secondary",
                                        size: "sm",
                                        text: q.intl.string(V.default["1NAPyC"]),
                                        "aria-label": q.intl.formatToPlainString(V.default["2KgEnm"], {
                                            title: e.short,
                                        }),
                                        disabled: l,
                                        onClick: () =>
                                            (0, Y.F)({ matchingBackup: (0, D.y0)(t, a), onConfirm: (e) => r(t, e) }),
                                    }),
                      },
                      t.sha,
                  );
              },
          });
}
function te(t) {
    let { projectId: e, environment: a, targetMs: n, execute: l, onSettled: s } = t,
        i = (0, D.Nc)(a, n);
    (0, r.A)({
        title: i.title,
        subtitle: i.body,
        confirmText: i.confirmText,
        variant: i.critical ? "critical" : "primary",
        onConfirm: async (t) => {
            let a = await (0, z.b)(e, l);
            if (a.ok) {
                ((0, g.P0)({ text: q.intl.string(V.default.yHchfE), variant: "success" }), s());
                return;
            }
            if ("unconfirmed" === a.code) {
                ((0, g.P0)({ text: q.intl.string(V.default.iqN7YA), variant: "critical" }), s());
                return;
            }
            throw (
                "expired" === a.code && s(),
                t(q.intl.string("expired" === a.code ? V.default.a5pfx4 : V.default.uyjFNZ)),
                Error(`data rewind ${a.code}`)
            );
        },
    });
}
function ta(t) {
    let { projectId: e, environment: a, onSaved: s, transitionState: i, onClose: r } = t,
        [o, u] = l.useState(""),
        [c, m] = l.useState(!1),
        [f, h] = l.useState(!1);
    return (0, n.jsx)(d.a, {
        transitionState: i,
        onClose: r,
        title: q.intl.string(V.default.qywOto),
        subtitle: q.intl.formatToPlainString(V.default.sXGNm5, { environment: (0, D.K1)(a) }),
        notice: f ? { message: q.intl.string(V.default.TOxYEF), type: "critical", role: "alert" } : void 0,
        actions: [
            { text: q.intl.string(q.t["ETE/oC"]), variant: "secondary", onClick: r },
            {
                text: q.intl.string(V.default["5/xCdF"]),
                variant: "primary",
                loading: c,
                onClick: function () {
                    (m(!0),
                        h(!1),
                        (0, I.x)(e, () => (0, B._m)(e, a, o))
                            .then((t) => {
                                if (null == t) throw Error("database busy");
                            })
                            .then(
                                () => {
                                    ((0, g.P0)({ text: q.intl.string(V.default.OoHJfv), variant: "success" }),
                                        s(),
                                        r());
                                },
                                () => {
                                    (m(!1), h(!0));
                                },
                            ));
                },
            },
        ],
        children: (0, n.jsx)(j.k, {
            label: q.intl.string(V.default.WKmhsD),
            value: o,
            onChange: u,
            maxLength: 200,
            disabled: c,
        }),
    });
}
function tn(t) {
    return (0, s.tR)((0, s.Bq)(new Date(t), (0, i.Xj)()));
}
function tl(t) {
    let { projectId: e, environment: a, restoreWindow: r, onSettled: o, transitionState: u, onClose: c } = t,
        [m] = l.useState(() => Date.now()),
        [f, h] = l.useState(null),
        x = r.earliestRestoreTimestampMs,
        g = null != f ? f.toDate((0, i.Xj)()).getTime() : null,
        j = null != g && g >= x && g <= m;
    return (0, n.jsx)(d.a, {
        transitionState: u,
        onClose: c,
        title: q.intl.string(V.default.L2iFYN),
        subtitle: q.intl.formatToPlainString(V.default.MbjMdo, { days: 30 }),
        actions: [
            { text: q.intl.string(q.t["ETE/oC"]), variant: "secondary", onClick: c },
            {
                text: q.intl.string(V.default.vzbISt),
                variant: "critical-primary",
                disabled: !j,
                onClick: () => {
                    null != g &&
                        j &&
                        (c(),
                        te({
                            projectId: e,
                            environment: a,
                            targetMs: g,
                            execute: () => (0, B.dz)(e, a, g),
                            onSettled: o,
                        }));
                },
            },
        ],
        children: (0, n.jsx)(b.l, {
            label: q.intl.string(V.default["8lOVBi"]),
            granularity: "minute",
            value: f,
            onChange: (t) => h(null == t ? null : (0, s.tR)(t)),
            minValue: tn(x),
            maxValue: tn(m),
            errorMessage: null == g || j ? void 0 : q.intl.formatToPlainString(V.default["E+5VOP"], { days: 30 }),
        }),
    });
}
function ts(t) {
    let e,
        {
            projectId: a,
            database: s,
            sharedDatabase: i,
            versionTitles: r,
            busy: d,
            onRestoreBackup: f,
            onSettled: h,
        } = t,
        [x, g] = l.useState(!1),
        j = l.useId(),
        { environment: b, backups: y } = s,
        C = (0, D.u4)(b, i),
        w = "loaded" === y.state.status ? y.state.data.window : null,
        k = y.state;
    if ("loading" === k.status) e = (0, n.jsx)(J, {});
    else if ("failed" === k.status)
        e = (0, n.jsx)(_, {
            title: q.intl.string(V.default.Xduqn2),
            body: q.intl.string(V.default["VGh9H+"]),
            onRetry: y.retry,
        });
    else if (0 === k.data.points.length)
        e = (0, n.jsx)(c.E, {
            variant: "body-sm/normal",
            color: "text-muted",
            children: q.intl.string(V.default.G2DTWl),
        });
    else {
        let { shown: t, collapsible: a } = (0, D.KA)(k.data.points, x);
        e = (0, n.jsxs)(o.B, {
            gap: 4,
            children: [
                (0, n.jsx)("ul", {
                    className: F.Ge,
                    children: t.map((t) => {
                        let e = (0, D.fd)(t, r),
                            { restoreToMs: a } = e;
                        return (0, n.jsx)(
                            Z,
                            {
                                title: e.title,
                                muted: null == a,
                                meta: (0, n.jsx)(c.E, {
                                    variant: "body-sm/normal",
                                    color: "text-muted",
                                    children: e.detail,
                                }),
                                trailing:
                                    null == a
                                        ? (0, n.jsx)(c.E, {
                                              variant: "body-sm/normal",
                                              color: "text-muted",
                                              children: q.intl.string(V.default.zPhIa9),
                                          })
                                        : (0, n.jsx)(m.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: q.intl.string(V.default.K3Q49G),
                                              "aria-label": q.intl.formatToPlainString(V.default["hXP0m/"], {
                                                  title: e.title,
                                              }),
                                              disabled: d,
                                              onClick: () => f(t, a),
                                          }),
                            },
                            t.id,
                        );
                    }),
                }),
                a
                    ? (0, n.jsx)(o.B, {
                          align: "start",
                          children: (0, n.jsx)(p.Q, {
                              text: q.intl.string(x ? V.default.GgleNC : V.default.qCWKAE),
                              onClick: () => g((t) => !t),
                          }),
                      })
                    : null,
            ],
        });
    }
    return (0, n.jsx)("section", {
        "aria-labelledby": j,
        className: F.$H,
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
                        (0, n.jsx)(ti, {
                            label: q.intl.formatToPlainString(V.default.tmSDLN, { database: C }),
                            saveDisabled: "failed" === k.status || d,
                            restoreDisabled: null == w || d,
                            onSaveBackup: function () {
                                return (0, v.mM)(() =>
                                    Promise.resolve((t) =>
                                        (0, n.jsx)(ta, { ...t, projectId: a, environment: b, onSaved: h }),
                                    ),
                                );
                            },
                            onRestoreToTime: function () {
                                null != w &&
                                    (0, v.mM)(() =>
                                        Promise.resolve((t) =>
                                            (0, n.jsx)(tl, {
                                                ...t,
                                                projectId: a,
                                                environment: b,
                                                restoreWindow: w,
                                                onSettled: h,
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
function ti(t) {
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
                        label: q.intl.string(V.default.uNd2Je),
                        disabled: a,
                        action: i,
                    }),
                    (0, n.jsx)(w.Dr, {
                        id: "restore-to-time",
                        label: q.intl.string(V.default.Xi6pDt),
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
                children: (0, n.jsx)(h.m, {
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
function tr(t) {
    let e,
        a,
        s,
        i,
        r,
        u,
        m,
        f,
        h,
        x,
        g,
        j,
        b,
        v,
        p,
        { projectId: y, restoreDisabled: C, onRestoreVersion: w, transitionState: k, onClose: S } = t,
        [P, T] = l.useState("versions"),
        {
            sharedDatabase: N,
            versions: z,
            databases: H,
            previewBackups: A,
            previewBackupsLoading: O,
            refreshAllBackups: R,
            versionTitles: G,
        } = ((e = M(y)),
        (s = (a = l.useMemo(() => (e ? ["stable", "preview"] : ["stable"]), [e])).includes("preview")),
        (i = L(l.useCallback(() => (0, B.Du)(y), [y]))),
        (r = L(
            l.useCallback(() => {
                var t;
                return (
                    (t = "stable"),
                    Promise.all([(0, B.DM)(y, t), (0, B.ms)(y, t)]).then((t) => {
                        let [e, a] = t;
                        return { points: e, window: a };
                    })
                );
            }, [y]),
        )),
        (u = L(l.useCallback(() => (s ? (0, B.DM)(y, "preview") : Promise.resolve($)), [y, s]))),
        (m = L(l.useCallback(() => (s ? (0, B.ms)(y, "preview") : Promise.resolve(null)), [y, s]))),
        (f = r.refresh),
        (h = u.refresh),
        (x = m.refresh),
        (g = l.useCallback(() => {
            (f(), h(), x());
        }, [f, h, x])),
        (j = a.map((t) => {
            var e, a;
            let n, l;
            return {
                environment: t,
                backups:
                    "preview" === t
                        ? ((e = u),
                          (a = m),
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
                        : r,
            };
        })),
        (b = i.state),
        (v = l.useMemo(() => {
            let t = new Map();
            if ("loaded" === b.status) for (let e of b.data.entries) t.set(e.sha, (0, D.T4)(e.subject).short);
            return t;
        }, [b])),
        {
            sharedDatabase: !s,
            versions: i,
            databases: j,
            previewBackups: "loaded" === (p = u.state).status ? p.data : $,
            previewBackupsLoading: "loading" === p.status,
            refreshAllBackups: g,
            versionTitles: v,
        }),
        K = (0, I.u)(y),
        Q = M(y),
        W = l.useCallback(
            (t, e) => {
                (S(), w?.(t, e));
            },
            [S, w],
        ),
        Y = l.useCallback(
            (t, e) => {
                te({
                    projectId: y,
                    environment: t.environment,
                    targetMs: e,
                    execute: () => (0, B.$D)(y, t.id),
                    onSettled: R,
                });
            },
            [y, R],
        );
    return (0, n.jsxs)(d.a, {
        transitionState: k,
        onClose: S,
        size: "md",
        title: q.intl.string(V.default["3hIVou"]),
        actions: [],
        children: [
            (0, n.jsxs)(E.V, {
                type: "top",
                selectedItem: P,
                onItemSelect: T,
                "aria-label": q.intl.string(V.default["/2GnYy"]),
                children: [
                    (0, n.jsx)(E.V.Item, { id: "versions", children: q.intl.string(V.default.aEg2bh) }),
                    (0, n.jsx)(E.V.Item, { id: "database", children: q.intl.string(V.default["GSu/n6"]) }),
                    (0, n.jsx)(E.V.Item, { id: "publishes", children: q.intl.string(V.default["656Avb"]) }),
                ],
            }),
            (0, n.jsx)(E.V.Panel, {
                id: P,
                className: F.nd,
                children:
                    "versions" === P
                        ? (0, n.jsx)(tt, {
                              versions: z.state,
                              previewBackups: A,
                              restoreDisabled: C || O || K,
                              showsPublishState: Q,
                              onRetry: z.retry,
                              onRestore: null == w ? void 0 : W,
                          })
                        : "publishes" === P
                          ? (0, n.jsx)(X, { projectId: y }, y)
                          : (0, n.jsxs)(o.B, {
                                gap: 24,
                                children: [
                                    (0, n.jsx)(c.E, {
                                        variant: "body-sm/normal",
                                        color: "text-muted",
                                        children: q.intl.formatToPlainString(V.default.ptsHZu, { days: 30 }),
                                    }),
                                    H.map((t) =>
                                        (0, n.jsx)(
                                            ts,
                                            {
                                                projectId: y,
                                                database: t,
                                                sharedDatabase: N,
                                                versionTitles: G,
                                                busy: K,
                                                onRestoreBackup: Y,
                                                onSettled: R,
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
