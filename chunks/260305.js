n.d(t, { A: () => tZ });
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
    b = n(17928),
    k = n(956518),
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
    A = n(742023),
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
                    (0, a.jsx)(p.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, a.jsx)(h.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
                ],
            }),
            i,
        ],
    });
}
var R = n(295813),
    P = n(375708),
    M = n(963691);
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
                        s = (0, b.bG)([g.A], () => g.A.getFrame(l), [l]),
                        r = (0, b.bG)(
                            [y.A, g.A],
                            () => y.A.getWindowOpen(E.MLl.ACTIVITY_POPOUT) && g.A.getMainFrame()?.id === l,
                            [l],
                        ),
                        { data: o, isLoading: c } = (0, j.YY)(t),
                        d = (0, _.x)(o),
                        u = null != (0, k.Ay)(t),
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
                        A.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === N.sV.INLINE && f.A.promoteFrame(r),
                              f.A.updateFrameLayoutMode({ frameId: r, layoutMode: N.y0.PIP }))
                            : e.intent === N.sV.MAIN && (0, m.A)().leaveFrame(r));
                }
            );
        }, [r]),
        s)
    ) {
        case w.Launched:
            return (0, a.jsx)(v.A, { frameId: l.id, level: x.A.WithinAppContent, className: M.Z7 });
        case w.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: M.qs,
                children: (0, a.jsx)(T, {
                    title: P.intl.string(R.default["4f6Vkr"]),
                    body: P.intl.string(R.default.LJ2q1H),
                }),
            });
        case w.NoApplication:
            return (0, a.jsxs)("div", {
                className: M.qs,
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
                className: M.qs,
                children: (0, a.jsx)(T, {
                    title: P.intl.string(R.default.FHOJiH),
                    body: P.intl.string(R.default["1yLQoV"]),
                }),
            });
        case w.Error:
            return (0, a.jsxs)("div", {
                className: M.qs,
                children: [
                    (0, a.jsx)(p.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: P.intl.string(R.default.MeLWCr),
                    }),
                    (0, a.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: M.tj,
                        children: P.intl.string(R.default["1RCbQT"]),
                    }),
                ],
            });
        case w.AwaitingLaunch:
        case w.Loading:
            return (0, a.jsx)("div", { className: M.qs, children: (0, a.jsx)(c.y, {}) });
    }
}
var L = n(976102);
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
                ? (0, a.jsx)(O, { applicationId: t, surface: n })
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
var D = n(789645),
    H = n(738876),
    B = n(47167),
    U = n(373204),
    V = n(355622),
    F = n(58736),
    W = n(31717),
    q = n(372054);
function $(e) {
    let { channel: t, guild: n, onClose: l } = e,
        i = (0, B.Ay)(t),
        s = (0, a.jsx)(F.Ay.Icon, { icon: D.P, tooltip: P.intl.string(P.t.cpT0Cq), onClick: l });
    return (0, a.jsxs)("div", {
        className: q.Wx,
        children: [
            (0, a.jsx)(H.A, { channel: t, draftType: W.C.ChannelMessage }),
            (0, a.jsx)(F.Ay, {
                toolbar: s,
                "aria-label": P.intl.string(P.t.BIYAqa),
                children: (0, a.jsx)(F.Ay.Title, { children: i }),
            }),
            (0, a.jsx)("div", {
                className: q.GZ,
                children: (0, a.jsx)(U.A, { channel: t, guild: n, chatInputType: V.oU.SIDEBAR }, t.id),
            }),
        ],
    });
}
var z = n(689175),
    X = n(783791);
n(323874), n(14289), n(35956), n(321073);
var K = n(866665),
    Z = n(588975),
    Y = n(428610),
    J = n(826745),
    Q = n(29080),
    ee = n(559647),
    et = n(285796),
    en = n(673724),
    el = n(514042),
    ea = n(939249),
    ei = n(298668);
