n.d(t, { A: () => e0 });
var l,
    a = n(477900),
    r = n(582128),
    i = n(672929),
    s = n(948230),
    o = n(998939),
    c = n(289873),
    d = n(821609),
    u = n(323384),
    m = n(834730),
    h = n(580954),
    p = n(297264),
    f = n(812901),
    g = n(317608),
    x = n(17928),
    v = n(956518),
    b = n(627363),
    j = n(869146),
    k = n(625180),
    w = n(91242),
    E = n(207371),
    y = n(165610),
    N = n(652215),
    _ =
        (((l = {}).Loading = "loading"),
        (l.AwaitingLaunch = "awaiting-launch"),
        (l.Launched = "launched"),
        (l.RenderingElsewhere = "rendering-elsewhere"),
        (l.NoApplication = "no-application"),
        (l.DoesNotSupportSurface = "does-not-support-surface"),
        (l.Error = "error"),
        l),
    S = n(503698),
    A = n.n(S),
    C = n(612749);
function R(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, a.jsxs)("div", {
        className: A()(C.Bf, l && C.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: C.Ux,
                children: [
                    (0, a.jsx)(p.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, a.jsx)(m.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
                ],
            }),
            r,
        ],
    });
}
var T = n(818085),
    I = n(375708),
    P = n(616694);
function M(e) {
    let { applicationId: t, surface: n } = e,
        { frame: l, state: i } = (function (e) {
            let { applicationId: t, surface: n } = e,
                {
                    surface: l,
                    setFailed: a,
                    lifecycle: i,
                } = (function (e) {
                    let { applicationId: t, surface: n } = e,
                        l = r.useMemo(() => (0, y.VA)(t, n), [t, n]),
                        a = r.useMemo(() => n, [l]),
                        i = (0, x.bG)([w.A], () => w.A.getFrame(l), [l]),
                        s = (0, x.bG)(
                            [j.A, w.A],
                            () => j.A.getWindowOpen(N.MLl.ACTIVITY_POPOUT) && w.A.getMainFrame()?.id === l,
                            [l],
                        ),
                        { data: o, isLoading: c } = (0, b.YY)(t),
                        d = (0, E.x)(o),
                        u = null != (0, v.Ay)(t),
                        [m, h] = r.useState(null),
                        p = m === l;
                    return {
                        surface: a,
                        setFailed: r.useCallback(() => h(l), [l]),
                        lifecycle: (0, y.x1)(i)
                            ? s
                                ? { state: "rendering-elsewhere" }
                                : { state: "launched", frame: i }
                            : p
                              ? { state: "error" }
                              : i?.state === "loading"
                                ? { state: "loading", frame: i }
                                : c
                                  ? { state: "loading", frame: void 0 }
                                  : null != o && u
                                    ? d
                                        ? { state: "awaiting-launch" }
                                        : { state: "does-not-support-surface" }
                                    : { state: "no-application" },
                    };
                })({ applicationId: t, surface: n }),
                { state: s } = i;
            return (
                r.useEffect(() => {
                    "awaiting-launch" === s && e();
                    async function e() {
                        try {
                            await k.A.launchFrame({ applicationId: t, surface: l });
                        } catch {
                            a();
                        }
                    }
                }, [s, t, l, a]),
                i
            );
        })({ applicationId: t, surface: n }),
        s = r.useMemo(() => (0, y.VA)(t, n), [t, n]);
    switch (
        (r.useEffect(() => {
            if ((0, y.Yf)(n) === y.sV.MAIN) return () => (0, h.A)().leaveFrame(s);
        }, [s, n]),
        i)
    ) {
        case _.Launched:
            return (0, a.jsx)(g.A, { frameId: l.id, level: f.A.WithinAppContent, className: P.Z7 });
        case _.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: P.qs,
                children: (0, a.jsx)(R, {
                    title: I.intl.string(T.default["4f6Vkr"]),
                    body: I.intl.string(T.default.LJ2q1H),
                }),
            });
        case _.NoApplication:
            return (0, a.jsxs)("div", {
                className: P.qs,
                children: [
                    (0, a.jsx)(u.k, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
                    (0, a.jsx)(m.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: I.intl.string(T.default["6xTawd"]),
                    }),
                ],
            });
        case _.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: P.qs,
                children: (0, a.jsx)(R, {
                    title: I.intl.string(T.default.FHOJiH),
                    body: I.intl.string(T.default["1yLQoV"]),
                }),
            });
        case _.Error:
            return (0, a.jsxs)("div", {
                className: P.qs,
                children: [
                    (0, a.jsx)(p.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: I.intl.string(T.default.MeLWCr),
                    }),
                    (0, a.jsx)(m.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: P.tj,
                        children: I.intl.string(T.default["1RCbQT"]),
                    }),
                ],
            });
        case _.AwaitingLaunch:
        case _.Loading:
            return (0, a.jsx)("div", { className: P.qs, children: (0, a.jsx)(c.y, {}) });
    }
}
var L = n(668917);
function O(e) {
    let { applicationId: t, surface: n, previewReady: l, previewGate: s } = e,
        o = (0, i.A)(t, n);
    return (r.useEffect(() => {
        s?.type === "permissions" && null != o && (0, h.A)().leaveFrame(o.id);
    }, [o, s?.type]),
    s?.type === "checking")
        ? (0, a.jsx)("div", { className: L.q, children: (0, a.jsx)(c.y, {}) })
        : s?.type === "permissions"
          ? (0, a.jsx)("div", {
                className: L.q,
                children: (0, a.jsx)(R, {
                    wide: !0,
                    title: I.intl.string(T.default.DYwf2n),
                    body: I.intl.string(T.default.WWj3pN),
                    children: (0, a.jsx)(d.$, {
                        variant: "primary",
                        size: "md",
                        text: I.intl.string(T.default["CRfE/E"]),
                        onClick: s.onReviewPermissions,
                        loading: s.loading,
                    }),
                }),
            })
          : l
            ? null != t
                ? (0, a.jsx)(M, { applicationId: t, surface: n })
                : null
            : (0, a.jsxs)("div", {
                  className: L.q,
                  children: [
                      (0, a.jsx)(u.k, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
                      (0, a.jsx)(m.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: I.intl.string(T.default["6xTawd"]),
                      }),
                  ],
              });
}
var D = n(689175),
    U = n(783791);
