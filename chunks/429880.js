n.d(t, { A: () => t6 });
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
    m = n(627363),
    p = n(207371),
    f = n(580954),
    g = n(297264),
    x = n(625180),
    v = n(91242),
    b = n(812901),
    k = n(317608),
    j = n(17928),
    y = n(956518),
    _ = n(869146),
    N = n(165610),
    E = n(652215),
    A =
        (((l = {}).Loading = "loading"),
        (l.AwaitingLaunch = "awaiting-launch"),
        (l.Launched = "launched"),
        (l.RenderingElsewhere = "rendering-elsewhere"),
        (l.NoApplication = "no-application"),
        (l.DoesNotSupportSurface = "does-not-support-surface"),
        (l.Error = "error"),
        l),
    w = n(742023),
    S = n(503698),
    I = n.n(S),
    C = n(328284);
function T(e) {
    let { title: t, body: n, wide: l = !1, children: i } = e;
    return (0, a.jsxs)("div", {
        className: I()(C.Bf, l && C.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: C.Ux,
                children: [
                    (0, a.jsx)(g.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, a.jsx)(h.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
                ],
            }),
            i,
        ],
    });
}
var R = n(295813),
    P = n(375708),
    O = n(963691);
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
                        s = (0, j.bG)([v.A], () => v.A.getFrame(l), [l]),
                        r = (0, j.bG)(
                            [_.A, v.A],
                            () => _.A.getWindowOpen(E.MLl.ACTIVITY_POPOUT) && v.A.getMainFrame()?.id === l,
                            [l],
                        ),
                        { data: o, isLoading: c } = (0, m.YY)(t),
                        d = (0, p.x)(o),
                        u = null != (0, y.Ay)(t),
                        [h, f] = i.useState(null),
                        g = h === l;
                    return {
                        surface: a,
                        setFailed: i.useCallback(() => f(l), [l]),
                        lifecycle: (0, N.x1)(s)
                            ? r
                                ? { state: "rendering-elsewhere" }
                                : { state: "launched", frame: s }
                            : g
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
                            await x.A.launchFrame({ applicationId: t, surface: l });
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
                null == (e = v.A.getFrame(r)) ||
                    v.A.getMainFrame()?.id !== r ||
                    _.A.getWindowOpen(E.MLl.ACTIVITY_POPOUT) ||
                    (e.intent === N.sV.MAIN ? x.A.resetFrameLayoutModes(r) : x.A.clearMainFrameSlot()),
                () => {
                    let e;
                    null != (e = v.A.getFrame(r)) &&
                        ((0, N.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        w.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === N.sV.INLINE && x.A.promoteFrame(r),
                              x.A.updateFrameLayoutMode({ frameId: r, layoutMode: N.y0.PIP }))
                            : e.intent === N.sV.MAIN && (0, f.A)().leaveFrame(r));
                }
            );
        }, [r]),
        s)
    ) {
        case A.Launched:
            return (0, a.jsx)(k.A, { frameId: l.id, level: b.A.WithinAppContent, className: O.Z7 });
        case A.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: O.qs,
                children: (0, a.jsx)(T, {
                    title: P.intl.string(R.default["4f6Vkr"]),
                    body: P.intl.string(R.default.LJ2q1H),
                }),
            });
        case A.NoApplication:
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
        case A.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: O.qs,
                children: (0, a.jsx)(T, {
                    title: P.intl.string(R.default.FHOJiH),
                    body: P.intl.string(R.default["1yLQoV"]),
                }),
            });
        case A.Error:
            return (0, a.jsxs)("div", {
                className: O.qs,
                children: [
                    (0, a.jsx)(g.D, {
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
        case A.AwaitingLaunch:
        case A.Loading:
            return (0, a.jsx)("div", { className: O.qs, children: (0, a.jsx)(c.y, {}) });
    }
}
var L = n(308528),
    G = n(334738),
    D = n(373204),
    H = n(355622),
    B = n(734057),
    U = n(531685),
    V = n(365971),
    F = n(362417);
function W(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: F.f,
        children: [
            (0, a.jsx)(u.k, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(h.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function q() {
    return (0, a.jsx)("div", { className: F.f, children: (0, a.jsx)(c.y, {}) });
}
function $(e) {
    let t,
        n,
        { previewApplicationId: l } = e,
        { data: s, isLoading: r } = (0, m.YY)(l),
        o = s?.bot?.id ?? null,
        c = (0, j.bG)([B.A], () => {
            if (null == o) return null;
            let e = B.A.getDMFromUserId(o);
            return null != e ? B.A.getChannel(e) : null;
        });
    (t = c?.id ?? null),
        i.useEffect(() => {
            null != t && L.A.preload(E.ME, t);
        }, [t]),
        (n = (0, j.bG)([U.A], () => U.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, V.Xg)();
            return (
                (0, G.yl)(t, e),
                () => {
                    (0, G.dm)(t, e);
                }
            );
        }, [t, n]);
    let [d, u] = i.useState(null),
        h = null != o && d === o;
    return (i.useEffect(() => {
        if (null == o || null != c) return;
        let e = !1;
        return (
            L.A.openPrivateChannel({ recipientIds: o, navigateToChannel: !1 }).catch(() => {
                e || u(o);
            }),
            () => {
                e = !0;
            }
        );
    }, [o, c]),
    r)
        ? (0, a.jsx)(q, {})
        : null == o || h
          ? (0, a.jsx)(W, { message: P.intl.string(R.default.bl4eBc) })
          : null == c
            ? (0, a.jsx)(q, {})
            : (0, a.jsx)("div", {
                  className: F.g,
                  children: (0, a.jsx)(D.A, { channel: c, guild: null, chatInputType: H.oU.SIDEBAR }, c.id),
              });
}
var z = n(976102);
function X(e) {
    let { applicationId: t, previewApplicationId: n, surface: l, previewReady: r, previewGate: o } = e,
        g = (0, s.A)(t, l),
        { data: x, isLoading: v } = (0, m.YY)(t ?? void 0);
    return (i.useEffect(() => {
        o?.type === "permissions" && null != g && (0, f.A)().leaveFrame(g.id);
    }, [g, o?.type]),
    o?.type === "checking")
        ? (0, a.jsx)("div", { className: z.q, children: (0, a.jsx)(c.y, {}) })
        : o?.type === "permissions"
          ? (0, a.jsx)("div", {
                className: z.q,
                children: (0, a.jsx)(T, {
                    wide: !0,
                    title: P.intl.string(R.default.DYwf2n),
                    body: P.intl.string(R.default.WWj3pN),
                    children: (0, a.jsx)(d.$, {
                        variant: "primary",
                        size: "md",
                        text: P.intl.string(R.default["CRfE/E"]),
                        onClick: o.onReviewPermissions,
                        loading: o.loading,
                    }),
                }),
            })
          : r
            ? null == t
                ? null
                : v
                  ? (0, a.jsx)("div", { className: z.q, children: (0, a.jsx)(c.y, {}) })
                  : null == x || (0, p.x)(x) || null == n
                    ? (0, a.jsx)(M, { applicationId: t, surface: l })
                    : (0, a.jsx)($, { previewApplicationId: n })
            : (0, a.jsxs)("div", {
                  className: z.q,
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
var K = n(789645),
    Y = n(738876),
    Z = n(47167),
    J = n(58736),
    Q = n(31717),
    ee = n(372054);
function et(e) {
    let { channel: t, guild: n, onClose: l } = e,
        i = (0, Z.Ay)(t),
        s = (0, a.jsx)(J.Ay.Icon, { icon: K.P, tooltip: P.intl.string(P.t.cpT0Cq), onClick: l });
    return (0, a.jsxs)("div", {
        className: ee.Wx,
        children: [
            (0, a.jsx)(Y.A, { channel: t, draftType: Q.C.ChannelMessage }),
            (0, a.jsx)(J.Ay, {
                toolbar: s,
                "aria-label": P.intl.string(P.t.BIYAqa),
                children: (0, a.jsx)(J.Ay.Title, { children: i }),
            }),
            (0, a.jsx)("div", {
                className: ee.GZ,
                children: (0, a.jsx)(D.A, { channel: t, guild: n, chatInputType: H.oU.SIDEBAR }, t.id),
            }),
        ],
    });
}
var en = n(689175),
    el = n(783791);
n(323874), n(14289), n(35956), n(321073);
var ea = n(866665),
    ei = n(588975),
    es = n(428610),
    er = n(826745),
    eo = n(29080),
    ec = n(559647),
    ed = n(285796),
    eu = n(673724),
    eh = n(514042),
    em = n(939249),
    ep = n(298668);
function ef(e) {
    return I()(ep._B, { [ep.ND]: e });
}
function eg(e) {
    let { name: t, thumbSrc: n = null, compact: l = !1, subText: i, children: s, onThumbError: r } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            null != n
                ? (0, a.jsx)("img", { src: n, alt: "", className: ep.gJ, onError: r })
                : (0, a.jsx)(eh.FileIcon, { size: l ? "xs" : "sm", color: "currentColor" }),
            (0, a.jsxs)("div", {
                className: ep.Wd,
                children: [
                    (0, a.jsx)(h.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: ep.Rr,
                        children: t,
                    }),
                    i,
                ],
            }),
            s,
        ],
    });
}
function ex(e) {
    return (0, a.jsx)("div", { className: ef(e.compact ?? !1), children: eg(e) });
}
function ev(e) {
    let { name: t, thumbSrc: n, ariaLabel: l, onClick: i, onThumbError: s } = e;
    return (0, a.jsx)(em.D, {
        className: I()(ef(!0), ep.w8),
        onClick: i,
        "aria-label": l,
        children: eg({ name: t, thumbSrc: n, compact: !0, onThumbError: s }),
    });
}
var eb = n(789438);
let ek = 0;
function ej(e) {
    let {
            canSend: t,
            stopped: n,
            running: l,
            onSend: s,
            onInterrupt: r,
            onUploadFile: o,
            onDeleteFile: d,
            onApprove: u,
            onRegionCapture: h,
        } = e,
        [m, p] = i.useState(""),
        [f, g] = i.useState([]),
        [x, v] = i.useState(!1),
        [b, k] = i.useState(!1),
        [j, y] = i.useState(!1);
    i.useEffect(() => {
        l || y(!1);
    }, [l]);
    let _ = i.useRef(null),
        N = i.useRef([]),
        E = i.useRef(new Set()),
        A = i.useRef(d);
    A.current = d;
    let w = i.useCallback((e) => {
            (N.current = e), g(e);
        }, []),
        S = i.useCallback((e) => {
            A.current(e.id).catch((e) => {
                console.error("[vibegrations] attachment cleanup failed", e);
            });
        }, []);
    i.useEffect(() => {
        let e = E.current;
        return () => {
            for (let t of N.current)
                e.add(t.localId), null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && S(t.ref);
        };
    }, [S]);
    let I = i.useCallback(
            (e, t) => {
                if (E.current.has(e)) return;
                let n = N.current;
                n.some((t) => t.localId === e) && w(n.map((n) => (n.localId === e ? { ...n, ...t } : n)));
            },
            [w],
        ),
        C = i.useCallback(
            (e) => {
                if (0 === e.length) return;
                let t = [...N.current],
                    n = [];
                for (let l of e) {
                    let e = "" === l.type ? "application/octet-stream" : l.type,
                        a = ++ek,
                        i = { localId: a, name: l.name, size: l.size, contentType: e, status: "uploading" };
                    if (t.length >= 10) {
                        t.push({
                            ...i,
                            status: "error",
                            errorText: P.intl.formatToPlainString(R.default.DlX57a, { count: 10 }),
                        });
                        continue;
                    }
                    if (!(0, eu.x5)(l.size, e)) {
                        t.push({
                            ...i,
                            status: "error",
                            errorText: P.intl.formatToPlainString(R.default.cI7t94, {
                                size: (0, eu.ZJ)((0, eu.yr)(e)),
                            }),
                        });
                        continue;
                    }
                    let s = eu.Wb.has(e) ? URL.createObjectURL(l) : void 0;
                    t.push({ ...i, previewUrl: s }), n.push({ file: l, localId: a });
                }
                for (let { file: e, localId: l } of (w(t), n))
                    o(e).then(
                        (e) => {
                            E.current.has(l) ? S(e) : I(l, { status: "ready", ref: e });
                        },
                        (e) => {
                            E.current.has(l) ||
                                (console.error("[vibegrations] attachment upload failed", e),
                                I(l, { status: "error", errorText: P.intl.string(R.default.GwEHvn) }));
                        },
                    );
            },
            [S, o, I, w],
        ),
        T = i.useCallback(async () => {
            if (null != h && !b) {
                k(!0);
                try {
                    let e = await h();
                    null != e && C([e]);
                } catch (e) {
                    console.error("[vibegrations] region capture failed", e),
                        w([
                            ...N.current,
                            {
                                localId: ++ek,
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
        }, [h, b, C, w]),
        O = i.useCallback(
            (e) => {
                let t = N.current,
                    n = t.find((t) => t.localId === e);
                E.current.add(e),
                    n?.previewUrl != null && URL.revokeObjectURL(n.previewUrl),
                    n?.ref != null && S(n.ref),
                    w(t.filter((t) => t.localId !== e));
            },
            [S, w],
        ),
        M = f.every((e) => "ready" === e.status),
        L = "" !== m.trim() || f.length > 0,
        G = t && L && M,
        D = i.useCallback(() => {
            if (!G) return;
            let e = N.current.filter((e) => null != e.ref).map((e) => e.ref);
            for (let t of (s(m, e.length > 0 ? e : void 0), N.current))
                null != t.previewUrl && URL.revokeObjectURL(t.previewUrl);
            p(""), w([]);
        }, [G, m, s, w]),
        H = i.useCallback(
            (e) => {
                e.preventDefault(), D();
            },
            [D],
        ),
        B = i.useCallback(() => {
            null == r || j || (y(!0), r());
        }, [r, j]),
        U = i.useCallback(
            (e) => {
                if ("Escape" === e.key && l && null != r && !j) {
                    e.preventDefault(), e.stopPropagation(), B();
                    return;
                }
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != u && (e.preventDefault(), u());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), D());
            },
            [D, u, l, r, j, B],
        ),
        V = i.useCallback(
            (e) => {
                if (!t) return;
                let n = Array.from(e.clipboardData.files);
                0 !== n.length && (e.preventDefault(), C(n));
            },
            [t, C],
        ),
        F = i.useCallback(
            (e) => {
                e.preventDefault(), v(!1), t && C(Array.from(e.dataTransfer.files));
            },
            [t, C],
        ),
        W = i.useCallback((e) => {
            e.dataTransfer.types.includes("Files") && (e.preventDefault(), v(!0));
        }, []),
        q = i.useCallback(
            (e) => {
                C(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = "");
            },
            [C],
        );
    return (0, a.jsxs)("form", {
        onSubmit: H,
        onDrop: F,
        onDragOver: W,
        onDragLeave: () => v(!1),
        className: x ? `${eb.DA} ${eb.pV}` : eb.DA,
        children: [
            f.length > 0
                ? (0, a.jsx)("div", {
                      className: eb.lN,
                      children: f.map((e) => (0, a.jsx)(ey, { draft: e, onRemove: O }, e.localId)),
                  })
                : null,
            (0, a.jsxs)("div", {
                className: eb.VA,
                children: [
                    (0, a.jsx)("input", {
                        ref: _,
                        type: "file",
                        multiple: !0,
                        onChange: q,
                        className: eb.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    (0, a.jsx)(ea.m, {
                        text: P.intl.string(R.default.gUn10I),
                        ariaHidden: !0,
                        children: (0, a.jsx)("button", {
                            type: "button",
                            className: eb.Y0,
                            disabled: !t,
                            onClick: () => _.current?.click(),
                            "aria-label": P.intl.string(R.default.gUn10I),
                            children: (0, a.jsx)(ei.P, { size: "sm", color: "currentColor" }),
                        }),
                    }),
                    (0, a.jsx)(ea.m, {
                        text: P.intl.string(R.default.B5gWPk),
                        ariaHidden: !0,
                        children: (0, a.jsx)("button", {
                            type: "button",
                            className: eb.Y0,
                            disabled: null == h || !t || b,
                            onClick: T,
                            "aria-label": P.intl.string(R.default.B5gWPk),
                            children: b
                                ? (0, a.jsx)(c.y, { type: c.t.SPINNING_CIRCLE_SIMPLE, className: eb.Rk })
                                : (0, a.jsx)(es.K, { size: "sm", color: "currentColor" }),
                        }),
                    }),
                    (0, a.jsx)(er.y, {
                        value: m,
                        onChange: (e) => p(e.currentTarget.value),
                        onKeyDown: U,
                        onPaste: V,
                        placeholder: n
                            ? P.intl.string(R.default.JeM47J)
                            : t
                              ? P.intl.string(l ? R.default["67PpcP"] : R.default.ahRdoJ)
                              : P.intl.string(R.default.nm4w9P),
                        disabled: !t,
                        "aria-label": P.intl.string(R.default.OPr66w),
                        rows: 1,
                        className: eb.jp,
                    }),
                    (0, a.jsxs)("div", {
                        className: eb.fF,
                        children: [
                            (0, a.jsx)("div", { className: eb.MT }),
                            l && null != r
                                ? (0, a.jsx)(ea.m, {
                                      text: P.intl.string(R.default.KdgI4k),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)("button", {
                                          type: "button",
                                          className: eb.AW,
                                          disabled: j,
                                          onClick: B,
                                          "aria-label": P.intl.string(R.default.KdgI4k),
                                          children: (0, a.jsx)(eo.w, {
                                              size: "xs",
                                              color: "currentColor",
                                              className: eb.Mx,
                                          }),
                                      }),
                                  })
                                : null,
                            (0, a.jsx)("button", {
                                type: "submit",
                                className: eb.rt,
                                disabled: !G,
                                "aria-label": P.intl.string(R.default["22GHMt"]),
                                children: (0, a.jsx)(ec.SendMessageIcon, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: eb.Mx,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function ey(e) {
    let { draft: t, onRemove: n } = e;
    return (0, a.jsxs)(ex, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(h.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(c.y, { type: c.t.SPINNING_CIRCLE_SIMPLE, className: eb.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: eb.o1,
                onClick: () => n(t.localId),
                "aria-label": P.intl.string(R.default["3HWvgk"]),
                children: (0, a.jsx)(ed.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var e_ = n(287809);
let eN = new Set([
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
function eE(e) {
    return "running" === e;
}
function eA(e) {
    return "writing_command" === e.kind && (null == e.friendly || "" === e.friendly);
}
function ew(e) {
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
        if (eA(i) && null != r) {
            r.technical.push(...s);
            continue;
        }
        if (eA(i) && null == r && null != t) {
            n.push({ step: i, summary: t, technical: s.filter((e) => e !== t), screenshots: [] });
            continue;
        }
        let o = eS(i),
            c = s.filter((e) => e !== o);
        null != r && r.summary === o
            ? (r.technical.push(...c), (e = r))
            : ((e = { step: i, summary: o, technical: c, screenshots: [] }), n.push(e)),
            "healthcheck_passed" === i.kind && (e.screenshots.push(...l.splice(0)), (a = e));
    }
    return n;
}
function eS(e) {
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
n(134528), n(947204);
var eI = n(320448),
    eC = n(847374),
    eT = n(46054),
    eR = n(424110);
function eP(e) {
    let { option: t, disabled: n, onPick: l } = e,
        s = i.useId(),
        r = !0 === t.recommended,
        o = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(em.D, {
        className: I()(eR.uK, { [eR.ue]: n }),
        onClick: n ? void 0 : () => l(t),
        "aria-label": P.intl.formatToPlainString(r ? R.default.aL1BKQ : R.default.k7lEgj, { answer: t.label }),
        "aria-describedby": o ? s : void 0,
        "aria-disabled": n,
        "data-vibegrations-clarification-option": t.id,
        "data-recommended": r ? "true" : void 0,
        children: [
            (0, a.jsxs)("span", {
                className: eR.l8,
                children: [
                    (0, a.jsx)(h.E, {
                        tag: "span",
                        variant: "text-sm/semibold",
                        color: "none",
                        className: eR.ed,
                        children: t.label,
                    }),
                    r
                        ? (0, a.jsx)(h.E, {
                              tag: "span",
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              className: eR.rM,
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
function eO(e) {
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
        b = p > 0 && !u,
        k = r[f.id] ?? "",
        j = i.useCallback(() => {
            let e = k.trim();
            "" !== e && x({ kind: "custom", text: e });
        }, [k, x]);
    return (0, a.jsxs)("section", {
        className: eR.$O,
        "data-vibegrations-clarification": t.id,
        "data-state": u ? "inert" : "open",
        "data-step": p,
        children: [
            m > 1
                ? (0, a.jsxs)("div", {
                      className: eR.qB,
                      children: [
                          (0, a.jsx)(h.E, {
                              tag: "span",
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              "aria-live": "polite",
                              className: eR.Dd,
                              "data-vibegrations-clarification-progress": !0,
                              children: P.intl.formatToPlainString(R.default["7bypa+"], { index: p + 1, total: m }),
                          }),
                          (0, a.jsx)(em.D, {
                              className: I()(eR.aX, { [eR.uh]: !b }),
                              onClick: b ? v : void 0,
                              tabIndex: b ? 0 : -1,
                              "aria-hidden": !b,
                              "aria-disabled": u,
                              "aria-label": P.intl.string(R.default.KYpgvZ),
                              "data-vibegrations-clarification-back": !0,
                              "data-hidden": b ? void 0 : "true",
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
                className: eR.fF,
                role: "group",
                "aria-labelledby": `${f.id}-label`,
                children: f.options.map((e) =>
                    (0, a.jsx)(
                        eP,
                        { option: e, disabled: u, onPick: (e) => x({ kind: "option", optionId: e.id, text: e.label }) },
                        e.id,
                    ),
                ),
            }),
            (0, a.jsx)("div", {
                className: eR.F,
                children: (0, a.jsx)(er.y, {
                    value: k,
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
                    className: eR.Pu,
                    "data-vibegrations-clarification-other": f.id,
                }),
            }),
        ],
    });
}
var eM = n(443865),
    eL = n(113757);
function eG(e) {
    let { idea: t, onPick: n } = e,
        l = i.useId(),
        s = null == n;
    return (0, a.jsxs)(em.D, {
        className: s ? `${eL.Nr} ${eL.xe}` : eL.Nr,
        onClick: s ? void 0 : () => n(t),
        "aria-label": P.intl.formatToPlainString(R.default.pztRGi, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : l,
        "aria-disabled": s,
        children: [
            (0, a.jsx)(h.E, {
                tag: "div",
                variant: "text-sm/semibold",
                color: "none",
                className: eL.JJ,
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
function eD(e) {
    let { ideas: t, onPick: n } = e;
    return (0, a.jsxs)("section", {
        className: eL.kR,
        "data-vibegrations-idea-cards": !0,
        children: [
            (0, a.jsxs)("div", {
                className: eL.wx,
                children: [
                    (0, a.jsx)(eM.LightbulbIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                    (0, a.jsx)(h.E, {
                        tag: "span",
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        children: P.intl.string(R.default.DAvYsi),
                    }),
                ],
            }),
            t.map((e) => (0, a.jsx)(eG, { idea: e, onPick: n }, e.id)),
        ],
    });
}
function eH(e) {
    let { onAsk: t } = e;
    return (0, a.jsxs)("div", {
        className: eL.x,
        children: [
            (0, a.jsx)(h.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tag: "span",
                className: eL.I1,
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
var eB = n(256905),
    eU = n(375068);
function eV(e) {
    let { projectId: t, attachments: n } = e,
        l = n.filter(eF);
    return (0, a.jsx)("div", {
        className: eU.KT,
        children: n.map((e, n) =>
            null == e.id
                ? (0, a.jsx)(eW, { name: e.name }, n)
                : eF(e)
                  ? (0, a.jsx)(e$, { projectId: t, viewableImages: l, viewerIndex: l.indexOf(e) }, n)
                  : (0, a.jsx)(eq, { projectId: t, id: e.id, name: e.name }, n),
        ),
    });
}
function eF(e) {
    return null != e.id && eu.Wb.has(e.content_type);
}
function eW(e) {
    let { name: t, unavailable: n = !1 } = e,
        l = n ? P.intl.formatToPlainString(R.default.OBr7WW, { name: t }) : t;
    return (0, a.jsx)(ex, { name: l, compact: !0 });
}
function eq(e) {
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
        ? (0, a.jsx)(eW, { name: l, unavailable: !0 })
        : (0, a.jsx)(ev, {
              name: l,
              thumbSrc: null,
              ariaLabel: P.intl.formatToPlainString(R.default.gV5YcR, { name: l }),
              onClick: c,
          });
}
function e$(e) {
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
                  (0, eB.R)({
                      items: e.filter((e) => "string" != typeof e),
                      startingIndex: e.slice(0, l).filter((e) => "string" != typeof e).length,
                      shouldHideMediaOptions: !0,
                      location: "VibegrationsChat",
                  });
        });
    }, [t, n, l]);
    return u
        ? (0, a.jsx)(eW, { name: r, unavailable: !0 })
        : (0, a.jsx)(ev, {
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
var ez = n(824757);
function eX(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsxs)("section", {
              className: ez.hb,
              children: [
                  (0, a.jsx)(h.E, { variant: "text-xs/semibold", color: "text-muted", tag: "span", children: t }),
                  (0, a.jsx)("div", {
                      className: ez.Hu,
                      children: n.map((e) =>
                          (0, a.jsx)(
                              "span",
                              {
                                  className: ez.uR,
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
function eK(e) {
    let { proposal: t, onApprove: n } = e;
    return (0, a.jsxs)("article", {
        className: ez.cz,
        "data-vibegrations-plan-card": !0,
        children: [
            (0, a.jsxs)("header", {
                className: ez.pu,
                children: [
                    (0, a.jsx)(h.E, {
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        tag: "span",
                        children: P.intl.string(R.default["60htw+"]),
                    }),
                    !0 === t.is_activity
                        ? (0, a.jsx)("span", {
                              className: ez.dr,
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
                      className: ez.hb,
                      children: [
                          (0, a.jsx)(h.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: P.intl.string(R.default.KLyB8Y),
                          }),
                          (0, a.jsx)("ul", {
                              className: ez.eQ,
                              children: t.changes.map((e, t) =>
                                  (0, a.jsxs)(
                                      "li",
                                      {
                                          className: ez.H6,
                                          children: [
                                              (0, a.jsx)(h.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  className: ez.UZ,
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
                      className: ez.hb,
                      children: [
                          (0, a.jsx)(h.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: P.intl.string(P.t["0hKkS+"]),
                          }),
                          (0, a.jsx)("ul", {
                              className: ez.eQ,
                              children: t.commands.map((e, t) =>
                                  (0, a.jsxs)(
                                      "li",
                                      {
                                          className: ez.Xs,
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
            (0, a.jsx)(eX, { label: P.intl.string(R.default.ieqTtP), names: t.bot_permissions ?? [] }),
            (0, a.jsx)(eX, { label: P.intl.string(R.default.Cn9qix), names: t.privileged_intents ?? [] }),
            null != n
                ? (0, a.jsxs)("div", {
                      className: ez.nc,
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
                              className: ez.sw,
                              children: "or reply to keep refining",
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var eY = n(192308),
    eZ = n(479191);
function eJ(e) {
    let { projectId: t, request: l } = e,
        s = i.useCallback(() => {
            (0, eY.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("338013"), n.e("468421")]).then(n.bind(n, 539620));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: l });
            });
        }, [t, l]);
    return (0, a.jsxs)("article", {
        className: eZ.Lo,
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
                className: eZ.cS,
                children: [
                    l.fields.map((e) =>
                        (0, a.jsx)(
                            "span",
                            {
                                className: eZ.$H,
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
                              className: eZ.$H,
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
                className: eZ.sq,
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
var eQ = n(13699);
function e0(e) {
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
            className: eQ.Dx,
            children: (0, a.jsx)(h.E, {
                tag: "div",
                variant: "text-sm/normal",
                color: d,
                selectable: !0,
                className: eQ.iq,
                children: l.summary,
            }),
        });
    let m = s ? eC.a : eI._;
    return (0, a.jsxs)("li", {
        "data-step-kind": l.step.kind,
        className: eQ.Dx,
        children: [
            (0, a.jsxs)(em.D, {
                tag: "div",
                className: eQ.kG,
                "aria-expanded": s,
                "aria-controls": o,
                "aria-label": P.intl.formatToPlainString(R.default.z4KWsN, { step: l.summary }),
                onClick: c,
                children: [
                    (0, a.jsx)(h.E, {
                        tag: "span",
                        variant: "text-sm/normal",
                        color: d,
                        className: eQ.iq,
                        children: l.summary,
                    }),
                    (0, a.jsx)(m, { size: "xs", color: "currentColor", className: eQ.Ue }),
                ],
            }),
            (0, a.jsxs)("div", {
                id: o,
                hidden: !s,
                className: eQ.yJ,
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
                              className: eQ.y8,
                              children: u.map((e) => (0, a.jsx)(e2, { projectId: n, screenshotId: e }, e)),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function e1() {}
function e2(e) {
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
                (0, eB.R)({
                    items: [{ type: "IMAGE", url: e, alt: d }],
                    startingIndex: 0,
                    shouldHideMediaOptions: !0,
                    location: "VibegrationsChat",
                });
            }, e1);
        }, [t, n, d]);
    return r ? null : (0, a.jsx)(ev, { name: d, thumbSrc: l, ariaLabel: d, onClick: u, onThumbError: () => c(!0) });
}
var e3 = n(820081),
    e7 = n(329456);
function e6(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", {
        className: e7.Vn,
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
        children: "completed" === t ? (0, a.jsx)(e3.B, { size: "xxs", color: "currentColor" }) : null,
    });
}
function e5(e) {
    return { completed: e.filter((e) => "completed" === e.status).length, total: e.length };
}
function e8(e) {
    let { todos: t, provisional: n } = e;
    return (0, a.jsxs)("ul", {
        className: e7.zR,
        children: [
            t.map((e) =>
                (0, a.jsxs)(
                    "li",
                    {
                        className: e7.qN,
                        "data-status": e.status,
                        children: [
                            (0, a.jsx)(e6, { status: e.status }),
                            (0, a.jsx)(h.E, {
                                variant: "text-sm/normal",
                                color: "completed" === e.status ? "text-muted" : "text-default",
                                tag: "span",
                                className: e7.ku,
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
                      className: e7.qN,
                      "data-status": "pending",
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(e6, { status: "pending" }),
                          (0, a.jsx)(h.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              tag: "span",
                              className: e7.ku,
                              selectable: !0,
                              children: n,
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function e4(e) {
    let { todos: t, provisional: n, announceProgress: l = !0 } = e,
        { completed: i, total: s } = e5(t);
    return 0 === s
        ? null
        : (0, a.jsxs)("article", {
              className: e7.Rx,
              "data-vibegrations-todo-card": !0,
              children: [
                  (0, a.jsxs)("header", {
                      className: e7.Ye,
                      children: [
                          (0, a.jsx)(h.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: P.intl.string(R.default.qCRC6c),
                          }),
                          (0, a.jsx)("span", {
                              className: e7.mA,
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
                  (0, a.jsx)(e8, { todos: t, provisional: n }),
              ],
          });
}
var e9 = n(549505);
function te(e) {
    let { task: t } = e,
        [n, l] = i.useState(null),
        s = i.useId(),
        r = t.groups.length > 0 || (null != t.detail && "" !== t.detail),
        o = r && (n ?? "failed" === t.state),
        c = i.useCallback(() => l(!o), [o]),
        d = eE(t.state),
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
        m = o ? eC.a : eI._,
        p = "failed" === t.state,
        f = p ? u : d ? (o ? void 0 : t.latestActivity) : r ? void 0 : u,
        g = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)("span", {
                    className: e9.uJ,
                    children: [
                        (0, a.jsx)(h.E, {
                            tag: "span",
                            variant: "text-sm/normal",
                            color: "text-default",
                            className: e9.QC,
                            children: t.title,
                        }),
                        r ? (0, a.jsx)(m, { size: "xs", color: "currentColor", className: e9.bu }) : null,
                    ],
                }),
                null != f && "" !== f
                    ? (0, a.jsx)(h.E, {
                          tag: "span",
                          variant: "text-xs/normal",
                          color: p ? "text-feedback-critical" : "text-muted",
                          className: e9.hE,
                          children: f,
                      })
                    : null,
            ],
        });
    return (0, a.jsxs)("li", {
        className: e9.ot,
        "data-task-state": t.state,
        children: [
            r
                ? (0, a.jsx)(em.D, {
                      tag: "div",
                      className: I()(e9.qI, e9.EZ),
                      "aria-expanded": o,
                      "aria-controls": s,
                      "aria-label": P.intl.formatToPlainString(R.default.SxMgMJ, { title: t.title, state: u }),
                      onClick: c,
                      children: g,
                  })
                : (0, a.jsx)("div", { className: e9.qI, children: g }),
            r
                ? (0, a.jsxs)("div", {
                      id: s,
                      hidden: !o,
                      className: e9.yd,
                      children: [
                          t.groups.length > 0
                              ? (0, a.jsx)("ol", {
                                    className: e9.x7,
                                    children: t.groups.map((e, t) => (0, a.jsx)(e0, { group: e }, t)),
                                })
                              : null,
                          null != t.detail && "" !== t.detail
                              ? (0, a.jsx)(h.E, {
                                    tag: "div",
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    selectable: !0,
                                    className: e9.Tb,
                                    children: t.detail,
                                })
                              : null,
                      ],
                  })
                : null,
        ],
    });
}
var tt = n(229775),
    tn = n(165648);
function tl(e) {
    let { projectId: t, item: n, attachments: l } = e,
        [s, r] = i.useState(!1),
        o = i.useId(),
        c = i.useCallback(() => r((e) => !e), []),
        d = null != n.label && "" !== n.label,
        u = s ? eI._ : eC.a,
        m = (0, a.jsx)(a.Fragment, {
            children: n.blocks.map((e) =>
                "rows" === e.type
                    ? (0, a.jsx)(
                          "ol",
                          {
                              className: eQ.dO,
                              children: e.groups.map((e, n) => (0, a.jsx)(e0, { projectId: t, group: e }, n)),
                          },
                          e.key,
                      )
                    : (0, a.jsx)(
                          "ol",
                          { className: eQ.On, children: e.tasks.map((e) => (0, a.jsx)(te, { task: e }, e.taskId)) },
                          e.key,
                      ),
            ),
        });
    return d
        ? (0, a.jsxs)("li", {
              className: I()(eQ.ky, tt.XR, eQ.rn),
              children: [
                  (0, a.jsxs)(em.D, {
                      tag: "div",
                      className: eQ.rN,
                      "aria-expanded": !s,
                      "aria-controls": o,
                      "aria-label": P.intl.formatToPlainString(R.default.s1wx5H, { activity: n.label }),
                      onClick: c,
                      children: [
                          (0, a.jsx)(h.E, {
                              tag: "span",
                              variant: "text-sm/normal",
                              color: "text-default",
                              className: eQ.zN,
                              children: n.label,
                          }),
                          (0, a.jsx)(u, { size: "xs", color: "currentColor", className: eQ.cZ }),
                      ],
                  }),
                  (0, a.jsx)("div", { id: o, hidden: s, className: eQ.MZ, children: m }),
                  l,
              ],
          })
        : (0, a.jsxs)("li", { className: I()(eQ.ky, tt.XR, eQ.rn), children: [m, l] });
}
function ta(e) {
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
            onPickIdea: b,
            offerIdeas: k,
            onAskForIdeas: j,
            inheritedActivity: y,
            sideReply: _ = !1,
        } = e,
        { items: N } = i.useMemo(
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
                        null != u && (u.groups = ew(h, { inheritedSummary: t })), (u = null), (h = []);
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
                            if (eN.has(l.kind)) continue;
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
                        if (eN.has(l.kind)) continue;
                        let e = eA(l);
                        !e && f && x();
                        let b = v(n, e && null != p);
                        (o = null),
                            (m = null),
                            null == u &&
                                ((u = { type: "rows", key: `rows-${n}`, groups: [] }), (t = p), b.blocks.push(u)),
                            h.push(l),
                            e || (p = eS(l));
                    }
                    for (let e of (g(), s)) {
                        e.groups = ew(e.rawSteps);
                        let t = e.groups[e.groups.length - 1]?.summary;
                        null != t && (e.latestActivity = t), !n && eE(e.state) && (e.state = "incomplete");
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
        E = N.some((e) => "note" === e.type),
        A = N.some((e) => "todos" === e.type),
        w = N.at(-1),
        S = w?.type === "message" && w.content.trim() === s.trim(),
        C = null != f && f.questions.length > 0,
        T = null == r && "" !== s && !S && !C,
        O = (function (e) {
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
        })({ hasAttachments: null != x && x.length > 0, showsClosingMessage: T, lastItemType: w?.type }),
        M = null == x ? null : (0, a.jsx)(eV, { projectId: t, attachments: x }),
        L = null == M ? null : (0, a.jsx)("div", { className: eQ.MT, children: M });
    return (0, a.jsxs)("div", {
        className: eQ.ue,
        children: [
            null == l || "" === l || E
                ? null
                : (0, a.jsx)(h.E, {
                      tag: "div",
                      variant: "text-sm/normal",
                      color: "text-default",
                      selectable: !0,
                      className: I()(eQ.ky, eQ.Xt, tt.XR),
                      children: l,
                  }),
            null != u && u.length > 0 && !A
                ? (0, a.jsx)("div", {
                      className: I()(eQ.ky, tt.XR),
                      children: (0, a.jsx)(e4, { todos: u, provisional: c }),
                  })
                : null,
            N.length > 0
                ? (0, a.jsx)("ol", {
                      className: eQ.dO,
                      children: N.map((e) =>
                          "message" === e.type
                              ? (0, a.jsxs)(
                                    "li",
                                    {
                                        className: I()(eQ.ky, tt.XR),
                                        children: [
                                            (0, a.jsx)("div", {
                                                className: I()(tn.PT, eQ.cW),
                                                children: eT.A.parse(e.content, !0, {
                                                    allowList: !0,
                                                    allowHeading: !0,
                                                    allowLinks: !0,
                                                }),
                                            }),
                                            "streamed" === O && e.key === w?.key ? L : null,
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
                                          className: I()(eQ.ky, eQ.Xt, tt.XR),
                                          children: e.content,
                                      },
                                      e.key,
                                  )
                                : "todos" === e.type
                                  ? (0, a.jsx)(
                                        "li",
                                        {
                                            className: I()(eQ.ky, tt.XR),
                                            children: (0, a.jsx)(e4, { todos: e.todos, provisional: c }),
                                        },
                                        e.key,
                                    )
                                  : (0, a.jsx)(
                                        tl,
                                        {
                                            projectId: t,
                                            item: e,
                                            attachments: "activity" === O && e.key === w?.key ? M : null,
                                        },
                                        e.key,
                                    ),
                      ),
                  })
                : null,
            null != r
                ? (0, a.jsx)("div", {
                      className: I()(eQ.ky, tt.XR),
                      children: (0, a.jsx)(eK, { proposal: r, onApprove: m }),
                  })
                : T
                  ? (0, a.jsxs)("div", {
                        className: I()(eQ.ky, tt.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: I()(tn.PT, eQ.cW),
                                children: eT.A.parse(s, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === O ? L : null,
                            _
                                ? (0, a.jsx)(h.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: P.intl.string(R.default.OAjkIT),
                                  })
                                : null,
                            !0 === k
                                ? (0, a.jsx)("div", { className: eQ.IN, children: (0, a.jsx)(eH, { onAsk: j }) })
                                : null,
                        ],
                    })
                  : null,
            null != v
                ? (0, a.jsx)("div", {
                      className: I()(eQ.ky, tt.XR),
                      children: (0, a.jsx)(eJ, { projectId: t, request: v }),
                  })
                : null,
            "standalone" === O ? (0, a.jsx)("div", { className: I()(eQ.ky, tt.XR), children: L }) : null,
            C
                ? (0, a.jsx)("div", {
                      className: I()(eQ.ky, tt.XR),
                      children: (0, a.jsx)(eO, { clarification: f, onSubmit: g }),
                  })
                : null,
            null != p && p.length > 0
                ? (0, a.jsx)("div", { className: I()(eQ.ky, tt.XR), children: (0, a.jsx)(eD, { ideas: p, onPick: b }) })
                : null,
            !0 !== k || T
                ? null
                : (0, a.jsx)("div", { className: I()(eQ.ky, tt.XR), children: (0, a.jsx)(eH, { onAsk: j }) }),
            o
                ? (0, a.jsx)("div", {
                      className: I()(eQ.ky, tt.XR),
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
var ti = n(778712),
    ts = n(730134),
    tr = n(427262);
function to(e) {
    let { userId: t } = e,
        n = (0, j.bG)([e_.default], () => e_.default.getUser(t), [t]),
        l = (0, tr.tx)(n);
    return null == n
        ? null
        : (0, a.jsxs)("div", {
              className: eU.LF,
              children: [
                  (0, a.jsx)(ts.A, { user: n, size: ti._3.SIZE_16, "aria-hidden": !0 }),
                  (0, a.jsx)(h.E, { variant: "text-xs/semibold", color: "text-muted", children: l }),
              ],
          });
}
let tc = {
    steered: R.default.I9TkzD,
    queued: R.default.gbjY6o,
    restarting: R.default["1Q4Cs2"],
    answered: R.default["J6WZ+x"],
};
function td(e) {
    let { projectId: t, messages: n, onApprove: l, onPickIdea: i, onAskForIdeas: s, onAnswerClarification: r } = e,
        o = n[n.length - 1],
        c = (0, j.bG)([e_.default], () => e_.default.getCurrentUser());
    return (0, a.jsx)("ol", {
        className: eU.x7,
        children: n.map((e, d) => {
            if ("user" === e.role) {
                let n = e.user_id ?? c?.id;
                return (0, a.jsxs)(
                    tu,
                    {
                        role: "user",
                        children: [
                            null != n ? (0, a.jsx)(to, { userId: n }) : null,
                            (0, a.jsxs)("div", {
                                className: I()(eU.B2, tt.XR),
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
                                        ? (0, a.jsx)(eV, { projectId: t, attachments: e.attachments })
                                        : null,
                                    null != e.disposition
                                        ? (0, a.jsx)(h.E, {
                                              variant: "text-xs/normal",
                                              color: "text-muted",
                                              children: P.intl.string(tc[e.disposition]),
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    },
                    e.render_id,
                );
            }
            let u = e.steps.filter((e) => !eN.has(e.kind)).length > 0,
                m = e.steps.some((e) => "assistant_delta" === e.kind && null != e.message && "" !== e.message),
                p = "plan_implemented" === e.kind && e === o,
                f = null != e.clarification && e === o;
            return "" !== e.content ||
                null != e.proposal ||
                null != e.ideas ||
                null != e.clarification ||
                p ||
                u ||
                m ||
                null != e.announcement ||
                null != e.todos ||
                !0 === e.interrupted ||
                (e.attachments?.length ?? 0) !== 0
                ? (0, a.jsx)(
                      tu,
                      {
                          role: "assistant",
                          children: (0, a.jsx)(ta, {
                              projectId: t,
                              steps: e.steps,
                              announcement: e.announcement,
                              content: e.content,
                              proposal: e.proposal,
                              interrupted: !0 === e.interrupted,
                              provisionalTodo: e.provisionalTodo,
                              active: !(0, el.B)(e),
                              todos: e.todos,
                              onApprove: e === o ? l : void 0,
                              ideas: e.ideas,
                              clarification: f ? e.clarification : void 0,
                              onAnswerClarification: r,
                              attachments: e.attachments,
                              secretRequest: e.secretRequest,
                              onPickIdea: i,
                              offerIdeas: p,
                              onAskForIdeas: s,
                              inheritedActivity: (function (e, t) {
                                  let n = e[t]?.turn_id;
                                  if (null != n)
                                      for (let l = t - 1; l >= 0; l--) {
                                          let t = e[l];
                                          if (null != t && "assistant" === t.role && "side_reply" !== t.kind)
                                              return !0 === t.continued && t.turn_id === n
                                                  ? (function (e) {
                                                        for (let t = e.length - 1; t >= 0; t--) {
                                                            let n = e[t];
                                                            if (
                                                                null != n &&
                                                                (null == n.task_id || "" === n.task_id) &&
                                                                !(eN.has(n.kind) || eA(n))
                                                            )
                                                                return eS(n);
                                                        }
                                                    })(t.steps)
                                                  : void 0;
                                      }
                              })(n, d),
                              sideReply: "side_reply" === e.kind,
                          }),
                      },
                      e.render_id,
                  )
                : null;
        }),
    });
}
function tu(e) {
    let { role: t, children: n } = e;
    return (0, a.jsx)("li", { "data-role": t, className: eU.xk, children: n });
}
var th = n(311656),
    tm = n(922016),
    tp = n(863610),
    tf = n(495557);
function tg(e) {
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
            className: tf.jn,
            "data-vibegrations-thinking-panel": !0,
            children: (0, a.jsx)(en.Ch, {
                ref: s,
                className: tf.Dq,
                "data-vibegrations-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: I()(tn.PT, tf.bb),
                    children: eT.A.parse(l, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var tx = n(921461);
function tv(e) {
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
    return (0, a.jsx)(tm.Y, {
        targetElementRef: l,
        position: "top",
        align: "left",
        shouldShow: p,
        onRequestClose: g,
        renderPopout: () => (0, a.jsx)(tg, { id: s, activity: t }),
        children: () =>
            (0, a.jsxs)(em.D, {
                innerRef: l,
                className: I()(tx.h, u && tx.X),
                "aria-label": P.intl.string(R.default.SzdX35),
                "aria-expanded": p,
                "aria-describedby": p ? s : void 0,
                "data-vibegrations-thinking-trigger": !0,
                onClick: f,
                children: [
                    (0, a.jsx)(tp.n, { dotRadius: 3.5, themed: !0 }),
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
var tb = n(662546),
    tk = n(233263);
function tj(e) {
    let { todos: t, provisional: n } = e;
    return (0, a.jsx)("div", {
        className: tk.B,
        role: "dialog",
        "aria-label": P.intl.string(R.default.qCRC6c),
        children: (0, a.jsx)(e4, { todos: t, provisional: n, announceProgress: !1 }),
    });
}
function ty(e) {
    let { todos: t, provisional: n } = e,
        l = i.useRef(null),
        { completed: s, total: r } = e5(t);
    return 0 === r
        ? null
        : (0, a.jsx)(tm.Y, {
              targetElementRef: l,
              position: "top",
              align: "right",
              renderPopout: () => (0, a.jsx)(tj, { todos: t, provisional: n }),
              children: (e) =>
                  (0, a.jsxs)(em.D, {
                      innerRef: l,
                      className: tk.T,
                      "aria-label": P.intl.formatToPlainString(R.default["QG/EiF"], { completed: s, total: r }),
                      ...e,
                      children: [
                          (0, a.jsx)(tb.O, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
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
var t_ = n(885574),
    tN = n(280894);
function tE(e) {
    return e.toLocaleString();
}
function tA(e) {
    let { label: t, usage: n } = e;
    return (0, a.jsxs)("div", {
        className: tN.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: tN.mf,
                children: [
                    (0, a.jsx)(h.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(h.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [tE((0, eu.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(h.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    tE(n.input_tokens),
                    " in \xb7 ",
                    tE(n.output_tokens),
                    " out \xb7 ",
                    tE(n.cache_creation_input_tokens),
                    " cache write \xb7 ",
                    tE(n.cache_read_input_tokens),
                    " cache read",
                ],
            }),
        ],
    });
}
function tw(e) {
    let { project: t } = e,
        n = (0, eu.wV)(t.orchestrator, t.codegen);
    return (0, a.jsxs)("div", {
        className: tN.si,
        role: "dialog",
        "aria-label": P.intl.string(R.default["9yoLWZ"]),
        children: [
            (0, a.jsx)("div", {
                className: tN.Q$,
                children: (0, a.jsxs)("div", {
                    className: tN.mf,
                    children: [
                        (0, a.jsxs)(h.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [tE((0, eu.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(h.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(tA, { label: P.intl.string(R.default.hk4jJr), usage: t.orchestrator }),
            (0, a.jsx)(tA, { label: P.intl.string(R.default.R9aduM), usage: t.codegen }),
            (0, a.jsxs)("div", {
                className: tN.mf,
                children: [
                    (0, a.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: P.intl.string(R.default["kILb+R"]),
                    }),
                    (0, a.jsx)(h.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, eu.sj)(n) ? "\u2014" : `${Math.round(100 * (0, eu.CA)(n))}%`,
                    }),
                ],
            }),
        ],
    });
}
function tS(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(tm.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(tw, { project: t }),
        children: (e) =>
            (0, a.jsx)(em.D, {
                innerRef: n,
                className: tN.Y$,
                "aria-label": P.intl.string(R.default.AWQ2ZV),
                ...e,
                children: (0, a.jsx)(t_.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var tI = n(258216);
function tC(e) {
    switch (e) {
        case "connecting":
            return P.intl.string(R.default.W7oyuf);
        case "failed":
            return P.intl.string(R.default.eE60xI);
        case "closed":
            return P.intl.string(R.default["yBmS+I"]);
    }
}
function tT(e) {
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
        className: tI.jf,
        children: [
            (0, a.jsx)("div", {
                className: tI.Xx,
                role: "status",
                "aria-live": "polite",
                "data-vibegrations-activity": !0,
                children: t ? (0, a.jsx)(tv, { activity: n, compacting: l }) : null,
            }),
            null == c
                ? null
                : (0, a.jsx)(th.A, { settings: c.settings, choices: c.choices, disabled: "open" !== o, onChange: d }),
            null == i || 0 === i.length ? null : (0, a.jsx)(ty, { todos: i, provisional: s }),
            null == r
                ? null
                : (0, a.jsxs)("span", {
                      className: tI.BP,
                      children: [
                          (0, a.jsx)(h.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": P.intl.formatToPlainString(R.default["7SZZvj"], {
                                  runes: (0, eu.a7)(r.cost_usd),
                                  turns: r.turns,
                              }),
                              children: P.intl.formatToPlainString(R.default["4PFO2p"], {
                                  runes: (0, eu.a7)(r.cost_usd).toLocaleString(),
                              }),
                          }),
                          (0, a.jsx)(tS, { project: r }),
                      ],
                  }),
            "open" === o
                ? null
                : (0, a.jsx)(h.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === o ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": P.intl.formatToPlainString(R.default.eDDdhB, { status: tC(o) }),
                      "data-vibegrations-conn": !0,
                      "data-state": o,
                      className: tI.XF,
                      children: tC(o),
                  }),
        ],
    });
}
var tR = n(506774),
    tP = n(651649),
    tO = n(670455);
let tM = "shownVibegrationsFeedbackProjectIds";
var tL = n(348800);
function tG(e) {
    let { projectId: t, onRegionCapture: l } = e,
        s = (0, j.bG)([el.A], () => el.A.getMessages(t), [t]),
        r = (0, j.bG)([o.Ay], () => o.Ay.getConnState(t), [t]),
        c = (0, j.bG)([o.Ay], () => o.Ay.isChatStopped(t), [t]),
        d = (0, j.bG)([el.A], () => el.A.getProjectUsage(t), [t]),
        u = (0, j.bG)([el.A], () => el.A.getThinkingActivity(t), [t]),
        h = (0, j.bG)([el.A], () => el.A.isCompacting(t), [t]),
        m = (0, j.bG)([o.Ay], () => o.Ay.getModelSettings(t), [t]),
        p = i.useRef(null),
        f = i.useRef(null),
        g = i.useRef(!0);
    i.useEffect(() => {
        g.current && f.current?.scrollToBottom();
    }, [s]);
    let x = i.useCallback(() => {
        let e = f.current;
        null != e && (g.current = 32 > e.getDistanceFromBottom());
    }, []);
    i.useLayoutEffect(() => {
        let e = p.current;
        if (null == e) return;
        let t = e.getBoundingClientRect().width,
            n = null,
            l = new ResizeObserver((l) => {
                let [a] = l,
                    i = a?.contentRect.width ?? e.getBoundingClientRect().width;
                i === t ||
                    ((t = i),
                    g.current &&
                        (null != n && cancelAnimationFrame(n),
                        (n = requestAnimationFrame(() => f.current?.scrollToBottom()))));
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
                    let t = el.A.getMessages(e).filter(
                        (e) => "assistant" === e.role && "side_reply" !== e.kind && (0, el.B)(e),
                    ).length;
                    !(t < 3) &&
                        ((tR.w.get(tM) ?? []).includes(e) ||
                            tP.A.possiblyShowFeedbackModal(tO.MW.VIBEGRATIONS, () => {
                                let l;
                                (l = tR.w.get(tM) ?? []).includes(e) || tR.w.set(tM, [...l, e]),
                                    (0, eY.openModalLazy)(async () => {
                                        let { default: l } = await Promise.all([
                                            n.e("312513"),
                                            n.e("104143"),
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
        b = i.useCallback(() => (0, o.fu)(t), [t]),
        k = i.useCallback((e) => v(e.implementation_prompt), [v]),
        y = i.useCallback((e) => v(e), [v]),
        _ = i.useCallback(() => v(P.intl.string(R.default["3sTTBu"])), [v]),
        N = i.useCallback((e) => (0, o.XZ)(t, e), [t]),
        E = i.useCallback((e) => (0, o.vX)(t, e), [t]),
        A = i.useCallback((e) => (0, o.Vm)(t, e), [t]),
        w = i.useCallback(() => v(P.intl.string(R.default.Jj8Ftb)), [v]),
        S = "open" === r && !c,
        I = s[s.length - 1],
        C = null != I && "assistant" === I.role && null != I.proposal,
        T = i.useMemo(() => {
            for (let e = s.length - 1; e >= 0; e--) {
                let t = s[e];
                if ("assistant" === t.role && !(0, el.B)(t)) return t;
            }
        }, [s]),
        O = null != T,
        M = C && S ? w : void 0,
        L = T?.todos,
        G = T?.provisionalTodo;
    return (0, a.jsxs)("section", {
        ref: p,
        "data-vibegrations-chat": !0,
        className: tL.T,
        children: [
            (0, a.jsx)(en.Ch, {
                ref: f,
                onScroll: x,
                "data-vibegrations-chat-log": !0,
                className: tL.N,
                children: (0, a.jsx)(td, {
                    projectId: t,
                    messages: s,
                    onApprove: M,
                    onPickIdea: S ? k : void 0,
                    onAskForIdeas: S ? _ : void 0,
                    onAnswerClarification: S ? y : void 0,
                }),
            }),
            (0, a.jsx)(tT, {
                thinking: O,
                thinkingActivity: u,
                compacting: h,
                todos: L,
                provisionalTodo: G,
                projectUsage: d,
                connState: r,
                modelSettings: m,
                onModelSettingsChange: N,
            }),
            (0, a.jsx)(ej, {
                canSend: S,
                stopped: c,
                running: O,
                onSend: v,
                onInterrupt: S ? b : void 0,
                onUploadFile: E,
                onDeleteFile: A,
                onApprove: M,
                onRegionCapture: l,
            }),
        ],
    });
}
var tD = n(435558),
    tH = n(661531),
    tB = n(602853),
    tU = n(517461),
    tV = n(761929),
    tF = n(927506);
function tW(e) {
    let { open: t, maxWidth: n, onWidthChange: l, children: s } = e,
        r = (0, tB.r)(tH.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = i.useRef(null),
        [c, d] = (0, tU.V)("VibegrationsChatSidebarWidth", 460),
        [u, h] = i.useState(c ?? 460),
        m = (0, tD.clamp)(u, 360, n);
    i.useLayoutEffect(() => {
        l(t ? m + r : 0);
    }, [m, t, r, l]);
    let p = (0, tV.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: o,
            onElementResize: h,
            onElementResizeEnd: d,
            orientation: tV.R.HORIZONTAL_LEFT,
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
        className: tF.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: tF.Di, onPointerDown: f }),
            (0, a.jsx)("div", { ref: o, className: tF.kL, style: { width: m }, children: s }),
        ],
    });
}
var tq = n(333007),
    t$ = n(439108);
function tz(e) {
    return {
        x: Math.min(e.startX, e.x),
        y: Math.min(e.startY, e.y),
        width: Math.abs(e.x - e.startX),
        height: Math.abs(e.y - e.startY),
    };
}
function tX(e) {
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
                    a = tz({ ...s, x: t.x, y: t.y });
                r(null), a.width < 8 && a.height < 8 ? l() : n(a);
            },
            [s, o, n, l],
        ),
        m = null == s ? null : tz(s);
    return (0, tq.createPortal)(
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("div", { className: t$.tB, role: "presentation", onPointerDown: l }),
                (0, a.jsx)("div", {
                    className: t$.aC,
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
                                  className: t$.F7,
                                  children: (0, a.jsx)("div", {
                                      className: t$.aK,
                                      children: (0, a.jsx)(h.E, {
                                          variant: "text-sm/medium",
                                          color: "text-default",
                                          children: P.intl.string(R.default.ydkvBR),
                                      }),
                                  }),
                              })
                            : (0, a.jsx)("div", {
                                  className: t$.r1,
                                  style: { left: m.x, top: m.y, width: m.width, height: m.height },
                              }),
                }),
            ],
        }),
        document.body,
    );
}
function tK(e) {
    let { projectId: t } = e,
        n = (0, j.bG)([el.A], () => el.A.isThinking(t), [t]);
    return (0, a.jsx)("div", { className: tt.MP, "data-active": n, "aria-hidden": !0 });
}
var tY = n(120426),
    tZ = n(775602),
    tJ = n(873727),
    tQ = n(147248),
    t0 = n(363195),
    t1 = n(885386),
    t2 = n(940107),
    t3 = n(171936);
function t7(e) {
    let t,
        n,
        l,
        r,
        o,
        c,
        d,
        u,
        { projectId: h, applicationId: m, surface: p, previewReady: f, content: g, sidebar: x } = e,
        [v, b] = i.useState(null),
        k = (0, s.A)(m, p),
        y = k?.id ?? null;
    (t = (0, j.bG)([t0.A], () => (0, tJ.x4)(t0.A.theme))),
        (n = (0, j.bG)([tQ.A], () => tQ.A.gradientPreset)),
        (l = (0, j.bG)([tZ.Ay], () => tZ.Ay.useReducedMotion)),
        (r = t1.hH.useSetting()),
        (o = i.useRef(null)),
        (c = i.useRef(0)),
        (d = i.useCallback(() => {
            let e = (0, tY.F1)(v, y);
            if (null == e) return;
            let n = {
                revision: ++c.current,
                baseTheme: t,
                customTheme: (0, tJ.Lq)(),
                messageDisplayCompact: r,
                reducedMotion: l,
            };
            (0, t2.W)(e, "set-env", n, {
                timeoutMs: 6e3,
                retryMs: 250,
                sourceMatch: "origin",
                label: "viewer environment",
            }).catch(() => {});
        }, [t, y, r, v, l])),
        (u = i.useCallback(() => {
            null == o.current &&
                (o.current = window.requestAnimationFrame(() => {
                    (o.current = null), d();
                }));
        }, [d])),
        i.useEffect(() => {
            u();
        }, [n, u]),
        i.useLayoutEffect(
            () => (
                d(),
                u(),
                () => {
                    null != o.current && (window.cancelAnimationFrame(o.current), (o.current = null));
                }
            ),
            [u, d],
        ),
        i.useEffect(() => {
            function e(e) {
                e.target === (0, tY.F1)(v, y) && d();
            }
            return document.addEventListener("load", e, !0), () => document.removeEventListener("load", e, !0);
        }, [y, v, d]),
        i.useEffect(() => {
            let e = new MutationObserver(u);
            return (
                e.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "style"] }),
                e.observe(document.head, { childList: !0, subtree: !0, characterData: !0 }),
                () => e.disconnect()
            );
        }, [u]);
    let [_, E] = i.useState(null);
    i.useEffect(() => {
        if (null != h) return (0, t3.mn)(h, () => (0, tY.F1)(v, y));
    }, [h, v, y]);
    let A = i.useCallback(() => {
            let e = (0, tY.F1)(v, y),
                t = e?.getBoundingClientRect();
            return null == e || null == t || t.width < 1 || t.height < 1
                ? Promise.reject(Error("no visible preview to capture"))
                : new Promise((n, l) => {
                      E({
                          targetRect: { left: t.left, top: t.top, width: t.width, height: t.height },
                          iframe: e,
                          resolve: n,
                          reject: l,
                      });
                  });
        }, [v, y]),
        w = i.useCallback(
            (e) => {
                E(null), null != _ && (0, tY.su)(_.iframe, e).then(_.resolve, _.reject);
            },
            [_],
        ),
        S = i.useCallback(() => {
            E(null), _?.resolve(null);
        }, [_]),
        I = f && null != m && p.type === N.U4.MAIN;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", { ref: b, className: ee.fm, children: g }),
            x(I ? A : void 0),
            null != _ ? (0, a.jsx)(tX, { targetRect: _.targetRect, onSelect: w, onCancel: S }) : null,
        ],
    });
}
function t6(e) {
    let {
            projectId: t,
            applicationId: n,
            previewApplicationId: l,
            surface: s,
            chatOpen: c,
            previewReady: d,
            previewGate: u,
            channelMessages: h,
        } = e,
        m = i.useRef(null),
        [p, f] = i.useState(0);
    i.useLayoutEffect(() => {
        if (s.type === N.U4.MAIN) return (0, r.HV)(n), () => (0, r.HV)(null);
    }, [n, s.type]),
        i.useEffect(() => {
            null != t && (0, o.Hc)(t);
        }, [t]),
        i.useLayoutEffect(() => {
            let e = m.current;
            if (null == e) return;
            function t() {
                null != e && f(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return n.observe(e), () => n.disconnect();
        }, []),
        i.useEffect(() => () => (0, r.Zq)(0), []);
    let g = Math.max(360, p - 320),
        x = c || s.type === N.U4.MAIN;
    return (0, a.jsx)("div", {
        ref: m,
        className: ee.LB,
        children: (0, a.jsx)(t7, {
            projectId: t,
            applicationId: n,
            surface: s,
            previewReady: d,
            content: (0, a.jsx)(X, {
                applicationId: n,
                previewApplicationId: l,
                surface: s,
                previewReady: d,
                previewGate: u,
            }),
            sidebar: (e) =>
                null != h
                    ? (0, a.jsx)(tW, {
                          open: h.open,
                          maxWidth: g,
                          onWidthChange: r.Zq,
                          children: h.open
                              ? (0, a.jsx)(et, { channel: h.channel, guild: h.guild, onClose: h.onClose })
                              : null,
                      })
                    : null != t && x
                      ? (0, a.jsx)(tW, {
                            open: c,
                            maxWidth: g,
                            onWidthChange: r.Zq,
                            children: (0, a.jsxs)("div", {
                                className: ee.cO,
                                children: [
                                    (0, a.jsx)(tK, { projectId: t }),
                                    (0, a.jsx)(tG, { projectId: t, onRegionCapture: e }, t),
                                ],
                            }),
                        })
                      : null,
        }),
    });
}
