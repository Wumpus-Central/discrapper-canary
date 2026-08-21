n.d(t, { A: () => lg });
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
    g = n(627363),
    p = n(207371),
    x = n(580954),
    v = n(297264),
    b = n(834730),
    j = n(625180),
    y = n(91242),
    k = n(812901),
    w = n(317608),
    A = n(17928),
    N = n(956518),
    E = n(869146),
    S = n(165610),
    I = n(652215),
    C =
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
                        s = (0, A.bG)([y.A], () => y.A.getFrame(l), [l]),
                        r = (0, A.bG)(
                            [E.A, y.A],
                            () => E.A.getWindowOpen(I.MLl.ACTIVITY_POPOUT) && y.A.getMainFrame()?.id === l,
                            [l],
                        ),
                        { data: o, isLoading: c } = (0, g.YY)(t),
                        d = (0, p.x)(o),
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
                    E.A.getWindowOpen(I.MLl.ACTIVITY_POPOUT) ||
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
        case C.Launched:
            return (0, a.jsx)(w.A, { frameId: l.id, level: k.A.WithinAppContent, className: $.Z7 });
        case C.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: $.qs,
                children: (0, a.jsx)(D, {
                    title: P.intl.string(R.default["4f6Vkr"]),
                    body: P.intl.string(R.default.LJ2q1H),
                }),
            });
        case C.NoApplication:
            return (0, a.jsx)(L, { className: $.qs });
        case C.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: $.qs,
                children: (0, a.jsx)(D, {
                    title: P.intl.string(R.default.FHOJiH),
                    body: P.intl.string(R.default["1yLQoV"]),
                }),
            });
        case C.Error:
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
        case C.AwaitingLaunch:
        case C.Loading:
            return (0, a.jsx)("div", { className: $.qs, children: (0, a.jsx)(m.y, {}) });
    }
}
var G = n(323384),
    U = n(308528),
    H = n(334738),
    q = n(373204),
    B = n(355622),
    V = n(734057),
    z = n(531685),
    W = n(365971),
    K = n(362417);
