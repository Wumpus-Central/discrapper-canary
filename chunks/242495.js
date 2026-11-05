n.d(t, { A: () => mB });
var l,
    r,
    i = n(477900),
    a = n(582128),
    s = n.t(a, 2),
    u = n(503698),
    o = n.n(u),
    c = n(855986),
    d = n(821609),
    f = n(478016),
    m = n(22231),
    h = n(604525),
    g = n(663417),
    p = n(70688),
    x = n(534514),
    v = n(834730),
    j = n(289873),
    b = n(534890),
    y = n(646270),
    k = n(31300),
    w = n(831453),
    A = n(646973),
    N = n(742589),
    S = n(723702),
    C = n(171691),
    I = n(314116),
    E = n(858899),
    _ = n(949757),
    M = n(800202),
    T = n(191850),
    R = n(792996),
    P = n(766367);
let L = new Set(),
    $ = null;
function q(e, t) {
    let n = a.useRef(t);
    (a.useLayoutEffect(() => {
        n.current = t;
    }),
        a.useEffect(() => {
            if (null == e) return;
            let t = (t) => {
                t === e && n.current();
            };
            return (
                L.add(t),
                () => {
                    L.delete(t);
                }
            );
        }, [e]));
}
var D = n(253932);
function F() {
    return D.Q_.useSetting() || !1;
}
var O = n(573083),
    G = n(57570),
    z = n(971079),
    U = n(61577),
    B = n(686507),
    K = n(192308),
    H = n(128761),
    V = n(503922),
    W = n(967008),
    X = n(227007),
    Q = n(398773),
    Z = n(735769),
    Y = n(513845),
    J = n(802905),
    ee = n(951178);
let et = { width: 320, height: 240 };
function en(e) {
    let t = e?.default_size;
    return null != t && Number.isFinite(t.width) && Number.isFinite(t.height) && t.width > 0 && t.height > 0 ? t : et;
}
function el(e, t) {
    let { width: n, height: l } = e;
    return null == n || null == l || n <= 0 || l <= 0 ? 1 : Math.min(1, n / t.width, l / t.height);
}
function er(e) {
    return en(e?.preview_overlay_widget ?? null);
}
var ei = n(855859),
    ea = n(238490),
    es = n(991690),
    eu = n(696645);
function eo(e) {
    return "frame" !== e.mode
        ? e.mode
        : null == e.appChannel
          ? `frame-${e.surface}`
          : `frame-${e.surface}-${e.appChannel}`;
}
function ec(e) {
    switch (e.mode) {
        case "frame":
            return null == e.appChannel
                ? (0, eu.X)(e.surface)
                : R.intl.formatToPlainString(T.default["6xVl+N"], {
                      surface: (0, eu.X)(e.surface),
                      channel: e.appChannel,
                  });
        case "widget":
            return R.intl.string(T.default.y5GiL1);
        case "overlay":
            return R.intl.string(T.default["2940LX"]);
        case "bot":
            return R.intl.string(T.default.tjpaGN);
    }
}
var ed = n(939398),
    ef = n(86147),
    em = n(729475),
    eh = n(91242),
    eg = n(156548),
    ep = n(869146),
    ex = n(475815),
    ev = n(652215),
    ej = n(165610);
function eb(e) {
    let { frame: t, controlProjectId: n } = e,
        l = (0, eg.cR)(t?.id ?? null),
        r = (0, O.Zv)(n),
        a = (0, c.bG)(
            [ep.A, eh.A],
            () => null != t && ep.A.getWindowOpen(ev.MLl.ACTIVITY_POPOUT) && eh.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, ej.x1)(t) || a || r) return null;
    let s = (0, eg.fl)(t.id);
    if (null == s || !(0, ex.Ub)(s)) return null;
    let u = R.intl.string(l ? R.t.Z7MyNB : R.t.OIDkcp);
    return (0, i.jsx)(N.A.Icon, {
        tooltip: u,
        icon: l ? ef.z : em.T,
        "aria-label": u,
        role: "switch",
        "aria-checked": l,
        selected: l,
        onClick: () => (0, eg.U8)(t.id),
    });
}
var ey = n(265872),
    ek = n(165862),
    ew = n(477782),
    eA = n(559106),
    eN = n(847374),
    eS = n(704745);
function eC(e) {
    let { targets: t, target: n, onChange: l } = e,
        [r, s] = a.useState(!1),
        u = null != n && t.length > 1;
    r && !u && s(!1);
    let o = a.useCallback(() => s(!1), []),
        c = a.useCallback(() => s((e) => !e), []),
        d = a.useRef(null);
    if (!u) return null;
    let f = R.intl.string(T.default.I2ucou);
    return (0, i.jsx)(ey.Y, {
        targetElementRef: d,
        shouldShow: r,
        onRequestClose: o,
        position: "bottom",
        align: "right",
        animation: ey.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, i.jsx)(ek.W, {
                "data-menu-migrated": !0,
                navId: "conjure-preview-target",
                "aria-label": f,
                onClose: r,
                onSelect: r,
                children: (0, i.jsx)(ew.rX, {
                    label: f,
                    children: t.map((e) => {
                        let t = eo(e);
                        return (0, i.jsx)(
                            ew.iD,
                            {
                                id: `preview-target-${t}`,
                                group: "conjure-preview-target",
                                label: ec(e),
                                checked: t === eo(n),
                                action: () => {
                                    (l(e), o());
                                },
                            },
                            t,
                        );
                    }),
                }),
            });
        },
        children: (e, t) => {
            let { onClick: l, ...r } = e,
                { isShown: a } = t;
            return (0, i.jsx)(eA.vN, {
                children: (0, i.jsxs)("button", {
                    ...r,
                    ref: d,
                    type: "button",
                    className: eS.h,
                    "aria-haspopup": "menu",
                    "aria-expanded": a,
                    onClick: c,
                    children: [
                        (0, i.jsx)(v.E, {
                            tag: "span",
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: R.intl.string(T.default["N+VA1J"]),
                        }),
                        (0, i.jsx)(v.E, {
                            tag: "span",
                            variant: "body-sm/medium",
                            color: "none",
                            lineClamp: 1,
                            children: ec(n),
                        }),
                        (0, i.jsx)(eN.a, { size: "xs", color: "currentColor" }),
                    ],
                }),
            });
        },
    });
}
var eI = n(27184),
    eE = n(627363),
    e_ = n(371169),
    eM = n(153207),
    eT = n(260498),
    eR = n(625180),
    eP = n(672929),
    eL = n(111534),
    e$ = n(754027),
    eq = n(174865),
    eD = n(753329),
    eF = n(457827),
    eO = n(540665),
    eG = n(722701),
    ez = n(962998),
    eU = n(826058),
    eB = n(719593),
    eK = n(536468),
    eH = n(95264),
    eV = n(616334),
    eW = n(789645),
    eX = n(812771),
    eQ = n(58736);
(n(743898), n(134528), n(947204));
var eZ = n(333007),
    eY = n(621466),
    eJ = n(775121),
    e0 = n(989145),
    e1 = n(866665),
    e2 = n(81369),
    e3 = n(826745),
    e4 = n(34595),
    e7 = n(470779);
function e5(e) {
    let {
            projectId: t,
            at: n,
            bounds: l,
            kind: r,
            value: s,
            onChange: u,
            onSubmit: c,
            onDismiss: d,
            canSubmit: f,
            closing: m,
            onUploadFile: h,
            anchor: g = "chip",
            allowAttachments: p = !0,
            placeholder: x,
            label: v,
        } = e,
        {
            drafts: j,
            addFiles: b,
            pasteFiles: y,
            removeDraft: k,
            settled: w,
            takeRefs: A,
        } = (0, e4.FM)({ projectId: t, surface: "design", onUploadFile: h }),
        N = a.useRef(null),
        S = (f || j.length > 0) && w && !m,
        C = a.useCallback(() => {
            if (!S) return;
            let e = A();
            c(e.length > 0 ? e : void 0);
        }, [S, A, c]),
        [I, E] = a.useState(!1);
    a.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => E(!0));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, []);
    let _ = a.useRef(null),
        [M, P] = a.useState(null);
    a.useLayoutEffect(() => {
        let e = _.current;
        if (null == e || "u" < typeof ResizeObserver) return;
        let t = new ResizeObserver(() => P({ height: e.offsetHeight }));
        return (t.observe(e), () => t.disconnect());
    }, []);
    let L = M?.height ?? 44,
        $ = l.left + 8,
        q = l.top + 8,
        D = Math.max(n.x, $),
        F = Math.min(Math.max("point" === g ? n.y : n.y + 32 + 4, q), Math.max(q, l.top + l.height - L - 8));
    return (0, i.jsxs)("div", {
        ref: _,
        className: o()(e7.M0, { [e7.ho]: I && !m, [e7.ET]: m }),
        style: { left: D, top: F },
        "data-testid": "conjure-design-compose-bar",
        children: [
            p
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)("input", {
                              ref: N,
                              type: "file",
                              multiple: !0,
                              className: e7.Fg,
                              tabIndex: -1,
                              "aria-hidden": !0,
                              onChange: (e) => {
                                  (b(Array.from(e.target.files ?? [])), (e.target.value = ""));
                              },
                          }),
                          (0, i.jsx)(e1.m, {
                              position: "bottom",
                              text: R.intl.string(T.default.lgvqSB),
                              ariaHidden: !0,
                              children: (0, i.jsx)("button", {
                                  type: "button",
                                  className: e7.tY,
                                  onClick: () => N.current?.click(),
                                  "aria-label": R.intl.string(T.default.lgvqSB),
                                  children: (0, i.jsx)(e2.H, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: e7.WW,
                                  }),
                              }),
                          }),
                      ],
                  })
                : null,
            (0, i.jsx)(e3.y, {
                autoFocus: !0,
                rows: 1,
                className: e7.hF,
                value: s,
                placeholder: x ?? ("" === r ? R.intl.string(T.default.MPPV1Q) : `Edit ${r}`),
                "aria-label": v ?? R.intl.string(T.default.KCYqWL),
                onChange: (e) => u(e.target.value),
                onPaste: m || !p ? void 0 : y,
                onKeyDown: (e) => {
                    if ("Escape" === e.key) {
                        (e.preventDefault(), e.stopPropagation(), d());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), C());
                },
            }),
            j.length > 0
                ? (0, i.jsx)("div", {
                      className: e7.ZO,
                      children: j.map((e) => (0, i.jsx)(e4.Nl, { draft: e, onRemove: k }, e.localId)),
                  })
                : null,
        ],
    });
}
function e9(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function e8(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function e6(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [n, l] = a.useState(() => (t ? e9(e()) : null));
    return (
        a.useEffect(() => {
            if (!t) return;
            function n() {
                let t = e9(e());
                l((e) => (e8(e, t) ? e : t));
            }
            n();
            let r = window.setInterval(n, 250);
            return (
                window.addEventListener("resize", n),
                () => {
                    (window.clearInterval(r), window.removeEventListener("resize", n));
                }
            );
        }, [t, e]),
        n
    );
}
var te = n(46676),
    tt = n(876798),
    tn = n(408278),
    tl = n(48507),
    tr = n(193885),
    ti = n(744898),
    ta = n(803656),
    ts = n(241326),
    tu = n(972213),
    to = n(646514);
function tc(e) {
    return e.resolve({ saturation: 1 }).hex();
}
function td(e, t, n) {
    return {
        id: e,
        value: t,
        label: n,
        icon: function (e) {
            let { colorClass: n } = e;
            return (0, i.jsx)("svg", {
                className: n,
                width: 20,
                height: 20,
                viewBox: "0 0 24 24",
                "aria-hidden": !0,
                children: (0, i.jsx)("circle", {
                    cx: 12,
                    cy: 12,
                    r: 8,
                    fill: t,
                    stroke: "currentColor",
                    strokeWidth: 1.5,
                }),
            });
        },
    };
}
let tf = td("red", tc(to.A.unsafe_rawColors.RED_400), () => R.intl.string(T.default.tvXfjt)),
    tm = [
        tf,
        td("yellow", tc(to.A.unsafe_rawColors.YELLOW_300), () => R.intl.string(T.default.FYuaJ1)),
        td("green", tc(to.A.unsafe_rawColors.GREEN_360), () => R.intl.string(T.default["Vv+paS"])),
        td("blue", tc(to.A.unsafe_rawColors.BLUE_345), () => R.intl.string(T.default.k9b1QJ)),
        td("white", tc(to.A.unsafe_rawColors.WHITE), () => R.intl.string(T.default["1sOXwH"])),
    ];
function th(e) {
    return tm.find((t) => t.id === e) ?? tf;
}
var tg = n(39416);
function tp(e) {
    let { colorClass: t } = e;
    return (0, i.jsx)("svg", {
        className: t,
        width: 20,
        height: 20,
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": !0,
        children: (0, i.jsx)("path", {
            d: "M12 3v18M3 12h18M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3",
            stroke: "currentColor",
            strokeWidth: 1.8,
            strokeLinecap: "round",
            strokeLinejoin: "round",
        }),
    });
}
function tx(e) {
    let { colorClass: t } = e;
    return (0, i.jsxs)("svg", {
        className: t,
        width: 20,
        height: 20,
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": !0,
        children: [
            (0, i.jsx)("path", {
                d: "M10 4H5.5A1.5 1.5 0 0 0 4 5.5V10M4 14v4.5A1.5 1.5 0 0 0 5.5 20H10M14 4h4.5A1.5 1.5 0 0 1 20 5.5V10",
                stroke: "currentColor",
                strokeWidth: 1.8,
                strokeLinecap: "round",
            }),
            (0, i.jsx)("path", { d: "M13 13v8l2.3-2.2 1.6 3.2 1.6-.8-1.6-3.1 3.1-.1L13 13Z", fill: "currentColor" }),
        ],
    });
}
function tv(e) {
    let { colorClass: t } = e;
    return (0, i.jsx)("svg", {
        className: t,
        width: 20,
        height: 20,
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": !0,
        children: (0, i.jsx)("path", {
            d: "M14.5 4.5 20 10l-8.5 8.5H7L4 15.5a1.5 1.5 0 0 1 0-2.1L14.5 4.5ZM9.5 9.5l5.5 5.5M7 18.5h13",
            stroke: "currentColor",
            strokeWidth: 1.8,
            strokeLinejoin: "round",
        }),
    });
}
function tj(e) {
    return function (t) {
        let { colorClass: n } = t;
        return (0, i.jsx)("svg", {
            className: n,
            width: 20,
            height: 20,
            viewBox: "0 0 24 24",
            "aria-hidden": !0,
            children: (0, i.jsx)("circle", { cx: 12, cy: 12, r: e / 2, fill: "currentColor" }),
        });
    };
}
let tb = C.ck.map((e) => tj(Math.min(16, e + 3))),
    ty = C.Cw.map((e) => tj(Math.min(16, e / 2.5))),
    tk = [T.default.jZtZUr, T.default.cTQdD0, T.default.J3ucEg],
    tw = {
        circle: {
            icon: function (e) {
                let { colorClass: t } = e;
                return (0, i.jsx)("svg", {
                    className: t,
                    width: 20,
                    height: 20,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    "aria-hidden": !0,
                    children: (0, i.jsx)("circle", { cx: 12, cy: 12, r: 8, stroke: "currentColor", strokeWidth: 2 }),
                });
            },
            label: () => R.intl.string(T.default.oIZQbm),
        },
        square: {
            icon: function (e) {
                let { colorClass: t } = e;
                return (0, i.jsx)("svg", {
                    className: t,
                    width: 20,
                    height: 20,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    "aria-hidden": !0,
                    children: (0, i.jsx)("rect", {
                        x: 5,
                        y: 5,
                        width: 14,
                        height: 14,
                        rx: 1.5,
                        stroke: "currentColor",
                        strokeWidth: 2,
                    }),
                });
            },
            label: () => R.intl.string(T.default.ARNVr7),
        },
    };
function tA(e) {
    let { icon: t, label: n, pressed: l, onClick: r } = e;
    return (0, i.jsx)(e1.m, {
        text: n,
        position: "left",
        children: (0, i.jsx)("span", {
            className: tg.z6,
            "data-active": l ? "" : void 0,
            children: (0, i.jsx)(tt.k, {
                icon: t,
                size: "sm",
                variant: "icon-only",
                pressed: l,
                "aria-label": n,
                onClick: r,
            }),
        }),
    });
}
function tN(e) {
    let { icon: t, label: n, disabled: l, onClick: r } = e;
    return (0, i.jsx)(e1.m, {
        text: n,
        position: "left",
        children: (0, i.jsx)(tn.K, {
            icon: t,
            size: "sm",
            variant: "icon-only",
            disabled: l,
            "aria-label": n,
            onClick: r,
        }),
    });
}
function tS(e) {
    let { label: t, trigger: n, children: l, direction: r } = e,
        [s, u] = a.useState(!1),
        o = a.useCallback(() => u(!1), []),
        c = a.useCallback(() => u((e) => !e), []);
    return (0, i.jsxs)("div", {
        className: tg.pr,
        onMouseEnter: () => u(!0),
        onMouseLeave: o,
        children: [
            n(c),
            s
                ? (0, i.jsx)("div", {
                      className: tg.mz,
                      "data-direction": r,
                      role: "group",
                      "aria-label": t,
                      children: l(o),
                  })
                : null,
        ],
    });
}
function tC(e) {
    let { projectId: t, state: n, onExit: l, onUndo: r, onRedo: a, onClear: s } = e,
        { tool: u, lastShape: o, markerSize: c, eraserSize: d, history: f } = n,
        m = th(n.colorId);
    function h(e) {
        return (0, C.rC)(t, e);
    }
    let g = tw[o],
        p = R.intl.string(T.default.hUm825),
        x = R.intl.string(T.default.n5IA3a),
        v = R.intl.string(T.default.r5dX6t),
        j = R.intl.string(T.default.VfYqDq);
    return (0, i.jsxs)("div", {
        className: tg.t$,
        children: [
            (0, i.jsx)("div", {
                className: tg.NT,
                children: (0, i.jsx)(tA, {
                    icon: tx,
                    label: R.intl.string(T.default.YtyKcM),
                    pressed: "pick" === u,
                    onClick: () => h("pick"),
                }),
            }),
            (0, i.jsxs)("div", {
                className: tg.H$,
                role: "toolbar",
                "aria-orientation": "vertical",
                "aria-label": R.intl.string(T.default["0IAEFf"]),
                children: [
                    (0, i.jsx)(tA, {
                        icon: tp,
                        label: R.intl.string(T.default.qTOXqb),
                        pressed: "move" === u,
                        onClick: () => h("move"),
                    }),
                    (0, i.jsx)(tA, {
                        icon: tl.x,
                        label: R.intl.string(T.default.AGb8aK),
                        pressed: "text" === u,
                        onClick: () => h("text"),
                    }),
                    (0, i.jsx)(tS, {
                        label: p,
                        direction: "column",
                        trigger: (e) =>
                            (0, i.jsx)(tA, {
                                icon: tr.V,
                                label: p,
                                pressed: "marker" === u,
                                onClick: () => {
                                    (h("marker"), e());
                                },
                            }),
                        children: (e) =>
                            tb.map((n, l) =>
                                (0, i.jsx)(
                                    tA,
                                    {
                                        icon: n,
                                        label: R.intl.string(tk[l]),
                                        pressed: "marker" === u && c === l,
                                        onClick: () => {
                                            ((0, C.KZ)(t, l), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, i.jsx)(tS, {
                        label: v,
                        direction: "row",
                        trigger: (e) =>
                            (0, i.jsx)(tA, {
                                icon: g.icon,
                                label: v,
                                pressed: "circle" === u || "square" === u,
                                onClick: () => {
                                    (h(o), e());
                                },
                            }),
                        children: (e) =>
                            Object.keys(tw).map((t) =>
                                (0, i.jsx)(
                                    tA,
                                    {
                                        icon: tw[t].icon,
                                        label: tw[t].label(),
                                        pressed: u === t,
                                        onClick: () => {
                                            (h(t), e());
                                        },
                                    },
                                    t,
                                ),
                            ),
                    }),
                    (0, i.jsx)(tS, {
                        label: x,
                        direction: "column",
                        trigger: (e) =>
                            (0, i.jsx)(tA, {
                                icon: tv,
                                label: x,
                                pressed: "eraser" === u,
                                onClick: () => {
                                    (h("eraser"), e());
                                },
                            }),
                        children: (e) =>
                            ty.map((n, l) =>
                                (0, i.jsx)(
                                    tA,
                                    {
                                        icon: n,
                                        label: R.intl.string(tk[l]),
                                        pressed: "eraser" === u && d === l,
                                        onClick: () => {
                                            ((0, C._A)(t, l), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, i.jsx)(tS, {
                        label: j,
                        direction: "row",
                        trigger: (e) => (0, i.jsx)(tN, { icon: m.icon, label: j, onClick: e }),
                        children: (e) =>
                            tm.map((n) =>
                                (0, i.jsx)(
                                    tA,
                                    {
                                        icon: n.icon,
                                        label: n.label(),
                                        pressed: n.id === m.id,
                                        onClick: () => {
                                            ((0, C.Yx)(t, n.id), e());
                                        },
                                    },
                                    n.id,
                                ),
                            ),
                    }),
                    (0, i.jsx)("div", { className: tg.Gz, role: "separator" }),
                    (0, i.jsx)(tN, {
                        icon: ti.e,
                        label: R.intl.string((0, S.cX)() ? T.default["j/XmBQ"] : T.default.AeHDE6),
                        disabled: 0 === f.past.length,
                        onClick: r,
                    }),
                    (0, i.jsx)(tN, {
                        icon: ta.U,
                        label: R.intl.string((0, S.cX)() ? T.default.C7jhpn : T.default.pp16iB),
                        disabled: 0 === f.future.length,
                        onClick: a,
                    }),
                    (0, i.jsx)(tN, {
                        icon: ts.TrashIcon,
                        label: R.intl.string(T.default.wo5a0i),
                        disabled: 0 === f.present.length,
                        onClick: s,
                    }),
                    (0, i.jsx)("div", { className: tg.Gz, role: "separator" }),
                    (0, i.jsx)(tN, { icon: tu.XLargeIcon, label: R.intl.string(T.default.tuQ5f3), onClick: l }),
                ],
            }),
        ],
    });
}
let tI = to.A.unsafe_rawColors.WHITE.resolve({ saturation: 1 }).hex(),
    tE = to.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex(),
    t_ = to.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex();
function tM(e, t, n) {
    function l(e) {
        return e * n.width;
    }
    function r(e) {
        return e * n.height;
    }
    for (let n of ((e.lineCap = "round"), (e.lineJoin = "round"), t))
        switch (
            ((e.globalCompositeOperation = "erase" === n.kind ? "destination-out" : "source-over"),
            "erase" !== n.kind && ((e.strokeStyle = n.color), (e.fillStyle = n.color)),
            n.kind)
        ) {
            case "marker":
            case "erase": {
                let [t, ...i] = n.points;
                if (null == t) break;
                for (let a of ((e.lineWidth = l(n.width)),
                e.beginPath(),
                e.moveTo(l(t.x), r(t.y)),
                0 === i.length && e.lineTo(l(t.x), r(t.y)),
                i))
                    e.lineTo(l(a.x), r(a.y));
                e.stroke();
                break;
            }
            case "square":
                ((e.lineWidth = l(n.width)),
                    e.strokeRect(
                        l(Math.min(n.from.x, n.to.x)),
                        r(Math.min(n.from.y, n.to.y)),
                        l(Math.abs(n.to.x - n.from.x)),
                        r(Math.abs(n.to.y - n.from.y)),
                    ));
                break;
            case "circle":
                ((e.lineWidth = l(n.width)),
                    e.beginPath(),
                    e.ellipse(
                        l((n.from.x + n.to.x) / 2),
                        r((n.from.y + n.to.y) / 2),
                        l(Math.abs(n.to.x - n.from.x) / 2),
                        r(Math.abs(n.to.y - n.from.y) / 2),
                        0,
                        0,
                        2 * Math.PI,
                    ),
                    e.stroke());
                break;
            case "text": {
                let t = l(n.size);
                ((e.font = `600 ${t}px sans-serif`),
                    (e.textBaseline = "top"),
                    (e.lineWidth = 0.18 * t),
                    (e.strokeStyle = t_),
                    e.strokeText(n.text, l(n.at.x), r(n.at.y)),
                    e.fillText(n.text, l(n.at.x), r(n.at.y)));
            }
        }
    e.globalCompositeOperation = "source-over";
}
function tT(e) {
    if ("u" > typeof OffscreenCanvas) {
        let t = new OffscreenCanvas(e.width, e.height),
            n = t.getContext("2d");
        return null == n
            ? null
            : { canvas: t, ctx: n, toBlob: () => t.convertToBlob({ type: "image/webp", quality: 0.92 }) };
    }
    let t = document.createElement("canvas");
    ((t.width = e.width), (t.height = e.height));
    let n = t.getContext("2d");
    return null == n ? null : { canvas: t, ctx: n, toBlob: () => new Promise((e) => t.toBlob(e, "image/webp", 0.92)) };
}
let tR = { dx: 0, dy: 0 },
    tP = { v: "move", p: "pick", t: "text", m: "marker", o: "circle", r: "square", e: "eraser" },
    tL = 1;
function t$(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r } = e,
        s = null != n && n === l ? t : null,
        u = (0, C.d5)(s),
        { active: o } = (0, G.rt)(s),
        c = (0, K.Rv)(),
        [d, f] = a.useState(!1);
    a.useEffect(() => {
        if (null != s)
            return () => {
                (0, C.K7)(s)?.active === !0 && (0, C.It)(s);
            };
    }, [s]);
    let m = u?.active === !0 && "pick" === u.tool;
    a.useEffect(() => {
        null != s && m && !o && (0, G.w4)(s);
    }, [s, m, o]);
    let h = a.useCallback(async () => {
        let e = r();
        if (null == e) return null;
        let t = await (0, eI.wn)(e);
        if (null != t) return t;
        function n() {
            f(!1);
        }
        (0, eZ.flushSync)(() => f(!0));
        try {
            await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e())));
            let t = new Promise((e) => window.setTimeout(() => e(null), 5e3));
            return await Promise.race([(0, eI.fs)(e, n), t]);
        } finally {
            n();
        }
    }, [r]);
    return (a.useEffect(() => {
        if (null != s) return ((0, C.j5)(s, h), () => (0, C.j5)(s, null));
    }, [s, h]),
    null == s || null == u || !u.active || c)
        ? null
        : (0, i.jsx)(tq, { projectId: s, state: u, capturing: d, resolveIframe: r });
}
function tq(e) {
    let { projectId: t, state: n, capturing: l, resolveIframe: r } = e,
        s = e6(r),
        [u, o] = a.useState(null),
        [c, d] = a.useState(0),
        [f, m] = a.useState(null),
        [h, g] = a.useState(tR),
        p = a.useRef(null),
        x = a.useRef(null),
        v = a.useRef(null),
        j = a.useRef(null),
        b = a.useRef(null),
        { tool: y, history: k } = n,
        w = th(n.colorId),
        A = "pick" !== y,
        N = (0, C.Qq)(n),
        S = "eraser" === y ? null : w.value,
        I = a.useMemo(
            () =>
                null == N
                    ? void 0
                    : (function (e, t) {
                          let n = Math.ceil(Math.max(e, 24) / 2),
                              l = 2 * n + 4;
                          if (l > 128) return "crosshair";
                          let r = l / 2,
                              i = (e, t) => `<circle cx="${r}" cy="${r}" r="${e}" ${t}/>`,
                              a = [
                                  `<svg xmlns="http://www.w3.org/2000/svg" width="${l}" height="${l}" viewBox="0 0 ${l} ${l}">`,
                                  i(n, `fill="none" stroke="${tE}" stroke-width="4"`),
                                  i(n, `fill="none" stroke="${tI}" stroke-width="2"`),
                                  i(3, `fill="${t ?? tI}" stroke="${tE}" stroke-width="1"`),
                                  "</svg>",
                              ].join("");
                          return `url("data:image/svg+xml,${encodeURIComponent(a)}") ${r} ${r}, crosshair`;
                      })(N, S),
            [N, S],
        ),
        E = "move" === y ? (k.present.find((e) => e.id === f) ?? null) : null,
        _ = null != s;
    (a.useLayoutEffect(() => {
        d(x.current?.offsetWidth ?? 0);
    }, [_]),
        a.useLayoutEffect(() => {
            b.current = u;
        }, [u]));
    let M = a.useCallback(() => {
        let e = p.current;
        if (null == e || null == s) return;
        let t = window.devicePixelRatio,
            n = Math.round(s.width * t),
            l = Math.round(s.height * t);
        (e.width !== n && (e.width = n), e.height !== l && (e.height = l));
        let r = e.getContext("2d");
        if (null == r) return;
        (r.setTransform(1, 0, 0, 1, 0, 0), r.clearRect(0, 0, n, l), r.setTransform(t, 0, 0, t, 0, 0));
        let i = j.current,
            a = null == i ? k.present : k.present.map((e) => (e.id === i.id ? (0, te.y)(e, h.dx, h.dy) : e)),
            u = v.current;
        tM(r, null == u ? a : [...a, u], { width: s.width, height: s.height });
    }, [s, k.present, h]);
    a.useLayoutEffect(M, [M]);
    let P = a.useCallback(
            (e) =>
                null == s ? { x: 0, y: 0 } : { x: (e.clientX - s.left) / s.width, y: (e.clientY - s.top) / s.height },
            [s],
        ),
        L = a.useCallback(() => {
            let e = b.current;
            if (null == e || null == s) return;
            b.current = null;
            let n = {
                id: `mark-${tL++}`,
                kind: "text",
                color: w.value,
                size: 20 / s.width,
                at: e.at,
                text: e.value.trim(),
            };
            ((0, te.oy)(n, s) && (0, C.tD)(t, { type: "commit", shape: n }), o(null), (0, C.QP)(t));
        }, [t, w, s]),
        $ = a.useCallback(() => {
            ((b.current = null), o(null), (0, C.QP)(t));
        }, [t]),
        q = a.useCallback(
            (e) => {
                if (0 !== e.button || null == s) return;
                if (null != b.current) return void L();
                let t = P(e);
                switch (y) {
                    case "pick":
                        return;
                    case "move": {
                        let n = { x: t.x * s.width, y: t.y * s.height },
                            l = null == E ? null : (0, te.k_)(E, s),
                            r =
                                null != l && n.x >= l.x && n.x <= l.x + l.width && n.y >= l.y && n.y <= l.y + l.height
                                    ? E
                                    : (0, te.WF)(k.present, t, s, 6);
                        if ((m(r?.id ?? null), null == r)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            e.currentTarget.toggleAttribute("data-dragging", !0),
                            (j.current = { id: r.id, origin: t }));
                        return;
                    }
                    case "text":
                        o({ at: t, value: "" });
                        return;
                    case "eraser":
                        if (!(0, te.jG)(k.present)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (v.current = {
                                id: `mark-${tL++}`,
                                kind: "erase",
                                width: C.Cw[n.eraserSize] / s.width,
                                points: [t],
                            }));
                        break;
                    case "marker":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (v.current = {
                                id: `mark-${tL++}`,
                                kind: "marker",
                                color: w.value,
                                width: C.ck[n.markerSize] / s.width,
                                points: [t],
                            }));
                        break;
                    case "circle":
                    case "square":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (v.current = {
                                id: `mark-${tL++}`,
                                kind: y,
                                color: w.value,
                                width: 4 / s.width,
                                from: t,
                                to: t,
                            }));
                }
                M();
            },
            [s, y, w, E, k.present, n.markerSize, n.eraserSize, P, L, M],
        ),
        D = a.useCallback(
            (e) => {
                let t = P(e),
                    n = j.current;
                if (null != n) return void g({ dx: t.x - n.origin.x, dy: t.y - n.origin.y });
                let l = v.current;
                null != l &&
                    ("marker" === l.kind || "erase" === l.kind
                        ? (v.current = { ...l, points: [...l.points, t] })
                        : ("circle" === l.kind || "square" === l.kind) && (v.current = { ...l, to: t }),
                    M());
            },
            [P, M],
        ),
        F = a.useCallback(() => {
            p.current?.removeAttribute("data-dragging");
            let e = j.current;
            if (null != e) {
                ((j.current = null), g(tR), (0, C.tD)(t, { type: "move", id: e.id, dx: h.dx, dy: h.dy }));
                return;
            }
            let n = v.current;
            ((v.current = null),
                null != n && null != s && (0, te.oy)(n, s)
                    ? ((0, C.tD)(t, { type: "commit", shape: n }), (0, C.QP)(t))
                    : M());
        }, [t, s, h, M]),
        O = a.useCallback(() => (0, C.V9)(t), [t]),
        G = a.useCallback(() => (0, C.tD)(t, { type: "undo" }), [t]),
        z = a.useCallback(() => (0, C.tD)(t, { type: "redo" }), [t]),
        U = a.useCallback(() => (0, C.tD)(t, { type: "clear" }), [t]),
        B = a.useRef({ tool: y, selected: E, exit: O, undo: G, redo: z });
    if (
        (a.useLayoutEffect(() => {
            B.current = { tool: y, selected: E, exit: O, undo: G, redo: z };
        }),
        a.useEffect(() => {
            function e(e) {
                if (
                    e.defaultPrevented ||
                    (0, eY.Cw)((0, eY.vq)(e.target, HTMLElement) ? e.target : null) ||
                    null != b.current
                )
                    return;
                let { tool: n, selected: l, exit: r, undo: i, redo: a } = B.current,
                    s = e.key.toLowerCase();
                if (e.metaKey || e.ctrlKey) {
                    if (e.altKey || ("z" !== s && "y" !== s)) return;
                    (e.preventDefault(), "y" === s || e.shiftKey ? a() : i());
                    return;
                }
                if (e.altKey) return;
                if ("Escape" === e.key) {
                    if ("pick" === n) return;
                    (e.preventDefault(), null != l ? m(null) : r());
                    return;
                }
                if (("Delete" === e.key || "Backspace" === e.key) && null != l) {
                    (e.preventDefault(), (0, C.tD)(t, { type: "remove", id: l.id }), m(null));
                    return;
                }
                if (e.shiftKey) return;
                let u = tP[s];
                null != u && (e.preventDefault(), (0, C.rC)(t, u));
            }
            return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
        }, [t]),
        a.useEffect(() => {
            if (A) return (eJ.A.disable(), () => eJ.A.enable());
        }, [A]),
        null == s)
    )
        return null;
    let K = Math.max(8, s.left - c - 8),
        H = null == E ? null : (0, te.k_)(null == j.current ? E : (0, te.y)(E, h.dx, h.dy), s);
    return (0, eZ.createPortal)(
        (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)("div", {
                    className: tg.qe,
                    style: { left: s.left, top: s.top, width: s.width, height: s.height },
                    "aria-hidden": !0,
                }),
                (0, i.jsxs)("div", {
                    className: tg.Pw,
                    style: { left: s.left, top: s.top, width: s.width, height: s.height },
                    "data-testid": "conjure-edit-ink",
                    children: [
                        (0, i.jsx)("canvas", {
                            ref: p,
                            className: tg.Ji,
                            "data-tool": y,
                            "data-interactive": A && !l ? "" : void 0,
                            "aria-label": R.intl.string(T.default["qlgN+X"]),
                            onMouseDown: (e) => e.preventDefault(),
                            style: { cursor: l ? void 0 : I },
                            onPointerDown: q,
                            onPointerMove: D,
                            onPointerUp: F,
                            onPointerCancel: F,
                        }),
                        null == H
                            ? null
                            : (0, i.jsxs)("div", {
                                  className: tg.r1,
                                  style: { left: H.x, top: H.y, width: H.width, height: H.height },
                                  "aria-hidden": !0,
                                  children: [
                                      (0, i.jsx)("span", { className: tg.p$, "data-corner": "nw" }),
                                      (0, i.jsx)("span", { className: tg.p$, "data-corner": "ne" }),
                                      (0, i.jsx)("span", { className: tg.p$, "data-corner": "sw" }),
                                      (0, i.jsx)("span", { className: tg.p$, "data-corner": "se" }),
                                  ],
                              }),
                    ],
                }),
                null == u
                    ? null
                    : (0, i.jsx)(e5, {
                          projectId: t,
                          anchor: "point",
                          at: { x: s.left + u.at.x * s.width, y: s.top + u.at.y * s.height },
                          bounds: s,
                          kind: "",
                          placeholder: R.intl.string(T.default["8gX1lw"]),
                          label: R.intl.string(T.default["5W7SSZ"]),
                          allowAttachments: !1,
                          value: u.value,
                          onChange: (e) => o((t) => (null == t ? null : { ...t, value: e })),
                          onSubmit: L,
                          onUploadFile: (e) => (0, e0.vX)(t, e),
                          onDismiss: $,
                          canSubmit: "" !== u.value.trim(),
                          closing: !1,
                      }),
                (0, i.jsx)("div", {
                    ref: x,
                    className: tg.ej,
                    style: { left: K, top: s.top },
                    "data-conjure-edit-rail": "",
                    children: (0, i.jsx)(tC, { projectId: t, state: n, onExit: O, onUndo: G, onRedo: z, onClear: U }),
                }),
            ],
        }),
        document.body,
    );
}
var tD = n(308081),
    tF = n(516521),
    tO = n(683071),
    tG = n(65593),
    tz = n(218394),
    tU = n(115982),
    tB = n(886540);
function tK(e) {
    return !(0, tB.BL)(e) && !0 !== e.stopRequested;
}
var tH = n(104317),
    tV = n(939249),
    tW = n(643278),
    tX = n(566424),
    tQ = n(683063),
    tZ = n(140735),
    tY = n(320448),
    tJ = n(138212);
function t0(e) {
    let { title: t, trailing: n, children: l, className: r, headerClassName: a, ...s } = e;
    return (0, i.jsxs)("section", {
        className: o()(tJ.Nr, r),
        ...s,
        children: [
            (0, i.jsxs)("header", {
                className: o()(tJ.wx, null != n && tJ.o5, a),
                children: [
                    (0, i.jsx)(v.E, { tag: "span", variant: "body-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var t1 = n(148590);
function t2(e) {
    let { children: t } = e;
    return (0, i.jsx)(v.E, { variant: "body-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function t3(e) {
    let {
            title: t,
            meta: n,
            superseded: l = !1,
            showLabel: r,
            hideLabel: s,
            bodyClassName: u,
            beforeBody: c,
            children: d,
            ...f
        } = e,
        m = a.useId(),
        [h, g] = a.useState(!l),
        [p, x] = a.useState(l);
    p !== l && (x(l), g(!l));
    let v = a.useCallback(() => g((e) => !e), []),
        j = h ? eN.a : tY._,
        b = null != n || l;
    return (0, i.jsxs)(t0, {
        ...f,
        title: t,
        trailing: b
            ? (0, i.jsxs)("span", {
                  className: t1.ZY,
                  children: [
                      n,
                      l
                          ? (0, i.jsx)(tV.D, {
                                className: t1.L$,
                                onClick: v,
                                "aria-expanded": h,
                                "aria-controls": m,
                                "aria-label": h ? s : r,
                                children: (0, i.jsx)(j, { size: "xs", color: "currentColor" }),
                            })
                          : null,
                  ],
              })
            : void 0,
        headerClassName: h ? void 0 : t1.RG,
        "data-superseded": l ? "true" : void 0,
        children: [c, (0, i.jsx)("div", { id: m, className: o()(t1.rf, u), hidden: !h, children: d })],
    });
}
n(321073);
var t4 = n(883646);
let t7 = [];
function t5(e) {
    let { status: t } = e;
    return (0, i.jsxs)("span", {
        className: o()(t4.xL, {
            [t4.Vb]: "in_progress" === t,
            [t4.cT]: "completed" === t,
            [t4.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return R.intl.string(T.default.KvBdun);
                case "in_progress":
                    return R.intl.string(T.default["m5G9+S"]);
                case "unfinished":
                    return R.intl.string(T.default.lRpwhD);
                default:
                    return R.intl.string(T.default.sPGeWi);
            }
        })(t),
        children: [
            (0, i.jsx)(j.y, {
                type: j.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: t4.Qd,
                itemClassName: t4.xB,
                "aria-hidden": !0,
            }),
            (0, i.jsx)("svg", {
                className: t4.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, i.jsx)("path", { className: t4.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function t9(e) {
    let { agents: t, active: n } = e,
        l = a.useMemo(() => (n ? t : t7), [n, t]),
        r = a.useMemo(() => new Set(l.map((e) => e.key)), [l]),
        s = l.map((e) => e.key).join("\0"),
        [u, o] = a.useState(l),
        [c, d] = a.useState(s),
        [f, m] = a.useState(!1);
    c !== s && (d(s), o([...l, ...u.filter((e) => !r.has(e.key))]), 0 === l.length && m(!1));
    let h = u.some((e) => !r.has(e.key));
    if (
        (a.useEffect(() => {
            if (!h) return;
            let e = setTimeout(() => o(l), n ? 200 : 250);
            return () => clearTimeout(e);
        }, [h, l, n]),
        a.useEffect(() => {
            if (!n || 0 === u.length) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => m(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [n, u.length]),
        0 === u.length)
    )
        return null;
    let g = u.slice(0, 3),
        p = u.length - g.length;
    return (0, i.jsxs)("span", {
        className: t4.X6,
        "data-shown": n && f ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: n, name: l, task: a } = e,
                    { Illocon: s } = n;
                return (0, i.jsx)(
                    tQ.u,
                    {
                        asset: (0, i.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: a,
                        position: "top",
                        children: (0, i.jsx)("span", {
                            className: t4.MA,
                            "data-leaving": r.has(t) ? void 0 : "true",
                            children: (0, i.jsx)(s, { size: 16, alt: l, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            p > 0
                ? (0, i.jsx)(v.E, {
                      tag: "span",
                      variant: "body-xs/medium",
                      color: "text-muted",
                      className: t4.qA,
                      children: `+${p}`,
                  })
                : null,
        ],
    });
}
function t8(e) {
    let t,
        { todos: n, provisional: l, agents: r, live: s = !0 } = e,
        u = (function (e) {
            let t = e.join("\0"),
                [n, l] = a.useState(() => new Set(e)),
                [r, i] = a.useState(t),
                [s, u] = a.useState(() => new Set());
            return (
                r !== t && (i(t), l(new Set(e)), u(0 === n.size ? new Set() : new Set(e.filter((e) => !n.has(e))))),
                a.useEffect(() => {
                    if (0 === s.size) return;
                    let e = 0,
                        t = requestAnimationFrame(() => {
                            e = requestAnimationFrame(() => u(new Set()));
                        });
                    return () => {
                        (cancelAnimationFrame(t), cancelAnimationFrame(e));
                    };
                }, [s]),
                s
            );
        })(a.useMemo(() => n.map((e) => e.id), [n])),
        c =
            ((t = (r ?? t7).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            a.useMemo(
                () =>
                    (function (e) {
                        let t = new Map();
                        for (let n of e) {
                            if (null == n.todoId || "" === n.todoId) continue;
                            let e = t.get(n.todoId);
                            null != e ? e.push(n) : t.set(n.todoId, [n]);
                        }
                        return t;
                    })(r ?? t7),
                [t],
            ));
    return (0, i.jsxs)("ul", {
        className: t4.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, i.jsxs)(
                    "li",
                    {
                        className: o()(t4.AS, { [t4.J1]: "completed" === n }),
                        "data-arriving": u.has(e.id) ? "true" : void 0,
                        children: [
                            (0, i.jsx)(t5, { status: n }),
                            (0, i.jsx)(v.E, {
                                variant: "body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: t4.iV,
                                selectable: !0,
                                children: (0, i.jsx)("span", {
                                    className: t4.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, i.jsx)(t9, { agents: c.get(e.id) ?? t7, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, i.jsxs)("li", {
                      className: t4.AS,
                      "data-provisional": !0,
                      children: [
                          (0, i.jsx)(t5, { status: "pending" }),
                          (0, i.jsx)(v.E, {
                              variant: "body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: t4.iV,
                              selectable: !0,
                              children: (0, i.jsx)("span", { className: t4.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function t6(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: r = !0, live: a = !0, superseded: s = !1 } = e,
        { completed: u, total: o } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === o) return null;
    let c = R.intl.formatToPlainString(T.default["P/I+JW"], { completed: u, total: o }),
        d = R.intl.formatToPlainString(T.default["7tzwKB"], { completed: u, total: o });
    return (0, i.jsx)(t3, {
        title: R.intl.string(T.default.RtzECX),
        meta: (0, i.jsx)(t2, { children: c }),
        superseded: s,
        showLabel: R.intl.string(T.default.RKyN9q),
        hideLabel: R.intl.string(T.default.xydHoj),
        className: t4.Nr,
        bodyClassName: t4.rf,
        beforeBody: r && !s ? (0, i.jsx)(tZ.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, i.jsx)(t8, { todos: t, provisional: n, agents: l, live: a }),
    });
}
var ne = n(308665),
    nt = n(59678),
    nn = n(903847);
function nl(e) {
    let { line: t, placement: n, todos: l, todosLive: r = !0, provisionalTodo: s, agents: u, onJumpToActivity: c } = e,
        d = null != n,
        [f, m] = a.useState(n ?? "top"),
        [h, g] = a.useState(d),
        [p, x] = a.useState(!1),
        [v, j] = a.useState(!1),
        [b, y] = a.useState(d);
    (b !== d && (y(d), null != n ? (m(n), g(!0)) : (x(!1), j(!1))),
        a.useEffect(() => {
            if (d || !h) return;
            let e = setTimeout(() => g(!1), 150);
            return () => clearTimeout(e);
        }, [d, h]),
        a.useEffect(() => {
            if (!h || !d) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => x(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [h, d]));
    let [k, w] = a.useState(!1),
        [A, N] = a.useState(!1),
        [S, C] = a.useState(v);
    (S !== v && (C(v), v ? w(!0) : N(!1)),
        a.useEffect(() => {
            if (v || !k) return;
            let e = setTimeout(() => w(!1), 150);
            return () => clearTimeout(e);
        }, [v, k]),
        a.useEffect(() => {
            if (!k || !v) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => N(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [k, v]));
    let I = null != l && l.length > 0,
        E = a.useCallback(() => j((e) => !e), []);
    return h
        ? (0, i.jsxs)("div", {
              className: nn.qd,
              "data-placement": f,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, i.jsxs)("div", {
                      className: o()(nn.vK, { [nn.ho]: p && d, [nn.ET]: !d }),
                      children: [
                          null == c
                              ? (0, i.jsx)("ol", {
                                    className: o()(nn.Rk, nt.pj),
                                    "data-live": "true",
                                    children: (0, i.jsx)(tX.A, {
                                        glyph: (0, i.jsx)(ne.A, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, i.jsx)(tV.D, {
                                    className: nn.pZ,
                                    onClick: c,
                                    "aria-label": R.intl.string(T.default.hEK6qu),
                                    children: (0, i.jsx)("ol", {
                                        className: o()(nn.Rk, nt.pj),
                                        "data-live": "true",
                                        children: (0, i.jsx)(tX.A, {
                                            glyph: (0, i.jsx)(ne.A, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          I
                              ? (0, i.jsx)(e1.m, {
                                    text: R.intl.string(T.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, i.jsx)(tV.D, {
                                        className: nn.BO,
                                        onClick: E,
                                        "aria-expanded": v,
                                        "aria-label": R.intl.string(T.default.RtzECX),
                                        children: (0, i.jsx)(tW.ClipboardListIcon, {
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
                  k && I
                      ? (0, i.jsx)("div", {
                            className: o()(nn.vB, { [nn.pg]: v && A, [nn.ui]: !v }),
                            children: (0, i.jsx)(t6, {
                                todos: l,
                                provisional: s,
                                agents: u,
                                live: r,
                                announceProgress: !1,
                            }),
                        })
                      : null,
              ],
          })
        : null;
}
(n(323874), n(14289), n(35956));
var nr = n(839214),
    ni = n(78564);
let na = new Map(),
    ns = (0, nr.D)(() => ({ byMessageKey: {} }));
function nu(e, t) {
    let { [e]: n, ...l } = ns.getState().byMessageKey;
    ns.setState({ byMessageKey: null == t ? l : { ...l, [e]: t } });
}
var no = n(195880),
    nc = n(287111),
    nd = n(16619);
function nf(e) {
    let t = (0, nd.qh)("ConjureClarificationProjectPicker");
    return a.useMemo(
        () =>
            t
                .filter((t) => t.projectId !== e)
                .map((e) => ({ projectId: e.projectId, name: e.name, serverName: e.guildName })),
        [t, e],
    );
}
var nm = n(736553),
    nh = n(472119),
    ng = n(890497),
    np = n(103557),
    nx = n(29073),
    nv = n(590077);
function nj(e) {
    let { projectId: t, request: n, canSend: l, onDismiss: r, onSent: s } = e,
        u = (function (e, t, n, l, r) {
            let i = nf(e),
                [s, u] = a.useState(null),
                [o, c] = a.useState([]),
                [d, f] = a.useState(t.prompt),
                [m, h] = a.useState(!1),
                [g, p] = a.useState(!1),
                x = a.useRef(new Map()),
                v = a.useRef(!1),
                j = a.useRef(!1),
                b = a.useMemo(() => i.filter((e) => !o.some((t) => t.target.projectId === e.projectId)), [i, o]),
                y = a.useMemo(
                    () => (null != t.project_ids ? t.project_ids : null != t.project_id ? [t.project_id] : []),
                    [t],
                ),
                k = a.useMemo(() => {
                    let e = s ?? y;
                    return b.filter((t) => e.includes(t.projectId)).map((e) => e.projectId);
                }, [s, y, b]),
                w = a.useMemo(() => b.filter((e) => k.includes(e.projectId)), [b, k]),
                A = a.useCallback((e) => {
                    u(e.slice(0, 10));
                }, []),
                N = d.trim(),
                S = n && !m && (w.length > 0 ? "" !== N : o.length > 0),
                C = a.useCallback(
                    (t) => {
                        j.current ||
                            ((j.current = !0),
                            h(!0),
                            null != r
                                ? r(t.map((e) => e.target))
                                : (0, nc.RQ)(
                                      e,
                                      (function (e) {
                                          let t = new Map();
                                          for (let { target: n, prompt: l } of e) t.set(l, [...(t.get(l) ?? []), n]);
                                          return Array.from(t, (e) => {
                                              let [t, n] = e,
                                                  l = n
                                                      .map((e) =>
                                                          R.intl.formatToPlainString(T.default.tcDZw9, {
                                                              name: e.name,
                                                              projectId: e.projectId,
                                                          }),
                                                      )
                                                      .join(", "),
                                                  r = R.intl.formatToPlainString(T.default.jZlNst, { targets: l });
                                              return `${r}

${t}`;
                                          }).join("\n\n");
                                      })(t),
                                  ));
                    },
                    [r, e],
                ),
                I = a.useCallback(() => {
                    let t, n;
                    if (!S) return;
                    if (0 === w.length) return void C(o);
                    (h(!0), p(!1));
                    let l =
                        ((t = eT.Ay.getProject(e)?.name ?? e),
                        (n = R.intl.formatToPlainString(T.default.ScoZLp, { name: t, projectId: e })),
                        `${N}

${n}`);
                    Promise.allSettled(
                        w.map((e) => {
                            let t = x.current.get(e.projectId);
                            return (
                                t?.content !== l &&
                                    ((t = { content: l, nonce: (0, no.m)() }), x.current.set(e.projectId, t)),
                                (async function (e, t, n) {
                                    let l,
                                        { ticket: r, baseUrl: i } = await (0, nh.dv)(e),
                                        a = new nm.u();
                                    try {
                                        await new Promise((e, s) => {
                                            ((l = setTimeout(() => s(Error("Timed out sending the message")), 2e4)),
                                                a.open({
                                                    url: i,
                                                    ticket: r,
                                                    onEvent: (l) => {
                                                        if ("hello" === l.type)
                                                            try {
                                                                a.sendUserMessage(t, n);
                                                            } catch (e) {
                                                                s(e);
                                                            }
                                                        else
                                                            "user_message" === l.type && l.nonce === n
                                                                ? e()
                                                                : "step" === l.type &&
                                                                  "turn_result" === l.kind &&
                                                                  "error" === l.result &&
                                                                  null == l.turn_id &&
                                                                  s(Error(l.summary ?? "The message was refused"));
                                                    },
                                                    onClose: () =>
                                                        s(Error("Connection closed before the message was stored")),
                                                }));
                                        });
                                    } finally {
                                        (clearTimeout(l), a.close());
                                    }
                                })(e.projectId, l, t.nonce)
                            );
                        }),
                    ).then((e) => {
                        let t = w.filter((t, n) => "fulfilled" === e[n].status),
                            n = [...o, ...t.map((e) => ({ target: e, prompt: N }))];
                        if (t.length === w.length || v.current) {
                            n.length > 0 && C(n);
                            return;
                        }
                        (c(n), u(w.filter((e) => !t.includes(e)).map((e) => e.projectId)), h(!1), p(!0));
                    });
                }, [S, C, o, e, w, N]),
                E = a.useCallback(() => {
                    ((v.current = !0), o.length > 0 && !m && C(o), l());
                }, [C, o, l, m]);
            return {
                projects: b,
                targetIds: k,
                setTargetIds: A,
                prompt: d,
                setPrompt: f,
                sending: m,
                failed: g,
                canSubmit: S,
                submit: I,
                dismiss: E,
            };
        })(t, n, l, r, s),
        c = a.useMemo(
            () =>
                u.projects.map((e) => ({
                    id: e.projectId,
                    label: e.name,
                    value: e.projectId,
                    ...(null == e.serverName ? {} : { description: e.serverName }),
                })),
            [u.projects],
        ),
        f = `${n.id}-heading`;
    return (0, i.jsxs)("section", {
        className: o()(nx.nd, nx.jx),
        "aria-labelledby": f,
        "data-conjure-app-build-request": n.id,
        children: [
            (0, i.jsxs)("div", {
                className: nx.wx,
                children: [
                    (0, i.jsx)(v.E, {
                        tag: "span",
                        id: f,
                        variant: "body-sm/medium",
                        color: "text-subtle",
                        className: nx.TK,
                        children: n.summary,
                    }),
                    (0, i.jsx)(tn.K, {
                        icon: eW.P,
                        size: "sm",
                        variant: "icon-only",
                        onClick: u.dismiss,
                        "aria-label": R.intl.string(T.default.KQUuAZ),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: nv.r,
                children: [
                    0 === c.length
                        ? (0, i.jsx)(v.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: R.intl.string(T.default.TbbzW5),
                          })
                        : (0, i.jsx)(ng.Z, {
                              label: R.intl.string(T.default["29gr8j"]),
                              placeholder: R.intl.string(T.default.twlOb6),
                              options: c,
                              selectionMode: "multiple",
                              wrapTags: !0,
                              value: [...u.targetIds],
                              onSelectionChange: u.setTargetIds,
                              disabled: u.sending,
                              maxOptionsVisible: 4,
                              fullWidth: !0,
                          }),
                    (0, i.jsx)(np.f, {
                        label: R.intl.string(T.default.XZNsDA),
                        value: u.prompt,
                        onChange: u.setPrompt,
                        maxLength: 4e3,
                        disabled: u.sending,
                        autosize: !0,
                        rows: 3,
                        maxRows: 8,
                        error: u.failed ? R.intl.string(T.default.kMZz8G) : null,
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: nx.qr,
                children: (0, i.jsx)("div", {
                    className: nx.zt,
                    children: (0, i.jsx)(d.$, {
                        variant: "primary",
                        size: "sm",
                        text: R.intl.string(T.default.gG4j6o),
                        disabled: !u.canSubmit,
                        loading: u.sending,
                        onClick: u.submit,
                    }),
                }),
            }),
        ],
    });
}
var nb = n(47167),
    ny = n(734057),
    nk = n(994500),
    nw = n(287809),
    nA = n(360047);
function nN(e) {
    return 0 === e.options.length && null == e.input;
}
function nS(e, t, n) {
    return n < e.questions.length - 1
        ? n + 1
        : (function (e, t, n) {
              let { questions: l } = e;
              for (let e = 1; e <= l.length; e++) {
                  var r, i;
                  let a = (n + e) % l.length;
                  if (((r = l[a]), (i = t[l[a].id]), !0 !== r.optional && (null == i || "" === i.text.trim())))
                      return a;
              }
              return null;
          })(e, t, n);
}
function nC(e, t) {
    return e.questions
        .map((e, n) => ({ question: e, index: n, answer: t[e.id] }))
        .filter((e) => null != e.answer && "" !== e.answer.text.trim())
        .map((e) => {
            let { question: t, index: n, answer: l } = e;
            return `${n + 1}. ${t.question} \u{2192} ${l.text.trim()}`;
        })
        .join("\n");
}
function nI(e, t, n, l) {
    let r = n.trim(),
        i = e.options.filter((e) => t.includes(e.id)).map((e) => e.label);
    return {
        kind: "multi",
        optionIds: t,
        ...("" === r ? {} : { custom: r }),
        ...(null == l ? {} : { attachment: l.attachment }),
        text: [...i, ...(null == l ? [] : [l.text]), ...("" === r ? [] : [r])].join(", "),
    };
}
let nE = {
    [ev.rbe.GUILD_TEXT]: "text",
    [ev.rbe.GUILD_VOICE]: "voice",
    [ev.rbe.GUILD_ANNOUNCEMENT]: "announcement",
    [ev.rbe.GUILD_STAGE_VOICE]: "stage",
    [ev.rbe.GUILD_FORUM]: "forum",
    [ev.rbe.GUILD_MEDIA]: "media",
};
function n_(e, t, n, l) {
    return t.slice(0, 10).map((t) => ({
        id: t,
        name: n(t) ?? l.find((e) => e.id === t)?.name ?? t,
        ...(function (e, t) {
            if ("channel" === e) {
                var n;
                let l = null == (n = ny.A.getChannel(t)?.type) ? void 0 : nE[n];
                return { kind: e, ...(null == l ? {} : { channel_type: l }) };
            }
            if ("user" === e) {
                let n = nw.default.getUser(t)?.username;
                return { kind: e, ...(null == n ? {} : { username: n }) };
            }
            return { kind: e };
        })(e, t),
    }));
}
let nM = { channel: "#", role: "@", user: "@", project: "", server: "" },
    nT = {
        channel: [T.default["9+dfPT"], T.default.pGSJqE],
        role: [T.default["2VkCoD"], T.default.c8YlX8],
        user: [T.default.GZIAxl, T.default["4bptbQ"]],
        project: [T.default.twlOb6, T.default.twlOb6],
        server: [T.default.ZWXDeI, T.default.ZWXDeI],
    };
function nR(e, t) {
    return R.intl.string(nT[e][+!!t]);
}
var nP = n(658675),
    nL = n(123292),
    n$ = n(900797),
    nq = n(691885);
function nD(e) {
    let { label: t, hideLabel: n, autoFocus: l, value: r, disabled: s, onChange: u } = e,
        o = a.useMemo(() => nA.Hi.map((e) => ({ id: e, value: e, label: (0, nA.hU)(e) })), []);
    return (0, i.jsx)(nq.l, {
        label: t,
        hideLabel: n,
        autoFocus: l,
        options: o,
        value: r,
        selectionMode: "single",
        fullWidth: !0,
        disabled: s,
        onSelectionChange: u,
    });
}
var nF = n(344587),
    nO = n(155078);
function nG(e) {
    return !0 === e.upload || e.options.some((e) => null != e.image);
}
let nz = [];
function nU(e) {
    return !0 !== e.upload
        ? null
        : 0 === e.options.length
          ? R.intl.string(T.default.ZZ641e)
          : R.intl.string(1 === e.options.length ? T.default["2g3gk9"] : T.default.dkzChE);
}
function nB(e) {
    return e?.kind === "image" || (e?.kind === "multi" && null != e.attachment);
}
function nK(e, t) {
    return {
        image: e,
        selected: t,
        busy: null,
        error: null,
        onPick: () => void 0,
        onRemove: () => void 0,
        onUpload: () => void 0,
        onLink: () => Promise.resolve(!1),
    };
}
var nH = n(682163),
    nV = n(300344),
    nW = n(614733),
    nX = n(904363),
    nQ = n(950902),
    nZ = n(136722),
    nY = n(778858),
    nJ = n(808728),
    n0 = n(696451),
    n1 = n(71393),
    n2 = n(488926),
    n3 = n(426035),
    n4 = n(246338);
let n7 = nZ.kg(ev.xBc.VIEW_CHANNEL, ev.xBc.SEND_MESSAGES);
var n5 = n(384017);
function n9(e) {
    let {
            guildId: t,
            question: n,
            value: l,
            disabled: r,
            onChange: a,
            onFocus: s,
            onBlur: u,
            options: o,
            placeholder: c,
            onQueryChange: d,
            matchSorterOptions: f,
        } = e,
        m = !0 === n.multi_select,
        h = l.map((e) => e.id);
    function g(e) {
        return n_(n.input ?? "channel", e, (e) => o.find((t) => t.value === e)?.label, l);
    }
    let p = {
        options: o,
        placeholder: c,
        disabled: r,
        onQueryChange: d,
        matchSorterOptions: f,
        onFocus: s,
        onBlur: u,
        fullWidth: !0,
        maxOptionsVisible: 4,
        label: n.question,
        hideLabel: !0,
    };
    return (0, i.jsx)("div", {
        className: n5.YX,
        "data-conjure-clarification-picker": n.input,
        children: m
            ? (0, i.jsx)(ng.Z, {
                  ...p,
                  selectionMode: "multiple",
                  wrapTags: !0,
                  value: h,
                  onSelectionChange: (e) => a(g(e), t),
              })
            : (0, i.jsx)(ng.Z, {
                  ...p,
                  selectionMode: "single",
                  clearable: !0,
                  value: h[0] ?? null,
                  onSelectionChange: (e) => a(null == e ? [] : g([e]), t),
              }),
    });
}
function n8(e) {
    let { projectId: t, guildId: n, fallback: l, ...r } = e,
        s = (0, nV.A)(n, r.question.channel_filter);
    return (!(function (e) {
        let t,
            n,
            { projectId: l, guildId: r, question: i, value: s, disabled: u, onChange: o } = e,
            d =
                ((t = null != r && "channel" === i.input && "safety_alerts_channel" === i.default),
                (n = (0, c.bG)(
                    [eT.Ay],
                    () => {
                        let e = t ? eT.Ay.getProject(l) : null;
                        return null == e ? null : (0, n3.ug)(e);
                    },
                    [l, t],
                )),
                a.useEffect(() => {
                    null == r || null == n || n0.Ay.isMember(r, n) || nY.A.requestMembersById(r, [n]);
                }, [r, n]),
                (0, c.bG)(
                    [nJ.A, n0.Ay, n1.A],
                    () => {
                        if (!t || null == r) return null;
                        let e = n1.A.getGuild(r)?.safetyAlertsChannelId,
                            l = nJ.A.getChannels(r);
                        if (null == e || null == l) return null;
                        let a = (0, n4.Lp)(l, i.channel_filter).find((t) => t.id === e);
                        if (null == a) return null;
                        if (null != n && n0.Ay.isMember(r, n))
                            return n2.$3({ permission: n7, user: n, context: a }) ? a : null;
                        let s = a.permissionOverwrites[r]?.deny ?? nZ.BY;
                        return nZ.X8(s, n7) ? null : a;
                    },
                    [r, n, t, i.channel_filter],
                )),
            f = a.useRef(null),
            m = a.useRef(!1);
        a.useEffect(() => {
            if (!m.current && !u && null != r) {
                if (null == f.current) {
                    if (s.length > 0) m.current = !0;
                    else if (null != d) {
                        var e;
                        ((f.current = d.id),
                            o(((e = []), n_("channel", [d.id], () => (0, nb.m1)(d, nw.default, nk.A), e)), r));
                    }
                    return;
                }
                1 !== s.length || s[0].id !== f.current ? (m.current = !0) : null == d && ((m.current = !0), o([], r));
            }
        }, [d, u, r, o, s]);
    })({ projectId: t, guildId: n, ...r }),
    null == s)
        ? l
        : (0, i.jsx)(n9, { ...r, guildId: n, options: s, placeholder: nR("channel", !0 === r.question.multi_select) });
}
function n6(e) {
    let { guildId: t, ...n } = e,
        l = (0, nX.A)(t);
    return (0, i.jsx)(n9, { ...n, guildId: t, options: l, placeholder: nR("role", !0 === n.question.multi_select) });
}
function le(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: a } = (0, nW.A)(t);
    return (0, i.jsx)(n9, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: r,
        matchSorterOptions: a,
        placeholder: nR("user", !0 === n.question.multi_select),
    });
}
function lt(e) {
    let { projectId: t, fallback: n, ...l } = e,
        r = nf(t),
        s = a.useMemo(
            () =>
                r.map((e) => ({
                    id: e.projectId,
                    label: e.name,
                    value: e.projectId,
                    ...(null == e.serverName ? {} : { description: e.serverName }),
                })),
            [r],
        );
    return 0 === s.length ? n : (0, i.jsx)(n9, { ...l, options: s, placeholder: nR("project", !1) });
}
function ln(e) {
    let t = e.target;
    (0, eY.vq)(t, HTMLInputElement) && requestAnimationFrame(() => t.select());
}
function ll(e) {
    let { fallback: t, ...n } = e,
        l = (0, nd.z9)("ConjureClarificationEntityPicker"),
        r = a.useMemo(
            () =>
                l.map((e) => ({
                    id: `conjure-target-${e.id}`,
                    value: e.id,
                    label: e.name,
                    leading: (0, i.jsx)(nH.Ay, { guild: e, size: nH.Ay.Sizes.MINI, active: !0 }),
                })),
            [l],
        );
    return 0 === r.length
        ? t
        : (0, i.jsx)("div", {
              onFocus: ln,
              onMouseUp: ln,
              children: (0, i.jsx)(n9, { ...n, options: r, placeholder: nR("server", !1) }),
          });
}
function lr(e) {
    let { projectId: t, fallback: n = null, ...l } = e,
        r = (0, nQ.Tj)(t, !0);
    if ("project" === l.question.input) return (0, i.jsx)(lt, { projectId: t, fallback: n, ...l }, l.question.id);
    if ("server" === l.question.input) return (0, i.jsx)(ll, { fallback: n, ...l }, l.question.id);
    if (null == r) return n;
    switch (l.question.input) {
        case "channel":
            return (0, i.jsx)(n8, { projectId: t, guildId: r, fallback: n, ...l }, l.question.id);
        case "role":
            return (0, i.jsx)(n6, { guildId: r, ...l }, l.question.id);
        case "user":
            return (0, i.jsx)(le, { guildId: r, ...l }, l.question.id);
        default:
            return n;
    }
}
var li = n(87221),
    la = n(771871),
    ls = n(26430),
    lu = n(750943),
    lo = n(173936),
    lc = n(95477),
    ld = n(256905),
    lf = n(490707),
    lm = n(907702);
function lh(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: s, gone: u, handleError: c } = (0, lf._)(t, n),
        [d, f] = a.useState(null),
        m = null != s && d === s;
    return u
        ? (0, i.jsxs)("span", {
              className: o()(lm.Gt, lm.b6),
              children: [
                  (0, i.jsx)(li.D, { size: "md", color: "currentColor" }),
                  (0, i.jsx)(v.E, {
                      tag: "span",
                      variant: "body-xs/medium",
                      color: "text-muted",
                      children: R.intl.string(T.default.lhgD88),
                  }),
              ],
          })
        : (0, i.jsx)("span", {
              className: o()(lm.Gt, { [lm.iP]: !m }),
              children:
                  null != s
                      ? (0, i.jsx)("img", {
                            src: s,
                            alt: l,
                            className: lm.Sl,
                            onLoad: (e) => {
                                f(s);
                                let { naturalWidth: t, naturalHeight: n } = e.currentTarget;
                                t > 0 && n > 0 && r({ width: t, height: n });
                            },
                            onError: c,
                            draggable: !1,
                        })
                      : null,
          });
}
function lg(e) {
    let t,
        n,
        {
            projectId: l,
            option: r,
            multi: a,
            selected: s,
            disabled: u,
            reachable: c,
            tabbable: d,
            onPick: f,
            onView: m,
            onArrow: h,
            onMeasured: g,
            onRemove: p,
        } = e,
        x = R.intl.formatToPlainString(T.default.JGjZMs, { answer: r.label });
    return (0, i.jsxs)("div", {
        className: o()(lm.Vs, { [lm.Q9]: s, [lm.RX]: u }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, i.jsxs)(tV.D, {
                className: o()(lm.Up, { [lm.XF]: null != r.image }),
                "data-conjure-image-option-pick": !0,
                onClick: u ? (null != r.image ? () => m(r) : void 0) : () => f(r),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), h(r, t));
                },
                role: a ? "checkbox" : "radio",
                "aria-checked": s,
                "aria-label": R.intl.formatToPlainString(T.default.AQbxhf, { answer: r.label }),
                "aria-disabled": u,
                tabIndex: c && d ? 0 : -1,
                children: [
                    (0, i.jsxs)("span", {
                        className: lm.$_,
                        children: [
                            null != r.image
                                ? (0, i.jsx)(lh, {
                                      projectId: l,
                                      attachmentId: r.image.attachment_id,
                                      alt: r.label,
                                      onMeasured: g,
                                  })
                                : (0, i.jsx)("span", { className: lm.Gt }),
                            (0, i.jsx)("span", {
                                className: lm.q3,
                                "aria-hidden": !0,
                                children: a
                                    ? (0, i.jsx)(nP.P, { checked: s, disabled: u })
                                    : (0, i.jsx)(la.T, { checked: s, disabled: u }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(v.E, {
                        tag: "span",
                        variant: "body-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: lm.pG,
                        children:
                            "" !== (n = null != (t = r.image?.page_url ?? r.image?.url) ? (0, nO.E)(t) : "")
                                ? (function (e) {
                                      let t = e.toLowerCase().split(".");
                                      if (t.length < 2 || /^\d+$/.test(t[t.length - 1]) || e.includes(":")) return e;
                                      let [n, l] = t.slice(-2),
                                          r = t.length > 2 && 2 === l.length && n.length <= 3;
                                      return t.slice(r ? -3 : -2).join(".");
                                  })(n)
                                : r.label,
                    }),
                ],
            }),
            null != p
                ? (0, i.jsx)("span", {
                      className: lm.B4,
                      children: (0, i.jsx)(e1.m, {
                          text: R.intl.string(T.default.HQEXJM),
                          children: (0, i.jsx)(tn.K, {
                              icon: ts.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: p,
                              disabled: u,
                              "aria-label": R.intl.string(T.default.HQEXJM),
                              tabIndex: c ? 0 : -1,
                          }),
                      }),
                  })
                : null != r.image
                  ? (0, i.jsx)("span", {
                        className: lm.B4,
                        children: (0, i.jsx)(e1.m, {
                            text: R.intl.string(T.default["4/eeDD"]),
                            children: (0, i.jsx)(tn.K, {
                                icon: ls._,
                                size: "sm",
                                variant: "overlay-secondary",
                                onClick: () => m(r),
                                "aria-label": x,
                                tabIndex: c && d ? 0 : -1,
                            }),
                        }),
                    })
                  : null,
        ],
    });
}
function lp(e) {
    let { projectId: t, question: n, selectedIds: l, disabled: r, reachable: s = !0, onPick: u, own: c } = e,
        d = !0 === n.multi_select,
        { options: f } = n,
        m = f.length > 4 ? "gallery" : "row",
        h = a.useRef(null),
        g = a.useRef(new Map()),
        [p, x] = a.useState(null),
        v = null != p && f.some((e) => e.id === p) ? p : (f.find((e) => l.includes(e.id)) ?? f[0])?.id,
        j = a.useMemo(() => {
            var e;
            return null == c.image
                ? null
                : ((e = c.image),
                  {
                      id: `own:${e.attachment.id}`,
                      label: R.intl.string(T.default.SUdqCQ),
                      image: { attachment_id: e.attachment.id },
                  });
        }, [c.image]),
        b = a.useCallback(
            (e) => {
                let n = (null == j ? f : [...f, j]).flatMap((e) => (null != e.image ? [{ ...e, image: e.image }] : [])),
                    l = n.findIndex((t) => t.id === e.id);
                l < 0 ||
                    Promise.all(n.map((e) => (0, e0.PK)(t, e.image.attachment_id))).then(
                        (e) => {
                            (0, ld.R)({
                                items: e.map((e, t) => {
                                    let l,
                                        r = g.current.get(n[t].id);
                                    return {
                                        type: "IMAGE",
                                        url: e,
                                        original: e,
                                        alt: n[t].label,
                                        ...(null != r
                                            ? ((l = Math.max(1, 480 / Math.max(r.width, r.height))),
                                              { width: Math.round(r.width * l), height: Math.round(r.height * l) })
                                            : {}),
                                    };
                                }),
                                startingIndex: l,
                                shouldHideMediaOptions: !0,
                                location: "ConjureClarificationImageOptions",
                            });
                        },
                        () => {},
                    );
            },
            [f, j, t],
        ),
        y = a.useCallback(
            (e, t) => {
                let n = (f.findIndex((t) => t.id === e.id) + t + f.length) % f.length,
                    l = f[n];
                (x(l.id), h.current?.querySelectorAll("[data-conjure-image-option-pick]")[n]?.focus(), d || r || u(l));
            },
            [r, d, u, f],
        );
    return (0, i.jsxs)("div", {
        className: lm.Nz,
        "data-conjure-image-options": !0,
        children: [
            0 === f.length && null == j
                ? null
                : (0, i.jsxs)("div", {
                      ref: h,
                      className: o()(lm.fF, "gallery" === m ? lm.nV : lm.nM, { [lm.m3]: d }),
                      role: d ? "group" : "radiogroup",
                      "aria-labelledby": `${n.id}-label`,
                      "data-layout": m,
                      "data-count": f.length,
                      children: [
                          f.map((e) =>
                              (0, i.jsx)(
                                  lg,
                                  {
                                      projectId: t,
                                      option: e,
                                      multi: d,
                                      selected: l.includes(e.id),
                                      disabled: r,
                                      reachable: s,
                                      tabbable: d || e.id === v,
                                      onPick: (e) => {
                                          (x(e.id), u(e));
                                      },
                                      onView: b,
                                      onArrow: y,
                                      onMeasured: (t) => g.current.set(e.id, t),
                                  },
                                  e.id,
                              ),
                          ),
                          null != j
                              ? (0, i.jsx)(
                                    lg,
                                    {
                                        projectId: t,
                                        option: j,
                                        multi: d,
                                        selected: c.selected,
                                        disabled: r,
                                        reachable: s,
                                        tabbable: !0,
                                        onPick: c.onPick,
                                        onView: b,
                                        onArrow: () => void 0,
                                        onMeasured: (e) => g.current.set(j.id, e),
                                        onRemove: c.onRemove,
                                    },
                                    j.id,
                                )
                              : null,
                      ],
                  }),
            (0, i.jsx)(lx, {
                projectId: t,
                own: c,
                disabled: r,
                reachable: s,
                uploadText: R.intl.string(/\bicons?\b/i.test(n.question) ? T.default.qU4WN6 : T.default.cbMDDB),
            }),
        ],
    });
}
function lx(e) {
    let { projectId: t, own: n, disabled: l, reachable: r, uploadText: s } = e,
        u = a.useRef(null),
        [o, c] = a.useState(!1),
        [f, m] = a.useState(""),
        h = r ? 0 : -1,
        g = n.busy;
    function p() {
        "" !== f.trim() &&
            null == g &&
            n.onLink(f.trim()).then(
                (e) => {
                    e && (c(!1), m(""));
                },
                () => void 0,
            );
    }
    return (0, i.jsxs)("div", {
        className: lm.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, i.jsxs)("div", {
                className: lm.QJ,
                children: [
                    (0, i.jsx)(d.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: lu.X,
                        text: s,
                        loading: "upload" === g,
                        disabled: l || "link" === g,
                        onClick: () => u.current?.click(),
                        tabIndex: h,
                        "data-conjure-own-image-upload": !0,
                    }),
                    o
                        ? null
                        : (0, i.jsx)(d.$, {
                              variant: "secondary",
                              size: "sm",
                              icon: lo.LinkIcon,
                              text: R.intl.string(T.default["1TgOO+"]),
                              disabled: l || "upload" === g,
                              onClick: () => c(!0),
                              tabIndex: h,
                              "data-conjure-own-image-link": !0,
                          }),
                    (0, i.jsx)("input", {
                        ref: u,
                        type: "file",
                        accept: "image/png,image/jpeg,image/gif,image/webp",
                        className: lm.Fg,
                        tabIndex: -1,
                        "aria-hidden": !0,
                        onChange: (e) => {
                            let l = e.currentTarget.files?.[0];
                            ((e.currentTarget.value = ""), null != l && n.onUpload((0, nc.rh)(t, l, l.name, l.type)));
                        },
                    }),
                ],
            }),
            o
                ? (0, i.jsxs)("div", {
                      className: lm.vG,
                      children: [
                          (0, i.jsx)("div", {
                              className: lm.Hs,
                              children: (0, i.jsx)(lc.k, {
                                  label: R.intl.string(T.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: R.intl.string(T.default.AVhvn8),
                                  value: f,
                                  onChange: (e) => m(e),
                                  onKeyDown: (e) => {
                                      "Enter" === e.key
                                          ? (e.preventDefault(), p())
                                          : "Escape" === e.key && (e.stopPropagation(), c(!1));
                                  },
                                  autoFocus: !0,
                                  type: "url",
                                  error: null == g && n.error?.source === "link" ? n.error.text : null,
                                  disabled: l,
                                  "data-conjure-own-image-link-input": !0,
                              }),
                          }),
                          (0, i.jsxs)("div", {
                              className: lm.gd,
                              children: [
                                  (0, i.jsx)(d.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: R.intl.string(T.default.FbRbeM),
                                      loading: "link" === g,
                                      disabled: l || "" === f.trim(),
                                      onClick: p,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, i.jsx)(nL.Q, {
                                      variant: "secondary",
                                      textVariant: "body-sm/medium",
                                      text: R.intl.string(T.default.eXZL4X),
                                      onClick: () => c(!1),
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
            n.error?.source === "upload"
                ? (0, i.jsx)(v.E, {
                      variant: "body-xs/normal",
                      color: "text-feedback-critical",
                      role: "alert",
                      "data-conjure-own-image-error": !0,
                      children: n.error.text,
                  })
                : null,
        ],
    });
}
function lv(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: u } = e,
        c = a.useId(),
        d = !0 === t.recommended,
        f = null != t.detail && "" !== t.detail;
    return (0, i.jsxs)(tV.D, {
        className: o()(n5.uK, { [n5.ue]: l, [n5.h4]: !0 === u }),
        onClick: l ? void 0 : () => r(t),
        "aria-label": R.intl.formatToPlainString(d ? T.default["2p6UFz"] : T.default.AQbxhf, { answer: t.label }),
        "aria-describedby": f ? c : void 0,
        "aria-disabled": l,
        role: null != u ? "checkbox" : void 0,
        "aria-checked": u,
        tabIndex: s ? 0 : -1,
        "data-conjure-clarification-option": t.id,
        "data-recommended": d ? "true" : void 0,
        children: [
            null != u
                ? (0, i.jsx)("span", { className: n5.dy, children: (0, i.jsx)(nP.P, { checked: u, disabled: l }) })
                : (0, i.jsx)("span", { className: n5.Gy, "aria-hidden": !0, children: n }),
            (0, i.jsxs)("span", {
                className: n5.qO,
                children: [
                    (0, i.jsx)("span", {
                        className: n5.l8,
                        children: (0, i.jsx)(v.E, {
                            tag: "span",
                            variant: "body-md/medium",
                            color: "none",
                            className: n5.ed,
                            children: t.label,
                        }),
                    }),
                    f
                        ? (0, i.jsx)(v.E, {
                              tag: "span",
                              id: c,
                              variant: "body-xs/normal",
                              color: "text-muted",
                              children: t.detail,
                          })
                        : null,
                ],
            }),
            d
                ? (0, i.jsx)(v.E, {
                      tag: "span",
                      variant: "body-xs/semibold",
                      color: "text-muted",
                      className: n5.rM,
                      children: R.intl.string(T.default.zku6r1),
                  })
                : null,
        ],
    });
}
function lj(e) {
    let { projectId: t, question: n, selected: l, disabled: r, reachable: a = !0, onPick: s, own: u } = e,
        o = !0 === n.multi_select;
    return nG(n)
        ? (0, i.jsx)(lp, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: a, onPick: s, own: u })
        : (0, i.jsx)(i.Fragment, {
              children: n.options.map((e, t) =>
                  (0, i.jsx)(
                      lv,
                      {
                          option: e,
                          position: t + 1,
                          disabled: r,
                          selected: o ? l.includes(e.id) : void 0,
                          onPick: s,
                          reachable: a,
                      },
                      e.id,
                  ),
              ),
          });
}
let lb = [],
    ly = [];
function lk(e) {
    let {
            projectId: t,
            question: n,
            draft: l,
            selected: r,
            direction: a,
            disabled: s,
            ownImage: u,
            ownSelected: c,
        } = e,
        d = "" === l.trim() ? null : l,
        f = !0 === n.multi_select ? R.intl.string(T.default.tE8qbz) : nU(n);
    return (0, i.jsxs)("div", {
        className: o()(n5.Ge, n5.x1),
        "data-direction": a,
        "aria-hidden": !0,
        children: [
            null == f
                ? null
                : (0, i.jsx)(v.E, {
                      tag: "div",
                      variant: "body-xs/normal",
                      color: "text-muted",
                      className: n5.aK,
                      children: f,
                  }),
            (0, i.jsx)(lj, {
                projectId: t,
                question: n,
                selected: r,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: nK(u, c),
            }),
            !1 === n.allow_custom || (!0 !== n.upload && nG(n))
                ? null
                : (0, i.jsxs)("div", {
                      className: n5.Xy,
                      children: [
                          (0, i.jsx)("span", {
                              className: n5.Gy,
                              "aria-hidden": !0,
                              children: (0, i.jsx)(m.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == d ? null : (0, i.jsx)("span", { className: o()(n5.Pu, n5.es), children: d }),
                      ],
                  }),
            !0 === n.upload
                ? (0, i.jsx)("div", {
                      className: n5.$0,
                      children: (0, i.jsx)(nL.Q, {
                          variant: "secondary",
                          textVariant: "body-sm/medium",
                          text: R.intl.string(T.default.zxSq2q),
                          disabled: s,
                          tabIndex: -1,
                      }),
                  })
                : null,
        ],
    });
}
function lw(e) {
    var t;
    let {
            projectId: n,
            clarification: l,
            onSubmit: r,
            onDismiss: s,
            submitText: u,
            onBack: c,
            backText: f,
            hideSubmit: h = !1,
            headingLines: g = 5,
        } = e,
        [p, x] = a.useState({}),
        [j, b] = a.useState({}),
        [y, k] = a.useState({}),
        [w, A] = a.useState(() =>
            Object.fromEntries(
                l.questions.flatMap((e) => (null != e.default_entities ? [[e.id, e.default_entities]] : [])),
            ),
        ),
        [N, S] = a.useState({}),
        [C, I] = a.useState({}),
        [E, _] = a.useState(!1),
        [M, P] = a.useState(0),
        [L, $] = a.useState(null),
        [q, D] = a.useState(null),
        [F, O] = a.useState(null),
        [G, z] = a.useState(!1),
        U = a.useRef(null),
        [B, K] = a.useState(null),
        H = a.useRef(null),
        V = a.useRef(0),
        W = null == r,
        X = l.questions.length,
        Q = Math.min(M, X - 1),
        Z = l.questions[Q],
        [Y, J] = a.useState({ id: Z.id, expanded: !1 }),
        ee = Y.id === Z.id && Y.expanded,
        [et, en] = a.useState(null),
        el = j[Z.id] ?? "",
        er = !0 === Z.multi_select,
        ei = nG(Z),
        ea = er ? R.intl.string(T.default.tE8qbz) : nU(Z),
        es = er
            ? (y[Z.id] ?? lb)
            : ((t = p[Z.id]), t?.kind === "option" ? [t.optionId] : t?.kind === "multi" ? t.optionIds : nz),
        eu = (function (e, t, n) {
            let [l, r] = a.useState({}),
                [i, s] = a.useState({}),
                [u, o] = a.useState({}),
                c = R.intl.string(T.default.wTsP5l),
                d = a.useCallback((e) => l[e] ?? null, [l]),
                f = a.useCallback(
                    (e) => null != l[e.id] && (!0 === e.multi_select ? !0 === u[e.id] : nB(t[e.id])),
                    [t, l, u],
                ),
                m = a.useCallback(
                    (e) => {
                        let t = l[e.id];
                        return null != t && !0 === u[e.id] ? { attachment: t.attachment, text: c } : void 0;
                    },
                    [c, l, u],
                ),
                h = a.useCallback(
                    (a, u) => {
                        let d = a.id,
                            m = !0 === a.multi_select,
                            h = l[d] ?? null;
                        if (u) return nK(h, f(a));
                        function g(e) {
                            return s((t) => ({ ...t, [d]: e }));
                        }
                        function p(e) {
                            return { kind: "image", attachment: e.attachment, text: c };
                        }
                        let x = t[d];
                        function v(t) {
                            (r((n) => {
                                let l = n[d];
                                return (
                                    null != l && (0, e0.Vm)(e, l.attachment.id).catch(() => void 0), { ...n, [d]: t }
                                );
                            }),
                                g({ busy: null, error: null }),
                                m ? o((e) => ({ ...e, [d]: !0 })) : n((e) => (e[d] === x ? { ...e, [d]: p(t) } : e)));
                        }
                        return {
                            image: h,
                            selected: f(a),
                            busy: i[d]?.busy ?? null,
                            error: i[d]?.error ?? null,
                            onPick: () => {
                                null != h &&
                                    (m ? o((e) => ({ ...e, [d]: !0 !== e[d] })) : n((e) => ({ ...e, [d]: p(h) })));
                            },
                            onRemove: () => {
                                null != h &&
                                    ((0, e0.Vm)(e, h.attachment.id).catch(() => void 0),
                                    r((e) => {
                                        let { [d]: t, ...n } = e;
                                        return n;
                                    }),
                                    o((e) => ({ ...e, [d]: !1 })),
                                    n((e) => {
                                        if (m || !nB(e[d])) return e;
                                        let { [d]: t, ...n } = e;
                                        return n;
                                    }));
                            },
                            onUpload: (e) => {
                                (g({ busy: "upload", error: null }),
                                    e.then(
                                        (e) => {
                                            "errorText" in e
                                                ? g({ busy: null, error: { source: "upload", text: e.errorText } })
                                                : v({ attachment: e });
                                        },
                                        () =>
                                            g({
                                                busy: null,
                                                error: { source: "upload", text: R.intl.string(T.default["kUw/b1"]) },
                                            }),
                                    ));
                            },
                            onLink: (t) => (
                                g({ busy: "link", error: null }),
                                (0, e0.gm)(e, t).then(
                                    (e) => (v({ attachment: e }), !0),
                                    (e) => (
                                        g({
                                            busy: null,
                                            error: {
                                                source: "link",
                                                text:
                                                    e instanceof Error && "" !== e.message
                                                        ? e.message
                                                        : R.intl.string(T.default.l79PMc),
                                            },
                                        }),
                                        !1
                                    ),
                                )
                            ),
                        };
                    },
                    [c, t, l, e, f, n, i],
                );
            return { imageFor: d, selectedFor: f, multiPartFor: m, controlsFor: h };
        })(n, p, x),
        eo = eu.imageFor(Z.id),
        ec = eu.selectedFor(Z),
        { text: ed, phase: ef } = (0, nF.Q)(Z.question),
        em = ed === Z.question,
        eh = em && et?.id === Z.id && et.truncated;
    a.useLayoutEffect(() => {
        if (null == B || ee || !em) return;
        function e() {
            if (null == B) return;
            let e = B.scrollHeight > B.clientHeight + 1;
            en((t) => (t?.id === Z.id && t.truncated === e ? t : { id: Z.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(B), () => t.disconnect());
    }, [em, B, Z.id, ee]);
    let eg = R.intl.string(ee ? R.t.iTcuma : R.t.dcl9MQ),
        ep = a.useCallback(
            (e) => {
                null != r &&
                    (function (e, t, n, l, r) {
                        let i = nC(t, n);
                        if ("" !== i) {
                            var a;
                            let s;
                            ((a = () => {
                                let e;
                                return r(
                                    i,
                                    (e = t.questions.flatMap((e) => {
                                        let t = n[e.id];
                                        if (null == t || "" === t.text.trim()) return [];
                                        let l =
                                                "option" === t.kind
                                                    ? [t.optionId]
                                                    : "multi" === t.kind
                                                      ? t.optionIds
                                                      : [],
                                            r =
                                                "custom" === t.kind
                                                    ? t.text.trim()
                                                    : "multi" === t.kind || "entities" === t.kind
                                                      ? t.custom
                                                      : void 0,
                                            i = "entities" === t.kind ? t.entities : [],
                                            a = "entities" === t.kind && i.length > 0 ? t.guildId : void 0,
                                            s = "image" === t.kind || "multi" === t.kind ? t.attachment : void 0;
                                        return [
                                            {
                                                question_id: e.id,
                                                option_ids: l,
                                                ...(null != r && "" !== r ? { custom: r } : {}),
                                                ...(null != s ? { attachment_id: s.id } : {}),
                                                ...(i.length > 0 ? { entities: i } : {}),
                                                ...(null != a ? { guild_id: a } : {}),
                                            },
                                        ];
                                    })).length > 0
                                        ? { clarification_id: t.id, answers: e }
                                        : null,
                                    t.questions.flatMap((e) => {
                                        let t = n[e.id];
                                        return null == t || "" === t.text.trim()
                                            ? []
                                            : "image" === t.kind || ("multi" === t.kind && null != t.attachment)
                                              ? [t.attachment]
                                              : [];
                                    }),
                                );
                            }),
                                0 ===
                                (s = t.questions.flatMap((e) => {
                                    let t = n[e.id];
                                    return !0 === e.link && t?.kind === "entities"
                                        ? t.entities.map((t) => ({ target: t.id, build: l[e.id] }))
                                        : [];
                                })).length
                                    ? a()
                                    : Promise.allSettled(
                                          s.map((t) => {
                                              let { target: n, build: l } = t;
                                              return (0, nA.Ol)(n, e, l);
                                          }),
                                      ).then(a));
                        }
                    })(n, l, e, C, r);
            },
            [l, C, r, n],
        ),
        ex = a.useCallback(
            (e, t) => {
                V.current += 1;
                let n = V.current;
                ($({ direction: t, moves: n }),
                    D({ question: Z, draft: el, selected: es, ownImage: eo, ownSelected: ec, direction: t, moves: n }),
                    z(!0),
                    P(e));
            },
            [el, eo, ec, Z, es],
        ),
        ev = a.useCallback(() => {
            let e = U.current,
                t = H.current;
            null != e && null != t && O({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    a.useLayoutEffect(() => {
        let e = U.current,
            t = H.current;
        if (null == e || null == t) return;
        ev();
        let n = new ResizeObserver(ev);
        return (n.observe(e), n.observe(t), () => n.disconnect());
    }, [ev]);
    let ej = L?.moves;
    a.useEffect(() => {
        if (null == ej) return;
        let e = setTimeout(() => D(null), 400),
            t = setTimeout(() => z(!1), 500);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [ej]);
    let eb = a.useCallback(
            (e) => {
                let t = nS(l, e, Q);
                null == t ? ep(e) : ex(t, t < Q ? "back" : "forward");
            },
            [l, Q, ep, ex],
        ),
        ey = a.useCallback(
            (e) => {
                if (W) return;
                let t = { ...p, [Z.id]: e };
                (x(t), eb(t));
            },
            [eb, p, W, Z.id],
        ),
        ek = a.useCallback(() => {
            W || 0 === Q || ex(Q - 1, "back");
        }, [W, Q, ex]),
        ew = 0 !== Q || W ? void 0 : c,
        eA = (Q > 0 && !W) || null != ew,
        eS = a.useCallback(
            (e) => {
                b((e) => ({ ...e, [Z.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                ei ? W || x((e) => ({ ...e, [Z.id]: t })) : ey(t);
            },
            [W, ei, Z.id, ey],
        ),
        eC = a.useCallback(() => {
            (b((e) => ({ ...e, [Z.id]: "" })), ey({ kind: "custom", text: R.intl.string(T.default.zxSq2q) }));
        }, [Z.id, ey]),
        { multiPartFor: eI } = eu,
        eE = a.useMemo(() => (er ? nI(Z, es, el, eI(Z)) : null), [el, er, eI, Z, es]),
        e_ = w[Z.id] ?? ly,
        eM = a.useMemo(() => {
            var e, t;
            let n;
            return null != Z.input
                ? ((e = Z.input),
                  (t = N[Z.id]),
                  (n = el.trim()),
                  {
                      kind: "entities",
                      entities: e_,
                      ...(null == t ? {} : { guildId: t }),
                      ...("" === n ? {} : { custom: n }),
                      text: [
                          ...e_.map((t) => (t.name.startsWith(nM[e]) ? t.name : `${nM[e]}${t.name}`)),
                          ...("" === n ? [] : [n]),
                      ].join(", "),
                  })
                : null;
        }, [el, N, e_, Z.id, Z.input]),
        eT = a.useCallback(
            (e, t) => {
                (A((t) => ({ ...t, [Z.id]: e })), S((e) => ({ ...e, [Z.id]: t })));
            },
            [Z.id],
        ),
        eR = a.useCallback(() => _(!0), []),
        eP = a.useCallback(() => _(!1), []),
        eL = eu.controlsFor(Z, W),
        e$ = a.useMemo(() => {
            var e;
            let t;
            return (
                (e = p[Z.id]),
                null ==
                (t = (function (e, t) {
                    if (!0 !== e.upload || !0 === e.multi_select || null == t) return null;
                    if ("option" === t.kind || "image" === t.kind) return t;
                    if ("multi" !== t.kind) return null;
                    if (null != t.attachment)
                        return { kind: "image", attachment: t.attachment, text: R.intl.string(T.default.wTsP5l) };
                    let n = e.options.find((e) => {
                        let { id: n } = e;
                        return t.optionIds.includes(n);
                    });
                    return null != n ? { kind: "option", optionId: n.id, text: n.label } : null;
                })(Z, e))
                    ? null
                    : "" === el.trim()
                      ? e?.kind === "multi"
                          ? t
                          : null
                      : "option" === t.kind
                        ? nI(Z, [t.optionId], el)
                        : nI(Z, [], el, t)
            );
        }, [p, el, Z]),
        eq = a.useMemo(
            () =>
                (function (e, t, n) {
                    if (null != e) return "" !== e.text ? e : null;
                    if (null != t) return "" !== t.text ? t : null;
                    let l = n.trim();
                    return "" !== l ? { kind: "custom", text: l } : null;
                })(eM, eE ?? e$, el),
            [el, eE, e$, eM],
        ),
        eD = a.useCallback(() => {
            null != eq && ey(eq);
        }, [eq, ey]),
        [eF, eO] = a.useState(!1),
        [eG, ez] = a.useState(!1);
    a.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => eO(!0));
            });
        return () => {
            (cancelAnimationFrame(t), cancelAnimationFrame(e));
        };
    }, []);
    let eU = a.useCallback(() => {
            null != s && (ez(!0), setTimeout(s, 150));
        }, [s]),
        eB = eq ?? (null == eM && null == eE ? (p[Z.id] ?? null) : null),
        eK = a.useMemo(
            () =>
                null == eB
                    ? (function (e, t, n) {
                          let l = e.questions[n];
                          if (l?.optional !== !0) return null;
                          let r = Object.fromEntries(
                              Object.entries(t).filter((e) => {
                                  let [t] = e;
                                  return t !== l.id;
                              }),
                          );
                          return null == nS(e, r, n) && "" === nC(e, r) ? null : r;
                      })(l, p, Q)
                    : null,
            [p, l, Q, eB],
        ),
        eH = null != eK,
        eV = (null != eB || eH) && !W,
        eX = Q === X - 1,
        eQ = a.useCallback(() => {
            W || (null != eB ? ey(eB) : null != eK && (x(eK), eb(eK)));
        }, [eb, W, eB, ey, eK]),
        eZ = a.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, eY.vq)(e.target, HTMLTextAreaElement) ||
                    (0, eY.vq)(e.target, HTMLInputElement) ||
                    ((!(0, eY.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && eA
                            ? (e.preventDefault(), (ew ?? ek)())
                            : "ArrowRight" === e.key && eV && (e.preventDefault(), eQ())));
            },
            [ew, eA, eV, ek, eQ],
        ),
        eJ =
            ei && !0 !== Z.upload
                ? null
                : (0, i.jsxs)("div", {
                      className: n5.Xy,
                      children: [
                          (0, i.jsx)("span", {
                              className: n5.Gy,
                              "aria-hidden": !0,
                              children: (0, i.jsx)(m.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          (0, i.jsx)(e3.y, {
                              value: el,
                              onChange: (e) => {
                                  let { value: t } = e.currentTarget;
                                  b((e) => ({ ...e, [Z.id]: t }));
                              },
                              onKeyDown: (e) => {
                                  "Enter" !== e.key ||
                                      e.shiftKey ||
                                      e.nativeEvent.isComposing ||
                                      (e.preventDefault(), eD());
                              },
                              placeholder: R.intl.string(nN(Z) ? T.default.yLN1x6 : T.default["tOC+tn"]),
                              "aria-label": R.intl.formatToPlainString(T.default["4JeYPB"], { question: Z.question }),
                              disabled: W,
                              rows: 1,
                              className: n5.Pu,
                              "data-conjure-clarification-other": Z.id,
                          }),
                      ],
                  });
    return (0, i.jsxs)("section", {
        className: o()(n5.$O, { [n5.fI]: eF && !eG, [n5.Oh]: eG }),
        role: "dialog",
        "aria-label": Z.question,
        "data-conjure-clarification": l.id,
        "data-state": W ? "inert" : "open",
        "data-question-expanded": ee ? "true" : void 0,
        "data-picker-open": E && !G ? "true" : void 0,
        "data-step": Q,
        tabIndex: -1,
        onKeyDown: eZ,
        children: [
            (0, i.jsxs)("div", {
                className: n5.rf,
                style: null == F ? void 0 : { height: F.heading + F.rows },
                "data-moving": G ? "" : void 0,
                children: [
                    (0, i.jsxs)("div", {
                        ref: U,
                        className: n5.wx,
                        children: [
                            (0, i.jsx)(v.E, {
                                ref: K,
                                tag: "span",
                                id: `${Z.id}-label`,
                                variant: "body-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: ee ? void 0 : g,
                                className: o()(nx.TK, n5.R_, { [n5.TB]: "exit" === ef, [n5.JU]: "enter" === ef }),
                                children: ed,
                            }),
                            eh || ee
                                ? (0, i.jsx)("div", {
                                      className: nx.Q7,
                                      children: (0, i.jsx)(e1.m, {
                                          text: eg,
                                          children: (0, i.jsx)(tn.K, {
                                              icon: ee ? n$.t : eN.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => J({ id: Z.id, expanded: !ee }),
                                              "aria-label": eg,
                                              "aria-controls": `${Z.id}-label`,
                                              "aria-expanded": ee,
                                          }),
                                      }),
                                  })
                                : null,
                            null == s
                                ? null
                                : (0, i.jsx)(tV.D, {
                                      className: o()(nx.gb, nx.Q7),
                                      onClick: eU,
                                      "aria-label": R.intl.string(T.default.qVXlk0),
                                      "data-conjure-clarification-close": !0,
                                      children: (0, i.jsx)(eW.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: n5.Cg,
                        style: null == F ? void 0 : { insetBlockStart: F.heading },
                        children: (0, i.jsxs)("div", {
                            className: n5.I,
                            children: [
                                (0, i.jsxs)("div", {
                                    ref: H,
                                    className: n5.Ge,
                                    role: "group",
                                    "aria-labelledby": `${Z.id}-label`,
                                    "data-direction": L?.direction,
                                    "data-parity": null == L ? void 0 : L.moves % 2,
                                    children: [
                                        null == ea
                                            ? null
                                            : (0, i.jsx)(v.E, {
                                                  tag: "div",
                                                  variant: "body-xs/normal",
                                                  color: "text-muted",
                                                  className: n5.aK,
                                                  children: ea,
                                              }),
                                        (0, i.jsx)(lj, {
                                            projectId: n,
                                            question: Z,
                                            selected: es,
                                            disabled: W,
                                            onPick: (e) =>
                                                er
                                                    ? k((t) => {
                                                          var n, l;
                                                          let r;
                                                          return {
                                                              ...t,
                                                              [Z.id]:
                                                                  ((n = t[Z.id] ?? lb),
                                                                  (l = e.id),
                                                                  (r = n.includes(l)
                                                                      ? n.filter((e) => e !== l)
                                                                      : [...n, l]),
                                                                  Z.options
                                                                      .filter((e) => r.includes(e.id))
                                                                      .map((e) => e.id)),
                                                          };
                                                      })
                                                    : eS(e),
                                            own: eL,
                                        }),
                                        null != Z.input
                                            ? (0, i.jsx)(lr, {
                                                  projectId: n,
                                                  question: Z,
                                                  value: e_,
                                                  disabled: W,
                                                  onChange: eT,
                                                  onFocus: eR,
                                                  onBlur: eP,
                                                  fallback: !1 === Z.allow_custom ? eJ : null,
                                              })
                                            : null,
                                        !0 === Z.link && e_.length > 0 && null == C[Z.id]
                                            ? (0, i.jsx)("div", {
                                                  className: n5.X_,
                                                  children: (0, i.jsx)(nL.Q, {
                                                      variant: "secondary",
                                                      textVariant: "body-sm/medium",
                                                      text: R.intl.string(T.default.eCzCxC),
                                                      disabled: W,
                                                      onClick: () => I((e) => ({ ...e, [Z.id]: "auto" })),
                                                  }),
                                              })
                                            : null,
                                        !0 === Z.link && e_.length > 0 && null != C[Z.id]
                                            ? (0, i.jsxs)("div", {
                                                  className: n5.$y,
                                                  onFocus: eR,
                                                  onBlur: eP,
                                                  children: [
                                                      (0, i.jsx)(v.E, {
                                                          variant: "body-sm/normal",
                                                          color: "text-muted",
                                                          "aria-hidden": !0,
                                                          children: R.intl.string(T.default.Odrcmq),
                                                      }),
                                                      (0, i.jsx)(nD, {
                                                          label: R.intl.string(T.default.Odrcmq),
                                                          hideLabel: !0,
                                                          autoFocus: !0,
                                                          value: C[Z.id] ?? "auto",
                                                          disabled: W,
                                                          onChange: (e) => I((t) => ({ ...t, [Z.id]: e })),
                                                      }),
                                                  ],
                                              })
                                            : null,
                                        null != Z.note
                                            ? (0, i.jsx)(v.E, {
                                                  tag: "div",
                                                  variant: "body-xs/normal",
                                                  color: "text-muted",
                                                  className: n5.aK,
                                                  children: Z.note,
                                              })
                                            : null,
                                        !1 === Z.allow_custom ? null : eJ,
                                        !0 === Z.upload
                                            ? (0, i.jsx)("div", {
                                                  className: n5.$0,
                                                  children: (0, i.jsx)(nL.Q, {
                                                      variant: "secondary",
                                                      textVariant: "body-sm/medium",
                                                      text: R.intl.string(T.default.zxSq2q),
                                                      disabled: W,
                                                      onClick: eC,
                                                      "data-conjure-no-image": !0,
                                                  }),
                                              })
                                            : null,
                                    ],
                                }),
                                null == q
                                    ? null
                                    : (0, i.jsx)(
                                          lk,
                                          {
                                              projectId: n,
                                              question: q.question,
                                              draft: q.draft,
                                              selected: q.selected,
                                              ownImage: q.ownImage,
                                              ownSelected: q.ownSelected,
                                              direction: q.direction,
                                              disabled: W,
                                          },
                                          q.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            X > 1 || er || ei || null != Z.input || null != c || !0 === Z.optional || nN(Z)
                ? (0, i.jsxs)("div", {
                      className: nx.qr,
                      children: [
                          (0, i.jsx)(v.E, {
                              tag: "span",
                              variant: "body-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  X > 1
                                      ? R.intl.formatToPlainString(T.default.yzYUjq, { index: Q + 1, total: X })
                                      : null,
                          }),
                          (0, i.jsxs)("div", {
                              className: nx.zt,
                              children: [
                                  eA
                                      ? (0, i.jsx)(nL.Q, {
                                            variant: "secondary",
                                            textVariant: "body-sm/medium",
                                            text: f ?? R.intl.string(T.default.Pk5lfA),
                                            onClick: ew ?? ek,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  h
                                      ? null
                                      : (0, i.jsx)(d.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: eX
                                                ? (u ?? R.intl.string(R.t.geKm7t))
                                                : R.intl.string(eH ? T.default.ZcrbKz : T.default.w1nRmT),
                                            disabled: !eV,
                                            onClick: eQ,
                                            "data-conjure-clarification-next": !0,
                                            "data-submits": eX ? "true" : void 0,
                                        }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var lA = n(71637),
    lN = n(557744),
    lS = n(223347),
    lC = n(894443),
    lI = n(525530),
    lE = n(513425),
    l_ = n(708679);
function lM(e) {
    return (0, c.bG)([eT.Ay], () => eT.Ay.getProject(e)?.install_scope_setup != null, [e]);
}
let lT = "scope-setup:q0",
    lR = `${lT}:0`,
    lP = `${lT}:1`;
var lL = n(715924);
let l$ = [];
function lq() {}
function lD(e) {
    let { projectId: t, card: n } = e,
        l = a.useId(),
        [r] = n.clarification.questions,
        [s, u] = a.useState(r.default_entities ?? l$),
        { onPickServer: c, onBack: f } = n,
        m = s[0]?.id;
    return (0, i.jsxs)("section", {
        className: o()(nx.nd, nx.jx),
        "aria-labelledby": l,
        "data-conjure-scope-server-card": !0,
        children: [
            (0, i.jsxs)("div", {
                className: lL.wx,
                children: [
                    (0, i.jsx)(v.E, {
                        tag: "span",
                        id: l,
                        variant: "body-sm/medium",
                        color: "text-subtle",
                        children: R.intl.string(T.default.ickKBI),
                    }),
                    (0, i.jsx)(v.E, {
                        tag: "span",
                        variant: "body-xs/normal",
                        color: "text-muted",
                        children: R.intl.string(T.default.OyM4SV),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: lL.Qs,
                children: [
                    (0, i.jsx)(lr, {
                        projectId: t,
                        question: r,
                        value: s,
                        disabled: null == c,
                        onChange: u,
                        onFocus: lq,
                        onBlur: lq,
                    }),
                    null != r.note
                        ? (0, i.jsx)(v.E, { variant: "body-xs/normal", color: "text-muted", children: r.note })
                        : null,
                ],
            }),
            (0, i.jsxs)("div", {
                className: lL.qr,
                children: [
                    (0, i.jsx)(d.$, {
                        variant: "primary",
                        size: "sm",
                        text: R.intl.string(T.default.PTIP7V),
                        disabled: null == m || null == c,
                        onClick: () => {
                            null != m && c?.(m);
                        },
                    }),
                    null != f
                        ? (0, i.jsx)(nL.Q, {
                              variant: "secondary",
                              textVariant: "body-sm/medium",
                              text: R.intl.string(R.t["ETE/oC"]),
                              onClick: f,
                          })
                        : null,
                ],
            }),
        ],
    });
}
function lF(e) {
    let { projectId: t } = e,
        n = (function (e) {
            let t = (0, c.bG)([eT.Ay], () => eT.Ay.getProject(e), [e]),
                n = (0, nd.z9)("ConjureScopeSetupCard"),
                [l, r] = a.useState(null),
                [i, s] = a.useState(!1),
                [u, o] = a.useState(null),
                d = t?.install_scope_setup,
                f = "server" === l || (null == l && "choose_server" === d),
                m = t?.guild_id,
                h = a.useMemo(() => {
                    var t;
                    return f
                        ? ((t = m ?? (0, l_.EP)(e)),
                          {
                              id: n.length > 0 ? "server-setup" : "server-setup-empty",
                              questions: [
                                  {
                                      id: "server-setup:q0",
                                      question: R.intl.string(n.length > 0 ? T.default.ZWXDeI : T.default["u5+Qhu"]),
                                      recommendation_reason: "",
                                      allow_custom: !1,
                                      options: n.length > 0 ? [] : [{ id: lR, label: R.intl.string(T.default.qLYOpH) }],
                                      ...(0, l_.XU)(n, t),
                                  },
                              ],
                          })
                        : {
                              id: "scope-setup",
                              questions: [
                                  {
                                      id: lT,
                                      question: R.intl.string(T.default.ickKBI),
                                      recommendation_reason: "",
                                      allow_custom: !1,
                                      options: [
                                          {
                                              id: lR,
                                              label: R.intl.string(T.default.qLYOpH),
                                              detail: R.intl.string(T.default.QSKvUE),
                                          },
                                          {
                                              id: lP,
                                              label: R.intl.string(T.default.QV5C7b),
                                              detail: R.intl.string(T.default["ZzHR4/"]),
                                          },
                                      ],
                                  },
                              ],
                          };
                }, [f, n, m, e]);
            if (null == d) return null;
            if (null == t || !(0, eT.PV)(t))
                return { clarification: (0, l_.YI)(h), readOnly: !0, hideSubmit: !0, failure: null };
            async function g(t, n) {
                (s(!0), o(null));
                try {
                    await (0, l_.JN)(e, t, n);
                } catch (e) {
                    (s(!1), o(null != n && 403 === e.status ? "server" : "failed"));
                }
            }
            return {
                clarification: h,
                readOnly: !1,
                onSubmit: i
                    ? void 0
                    : function (e, t) {
                          let n = t?.answers[0];
                          null != n && (n.option_ids.includes(lP) ? r("server") : g("user", null));
                      },
                submitText: R.intl.string(R.t["cY+Oob"]),
                onBack: f && !i ? () => r("scope") : void 0,
                hideSubmit: !1,
                serverStep: f && n.length > 0,
                onPickServer: i ? void 0 : (e) => g("guild", e),
                failure: null == u ? null : R.intl.string("server" === u ? T.default["XXKd+7"] : T.default.jNVZ3e),
            };
        })(t);
    return null == n
        ? null
        : n.readOnly
          ? (0, i.jsx)(lw, { projectId: t, clarification: n.clarification, hideSubmit: !0 })
          : (0, i.jsxs)("div", {
                children: [
                    !0 === n.serverStep
                        ? (0, i.jsx)(lD, { projectId: t, card: n }, n.clarification.id)
                        : (0, i.jsx)(
                              lw,
                              {
                                  projectId: t,
                                  clarification: n.clarification,
                                  onSubmit: n.onSubmit,
                                  submitText: n.submitText,
                                  onBack: n.onBack,
                              },
                              n.clarification.id,
                          ),
                    null != n.failure
                        ? (0, i.jsx)(v.E, {
                              variant: "body-sm/normal",
                              color: "text-feedback-critical",
                              role: "alert",
                              children: n.failure,
                          })
                        : null,
                ],
            });
}
function lO(e) {
    let { projectId: t } = e,
        n = (function (e) {
            let { projectId: t, clarification: n, offer: l, onKept: r } = e,
                { scope: i, feature: s } = l,
                u = (0, c.bG)([eT.Ay], () => eT.Ay.getProject(t), [t]),
                o = (0, nd.z9)("ConjureScopeSwitchCard"),
                [d, f] = a.useState(!1),
                [m, h] = a.useState(null),
                g = u?.guild_id,
                p = a.useMemo(() => {
                    let [e] = n.questions,
                        t = R.intl.formatToPlainString("guild" === i ? T.default["jh/iy+"] : T.default.d7jxeT, {
                            feature: s,
                        });
                    return {
                        id: n.id,
                        questions: [
                            "guild" === i
                                ? { ...e, question: t, allow_custom: !1, ...(0, l_.XU)(o, g) }
                                : {
                                      ...e,
                                      question: t,
                                      allow_custom: !1,
                                      options: [{ id: `${e.id}:0`, label: R.intl.string(T.default.TVRkVh) }],
                                  },
                        ],
                    };
                }, [n, s, o, g, i]);
            if (null == u || !(0, eT.PV)(u))
                return { clarification: (0, l_.YI)(p), readOnly: !0, hideSubmit: !0, failure: null };
            async function x(e) {
                (f(!0), h(null));
                try {
                    await (0, l_.yN)(t, n.id, i, e);
                } catch (e) {
                    (f(!1), h(409 === e.status ? "locked" : "failed"));
                }
            }
            return {
                clarification: p,
                readOnly: !1,
                onSubmit: d
                    ? void 0
                    : function (e, t) {
                          let n = t?.answers[0]?.entities?.[0];
                          "user" === i ? x(null) : null != n && x(n.id);
                      },
                submitText: R.intl.string("guild" === i ? T.default.Ua7yKM : T.default.TVRkVh),
                onBack: d
                    ? void 0
                    : function () {
                          (h(null), (0, l_.RW)(t) ? r() : h("failed"));
                      },
                backText: R.intl.string("guild" === i ? T.default["4WnIqd"] : T.default["am+p7p"]),
                hideSubmit: "user" === i,
                failure: null == m ? null : R.intl.string("locked" === m ? T.default.irUT0N : T.default.jNVZ3e),
            };
        })(e);
    return n.readOnly
        ? (0, i.jsx)(
              lw,
              { projectId: t, clarification: n.clarification, headingLines: 1, hideSubmit: !0 },
              n.clarification.id,
          )
        : (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)(
                      lw,
                      {
                          projectId: t,
                          clarification: n.clarification,
                          headingLines: 1,
                          onSubmit: n.onSubmit,
                          submitText: n.submitText,
                          onBack: n.onBack,
                          hideSubmit: n.hideSubmit,
                          backText: n.backText,
                      },
                      n.clarification.id,
                  ),
                  null != n.failure
                      ? (0, i.jsx)(v.E, {
                            variant: "body-sm/normal",
                            color: "text-feedback-critical",
                            role: "alert",
                            children: n.failure,
                        })
                      : null,
              ],
          });
}
var lG = n(442331),
    lz = n(564963);
let lU = new Set(["select", "channel", "role", "user"]);
function lB(e, t) {
    return (
        null != t &&
        (e.keys ?? []).some((e) => {
            let n = t.schema.find((t) => t.key === e);
            if (null == n) return !1;
            if ("secret" === n.type) return t.secrets.find((t) => t.name === e)?.set !== !0;
            let l = t.values[e];
            return null == l || "" === l;
        })
    );
}
function lK(e, t) {
    let n = e.keys ?? [];
    return n.length > 0 ? n : t.schema.map((e) => e.key);
}
let lH = new Set(),
    lV = new Set();
function lW(e) {
    return (
        lV.add(e),
        () => {
            lV.delete(e);
        }
    );
}
function lX() {
    return a.useSyncExternalStore(lW, () => lH);
}
function lQ(e) {
    let t = new Set(),
        n = new Set(),
        l = !1,
        r = !1;
    for (let i = e.length - 1; i >= 0; i--) {
        let a = e[i];
        if (null == a || "assistant" !== a.role || null == a.settingsRequest || !(0, tB.BL)(a)) continue;
        let s = a.settingsRequest.keys ?? [];
        for (let e of ((r || (0 === s.length ? l : s.some((e) => n.has(e)))) && t.add(a.id), s)) n.add(e);
        ((l = !0), (r = r || 0 === s.length));
    }
    return t;
}
function lZ(e, t, n) {
    if (!n || null == t) return !1;
    let l = lK(e, t);
    return l.length > 0 && !lB({ keys: l }, t);
}
var lY = n(628284),
    lJ = n(782973),
    l0 = n(914250),
    l1 = n(290713),
    l2 = n(411236);
function l3(e) {
    let { projectId: t, request: n, askId: l, onDismiss: r, notifyAgent: s = !0 } = e,
        {
            done: u,
            superseded: f,
            summary: m,
            markSaved: h,
        } = (function (e, t, n) {
            let l = lX(),
                [r, i] = a.useState(!1),
                s = null != n ? l.has(n) : r,
                u = a.useCallback(() => {
                    if (null != n) {
                        if (!lH.has(n)) for (let e of ((lH = new Set([...lH, n])), lV)) e();
                    } else i(!0);
                }, [n]),
                o = (0, c.bG)([lG.A], () => lZ(t, lG.A.getSettings(e), s), [e, t, s]);
            return {
                done: o,
                superseded: (0, c.bG)([lE.A], () => null != n && lQ(lE.A.getMessages(e)).has(n), [e, n]),
                summary: (0, c.yK)(
                    [lG.A, ny.A],
                    () => {
                        var n;
                        let l = lG.A.getSettings(e);
                        return null == l
                            ? []
                            : ((n = (e) => ny.A.getChannel(e)?.name ?? null),
                              lK(t, l).flatMap((e) => {
                                  let t = l.schema.find((t) => t.key === e);
                                  if (null == t) return [];
                                  let r = "secret" === t.type || l.values[e];
                                  return [
                                      {
                                          key: e,
                                          text: R.intl.formatToPlainString(T.default["Z+FC3j"], {
                                              label: t.label,
                                              value: (function (e, t, n) {
                                                  let l = Array.isArray(t) ? t.map(String) : [String(t)];
                                                  switch (e.type) {
                                                      case "secret":
                                                          return R.intl.string(T.default.CJq1rY);
                                                      case "checkbox":
                                                          return R.intl.string(
                                                              !0 === t ? T.default.nXtpn3 : T.default["0vfaMW"],
                                                          );
                                                      case "select":
                                                          return l
                                                              .map(
                                                                  (t) =>
                                                                      e.options?.find((e) => e.value === t)?.label ?? t,
                                                              )
                                                              .join(", ");
                                                      case "channel":
                                                          return l
                                                              .map((e) => {
                                                                  let t = n(e);
                                                                  return null != t
                                                                      ? `#${t}`
                                                                      : R.intl.string(T.default.Fw9G9A);
                                                              })
                                                              .join(", ");
                                                      case "game":
                                                          return 0 === l.length
                                                              ? R.intl.string(T.default.nEv677)
                                                              : R.intl.string(T.default.Fw9G9A);
                                                      case "role":
                                                      case "user":
                                                          return R.intl.string(T.default.Fw9G9A);
                                                      default:
                                                          return l.join(", ");
                                                  }
                                              })(t, r, n),
                                          }),
                                      },
                                  ];
                              })).map((e) => e.text);
                    },
                    [e, t],
                ),
                markSaved: u,
            };
        })(t, n, l),
        g = null == r && u;
    if (f && !g)
        return (0, i.jsx)("article", {
            className: l2.Mk,
            children: (0, i.jsx)(v.E, {
                variant: "body-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: R.intl.string(T.default["+uXDk+"]),
            }),
        });
    if (g)
        return (0, i.jsxs)("article", {
            className: l2.Mk,
            children: [
                (0, i.jsxs)("div", {
                    className: l2.Ol,
                    children: [
                        (0, i.jsx)(lY.y, { size: "xs", color: to.A.colors.ICON_FEEDBACK_POSITIVE, "aria-hidden": !0 }),
                        (0, i.jsx)(v.E, {
                            variant: "body-xs/semibold",
                            color: "text-feedback-positive",
                            tag: "span",
                            children: R.intl.string(T.default.AxBLLy),
                        }),
                    ],
                }),
                m.length > 0
                    ? (0, i.jsx)(v.E, {
                          variant: "body-sm/normal",
                          color: "text-default",
                          selectable: !0,
                          children: m.join(" \xb7 "),
                      })
                    : null,
            ],
        });
    let p = n.keys?.length === 1 && n.keys[0] === lJ.B,
        x = null != n.note && "" !== n.note ? n.note : p ? null : R.intl.string(T.default.XuOf5s);
    return (0, i.jsx)(l1.A, {
        projectId: t,
        scopeKeys: n.keys,
        notifyAgent: s,
        onSaved: h,
        isPreview: !0,
        children: (e) => {
            let { fields: t, canSave: n, saving: l, submit: a } = e;
            async function s(e) {
                (e.preventDefault(), await a());
            }
            let u = (0, i.jsx)(d.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: l,
                disabled: !n,
                text: R.intl.string(T.default.A7dQd9),
            });
            return null == r
                ? (0, i.jsxs)("form", {
                      className: l2.Mk,
                      onSubmit: s,
                      children: [
                          (0, i.jsx)(v.E, {
                              variant: "body-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: R.intl.string(T.default["jZjP+I"]),
                          }),
                          null != x
                              ? (0, i.jsx)(l0.A, { text: x, variant: "body-sm/normal", color: "text-default" })
                              : null,
                          t,
                          (0, i.jsx)("div", { className: l2.p0, children: u }),
                      ],
                  })
                : (0, i.jsxs)("form", {
                      className: o()(nx.nd, nx.jx),
                      "aria-label": R.intl.string(T.default["jZjP+I"]),
                      onSubmit: s,
                      children: [
                          (0, i.jsxs)("div", {
                              className: nx.wx,
                              children: [
                                  (0, i.jsx)(v.E, {
                                      tag: "span",
                                      variant: "body-sm/medium",
                                      color: "text-subtle",
                                      className: nx.TK,
                                      children: R.intl.string(T.default["jZjP+I"]),
                                  }),
                                  (0, i.jsx)(tV.D, {
                                      className: o()(nx.gb, nx.Q7),
                                      onClick: r,
                                      "aria-label": R.intl.string(T.default["iq+Pte"]),
                                      children: (0, i.jsx)(eW.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                          (0, i.jsxs)("div", {
                              className: l2.DQ,
                              children: [
                                  null != x
                                      ? (0, i.jsx)(l0.A, { text: x, variant: "body-sm/normal", color: "text-default" })
                                      : null,
                                  t,
                              ],
                          }),
                          (0, i.jsxs)("div", {
                              className: nx.qr,
                              children: [
                                  (0, i.jsx)(v.E, {
                                      variant: "body-xs/normal",
                                      color: "text-muted",
                                      className: l2.xE,
                                      children: R.intl.string(T.default["1w0jMk"]),
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: nx.zt,
                                      children: [
                                          (0, i.jsx)(d.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              onClick: r,
                                              text: R.intl.string(T.default["9J3OG8"]),
                                          }),
                                          u,
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    });
}
var l4 = n(975571),
    l7 = n(427123);
let l5 = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
var l9 = n(874421),
    l8 = n(932111),
    l6 = n(940874),
    re = n(404373),
    rt = n(89222);
function rn(e) {
    return "" !== rt.A.getDraft(e).trim();
}
var rl = n(29080);
function rr(e) {
    var t;
    let n,
        l,
        { steps: r, content: i, hasProposal: a, hasLiveClarification: s = !1, hasAttachments: u } = e,
        o = (0, tU.B4)(r),
        c = o.filter((e) => "message" === e.type).at(-1),
        d =
            !a &&
            null != c &&
            ((t = c.content),
            (n = t.trim()),
            (l = i.trim()),
            "" !== n && "" !== l && (n === l || (t.length >= 16e3 && l.startsWith(n))))
                ? c
                : null,
        f = o.filter((e) => e !== d),
        m = f.filter((e) => "message" === e.type).at(-1),
        h = !a && !s && "" !== i.trim();
    return {
        streamed: f,
        lastStreamedMessage: m,
        replyKey: d?.key,
        showsClosingMessage: h,
        closingContent: h ? i.trim() : "",
        attachmentsHost: (function (e) {
            let { hasAttachments: t, showsClosingMessage: n, endsOnStreamedMessage: l } = e;
            return t ? (n ? "closing" : l ? "streamed" : "standalone") : "none";
        })({ hasAttachments: u, showsClosingMessage: h, endsOnStreamedMessage: (0, tU.Lf)(r) }),
    };
}
var ri = n(62617),
    ra = n(182368);
let rs = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    ru = {
        snail: () => T.default.ABeVsS,
        goat: () => T.default.dhXay8,
        frog: () => T.default.SHeweG,
        bunny: () => T.default.FytFE1,
        cat: () => T.default["5c+sHs"],
        caterpillar: () => T.default["/FYcne"],
        butterfly: () => T.default["Ib/AxK"],
        dog: () => T.default.zDjBR1,
        spider: () => T.default["6sxyrN"],
        bee: () => T.default.cVtefg,
        bot: () => T.default.MjCw0v,
    },
    ro = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    u = a.useMemo(
                        () => (0, ri.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    className: (0, ri.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        goat: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    u = a.useMemo(
                        () => (0, ri.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    className: (0, ri.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-orange-40)",
        },
        frog: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    u = a.useMemo(
                        () => (0, ri.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    className: (0, ri.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-green-40)",
        },
        bunny: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    u = a.useMemo(
                        () => (0, ri.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    className: (0, ri.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-pink-40)",
        },
        cat: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    u = a.useMemo(
                        () => (0, ri.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    className: (0, ri.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-pink-40)",
        },
        caterpillar: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    u = a.useMemo(
                        () => (0, ri.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    className: (0, ri.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-green-40)",
        },
        butterfly: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    u = a.useMemo(
                        () => (0, ri.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    className: (0, ri.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-purple-40)",
        },
        dog: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    u = a.useMemo(
                        () => (0, ri.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    className: (0, ri.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        spider: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    u = a.useMemo(
                        () => (0, ri.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    className: (0, ri.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-orange-40)",
        },
        bee: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    u = a.useMemo(
                        () => (0, ri.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    className: (0, ri.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        bot: { Illocon: ra.u, tint: "var(--illo-purple-40)" },
    };
function rc(e) {
    return { ...ro[e], name: R.intl.string(ru[e]()) };
}
function rd(e) {
    return rs.includes(e) ? rc(e) : void 0;
}
function rf(e) {
    let t = new Map();
    for (let [n, l] of (function (e) {
        let t = 0,
            n = e[0] ?? "";
        for (let e = 0; e < n.length; e++) t = (31 * t + n.charCodeAt(e)) % rs.length;
        let l = new Map();
        return (
            e.forEach((e, n) => {
                l.set(e, rs[(t + n) % rs.length]);
            }),
            l
        );
    })(e))
        t.set(n, rc(l));
    return t;
}
var rm = n(615839);
function rh(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : R.intl.string(T.default.KcFvbo);
}
var rg = n(60160),
    rp = n(101147);
function rx(e) {
    let t = (0, tU.SY)(e.steps);
    return null != t ? (0, tU.WQ)(t) : rh(e.task);
}
function rv(e) {
    let t = rf(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? rd(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: rh(e.task),
                      todoId: e.task.todoId,
                      line: rx(e),
                  },
              ];
    });
}
function rj(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: a, connectsDown: s } = e,
        u = n.task,
        o = "running" === u.status,
        c = (0, tU.SY)(n.steps),
        d = o
            ? rx(n)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(rh(e));
                  switch (e.status) {
                      case "failed":
                          return R.intl.formatToPlainString(T.default.YrVgOf, { task: t });
                      case "cancelled":
                          return R.intl.formatToPlainString(T.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.resultText && "" !== e.resultText) return e.resultText;
                          if (null != e.durationMs)
                              return R.intl.formatToPlainString(T.default["++9woZ"], {
                                  task: t,
                                  duration: (0, rm.MB)(e.durationMs),
                              });
                          return R.intl.formatToPlainString(T.default.nmI9Uh, { task: t });
                      default:
                          return R.intl.formatToPlainString(T.default.nmI9Uh, { task: t });
                  }
              })(u),
        f = o ? c : void 0,
        m =
            u.detail.length > 0 ||
            n.steps.some((e) => {
                var t;
                return e !== f || (t = e).detail.length > 0 || t.screenshots.length > 0 || t.attachments.length > 0;
            })
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          n.steps.length > 0
                              ? (0, i.jsx)("ol", {
                                    className: nt.dO,
                                    children: n.steps.map((e) =>
                                        (0, i.jsx)(
                                            rp.A,
                                            { projectId: t, node: e, presentation: "detail", active: o && e === c },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          u.detail.map((e, t) =>
                              (0, i.jsx)(
                                  "div",
                                  {
                                      className: nt.iq,
                                      children: (0, i.jsx)(rg.A, { text: e, variant: "body-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, i.jsx)(tX.A, {
        glyph: (0, i.jsx)(tQ.u, {
            asset: (0, i.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: a,
            body: rh(u),
            position: "left",
            children: (0, i.jsx)("span", {
                className: nt.nC,
                children: (0, i.jsx)(l, { size: 24, alt: "", ariaHidden: !0 }),
            }),
        }),
        line: d,
        live: o,
        settled: !o,
        tint: r,
        detail: m,
        connected: !0,
        connectsDown: s,
    });
}
var rb = n(998445),
    ry = n(643210),
    rk = n(648127),
    rw = n(372795),
    rA = n(163897);
let rN = "conjure-browser-viewer";
function rS(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, c.yK)(
            [ry.A],
            () =>
                n.flatMap((e) => {
                    let n = ry.A.getTab(t, e);
                    return null == n ? [] : [n];
                }),
            [t, n],
        );
    if (0 === l.length) return null;
    let r = l.map((e) => {
        let { session: t } = e;
        return t.id;
    });
    return (0, i.jsx)("ul", {
        className: rA.kR,
        "aria-label": R.intl.string(T.default.Uvkr1G),
        children: l.map((e) =>
            (0, i.jsx)("li", { children: (0, i.jsx)(rC, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function rC(e) {
    let { projectId: t, tab: l, sessionIds: r } = e,
        [s, u] = (function () {
            let [e, t] = a.useState(null),
                [n, l] = a.useState(!1);
            return (
                a.useEffect(() => {
                    if (null == e) return;
                    let t = new IntersectionObserver(
                        (e) => {
                            let [t] = e;
                            return l(t?.isIntersecting ?? !1);
                        },
                        { rootMargin: "200px" },
                    );
                    return (t.observe(e), () => t.disconnect());
                }, [e]),
                [t, n]
            );
        })(),
        c = (0, K.Ry)(rN),
        [d, f] = a.useState(!1),
        m = a.useCallback((e, t) => f(t), []),
        { ended: h } = l,
        g = (0, rk.i)(l.session);
    return (0, i.jsxs)(tV.D, {
        innerRef: s,
        className: o()(rA.Nr, h && rA.Xj),
        onClick: () => {
            var e;
            return (
                (e = l.session.id),
                void (0, K.mM)(
                    async () => {
                        let { default: l } = await Promise.all([
                            n.e(459368),
                            n.e(513843),
                            n.e(501962),
                            n.e(531527),
                        ]).then(n.bind(n, 273594));
                        return (n) => (0, i.jsx)(l, { ...n, projectId: t, sessionId: e, sessionIds: r });
                    },
                    { modalKey: rN },
                )
            );
        },
        "aria-label": R.intl.formatToPlainString(T.default.G3a822, { title: g }),
        children: [
            (0, i.jsxs)("div", {
                className: rA.Gt,
                children: [
                    (0, i.jsx)(rw.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !u || c || h,
                        className: rA.Ji,
                        "aria-label": R.intl.formatToPlainString(T.default.rnwqXb, { name: g }),
                        onStateChange: m,
                    }),
                    d
                        ? null
                        : (0, i.jsx)("div", {
                              className: rA.qf,
                              children: (0, i.jsx)(rb.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    h
                        ? (0, i.jsx)("div", {
                              className: rA.HS,
                              children: (0, i.jsx)(v.E, {
                                  variant: "body-xs/medium",
                                  color: "text-strong",
                                  children: R.intl.string(T.default.ocRH08),
                              }),
                          })
                        : null,
                ],
            }),
            (0, i.jsxs)("span", {
                className: rA.pG,
                children: [
                    (0, i.jsx)("span", { className: o()(rA.W9, h && rA.oM) }),
                    (0, i.jsx)(v.E, {
                        tag: "span",
                        variant: "body-sm/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: g,
                    }),
                ],
            }),
        ],
    });
}
var rI = n(268409);
let rE = new WeakMap(),
    r_ = new WeakMap();
function rM(e) {
    let { projectId: t, steps: n, tree: l, segment: r } = e,
        s = a.useMemo(
            () =>
                (function (e, t) {
                    let n = new Map();
                    for (let t of [...e.steps, ...e.tasks.flatMap((e) => e.steps)])
                        for (let e of t.browserSessions) n.has(e) || n.set(e, t.segment);
                    return [...n]
                        .filter((e) => {
                            let [, n] = e;
                            return null == t || n === t;
                        })
                        .map((e) => {
                            let [t] = e;
                            return t;
                        });
                })(l, r),
            [l, r],
        ),
        u = (0, c.yK)(
            [lE.A],
            () => {
                if (0 === s.length) return s;
                let e = (function (e) {
                    let t = rE.get(e);
                    if (null != t) return t;
                    let n = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = r_.get(e);
                            if (null == t) {
                                let n = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) n.push(e);
                                ((t = n), r_.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            n.set(e, t.steps);
                    return (rE.set(e, n), n);
                })(lE.A.getMessages(t));
                return s.filter((t) => e.get(t) === n);
            },
            [s, t, n],
        );
    return 0 === u.length
        ? null
        : (0, i.jsx)("li", { className: rI.h, children: (0, i.jsx)(rS, { projectId: t, sessionIds: u }) });
}
var rT = n(469393);
function rR(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, H.lG)(t.authored_at);
    return (0, i.jsx)(t0, {
        title: R.intl.string(T.default["t+b0rz"]),
        children: (0, i.jsxs)("div", {
            className: rT.r,
            children: [
                (0, i.jsxs)("div", {
                    className: rT.z,
                    children: [
                        (0, i.jsx)(v.E, { variant: "body-md/medium", children: t.subject }),
                        null != l.relative
                            ? (0, i.jsx)(v.E, {
                                  variant: "body-sm/normal",
                                  color: "text-muted",
                                  title: l.absolute ?? void 0,
                                  children: l.relative,
                              })
                            : null,
                    ],
                }),
                null != n
                    ? (0, i.jsx)(d.$, {
                          variant: "secondary",
                          size: "sm",
                          text: R.intl.string(T.default.H8Jfhu),
                          onClick: n,
                      })
                    : null,
            ],
        }),
    });
}
var rP = n(493490),
    rL = n(17742);
let r$ = [];
function rq(e) {
    let t = (0, c.bG)([rP.A], () => (null != e ? rP.A.getCaptures(e) : r$)),
        n = (0, c.bG)([rP.A], () => (null != e ? rP.A.getSelectedCapture(e) : null)),
        [l, r] = a.useState(null),
        i = null != n ? `${n.id}:${n.image_etag}` : null;
    return (
        a.useEffect(() => {
            if (null == e || null == n || null == i) return;
            let t = !1;
            return (
                (async () => {
                    try {
                        let l = await (0, rL._F)(e, n);
                        t || r({ key: i, url: l });
                    } catch {}
                })(),
                () => {
                    t = !0;
                }
            );
        }, [e, n, i]),
        { captures: t, selected: n, src: null != l && l.key === i ? l.url : null }
    );
}
var rD = n(714917),
    rF = n(463660),
    rO = n(970211);
function rG(e) {
    let { projectId: t, gameCaptures: n = !1 } = e,
        {
            src: l,
            blurred: r,
            handleError: s,
        } = (function (e, t) {
            let n = (0, c.bG)([rD.A], () => (null != e ? rD.A.getBackground(e) : null)),
                l = n?.imageEtag ?? null,
                [r, i] = a.useState(null),
                [s, u] = a.useState(null),
                [o, d] = a.useState(!1);
            (a.useEffect(() => {
                if (null != n) return;
                let e = setTimeout(() => d(!0), 2e3);
                return () => clearTimeout(e);
            }, [n]),
                a.useEffect(() => {
                    if (null == e || null == l) return;
                    let n = !1;
                    return (
                        !(async function (e, l) {
                            let r;
                            try {
                                r = await (0, rF.Mg)(e, l);
                            } catch {
                                r = t;
                            }
                            n || i(r);
                        })(e, l),
                        () => {
                            n = !0;
                        }
                    );
                }, [e, l, t]));
            let f = null != l ? r : null,
                m = null == l || (null != f && f === s) ? t : f,
                h = a.useCallback(() => {
                    m === f && u(f);
                }, [m, f]);
            return { src: null == e || null != n || o ? m : null, blurred: n?.blur !== !1, handleError: h };
        })(t, "/assets/7cec34541705c795.webp"),
        u = rq(n ? t : null);
    return null != u.selected
        ? null != u.src
            ? (0, i.jsx)("img", { className: rO.F1, src: u.src, alt: "", "aria-hidden": !0 })
            : null
        : null == l
          ? null
          : (0, i.jsx)("img", {
                className: o()(rO.LO, { [rO.Ty]: r }),
                src: l,
                alt: "",
                "aria-hidden": !0,
                onError: s,
            });
}
var rz = n(155718);
function rU(e, t) {
    return e.supported_surfaces?.includes(t) === !0;
}
let rB = ["command", "user_command", "message_command", "message"],
    rK = new Set([rz.kc.CHAT, rz.kc.USER, rz.kc.MESSAGE]);
function rH(e) {
    return e.type ?? rz.kc.CHAT;
}
function rV(e) {
    return rK.has(rH(e));
}
function rW(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function rX(e, t) {
    let n = rB.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !rW(e)), ...n.filter(rW)].slice(0, 3);
    for (let r of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(r) || rW(r) || l.push(r);
    }
    return rB.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
function rQ(e, t, n) {
    let l = e.bot?.example_exchanges ?? [],
        r = { kind: "event", user: "", bot: n.event };
    if ("events" === t) {
        let e = l.slice(0, 3).map((e) => {
            let { bot: t } = e;
            return "" !== t.trim() ? { ...r, bot: t } : r;
        });
        return e.length > 0 ? e : [r];
    }
    let i = l.flatMap((e) => {
            let { user: n, bot: l } = e;
            return "" === n.trim()
                ? []
                : [
                      {
                          kind: "messages" !== t && n.trimStart().startsWith("/") ? "command" : "message",
                          user: n,
                          bot: l,
                      },
                  ];
        }),
        a = { kind: "message", user: n.message, bot: n.reply };
    if ("messages" === t && 0 === i.length) return [a];
    let s = e.commands.filter(rV).map((e) =>
            (function (e, t) {
                let n = e.description?.trim() ?? "",
                    l = "" !== n ? n : t.reply;
                switch (rH(e)) {
                    case rz.kc.USER:
                        return { kind: "user_command", user: e.name, bot: l };
                    case rz.kc.MESSAGE:
                        return { kind: "message_command", user: e.name, bot: l };
                    default:
                        return { kind: "command", user: `/${e.name}`, bot: l };
                }
            })(e, n),
        ),
        u = "messages" === t ? [] : s.filter(rW),
        o = i.length > 0 ? rX([...i, ...u], !0) : rX("both" === t ? [...s, a] : s, !1);
    return o.length > 0 ? o : [r];
}
var rZ = n(377941),
    rY = n.n(rZ);
function rJ(e) {
    let t = e.split("_").join(" ").toLowerCase();
    return 0 === t.length ? t : t[0].toUpperCase() + t.slice(1);
}
function r0(e) {
    return e.type === rz.kc.PRIMARY_ENTRY_POINT
        ? "\u21EA /"
        : e.type === rz.kc.USER || e.type === rz.kc.MESSAGE
          ? ""
          : "/";
}
let r1 = {
        [ee.q7.APP_CHANNEL]: T.default["3/aHX6"],
        [ee.q7.VOICE_CHANNEL]: T.default["3/aHX6"],
        [ee.q7.ACTIVITY]: T.default["3/aHX6"],
        [ee.q7.OVERLAY]: T.default["rPpf5/"],
        [ee.q7.PROFILE_WIDGET]: null,
        [ee.q7.AUTOMOD]: null,
        [ee.q7.BOT]: null,
        [ee.q7.APPLICATION_COMMANDS]: null,
    },
    r2 = [ee.q7.ACTIVITY, ee.q7.APP_CHANNEL, ee.q7.VOICE_CHANNEL, ee.q7.OVERLAY];
function r3(e) {
    return r2.find((t) => rU(e, t)) ?? null;
}
let r4 = 1920 / 1018;
function r7(e, t) {
    return `${Number(((e / t) * 100).toFixed(3))}%`;
}
let r5 = r7(24, 1018),
    r9 = r7(24, 1920);
function r8(e) {
    return null != e.overlay_design_image
        ? e.overlay_design_image
        : e.design_image?.name === "overlay-design-v2.png"
          ? e.design_image
          : null;
}
var r6 = n(90947),
    ie = (((l = {}).IMAGE = "image"), l),
    it = (((r = {}).PRIVATE = "private"), (r.PUBLIC = "public"), r),
    il = n(598748),
    ir = n(773669);
let ii = [],
    ia = {},
    is = {};
function iu(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function io(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: ie.IMAGE,
        visibility: it.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var ic = n(127258),
    id = n(803306),
    im = n(587895),
    ih = n(432005),
    ig = n(963852),
    ip = n(95701),
    ix = n(619019),
    iv = n(427262);
let ij = new ip.nA({ id: "1337", guild_id: "1337", type: ev.rbe.GUILD_TEXT, name: "preview" });
function ib(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = (0, c.bG)([nw.default], () => nw.default.getUser(e), [e]);
    return (
        a.useEffect(() => {
            r && i?.username !== t && (0, id.nj)(new ix.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, i, e, t, l, n]),
        i
    );
}
let iy = /^@\S+/;
var ik = n(775602);
let iw = [T.default["3eTjcV"], T.default.l3j5nS];
var iA = n(97808),
    iN = n(778712),
    iS = n(486020),
    iC = n(46054),
    iI = n(200700);
let iE = {
        alert: { label: () => R.intl.string(T.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => R.intl.string(T.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => R.intl.string(T.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => R.intl.string(T.default.RGzFNK), blockedStyle: !1 },
    },
    i_ = {
        blocked: { label: () => R.intl.string(T.default.YdnZ8q), tone: "red" },
        alert: { label: () => R.intl.string(T.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => R.intl.string(T.default.RGzFNK), tone: "green" },
    },
    iM = ["blocked", "alert", "allowed"],
    iT = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
function iR(e) {
    var t, n;
    let l,
        r = [
            "timeout" !== (t = e).outcome || null == t.timeout_seconds
                ? null
                : R.intl.formatToPlainString(R.t["3LYql6"], {
                      duration:
                          ((n = t.timeout_seconds),
                          null != (l = (0, iI.getFriendlyDurationString)(n))
                              ? l
                              : n % 604800 == 0
                                ? R.intl.formatToPlainString(R.t.EmoBD2, { weeks: n / 604800 })
                                : n % 86400 == 0
                                  ? R.intl.formatToPlainString(R.t["k2UNz+"], { days: n / 86400 })
                                  : n % 3600 == 0
                                    ? R.intl.formatToPlainString(R.t.xCjYxK, { hours: n / 3600 })
                                    : n % 60 == 0
                                      ? R.intl.formatToPlainString(R.t.opVZ9q, { mins: n / 60 })
                                      : R.intl.formatToPlainString(R.t["4zv/jq"], { secs: n })),
                  }),
            e.reason,
        ]
            .filter((e) => null != e && "" !== e)
            .join(" ");
    return "" === r ? null : r;
}
var iP = n(984097),
    iL = n(13673);
let i$ = { blurple: "text-brand", red: "text-feedback-critical", green: "text-feedback-positive" };
function iq(e) {
    let { example: t } = e,
        n = iR(t);
    return null == n
        ? null
        : (0, i.jsx)(v.E, {
              variant: "body-xs/normal",
              color: "text-muted",
              lineClamp: 2,
              selectable: !0,
              children: n,
          });
}
let iD = ["glazedgamer", "sprinkles", "donutking"];
function iF(e) {
    var t;
    let { example: n, username: l, showReason: r } = e,
        { label: a, blockedStyle: s } = iE[n.outcome];
    return (0, i.jsxs)("li", {
        className: o()(iP.nM, { [o()(iP.HV, iL.DX)]: s }),
        children: [
            (0, i.jsx)(tZ.A, { children: `${a()}: ` }),
            (0, i.jsx)("span", {
                className: iP.my,
                children: (0, i.jsx)(iA.eu, {
                    src: (0, iS.AE)(void 0, void 0),
                    size: iN._3.SIZE_24,
                    "aria-label": R.intl.string(T.default["1yI0xV"]),
                }),
            }),
            (0, i.jsxs)("div", {
                className: iP.fw,
                children: [
                    (0, i.jsx)(v.E, { variant: "body-sm/semibold", color: "text-strong", children: l }),
                    (0, i.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), iC.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    r ? (0, i.jsx)(iq, { example: n }) : null,
                ],
            }),
        ],
    });
}
function iO(e) {
    let { group: t, firstIndex: n } = e,
        l = a.useId(),
        r = i_[t.section],
        s = new Set(t.examples.map(iR)),
        u = 1 === s.size ? t.examples.map(iR)[0] : null;
    return (0, i.jsxs)("div", {
        className: iP.UO,
        children: [
            (0, i.jsxs)("div", {
                className: iP.RZ,
                children: [
                    (0, i.jsx)(v.E, {
                        id: l,
                        variant: "body-xs/semibold",
                        color: i$[r.tone],
                        tag: "span",
                        children: r.label(),
                    }),
                    null != u
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(v.E, {
                                      variant: "body-xs/semibold",
                                      color: "text-muted",
                                      tag: "span",
                                      className: iP.IQ,
                                      "aria-hidden": !0,
                                      children: "\xb7",
                                  }),
                                  (0, i.jsx)(v.E, {
                                      variant: "body-xs/semibold",
                                      color: "text-muted",
                                      tag: "span",
                                      children: u,
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, i.jsx)("ul", {
                className: iP.m7,
                "aria-labelledby": l,
                children: t.examples.map((e, t) =>
                    (0, i.jsx)(iF, { example: e, username: iD[(n + t) % iD.length], showReason: s.size > 1 }, t),
                ),
            }),
        ],
    });
}
function iG(e) {
    var t;
    let { automod: n } = e,
        l =
            ((t = n.examples),
            iM
                .map((e) => ({ section: e, examples: t.filter((t) => iT[t.outcome] === e) }))
                .filter((e) => e.examples.length > 0)),
        r = n.rule_name.trim();
    return (0, i.jsxs)("div", {
        className: iP.Nr,
        children: [
            "" !== r
                ? (0, i.jsx)("div", {
                      className: iP.hk,
                      children: (0, i.jsx)(v.E, {
                          variant: "body-sm/normal",
                          color: "text-default",
                          lineClamp: 1,
                          children: r,
                      }),
                  })
                : null,
            l.map((e, t) =>
                (0, i.jsx)(
                    iO,
                    {
                        group: e,
                        firstIndex: l.slice(0, t).reduce((e, t) => {
                            let { examples: n } = t;
                            return e + n.length;
                        }, 0),
                    },
                    e.section,
                ),
            ),
        ],
    });
}
var iz = n(276293),
    iU = n(460905),
    iB = n(110384),
    iK = n(365199),
    iH = n(633018),
    iV = n(763754),
    iW = n(267508),
    iX = n(194085),
    iQ = n(20851),
    iZ = n(692508),
    iY = n(798819);
function iJ(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, i.jsxs)("div", {
        className: o()(iY.item, iY.labelContainer, iY.colorDefault, {
            [iY.focused]: !0 === t.highlighted,
            [iY.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, i.jsx)("div", {
                      className: iY.iconContainerLeft,
                      children: (0, i.jsx)(n, { color: "currentColor", className: iY.icon }),
                  })
                : null,
            (0, i.jsx)("div", { className: o()(iY.label, iZ.Gy), children: t.label }),
            null != l
                ? (0, i.jsx)("div", {
                      className: iY.iconContainer,
                      children: (0, i.jsx)(l, { color: "currentColor", className: iY.icon }),
                  })
                : null,
        ],
    });
}
function i0(e) {
    let { target: t, commandName: n, appIconSrc: l } = e,
        r = a.useMemo(
            () =>
                null != l
                    ? (e) => {
                          let { className: t } = e;
                          return (0, i.jsx)("img", { src: l, alt: "", className: o()(t, iZ.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: R.intl.string(R.t["5IEsGx"]), icon: iB.W, muted: !0 }
                : { label: R.intl.string(R.t.LYju5J), muted: !0 };
    return (0, i.jsx)("div", {
        className: o()(iY.menu, iZ.MK),
        "aria-hidden": !0,
        children: (0, i.jsxs)("div", {
            className: iY.scroller,
            children: [
                (0, i.jsx)(iJ, { item: s }),
                (0, i.jsx)("div", { className: iY.separator }),
                (0, i.jsx)(iJ, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
function i1() {}
function i2(e) {
    let t,
        n,
        l,
        r,
        s,
        u,
        d,
        f,
        m,
        h,
        g,
        { projectId: p, exchanges: x } = e,
        {
            items: j,
            botIcon: b,
            appIconSrc: y,
        } = ((t = (0, c.bG)([nw.default], () => nw.default.getCurrentUser())),
        (n = (0, c.bG)([eT.Ay], () => eT.Ay.getProject(p))),
        (l = n?.application_id),
        (r = (0, c.bG)([im.A], () => im.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (s = n?.name ?? R.intl.string(T.default.JEYq8M)),
        (u = (0, c.bG)([nw.default], () => (null != l ? nw.default.getUser(l) : void 0), [l])),
        (f = ib("31337", s, { bot: !0, enabled: !(d = u?.bot === !0) })),
        (m = d ? u : f),
        (h = ib("31338", R.intl.string(T.default["9iAOsw"]), { discriminator: "0003" })),
        (g = ib("31339", (0, iv.mG)(t) ?? "", { enabled: null != t })),
        {
            items: a.useMemo(
                () =>
                    null == t || null == g || null == m || null == h
                        ? []
                        : (function (e, t, n) {
                              var l, r, i;
                              let { bot: a, currentUser: s, viewer: u, member: o } = t,
                                  c = [];
                              function d(e, t) {
                                  let {
                                          interactionName: n,
                                          messageType: l,
                                          menu: r,
                                      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                      i = String(c.length + 1),
                                      a = (0, ih.rh)({
                                          ...(0, ig.Ay)({
                                              channelId: ij.id,
                                              content: e,
                                              author: t,
                                              type: l ?? ev.lAJ.DEFAULT,
                                          }),
                                          id: i,
                                          state: ev.cmJ.SENT,
                                          ...(null != n
                                              ? {
                                                    interaction: {
                                                        id: i,
                                                        name: n,
                                                        type: ic.G.APPLICATION_COMMAND,
                                                        user: (0, ig.Vi)(s),
                                                    },
                                                }
                                              : {}),
                                      });
                                  c.push({ key: i, record: a, isCommandReply: null != n, menu: r });
                              }
                              for (let t of e)
                                  switch (t.kind) {
                                      case "command":
                                          d(t.bot, a, {
                                              interactionName: t.user.trim().replace(/^\//, "").split(/\s+/)[0] ?? "",
                                              messageType: ev.lAJ.CHAT_INPUT_COMMAND,
                                          });
                                          break;
                                      case "user_command":
                                      case "message_command": {
                                          let e = "user_command" === t.kind;
                                          (d(e ? n.memberMessage : n.targetMessage, e ? o : s, {
                                              menu: { target: e ? "user" : "message", commandName: t.user },
                                          }),
                                              d(t.bot, a, {
                                                  interactionName: t.user,
                                                  messageType: ev.lAJ.CONTEXT_MENU_COMMAND,
                                              }));
                                          break;
                                      }
                                      case "message":
                                          (d(((l = t.user), l.trim().replace(iy, `<@${a.id}>`)), s),
                                              d(((r = t.bot), r.includes("<@") ? r : `<@${u.id}> ${r}`), a));
                                          break;
                                      case "event":
                                          d(((i = t.bot), i.split(`@${o.username}`).join(`<@${o.id}>`)), a);
                                  }
                              return c;
                          })(
                              x,
                              { bot: m, currentUser: t, viewer: g, member: h },
                              {
                                  targetMessage: R.intl.string(T.default["y+QYes"]),
                                  memberMessage: R.intl.string(T.default.BUTRDc),
                              },
                          ),
                [x, m, t, g, h],
            ),
            botIcon: r,
            appIconSrc: r ?? m?.getAvatarURL(void 0, 80),
        });
    if (0 === j.length) return null;
    let k = ij.name;
    return (0, i.jsxs)("div", {
        className: iZ.Ix,
        children: [
            (0, i.jsxs)("div", {
                className: iZ.ZO,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(iz.N, { size: "sm", color: "currentColor" }),
                    (0, i.jsx)(v.E, { variant: "body-sm/semibold", color: "text-strong", tag: "span", children: k }),
                ],
            }),
            (0, i.jsx)("ol", {
                className: o()(iZ.TE, "group-spacing-16"),
                children: j.map((e) => {
                    let { key: t, record: n, isCommandReply: l, menu: r } = e;
                    return (0, i.jsxs)(
                        "li",
                        {
                            className: null != r ? iZ.Rz : void 0,
                            children: [
                                (0, i.jsx)(iQ.A, {
                                    message: n,
                                    channel: ij,
                                    author: (0, iV.FT)(n.author, ij),
                                    isGroupStart: !0,
                                    avatarOverride: n.author.bot ? (b ?? void 0) : void 0,
                                    childrenExecutedCommand: l ? (0, i.jsx)(iW.A, { message: n, channel: ij }) : void 0,
                                    usernameClassName: r?.target === "user" ? iZ.Ct : void 0,
                                    disableInteraction: !0,
                                }),
                                r?.target === "message"
                                    ? (0, i.jsx)("div", {
                                          className: iZ.S3,
                                          inert: !0,
                                          "aria-hidden": !0,
                                          children: (0, i.jsxs)(iX.Ay, {
                                              children: [
                                                  (0, i.jsx)(iX.qv, {
                                                      label: R.intl.string(R.t.lfIHs4),
                                                      icon: iU.n,
                                                      onClick: i1,
                                                  }),
                                                  (0, i.jsx)(iX.qv, {
                                                      label: R.intl.string(R.t["5IEsGx"]),
                                                      icon: iB.W,
                                                      onClick: i1,
                                                  }),
                                                  (0, i.jsx)(iX.qv, {
                                                      label: R.intl.string(R.t["UKOtz+"]),
                                                      icon: iK.MoreHorizontalIcon,
                                                      selected: !0,
                                                      onClick: i1,
                                                  }),
                                              ],
                                          }),
                                      })
                                    : null,
                                null != r
                                    ? (0, i.jsx)("div", {
                                          className: "user" === r.target ? iZ.ET : iZ.je,
                                          inert: !0,
                                          children: (0, i.jsx)(i0, {
                                              target: r.target,
                                              commandName: r.commandName,
                                              appIconSrc: y,
                                          }),
                                      })
                                    : null,
                            ],
                        },
                        t,
                    );
                }),
            }),
            (0, i.jsxs)("div", {
                className: iZ.DA,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(iH.k, { size: "sm", color: "currentColor" }),
                    (0, i.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        tag: "span",
                        lineClamp: 1,
                        children: R.intl.formatToPlainString(R.t["8lzR/R"], { channel: `#${k}` }),
                    }),
                ],
            }),
        ],
    });
}
n(381941);
var i3 = n(332173);
function i4(e) {
    let { name: t } = e;
    return (0, i.jsxs)(i3.A, { children: ["/", t] });
}
function i7(e) {
    let { text: t, commandNames: n } = e,
        l = (function (e, t) {
            if (null == t) return null;
            let n = [],
                l = 0;
            for (let r of e.matchAll(t)) {
                let t = (r.index ?? 0) + r[1].length;
                (t > l && n.push({ kind: "text", text: e.slice(l, t), start: l }),
                    n.push({ kind: "command", name: r[2], start: t }),
                    (l = t + 1 + r[2].length));
            }
            return 0 === n.length ? null : (l < e.length && n.push({ kind: "text", text: e.slice(l), start: l }), n);
        })(
            t,
            a.useMemo(
                () =>
                    (function (e) {
                        if (0 === e.length) return null;
                        let t = [...e].sort((e, t) => t.length - e.length).map(rY());
                        return RegExp(`(^|[\\s("'\u{201C}\u{2018}])/(${t.join("|")})(?![\\w-])`, "gu");
                    })(n),
                [n],
            ),
        );
    return null == l ? t : l.map((e) => ("command" === e.kind ? (0, i.jsx)(i4, { name: e.name }, e.start) : e.text));
}
n(827669);
var i5 = n(687966),
    i9 = n(757789),
    i8 = n(26137),
    i6 = n(430392),
    ae = n(231483),
    at = n(323384);
let an = {
    frame: T.default.Z2bt4u,
    overlay_widget: T.default["0mGHfU"],
    user_widget: T.default.Jipr29,
    bot: T.default.EbvC13,
    commands: T.default.EbvC13,
    automod: T.default.tiMvei,
};
var al = n(573634);
let ar = {
    frame: i5.GameControllerIcon,
    overlay_widget: i9.V,
    user_widget: i8.r,
    bot: i6.RobotIcon,
    commands: i6.RobotIcon,
    automod: ae.ShieldIcon,
};
function ai(e) {
    let { caption: t, children: n, className: l } = e;
    return (0, i.jsxs)("div", {
        className: o()(al.e7, l),
        children: [(0, i.jsx)(v.E, { variant: "body-sm/normal", color: "text-muted", children: t }), n],
    });
}
function aa(e) {
    let { labels: t } = e;
    return (0, i.jsx)("ul", {
        className: al.Ip,
        children: t.map((e) =>
            (0, i.jsx)(
                "li",
                {
                    className: al.jw,
                    children: (0, i.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        tag: "span",
                        children: e,
                    }),
                },
                e,
            ),
        ),
    });
}
function as(e) {
    let { name: t, description: n } = e;
    return (0, i.jsxs)("li", {
        className: al.lj,
        children: [
            (0, i.jsx)("span", {
                className: o()(al.Vo, al.G),
                children: (0, i.jsx)(at.k, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
            }),
            (0, i.jsxs)("div", {
                className: al.aV,
                children: [
                    (0, i.jsx)(v.E, { variant: "body-md/normal", color: "text-default", lineClamp: 1, children: t }),
                    (0, i.jsx)(v.E, { variant: "body-sm/normal", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
}
function au(e) {
    let { commands: t } = e;
    return (0, i.jsx)("ul", {
        className: al.wZ,
        children: t.map((e, t) => {
            let n = r0(e),
                l = e.description?.trim() ?? "";
            return (0, i.jsx)(
                "li",
                {
                    children: (0, i.jsxs)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        selectable: !0,
                        children: [
                            "/" === n
                                ? (0, i.jsx)(i4, { name: e.name })
                                : (0, i.jsx)(i3.A, { children: `${n}${e.name}` }),
                            "" !== l ? ` ${l}` : null,
                        ],
                    }),
                },
                t,
            );
        }),
    });
}
function ao(e) {
    let { bullets: t, commandNames: n } = e;
    return (0, i.jsx)("ul", {
        className: al.p_,
        children: t.map((e, t) =>
            (0, i.jsx)(
                "li",
                {
                    className: al.Aw,
                    children: (0, i.jsx)(v.E, {
                        variant: "body-md/normal",
                        color: "text-default",
                        tag: "span",
                        selectable: !0,
                        children: (0, i.jsx)(i7, { text: e, commandNames: n }),
                    }),
                },
                t,
            ),
        ),
    });
}
function ac(e) {
    let { experience: t, bullets: n, preview: l, blocks: r, commandNames: a } = e,
        s = "frame" === t.kind && !0 !== t.game,
        u = s ? at.k : ar[t.kind],
        o = R.intl.string(s ? T.default.BM4Ymz : an[t.kind]);
    return (0, i.jsxs)("section", {
        className: al.s9,
        "aria-label": o,
        children: [
            (0, i.jsxs)("div", {
                className: al.JQ,
                children: [
                    (0, i.jsx)("span", {
                        className: al.Vo,
                        children: (0, i.jsx)(u, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    (0, i.jsx)(v.E, { variant: "body-md/medium", color: "text-strong", tag: "span", children: o }),
                ],
            }),
            null != l ? (0, i.jsx)("div", { className: al.VH, children: l }) : null,
            "automod" === t.kind && 1 === n.length
                ? (0, i.jsx)(v.E, {
                      variant: "body-md/normal",
                      color: "text-default",
                      selectable: !0,
                      children: (0, i.jsx)(i7, { text: n[0], commandNames: a }),
                  })
                : n.length > 0
                  ? (0, i.jsx)(ao, { bullets: n, commandNames: a })
                  : null,
            r.length > 0 ? (0, i.jsx)("div", { className: al.PG, children: r }) : null,
        ],
    });
}
function ad(e) {
    var t;
    let n,
        l,
        r,
        { appName: s, intro: u, proposal: o, renderPreview: c, commandNames: d } = e,
        f =
            ((t = o.experiences ?? []),
            (n = t
                .filter((e) => {
                    let { kind: t } = e;
                    return "commands" === t;
                })
                .flatMap((e) => {
                    let { changes: t } = e;
                    return t.filter(
                        (e) =>
                            !(function (e, t) {
                                if (0 === t.length) return !1;
                                let n = t.map(rY()).join("|");
                                return RegExp(`(?<![\\p{L}\\p{N}/.:])/(?:${n})(?![\\p{L}\\p{N}_-])`, "iu").test(e);
                            })(e, d),
                    );
                })),
            (l = t.find((e) => {
                let { kind: t } = e;
                return "bot" === t;
            })),
            t.flatMap((e) =>
                "commands" === e.kind
                    ? null != l
                        ? []
                        : [{ experience: e, bullets: n }]
                    : e === l
                      ? [{ experience: e, bullets: [...e.changes, ...n] }]
                      : [{ experience: e, bullets: e.changes }],
            )),
        m =
            ((r =
                f.find((e) => {
                    let { experience: t } = e;
                    return "bot" === t.kind || "commands" === t.kind;
                }) ?? f[0]),
            r?.experience.id);
    return (0, i.jsxs)("div", {
        className: al.aN,
        children: [
            (0, i.jsxs)("div", {
                className: al.Lv,
                children: [(0, i.jsx)(x.D, { variant: "heading-lg/semibold", color: "text-strong", children: s }), u],
            }),
            f.map((e) => {
                let { experience: t, bullets: n } = e;
                return (0, i.jsxs)(
                    a.Fragment,
                    {
                        children: [
                            (0, i.jsx)("div", { className: al.yF, role: "separator" }),
                            (0, i.jsx)(ac, {
                                experience: t,
                                bullets: n,
                                preview: c(t),
                                blocks: (function (e, t, n) {
                                    let l = n
                                        ? [
                                              {
                                                  key: "permissions",
                                                  caption: T.default["2UbW6r"],
                                                  names: e.bot_permissions,
                                              },
                                              {
                                                  key: "intents",
                                                  caption: T.default["7TKfpj"],
                                                  names: e.privileged_intents,
                                              },
                                          ]
                                              .flatMap((e) => {
                                                  let { key: t, caption: n, names: l } = e;
                                                  return null != l && l.length > 0
                                                      ? [{ key: t, caption: R.intl.string(n), labels: l.map(rJ) }]
                                                      : [];
                                              })
                                              .map((e) => {
                                                  let { key: t, caption: n, labels: l } = e;
                                                  return (0, i.jsx)(
                                                      ai,
                                                      { caption: n, children: (0, i.jsx)(aa, { labels: l }) },
                                                      t,
                                                  );
                                              })
                                        : [];
                                    switch (t.kind) {
                                        case "frame":
                                            return [
                                                ...(function (e, t) {
                                                    let n = (function (e, t) {
                                                        if ("frame" !== t.kind) return null;
                                                        let n = R.intl.string(T.default["6/3tGY"]),
                                                            l = [];
                                                        if (t.surfaces.includes(ee.q7.APP_CHANNEL)) {
                                                            let r = e.app_channel_names ?? [];
                                                            l = (
                                                                null != t.app_channels && t.app_channels.length > 0
                                                                    ? t.app_channels
                                                                    : r.length > 0
                                                                      ? r.map((e) => ({ name: e }))
                                                                      : [
                                                                            {
                                                                                name: t.name
                                                                                    .toLowerCase()
                                                                                    .replace(/[^\p{L}\p{N}]+/gu, "-")
                                                                                    .replace(/^-+|-+$/g, ""),
                                                                            },
                                                                        ]
                                                            ).map((e) => {
                                                                let { name: t, description: l } = e,
                                                                    r = l?.trim() ?? "";
                                                                return { name: t, description: "" !== r ? r : n };
                                                            });
                                                        }
                                                        return {
                                                            channels: l,
                                                            launchableAnywhere: t.surfaces.includes(ee.q7.ACTIVITY),
                                                            usableInVoice: t.surfaces.includes(ee.q7.VOICE_CHANNEL),
                                                        };
                                                    })(e, t);
                                                    if (null == n) return [];
                                                    let l = [];
                                                    n.channels.length > 0 &&
                                                        l.push(
                                                            (0, i.jsx)(
                                                                ai,
                                                                {
                                                                    className: al.Iw,
                                                                    caption: R.intl.formatToPlainString(
                                                                        T.default.w8F5sy,
                                                                        { count: n.channels.length },
                                                                    ),
                                                                    children: (0, i.jsx)("ul", {
                                                                        className: al.wZ,
                                                                        "data-conjure-plan-channels": "",
                                                                        children: n.channels.map((e) => {
                                                                            let { name: t, description: n } = e;
                                                                            return (0, i.jsx)(
                                                                                as,
                                                                                { name: t, description: n },
                                                                                t,
                                                                            );
                                                                        }),
                                                                    }),
                                                                },
                                                                "channels",
                                                            ),
                                                        );
                                                    let r = [
                                                        ...(n.usableInVoice
                                                            ? [R.intl.string(T.default["4oGg2h"])]
                                                            : []),
                                                        ...(n.launchableAnywhere
                                                            ? [R.intl.string(T.default.BTGCfR)]
                                                            : []),
                                                    ];
                                                    return (
                                                        r.length > 0 &&
                                                            l.push(
                                                                (0, i.jsx)(
                                                                    ai,
                                                                    {
                                                                        caption: R.intl.string(T.default.MY6UGJ),
                                                                        children: (0, i.jsx)(aa, { labels: r }),
                                                                    },
                                                                    "features",
                                                                ),
                                                            ),
                                                        l
                                                    );
                                                })(e, t),
                                                ...l,
                                            ];
                                        case "bot":
                                        case "commands":
                                            return [
                                                ...(0 === e.commands.length
                                                    ? []
                                                    : [
                                                          (0, i.jsx)(
                                                              ai,
                                                              {
                                                                  caption: R.intl.string(R.t["0hKkS+"]),
                                                                  children: (0, i.jsx)(au, { commands: e.commands }),
                                                              },
                                                              "commands",
                                                          ),
                                                      ]),
                                                ...l,
                                            ];
                                        default:
                                            return l;
                                    }
                                })(o, t, t.id === m),
                                commandNames: d,
                            }),
                        ],
                    },
                    t.id,
                );
            }),
        ],
    });
}
var af = n(633075),
    am = n(591410),
    ah = n(27399);
function ag(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, c.bG)([nw.default], () => nw.default.getCurrentUser()),
        r = a.useMemo(() => new af.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, i.jsx)("div", {
              className: ah.H,
              children: (0, i.jsx)(am.A, {
                  user: l,
                  widget: r,
                  allowEditing: !1,
                  disableInteraction: !0,
                  interactiveLinks: !0,
                  disableCTA: !0,
                  rendererProps: n,
              }),
          });
}
var ap = n(443863);
function ax(e) {
    let t,
        { projectId: n, src: l, alt: r, size: a, onError: s } = e,
        u =
            ((t = Math.min(1, 1872 / a.width, 970 / a.height)),
            { width: r7(a.width * t, 1920), height: r7(a.height * t, 1018) });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(rG, { projectId: n }),
            (0, i.jsx)("div", {
                className: ap.nk,
                style: {
                    "--custom-conjure-plan-overlay-widget-top": r5,
                    "--custom-conjure-plan-overlay-widget-end": r9,
                    "--custom-conjure-plan-overlay-widget-width": u.width,
                    "--custom-conjure-plan-overlay-widget-height": u.height,
                },
                children: (0, i.jsx)("img", { src: l, alt: r, className: ap.M7, onError: s }),
            }),
        ],
    });
}
function av(e, t, n) {
    Promise.all(
        t.map((t) => {
            let { id: n } = t;
            return (0, e0.PK)(e, n);
        }),
    ).then(
        (e) => {
            (0, ld.R)({
                items: e.map((e, n) => ({ type: "IMAGE", url: e, alt: t[n].alt })),
                startingIndex: n,
                shouldHideMediaOptions: !0,
                location: "ConjureChat",
            });
        },
        () => {},
    );
}
function aj(e) {
    let { projectId: t, design: n, alt: l } = e,
        { id: r } = n,
        { src: a, gone: s, handleError: u } = (0, lf._)(t, r);
    return s
        ? null
        : (0, i.jsx)(tV.D, {
              className: ap.xX,
              onClick: () => av(t, [{ id: r, alt: l }], 0),
              "aria-label": R.intl.string(T.default.TvAPIm),
              children: null == a ? null : (0, i.jsx)("img", { src: a, alt: l, className: ap.sN, onError: u }),
          });
}
function ab(e) {
    let { projectId: t, design: n, size: l } = e,
        { id: r } = n,
        { src: s, gone: u, handleError: d } = (0, lf._)(t, r),
        [f, m] = a.useState(!1),
        [h, g] = a.useState(!1),
        {
            slide: p,
            labels: x,
            pick: j,
        } = (function (e) {
            let { ready: t, paused: n = !1 } = e,
                l = (0, c.bG)([ik.Ay], () => ik.Ay.useReducedMotion),
                [r, i] = a.useState(0),
                [s, u] = a.useState(!1),
                o = t && !l && !n && !s,
                d = l && !s ? 0 : r;
            a.useEffect(() => {
                if (!o) return;
                let e = setInterval(() => i((e) => (e + 1) % iw.length), 4e3);
                return () => clearInterval(e);
            }, [o]);
            let f = a.useCallback((e) => {
                    (u(!0), i(e));
                }, []),
                m = a.useCallback(() => f(d), [f, d]);
            return { slide: d, labels: iw.map((e) => R.intl.string(e)), pick: f, hold: m };
        })({ ready: null != s, paused: f || h });
    if (u) return null;
    let b = R.intl.string(T.default.mjryK4),
        y = R.intl.string(T.default["rPpf5/"]);
    return (0, i.jsxs)("div", {
        className: ap.RM,
        onMouseEnter: () => m(!0),
        onMouseLeave: () => m(!1),
        onFocus: () => g(!0),
        onBlur: (e) => {
            e.currentTarget.contains(e.relatedTarget) || g(!1);
        },
        children: [
            (0, i.jsx)(tV.D, {
                className: o()(ap.xX, ap.nj, { [ap.qQ]: 0 === p }),
                style: { "--custom-conjure-plan-overlay-scene-aspect": String(r4) },
                onClick: () => av(t, [{ id: r, alt: b }], 0),
                "aria-label": R.intl.string(T.default.TvAPIm),
                children:
                    null == s
                        ? null
                        : 0 === p
                          ? (0, i.jsx)("img", { src: s, alt: b, className: ap.Ac, onError: d })
                          : (0, i.jsx)(ax, { projectId: t, src: s, alt: y, size: l, onError: d }),
            }),
            (0, i.jsx)("div", {
                className: ap._4,
                role: "group",
                "aria-label": R.intl.string(T.default.EH36X6),
                children: x.map((e, t) =>
                    (0, i.jsx)(
                        tV.D,
                        {
                            className: o()(ap.c, { [ap.Cw]: p === t }),
                            "aria-pressed": p === t,
                            onClick: () => j(t),
                            children: (0, i.jsx)(v.E, {
                                variant: "body-xs/medium",
                                color: "none",
                                tag: "span",
                                children: e,
                            }),
                        },
                        e,
                    ),
                ),
            }),
        ],
    });
}
function ay(e) {
    let { projectId: t, id: n, alt: l, onOpen: r } = e,
        { src: a, gone: s, handleError: u } = (0, lf._)(t, n);
    return s
        ? null
        : (0, i.jsx)("li", {
              children: (0, i.jsx)(tV.D, {
                  className: ap.ir,
                  onClick: r,
                  "aria-label": l,
                  children: null == a ? null : (0, i.jsx)("img", { src: a, alt: "", className: ap.rA, onError: u }),
              }),
          });
}
function ak(e) {
    let { projectId: t, proposal: n } = e,
        l = (n.reference_images ?? []).map((e, t) => {
            let { id: n } = e;
            return { id: n, alt: R.intl.formatToPlainString(T.default.xFgQ8L, { number: t + 1 }) };
        });
    return 0 === l.length
        ? null
        : (0, i.jsx)("section", {
              className: ap.Op,
              children: (0, i.jsxs)("div", {
                  className: ap.uW,
                  children: [
                      (0, i.jsx)(v.E, {
                          variant: "body-xs/medium",
                          color: "text-muted",
                          tag: "span",
                          children: R.intl.string(T.default.ubBJcy),
                      }),
                      (0, i.jsx)("ul", {
                          className: ap.Ft,
                          children: l.map((e, n) => {
                              let { id: r, alt: a } = e;
                              return (0, i.jsx)(ay, { projectId: t, id: r, alt: a, onOpen: () => av(t, l, n) }, r);
                          }),
                      }),
                  ],
              }),
          });
}
function aw(e) {
    var t;
    let n,
        l,
        r,
        s,
        u,
        o,
        f,
        m,
        h,
        g,
        { projectId: p, proposal: x, version: j, onApprove: b } = e,
        { botExchanges: y } =
            ((n = rU(x, ee.q7.APPLICATION_COMMANDS)),
            (l =
                rU(x, ee.q7.BOT) || n
                    ? null != x.bot
                        ? x.bot.interaction
                        : n && x.commands.some(rV)
                          ? "commands"
                          : null
                    : null),
            (r = a.useMemo(
                () =>
                    null == l
                        ? []
                        : rQ(x, l, {
                              message: R.intl.string(T.default.J7qggf),
                              reply: R.intl.string(T.default.nqYtiy),
                              event: R.intl.string(T.default["05lU9W"]),
                          }),
                [x, l],
            )),
            { botInteraction: l, botExchanges: r }),
        k = (function (e, t) {
            let { widget_config: n, widget_preview: l = is } = t,
                r = (0, c.bG)([ir.default], () => ir.default.locale),
                i = (0, c.bG)([eT.Ay], () => {
                    let t = eT.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [n, l] = a.useState(ia);
                    return (
                        a.useEffect(() => {
                            let n = Object.entries(t ?? {});
                            if (0 === n.length) return;
                            let r = !1;
                            return (
                                Promise.all(
                                    n.map((t) => {
                                        let [n, l] = t;
                                        return (0, e0.PK)(e, l.id).then(
                                            (e) => [n, e],
                                            () => null,
                                        );
                                    }),
                                ).then(
                                    (e) => {
                                        r || l(Object.fromEntries(e.filter((e) => null != e)));
                                    },
                                    () => {},
                                ),
                                () => {
                                    r = !0;
                                }
                            );
                        }, [e, t]),
                        n
                    );
                })(e, l.images),
                u = a.useMemo(
                    () =>
                        null == n
                            ? null
                            : (function (e, t, n, l) {
                                  let r = {};
                                  for (let [t, n] of Object.entries(e.surfaces))
                                      null != n &&
                                          (r[t] = (function (e) {
                                              let t = {};
                                              for (let [n, l] of Object.entries(e.components)) {
                                                  let e = {};
                                                  for (let [t, n] of Object.entries(l.fields))
                                                      e[t] = {
                                                          ...iu(n),
                                                          ...(null != n.fallback ? { fallback: iu(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let i = r6.uW.safeParse(r);
                                  if (!i.success) return null;
                                  let a = i.data;
                                  return null == a[il.m.WIDGET_TOP] || null == a[il.m.WIDGET_BOTTOM]
                                      ? null
                                      : {
                                            locale: l,
                                            surfaceConfigs: a,
                                            isLoading: !1,
                                            hasIdentity: !0,
                                            resolutionContext: {
                                                data: (function (e, t, n) {
                                                    let l = (function (e) {
                                                            let t = new Map();
                                                            for (let n of Object.values(e.surfaces))
                                                                for (let e of Object.values(n?.components ?? {}))
                                                                    for (let n of Object.values(e.fields))
                                                                        "data" !== n.value_type ||
                                                                            t.has(n.value) ||
                                                                            t.set(n.value, n.presentation_type);
                                                            return t;
                                                        })(e),
                                                        r = {};
                                                    for (let [e, i] of Object.entries(t.sample_data ?? {}))
                                                        if ("image" === l.get(e)) {
                                                            let t = n[String(i)];
                                                            null != t &&
                                                                (r[e] = {
                                                                    type: r6.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof i
                                                                ? (r[e] = { type: r6.oG.NUMBER, value: i })
                                                                : (r[e] = { type: r6.oG.STRING, value: i });
                                                    return r;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(io),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: ii,
                                            },
                                        };
                              })(n, l, s, r),
                    [n, l, s, r],
                );
            return a.useMemo(() => (null == i || null == u ? null : { applicationId: i, rendererProps: u }), [i, u]);
        })(p, x),
        w = j?.superseded === !0,
        A = x.what_changed?.trim() ?? "",
        N =
            ((t = x.commands),
            a.useMemo(
                () =>
                    t
                        .filter((e) => "/" === r0(e))
                        .map((e) => {
                            let { name: t } = e;
                            return t;
                        }),
                [t],
            )),
        S =
            ((u =
                null == (s = r3(x))
                    ? null
                    : (x.experiences?.find((e) => {
                          let { surfaces: t } = e;
                          return t.includes(s);
                      })?.id ?? null)),
            (f = null != (o = x.design_image) && o.id !== r8(x)?.id ? o : null),
            (m = r8(x)),
            (h =
                x.experiences?.find((e) => {
                    let { kind: t } = e;
                    return "frame" === t;
                })?.id ?? u),
            (g =
                x.experiences?.find((e) => {
                    let { kind: t } = e;
                    return "overlay_widget" === t;
                })?.id ?? u),
            {
                ui: null != f && null != h ? { experienceId: h, design: f } : null,
                overlay:
                    null != m && null != g ? { experienceId: g, design: m, size: en(x.overlay_widget ?? null) } : null,
            }),
        C = a.useMemo(
            () =>
                x.commands.some(rV)
                    ? rQ({ ...x, bot: void 0 }, "commands", {
                          message: R.intl.string(T.default.J7qggf),
                          reply: R.intl.string(T.default.nqYtiy),
                          event: R.intl.string(T.default["05lU9W"]),
                      })
                    : [],
            [x],
        ),
        I = (0, c.bG)([eT.Ay], () => eT.Ay.getProject(p)?.name, [p]),
        E =
            w && null != j
                ? R.intl.formatToPlainString(T.default.YZ3qJs, { version: j.version })
                : R.intl.string(T.default["3b6e7o"]),
        _ = w ? (0, i.jsx)(t2, { children: R.intl.string(T.default.hF2c41) }) : null;
    return (0, i.jsxs)(t3, {
        title: E,
        meta: _,
        superseded: w,
        showLabel: R.intl.string(T.default.yD8EJS),
        hideLabel: R.intl.string(T.default.nSPGNb),
        bodyClassName: ap.rf,
        "data-conjure-plan-card": !0,
        children: [
            (0, i.jsx)("div", {
                className: ap.Qs,
                children: (0, i.jsx)(ad, {
                    appName: I ?? x.experiences?.[0]?.name ?? "",
                    intro: (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(v.E, {
                                variant: "body-md/normal",
                                color: "text-default",
                                selectable: !0,
                                children: (0, i.jsx)(i7, { text: x.summary, commandNames: N }),
                            }),
                            (0, i.jsx)(ak, { projectId: p, proposal: x }),
                            "" !== A
                                ? (0, i.jsxs)("section", {
                                      className: ap.uW,
                                      children: [
                                          (0, i.jsx)(v.E, {
                                              variant: "body-xs/medium",
                                              color: "text-muted",
                                              tag: "span",
                                              children: R.intl.string(T.default.iNS4dl),
                                          }),
                                          (0, i.jsx)(v.E, {
                                              variant: "body-md/normal",
                                              color: "text-default",
                                              selectable: !0,
                                              children: (0, i.jsx)(i7, { text: A, commandNames: N }),
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    }),
                    proposal: x,
                    renderPreview: function (e) {
                        switch (e.kind) {
                            case "frame":
                            case "overlay_widget": {
                                let t,
                                    n =
                                        e.id === S.ui?.experienceId
                                            ? (0, i.jsx)(aj, {
                                                  projectId: p,
                                                  design: S.ui.design,
                                                  alt: R.intl.string(null == (t = r3(x)) ? T.default["3/aHX6"] : r1[t]),
                                              })
                                            : null,
                                    l =
                                        e.id === S.overlay?.experienceId
                                            ? (0, i.jsx)(ab, {
                                                  projectId: p,
                                                  design: S.overlay.design,
                                                  size: S.overlay.size,
                                              })
                                            : null;
                                return null == n && null == l ? null : (0, i.jsxs)(i.Fragment, { children: [n, l] });
                            }
                            case "user_widget":
                                return null != k ? (0, i.jsx)(ag, { ...k }) : null;
                            case "automod":
                                return null != x.automod && x.automod.examples.length > 0
                                    ? (0, i.jsx)(iG, { automod: x.automod })
                                    : null;
                            case "commands":
                            case "bot": {
                                let t = (function (e, t, n) {
                                    var l;
                                    let r;
                                    if ("commands" === e.kind) return n;
                                    let i = (e.example_exchanges ?? [])
                                        .filter((e) => {
                                            let { bot: t } = e;
                                            return "" !== t.trim();
                                        })
                                        .slice(0, 3)
                                        .map((e) => {
                                            let { user: t, bot: n } = e,
                                                l = t.trim();
                                            return "" === l
                                                ? { kind: "event", user: "", bot: n }
                                                : { kind: l.startsWith("/") ? "command" : "message", user: l, bot: n };
                                        });
                                    return (
                                        (l = i.length > 0 ? i : t),
                                        (r = l.some((e) => "command" === e.kind || rW(e))),
                                        0 === n.length || r ? l.slice(0, 3) : [...l.slice(0, 2), n[0]]
                                    );
                                })(e, y, C);
                                return t.length > 0 ? (0, i.jsx)(i2, { projectId: p, exchanges: t }) : null;
                            }
                        }
                    },
                    commandNames: N,
                }),
            }),
            null == b || w
                ? null
                : (0, i.jsxs)("div", {
                      className: ap.qr,
                      children: [
                          (0, i.jsx)(d.$, {
                              variant: "primary",
                              size: "sm",
                              text: R.intl.string(T.default["6S+wRM"]),
                              onClick: b,
                          }),
                          (0, i.jsx)(v.E, {
                              variant: "body-sm/normal",
                              color: "text-subtle",
                              tag: "span",
                              children: R.intl.string(T.default.IZoqbR),
                          }),
                      ],
                  }),
        ],
    });
}
var aA = n(331322),
    aN = n(289565);
function aS(e) {
    let { onDismiss: t, children: n } = e;
    return null == t
        ? (0, i.jsx)("div", { className: aN.m, children: n })
        : (0, i.jsxs)("div", {
              className: aN.Z,
              children: [
                  n,
                  (0, i.jsx)(e1.m, {
                      text: R.intl.string(R.t.WAI6xu),
                      asContainer: !0,
                      children: (0, i.jsx)(tn.K, {
                          "aria-label": R.intl.string(R.t.WAI6xu),
                          icon: eW.P,
                          variant: "icon-only",
                          size: "sm",
                          onClick: t,
                      }),
                  }),
              ],
          });
}
function aC(e, t) {
    return null != t && ("new_ui" === e.reason ? !0 === t.newUiUnpublished : "not_live" === t.publishState);
}
function aI(e, t) {
    return null != e && aC(t, e.status);
}
let aE = new WeakMap();
var a_ = n(175841),
    aM = n(27232),
    aT = n(505930),
    aR = n(506774),
    aP = n(385081);
let aL = "conjurePublishRatings",
    a$ = "conjurePublishRatingViews",
    aq = [1, 2, 3, 4, 5],
    aD = { 1: T.default.GhbsGA, 2: T.default.cm0nwU, 3: T.default.kGvlh2, 4: T.default.dVBSUg, 5: T.default.DKlgF7 };
function aF(e) {
    return R.intl.string(aD[e]);
}
let aO = new Set(),
    aG = 0;
function az() {
    return aR.w.get(aL) ?? {};
}
function aU(e, t) {
    return az()[e]?.[t] ?? null;
}
function aB(e) {
    return (aO.add(e), () => aO.delete(e));
}
function aK(e) {
    let { projectId: t, turnId: n, cta: l, status: r, placement: i } = e;
    return {
        projectId: t,
        turnId: n,
        publishReason: l.reason ?? "first_publish",
        surface: r?.surface ?? l.surface,
        placement: i,
        publishState: r?.publishState ?? null,
    };
}
var aH = n(189213);
function aV(e) {
    let { rating: t, ...n } = e,
        {
            text: l,
            setText: r,
            canSend: s,
            send: u,
        } = (function (e) {
            let [t, n] = a.useState("");
            return {
                text: t,
                setText: n,
                canSend: "" !== t.trim(),
                send: () => {
                    let n;
                    "" !== (n = t.trim().slice(0, 256)) && (0, aP.Fz)(e, n);
                },
            };
        })(t),
        o = R.intl.string(T.default.IqkF07);
    return (0, i.jsx)(aH.a, {
        ...n,
        title: o,
        actions: [
            {
                variant: "primary",
                text: R.intl.string(T.default["sr+mUC"]),
                disabled: !s,
                onClick: () => {
                    (u(), n.onClose());
                },
            },
        ],
        children: (0, i.jsx)(np.f, {
            label: o,
            hideLabel: !0,
            placeholder: R.intl.string(T.default.HMGKAV),
            value: l,
            onChange: r,
            rows: 4,
            maxLength: 256,
            showRemainingCharacterCount: !0,
        }),
    });
}
var aW = n(54100);
function aX(e) {
    let { rating: t } = e;
    return (0, i.jsxs)("div", {
        className: aW.mo,
        role: "status",
        children: [
            (0, i.jsx)(a_.SparklesIcon, { size: "xs", color: "currentColor", className: aW.dQ, "aria-hidden": !0 }),
            (0, i.jsx)(v.E, {
                variant: "body-xs/medium",
                color: "text-muted",
                children:
                    t <= 2
                        ? R.intl.string(T.default["nIc9/M"])
                        : 3 === t
                          ? R.intl.string(T.default.ausj8U)
                          : R.intl.string(T.default.HilSjw),
            }),
        ],
    });
}
function aQ(e) {
    let { projectId: t, turnId: n, cta: l, status: r, placement: s } = e,
        { rating: u, rate: c } = (function (e) {
            let { projectId: t, turnId: n } = e;
            a.useSyncExternalStore(aB, () => aG);
            let { publishReason: l, surface: r, placement: i, publishState: s } = aK(e);
            return (
                a.useEffect(() => {
                    !(function (e) {
                        if (null != aU(e.projectId, e.turnId)) return;
                        let t = aR.w.get(a$) ?? {};
                        t[e.projectId]?.[e.turnId] !== !0 &&
                            ((0, aP.rv)(e),
                            aR.w.set(a$, { ...t, [e.projectId]: { ...t[e.projectId], [e.turnId]: !0 } }));
                    })({ projectId: t, turnId: n, publishReason: l, surface: r, placement: i, publishState: s });
                }, [t, n, l, r, i, s]),
                {
                    rating: aU(t, n),
                    rate(t) {
                        let n = (function (e) {
                            let { rating: t, ...n } = e,
                                { projectId: l, turnId: r } = n;
                            if (null != aU(l, r)) return null;
                            let i = { ...aK(n), rating: t };
                            (0, aP.gw)(i);
                            let a = az();
                            return (aR.w.set(aL, { ...a, [l]: { ...a[l], [r]: t } }), aG++, aO.forEach((e) => e()), i);
                        })({ ...e, rating: t });
                        return null != n && t <= 2 ? n : null;
                    },
                }
            );
        })({ projectId: t, turnId: n, cta: l, status: r, placement: s }),
        [d, f] = a.useState(null),
        [m, h] = a.useState(null),
        [g, p] = a.useState(!1),
        x = a.useId(),
        j = a.useId(),
        b = a.useRef(!1);
    if (
        (a.useEffect(() => {
            if (!g) return;
            let e = setTimeout(() => p(!1), 420);
            return () => clearTimeout(e);
        }, [g]),
        null != u && !g)
    )
        return (0, i.jsx)(aX, { rating: u });
    let y = null != u,
        k = y ? u : (m ?? d),
        w = y || (null == m && null != d);
    function A(e) {
        if (y) return;
        (f(e), h(null), p(!0));
        let t = c(e);
        null != t && (0, K.qf)((e) => (0, i.jsx)(aV, { ...e, rating: t }));
    }
    return (0, i.jsxs)("div", {
        className: aW.nM,
        onMouseLeave: () => h(null),
        children: [
            (0, i.jsxs)("span", {
                className: aW.WD,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(v.E, {
                        id: j,
                        variant: "body-xs/medium",
                        color: "text-muted",
                        className: o()(aW.Pf, { [aW.KH]: null == k }),
                        children: R.intl.string(T.default.mTV326),
                    }),
                    aq.map((e) =>
                        (0, i.jsx)(
                            v.E,
                            {
                                variant: "body-xs/medium",
                                color: "text-default",
                                className: o()(aW.Pf, { [aW.KH]: k === e }),
                                children: aF(e),
                            },
                            e,
                        ),
                    ),
                ],
            }),
            (0, i.jsx)("div", {
                role: "radiogroup",
                "aria-labelledby": j,
                className: aW.uf,
                children: aq.map((e) => {
                    let t = null != k && e <= k,
                        n = t ? aM.StarIcon : aT.y;
                    return (0, i.jsxs)(
                        "label",
                        {
                            className: aW.uK,
                            onMouseEnter: () => {
                                y || h(e);
                            },
                            children: [
                                (0, i.jsx)("input", {
                                    type: "radio",
                                    name: x,
                                    value: e,
                                    checked: !1,
                                    onChange: () => {
                                        b.current ? f(e) : A(e);
                                    },
                                    onKeyDown: (t) => {
                                        ((b.current = t.key.startsWith("Arrow")),
                                            "Enter" === t.key && (t.preventDefault(), A(e)));
                                    },
                                    onKeyUp: () => {
                                        b.current = !1;
                                    },
                                    className: aW.hF,
                                    "aria-label": R.intl.formatToPlainString(T.default.NU7Dex, {
                                        rating: e,
                                        label: aF(e),
                                    }),
                                }),
                                (0, i.jsx)(
                                    "span",
                                    {
                                        className: o()(aW.d4, { [aW.cO]: t, [aW.Ng]: t && w }),
                                        children: (0, i.jsx)(n, {
                                            size: "xs",
                                            color: "currentColor",
                                            "aria-hidden": !0,
                                        }),
                                    },
                                    t && w ? `picked-${k}` : "idle",
                                ),
                            ],
                        },
                        e,
                    );
                }),
            }),
        ],
    });
}
function aZ(e) {
    let { projectId: t, publish: n } = e,
        l = (0, eK.A)(t, n);
    return (0, i.jsx)(d.$, {
        variant: "primary",
        size: "sm",
        loading: n.publishing && !n.showsProgress,
        text: n.label,
        onClick: () => l("card"),
    });
}
function aY(e) {
    let { projectId: t, turnId: n, cta: l } = e,
        r = (0, eU.Ay)(t);
    return null != r && aI(r, l)
        ? (0, i.jsx)(aS, {
              children: (0, i.jsxs)(aA.B, {
                  gap: 12,
                  align: "start",
                  children: [
                      (0, i.jsx)(aZ, { projectId: t, publish: r }),
                      null != r.failure
                          ? (0, i.jsx)(v.E, {
                                variant: "body-sm/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: r.failure,
                            })
                          : null,
                      null != n
                          ? (0, i.jsx)(aQ, {
                                projectId: t,
                                turnId: n,
                                cta: l,
                                status: r.status,
                                placement: "publish_card",
                            })
                          : null,
                  ],
              }),
          })
        : null;
}
var aJ = n(303345),
    a0 = n(44255),
    a1 = n(416473),
    a2 = n(289830);
function a3(e) {
    let { projectId: t, proposal: n, current: l } = e,
        r = (function (e, t, n) {
            let l = (0, c.bG)(
                    [eT.Ay],
                    () => {
                        let t = eT.Ay.getProject(e);
                        return null != t && (0, eT.jf)(t);
                    },
                    [e],
                ),
                [r, i] = a.useState("idle"),
                [s, u] = a.useState(null),
                o = a.useCallback(async () => {
                    (i("sending"), u(null));
                    try {
                        (await (0, a1.Du)(e, t.trigger), i("on"));
                    } catch (e) {
                        (u(e instanceof aJ.A ? e.message : R.intl.string(T.default.EXceox)), i("error"));
                    }
                }, [e, t.trigger]),
                [d] = a.useState(() => Date.now()),
                f =
                    t.next_run_at > d
                        ? R.intl.formatToPlainString(T.default.orZDqY, { time: (0, a0.TP)(t.next_run_at) })
                        : null;
            return {
                summary: (0, a0.lD)(t.trigger),
                firstPublish: f,
                status: r,
                error: s,
                onTurnOn: l && n && "on" !== r ? o : void 0,
            };
        })(t, n, l);
    return (0, i.jsx)(t0, {
        title: R.intl.string(T.default.ZtfX9V),
        children: (0, i.jsxs)("div", {
            className: a2.r,
            children: [
                (0, i.jsxs)("div", {
                    className: a2.z,
                    children: [
                        (0, i.jsx)(v.E, { variant: "body-md/medium", children: r.summary }),
                        null != r.firstPublish
                            ? (0, i.jsx)(v.E, {
                                  variant: "body-sm/normal",
                                  color: "text-muted",
                                  children: r.firstPublish,
                              })
                            : null,
                        (0, i.jsx)(v.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: R.intl.string(T.default.cxNHma),
                        }),
                        "on" === r.status
                            ? (0, i.jsx)(v.E, {
                                  variant: "body-sm/normal",
                                  role: "status",
                                  children: R.intl.string(T.default.k4IRsm),
                              })
                            : null,
                        "error" === r.status
                            ? (0, i.jsx)(v.E, {
                                  variant: "body-sm/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: r.error,
                              })
                            : null,
                    ],
                }),
                null != r.onTurnOn
                    ? (0, i.jsx)(d.$, {
                          variant: "secondary",
                          size: "sm",
                          text: R.intl.string(T.default.EuhBSG),
                          loading: "sending" === r.status,
                          disabled: "sending" === r.status,
                          onClick: r.onTurnOn,
                      })
                    : null,
            ],
        }),
    });
}
var a4 = n(989271);
function a7(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = a.useId(),
        s = null == l;
    return (0, i.jsxs)(tV.D, {
        className: o()(a4.nM, { [a4.f1]: s, [a4.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": R.intl.formatToPlainString(T.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, i.jsxs)("div", {
                className: a4.jo,
                children: [
                    n
                        ? (0, i.jsx)(f.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: a4.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, i.jsx)(v.E, {
                        tag: "div",
                        variant: "body-md/medium",
                        color: "none",
                        className: a4.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, i.jsx)(v.E, {
                      tag: "div",
                      id: r,
                      variant: "body-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function a5(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = a.useState(() => new Set()),
        u = a.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, i.jsx)(t0, {
        title: R.intl.string(T.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, i.jsx)(
                a7,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : u },
                e.id,
            ),
        ),
    });
}
var a9 = n(530557),
    a8 = n(431527),
    a6 = n(202723);
function se(e) {
    let { projectId: t, cardId: l, request: r, status: s, awaiting: u } = e,
        c = a.useCallback(() => {
            (0, K.mM)(async () => {
                let { default: e } = await Promise.all([n.e(291953), n.e(197826)]).then(n.bind(n, 644441));
                return (n) => (0, i.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        f = a.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: a9.R })), [r.fields]),
        m = (0, lz.bB)(l, s),
        h = o()(a6.Lo, { [a6.jY]: m });
    return "superseded" === s
        ? (0, i.jsx)(
              "article",
              {
                  className: h,
                  children: (0, i.jsx)(v.E, {
                      variant: "body-xs/semibold",
                      color: "text-muted",
                      tag: "span",
                      children: R.intl.string(T.default.CTxtdV),
                  }),
              },
              s,
          )
        : "inactive" === s
          ? (0, i.jsxs)(
                "article",
                {
                    className: h,
                    children: [
                        (0, i.jsx)(v.E, {
                            variant: "body-xs/semibold",
                            color: "text-muted",
                            tag: "span",
                            children: R.intl.string(T.default.HCQvpO),
                        }),
                        (0, i.jsx)(a8.C, { label: R.intl.string(T.default.HCQvpO), size: "xs", items: f }),
                    ],
                },
                s,
            )
          : "pending" === s
            ? (0, i.jsx)(
                  "article",
                  {
                      className: a6.Lo,
                      children: (0, i.jsx)(a8.C, { label: R.intl.string(T.default.HCQvpO), size: "xs", items: f }),
                  },
                  s,
              )
            : "received" === s
              ? (0, i.jsxs)(
                    "article",
                    {
                        className: h,
                        children: [
                            (0, i.jsxs)("div", {
                                className: a6.$h,
                                children: [
                                    (0, i.jsx)("span", {
                                        className: a6.c9,
                                        "aria-hidden": !0,
                                        children: (0, i.jsx)(lY.y, {
                                            size: "xs",
                                            color: to.A.colors.ICON_FEEDBACK_POSITIVE,
                                        }),
                                    }),
                                    (0, i.jsx)(v.E, {
                                        variant: "body-xs/semibold",
                                        color: "text-feedback-positive",
                                        tag: "span",
                                        children: R.intl.string(T.default.sfp7Up),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(v.E, {
                                variant: "body-sm/normal",
                                color: "text-default",
                                selectable: !0,
                                children: r.fields
                                    .map((e) => e.label)
                                    .map((e) =>
                                        R.intl.formatToPlainString(T.default["Z+FC3j"], {
                                            label: e,
                                            value: R.intl.string(T.default.CJq1rY),
                                        }),
                                    )
                                    .join(" \xb7 "),
                            }),
                        ],
                    },
                    s,
                )
              : (0, i.jsxs)("article", {
                    className: a6.Lo,
                    children: [
                        (0, i.jsx)(v.E, {
                            variant: "body-xs/semibold",
                            color: null != u ? "text-brand" : "text-muted",
                            tag: "span",
                            children: R.intl.string(null != u ? T.default.O0QIqj : T.default.HCQvpO),
                        }),
                        (0, i.jsx)(l0.A, {
                            text: null != r.note && "" !== r.note ? r.note : R.intl.string(T.default.MPGSHL),
                            variant: "body-sm/normal",
                            color: "text-default",
                        }),
                        (0, i.jsx)(a8.C, { label: R.intl.string(T.default.HCQvpO), size: "xs", items: f }),
                        (0, i.jsx)("div", {
                            className: a6.sq,
                            children: (0, i.jsx)(d.$, {
                                variant: "primary",
                                size: "sm",
                                onClick: c,
                                text: R.intl.string(T.default.EK8tKY),
                            }),
                        }),
                    ],
                });
}
var st = n(919790),
    sn = n(908492),
    sl = n(971824),
    sr = n(162052),
    si = n(165648);
function sa(e) {
    let {
            projectId: t,
            steps: n,
            active: l = !1,
            turnActive: r = l,
            checklistSuperseded: s = !1,
            durationMs: u,
            interrupted: o = !1,
            todos: c,
            provisionalTodo: d,
            segment: f,
            hostsChecklist: m = !0,
            reportsDuration: h = !0,
            closed: g = !1,
            segmentDurationMs: p,
        } = e,
        x = a.useMemo(() => (0, tU.Jf)(n, l), [n, l]),
        v = a.useMemo(
            () =>
                null == f
                    ? x
                    : {
                          ...x,
                          steps: x.steps.filter((e) => e.segment === f),
                          tasks: x.tasks.filter((e) => e.task.segment === f),
                      },
            [x, f],
        );
    if (o)
        return (0, i.jsx)("ol", {
            className: nt.pj,
            "data-live": !1,
            children: (0, i.jsx)(tX.A, {
                glyph: (0, i.jsx)(rl.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: R.intl.string(T.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = l ? void 0 : (p ?? (h ? (x.turn?.durationMs ?? u) : void 0)),
        b = m ? ((0, tU.lt)(n) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        w = rf(k.map((e) => e.taskId)),
        A = !g && (l || k.some((e) => "running" === e.task.status)),
        N = rv(k);
    return (0, i.jsxs)("ol", {
        className: nt.pj,
        "data-live": A,
        children: [
            (0, i.jsx)(tH.Ay, {
                projectId: t,
                steps: v.steps,
                fallbackLabel: k.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                live: l,
                closed: g,
                durationMs: j,
                connectsDown: k.length > 0,
                tier: x.turn?.tier,
            }),
            k.map((e, n) => {
                let l = null != e.task.helperMark ? rd(e.task.helperMark) : void 0,
                    r = l ?? w.get(e.taskId);
                return null == r
                    ? null
                    : (0, i.jsx)(
                          rj,
                          {
                              projectId: t,
                              lane: e,
                              Illocon: r.Illocon,
                              tint: r.tint,
                              name: null != l && null != e.task.helperName ? e.task.helperName : r.name,
                              connectsDown: n < k.length - 1,
                          },
                          e.taskId,
                      );
            }),
            (0, i.jsx)(rM, { projectId: t, steps: n, tree: x, segment: f }),
            y
                ? (0, i.jsx)("li", {
                      className: nt.YO,
                      children: (0, i.jsx)(t6, { todos: b, provisional: d, agents: N, live: r, superseded: s }),
                  })
                : null,
        ],
    });
}
function ss(e) {
    let {
            projectId: t,
            steps: n,
            content: l,
            proposal: r,
            planVersion: s,
            ideas: u,
            attachments: c,
            secretRequest: d,
            secretRequestId: f,
            secretRequestAwaiting: m,
            secretRequestStatus: h = "open",
            settingsRequest: g,
            settingsAskId: p,
            publishCta: x,
            turnId: j,
            onPickIdea: b,
            pickedIdeaIds: y,
            onApprovePlan: k,
            sideReply: w = !1,
            sideReplyAcknowledges: A,
            hoistedProse: N = !1,
            hoistedAttachmentsHost: S,
            restoreProposal: C,
            onRestoreProposal: I,
            publishScheduleProposal: E,
            publishScheduleProposalCurrent: _ = !1,
        } = e,
        M = a.useMemo(
            () => rr({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != c && c.length > 0 }),
            [n, l, r, c],
        ),
        { streamed: P, lastStreamedMessage: L, showsClosingMessage: $, closingContent: q } = M,
        D = (N ? S : void 0) ?? M.attachmentsHost,
        F = $ && !N,
        O = null == c ? null : (0, i.jsx)(st.A, { projectId: t, attachments: c }),
        G = null == O ? null : (0, i.jsx)("div", { className: nt.MT, children: O }),
        z = w
            ? (0, i.jsx)(v.E, {
                  variant: "body-xs/normal",
                  color: "text-muted",
                  children: (function (e) {
                      switch (e) {
                          case "steered":
                              return R.intl.string(T.default.Mv5OmK);
                          case "queued":
                              return R.intl.string(T.default["Po/2mi"]);
                          case "restarting":
                              return R.intl.string(T.default.Vj0woh);
                          default:
                              return R.intl.string(T.default.gY3L8p);
                      }
                  })(A),
              })
            : null;
    return (0, i.jsxs)("div", {
        className: nt.ue,
        children: [
            P.length > 0 && !N
                ? (0, i.jsx)("ol", {
                      className: nt.dO,
                      children: P.filter((e) => "todos" !== e.type).map((e) =>
                          (0, i.jsxs)(
                              "li",
                              {
                                  className: nt.DV,
                                  children: [
                                      (0, i.jsx)("div", {
                                          className: si.PT,
                                          children: (0, sn.U)(e.content, !0, {
                                              allowList: !0,
                                              allowHeading: !0,
                                              allowLinks: !0,
                                          }),
                                      }),
                                      "streamed" === D && e === L ? G : null,
                                  ],
                              },
                              e.key,
                          ),
                      ),
                  })
                : null,
            null != r
                ? (0, i.jsx)(aw, { projectId: t, proposal: r, version: s, onApprove: k })
                : F
                  ? (0, i.jsxs)("div", {
                        className: o()(nt.ky, sr.XR),
                        children: [
                            (0, i.jsx)("div", {
                                className: o()(si.PT, nt.cW),
                                children: (0, sn.U)(q, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === D ? G : null,
                            z,
                        ],
                    })
                  : null,
            null != d
                ? (0, i.jsx)("div", {
                      className: o()(nt.ky, nt.k1, sr.XR, { [sl.O]: null != m && "open" === h }),
                      children: (0, i.jsx)(se, {
                          projectId: t,
                          cardId: f ?? "",
                          request: d,
                          status: h,
                          awaiting: "open" === h ? m : void 0,
                      }),
                  })
                : null,
            null != g
                ? (0, i.jsx)("div", {
                      className: o()(nt.ky, nt.k1, sr.XR),
                      children: (0, i.jsx)(l3, { projectId: t, request: g, askId: p }),
                  })
                : null,
            "standalone" !== D && ("closing" !== D || F) ? null : O,
            null != x ? (0, i.jsx)(aY, { projectId: t, turnId: j ?? null, cta: x }) : null,
            null != u && u.length > 0 ? (0, i.jsx)(a5, { ideas: u, pickedIdeaIds: y, onPick: b }) : null,
            null != C ? (0, i.jsx)(rR, { proposal: C, onRestore: I }) : null,
            null != E ? (0, i.jsx)(a3, { projectId: t, proposal: E, current: _ }) : null,
            F ? null : z,
        ],
    });
}
var su = n(286251),
    so = n(146806),
    sc = n(475358),
    sd = n(783977),
    sf = n(559647),
    sm = n(787564),
    sh = n(339200),
    sg = n(234320),
    sp = n(191023),
    sx = n(285796),
    sv = n(922329),
    sj = n(153171);
function sb(e) {
    let { projectId: t } = e;
    return (0, i.jsx)(sv.p, {
        name: R.intl.string(T.default.xhFsEP),
        thumb: (0, i.jsxs)("span", {
            className: tg.PA,
            "aria-hidden": !0,
            children: [
                (0, i.jsx)(sp.ImageIcon, { size: "sm", color: "currentColor" }),
                (0, i.jsx)("span", {
                    className: tg.OY,
                    children: (0, i.jsx)(m.PencilIcon, {
                        size: "custom",
                        width: 10,
                        height: 10,
                        color: "currentColor",
                    }),
                }),
            ],
        }),
        subText: (0, i.jsx)(v.E, {
            variant: "body-xs/normal",
            color: "text-muted",
            children: R.intl.string(T.default["9y+Dae"]),
        }),
        children: (0, i.jsx)("button", {
            type: "button",
            className: sj.o1,
            onClick: () => (0, C.xU)(t),
            "aria-label": R.intl.string(T.default.N852dj),
            children: (0, i.jsx)(sx.a, { size: "xs", color: "currentColor" }),
        }),
    });
}
function sy(e) {
    let { send: t } = e;
    return (0, i.jsxs)(sv.p, {
        compact: !0,
        name: R.intl.string(T.default.xhFsEP),
        thumbSrc: t.thumbUrl,
        subText:
            "failed" === t.status
                ? (0, i.jsx)(v.E, {
                      variant: "body-xs/normal",
                      color: "text-feedback-critical",
                      children: R.intl.string(T.default["3PeGo2"]),
                  })
                : null,
        children: [
            "uploading" === t.status ? (0, i.jsx)(j.y, { type: j.t.SPINNING_CIRCLE_SIMPLE, className: sj.Rk }) : null,
            "failed" === t.status
                ? (0, i.jsx)(nL.Q, {
                      variant: "secondary",
                      textVariant: "body-sm/medium",
                      text: R.intl.string(T.default["WFJ/vb"]),
                      onClick: t.retry,
                  })
                : null,
        ],
    });
}
var sk = n(587157),
    sw = n(347111),
    sA = n(120234),
    sN = n(901173),
    sS = n(161431),
    sC = n(46653),
    sI = n(695184),
    sE = n(811091),
    s_ = n(503275),
    sM = n(957071),
    sT = n(927659),
    sR = n(351906),
    sP = n(407653),
    sL = n(322915);
function s$(e) {
    let { id: t, projectId: n, suggestions: l, selectedIndex: r, onHover: a, onSelect: s } = e,
        u = (0, c.bG)([sR.A], () => sR.A.hidePersonalInformation ?? !1),
        o = `${t}-users`,
        d = `${t}-files`;
    if (0 === l.length) return null;
    let f = l.map((e, t) =>
            "user" === e.kind
                ? (0, i.jsx)(
                      sT.Ay.User,
                      {
                          index: t,
                          user: e.user,
                          nick: null,
                          status: null,
                          hidePersonalInformation: u,
                          selected: t === r,
                          onHover: a,
                          onClick: s,
                      },
                      e.user.id,
                  )
                : (0, i.jsx)(
                      sT.Ay.Generic,
                      {
                          index: t,
                          text: e.file.name,
                          icon: (0, i.jsx)(sP.A, { projectId: n, file: e.file, className: sL.Vk }),
                          selected: t === r,
                          onHover: a,
                          onClick: s,
                      },
                      e.file.id,
                  ),
        ),
        m = l.findIndex((e) => "file" === e.kind),
        h = -1 === m ? f : f.slice(0, m),
        g = -1 === m ? [] : f.slice(m);
    return (0, i.jsx)(sT.Ay, {
        id: t,
        className: sL.nx,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, i.jsxs)("div", {
            id: t,
            role: "listbox",
            "aria-label": R.intl.string(T.default.Vb3sUg),
            children: [
                h.length > 0
                    ? (0, i.jsx)(sq, { titleId: o, title: R.intl.string(T.default.Vb3sUg), children: h })
                    : null,
                g.length > 0
                    ? (0, i.jsx)(sq, { titleId: d, title: R.intl.string(T.default.zA5KLM), children: g })
                    : null,
            ],
        }),
    });
}
function sq(e) {
    let { titleId: t, title: n, children: l } = e;
    return (0, i.jsxs)("div", {
        role: "group",
        "aria-labelledby": t,
        children: [
            (0, i.jsx)(v.E, { id: t, variant: "body-xs/semibold", color: "text-muted", className: sL.Gf, children: n }),
            l,
        ],
    });
}
var sD = n(719442),
    sF = n(355622),
    sO = n(408018),
    sG = n(186306),
    sz = n(323350),
    sU = n(35277),
    sB = n(68059),
    sK = n(267102),
    sH = n(259691);
let sV = (0, ip.createChannelRecord)({ id: "1", type: ev.rbe.DM });
function sW(e) {
    let t = sh.VW.end(e, []);
    return { anchor: t, focus: t };
}
function sX(e) {
    return (0, sz.WO)(sh.VW.richValue(e), { mode: "raw" });
}
function sQ(e, t) {
    ((e.children = (0, sO.x7)(t)), (e.selection = sW(e)), e.onChange());
}
function sZ(e) {
    let { attributes: t, children: n, element: l } = e;
    if ("hostInlineVoid" !== l.type) return null;
    let r = new RegExp(l8.$c.source).exec(l.raw)?.[1];
    return null == r
        ? null
        : (0, i.jsxs)("span", { ...t, contentEditable: !1, children: [(0, i.jsx)(sH.A, { attachmentId: r }), n] });
}
var sY = n(497437),
    sJ = n(465410);
let s0 = "body-md/normal",
    s1 = null;
function s2(e) {
    let { text: t, offering: n, typed: l } = e,
        [r, s] = a.useState(t),
        u = a.useRef(null),
        d = a.useRef(null),
        f = a.useRef(0),
        [m, h] = a.useState(0),
        [g, p] = a.useState(0),
        [x, j] = a.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
    (a.useLayoutEffect(() => {
        let e = u.current,
            t = e?.parentElement;
        if (null == e || null == t) return;
        let n = f.current;
        function l() {
            let e = u.current,
                t = e?.parentElement;
            if (null == e || null == t) return;
            let l = d.current;
            if (null == l) return;
            let r = parseFloat(getComputedStyle(t).columnGap),
                i = Number.isNaN(r) ? 0 : r,
                a = e.offsetWidth,
                s = l.offsetWidth + i;
            (p(a + i), h(s));
            let o = s + a,
                c = Math.max(n, l.offsetWidth) + i + a,
                f = 0 === c ? 1 : s / c,
                m = 0 === c ? 1 : o / c;
            j({
                frontFrom: 1e3 * (0, so._R)(f),
                frontTo: 1e3 * (0, so._R)(m),
                backFrom: 1e3 * (0, so.T)(f),
                backTo: 1e3 * (0, so.T)(m),
            });
        }
        let r = new ResizeObserver(l);
        return (l(), r.observe(e), r.observe(t), null != d.current && r.observe(d.current), () => r.disconnect());
    }, [t]),
        a.useEffect(() => {
            f.current = d.current?.offsetWidth ?? 0;
        }, [t]));
    let [b, y] = a.useState(0),
        [k, w] = a.useState(null),
        A = a.useRef(!1),
        N = a.useCallback(() => {
            (w(A.current ? (n ? "through" : "out") : n ? "in" : null), y((e) => e + 1));
        }, [n]);
    a.useEffect(() => {
        A.current = n;
    }, [n, t]);
    let S = "in" === k ? x.backFrom : x.frontFrom,
        C = "out" === k ? x.frontTo : x.backTo,
        I = (0, c.bG)([ik.Ay], () => ik.Ay.useReducedMotion),
        E = t === R.intl.string(T.default.Zc7gML),
        _ = r === t && E;
    function M(e, t, n) {
        let l = null != n;
        return (0, i.jsx)("span", {
            ref: n,
            className: o()(sY.VT, { [sY.qk]: l }),
            style: l
                ? {
                      insetInlineStart: m,
                      "--custom-cap-wipe-delay": `${S}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, C - S)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": l && b > 0 && null != k ? b % 2 : void 0,
            "data-wipe-kind": l ? (k ?? void 0) : void 0,
            children: (0, i.jsx)(sc.e, { shortcut: "tab", className: sY.xT, keyClassName: e }),
        });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(su.o, {
                text: t,
                variant: s0,
                delay: null,
                duration: 1e3,
                trailingWidth: g,
                className: o()(sY.xM, { [sY.s2]: l }),
                onStart: N,
                onComplete: () => s(t),
            }),
            M(sY.IS, n || (!I && "out" === k), u),
            (0, i.jsx)("span", {
                ref: d,
                className: sY.QI,
                "aria-hidden": !0,
                children: (0, i.jsx)(v.E, { variant: s0, tag: "span", children: t }),
            }),
            _
                ? (0, i.jsxs)("span", {
                      className: sY.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, i.jsx)(v.E, { variant: s0, tag: "span", className: sY.xM, children: t }),
                          M(sY.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let s3 = a.memo(function (e) {
        let {
                projectId: t,
                canSend: n,
                inputLocked: l = !1,
                aiPaused: r = !1,
                running: s,
                restoring: u = !1,
                onSend: d,
                onInterrupt: f,
                escapeScopeRef: m,
                onUploadFile: h,
                onApprove: g,
                onImport: p,
                onSendToOtherProjects: x,
                suggestion: v,
                questionOpen: j = !1,
                hasPendingContext: b = !1,
                onDraftHasTextChange: y,
                modelSettings: k,
                onModelSettingsChange: w,
                visible: A = !0,
            } = e,
            N = n && !l && !r,
            S = (function (e) {
                let t = a.useContext(sK.Ay),
                    [n] = a.useState(() => {
                        let n = (0, sD.ie)();
                        return (
                            (n.children = (0, sO.x7)(e)),
                            (n.selection = sW(n)),
                            (0, sB.a)({
                                editor: n,
                                chatInputType: sF.oU.GENERIC_RICH_TEXTAREA,
                                channel: sV,
                                windowContext: t,
                                previewMarkdown: !0,
                                updateState: (e, t, n) => {
                                    let { value: l, selection: r } = n;
                                    (void 0 !== l && (e.children = l), null != r && (e.selection = r), e.onChange());
                                },
                            }),
                            (function (e) {
                                let { onChange: t } = e;
                                e.onChange = () => {
                                    let n = [];
                                    for (let [t, l] of sh.VW.nodes(e, { at: [], match: sh.l5.isText }))
                                        for (let e of t.text.matchAll(l8.$c)) {
                                            let t = e.index ?? 0;
                                            n.push({ raw: e[0], path: l, start: t, end: t + e[0].length });
                                        }
                                    (n.length > 0 &&
                                        sG.o.withMergedEntry(e, () =>
                                            sh.VW.withoutNormalizing(e, () => {
                                                for (let { raw: t, path: l, start: r, end: i } of n.reverse())
                                                    sU.b.textToVoid(
                                                        e,
                                                        { type: "hostInlineVoid", raw: t, children: [{ text: "" }] },
                                                        {
                                                            anchor: { path: l, offset: r },
                                                            focus: { path: l, offset: i },
                                                        },
                                                    );
                                            }),
                                        ),
                                        t());
                                };
                            })(n),
                            n
                        );
                    });
                return (a.useLayoutEffect(() => n.onChange(), [n]), n);
            })(rt.A.getDraft(t)),
            [I, E] = a.useState(() => sX(S));
        (0, sA.N$)(I);
        let _ = a.useRef(I),
            [M, P] = a.useState(null),
            L = a.useCallback(() => {
                let e = sX(S);
                (e !== _.current && ((_.current = e), (0, sw.I)(t, e), E(e)),
                    P(
                        (function (e) {
                            let { selection: t } = e;
                            if (null == t || !sh.ZF.isCollapsed(t)) return null;
                            let [n] = sh.VW.node(e, t.anchor.path);
                            return sh.l5.isText(n) ? n.text.slice(0, t.anchor.offset) : null;
                        })(S),
                    ));
            }, [S, t]),
            $ = a.useCallback((e) => sQ(S, e), [S]),
            q = "" !== I.trim();
        a.useEffect(() => y?.(q), [q, y]);
        let D = a.useRef(t);
        a.useLayoutEffect(() => {
            D.current !== t && ((D.current = t), sQ(S, rt.A.getDraft(t)));
        }, [S, t]);
        let F = (0, c.bG)([ik.Ay], () => ik.Ay.isSubmitButtonEnabled),
            [O, z] = a.useState(!1);
        a.useEffect(() => {
            s || z(!1);
        }, [s]);
        let {
                drafts: U,
                addFiles: B,
                pasteFiles: K,
                removeDraft: H,
                settled: V,
                takeRefs: W,
            } = (0, e4.FM)({ projectId: t, surface: "chat", onUploadFile: h }),
            X = (0, C.fc)(t),
            Q = (0, C.bE)(t),
            Z = a.useRef(Q);
        a.useEffect(() => {
            let e = Z.current;
            ((Z.current = Q), N && null != e && null != Q && Q !== e && sh.VW.focus(S));
        }, [Q, N, S]);
        let Y = "" !== I.trim() || U.length > 0 || b || X,
            J = N && Y && V,
            [et, en] = a.useState(null);
        a.useEffect(() => {
            if (null == et) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => en(null));
                });
            return () => {
                (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
            };
        }, [et]);
        let el = (0, sS.rU)(t),
            [er, ei] = a.useState(null),
            [ea, es] = a.useState(0),
            eu = a.useMemo(() => (null != M && N ? (0, sN.OG)(M, M.length) : null), [M, N]),
            eo = eu?.start ?? null;
        a.useEffect(() => {
            null == eo ? ei(null) : (0, sS.IP)(t);
        }, [eo, t]);
        let ec = eo === er ? null : eu,
            ed = (function (e, t) {
                let n,
                    l,
                    r,
                    i,
                    s,
                    u = (0, c.bG)([eT.Ay], () => eT.Ay.getProject(e), [e]),
                    { creator: o, collaborators: d } =
                        ((n = u?.id),
                        (l = u?.owner_user_id),
                        (r = (0, c.yK)(
                            [lE.A],
                            () =>
                                null == n
                                    ? []
                                    : [
                                          ...new Set(
                                              lE.A.getMessages(n)
                                                  .flatMap((e) =>
                                                      null != e.user_id && e.user_id !== l ? [e.user_id] : [],
                                                  )
                                                  .reverse(),
                                          ),
                                      ],
                            [n, l],
                        )),
                        a.useEffect(() => {
                            null != l && ((0, s_.Y_)(l), r.forEach(s_.Y_));
                        }, [l, r]),
                        (i = (0, c.bG)([nw.default], () => (null == l ? null : nw.default.getUser(l)), [l])),
                        (s = (0, c.yK)(
                            [nw.default],
                            () => r.map((e) => nw.default.getUser(e)).filter((e) => null != e),
                            [r],
                        )),
                        a.useMemo(() => ({ creator: i ?? null, collaborators: s }), [i, s])),
                    f = (0, c.bG)([sC.default], () => sC.default.getId()),
                    m = null != u && (0, ee.pL)(u) ? u.guild_id : void 0,
                    h = t?.toLowerCase() ?? null;
                return (
                    a.useEffect(() => {
                        null != m && null != h && sI.A.requestMembers(m, h, 100);
                    }, [m, h]),
                    (0, c.yK)(
                        [n0.Ay, n1.A, nw.default],
                        () => {
                            if (null == h) return [];
                            let e = null != m ? n1.A.getGuild(m) : null,
                                t = (t) => (0, sN.mO)(t, h, null != e ? n0.Ay.getNick(e.id, t.id) : null),
                                n = new Set(u?.collaborator_role_ids ?? []),
                                l = null != e && n.has(sE.default.castGuildIdAsEveryoneGuildRoleId(e.id)),
                                r =
                                    null == e
                                        ? []
                                        : n0.Ay.getMemberIds(e.id)
                                              .map((e) => nw.default.getUser(e))
                                              .filter(
                                                  (r) =>
                                                      null != r &&
                                                      t(r) &&
                                                      (l ||
                                                          (n0.Ay.getMember(e.id, r.id)?.roles ?? []).some((e) =>
                                                              n.has(e),
                                                          ) ||
                                                          n2.$3({
                                                              permission: ev.xBc.MANAGE_GUILD,
                                                              user: r,
                                                              context: e,
                                                          })),
                                              ),
                                i = new Set();
                            return [...[...(null != o ? [o] : []), ...d].filter(t), ...r].filter(
                                (e) => !(e.id === f || e.bot || i.has(e.id)) && (i.add(e.id), !0),
                            );
                        },
                        [u, m, h, o, d, f],
                    )
                );
            })(t, ec?.text ?? null),
            ef = a.useMemo(() => (null == ec ? [] : (0, sN.l$)(ed, el, ec.text)), [ec, ed, el]),
            em = ec?.text;
        a.useEffect(() => es(0), [em]);
        let eh = ef.length > 0,
            eg = Math.min(ea, Math.max(0, ef.length - 1)),
            ep = a.useId(),
            ex = a.useCallback(
                (e) => {
                    let t = ef[e];
                    null != ec &&
                        null != t &&
                        (function (e, t, n) {
                            let { selection: l } = e;
                            if (null == l) return;
                            let { path: r, offset: i } = l.anchor;
                            (sU.b.select(e, { anchor: { path: r, offset: t }, focus: { path: r, offset: i } }),
                                sU.b.insertText(e, `${n} `));
                        })(S, ec.start, "user" === t.kind ? `<@${t.user.id}>` : `<file:${t.file.id}>`);
                },
                [ef, ec, S],
            ),
            ej = a.useCallback(() => {
                if (!J) return;
                let e = W(),
                    n = X
                        ? (function (e) {
                              let t = (0, C.K7)(e);
                              if (null == t || !(0, ni.C)(t)) return null;
                              let n = t.history.present,
                                  l = t.keptStill ?? (0, C.C)(e);
                              return (
                                  (0, C.My)(e),
                                  function (t) {
                                      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                          { nonce: i, messageKey: a } = (0, eO.Wx)(e, t, r),
                                          s = { projectId: e, nonce: i, job: null, thumbUrl: null };
                                      (na.set(a, s),
                                          (s.job = (0, ni.B)({
                                              capture: (t) => (0 === t ? l : (0, C.C)(e)),
                                              composite: (e) =>
                                                  (async function (e, t) {
                                                      let n = await createImageBitmap(e);
                                                      try {
                                                          let e = { width: n.width, height: n.height },
                                                              l = tT(e),
                                                              r = tT(e);
                                                          if (null == l || null == r) return null;
                                                          return (
                                                              tM(r.ctx, t, e),
                                                              l.ctx.drawImage(n, 0, 0),
                                                              l.ctx.drawImage(r.canvas, 0, 0),
                                                              await l.toBlob()
                                                          );
                                                      } finally {
                                                          n.close();
                                                      }
                                                  })(e, n),
                                              upload: (t) =>
                                                  (0, e0.vX)(e, new File([t], "sketch.webp", { type: t.type })),
                                              isStaged: (t) => (0, e0.n6)(e, t.id),
                                              send: (n) => (0, eO.dv)(e, t, [...r, n], { nonce: i }),
                                              update: (e, t) => {
                                                  (null != t &&
                                                      null == s.thumbUrl &&
                                                      (s.thumbUrl = URL.createObjectURL(t)),
                                                      nu(a, {
                                                          status: e,
                                                          thumbUrl: s.thumbUrl,
                                                          retry: () => s.job?.retry(),
                                                      }),
                                                      "sent" === e &&
                                                          (na.delete(a),
                                                          window.setTimeout(() => {
                                                              (nu(a, null),
                                                                  null != s.thumbUrl &&
                                                                      URL.revokeObjectURL(s.thumbUrl));
                                                          }, 6e4)));
                                              },
                                          })));
                                  }
                              );
                          })(t)
                        : null;
                d(I, e.length > 0 ? e : void 0, n ?? void 0);
                let l = (function (e, t, n) {
                    let l,
                        r,
                        i = n.split("\n", 1)[0] ?? "";
                    if (null == e || "" === i) return i;
                    null == s1 && (s1 = document.createElement("canvas").getContext("2d"));
                    let a = s1;
                    if (null == a) return i;
                    let s = getComputedStyle(e);
                    a.font = "" !== s.font ? s.font : `${s.fontWeight} ${s.fontSize} ${s.fontFamily}`;
                    let u =
                        t > 0
                            ? t
                            : ((l = parseFloat(s.paddingInlineStart)),
                              (r = parseFloat(s.paddingInlineEnd)),
                              e.clientWidth - (Number.isNaN(l) ? 0 : l) - (Number.isNaN(r) ? 0 : r));
                    if (u <= 0 || a.measureText(i).width <= u) return i;
                    let o = 0,
                        c = i.length;
                    for (; o < c;) {
                        let e = Math.ceil((o + c) / 2);
                        a.measureText(i.slice(0, e)).width <= u ? (o = e) : (c = e - 1);
                    }
                    let d = i.slice(0, o),
                        f = d.lastIndexOf(" ");
                    return (f > 0 ? d.slice(0, f) : d).trimEnd();
                })(s7(eN.current), eL.current, (0, sN.Lj)(I));
                ("" !== l && en(l), $(""), ei(null));
            }, [J, X, t, I, d, W, $]),
            eb = a.useCallback(
                (e) => {
                    (e.preventDefault(), ej());
                },
                [ej],
            ),
            ey = a.useCallback(() => {
                null == f || O || (z(!0), f());
            }, [f, O]);
        !(function (e) {
            let { active: t, projectId: n, scopeRef: l, onEscape: r } = e,
                i = a.useRef(r);
            (a.useEffect(() => {
                i.current = r;
            }),
                a.useEffect(() => {
                    if (t)
                        return (
                            window.addEventListener("keydown", e, !0),
                            () => window.removeEventListener("keydown", e, !0)
                        );
                    function e(e) {
                        var t, r;
                        "Escape" === e.key &&
                            !e.isComposing &&
                            (0, C.K7)(n)?.active !== !0 &&
                            !(0, G._c)(n).active &&
                            ((t = e.target),
                            (r = l?.current),
                            (!(0, eY.vq)(t) ||
                                t === document.body ||
                                t === document.documentElement ||
                                (null != r &&
                                    r.contains(t) &&
                                    null == t.closest('input, textarea, [contenteditable="true"]'))) &&
                                (e.preventDefault(), e.stopPropagation(), i.current()));
                    }
                }, [t, n, l]));
        })({ active: s && null != f, projectId: t, scopeRef: m, onEscape: ey });
        let ek = null == v || "" !== I || !N || u || b ? null : v,
            ew = a.useCallback(
                (e) => {
                    if (eh && !e.shiftKey && !e.metaKey && !e.ctrlKey && !e.altKey) {
                        let t = ef.length;
                        if ("ArrowDown" === e.key || "ArrowUp" === e.key) {
                            (e.preventDefault(), es((eg + ("ArrowDown" === e.key ? 1 : t - 1)) % t));
                            return;
                        }
                        if ("Enter" === e.key || "Tab" === e.key) {
                            (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), ex(eg));
                            return;
                        }
                        if ("Escape" === e.key) {
                            (e.preventDefault(), e.stopPropagation(), ei(ec?.start ?? null));
                            return;
                        }
                    }
                    if ("Escape" === e.key && (0, C.K7)(t)?.active === !0) {
                        (e.preventDefault(), e.stopPropagation(), (0, C.V9)(t));
                        return;
                    }
                    if ("Escape" === e.key && s && null != f) {
                        (e.preventDefault(), e.stopPropagation(), ey());
                        return;
                    }
                    if ("Tab" === e.key && !e.shiftKey && null != ek) {
                        (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), $(ek));
                        return;
                    }
                    if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                        null != g && (e.preventDefault(), g());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), ej());
                },
                [ej, g, s, f, ey, ek, $, eh, ef.length, eg, ex, ec, t],
            ),
            eA = a.useCallback(
                (e) => {
                    N && K(e);
                },
                [N, K],
            );
        (0, sg.Vo)({
            event: ev.jej.GLOBAL_CLIPBOARD_PASTE,
            handler: (e) => {
                let { event: t } = e;
                return eA(t);
            },
        });
        let eN = a.useRef(null),
            eS = a.useCallback(() => {
                let e = _.current;
                x?.((0, sN.Lj)(e), () => {
                    _.current === e && $("");
                });
            }, [x, $]),
            [eC, eI] = a.useState(0),
            [eE, e_] = a.useState(!1);
        a.useEffect(() => {
            if (0 === I.length) return void e_(!1);
            let e = s7(eN.current);
            if (null != e) {
                let t = (function (e) {
                    let t = e.ownerDocument.getSelection(),
                        n = e.closest("form");
                    if (null == n || null == t || 0 === t.rangeCount || !e.contains(t.anchorNode)) return null;
                    let l = t.getRangeAt(0).getBoundingClientRect();
                    return 0 === l.height ? null : l.left - n.getBoundingClientRect().left;
                })(e);
                null != t && eI(t);
            }
            e_(!0);
            let t = setTimeout(() => e_(!1), s4);
            return () => clearTimeout(t);
        }, [I]);
        let eM = a.useMemo(() => ({ "--custom-glow-x": `${eC}px` }), [eC]),
            eR = eE ? ` ${sY.EB}` : "",
            eP = u
                ? R.intl.string(T.default.qqlUiW)
                : r
                  ? R.intl.string(T.default.Z0hyNL)
                  : l
                    ? R.intl.string(T.default.GcFRaY)
                    : N
                      ? b
                          ? R.intl.string(T.default.knUjL3)
                          : X
                            ? R.intl.string(T.default["6rXxwa"])
                            : j
                              ? R.intl.string(T.default.IevBEw)
                              : R.intl.string(s ? T.default["0BJa/0"] : T.default.TEeU7z)
                      : R.intl.string(T.default.zZ9NgM),
            eL = a.useRef(0),
            e$ = a.useRef(null),
            eq = a.useCallback((e) => {
                if ((e$.current?.disconnect(), null == e)) return;
                eL.current = e.clientWidth;
                let t = new ResizeObserver(() => {
                    eL.current = e.clientWidth;
                });
                (t.observe(e), (e$.current = t));
            }, []),
            eD = a.useId(),
            eF = a.useId(),
            eG = null != ek,
            ez = et ?? ek ?? eP,
            eU = "" === I && "" !== ez;
        return (0, i.jsxs)("form", {
            onSubmit: eb,
            className: sY.DA,
            children: [
                eh
                    ? (0, i.jsx)(s$, {
                          id: ep,
                          projectId: t,
                          suggestions: ef,
                          selectedIndex: eg,
                          onHover: es,
                          onSelect: ex,
                      })
                    : null,
                U.length > 0 || X
                    ? (0, i.jsxs)("div", {
                          className: sY.lN,
                          children: [
                              U.map((e) => (0, i.jsx)(e4.Nl, { draft: e, onRemove: H }, e.localId)),
                              X ? (0, i.jsx)(sb, { projectId: t }) : null,
                          ],
                      })
                    : null,
                (0, i.jsx)("span", { className: `${sY.wg} ${sY.LP}${eR}`, style: eM, "aria-hidden": !0 }),
                (0, i.jsx)("span", { className: `${sY.wg} ${sY.L3}${eR}`, style: eM, "aria-hidden": !0 }),
                (0, i.jsxs)("div", {
                    className: sY.VA,
                    ref: eN,
                    children: [
                        (0, i.jsx)(sM.A, {
                            navId: "conjure-composer-attach",
                            disabled: !N,
                            buttonClassName: `${sY.Y0} ${sY.nu}`,
                            iconClassName: sY.Qu,
                            onAddFiles: B,
                            onImport: p,
                            onSendToOtherProjects: null != x ? eS : void 0,
                        }),
                        eU
                            ? (0, i.jsx)("div", {
                                  ref: eq,
                                  className: sY.ar,
                                  "aria-hidden": "true",
                                  children: (0, i.jsx)(
                                      s2,
                                      { text: ez, offering: eG && null == et, typed: null != et },
                                      A ? "visible" : "hidden",
                                  ),
                              })
                            : null,
                        (0, i.jsx)(tZ.A, { id: eF, children: R.intl.string(T.default.ldNl9x) }),
                        (0, i.jsx)(l8.Fu.Provider, {
                            value: t,
                            children: (0, i.jsx)(sm.A, {
                                editor: S,
                                containerClassName: o()(sY.sq, sJ.dv),
                                className: sY.jp,
                                readOnly: !N,
                                canFocus: N,
                                onChange: L,
                                onBlur: () => P(null),
                                onKeyDown: ew,
                                onPaste: eA,
                                renderExtraElement: sZ,
                                "aria-labelledby": eF,
                                "aria-describedby": eU ? eD : void 0,
                                "aria-autocomplete": "list",
                                "aria-haspopup": "listbox",
                                "aria-expanded": eh,
                                "aria-controls": eh ? ep : void 0,
                                "aria-activedescendant": eh ? ((0, sT.aI)(eg) ?? void 0) : void 0,
                            }),
                        }),
                        eU ? (0, i.jsx)(tZ.A, { id: eD, children: eP }) : null,
                        (0, i.jsx)("div", {
                            className: sY.Sz,
                            children:
                                s && null != f
                                    ? (0, i.jsx)(e1.m, {
                                          text: R.intl.string(T.default.wiguT0),
                                          ariaHidden: !0,
                                          children: (0, i.jsx)("button", {
                                              type: "button",
                                              className: `${sY.Y0} ${sY.$E}`,
                                              disabled: O,
                                              onClick: ey,
                                              "aria-label": R.intl.string(T.default.wiguT0),
                                              children: (0, i.jsx)(rl.w, {
                                                  size: "custom",
                                                  width: 20,
                                                  height: 20,
                                                  color: "currentColor",
                                              }),
                                          }),
                                      })
                                    : k?.tierSettings != null && null != w
                                      ? (0, i.jsx)(sk.A, {
                                            settings: k.tierSettings,
                                            tiers: k.tiers,
                                            choices: k.choices,
                                            disabled: !N,
                                            onChange: w,
                                            className: `${sY.Y0} ${sY.$E}`,
                                            icon: (0, i.jsx)(sd.R, {
                                                size: "custom",
                                                width: 20,
                                                height: 20,
                                                color: "currentColor",
                                            }),
                                        })
                                      : null,
                        }),
                        F
                            ? (0, i.jsxs)("div", {
                                  className: sY.fF,
                                  children: [
                                      (0, i.jsx)("div", { className: sY.MT }),
                                      (0, i.jsx)("button", {
                                          type: "submit",
                                          className: sY.rt,
                                          disabled: !J,
                                          "aria-label": R.intl.string(T.default.rxW2cl),
                                          children: (0, i.jsx)(sf.SendMessageIcon, {
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
    }),
    s4 = 1500;
function s7(e) {
    return e?.querySelector("[data-slate-editor]") ?? null;
}
var s5 = n(709753),
    s9 = n(540338);
function s8(e) {
    if (e.at(-1)?.role !== "assistant") return null;
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if ("assistant" === n.role) {
            if (!(0, tB.BL)(n) || "plan_implemented" === n.kind) return null;
            if (null != n.proposal) return n.render_id;
        }
    }
    return null;
}
var s6 = n(986109);
let ue = a.createContext(null);
function ut(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: r,
            highlighted: s = !1,
            continuation: u = !1,
            onContextMenu: c,
        } = e,
        d = a.useContext(ue),
        [f, m] = a.useState(() => ik.Ay.useReducedMotion || (null != l && d?.current.has(l) === !0)),
        h = a.useCallback((e) => {
            e.target === e.currentTarget && m(!0);
        }, []);
    return (0, i.jsx)("li", {
        onContextMenu: c,
        onAnimationEnd: f ? void 0 : h,
        "data-conjure-entrance": !0,
        "data-role": t,
        "data-conjure-message": r,
        "data-conjure-row-key": l,
        className: o()(s6.xk, { [s6.g5]: f, [s6.Qo]: s, [s6.q3]: u }),
        children: n,
    });
}
let un = new Map();
function ul(e, t, n) {
    let l = 0;
    for (let r = e.length - 1; r >= 0 && e[r].created_at > t; r--) {
        let t = e[r];
        "user" === t.role && (null == t.user_id || t.user_id === n) && l++;
    }
    return l;
}
let ur = "live_behind",
    ui = "conjureTipDismissals",
    ua = new Set(),
    us = new Set(),
    uu = 0;
function uo() {
    let e = aR.w.get(ui);
    return { forever: e?.forever ?? [], app: e?.app ?? {}, anchor: e?.anchor ?? {} };
}
function uc(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    switch (e.dismissal) {
        case void 0:
            return !1;
        case "session":
            var l;
            return ua.has(((l = e.id), `${t}:${l}`));
        case "anchor":
            return null != n && uo().anchor[t]?.[e.id] === n;
        case "app":
            return uo().app[t]?.includes(e.id) === !0;
        case "forever":
            return uo().forever.includes(e.id);
    }
}
function ud(e) {
    return (us.add(e), () => us.delete(e));
}
function uf(e, t) {
    let n = t?.type === "remixed" ? t.settings_keys : void 0;
    return (0, c.bG)([lG.A], () => null != n && n.length > 0 && lB({ keys: n }, lG.A.getSettings(e)), [n, e]) &&
        null != n
        ? { keys: n, note: R.intl.string(T.default.F2yVHg) }
        : null;
}
function um(e) {
    return (
        null != e.awaitingUser ||
        null != e.secretRequest ||
        null != e.settingsRequest ||
        (e.intake?.questions.length ?? 0) > 0 ||
        null != e.clarification ||
        null != e.appBuildRequest ||
        null != e.restoreProposal ||
        null != e.publishScheduleProposal
    );
}
let uh = [12e4];
var ug = n(292771);
function up(e) {
    let { presentation: t, render: n } = e,
        l = (0, c.bG)([ik.Ay], () => ik.Ay.useReducedMotion),
        [r, s] = a.useState([{ presentation: t, leaving: !1 }]),
        u = r.find((e) => !e.leaving)?.presentation;
    u !== t &&
        s([
            ...r.filter((e) => e.presentation !== t).map((e) => ({ ...e, leaving: !0 })),
            { presentation: t, leaving: !1 },
        ]);
    let d = a.useRef(null),
        f = a.useRef(null),
        m = a.useRef(null),
        h = a.useRef(u);
    a.useLayoutEffect(() => {
        let e,
            t,
            n = d.current;
        if (null == n) return;
        let r = n.querySelector('[data-tip-layer="active"]'),
            i = r?.querySelector("[data-conjure-tip-icon]"),
            a = f.current,
            s = m.current,
            o = r?.offsetHeight ?? 0,
            c =
                null != i
                    ? ((e = n.getBoundingClientRect()),
                      { left: (t = i.getBoundingClientRect()).left - e.left, top: t.top - e.top, width: t.width })
                    : null;
        ((f.current = c), (m.current = o));
        let g = h.current !== u;
        if (((h.current = u), !g || l || null == s || null == a || null == i || null == c)) return;
        let p = a.width / Math.max(1, c.width);
        (i.animate(
            [
                {
                    transform: `translate(${a.left - c.left}px, ${a.top - c.top}px) scale(${p})`,
                    transformOrigin: "top left",
                },
                { transform: "none", transformOrigin: "top left" },
            ],
            { duration: 260, easing: "cubic-bezier(0.2, 0, 0, 1)" },
        ),
            n.animate([{ height: `${s}px` }, { height: `${o}px` }], {
                duration: 260,
                easing: "cubic-bezier(0.2, 0, 0, 1)",
            }));
    });
    let g = r.some((e) => e.leaving);
    return (
        a.useEffect(() => {
            if (!g) return;
            let e = setTimeout(() => s((e) => e.filter((e) => !e.leaving)), 260);
            return () => clearTimeout(e);
        }, [g, r]),
        (0, i.jsx)("div", {
            ref: d,
            className: ug.wg,
            children: r.map((e) =>
                (0, i.jsx)(
                    "div",
                    {
                        "data-tip-layer": e.leaving ? "leaving" : "active",
                        "aria-hidden": e.leaving || void 0,
                        className: o()(ug.qd, e.leaving ? ug.dv : ug.Hu),
                        children: n(e.presentation),
                    },
                    e.presentation,
                ),
            ),
        })
    );
}
function ux(e) {
    return null != e && !e.publishing && "review_permissions" === e.action;
}
var uv = n(247171);
function uj(e) {
    let { icon: t, tone: n, firstLine: l, className: r, children: a } = e;
    return (0, i.jsxs)("div", {
        className: o()(uv.row, r),
        children: [
            (0, i.jsx)(v.E, {
                tag: "span",
                variant: l,
                color: "none",
                className: o()(uv.gutter, uv[n]),
                "aria-hidden": !0,
                children: (0, i.jsx)(t, { size: "sm", color: "currentColor", "data-conjure-tip-icon": !0 }),
            }),
            (0, i.jsx)("div", { className: uv.content, children: a }),
        ],
    });
}
var ub = n(830205);
function uy(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, i.jsx)(uj, {
        icon: t,
        tone: "muted",
        firstLine: "body-sm/normal",
        className: ub.aK,
        children: (0, i.jsxs)("div", {
            className: ub.n8,
            children: [
                (0, i.jsx)(v.E, {
                    tag: "div",
                    variant: "body-sm/normal",
                    color: "text-muted",
                    className: ub.Qq,
                    children: l,
                }),
                null != n
                    ? (0, i.jsx)("div", {
                          className: ub.X8,
                          children: (0, i.jsx)(e1.m, {
                              text: R.intl.string(R.t.WAI6xu),
                              asContainer: !0,
                              children: (0, i.jsx)(tn.K, {
                                  "aria-label": R.intl.string(R.t.WAI6xu),
                                  icon: eW.P,
                                  variant: "icon-only",
                                  size: "sm",
                                  onClick: n,
                              }),
                          }),
                      })
                    : null,
            ],
        }),
    });
}
function uk(e) {
    let { projectId: t } = e,
        n = a.useContext(eU.bI);
    return (0, i.jsx)(uy, {
        icon: ae.ShieldIcon,
        children: R.intl.format(T.default["0S9HY8"], {
            onReview: async () => {
                null != n && (await (0, eU.vL)(t, n.guildId));
            },
        }),
    });
}
var uw = n(443865),
    uA = n(716502);
function uN(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, i.jsx)(uj, {
        icon: t,
        tone: "brand",
        firstLine: "body-md/semibold",
        className: uA.Nr,
        children: (0, i.jsxs)("section", {
            className: uA.Qs,
            children: [
                l,
                null != n
                    ? (0, i.jsx)("div", {
                          className: uA.X8,
                          children: (0, i.jsx)(e1.m, {
                              text: R.intl.string(R.t.WAI6xu),
                              asContainer: !0,
                              children: (0, i.jsx)(tn.K, {
                                  "aria-label": R.intl.string(R.t.WAI6xu),
                                  icon: eW.P,
                                  variant: "icon-only",
                                  size: "sm",
                                  onClick: n,
                              }),
                          }),
                      })
                    : null,
            ],
        }),
    });
}
function uS(e) {
    let { children: t } = e;
    return (0, i.jsx)(v.E, {
        tag: "div",
        variant: "body-md/semibold",
        color: "text-strong",
        className: uA.DD,
        children: t,
    });
}
function uC(e) {
    let { children: t } = e;
    return (0, i.jsx)(v.E, {
        tag: "div",
        variant: "body-sm/normal",
        color: "text-muted",
        className: uA.rf,
        children: t,
    });
}
function uI(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: uA.o1, children: t });
}
var uE = n(95635);
function u_(e) {
    let { projectId: t, publish: n, onDismiss: l } = e,
        r = (0, eK.A)(t, n);
    return (0, i.jsx)(uy, {
        icon: uE.UploadIcon,
        onDismiss: l,
        children: R.intl.format(T.default.fWfeZ8, { onPublish: () => r("outdated_notice") }),
    });
}
let uM = [
    {
        id: "bot_permissions",
        priority: 3,
        resolve: function (e) {
            let { turn: t, publish: n } = e;
            return null != t && ux(n) ? "hint" : null;
        },
        render: (e, t) => {
            let {
                context: { projectId: n },
            } = t;
            return (0, i.jsx)(uk, { projectId: n });
        },
    },
    {
        id: ur,
        priority: 2,
        resolve: function (e) {
            var t;
            let { turn: n, publish: l, draftHasText: r, idleMs: i } = e;
            return null == n ||
                r ||
                null == l ||
                l.publishing ||
                !l.isUpdate ||
                null != l.disabledReason ||
                i < 12e4 ||
                (null != n.publishCta && aI(l, n.publishCta))
                ? null
                : null != (t = e.messagesSinceShown(ur)) && t > 0 && t < 10
                  ? null
                  : "hint";
        },
        dismissal: "session",
        render: (e, t) => {
            let {
                context: { projectId: n, publish: l },
                dismiss: r,
            } = t;
            return null != l ? (0, i.jsx)(u_, { projectId: n, publish: l, onDismiss: r }) : null;
        },
    },
    {
        id: "ideas_intro",
        priority: 1,
        resolve: function (e) {
            let { turn: t, agentIdle: n, publish: l, justRemixed: r, noTurnsYet: i, ideasIntroAnchorId: a } = e;
            return !n || null == a || ux(l) ? null : null != t || r || i ? "card" : null;
        },
        dismissal: "anchor",
        render: (e, t) => {
            let {
                context: { onAskForIdeas: n },
                dismiss: l,
            } = t;
            return (0, i.jsxs)(uN, {
                icon: uw.LightbulbIcon,
                onDismiss: l,
                children: [
                    (0, i.jsx)(uS, { children: R.intl.string(T.default.OJlbhX) }),
                    (0, i.jsx)(uC, { children: R.intl.string(T.default["3vJBni"]) }),
                    (0, i.jsx)(uI, {
                        children: (0, i.jsx)(d.$, {
                            variant: "primary",
                            size: "sm",
                            text: R.intl.string(T.default["U/bLzU"]),
                            disabled: null == n,
                            onClick: () => {
                                (l?.(), n?.());
                            },
                        }),
                    }),
                ],
            });
        },
    },
];
var uT = n(817921);
function uR(e) {
    let { projectId: t, messages: n, draftHasText: l, onAskForIdeas: r } = e,
        s = (function (e, t, n, l, r) {
            let i = (function (e, t, n, l, r) {
                let i,
                    s = (0, eU.Ay)(e),
                    u = (0, c.bG)([nw.default], () => nw.default.getCurrentUser()?.id),
                    o = t.at(-1),
                    d = null != o ? Math.max(o.created_at, o.finished_at ?? 0, o.settled_at ?? 0) : null,
                    f = (function (e, t) {
                        let [n, l] = a.useState(() => Date.now());
                        return (
                            a.useEffect(() => {
                                if (null == e) return;
                                let r = (function (e, t, n, l) {
                                    let r = t.map((t) => e + t);
                                    if (r.some((e) => e > n && e <= l)) return 0;
                                    let i = r.filter((e) => e > l);
                                    return i.length > 0 ? Math.min(...i) - l : null;
                                })(e, t, n, Date.now());
                                if (null == r) return;
                                let i = setTimeout(() => l(Date.now()), r);
                                return () => clearTimeout(i);
                            }, [e, t, n]),
                            n
                        );
                    })(d, r),
                    m = (function (e) {
                        for (let t = e.length - 1; t >= 0; t--) {
                            let n = e[t];
                            if (
                                "publish_notice" !== n.kind &&
                                "project_event" !== n.kind &&
                                "context_boundary" !== n.kind
                            ) {
                                if ("user" === n.role) return null;
                                if ((0, tB.BL)(n)) return n;
                                if (!(0, tB.B0)(e, t)) break;
                            }
                        }
                        return null;
                    })(t),
                    h = null == m || um(m) ? null : m,
                    g = (function (e) {
                        for (let t = e.length - 1; t >= 0; t--) {
                            let n = e[t];
                            if ("publish_notice" === n.kind && n.publishNotice?.commands_failed !== !0) return n;
                        }
                        return null;
                    })(t),
                    p = g?.publishNotice?.update === !1 && 0 === ul(t, g.created_at, u) ? g.id : null,
                    x = o?.projectEvent?.type === "remixed" ? o.projectEvent : null,
                    v = x?.id ?? p,
                    j = uf(e, x),
                    b = x?.settings_keys?.length ?? 0,
                    y = (0, c.bG)([lG.A], () => b > 0 && null == lG.A.getSettings(e), [b, e]),
                    k = (0, s5.WT)(e);
                return {
                    projectId: e,
                    turn: h,
                    publish: s,
                    draftHasText: n,
                    agentIdle:
                        (null == (i = (0, tB.Ji)(t)) || !!(0, tB.B0)(t, t.lastIndexOf(i))) &&
                        (null == m || !um(m)) &&
                        null == s8(t) &&
                        null == j &&
                        !y &&
                        0 === k.length,
                    idleMs: null != d ? Math.max(0, f - d) : 0,
                    justRemixed: null != x,
                    noTurnsYet: t.every(
                        (e) =>
                            "publish_notice" === e.kind || "project_event" === e.kind || "context_boundary" === e.kind,
                    ),
                    ideasIntroAnchorId: v,
                    messagesSinceShown: (n) => {
                        let l = un.get(`${e}:${n}`);
                        return null != l ? ul(t, l, u) : null;
                    },
                    isDismissed: (t) => uc(t, e, v),
                    onAskForIdeas: l,
                };
            })(t, n, l, r, uh);
            a.useSyncExternalStore(ud, () => uu);
            let { callout: s, hint: u } = (function (e, t, n) {
                    let l = { callout: null, hint: null };
                    for (let r of [...e].sort((e, t) => t.priority - e.priority)) {
                        if (null != l.callout && null != l.hint) break;
                        if (n(r)) continue;
                        let e = r.resolve(t);
                        null != e &&
                            ("hint" === e
                                ? (l.hint ??= { tip: r, presentation: e })
                                : (l.callout ??= { tip: r, presentation: e }));
                    }
                    return l;
                })(e, i, i.isDismissed),
                o = [s, u].filter((e) => null != e);
            return (
                a.useEffect(() => {
                    let e = Date.now();
                    for (let { tip: n } of o)
                        0 !== i.messagesSinceShown(n.id) &&
                            (function (e, t, n) {
                                un.set(`${e}:${t}`, n);
                            })(t, n.id, e);
                }),
                o.map((e) => ({
                    ...e,
                    options: {
                        context: i,
                        dismiss:
                            null != e.tip.dismissal
                                ? () =>
                                      (function (e, t) {
                                          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                                          if (null == e.dismissal || uc(e, t, n)) return;
                                          let l = uo();
                                          switch (e.dismissal) {
                                              case "session":
                                                  var r;
                                                  ua.add(((r = e.id), `${t}:${r}`));
                                                  break;
                                              case "anchor":
                                                  if (null == n) return;
                                                  aR.w.set(ui, {
                                                      ...l,
                                                      anchor: { ...l.anchor, [t]: { ...l.anchor[t], [e.id]: n } },
                                                  });
                                                  break;
                                              case "app":
                                                  aR.w.set(ui, {
                                                      ...l,
                                                      app: { ...l.app, [t]: [...(l.app[t] ?? []), e.id] },
                                                  });
                                                  break;
                                              case "forever":
                                                  aR.w.set(ui, { ...l, forever: [...l.forever, e.id] });
                                          }
                                          (uu++, us.forEach((e) => e()));
                                      })(e.tip, t, i.ideasIntroAnchorId)
                                : void 0,
                    },
                }))
            );
        })(uM, t, n, l, r);
    return 0 === s.length
        ? null
        : (0, i.jsx)(ut, {
              role: "assistant",
              continuation: !0,
              children: (0, i.jsx)("div", {
                  className: uT.X,
                  children: s.map((e) => {
                      let { tip: t, presentation: n, options: l } = e;
                      return (0, i.jsx)(up, { presentation: n, render: (e) => t.render(e, l) }, t.id);
                  }),
              }),
          });
}
var uP = n(52133),
    uL = n(732159),
    u$ = n(888366),
    uq = n(862026),
    uD = n(291192);
function uF(e) {
    let { projectId: t, contextSwitch: n } = e,
        l = a.useId(),
        r = (0, uq.L)(t, n);
    if (null == r) return null;
    let { action: s } = r;
    return (0, i.jsxs)("div", {
        className: uD.Ac,
        role: "group",
        "aria-labelledby": l,
        children: [
            (0, i.jsxs)("div", {
                className: uD.Sp,
                children: [
                    (0, i.jsx)("span", { className: uD.q3 }),
                    (0, i.jsxs)("span", {
                        className: uD.g8,
                        children: [
                            (0, i.jsx)(u$.g, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, i.jsx)(v.E, {
                                id: l,
                                tag: "span",
                                variant: "body-xs/semibold",
                                color: "text-default",
                                children: r.label,
                            }),
                        ],
                    }),
                    (0, i.jsx)("span", { className: uD.q3 }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: uD.nM,
                role: "status",
                children: [
                    (0, i.jsxs)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: [
                            r.body,
                            null != s
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          " ",
                                          (0, i.jsx)(nL.Q, {
                                              text: s.text,
                                              textVariant: "body-sm/medium",
                                              disabled: s.disabled,
                                              onClick: () => {
                                                  var e;
                                                  return s.confirm
                                                      ? ((e = s.onPress),
                                                        void (0, K.mM)(() =>
                                                            Promise.resolve((t) =>
                                                                (0, i.jsx)(uL.u, {
                                                                    ...t,
                                                                    title: R.intl.string(T.default["i+xjZM"]),
                                                                    subtitle: R.intl.string(T.default.fMBZmD),
                                                                    confirmText: R.intl.string(T.default.i5f3Uo),
                                                                    onConfirm: e,
                                                                }),
                                                            ),
                                                        ))
                                                      : s.onPress();
                                              },
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    }),
                    null != r.note
                        ? (0, i.jsx)(v.E, { variant: "body-xs/normal", color: "text-muted", children: r.note })
                        : null,
                ],
            }),
        ],
    });
}
var uO = n(345942),
    uG = n(727419),
    uz = n(576705);
function uU(e) {
    let { guildId: t, update: n } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            " ",
            R.intl.format(n ? T.default.esEGL5 : T.default["XrN+Bg"], {
                onOpen: () => uG.A.open(t, ev.BEX.GUILD_AUTOMOD),
            }),
        ],
    });
}
var uB = n(976860);
function uK(e) {
    return (0, c.bG)([eT.Ay, im.A], () => {
        let t = eT.Ay.getProject(e);
        return null == t ? "" : (im.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
var uH = n(951465),
    uV = n(369455);
function uW(e) {
    var t, n, l;
    let r,
        a,
        { projectId: s, notice: u } = e,
        o = uK(s),
        d =
            null ==
            (a = (0, c.bG)([eT.Ay, n1.A], () => {
                let e = eT.Ay.getProject(s);
                return null == e || "guild" !== e.install_scope || null == e.guild_id
                    ? null
                    : (n1.A.getGuild(e.guild_id) ?? null);
            }))
                ? null
                : { guildId: a.id, name: a.name },
        f = (0, c.cf)([eT.Ay, eG.A, n1.A, uz.A], () => {
            let e = eT.Ay.getProject(s);
            if (null == e || "guild" !== e.install_scope || null == e.guild_id) return { automod: !1, guildId: null };
            let t =
                    e.supported_surfaces?.includes(ee.q7.AUTOMOD) === !0 ||
                    eG.A.getPublishStatus(s)?.surface === "automod",
                n = n1.A.getGuild(e.guild_id),
                l = null != n && uz.A.can(ev.xBc.MANAGE_GUILD, n);
            return { automod: t, guildId: t && l ? e.guild_id : null };
        });
    return (0, i.jsxs)(v.E, {
        variant: "body-md/normal",
        color: "text-default",
        children: [
            R.intl.format(
                ((t = u),
                (n = d?.name ?? null),
                (l = f.automod),
                (r = null != n),
                !0 === t.commands_failed
                    ? r
                        ? T.default.ESu5eZ
                        : T.default["PrQg+B"]
                    : !0 === t.channel_skipped
                      ? r
                          ? T.default.ZnQW4S
                          : T.default.ev23Cw
                      : t.update
                        ? r
                            ? T.default["LuS8a/"]
                            : T.default.gQzuLC
                        : l
                          ? T.default.KORRGl
                          : r
                            ? T.default["/npn7F"]
                            : T.default.MOrR29),
                {
                    name: o,
                    server: d?.name ?? "",
                    onOpenServer: () => {
                        null != d && (0, uO.u)(d.guildId);
                    },
                },
            ),
            null != f.guildId
                ? (0, i.jsx)(uU, { guildId: f.guildId, update: u.update })
                : !f.automod && u.update && null != u.published_revision
                  ? (0, i.jsx)(uX, { projectId: s, notice: u })
                  : null,
        ],
    });
}
function uX(e) {
    let { projectId: t, notice: n } = e,
        l = (function (e, t) {
            let n = s.useContext(eU.bI)?.guildId ?? null,
                l = t.published_revision ?? null,
                { sent: r, canOffer: i } = (0, c.cf)(
                    [eG.A, eT.Ay],
                    () => {
                        let r = eG.A.getPublishStatus(e),
                            i = eT.Ay.getProject(e);
                        return {
                            sent:
                                null == l ? null : (r?.patchNotesSent?.find((e) => e.publishedRevision === l) ?? null),
                            canOffer:
                                null != l &&
                                t.update &&
                                l === r?.publishedRevision &&
                                null != n &&
                                null != i &&
                                "guild" === i.install_scope &&
                                (0, eT.jf)(i),
                        };
                    },
                    [e, l, t.update, n],
                );
            return null != r
                ? { state: "sent", sent: r }
                : i && null != l && null != n
                  ? { state: "offer", publishedRevision: l, fallbackGuildId: n }
                  : null;
        })(t, n);
    return null == l
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  " ",
                  "sent" === l.state
                      ? R.intl.format(T.default["35VEu5"], {
                            sentHook: (e, t) =>
                                (0, i.jsx)(
                                    tV.D,
                                    {
                                        tag: "a",
                                        role: "link",
                                        className: uV.Z,
                                        onClick: () =>
                                            (function (e) {
                                                let { guildId: t, channelId: n, messageId: l } = e;
                                                (0, uB.pX)(ev.BVt.CHANNEL(t, n, l));
                                            })(l.sent),
                                        children: e,
                                    },
                                    t,
                                ),
                        })
                      : R.intl.format(T.default["6/zJpD"], {
                            onSend: () => {
                                let e = (function (e, t) {
                                    let { publishedRevision: n, fallbackGuildId: l } = t,
                                        r = eT.Ay.getProject(e),
                                        i = null == r ? null : (0, eU.KL)(r, l);
                                    return null == r || null == i
                                        ? null
                                        : {
                                              projectId: e,
                                              guildId: i,
                                              applicationId: r.application_id,
                                              projectName: r.name,
                                              publishedRevision: n,
                                          };
                                })(t, l);
                                null != e && (0, uH.A)(e);
                            },
                        }),
              ],
          });
}
var uQ = n(73153),
    uZ = n(505527),
    uY = n(367790),
    uJ = n(354777),
    u0 = n(491182),
    u1 = n(74096),
    u2 = n(549587),
    u3 = n(448368),
    u4 = n(21299),
    u7 = n(538355),
    u5 = n(715628),
    u9 = n(752636),
    u8 = n(9842),
    u6 = n(589022),
    oe = n(967198),
    ot = n(531685);
let on = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function ol(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function or(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function oi(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let r = or(e, t),
        i = e.codePointAt(t);
    if (
        (null != i &&
            (8205 === i ||
                (i >= 65024 && i <= 65039) ||
                (i >= 127995 && i <= 127999) ||
                (i >= 768 && i <= 879) ||
                (i >= 8400 && i <= 8447) ||
                (i >= 65056 && i <= 65071) ||
                (i >= 917536 && i <= 917631))) ||
        8205 === r
    )
        return !0;
    if (ol(r) && ol(i)) {
        let n = 0,
            l = t;
        for (; n < 32 && ol(or(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function oa(e, t) {
    let { streaming: n } = t,
        l = (0, c.bG)([ik.Ay], () => ik.Ay.useReducedMotion),
        r = n && !l,
        [i, s] = a.useState(() => ({ target: e, length: e.length })),
        u = i;
    (u.target !== e &&
        (u = {
            target: e,
            length: r
                ? (function (e, t, n) {
                      let l = Math.min(Math.max(n, 0), e.length);
                      if (0 === l) return 0;
                      if (t.length >= l && t.startsWith(e.slice(0, l))) return l;
                      let r = Math.min(l, t.length),
                          i = 0;
                      for (; i < r && e.charCodeAt(i) === t.charCodeAt(i);) i++;
                      for (; i > 0 && oi(t, i);) i--;
                      return i;
                  })(u.target, e, u.length)
                : e.length,
        }),
        r || u.length === e.length || (u = { target: e, length: e.length }),
        u !== i && s(u));
    let o = r && u.length < e.length,
        d = a.useRef(u);
    a.useLayoutEffect(() => {
        d.current = u;
    });
    let f = a.useRef(0),
        m = a.useRef(0);
    (a.useEffect(() => {
        if (o)
            return (
                (m.current = 0),
                (f.current = requestAnimationFrame(function e(t) {
                    let n = 0 === m.current ? 32 : t - m.current;
                    if (n >= 32) {
                        m.current = t;
                        let e = d.current,
                            l = (function (e) {
                                let { target: t, revealed: n, elapsedMs: l } = e,
                                    r = Math.min(Math.max(n, 0), t.length),
                                    i = t.length - r;
                                if (i <= 0) return r;
                                if (i > 900) return t.length;
                                let a = Math.min(
                                    120,
                                    Math.max(1, Math.round(Math.max(0.16, i / 280) * Math.max(l, 0))),
                                );
                                var s = (function (e, t, n) {
                                    if (n >= e.length) return n;
                                    let l = n;
                                    for (; l > t + 1 && n - l < 12 && on.has(e.charAt(l - 1));) l--;
                                    return on.has(e.charAt(l - 1)) ? n : l;
                                })(t, r, Math.min(t.length, r + a));
                                let u = s;
                                for (; u < t.length && u - s < 32 && oi(t, u);) u++;
                                return u;
                            })({ target: e.target, revealed: e.length, elapsedMs: n });
                        l !== e.length && s({ target: e.target, length: l });
                    }
                    f.current = requestAnimationFrame(e);
                })),
                () => cancelAnimationFrame(f.current)
            );
    }, [o]),
        a.useEffect(() => {
            if (o)
                return (
                    e(),
                    document.addEventListener("visibilitychange", e),
                    () => document.removeEventListener("visibilitychange", e)
                );
            function e() {
                if ("hidden" !== document.visibilityState) return;
                let { target: e } = d.current;
                s({ target: e, length: e.length });
            }
        }, [o]));
    let h = Math.min(u.length, e.length);
    return { text: h >= e.length ? e : e.slice(0, h), revealing: r && h < e.length };
}
var os = n(624479),
    ou = n(890377),
    oo = n(92446),
    oc = n(957565),
    od = n(180227);
function of(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, i.jsx)("div", {
              className: o()(od.QE, { [od.Rn]: t }),
              children: (0, i.jsx)(iX.Ay, {
                  children: n.map((e) =>
                      (0, i.jsx)(
                          iX.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function om(e) {
    return oc.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: R.intl.string(R.t.JrGD7E), icon: os.CopyIcon, onClick: () => (0, oc.C)(e) }]
        : [];
}
function oh(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: R.intl.string(T.default.CXtLD2),
                          tooltip: R.intl.string(T.default.DOb1HM),
                          icon: ou.V,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: R.intl.string(T.default.urZwpN),
                          icon: eW.P,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, i.jsx)(of, { groupStart: n, actions: [...r, ...om(t)] });
}
function og(e) {
    let { content: t, groupStart: n, onRestoreVersion: l, onViewTrace: r } = e,
        a =
            null == l
                ? []
                : [{ id: "restore-version", label: R.intl.string(T.default.H8Jfhu), icon: ti.e, onClick: l }],
        s = null == r ? [] : [{ id: "view-trace", label: "View Trace", icon: oo.BugIcon, onClick: r }];
    return (0, i.jsx)(of, { groupStart: n, actions: [...a, ...om(t), ...s] });
}
let op = (0, ip.createChannelRecord)({ id: "conjure-builder", type: ev.rbe.DM }),
    ox = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function ov(e, t) {
    return null == e ? e : (0, i.jsx)("div", { className: o()(od.Yq, { [od.x1]: t }), children: e });
}
function oj(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
let ob = { hideSimpleEmbedContent: !0, allowList: !0, allowHeading: !0, allowLinks: !0, previewLinkTarget: !0 };
function oy(e, t, n) {
    let { content: l } = (0, u7.A)(e, ob),
        r = a.useMemo(() => ((0, l8.aW)(e.content) ? (0, uJ.z2)(sn.U, e, ob).content : null), [e]) ?? l,
        s = a.useMemo(() => ({ message: e, channel: op, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, i.jsx)(u1.Ay, { className: n, message: e, content: r, compact: !1 })
          : (0, u5.A)(s, r);
}
function ok(e) {
    let [t, n] = a.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = a.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = a.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, u4.m)(e, op, t.usernameProfile, l),
        u = (0, u4.Jo)(t.avatarProfile, l),
        o = (0, c.bG)([oe.A], () => oe.A.getGuildId()),
        d = (0, c.bG)([nw.default], () => nw.default.getCurrentUser()),
        f = a.useCallback(
            (t) => {
                let n = nw.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, i.jsx)(u6.A, { ...t, user: n, currentUser: d, guildId: o ?? void 0 });
            },
            [d, o, e.author],
        );
    return {
        showAvatarPopout: t.avatarProfile,
        showUsernamePopout: t.usernameProfile,
        onClickAvatar: u,
        onClickUsername: s,
        onPopoutRequestClose: r,
        renderPopout: f,
        guildId: o ?? void 0,
    };
}
let ow = { formatInline: !0, allowGameMentions: !0 };
function oA(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        { content: s } = (0, u7.A)(n, ow),
        u = a.useMemo(() => {
            let e = "" === n.content ? null : (0, l8.aW)(n.content) ? (0, uJ.z2)(sn.U, n, ow).content : s;
            return null == l
                ? e
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsxs)("span", {
                              className: od.GV,
                              children: [
                                  (0, i.jsx)(h.x, {
                                      className: od.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 14,
                                      height: 14,
                                  }),
                                  l,
                              ],
                          }),
                          e,
                      ],
                  });
        }, [n, s, l]),
        { isReplyAuthorBlocked: o, isReplyAuthorIgnored: d } = (0, c.cf)(
            [nk.A],
            () => ({
                isReplyAuthorBlocked: nk.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: nk.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        f = (0, iV.X4)(n),
        m = (0, iV.X4)(t),
        g = ok(n);
    return (0, i.jsx)(u3.A, {
        repliedAuthor: f,
        baseAuthor: m,
        baseMessage: t,
        channel: op,
        referencedMessage: { state: u8.a.LOADED, message: n },
        content: u,
        compact: !1,
        isReplyAuthorBlocked: o,
        isReplyAuthorIgnored: d,
        isReplySpineClickable: null != r,
        showReplySpine: !0,
        renderPopout: g.renderPopout,
        showAvatarPopout: g.showAvatarPopout,
        showUsernamePopout: g.showUsernamePopout,
        onClickAvatar: g.onClickAvatar,
        onClickUsername: g.onClickUsername,
        onClickReply: r,
        onPopoutRequestClose: g.onPopoutRequestClose,
    });
}
function oN(e) {
    let { message: t, author: n } = e,
        l = ok(t);
    return (0, i.jsx)(u2.Ay, {
        message: t,
        channel: op,
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
function oS(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, groupStart: s, onQueuedAction: u } = e,
        o = (0, s_.vm)(l),
        c = a.useMemo(() => (0, iV.FT)(o, null), [o]),
        d = a.useMemo(() => (0, lA.W1)(t), [t]),
        f = d?.body ?? t,
        m = (0, sN.Qu)(f),
        h = a.useMemo(() => {
            if (null == o) return null;
            let e = (0, ig.Ay)({ channelId: op.id, content: f, author: o });
            return (0, ih.rh)({ ...e, timestamp: oj(n, e.timestamp), state: ev.cmJ.SENT });
        }, [f, o, n]);
    return null == h
        ? null
        : (0, i.jsx)(
              oC,
              {
                  message: h,
                  author: c,
                  content: f,
                  selected: d?.label,
                  accessories: r,
                  groupStart: s,
                  onQueuedAction: u,
              },
              m,
          );
}
function oC(e) {
    let { message: t, author: n, content: l, selected: r, accessories: a, groupStart: s = !0, onQueuedAction: u } = e,
        o = oy(t, l);
    return (0, i.jsx)(u0.A, {
        className: od.yE,
        author: n,
        childrenHeader: s ? (0, i.jsx)(oN, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? o
                : (0, i.jsxs)("div", {
                      className: od.zq,
                      children: [
                          (0, i.jsxs)("span", {
                              className: od.GV,
                              children: [
                                  (0, i.jsx)(h.x, {
                                      className: od.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  r,
                              ],
                          }),
                          (0, i.jsx)("span", { className: od.WO, children: o }),
                      ],
                  }),
        childrenAccessories: ov(a, "" !== l),
        childrenButtons: (0, i.jsx)(oh, { content: l, groupStart: s, onQueuedAction: u }),
    });
}
function oI(e) {
    let {
            content: t,
            createdAt: n,
            accessories: l,
            replyTo: r,
            onJumpToReplied: s,
            groupStart: u = !0,
            streaming: o = !1,
            buttons: d,
        } = e,
        { text: f, revealing: m } = oa(t, { streaming: (0, c.bG)([ot.A], () => o && ot.A.isFocused(), [o]) }),
        h = a.useMemo(() => (0, iV.FT)(null, null), []),
        g = a.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        p = r?.userId,
        x = (0, s_.vm)(p),
        v = a.useMemo(() => (null == r ? null : (0, lA.W1)(r.content)), [r]),
        j = a.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, ig.Ay)({ channelId: op.id, content: v?.body ?? r.content, author: x });
            return (0, ih.rh)({ ...e, id: r.id, timestamp: oj(r.createdAt, e.timestamp), state: ev.cmJ.SENT });
        }, [r, v, x]),
        b = a.useMemo(() => (null == r ? void 0 : { channel_id: op.id, message_id: r.id }), [r]),
        [y] = a.useState(() => (0, ig.Ay)({ channelId: op.id, content: "", author: ox })),
        k = a.useMemo(
            () =>
                (0, ih.rh)({
                    ...y,
                    timestamp: oj(n, y.timestamp),
                    state: ev.cmJ.SENT,
                    ...(null != b ? { type: ev.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, n, b],
        ),
        w = a.useMemo(() => k.set("content", f), [k, f]),
        A = a.useMemo(
            () => (0, u9.A)({ message: k, channel: op, author: g, guildId: void 0, isGroupStart: u }),
            [k, g, u],
        ),
        N = oy(w, f, od.OS);
    return (0, i.jsxs)("div", {
        className: od.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": m ? "true" : void 0,
        children: [
            (0, i.jsx)(u0.A, {
                className: od.yE,
                author: g,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, i.jsx)(oA, { baseMessage: k, referenced: j, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: A,
                childrenMessageContent: N,
                childrenAccessories: ov(l, "" !== f),
                disableInteraction: !0,
            }),
            d,
            u ? (0, i.jsx)("img", { className: od.st, src: "/assets/c07664a29f3ee5ed.svg", alt: "" }) : null,
        ],
    });
}
var oE = n(981879);
function o_(e) {
    let { messageId: t, reaction: n } = e,
        l = a.useMemo(
            () =>
                (0, ih.rh)(
                    { ...(0, ig.Ay)({ channelId: op.id, content: "" }), id: `conjure:${t}`, state: ev.cmJ.SENT },
                    {
                        reactions: [
                            {
                                emoji: { id: n.emojiId, name: n.emoji, animated: !0 === n.animated },
                                me: !1,
                                me_burst: !1,
                                count: 1,
                                burst_count: 0,
                            },
                        ],
                    },
                ),
            [t, n],
        );
    return (
        a.useEffect(() => {
            let e = { id: n.emojiId, name: n.emoji };
            function t() {
                (uQ.h.dispatch({
                    type: "MESSAGE_REACTION_ADD_USERS",
                    channelId: op.id,
                    messageId: l.id,
                    users: [ox],
                    emoji: e,
                    reactionType: uZ.v.NORMAL,
                }),
                    uQ.h.dispatch({
                        type: "MESSAGE_REACTION_SET_FETCHED",
                        channelId: op.id,
                        messageId: l.id,
                        emoji: e,
                        reactionType: uZ.v.NORMAL,
                    }));
            }
            return (
                t(),
                uQ.h.subscribe("CONNECTION_OPEN", t),
                () => {
                    uQ.h.unsubscribe("CONNECTION_OPEN", t);
                }
            );
        }, [l.id, n.emojiId, n.emoji]),
        (0, i.jsx)("div", {
            className: oE.H,
            children: (0, i.jsx)(uY.A, {
                message: l,
                channel: op,
                disableReactionCreates: !0,
                disableReactionUpdates: !0,
                useChatFontScaling: !0,
                showTooltipWhenReadOnly: !0,
            }),
        })
    );
}
var oM = n(442433);
n(775443);
var oT = n(990779),
    oR = n(155899);
function oP(e) {
    let { onSelect: t, onClose: n = oM.Z_, onRestoreVersion: l, onViewTrace: r } = e;
    return (0, i.jsx)(ek.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: n,
        "aria-label": R.intl.string(R.t.ogxXGq),
        onSelect: t,
        children: (0, i.jsxs)(ew.rX, {
            children: [
                null != l
                    ? (0, i.jsx)(ew.Dr, {
                          id: "restore-version",
                          label: R.intl.string(T.default.H8Jfhu),
                          icon: ti.e,
                          action: l,
                      })
                    : null,
                null != r
                    ? (0, i.jsx)(ew.Dr, { id: "view-trace", label: "View Trace", icon: oo.BugIcon, action: r })
                    : null,
            ],
        }),
    });
}
function oL(e) {
    let t,
        {
            row: n,
            projectId: l,
            replyTo: r,
            onJumpTo: a,
            planVersion: s,
            pickedIdeaIds: u,
            secretRequestAwaiting: o,
            secretRequestStatus: d,
            settingsFloating: f = !1,
            isNewest: m = !1,
            onPickIdea: h,
            onApprovePlan: g,
            onRestoreVersion: p,
        } = e,
        x = n.message,
        v =
            null != p
                ? "assistant" !== x.role || null == x.sourceSha
                    ? null
                    : {
                          sha: x.sourceSha,
                          authorName: "",
                          authorEmail: "",
                          authoredAt: new Date(x.created_at).toISOString(),
                          subject: x.content,
                      }
                : null,
        j = null != v && null != p ? () => o$(v, p) : void 0,
        b =
            ((t =
                F() && "assistant" === x.role && (0, tB.BL)(x)
                    ? (x.turn_id ?? x.steps.find((e) => null != e.turn_id)?.turn_id ?? x.id.replace(/^turn:/, ""))
                    : null),
            (0, c.bG)(
                [oT.A],
                () => {
                    let e =
                        null == t
                            ? null
                            : oT.A.getTimingTraces(l).findLast((e) => {
                                  let { name: n, spans: l } = e;
                                  return "turn" === n && l.find((e) => null == e.parent)?.attrs?.turn_id === t;
                              });
                    return null == e || e.live ? null : e.id;
                },
                [l, t],
            )),
        y =
            null != b
                ? () =>
                      (function (e, t) {
                          for (let n of (($ = { projectId: e, traceId: t }), [...L])) n(e);
                      })(l, b)
                : void 0,
        k = x.in_reply_to,
        w = x.restoreProposal;
    return (0, i.jsx)(ut, {
        rowKey: n.key,
        role: "assistant",
        continuation: !n.groupStart,
        onContextMenu:
            null != j || null != y
                ? (e) => {
                      var t, n, l;
                      return (
                          (t = e),
                          (n = j),
                          (l = y),
                          void (0, oM.jA)(t, (e) => (0, i.jsx)(oP, { ...e, onRestoreVersion: n, onViewTrace: l }))
                      );
                  }
                : void 0,
        children: (0, i.jsx)(oI, {
            groupStart: n.groupStart,
            buttons: (0, i.jsx)(og, {
                groupStart: n.groupStart,
                content: n.content,
                onRestoreVersion: j,
                onViewTrace: y,
            }),
            content: n.content,
            createdAt: x.created_at,
            replyTo: r,
            onJumpToReplied: null != k && null != a ? () => a(k) : void 0,
            accessories: (0, i.jsx)(ss, {
                projectId: l,
                steps: x.steps,
                content: "",
                proposal: x.proposal,
                planVersion: s,
                interrupted: !0 === x.interrupted,
                hoistedProse: !0,
                hoistedAttachmentsHost: n.attachmentsHost,
                sideReply: n.sideReply,
                sideReplyAcknowledges: x.acknowledges,
                active: n.active,
                ideas: n.active ? void 0 : x.ideas,
                pickedIdeaIds: null == x.ideas ? void 0 : u,
                attachments: x.attachments,
                secretRequest: n.active ? void 0 : x.secretRequest,
                secretRequestId: x.render_id,
                secretRequestAwaiting: o,
                secretRequestStatus: d,
                settingsRequest: n.active || f ? void 0 : x.settingsRequest,
                settingsAskId: x.id,
                publishCta: n.active ? null : x.publishCta,
                turnId: (0, tB.lb)(x) ?? void 0,
                onPickIdea: h,
                onApprovePlan: g,
                restoreProposal: w,
                publishScheduleProposal: x.publishScheduleProposal,
                publishScheduleProposalCurrent: m,
                onRestoreProposal:
                    null != w && null != p && m
                        ? () =>
                              o$(
                                  {
                                      sha: w.sha,
                                      authorName: "",
                                      authorEmail: "",
                                      authoredAt: w.authored_at,
                                      subject: w.subject,
                                  },
                                  p,
                              )
                        : void 0,
            }),
        }),
    });
}
function o$(e, t) {
    (0, oR.F)({ onConfirm: () => t(e) });
}
var oq = n(288539),
    oD = n(677683),
    oF = n(677690),
    oO = n(159711);
function oG(e) {
    let t,
        n,
        { projectId: l } = e,
        { outcome: r, pinnedName: a } =
            ((t = (0, c.bG)([oD.A], () => oD.A.getOutcome(l))),
            (n = (0, c.bG)(
                [ny.A, nw.default, nk.A],
                () => {
                    let e = t?.status === "pinned" ? ny.A.getChannel(t.channelId) : null;
                    return null == e ? null : (0, nb.m1)(e, nw.default, nk.A);
                },
                [t],
            )),
            { outcome: t, pinnedName: n }),
        s = R.intl.string(T.default.UGAfl9);
    return null != r
        ? (0, i.jsx)(t0, {
              title: s,
              children: (0, i.jsx)(v.E, {
                  className: oO.r,
                  variant: "body-sm/normal",
                  color: "text-muted",
                  children:
                      "pinned" === r.status
                          ? R.intl.formatToPlainString(T.default.gKe6Lw, { channelName: a ?? "" })
                          : R.intl.string(T.default["+kpQ3v"]),
              }),
          })
        : (0, i.jsx)(t0, { title: s, children: (0, i.jsx)(oz, { projectId: l }) });
}
function oz(e) {
    let { projectId: t } = e,
        {
            guildId: n,
            channels: l,
            selected: r,
            setPicked: s,
            pinning: u,
            failed: o,
            pin: f,
            skip: m,
        } = (function (e) {
            var t;
            let n = (0, c.bG)([eT.Ay], () => eT.Ay.getProject(e), [e]),
                l =
                    ((t = n?.guild_id ?? null),
                    (0, c.yK)(
                        [nJ.A, uz.A],
                        () =>
                            null == t
                                ? []
                                : nJ.A.getChannels(t)
                                      .VOCAL.map((e) => {
                                          let { channel: t } = e;
                                          return t;
                                      })
                                      .filter(
                                          (e) => e.type === ev.rbe.GUILD_VOICE && uz.A.can(ev.xBc.MANAGE_CHANNELS, e),
                                      ),
                        [t],
                    )),
                [r, i] = a.useState(null),
                [s, u] = a.useState(!1),
                [o, d] = a.useState(!1),
                f = l.find((e) => e.id === r) ?? null,
                m = n?.application_id,
                h = a.useCallback(async () => {
                    if (null == f || null == m) return;
                    (u(!0), d(!1));
                    let t = await (0, oF.pk)(f.id, m);
                    (u(!1), t ? (0, oF.tg)(e, { status: "pinned", channelId: f.id }) : d(!0));
                }, [m, e, f]),
                g = a.useCallback(() => (0, oF.tg)(e, { status: "skipped" }), [e]);
            return {
                guildId: n?.guild_id ?? null,
                channels: l,
                selected: f,
                setPicked: i,
                pinning: s,
                failed: o,
                pin: h,
                skip: g,
            };
        })(t),
        h = (0, nV.A)(n, "voice"),
        g = a.useMemo(() => {
            let e = new Set(l.map((e) => e.id));
            return (h ?? []).filter((t) => e.has(t.value));
        }, [l, h]);
    return (0, i.jsx)("div", {
        className: oO.r,
        children: (0, i.jsxs)(aA.B, {
            gap: 12,
            children: [
                (0, i.jsx)(v.E, {
                    variant: "body-md/normal",
                    color: "text-default",
                    children: R.intl.string(T.default["1vVBAw"]),
                }),
                g.length > 0
                    ? (0, i.jsx)(ng.Z, {
                          selectionMode: "single",
                          label: R.intl.string(T.default.peOi1H),
                          placeholder: R.intl.string(T.default["9+dfPT"]),
                          options: g,
                          value: r?.id ?? null,
                          onSelectionChange: (e) => s(e),
                          errorMessage: o ? R.intl.string(T.default.d7EeAm) : void 0,
                          disabled: u,
                          maxOptionsVisible: 4,
                          fullWidth: !0,
                      })
                    : (0, i.jsx)(v.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: R.intl.string(T.default.JVUsIY),
                      }),
                (0, i.jsxs)("div", {
                    className: oO.o,
                    children: [
                        (0, i.jsx)(d.$, {
                            variant: "secondary",
                            size: "sm",
                            text: R.intl.string(T.default.Iw0l8o),
                            disabled: u,
                            onClick: m,
                        }),
                        g.length > 0
                            ? (0, i.jsx)(d.$, {
                                  variant: "primary",
                                  size: "sm",
                                  text: R.intl.string(T.default.FYI3qr),
                                  disabled: null == r,
                                  loading: u,
                                  onClick: f,
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function oU(e, t, n) {
    return (0, i.jsx)(oq.A, { userId: e, content: `@${t}` }, n);
}
function oB(e) {
    let { projectId: t, event: n } = e,
        l = (function (e, t, n) {
            let l = t.actor_user_id;
            a.useEffect(() => {
                (0, s_.Y_)(l);
            }, [l]);
            let r = (0, c.bG)([nw.default], () => (null == l ? null : nw.default.getUser(l)), [l]),
                i = (0, iv.tx)(r),
                s = uK(e),
                u =
                    (0, c.bG)([n1.A], () => (null == t.guild_id ? null : n1.A.getGuild(t.guild_id)?.name), [
                        t.guild_id,
                    ]) ?? R.intl.string(T.default.R1tPlP),
                o = null == r || null == i ? null : { user: i, userHook: (e, t) => n(r.id, i, t) };
            switch (t.type) {
                case "app_removed":
                    return null == o
                        ? R.intl.format(T.default.Lwsrhg, { app: s, server: u })
                        : R.intl.format(T.default.qqePfT, { app: s, server: u, ...o });
                case "bot_removed":
                    return null == o
                        ? R.intl.format(T.default.mT7EQG, { app: s, server: u })
                        : R.intl.format(T.default["lA/crI"], { app: s, server: u, ...o });
                case "preview_bot_removed":
                    return null == o
                        ? R.intl.format(T.default["4LVIeo"], { app: s, server: u })
                        : R.intl.format(T.default.YJOV6D, { app: s, server: u, ...o });
                case "app_channel_deleted": {
                    let e = t.channel_name ?? "";
                    return null == o
                        ? R.intl.format(T.default["4VQfid"], { channel: e, server: u })
                        : R.intl.format(T.default.RlMIJN, { channel: e, server: u, ...o });
                }
                case "remixed":
                    return R.intl.format(T.default.mHCXtm, { source: t.source_name });
                case "voice_channel_pin":
                    return R.intl.string(T.default.UGAfl9);
                case "staff_notice":
                    return t.message;
            }
        })(t, n, oU),
        r = uf(t, n);
    return "voice_channel_pin" === n.type
        ? (0, i.jsx)(oG, { projectId: t })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(v.E, { variant: "body-md/normal", color: "text-default", children: l }),
                  null != r ? (0, i.jsx)(l3, { projectId: t, request: r, notifyAgent: !1 }) : null,
              ],
          });
}
let oK = a.memo(
        function (e) {
            var t;
            let { row: n, projectId: l, highlighted: r, currentUserId: a, ...s } = e,
                u = n.message,
                o =
                    ((t = "user" === n.kind ? u.id : null),
                    ns.useState((e) => (null == t ? null : (e.byMessageKey[t] ?? null))));
            switch (n.kind) {
                case "user": {
                    let e = (0, l8.DW)(u.attachments, u.content),
                        t = null != e && e.length > 0 ? e : null;
                    return (0, i.jsx)(ut, {
                        rowKey: n.key,
                        role: "user",
                        anchorId: u.id,
                        highlighted: r,
                        continuation: !n.groupStart,
                        children: (0, i.jsx)(oS, {
                            groupStart: n.groupStart,
                            content: u.content,
                            createdAt: u.created_at,
                            userId: u.user_id,
                            accessories:
                                null != t || null != o || null != u.agentReaction
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              null != t ? (0, i.jsx)(st.A, { projectId: l, attachments: t }) : null,
                                              null != o ? (0, i.jsx)(sy, { send: o }) : null,
                                              null != u.agentReaction
                                                  ? (0, i.jsx)(o_, { messageId: u.id, reaction: u.agentReaction })
                                                  : null,
                                          ],
                                      })
                                    : void 0,
                            onQueuedAction: (function (e, t, n) {
                                if (
                                    "user" === t.role &&
                                    "queued" === t.disposition &&
                                    null != t.user_id &&
                                    t.user_id === n
                                )
                                    return (n) => (0, l6.tp)(e, t.id, n);
                            })(l, u, a),
                        }),
                    });
                }
                case "prose":
                    return (0, i.jsx)(ut, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, i.jsx)(oI, {
                            groupStart: n.groupStart,
                            content: n.content,
                            streaming: n.streaming,
                            createdAt: u.created_at,
                            accessories:
                                n.hostsAttachments && null != u.attachments
                                    ? (0, i.jsx)(st.A, { projectId: l, attachments: u.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, i.jsx)(ut, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, i.jsx)(sa, {
                            projectId: l,
                            steps: u.steps,
                            segment: n.segment,
                            active: n.active,
                            closed: n.closed,
                            segmentDurationMs: n.segmentDurationMs,
                            reportsDuration: n.reportsDuration,
                            hostsChecklist: n.hostsChecklist,
                            turnActive: n.turnActive,
                            checklistSuperseded: n.checklistSuperseded,
                            durationMs: null != u.finished_at ? u.finished_at - u.created_at : void 0,
                            todos: u.todos,
                            provisionalTodo: u.provisionalTodo,
                        }),
                    });
                case "publishNotice":
                    return (0, i.jsx)(ut, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, i.jsx)(oI, {
                            groupStart: n.groupStart,
                            content: null == u.publishNotice ? u.content : "",
                            createdAt: u.created_at,
                            accessories:
                                null == u.publishNotice
                                    ? void 0
                                    : (0, i.jsx)(uW, { projectId: l, notice: u.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, i.jsx)(ut, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, i.jsx)(oI, {
                            groupStart: n.groupStart,
                            content: null == u.projectEvent ? u.content : "",
                            createdAt: u.created_at,
                            accessories:
                                null == u.projectEvent
                                    ? void 0
                                    : (0, i.jsx)(oB, { projectId: l, event: u.projectEvent }),
                        }),
                    });
                case "contextBoundary":
                    return (0, i.jsx)(ut, {
                        rowKey: n.key,
                        role: "assistant",
                        children:
                            null == u.contextSwitch
                                ? null
                                : (0, i.jsx)(uF, { projectId: l, contextSwitch: u.contextSwitch }),
                    });
                case "interrupted":
                    return (0, i.jsx)(ut, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, i.jsx)(sa, { projectId: l, interrupted: !0, steps: u.steps }),
                    });
                case "legacyTodos":
                    return (0, i.jsx)(ut, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, i.jsx)(sa, {
                            projectId: l,
                            steps: oH,
                            active: !1,
                            checklistSuperseded: n.checklistSuperseded,
                            todos: u.todos,
                            provisionalTodo: u.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, i.jsx)(oL, { row: n, projectId: l, ...s });
            }
        },
        function (e, t) {
            return (
                (0, uP.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, uP.A)(e.row, t.row, ["message"]) &&
                e.row.kind === t.row.kind &&
                (function (e, t, n) {
                    if (t === n) return !0;
                    switch (e) {
                        case "user":
                            return (
                                t.id === n.id &&
                                t.content === n.content &&
                                t.created_at === n.created_at &&
                                t.user_id === n.user_id &&
                                t.agentReaction === n.agentReaction &&
                                t.attachments === n.attachments &&
                                t.disposition === n.disposition
                            );
                        case "prose":
                            return t.created_at === n.created_at && t.attachments === n.attachments;
                        case "publishNotice":
                            return (
                                t.content === n.content &&
                                t.created_at === n.created_at &&
                                t.publishNotice === n.publishNotice
                            );
                        case "projectEvent":
                            return (
                                t.content === n.content &&
                                t.created_at === n.created_at &&
                                t.projectEvent === n.projectEvent
                            );
                        case "contextBoundary":
                            return t.contextSwitch === n.contextSwitch;
                        default:
                            return !1;
                    }
                })(e.row.kind, e.row.message, t.row.message) &&
                (0, uP.A)(e.replyTo, t.replyTo) &&
                (0, uP.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let n of e) if (!t.has(n)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    oH = [],
    oV = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    oW = new WeakMap();
function oX(e, t, n) {
    let l = Math.max(0, Math.min(e.length, n)),
        r = Math.max(0, Math.min(l, t));
    return { start: r, end: l, startKey: e[r] ?? null, endKey: l >= e.length ? null : (e[l - 1] ?? null) };
}
function oQ(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
let oZ = ["wheel", "touchstart", "pointerdown", "keydown"];
function oY(e) {
    let t = e?.querySelectorAll("[data-conjure-plan-card]");
    return t?.[t.length - 1]?.closest("[data-conjure-row-key]") ?? null;
}
let oJ = a.memo(function (e) {
    let {
            projectId: t,
            messages: n,
            emptyState: l,
            onPickIdea: r,
            onAskForIdeas: s,
            draftHasText: u,
            onApprovePlan: d,
            floatingSettingsMessageId: f,
            liveClarificationId: m,
            onRestoreVersion: h,
            scrollerRef: g,
            stickToBottomRef: p,
            pinned: x,
            onUnpin: b,
            handleRef: y,
            onShowsLatestChange: k,
        } = e,
        w = a.useRef(null),
        [A, N] = a.useState(null),
        S = a.useCallback((e) => {
            ((w.current = e), N(e));
        }, []),
        [C, I] = a.useState(null),
        E = a.useRef(0);
    a.useEffect(() => () => window.clearTimeout(E.current), []);
    let _ = a.useCallback((e) => {
            (I(e), window.clearTimeout(E.current), (E.current = window.setTimeout(() => I(null), 1600)));
        }, []),
        M = (0, c.bG)([eG.A], () => eG.A.getPublishStatus(t)),
        P = (0, c.bG)([nw.default], () => nw.default.getCurrentUser()?.id),
        L = a.useMemo(() => {
            let e;
            return (function (e, t) {
                let n = [],
                    l = (function (e) {
                        let t = new Set(),
                            n = !1;
                        for (let l = e.length - 1; l >= 0; l--) {
                            let r = e[l];
                            null != r &&
                                null !=
                                    (function (e) {
                                        if ("assistant" !== e.role) return null;
                                        let t = (0, tU.lt)(e.steps);
                                        return null != t ? t : null != e.todos && e.todos.length > 0 ? e.todos : null;
                                    })(r) &&
                                (n && t.add(r.render_id), (n = !0));
                        }
                        return t;
                    })(e);
                for (let r of e) {
                    let e = l.has(r.render_id),
                        i = null != r.clarification && r.clarification.id === t,
                        a = oW.get(r);
                    if (null != a && a.superseded === e && a.liveCard === i) {
                        n.push(...a.planned);
                        continue;
                    }
                    let s = (function (e, t, n) {
                        let l = [];
                        function r(e, t) {
                            l.push({ row: e, groupable: { key: e.key, ...t } });
                        }
                        if ("user" === e.role)
                            return (
                                r(
                                    { kind: "user", key: e.render_id, message: e, groupStart: !1 },
                                    { actor: "user", authorId: e.user_id, boundary: void 0 },
                                ),
                                l
                            );
                        if ("publish_notice" === e.kind) {
                            let t = `${e.render_id}:publish`;
                            return (
                                r(
                                    { kind: "publishNotice", key: t, message: e, groupStart: !1 },
                                    { actor: "assistant", boundary: t },
                                ),
                                l
                            );
                        }
                        if ("context_boundary" === e.kind) {
                            let t = `${e.render_id}:contextBoundary`;
                            return (
                                r(
                                    { kind: "contextBoundary", key: t, message: e, groupStart: !1 },
                                    { actor: null, boundary: t },
                                ),
                                l
                            );
                        }
                        if ("project_event" === e.kind) {
                            let t = `${e.render_id}:projectEvent`;
                            return (
                                r(
                                    { kind: "projectEvent", key: t, message: e, groupStart: !1 },
                                    { actor: "assistant", boundary: t },
                                ),
                                l
                            );
                        }
                        let i = !(0, tB.BL)(e),
                            a = rr({
                                steps: e.steps,
                                content: e.content,
                                hasProposal: null != e.proposal,
                                hasLiveClarification: n,
                                hasAttachments: (e.attachments?.length ?? 0) > 0,
                            }),
                            s = a.lastStreamedMessage?.key,
                            u = (0, tU.C6)(e.steps, { turnActive: i }),
                            { lastWork: o, open: c } = (0, tU.CT)(u, { turnActive: i }),
                            d = u.at(-1)?.index,
                            f = !1;
                        for (let n of u) {
                            if (null != n.prose && oV.test(n.prose.content)) f = !0;
                            else if (null != n.prose && n.prose.key !== a.replyKey) {
                                let t = `${e.render_id}:${n.key}`;
                                r(
                                    {
                                        kind: "prose",
                                        key: t,
                                        message: e,
                                        groupStart: !1,
                                        content: n.prose.content,
                                        hostsAttachments:
                                            "streamed" === a.attachmentsHost &&
                                            n.prose.key === s &&
                                            null != e.attachments,
                                        streaming: i && n.index === d && !n.hasWork,
                                    },
                                    { actor: "assistant", boundary: t },
                                );
                            }
                            (n.hasWork || n.hasTodos) &&
                                r(
                                    {
                                        kind: "activity",
                                        key: `${e.render_id}:work-${n.index}`,
                                        message: e,
                                        groupStart: !1,
                                        segment: n.index,
                                        active: n.index === c,
                                        closed: n.index !== c,
                                        ...(null != n.durationMs ? { segmentDurationMs: n.durationMs } : {}),
                                        reportsDuration: n.index === o,
                                        hostsChecklist: n.hasTodos,
                                        turnActive: tK(e),
                                        checklistSuperseded: n.hasTodos && t,
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        let m = oV.test(e.content ?? "");
                        if (
                            (!0 === e.interrupted || f || m
                                ? r(
                                      {
                                          kind: "interrupted",
                                          key: `${e.render_id}:interrupted`,
                                          message: e,
                                          groupStart: !1,
                                      },
                                      { actor: null, boundary: void 0 },
                                  )
                                : u.every((e) => !e.hasTodos) &&
                                  (e.todos?.length ?? 0) > 0 &&
                                  r(
                                      {
                                          kind: "legacyTodos",
                                          key: `${e.render_id}:todos`,
                                          message: e,
                                          groupStart: !1,
                                          checklistSuperseded: t,
                                      },
                                      { actor: null, boundary: void 0 },
                                  ),
                            (a.showsClosingMessage && !m) ||
                                null != e.proposal ||
                                (null != e.clarification && !n) ||
                                null != e.restoreProposal ||
                                null != e.publishScheduleProposal ||
                                (!i &&
                                    (null != e.ideas ||
                                        null != e.publishCta ||
                                        null != e.secretRequest ||
                                        null != e.settingsRequest)) ||
                                "standalone" === a.attachmentsHost)
                        ) {
                            let t = `${e.render_id}:closing`;
                            r(
                                {
                                    kind: "closing",
                                    key: t,
                                    message: e,
                                    groupStart: !1,
                                    active: i,
                                    attachmentsHost: a.attachmentsHost,
                                    content: a.closingContent,
                                    sideReply: "side_reply" === e.kind,
                                },
                                {
                                    actor: "assistant",
                                    boundary: t,
                                    separate: null != e.proposal || null != e.clarification || "side_reply" === e.kind,
                                },
                            );
                        }
                        return l;
                    })(r, e, i);
                    (oW.set(r, { superseded: e, liveCard: i, planned: s }), n.push(...s));
                }
                let r = (function (e) {
                    let t,
                        n,
                        l = [],
                        r = null,
                        i = !1,
                        a = !1;
                    for (let s of e) {
                        if (null == s.actor) {
                            (l.push(!1), (r = null), (t = void 0), (i = !1), (a = !1), (n = void 0));
                            continue;
                        }
                        let e = !i || r !== s.actor || t !== s.authorId || s.boundary !== n || !0 === s.separate || a;
                        (e && ((r = s.actor), (t = s.authorId), (i = !0), (a = !0 === s.separate), (n = s.boundary)),
                            l.push(e));
                    }
                    return l;
                })(n.map((e) => e.groupable));
                return n.map((e, t) => ({ ...e.row, groupStart: r[t] ?? !0 }));
            })(
                ((e = (function (e, t) {
                    for (let n = e.length - 1; n >= 0; n--) {
                        let l = e[n].publishCta;
                        if (null != l) return aC(l, t) ? e[n].id : null;
                    }
                    return null;
                })(n, M)),
                n.every((t) => null == t.publishCta || t.id === e)
                    ? n
                    : n.map((t) => {
                          if (null == t.publishCta || t.id === e) return t;
                          let n = aE.get(t);
                          return (null == n && ((n = { ...t, publishCta: null }), aE.set(t, n)), n);
                      })),
                m,
            );
        }, [n, M, m]),
        $ = a.useMemo(() => L.map((e) => e.key), [L]),
        [q, D] = a.useState(null),
        F = (function (e, t, n) {
            if (null == t) return oX(e, e.length - 60, e.length);
            let l = null == t.endKey,
                r = l ? e.length : oQ(e, t.endKey, t.end - 1) + 1,
                i = oQ(e, t.startKey, t.start);
            return (l && n && r - i > 120 && (i = r - 60), oX(e, i, r));
        })($, q, x),
        O = a.useRef(F),
        G = a.useRef($),
        z = a.useRef(L),
        U = a.useRef(null),
        B = a.useRef(null),
        K = a.useRef(new Set()),
        H = a.useRef(null),
        V = a.useRef(!1),
        W = a.useCallback(() => {
            let e = g.current?.getScrollerNode(),
                t = V.current ? oY(w.current) : null;
            if (null == e || null == t) return;
            let n = new DOMMatrixReadOnly(getComputedStyle(t).transform).m42,
                l = t.getBoundingClientRect().top - n - e.getBoundingClientRect().top - 8;
            Math.abs(l) >= 1 && (e.scrollTop += l);
        }, [g]);
    a.useLayoutEffect(() => {
        let e = g.current?.getScrollerNode();
        if (null == e) return;
        let t = () => {
            V.current = !1;
        };
        for (let n of oZ) e.addEventListener(n, t, { passive: !0 });
        return () => {
            for (let n of oZ) e.removeEventListener(n, t);
        };
    }, [g]);
    let X = a.useCallback(() => {
            let e = g.current?.getScrollerNode(),
                t = w.current;
            if (null == e || null == t) return;
            let n = e.getBoundingClientRect().top,
                l = t.querySelectorAll("[data-conjure-row-key]"),
                r = 0,
                i = l.length - 1,
                a = null;
            for (; r <= i;) {
                let e = (r + i) >> 1;
                l[e].getBoundingClientRect().bottom > n ? ((a = l[e]), (i = e - 1)) : (r = e + 1);
            }
            let s = a?.dataset.conjureRowKey;
            U.current = null != a && null != s ? { key: s, offset: a.getBoundingClientRect().top - n } : null;
        }, [g]),
        Q = a.useCallback(() => {
            let e = g.current?.getScrollerNode();
            if (null == e) return;
            let n = (function (e, t, n) {
                let { nearTop: l, nearBottom: r, pinned: i } = n;
                if (r && null != t.endKey) {
                    let n;
                    return ((n = Math.min(e.length, t.end + 30)), oX(e, Math.max(t.start, n - 120), n));
                }
                if (!l) return null;
                if (0 === t.start) return "older";
                if (!i && !r) {
                    let n, l;
                    return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), oX(e, n, l));
                }
                let a = Math.max(t.start - 30, t.end - 120);
                return a < t.start ? oX(e, a, t.end) : null;
            })(G.current, O.current, {
                nearTop: e.scrollTop < 600,
                nearBottom: e.scrollHeight - e.clientHeight - e.scrollTop < 600,
                pinned: p.current,
            });
            "older" === n ? (0, eO.P6)(t) : null != n && D(n);
        }, [g, p, t]);
    a.useImperativeHandle(
        y,
        () => ({
            handleScroll() {
                (X(),
                    D((e) => {
                        let t = O.current;
                        return null != e && e.startKey === t.startKey && e.endKey === t.endKey ? e : t;
                    }),
                    Q());
            },
            recordAnchor: X,
            showLatest(e) {
                ((V.current = !1), (B.current = e ?? null), D(null));
            },
            snapshot() {
                let e = U.current;
                return null == e ? null : { window: O.current, anchor: e };
            },
            restore(e) {
                let { window: t, anchor: n } = e;
                if (!G.current.includes(n.key)) return !1;
                (b(), (U.current = n));
                let l = O.current;
                if (l.startKey === t.startKey && l.endKey === t.endKey) {
                    let e = g.current?.getScrollerNode(),
                        t = w.current?.querySelector(`[data-conjure-row-key="${CSS.escape(n.key)}"]`);
                    null != e &&
                        null != t &&
                        (e.scrollTop += t.getBoundingClientRect().top - e.getBoundingClientRect().top - n.offset);
                } else D(t);
                return !0;
            },
        }),
        [X, Q, b, g],
    );
    let Z = a.useRef(null),
        Y = a.useCallback(
            (e) => {
                var n;
                let l;
                ((Z.current = null), (V.current = !1));
                let r = w.current?.querySelector(`[data-conjure-message="${e}"]`);
                if (null != r) {
                    (b(), D(O.current), r.scrollIntoView({ block: "center", behavior: "smooth" }), _(e));
                    return;
                }
                let i = z.current.findIndex((t) => "user" === t.kind && t.message.id === e);
                if (-1 === i) {
                    (0, eO.P6)(t) && (Z.current = e);
                    return;
                }
                (b(),
                    (B.current = () => {
                        (w.current?.querySelector(`[data-conjure-message="${e}"]`)?.scrollIntoView({ block: "center" }),
                            _(e));
                    }),
                    D(((n = G.current), oX(n, (l = Math.max(0, i - 30)), l + 60))));
            },
            [_, b, t],
        );
    (a.useEffect(() => {
        let e = Z.current;
        null != e && Y(e);
    }, [L, Y]),
        a.useLayoutEffect(() => {
            if (null == A) return;
            let e = A.getBoundingClientRect().height,
                t = new ResizeObserver((t) => {
                    let [n] = t,
                        l = n?.contentRect.height;
                    if (null != l && l !== e) {
                        if (((e = l), p.current)) return void g.current?.scrollToBottom();
                        (W(), X());
                    }
                });
            return (t.observe(A), () => t.disconnect());
        }, [A, W, X, g, p]));
    let J = null == F.endKey;
    (a.useEffect(() => k?.(J), [J, k]),
        a.useLayoutEffect(() => {
            ((O.current = F), (G.current = $), (z.current = L));
        }),
        a.useLayoutEffect(() => {
            let e = g.current?.getScrollerNode(),
                l = w.current,
                r =
                    null !=
                    (function (e, t, n) {
                        if (0 === n.length) return null;
                        let l = n[n.length - 1],
                            r = "assistant" === l.role && null != l.proposal ? l.render_id : null,
                            i = e.current;
                        return (
                            (e.current = { projectId: t, planId: r }),
                            i?.projectId === t && null != r && r !== i.planId ? r : null
                        );
                    })(H, t, n);
            if (null != e && null != l) {
                let t = U.current;
                if (r && p.current && null != oY(l)) (b(), D(O.current), (V.current = !0), W());
                else if (p.current) g.current?.scrollToBottom();
                else if (V.current) W();
                else if (null != t) {
                    let n = Array.from(l.querySelectorAll("[data-conjure-row-key]")).find(
                            (e) => e.dataset.conjureRowKey === t.key,
                        ),
                        r = null == n ? 0 : n.getBoundingClientRect().top - e.getBoundingClientRect().top - t.offset;
                    0 !== r && (e.scrollTop += r);
                }
                let n = B.current;
                ((B.current = null), n?.(), X(), Q());
            }
            K.current = new Set($);
        }, [t, n, L, $, F.start, F.end, g, p, b, W, X, Q]));
    let ee = a.useMemo(() => s8(n), [n]),
        et = a.useMemo(
            () =>
                (function (e) {
                    let t = new Map(),
                        n = null,
                        l = 0;
                    for (let r of e)
                        if ("assistant" === r.role) {
                            if ("plan_implemented" === r.kind) {
                                ((n = null), (l = 0));
                                continue;
                            }
                            null != r.proposal &&
                                (null != n && t.set(n, { version: l, superseded: !0 }),
                                (l += 1),
                                t.set(r.render_id, { version: l, superseded: !1 }),
                                (n = r.render_id));
                        }
                    return t;
                })(n),
            [n],
        ),
        en = a.useMemo(
            () =>
                (function (e) {
                    let t = new Map(),
                        n = new Set();
                    for (let l = e.length - 1; l >= 0; l--) {
                        let r = e[l];
                        if ("user" === r.role) {
                            n.add(r.content.trim());
                            continue;
                        }
                        if (null == r.ideas) continue;
                        let i = new Set();
                        for (let e of r.ideas) n.has(e.implementation_prompt.trim()) && i.add(e.id);
                        t.set(r.render_id, i);
                    }
                    return t;
                })(n),
            [n],
        ),
        el = a.useMemo(
            () =>
                (function (e) {
                    let t = new Map();
                    for (let n of e)
                        "user" !== n.role ||
                            t.has(n.id) ||
                            t.set(n.id, {
                                id: n.id,
                                content: n.content,
                                ...(null != n.user_id ? { userId: n.user_id } : {}),
                                createdAt: n.created_at,
                            });
                    return t;
                })(n),
            [n],
        ),
        er = n.at(-1),
        ei =
            (er?.role !== "assistant" || null == er.awaitingUser || null == er.secretRequest
                ? null
                : (0, tB.BL)(er)
                  ? er.awaitingUser
                  : null) ?? void 0,
        ea = (0, c.bG)([lG.A], () => lG.A.getSettings(t)?.secrets, [t]),
        es = (0, s5.WT)(t),
        eu = a.useMemo(() => (0, lz.Mv)(n, ea), [n, ea]);
    if (0 === n.length) {
        if ("loading" === l)
            return (0, i.jsx)("ol", {
                className: o()(s6.x7, s6.jH),
                "aria-busy": !0,
                children: (0, i.jsx)("li", { className: s6.Ub, children: (0, i.jsx)(j.y, {}) }),
            });
        let e = "unavailable" === l ? T.default.Td4Sf4 : T.default.V1QiNz;
        return (0, i.jsx)("ol", {
            className: s6.x7,
            children: (0, i.jsx)(ut, { role: "assistant", children: (0, i.jsx)(oI, { content: R.intl.string(e) }) }),
        });
    }
    return (0, i.jsx)(ue.Provider, {
        value: K,
        children: (0, i.jsxs)("ol", {
            ref: S,
            className: s6.x7,
            children: [
                L.slice(F.start, F.end).map((e) => {
                    let n = e.message;
                    if ("closing" !== e.kind)
                        return (0, i.jsx)(
                            oK,
                            {
                                row: e,
                                projectId: t,
                                highlighted: "user" === e.kind && C === n.id,
                                currentUserId: "user" === e.kind ? P : void 0,
                            },
                            e.key,
                        );
                    let l = n === er;
                    return (0, i.jsx)(
                        oK,
                        {
                            row: e,
                            projectId: t,
                            highlighted: !1,
                            replyTo: null != n.in_reply_to ? el.get(n.in_reply_to) : void 0,
                            onJumpTo: Y,
                            planVersion: et.get(n.render_id),
                            pickedIdeaIds: en.get(n.render_id),
                            secretRequestAwaiting: l ? ei : void 0,
                            secretRequestStatus: eu.get(n.render_id),
                            settingsFloating: n.id === f,
                            isNewest: l,
                            onPickIdea: r,
                            onApprovePlan: n.render_id === ee ? d : void 0,
                            onRestoreVersion: h,
                        },
                        e.key,
                    );
                }),
                J
                    ? es.map((e) =>
                          (0, i.jsx)(
                              ut,
                              {
                                  role: "assistant",
                                  continuation: !0,
                                  children: (0, i.jsx)(oI, {
                                      groupStart: !1,
                                      content: "",
                                      accessories: (0, i.jsx)(s9.K, { projectId: t, approval: e }),
                                  }),
                              },
                              e.id,
                          ),
                      )
                    : null,
                null != ei && J
                    ? (0, i.jsx)(ut, {
                          role: "assistant",
                          continuation: !0,
                          children: (0, i.jsx)(oI, {
                              groupStart: !1,
                              content: "",
                              accessories: (0, i.jsx)(v.E, {
                                  variant: "body-xs/normal",
                                  color: "text-muted",
                                  children: R.intl.string(T.default.YR8A2v),
                              }),
                          }),
                      })
                    : null,
                J ? (0, i.jsx)(uR, { projectId: t, messages: n, draftHasText: !0 === u, onAskForIdeas: s }) : null,
            ],
        }),
    });
});
var o0 = n(731084),
    o1 = n(336288),
    o2 = n(187447);
function o3(e) {
    let { activity: t, id: n } = e,
        l = (0, tz.j)(),
        { text: r, revealing: s } = oa(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
        u = a.useRef(null),
        c = a.useRef(!0),
        d = a.useRef(0),
        f = a.useCallback(() => {
            let e = u.current,
                t = e?.getScrollerNode();
            if (null != e && null != t) {
                var n, l, r;
                ((n = c.current),
                    (l = e.getDistanceFromBottom()),
                    (r = t.scrollTop < d.current),
                    (c.current = l < 1 || (!r && (n || l < 16))),
                    (d.current = t.scrollTop));
            }
        }, []);
    return (
        a.useLayoutEffect(() => {
            if (!c.current) return;
            let e = u.current;
            e?.scrollToBottom({
                callback: () => {
                    let t = e.getScrollerNode();
                    null != t && (d.current = t.scrollTop);
                },
            });
        }, [r]),
        (0, i.jsx)("div", {
            id: n,
            role: "tooltip",
            className: o2.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, i.jsx)(tF.Ch, {
                ref: u,
                onScroll: f,
                className: o2.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, i.jsx)("div", {
                    className: o()(si.PT, o2.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: iC.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var o4 = n(53659);
function o7(e) {
    let {
            activity: t,
            compacting: n = !1,
            saving: l = !1,
            restoring: r = !1,
            remixing: s = !1,
            recalling: u = !1,
            controlling: c = !1,
            publishPending: d = !1,
            publishing: f = !1,
            spoken: m,
            onSpokenChange: h,
        } = e,
        g = a.useRef(null),
        p = a.useId(),
        [x, j] = a.useState(null),
        b = (0, o0.xu)({
            activity: t,
            compacting: n,
            saving: l,
            restoring: r,
            remixing: s,
            recalling: u,
            controlling: c,
            publishPending: d,
            publishing: f,
        }),
        y = R.intl.string(b),
        k = b === o0.kx["0"],
        [w, A] = a.useState(m ?? y),
        N = (0, tz.j)();
    (l || (0, o0.E4)(y, w) || (!N && !k)) && w !== y && A(y);
    let S = a.useRef(y);
    (a.useEffect(() => {
        S.current = y;
    }, [y]),
        a.useEffect(() => {
            h?.(w);
        }, [w, h]));
    let C = a.useRef(null),
        I = a.useRef(w);
    a.useEffect(() => {
        I.current = w;
    }, [w]);
    let E = a.useRef(k),
        _ = a.useRef(0);
    (a.useEffect(() => {
        ((E.current = k), !k && (0, o0.E8)(I.current) && A(S.current));
    }, [k]),
        a.useEffect(() => {
            if (!N) return;
            let e = 0,
                t = 0;
            function n() {
                E.current
                    ? ((_.current = (0, o0.E8)(I.current) ? _.current + 1 : 0), A((0, o0.Ov)(_.current)))
                    : S.current !== I.current
                      ? A(S.current)
                      : C.current?.play();
            }
            return (
                (e = window.setTimeout(() => {
                    (n(), (t = window.setInterval(n, 2400)));
                }, 1800)),
                () => {
                    (window.clearTimeout(e), window.clearInterval(t));
                }
            );
        }, [N]));
    let M = null != t && "" !== t.text,
        P = t?.session ?? null,
        L = M && null != P && x === P,
        $ = a.useCallback(() => {
            M && null != P && j((e) => (e === P ? null : P));
        }, [M, P]),
        q = a.useCallback(() => j(null), []);
    return (0, i.jsx)(ey.Y, {
        targetElementRef: g,
        position: "top",
        align: "left",
        shouldShow: L,
        onRequestClose: q,
        renderPopout: () => (0, i.jsx)(o3, { id: p, activity: t }),
        children: () =>
            (0, i.jsxs)(tV.D, {
                innerRef: g,
                className: o()(o4.hF, M && o4.Xd),
                "aria-label": R.intl.string(
                    r
                        ? T.default.qqlUiW
                        : b === T.default.j8tmjK
                          ? T.default.j8tmjK
                          : k
                            ? o0.kx["0"]
                            : T.default["Uuj/gh"],
                ),
                "aria-expanded": L,
                "aria-describedby": L ? p : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": R.intl.string(b),
                onClick: $,
                children: [
                    (0, i.jsx)("span", {
                        className: o4.bl,
                        children: (0, i.jsx)(o1.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, i.jsx)("span", {
                        className: o4.xu,
                        "aria-hidden": !!c || !!k || void 0,
                        children: N
                            ? (0, i.jsx)(su.o, {
                                  ref: C,
                                  text: w,
                                  variant: "body-xs/medium",
                                  color: "text-subtle",
                                  duration: 1e3,
                                  delay: null,
                                  className: o4.yE,
                              })
                            : (0, i.jsx)(v.E, {
                                  tag: "span",
                                  variant: "body-xs/medium",
                                  color: "text-subtle",
                                  className: o4.yE,
                                  children: w,
                              }),
                    }),
                ],
            }),
    });
}
let o5 = { second: 1e3, minute: 6e4 };
function o9(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [n, l] = a.useState(() => Date.now());
    return (
        a.useEffect(() => {
            let n;
            if (null == e) return;
            let r = o5[t];
            return (
                !(function t() {
                    let i = Date.now();
                    (l(i), (n = setTimeout(t, r - ((((i - e) % r) + r) % r))));
                })(),
                () => clearTimeout(n)
            );
        }, [e, t]),
        null == e ? void 0 : Math.max(0, n - e)
    );
}
var o8 = n(719374);
function o6(e) {
    let { startedAt: t, variant: n = "body-xs/medium" } = e,
        l = o9(t);
    return (0, i.jsx)(v.E, {
        tag: "span",
        variant: n,
        color: "text-muted",
        "aria-hidden": !0,
        className: o8.$,
        "data-conjure-turn-timer": !0,
        children: (0, rm.C7)(l),
    });
}
function ce(e) {
    let { startedAt: t } = e,
        n = o9(t, "minute");
    return (0, i.jsx)(tZ.A, { role: "timer", children: (0, rm.Us)(n) });
}
var ct = n(885574),
    cn = n(242779),
    cl = n(436804);
function cr(e) {
    return e.toLocaleString();
}
function ci(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, i.jsxs)("div", {
        className: cl.Q$,
        children: [
            (0, i.jsxs)("div", {
                className: cl.mf,
                children: [
                    (0, i.jsx)(v.E, { variant: "body-sm/medium", color: "text-default", children: t }),
                    (0, i.jsxs)(v.E, {
                        variant: "body-sm/medium",
                        color: "text-muted",
                        children: [cr((0, cn.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, i.jsxs)(v.E, {
                tag: "div",
                variant: "body-xs/normal",
                color: "text-muted",
                children: [
                    cr(n.input_tokens),
                    " in \xb7 ",
                    cr(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${cr(n.cache_creation_input_tokens)} cache write \xb7 ${cr(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function ca(e) {
    let { project: t } = e,
        n = (0, cn.wU)(t.compaction),
        l = (0, cn.wU)(t.classifier),
        r = (0, cn.wU)(t.image),
        a = (0, cn.wV)(t.orchestrator, t.codegen),
        s = (0, cn.wV)(a, n);
    return (0, i.jsxs)("div", {
        className: cl.si,
        role: "dialog",
        "aria-label": R.intl.string(T.default.p5EGzq),
        children: [
            (0, i.jsx)("div", {
                className: cl.Q$,
                children: (0, i.jsxs)("div", {
                    className: cl.mf,
                    children: [
                        (0, i.jsxs)(v.E, {
                            variant: "body-md/semibold",
                            color: "text-default",
                            children: [cr((0, cn.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, i.jsxs)(v.E, {
                            variant: "body-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(ci, { label: R.intl.string(T.default["9Sj3SX"]), usage: a }),
            (0, i.jsx)(ci, { label: R.intl.string(T.default.ANCEo3), usage: n }),
            (0, i.jsx)(ci, { label: R.intl.string(T.default.ugL6D4), usage: l, cached: !1 }),
            (0, i.jsx)(ci, { label: R.intl.string(T.default.DHr5On), usage: r, cached: !1 }),
            (0, i.jsxs)("div", {
                className: cl.mf,
                children: [
                    (0, i.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: R.intl.string(T.default["8OUg09"]),
                    }),
                    (0, i.jsx)(v.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        children: 0 === (0, cn.sj)(s) ? "\u2014" : `${Math.round(100 * (0, cn.CA)(s))}%`,
                    }),
                ],
            }),
        ],
    });
}
function cs(e) {
    let { project: t } = e,
        n = a.useRef(null);
    return (0, i.jsx)(ey.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, i.jsx)(ca, { project: t }),
        children: (e) =>
            (0, i.jsx)(tV.D, {
                innerRef: n,
                className: cl.Y$,
                "aria-label": R.intl.string(T.default.Z96gxQ),
                ...e,
                children: (0, i.jsx)(ct.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var cu = n(990250);
function co(e) {
    let { queued: t } = e,
        n = R.intl.string(T.default.hzgPbZ);
    return (0, i.jsxs)("div", {
        className: cu.nd,
        role: "dialog",
        "aria-label": n,
        "data-testid": "conjure-queued-card",
        children: [
            (0, i.jsxs)("div", {
                className: cu.wx,
                children: [
                    (0, i.jsx)(v.E, { variant: "body-md/semibold", color: "text-default", children: n }),
                    (0, i.jsx)(v.E, { variant: "body-xs/normal", color: "text-muted", children: t.length }),
                ],
            }),
            (0, i.jsx)(tF.Ch, {
                className: cu.XG,
                children: (0, i.jsx)("ul", {
                    className: cu.p_,
                    children: t.map((e) => (0, i.jsx)(cc, { content: e.content }, e.render_id)),
                }),
            }),
        ],
    });
}
function cc(e) {
    let { content: t } = e,
        n = a.useRef(null),
        [l, r] = a.useState(!1),
        [s, u] = a.useState(!1);
    return (a.useLayoutEffect(() => {
        let e = n.current;
        null == e || l || u(e.scrollHeight > e.clientHeight);
    }, [t, l]),
    "" === t)
        ? (0, i.jsx)("li", {
              className: cu.AS,
              children: (0, i.jsx)(v.E, {
                  variant: "body-sm/normal",
                  color: "text-muted",
                  children: R.intl.string(T.default["07XimM"]),
              }),
          })
        : (0, i.jsxs)("li", {
              className: cu.AS,
              children: [
                  (0, i.jsx)(v.E, {
                      ref: n,
                      variant: "body-sm/normal",
                      color: "text-default",
                      lineClamp: l ? void 0 : 3,
                      className: cu.Qs,
                      children: t,
                  }),
                  s
                      ? (0, i.jsx)(nL.Q, {
                            variant: "secondary",
                            textVariant: "body-xs/medium",
                            text: R.intl.string(l ? T.default.nEMoeN : T.default["W+la29"]),
                            "aria-expanded": l,
                            onClick: () => r((e) => !e),
                        })
                      : null,
              ],
          });
}
function cd(e) {
    let { queued: t, className: n } = e,
        l = a.useRef(null);
    return (0, i.jsx)(ey.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, i.jsx)(co, { queued: t }),
        children: (e) =>
            (0, i.jsx)(tV.D, {
                innerRef: l,
                className: n,
                "data-testid": "conjure-queued-pill",
                ...e,
                children: (0, i.jsx)(v.E, {
                    tag: "span",
                    variant: "body-xs/medium",
                    color: "text-muted",
                    children: R.intl.formatToPlainString(T.default.REnNUn, { count: t.length }),
                }),
            }),
    });
}
var cf = n(997421);
function cm(e) {
    let {
            projectId: t,
            thinking: n,
            turnStartedAt: l,
            restoring: r = !1,
            remixStartedAt: s,
            recalling: u = !1,
            thinkingActivity: d,
            compacting: f,
            saving: m,
            projectUsage: h,
            connState: g,
            queued: p,
        } = e,
        x = (0, O.Zv)(t),
        j = (0, c.bG)([eG.A], () => eG.A.getPublishStatus(t)?.publishing === !0, [t]),
        [b, y] = a.useState(null),
        k = a.useCallback(
            (e) =>
                y(
                    (0, o0.E8)(e) || e === R.intl.string(T.default.mKK6wB) || e === R.intl.string(T.default.j8tmjK)
                        ? null
                        : e,
                ),
            [],
        ),
        w = null == h ? null : (0, o0.uc)(h),
        A = null != s,
        N = s ?? (n ? l : void 0),
        S = n || r || A || !0 === m;
    return (0, i.jsxs)("div", {
        className: cf.jf,
        children: [
            (0, i.jsxs)("div", {
                className: cf.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    S || u || x || j
                        ? (0, i.jsx)(o7, {
                              activity: d,
                              compacting: f,
                              saving: m,
                              restoring: r,
                              remixing: A,
                              recalling: u,
                              controlling: x,
                              publishPending: j && S,
                              publishing: j,
                              spoken: b,
                              onSpokenChange: k,
                          })
                        : null,
                    null != N ? (0, i.jsx)(o6, { startedAt: N }) : null,
                ],
            }),
            null != N ? (0, i.jsx)(ce, { startedAt: N }) : null,
            0 === p.length ? null : (0, i.jsx)(cd, { queued: p, className: o()(cf.BP, cf.A1) }),
            null == h || null == w
                ? null
                : (0, i.jsxs)("span", {
                      className: cf.BP,
                      children: [
                          (0, i.jsx)(v.E, {
                              tag: "span",
                              variant: "body-xs/medium",
                              color: "text-muted",
                              "aria-label": w.aria,
                              children: w.text,
                          }),
                          (0, i.jsx)(cs, { project: h }),
                      ],
                  }),
            "open" === g
                ? null
                : (0, i.jsx)(v.E, {
                      tag: "span",
                      variant: "body-xs/medium",
                      color: "failed" === g ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": R.intl.formatToPlainString(T.default["tCo+ZM"], { status: (0, o0.Db)(g) }),
                      "data-conjure-conn": !0,
                      "data-state": g,
                      className: cf.XF,
                      children: (0, o0.Db)(g),
                  }),
        ],
    });
}
var ch = n(698638),
    cg = n(608711);
let cp = [R.intl.string(T.default["9w+Chc"]), R.intl.string(T.default.WAvmdq), R.intl.string(T.default.SKsrzl)];
function cx(e) {
    var t, n;
    let l,
        r,
        s,
        u,
        o,
        {
            projectId: f,
            restoreState: m,
            onRestoreVersion: h,
            onImportProject: g,
            escapeScopeRef: p,
            visible: x = !0,
        } = e,
        j = (0, c.bG)([lE.A], () => lE.A.getMessages(f), [f]),
        b = (0, c.bG)([eO.Ay], () => eO.Ay.getConnState(f), [f]),
        y = (0, c.bG)([lE.A], () => lE.A.getProjectUsage(f), [f]),
        k = (0, c.bG)([lE.A], () => lE.A.getThinkingActivity(f), [f]),
        w = (0, c.bG)([lE.A], () => lE.A.isCompacting(f), [f]),
        A = (0, c.bG)([lE.A], () => lE.A.isSaving(f), [f]),
        N = lM(f),
        S = (0, c.bG)([lN.A], () => lN.A.getModelSettings(f), [f]),
        C = a.useRef(null),
        I = a.useRef(null),
        _ = a.useRef(null),
        M = a.useRef(null),
        {
            stickToBottomRef: P,
            pinned: L,
            atBottom: $,
            unpin: q,
            releasePinHold: D,
            showsLatest: F,
            showsLatestRef: O,
            handleShowsLatestChange: z,
            updatePin: U,
        } = (function (e) {
            let t = a.useRef(!0),
                [n, l] = a.useState(!0),
                [r, i] = a.useState(!0),
                s = a.useRef(!1),
                u = a.useCallback(() => {
                    ((s.current = !0), (t.current = !1), l(!1));
                }, []),
                o = a.useCallback(() => {
                    s.current = !1;
                }, []),
                [c, d] = a.useState(!0),
                f = a.useRef(!0),
                m = a.useCallback((e) => {
                    ((f.current = e), d(e));
                }, []);
            a.useLayoutEffect(() => {
                let t = e.current?.getScrollerNode();
                if (null != t) {
                    for (let e of oZ) t.addEventListener(e, o, { passive: !0 });
                    return () => {
                        for (let e of oZ) t.removeEventListener(e, o);
                    };
                }
            }, [e, o]);
            let h = a.useCallback(() => {
                let n = e.current;
                if (null == n) return;
                let r = n.getDistanceFromBottom(),
                    a = !s.current && r < 32 && f.current;
                t.current = a;
                let u = r > 1 || !f.current;
                (i((e) => (!u === e ? e : !u)), l((e) => (e === a ? e : a)));
            }, [e]);
            return {
                stickToBottomRef: t,
                pinned: n,
                atBottom: r,
                unpin: u,
                releasePinHold: o,
                showsLatest: c,
                showsLatestRef: f,
                handleShowsLatestChange: m,
                updatePin: h,
            };
        })(I),
        B = a.useCallback(() => {
            function e() {
                let e = C.current;
                if (null == e) return;
                let t = e.querySelector('[data-conjure-turn-status="true"][data-live="true"]'),
                    n = e.querySelectorAll('[data-conjure-turn-status="true"]'),
                    l = t ?? n[n.length - 1];
                if (null == l) return;
                let r = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
                l.scrollIntoView({ block: "center", behavior: r ? "auto" : "smooth" });
            }
            (D(), O.current ? e() : _.current?.showLatest(e));
        }, [D, O]),
        K = a.useCallback(() => {
            (U(), _.current?.handleScroll());
            let e = M.current;
            null != e && (e.position = P.current ? null : (_.current?.snapshot() ?? null));
        }, [U, P]),
        H = a.useContext(X.A) === f;
    a.useLayoutEffect(() => {
        if (!H) return;
        let e = { position: Z.A.getProjectView(f).chatScroll };
        return ((M.current = e), () => (0, Q.g7)(f, { chatScroll: e.position }));
    }, [H, f]);
    let V = a.useRef(!H);
    (a.useLayoutEffect(() => {
        if (V.current || 0 === j.length) return;
        V.current = !0;
        let e = Z.A.getProjectView(f).chatScroll;
        null != e && _.current?.restore(e) !== !0 && null != M.current && (M.current.position = null);
    }, [j, f]),
        a.useLayoutEffect(() => {
            let e = C.current;
            if (null == e) return;
            let t = I.current?.getScrollerNode(),
                n = e.getBoundingClientRect().width,
                l = t?.getBoundingClientRect().height,
                r = new ResizeObserver((t) => {
                    let r = !1;
                    for (let i of t)
                        if (i.target === e) {
                            let e = i.contentRect.width;
                            if (e === n) continue;
                            ((n = e), (r = !0));
                        } else {
                            let e = i.contentRect.height;
                            if (e === l) continue;
                            ((l = e), (r = !0));
                        }
                    r && (P.current ? I.current?.scrollToBottom() : _.current?.recordAnchor());
                });
            return (r.observe(e), null != t && r.observe(t), () => r.disconnect());
        }, [P]),
        a.useEffect(() => {
            (0, eO.ensureConnection)(f);
        }, [f]),
        (0, re.E1)(f, (0, tz.j)()));
    let W = (0, G.rt)(f),
        Y = (function (e) {
            let t = (0, eU.Ay)(e),
                n = t?.guildId ?? null,
                l = (0, c.bG)([n1.A], () => (null == n ? null : (n1.A.getGuild(n)?.name ?? null))),
                [r, i] = a.useState(null),
                s = t?.missingSurface ?? null;
            return null == s || r === e
                ? null
                : {
                      message: R.intl.format("channel" === s ? T.default["1cm4fj"] : T.default.Lm7IRC, {
                          server: l ?? "",
                      }),
                      onDismiss: () => i(e),
                  };
        })(f),
        J = (function (e) {
            let t = (0, c.bG)([l7.A], () => l7.A.getSpendLimit(e), [e]);
            if (null == t) return null;
            let n = null == t.limitUsd ? null : l5.format(t.limitUsd);
            if ("blocked" === t.state) {
                let e = l4.A.getSubmitRequestURL();
                return {
                    blocked: !0,
                    message:
                        null == n
                            ? R.intl.format(T.default["bw/n4C"], { helpdeskURL: e })
                            : R.intl.format(T.default.GYqJXH, { limit: n, helpdeskURL: e }),
                };
            }
            if (null == t.limitUsd || null == n || t.limitUsd <= 0) return null;
            let l = Math.min(99, Math.floor((t.spentUsd / t.limitUsd) * 100));
            return { blocked: !1, message: R.intl.formatToPlainString(T.default.GHgG2B, { percent: l, limit: n }) };
        })(f),
        ee =
            ((l = (0, c.bG)([lC.A], () => lC.A.getFailure(f))),
            (r = a.useCallback(() => (0, lI.CM)(f), [f])),
            null == l
                ? null
                : {
                      message: R.intl.format(T.default.Up6Ssw, { reason: l }),
                      retry: { text: R.intl.string(T.default["ywA+ET"]), onClick: r },
                  }),
        et = (0, c.bG)([lC.A], () => lC.A.getSetupStartedAt(f), [f]),
        en = a.useCallback(
            (e, t) => {
                (0, eO.dv)(f, e, t);
            },
            [f],
        ),
        el = a.useCallback(
            (e, t, n) => {
                let l = n ?? en;
                0 === W.annotations.length
                    ? l(e, t)
                    : (l((0, lA.BL)({ annotations: W.annotations, metaComment: e, context: W.context }), t),
                      (0, G.mB)(f));
            },
            [W, en, f],
        ),
        er = a.useCallback(() => {
            (!(function (e) {
                let t = !1;
                for (let [n, l] of na)
                    l.projectId === e &&
                        (l.job?.cancel(),
                        (0, eO.re)(e, l.nonce),
                        (function (e) {
                            let t = na.get(e);
                            (na.delete(e), nu(e, null), t?.thumbUrl != null && URL.revokeObjectURL(t.thumbUrl));
                        })(n),
                        (t = !0));
                return t;
            })(f) ||
                lE.A.isThinking(f)) &&
                (0, eO.fu)(f);
        }, [f]),
        ei = a.useCallback((e) => (0, nc.RQ)(f, e.implementation_prompt), [f]),
        [ea, es] = (function (e) {
            let [t, n] = a.useState(() => rn(e)),
                [l, r] = a.useState(e),
                i = l !== e,
                s = i ? rn(e) : t;
            return (i && (r(e), n(s)), [s, n]);
        })(f),
        eu = a.useCallback(() => en(R.intl.string(T.default["t5CN3+"])), [en]),
        eo = a.useCallback((e, t, n) => (0, nc.RQ)(f, e, { clarificationAnswers: t, attachments: n }), [f]),
        ec = a.useCallback((e) => (0, lS.X)(f, e), [f]),
        ed = a.useCallback((e) => (0, e0.vX)(f, e), [f]),
        ef = a.useCallback((e) => (0, e4.gn)(f, "chat", Array.from(e), ed), [f, ed]),
        em = a.useCallback(() => (0, nc.RQ)(f, R.intl.string(T.default.Zc7gML)), [f]),
        eh = m?.status === "restoring",
        eg = "open" === b && !eh,
        ep = j[j.length - 1],
        ex = null != ep && "assistant" === ep.role && null != ep.proposal,
        [ev, ej] = a.useState(null),
        eb = a.useMemo(
            () =>
                (function (e) {
                    for (let t = e.length - 1; t >= 0; t--) {
                        let n = e[t];
                        if (null == n.clarification || 0 === n.clarification.questions.length) continue;
                        let l = n.clarificationAt ?? n.settled_at;
                        for (let n = t + 1; n < e.length; n++)
                            if ("user" === e[n].role && (null == l || e[n].created_at > l)) return null;
                        return n.clarification;
                    }
                    return null;
                })(j),
            [j],
        ),
        ey = null != eb && eb.id !== ev ? eb : null,
        ek = a.useCallback(() => {
            null != ey && ej(ey.id);
        }, [ey]),
        [ew, eA] = a.useState(null),
        eN = (function (e) {
            let [t, n] = a.useState(null),
                l = a.useRef(null),
                r = a.useCallback((e) => {
                    ((l.current = e), n(e));
                }, []),
                i = t?.projectId === e ? t : null,
                s = a.useCallback(
                    (t, n) =>
                        r({
                            projectId: e,
                            request: {
                                id: `manual:${e}:${Date.now()}`,
                                summary: R.intl.string(T.default["o2++BO"]),
                                prompt: t.trim().slice(0, 4e3),
                            },
                            clearComposer: n,
                        }),
                    [e, r],
                ),
                u = a.useCallback(() => r(null), [r]),
                o = a.useCallback(
                    (e) => {
                        let t = l.current;
                        t?.request.id === e && (t.clearComposer(), r(null));
                    },
                    [r],
                );
            return { request: i?.request ?? null, open: s, close: u, sent: o };
        })(f),
        eS = ep?.appBuildRequest != null && (0, tB.BL)(ep) && ep.appBuildRequest.id !== ew ? ep.appBuildRequest : null,
        eC = eN.request ?? (null == ey ? eS : null),
        eI = null == eN.request ? ey : null,
        eE = null != eC && eC === eN.request,
        { close: e_, sent: eM } = eN,
        eR = eN.request?.id,
        eP = a.useCallback(() => {
            eE ? e_() : null != eC && eA(eC.id);
        }, [eC, eE, e_]),
        eL = a.useCallback(
            (e) => {
                (null != eR && eM(eR),
                    (0, E.P0)({
                        text: R.intl.formatToPlainString(T.default.RZO35O, { names: e.map((e) => e.name).join(", ") }),
                        variant: "success",
                    }));
            },
            [eR, eM],
        ),
        e$ = (0, c.bG)([lG.A], () => lG.A.getSettings(f), [f]),
        [eq, eD] = a.useState(null),
        eF = lX(),
        eG =
            null != ep &&
            ((t = ep.id),
            (s = (0, lz.Mv)(j, e$?.secrets)),
            (u = lQ(j)),
            j.some(
                (e) =>
                    "assistant" === e.role &&
                    e.id !== t &&
                    !!(0, tB.BL)(e) &&
                    ((null != e.secretRequest && "open" === s.get(e.render_id)) ||
                        (null != e.settingsRequest && !u.has(e.id) && !lZ(e.settingsRequest, e$, eF.has(e.id)))),
            )),
        ez =
            null != ep &&
            "assistant" === ep.role &&
            null != ep.settingsRequest &&
            null == ep.secretRequest &&
            (0, tB.BL)(ep) &&
            ep.id !== eq &&
            ((n = ep.settingsRequest),
            (o = n.keys ?? []),
            null != e$ &&
                0 !== o.length &&
                o.every((e) => {
                    let t = e$.schema.find((t) => t.key === e);
                    return null != t && lU.has(t.type);
                })) &&
            lB(ep.settingsRequest, e$) &&
            !eG
                ? ep
                : null,
        eB = null == eN.request ? ez : null,
        eK = eB?.settingsRequest ?? null,
        eH = a.useCallback(() => {
            null != ez && eD(ez.id);
        }, [ez]),
        eV = null != eK,
        [eX, eQ] = a.useState(null),
        eZ = eI?.id ?? eC?.id ?? eB?.id ?? (N ? "scope-setup" : void 0),
        eJ = null != ey || null != eC || null != ez || N;
    a.useLayoutEffect(() => {
        let e = I.current?.getScrollerNode(),
            t = eX?.firstElementChild;
        if (null == eX || null == e || !(0, eY.vq)(t, HTMLElement) || null == eZ) return;
        function n() {
            P.current && I.current?.scrollToBottom();
        }
        let l = new ResizeObserver(() => {
            let l = e.getBoundingClientRect().bottom - eX.getBoundingClientRect().top - t.offsetTop;
            (e.style.setProperty("--custom-conjure-docked-card-inset", `${Math.max(0, Math.round(l))}px`), n());
        });
        return (
            l.observe(t),
            l.observe(e, { box: "border-box" }),
            () => {
                (l.disconnect(), e.style.removeProperty("--custom-conjure-docked-card-inset"), n());
            }
        );
    }, [eX, eZ, I, P]);
    let e2 = (0, c.bG)([lE.A], () => lE.A.hasLoadedHistory(f), [f]),
        e3 = (function (e) {
            let t = lM(e),
                n = (0, c.bG)([eT.Ay], () => null != eT.Ay.getProject(e), [e]),
                l = (0, c.bG)([lE.A], () => lE.A.hasLoadedHistory(e), [e]),
                r = (0, c.bG)([lE.A], () => lE.A.getMessages(e), [e]),
                i = (0, c.bG)([eO.Ay], () => eO.Ay.getConnState(e), [e]),
                [s, u] = a.useState(0);
            return (
                a.useLayoutEffect(() => {
                    (0, l_.Iy)(e, () => u((e) => e + 1));
                }, [e, n, l, r, t, i]),
                s
            );
        })(f),
        e7 = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: e2,
            historyUnavailable: (0, c.bG)([lE.A], () => lE.A.isHistoryUnavailable(f), [f]),
            connState: b,
        }),
        e5 = "loading" === e7 && 0 === j.length,
        e9 = a.useMemo(() => {
            let e = 0;
            for (let t = 0; t < f.length; t++) e = (31 * e + f.charCodeAt(t)) % 0x7fffffff;
            return cp[e % cp.length];
        }, [f]),
        e8 = ex ? R.intl.string(T.default.Zc7gML) : "greeting" === e7 && 0 === j.length ? e9 : null,
        e6 = a.useMemo(() => {
            for (let e = j.length - 1; e >= 0; e--) {
                let t = j[e];
                if ("assistant" === t.role && !(0, tB.BL)(t)) return t;
            }
        }, [j]),
        te = null != e6,
        tt = a.useMemo(() => j.filter((e) => "user" === e.role && "queued" === e.disposition), [j]),
        tl = null != e6 ? (0, l9.S)(e6) : void 0,
        tr = ex && eg ? em : void 0,
        ti = a.useCallback(() => (0, nc.RQ)(f, R.intl.string(T.default.EMgIuY)), [f]),
        [ta, ts] = a.useState(null),
        [tu, to] = a.useState(te);
    (tu !== te && (to(te), te || ts(null)),
        a.useEffect(() => {
            if (!te) return;
            let e = I.current?.getScrollerNode(),
                t = e?.querySelector('[data-conjure-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let n = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? ts(null)
                        : ts(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (n.observe(t), () => n.disconnect());
        }, [te, e6?.steps, F]));
    let tc = F ? ta : "bottom",
        td = a.useMemo(() => (null != e6 ? (0, tH.b9)(e6.steps) : ""), [e6]),
        tf = a.useMemo(() => (null != e6 ? ((0, tU.lt)(e6.steps) ?? e6.todos) : void 0), [e6]),
        tm = e6?.provisionalTodo,
        th = null != e6 && tK(e6),
        tg = a.useMemo(() => {
            var e;
            return null != e6 ? ((e = e6.steps), rv((0, tU.Jf)(e, !0).tasks)) : void 0;
        }, [e6]);
    return (0, i.jsxs)("section", {
        ref: C,
        "data-conjure-chat": !0,
        className: cg.TE,
        children: [
            eg
                ? (0, i.jsx)(tG.A, {
                      title: R.intl.string(T.default.gy7byi),
                      description: R.intl.string(T.default["dkv/WO"]),
                      icons: ch.ir,
                      onDrop: ef,
                  })
                : null,
            (0, i.jsx)(nl, {
                onJumpToActivity: B,
                line: td,
                placement: te && "top" === tc ? "top" : null,
                todos: tf,
                todosLive: th,
                provisionalTodo: tm,
                agents: tg,
            }),
            (0, i.jsxs)("div", {
                className: cg.JX,
                children: [
                    (0, i.jsx)(tF.Ch, {
                        ref: I,
                        onScroll: K,
                        scrollbarGutter: e5 ? "both-edges" : "stable",
                        className: [cg.N$, $ ? null : cg.hB, eV ? cg.J9 : null].filter(Boolean).join(" "),
                        children: (0, i.jsx)(l8.Fu.Provider, {
                            value: f,
                            children: (0, i.jsx)(oJ, {
                                projectId: f,
                                messages: j,
                                emptyState: e7,
                                floatingSettingsMessageId: ez?.id,
                                liveClarificationId: eI?.id,
                                onPickIdea: eg ? ei : void 0,
                                onAskForIdeas: eg ? eu : void 0,
                                draftHasText: ea,
                                onApprovePlan: eg ? ti : void 0,
                                onRestoreVersion: eh || te ? void 0 : h,
                                scrollerRef: I,
                                stickToBottomRef: P,
                                pinned: L,
                                onUnpin: q,
                                handleRef: _,
                                onShowsLatestChange: z,
                            }),
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: cg.NJ,
                        children: (0, i.jsx)(cm, {
                            projectId: f,
                            thinking: te,
                            turnStartedAt: tl,
                            restoring: eh,
                            remixStartedAt: et,
                            recalling: e5,
                            thinkingActivity: k,
                            compacting: w,
                            saving: A,
                            projectUsage: y,
                            connState: b,
                            queued: tt,
                        }),
                    }),
                    N
                        ? (0, i.jsx)("div", { ref: eQ, className: cg.B5, children: (0, i.jsx)(lF, { projectId: f }) })
                        : null,
                    null == eI
                        ? null
                        : (0, i.jsx)("div", {
                              ref: eQ,
                              className: eV ? `${cg.B5} ${cg.J9}` : cg.B5,
                              children:
                                  null != eI.install_scope_switch
                                      ? (0, i.jsx)(
                                            lO,
                                            {
                                                projectId: f,
                                                clarification: eI,
                                                offer: eI.install_scope_switch,
                                                onKept: ek,
                                            },
                                            eI.id,
                                        )
                                      : (0, i.jsx)(
                                            lw,
                                            {
                                                projectId: f,
                                                clarification: eI,
                                                onSubmit: eg ? eo : void 0,
                                                onDismiss: ek,
                                            },
                                            eI.id,
                                        ),
                          }),
                    null == eC
                        ? null
                        : (0, i.jsx)("div", {
                              ref: eQ,
                              className: cg.B5,
                              children: (0, i.jsx)(
                                  nj,
                                  { projectId: f, request: eC, canSend: eg, onDismiss: eP, onSent: eE ? eL : void 0 },
                                  eC.id,
                              ),
                          }),
                    null == eK
                        ? null
                        : (0, i.jsx)("div", {
                              ref: null == eI && null == eC ? eQ : void 0,
                              className: cg.B5,
                              children: (0, i.jsx)(
                                  l3,
                                  { askId: eB?.id, projectId: f, request: eK, onDismiss: eH },
                                  eB?.id,
                              ),
                          }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: cg.Jx,
                children: [
                    (0, i.jsx)(nl, {
                        onJumpToActivity: B,
                        line: td,
                        placement: te && "bottom" === tc ? "bottom" : null,
                        todos: tf,
                        todosLive: th,
                        provisionalTodo: tm,
                        agents: tg,
                    }),
                    0 === W.annotations.length
                        ? null
                        : (0, i.jsxs)("div", {
                              className: cg.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, i.jsx)(v.E, {
                                      variant: "body-sm/medium",
                                      color: "text-default",
                                      children: R.intl.formatToPlainString(T.default["7b49dS"], {
                                          count: W.annotations.length,
                                      }),
                                  }),
                                  (0, i.jsx)(v.E, {
                                      variant: "body-xs/normal",
                                      color: "text-muted",
                                      children: R.intl.string(T.default["5zG+CR"]),
                                  }),
                                  (0, i.jsx)(d.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: R.intl.string(T.default["/zOv9+"]),
                                      onClick: () => (0, G.mB)(f),
                                  }),
                              ],
                          }),
                    null == ee
                        ? null
                        : (0, i.jsx)("div", {
                              className: cg.qB,
                              children: (0, i.jsx)(tO.w, {
                                  type: "critical",
                                  role: "alert",
                                  message: ee.message,
                                  action: ee.retry,
                              }),
                          }),
                    null == Y
                        ? null
                        : (0, i.jsxs)("div", {
                              className: cg.Db,
                              children: [
                                  (0, i.jsx)(tO.w, { type: "warning", role: "status", message: Y.message }),
                                  (0, i.jsx)("div", {
                                      className: cg.jU,
                                      children: (0, i.jsx)(e1.m, {
                                          text: R.intl.string(R.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, i.jsx)(tn.K, {
                                              "aria-label": R.intl.string(R.t.WAI6xu),
                                              icon: eW.P,
                                              variant: "color-mix",
                                              size: "md",
                                              onClick: Y.onDismiss,
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                    null == J
                        ? null
                        : (0, i.jsx)("div", {
                              className: cg.qB,
                              children: (0, i.jsx)(tO.w, {
                                  type: J.blocked ? "critical" : "warning",
                                  role: J.blocked ? "alert" : "status",
                                  message: J.message,
                              }),
                          }),
                    (0, i.jsx)(
                        s3,
                        {
                            projectId: f,
                            escapeScopeRef: p,
                            canSend: eg,
                            running: te,
                            restoring: eh,
                            onSend: el,
                            hasPendingContext: W.annotations.length > 0,
                            onInterrupt: eg ? er : void 0,
                            onUploadFile: ed,
                            onImport: g,
                            onSendToOtherProjects: eJ ? void 0 : eN.open,
                            onApprove: tr,
                            suggestion: e8,
                            questionOpen: eJ,
                            modelSettings: S,
                            onModelSettingsChange: ec,
                            onDraftHasTextChange: es,
                            inputLocked: N,
                            aiPaused: J?.blocked === !0,
                            visible: x,
                        },
                        e3,
                    ),
                ],
            }),
        ],
    });
}
var cv = n(761508),
    cj = n(209695),
    cb = n(207438),
    cy = n(683438),
    ck = n(721507);
function cw(e, t) {
    return String(e).padStart(t, "0");
}
function cA(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let n = Date.parse(e);
    if (Number.isNaN(n)) return null;
    let l = new Date(n),
        r = `${cw(l.getHours(), 2)}:${cw(l.getMinutes(), 2)}:${cw(l.getSeconds(), 2)}`;
    return "millis" === t ? `${r}.${cw(l.getMilliseconds(), 3)}` : r;
}
var cN = n(667931);
let cS = {
        op: "Operation",
        model: "Model",
        tool: "Tool",
        setup: "Setup",
        worktree: "Git worktree",
        sandbox: "Sandbox",
        build: "Build",
        platform: "Platform",
        other: "Other",
    },
    cC = { running: "Running", ok: "Done", error: "Failed" };
function cI(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function cE(e) {
    var t;
    return (t = Math.round(e)) < 1e3 ? `${t}ms` : `${(t / 1e3).toFixed(1)}s`;
}
function c_(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function cM(e) {
    return cE(e.count > 1 ? e.totalMs : e.end - e.start);
}
let cT = ["Arguments", "Result", "Usage", "Details"];
function cR(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function cP(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function cL(e) {
    let t = (0, cN.bM)(e)?.end;
    return null != t ? `${(t / 1e3).toFixed(2)}s` : (0, cN.lp)(e) ? "interrupted" : "still running";
}
function c$(e) {
    return [cA(new Date(e.started_at).toISOString()) ?? "", c_(e.spans.length), (0, cN.Sj)((0, cN.bM)(e)?.attrs)]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function cq(e) {
    let t = (0, cN.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let r of e.spans) {
        let { service: e, category: i } = (0, cN.N5)(r);
        (n.set(i, (n.get(i) ?? 0) + (t.get(r.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += cD(r, "in")),
                (l.output += cD(r, "out")),
                (l.cacheRead += cD(r, "cache_read")),
                (l.cacheWrite += cD(r, "cache_write")),
                (l.costUsd += cD(r, "cost_usd"))));
    }
    let r = cN.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: r, busyMs: r.reduce((e, t) => e + t.ms, 0), model: l };
}
function cD(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
var cF = n(738188),
    cO = n(430993),
    cG = n(364840),
    cz = n(224640),
    cU = n(20742);
let cB = { collapsed: new Set(), revealed: new Set() };
var cK = n(872892);
let cH = {
    op: cK.Q,
    model: cK.i3,
    tool: cK.dH,
    setup: cK.kc,
    worktree: cK.Qx,
    sandbox: cK.QH,
    build: cK.F1,
    platform: cK.Op,
    other: cK.fv,
};
function cV(e) {
    let { stats: t } = e,
        n = (function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      c_(t.calls, "model call"),
                      `${cI(t.input)} in`,
                      `${cI(t.output)} out`,
                      `${cI(t.cacheRead)} cache read`,
                      `${cI(t.cacheWrite)} cache write`,
                      cP(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, i.jsxs)("div", {
        className: cK.M1,
        children: [
            (0, i.jsx)("div", {
                className: cK.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, i.jsx)(
                              "div",
                              {
                                  className: `${cK.DJ} ${cH[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, i.jsx)("div", {
                className: cK.o1,
                children: cN.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${cE(n)}`;
                    return (0, i.jsxs)(
                        "span",
                        {
                            className: cK.fI,
                            children: [
                                (0, i.jsx)("span", { className: `${cK.nf} ${cH[e]}` }),
                                (0, i.jsx)(v.E, { variant: "body-xs/normal", color: "text-muted", children: cS[e] }),
                                null == l
                                    ? null
                                    : (0, i.jsx)(v.E, {
                                          variant: "body-xs/normal",
                                          color: "text-subtle",
                                          tabularNumbers: !0,
                                          children: l,
                                      }),
                            ],
                        },
                        e,
                    );
                }),
            }),
            null == n
                ? null
                : (0, i.jsx)(v.E, {
                      variant: "body-sm/normal",
                      color: "text-default",
                      tabularNumbers: !0,
                      children: n,
                  }),
        ],
    });
}
function cW(e) {
    return `conjure-perf-trace-${e}`;
}
function cX(e) {
    let { start: t, end: n, extent: l, barClass: r, duration: a } = e,
        s = (t / l) * 100,
        u = ((n - t) / l) * 100;
    return (0, i.jsxs)("div", {
        className: cK.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(u) },
        children: [
            (0, i.jsx)("div", { className: r }),
            (0, i.jsx)(v.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${cK.p0} ${s + u > 85 ? cK.EU : cK.jh}`,
                children: a,
            }),
        ],
    });
}
function cQ(e) {
    let { node: t, extent: n, collapsed: l, selected: r, onSelect: s, onToggle: u, onExpandSubtree: o } = e,
        c = t.children.length > 0,
        d = l ? tY._ : eN.a,
        f = a.useCallback(
            (e) => {
                (e.shiftKey && o(t.key), s(t.key));
            },
            [t.key, o, s],
        ),
        m = a.useCallback(
            (e) => {
                (e.stopPropagation(), e.shiftKey ? o(t.key) : u(t.key));
            },
            [t.key, o, u],
        );
    return (0, i.jsxs)(tV.D, {
        tag: "div",
        role: "treeitem",
        id: cW(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !l : void 0,
        "aria-selected": r,
        className: `${cK.$y} ${r ? cK.wQ : ""}`,
        onClick: f,
        children: [
            (0, i.jsxs)("div", {
                className: cK.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, i.jsx)(tV.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: cK.ai,
                              onClick: m,
                              children: (0, i.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, i.jsx)("span", { className: cK.YJ }),
                    (0, i.jsx)(v.E, {
                        variant: "body-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: cK.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, i.jsx)("span", { className: `${cK.nf} ${cH[t.category]}` }),
                    (0, i.jsx)(v.E, {
                        variant: "body-sm/semibold",
                        color: "text-strong",
                        className: cK.eu,
                        children: t.service,
                    }),
                    (0, i.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        className: cK.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, i.jsx)(v.E, {
                              variant: "body-xs/semibold",
                              color: "text-default",
                              className: cK.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, i.jsx)(cF.WarningIcon, { size: "xs", color: "currentColor", className: cK.ik })
                        : null,
                ],
            }),
            (0, i.jsx)(cX, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${cK.M0} ${cK.Nh}`
                    : t.running
                      ? `${cK.M0} ${cK.rF}`
                      : `${cK.M0} ${cH[t.category]}`,
                duration: cM(t),
            }),
        ],
    });
}
function cZ(e) {
    let { row: t, extent: n, selected: l, onReveal: r } = e;
    return (0, i.jsxs)(tV.D, {
        tag: "div",
        role: "treeitem",
        id: cW(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": l,
        className: `${cK.$y} ${l ? cK.wQ : ""}`,
        onClick: () => r(t.parentKey),
        children: [
            (0, i.jsxs)("div", {
                className: cK.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, i.jsx)("span", {
                        className: cK.ai,
                        children: (0, i.jsx)(tY._, { size: "xs", color: "currentColor" }),
                    }),
                    (0, i.jsx)("span", { className: cK.U9 }),
                    (0, i.jsx)("span", { className: `${cK.nf} ${cK.dL}` }),
                    (0, i.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        className: cK.MQ,
                        children: c_(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, i.jsx)(cX, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${cK.M0} ${cK.ab} ${cK.dL}`,
                duration: cE(t.totalMs),
            }),
        ],
    });
}
function cY(e) {
    let { node: t } = e;
    return null == t
        ? (0, i.jsx)(v.E, {
              variant: "body-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, i.jsxs)("div", {
              className: cK._0,
              children: [
                  (0, i.jsxs)("div", {
                      className: cK.TQ,
                      children: [
                          (0, i.jsx)("span", { className: `${cK.nf} ${cH[t.category]}` }),
                          (0, i.jsx)(v.E, { variant: "body-sm/semibold", color: "text-strong", children: t.service }),
                          (0, i.jsx)(v.E, { variant: "body-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [cR("Start", `+${cE(e.start)}`), cR("Duration", cM(e))];
                      e.count > 1
                          ? t.push(
                                cR("Calls", String(e.count)),
                                cR("Longest call", cE(e.maxMs)),
                                cR("Spread over", cE(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(cR("Self time", cE(e.selfMs)));
                      let n = e.span.waits_on;
                      null != n && t.push(cR("Waited on", `${n.span_name} in ${n.trace_name}`));
                      let l = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      (l.length > 0 && t.push(cR("Notes", l.join(", "))),
                          null != e.span.error && t.push(cR("Error", e.span.error)));
                      let r = new Map();
                      for (let [t, n] of Object.entries({
                          ...e.span.attrs,
                          ...(1 === e.count ? e.span.details : null),
                      })) {
                          var i, a;
                          let l =
                                  ((i = e),
                                  "args" === (a = t) || a.startsWith("arg ")
                                      ? "Arguments"
                                      : "result" === a || "result_chars" === a
                                        ? "Result"
                                        : "model" === i.service
                                          ? "Usage"
                                          : "Details"),
                              s = "cost_usd" === t ? cP(Number(n)) : String(n);
                          r.set(l, [...(r.get(l) ?? []), cR(t.replace(/_/g, " "), s)]);
                      }
                      return [
                          { title: null, rows: t },
                          ...cT.flatMap((e) => {
                              let t = r.get(e);
                              return null == t ? [] : [{ title: e, rows: t }];
                          }),
                      ];
                  })(t).map((e) => {
                      let { title: t, rows: n } = e;
                      return (0, i.jsxs)(
                          a.Fragment,
                          {
                              children: [
                                  null == t
                                      ? null
                                      : (0, i.jsx)(v.E, {
                                            variant: "body-xs/semibold",
                                            color: "text-strong",
                                            className: cK.xd,
                                            children: t,
                                        }),
                                  n.map((e) => {
                                      let { label: t, value: n, block: l } = e;
                                      return (0, i.jsxs)(
                                          a.Fragment,
                                          {
                                              children: [
                                                  (0, i.jsx)(v.E, {
                                                      variant: "body-xs/semibold",
                                                      color: "text-muted",
                                                      children: t,
                                                  }),
                                                  l
                                                      ? (0, i.jsx)(v.E, {
                                                            variant: "mono-md/bold",
                                                            color: "text-default",
                                                            selectable: !0,
                                                            className: cK.vl,
                                                            children: n,
                                                        })
                                                      : (0, i.jsx)(v.E, {
                                                            variant: "body-xs/normal",
                                                            color: "text-default",
                                                            tabularNumbers: !0,
                                                            selectable: !0,
                                                            children: n,
                                                        }),
                                              ],
                                          },
                                          t,
                                      );
                                  }),
                              ],
                          },
                          t ?? "timing",
                      );
                  }),
              ],
          });
}
function cJ(e) {
    let { trace: t } = e,
        n = a.useMemo(() => cq(t), [t]);
    return (0, i.jsx)(cV, { stats: n });
}
function c0(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = a.useMemo(() => (null == e ? null : (0, cN.TK)(e)), [e]),
                [n, l] = a.useState(() => (null == t ? cB : (0, cN.hB)(t))),
                [r, i] = a.useState(null),
                s = a.useRef(null == t ? new Set() : (0, cN.x7)(t));
            a.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, cN.x7)(t)), l((n) => (0, cN._0)(n, t, e)));
            }, [t]);
            let u = a.useMemo(() => (null == t ? [] : (0, cN.wu)(t, n)), [t, n]),
                o = a.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, cN.IE)(t, e);
                        null != n && l((e) => (0, cN.TN)(e, n));
                    },
                    [t],
                ),
                c = a.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = a.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, cN.IE)(t, e);
                        null != n && l((e) => (0, cN.H$)(e, n));
                    },
                    [t],
                ),
                f = a.useCallback(() => {
                    null != t && l((0, cN.vH)(t));
                }, [t]),
                m = a.useCallback(() => {
                    null != t && l((0, cN.rQ)(t));
                }, [t]),
                h = a.useCallback(() => {
                    null != t && l((0, cN.hB)(t));
                }, [t]),
                g = u.find((e) => e.key === r);
            return {
                rows: u,
                collapsed: n.collapsed,
                selectedKey: r,
                selected: g?.kind === "node" ? g.node : null,
                toggle: o,
                reveal: c,
                expandSubtree: d,
                select: i,
                expandAll: f,
                collapseAll: m,
                reset: h,
            };
        })(t),
        { rows: l, collapsed: r, selected: s, selectedKey: u, select: o, toggle: c, reveal: f, expandSubtree: m } = n,
        h = (0, cN.dj)(t),
        g = a.useMemo(() => (0, cN.nF)(h), [h]),
        p = g.length > 1 ? ((g[1] - g[0]) / h) * 100 : 100,
        x = a.useCallback(
            (e) => {
                let t,
                    n = l.findIndex((e) => e.key === u),
                    i = l[n];
                if ("ArrowDown" === e.key) t = l[Math.min(l.length - 1, n + 1)];
                else if ("ArrowUp" === e.key) t = l[Math.max(0, n - 1)];
                else if (null == i) return;
                else if ("smaller" === i.kind && ("ArrowRight" === e.key || "Enter" === e.key)) f(i.parentKey);
                else if ("node" === i.kind && "ArrowRight" === e.key && e.shiftKey) m(i.key);
                else if ("node" === i.kind && "ArrowRight" === e.key && r.has(i.key)) c(i.key);
                else {
                    if ("node" !== i.kind || "ArrowLeft" !== e.key || !(i.node.children.length > 0) || r.has(i.key))
                        return;
                    c(i.key);
                }
                (e.preventDefault(),
                    null != t && (o(t.key), document.getElementById(cW(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [r, m, f, l, o, u, c],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(cO.c, {
                children: [
                    (0, i.jsxs)("div", {
                        className: cK.z,
                        children: [
                            (0, i.jsx)(v.E, {
                                variant: "body-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: cL(t),
                            }),
                            (0, i.jsx)(v.E, {
                                variant: "body-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: c$(t),
                            }),
                            null == t.started_by
                                ? null
                                : (0, i.jsx)(v.E, {
                                      variant: "body-sm/normal",
                                      color: "text-muted",
                                      children: `Started by ${t.started_by.trace_name}`,
                                  }),
                            0 === t.dropped
                                ? null
                                : (0, i.jsx)(v.E, {
                                      variant: "body-sm/normal",
                                      color: "text-feedback-warning",
                                      children: `${c_(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, i.jsx)(cJ, { trace: t }),
                    (0, i.jsxs)("div", {
                        className: cK.KE,
                        children: [
                            (0, i.jsx)(d.$, { size: "sm", variant: "secondary", text: "Time sinks", onClick: n.reset }),
                            (0, i.jsx)(d.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Expand all",
                                onClick: n.expandAll,
                            }),
                            (0, i.jsx)(d.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Collapse all",
                                onClick: n.collapseAll,
                            }),
                            (0, i.jsx)(v.E, {
                                variant: "body-xs/normal",
                                color: "text-muted",
                                children: "Shift-click a span to expand everything under it.",
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        role: "tree",
                        tabIndex: 0,
                        "aria-label": "Spans",
                        "aria-activedescendant": null == u ? void 0 : cW(u),
                        className: cK.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(p) },
                        onKeyDown: x,
                        children: [
                            (0, i.jsxs)("div", {
                                className: cK.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: cK.So,
                                        children: (0, i.jsx)(v.E, {
                                            variant: "body-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, i.jsx)("div", {
                                        className: cK.c1,
                                        children: g.map((e) =>
                                            (0, i.jsx)(
                                                v.E,
                                                {
                                                    variant: "body-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${cK.io} ${(e / h) * 100 > 85 ? cK.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / h) * 100),
                                                    },
                                                    children: 0 === e ? "0" : cE(e),
                                                },
                                                e,
                                            ),
                                        ),
                                    }),
                                ],
                            }),
                            l.map((e) =>
                                "node" === e.kind
                                    ? (0, i.jsx)(
                                          cQ,
                                          {
                                              node: e.node,
                                              extent: h,
                                              collapsed: r.has(e.key),
                                              selected: e.key === u,
                                              onSelect: o,
                                              onToggle: c,
                                              onExpandSubtree: m,
                                          },
                                          e.key,
                                      )
                                    : (0, i.jsx)(cZ, { row: e, extent: h, selected: e.key === u, onReveal: f }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(cG.j, { children: (0, i.jsx)(cY, { node: s }) }),
        ],
    });
}
function c1(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: r } = e,
        a = (0, c.bG)([oT.A], () => oT.A.getTimingTrace(l, r), [l, r]),
        s = a?.name ?? "Perf Trace";
    return (0, i.jsxs)(cz.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, i.jsx)(cU.rQ, { title: s }),
            null == a
                ? (0, i.jsx)(cO.c, {
                      children: (0, i.jsx)(v.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, i.jsx)(c0, { trace: a }),
        ],
    });
}
let c2 = { running: cK.Vf, ok: cK.mo, error: cK.Sr };
function c3(e) {
    let { status: t } = e;
    return (0, i.jsx)("span", { className: `${cK.Om} ${c2[t]}`, role: "img", "aria-label": cC[t] });
}
function c4(e, t) {
    (0, K.qf)((n) => (0, i.jsx)(c1, { ...n, projectId: e, traceId: t }));
}
function c7(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        r = a.useCallback(() => c4(t, n.id), [t, n.id]);
    return (0, i.jsxs)(tV.D, {
        className: cK.nM,
        onClick: r,
        children: [
            (0, i.jsxs)("div", {
                className: cK.sU,
                children: [
                    (0, i.jsx)(c3, { status: (0, cN.lQ)(n) }),
                    (0, i.jsx)(v.E, {
                        variant: "body-sm/semibold",
                        color: "text-default",
                        className: cK._k,
                        children: n.name,
                    }),
                    (0, i.jsx)(v.E, {
                        variant: "body-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: cL(n),
                    }),
                ],
            }),
            (0, i.jsx)(v.E, { variant: "body-xs/normal", color: "text-muted", tabularNumbers: !0, children: c$(n) }),
            null == l
                ? null
                : (0, i.jsx)(v.E, { variant: "body-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function c5(e) {
    let { projectId: t, traces: n } = e,
        l = a.useRef(null),
        r = a.useCallback(() => {
            let e = JSON.stringify({
                kind: "conjure.timing_traces",
                version: 1,
                project_id: t,
                exported_at: new Date().toISOString(),
                traces: n,
            });
            (0, ck.o)(new Blob([e], { type: "application/json" }), `conjure-traces-${t}.json`).catch((e) => {
                console.error("[conjure] trace export failed", t, e);
            });
        }, [t, n]);
    return (0, i.jsx)(ey.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: ey.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, i.jsx)(ek.W, {
                "data-menu-migrated": !0,
                navId: `conjure-traces-${t}`,
                "aria-label": "Trace actions",
                onClose: l,
                onSelect: l,
                children: (0, i.jsx)(ew.rX, {
                    children: (0, i.jsx)(ew.Dr, {
                        id: "export",
                        label: "Export as JSON",
                        disabled: 0 === n.length,
                        action: r,
                    }),
                }),
            });
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsx)(tn.K, {
                ...e,
                buttonRef: l,
                icon: iK.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "More",
                "aria-haspopup": "menu",
                "aria-expanded": n,
            });
        },
    });
}
function c9(e) {
    let { projectId: t } = e,
        n = (0, c.yK)([oT.A], () => oT.A.getTimingTraces(t), [t]),
        [l, r] = a.useState(""),
        s = a.useMemo(() => {
            let e;
            return "" === (e = l.trim().toLowerCase())
                ? n
                : n.filter((t) =>
                      (function (e) {
                          let t = [e.name];
                          for (let n of e.spans)
                              for (let e of (t.push(n.name, n.error ?? ""),
                              [...Object.values(n.attrs ?? {}), ...Object.values(n.details ?? {})]))
                                  t.push(String(e));
                          return t.join(" ").toLowerCase();
                      })(t).includes(e),
                  );
        }, [n, l]),
        u = a.useMemo(() => [...s].reverse(), [s]),
        o = a.useMemo(
            () =>
                (function (e) {
                    let t = e.map(cq);
                    function n(e) {
                        return t.reduce((t, n) => t + e(n), 0);
                    }
                    return {
                        categories: cN.BF.map((e) => ({
                            category: e,
                            ms: n((t) => t.categories.find((t) => t.category === e)?.ms ?? 0),
                        })),
                        busyMs: n((e) => e.busyMs),
                        model: {
                            calls: n((e) => e.model.calls),
                            input: n((e) => e.model.input),
                            output: n((e) => e.model.output),
                            cacheRead: n((e) => e.model.cacheRead),
                            cacheWrite: n((e) => e.model.cacheWrite),
                            costUsd: n((e) => e.model.costUsd),
                        },
                    };
                })(s),
            [s],
        );
    return 0 === n.length
        ? (0, i.jsxs)("div", {
              className: cK.Ie,
              children: [
                  (0, i.jsx)(v.E, { variant: "body-sm/medium", color: "text-default", children: "No traces yet" }),
                  (0, i.jsx)(v.E, {
                      variant: "body-sm/normal",
                      color: "text-muted",
                      children:
                          "Turns and project operations over 100ms show up here as they run. Periodic checks and live preview requests show up only when they take a second or fail.",
                  }),
              ],
          })
        : (0, i.jsxs)("div", {
              className: cK.nd,
              children: [
                  (0, i.jsxs)("div", {
                      className: cK.Ko,
                      children: [
                          (0, i.jsx)("div", {
                              className: cK.fH,
                              children: (0, i.jsx)(cy.I, {
                                  query: l,
                                  onChange: r,
                                  onClear: () => r(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, i.jsx)(c5, { projectId: t, traces: s }),
                      ],
                  }),
                  (0, i.jsxs)(tF.Ch, {
                      className: cK.XG,
                      children: [
                          (0, i.jsx)(cV, { stats: o }),
                          0 === u.length
                              ? (0, i.jsx)(v.E, {
                                    variant: "body-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, i.jsx)("ul", {
                                    className: cK.p_,
                                    "aria-label": "Traces",
                                    children: u.map((e) =>
                                        (0, i.jsx)(
                                            "li",
                                            { children: (0, i.jsx)(c7, { projectId: t, trace: e }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function c8(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function c6(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function de(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function dt(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function dn(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function dl(e) {
    return R.intl.string("preview" === e ? T.default["2yLYlG"] : T.default.eiAi57);
}
let dr = ["all", "preview", "stable", "web"];
function di(e) {
    switch (e.reason) {
        case "local":
            return R.intl.string(T.default.mUeKML);
        case "unconfigured":
            return R.intl.string(T.default.bGefb5);
        case "unauthorized":
            return R.intl.string(T.default.KLx6Bb);
        default:
            return null != e.detail
                ? R.intl.formatToPlainString(T.default.t09Q6q, { detail: e.detail })
                : R.intl.string(T.default["t+tG59"]);
    }
}
function da(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : R.intl.formatToPlainString(T.default["XO/bN4"], {
              p50: c8(e.memory_p50_bytes ?? 0),
              p999: c8(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let ds = {
    db: () => T.default["7l+DFG"],
    db_preview: () => T.default.FAuffi,
    runtime: () => T.default["Gkl+ab"],
    runtime_preview: () => T.default.ynpJzv,
    bot: () => T.default["5/i0cj"],
    bot_preview: () => T.default.m2jsnw,
};
var du = n(911608),
    dc = n(177427);
function dd(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, i.jsxs)("div", {
        className: dc.KE,
        children: [
            (0, i.jsx)("div", {
                className: dc.IQ,
                children:
                    "loading" === n
                        ? (0, i.jsx)(j.y, { type: j.t.PULSING_ELLIPSIS })
                        : "failed" === n
                          ? (0, i.jsx)(v.E, {
                                variant: "body-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: R.intl.string(T.default.ZVByPX),
                            })
                          : null != t
                            ? (0, i.jsx)(v.E, {
                                  variant: "body-xs/normal",
                                  color: "text-muted",
                                  children: R.intl.formatToPlainString(T.default.INVO50, { time: dt(t) }),
                              })
                            : null,
            }),
            (0, i.jsx)(d.$, { variant: "secondary", size: "sm", text: R.intl.string(T.default.oKEgiu), onClick: l }),
        ],
    });
}
function df(e) {
    let { title: t, children: n } = e;
    return (0, i.jsxs)("section", {
        className: dc.uW,
        "aria-label": t,
        children: [
            (0, i.jsx)(v.E, { variant: "body-xs/semibold", color: "text-muted", className: dc.Gf, children: t }),
            n,
        ],
    });
}
function dm(e) {
    let { label: t, value: n, hint: l, critical: r = !1, icon: a, state: s } = e;
    return (0, i.jsxs)("div", {
        className: dc.N8,
        children: [
            (0, i.jsxs)("div", {
                className: dc.x7,
                children: [
                    (0, i.jsxs)("span", {
                        className: dc.kS,
                        children: [a, (0, i.jsx)(v.E, { variant: "body-sm/normal", color: "text-muted", children: t })],
                    }),
                    (0, i.jsxs)("span", {
                        className: dc.kS,
                        children: [
                            s,
                            (0, i.jsx)(v.E, {
                                variant: "body-sm/medium",
                                color: r ? "text-feedback-critical" : "text-default",
                                children: n,
                            }),
                        ],
                    }),
                ],
            }),
            null != l && (0, i.jsx)(v.E, { variant: "body-xs/normal", color: "text-muted", children: l }),
        ],
    });
}
function dh(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        a = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = a >= 0.9;
    return (0, i.jsxs)("div", {
        className: dc.N8,
        children: [
            (0, i.jsxs)("div", {
                className: dc.x7,
                children: [
                    (0, i.jsx)(v.E, { variant: "body-sm/normal", color: "text-muted", children: t }),
                    (0, i.jsx)(v.E, {
                        variant: "body-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, i.jsx)(du.z, {
                value: 100 * a,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? dc.dh : void 0,
            }),
        ],
    });
}
function dg(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, i.jsx)(dm, {
            label: R.intl.string(T.default.SXP7pD),
            value: R.intl.string(T.default.E5hKVi),
            hint: di(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, i.jsx)(dm, {
            label: R.intl.string(T.default.SXP7pD),
            value: "\u2014",
            hint: R.intl.string(T.default.AGvoMJ),
        });
    let l = da(n);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(dm, { label: R.intl.string(T.default["H/X+FI"]), value: c6(n.cpu_ms) }),
            null != l && (0, i.jsx)(dm, { label: R.intl.string(T.default.lmFmMO), value: l }),
        ],
    });
}
function dp(e) {
    let { analytics: t } = e,
        n = R.intl.string(T.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, i.jsx)(df, {
            title: n,
            children: (0, i.jsx)(v.E, { variant: "body-sm/normal", color: "text-muted", children: di(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? ds[t] : null) ? R.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, i.jsx)(df, {
        title: n,
        children:
            0 === l.length
                ? (0, i.jsx)(v.E, {
                      variant: "body-sm/normal",
                      color: "text-muted",
                      children: R.intl.string(T.default.AGvoMJ),
                  })
                : l.map((e) => {
                      let { object: t, label: n } = e;
                      return (0, i.jsx)(
                          dm,
                          {
                              label: n,
                              value: R.intl.formatToPlainString(T.default["w/2voO"], { cpu: c6(t.cpu_ms) }),
                              hint: da(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var dx = n(678708),
    dv = n(414499),
    dj = n(714800),
    db = n(81466),
    dy = n(424383),
    dk = n(664121),
    dw = n(816943),
    dA = n(268791),
    dN = n(514042),
    dS = n(872351),
    dC = n(708988),
    dI = n(150934),
    dE = n(417270);
let d_ = "Restart Agent",
    dM = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
function dT(e) {
    return null != e && "" !== e ? e.slice(0, 12) : "None";
}
function dR(e, t) {
    return { label: e, value: null != t && "" !== t ? dt(t) : "Unknown", icon: "calendar" };
}
function dP(e) {
    for (let [t, n] of [
        ["GB", 1e9],
        ["MB", 1e6],
        ["KB", 1e3],
    ])
        if (e >= n) return `${Number((e / n).toFixed(1))} ${t}`;
    return `${e} B`;
}
function dL(e, t, n, l) {
    let [r, i] = dM[n.status];
    return { label: e, value: `${dP(n.bytes)} of ${dP(n.max)} \xb7 ${r}`, hint: l, icon: t, state: i };
}
function d$(e) {
    if (null == e) return { label: "Last Save", value: "None since this agent instance started", icon: "save" };
    let t = dt(e.at);
    return e.ok
        ? { label: "Last Save", value: `OK (${e.status ?? "saved"})`, hint: t, icon: "save", state: "ok" }
        : {
              label: "Last Save",
              value: "Failed",
              hint: null != e.error ? `${t} \xb7 ${e.error}` : t,
              icon: "save",
              state: "error",
          };
}
let dq = { main: "Main vs Remote", wip: "WIP vs Remote" };
function dD(e) {
    let t = `container ${dT(e.local)} \xb7 remote ${dT(e.remote)}`,
        n = e.ahead ?? 0,
        l = e.behind ?? 0,
        r = { label: dq[e.ref], icon: "remote", hint: t };
    switch (e.state) {
        case "in_sync":
            return { ...r, value: "In Sync", state: "ok" };
        case "ahead":
            return { ...r, value: `${de(n)} Ahead`, hint: `${t} \xb7 not pushed yet`, state: "ahead" };
        case "behind":
            return { ...r, value: `${de(l)} Behind`, state: "behind" };
        case "diverged":
            return { ...r, value: `Diverged (${de(n)} Ahead, ${de(l)} Behind)`, state: "error" };
        case "not_fetched":
            return { ...r, value: "Behind", hint: `${t} \xb7 the remote head isn't in the container`, state: "behind" };
        case "missing_remote":
            return { ...r, value: "Missing on Remote", state: "error" };
        case "missing_local":
            return { ...r, value: "Missing in Container", state: "warning" };
    }
}
let dF = ["main", "wip"];
var dO = n(400154);
let dG = {
        checkout: dx.FolderIcon,
        edit: m.PencilIcon,
        remote: dv.h,
        commits: dj.e,
        calendar: db.CalendarIcon,
        save: dy.L,
        objects: dk.R,
        download: dw.$,
        size: dA.$,
        file: dN.FileIcon,
    },
    dz = {
        ok: [lY.y, to.A.colors.ICON_FEEDBACK_POSITIVE],
        warning: [cF.WarningIcon, to.A.colors.ICON_FEEDBACK_WARNING],
        error: [sx.a, to.A.colors.ICON_FEEDBACK_CRITICAL],
        ahead: [dS.z, to.A.colors.ICON_MUTED],
        behind: [dC.M, to.A.colors.ICON_MUTED],
    };
function dU(e) {
    let { projectId: t } = e,
        { state: n } = {
            state: (0, c.bG)([oT.A], () => oT.A.getGitInfoState(t), [t]),
            load: a.useCallback(() => (0, cb.DK)(t), [t]),
        },
        l = (function (e) {
            let { pending: t, error: n, info: l, observedAt: r } = e;
            if (t) return { line: "Reading the repository", critical: !1 };
            if (null != n) return { line: n, critical: !0 };
            if (null == r) return { line: "", critical: !1 };
            let i = [];
            if (null != l) {
                l.running
                    ? null != l.localError
                        ? i.push([`Workspace unreadable: ${l.localError}`, !0])
                        : null != l.localWarning && i.push(["Read stopped early; some rows were not read", !0])
                    : i.push(["Workspace not running", !1]);
                let { status: e, error: t } = l.remote;
                ("missing" === e && i.push(["Remote repository missing", !0]),
                    "error" === e && i.push([`Remote read failed: ${t ?? "unknown error"}`, !0]),
                    "disabled" === e && i.push(["Source repositories are off", !1]));
            }
            return {
                line: [
                    `Updated ${dt(r)}`,
                    ...i.map((e) => {
                        let [t] = e;
                        return t;
                    }),
                ].join(" \xb7 "),
                critical: i.some((e) => {
                    let [, t] = e;
                    return t;
                }),
            };
        })(n);
    return (0, i.jsxs)(df, {
        title: "Git",
        children: [
            (0, i.jsx)("div", {
                className: dO.Lj,
                children:
                    "" !== l.line &&
                    (0, i.jsx)(v.E, {
                        variant: "body-xs/normal",
                        role: "status",
                        color: l.critical ? "text-feedback-critical" : "text-muted",
                        children: l.line,
                    }),
            }),
            null != n.info &&
                (function (e) {
                    var t;
                    let n;
                    if (!e.running || null != e.localError) return [d$(e.lastSave)];
                    if (!e.checkout)
                        return [
                            { label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" },
                            d$(e.lastSave),
                        ];
                    let l = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
                    void 0 !== e.dirtyFiles &&
                        l.push({
                            label: "Uncommitted Files",
                            value: null == e.dirtyFiles ? "Unknown" : de(e.dirtyFiles),
                            hint: null == e.dirtyFiles ? "git status didn't finish in time." : void 0,
                            icon: "edit",
                        });
                    let r = dF.flatMap((t) => e.comparisons?.find((e) => e.ref === t) ?? []);
                    (r.length > 0
                        ? l.push(...r.map(dD))
                        : l.push(
                              { label: "Main", value: dT(e.heads.main), icon: "remote" },
                              { label: "WIP", value: dT(e.heads.wip), icon: "remote" },
                          ),
                        l.push(
                            { label: "Commits", value: null != e.commits ? de(e.commits) : "Unknown", icon: "commits" },
                            dR("Oldest Commit", e.oldest),
                            dR("Newest Commit", e.newest),
                            d$(e.lastSave),
                        ),
                        null != e.objects &&
                            l.push(
                                ((n = 1 === (t = e.objects).packs ? "1 pack" : `${de(t.packs)} packs`),
                                {
                                    label: "Objects",
                                    value: `${de(t.loose)} loose (${c8(t.looseBytes)}) \xb7 ${de(t.packed)} packed in ${n} (${c8(t.packBytes)})`,
                                    hint: t.garbage > 0 ? `${de(t.garbage)} garbage files` : void 0,
                                    icon: "objects",
                                }),
                            ));
                    let i = (function (e) {
                        if (null == e.partialClone) return null;
                        let t = { label: "Partial Clone", icon: "download" };
                        return e.partialClone
                            ? null == e.missingObjects
                                ? { ...t, value: "Yes", hint: "Counting objects not downloaded didn't finish in time." }
                                : {
                                      ...t,
                                      value: `Yes \xb7 ${de(e.missingObjects)} not downloaded`,
                                      hint: "Fetched on demand; this read never fetches.",
                                  }
                            : { ...t, value: "No" };
                    })(e);
                    return (
                        null != i && l.push(i),
                        null != e.localBytes &&
                            l.push(
                                dL(
                                    "Repository Size",
                                    "size",
                                    e.localBytes,
                                    "Local copy: every commit, but only the file versions this container has read.",
                                ),
                            ),
                        null === e.largestFile
                            ? l.push({
                                  label: "Largest File",
                                  value: "Unknown",
                                  hint: "The scan for it didn't finish in time.",
                                  icon: "file",
                              })
                            : null != e.largestFile &&
                              l.push(
                                  dL("Largest File", "file", e.largestFile, "Largest file version in the local copy."),
                              ),
                        l
                    );
                })(n.info).map((e) => {
                    let { label: t, value: n, hint: l, icon: r, state: a } = e,
                        s = dG[r],
                        [u, o] = null != a ? dz[a] : [null, void 0];
                    return (0, i.jsx)(
                        dm,
                        {
                            label: t,
                            value: n,
                            hint: l,
                            critical: "error" === a,
                            icon: (0, i.jsx)(s, { size: "xs", color: to.A.colors.ICON_MUTED }),
                            state: null != u ? (0, i.jsx)(u, { size: "xs", color: o }) : void 0,
                        },
                        t,
                    );
                }),
        ],
    });
}
function dB(e) {
    let { projectId: t } = e,
        {
            state: n,
            busy: l,
            clearAlarm: r,
            setClearAlarm: s,
            confirmCopy: u,
            restart: o,
        } = (function (e) {
            let t = (0, c.bG)([oT.A], () => oT.A.getRestartAgentState(e), [e]),
                [n, l] = a.useState(!1),
                r = "restarting" === t.phase ? t.startedAt : null,
                i = "restarted" === t.phase ? t.instanceSince : null,
                s = a.useRef(i);
            (a.useEffect(() => {
                null != i && i !== s.current && ((s.current = i), (0, cb.DK)(e));
            }, [e, i]),
                a.useEffect(() => {
                    if (null == r) return;
                    function t() {
                        let t = oT.A.getInstancePollRequestedAt(e);
                        (null != t && Date.now() - t < 1e4) || (0, cb.gX)(e);
                    }
                    t();
                    let n = setInterval(t, 2e3),
                        l = setTimeout(
                            () =>
                                uQ.h.dispatch({
                                    type: "CONJURE_RESTART_AGENT_RESULT",
                                    projectId: e,
                                    outcome: "timed_out",
                                    reason: "No new agent instance answered within 60 s",
                                    observedAt: new Date().toISOString(),
                                }),
                            Math.max(5e3, r + 6e4 - Date.now()),
                        );
                    return () => {
                        (clearInterval(n), clearTimeout(l));
                    };
                }, [e, r]));
            let u = a.useCallback(() => (0, cb.VW)(e, n), [e, n]);
            return {
                state: t,
                busy: "pending" === t.phase || "restarting" === t.phase,
                clearAlarm: n,
                setClearAlarm: l,
                confirmCopy: {
                    title: "Restart Agent?",
                    body: `Ends this project's agent instance; the next request starts a new one. Lost: in-memory state and any running turn. Kept: saved data (conversation, settings, storage) and the container disk. ${n ? "The pending alarm is cleared, so scheduled wakeups wait until something sets it again." : "The pending alarm is kept."}`,
                    confirm: d_,
                },
                restart: u,
            };
        })(t),
        f = a.useCallback(() => {
            (0, I.A)({ title: u.title, subtitle: u.body, confirmText: u.confirm, variant: "critical", onConfirm: o });
        }, [u, o]);
    return (0, i.jsxs)("div", {
        className: dO.Lj,
        children: [
            (0, i.jsxs)("div", {
                className: dO.nM,
                children: [
                    (0, i.jsx)(dI.S, {
                        label: "Also Clear Alarm",
                        description: "Scheduled wakeups wait until something sets the alarm again.",
                        checked: r,
                        onChange: s,
                        disabled: l,
                    }),
                    (0, i.jsx)(d.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        icon: dE.RetryIcon,
                        text: d_,
                        loading: l,
                        disabled: l,
                        onClick: f,
                    }),
                ],
            }),
            (0, i.jsx)(v.E, {
                variant: "body-xs/normal",
                role: "status",
                color: "failed" === n.phase ? "text-feedback-critical" : "text-muted",
                children: (function (e) {
                    switch (e.phase) {
                        case "idle":
                            return "Starts a new agent instance; the container keeps running.";
                        case "pending":
                            return "Asking the worker to restart.";
                        case "restarting":
                            return "Restarting; waiting for a new instance to answer.";
                        case "restarted":
                            return `Restarted \xb7 new instance since ${dt(e.instanceSince)}`;
                        case "failed":
                            return `Failed: ${e.reason} \xb7 ${dt(e.observedAt)}`;
                    }
                })(n),
            }),
        ],
    });
}
function dK(e, t) {
    return (0, i.jsx)(dm, {
        label: e,
        value: R.intl.formatToPlainString(T.default.yHJxuP, { count: de((0, cn.aM)(t)) }),
        hint: `${de(t.input_tokens)} in \xb7 ${de(t.output_tokens)} out \xb7 ${de(t.cache_read_input_tokens)} cache read`,
    });
}
function dH(e) {
    let t,
        n,
        l,
        r,
        s,
        u,
        o,
        f,
        m,
        h,
        { projectId: g, status: p, fetchState: x, onRefresh: j } = e,
        {
            lastTurn: b,
            lastCompaction: y,
            lastDecline: k,
            forceState: w,
            restartState: A,
            turnRunning: N,
            handleForceCompaction: S,
            handleForceCompactionOverride: C,
            handleRestartWorkspace: I,
            lifetime: E,
            limits: _,
            session: M,
            contextCeiling: P,
        } = ((t = (0, c.bG)([oT.A], () => oT.A.getLastTurnUsage(g), [g])),
        (n = (0, c.bG)([oT.A], () => oT.A.getLastCompaction(g), [g])),
        (l = (0, c.bG)([oT.A], () => oT.A.getLastCompactionDecline(g), [g])),
        (r = (0, c.bG)([oT.A], () => oT.A.getForceCompactionState(g), [g])),
        (s = (0, c.bG)([oT.A], () => oT.A.getSandboxRestartState(g), [g])),
        (u = (0, c.bG)([lE.A], () => lE.A.isThinking(g), [g])),
        (o = a.useCallback(() => (0, cb.Lj)(g), [g])),
        (f = a.useCallback(() => (0, cb.Lj)(g, !0), [g])),
        (m = a.useCallback(() => (0, cb.bq)(g), [g])),
        (h = p?.agent?.limits ?? null),
        {
            lastTurn: t,
            lastCompaction: n,
            lastDecline: l,
            forceState: r,
            restartState: s,
            turnRunning: u,
            handleForceCompaction: o,
            handleForceCompactionOverride: f,
            handleRestartWorkspace: m,
            lifetime: p?.agent?.lifetime ?? null,
            limits: h,
            session: p?.agent?.session ?? null,
            contextCeiling: n?.promptCeiling ?? h?.context_window_tokens ?? null,
        });
    return (0, i.jsxs)("div", {
        className: dO.Mf,
        children: [
            (0, i.jsx)(dd, { generatedAt: p?.generated_at ?? null, fetchState: x, onRefresh: j }),
            (0, i.jsx)(df, {
                title: R.intl.string(T.default.JghNal),
                children:
                    null == E
                        ? (0, i.jsx)(v.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: R.intl.string(T.default.s0U5Fv),
                          })
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(dm, {
                                      label: R.intl.string(T.default["9nqym2"]),
                                      value: de((0, cn.a7)(E.cost_usd)),
                                      hint: R.intl.formatToPlainString(T.default.NCdUIh, { count: de(E.turns) }),
                                  }),
                                  dK(R.intl.string(T.default.xtxP0e), E.orchestrator),
                                  dK(R.intl.string(T.default["9Sj3SX"]), E.codegen),
                                  dK(R.intl.string(T.default.ANCEo3), (0, cn.wU)(E.compaction)),
                                  p?.agent?.outcomes != null &&
                                      Object.keys(p.agent.outcomes).length > 0 &&
                                      (0, i.jsx)(dm, {
                                          label: R.intl.string(T.default.SQHm7C),
                                          value: Object.entries(p.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${de(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, i.jsx)(df, {
                title: R.intl.string(T.default.dZHPE5),
                children:
                    null == b
                        ? (0, i.jsx)(v.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: R.intl.string(T.default.DfVjal),
                          })
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  dK(R.intl.string(T.default["7X3i9d"]), b.total),
                                  (0, i.jsx)(dm, {
                                      label: R.intl.string(T.default["8OUg09"]),
                                      value: `${Math.round((b.cache_hit_rate ?? (0, cn.CA)(b.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, i.jsxs)(df, {
                title: R.intl.string(T.default.NbRk9a),
                children: [
                    null != y && null != P
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(dh, {
                                      label: R.intl.string(T.default.Kw5wiQ),
                                      used: y.tokensAfter,
                                      max: P,
                                      formatValue: de,
                                  }),
                                  (0, i.jsx)(dm, {
                                      label: R.intl.string(T.default.mRbSns),
                                      value: `${de(y.tokensBefore)} \u{2192} ${de(y.tokensAfter)}`,
                                      hint: R.intl.formatToPlainString(T.default.Vq3skS, {
                                          count: de(y.retainedMessages),
                                          time: dt(y.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, i.jsx)(v.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children:
                                  null != P
                                      ? R.intl.formatToPlainString(T.default.GMLCNv, { ceiling: de(P) })
                                      : R.intl.string(T.default.s0U5Fv),
                          }),
                    null != k &&
                        (0, i.jsx)(dm, {
                            label: R.intl.string(T.default["4BX5KK"]),
                            value: `${de(k.projected)} / ${de(k.threshold)}`,
                            critical: !0,
                            hint: R.intl.formatToPlainString(T.default["6ngCax"], { time: dt(k.observedAt) }),
                        }),
                    (0, i.jsxs)("div", {
                        className: dO.Lj,
                        children: [
                            (0, i.jsx)(d.$, {
                                variant: "secondary",
                                size: "sm",
                                text: R.intl.string(T.default["1EiJeb"]),
                                disabled: "pending" === w,
                                onClick: S,
                            }),
                            (0, i.jsx)(v.E, {
                                variant: "body-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof w && "compacted" !== w.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return R.intl.string(T.default.wox6Ev);
                                    if ("pending" === e) return R.intl.string(T.default.OcPHQ1);
                                    let t = dt(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return R.intl.formatToPlainString(T.default.BhRjZZ, { time: t });
                                    let n =
                                        "declined" === e.outcome
                                            ? T.default["o/FKzF"]
                                            : "busy" === e.outcome
                                              ? T.default.YZb4hK
                                              : T.default.ZoUSVK;
                                    return R.intl.formatToPlainString(n, {
                                        reason: e.reason ?? "no reason given",
                                        time: t,
                                    });
                                })(w),
                            }),
                            "object" == typeof w &&
                                !0 === w.pendingTurn &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(d.$, {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: R.intl.string(T.default.ZxG2AI),
                                            onClick: C,
                                        }),
                                        (0, i.jsx)(v.E, {
                                            variant: "body-xs/normal",
                                            color: "text-muted",
                                            children: R.intl.string(T.default.V73vdN),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: dO.Lj,
                        children: [
                            (0, i.jsx)(d.$, {
                                variant: "secondary",
                                size: "sm",
                                text: R.intl.string(T.default["5qCjBu"]),
                                loading: "pending" === A,
                                disabled: "pending" === A || N,
                                onClick: I,
                            }),
                            (0, i.jsx)(v.E, {
                                variant: "body-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof A && "restarted" !== A.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return R.intl.string(T.default.mlok8D);
                                    if ("pending" === e) return R.intl.string(T.default["1ugSyK"]);
                                    let t = dt(e.observedAt);
                                    return R.intl.formatToPlainString(
                                        "restarted" === e.outcome ? T.default["76mfqO"] : T.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(A),
                            }),
                        ],
                    }),
                    (0, i.jsx)(dB, { projectId: g }),
                ],
            }),
            (0, i.jsx)(dU, { projectId: g }),
            (null != M || p?.analytics != null) &&
                (0, i.jsxs)(df, {
                    title: R.intl.string(T.default.EsSzCS),
                    children: [
                        null != M &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(dm, {
                                        label: R.intl.string(T.default.CLXHAs),
                                        value: dt(M.instance_since),
                                        hint: R.intl.string(T.default.UCwUEX),
                                    }),
                                    (0, i.jsx)(dm, { label: R.intl.string(T.default["8V8e1Z"]), value: de(M.sockets) }),
                                    (0, i.jsx)(dm, {
                                        label: R.intl.string(T.default["4pBzYW"]),
                                        value: M.turn_inflight
                                            ? R.intl.string(T.default.Wv025I)
                                            : R.intl.string(T.default["7/lsFY"]),
                                    }),
                                    M.queued_messages > 0 &&
                                        (0, i.jsx)(dm, {
                                            label: R.intl.string(T.default["3oUYnv"]),
                                            value: de(M.queued_messages),
                                        }),
                                ],
                            }),
                        p?.analytics != null && (0, i.jsx)(dg, { analytics: p.analytics }),
                    ],
                }),
            null != _ &&
                (0, i.jsxs)(df, {
                    title: R.intl.string(T.default["LEIhp/"]),
                    children: [
                        (0, i.jsx)(dm, {
                            label: R.intl.string(T.default.IlDBN3),
                            value: de(_.max_subagent_iterations),
                        }),
                        (0, i.jsx)(dm, {
                            label: R.intl.string(T.default["ZdzKR+"]),
                            value: R.intl.formatToPlainString(T.default.yHJxuP, { count: de(_.context_window_tokens) }),
                        }),
                        (0, i.jsx)(dm, {
                            label: R.intl.string(T.default.cIhN2W),
                            value: R.intl.formatToPlainString(T.default.yHJxuP, {
                                count: de(_.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, i.jsx)(dm, {
                            label: R.intl.string(T.default["+fOn/q"]),
                            value: de(_.max_user_message_chars),
                        }),
                        (0, i.jsx)(dm, { label: R.intl.string(T.default.kIHga0), value: de(_.max_build_attempts) }),
                        (0, i.jsx)(dm, { label: R.intl.string(T.default.Iw03yW), value: de(_.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var dV = n(237528),
    dW = n(629584),
    dX = n(531893);
function dQ(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, i.jsx)("div", {
              className: dX.ut,
              children: (0, i.jsx)(v.E, {
                  variant: "body-xs/normal",
                  color: "text-feedback-critical",
                  children: R.intl.string(T.default.h1SE6R),
              }),
          });
}
function dZ(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, i.jsxs)("div", {
              className: dX.qf,
              children: [
                  (0, i.jsx)(v.E, {
                      variant: "body-sm/medium",
                      color: "text-default",
                      children: R.intl.string(T.default.h1SE6R),
                  }),
                  (0, i.jsx)(v.E, {
                      variant: "body-xs/normal",
                      color: "text-muted",
                      children: R.intl.string(T.default["8SErdg"]),
                  }),
              ],
          })
        : (0, i.jsxs)("div", {
              className: dX.qf,
              children: [
                  (0, i.jsx)(v.E, { variant: "body-sm/medium", color: "text-default", children: n }),
                  (0, i.jsx)(v.E, { variant: "body-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function dY(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, i.jsx)("div", {
              className: dX.ps,
              children: (0, i.jsx)(v.E, {
                  variant: "body-xs/normal",
                  color: "text-muted",
                  children: R.intl.string(T.default.V7Ri8H),
              }),
          })
        : null;
}
var dJ = n(109079);
let d0 = a.memo(function (e) {
    var t;
    let { entry: n, showSource: l } = e,
        [r, s] = a.useState(!1),
        u = a.useId(),
        o = a.useMemo(
            () =>
                (function (e) {
                    let t;
                    if (e.length > 16e3) return null;
                    let n = e.indexOf("{"),
                        l = e.indexOf("["),
                        r = -1 === n ? l : -1 === l ? n : Math.min(n, l);
                    if (-1 === r) return null;
                    let i = e.slice(r).trim();
                    if (i.length < 2) return null;
                    try {
                        t = JSON.parse(i);
                    } catch {
                        return null;
                    }
                    if ("object" != typeof t || null == t) return null;
                    let a = e.slice(0, r).trim(),
                        s = JSON.stringify(t, null, 2);
                    return Array.isArray(t)
                        ? { prefix: a, pretty: s, marker: "[\u2026]", size: t.length }
                        : { prefix: a, pretty: s, marker: "{\u2026}", size: Object.keys(t).length };
                })(n.message),
            [n.message],
        ),
        c = "error" === n.level ? "text-feedback-critical" : "text-default";
    return (0, i.jsxs)("div", {
        className: dJ.vK,
        children: [
            (0, i.jsx)(v.E, {
                tag: "span",
                variant: "body-xs/normal",
                color: "text-subtle",
                className: dJ.Mt,
                selectable: !0,
                children: cA(n.ts) ?? n.ts,
            }),
            (0, i.jsx)(v.E, {
                tag: "span",
                variant: "footnote/semibold",
                color:
                    "error" === (t = n.level)
                        ? "text-feedback-critical"
                        : "warn" === t
                          ? "text-feedback-warning"
                          : "text-muted",
                className: dJ.dm,
                children: n.level,
            }),
            (0, i.jsxs)("div", {
                className: dJ.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, i.jsx)("span", { className: dJ.Cq, children: (0, i.jsx)(dV.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, i.jsx)("span", {
                            className: dJ.Cq,
                            title: n.build ?? void 0,
                            children: (0, i.jsx)(dV.v, { text: R.intl.string(T.default.TrC9c8), variant: "redLight" }),
                        }),
                    null != o
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  "" !== o.prefix &&
                                      (0, i.jsxs)(v.E, {
                                          tag: "span",
                                          variant: "body-xs/normal",
                                          color: c,
                                          selectable: !0,
                                          children: [o.prefix, " "],
                                      }),
                                  (0, i.jsxs)(tV.D, {
                                      className: dJ.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": u,
                                      "aria-label": R.intl.string(T.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          r
                                              ? (0, i.jsx)(eN.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, i.jsx)(tY._, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                }),
                                          (0, i.jsxs)(v.E, {
                                              tag: "span",
                                              variant: "body-xs/medium",
                                              color: "none",
                                              children: [
                                                  o.marker,
                                                  " ",
                                                  R.intl.formatToPlainString(
                                                      "[\u2026]" === o.marker ? T.default.kUhyUv : T.default["N+fphl"],
                                                      { count: o.size },
                                                  ),
                                              ],
                                          }),
                                      ],
                                  }),
                                  r &&
                                      (0, i.jsx)(v.E, {
                                          tag: "div",
                                          variant: "body-xs/normal",
                                          color: c,
                                          className: dJ.dF,
                                          selectable: !0,
                                          id: u,
                                          children: o.pretty,
                                      }),
                              ],
                          })
                        : (0, i.jsx)(v.E, {
                              tag: "span",
                              variant: "body-xs/normal",
                              color: c,
                              selectable: !0,
                              children: n.message,
                          }),
                ],
            }),
        ],
    });
});
function d1(e) {
    let { projectId: t } = e,
        n = (0, c.bG)([cj.A], () => cj.A.getLogs(t), [t]),
        l = (0, c.bG)([cj.A], () => cj.A.getHistoryState(t, "logs")),
        [r, s] = a.useState("all"),
        [u, o] = a.useState(""),
        d = a.useMemo(() => {
            let e;
            return (
                (e = u.trim().toLowerCase()),
                n.filter((t) => {
                    var n;
                    let { log: l } = t;
                    return (
                        "string" == typeof l.message &&
                        "string" == typeof l.level &&
                        "string" == typeof l.ts &&
                        ("all" === r ||
                            ("preview" === (n = l.source) || "stable" === n || "web" === n ? n : "other") === r) &&
                        ("" === e ||
                            l.message.toLowerCase().includes(e) ||
                            l.level.includes(e) ||
                            (l.source?.toLowerCase().includes(e) ?? !1))
                    );
                })
            );
        }, [n, r, u]),
        f = a.useRef(null),
        m = a.useRef(!0);
    a.useEffect(() => {
        m.current && f.current?.scrollToBottom();
    }, [d]);
    let h = a.useCallback(() => {
            let e = f.current;
            null != e && (m.current = 32 > e.getDistanceFromBottom());
        }, []),
        g = a.useMemo(
            () =>
                dr.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return dl(e);
                            case "web":
                                return R.intl.string(T.default.IVzfVV);
                            default:
                                return R.intl.string(T.default["Um1/8L"]);
                        }
                    })(e),
                })),
            [],
        );
    return (0, i.jsxs)("div", {
        className: dJ.$F,
        children: [
            (0, i.jsxs)("div", {
                className: dJ.y4,
                children: [
                    (0, i.jsx)(dW.I, {
                        look: "pill",
                        "aria-label": R.intl.string(T.default.MhvyUU),
                        options: g,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, i.jsx)("div", {
                        className: dJ.KT,
                        children: (0, i.jsx)(cy.I, {
                            query: u,
                            onChange: o,
                            onClear: () => o(""),
                            size: "sm",
                            placeholder: R.intl.string(T.default["m2+37Y"]),
                            "aria-label": R.intl.string(T.default["m2+37Y"]),
                        }),
                    }),
                ],
            }),
            n.length > 0 && (0, i.jsx)(dQ, { state: l }),
            (0, i.jsxs)(tF.Ch, {
                ref: f,
                onScroll: h,
                overflow: "auto",
                className: dJ.sx,
                children: [
                    (0, i.jsx)(dY, { state: l }),
                    0 === n.length
                        ? (0, i.jsx)(dZ, {
                              state: l,
                              emptyTitle: R.intl.string(T.default.S7qlPG),
                              emptyBody: R.intl.string(T.default.nD0S9z),
                          })
                        : 0 === d.length
                          ? (0, i.jsx)(v.E, {
                                variant: "body-xs/normal",
                                color: "text-muted",
                                children: R.intl.string(T.default["4SIdrX"]),
                            })
                          : d.map((e) => (0, i.jsx)(d0, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function d2(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, i.jsx)(a.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, i.jsx)(a.Fragment, { children: r("stable", l) }, "stable")),
        (0, i.jsx)(df, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, i.jsx)(v.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: R.intl.string(T.default.umcjif),
                      }),
        })
    );
}
function d3(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(dm, {
                      label: R.intl.formatToPlainString(T.default["01ZMS4"], { env: dl(n) }),
                      value: ((t = l.connected), R.intl.string(t ? T.default.Wv025I : T.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, i.jsx)(dm, {
                      label: R.intl.string(T.default["z1dh+F"]),
                      value: de(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${dt(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, i.jsx)(dm, { label: R.intl.string(T.default.Iz5GnJ), value: de(l.guild_count) }),
                  (0, i.jsx)(dm, {
                      label: R.intl.string(T.default["7UqtNv"]),
                      value: de(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? R.intl.formatToPlainString(T.default.MasSly, {
                                    code: l.last_close_code,
                                    time: dt(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, i.jsx)(dm, {
                          label: R.intl.string(T.default["x3+JXJ"]),
                          value: de(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, i.jsx)(dm, { label: dl(n), value: R.intl.string(T.default.lTHQss) });
}
function d4(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, i.jsx)(dm, {
        label: dl(t),
        value: R.intl.formatToPlainString(T.default["Xq+wHT"], {
            requests: de(n.requests),
            failures: de(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? R.intl.formatToPlainString(T.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: dt(n.last_failure.at),
                  })
                : R.intl.formatToPlainString(T.default["7KlGT6"], { time: dt(n.since) }),
    });
}
function d7(e) {
    let { env: t, runtime: n } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(dm, {
                label: R.intl.formatToPlainString(T.default["92gVTm"], { env: dl(t) }),
                value: de(n.connections),
            }),
            n.schedules.map((e) =>
                (0, i.jsx)(
                    dm,
                    {
                        label: R.intl.formatToPlainString(T.default.Dafaco, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? R.intl.formatToPlainString(T.default.ologm6, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? R.intl.formatToPlainString(T.default.wxAWNv, { time: dt(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function d5(e) {
    let { env: t, metrics: n } = e;
    return (0, i.jsx)(dm, {
        label: dl(t),
        value: R.intl.formatToPlainString(T.default.suAOj9, { calls: de(n.calls), errors: de(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function d9(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, i.jsx)(df, {
            title: t,
            children: (0, i.jsx)(v.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children: R.intl.string(T.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        a = n.cpu_ms_total > 0;
    return (0, i.jsxs)(df, {
        title: t,
        children: [
            (0, i.jsx)(dm, {
                label: R.intl.string(T.default.xtD4Zp),
                value: de(n.requests),
                hint: R.intl.formatToPlainString(T.default["7KlGT6"], { time: dt(n.since) }),
            }),
            (0, i.jsx)(dm, { label: R.intl.string(T.default.gfRhR3), value: de(n.errors), critical: n.errors > 0 }),
            a
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(dh, {
                              label: R.intl.string(T.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: c6,
                          }),
                          (0, i.jsx)(dm, {
                              label: R.intl.string(T.default.mSKImM),
                              value: c6(r),
                              hint: R.intl.formatToPlainString(T.default.JqMU05, {
                                  total: c6(n.cpu_ms_total),
                                  wall: c6(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, i.jsx)(dm, {
                      label: R.intl.string(T.default.LEJ5r3),
                      value: R.intl.string(T.default["2Ekb2b"]),
                      hint: R.intl.string(T.default.G0aq7i),
                  }),
            !a &&
                n.wall_ms_total > 0 &&
                (0, i.jsx)(dm, { label: R.intl.string(T.default.xvmL1D), value: c6(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, i.jsx)(dm, { label: R.intl.string(T.default["4sQYwH"]), value: de(n.exceeded_cpu), critical: !0 }),
            (0, i.jsx)(dm, {
                label: R.intl.string(T.default.bQenOy),
                value: de(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: R.intl.formatToPlainString(T.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, i.jsx)(dm, { label: R.intl.string(T.default.xgpn4Y), value: dn(n.build) }),
        ],
    });
}
function d8(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        u = r
            ? [{ key: "shared", label: R.intl.string(T.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: R.intl.string(T.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: R.intl.string(T.default.eiAi57), metrics: n },
              ];
    return (0, i.jsx)(df, {
        title: R.intl.string(T.default.mRt7MW),
        children: u.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, i.jsx)(dm, { label: n, value: "\u2014" }, t)
                : (0, i.jsxs)(
                      a.Fragment,
                      {
                          children: [
                              (0, i.jsx)(dm, {
                                  label: R.intl.formatToPlainString(T.default.u7kJJ4, { env: n }),
                                  value: c8(l.r2_bytes),
                                  hint: R.intl.formatToPlainString(
                                      l.r2_truncated ? T.default.lH0oQw : T.default.m9h02S,
                                      { count: de(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, i.jsx)(dh, {
                                      label: R.intl.formatToPlainString(T.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: c8,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function d6(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, i.jsxs)("div", {
        className: dO.Mf,
        children: [
            (0, i.jsx)(dd, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(d9, {
                            title: R.intl.string(T.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, i.jsx)(d9, {
                            title: R.intl.string(T.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, i.jsx)(d8, { status: t }),
                        null != t.bot &&
                            (0, i.jsx)(d2, {
                                title: R.intl.string(T.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, i.jsx)(d3, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, i.jsx)(d2, {
                                title: R.intl.string(T.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, i.jsx)(d4, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, i.jsx)(d2, {
                                title: R.intl.string(T.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, i.jsx)(d7, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, i.jsx)(d2, {
                                title: R.intl.string(T.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, i.jsx)(d5, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, i.jsx)(dp, { analytics: t.analytics }),
                        (0, i.jsxs)(df, {
                            title: R.intl.string(T.default.fQMpFp),
                            children: [
                                (0, i.jsx)(dm, {
                                    label: R.intl.string(T.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? dn(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, i.jsx)(dm, {
                                    label: R.intl.string(T.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? dn(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var fe = n(592465);
function ft(e) {
    let { projectId: t, onClose: n } = e,
        l = F(),
        [r, s] = a.useState(() => (l && $?.projectId === t ? "trace" : "logs")),
        u = (0, c.bG)([oT.A], () => oT.A.getStatus(t), [t]),
        o = (0, c.bG)([oT.A], () => oT.A.getFetchState(t), [t]),
        d = a.useCallback(() => {
            ((0, cb.R7)(t), (0, cb.DK)(t));
        }, [t]);
    (a.useEffect(() => d(), [d]), a.useEffect(() => (0, eO.Rw)(t), [t]));
    let f = a.useCallback(() => {
        if (!l) return !1;
        let e = (function (e) {
            if (null == $ || $.projectId !== e) return null;
            let { traceId: t } = $;
            return (($ = null), t);
        })(t);
        return null != e && (c4(t, e), !0);
    }, [t, l]);
    (a.useEffect(() => {
        f();
    }, [f]),
        q(t, () => {
            f() && s("trace");
        }));
    let m = a.useCallback(() => {
            (0, oc.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: oT.A.getStatus(t),
                        last_turn_usage: oT.A.getLastTurnUsage(t),
                        last_compaction: oT.A.getLastCompaction(t),
                        last_compaction_decline: oT.A.getLastCompactionDecline(t),
                        timing_traces: oT.A.getTimingTraces(t),
                        logs: cj.A.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, E.P0)({ text: R.intl.string(T.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        h = R.intl.string(T.default["Q4FN+H"]);
    return (0, i.jsxs)("section", {
        className: fe.nd,
        "aria-label": h,
        children: [
            (0, i.jsxs)(eQ.Ay, {
                "aria-label": h,
                toolbar: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(eQ.Ay.Icon, {
                            icon: os.CopyIcon,
                            tooltip: R.intl.string(T.default.TkHqy2),
                            onClick: m,
                        }),
                        (0, i.jsx)(eQ.Ay.Icon, { icon: eW.P, tooltip: R.intl.string(R.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, i.jsx)(eQ.Ay.ChannelIcon, { icon: oo.BugIcon, "aria-hidden": !0 }),
                    (0, i.jsx)(eQ.Ay.Title, { children: h }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: fe.rf,
                children: [
                    (0, i.jsxs)(cv.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => s(e),
                        "aria-label": R.intl.string(T.default.RvvWIh),
                        className: fe.vR,
                        children: [
                            (0, i.jsx)(cv.V.Item, { id: "logs", children: R.intl.string(T.default["+VRYCm"]) }),
                            (0, i.jsx)(cv.V.Item, { id: "worker", children: R.intl.string(T.default["50D0FZ"]) }),
                            (0, i.jsx)(cv.V.Item, { id: "agent", children: R.intl.string(T.default.UkbTK1) }),
                            l ? (0, i.jsx)(cv.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, i.jsx)(d1, { projectId: t })
                        : "worker" === r
                          ? (0, i.jsx)(d6, { status: u, fetchState: o, onRefresh: d })
                          : "trace" === r && l
                            ? (0, i.jsx)(c9, { projectId: t })
                            : (0, i.jsx)(dH, { projectId: t, status: u, fetchState: o, onRefresh: d }),
                ],
            }),
        ],
    });
}
var fn = n(365912),
    fl = n(873715);
function fr(e) {
    if (null == e || "string" != typeof e.ref || "string" != typeof e.tag) return null;
    let t = e.rect;
    if (
        null == t ||
        "number" != typeof t.x ||
        "number" != typeof t.y ||
        "number" != typeof t.width ||
        "number" != typeof t.height
    )
        return null;
    let n = {
        ref: e.ref,
        role: "string" == typeof e.role ? e.role : "",
        name: "string" == typeof e.name ? e.name : "",
        tag: e.tag,
        rect: { x: t.x, y: t.y, width: t.width, height: t.height },
    };
    return (
        "string" == typeof e.value && (n.value = e.value),
        "string" == typeof e.path && "" !== e.path && (n.path = e.path),
        "string" == typeof e.marker && (n.marker = e.marker),
        n
    );
}
n(884868);
let fi = Object.freeze({ x: -1, y: -1 });
function fa(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = fr(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var fs = n(192888);
function fu(e, t) {
    return (0, fs.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(fa, () => ({ status: "failed" }));
}
var fo = n(108308);
let fc = { x: 25, y: 21 };
function fd(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function ff(e, t, n, l) {
    let r = fd(e, n, l);
    return { x: r.left + r.width * t.x, y: r.top + r.height * t.y };
}
function fm(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function fh(e) {
    let t = e.snapshot ?? e.results.find((e) => null != e.snapshot)?.snapshot;
    if (null == t || !Array.isArray(t.elements)) return null;
    let n = t.viewport?.width,
        l = t.viewport?.height;
    return "number" != typeof n || "number" != typeof l || n < 1
        ? null
        : {
              elements: t.elements,
              viewport: { width: n, height: l },
              url: "string" == typeof t.url ? t.url : "",
              title: "string" == typeof t.title ? t.title : "",
          };
}
function fg(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: s } = e,
        u = null != n && n === l ? t : null,
        { active: o, annotations: f } = (0, G.rt)(u),
        m = (0, O.Zv)(u),
        h = (0, K.Rv)(),
        g = (0, c.bG)([nw.default], () => nw.default.getCurrentUser()),
        p = g?.id ?? null,
        [x, j] = a.useState(null),
        [b, y] = a.useState(!1),
        [k, w] = a.useState(!1),
        [A, N] = a.useState(null),
        [S, I] = a.useState(!1),
        E = a.useRef(null),
        _ = a.useRef(null),
        M = a.useRef(null),
        [P, L] = a.useState(null),
        [$, q] = a.useState(!1),
        [D, F] = a.useState(null),
        [z, U] = a.useState(null),
        B = a.useRef(!1),
        [H, V] = a.useState(!1),
        [W, X] = a.useState(null),
        Q = o && !m && !h;
    null == D || (Q && D.projectId === u) || F(null);
    let Z = D?.projectId ?? null;
    a.useEffect(() => {
        if (null != Z) return () => (0, nc.xJ)(Z, "design");
    }, [Z]);
    let Y = e6(r, Q);
    a.useEffect(() => {
        if (!Q || null == u) return;
        let e = !0,
            t = r();
        if (null == t) return void w(!0);
        (y(!0), w(!1));
        let n = `design-feedback-${crypto.randomUUID()}`;
        return (
            (0, fl.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                (t) => {
                    if (!e) return;
                    y(!1);
                    let n = "completed" === t.status ? fh(t.response) : null;
                    null == n ? w(!0) : (j(n), (0, G.F5)(u, { url: n.url, title: n.title, viewport: n.viewport }));
                },
                () => {
                    e && (y(!1), w(!0));
                },
            ),
            () => {
                e = !1;
            }
        );
    }, [Q, r, u]);
    let J = a.useRef(null);
    (a.useEffect(() => {
        if (!Q || null == Y || null == u) return;
        if (null == x) {
            J.current = Y;
            return;
        }
        if (e8(J.current, Y)) return;
        let e = window.setTimeout(() => {
            let e = r();
            if (null == e) return;
            J.current = Y;
            let t = [];
            for (let e = 0; e < f.length; e += 24) t.push(f.slice(e, e + 24));
            (0 === t.length && t.push([]),
                t.forEach((t, n) => {
                    let l = t.map((e) => ({
                        action: "locate",
                        target: { ref: e.target.ref, selector: e.target.path },
                    }));
                    (0, fl.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        if ("completed" !== e.status || !el.current) return;
                        let n = fh(e.response);
                        null != n && (j(n), (0, G.F5)(u, { url: n.url, title: n.title, viewport: n.viewport }));
                        let l = new Map();
                        (e.response.results.forEach((e, n) => {
                            let r = t[n];
                            if (null == r || "locate" !== e.action || !e.ok) return;
                            let i = fr(e.element);
                            null != i && l.set(r.id, i);
                        }),
                            (0, G.AW)(u, l));
                    });
                }));
        }, 200);
        return () => window.clearTimeout(e);
    }, [Q, Y, x, f, u, r]),
        a.useEffect(() => {
            if (!Q)
                return () => {
                    (N(null), F(null), X(null), j(null));
                };
        }, [Q]));
    let ee = a.useRef(null),
        et = a.useRef(null),
        en = a.useRef(!1),
        el = a.useRef(!1);
    a.useEffect(() => {
        ((el.current = Q), Q || ((ee.current = null), (et.current = null), (M.current = null), I(!1)));
    }, [Q]);
    let er = a.useCallback(
            function e() {
                if (en.current) return;
                let t = ee.current;
                if (null == t) return;
                ee.current = null;
                let n = r();
                null != n &&
                    ((en.current = !0),
                    fu(n, t).then((t) => {
                        if (((en.current = !1), el.current)) {
                            if ("picked" !== t.status || fy(t.target, eo.current.rect, eo.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? N(null)
                                    : "unsupported" === t.status && q(!0);
                            else {
                                let e = (0, lA.Sk)(t.target);
                                (L((t) => (fb(t, e) ? t : e)),
                                    N((e) => {
                                        var n;
                                        return ((n = t.target),
                                        null == e || null == n
                                            ? e === n
                                            : e.ref === n.ref &&
                                              e.rect.x === n.rect.x &&
                                              e.rect.y === n.rect.y &&
                                              e.rect.width === n.rect.width &&
                                              e.rect.height === n.rect.height)
                                            ? e
                                            : t.target;
                                    }));
                            }
                            e();
                        }
                    }));
            },
            [r],
        ),
        ei = a.useCallback(() => {
            if (null == D) return;
            let e = !B.current;
            (U({ at: D.at, label: D.label, draft: D.draft, instant: e }), V(e), F(null));
        }, [D]);
    (a.useEffect(() => {
        if (!H) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => V(!1));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [H]),
        a.useEffect(() => {
            if (null == z) return;
            let e = setTimeout(() => U(null), fv);
            return () => clearTimeout(e);
        }, [z]));
    let ea = null == x || null == Y || x.viewport.width < 1 ? 1 : Y.width / x.viewport.width,
        es = null != x || k,
        eu = a.useMemo(() => x?.elements ?? [], [x]),
        eo = a.useRef({ rect: null, scale: 1 });
    a.useLayoutEffect(() => {
        eo.current = { rect: Y, scale: ea };
    }, [Y, ea]);
    let ec = a.useCallback(
            (e, t, n) => {
                null != u &&
                    ((0, nc.xJ)(u, "design"),
                    X(null),
                    (B.current = !1),
                    F({ projectId: u, target: e, anchor: t, draft: "", at: n, label: (0, lA.Sk)(e) }));
            },
            [u],
        ),
        ed = a.useCallback((e, t) => ({ x: (e.clientX - t.left) / ea, y: (e.clientY - t.top) / ea }), [ea]),
        ef = a.useCallback(() => {
            let e = M.current;
            if (null == e) return;
            let t = E.current;
            null != t && (t.style.transform = `translate3d(${e.x + 20}px, ${e.y + 20}px, 0)`);
            let n = _.current;
            null != n && (n.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    a.useLayoutEffect(ef);
    let em = a.useCallback(
            (e) => {
                if (null == Y || null != W) return;
                if (((M.current = { x: e.clientX, y: e.clientY }), ef(), I(!0), null != D)) {
                    (Math.abs(e.clientX - D.at.x) > fj || Math.abs(e.clientY - D.at.y) > fj) && (B.current = !0);
                    return;
                }
                if (!es) return void N(null);
                let t = ed(e, Y);
                if ($) {
                    let e = (0, lA.CZ)(eu, t.x, t.y),
                        n = null != e && fy(e, Y, ea) ? null : e;
                    if (null != n) {
                        let e = (0, lA.Sk)(n);
                        L((t) => (fb(t, e) ? t : e));
                    }
                    N((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = et.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((et.current = n), (ee.current = n), er());
            },
            [Y, ea, es, ed, $, eu, D, W, ef, er],
        ),
        eh = null == W ? null : f.find((e) => e.id === W.id),
        eg = Q && (S || D?.target.marker != null || eh?.target.marker != null);
    a.useEffect(() => {
        if (eg)
            return () => {
                let e = r();
                null != e && fu(e, fi);
            };
    }, [eg, r]);
    let ep = a.useCallback(() => {
        (I(!1), N(null), (et.current = null), (ee.current = null));
    }, []);
    a.useEffect(() => {
        if (!Q || !S || !es || $ || null != D || null != W) return;
        let e = M.current,
            { rect: t, scale: n } = eo.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((et.current = l), (ee.current = l), er());
    }, [Q, S, es, $, D, W, er]);
    let ex = a.useCallback(
            (e) => {
                if (null != D || null != W) {
                    (ei(), X(null));
                    return;
                }
                if (null == A || null == Y) return;
                let t = ed(e, Y);
                ec(A, (0, lA.Hm)(A, t.x, t.y), { x: e.clientX, y: e.clientY });
            },
            [A, Y, ed, D, W, ec, ei],
        ),
        ev = a.useCallback(() => {
            null != u && (N(null), (0, C.K7)(u)?.active === !0 ? (0, C.V9)(u) : (0, G.mB)(u));
        }, [u]),
        ej = a.useCallback(() => {
            null != u &&
                (null != D
                    ? ei()
                    : W?.confirmingRemove === !0
                      ? X({ ...W, confirmingRemove: !1 })
                      : null != W
                        ? X(null)
                        : ev());
        }, [u, D, W, ei, ev]),
        eb = a.useRef(ej),
        ey = a.useRef(u),
        ek = a.useRef(ev);
    a.useLayoutEffect(() => {
        ((eb.current = ej), (ey.current = u), (ek.current = ev));
    });
    let ew = a.useRef(null);
    a.useEffect(() => {
        if (Q)
            return (
                eJ.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        eJ.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), eb.current());
        }
        function t(e) {
            let t = e.target;
            !(0, eY.vq)(t) ||
                ew.current?.contains(t) === !0 ||
                s?.current?.contains(t) === !0 ||
                (function (e) {
                    try {
                        return ((0, fn.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) ||
                ((null == ey.current || (0, C.K7)(ey.current)?.active !== !0) && ek.current());
        }
    }, [Q, s]);
    let eA = a.useCallback(
            (e) => {
                if (null == u) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), ej());
                    return;
                }
                if (null != D || null != W || 0 === eu.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    n = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || n) {
                    e.preventDefault();
                    let n = null == A ? -1 : eu.findIndex((e) => e.ref === A.ref);
                    N(eu[(n + (t ? 1 : -1) + eu.length) % eu.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != A &&
                    (e.preventDefault(),
                    ec(A, lA.QU, { x: (Y?.left ?? 0) + A.rect.x * ea, y: (Y?.top ?? 0) + A.rect.y * ea }));
            },
            [u, D, W, eu, A, ec, ej, Y, ea],
        ),
        eN = a.useCallback(
            (e) => {
                null == u ||
                    null == D ||
                    (((0, lA.Ch)(D.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, eO.dv)(u, (0, lA.Q9)(D.target, D.draft), e), ei(), N(null)));
            },
            [u, D, ei],
        ),
        eS = a.useCallback((e) => (null == u ? Promise.reject(Error("no project")) : (0, e0.vX)(u, e)), [u]),
        eC = a.useCallback(() => {
            null == u ||
                null == W ||
                null == p ||
                ((0, lA.Ch)(W.draft) && ((0, G.pV)(u, p, W.id, W.draft.trim()), X({ ...W, editing: !1 })));
        }, [u, W, p]),
        eI = a.useCallback(() => {
            null != u && null != W && null != p && ((0, G.aC)(u, p, W.id), X(null));
        }, [u, W, p]),
        eE = o
            ? b
                ? R.intl.string(T.default["Eb/YV9"])
                : k
                  ? R.intl.string(T.default.FD30bh)
                  : R.intl.formatToPlainString(T.default.dTSqLF, { count: f.length })
            : "",
        e_ = Q && null != Y,
        eM = S && null == W,
        eT = D?.target ?? eh?.target ?? null,
        eR = D ?? z,
        eP = D ?? (z?.instant === !0 ? null : z),
        eL =
            null != eh && null != Y
                ? (function (e, t) {
                      let { left: n, top: l } = fm(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(ff(eh.target, eh.anchor, Y, ea), Y)
                : null;
    return (
        a.useEffect(() => {
            let e = r();
            if (eh?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = eh;
            fu(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [eh, r]),
        (0, eZ.createPortal)(
            (0, i.jsxs)("div", {
                ref: ew,
                className: fo.Li,
                children: [
                    (0, i.jsx)(tZ.A, {
                        tag: "div",
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-design-announcer",
                        children: eE,
                    }),
                    e_
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)("div", {
                                      className: fo.MT,
                                      style: { left: Y.left, top: Y.top, width: Y.width, height: Y.height },
                                      "data-plain-cursor": eM ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": R.intl.string(T.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: em,
                                      onMouseLeave: ep,
                                      onClick: ex,
                                      onKeyDown: eA,
                                  }),
                                  null != A && null == A.marker && null == D && null == W
                                      ? (0, i.jsx)(fk, { box: fd(A, Y, ea) })
                                      : null,
                                  (0, i.jsx)("div", {
                                      ref: E,
                                      className: fo.aZ,
                                      children: (0, i.jsx)("div", {
                                          className: fo.xz,
                                          "data-shown": null != A && null == W && null == D ? "" : void 0,
                                          "data-instant": H ? "" : void 0,
                                          children: (0, i.jsxs)(v.E, {
                                              variant: "body-xs/medium",
                                              className: fo.Ux,
                                              children: [
                                                  null == P
                                                      ? null
                                                      : (0, i.jsx)("span", { className: fo.Tl, children: P.kind }),
                                                  null == P || "" === P.name
                                                      ? null
                                                      : (0, i.jsxs)("span", {
                                                            className: fo.kh,
                                                            children: [" ", P.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, i.jsx)("div", {
                                      ref: _,
                                      className: fo.Y,
                                      children: eM ? (0, i.jsx)("div", { className: fo.u }) : null,
                                  }),
                                  null == eP
                                      ? null
                                      : (0, i.jsx)("div", {
                                            className: fo.aZ,
                                            style: {
                                                transform: `translate3d(${eP.at.x + 20}px, ${eP.at.y + 20}px, 0)`,
                                            },
                                            children: (0, i.jsx)("div", {
                                                className: fo.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == D ? "" : void 0,
                                                children: (0, i.jsxs)(v.E, {
                                                    variant: "body-xs/medium",
                                                    className: fo.Ux,
                                                    children: [
                                                        (0, i.jsx)("span", {
                                                            className: fo.Tl,
                                                            children: eP.label.kind,
                                                        }),
                                                        "" === eP.label.name
                                                            ? null
                                                            : (0, i.jsxs)("span", {
                                                                  className: fo.kh,
                                                                  children: [" ", eP.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eT && null == eT.marker
                                      ? (0, i.jsx)("div", { className: fo.D0, style: fd(eT, Y, ea), "aria-hidden": !0 })
                                      : null,
                                  f.map((e, t) => {
                                      let n = ff(e.target, e.anchor, Y, ea),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, i.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: fo.xL,
                                              style: { ...fm(n, Y), width: 24, height: 24 },
                                              "aria-label": R.intl.formatToPlainString(T.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: (0, lA.Bx)(e.target),
                                              }),
                                              "aria-expanded": W?.id === e.id,
                                              "data-testid": "conjure-design-marker",
                                              onMouseEnter: () => {
                                                  null == D && X(l);
                                              },
                                              onFocus: () => {
                                                  null == D && X(l);
                                              },
                                              onClick: (e) => {
                                                  (e.stopPropagation(), ei(), X(l));
                                              },
                                              children: (0, i.jsx)(fp, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eR || null == u
                                      ? null
                                      : (0, i.jsx)(e5, {
                                            projectId: u,
                                            at: { x: eR.at.x + 20, y: eR.at.y + 20 },
                                            bounds: Y,
                                            kind: eR.label.kind,
                                            value: eR.draft,
                                            canSubmit: null != D && (0, lA.Ch)(eR.draft),
                                            onChange: (e) => {
                                                null != D && F({ ...D, draft: e });
                                            },
                                            onSubmit: eN,
                                            onDismiss: ei,
                                            onUploadFile: eS,
                                            closing: null == D,
                                        }),
                                  null != eh && null != W && null != eL
                                      ? (0, i.jsxs)(fx, {
                                            point: eL,
                                            frame: Y,
                                            authorId: eh.authorId,
                                            title: (0, lA.Bx)(eh.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                W.confirmingRemove ? X({ ...W, confirmingRemove: !1 }) : X(null);
                                            },
                                            onMouseLeave: () => {
                                                W.editing || W.confirmingRemove || X(null);
                                            },
                                            children: [
                                                W.editing
                                                    ? (0, i.jsx)(np.f, {
                                                          autoFocus: !0,
                                                          label: R.intl.string(T.default.KCYqWL),
                                                          hideLabel: !0,
                                                          value: W.draft,
                                                          maxLength: 1e3,
                                                          rows: 3,
                                                          onChange: (e) => X({ ...W, draft: e }),
                                                          onKeyDown: (e) => {
                                                              "Enter" !== e.key ||
                                                                  e.shiftKey ||
                                                                  (e.preventDefault(), eC());
                                                          },
                                                      })
                                                    : (0, i.jsx)(v.E, {
                                                          variant: "body-sm/normal",
                                                          color: "text-default",
                                                          className: fo.aC,
                                                          children: eh.comment,
                                                      }),
                                                (0, G.It)(eh, p)
                                                    ? (0, i.jsx)("div", {
                                                          className: fo.eB,
                                                          children: W.confirmingRemove
                                                              ? (0, i.jsxs)(i.Fragment, {
                                                                    children: [
                                                                        (0, i.jsx)(v.E, {
                                                                            variant: "body-xs/normal",
                                                                            color: "text-muted",
                                                                            className: fo.nv,
                                                                            children: R.intl.string(T.default.wOHvts),
                                                                        }),
                                                                        (0, i.jsx)(d.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: R.intl.string(T.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                X({ ...W, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, i.jsx)(d.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: R.intl.string(T.default.friIzR),
                                                                            "data-testid":
                                                                                "conjure-design-remove-confirm",
                                                                            onClick: eI,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, i.jsxs)(i.Fragment, {
                                                                    children: [
                                                                        (0, i.jsx)(d.$, {
                                                                            variant: "critical-secondary",
                                                                            size: "sm",
                                                                            text: R.intl.string(T.default.friIzR),
                                                                            onClick: () =>
                                                                                X({
                                                                                    ...W,
                                                                                    editing: !1,
                                                                                    confirmingRemove: !0,
                                                                                }),
                                                                        }),
                                                                        W.editing
                                                                            ? (0, i.jsx)(d.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !(0, lA.Ch)(W.draft),
                                                                                  text: R.intl.string(T.default.iicRP9),
                                                                                  onClick: eC,
                                                                              })
                                                                            : (0, i.jsx)(d.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: R.intl.string(
                                                                                      T.default["6eW9lg"],
                                                                                  ),
                                                                                  onClick: () =>
                                                                                      X({
                                                                                          ...W,
                                                                                          editing: !0,
                                                                                          draft: eh.comment,
                                                                                      }),
                                                                              }),
                                                                    ],
                                                                }),
                                                      })
                                                    : null,
                                            ],
                                        })
                                      : null,
                              ],
                          })
                        : null,
                ],
            }),
            document.body,
        )
    );
}
function fp(e) {
    let { authorId: t } = e,
        n = (0, c.bG)([nw.default], () => nw.default.getUser(t), [t]);
    return (0, i.jsx)(iA.eu, {
        src: null == n ? null : iS.Ay.getUserAvatarURL(n),
        size: iN._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function fx(e) {
    let t,
        n,
        l,
        r,
        s,
        u,
        { point: o, frame: c, authorId: d, title: f, testId: m, onDismiss: h, onMouseLeave: g, children: p } = e,
        x = a.useRef(null),
        j = a.useRef(null),
        [b, y] = a.useState(fc);
    a.useLayoutEffect(() => {
        let e = x.current?.getBoundingClientRect(),
            t = j.current?.getBoundingClientRect();
        if (null == e || null == t || e.width < 1 || t.width < 1) return;
        let n = { x: t.left + t.width / 2 - e.left, y: t.top + t.height / 2 - e.top };
        y((e) => (0.5 > Math.abs(e.x - n.x) && 0.5 > Math.abs(e.y - n.y) ? e : n));
    }, []);
    let {
            left: k,
            top: w,
            originX: A,
            originY: N,
        } = ((n = Math.max((t = c.left + 8), c.left + c.width - 300 - 8)),
        (r = Math.max((l = c.top + 8), c.top + c.height - 160 - 8)),
        (s = Math.min(Math.max(o.x - b.x, t), n)),
        { left: s, top: (u = Math.min(Math.max(o.y - b.y, l), r)), originX: o.x - s, originY: o.y - u }),
        S = { left: k, top: w, "--custom-conjure-card-origin-x": `${A}px`, "--custom-conjure-card-origin-y": `${N}px` };
    return (0, i.jsxs)("div", {
        ref: x,
        className: fo.Nr,
        style: S,
        "data-testid": m,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, i.jsxs)("div", {
                className: fo.MY,
                children: [
                    (0, i.jsx)("span", { ref: j, className: fo.ip, children: (0, i.jsx)(fp, { authorId: d }) }),
                    (0, i.jsx)(v.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        className: fo.Qc,
                        children: f,
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: fo.zI, children: p }),
        ],
    });
}
let fv = 300,
    fj = 2;
function fb(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function fy(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function fk(e) {
    let { box: t } = e;
    return (0, i.jsx)("div", { className: fo.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var fw = n(318774),
    fA = n(697744),
    fN = n(130324);
function fS(e) {
    let t = (0, fA.c)(),
        { events: n, getDuration: l } = t;
    a.useEffect(() => {
        let e = null,
            t = 0;
        return (
            (e = requestAnimationFrame(function r() {
                ((e = null), null != l()) ? n.onMouseEnter() : t++ < 120 && (e = requestAnimationFrame(r));
            })),
            () => {
                null != e && cancelAnimationFrame(e);
            }
        );
    }, [n, l]);
    let r = (0, tz.j)();
    return (
        a.useEffect(() => {
            if (!r) return;
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e, r]),
        t
    );
}
function fC(e) {
    let { className: t } = e,
        { Component: n, events: l } = fS(3e4);
    return (0, i.jsxs)("div", {
        className: o()(t, fN.Ve),
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, i.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, i.jsx)(v.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                className: fN.ol,
                children: R.intl.string(T.default.AyiQEp),
            }),
        ],
    });
}
var fI = n(251363),
    fE = n(944142),
    f_ = n(532247),
    fM = n(501628);
function fT(e) {
    let { progress: t } = e,
        { Component: n } = fS(1500),
        l = D.Q_.useSetting();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, i.jsx)(v.E, { variant: "body-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, i.jsx)("div", {
                className: fM.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, i.jsx)(
                        "span",
                        {
                            className: fM.PM,
                            "data-state": n < t.stepIndex ? "done" : n === t.stepIndex ? "current" : "todo",
                        },
                        n,
                    ),
                ),
            }),
            l && null != t.stepLabel
                ? (0, i.jsx)(v.E, { variant: "body-xs/normal", color: "text-overlay-light", children: t.stepLabel })
                : null,
        ],
    });
}
function fR(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        u = (0, c.bG)([fE.A], () => (s ? fE.A.getLiveReload(t) : null), [s, t]),
        o = (0, eP.A)(n, r)?.id ?? null,
        d = u?.phase ?? null,
        f = u?.background === !0,
        m = (function (e, t, n) {
            let l = (0, f_.dv)(e),
                [r, i] = a.useState(null),
                [s, u] = a.useState(l),
                [o, d] = a.useState(t);
            s !== l && (u(l), d(t), i(null != l || o ? null : (0, f_.QP)(e, s)));
            let f = (0, c.bG)(
                    [eh.A],
                    () => {
                        let e = eh.A.getFrame(n);
                        return (0, ej.x1)(e) && e.data.proxyTicketRefreshing;
                    },
                    [n],
                ),
                m = a.useRef(f),
                h = a.useRef(!1);
            return (
                a.useEffect(() => {
                    ((m.current = f), f && (h.current = !0));
                }, [f]),
                a.useEffect(() => {
                    if (null == r) return;
                    function e() {
                        return i(null);
                    }
                    function t(t) {
                        null != t.target && t.target === (0, fI.ow)(null, n) && e();
                    }
                    ((h.current = m.current), document.addEventListener("load", t, !0));
                    let l = window.setTimeout(() => {
                            h.current || e();
                        }, 4e3),
                        a = window.setTimeout(e, 15e3);
                    return () => {
                        (document.removeEventListener("load", t, !0), window.clearTimeout(l), window.clearTimeout(a));
                    };
                }, [r, n]),
                r
            );
        })(d, f, o),
        h = f ? null : (0, f_.h_)(d, u?.step ?? null, m);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(tZ.A, { tag: "div", role: "status", "aria-live": "polite", children: h?.title ?? "" }),
            null != h
                ? (0, i.jsx)("div", {
                      className: fM.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, i.jsx)(fT, { progress: h }),
                  })
                : null,
        ],
    });
}
let fP = 0;
var fL = n(782134),
    f$ = n(357858),
    fq = n(343030),
    fD = n(11411),
    fF = n(111518),
    fO = n(240666);
let fG = { width: 1 / 0, height: 1 / 0 };
function fz(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fG;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var fU = n(702083);
function fB(e) {
    let { children: t } = e,
        { mobile: n, landscape: l } = (0, c.cf)([eL.A], () => ({
            mobile: eL.A.isBuilderPreviewMobile(),
            landscape: eL.A.isBuilderPreviewLandscape(),
        })),
        r = a.useRef(null),
        [s, u] = a.useState(null);
    a.useLayoutEffect(() => {
        let e = r.current;
        if (null == e) return;
        function t() {
            if (null == e) return;
            let t = { width: e.clientWidth, height: e.clientHeight };
            u((e) => (e?.width === t.width && e.height === t.height ? e : t));
        }
        t();
        let n = new ResizeObserver(t);
        return (n.observe(e), () => n.disconnect());
    }, []);
    let d = null != s && s.width > 0 ? s : null,
        f = n ? fz(l, d ?? void 0) : null;
    return (0, i.jsx)("div", {
        ref: r,
        className: o()(fU.dw, { [fU.PQ]: null != f }),
        children: (0, i.jsx)("div", { className: o()(fU.R9, { [fU.Vg]: null != f }), style: f ?? void 0, children: t }),
    });
}
var fK = n(347927);
function fH(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, i.jsxs)("div", {
        className: o()(fK.Bf, l && fK.Qx),
        children: [
            (0, i.jsxs)("div", {
                className: fK.Ux,
                children: [
                    (0, i.jsx)(x.D, { variant: "heading-sm/semibold", color: "text-default", children: t }),
                    null != n
                        ? (0, i.jsx)(v.E, { variant: "body-md/medium", color: "text-subtle", children: n })
                        : null,
                ],
            }),
            r,
        ],
    });
}
var fV = n(957272);
function fW(e) {
    let { applicationId: t, surface: n, launch: l, frameOverlay: r } = e,
        { frame: a, state: s } = (0, fF.A)({ applicationId: t, surface: n, launch: l });
    if (((0, fO.A)(t, n), s === fF.n.Launched)) {
        let e = (0, i.jsx)(fD.A, { frameId: a.id, level: fq.A.WithinAppContent, className: fV.Z7, overlay: r });
        return (0, e$.Q5)(n) ? (0, i.jsx)(fB, { children: e }) : e;
    }
    return (0, i.jsx)(fX, { state: s });
}
function fX(e) {
    let { state: t } = e;
    switch (t) {
        case fF.n.RenderingElsewhere:
            return (0, i.jsx)("div", {
                className: fV.qs,
                children: (0, i.jsx)(fH, {
                    title: R.intl.string(T.default["9kpdo7"]),
                    body: R.intl.string(T.default.iIA8Nj),
                }),
            });
        case fF.n.NoApplication:
            return (0, i.jsx)(fC, { className: fV.qs });
        case fF.n.DoesNotSupportSurface:
            return (0, i.jsx)("div", {
                className: fV.qs,
                children: (0, i.jsx)(fH, {
                    title: R.intl.string(T.default["7k4GyN"]),
                    body: R.intl.string(T.default.zdIy3R),
                }),
            });
        case fF.n.Error:
            return (0, i.jsxs)("div", {
                className: fV.qs,
                children: [
                    (0, i.jsx)(x.D, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        children: R.intl.string(T.default.lTPbnG),
                    }),
                    (0, i.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-feedback-critical",
                        className: fV.tj,
                        children: R.intl.string(T.default.e6GiAZ),
                    }),
                ],
            });
        case fF.n.AwaitingLaunch:
        case fF.n.Loading:
            return (0, i.jsx)("div", { className: fV.qs, children: (0, i.jsx)(j.y, {}) });
    }
}
var fQ = n(308528),
    fZ = n(334738),
    fY = n(699344),
    fJ = n(365971),
    f0 = n(703462);
function f1(e) {
    let { message: t } = e;
    return (0, i.jsxs)("div", {
        className: f0.f,
        children: [
            (0, i.jsx)(at.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, i.jsx)(v.E, { variant: "body-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function f2() {
    return (0, i.jsx)("div", { className: f0.f, children: (0, i.jsx)(j.y, {}) });
}
function f3(e) {
    let t,
        n,
        { projectId: l, previewApplicationId: r } = e,
        [s, u] = a.useState(null),
        o = s?.previewApplicationId === r ? s.channelId : null,
        d = (0, c.bG)([ny.A], () => (null != o ? ny.A.getChannel(o) : null), [o]);
    ((t = d?.id ?? null),
        a.useEffect(() => {
            null != t && fQ.A.preload(ev.ME, t);
        }, [t]),
        (n = (0, c.bG)([ot.A], () => ot.A.isFocused())),
        a.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, fJ.Xg)();
            return (
                (0, fZ.yl)(t, e),
                () => {
                    (0, fZ.dm)(t, e);
                }
            );
        }, [t, n]));
    let [f, m] = a.useState(null),
        h = f === r;
    return (a.useEffect(() => {
        if (null != d || h) return;
        let e = !1;
        return (
            (0, Y.CN)(l).then(
                (t) => {
                    e || u({ previewApplicationId: r, channelId: t });
                },
                () => {
                    e || m(r);
                },
            ),
            () => {
                e = !0;
            }
        );
    }, [l, r, d, h]),
    h)
        ? (0, i.jsx)(f1, { message: R.intl.string(T.default["VP/O8s"]) })
        : null == d
          ? (0, i.jsx)(f2, {})
          : (0, i.jsx)("div", {
                className: f0.g,
                children: (0, i.jsx)(fY.A, { channel: d, guild: null, chatInputType: sF.oU.SIDEBAR }, d.id),
            });
}
var f4 = n(765671),
    f7 = n(596977),
    f5 = n(921853),
    f9 = n(582063);
function f8(e) {
    let { projectId: t, captures: n, selected: l } = e,
        r = [...n, null],
        a = null != l ? n.indexOf(l) : n.length;
    function s(e) {
        let n = r[(a + e + r.length) % r.length];
        (0, Y.vX)(t, n?.id ?? null);
    }
    let u = R.intl.string(T.default.Gl3XtE),
        o = R.intl.string(T.default["3FvcrY"]);
    return (0, i.jsxs)("div", {
        className: f9.aF,
        children: [
            (0, i.jsx)(e1.m, {
                text: u,
                position: "top",
                children: (0, i.jsx)(tn.K, {
                    icon: f5.n,
                    size: "sm",
                    variant: "overlay-secondary",
                    "aria-label": u,
                    onClick: () => s(-1),
                }),
            }),
            (0, i.jsx)("div", {
                className: f9.Dn,
                "aria-live": "polite",
                children:
                    null != l
                        ? (0, i.jsx)(v.E, {
                              tag: "span",
                              variant: "body-sm/medium",
                              color: "text-strong",
                              lineClamp: 1,
                              children: R.intl.formatToPlainString(T.default["140n5k"], {
                                  name: l.name,
                                  index: a + 1,
                                  count: n.length,
                              }),
                          })
                        : (0, i.jsx)(v.E, {
                              tag: "span",
                              variant: "body-sm/medium",
                              color: "text-strong",
                              children: R.intl.string(T.default.wVJL0P),
                          }),
            }),
            (0, i.jsx)(e1.m, {
                text: o,
                position: "top",
                children: (0, i.jsx)(tn.K, {
                    icon: tY._,
                    size: "sm",
                    variant: "overlay-secondary",
                    "aria-label": o,
                    onClick: () => s(1),
                }),
            }),
        ],
    });
}
var f6 = n(625903),
    me = n(666476);
let mt = ["image/png", "image/jpeg", "image/gif", "image/webp"];
function mn() {
    (0, E.P0)({ text: R.intl.string(T.default.jj3abP), variant: "critical" });
}
function ml(e) {
    let { projectId: t } = e,
        n = a.useRef(null),
        l = a.useRef(null),
        r = R.intl.string(T.default["xd/1IW"]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(ey.Y, {
                targetElementRef: n,
                align: "left",
                position: "bottom",
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, i.jsx)(mr, { projectId: t, onClose: n, onUpload: () => l.current?.click() });
                },
                children: (e) => {
                    let { onClick: t } = e;
                    return (0, i.jsx)("div", {
                        ref: n,
                        className: f9.m2,
                        children: (0, i.jsx)(e1.m, {
                            position: "bottom",
                            text: r,
                            asContainer: !0,
                            children: (0, i.jsx)(tn.K, {
                                "aria-label": r,
                                icon: f6.SettingsIcon,
                                variant: "overlay-secondary",
                                size: "sm",
                                onClick: t,
                            }),
                        }),
                    });
                },
            }),
            (0, i.jsx)("input", {
                ref: l,
                type: "file",
                accept: mt.join(","),
                hidden: !0,
                "aria-hidden": !0,
                tabIndex: -1,
                onChange: (e) => {
                    let n = e.currentTarget.files?.[0];
                    ((e.currentTarget.value = ""),
                        null != n &&
                            (mt.includes(n.type)
                                ? n.size > me.aI
                                    ? (0, E.P0)({ text: R.intl.string(T.default.T8Spiu), variant: "critical" })
                                    : (0, rF.M$)(t, n).catch(mn)
                                : (0, E.P0)({ text: R.intl.string(T.default.AO7zpk), variant: "critical" })));
                },
            }),
        ],
    });
}
function mr(e) {
    let { projectId: t, onClose: n, onUpload: l } = e,
        r = (0, c.bG)([rD.A], () => rD.A.getBackground(t)),
        a = r?.blur !== !1,
        s = r?.imageEtag ?? null;
    return (0, i.jsxs)(ek.W, {
        "data-menu-migrated": !0,
        navId: "conjure-overlay-background",
        "aria-label": R.intl.string(T.default["xd/1IW"]),
        onClose: n,
        onSelect: void 0,
        children: [
            (0, i.jsxs)(ew.rX, {
                children: [
                    (0, i.jsx)(ew.Dr, {
                        id: "conjure-overlay-background-upload",
                        label: R.intl.string(T.default.uQpDky),
                        icon: lu.X,
                        action: () => {
                            (n(), l());
                        },
                    }),
                    (0, i.jsx)(ew.Dr, {
                        id: "conjure-overlay-background-reset",
                        label: R.intl.string(T.default.AiAz8J),
                        icon: dE.RetryIcon,
                        disabled: null == s,
                        action: () => {
                            (n(), (0, rF.Og)(t).catch(mn));
                        },
                    }),
                ],
            }),
            (0, i.jsx)(ew.rX, {
                children: (0, i.jsx)(ew.fP, {
                    id: "conjure-overlay-background-blur",
                    label: R.intl.string(T.default["hyN+kc"]),
                    checked: a,
                    action: () => {
                        (0, rF.Y1)(t, !a) || mn();
                    },
                }),
            }),
        ],
    });
}
function mi(e) {
    let { applicationId: t, projectId: n, size: l, frameOverlay: r } = e,
        { ref: s, width: u, height: o } = (0, f4.Ay)(),
        { captures: c, selected: d } = rq(n),
        f = (function (e, t, n) {
            let { width: l, height: r } = e;
            if (null == l || null == r || l <= 0 || r <= 0) return { top: 24, end: 24, scale: 1 };
            if (null == t || t.width <= 0 || t.height <= 0)
                return { top: 24, end: 24, scale: el({ width: l - 48, height: r - 48 }, n) };
            let i = t.width / t.height,
                a = Math.min(l, r * i),
                s = a / 1920,
                u = el({ width: 1872, height: 1920 / i - 48 }, n);
            return { top: (r - a / i) / 2 + 24 * s, end: (l - a) / 2 + 24 * s, scale: u * s };
        })({ width: u, height: o }, d, l);
    return (
        a.useEffect(() => (0, f7.L0)(), []),
        (0, i.jsxs)("div", {
            className: f9.JH,
            children: [
                (0, i.jsx)(rG, { projectId: n, gameCaptures: !0 }),
                (0, i.jsx)("div", {
                    ref: s,
                    className: f9.dw,
                    children: (0, i.jsx)("div", {
                        className: f9.HL,
                        style: {
                            "--custom-conjure-overlay-widget-width": `${l.width}px`,
                            "--custom-conjure-overlay-widget-height": `${l.height}px`,
                            "--custom-conjure-overlay-widget-top": `${f.top}px`,
                            "--custom-conjure-overlay-widget-end": `${f.end}px`,
                            "--custom-conjure-overlay-widget-scale": String(f.scale),
                        },
                        children: (0, i.jsx)(fW, { applicationId: t, surface: ej.ZN, frameOverlay: r }),
                    }),
                }),
                null != n ? (0, i.jsx)(ml, { projectId: n }) : null,
                null != n && c.length > 0 ? (0, i.jsx)(f8, { projectId: n, captures: c, selected: d }) : null,
            ],
        })
    );
}
function ma(e) {
    let { onAddBot: t, loading: n = !1 } = e;
    return (0, i.jsx)(fH, {
        title: R.intl.string(T.default.xlEjZ8),
        body: R.intl.string(T.default["4ByPbd"]),
        children: (0, i.jsx)(d.$, {
            size: "sm",
            variant: "primary",
            text: R.intl.string(T.default.RGeB11),
            onClick: t,
            loading: n,
        }),
    });
}
var ms = n(409478),
    mu = n(652227);
function mo(e) {
    let {
            applicationId: t,
            previewApplicationId: n,
            surface: l,
            frameLaunchParams: r,
            previewReady: a,
            previewGate: s,
            availability: u,
            activeMode: o,
            widgetApplicationId: d,
            overlayWidgetSize: f = et,
            projectId: m,
            renderFrameOverlay: h,
            paused: g = !1,
            onResume: p,
        } = e,
        x = (0, c.bG)([lC.A], () => null != m && null != lC.A.getSetupStartedAt(m), [m]);
    return s?.type === "checking"
        ? (0, i.jsx)("div", { className: mu.qs, children: (0, i.jsx)(j.y, {}) })
        : s?.type === "bot_install"
          ? (0, i.jsx)("div", {
                className: mu.qs,
                children: (0, i.jsx)(ma, { onAddBot: s.onAddBot, loading: s.loading }),
            })
          : a
            ? null == t
                ? null
                : (0, i.jsxs)("div", {
                      "data-conjure-entrance": !0,
                      className: mu.RG,
                      children: [
                          (0, ea.yf)(u, o)
                              ? g
                                  ? (0, i.jsx)(mc, { projectId: m, onResume: p })
                                  : (0, i.jsx)(fW, { applicationId: t, surface: l, launch: r, frameOverlay: h?.(l) })
                              : null,
                          "widget" === o && null != d
                              ? "unavailable-authorization-revoked" === u.profileState
                                  ? (0, i.jsx)("div", {
                                        className: mu.qs,
                                        children: (0, i.jsx)(fH, {
                                            wide: !0,
                                            title: R.intl.string(T.default["08U+YO"]),
                                            body: R.intl.string(T.default.pKBfrc),
                                        }),
                                    })
                                  : (0, i.jsx)(ms.A, { applicationId: d })
                              : null,
                          "overlay" === o && u.modes.includes("overlay")
                              ? (0, i.jsx)(mi, { applicationId: t, projectId: m, size: f, frameOverlay: h?.(ej.ZN) })
                              : null,
                          "bot" === o && null != n && null != m
                              ? (0, i.jsx)(f3, { projectId: m, previewApplicationId: n })
                              : null,
                      ],
                  })
            : x
              ? (0, i.jsx)("div", { className: mu.qs, children: (0, i.jsx)(j.y, {}) })
              : (0, i.jsx)(fC, { className: mu.qs });
}
function mc(e) {
    let { projectId: t, onResume: n } = e;
    return (
        (0, f$.Pu)(t),
        (0, i.jsx)("div", {
            className: mu.qs,
            children: (0, i.jsx)(fH, {
                wide: !0,
                title: R.intl.string(T.default.MMWEH2),
                body: R.intl.string(T.default.iKSu55),
                children:
                    null != n
                        ? (0, i.jsx)(d.$, {
                              size: "sm",
                              variant: "primary",
                              icon: fL.PlayIcon,
                              text: R.intl.string(T.default.ZKd2Cw),
                              onClick: n,
                          })
                        : null,
            }),
        })
    );
}
var md = n(750506),
    mf = n(867193),
    mm = n(539197),
    mh = n(977020);
function mg(e) {
    let { projectId: t } = e,
        n = (0, mm.X2)(t),
        l = (function (e) {
            let [t, n] = a.useState(null);
            return (
                a.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, mm.Ie)(e);
                        n((e) =>
                            null != e &&
                            e.left === t.left &&
                            e.top === t.top &&
                            e.width === t.width &&
                            e.height === t.height
                                ? e
                                : t,
                        );
                    }
                    t();
                    let l = window.setInterval(t, 250);
                    return (
                        window.addEventListener("resize", t),
                        () => {
                            (window.clearInterval(l), window.removeEventListener("resize", t));
                        }
                    );
                }, [e]),
                null == e ? null : t
            );
        })(n?.iframe ?? null);
    if (null == n || null == l) return null;
    let { left: r, top: s, width: u, height: c, scale: d } = l;
    function f(e, t) {
        return { "--custom-conjure-cursor-x": `${e * d}px`, "--custom-conjure-cursor-y": `${t * d}px` };
    }
    return (0, i.jsxs)("div", {
        className: mh.$Q,
        style: { left: r, top: s, width: u, height: c, "--custom-conjure-cursor-scale": d },
        "aria-hidden": !0,
        [mm.t$]: "",
        children: [
            n.presses > 0
                ? (0, i.jsxs)(
                      a.Fragment,
                      {
                          children: [
                              (0, i.jsx)("div", { className: o()(mh.hN, mh.vW), style: f(n.pressX, n.pressY) }),
                              (0, i.jsx)("div", { className: o()(mh.hN, mh.A7), style: f(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, i.jsx)("svg", {
                className: o()(mh.UE, { [mh.SP]: n.shown, [mh.Vq]: n.pressed, [mh.GP]: n.dipping }),
                style: f(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, i.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var mp = n(417760);
function mx(e) {
    let { phase: t, projectId: n, compact: l } = e,
        { stop: r, stopping: s } = (function (e) {
            let t = (0, c.bG)([lE.A], () => null != e && lE.A.isThinking(e)),
                [n, l] = a.useState(!1),
                [r, i] = a.useState(t);
            (t !== r && (i(t), t || l(!1)),
                a.useEffect(() => {
                    if (!n) return;
                    let e = setTimeout(() => l(!1), 5e3);
                    return () => clearTimeout(e);
                }, [n]));
            let s = a.useCallback(() => {
                null != e && (l(!0), (0, eO.fu)(e));
            }, [e]);
            return { stop: t ? s : null, stopping: n };
        })(n),
        u = (0, O.CU)(n),
        f = "controlling" === t,
        m = R.intl.string(f ? (u ? T.default["VJW/5P"] : T.default["+hD2Iz"]) : T.default["h+i1r9"]),
        h =
            null != r
                ? (0, i.jsx)(d.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: R.intl.string(T.default.oU59sU),
                      loading: s,
                      onClick: r,
                      "data-testid": "conjure-control-stop",
                  })
                : null;
    return l
        ? (0, i.jsxs)("div", {
              className: o()(mp.M0, mp.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  f
                      ? (0, i.jsx)(o1.i, { size: 12, color: "currentColor" })
                      : (0, i.jsx)(a_.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, i.jsx)(v.E, { variant: "body-sm/semibold", color: "none", className: mp.ID, children: m }),
                  f ? (0, i.jsx)(tZ.A, { children: R.intl.string(T.default.fg1sor) }) : null,
                  f ? (0, i.jsx)("div", { className: mp.lC, children: h }) : null,
              ],
          })
        : (0, i.jsxs)("div", {
              className: mp.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, i.jsxs)("div", {
                      className: mp.sp,
                      children: [
                          (0, i.jsx)(a_.SparklesIcon, { size: "sm", color: "currentColor" }),
                          f ? (0, i.jsx)(o1.i, { size: 12, color: "currentColor" }) : null,
                          (0, i.jsxs)("div", {
                              className: mp.f4,
                              children: [
                                  (0, i.jsx)(v.E, {
                                      variant: "body-sm/semibold",
                                      color: "none",
                                      className: mp.w9,
                                      children: m,
                                  }),
                                  f
                                      ? (0, i.jsx)(v.E, {
                                            variant: "body-xs/medium",
                                            color: "none",
                                            className: mp.Rb,
                                            children: R.intl.string(T.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  f ? (0, i.jsx)("div", { className: mp.lC, children: h }) : null,
              ],
          });
}
function mv(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveTarget: r, frameId: s } = e,
        u = (0, O.Zv)(null != n && n === l ? t : null),
        o = (function (e) {
            let [t, n] = a.useState(e),
                [l, r] = a.useState(!1);
            return (e !== t && (n(e), r(!e)),
            a.useEffect(() => {
                if (!l) return;
                let e = setTimeout(() => r(!1), 2400);
                return () => clearTimeout(e);
            }, [l]),
            e)
                ? "controlling"
                : l
                  ? "handoff"
                  : "idle";
        })(u),
        c = (0, K.Rv)(),
        d = (0, eg.cR)(s);
    a.useEffect(() => {
        u && d && null != s && (0, eg.BL)(s);
    }, [u, d, s]);
    let [f, m] = a.useState(null),
        [h, g] = a.useState(null),
        [p, x] = a.useState(null),
        v = "idle" !== o;
    a.useEffect(() => {
        if (!v) return;
        function e() {
            let e = e9(r());
            m((t) => (e8(t, e) ? t : e));
            let t = null == h ? null : e9(h);
            (x((e) => (e8(e, t) ? e : t)), null != h && (0, mf.C)(h.getBoundingClientRect().height));
        }
        e();
        let t = window.setInterval(e, 250);
        window.addEventListener("resize", e);
        let n = null == h ? null : new ResizeObserver(e);
        return (
            null != h && n?.observe(h),
            () => {
                (window.clearInterval(t),
                    window.removeEventListener("resize", e),
                    n?.disconnect(),
                    null != h && (0, mf.C)(0));
            }
        );
    }, [v, r, h]);
    let j = "idle" !== o && null != f,
        b = j && "controlling" === o && !c,
        y = null != f && f.width < 420,
        k = null == f ? void 0 : { left: f.left, top: f.top, width: f.width, height: f.height },
        w =
            null == f
                ? void 0
                : (function (e, t) {
                      if (null == t) return { left: e.left, top: e.top, width: e.width, height: e.height };
                      let n = Math.min(e.left, t.left),
                          l = Math.min(e.top, t.top);
                      return {
                          left: n,
                          top: l,
                          width: Math.max(e.left + e.width, t.left + t.width) - n,
                          height: Math.max(e.top + e.height, t.top + t.height) - l,
                      };
                  })(f, p),
        A = (function () {
            let [e] = a.useContext(md.uY),
                [t] = a.useState(() => document.createElement("div"));
            return (
                a.useLayoutEffect(() => {
                    if (null != e) return (e.prepend(t), () => t.remove());
                }, [e, t]),
                null == e ? document.body : t
            );
        })();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            j
                ? (0, i.jsx)("div", {
                      ref: g,
                      className: mp.D,
                      "data-phase": o,
                      children: (0, i.jsx)("div", {
                          className: mp.QF,
                          children: (0, i.jsx)(mx, { phase: o, projectId: t, compact: y }),
                      }),
                  })
                : null,
            (0, eZ.createPortal)(
                (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(tZ.A, {
                        tag: "div",
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-control-announcer",
                        children:
                            "controlling" === o
                                ? R.intl.string(T.default.oWcemF)
                                : "handoff" === o
                                  ? R.intl.string(T.default["h+i1r9"])
                                  : "",
                    }),
                }),
                document.body,
            ),
            b
                ? (0, eZ.createPortal)(
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", {
                                  className: mp.ys,
                                  style: w,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)("div", {
                                  className: mp.om,
                                  style: k,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)(mg, { projectId: t }),
                          ],
                      }),
                      A,
                  )
                : null,
        ],
    });
}
var mj = n(399503),
    mb = n(853555),
    my = n(944100),
    mk = n(327152),
    mw = n(187645);
let mA = { width: 1280, height: 720 },
    mN = new Map(),
    mS = !1;
function mC() {
    let e = new Map();
    for (let t of new Set([...lE.A.getActivityOrderedProjectIds(), ...(0, O.T7)()])) {
        if (!(lE.A.isThinking(t) || (0, O.wK)(t)) || J.A.isPaused(t)) continue;
        let n = (function (e) {
            let t = eT.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = [(0, e$.Rc)(t), (0, e$.Th)(t)].find(ej.x1);
            return n?.id ?? null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [l, r] of [...mN]) {
        var t, n;
        e.get(l) !== r.frameId &&
            ((t = l),
            (n = r),
            mN.delete(t),
            n.unregisterLookup(),
            my.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove(),
            (0, mk.Pn)(n.frameId, null));
    }
    for (let [t, n] of e)
        mN.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = mw.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    mI(n, e, t),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (mN.set(e, l),
                    (l.unregisterLookup = (0, mb.Ng)(e, () => (0, fI.n5)(n, t))),
                    my.A.registerFrameTarget(t, n, fq.A.Backstage, void 0));
            })(t, n);
    for (let [e, t] of mN) mI(t.element, e, t.frameId);
}
function mI(e, t, n) {
    if (eh.A.getFrame(n)?.surface.type === es.U.OVERLAY) {
        let l = er(eT.Ay.getProject(t));
        (e.classList.remove(mw.L),
            (e.style.width = `${l.width}px`),
            (e.style.height = `${l.height}px`),
            (0, mk.Pn)(n, l));
        return;
    }
    let l = eL.A.isBuilderPreviewMobile();
    e.classList.toggle(mw.L, !l);
    let r = l ? fz(eL.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != r ? `${r.width}px` : ""),
        (e.style.height = null != r ? `${r.height}px` : ""),
        (0, mk.Pn)(n, r ?? mA));
}
var mE = n(873727),
    m_ = n(850333),
    mM = n(418842),
    mT = n(413599);
let mR = 0;
var mP = n(487887);
let mL = null;
var m$ = n(949621);
function mq(e) {
    let { projectId: t } = e,
        n = (0, c.bG)(
            [eT.Ay],
            () => {
                let e = eT.Ay.getProject(t);
                return null == e || null != e.install_scope_setup ? null : e.install_scope;
            },
            [t],
        );
    if (null == n) return null;
    let l = "guild" === n,
        r = R.intl.string(l ? T.default.cAExE8 : T.default["15Y/Yz"]);
    return (0, i.jsx)(tQ.u, {
        title: r,
        body: R.intl.string(l ? T.default.r8rVq1 : T.default.IZMyda),
        position: "bottom",
        children: (0, i.jsx)("span", { className: m$.I, tabIndex: 0, children: (0, i.jsx)(dV.v, { text: r }) }),
    });
}
var mD = n(541940);
function mF(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            header: u,
            mainClassName: d,
            content: f,
            sidebar: m,
            showsFrame: h,
            paused: g,
        } = e,
        [p, x] = a.useState(null),
        v = (0, eP.A)(l, s),
        j = v?.id ?? null;
    (!(function (e, t) {
        let n = (0, c.bG)([mT.A], () => (0, mE.x4)(mT.A.theme)),
            l = (0, c.bG)([m_.A], () => m_.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: i,
                highContrast: s,
                forcedColors: u,
                underlineLinks: o,
            } = (0, c.cf)([ik.Ay], () => ({
                reducedMotion: ik.Ay.useReducedMotion,
                fontScale: (0, mE.U0)(),
                highContrast: ik.Ay.isHighContrastModeEnabled,
                forcedColors: ik.Ay.useForcedColors,
                underlineLinks: ik.Ay.alwaysShowLinkDecorations,
            })),
            d = D.hH.useSetting(),
            f = (0, mM.C)(),
            m = (0, c.bG)(
                [eh.A, eL.A],
                () =>
                    eL.A.isBuilderPreviewMobile() &&
                    eh.A.getFrame(t)?.applicationId === eL.A.getPhoneLensApplicationId()
                        ? "mobile"
                        : "desktop",
                [t],
            ),
            h = a.useRef(!1),
            g = a.useRef(!1),
            p = a.useRef(null),
            x = a.useCallback(() => {
                let l = (0, fI.n5)(e, t);
                if (null == l) return;
                p.current = l;
                let a = {
                    revision: ++mR,
                    baseTheme: n,
                    customTheme: (0, mE.Lq)(),
                    uiDensity: f,
                    messageDisplayCompact: d,
                    fontScale: i,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: u,
                    underlineLinks: o,
                    formFactor: m,
                };
                (0, fs.W)(l, "set-env", a, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [n, u, i, m, t, s, d, e, r, f, o]),
            v = a.useRef(x);
        a.useLayoutEffect(() => {
            v.current = x;
        });
        let j = a.useCallback(() => {
            h.current ||
                ((h.current = !0),
                queueMicrotask(() => {
                    ((h.current = !1), g.current || v.current());
                }));
        }, []);
        (a.useEffect(
            () => (
                (g.current = !1),
                () => {
                    g.current = !0;
                }
            ),
            [],
        ),
            a.useEffect(() => {
                j();
            }, [l, j]),
            a.useLayoutEffect(() => {
                (x(), j());
            }, [j, x]),
            a.useLayoutEffect(() => {
                let n = (0, fI.n5)(e, t);
                null != n && n !== p.current && j();
            }),
            a.useEffect(() => {
                function n(n) {
                    n.target === (0, fI.n5)(e, t) && ((p.current = null), j());
                }
                return (document.addEventListener("load", n, !0), () => document.removeEventListener("load", n, !0));
            }, [t, e, j]),
            a.useEffect(() => {
                let e = new MutationObserver(j);
                return (
                    e.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "style"] }),
                    e.observe(document.head, { childList: !0, subtree: !0, characterData: !0 }),
                    () => e.disconnect()
                );
            }, [j]));
    })(p, j),
        a.useEffect(() => {
            if (null != t) return (0, mb.Ng)(t, () => (0, fI.n5)(p, j));
        }, [t, p, j]));
    let b = a.useCallback(() => (0, fI.ow)(p, j), [p, j]),
        y = a.useCallback(() => (h ? (0, fI.ow)(p, j) : p), [h, p, j]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: o()(mD.Mh, d),
                children: [
                    u,
                    g
                        ? null
                        : (0, i.jsx)(mv, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveTarget: y,
                              frameId: j,
                          }),
                    (0, i.jsx)("div", { ref: x, className: mD.fm, children: f }),
                ],
            }),
            m,
            g
                ? null
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(fg, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveIframe: b,
                              toggleRef: n,
                          }),
                          (0, i.jsx)(t$, { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: b }),
                      ],
                  }),
        ],
    });
}
function mO(e) {
    let t,
        {
            projectId: n,
            designFeedbackToggleRef: l,
            applicationId: r,
            previewApplicationId: s,
            surface: u,
            frameLaunchParams: d,
            header: f,
            chatOpen: m,
            onCloseChat: h,
            chatHeaderAction: g,
            onRestoreVersion: p,
            onImportProject: x,
            debugOpen: v = !1,
            onCloseDebug: j,
            restoreState: b,
            previewReady: y,
            previewGate: k,
            availability: w,
            activeMode: A,
            widgetApplicationId: N,
            overlayWidgetSize: S,
            previewPaused: C = !1,
            onResumePreview: I,
        } = e;
    (0, mj.k)(n, N);
    let E = u.type === es.U.MAIN || (0, e$.Q5)(u);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, c.cf)([eL.A], () => ({
            mobile: eL.A.isBuilderPreviewMobile(),
            landscape: eL.A.isBuilderPreviewLandscape(),
        }));
        a.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? mP.aX.LANDSCAPE : mP.aX.PORTRAIT), (mL = e));
                else {
                    if (mL !== e) return;
                    ((l = mP.aX.UNHANDLED), (mL = null));
                }
                uQ.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(E ? r : null);
    let _ = a.useRef(null),
        [M, P] = a.useState(0);
    (a.useEffect(() => {
        if (null == n) return;
        (0, tD.T)(n);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, tD.T)(n);
        }, 3e3);
        return () => clearInterval(e);
    }, [n]),
        (t = a.useRef(0)),
        a.useLayoutEffect(() => {
            E && ((t.current = ++fP), (0, Y.HV)(r));
        }, [r, E]),
        a.useEffect(() => {
            if (!E) return;
            let e = t.current;
            return () => {
                e === fP && (0, Y.HV)(null);
            };
        }, [r, E]),
        a.useEffect(() => {
            null != n &&
                ((0, eO.ensureConnection)(n),
                mS ||
                    ((mS = !0),
                    lE.A.addChangeListener(mC),
                    eT.Ay.addChangeListener(mC),
                    eh.A.addChangeListener(mC),
                    eL.A.addChangeListener(mC),
                    J.A.addChangeListener(mC),
                    (0, O.W3)(mC),
                    mC()));
        }, [n]),
        a.useLayoutEffect(() => {
            let e = _.current;
            if (null == e) return;
            function t() {
                null != e && P(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return (n.observe(e), () => n.disconnect());
        }, []));
    let L = Math.max(450, M - 320),
        $ = m || E;
    return (0, i.jsx)("div", {
        ref: _,
        className: mD.LB,
        children: (0, i.jsx)(mF, {
            projectId: n,
            designFeedbackToggleRef: l,
            applicationId: r,
            previewApplicationId: s,
            surface: u,
            header: f,
            showsFrame: (0, ea.yf)(w, A),
            paused: C,
            mainClassName: null == f ? void 0 : o()(mD.ez, { [mD.zt]: m }),
            content: (0, i.jsx)(mo, {
                applicationId: r,
                previewApplicationId: s,
                surface: u,
                frameLaunchParams: d,
                previewReady: y,
                previewGate: k,
                availability: w,
                activeMode: A,
                widgetApplicationId: N,
                overlayWidgetSize: S,
                projectId: n,
                paused: C,
                onResume: I,
                renderFrameOverlay: (e) =>
                    (0, i.jsx)(fR, { projectId: n, applicationId: r, previewApplicationId: s, surface: e }),
            }),
            sidebar:
                null != n && $
                    ? (0, i.jsx)("div", {
                          className: m ? mD.v7 : mD.LL,
                          children: (0, i.jsx)(eX.A, {
                              sidebarType: eX.X.CallChatSidebar,
                              maxWidth: L,
                              capturePointer: !0,
                              children: (0, i.jsx)("div", {
                                  className: mD.cO,
                                  children: v
                                      ? (0, i.jsx)(ft, { projectId: n, onClose: j ?? (() => {}) }, n)
                                      : (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(fw.Ay, { projectId: n }),
                                                (0, i.jsxs)(eQ.Ay, {
                                                    "aria-label": R.intl.string(R.t["/VQax8"]),
                                                    toolbar: (0, i.jsxs)(i.Fragment, {
                                                        children: [
                                                            g,
                                                            null == h
                                                                ? null
                                                                : (0, i.jsx)(eQ.Ay.Icon, {
                                                                      icon: eW.P,
                                                                      tooltip: R.intl.string(T.default.JD6Oit),
                                                                      onClick: h,
                                                                  }),
                                                        ],
                                                    }),
                                                    children: [
                                                        (0, i.jsx)(eQ.Ay.Title, {
                                                            children: R.intl.string(R.t["/VQax8"]),
                                                        }),
                                                        (0, i.jsx)(mq, { projectId: n }),
                                                    ],
                                                }),
                                                (0, i.jsx)("div", {
                                                    className: mD.cb,
                                                    children: (0, i.jsx)(
                                                        cx,
                                                        {
                                                            projectId: n,
                                                            restoreState: b,
                                                            onRestoreVersion: p,
                                                            onImportProject: x,
                                                            escapeScopeRef: _,
                                                            visible: m,
                                                        },
                                                        n,
                                                    ),
                                                }),
                                            ],
                                        }),
                              }),
                          }),
                      })
                    : null,
        }),
    });
}
var mG = n(705427),
    mz = n(606128),
    mU = n(323140);
function mB(e) {
    let t,
        l,
        r,
        { project: s, projectsLoaded: u, onBack: j, guildId: b, onBackToServer: y } = e,
        k = a.useContext(X.A),
        [w] = a.useState(() => (null != k ? Z.A.getProjectView(k) : null)),
        [L, $] = a.useState(w?.chatOpen ?? !0),
        [D, et] = a.useState(w?.debugOpen ?? !1);
    a.useEffect(() => {
        null != k && (0, Q.g7)(k, { chatOpen: L, debugOpen: D });
    }, [k, L, D]);
    let en = a.useCallback(
            (e) => {
                null != k && (0, Q.g7)(k, { previewSelection: e });
            },
            [k],
        ),
        el = F(),
        eu = (0, z.f)("ConjureSelectedProjectScreen"),
        eo = a.useCallback(() => $(!0), []),
        ec = a.useCallback(() => {
            (et(!1), $(!0));
        }, []),
        { restoreState: ef, handleRestoreVersion: em } = (function (e, t) {
            let [n, l] = a.useState(null),
                r = e?.id ?? null,
                i = a.useRef(r),
                s = a.useRef(!0),
                u = a.useRef(!1);
            return (
                (i.current = r),
                a.useEffect(
                    () => (
                        (s.current = !0),
                        () => {
                            s.current = !1;
                        }
                    ),
                    [],
                ),
                {
                    restoreState: n,
                    handleRestoreVersion: a.useCallback(
                        function (n) {
                            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            if (null == e || u.current) return;
                            let o = e.id;
                            function c() {
                                return s.current && i.current === o;
                            }
                            ((u.current = !0),
                                t(),
                                l({ entry: n, status: "restoring" }),
                                (0, V.oB)(o, n.sha)
                                    .then(
                                        async () => {
                                            if (
                                                (a &&
                                                    c() &&
                                                    (0, E.P0)({
                                                        text: R.intl.formatToPlainString(T.default.Z4n6LX, {
                                                            title: (0, H.T4)(n.subject).short,
                                                        }),
                                                        variant: "success",
                                                    }),
                                                null != r)
                                            ) {
                                                let e = await (0, W.c)(o, r);
                                                null != e && (0, E.P0)({ text: e, variant: "critical" });
                                            }
                                            c() && l({ entry: n, status: "restored" });
                                        },
                                        (e) => {
                                            c() &&
                                                (l({ entry: n, status: "failed" }),
                                                console.error("[conjure] version restore failed", o, e),
                                                (0, E.P0)({
                                                    text: R.intl.string(T.default["PSdo+w"]),
                                                    variant: "critical",
                                                }));
                                        },
                                    )
                                    .finally(() => {
                                        c() && (u.current = !1);
                                    }));
                        },
                        [e, t],
                    ),
                }
            );
        })(s, ec),
        eh = s?.id ?? null,
        {
            integrationStatus: eg,
            isPreviewApplicationLoading: ep,
            checkingIntegration: ex,
            previewReady: ev,
            hasFrame: ey,
        } = (function (e) {
            let [t, n] = a.useState(null),
                l = e?.id ?? null,
                r = a.useRef(l),
                i = a.useRef(null);
            r.current = l;
            let s = (0, c.bG)(
                    [eT.Ay, eM.A],
                    () => (null == l ? null : (eT.Ay.getIntegrationStatus(l) ?? eM.A.getIntegrationStatus(l))),
                    [l],
                ),
                u = e?.preview_application_id ?? null,
                { isLoading: o } = (0, eE.YY)(u ?? void 0),
                d = null != l && t !== l,
                f = s?.preview_ready === !0,
                m = s?.has_activity === !0,
                h = s?.bot_permissions_changed === !0,
                g = (0, ea.Qg)({
                    installScope: e?.install_scope ?? null,
                    previewReady: f,
                    integrationInstalled: s?.integration_installed ?? null,
                    botPermissionsChanged: h,
                });
            a.useEffect(() => {
                g &&
                    !d &&
                    null != u &&
                    (async function (e) {
                        try {
                            await (0, eE.TA)(e);
                        } catch {}
                    })(u);
            }, [h, d, g, u]);
            let p = a.useCallback(async () => {
                if (null == l || r.current !== l) return;
                i.current?.abort();
                let e = new AbortController();
                ((i.current = e), n(null));
                try {
                    await ((0, e_.CG)(l)?.catch(() => (0, e_.U1)(l, e.signal)) ?? (0, e_.U1)(l, e.signal));
                } catch {
                } finally {
                    e.signal.aborted || i.current !== e || r.current !== l || n(l);
                }
            }, [l]);
            return (
                a.useEffect(
                    () => (
                        p(),
                        () => {
                            (i.current?.abort(), (i.current = null));
                        }
                    ),
                    [p],
                ),
                {
                    integrationStatus: s,
                    isPreviewApplicationLoading: o,
                    checkingIntegration: d,
                    previewReady: f,
                    hasFrame: m,
                }
            );
        })(s),
        ek =
            (0, c.bG)([eG.A], () => (null == eh ? void 0 : eG.A.getPublishStatus(eh)?.previewAppChannels), [eh]) ??
            eg?.preview_app_channels,
        {
            availability: ew,
            activeMode: eA,
            setMode: eN,
            frameSurface: eS,
            frameSurfaceOptions: eW,
            setFrameSurface: eX,
            appChannel: eQ,
            setAppChannel: eZ,
            frameLaunchParams: eY,
            widgetApplicationId: eJ,
        } = (0, ed.p)({
            applicationId: s?.preview_application_id ?? null,
            previewApplicationId: s?.preview_application_id ?? null,
            declaredActivity: ey,
            previewSupportedSurfaces: s?.preview_supported_surfaces,
            installScope: s?.install_scope ?? null,
            ownerAuthorizationRevoked: eg?.owner_authorization_revoked === !0,
            supportsOverlay: s?.preview_supported_surfaces?.includes(ee.q7.OVERLAY) === !0,
            previewAppChannels: ek,
            initialSelection: w?.previewSelection,
            onSelectionChange: en,
        }),
        e0 = er(s);
    ((0, ei.x)(eh, (e) => {
        ew.modes.includes(e) && eN(e);
    }),
        q(eh, () => {
            ($(!0), et(!0));
        }));
    let e1 = ew.modes.includes("frame"),
        e2 = (0, c.bG)([J.A], () => J.A.isPaused(eh), [eh]),
        {
            previewTargetOptions: e3,
            handleSelectPreviewTarget: e4,
            mobilePreview: e7,
            mobilePreviewLabel: e5,
            handleToggleMobilePreview: e9,
            landscapePreview: e8,
            rotatePreviewLabel: e6,
            handleRotatePreview: te,
            previewSurface: tt,
            previewFrame: tn,
            refreshFrame: tl,
            isRefreshing: tr,
            handleRefresh: ti,
        } = (function (e) {
            let {
                    project: t,
                    modes: n,
                    activeMode: l,
                    frameSurface: r,
                    frameSurfaceOptions: i,
                    previewAppChannels: s,
                    setMode: u,
                    setFrameSurface: o,
                    setAppChannel: d,
                } = e,
                f = a.useMemo(
                    () =>
                        (function (e, t) {
                            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                            return e.flatMap((e) =>
                                "frame" === e
                                    ? t.flatMap((t) =>
                                          t === es.U.APP_CHANNEL && n.length > 1
                                              ? n.map((n) => ({ mode: e, surface: t, appChannel: n }))
                                              : [{ mode: e, surface: t }],
                                      )
                                    : [{ mode: e }],
                            );
                        })(n, i, s),
                    [n, i, s],
                ),
                m = a.useCallback(
                    (e) => {
                        ("frame" === e.mode && (o(e.surface), null != e.appChannel && d?.(e.appChannel)), u(e.mode));
                    },
                    [d, o, u],
                ),
                h = (0, c.bG)([eL.A], () => eL.A.isBuilderPreviewMobile()),
                g = R.intl.string(h ? T.default.tKGF0Q : T.default.peqEOY),
                p = a.useCallback(() => (0, Y.GG)(!h), [h]),
                x = (0, c.bG)([eL.A], () => eL.A.isBuilderPreviewLandscape()),
                v = R.intl.string(x ? T.default.tunI2l : T.default.DoNdjA),
                j = a.useCallback(() => (0, Y.Lw)(!x), [x]),
                b = (0, e$.jS)(t),
                y = a.useMemo(() => (0, e$.Op)(b, r), [b, r]),
                k = (0, eP.A)(t?.preview_application_id ?? null, y),
                w = (0, eP.A)(t?.preview_application_id ?? null, ej.ZN),
                A = "overlay" === l ? w : k,
                N = (0, ej.x1)(A) && A.data.proxyTicketRefreshing,
                S = a.useCallback(() => {
                    null == A || N || eR.A.refreshProxyTicket(A.id);
                }, [A, N]);
            return {
                previewTargetOptions: f,
                handleSelectPreviewTarget: m,
                mobilePreview: h,
                mobilePreviewLabel: g,
                handleToggleMobilePreview: p,
                landscapePreview: x,
                rotatePreviewLabel: v,
                handleRotatePreview: j,
                previewSurface: y,
                previewFrame: k,
                refreshFrame: A,
                isRefreshing: N,
                handleRefresh: S,
            };
        })({
            project: s,
            modes: ew.modes,
            activeMode: eA,
            frameSurface: eS,
            frameSurfaceOptions: eW,
            previewAppChannels: ek,
            setMode: eN,
            setFrameSurface: eX,
            setAppChannel: eZ,
        }),
        ta = (0, A.A)(tn),
        ts = e1 && !e2,
        tu = (0, C.lQ)(eh),
        to = ta.isPoppedOut ? T.default.pmkK8i : e2 ? T.default.Yet11p : null,
        tc = null != to;
    function td(e) {
        return null == to ? e : R.intl.formatToPlainString(to, { label: e });
    }
    let tf = L && !D,
        tm = R.intl.string(tf ? T.default.JD6Oit : T.default.xjJAQm),
        th = a.useCallback(() => {
            if (D) {
                (et(!1), $(!0));
                return;
            }
            $((e) => !e);
        }, [D]),
        tg = a.useCallback(() => $(!1), []),
        {
            designFeedbackActive: tp,
            designFeedbackToggleRef: tx,
            agentDrivingPreview: tv,
            designFeedbackLabel: tj,
            handleToggleDesignFeedback: tb,
        } = (function (e, t, n) {
            let { active: l } = (0, G.rt)(e);
            a.useEffect(() => {
                null != e && l && !t && (0, G.mB)(e);
            }, [e, l, t]);
            let r = a.useRef(null),
                i = (0, O.Zv)(e),
                s = R.intl.string(i ? T.default.Sme0T0 : l ? T.default.vn5Rzu : T.default["cl/Jyl"]),
                u = a.useCallback(() => {
                    if (null != e) {
                        if (l) return void (0, G.mB)(e);
                        (n(), (0, G.w4)(e));
                    }
                }, [e, l, n]);
            return {
                designFeedbackActive: l,
                designFeedbackToggleRef: r,
                agentDrivingPreview: i,
                designFeedbackLabel: s,
                handleToggleDesignFeedback: u,
            };
        })(eh, ts && (!ta.isPoppedOut || tu), ec),
        [ty] = a.useState(() => S.isPlatformEmbedded && (0, eI.qM)());
    a.useEffect(() => {
        null != eh && tu && !ts && (0, C.It)(eh);
    }, [eh, tu, ts]);
    let tk = a.useCallback(() => {
            null != eh && (ec(), (0, C.c$)(eh), (0, C.rC)(eh, "marker"));
        }, [eh, ec]),
        tw = a.useCallback(() => {
            null != eh && (0, C.V9)(eh);
        }, [eh]),
        tA =
            tc && !tu
                ? td(R.intl.string(T.default["XWU+XF"]))
                : R.intl.string(tu ? T.default.tuQ5f3 : tv ? T.default.agwlrD : T.default["XWU+XF"]),
        tN = tc ? td(R.intl.string(T.default["cl/Jyl"])) : tj,
        tS = td(e5),
        tC = td(e6),
        tI = a.useCallback(() => {
            et((e) => !e && ($(!0), !0));
        }, []),
        tE = a.useCallback(() => et(!1), []),
        t_ = a.useCallback(() => {
            null != eh && (0, Y._j)(eh);
        }, [eh]),
        tM = a.useCallback(() => {
            null != eh && (e2 ? (0, Y._j)(eh) : (0, Y.di)(eh, tn?.id));
        }, [eh, e2, tn?.id]),
        tT = a.useCallback(() => {
            var e, t;
            (null != s && ((e = s.id), (t = tn?.id), (0, eO.Bn)(e), (0, eF.r)(t)), j());
        }, [s, tn?.id, j]),
        tR =
            ((t = (0, M.z)(s)),
            (l = a.useCallback(
                (e) => {
                    if (null == s) return;
                    let t = s.id,
                        n = (0, _.vt)(e);
                    null != n
                        ? (0, E.P0)({ text: n, variant: "critical" })
                        : (0, I.A)({
                              title: R.intl.formatToPlainString(T.default["Gm+u1+"], { name: s.name }),
                              subtitle: R.intl.string(T.default.M7H3sJ),
                              confirmText: R.intl.string(T.default.gFHykw),
                              variant: "critical",
                              onConfirm: async () => {
                                  eo();
                                  try {
                                      await (0, _.Hj)(t, e, R.intl.string(T.default.Owerd3));
                                  } catch {
                                      (0, E.P0)({ text: R.intl.string(T.default["Q+l4Hv"]), variant: "critical" });
                                  }
                              },
                          });
                },
                [s, eo],
            )),
            { onExport: t, onImport: (r = (0, _.yN)(l)).open, importInput: r.input }),
        tP = a.useCallback(() => {
            null != s && (0, eH.A)(s, b);
        }, [s, b]),
        tL = a.useCallback(async () => {
            null != eh && (await (0, eU.vL)(eh, b));
        }, [b, eh]),
        t$ = (0, ea.aN)(eA, {
            installScope: s?.install_scope ?? null,
            previewReady: ev,
            integrationInstalled: eg?.integration_installed ?? null,
        })
            ? { type: "bot_install", onAddBot: tL, loading: ep }
            : ex && null == eg
              ? { type: "checking" }
              : void 0,
        tq = (0, c.bG)([eT.Ay], () => null != eh && eT.Ay.isProjectDeleting(eh), [eh]);
    a.useEffect(() => {
        ((null == s && u) || tq) && j();
    }, [s, u, tq, j]);
    let {
            publishOptions: tD,
            publish: tF,
            publishing: tO,
            confirmation: tG,
            variant: tz,
            text: tU,
        } = (0, eB.A)(eh, b, ex || ep),
        tB = (0, eK.A)(eh, tF, tD),
        tK = "frame" === eA && !e2 && (0, ej.x1)(tn) && (ta.isPoppedOut || ta.canPopout),
        tH = a.useCallback(() => {
            if (null != s) {
                var e;
                ((e = {
                    projectId: s.id,
                    installScope: s.install_scope,
                    restoreDisabled: ef?.status === "restoring",
                    onRestoreVersion: (e, t) => em(e, t, !0),
                }),
                    (0, K.mM)(async () => {
                        let { default: t } = await Promise.all([
                            n.e(323079),
                            n.e(437655),
                            n.e(420238),
                            n.e(795807),
                            n.e(231782),
                            n.e(526192),
                            n.e(701348),
                        ]).then(n.bind(n, 817231));
                        return (n) => (0, i.jsx)(t, { ...n, ...e });
                    }));
            }
        }, [s, ef?.status, em]);
    (0, B.z)(eh, tH);
    let tV = null == s ? void 0 : () => (0, eV.A)(s.id, { guildId: b, isPreview: !0, publishOptions: tD }),
        tW =
            null == s
                ? null
                : (0, i.jsx)(eD.A, {
                      ...(0, eq.A)(s, b),
                      onOpenProjectSettings: tV,
                      onTogglePreviewPaused: "frame" === eA ? tM : void 0,
                      previewPaused: e2,
                      previewPauseDisabled: !e2 && tv,
                      onTogglePopout: tK ? (ta.isPoppedOut ? ta.popIn : ta.popOut) : void 0,
                      poppedOut: ta.isPoppedOut,
                      onToggleDebug: el ? tI : void 0,
                      debugOpen: D,
                      onExport: tR.onExport,
                      onImport: tR.onImport,
                      onRemix: tP,
                      onConnectTool: eu ? () => (0, U.A)(s.id) : void 0,
                      onHistory: tH,
                      refreshApplicationId:
                          ew.modes.includes("widget") && "unavailable-authorization-revoked" !== ew.profileState
                              ? eJ
                              : null,
                      previewProjectId: s.id,
                  }),
        tX =
            null == tF || null == s
                ? null
                : (0, i.jsx)("div", {
                      className: mU.As,
                      onMouseDown:
                          null == eh || tF.disabled || tO
                              ? void 0
                              : (e) => {
                                    0 === e.button && (0, ez.dx)(eh);
                                },
                      children: (0, i.jsx)(d.$, {
                          size: "sm",
                          variant: tz,
                          icon: tO ? mK : null != tG ? f.U : void 0,
                          text: tU,
                          onClick: () => tB("header"),
                      }),
                  }),
        tQ = (0, i.jsx)(mG.A, {
            title: s?.name ?? R.intl.string(T.default.G1WwgK),
            project: s,
            onOpenProjectSettings: tV,
            onBack: y,
            hideShareTarget: null != y,
            actions:
                null == s
                    ? null
                    : (0, i.jsxs)("div", {
                          className: mU.FO,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: mU.QQ,
                                  children: [
                                      (0, i.jsx)(eC, {
                                          targets: e3,
                                          target: (function (e, t) {
                                              let n =
                                                  arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                                              return null == e
                                                  ? null
                                                  : "frame" !== e
                                                    ? { mode: e }
                                                    : null == n
                                                      ? { mode: e, surface: t }
                                                      : { mode: e, surface: t, appChannel: n };
                                          })(eA, eS, eQ),
                                          onChange: e4,
                                      }),
                                      e1
                                          ? (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    "frame" === eA
                                                        ? (0, i.jsx)(N.A.Icon, {
                                                              icon: e7 ? mW : mV,
                                                              tooltip: tS,
                                                              "aria-label": tS,
                                                              selected: e7,
                                                              disabled: tc,
                                                              onClick: e9,
                                                          })
                                                        : null,
                                                    e7 && "frame" === eA
                                                        ? (0, i.jsx)(N.A.Icon, {
                                                              icon: mX,
                                                              tooltip: tC,
                                                              "aria-label": tC,
                                                              selected: e8,
                                                              disabled: tc,
                                                              onClick: te,
                                                          })
                                                        : null,
                                                    ty
                                                        ? (0, i.jsx)(N.A.Icon, {
                                                              icon: m.PencilIcon,
                                                              tooltip: tA,
                                                              "aria-label": tA,
                                                              selected: tu,
                                                              disabled: (tc || tv) && !tu,
                                                              onClick: tu ? tw : tk,
                                                          })
                                                        : (0, i.jsx)(N.A.Icon, {
                                                              ref: tx,
                                                              icon: h.x,
                                                              iconClassName: mU.D8,
                                                              tooltip: tN,
                                                              "aria-label": tN,
                                                              selected: tp,
                                                              disabled: tc || tv,
                                                              onClick: tb,
                                                          }),
                                                ],
                                            })
                                          : null,
                                      "frame" !== eA || e2
                                          ? null
                                          : (0, i.jsx)(eb, { frame: tn, controlProjectId: s.id }),
                                      (0, ej.x1)(tl)
                                          ? (0, i.jsx)(N.A.Icon, {
                                                icon: g.RefreshIcon,
                                                tooltip: R.intl.string(T.default.FZIHQN),
                                                "aria-label": R.intl.string(T.default.FZIHQN),
                                                disabled: tr,
                                                onClick: ti,
                                            })
                                          : null,
                                  ],
                              }),
                              (0, i.jsx)("div", { className: mU.YJ }),
                              (0, i.jsx)(P.A, { frame: tn }),
                              (0, i.jsx)(N.A.Icon, {
                                  icon: p.DoorExitIcon,
                                  tooltip: R.intl.string(T.default["/TlGcK"]),
                                  "aria-label": R.intl.string(T.default["/TlGcK"]),
                                  onClick: tT,
                              }),
                              (0, i.jsx)(N.A.Icon, {
                                  icon: mH,
                                  tooltip: tm,
                                  "aria-label": tm,
                                  selected: tf,
                                  onClick: th,
                              }),
                              tW,
                          ],
                      }),
        });
    return (0, i.jsxs)("div", {
        className: o()(mU.nj, mz.T),
        children: [
            tR.importInput,
            (0, i.jsx)("main", {
                className: mU.JX,
                children:
                    null == s
                        ? (0, i.jsxs)("div", {
                              className: mU.j5,
                              children: [
                                  tQ,
                                  (0, i.jsxs)("div", {
                                      className: mU.sD,
                                      children: [
                                          (0, i.jsx)(x.D, {
                                              variant: "heading-lg/semibold",
                                              children: R.intl.string(T.default.G1WwgK),
                                          }),
                                          (0, i.jsx)(v.E, {
                                              variant: "body-md/normal",
                                              color: "text-muted",
                                              children: R.intl.string(T.default.fINulo),
                                          }),
                                          (0, i.jsx)(d.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: R.intl.string(T.default["WFJ/vb"]),
                                              onClick: () => (0, e_.listProjects)(b),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, i.jsx)(eU.bI.Provider, {
                              value: tD,
                              children: (0, i.jsx)(
                                  mO,
                                  {
                                      projectId: s.id,
                                      designFeedbackToggleRef: tx,
                                      applicationId: s.preview_application_id,
                                      previewApplicationId: s.preview_application_id,
                                      surface: tt,
                                      frameLaunchParams: eY,
                                      header: tQ,
                                      chatOpen: L,
                                      onCloseChat: tg,
                                      chatHeaderAction: tX,
                                      debugOpen: el && D,
                                      onCloseDebug: tE,
                                      onRestoreVersion: em,
                                      onImportProject: (0, eT.PV)(s) ? tR.onImport : void 0,
                                      restoreState: ef,
                                      previewReady: ev,
                                      previewGate: t$,
                                      availability: ew,
                                      activeMode: eA,
                                      widgetApplicationId: eJ,
                                      overlayWidgetSize: e0,
                                      previewPaused: e2,
                                      onResumePreview: t_,
                                  },
                                  s.id,
                              ),
                          }),
            }),
        ],
    });
}
function mK() {
    return (0, i.jsx)(j.y, { type: j.t.SPINNING_CIRCLE_SIMPLE, className: mU.Hv, itemClassName: mU.C5 });
}
function mH(e) {
    return (0, i.jsx)(b.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function mV(e) {
    return (0, i.jsx)(y.u, { ...e, size: "custom", width: 20, height: 20 });
}
function mW(e) {
    return (0, i.jsx)(k.k, { ...e, size: "custom", width: 20, height: 20 });
}
function mX(e) {
    return (0, i.jsx)(w.H, { ...e, size: "custom", width: 20, height: 20 });
}
