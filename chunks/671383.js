n.d(t, { A: () => te });
var l,
    a = n(477900),
    s = n(582128),
    i = n(672929),
    r = n(948230),
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
    w = n(91242),
    y = n(207371),
    _ = n(165610),
    E = n(652215),
    N =
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
    let { title: t, body: n, wide: l = !1, children: s } = e;
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
            s,
        ],
    });
}
var I = n(818085),
    R = n(375708),
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
                        l = s.useMemo(() => (0, _.VA)(t, n), [t, n]),
                        a = s.useMemo(() => n, [l]),
                        i = (0, x.bG)([w.A], () => w.A.getFrame(l), [l]),
                        r = (0, x.bG)(
                            [k.A, w.A],
                            () => k.A.getWindowOpen(E.MLl.ACTIVITY_POPOUT) && w.A.getMainFrame()?.id === l,
                            [l],
                        ),
                        { data: o, isLoading: c } = (0, b.YY)(t),
                        d = (0, y.x)(o),
                        u = null != (0, v.Ay)(t),
                        [h, m] = s.useState(null),
                        p = h === l;
                    return {
                        surface: a,
                        setFailed: s.useCallback(() => m(l), [l]),
                        lifecycle: (0, _.x1)(i)
                            ? r
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
                { state: r } = i;
            return (
                s.useEffect(() => {
                    "awaiting-launch" === r && e();
                    async function e() {
                        try {
                            await j.A.launchFrame({ applicationId: t, surface: l });
                        } catch {
                            a();
                        }
                    }
                }, [r, t, l, a]),
                i
            );
        })({ applicationId: t, surface: n }),
        r = s.useMemo(() => (0, _.VA)(t, n), [t, n]);
    switch (
        (s.useEffect(() => {
            if ((0, _.Yf)(n) === _.sV.MAIN) return () => (0, m.A)().leaveFrame(r);
        }, [r, n]),
        i)
    ) {
        case N.Launched:
            return (0, a.jsx)(g.A, { frameId: l.id, level: f.A.WithinAppContent, className: P.Z7 });
        case N.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: P.qs,
                children: (0, a.jsx)(T, {
                    title: R.intl.string(I.default["4f6Vkr"]),
                    body: R.intl.string(I.default.LJ2q1H),
                }),
            });
        case N.NoApplication:
            return (0, a.jsxs)("div", {
                className: P.qs,
                children: [
                    (0, a.jsx)(u.k, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
                    (0, a.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: R.intl.string(I.default["6xTawd"]),
                    }),
                ],
            });
        case N.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: P.qs,
                children: (0, a.jsx)(T, {
                    title: R.intl.string(I.default.FHOJiH),
                    body: R.intl.string(I.default["1yLQoV"]),
                }),
            });
        case N.Error:
            return (0, a.jsxs)("div", {
                className: P.qs,
                children: [
                    (0, a.jsx)(p.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: R.intl.string(I.default.MeLWCr),
                    }),
                    (0, a.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: P.tj,
                        children: R.intl.string(I.default["1RCbQT"]),
                    }),
                ],
            });
        case N.AwaitingLaunch:
        case N.Loading:
            return (0, a.jsx)("div", { className: P.qs, children: (0, a.jsx)(c.y, {}) });
    }
}
var L = n(668917);
function O(e) {
    let { applicationId: t, surface: n, previewReady: l, previewGate: r } = e,
        o = (0, i.A)(t, n);
    return (s.useEffect(() => {
        r?.type === "permissions" && null != o && (0, m.A)().leaveFrame(o.id);
    }, [o, r?.type]),
    r?.type === "checking")
        ? (0, a.jsx)("div", { className: L.q, children: (0, a.jsx)(c.y, {}) })
        : r?.type === "permissions"
          ? (0, a.jsx)("div", {
                className: L.q,
                children: (0, a.jsx)(T, {
                    wide: !0,
                    title: R.intl.string(I.default.DYwf2n),
                    body: R.intl.string(I.default.WWj3pN),
                    children: (0, a.jsx)(d.$, {
                        variant: "primary",
                        size: "md",
                        text: R.intl.string(I.default["CRfE/E"]),
                        onClick: r.onReviewPermissions,
                        loading: r.loading,
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
                          children: R.intl.string(I.default["6xTawd"]),
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
let q = 0;
function Y(e) {
    let { canSend: t, onSend: n, onUploadFile: l, onDeleteFile: i, onApprove: r, onRegionCapture: o } = e,
        [d, u] = s.useState(""),
        [h, m] = s.useState([]),
        [p, f] = s.useState(!1),
        [g, x] = s.useState(!1),
        v = s.useRef(null),
        b = s.useRef([]),
        k = s.useRef(new Set()),
        j = s.useRef(i);
    j.current = i;
    let w = s.useCallback((e) => {
            (b.current = e), m(e);
        }, []),
        y = s.useCallback((e) => {
            j.current(e.id).catch((e) => {
                console.error("[vibegrations] attachment cleanup failed", e);
            });
        }, []);
    s.useEffect(() => {
        let e = k.current;
        return () => {
            for (let t of b.current)
                e.add(t.localId), null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && y(t.ref);
        };
    }, [y]);
    let _ = s.useCallback(
            (e, t) => {
                if (k.current.has(e)) return;
                let n = b.current;
                n.some((t) => t.localId === e) && w(n.map((n) => (n.localId === e ? { ...n, ...t } : n)));
            },
            [w],
        ),
        E = s.useCallback(
            (e) => {
                if (0 === e.length) return;
                let t = [...b.current],
                    n = [];
                for (let l of e) {
                    let e = "" === l.type ? "application/octet-stream" : l.type,
                        a = ++q,
                        s = { localId: a, name: l.name, size: l.size, contentType: e, status: "uploading" };
                    if (t.length >= 5) {
                        t.push({
                            ...s,
                            status: "error",
                            errorText: R.intl.formatToPlainString(I.default.DlX57a, { count: 5 }),
                        });
                        continue;
                    }
                    if (l.size > ($.Wb.has(e) ? 5242880 : 0xa00000)) {
                        t.push({ ...s, status: "error", errorText: R.intl.string(I.default.cI7t94) });
                        continue;
                    }
                    let i = $.Wb.has(e) ? URL.createObjectURL(l) : void 0;
                    t.push({ ...s, previewUrl: i }), n.push({ file: l, localId: a });
                }
                for (let { file: e, localId: a } of (w(t), n))
                    l(e).then(
                        (e) => {
                            k.current.has(a) ? y(e) : _(a, { status: "ready", ref: e });
                        },
                        (e) => {
                            k.current.has(a) ||
                                (console.error("[vibegrations] attachment upload failed", e),
                                _(a, { status: "error", errorText: R.intl.string(I.default.GwEHvn) }));
                        },
                    );
            },
            [y, l, _, w],
        ),
        N = s.useCallback(async () => {
            if (null != o && !g) {
                x(!0);
                try {
                    let e = await o();
                    null != e && E([e]);
                } catch (e) {
                    console.error("[vibegrations] region capture failed", e),
                        w([
                            ...b.current,
                            {
                                localId: ++q,
                                name: "preview-capture.png",
                                size: 0,
                                contentType: "image/png",
                                status: "error",
                                errorText: R.intl.string(I.default["4DQd7d"]),
                            },
                        ]);
                } finally {
                    x(!1);
                }
            }
        }, [o, g, E, w]),
        S = s.useCallback(
            (e) => {
                let t = b.current,
                    n = t.find((t) => t.localId === e);
                k.current.add(e),
                    n?.previewUrl != null && URL.revokeObjectURL(n.previewUrl),
                    n?.ref != null && y(n.ref),
                    w(t.filter((t) => t.localId !== e));
            },
            [y, w],
        ),
        A = h.every((e) => "ready" === e.status),
        C = "" !== d.trim() || h.length > 0,
        T = t && C && A,
        P = s.useCallback(() => {
            if (!T) return;
            let e = b.current.filter((e) => null != e.ref).map((e) => e.ref);
            for (let t of (n(d, e.length > 0 ? e : void 0), b.current))
                null != t.previewUrl && URL.revokeObjectURL(t.previewUrl);
            u(""), w([]);
        }, [T, d, n, w]),
        M = s.useCallback(
            (e) => {
                e.preventDefault(), P();
            },
            [P],
        ),
        L = s.useCallback(
            (e) => {
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != r && (e.preventDefault(), r());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), P());
            },
            [P, r],
        ),
        O = s.useCallback(
            (e) => {
                if (!t) return;
                let n = Array.from(e.clipboardData.files);
                0 !== n.length && (e.preventDefault(), E(n));
            },
            [t, E],
        ),
        D = s.useCallback(
            (e) => {
                e.preventDefault(), f(!1), t && E(Array.from(e.dataTransfer.files));
            },
            [t, E],
        ),
        U = s.useCallback((e) => {
            e.dataTransfer.types.includes("Files") && (e.preventDefault(), f(!0));
        }, []),
        F = s.useCallback(
            (e) => {
                E(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = "");
            },
            [E],
        );
    return (0, a.jsxs)("form", {
        onSubmit: M,
        onDrop: D,
        onDragOver: U,
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
                    (0, a.jsx)(G.m, {
                        text: R.intl.string(I.default.gUn10I),
                        ariaHidden: !0,
                        children: (0, a.jsx)("button", {
                            type: "button",
                            className: K.Y0,
                            disabled: !t,
                            onClick: () => v.current?.click(),
                            "aria-label": R.intl.string(I.default.gUn10I),
                            children: (0, a.jsx)(B.P, { size: "sm", color: "currentColor" }),
                        }),
                    }),
                    (0, a.jsx)(G.m, {
                        text: R.intl.string(I.default.B5gWPk),
                        ariaHidden: !0,
                        children: (0, a.jsx)("button", {
                            type: "button",
                            className: K.Y0,
                            disabled: null == o || !t || g,
                            onClick: N,
                            "aria-label": R.intl.string(I.default.B5gWPk),
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
                        placeholder: t ? R.intl.string(I.default.ahRdoJ) : R.intl.string(I.default.nm4w9P),
                        disabled: !t,
                        "aria-label": R.intl.string(I.default.OPr66w),
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
                                "aria-label": R.intl.string(I.default["22GHMt"]),
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
                "aria-label": R.intl.string(I.default["3HWvgk"]),
                children: (0, a.jsx)(z.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var J = n(939249),
    Q = n(256905);
n(134528), n(947204);
var ee = n(320448),
    et = n(847374),
    en = n(46054),
    el = n(443865),
    ea = n(843614);
function es(e) {
    let { idea: t, onPick: n } = e,
        l = s.useId(),
        i = null == n;
    return (0, a.jsxs)(J.D, {
        className: i ? `${ea.Nr} ${ea.xe}` : ea.Nr,
        onClick: i ? void 0 : () => n(t),
        "aria-label": R.intl.formatToPlainString(I.default.pztRGi, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : l,
        "aria-disabled": i,
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
function ei(e) {
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
                        children: R.intl.string(I.default.DAvYsi),
                    }),
                ],
            }),
            t.map((e) => (0, a.jsx)(es, { idea: e, onPick: n }, e.id)),
        ],
    });
}
function er(e) {
    let { onAsk: t } = e;
    return (0, a.jsxs)("div", {
        className: ea.x,
        children: [
            (0, a.jsx)(h.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tag: "span",
                className: ea.I1,
                children: R.intl.string(I.default.tG5PBo),
            }),
            (0, a.jsx)(d.$, {
                variant: "secondary",
                size: "sm",
                disabled: null == t,
                onClick: t,
                text: R.intl.string(I.default.cwTe5o),
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
                        children: R.intl.string(I.default["60htw+"]),
                    }),
                    !0 === t.is_activity
                        ? (0, a.jsx)("span", {
                              className: eo.dr,
                              children: (0, a.jsx)(h.E, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  tag: "span",
                                  children: R.intl.string(R.t.IC5Ann),
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
                              children: R.intl.string(I.default.KLyB8Y),
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
                              children: R.intl.string(R.t["0hKkS+"]),
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
            (0, a.jsx)(ec, { label: R.intl.string(I.default.ieqTtP), names: t.bot_permissions ?? [] }),
            (0, a.jsx)(ec, { label: R.intl.string(I.default.Cn9qix), names: t.privileged_intents ?? [] }),
            null != n
                ? (0, a.jsxs)("div", {
                      className: eo.nc,
                      children: [
                          (0, a.jsx)(d.$, {
                              variant: "secondary",
                              size: "sm",
                              onClick: n,
                              text: R.intl.string(I.default.GYoWRk),
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
var eu = n(700766);
function eh(e) {
    var t;
    let { group: n } = e,
        [l, i] = s.useState(!1),
        r = s.useId(),
        o = s.useCallback(() => i((e) => !e), []),
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
    let d = l ? et.a : ee._;
    return (0, a.jsxs)("li", {
        "data-step-kind": n.step.kind,
        className: eu.Dx,
        children: [
            (0, a.jsxs)(J.D, {
                tag: "div",
                className: eu.kG,
                "aria-expanded": l,
                "aria-controls": r,
                "aria-label": R.intl.formatToPlainString(I.default.z4KWsN, { step: n.summary }),
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
                id: r,
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
let em = new Set([
    "thinking",
    "assistant_delta",
    "reply",
    "plan_proposed",
    "announcement",
    "task_started",
    "task_finished",
]);
function ep(e) {
    return "running" === e;
}
function ef(e) {
    let t = [];
    for (let n of e) {
        let e = (function (e) {
                let t = [];
                return (
                    null != e.name && "" !== e.name && t.push(e.name),
                    null != e.detail && "" !== e.detail && t.push(e.detail),
                    null != e.message && "" !== e.message && t.push(e.message),
                    null != e.stderr_tail && "" !== e.stderr_tail && t.push(e.stderr_tail),
                    t
                );
            })(n),
            l = t[t.length - 1];
        if ("writing_command" === n.kind && (null == n.friendly || "" === n.friendly) && null != l) {
            l.technical.push(...e);
            continue;
        }
        let a = (function (e) {
                switch (e.kind) {
                    case "thinking":
                        return R.intl.string(I.default.K7TkAL);
                    case "writing_command":
                        return e.friendly ?? e.name ?? R.intl.string(I.default.nv6pUM);
                    case "assembling":
                        return R.intl.string(I.default["9G3ZmA"]);
                    case "installing_deps":
                        return R.intl.string(I.default.VZuRug);
                    case "building":
                        return R.intl.string(I.default["s+ylXP"]);
                    case "bundling":
                        return R.intl.string(I.default.rEQlMx);
                    case "committing":
                        return R.intl.string(I.default.Yvyw1H);
                    case "built":
                        return R.intl.string(I.default.hOcVAj);
                    case "build_error":
                        return R.intl.string(I.default["6L9Vwt"]);
                    case "healthchecking":
                        return R.intl.string(I.default.sz8yAj);
                    case "preview_connecting":
                        return R.intl.string(I.default.pOYDEc);
                    case "awaiting_auth":
                        return R.intl.string(I.default["orD+xo"]);
                    case "healthcheck_passed":
                        return R.intl.string(I.default["x+sqTG"]);
                    case "healthcheck_failed":
                        return R.intl.string(I.default.FUWbq1);
                    case "deploying":
                        return R.intl.string(I.default.wcXX8Z);
                    case "preview_ready":
                        return R.intl.string(I.default["78YNh7"]);
                    case "error":
                    case "terminal_error":
                        return R.intl.string(I.default.j3hBoA);
                    default:
                        return R.intl.string(I.default.nv6pUM);
                }
            })(n),
            s = e.filter((e) => e !== a);
        if (null != l && l.summary === a) {
            l.technical.push(...s);
            continue;
        }
        t.push({ step: n, summary: a, technical: s });
    }
    return t;
}
var eg = n(282878);
function ex(e) {
    let { task: t } = e,
        [n, l] = s.useState(null),
        i = s.useId(),
        r = t.groups.length > 0 || (null != t.detail && "" !== t.detail),
        o = r && (n ?? "failed" === t.state),
        c = s.useCallback(() => l(!o), [o]),
        d = ep(t.state),
        u = (function (e) {
            switch (e) {
                case "running":
                    return R.intl.string(I.default["fW7T+d"]);
                case "succeeded":
                    return R.intl.string(I.default.X3c4hc);
                case "failed":
                    return R.intl.string(I.default.LK4Wsd);
                case "cancelled":
                    return R.intl.string(I.default.msWvKA);
                case "incomplete":
                    return R.intl.string(I.default.esfcU6);
            }
        })(t.state),
        m = o ? et.a : ee._,
        p = "failed" === t.state,
        f = p ? u : d ? (o ? void 0 : t.latestActivity) : r ? void 0 : u,
        g = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)("span", {
                    className: eg.uJ,
                    children: [
                        (0, a.jsx)(h.E, {
                            tag: "span",
                            variant: "text-sm/normal",
                            color: "text-default",
                            className: eg.QC,
                            children: t.title,
                        }),
                        r ? (0, a.jsx)(m, { size: "xs", color: "currentColor", className: eg.bu }) : null,
                    ],
                }),
                null != f && "" !== f
                    ? (0, a.jsx)(h.E, {
                          tag: "span",
                          variant: "text-xs/normal",
                          color: p ? "text-feedback-critical" : "text-muted",
                          className: eg.hE,
                          children: f,
                      })
                    : null,
            ],
        });
    return (0, a.jsxs)("li", {
        className: eg.ot,
        "data-task-state": t.state,
        children: [
            r
                ? (0, a.jsx)(J.D, {
                      tag: "div",
                      className: A()(eg.qI, eg.EZ),
                      "aria-expanded": o,
                      "aria-controls": i,
                      "aria-label": R.intl.formatToPlainString(I.default.SxMgMJ, { title: t.title, state: u }),
                      onClick: c,
                      children: g,
                  })
                : (0, a.jsx)("div", { className: eg.qI, children: g }),
            r
                ? (0, a.jsxs)("div", {
                      id: i,
                      hidden: !o,
                      className: eg.yd,
                      children: [
                          t.groups.length > 0
                              ? (0, a.jsx)("ol", {
                                    className: eg.x7,
                                    children: t.groups.map((e, t) => (0, a.jsx)(eh, { group: e }, t)),
                                })
                              : null,
                          null != t.detail && "" !== t.detail
                              ? (0, a.jsx)(h.E, {
                                    tag: "div",
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    selectable: !0,
                                    className: eg.Tb,
                                    children: t.detail,
                                })
                              : null,
                      ],
                  })
                : null,
        ],
    });
}
var ev = n(742715);
function eb(e) {
    let { item: t } = e,
        [n, l] = s.useState(!1),
        i = s.useId(),
        r = s.useCallback(() => l((e) => !e), []),
        o = null != t.label && "" !== t.label,
        c = n ? ee._ : et.a,
        d = (0, a.jsx)(a.Fragment, {
            children: t.blocks.map((e) =>
                "rows" === e.type
                    ? (0, a.jsx)(
                          "ol",
                          { className: eu.dO, children: e.groups.map((e, t) => (0, a.jsx)(eh, { group: e }, t)) },
                          e.key,
                      )
                    : (0, a.jsx)(
                          "ol",
                          { className: eu.On, children: e.tasks.map((e) => (0, a.jsx)(ex, { task: e }, e.taskId)) },
                          e.key,
                      ),
            ),
        });
    return o
        ? (0, a.jsxs)("li", {
              className: A()(eu.ky, X.XR, eu.rn),
              children: [
                  (0, a.jsxs)(J.D, {
                      tag: "div",
                      className: eu.rN,
                      "aria-expanded": !n,
                      "aria-controls": i,
                      "aria-label": R.intl.formatToPlainString(I.default.s1wx5H, { activity: t.label }),
                      onClick: r,
                      children: [
                          (0, a.jsx)(h.E, {
                              tag: "span",
                              variant: "text-sm/normal",
                              color: "text-default",
                              className: eu.zN,
                              children: t.label,
                          }),
                          (0, a.jsx)(c, { size: "xs", color: "currentColor", className: eu.cZ }),
                      ],
                  }),
                  (0, a.jsx)("div", { id: i, hidden: n, className: eu.MZ, children: d }),
              ],
          })
        : (0, a.jsx)("li", { className: A()(eu.ky, X.XR, eu.rn), children: d });
}
function ek(e) {
    let {
            steps: t,
            announcement: n,
            content: l,
            proposal: i,
            active: r = !1,
            onApprove: o,
            ideas: c,
            onPickIdea: d,
            offerIdeas: u,
            onAskForIdeas: m,
        } = e,
        { items: p } = s.useMemo(
            () =>
                (function (e) {
                    let { turnActive: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = [],
                        l = new Map(),
                        a = [],
                        s = null,
                        i = null,
                        r = null,
                        o = [],
                        c = null;
                    function d() {
                        null != r && (r.groups = ef(o)), (r = null), (o = []);
                    }
                    function u() {
                        d(), (c = null), (i = null);
                    }
                    function h(e) {
                        return (
                            null == i && ((i = { type: "activity", key: `activity-${e}`, blocks: [] }), n.push(i)), i
                        );
                    }
                    for (let [t, m] of e.entries()) {
                        if (null != m.task_id && "" !== m.task_id) {
                            let e = (function (e, t) {
                                let n = e.task_id,
                                    r = l.get(n);
                                if (null != r)
                                    return (
                                        "task_started" === e.kind &&
                                            null != e.task_title &&
                                            "" !== e.task_title &&
                                            (r.title = e.task_title),
                                        null != i &&
                                            null == i.label &&
                                            null != e.task_group_label &&
                                            (i.label = e.task_group_label),
                                        r
                                    );
                                let o =
                                    null != e.task_group_label && "" !== e.task_group_label
                                        ? e.task_group_label
                                        : void 0;
                                null != c &&
                                    c.groupId !== e.task_group_id &&
                                    ((c = null), null != o && null != i && null != i.label && i.label !== o && u());
                                let m = h(t);
                                null == m.label && null != o && (m.label = o), d(), (s = null);
                                let p = {
                                    taskId: n,
                                    title:
                                        null != e.task_title && "" !== e.task_title
                                            ? e.task_title
                                            : R.intl.string(I.default.MdXWEK),
                                    state: "running",
                                    groups: [],
                                    rawSteps: [],
                                };
                                return (
                                    l.set(n, p),
                                    a.push(p),
                                    null == c &&
                                        ((c = {
                                            type: "workstreams",
                                            key: `workstreams-${t}`,
                                            ...(null != e.task_group_id ? { groupId: e.task_group_id } : {}),
                                            tasks: [],
                                        }),
                                        m.blocks.push(c)),
                                    c.tasks.push(p),
                                    p
                                );
                            })(m, t);
                            if ("task_finished" === m.kind) {
                                null != m.task_state && (e.state = m.task_state),
                                    null != m.detail && "" !== m.detail && (e.detail = m.detail);
                                continue;
                            }
                            if (em.has(m.kind)) continue;
                            e.rawSteps.push(m);
                            continue;
                        }
                        if ("thinking" === m.kind) {
                            s = null;
                            continue;
                        }
                        if ("assistant_delta" === m.kind) {
                            let e = m.message ?? "";
                            "" !== e &&
                                (null == s
                                    ? (u(), (s = { type: "message", key: `message-${t}`, content: e }), n.push(s))
                                    : (s.content = e)),
                                !0 === m.message_finished && (s = null);
                            continue;
                        }
                        if (em.has(m.kind)) continue;
                        let e = h(t);
                        (s = null),
                            (c = null),
                            o.push(m),
                            null == r && ((r = { type: "rows", key: `rows-${t}`, groups: [] }), e.blocks.push(r));
                    }
                    for (let e of (d(), a)) {
                        e.groups = ef(e.rawSteps);
                        let n = e.groups[e.groups.length - 1]?.summary;
                        null != n && (e.latestActivity = n), !t && ep(e.state) && (e.state = "incomplete");
                    }
                    return { items: n, tasks: a };
                })(t, { turnActive: r }),
            [t, r],
        ),
        f = p.at(-1),
        g = f?.type === "message" && f.content.trim() === l.trim(),
        x = null == i && "" !== l && !g;
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
            p.length > 0
                ? (0, a.jsx)("ol", {
                      className: eu.dO,
                      children: p.map((e) =>
                          "message" === e.type
                              ? (0, a.jsx)(
                                    "li",
                                    {
                                        className: A()(eu.ky, X.XR),
                                        children: (0, a.jsx)("div", {
                                            className: A()(ev.PT, eu.cW),
                                            children: en.A.parse(e.content, !0, {
                                                allowList: !0,
                                                allowHeading: !0,
                                                allowLinks: !0,
                                            }),
                                        }),
                                    },
                                    e.key,
                                )
                              : (0, a.jsx)(eb, { item: e }, e.key),
                      ),
                  })
                : null,
            null != i
                ? (0, a.jsx)("div", {
                      className: A()(eu.ky, X.XR),
                      children: (0, a.jsx)(ed, { proposal: i, onApprove: o }),
                  })
                : x
                  ? (0, a.jsxs)("div", {
                        className: A()(eu.ky, X.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: A()(ev.PT, eu.cW),
                                children: en.A.parse(l, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            !0 === u
                                ? (0, a.jsx)("div", { className: eu.IN, children: (0, a.jsx)(er, { onAsk: m }) })
                                : null,
                        ],
                    })
                  : null,
            null != c && c.length > 0
                ? (0, a.jsx)("div", { className: A()(eu.ky, X.XR), children: (0, a.jsx)(ei, { ideas: c, onPick: d }) })
                : null,
            !0 !== u || x
                ? null
                : (0, a.jsx)("div", { className: A()(eu.ky, X.XR), children: (0, a.jsx)(er, { onAsk: m }) }),
        ],
    });
}
var ej = n(289149);
function ew(e) {
    let { projectId: t, messages: n, onApprove: l, onPickIdea: s, onAskForIdeas: i } = e,
        r = n[n.length - 1];
    return (0, a.jsx)("ol", {
        className: ej.x7,
        children: n.map((e) => {
            if ("user" === e.role)
                return (0, a.jsx)(
                    eC,
                    {
                        role: "user",
                        children: (0, a.jsxs)("div", {
                            className: A()(ej.B2, X.XR),
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
                                    ? (0, a.jsx)(ey, { projectId: t, attachments: e.attachments })
                                    : null,
                            ],
                        }),
                    },
                    e.render_id,
                );
            let n = e.steps.filter((e) => !em.has(e.kind)).length > 0,
                o = e.steps.some((e) => "assistant_delta" === e.kind && null != e.message && "" !== e.message),
                c = "plan_implemented" === e.kind && e === r;
            return "" !== e.content || null != e.proposal || null != e.ideas || c || n || o || null != e.announcement
                ? (0, a.jsx)(
                      eC,
                      {
                          role: "assistant",
                          children: (0, a.jsx)(ek, {
                              steps: e.steps,
                              announcement: e.announcement,
                              content: e.content,
                              proposal: e.proposal,
                              active: !(0, U.B)(e),
                              onApprove: e === r ? l : void 0,
                              ideas: e.ideas,
                              onPickIdea: s,
                              offerIdeas: c,
                              onAskForIdeas: i,
                          }),
                      },
                      e.render_id,
                  )
                : null;
        }),
    });
}
function ey(e) {
    let { projectId: t, attachments: n } = e;
    return (0, a.jsx)("div", {
        className: ej.KT,
        children: n.map((e, n) =>
            null == e.id
                ? (0, a.jsx)(eN, { name: e.name }, n)
                : $.Wb.has(e.content_type)
                  ? (0, a.jsx)(eA, { projectId: t, id: e.id, name: e.name }, n)
                  : (0, a.jsx)(eS, { projectId: t, id: e.id, name: e.name }, n),
        ),
    });
}
let e_ = A()(X._B, X.ND);
function eE(e, t, n) {
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
function eN(e) {
    let { name: t, unavailable: n = !1 } = e,
        l = n ? R.intl.formatToPlainString(I.default.OBr7WW, { name: t }) : t;
    return (0, a.jsx)("div", { className: e_, children: eE(l, null) });
}
function eS(e) {
    let { projectId: t, id: n, name: l } = e,
        [i, r] = s.useState(!1);
    s.useEffect(() => {
        let e = !1;
        return (
            (0, o.n6)(t, n).then(
                (t) => {
                    e || t || r(!0);
                },
                () => {},
            ),
            () => {
                e = !0;
            }
        );
    }, [t, n]);
    let c = s.useCallback(() => {
        Promise.all([(0, o.n6)(t, n), (0, o.PK)(t, n, { download: !0 })]).then(
            (e) => {
                let [t, n] = e;
                if (!t) return void r(!0);
                let l = document.createElement("a");
                (l.href = n), (l.target = "_blank"), (l.rel = "noopener noreferrer"), l.click();
            },
            () => {},
        );
    }, [t, n]);
    return i
        ? (0, a.jsx)(eN, { name: l, unavailable: !0 })
        : (0, a.jsx)(J.D, {
              className: A()(e_, ej.dz),
              onClick: c,
              "aria-label": R.intl.formatToPlainString(I.default.gV5YcR, { name: l }),
              children: eE(l, null),
          });
}
function eA(e) {
    let { projectId: t, id: n, name: l } = e,
        [i, r] = s.useState(null),
        [c, d] = s.useState(!1);
    s.useEffect(() => {
        let e = !1;
        return (
            Promise.all([(0, o.n6)(t, n), (0, o.PK)(t, n)]).then(
                (t) => {
                    let [n, l] = t;
                    e || (n ? r(l) : d(!0));
                },
                () => {},
            ),
            () => {
                e = !0;
            }
        );
    }, [t, n]);
    let u = s.useCallback(() => {
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
        ? (0, a.jsx)(eN, { name: l, unavailable: !0 })
        : (0, a.jsx)(J.D, {
              className: A()(e_, ej.dz),
              onClick: u,
              "aria-label": R.intl.formatToPlainString(I.default.QUFLUq, { name: l }),
              children: eE(l, i, () => {
                  r(null),
                      (0, o.n6)(t, n).then(
                          (e) => {
                              e || d(!0);
                          },
                          () => {},
                      );
              }),
          });
}
function eC(e) {
    let { role: t, children: n } = e;
    return (0, a.jsx)("li", { "data-role": t, className: ej.xk, children: n });
}
var eT = n(863610),
    eI = n(379307),
    eR = n(922016),
    eP = n(885574),
    eM = n(677175);
function eL(e) {
    return e.toLocaleString();
}
function eO(e) {
    let { label: t, usage: n } = e;
    return (0, a.jsxs)("div", {
        className: eM.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: eM.mf,
                children: [
                    (0, a.jsx)(h.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(h.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [eL((0, $.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(h.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    eL(n.input_tokens),
                    " in \xb7 ",
                    eL(n.output_tokens),
                    " out \xb7 ",
                    eL(n.cache_creation_input_tokens),
                    " cache write \xb7 ",
                    eL(n.cache_read_input_tokens),
                    " cache read",
                ],
            }),
        ],
    });
}
function eD(e) {
    let { project: t } = e,
        n = (0, $.wV)(t.orchestrator, t.codegen);
    return (0, a.jsxs)("div", {
        className: eM.si,
        role: "dialog",
        "aria-label": R.intl.string(I.default["9yoLWZ"]),
        children: [
            (0, a.jsx)("div", {
                className: eM.Q$,
                children: (0, a.jsxs)("div", {
                    className: eM.mf,
                    children: [
                        (0, a.jsxs)(h.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [eL((0, $.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(h.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(eO, { label: R.intl.string(I.default.hk4jJr), usage: t.orchestrator }),
            (0, a.jsx)(eO, { label: R.intl.string(I.default.R9aduM), usage: t.codegen }),
            (0, a.jsxs)("div", {
                className: eM.mf,
                children: [
                    (0, a.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: R.intl.string(I.default["kILb+R"]),
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
function eU(e) {
    let { project: t } = e,
        n = s.useRef(null);
    return (0, a.jsx)(eR.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(eD, { project: t }),
        children: (e) =>
            (0, a.jsx)(J.D, {
                innerRef: n,
                className: eM.Y$,
                "aria-label": R.intl.string(I.default.AWQ2ZV),
                ...e,
                children: (0, a.jsx)(eP.m, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
            }),
    });
}
var eG = n(154861);
function eB(e) {
    switch (e) {
        case "open":
            return R.intl.string(I.default.cLhFMi);
        case "connecting":
            return R.intl.string(I.default.W7oyuf);
        case "failed":
            return R.intl.string(I.default.eE60xI);
        case "closed":
            return R.intl.string(I.default["yBmS+I"]);
    }
}
function eH(e) {
    let { thinking: t, projectUsage: n, connState: l, modelSettings: s, onModelSettingsChange: i } = e;
    return (0, a.jsxs)("div", {
        className: eG.jf,
        children: [
            (0, a.jsx)("div", {
                className: eG.Xx,
                "data-vibegrations-activity": !0,
                children: t
                    ? (0, a.jsxs)("div", {
                          className: eG.e_,
                          role: "status",
                          "aria-live": "polite",
                          "aria-label": R.intl.string(I.default.C0t6bp),
                          children: [
                              (0, a.jsx)(eT.n, { dotRadius: 3.5, themed: !0 }),
                              (0, a.jsx)(h.E, {
                                  tag: "span",
                                  variant: "text-xs/semibold",
                                  color: "text-strong",
                                  children: R.intl.string(I.default.QDGuNS),
                              }),
                          ],
                      })
                    : null,
            }),
            null == s
                ? null
                : (0, a.jsx)(eI.A, { settings: s.settings, choices: s.choices, disabled: "open" !== l, onChange: i }),
            null == n
                ? null
                : (0, a.jsxs)("span", {
                      className: eG.BP,
                      children: [
                          (0, a.jsx)(h.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": R.intl.formatToPlainString(I.default["7SZZvj"], {
                                  runes: (0, $.a7)(n.cost_usd),
                                  turns: n.turns,
                              }),
                              children: R.intl.formatToPlainString(I.default["4PFO2p"], {
                                  runes: (0, $.a7)(n.cost_usd).toLocaleString(),
                              }),
                          }),
                          (0, a.jsx)(eU, { project: n }),
                      ],
                  }),
            (0, a.jsx)(h.E, {
                tag: "span",
                variant: "text-xs/medium",
                color:
                    "open" === l ? "text-feedback-positive" : "failed" === l ? "text-feedback-critical" : "text-muted",
                "aria-label": R.intl.formatToPlainString(I.default.eDDdhB, { status: eB(l) }),
                "data-vibegrations-conn": !0,
                "data-state": l,
                className: eG.XF,
                children: eB(l),
            }),
        ],
    });
}
var eW = n(506774),
    eV = n(192308),
    eF = n(651649),
    ez = n(670455);
let e$ = "shownVibegrationsFeedbackProjectIds";
var eK = n(104071);
function eX(e) {
    let { projectId: t, onRegionCapture: l } = e,
        i = (0, x.bG)([U.A], () => U.A.getMessages(t), [t]),
        r = (0, x.bG)([o.Ay], () => o.Ay.getConnState(t), [t]),
        c = (0, x.bG)([U.A], () => U.A.getProjectUsage(t), [t]),
        d = (0, x.bG)([o.Ay], () => o.Ay.getModelSettings(t), [t]),
        u = s.useRef(null),
        h = s.useRef(null),
        m = s.useRef(!0);
    s.useEffect(() => {
        m.current && h.current?.scrollToBottom();
    }, [i]);
    let p = s.useCallback(() => {
        let e = h.current;
        null != e && (m.current = 32 > e.getDistanceFromBottom());
    }, []);
    s.useLayoutEffect(() => {
        let e = u.current;
        if (null == e) return;
        let t = e.getBoundingClientRect().width,
            n = null,
            l = new ResizeObserver((l) => {
                let [a] = l,
                    s = a?.contentRect.width ?? e.getBoundingClientRect().width;
                s === t ||
                    ((t = s),
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
        s.useEffect(() => {
            (0, o.Hc)(t);
        }, [t]),
        s.useEffect(
            () => () =>
                (function (e) {
                    let t = U.A.getMessages(e).filter((e) => "assistant" === e.role && (0, U.B)(e)).length;
                    !(t < 3) &&
                        ((eW.w.get(e$) ?? []).includes(e) ||
                            eF.A.possiblyShowFeedbackModal(ez.MW.VIBEGRATIONS, () => {
                                let l;
                                (l = eW.w.get(e$) ?? []).includes(e) || eW.w.set(e$, [...l, e]),
                                    (0, eV.openModalLazy)(async () => {
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
    let f = s.useCallback(
            (e, n) => {
                (0, o.dv)(t, e, n);
            },
            [t],
        ),
        g = s.useCallback((e) => f(e.implementation_prompt), [f]),
        v = s.useCallback(() => f(R.intl.string(I.default["3sTTBu"])), [f]),
        b = s.useCallback((e) => (0, o.XZ)(t, e), [t]),
        k = s.useCallback((e) => (0, o.vX)(t, e), [t]),
        j = s.useCallback((e) => (0, o.Vm)(t, e), [t]),
        w = s.useCallback(() => f(R.intl.string(I.default.Jj8Ftb)), [f]),
        y = "open" === r,
        _ = i[i.length - 1],
        E = null != _ && "assistant" === _.role && null != _.proposal,
        N = null != _ && "assistant" === _.role && !(0, U.B)(_),
        S = E && y ? w : void 0;
    return (0, a.jsxs)("section", {
        ref: u,
        "data-vibegrations-chat": !0,
        className: eK.T,
        children: [
            (0, a.jsx)(D.Ch, {
                ref: h,
                onScroll: p,
                "data-vibegrations-chat-log": !0,
                className: eK.N,
                children: (0, a.jsx)(ew, {
                    projectId: t,
                    messages: i,
                    onApprove: S,
                    onPickIdea: y ? g : void 0,
                    onAskForIdeas: y ? v : void 0,
                }),
            }),
            (0, a.jsx)(eH, { thinking: N, projectUsage: c, connState: r, modelSettings: d, onModelSettingsChange: b }),
            (0, a.jsx)(Y, {
                canSend: y,
                onSend: f,
                onUploadFile: k,
                onDeleteFile: j,
                onApprove: S,
                onRegionCapture: l,
            }),
        ],
    });
}
var eq = n(435558),
    eY = n(661531),
    eZ = n(602853),
    eJ = n(517461),
    eQ = n(761929),
    e0 = n(552067);
function e1(e) {
    let { open: t, maxWidth: n, onWidthChange: l, children: i } = e,
        r = (0, eZ.r)(eY.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = s.useRef(null),
        [c, d] = (0, eJ.V)("VibegrationsChatSidebarWidth", 460),
        [u, h] = s.useState(c ?? 460),
        m = (0, eq.clamp)(u, 360, n);
    s.useLayoutEffect(() => {
        l(t ? m + r : 0);
    }, [m, t, r, l]);
    let p = (0, eQ.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: o,
            onElementResize: h,
            onElementResizeEnd: d,
            orientation: eQ.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        f = s.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), p(e));
            },
            [p],
        );
    return (0, a.jsxs)("div", {
        className: e0.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: e0.Di, onPointerDown: f }),
            (0, a.jsx)("div", { ref: o, className: e0.kL, style: { width: m }, children: i }),
        ],
    });
}
var e2 = n(333007),
    e6 = n(638015);
function e5(e) {
    return {
        x: Math.min(e.startX, e.x),
        y: Math.min(e.startY, e.y),
        width: Math.abs(e.x - e.startX),
        height: Math.abs(e.y - e.startY),
    };
}
function e7(e) {
    let { targetRect: t, onSelect: n, onCancel: l } = e,
        [i, r] = s.useState(null);
    s.useEffect(() => {
        function e(e) {
            "Escape" === e.key && (e.stopPropagation(), l());
        }
        return window.addEventListener("keydown", e, !0), () => window.removeEventListener("keydown", e, !0);
    }, [l]);
    let o = s.useCallback(
            (e) => ({
                x: Math.min(Math.max(e.clientX - t.left, 0), t.width),
                y: Math.min(Math.max(e.clientY - t.top, 0), t.height),
            }),
            [t],
        ),
        c = s.useCallback(
            (e) => {
                if (0 !== e.button) return;
                e.preventDefault(), e.currentTarget.setPointerCapture(e.pointerId);
                let t = o(e);
                r({ startX: t.x, startY: t.y, x: t.x, y: t.y });
            },
            [o],
        ),
        d = s.useCallback(
            (e) => {
                let t = o(e);
                r((e) => (null == e ? e : { ...e, x: t.x, y: t.y }));
            },
            [o],
        ),
        u = s.useCallback(
            (e) => {
                if (null == i) return;
                let t = o(e),
                    a = e5({ ...i, x: t.x, y: t.y });
                r(null), a.width < 8 && a.height < 8 ? l() : n(a);
            },
            [i, o, n, l],
        ),
        m = null == i ? null : e5(i);
    return (0, e2.createPortal)(
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("div", { className: e6.tB, role: "presentation", onPointerDown: l }),
                (0, a.jsx)("div", {
                    className: e6.aC,
                    style: { left: t.left, top: t.top, width: t.width, height: t.height },
                    role: "application",
                    "aria-label": R.intl.string(I.default["9MOgRI"]),
                    onPointerDown: c,
                    onPointerMove: d,
                    onPointerUp: u,
                    onPointerCancel: l,
                    children:
                        null == m
                            ? (0, a.jsx)("div", {
                                  className: e6.F7,
                                  children: (0, a.jsx)("div", {
                                      className: e6.aK,
                                      children: (0, a.jsx)(h.E, {
                                          variant: "text-sm/medium",
                                          color: "text-default",
                                          children: R.intl.string(I.default.ydkvBR),
                                      }),
                                  }),
                              })
                            : (0, a.jsx)("div", {
                                  className: e6.r1,
                                  style: { left: m.x, top: m.y, width: m.width, height: m.height },
                              }),
                }),
            ],
        }),
        document.body,
    );
}
function e8(e) {
    let { projectId: t } = e,
        n = (0, x.bG)([U.A], () => U.A.isThinking(t), [t]);
    return (0, a.jsx)("div", { className: X.MP, "data-active": n, "aria-hidden": !0 });
}
let e3 = 0;
var e4 = n(291815);
function e9(e) {
    let { applicationId: t, surface: n, previewReady: l, content: r, sidebar: o } = e,
        [c, d] = s.useState(null),
        u = (0, i.A)(t, n),
        h = u?.id ?? null,
        [m, p] = s.useState(null),
        f = s.useCallback(() => {
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
        g = s.useCallback(
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
                            let a = `vibegrations-capture-${++e3}-${Date.now()}`;
                            return new Promise((e, s) => {
                                let i = window.setTimeout(() => {
                                    r(), s(Error("capture timed out"));
                                }, 15e3);
                                function r() {
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
                                            (r(),
                                            null != t.data.blob
                                                ? e(
                                                      new File([t.data.blob], `preview-capture-${Date.now()}.png`, {
                                                          type: "image/png",
                                                      }),
                                                  )
                                                : s(Error(t.data.error))));
                                }
                                window.addEventListener("message", o),
                                    l.postMessage({ type: "vibegrations-capture-region", id: a, rect: t }, n);
                            });
                        })(m.iframe, e).then(m.resolve, m.reject);
            },
            [m],
        ),
        x = s.useCallback(() => {
            p(null), m?.resolve(null);
        }, [m]),
        v = l && null != t && n.type === _.U4.MAIN;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", { ref: d, className: e4.fm, children: r }),
            o(v ? f : void 0),
            null != m ? (0, a.jsx)(e7, { targetRect: m.targetRect, onSelect: g, onCancel: x }) : null,
        ],
    });
}
function te(e) {
    let { projectId: t, applicationId: n, surface: l, chatOpen: i, previewReady: c, previewGate: d } = e,
        u = s.useRef(null),
        [h, m] = s.useState(0);
    s.useLayoutEffect(() => {
        if (l.type === _.U4.MAIN) return (0, r.HV)(n), () => (0, r.HV)(null);
    }, [n, l.type]),
        s.useEffect(() => {
            null != t && (0, o.Hc)(t);
        }, [t]),
        s.useLayoutEffect(() => {
            let e = u.current;
            if (null == e) return;
            function t() {
                null != e && m(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return n.observe(e), () => n.disconnect();
        }, []),
        s.useEffect(() => () => (0, r.Zq)(0), []);
    let p = Math.max(360, h - 320),
        f = i || l.type === _.U4.MAIN;
    return (0, a.jsx)("div", {
        ref: u,
        className: e4.LB,
        children: (0, a.jsx)(e9, {
            applicationId: n,
            surface: l,
            previewReady: c,
            content: (0, a.jsx)(O, { applicationId: n, surface: l, previewReady: c, previewGate: d }),
            sidebar: (e) =>
                null != t && f
                    ? (0, a.jsx)(e1, {
                          open: i,
                          maxWidth: p,
                          onWidthChange: r.Zq,
                          children: (0, a.jsxs)("div", {
                              className: e4.cO,
                              children: [
                                  (0, a.jsx)(e8, { projectId: t }),
                                  (0, a.jsx)(eX, { projectId: t, onRegionCapture: e }, t),
                              ],
                          }),
                      })
                    : null,
        }),
    });
}
