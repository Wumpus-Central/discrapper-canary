n.d(t, { A: () => lR });
var l,
    a = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    o = n(789645),
    c = n(672929),
    d = n(58736),
    u = n(948230),
    h = n(998939),
    m = n(289873),
    f = n(821609),
    p = n(627363),
    g = n(207371),
    x = n(580954),
    v = n(297264),
    b = n(834730),
    j = n(625180),
    y = n(91242),
    k = n(812901),
    A = n(317608),
    w = n(17928),
    N = n(956518),
    E = n(869146),
    S = n(165610),
    C = n(652215),
    I =
        (((l = {}).Loading = "loading"),
        (l.AwaitingLaunch = "awaiting-launch"),
        (l.Launched = "launched"),
        (l.RenderingElsewhere = "rendering-elsewhere"),
        (l.NoApplication = "no-application"),
        (l.DoesNotSupportSurface = "does-not-support-surface"),
        (l.Error = "error"),
        l),
    T = n(742023),
    _ = n(697744),
    R = n(295813),
    P = n(375708),
    M = n(296167);
function L(e) {
    let { className: t } = e,
        { Component: n, events: l, getDuration: s } = (0, _.c)();
    return (
        i.useEffect(() => {
            let e = null,
                t = 0;
            return (
                (e = requestAnimationFrame(function n() {
                    ((e = null), null != s()) ? l.onMouseEnter() : t++ < 120 && (e = requestAnimationFrame(n));
                })),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [l, s]),
        i.useEffect(() => {
            let e = setInterval(l.onMouseEnter, 3e4);
            return () => clearInterval(e);
        }, [l]),
        (0, a.jsxs)("div", {
            className: t,
            onMouseEnter: l.onMouseEnter,
            onMouseLeave: l.onMouseLeave,
            children: [
                (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
                (0, a.jsx)(b.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: M.o,
                    children: P.intl.string(R.default.jTuX7C),
                }),
            ],
        })
    );
}
var O = n(328284);
function D(e) {
    let { title: t, body: n, wide: l = !1, children: i } = e;
    return (0, a.jsxs)("div", {
        className: r()(O.Bf, l && O.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: O.Ux,
                children: [
                    (0, a.jsx)(v.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, a.jsx)(b.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
                ],
            }),
            i,
        ],
    });
}
var $ = n(963691);
function F(e) {
    let { applicationId: t, surface: n } = e,
        { frame: l, state: s } = (function (e) {
            let { applicationId: t, surface: n } = e,
                {
                    surface: l,
                    setFailed: a,
                    lifecycle: s,
                } = (function (e) {
                    let { applicationId: t, surface: n } = e,
                        l = i.useMemo(() => (0, S.VA)(t, n), [t, n]),
                        a = i.useMemo(() => n, [l]),
                        s = (0, w.bG)([y.A], () => y.A.getFrame(l), [l]),
                        r = (0, w.bG)(
                            [E.A, y.A],
                            () => E.A.getWindowOpen(C.MLl.ACTIVITY_POPOUT) && y.A.getMainFrame()?.id === l,
                            [l],
                        ),
                        { data: o, isLoading: c } = (0, p.YY)(t),
                        d = (0, g.x)(o),
                        u = null != (0, N.Ay)(t),
                        [h, m] = i.useState(null),
                        f = h === l;
                    return {
                        surface: a,
                        setFailed: i.useCallback(() => m(l), [l]),
                        lifecycle: (0, S.x1)(s)
                            ? r
                                ? { state: "rendering-elsewhere" }
                                : { state: "launched", frame: s }
                            : f
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
        r = (0, S.VA)(t, n);
    switch (
        (i.useEffect(() => {
            let e;
            return (
                null == (e = y.A.getFrame(r)) ||
                    y.A.getMainFrame()?.id !== r ||
                    E.A.getWindowOpen(C.MLl.ACTIVITY_POPOUT) ||
                    (e.intent === S.sV.MAIN ? j.A.resetFrameLayoutModes(r) : j.A.clearMainFrameSlot()),
                () => {
                    let e;
                    null != (e = y.A.getFrame(r)) &&
                        ((0, S.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        T.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === S.sV.INLINE && j.A.promoteFrame(r),
                              j.A.updateFrameLayoutMode({ frameId: r, layoutMode: S.y0.PIP }))
                            : e.intent === S.sV.MAIN && (0, x.A)().leaveFrame(r));
                }
            );
        }, [r]),
        s)
    ) {
        case I.Launched:
            return (0, a.jsx)(A.A, { frameId: l.id, level: k.A.WithinAppContent, className: $.Z7 });
        case I.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: $.qs,
                children: (0, a.jsx)(D, {
                    title: P.intl.string(R.default["4f6Vkr"]),
                    body: P.intl.string(R.default.LJ2q1H),
                }),
            });
        case I.NoApplication:
            return (0, a.jsx)(L, { className: $.qs });
        case I.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: $.qs,
                children: (0, a.jsx)(D, {
                    title: P.intl.string(R.default.FHOJiH),
                    body: P.intl.string(R.default["1yLQoV"]),
                }),
            });
        case I.Error:
            return (0, a.jsxs)("div", {
                className: $.qs,
                children: [
                    (0, a.jsx)(v.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: P.intl.string(R.default.MeLWCr),
                    }),
                    (0, a.jsx)(b.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: $.tj,
                        children: P.intl.string(R.default["1RCbQT"]),
                    }),
                ],
            });
        case I.AwaitingLaunch:
        case I.Loading:
            return (0, a.jsx)("div", { className: $.qs, children: (0, a.jsx)(m.y, {}) });
    }
}
var G = n(323384),
    U = n(308528),
    q = n(334738),
    B = n(373204),
    H = n(355622),
    V = n(734057),
    z = n(531685),
    W = n(365971),
    Y = n(362417);
function K(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: Y.f,
        children: [
            (0, a.jsx)(G.k, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(b.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function X() {
    return (0, a.jsx)("div", { className: Y.f, children: (0, a.jsx)(m.y, {}) });
}
function Z(e) {
    let t,
        n,
        { previewApplicationId: l } = e,
        { data: s, isLoading: r } = (0, p.YY)(l),
        o = s?.bot?.id ?? null,
        c = (0, w.bG)([V.A], () => {
            if (null == o) return null;
            let e = V.A.getDMFromUserId(o);
            return null != e ? V.A.getChannel(e) : null;
        });
    (t = c?.id ?? null),
        i.useEffect(() => {
            null != t && U.A.preload(C.ME, t);
        }, [t]),
        (n = (0, w.bG)([z.A], () => z.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, W.Xg)();
            return (
                (0, q.yl)(t, e),
                () => {
                    (0, q.dm)(t, e);
                }
            );
        }, [t, n]);
    let [d, u] = i.useState(null),
        h = null != o && d === o;
    return (i.useEffect(() => {
        if (null == o || null != c) return;
        let e = !1;
        return (
            U.A.openPrivateChannel({ recipientIds: o, navigateToChannel: !1 }).catch(() => {
                e || u(o);
            }),
            () => {
                e = !0;
            }
        );
    }, [o, c]),
    r)
        ? (0, a.jsx)(X, {})
        : null == o || h
          ? (0, a.jsx)(K, { message: P.intl.string(R.default.bl4eBc) })
          : null == c
            ? (0, a.jsx)(X, {})
            : (0, a.jsx)("div", {
                  className: Y.g,
                  children: (0, a.jsx)(B.A, { channel: c, guild: null, chatInputType: H.oU.SIDEBAR }, c.id),
              });
}
var Q = n(250872),
    J = n(976102);
function ee(e) {
    let {
            applicationId: t,
            previewApplicationId: n,
            surface: l,
            previewReady: s,
            previewGate: r,
            previewMode: o = Q.VW.ACTIVITY,
        } = e,
        d = (0, c.A)(t, l),
        { data: u, isLoading: h } = (0, p.YY)(t ?? void 0),
        { data: v } = (0, p.YY)(n ?? void 0),
        b = null != u && (0, g.x)(u),
        j = null != n && v?.bot?.id != null;
    return (i.useEffect(() => {
        r?.type === "permissions" && null != d && (0, x.A)().leaveFrame(d.id);
    }, [d, r?.type]),
    r?.type === "checking")
        ? (0, a.jsx)("div", { className: J.q, children: (0, a.jsx)(m.y, {}) })
        : r?.type === "permissions"
          ? (0, a.jsx)("div", {
                className: J.q,
                children: (0, a.jsx)(D, {
                    wide: !0,
                    title: P.intl.string(R.default.DYwf2n),
                    body: P.intl.string(R.default.WWj3pN),
                    children: (0, a.jsx)(f.$, {
                        variant: "primary",
                        size: "md",
                        text: P.intl.string(R.default["CRfE/E"]),
                        onClick: r.onReviewPermissions,
                        loading: r.loading,
                    }),
                }),
            })
          : s
            ? null == t
                ? null
                : h
                  ? (0, a.jsx)("div", { className: J.q, children: (0, a.jsx)(m.y, {}) })
                  : b && j && null != n
                    ? (0, a.jsx)("div", {
                          className: J.m,
                          role: "tabpanel",
                          id: (0, Q.z3)(o),
                          "aria-label": (0, Q.kZ)(o),
                          children:
                              o === Q.VW.ACTIVITY
                                  ? (0, a.jsx)(F, { applicationId: t, surface: l })
                                  : (0, a.jsx)(Z, { previewApplicationId: n }),
                      })
                    : null == u || (0, g.x)(u) || null == n
                      ? (0, a.jsx)(F, { applicationId: t, surface: l })
                      : (0, a.jsx)(Z, { previewApplicationId: n })
            : (0, a.jsx)(L, { className: J.q });
}
var et = n(534890),
    en = n(738876),
    el = n(47167),
    ea = n(31717),
    ei = n(372054);
function es(e) {
    let { channel: t, guild: n, onClose: l } = e,
        i = (0, el.Ay)(t),
        s = (0, a.jsx)(d.Ay.Icon, { icon: o.P, tooltip: P.intl.string(P.t.cpT0Cq), onClick: l });
    return (0, a.jsxs)("div", {
        className: ei.Wx,
        children: [
            (0, a.jsx)(en.A, { channel: t, draftType: ea.C.ChannelMessage }),
            (0, a.jsxs)(d.Ay, {
                toolbar: s,
                "aria-label": P.intl.string(P.t.BIYAqa),
                children: [
                    (0, a.jsx)(d.Ay.ChannelIcon, { icon: et.ChatIcon, "aria-label": P.intl.string(P.t["/VQax8"]) }),
                    (0, a.jsx)(d.Ay.Title, { children: i }),
                ],
            }),
            (0, a.jsx)("div", {
                className: ei.GZ,
                children: (0, a.jsx)(B.A, { channel: t, guild: n, chatInputType: H.oU.SIDEBAR }, t.id),
            }),
        ],
    });
}
var er = n(689175),
    eo = n(783791);
n(323874), n(14289), n(35956), n(321073);
var ec = n(475358),
    ed = n(922016),
    eu = n(980707),
    eh = n(477782),
    em = n(81369),
    ef = n(717400),
    ep = n(663341),
    eg = n(826745),
    ex = n(866665),
    ev = n(428610),
    eb = n(29080),
    ej = n(783977),
    ey = n(559647),
    ek = n(285796),
    eA = n(775602),
    ew = n(673724),
    eN = n(514042),
    eE = n(939249),
    eS = n(298668);
function eC(e) {
    return r()(eS._B, { [eS.ND]: e });
}
function eI(e) {
    let { name: t, thumbSrc: n = null, compact: l = !1, subText: i, children: s, onThumbError: r } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            null != n
                ? (0, a.jsx)("img", { src: n, alt: "", className: eS.gJ, onError: r })
                : (0, a.jsx)(eN.FileIcon, { size: l ? "xs" : "sm", color: "currentColor" }),
            (0, a.jsxs)("div", {
                className: eS.Wd,
                children: [
                    (0, a.jsx)(b.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: eS.Rr,
                        children: t,
                    }),
                    i,
                ],
            }),
            s,
        ],
    });
}
function eT(e) {
    return (0, a.jsx)("div", { className: eC(e.compact ?? !1), children: eI(e) });
}
function e_(e) {
    let { name: t, thumbSrc: n, ariaLabel: l, onClick: i, onThumbError: s } = e;
    return (0, a.jsx)(eE.D, {
        className: r()(eC(!0), eS.w8),
        onClick: i,
        "aria-label": l,
        children: eI({ name: t, thumbSrc: n, compact: !0, onThumbError: s }),
    });
}
var eR = n(311656),
    eP = n(789438);