n(323874), n(14289), n(35956), n(321073);
var G = n(866665),
    B = n(588975),
    H = n(428610),
    W = n(826745),
    V = n(559647),
    F = n(514042),
    z = n(285796),
    $ = n(673724),
    K = n(17117),
    X = n(692228);
let Y = 0;
function q(e) {
    let { canSend: t, onSend: n, onUploadFile: l, onDeleteFile: i, onApprove: s, onRegionCapture: o } = e,
        [d, u] = r.useState(""),
        [m, h] = r.useState([]),
        [p, f] = r.useState(!1),
        [g, x] = r.useState(!1),
        v = r.useRef(null),
        b = r.useRef([]),
        j = r.useRef(new Set()),
        k = r.useRef(i);
    k.current = i;
    let w = r.useCallback((e) => {
            (b.current = e), h(e);
        }, []),
        E = r.useCallback((e) => {
            k.current(e.id).catch((e) => {
                console.error("[vibegrations] attachment cleanup failed", e);
            });
        }, []);
    r.useEffect(() => {
        let e = j.current;
        return () => {
            for (let t of b.current)
                e.add(t.localId), null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && E(t.ref);
        };
    }, [E]);
    let y = r.useCallback(
            (e, t) => {
                if (j.current.has(e)) return;
                let n = b.current;
                n.some((t) => t.localId === e) && w(n.map((n) => (n.localId === e ? { ...n, ...t } : n)));
            },
            [w],
        ),
        N = r.useCallback(
            (e) => {
                if (0 === e.length) return;
                let t = [...b.current],
                    n = [];
                for (let l of e) {
                    let e = "" === l.type ? "application/octet-stream" : l.type,
                        a = ++Y,
                        r = { localId: a, name: l.name, size: l.size, contentType: e, status: "uploading" };
                    if (t.length >= 5) {
                        t.push({
                            ...r,
                            status: "error",
                            errorText: I.intl.formatToPlainString(T.default.DlX57a, { count: 5 }),
                        });
                        continue;
                    }
                    if (l.size > ($.Wb.has(e) ? 5242880 : 0xa00000)) {
                        t.push({ ...r, status: "error", errorText: I.intl.string(T.default.cI7t94) });
                        continue;
                    }
                    let i = $.Wb.has(e) ? URL.createObjectURL(l) : void 0;
                    t.push({ ...r, previewUrl: i }), n.push({ file: l, localId: a });
                }
                for (let { file: e, localId: a } of (w(t), n))
                    l(e).then(
                        (e) => {
                            j.current.has(a) ? E(e) : y(a, { status: "ready", ref: e });
                        },
                        (e) => {
                            j.current.has(a) ||
                                (console.error("[vibegrations] attachment upload failed", e),
                                y(a, { status: "error", errorText: I.intl.string(T.default.GwEHvn) }));
                        },
                    );
            },
            [E, l, y, w],
        ),
        _ = r.useCallback(async () => {
            if (null != o && !g) {
                x(!0);
                try {
                    let e = await o();
                    null != e && N([e]);
                } catch (e) {
                    console.error("[vibegrations] region capture failed", e),
                        w([
                            ...b.current,
                            {
                                localId: ++Y,
                                name: "preview-capture.png",
                                size: 0,
                                contentType: "image/png",
                                status: "error",
                                errorText: I.intl.string(T.default["4DQd7d"]),
                            },
                        ]);
                } finally {
                    x(!1);
                }
            }
        }, [o, g, N, w]),
        S = r.useCallback(
            (e) => {
                let t = b.current,
                    n = t.find((t) => t.localId === e);
                j.current.add(e),
                    n?.previewUrl != null && URL.revokeObjectURL(n.previewUrl),
                    n?.ref != null && E(n.ref),
                    w(t.filter((t) => t.localId !== e));
            },
            [E, w],
        ),
        A = m.every((e) => "ready" === e.status),
        C = "" !== d.trim() || m.length > 0,
        R = t && C && A,
        P = r.useCallback(() => {
            if (!R) return;
            let e = b.current.filter((e) => null != e.ref).map((e) => e.ref);
            for (let t of (n(d, e.length > 0 ? e : void 0), b.current))
                null != t.previewUrl && URL.revokeObjectURL(t.previewUrl);
            u(""), w([]);
        }, [R, d, n, w]),
        M = r.useCallback(
            (e) => {
                e.preventDefault(), P();
            },
            [P],
        ),
        L = r.useCallback(
            (e) => {
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != s && (e.preventDefault(), s());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), P());
            },
            [P, s],
        ),
        O = r.useCallback(
            (e) => {
                if (!t) return;
                let n = Array.from(e.clipboardData.files);
                0 !== n.length && (e.preventDefault(), N(n));
            },
            [t, N],
        ),
        D = r.useCallback(
            (e) => {
                e.preventDefault(), f(!1), t && N(Array.from(e.dataTransfer.files));
            },
            [t, N],
        ),
        U = r.useCallback((e) => {
            e.dataTransfer.types.includes("Files") && (e.preventDefault(), f(!0));
        }, []),
        F = r.useCallback(
            (e) => {
                N(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = "");
            },
            [N],
        );
    return (0, a.jsxs)("form", {
        onSubmit: M,
        onDrop: D,
        onDragOver: U,
        onDragLeave: () => f(!1),
        className: p ? `${K.DA} ${K.pV}` : K.DA,
        children: [
            m.length > 0
                ? (0, a.jsx)("div", {
                      className: K.lN,
                      children: m.map((e) => (0, a.jsx)(Z, { draft: e, onRemove: S }, e.localId)),
                  })
                : null,
            (0, a.jsxs)("div", {
                className: K.VA,
                children: [
                    (0, a.jsx)("input", {
                        ref: v,
                        type: "file",
                        multiple: !0,
                        onChange: F,
                        className: K.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    (0, a.jsx)(G.m, {
                        text: I.intl.string(T.default.gUn10I),
                        ariaHidden: !0,
                        children: (0, a.jsx)("button", {
                            type: "button",
                            className: K.Y0,
                            disabled: !t,
                            onClick: () => v.current?.click(),
                            "aria-label": I.intl.string(T.default.gUn10I),
                            children: (0, a.jsx)(B.P, { size: "sm", color: "currentColor" }),
                        }),
                    }),
                    (0, a.jsx)(G.m, {
                        text: I.intl.string(T.default.B5gWPk),
                        ariaHidden: !0,
                        children: (0, a.jsx)("button", {
                            type: "button",
                            className: K.Y0,
                            disabled: null == o || !t || g,
                            onClick: _,
                            "aria-label": I.intl.string(T.default.B5gWPk),
                            children: g
                                ? (0, a.jsx)(c.y, { type: c.t.SPINNING_CIRCLE_SIMPLE, className: K.Rk })
                                : (0, a.jsx)(H.K, { size: "sm", color: "currentColor" }),
                        }),
                    }),
                    (0, a.jsx)(W.y, {
                        value: d,
                        onChange: (e) => u(e.currentTarget.value),
                        onKeyDown: L,
                        onPaste: O,
                        placeholder: t ? I.intl.string(T.default.ahRdoJ) : I.intl.string(T.default.nm4w9P),
                        disabled: !t,
                        "aria-label": I.intl.string(T.default.OPr66w),
                        rows: 1,
                        className: K.jp,
                    }),
                    (0, a.jsxs)("div", {
                        className: K.fF,
                        children: [
                            (0, a.jsx)("div", { className: K.MT }),
                            (0, a.jsx)("button", {
                                type: "submit",
                                className: K.rt,
                                disabled: !R,
                                "aria-label": I.intl.string(T.default["22GHMt"]),
                                children: (0, a.jsx)(V.l, { size: "xs", color: "currentColor", className: K.Mx }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function Z(e) {
    let { draft: t, onRemove: n } = e;
    return (0, a.jsxs)("div", {
        className: X._B,
        children: [
            null != t.previewUrl
                ? (0, a.jsx)("img", { src: t.previewUrl, alt: "", className: X.gJ })
                : (0, a.jsx)(F.o, { size: "sm", color: "currentColor" }),
            (0, a.jsxs)("div", {
                className: X.Wd,
                children: [
                    (0, a.jsx)(m.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: X.Rr,
                        children: t.name,
                    }),
                    "error" === t.status
                        ? (0, a.jsx)(m.E, {
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: t.errorText,
                          })
                        : null,
                ],
            }),
            "uploading" === t.status ? (0, a.jsx)(c.y, { type: c.t.SPINNING_CIRCLE_SIMPLE, className: K.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: K.o1,
                onClick: () => n(t.localId),
                "aria-label": I.intl.string(T.default["3HWvgk"]),
                children: (0, a.jsx)(z.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var J = n(939249),
    Q = n(256905);
n(134528), n(947204);
var ee = n(847374),
    et = n(320448),
    en = n(46054),
    el = n(84206);
function ea(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsxs)("section", {
              className: el.hb,
              children: [
                  (0, a.jsx)(m.E, { variant: "text-xs/semibold", color: "text-muted", tag: "span", children: t }),
                  (0, a.jsx)("div", {
                      className: el.Hu,
                      children: n.map((e) =>
                          (0, a.jsx)(
                              "span",
                              {
                                  className: el.uR,
                                  children: (0, a.jsx)(m.E, {
                                      variant: "text-xs/medium",
                                      color: "text-default",
                                      tag: "span",
                                      children: e
                                          .split("_")
                                          .map((e) => (0 === e.length ? e : e[0] + e.slice(1).toLowerCase()))
                                          .join(" "),
                                  }),
                              },
                              e,
                          ),
                      ),
                  }),
              ],
          });
}
function er(e) {
    let { proposal: t, onApprove: n } = e;
    return (0, a.jsxs)("article", {
        className: el.cz,
        "data-vibegrations-plan-card": !0,
        children: [
            (0, a.jsxs)("header", {
                className: el.pu,
                children: [
                    (0, a.jsx)(m.E, {
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        tag: "span",
                        children: I.intl.string(T.default["60htw+"]),
                    }),
                    !0 === t.is_activity
                        ? (0, a.jsx)("span", {
                              className: el.dr,
                              children: (0, a.jsx)(m.E, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  tag: "span",
                                  children: I.intl.string(I.t.IC5Ann),
                              }),
                          })
                        : null,
                ],
            }),
            (0, a.jsx)(m.E, { variant: "text-sm/normal", color: "text-default", selectable: !0, children: t.summary }),
            t.changes.length > 0
                ? (0, a.jsxs)("section", {
                      className: el.hb,
                      children: [
                          (0, a.jsx)(m.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: I.intl.string(T.default.KLyB8Y),
                          }),
                          (0, a.jsx)("ul", {
                              className: el.eQ,
                              children: t.changes.map((e, t) =>
                                  (0, a.jsxs)(
                                      "li",
                                      {
                                          className: el.H6,
                                          children: [
                                              (0, a.jsx)(m.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  className: el.UZ,
                                                  children: "\u2022",
                                              }),
                                              (0, a.jsx)(m.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-default",
                                                  tag: "span",
                                                  selectable: !0,
                                                  children: e,
                                              }),
                                          ],
                                      },
                                      t,
                                  ),
                              ),
                          }),
                      ],
                  })
                : null,
            t.commands.length > 0
                ? (0, a.jsxs)("section", {
                      className: el.hb,
                      children: [
                          (0, a.jsx)(m.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: I.intl.string(I.t["0hKkS+"]),
                          }),
                          (0, a.jsx)("ul", {
                              className: el.eQ,
                              children: t.commands.map((e, t) =>
                                  (0, a.jsxs)(
                                      "li",
                                      {
                                          className: el.Xs,
                                          children: [
                                              (0, a.jsxs)(m.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-default",
                                                  tag: "span",
                                                  selectable: !0,
                                                  children: ["launch" === e.kind ? "\u21EA " : "", "/", e.name],
                                              }),
                                              (0, a.jsx)(m.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  selectable: !0,
                                                  children: e.description,
                                              }),
                                          ],
                                      },
                                      t,
                                  ),
                              ),
                          }),
                      ],
                  })
                : null,
            (0, a.jsx)(ea, { label: I.intl.string(T.default.ieqTtP), names: t.bot_permissions ?? [] }),
            (0, a.jsx)(ea, { label: I.intl.string(T.default.Cn9qix), names: t.privileged_intents ?? [] }),
            null != n
                ? (0, a.jsxs)("div", {
                      className: el.nc,
                      children: [
                          (0, a.jsx)(d.$, {
                              variant: "secondary",
                              size: "sm",
                              onClick: n,
                              text: I.intl.string(T.default.GYoWRk),
                          }),
                          (0, a.jsx)(m.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              tag: "span",
                              className: el.sw,
                              children: "or reply to keep refining",
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var ei = n(700766),
    es = n(742715);
let eo = new Set(["thinking", "assistant_delta", "reply", "plan_proposed", "announcement"]);
function ec(e) {
    let { steps: t, announcement: n, content: l, proposal: i, onApprove: s } = e,
        o = r.useMemo(
            () =>
                (function (e) {
                    let t = [],
                        n = [],
                        l = null,
                        a = null;
                    for (let [r, i] of e.entries()) {
                        if ("thinking" === i.kind) {
                            a = null;
                            continue;
                        }
                        if ("assistant_delta" === i.kind) {
                            let e = i.message ?? "";
                            "" !== e &&
                                (null == a
                                    ? ((a = { type: "message", key: `message-${r}`, content: e }), t.push(a))
                                    : (a.content = e)),
                                !0 === i.message_finished && (a = null);
                            continue;
                        }
                        eo.has(i.kind) ||
                            ((a = null),
                            n.push(i),
                            null == l && ((l = { type: "steps", key: `steps-${r}`, groups: [] }), t.push(l)));
                    }
                    return (
                        null != l &&
                            (l.groups = (function (e) {
                                let t = [];
                                for (let n of e) {
                                    let e = (function (e) {
                                            let t = [];
                                            if ("planned" === e.kind) {
                                                let n = (e.commands ?? []).map((e) => "/" + e.name).join(", ");
                                                "" !== n && t.push(n);
                                            }
                                            return (
                                                null != e.name && "" !== e.name && t.push(e.name),
                                                null != e.detail && "" !== e.detail && t.push(e.detail),
                                                null != e.message && "" !== e.message && t.push(e.message),
                                                null != e.stderr_tail && "" !== e.stderr_tail && t.push(e.stderr_tail),
                                                t
                                            );
                                        })(n),
                                        l = t[t.length - 1];
                                    if (
                                        "writing_command" === n.kind &&
                                        (null == n.friendly || "" === n.friendly) &&
                                        null != l
                                    ) {
                                        l.technical.push(...e);
                                        continue;
                                    }
                                    let a = (function (e) {
                                            switch (e.kind) {
                                                case "planning":
                                                    return I.intl.string(T.default["0ce6LB"]);
                                                case "planned":
                                                    return I.intl.formatToPlainString(T.default["h6H4+U"], {
                                                        count: e.commands?.length ?? 0,
                                                    });
                                                case "thinking":
                                                    return I.intl.string(T.default.K7TkAL);
                                                case "writing_command":
                                                    return e.friendly ?? e.name ?? I.intl.string(T.default.nv6pUM);
                                                case "assembling":
                                                    return I.intl.string(T.default["9G3ZmA"]);
                                                case "installing_deps":
                                                    return I.intl.string(T.default.VZuRug);
                                                case "building":
                                                    return I.intl.string(T.default["s+ylXP"]);
                                                case "bundling":
                                                    return I.intl.string(T.default.rEQlMx);
                                                case "committing":
                                                    return I.intl.string(T.default.Yvyw1H);
                                                case "built":
                                                    return I.intl.string(T.default.hOcVAj);
                                                case "build_error":
                                                    return I.intl.string(T.default["6L9Vwt"]);
                                                case "healthchecking":
                                                    return I.intl.string(T.default.sz8yAj);
                                                case "preview_connecting":
                                                    return I.intl.string(T.default.pOYDEc);
                                                case "awaiting_auth":
                                                    return I.intl.string(T.default["orD+xo"]);
                                                case "healthcheck_passed":
                                                    return I.intl.string(T.default["x+sqTG"]);
                                                case "healthcheck_failed":
                                                    return I.intl.string(T.default.FUWbq1);
                                                case "deploying":
                                                    return I.intl.string(T.default.wcXX8Z);
                                                case "preview_ready":
                                                    return I.intl.string(T.default["78YNh7"]);
                                                case "error":
                                                case "terminal_error":
                                                    return I.intl.string(T.default.j3hBoA);
                                                default:
                                                    return I.intl.string(T.default.nv6pUM);
                                            }
                                        })(n),
                                        r = e.filter((e) => e !== a);
                                    if (null != l && l.summary === a) {
                                        l.technical.push(...r);
                                        continue;
                                    }
                                    t.push({ step: n, summary: a, technical: r });
                                }
                                return t;
                            })(n)),
                        t
                    );
                })(t),
            [t],
        ),
        c = o.at(-1),
        d = c?.type === "message" && c.content.trim() === l.trim();
    return (0, a.jsxs)("div", {
        className: ei.ue,
        children: [
            null != n && "" !== n
                ? (0, a.jsx)(m.E, {
                      tag: "div",
                      variant: "text-sm/normal",
                      color: "text-default",
                      selectable: !0,
                      className: A()(ei.ky, ei.Xt, X.XR),
                      children: n,
                  })
                : null,
            o.length > 0
                ? (0, a.jsx)("ol", {
                      className: ei.dO,
                      children: o.map((e) =>
                          "message" === e.type
                              ? (0, a.jsx)(
                                    "li",
                                    {
                                        className: A()(ei.ky, X.XR),
                                        children: (0, a.jsx)("div", {
                                            className: A()(es.PT, ei.cW),
                                            children: en.A.parse(e.content, !0, {
                                                allowList: !0,
                                                allowHeading: !0,
                                                allowLinks: !0,
                                            }),
                                        }),
                                    },
                                    e.key,
                                )
                              : (0, a.jsx)(
                                    "li",
                                    {
                                        className: A()(ei.ky, X.XR),
                                        children: (0, a.jsx)("ol", {
                                            className: ei.dO,
                                            children: e.groups.map((e, t) => (0, a.jsx)(ed, { group: e }, t)),
                                        }),
                                    },
                                    e.key,
                                ),
                      ),
                  })
                : null,
            null != i
                ? (0, a.jsx)("div", {
                      className: A()(ei.ky, X.XR),
                      children: (0, a.jsx)(er, { proposal: i, onApprove: s }),
                  })
                : "" === l || d
                  ? null
                  : (0, a.jsx)("div", {
                        className: A()(ei.ky, X.XR),
                        children: (0, a.jsx)("div", {
                            className: A()(es.PT, ei.cW),
                            children: en.A.parse(l, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                        }),
                    }),
        ],
    });
}
function ed(e) {
    var t;
    let { group: n } = e,
        [l, i] = r.useState(!1),
        s = r.useId(),
        o = r.useCallback(() => i((e) => !e), []),
        c =
            "error" === (t = n.step.kind) || "terminal_error" === t || "build_error" === t
                ? "text-feedback-critical"
                : "text-default";
    if (0 === n.technical.length)
        return (0, a.jsx)("li", {
            "data-step-kind": n.step.kind,
            className: ei.Dx,
            children: (0, a.jsx)(m.E, {
                tag: "div",
                variant: "text-sm/normal",
                color: c,
                selectable: !0,
                className: ei.iq,
                children: n.summary,
            }),
        });
    let d = l ? ee.a : et._;
    return (0, a.jsxs)("li", {
        "data-step-kind": n.step.kind,
        className: ei.Dx,
        children: [
            (0, a.jsxs)(J.D, {
                tag: "div",
                className: ei.kG,
                "aria-expanded": l,
                "aria-controls": s,
                "aria-label": I.intl.formatToPlainString(T.default.z4KWsN, { step: n.summary }),
                onClick: o,
                children: [
                    (0, a.jsx)(m.E, {
                        tag: "span",
                        variant: "text-sm/normal",
                        color: c,
                        className: ei.iq,
                        children: n.summary,
                    }),
                    (0, a.jsx)(d, { size: "xs", color: "currentColor", className: ei.Ue }),
                ],
            }),
            (0, a.jsx)("div", {
                id: s,
                hidden: !l,
                className: ei.yJ,
                children: n.technical.map((e, t) =>
                    (0, a.jsx)(
                        m.E,
                        { tag: "div", variant: "text-xs/normal", color: "text-muted", selectable: !0, children: e },
                        t,
                    ),
                ),
            }),
        ],
    });
}
var eu = n(289149);
function em(e) {
    let { projectId: t, messages: n, onApprove: l } = e,
        r = n[n.length - 1];
    return (0, a.jsx)("ol", {
        className: eu.x7,
        children: n.map((e) => {
            if ("user" === e.role)
                return (0, a.jsx)(
                    eb,
                    {
                        role: "user",
                        children: (0, a.jsxs)("div", {
                            className: A()(eu.B2, X.XR),
                            children: [
                                "" !== e.content
                                    ? (0, a.jsx)(m.E, {
                                          variant: "text-md/normal",
                                          color: "text-default",
                                          selectable: !0,
                                          children: e.content,
                                      })
                                    : null,
                                null != e.attachments && e.attachments.length > 0
                                    ? (0, a.jsx)(eh, { projectId: t, attachments: e.attachments })
                                    : null,
                            ],
                        }),
                    },
                    e.render_id,
                );
            let n = e.steps.filter((e) => !eo.has(e.kind)).length > 0,
                i = e.steps.some((e) => "assistant_delta" === e.kind && null != e.message && "" !== e.message);
            return "" !== e.content || null != e.proposal || n || i || null != e.announcement
                ? (0, a.jsx)(
                      eb,
                      {
                          role: "assistant",
                          children: (0, a.jsx)(ec, {
                              steps: e.steps,
                              announcement: e.announcement,
                              content: e.content,
                              proposal: e.proposal,
                              onApprove: e === r ? l : void 0,
                          }),
                      },
                      e.render_id,
                  )
                : null;
        }),
    });
}
function eh(e) {
    let { projectId: t, attachments: n } = e;
    return (0, a.jsx)("div", {
        className: eu.KT,
        children: n.map((e, n) =>
            null == e.id
                ? (0, a.jsx)(eg, { name: e.name }, n)
                : $.Wb.has(e.content_type)
                  ? (0, a.jsx)(ev, { projectId: t, id: e.id, name: e.name }, n)
                  : (0, a.jsx)(ex, { projectId: t, id: e.id, name: e.name }, n),
        ),
    });
}
let ep = A()(X._B, X.ND);
function ef(e, t, n) {
    return (0, a.jsxs)(a.Fragment, {
        children: [
            null != t
                ? (0, a.jsx)("img", { src: t, alt: "", className: X.gJ, onError: n })
                : (0, a.jsx)(F.o, { size: "xs", color: "currentColor" }),
            (0, a.jsx)("div", {
                className: X.Wd,
                children: (0, a.jsx)(m.E, {
                    variant: "text-sm/medium",
                    color: "text-default",
                    className: X.Rr,
                    children: e,
                }),
            }),
        ],
    });
}
function eg(e) {
    let { name: t, unavailable: n = !1 } = e,
        l = n ? I.intl.formatToPlainString(T.default.OBr7WW, { name: t }) : t;
    return (0, a.jsx)("div", { className: ep, children: ef(l, null) });
}
function ex(e) {
    let { projectId: t, id: n, name: l } = e,
        [i, s] = r.useState(!1);
    r.useEffect(() => {
        let e = !1;
        return (
            (0, o.n6)(t, n).then(
                (t) => {
                    e || t || s(!0);
                },
                () => {},
            ),
            () => {
                e = !0;
            }
        );
    }, [t, n]);
    let c = r.useCallback(() => {
        Promise.all([(0, o.n6)(t, n), (0, o.PK)(t, n, { download: !0 })]).then(
            (e) => {
                let [t, n] = e;
                if (!t) return void s(!0);
                let l = document.createElement("a");
                (l.href = n), (l.target = "_blank"), (l.rel = "noopener noreferrer"), l.click();
            },
            () => {},
        );
    }, [t, n]);
    return i
        ? (0, a.jsx)(eg, { name: l, unavailable: !0 })
        : (0, a.jsx)(J.D, {
              className: A()(ep, eu.dz),
              onClick: c,
              "aria-label": I.intl.formatToPlainString(T.default.gV5YcR, { name: l }),
              children: ef(l, null),
          });
}
function ev(e) {
    let { projectId: t, id: n, name: l } = e,
        [i, s] = r.useState(null),
        [c, d] = r.useState(!1);
    r.useEffect(() => {
        let e = !1;
        return (
            Promise.all([(0, o.n6)(t, n), (0, o.PK)(t, n)]).then(
                (t) => {
                    let [n, l] = t;
                    e || (n ? s(l) : d(!0));
                },
                () => {},
            ),
            () => {
                e = !0;
            }
        );
    }, [t, n]);
    let u = r.useCallback(() => {
        Promise.all([(0, o.n6)(t, n), (0, o.PK)(t, n)]).then(
            (e) => {
                let [t, n] = e;
                t
                    ? (0, Q.R)({
                          items: [{ type: "IMAGE", url: n, alt: l }],
                          startingIndex: 0,
                          shouldHideMediaOptions: !0,
                          location: "VibegrationsChat",
                      })
                    : d(!0);
            },
            () => {},
        );
    }, [t, n, l]);
    return c
        ? (0, a.jsx)(eg, { name: l, unavailable: !0 })
        : (0, a.jsx)(J.D, {
              className: A()(ep, eu.dz),
              onClick: u,
              "aria-label": I.intl.formatToPlainString(T.default.QUFLUq, { name: l }),
              children: ef(l, i, () => {
                  s(null),
                      (0, o.n6)(t, n).then(
                          (e) => {
                              e || d(!0);
                          },
                          () => {},
                      );
              }),
          });
}
function eb(e) {
    let { role: t, children: n } = e;
    return (0, a.jsx)("li", { "data-role": t, className: eu.xk, children: n });
}
var ej = n(863610),
    ek = n(379307),
    ew = n(922016),
    eE = n(885574),
    ey = n(677175);
function eN(e) {
    return e.toLocaleString();
}
function e_(e) {
    let { label: t, usage: n } = e;
    return (0, a.jsxs)("div", {
        className: ey.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: ey.mf,
                children: [
                    (0, a.jsx)(m.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(m.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [eN((0, $.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(m.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    eN(n.input_tokens),
                    " in \xb7 ",
                    eN(n.output_tokens),
                    " out \xb7 ",
                    eN(n.cache_creation_input_tokens),
                    " cache write \xb7 ",
                    eN(n.cache_read_input_tokens),
                    " cache read",
                ],
            }),
        ],
    });
}
function eS(e) {
    let { project: t } = e,
        n = (0, $.wV)(t.orchestrator, t.codegen);
    return (0, a.jsxs)("div", {
        className: ey.si,
        role: "dialog",
        "aria-label": I.intl.string(T.default["9yoLWZ"]),
        children: [
            (0, a.jsx)("div", {
                className: ey.Q$,
                children: (0, a.jsxs)("div", {
                    className: ey.mf,
                    children: [
                        (0, a.jsxs)(m.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [eN((0, $.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(m.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(e_, { label: I.intl.string(T.default.hk4jJr), usage: t.orchestrator }),
            (0, a.jsx)(e_, { label: I.intl.string(T.default.R9aduM), usage: t.codegen }),
            (0, a.jsxs)("div", {
                className: ey.mf,
                children: [
                    (0, a.jsx)(m.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: I.intl.string(T.default["kILb+R"]),
                    }),
                    (0, a.jsx)(m.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, $.sj)(n) ? "\u2014" : `${Math.round(100 * (0, $.CA)(n))}%`,
                    }),
                ],
            }),
        ],
    });
}
function eA(e) {
    let { project: t } = e,
        n = r.useRef(null);
    return (0, a.jsx)(ew.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(eS, { project: t }),
        children: (e) =>
            (0, a.jsx)(J.D, {
                innerRef: n,
                className: ey.Y$,
                "aria-label": I.intl.string(T.default.AWQ2ZV),
                ...e,
                children: (0, a.jsx)(eE.m, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
            }),
    });
}
var eC = n(154861);
function eR(e) {
    switch (e) {
        case "open":
            return I.intl.string(T.default.cLhFMi);
        case "connecting":
            return I.intl.string(T.default.W7oyuf);
        case "failed":
            return I.intl.string(T.default.eE60xI);
        case "closed":
            return I.intl.string(T.default["yBmS+I"]);
    }
}
function eT(e) {
    let { thinking: t, projectUsage: n, connState: l, modelSettings: r, onModelSettingsChange: i } = e;
    return (0, a.jsxs)("div", {
        className: eC.jf,
        children: [
            (0, a.jsx)("div", {
                className: eC.Xx,
                "data-vibegrations-activity": !0,
                children: t
                    ? (0, a.jsxs)("div", {
                          className: eC.e_,
                          role: "status",
                          "aria-live": "polite",
                          "aria-label": I.intl.string(T.default.C0t6bp),
                          children: [
                              (0, a.jsx)(ej.n, { dotRadius: 3.5, themed: !0 }),
                              (0, a.jsx)(m.E, {
                                  tag: "span",
                                  variant: "text-xs/semibold",
                                  color: "text-strong",
                                  children: I.intl.string(T.default.QDGuNS),
                              }),
                          ],
                      })
                    : null,
            }),
            null == r
                ? null
                : (0, a.jsx)(ek.A, { settings: r.settings, choices: r.choices, disabled: "open" !== l, onChange: i }),
            null == n
                ? null
                : (0, a.jsxs)("span", {
                      className: eC.BP,
                      children: [
                          (0, a.jsx)(m.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": I.intl.formatToPlainString(T.default["7SZZvj"], {
                                  runes: (0, $.a7)(n.cost_usd),
                                  turns: n.turns,
                              }),
                              children: I.intl.formatToPlainString(T.default["4PFO2p"], {
                                  runes: (0, $.a7)(n.cost_usd).toLocaleString(),
                              }),
                          }),
                          (0, a.jsx)(eA, { project: n }),
                      ],
                  }),
            (0, a.jsx)(m.E, {
                tag: "span",
                variant: "text-xs/medium",
                color:
                    "open" === l ? "text-feedback-positive" : "failed" === l ? "text-feedback-critical" : "text-muted",
                "aria-label": I.intl.formatToPlainString(T.default.eDDdhB, { status: eR(l) }),
                "data-vibegrations-conn": !0,
                "data-state": l,
                className: eC.XF,
                children: eR(l),
            }),
        ],
    });
}
var eI = n(506774),
    eP = n(192308),
    eM = n(651649),
    eL = n(670455);
let eO = "shownVibegrationsFeedbackProjectIds";
var eD = n(104071);
function eU(e) {
    let { projectId: t, onRegionCapture: l } = e,
        i = (0, x.bG)([U.A], () => U.A.getMessages(t), [t]),
        s = (0, x.bG)([o.Ay], () => o.Ay.getConnState(t), [t]),
        c = (0, x.bG)([U.A], () => U.A.getProjectUsage(t), [t]),
        d = (0, x.bG)([o.Ay], () => o.Ay.getModelSettings(t), [t]),
        u = r.useRef(null),
        m = r.useRef(null),
        h = r.useRef(!0);
    r.useEffect(() => {
        h.current && m.current?.scrollToBottom();
    }, [i]);
    let p = r.useCallback(() => {
        let e = m.current;
        null != e && (h.current = 32 > e.getDistanceFromBottom());
    }, []);
    r.useLayoutEffect(() => {
        let e = u.current;
        if (null == e) return;
        let t = e.getBoundingClientRect().width,
            n = null,
            l = new ResizeObserver((l) => {
                let [a] = l,
                    r = a?.contentRect.width ?? e.getBoundingClientRect().width;
                r === t ||
                    ((t = r),
                    h.current &&
                        (null != n && cancelAnimationFrame(n),
                        (n = requestAnimationFrame(() => m.current?.scrollToBottom()))));
            });
        return (
            l.observe(e),
            () => {
                l.disconnect(), null != n && cancelAnimationFrame(n);
            }
        );
    }, []),
        r.useEffect(() => {
            (0, o.Hc)(t);
        }, [t]),
        r.useEffect(
            () => () =>
                (function (e) {
                    let t = U.A.getMessages(e).filter((e) => "assistant" === e.role && (0, U.B)(e)).length;
                    !(t < 3) &&
                        ((eI.w.get(eO) ?? []).includes(e) ||
                            eM.A.possiblyShowFeedbackModal(eL.MW.VIBEGRATIONS, () => {
                                let l;
                                (l = eI.w.get(eO) ?? []).includes(e) || eI.w.set(eO, [...l, e]),
                                    (0, eP.openModalLazy)(async () => {
                                        let { default: l } = await Promise.all([
                                            n.e("104079"),
                                            n.e("222255"),
                                            n.e("155925"),
                                            n.e("218413"),
                                            n.e("137381"),
                                            n.e("847004"),
                                            n.e("341676"),
                                        ]).then(n.bind(n, 580711));
                                        return (n) => (0, a.jsx)(l, { ...n, projectId: e, promptCount: t });
                                    });
                            }));
                })(t),
            [t],
        );
    let f = r.useCallback(
            (e, n) => {
                (0, o.dv)(t, e, n);
            },
            [t],
        ),
        g = r.useCallback((e) => (0, o.XZ)(t, e), [t]),
        v = r.useCallback((e) => (0, o.vX)(t, e), [t]),
        b = r.useCallback((e) => (0, o.Vm)(t, e), [t]),
        j = r.useCallback(() => f(I.intl.string(T.default.Jj8Ftb)), [f]),
        k = "open" === s,
        w = i[i.length - 1],
        E = null != w && "assistant" === w.role && null != w.proposal,
        y = null != w && "assistant" === w.role && !(0, U.B)(w),
        N = E && k ? j : void 0;
    return (0, a.jsxs)("section", {
        ref: u,
        "data-vibegrations-chat": !0,
        className: eD.T,
        children: [
            (0, a.jsx)(D.Ch, {
                ref: m,
                onScroll: p,
                "data-vibegrations-chat-log": !0,
                className: eD.N,
                children: (0, a.jsx)(em, { projectId: t, messages: i, onApprove: N }),
            }),
            (0, a.jsx)(eT, { thinking: y, projectUsage: c, connState: s, modelSettings: d, onModelSettingsChange: g }),
            (0, a.jsx)(q, {
                canSend: k,
                onSend: f,
                onUploadFile: v,
                onDeleteFile: b,
                onApprove: N,
                onRegionCapture: l,
            }),
        ],
    });
}
var eG = n(435558),
    eB = n(661531),
    eH = n(602853),
    eW = n(517461),
    eV = n(761929),
    eF = n(552067);
function ez(e) {
    let { open: t, maxWidth: n, onWidthChange: l, children: i } = e,
        s = (0, eH.r)(eB.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = r.useRef(null),
        [c, d] = (0, eW.V)("VibegrationsChatSidebarWidth", 460),
        [u, m] = r.useState(c ?? 460),
        h = (0, eG.clamp)(u, 360, n);
    r.useLayoutEffect(() => {
        l(t ? h + s : 0);
    }, [h, t, s, l]);
    let p = (0, eV.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: o,
            onElementResize: m,
            onElementResizeEnd: d,
            orientation: eV.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        f = r.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), p(e));
            },
            [p],
        );
    return (0, a.jsxs)("div", {
        className: eF.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: eF.Di, onPointerDown: f }),
            (0, a.jsx)("div", { ref: o, className: eF.kL, style: { width: h }, children: i }),
        ],
    });
}
var e$ = n(333007),
    eK = n(638015);
function eX(e) {
    return {
        x: Math.min(e.startX, e.x),
        y: Math.min(e.startY, e.y),
        width: Math.abs(e.x - e.startX),
        height: Math.abs(e.y - e.startY),
    };
}
function eY(e) {
    let { targetRect: t, onSelect: n, onCancel: l } = e,
        [i, s] = r.useState(null);
    r.useEffect(() => {
        function e(e) {
            "Escape" === e.key && (e.stopPropagation(), l());
        }
        return window.addEventListener("keydown", e, !0), () => window.removeEventListener("keydown", e, !0);
    }, [l]);
    let o = r.useCallback(
            (e) => ({
                x: Math.min(Math.max(e.clientX - t.left, 0), t.width),
                y: Math.min(Math.max(e.clientY - t.top, 0), t.height),
            }),
            [t],
        ),
        c = r.useCallback(
            (e) => {
                if (0 !== e.button) return;
                e.preventDefault(), e.currentTarget.setPointerCapture(e.pointerId);
                let t = o(e);
                s({ startX: t.x, startY: t.y, x: t.x, y: t.y });
            },
            [o],
        ),
        d = r.useCallback(
            (e) => {
                let t = o(e);
                s((e) => (null == e ? e : { ...e, x: t.x, y: t.y }));
            },
            [o],
        ),
        u = r.useCallback(
            (e) => {
                if (null == i) return;
                let t = o(e),
                    a = eX({ ...i, x: t.x, y: t.y });
                s(null), a.width < 8 && a.height < 8 ? l() : n(a);
            },
            [i, o, n, l],
        ),
        h = null == i ? null : eX(i);
    return (0, e$.createPortal)(
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("div", { className: eK.tB, role: "presentation", onPointerDown: l }),
                (0, a.jsx)("div", {
                    className: eK.aC,
                    style: { left: t.left, top: t.top, width: t.width, height: t.height },
                    role: "application",
                    "aria-label": I.intl.string(T.default["9MOgRI"]),
                    onPointerDown: c,
                    onPointerMove: d,
                    onPointerUp: u,
                    onPointerCancel: l,
                    children:
                        null == h
                            ? (0, a.jsx)("div", {
                                  className: eK.F7,
                                  children: (0, a.jsx)("div", {
                                      className: eK.aK,
                                      children: (0, a.jsx)(m.E, {
                                          variant: "text-sm/medium",
                                          color: "text-default",
                                          children: I.intl.string(T.default.ydkvBR),
                                      }),
                                  }),
                              })
                            : (0, a.jsx)("div", {
                                  className: eK.r1,
                                  style: { left: h.x, top: h.y, width: h.width, height: h.height },
                              }),
                }),
            ],
        }),
        document.body,
    );
}
function eq(e) {
    let { projectId: t } = e,
        n = (0, x.bG)([U.A], () => U.A.isThinking(t), [t]);
    return (0, a.jsx)("div", { className: X.MP, "data-active": n, "aria-hidden": !0 });
}
let eZ = 0;
var eJ = n(291815);
function eQ(e) {
    let { applicationId: t, surface: n, previewReady: l, content: s, sidebar: o } = e,
        [c, d] = r.useState(null),
        u = (0, i.A)(t, n),
        m = u?.id ?? null,
        [h, p] = r.useState(null),
        f = r.useCallback(() => {
            let e,
                t =
                    null != (e = c?.querySelector("iframe"))
                        ? e
                        : null == m
                          ? null
                          : document.querySelector(`[data-frame-id="${CSS.escape(m)}"] iframe`),
                n = t?.getBoundingClientRect();
            return null == t || null == n || n.width < 1 || n.height < 1
                ? Promise.reject(Error("no visible preview to capture"))
                : new Promise((e, l) => {
                      p({
                          targetRect: { left: n.left, top: n.top, width: n.width, height: n.height },
                          iframe: t,
                          resolve: e,
                          reject: l,
                      });
                  });
        }, [c, m]),
        g = r.useCallback(
            (e) => {
                p(null),
                    null != h &&
                        (function (e, t) {
                            let n,
                                l = e.contentWindow;
                            if (null == l) return Promise.reject(Error("preview frame not ready"));
                            try {
                                n = new URL(e.src, window.location.href).origin;
                            } catch {
                                return Promise.reject(Error("preview frame has no resolvable origin"));
                            }
                            let a = `vibegrations-capture-${++eZ}-${Date.now()}`;
                            return new Promise((e, r) => {
                                let i = window.setTimeout(() => {
                                    s(), r(Error("capture timed out"));
                                }, 15e3);
                                function s() {
                                    window.clearTimeout(i), window.removeEventListener("message", o);
                                }
                                function o(t) {
                                    t.source !== l ||
                                        ((function (e, t) {
                                            if ("object" != typeof e || null == e) return !1;
                                            let n = e.blob instanceof Blob,
                                                l = "string" == typeof e.error;
                                            return (
                                                "vibegrations-capture-region-result" === e.type && e.id === t && n !== l
                                            );
                                        })(t.data, a) &&
                                            (s(),
                                            null != t.data.blob
                                                ? e(
                                                      new File([t.data.blob], `preview-capture-${Date.now()}.png`, {
                                                          type: "image/png",
                                                      }),
                                                  )
                                                : r(Error(t.data.error))));
                                }
                                window.addEventListener("message", o),
                                    l.postMessage({ type: "vibegrations-capture-region", id: a, rect: t }, n);
                            });
                        })(h.iframe, e).then(h.resolve, h.reject);
            },
            [h],
        ),
        x = r.useCallback(() => {
            p(null), h?.resolve(null);
        }, [h]),
        v = l && null != t && n.type === y.U4.MAIN;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", { ref: d, className: eJ.fm, children: s }),
            o(v ? f : void 0),
            null != h ? (0, a.jsx)(eY, { targetRect: h.targetRect, onSelect: g, onCancel: x }) : null,
        ],
    });
}
function e0(e) {
    let { projectId: t, applicationId: n, surface: l, chatOpen: i, previewReady: c, previewGate: d } = e,
        u = r.useRef(null),
        [m, h] = r.useState(0);
    r.useLayoutEffect(() => {
        if (l.type === y.U4.MAIN) return (0, s.HV)(n), () => (0, s.HV)(null);
    }, [n, l.type]),
        r.useEffect(() => {
            null != t && (0, o.Hc)(t);
        }, [t]),
        r.useLayoutEffect(() => {
            let e = u.current;
            if (null == e) return;
            function t() {
                null != e && h(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return n.observe(e), () => n.disconnect();
        }, []),
        r.useEffect(() => () => (0, s.Zq)(0), []);
    let p = Math.max(360, m - 320),
        f = i || l.type === y.U4.MAIN;
    return (0, a.jsx)("div", {
        ref: u,
        className: eJ.LB,
        children: (0, a.jsx)(eQ, {
            applicationId: n,
            surface: l,
            previewReady: c,
            content: (0, a.jsx)(O, { applicationId: n, surface: l, previewReady: c, previewGate: d }),
            sidebar: (e) =>
                null != t && f
                    ? (0, a.jsx)(ez, {
                          open: i,
                          maxWidth: p,
                          onWidthChange: s.Zq,
                          children: (0, a.jsxs)("div", {
                              className: eJ.cO,
                              children: [
                                  (0, a.jsx)(eq, { projectId: t }),
                                  (0, a.jsx)(eU, { projectId: t, onRegionCapture: e }, t),
                              ],
                          }),
                      })
                    : null,
        }),
    });
}
