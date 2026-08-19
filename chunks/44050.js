n.d(t, { A: () => tS });
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
    let { title: t, body: n, wide: l = !1, children: s } = e;
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
            s,
        ],
    });
}
var T = n(818085),
    R = n(375708),
    P = n(616694);
function O(e) {
    let { applicationId: t, surface: n } = e,
        { frame: l, state: i } = (function (e) {
            let { applicationId: t, surface: n } = e,
                {
                    surface: l,
                    setFailed: a,
                    lifecycle: i,
                } = (function (e) {
                    let { applicationId: t, surface: n } = e,
                        l = s.useMemo(() => (0, N.VA)(t, n), [t, n]),
                        a = s.useMemo(() => n, [l]),
                        i = (0, x.bG)([y.A], () => y.A.getFrame(l), [l]),
                        r = (0, x.bG)(
                            [b.A, y.A],
                            () => b.A.getWindowOpen(E.MLl.ACTIVITY_POPOUT) && y.A.getMainFrame()?.id === l,
                            [l],
                        ),
                        { data: o, isLoading: c } = (0, k.YY)(t),
                        d = (0, _.x)(o),
                        u = null != (0, v.Ay)(t),
                        [h, m] = s.useState(null),
                        p = h === l;
                    return {
                        surface: a,
                        setFailed: s.useCallback(() => m(l), [l]),
                        lifecycle: (0, N.x1)(i)
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
        r = s.useMemo(() => (0, N.VA)(t, n), [t, n]);
    switch (
        (s.useEffect(() => {
            if ((0, N.Yf)(n) === N.sV.MAIN) return () => (0, m.A)().leaveFrame(r);
        }, [r, n]),
        i)
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
        o = (0, i.A)(t, n);
    return (s.useEffect(() => {
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
    H = n(783791);
n(323874), n(14289), n(35956), n(321073);
var D = n(866665),
    B = n(588975),
    U = n(428610),
    V = n(826745),
    F = n(29080),
    W = n(559647),
    z = n(285796),
    $ = n(673724),
    X = n(514042),
    q = n(939249),
    K = n(195219);
function Y(e) {
    return A()(K._B, { [K.ND]: e });
}
function Z(e) {
    let { name: t, thumbSrc: n = null, compact: l = !1, subText: s, children: i, onThumbError: r } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            null != n
                ? (0, a.jsx)("img", { src: n, alt: "", className: K.gJ, onError: r })
                : (0, a.jsx)(X.FileIcon, { size: l ? "xs" : "sm", color: "currentColor" }),
            (0, a.jsxs)("div", {
                className: K.Wd,
                children: [
                    (0, a.jsx)(h.E, { variant: "text-sm/medium", color: "text-default", className: K.Rr, children: t }),
                    s,
                ],
            }),
            i,
        ],
    });
}
function J(e) {
    return (0, a.jsx)("div", { className: Y(e.compact ?? !1), children: Z(e) });
}
function Q(e) {
    let { name: t, thumbSrc: n, ariaLabel: l, onClick: s, onThumbError: i } = e;
    return (0, a.jsx)(q.D, {
        className: A()(Y(!0), K.w8),
        onClick: s,
        "aria-label": l,
        children: Z({ name: t, thumbSrc: n, compact: !0, onThumbError: i }),
    });
}
var ee = n(17117);
let et = 0;
function en(e) {
    let {
            canSend: t,
            running: n,
            onSend: l,
            onInterrupt: i,
            onUploadFile: r,
            onDeleteFile: o,
            onApprove: d,
            onRegionCapture: u,
        } = e,
        [h, m] = s.useState(""),
        [p, f] = s.useState([]),
        [g, x] = s.useState(!1),
        [v, k] = s.useState(!1),
        [b, j] = s.useState(!1);
    s.useEffect(() => {
        n || j(!1);
    }, [n]);
    let y = s.useRef(null),
        _ = s.useRef([]),
        N = s.useRef(new Set()),
        E = s.useRef(o);
    E.current = o;
    let w = s.useCallback((e) => {
            (_.current = e), f(e);
        }, []),
        S = s.useCallback((e) => {
            E.current(e.id).catch((e) => {
                console.error("[vibegrations] attachment cleanup failed", e);
            });
        }, []);
    s.useEffect(() => {
        let e = N.current;
        return () => {
            for (let t of _.current)
                e.add(t.localId), null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && S(t.ref);
        };
    }, [S]);
    let A = s.useCallback(
            (e, t) => {
                if (N.current.has(e)) return;
                let n = _.current;
                n.some((t) => t.localId === e) && w(n.map((n) => (n.localId === e ? { ...n, ...t } : n)));
            },
            [w],
        ),
        I = s.useCallback(
            (e) => {
                if (0 === e.length) return;
                let t = [..._.current],
                    n = [];
                for (let l of e) {
                    let e = "" === l.type ? "application/octet-stream" : l.type,
                        a = ++et,
                        s = { localId: a, name: l.name, size: l.size, contentType: e, status: "uploading" };
                    if (t.length >= 10) {
                        t.push({
                            ...s,
                            status: "error",
                            errorText: R.intl.formatToPlainString(T.default.DlX57a, { count: 10 }),
                        });
                        continue;
                    }
                    if (!(0, $.x5)(l.size, e)) {
                        t.push({
                            ...s,
                            status: "error",
                            errorText: R.intl.formatToPlainString(T.default.cI7t94, { size: (0, $.ZJ)((0, $.yr)(e)) }),
                        });
                        continue;
                    }
                    let i = $.Wb.has(e) ? URL.createObjectURL(l) : void 0;
                    t.push({ ...s, previewUrl: i }), n.push({ file: l, localId: a });
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
        C = s.useCallback(async () => {
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
        P = s.useCallback(
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
        G = s.useCallback(() => {
            if (!L) return;
            let e = _.current.filter((e) => null != e.ref).map((e) => e.ref);
            for (let t of (l(h, e.length > 0 ? e : void 0), _.current))
                null != t.previewUrl && URL.revokeObjectURL(t.previewUrl);
            m(""), w([]);
        }, [L, h, l, w]),
        H = s.useCallback(
            (e) => {
                e.preventDefault(), G();
            },
            [G],
        ),
        z = s.useCallback(() => {
            null == i || b || (j(!0), i());
        }, [i, b]),
        X = s.useCallback(
            (e) => {
                if ("Escape" === e.key && n && null != i && !b) {
                    e.preventDefault(), e.stopPropagation(), z();
                    return;
                }
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != d && (e.preventDefault(), d());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), G());
            },
            [G, d, n, i, b, z],
        ),
        q = s.useCallback(
            (e) => {
                if (!t) return;
                let n = Array.from(e.clipboardData.files);
                0 !== n.length && (e.preventDefault(), I(n));
            },
            [t, I],
        ),
        K = s.useCallback(
            (e) => {
                e.preventDefault(), x(!1), t && I(Array.from(e.dataTransfer.files));
            },
            [t, I],
        ),
        Y = s.useCallback((e) => {
            e.dataTransfer.types.includes("Files") && (e.preventDefault(), x(!0));
        }, []),
        Z = s.useCallback(
            (e) => {
                I(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = "");
            },
            [I],
        );
    return (0, a.jsxs)("form", {
        onSubmit: H,
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
                    (0, a.jsx)(D.m, {
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
                    (0, a.jsx)(D.m, {
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
                        onKeyDown: X,
                        onPaste: q,
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
                            n && null != i
                                ? (0, a.jsx)(D.m, {
                                      text: R.intl.string(T.default.KdgI4k),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)("button", {
                                          type: "button",
                                          className: ee.AW,
                                          disabled: b,
                                          onClick: z,
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
                                children: (0, a.jsx)(W.SendMessageIcon, {
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
                children: (0, a.jsx)(z.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
n(134528), n(947204);
var ea = n(320448),
    es = n(847374),
    ei = n(46054),
    er = n(443865),
    eo = n(843614);
function ec(e) {
    let { idea: t, onPick: n } = e,
        l = s.useId(),
        i = null == n;
    return (0, a.jsxs)(q.D, {
        className: i ? `${eo.Nr} ${eo.xe}` : eo.Nr,
        onClick: i ? void 0 : () => n(t),
        "aria-label": R.intl.formatToPlainString(T.default.pztRGi, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : l,
        "aria-disabled": i,
        children: [
            (0, a.jsx)(h.E, {
                tag: "div",
                variant: "text-sm/semibold",
                color: "none",
                className: eo.JJ,
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
function ed(e) {
    let { ideas: t, onPick: n } = e;
    return (0, a.jsxs)("section", {
        className: eo.kR,
        "data-vibegrations-idea-cards": !0,
        children: [
            (0, a.jsxs)("div", {
                className: eo.wx,
                children: [
                    (0, a.jsx)(er.LightbulbIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                    (0, a.jsx)(h.E, {
                        tag: "span",
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        children: R.intl.string(T.default.DAvYsi),
                    }),
                ],
            }),
            t.map((e) => (0, a.jsx)(ec, { idea: e, onPick: n }, e.id)),
        ],
    });
}
function eu(e) {
    let { onAsk: t } = e;
    return (0, a.jsxs)("div", {
        className: eo.x,
        children: [
            (0, a.jsx)(h.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tag: "span",
                className: eo.I1,
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
var eh = n(256905),
    em = n(289149);
function ep(e) {
    let { projectId: t, attachments: n } = e,
        l = n.filter(ef);
    return (0, a.jsx)("div", {
        className: em.KT,
        children: n.map((e, n) =>
            null == e.id
                ? (0, a.jsx)(eg, { name: e.name }, n)
                : ef(e)
                  ? (0, a.jsx)(ev, { projectId: t, viewableImages: l, viewerIndex: l.indexOf(e) }, n)
                  : (0, a.jsx)(ex, { projectId: t, id: e.id, name: e.name }, n),
        ),
    });
}
function ef(e) {
    return null != e.id && $.Wb.has(e.content_type);
}
function eg(e) {
    let { name: t, unavailable: n = !1 } = e,
        l = n ? R.intl.formatToPlainString(T.default.OBr7WW, { name: t }) : t;
    return (0, a.jsx)(J, { name: l, compact: !0 });
}
function ex(e) {
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
        ? (0, a.jsx)(eg, { name: l, unavailable: !0 })
        : (0, a.jsx)(Q, {
              name: l,
              thumbSrc: null,
              ariaLabel: R.intl.formatToPlainString(T.default.gV5YcR, { name: l }),
              onClick: c,
          });
}
function ev(e) {
    let { projectId: t, viewableImages: n, viewerIndex: l } = e,
        { id: i, name: r } = n[l],
        [c, d] = s.useState(null),
        [u, h] = s.useState(!1);
    s.useEffect(() => {
        let e = !1;
        return (
            Promise.all([(0, o.n6)(t, i), (0, o.PK)(t, i)]).then(
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
    }, [t, i]);
    let m = s.useCallback(() => {
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
                  (0, eh.R)({
                      items: e.filter((e) => "string" != typeof e),
                      startingIndex: e.slice(0, l).filter((e) => "string" != typeof e).length,
                      shouldHideMediaOptions: !0,
                      location: "VibegrationsChat",
                  });
        });
    }, [t, n, l]);
    return u
        ? (0, a.jsx)(eg, { name: r, unavailable: !0 })
        : (0, a.jsx)(Q, {
              name: r,
              thumbSrc: c,
              ariaLabel: R.intl.formatToPlainString(T.default.QUFLUq, { name: r }),
              onClick: m,
              onThumbError: () => {
                  d(null),
                      (0, o.n6)(t, i).then(
                          (e) => {
                              e || h(!0);
                          },
                          () => {},
                      );
              },
          });
}
var ek = n(84206);
function eb(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsxs)("section", {
              className: ek.hb,
              children: [
                  (0, a.jsx)(h.E, { variant: "text-xs/semibold", color: "text-muted", tag: "span", children: t }),
                  (0, a.jsx)("div", {
                      className: ek.Hu,
                      children: n.map((e) =>
                          (0, a.jsx)(
                              "span",
                              {
                                  className: ek.uR,
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
function ej(e) {
    let { proposal: t, onApprove: n } = e;
    return (0, a.jsxs)("article", {
        className: ek.cz,
        "data-vibegrations-plan-card": !0,
        children: [
            (0, a.jsxs)("header", {
                className: ek.pu,
                children: [
                    (0, a.jsx)(h.E, {
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        tag: "span",
                        children: R.intl.string(T.default["60htw+"]),
                    }),
                    !0 === t.is_activity
                        ? (0, a.jsx)("span", {
                              className: ek.dr,
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
                      className: ek.hb,
                      children: [
                          (0, a.jsx)(h.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: R.intl.string(T.default.KLyB8Y),
                          }),
                          (0, a.jsx)("ul", {
                              className: ek.eQ,
                              children: t.changes.map((e, t) =>
                                  (0, a.jsxs)(
                                      "li",
                                      {
                                          className: ek.H6,
                                          children: [
                                              (0, a.jsx)(h.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  className: ek.UZ,
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
                      className: ek.hb,
                      children: [
                          (0, a.jsx)(h.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: R.intl.string(R.t["0hKkS+"]),
                          }),
                          (0, a.jsx)("ul", {
                              className: ek.eQ,
                              children: t.commands.map((e, t) =>
                                  (0, a.jsxs)(
                                      "li",
                                      {
                                          className: ek.Xs,
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
            (0, a.jsx)(eb, { label: R.intl.string(T.default.ieqTtP), names: t.bot_permissions ?? [] }),
            (0, a.jsx)(eb, { label: R.intl.string(T.default.Cn9qix), names: t.privileged_intents ?? [] }),
            null != n
                ? (0, a.jsxs)("div", {
                      className: ek.nc,
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
                              className: ek.sw,
                              children: "or reply to keep refining",
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var ey = n(192308),
    e_ = n(46958);
function eN(e) {
    let { projectId: t, request: l } = e,
        i = s.useCallback(() => {
            (0, ey.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("625084"), n.e("468421")]).then(n.bind(n, 539620));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: l });
            });
        }, [t, l]);
    return (0, a.jsxs)("article", {
        className: e_.Lo,
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
                className: e_.cS,
                children: [
                    l.fields.map((e) =>
                        (0, a.jsx)(
                            "span",
                            {
                                className: e_.$H,
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
                              className: e_.$H,
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
                className: e_.sq,
                children: (0, a.jsx)(d.$, {
                    variant: "secondary",
                    size: "sm",
                    onClick: i,
                    text: R.intl.string(T.default["gVV+HX"]),
                }),
            }),
        ],
    });
}
var eE = n(700766);
function ew(e) {
    var t;
    let { projectId: n, group: l } = e,
        [i, r] = s.useState(!1),
        o = s.useId(),
        c = s.useCallback(() => r((e) => !e), []),
        d =
            "error" === (t = l.step.kind) || "terminal_error" === t || "build_error" === t
                ? "text-feedback-critical"
                : "text-default",
        u = null != n ? l.screenshots : [];
    if (0 === l.technical.length && 0 === u.length)
        return (0, a.jsx)("li", {
            "data-step-kind": l.step.kind,
            className: eE.Dx,
            children: (0, a.jsx)(h.E, {
                tag: "div",
                variant: "text-sm/normal",
                color: d,
                selectable: !0,
                className: eE.iq,
                children: l.summary,
            }),
        });
    let m = i ? es.a : ea._;
    return (0, a.jsxs)("li", {
        "data-step-kind": l.step.kind,
        className: eE.Dx,
        children: [
            (0, a.jsxs)(q.D, {
                tag: "div",
                className: eE.kG,
                "aria-expanded": i,
                "aria-controls": o,
                "aria-label": R.intl.formatToPlainString(T.default.z4KWsN, { step: l.summary }),
                onClick: c,
                children: [
                    (0, a.jsx)(h.E, {
                        tag: "span",
                        variant: "text-sm/normal",
                        color: d,
                        className: eE.iq,
                        children: l.summary,
                    }),
                    (0, a.jsx)(m, { size: "xs", color: "currentColor", className: eE.Ue }),
                ],
            }),
            (0, a.jsxs)("div", {
                id: o,
                hidden: !i,
                className: eE.yJ,
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
                              className: eE.y8,
                              children: u.map((e) => (0, a.jsx)(eA, { projectId: n, screenshotId: e }, e)),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function eS() {}
function eA(e) {
    let { projectId: t, screenshotId: n } = e,
        [l, i] = s.useState(null),
        [r, c] = s.useState(!1);
    s.useEffect(() => {
        let e = !1;
        return (
            (0, o.aF)(t, n).then(
                (t) => {
                    e || i(t);
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
        u = s.useCallback(() => {
            (0, o.aF)(t, n).then((e) => {
                (0, eh.R)({
                    items: [{ type: "IMAGE", url: e, alt: d }],
                    startingIndex: 0,
                    shouldHideMediaOptions: !0,
                    location: "VibegrationsChat",
                });
            }, eS);
        }, [t, n, d]);
    return r ? null : (0, a.jsx)(Q, { name: d, thumbSrc: l, ariaLabel: d, onClick: u, onThumbError: () => c(!0) });
}
var eI = n(820081),
    eC = n(590223);
function eT(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", {
        className: eC.Vn,
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
        children: "completed" === t ? (0, a.jsx)(eI.B, { size: "xxs", color: "currentColor" }) : null,
    });
}
function eR(e) {
    return { completed: e.filter((e) => "completed" === e.status).length, total: e.length };
}
function eP(e) {
    let { todos: t, provisional: n } = e;
    return (0, a.jsxs)("ul", {
        className: eC.zR,
        children: [
            t.map((e) =>
                (0, a.jsxs)(
                    "li",
                    {
                        className: eC.qN,
                        "data-status": e.status,
                        children: [
                            (0, a.jsx)(eT, { status: e.status }),
                            (0, a.jsx)(h.E, {
                                variant: "text-sm/normal",
                                color: "completed" === e.status ? "text-muted" : "text-default",
                                tag: "span",
                                className: eC.ku,
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
                      className: eC.qN,
                      "data-status": "pending",
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(eT, { status: "pending" }),
                          (0, a.jsx)(h.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              tag: "span",
                              className: eC.ku,
                              selectable: !0,
                              children: n,
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function eO(e) {
    let { todos: t, provisional: n, announceProgress: l = !0 } = e,
        { completed: s, total: i } = eR(t);
    return 0 === i
        ? null
        : (0, a.jsxs)("article", {
              className: eC.Rx,
              "data-vibegrations-todo-card": !0,
              children: [
                  (0, a.jsxs)("header", {
                      className: eC.Ye,
                      children: [
                          (0, a.jsx)(h.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: R.intl.string(T.default.qCRC6c),
                          }),
                          (0, a.jsx)("span", {
                              className: eC.mA,
                              ...(l
                                  ? {
                                        role: "status",
                                        "aria-live": "polite",
                                        "aria-label": R.intl.formatToPlainString(T.default["QG/EiF"], {
                                            completed: s,
                                            total: i,
                                        }),
                                    }
                                  : null),
                              children: (0, a.jsx)(h.E, {
                                  variant: "text-xs/medium",
                                  color: "text-muted",
                                  tag: "span",
                                  children: R.intl.formatToPlainString(T.default.bQvqly, { completed: s, total: i }),
                              }),
                          }),
                      ],
                  }),
                  (0, a.jsx)(eP, { todos: t, provisional: n }),
              ],
          });
}
let eM = new Set([
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
function eL(e) {
    return "running" === e;
}
function eG(e) {
    return "writing_command" === e.kind && (null == e.friendly || "" === e.friendly);
}
function eH(e) {
    let { inheritedSummary: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = [],
        l = [],
        a = null;
    for (let s of e) {
        let e;
        if ("preview_screenshot" === s.kind) {
            let e =
                "preview_screenshot" === s.kind && null != s.screenshot_id && "" !== s.screenshot_id
                    ? [s.screenshot_id]
                    : [];
            null != a ? a.screenshots.push(...e) : l.push(...e);
            continue;
        }
        "healthchecking" === s.kind && ((l = []), (a = null)), "healthcheck_failed" === s.kind && (l = []);
        let i = (function (e) {
                let t = [];
                return (
                    null != e.name && "" !== e.name && t.push(e.name),
                    null != e.detail && "" !== e.detail && t.push(e.detail),
                    null != e.message && "" !== e.message && t.push(e.message),
                    null != e.stderr_tail && "" !== e.stderr_tail && t.push(e.stderr_tail),
                    t
                );
            })(s),
            r = n[n.length - 1];
        if (eG(s) && null != r) {
            r.technical.push(...i);
            continue;
        }
        if (eG(s) && null == r && null != t) {
            n.push({ step: s, summary: t, technical: i.filter((e) => e !== t), screenshots: [] });
            continue;
        }
        let o = eD(s),
            c = i.filter((e) => e !== o);
        null != r && r.summary === o
            ? (r.technical.push(...c), (e = r))
            : ((e = { step: s, summary: o, technical: c, screenshots: [] }), n.push(e)),
            "healthcheck_passed" === s.kind && (e.screenshots.push(...l.splice(0)), (a = e));
    }
    return n;
}
function eD(e) {
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
var eB = n(282878);
function eU(e) {
    let { task: t } = e,
        [n, l] = s.useState(null),
        i = s.useId(),
        r = t.groups.length > 0 || (null != t.detail && "" !== t.detail),
        o = r && (n ?? "failed" === t.state),
        c = s.useCallback(() => l(!o), [o]),
        d = eL(t.state),
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
        m = o ? es.a : ea._,
        p = "failed" === t.state,
        f = p ? u : d ? (o ? void 0 : t.latestActivity) : r ? void 0 : u,
        g = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)("span", {
                    className: eB.uJ,
                    children: [
                        (0, a.jsx)(h.E, {
                            tag: "span",
                            variant: "text-sm/normal",
                            color: "text-default",
                            className: eB.QC,
                            children: t.title,
                        }),
                        r ? (0, a.jsx)(m, { size: "xs", color: "currentColor", className: eB.bu }) : null,
                    ],
                }),
                null != f && "" !== f
                    ? (0, a.jsx)(h.E, {
                          tag: "span",
                          variant: "text-xs/normal",
                          color: p ? "text-feedback-critical" : "text-muted",
                          className: eB.hE,
                          children: f,
                      })
                    : null,
            ],
        });
    return (0, a.jsxs)("li", {
        className: eB.ot,
        "data-task-state": t.state,
        children: [
            r
                ? (0, a.jsx)(q.D, {
                      tag: "div",
                      className: A()(eB.qI, eB.EZ),
                      "aria-expanded": o,
                      "aria-controls": i,
                      "aria-label": R.intl.formatToPlainString(T.default.SxMgMJ, { title: t.title, state: u }),
                      onClick: c,
                      children: g,
                  })
                : (0, a.jsx)("div", { className: eB.qI, children: g }),
            r
                ? (0, a.jsxs)("div", {
                      id: i,
                      hidden: !o,
                      className: eB.yd,
                      children: [
                          t.groups.length > 0
                              ? (0, a.jsx)("ol", {
                                    className: eB.x7,
                                    children: t.groups.map((e, t) => (0, a.jsx)(ew, { group: e }, t)),
                                })
                              : null,
                          null != t.detail && "" !== t.detail
                              ? (0, a.jsx)(h.E, {
                                    tag: "div",
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    selectable: !0,
                                    className: eB.Tb,
                                    children: t.detail,
                                })
                              : null,
                      ],
                  })
                : null,
        ],
    });
}
var eV = n(692228),
    eF = n(742715);
function eW(e) {
    let { projectId: t, item: n, attachments: l } = e,
        [i, r] = s.useState(!1),
        o = s.useId(),
        c = s.useCallback(() => r((e) => !e), []),
        d = null != n.label && "" !== n.label,
        u = i ? ea._ : es.a,
        m = (0, a.jsx)(a.Fragment, {
            children: n.blocks.map((e) =>
                "rows" === e.type
                    ? (0, a.jsx)(
                          "ol",
                          {
                              className: eE.dO,
                              children: e.groups.map((e, n) => (0, a.jsx)(ew, { projectId: t, group: e }, n)),
                          },
                          e.key,
                      )
                    : (0, a.jsx)(
                          "ol",
                          { className: eE.On, children: e.tasks.map((e) => (0, a.jsx)(eU, { task: e }, e.taskId)) },
                          e.key,
                      ),
            ),
        });
    return d
        ? (0, a.jsxs)("li", {
              className: A()(eE.ky, eV.XR, eE.rn),
              children: [
                  (0, a.jsxs)(q.D, {
                      tag: "div",
                      className: eE.rN,
                      "aria-expanded": !i,
                      "aria-controls": o,
                      "aria-label": R.intl.formatToPlainString(T.default.s1wx5H, { activity: n.label }),
                      onClick: c,
                      children: [
                          (0, a.jsx)(h.E, {
                              tag: "span",
                              variant: "text-sm/normal",
                              color: "text-default",
                              className: eE.zN,
                              children: n.label,
                          }),
                          (0, a.jsx)(u, { size: "xs", color: "currentColor", className: eE.cZ }),
                      ],
                  }),
                  (0, a.jsx)("div", { id: o, hidden: i, className: eE.MZ, children: m }),
                  l,
              ],
          })
        : (0, a.jsxs)("li", { className: A()(eE.ky, eV.XR, eE.rn), children: [m, l] });
}
function ez(e) {
    let {
            projectId: t,
            steps: n,
            announcement: l,
            content: i,
            proposal: r,
            interrupted: o = !1,
            provisionalTodo: c,
            active: d = !1,
            todos: u,
            onApprove: m,
            ideas: p,
            attachments: f,
            secretRequest: g,
            onPickIdea: x,
            offerIdeas: v,
            onAskForIdeas: k,
            inheritedActivity: b,
        } = e,
        { items: j } = s.useMemo(
            () =>
                (function (e) {
                    let t,
                        { turnActive: n = !0, inheritedSummary: l } =
                            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        a = [],
                        s = new Map(),
                        i = [],
                        r = null,
                        o = null,
                        c = null,
                        d = null,
                        u = [],
                        h = null,
                        m = l;
                    function p() {
                        null != d && (d.groups = eH(u, { inheritedSummary: t })), (d = null), (u = []);
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
                                    l = s.get(n);
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
                                    s.set(n, d),
                                    i.push(d),
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
                            if (eM.has(l.kind)) continue;
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
                        if (eM.has(l.kind)) continue;
                        let e = g(n);
                        (r = null),
                            (h = null),
                            null == d &&
                                ((d = { type: "rows", key: `rows-${n}`, groups: [] }), (t = m), e.blocks.push(d)),
                            u.push(l),
                            eG(l) || (m = eD(l));
                    }
                    for (let e of (p(), i)) {
                        e.groups = eH(e.rawSteps);
                        let t = e.groups[e.groups.length - 1]?.summary;
                        null != t && (e.latestActivity = t), !n && eL(e.state) && (e.state = "incomplete");
                    }
                    return { items: a, tasks: i };
                })(n, { turnActive: d, inheritedSummary: b }),
            [n, d, b],
        ),
        y = j.some((e) => "note" === e.type),
        _ = j.some((e) => "todos" === e.type),
        N = j.at(-1),
        E = N?.type === "message" && N.content.trim() === i.trim(),
        w = null == r && "" !== i && !E,
        S = (function (e) {
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
        })({ hasAttachments: null != f && f.length > 0, showsClosingMessage: w, lastItemType: N?.type }),
        I = null == f ? null : (0, a.jsx)(ep, { projectId: t, attachments: f }),
        C = null == I ? null : (0, a.jsx)("div", { className: eE.MT, children: I });
    return (0, a.jsxs)("div", {
        className: eE.ue,
        children: [
            null == l || "" === l || y
                ? null
                : (0, a.jsx)(h.E, {
                      tag: "div",
                      variant: "text-sm/normal",
                      color: "text-default",
                      selectable: !0,
                      className: A()(eE.ky, eE.Xt, eV.XR),
                      children: l,
                  }),
            null != u && u.length > 0 && !_
                ? (0, a.jsx)("div", {
                      className: A()(eE.ky, eV.XR),
                      children: (0, a.jsx)(eO, { todos: u, provisional: c }),
                  })
                : null,
            j.length > 0
                ? (0, a.jsx)("ol", {
                      className: eE.dO,
                      children: j.map((e) =>
                          "message" === e.type
                              ? (0, a.jsxs)(
                                    "li",
                                    {
                                        className: A()(eE.ky, eV.XR),
                                        children: [
                                            (0, a.jsx)("div", {
                                                className: A()(eF.PT, eE.cW),
                                                children: ei.A.parse(e.content, !0, {
                                                    allowList: !0,
                                                    allowHeading: !0,
                                                    allowLinks: !0,
                                                }),
                                            }),
                                            "streamed" === S && e.key === N?.key ? C : null,
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
                                          className: A()(eE.ky, eE.Xt, eV.XR),
                                          children: e.content,
                                      },
                                      e.key,
                                  )
                                : "todos" === e.type
                                  ? (0, a.jsx)(
                                        "li",
                                        {
                                            className: A()(eE.ky, eV.XR),
                                            children: (0, a.jsx)(eO, { todos: e.todos, provisional: c }),
                                        },
                                        e.key,
                                    )
                                  : (0, a.jsx)(
                                        eW,
                                        {
                                            projectId: t,
                                            item: e,
                                            attachments: "activity" === S && e.key === N?.key ? I : null,
                                        },
                                        e.key,
                                    ),
                      ),
                  })
                : null,
            null != r
                ? (0, a.jsx)("div", {
                      className: A()(eE.ky, eV.XR),
                      children: (0, a.jsx)(ej, { proposal: r, onApprove: m }),
                  })
                : w
                  ? (0, a.jsxs)("div", {
                        className: A()(eE.ky, eV.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: A()(eF.PT, eE.cW),
                                children: ei.A.parse(i, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === S ? C : null,
                            !0 === v
                                ? (0, a.jsx)("div", { className: eE.IN, children: (0, a.jsx)(eu, { onAsk: k }) })
                                : null,
                        ],
                    })
                  : null,
            null != g
                ? (0, a.jsx)("div", {
                      className: A()(eE.ky, eV.XR),
                      children: (0, a.jsx)(eN, { projectId: t, request: g }),
                  })
                : null,
            "standalone" === S ? (0, a.jsx)("div", { className: A()(eE.ky, eV.XR), children: C }) : null,
            null != p && p.length > 0
                ? (0, a.jsx)("div", { className: A()(eE.ky, eV.XR), children: (0, a.jsx)(ed, { ideas: p, onPick: x }) })
                : null,
            !0 !== v || w
                ? null
                : (0, a.jsx)("div", { className: A()(eE.ky, eV.XR), children: (0, a.jsx)(eu, { onAsk: k }) }),
            o
                ? (0, a.jsx)("div", {
                      className: A()(eE.ky, eV.XR),
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
let e$ = { steered: T.default.I9TkzD, queued: T.default.gbjY6o, restarting: T.default["1Q4Cs2"] };
function eX(e) {
    let { projectId: t, messages: n, onApprove: l, onPickIdea: s, onAskForIdeas: i } = e,
        r = n[n.length - 1];
    return (0, a.jsx)("ol", {
        className: em.x7,
        children: n.map((e, o) => {
            if ("user" === e.role)
                return (0, a.jsx)(
                    eq,
                    {
                        role: "user",
                        children: (0, a.jsxs)("div", {
                            className: A()(em.B2, eV.XR),
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
                                    ? (0, a.jsx)(ep, { projectId: t, attachments: e.attachments })
                                    : null,
                                null != e.disposition
                                    ? (0, a.jsx)(h.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          children: R.intl.string(e$[e.disposition]),
                                      })
                                    : null,
                            ],
                        }),
                    },
                    e.render_id,
                );
            let c = e.steps.filter((e) => !eM.has(e.kind)).length > 0,
                d = e.steps.some((e) => "assistant_delta" === e.kind && null != e.message && "" !== e.message),
                u = "plan_implemented" === e.kind && e === r;
            return "" !== e.content ||
                null != e.proposal ||
                null != e.ideas ||
                u ||
                c ||
                d ||
                null != e.announcement ||
                null != e.todos ||
                !0 === e.interrupted ||
                (e.attachments?.length ?? 0) !== 0
                ? (0, a.jsx)(
                      eq,
                      {
                          role: "assistant",
                          children: (0, a.jsx)(ez, {
                              projectId: t,
                              steps: e.steps,
                              announcement: e.announcement,
                              content: e.content,
                              proposal: e.proposal,
                              interrupted: !0 === e.interrupted,
                              provisionalTodo: e.provisionalTodo,
                              active: !(0, H.B)(e),
                              todos: e.todos,
                              onApprove: e === r ? l : void 0,
                              ideas: e.ideas,
                              attachments: e.attachments,
                              secretRequest: e.secretRequest,
                              onPickIdea: s,
                              offerIdeas: u,
                              onAskForIdeas: i,
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
                                                                !(eM.has(n.kind) || eG(n))
                                                            )
                                                                return eD(n);
                                                        }
                                                    })(t.steps)
                                                  : void 0;
                                      }
                              })(n, o),
                          }),
                      },
                      e.render_id,
                  )
                : null;
        }),
    });
}
function eq(e) {
    let { role: t, children: n } = e;
    return (0, a.jsx)("li", { "data-role": t, className: em.xk, children: n });
}
var eK = n(379307),
    eY = n(922016),
    eZ = n(863610),
    eJ = n(446892);
function eQ(e) {
    let { activity: t, id: n } = e,
        l = t?.text ?? "",
        i = s.useRef(null);
    return (
        s.useLayoutEffect(() => {
            i.current?.scrollToBottom();
        }, [l]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: eJ.jn,
            "data-vibegrations-thinking-panel": !0,
            children: (0, a.jsx)(G.Ch, {
                ref: i,
                className: eJ.Dq,
                "data-vibegrations-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: A()(eF.PT, eJ.bb),
                    children: ei.A.parse(l, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var e0 = n(249680);
function e1(e) {
    let { activity: t, compacting: n = !1 } = e,
        l = s.useRef(null),
        i = s.useId(),
        [r, o] = s.useState(null),
        c = null != t && "end" !== t.phase,
        d = n ? T.default["0vH/5G"] : c ? T.default.Ly7F7x : T.default.QDGuNS,
        u = null != t && "" !== t.text,
        m = t?.session ?? null,
        p = u && null != m && r === m,
        f = s.useCallback(() => {
            u && null != m && o((e) => (e === m ? null : m));
        }, [u, m]),
        g = s.useCallback(() => o(null), []);
    return (0, a.jsx)(eY.Y, {
        targetElementRef: l,
        position: "top",
        align: "left",
        shouldShow: p,
        onRequestClose: g,
        renderPopout: () => (0, a.jsx)(eQ, { id: i, activity: t }),
        children: () =>
            (0, a.jsxs)(q.D, {
                innerRef: l,
                className: A()(e0.h, u && e0.X),
                "aria-label": R.intl.string(T.default.SzdX35),
                "aria-expanded": p,
                "aria-describedby": p ? i : void 0,
                "data-vibegrations-thinking-trigger": !0,
                onClick: f,
                children: [
                    (0, a.jsx)(eZ.n, { dotRadius: 3.5, themed: !0 }),
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
var e2 = n(662546),
    e6 = n(173016);
function e5(e) {
    let { todos: t, provisional: n } = e;
    return (0, a.jsx)("div", {
        className: e6.B,
        role: "dialog",
        "aria-label": R.intl.string(T.default.qCRC6c),
        children: (0, a.jsx)(eO, { todos: t, provisional: n, announceProgress: !1 }),
    });
}
function e8(e) {
    let { todos: t, provisional: n } = e,
        l = s.useRef(null),
        { completed: i, total: r } = eR(t);
    return 0 === r
        ? null
        : (0, a.jsx)(eY.Y, {
              targetElementRef: l,
              position: "top",
              align: "right",
              renderPopout: () => (0, a.jsx)(e5, { todos: t, provisional: n }),
              children: (e) =>
                  (0, a.jsxs)(q.D, {
                      innerRef: l,
                      className: e6.T,
                      "aria-label": R.intl.formatToPlainString(T.default["QG/EiF"], { completed: i, total: r }),
                      ...e,
                      children: [
                          (0, a.jsx)(e2.O, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                          (0, a.jsx)(h.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "none",
                              children: R.intl.formatToPlainString(T.default["6zuiBa"], { completed: i, total: r }),
                          }),
                      ],
                  }),
          });
}
var e7 = n(885574),
    e4 = n(677175);
function e3(e) {
    return e.toLocaleString();
}
function e9(e) {
    let { label: t, usage: n } = e;
    return (0, a.jsxs)("div", {
        className: e4.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: e4.mf,
                children: [
                    (0, a.jsx)(h.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(h.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [e3((0, $.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(h.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    e3(n.input_tokens),
                    " in \xb7 ",
                    e3(n.output_tokens),
                    " out \xb7 ",
                    e3(n.cache_creation_input_tokens),
                    " cache write \xb7 ",
                    e3(n.cache_read_input_tokens),
                    " cache read",
                ],
            }),
        ],
    });
}
function te(e) {
    let { project: t } = e,
        n = (0, $.wV)(t.orchestrator, t.codegen);
    return (0, a.jsxs)("div", {
        className: e4.si,
        role: "dialog",
        "aria-label": R.intl.string(T.default["9yoLWZ"]),
        children: [
            (0, a.jsx)("div", {
                className: e4.Q$,
                children: (0, a.jsxs)("div", {
                    className: e4.mf,
                    children: [
                        (0, a.jsxs)(h.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [e3((0, $.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(h.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(e9, { label: R.intl.string(T.default.hk4jJr), usage: t.orchestrator }),
            (0, a.jsx)(e9, { label: R.intl.string(T.default.R9aduM), usage: t.codegen }),
            (0, a.jsxs)("div", {
                className: e4.mf,
                children: [
                    (0, a.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: R.intl.string(T.default["kILb+R"]),
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
function tt(e) {
    let { project: t } = e,
        n = s.useRef(null);
    return (0, a.jsx)(eY.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(te, { project: t }),
        children: (e) =>
            (0, a.jsx)(q.D, {
                innerRef: n,
                className: e4.Y$,
                "aria-label": R.intl.string(T.default.AWQ2ZV),
                ...e,
                children: (0, a.jsx)(e7.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var tn = n(154861);
function tl(e) {
    switch (e) {
        case "connecting":
            return R.intl.string(T.default.W7oyuf);
        case "failed":
            return R.intl.string(T.default.eE60xI);
        case "closed":
            return R.intl.string(T.default["yBmS+I"]);
    }
}
function ta(e) {
    let {
        thinking: t,
        thinkingActivity: n,
        compacting: l,
        todos: s,
        provisionalTodo: i,
        projectUsage: r,
        connState: o,
        modelSettings: c,
        onModelSettingsChange: d,
    } = e;
    return (0, a.jsxs)("div", {
        className: tn.jf,
        children: [
            (0, a.jsx)("div", {
                className: tn.Xx,
                role: "status",
                "aria-live": "polite",
                "data-vibegrations-activity": !0,
                children: t ? (0, a.jsx)(e1, { activity: n, compacting: l }) : null,
            }),
            null == c
                ? null
                : (0, a.jsx)(eK.A, { settings: c.settings, choices: c.choices, disabled: "open" !== o, onChange: d }),
            null == s || 0 === s.length ? null : (0, a.jsx)(e8, { todos: s, provisional: i }),
            null == r
                ? null
                : (0, a.jsxs)("span", {
                      className: tn.BP,
                      children: [
                          (0, a.jsx)(h.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": R.intl.formatToPlainString(T.default["7SZZvj"], {
                                  runes: (0, $.a7)(r.cost_usd),
                                  turns: r.turns,
                              }),
                              children: R.intl.formatToPlainString(T.default["4PFO2p"], {
                                  runes: (0, $.a7)(r.cost_usd).toLocaleString(),
                              }),
                          }),
                          (0, a.jsx)(tt, { project: r }),
                      ],
                  }),
            "open" === o
                ? null
                : (0, a.jsx)(h.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === o ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": R.intl.formatToPlainString(T.default.eDDdhB, { status: tl(o) }),
                      "data-vibegrations-conn": !0,
                      "data-state": o,
                      className: tn.XF,
                      children: tl(o),
                  }),
        ],
    });
}
var ts = n(506774),
    ti = n(651649),
    tr = n(670455);
let to = "shownVibegrationsFeedbackProjectIds";
var tc = n(104071);
function td(e) {
    let { projectId: t, onRegionCapture: l } = e,
        i = (0, x.bG)([H.A], () => H.A.getMessages(t), [t]),
        r = (0, x.bG)([o.Ay], () => o.Ay.getConnState(t), [t]),
        c = (0, x.bG)([H.A], () => H.A.getProjectUsage(t), [t]),
        d = (0, x.bG)([H.A], () => H.A.getThinkingActivity(t), [t]),
        u = (0, x.bG)([H.A], () => H.A.isCompacting(t), [t]),
        h = (0, x.bG)([o.Ay], () => o.Ay.getModelSettings(t), [t]),
        m = s.useRef(null),
        p = s.useRef(null),
        f = s.useRef(!0);
    s.useEffect(() => {
        f.current && p.current?.scrollToBottom();
    }, [i]);
    let g = s.useCallback(() => {
        let e = p.current;
        null != e && (f.current = 32 > e.getDistanceFromBottom());
    }, []);
    s.useLayoutEffect(() => {
        let e = m.current;
        if (null == e) return;
        let t = e.getBoundingClientRect().width,
            n = null,
            l = new ResizeObserver((l) => {
                let [a] = l,
                    s = a?.contentRect.width ?? e.getBoundingClientRect().width;
                s === t ||
                    ((t = s),
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
        s.useEffect(() => {
            (0, o.Hc)(t);
        }, [t]),
        s.useEffect(
            () => () =>
                (function (e) {
                    let t = H.A.getMessages(e).filter((e) => "assistant" === e.role && (0, H.B)(e)).length;
                    !(t < 3) &&
                        ((ts.w.get(to) ?? []).includes(e) ||
                            ti.A.possiblyShowFeedbackModal(tr.MW.VIBEGRATIONS, () => {
                                let l;
                                (l = ts.w.get(to) ?? []).includes(e) || ts.w.set(to, [...l, e]),
                                    (0, ey.openModalLazy)(async () => {
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
    let v = s.useCallback(
            (e, n) => {
                (0, o.dv)(t, e, n);
            },
            [t],
        ),
        k = s.useCallback(() => (0, o.fu)(t), [t]),
        b = s.useCallback((e) => v(e.implementation_prompt), [v]),
        j = s.useCallback(() => v(R.intl.string(T.default["3sTTBu"])), [v]),
        y = s.useCallback((e) => (0, o.XZ)(t, e), [t]),
        _ = s.useCallback((e) => (0, o.vX)(t, e), [t]),
        N = s.useCallback((e) => (0, o.Vm)(t, e), [t]),
        E = s.useCallback(() => v(R.intl.string(T.default.Jj8Ftb)), [v]),
        w = "open" === r,
        S = i[i.length - 1],
        A = null != S && "assistant" === S.role && null != S.proposal,
        I = null != S && "assistant" === S.role && !(0, H.B)(S),
        C = A && w ? E : void 0,
        P = I && S?.role === "assistant" ? S.todos : void 0,
        O = I && S?.role === "assistant" ? S.provisionalTodo : void 0;
    return (0, a.jsxs)("section", {
        ref: m,
        "data-vibegrations-chat": !0,
        className: tc.T,
        children: [
            (0, a.jsx)(G.Ch, {
                ref: p,
                onScroll: g,
                "data-vibegrations-chat-log": !0,
                className: tc.N,
                children: (0, a.jsx)(eX, {
                    projectId: t,
                    messages: i,
                    onApprove: C,
                    onPickIdea: w ? b : void 0,
                    onAskForIdeas: w ? j : void 0,
                }),
            }),
            (0, a.jsx)(ta, {
                thinking: I,
                thinkingActivity: d,
                compacting: u,
                todos: P,
                provisionalTodo: O,
                projectUsage: c,
                connState: r,
                modelSettings: h,
                onModelSettingsChange: y,
            }),
            (0, a.jsx)(en, {
                canSend: w,
                running: I,
                onSend: v,
                onInterrupt: w ? k : void 0,
                onUploadFile: _,
                onDeleteFile: N,
                onApprove: C,
                onRegionCapture: l,
            }),
        ],
    });
}
var tu = n(435558),
    th = n(661531),
    tm = n(602853),
    tp = n(517461),
    tf = n(761929),
    tg = n(552067);
function tx(e) {
    let { open: t, maxWidth: n, onWidthChange: l, children: i } = e,
        r = (0, tm.r)(th.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = s.useRef(null),
        [c, d] = (0, tp.V)("VibegrationsChatSidebarWidth", 460),
        [u, h] = s.useState(c ?? 460),
        m = (0, tu.clamp)(u, 360, n);
    s.useLayoutEffect(() => {
        l(t ? m + r : 0);
    }, [m, t, r, l]);
    let p = (0, tf.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: o,
            onElementResize: h,
            onElementResizeEnd: d,
            orientation: tf.R.HORIZONTAL_LEFT,
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
        className: tg.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: tg.Di, onPointerDown: f }),
            (0, a.jsx)("div", { ref: o, className: tg.kL, style: { width: m }, children: i }),
        ],
    });
}
var tv = n(333007),
    tk = n(638015);
function tb(e) {
    return {
        x: Math.min(e.startX, e.x),
        y: Math.min(e.startY, e.y),
        width: Math.abs(e.x - e.startX),
        height: Math.abs(e.y - e.startY),
    };
}
function tj(e) {
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
                    a = tb({ ...i, x: t.x, y: t.y });
                r(null), a.width < 8 && a.height < 8 ? l() : n(a);
            },
            [i, o, n, l],
        ),
        m = null == i ? null : tb(i);
    return (0, tv.createPortal)(
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("div", { className: tk.tB, role: "presentation", onPointerDown: l }),
                (0, a.jsx)("div", {
                    className: tk.aC,
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
                                  className: tk.F7,
                                  children: (0, a.jsx)("div", {
                                      className: tk.aK,
                                      children: (0, a.jsx)(h.E, {
                                          variant: "text-sm/medium",
                                          color: "text-default",
                                          children: R.intl.string(T.default.ydkvBR),
                                      }),
                                  }),
                              })
                            : (0, a.jsx)("div", {
                                  className: tk.r1,
                                  style: { left: m.x, top: m.y, width: m.width, height: m.height },
                              }),
                }),
            ],
        }),
        document.body,
    );
}
function ty(e) {
    let { projectId: t } = e,
        n = (0, x.bG)([H.A], () => H.A.isThinking(t), [t]);
    return (0, a.jsx)("div", { className: eV.MP, "data-active": n, "aria-hidden": !0 });
}
var t_ = n(280218),
    tN = n(171936),
    tE = n(291815);
function tw(e) {
    let { projectId: t, applicationId: n, surface: l, previewReady: r, content: o, sidebar: c } = e,
        [d, u] = s.useState(null),
        h = (0, i.A)(n, l),
        m = h?.id ?? null,
        [p, f] = s.useState(null);
    s.useEffect(() => {
        if (null != t) return (0, tN.mn)(t, () => (0, t_.F1)(d, m));
    }, [t, d, m]);
    let g = s.useCallback(() => {
            let e = (0, t_.F1)(d, m),
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
        x = s.useCallback(
            (e) => {
                f(null), null != p && (0, t_.su)(p.iframe, e).then(p.resolve, p.reject);
            },
            [p],
        ),
        v = s.useCallback(() => {
            f(null), p?.resolve(null);
        }, [p]),
        k = r && null != n && l.type === N.U4.MAIN;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", { ref: u, className: tE.fm, children: o }),
            c(k ? g : void 0),
            null != p ? (0, a.jsx)(tj, { targetRect: p.targetRect, onSelect: x, onCancel: v }) : null,
        ],
    });
}
function tS(e) {
    let { projectId: t, applicationId: n, surface: l, chatOpen: i, previewReady: c, previewGate: d } = e,
        u = s.useRef(null),
        [h, m] = s.useState(0);
    s.useLayoutEffect(() => {
        if (l.type === N.U4.MAIN) return (0, r.HV)(n), () => (0, r.HV)(null);
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
        f = i || l.type === N.U4.MAIN;
    return (0, a.jsx)("div", {
        ref: u,
        className: tE.LB,
        children: (0, a.jsx)(tw, {
            projectId: t,
            applicationId: n,
            surface: l,
            previewReady: c,
            content: (0, a.jsx)(L, { applicationId: n, surface: l, previewReady: c, previewGate: d }),
            sidebar: (e) =>
                null != t && f
                    ? (0, a.jsx)(tx, {
                          open: i,
                          maxWidth: p,
                          onWidthChange: r.Zq,
                          children: (0, a.jsxs)("div", {
                              className: tE.cO,
                              children: [
                                  (0, a.jsx)(ty, { projectId: t }),
                                  (0, a.jsx)(td, { projectId: t, onRegionCapture: e }, t),
                              ],
                          }),
                      })
                    : null,
        }),
    });
}
