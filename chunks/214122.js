n.d(t, { A: () => n1 });
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
    p = n(323384),
    g = n(834730),
    x = n(627363),
    v = n(207371),
    b = n(580954),
    j = n(297264),
    y = n(625180),
    k = n(91242),
    w = n(812901),
    N = n(317608),
    E = n(17928),
    A = n(956518),
    S = n(869146),
    _ = n(165610),
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
                    (0, a.jsx)(g.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
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
                        l = i.useMemo(() => (0, _.VA)(t, n), [t, n]),
                        a = i.useMemo(() => n, [l]),
                        s = (0, E.bG)([k.A], () => k.A.getFrame(l), [l]),
                        r = (0, E.bG)(
                            [S.A, k.A],
                            () => S.A.getWindowOpen(I.MLl.ACTIVITY_POPOUT) && k.A.getMainFrame()?.id === l,
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
                        lifecycle: (0, _.x1)(s)
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
        r = (0, _.VA)(t, n);
    switch (
        (i.useEffect(() => {
            let e;
            return (
                null == (e = k.A.getFrame(r)) ||
                    k.A.getMainFrame()?.id !== r ||
                    S.A.getWindowOpen(I.MLl.ACTIVITY_POPOUT) ||
                    (e.intent === _.sV.MAIN ? y.A.resetFrameLayoutModes(r) : y.A.clearMainFrameSlot()),
                () => {
                    let e;
                    null != (e = k.A.getFrame(r)) &&
                        ((0, _.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        T.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === _.sV.INLINE && y.A.promoteFrame(r),
                              y.A.updateFrameLayoutMode({ frameId: r, layoutMode: _.y0.PIP }))
                            : e.intent === _.sV.MAIN && (0, b.A)().leaveFrame(r));
                }
            );
        }, [r]),
        s)
    ) {
        case C.Launched:
            return (0, a.jsx)(N.A, { frameId: l.id, level: w.A.WithinAppContent, className: L.Z7 });
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
                    (0, a.jsx)(p.k, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
                    (0, a.jsx)(g.E, {
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
                    (0, a.jsx)(g.E, {
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
    H = n(334738),
    G = n(373204),
    F = n(355622),
    B = n(734057),
    q = n(531685),
    U = n(365971),
    V = n(362417);
function z(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: V.f,
        children: [
            (0, a.jsx)(p.k, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(g.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function W() {
    return (0, a.jsx)("div", { className: V.f, children: (0, a.jsx)(m.y, {}) });
}
function Y(e) {
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
            null != t && $.A.preload(I.ME, t);
        }, [t]),
        (n = (0, E.bG)([q.A], () => q.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, U.Xg)();
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
                  children: (0, a.jsx)(G.A, { channel: c, guild: null, chatInputType: F.oU.SIDEBAR }, c.id),
              });
}
var K = n(976102);
function X(e) {
    let { applicationId: t, previewApplicationId: n, surface: l, previewReady: s, previewGate: r } = e,
        o = (0, c.A)(t, l),
        { data: d, isLoading: u } = (0, x.YY)(t ?? void 0);
    return (i.useEffect(() => {
        r?.type === "permissions" && null != o && (0, b.A)().leaveFrame(o.id);
    }, [o, r?.type]),
    r?.type === "checking")
        ? (0, a.jsx)("div", { className: K.q, children: (0, a.jsx)(m.y, {}) })
        : r?.type === "permissions"
          ? (0, a.jsx)("div", {
                className: K.q,
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
                  ? (0, a.jsx)("div", { className: K.q, children: (0, a.jsx)(m.y, {}) })
                  : null == d || (0, v.x)(d) || null == n
                    ? (0, a.jsx)(D, { applicationId: t, surface: l })
                    : (0, a.jsx)(Y, { previewApplicationId: n })
            : (0, a.jsxs)("div", {
                  className: K.q,
                  children: [
                      (0, a.jsx)(p.k, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
                      (0, a.jsx)(g.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: K.t,
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
                children: (0, a.jsx)(G.A, { channel: t, guild: n, chatInputType: F.oU.SIDEBAR }, t.id),
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
    ep = n(29080),
    eg = n(783977),
    ex = n(559647),
    ev = n(285796),
    eb = n(775602),
    ej = n(673724),
    ey = n(514042),
    ek = n(939249),
    ew = n(298668);
function eN(e) {
    return r()(ew._B, { [ew.ND]: e });
}
function eE(e) {
    let { name: t, thumbSrc: n = null, compact: l = !1, subText: i, children: s, onThumbError: r } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            null != n
                ? (0, a.jsx)("img", { src: n, alt: "", className: ew.gJ, onError: r })
                : (0, a.jsx)(ey.FileIcon, { size: l ? "xs" : "sm", color: "currentColor" }),
            (0, a.jsxs)("div", {
                className: ew.Wd,
                children: [
                    (0, a.jsx)(g.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: ew.Rr,
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
    return (0, a.jsx)("div", { className: eN(e.compact ?? !1), children: eE(e) });
}
function eS(e) {
    let { name: t, thumbSrc: n, ariaLabel: l, onClick: i, onThumbError: s } = e;
    return (0, a.jsx)(ek.D, {
        className: r()(eN(!0), ew.w8),
        onClick: i,
        "aria-label": l,
        children: eE({ name: t, thumbSrc: n, compact: !0, onThumbError: s }),
    });
}
var e_ = n(311656),
    eI = n(789438);
let eC = ej.Is;
function eT(e) {
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
    let d = "exit" === s ? eI.t0 : "enterStart" === s ? eI.Rj : "";
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("span", { className: `${eI.xM} ${eI.nT} ${d}`, children: n }),
            (0, a.jsx)(ei.e, { shortcut: "tab", className: `${eI.xT} ${eI.nT} ${d}`, keyClassName: eI.IS }),
        ],
    });
}
let eR = 0;
function eP(e) {
    let {
            canSend: t,
            stopped: n,
            running: l,
            onSend: s,
            onInterrupt: r,
            onUploadFile: o,
            onDeleteFile: c,
            onApprove: d,
            onRegionCapture: u,
            onImport: h,
            suggestion: f,
            modelSettings: p,
            onModelSettingsChange: g,
        } = e,
        [x, v] = i.useState(""),
        b = (0, E.bG)([eb.Ay], () => eb.Ay.isSubmitButtonEnabled),
        [j, y] = i.useState([]),
        [k, w] = i.useState(!1),
        [N, A] = i.useState(!1),
        [S, _] = i.useState(!1);
    i.useEffect(() => {
        l || _(!1);
    }, [l]);
    let I = i.useRef(null),
        C = i.useRef([]),
        T = i.useRef(new Set()),
        R = i.useRef(c);
    R.current = c;
    let P = i.useCallback((e) => {
            (C.current = e), y(e);
        }, []),
        L = i.useCallback((e) => {
            R.current(e.id).catch((e) => {
                console.error("[vibegrations] attachment cleanup failed", e);
            });
        }, []);
    i.useEffect(() => {
        let e = T.current;
        return () => {
            for (let t of C.current)
                e.add(t.localId), null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && L(t.ref);
        };
    }, [L]);
    let D = i.useCallback(
            (e, t) => {
                if (T.current.has(e)) return;
                let n = C.current;
                n.some((t) => t.localId === e) && P(n.map((n) => (n.localId === e ? { ...n, ...t } : n)));
            },
            [P],
        ),
        $ = i.useCallback(
            (e) => {
                if (0 === e.length) return;
                let t = [...C.current],
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
                for (let { file: e, localId: l } of (P(t), n))
                    o(e).then(
                        (e) => {
                            T.current.has(l) ? L(e) : D(l, { status: "ready", ref: e });
                        },
                        (e) => {
                            T.current.has(l) ||
                                (console.error("[vibegrations] attachment upload failed", e),
                                D(l, { status: "error", errorText: O.intl.string(M.default.GwEHvn) }));
                        },
                    );
            },
            [L, o, D, P],
        ),
        H = i.useCallback(async () => {
            if (null != u && !N) {
                A(!0);
                try {
                    let e = await u();
                    null != e && $([e]);
                } catch (e) {
                    console.error("[vibegrations] region capture failed", e),
                        P([
                            ...C.current,
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
                    A(!1);
                }
            }
        }, [u, N, $, P]),
        G = i.useCallback(
            (e) => {
                let t = C.current,
                    n = t.find((t) => t.localId === e);
                T.current.add(e),
                    n?.previewUrl != null && URL.revokeObjectURL(n.previewUrl),
                    n?.ref != null && L(n.ref),
                    P(t.filter((t) => t.localId !== e));
            },
            [L, P],
        ),
        F = j.every((e) => "ready" === e.status),
        B = "" !== x.trim() || j.length > 0,
        q = t && B && F,
        U = i.useCallback(() => {
            if (!q) return;
            let e = C.current.filter((e) => null != e.ref).map((e) => e.ref);
            for (let t of (s(x, e.length > 0 ? e : void 0), C.current))
                null != t.previewUrl && URL.revokeObjectURL(t.previewUrl);
            v(""), P([]);
        }, [q, x, s, P]),
        V = i.useCallback(
            (e) => {
                e.preventDefault(), U();
            },
            [U],
        ),
        z = i.useCallback(() => {
            null == r || S || (_(!0), r());
        }, [r, S]),
        W = i.useCallback(
            (e) => {
                if ("Escape" === e.key && l && null != r && !S) {
                    e.preventDefault(), e.stopPropagation(), z();
                    return;
                }
                if ("Tab" === e.key && !e.shiftKey && null != f && "" === x) {
                    e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), v(f);
                    return;
                }
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != d && (e.preventDefault(), d());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), U());
            },
            [U, d, l, r, S, z, f, x],
        ),
        Y = i.useCallback(
            (e) => {
                if (!t) return;
                let n = Array.from(e.clipboardData.files);
                0 !== n.length && (e.preventDefault(), $(n));
            },
            [t, $],
        ),
        K = i.useCallback(
            (e) => {
                e.preventDefault(), w(!1), t && $(Array.from(e.dataTransfer.files));
            },
            [t, $],
        ),
        X = i.useCallback((e) => {
            e.dataTransfer.types.includes("Files") && (e.preventDefault(), w(!0));
        }, []),
        Z = i.useCallback(
            (e) => {
                $(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = "");
            },
            [$],
        ),
        Q = i.useRef(null),
        J = i.useRef(null),
        [ee, et] = i.useState(0),
        [en, el] = i.useState(!1);
    i.useEffect(() => {
        if (0 === x.length) return void el(!1);
        let e = Q.current?.querySelector("textarea");
        if (null != e) {
            let t = eO(e);
            null != t && et(t);
        }
        el(!0);
        let t = setTimeout(() => el(!1), eM);
        return () => clearTimeout(t);
    }, [x]);
    let ea = i.useMemo(() => ({ "--custom-glow-x": `${ee}px` }), [ee]),
        ei = en ? ` ${eI.EB}` : "",
        ev = null != f && "" === x;
    return (0, a.jsxs)("form", {
        onSubmit: V,
        onDrop: K,
        onDragOver: X,
        onDragLeave: () => w(!1),
        className: k ? `${eI.DA} ${eI.pV}` : eI.DA,
        children: [
            j.length > 0
                ? (0, a.jsx)("div", {
                      className: eI.lN,
                      children: j.map((e) => (0, a.jsx)(eL, { draft: e, onRemove: G }, e.localId)),
                  })
                : null,
            (0, a.jsxs)("div", {
                className: eI.VA,
                ref: Q,
                children: [
                    (0, a.jsx)("span", { className: `${eI.wg} ${eI.LP}${ei}`, style: ea, "aria-hidden": !0 }),
                    (0, a.jsx)("span", { className: `${eI.wg} ${eI.L3}${ei}`, style: ea, "aria-hidden": !0 }),
                    (0, a.jsx)("input", {
                        ref: I,
                        type: "file",
                        multiple: !0,
                        onChange: Z,
                        className: eI.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    (0, a.jsx)(es.Y, {
                        targetElementRef: J,
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
                                            action: () => I.current?.click(),
                                        }),
                                        null != h
                                            ? (0, a.jsx)(eo.Dr, {
                                                  id: "import-project",
                                                  label: O.intl.string(M.default.edKajy),
                                                  iconLeft: ed.q,
                                                  leadingAccessory: { type: "icon", icon: ed.q },
                                                  action: h,
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
                                ref: J,
                                type: "button",
                                className: `${eI.Y0} ${eI.nu}`,
                                disabled: !t,
                                "aria-label": O.intl.string(O.t.d56gCa),
                                "aria-haspopup": "menu",
                                "aria-expanded": l,
                                children: (0, a.jsx)(eu.PlusLargeIcon, {
                                    size: "refresh_sm",
                                    color: "currentColor",
                                    className: eI.Qu,
                                }),
                            });
                        },
                    }),
                    ev
                        ? (0, a.jsx)("div", {
                              className: eI.ar,
                              "aria-hidden": "true",
                              children: (0, a.jsx)(eT, { text: f }),
                          })
                        : null,
                    (0, a.jsx)(eh.y, {
                        value: x,
                        onChange: (e) => v(e.currentTarget.value),
                        onKeyDown: W,
                        onPaste: Y,
                        placeholder: n
                            ? O.intl.string(M.default.JeM47J)
                            : t
                              ? ev
                                  ? ""
                                  : O.intl.string(l ? M.default["67PpcP"] : M.default.ahRdoJ)
                              : O.intl.string(M.default.nm4w9P),
                        disabled: !t,
                        "aria-label": O.intl.string(M.default.OPr66w),
                        rows: 1,
                        className: eI.jp,
                    }),
                    (0, a.jsxs)("div", {
                        className: eI.Sz,
                        children: [
                            (0, a.jsx)(em.m, {
                                text: O.intl.string(M.default.B5gWPk),
                                ariaHidden: !0,
                                children: (0, a.jsx)("button", {
                                    type: "button",
                                    className: eI.Y0,
                                    disabled: null == u || !t || N,
                                    onClick: H,
                                    "aria-label": O.intl.string(M.default.B5gWPk),
                                    children: N
                                        ? (0, a.jsx)(m.y, { type: m.t.SPINNING_CIRCLE_SIMPLE, className: eI.Rk })
                                        : (0, a.jsx)(ef.K, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                }),
                            }),
                            l && null != r
                                ? (0, a.jsx)(em.m, {
                                      text: O.intl.string(M.default.KdgI4k),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)("button", {
                                          type: "button",
                                          className: eI.AW,
                                          disabled: S,
                                          onClick: z,
                                          "aria-label": O.intl.string(M.default.KdgI4k),
                                          children: (0, a.jsx)(ep.w, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : null != p && null != g
                                  ? (0, a.jsx)(em.m, {
                                        text: O.intl.string(M.default.COVYeS),
                                        ariaHidden: !0,
                                        children: (0, a.jsx)(e_.A, {
                                            settings: p.settings,
                                            choices: p.choices,
                                            disabled: !t,
                                            onChange: g,
                                            className: `${eI.Y0} ${eI.Il}`,
                                            icon: (0, a.jsx)(eg.R, {
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
                    b
                        ? (0, a.jsxs)("div", {
                              className: eI.fF,
                              children: [
                                  (0, a.jsx)("div", { className: eI.MT }),
                                  (0, a.jsx)("button", {
                                      type: "submit",
                                      className: eI.rt,
                                      disabled: !q,
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
                ? (0, a.jsx)(g.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(m.y, { type: m.t.SPINNING_CIRCLE_SIMPLE, className: eI.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: eI.o1,
                onClick: () => n(t.localId),
                "aria-label": O.intl.string(M.default["3HWvgk"]),
                children: (0, a.jsx)(ev.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
eO.canvas = null;
var eD = n(287809);
let e$ = new Set([
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
let eG = new Set([
    "assembling",
    "installing_deps",
    "building",
    "bundling",
    "committing",
    "built",
    "build_error",
    "healthchecking",
    "preview_connecting",
    "healthcheck_passed",
    "healthcheck_failed",
    "deploying",
    "preview_ready",
    "awaiting_auth",
]);
function eF(e) {
    return "writing_command" === e.kind && (null == e.friendly || "" === e.friendly);
}
function eB(e) {
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
        if (eF(i) && null != r) {
            r.technical.push(...s);
            continue;
        }
        if (eF(i) && null == r && null != t) {
            n.push({ step: i, summary: t, technical: s.filter((e) => e !== t), screenshots: [] });
            continue;
        }
        let o = eU(i),
            c = s.filter((e) => e !== o);
        if (null != r && r.summary === o) r.technical.push(...c), (e = r);
        else if (n.length > 0 && eG.has(i.kind) && eG.has(n[n.length - 1].step.kind)) {
            let t = n[n.length - 1];
            t.technical.push(t.summary, ...c), (t.summary = o), (t.step = i), (e = t);
        } else (e = { step: i, summary: o, technical: c, screenshots: [] }), n.push(e);
        "healthcheck_passed" === i.kind && (e.screenshots.push(...l.splice(0)), (a = e));
    }
    return n;
}
function eq(e) {
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
        f = l,
        p = !1;
    function g() {
        null != u && (u.groups = eB(h, { inheritedSummary: t })), (u = null), (h = []);
    }
    function x() {
        g(), (m = null), (d = null), (p = !1);
    }
    function v(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return null == d && ((d = { type: "activity", key: `activity-${e}`, blocks: [] }), (p = t), a.push(d)), d;
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
                let a = null != e.task_group_label && "" !== e.task_group_label ? e.task_group_label : void 0;
                null != m &&
                    m.groupId !== e.task_group_id &&
                    ((m = null), null != a && null != d && null != d.label && d.label !== a && x()),
                    p && x();
                let c = v(t);
                null == c.label && null != a && (c.label = a), g(), (o = null);
                let u = {
                    taskId: n,
                    title: null != e.task_title && "" !== e.task_title ? e.task_title : O.intl.string(M.default.MdXWEK),
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
            if (e$.has(l.kind)) continue;
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
                    : (x(), (o = null), (c = { type: "todos", key: `todos-${n}`, todos: e }), a.push(c)));
            continue;
        }
        if (e$.has(l.kind)) continue;
        let e = eF(l);
        !e && p && x();
        let b = v(n, e && null != f);
        (o = null),
            (m = null),
            null == u && ((u = { type: "rows", key: `rows-${n}`, groups: [] }), (t = f), b.blocks.push(u)),
            h.push(l),
            e || (f = eU(l));
    }
    for (let e of (g(), s)) {
        e.groups = eB(e.rawSteps);
        let t = e.groups[e.groups.length - 1]?.summary;
        null != t && (e.latestActivity = t), !n && eH(e.state) && (e.state = "incomplete");
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
                    (n.tasks.every((e) => e.groups.length > 0 && e.groups.every((e) => e.summary === t)) &&
                        delete e.label);
            })(e);
    return { items: a, tasks: s };
}
function eU(e) {
    switch (e.kind) {
        case "thinking":
            return O.intl.string(M.default.K7TkAL);
        case "writing_command":
            return e.friendly ?? O.intl.string(M.default.nv6pUM);
        case "assembling":
            return O.intl.string(M.default["9G3ZmA"]);
        case "installing_deps":
            return O.intl.string(M.default.VZuRug);
        case "building":
            return O.intl.string(M.default["s+ylXP"]);
        case "bundling":
            return O.intl.string(M.default.rEQlMx);
        case "committing":
            return O.intl.string(M.default.Yvyw1H);
        case "built":
            return O.intl.string(M.default.hOcVAj);
        case "build_error":
            return O.intl.string(M.default["6L9Vwt"]);
        case "healthchecking":
        case "preview_connecting":
            return O.intl.string(M.default.sz8yAj);
        case "awaiting_auth":
            return O.intl.string(M.default["orD+xo"]);
        case "healthcheck_passed":
            return O.intl.string(M.default["x+sqTG"]);
        case "healthcheck_failed":
            return O.intl.string(M.default.FUWbq1);
        case "deploying":
            return O.intl.string(M.default.wcXX8Z);
        case "preview_ready":
            return O.intl.string(M.default["78YNh7"]);
        case "error":
        case "terminal_error":
            return O.intl.string(M.default.j3hBoA);
        default:
            return O.intl.string(M.default.nv6pUM);
    }
}
n(134528), n(947204);
var eV = n(443865),
    ez = n(46054),
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
        j = h ? eK.a : eX._,
        y = null != c,
        k = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("span", { className: eW.hd, children: t }),
                (0, a.jsx)(g.E, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "currentColor",
                    className: r()(eW.qo, { [eW._q]: "exit" === b, [eW.GD]: "enter" === b }),
                    children: v,
                }),
                y ? (0, a.jsx)(j, { size: "xs", color: "currentColor", className: eW.nD }) : null,
            ],
        }),
        w = (0, a.jsxs)(a.Fragment, {
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
                ? (0, a.jsx)(ek.D, {
                      tag: "div",
                      className: r()(eW.ep, eW.EK),
                      "aria-expanded": h,
                      "aria-controls": p,
                      "aria-label": O.intl.formatToPlainString(M.default.s1wx5H, { activity: v }),
                      onClick: x,
                      children: w,
                  })
                : (0, a.jsx)("div", { className: eW.ep, children: w }),
            (0, a.jsx)("div", { id: p, hidden: !h, className: eW.BA, children: c }),
        ],
    });
}
let eJ = /^(.*?)\s*\((\+\d+)?[\s,]*([\u2212-]\d+)?\)$/,
    e0 = /^(.*?)\s*\((\d+ lines|\d+ matches|no matches)\)$/;
function e1(e) {
    let { text: t } = e,
        n = eJ.exec(t),
        l = n?.[2],
        i = n?.[3];
    if (null != n && (null != l || null != i))
        return (0, a.jsxs)(a.Fragment, {
            children: [
                n[1],
                null == l ? null : (0, a.jsxs)("span", { className: eW.MM, children: [" ", l] }),
                null == i ? null : (0, a.jsxs)("span", { className: eW.ie, children: [" ", i] }),
            ],
        });
    let s = e0.exec(t);
    if (null == s) return t;
    let r = "no matches" === s[2];
    return (0, a.jsxs)(a.Fragment, {
        children: [s[1], (0, a.jsxs)("span", { className: r ? eW.Hi : eW.qZ, children: [" ", s[2]] })],
    });
}
var e2 = n(256905),
    e6 = n(229775);
function e3(e) {
    var t;
    let n,
        { projectId: l, group: s, presentation: o = "row", active: c = !1 } = e,
        [d, u] = i.useState(!1),
        h = i.useId(),
        m = i.useCallback(() => u((e) => !e), []),
        f =
            ((t = s.step.kind),
            (n =
                "error" === t || "terminal_error" === t || "build_error" === t
                    ? "text-feedback-critical"
                    : "text-default"),
            "detail" === o && "text-default" === n ? "text-muted" : n),
        p = "text-muted" === f,
        x = c && p ? "none" : d && p ? "currentColor" : f,
        v = r()(eW.iq, { [e6.Hz]: c && p }),
        b = "detail" === o ? "text-md/normal" : "text-sm/normal",
        j = "detail" === o ? "text-sm/normal" : "text-xs/normal",
        y = null != l ? s.screenshots : [];
    if (0 === s.technical.length && 0 === y.length)
        return (0, a.jsx)("li", {
            "data-step-kind": s.step.kind,
            className: eW.Dx,
            children: (0, a.jsx)(g.E, {
                tag: "div",
                variant: b,
                color: x,
                selectable: !0,
                className: v,
                children: (0, a.jsx)(e1, { text: s.summary }),
            }),
        });
    let k = d ? eK.a : eX._;
    return (0, a.jsxs)("li", {
        "data-step-kind": s.step.kind,
        className: eW.Dx,
        children: [
            (0, a.jsxs)(ek.D, {
                tag: "div",
                className: eW.kG,
                "aria-expanded": d,
                "aria-controls": h,
                "aria-label": O.intl.formatToPlainString(M.default.z4KWsN, { step: s.summary }),
                onClick: m,
                children: [
                    (0, a.jsx)(g.E, {
                        tag: "span",
                        variant: b,
                        color: x,
                        className: v,
                        children: (0, a.jsx)(e1, { text: s.summary }),
                    }),
                    (0, a.jsx)(k, { size: "xs", color: "currentColor", className: eW.Ue }),
                ],
            }),
            (0, a.jsxs)("div", {
                id: h,
                hidden: !d,
                className: eW.yJ,
                children: [
                    s.technical.map((e, t) =>
                        (0, a.jsx)(
                            g.E,
                            {
                                tag: "div",
                                variant: j,
                                color: c && p ? "none" : "text-muted",
                                selectable: !0,
                                className: r()({ [e6.Hz]: c && p }),
                                children: (0, a.jsx)(e1, { text: e }),
                            },
                            t,
                        ),
                    ),
                    null != l && y.length > 0
                        ? (0, a.jsx)("div", {
                              className: eW.y8,
                              children: y.map((e) => (0, a.jsx)(e4, { projectId: l, screenshotId: e }, e)),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function e7() {}
function e4(e) {
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
                (0, e2.R)({
                    items: [{ type: "IMAGE", url: e, alt: c }],
                    startingIndex: 0,
                    shouldHideMediaOptions: !0,
                    location: "VibegrationsChat",
                });
            }, e7);
        }, [t, n, c]);
    return r ? null : (0, a.jsx)(eS, { name: c, thumbSrc: l, ariaLabel: c, onClick: d, onThumbError: () => o(!0) });
}
function e5(e) {
    let t = Math.max(1, Math.round(e / 1e3));
    if (t < 60) return O.intl.formatToPlainString(M.default["49T8W0"], { count: t });
    let n = Math.round(t / 60);
    return n < 60
        ? O.intl.formatToPlainString(M.default.NkZO2t, { count: n })
        : O.intl.formatToPlainString(M.default["2qYUUZ"], { hours: Math.floor(n / 60), minutes: n % 60 });
}
function e8(e) {
    let { group: t, live: n } = e;
    return 0 === t.technical.length
        ? null
        : (0, a.jsx)("li", {
              "data-step-kind": t.step.kind,
              className: eW.Dx,
              children: t.technical.map((e, t) =>
                  (0, a.jsx)(
                      g.E,
                      {
                          tag: "div",
                          variant: "text-md/normal",
                          color: n ? "none" : "text-muted",
                          selectable: !0,
                          className: r()(eW.iq, { [e6.Hz]: n }),
                          children: (0, a.jsx)(e1, { text: e }),
                      },
                      t,
                  ),
              ),
          });
}
function e9(e) {
    let { projectId: t, item: n, live: l, durationMs: i, connectsDown: s = !1 } = e,
        r = n.blocks.flatMap((e) => ("rows" === e.type ? e.groups : [])),
        o = r.at(-1),
        c =
            null != i
                ? e5(i)
                : (o?.summary ?? (null != n.label && "" !== n.label ? n.label : O.intl.string(M.default.nv6pUM))),
        d = r.some((e) => e !== o || e.technical.length > 0 || e.screenshots.length > 0);
    return (0, a.jsx)(eQ, {
        glyph: (0, a.jsx)(eY, {}),
        line: c,
        live: l,
        settled: null != i,
        connectsDown: s,
        detail: d
            ? (0, a.jsx)("ol", {
                  className: eW.dO,
                  children: r.map((e, n) =>
                      e === o && 0 === e.screenshots.length
                          ? (0, a.jsx)(e8, { group: e, live: l }, n)
                          : (0, a.jsx)(e3, { projectId: t, group: e, presentation: "detail", active: l && e === o }, n),
                  ),
              })
            : void 0,
    });
}
var te = n(424110);
function tt(e) {
    let { option: t, disabled: n, onPick: l } = e,
        s = i.useId(),
        o = !0 === t.recommended,
        c = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(ek.D, {
        className: r()(te.uK, { [te.ue]: n }),
        onClick: n ? void 0 : () => l(t),
        "aria-label": O.intl.formatToPlainString(o ? M.default.aL1BKQ : M.default.k7lEgj, { answer: t.label }),
        "aria-describedby": c ? s : void 0,
        "aria-disabled": n,
        "data-vibegrations-clarification-option": t.id,
        "data-recommended": o ? "true" : void 0,
        children: [
            (0, a.jsxs)("span", {
                className: te.l8,
                children: [
                    (0, a.jsx)(g.E, {
                        tag: "span",
                        variant: "text-sm/semibold",
                        color: "none",
                        className: te.ed,
                        children: t.label,
                    }),
                    o
                        ? (0, a.jsx)(g.E, {
                              tag: "span",
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              className: te.rM,
                              children: O.intl.string(M.default.OXRWyV),
                          })
                        : null,
                ],
            }),
            c
                ? (0, a.jsx)(g.E, {
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
function tn(e) {
    let { clarification: t, onSubmit: n } = e,
        [l, s] = i.useState({}),
        [o, c] = i.useState({}),
        [d, u] = i.useState(0),
        h = null == n,
        m = t.questions.length,
        f = Math.min(d, m - 1),
        p = t.questions[f],
        x = i.useCallback(
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
        v = i.useCallback(
            (e) => {
                if (h) return;
                let n = { ...l, [p.id]: e };
                s(n);
                let a = (function (e, t, n) {
                    let { questions: l } = e;
                    for (let e = 1; e <= l.length; e++) {
                        let a = (n + e) % l.length,
                            i = t[l[a].id];
                        if (null == i || "" === i.text.trim()) return a;
                    }
                    return null;
                })(t, n, f);
                null == a ? x(n) : u(a);
            },
            [l, t, h, f, p.id, x],
        ),
        b = i.useCallback(() => {
            if (h || 0 === f) return;
            let e = t.questions[f - 1];
            s((t) => {
                let n = { ...t };
                return delete n[e.id], n;
            }),
                c((t) => {
                    let n = { ...t };
                    return delete n[e.id], n;
                }),
                u(f - 1);
        }, [t, h, f]),
        j = f > 0 && !h,
        y = o[p.id] ?? "",
        k = i.useCallback(() => {
            let e = y.trim();
            "" !== e && v({ kind: "custom", text: e });
        }, [y, v]);
    return (0, a.jsxs)("section", {
        className: te.$O,
        "data-vibegrations-clarification": t.id,
        "data-state": h ? "inert" : "open",
        "data-step": f,
        children: [
            m > 1
                ? (0, a.jsxs)("div", {
                      className: te.qB,
                      children: [
                          (0, a.jsx)(g.E, {
                              tag: "span",
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              "aria-live": "polite",
                              className: te.Dd,
                              "data-vibegrations-clarification-progress": !0,
                              children: O.intl.formatToPlainString(M.default["7bypa+"], { index: f + 1, total: m }),
                          }),
                          (0, a.jsx)(ek.D, {
                              className: r()(te.aX, { [te.uh]: !j }),
                              onClick: j ? b : void 0,
                              tabIndex: j ? 0 : -1,
                              "aria-hidden": !j,
                              "aria-disabled": h,
                              "aria-label": O.intl.string(M.default.KYpgvZ),
                              "data-vibegrations-clarification-back": !0,
                              "data-hidden": j ? void 0 : "true",
                              children: (0, a.jsx)(g.E, {
                                  tag: "span",
                                  variant: "text-xs/semibold",
                                  color: "none",
                                  children: O.intl.string(M.default.yKdgqw),
                              }),
                          }),
                      ],
                  })
                : null,
            (0, a.jsx)(g.E, {
                tag: "div",
                id: `${p.id}-label`,
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: p.question,
            }),
            (0, a.jsx)("div", {
                className: te.fF,
                role: "group",
                "aria-labelledby": `${p.id}-label`,
                children: p.options.map((e) =>
                    (0, a.jsx)(
                        tt,
                        { option: e, disabled: h, onPick: (e) => v({ kind: "option", optionId: e.id, text: e.label }) },
                        e.id,
                    ),
                ),
            }),
            (0, a.jsx)("div", {
                className: te.F,
                children: (0, a.jsx)(eh.y, {
                    value: y,
                    onChange: (e) => {
                        let { value: t } = e.currentTarget;
                        c((e) => ({ ...e, [p.id]: t }));
                    },
                    onKeyDown: (e) => {
                        "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), k());
                    },
                    placeholder: O.intl.string(M.default.qifsdL),
                    "aria-label": O.intl.formatToPlainString(M.default.XHESTL, { question: p.question }),
                    disabled: h,
                    rows: 1,
                    className: te.Pu,
                    "data-vibegrations-clarification-other": p.id,
                }),
            }),
        ],
    });
}
var tl = n(478016),
    ta = n(113757);
function ti(e) {
    let { idea: t, selected: n, onPick: l } = e,
        s = i.useId(),
        o = null == l;
    return (0, a.jsxs)(ek.D, {
        className: r()(ta.nM, { [ta.f1]: o, [ta.CZ]: n }),
        onClick: o ? void 0 : () => l(t),
        "aria-label": O.intl.formatToPlainString(M.default.pztRGi, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : s,
        "aria-disabled": o,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: ta.jo,
                children: [
                    n
                        ? (0, a.jsx)(tl.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: ta.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(g.E, {
                        tag: "div",
                        variant: "text-md/normal",
                        color: "none",
                        className: ta.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, a.jsx)(g.E, {
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
    return (0, a.jsxs)("section", {
        className: ta.kR,
        "data-vibegrations-idea-cards": !0,
        children: [
            (0, a.jsx)("div", {
                className: ta.wx,
                children: (0, a.jsx)(g.E, {
                    tag: "span",
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: O.intl.string(M.default.DAvYsi),
                }),
            }),
            t.map((e) =>
                (0, a.jsx)(
                    ti,
                    { idea: e, selected: s.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                    e.id,
                ),
            ),
        ],
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
    return null != e.id && ej.Wb.has(e.content_type);
}
function td(e) {
    let { name: t, unavailable: n = !1 } = e,
        l = n ? O.intl.formatToPlainString(M.default.OBr7WW, { name: t }) : t;
    return (0, a.jsx)(eA, { name: l, compact: !0 });
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
        : (0, a.jsx)(eS, {
              name: l,
              thumbSrc: null,
              ariaLabel: O.intl.formatToPlainString(M.default.gV5YcR, { name: l }),
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
                  (0, e2.R)({
                      items: e.filter((e) => "string" != typeof e),
                      startingIndex: e.slice(0, l).filter((e) => "string" != typeof e).length,
                      shouldHideMediaOptions: !0,
                      location: "VibegrationsChat",
                  });
        });
    }, [t, n, l]);
    return d
        ? (0, a.jsx)(td, { name: r, unavailable: !0 })
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
var tm = n(824757);
function tf(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsxs)("section", {
              className: tm.hb,
              children: [
                  (0, a.jsx)(g.E, { variant: "text-xs/semibold", color: "text-muted", tag: "span", children: t }),
                  (0, a.jsx)("div", {
                      className: tm.Hu,
                      children: n.map((e) =>
                          (0, a.jsx)(
                              "span",
                              {
                                  className: tm.uR,
                                  children: (0, a.jsx)(g.E, {
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
function tp(e) {
    let { proposal: t, onApprove: n } = e;
    return (0, a.jsxs)("article", {
        className: tm.cz,
        "data-vibegrations-plan-card": !0,
        children: [
            (0, a.jsxs)("header", {
                className: tm.pu,
                children: [
                    (0, a.jsx)(g.E, {
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        tag: "span",
                        children: O.intl.string(M.default["60htw+"]),
                    }),
                    !0 === t.is_activity
                        ? (0, a.jsx)("span", {
                              className: tm.dr,
                              children: (0, a.jsx)(g.E, {
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  tag: "span",
                                  children: O.intl.string(O.t.IC5Ann),
                              }),
                          })
                        : null,
                ],
            }),
            (0, a.jsx)(g.E, { variant: "text-sm/normal", color: "text-default", selectable: !0, children: t.summary }),
            t.changes.length > 0
                ? (0, a.jsxs)("section", {
                      className: tm.hb,
                      children: [
                          (0, a.jsx)(g.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: O.intl.string(M.default.KLyB8Y),
                          }),
                          (0, a.jsx)("ul", {
                              className: tm.eQ,
                              children: t.changes.map((e, t) =>
                                  (0, a.jsxs)(
                                      "li",
                                      {
                                          className: tm.H6,
                                          children: [
                                              (0, a.jsx)(g.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  className: tm.UZ,
                                                  children: "\u2022",
                                              }),
                                              (0, a.jsx)(g.E, {
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
                      className: tm.hb,
                      children: [
                          (0, a.jsx)(g.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: O.intl.string(O.t["0hKkS+"]),
                          }),
                          (0, a.jsx)("ul", {
                              className: tm.eQ,
                              children: t.commands.map((e, t) =>
                                  (0, a.jsxs)(
                                      "li",
                                      {
                                          className: tm.Xs,
                                          children: [
                                              (0, a.jsxs)(g.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-default",
                                                  tag: "span",
                                                  selectable: !0,
                                                  children: ["launch" === e.kind ? "\u21EA " : "", "/", e.name],
                                              }),
                                              (0, a.jsx)(g.E, {
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
            (0, a.jsx)(tf, { label: O.intl.string(M.default.ieqTtP), names: t.bot_permissions ?? [] }),
            (0, a.jsx)(tf, { label: O.intl.string(M.default.Cn9qix), names: t.privileged_intents ?? [] }),
            null != n
                ? (0, a.jsxs)("div", {
                      className: tm.nc,
                      children: [
                          (0, a.jsx)(f.$, {
                              variant: "secondary",
                              size: "sm",
                              onClick: n,
                              text: O.intl.string(M.default.GYoWRk),
                          }),
                          (0, a.jsx)(g.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              tag: "span",
                              className: tm.sw,
                              children: "or reply to keep refining",
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var tg = n(192308),
    tx = n(479191);
function tv(e) {
    let { projectId: t, request: l } = e,
        s = i.useCallback(() => {
            (0, tg.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("338013"), n.e("468421")]).then(n.bind(n, 539620));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: l });
            });
        }, [t, l]);
    return (0, a.jsxs)("article", {
        className: tx.Lo,
        children: [
            (0, a.jsx)(g.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: O.intl.string(M.default["/e28TK"]),
            }),
            (0, a.jsx)(g.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: null != l.note && "" !== l.note ? l.note : O.intl.string(M.default.jxvtin),
            }),
            (0, a.jsx)("div", {
                className: tx.cS,
                children: l.fields.map((e) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: tx.$H,
                            children: (0, a.jsx)(g.E, {
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
                className: tx.sq,
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
var tb = n(976814),
    tj = n(973e3);
function ty(e) {
    let { projectId: t, request: n } = e,
        l = (0, E.bG)([h.Ay], () => h.Ay.getSettings(t)),
        s = (n.keys ?? []).map((e) => l?.schema.find((t) => t.key === e)).filter((e) => null != e),
        r = i.useCallback(() => {
            (0, tb.A)(t, { scopeKeys: n.keys, note: n.note, notifyAgent: !0 });
        }, [t, n]);
    return (0, a.jsxs)("article", {
        className: tj.Mk,
        children: [
            (0, a.jsx)(g.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: O.intl.string(M.default.wgDhiQ),
            }),
            (0, a.jsx)(g.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: null != n.note && "" !== n.note ? n.note : O.intl.string(M.default["V+DBhs"]),
            }),
            s.length > 0
                ? (0, a.jsx)("div", {
                      className: tj.R6,
                      children: s.map((e) =>
                          (0, a.jsx)(
                              "span",
                              {
                                  className: tj.K4,
                                  children: (0, a.jsx)(g.E, {
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
                className: tj.p0,
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
function tk(e) {
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
function tw(e) {
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
function tN(e) {
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
function tE(e) {
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
function tA(e) {
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
function tS(e) {
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
function tI(e) {
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
function tC(e) {
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
function tT(e) {
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
function tR(e) {
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
function tP(e) {
    return O.intl.string(e);
}
function tM(e) {
    let { task: t, Illocon: n, tint: l, name: i, connectsDown: s } = e,
        r = eH(t.state),
        o = t.groups.at(-1),
        c = r
            ? (t.latestActivity ?? t.title)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(e.title);
                  switch (e.state) {
                      case "failed":
                          return O.intl.formatToPlainString(M.default["5uv8y0"], { task: t });
                      case "cancelled":
                          return O.intl.formatToPlainString(M.default["oEzDO/"], { task: t });
                      default:
                          return O.intl.formatToPlainString(M.default.KS49RN, { task: t });
                  }
              })(t),
        d =
            0 === t.groups.length && (null == t.detail || "" === t.detail)
                ? void 0
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          t.groups.length > 0
                              ? (0, a.jsx)("ol", {
                                    className: eW.dO,
                                    children: t.groups.map((e, t) =>
                                        (0, a.jsx)(e3, { group: e, presentation: "detail", active: r && e === o }, t),
                                    ),
                                })
                              : null,
                          null != t.detail && "" !== t.detail
                              ? (0, a.jsx)("div", { className: eW.iq, children: t.detail })
                              : null,
                      ],
                  });
    return (0, a.jsx)(eQ, {
        glyph: (0, a.jsx)(em.m, {
            text: i,
            position: "left",
            children: (0, a.jsx)("span", {
                className: eW.nC,
                children: (0, a.jsx)(n, { size: 24, alt: "", ariaHidden: !0 }),
            }),
        }),
        line: c,
        live: r,
        settled: !r,
        tint: l,
        detail: d,
        connected: !0,
        connectsDown: s,
    });
}
var tO = n(165648);
function tL(e) {
    let {
            projectId: t,
            steps: n,
            active: l = !1,
            inheritedActivity: s,
            durationMs: r,
            interrupted: o = !1,
            ideasPass: c = !1,
        } = e,
        d = i.useMemo(() => eq(n, { turnActive: l, inheritedSummary: s }), [n, l, s]);
    if (o)
        return (0, a.jsx)("ol", {
            className: eW.pj,
            "data-live": !1,
            children: (0, a.jsx)(eQ, {
                glyph: (0, a.jsx)(ep.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: O.intl.string(M.default["5T7DSm"]),
                live: !1,
                settled: !0,
            }),
        });
    if (c)
        return (0, a.jsx)("ol", {
            className: eW.pj,
            "data-live": l,
            children: (0, a.jsx)(eQ, {
                glyph: (0, a.jsx)(eV.LightbulbIcon, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: null != r ? e5(r) : O.intl.string(M.default["z2+nNW"]),
                live: l,
                settled: null != r,
            }),
        });
    let u = d.items.flatMap((e) => ("activity" === e.type ? [e] : []));
    if (0 === u.length) return null;
    let h = {
            type: "activity",
            key: u[0].key,
            ...(u.find((e) => null != e.label)?.label != null ? { label: u.find((e) => null != e.label)?.label } : {}),
            blocks: u.flatMap((e) => e.blocks),
        },
        m = h.blocks.flatMap((e) => ("workstreams" === e.type ? e.tasks : [])),
        f = (function (e) {
            let t = [
                    { Illocon: tk, tint: "var(--illo-yellow-40)", name: tP(M.default["2l3AEQ"]) },
                    { Illocon: tw, tint: "var(--illo-orange-40)", name: tP(M.default["+FPL+I"]) },
                    { Illocon: tN, tint: "var(--illo-green-40)", name: tP(M.default.w4GOfR) },
                    { Illocon: tE, tint: "var(--illo-pink-40)", name: tP(M.default.XmZT9M) },
                    { Illocon: tA, tint: "var(--illo-pink-40)", name: tP(M.default.NnydwQ) },
                    { Illocon: tS, tint: "var(--illo-green-40)", name: tP(M.default["4iXcNT"]) },
                    { Illocon: t_, tint: "var(--illo-purple-40)", name: tP(M.default.DoTGt5) },
                    { Illocon: tI, tint: "var(--illo-yellow-40)", name: tP(M.default["9zxqmP"]) },
                    { Illocon: tC, tint: "var(--illo-orange-40)", name: tP(M.default.HF0T3L) },
                    { Illocon: tT, tint: "var(--illo-yellow-40)", name: tP(M.default.XTzDga) },
                    { Illocon: tR, tint: "var(--illo-purple-40)", name: tP(M.default.abtC2b) },
                ],
                n = 0;
            for (let l of e) for (let e = 0; e < l.length; e++) n = (31 * n + l.charCodeAt(e)) % t.length;
            let l = new Map();
            return (
                e.forEach((e, a) => {
                    l.set(e, t[(n + a) % t.length]);
                }),
                l
            );
        })(m.map((e) => e.taskId)),
        p = l || m.some((e) => eH(e.state));
    return (0, a.jsx)(eZ.Provider, {
        value: m.length,
        children: (0, a.jsxs)("ol", {
            className: eW.pj,
            "data-live": p,
            children: [
                (0, a.jsx)(e9, { projectId: t, item: h, live: l, durationMs: r, connectsDown: m.length > 0 }),
                m.map((e, t) => {
                    let n = f.get(e.taskId);
                    return null == n
                        ? null
                        : (0, a.jsx)(
                              tM,
                              {
                                  task: e,
                                  Illocon: n.Illocon,
                                  tint: n.tint,
                                  name: n.name,
                                  connectsDown: t < m.length - 1,
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
            active: o = !1,
            onApprove: c,
            ideas: d,
            clarification: u,
            onAnswerClarification: h,
            attachments: m,
            secretRequest: f,
            settingsRequest: p,
            onPickIdea: x,
            pickedIdeaIds: v,
            inheritedActivity: b,
            sideReply: j = !1,
        } = e,
        { items: y } = i.useMemo(() => eq(n, { turnActive: o, inheritedSummary: b }), [n, o, b]),
        k = y.at(-1),
        w = y.flatMap((e) => ("message" === e.type ? [e] : [])),
        N = k?.type === "message" && k.content.trim() === l.trim(),
        E = null != u && u.questions.length > 0,
        A = null == s && "" !== l && !N && !E,
        S = (function (e) {
            let { hasAttachments: t, showsClosingMessage: n, lastItemType: l } = e;
            return t ? (n ? "closing" : "message" === l ? "streamed" : "standalone") : "none";
        })({ hasAttachments: null != m && m.length > 0, showsClosingMessage: A, lastItemType: k?.type }),
        _ = null == m ? null : (0, a.jsx)(to, { projectId: t, attachments: m }),
        I = null == _ ? null : (0, a.jsx)("div", { className: eW.MT, children: _ }),
        C = j
            ? (0, a.jsx)(g.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: O.intl.string(M.default.OAjkIT),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: eW.ue,
        children: [
            w.length > 0
                ? (0, a.jsx)("ol", {
                      className: eW.dO,
                      children: w.map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: r()(eW.ky, e6.XR),
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: r()(tO.PT, eW.cW),
                                          children: ez.A.parse(e.content, !0, {
                                              allowList: !0,
                                              allowHeading: !0,
                                              allowLinks: !0,
                                          }),
                                      }),
                                      "streamed" === S && e.key === k?.key ? I : null,
                                  ],
                              },
                              e.key,
                          ),
                      ),
                  })
                : null,
            null != s
                ? (0, a.jsx)("div", {
                      className: r()(eW.ky, e6.XR),
                      children: (0, a.jsx)(tp, { proposal: s, onApprove: c }),
                  })
                : A
                  ? (0, a.jsxs)("div", {
                        className: r()(eW.ky, e6.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: r()(tO.PT, eW.cW),
                                children: ez.A.parse(l, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === S ? I : null,
                            C,
                        ],
                    })
                  : null,
            null != f
                ? (0, a.jsx)("div", {
                      className: r()(eW.ky, e6.XR),
                      children: (0, a.jsx)(tv, { projectId: t, request: f }),
                  })
                : null,
            null != p
                ? (0, a.jsx)("div", {
                      className: r()(eW.ky, e6.XR),
                      children: (0, a.jsx)(ty, { projectId: t, request: p }),
                  })
                : null,
            "standalone" === S ? (0, a.jsx)("div", { className: r()(eW.ky, e6.XR), children: I }) : null,
            E
                ? (0, a.jsx)("div", {
                      className: r()(eW.ky, e6.XR),
                      children: (0, a.jsx)(tn, { clarification: u, onSubmit: h }),
                  })
                : null,
            null != d && d.length > 0 ? (0, a.jsx)(ts, { ideas: d, pickedIdeaIds: v, onPick: x }) : null,
            A ? null : C,
        ],
    });
}
var t$ = n(320095),
    tH = n(963852),
    tG = n(763754),
    tF = n(491182),
    tB = n(20851),
    tq = n(375199),
    tU = n(715628),
    tV = n(752636),
    tz = n(95701),
    tW = n(441136);
let tY = (0, tz.createChannelRecord)({ id: "vibegrations-builder", type: I.rbe.DM }),
    tK = {
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
        o = i.useMemo(() => (0, tG.FT)(r, null), [r]),
        c = i.useMemo(() => {
            if (null == r) return null;
            let e = (0, tH.Ay)({ channelId: tY.id, content: t, author: r });
            return (0, t$.rh)({ ...e, timestamp: tZ(n, e.timestamp), state: I.cmJ.SENT });
        }, [t, r, n]);
    return null == c
        ? null
        : null == s
          ? (0, a.jsx)(tB.A, { message: c, author: o, channel: tY, isGroupStart: !0, disableInteraction: !0 })
          : (0, a.jsx)(tF.A, {
                className: tW.yE,
                author: o,
                childrenHeader: (0, tV.A)({ message: c, channel: tY, author: o, guildId: void 0, isGroupStart: !0 }),
                childrenMessageContent: "" !== t ? void 0 : null,
                childrenAccessories: tX(s, "" !== t),
                disableInteraction: !0,
            });
}
function tJ(e) {
    let { content: t, createdAt: n, accessories: l } = e,
        s = i.useMemo(() => (0, tG.FT)(null, null), []),
        r = i.useMemo(() => ({ ...s, nick: "Conjure", colorString: "var(--text-brand)" }), [s]),
        o = i.useMemo(() => {
            let e = (0, tH.Ay)({ channelId: tY.id, content: t, author: tK });
            return (0, t$.rh)({ ...e, timestamp: tZ(n, e.timestamp), state: I.cmJ.SENT });
        }, [t, n]),
        { content: c } = (0, tq.A)(o, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        d = i.useMemo(() => ({ message: o, channel: tY, compact: !1, groupId: o.id }), [o]);
    return (0, a.jsxs)("div", {
        className: tW.$4,
        children: [
            (0, a.jsx)(tF.A, {
                className: tW.yE,
                author: r,
                childrenHeader: (0, tV.A)({ message: o, channel: tY, author: r, guildId: void 0, isGroupStart: !0 }),
                childrenMessageContent: "" !== t ? (0, tU.A)(d, c) : null,
                childrenAccessories: tX(l, "" !== t),
                disableInteraction: !0,
            }),
            (0, a.jsx)("span", {
                className: tW.st,
                "aria-hidden": "true",
                children: (0, a.jsx)(p.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
            }),
        ],
    });
}
function t0(e, t) {
    let n = e[t]?.turn_id;
    if (null != n)
        for (let l = t - 1; l >= 0; l--) {
            let t = e[l];
            if (null != t && "assistant" === t.role && "side_reply" !== t.kind)
                return !0 === t.continued && t.turn_id === n
                    ? (function (e) {
                          for (let t = e.length - 1; t >= 0; t--) {
                              let n = e[t];
                              if (null != n && (null == n.task_id || "" === n.task_id) && !(e$.has(n.kind) || eF(n)))
                                  return eU(n);
                          }
                      })(t.steps)
                    : void 0;
        }
}
let t1 = {
    steered: M.default.I9TkzD,
    queued: M.default.gbjY6o,
    restarting: M.default["1Q4Cs2"],
    answered: M.default["J6WZ+x"],
};
function t2(e) {
    let { projectId: t, messages: n, onApprove: l, onPickIdea: s, onAnswerClarification: r } = e,
        o = (0, E.bG)([eD.default], () => eD.default.getCurrentUser()),
        c = n[n.length - 1];
    return 0 === n.length
        ? (0, a.jsx)("ol", {
              className: tr.x7,
              children: (0, a.jsx)(t6, {
                  role: "assistant",
                  children: (0, a.jsx)(tJ, { content: O.intl.string(M.default.khZEUv) }),
              }),
          })
        : (0, a.jsx)("ol", {
              className: tr.x7,
              children: n.map((e, d) => {
                  if ("user" === e.role) {
                      let n = null != e.attachments && e.attachments.length > 0 ? e.attachments : null;
                      return (0, a.jsx)(
                          t6,
                          {
                              role: "user",
                              children: (0, a.jsx)(tQ, {
                                  content: e.content,
                                  createdAt: e.created_at,
                                  userId: e.user_id ?? o?.id,
                                  accessories:
                                      null != n || null != e.disposition
                                          ? (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    null != n ? (0, a.jsx)(to, { projectId: t, attachments: n }) : null,
                                                    null != e.disposition
                                                        ? (0, a.jsx)(g.E, {
                                                              variant: "text-xs/normal",
                                                              color: "text-muted",
                                                              children: O.intl.string(t1[e.disposition]),
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
                  let u = e.steps.filter((e) => !e$.has(e.kind)).length > 0,
                      h = e.steps.some((e) => "assistant_delta" === e.kind && null != e.message && "" !== e.message),
                      m = null != e.clarification && e === c,
                      f =
                          "" !== e.content ||
                          null != e.proposal ||
                          null != e.ideas ||
                          null != e.clarification ||
                          null != e.secretRequest ||
                          h ||
                          (e.attachments?.length ?? 0) > 0,
                      p = !0 === e.interrupted,
                      x = (function (e, t) {
                          for (let n = t - 1; n >= 0; n--) {
                              let t = e[n];
                              if (null != t && "user" === t.role)
                                  return t.content === O.intl.string(M.default["3sTTBu"]);
                          }
                          return !1;
                      })(n, d);
                  return u || f || p || x
                      ? (0, a.jsxs)(
                            i.Fragment,
                            {
                                children: [
                                    u || p || x
                                        ? (0, a.jsx)(t6, {
                                              role: "assistant",
                                              children: (0, a.jsx)(tL, {
                                                  projectId: t,
                                                  interrupted: p,
                                                  ideasPass: x,
                                                  steps: e.steps,
                                                  active: !(0, ea.BL)(e),
                                                  inheritedActivity: t0(n, d),
                                                  durationMs:
                                                      null != e.finished_at ? e.finished_at - e.created_at : void 0,
                                              }),
                                          })
                                        : null,
                                    f
                                        ? (0, a.jsx)(t6, {
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
                                                      onApprove: e === c ? l : void 0,
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
                                                                })(n, d, e.ideas),
                                                      clarification: m ? e.clarification : void 0,
                                                      onAnswerClarification: r,
                                                      attachments: e.attachments,
                                                      secretRequest: e.secretRequest,
                                                      settingsRequest: e.settingsRequest,
                                                      onPickIdea: s,
                                                      inheritedActivity: t0(n, d),
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
function t6(e) {
    let { role: t, children: n } = e;
    return (0, a.jsx)("li", { "data-role": t, className: tr.xk, children: n });
}
var t3 = n(625903),
    t7 = n(964675);
function t4(e) {
    let { projectId: t } = e,
        n = (0, E.bG)([h.Ay], () => null != h.Ay.getSettings(t), [t]),
        l = i.useCallback(() => {
            (0, tb.A)(t);
        }, [t]);
    return n
        ? (0, a.jsx)(ek.D, {
              className: t7.h,
              "aria-label": O.intl.string(M.default.gTMvzD),
              onClick: l,
              children: (0, a.jsx)(t3.SettingsIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
          })
        : null;
}
var t5 = n(863610),
    t8 = n(495557);
function t9(e) {
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
            className: t8.jn,
            "data-vibegrations-thinking-panel": !0,
            children: (0, a.jsx)(el.Ch, {
                ref: s,
                className: t8.Dq,
                "data-vibegrations-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: r()(tO.PT, t8.bb),
                    children: ez.A.parse(l, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var ne = n(921461);
function nt(e) {
    let { activity: t, compacting: n = !1 } = e,
        l = i.useRef(null),
        s = i.useId(),
        [o, c] = i.useState(null),
        d = null != t && "end" !== t.phase,
        u = n ? M.default["0vH/5G"] : d ? M.default.Ly7F7x : M.default.QDGuNS,
        h = null != t && "" !== t.text,
        m = t?.session ?? null,
        f = h && null != m && o === m,
        p = i.useCallback(() => {
            h && null != m && c((e) => (e === m ? null : m));
        }, [h, m]),
        x = i.useCallback(() => c(null), []);
    return (0, a.jsx)(es.Y, {
        targetElementRef: l,
        position: "top",
        align: "left",
        shouldShow: f,
        onRequestClose: x,
        renderPopout: () => (0, a.jsx)(t9, { id: s, activity: t }),
        children: () =>
            (0, a.jsxs)(ek.D, {
                innerRef: l,
                className: r()(ne.h, h && ne.X),
                "aria-label": O.intl.string(M.default.SzdX35),
                "aria-expanded": f,
                "aria-describedby": f ? s : void 0,
                "data-vibegrations-thinking-trigger": !0,
                onClick: p,
                children: [
                    (0, a.jsx)(t5.n, { dotRadius: 3.5, themed: !0 }),
                    (0, a.jsx)(g.E, {
                        tag: "span",
                        variant: "text-xs/semibold",
                        color: "text-strong",
                        children: O.intl.string(u),
                    }),
                ],
            }),
    });
}
var nn = n(662546),
    nl = n(820081),
    na = n(329456);
function ni(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", {
        className: na.Vn,
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
        children: "completed" === t ? (0, a.jsx)(nl.B, { size: "xxs", color: "currentColor" }) : null,
    });
}
function ns(e) {
    return { completed: e.filter((e) => "completed" === e.status).length, total: e.length };
}
function nr(e) {
    let { todos: t, provisional: n } = e;
    return (0, a.jsxs)("ul", {
        className: na.zR,
        children: [
            t.map((e) =>
                (0, a.jsxs)(
                    "li",
                    {
                        className: na.qN,
                        "data-status": e.status,
                        children: [
                            (0, a.jsx)(ni, { status: e.status }),
                            (0, a.jsx)(g.E, {
                                variant: "text-sm/normal",
                                color: "completed" === e.status ? "text-muted" : "text-default",
                                tag: "span",
                                className: na.ku,
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
                      className: na.qN,
                      "data-status": "pending",
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(ni, { status: "pending" }),
                          (0, a.jsx)(g.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              tag: "span",
                              className: na.ku,
                              selectable: !0,
                              children: n,
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function no(e) {
    let { todos: t, provisional: n, announceProgress: l = !0 } = e,
        { completed: i, total: s } = ns(t);
    return 0 === s
        ? null
        : (0, a.jsxs)("article", {
              className: na.Rx,
              "data-vibegrations-todo-card": !0,
              children: [
                  (0, a.jsxs)("header", {
                      className: na.Ye,
                      children: [
                          (0, a.jsx)(g.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: O.intl.string(M.default.qCRC6c),
                          }),
                          (0, a.jsx)("span", {
                              className: na.mA,
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
                              children: (0, a.jsx)(g.E, {
                                  variant: "text-xs/medium",
                                  color: "text-muted",
                                  tag: "span",
                                  children: O.intl.formatToPlainString(M.default.bQvqly, { completed: i, total: s }),
                              }),
                          }),
                      ],
                  }),
                  (0, a.jsx)(nr, { todos: t, provisional: n }),
              ],
          });
}
var nc = n(233263);
function nd(e) {
    let { todos: t, provisional: n } = e;
    return (0, a.jsx)("div", {
        className: nc.B,
        role: "dialog",
        "aria-label": O.intl.string(M.default.qCRC6c),
        children: (0, a.jsx)(no, { todos: t, provisional: n, announceProgress: !1 }),
    });
}
function nu(e) {
    let { todos: t, provisional: n } = e,
        l = i.useRef(null),
        { completed: s, total: r } = ns(t);
    return 0 === r
        ? null
        : (0, a.jsx)(es.Y, {
              targetElementRef: l,
              position: "top",
              align: "right",
              renderPopout: () => (0, a.jsx)(nd, { todos: t, provisional: n }),
              children: (e) =>
                  (0, a.jsxs)(ek.D, {
                      innerRef: l,
                      className: nc.T,
                      "aria-label": O.intl.formatToPlainString(M.default["QG/EiF"], { completed: s, total: r }),
                      ...e,
                      children: [
                          (0, a.jsx)(nn.O, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                          (0, a.jsx)(g.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "none",
                              children: O.intl.formatToPlainString(M.default["6zuiBa"], { completed: s, total: r }),
                          }),
                      ],
                  }),
          });
}
var nh = n(885574),
    nm = n(280894);
function nf(e) {
    return e.toLocaleString();
}
function np(e) {
    let { label: t, usage: n } = e;
    return (0, a.jsxs)("div", {
        className: nm.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: nm.mf,
                children: [
                    (0, a.jsx)(g.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(g.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [nf((0, ej.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(g.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    nf(n.input_tokens),
                    " in \xb7 ",
                    nf(n.output_tokens),
                    " out \xb7 ",
                    nf(n.cache_creation_input_tokens),
                    " cache write \xb7 ",
                    nf(n.cache_read_input_tokens),
                    " cache read",
                ],
            }),
        ],
    });
}
function ng(e) {
    let { project: t } = e,
        n = (0, ej.wV)(t.orchestrator, t.codegen);
    return (0, a.jsxs)("div", {
        className: nm.si,
        role: "dialog",
        "aria-label": O.intl.string(M.default["9yoLWZ"]),
        children: [
            (0, a.jsx)("div", {
                className: nm.Q$,
                children: (0, a.jsxs)("div", {
                    className: nm.mf,
                    children: [
                        (0, a.jsxs)(g.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [nf((0, ej.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(g.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(np, { label: O.intl.string(M.default.hk4jJr), usage: t.orchestrator }),
            (0, a.jsx)(np, { label: O.intl.string(M.default.R9aduM), usage: t.codegen }),
            (0, a.jsxs)("div", {
                className: nm.mf,
                children: [
                    (0, a.jsx)(g.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: O.intl.string(M.default["kILb+R"]),
                    }),
                    (0, a.jsx)(g.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, ej.sj)(n) ? "\u2014" : `${Math.round(100 * (0, ej.CA)(n))}%`,
                    }),
                ],
            }),
        ],
    });
}
function nx(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(es.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(ng, { project: t }),
        children: (e) =>
            (0, a.jsx)(ek.D, {
                innerRef: n,
                className: nm.Y$,
                "aria-label": O.intl.string(M.default.AWQ2ZV),
                ...e,
                children: (0, a.jsx)(nh.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var nv = n(258216);
function nb(e) {
    switch (e) {
        case "connecting":
            return O.intl.string(M.default.W7oyuf);
        case "failed":
            return O.intl.string(M.default.eE60xI);
        case "closed":
            return O.intl.string(M.default["yBmS+I"]);
    }
}
function nj(e) {
    let {
        projectId: t,
        thinking: n,
        thinkingActivity: l,
        compacting: i,
        todos: s,
        provisionalTodo: r,
        projectUsage: o,
        connState: c,
    } = e;
    return (0, a.jsxs)("div", {
        className: nv.jf,
        children: [
            (0, a.jsx)("div", {
                className: nv.Xx,
                role: "status",
                "aria-live": "polite",
                "data-vibegrations-activity": !0,
                children: n ? (0, a.jsx)(nt, { activity: l, compacting: i }) : null,
            }),
            (0, a.jsx)(t4, { projectId: t }),
            null == s || 0 === s.length ? null : (0, a.jsx)(nu, { todos: s, provisional: r }),
            null == o
                ? null
                : (0, a.jsxs)("span", {
                      className: nv.BP,
                      children: [
                          (0, a.jsx)(g.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": O.intl.formatToPlainString(M.default["7SZZvj"], {
                                  runes: (0, ej.a7)(o.cost_usd),
                                  turns: o.turns,
                              }),
                              children: O.intl.formatToPlainString(M.default["4PFO2p"], {
                                  runes: (0, ej.a7)(o.cost_usd).toLocaleString(),
                              }),
                          }),
                          (0, a.jsx)(nx, { project: o }),
                      ],
                  }),
            "open" === c
                ? null
                : (0, a.jsx)(g.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === c ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": O.intl.formatToPlainString(M.default.eDDdhB, { status: nb(c) }),
                      "data-vibegrations-conn": !0,
                      "data-state": c,
                      className: nv.XF,
                      children: nb(c),
                  }),
        ],
    });
}
var ny = n(506774),
    nk = n(651649),
    nw = n(670455);
let nN = "shownVibegrationsFeedbackProjectIds";
var nE = n(348800);
let nA = [O.intl.string(M.default["E+Q26x"]), O.intl.string(M.default["06/jqP"]), O.intl.string(M.default["7MCiK9"])];
function nS(e) {
    let { projectId: t, onRegionCapture: l } = e,
        s = (0, E.bG)([ea.Ay], () => ea.Ay.getMessages(t), [t]),
        r = (0, E.bG)([h.Ay], () => h.Ay.getConnState(t), [t]),
        o = (0, E.bG)([h.Ay], () => h.Ay.isChatStopped(t), [t]),
        c = (0, E.bG)([ea.Ay], () => ea.Ay.getProjectUsage(t), [t]),
        d = (0, E.bG)([ea.Ay], () => ea.Ay.getThinkingActivity(t), [t]),
        u = (0, E.bG)([ea.Ay], () => ea.Ay.isCompacting(t), [t]),
        m = (0, E.bG)([h.Ay], () => h.Ay.getModelSettings(t), [t]),
        f = i.useRef(null),
        p = i.useRef(null),
        g = i.useRef(!0),
        [x, v] = i.useState(!0);
    i.useEffect(() => {
        g.current && p.current?.scrollToBottom();
    }, [s]);
    let b = i.useCallback(() => {
        let e = p.current;
        if (null == e) return;
        let t = e.getDistanceFromBottom();
        g.current = t < 32;
        let n = t > 1;
        v((e) => (!n === e ? e : !n));
    }, []);
    i.useLayoutEffect(() => {
        let e = f.current;
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
                        ((ny.w.get(nN) ?? []).includes(e) ||
                            nk.A.possiblyShowFeedbackModal(nw.MW.VIBEGRATIONS, () => {
                                let l;
                                (l = ny.w.get(nN) ?? []).includes(e) || ny.w.set(nN, [...l, e]),
                                    (0, tg.openModalLazy)(async () => {
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
    let j = i.useCallback(
            (e, n) => {
                (0, h.dv)(t, e, n);
            },
            [t],
        ),
        y = i.useCallback(() => (0, h.fu)(t), [t]),
        k = i.useCallback((e) => j(e.implementation_prompt), [j]),
        w = i.useCallback((e) => j(e), [j]),
        N = i.useCallback((e) => (0, h.XZ)(t, e), [t]),
        A = i.useCallback((e) => (0, h.vX)(t, e), [t]),
        S = i.useCallback((e) => (0, h.Vm)(t, e), [t]),
        _ = i.useCallback(() => j(O.intl.string(M.default.Jj8Ftb)), [j]),
        I = "open" === r && !o,
        C = s[s.length - 1],
        T = (0, E.bG)([ea.Ay], () => ea.Ay.hasLoadedHistory(t), [t]),
        R = i.useMemo(() => {
            let e = 0;
            for (let n = 0; n < t.length; n++) e = (31 * e + t.charCodeAt(n)) % 0x7fffffff;
            return nA[e % nA.length];
        }, [t]),
        P = C?.kind === "plan_implemented" ? O.intl.string(M.default["3sTTBu"]) : T && 0 === s.length ? R : null,
        L = null != C && "assistant" === C.role && null != C.proposal,
        D = i.useMemo(() => {
            for (let e = s.length - 1; e >= 0; e--) {
                let t = s[e];
                if ("assistant" === t.role && !(0, ea.BL)(t)) return t;
            }
        }, [s]),
        $ = null != D,
        H = L && I ? _ : void 0,
        G = D?.todos,
        F = D?.provisionalTodo;
    return (0, a.jsxs)("section", {
        ref: f,
        "data-vibegrations-chat": !0,
        className: nE.TE,
        children: [
            (0, a.jsx)(el.Ch, {
                ref: p,
                onScroll: b,
                "data-vibegrations-chat-log": !0,
                className: x ? nE.N$ : `${nE.N$} ${nE.hB}`,
                children: (0, a.jsx)(t2, {
                    projectId: t,
                    messages: s,
                    onApprove: H,
                    onPickIdea: I ? k : void 0,
                    onAnswerClarification: I ? w : void 0,
                }),
            }),
            (0, a.jsxs)("div", {
                className: nE.im,
                children: [
                    (0, a.jsx)(nj, {
                        projectId: t,
                        thinking: $,
                        thinkingActivity: d,
                        compacting: u,
                        todos: G,
                        provisionalTodo: F,
                        projectUsage: c,
                        connState: r,
                    }),
                    (0, a.jsx)(eP, {
                        canSend: I,
                        stopped: o,
                        running: $,
                        onSend: j,
                        onInterrupt: I ? y : void 0,
                        onUploadFile: A,
                        onDeleteFile: S,
                        onApprove: H,
                        onRegionCapture: l,
                        suggestion: P,
                        modelSettings: m,
                        onModelSettingsChange: N,
                    }),
                ],
            }),
        ],
    });
}
var n_ = n(435558),
    nI = n(661531),
    nC = n(602853),
    nT = n(517461),
    nR = n(761929),
    nP = n(927506);
function nM(e) {
    let { open: t, maxWidth: n, onWidthChange: l, children: s } = e,
        r = (0, nC.r)(nI.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = i.useRef(null),
        [c, d] = (0, nT.V)("VibegrationsChatSidebarWidth", 460),
        [u, h] = i.useState(c ?? 460),
        m = (0, n_.clamp)(u, 360, n);
    i.useLayoutEffect(() => {
        l(t ? m + r : 0);
    }, [m, t, r, l]);
    let f = (0, nR.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: o,
            onElementResize: h,
            onElementResizeEnd: d,
            orientation: nR.R.HORIZONTAL_LEFT,
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
        className: nP.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: nP.Di, onPointerDown: p }),
            (0, a.jsx)("div", { ref: o, className: nP.kL, style: { width: m }, children: s }),
        ],
    });
}
var nO = n(145615);
let nL = [6, 8, 10, 12],
    nD = {
        home: { blob: 1, twink: 1, alpha: 0.7 },
        conversation: { blob: 1, twink: 1, alpha: 0.7 },
        thinking: { blob: 3, twink: 2.4, alpha: 0.7 },
    };
function n$(e, t, n) {
    let l = (0x165667b1 * e) ^ (0x27d4eb2f * t) ^ (0x7fffffff * n);
    return (l = Math.imul(l ^ (l >>> 13), 0x4bf19f61)), (((l ^= l >>> 16) >>> 0) % 1e6) / 1e6;
}
let nH = i.memo(function (e) {
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
                h = nD.home.blob,
                m = nD.home.twink,
                f = nD.home.alpha,
                p = 0,
                g = nL[0],
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
            let N = -1;
            function E() {
                let e = Math.max(r, d);
                (e === d && N === g && c.length > 0) ||
                    ((d = e),
                    (N = g),
                    (c = (function (e, t) {
                        let n = [],
                            l = Math.ceil(e / t) + 1,
                            a = Math.ceil(600 / t) + 1;
                        for (let e = 0; e < a; e++)
                            for (let t = 0; t < l; t++)
                                n.push({
                                    i: t,
                                    j: e,
                                    threshold: 0.05 + 0.95 * n$(t, e, 1),
                                    phase: n$(t, e, 2) * Math.PI * 2,
                                    freq: 0.25 + 1.5 * n$(t, e, 3),
                                });
                        return n;
                    })(e, g)));
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
            let _ = performance.now(),
                I = 0;
            function C(e) {
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
                    let n = t - _,
                        l = Math.min(64, n);
                    (_ = t),
                        !(function (e) {
                            if (
                                (v++,
                                b++,
                                v < 30 ||
                                    e > 100 ||
                                    (x.push(e),
                                    x.length > 60 && x.shift(),
                                    x.length < 60 || b < 180 || p >= nL.length - 1))
                            )
                                return;
                            let t = 0;
                            for (let e = 0; e < x.length; e++) t += x[e];
                            let n = t / x.length;
                            n <= 22 ||
                                ((g = nL[++p]),
                                (b = 0),
                                (N = -1),
                                E(),
                                console.log(
                                    "[Vibegrations/glow-dither] perf degrade \u2192 spacing",
                                    g,
                                    "avg",
                                    n.toFixed(2),
                                    "ms",
                                ));
                        })(n);
                    let a = nD[s.current] ?? nD.home,
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
                    C(0.001 * t), (I = requestAnimationFrame(e));
                })),
                () => {
                    cancelAnimationFrame(I), S.disconnect(), w.disconnect(), window.removeEventListener("resize", A);
                }
            );
        }, []);
    let r = nO.P5;
    return (
        (r = "conversation" === t ? `${r} ${nO.wY}` : "home" === t ? `${r} ${nO.Qy}` : `${r} ${nO.fR}`),
        (0, a.jsx)("div", {
            ref: n,
            className: r,
            "aria-hidden": "true",
            children: (0, a.jsx)("canvas", { ref: l, className: nO.DX }),
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
            (0, a.jsx)(nH, { state: n }),
        ],
    });
}
var nB = n(333007),
    nq = n(439108);
function nU(e) {
    return {
        x: Math.min(e.startX, e.x),
        y: Math.min(e.startY, e.y),
        width: Math.abs(e.x - e.startX),
        height: Math.abs(e.y - e.startY),
    };
}
function nV(e) {
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
    return (0, nB.createPortal)(
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("div", { className: nq.tB, role: "presentation", onPointerDown: l }),
                (0, a.jsx)("div", {
                    className: nq.aC,
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
                                  className: nq.F7,
                                  children: (0, a.jsx)("div", {
                                      className: nq.aK,
                                      children: (0, a.jsx)(g.E, {
                                          variant: "text-sm/medium",
                                          color: "text-default",
                                          children: O.intl.string(M.default.ydkvBR),
                                      }),
                                  }),
                              })
                            : (0, a.jsx)("div", {
                                  className: nq.r1,
                                  style: { left: h.x, top: h.y, width: h.width, height: h.height },
                              }),
                }),
            ],
        }),
        document.body,
    );
}
var nz = n(120426),
    nW = n(873727),
    nY = n(147248),
    nK = n(418842),
    nX = n(363195),
    nZ = n(885386),
    nQ = n(940107),
    nJ = n(171936);
function n0(e) {
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
        let n = (0, E.bG)([nX.A], () => (0, nW.x4)(nX.A.theme)),
            l = (0, E.bG)([nY.A], () => nY.A.gradientPreset),
            {
                reducedMotion: a,
                fontScale: s,
                highContrast: r,
                forcedColors: o,
                underlineLinks: c,
            } = (0, E.cf)([eb.Ay], () => ({
                reducedMotion: eb.Ay.useReducedMotion,
                fontScale: (0, nW.U0)(),
                highContrast: eb.Ay.isHighContrastModeEnabled,
                forcedColors: eb.Ay.useForcedColors,
                underlineLinks: eb.Ay.alwaysShowLinkDecorations,
            })),
            d = nZ.hH.useSetting(),
            u = (0, nK.C)(),
            h = i.useRef(null),
            m = i.useRef(0),
            f = i.useCallback(() => {
                let l = (0, nz.F1)(e, t);
                if (null == l) return;
                let i = {
                    revision: ++m.current,
                    baseTheme: n,
                    customTheme: (0, nW.Lq)(),
                    uiDensity: u,
                    messageDisplayCompact: d,
                    fontScale: s,
                    reducedMotion: a,
                    highContrast: r,
                    forcedColors: o,
                    underlineLinks: c,
                };
                (0, nQ.W)(l, "set-env", i, {
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
                    n.target === (0, nz.F1)(e, t) && f();
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
        if (null != t) return (0, nJ.mn)(t, () => (0, nz.F1)(m, g));
    }, [t, m, g]);
    let b = i.useCallback(() => {
            let e = (0, nz.F1)(m, g),
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
                v(null), null != x && (0, nz.su)(x.iframe, e).then(x.resolve, x.reject);
            },
            [x],
        ),
        y = i.useCallback(() => {
            v(null), x?.resolve(null);
        }, [x]),
        k = s && null != n && l.type === _.U4.MAIN;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: r()(et.Mh, d),
                children: [o, (0, a.jsx)("div", { ref: f, className: et.fm, children: u })],
            }),
            h(k ? b : void 0),
            null != x ? (0, a.jsx)(nV, { targetRect: x.targetRect, onSelect: j, onCancel: y }) : null,
        ],
    });
}
function n1(e) {
    let {
            projectId: t,
            applicationId: n,
            previewApplicationId: l,
            surface: s,
            header: c,
            chatOpen: m,
            onCloseChat: f,
            previewReady: p,
            previewGate: g,
            channelMessages: x,
        } = e,
        v = i.useRef(null),
        [b, j] = i.useState(0);
    i.useLayoutEffect(() => {
        if (s.type === _.U4.MAIN) return (0, u.HV)(n), () => (0, u.HV)(null);
    }, [n, s.type]),
        i.useEffect(() => {
            null != t && (0, h.Hc)(t);
        }, [t]),
        i.useLayoutEffect(() => {
            let e = v.current;
            if (null == e) return;
            function t() {
                null != e && j(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return n.observe(e), () => n.disconnect();
        }, []),
        i.useEffect(() => () => (0, u.Zq)(0), []);
    let y = Math.max(360, b - 320),
        k = null != x ? x.open : m,
        w = m || s.type === _.U4.MAIN;
    return (0, a.jsx)("div", {
        ref: v,
        className: et.LB,
        children: (0, a.jsx)(n0, {
            projectId: t,
            applicationId: n,
            surface: s,
            previewReady: p,
            header: c,
            mainClassName: null == c ? void 0 : r()(et.ez, { [et.zt]: k }),
            content: (0, a.jsx)(X, {
                applicationId: n,
                previewApplicationId: l,
                surface: s,
                previewReady: p,
                previewGate: g,
            }),
            sidebar: (e) =>
                null != x
                    ? (0, a.jsx)(nM, {
                          open: x.open,
                          maxWidth: y,
                          onWidthChange: u.Zq,
                          children: x.open
                              ? (0, a.jsx)(en, { channel: x.channel, guild: x.guild, onClose: x.onClose })
                              : null,
                      })
                    : null != t && w
                      ? (0, a.jsx)(nM, {
                            open: m,
                            maxWidth: y,
                            onWidthChange: u.Zq,
                            children: (0, a.jsxs)("div", {
                                className: et.cO,
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
                                        children: (0, a.jsx)(d.Ay.Title, { children: O.intl.string(O.t["/VQax8"]) }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: et.cb,
                                        children: (0, a.jsx)(nS, { projectId: t, onRegionCapture: e }, t),
                                    }),
                                ],
                            }),
                        })
                      : null,
        }),
    });
}