function es(e) {
    return I()(ei._B, { [ei.ND]: e });
}
function er(e) {
    let { name: t, thumbSrc: n = null, compact: l = !1, subText: i, children: s, onThumbError: r } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            null != n
                ? (0, a.jsx)("img", { src: n, alt: "", className: ei.gJ, onError: r })
                : (0, a.jsx)(el.FileIcon, { size: l ? "xs" : "sm", color: "currentColor" }),
            (0, a.jsxs)("div", {
                className: ei.Wd,
                children: [
                    (0, a.jsx)(h.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: ei.Rr,
                        children: t,
                    }),
                    i,
                ],
            }),
            s,
        ],
    });
}
function eo(e) {
    return (0, a.jsx)("div", { className: es(e.compact ?? !1), children: er(e) });
}
function ec(e) {
    let { name: t, thumbSrc: n, ariaLabel: l, onClick: i, onThumbError: s } = e;
    return (0, a.jsx)(ea.D, {
        className: I()(es(!0), ei.w8),
        onClick: i,
        "aria-label": l,
        children: er({ name: t, thumbSrc: n, compact: !0, onThumbError: s }),
    });
}
var ed = n(789438);
let eu = 0;
function eh(e) {
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
        [v, b] = i.useState(!1),
        [k, j] = i.useState(!1);
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
        A = i.useCallback((e) => {
            E.current(e.id).catch((e) => {
                console.error("[vibegrations] attachment cleanup failed", e);
            });
        }, []);
    i.useEffect(() => {
        let e = N.current;
        return () => {
            for (let t of _.current)
                e.add(t.localId), null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && A(t.ref);
        };
    }, [A]);
    let S = i.useCallback(
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
                        a = ++eu,
                        i = { localId: a, name: l.name, size: l.size, contentType: e, status: "uploading" };
                    if (t.length >= 10) {
                        t.push({
                            ...i,
                            status: "error",
                            errorText: P.intl.formatToPlainString(R.default.DlX57a, { count: 10 }),
                        });
                        continue;
                    }
                    if (!(0, en.x5)(l.size, e)) {
                        t.push({
                            ...i,
                            status: "error",
                            errorText: P.intl.formatToPlainString(R.default.cI7t94, {
                                size: (0, en.ZJ)((0, en.yr)(e)),
                            }),
                        });
                        continue;
                    }
                    let s = en.Wb.has(e) ? URL.createObjectURL(l) : void 0;
                    t.push({ ...i, previewUrl: s }), n.push({ file: l, localId: a });
                }
                for (let { file: e, localId: l } of (w(t), n))
                    r(e).then(
                        (e) => {
                            N.current.has(l) ? A(e) : S(l, { status: "ready", ref: e });
                        },
                        (e) => {
                            N.current.has(l) ||
                                (console.error("[vibegrations] attachment upload failed", e),
                                S(l, { status: "error", errorText: P.intl.string(R.default.GwEHvn) }));
                        },
                    );
            },
            [A, r, S, w],
        ),
        C = i.useCallback(async () => {
            if (null != u && !v) {
                b(!0);
                try {
                    let e = await u();
                    null != e && I([e]);
                } catch (e) {
                    console.error("[vibegrations] region capture failed", e),
                        w([
                            ..._.current,
                            {
                                localId: ++eu,
                                name: "preview-capture.png",
                                size: 0,
                                contentType: "image/png",
                                status: "error",
                                errorText: P.intl.string(R.default["4DQd7d"]),
                            },
                        ]);
                } finally {
                    b(!1);
                }
            }
        }, [u, v, I, w]),
        T = i.useCallback(
            (e) => {
                let t = _.current,
                    n = t.find((t) => t.localId === e);
                N.current.add(e),
                    n?.previewUrl != null && URL.revokeObjectURL(n.previewUrl),
                    n?.ref != null && A(n.ref),
                    w(t.filter((t) => t.localId !== e));
            },
            [A, w],
        ),
        M = p.every((e) => "ready" === e.status),
        O = "" !== h.trim() || p.length > 0,
        L = t && O && M,
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
            null == s || k || (j(!0), s());
        }, [s, k]),
        B = i.useCallback(
            (e) => {
                if ("Escape" === e.key && n && null != s && !k) {
                    e.preventDefault(), e.stopPropagation(), H();
                    return;
                }
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != d && (e.preventDefault(), d());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), G());
            },
            [G, d, n, s, k, H],
        ),
        U = i.useCallback(
            (e) => {
                if (!t) return;
                let n = Array.from(e.clipboardData.files);
                0 !== n.length && (e.preventDefault(), I(n));
            },
            [t, I],
        ),
        V = i.useCallback(
            (e) => {
                e.preventDefault(), x(!1), t && I(Array.from(e.dataTransfer.files));
            },
            [t, I],
        ),
        F = i.useCallback((e) => {
            e.dataTransfer.types.includes("Files") && (e.preventDefault(), x(!0));
        }, []),
        W = i.useCallback(
            (e) => {
                I(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = "");
            },
            [I],
        );
    return (0, a.jsxs)("form", {
        onSubmit: D,
        onDrop: V,
        onDragOver: F,
        onDragLeave: () => x(!1),
        className: g ? `${ed.DA} ${ed.pV}` : ed.DA,
        children: [
            p.length > 0
                ? (0, a.jsx)("div", {
                      className: ed.lN,
                      children: p.map((e) => (0, a.jsx)(em, { draft: e, onRemove: T }, e.localId)),
                  })
                : null,
            (0, a.jsxs)("div", {
                className: ed.VA,
                children: [
                    (0, a.jsx)("input", {
                        ref: y,
                        type: "file",
                        multiple: !0,
                        onChange: W,
                        className: ed.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    (0, a.jsx)(K.m, {
                        text: P.intl.string(R.default.gUn10I),
                        ariaHidden: !0,
                        children: (0, a.jsx)("button", {
                            type: "button",
                            className: ed.Y0,
                            disabled: !t,
                            onClick: () => y.current?.click(),
                            "aria-label": P.intl.string(R.default.gUn10I),
                            children: (0, a.jsx)(Z.P, { size: "sm", color: "currentColor" }),
                        }),
                    }),
                    (0, a.jsx)(K.m, {
                        text: P.intl.string(R.default.B5gWPk),
                        ariaHidden: !0,
                        children: (0, a.jsx)("button", {
                            type: "button",
                            className: ed.Y0,
                            disabled: null == u || !t || v,
                            onClick: C,
                            "aria-label": P.intl.string(R.default.B5gWPk),
                            children: v
                                ? (0, a.jsx)(c.y, { type: c.t.SPINNING_CIRCLE_SIMPLE, className: ed.Rk })
                                : (0, a.jsx)(Y.K, { size: "sm", color: "currentColor" }),
                        }),
                    }),
                    (0, a.jsx)(J.y, {
                        value: h,
                        onChange: (e) => m(e.currentTarget.value),
                        onKeyDown: B,
                        onPaste: U,
                        placeholder: t
                            ? P.intl.string(n ? R.default["67PpcP"] : R.default.ahRdoJ)
                            : P.intl.string(R.default.nm4w9P),
                        disabled: !t,
                        "aria-label": P.intl.string(R.default.OPr66w),
                        rows: 1,
                        className: ed.jp,
                    }),
                    (0, a.jsxs)("div", {
                        className: ed.fF,
                        children: [
                            (0, a.jsx)("div", { className: ed.MT }),
                            n && null != s
                                ? (0, a.jsx)(K.m, {
                                      text: P.intl.string(R.default.KdgI4k),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)("button", {
                                          type: "button",
                                          className: ed.AW,
                                          disabled: k,
                                          onClick: H,
                                          "aria-label": P.intl.string(R.default.KdgI4k),
                                          children: (0, a.jsx)(Q.w, {
                                              size: "xs",
                                              color: "currentColor",
                                              className: ed.Mx,
                                          }),
                                      }),
                                  })
                                : null,
                            (0, a.jsx)("button", {
                                type: "submit",
                                className: ed.rt,
                                disabled: !L,
                                "aria-label": P.intl.string(R.default["22GHMt"]),
                                children: (0, a.jsx)(ee.SendMessageIcon, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: ed.Mx,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function em(e) {
    let { draft: t, onRemove: n } = e;
    return (0, a.jsxs)(eo, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(h.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(c.y, { type: c.t.SPINNING_CIRCLE_SIMPLE, className: ed.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: ed.o1,
                onClick: () => n(t.localId),
                "aria-label": P.intl.string(R.default["3HWvgk"]),
                children: (0, a.jsx)(et.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var ep = n(287809);
n(134528), n(947204);
var ef = n(320448),
    eg = n(847374),
    ex = n(46054),
    ev = n(424110);
function eb(e) {
    let { option: t, disabled: n, onPick: l } = e,
        s = i.useId(),
        r = !0 === t.recommended,
        o = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(ea.D, {
        className: I()(ev.uK, { [ev.ue]: n }),
        onClick: n ? void 0 : () => l(t),
        "aria-label": P.intl.formatToPlainString(r ? R.default.aL1BKQ : R.default.k7lEgj, { answer: t.label }),
        "aria-describedby": o ? s : void 0,
        "aria-disabled": n,
        "data-vibegrations-clarification-option": t.id,
        "data-recommended": r ? "true" : void 0,
        children: [
            (0, a.jsxs)("span", {
                className: ev.l8,
                children: [
                    (0, a.jsx)(h.E, {
                        tag: "span",
                        variant: "text-sm/semibold",
                        color: "none",
                        className: ev.ed,
                        children: t.label,
                    }),
                    r
                        ? (0, a.jsx)(h.E, {
                              tag: "span",
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              className: ev.rM,
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
function ek(e) {
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
        className: ev.$O,
        "data-vibegrations-clarification": t.id,
        "data-state": u ? "inert" : "open",
        "data-step": p,
        children: [
            m > 1
                ? (0, a.jsxs)("div", {
                      className: ev.qB,
                      children: [
                          (0, a.jsx)(h.E, {
                              tag: "span",
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              "aria-live": "polite",
                              className: ev.Dd,
                              "data-vibegrations-clarification-progress": !0,
                              children: P.intl.formatToPlainString(R.default["7bypa+"], { index: p + 1, total: m }),
                          }),
                          (0, a.jsx)(ea.D, {
                              className: I()(ev.aX, { [ev.uh]: !b }),
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
                className: ev.fF,
                role: "group",
                "aria-labelledby": `${f.id}-label`,
                children: f.options.map((e) =>
                    (0, a.jsx)(
                        eb,
                        { option: e, disabled: u, onPick: (e) => x({ kind: "option", optionId: e.id, text: e.label }) },
                        e.id,
                    ),
                ),
            }),
            (0, a.jsx)("div", {
                className: ev.F,
                children: (0, a.jsx)(J.y, {
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
                    className: ev.Pu,
                    "data-vibegrations-clarification-other": f.id,
                }),
            }),
        ],
    });
}
var ej = n(443865),
    ey = n(113757);
function e_(e) {
    let { idea: t, onPick: n } = e,
        l = i.useId(),
        s = null == n;
    return (0, a.jsxs)(ea.D, {
        className: s ? `${ey.Nr} ${ey.xe}` : ey.Nr,
        onClick: s ? void 0 : () => n(t),
        "aria-label": P.intl.formatToPlainString(R.default.pztRGi, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : l,
        "aria-disabled": s,
        children: [
            (0, a.jsx)(h.E, {
                tag: "div",
                variant: "text-sm/semibold",
                color: "none",
                className: ey.JJ,
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
function eN(e) {
    let { ideas: t, onPick: n } = e;
    return (0, a.jsxs)("section", {
        className: ey.kR,
        "data-vibegrations-idea-cards": !0,
        children: [
            (0, a.jsxs)("div", {
                className: ey.wx,
                children: [
                    (0, a.jsx)(ej.LightbulbIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                    (0, a.jsx)(h.E, {
                        tag: "span",
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        children: P.intl.string(R.default.DAvYsi),
                    }),
                ],
            }),
            t.map((e) => (0, a.jsx)(e_, { idea: e, onPick: n }, e.id)),
        ],
    });
}
function eE(e) {
    let { onAsk: t } = e;
    return (0, a.jsxs)("div", {
        className: ey.x,
        children: [
            (0, a.jsx)(h.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tag: "span",
                className: ey.I1,
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
var ew = n(256905),
    eA = n(375068);
function eS(e) {
    let { projectId: t, attachments: n } = e,
        l = n.filter(eI);
    return (0, a.jsx)("div", {
        className: eA.KT,
        children: n.map((e, n) =>
            null == e.id
                ? (0, a.jsx)(eC, { name: e.name }, n)
                : eI(e)
                  ? (0, a.jsx)(eR, { projectId: t, viewableImages: l, viewerIndex: l.indexOf(e) }, n)
                  : (0, a.jsx)(eT, { projectId: t, id: e.id, name: e.name }, n),
        ),
    });
}
function eI(e) {
    return null != e.id && en.Wb.has(e.content_type);
}
function eC(e) {
    let { name: t, unavailable: n = !1 } = e,
        l = n ? P.intl.formatToPlainString(R.default.OBr7WW, { name: t }) : t;
    return (0, a.jsx)(eo, { name: l, compact: !0 });
}
function eT(e) {
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
        ? (0, a.jsx)(eC, { name: l, unavailable: !0 })
        : (0, a.jsx)(ec, {
              name: l,
              thumbSrc: null,
              ariaLabel: P.intl.formatToPlainString(R.default.gV5YcR, { name: l }),
              onClick: c,
          });
}
function eR(e) {
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
                  (0, ew.R)({
                      items: e.filter((e) => "string" != typeof e),
                      startingIndex: e.slice(0, l).filter((e) => "string" != typeof e).length,
                      shouldHideMediaOptions: !0,
                      location: "VibegrationsChat",
                  });
        });
    }, [t, n, l]);
    return u
        ? (0, a.jsx)(eC, { name: r, unavailable: !0 })
        : (0, a.jsx)(ec, {
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
var eP = n(824757);
function eM(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsxs)("section", {
              className: eP.hb,
              children: [
                  (0, a.jsx)(h.E, { variant: "text-xs/semibold", color: "text-muted", tag: "span", children: t }),
                  (0, a.jsx)("div", {
                      className: eP.Hu,
                      children: n.map((e) =>
                          (0, a.jsx)(
                              "span",
                              {
                                  className: eP.uR,
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
function eO(e) {
    let { proposal: t, onApprove: n } = e;
    return (0, a.jsxs)("article", {
        className: eP.cz,
        "data-vibegrations-plan-card": !0,
        children: [
            (0, a.jsxs)("header", {
                className: eP.pu,
                children: [
                    (0, a.jsx)(h.E, {
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        tag: "span",
                        children: P.intl.string(R.default["60htw+"]),
                    }),
                    !0 === t.is_activity
                        ? (0, a.jsx)("span", {
                              className: eP.dr,
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
                      className: eP.hb,
                      children: [
                          (0, a.jsx)(h.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: P.intl.string(R.default.KLyB8Y),
                          }),
                          (0, a.jsx)("ul", {
                              className: eP.eQ,
                              children: t.changes.map((e, t) =>
                                  (0, a.jsxs)(
                                      "li",
                                      {
                                          className: eP.H6,
                                          children: [
                                              (0, a.jsx)(h.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  className: eP.UZ,
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
                      className: eP.hb,
                      children: [
                          (0, a.jsx)(h.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: P.intl.string(P.t["0hKkS+"]),
                          }),
                          (0, a.jsx)("ul", {
                              className: eP.eQ,
                              children: t.commands.map((e, t) =>
                                  (0, a.jsxs)(
                                      "li",
                                      {
                                          className: eP.Xs,
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
            (0, a.jsx)(eM, { label: P.intl.string(R.default.ieqTtP), names: t.bot_permissions ?? [] }),
            (0, a.jsx)(eM, { label: P.intl.string(R.default.Cn9qix), names: t.privileged_intents ?? [] }),
            null != n
                ? (0, a.jsxs)("div", {
                      className: eP.nc,
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
                              className: eP.sw,
                              children: "or reply to keep refining",
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var eL = n(192308),
    eG = n(479191);
function eD(e) {
    let { projectId: t, request: l } = e,
        s = i.useCallback(() => {
            (0, eL.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("338013"), n.e("468421")]).then(n.bind(n, 539620));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: l });
            });
        }, [t, l]);
    return (0, a.jsxs)("article", {
        className: eG.Lo,
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
                className: eG.cS,
                children: [
                    l.fields.map((e) =>
                        (0, a.jsx)(
                            "span",
                            {
                                className: eG.$H,
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
                              className: eG.$H,
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
                className: eG.sq,
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
var eH = n(13699);
function eB(e) {
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
            className: eH.Dx,
            children: (0, a.jsx)(h.E, {
                tag: "div",
                variant: "text-sm/normal",
                color: d,
                selectable: !0,
                className: eH.iq,
                children: l.summary,
            }),
        });
    let m = s ? eg.a : ef._;
    return (0, a.jsxs)("li", {
        "data-step-kind": l.step.kind,
        className: eH.Dx,
        children: [
            (0, a.jsxs)(ea.D, {
                tag: "div",
                className: eH.kG,
                "aria-expanded": s,
                "aria-controls": o,
                "aria-label": P.intl.formatToPlainString(R.default.z4KWsN, { step: l.summary }),
                onClick: c,
                children: [
                    (0, a.jsx)(h.E, {
                        tag: "span",
                        variant: "text-sm/normal",
                        color: d,
                        className: eH.iq,
                        children: l.summary,
                    }),
                    (0, a.jsx)(m, { size: "xs", color: "currentColor", className: eH.Ue }),
                ],
            }),
            (0, a.jsxs)("div", {
                id: o,
                hidden: !s,
                className: eH.yJ,
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
                              className: eH.y8,
                              children: u.map((e) => (0, a.jsx)(eV, { projectId: n, screenshotId: e }, e)),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function eU() {}
function eV(e) {
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
                (0, ew.R)({
                    items: [{ type: "IMAGE", url: e, alt: d }],
                    startingIndex: 0,
                    shouldHideMediaOptions: !0,
                    location: "VibegrationsChat",
                });
            }, eU);
        }, [t, n, d]);
    return r ? null : (0, a.jsx)(ec, { name: d, thumbSrc: l, ariaLabel: d, onClick: u, onThumbError: () => c(!0) });
}
var eF = n(820081),
    eW = n(329456);
function eq(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", {
        className: eW.Vn,
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
        children: "completed" === t ? (0, a.jsx)(eF.B, { size: "xxs", color: "currentColor" }) : null,
    });
}
function e$(e) {
    return { completed: e.filter((e) => "completed" === e.status).length, total: e.length };
}
function ez(e) {
    let { todos: t, provisional: n } = e;
    return (0, a.jsxs)("ul", {
        className: eW.zR,
        children: [
            t.map((e) =>
                (0, a.jsxs)(
                    "li",
                    {
                        className: eW.qN,
                        "data-status": e.status,
                        children: [
                            (0, a.jsx)(eq, { status: e.status }),
                            (0, a.jsx)(h.E, {
                                variant: "text-sm/normal",
                                color: "completed" === e.status ? "text-muted" : "text-default",
                                tag: "span",
                                className: eW.ku,
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
                      className: eW.qN,
                      "data-status": "pending",
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(eq, { status: "pending" }),
                          (0, a.jsx)(h.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              tag: "span",
                              className: eW.ku,
                              selectable: !0,
                              children: n,
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function eX(e) {
    let { todos: t, provisional: n, announceProgress: l = !0 } = e,
        { completed: i, total: s } = e$(t);
    return 0 === s
        ? null
        : (0, a.jsxs)("article", {
              className: eW.Rx,
              "data-vibegrations-todo-card": !0,
              children: [
                  (0, a.jsxs)("header", {
                      className: eW.Ye,
                      children: [
                          (0, a.jsx)(h.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: P.intl.string(R.default.qCRC6c),
                          }),
                          (0, a.jsx)("span", {
                              className: eW.mA,
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
                  (0, a.jsx)(ez, { todos: t, provisional: n }),
              ],
          });
}
let eK = new Set([
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
function eZ(e) {
    return "running" === e;
}
function eY(e) {
    return "writing_command" === e.kind && (null == e.friendly || "" === e.friendly);
}
function eJ(e) {
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
        if (eY(i) && null != r) {
            r.technical.push(...s);
            continue;
        }
        if (eY(i) && null == r && null != t) {
            n.push({ step: i, summary: t, technical: s.filter((e) => e !== t), screenshots: [] });
            continue;
        }
        let o = eQ(i),
            c = s.filter((e) => e !== o);
        null != r && r.summary === o
            ? (r.technical.push(...c), (e = r))
            : ((e = { step: i, summary: o, technical: c, screenshots: [] }), n.push(e)),
            "healthcheck_passed" === i.kind && (e.screenshots.push(...l.splice(0)), (a = e));
    }
    return n;
}
function eQ(e) {
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
var e0 = n(549505);
function e1(e) {
    let { task: t } = e,
        [n, l] = i.useState(null),
        s = i.useId(),
        r = t.groups.length > 0 || (null != t.detail && "" !== t.detail),
        o = r && (n ?? "failed" === t.state),
        c = i.useCallback(() => l(!o), [o]),
        d = eZ(t.state),
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
        m = o ? eg.a : ef._,
        p = "failed" === t.state,
        f = p ? u : d ? (o ? void 0 : t.latestActivity) : r ? void 0 : u,
        g = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)("span", {
                    className: e0.uJ,
                    children: [
                        (0, a.jsx)(h.E, {
                            tag: "span",
                            variant: "text-sm/normal",
                            color: "text-default",
                            className: e0.QC,
                            children: t.title,
                        }),
                        r ? (0, a.jsx)(m, { size: "xs", color: "currentColor", className: e0.bu }) : null,
                    ],
                }),
                null != f && "" !== f
                    ? (0, a.jsx)(h.E, {
                          tag: "span",
                          variant: "text-xs/normal",
                          color: p ? "text-feedback-critical" : "text-muted",
                          className: e0.hE,
                          children: f,
                      })
                    : null,
            ],
        });
    return (0, a.jsxs)("li", {
        className: e0.ot,
        "data-task-state": t.state,
        children: [
            r
                ? (0, a.jsx)(ea.D, {
                      tag: "div",
                      className: I()(e0.qI, e0.EZ),
                      "aria-expanded": o,
                      "aria-controls": s,
                      "aria-label": P.intl.formatToPlainString(R.default.SxMgMJ, { title: t.title, state: u }),
                      onClick: c,
                      children: g,
                  })
                : (0, a.jsx)("div", { className: e0.qI, children: g }),
            r
                ? (0, a.jsxs)("div", {
                      id: s,
                      hidden: !o,
                      className: e0.yd,
                      children: [
                          t.groups.length > 0
                              ? (0, a.jsx)("ol", {
                                    className: e0.x7,
                                    children: t.groups.map((e, t) => (0, a.jsx)(eB, { group: e }, t)),
                                })
                              : null,
                          null != t.detail && "" !== t.detail
                              ? (0, a.jsx)(h.E, {
                                    tag: "div",
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    selectable: !0,
                                    className: e0.Tb,
                                    children: t.detail,
                                })
                              : null,
                      ],
                  })
                : null,
        ],
    });
}
var e2 = n(229775),
    e7 = n(165648);
function e3(e) {
    let { projectId: t, item: n, attachments: l } = e,
        [s, r] = i.useState(!1),
        o = i.useId(),
        c = i.useCallback(() => r((e) => !e), []),
        d = null != n.label && "" !== n.label,
        u = s ? ef._ : eg.a,
        m = (0, a.jsx)(a.Fragment, {
            children: n.blocks.map((e) =>
                "rows" === e.type
                    ? (0, a.jsx)(
                          "ol",
                          {
                              className: eH.dO,
                              children: e.groups.map((e, n) => (0, a.jsx)(eB, { projectId: t, group: e }, n)),
                          },
                          e.key,
                      )
                    : (0, a.jsx)(
                          "ol",
                          { className: eH.On, children: e.tasks.map((e) => (0, a.jsx)(e1, { task: e }, e.taskId)) },
                          e.key,
                      ),
            ),
        });
    return d
        ? (0, a.jsxs)("li", {
              className: I()(eH.ky, e2.XR, eH.rn),
              children: [
                  (0, a.jsxs)(ea.D, {
                      tag: "div",
                      className: eH.rN,
                      "aria-expanded": !s,
                      "aria-controls": o,
                      "aria-label": P.intl.formatToPlainString(R.default.s1wx5H, { activity: n.label }),
                      onClick: c,
                      children: [
                          (0, a.jsx)(h.E, {
                              tag: "span",
                              variant: "text-sm/normal",
                              color: "text-default",
                              className: eH.zN,
                              children: n.label,
                          }),
                          (0, a.jsx)(u, { size: "xs", color: "currentColor", className: eH.cZ }),
                      ],
                  }),
                  (0, a.jsx)("div", { id: o, hidden: s, className: eH.MZ, children: m }),
                  l,
              ],
          })
        : (0, a.jsxs)("li", { className: I()(eH.ky, e2.XR, eH.rn), children: [m, l] });
}
function e6(e) {
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
                        null != u && (u.groups = eJ(h, { inheritedSummary: t })), (u = null), (h = []);
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
                            if (eK.has(l.kind)) continue;
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
                        if (eK.has(l.kind)) continue;
                        let e = eY(l);
                        !e && f && x();
                        let b = v(n, e && null != p);
                        (o = null),
                            (m = null),
                            null == u &&
                                ((u = { type: "rows", key: `rows-${n}`, groups: [] }), (t = p), b.blocks.push(u)),
                            h.push(l),
                            e || (p = eQ(l));
                    }
                    for (let e of (g(), s)) {
                        e.groups = eJ(e.rawSteps);
                        let t = e.groups[e.groups.length - 1]?.summary;
                        null != t && (e.latestActivity = t), !n && eZ(e.state) && (e.state = "incomplete");
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
        A = w?.type === "message" && w.content.trim() === s.trim(),
        S = null != f && f.questions.length > 0,
        C = null == r && "" !== s && !A && !S,
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
        M = null == x ? null : (0, a.jsx)(eS, { projectId: t, attachments: x }),
        O = null == M ? null : (0, a.jsx)("div", { className: eH.MT, children: M });
    return (0, a.jsxs)("div", {
        className: eH.ue,
        children: [
            null == l || "" === l || N
                ? null
                : (0, a.jsx)(h.E, {
                      tag: "div",
                      variant: "text-sm/normal",
                      color: "text-default",
                      selectable: !0,
                      className: I()(eH.ky, eH.Xt, e2.XR),
                      children: l,
                  }),
            null != u && u.length > 0 && !E
                ? (0, a.jsx)("div", {
                      className: I()(eH.ky, e2.XR),
                      children: (0, a.jsx)(eX, { todos: u, provisional: c }),
                  })
                : null,
            _.length > 0
                ? (0, a.jsx)("ol", {
                      className: eH.dO,
                      children: _.map((e) =>
                          "message" === e.type
                              ? (0, a.jsxs)(
                                    "li",
                                    {
                                        className: I()(eH.ky, e2.XR),
                                        children: [
                                            (0, a.jsx)("div", {
                                                className: I()(e7.PT, eH.cW),
                                                children: ex.A.parse(e.content, !0, {
                                                    allowList: !0,
                                                    allowHeading: !0,
                                                    allowLinks: !0,
                                                }),
                                            }),
                                            "streamed" === T && e.key === w?.key ? O : null,
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
                                          className: I()(eH.ky, eH.Xt, e2.XR),
                                          children: e.content,
                                      },
                                      e.key,
                                  )
                                : "todos" === e.type
                                  ? (0, a.jsx)(
                                        "li",
                                        {
                                            className: I()(eH.ky, e2.XR),
                                            children: (0, a.jsx)(eX, { todos: e.todos, provisional: c }),
                                        },
                                        e.key,
                                    )
                                  : (0, a.jsx)(
                                        e3,
                                        {
                                            projectId: t,
                                            item: e,
                                            attachments: "activity" === T && e.key === w?.key ? M : null,
                                        },
                                        e.key,
                                    ),
                      ),
                  })
                : null,
            null != r
                ? (0, a.jsx)("div", {
                      className: I()(eH.ky, e2.XR),
                      children: (0, a.jsx)(eO, { proposal: r, onApprove: m }),
                  })
                : C
                  ? (0, a.jsxs)("div", {
                        className: I()(eH.ky, e2.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: I()(e7.PT, eH.cW),
                                children: ex.A.parse(s, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === T ? O : null,
                            !0 === k
                                ? (0, a.jsx)("div", { className: eH.IN, children: (0, a.jsx)(eE, { onAsk: j }) })
                                : null,
                        ],
                    })
                  : null,
            null != v
                ? (0, a.jsx)("div", {
                      className: I()(eH.ky, e2.XR),
                      children: (0, a.jsx)(eD, { projectId: t, request: v }),
                  })
                : null,
            "standalone" === T ? (0, a.jsx)("div", { className: I()(eH.ky, e2.XR), children: O }) : null,
            S
                ? (0, a.jsx)("div", {
                      className: I()(eH.ky, e2.XR),
                      children: (0, a.jsx)(ek, { clarification: f, onSubmit: g }),
                  })
                : null,
            null != p && p.length > 0
                ? (0, a.jsx)("div", { className: I()(eH.ky, e2.XR), children: (0, a.jsx)(eN, { ideas: p, onPick: b }) })
                : null,
            !0 !== k || C
                ? null
                : (0, a.jsx)("div", { className: I()(eH.ky, e2.XR), children: (0, a.jsx)(eE, { onAsk: j }) }),
            o
                ? (0, a.jsx)("div", {
                      className: I()(eH.ky, e2.XR),
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
var e5 = n(778712),
    e8 = n(730134),
    e4 = n(427262);
function e9(e) {
    let { userId: t } = e,
        n = (0, b.bG)([ep.default], () => ep.default.getUser(t), [t]),
        l = (0, e4.tx)(n);
    return null == n
        ? null
        : (0, a.jsxs)("div", {
              className: eA.LF,
              children: [
                  (0, a.jsx)(e8.A, { user: n, size: e5._3.SIZE_16, "aria-hidden": !0 }),
                  (0, a.jsx)(h.E, { variant: "text-xs/semibold", color: "text-muted", children: l }),
              ],
          });
}
let te = { steered: R.default.I9TkzD, queued: R.default.gbjY6o, restarting: R.default["1Q4Cs2"] };
function tt(e) {
    let { projectId: t, messages: n, onApprove: l, onPickIdea: i, onAskForIdeas: s, onAnswerClarification: r } = e,
        o = n[n.length - 1],
        c = (0, b.bG)([ep.default], () => ep.default.getCurrentUser());
    return (0, a.jsx)("ol", {
        className: eA.x7,
        children: n.map((e, d) => {
            if ("user" === e.role) {
                let n = e.user_id ?? c?.id;
                return (0, a.jsxs)(
                    tn,
                    {
                        role: "user",
                        children: [
                            null != n ? (0, a.jsx)(e9, { userId: n }) : null,
                            (0, a.jsxs)("div", {
                                className: I()(eA.B2, e2.XR),
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
                                        ? (0, a.jsx)(eS, { projectId: t, attachments: e.attachments })
                                        : null,
                                    null != e.disposition
                                        ? (0, a.jsx)(h.E, {
                                              variant: "text-xs/normal",
                                              color: "text-muted",
                                              children: P.intl.string(te[e.disposition]),
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    },
                    e.render_id,
                );
            }
            let u = e.steps.filter((e) => !eK.has(e.kind)).length > 0,
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
                      tn,
                      {
                          role: "assistant",
                          children: (0, a.jsx)(e6, {
                              projectId: t,
                              steps: e.steps,
                              announcement: e.announcement,
                              content: e.content,
                              proposal: e.proposal,
                              interrupted: !0 === e.interrupted,
                              provisionalTodo: e.provisionalTodo,
                              active: !(0, X.B)(e),
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
                                          if (null != t && "assistant" === t.role)
                                              return !0 === t.continued && t.turn_id === n
                                                  ? (function (e) {
                                                        for (let t = e.length - 1; t >= 0; t--) {
                                                            let n = e[t];
                                                            if (
                                                                null != n &&
                                                                (null == n.task_id || "" === n.task_id) &&
                                                                !(eK.has(n.kind) || eY(n))
                                                            )
                                                                return eQ(n);
                                                        }
                                                    })(t.steps)
                                                  : void 0;
                                      }
                              })(n, d),
                          }),
                      },
                      e.render_id,
                  )
                : null;
        }),
    });
}
function tn(e) {
    let { role: t, children: n } = e;
    return (0, a.jsx)("li", { "data-role": t, className: eA.xk, children: n });
}
var tl = n(379307),
    ta = n(922016),
    ti = n(863610),
    ts = n(495557);
function tr(e) {
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
            className: ts.jn,
            "data-vibegrations-thinking-panel": !0,
            children: (0, a.jsx)(z.Ch, {
                ref: s,
                className: ts.Dq,
                "data-vibegrations-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: I()(e7.PT, ts.bb),
                    children: ex.A.parse(l, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var to = n(921461);
function tc(e) {
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
    return (0, a.jsx)(ta.Y, {
        targetElementRef: l,
        position: "top",
        align: "left",
        shouldShow: p,
        onRequestClose: g,
        renderPopout: () => (0, a.jsx)(tr, { id: s, activity: t }),
        children: () =>
            (0, a.jsxs)(ea.D, {
                innerRef: l,
                className: I()(to.h, u && to.X),
                "aria-label": P.intl.string(R.default.SzdX35),
                "aria-expanded": p,
                "aria-describedby": p ? s : void 0,
                "data-vibegrations-thinking-trigger": !0,
                onClick: f,
                children: [
                    (0, a.jsx)(ti.n, { dotRadius: 3.5, themed: !0 }),
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
var td = n(662546),
    tu = n(233263);
function th(e) {
    let { todos: t, provisional: n } = e;
    return (0, a.jsx)("div", {
        className: tu.B,
        role: "dialog",
        "aria-label": P.intl.string(R.default.qCRC6c),
        children: (0, a.jsx)(eX, { todos: t, provisional: n, announceProgress: !1 }),
    });
}
function tm(e) {
    let { todos: t, provisional: n } = e,
        l = i.useRef(null),
        { completed: s, total: r } = e$(t);
    return 0 === r
        ? null
        : (0, a.jsx)(ta.Y, {
              targetElementRef: l,
              position: "top",
              align: "right",
              renderPopout: () => (0, a.jsx)(th, { todos: t, provisional: n }),
              children: (e) =>
                  (0, a.jsxs)(ea.D, {
                      innerRef: l,
                      className: tu.T,
                      "aria-label": P.intl.formatToPlainString(R.default["QG/EiF"], { completed: s, total: r }),
                      ...e,
                      children: [
                          (0, a.jsx)(td.O, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
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
var tp = n(885574),
    tf = n(280894);
function tg(e) {
    return e.toLocaleString();
}
function tx(e) {
    let { label: t, usage: n } = e;
    return (0, a.jsxs)("div", {
        className: tf.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: tf.mf,
                children: [
                    (0, a.jsx)(h.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(h.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [tg((0, en.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(h.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    tg(n.input_tokens),
                    " in \xb7 ",
                    tg(n.output_tokens),
                    " out \xb7 ",
                    tg(n.cache_creation_input_tokens),
                    " cache write \xb7 ",
                    tg(n.cache_read_input_tokens),
                    " cache read",
                ],
            }),
        ],
    });
}
function tv(e) {
    let { project: t } = e,
        n = (0, en.wV)(t.orchestrator, t.codegen);
    return (0, a.jsxs)("div", {
        className: tf.si,
        role: "dialog",
        "aria-label": P.intl.string(R.default["9yoLWZ"]),
        children: [
            (0, a.jsx)("div", {
                className: tf.Q$,
                children: (0, a.jsxs)("div", {
                    className: tf.mf,
                    children: [
                        (0, a.jsxs)(h.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [tg((0, en.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(h.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(tx, { label: P.intl.string(R.default.hk4jJr), usage: t.orchestrator }),
            (0, a.jsx)(tx, { label: P.intl.string(R.default.R9aduM), usage: t.codegen }),
            (0, a.jsxs)("div", {
                className: tf.mf,
                children: [
                    (0, a.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: P.intl.string(R.default["kILb+R"]),
                    }),
                    (0, a.jsx)(h.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, en.sj)(n) ? "\u2014" : `${Math.round(100 * (0, en.CA)(n))}%`,
                    }),
                ],
            }),
        ],
    });
}
function tb(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(ta.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(tv, { project: t }),
        children: (e) =>
            (0, a.jsx)(ea.D, {
                innerRef: n,
                className: tf.Y$,
                "aria-label": P.intl.string(R.default.AWQ2ZV),
                ...e,
                children: (0, a.jsx)(tp.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var tk = n(258216);
function tj(e) {
    switch (e) {
        case "connecting":
            return P.intl.string(R.default.W7oyuf);
        case "failed":
            return P.intl.string(R.default.eE60xI);
        case "closed":
            return P.intl.string(R.default["yBmS+I"]);
    }
}
function ty(e) {
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
        className: tk.jf,
        children: [
            (0, a.jsx)("div", {
                className: tk.Xx,
                role: "status",
                "aria-live": "polite",
                "data-vibegrations-activity": !0,
                children: t ? (0, a.jsx)(tc, { activity: n, compacting: l }) : null,
            }),
            null == c
                ? null
                : (0, a.jsx)(tl.A, { settings: c.settings, choices: c.choices, disabled: "open" !== o, onChange: d }),
            null == i || 0 === i.length ? null : (0, a.jsx)(tm, { todos: i, provisional: s }),
            null == r
                ? null
                : (0, a.jsxs)("span", {
                      className: tk.BP,
                      children: [
                          (0, a.jsx)(h.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": P.intl.formatToPlainString(R.default["7SZZvj"], {
                                  runes: (0, en.a7)(r.cost_usd),
                                  turns: r.turns,
                              }),
                              children: P.intl.formatToPlainString(R.default["4PFO2p"], {
                                  runes: (0, en.a7)(r.cost_usd).toLocaleString(),
                              }),
                          }),
                          (0, a.jsx)(tb, { project: r }),
                      ],
                  }),
            "open" === o
                ? null
                : (0, a.jsx)(h.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === o ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": P.intl.formatToPlainString(R.default.eDDdhB, { status: tj(o) }),
                      "data-vibegrations-conn": !0,
                      "data-state": o,
                      className: tk.XF,
                      children: tj(o),
                  }),
        ],
    });
}
var t_ = n(506774),
    tN = n(651649),
    tE = n(670455);
let tw = "shownVibegrationsFeedbackProjectIds";
var tA = n(348800);
function tS(e) {
    let { projectId: t, onRegionCapture: l } = e,
        s = (0, b.bG)([X.A], () => X.A.getMessages(t), [t]),
        r = (0, b.bG)([o.Ay], () => o.Ay.getConnState(t), [t]),
        c = (0, b.bG)([X.A], () => X.A.getProjectUsage(t), [t]),
        d = (0, b.bG)([X.A], () => X.A.getThinkingActivity(t), [t]),
        u = (0, b.bG)([X.A], () => X.A.isCompacting(t), [t]),
        h = (0, b.bG)([o.Ay], () => o.Ay.getModelSettings(t), [t]),
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
                    let t = X.A.getMessages(e).filter((e) => "assistant" === e.role && (0, X.B)(e)).length;
                    !(t < 3) &&
                        ((t_.w.get(tw) ?? []).includes(e) ||
                            tN.A.possiblyShowFeedbackModal(tE.MW.VIBEGRATIONS, () => {
                                let l;
                                (l = t_.w.get(tw) ?? []).includes(e) || t_.w.set(tw, [...l, e]),
                                    (0, eL.openModalLazy)(async () => {
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
    let x = i.useCallback(
            (e, n) => {
                (0, o.dv)(t, e, n);
            },
            [t],
        ),
        v = i.useCallback(() => (0, o.fu)(t), [t]),
        k = i.useCallback((e) => x(e.implementation_prompt), [x]),
        j = i.useCallback((e) => x(e), [x]),
        y = i.useCallback(() => x(P.intl.string(R.default["3sTTBu"])), [x]),
        _ = i.useCallback((e) => (0, o.XZ)(t, e), [t]),
        N = i.useCallback((e) => (0, o.vX)(t, e), [t]),
        E = i.useCallback((e) => (0, o.Vm)(t, e), [t]),
        w = i.useCallback(() => x(P.intl.string(R.default.Jj8Ftb)), [x]),
        A = "open" === r,
        S = s[s.length - 1],
        I = null != S && "assistant" === S.role && null != S.proposal,
        C = null != S && "assistant" === S.role && !(0, X.B)(S),
        T = I && A ? w : void 0,
        M = C && S?.role === "assistant" ? S.todos : void 0,
        O = C && S?.role === "assistant" ? S.provisionalTodo : void 0;
    return (0, a.jsxs)("section", {
        ref: m,
        "data-vibegrations-chat": !0,
        className: tA.T,
        children: [
            (0, a.jsx)(z.Ch, {
                ref: p,
                onScroll: g,
                "data-vibegrations-chat-log": !0,
                className: tA.N,
                children: (0, a.jsx)(tt, {
                    projectId: t,
                    messages: s,
                    onApprove: T,
                    onPickIdea: A ? k : void 0,
                    onAskForIdeas: A ? y : void 0,
                    onAnswerClarification: A ? j : void 0,
                }),
            }),
            (0, a.jsx)(ty, {
                thinking: C,
                thinkingActivity: d,
                compacting: u,
                todos: M,
                provisionalTodo: O,
                projectUsage: c,
                connState: r,
                modelSettings: h,
                onModelSettingsChange: _,
            }),
            (0, a.jsx)(eh, {
                canSend: A,
                running: C,
                onSend: x,
                onInterrupt: A ? v : void 0,
                onUploadFile: N,
                onDeleteFile: E,
                onApprove: T,
                onRegionCapture: l,
            }),
        ],
    });
}
var tI = n(435558),
    tC = n(661531),
    tT = n(602853),
    tR = n(517461),
    tP = n(761929),
    tM = n(927506);
function tO(e) {
    let { open: t, maxWidth: n, onWidthChange: l, children: s } = e,
        r = (0, tT.r)(tC.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = i.useRef(null),
        [c, d] = (0, tR.V)("VibegrationsChatSidebarWidth", 460),
        [u, h] = i.useState(c ?? 460),
        m = (0, tI.clamp)(u, 360, n);
    i.useLayoutEffect(() => {
        l(t ? m + r : 0);
    }, [m, t, r, l]);
    let p = (0, tP.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: o,
            onElementResize: h,
            onElementResizeEnd: d,
            orientation: tP.R.HORIZONTAL_LEFT,
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
        className: tM.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: tM.Di, onPointerDown: f }),
            (0, a.jsx)("div", { ref: o, className: tM.kL, style: { width: m }, children: s }),
        ],
    });
}
var tL = n(333007),
    tG = n(439108);
function tD(e) {
    return {
        x: Math.min(e.startX, e.x),
        y: Math.min(e.startY, e.y),
        width: Math.abs(e.x - e.startX),
        height: Math.abs(e.y - e.startY),
    };
}
function tH(e) {
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
                    a = tD({ ...s, x: t.x, y: t.y });
                r(null), a.width < 8 && a.height < 8 ? l() : n(a);
            },
            [s, o, n, l],
        ),
        m = null == s ? null : tD(s);
    return (0, tL.createPortal)(
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("div", { className: tG.tB, role: "presentation", onPointerDown: l }),
                (0, a.jsx)("div", {
                    className: tG.aC,
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
                                  className: tG.F7,
                                  children: (0, a.jsx)("div", {
                                      className: tG.aK,
                                      children: (0, a.jsx)(h.E, {
                                          variant: "text-sm/medium",
                                          color: "text-default",
                                          children: P.intl.string(R.default.ydkvBR),
                                      }),
                                  }),
                              })
                            : (0, a.jsx)("div", {
                                  className: tG.r1,
                                  style: { left: m.x, top: m.y, width: m.width, height: m.height },
                              }),
                }),
            ],
        }),
        document.body,
    );
}
function tB(e) {
    let { projectId: t } = e,
        n = (0, b.bG)([X.A], () => X.A.isThinking(t), [t]);
    return (0, a.jsx)("div", { className: e2.MP, "data-active": n, "aria-hidden": !0 });
}
var tU = n(120426),
    tV = n(775602),
    tF = n(147248),
    tW = n(363195),
    tq = n(885386),
    t$ = n(940107);
let tz = ["custom-theme-background", "custom-client-theme"];
var tX = n(171936);
function tK(e) {
    let t,
        n,
        l,
        r,
        o,
        c,
        d,
        u,
        { projectId: h, applicationId: m, surface: p, previewReady: f, content: g, sidebar: x } = e,
        [v, k] = i.useState(null),
        j = (0, s.A)(m, p),
        y = j?.id ?? null;
    (t = (0, b.bG)([tW.A], () =>
        (function (e) {
            switch (e) {
                case "light":
                case "midnight":
                case "darker":
                    return e;
                default:
                    return "dark";
            }
        })(tW.A.theme),
    )),
        (n = (0, b.bG)([tF.A], () => tF.A.gradientPreset)),
        (l = (0, b.bG)([tV.Ay], () => tV.Ay.useReducedMotion)),
        (r = tq.hH.useSetting()),
        (o = i.useRef(null)),
        (c = i.useRef(0)),
        (d = i.useCallback(() => {
            let e = (0, tU.F1)(v, y);
            if (null == e) return;
            let n = {
                revision: ++c.current,
                baseTheme: t,
                customTheme: (function () {
                    let e = document.documentElement,
                        t = tz.filter((t) => e.classList.contains(t));
                    if (0 === t.length) return null;
                    let n = window.getComputedStyle(e),
                        l = {};
                    for (let e = 0; e < n.length; e++) {
                        let t = n.item(e);
                        t.startsWith("--custom-") && (l[t] = n.getPropertyValue(t).trim());
                    }
                    return { classNames: t, variables: l };
                })(),
                messageDisplayCompact: r,
                reducedMotion: l,
            };
            (0, t$.W)(e, "set-env", n, {
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
                e.target === (0, tU.F1)(v, y) && d();
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
        if (null != h) return (0, tX.mn)(h, () => (0, tU.F1)(v, y));
    }, [h, v, y]);
    let w = i.useCallback(() => {
            let e = (0, tU.F1)(v, y),
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
        A = i.useCallback(
            (e) => {
                E(null), null != _ && (0, tU.su)(_.iframe, e).then(_.resolve, _.reject);
            },
            [_],
        ),
        S = i.useCallback(() => {
            E(null), _?.resolve(null);
        }, [_]),
        I = f && null != m && p.type === N.U4.MAIN;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", { ref: k, className: q.fm, children: g }),
            x(I ? w : void 0),
            null != _ ? (0, a.jsx)(tH, { targetRect: _.targetRect, onSelect: A, onCancel: S }) : null,
        ],
    });
}
function tZ(e) {
    let {
            projectId: t,
            applicationId: n,
            surface: l,
            chatOpen: s,
            previewReady: c,
            previewGate: d,
            channelMessages: u,
        } = e,
        h = i.useRef(null),
        [m, p] = i.useState(0);
    i.useLayoutEffect(() => {
        if (l.type === N.U4.MAIN) return (0, r.HV)(n), () => (0, r.HV)(null);
    }, [n, l.type]),
        i.useEffect(() => {
            null != t && (0, o.Hc)(t);
        }, [t]),
        i.useLayoutEffect(() => {
            let e = h.current;
            if (null == e) return;
            function t() {
                null != e && p(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return n.observe(e), () => n.disconnect();
        }, []),
        i.useEffect(() => () => (0, r.Zq)(0), []);
    let f = Math.max(360, m - 320),
        g = s || l.type === N.U4.MAIN;
    return (0, a.jsx)("div", {
        ref: h,
        className: q.LB,
        children: (0, a.jsx)(tK, {
            projectId: t,
            applicationId: n,
            surface: l,
            previewReady: c,
            content: (0, a.jsx)(G, { applicationId: n, surface: l, previewReady: c, previewGate: d }),
            sidebar: (e) =>
                null != u
                    ? (0, a.jsx)(tO, {
                          open: u.open,
                          maxWidth: f,
                          onWidthChange: r.Zq,
                          children: u.open
                              ? (0, a.jsx)($, { channel: u.channel, guild: u.guild, onClose: u.onClose })
                              : null,
                      })
                    : null != t && g
                      ? (0, a.jsx)(tO, {
                            open: s,
                            maxWidth: f,
                            onWidthChange: r.Zq,
                            children: (0, a.jsxs)("div", {
                                className: q.cO,
                                children: [
                                    (0, a.jsx)(tB, { projectId: t }),
                                    (0, a.jsx)(tS, { projectId: t, onRegionCapture: e }, t),
                                ],
                            }),
                        })
                      : null,
        }),
    });
}
