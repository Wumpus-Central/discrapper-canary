n.d(t, { A: () => n6 });
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
    g = n(323384),
    p = n(834730),
    x = n(627363),
    v = n(207371),
    b = n(580954),
    j = n(297264),
    y = n(625180),
    k = n(91242),
    N = n(812901),
    w = n(317608),
    E = n(17928),
    A = n(956518),
    S = n(869146),
    I = n(165610),
    T = n(652215),
    C =
        (((l = {}).Loading = "loading"),
        (l.AwaitingLaunch = "awaiting-launch"),
        (l.Launched = "launched"),
        (l.RenderingElsewhere = "rendering-elsewhere"),
        (l.NoApplication = "no-application"),
        (l.DoesNotSupportSurface = "does-not-support-surface"),
        (l.Error = "error"),
        l),
    _ = n(742023),
    R = n(328284);
function P(e) {
    let { title: t, body: n, wide: l = !1, children: i } = e;
    return (0, a.jsxs)("div", {
        className: r()(R.Bf, l && R.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: R.Ux,
                children: [
                    (0, a.jsx)(j.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, a.jsx)(p.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
                ],
            }),
            i,
        ],
    });
}
var M = n(459864),
    O = n(375708),
    L = n(963691);
function D(e) {
    let { applicationId: t, surface: n } = e,
        { frame: l, state: s } = (function (e) {
            let { applicationId: t, surface: n } = e,
                {
                    surface: l,
                    setFailed: a,
                    lifecycle: s,
                } = (function (e) {
                    let { applicationId: t, surface: n } = e,
                        l = i.useMemo(() => (0, I.VA)(t, n), [t, n]),
                        a = i.useMemo(() => n, [l]),
                        s = (0, E.bG)([k.A], () => k.A.getFrame(l), [l]),
                        r = (0, E.bG)(
                            [S.A, k.A],
                            () => S.A.getWindowOpen(T.MLl.ACTIVITY_POPOUT) && k.A.getMainFrame()?.id === l,
                            [l],
                        ),
                        { data: o, isLoading: c } = (0, x.YY)(t),
                        d = (0, v.x)(o),
                        u = null != (0, A.Ay)(t),
                        [h, m] = i.useState(null),
                        f = h === l;
                    return {
                        surface: a,
                        setFailed: i.useCallback(() => m(l), [l]),
                        lifecycle: (0, I.x1)(s)
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
                            await y.A.launchFrame({ applicationId: t, surface: l });
                        } catch {
                            a();
                        }
                    }
                }, [r, t, l, a]),
                s
            );
        })({ applicationId: t, surface: n }),
        r = (0, I.VA)(t, n);
    switch (
        (i.useEffect(() => {
            let e;
            return (
                null == (e = k.A.getFrame(r)) ||
                    k.A.getMainFrame()?.id !== r ||
                    S.A.getWindowOpen(T.MLl.ACTIVITY_POPOUT) ||
                    (e.intent === I.sV.MAIN ? y.A.resetFrameLayoutModes(r) : y.A.clearMainFrameSlot()),
                () => {
                    let e;
                    null != (e = k.A.getFrame(r)) &&
                        ((0, I.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        _.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === I.sV.INLINE && y.A.promoteFrame(r),
                              y.A.updateFrameLayoutMode({ frameId: r, layoutMode: I.y0.PIP }))
                            : e.intent === I.sV.MAIN && (0, b.A)().leaveFrame(r));
                }
            );
        }, [r]),
        s)
    ) {
        case C.Launched:
            return (0, a.jsx)(w.A, { frameId: l.id, level: N.A.WithinAppContent, className: L.Z7 });
        case C.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: L.qs,
                children: (0, a.jsx)(P, {
                    title: O.intl.string(M.default["4f6Vkr"]),
                    body: O.intl.string(M.default.LJ2q1H),
                }),
            });
        case C.NoApplication:
            return (0, a.jsxs)("div", {
                className: L.qs,
                children: [
                    (0, a.jsx)(g.k, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
                    (0, a.jsx)(p.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: L.tj,
                        children: O.intl.string(M.default.jTuX7C),
                    }),
                ],
            });
        case C.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: L.qs,
                children: (0, a.jsx)(P, {
                    title: O.intl.string(M.default.FHOJiH),
                    body: O.intl.string(M.default["1yLQoV"]),
                }),
            });
        case C.Error:
            return (0, a.jsxs)("div", {
                className: L.qs,
                children: [
                    (0, a.jsx)(j.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: O.intl.string(M.default.MeLWCr),
                    }),
                    (0, a.jsx)(p.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: L.tj,
                        children: O.intl.string(M.default["1RCbQT"]),
                    }),
                ],
            });
        case C.AwaitingLaunch:
        case C.Loading:
            return (0, a.jsx)("div", { className: L.qs, children: (0, a.jsx)(m.y, {}) });
    }
}
var $ = n(308528),
    G = n(334738),
    F = n(373204),
    H = n(355622),
    B = n(734057),
    U = n(531685),
    q = n(365971),
    V = n(362417);
function z(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: V.f,
        children: [
            (0, a.jsx)(g.k, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(p.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function W() {
    return (0, a.jsx)("div", { className: V.f, children: (0, a.jsx)(m.y, {}) });
}
function K(e) {
    let t,
        n,
        { previewApplicationId: l } = e,
        { data: s, isLoading: r } = (0, x.YY)(l),
        o = s?.bot?.id ?? null,
        c = (0, E.bG)([B.A], () => {
            if (null == o) return null;
            let e = B.A.getDMFromUserId(o);
            return null != e ? B.A.getChannel(e) : null;
        });
    (t = c?.id ?? null),
        i.useEffect(() => {
            null != t && $.A.preload(T.ME, t);
        }, [t]),
        (n = (0, E.bG)([U.A], () => U.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, q.Xg)();
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
            $.A.openPrivateChannel({ recipientIds: o, navigateToChannel: !1 }).catch(() => {
                e || u(o);
            }),
            () => {
                e = !0;
            }
        );
    }, [o, c]),
    r)
        ? (0, a.jsx)(W, {})
        : null == o || h
          ? (0, a.jsx)(z, { message: O.intl.string(M.default.bl4eBc) })
          : null == c
            ? (0, a.jsx)(W, {})
            : (0, a.jsx)("div", {
                  className: V.g,
                  children: (0, a.jsx)(F.A, { channel: c, guild: null, chatInputType: H.oU.SIDEBAR }, c.id),
              });
}
var Y = n(976102);
function X(e) {
    let { applicationId: t, previewApplicationId: n, surface: l, previewReady: s, previewGate: r } = e,
        o = (0, c.A)(t, l),
        { data: d, isLoading: u } = (0, x.YY)(t ?? void 0);
    return (i.useEffect(() => {
        r?.type === "permissions" && null != o && (0, b.A)().leaveFrame(o.id);
    }, [o, r?.type]),
    r?.type === "checking")
        ? (0, a.jsx)("div", { className: Y.q, children: (0, a.jsx)(m.y, {}) })
        : r?.type === "permissions"
          ? (0, a.jsx)("div", {
                className: Y.q,
                children: (0, a.jsx)(P, {
                    wide: !0,
                    title: O.intl.string(M.default.DYwf2n),
                    body: O.intl.string(M.default.WWj3pN),
                    children: (0, a.jsx)(f.$, {
                        variant: "primary",
                        size: "md",
                        text: O.intl.string(M.default["CRfE/E"]),
                        onClick: r.onReviewPermissions,
                        loading: r.loading,
                    }),
                }),
            })
          : s
            ? null == t
                ? null
                : u
                  ? (0, a.jsx)("div", { className: Y.q, children: (0, a.jsx)(m.y, {}) })
                  : null == d || (0, v.x)(d) || null == n
                    ? (0, a.jsx)(D, { applicationId: t, surface: l })
                    : (0, a.jsx)(K, { previewApplicationId: n })
            : (0, a.jsxs)("div", {
                  className: Y.q,
                  children: [
                      (0, a.jsx)(g.k, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
                      (0, a.jsx)(p.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: Y.t,
                          children: O.intl.string(M.default.jTuX7C),
                      }),
                  ],
              });
}
var Z = n(534890),
    Q = n(738876),
    J = n(47167),
    ee = n(31717),
    et = n(372054);
function en(e) {
    let { channel: t, guild: n, onClose: l } = e,
        i = (0, J.Ay)(t),
        s = (0, a.jsx)(d.Ay.Icon, { icon: o.P, tooltip: O.intl.string(O.t.cpT0Cq), onClick: l });
    return (0, a.jsxs)("div", {
        className: et.Wx,
        children: [
            (0, a.jsx)(Q.A, { channel: t, draftType: ee.C.ChannelMessage }),
            (0, a.jsxs)(d.Ay, {
                toolbar: s,
                "aria-label": O.intl.string(O.t.BIYAqa),
                children: [
                    (0, a.jsx)(d.Ay.ChannelIcon, { icon: Z.ChatIcon, "aria-label": O.intl.string(O.t["/VQax8"]) }),
                    (0, a.jsx)(d.Ay.Title, { children: i }),
                ],
            }),
            (0, a.jsx)("div", {
                className: et.GZ,
                children: (0, a.jsx)(F.A, { channel: t, guild: n, chatInputType: H.oU.SIDEBAR }, t.id),
            }),
        ],
    });
}
var el = n(689175),
    ea = n(783791);
n(323874), n(14289), n(35956), n(321073);
var ei = n(475358),
    es = n(922016),
    er = n(980707),
    eo = n(477782),
    ec = n(81369),
    ed = n(717400),
    eu = n(663341),
    eh = n(826745),
    em = n(866665),
    ef = n(428610),
    eg = n(29080),
    ep = n(783977),
    ex = n(559647),
    ev = n(285796),
    eb = n(775602),
    ej = n(673724),
    ey = n(514042),
    ek = n(939249),
    eN = n(298668);
function ew(e) {
    return r()(eN._B, { [eN.ND]: e });
}
function eE(e) {
    let { name: t, thumbSrc: n = null, compact: l = !1, subText: i, children: s, onThumbError: r } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            null != n
                ? (0, a.jsx)("img", { src: n, alt: "", className: eN.gJ, onError: r })
                : (0, a.jsx)(ey.FileIcon, { size: l ? "xs" : "sm", color: "currentColor" }),
            (0, a.jsxs)("div", {
                className: eN.Wd,
                children: [
                    (0, a.jsx)(p.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: eN.Rr,
                        children: t,
                    }),
                    i,
                ],
            }),
            s,
        ],
    });
}
function eA(e) {
    return (0, a.jsx)("div", { className: ew(e.compact ?? !1), children: eE(e) });
}
function eS(e) {
    let { name: t, thumbSrc: n, ariaLabel: l, onClick: i, onThumbError: s } = e;
    return (0, a.jsx)(ek.D, {
        className: r()(ew(!0), eN.w8),
        onClick: i,
        "aria-label": l,
        children: eE({ name: t, thumbSrc: n, compact: !0, onThumbError: s }),
    });
}
var eI = n(311656),
    eT = n(789438);
