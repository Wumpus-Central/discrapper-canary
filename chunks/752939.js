n.d(t, { A: () => e7 });
var l,
    a = n(477900),
    i = n(582128),
    r = n(672929),
    s = n(948230),
    o = n(998939),
    c = n(289873),
    d = n(821609),
    u = n(323384),
    h = n(834730),
    m = n(580954),
    p = n(297264),
    f = n(812901),
    g = n(317608),
    x = n(17928),
    v = n(956518),
    b = n(627363),
    k = n(869146),
    j = n(625180),
    E = n(91242),
    w = n(207371),
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
function T(e) {
    let { title: t, body: n, wide: l = !1, children: i } = e;
    return (0, a.jsxs)("div", {
        className: A()(C.Bf, l && C.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: C.Ux,
                children: [
                    (0, a.jsx)(p.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, a.jsx)(h.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
                ],
            }),
            i,
        ],
    });
}
var R = n(818085),
    I = n(375708),
    P = n(616694);
function M(e) {
    let { applicationId: t, surface: n } = e,
        { frame: l, state: r } = (function (e) {
            let { applicationId: t, surface: n } = e,
                {
                    surface: l,
                    setFailed: a,
                    lifecycle: r,
                } = (function (e) {
                    let { applicationId: t, surface: n } = e,
                        l = i.useMemo(() => (0, y.VA)(t, n), [t, n]),
                        a = i.useMemo(() => n, [l]),
                        r = (0, x.bG)([E.A], () => E.A.getFrame(l), [l]),
                        s = (0, x.bG)(
                            [k.A, E.A],
                            () => k.A.getWindowOpen(N.MLl.ACTIVITY_POPOUT) && E.A.getMainFrame()?.id === l,
                            [l],
                        ),
                        { data: o, isLoading: c } = (0, b.YY)(t),
                        d = (0, w.x)(o),
                        u = null != (0, v.Ay)(t),
                        [h, m] = i.useState(null),
                        p = h === l;
                    return {
                        surface: a,
                        setFailed: i.useCallback(() => m(l), [l]),
                        lifecycle: (0, y.x1)(r)
                            ? s
                                ? { state: "rendering-elsewhere" }
                                : { state: "launched", frame: r }
                            : p
                              ? { state: "error" }
                              : r?.state === "loading"
                                ? { state: "loading", frame: r }
                                : c
                                  ? { state: "loading", frame: void 0 }
                                  : null != o && u
                                    ? d
                                        ? { state: "awaiting-launch" }
                                        : { state: "does-not-support-surface" }
                                    : { state: "no-application" },
                    };
                })({ applicationId: t, surface: n }),
                { state: s } = r;
            return (
                i.useEffect(() => {
                    "awaiting-launch" === s && e();
                    async function e() {
                        try {
                            await j.A.launchFrame({ applicationId: t, surface: l });
                        } catch {
                            a();
                        }
                    }
                }, [s, t, l, a]),
                r
            );
        })({ applicationId: t, surface: n }),
        s = i.useMemo(() => (0, y.VA)(t, n), [t, n]);
    switch (
        (i.useEffect(() => {
            if ((0, y.Yf)(n) === y.sV.MAIN) return () => (0, m.A)().leaveFrame(s);
        }, [s, n]),
        r)
    ) {
        case _.Launched:
            return (0, a.jsx)(g.A, { frameId: l.id, level: f.A.WithinAppContent, className: P.Z7 });
        case _.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: P.qs,
                children: (0, a.jsx)(T, {
                    title: I.intl.string(R.default["4f6Vkr"]),
                    body: I.intl.string(R.default.LJ2q1H),
                }),
            });
        case _.NoApplication:
            return (0, a.jsxs)("div", {
                className: P.qs,
                children: [
                    (0, a.jsx)(u.k, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
                    (0, a.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: I.intl.string(R.default["6xTawd"]),
                    }),
                ],
            });
        case _.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: P.qs,
                children: (0, a.jsx)(T, {
                    title: I.intl.string(R.default.FHOJiH),
                    body: I.intl.string(R.default["1yLQoV"]),
                }),
            });
        case _.Error:
            return (0, a.jsxs)("div", {
                className: P.qs,
                children: [
                    (0, a.jsx)(p.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: I.intl.string(R.default.MeLWCr),
                    }),
                    (0, a.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: P.tj,
                        children: I.intl.string(R.default["1RCbQT"]),
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
        o = (0, r.A)(t, n);
    return (i.useEffect(() => {
        s?.type === "permissions" && null != o && (0, m.A)().leaveFrame(o.id);
    }, [o, s?.type]),
    s?.type === "checking")
        ? (0, a.jsx)("div", { className: L.q, children: (0, a.jsx)(c.y, {}) })
        : s?.type === "permissions"
          ? (0, a.jsx)("div", {
                className: L.q,
                children: (0, a.jsx)(T, {
                    wide: !0,
                    title: I.intl.string(R.default.DYwf2n),
                    body: I.intl.string(R.default.WWj3pN),
                    children: (0, a.jsx)(d.$, {
                        variant: "primary",
                        size: "md",
                        text: I.intl.string(R.default["CRfE/E"]),
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
                      (0, a.jsx)(h.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: I.intl.string(R.default["6xTawd"]),
                      }),
                  ],
              });
}
var D = n(689175),
    G = n(783791);
n(323874), n(14289), n(35956), n(321073);
var U = n(866665),
    B = n(588975),
    H = n(428610),
    V = n(826745),
    W = n(559647),
    F = n(514042),
    z = n(285796),
    $ = n(673724),
    K = n(17117),
    X = n(692228);
let Y = 0;
function q(e) {
    let { canSend: t, onSend: n, onUploadFile: l, onDeleteFile: r, onApprove: s, onRegionCapture: o } = e,
        [d, u] = i.useState(""),
        [h, m] = i.useState([]),
        [p, f] = i.useState(!1),
        [g, x] = i.useState(!1),
        v = i.useRef(null),
        b = i.useRef([]),
        k = i.useRef(new Set()),
        j = i.useRef(r);
    j.current = r;
    let E = i.useCallback((e) => {
            (b.current = e), m(e);
        }, []),
        w = i.useCallback((e) => {
            j.current(e.id).catch((e) => {
                console.error("[vibegrations] attachment cleanup failed", e);
            });
        }, []);
    i.useEffect(() => {
        let e = k.current;
        return () => {
            for (let t of b.current)
                e.add(t.localId), null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && w(t.ref);
        };
    }, [w]);
    let y = i.useCallback(
            (e, t) => {
                if (k.current.has(e)) return;
                let n = b.current;
                n.some((t) => t.localId === e) && E(n.map((n) => (n.localId === e ? { ...n, ...t } : n)));
            },
            [E],
        ),
        N = i.useCallback(
            (e) => {
                if (0 === e.length) return;
                let t = [...b.current],
                    n = [];
                for (let l of e) {
                    let e = "" === l.type ? "application/octet-stream" : l.type,
                        a = ++Y,
                        i = { localId: a, name: l.name, size: l.size, contentType: e, status: "uploading" };
                    if (t.length >= 5) {
                        t.push({
                            ...i,
                            status: "error",
                            errorText: I.intl.formatToPlainString(R.default.DlX57a, { count: 5 }),
                        });
                        continue;
                    }
                    if (l.size > ($.Wb.has(e) ? 5242880 : 0xa00000)) {
                        t.push({ ...i, status: "error", errorText: I.intl.string(R.default.cI7t94) });
                        continue;
                    }
                    let r = $.Wb.has(e) ? URL.createObjectURL(l) : void 0;
                    t.push({ ...i, previewUrl: r }), n.push({ file: l, localId: a });
                }
                for (let { file: e, localId: a } of (E(t), n))
                    l(e).then(
                        (e) => {
                            k.current.has(a) ? w(e) : y(a, { status: "ready", ref: e });
                        },
                        (e) => {
                            k.current.has(a) ||
                                (console.error("[vibegrations] attachment upload failed", e),
                                y(a, { status: "error", errorText: I.intl.string(R.default.GwEHvn) }));
                        },
                    );
            },
            [w, l, y, E],
        ),
        _ = i.useCallback(async () => {
            if (null != o && !g) {
                x(!0);
                try {
                    let e = await o();
                    null != e && N([e]);
                } catch (e) {
                    console.error("[vibegrations] region capture failed", e),
                        E([
                            ...b.current,
                            {
                                localId: ++Y,
                                name: "preview-capture.png",
                                size: 0,
                                contentType: "image/png",
                                status: "error",
                                errorText: I.intl.string(R.default["4DQd7d"]),
                            },
                        ]);
                } finally {
                    x(!1);
                }
            }
        }, [o, g, N, E]),
        S = i.useCallback(
            (e) => {
                let t = b.current,
                    n = t.find((t) => t.localId === e);
                k.current.add(e),
                    n?.previewUrl != null && URL.revokeObjectURL(n.previewUrl),
                    n?.ref != null && w(n.ref),
                    E(t.filter((t) => t.localId !== e));
            },
            [w, E],
        ),
        A = h.every((e) => "ready" === e.status),
        C = "" !== d.trim() || h.length > 0,
        T = t && C && A,
        P = i.useCallback(() => {
            if (!T) return;
            let e = b.current.filter((e) => null != e.ref).map((e) => e.ref);
            for (let t of (n(d, e.length > 0 ? e : void 0), b.current))
                null != t.previewUrl && URL.revokeObjectURL(t.previewUrl);
            u(""), E([]);
        }, [T, d, n, E]),
        M = i.useCallback(
            (e) => {
                e.preventDefault(), P();
            },
            [P],
        ),
        L = i.useCallback(
            (e) => {
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != s && (e.preventDefault(), s());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), P());
            },
            [P, s],
        ),
        O = i.useCallback(
            (e) => {
                if (!t) return;
                let n = Array.from(e.clipboardData.files);
                0 !== n.length && (e.preventDefault(), N(n));
            },
            [t, N],
        ),
        D = i.useCallback(
            (e) => {
                e.preventDefault(), f(!1), t && N(Array.from(e.dataTransfer.files));
            },
            [t, N],
        ),
        G = i.useCallback((e) => {
            e.dataTransfer.types.includes("Files") && (e.preventDefault(), f(!0));
        }, []),
        F = i.useCallback(
            (e) => {
                N(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = "");
            },
            [N],
        );
    return (0, a.jsxs)("form", {
        onSubmit: M,
        onDrop: D,
        onDragOver: G,
        onDragLeave: () => f(!1),
        className: p ? `${K.DA} ${K.pV}` : K.DA,
        children: [
            h.length > 0
                ? (0, a.jsx)("div", {
                      className: K.lN,
                      children: h.map((e) => (0, a.jsx)(Z, { draft: e, onRemove: S }, e.localId)),
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
                    (0, a.jsx)(U.m, {
                        text: I.intl.string(R.default.gUn10I),
                        ariaHidden: !0,
                        children: (0, a.jsx)("button", {
                            type: "button",
                            className: K.Y0,
                            disabled: !t,
                            onClick: () => v.current?.click(),
                            "aria-label": I.intl.string(R.default.gUn10I),
                            children: (0, a.jsx)(B.P, { size: "sm", color: "currentColor" }),
                        }),
                    }),
                    (0, a.jsx)(U.m, {
                        text: I.intl.string(R.default.B5gWPk),
                        ariaHidden: !0,
                        children: (0, a.jsx)("button", {
                            type: "button",
                            className: K.Y0,
                            disabled: null == o || !t || g,
                            onClick: _,
                            "aria-label": I.intl.string(R.default.B5gWPk),
                            children: g
                                ? (0, a.jsx)(c.y, { type: c.t.SPINNING_CIRCLE_SIMPLE, className: K.Rk })
                                : (0, a.jsx)(H.K, { size: "sm", color: "currentColor" }),
                        }),
                    }),
                    (0, a.jsx)(V.y, {
                        value: d,
                        onChange: (e) => u(e.currentTarget.value),
                        onKeyDown: L,
                        onPaste: O,
                        placeholder: t ? I.intl.string(R.default.ahRdoJ) : I.intl.string(R.default.nm4w9P),
                        disabled: !t,
                        "aria-label": I.intl.string(R.default.OPr66w),
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
                                disabled: !T,
                                "aria-label": I.intl.string(R.default["22GHMt"]),
                                children: (0, a.jsx)(W.l, { size: "xs", color: "currentColor", className: K.Mx }),
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
                    (0, a.jsx)(h.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: X.Rr,
                        children: t.name,
                    }),
                    "error" === t.status
                        ? (0, a.jsx)(h.E, {
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
                "aria-label": I.intl.string(R.default["3HWvgk"]),
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
    el = n(443865),
    ea = n(843614);
function ei(e) {
    let { idea: t, onPick: n } = e,
        l = i.useId(),
        r = null == n;
    return (0, a.jsxs)(J.D, {
        className: r ? `${ea.Nr} ${ea.xe}` : ea.Nr,
        onClick: r ? void 0 : () => n(t),
        "aria-label": I.intl.formatToPlainString(R.default.pztRGi, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : l,
        "aria-disabled": r,
        children: [
            (0, a.jsx)(h.E, {
                tag: "div",
                variant: "text-sm/semibold",
                color: "none",
                className: ea.JJ,
                children: t.title,
            }),
            "" === t.value
                ? null
                : (0, a.jsx)(h.E, {
                      tag: "div",
                      id: l,
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: t.value,
                  }),
        ],
    });
}
function er(e) {
    let { ideas: t, onPick: n } = e;
    return (0, a.jsxs)("section", {
        className: ea.kR,
        "data-vibegrations-idea-cards": !0,
        children: [
            (0, a.jsxs)("div", {
                className: ea.wx,
                children: [
                    (0, a.jsx)(el.x, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                    (0, a.jsx)(h.E, {
                        tag: "span",
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        children: I.intl.string(R.default.DAvYsi),
                    }),
                ],
            }),
            t.map((e) => (0, a.jsx)(ei, { idea: e, onPick: n }, e.id)),
        ],
    });
}
function es(e) {
    let { onAsk: t } = e;
    return (0, a.jsxs)("div", {
        className: ea.x,
        children: [
            (0, a.jsx)(h.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tag: "span",
                className: ea.I1,
                children: I.intl.string(R.default.tG5PBo),
            }),
            (0, a.jsx)(d.$, {
                variant: "secondary",
                size: "sm",
                disabled: null == t,
                onClick: t,
                text: I.intl.string(R.default.cwTe5o),
            }),
        ],
    });
}
var eo = n(84206);
function ec(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsxs)("section", {
              className: eo.hb,
              children: [
                  (0, a.jsx)(h.E, { variant: "text-xs/semibold", color: "text-muted", tag: "span", children: t }),
                  (0, a.jsx)("div", {
                      className: eo.Hu,
                      children: n.map((e) =>
                          (0, a.jsx)(
                              "span",
                              {
                                  className: eo.uR,
                                  children: (0, a.jsx)(h.E, {
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
function ed(e) {
    let { proposal: t, onApprove: n } = e;
    return (0, a.jsxs)("article", {
        className: eo.cz,
        "data-vibegrations-plan-card": !0,
        children: [
            (0, a.jsxs)("header", {
                className: eo.pu,
                children: [
                    (0, a.jsx)(h.E, {
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        tag: "span",
                        children: I.intl.string(R.default["60htw+"]),
                    }),
                    !0 === t.is_activity
                        ? (0, a.jsx)("span", {
                              className: eo.dr,
                              children: (0, a.jsx)(h.E, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  tag: "span",
                                  children: I.intl.string(I.t.IC5Ann),
                              }),
                          })
                        : null,
                ],
            }),
            (0, a.jsx)(h.E, { variant: "text-sm/normal", color: "text-default", selectable: !0, children: t.summary }),
            t.changes.length > 0
                ? (0, a.jsxs)("section", {
                      className: eo.hb,
                      children: [
                          (0, a.jsx)(h.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: I.intl.string(R.default.KLyB8Y),
                          }),
                          (0, a.jsx)("ul", {
                              className: eo.eQ,
                              children: t.changes.map((e, t) =>
                                  (0, a.jsxs)(
                                      "li",
                                      {
                                          className: eo.H6,
                                          children: [
                                              (0, a.jsx)(h.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  className: eo.UZ,
                                                  children: "\u2022",
                                              }),
                                              (0, a.jsx)(h.E, {
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
                      className: eo.hb,
                      children: [
                          (0, a.jsx)(h.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: I.intl.string(I.t["0hKkS+"]),
                          }),
                          (0, a.jsx)("ul", {
                              className: eo.eQ,
                              children: t.commands.map((e, t) =>
                                  (0, a.jsxs)(
                                      "li",
                                      {
                                          className: eo.Xs,
                                          children: [
                                              (0, a.jsxs)(h.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-default",
                                                  tag: "span",
                                                  selectable: !0,
                                                  children: ["launch" === e.kind ? "\u21EA " : "", "/", e.name],
                                              }),
                                              (0, a.jsx)(h.E, {
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
            (0, a.jsx)(ec, { label: I.intl.string(R.default.ieqTtP), names: t.bot_permissions ?? [] }),
            (0, a.jsx)(ec, { label: I.intl.string(R.default.Cn9qix), names: t.privileged_intents ?? [] }),
            null != n
                ? (0, a.jsxs)("div", {
                      className: eo.nc,
                      children: [
                          (0, a.jsx)(d.$, {
                              variant: "secondary",
                              size: "sm",
                              onClick: n,
                              text: I.intl.string(R.default.GYoWRk),
                          }),
                          (0, a.jsx)(h.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              tag: "span",
                              className: eo.sw,
                              children: "or reply to keep refining",
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var eu = n(700766),
    eh = n(742715);
let em = new Set(["thinking", "assistant_delta", "reply", "plan_proposed", "announcement"]);
function ep(e) {
    let {
            steps: t,
            announcement: n,
            content: l,
            proposal: r,
            onApprove: s,
            ideas: o,
            onPickIdea: c,
            offerIdeas: d,
            onAskForIdeas: u,
        } = e,
        m = i.useMemo(
            () =>
                (function (e) {
                    let t = [],
                        n = [],
                        l = null,
                        a = null;
                    for (let [i, r] of e.entries()) {
                        if ("thinking" === r.kind) {
                            a = null;
                            continue;
                        }
                        if ("assistant_delta" === r.kind) {
                            let e = r.message ?? "";
                            "" !== e &&
                                (null == a
                                    ? ((a = { type: "message", key: `message-${i}`, content: e }), t.push(a))
                                    : (a.content = e)),
                                !0 === r.message_finished && (a = null);
                            continue;
                        }
                        em.has(r.kind) ||
                            ((a = null),
                            n.push(r),
                            null == l && ((l = { type: "steps", key: `steps-${i}`, groups: [] }), t.push(l)));
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
                                                    return I.intl.string(R.default["0ce6LB"]);
                                                case "planned":
                                                    return I.intl.formatToPlainString(R.default["h6H4+U"], {
                                                        count: e.commands?.length ?? 0,
                                                    });
                                                case "thinking":
                                                    return I.intl.string(R.default.K7TkAL);
                                                case "writing_command":
                                                    return e.friendly ?? e.name ?? I.intl.string(R.default.nv6pUM);
                                                case "assembling":
                                                    return I.intl.string(R.default["9G3ZmA"]);
                                                case "installing_deps":
                                                    return I.intl.string(R.default.VZuRug);
                                                case "building":
                                                    return I.intl.string(R.default["s+ylXP"]);
                                                case "bundling":
                                                    return I.intl.string(R.default.rEQlMx);
                                                case "committing":
                                                    return I.intl.string(R.default.Yvyw1H);
                                                case "built":
                                                    return I.intl.string(R.default.hOcVAj);
                                                case "build_error":
                                                    return I.intl.string(R.default["6L9Vwt"]);
                                                case "healthchecking":
                                                    return I.intl.string(R.default.sz8yAj);
                                                case "preview_connecting":
                                                    return I.intl.string(R.default.pOYDEc);
                                                case "awaiting_auth":
                                                    return I.intl.string(R.default["orD+xo"]);
                                                case "healthcheck_passed":
                                                    return I.intl.string(R.default["x+sqTG"]);
                                                case "healthcheck_failed":
                                                    return I.intl.string(R.default.FUWbq1);
                                                case "deploying":
                                                    return I.intl.string(R.default.wcXX8Z);
                                                case "preview_ready":
                                                    return I.intl.string(R.default["78YNh7"]);
                                                case "error":
                                                case "terminal_error":
                                                    return I.intl.string(R.default.j3hBoA);
                                                default:
                                                    return I.intl.string(R.default.nv6pUM);
                                            }
                                        })(n),
                                        i = e.filter((e) => e !== a);
                                    if (null != l && l.summary === a) {
                                        l.technical.push(...i);
                                        continue;
                                    }
                                    t.push({ step: n, summary: a, technical: i });
                                }
                                return t;
                            })(n)),
                        t
                    );
                })(t),
            [t],
        ),
        p = m.at(-1),
        f = p?.type === "message" && p.content.trim() === l.trim(),
        g = null == r && "" !== l && !f;
    return (0, a.jsxs)("div", {
        className: eu.ue,
        children: [
            null != n && "" !== n
                ? (0, a.jsx)(h.E, {
                      tag: "div",
                      variant: "text-sm/normal",
                      color: "text-default",
                      selectable: !0,
                      className: A()(eu.ky, eu.Xt, X.XR),
                      children: n,
                  })
                : null,
            m.length > 0
                ? (0, a.jsx)("ol", {
                      className: eu.dO,
                      children: m.map((e) =>
                          "message" === e.type
                              ? (0, a.jsx)(
                                    "li",
                                    {
                                        className: A()(eu.ky, X.XR),
                                        children: (0, a.jsx)("div", {
                                            className: A()(eh.PT, eu.cW),
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
                                        className: A()(eu.ky, X.XR),
                                        children: (0, a.jsx)("ol", {
                                            className: eu.dO,
                                            children: e.groups.map((e, t) => (0, a.jsx)(ef, { group: e }, t)),
                                        }),
                                    },
                                    e.key,
                                ),
                      ),
                  })
                : null,
            null != r
                ? (0, a.jsx)("div", {
                      className: A()(eu.ky, X.XR),
                      children: (0, a.jsx)(ed, { proposal: r, onApprove: s }),
                  })
                : g
                  ? (0, a.jsxs)("div", {
                        className: A()(eu.ky, X.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: A()(eh.PT, eu.cW),
                                children: en.A.parse(l, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            !0 === d
                                ? (0, a.jsx)("div", { className: eu.IN, children: (0, a.jsx)(es, { onAsk: u }) })
                                : null,
                        ],
                    })
                  : null,
            null != o && o.length > 0
                ? (0, a.jsx)("div", { className: A()(eu.ky, X.XR), children: (0, a.jsx)(er, { ideas: o, onPick: c }) })
                : null,
            !0 !== d || g
                ? null
                : (0, a.jsx)("div", { className: A()(eu.ky, X.XR), children: (0, a.jsx)(es, { onAsk: u }) }),
        ],
    });
}
function ef(e) {
    var t;
    let { group: n } = e,
        [l, r] = i.useState(!1),
        s = i.useId(),
        o = i.useCallback(() => r((e) => !e), []),
        c =
            "error" === (t = n.step.kind) || "terminal_error" === t || "build_error" === t
                ? "text-feedback-critical"
                : "text-default";
    if (0 === n.technical.length)
        return (0, a.jsx)("li", {
            "data-step-kind": n.step.kind,
            className: eu.Dx,
            children: (0, a.jsx)(h.E, {
                tag: "div",
                variant: "text-sm/normal",
                color: c,
                selectable: !0,
                className: eu.iq,
                children: n.summary,
            }),
        });
    let d = l ? ee.a : et._;
    return (0, a.jsxs)("li", {
        "data-step-kind": n.step.kind,
        className: eu.Dx,
        children: [
            (0, a.jsxs)(J.D, {
                tag: "div",
                className: eu.kG,
                "aria-expanded": l,
                "aria-controls": s,
                "aria-label": I.intl.formatToPlainString(R.default.z4KWsN, { step: n.summary }),
                onClick: o,
                children: [
                    (0, a.jsx)(h.E, {
                        tag: "span",
                        variant: "text-sm/normal",
                        color: c,
                        className: eu.iq,
                        children: n.summary,
                    }),
                    (0, a.jsx)(d, { size: "xs", color: "currentColor", className: eu.Ue }),
                ],
            }),
            (0, a.jsx)("div", {
                id: s,
                hidden: !l,
                className: eu.yJ,
                children: n.technical.map((e, t) =>
                    (0, a.jsx)(
                        h.E,
                        { tag: "div", variant: "text-xs/normal", color: "text-muted", selectable: !0, children: e },
                        t,
                    ),
                ),
            }),
        ],
    });
}
var eg = n(289149);
function ex(e) {
    let { projectId: t, messages: n, onApprove: l, onPickIdea: i, onAskForIdeas: r } = e,
        s = n[n.length - 1];
    return (0, a.jsx)("ol", {
        className: eg.x7,
        children: n.map((e) => {
            if ("user" === e.role)
                return (0, a.jsx)(
                    ey,
                    {
                        role: "user",
                        children: (0, a.jsxs)("div", {
                            className: A()(eg.B2, X.XR),
                            children: [
                                "" !== e.content
                                    ? (0, a.jsx)(h.E, {
                                          variant: "text-md/normal",
                                          color: "text-default",
                                          selectable: !0,
                                          children: e.content,
                                      })
                                    : null,
                                null != e.attachments && e.attachments.length > 0
                                    ? (0, a.jsx)(ev, { projectId: t, attachments: e.attachments })
                                    : null,
                            ],
                        }),
                    },
                    e.render_id,
                );
            let n = e.steps.filter((e) => !em.has(e.kind)).length > 0,
                o = e.steps.some((e) => "assistant_delta" === e.kind && null != e.message && "" !== e.message),
                c = "plan_implemented" === e.kind && e === s;
            return "" !== e.content || null != e.proposal || null != e.ideas || c || n || o || null != e.announcement
                ? (0, a.jsx)(
                      ey,
                      {
                          role: "assistant",
                          children: (0, a.jsx)(ep, {
                              steps: e.steps,
                              announcement: e.announcement,
                              content: e.content,
                              proposal: e.proposal,
                              onApprove: e === s ? l : void 0,
                              ideas: e.ideas,
                              onPickIdea: i,
                              offerIdeas: c,
                              onAskForIdeas: r,
                          }),
                      },
                      e.render_id,
                  )
                : null;
        }),
    });
}
function ev(e) {
    let { projectId: t, attachments: n } = e;
    return (0, a.jsx)("div", {
        className: eg.KT,
        children: n.map((e, n) =>
            null == e.id
                ? (0, a.jsx)(ej, { name: e.name }, n)
                : $.Wb.has(e.content_type)
                  ? (0, a.jsx)(ew, { projectId: t, id: e.id, name: e.name }, n)
                  : (0, a.jsx)(eE, { projectId: t, id: e.id, name: e.name }, n),
        ),
    });
}
let eb = A()(X._B, X.ND);
function ek(e, t, n) {
    return (0, a.jsxs)(a.Fragment, {
        children: [
            null != t
                ? (0, a.jsx)("img", { src: t, alt: "", className: X.gJ, onError: n })
                : (0, a.jsx)(F.o, { size: "xs", color: "currentColor" }),
            (0, a.jsx)("div", {
                className: X.Wd,
                children: (0, a.jsx)(h.E, {
                    variant: "text-sm/medium",
                    color: "text-default",
                    className: X.Rr,
                    children: e,
                }),
            }),
        ],
    });
}
function ej(e) {
    let { name: t, unavailable: n = !1 } = e,
        l = n ? I.intl.formatToPlainString(R.default.OBr7WW, { name: t }) : t;
    return (0, a.jsx)("div", { className: eb, children: ek(l, null) });
}
function eE(e) {
    let { projectId: t, id: n, name: l } = e,
        [r, s] = i.useState(!1);
    i.useEffect(() => {
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
    let c = i.useCallback(() => {
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
    return r
        ? (0, a.jsx)(ej, { name: l, unavailable: !0 })
        : (0, a.jsx)(J.D, {
              className: A()(eb, eg.dz),
              onClick: c,
              "aria-label": I.intl.formatToPlainString(R.default.gV5YcR, { name: l }),
              children: ek(l, null),
          });
}
function ew(e) {
    let { projectId: t, id: n, name: l } = e,
        [r, s] = i.useState(null),
        [c, d] = i.useState(!1);
    i.useEffect(() => {
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
    let u = i.useCallback(() => {
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
        ? (0, a.jsx)(ej, { name: l, unavailable: !0 })
        : (0, a.jsx)(J.D, {
              className: A()(eb, eg.dz),
              onClick: u,
              "aria-label": I.intl.formatToPlainString(R.default.QUFLUq, { name: l }),
              children: ek(l, r, () => {
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
function ey(e) {
    let { role: t, children: n } = e;
    return (0, a.jsx)("li", { "data-role": t, className: eg.xk, children: n });
}
var eN = n(863610),
    e_ = n(379307),
    eS = n(922016),
    eA = n(885574),
    eC = n(677175);
function eT(e) {
    return e.toLocaleString();
}
function eR(e) {
    let { label: t, usage: n } = e;
    return (0, a.jsxs)("div", {
        className: eC.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: eC.mf,
                children: [
                    (0, a.jsx)(h.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(h.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [eT((0, $.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(h.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    eT(n.input_tokens),
                    " in \xb7 ",
                    eT(n.output_tokens),
                    " out \xb7 ",
                    eT(n.cache_creation_input_tokens),
                    " cache write \xb7 ",
                    eT(n.cache_read_input_tokens),
                    " cache read",
                ],
            }),
        ],
    });
}
function eI(e) {
    let { project: t } = e,
        n = (0, $.wV)(t.orchestrator, t.codegen);
    return (0, a.jsxs)("div", {
        className: eC.si,
        role: "dialog",
        "aria-label": I.intl.string(R.default["9yoLWZ"]),
        children: [
            (0, a.jsx)("div", {
                className: eC.Q$,
                children: (0, a.jsxs)("div", {
                    className: eC.mf,
                    children: [
                        (0, a.jsxs)(h.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [eT((0, $.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(h.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(eR, { label: I.intl.string(R.default.hk4jJr), usage: t.orchestrator }),
            (0, a.jsx)(eR, { label: I.intl.string(R.default.R9aduM), usage: t.codegen }),
            (0, a.jsxs)("div", {
                className: eC.mf,
                children: [
                    (0, a.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: I.intl.string(R.default["kILb+R"]),
                    }),
                    (0, a.jsx)(h.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, $.sj)(n) ? "\u2014" : `${Math.round(100 * (0, $.CA)(n))}%`,
                    }),
                ],
            }),
        ],
    });
}
function eP(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(eS.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(eI, { project: t }),
        children: (e) =>
            (0, a.jsx)(J.D, {
                innerRef: n,
                className: eC.Y$,
                "aria-label": I.intl.string(R.default.AWQ2ZV),
                ...e,
                children: (0, a.jsx)(eA.m, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
            }),
    });
}
var eM = n(154861);
function eL(e) {
    switch (e) {
        case "open":
            return I.intl.string(R.default.cLhFMi);
        case "connecting":
            return I.intl.string(R.default.W7oyuf);
        case "failed":
            return I.intl.string(R.default.eE60xI);
        case "closed":
            return I.intl.string(R.default["yBmS+I"]);
    }
}
function eO(e) {
    let { thinking: t, projectUsage: n, connState: l, modelSettings: i, onModelSettingsChange: r } = e;
    return (0, a.jsxs)("div", {
        className: eM.jf,
        children: [
            (0, a.jsx)("div", {
                className: eM.Xx,
                "data-vibegrations-activity": !0,
                children: t
                    ? (0, a.jsxs)("div", {
                          className: eM.e_,
                          role: "status",
                          "aria-live": "polite",
                          "aria-label": I.intl.string(R.default.C0t6bp),
                          children: [
                              (0, a.jsx)(eN.n, { dotRadius: 3.5, themed: !0 }),
                              (0, a.jsx)(h.E, {
                                  tag: "span",
                                  variant: "text-xs/semibold",
                                  color: "text-strong",
                                  children: I.intl.string(R.default.QDGuNS),
                              }),
                          ],
                      })
                    : null,
            }),
            null == i
                ? null
                : (0, a.jsx)(e_.A, { settings: i.settings, choices: i.choices, disabled: "open" !== l, onChange: r }),
            null == n
                ? null
                : (0, a.jsxs)("span", {
                      className: eM.BP,
                      children: [
                          (0, a.jsx)(h.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": I.intl.formatToPlainString(R.default["7SZZvj"], {
                                  runes: (0, $.a7)(n.cost_usd),
                                  turns: n.turns,
                              }),
                              children: I.intl.formatToPlainString(R.default["4PFO2p"], {
                                  runes: (0, $.a7)(n.cost_usd).toLocaleString(),
                              }),
                          }),
                          (0, a.jsx)(eP, { project: n }),
                      ],
                  }),
            (0, a.jsx)(h.E, {
                tag: "span",
                variant: "text-xs/medium",
                color:
                    "open" === l ? "text-feedback-positive" : "failed" === l ? "text-feedback-critical" : "text-muted",
                "aria-label": I.intl.formatToPlainString(R.default.eDDdhB, { status: eL(l) }),
                "data-vibegrations-conn": !0,
                "data-state": l,
                className: eM.XF,
                children: eL(l),
            }),
        ],
    });
}
var eD = n(506774),
    eG = n(192308),
    eU = n(651649),
    eB = n(670455);
let eH = "shownVibegrationsFeedbackProjectIds";
var eV = n(104071);
function eW(e) {
    let { projectId: t, onRegionCapture: l } = e,
        r = (0, x.bG)([G.A], () => G.A.getMessages(t), [t]),
        s = (0, x.bG)([o.Ay], () => o.Ay.getConnState(t), [t]),
        c = (0, x.bG)([G.A], () => G.A.getProjectUsage(t), [t]),
        d = (0, x.bG)([o.Ay], () => o.Ay.getModelSettings(t), [t]),
        u = i.useRef(null),
        h = i.useRef(null),
        m = i.useRef(!0);
    i.useEffect(() => {
        m.current && h.current?.scrollToBottom();
    }, [r]);
    let p = i.useCallback(() => {
        let e = h.current;
        null != e && (m.current = 32 > e.getDistanceFromBottom());
    }, []);
    i.useLayoutEffect(() => {
        let e = u.current;
        if (null == e) return;
        let t = e.getBoundingClientRect().width,
            n = null,
            l = new ResizeObserver((l) => {
                let [a] = l,
                    i = a?.contentRect.width ?? e.getBoundingClientRect().width;
                i === t ||
                    ((t = i),
                    m.current &&
                        (null != n && cancelAnimationFrame(n),
                        (n = requestAnimationFrame(() => h.current?.scrollToBottom()))));
            });
        return (
            l.observe(e),
            () => {
                l.disconnect(), null != n && cancelAnimationFrame(n);
            }
        );
    }, []),
        i.useEffect(() => {
            (0, o.Hc)(t);
        }, [t]),
        i.useEffect(
            () => () =>
                (function (e) {
                    let t = G.A.getMessages(e).filter((e) => "assistant" === e.role && (0, G.B)(e)).length;
                    !(t < 3) &&
                        ((eD.w.get(eH) ?? []).includes(e) ||
                            eU.A.possiblyShowFeedbackModal(eB.MW.VIBEGRATIONS, () => {
                                let l;
                                (l = eD.w.get(eH) ?? []).includes(e) || eD.w.set(eH, [...l, e]),
                                    (0, eG.openModalLazy)(async () => {
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
    let f = i.useCallback(
            (e, n) => {
                (0, o.dv)(t, e, n);
            },
            [t],
        ),
        g = i.useCallback((e) => f(e.implementation_prompt), [f]),
        v = i.useCallback(() => f(I.intl.string(R.default["3sTTBu"])), [f]),
        b = i.useCallback((e) => (0, o.XZ)(t, e), [t]),
        k = i.useCallback((e) => (0, o.vX)(t, e), [t]),
        j = i.useCallback((e) => (0, o.Vm)(t, e), [t]),
        E = i.useCallback(() => f(I.intl.string(R.default.Jj8Ftb)), [f]),
        w = "open" === s,
        y = r[r.length - 1],
        N = null != y && "assistant" === y.role && null != y.proposal,
        _ = null != y && "assistant" === y.role && !(0, G.B)(y),
        S = N && w ? E : void 0;
    return (0, a.jsxs)("section", {
        ref: u,
        "data-vibegrations-chat": !0,
        className: eV.T,
        children: [
            (0, a.jsx)(D.Ch, {
                ref: h,
                onScroll: p,
                "data-vibegrations-chat-log": !0,
                className: eV.N,
                children: (0, a.jsx)(ex, {
                    projectId: t,
                    messages: r,
                    onApprove: S,
                    onPickIdea: w ? g : void 0,
                    onAskForIdeas: w ? v : void 0,
                }),
            }),
            (0, a.jsx)(eO, { thinking: _, projectUsage: c, connState: s, modelSettings: d, onModelSettingsChange: b }),
            (0, a.jsx)(q, {
                canSend: w,
                onSend: f,
                onUploadFile: k,
                onDeleteFile: j,
                onApprove: S,
                onRegionCapture: l,
            }),
        ],
    });
}
var eF = n(435558),
    ez = n(661531),
    e$ = n(602853),
    eK = n(517461),
    eX = n(761929),
    eY = n(552067);
function eq(e) {
    let { open: t, maxWidth: n, onWidthChange: l, children: r } = e,
        s = (0, e$.r)(ez.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = i.useRef(null),
        [c, d] = (0, eK.V)("VibegrationsChatSidebarWidth", 460),
        [u, h] = i.useState(c ?? 460),
        m = (0, eF.clamp)(u, 360, n);
    i.useLayoutEffect(() => {
        l(t ? m + s : 0);
    }, [m, t, s, l]);
    let p = (0, eX.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: o,
            onElementResize: h,
            onElementResizeEnd: d,
            orientation: eX.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        f = i.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), p(e));
            },
            [p],
        );
    return (0, a.jsxs)("div", {
        className: eY.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: eY.Di, onPointerDown: f }),
            (0, a.jsx)("div", { ref: o, className: eY.kL, style: { width: m }, children: r }),
        ],
    });
}
var eZ = n(333007),
    eJ = n(638015);
function eQ(e) {
    return {
        x: Math.min(e.startX, e.x),
        y: Math.min(e.startY, e.y),
        width: Math.abs(e.x - e.startX),
        height: Math.abs(e.y - e.startY),
    };
}
function e0(e) {
    let { targetRect: t, onSelect: n, onCancel: l } = e,
        [r, s] = i.useState(null);
    i.useEffect(() => {
        function e(e) {
            "Escape" === e.key && (e.stopPropagation(), l());
        }
        return window.addEventListener("keydown", e, !0), () => window.removeEventListener("keydown", e, !0);
    }, [l]);
    let o = i.useCallback(
            (e) => ({
                x: Math.min(Math.max(e.clientX - t.left, 0), t.width),
                y: Math.min(Math.max(e.clientY - t.top, 0), t.height),
            }),
            [t],
        ),
        c = i.useCallback(
            (e) => {
                if (0 !== e.button) return;
                e.preventDefault(), e.currentTarget.setPointerCapture(e.pointerId);
                let t = o(e);
                s({ startX: t.x, startY: t.y, x: t.x, y: t.y });
            },
            [o],
        ),
        d = i.useCallback(
            (e) => {
                let t = o(e);
                s((e) => (null == e ? e : { ...e, x: t.x, y: t.y }));
            },
            [o],
        ),
        u = i.useCallback(
            (e) => {
                if (null == r) return;
                let t = o(e),
                    a = eQ({ ...r, x: t.x, y: t.y });
                s(null), a.width < 8 && a.height < 8 ? l() : n(a);
            },
            [r, o, n, l],
        ),
        m = null == r ? null : eQ(r);
    return (0, eZ.createPortal)(
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("div", { className: eJ.tB, role: "presentation", onPointerDown: l }),
                (0, a.jsx)("div", {
                    className: eJ.aC,
                    style: { left: t.left, top: t.top, width: t.width, height: t.height },
                    role: "application",
                    "aria-label": I.intl.string(R.default["9MOgRI"]),
                    onPointerDown: c,
                    onPointerMove: d,
                    onPointerUp: u,
                    onPointerCancel: l,
                    children:
                        null == m
                            ? (0, a.jsx)("div", {
                                  className: eJ.F7,
                                  children: (0, a.jsx)("div", {
                                      className: eJ.aK,
                                      children: (0, a.jsx)(h.E, {
                                          variant: "text-sm/medium",
                                          color: "text-default",
                                          children: I.intl.string(R.default.ydkvBR),
                                      }),
                                  }),
                              })
                            : (0, a.jsx)("div", {
                                  className: eJ.r1,
                                  style: { left: m.x, top: m.y, width: m.width, height: m.height },
                              }),
                }),
            ],
        }),
        document.body,
    );
}
function e1(e) {
    let { projectId: t } = e,
        n = (0, x.bG)([G.A], () => G.A.isThinking(t), [t]);
    return (0, a.jsx)("div", { className: X.MP, "data-active": n, "aria-hidden": !0 });
}
let e2 = 0;
var e6 = n(291815);
function e5(e) {
    let { applicationId: t, surface: n, previewReady: l, content: s, sidebar: o } = e,
        [c, d] = i.useState(null),
        u = (0, r.A)(t, n),
        h = u?.id ?? null,
        [m, p] = i.useState(null),
        f = i.useCallback(() => {
            let e,
                t =
                    null != (e = c?.querySelector("iframe"))
                        ? e
                        : null == h
                          ? null
                          : document.querySelector(`[data-frame-id="${CSS.escape(h)}"] iframe`),
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
        }, [c, h]),
        g = i.useCallback(
            (e) => {
                p(null),
                    null != m &&
                        (function (e, t) {
                            let n,
                                l = e.contentWindow;
                            if (null == l) return Promise.reject(Error("preview frame not ready"));
                            try {
                                n = new URL(e.src, window.location.href).origin;
                            } catch {
                                return Promise.reject(Error("preview frame has no resolvable origin"));
                            }
                            let a = `vibegrations-capture-${++e2}-${Date.now()}`;
                            return new Promise((e, i) => {
                                let r = window.setTimeout(() => {
                                    s(), i(Error("capture timed out"));
                                }, 15e3);
                                function s() {
                                    window.clearTimeout(r), window.removeEventListener("message", o);
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
                                                : i(Error(t.data.error))));
                                }
                                window.addEventListener("message", o),
                                    l.postMessage({ type: "vibegrations-capture-region", id: a, rect: t }, n);
                            });
                        })(m.iframe, e).then(m.resolve, m.reject);
            },
            [m],
        ),
        x = i.useCallback(() => {
            p(null), m?.resolve(null);
        }, [m]),
        v = l && null != t && n.type === y.U4.MAIN;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", { ref: d, className: e6.fm, children: s }),
            o(v ? f : void 0),
            null != m ? (0, a.jsx)(e0, { targetRect: m.targetRect, onSelect: g, onCancel: x }) : null,
        ],
    });
}
function e7(e) {
    let { projectId: t, applicationId: n, surface: l, chatOpen: r, previewReady: c, previewGate: d } = e,
        u = i.useRef(null),
        [h, m] = i.useState(0);
    i.useLayoutEffect(() => {
        if (l.type === y.U4.MAIN) return (0, s.HV)(n), () => (0, s.HV)(null);
    }, [n, l.type]),
        i.useEffect(() => {
            null != t && (0, o.Hc)(t);
        }, [t]),
        i.useLayoutEffect(() => {
            let e = u.current;
            if (null == e) return;
            function t() {
                null != e && m(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return n.observe(e), () => n.disconnect();
        }, []),
        i.useEffect(() => () => (0, s.Zq)(0), []);
    let p = Math.max(360, h - 320),
        f = r || l.type === y.U4.MAIN;
    return (0, a.jsx)("div", {
        ref: u,
        className: e6.LB,
        children: (0, a.jsx)(e5, {
            applicationId: n,
            surface: l,
            previewReady: c,
            content: (0, a.jsx)(O, { applicationId: n, surface: l, previewReady: c, previewGate: d }),
            sidebar: (e) =>
                null != t && f
                    ? (0, a.jsx)(eq, {
                          open: r,
                          maxWidth: p,
                          onWidthChange: s.Zq,
                          children: (0, a.jsxs)("div", {
                              className: e6.cO,
                              children: [
                                  (0, a.jsx)(e1, { projectId: t }),
                                  (0, a.jsx)(eW, { projectId: t, onRegionCapture: e }, t),
                              ],
                          }),
                      })
                    : null,
        }),
    });
}