let eM = ew.Is;
function eL(e) {
    let { text: t } = e,
        [n, l] = i.useState(""),
        [s, r] = i.useState("enterStart"),
        [o, c] = i.useState("");
    t !== o && (c(t), t !== n && ("" === n ? (l(t), r("enterStart")) : "idle" === s && r("exit"))),
        i.useEffect(() => {
            if ("exit" === s) {
                let e = window.setTimeout(() => {
                    l(t), r("enterStart");
                }, 250);
                return () => window.clearTimeout(e);
            }
            if ("enterStart" === s) {
                let e = 0,
                    t = window.requestAnimationFrame(() => {
                        e = window.requestAnimationFrame(() => r("idle"));
                    });
                return () => {
                    window.cancelAnimationFrame(t), 0 !== e && window.cancelAnimationFrame(e);
                };
            }
        }, [s, t]);
    let d = "exit" === s ? eP.t0 : "enterStart" === s ? eP.Rj : "";
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("span", { className: `${eP.xM} ${eP.nT} ${d}`, children: n }),
            (0, a.jsx)(ec.e, { shortcut: "tab", className: `${eP.xT} ${eP.nT} ${d}`, keyClassName: eP.IS }),
        ],
    });
}
let eO = 0;
function eD(e) {
    let {
            canSend: t,
            stopped: n,
            running: l,
            restoring: s = !1,
            onSend: r,
            onInterrupt: o,
            onUploadFile: c,
            onDeleteFile: d,
            onApprove: u,
            onRegionCapture: h,
            onImport: f,
            suggestion: p,
            questionOpen: g = !1,
            modelSettings: x,
            onModelSettingsChange: v,
        } = e,
        [b, j] = i.useState(""),
        y = (0, w.bG)([eA.Ay], () => eA.Ay.isSubmitButtonEnabled),
        [k, A] = i.useState([]),
        [N, E] = i.useState(!1),
        [S, C] = i.useState(!1),
        [I, T] = i.useState(!1);
    i.useEffect(() => {
        l || T(!1);
    }, [l]);
    let _ = i.useRef(null),
        M = i.useRef([]),
        L = i.useRef(new Set()),
        O = i.useRef(d);
    O.current = d;
    let D = i.useCallback((e) => {
            (M.current = e), A(e);
        }, []),
        $ = i.useCallback((e) => {
            O.current(e.id).catch((e) => {
                console.error("[vibegrations] attachment cleanup failed", e);
            });
        }, []);
    i.useEffect(() => {
        let e = L.current;
        return () => {
            for (let t of M.current)
                e.add(t.localId), null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && $(t.ref);
        };
    }, [$]);
    let F = i.useCallback(
            (e, t) => {
                if (L.current.has(e)) return;
                let n = M.current;
                n.some((t) => t.localId === e) && D(n.map((n) => (n.localId === e ? { ...n, ...t } : n)));
            },
            [D],
        ),
        G = i.useCallback(
            (e) => {
                if (0 === e.length) return;
                let t = [...M.current],
                    n = [];
                for (let l of e) {
                    let e = "" === l.type ? "application/octet-stream" : l.type,
                        a = ++eO,
                        i = { localId: a, name: l.name, size: l.size, contentType: e, status: "uploading" };
                    if (t.length >= eM) {
                        t.push({
                            ...i,
                            status: "error",
                            errorText: P.intl.formatToPlainString(R.default.DlX57a, { count: eM }),
                        });
                        continue;
                    }
                    if (!(0, ew.x5)(l.size, e)) {
                        t.push({
                            ...i,
                            status: "error",
                            errorText: P.intl.formatToPlainString(R.default.cI7t94, {
                                size: (0, ew.ZJ)((0, ew.yr)(e)),
                            }),
                        });
                        continue;
                    }
                    let s = ew.Wb.has(e) ? URL.createObjectURL(l) : void 0;
                    t.push({ ...i, previewUrl: s }), n.push({ file: l, localId: a });
                }
                for (let { file: e, localId: l } of (D(t), n))
                    c(e).then(
                        (e) => {
                            L.current.has(l) ? $(e) : F(l, { status: "ready", ref: e });
                        },
                        (e) => {
                            L.current.has(l) ||
                                (console.error("[vibegrations] attachment upload failed", e),
                                F(l, { status: "error", errorText: P.intl.string(R.default.GwEHvn) }));
                        },
                    );
            },
            [$, c, F, D],
        ),
        U = i.useCallback(async () => {
            if (null != h && !S) {
                C(!0);
                try {
                    let e = await h();
                    null != e && G([e]);
                } catch (e) {
                    console.error("[vibegrations] region capture failed", e),
                        D([
                            ...M.current,
                            {
                                localId: ++eO,
                                name: "preview-capture.png",
                                size: 0,
                                contentType: "image/png",
                                status: "error",
                                errorText: P.intl.string(R.default["4DQd7d"]),
                            },
                        ]);
                } finally {
                    C(!1);
                }
            }
        }, [h, S, G, D]),
        q = i.useCallback(
            (e) => {
                let t = M.current,
                    n = t.find((t) => t.localId === e);
                L.current.add(e),
                    n?.previewUrl != null && URL.revokeObjectURL(n.previewUrl),
                    n?.ref != null && $(n.ref),
                    D(t.filter((t) => t.localId !== e));
            },
            [$, D],
        ),
        B = k.every((e) => "ready" === e.status),
        H = "" !== b.trim() || k.length > 0,
        V = t && H && B,
        z = i.useCallback(() => {
            if (!V) return;
            let e = M.current.filter((e) => null != e.ref).map((e) => e.ref);
            for (let t of (r(b, e.length > 0 ? e : void 0), M.current))
                null != t.previewUrl && URL.revokeObjectURL(t.previewUrl);
            j(""), D([]);
        }, [V, b, r, D]),
        W = i.useCallback(
            (e) => {
                e.preventDefault(), z();
            },
            [z],
        ),
        Y = i.useCallback(() => {
            null == o || I || (T(!0), o());
        }, [o, I]),
        K = i.useCallback(
            (e) => {
                if ("Escape" === e.key && l && null != o && !I) {
                    e.preventDefault(), e.stopPropagation(), Y();
                    return;
                }
                if ("Tab" === e.key && !e.shiftKey && null != p && "" === b) {
                    e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), j(p);
                    return;
                }
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != u && (e.preventDefault(), u());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), z());
            },
            [z, u, l, o, I, Y, p, b],
        ),
        X = i.useCallback(
            (e) => {
                if (!t) return;
                let n = Array.from(e.clipboardData.files);
                0 !== n.length && (e.preventDefault(), G(n));
            },
            [t, G],
        ),
        Z = i.useCallback(
            (e) => {
                e.preventDefault(), E(!1), t && G(Array.from(e.dataTransfer.files));
            },
            [t, G],
        ),
        Q = i.useCallback((e) => {
            e.dataTransfer.types.includes("Files") && (e.preventDefault(), E(!0));
        }, []),
        J = i.useCallback(
            (e) => {
                G(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = "");
            },
            [G],
        ),
        ee = i.useRef(null),
        et = i.useRef(null),
        [en, el] = i.useState(0),
        [ea, ei] = i.useState(!1);
    i.useEffect(() => {
        if (0 === b.length) return void ei(!1);
        let e = ee.current?.querySelector("textarea");
        if (null != e) {
            let t = eF(e);
            null != t && el(t);
        }
        ei(!0);
        let t = setTimeout(() => ei(!1), e$);
        return () => clearTimeout(t);
    }, [b]);
    let es = i.useMemo(() => ({ "--custom-glow-x": `${en}px` }), [en]),
        er = ea ? ` ${eP.EB}` : "",
        eo = !s && null != p && "" === b;
    return (0, a.jsxs)("form", {
        onSubmit: W,
        onDrop: Z,
        onDragOver: Q,
        onDragLeave: () => E(!1),
        className: N ? `${eP.DA} ${eP.pV}` : eP.DA,
        children: [
            k.length > 0
                ? (0, a.jsx)("div", {
                      className: eP.lN,
                      children: k.map((e) => (0, a.jsx)(eG, { draft: e, onRemove: q }, e.localId)),
                  })
                : null,
            (0, a.jsxs)("div", {
                className: eP.VA,
                ref: ee,
                children: [
                    (0, a.jsx)("span", { className: `${eP.wg} ${eP.LP}${er}`, style: es, "aria-hidden": !0 }),
                    (0, a.jsx)("span", { className: `${eP.wg} ${eP.L3}${er}`, style: es, "aria-hidden": !0 }),
                    (0, a.jsx)("input", {
                        ref: _,
                        type: "file",
                        multiple: !0,
                        onChange: J,
                        className: eP.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    (0, a.jsx)(ed.Y, {
                        targetElementRef: et,
                        position: "top",
                        align: "left",
                        animation: ed.Y.Animation.NONE,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, a.jsx)(eu.W, {
                                "data-menu-migrated": !0,
                                navId: "vibegrations-composer-attach",
                                "aria-label": P.intl.string(P.t.d56gCa),
                                onClose: t,
                                onSelect: t,
                                children: (0, a.jsxs)(eh.rX, {
                                    children: [
                                        (0, a.jsx)(eh.Dr, {
                                            id: "upload-file",
                                            label: P.intl.string(P.t["d3+iYs"]),
                                            iconLeft: em.H,
                                            leadingAccessory: { type: "icon", icon: em.H },
                                            action: () => _.current?.click(),
                                        }),
                                        null != f
                                            ? (0, a.jsx)(eh.Dr, {
                                                  id: "import-project",
                                                  label: P.intl.string(R.default.edKajy),
                                                  iconLeft: ef.q,
                                                  leadingAccessory: { type: "icon", icon: ef.q },
                                                  action: f,
                                              })
                                            : null,
                                    ],
                                }),
                            });
                        },
                        children: (e, n) => {
                            let { isShown: l } = n;
                            return (0, a.jsx)("button", {
                                ...e,
                                ref: et,
                                type: "button",
                                className: `${eP.Y0} ${eP.nu}`,
                                disabled: !t,
                                "aria-label": P.intl.string(P.t.d56gCa),
                                "aria-haspopup": "menu",
                                "aria-expanded": l,
                                children: (0, a.jsx)(ep.PlusLargeIcon, {
                                    size: "refresh_sm",
                                    color: "currentColor",
                                    className: eP.Qu,
                                }),
                            });
                        },
                    }),
                    eo
                        ? (0, a.jsx)("div", {
                              className: eP.ar,
                              "aria-hidden": "true",
                              children: (0, a.jsx)(eL, { text: p }),
                          })
                        : null,
                    (0, a.jsx)(eg.y, {
                        value: b,
                        onChange: (e) => j(e.currentTarget.value),
                        onKeyDown: K,
                        onPaste: X,
                        placeholder: s
                            ? P.intl.string(R.default.pGFXZ0)
                            : n
                              ? P.intl.string(R.default.JeM47J)
                              : t
                                ? eo
                                    ? ""
                                    : g
                                      ? P.intl.string(R.default.M3ovXY)
                                      : P.intl.string(l ? R.default["67PpcP"] : R.default.ahRdoJ)
                                : P.intl.string(R.default.nm4w9P),
                        disabled: !t,
                        "aria-label": P.intl.string(R.default.OPr66w),
                        rows: 1,
                        className: eP.jp,
                    }),
                    (0, a.jsxs)("div", {
                        className: eP.Sz,
                        children: [
                            (0, a.jsx)(ex.m, {
                                text: P.intl.string(R.default.B5gWPk),
                                ariaHidden: !0,
                                children: (0, a.jsx)("button", {
                                    type: "button",
                                    className: eP.Y0,
                                    disabled: null == h || !t || S,
                                    onClick: U,
                                    "aria-label": P.intl.string(R.default.B5gWPk),
                                    children: S
                                        ? (0, a.jsx)(m.y, { type: m.t.SPINNING_CIRCLE_SIMPLE, className: eP.Rk })
                                        : (0, a.jsx)(ev.K, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                }),
                            }),
                            l && null != o
                                ? (0, a.jsx)(ex.m, {
                                      text: P.intl.string(R.default.KdgI4k),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)("button", {
                                          type: "button",
                                          className: eP.AW,
                                          disabled: I,
                                          onClick: Y,
                                          "aria-label": P.intl.string(R.default.KdgI4k),
                                          children: (0, a.jsx)(eb.w, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : null != x && null != v
                                  ? (0, a.jsx)(eR.A, {
                                        settings: x.settings,
                                        choices: x.choices,
                                        disabled: !t,
                                        onChange: v,
                                        className: `${eP.Y0} ${eP.Il}`,
                                        icon: (0, a.jsx)(ej.R, {
                                            size: "custom",
                                            width: 20,
                                            height: 20,
                                            color: "currentColor",
                                        }),
                                    })
                                  : null,
                        ],
                    }),
                    y
                        ? (0, a.jsxs)("div", {
                              className: eP.fF,
                              children: [
                                  (0, a.jsx)("div", { className: eP.MT }),
                                  (0, a.jsx)("button", {
                                      type: "submit",
                                      className: eP.rt,
                                      disabled: !V,
                                      "aria-label": P.intl.string(R.default["22GHMt"]),
                                      children: (0, a.jsx)(ey.SendMessageIcon, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
        ],
    });
}
let e$ = 1500;
function eF(e) {
    let t = (eF.canvas ?? (eF.canvas = document.createElement("canvas"))).getContext("2d");
    if (null == t) return null;
    let n = window.getComputedStyle(e);
    t.font = `${n.fontStyle} ${n.fontWeight} ${n.fontSize} ${n.fontFamily}`;
    let l = e.value.slice(0, e.selectionStart ?? e.value.length),
        a = l.slice(l.lastIndexOf("\n") + 1),
        i = parseFloat("" !== n.paddingInlineStart ? n.paddingInlineStart : "" !== n.paddingLeft ? n.paddingLeft : "0");
    return e.offsetLeft + i + t.measureText(a).width - e.scrollLeft;
}
function eG(e) {
    let { draft: t, onRemove: n } = e;
    return (0, a.jsxs)(eT, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(b.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(m.y, { type: m.t.SPINNING_CIRCLE_SIMPLE, className: eP.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: eP.o1,
                onClick: () => n(t.localId),
                "aria-label": P.intl.string(R.default["3HWvgk"]),
                children: (0, a.jsx)(ek.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
eF.canvas = null;
var eU = n(287809);
let eq = {
    assembling: R.default["9G3ZmA"],
    installing_deps: R.default.VZuRug,
    building: R.default["s+ylXP"],
    bundling: R.default.rEQlMx,
    committing: R.default.Yvyw1H,
    built: R.default.hOcVAj,
    build_error: R.default["6L9Vwt"],
    healthchecking: R.default.sz8yAj,
    awaiting_auth: R.default["orD+xo"],
    healthcheck_passed: R.default["x+sqTG"],
    healthcheck_failed: R.default.FUWbq1,
    deploying: R.default.wcXX8Z,
    preview_ready: R.default["78YNh7"],
    working: R.default.nv6pUM,
    error: R.default.j3hBoA,
};
function eB(e) {
    if (null != e.labelText && "" !== e.labelText) return e.labelText;
    let t = null != e.labelKey ? eq[e.labelKey] : void 0;
    return P.intl.string(t ?? R.default.nv6pUM);
}
function eH(e) {
    let t;
    for (let n of e) (null == t || n.touched > t.touched) && (t = n);
    return t;
}
function eV(e) {
    return (
        "node" === e.kind &&
        null != e.node &&
        null == e.task_id &&
        ("task" === e.node.node_kind || "task" === e.node.id)
    );
}
n(134528), n(947204);
var ez = n(46054),
    eW = n(13699);
function eY(e) {
    let { className: t, size: n = 20 } = e;
    return (0, a.jsxs)("svg", {
        className: t,
        width: n,
        height: n,
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": !0,
        focusable: !1,
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, a.jsx)("path", {
                fill: "currentColor",
                d: "M12.37 9.04c.25-.26.73-.2 1.06.13L15 10.7c.33.33.39.8.13 1.06L4.92 21.84c-.27.26-.74.2-1.07-.13l-1.56-1.54c-.33-.32-.39-.8-.13-1.05l10.2-10.08ZM16.09 5.16c.25-.26.73-.2 1.06.13l1.56 1.54c.33.32.39.8.13 1.05l-2.1 2.08c-.26.25-.74.2-1.07-.13l-1.56-1.54c-.33-.33-.38-.8-.13-1.05l2.1-2.08Z",
            }),
            (0, a.jsx)("path", {
                fill: "currentColor",
                d: "M7.6 2.32a.5.5 0 0 1 .94 0L9.17 4l1.66.62a.5.5 0 0 1 0 .93l-1.66.63-.63 1.66a.5.5 0 0 1-.93 0l-.63-1.66-1.66-.63a.5.5 0 0 1 0-.93l1.66-.62.63-1.67Z",
                className: r()(eW.Z$, eW.KH),
            }),
            (0, a.jsx)("path", {
                fill: "currentColor",
                d: "M17.48 14.36a.56.56 0 0 1 1.04 0l.85 2.27 2.27.85c.48.18.48.86 0 1.04l-2.27.85-.85 2.27a.56.56 0 0 1-1.04 0l-.85-2.27-2.27-.85a.56.56 0 0 1 0-1.04l2.27-.85.85-2.27Z",
                className: r()(eW.Z$, eW.Q_),
            }),
        ],
    });
}
var eK = n(847374),
    eX = n(320448);
let eZ = i.createContext(0);
function eQ(e) {
    let { glyph: t, line: n, live: l, settled: s, tint: o, detail: c, connected: d = !1, connectsDown: u = !1 } = e,
        [h, m] = i.useState(!1),
        f = i.useContext(eZ),
        p = i.useId(),
        g = i.useCallback(() => m((e) => !e), []),
        { text: x, phase: v } = (function (e) {
            let [t, n] = i.useState(e),
                [l, a] = i.useState("idle"),
                [s, r] = i.useState(e);
            return (
                s !== e && (r(e), a(e === t ? "idle" : "exit")),
                i.useEffect(() => {
                    if ("exit" !== l) return;
                    let e = setTimeout(() => {
                        n(s), a("enter");
                    }, 150);
                    return () => clearTimeout(e);
                }, [l, s]),
                i.useEffect(() => {
                    if ("enter" !== l) return;
                    let e = 0,
                        t = requestAnimationFrame(() => {
                            e = requestAnimationFrame(() => a("idle"));
                        });
                    return () => {
                        cancelAnimationFrame(t), cancelAnimationFrame(e);
                    };
                }, [l]),
                { text: t, phase: l }
            );
        })(n),
        j = h ? eK.a : eX._,
        y = null != c,
        k = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("span", { className: eW.hd, children: t }),
                (0, a.jsx)(b.E, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "currentColor",
                    className: r()(eW.qo, { [eW._q]: "exit" === v, [eW.GD]: "enter" === v }),
                    children: x,
                }),
                y ? (0, a.jsx)(j, { size: "xs", color: "currentColor", className: eW.nD }) : null,
            ],
        }),
        A = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("span", { className: eW.$m, children: k }, `face-${f}`),
                l
                    ? (0, a.jsx)("span", { className: r()(eW.$m, eW.pw), "aria-hidden": !0, children: k }, `shine-${f}`)
                    : null,
            ],
        });
    return (0, a.jsxs)("li", {
        className: eW.K1,
        "data-live": l,
        "data-settled": s,
        "data-connected": d,
        "data-connects-down": u,
        style: null != o ? { "--custom-vibegrations-shimmer-tint": o } : void 0,
        children: [
            y
                ? (0, a.jsx)(eE.D, {
                      tag: "div",
                      className: r()(eW.ep, eW.EK),
                      "aria-expanded": h,
                      "aria-controls": p,
                      "aria-label": P.intl.formatToPlainString(R.default.s1wx5H, { activity: x }),
                      onClick: g,
                      children: A,
                  })
                : (0, a.jsx)("div", { className: eW.ep, children: A }),
            (0, a.jsx)("div", { id: p, hidden: !h, className: eW.BA, children: c }),
        ],
    });
}
var eJ = n(256905);
let e0 = /^(.*?)\s*\((\+\d+)?[\s,]*([\u2212-]\d+)?\)$/,
    e1 =
        /^(.*?)\s*\((\d+ lines?|\d+ match(?:es)?|no matches|\d+ files?|empty|no logs yet|\d+ not found(?:, \d+ read-only)?|\d+ read-only|\d+KB)\)$/,
    e2 =
        /^(Reading|Writing|Editing|Listing|Searching|Deleting|Running|Downloading|Saving|Sending|Importing|Imported|Building|Viewing|Loaded|Updating|Registering|Collecting)(?= )/,
    e6 = {
        "text-xs/normal": "text-xs/semibold",
        "text-sm/normal": "text-sm/semibold",
        "text-md/normal": "text-md/semibold",
    };
function e3(e, t) {
    let n = e2.exec(e);
    return null == n
        ? e
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(b.E, { tag: "span", variant: e6[t], color: "none", children: n[1] }),
                  e.slice(n[1].length),
              ],
          });
}
function e7(e) {
    let { text: t, variant: n } = e,
        l = e0.exec(t),
        i = l?.[2],
        s = l?.[3];
    if (null != l && (null != i || null != s))
        return (0, a.jsxs)(a.Fragment, {
            children: [
                e3(l[1], n),
                null == i ? null : (0, a.jsxs)("span", { className: eW.MM, children: [" ", i] }),
                null == s ? null : (0, a.jsxs)("span", { className: eW.ie, children: [" ", s] }),
            ],
        });
    let r = e1.exec(t);
    return null == r
        ? e3(t, n)
        : (0, a.jsxs)(a.Fragment, {
              children: [e3(r[1], n), (0, a.jsxs)("span", { className: eW.qZ, children: [" ", r[2]] })],
          });
}
var e5 = n(229775);
function e4(e) {
    let { projectId: t, node: n, presentation: l = "row", active: s = !1 } = e,
        [o, c] = i.useState(!1),
        d = i.useId(),
        u = i.useCallback(() => c((e) => !e), []),
        h = eB(n),
        m = n.detail,
        f = "failed" === n.status ? "text-feedback-critical" : "detail" === l ? "text-muted" : "text-default",
        p = "text-muted" === f,
        g = s && p ? "none" : o && p ? "currentColor" : f,
        x = r()(eW.iq, { [e5.Hz]: s && p }),
        v = "detail" === l ? "text-md/normal" : "text-sm/normal",
        j = "detail" === l ? "text-sm/normal" : "text-xs/normal",
        y = null != t ? n.screenshots : [];
    if (0 === m.length && 0 === y.length)
        return (0, a.jsx)("li", {
            "data-step-kind": n.labelKey ?? "step",
            className: eW.Dx,
            children: (0, a.jsx)(b.E, {
                tag: "div",
                variant: v,
                color: g,
                selectable: !0,
                className: x,
                children: (0, a.jsx)(e7, { text: h, variant: v }),
            }),
        });
    let k = o ? eK.a : eX._;
    return (0, a.jsxs)("li", {
        "data-step-kind": n.labelKey ?? "step",
        className: eW.Dx,
        children: [
            (0, a.jsxs)(eE.D, {
                tag: "div",
                className: eW.kG,
                "aria-expanded": o,
                "aria-controls": d,
                "aria-label": P.intl.formatToPlainString(R.default.z4KWsN, { step: h }),
                onClick: u,
                children: [
                    (0, a.jsx)(b.E, {
                        tag: "span",
                        variant: v,
                        color: g,
                        className: x,
                        children: (0, a.jsx)(e7, { text: h, variant: v }),
                    }),
                    (0, a.jsx)(k, { size: "xs", color: "currentColor", className: eW.Ue }),
                ],
            }),
            (0, a.jsxs)("div", {
                id: d,
                hidden: !o,
                className: eW.yJ,
                children: [
                    m.map((e, t) =>
                        (0, a.jsx)(
                            b.E,
                            {
                                tag: "div",
                                variant: j,
                                color: s && p ? "none" : "text-muted",
                                selectable: !0,
                                className: r()({ [e5.Hz]: s && p }),
                                children: (0, a.jsx)(e7, { text: e, variant: j }),
                            },
                            t,
                        ),
                    ),
                    null != t && y.length > 0
                        ? (0, a.jsx)("div", {
                              className: eW.y8,
                              children: y.map((e) => (0, a.jsx)(e9, { projectId: t, screenshotId: e }, e)),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function e8() {}
function e9(e) {
    let { projectId: t, screenshotId: n } = e,
        [l, s] = i.useState(null),
        [r, o] = i.useState(!1);
    i.useEffect(() => {
        let e = !1;
        return (
            (0, h.aF)(t, n).then(
                (t) => {
                    e || s(t);
                },
                () => {
                    e || o(!0);
                },
            ),
            () => {
                e = !0;
            }
        );
    }, [t, n]);
    let c = P.intl.string(R.default["3Hq9pQ"]),
        d = i.useCallback(() => {
            (0, h.aF)(t, n).then((e) => {
                (0, eJ.R)({
                    items: [{ type: "IMAGE", url: e, alt: c }],
                    startingIndex: 0,
                    shouldHideMediaOptions: !0,
                    location: "VibegrationsChat",
                });
            }, e8);
        }, [t, n, c]);
    return r ? null : (0, a.jsx)(e_, { name: c, thumbSrc: l, ariaLabel: c, onClick: d, onThumbError: () => o(!0) });
}
function te(e) {
    let { projectId: t, steps: n, fallbackLabel: l, live: i, durationMs: s, connectsDown: r = !1 } = e,
        o = eH(n),
        c = i ? void 0 : s,
        d =
            null != c
                ? (function (e) {
                      let t = Math.max(1, Math.round(e / 1e3));
                      if (t < 60) return P.intl.formatToPlainString(R.default["49T8W0"], { count: t });
                      let n = Math.round(t / 60);
                      return n < 60
                          ? P.intl.formatToPlainString(R.default.NkZO2t, { count: n })
                          : P.intl.formatToPlainString(R.default["2qYUUZ"], {
                                hours: Math.floor(n / 60),
                                minutes: n % 60,
                            });
                  })(c)
                : null != o
                  ? eB(o)
                  : (l ?? P.intl.string(R.default.nv6pUM)),
        u = n.length > 1 || n.some((e) => e.detail.length > 0 || e.screenshots.length > 0);
    return (0, a.jsx)(eQ, {
        glyph: (0, a.jsx)(eY, {}),
        line: d,
        live: i,
        settled: null != c,
        connectsDown: r,
        detail: u
            ? (0, a.jsx)("ol", {
                  className: eW.dO,
                  children: n.map((e) =>
                      (0, a.jsx)(e4, { projectId: t, node: e, presentation: "detail", active: i && e === o }, e.id),
                  ),
              })
            : void 0,
    });
}
var tt = n(478016),
    tn = n(34136);
function tl(e) {
    let { title: t, trailing: n, children: l, className: i, headerClassName: s, ...o } = e;
    return (0, a.jsxs)("section", {
        className: r()(tn.N, i),
        ...o,
        children: [
            (0, a.jsxs)("header", {
                className: r()(tn.w, s),
                children: [
                    (0, a.jsx)(b.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var ta = n(113757);
function ti(e) {
    let { idea: t, selected: n, onPick: l } = e,
        s = i.useId(),
        o = null == l;
    return (0, a.jsxs)(eE.D, {
        className: r()(ta.nM, { [ta.f1]: o, [ta.CZ]: n }),
        onClick: o ? void 0 : () => l(t),
        "aria-label": P.intl.formatToPlainString(R.default.pztRGi, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : s,
        "aria-disabled": o,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: ta.jo,
                children: [
                    n
                        ? (0, a.jsx)(tt.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: ta.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(b.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: ta.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, a.jsx)(b.E, {
                      tag: "div",
                      id: s,
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function ts(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [s, r] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                r((t) => new Set(t).add(e.id)), l?.(e);
            },
            [l],
        );
    return (0, a.jsx)(tl, {
        title: P.intl.string(R.default.DAvYsi),
        "data-vibegrations-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                ti,
                { idea: e, selected: s.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var tr = n(375068);
function to(e) {
    let { projectId: t, attachments: n } = e,
        l = n.filter(tc);
    return (0, a.jsx)("div", {
        className: tr.KT,
        children: n.map((e, n) =>
            null == e.id
                ? (0, a.jsx)(td, { name: e.name }, n)
                : tc(e)
                  ? (0, a.jsx)(th, { projectId: t, viewableImages: l, viewerIndex: l.indexOf(e) }, n)
                  : (0, a.jsx)(tu, { projectId: t, id: e.id, name: e.name }, n),
        ),
    });
}
function tc(e) {
    return null != e.id && ew.Wb.has(e.content_type);
}
function td(e) {
    let { name: t, unavailable: n = !1 } = e,
        l = n ? P.intl.formatToPlainString(R.default.OBr7WW, { name: t }) : t;
    return (0, a.jsx)(eT, { name: l, compact: !0 });
}
function tu(e) {
    let { projectId: t, id: n, name: l } = e,
        [s, r] = i.useState(!1);
    i.useEffect(() => {
        let e = !1;
        return (
            (0, h.n6)(t, n).then(
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
    let o = i.useCallback(() => {
        Promise.all([(0, h.n6)(t, n), (0, h.PK)(t, n, { download: !0 })]).then(
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
        ? (0, a.jsx)(td, { name: l, unavailable: !0 })
        : (0, a.jsx)(e_, {
              name: l,
              thumbSrc: null,
              ariaLabel: P.intl.formatToPlainString(R.default.gV5YcR, { name: l }),
              onClick: o,
          });
}
function th(e) {
    let { projectId: t, viewableImages: n, viewerIndex: l } = e,
        { id: s, name: r } = n[l],
        [o, c] = i.useState(null),
        [d, u] = i.useState(!1);
    i.useEffect(() => {
        let e = !1;
        return (
            Promise.all([(0, h.n6)(t, s), (0, h.PK)(t, s)]).then(
                (t) => {
                    let [n, l] = t;
                    e || (n ? c(l) : u(!0));
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
                Promise.all([(0, h.n6)(t, e.id), (0, h.PK)(t, e.id)]).then(
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
                ? u(!0)
                : "error" !== t &&
                  (0, eJ.R)({
                      items: e.filter((e) => "string" != typeof e),
                      startingIndex: e.slice(0, l).filter((e) => "string" != typeof e).length,
                      shouldHideMediaOptions: !0,
                      location: "VibegrationsChat",
                  });
        });
    }, [t, n, l]);
    return d
        ? (0, a.jsx)(td, { name: r, unavailable: !0 })
        : (0, a.jsx)(e_, {
              name: r,
              thumbSrc: o,
              ariaLabel: P.intl.formatToPlainString(R.default.QUFLUq, { name: r }),
              onClick: m,
              onThumbError: () => {
                  c(null),
                      (0, h.n6)(t, s).then(
                          (e) => {
                              e || u(!0);
                          },
                          () => {},
                      );
              },
          });
}
var tm = n(430392),
    tf = n(824757);
function tp(e) {
    let { label: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: tf.uW,
        children: [(0, a.jsx)(b.E, { variant: "text-xs/medium", color: "text-muted", tag: "span", children: t }), n],
    });
}
function tg(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)(tp, {
              label: t,
              children: (0, a.jsx)("div", {
                  className: tf.Ip,
                  children: n.map((e) =>
                      (0, a.jsx)(
                          "span",
                          {
                              className: tf.jw,
                              children: (0, a.jsx)(b.E, {
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
          });
}
function tx(e) {
    let { isActivity: t } = e,
        n = t ? G.k : tm.RobotIcon;
    return (0, a.jsxs)("span", {
        className: tf.L6,
        children: [
            (0, a.jsx)(n, { size: "custom", width: 16, height: 16, color: "currentColor", "aria-hidden": !0 }),
            (0, a.jsx)(b.E, {
                variant: "text-sm/medium",
                color: "text-subtle",
                tag: "span",
                children: P.intl.string(t ? P.t.IC5Ann : R.default.oNtdYP),
            }),
        ],
    });
}
function tv(e) {
    let { proposal: t } = e;
    return (0, a.jsx)(tl, {
        title: P.intl.string(R.default["60htw+"]),
        trailing: (0, a.jsx)(tx, { isActivity: !0 === t.is_activity }),
        headerClassName: tf.wx,
        "data-vibegrations-plan-card": !0,
        children: (0, a.jsxs)("div", {
            className: tf.rf,
            children: [
                (0, a.jsx)(b.E, {
                    variant: "experimental/body-md/normal",
                    color: "text-default",
                    selectable: !0,
                    children: t.summary,
                }),
                t.changes.length > 0
                    ? (0, a.jsx)(tp, {
                          label: P.intl.string(R.default.KLyB8Y),
                          children: (0, a.jsx)("ul", {
                              className: tf.p_,
                              children: t.changes.map((e, t) =>
                                  (0, a.jsx)(
                                      "li",
                                      {
                                          className: tf.Aw,
                                          children: (0, a.jsx)(b.E, {
                                              variant: "experimental/body-md/normal",
                                              color: "text-default",
                                              tag: "span",
                                              selectable: !0,
                                              children: e,
                                          }),
                                      },
                                      t,
                                  ),
                              ),
                          }),
                      })
                    : null,
                t.commands.length > 0
                    ? (0, a.jsx)(tp, {
                          label: P.intl.string(P.t["0hKkS+"]),
                          children: (0, a.jsx)("ul", {
                              className: tf.p_,
                              children: t.commands.map((e, t) =>
                                  (0, a.jsxs)(
                                      "li",
                                      {
                                          className: tf.uX,
                                          children: [
                                              (0, a.jsxs)(b.E, {
                                                  variant: "experimental/body-md/medium",
                                                  color: "text-default",
                                                  tag: "span",
                                                  selectable: !0,
                                                  children: ["launch" === e.kind ? "\u21EA " : "", "/", e.name],
                                              }),
                                              (0, a.jsx)(b.E, {
                                                  variant: "experimental/body-md/normal",
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
                      })
                    : null,
                (0, a.jsx)(tg, { label: P.intl.string(R.default.ieqTtP), names: t.bot_permissions ?? [] }),
                (0, a.jsx)(tg, { label: P.intl.string(R.default.Cn9qix), names: t.privileged_intents ?? [] }),
            ],
        }),
    });
}
var tb = n(192308),
    tj = n(479191);
function ty(e) {
    let { projectId: t, request: l } = e,
        s = i.useCallback(() => {
            (0, tb.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("338013"), n.e("468421")]).then(n.bind(n, 539620));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: l });
            });
        }, [t, l]);
    return (0, a.jsxs)("article", {
        className: tj.Lo,
        children: [
            (0, a.jsx)(b.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: P.intl.string(R.default["/e28TK"]),
            }),
            (0, a.jsx)(b.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: null != l.note && "" !== l.note ? l.note : P.intl.string(R.default.jxvtin),
            }),
            (0, a.jsx)("div", {
                className: tj.cS,
                children: l.fields.map((e) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: tj.$H,
                            children: (0, a.jsx)(b.E, {
                                variant: "text-xs/medium",
                                color: "text-default",
                                tag: "span",
                                children: e.label,
                            }),
                        },
                        e.name,
                    ),
                ),
            }),
            (0, a.jsx)("div", {
                className: tj.sq,
                children: (0, a.jsx)(f.$, {
                    variant: "secondary",
                    size: "sm",
                    onClick: s,
                    text: P.intl.string(R.default["gVV+HX"]),
                }),
            }),
        ],
    });
}
var tk = n(976814),
    tA = n(973e3);
function tw(e) {
    let { projectId: t, request: n } = e,
        l = (0, w.bG)([h.Ay], () => h.Ay.getSettings(t)),
        s = (n.keys ?? []).map((e) => l?.schema.find((t) => t.key === e)).filter((e) => null != e),
        r = i.useCallback(() => {
            (0, tk.A)(t, { scopeKeys: n.keys, note: n.note, notifyAgent: !0 });
        }, [t, n]);
    return (0, a.jsxs)("article", {
        className: tA.Mk,
        children: [
            (0, a.jsx)(b.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: P.intl.string(R.default.wgDhiQ),
            }),
            (0, a.jsx)(b.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: null != n.note && "" !== n.note ? n.note : P.intl.string(R.default["V+DBhs"]),
            }),
            s.length > 0
                ? (0, a.jsx)("div", {
                      className: tA.R6,
                      children: s.map((e) =>
                          (0, a.jsx)(
                              "span",
                              {
                                  className: tA.K4,
                                  children: (0, a.jsx)(b.E, {
                                      variant: "text-xs/medium",
                                      color: "text-default",
                                      tag: "span",
                                      children: e.label,
                                  }),
                              },
                              e.key,
                          ),
                      ),
                  })
                : null,
            (0, a.jsx)("div", {
                className: tA.p0,
                children: (0, a.jsx)(f.$, {
                    variant: "secondary",
                    size: "sm",
                    onClick: r,
                    text: P.intl.string(R.default["KO2xN+"]),
                }),
            }),
        ],
    });
}
function tN(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function tE(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function tS(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function tC(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function tI(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function tT(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function t_(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function tR(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function tP(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function tM(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function tL(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: s = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/96552954edc2aaf6953969b70c978f2601341c8c90edbc90e605e0392cada677.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function tO() {
    return [
        { key: "snail", Illocon: tN, tint: "var(--illo-yellow-40)", name: tD(R.default["2l3AEQ"]) },
        { key: "goat", Illocon: tE, tint: "var(--illo-orange-40)", name: tD(R.default["+FPL+I"]) },
        { key: "frog", Illocon: tS, tint: "var(--illo-green-40)", name: tD(R.default.w4GOfR) },
        { key: "bunny", Illocon: tC, tint: "var(--illo-pink-40)", name: tD(R.default.XmZT9M) },
        { key: "cat", Illocon: tI, tint: "var(--illo-pink-40)", name: tD(R.default.NnydwQ) },
        { key: "caterpillar", Illocon: tT, tint: "var(--illo-green-40)", name: tD(R.default["4iXcNT"]) },
        { key: "butterfly", Illocon: t_, tint: "var(--illo-purple-40)", name: tD(R.default.DoTGt5) },
        { key: "dog", Illocon: tR, tint: "var(--illo-yellow-40)", name: tD(R.default["9zxqmP"]) },
        { key: "spider", Illocon: tP, tint: "var(--illo-orange-40)", name: tD(R.default.HF0T3L) },
        { key: "bee", Illocon: tM, tint: "var(--illo-yellow-40)", name: tD(R.default.XTzDga) },
        { key: "bot", Illocon: tL, tint: "var(--illo-purple-40)", name: tD(R.default.abtC2b) },
    ];
}
function tD(e) {
    return P.intl.string(e);
}
var t$ = n(683063);
function tF(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : P.intl.string(R.default.MdXWEK);
}
function tG(e) {
    let { lane: t, Illocon: n, tint: l, name: i, connectsDown: s } = e,
        r = t.task,
        o = "running" === r.status,
        c = eH(t.steps),
        d = o
            ? null != c
                ? eB(c)
                : tF(r)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(tF(e));
                  switch (e.status) {
                      case "failed":
                          return P.intl.formatToPlainString(R.default["5uv8y0"], { task: t });
                      case "cancelled":
                          return P.intl.formatToPlainString(R.default["oEzDO/"], { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return P.intl.formatToPlainString(R.default.vuv9bT, {
                                  task: t,
                                  duration: (function (e) {
                                      let t = Math.max(1, Math.round(e / 1e3));
                                      if (t < 60) return P.intl.formatToPlainString(R.default.RsOwXc, { count: t });
                                      let n = Math.round(t / 60);
                                      return n < 60
                                          ? P.intl.formatToPlainString(R.default["z+U4YX"], { count: n })
                                          : P.intl.formatToPlainString(R.default["7Q/vz0"], {
                                                hours: Math.floor(n / 60),
                                                minutes: n % 60,
                                            });
                                  })(e.durationMs),
                              });
                          return P.intl.formatToPlainString(R.default.KS49RN, { task: t });
                      default:
                          return P.intl.formatToPlainString(R.default.KS49RN, { task: t });
                  }
              })(r),
        u =
            0 === t.steps.length && 0 === r.detail.length
                ? void 0
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          t.steps.length > 0
                              ? (0, a.jsx)("ol", {
                                    className: eW.dO,
                                    children: t.steps.map((e) =>
                                        (0, a.jsx)(e4, { node: e, presentation: "detail", active: o && e === c }, e.id),
                                    ),
                                })
                              : null,
                          r.detail.map((e, t) => (0, a.jsx)("div", { className: eW.iq, children: e }, t)),
                      ],
                  });
    return (0, a.jsx)(eQ, {
        glyph: (0, a.jsx)(t$.u, {
            asset: (0, a.jsx)(n, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: tF(r),
            position: "left",
            children: (0, a.jsx)("span", {
                className: eW.nC,
                children: (0, a.jsx)(n, { size: 24, alt: "", ariaHidden: !0 }),
            }),
        }),
        line: d,
        live: o,
        settled: !o,
        tint: l,
        detail: u,
        connected: !0,
        connectsDown: s,
    });
}
var tU = n(820081),
    tq = n(329456);
function tB(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", {
        className: tq.Vn,
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
        children: "completed" === t ? (0, a.jsx)(tU.B, { size: "xxs", color: "currentColor" }) : null,
    });
}
function tH(e) {
    return { completed: e.filter((e) => "completed" === e.status).length, total: e.length };
}
function tV(e) {
    let { todos: t, provisional: n } = e;
    return (0, a.jsxs)("ul", {
        className: tq.zR,
        children: [
            t.map((e) =>
                (0, a.jsxs)(
                    "li",
                    {
                        className: tq.qN,
                        "data-status": e.status,
                        children: [
                            (0, a.jsx)(tB, { status: e.status }),
                            (0, a.jsx)(b.E, {
                                variant: "text-sm/normal",
                                color: "completed" === e.status ? "text-muted" : "text-default",
                                tag: "span",
                                className: tq.ku,
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
                      className: tq.qN,
                      "data-status": "pending",
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(tB, { status: "pending" }),
                          (0, a.jsx)(b.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              tag: "span",
                              className: tq.ku,
                              selectable: !0,
                              children: n,
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function tz(e) {
    let { todos: t, provisional: n, announceProgress: l = !0 } = e,
        { completed: i, total: s } = tH(t);
    return 0 === s
        ? null
        : (0, a.jsxs)("article", {
              className: tq.Rx,
              "data-vibegrations-todo-card": !0,
              children: [
                  (0, a.jsxs)("header", {
                      className: tq.Ye,
                      children: [
                          (0, a.jsx)(b.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: P.intl.string(R.default.qCRC6c),
                          }),
                          (0, a.jsx)("span", {
                              className: tq.mA,
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
                              children: (0, a.jsx)(b.E, {
                                  variant: "text-xs/medium",
                                  color: "text-muted",
                                  tag: "span",
                                  children: P.intl.formatToPlainString(R.default.bQvqly, { completed: i, total: s }),
                              }),
                          }),
                      ],
                  }),
                  (0, a.jsx)(tV, { todos: t, provisional: n }),
              ],
          });
}
var tW = n(165648);
function tY(e) {
    let { projectId: t, steps: n, active: l = !1, durationMs: s, interrupted: r = !1 } = e,
        o = i.useMemo(
            () =>
                (function (e) {
                    let t,
                        { turnActive: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        l = [],
                        a = new Map(),
                        i = new Map(),
                        s = 0;
                    function r(e, t) {
                        return { id: e, kind: t, detail: [], status: "running", screenshots: [], touched: 0 };
                    }
                    function o(e) {
                        let t = a.get(e);
                        if (null != t) return t;
                        let n = { taskId: e, task: r("task", "task"), steps: [] };
                        return a.set(e, n), n;
                    }
                    function c(e, n, a) {
                        if ("task" === a || "task" === n) return null != e ? o(e).task : (t = t ?? r("task", "task"));
                        let s = `${e ?? ""} ${n}`,
                            c = i.get(s);
                        if (null != c) return c;
                        let d = r(n, "step");
                        return i.set(s, d), null != e ? o(e).steps.push(d) : l.push(d), d;
                    }
                    for (let [t, n] of e.entries()) {
                        if ("node" === n.kind && null != n.node) {
                            let e = n.node,
                                t = c(n.task_id, e.id, e.node_kind ?? "step");
                            (t.touched = ++s),
                                null != e.label_key && (t.labelKey = e.label_key),
                                null != e.label_text && (t.labelText = e.label_text),
                                null != e.group_label && (t.groupLabel = e.group_label),
                                null != e.helper_name && (t.helperName = e.helper_name),
                                null != e.helper_mark && (t.helperMark = e.helper_mark),
                                null != e.detail && (t.detail = e.detail),
                                null != e.append_detail && (t.detail = [...t.detail, ...e.append_detail]),
                                null != e.status && (t.status = e.status),
                                null != e.duration && (t.durationMs = e.duration),
                                null != e.screenshots && (t.screenshots = e.screenshots);
                            continue;
                        }
                        if ("error" === n.kind || "terminal_error" === n.kind) {
                            let e = c(void 0, `${n.kind}-${t}`, "step");
                            (e.touched = ++s),
                                (e.labelKey = "error"),
                                (e.status = "failed"),
                                null != n.message && "" !== n.message && (e.detail = [n.message]);
                        }
                    }
                    let d = [...a.values()];
                    for (let e of d) n || "running" !== e.task.status || (e.task.status = "incomplete");
                    return { steps: l, tasks: d, ...(null != t ? { turn: t } : {}) };
                })(n, { turnActive: l }),
            [n, l],
        );
    if (r)
        return (0, a.jsx)("ol", {
            className: eW.pj,
            "data-live": !1,
            children: (0, a.jsx)(eQ, {
                glyph: (0, a.jsx)(eb.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: P.intl.string(R.default["5T7DSm"]),
                live: !1,
                settled: !0,
            }),
        });
    let c = l ? void 0 : (o.turn?.durationMs ?? s);
    if (0 === o.steps.length && 0 === o.tasks.length) return null;
    let d = o.tasks,
        u = (function (e) {
            let t = tO(),
                n = 0,
                l = e[0] ?? "";
            for (let e = 0; e < l.length; e++) n = (31 * n + l.charCodeAt(e)) % t.length;
            let a = new Map();
            return (
                e.forEach((e, l) => {
                    a.set(e, t[(n + l) % t.length]);
                }),
                a
            );
        })(d.map((e) => e.taskId)),
        h = l || d.some((e) => "running" === e.task.status);
    return (0, a.jsx)(eZ.Provider, {
        value: d.length,
        children: (0, a.jsxs)("ol", {
            className: eW.pj,
            "data-live": h,
            children: [
                (0, a.jsx)(te, {
                    projectId: t,
                    steps: o.steps,
                    fallbackLabel: d.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                    live: l,
                    durationMs: c,
                    connectsDown: d.length > 0,
                }),
                d.map((e, t) => {
                    var n;
                    let l =
                            null != e.task.helperMark
                                ? ((n = e.task.helperMark), tO().find((e) => e.key === n))
                                : void 0,
                        i = l ?? u.get(e.taskId);
                    return null == i
                        ? null
                        : (0, a.jsx)(
                              tG,
                              {
                                  lane: e,
                                  Illocon: i.Illocon,
                                  tint: i.tint,
                                  name: null != l && null != e.task.helperName ? e.task.helperName : i.name,
                                  connectsDown: t < d.length - 1,
                              },
                              e.taskId,
                          );
                }),
            ],
        }),
    });
}
function tK(e) {
    let {
            projectId: t,
            steps: n,
            content: l,
            proposal: s,
            todos: o,
            provisionalTodo: c,
            ideas: d,
            attachments: u,
            secretRequest: h,
            settingsRequest: m,
            onPickIdea: f,
            pickedIdeaIds: p,
            sideReply: g = !1,
        } = e,
        x = i.useMemo(
            () =>
                (function (e) {
                    let t = [],
                        n = null,
                        l = null;
                    for (let [i, s] of e.entries()) {
                        var a;
                        if (
                            "thinking" === s.kind ||
                            ((null == (a = s).task_id || "" === a.task_id) &&
                                ("error" === a.kind ||
                                    "terminal_error" === a.kind ||
                                    ("node" === a.kind && null != a.node && !eV(a))))
                        ) {
                            n = null;
                            continue;
                        }
                        if ("todos" === s.kind) {
                            if (null != s.task_id && "" !== s.task_id) continue;
                            let e = s.items ?? [];
                            if (0 === e.length) continue;
                            null != l
                                ? (l.todos = e)
                                : ((l = { type: "todos", key: `todos-${i}`, todos: e }), t.push(l));
                            continue;
                        }
                        if ("assistant_delta" !== s.kind || (null != s.task_id && "" !== s.task_id)) continue;
                        let e = s.message ?? "";
                        "" !== e &&
                            (null == n
                                ? ((n = { type: "message", key: `message-${i}`, content: e }), t.push(n))
                                : (n.content = e)),
                            !0 === s.message_finished && (n = null);
                    }
                    return t;
                })(n),
            [n],
        ),
        v = x.filter((e) => "message" === e.type).at(-1),
        j = !x.some((e) => "todos" === e.type) && null != o && o.length > 0 ? o : void 0,
        y = (function (e) {
            for (let t = e.length - 1; t >= 0; t--) {
                let n = e[t];
                if (null != n) {
                    if ("assistant_delta" === n.kind && null != n.message && "" !== n.message) return !0;
                    if (!eV(n) && ("node" === n.kind || "error" === n.kind || "terminal_error" === n.kind)) break;
                }
            }
            return !1;
        })(n),
        k = y && null != v && v.content.trim() === l.trim(),
        A = null == s && "" !== l && !k,
        w = (function (e) {
            let { hasAttachments: t, showsClosingMessage: n, endsOnStreamedMessage: l } = e;
            return t ? (n ? "closing" : l ? "streamed" : "standalone") : "none";
        })({ hasAttachments: null != u && u.length > 0, showsClosingMessage: A, endsOnStreamedMessage: y }),
        N = null == u ? null : (0, a.jsx)(to, { projectId: t, attachments: u }),
        E = null == N ? null : (0, a.jsx)("div", { className: eW.MT, children: N }),
        S = g
            ? (0, a.jsx)(b.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: P.intl.string(R.default.OAjkIT),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: eW.ue,
        children: [
            x.length > 0 || null != j
                ? (0, a.jsxs)("ol", {
                      className: eW.dO,
                      children: [
                          x.map((e) =>
                              "todos" === e.type
                                  ? (0, a.jsx)(
                                        "li",
                                        {
                                            className: r()(eW.ky, e5.XR),
                                            children: (0, a.jsx)(tz, { todos: e.todos, provisional: c }),
                                        },
                                        e.key,
                                    )
                                  : (0, a.jsxs)(
                                        "li",
                                        {
                                            className: eW.DV,
                                            children: [
                                                (0, a.jsx)("div", {
                                                    className: tW.PT,
                                                    children: ez.A.parse(e.content, !0, {
                                                        allowList: !0,
                                                        allowHeading: !0,
                                                        allowLinks: !0,
                                                    }),
                                                }),
                                                "streamed" === w && e === v ? E : null,
                                            ],
                                        },
                                        e.key,
                                    ),
                          ),
                          null != j
                              ? (0, a.jsx)("li", {
                                    className: r()(eW.ky, e5.XR),
                                    children: (0, a.jsx)(tz, { todos: j, provisional: c }),
                                })
                              : null,
                      ],
                  })
                : null,
            null != s
                ? (0, a.jsx)(tv, { proposal: s })
                : A
                  ? (0, a.jsxs)("div", {
                        className: r()(eW.ky, e5.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: r()(tW.PT, eW.cW),
                                children: ez.A.parse(l, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === w ? E : null,
                            S,
                        ],
                    })
                  : null,
            null != h
                ? (0, a.jsx)("div", {
                      className: r()(eW.ky, e5.XR),
                      children: (0, a.jsx)(ty, { projectId: t, request: h }),
                  })
                : null,
            null != m
                ? (0, a.jsx)("div", {
                      className: r()(eW.ky, e5.XR),
                      children: (0, a.jsx)(tw, { projectId: t, request: m }),
                  })
                : null,
            "standalone" === w ? N : null,
            null != d && d.length > 0 ? (0, a.jsx)(ts, { ideas: d, pickedIdeaIds: p, onPick: f }) : null,
            A ? null : S,
        ],
    });
}
var tX = n(320095),
    tZ = n(963852),
    tQ = n(521981),
    tJ = n(763754),
    t0 = n(491182),
    t1 = n(622868),
    t2 = n(308334),
    t6 = n(837528),
    t3 = n(375199),
    t7 = n(715628),
    t5 = n(752636),
    t4 = n(9842),
    t8 = n(589022),
    t9 = n(95701),
    ne = n(994500),
    nt = n(967198),
    nn = n(441136);
let nl = (0, t9.createChannelRecord)({ id: "vibegrations-builder", type: C.rbe.DM }),
    na = {
        id: "vibegrations-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function ni(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: r()(nn.Yq, { [nn.x1]: t }), children: e });
}
function ns(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function nr(e, t) {
    let { content: n } = (0, t3.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        l = i.useMemo(() => ({ message: e, channel: nl, compact: !1, groupId: e.id }), [e]);
    return "" !== t ? (0, t7.A)(l, n) : null;
}
function no(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        s = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        r = (0, t6.m)(e, nl, t.usernameProfile, l),
        o = (0, t6.Jo)(t.avatarProfile, l),
        c = (0, w.bG)([nt.A], () => nt.A.getGuildId()),
        d = (0, w.bG)([eU.default], () => eU.default.getCurrentUser()),
        u = i.useCallback(
            (t) => {
                let n = eU.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, a.jsx)(t8.A, { ...t, user: n, currentUser: d, guildId: c ?? void 0 });
            },
            [d, c, e.author],
        );
    return {
        showAvatarPopout: t.avatarProfile,
        showUsernamePopout: t.usernameProfile,
        onClickAvatar: o,
        onClickUsername: r,
        onPopoutRequestClose: s,
        renderPopout: u,
        guildId: c ?? void 0,
    };
}
function nc(e) {
    let { baseMessage: t, referenced: n, onJumpToReplied: l } = e,
        s = i.useMemo(
            () => ("" !== n.content ? (0, tQ.Ay)(n, { formatInline: !0, allowGameMentions: !0 }).content : null),
            [n],
        ),
        { isReplyAuthorBlocked: r, isReplyAuthorIgnored: o } = (0, w.cf)(
            [ne.A],
            () => ({
                isReplyAuthorBlocked: ne.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: ne.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        c = (0, tJ.X4)(n),
        d = (0, tJ.X4)(t),
        u = no(n);
    return (0, a.jsx)(t2.A, {
        repliedAuthor: c,
        baseAuthor: d,
        baseMessage: t,
        channel: nl,
        referencedMessage: { state: t4.a.LOADED, message: n },
        content: s,
        compact: !1,
        isReplyAuthorBlocked: r,
        isReplyAuthorIgnored: o,
        isReplySpineClickable: null != l,
        showReplySpine: !0,
        renderPopout: u.renderPopout,
        showAvatarPopout: u.showAvatarPopout,
        showUsernamePopout: u.showUsernamePopout,
        onClickAvatar: u.onClickAvatar,
        onClickUsername: u.onClickUsername,
        onClickReply: l,
        onPopoutRequestClose: u.onPopoutRequestClose,
    });
}
function nd(e) {
    let { message: t, author: n } = e,
        l = no(t);
    return (0, a.jsx)(t1.Ay, {
        message: t,
        channel: nl,
        author: n,
        guildId: l.guildId,
        subscribeToGroupId: t.id,
        renderPopout: l.renderPopout,
        showAvatarPopout: l.showAvatarPopout,
        showUsernamePopout: l.showUsernamePopout,
        onClickAvatar: l.onClickAvatar,
        onClickUsername: l.onClickUsername,
        onPopoutRequestClose: l.onPopoutRequestClose,
    });
}
function nu(e) {
    let { content: t, createdAt: n, userId: l, accessories: s } = e,
        r = (0, w.bG)([eU.default], () => (null != l ? eU.default.getUser(l) : null) ?? eU.default.getCurrentUser(), [
            l,
        ]),
        o = i.useMemo(() => (0, tJ.FT)(r, null), [r]),
        c = i.useMemo(() => {
            if (null == r) return null;
            let e = (0, tZ.Ay)({ channelId: nl.id, content: t, author: r });
            return (0, tX.rh)({ ...e, timestamp: ns(n, e.timestamp), state: C.cmJ.SENT });
        }, [t, r, n]);
    return null == c ? null : (0, a.jsx)(nh, { message: c, author: o, content: t, accessories: s });
}
function nh(e) {
    let { message: t, author: n, content: l, accessories: i } = e,
        s = nr(t, l);
    return (0, a.jsx)(t0.A, {
        className: nn.yE,
        author: n,
        childrenHeader: (0, a.jsx)(nd, { message: t, author: n }),
        childrenMessageContent: s,
        childrenAccessories: ni(i, "" !== l),
        disableInteraction: !0,
    });
}
function nm(e) {
    let { content: t, createdAt: n, accessories: l, replyTo: s, onJumpToReplied: r } = e,
        o = i.useMemo(() => (0, tJ.FT)(null, null), []),
        c = i.useMemo(() => ({ ...o, nick: "Conjure", colorString: "var(--text-brand)" }), [o]),
        d = s?.userId,
        u = (0, w.bG)([eU.default], () => (null != d ? eU.default.getUser(d) : null) ?? eU.default.getCurrentUser(), [
            d,
        ]),
        h = i.useMemo(() => {
            if (null == s || null == u) return null;
            let e = (0, tZ.Ay)({ channelId: nl.id, content: s.content, author: u });
            return (0, tX.rh)({ ...e, id: s.id, timestamp: ns(s.createdAt, e.timestamp), state: C.cmJ.SENT });
        }, [s, u]),
        m = i.useMemo(() => (null == s ? void 0 : { channel_id: nl.id, message_id: s.id }), [s]),
        f = i.useMemo(() => {
            let e = (0, tZ.Ay)({ channelId: nl.id, content: t, author: na });
            return (0, tX.rh)({
                ...e,
                timestamp: ns(n, e.timestamp),
                state: C.cmJ.SENT,
                ...(null != m ? { type: C.lAJ.REPLY, message_reference: m } : {}),
            });
        }, [t, n, m]),
        p = nr(f, t);
    return (0, a.jsxs)("div", {
        className: nn.$4,
        "data-replying": null != h ? "true" : void 0,
        children: [
            (0, a.jsx)(t0.A, {
                className: nn.yE,
                author: c,
                childrenRepliedMessage:
                    null == h ? null : (0, a.jsx)(nc, { baseMessage: f, referenced: h, onJumpToReplied: r }),
                childrenHeader: (0, t5.A)({ message: f, channel: nl, author: c, guildId: void 0, isGroupStart: !0 }),
                childrenMessageContent: p,
                childrenAccessories: ni(l, "" !== t),
                disableInteraction: !0,
            }),
            (0, a.jsx)("span", {
                className: nn.st,
                "aria-hidden": "true",
                children: (0, a.jsx)(G.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
            }),
        ],
    });
}
function nf(e) {
    let { projectId: t, messages: n, ref: l, onPickIdea: s } = e,
        r = (0, w.bG)([eU.default], () => eU.default.getCurrentUser()),
        o = i.useRef(null),
        c = i.useCallback(
            (e) => {
                (o.current = e), "function" == typeof l ? l(e) : null != l && (l.current = e);
            },
            [l],
        ),
        [d, u] = i.useState(null),
        h = i.useRef(0);
    i.useEffect(() => () => window.clearTimeout(h.current), []);
    let m = i.useCallback((e) => {
        let t = o.current?.querySelector(`[data-vibegrations-message="${e}"]`);
        t?.scrollIntoView({ block: "center", behavior: "smooth" }),
            u(e),
            window.clearTimeout(h.current),
            (h.current = window.setTimeout(() => u(null), 1600));
    }, []);
    return 0 === n.length
        ? (0, a.jsx)("ol", {
              ref: l,
              className: tr.x7,
              children: (0, a.jsx)(np, {
                  role: "assistant",
                  children: (0, a.jsx)(nm, { content: P.intl.string(R.default.khZEUv) }),
              }),
          })
        : (0, a.jsx)("ol", {
              ref: c,
              className: tr.x7,
              children: n.map((e, l) => {
                  if ("user" === e.role) {
                      let n = null != e.attachments && e.attachments.length > 0 ? e.attachments : null;
                      return (0, a.jsx)(
                          np,
                          {
                              role: "user",
                              anchorId: e.id,
                              highlighted: d === e.id,
                              children: (0, a.jsx)(nu, {
                                  content: e.content,
                                  createdAt: e.created_at,
                                  userId: e.user_id ?? r?.id,
                                  accessories: null != n ? (0, a.jsx)(to, { projectId: t, attachments: n }) : void 0,
                              }),
                          },
                          e.render_id,
                      );
                  }
                  let o = e.steps.some(
                          (e) =>
                              "error" === e.kind ||
                              "terminal_error" === e.kind ||
                              ("node" === e.kind && null != e.node && !eV(e)),
                      ),
                      c = e.steps.some((e) => "assistant_delta" === e.kind && null != e.message && "" !== e.message),
                      u =
                          e.steps.some(
                              (e) =>
                                  "todos" === e.kind &&
                                  (null == e.task_id || "" === e.task_id) &&
                                  (e.items?.length ?? 0) > 0,
                          ) || (e.todos?.length ?? 0) > 0,
                      h =
                          "" !== e.content ||
                          u ||
                          null != e.proposal ||
                          null != e.ideas ||
                          null != e.clarification ||
                          null != e.secretRequest ||
                          c ||
                          (e.attachments?.length ?? 0) > 0,
                      f = !0 === e.interrupted;
                  return o || h || f
                      ? (0, a.jsxs)(
                            i.Fragment,
                            {
                                children: [
                                    o || f
                                        ? (0, a.jsx)(np, {
                                              role: "assistant",
                                              children: (0, a.jsx)(tY, {
                                                  projectId: t,
                                                  interrupted: f,
                                                  steps: e.steps,
                                                  active: !(0, eo.BL)(e),
                                                  durationMs:
                                                      null != e.finished_at ? e.finished_at - e.created_at : void 0,
                                              }),
                                          })
                                        : null,
                                    h
                                        ? (0, a.jsx)(np, {
                                              role: "assistant",
                                              children: (0, a.jsx)(nm, {
                                                  content: e.content,
                                                  createdAt: e.created_at,
                                                  replyTo: (function (e, t) {
                                                      if (null == t) return;
                                                      let n = e.find((e) => e.id === t && "user" === e.role);
                                                      if (null != n)
                                                          return {
                                                              id: n.id,
                                                              content: n.content,
                                                              ...(null != n.user_id ? { userId: n.user_id } : {}),
                                                              createdAt: n.created_at,
                                                          };
                                                  })(n, e.in_reply_to),
                                                  onJumpToReplied:
                                                      null != e.in_reply_to ? () => m(e.in_reply_to) : void 0,
                                                  accessories: (0, a.jsx)(tK, {
                                                      projectId: t,
                                                      steps: e.steps,
                                                      announcement: e.announcement,
                                                      content: "",
                                                      proposal: e.proposal,
                                                      interrupted: !0 === e.interrupted,
                                                      provisionalTodo: e.provisionalTodo,
                                                      active: !(0, eo.BL)(e),
                                                      todos: e.todos,
                                                      ideas: e.ideas,
                                                      pickedIdeaIds:
                                                          null == e.ideas
                                                              ? void 0
                                                              : (function (e, t, n) {
                                                                    let l = new Set();
                                                                    for (let a = t + 1; a < e.length; a++) {
                                                                        let t = e[a];
                                                                        if ("user" === t.role)
                                                                            for (let e of n)
                                                                                e.implementation_prompt.trim() ===
                                                                                    t.content.trim() && l.add(e.id);
                                                                    }
                                                                    return l;
                                                                })(n, l, e.ideas),
                                                      attachments: e.attachments,
                                                      secretRequest: e.secretRequest,
                                                      settingsRequest: e.settingsRequest,
                                                      onPickIdea: s,
                                                  }),
                                              }),
                                          })
                                        : null,
                                ],
                            },
                            e.render_id,
                        )
                      : null;
              }),
          });
}
function np(e) {
    let { role: t, children: n, anchorId: l, highlighted: i = !1 } = e;
    return (0, a.jsx)("li", {
        "data-role": t,
        "data-vibegrations-message": l,
        className: r()(tr.xk, { [tr.Qo]: i }),
        children: n,
    });
}
var ng = n(625903),
    nx = n(964675);
function nv(e) {
    let { projectId: t } = e,
        n = (0, w.bG)([h.Ay], () => null != h.Ay.getSettings(t), [t]),
        l = i.useCallback(() => {
            (0, tk.A)(t);
        }, [t]);
    return n
        ? (0, a.jsx)(eE.D, {
              className: nx.h,
              "aria-label": P.intl.string(R.default.gTMvzD),
              onClick: l,
              children: (0, a.jsx)(ng.SettingsIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
          })
        : null;
}
var nb = n(863610),
    nj = n(495557);
function ny(e) {
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
            className: nj.jn,
            "data-vibegrations-thinking-panel": !0,
            children: (0, a.jsx)(er.Ch, {
                ref: s,
                className: nj.Dq,
                "data-vibegrations-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: r()(tW.PT, nj.bb),
                    children: ez.A.parse(l, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var nk = n(921461);
function nA(e) {
    let { activity: t, compacting: n = !1, restoring: l = !1 } = e,
        s = i.useRef(null),
        o = i.useId(),
        [c, d] = i.useState(null),
        u = null != t && "end" !== t.phase,
        h = l ? R.default.aFffp2 : n ? R.default["0vH/5G"] : u ? R.default.Ly7F7x : R.default.QDGuNS,
        m = null != t && "" !== t.text,
        f = t?.session ?? null,
        p = m && null != f && c === f,
        g = i.useCallback(() => {
            m && null != f && d((e) => (e === f ? null : f));
        }, [m, f]),
        x = i.useCallback(() => d(null), []);
    return (0, a.jsx)(ed.Y, {
        targetElementRef: s,
        position: "top",
        align: "left",
        shouldShow: p,
        onRequestClose: x,
        renderPopout: () => (0, a.jsx)(ny, { id: o, activity: t }),
        children: () =>
            (0, a.jsxs)(eE.D, {
                innerRef: s,
                className: r()(nk.hF, m && nk.Xd),
                "aria-label": P.intl.string(l ? R.default.pGFXZ0 : R.default.SzdX35),
                "aria-expanded": p,
                "aria-describedby": p ? o : void 0,
                "data-vibegrations-thinking-trigger": !0,
                onClick: g,
                children: [
                    (0, a.jsx)("span", {
                        className: nk.bl,
                        children: (0, a.jsx)(nb.n, { dotRadius: 3.5, themed: !0 }),
                    }),
                    (0, a.jsx)(b.E, {
                        tag: "span",
                        variant: "text-xs/semibold",
                        color: "text-strong",
                        children: P.intl.string(h),
                    }),
                ],
            }),
    });
}
var nw = n(662546),
    nN = n(233263);
function nE(e) {
    let { todos: t, provisional: n } = e;
    return (0, a.jsx)("div", {
        className: nN.B,
        role: "dialog",
        "aria-label": P.intl.string(R.default.qCRC6c),
        children: (0, a.jsx)(tz, { todos: t, provisional: n, announceProgress: !1 }),
    });
}
function nS(e) {
    let { todos: t, provisional: n } = e,
        l = i.useRef(null),
        { completed: s, total: r } = tH(t);
    return 0 === r
        ? null
        : (0, a.jsx)(ed.Y, {
              targetElementRef: l,
              position: "top",
              align: "right",
              renderPopout: () => (0, a.jsx)(nE, { todos: t, provisional: n }),
              children: (e) =>
                  (0, a.jsxs)(eE.D, {
                      innerRef: l,
                      className: nN.T,
                      "aria-label": P.intl.formatToPlainString(R.default["QG/EiF"], { completed: s, total: r }),
                      ...e,
                      children: [
                          (0, a.jsx)(nw.O, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                          (0, a.jsx)(b.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "none",
                              children: P.intl.formatToPlainString(R.default["6zuiBa"], { completed: s, total: r }),
                          }),
                      ],
                  }),
          });
}
var nC = n(885574),
    nI = n(280894);
function nT(e) {
    return e.toLocaleString();
}
function n_(e) {
    let { label: t, usage: n } = e;
    return (0, a.jsxs)("div", {
        className: nI.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: nI.mf,
                children: [
                    (0, a.jsx)(b.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(b.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [nT((0, ew.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(b.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    nT(n.input_tokens),
                    " in \xb7 ",
                    nT(n.output_tokens),
                    " out \xb7 ",
                    nT(n.cache_creation_input_tokens),
                    " cache write \xb7 ",
                    nT(n.cache_read_input_tokens),
                    " cache read",
                ],
            }),
        ],
    });
}
function nR(e) {
    let { project: t } = e,
        n = (0, ew.wV)(t.orchestrator, t.codegen);
    return (0, a.jsxs)("div", {
        className: nI.si,
        role: "dialog",
        "aria-label": P.intl.string(R.default["9yoLWZ"]),
        children: [
            (0, a.jsx)("div", {
                className: nI.Q$,
                children: (0, a.jsxs)("div", {
                    className: nI.mf,
                    children: [
                        (0, a.jsxs)(b.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [nT((0, ew.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(b.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(n_, { label: P.intl.string(R.default.hk4jJr), usage: t.orchestrator }),
            (0, a.jsx)(n_, { label: P.intl.string(R.default.R9aduM), usage: t.codegen }),
            (0, a.jsxs)("div", {
                className: nI.mf,
                children: [
                    (0, a.jsx)(b.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: P.intl.string(R.default["kILb+R"]),
                    }),
                    (0, a.jsx)(b.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, ew.sj)(n) ? "\u2014" : `${Math.round(100 * (0, ew.CA)(n))}%`,
                    }),
                ],
            }),
        ],
    });
}
function nP(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(ed.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(nR, { project: t }),
        children: (e) =>
            (0, a.jsx)(eE.D, {
                innerRef: n,
                className: nI.Y$,
                "aria-label": P.intl.string(R.default.AWQ2ZV),
                ...e,
                children: (0, a.jsx)(nC.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var nM = n(258216);
function nL(e) {
    switch (e) {
        case "connecting":
            return P.intl.string(R.default.W7oyuf);
        case "failed":
            return P.intl.string(R.default.eE60xI);
        case "closed":
            return P.intl.string(R.default["yBmS+I"]);
    }
}
function nO(e) {
    let {
        projectId: t,
        thinking: n,
        restoring: l = !1,
        thinkingActivity: i,
        compacting: s,
        todos: r,
        provisionalTodo: o,
        projectUsage: c,
        connState: d,
    } = e;
    return (0, a.jsxs)("div", {
        className: nM.jf,
        children: [
            (0, a.jsx)("div", {
                className: nM.Xx,
                role: "status",
                "aria-live": "polite",
                "data-vibegrations-activity": !0,
                children: n || l ? (0, a.jsx)(nA, { activity: i, compacting: s, restoring: l }) : null,
            }),
            (0, a.jsx)(nv, { projectId: t }),
            null == r || 0 === r.length ? null : (0, a.jsx)(nS, { todos: r, provisional: o }),
            null == c
                ? null
                : (0, a.jsxs)("span", {
                      className: nM.BP,
                      children: [
                          (0, a.jsx)(b.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": P.intl.formatToPlainString(R.default["7SZZvj"], {
                                  runes: (0, ew.a7)(c.cost_usd),
                                  turns: c.turns,
                              }),
                              children: P.intl.formatToPlainString(R.default["4PFO2p"], {
                                  runes: (0, ew.a7)(c.cost_usd).toLocaleString(),
                              }),
                          }),
                          (0, a.jsx)(nP, { project: c }),
                      ],
                  }),
            "open" === d
                ? null
                : (0, a.jsx)(b.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === d ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": P.intl.formatToPlainString(R.default.eDDdhB, { status: nL(d) }),
                      "data-vibegrations-conn": !0,
                      "data-state": d,
                      className: nM.XF,
                      children: nL(d),
                  }),
        ],
    });
}
var nD = n(22231),
    n$ = n(477155),
    nF = n(935286),
    nG = n(424110);
function nU(e) {
    let { option: t, position: n, disabled: l, onPick: s } = e,
        o = i.useId(),
        c = !0 === t.recommended,
        d = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(eE.D, {
        className: r()(nG.uK, { [nG.ue]: l }),
        onClick: l ? void 0 : () => s(t),
        "aria-label": P.intl.formatToPlainString(c ? R.default.aL1BKQ : R.default.k7lEgj, { answer: t.label }),
        "aria-describedby": d ? o : void 0,
        "aria-disabled": l,
        "data-vibegrations-clarification-option": t.id,
        "data-recommended": c ? "true" : void 0,
        children: [
            (0, a.jsx)("span", { className: nG.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: nG.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: nG.l8,
                        children: (0, a.jsx)(b.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: nG.ed,
                            children: t.label,
                        }),
                    }),
                    d
                        ? (0, a.jsx)(b.E, {
                              tag: "span",
                              id: o,
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: t.detail,
                          })
                        : null,
                ],
            }),
            c
                ? (0, a.jsx)(b.E, {
                      tag: "span",
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      className: nG.rM,
                      children: P.intl.string(R.default.OXRWyV),
                  })
                : null,
        ],
    });
}
function nq(e) {
    let { clarification: t, onSubmit: n, onDismiss: l } = e,
        [s, c] = i.useState({}),
        [d, u] = i.useState({}),
        [h, m] = i.useState(0),
        f = null == n,
        p = t.questions.length,
        g = Math.min(h, p - 1),
        x = t.questions[g],
        v = i.useCallback(
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
        j = i.useCallback(
            (e) => {
                if (f) return;
                let n = { ...s, [x.id]: e };
                c(n);
                let l = (function (e, t, n) {
                    let { questions: l } = e;
                    for (let e = 1; e <= l.length; e++) {
                        let a = (n + e) % l.length,
                            i = t[l[a].id];
                        if (null == i || "" === i.text.trim()) return a;
                    }
                    return null;
                })(t, n, g);
                null == l ? v(n) : m(l);
            },
            [s, t, f, g, x.id, v],
        ),
        y = i.useCallback(() => {
            if (f || 0 === g) return;
            let e = t.questions[g - 1];
            c((t) => {
                let n = { ...t };
                return delete n[e.id], n;
            }),
                u((t) => {
                    let n = { ...t };
                    return delete n[e.id], n;
                }),
                m(g - 1);
        }, [t, f, g]),
        k = g > 0 && !f,
        A = d[x.id] ?? "",
        w = i.useCallback(() => {
            let e = A.trim();
            "" !== e && j({ kind: "custom", text: e });
        }, [A, j]),
        [N, E] = i.useState(!1),
        [S, C] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => E(!0));
            });
        return () => {
            cancelAnimationFrame(t), cancelAnimationFrame(e);
        };
    }, []);
    let I = i.useCallback(() => {
            null != l && (C(!0), setTimeout(l, 150));
        }, [l]),
        T = i.useCallback(() => {
            f || g >= p - 1 || m(g + 1);
        }, [f, g, p]),
        _ = g < p - 1 && !f;
    return (0, a.jsxs)("section", {
        className: r()(nG.$O, { [nG.fI]: N && !S, [nG.Oh]: S }),
        role: "dialog",
        "aria-label": x.question,
        "data-vibegrations-clarification": t.id,
        "data-state": f ? "inert" : "open",
        "data-step": g,
        children: [
            (0, a.jsxs)("div", {
                className: nG.wx,
                children: [
                    (0, a.jsx)(b.E, {
                        tag: "span",
                        id: `${x.id}-label`,
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        selectable: !0,
                        className: nG.TK,
                        children: x.question,
                    }),
                    null == l
                        ? null
                        : (0, a.jsx)(eE.D, {
                              className: r()(nG.gb, nG.Q7),
                              onClick: I,
                              "aria-label": P.intl.string(R.default.fMdUNR),
                              "data-vibegrations-clarification-close": !0,
                              children: (0, a.jsx)(o.P, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: nG.Ge,
                role: "group",
                "aria-labelledby": `${x.id}-label`,
                children: [
                    x.options.map((e, t) =>
                        (0, a.jsx)(
                            nU,
                            {
                                option: e,
                                position: t + 1,
                                disabled: f,
                                onPick: (e) => j({ kind: "option", optionId: e.id, text: e.label }),
                            },
                            e.id,
                        ),
                    ),
                    (0, a.jsxs)("div", {
                        className: nG.Xy,
                        children: [
                            (0, a.jsx)("span", {
                                className: nG.Gy,
                                "aria-hidden": !0,
                                children: (0, a.jsx)(nD.PencilIcon, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: "currentColor",
                                }),
                            }),
                            (0, a.jsx)(eg.y, {
                                value: A,
                                onChange: (e) => {
                                    let { value: t } = e.currentTarget;
                                    u((e) => ({ ...e, [x.id]: t }));
                                },
                                onKeyDown: (e) => {
                                    "Enter" !== e.key ||
                                        e.shiftKey ||
                                        e.nativeEvent.isComposing ||
                                        (e.preventDefault(), w());
                                },
                                placeholder: P.intl.string(R.default.qifsdL),
                                "aria-label": P.intl.formatToPlainString(R.default.XHESTL, { question: x.question }),
                                disabled: f,
                                rows: 1,
                                className: nG.Pu,
                                "data-vibegrations-clarification-other": x.id,
                            }),
                        ],
                    }),
                ],
            }),
            p > 1
                ? (0, a.jsxs)("div", {
                      className: nG.qr,
                      children: [
                          (0, a.jsx)(b.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-vibegrations-clarification-progress": !0,
                              children: P.intl.formatToPlainString(R.default["7bypa+"], { index: g + 1, total: p }),
                          }),
                          (0, a.jsxs)("div", {
                              className: nG.Np,
                              children: [
                                  (0, a.jsx)(eE.D, {
                                      className: r()(nG.gb, { [nG.yI]: !k }),
                                      onClick: k ? y : void 0,
                                      tabIndex: k ? 0 : -1,
                                      "aria-hidden": !k,
                                      "aria-disabled": f,
                                      "aria-label": P.intl.string(R.default.KYpgvZ),
                                      "data-vibegrations-clarification-back": !0,
                                      "data-hidden": k ? void 0 : "true",
                                      children: (0, a.jsx)(n$.r, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                                  (0, a.jsx)(eE.D, {
                                      className: r()(nG.gb, { [nG.yI]: !_ }),
                                      onClick: _ ? T : void 0,
                                      tabIndex: _ ? 0 : -1,
                                      "aria-hidden": !_,
                                      "aria-disabled": f,
                                      "aria-label": P.intl.string(R.default.AlZqEH),
                                      "data-vibegrations-clarification-next": !0,
                                      "data-hidden": _ ? void 0 : "true",
                                      children: (0, a.jsx)(nF.E, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var nB = n(366010),
    nH = n(825484),
    nV = n(859703),
    nz = n(24001),
    nW = n(291749),
    nY = n(971276),
    nK = n(590202),
    nX = n(710969),
    nZ = n(792620),
    nQ = n(201805),
    nJ = n(617986),
    n0 = n(363195),
    n1 = n(749414);
let n2 = !1;
function n6(e) {
    let t,
        n,
        l,
        { open: s } = e,
        r =
            ((t = (0, nQ.dN)()),
            (n = (0, w.bG)([nV.A], () => nV.A.isQuestAccessSuspended || null != nV.A.questEnrollmentBlockedUntil, [])),
            (l = (0, w.bG)([nV.A], () => null != nV.A.getQuestPreviewOverride(nz.uF.QUEST_BAR_V2), [])),
            null != t && (0, nZ.vv)(t)
                ? l
                    ? t.userStatus?.claimedAt != null
                        ? null
                        : t
                    : !(0, nY.s)() || n || (0, nX.Ic)(t) || t.userStatus?.completedAt != null
                      ? null
                      : t
                : null),
        [o, c] = i.useState(() => n2),
        { mounted: d, closing: u } = (function (e) {
            let [t, n] = i.useState(e),
                [l, a] = i.useState(!1),
                s = i.useRef(null);
            return (
                e && (!t || l) ? (n(!0), a(!1)) : e || !t || l || a(!0),
                i.useEffect(() => {
                    if (!e && t)
                        return (
                            (s.current = setTimeout(() => {
                                (s.current = null), a(!1), n(!1);
                            }, 150)),
                            () => {
                                null != s.current && (clearTimeout(s.current), (s.current = null));
                            }
                        );
                }, [e, t, 150]),
                { mounted: t, closing: l }
            );
        })(s && !o && null != r),
        [h, m] = i.useState(r);
    null != r && r !== h && m(r);
    let p = r ?? h,
        g = (0, w.bG)([n0.A], () => n0.A.getState().theme),
        x = (0, nB.M)(g) ? C.NJ8.DARK : C.NJ8.LIGHT,
        v = null != p ? (0, nW.tW)(p, nW.fY.GAME_TILE, x).url : null,
        j = null != v && "" !== v ? v : null,
        y = i.useCallback(async () => {
            if (null == r) return;
            let e = {
                questContent: nz.uF.QUEST_BAR_V2,
                sourceQuestContent: nz.uF.QUEST_BAR_V2,
                sourceQuestContentCTA: nK.Cy.WATCH_VIDEO,
            };
            r.userStatus?.enrolledAt != null
                ? (0, nJ.d5)({ quest: r, ...e })
                : await (0, nJ.e0)(r, { ...e, questContentCTA: nK.Cy.ACCEPT_QUEST });
        }, [r]),
        k = i.useCallback(() => {
            (n2 = !0), c(!0);
        }, []);
    return d && null != p
        ? (0, a.jsxs)("aside", {
              className: n1.f4,
              "data-vibegrations-quest-prompt": !0,
              "data-state": u ? "closing" : "open",
              "aria-hidden": u,
              children: [
                  null != j
                      ? (0, a.jsxs)("div", {
                            className: n1.As,
                            "data-vibegrations-quest-glow": !0,
                            "aria-hidden": !0,
                            children: [
                                (0, a.jsx)("img", { className: n1.Rx, src: j, alt: "" }),
                                (0, a.jsx)("div", { className: n1._e }),
                            ],
                        })
                      : null,
                  (0, a.jsxs)("div", {
                      className: n1.iB,
                      children: [
                          null != j ? (0, a.jsx)("img", { className: n1.w1, src: j, alt: "" }) : null,
                          (0, a.jsxs)("div", {
                              className: n1.Ug,
                              children: [
                                  (0, a.jsx)(b.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: P.intl.string(R.default["09LJ+I"]),
                                  }),
                                  (0, a.jsx)(b.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      lineClamp: 1,
                                      children: P.intl.format(P.t.EQa7os, { questName: p.config.messages.questName }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, a.jsxs)(nH.e, {
                      direction: "horizontal",
                      fullWidth: !0,
                      wrap: !1,
                      children: [
                          (0, a.jsx)(f.$, {
                              variant: "secondary",
                              size: "sm",
                              fullWidth: !0,
                              onClick: k,
                              text: P.intl.string(R.default.egO5fO),
                          }),
                          (0, a.jsx)(f.$, {
                              variant: "primary",
                              size: "sm",
                              fullWidth: !0,
                              onClick: y,
                              text: P.intl.string(P.t.kUQLMJ),
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var n3 = n(506774),
    n7 = n(651649),
    n5 = n(670455);
let n4 = "shownVibegrationsFeedbackProjectIds";
var n8 = n(348800);
let n9 = [P.intl.string(R.default["E+Q26x"]), P.intl.string(R.default["06/jqP"]), P.intl.string(R.default["7MCiK9"])];
function le(e) {
    let { projectId: t, onRegionCapture: l, restoreState: s } = e,
        r = (0, w.bG)([eo.Ay], () => eo.Ay.getMessages(t), [t]),
        o = (0, w.bG)([h.Ay], () => h.Ay.getConnState(t), [t]),
        c = (0, w.bG)([h.Ay], () => h.Ay.isChatStopped(t), [t]),
        d = (0, w.bG)([eo.Ay], () => eo.Ay.getProjectUsage(t), [t]),
        u = (0, w.bG)([eo.Ay], () => eo.Ay.getThinkingActivity(t), [t]),
        m = (0, w.bG)([eo.Ay], () => eo.Ay.isCompacting(t), [t]),
        f = (0, w.bG)([h.Ay], () => h.Ay.getModelSettings(t), [t]),
        p = i.useRef(null),
        g = i.useRef(null),
        x = i.useRef(null),
        v = i.useRef(!0),
        [b, j] = i.useState(!0);
    i.useEffect(() => {
        v.current && g.current?.scrollToBottom();
    }, [r]);
    let y = i.useCallback(() => {
        let e = g.current;
        if (null == e) return;
        let t = e.getDistanceFromBottom();
        v.current = t < 32;
        let n = t > 1;
        j((e) => (!n === e ? e : !n));
    }, []);
    i.useLayoutEffect(() => {
        let e = p.current,
            t = x.current;
        if (null == e) return;
        let n = e.getBoundingClientRect().width,
            l = t?.getBoundingClientRect().height,
            a = null;
        function i() {
            v.current &&
                (null != a && cancelAnimationFrame(a), (a = requestAnimationFrame(() => g.current?.scrollToBottom())));
        }
        let s = new ResizeObserver((t) => {
            for (let a of t)
                if (a.target === e) {
                    let e = a.contentRect.width;
                    if (e === n) continue;
                    (n = e), i();
                } else {
                    let e = a.contentRect.height;
                    if (e === l) continue;
                    (l = e), i();
                }
        });
        return (
            s.observe(e),
            null != t && s.observe(t),
            () => {
                s.disconnect(), null != a && cancelAnimationFrame(a);
            }
        );
    }, []),
        i.useEffect(() => {
            (0, h.Hc)(t);
        }, [t]),
        i.useEffect(
            () => () =>
                (function (e) {
                    let t = eo.Ay.getMessages(e).filter(
                        (e) => "assistant" === e.role && "side_reply" !== e.kind && (0, eo.BL)(e),
                    ).length;
                    !(t < 3) &&
                        ((n3.w.get(n4) ?? []).includes(e) ||
                            n7.A.possiblyShowFeedbackModal(n5.MW.VIBEGRATIONS, () => {
                                let l;
                                (l = n3.w.get(n4) ?? []).includes(e) || n3.w.set(n4, [...l, e]),
                                    (0, tb.openModalLazy)(async () => {
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
    let k = i.useCallback(
            (e, n) => {
                (0, h.dv)(t, e, n);
            },
            [t],
        ),
        A = i.useCallback(() => (0, h.fu)(t), [t]),
        N = i.useCallback((e) => k(e.implementation_prompt), [k]),
        E = i.useCallback((e) => k(e), [k]),
        S = i.useCallback((e) => (0, h.XZ)(t, e), [t]),
        C = i.useCallback((e) => (0, h.vX)(t, e), [t]),
        I = i.useCallback((e) => (0, h.Vm)(t, e), [t]),
        T = i.useCallback(() => k(P.intl.string(R.default.Jj8Ftb)), [k]),
        _ = s?.status === "restoring",
        M = "open" === o && !c && !_,
        L = r[r.length - 1],
        O = null != L && "assistant" === L.role && null != L.proposal,
        [D, $] = i.useState(null),
        F = L?.clarification != null && L.clarification.id !== D ? L.clarification : null,
        G = i.useCallback(() => {
            null != F && $(F.id);
        }, [F]),
        U = (0, w.bG)([eo.Ay], () => eo.Ay.hasLoadedHistory(t), [t]),
        q = i.useMemo(() => {
            let e = 0;
            for (let n = 0; n < t.length; n++) e = (31 * e + t.charCodeAt(n)) % 0x7fffffff;
            return n9[e % n9.length];
        }, [t]),
        B = O
            ? P.intl.string(R.default.Jj8Ftb)
            : L?.kind === "plan_implemented"
              ? P.intl.string(R.default["3sTTBu"])
              : U && 0 === r.length
                ? q
                : null,
        H = i.useMemo(() => {
            for (let e = r.length - 1; e >= 0; e--) {
                let t = r[e];
                if ("assistant" === t.role && !(0, eo.BL)(t)) return t;
            }
        }, [r]),
        V = null != H,
        z = O && M ? T : void 0,
        W = H?.todos,
        Y = H?.provisionalTodo;
    return (0, a.jsxs)("section", {
        ref: p,
        "data-vibegrations-chat": !0,
        className: n8.TE,
        children: [
            (0, a.jsx)(n6, { open: null != H }),
            (0, a.jsx)(er.Ch, {
                ref: g,
                onScroll: y,
                "data-vibegrations-chat-log": !0,
                className: b ? n8.N$ : `${n8.N$} ${n8.hB}`,
                children: (0, a.jsx)(nf, { ref: x, projectId: t, messages: r, onPickIdea: M ? N : void 0 }),
            }),
            (0, a.jsxs)("div", {
                className: n8.im,
                children: [
                    (0, a.jsx)(nO, {
                        projectId: t,
                        thinking: V,
                        restoring: _,
                        thinkingActivity: u,
                        compacting: m,
                        todos: W,
                        provisionalTodo: Y,
                        projectUsage: d,
                        connState: o,
                    }),
                    (0, a.jsxs)("div", {
                        className: n8.Jx,
                        children: [
                            null == F
                                ? null
                                : (0, a.jsx)("div", {
                                      className: n8.B5,
                                      children: (0, a.jsx)(
                                          nq,
                                          { clarification: F, onSubmit: M ? E : void 0, onDismiss: G },
                                          F.id,
                                      ),
                                  }),
                            (0, a.jsx)(eD, {
                                canSend: M,
                                stopped: c,
                                running: V,
                                restoring: _,
                                onSend: k,
                                onInterrupt: M ? A : void 0,
                                onUploadFile: C,
                                onDeleteFile: I,
                                onApprove: z,
                                onRegionCapture: l,
                                suggestion: B,
                                questionOpen: null != F,
                                modelSettings: f,
                                onModelSettingsChange: S,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var lt = n(435558),
    ln = n(661531),
    ll = n(602853),
    la = n(517461),
    li = n(761929),
    ls = n(927506);
function lr(e) {
    let { open: t, maxWidth: n, onWidthChange: l, children: s } = e,
        r = (0, ll.r)(ln.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = i.useRef(null),
        [c, d] = (0, la.V)("VibegrationsChatSidebarWidth", 460),
        [u, h] = i.useState(c ?? 460),
        m = (0, lt.clamp)(u, 360, n);
    i.useLayoutEffect(() => {
        l(t ? m + r : 0);
    }, [m, t, r, l]);
    let f = (0, li.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: o,
            onElementResize: h,
            onElementResizeEnd: d,
            orientation: li.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        p = i.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), f(e));
            },
            [f],
        );
    return (0, a.jsxs)("div", {
        className: ls.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: ls.Di, onPointerDown: p }),
            (0, a.jsx)("div", { ref: o, className: ls.kL, style: { width: m }, children: s }),
        ],
    });
}
var lo = n(145615);
let lc = [6, 8, 10, 12],
    ld = {
        home: { blob: 1, twink: 1, alpha: 0.7 },
        conversation: { blob: 1, twink: 1, alpha: 0.7 },
        thinking: { blob: 3, twink: 2.4, alpha: 0.7 },
    };
function lu(e, t, n) {
    let l = (0x165667b1 * e) ^ (0x27d4eb2f * t) ^ (0x7fffffff * n);
    return (l = Math.imul(l ^ (l >>> 13), 0x4bf19f61)), (((l ^= l >>> 16) >>> 0) % 1e6) / 1e6;
}
let lh = i.memo(function (e) {
    let { state: t } = e,
        n = i.useRef(null),
        l = i.useRef(null),
        s = i.useRef(t);
    i.useEffect(() => {
        s.current = t;
    }, [t]),
        i.useEffect(() => {
            let e = l.current,
                t = n.current;
            if (null == e || null == t || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
            let a = e.getContext("2d", { alpha: !0 });
            if (null == a) return;
            let i =
                    Number.isFinite(window.devicePixelRatio) && window.devicePixelRatio > 0
                        ? window.devicePixelRatio
                        : 1,
                r = 0,
                o = 0,
                c = [],
                d = 0,
                u = (function () {
                    let e = [];
                    for (let t = 0; t < 3; t++)
                        e.push({
                            x: Math.random(),
                            y: 0.4 + 0.6 * Math.random(),
                            vx: (Math.random() - 0.5) * 2e-4,
                            vy: (Math.random() - 0.5) * 15e-5,
                            radius: 0.16 + 0.18 * Math.random(),
                            strength: 0.7 + 0.5 * Math.random(),
                        });
                    return e;
                })(),
                h = ld.home.blob,
                m = ld.home.twink,
                f = ld.home.alpha,
                p = 0,
                g = lc[0],
                x = [],
                v = 0,
                b = 0,
                j = Array(8).fill("");
            function y() {
                let {
                        r: e,
                        g: n,
                        b: l,
                    } = (function () {
                        let e = getComputedStyle(t).getPropertyValue("--custom-vibegrations-dither-fill").trim();
                        if ("" === e) return { r: 225, g: 240, b: 255 };
                        let n = e.split(",").map((e) => parseInt(e.trim(), 10));
                        return 3 !== n.length || n.some((e) => !Number.isFinite(e))
                            ? { r: 225, g: 240, b: 255 }
                            : { r: n[0], g: n[1], b: n[2] };
                    })(),
                    a = (function () {
                        let e = getComputedStyle(t).getPropertyValue("--custom-vibegrations-dither-opacity").trim();
                        if ("" === e) return 0.1;
                        let n = parseFloat(e);
                        return Number.isFinite(n) ? n : 0.1;
                    })();
                for (let t = 0; t < 8; t++) {
                    let i = ((t + 0.5) / 8) * a;
                    j[t] = `rgba(${e}, ${n}, ${l}, ${i})`;
                }
            }
            y();
            let k = [];
            for (let e = 0; e < 8; e++) k.push([]);
            let A = new MutationObserver(y);
            A.observe(document.documentElement, { attributes: !0, attributeFilter: ["class"] });
            let w = -1;
            function N() {
                let e = Math.max(r, d);
                (e === d && w === g && c.length > 0) ||
                    ((d = e),
                    (w = g),
                    (c = (function (e, t) {
                        let n = [],
                            l = Math.ceil(e / t) + 1,
                            a = Math.ceil(600 / t) + 1;
                        for (let e = 0; e < a; e++)
                            for (let t = 0; t < l; t++)
                                n.push({
                                    i: t,
                                    j: e,
                                    threshold: 0.05 + 0.95 * lu(t, e, 1),
                                    phase: lu(t, e, 2) * Math.PI * 2,
                                    freq: 0.25 + 1.5 * lu(t, e, 3),
                                });
                        return n;
                    })(e, g)));
            }
            function E() {
                let t = e.getBoundingClientRect(),
                    n = t.width,
                    l = t.height;
                (0.5 > Math.abs(n - r) && 0.5 > Math.abs(l - o)) ||
                    ((r = n),
                    (o = l),
                    (e.width = Math.max(1, Math.floor(r * i))),
                    (e.height = Math.max(1, Math.floor(o * i))),
                    null != a && (a.setTransform(i, 0, 0, i, 0, 0), (a.imageSmoothingEnabled = !1)),
                    N(),
                    T(0.001 * performance.now()));
            }
            E();
            let S = new ResizeObserver(E);
            S.observe(t), window.addEventListener("resize", E);
            let C = performance.now(),
                I = 0;
            function T(e) {
                a.clearRect(0, 0, r, o), (a.globalAlpha = f);
                let t = g,
                    n = r <= 1e3 ? 1.2 : (1e3 / r) * 1.2;
                for (let e = 0; e < 8; e++) k[e].length = 0;
                for (let l = 0; l < c.length; l++) {
                    let a,
                        i = c[l],
                        s = (i.i * t) / r,
                        d = (i.j * t) / o,
                        h =
                            0.55 *
                            (function (e, t, n) {
                                let l = (e - 0.5) * n,
                                    a = 1 - t,
                                    i = 1 - Math.sqrt(l * l + a * a * 1.8);
                                return i < 0 ? 0 : i * i;
                            })(s, d, n);
                    for (let e = 0; e < u.length; e++) {
                        let t = u[e],
                            n = s - t.x,
                            l = d - t.y,
                            a = (n * n + l * l) / (t.radius * t.radius);
                        h += t.strength * Math.exp(-a) * 0.7;
                    }
                    let f = 0.1 * Math.sin(e * i.freq * 1.85 * m + i.phase),
                        p = h - (i.threshold + f);
                    1;
                    if (!(p <= -0.1)) {
                        if (p >= 0.1) a = 7;
                        else {
                            let e = (p + 0.1) / 0.2;
                            a = Math.min(7, Math.floor(e * e * (3 - 2 * e) * 8));
                        }
                        k[a].push(i);
                    }
                }
                for (let e = 0; e < 8; e++) {
                    let n = k[e];
                    if (0 !== n.length) {
                        (a.fillStyle = j[e]), a.beginPath();
                        for (let e = 0; e < n.length; e++) {
                            var l, i;
                            let s = n[e];
                            (l = s.i * t),
                                (i = s.j * t),
                                "function" == typeof a.roundRect
                                    ? a.roundRect(l, i, 4, 4, 1)
                                    : (a.moveTo(l + 1, i),
                                      a.arcTo(l + 4, i, l + 4, i + 4, 1),
                                      a.arcTo(l + 4, i + 4, l, i + 4, 1),
                                      a.arcTo(l, i + 4, l, i, 1),
                                      a.arcTo(l, i, l + 4, i, 1));
                        }
                        a.fill();
                    }
                }
            }
            return (
                (I = requestAnimationFrame(function e(t) {
                    let n = t - C,
                        l = Math.min(64, n);
                    (C = t),
                        !(function (e) {
                            if (
                                (v++,
                                b++,
                                v < 30 ||
                                    e > 100 ||
                                    (x.push(e),
                                    x.length > 60 && x.shift(),
                                    x.length < 60 || b < 180 || p >= lc.length - 1))
                            )
                                return;
                            let t = 0;
                            for (let e = 0; e < x.length; e++) t += x[e];
                            let n = t / x.length;
                            n <= 22 ||
                                ((g = lc[++p]),
                                (b = 0),
                                (w = -1),
                                N(),
                                console.log(
                                    "[Vibegrations/glow-dither] perf degrade \u2192 spacing",
                                    g,
                                    "avg",
                                    n.toFixed(2),
                                    "ms",
                                ));
                        })(n);
                    let a = ld[s.current] ?? ld.home,
                        i = 1 - Math.exp(-l / 80);
                    (h += (a.blob - h) * i), (m += (a.twink - m) * i), (f += (a.alpha - f) * i);
                    let r = 1.5 * h;
                    for (let e = 0; e < u.length; e++) {
                        let t = u[e];
                        (t.x += t.vx * l * r),
                            (t.y += t.vy * l * r),
                            (t.x < -0.1 || t.x > 1.1) && (t.vx *= -1),
                            (t.y < 0.1 || t.y > 1.1) && (t.vy *= -1),
                            (t.vx += (Math.random() - 0.5) * 2e-7 * l),
                            (t.vy += (Math.random() - 0.5) * 2e-7 * l);
                    }
                    T(0.001 * t), (I = requestAnimationFrame(e));
                })),
                () => {
                    cancelAnimationFrame(I), S.disconnect(), A.disconnect(), window.removeEventListener("resize", E);
                }
            );
        }, []);
    let r = lo.P5;
    return (
        (r = "conversation" === t ? `${r} ${lo.wY}` : "home" === t ? `${r} ${lo.Qy}` : `${r} ${lo.fR}`),
        (0, a.jsx)("div", {
            ref: n,
            className: r,
            "aria-hidden": "true",
            children: (0, a.jsx)("canvas", { ref: l, className: lo.DX }),
        })
    );
});
var lm = n(408694);
function lf(e) {
    let { projectId: t } = e,
        n = (0, w.bG)([eo.Ay], () => (eo.Ay.isThinking(t) ? "thinking" : "conversation"), [t]);
    return (0, a.jsxs)("div", {
        className: lm.D1,
        "aria-hidden": !0,
        children: [
            (0, a.jsxs)("div", {
                className: lm.ys,
                "data-state": n,
                children: [(0, a.jsx)("div", { className: lm.Fc }), (0, a.jsx)("div", { className: lm.dW })],
            }),
            (0, a.jsx)(lh, { state: n }),
        ],
    });
}
var lp = n(333007),
    lg = n(439108);
function lx(e) {
    return {
        x: Math.min(e.startX, e.x),
        y: Math.min(e.startY, e.y),
        width: Math.abs(e.x - e.startX),
        height: Math.abs(e.y - e.startY),
    };
}
function lv(e) {
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
                    a = lx({ ...s, x: t.x, y: t.y });
                r(null), a.width < 8 && a.height < 8 ? l() : n(a);
            },
            [s, o, n, l],
        ),
        h = null == s ? null : lx(s);
    return (0, lp.createPortal)(
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("div", { className: lg.tB, role: "presentation", onPointerDown: l }),
                (0, a.jsx)("div", {
                    className: lg.aC,
                    style: { left: t.left, top: t.top, width: t.width, height: t.height },
                    role: "application",
                    "aria-label": P.intl.string(R.default["9MOgRI"]),
                    onPointerDown: c,
                    onPointerMove: d,
                    onPointerUp: u,
                    onPointerCancel: l,
                    children:
                        null == h
                            ? (0, a.jsx)("div", {
                                  className: lg.F7,
                                  children: (0, a.jsx)("div", {
                                      className: lg.aK,
                                      children: (0, a.jsx)(b.E, {
                                          variant: "text-sm/medium",
                                          color: "text-default",
                                          children: P.intl.string(R.default.ydkvBR),
                                      }),
                                  }),
                              })
                            : (0, a.jsx)("div", {
                                  className: lg.r1,
                                  style: { left: h.x, top: h.y, width: h.width, height: h.height },
                              }),
                }),
            ],
        }),
        document.body,
    );
}
var lb = n(314116),
    lj = n(406810),
    ly = n(381849),
    lk = n(977628);
function lA(e) {
    let t,
        { projectId: n, onClose: l, onRestore: s } = e,
        [r, c] = i.useState({ status: "loading" });
    return (
        i.useEffect(() => {
            let e = !1;
            return (
                (0, h.ST)(n)
                    .then((t) => {
                        e || c({ status: "loaded", entries: t });
                    })
                    .catch(() => {
                        e || c({ status: "failed" });
                    }),
                () => {
                    e = !0;
                }
            );
        }, [n]),
        (t =
            "loading" === r.status
                ? (0, a.jsx)(m.y, {})
                : "failed" === r.status
                  ? (0, a.jsx)("div", {
                        role: "alert",
                        children: (0, a.jsx)(b.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: P.intl.string(R.default["mSJn+K"]),
                        }),
                    })
                  : 0 === r.entries.length
                    ? (0, a.jsx)(b.E, {
                          variant: "text-md/normal",
                          color: "text-muted",
                          children: P.intl.string(R.default.TOmYPT),
                      })
                    : r.entries.map((e) => {
                          let t,
                              n = Number.isNaN((t = Date.parse(e.authoredAt)))
                                  ? { relative: null, absolute: null }
                                  : {
                                        relative: (0, ly.WR)({
                                            seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)),
                                            getFormatter: ly._e,
                                        }),
                                        absolute: new Date(t).toLocaleString(),
                                    };
                          return (0, a.jsxs)(
                              "button",
                              {
                                  className: lk.f_,
                                  type: "button",
                                  onClick: () =>
                                      (0, lb.A)({
                                          title: P.intl.string(R.default.qOUOPE),
                                          subtitle: P.intl.string(R.default.k2JBj5),
                                          confirmText: P.intl.string(R.default["+sRK16"]),
                                          variant: "critical",
                                          onConfirm: () => {
                                              l(), s(e);
                                          },
                                      }),
                                  children: [
                                      (0, a.jsx)(b.E, {
                                          variant: "text-md/medium",
                                          className: lk.bc,
                                          children: e.subject.replace(/^Build: /, ""),
                                      }),
                                      null != n.relative &&
                                          (0, a.jsx)(b.E, {
                                              variant: "text-sm/normal",
                                              color: "text-muted",
                                              title: n.absolute ?? void 0,
                                              children: n.relative,
                                          }),
                                  ],
                              },
                              e.sha,
                          );
                      })),
        (0, a.jsxs)("section", {
            className: lk.nd,
            "aria-label": P.intl.string(R.default.jAWwzi),
            children: [
                (0, a.jsxs)(d.Ay, {
                    "aria-label": P.intl.string(R.default.jAWwzi),
                    toolbar: (0, a.jsx)(d.Ay.Icon, { icon: o.P, tooltip: P.intl.string(P.t.cpT0Cq), onClick: l }),
                    children: [
                        (0, a.jsx)(d.Ay.ChannelIcon, { icon: lj.ClockIcon, "aria-hidden": !0 }),
                        (0, a.jsx)(d.Ay.Title, { children: P.intl.string(R.default.jAWwzi) }),
                    ],
                }),
                (0, a.jsx)("div", { className: lk.rf, children: (0, a.jsx)("div", { className: lk.p_, children: t }) }),
            ],
        })
    );
}
var lw = n(120426),
    lN = n(873727),
    lE = n(147248),
    lS = n(418842),
    lC = n(885386),
    lI = n(940107),
    lT = n(171936);
function l_(e) {
    let {
            projectId: t,
            applicationId: n,
            surface: l,
            previewReady: s,
            header: o,
            mainClassName: d,
            content: u,
            sidebar: h,
        } = e,
        [m, f] = i.useState(null),
        p = (0, c.A)(n, l),
        g = p?.id ?? null;
    !(function (e, t) {
        let n = (0, w.bG)([n0.A], () => (0, lN.x4)(n0.A.theme)),
            l = (0, w.bG)([lE.A], () => lE.A.gradientPreset),
            {
                reducedMotion: a,
                fontScale: s,
                highContrast: r,
                forcedColors: o,
                underlineLinks: c,
            } = (0, w.cf)([eA.Ay], () => ({
                reducedMotion: eA.Ay.useReducedMotion,
                fontScale: (0, lN.U0)(),
                highContrast: eA.Ay.isHighContrastModeEnabled,
                forcedColors: eA.Ay.useForcedColors,
                underlineLinks: eA.Ay.alwaysShowLinkDecorations,
            })),
            d = lC.hH.useSetting(),
            u = (0, lS.C)(),
            h = i.useRef(null),
            m = i.useRef(0),
            f = i.useCallback(() => {
                let l = (0, lw.F1)(e, t);
                if (null == l) return;
                let i = {
                    revision: ++m.current,
                    baseTheme: n,
                    customTheme: (0, lN.Lq)(),
                    uiDensity: u,
                    messageDisplayCompact: d,
                    fontScale: s,
                    reducedMotion: a,
                    highContrast: r,
                    forcedColors: o,
                    underlineLinks: c,
                };
                (0, lI.W)(l, "set-env", i, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [n, o, s, t, r, d, e, a, u, c]),
            p = i.useCallback(() => {
                null == h.current &&
                    (h.current = window.requestAnimationFrame(() => {
                        (h.current = null), f();
                    }));
            }, [f]);
        i.useEffect(() => {
            p();
        }, [l, p]),
            i.useLayoutEffect(
                () => (
                    f(),
                    p(),
                    () => {
                        null != h.current && (window.cancelAnimationFrame(h.current), (h.current = null));
                    }
                ),
                [p, f],
            ),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, lw.F1)(e, t) && f();
                }
                return document.addEventListener("load", n, !0), () => document.removeEventListener("load", n, !0);
            }, [t, e, f]),
            i.useEffect(() => {
                let e = new MutationObserver(p);
                return (
                    e.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "style"] }),
                    e.observe(document.head, { childList: !0, subtree: !0, characterData: !0 }),
                    () => e.disconnect()
                );
            }, [p]);
    })(m, g);
    let [x, v] = i.useState(null);
    i.useEffect(() => {
        if (null != t) return (0, lT.mn)(t, () => (0, lw.F1)(m, g));
    }, [t, m, g]);
    let b = i.useCallback(() => {
            let e = (0, lw.F1)(m, g),
                t = e?.getBoundingClientRect();
            return null == e || null == t || t.width < 1 || t.height < 1
                ? Promise.reject(Error("no visible preview to capture"))
                : new Promise((n, l) => {
                      v({
                          targetRect: { left: t.left, top: t.top, width: t.width, height: t.height },
                          iframe: e,
                          resolve: n,
                          reject: l,
                      });
                  });
        }, [m, g]),
        j = i.useCallback(
            (e) => {
                v(null), null != x && (0, lw.su)(x.iframe, e).then(x.resolve, x.reject);
            },
            [x],
        ),
        y = i.useCallback(() => {
            v(null), x?.resolve(null);
        }, [x]),
        k = s && null != n && l.type === S.U4.MAIN;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: r()(ei.Mh, d),
                children: [o, (0, a.jsx)("div", { ref: f, className: ei.fm, children: u })],
            }),
            h(k ? b : void 0),
            null != x ? (0, a.jsx)(lv, { targetRect: x.targetRect, onSelect: j, onCancel: y }) : null,
        ],
    });
}
function lR(e) {
    let {
            projectId: t,
            applicationId: n,
            previewApplicationId: l,
            surface: s,
            header: c,
            chatOpen: m,
            onCloseChat: f,
            versionHistoryOpen: p = !1,
            onCloseVersionHistory: g,
            onRestoreVersion: x,
            restoreState: v,
            previewReady: b,
            previewGate: j,
            previewMode: y,
            channelMessages: k,
        } = e,
        A = i.useRef(null),
        [w, N] = i.useState(0);
    i.useLayoutEffect(() => {
        if (s.type === S.U4.MAIN) return (0, u.HV)(n), () => (0, u.HV)(null);
    }, [n, s.type]),
        i.useEffect(() => {
            null != t && (0, h.Hc)(t);
        }, [t]),
        i.useLayoutEffect(() => {
            let e = A.current;
            if (null == e) return;
            function t() {
                null != e && N(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return n.observe(e), () => n.disconnect();
        }, []),
        i.useEffect(() => () => (0, u.Zq)(0), []);
    let E = Math.max(360, w - 320),
        C = null != k ? k.open : m,
        I = m || s.type === S.U4.MAIN;
    return (0, a.jsx)("div", {
        ref: A,
        className: ei.LB,
        children: (0, a.jsx)(l_, {
            projectId: t,
            applicationId: n,
            surface: s,
            previewReady: b,
            header: c,
            mainClassName: null == c ? void 0 : r()(ei.ez, { [ei.zt]: C }),
            content: (0, a.jsx)(ee, {
                applicationId: n,
                previewApplicationId: l,
                surface: s,
                previewReady: b,
                previewGate: j,
                previewMode: y,
            }),
            sidebar: (e) =>
                null != k
                    ? (0, a.jsx)(lr, {
                          open: k.open,
                          maxWidth: E,
                          onWidthChange: u.Zq,
                          children: k.open
                              ? (0, a.jsx)(es, { channel: k.channel, guild: k.guild, onClose: k.onClose })
                              : null,
                      })
                    : null != t && I
                      ? (0, a.jsx)(lr, {
                            open: m,
                            maxWidth: E,
                            onWidthChange: u.Zq,
                            children: (0, a.jsx)("div", {
                                className: ei.cO,
                                children: p
                                    ? (0, a.jsx)(
                                          lA,
                                          { projectId: t, onClose: g ?? (() => {}), onRestore: x ?? (() => {}) },
                                          t,
                                      )
                                    : (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              (0, a.jsx)(lf, { projectId: t }),
                                              (0, a.jsx)(d.Ay, {
                                                  "aria-label": P.intl.string(P.t["/VQax8"]),
                                                  toolbar:
                                                      null == f
                                                          ? null
                                                          : (0, a.jsx)(d.Ay.Icon, {
                                                                icon: o.P,
                                                                tooltip: P.intl.string(R.default.YdgE0j),
                                                                onClick: f,
                                                            }),
                                                  children: (0, a.jsx)(d.Ay.Title, {
                                                      children: P.intl.string(P.t["/VQax8"]),
                                                  }),
                                              }),
                                              (0, a.jsx)("div", {
                                                  className: ei.cb,
                                                  children: (0, a.jsx)(
                                                      le,
                                                      { projectId: t, onRegionCapture: e, restoreState: v },
                                                      t,
                                                  ),
                                              }),
                                          ],
                                      }),
                            }),
                        })
                      : null,
        }),
    });
}