let eC = ej.Is;
function e_(e) {
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
    let d = "exit" === s ? eT.t0 : "enterStart" === s ? eT.Rj : "";
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("span", { className: `${eT.xM} ${eT.nT} ${d}`, children: n }),
            (0, a.jsx)(ei.e, { shortcut: "tab", className: `${eT.xT} ${eT.nT} ${d}`, keyClassName: eT.IS }),
        ],
    });
}
let eR = 0;
function eP(e) {
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
        y = (0, E.bG)([eb.Ay], () => eb.Ay.isSubmitButtonEnabled),
        [k, N] = i.useState([]),
        [w, A] = i.useState(!1),
        [S, I] = i.useState(!1),
        [T, C] = i.useState(!1);
    i.useEffect(() => {
        l || C(!1);
    }, [l]);
    let _ = i.useRef(null),
        R = i.useRef([]),
        P = i.useRef(new Set()),
        L = i.useRef(d);
    L.current = d;
    let D = i.useCallback((e) => {
            (R.current = e), N(e);
        }, []),
        $ = i.useCallback((e) => {
            L.current(e.id).catch((e) => {
                console.error("[vibegrations] attachment cleanup failed", e);
            });
        }, []);
    i.useEffect(() => {
        let e = P.current;
        return () => {
            for (let t of R.current)
                e.add(t.localId), null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && $(t.ref);
        };
    }, [$]);
    let G = i.useCallback(
            (e, t) => {
                if (P.current.has(e)) return;
                let n = R.current;
                n.some((t) => t.localId === e) && D(n.map((n) => (n.localId === e ? { ...n, ...t } : n)));
            },
            [D],
        ),
        F = i.useCallback(
            (e) => {
                if (0 === e.length) return;
                let t = [...R.current],
                    n = [];
                for (let l of e) {
                    let e = "" === l.type ? "application/octet-stream" : l.type,
                        a = ++eR,
                        i = { localId: a, name: l.name, size: l.size, contentType: e, status: "uploading" };
                    if (t.length >= eC) {
                        t.push({
                            ...i,
                            status: "error",
                            errorText: O.intl.formatToPlainString(M.default.DlX57a, { count: eC }),
                        });
                        continue;
                    }
                    if (!(0, ej.x5)(l.size, e)) {
                        t.push({
                            ...i,
                            status: "error",
                            errorText: O.intl.formatToPlainString(M.default.cI7t94, {
                                size: (0, ej.ZJ)((0, ej.yr)(e)),
                            }),
                        });
                        continue;
                    }
                    let s = ej.Wb.has(e) ? URL.createObjectURL(l) : void 0;
                    t.push({ ...i, previewUrl: s }), n.push({ file: l, localId: a });
                }
                for (let { file: e, localId: l } of (D(t), n))
                    c(e).then(
                        (e) => {
                            P.current.has(l) ? $(e) : G(l, { status: "ready", ref: e });
                        },
                        (e) => {
                            P.current.has(l) ||
                                (console.error("[vibegrations] attachment upload failed", e),
                                G(l, { status: "error", errorText: O.intl.string(M.default.GwEHvn) }));
                        },
                    );
            },
            [$, c, G, D],
        ),
        H = i.useCallback(async () => {
            if (null != h && !S) {
                I(!0);
                try {
                    let e = await h();
                    null != e && F([e]);
                } catch (e) {
                    console.error("[vibegrations] region capture failed", e),
                        D([
                            ...R.current,
                            {
                                localId: ++eR,
                                name: "preview-capture.png",
                                size: 0,
                                contentType: "image/png",
                                status: "error",
                                errorText: O.intl.string(M.default["4DQd7d"]),
                            },
                        ]);
                } finally {
                    I(!1);
                }
            }
        }, [h, S, F, D]),
        B = i.useCallback(
            (e) => {
                let t = R.current,
                    n = t.find((t) => t.localId === e);
                P.current.add(e),
                    n?.previewUrl != null && URL.revokeObjectURL(n.previewUrl),
                    n?.ref != null && $(n.ref),
                    D(t.filter((t) => t.localId !== e));
            },
            [$, D],
        ),
        U = k.every((e) => "ready" === e.status),
        q = "" !== b.trim() || k.length > 0,
        V = t && q && U,
        z = i.useCallback(() => {
            if (!V) return;
            let e = R.current.filter((e) => null != e.ref).map((e) => e.ref);
            for (let t of (r(b, e.length > 0 ? e : void 0), R.current))
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
            null == o || T || (C(!0), o());
        }, [o, T]),
        Y = i.useCallback(
            (e) => {
                if ("Escape" === e.key && l && null != o && !T) {
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
            [z, u, l, o, T, K, g, b],
        ),
        X = i.useCallback(
            (e) => {
                if (!t) return;
                let n = Array.from(e.clipboardData.files);
                0 !== n.length && (e.preventDefault(), F(n));
            },
            [t, F],
        ),
        Z = i.useCallback(
            (e) => {
                e.preventDefault(), A(!1), t && F(Array.from(e.dataTransfer.files));
            },
            [t, F],
        ),
        Q = i.useCallback((e) => {
            e.dataTransfer.types.includes("Files") && (e.preventDefault(), A(!0));
        }, []),
        J = i.useCallback(
            (e) => {
                F(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = "");
            },
            [F],
        ),
        ee = i.useRef(null),
        et = i.useRef(null),
        [en, el] = i.useState(0),
        [ea, ei] = i.useState(!1);
    i.useEffect(() => {
        if (0 === b.length) return void ei(!1);
        let e = ee.current?.querySelector("textarea");
        if (null != e) {
            let t = eO(e);
            null != t && el(t);
        }
        ei(!0);
        let t = setTimeout(() => ei(!1), eM);
        return () => clearTimeout(t);
    }, [b]);
    let ev = i.useMemo(() => ({ "--custom-glow-x": `${en}px` }), [en]),
        ey = ea ? ` ${eT.EB}` : "",
        ek = !s && null != g && "" === b;
    return (0, a.jsxs)("form", {
        onSubmit: W,
        onDrop: Z,
        onDragOver: Q,
        onDragLeave: () => A(!1),
        className: w ? `${eT.DA} ${eT.pV}` : eT.DA,
        children: [
            k.length > 0
                ? (0, a.jsx)("div", {
                      className: eT.lN,
                      children: k.map((e) => (0, a.jsx)(eL, { draft: e, onRemove: B }, e.localId)),
                  })
                : null,
            (0, a.jsxs)("div", {
                className: eT.VA,
                ref: ee,
                children: [
                    (0, a.jsx)("span", { className: `${eT.wg} ${eT.LP}${ey}`, style: ev, "aria-hidden": !0 }),
                    (0, a.jsx)("span", { className: `${eT.wg} ${eT.L3}${ey}`, style: ev, "aria-hidden": !0 }),
                    (0, a.jsx)("input", {
                        ref: _,
                        type: "file",
                        multiple: !0,
                        onChange: J,
                        className: eT.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    (0, a.jsx)(es.Y, {
                        targetElementRef: et,
                        position: "top",
                        align: "left",
                        animation: es.Y.Animation.NONE,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, a.jsx)(er.W, {
                                "data-menu-migrated": !0,
                                navId: "vibegrations-composer-attach",
                                "aria-label": O.intl.string(O.t.d56gCa),
                                onClose: t,
                                onSelect: t,
                                children: (0, a.jsxs)(eo.rX, {
                                    children: [
                                        (0, a.jsx)(eo.Dr, {
                                            id: "upload-file",
                                            label: O.intl.string(O.t["d3+iYs"]),
                                            iconLeft: ec.H,
                                            leadingAccessory: { type: "icon", icon: ec.H },
                                            action: () => _.current?.click(),
                                        }),
                                        null != f
                                            ? (0, a.jsx)(eo.Dr, {
                                                  id: "import-project",
                                                  label: O.intl.string(M.default.edKajy),
                                                  iconLeft: ed.q,
                                                  leadingAccessory: { type: "icon", icon: ed.q },
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
                                className: `${eT.Y0} ${eT.nu}`,
                                disabled: !t,
                                "aria-label": O.intl.string(O.t.d56gCa),
                                "aria-haspopup": "menu",
                                "aria-expanded": l,
                                children: (0, a.jsx)(eu.PlusLargeIcon, {
                                    size: "refresh_sm",
                                    color: "currentColor",
                                    className: eT.Qu,
                                }),
                            });
                        },
                    }),
                    ek
                        ? (0, a.jsx)("div", {
                              className: eT.ar,
                              "aria-hidden": "true",
                              children: (0, a.jsx)(e_, { text: g }),
                          })
                        : null,
                    (0, a.jsx)(eh.y, {
                        value: b,
                        onChange: (e) => j(e.currentTarget.value),
                        onKeyDown: Y,
                        onPaste: X,
                        placeholder: s
                            ? O.intl.string(M.default.pGFXZ0)
                            : n
                              ? O.intl.string(M.default.JeM47J)
                              : t
                                ? ek
                                    ? ""
                                    : p
                                      ? O.intl.string(M.default.M3ovXY)
                                      : O.intl.string(l ? M.default["67PpcP"] : M.default.ahRdoJ)
                                : O.intl.string(M.default.nm4w9P),
                        disabled: !t,
                        "aria-label": O.intl.string(M.default.OPr66w),
                        rows: 1,
                        className: eT.jp,
                    }),
                    (0, a.jsxs)("div", {
                        className: eT.Sz,
                        children: [
                            (0, a.jsx)(em.m, {
                                text: O.intl.string(M.default.B5gWPk),
                                ariaHidden: !0,
                                children: (0, a.jsx)("button", {
                                    type: "button",
                                    className: eT.Y0,
                                    disabled: null == h || !t || S,
                                    onClick: H,
                                    "aria-label": O.intl.string(M.default.B5gWPk),
                                    children: S
                                        ? (0, a.jsx)(m.y, { type: m.t.SPINNING_CIRCLE_SIMPLE, className: eT.Rk })
                                        : (0, a.jsx)(ef.K, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                }),
                            }),
                            l && null != o
                                ? (0, a.jsx)(em.m, {
                                      text: O.intl.string(M.default.KdgI4k),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)("button", {
                                          type: "button",
                                          className: eT.AW,
                                          disabled: T,
                                          onClick: K,
                                          "aria-label": O.intl.string(M.default.KdgI4k),
                                          children: (0, a.jsx)(eg.w, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : null != x && null != v
                                  ? (0, a.jsx)(em.m, {
                                        text: O.intl.string(M.default.COVYeS),
                                        ariaHidden: !0,
                                        children: (0, a.jsx)(eI.A, {
                                            settings: x.settings,
                                            choices: x.choices,
                                            disabled: !t,
                                            onChange: v,
                                            className: `${eT.Y0} ${eT.Il}`,
                                            icon: (0, a.jsx)(ep.R, {
                                                size: "custom",
                                                width: 20,
                                                height: 20,
                                                color: "currentColor",
                                            }),
                                        }),
                                    })
                                  : null,
                        ],
                    }),
                    y
                        ? (0, a.jsxs)("div", {
                              className: eT.fF,
                              children: [
                                  (0, a.jsx)("div", { className: eT.MT }),
                                  (0, a.jsx)("button", {
                                      type: "submit",
                                      className: eT.rt,
                                      disabled: !V,
                                      "aria-label": O.intl.string(M.default["22GHMt"]),
                                      children: (0, a.jsx)(ex.SendMessageIcon, {
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
let eM = 1500;
function eO(e) {
    let t = (eO.canvas ?? (eO.canvas = document.createElement("canvas"))).getContext("2d");
    if (null == t) return null;
    let n = window.getComputedStyle(e);
    t.font = `${n.fontStyle} ${n.fontWeight} ${n.fontSize} ${n.fontFamily}`;
    let l = e.value.slice(0, e.selectionStart ?? e.value.length),
        a = l.slice(l.lastIndexOf("\n") + 1),
        i = parseFloat("" !== n.paddingInlineStart ? n.paddingInlineStart : "" !== n.paddingLeft ? n.paddingLeft : "0");
    return e.offsetLeft + i + t.measureText(a).width - e.scrollLeft;
}
function eL(e) {
    let { draft: t, onRemove: n } = e;
    return (0, a.jsxs)(eA, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(p.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(m.y, { type: m.t.SPINNING_CIRCLE_SIMPLE, className: eT.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: eT.o1,
                onClick: () => n(t.localId),
                "aria-label": O.intl.string(M.default["3HWvgk"]),
                children: (0, a.jsx)(ev.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
eO.canvas = null;
var eD = n(287809);
let e$ = {
    assembling: M.default["9G3ZmA"],
    installing_deps: M.default.VZuRug,
    building: M.default["s+ylXP"],
    bundling: M.default.rEQlMx,
    committing: M.default.Yvyw1H,
    built: M.default.hOcVAj,
    build_error: M.default["6L9Vwt"],
    healthchecking: M.default.sz8yAj,
    awaiting_auth: M.default["orD+xo"],
    healthcheck_passed: M.default["x+sqTG"],
    healthcheck_failed: M.default.FUWbq1,
    deploying: M.default.wcXX8Z,
    preview_ready: M.default["78YNh7"],
    working: M.default.nv6pUM,
    error: M.default.j3hBoA,
};
function eG(e) {
    if (null != e.labelText && "" !== e.labelText) return e.labelText;
    let t = null != e.labelKey ? e$[e.labelKey] : void 0;
    return O.intl.string(t ?? M.default.nv6pUM);
}
function eF(e) {
    let t;
    for (let n of e) (null == t || n.touched > t.touched) && (t = n);
    return t;
}
function eH(e) {
    return (
        "node" === e.kind &&
        null != e.node &&
        null == e.task_id &&
        ("task" === e.node.node_kind || "task" === e.node.id)
    );
}
n(134528), n(947204);
var eB = n(443865),
    eU = n(46054),
    eq = n(13699);
function eV(e) {
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
                className: r()(eq.Z$, eq.KH),
            }),
            (0, a.jsx)("path", {
                fill: "currentColor",
                d: "M17.48 14.36a.56.56 0 0 1 1.04 0l.85 2.27 2.27.85c.48.18.48.86 0 1.04l-2.27.85-.85 2.27a.56.56 0 0 1-1.04 0l-.85-2.27-2.27-.85a.56.56 0 0 1 0-1.04l2.27-.85.85-2.27Z",
                className: r()(eq.Z$, eq.Q_),
            }),
        ],
    });
}
var ez = n(847374),
    eW = n(320448);
let eK = i.createContext(0);
function eY(e) {
    let { glyph: t, line: n, live: l, settled: s, tint: o, detail: c, connected: d = !1, connectsDown: u = !1 } = e,
        [h, m] = i.useState(!1),
        f = i.useContext(eK),
        g = i.useId(),
        x = i.useCallback(() => m((e) => !e), []),
        { line: v, phase: b } = (function (e) {
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
                { line: t, phase: l }
            );
        })(n),
        j = h ? ez.a : eW._,
        y = null != c,
        k = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("span", { className: eq.hd, children: t }),
                (0, a.jsx)(p.E, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "currentColor",
                    className: r()(eq.qo, { [eq._q]: "exit" === b, [eq.GD]: "enter" === b }),
                    children: v,
                }),
                y ? (0, a.jsx)(j, { size: "xs", color: "currentColor", className: eq.nD }) : null,
            ],
        }),
        N = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("span", { className: eq.$m, children: k }, `face-${f}`),
                l
                    ? (0, a.jsx)("span", { className: r()(eq.$m, eq.pw), "aria-hidden": !0, children: k }, `shine-${f}`)
                    : null,
            ],
        });
    return (0, a.jsxs)("li", {
        className: eq.K1,
        "data-live": l,
        "data-settled": s,
        "data-connected": d,
        "data-connects-down": u,
        style: null != o ? { "--custom-vibegrations-shimmer-tint": o } : void 0,
        children: [
            y
                ? (0, a.jsx)(ek.D, {
                      tag: "div",
                      className: r()(eq.ep, eq.EK),
                      "aria-expanded": h,
                      "aria-controls": g,
                      "aria-label": O.intl.formatToPlainString(M.default.s1wx5H, { activity: v }),
                      onClick: x,
                      children: N,
                  })
                : (0, a.jsx)("div", { className: eq.ep, children: N }),
            (0, a.jsx)("div", { id: g, hidden: !h, className: eq.BA, children: c }),
        ],
    });
}
var eX = n(256905);
let eZ = /^(.*?)\s*\((\+\d+)?[\s,]*([\u2212-]\d+)?\)$/,
    eQ = /^(.*?)\s*\((\d+ lines|\d+ matches|no matches)\)$/;
function eJ(e) {
    let { text: t } = e,
        n = eZ.exec(t),
        l = n?.[2],
        i = n?.[3];
    if (null != n && (null != l || null != i))
        return (0, a.jsxs)(a.Fragment, {
            children: [
                n[1],
                null == l ? null : (0, a.jsxs)("span", { className: eq.MM, children: [" ", l] }),
                null == i ? null : (0, a.jsxs)("span", { className: eq.ie, children: [" ", i] }),
            ],
        });
    let s = eQ.exec(t);
    if (null == s) return t;
    let r = "no matches" === s[2];
    return (0, a.jsxs)(a.Fragment, {
        children: [s[1], (0, a.jsxs)("span", { className: r ? eq.Hi : eq.qZ, children: [" ", s[2]] })],
    });
}
var e0 = n(229775);
function e1(e) {
    let { projectId: t, node: n, presentation: l = "row", active: s = !1 } = e,
        [o, c] = i.useState(!1),
        d = i.useId(),
        u = i.useCallback(() => c((e) => !e), []),
        h = eG(n),
        m = n.detail,
        f = "failed" === n.status ? "text-feedback-critical" : "detail" === l ? "text-muted" : "text-default",
        g = "text-muted" === f,
        x = s && g ? "none" : o && g ? "currentColor" : f,
        v = r()(eq.iq, { [e0.Hz]: s && g }),
        b = "detail" === l ? "text-md/normal" : "text-sm/normal",
        j = "detail" === l ? "text-sm/normal" : "text-xs/normal",
        y = null != t ? n.screenshots : [];
    if (0 === m.length && 0 === y.length)
        return (0, a.jsx)("li", {
            "data-step-kind": n.labelKey ?? "step",
            className: eq.Dx,
            children: (0, a.jsx)(p.E, {
                tag: "div",
                variant: b,
                color: x,
                selectable: !0,
                className: v,
                children: (0, a.jsx)(eJ, { text: h }),
            }),
        });
    let k = o ? ez.a : eW._;
    return (0, a.jsxs)("li", {
        "data-step-kind": n.labelKey ?? "step",
        className: eq.Dx,
        children: [
            (0, a.jsxs)(ek.D, {
                tag: "div",
                className: eq.kG,
                "aria-expanded": o,
                "aria-controls": d,
                "aria-label": O.intl.formatToPlainString(M.default.z4KWsN, { step: h }),
                onClick: u,
                children: [
                    (0, a.jsx)(p.E, {
                        tag: "span",
                        variant: b,
                        color: x,
                        className: v,
                        children: (0, a.jsx)(eJ, { text: h }),
                    }),
                    (0, a.jsx)(k, { size: "xs", color: "currentColor", className: eq.Ue }),
                ],
            }),
            (0, a.jsxs)("div", {
                id: d,
                hidden: !o,
                className: eq.yJ,
                children: [
                    m.map((e, t) =>
                        (0, a.jsx)(
                            p.E,
                            {
                                tag: "div",
                                variant: j,
                                color: s && g ? "none" : "text-muted",
                                selectable: !0,
                                className: r()({ [e0.Hz]: s && g }),
                                children: (0, a.jsx)(eJ, { text: e }),
                            },
                            t,
                        ),
                    ),
                    null != t && y.length > 0
                        ? (0, a.jsx)("div", {
                              className: eq.y8,
                              children: y.map((e) => (0, a.jsx)(e6, { projectId: t, screenshotId: e }, e)),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function e2() {}
function e6(e) {
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
    let c = O.intl.string(M.default["3Hq9pQ"]),
        d = i.useCallback(() => {
            (0, h.aF)(t, n).then((e) => {
                (0, eX.R)({
                    items: [{ type: "IMAGE", url: e, alt: c }],
                    startingIndex: 0,
                    shouldHideMediaOptions: !0,
                    location: "VibegrationsChat",
                });
            }, e2);
        }, [t, n, c]);
    return r ? null : (0, a.jsx)(eS, { name: c, thumbSrc: l, ariaLabel: c, onClick: d, onThumbError: () => o(!0) });
}
function e3(e) {
    let t = Math.max(1, Math.round(e / 1e3));
    if (t < 60) return O.intl.formatToPlainString(M.default["49T8W0"], { count: t });
    let n = Math.round(t / 60);
    return n < 60
        ? O.intl.formatToPlainString(M.default.NkZO2t, { count: n })
        : O.intl.formatToPlainString(M.default["2qYUUZ"], { hours: Math.floor(n / 60), minutes: n % 60 });
}
function e7(e) {
    let { projectId: t, steps: n, fallbackLabel: l, live: i, durationMs: s, connectsDown: r = !1 } = e,
        o = eF(n),
        c = i ? void 0 : s,
        d = null != c ? e3(c) : null != o ? eG(o) : (l ?? O.intl.string(M.default.nv6pUM)),
        u = n.length > 1 || n.some((e) => e.detail.length > 0 || e.screenshots.length > 0);
    return (0, a.jsx)(eY, {
        glyph: (0, a.jsx)(eV, {}),
        line: d,
        live: i,
        settled: null != c,
        connectsDown: r,
        detail: u
            ? (0, a.jsx)("ol", {
                  className: eq.dO,
                  children: n.map((e) =>
                      (0, a.jsx)(e1, { projectId: t, node: e, presentation: "detail", active: i && e === o }, e.id),
                  ),
              })
            : void 0,
    });
}
var e5 = n(478016),
    e4 = n(113757);
function e8(e) {
    let { idea: t, selected: n, onPick: l } = e,
        s = i.useId(),
        o = null == l;
    return (0, a.jsxs)(ek.D, {
        className: r()(e4.nM, { [e4.f1]: o, [e4.CZ]: n }),
        onClick: o ? void 0 : () => l(t),
        "aria-label": O.intl.formatToPlainString(M.default.pztRGi, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : s,
        "aria-disabled": o,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: e4.jo,
                children: [
                    n
                        ? (0, a.jsx)(e5.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: e4.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(p.E, {
                        tag: "div",
                        variant: "text-md/normal",
                        color: "none",
                        className: e4.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, a.jsx)(p.E, {
                      tag: "div",
                      id: s,
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function e9(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [s, r] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                r((t) => new Set(t).add(e.id)), l?.(e);
            },
            [l],
        );
    return (0, a.jsxs)("section", {
        className: e4.kR,
        "data-vibegrations-idea-cards": !0,
        children: [
            (0, a.jsx)("div", {
                className: e4.wx,
                children: (0, a.jsx)(p.E, {
                    tag: "span",
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: O.intl.string(M.default.DAvYsi),
                }),
            }),
            t.map((e) =>
                (0, a.jsx)(
                    e8,
                    { idea: e, selected: s.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                    e.id,
                ),
            ),
        ],
    });
}
var te = n(375068);
function tt(e) {
    let { projectId: t, attachments: n } = e,
        l = n.filter(tn);
    return (0, a.jsx)("div", {
        className: te.KT,
        children: n.map((e, n) =>
            null == e.id
                ? (0, a.jsx)(tl, { name: e.name }, n)
                : tn(e)
                  ? (0, a.jsx)(ti, { projectId: t, viewableImages: l, viewerIndex: l.indexOf(e) }, n)
                  : (0, a.jsx)(ta, { projectId: t, id: e.id, name: e.name }, n),
        ),
    });
}
function tn(e) {
    return null != e.id && ej.Wb.has(e.content_type);
}
function tl(e) {
    let { name: t, unavailable: n = !1 } = e,
        l = n ? O.intl.formatToPlainString(M.default.OBr7WW, { name: t }) : t;
    return (0, a.jsx)(eA, { name: l, compact: !0 });
}
function ta(e) {
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
        ? (0, a.jsx)(tl, { name: l, unavailable: !0 })
        : (0, a.jsx)(eS, {
              name: l,
              thumbSrc: null,
              ariaLabel: O.intl.formatToPlainString(M.default.gV5YcR, { name: l }),
              onClick: o,
          });
}
function ti(e) {
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
                  (0, eX.R)({
                      items: e.filter((e) => "string" != typeof e),
                      startingIndex: e.slice(0, l).filter((e) => "string" != typeof e).length,
                      shouldHideMediaOptions: !0,
                      location: "VibegrationsChat",
                  });
        });
    }, [t, n, l]);
    return d
        ? (0, a.jsx)(tl, { name: r, unavailable: !0 })
        : (0, a.jsx)(eS, {
              name: r,
              thumbSrc: o,
              ariaLabel: O.intl.formatToPlainString(M.default.QUFLUq, { name: r }),
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
var ts = n(824757);
function tr(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsxs)("section", {
              className: ts.hb,
              children: [
                  (0, a.jsx)(p.E, { variant: "text-xs/semibold", color: "text-muted", tag: "span", children: t }),
                  (0, a.jsx)("div", {
                      className: ts.Hu,
                      children: n.map((e) =>
                          (0, a.jsx)(
                              "span",
                              {
                                  className: ts.uR,
                                  children: (0, a.jsx)(p.E, {
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
function to(e) {
    let { proposal: t, onApprove: n } = e;
    return (0, a.jsxs)("article", {
        className: ts.cz,
        "data-vibegrations-plan-card": !0,
        children: [
            (0, a.jsxs)("header", {
                className: ts.pu,
                children: [
                    (0, a.jsx)(p.E, {
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        tag: "span",
                        children: O.intl.string(M.default["60htw+"]),
                    }),
                    !0 === t.is_activity
                        ? (0, a.jsx)("span", {
                              className: ts.dr,
                              children: (0, a.jsx)(p.E, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  tag: "span",
                                  children: O.intl.string(O.t.IC5Ann),
                              }),
                          })
                        : null,
                ],
            }),
            (0, a.jsx)(p.E, { variant: "text-sm/normal", color: "text-default", selectable: !0, children: t.summary }),
            t.changes.length > 0
                ? (0, a.jsxs)("section", {
                      className: ts.hb,
                      children: [
                          (0, a.jsx)(p.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: O.intl.string(M.default.KLyB8Y),
                          }),
                          (0, a.jsx)("ul", {
                              className: ts.eQ,
                              children: t.changes.map((e, t) =>
                                  (0, a.jsxs)(
                                      "li",
                                      {
                                          className: ts.H6,
                                          children: [
                                              (0, a.jsx)(p.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  className: ts.UZ,
                                                  children: "\u2022",
                                              }),
                                              (0, a.jsx)(p.E, {
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
                      className: ts.hb,
                      children: [
                          (0, a.jsx)(p.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: O.intl.string(O.t["0hKkS+"]),
                          }),
                          (0, a.jsx)("ul", {
                              className: ts.eQ,
                              children: t.commands.map((e, t) =>
                                  (0, a.jsxs)(
                                      "li",
                                      {
                                          className: ts.Xs,
                                          children: [
                                              (0, a.jsxs)(p.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-default",
                                                  tag: "span",
                                                  selectable: !0,
                                                  children: ["launch" === e.kind ? "\u21EA " : "", "/", e.name],
                                              }),
                                              (0, a.jsx)(p.E, {
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
            (0, a.jsx)(tr, { label: O.intl.string(M.default.ieqTtP), names: t.bot_permissions ?? [] }),
            (0, a.jsx)(tr, { label: O.intl.string(M.default.Cn9qix), names: t.privileged_intents ?? [] }),
            null != n
                ? (0, a.jsxs)("div", {
                      className: ts.nc,
                      children: [
                          (0, a.jsx)(f.$, {
                              variant: "secondary",
                              size: "sm",
                              onClick: n,
                              text: O.intl.string(M.default.GYoWRk),
                          }),
                          (0, a.jsx)(p.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              tag: "span",
                              className: ts.sw,
                              children: "or reply to keep refining",
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var tc = n(192308),
    td = n(479191);
function tu(e) {
    let { projectId: t, request: l } = e,
        s = i.useCallback(() => {
            (0, tc.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("338013"), n.e("468421")]).then(n.bind(n, 539620));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: l });
            });
        }, [t, l]);
    return (0, a.jsxs)("article", {
        className: td.Lo,
        children: [
            (0, a.jsx)(p.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: O.intl.string(M.default["/e28TK"]),
            }),
            (0, a.jsx)(p.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: null != l.note && "" !== l.note ? l.note : O.intl.string(M.default.jxvtin),
            }),
            (0, a.jsx)("div", {
                className: td.cS,
                children: l.fields.map((e) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: td.$H,
                            children: (0, a.jsx)(p.E, {
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
                className: td.sq,
                children: (0, a.jsx)(f.$, {
                    variant: "secondary",
                    size: "sm",
                    onClick: s,
                    text: O.intl.string(M.default["gVV+HX"]),
                }),
            }),
        ],
    });
}
var th = n(976814),
    tm = n(973e3);
function tf(e) {
    let { projectId: t, request: n } = e,
        l = (0, E.bG)([h.Ay], () => h.Ay.getSettings(t)),
        s = (n.keys ?? []).map((e) => l?.schema.find((t) => t.key === e)).filter((e) => null != e),
        r = i.useCallback(() => {
            (0, th.A)(t, { scopeKeys: n.keys, note: n.note, notifyAgent: !0 });
        }, [t, n]);
    return (0, a.jsxs)("article", {
        className: tm.Mk,
        children: [
            (0, a.jsx)(p.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: O.intl.string(M.default.wgDhiQ),
            }),
            (0, a.jsx)(p.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: null != n.note && "" !== n.note ? n.note : O.intl.string(M.default["V+DBhs"]),
            }),
            s.length > 0
                ? (0, a.jsx)("div", {
                      className: tm.R6,
                      children: s.map((e) =>
                          (0, a.jsx)(
                              "span",
                              {
                                  className: tm.K4,
                                  children: (0, a.jsx)(p.E, {
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
                className: tm.p0,
                children: (0, a.jsx)(f.$, {
                    variant: "secondary",
                    size: "sm",
                    onClick: r,
                    text: O.intl.string(M.default["KO2xN+"]),
                }),
            }),
        ],
    });
}
function tg(e) {
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
function tp(e) {
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
function tx(e) {
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
function tv(e) {
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
function tb(e) {
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
function tj(e) {
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
function ty(e) {
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
function tk(e) {
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
function tN(e) {
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
function tw(e) {
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
function tE(e) {
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
function tA(e) {
    return O.intl.string(e);
}
function tS(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : O.intl.string(M.default.MdXWEK);
}
function tI(e) {
    let { lane: t, Illocon: n, tint: l, name: i, connectsDown: s } = e,
        r = t.task,
        o = "running" === r.status,
        c = eF(t.steps),
        d = o
            ? null != c
                ? eG(c)
                : tS(r)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(tS(e));
                  switch (e.status) {
                      case "failed":
                          return O.intl.formatToPlainString(M.default["5uv8y0"], { task: t });
                      case "cancelled":
                          return O.intl.formatToPlainString(M.default["oEzDO/"], { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return O.intl.formatToPlainString(M.default.vuv9bT, {
                                  task: t,
                                  duration: (function (e) {
                                      let t = Math.max(1, Math.round(e / 1e3));
                                      if (t < 60) return O.intl.formatToPlainString(M.default.RsOwXc, { count: t });
                                      let n = Math.round(t / 60);
                                      return n < 60
                                          ? O.intl.formatToPlainString(M.default["z+U4YX"], { count: n })
                                          : O.intl.formatToPlainString(M.default["7Q/vz0"], {
                                                hours: Math.floor(n / 60),
                                                minutes: n % 60,
                                            });
                                  })(e.durationMs),
                              });
                          return O.intl.formatToPlainString(M.default.KS49RN, { task: t });
                      default:
                          return O.intl.formatToPlainString(M.default.KS49RN, { task: t });
                  }
              })(r),
        u =
            0 === t.steps.length && 0 === r.detail.length
                ? void 0
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          t.steps.length > 0
                              ? (0, a.jsx)("ol", {
                                    className: eq.dO,
                                    children: t.steps.map((e) =>
                                        (0, a.jsx)(e1, { node: e, presentation: "detail", active: o && e === c }, e.id),
                                    ),
                                })
                              : null,
                          r.detail.map((e, t) => (0, a.jsx)("div", { className: eq.iq, children: e }, t)),
                      ],
                  });
    return (0, a.jsx)(eY, {
        glyph: (0, a.jsx)(em.m, {
            text: i,
            position: "left",
            children: (0, a.jsx)("span", {
                className: eq.nC,
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
var tT = n(820081),
    tC = n(329456);
function t_(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", {
        className: tC.Vn,
        "data-status": t,
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return O.intl.string(M.default.TkPGOH);
                case "in_progress":
                    return O.intl.string(M.default["oK+fmd"]);
                default:
                    return O.intl.string(M.default.d7lieu);
            }
        })(t),
        children: "completed" === t ? (0, a.jsx)(tT.B, { size: "xxs", color: "currentColor" }) : null,
    });
}
function tR(e) {
    return { completed: e.filter((e) => "completed" === e.status).length, total: e.length };
}
function tP(e) {
    let { todos: t, provisional: n } = e;
    return (0, a.jsxs)("ul", {
        className: tC.zR,
        children: [
            t.map((e) =>
                (0, a.jsxs)(
                    "li",
                    {
                        className: tC.qN,
                        "data-status": e.status,
                        children: [
                            (0, a.jsx)(t_, { status: e.status }),
                            (0, a.jsx)(p.E, {
                                variant: "text-sm/normal",
                                color: "completed" === e.status ? "text-muted" : "text-default",
                                tag: "span",
                                className: tC.ku,
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
                      className: tC.qN,
                      "data-status": "pending",
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(t_, { status: "pending" }),
                          (0, a.jsx)(p.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              tag: "span",
                              className: tC.ku,
                              selectable: !0,
                              children: n,
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function tM(e) {
    let { todos: t, provisional: n, announceProgress: l = !0 } = e,
        { completed: i, total: s } = tR(t);
    return 0 === s
        ? null
        : (0, a.jsxs)("article", {
              className: tC.Rx,
              "data-vibegrations-todo-card": !0,
              children: [
                  (0, a.jsxs)("header", {
                      className: tC.Ye,
                      children: [
                          (0, a.jsx)(p.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: O.intl.string(M.default.qCRC6c),
                          }),
                          (0, a.jsx)("span", {
                              className: tC.mA,
                              ...(l
                                  ? {
                                        role: "status",
                                        "aria-live": "polite",
                                        "aria-label": O.intl.formatToPlainString(M.default["QG/EiF"], {
                                            completed: i,
                                            total: s,
                                        }),
                                    }
                                  : null),
                              children: (0, a.jsx)(p.E, {
                                  variant: "text-xs/medium",
                                  color: "text-muted",
                                  tag: "span",
                                  children: O.intl.formatToPlainString(M.default.bQvqly, { completed: i, total: s }),
                              }),
                          }),
                      ],
                  }),
                  (0, a.jsx)(tP, { todos: t, provisional: n }),
              ],
          });
}
var tO = n(165648);
function tL(e) {
    let { projectId: t, steps: n, active: l = !1, durationMs: s, interrupted: r = !1, ideasPass: o = !1 } = e,
        c = i.useMemo(
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
                        let s = `${e ?? ""}\0${n}`,
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
            className: eq.pj,
            "data-live": !1,
            children: (0, a.jsx)(eY, {
                glyph: (0, a.jsx)(eg.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: O.intl.string(M.default["5T7DSm"]),
                live: !1,
                settled: !0,
            }),
        });
    let d = l ? void 0 : (c.turn?.durationMs ?? s);
    if (o)
        return (0, a.jsx)("ol", {
            className: eq.pj,
            "data-live": l,
            children: (0, a.jsx)(eY, {
                glyph: (0, a.jsx)(eB.LightbulbIcon, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: null != d ? e3(d) : O.intl.string(M.default["z2+nNW"]),
                live: l,
                settled: null != d,
            }),
        });
    if (0 === c.steps.length && 0 === c.tasks.length) return null;
    let u = c.tasks,
        h = (function (e) {
            let t = [
                    { Illocon: tg, tint: "var(--illo-yellow-40)", name: tA(M.default["2l3AEQ"]) },
                    { Illocon: tp, tint: "var(--illo-orange-40)", name: tA(M.default["+FPL+I"]) },
                    { Illocon: tx, tint: "var(--illo-green-40)", name: tA(M.default.w4GOfR) },
                    { Illocon: tv, tint: "var(--illo-pink-40)", name: tA(M.default.XmZT9M) },
                    { Illocon: tb, tint: "var(--illo-pink-40)", name: tA(M.default.NnydwQ) },
                    { Illocon: tj, tint: "var(--illo-green-40)", name: tA(M.default["4iXcNT"]) },
                    { Illocon: ty, tint: "var(--illo-purple-40)", name: tA(M.default.DoTGt5) },
                    { Illocon: tk, tint: "var(--illo-yellow-40)", name: tA(M.default["9zxqmP"]) },
                    { Illocon: tN, tint: "var(--illo-orange-40)", name: tA(M.default.HF0T3L) },
                    { Illocon: tw, tint: "var(--illo-yellow-40)", name: tA(M.default.XTzDga) },
                    { Illocon: tE, tint: "var(--illo-purple-40)", name: tA(M.default.abtC2b) },
                ],
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
        })(u.map((e) => e.taskId)),
        m = l || u.some((e) => "running" === e.task.status);
    return (0, a.jsx)(eK.Provider, {
        value: u.length,
        children: (0, a.jsxs)("ol", {
            className: eq.pj,
            "data-live": m,
            children: [
                (0, a.jsx)(e7, {
                    projectId: t,
                    steps: c.steps,
                    fallbackLabel: u.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                    live: l,
                    durationMs: d,
                    connectsDown: u.length > 0,
                }),
                u.map((e, t) => {
                    let n = h.get(e.taskId);
                    return null == n
                        ? null
                        : (0, a.jsx)(
                              tI,
                              {
                                  lane: e,
                                  Illocon: n.Illocon,
                                  tint: n.tint,
                                  name: n.name,
                                  connectsDown: t < u.length - 1,
                              },
                              e.taskId,
                          );
                }),
            ],
        }),
    });
}
function tD(e) {
    let {
            projectId: t,
            steps: n,
            content: l,
            proposal: s,
            todos: o,
            provisionalTodo: c,
            onApprove: d,
            ideas: u,
            attachments: h,
            secretRequest: m,
            settingsRequest: f,
            onPickIdea: g,
            pickedIdeaIds: x,
            sideReply: v = !1,
        } = e,
        b = i.useMemo(
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
        j = b.filter((e) => "message" === e.type).at(-1),
        y = !b.some((e) => "todos" === e.type) && null != o && o.length > 0 ? o : void 0,
        k = (function (e) {
            for (let t = e.length - 1; t >= 0; t--) {
                let n = e[t];
                if (null != n) {
                    if ("assistant_delta" === n.kind && null != n.message && "" !== n.message) return !0;
                    if (!eH(n) && ("node" === n.kind || "error" === n.kind || "terminal_error" === n.kind)) break;
                }
            }
            return !1;
        })(n),
        N = k && null != j && j.content.trim() === l.trim(),
        w = null == s && "" !== l && !N,
        E = (function (e) {
            let { hasAttachments: t, showsClosingMessage: n, endsOnStreamedMessage: l } = e;
            return t ? (n ? "closing" : l ? "streamed" : "standalone") : "none";
        })({ hasAttachments: null != h && h.length > 0, showsClosingMessage: w, endsOnStreamedMessage: k }),
        A = null == h ? null : (0, a.jsx)(tt, { projectId: t, attachments: h }),
        S = null == A ? null : (0, a.jsx)("div", { className: eq.MT, children: A }),
        I = v
            ? (0, a.jsx)(p.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: O.intl.string(M.default.OAjkIT),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: eq.ue,
        children: [
            b.length > 0 || null != y
                ? (0, a.jsxs)("ol", {
                      className: eq.dO,
                      children: [
                          b.map((e) =>
                              (0, a.jsx)(
                                  "li",
                                  {
                                      className: r()(eq.ky, e0.XR),
                                      children:
                                          "todos" === e.type
                                              ? (0, a.jsx)(tM, { todos: e.todos, provisional: c })
                                              : (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                        (0, a.jsx)("div", {
                                                            className: r()(tO.PT, eq.cW),
                                                            children: eU.A.parse(e.content, !0, {
                                                                allowList: !0,
                                                                allowHeading: !0,
                                                                allowLinks: !0,
                                                            }),
                                                        }),
                                                        "streamed" === E && e === j ? S : null,
                                                    ],
                                                }),
                                  },
                                  e.key,
                              ),
                          ),
                          null != y
                              ? (0, a.jsx)("li", {
                                    className: r()(eq.ky, e0.XR),
                                    children: (0, a.jsx)(tM, { todos: y, provisional: c }),
                                })
                              : null,
                      ],
                  })
                : null,
            null != s
                ? (0, a.jsx)("div", {
                      className: r()(eq.ky, e0.XR),
                      children: (0, a.jsx)(to, { proposal: s, onApprove: d }),
                  })
                : w
                  ? (0, a.jsxs)("div", {
                        className: r()(eq.ky, e0.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: r()(tO.PT, eq.cW),
                                children: eU.A.parse(l, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === E ? S : null,
                            I,
                        ],
                    })
                  : null,
            null != m
                ? (0, a.jsx)("div", {
                      className: r()(eq.ky, e0.XR),
                      children: (0, a.jsx)(tu, { projectId: t, request: m }),
                  })
                : null,
            null != f
                ? (0, a.jsx)("div", {
                      className: r()(eq.ky, e0.XR),
                      children: (0, a.jsx)(tf, { projectId: t, request: f }),
                  })
                : null,
            "standalone" === E ? (0, a.jsx)("div", { className: r()(eq.ky, e0.XR), children: S }) : null,
            null != u && u.length > 0 ? (0, a.jsx)(e9, { ideas: u, pickedIdeaIds: x, onPick: g }) : null,
            w ? null : I,
        ],
    });
}
var t$ = n(320095),
    tG = n(963852),
    tF = n(763754),
    tH = n(491182),
    tB = n(20851),
    tU = n(375199),
    tq = n(715628),
    tV = n(752636),
    tz = n(95701),
    tW = n(441136);
let tK = (0, tz.createChannelRecord)({ id: "vibegrations-builder", type: T.rbe.DM }),
    tY = {
        id: "vibegrations-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function tX(e, t) {
    return null != e && t ? (0, a.jsx)("div", { className: tW.Yq, children: e }) : e;
}
function tZ(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function tQ(e) {
    let { content: t, createdAt: n, userId: l, accessories: s } = e,
        r = (0, E.bG)([eD.default], () => (null != l ? eD.default.getUser(l) : null) ?? eD.default.getCurrentUser(), [
            l,
        ]),
        o = i.useMemo(() => (0, tF.FT)(r, null), [r]),
        c = i.useMemo(() => {
            if (null == r) return null;
            let e = (0, tG.Ay)({ channelId: tK.id, content: t, author: r });
            return (0, t$.rh)({ ...e, timestamp: tZ(n, e.timestamp), state: T.cmJ.SENT });
        }, [t, r, n]);
    return null == c
        ? null
        : null == s
          ? (0, a.jsx)(tB.A, { message: c, author: o, channel: tK, isGroupStart: !0, disableInteraction: !0 })
          : (0, a.jsx)(tH.A, {
                className: tW.yE,
                author: o,
                childrenHeader: (0, tV.A)({ message: c, channel: tK, author: o, guildId: void 0, isGroupStart: !0 }),
                childrenMessageContent: "" !== t ? void 0 : null,
                childrenAccessories: tX(s, "" !== t),
                disableInteraction: !0,
            });
}
function tJ(e) {
    let { content: t, createdAt: n, accessories: l } = e,
        s = i.useMemo(() => (0, tF.FT)(null, null), []),
        r = i.useMemo(() => ({ ...s, nick: "Conjure", colorString: "var(--text-brand)" }), [s]),
        o = i.useMemo(() => {
            let e = (0, tG.Ay)({ channelId: tK.id, content: t, author: tY });
            return (0, t$.rh)({ ...e, timestamp: tZ(n, e.timestamp), state: T.cmJ.SENT });
        }, [t, n]),
        { content: c } = (0, tU.A)(o, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        d = i.useMemo(() => ({ message: o, channel: tK, compact: !1, groupId: o.id }), [o]);
    return (0, a.jsxs)("div", {
        className: tW.$4,
        children: [
            (0, a.jsx)(tH.A, {
                className: tW.yE,
                author: r,
                childrenHeader: (0, tV.A)({ message: o, channel: tK, author: r, guildId: void 0, isGroupStart: !0 }),
                childrenMessageContent: "" !== t ? (0, tq.A)(d, c) : null,
                childrenAccessories: tX(l, "" !== t),
                disableInteraction: !0,
            }),
            (0, a.jsx)("span", {
                className: tW.st,
                "aria-hidden": "true",
                children: (0, a.jsx)(g.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
            }),
        ],
    });
}
let t0 = {
    steered: M.default.I9TkzD,
    queued: M.default.gbjY6o,
    restarting: M.default["1Q4Cs2"],
    answered: M.default["J6WZ+x"],
};
function t1(e) {
    let { projectId: t, messages: n, onApprove: l, onPickIdea: s } = e,
        r = (0, E.bG)([eD.default], () => eD.default.getCurrentUser()),
        o = n[n.length - 1];
    return 0 === n.length
        ? (0, a.jsx)("ol", {
              className: te.x7,
              children: (0, a.jsx)(t2, {
                  role: "assistant",
                  children: (0, a.jsx)(tJ, { content: O.intl.string(M.default.khZEUv) }),
              }),
          })
        : (0, a.jsx)("ol", {
              className: te.x7,
              children: n.map((e, c) => {
                  if ("user" === e.role) {
                      let n = null != e.attachments && e.attachments.length > 0 ? e.attachments : null;
                      return (0, a.jsx)(
                          t2,
                          {
                              role: "user",
                              children: (0, a.jsx)(tQ, {
                                  content: e.content,
                                  createdAt: e.created_at,
                                  userId: e.user_id ?? r?.id,
                                  accessories:
                                      null != n || null != e.disposition
                                          ? (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    null != n ? (0, a.jsx)(tt, { projectId: t, attachments: n }) : null,
                                                    null != e.disposition
                                                        ? (0, a.jsx)(p.E, {
                                                              variant: "text-xs/normal",
                                                              color: "text-muted",
                                                              children: O.intl.string(t0[e.disposition]),
                                                          })
                                                        : null,
                                                ],
                                            })
                                          : void 0,
                              }),
                          },
                          e.render_id,
                      );
                  }
                  let d = e.steps.some(
                          (e) =>
                              "error" === e.kind ||
                              "terminal_error" === e.kind ||
                              ("node" === e.kind && null != e.node && !eH(e)),
                      ),
                      u = e.steps.some((e) => "assistant_delta" === e.kind && null != e.message && "" !== e.message),
                      h =
                          e.steps.some(
                              (e) =>
                                  "todos" === e.kind &&
                                  (null == e.task_id || "" === e.task_id) &&
                                  (e.items?.length ?? 0) > 0,
                          ) || (e.todos?.length ?? 0) > 0,
                      m =
                          "" !== e.content ||
                          h ||
                          null != e.proposal ||
                          null != e.ideas ||
                          null != e.clarification ||
                          null != e.secretRequest ||
                          u ||
                          (e.attachments?.length ?? 0) > 0,
                      f = !0 === e.interrupted,
                      g = (function (e, t) {
                          for (let n = t - 1; n >= 0; n--) {
                              let t = e[n];
                              if (null != t && "user" === t.role)
                                  return t.content === O.intl.string(M.default["3sTTBu"]);
                          }
                          return !1;
                      })(n, c);
                  return d || m || f || g
                      ? (0, a.jsxs)(
                            i.Fragment,
                            {
                                children: [
                                    d || f || g
                                        ? (0, a.jsx)(t2, {
                                              role: "assistant",
                                              children: (0, a.jsx)(tL, {
                                                  projectId: t,
                                                  interrupted: f,
                                                  ideasPass: g,
                                                  steps: e.steps,
                                                  active: !(0, ea.BL)(e),
                                                  durationMs:
                                                      null != e.finished_at ? e.finished_at - e.created_at : void 0,
                                              }),
                                          })
                                        : null,
                                    m
                                        ? (0, a.jsx)(t2, {
                                              role: "assistant",
                                              children: (0, a.jsx)(tJ, {
                                                  content: e.content,
                                                  createdAt: e.created_at,
                                                  accessories: (0, a.jsx)(tD, {
                                                      projectId: t,
                                                      steps: e.steps,
                                                      announcement: e.announcement,
                                                      content: "",
                                                      proposal: e.proposal,
                                                      interrupted: !0 === e.interrupted,
                                                      provisionalTodo: e.provisionalTodo,
                                                      active: !(0, ea.BL)(e),
                                                      todos: e.todos,
                                                      onApprove: e === o ? l : void 0,
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
                                                                })(n, c, e.ideas),
                                                      attachments: e.attachments,
                                                      secretRequest: e.secretRequest,
                                                      settingsRequest: e.settingsRequest,
                                                      onPickIdea: s,
                                                      sideReply: "side_reply" === e.kind,
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
function t2(e) {
    let { role: t, children: n } = e;
    return (0, a.jsx)("li", { "data-role": t, className: te.xk, children: n });
}
var t6 = n(625903),
    t3 = n(964675);
function t7(e) {
    let { projectId: t } = e,
        n = (0, E.bG)([h.Ay], () => null != h.Ay.getSettings(t), [t]),
        l = i.useCallback(() => {
            (0, th.A)(t);
        }, [t]);
    return n
        ? (0, a.jsx)(ek.D, {
              className: t3.h,
              "aria-label": O.intl.string(M.default.gTMvzD),
              onClick: l,
              children: (0, a.jsx)(t6.SettingsIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
          })
        : null;
}
var t5 = n(863610),
    t4 = n(495557);
function t8(e) {
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
            className: t4.jn,
            "data-vibegrations-thinking-panel": !0,
            children: (0, a.jsx)(el.Ch, {
                ref: s,
                className: t4.Dq,
                "data-vibegrations-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: r()(tO.PT, t4.bb),
                    children: eU.A.parse(l, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var t9 = n(921461);
function ne(e) {
    let { activity: t, compacting: n = !1, restoring: l = !1 } = e,
        s = i.useRef(null),
        o = i.useId(),
        [c, d] = i.useState(null),
        u = null != t && "end" !== t.phase,
        h = l ? M.default.aFffp2 : n ? M.default["0vH/5G"] : u ? M.default.Ly7F7x : M.default.QDGuNS,
        m = null != t && "" !== t.text,
        f = t?.session ?? null,
        g = m && null != f && c === f,
        x = i.useCallback(() => {
            m && null != f && d((e) => (e === f ? null : f));
        }, [m, f]),
        v = i.useCallback(() => d(null), []);
    return (0, a.jsx)(es.Y, {
        targetElementRef: s,
        position: "top",
        align: "left",
        shouldShow: g,
        onRequestClose: v,
        renderPopout: () => (0, a.jsx)(t8, { id: o, activity: t }),
        children: () =>
            (0, a.jsxs)(ek.D, {
                innerRef: s,
                className: r()(t9.h, m && t9.X),
                "aria-label": O.intl.string(l ? M.default.pGFXZ0 : M.default.SzdX35),
                "aria-expanded": g,
                "aria-describedby": g ? o : void 0,
                "data-vibegrations-thinking-trigger": !0,
                onClick: x,
                children: [
                    (0, a.jsx)(t5.n, { dotRadius: 3.5, themed: !0 }),
                    (0, a.jsx)(p.E, {
                        tag: "span",
                        variant: "text-xs/semibold",
                        color: "text-strong",
                        children: O.intl.string(h),
                    }),
                ],
            }),
    });
}
var nt = n(662546),
    nn = n(233263);
function nl(e) {
    let { todos: t, provisional: n } = e;
    return (0, a.jsx)("div", {
        className: nn.B,
        role: "dialog",
        "aria-label": O.intl.string(M.default.qCRC6c),
        children: (0, a.jsx)(tM, { todos: t, provisional: n, announceProgress: !1 }),
    });
}
function na(e) {
    let { todos: t, provisional: n } = e,
        l = i.useRef(null),
        { completed: s, total: r } = tR(t);
    return 0 === r
        ? null
        : (0, a.jsx)(es.Y, {
              targetElementRef: l,
              position: "top",
              align: "right",
              renderPopout: () => (0, a.jsx)(nl, { todos: t, provisional: n }),
              children: (e) =>
                  (0, a.jsxs)(ek.D, {
                      innerRef: l,
                      className: nn.T,
                      "aria-label": O.intl.formatToPlainString(M.default["QG/EiF"], { completed: s, total: r }),
                      ...e,
                      children: [
                          (0, a.jsx)(nt.O, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                          (0, a.jsx)(p.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "none",
                              children: O.intl.formatToPlainString(M.default["6zuiBa"], { completed: s, total: r }),
                          }),
                      ],
                  }),
          });
}
var ni = n(885574),
    ns = n(280894);
function nr(e) {
    return e.toLocaleString();
}
function no(e) {
    let { label: t, usage: n } = e;
    return (0, a.jsxs)("div", {
        className: ns.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: ns.mf,
                children: [
                    (0, a.jsx)(p.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(p.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [nr((0, ej.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(p.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    nr(n.input_tokens),
                    " in \xb7 ",
                    nr(n.output_tokens),
                    " out \xb7 ",
                    nr(n.cache_creation_input_tokens),
                    " cache write \xb7 ",
                    nr(n.cache_read_input_tokens),
                    " cache read",
                ],
            }),
        ],
    });
}
function nc(e) {
    let { project: t } = e,
        n = (0, ej.wV)(t.orchestrator, t.codegen);
    return (0, a.jsxs)("div", {
        className: ns.si,
        role: "dialog",
        "aria-label": O.intl.string(M.default["9yoLWZ"]),
        children: [
            (0, a.jsx)("div", {
                className: ns.Q$,
                children: (0, a.jsxs)("div", {
                    className: ns.mf,
                    children: [
                        (0, a.jsxs)(p.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [nr((0, ej.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(p.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(no, { label: O.intl.string(M.default.hk4jJr), usage: t.orchestrator }),
            (0, a.jsx)(no, { label: O.intl.string(M.default.R9aduM), usage: t.codegen }),
            (0, a.jsxs)("div", {
                className: ns.mf,
                children: [
                    (0, a.jsx)(p.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: O.intl.string(M.default["kILb+R"]),
                    }),
                    (0, a.jsx)(p.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, ej.sj)(n) ? "\u2014" : `${Math.round(100 * (0, ej.CA)(n))}%`,
                    }),
                ],
            }),
        ],
    });
}
function nd(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(es.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(nc, { project: t }),
        children: (e) =>
            (0, a.jsx)(ek.D, {
                innerRef: n,
                className: ns.Y$,
                "aria-label": O.intl.string(M.default.AWQ2ZV),
                ...e,
                children: (0, a.jsx)(ni.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var nu = n(258216);
function nh(e) {
    switch (e) {
        case "connecting":
            return O.intl.string(M.default.W7oyuf);
        case "failed":
            return O.intl.string(M.default.eE60xI);
        case "closed":
            return O.intl.string(M.default["yBmS+I"]);
    }
}
function nm(e) {
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
        className: nu.jf,
        children: [
            (0, a.jsx)("div", {
                className: nu.Xx,
                role: "status",
                "aria-live": "polite",
                "data-vibegrations-activity": !0,
                children: n || l ? (0, a.jsx)(ne, { activity: i, compacting: s, restoring: l }) : null,
            }),
            (0, a.jsx)(t7, { projectId: t }),
            null == r || 0 === r.length ? null : (0, a.jsx)(na, { todos: r, provisional: o }),
            null == c
                ? null
                : (0, a.jsxs)("span", {
                      className: nu.BP,
                      children: [
                          (0, a.jsx)(p.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": O.intl.formatToPlainString(M.default["7SZZvj"], {
                                  runes: (0, ej.a7)(c.cost_usd),
                                  turns: c.turns,
                              }),
                              children: O.intl.formatToPlainString(M.default["4PFO2p"], {
                                  runes: (0, ej.a7)(c.cost_usd).toLocaleString(),
                              }),
                          }),
                          (0, a.jsx)(nd, { project: c }),
                      ],
                  }),
            "open" === d
                ? null
                : (0, a.jsx)(p.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === d ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": O.intl.formatToPlainString(M.default.eDDdhB, { status: nh(d) }),
                      "data-vibegrations-conn": !0,
                      "data-state": d,
                      className: nu.XF,
                      children: nh(d),
                  }),
        ],
    });
}
var nf = n(22231),
    ng = n(477155),
    np = n(935286),
    nx = n(424110);
function nv(e) {
    let { option: t, position: n, disabled: l, onPick: s } = e,
        o = i.useId(),
        c = !0 === t.recommended,
        d = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(ek.D, {
        className: r()(nx.uK, { [nx.ue]: l }),
        onClick: l ? void 0 : () => s(t),
        "aria-label": O.intl.formatToPlainString(c ? M.default.aL1BKQ : M.default.k7lEgj, { answer: t.label }),
        "aria-describedby": d ? o : void 0,
        "aria-disabled": l,
        "data-vibegrations-clarification-option": t.id,
        "data-recommended": c ? "true" : void 0,
        children: [
            (0, a.jsx)("span", { className: nx.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: nx.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: nx.l8,
                        children: (0, a.jsx)(p.E, {
                            tag: "span",
                            variant: "text-md/normal",
                            color: "none",
                            className: nx.ed,
                            children: t.label,
                        }),
                    }),
                    d
                        ? (0, a.jsx)(p.E, {
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
                ? (0, a.jsx)(p.E, {
                      tag: "span",
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      className: nx.rM,
                      children: O.intl.string(M.default.OXRWyV),
                  })
                : null,
        ],
    });
}
function nb(e) {
    let { clarification: t, onSubmit: n, onDismiss: l } = e,
        [s, c] = i.useState({}),
        [d, u] = i.useState({}),
        [h, m] = i.useState(0),
        f = null == n,
        g = t.questions.length,
        x = Math.min(h, g - 1),
        v = t.questions[x],
        b = i.useCallback(
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
                let n = { ...s, [v.id]: e };
                c(n);
                let l = (function (e, t, n) {
                    let { questions: l } = e;
                    for (let e = 1; e <= l.length; e++) {
                        let a = (n + e) % l.length,
                            i = t[l[a].id];
                        if (null == i || "" === i.text.trim()) return a;
                    }
                    return null;
                })(t, n, x);
                null == l ? b(n) : m(l);
            },
            [s, t, f, x, v.id, b],
        ),
        y = i.useCallback(() => {
            if (f || 0 === x) return;
            let e = t.questions[x - 1];
            c((t) => {
                let n = { ...t };
                return delete n[e.id], n;
            }),
                u((t) => {
                    let n = { ...t };
                    return delete n[e.id], n;
                }),
                m(x - 1);
        }, [t, f, x]),
        k = x > 0 && !f,
        N = d[v.id] ?? "",
        w = i.useCallback(() => {
            let e = N.trim();
            "" !== e && j({ kind: "custom", text: e });
        }, [N, j]),
        [E, A] = i.useState(!1),
        [S, I] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => A(!0));
            });
        return () => {
            cancelAnimationFrame(t), cancelAnimationFrame(e);
        };
    }, []);
    let T = i.useCallback(() => {
            null != l && (I(!0), setTimeout(l, 150));
        }, [l]),
        C = i.useCallback(() => {
            f || x >= g - 1 || m(x + 1);
        }, [f, x, g]),
        _ = x < g - 1 && !f;
    return (0, a.jsxs)("section", {
        className: r()(nx.$O, { [nx.fI]: E && !S, [nx.Oh]: S }),
        role: "dialog",
        "aria-label": v.question,
        "data-vibegrations-clarification": t.id,
        "data-state": f ? "inert" : "open",
        "data-step": x,
        children: [
            (0, a.jsxs)("div", {
                className: nx.wx,
                children: [
                    (0, a.jsx)(p.E, {
                        tag: "span",
                        id: `${v.id}-label`,
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        selectable: !0,
                        className: nx.TK,
                        children: v.question,
                    }),
                    null == l
                        ? null
                        : (0, a.jsx)(ek.D, {
                              className: r()(nx.gb, nx.Q7),
                              onClick: T,
                              "aria-label": O.intl.string(M.default.fMdUNR),
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
                className: nx.Ge,
                role: "group",
                "aria-labelledby": `${v.id}-label`,
                children: [
                    v.options.map((e, t) =>
                        (0, a.jsx)(
                            nv,
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
                        className: nx.Xy,
                        children: [
                            (0, a.jsx)("span", {
                                className: nx.Gy,
                                "aria-hidden": !0,
                                children: (0, a.jsx)(nf.PencilIcon, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: "currentColor",
                                }),
                            }),
                            (0, a.jsx)(eh.y, {
                                value: N,
                                onChange: (e) => {
                                    let { value: t } = e.currentTarget;
                                    u((e) => ({ ...e, [v.id]: t }));
                                },
                                onKeyDown: (e) => {
                                    "Enter" !== e.key ||
                                        e.shiftKey ||
                                        e.nativeEvent.isComposing ||
                                        (e.preventDefault(), w());
                                },
                                placeholder: O.intl.string(M.default.qifsdL),
                                "aria-label": O.intl.formatToPlainString(M.default.XHESTL, { question: v.question }),
                                disabled: f,
                                rows: 1,
                                className: nx.Pu,
                                "data-vibegrations-clarification-other": v.id,
                            }),
                        ],
                    }),
                ],
            }),
            g > 1
                ? (0, a.jsxs)("div", {
                      className: nx.qr,
                      children: [
                          (0, a.jsx)(p.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-vibegrations-clarification-progress": !0,
                              children: O.intl.formatToPlainString(M.default["7bypa+"], { index: x + 1, total: g }),
                          }),
                          (0, a.jsxs)("div", {
                              className: nx.Np,
                              children: [
                                  (0, a.jsx)(ek.D, {
                                      className: r()(nx.gb, { [nx.yI]: !k }),
                                      onClick: k ? y : void 0,
                                      tabIndex: k ? 0 : -1,
                                      "aria-hidden": !k,
                                      "aria-disabled": f,
                                      "aria-label": O.intl.string(M.default.KYpgvZ),
                                      "data-vibegrations-clarification-back": !0,
                                      "data-hidden": k ? void 0 : "true",
                                      children: (0, a.jsx)(ng.r, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                                  (0, a.jsx)(ek.D, {
                                      className: r()(nx.gb, { [nx.yI]: !_ }),
                                      onClick: _ ? C : void 0,
                                      tabIndex: _ ? 0 : -1,
                                      "aria-hidden": !_,
                                      "aria-disabled": f,
                                      "aria-label": O.intl.string(M.default.AlZqEH),
                                      "data-vibegrations-clarification-next": !0,
                                      "data-hidden": _ ? void 0 : "true",
                                      children: (0, a.jsx)(np.E, {
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
var nj = n(506774),
    ny = n(651649),
    nk = n(670455);
let nN = "shownVibegrationsFeedbackProjectIds";
var nw = n(348800);
let nE = [O.intl.string(M.default["E+Q26x"]), O.intl.string(M.default["06/jqP"]), O.intl.string(M.default["7MCiK9"])];
function nA(e) {
    let { projectId: t, onRegionCapture: l, restoreState: s } = e,
        r = (0, E.bG)([ea.Ay], () => ea.Ay.getMessages(t), [t]),
        o = (0, E.bG)([h.Ay], () => h.Ay.getConnState(t), [t]),
        c = (0, E.bG)([h.Ay], () => h.Ay.isChatStopped(t), [t]),
        d = (0, E.bG)([ea.Ay], () => ea.Ay.getProjectUsage(t), [t]),
        u = (0, E.bG)([ea.Ay], () => ea.Ay.getThinkingActivity(t), [t]),
        m = (0, E.bG)([ea.Ay], () => ea.Ay.isCompacting(t), [t]),
        f = (0, E.bG)([h.Ay], () => h.Ay.getModelSettings(t), [t]),
        g = i.useRef(null),
        p = i.useRef(null),
        x = i.useRef(!0),
        [v, b] = i.useState(!0);
    i.useEffect(() => {
        x.current && p.current?.scrollToBottom();
    }, [r]);
    let j = i.useCallback(() => {
        let e = p.current;
        if (null == e) return;
        let t = e.getDistanceFromBottom();
        x.current = t < 32;
        let n = t > 1;
        b((e) => (!n === e ? e : !n));
    }, []);
    i.useLayoutEffect(() => {
        let e = g.current;
        if (null == e) return;
        let t = e.getBoundingClientRect().width,
            n = null,
            l = new ResizeObserver((l) => {
                let [a] = l,
                    i = a?.contentRect.width ?? e.getBoundingClientRect().width;
                i === t ||
                    ((t = i),
                    x.current &&
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
            (0, h.Hc)(t);
        }, [t]),
        i.useEffect(
            () => () =>
                (function (e) {
                    let t = ea.Ay.getMessages(e).filter(
                        (e) => "assistant" === e.role && "side_reply" !== e.kind && (0, ea.BL)(e),
                    ).length;
                    !(t < 3) &&
                        ((nj.w.get(nN) ?? []).includes(e) ||
                            ny.A.possiblyShowFeedbackModal(nk.MW.VIBEGRATIONS, () => {
                                let l;
                                (l = nj.w.get(nN) ?? []).includes(e) || nj.w.set(nN, [...l, e]),
                                    (0, tc.openModalLazy)(async () => {
                                        let { default: l } = await Promise.all([
                                            n.e("312513"),
                                            n.e("743596"),
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
    let y = i.useCallback(
            (e, n) => {
                (0, h.dv)(t, e, n);
            },
            [t],
        ),
        k = i.useCallback(() => (0, h.fu)(t), [t]),
        N = i.useCallback((e) => y(e.implementation_prompt), [y]),
        w = i.useCallback((e) => y(e), [y]),
        A = i.useCallback((e) => (0, h.XZ)(t, e), [t]),
        S = i.useCallback((e) => (0, h.vX)(t, e), [t]),
        I = i.useCallback((e) => (0, h.Vm)(t, e), [t]),
        T = i.useCallback(() => y(O.intl.string(M.default.Jj8Ftb)), [y]),
        C = s?.status === "restoring",
        _ = "open" === o && !c && !C,
        R = r[r.length - 1],
        [P, L] = i.useState(null),
        D = R?.clarification != null && R.clarification.id !== P ? R.clarification : null,
        $ = i.useCallback(() => {
            null != D && L(D.id);
        }, [D]),
        G = (0, E.bG)([ea.Ay], () => ea.Ay.hasLoadedHistory(t), [t]),
        F = i.useMemo(() => {
            let e = 0;
            for (let n = 0; n < t.length; n++) e = (31 * e + t.charCodeAt(n)) % 0x7fffffff;
            return nE[e % nE.length];
        }, [t]),
        H = R?.kind === "plan_implemented" ? O.intl.string(M.default["3sTTBu"]) : G && 0 === r.length ? F : null,
        B = null != R && "assistant" === R.role && null != R.proposal,
        U = i.useMemo(() => {
            for (let e = r.length - 1; e >= 0; e--) {
                let t = r[e];
                if ("assistant" === t.role && !(0, ea.BL)(t)) return t;
            }
        }, [r]),
        q = null != U,
        V = B && _ ? T : void 0,
        z = U?.todos,
        W = U?.provisionalTodo;
    return (0, a.jsxs)("section", {
        ref: g,
        "data-vibegrations-chat": !0,
        className: nw.TE,
        children: [
            (0, a.jsx)(el.Ch, {
                ref: p,
                onScroll: j,
                "data-vibegrations-chat-log": !0,
                className: v ? nw.N$ : `${nw.N$} ${nw.hB}`,
                children: (0, a.jsx)(t1, { projectId: t, messages: r, onApprove: V, onPickIdea: _ ? N : void 0 }),
            }),
            (0, a.jsxs)("div", {
                className: nw.im,
                children: [
                    (0, a.jsx)(nm, {
                        projectId: t,
                        thinking: q,
                        restoring: C,
                        thinkingActivity: u,
                        compacting: m,
                        todos: z,
                        provisionalTodo: W,
                        projectUsage: d,
                        connState: o,
                    }),
                    (0, a.jsxs)("div", {
                        className: nw.Jx,
                        children: [
                            null == D
                                ? null
                                : (0, a.jsx)("div", {
                                      className: nw.B5,
                                      children: (0, a.jsx)(
                                          nb,
                                          { clarification: D, onSubmit: _ ? w : void 0, onDismiss: $ },
                                          D.id,
                                      ),
                                  }),
                            (0, a.jsx)(eP, {
                                canSend: _,
                                stopped: c,
                                running: q,
                                restoring: C,
                                onSend: y,
                                onInterrupt: _ ? k : void 0,
                                onUploadFile: S,
                                onDeleteFile: I,
                                onApprove: V,
                                onRegionCapture: l,
                                suggestion: H,
                                questionOpen: null != D,
                                modelSettings: f,
                                onModelSettingsChange: A,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var nS = n(435558),
    nI = n(661531),
    nT = n(602853),
    nC = n(517461),
    n_ = n(761929),
    nR = n(927506);
function nP(e) {
    let { open: t, maxWidth: n, onWidthChange: l, children: s } = e,
        r = (0, nT.r)(nI.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = i.useRef(null),
        [c, d] = (0, nC.V)("VibegrationsChatSidebarWidth", 460),
        [u, h] = i.useState(c ?? 460),
        m = (0, nS.clamp)(u, 360, n);
    i.useLayoutEffect(() => {
        l(t ? m + r : 0);
    }, [m, t, r, l]);
    let f = (0, n_.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: o,
            onElementResize: h,
            onElementResizeEnd: d,
            orientation: n_.R.HORIZONTAL_LEFT,
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
        className: nR.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: nR.Di, onPointerDown: g }),
            (0, a.jsx)("div", { ref: o, className: nR.kL, style: { width: m }, children: s }),
        ],
    });
}
var nM = n(145615);
let nO = [6, 8, 10, 12],
    nL = {
        home: { blob: 1, twink: 1, alpha: 0.7 },
        conversation: { blob: 1, twink: 1, alpha: 0.7 },
        thinking: { blob: 3, twink: 2.4, alpha: 0.7 },
    };
function nD(e, t, n) {
    let l = (0x165667b1 * e) ^ (0x27d4eb2f * t) ^ (0x7fffffff * n);
    return (l = Math.imul(l ^ (l >>> 13), 0x4bf19f61)), (((l ^= l >>> 16) >>> 0) % 1e6) / 1e6;
}
let n$ = i.memo(function (e) {
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
                h = nL.home.blob,
                m = nL.home.twink,
                f = nL.home.alpha,
                g = 0,
                p = nO[0],
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
            let N = new MutationObserver(y);
            N.observe(document.documentElement, { attributes: !0, attributeFilter: ["class"] });
            let w = -1;
            function E() {
                let e = Math.max(r, d);
                (e === d && w === p && c.length > 0) ||
                    ((d = e),
                    (w = p),
                    (c = (function (e, t) {
                        let n = [],
                            l = Math.ceil(e / t) + 1,
                            a = Math.ceil(600 / t) + 1;
                        for (let e = 0; e < a; e++)
                            for (let t = 0; t < l; t++)
                                n.push({
                                    i: t,
                                    j: e,
                                    threshold: 0.05 + 0.95 * nD(t, e, 1),
                                    phase: nD(t, e, 2) * Math.PI * 2,
                                    freq: 0.25 + 1.5 * nD(t, e, 3),
                                });
                        return n;
                    })(e, p)));
            }
            function A() {
                let t = e.getBoundingClientRect(),
                    n = t.width,
                    l = t.height;
                (0.5 > Math.abs(n - r) && 0.5 > Math.abs(l - o)) ||
                    ((r = n),
                    (o = l),
                    (e.width = Math.max(1, Math.floor(r * i))),
                    (e.height = Math.max(1, Math.floor(o * i))),
                    null != a && (a.setTransform(i, 0, 0, i, 0, 0), (a.imageSmoothingEnabled = !1)),
                    E(),
                    C(0.001 * performance.now()));
            }
            A();
            let S = new ResizeObserver(A);
            S.observe(t), window.addEventListener("resize", A);
            let I = performance.now(),
                T = 0;
            function C(e) {
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
                (T = requestAnimationFrame(function e(t) {
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
                                    x.length < 60 || b < 180 || g >= nO.length - 1))
                            )
                                return;
                            let t = 0;
                            for (let e = 0; e < x.length; e++) t += x[e];
                            let n = t / x.length;
                            n <= 22 ||
                                ((p = nO[++g]),
                                (b = 0),
                                (w = -1),
                                E(),
                                console.log(
                                    "[Vibegrations/glow-dither] perf degrade \u2192 spacing",
                                    p,
                                    "avg",
                                    n.toFixed(2),
                                    "ms",
                                ));
                        })(n);
                    let a = nL[s.current] ?? nL.home,
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
                    C(0.001 * t), (T = requestAnimationFrame(e));
                })),
                () => {
                    cancelAnimationFrame(T), S.disconnect(), N.disconnect(), window.removeEventListener("resize", A);
                }
            );
        }, []);
    let r = nM.P5;
    return (
        (r = "conversation" === t ? `${r} ${nM.wY}` : "home" === t ? `${r} ${nM.Qy}` : `${r} ${nM.fR}`),
        (0, a.jsx)("div", {
            ref: n,
            className: r,
            "aria-hidden": "true",
            children: (0, a.jsx)("canvas", { ref: l, className: nM.DX }),
        })
    );
});
var nG = n(408694);
function nF(e) {
    let { projectId: t } = e,
        n = (0, E.bG)([ea.Ay], () => (ea.Ay.isThinking(t) ? "thinking" : "conversation"), [t]);
    return (0, a.jsxs)("div", {
        className: nG.D1,
        "aria-hidden": !0,
        children: [
            (0, a.jsxs)("div", {
                className: nG.ys,
                "data-state": n,
                children: [(0, a.jsx)("div", { className: nG.Fc }), (0, a.jsx)("div", { className: nG.dW })],
            }),
            (0, a.jsx)(n$, { state: n }),
        ],
    });
}
var nH = n(333007),
    nB = n(439108);
function nU(e) {
    return {
        x: Math.min(e.startX, e.x),
        y: Math.min(e.startY, e.y),
        width: Math.abs(e.x - e.startX),
        height: Math.abs(e.y - e.startY),
    };
}
function nq(e) {
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
                    a = nU({ ...s, x: t.x, y: t.y });
                r(null), a.width < 8 && a.height < 8 ? l() : n(a);
            },
            [s, o, n, l],
        ),
        h = null == s ? null : nU(s);
    return (0, nH.createPortal)(
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("div", { className: nB.tB, role: "presentation", onPointerDown: l }),
                (0, a.jsx)("div", {
                    className: nB.aC,
                    style: { left: t.left, top: t.top, width: t.width, height: t.height },
                    role: "application",
                    "aria-label": O.intl.string(M.default["9MOgRI"]),
                    onPointerDown: c,
                    onPointerMove: d,
                    onPointerUp: u,
                    onPointerCancel: l,
                    children:
                        null == h
                            ? (0, a.jsx)("div", {
                                  className: nB.F7,
                                  children: (0, a.jsx)("div", {
                                      className: nB.aK,
                                      children: (0, a.jsx)(p.E, {
                                          variant: "text-sm/medium",
                                          color: "text-default",
                                          children: O.intl.string(M.default.ydkvBR),
                                      }),
                                  }),
                              })
                            : (0, a.jsx)("div", {
                                  className: nB.r1,
                                  style: { left: h.x, top: h.y, width: h.width, height: h.height },
                              }),
                }),
            ],
        }),
        document.body,
    );
}
var nV = n(314116),
    nz = n(977628);
function nW(e) {
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
                        children: (0, a.jsx)(p.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: O.intl.string(M.default["mSJn+K"]),
                        }),
                    })
                  : 0 === r.entries.length
                    ? (0, a.jsx)(p.E, {
                          variant: "text-md/normal",
                          color: "text-muted",
                          children: O.intl.string(M.default.TOmYPT),
                      })
                    : r.entries.map((e) =>
                          (0, a.jsxs)(
                              "button",
                              {
                                  className: nz.f_,
                                  type: "button",
                                  title: e.subject,
                                  onClick: () =>
                                      (0, nV.A)({
                                          title: O.intl.string(M.default.qOUOPE),
                                          subtitle: O.intl.string(M.default.k2JBj5),
                                          confirmText: O.intl.string(M.default["+sRK16"]),
                                          variant: "critical",
                                          onConfirm: () => {
                                              l(), s(e);
                                          },
                                      }),
                                  children: [
                                      (0, a.jsx)(p.E, {
                                          variant: "text-md/medium",
                                          className: nz.bc,
                                          children: e.subject.replace(/^Build: /, ""),
                                      }),
                                      (0, a.jsxs)(p.E, {
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
            className: nz.nd,
            "aria-label": O.intl.string(M.default.jAWwzi),
            children: [
                (0, a.jsxs)("div", {
                    className: nz.wx,
                    children: [
                        (0, a.jsx)(f.$, {
                            variant: "secondary",
                            size: "sm",
                            text: O.intl.string(O.t["13/7kX"]),
                            onClick: l,
                        }),
                        (0, a.jsx)(j.D, { variant: "heading-md/semibold", children: O.intl.string(M.default.jAWwzi) }),
                    ],
                }),
                (0, a.jsx)("div", { className: nz.p_, children: t }),
            ],
        })
    );
}
var nK = n(120426),
    nY = n(873727),
    nX = n(147248),
    nZ = n(418842),
    nQ = n(363195),
    nJ = n(885386),
    n0 = n(940107),
    n1 = n(171936);
function n2(e) {
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
        let n = (0, E.bG)([nQ.A], () => (0, nY.x4)(nQ.A.theme)),
            l = (0, E.bG)([nX.A], () => nX.A.gradientPreset),
            {
                reducedMotion: a,
                fontScale: s,
                highContrast: r,
                forcedColors: o,
                underlineLinks: c,
            } = (0, E.cf)([eb.Ay], () => ({
                reducedMotion: eb.Ay.useReducedMotion,
                fontScale: (0, nY.U0)(),
                highContrast: eb.Ay.isHighContrastModeEnabled,
                forcedColors: eb.Ay.useForcedColors,
                underlineLinks: eb.Ay.alwaysShowLinkDecorations,
            })),
            d = nJ.hH.useSetting(),
            u = (0, nZ.C)(),
            h = i.useRef(null),
            m = i.useRef(0),
            f = i.useCallback(() => {
                let l = (0, nK.F1)(e, t);
                if (null == l) return;
                let i = {
                    revision: ++m.current,
                    baseTheme: n,
                    customTheme: (0, nY.Lq)(),
                    uiDensity: u,
                    messageDisplayCompact: d,
                    fontScale: s,
                    reducedMotion: a,
                    highContrast: r,
                    forcedColors: o,
                    underlineLinks: c,
                };
                (0, n0.W)(l, "set-env", i, {
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
                    n.target === (0, nK.F1)(e, t) && f();
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
        if (null != t) return (0, n1.mn)(t, () => (0, nK.F1)(m, p));
    }, [t, m, p]);
    let b = i.useCallback(() => {
            let e = (0, nK.F1)(m, p),
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
                v(null), null != x && (0, nK.su)(x.iframe, e).then(x.resolve, x.reject);
            },
            [x],
        ),
        y = i.useCallback(() => {
            v(null), x?.resolve(null);
        }, [x]),
        k = s && null != n && l.type === I.U4.MAIN;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: r()(et.Mh, d),
                children: [o, (0, a.jsx)("div", { ref: f, className: et.fm, children: u })],
            }),
            h(k ? b : void 0),
            null != x ? (0, a.jsx)(nq, { targetRect: x.targetRect, onSelect: j, onCancel: y }) : null,
        ],
    });
}
function n6(e) {
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
        [N, w] = i.useState(0);
    i.useLayoutEffect(() => {
        if (s.type === I.U4.MAIN) return (0, u.HV)(n), () => (0, u.HV)(null);
    }, [n, s.type]),
        i.useEffect(() => {
            null != t && (0, h.Hc)(t);
        }, [t]),
        i.useLayoutEffect(() => {
            let e = k.current;
            if (null == e) return;
            function t() {
                null != e && w(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return n.observe(e), () => n.disconnect();
        }, []),
        i.useEffect(() => () => (0, u.Zq)(0), []);
    let E = Math.max(360, N - 320),
        A = null != y ? y.open : m,
        S = m || s.type === I.U4.MAIN;
    return (0, a.jsx)("div", {
        ref: k,
        className: et.LB,
        children: (0, a.jsx)(n2, {
            projectId: t,
            applicationId: n,
            surface: s,
            previewReady: b,
            header: c,
            mainClassName: null == c ? void 0 : r()(et.ez, { [et.zt]: A }),
            content: (0, a.jsx)(X, {
                applicationId: n,
                previewApplicationId: l,
                surface: s,
                previewReady: b,
                previewGate: j,
            }),
            sidebar: (e) =>
                null != y
                    ? (0, a.jsx)(nP, {
                          open: y.open,
                          maxWidth: E,
                          onWidthChange: u.Zq,
                          children: y.open
                              ? (0, a.jsx)(en, { channel: y.channel, guild: y.guild, onClose: y.onClose })
                              : null,
                      })
                    : null != t && S
                      ? (0, a.jsx)(nP, {
                            open: m,
                            maxWidth: E,
                            onWidthChange: u.Zq,
                            children: (0, a.jsx)("div", {
                                className: et.cO,
                                children: g
                                    ? (0, a.jsx)(
                                          nW,
                                          { projectId: t, onBack: p ?? (() => {}), onRestore: x ?? (() => {}) },
                                          t,
                                      )
                                    : (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              (0, a.jsx)(nF, { projectId: t }),
                                              (0, a.jsx)(d.Ay, {
                                                  "aria-label": O.intl.string(O.t["/VQax8"]),
                                                  toolbar:
                                                      null == f
                                                          ? null
                                                          : (0, a.jsx)(d.Ay.Icon, {
                                                                icon: o.P,
                                                                tooltip: O.intl.string(M.default.YdgE0j),
                                                                onClick: f,
                                                            }),
                                                  children: (0, a.jsx)(d.Ay.Title, {
                                                      children: O.intl.string(O.t["/VQax8"]),
                                                  }),
                                              }),
                                              (0, a.jsx)("div", {
                                                  className: et.cb,
                                                  children: (0, a.jsx)(
                                                      nA,
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
