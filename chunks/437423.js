n.d(t, { A: () => tT });
var l,
    a = n(477900),
    i = n(582128),
    s = n(672929),
    r = n(948230),
    o = n(998939),
    c = n(289873),
    d = n(821609),
    u = n(323384),
    h = n(834730),
    m = n(580954),
    p = n(297264),
    f = n(625180),
    g = n(91242),
    x = n(812901),
    v = n(317608),
    k = n(17928),
    b = n(956518),
    j = n(627363),
    y = n(869146),
    _ = n(207371),
    N = n(165610),
    E = n(652215),
    w =
        (((l = {}).Loading = "loading"),
        (l.AwaitingLaunch = "awaiting-launch"),
        (l.Launched = "launched"),
        (l.RenderingElsewhere = "rendering-elsewhere"),
        (l.NoApplication = "no-application"),
        (l.DoesNotSupportSurface = "does-not-support-surface"),
        (l.Error = "error"),
        l),
    S = n(742023),
    A = n(503698),
    I = n.n(A),
    C = n(612749);
function T(e) {
    let { title: t, body: n, wide: l = !1, children: i } = e;
    return (0, a.jsxs)("div", {
        className: I()(C.Bf, l && C.Qx),
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
    P = n(375708),
    O = n(616694);
function M(e) {
    let { applicationId: t, surface: n } = e,
        { frame: l, state: s } = (function (e) {
            let { applicationId: t, surface: n } = e,
                {
                    surface: l,
                    setFailed: a,
                    lifecycle: s,
                } = (function (e) {
                    let { applicationId: t, surface: n } = e,
                        l = i.useMemo(() => (0, N.VA)(t, n), [t, n]),
                        a = i.useMemo(() => n, [l]),
                        s = (0, k.bG)([g.A], () => g.A.getFrame(l), [l]),
                        r = (0, k.bG)(
                            [y.A, g.A],
                            () => y.A.getWindowOpen(E.MLl.ACTIVITY_POPOUT) && g.A.getMainFrame()?.id === l,
                            [l],
                        ),
                        { data: o, isLoading: c } = (0, j.YY)(t),
                        d = (0, _.x)(o),
                        u = null != (0, b.Ay)(t),
                        [h, m] = i.useState(null),
                        p = h === l;
                    return {
                        surface: a,
                        setFailed: i.useCallback(() => m(l), [l]),
                        lifecycle: (0, N.x1)(s)
                            ? r
                                ? { state: "rendering-elsewhere" }
                                : { state: "launched", frame: s }
                            : p
                              ? { state: "error" }
                              : s?.state === "loading"
                                ? { state: "loading", frame: s }
                                : c
                                  ? { state: "loading", frame: void 0 }
                                  : null != o && u
                                    ? d
                                        ? { state: "awaiting-launch" }
                                        : { state: "does-not-support-surface" }
                                    : { state: "no-application" },
                    };
                })({ applicationId: t, surface: n }),
                { state: r } = s;
            return (
                i.useEffect(() => {
                    "awaiting-launch" === r && e();
                    async function e() {
                        try {
                            await f.A.launchFrame({ applicationId: t, surface: l });
                        } catch {
                            a();
                        }
                    }
                }, [r, t, l, a]),
                s
            );
        })({ applicationId: t, surface: n }),
        r = (0, N.VA)(t, n);
    switch (
        (i.useEffect(() => {
            let e;
            return (
                null == (e = g.A.getFrame(r)) ||
                    g.A.getMainFrame()?.id !== r ||
                    y.A.getWindowOpen(E.MLl.ACTIVITY_POPOUT) ||
                    (e.intent === N.sV.MAIN ? f.A.resetFrameLayoutModes(r) : f.A.clearMainFrameSlot()),
                () => {
                    let e;
                    null != (e = g.A.getFrame(r)) &&
                        ((0, N.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        S.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === N.sV.INLINE && f.A.promoteFrame(r),
                              f.A.updateFrameLayoutMode({ frameId: r, layoutMode: N.y0.PIP }))
                            : e.intent === N.sV.MAIN && (0, m.A)().leaveFrame(r));
                }
            );
        }, [r]),
        s)
    ) {
        case w.Launched:
            return (0, a.jsx)(v.A, { frameId: l.id, level: x.A.WithinAppContent, className: O.Z7 });
        case w.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: O.qs,
                children: (0, a.jsx)(T, {
                    title: P.intl.string(R.default["4f6Vkr"]),
                    body: P.intl.string(R.default.LJ2q1H),
                }),
            });
        case w.NoApplication:
            return (0, a.jsxs)("div", {
                className: O.qs,
                children: [
                    (0, a.jsx)(u.k, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
                    (0, a.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: P.intl.string(R.default["6xTawd"]),
                    }),
                ],
            });
        case w.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: O.qs,
                children: (0, a.jsx)(T, {
                    title: P.intl.string(R.default.FHOJiH),
                    body: P.intl.string(R.default["1yLQoV"]),
                }),
            });
        case w.Error:
            return (0, a.jsxs)("div", {
                className: O.qs,
                children: [
                    (0, a.jsx)(p.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: P.intl.string(R.default.MeLWCr),
                    }),
                    (0, a.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: O.tj,
                        children: P.intl.string(R.default["1RCbQT"]),
                    }),
                ],
            });
        case w.AwaitingLaunch:
        case w.Loading:
            return (0, a.jsx)("div", { className: O.qs, children: (0, a.jsx)(c.y, {}) });
    }
}
var L = n(668917);
function G(e) {
    let { applicationId: t, surface: n, previewReady: l, previewGate: r } = e,
        o = (0, s.A)(t, n);
    return (i.useEffect(() => {
        r?.type === "permissions" && null != o && (0, m.A)().leaveFrame(o.id);
    }, [o, r?.type]),
    r?.type === "checking")
        ? (0, a.jsx)("div", { className: L.q, children: (0, a.jsx)(c.y, {}) })
        : r?.type === "permissions"
          ? (0, a.jsx)("div", {
                className: L.q,
                children: (0, a.jsx)(T, {
                    wide: !0,
                    title: P.intl.string(R.default.DYwf2n),
                    body: P.intl.string(R.default.WWj3pN),
                    children: (0, a.jsx)(d.$, {
                        variant: "primary",
                        size: "md",
                        text: P.intl.string(R.default["CRfE/E"]),
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
                          children: P.intl.string(R.default["6xTawd"]),
                      }),
                  ],
              });
}
var D = n(689175),
    H = n(783791);
n(323874), n(14289), n(35956), n(321073);
var B = n(866665),
    V = n(588975),
    U = n(428610),
    F = n(826745),
    W = n(29080),
    $ = n(559647),
    q = n(285796),
    z = n(673724),
    X = n(514042),
    K = n(939249),
    Y = n(195219);
function Z(e) {
    return I()(Y._B, { [Y.ND]: e });
}
function J(e) {
    let { name: t, thumbSrc: n = null, compact: l = !1, subText: i, children: s, onThumbError: r } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            null != n
                ? (0, a.jsx)("img", { src: n, alt: "", className: Y.gJ, onError: r })
                : (0, a.jsx)(X.FileIcon, { size: l ? "xs" : "sm", color: "currentColor" }),
            (0, a.jsxs)("div", {
                className: Y.Wd,
                children: [
                    (0, a.jsx)(h.E, { variant: "text-sm/medium", color: "text-default", className: Y.Rr, children: t }),
                    i,
                ],
            }),
            s,
        ],
    });
}
function Q(e) {
    return (0, a.jsx)("div", { className: Z(e.compact ?? !1), children: J(e) });
}
function ee(e) {
    let { name: t, thumbSrc: n, ariaLabel: l, onClick: i, onThumbError: s } = e;
    return (0, a.jsx)(K.D, {
        className: I()(Z(!0), Y.w8),
        onClick: i,
        "aria-label": l,
        children: J({ name: t, thumbSrc: n, compact: !0, onThumbError: s }),
    });
}
var et = n(17117);
let en = 0;
function el(e) {
    let {
            canSend: t,
            running: n,
            onSend: l,
            onInterrupt: s,
            onUploadFile: r,
            onDeleteFile: o,
            onApprove: d,
            onRegionCapture: u,
        } = e,
        [h, m] = i.useState(""),
        [p, f] = i.useState([]),
        [g, x] = i.useState(!1),
        [v, k] = i.useState(!1),
        [b, j] = i.useState(!1);
    i.useEffect(() => {
        n || j(!1);
    }, [n]);
    let y = i.useRef(null),
        _ = i.useRef([]),
        N = i.useRef(new Set()),
        E = i.useRef(o);
    E.current = o;
    let w = i.useCallback((e) => {
            (_.current = e), f(e);
        }, []),
        S = i.useCallback((e) => {
            E.current(e.id).catch((e) => {
                console.error("[vibegrations] attachment cleanup failed", e);
            });
        }, []);
    i.useEffect(() => {
        let e = N.current;
        return () => {
            for (let t of _.current)
                e.add(t.localId), null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && S(t.ref);
        };
    }, [S]);
    let A = i.useCallback(
            (e, t) => {
                if (N.current.has(e)) return;
                let n = _.current;
                n.some((t) => t.localId === e) && w(n.map((n) => (n.localId === e ? { ...n, ...t } : n)));
            },
            [w],
        ),
        I = i.useCallback(
            (e) => {
                if (0 === e.length) return;
                let t = [..._.current],
                    n = [];
                for (let l of e) {
                    let e = "" === l.type ? "application/octet-stream" : l.type,
                        a = ++en,
                        i = { localId: a, name: l.name, size: l.size, contentType: e, status: "uploading" };
                    if (t.length >= 10) {
                        t.push({
                            ...i,
                            status: "error",
                            errorText: P.intl.formatToPlainString(R.default.DlX57a, { count: 10 }),
                        });
                        continue;
                    }
                    if (!(0, z.x5)(l.size, e)) {
                        t.push({
                            ...i,
                            status: "error",
                            errorText: P.intl.formatToPlainString(R.default.cI7t94, { size: (0, z.ZJ)((0, z.yr)(e)) }),
                        });
                        continue;
                    }
                    let s = z.Wb.has(e) ? URL.createObjectURL(l) : void 0;
                    t.push({ ...i, previewUrl: s }), n.push({ file: l, localId: a });
                }
                for (let { file: e, localId: l } of (w(t), n))
                    r(e).then(
                        (e) => {
                            N.current.has(l) ? S(e) : A(l, { status: "ready", ref: e });
                        },
                        (e) => {
                            N.current.has(l) ||
                                (console.error("[vibegrations] attachment upload failed", e),
                                A(l, { status: "error", errorText: P.intl.string(R.default.GwEHvn) }));
                        },
                    );
            },
            [S, r, A, w],
        ),
        C = i.useCallback(async () => {
            if (null != u && !v) {
                k(!0);
                try {
                    let e = await u();
                    null != e && I([e]);
                } catch (e) {
                    console.error("[vibegrations] region capture failed", e),
                        w([
                            ..._.current,
                            {
                                localId: ++en,
                                name: "preview-capture.png",
                                size: 0,
                                contentType: "image/png",
                                status: "error",
                                errorText: P.intl.string(R.default["4DQd7d"]),
                            },
                        ]);
                } finally {
                    k(!1);
                }
            }
        }, [u, v, I, w]),
        T = i.useCallback(
            (e) => {
                let t = _.current,
                    n = t.find((t) => t.localId === e);
                N.current.add(e),
                    n?.previewUrl != null && URL.revokeObjectURL(n.previewUrl),
                    n?.ref != null && S(n.ref),
                    w(t.filter((t) => t.localId !== e));
            },
            [S, w],
        ),
        O = p.every((e) => "ready" === e.status),
        M = "" !== h.trim() || p.length > 0,
        L = t && M && O,
        G = i.useCallback(() => {
            if (!L) return;
            let e = _.current.filter((e) => null != e.ref).map((e) => e.ref);
            for (let t of (l(h, e.length > 0 ? e : void 0), _.current))
                null != t.previewUrl && URL.revokeObjectURL(t.previewUrl);
            m(""), w([]);
        }, [L, h, l, w]),
        D = i.useCallback(
            (e) => {
                e.preventDefault(), G();
            },
            [G],
        ),
        H = i.useCallback(() => {
            null == s || b || (j(!0), s());
        }, [s, b]),
        q = i.useCallback(
            (e) => {
                if ("Escape" === e.key && n && null != s && !b) {
                    e.preventDefault(), e.stopPropagation(), H();
                    return;
                }
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != d && (e.preventDefault(), d());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), G());
            },
            [G, d, n, s, b, H],
        ),
        X = i.useCallback(
            (e) => {
                if (!t) return;
                let n = Array.from(e.clipboardData.files);
                0 !== n.length && (e.preventDefault(), I(n));
            },
            [t, I],
        ),
        K = i.useCallback(
            (e) => {
                e.preventDefault(), x(!1), t && I(Array.from(e.dataTransfer.files));
            },
            [t, I],
        ),
        Y = i.useCallback((e) => {
            e.dataTransfer.types.includes("Files") && (e.preventDefault(), x(!0));
        }, []),
        Z = i.useCallback(
            (e) => {
                I(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = "");
            },
            [I],
        );
    return (0, a.jsxs)("form", {
        onSubmit: D,
        onDrop: K,
        onDragOver: Y,
        onDragLeave: () => x(!1),
        className: g ? `${et.DA} ${et.pV}` : et.DA,
        children: [
            p.length > 0
                ? (0, a.jsx)("div", {
                      className: et.lN,
                      children: p.map((e) => (0, a.jsx)(ea, { draft: e, onRemove: T }, e.localId)),
                  })
                : null,
            (0, a.jsxs)("div", {
                className: et.VA,
                children: [
                    (0, a.jsx)("input", {
                        ref: y,
                        type: "file",
                        multiple: !0,
                        onChange: Z,
                        className: et.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    (0, a.jsx)(B.m, {
                        text: P.intl.string(R.default.gUn10I),
                        ariaHidden: !0,
                        children: (0, a.jsx)("button", {
                            type: "button",
                            className: et.Y0,
                            disabled: !t,
                            onClick: () => y.current?.click(),
                            "aria-label": P.intl.string(R.default.gUn10I),
                            children: (0, a.jsx)(V.P, { size: "sm", color: "currentColor" }),
                        }),
                    }),
                    (0, a.jsx)(B.m, {
                        text: P.intl.string(R.default.B5gWPk),
                        ariaHidden: !0,
                        children: (0, a.jsx)("button", {
                            type: "button",
                            className: et.Y0,
                            disabled: null == u || !t || v,
                            onClick: C,
                            "aria-label": P.intl.string(R.default.B5gWPk),
                            children: v
                                ? (0, a.jsx)(c.y, { type: c.t.SPINNING_CIRCLE_SIMPLE, className: et.Rk })
                                : (0, a.jsx)(U.K, { size: "sm", color: "currentColor" }),
                        }),
                    }),
                    (0, a.jsx)(F.y, {
                        value: h,
                        onChange: (e) => m(e.currentTarget.value),
                        onKeyDown: q,
                        onPaste: X,
                        placeholder: t
                            ? P.intl.string(n ? R.default["67PpcP"] : R.default.ahRdoJ)
                            : P.intl.string(R.default.nm4w9P),
                        disabled: !t,
                        "aria-label": P.intl.string(R.default.OPr66w),
                        rows: 1,
                        className: et.jp,
                    }),
                    (0, a.jsxs)("div", {
                        className: et.fF,
                        children: [
                            (0, a.jsx)("div", { className: et.MT }),
                            n && null != s
                                ? (0, a.jsx)(B.m, {
                                      text: P.intl.string(R.default.KdgI4k),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)("button", {
                                          type: "button",
                                          className: et.AW,
                                          disabled: b,
                                          onClick: H,
                                          "aria-label": P.intl.string(R.default.KdgI4k),
                                          children: (0, a.jsx)(W.w, {
                                              size: "xs",
                                              color: "currentColor",
                                              className: et.Mx,
                                          }),
                                      }),
                                  })
                                : null,
                            (0, a.jsx)("button", {
                                type: "submit",
                                className: et.rt,
                                disabled: !L,
                                "aria-label": P.intl.string(R.default["22GHMt"]),
                                children: (0, a.jsx)($.SendMessageIcon, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: et.Mx,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function ea(e) {
    let { draft: t, onRemove: n } = e;
    return (0, a.jsxs)(Q, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(h.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(c.y, { type: c.t.SPINNING_CIRCLE_SIMPLE, className: et.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: et.o1,
                onClick: () => n(t.localId),
                "aria-label": P.intl.string(R.default["3HWvgk"]),
                children: (0, a.jsx)(q.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
n(134528), n(947204);
var ei = n(320448),
    es = n(847374),
    er = n(46054),
    eo = n(263783);
function ec(e) {
    let { option: t, disabled: n, onPick: l } = e,
        s = i.useId(),
        r = !0 === t.recommended,
        o = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(K.D, {
        className: I()(eo.uK, { [eo.ue]: n }),
        onClick: n ? void 0 : () => l(t),
        "aria-label": P.intl.formatToPlainString(r ? R.default.aL1BKQ : R.default.k7lEgj, { answer: t.label }),
        "aria-describedby": o ? s : void 0,
        "aria-disabled": n,
        "data-vibegrations-clarification-option": t.id,
        "data-recommended": r ? "true" : void 0,
        children: [
            (0, a.jsxs)("span", {
                className: eo.l8,
                children: [
                    (0, a.jsx)(h.E, {
                        tag: "span",
                        variant: "text-sm/semibold",
                        color: "none",
                        className: eo.ed,
                        children: t.label,
                    }),
                    r
                        ? (0, a.jsx)(h.E, {
                              tag: "span",
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              className: eo.rM,
                              children: P.intl.string(R.default.OXRWyV),
                          })
                        : null,
                ],
            }),
            o
                ? (0, a.jsx)(h.E, {
                      tag: "span",
                      id: s,
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: t.detail,
                  })
                : null,
        ],
    });
}
function ed(e) {
    let { clarification: t, onSubmit: n } = e,
        [l, s] = i.useState({}),
        [r, o] = i.useState({}),
        [c, d] = i.useState(0),
        u = null == n,
        m = t.questions.length,
        p = Math.min(c, m - 1),
        f = t.questions[p],
        g = i.useCallback(
            (e) => {
                if (null == n) return;
                let l = t.questions
                    .map((t, n) => ({ question: t, index: n, answer: e[t.id] }))
                    .filter((e) => null != e.answer && "" !== e.answer.text.trim())
                    .map((e) => {
                        let { question: t, index: n, answer: l } = e;
                        return `${n + 1}. ${t.question} \u{2192} ${l.text.trim()}`;
                    })
                    .join("\n");
                "" !== l && n(l);
            },
            [t, n],
        ),
        x = i.useCallback(
            (e) => {
                if (u) return;
                let n = { ...l, [f.id]: e };
                s(n);
                let a = (function (e, t, n) {
                    let { questions: l } = e;
                    for (let e = 1; e <= l.length; e++) {
                        let a = (n + e) % l.length,
                            i = t[l[a].id];
                        if (null == i || "" === i.text.trim()) return a;
                    }
                    return null;
                })(t, n, p);
                null == a ? g(n) : d(a);
            },
            [l, t, u, p, f.id, g],
        ),
        v = i.useCallback(() => {
            if (u || 0 === p) return;
            let e = t.questions[p - 1];
            s((t) => {
                let n = { ...t };
                return delete n[e.id], n;
            }),
                o((t) => {
                    let n = { ...t };
                    return delete n[e.id], n;
                }),
                d(p - 1);
        }, [t, u, p]),
        k = p > 0 && !u,
        b = r[f.id] ?? "",
        j = i.useCallback(() => {
            let e = b.trim();
            "" !== e && x({ kind: "custom", text: e });
        }, [b, x]);
    return (0, a.jsxs)("section", {
        className: eo.$O,
        "data-vibegrations-clarification": t.id,
        "data-state": u ? "inert" : "open",
        "data-step": p,
        children: [
            m > 1
                ? (0, a.jsxs)("div", {
                      className: eo.qB,
                      children: [
                          (0, a.jsx)(h.E, {
                              tag: "span",
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              "aria-live": "polite",
                              className: eo.Dd,
                              "data-vibegrations-clarification-progress": !0,
                              children: P.intl.formatToPlainString(R.default["7bypa+"], { index: p + 1, total: m }),
                          }),
                          (0, a.jsx)(K.D, {
                              className: I()(eo.aX, { [eo.uh]: !k }),
                              onClick: k ? v : void 0,
                              tabIndex: k ? 0 : -1,
                              "aria-hidden": !k,
                              "aria-disabled": u,
                              "aria-label": P.intl.string(R.default.KYpgvZ),
                              "data-vibegrations-clarification-back": !0,
                              "data-hidden": k ? void 0 : "true",
                              children: (0, a.jsx)(h.E, {
                                  tag: "span",
                                  variant: "text-xs/semibold",
                                  color: "none",
                                  children: P.intl.string(R.default.yKdgqw),
                              }),
                          }),
                      ],
                  })
                : null,
            (0, a.jsx)(h.E, {
                tag: "div",
                id: `${f.id}-label`,
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: f.question,
            }),
            (0, a.jsx)("div", {
                className: eo.fF,
                role: "group",
                "aria-labelledby": `${f.id}-label`,
                children: f.options.map((e) =>
                    (0, a.jsx)(
                        ec,
                        { option: e, disabled: u, onPick: (e) => x({ kind: "option", optionId: e.id, text: e.label }) },
                        e.id,
                    ),
                ),
            }),
            (0, a.jsx)("div", {
                className: eo.F,
                children: (0, a.jsx)(F.y, {
                    value: b,
                    onChange: (e) => {
                        let { value: t } = e.currentTarget;
                        o((e) => ({ ...e, [f.id]: t }));
                    },
                    onKeyDown: (e) => {
                        "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), j());
                    },
                    placeholder: P.intl.string(R.default.qifsdL),
                    "aria-label": P.intl.formatToPlainString(R.default.XHESTL, { question: f.question }),
                    disabled: u,
                    rows: 1,
                    className: eo.Pu,
                    "data-vibegrations-clarification-other": f.id,
                }),
            }),
        ],
    });
}
var eu = n(443865),
    eh = n(843614);
function em(e) {
    let { idea: t, onPick: n } = e,
        l = i.useId(),
        s = null == n;
    return (0, a.jsxs)(K.D, {
        className: s ? `${eh.Nr} ${eh.xe}` : eh.Nr,
        onClick: s ? void 0 : () => n(t),
        "aria-label": P.intl.formatToPlainString(R.default.pztRGi, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : l,
        "aria-disabled": s,
        children: [
            (0, a.jsx)(h.E, {
                tag: "div",
                variant: "text-sm/semibold",
                color: "none",
                className: eh.JJ,
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
function ep(e) {
    let { ideas: t, onPick: n } = e;
    return (0, a.jsxs)("section", {
        className: eh.kR,
        "data-vibegrations-idea-cards": !0,
        children: [
            (0, a.jsxs)("div", {
                className: eh.wx,
                children: [
                    (0, a.jsx)(eu.LightbulbIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                    (0, a.jsx)(h.E, {
                        tag: "span",
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        children: P.intl.string(R.default.DAvYsi),
                    }),
                ],
            }),
            t.map((e) => (0, a.jsx)(em, { idea: e, onPick: n }, e.id)),
        ],
    });
}
function ef(e) {
    let { onAsk: t } = e;
    return (0, a.jsxs)("div", {
        className: eh.x,
        children: [
            (0, a.jsx)(h.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tag: "span",
                className: eh.I1,
                children: P.intl.string(R.default.tG5PBo),
            }),
            (0, a.jsx)(d.$, {
                variant: "secondary",
                size: "sm",
                disabled: null == t,
                onClick: t,
                text: P.intl.string(R.default.cwTe5o),
            }),
        ],
    });
}
var eg = n(256905),
    ex = n(289149);
function ev(e) {
    let { projectId: t, attachments: n } = e,
        l = n.filter(ek);
    return (0, a.jsx)("div", {
        className: ex.KT,
        children: n.map((e, n) =>
            null == e.id
                ? (0, a.jsx)(eb, { name: e.name }, n)
                : ek(e)
                  ? (0, a.jsx)(ey, { projectId: t, viewableImages: l, viewerIndex: l.indexOf(e) }, n)
                  : (0, a.jsx)(ej, { projectId: t, id: e.id, name: e.name }, n),
        ),
    });
}
function ek(e) {
    return null != e.id && z.Wb.has(e.content_type);
}
function eb(e) {
    let { name: t, unavailable: n = !1 } = e,
        l = n ? P.intl.formatToPlainString(R.default.OBr7WW, { name: t }) : t;
    return (0, a.jsx)(Q, { name: l, compact: !0 });
}
function ej(e) {
    let { projectId: t, id: n, name: l } = e,
        [s, r] = i.useState(!1);
    i.useEffect(() => {
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
    let c = i.useCallback(() => {
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
    return s
        ? (0, a.jsx)(eb, { name: l, unavailable: !0 })
        : (0, a.jsx)(ee, {
              name: l,
              thumbSrc: null,
              ariaLabel: P.intl.formatToPlainString(R.default.gV5YcR, { name: l }),
              onClick: c,
          });
}
function ey(e) {
    let { projectId: t, viewableImages: n, viewerIndex: l } = e,
        { id: s, name: r } = n[l],
        [c, d] = i.useState(null),
        [u, h] = i.useState(!1);
    i.useEffect(() => {
        let e = !1;
        return (
            Promise.all([(0, o.n6)(t, s), (0, o.PK)(t, s)]).then(
                (t) => {
                    let [n, l] = t;
                    e || (n ? d(l) : h(!0));
                },
                () => {},
            ),
            () => {
                e = !0;
            }
        );
    }, [t, s]);
    let m = i.useCallback(() => {
        Promise.all(
            n.map((e) =>
                Promise.all([(0, o.n6)(t, e.id), (0, o.PK)(t, e.id)]).then(
                    (t) => {
                        let [n, l] = t;
                        return n ? { type: "IMAGE", url: l, alt: e.name } : "unavailable";
                    },
                    () => "error",
                ),
            ),
        ).then((e) => {
            let t = e[l];
            "unavailable" === t
                ? h(!0)
                : "error" !== t &&
                  (0, eg.R)({
                      items: e.filter((e) => "string" != typeof e),
                      startingIndex: e.slice(0, l).filter((e) => "string" != typeof e).length,
                      shouldHideMediaOptions: !0,
                      location: "VibegrationsChat",
                  });
        });
    }, [t, n, l]);
    return u
        ? (0, a.jsx)(eb, { name: r, unavailable: !0 })
        : (0, a.jsx)(ee, {
              name: r,
              thumbSrc: c,
              ariaLabel: P.intl.formatToPlainString(R.default.QUFLUq, { name: r }),
              onClick: m,
              onThumbError: () => {
                  d(null),
                      (0, o.n6)(t, s).then(
                          (e) => {
                              e || h(!0);
                          },
                          () => {},
                      );
              },
          });
}
var e_ = n(84206);
function eN(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsxs)("section", {
              className: e_.hb,
              children: [
                  (0, a.jsx)(h.E, { variant: "text-xs/semibold", color: "text-muted", tag: "span", children: t }),
                  (0, a.jsx)("div", {
                      className: e_.Hu,
                      children: n.map((e) =>
                          (0, a.jsx)(
                              "span",
                              {
                                  className: e_.uR,
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
function eE(e) {
    let { proposal: t, onApprove: n } = e;
    return (0, a.jsxs)("article", {
        className: e_.cz,
        "data-vibegrations-plan-card": !0,
        children: [
            (0, a.jsxs)("header", {
                className: e_.pu,
                children: [
                    (0, a.jsx)(h.E, {
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        tag: "span",
                        children: P.intl.string(R.default["60htw+"]),
                    }),
                    !0 === t.is_activity
                        ? (0, a.jsx)("span", {
                              className: e_.dr,
                              children: (0, a.jsx)(h.E, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  tag: "span",
                                  children: P.intl.string(P.t.IC5Ann),
                              }),
                          })
                        : null,
                ],
            }),
            (0, a.jsx)(h.E, { variant: "text-sm/normal", color: "text-default", selectable: !0, children: t.summary }),
            t.changes.length > 0
                ? (0, a.jsxs)("section", {
                      className: e_.hb,
                      children: [
                          (0, a.jsx)(h.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: P.intl.string(R.default.KLyB8Y),
                          }),
                          (0, a.jsx)("ul", {
                              className: e_.eQ,
                              children: t.changes.map((e, t) =>
                                  (0, a.jsxs)(
                                      "li",
                                      {
                                          className: e_.H6,
                                          children: [
                                              (0, a.jsx)(h.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  className: e_.UZ,
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
                      className: e_.hb,
                      children: [
                          (0, a.jsx)(h.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: P.intl.string(P.t["0hKkS+"]),
                          }),
                          (0, a.jsx)("ul", {
                              className: e_.eQ,
                              children: t.commands.map((e, t) =>
                                  (0, a.jsxs)(
                                      "li",
                                      {
                                          className: e_.Xs,
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
            (0, a.jsx)(eN, { label: P.intl.string(R.default.ieqTtP), names: t.bot_permissions ?? [] }),
            (0, a.jsx)(eN, { label: P.intl.string(R.default.Cn9qix), names: t.privileged_intents ?? [] }),
            null != n
                ? (0, a.jsxs)("div", {
                      className: e_.nc,
                      children: [
                          (0, a.jsx)(d.$, {
                              variant: "secondary",
                              size: "sm",
                              onClick: n,
                              text: P.intl.string(R.default.GYoWRk),
                          }),
                          (0, a.jsx)(h.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              tag: "span",
                              className: e_.sw,
                              children: "or reply to keep refining",
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var ew = n(192308),
    eS = n(46958);
function eA(e) {
    let { projectId: t, request: l } = e,
        s = i.useCallback(() => {
            (0, ew.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("625084"), n.e("468421")]).then(n.bind(n, 539620));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: l });
            });
        }, [t, l]);
    return (0, a.jsxs)("article", {
        className: eS.Lo,
        children: [
            (0, a.jsx)(h.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: P.intl.string(R.default["/e28TK"]),
            }),
            (0, a.jsx)(h.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: null != l.note && "" !== l.note ? l.note : P.intl.string(R.default.jxvtin),
            }),
            (0, a.jsxs)("div", {
                className: eS.cS,
                children: [
                    l.fields.map((e) =>
                        (0, a.jsx)(
                            "span",
                            {
                                className: eS.$H,
                                children: (0, a.jsx)(h.E, {
                                    variant: "text-xs/medium",
                                    color: "text-default",
                                    tag: "span",
                                    children: e.label,
                                }),
                            },
                            e.name,
                        ),
                    ),
                    null != l.connection
                        ? (0, a.jsx)("span", {
                              className: eS.$H,
                              children: (0, a.jsx)(h.E, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  tag: "span",
                                  children: P.intl.formatToPlainString(R.default["/64HKW"], {
                                      platform: l.connection.label,
                                  }),
                              }),
                          })
                        : null,
                ],
            }),
            (0, a.jsx)("div", {
                className: eS.sq,
                children: (0, a.jsx)(d.$, {
                    variant: "secondary",
                    size: "sm",
                    onClick: s,
                    text: P.intl.string(R.default["gVV+HX"]),
                }),
            }),
        ],
    });
}
var eI = n(700766);
function eC(e) {
    var t;
    let { projectId: n, group: l } = e,
        [s, r] = i.useState(!1),
        o = i.useId(),
        c = i.useCallback(() => r((e) => !e), []),
        d =
            "error" === (t = l.step.kind) || "terminal_error" === t || "build_error" === t
                ? "text-feedback-critical"
                : "text-default",
        u = null != n ? l.screenshots : [];
    if (0 === l.technical.length && 0 === u.length)
        return (0, a.jsx)("li", {
            "data-step-kind": l.step.kind,
            className: eI.Dx,
            children: (0, a.jsx)(h.E, {
                tag: "div",
                variant: "text-sm/normal",
                color: d,
                selectable: !0,
                className: eI.iq,
                children: l.summary,
            }),
        });
    let m = s ? es.a : ei._;
    return (0, a.jsxs)("li", {
        "data-step-kind": l.step.kind,
        className: eI.Dx,
        children: [
            (0, a.jsxs)(K.D, {
                tag: "div",
                className: eI.kG,
                "aria-expanded": s,
                "aria-controls": o,
                "aria-label": P.intl.formatToPlainString(R.default.z4KWsN, { step: l.summary }),
                onClick: c,
                children: [
                    (0, a.jsx)(h.E, {
                        tag: "span",
                        variant: "text-sm/normal",
                        color: d,
                        className: eI.iq,
                        children: l.summary,
                    }),
                    (0, a.jsx)(m, { size: "xs", color: "currentColor", className: eI.Ue }),
                ],
            }),
            (0, a.jsxs)("div", {
                id: o,
                hidden: !s,
                className: eI.yJ,
                children: [
                    l.technical.map((e, t) =>
                        (0, a.jsx)(
                            h.E,
                            { tag: "div", variant: "text-xs/normal", color: "text-muted", selectable: !0, children: e },
                            t,
                        ),
                    ),
                    null != n && u.length > 0
                        ? (0, a.jsx)("div", {
                              className: eI.y8,
                              children: u.map((e) => (0, a.jsx)(eR, { projectId: n, screenshotId: e }, e)),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function eT() {}
function eR(e) {
    let { projectId: t, screenshotId: n } = e,
        [l, s] = i.useState(null),
        [r, c] = i.useState(!1);
    i.useEffect(() => {
        let e = !1;
        return (
            (0, o.aF)(t, n).then(
                (t) => {
                    e || s(t);
                },
                () => {
                    e || c(!0);
                },
            ),
            () => {
                e = !0;
            }
        );
    }, [t, n]);
    let d = P.intl.string(R.default["3Hq9pQ"]),
        u = i.useCallback(() => {
            (0, o.aF)(t, n).then((e) => {
                (0, eg.R)({
                    items: [{ type: "IMAGE", url: e, alt: d }],
                    startingIndex: 0,
                    shouldHideMediaOptions: !0,
                    location: "VibegrationsChat",
                });
            }, eT);
        }, [t, n, d]);
    return r ? null : (0, a.jsx)(ee, { name: d, thumbSrc: l, ariaLabel: d, onClick: u, onThumbError: () => c(!0) });
}
var eP = n(820081),
    eO = n(590223);
function eM(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", {
        className: eO.Vn,
        "data-status": t,
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return P.intl.string(R.default.TkPGOH);
                case "in_progress":
                    return P.intl.string(R.default["oK+fmd"]);
                default:
                    return P.intl.string(R.default.d7lieu);
            }
        })(t),
        children: "completed" === t ? (0, a.jsx)(eP.B, { size: "xxs", color: "currentColor" }) : null,
    });
}
function eL(e) {
    return { completed: e.filter((e) => "completed" === e.status).length, total: e.length };
}
function eG(e) {
    let { todos: t, provisional: n } = e;
    return (0, a.jsxs)("ul", {
        className: eO.zR,
        children: [
            t.map((e) =>
                (0, a.jsxs)(
                    "li",
                    {
                        className: eO.qN,
                        "data-status": e.status,
                        children: [
                            (0, a.jsx)(eM, { status: e.status }),
                            (0, a.jsx)(h.E, {
                                variant: "text-sm/normal",
                                color: "completed" === e.status ? "text-muted" : "text-default",
                                tag: "span",
                                className: eO.ku,
                                selectable: !0,
                                children: e.text,
                            }),
                        ],
                    },
                    e.id,
                ),
            ),
            null != n
                ? (0, a.jsxs)("li", {
                      className: eO.qN,
                      "data-status": "pending",
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(eM, { status: "pending" }),
                          (0, a.jsx)(h.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              tag: "span",
                              className: eO.ku,
                              selectable: !0,
                              children: n,
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function eD(e) {
    let { todos: t, provisional: n, announceProgress: l = !0 } = e,
        { completed: i, total: s } = eL(t);
    return 0 === s
        ? null
        : (0, a.jsxs)("article", {
              className: eO.Rx,
              "data-vibegrations-todo-card": !0,
              children: [
                  (0, a.jsxs)("header", {
                      className: eO.Ye,
                      children: [
                          (0, a.jsx)(h.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: P.intl.string(R.default.qCRC6c),
                          }),
                          (0, a.jsx)("span", {
                              className: eO.mA,
                              ...(l
                                  ? {
                                        role: "status",
                                        "aria-live": "polite",
                                        "aria-label": P.intl.formatToPlainString(R.default["QG/EiF"], {
                                            completed: i,
                                            total: s,
                                        }),
                                    }
                                  : null),
                              children: (0, a.jsx)(h.E, {
                                  variant: "text-xs/medium",
                                  color: "text-muted",
                                  tag: "span",
                                  children: P.intl.formatToPlainString(R.default.bQvqly, { completed: i, total: s }),
                              }),
                          }),
                      ],
                  }),
                  (0, a.jsx)(eG, { todos: t, provisional: n }),
              ],
          });
}
let eH = new Set([
    "thinking",
    "assistant_delta",
    "reply",
    "plan_proposed",
    "announcement",
    "task_started",
    "task_finished",
    "todos",
    "thinking_lifecycle",
    "compaction",
]);
function eB(e) {
    return "running" === e;
}
function eV(e) {
    return "writing_command" === e.kind && (null == e.friendly || "" === e.friendly);
}
function eU(e) {
    let { inheritedSummary: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = [],
        l = [],
        a = null;
    for (let i of e) {
        let e;
        if ("preview_screenshot" === i.kind) {
            let e =
                "preview_screenshot" === i.kind && null != i.screenshot_id && "" !== i.screenshot_id
                    ? [i.screenshot_id]
                    : [];
            null != a ? a.screenshots.push(...e) : l.push(...e);
            continue;
        }
        "healthchecking" === i.kind && ((l = []), (a = null)), "healthcheck_failed" === i.kind && (l = []);
        let s = (function (e) {
                let t = [];
                return (
                    null != e.name && "" !== e.name && t.push(e.name),
                    null != e.detail && "" !== e.detail && t.push(e.detail),
                    null != e.message && "" !== e.message && t.push(e.message),
                    null != e.stderr_tail && "" !== e.stderr_tail && t.push(e.stderr_tail),
                    t
                );
            })(i),
            r = n[n.length - 1];
        if (eV(i) && null != r) {
            r.technical.push(...s);
            continue;
        }
        if (eV(i) && null == r && null != t) {
            n.push({ step: i, summary: t, technical: s.filter((e) => e !== t), screenshots: [] });
            continue;
        }
        let o = eF(i),
            c = s.filter((e) => e !== o);
        null != r && r.summary === o
            ? (r.technical.push(...c), (e = r))
            : ((e = { step: i, summary: o, technical: c, screenshots: [] }), n.push(e)),
            "healthcheck_passed" === i.kind && (e.screenshots.push(...l.splice(0)), (a = e));
    }
    return n;
}
function eF(e) {
    switch (e.kind) {
        case "thinking":
            return P.intl.string(R.default.K7TkAL);
        case "writing_command":
            return e.friendly ?? e.name ?? P.intl.string(R.default.nv6pUM);
        case "assembling":
            return P.intl.string(R.default["9G3ZmA"]);
        case "installing_deps":
            return P.intl.string(R.default.VZuRug);
        case "building":
            return P.intl.string(R.default["s+ylXP"]);
        case "bundling":
            return P.intl.string(R.default.rEQlMx);
        case "committing":
            return P.intl.string(R.default.Yvyw1H);
        case "built":
            return P.intl.string(R.default.hOcVAj);
        case "build_error":
            return P.intl.string(R.default["6L9Vwt"]);
        case "healthchecking":
        case "preview_connecting":
            return P.intl.string(R.default.sz8yAj);
        case "awaiting_auth":
            return P.intl.string(R.default["orD+xo"]);
        case "healthcheck_passed":
            return P.intl.string(R.default["x+sqTG"]);
        case "healthcheck_failed":
            return P.intl.string(R.default.FUWbq1);
        case "deploying":
            return P.intl.string(R.default.wcXX8Z);
        case "preview_ready":
            return P.intl.string(R.default["78YNh7"]);
        case "error":
        case "terminal_error":
            return P.intl.string(R.default.j3hBoA);
        default:
            return P.intl.string(R.default.nv6pUM);
    }
}
var eW = n(282878);
function e$(e) {
    let { task: t } = e,
        [n, l] = i.useState(null),
        s = i.useId(),
        r = t.groups.length > 0 || (null != t.detail && "" !== t.detail),
        o = r && (n ?? "failed" === t.state),
        c = i.useCallback(() => l(!o), [o]),
        d = eB(t.state),
        u = (function (e) {
            switch (e) {
                case "running":
                    return P.intl.string(R.default["fW7T+d"]);
                case "succeeded":
                    return P.intl.string(R.default.X3c4hc);
                case "failed":
                    return P.intl.string(R.default.LK4Wsd);
                case "cancelled":
                    return P.intl.string(R.default.msWvKA);
                case "incomplete":
                    return P.intl.string(R.default.esfcU6);
            }
        })(t.state),
        m = o ? es.a : ei._,
        p = "failed" === t.state,
        f = p ? u : d ? (o ? void 0 : t.latestActivity) : r ? void 0 : u,
        g = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)("span", {
                    className: eW.uJ,
                    children: [
                        (0, a.jsx)(h.E, {
                            tag: "span",
                            variant: "text-sm/normal",
                            color: "text-default",
                            className: eW.QC,
                            children: t.title,
                        }),
                        r ? (0, a.jsx)(m, { size: "xs", color: "currentColor", className: eW.bu }) : null,
                    ],
                }),
                null != f && "" !== f
                    ? (0, a.jsx)(h.E, {
                          tag: "span",
                          variant: "text-xs/normal",
                          color: p ? "text-feedback-critical" : "text-muted",
                          className: eW.hE,
                          children: f,
                      })
                    : null,
            ],
        });
    return (0, a.jsxs)("li", {
        className: eW.ot,
        "data-task-state": t.state,
        children: [
            r
                ? (0, a.jsx)(K.D, {
                      tag: "div",
                      className: I()(eW.qI, eW.EZ),
                      "aria-expanded": o,
                      "aria-controls": s,
                      "aria-label": P.intl.formatToPlainString(R.default.SxMgMJ, { title: t.title, state: u }),
                      onClick: c,
                      children: g,
                  })
                : (0, a.jsx)("div", { className: eW.qI, children: g }),
            r
                ? (0, a.jsxs)("div", {
                      id: s,
                      hidden: !o,
                      className: eW.yd,
                      children: [
                          t.groups.length > 0
                              ? (0, a.jsx)("ol", {
                                    className: eW.x7,
                                    children: t.groups.map((e, t) => (0, a.jsx)(eC, { group: e }, t)),
                                })
                              : null,
                          null != t.detail && "" !== t.detail
                              ? (0, a.jsx)(h.E, {
                                    tag: "div",
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    selectable: !0,
                                    className: eW.Tb,
                                    children: t.detail,
                                })
                              : null,
                      ],
                  })
                : null,
        ],
    });
}
var eq = n(692228),
    ez = n(742715);
function eX(e) {
    let { projectId: t, item: n, attachments: l } = e,
        [s, r] = i.useState(!1),
        o = i.useId(),
        c = i.useCallback(() => r((e) => !e), []),
        d = null != n.label && "" !== n.label,
        u = s ? ei._ : es.a,
        m = (0, a.jsx)(a.Fragment, {
            children: n.blocks.map((e) =>
                "rows" === e.type
                    ? (0, a.jsx)(
                          "ol",
                          {
                              className: eI.dO,
                              children: e.groups.map((e, n) => (0, a.jsx)(eC, { projectId: t, group: e }, n)),
                          },
                          e.key,
                      )
                    : (0, a.jsx)(
                          "ol",
                          { className: eI.On, children: e.tasks.map((e) => (0, a.jsx)(e$, { task: e }, e.taskId)) },
                          e.key,
                      ),
            ),
        });
    return d
        ? (0, a.jsxs)("li", {
              className: I()(eI.ky, eq.XR, eI.rn),
              children: [
                  (0, a.jsxs)(K.D, {
                      tag: "div",
                      className: eI.rN,
                      "aria-expanded": !s,
                      "aria-controls": o,
                      "aria-label": P.intl.formatToPlainString(R.default.s1wx5H, { activity: n.label }),
                      onClick: c,
                      children: [
                          (0, a.jsx)(h.E, {
                              tag: "span",
                              variant: "text-sm/normal",
                              color: "text-default",
                              className: eI.zN,
                              children: n.label,
                          }),
                          (0, a.jsx)(u, { size: "xs", color: "currentColor", className: eI.cZ }),
                      ],
                  }),
                  (0, a.jsx)("div", { id: o, hidden: s, className: eI.MZ, children: m }),
                  l,
              ],
          })
        : (0, a.jsxs)("li", { className: I()(eI.ky, eq.XR, eI.rn), children: [m, l] });
}
function eK(e) {
    let {
            projectId: t,
            steps: n,
            announcement: l,
            content: s,
            proposal: r,
            interrupted: o = !1,
            provisionalTodo: c,
            active: d = !1,
            todos: u,
            onApprove: m,
            ideas: p,
            clarification: f,
            onAnswerClarification: g,
            attachments: x,
            secretRequest: v,
            onPickIdea: k,
            offerIdeas: b,
            onAskForIdeas: j,
            inheritedActivity: y,
        } = e,
        { items: _ } = i.useMemo(
            () =>
                (function (e) {
                    let t,
                        { turnActive: n = !0, inheritedSummary: l } =
                            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        a = [],
                        i = new Map(),
                        s = [],
                        r = new Map(),
                        o = null,
                        c = null,
                        d = null,
                        u = null,
                        h = [],
                        m = null,
                        p = l,
                        f = !1;
                    function g() {
                        null != u && (u.groups = eU(h, { inheritedSummary: t })), (u = null), (h = []);
                    }
                    function x() {
                        g(), (m = null), (d = null), (f = !1);
                    }
                    function v(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return (
                            null == d &&
                                ((d = { type: "activity", key: `activity-${e}`, blocks: [] }), (f = t), a.push(d)),
                            d
                        );
                    }
                    for (let [n, l] of e.entries()) {
                        if (null != l.task_id && "" !== l.task_id) {
                            let e = (function (e, t) {
                                let n = e.task_id,
                                    l = i.get(n);
                                if (null != l) {
                                    "task_started" === e.kind &&
                                        null != e.task_title &&
                                        "" !== e.task_title &&
                                        (l.title = e.task_title);
                                    let t = r.get(n);
                                    return (
                                        null != t &&
                                            null == t.label &&
                                            null != e.task_group_label &&
                                            "" !== e.task_group_label &&
                                            (t.label = e.task_group_label),
                                        l
                                    );
                                }
                                let a =
                                    null != e.task_group_label && "" !== e.task_group_label
                                        ? e.task_group_label
                                        : void 0;
                                null != m &&
                                    m.groupId !== e.task_group_id &&
                                    ((m = null), null != a && null != d && null != d.label && d.label !== a && x()),
                                    f && x();
                                let c = v(t);
                                null == c.label && null != a && (c.label = a), g(), (o = null);
                                let u = {
                                    taskId: n,
                                    title:
                                        null != e.task_title && "" !== e.task_title
                                            ? e.task_title
                                            : P.intl.string(R.default.MdXWEK),
                                    state: "running",
                                    groups: [],
                                    rawSteps: [],
                                };
                                return (
                                    i.set(n, u),
                                    r.set(n, c),
                                    s.push(u),
                                    null == m &&
                                        ((m = {
                                            type: "workstreams",
                                            key: `workstreams-${t}`,
                                            ...(null != e.task_group_id ? { groupId: e.task_group_id } : {}),
                                            tasks: [],
                                        }),
                                        c.blocks.push(m)),
                                    m.tasks.push(u),
                                    u
                                );
                            })(l, n);
                            if ("task_finished" === l.kind) {
                                null != l.task_state && (e.state = l.task_state),
                                    null != l.detail && "" !== l.detail && (e.detail = l.detail);
                                continue;
                            }
                            if (eH.has(l.kind)) continue;
                            e.rawSteps.push(l);
                            continue;
                        }
                        if ("thinking" === l.kind) {
                            o = null;
                            continue;
                        }
                        if ("assistant_delta" === l.kind) {
                            let e = l.message ?? "";
                            "" !== e &&
                                (null == o
                                    ? (x(), (o = { type: "message", key: `message-${n}`, content: e }), a.push(o))
                                    : (o.content = e)),
                                !0 === l.message_finished && (o = null);
                            continue;
                        }
                        if ("announcement" === l.kind) {
                            let e = l.message ?? "";
                            "" !== e && (x(), (o = null), a.push({ type: "note", key: `note-${n}`, content: e }));
                            continue;
                        }
                        if ("todos" === l.kind) {
                            let e = l.items ?? [];
                            e.length > 0 &&
                                (null != c
                                    ? (c.todos = e)
                                    : (x(),
                                      (o = null),
                                      (c = { type: "todos", key: `todos-${n}`, todos: e }),
                                      a.push(c)));
                            continue;
                        }
                        if (eH.has(l.kind)) continue;
                        let e = eV(l);
                        !e && f && x();
                        let k = v(n, e && null != p);
                        (o = null),
                            (m = null),
                            null == u &&
                                ((u = { type: "rows", key: `rows-${n}`, groups: [] }), (t = p), k.blocks.push(u)),
                            h.push(l),
                            e || (p = eF(l));
                    }
                    for (let e of (g(), s)) {
                        e.groups = eU(e.rawSteps);
                        let t = e.groups[e.groups.length - 1]?.summary;
                        null != t && (e.latestActivity = t), !n && eB(e.state) && (e.state = "incomplete");
                    }
                    for (let e of a)
                        "activity" === e.type &&
                            (function (e) {
                                let { label: t } = e;
                                if (null == t || "" === t) return;
                                let [n, ...l] = e.blocks;
                                l.length > 0 ||
                                    null == n ||
                                    "workstreams" !== n.type ||
                                    (n.tasks.every(
                                        (e) => e.groups.length > 0 && e.groups.every((e) => e.summary === t),
                                    ) &&
                                        delete e.label);
                            })(e);
                    return { items: a, tasks: s };
                })(n, { turnActive: d, inheritedSummary: y }),
            [n, d, y],
        ),
        N = _.some((e) => "note" === e.type),
        E = _.some((e) => "todos" === e.type),
        w = _.at(-1),
        S = w?.type === "message" && w.content.trim() === s.trim(),
        A = null != f && f.questions.length > 0,
        C = null == r && "" !== s && !S && !A,
        T = (function (e) {
            let { hasAttachments: t, showsClosingMessage: n, lastItemType: l } = e;
            return t
                ? n
                    ? "closing"
                    : "message" === l
                      ? "streamed"
                      : "activity" === l
                        ? "activity"
                        : "standalone"
                : "none";
        })({ hasAttachments: null != x && x.length > 0, showsClosingMessage: C, lastItemType: w?.type }),
        O = null == x ? null : (0, a.jsx)(ev, { projectId: t, attachments: x }),
        M = null == O ? null : (0, a.jsx)("div", { className: eI.MT, children: O });
    return (0, a.jsxs)("div", {
        className: eI.ue,
        children: [
            null == l || "" === l || N
                ? null
                : (0, a.jsx)(h.E, {
                      tag: "div",
                      variant: "text-sm/normal",
                      color: "text-default",
                      selectable: !0,
                      className: I()(eI.ky, eI.Xt, eq.XR),
                      children: l,
                  }),
            null != u && u.length > 0 && !E
                ? (0, a.jsx)("div", {
                      className: I()(eI.ky, eq.XR),
                      children: (0, a.jsx)(eD, { todos: u, provisional: c }),
                  })
                : null,
            _.length > 0
                ? (0, a.jsx)("ol", {
                      className: eI.dO,
                      children: _.map((e) =>
                          "message" === e.type
                              ? (0, a.jsxs)(
                                    "li",
                                    {
                                        className: I()(eI.ky, eq.XR),
                                        children: [
                                            (0, a.jsx)("div", {
                                                className: I()(ez.PT, eI.cW),
                                                children: er.A.parse(e.content, !0, {
                                                    allowList: !0,
                                                    allowHeading: !0,
                                                    allowLinks: !0,
                                                }),
                                            }),
                                            "streamed" === T && e.key === w?.key ? M : null,
                                        ],
                                    },
                                    e.key,
                                )
                              : "note" === e.type
                                ? (0, a.jsx)(
                                      h.E,
                                      {
                                          tag: "li",
                                          variant: "text-sm/normal",
                                          color: "text-default",
                                          selectable: !0,
                                          className: I()(eI.ky, eI.Xt, eq.XR),
                                          children: e.content,
                                      },
                                      e.key,
                                  )
                                : "todos" === e.type
                                  ? (0, a.jsx)(
                                        "li",
                                        {
                                            className: I()(eI.ky, eq.XR),
                                            children: (0, a.jsx)(eD, { todos: e.todos, provisional: c }),
                                        },
                                        e.key,
                                    )
                                  : (0, a.jsx)(
                                        eX,
                                        {
                                            projectId: t,
                                            item: e,
                                            attachments: "activity" === T && e.key === w?.key ? O : null,
                                        },
                                        e.key,
                                    ),
                      ),
                  })
                : null,
            null != r
                ? (0, a.jsx)("div", {
                      className: I()(eI.ky, eq.XR),
                      children: (0, a.jsx)(eE, { proposal: r, onApprove: m }),
                  })
                : C
                  ? (0, a.jsxs)("div", {
                        className: I()(eI.ky, eq.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: I()(ez.PT, eI.cW),
                                children: er.A.parse(s, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === T ? M : null,
                            !0 === b
                                ? (0, a.jsx)("div", { className: eI.IN, children: (0, a.jsx)(ef, { onAsk: j }) })
                                : null,
                        ],
                    })
                  : null,
            null != v
                ? (0, a.jsx)("div", {
                      className: I()(eI.ky, eq.XR),
                      children: (0, a.jsx)(eA, { projectId: t, request: v }),
                  })
                : null,
            "standalone" === T ? (0, a.jsx)("div", { className: I()(eI.ky, eq.XR), children: M }) : null,
            A
                ? (0, a.jsx)("div", {
                      className: I()(eI.ky, eq.XR),
                      children: (0, a.jsx)(ed, { clarification: f, onSubmit: g }),
                  })
                : null,
            null != p && p.length > 0
                ? (0, a.jsx)("div", { className: I()(eI.ky, eq.XR), children: (0, a.jsx)(ep, { ideas: p, onPick: k }) })
                : null,
            !0 !== b || C
                ? null
                : (0, a.jsx)("div", { className: I()(eI.ky, eq.XR), children: (0, a.jsx)(ef, { onAsk: j }) }),
            o
                ? (0, a.jsx)("div", {
                      className: I()(eI.ky, eq.XR),
                      children: (0, a.jsx)(h.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          selectable: !0,
                          children: P.intl.string(R.default["5T7DSm"]),
                      }),
                  })
                : null,
        ],
    });
}
let eY = { steered: R.default.I9TkzD, queued: R.default.gbjY6o, restarting: R.default["1Q4Cs2"] };
function eZ(e) {
    let { projectId: t, messages: n, onApprove: l, onPickIdea: i, onAskForIdeas: s, onAnswerClarification: r } = e,
        o = n[n.length - 1];
    return (0, a.jsx)("ol", {
        className: ex.x7,
        children: n.map((e, c) => {
            if ("user" === e.role)
                return (0, a.jsx)(
                    eJ,
                    {
                        role: "user",
                        children: (0, a.jsxs)("div", {
                            className: I()(ex.B2, eq.XR),
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
                                null != e.disposition
                                    ? (0, a.jsx)(h.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          children: P.intl.string(eY[e.disposition]),
                                      })
                                    : null,
                            ],
                        }),
                    },
                    e.render_id,
                );
            let d = e.steps.filter((e) => !eH.has(e.kind)).length > 0,
                u = e.steps.some((e) => "assistant_delta" === e.kind && null != e.message && "" !== e.message),
                m = "plan_implemented" === e.kind && e === o,
                p = null != e.clarification && e === o;
            return "" !== e.content ||
                null != e.proposal ||
                null != e.ideas ||
                null != e.clarification ||
                m ||
                d ||
                u ||
                null != e.announcement ||
                null != e.todos ||
                !0 === e.interrupted ||
                (e.attachments?.length ?? 0) !== 0
                ? (0, a.jsx)(
                      eJ,
                      {
                          role: "assistant",
                          children: (0, a.jsx)(eK, {
                              projectId: t,
                              steps: e.steps,
                              announcement: e.announcement,
                              content: e.content,
                              proposal: e.proposal,
                              interrupted: !0 === e.interrupted,
                              provisionalTodo: e.provisionalTodo,
                              active: !(0, H.B)(e),
                              todos: e.todos,
                              onApprove: e === o ? l : void 0,
                              ideas: e.ideas,
                              clarification: p ? e.clarification : void 0,
                              onAnswerClarification: r,
                              attachments: e.attachments,
                              secretRequest: e.secretRequest,
                              onPickIdea: i,
                              offerIdeas: m,
                              onAskForIdeas: s,
                              inheritedActivity: (function (e, t) {
                                  let n = e[t]?.turn_id;
                                  if (null != n)
                                      for (let l = t - 1; l >= 0; l--) {
                                          let t = e[l];
                                          if (null != t && "assistant" === t.role)
                                              return !0 === t.continued && t.turn_id === n
                                                  ? (function (e) {
                                                        for (let t = e.length - 1; t >= 0; t--) {
                                                            let n = e[t];
                                                            if (
                                                                null != n &&
                                                                (null == n.task_id || "" === n.task_id) &&
                                                                !(eH.has(n.kind) || eV(n))
                                                            )
                                                                return eF(n);
                                                        }
                                                    })(t.steps)
                                                  : void 0;
                                      }
                              })(n, c),
                          }),
                      },
                      e.render_id,
                  )
                : null;
        }),
    });
}
function eJ(e) {
    let { role: t, children: n } = e;
    return (0, a.jsx)("li", { "data-role": t, className: ex.xk, children: n });
}
var eQ = n(379307),
    e0 = n(922016),
    e1 = n(863610),
    e2 = n(446892);
function e6(e) {
    let { activity: t, id: n } = e,
        l = t?.text ?? "",
        s = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            s.current?.scrollToBottom();
        }, [l]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: e2.jn,
            "data-vibegrations-thinking-panel": !0,
            children: (0, a.jsx)(D.Ch, {
                ref: s,
                className: e2.Dq,
                "data-vibegrations-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: I()(ez.PT, e2.bb),
                    children: er.A.parse(l, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var e8 = n(249680);
function e5(e) {
    let { activity: t, compacting: n = !1 } = e,
        l = i.useRef(null),
        s = i.useId(),
        [r, o] = i.useState(null),
        c = null != t && "end" !== t.phase,
        d = n ? R.default["0vH/5G"] : c ? R.default.Ly7F7x : R.default.QDGuNS,
        u = null != t && "" !== t.text,
        m = t?.session ?? null,
        p = u && null != m && r === m,
        f = i.useCallback(() => {
            u && null != m && o((e) => (e === m ? null : m));
        }, [u, m]),
        g = i.useCallback(() => o(null), []);
    return (0, a.jsx)(e0.Y, {
        targetElementRef: l,
        position: "top",
        align: "left",
        shouldShow: p,
        onRequestClose: g,
        renderPopout: () => (0, a.jsx)(e6, { id: s, activity: t }),
        children: () =>
            (0, a.jsxs)(K.D, {
                innerRef: l,
                className: I()(e8.h, u && e8.X),
                "aria-label": P.intl.string(R.default.SzdX35),
                "aria-expanded": p,
                "aria-describedby": p ? s : void 0,
                "data-vibegrations-thinking-trigger": !0,
                onClick: f,
                children: [
                    (0, a.jsx)(e1.n, { dotRadius: 3.5, themed: !0 }),
                    (0, a.jsx)(h.E, {
                        tag: "span",
                        variant: "text-xs/semibold",
                        color: "text-strong",
                        children: P.intl.string(d),
                    }),
                ],
            }),
    });
}
var e7 = n(662546),
    e3 = n(173016);
function e4(e) {
    let { todos: t, provisional: n } = e;
    return (0, a.jsx)("div", {
        className: e3.B,
        role: "dialog",
        "aria-label": P.intl.string(R.default.qCRC6c),
        children: (0, a.jsx)(eD, { todos: t, provisional: n, announceProgress: !1 }),
    });
}
function e9(e) {
    let { todos: t, provisional: n } = e,
        l = i.useRef(null),
        { completed: s, total: r } = eL(t);
    return 0 === r
        ? null
        : (0, a.jsx)(e0.Y, {
              targetElementRef: l,
              position: "top",
              align: "right",
              renderPopout: () => (0, a.jsx)(e4, { todos: t, provisional: n }),
              children: (e) =>
                  (0, a.jsxs)(K.D, {
                      innerRef: l,
                      className: e3.T,
                      "aria-label": P.intl.formatToPlainString(R.default["QG/EiF"], { completed: s, total: r }),
                      ...e,
                      children: [
                          (0, a.jsx)(e7.O, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                          (0, a.jsx)(h.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "none",
                              children: P.intl.formatToPlainString(R.default["6zuiBa"], { completed: s, total: r }),
                          }),
                      ],
                  }),
          });
}
var te = n(885574),
    tt = n(677175);
function tn(e) {
    return e.toLocaleString();
}
function tl(e) {
    let { label: t, usage: n } = e;
    return (0, a.jsxs)("div", {
        className: tt.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: tt.mf,
                children: [
                    (0, a.jsx)(h.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(h.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [tn((0, z.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(h.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    tn(n.input_tokens),
                    " in \xb7 ",
                    tn(n.output_tokens),
                    " out \xb7 ",
                    tn(n.cache_creation_input_tokens),
                    " cache write \xb7 ",
                    tn(n.cache_read_input_tokens),
                    " cache read",
                ],
            }),
        ],
    });
}
function ta(e) {
    let { project: t } = e,
        n = (0, z.wV)(t.orchestrator, t.codegen);
    return (0, a.jsxs)("div", {
        className: tt.si,
        role: "dialog",
        "aria-label": P.intl.string(R.default["9yoLWZ"]),
        children: [
            (0, a.jsx)("div", {
                className: tt.Q$,
                children: (0, a.jsxs)("div", {
                    className: tt.mf,
                    children: [
                        (0, a.jsxs)(h.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [tn((0, z.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(h.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(tl, { label: P.intl.string(R.default.hk4jJr), usage: t.orchestrator }),
            (0, a.jsx)(tl, { label: P.intl.string(R.default.R9aduM), usage: t.codegen }),
            (0, a.jsxs)("div", {
                className: tt.mf,
                children: [
                    (0, a.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: P.intl.string(R.default["kILb+R"]),
                    }),
                    (0, a.jsx)(h.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, z.sj)(n) ? "\u2014" : `${Math.round(100 * (0, z.CA)(n))}%`,
                    }),
                ],
            }),
        ],
    });
}
function ti(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(e0.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(ta, { project: t }),
        children: (e) =>
            (0, a.jsx)(K.D, {
                innerRef: n,
                className: tt.Y$,
                "aria-label": P.intl.string(R.default.AWQ2ZV),
                ...e,
                children: (0, a.jsx)(te.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var ts = n(154861);
function tr(e) {
    switch (e) {
        case "connecting":
            return P.intl.string(R.default.W7oyuf);
        case "failed":
            return P.intl.string(R.default.eE60xI);
        case "closed":
            return P.intl.string(R.default["yBmS+I"]);
    }
}
function to(e) {
    let {
        thinking: t,
        thinkingActivity: n,
        compacting: l,
        todos: i,
        provisionalTodo: s,
        projectUsage: r,
        connState: o,
        modelSettings: c,
        onModelSettingsChange: d,
    } = e;
    return (0, a.jsxs)("div", {
        className: ts.jf,
        children: [
            (0, a.jsx)("div", {
                className: ts.Xx,
                role: "status",
                "aria-live": "polite",
                "data-vibegrations-activity": !0,
                children: t ? (0, a.jsx)(e5, { activity: n, compacting: l }) : null,
            }),
            null == c
                ? null
                : (0, a.jsx)(eQ.A, { settings: c.settings, choices: c.choices, disabled: "open" !== o, onChange: d }),
            null == i || 0 === i.length ? null : (0, a.jsx)(e9, { todos: i, provisional: s }),
            null == r
                ? null
                : (0, a.jsxs)("span", {
                      className: ts.BP,
                      children: [
                          (0, a.jsx)(h.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": P.intl.formatToPlainString(R.default["7SZZvj"], {
                                  runes: (0, z.a7)(r.cost_usd),
                                  turns: r.turns,
                              }),
                              children: P.intl.formatToPlainString(R.default["4PFO2p"], {
                                  runes: (0, z.a7)(r.cost_usd).toLocaleString(),
                              }),
                          }),
                          (0, a.jsx)(ti, { project: r }),
                      ],
                  }),
            "open" === o
                ? null
                : (0, a.jsx)(h.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === o ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": P.intl.formatToPlainString(R.default.eDDdhB, { status: tr(o) }),
                      "data-vibegrations-conn": !0,
                      "data-state": o,
                      className: ts.XF,
                      children: tr(o),
                  }),
        ],
    });
}
var tc = n(506774),
    td = n(651649),
    tu = n(670455);
let th = "shownVibegrationsFeedbackProjectIds";
var tm = n(104071);
function tp(e) {
    let { projectId: t, onRegionCapture: l } = e,
        s = (0, k.bG)([H.A], () => H.A.getMessages(t), [t]),
        r = (0, k.bG)([o.Ay], () => o.Ay.getConnState(t), [t]),
        c = (0, k.bG)([H.A], () => H.A.getProjectUsage(t), [t]),
        d = (0, k.bG)([H.A], () => H.A.getThinkingActivity(t), [t]),
        u = (0, k.bG)([H.A], () => H.A.isCompacting(t), [t]),
        h = (0, k.bG)([o.Ay], () => o.Ay.getModelSettings(t), [t]),
        m = i.useRef(null),
        p = i.useRef(null),
        f = i.useRef(!0);
    i.useEffect(() => {
        f.current && p.current?.scrollToBottom();
    }, [s]);
    let g = i.useCallback(() => {
        let e = p.current;
        null != e && (f.current = 32 > e.getDistanceFromBottom());
    }, []);
    i.useLayoutEffect(() => {
        let e = m.current;
        if (null == e) return;
        let t = e.getBoundingClientRect().width,
            n = null,
            l = new ResizeObserver((l) => {
                let [a] = l,
                    i = a?.contentRect.width ?? e.getBoundingClientRect().width;
                i === t ||
                    ((t = i),
                    f.current &&
                        (null != n && cancelAnimationFrame(n),
                        (n = requestAnimationFrame(() => p.current?.scrollToBottom()))));
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
                    let t = H.A.getMessages(e).filter((e) => "assistant" === e.role && (0, H.B)(e)).length;
                    !(t < 3) &&
                        ((tc.w.get(th) ?? []).includes(e) ||
                            td.A.possiblyShowFeedbackModal(tu.MW.VIBEGRATIONS, () => {
                                let l;
                                (l = tc.w.get(th) ?? []).includes(e) || tc.w.set(th, [...l, e]),
                                    (0, ew.openModalLazy)(async () => {
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
    let x = i.useCallback(
            (e, n) => {
                (0, o.dv)(t, e, n);
            },
            [t],
        ),
        v = i.useCallback(() => (0, o.fu)(t), [t]),
        b = i.useCallback((e) => x(e.implementation_prompt), [x]),
        j = i.useCallback((e) => x(e), [x]),
        y = i.useCallback(() => x(P.intl.string(R.default["3sTTBu"])), [x]),
        _ = i.useCallback((e) => (0, o.XZ)(t, e), [t]),
        N = i.useCallback((e) => (0, o.vX)(t, e), [t]),
        E = i.useCallback((e) => (0, o.Vm)(t, e), [t]),
        w = i.useCallback(() => x(P.intl.string(R.default.Jj8Ftb)), [x]),
        S = "open" === r,
        A = s[s.length - 1],
        I = null != A && "assistant" === A.role && null != A.proposal,
        C = null != A && "assistant" === A.role && !(0, H.B)(A),
        T = I && S ? w : void 0,
        O = C && A?.role === "assistant" ? A.todos : void 0,
        M = C && A?.role === "assistant" ? A.provisionalTodo : void 0;
    return (0, a.jsxs)("section", {
        ref: m,
        "data-vibegrations-chat": !0,
        className: tm.T,
        children: [
            (0, a.jsx)(D.Ch, {
                ref: p,
                onScroll: g,
                "data-vibegrations-chat-log": !0,
                className: tm.N,
                children: (0, a.jsx)(eZ, {
                    projectId: t,
                    messages: s,
                    onApprove: T,
                    onPickIdea: S ? b : void 0,
                    onAskForIdeas: S ? y : void 0,
                    onAnswerClarification: S ? j : void 0,
                }),
            }),
            (0, a.jsx)(to, {
                thinking: C,
                thinkingActivity: d,
                compacting: u,
                todos: O,
                provisionalTodo: M,
                projectUsage: c,
                connState: r,
                modelSettings: h,
                onModelSettingsChange: _,
            }),
            (0, a.jsx)(el, {
                canSend: S,
                running: C,
                onSend: x,
                onInterrupt: S ? v : void 0,
                onUploadFile: N,
                onDeleteFile: E,
                onApprove: T,
                onRegionCapture: l,
            }),
        ],
    });
}
var tf = n(435558),
    tg = n(661531),
    tx = n(602853),
    tv = n(517461),
    tk = n(761929),
    tb = n(552067);
function tj(e) {
    let { open: t, maxWidth: n, onWidthChange: l, children: s } = e,
        r = (0, tx.r)(tg.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = i.useRef(null),
        [c, d] = (0, tv.V)("VibegrationsChatSidebarWidth", 460),
        [u, h] = i.useState(c ?? 460),
        m = (0, tf.clamp)(u, 360, n);
    i.useLayoutEffect(() => {
        l(t ? m + r : 0);
    }, [m, t, r, l]);
    let p = (0, tk.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: o,
            onElementResize: h,
            onElementResizeEnd: d,
            orientation: tk.R.HORIZONTAL_LEFT,
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
        className: tb.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: tb.Di, onPointerDown: f }),
            (0, a.jsx)("div", { ref: o, className: tb.kL, style: { width: m }, children: s }),
        ],
    });
}
var ty = n(333007),
    t_ = n(638015);
function tN(e) {
    return {
        x: Math.min(e.startX, e.x),
        y: Math.min(e.startY, e.y),
        width: Math.abs(e.x - e.startX),
        height: Math.abs(e.y - e.startY),
    };
}
function tE(e) {
    let { targetRect: t, onSelect: n, onCancel: l } = e,
        [s, r] = i.useState(null);
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
                r({ startX: t.x, startY: t.y, x: t.x, y: t.y });
            },
            [o],
        ),
        d = i.useCallback(
            (e) => {
                let t = o(e);
                r((e) => (null == e ? e : { ...e, x: t.x, y: t.y }));
            },
            [o],
        ),
        u = i.useCallback(
            (e) => {
                if (null == s) return;
                let t = o(e),
                    a = tN({ ...s, x: t.x, y: t.y });
                r(null), a.width < 8 && a.height < 8 ? l() : n(a);
            },
            [s, o, n, l],
        ),
        m = null == s ? null : tN(s);
    return (0, ty.createPortal)(
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("div", { className: t_.tB, role: "presentation", onPointerDown: l }),
                (0, a.jsx)("div", {
                    className: t_.aC,
                    style: { left: t.left, top: t.top, width: t.width, height: t.height },
                    role: "application",
                    "aria-label": P.intl.string(R.default["9MOgRI"]),
                    onPointerDown: c,
                    onPointerMove: d,
                    onPointerUp: u,
                    onPointerCancel: l,
                    children:
                        null == m
                            ? (0, a.jsx)("div", {
                                  className: t_.F7,
                                  children: (0, a.jsx)("div", {
                                      className: t_.aK,
                                      children: (0, a.jsx)(h.E, {
                                          variant: "text-sm/medium",
                                          color: "text-default",
                                          children: P.intl.string(R.default.ydkvBR),
                                      }),
                                  }),
                              })
                            : (0, a.jsx)("div", {
                                  className: t_.r1,
                                  style: { left: m.x, top: m.y, width: m.width, height: m.height },
                              }),
                }),
            ],
        }),
        document.body,
    );
}
function tw(e) {
    let { projectId: t } = e,
        n = (0, k.bG)([H.A], () => H.A.isThinking(t), [t]);
    return (0, a.jsx)("div", { className: eq.MP, "data-active": n, "aria-hidden": !0 });
}
var tS = n(280218),
    tA = n(171936),
    tI = n(291815);
function tC(e) {
    let { projectId: t, applicationId: n, surface: l, previewReady: r, content: o, sidebar: c } = e,
        [d, u] = i.useState(null),
        h = (0, s.A)(n, l),
        m = h?.id ?? null,
        [p, f] = i.useState(null);
    i.useEffect(() => {
        if (null != t) return (0, tA.mn)(t, () => (0, tS.F1)(d, m));
    }, [t, d, m]);
    let g = i.useCallback(() => {
            let e = (0, tS.F1)(d, m),
                t = e?.getBoundingClientRect();
            return null == e || null == t || t.width < 1 || t.height < 1
                ? Promise.reject(Error("no visible preview to capture"))
                : new Promise((n, l) => {
                      f({
                          targetRect: { left: t.left, top: t.top, width: t.width, height: t.height },
                          iframe: e,
                          resolve: n,
                          reject: l,
                      });
                  });
        }, [d, m]),
        x = i.useCallback(
            (e) => {
                f(null), null != p && (0, tS.su)(p.iframe, e).then(p.resolve, p.reject);
            },
            [p],
        ),
        v = i.useCallback(() => {
            f(null), p?.resolve(null);
        }, [p]),
        k = r && null != n && l.type === N.U4.MAIN;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", { ref: u, className: tI.fm, children: o }),
            c(k ? g : void 0),
            null != p ? (0, a.jsx)(tE, { targetRect: p.targetRect, onSelect: x, onCancel: v }) : null,
        ],
    });
}
function tT(e) {
    let { projectId: t, applicationId: n, surface: l, chatOpen: s, previewReady: c, previewGate: d } = e,
        u = i.useRef(null),
        [h, m] = i.useState(0);
    i.useLayoutEffect(() => {
        if (l.type === N.U4.MAIN) return (0, r.HV)(n), () => (0, r.HV)(null);
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
        i.useEffect(() => () => (0, r.Zq)(0), []);
    let p = Math.max(360, h - 320),
        f = s || l.type === N.U4.MAIN;
    return (0, a.jsx)("div", {
        ref: u,
        className: tI.LB,
        children: (0, a.jsx)(tC, {
            projectId: t,
            applicationId: n,
            surface: l,
            previewReady: c,
            content: (0, a.jsx)(G, { applicationId: n, surface: l, previewReady: c, previewGate: d }),
            sidebar: (e) =>
                null != t && f
                    ? (0, a.jsx)(tj, {
                          open: s,
                          maxWidth: p,
                          onWidthChange: r.Zq,
                          children: (0, a.jsxs)("div", {
                              className: tI.cO,
                              children: [
                                  (0, a.jsx)(tw, { projectId: t }),
                                  (0, a.jsx)(tp, { projectId: t, onRegionCapture: e }, t),
                              ],
                          }),
                      })
                    : null,
        }),
    });
}
