n.d(t, { A: () => tC });
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
    f = n(812901),
    g = n(317608),
    x = n(17928),
    v = n(956518),
    k = n(627363),
    b = n(869146),
    j = n(625180),
    y = n(91242),
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
    S = n(503698),
    A = n.n(S),
    I = n(612749);
function C(e) {
    let { title: t, body: n, wide: l = !1, children: i } = e;
    return (0, a.jsxs)("div", {
        className: A()(I.Bf, l && I.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: I.Ux,
                children: [
                    (0, a.jsx)(p.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, a.jsx)(h.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
                ],
            }),
            i,
        ],
    });
}
var T = n(818085),
    R = n(375708),
    P = n(616694);
function O(e) {
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
                        s = (0, x.bG)([y.A], () => y.A.getFrame(l), [l]),
                        r = (0, x.bG)(
                            [b.A, y.A],
                            () => b.A.getWindowOpen(E.MLl.ACTIVITY_POPOUT) && y.A.getMainFrame()?.id === l,
                            [l],
                        ),
                        { data: o, isLoading: c } = (0, k.YY)(t),
                        d = (0, _.x)(o),
                        u = null != (0, v.Ay)(t),
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
                            await j.A.launchFrame({ applicationId: t, surface: l });
                        } catch {
                            a();
                        }
                    }
                }, [r, t, l, a]),
                s
            );
        })({ applicationId: t, surface: n }),
        r = i.useMemo(() => (0, N.VA)(t, n), [t, n]);
    switch (
        (i.useEffect(() => {
            if ((0, N.Yf)(n) === N.sV.MAIN) return () => (0, m.A)().leaveFrame(r);
        }, [r, n]),
        s)
    ) {
        case w.Launched:
            return (0, a.jsx)(g.A, { frameId: l.id, level: f.A.WithinAppContent, className: P.Z7 });
        case w.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: P.qs,
                children: (0, a.jsx)(C, {
                    title: R.intl.string(T.default["4f6Vkr"]),
                    body: R.intl.string(T.default.LJ2q1H),
                }),
            });
        case w.NoApplication:
            return (0, a.jsxs)("div", {
                className: P.qs,
                children: [
                    (0, a.jsx)(u.k, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
                    (0, a.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: R.intl.string(T.default["6xTawd"]),
                    }),
                ],
            });
        case w.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: P.qs,
                children: (0, a.jsx)(C, {
                    title: R.intl.string(T.default.FHOJiH),
                    body: R.intl.string(T.default["1yLQoV"]),
                }),
            });
        case w.Error:
            return (0, a.jsxs)("div", {
                className: P.qs,
                children: [
                    (0, a.jsx)(p.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: R.intl.string(T.default.MeLWCr),
                    }),
                    (0, a.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: P.tj,
                        children: R.intl.string(T.default["1RCbQT"]),
                    }),
                ],
            });
        case w.AwaitingLaunch:
        case w.Loading:
            return (0, a.jsx)("div", { className: P.qs, children: (0, a.jsx)(c.y, {}) });
    }
}
var M = n(668917);
function L(e) {
    let { applicationId: t, surface: n, previewReady: l, previewGate: r } = e,
        o = (0, s.A)(t, n);
    return (i.useEffect(() => {
        r?.type === "permissions" && null != o && (0, m.A)().leaveFrame(o.id);
    }, [o, r?.type]),
    r?.type === "checking")
        ? (0, a.jsx)("div", { className: M.q, children: (0, a.jsx)(c.y, {}) })
        : r?.type === "permissions"
          ? (0, a.jsx)("div", {
                className: M.q,
                children: (0, a.jsx)(C, {
                    wide: !0,
                    title: R.intl.string(T.default.DYwf2n),
                    body: R.intl.string(T.default.WWj3pN),
                    children: (0, a.jsx)(d.$, {
                        variant: "primary",
                        size: "md",
                        text: R.intl.string(T.default["CRfE/E"]),
                        onClick: r.onReviewPermissions,
                        loading: r.loading,
                    }),
                }),
            })
          : l
            ? null != t
                ? (0, a.jsx)(O, { applicationId: t, surface: n })
                : null
            : (0, a.jsxs)("div", {
                  className: M.q,
                  children: [
                      (0, a.jsx)(u.k, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
                      (0, a.jsx)(h.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: R.intl.string(T.default["6xTawd"]),
                      }),
                  ],
              });
}
var G = n(689175),
    D = n(783791);
n(323874), n(14289), n(35956), n(321073);
var H = n(866665),
    B = n(588975),
    U = n(428610),
    V = n(826745),
    F = n(29080),
    $ = n(559647),
    W = n(285796),
    q = n(673724),
    z = n(514042),
    X = n(939249),
    K = n(195219);