function Y(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: K.f,
        children: [
            (0, a.jsx)(G.k, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(b.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function X() {
    return (0, a.jsx)("div", { className: K.f, children: (0, a.jsx)(m.y, {}) });
}
function Z(e) {
    let t,
        n,
        { previewApplicationId: l } = e,
        { data: s, isLoading: r } = (0, g.YY)(l),
        o = s?.bot?.id ?? null,
        c = (0, A.bG)([V.A], () => {
            if (null == o) return null;
            let e = V.A.getDMFromUserId(o);
            return null != e ? V.A.getChannel(e) : null;
        });
    (t = c?.id ?? null),
        i.useEffect(() => {
            null != t && U.A.preload(I.ME, t);
        }, [t]),
        (n = (0, A.bG)([z.A], () => z.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, W.Xg)();
            return (
                (0, H.yl)(t, e),
                () => {
                    (0, H.dm)(t, e);
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
          ? (0, a.jsx)(Y, { message: P.intl.string(R.default.bl4eBc) })
          : null == c
            ? (0, a.jsx)(X, {})
            : (0, a.jsx)("div", {
                  className: K.g,
                  children: (0, a.jsx)(q.A, { channel: c, guild: null, chatInputType: B.oU.SIDEBAR }, c.id),
              });
}
var J = n(976102);
function Q(e) {
    let { applicationId: t, previewApplicationId: n, surface: l, previewReady: s, previewGate: r } = e,
        o = (0, c.A)(t, l),
        { data: d, isLoading: u } = (0, g.YY)(t ?? void 0);
    return (i.useEffect(() => {
        r?.type === "permissions" && null != o && (0, x.A)().leaveFrame(o.id);
    }, [o, r?.type]),
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
                : u
                  ? (0, a.jsx)("div", { className: J.q, children: (0, a.jsx)(m.y, {}) })
                  : null == d || (0, p.x)(d) || null == n
                    ? (0, a.jsx)(F, { applicationId: t, surface: l })
                    : (0, a.jsx)(Z, { previewApplicationId: n })
            : (0, a.jsx)(L, { className: J.q });
}
var ee = n(534890),
    et = n(738876),
    en = n(47167),
    el = n(31717),
    ea = n(372054);
function ei(e) {
    let { channel: t, guild: n, onClose: l } = e,
        i = (0, en.Ay)(t),
        s = (0, a.jsx)(d.Ay.Icon, { icon: o.P, tooltip: P.intl.string(P.t.cpT0Cq), onClick: l });
    return (0, a.jsxs)("div", {
        className: ea.Wx,
        children: [
            (0, a.jsx)(et.A, { channel: t, draftType: el.C.ChannelMessage }),
            (0, a.jsxs)(d.Ay, {
                toolbar: s,
                "aria-label": P.intl.string(P.t.BIYAqa),
                children: [
                    (0, a.jsx)(d.Ay.ChannelIcon, { icon: ee.ChatIcon, "aria-label": P.intl.string(P.t["/VQax8"]) }),
                    (0, a.jsx)(d.Ay.Title, { children: i }),
                ],
            }),
            (0, a.jsx)("div", {
                className: ea.GZ,
                children: (0, a.jsx)(q.A, { channel: t, guild: n, chatInputType: B.oU.SIDEBAR }, t.id),
            }),
        ],
    });
}
var es = n(689175),
    er = n(783791);
n(323874), n(14289), n(35956), n(321073);
var eo = n(475358),
    ec = n(922016),
    ed = n(980707),
    eu = n(477782),
    eh = n(81369),
    em = n(717400),
    ef = n(663341),
    eg = n(826745),
    ep = n(866665),
    ex = n(428610),
    ev = n(29080),
    eb = n(783977),
    ej = n(559647),
    ey = n(285796),
    ek = n(775602),
    ew = n(673724),
    eA = n(514042),
    eN = n(939249),
    eE = n(298668);
function eS(e) {
    return r()(eE._B, { [eE.ND]: e });
}
function eI(e) {
    let { name: t, thumbSrc: n = null, compact: l = !1, subText: i, children: s, onThumbError: r } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            null != n
                ? (0, a.jsx)("img", { src: n, alt: "", className: eE.gJ, onError: r })
                : (0, a.jsx)(eA.FileIcon, { size: l ? "xs" : "sm", color: "currentColor" }),
            (0, a.jsxs)("div", {
                className: eE.Wd,
                children: [
                    (0, a.jsx)(b.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: eE.Rr,
                        children: t,
                    }),
                    i,
                ],
            }),
            s,
        ],
    });
}
function eC(e) {
    return (0, a.jsx)("div", { className: eS(e.compact ?? !1), children: eI(e) });
}
function eT(e) {
    let { name: t, thumbSrc: n, ariaLabel: l, onClick: i, onThumbError: s } = e;
    return (0, a.jsx)(eN.D, {
        className: r()(eS(!0), eE.w8),
        onClick: i,
        "aria-label": l,
        children: eI({ name: t, thumbSrc: n, compact: !0, onThumbError: s }),
    });
}
var e_ = n(311656),
    eR = n(789438);
let eP = ew.Is;
function eM(e) {
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
    let d = "exit" === s ? eR.t0 : "enterStart" === s ? eR.Rj : "";
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("span", { className: `${eR.xM} ${eR.nT} ${d}`, children: n }),
            (0, a.jsx)(eo.e, { shortcut: "tab", className: `${eR.xT} ${eR.nT} ${d}`, keyClassName: eR.IS }),
        ],
    });
}
let eL = 0;
function eO(e) {
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
            suggestion: g,
            questionOpen: p = !1,
            modelSettings: x,
            onModelSettingsChange: v,
        } = e,
        [b, j] = i.useState(""),
        y = (0, A.bG)([ek.Ay], () => ek.Ay.isSubmitButtonEnabled),
        [k, w] = i.useState([]),
        [N, E] = i.useState(!1),
        [S, I] = i.useState(!1),
        [C, T] = i.useState(!1);
    i.useEffect(() => {
        l || T(!1);
    }, [l]);
    let _ = i.useRef(null),
        M = i.useRef([]),
        L = i.useRef(new Set()),
        O = i.useRef(d);
    O.current = d;
    let D = i.useCallback((e) => {
            (M.current = e), w(e);
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
                        a = ++eL,
                        i = { localId: a, name: l.name, size: l.size, contentType: e, status: "uploading" };
                    if (t.length >= eP) {
                        t.push({
                            ...i,
                            status: "error",
                            errorText: P.intl.formatToPlainString(R.default.DlX57a, { count: eP }),
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
                I(!0);
                try {
                    let e = await h();
                    null != e && G([e]);
                } catch (e) {
                    console.error("[vibegrations] region capture failed", e),
                        D([
                            ...M.current,
                            {
                                localId: ++eL,
                                name: "preview-capture.png",
                                size: 0,
                                contentType: "image/png",
                                status: "error",
                                errorText: P.intl.string(R.default["4DQd7d"]),
                            },
                        ]);
                } finally {
                    I(!1);
                }
            }
        }, [h, S, G, D]),
        H = i.useCallback(
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
        q = k.every((e) => "ready" === e.status),
        B = "" !== b.trim() || k.length > 0,
        V = t && B && q,
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
        K = i.useCallback(() => {
            null == o || C || (T(!0), o());
        }, [o, C]),
        Y = i.useCallback(
            (e) => {
                if ("Escape" === e.key && l && null != o && !C) {
                    e.preventDefault(), e.stopPropagation(), K();
                    return;
                }
                if ("Tab" === e.key && !e.shiftKey && null != g && "" === b) {
                    e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), j(g);
                    return;
                }
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != u && (e.preventDefault(), u());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), z());
            },
            [z, u, l, o, C, K, g, b],
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
        J = i.useCallback((e) => {
            e.dataTransfer.types.includes("Files") && (e.preventDefault(), E(!0));
        }, []),
        Q = i.useCallback(
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
            let t = e$(e);
            null != t && el(t);
        }
        ei(!0);
        let t = setTimeout(() => ei(!1), eD);
        return () => clearTimeout(t);
    }, [b]);
    let es = i.useMemo(() => ({ "--custom-glow-x": `${en}px` }), [en]),
        er = ea ? ` ${eR.EB}` : "",
        eo = !s && null != g && "" === b;
    return (0, a.jsxs)("form", {
        onSubmit: W,
        onDrop: Z,
        onDragOver: J,
        onDragLeave: () => E(!1),
        className: N ? `${eR.DA} ${eR.pV}` : eR.DA,
        children: [
            k.length > 0
                ? (0, a.jsx)("div", {
                      className: eR.lN,
                      children: k.map((e) => (0, a.jsx)(eF, { draft: e, onRemove: H }, e.localId)),
                  })
                : null,
            (0, a.jsxs)("div", {
                className: eR.VA,
                ref: ee,
                children: [
                    (0, a.jsx)("span", { className: `${eR.wg} ${eR.LP}${er}`, style: es, "aria-hidden": !0 }),
                    (0, a.jsx)("span", { className: `${eR.wg} ${eR.L3}${er}`, style: es, "aria-hidden": !0 }),
                    (0, a.jsx)("input", {
                        ref: _,
                        type: "file",
                        multiple: !0,
                        onChange: Q,
                        className: eR.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    (0, a.jsx)(ec.Y, {
                        targetElementRef: et,
                        position: "top",
                        align: "left",
                        animation: ec.Y.Animation.NONE,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, a.jsx)(ed.W, {
                                "data-menu-migrated": !0,
                                navId: "vibegrations-composer-attach",
                                "aria-label": P.intl.string(P.t.d56gCa),
                                onClose: t,
                                onSelect: t,
                                children: (0, a.jsxs)(eu.rX, {
                                    children: [
                                        (0, a.jsx)(eu.Dr, {
                                            id: "upload-file",
                                            label: P.intl.string(P.t["d3+iYs"]),
                                            iconLeft: eh.H,
                                            leadingAccessory: { type: "icon", icon: eh.H },
                                            action: () => _.current?.click(),
                                        }),
                                        null != f
                                            ? (0, a.jsx)(eu.Dr, {
                                                  id: "import-project",
                                                  label: P.intl.string(R.default.edKajy),
                                                  iconLeft: em.q,
                                                  leadingAccessory: { type: "icon", icon: em.q },
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
                                className: `${eR.Y0} ${eR.nu}`,
                                disabled: !t,
                                "aria-label": P.intl.string(P.t.d56gCa),
                                "aria-haspopup": "menu",
                                "aria-expanded": l,
                                children: (0, a.jsx)(ef.PlusLargeIcon, {
                                    size: "refresh_sm",
                                    color: "currentColor",
                                    className: eR.Qu,
                                }),
                            });
                        },
                    }),
                    eo
                        ? (0, a.jsx)("div", {
                              className: eR.ar,
                              "aria-hidden": "true",
                              children: (0, a.jsx)(eM, { text: g }),
                          })
                        : null,
                    (0, a.jsx)(eg.y, {
                        value: b,
                        onChange: (e) => j(e.currentTarget.value),
                        onKeyDown: Y,
                        onPaste: X,
                        placeholder: s
                            ? P.intl.string(R.default.pGFXZ0)
                            : n
                              ? P.intl.string(R.default.JeM47J)
                              : t
                                ? eo
                                    ? ""
                                    : p
                                      ? P.intl.string(R.default.M3ovXY)
                                      : P.intl.string(l ? R.default["67PpcP"] : R.default.ahRdoJ)
                                : P.intl.string(R.default.nm4w9P),
                        disabled: !t,
                        "aria-label": P.intl.string(R.default.OPr66w),
                        rows: 1,
                        className: eR.jp,
                    }),
                    (0, a.jsxs)("div", {
                        className: eR.Sz,
                        children: [
                            (0, a.jsx)(ep.m, {
                                text: P.intl.string(R.default.B5gWPk),
                                ariaHidden: !0,
                                children: (0, a.jsx)("button", {
                                    type: "button",
                                    className: eR.Y0,
                                    disabled: null == h || !t || S,
                                    onClick: U,
                                    "aria-label": P.intl.string(R.default.B5gWPk),
                                    children: S
                                        ? (0, a.jsx)(m.y, { type: m.t.SPINNING_CIRCLE_SIMPLE, className: eR.Rk })
                                        : (0, a.jsx)(ex.K, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                }),
                            }),
                            l && null != o
                                ? (0, a.jsx)(ep.m, {
                                      text: P.intl.string(R.default.KdgI4k),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)("button", {
                                          type: "button",
                                          className: eR.AW,
                                          disabled: C,
                                          onClick: K,
                                          "aria-label": P.intl.string(R.default.KdgI4k),
                                          children: (0, a.jsx)(ev.w, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : null != x && null != v
                                  ? (0, a.jsx)(e_.A, {
                                        settings: x.settings,
                                        choices: x.choices,
                                        disabled: !t,
                                        onChange: v,
                                        className: `${eR.Y0} ${eR.Il}`,
                                        icon: (0, a.jsx)(eb.R, {
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
                              className: eR.fF,
                              children: [
                                  (0, a.jsx)("div", { className: eR.MT }),
                                  (0, a.jsx)("button", {
                                      type: "submit",
                                      className: eR.rt,
                                      disabled: !V,
                                      "aria-label": P.intl.string(R.default["22GHMt"]),
                                      children: (0, a.jsx)(ej.SendMessageIcon, {
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
let eD = 1500;
function e$(e) {
    let t = (e$.canvas ?? (e$.canvas = document.createElement("canvas"))).getContext("2d");
    if (null == t) return null;
    let n = window.getComputedStyle(e);
    t.font = `${n.fontStyle} ${n.fontWeight} ${n.fontSize} ${n.fontFamily}`;
    let l = e.value.slice(0, e.selectionStart ?? e.value.length),
        a = l.slice(l.lastIndexOf("\n") + 1),
        i = parseFloat("" !== n.paddingInlineStart ? n.paddingInlineStart : "" !== n.paddingLeft ? n.paddingLeft : "0");
    return e.offsetLeft + i + t.measureText(a).width - e.scrollLeft;
}
function eF(e) {
    let { draft: t, onRemove: n } = e;
    return (0, a.jsxs)(eC, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(b.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(m.y, { type: m.t.SPINNING_CIRCLE_SIMPLE, className: eR.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: eR.o1,
                onClick: () => n(t.localId),
                "aria-label": P.intl.string(R.default["3HWvgk"]),
                children: (0, a.jsx)(ey.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
e$.canvas = null;
var eG = n(287809);
let eU = {
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
function eH(e) {
    if (null != e.labelText && "" !== e.labelText) return e.labelText;
    let t = null != e.labelKey ? eU[e.labelKey] : void 0;
    return P.intl.string(t ?? R.default.nv6pUM);
}
function eq(e) {
    let t;
    for (let n of e) (null == t || n.touched > t.touched) && (t = n);
    return t;
}
function eB(e) {
    return (
        "node" === e.kind &&
        null != e.node &&
        null == e.task_id &&
        ("task" === e.node.node_kind || "task" === e.node.id)
    );
}
n(134528), n(947204);
var eV = n(46054),
    ez = n(13699);
function eW(e) {
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
                className: r()(ez.Z$, ez.KH),
            }),
            (0, a.jsx)("path", {
                fill: "currentColor",
                d: "M17.48 14.36a.56.56 0 0 1 1.04 0l.85 2.27 2.27.85c.48.18.48.86 0 1.04l-2.27.85-.85 2.27a.56.56 0 0 1-1.04 0l-.85-2.27-2.27-.85a.56.56 0 0 1 0-1.04l2.27-.85.85-2.27Z",
                className: r()(ez.Z$, ez.Q_),
            }),
        ],
    });
}
var eK = n(847374),
    eY = n(320448);
let eX = i.createContext(0);
function eZ(e) {
    let { glyph: t, line: n, live: l, settled: s, tint: o, detail: c, connected: d = !1, connectsDown: u = !1 } = e,
        [h, m] = i.useState(!1),
        f = i.useContext(eX),
        g = i.useId(),
        p = i.useCallback(() => m((e) => !e), []),
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
        j = h ? eK.a : eY._,
        y = null != c,
        k = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("span", { className: ez.hd, children: t }),
                (0, a.jsx)(b.E, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "currentColor",
                    className: r()(ez.qo, { [ez._q]: "exit" === v, [ez.GD]: "enter" === v }),
                    children: x,
                }),
                y ? (0, a.jsx)(j, { size: "xs", color: "currentColor", className: ez.nD }) : null,
            ],
        }),
        w = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("span", { className: ez.$m, children: k }, `face-${f}`),
                l
                    ? (0, a.jsx)("span", { className: r()(ez.$m, ez.pw), "aria-hidden": !0, children: k }, `shine-${f}`)
                    : null,
            ],
        });
    return (0, a.jsxs)("li", {
        className: ez.K1,
        "data-live": l,
        "data-settled": s,
        "data-connected": d,
        "data-connects-down": u,
        style: null != o ? { "--custom-vibegrations-shimmer-tint": o } : void 0,
        children: [
            y
                ? (0, a.jsx)(eN.D, {
                      tag: "div",
                      className: r()(ez.ep, ez.EK),
                      "aria-expanded": h,
                      "aria-controls": g,
                      "aria-label": P.intl.formatToPlainString(R.default.s1wx5H, { activity: x }),
                      onClick: p,
                      children: w,
                  })
                : (0, a.jsx)("div", { className: ez.ep, children: w }),
            (0, a.jsx)("div", { id: g, hidden: !h, className: ez.BA, children: c }),
        ],
    });
}
var eJ = n(256905);
let eQ = /^(.*?)\s*\((\+\d+)?[\s,]*([\u2212-]\d+)?\)$/,
    e0 =
        /^(.*?)\s*\((\d+ lines?|\d+ match(?:es)?|no matches|\d+ files?|empty|no logs yet|\d+ not found(?:, \d+ read-only)?|\d+ read-only|\d+KB)\)$/,
    e1 =
        /^(Reading|Writing|Editing|Listing|Searching|Deleting|Running|Downloading|Saving|Sending|Importing|Imported|Building|Viewing|Loaded|Updating|Registering|Collecting)(?= )/,
    e2 = {
        "text-xs/normal": "text-xs/semibold",
        "text-sm/normal": "text-sm/semibold",
        "text-md/normal": "text-md/semibold",
    };
function e6(e, t) {
    let n = e1.exec(e);
    return null == n
        ? e
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(b.E, { tag: "span", variant: e2[t], color: "none", children: n[1] }),
                  e.slice(n[1].length),
              ],
          });
}
function e3(e) {
    let { text: t, variant: n } = e,
        l = eQ.exec(t),
        i = l?.[2],
        s = l?.[3];
    if (null != l && (null != i || null != s))
        return (0, a.jsxs)(a.Fragment, {
            children: [
                e6(l[1], n),
                null == i ? null : (0, a.jsxs)("span", { className: ez.MM, children: [" ", i] }),
                null == s ? null : (0, a.jsxs)("span", { className: ez.ie, children: [" ", s] }),
            ],
        });
    let r = e0.exec(t);
    return null == r
        ? e6(t, n)
        : (0, a.jsxs)(a.Fragment, {
              children: [e6(r[1], n), (0, a.jsxs)("span", { className: ez.qZ, children: [" ", r[2]] })],
          });
}
var e7 = n(229775);
function e4(e) {
    let { projectId: t, node: n, presentation: l = "row", active: s = !1 } = e,
        [o, c] = i.useState(!1),
        d = i.useId(),
        u = i.useCallback(() => c((e) => !e), []),
        h = eH(n),
        m = n.detail,
        f = "failed" === n.status ? "text-feedback-critical" : "detail" === l ? "text-muted" : "text-default",
        g = "text-muted" === f,
        p = s && g ? "none" : o && g ? "currentColor" : f,
        x = r()(ez.iq, { [e7.Hz]: s && g }),
        v = "detail" === l ? "text-md/normal" : "text-sm/normal",
        j = "detail" === l ? "text-sm/normal" : "text-xs/normal",
        y = null != t ? n.screenshots : [];
    if (0 === m.length && 0 === y.length)
        return (0, a.jsx)("li", {
            "data-step-kind": n.labelKey ?? "step",
            className: ez.Dx,
            children: (0, a.jsx)(b.E, {
                tag: "div",
                variant: v,
                color: p,
                selectable: !0,
                className: x,
                children: (0, a.jsx)(e3, { text: h, variant: v }),
            }),
        });
    let k = o ? eK.a : eY._;
    return (0, a.jsxs)("li", {
        "data-step-kind": n.labelKey ?? "step",
        className: ez.Dx,
        children: [
            (0, a.jsxs)(eN.D, {
                tag: "div",
                className: ez.kG,
                "aria-expanded": o,
                "aria-controls": d,
                "aria-label": P.intl.formatToPlainString(R.default.z4KWsN, { step: h }),
                onClick: u,
                children: [
                    (0, a.jsx)(b.E, {
                        tag: "span",
                        variant: v,
                        color: p,
                        className: x,
                        children: (0, a.jsx)(e3, { text: h, variant: v }),
                    }),
                    (0, a.jsx)(k, { size: "xs", color: "currentColor", className: ez.Ue }),
                ],
            }),
            (0, a.jsxs)("div", {
                id: d,
                hidden: !o,
                className: ez.yJ,
                children: [
                    m.map((e, t) =>
                        (0, a.jsx)(
                            b.E,
                            {
                                tag: "div",
                                variant: j,
                                color: s && g ? "none" : "text-muted",
                                selectable: !0,
                                className: r()({ [e7.Hz]: s && g }),
                                children: (0, a.jsx)(e3, { text: e, variant: j }),
                            },
                            t,
                        ),
                    ),
                    null != t && y.length > 0
                        ? (0, a.jsx)("div", {
                              className: ez.y8,
                              children: y.map((e) => (0, a.jsx)(e8, { projectId: t, screenshotId: e }, e)),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function e5() {}
function e8(e) {
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
            }, e5);
        }, [t, n, c]);
    return r ? null : (0, a.jsx)(eT, { name: c, thumbSrc: l, ariaLabel: c, onClick: d, onThumbError: () => o(!0) });
}
function e9(e) {
    let { projectId: t, steps: n, fallbackLabel: l, live: i, durationMs: s, connectsDown: r = !1 } = e,
        o = eq(n),
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
                  ? eH(o)
                  : (l ?? P.intl.string(R.default.nv6pUM)),
        u = n.length > 1 || n.some((e) => e.detail.length > 0 || e.screenshots.length > 0);
    return (0, a.jsx)(eZ, {
        glyph: (0, a.jsx)(eW, {}),
        line: d,
        live: i,
        settled: null != c,
        connectsDown: r,
        detail: u
            ? (0, a.jsx)("ol", {
                  className: ez.dO,
                  children: n.map((e) =>
                      (0, a.jsx)(e4, { projectId: t, node: e, presentation: "detail", active: i && e === o }, e.id),
                  ),
              })
            : void 0,
    });
}
var te = n(478016),
    tt = n(34136);
function tn(e) {
    let { title: t, trailing: n, children: l, className: i, headerClassName: s, ...o } = e;
    return (0, a.jsxs)("section", {
        className: r()(tt.N, i),
        ...o,
        children: [
            (0, a.jsxs)("header", {
                className: r()(tt.w, s),
                children: [
                    (0, a.jsx)(b.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var tl = n(113757);
function ta(e) {
    let { idea: t, selected: n, onPick: l } = e,
        s = i.useId(),
        o = null == l;
    return (0, a.jsxs)(eN.D, {
        className: r()(tl.nM, { [tl.f1]: o, [tl.CZ]: n }),
        onClick: o ? void 0 : () => l(t),
        "aria-label": P.intl.formatToPlainString(R.default.pztRGi, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : s,
        "aria-disabled": o,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: tl.jo,
                children: [
                    n
                        ? (0, a.jsx)(te.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: tl.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(b.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: tl.G9,
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
function ti(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [s, r] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                r((t) => new Set(t).add(e.id)), l?.(e);
            },
            [l],
        );
    return (0, a.jsx)(tn, {
        title: P.intl.string(R.default.DAvYsi),
        "data-vibegrations-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                ta,
                { idea: e, selected: s.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var ts = n(375068);
function tr(e) {
    let { projectId: t, attachments: n } = e,
        l = n.filter(to);
    return (0, a.jsx)("div", {
        className: ts.KT,
        children: n.map((e, n) =>
            null == e.id
                ? (0, a.jsx)(tc, { name: e.name }, n)
                : to(e)
                  ? (0, a.jsx)(tu, { projectId: t, viewableImages: l, viewerIndex: l.indexOf(e) }, n)
                  : (0, a.jsx)(td, { projectId: t, id: e.id, name: e.name }, n),
        ),
    });
}
function to(e) {
    return null != e.id && ew.Wb.has(e.content_type);
}
function tc(e) {
    let { name: t, unavailable: n = !1 } = e,
        l = n ? P.intl.formatToPlainString(R.default.OBr7WW, { name: t }) : t;
    return (0, a.jsx)(eC, { name: l, compact: !0 });
}
function td(e) {
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
        ? (0, a.jsx)(tc, { name: l, unavailable: !0 })
        : (0, a.jsx)(eT, {
              name: l,
              thumbSrc: null,
              ariaLabel: P.intl.formatToPlainString(R.default.gV5YcR, { name: l }),
              onClick: o,
          });
}
function tu(e) {
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
        ? (0, a.jsx)(tc, { name: r, unavailable: !0 })
        : (0, a.jsx)(eT, {
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
var th = n(430392),
    tm = n(824757);
function tf(e) {
    let { label: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: tm.uW,
        children: [(0, a.jsx)(b.E, { variant: "text-xs/medium", color: "text-muted", tag: "span", children: t }), n],
    });
}
function tg(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)(tf, {
              label: t,
              children: (0, a.jsx)("div", {
                  className: tm.Ip,
                  children: n.map((e) =>
                      (0, a.jsx)(
                          "span",
                          {
                              className: tm.jw,
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
function tp(e) {
    let { isActivity: t } = e,
        n = t ? G.k : th.RobotIcon;
    return (0, a.jsxs)("span", {
        className: tm.L6,
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
function tx(e) {
    let { proposal: t } = e;
    return (0, a.jsx)(tn, {
        title: P.intl.string(R.default["60htw+"]),
        trailing: (0, a.jsx)(tp, { isActivity: !0 === t.is_activity }),
        headerClassName: tm.wx,
        "data-vibegrations-plan-card": !0,
        children: (0, a.jsxs)("div", {
            className: tm.rf,
            children: [
                (0, a.jsx)(b.E, {
                    variant: "experimental/body-md/normal",
                    color: "text-default",
                    selectable: !0,
                    children: t.summary,
                }),
                t.changes.length > 0
                    ? (0, a.jsx)(tf, {
                          label: P.intl.string(R.default.KLyB8Y),
                          children: (0, a.jsx)("ul", {
                              className: tm.p_,
                              children: t.changes.map((e, t) =>
                                  (0, a.jsx)(
                                      "li",
                                      {
                                          className: tm.Aw,
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
                    ? (0, a.jsx)(tf, {
                          label: P.intl.string(P.t["0hKkS+"]),
                          children: (0, a.jsx)("ul", {
                              className: tm.p_,
                              children: t.commands.map((e, t) =>
                                  (0, a.jsxs)(
                                      "li",
                                      {
                                          className: tm.uX,
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
var tv = n(192308),
    tb = n(479191);
function tj(e) {
    let { projectId: t, request: l } = e,
        s = i.useCallback(() => {
            (0, tv.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("338013"), n.e("468421")]).then(n.bind(n, 539620));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: l });
            });
        }, [t, l]);
    return (0, a.jsxs)("article", {
        className: tb.Lo,
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
                className: tb.cS,
                children: l.fields.map((e) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: tb.$H,
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
                className: tb.sq,
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
var ty = n(976814),
    tk = n(973e3);
function tw(e) {
    let { projectId: t, request: n } = e,
        l = (0, A.bG)([h.Ay], () => h.Ay.getSettings(t)),
        s = (n.keys ?? []).map((e) => l?.schema.find((t) => t.key === e)).filter((e) => null != e),
        r = i.useCallback(() => {
            (0, ty.A)(t, { scopeKeys: n.keys, note: n.note, notifyAgent: !0 });
        }, [t, n]);
    return (0, a.jsxs)("article", {
        className: tk.Mk,
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
                      className: tk.R6,
                      children: s.map((e) =>
                          (0, a.jsx)(
                              "span",
                              {
                                  className: tk.K4,
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
                className: tk.p0,
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
function tA(e) {
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
function tN(e) {
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
function tE(e) {
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
function tS(e) {
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
function tC(e) {
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
function tT(e) {
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
function t_(e) {
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
function tR(e) {
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
function tP(e) {
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
function tM(e) {
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
function tL() {
    return [
        { key: "snail", Illocon: tA, tint: "var(--illo-yellow-40)", name: tO(R.default["2l3AEQ"]) },
        { key: "goat", Illocon: tN, tint: "var(--illo-orange-40)", name: tO(R.default["+FPL+I"]) },
        { key: "frog", Illocon: tE, tint: "var(--illo-green-40)", name: tO(R.default.w4GOfR) },
        { key: "bunny", Illocon: tS, tint: "var(--illo-pink-40)", name: tO(R.default.XmZT9M) },
        { key: "cat", Illocon: tI, tint: "var(--illo-pink-40)", name: tO(R.default.NnydwQ) },
        { key: "caterpillar", Illocon: tC, tint: "var(--illo-green-40)", name: tO(R.default["4iXcNT"]) },
        { key: "butterfly", Illocon: tT, tint: "var(--illo-purple-40)", name: tO(R.default.DoTGt5) },
        { key: "dog", Illocon: t_, tint: "var(--illo-yellow-40)", name: tO(R.default["9zxqmP"]) },
        { key: "spider", Illocon: tR, tint: "var(--illo-orange-40)", name: tO(R.default.HF0T3L) },
        { key: "bee", Illocon: tP, tint: "var(--illo-yellow-40)", name: tO(R.default.XTzDga) },
        { key: "bot", Illocon: tM, tint: "var(--illo-purple-40)", name: tO(R.default.abtC2b) },
    ];
}
function tO(e) {
    return P.intl.string(e);
}
var tD = n(683063);
function t$(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : P.intl.string(R.default.MdXWEK);
}
function tF(e) {
    let { lane: t, Illocon: n, tint: l, name: i, connectsDown: s } = e,
        r = t.task,
        o = "running" === r.status,
        c = eq(t.steps),
        d = o
            ? null != c
                ? eH(c)
                : t$(r)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(t$(e));
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
                                    className: ez.dO,
                                    children: t.steps.map((e) =>
                                        (0, a.jsx)(e4, { node: e, presentation: "detail", active: o && e === c }, e.id),
                                    ),
                                })
                              : null,
                          r.detail.map((e, t) => (0, a.jsx)("div", { className: ez.iq, children: e }, t)),
                      ],
                  });
    return (0, a.jsx)(eZ, {
        glyph: (0, a.jsx)(tD.u, {
            asset: (0, a.jsx)(n, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: t$(r),
            position: "left",
            children: (0, a.jsx)("span", {
                className: ez.nC,
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
var tG = n(820081),
    tU = n(329456);
function tH(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", {
        className: tU.Vn,
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
        children: "completed" === t ? (0, a.jsx)(tG.B, { size: "xxs", color: "currentColor" }) : null,
    });
}
function tq(e) {
    return { completed: e.filter((e) => "completed" === e.status).length, total: e.length };
}
function tB(e) {
    let { todos: t, provisional: n } = e;
    return (0, a.jsxs)("ul", {
        className: tU.zR,
        children: [
            t.map((e) =>
                (0, a.jsxs)(
                    "li",
                    {
                        className: tU.qN,
                        "data-status": e.status,
                        children: [
                            (0, a.jsx)(tH, { status: e.status }),
                            (0, a.jsx)(b.E, {
                                variant: "text-sm/normal",
                                color: "completed" === e.status ? "text-muted" : "text-default",
                                tag: "span",
                                className: tU.ku,
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
                      className: tU.qN,
                      "data-status": "pending",
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(tH, { status: "pending" }),
                          (0, a.jsx)(b.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              tag: "span",
                              className: tU.ku,
                              selectable: !0,
                              children: n,
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function tV(e) {
    let { todos: t, provisional: n, announceProgress: l = !0 } = e,
        { completed: i, total: s } = tq(t);
    return 0 === s
        ? null
        : (0, a.jsxs)("article", {
              className: tU.Rx,
              "data-vibegrations-todo-card": !0,
              children: [
                  (0, a.jsxs)("header", {
                      className: tU.Ye,
                      children: [
                          (0, a.jsx)(b.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: P.intl.string(R.default.qCRC6c),
                          }),
                          (0, a.jsx)("span", {
                              className: tU.mA,
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
                  (0, a.jsx)(tB, { todos: t, provisional: n }),
              ],
          });
}
var tz = n(165648);
function tW(e) {
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
            className: ez.pj,
            "data-live": !1,
            children: (0, a.jsx)(eZ, {
                glyph: (0, a.jsx)(ev.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: P.intl.string(R.default["5T7DSm"]),
                live: !1,
                settled: !0,
            }),
        });
    let c = l ? void 0 : (o.turn?.durationMs ?? s);
    if (0 === o.steps.length && 0 === o.tasks.length) return null;
    let d = o.tasks,
        u = (function (e) {
            let t = tL(),
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
    return (0, a.jsx)(eX.Provider, {
        value: d.length,
        children: (0, a.jsxs)("ol", {
            className: ez.pj,
            "data-live": h,
            children: [
                (0, a.jsx)(e9, {
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
                                ? ((n = e.task.helperMark), tL().find((e) => e.key === n))
                                : void 0,
                        i = l ?? u.get(e.taskId);
                    return null == i
                        ? null
                        : (0, a.jsx)(
                              tF,
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
            pickedIdeaIds: g,
            sideReply: p = !1,
        } = e,
        x = i.useMemo(
            () =>
                (function (e) {
                    let t = [],
                        n = null,
                        l = null;
                    for (let [a, i] of e.entries()) {
                        if ("thinking" === i.kind) {
                            n = null;
                            continue;
                        }
                        if ("todos" === i.kind) {
                            if (null != i.task_id && "" !== i.task_id) continue;
                            let e = i.items ?? [];
                            if (0 === e.length) continue;
                            null != l
                                ? (l.todos = e)
                                : ((l = { type: "todos", key: `todos-${a}`, todos: e }), t.push(l));
                            continue;
                        }
                        if ("assistant_delta" !== i.kind) continue;
                        let e = i.message ?? "";
                        "" !== e &&
                            (null == n
                                ? ((n = { type: "message", key: `message-${a}`, content: e }), t.push(n))
                                : (n.content = e)),
                            !0 === i.message_finished && (n = null);
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
                    if (!eB(n) && ("node" === n.kind || "error" === n.kind || "terminal_error" === n.kind)) break;
                }
            }
            return !1;
        })(n),
        k = y && null != v && v.content.trim() === l.trim(),
        w = null == s && "" !== l && !k,
        A = (function (e) {
            let { hasAttachments: t, showsClosingMessage: n, endsOnStreamedMessage: l } = e;
            return t ? (n ? "closing" : l ? "streamed" : "standalone") : "none";
        })({ hasAttachments: null != u && u.length > 0, showsClosingMessage: w, endsOnStreamedMessage: y }),
        N = null == u ? null : (0, a.jsx)(tr, { projectId: t, attachments: u }),
        E = null == N ? null : (0, a.jsx)("div", { className: ez.MT, children: N }),
        S = p
            ? (0, a.jsx)(b.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: P.intl.string(R.default.OAjkIT),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: ez.ue,
        children: [
            x.length > 0 || null != j
                ? (0, a.jsxs)("ol", {
                      className: ez.dO,
                      children: [
                          x.map((e) =>
                              (0, a.jsx)(
                                  "li",
                                  {
                                      className: r()(ez.ky, e7.XR),
                                      children:
                                          "todos" === e.type
                                              ? (0, a.jsx)(tV, { todos: e.todos, provisional: c })
                                              : (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                        (0, a.jsx)("div", {
                                                            className: r()(tz.PT, ez.cW),
                                                            children: eV.A.parse(e.content, !0, {
                                                                allowList: !0,
                                                                allowHeading: !0,
                                                                allowLinks: !0,
                                                            }),
                                                        }),
                                                        "streamed" === A && e === v ? E : null,
                                                    ],
                                                }),
                                  },
                                  e.key,
                              ),
                          ),
                          null != j
                              ? (0, a.jsx)("li", {
                                    className: r()(ez.ky, e7.XR),
                                    children: (0, a.jsx)(tV, { todos: j, provisional: c }),
                                })
                              : null,
                      ],
                  })
                : null,
            null != s
                ? (0, a.jsx)(tx, { proposal: s })
                : w
                  ? (0, a.jsxs)("div", {
                        className: r()(ez.ky, e7.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: r()(tz.PT, ez.cW),
                                children: eV.A.parse(l, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === A ? E : null,
                            S,
                        ],
                    })
                  : null,
            null != h
                ? (0, a.jsx)("div", {
                      className: r()(ez.ky, e7.XR),
                      children: (0, a.jsx)(tj, { projectId: t, request: h }),
                  })
                : null,
            null != m
                ? (0, a.jsx)("div", {
                      className: r()(ez.ky, e7.XR),
                      children: (0, a.jsx)(tw, { projectId: t, request: m }),
                  })
                : null,
            "standalone" === A ? N : null,
            null != d && d.length > 0 ? (0, a.jsx)(ti, { ideas: d, pickedIdeaIds: g, onPick: f }) : null,
            w ? null : S,
        ],
    });
}
var tY = n(320095),
    tX = n(963852),
    tZ = n(521981),
    tJ = n(763754),
    tQ = n(491182),
    t0 = n(622868),
    t1 = n(308334),
    t2 = n(837528),
    t6 = n(375199),
    t3 = n(715628),
    t7 = n(752636),
    t4 = n(9842),
    t5 = n(589022),
    t8 = n(95701),
    t9 = n(994500),
    ne = n(967198),
    nt = n(441136);
let nn = (0, t8.createChannelRecord)({ id: "vibegrations-builder", type: I.rbe.DM }),
    nl = {
        id: "vibegrations-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function na(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: r()(nt.Yq, { [nt.x1]: t }), children: e });
}
function ni(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function ns(e, t) {
    let { content: n } = (0, t6.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        l = i.useMemo(() => ({ message: e, channel: nn, compact: !1, groupId: e.id }), [e]);
    return "" !== t ? (0, t3.A)(l, n) : null;
}
function nr(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        s = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        r = (0, t2.m)(e, nn, t.usernameProfile, l),
        o = (0, t2.Jo)(t.avatarProfile, l),
        c = (0, A.bG)([ne.A], () => ne.A.getGuildId()),
        d = (0, A.bG)([eG.default], () => eG.default.getCurrentUser()),
        u = i.useCallback(
            (t) => {
                let n = eG.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, a.jsx)(t5.A, { ...t, user: n, currentUser: d, guildId: c ?? void 0 });
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
function no(e) {
    let { baseMessage: t, referenced: n, onJumpToReplied: l } = e,
        s = i.useMemo(
            () => ("" !== n.content ? (0, tZ.Ay)(n, { formatInline: !0, allowGameMentions: !0 }).content : null),
            [n],
        ),
        { isReplyAuthorBlocked: r, isReplyAuthorIgnored: o } = (0, A.cf)(
            [t9.A],
            () => ({
                isReplyAuthorBlocked: t9.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: t9.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        c = (0, tJ.X4)(n),
        d = (0, tJ.X4)(t),
        u = nr(n);
    return (0, a.jsx)(t1.A, {
        repliedAuthor: c,
        baseAuthor: d,
        baseMessage: t,
        channel: nn,
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
function nc(e) {
    let { message: t, author: n } = e,
        l = nr(t);
    return (0, a.jsx)(t0.Ay, {
        message: t,
        channel: nn,
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
function nd(e) {
    let { content: t, createdAt: n, userId: l, accessories: s } = e,
        r = (0, A.bG)([eG.default], () => (null != l ? eG.default.getUser(l) : null) ?? eG.default.getCurrentUser(), [
            l,
        ]),
        o = i.useMemo(() => (0, tJ.FT)(r, null), [r]),
        c = i.useMemo(() => {
            if (null == r) return null;
            let e = (0, tX.Ay)({ channelId: nn.id, content: t, author: r });
            return (0, tY.rh)({ ...e, timestamp: ni(n, e.timestamp), state: I.cmJ.SENT });
        }, [t, r, n]);
    return null == c ? null : (0, a.jsx)(nu, { message: c, author: o, content: t, accessories: s });
}
function nu(e) {
    let { message: t, author: n, content: l, accessories: i } = e,
        s = ns(t, l);
    return (0, a.jsx)(tQ.A, {
        className: nt.yE,
        author: n,
        childrenHeader: (0, a.jsx)(nc, { message: t, author: n }),
        childrenMessageContent: s,
        childrenAccessories: na(i, "" !== l),
        disableInteraction: !0,
    });
}
function nh(e) {
    let { content: t, createdAt: n, accessories: l, replyTo: s, onJumpToReplied: r } = e,
        o = i.useMemo(() => (0, tJ.FT)(null, null), []),
        c = i.useMemo(() => ({ ...o, nick: "Conjure", colorString: "var(--text-brand)" }), [o]),
        d = s?.userId,
        u = (0, A.bG)([eG.default], () => (null != d ? eG.default.getUser(d) : null) ?? eG.default.getCurrentUser(), [
            d,
        ]),
        h = i.useMemo(() => {
            if (null == s || null == u) return null;
            let e = (0, tX.Ay)({ channelId: nn.id, content: s.content, author: u });
            return (0, tY.rh)({ ...e, id: s.id, timestamp: ni(s.createdAt, e.timestamp), state: I.cmJ.SENT });
        }, [s, u]),
        m = i.useMemo(() => (null == s ? void 0 : { channel_id: nn.id, message_id: s.id }), [s]),
        f = i.useMemo(() => {
            let e = (0, tX.Ay)({ channelId: nn.id, content: t, author: nl });
            return (0, tY.rh)({
                ...e,
                timestamp: ni(n, e.timestamp),
                state: I.cmJ.SENT,
                ...(null != m ? { type: I.lAJ.REPLY, message_reference: m } : {}),
            });
        }, [t, n, m]),
        g = ns(f, t);
    return (0, a.jsxs)("div", {
        className: nt.$4,
        "data-replying": null != h ? "true" : void 0,
        children: [
            (0, a.jsx)(tQ.A, {
                className: nt.yE,
                author: c,
                childrenRepliedMessage:
                    null == h ? null : (0, a.jsx)(no, { baseMessage: f, referenced: h, onJumpToReplied: r }),
                childrenHeader: (0, t7.A)({ message: f, channel: nn, author: c, guildId: void 0, isGroupStart: !0 }),
                childrenMessageContent: g,
                childrenAccessories: na(l, "" !== t),
                disableInteraction: !0,
            }),
            (0, a.jsx)("span", {
                className: nt.st,
                "aria-hidden": "true",
                children: (0, a.jsx)(G.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
            }),
        ],
    });
}
function nm(e) {
    let { projectId: t, messages: n, ref: l, onPickIdea: s } = e,
        r = (0, A.bG)([eG.default], () => eG.default.getCurrentUser()),
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
              className: ts.x7,
              children: (0, a.jsx)(nf, {
                  role: "assistant",
                  children: (0, a.jsx)(nh, { content: P.intl.string(R.default.khZEUv) }),
              }),
          })
        : (0, a.jsx)("ol", {
              ref: c,
              className: ts.x7,
              children: n.map((e, l) => {
                  if ("user" === e.role) {
                      let n = null != e.attachments && e.attachments.length > 0 ? e.attachments : null;
                      return (0, a.jsx)(
                          nf,
                          {
                              role: "user",
                              anchorId: e.id,
                              highlighted: d === e.id,
                              children: (0, a.jsx)(nd, {
                                  content: e.content,
                                  createdAt: e.created_at,
                                  userId: e.user_id ?? r?.id,
                                  accessories: null != n ? (0, a.jsx)(tr, { projectId: t, attachments: n }) : void 0,
                              }),
                          },
                          e.render_id,
                      );
                  }
                  let o = e.steps.some(
                          (e) =>
                              "error" === e.kind ||
                              "terminal_error" === e.kind ||
                              ("node" === e.kind && null != e.node && !eB(e)),
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
                                        ? (0, a.jsx)(nf, {
                                              role: "assistant",
                                              children: (0, a.jsx)(tW, {
                                                  projectId: t,
                                                  interrupted: f,
                                                  steps: e.steps,
                                                  active: !(0, er.BL)(e),
                                                  durationMs:
                                                      null != e.finished_at ? e.finished_at - e.created_at : void 0,
                                              }),
                                          })
                                        : null,
                                    h
                                        ? (0, a.jsx)(nf, {
                                              role: "assistant",
                                              children: (0, a.jsx)(nh, {
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
                                                      active: !(0, er.BL)(e),
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
function nf(e) {
    let { role: t, children: n, anchorId: l, highlighted: i = !1 } = e;
    return (0, a.jsx)("li", {
        "data-role": t,
        "data-vibegrations-message": l,
        className: r()(ts.xk, { [ts.Qo]: i }),
        children: n,
    });
}
var ng = n(625903),
    np = n(964675);
function nx(e) {
    let { projectId: t } = e,
        n = (0, A.bG)([h.Ay], () => null != h.Ay.getSettings(t), [t]),
        l = i.useCallback(() => {
            (0, ty.A)(t);
        }, [t]);
    return n
        ? (0, a.jsx)(eN.D, {
              className: np.h,
              "aria-label": P.intl.string(R.default.gTMvzD),
              onClick: l,
              children: (0, a.jsx)(ng.SettingsIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
          })
        : null;
}
var nv = n(863610),
    nb = n(495557);
function nj(e) {
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
            className: nb.jn,
            "data-vibegrations-thinking-panel": !0,
            children: (0, a.jsx)(es.Ch, {
                ref: s,
                className: nb.Dq,
                "data-vibegrations-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: r()(tz.PT, nb.bb),
                    children: eV.A.parse(l, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var ny = n(921461);
function nk(e) {
    let { activity: t, compacting: n = !1, restoring: l = !1 } = e,
        s = i.useRef(null),
        o = i.useId(),
        [c, d] = i.useState(null),
        u = null != t && "end" !== t.phase,
        h = l ? R.default.aFffp2 : n ? R.default["0vH/5G"] : u ? R.default.Ly7F7x : R.default.QDGuNS,
        m = null != t && "" !== t.text,
        f = t?.session ?? null,
        g = m && null != f && c === f,
        p = i.useCallback(() => {
            m && null != f && d((e) => (e === f ? null : f));
        }, [m, f]),
        x = i.useCallback(() => d(null), []);
    return (0, a.jsx)(ec.Y, {
        targetElementRef: s,
        position: "top",
        align: "left",
        shouldShow: g,
        onRequestClose: x,
        renderPopout: () => (0, a.jsx)(nj, { id: o, activity: t }),
        children: () =>
            (0, a.jsxs)(eN.D, {
                innerRef: s,
                className: r()(ny.hF, m && ny.Xd),
                "aria-label": P.intl.string(l ? R.default.pGFXZ0 : R.default.SzdX35),
                "aria-expanded": g,
                "aria-describedby": g ? o : void 0,
                "data-vibegrations-thinking-trigger": !0,
                onClick: p,
                children: [
                    (0, a.jsx)("span", {
                        className: ny.bl,
                        children: (0, a.jsx)(nv.n, { dotRadius: 3.5, themed: !0 }),
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
    nA = n(233263);
function nN(e) {
    let { todos: t, provisional: n } = e;
    return (0, a.jsx)("div", {
        className: nA.B,
        role: "dialog",
        "aria-label": P.intl.string(R.default.qCRC6c),
        children: (0, a.jsx)(tV, { todos: t, provisional: n, announceProgress: !1 }),
    });
}
function nE(e) {
    let { todos: t, provisional: n } = e,
        l = i.useRef(null),
        { completed: s, total: r } = tq(t);
    return 0 === r
        ? null
        : (0, a.jsx)(ec.Y, {
              targetElementRef: l,
              position: "top",
              align: "right",
              renderPopout: () => (0, a.jsx)(nN, { todos: t, provisional: n }),
              children: (e) =>
                  (0, a.jsxs)(eN.D, {
                      innerRef: l,
                      className: nA.T,
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
var nS = n(885574),
    nI = n(280894);
function nC(e) {
    return e.toLocaleString();
}
function nT(e) {
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
                        children: [nC((0, ew.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(b.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    nC(n.input_tokens),
                    " in \xb7 ",
                    nC(n.output_tokens),
                    " out \xb7 ",
                    nC(n.cache_creation_input_tokens),
                    " cache write \xb7 ",
                    nC(n.cache_read_input_tokens),
                    " cache read",
                ],
            }),
        ],
    });
}
function n_(e) {
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
                            children: [nC((0, ew.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(b.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(nT, { label: P.intl.string(R.default.hk4jJr), usage: t.orchestrator }),
            (0, a.jsx)(nT, { label: P.intl.string(R.default.R9aduM), usage: t.codegen }),
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
function nR(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(ec.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(n_, { project: t }),
        children: (e) =>
            (0, a.jsx)(eN.D, {
                innerRef: n,
                className: nI.Y$,
                "aria-label": P.intl.string(R.default.AWQ2ZV),
                ...e,
                children: (0, a.jsx)(nS.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var nP = n(258216);
function nM(e) {
    switch (e) {
        case "connecting":
            return P.intl.string(R.default.W7oyuf);
        case "failed":
            return P.intl.string(R.default.eE60xI);
        case "closed":
            return P.intl.string(R.default["yBmS+I"]);
    }
}
function nL(e) {
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
        className: nP.jf,
        children: [
            (0, a.jsx)("div", {
                className: nP.Xx,
                role: "status",
                "aria-live": "polite",
                "data-vibegrations-activity": !0,
                children: n || l ? (0, a.jsx)(nk, { activity: i, compacting: s, restoring: l }) : null,
            }),
            (0, a.jsx)(nx, { projectId: t }),
            null == r || 0 === r.length ? null : (0, a.jsx)(nE, { todos: r, provisional: o }),
            null == c
                ? null
                : (0, a.jsxs)("span", {
                      className: nP.BP,
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
                          (0, a.jsx)(nR, { project: c }),
                      ],
                  }),
            "open" === d
                ? null
                : (0, a.jsx)(b.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === d ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": P.intl.formatToPlainString(R.default.eDDdhB, { status: nM(d) }),
                      "data-vibegrations-conn": !0,
                      "data-state": d,
                      className: nP.XF,
                      children: nM(d),
                  }),
        ],
    });
}
var nO = n(22231),
    nD = n(477155),
    n$ = n(935286),
    nF = n(424110);
function nG(e) {
    let { option: t, position: n, disabled: l, onPick: s } = e,
        o = i.useId(),
        c = !0 === t.recommended,
        d = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(eN.D, {
        className: r()(nF.uK, { [nF.ue]: l }),
        onClick: l ? void 0 : () => s(t),
        "aria-label": P.intl.formatToPlainString(c ? R.default.aL1BKQ : R.default.k7lEgj, { answer: t.label }),
        "aria-describedby": d ? o : void 0,
        "aria-disabled": l,
        "data-vibegrations-clarification-option": t.id,
        "data-recommended": c ? "true" : void 0,
        children: [
            (0, a.jsx)("span", { className: nF.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: nF.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: nF.l8,
                        children: (0, a.jsx)(b.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: nF.ed,
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
                      className: nF.rM,
                      children: P.intl.string(R.default.OXRWyV),
                  })
                : null,
        ],
    });
}
function nU(e) {
    let { clarification: t, onSubmit: n, onDismiss: l } = e,
        [s, c] = i.useState({}),
        [d, u] = i.useState({}),
        [h, m] = i.useState(0),
        f = null == n,
        g = t.questions.length,
        p = Math.min(h, g - 1),
        x = t.questions[p],
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
                })(t, n, p);
                null == l ? v(n) : m(l);
            },
            [s, t, f, p, x.id, v],
        ),
        y = i.useCallback(() => {
            if (f || 0 === p) return;
            let e = t.questions[p - 1];
            c((t) => {
                let n = { ...t };
                return delete n[e.id], n;
            }),
                u((t) => {
                    let n = { ...t };
                    return delete n[e.id], n;
                }),
                m(p - 1);
        }, [t, f, p]),
        k = p > 0 && !f,
        w = d[x.id] ?? "",
        A = i.useCallback(() => {
            let e = w.trim();
            "" !== e && j({ kind: "custom", text: e });
        }, [w, j]),
        [N, E] = i.useState(!1),
        [S, I] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => E(!0));
            });
        return () => {
            cancelAnimationFrame(t), cancelAnimationFrame(e);
        };
    }, []);
    let C = i.useCallback(() => {
            null != l && (I(!0), setTimeout(l, 150));
        }, [l]),
        T = i.useCallback(() => {
            f || p >= g - 1 || m(p + 1);
        }, [f, p, g]),
        _ = p < g - 1 && !f;
    return (0, a.jsxs)("section", {
        className: r()(nF.$O, { [nF.fI]: N && !S, [nF.Oh]: S }),
        role: "dialog",
        "aria-label": x.question,
        "data-vibegrations-clarification": t.id,
        "data-state": f ? "inert" : "open",
        "data-step": p,
        children: [
            (0, a.jsxs)("div", {
                className: nF.wx,
                children: [
                    (0, a.jsx)(b.E, {
                        tag: "span",
                        id: `${x.id}-label`,
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        selectable: !0,
                        className: nF.TK,
                        children: x.question,
                    }),
                    null == l
                        ? null
                        : (0, a.jsx)(eN.D, {
                              className: r()(nF.gb, nF.Q7),
                              onClick: C,
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
                className: nF.Ge,
                role: "group",
                "aria-labelledby": `${x.id}-label`,
                children: [
                    x.options.map((e, t) =>
                        (0, a.jsx)(
                            nG,
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
                        className: nF.Xy,
                        children: [
                            (0, a.jsx)("span", {
                                className: nF.Gy,
                                "aria-hidden": !0,
                                children: (0, a.jsx)(nO.PencilIcon, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: "currentColor",
                                }),
                            }),
                            (0, a.jsx)(eg.y, {
                                value: w,
                                onChange: (e) => {
                                    let { value: t } = e.currentTarget;
                                    u((e) => ({ ...e, [x.id]: t }));
                                },
                                onKeyDown: (e) => {
                                    "Enter" !== e.key ||
                                        e.shiftKey ||
                                        e.nativeEvent.isComposing ||
                                        (e.preventDefault(), A());
                                },
                                placeholder: P.intl.string(R.default.qifsdL),
                                "aria-label": P.intl.formatToPlainString(R.default.XHESTL, { question: x.question }),
                                disabled: f,
                                rows: 1,
                                className: nF.Pu,
                                "data-vibegrations-clarification-other": x.id,
                            }),
                        ],
                    }),
                ],
            }),
            g > 1
                ? (0, a.jsxs)("div", {
                      className: nF.qr,
                      children: [
                          (0, a.jsx)(b.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-vibegrations-clarification-progress": !0,
                              children: P.intl.formatToPlainString(R.default["7bypa+"], { index: p + 1, total: g }),
                          }),
                          (0, a.jsxs)("div", {
                              className: nF.Np,
                              children: [
                                  (0, a.jsx)(eN.D, {
                                      className: r()(nF.gb, { [nF.yI]: !k }),
                                      onClick: k ? y : void 0,
                                      tabIndex: k ? 0 : -1,
                                      "aria-hidden": !k,
                                      "aria-disabled": f,
                                      "aria-label": P.intl.string(R.default.KYpgvZ),
                                      "data-vibegrations-clarification-back": !0,
                                      "data-hidden": k ? void 0 : "true",
                                      children: (0, a.jsx)(nD.r, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                                  (0, a.jsx)(eN.D, {
                                      className: r()(nF.gb, { [nF.yI]: !_ }),
                                      onClick: _ ? T : void 0,
                                      tabIndex: _ ? 0 : -1,
                                      "aria-hidden": !_,
                                      "aria-disabled": f,
                                      "aria-label": P.intl.string(R.default.AlZqEH),
                                      "data-vibegrations-clarification-next": !0,
                                      "data-hidden": _ ? void 0 : "true",
                                      children: (0, a.jsx)(n$.E, {
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
var nH = n(506774),
    nq = n(651649),
    nB = n(670455);
let nV = "shownVibegrationsFeedbackProjectIds";
var nz = n(348800);
let nW = [P.intl.string(R.default["E+Q26x"]), P.intl.string(R.default["06/jqP"]), P.intl.string(R.default["7MCiK9"])];
function nK(e) {
    let { projectId: t, onRegionCapture: l, restoreState: s } = e,
        r = (0, A.bG)([er.Ay], () => er.Ay.getMessages(t), [t]),
        o = (0, A.bG)([h.Ay], () => h.Ay.getConnState(t), [t]),
        c = (0, A.bG)([h.Ay], () => h.Ay.isChatStopped(t), [t]),
        d = (0, A.bG)([er.Ay], () => er.Ay.getProjectUsage(t), [t]),
        u = (0, A.bG)([er.Ay], () => er.Ay.getThinkingActivity(t), [t]),
        m = (0, A.bG)([er.Ay], () => er.Ay.isCompacting(t), [t]),
        f = (0, A.bG)([h.Ay], () => h.Ay.getModelSettings(t), [t]),
        g = i.useRef(null),
        p = i.useRef(null),
        x = i.useRef(null),
        v = i.useRef(!0),
        [b, j] = i.useState(!0);
    i.useEffect(() => {
        v.current && p.current?.scrollToBottom();
    }, [r]);
    let y = i.useCallback(() => {
        let e = p.current;
        if (null == e) return;
        let t = e.getDistanceFromBottom();
        v.current = t < 32;
        let n = t > 1;
        j((e) => (!n === e ? e : !n));
    }, []);
    i.useLayoutEffect(() => {
        let e = g.current,
            t = x.current;
        if (null == e) return;
        let n = e.getBoundingClientRect().width,
            l = t?.getBoundingClientRect().height,
            a = null;
        function i() {
            v.current &&
                (null != a && cancelAnimationFrame(a), (a = requestAnimationFrame(() => p.current?.scrollToBottom())));
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
                    let t = er.Ay.getMessages(e).filter(
                        (e) => "assistant" === e.role && "side_reply" !== e.kind && (0, er.BL)(e),
                    ).length;
                    !(t < 3) &&
                        ((nH.w.get(nV) ?? []).includes(e) ||
                            nq.A.possiblyShowFeedbackModal(nB.MW.VIBEGRATIONS, () => {
                                let l;
                                (l = nH.w.get(nV) ?? []).includes(e) || nH.w.set(nV, [...l, e]),
                                    (0, tv.openModalLazy)(async () => {
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
        w = i.useCallback(() => (0, h.fu)(t), [t]),
        N = i.useCallback((e) => k(e.implementation_prompt), [k]),
        E = i.useCallback((e) => k(e), [k]),
        S = i.useCallback((e) => (0, h.XZ)(t, e), [t]),
        I = i.useCallback((e) => (0, h.vX)(t, e), [t]),
        C = i.useCallback((e) => (0, h.Vm)(t, e), [t]),
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
        U = (0, A.bG)([er.Ay], () => er.Ay.hasLoadedHistory(t), [t]),
        H = i.useMemo(() => {
            let e = 0;
            for (let n = 0; n < t.length; n++) e = (31 * e + t.charCodeAt(n)) % 0x7fffffff;
            return nW[e % nW.length];
        }, [t]),
        q = O
            ? P.intl.string(R.default.Jj8Ftb)
            : L?.kind === "plan_implemented"
              ? P.intl.string(R.default["3sTTBu"])
              : U && 0 === r.length
                ? H
                : null,
        B = i.useMemo(() => {
            for (let e = r.length - 1; e >= 0; e--) {
                let t = r[e];
                if ("assistant" === t.role && !(0, er.BL)(t)) return t;
            }
        }, [r]),
        V = null != B,
        z = O && M ? T : void 0,
        W = B?.todos,
        K = B?.provisionalTodo;
    return (0, a.jsxs)("section", {
        ref: g,
        "data-vibegrations-chat": !0,
        className: nz.TE,
        children: [
            (0, a.jsx)(es.Ch, {
                ref: p,
                onScroll: y,
                "data-vibegrations-chat-log": !0,
                className: b ? nz.N$ : `${nz.N$} ${nz.hB}`,
                children: (0, a.jsx)(nm, { ref: x, projectId: t, messages: r, onPickIdea: M ? N : void 0 }),
            }),
            (0, a.jsxs)("div", {
                className: nz.im,
                children: [
                    (0, a.jsx)(nL, {
                        projectId: t,
                        thinking: V,
                        restoring: _,
                        thinkingActivity: u,
                        compacting: m,
                        todos: W,
                        provisionalTodo: K,
                        projectUsage: d,
                        connState: o,
                    }),
                    (0, a.jsxs)("div", {
                        className: nz.Jx,
                        children: [
                            null == F
                                ? null
                                : (0, a.jsx)("div", {
                                      className: nz.B5,
                                      children: (0, a.jsx)(
                                          nU,
                                          { clarification: F, onSubmit: M ? E : void 0, onDismiss: G },
                                          F.id,
                                      ),
                                  }),
                            (0, a.jsx)(eO, {
                                canSend: M,
                                stopped: c,
                                running: V,
                                restoring: _,
                                onSend: k,
                                onInterrupt: M ? w : void 0,
                                onUploadFile: I,
                                onDeleteFile: C,
                                onApprove: z,
                                onRegionCapture: l,
                                suggestion: q,
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
var nY = n(435558),
    nX = n(661531),
    nZ = n(602853),
    nJ = n(517461),
    nQ = n(761929),
    n0 = n(927506);
function n1(e) {
    let { open: t, maxWidth: n, onWidthChange: l, children: s } = e,
        r = (0, nZ.r)(nX.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = i.useRef(null),
        [c, d] = (0, nJ.V)("VibegrationsChatSidebarWidth", 460),
        [u, h] = i.useState(c ?? 460),
        m = (0, nY.clamp)(u, 360, n);
    i.useLayoutEffect(() => {
        l(t ? m + r : 0);
    }, [m, t, r, l]);
    let f = (0, nQ.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: o,
            onElementResize: h,
            onElementResizeEnd: d,
            orientation: nQ.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        g = i.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), f(e));
            },
            [f],
        );
    return (0, a.jsxs)("div", {
        className: n0.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: n0.Di, onPointerDown: g }),
            (0, a.jsx)("div", { ref: o, className: n0.kL, style: { width: m }, children: s }),
        ],
    });
}
var n2 = n(145615);
let n6 = [6, 8, 10, 12],
    n3 = {
        home: { blob: 1, twink: 1, alpha: 0.7 },
        conversation: { blob: 1, twink: 1, alpha: 0.7 },
        thinking: { blob: 3, twink: 2.4, alpha: 0.7 },
    };
function n7(e, t, n) {
    let l = (0x165667b1 * e) ^ (0x27d4eb2f * t) ^ (0x7fffffff * n);
    return (l = Math.imul(l ^ (l >>> 13), 0x4bf19f61)), (((l ^= l >>> 16) >>> 0) % 1e6) / 1e6;
}
let n4 = i.memo(function (e) {
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
                h = n3.home.blob,
                m = n3.home.twink,
                f = n3.home.alpha,
                g = 0,
                p = n6[0],
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
            let w = new MutationObserver(y);
            w.observe(document.documentElement, { attributes: !0, attributeFilter: ["class"] });
            let A = -1;
            function N() {
                let e = Math.max(r, d);
                (e === d && A === p && c.length > 0) ||
                    ((d = e),
                    (A = p),
                    (c = (function (e, t) {
                        let n = [],
                            l = Math.ceil(e / t) + 1,
                            a = Math.ceil(600 / t) + 1;
                        for (let e = 0; e < a; e++)
                            for (let t = 0; t < l; t++)
                                n.push({
                                    i: t,
                                    j: e,
                                    threshold: 0.05 + 0.95 * n7(t, e, 1),
                                    phase: n7(t, e, 2) * Math.PI * 2,
                                    freq: 0.25 + 1.5 * n7(t, e, 3),
                                });
                        return n;
                    })(e, p)));
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
            let I = performance.now(),
                C = 0;
            function T(e) {
                a.clearRect(0, 0, r, o), (a.globalAlpha = f);
                let t = p,
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
                        g = h - (i.threshold + f);
                    1;
                    if (!(g <= -0.1)) {
                        if (g >= 0.1) a = 7;
                        else {
                            let e = (g + 0.1) / 0.2;
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
                (C = requestAnimationFrame(function e(t) {
                    let n = t - I,
                        l = Math.min(64, n);
                    (I = t),
                        !(function (e) {
                            if (
                                (v++,
                                b++,
                                v < 30 ||
                                    e > 100 ||
                                    (x.push(e),
                                    x.length > 60 && x.shift(),
                                    x.length < 60 || b < 180 || g >= n6.length - 1))
                            )
                                return;
                            let t = 0;
                            for (let e = 0; e < x.length; e++) t += x[e];
                            let n = t / x.length;
                            n <= 22 ||
                                ((p = n6[++g]),
                                (b = 0),
                                (A = -1),
                                N(),
                                console.log(
                                    "[Vibegrations/glow-dither] perf degrade \u2192 spacing",
                                    p,
                                    "avg",
                                    n.toFixed(2),
                                    "ms",
                                ));
                        })(n);
                    let a = n3[s.current] ?? n3.home,
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
                    T(0.001 * t), (C = requestAnimationFrame(e));
                })),
                () => {
                    cancelAnimationFrame(C), S.disconnect(), w.disconnect(), window.removeEventListener("resize", E);
                }
            );
        }, []);
    let r = n2.P5;
    return (
        (r = "conversation" === t ? `${r} ${n2.wY}` : "home" === t ? `${r} ${n2.Qy}` : `${r} ${n2.fR}`),
        (0, a.jsx)("div", {
            ref: n,
            className: r,
            "aria-hidden": "true",
            children: (0, a.jsx)("canvas", { ref: l, className: n2.DX }),
        })
    );
});
var n5 = n(408694);
function n8(e) {
    let { projectId: t } = e,
        n = (0, A.bG)([er.Ay], () => (er.Ay.isThinking(t) ? "thinking" : "conversation"), [t]);
    return (0, a.jsxs)("div", {
        className: n5.D1,
        "aria-hidden": !0,
        children: [
            (0, a.jsxs)("div", {
                className: n5.ys,
                "data-state": n,
                children: [(0, a.jsx)("div", { className: n5.Fc }), (0, a.jsx)("div", { className: n5.dW })],
            }),
            (0, a.jsx)(n4, { state: n }),
        ],
    });
}
var n9 = n(333007),
    le = n(439108);
function lt(e) {
    return {
        x: Math.min(e.startX, e.x),
        y: Math.min(e.startY, e.y),
        width: Math.abs(e.x - e.startX),
        height: Math.abs(e.y - e.startY),
    };
}
function ln(e) {
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
                    a = lt({ ...s, x: t.x, y: t.y });
                r(null), a.width < 8 && a.height < 8 ? l() : n(a);
            },
            [s, o, n, l],
        ),
        h = null == s ? null : lt(s);
    return (0, n9.createPortal)(
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("div", { className: le.tB, role: "presentation", onPointerDown: l }),
                (0, a.jsx)("div", {
                    className: le.aC,
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
                                  className: le.F7,
                                  children: (0, a.jsx)("div", {
                                      className: le.aK,
                                      children: (0, a.jsx)(b.E, {
                                          variant: "text-sm/medium",
                                          color: "text-default",
                                          children: P.intl.string(R.default.ydkvBR),
                                      }),
                                  }),
                              })
                            : (0, a.jsx)("div", {
                                  className: le.r1,
                                  style: { left: h.x, top: h.y, width: h.width, height: h.height },
                              }),
                }),
            ],
        }),
        document.body,
    );
}
var ll = n(314116),
    la = n(977628);
function li(e) {
    let t,
        { projectId: n, onBack: l, onRestore: s } = e,
        [r, o] = i.useState({ status: "loading" });
    return (
        i.useEffect(() => {
            let e = !1;
            return (
                (0, h.ST)(n)
                    .then((t) => {
                        e || o({ status: "loaded", entries: t });
                    })
                    .catch(() => {
                        e || o({ status: "failed" });
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
                    : r.entries.map((e) =>
                          (0, a.jsxs)(
                              "button",
                              {
                                  className: la.f_,
                                  type: "button",
                                  title: e.subject,
                                  onClick: () =>
                                      (0, ll.A)({
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
                                          className: la.bc,
                                          children: e.subject.replace(/^Build: /, ""),
                                      }),
                                      (0, a.jsxs)(b.E, {
                                          variant: "text-sm/normal",
                                          color: "text-muted",
                                          children: [e.authorName, " \xb7 ", new Date(e.authoredAt).toLocaleString()],
                                      }),
                                  ],
                              },
                              e.sha,
                          ),
                      )),
        (0, a.jsxs)("section", {
            className: la.nd,
            "aria-label": P.intl.string(R.default.jAWwzi),
            children: [
                (0, a.jsxs)("div", {
                    className: la.wx,
                    children: [
                        (0, a.jsx)(f.$, {
                            variant: "secondary",
                            size: "sm",
                            text: P.intl.string(P.t["13/7kX"]),
                            onClick: l,
                        }),
                        (0, a.jsx)(v.D, { variant: "heading-md/semibold", children: P.intl.string(R.default.jAWwzi) }),
                    ],
                }),
                (0, a.jsx)("div", { className: la.p_, children: t }),
            ],
        })
    );
}
var ls = n(120426),
    lr = n(873727),
    lo = n(147248),
    lc = n(418842),
    ld = n(363195),
    lu = n(885386),
    lh = n(940107),
    lm = n(171936);
function lf(e) {
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
        g = (0, c.A)(n, l),
        p = g?.id ?? null;
    !(function (e, t) {
        let n = (0, A.bG)([ld.A], () => (0, lr.x4)(ld.A.theme)),
            l = (0, A.bG)([lo.A], () => lo.A.gradientPreset),
            {
                reducedMotion: a,
                fontScale: s,
                highContrast: r,
                forcedColors: o,
                underlineLinks: c,
            } = (0, A.cf)([ek.Ay], () => ({
                reducedMotion: ek.Ay.useReducedMotion,
                fontScale: (0, lr.U0)(),
                highContrast: ek.Ay.isHighContrastModeEnabled,
                forcedColors: ek.Ay.useForcedColors,
                underlineLinks: ek.Ay.alwaysShowLinkDecorations,
            })),
            d = lu.hH.useSetting(),
            u = (0, lc.C)(),
            h = i.useRef(null),
            m = i.useRef(0),
            f = i.useCallback(() => {
                let l = (0, ls.F1)(e, t);
                if (null == l) return;
                let i = {
                    revision: ++m.current,
                    baseTheme: n,
                    customTheme: (0, lr.Lq)(),
                    uiDensity: u,
                    messageDisplayCompact: d,
                    fontScale: s,
                    reducedMotion: a,
                    highContrast: r,
                    forcedColors: o,
                    underlineLinks: c,
                };
                (0, lh.W)(l, "set-env", i, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [n, o, s, t, r, d, e, a, u, c]),
            g = i.useCallback(() => {
                null == h.current &&
                    (h.current = window.requestAnimationFrame(() => {
                        (h.current = null), f();
                    }));
            }, [f]);
        i.useEffect(() => {
            g();
        }, [l, g]),
            i.useLayoutEffect(
                () => (
                    f(),
                    g(),
                    () => {
                        null != h.current && (window.cancelAnimationFrame(h.current), (h.current = null));
                    }
                ),
                [g, f],
            ),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, ls.F1)(e, t) && f();
                }
                return document.addEventListener("load", n, !0), () => document.removeEventListener("load", n, !0);
            }, [t, e, f]),
            i.useEffect(() => {
                let e = new MutationObserver(g);
                return (
                    e.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "style"] }),
                    e.observe(document.head, { childList: !0, subtree: !0, characterData: !0 }),
                    () => e.disconnect()
                );
            }, [g]);
    })(m, p);
    let [x, v] = i.useState(null);
    i.useEffect(() => {
        if (null != t) return (0, lm.mn)(t, () => (0, ls.F1)(m, p));
    }, [t, m, p]);
    let b = i.useCallback(() => {
            let e = (0, ls.F1)(m, p),
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
        }, [m, p]),
        j = i.useCallback(
            (e) => {
                v(null), null != x && (0, ls.su)(x.iframe, e).then(x.resolve, x.reject);
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
                className: r()(ea.Mh, d),
                children: [o, (0, a.jsx)("div", { ref: f, className: ea.fm, children: u })],
            }),
            h(k ? b : void 0),
            null != x ? (0, a.jsx)(ln, { targetRect: x.targetRect, onSelect: j, onCancel: y }) : null,
        ],
    });
}
function lg(e) {
    let {
            projectId: t,
            applicationId: n,
            previewApplicationId: l,
            surface: s,
            header: c,
            chatOpen: m,
            onCloseChat: f,
            versionHistoryOpen: g = !1,
            onCloseVersionHistory: p,
            onRestoreVersion: x,
            restoreState: v,
            previewReady: b,
            previewGate: j,
            channelMessages: y,
        } = e,
        k = i.useRef(null),
        [w, A] = i.useState(0);
    i.useLayoutEffect(() => {
        if (s.type === S.U4.MAIN) return (0, u.HV)(n), () => (0, u.HV)(null);
    }, [n, s.type]),
        i.useEffect(() => {
            null != t && (0, h.Hc)(t);
        }, [t]),
        i.useLayoutEffect(() => {
            let e = k.current;
            if (null == e) return;
            function t() {
                null != e && A(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return n.observe(e), () => n.disconnect();
        }, []),
        i.useEffect(() => () => (0, u.Zq)(0), []);
    let N = Math.max(360, w - 320),
        E = null != y ? y.open : m,
        I = m || s.type === S.U4.MAIN;
    return (0, a.jsx)("div", {
        ref: k,
        className: ea.LB,
        children: (0, a.jsx)(lf, {
            projectId: t,
            applicationId: n,
            surface: s,
            previewReady: b,
            header: c,
            mainClassName: null == c ? void 0 : r()(ea.ez, { [ea.zt]: E }),
            content: (0, a.jsx)(Q, {
                applicationId: n,
                previewApplicationId: l,
                surface: s,
                previewReady: b,
                previewGate: j,
            }),
            sidebar: (e) =>
                null != y
                    ? (0, a.jsx)(n1, {
                          open: y.open,
                          maxWidth: N,
                          onWidthChange: u.Zq,
                          children: y.open
                              ? (0, a.jsx)(ei, { channel: y.channel, guild: y.guild, onClose: y.onClose })
                              : null,
                      })
                    : null != t && I
                      ? (0, a.jsx)(n1, {
                            open: m,
                            maxWidth: N,
                            onWidthChange: u.Zq,
                            children: (0, a.jsx)("div", {
                                className: ea.cO,
                                children: g
                                    ? (0, a.jsx)(
                                          li,
                                          { projectId: t, onBack: p ?? (() => {}), onRestore: x ?? (() => {}) },
                                          t,
                                      )
                                    : (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              (0, a.jsx)(n8, { projectId: t }),
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
                                                  className: ea.cb,
                                                  children: (0, a.jsx)(
                                                      nK,
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