function Y(e) {
    return A()(K._B, { [K.ND]: e });
}
function Z(e) {
    let { name: t, thumbSrc: n = null, compact: l = !1, subText: i, children: s, onThumbError: r } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            null != n
                ? (0, a.jsx)("img", { src: n, alt: "", className: K.gJ, onError: r })
                : (0, a.jsx)(z.FileIcon, { size: l ? "xs" : "sm", color: "currentColor" }),
            (0, a.jsxs)("div", {
                className: K.Wd,
                children: [
                    (0, a.jsx)(h.E, { variant: "text-sm/medium", color: "text-default", className: K.Rr, children: t }),
                    i,
                ],
            }),
            s,
        ],
    });
}
function J(e) {
    return (0, a.jsx)("div", { className: Y(e.compact ?? !1), children: Z(e) });
}
function Q(e) {
    let { name: t, thumbSrc: n, ariaLabel: l, onClick: i, onThumbError: s } = e;
    return (0, a.jsx)(X.D, {
        className: A()(Y(!0), K.w8),
        onClick: i,
        "aria-label": l,
        children: Z({ name: t, thumbSrc: n, compact: !0, onThumbError: s }),
    });
}
var ee = n(17117);
let et = 0;
function en(e) {
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
                        a = ++et,
                        i = { localId: a, name: l.name, size: l.size, contentType: e, status: "uploading" };
                    if (t.length >= 10) {
                        t.push({
                            ...i,
                            status: "error",
                            errorText: R.intl.formatToPlainString(T.default.DlX57a, { count: 10 }),
                        });
                        continue;
                    }
                    if (!(0, q.x5)(l.size, e)) {
                        t.push({
                            ...i,
                            status: "error",
                            errorText: R.intl.formatToPlainString(T.default.cI7t94, { size: (0, q.ZJ)((0, q.yr)(e)) }),
                        });
                        continue;
                    }
                    let s = q.Wb.has(e) ? URL.createObjectURL(l) : void 0;
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
                                A(l, { status: "error", errorText: R.intl.string(T.default.GwEHvn) }));
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
                                localId: ++et,
                                name: "preview-capture.png",
                                size: 0,
                                contentType: "image/png",
                                status: "error",
                                errorText: R.intl.string(T.default["4DQd7d"]),
                            },
                        ]);
                } finally {
                    k(!1);
                }
            }
        }, [u, v, I, w]),
        P = i.useCallback(
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
        W = i.useCallback(() => {
            null == s || b || (j(!0), s());
        }, [s, b]),
        z = i.useCallback(
            (e) => {
                if ("Escape" === e.key && n && null != s && !b) {
                    e.preventDefault(), e.stopPropagation(), W();
                    return;
                }
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != d && (e.preventDefault(), d());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), G());
            },
            [G, d, n, s, b, W],
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
        className: g ? `${ee.DA} ${ee.pV}` : ee.DA,
        children: [
            p.length > 0
                ? (0, a.jsx)("div", {
                      className: ee.lN,
                      children: p.map((e) => (0, a.jsx)(el, { draft: e, onRemove: P }, e.localId)),
                  })
                : null,
            (0, a.jsxs)("div", {
                className: ee.VA,
                children: [
                    (0, a.jsx)("input", {
                        ref: y,
                        type: "file",
                        multiple: !0,
                        onChange: Z,
                        className: ee.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    (0, a.jsx)(H.m, {
                        text: R.intl.string(T.default.gUn10I),
                        ariaHidden: !0,
                        children: (0, a.jsx)("button", {
                            type: "button",
                            className: ee.Y0,
                            disabled: !t,
                            onClick: () => y.current?.click(),
                            "aria-label": R.intl.string(T.default.gUn10I),
                            children: (0, a.jsx)(B.P, { size: "sm", color: "currentColor" }),
                        }),
                    }),
                    (0, a.jsx)(H.m, {
                        text: R.intl.string(T.default.B5gWPk),
                        ariaHidden: !0,
                        children: (0, a.jsx)("button", {
                            type: "button",
                            className: ee.Y0,
                            disabled: null == u || !t || v,
                            onClick: C,
                            "aria-label": R.intl.string(T.default.B5gWPk),
                            children: v
                                ? (0, a.jsx)(c.y, { type: c.t.SPINNING_CIRCLE_SIMPLE, className: ee.Rk })
                                : (0, a.jsx)(U.K, { size: "sm", color: "currentColor" }),
                        }),
                    }),
                    (0, a.jsx)(V.y, {
                        value: h,
                        onChange: (e) => m(e.currentTarget.value),
                        onKeyDown: z,
                        onPaste: X,
                        placeholder: t
                            ? R.intl.string(n ? T.default["67PpcP"] : T.default.ahRdoJ)
                            : R.intl.string(T.default.nm4w9P),
                        disabled: !t,
                        "aria-label": R.intl.string(T.default.OPr66w),
                        rows: 1,
                        className: ee.jp,
                    }),
                    (0, a.jsxs)("div", {
                        className: ee.fF,
                        children: [
                            (0, a.jsx)("div", { className: ee.MT }),
                            n && null != s
                                ? (0, a.jsx)(H.m, {
                                      text: R.intl.string(T.default.KdgI4k),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)("button", {
                                          type: "button",
                                          className: ee.AW,
                                          disabled: b,
                                          onClick: W,
                                          "aria-label": R.intl.string(T.default.KdgI4k),
                                          children: (0, a.jsx)(F.w, {
                                              size: "xs",
                                              color: "currentColor",
                                              className: ee.Mx,
                                          }),
                                      }),
                                  })
                                : null,
                            (0, a.jsx)("button", {
                                type: "submit",
                                className: ee.rt,
                                disabled: !L,
                                "aria-label": R.intl.string(T.default["22GHMt"]),
                                children: (0, a.jsx)($.SendMessageIcon, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: ee.Mx,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function el(e) {
    let { draft: t, onRemove: n } = e;
    return (0, a.jsxs)(J, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(h.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(c.y, { type: c.t.SPINNING_CIRCLE_SIMPLE, className: ee.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: ee.o1,
                onClick: () => n(t.localId),
                "aria-label": R.intl.string(T.default["3HWvgk"]),
                children: (0, a.jsx)(W.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
n(134528), n(947204);
var ea = n(320448),
    ei = n(847374),
    es = n(46054),
    er = n(263783);
function eo(e) {
    let { option: t, disabled: n, onPick: l } = e,
        s = i.useId(),
        r = !0 === t.recommended,
        o = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(X.D, {
        className: A()(er.uK, { [er.ue]: n }),
        onClick: n ? void 0 : () => l(t),
        "aria-label": R.intl.formatToPlainString(r ? T.default.aL1BKQ : T.default.k7lEgj, { answer: t.label }),
        "aria-describedby": o ? s : void 0,
        "aria-disabled": n,
        "data-vibegrations-clarification-option": t.id,
        "data-recommended": r ? "true" : void 0,
        children: [
            (0, a.jsxs)("span", {
                className: er.l8,
                children: [
                    (0, a.jsx)(h.E, {
                        tag: "span",
                        variant: "text-sm/semibold",
                        color: "none",
                        className: er.ed,
                        children: t.label,
                    }),
                    r
                        ? (0, a.jsx)(h.E, {
                              tag: "span",
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              className: er.rM,
                              children: R.intl.string(T.default.OXRWyV),
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
function ec(e) {
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
        className: er.$O,
        "data-vibegrations-clarification": t.id,
        "data-state": u ? "inert" : "open",
        "data-step": p,
        children: [
            m > 1
                ? (0, a.jsxs)("div", {
                      className: er.qB,
                      children: [
                          (0, a.jsx)(h.E, {
                              tag: "span",
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              "aria-live": "polite",
                              className: er.Dd,
                              "data-vibegrations-clarification-progress": !0,
                              children: R.intl.formatToPlainString(T.default["7bypa+"], { index: p + 1, total: m }),
                          }),
                          (0, a.jsx)(X.D, {
                              className: A()(er.aX, { [er.uh]: !k }),
                              onClick: k ? v : void 0,
                              tabIndex: k ? 0 : -1,
                              "aria-hidden": !k,
                              "aria-disabled": u,
                              "aria-label": R.intl.string(T.default.KYpgvZ),
                              "data-vibegrations-clarification-back": !0,
                              "data-hidden": k ? void 0 : "true",
                              children: (0, a.jsx)(h.E, {
                                  tag: "span",
                                  variant: "text-xs/semibold",
                                  color: "none",
                                  children: R.intl.string(T.default.yKdgqw),
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
                className: er.fF,
                role: "group",
                "aria-labelledby": `${f.id}-label`,
                children: f.options.map((e) =>
                    (0, a.jsx)(
                        eo,
                        { option: e, disabled: u, onPick: (e) => x({ kind: "option", optionId: e.id, text: e.label }) },
                        e.id,
                    ),
                ),
            }),
            (0, a.jsx)("div", {
                className: er.F,
                children: (0, a.jsx)(V.y, {
                    value: b,
                    onChange: (e) => {
                        let { value: t } = e.currentTarget;
                        o((e) => ({ ...e, [f.id]: t }));
                    },
                    onKeyDown: (e) => {
                        "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), j());
                    },
                    placeholder: R.intl.string(T.default.qifsdL),
                    "aria-label": R.intl.formatToPlainString(T.default.XHESTL, { question: f.question }),
                    disabled: u,
                    rows: 1,
                    className: er.Pu,
                    "data-vibegrations-clarification-other": f.id,
                }),
            }),
        ],
    });
}
var ed = n(443865),
    eu = n(843614);
function eh(e) {
    let { idea: t, onPick: n } = e,
        l = i.useId(),
        s = null == n;
    return (0, a.jsxs)(X.D, {
        className: s ? `${eu.Nr} ${eu.xe}` : eu.Nr,
        onClick: s ? void 0 : () => n(t),
        "aria-label": R.intl.formatToPlainString(T.default.pztRGi, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : l,
        "aria-disabled": s,
        children: [
            (0, a.jsx)(h.E, {
                tag: "div",
                variant: "text-sm/semibold",
                color: "none",
                className: eu.JJ,
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
function em(e) {
    let { ideas: t, onPick: n } = e;
    return (0, a.jsxs)("section", {
        className: eu.kR,
        "data-vibegrations-idea-cards": !0,
        children: [
            (0, a.jsxs)("div", {
                className: eu.wx,
                children: [
                    (0, a.jsx)(ed.LightbulbIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                    (0, a.jsx)(h.E, {
                        tag: "span",
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        children: R.intl.string(T.default.DAvYsi),
                    }),
                ],
            }),
            t.map((e) => (0, a.jsx)(eh, { idea: e, onPick: n }, e.id)),
        ],
    });
}
function ep(e) {
    let { onAsk: t } = e;
    return (0, a.jsxs)("div", {
        className: eu.x,
        children: [
            (0, a.jsx)(h.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tag: "span",
                className: eu.I1,
                children: R.intl.string(T.default.tG5PBo),
            }),
            (0, a.jsx)(d.$, {
                variant: "secondary",
                size: "sm",
                disabled: null == t,
                onClick: t,
                text: R.intl.string(T.default.cwTe5o),
            }),
        ],
    });
}
var ef = n(256905),
    eg = n(289149);
function ex(e) {
    let { projectId: t, attachments: n } = e,
        l = n.filter(ev);
    return (0, a.jsx)("div", {
        className: eg.KT,
        children: n.map((e, n) =>
            null == e.id
                ? (0, a.jsx)(ek, { name: e.name }, n)
                : ev(e)
                  ? (0, a.jsx)(ej, { projectId: t, viewableImages: l, viewerIndex: l.indexOf(e) }, n)
                  : (0, a.jsx)(eb, { projectId: t, id: e.id, name: e.name }, n),
        ),
    });
}
function ev(e) {
    return null != e.id && q.Wb.has(e.content_type);
}
function ek(e) {
    let { name: t, unavailable: n = !1 } = e,
        l = n ? R.intl.formatToPlainString(T.default.OBr7WW, { name: t }) : t;
    return (0, a.jsx)(J, { name: l, compact: !0 });
}
function eb(e) {
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
        ? (0, a.jsx)(ek, { name: l, unavailable: !0 })
        : (0, a.jsx)(Q, {
              name: l,
              thumbSrc: null,
              ariaLabel: R.intl.formatToPlainString(T.default.gV5YcR, { name: l }),
              onClick: c,
          });
}
function ej(e) {
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
                  (0, ef.R)({
                      items: e.filter((e) => "string" != typeof e),
                      startingIndex: e.slice(0, l).filter((e) => "string" != typeof e).length,
                      shouldHideMediaOptions: !0,
                      location: "VibegrationsChat",
                  });
        });
    }, [t, n, l]);
    return u
        ? (0, a.jsx)(ek, { name: r, unavailable: !0 })
        : (0, a.jsx)(Q, {
              name: r,
              thumbSrc: c,
              ariaLabel: R.intl.formatToPlainString(T.default.QUFLUq, { name: r }),
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
var ey = n(84206);
function e_(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsxs)("section", {
              className: ey.hb,
              children: [
                  (0, a.jsx)(h.E, { variant: "text-xs/semibold", color: "text-muted", tag: "span", children: t }),
                  (0, a.jsx)("div", {
                      className: ey.Hu,
                      children: n.map((e) =>
                          (0, a.jsx)(
                              "span",
                              {
                                  className: ey.uR,
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
function eN(e) {
    let { proposal: t, onApprove: n } = e;
    return (0, a.jsxs)("article", {
        className: ey.cz,
        "data-vibegrations-plan-card": !0,
        children: [
            (0, a.jsxs)("header", {
                className: ey.pu,
                children: [
                    (0, a.jsx)(h.E, {
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        tag: "span",
                        children: R.intl.string(T.default["60htw+"]),
                    }),
                    !0 === t.is_activity
                        ? (0, a.jsx)("span", {
                              className: ey.dr,
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
                      className: ey.hb,
                      children: [
                          (0, a.jsx)(h.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: R.intl.string(T.default.KLyB8Y),
                          }),
                          (0, a.jsx)("ul", {
                              className: ey.eQ,
                              children: t.changes.map((e, t) =>
                                  (0, a.jsxs)(
                                      "li",
                                      {
                                          className: ey.H6,
                                          children: [
                                              (0, a.jsx)(h.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  className: ey.UZ,
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
                      className: ey.hb,
                      children: [
                          (0, a.jsx)(h.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: R.intl.string(R.t["0hKkS+"]),
                          }),
                          (0, a.jsx)("ul", {
                              className: ey.eQ,
                              children: t.commands.map((e, t) =>
                                  (0, a.jsxs)(
                                      "li",
                                      {
                                          className: ey.Xs,
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
            (0, a.jsx)(e_, { label: R.intl.string(T.default.ieqTtP), names: t.bot_permissions ?? [] }),
            (0, a.jsx)(e_, { label: R.intl.string(T.default.Cn9qix), names: t.privileged_intents ?? [] }),
            null != n
                ? (0, a.jsxs)("div", {
                      className: ey.nc,
                      children: [
                          (0, a.jsx)(d.$, {
                              variant: "secondary",
                              size: "sm",
                              onClick: n,
                              text: R.intl.string(T.default.GYoWRk),
                          }),
                          (0, a.jsx)(h.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              tag: "span",
                              className: ey.sw,
                              children: "or reply to keep refining",
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var eE = n(192308),
    ew = n(46958);
function eS(e) {
    let { projectId: t, request: l } = e,
        s = i.useCallback(() => {
            (0, eE.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("625084"), n.e("468421")]).then(n.bind(n, 539620));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: l });
            });
        }, [t, l]);
    return (0, a.jsxs)("article", {
        className: ew.Lo,
        children: [
            (0, a.jsx)(h.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: R.intl.string(T.default["/e28TK"]),
            }),
            (0, a.jsx)(h.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: null != l.note && "" !== l.note ? l.note : R.intl.string(T.default.jxvtin),
            }),
            (0, a.jsxs)("div", {
                className: ew.cS,
                children: [
                    l.fields.map((e) =>
                        (0, a.jsx)(
                            "span",
                            {
                                className: ew.$H,
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
                              className: ew.$H,
                              children: (0, a.jsx)(h.E, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  tag: "span",
                                  children: R.intl.formatToPlainString(T.default["/64HKW"], {
                                      platform: l.connection.label,
                                  }),
                              }),
                          })
                        : null,
                ],
            }),
            (0, a.jsx)("div", {
                className: ew.sq,
                children: (0, a.jsx)(d.$, {
                    variant: "secondary",
                    size: "sm",
                    onClick: s,
                    text: R.intl.string(T.default["gVV+HX"]),
                }),
            }),
        ],
    });
}
var eA = n(700766);
function eI(e) {
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
            className: eA.Dx,
            children: (0, a.jsx)(h.E, {
                tag: "div",
                variant: "text-sm/normal",
                color: d,
                selectable: !0,
                className: eA.iq,
                children: l.summary,
            }),
        });
    let m = s ? ei.a : ea._;
    return (0, a.jsxs)("li", {
        "data-step-kind": l.step.kind,
        className: eA.Dx,
        children: [
            (0, a.jsxs)(X.D, {
                tag: "div",
                className: eA.kG,
                "aria-expanded": s,
                "aria-controls": o,
                "aria-label": R.intl.formatToPlainString(T.default.z4KWsN, { step: l.summary }),
                onClick: c,
                children: [
                    (0, a.jsx)(h.E, {
                        tag: "span",
                        variant: "text-sm/normal",
                        color: d,
                        className: eA.iq,
                        children: l.summary,
                    }),
                    (0, a.jsx)(m, { size: "xs", color: "currentColor", className: eA.Ue }),
                ],
            }),
            (0, a.jsxs)("div", {
                id: o,
                hidden: !s,
                className: eA.yJ,
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
                              className: eA.y8,
                              children: u.map((e) => (0, a.jsx)(eT, { projectId: n, screenshotId: e }, e)),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function eC() {}
function eT(e) {
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
    let d = R.intl.string(T.default["3Hq9pQ"]),
        u = i.useCallback(() => {
            (0, o.aF)(t, n).then((e) => {
                (0, ef.R)({
                    items: [{ type: "IMAGE", url: e, alt: d }],
                    startingIndex: 0,
                    shouldHideMediaOptions: !0,
                    location: "VibegrationsChat",
                });
            }, eC);
        }, [t, n, d]);
    return r ? null : (0, a.jsx)(Q, { name: d, thumbSrc: l, ariaLabel: d, onClick: u, onThumbError: () => c(!0) });
}
var eR = n(820081),
    eP = n(590223);
function eO(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", {
        className: eP.Vn,
        "data-status": t,
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return R.intl.string(T.default.TkPGOH);
                case "in_progress":
                    return R.intl.string(T.default["oK+fmd"]);
                default:
                    return R.intl.string(T.default.d7lieu);
            }
        })(t),
        children: "completed" === t ? (0, a.jsx)(eR.B, { size: "xxs", color: "currentColor" }) : null,
    });
}
function eM(e) {
    return { completed: e.filter((e) => "completed" === e.status).length, total: e.length };
}
function eL(e) {
    let { todos: t, provisional: n } = e;
    return (0, a.jsxs)("ul", {
        className: eP.zR,
        children: [
            t.map((e) =>
                (0, a.jsxs)(
                    "li",
                    {
                        className: eP.qN,
                        "data-status": e.status,
                        children: [
                            (0, a.jsx)(eO, { status: e.status }),
                            (0, a.jsx)(h.E, {
                                variant: "text-sm/normal",
                                color: "completed" === e.status ? "text-muted" : "text-default",
                                tag: "span",
                                className: eP.ku,
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
                      className: eP.qN,
                      "data-status": "pending",
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(eO, { status: "pending" }),
                          (0, a.jsx)(h.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              tag: "span",
                              className: eP.ku,
                              selectable: !0,
                              children: n,
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function eG(e) {
    let { todos: t, provisional: n, announceProgress: l = !0 } = e,
        { completed: i, total: s } = eM(t);
    return 0 === s
        ? null
        : (0, a.jsxs)("article", {
              className: eP.Rx,
              "data-vibegrations-todo-card": !0,
              children: [
                  (0, a.jsxs)("header", {
                      className: eP.Ye,
                      children: [
                          (0, a.jsx)(h.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: R.intl.string(T.default.qCRC6c),
                          }),
                          (0, a.jsx)("span", {
                              className: eP.mA,
                              ...(l
                                  ? {
                                        role: "status",
                                        "aria-live": "polite",
                                        "aria-label": R.intl.formatToPlainString(T.default["QG/EiF"], {
                                            completed: i,
                                            total: s,
                                        }),
                                    }
                                  : null),
                              children: (0, a.jsx)(h.E, {
                                  variant: "text-xs/medium",
                                  color: "text-muted",
                                  tag: "span",
                                  children: R.intl.formatToPlainString(T.default.bQvqly, { completed: i, total: s }),
                              }),
                          }),
                      ],
                  }),
                  (0, a.jsx)(eL, { todos: t, provisional: n }),
              ],
          });
}
let eD = new Set([
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
function eH(e) {
    return "running" === e;
}
function eB(e) {
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
        if (eB(i) && null != r) {
            r.technical.push(...s);
            continue;
        }
        if (eB(i) && null == r && null != t) {
            n.push({ step: i, summary: t, technical: s.filter((e) => e !== t), screenshots: [] });
            continue;
        }
        let o = eV(i),
            c = s.filter((e) => e !== o);
        null != r && r.summary === o
            ? (r.technical.push(...c), (e = r))
            : ((e = { step: i, summary: o, technical: c, screenshots: [] }), n.push(e)),
            "healthcheck_passed" === i.kind && (e.screenshots.push(...l.splice(0)), (a = e));
    }
    return n;
}
function eV(e) {
    switch (e.kind) {
        case "thinking":
            return R.intl.string(T.default.K7TkAL);
        case "writing_command":
            return e.friendly ?? e.name ?? R.intl.string(T.default.nv6pUM);
        case "assembling":
            return R.intl.string(T.default["9G3ZmA"]);
        case "installing_deps":
            return R.intl.string(T.default.VZuRug);
        case "building":
            return R.intl.string(T.default["s+ylXP"]);
        case "bundling":
            return R.intl.string(T.default.rEQlMx);
        case "committing":
            return R.intl.string(T.default.Yvyw1H);
        case "built":
            return R.intl.string(T.default.hOcVAj);
        case "build_error":
            return R.intl.string(T.default["6L9Vwt"]);
        case "healthchecking":
        case "preview_connecting":
            return R.intl.string(T.default.sz8yAj);
        case "awaiting_auth":
            return R.intl.string(T.default["orD+xo"]);
        case "healthcheck_passed":
            return R.intl.string(T.default["x+sqTG"]);
        case "healthcheck_failed":
            return R.intl.string(T.default.FUWbq1);
        case "deploying":
            return R.intl.string(T.default.wcXX8Z);
        case "preview_ready":
            return R.intl.string(T.default["78YNh7"]);
        case "error":
        case "terminal_error":
            return R.intl.string(T.default.j3hBoA);
        default:
            return R.intl.string(T.default.nv6pUM);
    }
}
var eF = n(282878);
function e$(e) {
    let { task: t } = e,
        [n, l] = i.useState(null),
        s = i.useId(),
        r = t.groups.length > 0 || (null != t.detail && "" !== t.detail),
        o = r && (n ?? "failed" === t.state),
        c = i.useCallback(() => l(!o), [o]),
        d = eH(t.state),
        u = (function (e) {
            switch (e) {
                case "running":
                    return R.intl.string(T.default["fW7T+d"]);
                case "succeeded":
                    return R.intl.string(T.default.X3c4hc);
                case "failed":
                    return R.intl.string(T.default.LK4Wsd);
                case "cancelled":
                    return R.intl.string(T.default.msWvKA);
                case "incomplete":
                    return R.intl.string(T.default.esfcU6);
            }
        })(t.state),
        m = o ? ei.a : ea._,
        p = "failed" === t.state,
        f = p ? u : d ? (o ? void 0 : t.latestActivity) : r ? void 0 : u,
        g = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)("span", {
                    className: eF.uJ,
                    children: [
                        (0, a.jsx)(h.E, {
                            tag: "span",
                            variant: "text-sm/normal",
                            color: "text-default",
                            className: eF.QC,
                            children: t.title,
                        }),
                        r ? (0, a.jsx)(m, { size: "xs", color: "currentColor", className: eF.bu }) : null,
                    ],
                }),
                null != f && "" !== f
                    ? (0, a.jsx)(h.E, {
                          tag: "span",
                          variant: "text-xs/normal",
                          color: p ? "text-feedback-critical" : "text-muted",
                          className: eF.hE,
                          children: f,
                      })
                    : null,
            ],
        });
    return (0, a.jsxs)("li", {
        className: eF.ot,
        "data-task-state": t.state,
        children: [
            r
                ? (0, a.jsx)(X.D, {
                      tag: "div",
                      className: A()(eF.qI, eF.EZ),
                      "aria-expanded": o,
                      "aria-controls": s,
                      "aria-label": R.intl.formatToPlainString(T.default.SxMgMJ, { title: t.title, state: u }),
                      onClick: c,
                      children: g,
                  })
                : (0, a.jsx)("div", { className: eF.qI, children: g }),
            r
                ? (0, a.jsxs)("div", {
                      id: s,
                      hidden: !o,
                      className: eF.yd,
                      children: [
                          t.groups.length > 0
                              ? (0, a.jsx)("ol", {
                                    className: eF.x7,
                                    children: t.groups.map((e, t) => (0, a.jsx)(eI, { group: e }, t)),
                                })
                              : null,
                          null != t.detail && "" !== t.detail
                              ? (0, a.jsx)(h.E, {
                                    tag: "div",
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    selectable: !0,
                                    className: eF.Tb,
                                    children: t.detail,
                                })
                              : null,
                      ],
                  })
                : null,
        ],
    });
}
var eW = n(692228),
    eq = n(742715);
function ez(e) {
    let { projectId: t, item: n, attachments: l } = e,
        [s, r] = i.useState(!1),
        o = i.useId(),
        c = i.useCallback(() => r((e) => !e), []),
        d = null != n.label && "" !== n.label,
        u = s ? ea._ : ei.a,
        m = (0, a.jsx)(a.Fragment, {
            children: n.blocks.map((e) =>
                "rows" === e.type
                    ? (0, a.jsx)(
                          "ol",
                          {
                              className: eA.dO,
                              children: e.groups.map((e, n) => (0, a.jsx)(eI, { projectId: t, group: e }, n)),
                          },
                          e.key,
                      )
                    : (0, a.jsx)(
                          "ol",
                          { className: eA.On, children: e.tasks.map((e) => (0, a.jsx)(e$, { task: e }, e.taskId)) },
                          e.key,
                      ),
            ),
        });
    return d
        ? (0, a.jsxs)("li", {
              className: A()(eA.ky, eW.XR, eA.rn),
              children: [
                  (0, a.jsxs)(X.D, {
                      tag: "div",
                      className: eA.rN,
                      "aria-expanded": !s,
                      "aria-controls": o,
                      "aria-label": R.intl.formatToPlainString(T.default.s1wx5H, { activity: n.label }),
                      onClick: c,
                      children: [
                          (0, a.jsx)(h.E, {
                              tag: "span",
                              variant: "text-sm/normal",
                              color: "text-default",
                              className: eA.zN,
                              children: n.label,
                          }),
                          (0, a.jsx)(u, { size: "xs", color: "currentColor", className: eA.cZ }),
                      ],
                  }),
                  (0, a.jsx)("div", { id: o, hidden: s, className: eA.MZ, children: m }),
                  l,
              ],
          })
        : (0, a.jsxs)("li", { className: A()(eA.ky, eW.XR, eA.rn), children: [m, l] });
}
function eX(e) {
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
                        r = null,
                        o = null,
                        c = null,
                        d = null,
                        u = [],
                        h = null,
                        m = l;
                    function p() {
                        null != d && (d.groups = eU(u, { inheritedSummary: t })), (d = null), (u = []);
                    }
                    function f() {
                        p(), (h = null), (c = null);
                    }
                    function g(e) {
                        return (
                            null == c && ((c = { type: "activity", key: `activity-${e}`, blocks: [] }), a.push(c)), c
                        );
                    }
                    for (let [n, l] of e.entries()) {
                        if (null != l.task_id && "" !== l.task_id) {
                            let e = (function (e, t) {
                                let n = e.task_id,
                                    l = i.get(n);
                                if (null != l)
                                    return (
                                        "task_started" === e.kind &&
                                            null != e.task_title &&
                                            "" !== e.task_title &&
                                            (l.title = e.task_title),
                                        null != c &&
                                            null == c.label &&
                                            null != e.task_group_label &&
                                            (c.label = e.task_group_label),
                                        l
                                    );
                                let a =
                                    null != e.task_group_label && "" !== e.task_group_label
                                        ? e.task_group_label
                                        : void 0;
                                null != h &&
                                    h.groupId !== e.task_group_id &&
                                    ((h = null), null != a && null != c && null != c.label && c.label !== a && f());
                                let o = g(t);
                                null == o.label && null != a && (o.label = a), p(), (r = null);
                                let d = {
                                    taskId: n,
                                    title:
                                        null != e.task_title && "" !== e.task_title
                                            ? e.task_title
                                            : R.intl.string(T.default.MdXWEK),
                                    state: "running",
                                    groups: [],
                                    rawSteps: [],
                                };
                                return (
                                    i.set(n, d),
                                    s.push(d),
                                    null == h &&
                                        ((h = {
                                            type: "workstreams",
                                            key: `workstreams-${t}`,
                                            ...(null != e.task_group_id ? { groupId: e.task_group_id } : {}),
                                            tasks: [],
                                        }),
                                        o.blocks.push(h)),
                                    h.tasks.push(d),
                                    d
                                );
                            })(l, n);
                            if ("task_finished" === l.kind) {
                                null != l.task_state && (e.state = l.task_state),
                                    null != l.detail && "" !== l.detail && (e.detail = l.detail);
                                continue;
                            }
                            if (eD.has(l.kind)) continue;
                            e.rawSteps.push(l);
                            continue;
                        }
                        if ("thinking" === l.kind) {
                            r = null;
                            continue;
                        }
                        if ("assistant_delta" === l.kind) {
                            let e = l.message ?? "";
                            "" !== e &&
                                (null == r
                                    ? (f(), (r = { type: "message", key: `message-${n}`, content: e }), a.push(r))
                                    : (r.content = e)),
                                !0 === l.message_finished && (r = null);
                            continue;
                        }
                        if ("announcement" === l.kind) {
                            let e = l.message ?? "";
                            "" !== e && (f(), (r = null), a.push({ type: "note", key: `note-${n}`, content: e }));
                            continue;
                        }
                        if ("todos" === l.kind) {
                            let e = l.items ?? [];
                            e.length > 0 &&
                                (null != o
                                    ? (o.todos = e)
                                    : (f(),
                                      (r = null),
                                      (o = { type: "todos", key: `todos-${n}`, todos: e }),
                                      a.push(o)));
                            continue;
                        }
                        if (eD.has(l.kind)) continue;
                        let e = g(n);
                        (r = null),
                            (h = null),
                            null == d &&
                                ((d = { type: "rows", key: `rows-${n}`, groups: [] }), (t = m), e.blocks.push(d)),
                            u.push(l),
                            eB(l) || (m = eV(l));
                    }
                    for (let e of (p(), s)) {
                        e.groups = eU(e.rawSteps);
                        let t = e.groups[e.groups.length - 1]?.summary;
                        null != t && (e.latestActivity = t), !n && eH(e.state) && (e.state = "incomplete");
                    }
                    return { items: a, tasks: s };
                })(n, { turnActive: d, inheritedSummary: y }),
            [n, d, y],
        ),
        N = _.some((e) => "note" === e.type),
        E = _.some((e) => "todos" === e.type),
        w = _.at(-1),
        S = w?.type === "message" && w.content.trim() === s.trim(),
        I = null != f && f.questions.length > 0,
        C = null == r && "" !== s && !S && !I,
        P = (function (e) {
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
        O = null == x ? null : (0, a.jsx)(ex, { projectId: t, attachments: x }),
        M = null == O ? null : (0, a.jsx)("div", { className: eA.MT, children: O });
    return (0, a.jsxs)("div", {
        className: eA.ue,
        children: [
            null == l || "" === l || N
                ? null
                : (0, a.jsx)(h.E, {
                      tag: "div",
                      variant: "text-sm/normal",
                      color: "text-default",
                      selectable: !0,
                      className: A()(eA.ky, eA.Xt, eW.XR),
                      children: l,
                  }),
            null != u && u.length > 0 && !E
                ? (0, a.jsx)("div", {
                      className: A()(eA.ky, eW.XR),
                      children: (0, a.jsx)(eG, { todos: u, provisional: c }),
                  })
                : null,
            _.length > 0
                ? (0, a.jsx)("ol", {
                      className: eA.dO,
                      children: _.map((e) =>
                          "message" === e.type
                              ? (0, a.jsxs)(
                                    "li",
                                    {
                                        className: A()(eA.ky, eW.XR),
                                        children: [
                                            (0, a.jsx)("div", {
                                                className: A()(eq.PT, eA.cW),
                                                children: es.A.parse(e.content, !0, {
                                                    allowList: !0,
                                                    allowHeading: !0,
                                                    allowLinks: !0,
                                                }),
                                            }),
                                            "streamed" === P && e.key === w?.key ? M : null,
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
                                          className: A()(eA.ky, eA.Xt, eW.XR),
                                          children: e.content,
                                      },
                                      e.key,
                                  )
                                : "todos" === e.type
                                  ? (0, a.jsx)(
                                        "li",
                                        {
                                            className: A()(eA.ky, eW.XR),
                                            children: (0, a.jsx)(eG, { todos: e.todos, provisional: c }),
                                        },
                                        e.key,
                                    )
                                  : (0, a.jsx)(
                                        ez,
                                        {
                                            projectId: t,
                                            item: e,
                                            attachments: "activity" === P && e.key === w?.key ? O : null,
                                        },
                                        e.key,
                                    ),
                      ),
                  })
                : null,
            null != r
                ? (0, a.jsx)("div", {
                      className: A()(eA.ky, eW.XR),
                      children: (0, a.jsx)(eN, { proposal: r, onApprove: m }),
                  })
                : C
                  ? (0, a.jsxs)("div", {
                        className: A()(eA.ky, eW.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: A()(eq.PT, eA.cW),
                                children: es.A.parse(s, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === P ? M : null,
                            !0 === b
                                ? (0, a.jsx)("div", { className: eA.IN, children: (0, a.jsx)(ep, { onAsk: j }) })
                                : null,
                        ],
                    })
                  : null,
            null != v
                ? (0, a.jsx)("div", {
                      className: A()(eA.ky, eW.XR),
                      children: (0, a.jsx)(eS, { projectId: t, request: v }),
                  })
                : null,
            "standalone" === P ? (0, a.jsx)("div", { className: A()(eA.ky, eW.XR), children: M }) : null,
            I
                ? (0, a.jsx)("div", {
                      className: A()(eA.ky, eW.XR),
                      children: (0, a.jsx)(ec, { clarification: f, onSubmit: g }),
                  })
                : null,
            null != p && p.length > 0
                ? (0, a.jsx)("div", { className: A()(eA.ky, eW.XR), children: (0, a.jsx)(em, { ideas: p, onPick: k }) })
                : null,
            !0 !== b || C
                ? null
                : (0, a.jsx)("div", { className: A()(eA.ky, eW.XR), children: (0, a.jsx)(ep, { onAsk: j }) }),
            o
                ? (0, a.jsx)("div", {
                      className: A()(eA.ky, eW.XR),
                      children: (0, a.jsx)(h.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          selectable: !0,
                          children: R.intl.string(T.default["5T7DSm"]),
                      }),
                  })
                : null,
        ],
    });
}
let eK = { steered: T.default.I9TkzD, queued: T.default.gbjY6o, restarting: T.default["1Q4Cs2"] };
function eY(e) {
    let { projectId: t, messages: n, onApprove: l, onPickIdea: i, onAskForIdeas: s, onAnswerClarification: r } = e,
        o = n[n.length - 1];
    return (0, a.jsx)("ol", {
        className: eg.x7,
        children: n.map((e, c) => {
            if ("user" === e.role)
                return (0, a.jsx)(
                    eZ,
                    {
                        role: "user",
                        children: (0, a.jsxs)("div", {
                            className: A()(eg.B2, eW.XR),
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
                                    ? (0, a.jsx)(ex, { projectId: t, attachments: e.attachments })
                                    : null,
                                null != e.disposition
                                    ? (0, a.jsx)(h.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          children: R.intl.string(eK[e.disposition]),
                                      })
                                    : null,
                            ],
                        }),
                    },
                    e.render_id,
                );
            let d = e.steps.filter((e) => !eD.has(e.kind)).length > 0,
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
                      eZ,
                      {
                          role: "assistant",
                          children: (0, a.jsx)(eX, {
                              projectId: t,
                              steps: e.steps,
                              announcement: e.announcement,
                              content: e.content,
                              proposal: e.proposal,
                              interrupted: !0 === e.interrupted,
                              provisionalTodo: e.provisionalTodo,
                              active: !(0, D.B)(e),
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
                                                                !(eD.has(n.kind) || eB(n))
                                                            )
                                                                return eV(n);
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
function eZ(e) {
    let { role: t, children: n } = e;
    return (0, a.jsx)("li", { "data-role": t, className: eg.xk, children: n });
}
var eJ = n(379307),
    eQ = n(922016),
    e0 = n(863610),
    e1 = n(446892);
function e2(e) {
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
            className: e1.jn,
            "data-vibegrations-thinking-panel": !0,
            children: (0, a.jsx)(G.Ch, {
                ref: s,
                className: e1.Dq,
                "data-vibegrations-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: A()(eq.PT, e1.bb),
                    children: es.A.parse(l, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var e6 = n(249680);
function e8(e) {
    let { activity: t, compacting: n = !1 } = e,
        l = i.useRef(null),
        s = i.useId(),
        [r, o] = i.useState(null),
        c = null != t && "end" !== t.phase,
        d = n ? T.default["0vH/5G"] : c ? T.default.Ly7F7x : T.default.QDGuNS,
        u = null != t && "" !== t.text,
        m = t?.session ?? null,
        p = u && null != m && r === m,
        f = i.useCallback(() => {
            u && null != m && o((e) => (e === m ? null : m));
        }, [u, m]),
        g = i.useCallback(() => o(null), []);
    return (0, a.jsx)(eQ.Y, {
        targetElementRef: l,
        position: "top",
        align: "left",
        shouldShow: p,
        onRequestClose: g,
        renderPopout: () => (0, a.jsx)(e2, { id: s, activity: t }),
        children: () =>
            (0, a.jsxs)(X.D, {
                innerRef: l,
                className: A()(e6.h, u && e6.X),
                "aria-label": R.intl.string(T.default.SzdX35),
                "aria-expanded": p,
                "aria-describedby": p ? s : void 0,
                "data-vibegrations-thinking-trigger": !0,
                onClick: f,
                children: [
                    (0, a.jsx)(e0.n, { dotRadius: 3.5, themed: !0 }),
                    (0, a.jsx)(h.E, {
                        tag: "span",
                        variant: "text-xs/semibold",
                        color: "text-strong",
                        children: R.intl.string(d),
                    }),
                ],
            }),
    });
}
var e5 = n(662546),
    e7 = n(173016);
function e3(e) {
    let { todos: t, provisional: n } = e;
    return (0, a.jsx)("div", {
        className: e7.B,
        role: "dialog",
        "aria-label": R.intl.string(T.default.qCRC6c),
        children: (0, a.jsx)(eG, { todos: t, provisional: n, announceProgress: !1 }),
    });
}
function e4(e) {
    let { todos: t, provisional: n } = e,
        l = i.useRef(null),
        { completed: s, total: r } = eM(t);
    return 0 === r
        ? null
        : (0, a.jsx)(eQ.Y, {
              targetElementRef: l,
              position: "top",
              align: "right",
              renderPopout: () => (0, a.jsx)(e3, { todos: t, provisional: n }),
              children: (e) =>
                  (0, a.jsxs)(X.D, {
                      innerRef: l,
                      className: e7.T,
                      "aria-label": R.intl.formatToPlainString(T.default["QG/EiF"], { completed: s, total: r }),
                      ...e,
                      children: [
                          (0, a.jsx)(e5.O, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                          (0, a.jsx)(h.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "none",
                              children: R.intl.formatToPlainString(T.default["6zuiBa"], { completed: s, total: r }),
                          }),
                      ],
                  }),
          });
}
var e9 = n(885574),
    te = n(677175);
function tt(e) {
    return e.toLocaleString();
}
function tn(e) {
    let { label: t, usage: n } = e;
    return (0, a.jsxs)("div", {
        className: te.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: te.mf,
                children: [
                    (0, a.jsx)(h.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(h.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [tt((0, q.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(h.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    tt(n.input_tokens),
                    " in \xb7 ",
                    tt(n.output_tokens),
                    " out \xb7 ",
                    tt(n.cache_creation_input_tokens),
                    " cache write \xb7 ",
                    tt(n.cache_read_input_tokens),
                    " cache read",
                ],
            }),
        ],
    });
}
function tl(e) {
    let { project: t } = e,
        n = (0, q.wV)(t.orchestrator, t.codegen);
    return (0, a.jsxs)("div", {
        className: te.si,
        role: "dialog",
        "aria-label": R.intl.string(T.default["9yoLWZ"]),
        children: [
            (0, a.jsx)("div", {
                className: te.Q$,
                children: (0, a.jsxs)("div", {
                    className: te.mf,
                    children: [
                        (0, a.jsxs)(h.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [tt((0, q.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(h.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(tn, { label: R.intl.string(T.default.hk4jJr), usage: t.orchestrator }),
            (0, a.jsx)(tn, { label: R.intl.string(T.default.R9aduM), usage: t.codegen }),
            (0, a.jsxs)("div", {
                className: te.mf,
                children: [
                    (0, a.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: R.intl.string(T.default["kILb+R"]),
                    }),
                    (0, a.jsx)(h.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, q.sj)(n) ? "\u2014" : `${Math.round(100 * (0, q.CA)(n))}%`,
                    }),
                ],
            }),
        ],
    });
}
function ta(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(eQ.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(tl, { project: t }),
        children: (e) =>
            (0, a.jsx)(X.D, {
                innerRef: n,
                className: te.Y$,
                "aria-label": R.intl.string(T.default.AWQ2ZV),
                ...e,
                children: (0, a.jsx)(e9.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var ti = n(154861);
function ts(e) {
    switch (e) {
        case "connecting":
            return R.intl.string(T.default.W7oyuf);
        case "failed":
            return R.intl.string(T.default.eE60xI);
        case "closed":
            return R.intl.string(T.default["yBmS+I"]);
    }
}
function tr(e) {
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
        className: ti.jf,
        children: [
            (0, a.jsx)("div", {
                className: ti.Xx,
                role: "status",
                "aria-live": "polite",
                "data-vibegrations-activity": !0,
                children: t ? (0, a.jsx)(e8, { activity: n, compacting: l }) : null,
            }),
            null == c
                ? null
                : (0, a.jsx)(eJ.A, { settings: c.settings, choices: c.choices, disabled: "open" !== o, onChange: d }),
            null == i || 0 === i.length ? null : (0, a.jsx)(e4, { todos: i, provisional: s }),
            null == r
                ? null
                : (0, a.jsxs)("span", {
                      className: ti.BP,
                      children: [
                          (0, a.jsx)(h.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": R.intl.formatToPlainString(T.default["7SZZvj"], {
                                  runes: (0, q.a7)(r.cost_usd),
                                  turns: r.turns,
                              }),
                              children: R.intl.formatToPlainString(T.default["4PFO2p"], {
                                  runes: (0, q.a7)(r.cost_usd).toLocaleString(),
                              }),
                          }),
                          (0, a.jsx)(ta, { project: r }),
                      ],
                  }),
            "open" === o
                ? null
                : (0, a.jsx)(h.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === o ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": R.intl.formatToPlainString(T.default.eDDdhB, { status: ts(o) }),
                      "data-vibegrations-conn": !0,
                      "data-state": o,
                      className: ti.XF,
                      children: ts(o),
                  }),
        ],
    });
}
var to = n(506774),
    tc = n(651649),
    td = n(670455);
let tu = "shownVibegrationsFeedbackProjectIds";
var th = n(104071);
function tm(e) {
    let { projectId: t, onRegionCapture: l } = e,
        s = (0, x.bG)([D.A], () => D.A.getMessages(t), [t]),
        r = (0, x.bG)([o.Ay], () => o.Ay.getConnState(t), [t]),
        c = (0, x.bG)([D.A], () => D.A.getProjectUsage(t), [t]),
        d = (0, x.bG)([D.A], () => D.A.getThinkingActivity(t), [t]),
        u = (0, x.bG)([D.A], () => D.A.isCompacting(t), [t]),
        h = (0, x.bG)([o.Ay], () => o.Ay.getModelSettings(t), [t]),
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
                    let t = D.A.getMessages(e).filter((e) => "assistant" === e.role && (0, D.B)(e)).length;
                    !(t < 3) &&
                        ((to.w.get(tu) ?? []).includes(e) ||
                            tc.A.possiblyShowFeedbackModal(td.MW.VIBEGRATIONS, () => {
                                let l;
                                (l = to.w.get(tu) ?? []).includes(e) || to.w.set(tu, [...l, e]),
                                    (0, eE.openModalLazy)(async () => {
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
    let v = i.useCallback(
            (e, n) => {
                (0, o.dv)(t, e, n);
            },
            [t],
        ),
        k = i.useCallback(() => (0, o.fu)(t), [t]),
        b = i.useCallback((e) => v(e.implementation_prompt), [v]),
        j = i.useCallback((e) => v(e), [v]),
        y = i.useCallback(() => v(R.intl.string(T.default["3sTTBu"])), [v]),
        _ = i.useCallback((e) => (0, o.XZ)(t, e), [t]),
        N = i.useCallback((e) => (0, o.vX)(t, e), [t]),
        E = i.useCallback((e) => (0, o.Vm)(t, e), [t]),
        w = i.useCallback(() => v(R.intl.string(T.default.Jj8Ftb)), [v]),
        S = "open" === r,
        A = s[s.length - 1],
        I = null != A && "assistant" === A.role && null != A.proposal,
        C = null != A && "assistant" === A.role && !(0, D.B)(A),
        P = I && S ? w : void 0,
        O = C && A?.role === "assistant" ? A.todos : void 0,
        M = C && A?.role === "assistant" ? A.provisionalTodo : void 0;
    return (0, a.jsxs)("section", {
        ref: m,
        "data-vibegrations-chat": !0,
        className: th.T,
        children: [
            (0, a.jsx)(G.Ch, {
                ref: p,
                onScroll: g,
                "data-vibegrations-chat-log": !0,
                className: th.N,
                children: (0, a.jsx)(eY, {
                    projectId: t,
                    messages: s,
                    onApprove: P,
                    onPickIdea: S ? b : void 0,
                    onAskForIdeas: S ? y : void 0,
                    onAnswerClarification: S ? j : void 0,
                }),
            }),
            (0, a.jsx)(tr, {
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
            (0, a.jsx)(en, {
                canSend: S,
                running: C,
                onSend: v,
                onInterrupt: S ? k : void 0,
                onUploadFile: N,
                onDeleteFile: E,
                onApprove: P,
                onRegionCapture: l,
            }),
        ],
    });
}
var tp = n(435558),
    tf = n(661531),
    tg = n(602853),
    tx = n(517461),
    tv = n(761929),
    tk = n(552067);
function tb(e) {
    let { open: t, maxWidth: n, onWidthChange: l, children: s } = e,
        r = (0, tg.r)(tf.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = i.useRef(null),
        [c, d] = (0, tx.V)("VibegrationsChatSidebarWidth", 460),
        [u, h] = i.useState(c ?? 460),
        m = (0, tp.clamp)(u, 360, n);
    i.useLayoutEffect(() => {
        l(t ? m + r : 0);
    }, [m, t, r, l]);
    let p = (0, tv.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: o,
            onElementResize: h,
            onElementResizeEnd: d,
            orientation: tv.R.HORIZONTAL_LEFT,
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
        className: tk.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: tk.Di, onPointerDown: f }),
            (0, a.jsx)("div", { ref: o, className: tk.kL, style: { width: m }, children: s }),
        ],
    });
}
var tj = n(333007),
    ty = n(638015);
function t_(e) {
    return {
        x: Math.min(e.startX, e.x),
        y: Math.min(e.startY, e.y),
        width: Math.abs(e.x - e.startX),
        height: Math.abs(e.y - e.startY),
    };
}
function tN(e) {
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
                    a = t_({ ...s, x: t.x, y: t.y });
                r(null), a.width < 8 && a.height < 8 ? l() : n(a);
            },
            [s, o, n, l],
        ),
        m = null == s ? null : t_(s);
    return (0, tj.createPortal)(
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("div", { className: ty.tB, role: "presentation", onPointerDown: l }),
                (0, a.jsx)("div", {
                    className: ty.aC,
                    style: { left: t.left, top: t.top, width: t.width, height: t.height },
                    role: "application",
                    "aria-label": R.intl.string(T.default["9MOgRI"]),
                    onPointerDown: c,
                    onPointerMove: d,
                    onPointerUp: u,
                    onPointerCancel: l,
                    children:
                        null == m
                            ? (0, a.jsx)("div", {
                                  className: ty.F7,
                                  children: (0, a.jsx)("div", {
                                      className: ty.aK,
                                      children: (0, a.jsx)(h.E, {
                                          variant: "text-sm/medium",
                                          color: "text-default",
                                          children: R.intl.string(T.default.ydkvBR),
                                      }),
                                  }),
                              })
                            : (0, a.jsx)("div", {
                                  className: ty.r1,
                                  style: { left: m.x, top: m.y, width: m.width, height: m.height },
                              }),
                }),
            ],
        }),
        document.body,
    );
}
function tE(e) {
    let { projectId: t } = e,
        n = (0, x.bG)([D.A], () => D.A.isThinking(t), [t]);
    return (0, a.jsx)("div", { className: eW.MP, "data-active": n, "aria-hidden": !0 });
}
var tw = n(280218),
    tS = n(171936),
    tA = n(291815);
function tI(e) {
    let { projectId: t, applicationId: n, surface: l, previewReady: r, content: o, sidebar: c } = e,
        [d, u] = i.useState(null),
        h = (0, s.A)(n, l),
        m = h?.id ?? null,
        [p, f] = i.useState(null);
    i.useEffect(() => {
        if (null != t) return (0, tS.mn)(t, () => (0, tw.F1)(d, m));
    }, [t, d, m]);
    let g = i.useCallback(() => {
            let e = (0, tw.F1)(d, m),
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
                f(null), null != p && (0, tw.su)(p.iframe, e).then(p.resolve, p.reject);
            },
            [p],
        ),
        v = i.useCallback(() => {
            f(null), p?.resolve(null);
        }, [p]),
        k = r && null != n && l.type === N.U4.MAIN;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", { ref: u, className: tA.fm, children: o }),
            c(k ? g : void 0),
            null != p ? (0, a.jsx)(tN, { targetRect: p.targetRect, onSelect: x, onCancel: v }) : null,
        ],
    });
}
function tC(e) {
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
        className: tA.LB,
        children: (0, a.jsx)(tI, {
            projectId: t,
            applicationId: n,
            surface: l,
            previewReady: c,
            content: (0, a.jsx)(L, { applicationId: n, surface: l, previewReady: c, previewGate: d }),
            sidebar: (e) =>
                null != t && f
                    ? (0, a.jsx)(tb, {
                          open: s,
                          maxWidth: p,
                          onWidthChange: r.Zq,
                          children: (0, a.jsxs)("div", {
                              className: tA.cO,
                              children: [
                                  (0, a.jsx)(tE, { projectId: t }),
                                  (0, a.jsx)(tm, { projectId: t, onRegionCapture: e }, t),
                              ],
                          }),
                      })
                    : null,
        }),
    });
}
