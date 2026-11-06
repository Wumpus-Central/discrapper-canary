n.d(t, { A: () => fW });
var l,
    r,
    i = n(477900),
    a = n(582128),
    s = n.t(a, 2),
    u = n(503698),
    o = n.n(u),
    c = n(855986),
    d = n(821609),
    m = n(478016),
    f = n(22231),
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
    S = n(646973),
    A = n(742589),
    C = n(723702),
    N = n(171691),
    I = n(314116),
    E = n(858899),
    _ = n(949757),
    M = n(800202),
    R = n(191850),
    T = n(792996),
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
                : T.intl.formatToPlainString(R.default["6xVl+N"], {
                      surface: (0, eu.X)(e.surface),
                      channel: e.appChannel,
                  });
        case "widget":
            return T.intl.string(R.default.y5GiL1);
        case "overlay":
            return T.intl.string(R.default["2940LX"]);
        case "bot":
            return T.intl.string(R.default.tjpaGN);
    }
}
var ed = n(939398),
    em = n(86147),
    ef = n(729475),
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
    let u = T.intl.string(l ? T.t.Z7MyNB : T.t.OIDkcp);
    return (0, i.jsx)(A.A.Icon, {
        tooltip: u,
        icon: l ? em.FullscreenExitIcon : ef.FullscreenEnterIcon,
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
    eS = n(559106),
    eA = n(847374),
    eC = n(704745);
function eN(e) {
    let { targets: t, target: n, onChange: l } = e,
        [r, s] = a.useState(!1),
        u = null != n && t.length > 1;
    r && !u && s(!1);
    let o = a.useCallback(() => s(!1), []),
        c = a.useCallback(() => s((e) => !e), []),
        d = a.useRef(null);
    if (!u) return null;
    let m = T.intl.string(R.default.I2ucou);
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
                "aria-label": m,
                onClose: r,
                onSelect: r,
                children: (0, i.jsx)(ew.rX, {
                    label: m,
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
            return (0, i.jsx)(eS.vN, {
                children: (0, i.jsxs)("button", {
                    ...r,
                    ref: d,
                    type: "button",
                    className: eC.h,
                    "aria-haspopup": "menu",
                    "aria-expanded": a,
                    onClick: c,
                    children: [
                        (0, i.jsx)(v.E, {
                            tag: "span",
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: T.intl.string(R.default["N+VA1J"]),
                        }),
                        (0, i.jsx)(v.E, {
                            tag: "span",
                            variant: "body-sm/medium",
                            color: "none",
                            lineClamp: 1,
                            children: ec(n),
                        }),
                        (0, i.jsx)(eA.ChevronSmallDownIcon, { size: "xs", color: "currentColor" }),
                    ],
                }),
            });
        },
    });
}
var eI = n(27184),
    eE = n(627363),
    e_ = n(233470),
    eM = n(153207),
    eR = n(260498),
    eT = n(625180),
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
    eW = n(405433),
    eX = n(58736),
    eQ = n(811587);
function eZ(e) {
    let { projectId: t } = e;
    return (0, c.bG)(
        [eG.A],
        () => {
            let e = eG.A.getPublishStatus(t)?.publishState;
            return null != e && (0, eQ.lE)(e);
        },
        [t],
    )
        ? (0, i.jsx)(eX.Ay.Icon, {
              icon: eW.ShareIcon,
              tooltip: T.intl.string(T.t.RDE0Sc),
              onClick: () => {
                  (0, K.mM)(async () => {
                      let { default: e } = await n.e(151943).then(n.bind(n, 797626));
                      return (n) => (0, i.jsx)(e, { ...n, projectId: t });
                  });
              },
          })
        : null;
}
var eY = n(789645),
    eJ = n(812771);
(n(743898), n(134528), n(947204));
var e0 = n(333007),
    e1 = n(621466),
    e2 = n(775121),
    e3 = n(989145),
    e4 = n(866665),
    e7 = n(81369),
    e5 = n(826745),
    e9 = n(34595),
    e8 = n(470779);
function e6(e) {
    let {
            projectId: t,
            at: n,
            bounds: l,
            kind: r,
            value: s,
            onChange: u,
            onSubmit: c,
            onDismiss: d,
            canSubmit: m,
            closing: f,
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
            takeRefs: S,
        } = (0, e9.FM)({ projectId: t, surface: "design", onUploadFile: h }),
        A = a.useRef(null),
        C = (m || j.length > 0) && w && !f,
        N = a.useCallback(() => {
            if (!C) return;
            let e = S();
            c(e.length > 0 ? e : void 0);
        }, [C, S, c]),
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
        className: o()(e8.M0, { [e8.ho]: I && !f, [e8.ET]: f }),
        style: { left: D, top: F },
        "data-testid": "conjure-design-compose-bar",
        children: [
            p
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)("input", {
                              ref: A,
                              type: "file",
                              multiple: !0,
                              className: e8.Fg,
                              tabIndex: -1,
                              "aria-hidden": !0,
                              onChange: (e) => {
                                  (b(Array.from(e.target.files ?? [])), (e.target.value = ""));
                              },
                          }),
                          (0, i.jsx)(e4.m, {
                              position: "bottom",
                              text: T.intl.string(R.default.lgvqSB),
                              ariaHidden: !0,
                              children: (0, i.jsx)("button", {
                                  type: "button",
                                  className: e8.tY,
                                  onClick: () => A.current?.click(),
                                  "aria-label": T.intl.string(R.default.lgvqSB),
                                  children: (0, i.jsx)(e7.FileUpIcon, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: e8.WW,
                                  }),
                              }),
                          }),
                      ],
                  })
                : null,
            (0, i.jsx)(e5.y, {
                autoFocus: !0,
                rows: 1,
                className: e8.hF,
                value: s,
                placeholder: x ?? ("" === r ? T.intl.string(R.default.MPPV1Q) : `Edit ${r}`),
                "aria-label": v ?? T.intl.string(R.default.KCYqWL),
                onChange: (e) => u(e.target.value),
                onPaste: f || !p ? void 0 : y,
                onKeyDown: (e) => {
                    if ("Escape" === e.key) {
                        (e.preventDefault(), e.stopPropagation(), d());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), N());
                },
            }),
            j.length > 0
                ? (0, i.jsx)("div", {
                      className: e8.ZO,
                      children: j.map((e) => (0, i.jsx)(e9.Nl, { draft: e, onRemove: k }, e.localId)),
                  })
                : null,
        ],
    });
}
function te(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function tt(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function tn(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [n, l] = a.useState(() => (t ? te(e()) : null));
    return (
        a.useEffect(() => {
            if (!t) return;
            function n() {
                let t = te(e());
                l((e) => (tt(e, t) ? e : t));
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
var tl = n(46676),
    tr = n(876798),
    ti = n(408278),
    ta = n(48507),
    ts = n(193885),
    tu = n(744898),
    to = n(803656),
    tc = n(241326),
    td = n(972213),
    tm = n(646514);
function tf(e) {
    return e.resolve({ saturation: 1 }).hex();
}
function th(e, t, n) {
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
let tg = th("red", tf(tm.A.unsafe_rawColors.RED_400), () => T.intl.string(R.default.tvXfjt)),
    tp = [
        tg,
        th("yellow", tf(tm.A.unsafe_rawColors.YELLOW_300), () => T.intl.string(R.default.FYuaJ1)),
        th("green", tf(tm.A.unsafe_rawColors.GREEN_360), () => T.intl.string(R.default["Vv+paS"])),
        th("blue", tf(tm.A.unsafe_rawColors.BLUE_345), () => T.intl.string(R.default.k9b1QJ)),
        th("white", tf(tm.A.unsafe_rawColors.WHITE), () => T.intl.string(R.default["1sOXwH"])),
    ];
function tx(e) {
    return tp.find((t) => t.id === e) ?? tg;
}
var tv = n(39416);
function tj(e) {
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
function tb(e) {
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
function ty(e) {
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
function tk(e) {
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
let tw = N.ck.map((e) => tk(Math.min(16, e + 3))),
    tS = N.Cw.map((e) => tk(Math.min(16, e / 2.5))),
    tA = [R.default.jZtZUr, R.default.cTQdD0, R.default.J3ucEg],
    tC = {
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
            label: () => T.intl.string(R.default.oIZQbm),
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
            label: () => T.intl.string(R.default.ARNVr7),
        },
    };
function tN(e) {
    let { icon: t, label: n, pressed: l, onClick: r } = e;
    return (0, i.jsx)(e4.m, {
        text: n,
        position: "left",
        children: (0, i.jsx)("span", {
            className: tv.z6,
            "data-active": l ? "" : void 0,
            children: (0, i.jsx)(tr.k, {
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
function tI(e) {
    let { icon: t, label: n, disabled: l, onClick: r } = e;
    return (0, i.jsx)(e4.m, {
        text: n,
        position: "left",
        children: (0, i.jsx)(ti.K, {
            icon: t,
            size: "sm",
            variant: "icon-only",
            disabled: l,
            "aria-label": n,
            onClick: r,
        }),
    });
}
function tE(e) {
    let { label: t, trigger: n, children: l, direction: r } = e,
        [s, u] = a.useState(!1),
        o = a.useCallback(() => u(!1), []),
        c = a.useCallback(() => u((e) => !e), []);
    return (0, i.jsxs)("div", {
        className: tv.pr,
        onMouseEnter: () => u(!0),
        onMouseLeave: o,
        children: [
            n(c),
            s
                ? (0, i.jsx)("div", {
                      className: tv.mz,
                      "data-direction": r,
                      role: "group",
                      "aria-label": t,
                      children: l(o),
                  })
                : null,
        ],
    });
}
function t_(e) {
    let { projectId: t, state: n, onExit: l, onUndo: r, onRedo: a, onClear: s } = e,
        { tool: u, lastShape: o, markerSize: c, eraserSize: d, history: m } = n,
        f = tx(n.colorId);
    function h(e) {
        return (0, N.rC)(t, e);
    }
    let g = tC[o],
        p = T.intl.string(R.default.hUm825),
        x = T.intl.string(R.default.n5IA3a),
        v = T.intl.string(R.default.r5dX6t),
        j = T.intl.string(R.default.VfYqDq);
    return (0, i.jsxs)("div", {
        className: tv.t$,
        children: [
            (0, i.jsx)("div", {
                className: tv.NT,
                children: (0, i.jsx)(tN, {
                    icon: tb,
                    label: T.intl.string(R.default.YtyKcM),
                    pressed: "pick" === u,
                    onClick: () => h("pick"),
                }),
            }),
            (0, i.jsxs)("div", {
                className: tv.H$,
                role: "toolbar",
                "aria-orientation": "vertical",
                "aria-label": T.intl.string(R.default["0IAEFf"]),
                children: [
                    (0, i.jsx)(tN, {
                        icon: tj,
                        label: T.intl.string(R.default.qTOXqb),
                        pressed: "move" === u,
                        onClick: () => h("move"),
                    }),
                    (0, i.jsx)(tN, {
                        icon: ta.LettersIcon,
                        label: T.intl.string(R.default.AGb8aK),
                        pressed: "text" === u,
                        onClick: () => h("text"),
                    }),
                    (0, i.jsx)(tE, {
                        label: p,
                        direction: "column",
                        trigger: (e) =>
                            (0, i.jsx)(tN, {
                                icon: ts.PaintbrushThinIcon,
                                label: p,
                                pressed: "marker" === u,
                                onClick: () => {
                                    (h("marker"), e());
                                },
                            }),
                        children: (e) =>
                            tw.map((n, l) =>
                                (0, i.jsx)(
                                    tN,
                                    {
                                        icon: n,
                                        label: T.intl.string(tA[l]),
                                        pressed: "marker" === u && c === l,
                                        onClick: () => {
                                            ((0, N.KZ)(t, l), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, i.jsx)(tE, {
                        label: v,
                        direction: "row",
                        trigger: (e) =>
                            (0, i.jsx)(tN, {
                                icon: g.icon,
                                label: v,
                                pressed: "circle" === u || "square" === u,
                                onClick: () => {
                                    (h(o), e());
                                },
                            }),
                        children: (e) =>
                            Object.keys(tC).map((t) =>
                                (0, i.jsx)(
                                    tN,
                                    {
                                        icon: tC[t].icon,
                                        label: tC[t].label(),
                                        pressed: u === t,
                                        onClick: () => {
                                            (h(t), e());
                                        },
                                    },
                                    t,
                                ),
                            ),
                    }),
                    (0, i.jsx)(tE, {
                        label: x,
                        direction: "column",
                        trigger: (e) =>
                            (0, i.jsx)(tN, {
                                icon: ty,
                                label: x,
                                pressed: "eraser" === u,
                                onClick: () => {
                                    (h("eraser"), e());
                                },
                            }),
                        children: (e) =>
                            tS.map((n, l) =>
                                (0, i.jsx)(
                                    tN,
                                    {
                                        icon: n,
                                        label: T.intl.string(tA[l]),
                                        pressed: "eraser" === u && d === l,
                                        onClick: () => {
                                            ((0, N._A)(t, l), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, i.jsx)(tE, {
                        label: j,
                        direction: "row",
                        trigger: (e) => (0, i.jsx)(tI, { icon: f.icon, label: j, onClick: e }),
                        children: (e) =>
                            tp.map((n) =>
                                (0, i.jsx)(
                                    tN,
                                    {
                                        icon: n.icon,
                                        label: n.label(),
                                        pressed: n.id === f.id,
                                        onClick: () => {
                                            ((0, N.Yx)(t, n.id), e());
                                        },
                                    },
                                    n.id,
                                ),
                            ),
                    }),
                    (0, i.jsx)("div", { className: tv.Gz, role: "separator" }),
                    (0, i.jsx)(tI, {
                        icon: tu.UndoIcon,
                        label: T.intl.string((0, C.cX)() ? R.default["j/XmBQ"] : R.default.AeHDE6),
                        disabled: 0 === m.past.length,
                        onClick: r,
                    }),
                    (0, i.jsx)(tI, {
                        icon: to.RedoIcon,
                        label: T.intl.string((0, C.cX)() ? R.default.C7jhpn : R.default.pp16iB),
                        disabled: 0 === m.future.length,
                        onClick: a,
                    }),
                    (0, i.jsx)(tI, {
                        icon: tc.TrashIcon,
                        label: T.intl.string(R.default.wo5a0i),
                        disabled: 0 === m.present.length,
                        onClick: s,
                    }),
                    (0, i.jsx)("div", { className: tv.Gz, role: "separator" }),
                    (0, i.jsx)(tI, { icon: td.XLargeIcon, label: T.intl.string(R.default.tuQ5f3), onClick: l }),
                ],
            }),
        ],
    });
}
let tM = tm.A.unsafe_rawColors.WHITE.resolve({ saturation: 1 }).hex(),
    tR = tm.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex(),
    tT = tm.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex();
function tP(e, t, n) {
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
                    (e.strokeStyle = tT),
                    e.strokeText(n.text, l(n.at.x), r(n.at.y)),
                    e.fillText(n.text, l(n.at.x), r(n.at.y)));
            }
        }
    e.globalCompositeOperation = "source-over";
}
function tL(e) {
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
let t$ = { dx: 0, dy: 0 },
    tq = { v: "move", p: "pick", t: "text", m: "marker", o: "circle", r: "square", e: "eraser" },
    tD = 1;
function tF(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r } = e,
        s = null != n && n === l ? t : null,
        u = (0, N.d5)(s),
        { active: o } = (0, G.rt)(s),
        c = (0, K.Rv)(),
        [d, m] = a.useState(!1);
    a.useEffect(() => {
        if (null != s)
            return () => {
                (0, N.K7)(s)?.active === !0 && (0, N.It)(s);
            };
    }, [s]);
    let f = u?.active === !0 && "pick" === u.tool;
    a.useEffect(() => {
        null != s && f && !o && (0, G.w4)(s);
    }, [s, f, o]);
    let h = a.useCallback(async () => {
        let e = r();
        if (null == e) return null;
        let t = await (0, eI.wn)(e);
        if (null != t) return t;
        function n() {
            m(!1);
        }
        (0, e0.flushSync)(() => m(!0));
        try {
            await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e())));
            let t = new Promise((e) => window.setTimeout(() => e(null), 5e3));
            return await Promise.race([(0, eI.fs)(e, n), t]);
        } finally {
            n();
        }
    }, [r]);
    return (a.useEffect(() => {
        if (null != s) return ((0, N.j5)(s, h), () => (0, N.j5)(s, null));
    }, [s, h]),
    null == s || null == u || !u.active || c)
        ? null
        : (0, i.jsx)(tO, { projectId: s, state: u, capturing: d, resolveIframe: r });
}
function tO(e) {
    let { projectId: t, state: n, capturing: l, resolveIframe: r } = e,
        s = tn(r),
        [u, o] = a.useState(null),
        [c, d] = a.useState(0),
        [m, f] = a.useState(null),
        [h, g] = a.useState(t$),
        p = a.useRef(null),
        x = a.useRef(null),
        v = a.useRef(null),
        j = a.useRef(null),
        b = a.useRef(null),
        { tool: y, history: k } = n,
        w = tx(n.colorId),
        S = "pick" !== y,
        A = (0, N.Qq)(n),
        C = "eraser" === y ? null : w.value,
        I = a.useMemo(
            () =>
                null == A
                    ? void 0
                    : (function (e, t) {
                          let n = Math.ceil(Math.max(e, 24) / 2),
                              l = 2 * n + 4;
                          if (l > 128) return "crosshair";
                          let r = l / 2,
                              i = (e, t) => `<circle cx="${r}" cy="${r}" r="${e}" ${t}/>`,
                              a = [
                                  `<svg xmlns="http://www.w3.org/2000/svg" width="${l}" height="${l}" viewBox="0 0 ${l} ${l}">`,
                                  i(n, `fill="none" stroke="${tR}" stroke-width="4"`),
                                  i(n, `fill="none" stroke="${tM}" stroke-width="2"`),
                                  i(3, `fill="${t ?? tM}" stroke="${tR}" stroke-width="1"`),
                                  "</svg>",
                              ].join("");
                          return `url("data:image/svg+xml,${encodeURIComponent(a)}") ${r} ${r}, crosshair`;
                      })(A, C),
            [A, C],
        ),
        E = "move" === y ? (k.present.find((e) => e.id === m) ?? null) : null,
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
            a = null == i ? k.present : k.present.map((e) => (e.id === i.id ? (0, tl.y)(e, h.dx, h.dy) : e)),
            u = v.current;
        tP(r, null == u ? a : [...a, u], { width: s.width, height: s.height });
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
                id: `mark-${tD++}`,
                kind: "text",
                color: w.value,
                size: 20 / s.width,
                at: e.at,
                text: e.value.trim(),
            };
            ((0, tl.oy)(n, s) && (0, N.tD)(t, { type: "commit", shape: n }), o(null), (0, N.QP)(t));
        }, [t, w, s]),
        $ = a.useCallback(() => {
            ((b.current = null), o(null), (0, N.QP)(t));
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
                            l = null == E ? null : (0, tl.k_)(E, s),
                            r =
                                null != l && n.x >= l.x && n.x <= l.x + l.width && n.y >= l.y && n.y <= l.y + l.height
                                    ? E
                                    : (0, tl.WF)(k.present, t, s, 6);
                        if ((f(r?.id ?? null), null == r)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            e.currentTarget.toggleAttribute("data-dragging", !0),
                            (j.current = { id: r.id, origin: t }));
                        return;
                    }
                    case "text":
                        o({ at: t, value: "" });
                        return;
                    case "eraser":
                        if (!(0, tl.jG)(k.present)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (v.current = {
                                id: `mark-${tD++}`,
                                kind: "erase",
                                width: N.Cw[n.eraserSize] / s.width,
                                points: [t],
                            }));
                        break;
                    case "marker":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (v.current = {
                                id: `mark-${tD++}`,
                                kind: "marker",
                                color: w.value,
                                width: N.ck[n.markerSize] / s.width,
                                points: [t],
                            }));
                        break;
                    case "circle":
                    case "square":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (v.current = {
                                id: `mark-${tD++}`,
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
                ((j.current = null), g(t$), (0, N.tD)(t, { type: "move", id: e.id, dx: h.dx, dy: h.dy }));
                return;
            }
            let n = v.current;
            ((v.current = null),
                null != n && null != s && (0, tl.oy)(n, s)
                    ? ((0, N.tD)(t, { type: "commit", shape: n }), (0, N.QP)(t))
                    : M());
        }, [t, s, h, M]),
        O = a.useCallback(() => (0, N.V9)(t), [t]),
        G = a.useCallback(() => (0, N.tD)(t, { type: "undo" }), [t]),
        z = a.useCallback(() => (0, N.tD)(t, { type: "redo" }), [t]),
        U = a.useCallback(() => (0, N.tD)(t, { type: "clear" }), [t]),
        B = a.useRef({ tool: y, selected: E, exit: O, undo: G, redo: z });
    if (
        (a.useLayoutEffect(() => {
            B.current = { tool: y, selected: E, exit: O, undo: G, redo: z };
        }),
        a.useEffect(() => {
            function e(e) {
                if (
                    e.defaultPrevented ||
                    (0, e1.Cw)((0, e1.vq)(e.target, HTMLElement) ? e.target : null) ||
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
                    (e.preventDefault(), null != l ? f(null) : r());
                    return;
                }
                if (("Delete" === e.key || "Backspace" === e.key) && null != l) {
                    (e.preventDefault(), (0, N.tD)(t, { type: "remove", id: l.id }), f(null));
                    return;
                }
                if (e.shiftKey) return;
                let u = tq[s];
                null != u && (e.preventDefault(), (0, N.rC)(t, u));
            }
            return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
        }, [t]),
        a.useEffect(() => {
            if (S) return (e2.A.disable(), () => e2.A.enable());
        }, [S]),
        null == s)
    )
        return null;
    let K = Math.max(8, s.left - c - 8),
        H = null == E ? null : (0, tl.k_)(null == j.current ? E : (0, tl.y)(E, h.dx, h.dy), s);
    return (0, e0.createPortal)(
        (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)("div", {
                    className: tv.qe,
                    style: { left: s.left, top: s.top, width: s.width, height: s.height },
                    "aria-hidden": !0,
                }),
                (0, i.jsxs)("div", {
                    className: tv.Pw,
                    style: { left: s.left, top: s.top, width: s.width, height: s.height },
                    "data-testid": "conjure-edit-ink",
                    children: [
                        (0, i.jsx)("canvas", {
                            ref: p,
                            className: tv.Ji,
                            "data-tool": y,
                            "data-interactive": S && !l ? "" : void 0,
                            "aria-label": T.intl.string(R.default["qlgN+X"]),
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
                                  className: tv.r1,
                                  style: { left: H.x, top: H.y, width: H.width, height: H.height },
                                  "aria-hidden": !0,
                                  children: [
                                      (0, i.jsx)("span", { className: tv.p$, "data-corner": "nw" }),
                                      (0, i.jsx)("span", { className: tv.p$, "data-corner": "ne" }),
                                      (0, i.jsx)("span", { className: tv.p$, "data-corner": "sw" }),
                                      (0, i.jsx)("span", { className: tv.p$, "data-corner": "se" }),
                                  ],
                              }),
                    ],
                }),
                null == u
                    ? null
                    : (0, i.jsx)(e6, {
                          projectId: t,
                          anchor: "point",
                          at: { x: s.left + u.at.x * s.width, y: s.top + u.at.y * s.height },
                          bounds: s,
                          kind: "",
                          placeholder: T.intl.string(R.default["8gX1lw"]),
                          label: T.intl.string(R.default["5W7SSZ"]),
                          allowAttachments: !1,
                          value: u.value,
                          onChange: (e) => o((t) => (null == t ? null : { ...t, value: e })),
                          onSubmit: L,
                          onUploadFile: (e) => (0, e3.vX)(t, e),
                          onDismiss: $,
                          canSubmit: "" !== u.value.trim(),
                          closing: !1,
                      }),
                (0, i.jsx)("div", {
                    ref: x,
                    className: tv.ej,
                    style: { left: K, top: s.top },
                    "data-conjure-edit-rail": "",
                    children: (0, i.jsx)(t_, { projectId: t, state: n, onExit: O, onUndo: G, onRedo: z, onClear: U }),
                }),
            ],
        }),
        document.body,
    );
}
var tG = n(308081),
    tz = n(516521),
    tU = n(683071),
    tB = n(65593),
    tK = n(218394),
    tH = n(115982),
    tV = n(886540);
function tW(e) {
    return !(0, tV.BL)(e) && !0 !== e.stopRequested;
}
var tX = n(104317),
    tQ = n(939249),
    tZ = n(643278),
    tY = n(566424),
    tJ = n(683063),
    t0 = n(140735),
    t1 = n(320448),
    t2 = n(138212);
function t3(e) {
    let { title: t, trailing: n, children: l, className: r, headerClassName: a, ...s } = e;
    return (0, i.jsxs)("section", {
        className: o()(t2.Nr, r),
        ...s,
        children: [
            (0, i.jsxs)("header", {
                className: o()(t2.wx, null != n && t2.o5, a),
                children: [
                    (0, i.jsx)(v.E, { tag: "span", variant: "body-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var t4 = n(148590);
function t7(e) {
    let { children: t } = e;
    return (0, i.jsx)(v.E, { variant: "body-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function t5(e) {
    let {
            title: t,
            meta: n,
            superseded: l = !1,
            showLabel: r,
            hideLabel: s,
            bodyClassName: u,
            beforeBody: c,
            children: d,
            ...m
        } = e,
        f = a.useId(),
        [h, g] = a.useState(!l),
        [p, x] = a.useState(l);
    p !== l && (x(l), g(!l));
    let v = a.useCallback(() => g((e) => !e), []),
        j = h ? eA.ChevronSmallDownIcon : t1.ChevronSmallRightIcon,
        b = null != n || l;
    return (0, i.jsxs)(t3, {
        ...m,
        title: t,
        trailing: b
            ? (0, i.jsxs)("span", {
                  className: t4.ZY,
                  children: [
                      n,
                      l
                          ? (0, i.jsx)(tQ.D, {
                                className: t4.L$,
                                onClick: v,
                                "aria-expanded": h,
                                "aria-controls": f,
                                "aria-label": h ? s : r,
                                children: (0, i.jsx)(j, { size: "xs", color: "currentColor" }),
                            })
                          : null,
                  ],
              })
            : void 0,
        headerClassName: h ? void 0 : t4.RG,
        "data-superseded": l ? "true" : void 0,
        children: [c, (0, i.jsx)("div", { id: f, className: o()(t4.rf, u), hidden: !h, children: d })],
    });
}
n(321073);
var t9 = n(883646);
let t8 = [];
function t6(e) {
    let { status: t } = e;
    return (0, i.jsxs)("span", {
        className: o()(t9.xL, {
            [t9.Vb]: "in_progress" === t,
            [t9.cT]: "completed" === t,
            [t9.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return T.intl.string(R.default.KvBdun);
                case "in_progress":
                    return T.intl.string(R.default["m5G9+S"]);
                case "unfinished":
                    return T.intl.string(R.default.lRpwhD);
                default:
                    return T.intl.string(R.default.sPGeWi);
            }
        })(t),
        children: [
            (0, i.jsx)(j.y, {
                type: j.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: t9.Qd,
                itemClassName: t9.xB,
                "aria-hidden": !0,
            }),
            (0, i.jsx)("svg", {
                className: t9.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, i.jsx)("path", { className: t9.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function ne(e) {
    let { agents: t, active: n } = e,
        l = a.useMemo(() => (n ? t : t8), [n, t]),
        r = a.useMemo(() => new Set(l.map((e) => e.key)), [l]),
        s = l.map((e) => e.key).join("\0"),
        [u, o] = a.useState(l),
        [c, d] = a.useState(s),
        [m, f] = a.useState(!1);
    c !== s && (d(s), o([...l, ...u.filter((e) => !r.has(e.key))]), 0 === l.length && f(!1));
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
                    e = requestAnimationFrame(() => f(!0));
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
        className: t9.X6,
        "data-shown": n && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: n, name: l, task: a } = e,
                    { Illocon: s } = n;
                return (0, i.jsx)(
                    tJ.u,
                    {
                        asset: (0, i.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: a,
                        position: "top",
                        children: (0, i.jsx)("span", {
                            className: t9.MA,
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
                      className: t9.qA,
                      children: `+${p}`,
                  })
                : null,
        ],
    });
}
function nt(e) {
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
            ((t = (r ?? t8).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
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
                    })(r ?? t8),
                [t],
            ));
    return (0, i.jsxs)("ul", {
        className: t9.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, i.jsxs)(
                    "li",
                    {
                        className: o()(t9.AS, { [t9.J1]: "completed" === n }),
                        "data-arriving": u.has(e.id) ? "true" : void 0,
                        children: [
                            (0, i.jsx)(t6, { status: n }),
                            (0, i.jsx)(v.E, {
                                variant: "body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: t9.iV,
                                selectable: !0,
                                children: (0, i.jsx)("span", {
                                    className: t9.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, i.jsx)(ne, { agents: c.get(e.id) ?? t8, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, i.jsxs)("li", {
                      className: t9.AS,
                      "data-provisional": !0,
                      children: [
                          (0, i.jsx)(t6, { status: "pending" }),
                          (0, i.jsx)(v.E, {
                              variant: "body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: t9.iV,
                              selectable: !0,
                              children: (0, i.jsx)("span", { className: t9.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function nn(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: r = !0, live: a = !0, superseded: s = !1 } = e,
        { completed: u, total: o } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === o) return null;
    let c = T.intl.formatToPlainString(R.default["P/I+JW"], { completed: u, total: o }),
        d = T.intl.formatToPlainString(R.default["7tzwKB"], { completed: u, total: o });
    return (0, i.jsx)(t5, {
        title: T.intl.string(R.default.RtzECX),
        meta: (0, i.jsx)(t7, { children: c }),
        superseded: s,
        showLabel: T.intl.string(R.default.RKyN9q),
        hideLabel: T.intl.string(R.default.xydHoj),
        className: t9.Nr,
        bodyClassName: t9.rf,
        beforeBody: r && !s ? (0, i.jsx)(t0.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, i.jsx)(nt, { todos: t, provisional: n, agents: l, live: a }),
    });
}
var nl = n(308665),
    nr = n(59678),
    ni = n(903847);
function na(e) {
    let { line: t, placement: n, todos: l, todosLive: r = !0, provisionalTodo: s, agents: u, onJumpToActivity: c } = e,
        d = null != n,
        [m, f] = a.useState(n ?? "top"),
        [h, g] = a.useState(d),
        [p, x] = a.useState(!1),
        [v, j] = a.useState(!1),
        [b, y] = a.useState(d);
    (b !== d && (y(d), null != n ? (f(n), g(!0)) : (x(!1), j(!1))),
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
        [S, A] = a.useState(!1),
        [C, N] = a.useState(v);
    (C !== v && (N(v), v ? w(!0) : A(!1)),
        a.useEffect(() => {
            if (v || !k) return;
            let e = setTimeout(() => w(!1), 150);
            return () => clearTimeout(e);
        }, [v, k]),
        a.useEffect(() => {
            if (!k || !v) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => A(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [k, v]));
    let I = null != l && l.length > 0,
        E = a.useCallback(() => j((e) => !e), []);
    return h
        ? (0, i.jsxs)("div", {
              className: ni.qd,
              "data-placement": m,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, i.jsxs)("div", {
                      className: o()(ni.vK, { [ni.ho]: p && d, [ni.ET]: !d }),
                      children: [
                          null == c
                              ? (0, i.jsx)("ol", {
                                    className: o()(ni.Rk, nr.pj),
                                    "data-live": "true",
                                    children: (0, i.jsx)(tY.A, {
                                        glyph: (0, i.jsx)(nl.A, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, i.jsx)(tQ.D, {
                                    className: ni.pZ,
                                    onClick: c,
                                    "aria-label": T.intl.string(R.default.hEK6qu),
                                    children: (0, i.jsx)("ol", {
                                        className: o()(ni.Rk, nr.pj),
                                        "data-live": "true",
                                        children: (0, i.jsx)(tY.A, {
                                            glyph: (0, i.jsx)(nl.A, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          I
                              ? (0, i.jsx)(e4.m, {
                                    text: T.intl.string(R.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, i.jsx)(tQ.D, {
                                        className: ni.BO,
                                        onClick: E,
                                        "aria-expanded": v,
                                        "aria-label": T.intl.string(R.default.RtzECX),
                                        children: (0, i.jsx)(tZ.ClipboardListIcon, {
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
                            className: o()(ni.vB, { [ni.pg]: v && S, [ni.ui]: !v }),
                            children: (0, i.jsx)(nn, {
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
var ns = n(839214),
    nu = n(78564);
let no = new Map(),
    nc = (0, ns.D)(() => ({ byMessageKey: {} }));
function nd(e, t) {
    let { [e]: n, ...l } = nc.getState().byMessageKey;
    nc.setState({ byMessageKey: null == t ? l : { ...l, [e]: t } });
}
var nm = n(195880),
    nf = n(287111),
    nh = n(16619);
function ng(e) {
    let t = (0, nh.qh)("ConjureClarificationProjectPicker");
    return a.useMemo(
        () =>
            t
                .filter((t) => t.projectId !== e)
                .map((e) => ({ projectId: e.projectId, name: e.name, serverName: e.guildName })),
        [t, e],
    );
}
var np = n(736553),
    nx = n(472119),
    nv = n(890497),
    nj = n(103557),
    nb = n(29073),
    ny = n(590077);
function nk(e) {
    let { projectId: t, request: n, canSend: l, onDismiss: r, onSent: s } = e,
        u = (function (e, t, n, l, r) {
            let i = ng(e),
                [s, u] = a.useState(null),
                [o, c] = a.useState([]),
                [d, m] = a.useState(t.prompt),
                [f, h] = a.useState(!1),
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
                S = a.useCallback((e) => {
                    u(e.slice(0, 10));
                }, []),
                A = d.trim(),
                C = n && !f && (w.length > 0 ? "" !== A : o.length > 0),
                N = a.useCallback(
                    (t) => {
                        j.current ||
                            ((j.current = !0),
                            h(!0),
                            null != r
                                ? r(t.map((e) => e.target))
                                : (0, nf.RQ)(
                                      e,
                                      (function (e) {
                                          let t = new Map();
                                          for (let { target: n, prompt: l } of e) t.set(l, [...(t.get(l) ?? []), n]);
                                          return Array.from(t, (e) => {
                                              let [t, n] = e,
                                                  l = n
                                                      .map((e) =>
                                                          T.intl.formatToPlainString(R.default.tcDZw9, {
                                                              name: e.name,
                                                              projectId: e.projectId,
                                                          }),
                                                      )
                                                      .join(", "),
                                                  r = T.intl.formatToPlainString(R.default.jZlNst, { targets: l });
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
                    if (!C) return;
                    if (0 === w.length) return void N(o);
                    (h(!0), p(!1));
                    let l =
                        ((t = eR.Ay.getProject(e)?.name ?? e),
                        (n = T.intl.formatToPlainString(R.default.ScoZLp, { name: t, projectId: e })),
                        `${A}

${n}`);
                    Promise.allSettled(
                        w.map((e) => {
                            let t = x.current.get(e.projectId);
                            return (
                                t?.content !== l &&
                                    ((t = { content: l, nonce: (0, nm.m)() }), x.current.set(e.projectId, t)),
                                (async function (e, t, n) {
                                    let l,
                                        { ticket: r, baseUrl: i } = await (0, nx.dv)(e),
                                        a = new np.u();
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
                            n = [...o, ...t.map((e) => ({ target: e, prompt: A }))];
                        if (t.length === w.length || v.current) {
                            n.length > 0 && N(n);
                            return;
                        }
                        (c(n), u(w.filter((e) => !t.includes(e)).map((e) => e.projectId)), h(!1), p(!0));
                    });
                }, [C, N, o, e, w, A]),
                E = a.useCallback(() => {
                    ((v.current = !0), o.length > 0 && !f && N(o), l());
                }, [N, o, l, f]);
            return {
                projects: b,
                targetIds: k,
                setTargetIds: S,
                prompt: d,
                setPrompt: m,
                sending: f,
                failed: g,
                canSubmit: C,
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
        m = `${n.id}-heading`;
    return (0, i.jsxs)("section", {
        className: o()(nb.nd, nb.jx),
        "aria-labelledby": m,
        "data-conjure-app-build-request": n.id,
        children: [
            (0, i.jsxs)("div", {
                className: nb.wx,
                children: [
                    (0, i.jsx)(v.E, {
                        tag: "span",
                        id: m,
                        variant: "body-sm/medium",
                        color: "text-subtle",
                        className: nb.TK,
                        children: n.summary,
                    }),
                    (0, i.jsx)(ti.K, {
                        icon: eY.XSmallIcon,
                        size: "sm",
                        variant: "icon-only",
                        onClick: u.dismiss,
                        "aria-label": T.intl.string(R.default.KQUuAZ),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: ny.r,
                children: [
                    0 === c.length
                        ? (0, i.jsx)(v.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: T.intl.string(R.default.TbbzW5),
                          })
                        : (0, i.jsx)(nv.Z, {
                              label: T.intl.string(R.default["29gr8j"]),
                              placeholder: T.intl.string(R.default.twlOb6),
                              options: c,
                              selectionMode: "multiple",
                              wrapTags: !0,
                              value: [...u.targetIds],
                              onSelectionChange: u.setTargetIds,
                              disabled: u.sending,
                              maxOptionsVisible: 4,
                              fullWidth: !0,
                          }),
                    (0, i.jsx)(nj.f, {
                        label: T.intl.string(R.default.XZNsDA),
                        value: u.prompt,
                        onChange: u.setPrompt,
                        maxLength: 4e3,
                        disabled: u.sending,
                        autosize: !0,
                        rows: 3,
                        maxRows: 8,
                        error: u.failed ? T.intl.string(R.default.kMZz8G) : null,
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: nb.qr,
                children: (0, i.jsx)("div", {
                    className: nb.zt,
                    children: (0, i.jsx)(d.$, {
                        variant: "primary",
                        size: "sm",
                        text: T.intl.string(R.default.gG4j6o),
                        disabled: !u.canSubmit,
                        loading: u.sending,
                        onClick: u.submit,
                    }),
                }),
            }),
        ],
    });
}
var nw = n(47167),
    nS = n(734057),
    nA = n(994500),
    nC = n(287809),
    nN = n(360047);
function nI(e) {
    return 0 === e.options.length && null == e.input;
}
function nE(e, t, n) {
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
function n_(e, t) {
    return e.questions
        .map((e, n) => ({ question: e, index: n, answer: t[e.id] }))
        .filter((e) => null != e.answer && "" !== e.answer.text.trim())
        .map((e) => {
            let { question: t, index: n, answer: l } = e;
            return `${n + 1}. ${t.question} \u{2192} ${l.text.trim()}`;
        })
        .join("\n");
}
function nM(e, t, n, l) {
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
let nR = {
    [ev.rbe.GUILD_TEXT]: "text",
    [ev.rbe.GUILD_VOICE]: "voice",
    [ev.rbe.GUILD_ANNOUNCEMENT]: "announcement",
    [ev.rbe.GUILD_STAGE_VOICE]: "stage",
    [ev.rbe.GUILD_FORUM]: "forum",
    [ev.rbe.GUILD_MEDIA]: "media",
};
function nT(e, t, n, l) {
    return t.slice(0, 10).map((t) => ({
        id: t,
        name: n(t) ?? l.find((e) => e.id === t)?.name ?? t,
        ...(function (e, t) {
            if ("channel" === e) {
                var n;
                let l = null == (n = nS.A.getChannel(t)?.type) ? void 0 : nR[n];
                return { kind: e, ...(null == l ? {} : { channel_type: l }) };
            }
            if ("user" === e) {
                let n = nC.default.getUser(t)?.username;
                return { kind: e, ...(null == n ? {} : { username: n }) };
            }
            return { kind: e };
        })(e, t),
    }));
}
let nP = { channel: "#", role: "@", user: "@", project: "", server: "" },
    nL = {
        channel: [R.default["9+dfPT"], R.default.pGSJqE],
        role: [R.default["2VkCoD"], R.default.c8YlX8],
        user: [R.default.GZIAxl, R.default["4bptbQ"]],
        project: [R.default.twlOb6, R.default.twlOb6],
        server: [R.default.ZWXDeI, R.default.ZWXDeI],
    };
function n$(e, t) {
    return T.intl.string(nL[e][+!!t]);
}
var nq = n(658675),
    nD = n(123292),
    nF = n(900797),
    nO = n(691885);
function nG(e) {
    let { label: t, hideLabel: n, autoFocus: l, value: r, disabled: s, onChange: u } = e,
        o = a.useMemo(() => nN.Hi.map((e) => ({ id: e, value: e, label: (0, nN.hU)(e) })), []);
    return (0, i.jsx)(nO.l, {
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
var nz = n(344587),
    nU = n(155078);
function nB(e) {
    return !0 === e.upload || e.options.some((e) => null != e.image);
}
let nK = [];
function nH(e) {
    return !0 !== e.upload
        ? null
        : 0 === e.options.length
          ? T.intl.string(R.default.ZZ641e)
          : T.intl.string(1 === e.options.length ? R.default["2g3gk9"] : R.default.dkzChE);
}
function nV(e) {
    return e?.kind === "image" || (e?.kind === "multi" && null != e.attachment);
}
function nW(e, t) {
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
var nX = n(682163),
    nQ = n(300344),
    nZ = n(614733),
    nY = n(904363),
    nJ = n(950902),
    n0 = n(136722),
    n1 = n(778858),
    n2 = n(808728),
    n3 = n(696451),
    n4 = n(71393),
    n7 = n(488926),
    n5 = n(426035),
    n9 = n(246338);
let n8 = n0.kg(ev.xBc.VIEW_CHANNEL, ev.xBc.SEND_MESSAGES);
var n6 = n(384017);
function le(e) {
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
            matchSorterOptions: m,
        } = e,
        f = !0 === n.multi_select,
        h = l.map((e) => e.id);
    function g(e) {
        return nT(n.input ?? "channel", e, (e) => o.find((t) => t.value === e)?.label, l);
    }
    let p = {
        options: o,
        placeholder: c,
        disabled: r,
        onQueryChange: d,
        matchSorterOptions: m,
        onFocus: s,
        onBlur: u,
        fullWidth: !0,
        maxOptionsVisible: 4,
        label: n.question,
        hideLabel: !0,
    };
    return (0, i.jsx)("div", {
        className: n6.YX,
        "data-conjure-clarification-picker": n.input,
        children: f
            ? (0, i.jsx)(nv.Z, {
                  ...p,
                  selectionMode: "multiple",
                  wrapTags: !0,
                  value: h,
                  onSelectionChange: (e) => a(g(e), t),
              })
            : (0, i.jsx)(nv.Z, {
                  ...p,
                  selectionMode: "single",
                  clearable: !0,
                  value: h[0] ?? null,
                  onSelectionChange: (e) => a(null == e ? [] : g([e]), t),
              }),
    });
}
function lt(e) {
    let { projectId: t, guildId: n, fallback: l, ...r } = e,
        s = (0, nQ.A)(n, r.question.channel_filter);
    return (!(function (e) {
        let t,
            n,
            { projectId: l, guildId: r, question: i, value: s, disabled: u, onChange: o } = e,
            d =
                ((t = null != r && "channel" === i.input && "safety_alerts_channel" === i.default),
                (n = (0, c.bG)(
                    [eR.Ay],
                    () => {
                        let e = t ? eR.Ay.getProject(l) : null;
                        return null == e ? null : (0, n5.ug)(e);
                    },
                    [l, t],
                )),
                a.useEffect(() => {
                    null == r || null == n || n3.Ay.isMember(r, n) || n1.A.requestMembersById(r, [n]);
                }, [r, n]),
                (0, c.bG)(
                    [n2.A, n3.Ay, n4.A],
                    () => {
                        if (!t || null == r) return null;
                        let e = n4.A.getGuild(r)?.safetyAlertsChannelId,
                            l = n2.A.getChannels(r);
                        if (null == e || null == l) return null;
                        let a = (0, n9.Lp)(l, i.channel_filter).find((t) => t.id === e);
                        if (null == a) return null;
                        if (null != n && n3.Ay.isMember(r, n))
                            return n7.$3({ permission: n8, user: n, context: a }) ? a : null;
                        let s = a.permissionOverwrites[r]?.deny ?? n0.BY;
                        return n0.X8(s, n8) ? null : a;
                    },
                    [r, n, t, i.channel_filter],
                )),
            m = a.useRef(null),
            f = a.useRef(!1);
        a.useEffect(() => {
            if (!f.current && !u && null != r) {
                if (null == m.current) {
                    if (s.length > 0) f.current = !0;
                    else if (null != d) {
                        var e;
                        ((m.current = d.id),
                            o(((e = []), nT("channel", [d.id], () => (0, nw.m1)(d, nC.default, nA.A), e)), r));
                    }
                    return;
                }
                1 !== s.length || s[0].id !== m.current ? (f.current = !0) : null == d && ((f.current = !0), o([], r));
            }
        }, [d, u, r, o, s]);
    })({ projectId: t, guildId: n, ...r }),
    null == s)
        ? l
        : (0, i.jsx)(le, { ...r, guildId: n, options: s, placeholder: n$("channel", !0 === r.question.multi_select) });
}
function ln(e) {
    let { guildId: t, ...n } = e,
        l = (0, nY.A)(t);
    return (0, i.jsx)(le, { ...n, guildId: t, options: l, placeholder: n$("role", !0 === n.question.multi_select) });
}
function ll(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: a } = (0, nZ.A)(t);
    return (0, i.jsx)(le, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: r,
        matchSorterOptions: a,
        placeholder: n$("user", !0 === n.question.multi_select),
    });
}
function lr(e) {
    let { projectId: t, fallback: n, ...l } = e,
        r = ng(t),
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
    return 0 === s.length ? n : (0, i.jsx)(le, { ...l, options: s, placeholder: n$("project", !1) });
}
function li(e) {
    let t = e.target;
    (0, e1.vq)(t, HTMLInputElement) && requestAnimationFrame(() => t.select());
}
function la(e) {
    let { fallback: t, ...n } = e,
        l = (0, nh.z9)("ConjureClarificationEntityPicker"),
        r = a.useMemo(
            () =>
                l.map((e) => ({
                    id: `conjure-target-${e.id}`,
                    value: e.id,
                    label: e.name,
                    leading: (0, i.jsx)(nX.Ay, { guild: e, size: nX.Ay.Sizes.MINI, active: !0 }),
                })),
            [l],
        );
    return 0 === r.length
        ? t
        : (0, i.jsx)("div", {
              onFocus: li,
              onMouseUp: li,
              children: (0, i.jsx)(le, { ...n, options: r, placeholder: n$("server", !1) }),
          });
}
function ls(e) {
    let { projectId: t, fallback: n = null, ...l } = e,
        r = (0, nJ.Tj)(t, !0);
    if ("project" === l.question.input) return (0, i.jsx)(lr, { projectId: t, fallback: n, ...l }, l.question.id);
    if ("server" === l.question.input) return (0, i.jsx)(la, { fallback: n, ...l }, l.question.id);
    if (null == r) return n;
    switch (l.question.input) {
        case "channel":
            return (0, i.jsx)(lt, { projectId: t, guildId: r, fallback: n, ...l }, l.question.id);
        case "role":
            return (0, i.jsx)(ln, { guildId: r, ...l }, l.question.id);
        case "user":
            return (0, i.jsx)(ll, { guildId: r, ...l }, l.question.id);
        default:
            return n;
    }
}
var lu = n(87221),
    lo = n(771871),
    lc = n(26430),
    ld = n(750943),
    lm = n(173936),
    lf = n(95477),
    lh = n(256905),
    lg = n(490707),
    lp = n(907702);
function lx(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: s, gone: u, handleError: c } = (0, lg._)(t, n),
        [d, m] = a.useState(null),
        f = null != s && d === s;
    return u
        ? (0, i.jsxs)("span", {
              className: o()(lp.Gt, lp.b6),
              children: [
                  (0, i.jsx)(lu.ImageWarningIcon, { size: "md", color: "currentColor" }),
                  (0, i.jsx)(v.E, {
                      tag: "span",
                      variant: "body-xs/medium",
                      color: "text-muted",
                      children: T.intl.string(R.default.lhgD88),
                  }),
              ],
          })
        : (0, i.jsx)("span", {
              className: o()(lp.Gt, { [lp.iP]: !f }),
              children:
                  null != s
                      ? (0, i.jsx)("img", {
                            src: s,
                            alt: l,
                            className: lp.Sl,
                            onLoad: (e) => {
                                m(s);
                                let { naturalWidth: t, naturalHeight: n } = e.currentTarget;
                                t > 0 && n > 0 && r({ width: t, height: n });
                            },
                            onError: c,
                            draggable: !1,
                        })
                      : null,
          });
}
function lv(e) {
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
            onPick: m,
            onView: f,
            onArrow: h,
            onMeasured: g,
            onRemove: p,
        } = e,
        x = T.intl.formatToPlainString(R.default.JGjZMs, { answer: r.label });
    return (0, i.jsxs)("div", {
        className: o()(lp.Vs, { [lp.Q9]: s, [lp.RX]: u }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, i.jsxs)(tQ.D, {
                className: o()(lp.Up, { [lp.XF]: null != r.image }),
                "data-conjure-image-option-pick": !0,
                onClick: u ? (null != r.image ? () => f(r) : void 0) : () => m(r),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), h(r, t));
                },
                role: a ? "checkbox" : "radio",
                "aria-checked": s,
                "aria-label": T.intl.formatToPlainString(R.default.AQbxhf, { answer: r.label }),
                "aria-disabled": u,
                tabIndex: c && d ? 0 : -1,
                children: [
                    (0, i.jsxs)("span", {
                        className: lp.$_,
                        children: [
                            null != r.image
                                ? (0, i.jsx)(lx, {
                                      projectId: l,
                                      attachmentId: r.image.attachment_id,
                                      alt: r.label,
                                      onMeasured: g,
                                  })
                                : (0, i.jsx)("span", { className: lp.Gt }),
                            (0, i.jsx)("span", {
                                className: lp.q3,
                                "aria-hidden": !0,
                                children: a
                                    ? (0, i.jsx)(nq.P, { checked: s, disabled: u })
                                    : (0, i.jsx)(lo.T, { checked: s, disabled: u }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(v.E, {
                        tag: "span",
                        variant: "body-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: lp.pG,
                        children:
                            "" !== (n = null != (t = r.image?.page_url ?? r.image?.url) ? (0, nU.E)(t) : "")
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
                      className: lp.B4,
                      children: (0, i.jsx)(e4.m, {
                          text: T.intl.string(R.default.HQEXJM),
                          children: (0, i.jsx)(ti.K, {
                              icon: tc.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: p,
                              disabled: u,
                              "aria-label": T.intl.string(R.default.HQEXJM),
                              tabIndex: c ? 0 : -1,
                          }),
                      }),
                  })
                : null != r.image
                  ? (0, i.jsx)("span", {
                        className: lp.B4,
                        children: (0, i.jsx)(e4.m, {
                            text: T.intl.string(R.default["4/eeDD"]),
                            children: (0, i.jsx)(ti.K, {
                                icon: lc.MaximizeIcon,
                                size: "sm",
                                variant: "overlay-secondary",
                                onClick: () => f(r),
                                "aria-label": x,
                                tabIndex: c && d ? 0 : -1,
                            }),
                        }),
                    })
                  : null,
        ],
    });
}
function lj(e) {
    let { projectId: t, question: n, selectedIds: l, disabled: r, reachable: s = !0, onPick: u, own: c } = e,
        d = !0 === n.multi_select,
        { options: m } = n,
        f = m.length > 4 ? "gallery" : "row",
        h = a.useRef(null),
        g = a.useRef(new Map()),
        [p, x] = a.useState(null),
        v = null != p && m.some((e) => e.id === p) ? p : (m.find((e) => l.includes(e.id)) ?? m[0])?.id,
        j = a.useMemo(() => {
            var e;
            return null == c.image
                ? null
                : ((e = c.image),
                  {
                      id: `own:${e.attachment.id}`,
                      label: T.intl.string(R.default.SUdqCQ),
                      image: { attachment_id: e.attachment.id },
                  });
        }, [c.image]),
        b = a.useCallback(
            (e) => {
                let n = (null == j ? m : [...m, j]).flatMap((e) => (null != e.image ? [{ ...e, image: e.image }] : [])),
                    l = n.findIndex((t) => t.id === e.id);
                l < 0 ||
                    Promise.all(n.map((e) => (0, e3.PK)(t, e.image.attachment_id))).then(
                        (e) => {
                            (0, lh.R)({
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
            [m, j, t],
        ),
        y = a.useCallback(
            (e, t) => {
                let n = (m.findIndex((t) => t.id === e.id) + t + m.length) % m.length,
                    l = m[n];
                (x(l.id), h.current?.querySelectorAll("[data-conjure-image-option-pick]")[n]?.focus(), d || r || u(l));
            },
            [r, d, u, m],
        );
    return (0, i.jsxs)("div", {
        className: lp.Nz,
        "data-conjure-image-options": !0,
        children: [
            0 === m.length && null == j
                ? null
                : (0, i.jsxs)("div", {
                      ref: h,
                      className: o()(lp.fF, "gallery" === f ? lp.nV : lp.nM, { [lp.m3]: d }),
                      role: d ? "group" : "radiogroup",
                      "aria-labelledby": `${n.id}-label`,
                      "data-layout": f,
                      "data-count": m.length,
                      children: [
                          m.map((e) =>
                              (0, i.jsx)(
                                  lv,
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
                                    lv,
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
            (0, i.jsx)(lb, {
                projectId: t,
                own: c,
                disabled: r,
                reachable: s,
                uploadText: T.intl.string(/\bicons?\b/i.test(n.question) ? R.default.qU4WN6 : R.default.cbMDDB),
            }),
        ],
    });
}
function lb(e) {
    let { projectId: t, own: n, disabled: l, reachable: r, uploadText: s } = e,
        u = a.useRef(null),
        [o, c] = a.useState(!1),
        [m, f] = a.useState(""),
        h = r ? 0 : -1,
        g = n.busy;
    function p() {
        "" !== m.trim() &&
            null == g &&
            n.onLink(m.trim()).then(
                (e) => {
                    e && (c(!1), f(""));
                },
                () => void 0,
            );
    }
    return (0, i.jsxs)("div", {
        className: lp.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, i.jsxs)("div", {
                className: lp.QJ,
                children: [
                    (0, i.jsx)(d.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: ld.ImagePlusIcon,
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
                              icon: lm.LinkIcon,
                              text: T.intl.string(R.default["1TgOO+"]),
                              disabled: l || "upload" === g,
                              onClick: () => c(!0),
                              tabIndex: h,
                              "data-conjure-own-image-link": !0,
                          }),
                    (0, i.jsx)("input", {
                        ref: u,
                        type: "file",
                        accept: "image/png,image/jpeg,image/gif,image/webp",
                        className: lp.Fg,
                        tabIndex: -1,
                        "aria-hidden": !0,
                        onChange: (e) => {
                            let l = e.currentTarget.files?.[0];
                            ((e.currentTarget.value = ""), null != l && n.onUpload((0, nf.rh)(t, l, l.name, l.type)));
                        },
                    }),
                ],
            }),
            o
                ? (0, i.jsxs)("div", {
                      className: lp.vG,
                      children: [
                          (0, i.jsx)("div", {
                              className: lp.Hs,
                              children: (0, i.jsx)(lf.k, {
                                  label: T.intl.string(R.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: T.intl.string(R.default.AVhvn8),
                                  value: m,
                                  onChange: (e) => f(e),
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
                              className: lp.gd,
                              children: [
                                  (0, i.jsx)(d.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: T.intl.string(R.default.FbRbeM),
                                      loading: "link" === g,
                                      disabled: l || "" === m.trim(),
                                      onClick: p,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, i.jsx)(nD.Q, {
                                      variant: "secondary",
                                      textVariant: "body-sm/medium",
                                      text: T.intl.string(R.default.eXZL4X),
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
function ly(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: u } = e,
        c = a.useId(),
        d = !0 === t.recommended,
        m = null != t.detail && "" !== t.detail;
    return (0, i.jsxs)(tQ.D, {
        className: o()(n6.uK, { [n6.ue]: l, [n6.h4]: !0 === u }),
        onClick: l ? void 0 : () => r(t),
        "aria-label": T.intl.formatToPlainString(d ? R.default["2p6UFz"] : R.default.AQbxhf, { answer: t.label }),
        "aria-describedby": m ? c : void 0,
        "aria-disabled": l,
        role: null != u ? "checkbox" : void 0,
        "aria-checked": u,
        tabIndex: s ? 0 : -1,
        "data-conjure-clarification-option": t.id,
        "data-recommended": d ? "true" : void 0,
        children: [
            null != u
                ? (0, i.jsx)("span", { className: n6.dy, children: (0, i.jsx)(nq.P, { checked: u, disabled: l }) })
                : (0, i.jsx)("span", { className: n6.Gy, "aria-hidden": !0, children: n }),
            (0, i.jsxs)("span", {
                className: n6.qO,
                children: [
                    (0, i.jsx)("span", {
                        className: n6.l8,
                        children: (0, i.jsx)(v.E, {
                            tag: "span",
                            variant: "body-md/medium",
                            color: "none",
                            className: n6.ed,
                            children: t.label,
                        }),
                    }),
                    m
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
                      className: n6.rM,
                      children: T.intl.string(R.default.zku6r1),
                  })
                : null,
        ],
    });
}
function lk(e) {
    let { projectId: t, question: n, selected: l, disabled: r, reachable: a = !0, onPick: s, own: u } = e,
        o = !0 === n.multi_select;
    return nB(n)
        ? (0, i.jsx)(lj, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: a, onPick: s, own: u })
        : (0, i.jsx)(i.Fragment, {
              children: n.options.map((e, t) =>
                  (0, i.jsx)(
                      ly,
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
let lw = [],
    lS = [];
function lA(e) {
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
        m = !0 === n.multi_select ? T.intl.string(R.default.tE8qbz) : nH(n);
    return (0, i.jsxs)("div", {
        className: o()(n6.Ge, n6.x1),
        "data-direction": a,
        "aria-hidden": !0,
        children: [
            null == m
                ? null
                : (0, i.jsx)(v.E, {
                      tag: "div",
                      variant: "body-xs/normal",
                      color: "text-muted",
                      className: n6.aK,
                      children: m,
                  }),
            (0, i.jsx)(lk, {
                projectId: t,
                question: n,
                selected: r,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: nW(u, c),
            }),
            !1 === n.allow_custom || (!0 !== n.upload && nB(n))
                ? null
                : (0, i.jsxs)("div", {
                      className: n6.Xy,
                      children: [
                          (0, i.jsx)("span", {
                              className: n6.Gy,
                              "aria-hidden": !0,
                              children: (0, i.jsx)(f.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == d ? null : (0, i.jsx)("span", { className: o()(n6.Pu, n6.es), children: d }),
                      ],
                  }),
            !0 === n.upload
                ? (0, i.jsx)("div", {
                      className: n6.$0,
                      children: (0, i.jsx)(nD.Q, {
                          variant: "secondary",
                          textVariant: "body-sm/medium",
                          text: T.intl.string(R.default.zxSq2q),
                          disabled: s,
                          tabIndex: -1,
                      }),
                  })
                : null,
        ],
    });
}
function lC(e) {
    var t;
    let {
            projectId: n,
            clarification: l,
            onSubmit: r,
            onDismiss: s,
            submitText: u,
            onBack: c,
            backText: m,
            hideSubmit: h = !1,
            headingLines: g = 5,
        } = e,
        [p, x] = a.useState({}),
        [j, b] = a.useState({}),
        [y, k] = a.useState({}),
        [w, S] = a.useState(() =>
            Object.fromEntries(
                l.questions.flatMap((e) => (null != e.default_entities ? [[e.id, e.default_entities]] : [])),
            ),
        ),
        [A, C] = a.useState({}),
        [N, I] = a.useState({}),
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
        ei = nB(Z),
        ea = er ? T.intl.string(R.default.tE8qbz) : nH(Z),
        es = er
            ? (y[Z.id] ?? lw)
            : ((t = p[Z.id]), t?.kind === "option" ? [t.optionId] : t?.kind === "multi" ? t.optionIds : nK),
        eu = (function (e, t, n) {
            let [l, r] = a.useState({}),
                [i, s] = a.useState({}),
                [u, o] = a.useState({}),
                c = T.intl.string(R.default.wTsP5l),
                d = a.useCallback((e) => l[e] ?? null, [l]),
                m = a.useCallback(
                    (e) => null != l[e.id] && (!0 === e.multi_select ? !0 === u[e.id] : nV(t[e.id])),
                    [t, l, u],
                ),
                f = a.useCallback(
                    (e) => {
                        let t = l[e.id];
                        return null != t && !0 === u[e.id] ? { attachment: t.attachment, text: c } : void 0;
                    },
                    [c, l, u],
                ),
                h = a.useCallback(
                    (a, u) => {
                        let d = a.id,
                            f = !0 === a.multi_select,
                            h = l[d] ?? null;
                        if (u) return nW(h, m(a));
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
                                    null != l && (0, e3.Vm)(e, l.attachment.id).catch(() => void 0), { ...n, [d]: t }
                                );
                            }),
                                g({ busy: null, error: null }),
                                f ? o((e) => ({ ...e, [d]: !0 })) : n((e) => (e[d] === x ? { ...e, [d]: p(t) } : e)));
                        }
                        return {
                            image: h,
                            selected: m(a),
                            busy: i[d]?.busy ?? null,
                            error: i[d]?.error ?? null,
                            onPick: () => {
                                null != h &&
                                    (f ? o((e) => ({ ...e, [d]: !0 !== e[d] })) : n((e) => ({ ...e, [d]: p(h) })));
                            },
                            onRemove: () => {
                                null != h &&
                                    ((0, e3.Vm)(e, h.attachment.id).catch(() => void 0),
                                    r((e) => {
                                        let { [d]: t, ...n } = e;
                                        return n;
                                    }),
                                    o((e) => ({ ...e, [d]: !1 })),
                                    n((e) => {
                                        if (f || !nV(e[d])) return e;
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
                                                error: { source: "upload", text: T.intl.string(R.default["kUw/b1"]) },
                                            }),
                                    ));
                            },
                            onLink: (t) => (
                                g({ busy: "link", error: null }),
                                (0, e3.gm)(e, t).then(
                                    (e) => (v({ attachment: e }), !0),
                                    (e) => (
                                        g({
                                            busy: null,
                                            error: {
                                                source: "link",
                                                text:
                                                    e instanceof Error && "" !== e.message
                                                        ? e.message
                                                        : T.intl.string(R.default.l79PMc),
                                            },
                                        }),
                                        !1
                                    ),
                                )
                            ),
                        };
                    },
                    [c, t, l, e, m, n, i],
                );
            return { imageFor: d, selectedFor: m, multiPartFor: f, controlsFor: h };
        })(n, p, x),
        eo = eu.imageFor(Z.id),
        ec = eu.selectedFor(Z),
        { text: ed, phase: em } = (0, nz.Q)(Z.question),
        ef = ed === Z.question,
        eh = ef && et?.id === Z.id && et.truncated;
    a.useLayoutEffect(() => {
        if (null == B || ee || !ef) return;
        function e() {
            if (null == B) return;
            let e = B.scrollHeight > B.clientHeight + 1;
            en((t) => (t?.id === Z.id && t.truncated === e ? t : { id: Z.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(B), () => t.disconnect());
    }, [ef, B, Z.id, ee]);
    let eg = T.intl.string(ee ? T.t.iTcuma : T.t.dcl9MQ),
        ep = a.useCallback(
            (e) => {
                null != r &&
                    (function (e, t, n, l, r) {
                        let i = n_(t, n);
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
                                              return (0, nN.Ol)(n, e, l);
                                          }),
                                      ).then(a));
                        }
                    })(n, l, e, N, r);
            },
            [l, N, r, n],
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
                let t = nE(l, e, Q);
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
        eS = (Q > 0 && !W) || null != ew,
        eC = a.useCallback(
            (e) => {
                b((e) => ({ ...e, [Z.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                ei ? W || x((e) => ({ ...e, [Z.id]: t })) : ey(t);
            },
            [W, ei, Z.id, ey],
        ),
        eN = a.useCallback(() => {
            (b((e) => ({ ...e, [Z.id]: "" })), ey({ kind: "custom", text: T.intl.string(R.default.zxSq2q) }));
        }, [Z.id, ey]),
        { multiPartFor: eI } = eu,
        eE = a.useMemo(() => (er ? nM(Z, es, el, eI(Z)) : null), [el, er, eI, Z, es]),
        e_ = w[Z.id] ?? lS,
        eM = a.useMemo(() => {
            var e, t;
            let n;
            return null != Z.input
                ? ((e = Z.input),
                  (t = A[Z.id]),
                  (n = el.trim()),
                  {
                      kind: "entities",
                      entities: e_,
                      ...(null == t ? {} : { guildId: t }),
                      ...("" === n ? {} : { custom: n }),
                      text: [
                          ...e_.map((t) => (t.name.startsWith(nP[e]) ? t.name : `${nP[e]}${t.name}`)),
                          ...("" === n ? [] : [n]),
                      ].join(", "),
                  })
                : null;
        }, [el, A, e_, Z.id, Z.input]),
        eR = a.useCallback(
            (e, t) => {
                (S((t) => ({ ...t, [Z.id]: e })), C((e) => ({ ...e, [Z.id]: t })));
            },
            [Z.id],
        ),
        eT = a.useCallback(() => _(!0), []),
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
                        return { kind: "image", attachment: t.attachment, text: T.intl.string(R.default.wTsP5l) };
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
                        ? nM(Z, [t.optionId], el)
                        : nM(Z, [], el, t)
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
                          return null == nE(e, r, n) && "" === n_(e, r) ? null : r;
                      })(l, p, Q)
                    : null,
            [p, l, Q, eB],
        ),
        eH = null != eK,
        eV = (null != eB || eH) && !W,
        eW = Q === X - 1,
        eX = a.useCallback(() => {
            W || (null != eB ? ey(eB) : null != eK && (x(eK), eb(eK)));
        }, [eb, W, eB, ey, eK]),
        eQ = a.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, e1.vq)(e.target, HTMLTextAreaElement) ||
                    (0, e1.vq)(e.target, HTMLInputElement) ||
                    ((!(0, e1.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && eS
                            ? (e.preventDefault(), (ew ?? ek)())
                            : "ArrowRight" === e.key && eV && (e.preventDefault(), eX())));
            },
            [ew, eS, eV, ek, eX],
        ),
        eZ =
            ei && !0 !== Z.upload
                ? null
                : (0, i.jsxs)("div", {
                      className: n6.Xy,
                      children: [
                          (0, i.jsx)("span", {
                              className: n6.Gy,
                              "aria-hidden": !0,
                              children: (0, i.jsx)(f.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          (0, i.jsx)(e5.y, {
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
                              placeholder: T.intl.string(nI(Z) ? R.default.yLN1x6 : R.default["tOC+tn"]),
                              "aria-label": T.intl.formatToPlainString(R.default["4JeYPB"], { question: Z.question }),
                              disabled: W,
                              rows: 1,
                              className: n6.Pu,
                              "data-conjure-clarification-other": Z.id,
                          }),
                      ],
                  });
    return (0, i.jsxs)("section", {
        className: o()(n6.$O, { [n6.fI]: eF && !eG, [n6.Oh]: eG }),
        role: "dialog",
        "aria-label": Z.question,
        "data-conjure-clarification": l.id,
        "data-state": W ? "inert" : "open",
        "data-question-expanded": ee ? "true" : void 0,
        "data-picker-open": E && !G ? "true" : void 0,
        "data-step": Q,
        tabIndex: -1,
        onKeyDown: eQ,
        children: [
            (0, i.jsxs)("div", {
                className: n6.rf,
                style: null == F ? void 0 : { height: F.heading + F.rows },
                "data-moving": G ? "" : void 0,
                children: [
                    (0, i.jsxs)("div", {
                        ref: U,
                        className: n6.wx,
                        children: [
                            (0, i.jsx)(v.E, {
                                ref: K,
                                tag: "span",
                                id: `${Z.id}-label`,
                                variant: "body-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: ee ? void 0 : g,
                                className: o()(nb.TK, n6.R_, { [n6.TB]: "exit" === em, [n6.JU]: "enter" === em }),
                                children: ed,
                            }),
                            eh || ee
                                ? (0, i.jsx)("div", {
                                      className: nb.Q7,
                                      children: (0, i.jsx)(e4.m, {
                                          text: eg,
                                          children: (0, i.jsx)(ti.K, {
                                              icon: ee ? nF.ChevronSmallUpIcon : eA.ChevronSmallDownIcon,
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
                                : (0, i.jsx)(tQ.D, {
                                      className: o()(nb.gb, nb.Q7),
                                      onClick: eU,
                                      "aria-label": T.intl.string(R.default.qVXlk0),
                                      "data-conjure-clarification-close": !0,
                                      children: (0, i.jsx)(eY.XSmallIcon, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: n6.Cg,
                        style: null == F ? void 0 : { insetBlockStart: F.heading },
                        children: (0, i.jsxs)("div", {
                            className: n6.I,
                            children: [
                                (0, i.jsxs)("div", {
                                    ref: H,
                                    className: n6.Ge,
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
                                                  className: n6.aK,
                                                  children: ea,
                                              }),
                                        (0, i.jsx)(lk, {
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
                                                                  ((n = t[Z.id] ?? lw),
                                                                  (l = e.id),
                                                                  (r = n.includes(l)
                                                                      ? n.filter((e) => e !== l)
                                                                      : [...n, l]),
                                                                  Z.options
                                                                      .filter((e) => r.includes(e.id))
                                                                      .map((e) => e.id)),
                                                          };
                                                      })
                                                    : eC(e),
                                            own: eL,
                                        }),
                                        null != Z.input
                                            ? (0, i.jsx)(ls, {
                                                  projectId: n,
                                                  question: Z,
                                                  value: e_,
                                                  disabled: W,
                                                  onChange: eR,
                                                  onFocus: eT,
                                                  onBlur: eP,
                                                  fallback: !1 === Z.allow_custom ? eZ : null,
                                              })
                                            : null,
                                        !0 === Z.link && e_.length > 0 && null == N[Z.id]
                                            ? (0, i.jsx)("div", {
                                                  className: n6.X_,
                                                  children: (0, i.jsx)(nD.Q, {
                                                      variant: "secondary",
                                                      textVariant: "body-sm/medium",
                                                      text: T.intl.string(R.default.eCzCxC),
                                                      disabled: W,
                                                      onClick: () => I((e) => ({ ...e, [Z.id]: "auto" })),
                                                  }),
                                              })
                                            : null,
                                        !0 === Z.link && e_.length > 0 && null != N[Z.id]
                                            ? (0, i.jsxs)("div", {
                                                  className: n6.$y,
                                                  onFocus: eT,
                                                  onBlur: eP,
                                                  children: [
                                                      (0, i.jsx)(v.E, {
                                                          variant: "body-sm/normal",
                                                          color: "text-muted",
                                                          "aria-hidden": !0,
                                                          children: T.intl.string(R.default.Odrcmq),
                                                      }),
                                                      (0, i.jsx)(nG, {
                                                          label: T.intl.string(R.default.Odrcmq),
                                                          hideLabel: !0,
                                                          autoFocus: !0,
                                                          value: N[Z.id] ?? "auto",
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
                                                  className: n6.aK,
                                                  children: Z.note,
                                              })
                                            : null,
                                        !1 === Z.allow_custom ? null : eZ,
                                        !0 === Z.upload
                                            ? (0, i.jsx)("div", {
                                                  className: n6.$0,
                                                  children: (0, i.jsx)(nD.Q, {
                                                      variant: "secondary",
                                                      textVariant: "body-sm/medium",
                                                      text: T.intl.string(R.default.zxSq2q),
                                                      disabled: W,
                                                      onClick: eN,
                                                      "data-conjure-no-image": !0,
                                                  }),
                                              })
                                            : null,
                                    ],
                                }),
                                null == q
                                    ? null
                                    : (0, i.jsx)(
                                          lA,
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
            X > 1 || er || ei || null != Z.input || null != c || !0 === Z.optional || nI(Z)
                ? (0, i.jsxs)("div", {
                      className: nb.qr,
                      children: [
                          (0, i.jsx)(v.E, {
                              tag: "span",
                              variant: "body-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  X > 1
                                      ? T.intl.formatToPlainString(R.default.yzYUjq, { index: Q + 1, total: X })
                                      : null,
                          }),
                          (0, i.jsxs)("div", {
                              className: nb.zt,
                              children: [
                                  eS
                                      ? (0, i.jsx)(nD.Q, {
                                            variant: "secondary",
                                            textVariant: "body-sm/medium",
                                            text: m ?? T.intl.string(R.default.Pk5lfA),
                                            onClick: ew ?? ek,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  h
                                      ? null
                                      : (0, i.jsx)(d.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: eW
                                                ? (u ?? T.intl.string(T.t.geKm7t))
                                                : T.intl.string(eH ? R.default.ZcrbKz : R.default.w1nRmT),
                                            disabled: !eV,
                                            onClick: eX,
                                            "data-conjure-clarification-next": !0,
                                            "data-submits": eW ? "true" : void 0,
                                        }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var lN = n(71637),
    lI = n(557744),
    lE = n(223347),
    l_ = n(894443),
    lM = n(525530),
    lR = n(513425),
    lT = n(708679);
function lP(e) {
    return (0, c.bG)([eR.Ay], () => eR.Ay.getProject(e)?.install_scope_setup != null, [e]);
}
let lL = "scope-setup:q0",
    l$ = `${lL}:0`,
    lq = `${lL}:1`;
var lD = n(715924);
let lF = [];
function lO() {}
function lG(e) {
    let { projectId: t, card: n } = e,
        l = a.useId(),
        [r] = n.clarification.questions,
        [s, u] = a.useState(r.default_entities ?? lF),
        { onPickServer: c, onBack: m } = n,
        f = s[0]?.id;
    return (0, i.jsxs)("section", {
        className: o()(nb.nd, nb.jx),
        "aria-labelledby": l,
        "data-conjure-scope-server-card": !0,
        children: [
            (0, i.jsxs)("div", {
                className: lD.wx,
                children: [
                    (0, i.jsx)(v.E, {
                        tag: "span",
                        id: l,
                        variant: "body-sm/medium",
                        color: "text-subtle",
                        children: T.intl.string(R.default.ickKBI),
                    }),
                    (0, i.jsx)(v.E, {
                        tag: "span",
                        variant: "body-xs/normal",
                        color: "text-muted",
                        children: T.intl.string(R.default.OyM4SV),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: lD.Qs,
                children: [
                    (0, i.jsx)(ls, {
                        projectId: t,
                        question: r,
                        value: s,
                        disabled: null == c,
                        onChange: u,
                        onFocus: lO,
                        onBlur: lO,
                    }),
                    null != r.note
                        ? (0, i.jsx)(v.E, { variant: "body-xs/normal", color: "text-muted", children: r.note })
                        : null,
                ],
            }),
            (0, i.jsxs)("div", {
                className: lD.qr,
                children: [
                    (0, i.jsx)(d.$, {
                        variant: "primary",
                        size: "sm",
                        text: T.intl.string(R.default.PTIP7V),
                        disabled: null == f || null == c,
                        onClick: () => {
                            null != f && c?.(f);
                        },
                    }),
                    null != m
                        ? (0, i.jsx)(nD.Q, {
                              variant: "secondary",
                              textVariant: "body-sm/medium",
                              text: T.intl.string(T.t["ETE/oC"]),
                              onClick: m,
                          })
                        : null,
                ],
            }),
        ],
    });
}
function lz(e) {
    let { projectId: t } = e,
        n = (function (e) {
            let t = (0, c.bG)([eR.Ay], () => eR.Ay.getProject(e), [e]),
                n = (0, nh.z9)("ConjureScopeSetupCard"),
                [l, r] = a.useState(null),
                [i, s] = a.useState(!1),
                [u, o] = a.useState(null),
                d = t?.install_scope_setup,
                m = "server" === l || (null == l && "choose_server" === d),
                f = t?.guild_id,
                h = a.useMemo(() => {
                    var t;
                    return m
                        ? ((t = f ?? (0, lT.EP)(e)),
                          {
                              id: n.length > 0 ? "server-setup" : "server-setup-empty",
                              questions: [
                                  {
                                      id: "server-setup:q0",
                                      question: T.intl.string(n.length > 0 ? R.default.ZWXDeI : R.default["u5+Qhu"]),
                                      recommendation_reason: "",
                                      allow_custom: !1,
                                      options: n.length > 0 ? [] : [{ id: l$, label: T.intl.string(R.default.qLYOpH) }],
                                      ...(0, lT.XU)(n, t),
                                  },
                              ],
                          })
                        : {
                              id: "scope-setup",
                              questions: [
                                  {
                                      id: lL,
                                      question: T.intl.string(R.default.ickKBI),
                                      recommendation_reason: "",
                                      allow_custom: !1,
                                      options: [
                                          {
                                              id: l$,
                                              label: T.intl.string(R.default.qLYOpH),
                                              detail: T.intl.string(R.default.QSKvUE),
                                          },
                                          {
                                              id: lq,
                                              label: T.intl.string(R.default.QV5C7b),
                                              detail: T.intl.string(R.default["ZzHR4/"]),
                                          },
                                      ],
                                  },
                              ],
                          };
                }, [m, n, f, e]);
            if (null == d) return null;
            if (null == t || !(0, eR.PV)(t))
                return { clarification: (0, lT.YI)(h), readOnly: !0, hideSubmit: !0, failure: null };
            async function g(t, n) {
                (s(!0), o(null));
                try {
                    await (0, lT.JN)(e, t, n);
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
                          null != n && (n.option_ids.includes(lq) ? r("server") : g("user", null));
                      },
                submitText: T.intl.string(T.t["cY+Oob"]),
                onBack: m && !i ? () => r("scope") : void 0,
                hideSubmit: !1,
                serverStep: m && n.length > 0,
                onPickServer: i ? void 0 : (e) => g("guild", e),
                failure: null == u ? null : T.intl.string("server" === u ? R.default["XXKd+7"] : R.default.jNVZ3e),
            };
        })(t);
    return null == n
        ? null
        : n.readOnly
          ? (0, i.jsx)(lC, { projectId: t, clarification: n.clarification, hideSubmit: !0 })
          : (0, i.jsxs)("div", {
                children: [
                    !0 === n.serverStep
                        ? (0, i.jsx)(lG, { projectId: t, card: n }, n.clarification.id)
                        : (0, i.jsx)(
                              lC,
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
function lU(e) {
    let { projectId: t } = e,
        n = (function (e) {
            let { projectId: t, clarification: n, offer: l, onKept: r } = e,
                { scope: i, feature: s } = l,
                u = (0, c.bG)([eR.Ay], () => eR.Ay.getProject(t), [t]),
                o = (0, nh.z9)("ConjureScopeSwitchCard"),
                [d, m] = a.useState(!1),
                [f, h] = a.useState(null),
                g = u?.guild_id,
                p = a.useMemo(() => {
                    let [e] = n.questions,
                        t = T.intl.formatToPlainString("guild" === i ? R.default["jh/iy+"] : R.default.d7jxeT, {
                            feature: s,
                        });
                    return {
                        id: n.id,
                        questions: [
                            "guild" === i
                                ? { ...e, question: t, allow_custom: !1, ...(0, lT.XU)(o, g) }
                                : {
                                      ...e,
                                      question: t,
                                      allow_custom: !1,
                                      options: [{ id: `${e.id}:0`, label: T.intl.string(R.default.TVRkVh) }],
                                  },
                        ],
                    };
                }, [n, s, o, g, i]);
            if (null == u || !(0, eR.PV)(u))
                return { clarification: (0, lT.YI)(p), readOnly: !0, hideSubmit: !0, failure: null };
            async function x(e) {
                (m(!0), h(null));
                try {
                    await (0, lT.yN)(t, n.id, i, e);
                } catch (e) {
                    (m(!1), h(409 === e.status ? "locked" : "failed"));
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
                submitText: T.intl.string("guild" === i ? R.default.Ua7yKM : R.default.TVRkVh),
                onBack: d
                    ? void 0
                    : function () {
                          (h(null), (0, lT.RW)(t) ? r() : h("failed"));
                      },
                backText: T.intl.string("guild" === i ? R.default["4WnIqd"] : R.default["am+p7p"]),
                hideSubmit: "user" === i,
                failure: null == f ? null : T.intl.string("locked" === f ? R.default.irUT0N : R.default.jNVZ3e),
            };
        })(e);
    return n.readOnly
        ? (0, i.jsx)(
              lC,
              { projectId: t, clarification: n.clarification, headingLines: 1, hideSubmit: !0 },
              n.clarification.id,
          )
        : (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)(
                      lC,
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
var lB = n(564963),
    lK = n(530557),
    lH = n(431527),
    lV = n(628284);
let lW = new Set(["select", "channel", "role", "user"]);
function lX(e, t) {
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
function lQ(e, t) {
    let n = e.keys ?? [];
    return n.length > 0 ? n : t.schema.map((e) => e.key);
}
var lZ = n(914250),
    lY = n(202723);
function lJ(e) {
    let { projectId: t, cardId: l, request: r, status: s, awaiting: u, onDismiss: c } = e,
        m = a.useCallback(() => {
            (0, K.mM)(async () => {
                let { default: e } = await Promise.all([n.e(291953), n.e(197826)]).then(n.bind(n, 644441));
                return (n) => (0, i.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        f = a.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: lK.KeyIcon })), [r.fields]),
        h = (0, lB.bB)(l, s),
        g = o()(lY.Lo, { [lY.jY]: h });
    if ("superseded" === s)
        return (0, i.jsx)(
            "article",
            {
                className: g,
                children: (0, i.jsx)(v.E, {
                    variant: "body-xs/semibold",
                    color: "text-muted",
                    tag: "span",
                    children: T.intl.string(R.default.CTxtdV),
                }),
            },
            s,
        );
    if ("inactive" === s)
        return (0, i.jsxs)(
            "article",
            {
                className: g,
                children: [
                    (0, i.jsx)(v.E, {
                        variant: "body-xs/semibold",
                        color: "text-muted",
                        tag: "span",
                        children: T.intl.string(R.default.HCQvpO),
                    }),
                    (0, i.jsx)(lH.C, { label: T.intl.string(R.default.HCQvpO), size: "xs", items: f }),
                ],
            },
            s,
        );
    if ("pending" === s)
        return (0, i.jsx)(
            "article",
            {
                className: lY.Lo,
                children: (0, i.jsx)(lH.C, { label: T.intl.string(R.default.HCQvpO), size: "xs", items: f }),
            },
            s,
        );
    if ("received" === s)
        return (0, i.jsxs)(
            "article",
            {
                className: g,
                children: [
                    (0, i.jsxs)("div", {
                        className: lY.$h,
                        children: [
                            (0, i.jsx)("span", {
                                className: lY.c9,
                                "aria-hidden": !0,
                                children: (0, i.jsx)(lV.CircleCheckIcon, {
                                    size: "xs",
                                    color: tm.A.colors.ICON_FEEDBACK_POSITIVE,
                                }),
                            }),
                            (0, i.jsx)(v.E, {
                                variant: "body-xs/semibold",
                                color: "text-feedback-positive",
                                tag: "span",
                                children: T.intl.string(R.default.sfp7Up),
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
                                T.intl.formatToPlainString(R.default["Z+FC3j"], {
                                    label: e,
                                    value: T.intl.string(R.default.CJq1rY),
                                }),
                            )
                            .join(" \xb7 "),
                    }),
                ],
            },
            s,
        );
    let p = null != r.note && "" !== r.note ? r.note : T.intl.string(R.default.MPGSHL),
        x = (0, i.jsx)(d.$, { variant: "primary", size: "sm", onClick: m, text: T.intl.string(R.default.EK8tKY) });
    return null != c
        ? (0, i.jsxs)("section", {
              className: o()(nb.nd, lY.fw),
              "aria-label": T.intl.string(R.default.O0QIqj),
              children: [
                  (0, i.jsxs)("div", {
                      className: nb.wx,
                      children: [
                          (0, i.jsx)(lK.KeyIcon, { size: "xs", color: tm.A.colors.TEXT_BRAND, "aria-hidden": !0 }),
                          (0, i.jsx)(v.E, {
                              tag: "span",
                              variant: "body-sm/semibold",
                              color: "text-brand",
                              className: nb.TK,
                              children: T.intl.string(R.default.O0QIqj),
                          }),
                          (0, i.jsx)(tQ.D, {
                              className: o()(nb.gb, nb.Q7),
                              onClick: c,
                              "aria-label": T.intl.string(R.default.Hl7rif),
                              children: (0, i.jsx)(eY.XSmallIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsxs)("div", {
                      className: lY.DQ,
                      children: [
                          (0, i.jsx)(lZ.A, { text: p, variant: "body-sm/normal", color: "text-default" }),
                          (0, i.jsx)(lH.C, { label: T.intl.string(R.default.HCQvpO), size: "xs", items: f }),
                      ],
                  }),
                  (0, i.jsxs)("div", {
                      className: nb.qr,
                      children: [
                          (0, i.jsx)(v.E, {
                              variant: "body-xs/normal",
                              color: "text-muted",
                              className: lY.xE,
                              children: T.intl.string(R.default["2OdXdn"]),
                          }),
                          (0, i.jsx)("div", { className: nb.zt, children: x }),
                      ],
                  }),
              ],
          })
        : (0, i.jsxs)("article", {
              className: lY.Lo,
              children: [
                  (0, i.jsx)(v.E, {
                      variant: "body-xs/semibold",
                      color: null != u ? "text-brand" : "text-muted",
                      tag: "span",
                      children: T.intl.string(null != u ? R.default.O0QIqj : R.default.HCQvpO),
                  }),
                  (0, i.jsx)(lZ.A, { text: p, variant: "body-sm/normal", color: "text-default" }),
                  (0, i.jsx)(lH.C, { label: T.intl.string(R.default.HCQvpO), size: "xs", items: f }),
                  (0, i.jsx)("div", { className: lY.sq, children: x }),
              ],
          });
}
var l0 = n(442331);
let l1 = new Set(),
    l2 = new Set();
function l3(e) {
    return (
        l2.add(e),
        () => {
            l2.delete(e);
        }
    );
}
function l4() {
    return a.useSyncExternalStore(l3, () => l1);
}
function l7(e) {
    let t = new Set(),
        n = new Set(),
        l = !1,
        r = !1;
    for (let i = e.length - 1; i >= 0; i--) {
        let a = e[i];
        if (null == a || "assistant" !== a.role || null == a.settingsRequest || !(0, tV.BL)(a)) continue;
        let s = a.settingsRequest.keys ?? [];
        for (let e of ((r || (0 === s.length ? l : s.some((e) => n.has(e)))) && t.add(a.id), s)) n.add(e);
        ((l = !0), (r = r || 0 === s.length));
    }
    return t;
}
function l5(e, t, n) {
    if (!n || null == t) return !1;
    let l = lQ(e, t);
    return l.length > 0 && !lX({ keys: l }, t);
}
var l9 = n(782973),
    l8 = n(290713),
    l6 = n(411236);
function re(e) {
    let { projectId: t, request: n, askId: l, onDismiss: r, notifyAgent: s = !0 } = e,
        {
            done: u,
            superseded: m,
            summary: f,
            markSaved: h,
        } = (function (e, t, n) {
            let l = l4(),
                [r, i] = a.useState(!1),
                s = null != n ? l.has(n) : r,
                u = a.useCallback(() => {
                    if (null != n) {
                        if (!l1.has(n)) for (let e of ((l1 = new Set([...l1, n])), l2)) e();
                    } else i(!0);
                }, [n]),
                o = (0, c.bG)([l0.A], () => l5(t, l0.A.getSettings(e), s), [e, t, s]);
            return {
                done: o,
                superseded: (0, c.bG)([lR.A], () => null != n && l7(lR.A.getMessages(e)).has(n), [e, n]),
                summary: (0, c.yK)(
                    [l0.A, nS.A],
                    () => {
                        var n;
                        let l = l0.A.getSettings(e);
                        return null == l
                            ? []
                            : ((n = (e) => nS.A.getChannel(e)?.name ?? null),
                              lQ(t, l).flatMap((e) => {
                                  let t = l.schema.find((t) => t.key === e);
                                  if (null == t) return [];
                                  let r = "secret" === t.type || l.values[e];
                                  return [
                                      {
                                          key: e,
                                          text: T.intl.formatToPlainString(R.default["Z+FC3j"], {
                                              label: t.label,
                                              value: (function (e, t, n) {
                                                  let l = Array.isArray(t) ? t.map(String) : [String(t)];
                                                  switch (e.type) {
                                                      case "secret":
                                                          return T.intl.string(R.default.CJq1rY);
                                                      case "checkbox":
                                                          return T.intl.string(
                                                              !0 === t ? R.default.nXtpn3 : R.default["0vfaMW"],
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
                                                                      : T.intl.string(R.default.Fw9G9A);
                                                              })
                                                              .join(", ");
                                                      case "game":
                                                          return 0 === l.length
                                                              ? T.intl.string(R.default.nEv677)
                                                              : T.intl.string(R.default.Fw9G9A);
                                                      case "role":
                                                      case "user":
                                                          return T.intl.string(R.default.Fw9G9A);
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
    if (m && !g)
        return (0, i.jsx)("article", {
            className: l6.Mk,
            children: (0, i.jsx)(v.E, {
                variant: "body-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: T.intl.string(R.default["+uXDk+"]),
            }),
        });
    if (g)
        return (0, i.jsxs)("article", {
            className: l6.Mk,
            children: [
                (0, i.jsxs)("div", {
                    className: l6.Ol,
                    children: [
                        (0, i.jsx)(lV.CircleCheckIcon, {
                            size: "xs",
                            color: tm.A.colors.ICON_FEEDBACK_POSITIVE,
                            "aria-hidden": !0,
                        }),
                        (0, i.jsx)(v.E, {
                            variant: "body-xs/semibold",
                            color: "text-feedback-positive",
                            tag: "span",
                            children: T.intl.string(R.default.AxBLLy),
                        }),
                    ],
                }),
                f.length > 0
                    ? (0, i.jsx)(v.E, {
                          variant: "body-sm/normal",
                          color: "text-default",
                          selectable: !0,
                          children: f.join(" \xb7 "),
                      })
                    : null,
            ],
        });
    let p = n.keys?.length === 1 && n.keys[0] === l9.B,
        x = null != n.note && "" !== n.note ? n.note : p ? null : T.intl.string(R.default.XuOf5s);
    return (0, i.jsx)(l8.A, {
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
                text: T.intl.string(R.default.A7dQd9),
            });
            return null == r
                ? (0, i.jsxs)("form", {
                      className: l6.Mk,
                      onSubmit: s,
                      children: [
                          (0, i.jsx)(v.E, {
                              variant: "body-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: T.intl.string(R.default["jZjP+I"]),
                          }),
                          null != x
                              ? (0, i.jsx)(lZ.A, { text: x, variant: "body-sm/normal", color: "text-default" })
                              : null,
                          t,
                          (0, i.jsx)("div", { className: l6.p0, children: u }),
                      ],
                  })
                : (0, i.jsxs)("form", {
                      className: o()(nb.nd, nb.jx),
                      "aria-label": T.intl.string(R.default["jZjP+I"]),
                      onSubmit: s,
                      children: [
                          (0, i.jsxs)("div", {
                              className: nb.wx,
                              children: [
                                  (0, i.jsx)(v.E, {
                                      tag: "span",
                                      variant: "body-sm/medium",
                                      color: "text-subtle",
                                      className: nb.TK,
                                      children: T.intl.string(R.default["jZjP+I"]),
                                  }),
                                  (0, i.jsx)(tQ.D, {
                                      className: o()(nb.gb, nb.Q7),
                                      onClick: r,
                                      "aria-label": T.intl.string(R.default["iq+Pte"]),
                                      children: (0, i.jsx)(eY.XSmallIcon, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                          (0, i.jsxs)("div", {
                              className: l6.DQ,
                              children: [
                                  null != x
                                      ? (0, i.jsx)(lZ.A, { text: x, variant: "body-sm/normal", color: "text-default" })
                                      : null,
                                  t,
                              ],
                          }),
                          (0, i.jsxs)("div", {
                              className: nb.qr,
                              children: [
                                  (0, i.jsx)(v.E, {
                                      variant: "body-xs/normal",
                                      color: "text-muted",
                                      className: l6.xE,
                                      children: T.intl.string(R.default["1w0jMk"]),
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: nb.zt,
                                      children: [
                                          (0, i.jsx)(d.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              onClick: r,
                                              text: T.intl.string(R.default["9J3OG8"]),
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
var rt = n(975571),
    rn = n(427123);
let rl = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
var rr = n(874421),
    ri = n(932111),
    ra = n(940874),
    rs = n(404373),
    ru = n(89222);
function ro(e) {
    return "" !== ru.A.getDraft(e).trim();
}
var rc = n(29080);
function rd(e) {
    var t;
    let n,
        l,
        { steps: r, content: i, hasProposal: a, hasLiveClarification: s = !1, hasAttachments: u } = e,
        o = (0, tH.B4)(r),
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
        m = o.filter((e) => e !== d),
        f = m.filter((e) => "message" === e.type).at(-1),
        h = !a && !s && "" !== i.trim();
    return {
        streamed: m,
        lastStreamedMessage: f,
        replyKey: d?.key,
        showsClosingMessage: h,
        closingContent: h ? i.trim() : "",
        attachmentsHost: (function (e) {
            let { hasAttachments: t, showsClosingMessage: n, endsOnStreamedMessage: l } = e;
            return t ? (n ? "closing" : l ? "streamed" : "standalone") : "none";
        })({ hasAttachments: u, showsClosingMessage: h, endsOnStreamedMessage: (0, tH.Lf)(r) }),
    };
}
var rm = n(62617),
    rf = n(182368);
let rh = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    rg = {
        snail: () => R.default.ABeVsS,
        goat: () => R.default.dhXay8,
        frog: () => R.default.SHeweG,
        bunny: () => R.default.FytFE1,
        cat: () => R.default["5c+sHs"],
        caterpillar: () => R.default["/FYcne"],
        butterfly: () => R.default["Ib/AxK"],
        dog: () => R.default.zDjBR1,
        spider: () => R.default["6sxyrN"],
        bee: () => R.default.cVtefg,
        bot: () => R.default.MjCw0v,
    },
    rp = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    u = a.useMemo(
                        () => (0, rm.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    className: (0, rm.Z)(),
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
                        () => (0, rm.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    className: (0, rm.Z)(),
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
                        () => (0, rm.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    className: (0, rm.Z)(),
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
                        () => (0, rm.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    className: (0, rm.Z)(),
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
                        () => (0, rm.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    className: (0, rm.Z)(),
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
                        () => (0, rm.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    className: (0, rm.Z)(),
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
                        () => (0, rm.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    className: (0, rm.Z)(),
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
                        () => (0, rm.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    className: (0, rm.Z)(),
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
                        () => (0, rm.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    className: (0, rm.Z)(),
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
                        () => (0, rm.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    className: (0, rm.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        bot: { Illocon: rf.u, tint: "var(--illo-purple-40)" },
    };
function rx(e) {
    return { ...rp[e], name: T.intl.string(rg[e]()) };
}
function rv(e) {
    return rh.includes(e) ? rx(e) : void 0;
}
function rj(e) {
    let t = new Map();
    for (let [n, l] of (function (e) {
        let t = 0,
            n = e[0] ?? "";
        for (let e = 0; e < n.length; e++) t = (31 * t + n.charCodeAt(e)) % rh.length;
        let l = new Map();
        return (
            e.forEach((e, n) => {
                l.set(e, rh[(t + n) % rh.length]);
            }),
            l
        );
    })(e))
        t.set(n, rx(l));
    return t;
}
var rb = n(615839);
function ry(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : T.intl.string(R.default.KcFvbo);
}
var rk = n(60160),
    rw = n(101147);
function rS(e) {
    let t = (0, tH.SY)(e.steps);
    return null != t ? (0, tH.WQ)(t) : ry(e.task);
}
function rA(e) {
    let t = rj(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? rv(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: ry(e.task),
                      todoId: e.task.todoId,
                      line: rS(e),
                  },
              ];
    });
}
function rC(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: a, connectsDown: s } = e,
        u = n.task,
        o = "running" === u.status,
        c = (0, tH.SY)(n.steps),
        d = o
            ? rS(n)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(ry(e));
                  switch (e.status) {
                      case "failed":
                          return T.intl.formatToPlainString(R.default.YrVgOf, { task: t });
                      case "cancelled":
                          return T.intl.formatToPlainString(R.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.resultText && "" !== e.resultText) return e.resultText;
                          if (null != e.durationMs)
                              return T.intl.formatToPlainString(R.default["++9woZ"], {
                                  task: t,
                                  duration: (0, rb.MB)(e.durationMs),
                              });
                          return T.intl.formatToPlainString(R.default.nmI9Uh, { task: t });
                      default:
                          return T.intl.formatToPlainString(R.default.nmI9Uh, { task: t });
                  }
              })(u),
        m = o ? c : void 0,
        f =
            u.detail.length > 0 ||
            n.steps.some((e) => {
                var t;
                return e !== m || (t = e).detail.length > 0 || t.screenshots.length > 0 || t.attachments.length > 0;
            })
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          n.steps.length > 0
                              ? (0, i.jsx)("ol", {
                                    className: nr.dO,
                                    children: n.steps.map((e) =>
                                        (0, i.jsx)(
                                            rw.A,
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
                                      className: nr.iq,
                                      children: (0, i.jsx)(rk.A, { text: e, variant: "body-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, i.jsx)(tY.A, {
        glyph: (0, i.jsx)(tJ.u, {
            asset: (0, i.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: a,
            body: ry(u),
            position: "left",
            children: (0, i.jsx)("span", {
                className: nr.nC,
                children: (0, i.jsx)(l, { size: 24, alt: "", ariaHidden: !0 }),
            }),
        }),
        line: d,
        live: o,
        settled: !o,
        tint: r,
        detail: f,
        connected: !0,
        connectsDown: s,
    });
}
var rN = n(998445),
    rI = n(643210),
    rE = n(648127),
    r_ = n(372795),
    rM = n(163897);
let rR = "conjure-browser-viewer";
function rT(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, c.yK)(
            [rI.A],
            () =>
                n.flatMap((e) => {
                    let n = rI.A.getTab(t, e);
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
        className: rM.kR,
        "aria-label": T.intl.string(R.default.Uvkr1G),
        children: l.map((e) =>
            (0, i.jsx)("li", { children: (0, i.jsx)(rP, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function rP(e) {
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
        c = (0, K.Ry)(rR),
        [d, m] = a.useState(!1),
        f = a.useCallback((e, t) => m(t), []),
        { ended: h } = l,
        g = (0, rE.i)(l.session);
    return (0, i.jsxs)(tQ.D, {
        innerRef: s,
        className: o()(rM.Nr, h && rM.Xj),
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
                    { modalKey: rR },
                )
            );
        },
        "aria-label": T.intl.formatToPlainString(R.default.G3a822, { title: g }),
        children: [
            (0, i.jsxs)("div", {
                className: rM.Gt,
                children: [
                    (0, i.jsx)(r_.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !u || c || h,
                        className: rM.Ji,
                        "aria-label": T.intl.formatToPlainString(R.default.rnwqXb, { name: g }),
                        onStateChange: f,
                    }),
                    d
                        ? null
                        : (0, i.jsx)("div", {
                              className: rM.qf,
                              children: (0, i.jsx)(rN.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    h
                        ? (0, i.jsx)("div", {
                              className: rM.HS,
                              children: (0, i.jsx)(v.E, {
                                  variant: "body-xs/medium",
                                  color: "text-strong",
                                  children: T.intl.string(R.default.ocRH08),
                              }),
                          })
                        : null,
                ],
            }),
            (0, i.jsxs)("span", {
                className: rM.pG,
                children: [
                    (0, i.jsx)("span", { className: o()(rM.W9, h && rM.oM) }),
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
var rL = n(268409);
let r$ = new WeakMap(),
    rq = new WeakMap();
function rD(e) {
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
            [lR.A],
            () => {
                if (0 === s.length) return s;
                let e = (function (e) {
                    let t = r$.get(e);
                    if (null != t) return t;
                    let n = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = rq.get(e);
                            if (null == t) {
                                let n = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) n.push(e);
                                ((t = n), rq.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            n.set(e, t.steps);
                    return (r$.set(e, n), n);
                })(lR.A.getMessages(t));
                return s.filter((t) => e.get(t) === n);
            },
            [s, t, n],
        );
    return 0 === u.length
        ? null
        : (0, i.jsx)("li", { className: rL.h, children: (0, i.jsx)(rT, { projectId: t, sessionIds: u }) });
}
var rF = n(469393);
function rO(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, H.lG)(t.authored_at);
    return (0, i.jsx)(t3, {
        title: T.intl.string(R.default["t+b0rz"]),
        children: (0, i.jsxs)("div", {
            className: rF.r,
            children: [
                (0, i.jsxs)("div", {
                    className: rF.z,
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
                          text: T.intl.string(R.default.H8Jfhu),
                          onClick: n,
                      })
                    : null,
            ],
        }),
    });
}
var rG = n(493490),
    rz = n(17742);
let rU = [];
function rB(e) {
    let t = (0, c.bG)([rG.A], () => (null != e ? rG.A.getCaptures(e) : rU)),
        n = (0, c.bG)([rG.A], () => (null != e ? rG.A.getSelectedCapture(e) : null)),
        [l, r] = a.useState(null),
        i = null != n ? `${n.id}:${n.image_etag}` : null;
    return (
        a.useEffect(() => {
            if (null == e || null == n || null == i) return;
            let t = !1;
            return (
                (async () => {
                    try {
                        let l = await (0, rz._F)(e, n);
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
var rK = n(714917),
    rH = n(463660),
    rV = n(970211);
function rW(e) {
    let { projectId: t, gameCaptures: n = !1 } = e,
        {
            src: l,
            blurred: r,
            handleError: s,
        } = (function (e, t) {
            let n = (0, c.bG)([rK.A], () => (null != e ? rK.A.getBackground(e) : null)),
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
                                r = await (0, rH.Mg)(e, l);
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
            let m = null != l ? r : null,
                f = null == l || (null != m && m === s) ? t : m,
                h = a.useCallback(() => {
                    f === m && u(m);
                }, [f, m]);
            return { src: null == e || null != n || o ? f : null, blurred: n?.blur !== !1, handleError: h };
        })(t, "/assets/7cec34541705c795.webp"),
        u = rB(n ? t : null);
    return null != u.selected
        ? null != u.src
            ? (0, i.jsx)("img", { className: rV.F1, src: u.src, alt: "", "aria-hidden": !0 })
            : null
        : null == l
          ? null
          : (0, i.jsx)("img", {
                className: o()(rV.LO, { [rV.Ty]: r }),
                src: l,
                alt: "",
                "aria-hidden": !0,
                onError: s,
            });
}
var rX = n(155718);
function rQ(e, t) {
    return e.supported_surfaces?.includes(t) === !0;
}
let rZ = ["command", "user_command", "message_command", "message"],
    rY = new Set([rX.kc.CHAT, rX.kc.USER, rX.kc.MESSAGE]);
function rJ(e) {
    return e.type ?? rX.kc.CHAT;
}
function r0(e) {
    return rY.has(rJ(e));
}
function r1(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function r2(e, t) {
    let n = rZ.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !r1(e)), ...n.filter(r1)].slice(0, 3);
    for (let r of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(r) || r1(r) || l.push(r);
    }
    return rZ.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
function r3(e, t, n) {
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
    let s = e.commands.filter(r0).map((e) =>
            (function (e, t) {
                let n = e.description?.trim() ?? "",
                    l = "" !== n ? n : t.reply;
                switch (rJ(e)) {
                    case rX.kc.USER:
                        return { kind: "user_command", user: e.name, bot: l };
                    case rX.kc.MESSAGE:
                        return { kind: "message_command", user: e.name, bot: l };
                    default:
                        return { kind: "command", user: `/${e.name}`, bot: l };
                }
            })(e, n),
        ),
        u = "messages" === t ? [] : s.filter(r1),
        o = i.length > 0 ? r2([...i, ...u], !0) : r2("both" === t ? [...s, a] : s, !1);
    return o.length > 0 ? o : [r];
}
var r4 = n(377941),
    r7 = n.n(r4);
function r5(e) {
    let t = e.split("_").join(" ").toLowerCase();
    return 0 === t.length ? t : t[0].toUpperCase() + t.slice(1);
}
function r9(e) {
    return e.type === rX.kc.PRIMARY_ENTRY_POINT
        ? "\u21EA /"
        : e.type === rX.kc.USER || e.type === rX.kc.MESSAGE
          ? ""
          : "/";
}
let r8 = {
        [ee.q7.APP_CHANNEL]: R.default["3/aHX6"],
        [ee.q7.VOICE_CHANNEL]: R.default["3/aHX6"],
        [ee.q7.ACTIVITY]: R.default["3/aHX6"],
        [ee.q7.OVERLAY]: R.default["rPpf5/"],
        [ee.q7.PROFILE_WIDGET]: null,
        [ee.q7.AUTOMOD]: null,
        [ee.q7.BOT]: null,
        [ee.q7.APPLICATION_COMMANDS]: null,
    },
    r6 = [ee.q7.ACTIVITY, ee.q7.APP_CHANNEL, ee.q7.VOICE_CHANNEL, ee.q7.OVERLAY];
function ie(e) {
    return r6.find((t) => rQ(e, t)) ?? null;
}
let it = 1920 / 1018;
function il(e, t) {
    return `${Number(((e / t) * 100).toFixed(3))}%`;
}
let ir = il(24, 1018),
    ii = il(24, 1920);
function ia(e) {
    return null != e.overlay_design_image
        ? e.overlay_design_image
        : e.design_image?.name === "overlay-design-v2.png"
          ? e.design_image
          : null;
}
var is = n(90947),
    iu = (((l = {}).IMAGE = "image"), l),
    io = (((r = {}).PRIVATE = "private"), (r.PUBLIC = "public"), r),
    ic = n(598748),
    id = n(773669);
let im = [],
    ih = {},
    ig = {};
function ip(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function ix(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: iu.IMAGE,
        visibility: io.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var iv = n(127258),
    ij = n(803306),
    ib = n(587895),
    iy = n(432005),
    ik = n(963852),
    iw = n(95701),
    iS = n(619019),
    iA = n(427262);
let iC = new iw.nA({ id: "1337", guild_id: "1337", type: ev.rbe.GUILD_TEXT, name: "preview" });
function iN(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = (0, c.bG)([nC.default], () => nC.default.getUser(e), [e]);
    return (
        a.useEffect(() => {
            r && i?.username !== t && (0, ij.nj)(new iS.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, i, e, t, l, n]),
        i
    );
}
let iI = /^@\S+/;
var iE = n(775602);
let i_ = [R.default["3eTjcV"], R.default.l3j5nS];
var iM = n(97808),
    iR = n(778712),
    iT = n(486020),
    iP = n(46054),
    iL = n(200700);
let i$ = {
        alert: { label: () => T.intl.string(R.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => T.intl.string(R.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => T.intl.string(R.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => T.intl.string(R.default.RGzFNK), blockedStyle: !1 },
    },
    iq = {
        blocked: { label: () => T.intl.string(R.default.YdnZ8q), tone: "red" },
        alert: { label: () => T.intl.string(R.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => T.intl.string(R.default.RGzFNK), tone: "green" },
    },
    iD = ["blocked", "alert", "allowed"],
    iF = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
function iO(e) {
    var t, n;
    let l,
        r = [
            "timeout" !== (t = e).outcome || null == t.timeout_seconds
                ? null
                : T.intl.formatToPlainString(T.t["3LYql6"], {
                      duration:
                          ((n = t.timeout_seconds),
                          null != (l = (0, iL.getFriendlyDurationString)(n))
                              ? l
                              : n % 604800 == 0
                                ? T.intl.formatToPlainString(T.t.EmoBD2, { weeks: n / 604800 })
                                : n % 86400 == 0
                                  ? T.intl.formatToPlainString(T.t["k2UNz+"], { days: n / 86400 })
                                  : n % 3600 == 0
                                    ? T.intl.formatToPlainString(T.t.xCjYxK, { hours: n / 3600 })
                                    : n % 60 == 0
                                      ? T.intl.formatToPlainString(T.t.opVZ9q, { mins: n / 60 })
                                      : T.intl.formatToPlainString(T.t["4zv/jq"], { secs: n })),
                  }),
            e.reason,
        ]
            .filter((e) => null != e && "" !== e)
            .join(" ");
    return "" === r ? null : r;
}
var iG = n(984097),
    iz = n(13673);
let iU = { blurple: "text-brand", red: "text-feedback-critical", green: "text-feedback-positive" };
function iB(e) {
    let { example: t } = e,
        n = iO(t);
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
let iK = ["glazedgamer", "sprinkles", "donutking"];
function iH(e) {
    var t;
    let { example: n, username: l, showReason: r } = e,
        { label: a, blockedStyle: s } = i$[n.outcome];
    return (0, i.jsxs)("li", {
        className: o()(iG.nM, { [o()(iG.HV, iz.DX)]: s }),
        children: [
            (0, i.jsx)(t0.A, { children: `${a()}: ` }),
            (0, i.jsx)("span", {
                className: iG.my,
                children: (0, i.jsx)(iM.eu, {
                    src: (0, iT.AE)(void 0, void 0),
                    size: iR._3.SIZE_24,
                    "aria-label": T.intl.string(R.default["1yI0xV"]),
                }),
            }),
            (0, i.jsxs)("div", {
                className: iG.fw,
                children: [
                    (0, i.jsx)(v.E, { variant: "body-sm/semibold", color: "text-strong", children: l }),
                    (0, i.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), iP.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    r ? (0, i.jsx)(iB, { example: n }) : null,
                ],
            }),
        ],
    });
}
function iV(e) {
    let { group: t, firstIndex: n } = e,
        l = a.useId(),
        r = iq[t.section],
        s = new Set(t.examples.map(iO)),
        u = 1 === s.size ? t.examples.map(iO)[0] : null;
    return (0, i.jsxs)("div", {
        className: iG.UO,
        children: [
            (0, i.jsxs)("div", {
                className: iG.RZ,
                children: [
                    (0, i.jsx)(v.E, {
                        id: l,
                        variant: "body-xs/semibold",
                        color: iU[r.tone],
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
                                      className: iG.IQ,
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
                className: iG.m7,
                "aria-labelledby": l,
                children: t.examples.map((e, t) =>
                    (0, i.jsx)(iH, { example: e, username: iK[(n + t) % iK.length], showReason: s.size > 1 }, t),
                ),
            }),
        ],
    });
}
function iW(e) {
    var t;
    let { automod: n } = e,
        l =
            ((t = n.examples),
            iD
                .map((e) => ({ section: e, examples: t.filter((t) => iF[t.outcome] === e) }))
                .filter((e) => e.examples.length > 0)),
        r = n.rule_name.trim();
    return (0, i.jsxs)("div", {
        className: iG.Nr,
        children: [
            "" !== r
                ? (0, i.jsx)("div", {
                      className: iG.hk,
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
                    iV,
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
var iX = n(276293),
    iQ = n(460905),
    iZ = n(110384),
    iY = n(365199),
    iJ = n(633018),
    i0 = n(763754),
    i1 = n(267508),
    i2 = n(194085),
    i3 = n(20851),
    i4 = n(692508),
    i7 = n(798819);
function i5(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, i.jsxs)("div", {
        className: o()(i7.item, i7.labelContainer, i7.colorDefault, {
            [i7.focused]: !0 === t.highlighted,
            [i7.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, i.jsx)("div", {
                      className: i7.iconContainerLeft,
                      children: (0, i.jsx)(n, { color: "currentColor", className: i7.icon }),
                  })
                : null,
            (0, i.jsx)("div", { className: o()(i7.label, i4.Gy), children: t.label }),
            null != l
                ? (0, i.jsx)("div", {
                      className: i7.iconContainer,
                      children: (0, i.jsx)(l, { color: "currentColor", className: i7.icon }),
                  })
                : null,
        ],
    });
}
function i9(e) {
    let { target: t, commandName: n, appIconSrc: l } = e,
        r = a.useMemo(
            () =>
                null != l
                    ? (e) => {
                          let { className: t } = e;
                          return (0, i.jsx)("img", { src: l, alt: "", className: o()(t, i4.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: T.intl.string(T.t["5IEsGx"]), icon: iZ.ArrowAngleLeftUpIcon, muted: !0 }
                : { label: T.intl.string(T.t.LYju5J), muted: !0 };
    return (0, i.jsx)("div", {
        className: o()(i7.menu, i4.MK),
        "aria-hidden": !0,
        children: (0, i.jsxs)("div", {
            className: i7.scroller,
            children: [
                (0, i.jsx)(i5, { item: s }),
                (0, i.jsx)("div", { className: i7.separator }),
                (0, i.jsx)(i5, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
function i8() {}
function i6(e) {
    let t,
        n,
        l,
        r,
        s,
        u,
        d,
        m,
        f,
        h,
        g,
        { projectId: p, exchanges: x } = e,
        {
            items: j,
            botIcon: b,
            appIconSrc: y,
        } = ((t = (0, c.bG)([nC.default], () => nC.default.getCurrentUser())),
        (n = (0, c.bG)([eR.Ay], () => eR.Ay.getProject(p))),
        (l = n?.application_id),
        (r = (0, c.bG)([ib.A], () => ib.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (s = n?.name ?? T.intl.string(R.default.JEYq8M)),
        (u = (0, c.bG)([nC.default], () => (null != l ? nC.default.getUser(l) : void 0), [l])),
        (m = iN("31337", s, { bot: !0, enabled: !(d = u?.bot === !0) })),
        (f = d ? u : m),
        (h = iN("31338", T.intl.string(R.default["9iAOsw"]), { discriminator: "0003" })),
        (g = iN("31339", (0, iA.mG)(t) ?? "", { enabled: null != t })),
        {
            items: a.useMemo(
                () =>
                    null == t || null == g || null == f || null == h
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
                                      a = (0, iy.rh)({
                                          ...(0, ik.Ay)({
                                              channelId: iC.id,
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
                                                        type: iv.G.APPLICATION_COMMAND,
                                                        user: (0, ik.Vi)(s),
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
                                          (d(((l = t.user), l.trim().replace(iI, `<@${a.id}>`)), s),
                                              d(((r = t.bot), r.includes("<@") ? r : `<@${u.id}> ${r}`), a));
                                          break;
                                      case "event":
                                          d(((i = t.bot), i.split(`@${o.username}`).join(`<@${o.id}>`)), a);
                                  }
                              return c;
                          })(
                              x,
                              { bot: f, currentUser: t, viewer: g, member: h },
                              {
                                  targetMessage: T.intl.string(R.default["y+QYes"]),
                                  memberMessage: T.intl.string(R.default.BUTRDc),
                              },
                          ),
                [x, f, t, g, h],
            ),
            botIcon: r,
            appIconSrc: r ?? f?.getAvatarURL(void 0, 80),
        });
    if (0 === j.length) return null;
    let k = iC.name;
    return (0, i.jsxs)("div", {
        className: i4.Ix,
        children: [
            (0, i.jsxs)("div", {
                className: i4.ZO,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(iX.TextIcon, { size: "sm", color: "currentColor" }),
                    (0, i.jsx)(v.E, { variant: "body-sm/semibold", color: "text-strong", tag: "span", children: k }),
                ],
            }),
            (0, i.jsx)("ol", {
                className: o()(i4.TE, "group-spacing-16"),
                children: j.map((e) => {
                    let { key: t, record: n, isCommandReply: l, menu: r } = e;
                    return (0, i.jsxs)(
                        "li",
                        {
                            className: null != r ? i4.Rz : void 0,
                            children: [
                                (0, i.jsx)(i3.A, {
                                    message: n,
                                    channel: iC,
                                    author: (0, i0.FT)(n.author, iC),
                                    isGroupStart: !0,
                                    avatarOverride: n.author.bot ? (b ?? void 0) : void 0,
                                    childrenExecutedCommand: l ? (0, i.jsx)(i1.A, { message: n, channel: iC }) : void 0,
                                    usernameClassName: r?.target === "user" ? i4.Ct : void 0,
                                    disableInteraction: !0,
                                }),
                                r?.target === "message"
                                    ? (0, i.jsx)("div", {
                                          className: i4.S3,
                                          inert: !0,
                                          "aria-hidden": !0,
                                          children: (0, i.jsxs)(i2.Ay, {
                                              children: [
                                                  (0, i.jsx)(i2.qv, {
                                                      label: T.intl.string(T.t.lfIHs4),
                                                      icon: iQ.ReactionIcon,
                                                      onClick: i8,
                                                  }),
                                                  (0, i.jsx)(i2.qv, {
                                                      label: T.intl.string(T.t["5IEsGx"]),
                                                      icon: iZ.ArrowAngleLeftUpIcon,
                                                      onClick: i8,
                                                  }),
                                                  (0, i.jsx)(i2.qv, {
                                                      label: T.intl.string(T.t["UKOtz+"]),
                                                      icon: iY.MoreHorizontalIcon,
                                                      selected: !0,
                                                      onClick: i8,
                                                  }),
                                              ],
                                          }),
                                      })
                                    : null,
                                null != r
                                    ? (0, i.jsx)("div", {
                                          className: "user" === r.target ? i4.ET : i4.je,
                                          inert: !0,
                                          children: (0, i.jsx)(i9, {
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
                className: i4.DA,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(iJ.SlashBoxIcon, { size: "sm", color: "currentColor" }),
                    (0, i.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        tag: "span",
                        lineClamp: 1,
                        children: T.intl.formatToPlainString(T.t["8lzR/R"], { channel: `#${k}` }),
                    }),
                ],
            }),
        ],
    });
}
n(381941);
var ae = n(332173);
function at(e) {
    let { name: t } = e;
    return (0, i.jsxs)(ae.A, { children: ["/", t] });
}
function an(e) {
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
                        let t = [...e].sort((e, t) => t.length - e.length).map(r7());
                        return RegExp(`(^|[\\s("'\u{201C}\u{2018}])/(${t.join("|")})(?![\\w-])`, "gu");
                    })(n),
                [n],
            ),
        );
    return null == l ? t : l.map((e) => ("command" === e.kind ? (0, i.jsx)(at, { name: e.name }, e.start) : e.text));
}
n(827669);
var al = n(687966),
    ar = n(757789),
    ai = n(26137),
    aa = n(430392),
    as = n(231483),
    au = n(323384);
let ao = {
    frame: R.default.Z2bt4u,
    overlay_widget: R.default["0mGHfU"],
    user_widget: R.default.Jipr29,
    bot: R.default.EbvC13,
    commands: R.default.EbvC13,
    automod: R.default.tiMvei,
};
var ac = n(573634);
let ad = {
    frame: al.GameControllerIcon,
    overlay_widget: ar.WindowTopIcon,
    user_widget: ai.UserCircleIcon,
    bot: aa.RobotIcon,
    commands: aa.RobotIcon,
    automod: as.ShieldIcon,
};
function am(e) {
    let { caption: t, children: n, className: l } = e;
    return (0, i.jsxs)("div", {
        className: o()(ac.e7, l),
        children: [(0, i.jsx)(v.E, { variant: "body-sm/normal", color: "text-muted", children: t }), n],
    });
}
function af(e) {
    let { labels: t } = e;
    return (0, i.jsx)("ul", {
        className: ac.Ip,
        children: t.map((e) =>
            (0, i.jsx)(
                "li",
                {
                    className: ac.jw,
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
function ah(e) {
    let { name: t, description: n } = e;
    return (0, i.jsxs)("li", {
        className: ac.lj,
        children: [
            (0, i.jsx)("span", {
                className: o()(ac.Vo, ac.G),
                children: (0, i.jsx)(au.AppsIcon, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
            }),
            (0, i.jsxs)("div", {
                className: ac.aV,
                children: [
                    (0, i.jsx)(v.E, { variant: "body-md/normal", color: "text-default", lineClamp: 1, children: t }),
                    (0, i.jsx)(v.E, { variant: "body-sm/normal", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
}
function ag(e) {
    let { commands: t } = e;
    return (0, i.jsx)("ul", {
        className: ac.wZ,
        children: t.map((e, t) => {
            let n = r9(e),
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
                                ? (0, i.jsx)(at, { name: e.name })
                                : (0, i.jsx)(ae.A, { children: `${n}${e.name}` }),
                            "" !== l ? ` ${l}` : null,
                        ],
                    }),
                },
                t,
            );
        }),
    });
}
function ap(e) {
    let { bullets: t, commandNames: n } = e;
    return (0, i.jsx)("ul", {
        className: ac.p_,
        children: t.map((e, t) =>
            (0, i.jsx)(
                "li",
                {
                    className: ac.Aw,
                    children: (0, i.jsx)(v.E, {
                        variant: "body-md/normal",
                        color: "text-default",
                        tag: "span",
                        selectable: !0,
                        children: (0, i.jsx)(an, { text: e, commandNames: n }),
                    }),
                },
                t,
            ),
        ),
    });
}
function ax(e) {
    let { experience: t, bullets: n, preview: l, blocks: r, commandNames: a } = e,
        s = "frame" === t.kind && !0 !== t.game,
        u = s ? au.AppsIcon : ad[t.kind],
        o = T.intl.string(s ? R.default.BM4Ymz : ao[t.kind]);
    return (0, i.jsxs)("section", {
        className: ac.s9,
        "aria-label": o,
        children: [
            (0, i.jsxs)("div", {
                className: ac.JQ,
                children: [
                    (0, i.jsx)("span", {
                        className: ac.Vo,
                        children: (0, i.jsx)(u, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    (0, i.jsx)(v.E, { variant: "body-md/medium", color: "text-strong", tag: "span", children: o }),
                ],
            }),
            null != l ? (0, i.jsx)("div", { className: ac.VH, children: l }) : null,
            "automod" === t.kind && 1 === n.length
                ? (0, i.jsx)(v.E, {
                      variant: "body-md/normal",
                      color: "text-default",
                      selectable: !0,
                      children: (0, i.jsx)(an, { text: n[0], commandNames: a }),
                  })
                : n.length > 0
                  ? (0, i.jsx)(ap, { bullets: n, commandNames: a })
                  : null,
            r.length > 0 ? (0, i.jsx)("div", { className: ac.PG, children: r }) : null,
        ],
    });
}
function av(e) {
    var t;
    let n,
        l,
        r,
        { appName: s, intro: u, proposal: o, renderPreview: c, commandNames: d } = e,
        m =
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
                                let n = t.map(r7()).join("|");
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
        f =
            ((r =
                m.find((e) => {
                    let { experience: t } = e;
                    return "bot" === t.kind || "commands" === t.kind;
                }) ?? m[0]),
            r?.experience.id);
    return (0, i.jsxs)("div", {
        className: ac.aN,
        children: [
            (0, i.jsxs)("div", {
                className: ac.Lv,
                children: [(0, i.jsx)(x.D, { variant: "heading-lg/semibold", color: "text-strong", children: s }), u],
            }),
            m.map((e) => {
                let { experience: t, bullets: n } = e;
                return (0, i.jsxs)(
                    a.Fragment,
                    {
                        children: [
                            (0, i.jsx)("div", { className: ac.yF, role: "separator" }),
                            (0, i.jsx)(ax, {
                                experience: t,
                                bullets: n,
                                preview: c(t),
                                blocks: (function (e, t, n) {
                                    let l = n
                                        ? [
                                              {
                                                  key: "permissions",
                                                  caption: R.default["2UbW6r"],
                                                  names: e.bot_permissions,
                                              },
                                              {
                                                  key: "intents",
                                                  caption: R.default["7TKfpj"],
                                                  names: e.privileged_intents,
                                              },
                                          ]
                                              .flatMap((e) => {
                                                  let { key: t, caption: n, names: l } = e;
                                                  return null != l && l.length > 0
                                                      ? [{ key: t, caption: T.intl.string(n), labels: l.map(r5) }]
                                                      : [];
                                              })
                                              .map((e) => {
                                                  let { key: t, caption: n, labels: l } = e;
                                                  return (0, i.jsx)(
                                                      am,
                                                      { caption: n, children: (0, i.jsx)(af, { labels: l }) },
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
                                                        let n = T.intl.string(R.default["6/3tGY"]),
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
                                                                am,
                                                                {
                                                                    className: ac.Iw,
                                                                    caption: T.intl.formatToPlainString(
                                                                        R.default.w8F5sy,
                                                                        { count: n.channels.length },
                                                                    ),
                                                                    children: (0, i.jsx)("ul", {
                                                                        className: ac.wZ,
                                                                        "data-conjure-plan-channels": "",
                                                                        children: n.channels.map((e) => {
                                                                            let { name: t, description: n } = e;
                                                                            return (0, i.jsx)(
                                                                                ah,
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
                                                            ? [T.intl.string(R.default["4oGg2h"])]
                                                            : []),
                                                        ...(n.launchableAnywhere
                                                            ? [T.intl.string(R.default.BTGCfR)]
                                                            : []),
                                                    ];
                                                    return (
                                                        r.length > 0 &&
                                                            l.push(
                                                                (0, i.jsx)(
                                                                    am,
                                                                    {
                                                                        caption: T.intl.string(R.default.MY6UGJ),
                                                                        children: (0, i.jsx)(af, { labels: r }),
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
                                                              am,
                                                              {
                                                                  caption: T.intl.string(T.t["0hKkS+"]),
                                                                  children: (0, i.jsx)(ag, { commands: e.commands }),
                                                              },
                                                              "commands",
                                                          ),
                                                      ]),
                                                ...l,
                                            ];
                                        default:
                                            return l;
                                    }
                                })(o, t, t.id === f),
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
var aj = n(633075),
    ab = n(591410),
    ay = n(27399);
function ak(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, c.bG)([nC.default], () => nC.default.getCurrentUser()),
        r = a.useMemo(() => new aj.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, i.jsx)("div", {
              className: ay.H,
              children: (0, i.jsx)(ab.A, {
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
var aw = n(443863);
function aS(e) {
    let t,
        { projectId: n, src: l, alt: r, size: a, onError: s } = e,
        u =
            ((t = Math.min(1, 1872 / a.width, 970 / a.height)),
            { width: il(a.width * t, 1920), height: il(a.height * t, 1018) });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(rW, { projectId: n }),
            (0, i.jsx)("div", {
                className: aw.nk,
                style: {
                    "--custom-conjure-plan-overlay-widget-top": ir,
                    "--custom-conjure-plan-overlay-widget-end": ii,
                    "--custom-conjure-plan-overlay-widget-width": u.width,
                    "--custom-conjure-plan-overlay-widget-height": u.height,
                },
                children: (0, i.jsx)("img", { src: l, alt: r, className: aw.M7, onError: s }),
            }),
        ],
    });
}
function aA(e, t, n) {
    Promise.all(
        t.map((t) => {
            let { id: n } = t;
            return (0, e3.PK)(e, n);
        }),
    ).then(
        (e) => {
            (0, lh.R)({
                items: e.map((e, n) => ({ type: "IMAGE", url: e, alt: t[n].alt })),
                startingIndex: n,
                shouldHideMediaOptions: !0,
                location: "ConjureChat",
            });
        },
        () => {},
    );
}
function aC(e) {
    let { projectId: t, design: n, alt: l } = e,
        { id: r } = n,
        { src: a, gone: s, handleError: u } = (0, lg._)(t, r);
    return s
        ? null
        : (0, i.jsx)(tQ.D, {
              className: aw.xX,
              onClick: () => aA(t, [{ id: r, alt: l }], 0),
              "aria-label": T.intl.string(R.default.TvAPIm),
              children: null == a ? null : (0, i.jsx)("img", { src: a, alt: l, className: aw.sN, onError: u }),
          });
}
function aN(e) {
    let { projectId: t, design: n, size: l } = e,
        { id: r } = n,
        { src: s, gone: u, handleError: d } = (0, lg._)(t, r),
        [m, f] = a.useState(!1),
        [h, g] = a.useState(!1),
        {
            slide: p,
            labels: x,
            pick: j,
        } = (function (e) {
            let { ready: t, paused: n = !1 } = e,
                l = (0, c.bG)([iE.Ay], () => iE.Ay.useReducedMotion),
                [r, i] = a.useState(0),
                [s, u] = a.useState(!1),
                o = t && !l && !n && !s,
                d = l && !s ? 0 : r;
            a.useEffect(() => {
                if (!o) return;
                let e = setInterval(() => i((e) => (e + 1) % i_.length), 4e3);
                return () => clearInterval(e);
            }, [o]);
            let m = a.useCallback((e) => {
                    (u(!0), i(e));
                }, []),
                f = a.useCallback(() => m(d), [m, d]);
            return { slide: d, labels: i_.map((e) => T.intl.string(e)), pick: m, hold: f };
        })({ ready: null != s, paused: m || h });
    if (u) return null;
    let b = T.intl.string(R.default.mjryK4),
        y = T.intl.string(R.default["rPpf5/"]);
    return (0, i.jsxs)("div", {
        className: aw.RM,
        onMouseEnter: () => f(!0),
        onMouseLeave: () => f(!1),
        onFocus: () => g(!0),
        onBlur: (e) => {
            e.currentTarget.contains(e.relatedTarget) || g(!1);
        },
        children: [
            (0, i.jsx)(tQ.D, {
                className: o()(aw.xX, aw.nj, { [aw.qQ]: 0 === p }),
                style: { "--custom-conjure-plan-overlay-scene-aspect": String(it) },
                onClick: () => aA(t, [{ id: r, alt: b }], 0),
                "aria-label": T.intl.string(R.default.TvAPIm),
                children:
                    null == s
                        ? null
                        : 0 === p
                          ? (0, i.jsx)("img", { src: s, alt: b, className: aw.Ac, onError: d })
                          : (0, i.jsx)(aS, { projectId: t, src: s, alt: y, size: l, onError: d }),
            }),
            (0, i.jsx)("div", {
                className: aw._4,
                role: "group",
                "aria-label": T.intl.string(R.default.EH36X6),
                children: x.map((e, t) =>
                    (0, i.jsx)(
                        tQ.D,
                        {
                            className: o()(aw.c, { [aw.Cw]: p === t }),
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
function aI(e) {
    let { projectId: t, id: n, alt: l, onOpen: r } = e,
        { src: a, gone: s, handleError: u } = (0, lg._)(t, n);
    return s
        ? null
        : (0, i.jsx)("li", {
              children: (0, i.jsx)(tQ.D, {
                  className: aw.ir,
                  onClick: r,
                  "aria-label": l,
                  children: null == a ? null : (0, i.jsx)("img", { src: a, alt: "", className: aw.rA, onError: u }),
              }),
          });
}
function aE(e) {
    let { projectId: t, proposal: n } = e,
        l = (n.reference_images ?? []).map((e, t) => {
            let { id: n } = e;
            return { id: n, alt: T.intl.formatToPlainString(R.default.xFgQ8L, { number: t + 1 }) };
        });
    return 0 === l.length
        ? null
        : (0, i.jsx)("section", {
              className: aw.Op,
              children: (0, i.jsxs)("div", {
                  className: aw.uW,
                  children: [
                      (0, i.jsx)(v.E, {
                          variant: "body-xs/medium",
                          color: "text-muted",
                          tag: "span",
                          children: T.intl.string(R.default.ubBJcy),
                      }),
                      (0, i.jsx)("ul", {
                          className: aw.Ft,
                          children: l.map((e, n) => {
                              let { id: r, alt: a } = e;
                              return (0, i.jsx)(aI, { projectId: t, id: r, alt: a, onOpen: () => aA(t, l, n) }, r);
                          }),
                      }),
                  ],
              }),
          });
}
function a_(e) {
    var t;
    let n,
        l,
        r,
        s,
        u,
        o,
        m,
        f,
        h,
        g,
        { projectId: p, proposal: x, version: j, onApprove: b } = e,
        { botExchanges: y } =
            ((n = rQ(x, ee.q7.APPLICATION_COMMANDS)),
            (l =
                rQ(x, ee.q7.BOT) || n
                    ? null != x.bot
                        ? x.bot.interaction
                        : n && x.commands.some(r0)
                          ? "commands"
                          : null
                    : null),
            (r = a.useMemo(
                () =>
                    null == l
                        ? []
                        : r3(x, l, {
                              message: T.intl.string(R.default.J7qggf),
                              reply: T.intl.string(R.default.nqYtiy),
                              event: T.intl.string(R.default["05lU9W"]),
                          }),
                [x, l],
            )),
            { botInteraction: l, botExchanges: r }),
        k = (function (e, t) {
            let { widget_config: n, widget_preview: l = ig } = t,
                r = (0, c.bG)([id.default], () => id.default.locale),
                i = (0, c.bG)([eR.Ay], () => {
                    let t = eR.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [n, l] = a.useState(ih);
                    return (
                        a.useEffect(() => {
                            let n = Object.entries(t ?? {});
                            if (0 === n.length) return;
                            let r = !1;
                            return (
                                Promise.all(
                                    n.map((t) => {
                                        let [n, l] = t;
                                        return (0, e3.PK)(e, l.id).then(
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
                                                          ...ip(n),
                                                          ...(null != n.fallback ? { fallback: ip(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let i = is.uW.safeParse(r);
                                  if (!i.success) return null;
                                  let a = i.data;
                                  return null == a[ic.m.WIDGET_TOP] || null == a[ic.m.WIDGET_BOTTOM]
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
                                                                    type: is.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof i
                                                                ? (r[e] = { type: is.oG.NUMBER, value: i })
                                                                : (r[e] = { type: is.oG.STRING, value: i });
                                                    return r;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(ix),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: im,
                                            },
                                        };
                              })(n, l, s, r),
                    [n, l, s, r],
                );
            return a.useMemo(() => (null == i || null == u ? null : { applicationId: i, rendererProps: u }), [i, u]);
        })(p, x),
        w = j?.superseded === !0,
        S = x.what_changed?.trim() ?? "",
        A =
            ((t = x.commands),
            a.useMemo(
                () =>
                    t
                        .filter((e) => "/" === r9(e))
                        .map((e) => {
                            let { name: t } = e;
                            return t;
                        }),
                [t],
            )),
        C =
            ((u =
                null == (s = ie(x))
                    ? null
                    : (x.experiences?.find((e) => {
                          let { surfaces: t } = e;
                          return t.includes(s);
                      })?.id ?? null)),
            (m = null != (o = x.design_image) && o.id !== ia(x)?.id ? o : null),
            (f = ia(x)),
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
                ui: null != m && null != h ? { experienceId: h, design: m } : null,
                overlay:
                    null != f && null != g ? { experienceId: g, design: f, size: en(x.overlay_widget ?? null) } : null,
            }),
        N = a.useMemo(
            () =>
                x.commands.some(r0)
                    ? r3({ ...x, bot: void 0 }, "commands", {
                          message: T.intl.string(R.default.J7qggf),
                          reply: T.intl.string(R.default.nqYtiy),
                          event: T.intl.string(R.default["05lU9W"]),
                      })
                    : [],
            [x],
        ),
        I = (0, c.bG)([eR.Ay], () => eR.Ay.getProject(p)?.name, [p]),
        E =
            w && null != j
                ? T.intl.formatToPlainString(R.default.YZ3qJs, { version: j.version })
                : T.intl.string(R.default["3b6e7o"]),
        _ = w ? (0, i.jsx)(t7, { children: T.intl.string(R.default.hF2c41) }) : null;
    return (0, i.jsxs)(t5, {
        title: E,
        meta: _,
        superseded: w,
        showLabel: T.intl.string(R.default.yD8EJS),
        hideLabel: T.intl.string(R.default.nSPGNb),
        bodyClassName: aw.rf,
        "data-conjure-plan-card": !0,
        children: [
            (0, i.jsx)("div", {
                className: aw.Qs,
                children: (0, i.jsx)(av, {
                    appName: I ?? x.experiences?.[0]?.name ?? "",
                    intro: (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(v.E, {
                                variant: "body-md/normal",
                                color: "text-default",
                                selectable: !0,
                                children: (0, i.jsx)(an, { text: x.summary, commandNames: A }),
                            }),
                            (0, i.jsx)(aE, { projectId: p, proposal: x }),
                            "" !== S
                                ? (0, i.jsxs)("section", {
                                      className: aw.uW,
                                      children: [
                                          (0, i.jsx)(v.E, {
                                              variant: "body-xs/medium",
                                              color: "text-muted",
                                              tag: "span",
                                              children: T.intl.string(R.default.iNS4dl),
                                          }),
                                          (0, i.jsx)(v.E, {
                                              variant: "body-md/normal",
                                              color: "text-default",
                                              selectable: !0,
                                              children: (0, i.jsx)(an, { text: S, commandNames: A }),
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
                                        e.id === C.ui?.experienceId
                                            ? (0, i.jsx)(aC, {
                                                  projectId: p,
                                                  design: C.ui.design,
                                                  alt: T.intl.string(null == (t = ie(x)) ? R.default["3/aHX6"] : r8[t]),
                                              })
                                            : null,
                                    l =
                                        e.id === C.overlay?.experienceId
                                            ? (0, i.jsx)(aN, {
                                                  projectId: p,
                                                  design: C.overlay.design,
                                                  size: C.overlay.size,
                                              })
                                            : null;
                                return null == n && null == l ? null : (0, i.jsxs)(i.Fragment, { children: [n, l] });
                            }
                            case "user_widget":
                                return null != k ? (0, i.jsx)(ak, { ...k }) : null;
                            case "automod":
                                return null != x.automod && x.automod.examples.length > 0
                                    ? (0, i.jsx)(iW, { automod: x.automod })
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
                                        (r = l.some((e) => "command" === e.kind || r1(e))),
                                        0 === n.length || r ? l.slice(0, 3) : [...l.slice(0, 2), n[0]]
                                    );
                                })(e, y, N);
                                return t.length > 0 ? (0, i.jsx)(i6, { projectId: p, exchanges: t }) : null;
                            }
                        }
                    },
                    commandNames: A,
                }),
            }),
            null == b || w
                ? null
                : (0, i.jsxs)("div", {
                      className: aw.qr,
                      children: [
                          (0, i.jsx)(d.$, {
                              variant: "primary",
                              size: "sm",
                              text: T.intl.string(R.default["6S+wRM"]),
                              onClick: b,
                          }),
                          (0, i.jsx)(v.E, {
                              variant: "body-sm/normal",
                              color: "text-subtle",
                              tag: "span",
                              children: T.intl.string(R.default.IZoqbR),
                          }),
                      ],
                  }),
        ],
    });
}
var aM = n(331322),
    aR = n(289565);
function aT(e) {
    let { onDismiss: t, children: n } = e;
    return null == t
        ? (0, i.jsx)("div", { className: aR.m, children: n })
        : (0, i.jsxs)("div", {
              className: aR.Z,
              children: [
                  n,
                  (0, i.jsx)(e4.m, {
                      text: T.intl.string(T.t.WAI6xu),
                      asContainer: !0,
                      children: (0, i.jsx)(ti.K, {
                          "aria-label": T.intl.string(T.t.WAI6xu),
                          icon: eY.XSmallIcon,
                          variant: "icon-only",
                          size: "sm",
                          onClick: t,
                      }),
                  }),
              ],
          });
}
function aP(e, t) {
    return null != t && ("new_ui" === e.reason ? !0 === t.newUiUnpublished : "not_live" === t.publishState);
}
function aL(e, t) {
    return null != e && aP(t, e.status);
}
let a$ = new WeakMap();
var aq = n(175841),
    aD = n(27232),
    aF = n(505930),
    aO = n(506774),
    aG = n(385081);
let az = "conjurePublishRatings",
    aU = "conjurePublishRatingViews",
    aB = [1, 2, 3, 4, 5],
    aK = { 1: R.default.GhbsGA, 2: R.default.cm0nwU, 3: R.default.kGvlh2, 4: R.default.dVBSUg, 5: R.default.DKlgF7 };
function aH(e) {
    return T.intl.string(aK[e]);
}
let aV = new Set(),
    aW = 0;
function aX() {
    return aO.w.get(az) ?? {};
}
function aQ(e, t) {
    return aX()[e]?.[t] ?? null;
}
function aZ(e) {
    return (aV.add(e), () => aV.delete(e));
}
function aY(e) {
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
var aJ = n(189213);
function a0(e) {
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
                    "" !== (n = t.trim().slice(0, 256)) && (0, aG.Fz)(e, n);
                },
            };
        })(t),
        o = T.intl.string(R.default.IqkF07);
    return (0, i.jsx)(aJ.a, {
        ...n,
        title: o,
        actions: [
            {
                variant: "primary",
                text: T.intl.string(R.default["sr+mUC"]),
                disabled: !s,
                onClick: () => {
                    (u(), n.onClose());
                },
            },
        ],
        children: (0, i.jsx)(nj.f, {
            label: o,
            hideLabel: !0,
            placeholder: T.intl.string(R.default.HMGKAV),
            value: l,
            onChange: r,
            rows: 4,
            maxLength: 256,
            showRemainingCharacterCount: !0,
        }),
    });
}
var a1 = n(54100);
function a2(e) {
    let { rating: t } = e;
    return (0, i.jsxs)("div", {
        className: a1.mo,
        role: "status",
        children: [
            (0, i.jsx)(aq.SparklesIcon, { size: "xs", color: "currentColor", className: a1.dQ, "aria-hidden": !0 }),
            (0, i.jsx)(v.E, {
                variant: "body-xs/medium",
                color: "text-muted",
                children:
                    t <= 2
                        ? T.intl.string(R.default["nIc9/M"])
                        : 3 === t
                          ? T.intl.string(R.default.ausj8U)
                          : T.intl.string(R.default.HilSjw),
            }),
        ],
    });
}
function a3(e) {
    let { projectId: t, turnId: n, cta: l, status: r, placement: s } = e,
        { rating: u, rate: c } = (function (e) {
            let { projectId: t, turnId: n } = e;
            a.useSyncExternalStore(aZ, () => aW);
            let { publishReason: l, surface: r, placement: i, publishState: s } = aY(e);
            return (
                a.useEffect(() => {
                    !(function (e) {
                        if (null != aQ(e.projectId, e.turnId)) return;
                        let t = aO.w.get(aU) ?? {};
                        t[e.projectId]?.[e.turnId] !== !0 &&
                            ((0, aG.rv)(e),
                            aO.w.set(aU, { ...t, [e.projectId]: { ...t[e.projectId], [e.turnId]: !0 } }));
                    })({ projectId: t, turnId: n, publishReason: l, surface: r, placement: i, publishState: s });
                }, [t, n, l, r, i, s]),
                {
                    rating: aQ(t, n),
                    rate(t) {
                        let n = (function (e) {
                            let { rating: t, ...n } = e,
                                { projectId: l, turnId: r } = n;
                            if (null != aQ(l, r)) return null;
                            let i = { ...aY(n), rating: t };
                            (0, aG.gw)(i);
                            let a = aX();
                            return (aO.w.set(az, { ...a, [l]: { ...a[l], [r]: t } }), aW++, aV.forEach((e) => e()), i);
                        })({ ...e, rating: t });
                        return null != n && t <= 2 ? n : null;
                    },
                }
            );
        })({ projectId: t, turnId: n, cta: l, status: r, placement: s }),
        [d, m] = a.useState(null),
        [f, h] = a.useState(null),
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
        return (0, i.jsx)(a2, { rating: u });
    let y = null != u,
        k = y ? u : (f ?? d),
        w = y || (null == f && null != d);
    function S(e) {
        if (y) return;
        (m(e), h(null), p(!0));
        let t = c(e);
        null != t && (0, K.qf)((e) => (0, i.jsx)(a0, { ...e, rating: t }));
    }
    return (0, i.jsxs)("div", {
        className: a1.nM,
        onMouseLeave: () => h(null),
        children: [
            (0, i.jsxs)("span", {
                className: a1.WD,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(v.E, {
                        id: j,
                        variant: "body-xs/medium",
                        color: "text-muted",
                        className: o()(a1.Pf, { [a1.KH]: null == k }),
                        children: T.intl.string(R.default.mTV326),
                    }),
                    aB.map((e) =>
                        (0, i.jsx)(
                            v.E,
                            {
                                variant: "body-xs/medium",
                                color: "text-default",
                                className: o()(a1.Pf, { [a1.KH]: k === e }),
                                children: aH(e),
                            },
                            e,
                        ),
                    ),
                ],
            }),
            (0, i.jsx)("div", {
                role: "radiogroup",
                "aria-labelledby": j,
                className: a1.uf,
                children: aB.map((e) => {
                    let t = null != k && e <= k,
                        n = t ? aD.StarIcon : aF.StarOutlineIcon;
                    return (0, i.jsxs)(
                        "label",
                        {
                            className: a1.uK,
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
                                        b.current ? m(e) : S(e);
                                    },
                                    onKeyDown: (t) => {
                                        ((b.current = t.key.startsWith("Arrow")),
                                            "Enter" === t.key && (t.preventDefault(), S(e)));
                                    },
                                    onKeyUp: () => {
                                        b.current = !1;
                                    },
                                    className: a1.hF,
                                    "aria-label": T.intl.formatToPlainString(R.default.NU7Dex, {
                                        rating: e,
                                        label: aH(e),
                                    }),
                                }),
                                (0, i.jsx)(
                                    "span",
                                    {
                                        className: o()(a1.d4, { [a1.cO]: t, [a1.Ng]: t && w }),
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
function a4(e) {
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
function a7(e) {
    let { projectId: t, turnId: n, cta: l } = e,
        r = (0, eU.Ay)(t);
    return null != r && aL(r, l)
        ? (0, i.jsx)(aT, {
              children: (0, i.jsxs)(aM.B, {
                  gap: 12,
                  align: "start",
                  children: [
                      (0, i.jsx)(a4, { projectId: t, publish: r }),
                      null != r.failure
                          ? (0, i.jsx)(v.E, {
                                variant: "body-sm/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: r.failure,
                            })
                          : null,
                      null != n
                          ? (0, i.jsx)(a3, {
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
var a5 = n(303345),
    a9 = n(44255),
    a8 = n(416473),
    a6 = n(289830);
function se(e) {
    let { projectId: t, proposal: n, current: l } = e,
        r = (function (e, t, n) {
            let l = (0, c.bG)(
                    [eR.Ay],
                    () => {
                        let t = eR.Ay.getProject(e);
                        return null != t && (0, eR.jf)(t);
                    },
                    [e],
                ),
                [r, i] = a.useState("idle"),
                [s, u] = a.useState(null),
                o = a.useCallback(async () => {
                    (i("sending"), u(null));
                    try {
                        (await (0, a8.Du)(e, t.trigger), i("on"));
                    } catch (e) {
                        (u(e instanceof a5.A ? e.message : T.intl.string(R.default.EXceox)), i("error"));
                    }
                }, [e, t.trigger]),
                [d] = a.useState(() => Date.now()),
                m =
                    t.next_run_at > d
                        ? T.intl.formatToPlainString(R.default.orZDqY, { time: (0, a9.TP)(t.next_run_at) })
                        : null;
            return {
                summary: (0, a9.lD)(t.trigger),
                firstPublish: m,
                status: r,
                error: s,
                onTurnOn: l && n && "on" !== r ? o : void 0,
            };
        })(t, n, l);
    return (0, i.jsx)(t3, {
        title: T.intl.string(R.default.ZtfX9V),
        children: (0, i.jsxs)("div", {
            className: a6.r,
            children: [
                (0, i.jsxs)("div", {
                    className: a6.z,
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
                            children: T.intl.string(R.default.cxNHma),
                        }),
                        "on" === r.status
                            ? (0, i.jsx)(v.E, {
                                  variant: "body-sm/normal",
                                  role: "status",
                                  children: T.intl.string(R.default.k4IRsm),
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
                          text: T.intl.string(R.default.EuhBSG),
                          loading: "sending" === r.status,
                          disabled: "sending" === r.status,
                          onClick: r.onTurnOn,
                      })
                    : null,
            ],
        }),
    });
}
var st = n(989271);
function sn(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = a.useId(),
        s = null == l;
    return (0, i.jsxs)(tQ.D, {
        className: o()(st.nM, { [st.f1]: s, [st.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": T.intl.formatToPlainString(R.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, i.jsxs)("div", {
                className: st.jo,
                children: [
                    n
                        ? (0, i.jsx)(m.CheckmarkSmallIcon, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: st.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, i.jsx)(v.E, {
                        tag: "div",
                        variant: "body-md/medium",
                        color: "none",
                        className: st.G9,
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
function sl(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = a.useState(() => new Set()),
        u = a.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, i.jsx)(t3, {
        title: T.intl.string(R.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, i.jsx)(
                sn,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : u },
                e.id,
            ),
        ),
    });
}
var sr = n(919790),
    si = n(908492),
    sa = n(971824),
    ss = n(162052),
    su = n(165648);
function so(e) {
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
            segment: m,
            hostsChecklist: f = !0,
            reportsDuration: h = !0,
            closed: g = !1,
            segmentDurationMs: p,
        } = e,
        x = a.useMemo(() => (0, tH.Jf)(n, l), [n, l]),
        v = a.useMemo(
            () =>
                null == m
                    ? x
                    : {
                          ...x,
                          steps: x.steps.filter((e) => e.segment === m),
                          tasks: x.tasks.filter((e) => e.task.segment === m),
                      },
            [x, m],
        );
    if (o)
        return (0, i.jsx)("ol", {
            className: nr.pj,
            "data-live": !1,
            children: (0, i.jsx)(tY.A, {
                glyph: (0, i.jsx)(rc.StopIcon, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: T.intl.string(R.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = l ? void 0 : (p ?? (h ? (x.turn?.durationMs ?? u) : void 0)),
        b = f ? ((0, tH.lt)(n) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        w = rj(k.map((e) => e.taskId)),
        S = !g && (l || k.some((e) => "running" === e.task.status)),
        A = rA(k);
    return (0, i.jsxs)("ol", {
        className: nr.pj,
        "data-live": S,
        children: [
            (0, i.jsx)(tX.Ay, {
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
                let l = null != e.task.helperMark ? rv(e.task.helperMark) : void 0,
                    r = l ?? w.get(e.taskId);
                return null == r
                    ? null
                    : (0, i.jsx)(
                          rC,
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
            (0, i.jsx)(rD, { projectId: t, steps: n, tree: x, segment: m }),
            y
                ? (0, i.jsx)("li", {
                      className: nr.YO,
                      children: (0, i.jsx)(nn, { todos: b, provisional: d, agents: A, live: r, superseded: s }),
                  })
                : null,
        ],
    });
}
function sc(e) {
    let {
            projectId: t,
            steps: n,
            content: l,
            proposal: r,
            planVersion: s,
            ideas: u,
            attachments: c,
            secretRequest: d,
            secretRequestId: m,
            secretRequestAwaiting: f,
            secretRequestStatus: h = "open",
            settingsRequest: g,
            settingsAskId: p,
            publishCta: x,
            turnId: j,
            onPickIdea: b,
            pickedIdeaIds: y,
            onApprovePlan: k,
            sideReply: w = !1,
            sideReplyAcknowledges: S,
            hoistedProse: A = !1,
            hoistedAttachmentsHost: C,
            restoreProposal: N,
            onRestoreProposal: I,
            publishScheduleProposal: E,
            publishScheduleProposalCurrent: _ = !1,
        } = e,
        M = a.useMemo(
            () => rd({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != c && c.length > 0 }),
            [n, l, r, c],
        ),
        { streamed: P, lastStreamedMessage: L, showsClosingMessage: $, closingContent: q } = M,
        D = (A ? C : void 0) ?? M.attachmentsHost,
        F = $ && !A,
        O = null == c ? null : (0, i.jsx)(sr.A, { projectId: t, attachments: c }),
        G = null == O ? null : (0, i.jsx)("div", { className: nr.MT, children: O }),
        z = w
            ? (0, i.jsx)(v.E, {
                  variant: "body-xs/normal",
                  color: "text-muted",
                  children: (function (e) {
                      switch (e) {
                          case "steered":
                              return T.intl.string(R.default.Mv5OmK);
                          case "queued":
                              return T.intl.string(R.default["Po/2mi"]);
                          case "restarting":
                              return T.intl.string(R.default.Vj0woh);
                          default:
                              return T.intl.string(R.default.gY3L8p);
                      }
                  })(S),
              })
            : null;
    return (0, i.jsxs)("div", {
        className: nr.ue,
        children: [
            P.length > 0 && !A
                ? (0, i.jsx)("ol", {
                      className: nr.dO,
                      children: P.filter((e) => "todos" !== e.type).map((e) =>
                          (0, i.jsxs)(
                              "li",
                              {
                                  className: nr.DV,
                                  children: [
                                      (0, i.jsx)("div", {
                                          className: su.PT,
                                          children: (0, si.U)(e.content, !0, {
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
                ? (0, i.jsx)(a_, { projectId: t, proposal: r, version: s, onApprove: k })
                : F
                  ? (0, i.jsxs)("div", {
                        className: o()(nr.ky, ss.XR),
                        children: [
                            (0, i.jsx)("div", {
                                className: o()(su.PT, nr.cW),
                                children: (0, si.U)(q, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === D ? G : null,
                            z,
                        ],
                    })
                  : null,
            null != d
                ? (0, i.jsx)("div", {
                      className: o()(nr.ky, nr.k1, ss.XR, { [sa.O]: null != f && "open" === h }),
                      children: (0, i.jsx)(lJ, {
                          projectId: t,
                          cardId: m ?? "",
                          request: d,
                          status: h,
                          awaiting: "open" === h ? f : void 0,
                      }),
                  })
                : null,
            null != g
                ? (0, i.jsx)("div", {
                      className: o()(nr.ky, nr.k1, ss.XR),
                      children: (0, i.jsx)(re, { projectId: t, request: g, askId: p }),
                  })
                : null,
            "standalone" !== D && ("closing" !== D || F) ? null : O,
            null != x ? (0, i.jsx)(a7, { projectId: t, turnId: j ?? null, cta: x }) : null,
            null != u && u.length > 0 ? (0, i.jsx)(sl, { ideas: u, pickedIdeaIds: y, onPick: b }) : null,
            null != N ? (0, i.jsx)(rO, { proposal: N, onRestore: I }) : null,
            null != E ? (0, i.jsx)(se, { projectId: t, proposal: E, current: _ }) : null,
            F ? null : z,
        ],
    });
}
var sd = n(286251),
    sm = n(146806),
    sf = n(475358),
    sh = n(783977),
    sg = n(559647),
    sp = n(787564),
    sx = n(339200),
    sv = n(234320),
    sj = n(191023),
    sb = n(285796),
    sy = n(922329),
    sk = n(153171);
function sw(e) {
    let { projectId: t } = e;
    return (0, i.jsx)(sy.p, {
        name: T.intl.string(R.default.xhFsEP),
        thumb: (0, i.jsxs)("span", {
            className: tv.PA,
            "aria-hidden": !0,
            children: [
                (0, i.jsx)(sj.ImageIcon, { size: "sm", color: "currentColor" }),
                (0, i.jsx)("span", {
                    className: tv.OY,
                    children: (0, i.jsx)(f.PencilIcon, {
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
            children: T.intl.string(R.default["9y+Dae"]),
        }),
        children: (0, i.jsx)("button", {
            type: "button",
            className: sk.o1,
            onClick: () => (0, N.xU)(t),
            "aria-label": T.intl.string(R.default.N852dj),
            children: (0, i.jsx)(sb.CircleXIcon, { size: "xs", color: "currentColor" }),
        }),
    });
}
function sS(e) {
    let { send: t } = e;
    return (0, i.jsxs)(sy.p, {
        compact: !0,
        name: T.intl.string(R.default.xhFsEP),
        thumbSrc: t.thumbUrl,
        subText:
            "failed" === t.status
                ? (0, i.jsx)(v.E, {
                      variant: "body-xs/normal",
                      color: "text-feedback-critical",
                      children: T.intl.string(R.default["3PeGo2"]),
                  })
                : null,
        children: [
            "uploading" === t.status ? (0, i.jsx)(j.y, { type: j.t.SPINNING_CIRCLE_SIMPLE, className: sk.Rk }) : null,
            "failed" === t.status
                ? (0, i.jsx)(nD.Q, {
                      variant: "secondary",
                      textVariant: "body-sm/medium",
                      text: T.intl.string(R.default["WFJ/vb"]),
                      onClick: t.retry,
                  })
                : null,
        ],
    });
}
var sA = n(587157),
    sC = n(347111),
    sN = n(120234),
    sI = n(901173),
    sE = n(161431),
    s_ = n(46653),
    sM = n(695184),
    sR = n(811091),
    sT = n(475458),
    sP = n(957071),
    sL = n(927659),
    s$ = n(351906),
    sq = n(407653),
    sD = n(322915);
function sF(e) {
    let { id: t, projectId: n, suggestions: l, selectedIndex: r, onHover: a, onSelect: s } = e,
        u = (0, c.bG)([s$.A], () => s$.A.hidePersonalInformation ?? !1),
        o = `${t}-users`,
        d = `${t}-files`;
    if (0 === l.length) return null;
    let m = l.map((e, t) =>
            "user" === e.kind
                ? (0, i.jsx)(
                      sL.Ay.User,
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
                      sL.Ay.Generic,
                      {
                          index: t,
                          text: e.file.name,
                          icon: (0, i.jsx)(sq.A, { projectId: n, file: e.file, className: sD.Vk }),
                          selected: t === r,
                          onHover: a,
                          onClick: s,
                      },
                      e.file.id,
                  ),
        ),
        f = l.findIndex((e) => "file" === e.kind),
        h = -1 === f ? m : m.slice(0, f),
        g = -1 === f ? [] : m.slice(f);
    return (0, i.jsx)(sL.Ay, {
        id: t,
        className: sD.nx,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, i.jsxs)("div", {
            id: t,
            role: "listbox",
            "aria-label": T.intl.string(R.default.Vb3sUg),
            children: [
                h.length > 0
                    ? (0, i.jsx)(sO, { titleId: o, title: T.intl.string(R.default.Vb3sUg), children: h })
                    : null,
                g.length > 0
                    ? (0, i.jsx)(sO, { titleId: d, title: T.intl.string(R.default.zA5KLM), children: g })
                    : null,
            ],
        }),
    });
}
function sO(e) {
    let { titleId: t, title: n, children: l } = e;
    return (0, i.jsxs)("div", {
        role: "group",
        "aria-labelledby": t,
        children: [
            (0, i.jsx)(v.E, { id: t, variant: "body-xs/semibold", color: "text-muted", className: sD.Gf, children: n }),
            l,
        ],
    });
}
var sG = n(719442),
    sz = n(355622),
    sU = n(408018),
    sB = n(186306),
    sK = n(323350),
    sH = n(35277),
    sV = n(68059),
    sW = n(267102),
    sX = n(259691);
let sQ = (0, iw.createChannelRecord)({ id: "1", type: ev.rbe.DM });
function sZ(e) {
    let t = sx.VW.end(e, []);
    return { anchor: t, focus: t };
}
function sY(e) {
    return (0, sK.WO)(sx.VW.richValue(e), { mode: "raw" });
}
function sJ(e, t) {
    ((e.children = (0, sU.x7)(t)), (e.selection = sZ(e)), e.onChange());
}
function s0(e) {
    let { attributes: t, children: n, element: l } = e;
    if ("hostInlineVoid" !== l.type) return null;
    let r = new RegExp(ri.$c.source).exec(l.raw)?.[1];
    return null == r
        ? null
        : (0, i.jsxs)("span", { ...t, contentEditable: !1, children: [(0, i.jsx)(sX.A, { attachmentId: r }), n] });
}
var s1 = n(497437),
    s2 = n(465410);
let s3 = "body-md/normal",
    s4 = null;
function s7(e) {
    let { text: t, offering: n, typed: l } = e,
        [r, s] = a.useState(t),
        u = a.useRef(null),
        d = a.useRef(null),
        m = a.useRef(0),
        [f, h] = a.useState(0),
        [g, p] = a.useState(0),
        [x, j] = a.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
    (a.useLayoutEffect(() => {
        let e = u.current,
            t = e?.parentElement;
        if (null == e || null == t) return;
        let n = m.current;
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
                m = 0 === c ? 1 : s / c,
                f = 0 === c ? 1 : o / c;
            j({
                frontFrom: 1e3 * (0, sm._R)(m),
                frontTo: 1e3 * (0, sm._R)(f),
                backFrom: 1e3 * (0, sm.T)(m),
                backTo: 1e3 * (0, sm.T)(f),
            });
        }
        let r = new ResizeObserver(l);
        return (l(), r.observe(e), r.observe(t), null != d.current && r.observe(d.current), () => r.disconnect());
    }, [t]),
        a.useEffect(() => {
            m.current = d.current?.offsetWidth ?? 0;
        }, [t]));
    let [b, y] = a.useState(0),
        [k, w] = a.useState(null),
        S = a.useRef(!1),
        A = a.useCallback(() => {
            (w(S.current ? (n ? "through" : "out") : n ? "in" : null), y((e) => e + 1));
        }, [n]);
    a.useEffect(() => {
        S.current = n;
    }, [n, t]);
    let C = "in" === k ? x.backFrom : x.frontFrom,
        N = "out" === k ? x.frontTo : x.backTo,
        I = (0, c.bG)([iE.Ay], () => iE.Ay.useReducedMotion),
        E = t === T.intl.string(R.default.Zc7gML),
        _ = r === t && E;
    function M(e, t, n) {
        let l = null != n;
        return (0, i.jsx)("span", {
            ref: n,
            className: o()(s1.VT, { [s1.qk]: l }),
            style: l
                ? {
                      insetInlineStart: f,
                      "--custom-cap-wipe-delay": `${C}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, N - C)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": l && b > 0 && null != k ? b % 2 : void 0,
            "data-wipe-kind": l ? (k ?? void 0) : void 0,
            children: (0, i.jsx)(sf.e, { shortcut: "tab", className: s1.xT, keyClassName: e }),
        });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(sd.o, {
                text: t,
                variant: s3,
                delay: null,
                duration: 1e3,
                trailingWidth: g,
                className: o()(s1.xM, { [s1.s2]: l }),
                onStart: A,
                onComplete: () => s(t),
            }),
            M(s1.IS, n || (!I && "out" === k), u),
            (0, i.jsx)("span", {
                ref: d,
                className: s1.QI,
                "aria-hidden": !0,
                children: (0, i.jsx)(v.E, { variant: s3, tag: "span", children: t }),
            }),
            _
                ? (0, i.jsxs)("span", {
                      className: s1.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, i.jsx)(v.E, { variant: s3, tag: "span", className: s1.xM, children: t }),
                          M(s1.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let s5 = a.memo(function (e) {
        let {
                projectId: t,
                canSend: n,
                inputLocked: l = !1,
                aiPaused: r = !1,
                running: s,
                restoring: u = !1,
                onSend: d,
                onInterrupt: m,
                escapeScopeRef: f,
                onUploadFile: h,
                onApprove: g,
                onImport: p,
                onSendToOtherProjects: x,
                suggestion: v,
                questionOpen: j = !1,
                secretPending: b = !1,
                hasPendingContext: y = !1,
                onDraftHasTextChange: k,
                modelSettings: w,
                onModelSettingsChange: S,
                visible: A = !0,
            } = e,
            C = n && !l && !r,
            I = (function (e) {
                let t = a.useContext(sW.Ay),
                    [n] = a.useState(() => {
                        let n = (0, sG.ie)();
                        return (
                            (n.children = (0, sU.x7)(e)),
                            (n.selection = sZ(n)),
                            (0, sV.a)({
                                editor: n,
                                chatInputType: sz.oU.GENERIC_RICH_TEXTAREA,
                                channel: sQ,
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
                                    for (let [t, l] of sx.VW.nodes(e, { at: [], match: sx.l5.isText }))
                                        for (let e of t.text.matchAll(ri.$c)) {
                                            let t = e.index ?? 0;
                                            n.push({ raw: e[0], path: l, start: t, end: t + e[0].length });
                                        }
                                    (n.length > 0 &&
                                        sB.o.withMergedEntry(e, () =>
                                            sx.VW.withoutNormalizing(e, () => {
                                                for (let { raw: t, path: l, start: r, end: i } of n.reverse())
                                                    sH.b.textToVoid(
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
            })(ru.A.getDraft(t)),
            [E, _] = a.useState(() => sY(I));
        (0, sN.N$)(E);
        let M = a.useRef(E),
            [P, L] = a.useState(null),
            $ = a.useCallback(() => {
                let e = sY(I);
                (e !== M.current && ((M.current = e), (0, sC.I)(t, e), _(e)),
                    L(
                        (function (e) {
                            let { selection: t } = e;
                            if (null == t || !sx.ZF.isCollapsed(t)) return null;
                            let [n] = sx.VW.node(e, t.anchor.path);
                            return sx.l5.isText(n) ? n.text.slice(0, t.anchor.offset) : null;
                        })(I),
                    ));
            }, [I, t]),
            q = a.useCallback((e) => sJ(I, e), [I]),
            D = "" !== E.trim();
        a.useEffect(() => k?.(D), [D, k]);
        let F = a.useRef(t);
        a.useLayoutEffect(() => {
            F.current !== t && ((F.current = t), sJ(I, ru.A.getDraft(t)));
        }, [I, t]);
        let O = (0, c.bG)([iE.Ay], () => iE.Ay.isSubmitButtonEnabled),
            [z, U] = a.useState(!1);
        a.useEffect(() => {
            s || U(!1);
        }, [s]);
        let {
                drafts: B,
                addFiles: K,
                pasteFiles: H,
                removeDraft: V,
                settled: W,
                takeRefs: X,
            } = (0, e9.FM)({ projectId: t, surface: "chat", onUploadFile: h }),
            Q = (0, N.fc)(t),
            Z = (0, N.bE)(t),
            Y = a.useRef(Z);
        a.useEffect(() => {
            let e = Y.current;
            ((Y.current = Z), C && null != e && null != Z && Z !== e && sx.VW.focus(I));
        }, [Z, C, I]);
        let J = "" !== E.trim() || B.length > 0 || y || Q,
            et = C && J && W,
            [en, el] = a.useState(null);
        a.useEffect(() => {
            if (null == en) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => el(null));
                });
            return () => {
                (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
            };
        }, [en]);
        let er = (0, sE.rU)(t),
            [ei, ea] = a.useState(null),
            [es, eu] = a.useState(0),
            eo = a.useMemo(() => (null != P && C ? (0, sI.OG)(P, P.length) : null), [P, C]),
            ec = eo?.start ?? null;
        a.useEffect(() => {
            null == ec ? ea(null) : (0, sE.IP)(t);
        }, [ec, t]);
        let ed = ec === ei ? null : eo,
            em = (function (e, t) {
                let n = (0, c.bG)([eR.Ay], () => eR.Ay.getProject(e), [e]),
                    { creator: l, collaborators: r } = (0, sT.yv)(n),
                    i = (0, c.bG)([s_.default], () => s_.default.getId()),
                    s = null != n && (0, ee.pL)(n) ? n.guild_id : void 0,
                    u = t?.toLowerCase() ?? null;
                return (
                    a.useEffect(() => {
                        null != s && null != u && sM.A.requestMembers(s, u, 100);
                    }, [s, u]),
                    (0, c.yK)(
                        [n3.Ay, n4.A, nC.default],
                        () => {
                            if (null == u) return [];
                            let e = null != s ? n4.A.getGuild(s) : null,
                                t = (t) => (0, sI.mO)(t, u, null != e ? n3.Ay.getNick(e.id, t.id) : null),
                                a = new Set(n?.collaborator_role_ids ?? []),
                                o = null != e && a.has(sR.default.castGuildIdAsEveryoneGuildRoleId(e.id)),
                                c =
                                    null == e
                                        ? []
                                        : n3.Ay.getMemberIds(e.id)
                                              .map((e) => nC.default.getUser(e))
                                              .filter(
                                                  (n) =>
                                                      null != n &&
                                                      t(n) &&
                                                      (o ||
                                                          (n3.Ay.getMember(e.id, n.id)?.roles ?? []).some((e) =>
                                                              a.has(e),
                                                          ) ||
                                                          n7.$3({
                                                              permission: ev.xBc.MANAGE_GUILD,
                                                              user: n,
                                                              context: e,
                                                          })),
                                              ),
                                d = new Set();
                            return [...[...(null != l ? [l] : []), ...r].filter(t), ...c].filter(
                                (e) => !(e.id === i || e.bot || d.has(e.id)) && (d.add(e.id), !0),
                            );
                        },
                        [n, s, u, l, r, i],
                    )
                );
            })(t, ed?.text ?? null),
            ef = a.useMemo(() => (null == ed ? [] : (0, sI.l$)(em, er, ed.text)), [ed, em, er]),
            eh = ed?.text;
        a.useEffect(() => eu(0), [eh]);
        let eg = ef.length > 0,
            ep = Math.min(es, Math.max(0, ef.length - 1)),
            ex = a.useId(),
            ej = a.useCallback(
                (e) => {
                    let t = ef[e];
                    null != ed &&
                        null != t &&
                        (function (e, t, n) {
                            let { selection: l } = e;
                            if (null == l) return;
                            let { path: r, offset: i } = l.anchor;
                            (sH.b.select(e, { anchor: { path: r, offset: t }, focus: { path: r, offset: i } }),
                                sH.b.insertText(e, `${n} `));
                        })(I, ed.start, "user" === t.kind ? `<@${t.user.id}>` : `<file:${t.file.id}>`);
                },
                [ef, ed, I],
            ),
            eb = a.useCallback(() => {
                if (!et) return;
                let e = X(),
                    n = Q
                        ? (function (e) {
                              let t = (0, N.K7)(e);
                              if (null == t || !(0, nu.C)(t)) return null;
                              let n = t.history.present,
                                  l = t.keptStill ?? (0, N.C)(e);
                              return (
                                  (0, N.My)(e),
                                  function (t) {
                                      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                          { nonce: i, messageKey: a } = (0, eO.Wx)(e, t, r),
                                          s = { projectId: e, nonce: i, job: null, thumbUrl: null };
                                      (no.set(a, s),
                                          (s.job = (0, nu.B)({
                                              capture: (t) => (0 === t ? l : (0, N.C)(e)),
                                              composite: (e) =>
                                                  (async function (e, t) {
                                                      let n = await createImageBitmap(e);
                                                      try {
                                                          let e = { width: n.width, height: n.height },
                                                              l = tL(e),
                                                              r = tL(e);
                                                          if (null == l || null == r) return null;
                                                          return (
                                                              tP(r.ctx, t, e),
                                                              l.ctx.drawImage(n, 0, 0),
                                                              l.ctx.drawImage(r.canvas, 0, 0),
                                                              await l.toBlob()
                                                          );
                                                      } finally {
                                                          n.close();
                                                      }
                                                  })(e, n),
                                              upload: (t) =>
                                                  (0, e3.vX)(e, new File([t], "sketch.webp", { type: t.type })),
                                              isStaged: (t) => (0, e3.n6)(e, t.id),
                                              send: (n) => (0, eO.dv)(e, t, [...r, n], { nonce: i }),
                                              update: (e, t) => {
                                                  (null != t &&
                                                      null == s.thumbUrl &&
                                                      (s.thumbUrl = URL.createObjectURL(t)),
                                                      nd(a, {
                                                          status: e,
                                                          thumbUrl: s.thumbUrl,
                                                          retry: () => s.job?.retry(),
                                                      }),
                                                      "sent" === e &&
                                                          (no.delete(a),
                                                          window.setTimeout(() => {
                                                              (nd(a, null),
                                                                  null != s.thumbUrl &&
                                                                      URL.revokeObjectURL(s.thumbUrl));
                                                          }, 6e4)));
                                              },
                                          })));
                                  }
                              );
                          })(t)
                        : null;
                d(E, e.length > 0 ? e : void 0, n ?? void 0);
                let l = (function (e, t, n) {
                    let l,
                        r,
                        i = n.split("\n", 1)[0] ?? "";
                    if (null == e || "" === i) return i;
                    null == s4 && (s4 = document.createElement("canvas").getContext("2d"));
                    let a = s4;
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
                        m = d.lastIndexOf(" ");
                    return (m > 0 ? d.slice(0, m) : d).trimEnd();
                })(s8(eC.current), e$.current, (0, sI.Lj)(E));
                ("" !== l && el(l), q(""), ea(null));
            }, [et, Q, t, E, d, X, q]),
            ey = a.useCallback(
                (e) => {
                    (e.preventDefault(), eb());
                },
                [eb],
            ),
            ek = a.useCallback(() => {
                null == m || z || (U(!0), m());
            }, [m, z]);
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
                            (0, N.K7)(n)?.active !== !0 &&
                            !(0, G._c)(n).active &&
                            ((t = e.target),
                            (r = l?.current),
                            (!(0, e1.vq)(t) ||
                                t === document.body ||
                                t === document.documentElement ||
                                (null != r &&
                                    r.contains(t) &&
                                    null == t.closest('input, textarea, [contenteditable="true"]'))) &&
                                (e.preventDefault(), e.stopPropagation(), i.current()));
                    }
                }, [t, n, l]));
        })({ active: s && null != m, projectId: t, scopeRef: f, onEscape: ek });
        let ew = null == v || "" !== E || !C || u || y ? null : v,
            eS = a.useCallback(
                (e) => {
                    if (eg && !e.shiftKey && !e.metaKey && !e.ctrlKey && !e.altKey) {
                        let t = ef.length;
                        if ("ArrowDown" === e.key || "ArrowUp" === e.key) {
                            (e.preventDefault(), eu((ep + ("ArrowDown" === e.key ? 1 : t - 1)) % t));
                            return;
                        }
                        if ("Enter" === e.key || "Tab" === e.key) {
                            (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), ej(ep));
                            return;
                        }
                        if ("Escape" === e.key) {
                            (e.preventDefault(), e.stopPropagation(), ea(ed?.start ?? null));
                            return;
                        }
                    }
                    if ("Escape" === e.key && (0, N.K7)(t)?.active === !0) {
                        (e.preventDefault(), e.stopPropagation(), (0, N.V9)(t));
                        return;
                    }
                    if ("Escape" === e.key && s && null != m) {
                        (e.preventDefault(), e.stopPropagation(), ek());
                        return;
                    }
                    if ("Tab" === e.key && !e.shiftKey && null != ew) {
                        (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), q(ew));
                        return;
                    }
                    if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                        null != g && (e.preventDefault(), g());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), eb());
                },
                [eb, g, s, m, ek, ew, q, eg, ef.length, ep, ej, ed, t],
            ),
            eA = a.useCallback(
                (e) => {
                    C && H(e);
                },
                [C, H],
            );
        (0, sv.Vo)({
            event: ev.jej.GLOBAL_CLIPBOARD_PASTE,
            handler: (e) => {
                let { event: t } = e;
                return eA(t);
            },
        });
        let eC = a.useRef(null),
            eN = a.useCallback(() => {
                let e = M.current;
                x?.((0, sI.Lj)(e), () => {
                    M.current === e && q("");
                });
            }, [x, q]),
            [eI, eE] = a.useState(0),
            [e_, eM] = a.useState(!1);
        a.useEffect(() => {
            if (0 === E.length) return void eM(!1);
            let e = s8(eC.current);
            if (null != e) {
                let t = (function (e) {
                    let t = e.ownerDocument.getSelection(),
                        n = e.closest("form");
                    if (null == n || null == t || 0 === t.rangeCount || !e.contains(t.anchorNode)) return null;
                    let l = t.getRangeAt(0).getBoundingClientRect();
                    return 0 === l.height ? null : l.left - n.getBoundingClientRect().left;
                })(e);
                null != t && eE(t);
            }
            eM(!0);
            let t = setTimeout(() => eM(!1), s9);
            return () => clearTimeout(t);
        }, [E]);
        let eT = a.useMemo(() => ({ "--custom-glow-x": `${eI}px` }), [eI]),
            eP = e_ ? ` ${s1.EB}` : "",
            eL = u
                ? T.intl.string(R.default.qqlUiW)
                : r
                  ? T.intl.string(R.default.Z0hyNL)
                  : l
                    ? T.intl.string(R.default.GcFRaY)
                    : C
                      ? y
                          ? T.intl.string(R.default.knUjL3)
                          : Q
                            ? T.intl.string(R.default["6rXxwa"])
                            : b
                              ? T.intl.string(R.default.VxH5vv)
                              : j
                                ? T.intl.string(R.default.IevBEw)
                                : T.intl.string(s ? R.default["0BJa/0"] : R.default.TEeU7z)
                      : T.intl.string(R.default.zZ9NgM),
            e$ = a.useRef(0),
            eq = a.useRef(null),
            eD = a.useCallback((e) => {
                if ((eq.current?.disconnect(), null == e)) return;
                e$.current = e.clientWidth;
                let t = new ResizeObserver(() => {
                    e$.current = e.clientWidth;
                });
                (t.observe(e), (eq.current = t));
            }, []),
            eF = a.useId(),
            eG = a.useId(),
            ez = null != ew,
            eU = en ?? ew ?? eL,
            eB = "" === E && "" !== eU;
        return (0, i.jsxs)("form", {
            onSubmit: ey,
            className: s1.DA,
            children: [
                eg
                    ? (0, i.jsx)(sF, {
                          id: ex,
                          projectId: t,
                          suggestions: ef,
                          selectedIndex: ep,
                          onHover: eu,
                          onSelect: ej,
                      })
                    : null,
                B.length > 0 || Q
                    ? (0, i.jsxs)("div", {
                          className: s1.lN,
                          children: [
                              B.map((e) => (0, i.jsx)(e9.Nl, { draft: e, onRemove: V }, e.localId)),
                              Q ? (0, i.jsx)(sw, { projectId: t }) : null,
                          ],
                      })
                    : null,
                (0, i.jsx)("span", { className: `${s1.wg} ${s1.LP}${eP}`, style: eT, "aria-hidden": !0 }),
                (0, i.jsx)("span", { className: `${s1.wg} ${s1.L3}${eP}`, style: eT, "aria-hidden": !0 }),
                (0, i.jsxs)("div", {
                    className: s1.VA,
                    ref: eC,
                    children: [
                        (0, i.jsx)(sP.A, {
                            navId: "conjure-composer-attach",
                            disabled: !C,
                            buttonClassName: `${s1.Y0} ${s1.nu}`,
                            iconClassName: s1.Qu,
                            onAddFiles: K,
                            onImport: p,
                            onSendToOtherProjects: null != x ? eN : void 0,
                        }),
                        eB
                            ? (0, i.jsx)("div", {
                                  ref: eD,
                                  className: s1.ar,
                                  "aria-hidden": "true",
                                  children: (0, i.jsx)(
                                      s7,
                                      { text: eU, offering: ez && null == en, typed: null != en },
                                      A ? "visible" : "hidden",
                                  ),
                              })
                            : null,
                        (0, i.jsx)(t0.A, { id: eG, children: T.intl.string(R.default.ldNl9x) }),
                        (0, i.jsx)(ri.Fu.Provider, {
                            value: t,
                            children: (0, i.jsx)(sp.A, {
                                editor: I,
                                containerClassName: o()(s1.sq, s2.dv),
                                className: s1.jp,
                                readOnly: !C,
                                canFocus: C,
                                onChange: $,
                                onBlur: () => L(null),
                                onKeyDown: eS,
                                onPaste: eA,
                                renderExtraElement: s0,
                                "aria-labelledby": eG,
                                "aria-describedby": eB ? eF : void 0,
                                "aria-autocomplete": "list",
                                "aria-haspopup": "listbox",
                                "aria-expanded": eg,
                                "aria-controls": eg ? ex : void 0,
                                "aria-activedescendant": eg ? ((0, sL.aI)(ep) ?? void 0) : void 0,
                            }),
                        }),
                        eB ? (0, i.jsx)(t0.A, { id: eF, children: eL }) : null,
                        (0, i.jsx)("div", {
                            className: s1.Sz,
                            children:
                                s && null != m
                                    ? (0, i.jsx)(e4.m, {
                                          text: T.intl.string(R.default.wiguT0),
                                          ariaHidden: !0,
                                          children: (0, i.jsx)("button", {
                                              type: "button",
                                              className: `${s1.Y0} ${s1.$E}`,
                                              disabled: z,
                                              onClick: ek,
                                              "aria-label": T.intl.string(R.default.wiguT0),
                                              children: (0, i.jsx)(rc.StopIcon, {
                                                  size: "custom",
                                                  width: 20,
                                                  height: 20,
                                                  color: "currentColor",
                                              }),
                                          }),
                                      })
                                    : w?.tierSettings != null && null != S
                                      ? (0, i.jsx)(sA.A, {
                                            settings: w.tierSettings,
                                            tiers: w.tiers,
                                            choices: w.choices,
                                            disabled: !C,
                                            onChange: S,
                                            className: `${s1.Y0} ${s1.$E}`,
                                            icon: (0, i.jsx)(sh.FiltersHorizontalIcon, {
                                                size: "custom",
                                                width: 20,
                                                height: 20,
                                                color: "currentColor",
                                            }),
                                        })
                                      : null,
                        }),
                        O
                            ? (0, i.jsxs)("div", {
                                  className: s1.fF,
                                  children: [
                                      (0, i.jsx)("div", { className: s1.MT }),
                                      (0, i.jsx)("button", {
                                          type: "submit",
                                          className: s1.rt,
                                          disabled: !et,
                                          "aria-label": T.intl.string(R.default.rxW2cl),
                                          children: (0, i.jsx)(sg.SendMessageIcon, {
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
    s9 = 1500;
function s8(e) {
    return e?.querySelector("[data-slate-editor]") ?? null;
}
var s6 = n(709753),
    ue = n(540338);
function ut(e) {
    if (e.at(-1)?.role !== "assistant") return null;
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if ("assistant" === n.role) {
            if (!(0, tV.BL)(n) || "plan_implemented" === n.kind) return null;
            if (null != n.proposal) return n.render_id;
        }
    }
    return null;
}
var un = n(986109);
let ul = a.createContext(null);
function ur(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: r,
            highlighted: s = !1,
            continuation: u = !1,
            onContextMenu: c,
        } = e,
        d = a.useContext(ul),
        [m, f] = a.useState(() => iE.Ay.useReducedMotion || (null != l && d?.current.has(l) === !0)),
        h = a.useCallback((e) => {
            e.target === e.currentTarget && f(!0);
        }, []);
    return (0, i.jsx)("li", {
        onContextMenu: c,
        onAnimationEnd: m ? void 0 : h,
        "data-conjure-entrance": !0,
        "data-role": t,
        "data-conjure-message": r,
        "data-conjure-row-key": l,
        className: o()(un.xk, { [un.g5]: m, [un.Qo]: s, [un.q3]: u }),
        children: n,
    });
}
let ui = new Map();
function ua(e, t, n) {
    let l = 0;
    for (let r = e.length - 1; r >= 0 && e[r].created_at > t; r--) {
        let t = e[r];
        "user" === t.role && (null == t.user_id || t.user_id === n) && l++;
    }
    return l;
}
let us = "live_behind",
    uu = "conjureTipDismissals",
    uo = new Set(),
    uc = new Set(),
    ud = 0;
function um() {
    let e = aO.w.get(uu);
    return { forever: e?.forever ?? [], app: e?.app ?? {}, anchor: e?.anchor ?? {} };
}
function uf(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    switch (e.dismissal) {
        case void 0:
            return !1;
        case "session":
            var l;
            return uo.has(((l = e.id), `${t}:${l}`));
        case "anchor":
            return null != n && um().anchor[t]?.[e.id] === n;
        case "app":
            return um().app[t]?.includes(e.id) === !0;
        case "forever":
            return um().forever.includes(e.id);
    }
}
function uh(e) {
    return (uc.add(e), () => uc.delete(e));
}
function ug(e, t) {
    let n = t?.type === "remixed" ? t.settings_keys : void 0;
    return (0, c.bG)([l0.A], () => null != n && n.length > 0 && lX({ keys: n }, l0.A.getSettings(e)), [n, e]) &&
        null != n
        ? { keys: n, note: T.intl.string(R.default.F2yVHg) }
        : null;
}
function up(e) {
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
let ux = [12e4];
var uv = n(292771);
function uj(e) {
    let { presentation: t, render: n } = e,
        l = (0, c.bG)([iE.Ay], () => iE.Ay.useReducedMotion),
        [r, s] = a.useState([{ presentation: t, leaving: !1 }]),
        u = r.find((e) => !e.leaving)?.presentation;
    u !== t &&
        s([
            ...r.filter((e) => e.presentation !== t).map((e) => ({ ...e, leaving: !0 })),
            { presentation: t, leaving: !1 },
        ]);
    let d = a.useRef(null),
        m = a.useRef(null),
        f = a.useRef(null),
        h = a.useRef(u);
    a.useLayoutEffect(() => {
        let e,
            t,
            n = d.current;
        if (null == n) return;
        let r = n.querySelector('[data-tip-layer="active"]'),
            i = r?.querySelector("[data-conjure-tip-icon]"),
            a = m.current,
            s = f.current,
            o = r?.offsetHeight ?? 0,
            c =
                null != i
                    ? ((e = n.getBoundingClientRect()),
                      { left: (t = i.getBoundingClientRect()).left - e.left, top: t.top - e.top, width: t.width })
                    : null;
        ((m.current = c), (f.current = o));
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
            className: uv.wg,
            children: r.map((e) =>
                (0, i.jsx)(
                    "div",
                    {
                        "data-tip-layer": e.leaving ? "leaving" : "active",
                        "aria-hidden": e.leaving || void 0,
                        className: o()(uv.qd, e.leaving ? uv.dv : uv.Hu),
                        children: n(e.presentation),
                    },
                    e.presentation,
                ),
            ),
        })
    );
}
function ub(e) {
    return null != e && !e.publishing && "review_permissions" === e.action;
}
var uy = n(247171);
function uk(e) {
    let { icon: t, tone: n, firstLine: l, className: r, children: a } = e;
    return (0, i.jsxs)("div", {
        className: o()(uy.row, r),
        children: [
            (0, i.jsx)(v.E, {
                tag: "span",
                variant: l,
                color: "none",
                className: o()(uy.gutter, uy[n]),
                "aria-hidden": !0,
                children: (0, i.jsx)(t, { size: "sm", color: "currentColor", "data-conjure-tip-icon": !0 }),
            }),
            (0, i.jsx)("div", { className: uy.content, children: a }),
        ],
    });
}
var uw = n(830205);
function uS(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, i.jsx)(uk, {
        icon: t,
        tone: "muted",
        firstLine: "body-sm/normal",
        className: uw.aK,
        children: (0, i.jsxs)("div", {
            className: uw.n8,
            children: [
                (0, i.jsx)(v.E, {
                    tag: "div",
                    variant: "body-sm/normal",
                    color: "text-muted",
                    className: uw.Qq,
                    children: l,
                }),
                null != n
                    ? (0, i.jsx)("div", {
                          className: uw.X8,
                          children: (0, i.jsx)(e4.m, {
                              text: T.intl.string(T.t.WAI6xu),
                              asContainer: !0,
                              children: (0, i.jsx)(ti.K, {
                                  "aria-label": T.intl.string(T.t.WAI6xu),
                                  icon: eY.XSmallIcon,
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
function uA(e) {
    let { projectId: t } = e,
        n = a.useContext(eU.bI);
    return (0, i.jsx)(uS, {
        icon: as.ShieldIcon,
        children: T.intl.format(R.default["0S9HY8"], {
            onReview: async () => {
                null != n && (await (0, eU.vL)(t, n.guildId));
            },
        }),
    });
}
var uC = n(443865),
    uN = n(716502);
function uI(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, i.jsx)(uk, {
        icon: t,
        tone: "brand",
        firstLine: "body-md/semibold",
        className: uN.Nr,
        children: (0, i.jsxs)("section", {
            className: uN.Qs,
            children: [
                l,
                null != n
                    ? (0, i.jsx)("div", {
                          className: uN.X8,
                          children: (0, i.jsx)(e4.m, {
                              text: T.intl.string(T.t.WAI6xu),
                              asContainer: !0,
                              children: (0, i.jsx)(ti.K, {
                                  "aria-label": T.intl.string(T.t.WAI6xu),
                                  icon: eY.XSmallIcon,
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
function uE(e) {
    let { children: t } = e;
    return (0, i.jsx)(v.E, {
        tag: "div",
        variant: "body-md/semibold",
        color: "text-strong",
        className: uN.DD,
        children: t,
    });
}
function u_(e) {
    let { children: t } = e;
    return (0, i.jsx)(v.E, {
        tag: "div",
        variant: "body-sm/normal",
        color: "text-muted",
        className: uN.rf,
        children: t,
    });
}
function uM(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: uN.o1, children: t });
}
var uR = n(95635);
function uT(e) {
    let { projectId: t, publish: n, onDismiss: l } = e,
        r = (0, eK.A)(t, n);
    return (0, i.jsx)(uS, {
        icon: uR.UploadIcon,
        onDismiss: l,
        children: T.intl.format(R.default.fWfeZ8, { onPublish: () => r("outdated_notice") }),
    });
}
let uP = [
    {
        id: "bot_permissions",
        priority: 3,
        resolve: function (e) {
            let { turn: t, publish: n } = e;
            return null != t && ub(n) ? "hint" : null;
        },
        render: (e, t) => {
            let {
                context: { projectId: n },
            } = t;
            return (0, i.jsx)(uA, { projectId: n });
        },
    },
    {
        id: us,
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
                (null != n.publishCta && aL(l, n.publishCta))
                ? null
                : null != (t = e.messagesSinceShown(us)) && t > 0 && t < 10
                  ? null
                  : "hint";
        },
        dismissal: "session",
        render: (e, t) => {
            let {
                context: { projectId: n, publish: l },
                dismiss: r,
            } = t;
            return null != l ? (0, i.jsx)(uT, { projectId: n, publish: l, onDismiss: r }) : null;
        },
    },
    {
        id: "ideas_intro",
        priority: 1,
        resolve: function (e) {
            let { turn: t, agentIdle: n, publish: l, justRemixed: r, noTurnsYet: i, ideasIntroAnchorId: a } = e;
            return !n || null == a || ub(l) ? null : null != t || r || i ? "card" : null;
        },
        dismissal: "anchor",
        render: (e, t) => {
            let {
                context: { onAskForIdeas: n },
                dismiss: l,
            } = t;
            return (0, i.jsxs)(uI, {
                icon: uC.LightbulbIcon,
                onDismiss: l,
                children: [
                    (0, i.jsx)(uE, { children: T.intl.string(R.default.OJlbhX) }),
                    (0, i.jsx)(u_, { children: T.intl.string(R.default["3vJBni"]) }),
                    (0, i.jsx)(uM, {
                        children: (0, i.jsx)(d.$, {
                            variant: "primary",
                            size: "sm",
                            text: T.intl.string(R.default["U/bLzU"]),
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
var uL = n(817921);
function u$(e) {
    let { projectId: t, messages: n, draftHasText: l, onAskForIdeas: r } = e,
        s = (function (e, t, n, l, r) {
            let i = (function (e, t, n, l, r) {
                let i,
                    s = (0, eU.Ay)(e),
                    u = (0, c.bG)([nC.default], () => nC.default.getCurrentUser()?.id),
                    o = t.at(-1),
                    d = null != o ? Math.max(o.created_at, o.finished_at ?? 0, o.settled_at ?? 0) : null,
                    m = (function (e, t) {
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
                    f = (function (e) {
                        for (let t = e.length - 1; t >= 0; t--) {
                            let n = e[t];
                            if (
                                "publish_notice" !== n.kind &&
                                "project_event" !== n.kind &&
                                "context_boundary" !== n.kind
                            ) {
                                if ("user" === n.role) return null;
                                if ((0, tV.BL)(n)) return n;
                                if (!(0, tV.B0)(e, t)) break;
                            }
                        }
                        return null;
                    })(t),
                    h = null == f || up(f) ? null : f,
                    g = (function (e) {
                        for (let t = e.length - 1; t >= 0; t--) {
                            let n = e[t];
                            if ("publish_notice" === n.kind && n.publishNotice?.commands_failed !== !0) return n;
                        }
                        return null;
                    })(t),
                    p = g?.publishNotice?.update === !1 && 0 === ua(t, g.created_at, u) ? g.id : null,
                    x = o?.projectEvent?.type === "remixed" ? o.projectEvent : null,
                    v = x?.id ?? p,
                    j = ug(e, x),
                    b = x?.settings_keys?.length ?? 0,
                    y = (0, c.bG)([l0.A], () => b > 0 && null == l0.A.getSettings(e), [b, e]),
                    k = (0, s6.WT)(e);
                return {
                    projectId: e,
                    turn: h,
                    publish: s,
                    draftHasText: n,
                    agentIdle:
                        (null == (i = (0, tV.Ji)(t)) || !!(0, tV.B0)(t, t.lastIndexOf(i))) &&
                        (null == f || !up(f)) &&
                        null == ut(t) &&
                        null == j &&
                        !y &&
                        0 === k.length,
                    idleMs: null != d ? Math.max(0, m - d) : 0,
                    justRemixed: null != x,
                    noTurnsYet: t.every(
                        (e) =>
                            "publish_notice" === e.kind || "project_event" === e.kind || "context_boundary" === e.kind,
                    ),
                    ideasIntroAnchorId: v,
                    messagesSinceShown: (n) => {
                        let l = ui.get(`${e}:${n}`);
                        return null != l ? ua(t, l, u) : null;
                    },
                    isDismissed: (t) => uf(t, e, v),
                    onAskForIdeas: l,
                };
            })(t, n, l, r, ux);
            a.useSyncExternalStore(uh, () => ud);
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
                                ui.set(`${e}:${t}`, n);
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
                                          if (null == e.dismissal || uf(e, t, n)) return;
                                          let l = um();
                                          switch (e.dismissal) {
                                              case "session":
                                                  var r;
                                                  uo.add(((r = e.id), `${t}:${r}`));
                                                  break;
                                              case "anchor":
                                                  if (null == n) return;
                                                  aO.w.set(uu, {
                                                      ...l,
                                                      anchor: { ...l.anchor, [t]: { ...l.anchor[t], [e.id]: n } },
                                                  });
                                                  break;
                                              case "app":
                                                  aO.w.set(uu, {
                                                      ...l,
                                                      app: { ...l.app, [t]: [...(l.app[t] ?? []), e.id] },
                                                  });
                                                  break;
                                              case "forever":
                                                  aO.w.set(uu, { ...l, forever: [...l.forever, e.id] });
                                          }
                                          (ud++, uc.forEach((e) => e()));
                                      })(e.tip, t, i.ideasIntroAnchorId)
                                : void 0,
                    },
                }))
            );
        })(uP, t, n, l, r);
    return 0 === s.length
        ? null
        : (0, i.jsx)(ur, {
              role: "assistant",
              continuation: !0,
              children: (0, i.jsx)("div", {
                  className: uL.X,
                  children: s.map((e) => {
                      let { tip: t, presentation: n, options: l } = e;
                      return (0, i.jsx)(uj, { presentation: n, render: (e) => t.render(e, l) }, t.id);
                  }),
              }),
          });
}
var uq = n(52133),
    uD = n(732159),
    uF = n(888366),
    uO = n(862026),
    uG = n(291192);
function uz(e) {
    let { projectId: t, contextSwitch: n } = e,
        l = a.useId(),
        r = (0, uO.L)(t, n);
    if (null == r) return null;
    let { action: s } = r;
    return (0, i.jsxs)("div", {
        className: uG.Ac,
        role: "group",
        "aria-labelledby": l,
        children: [
            (0, i.jsxs)("div", {
                className: uG.Sp,
                children: [
                    (0, i.jsx)("span", { className: uG.q3 }),
                    (0, i.jsxs)("span", {
                        className: uG.g8,
                        children: [
                            (0, i.jsx)(uF.ChatPlusIcon, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, i.jsx)(v.E, {
                                id: l,
                                tag: "span",
                                variant: "body-xs/semibold",
                                color: "text-default",
                                children: r.label,
                            }),
                        ],
                    }),
                    (0, i.jsx)("span", { className: uG.q3 }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: uG.nM,
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
                                          (0, i.jsx)(nD.Q, {
                                              text: s.text,
                                              textVariant: "body-sm/medium",
                                              disabled: s.disabled,
                                              onClick: () => {
                                                  var e;
                                                  return s.confirm
                                                      ? ((e = s.onPress),
                                                        void (0, K.mM)(() =>
                                                            Promise.resolve((t) =>
                                                                (0, i.jsx)(uD.u, {
                                                                    ...t,
                                                                    title: T.intl.string(R.default["i+xjZM"]),
                                                                    subtitle: T.intl.string(R.default.fMBZmD),
                                                                    confirmText: T.intl.string(R.default.i5f3Uo),
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
var uU = n(345942),
    uB = n(727419),
    uK = n(576705);
function uH(e) {
    let { guildId: t, update: n } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            " ",
            T.intl.format(n ? R.default.esEGL5 : R.default["XrN+Bg"], {
                onOpen: () => uB.A.open(t, ev.BEX.GUILD_AUTOMOD),
            }),
        ],
    });
}
var uV = n(976860);
function uW(e) {
    return (0, c.bG)([eR.Ay, ib.A], () => {
        let t = eR.Ay.getProject(e);
        return null == t ? "" : (ib.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
var uX = n(951465),
    uQ = n(369455);
function uZ(e) {
    var t, n, l;
    let r,
        a,
        { projectId: s, notice: u } = e,
        o = uW(s),
        d =
            null ==
            (a = (0, c.bG)([eR.Ay, n4.A], () => {
                let e = eR.Ay.getProject(s);
                return null == e || "guild" !== e.install_scope || null == e.guild_id
                    ? null
                    : (n4.A.getGuild(e.guild_id) ?? null);
            }))
                ? null
                : { guildId: a.id, name: a.name },
        m = (0, c.cf)([eR.Ay, eG.A, n4.A, uK.A], () => {
            let e = eR.Ay.getProject(s);
            if (null == e || "guild" !== e.install_scope || null == e.guild_id) return { automod: !1, guildId: null };
            let t =
                    e.supported_surfaces?.includes(ee.q7.AUTOMOD) === !0 ||
                    eG.A.getPublishStatus(s)?.surface === "automod",
                n = n4.A.getGuild(e.guild_id),
                l = null != n && uK.A.can(ev.xBc.MANAGE_GUILD, n);
            return { automod: t, guildId: t && l ? e.guild_id : null };
        });
    return (0, i.jsxs)(v.E, {
        variant: "body-md/normal",
        color: "text-default",
        children: [
            T.intl.format(
                ((t = u),
                (n = d?.name ?? null),
                (l = m.automod),
                (r = null != n),
                !0 === t.commands_failed
                    ? r
                        ? R.default.ESu5eZ
                        : R.default["PrQg+B"]
                    : !0 === t.channel_skipped
                      ? r
                          ? R.default.ZnQW4S
                          : R.default.ev23Cw
                      : t.update
                        ? r
                            ? R.default["LuS8a/"]
                            : R.default.gQzuLC
                        : l
                          ? R.default.KORRGl
                          : r
                            ? R.default["/npn7F"]
                            : R.default.MOrR29),
                {
                    name: o,
                    server: d?.name ?? "",
                    onOpenServer: () => {
                        null != d && (0, uU.u)(d.guildId);
                    },
                },
            ),
            null != m.guildId
                ? (0, i.jsx)(uH, { guildId: m.guildId, update: u.update })
                : !m.automod && u.update && null != u.published_revision
                  ? (0, i.jsx)(uY, { projectId: s, notice: u })
                  : null,
        ],
    });
}
function uY(e) {
    let { projectId: t, notice: n } = e,
        l = (function (e, t) {
            let n = s.useContext(eU.bI)?.guildId ?? null,
                l = t.published_revision ?? null,
                { sent: r, canOffer: i } = (0, c.cf)(
                    [eG.A, eR.Ay],
                    () => {
                        let r = eG.A.getPublishStatus(e),
                            i = eR.Ay.getProject(e);
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
                                (0, eR.jf)(i),
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
                      ? T.intl.format(R.default["35VEu5"], {
                            sentHook: (e, t) =>
                                (0, i.jsx)(
                                    tQ.D,
                                    {
                                        tag: "a",
                                        role: "link",
                                        className: uQ.Z,
                                        onClick: () =>
                                            (function (e) {
                                                let { guildId: t, channelId: n, messageId: l } = e;
                                                (0, uV.pX)(ev.BVt.CHANNEL(t, n, l));
                                            })(l.sent),
                                        children: e,
                                    },
                                    t,
                                ),
                        })
                      : T.intl.format(R.default["6/zJpD"], {
                            onSend: () => {
                                let e = (function (e, t) {
                                    let { publishedRevision: n, fallbackGuildId: l } = t,
                                        r = eR.Ay.getProject(e),
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
                                null != e && (0, uX.A)(e);
                            },
                        }),
              ],
          });
}
var uJ = n(73153),
    u0 = n(505527),
    u1 = n(367790),
    u2 = n(354777),
    u3 = n(491182),
    u4 = n(74096),
    u7 = n(549587),
    u5 = n(448368),
    u9 = n(21299),
    u8 = n(538355),
    u6 = n(715628),
    oe = n(752636),
    ot = n(9842),
    on = n(589022),
    ol = n(967198),
    or = n(531685),
    oi = n(503275);
let oa = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function os(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function ou(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function oo(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let r = ou(e, t),
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
    if (os(r) && os(i)) {
        let n = 0,
            l = t;
        for (; n < 32 && os(ou(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function oc(e, t) {
    let { streaming: n } = t,
        l = (0, c.bG)([iE.Ay], () => iE.Ay.useReducedMotion),
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
                      for (; i > 0 && oo(t, i);) i--;
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
    let m = a.useRef(0),
        f = a.useRef(0);
    (a.useEffect(() => {
        if (o)
            return (
                (f.current = 0),
                (m.current = requestAnimationFrame(function e(t) {
                    let n = 0 === f.current ? 32 : t - f.current;
                    if (n >= 32) {
                        f.current = t;
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
                                    for (; l > t + 1 && n - l < 12 && oa.has(e.charAt(l - 1));) l--;
                                    return oa.has(e.charAt(l - 1)) ? n : l;
                                })(t, r, Math.min(t.length, r + a));
                                let u = s;
                                for (; u < t.length && u - s < 32 && oo(t, u);) u++;
                                return u;
                            })({ target: e.target, revealed: e.length, elapsedMs: n });
                        l !== e.length && s({ target: e.target, length: l });
                    }
                    m.current = requestAnimationFrame(e);
                })),
                () => cancelAnimationFrame(m.current)
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
var od = n(624479),
    om = n(890377),
    of = n(92446),
    oh = n(957565),
    og = n(180227);
function op(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, i.jsx)("div", {
              className: o()(og.QE, { [og.Rn]: t }),
              children: (0, i.jsx)(i2.Ay, {
                  children: n.map((e) =>
                      (0, i.jsx)(
                          i2.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function ox(e) {
    return oh.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: T.intl.string(T.t.JrGD7E), icon: od.CopyIcon, onClick: () => (0, oh.C)(e) }]
        : [];
}
function ov(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: T.intl.string(R.default.CXtLD2),
                          tooltip: T.intl.string(R.default.DOb1HM),
                          icon: om.DoubleChevronSmallRightIcon,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: T.intl.string(R.default.urZwpN),
                          icon: eY.XSmallIcon,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, i.jsx)(op, { groupStart: n, actions: [...r, ...ox(t)] });
}
function oj(e) {
    let { content: t, groupStart: n, onRestoreVersion: l, onViewTrace: r } = e,
        a =
            null == l
                ? []
                : [{ id: "restore-version", label: T.intl.string(R.default.H8Jfhu), icon: tu.UndoIcon, onClick: l }],
        s = null == r ? [] : [{ id: "view-trace", label: "View Trace", icon: of.BugIcon, onClick: r }];
    return (0, i.jsx)(op, { groupStart: n, actions: [...a, ...ox(t), ...s] });
}
let ob = (0, iw.createChannelRecord)({ id: "conjure-builder", type: ev.rbe.DM }),
    oy = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function ok(e, t) {
    return null == e ? e : (0, i.jsx)("div", { className: o()(og.Yq, { [og.x1]: t }), children: e });
}
function ow(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
let oS = { hideSimpleEmbedContent: !0, allowList: !0, allowHeading: !0, allowLinks: !0, previewLinkTarget: !0 };
function oA(e, t, n) {
    let { content: l } = (0, u8.A)(e, oS),
        r = a.useMemo(() => ((0, ri.aW)(e.content) ? (0, u2.z2)(si.U, e, oS).content : null), [e]) ?? l,
        s = a.useMemo(() => ({ message: e, channel: ob, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, i.jsx)(u4.Ay, { className: n, message: e, content: r, compact: !1 })
          : (0, u6.A)(s, r);
}
function oC(e) {
    let [t, n] = a.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = a.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = a.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, u9.m)(e, ob, t.usernameProfile, l),
        u = (0, u9.Jo)(t.avatarProfile, l),
        o = (0, c.bG)([ol.A], () => ol.A.getGuildId()),
        d = (0, c.bG)([nC.default], () => nC.default.getCurrentUser()),
        m = a.useCallback(
            (t) => {
                let n = nC.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, i.jsx)(on.A, { ...t, user: n, currentUser: d, guildId: o ?? void 0 });
            },
            [d, o, e.author],
        );
    return {
        showAvatarPopout: t.avatarProfile,
        showUsernamePopout: t.usernameProfile,
        onClickAvatar: u,
        onClickUsername: s,
        onPopoutRequestClose: r,
        renderPopout: m,
        guildId: o ?? void 0,
    };
}
let oN = { formatInline: !0, allowGameMentions: !0 };
function oI(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        { content: s } = (0, u8.A)(n, oN),
        u = a.useMemo(() => {
            let e = "" === n.content ? null : (0, ri.aW)(n.content) ? (0, u2.z2)(si.U, n, oN).content : s;
            return null == l
                ? e
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsxs)("span", {
                              className: og.GV,
                              children: [
                                  (0, i.jsx)(h.ExperimentalDirectSelectIcon, {
                                      className: og.Rj,
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
            [nA.A],
            () => ({
                isReplyAuthorBlocked: nA.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: nA.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        m = (0, i0.X4)(n),
        f = (0, i0.X4)(t),
        g = oC(n);
    return (0, i.jsx)(u5.A, {
        repliedAuthor: m,
        baseAuthor: f,
        baseMessage: t,
        channel: ob,
        referencedMessage: { state: ot.a.LOADED, message: n },
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
function oE(e) {
    let { message: t, author: n } = e,
        l = oC(t);
    return (0, i.jsx)(u7.Ay, {
        message: t,
        channel: ob,
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
function o_(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, groupStart: s, onQueuedAction: u } = e,
        o = (0, oi.vm)(l),
        c = a.useMemo(() => (0, i0.FT)(o, null), [o]),
        d = a.useMemo(() => (0, lN.W1)(t), [t]),
        m = d?.body ?? t,
        f = (0, sI.Qu)(m),
        h = a.useMemo(() => {
            if (null == o) return null;
            let e = (0, ik.Ay)({ channelId: ob.id, content: m, author: o });
            return (0, iy.rh)({ ...e, timestamp: ow(n, e.timestamp), state: ev.cmJ.SENT });
        }, [m, o, n]);
    return null == h
        ? null
        : (0, i.jsx)(
              oM,
              {
                  message: h,
                  author: c,
                  content: m,
                  selected: d?.label,
                  accessories: r,
                  groupStart: s,
                  onQueuedAction: u,
              },
              f,
          );
}
function oM(e) {
    let { message: t, author: n, content: l, selected: r, accessories: a, groupStart: s = !0, onQueuedAction: u } = e,
        o = oA(t, l);
    return (0, i.jsx)(u3.A, {
        className: og.yE,
        author: n,
        childrenHeader: s ? (0, i.jsx)(oE, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? o
                : (0, i.jsxs)("div", {
                      className: og.zq,
                      children: [
                          (0, i.jsxs)("span", {
                              className: og.GV,
                              children: [
                                  (0, i.jsx)(h.ExperimentalDirectSelectIcon, {
                                      className: og.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  r,
                              ],
                          }),
                          (0, i.jsx)("span", { className: og.WO, children: o }),
                      ],
                  }),
        childrenAccessories: ok(a, "" !== l),
        childrenButtons: (0, i.jsx)(ov, { content: l, groupStart: s, onQueuedAction: u }),
    });
}
function oR(e) {
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
        { text: m, revealing: f } = oc(t, { streaming: (0, c.bG)([or.A], () => o && or.A.isFocused(), [o]) }),
        h = a.useMemo(() => (0, i0.FT)(null, null), []),
        g = a.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        p = r?.userId,
        x = (0, oi.vm)(p),
        v = a.useMemo(() => (null == r ? null : (0, lN.W1)(r.content)), [r]),
        j = a.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, ik.Ay)({ channelId: ob.id, content: v?.body ?? r.content, author: x });
            return (0, iy.rh)({ ...e, id: r.id, timestamp: ow(r.createdAt, e.timestamp), state: ev.cmJ.SENT });
        }, [r, v, x]),
        b = a.useMemo(() => (null == r ? void 0 : { channel_id: ob.id, message_id: r.id }), [r]),
        [y] = a.useState(() => (0, ik.Ay)({ channelId: ob.id, content: "", author: oy })),
        k = a.useMemo(
            () =>
                (0, iy.rh)({
                    ...y,
                    timestamp: ow(n, y.timestamp),
                    state: ev.cmJ.SENT,
                    ...(null != b ? { type: ev.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, n, b],
        ),
        w = a.useMemo(() => k.set("content", m), [k, m]),
        S = a.useMemo(
            () => (0, oe.A)({ message: k, channel: ob, author: g, guildId: void 0, isGroupStart: u }),
            [k, g, u],
        ),
        A = oA(w, m, og.OS);
    return (0, i.jsxs)("div", {
        className: og.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": f ? "true" : void 0,
        children: [
            (0, i.jsx)(u3.A, {
                className: og.yE,
                author: g,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, i.jsx)(oI, { baseMessage: k, referenced: j, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: S,
                childrenMessageContent: A,
                childrenAccessories: ok(l, "" !== m),
                disableInteraction: !0,
            }),
            d,
            u ? (0, i.jsx)("img", { className: og.st, src: "/assets/c07664a29f3ee5ed.svg", alt: "" }) : null,
        ],
    });
}
var oT = n(981879);
function oP(e) {
    let { messageId: t, reaction: n } = e,
        l = a.useMemo(
            () =>
                (0, iy.rh)(
                    { ...(0, ik.Ay)({ channelId: ob.id, content: "" }), id: `conjure:${t}`, state: ev.cmJ.SENT },
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
                (uJ.h.dispatch({
                    type: "MESSAGE_REACTION_ADD_USERS",
                    channelId: ob.id,
                    messageId: l.id,
                    users: [oy],
                    emoji: e,
                    reactionType: u0.v.NORMAL,
                }),
                    uJ.h.dispatch({
                        type: "MESSAGE_REACTION_SET_FETCHED",
                        channelId: ob.id,
                        messageId: l.id,
                        emoji: e,
                        reactionType: u0.v.NORMAL,
                    }));
            }
            return (
                t(),
                uJ.h.subscribe("CONNECTION_OPEN", t),
                () => {
                    uJ.h.unsubscribe("CONNECTION_OPEN", t);
                }
            );
        }, [l.id, n.emojiId, n.emoji]),
        (0, i.jsx)("div", {
            className: oT.H,
            children: (0, i.jsx)(u1.A, {
                message: l,
                channel: ob,
                disableReactionCreates: !0,
                disableReactionUpdates: !0,
                useChatFontScaling: !0,
                showTooltipWhenReadOnly: !0,
            }),
        })
    );
}
var oL = n(442433);
n(775443);
var o$ = n(990779),
    oq = n(155899);
function oD(e) {
    let { onSelect: t, onClose: n = oL.Z_, onRestoreVersion: l, onViewTrace: r } = e;
    return (0, i.jsx)(ek.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: n,
        "aria-label": T.intl.string(T.t.ogxXGq),
        onSelect: t,
        children: (0, i.jsxs)(ew.rX, {
            children: [
                null != l
                    ? (0, i.jsx)(ew.Dr, {
                          id: "restore-version",
                          label: T.intl.string(R.default.H8Jfhu),
                          icon: tu.UndoIcon,
                          action: l,
                      })
                    : null,
                null != r
                    ? (0, i.jsx)(ew.Dr, { id: "view-trace", label: "View Trace", icon: of.BugIcon, action: r })
                    : null,
            ],
        }),
    });
}
function oF(e) {
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
            settingsFloating: m = !1,
            secretFloating: f = !1,
            isNewest: h = !1,
            onPickIdea: g,
            onApprovePlan: p,
            onRestoreVersion: x,
        } = e,
        v = n.message,
        j =
            null != x
                ? "assistant" !== v.role || null == v.sourceSha
                    ? null
                    : {
                          sha: v.sourceSha,
                          authorName: "",
                          authorEmail: "",
                          authoredAt: new Date(v.created_at).toISOString(),
                          subject: v.content,
                      }
                : null,
        b = null != j && null != x ? () => oO(j, x) : void 0,
        y =
            ((t =
                F() && "assistant" === v.role && (0, tV.BL)(v)
                    ? (v.turn_id ?? v.steps.find((e) => null != e.turn_id)?.turn_id ?? v.id.replace(/^turn:/, ""))
                    : null),
            (0, c.bG)(
                [o$.A],
                () => {
                    let e =
                        null == t
                            ? null
                            : o$.A.getTimingTraces(l).findLast((e) => {
                                  let { name: n, spans: l } = e;
                                  return "turn" === n && l.find((e) => null == e.parent)?.attrs?.turn_id === t;
                              });
                    return null == e || e.live ? null : e.id;
                },
                [l, t],
            )),
        k =
            null != y
                ? () =>
                      (function (e, t) {
                          for (let n of (($ = { projectId: e, traceId: t }), [...L])) n(e);
                      })(l, y)
                : void 0,
        w = v.in_reply_to,
        S = v.restoreProposal;
    return (0, i.jsx)(ur, {
        rowKey: n.key,
        role: "assistant",
        continuation: !n.groupStart,
        onContextMenu:
            null != b || null != k
                ? (e) => {
                      var t, n, l;
                      return (
                          (t = e),
                          (n = b),
                          (l = k),
                          void (0, oL.jA)(t, (e) => (0, i.jsx)(oD, { ...e, onRestoreVersion: n, onViewTrace: l }))
                      );
                  }
                : void 0,
        children: (0, i.jsx)(oR, {
            groupStart: n.groupStart,
            buttons: (0, i.jsx)(oj, {
                groupStart: n.groupStart,
                content: n.content,
                onRestoreVersion: b,
                onViewTrace: k,
            }),
            content: n.content,
            createdAt: v.created_at,
            replyTo: r,
            onJumpToReplied: null != w && null != a ? () => a(w) : void 0,
            accessories: (0, i.jsx)(sc, {
                projectId: l,
                steps: v.steps,
                content: "",
                proposal: v.proposal,
                planVersion: s,
                interrupted: !0 === v.interrupted,
                hoistedProse: !0,
                hoistedAttachmentsHost: n.attachmentsHost,
                sideReply: n.sideReply,
                sideReplyAcknowledges: v.acknowledges,
                active: n.active,
                ideas: n.active ? void 0 : v.ideas,
                pickedIdeaIds: null == v.ideas ? void 0 : u,
                attachments: v.attachments,
                secretRequest: n.active || f ? void 0 : v.secretRequest,
                secretRequestId: v.render_id,
                secretRequestAwaiting: o,
                secretRequestStatus: d,
                settingsRequest: n.active || m ? void 0 : v.settingsRequest,
                settingsAskId: v.id,
                publishCta: n.active ? null : v.publishCta,
                turnId: (0, tV.lb)(v) ?? void 0,
                onPickIdea: g,
                onApprovePlan: p,
                restoreProposal: S,
                publishScheduleProposal: v.publishScheduleProposal,
                publishScheduleProposalCurrent: h,
                onRestoreProposal:
                    null != S && null != x && h
                        ? () =>
                              oO(
                                  {
                                      sha: S.sha,
                                      authorName: "",
                                      authorEmail: "",
                                      authoredAt: S.authored_at,
                                      subject: S.subject,
                                  },
                                  x,
                              )
                        : void 0,
            }),
        }),
    });
}
function oO(e, t) {
    (0, oq.F)({ onConfirm: () => t(e) });
}
var oG = n(288539),
    oz = n(677683),
    oU = n(677690),
    oB = n(159711);
function oK(e) {
    let t,
        n,
        { projectId: l } = e,
        { outcome: r, pinnedName: a } =
            ((t = (0, c.bG)([oz.A], () => oz.A.getOutcome(l))),
            (n = (0, c.bG)(
                [nS.A, nC.default, nA.A],
                () => {
                    let e = t?.status === "pinned" ? nS.A.getChannel(t.channelId) : null;
                    return null == e ? null : (0, nw.m1)(e, nC.default, nA.A);
                },
                [t],
            )),
            { outcome: t, pinnedName: n }),
        s = T.intl.string(R.default.UGAfl9);
    return null != r
        ? (0, i.jsx)(t3, {
              title: s,
              children: (0, i.jsx)(v.E, {
                  className: oB.r,
                  variant: "body-sm/normal",
                  color: "text-muted",
                  children:
                      "pinned" === r.status
                          ? T.intl.formatToPlainString(R.default.gKe6Lw, { channelName: a ?? "" })
                          : T.intl.string(R.default["+kpQ3v"]),
              }),
          })
        : (0, i.jsx)(t3, { title: s, children: (0, i.jsx)(oH, { projectId: l }) });
}
function oH(e) {
    let { projectId: t } = e,
        {
            guildId: n,
            channels: l,
            selected: r,
            setPicked: s,
            pinning: u,
            failed: o,
            pin: m,
            skip: f,
        } = (function (e) {
            var t;
            let n = (0, c.bG)([eR.Ay], () => eR.Ay.getProject(e), [e]),
                l =
                    ((t = n?.guild_id ?? null),
                    (0, c.yK)(
                        [n2.A, uK.A],
                        () =>
                            null == t
                                ? []
                                : n2.A.getChannels(t)
                                      .VOCAL.map((e) => {
                                          let { channel: t } = e;
                                          return t;
                                      })
                                      .filter(
                                          (e) => e.type === ev.rbe.GUILD_VOICE && uK.A.can(ev.xBc.MANAGE_CHANNELS, e),
                                      ),
                        [t],
                    )),
                [r, i] = a.useState(null),
                [s, u] = a.useState(!1),
                [o, d] = a.useState(!1),
                m = l.find((e) => e.id === r) ?? null,
                f = n?.application_id,
                h = a.useCallback(async () => {
                    if (null == m || null == f) return;
                    (u(!0), d(!1));
                    let t = await (0, oU.pk)(m.id, f);
                    (u(!1), t ? (0, oU.tg)(e, { status: "pinned", channelId: m.id }) : d(!0));
                }, [f, e, m]),
                g = a.useCallback(() => (0, oU.tg)(e, { status: "skipped" }), [e]);
            return {
                guildId: n?.guild_id ?? null,
                channels: l,
                selected: m,
                setPicked: i,
                pinning: s,
                failed: o,
                pin: h,
                skip: g,
            };
        })(t),
        h = (0, nQ.A)(n, "voice"),
        g = a.useMemo(() => {
            let e = new Set(l.map((e) => e.id));
            return (h ?? []).filter((t) => e.has(t.value));
        }, [l, h]);
    return (0, i.jsx)("div", {
        className: oB.r,
        children: (0, i.jsxs)(aM.B, {
            gap: 12,
            children: [
                (0, i.jsx)(v.E, {
                    variant: "body-md/normal",
                    color: "text-default",
                    children: T.intl.string(R.default["1vVBAw"]),
                }),
                g.length > 0
                    ? (0, i.jsx)(nv.Z, {
                          selectionMode: "single",
                          label: T.intl.string(R.default.peOi1H),
                          placeholder: T.intl.string(R.default["9+dfPT"]),
                          options: g,
                          value: r?.id ?? null,
                          onSelectionChange: (e) => s(e),
                          errorMessage: o ? T.intl.string(R.default.d7EeAm) : void 0,
                          disabled: u,
                          maxOptionsVisible: 4,
                          fullWidth: !0,
                      })
                    : (0, i.jsx)(v.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: T.intl.string(R.default.JVUsIY),
                      }),
                (0, i.jsxs)("div", {
                    className: oB.o,
                    children: [
                        (0, i.jsx)(d.$, {
                            variant: "secondary",
                            size: "sm",
                            text: T.intl.string(R.default.Iw0l8o),
                            disabled: u,
                            onClick: f,
                        }),
                        g.length > 0
                            ? (0, i.jsx)(d.$, {
                                  variant: "primary",
                                  size: "sm",
                                  text: T.intl.string(R.default.FYI3qr),
                                  disabled: null == r,
                                  loading: u,
                                  onClick: m,
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function oV(e, t, n) {
    return (0, i.jsx)(oG.A, { userId: e, content: `@${t}` }, n);
}
function oW(e) {
    let { projectId: t, event: n } = e,
        l = (function (e, t, n) {
            let l = t.actor_user_id;
            a.useEffect(() => {
                (0, oi.Y_)(l);
            }, [l]);
            let r = (0, c.bG)([nC.default], () => (null == l ? null : nC.default.getUser(l)), [l]),
                i = (0, iA.tx)(r),
                s = uW(e),
                u =
                    (0, c.bG)([n4.A], () => (null == t.guild_id ? null : n4.A.getGuild(t.guild_id)?.name), [
                        t.guild_id,
                    ]) ?? T.intl.string(R.default.R1tPlP),
                o = null == r || null == i ? null : { user: i, userHook: (e, t) => n(r.id, i, t) };
            switch (t.type) {
                case "app_removed":
                    return null == o
                        ? T.intl.format(R.default.Lwsrhg, { app: s, server: u })
                        : T.intl.format(R.default.qqePfT, { app: s, server: u, ...o });
                case "bot_removed":
                    return null == o
                        ? T.intl.format(R.default.mT7EQG, { app: s, server: u })
                        : T.intl.format(R.default["lA/crI"], { app: s, server: u, ...o });
                case "preview_bot_removed":
                    return null == o
                        ? T.intl.format(R.default["4LVIeo"], { app: s, server: u })
                        : T.intl.format(R.default.YJOV6D, { app: s, server: u, ...o });
                case "app_channel_deleted": {
                    let e = t.channel_name ?? "";
                    return null == o
                        ? T.intl.format(R.default["4VQfid"], { channel: e, server: u })
                        : T.intl.format(R.default.RlMIJN, { channel: e, server: u, ...o });
                }
                case "remixed":
                    return T.intl.format(R.default.mHCXtm, { source: t.source_name });
                case "voice_channel_pin":
                    return T.intl.string(R.default.UGAfl9);
                case "staff_notice":
                    return t.message;
            }
        })(t, n, oV),
        r = ug(t, n);
    return "voice_channel_pin" === n.type
        ? (0, i.jsx)(oK, { projectId: t })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(v.E, { variant: "body-md/normal", color: "text-default", children: l }),
                  null != r ? (0, i.jsx)(re, { projectId: t, request: r, notifyAgent: !1 }) : null,
              ],
          });
}
let oX = a.memo(
        function (e) {
            var t;
            let { row: n, projectId: l, highlighted: r, currentUserId: a, ...s } = e,
                u = n.message,
                o =
                    ((t = "user" === n.kind ? u.id : null),
                    nc.useState((e) => (null == t ? null : (e.byMessageKey[t] ?? null))));
            switch (n.kind) {
                case "user": {
                    let e = (0, ri.DW)(u.attachments, u.content),
                        t = null != e && e.length > 0 ? e : null;
                    return (0, i.jsx)(ur, {
                        rowKey: n.key,
                        role: "user",
                        anchorId: u.id,
                        highlighted: r,
                        continuation: !n.groupStart,
                        children: (0, i.jsx)(o_, {
                            groupStart: n.groupStart,
                            content: u.content,
                            createdAt: u.created_at,
                            userId: u.user_id,
                            accessories:
                                null != t || null != o || null != u.agentReaction
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              null != t ? (0, i.jsx)(sr.A, { projectId: l, attachments: t }) : null,
                                              null != o ? (0, i.jsx)(sS, { send: o }) : null,
                                              null != u.agentReaction
                                                  ? (0, i.jsx)(oP, { messageId: u.id, reaction: u.agentReaction })
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
                                    return (n) => (0, ra.tp)(e, t.id, n);
                            })(l, u, a),
                        }),
                    });
                }
                case "prose":
                    return (0, i.jsx)(ur, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, i.jsx)(oR, {
                            groupStart: n.groupStart,
                            content: n.content,
                            streaming: n.streaming,
                            createdAt: u.created_at,
                            accessories:
                                n.hostsAttachments && null != u.attachments
                                    ? (0, i.jsx)(sr.A, { projectId: l, attachments: u.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, i.jsx)(ur, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, i.jsx)(so, {
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
                    return (0, i.jsx)(ur, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, i.jsx)(oR, {
                            groupStart: n.groupStart,
                            content: null == u.publishNotice ? u.content : "",
                            createdAt: u.created_at,
                            accessories:
                                null == u.publishNotice
                                    ? void 0
                                    : (0, i.jsx)(uZ, { projectId: l, notice: u.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, i.jsx)(ur, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, i.jsx)(oR, {
                            groupStart: n.groupStart,
                            content: null == u.projectEvent ? u.content : "",
                            createdAt: u.created_at,
                            accessories:
                                null == u.projectEvent
                                    ? void 0
                                    : (0, i.jsx)(oW, { projectId: l, event: u.projectEvent }),
                        }),
                    });
                case "contextBoundary":
                    return (0, i.jsx)(ur, {
                        rowKey: n.key,
                        role: "assistant",
                        children:
                            null == u.contextSwitch
                                ? null
                                : (0, i.jsx)(uz, { projectId: l, contextSwitch: u.contextSwitch }),
                    });
                case "interrupted":
                    return (0, i.jsx)(ur, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, i.jsx)(so, { projectId: l, interrupted: !0, steps: u.steps }),
                    });
                case "legacyTodos":
                    return (0, i.jsx)(ur, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, i.jsx)(so, {
                            projectId: l,
                            steps: oQ,
                            active: !1,
                            checklistSuperseded: n.checklistSuperseded,
                            todos: u.todos,
                            provisionalTodo: u.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, i.jsx)(oF, { row: n, projectId: l, ...s });
            }
        },
        function (e, t) {
            return (
                (0, uq.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, uq.A)(e.row, t.row, ["message"]) &&
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
                (0, uq.A)(e.replyTo, t.replyTo) &&
                (0, uq.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let n of e) if (!t.has(n)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    oQ = [],
    oZ = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    oY = new WeakMap();
function oJ(e, t, n) {
    let l = Math.max(0, Math.min(e.length, n)),
        r = Math.max(0, Math.min(l, t));
    return { start: r, end: l, startKey: e[r] ?? null, endKey: l >= e.length ? null : (e[l - 1] ?? null) };
}
function o0(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
let o1 = ["wheel", "touchstart", "pointerdown", "keydown"];
function o2(e) {
    let t = e?.querySelectorAll("[data-conjure-plan-card]");
    return t?.[t.length - 1]?.closest("[data-conjure-row-key]") ?? null;
}
let o3 = a.memo(function (e) {
    let {
            projectId: t,
            messages: n,
            emptyState: l,
            onPickIdea: r,
            onAskForIdeas: s,
            draftHasText: u,
            onApprovePlan: d,
            floatingSettingsMessageId: m,
            floatingSecretRenderId: f,
            liveClarificationId: h,
            onRestoreVersion: g,
            scrollerRef: p,
            stickToBottomRef: x,
            pinned: b,
            onUnpin: y,
            handleRef: k,
            onShowsLatestChange: w,
        } = e,
        S = a.useRef(null),
        [A, C] = a.useState(null),
        N = a.useCallback((e) => {
            ((S.current = e), C(e));
        }, []),
        [I, E] = a.useState(null),
        _ = a.useRef(0);
    a.useEffect(() => () => window.clearTimeout(_.current), []);
    let M = a.useCallback((e) => {
            (E(e), window.clearTimeout(_.current), (_.current = window.setTimeout(() => E(null), 1600)));
        }, []),
        P = (0, c.bG)([eG.A], () => eG.A.getPublishStatus(t)),
        L = (0, c.bG)([nC.default], () => nC.default.getCurrentUser()?.id),
        $ = a.useMemo(() => {
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
                                        let t = (0, tH.lt)(e.steps);
                                        return null != t ? t : null != e.todos && e.todos.length > 0 ? e.todos : null;
                                    })(r) &&
                                (n && t.add(r.render_id), (n = !0));
                        }
                        return t;
                    })(e);
                for (let r of e) {
                    let e = l.has(r.render_id),
                        i = null != r.clarification && r.clarification.id === t,
                        a = oY.get(r);
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
                                (0, tV.ST)(e) ||
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
                        let i = !(0, tV.BL)(e),
                            a = rd({
                                steps: e.steps,
                                content: e.content,
                                hasProposal: null != e.proposal,
                                hasLiveClarification: n,
                                hasAttachments: (e.attachments?.length ?? 0) > 0,
                            }),
                            s = a.lastStreamedMessage?.key,
                            u = (0, tH.C6)(e.steps, { turnActive: i }),
                            { lastWork: o, open: c } = (0, tH.CT)(u, { turnActive: i }),
                            d = u.at(-1)?.index,
                            m = !1;
                        for (let n of u) {
                            if (null != n.prose && oZ.test(n.prose.content)) m = !0;
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
                                        turnActive: tW(e),
                                        checklistSuperseded: n.hasTodos && t,
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        let f = oZ.test(e.content ?? "");
                        if (
                            (!0 === e.interrupted || m || f
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
                            (a.showsClosingMessage && !f) ||
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
                    (oY.set(r, { superseded: e, liveCard: i, planned: s }), n.push(...s));
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
                        if (null != l) return aP(l, t) ? e[n].id : null;
                    }
                    return null;
                })(n, P)),
                n.every((t) => null == t.publishCta || t.id === e)
                    ? n
                    : n.map((t) => {
                          if (null == t.publishCta || t.id === e) return t;
                          let n = a$.get(t);
                          return (null == n && ((n = { ...t, publishCta: null }), a$.set(t, n)), n);
                      })),
                h,
            );
        }, [n, P, h]),
        q = a.useMemo(() => $.map((e) => e.key), [$]),
        [D, F] = a.useState(null),
        O = (function (e, t, n) {
            if (null == t) return oJ(e, e.length - 60, e.length);
            let l = null == t.endKey,
                r = l ? e.length : o0(e, t.endKey, t.end - 1) + 1,
                i = o0(e, t.startKey, t.start);
            return (l && n && r - i > 120 && (i = r - 60), oJ(e, i, r));
        })(q, D, b),
        G = a.useRef(O),
        z = a.useRef(q),
        U = a.useRef($),
        B = a.useRef(null),
        K = a.useRef(null),
        H = a.useRef(new Set()),
        V = a.useRef(null),
        W = a.useRef(!1),
        X = a.useCallback(() => {
            let e = p.current?.getScrollerNode(),
                t = W.current ? o2(S.current) : null;
            if (null == e || null == t) return;
            let n = new DOMMatrixReadOnly(getComputedStyle(t).transform).m42,
                l = t.getBoundingClientRect().top - n - e.getBoundingClientRect().top - 8;
            Math.abs(l) >= 1 && (e.scrollTop += l);
        }, [p]);
    a.useLayoutEffect(() => {
        let e = p.current?.getScrollerNode();
        if (null == e) return;
        let t = () => {
            W.current = !1;
        };
        for (let n of o1) e.addEventListener(n, t, { passive: !0 });
        return () => {
            for (let n of o1) e.removeEventListener(n, t);
        };
    }, [p]);
    let Q = a.useCallback(() => {
            let e = p.current?.getScrollerNode(),
                t = S.current;
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
            B.current = null != a && null != s ? { key: s, offset: a.getBoundingClientRect().top - n } : null;
        }, [p]),
        Z = a.useCallback(() => {
            let e = p.current?.getScrollerNode();
            if (null == e) return;
            let n = (function (e, t, n) {
                let { nearTop: l, nearBottom: r, pinned: i } = n;
                if (r && null != t.endKey) {
                    let n;
                    return ((n = Math.min(e.length, t.end + 30)), oJ(e, Math.max(t.start, n - 120), n));
                }
                if (!l) return null;
                if (0 === t.start) return "older";
                if (!i && !r) {
                    let n, l;
                    return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), oJ(e, n, l));
                }
                let a = Math.max(t.start - 30, t.end - 120);
                return a < t.start ? oJ(e, a, t.end) : null;
            })(z.current, G.current, {
                nearTop: e.scrollTop < 600,
                nearBottom: e.scrollHeight - e.clientHeight - e.scrollTop < 600,
                pinned: x.current,
            });
            "older" === n ? (0, eO.P6)(t) : null != n && F(n);
        }, [p, x, t]);
    a.useImperativeHandle(
        k,
        () => ({
            handleScroll() {
                (Q(),
                    F((e) => {
                        let t = G.current;
                        return null != e && e.startKey === t.startKey && e.endKey === t.endKey ? e : t;
                    }),
                    Z());
            },
            recordAnchor: Q,
            showLatest(e) {
                ((W.current = !1), (K.current = e ?? null), F(null));
            },
            snapshot() {
                let e = B.current;
                return null == e ? null : { window: G.current, anchor: e };
            },
            restore(e) {
                let { window: t, anchor: n } = e;
                if (!z.current.includes(n.key)) return !1;
                (y(), (B.current = n));
                let l = G.current;
                if (l.startKey === t.startKey && l.endKey === t.endKey) {
                    let e = p.current?.getScrollerNode(),
                        t = S.current?.querySelector(`[data-conjure-row-key="${CSS.escape(n.key)}"]`);
                    null != e &&
                        null != t &&
                        (e.scrollTop += t.getBoundingClientRect().top - e.getBoundingClientRect().top - n.offset);
                } else F(t);
                return !0;
            },
        }),
        [Q, Z, y, p],
    );
    let Y = a.useRef(null),
        J = a.useCallback(
            (e) => {
                var n;
                let l;
                ((Y.current = null), (W.current = !1));
                let r = S.current?.querySelector(`[data-conjure-message="${e}"]`);
                if (null != r) {
                    (y(), F(G.current), r.scrollIntoView({ block: "center", behavior: "smooth" }), M(e));
                    return;
                }
                let i = U.current.findIndex((t) => "user" === t.kind && t.message.id === e);
                if (-1 === i) {
                    (0, eO.P6)(t) && (Y.current = e);
                    return;
                }
                (y(),
                    (K.current = () => {
                        (S.current?.querySelector(`[data-conjure-message="${e}"]`)?.scrollIntoView({ block: "center" }),
                            M(e));
                    }),
                    F(((n = z.current), oJ(n, (l = Math.max(0, i - 30)), l + 60))));
            },
            [M, y, t],
        );
    (a.useEffect(() => {
        let e = Y.current;
        null != e && J(e);
    }, [$, J]),
        a.useLayoutEffect(() => {
            if (null == A) return;
            let e = A.getBoundingClientRect().height,
                t = new ResizeObserver((t) => {
                    let [n] = t,
                        l = n?.contentRect.height;
                    if (null != l && l !== e) {
                        if (((e = l), x.current)) return void p.current?.scrollToBottom();
                        (X(), Q());
                    }
                });
            return (t.observe(A), () => t.disconnect());
        }, [A, X, Q, p, x]));
    let ee = null == O.endKey;
    (a.useEffect(() => w?.(ee), [ee, w]),
        a.useLayoutEffect(() => {
            ((G.current = O), (z.current = q), (U.current = $));
        }),
        a.useLayoutEffect(() => {
            let e = p.current?.getScrollerNode(),
                l = S.current,
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
                    })(V, t, n);
            if (null != e && null != l) {
                let t = B.current;
                if (r && x.current && null != o2(l)) (y(), F(G.current), (W.current = !0), X());
                else if (x.current) p.current?.scrollToBottom();
                else if (W.current) X();
                else if (null != t) {
                    let n = Array.from(l.querySelectorAll("[data-conjure-row-key]")).find(
                            (e) => e.dataset.conjureRowKey === t.key,
                        ),
                        r = null == n ? 0 : n.getBoundingClientRect().top - e.getBoundingClientRect().top - t.offset;
                    0 !== r && (e.scrollTop += r);
                }
                let n = K.current;
                ((K.current = null), n?.(), Q(), Z());
            }
            H.current = new Set(q);
        }, [t, n, $, q, O.start, O.end, p, x, y, X, Q, Z]));
    let et = a.useMemo(() => ut(n), [n]),
        en = a.useMemo(
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
        el = a.useMemo(
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
        er = a.useMemo(
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
        ei = n.at(-1),
        ea =
            (ei?.role !== "assistant" || null == ei.awaitingUser || null == ei.secretRequest
                ? null
                : (0, tV.BL)(ei)
                  ? ei.awaitingUser
                  : null) ?? void 0,
        es = (0, c.bG)([l0.A], () => l0.A.getSettings(t)?.secrets, [t]),
        eu = (0, s6.WT)(t),
        eo = a.useMemo(() => (0, lB.Mv)(n, es), [n, es]);
    if (!(0, tV.i_)(n)) {
        if ("loading" === l)
            return (0, i.jsx)("ol", {
                className: o()(un.x7, un.jH),
                "aria-busy": !0,
                children: (0, i.jsx)("li", { className: un.Ub, children: (0, i.jsx)(j.y, {}) }),
            });
        let e = "unavailable" === l ? R.default.Td4Sf4 : R.default.V1QiNz;
        return (0, i.jsx)("ol", {
            className: un.x7,
            children: (0, i.jsx)(ur, { role: "assistant", children: (0, i.jsx)(oR, { content: T.intl.string(e) }) }),
        });
    }
    return (0, i.jsx)(ul.Provider, {
        value: H,
        children: (0, i.jsxs)("ol", {
            ref: N,
            className: un.x7,
            children: [
                $.slice(O.start, O.end).map((e) => {
                    let n = e.message;
                    if ("closing" !== e.kind)
                        return (0, i.jsx)(
                            oX,
                            {
                                row: e,
                                projectId: t,
                                highlighted: "user" === e.kind && I === n.id,
                                currentUserId: "user" === e.kind ? L : void 0,
                            },
                            e.key,
                        );
                    let l = n === ei;
                    return (0, i.jsx)(
                        oX,
                        {
                            row: e,
                            projectId: t,
                            highlighted: !1,
                            replyTo: null != n.in_reply_to ? er.get(n.in_reply_to) : void 0,
                            onJumpTo: J,
                            planVersion: en.get(n.render_id),
                            pickedIdeaIds: el.get(n.render_id),
                            secretRequestAwaiting: l ? ea : void 0,
                            secretRequestStatus: eo.get(n.render_id),
                            settingsFloating: n.id === m,
                            secretFloating: n.render_id === f,
                            isNewest: l,
                            onPickIdea: r,
                            onApprovePlan: n.render_id === et ? d : void 0,
                            onRestoreVersion: g,
                        },
                        e.key,
                    );
                }),
                ee
                    ? eu.map((e) =>
                          (0, i.jsx)(
                              ur,
                              {
                                  role: "assistant",
                                  continuation: !0,
                                  children: (0, i.jsx)(oR, {
                                      groupStart: !1,
                                      content: "",
                                      accessories: (0, i.jsx)(ue.K, { projectId: t, approval: e }),
                                  }),
                              },
                              e.id,
                          ),
                      )
                    : null,
                null != ea && ee
                    ? (0, i.jsx)(ur, {
                          role: "assistant",
                          continuation: !0,
                          children: (0, i.jsx)(oR, {
                              groupStart: !1,
                              content: "",
                              accessories: (0, i.jsx)(v.E, {
                                  variant: "body-xs/normal",
                                  color: "text-muted",
                                  children: T.intl.string(R.default.YR8A2v),
                              }),
                          }),
                      })
                    : null,
                ee ? (0, i.jsx)(u$, { projectId: t, messages: n, draftHasText: !0 === u, onAskForIdeas: s }) : null,
            ],
        }),
    });
});
var o4 = n(731084),
    o7 = n(336288),
    o5 = n(187447);
function o9(e) {
    let { activity: t, id: n } = e,
        l = (0, tK.j)(),
        { text: r, revealing: s } = oc(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
        u = a.useRef(null),
        c = a.useRef(!0),
        d = a.useRef(0),
        m = a.useCallback(() => {
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
            className: o5.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, i.jsx)(tz.Ch, {
                ref: u,
                onScroll: m,
                className: o5.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, i.jsx)("div", {
                    className: o()(su.PT, o5.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: iP.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var o8 = n(53659);
function o6(e) {
    let {
            activity: t,
            compacting: n = !1,
            saving: l = !1,
            restoring: r = !1,
            remixing: s = !1,
            recalling: u = !1,
            controlling: c = !1,
            publishPending: d = !1,
            publishing: m = !1,
            spoken: f,
            onSpokenChange: h,
        } = e,
        g = a.useRef(null),
        p = a.useId(),
        [x, j] = a.useState(null),
        b = (0, o4.xu)({
            activity: t,
            compacting: n,
            saving: l,
            restoring: r,
            remixing: s,
            recalling: u,
            controlling: c,
            publishPending: d,
            publishing: m,
        }),
        y = T.intl.string(b),
        k = b === o4.kx["0"],
        [w, S] = a.useState(f ?? y),
        A = (0, tK.j)();
    (l || (0, o4.E4)(y, w) || (!A && !k)) && w !== y && S(y);
    let C = a.useRef(y);
    (a.useEffect(() => {
        C.current = y;
    }, [y]),
        a.useEffect(() => {
            h?.(w);
        }, [w, h]));
    let N = a.useRef(null),
        I = a.useRef(w);
    a.useEffect(() => {
        I.current = w;
    }, [w]);
    let E = a.useRef(k),
        _ = a.useRef(0);
    (a.useEffect(() => {
        ((E.current = k), !k && (0, o4.E8)(I.current) && S(C.current));
    }, [k]),
        a.useEffect(() => {
            if (!A) return;
            let e = 0,
                t = 0;
            function n() {
                E.current
                    ? ((_.current = (0, o4.E8)(I.current) ? _.current + 1 : 0), S((0, o4.Ov)(_.current)))
                    : C.current !== I.current
                      ? S(C.current)
                      : N.current?.play();
            }
            return (
                (e = window.setTimeout(() => {
                    (n(), (t = window.setInterval(n, 2400)));
                }, 1800)),
                () => {
                    (window.clearTimeout(e), window.clearInterval(t));
                }
            );
        }, [A]));
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
        renderPopout: () => (0, i.jsx)(o9, { id: p, activity: t }),
        children: () =>
            (0, i.jsxs)(tQ.D, {
                innerRef: g,
                className: o()(o8.hF, M && o8.Xd),
                "aria-label": T.intl.string(
                    r
                        ? R.default.qqlUiW
                        : b === R.default.j8tmjK
                          ? R.default.j8tmjK
                          : k
                            ? o4.kx["0"]
                            : R.default["Uuj/gh"],
                ),
                "aria-expanded": L,
                "aria-describedby": L ? p : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": T.intl.string(b),
                onClick: $,
                children: [
                    (0, i.jsx)("span", {
                        className: o8.bl,
                        children: (0, i.jsx)(o7.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, i.jsx)("span", {
                        className: o8.xu,
                        "aria-hidden": !!c || !!k || void 0,
                        children: A
                            ? (0, i.jsx)(sd.o, {
                                  ref: N,
                                  text: w,
                                  variant: "body-xs/medium",
                                  color: "text-subtle",
                                  duration: 1e3,
                                  delay: null,
                                  className: o8.yE,
                              })
                            : (0, i.jsx)(v.E, {
                                  tag: "span",
                                  variant: "body-xs/medium",
                                  color: "text-subtle",
                                  className: o8.yE,
                                  children: w,
                              }),
                    }),
                ],
            }),
    });
}
let ce = { second: 1e3, minute: 6e4 };
function ct(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [n, l] = a.useState(() => Date.now());
    return (
        a.useEffect(() => {
            let n;
            if (null == e) return;
            let r = ce[t];
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
var cn = n(719374);
function cl(e) {
    let { startedAt: t, variant: n = "body-xs/medium" } = e,
        l = ct(t);
    return (0, i.jsx)(v.E, {
        tag: "span",
        variant: n,
        color: "text-muted",
        "aria-hidden": !0,
        className: cn.$,
        "data-conjure-turn-timer": !0,
        children: (0, rb.C7)(l),
    });
}
function cr(e) {
    let { startedAt: t } = e,
        n = ct(t, "minute");
    return (0, i.jsx)(t0.A, { role: "timer", children: (0, rb.Us)(n) });
}
var ci = n(885574),
    ca = n(242779),
    cs = n(436804);
function cu(e) {
    return e.toLocaleString();
}
function co(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, i.jsxs)("div", {
        className: cs.Q$,
        children: [
            (0, i.jsxs)("div", {
                className: cs.mf,
                children: [
                    (0, i.jsx)(v.E, { variant: "body-sm/medium", color: "text-default", children: t }),
                    (0, i.jsxs)(v.E, {
                        variant: "body-sm/medium",
                        color: "text-muted",
                        children: [cu((0, ca.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, i.jsxs)(v.E, {
                tag: "div",
                variant: "body-xs/normal",
                color: "text-muted",
                children: [
                    cu(n.input_tokens),
                    " in \xb7 ",
                    cu(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${cu(n.cache_creation_input_tokens)} cache write \xb7 ${cu(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function cc(e) {
    let { project: t } = e,
        n = (0, ca.wU)(t.compaction),
        l = (0, ca.wU)(t.classifier),
        r = (0, ca.wU)(t.image),
        a = (0, ca.wV)(t.orchestrator, t.codegen),
        s = (0, ca.wV)(a, n);
    return (0, i.jsxs)("div", {
        className: cs.si,
        role: "dialog",
        "aria-label": T.intl.string(R.default.p5EGzq),
        children: [
            (0, i.jsx)("div", {
                className: cs.Q$,
                children: (0, i.jsxs)("div", {
                    className: cs.mf,
                    children: [
                        (0, i.jsxs)(v.E, {
                            variant: "body-md/semibold",
                            color: "text-default",
                            children: [cu((0, ca.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, i.jsxs)(v.E, {
                            variant: "body-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(co, { label: T.intl.string(R.default["9Sj3SX"]), usage: a }),
            (0, i.jsx)(co, { label: T.intl.string(R.default.ANCEo3), usage: n }),
            (0, i.jsx)(co, { label: T.intl.string(R.default.ugL6D4), usage: l, cached: !1 }),
            (0, i.jsx)(co, { label: T.intl.string(R.default.DHr5On), usage: r, cached: !1 }),
            (0, i.jsxs)("div", {
                className: cs.mf,
                children: [
                    (0, i.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: T.intl.string(R.default["8OUg09"]),
                    }),
                    (0, i.jsx)(v.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        children: 0 === (0, ca.sj)(s) ? "\u2014" : `${Math.round(100 * (0, ca.CA)(s))}%`,
                    }),
                ],
            }),
        ],
    });
}
function cd(e) {
    let { project: t } = e,
        n = a.useRef(null);
    return (0, i.jsx)(ey.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, i.jsx)(cc, { project: t }),
        children: (e) =>
            (0, i.jsx)(tQ.D, {
                innerRef: n,
                className: cs.Y$,
                "aria-label": T.intl.string(R.default.Z96gxQ),
                ...e,
                children: (0, i.jsx)(ci.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var cm = n(990250);
function cf(e) {
    let { queued: t } = e,
        n = T.intl.string(R.default.hzgPbZ);
    return (0, i.jsxs)("div", {
        className: cm.nd,
        role: "dialog",
        "aria-label": n,
        "data-testid": "conjure-queued-card",
        children: [
            (0, i.jsxs)("div", {
                className: cm.wx,
                children: [
                    (0, i.jsx)(v.E, { variant: "body-md/semibold", color: "text-default", children: n }),
                    (0, i.jsx)(v.E, { variant: "body-xs/normal", color: "text-muted", children: t.length }),
                ],
            }),
            (0, i.jsx)(tz.Ch, {
                className: cm.XG,
                children: (0, i.jsx)("ul", {
                    className: cm.p_,
                    children: t.map((e) => (0, i.jsx)(ch, { content: e.content }, e.render_id)),
                }),
            }),
        ],
    });
}
function ch(e) {
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
              className: cm.AS,
              children: (0, i.jsx)(v.E, {
                  variant: "body-sm/normal",
                  color: "text-muted",
                  children: T.intl.string(R.default["07XimM"]),
              }),
          })
        : (0, i.jsxs)("li", {
              className: cm.AS,
              children: [
                  (0, i.jsx)(v.E, {
                      ref: n,
                      variant: "body-sm/normal",
                      color: "text-default",
                      lineClamp: l ? void 0 : 3,
                      className: cm.Qs,
                      children: t,
                  }),
                  s
                      ? (0, i.jsx)(nD.Q, {
                            variant: "secondary",
                            textVariant: "body-xs/medium",
                            text: T.intl.string(l ? R.default.nEMoeN : R.default["W+la29"]),
                            "aria-expanded": l,
                            onClick: () => r((e) => !e),
                        })
                      : null,
              ],
          });
}
function cg(e) {
    let { queued: t, className: n } = e,
        l = a.useRef(null);
    return (0, i.jsx)(ey.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, i.jsx)(cf, { queued: t }),
        children: (e) =>
            (0, i.jsx)(tQ.D, {
                innerRef: l,
                className: n,
                "data-testid": "conjure-queued-pill",
                ...e,
                children: (0, i.jsx)(v.E, {
                    tag: "span",
                    variant: "body-xs/medium",
                    color: "text-muted",
                    children: T.intl.formatToPlainString(R.default.REnNUn, { count: t.length }),
                }),
            }),
    });
}
var cp = n(997421);
function cx(e) {
    let {
            projectId: t,
            thinking: n,
            turnStartedAt: l,
            restoring: r = !1,
            remixStartedAt: s,
            recalling: u = !1,
            thinkingActivity: d,
            compacting: m,
            saving: f,
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
                    (0, o4.E8)(e) || e === T.intl.string(R.default.mKK6wB) || e === T.intl.string(R.default.j8tmjK)
                        ? null
                        : e,
                ),
            [],
        ),
        w = null == h ? null : (0, o4.uc)(h),
        S = null != s,
        A = s ?? (n ? l : void 0),
        C = n || r || S || !0 === f;
    return (0, i.jsxs)("div", {
        className: cp.jf,
        children: [
            (0, i.jsxs)("div", {
                className: cp.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    C || u || x || j
                        ? (0, i.jsx)(o6, {
                              activity: d,
                              compacting: m,
                              saving: f,
                              restoring: r,
                              remixing: S,
                              recalling: u,
                              controlling: x,
                              publishPending: j && C,
                              publishing: j,
                              spoken: b,
                              onSpokenChange: k,
                          })
                        : null,
                    null != A ? (0, i.jsx)(cl, { startedAt: A }) : null,
                ],
            }),
            null != A ? (0, i.jsx)(cr, { startedAt: A }) : null,
            0 === p.length ? null : (0, i.jsx)(cg, { queued: p, className: o()(cp.BP, cp.A1) }),
            null == h || null == w
                ? null
                : (0, i.jsxs)("span", {
                      className: cp.BP,
                      children: [
                          (0, i.jsx)(v.E, {
                              tag: "span",
                              variant: "body-xs/medium",
                              color: "text-muted",
                              "aria-label": w.aria,
                              children: w.text,
                          }),
                          (0, i.jsx)(cd, { project: h }),
                      ],
                  }),
            "open" === g
                ? null
                : (0, i.jsx)(v.E, {
                      tag: "span",
                      variant: "body-xs/medium",
                      color: "failed" === g ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": T.intl.formatToPlainString(R.default["tCo+ZM"], { status: (0, o4.Db)(g) }),
                      "data-conjure-conn": !0,
                      "data-state": g,
                      className: cp.XF,
                      children: (0, o4.Db)(g),
                  }),
        ],
    });
}
var cv = n(698638),
    cj = n(608711);
let cb = [T.intl.string(R.default["9w+Chc"]), T.intl.string(R.default.WAvmdq), T.intl.string(R.default.SKsrzl)];
function cy(e) {
    var t, n;
    let l,
        r,
        s,
        u,
        o,
        {
            projectId: m,
            restoreState: f,
            onRestoreVersion: h,
            onImportProject: g,
            escapeScopeRef: p,
            visible: x = !0,
        } = e,
        j = (0, c.bG)([lR.A], () => lR.A.getMessages(m), [m]),
        b = (0, c.bG)([eO.Ay], () => eO.Ay.getConnState(m), [m]),
        y = (0, c.bG)([lR.A], () => lR.A.getProjectUsage(m), [m]),
        k = (0, c.bG)([lR.A], () => lR.A.getThinkingActivity(m), [m]),
        w = (0, c.bG)([lR.A], () => lR.A.isCompacting(m), [m]),
        S = (0, c.bG)([lR.A], () => lR.A.isSaving(m), [m]),
        A = lP(m),
        C = (0, c.bG)([lI.A], () => lI.A.getModelSettings(m), [m]),
        N = a.useRef(null),
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
                m = a.useRef(!0),
                f = a.useCallback((e) => {
                    ((m.current = e), d(e));
                }, []);
            a.useLayoutEffect(() => {
                let t = e.current?.getScrollerNode();
                if (null != t) {
                    for (let e of o1) t.addEventListener(e, o, { passive: !0 });
                    return () => {
                        for (let e of o1) t.removeEventListener(e, o);
                    };
                }
            }, [e, o]);
            let h = a.useCallback(() => {
                let n = e.current;
                if (null == n) return;
                let r = n.getDistanceFromBottom(),
                    a = !s.current && r < 32 && m.current;
                t.current = a;
                let u = r > 1 || !m.current;
                (i((e) => (!u === e ? e : !u)), l((e) => (e === a ? e : a)));
            }, [e]);
            return {
                stickToBottomRef: t,
                pinned: n,
                atBottom: r,
                unpin: u,
                releasePinHold: o,
                showsLatest: c,
                showsLatestRef: m,
                handleShowsLatestChange: f,
                updatePin: h,
            };
        })(I),
        B = a.useCallback(() => {
            function e() {
                let e = N.current;
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
        H = a.useContext(X.A) === m;
    a.useLayoutEffect(() => {
        if (!H) return;
        let e = { position: Z.A.getProjectView(m).chatScroll };
        return ((M.current = e), () => (0, Q.g7)(m, { chatScroll: e.position }));
    }, [H, m]);
    let V = a.useRef(!H);
    (a.useLayoutEffect(() => {
        if (V.current || !(0, tV.i_)(j)) return;
        V.current = !0;
        let e = Z.A.getProjectView(m).chatScroll;
        null != e && _.current?.restore(e) !== !0 && null != M.current && (M.current.position = null);
    }, [j, m]),
        a.useLayoutEffect(() => {
            let e = N.current;
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
            (0, eO.ensureConnection)(m);
        }, [m]),
        (0, rs.E1)(m, (0, tK.j)()));
    let W = (0, G.rt)(m),
        Y = (function (e) {
            let t = (0, eU.Ay)(e),
                n = t?.guildId ?? null,
                l = (0, c.bG)([n4.A], () => (null == n ? null : (n4.A.getGuild(n)?.name ?? null))),
                [r, i] = a.useState(null),
                s = t?.missingSurface ?? null;
            return null == s || r === e
                ? null
                : {
                      message: T.intl.format("channel" === s ? R.default["1cm4fj"] : R.default.Lm7IRC, {
                          server: l ?? "",
                      }),
                      onDismiss: () => i(e),
                  };
        })(m),
        J = (function (e) {
            let t = (0, c.bG)([rn.A], () => rn.A.getSpendLimit(e), [e]);
            if (null == t) return null;
            let n = null == t.limitUsd ? null : rl.format(t.limitUsd);
            if ("blocked" === t.state) {
                let e = rt.A.getSubmitRequestURL();
                return {
                    blocked: !0,
                    message:
                        null == n
                            ? T.intl.format(R.default["bw/n4C"], { helpdeskURL: e })
                            : T.intl.format(R.default.GYqJXH, { limit: n, helpdeskURL: e }),
                };
            }
            if (null == t.limitUsd || null == n || t.limitUsd <= 0) return null;
            let l = Math.min(99, Math.floor((t.spentUsd / t.limitUsd) * 100));
            return { blocked: !1, message: T.intl.formatToPlainString(R.default.GHgG2B, { percent: l, limit: n }) };
        })(m),
        ee =
            ((l = (0, c.bG)([l_.A], () => l_.A.getFailure(m))),
            (r = a.useCallback(() => (0, lM.CM)(m), [m])),
            null == l
                ? null
                : {
                      message: T.intl.format(R.default.Up6Ssw, { reason: l }),
                      retry: { text: T.intl.string(R.default["ywA+ET"]), onClick: r },
                  }),
        et = (0, c.bG)([l_.A], () => l_.A.getSetupStartedAt(m), [m]),
        en = a.useCallback(
            (e, t) => {
                (0, eO.dv)(m, e, t);
            },
            [m],
        ),
        el = a.useCallback(
            (e, t, n) => {
                let l = n ?? en;
                0 === W.annotations.length
                    ? l(e, t)
                    : (l((0, lN.BL)({ annotations: W.annotations, metaComment: e, context: W.context }), t),
                      (0, G.mB)(m));
            },
            [W, en, m],
        ),
        er = a.useCallback(() => {
            (!(function (e) {
                let t = !1;
                for (let [n, l] of no)
                    l.projectId === e &&
                        (l.job?.cancel(),
                        (0, eO.re)(e, l.nonce),
                        (function (e) {
                            let t = no.get(e);
                            (no.delete(e), nd(e, null), t?.thumbUrl != null && URL.revokeObjectURL(t.thumbUrl));
                        })(n),
                        (t = !0));
                return t;
            })(m) ||
                lR.A.isThinking(m)) &&
                (0, eO.fu)(m);
        }, [m]),
        ei = a.useCallback((e) => (0, nf.RQ)(m, e.implementation_prompt), [m]),
        [ea, es] = (function (e) {
            let [t, n] = a.useState(() => ro(e)),
                [l, r] = a.useState(e),
                i = l !== e,
                s = i ? ro(e) : t;
            return (i && (r(e), n(s)), [s, n]);
        })(m),
        eu = a.useCallback(() => en(T.intl.string(R.default["t5CN3+"])), [en]),
        eo = a.useCallback((e, t, n) => (0, nf.RQ)(m, e, { clarificationAnswers: t, attachments: n }), [m]),
        ec = a.useCallback((e) => (0, lE.X)(m, e), [m]),
        ed = a.useCallback((e) => (0, e3.vX)(m, e), [m]),
        em = a.useCallback((e) => (0, e9.gn)(m, "chat", Array.from(e), ed), [m, ed]),
        ef = a.useCallback(() => (0, nf.RQ)(m, T.intl.string(R.default.Zc7gML)), [m]),
        eh = f?.status === "restoring",
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
        [ew, eS] = a.useState(null),
        eA = (function (e) {
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
                                summary: T.intl.string(R.default["o2++BO"]),
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
        })(m),
        eC = ep?.appBuildRequest != null && (0, tV.BL)(ep) && ep.appBuildRequest.id !== ew ? ep.appBuildRequest : null,
        eN = eA.request ?? (null == ey ? eC : null),
        eI = null == eA.request ? ey : null,
        eE = null != eN && eN === eA.request,
        { close: e_, sent: eM } = eA,
        eT = eA.request?.id,
        eP = a.useCallback(() => {
            eE ? e_() : null != eN && eS(eN.id);
        }, [eN, eE, e_]),
        eL = a.useCallback(
            (e) => {
                (null != eT && eM(eT),
                    (0, E.P0)({
                        text: T.intl.formatToPlainString(R.default.RZO35O, { names: e.map((e) => e.name).join(", ") }),
                        variant: "success",
                    }));
            },
            [eT, eM],
        ),
        e$ = (0, c.bG)([l0.A], () => l0.A.getSettings(m), [m]),
        [eq, eD] = a.useState(null),
        eF = l4(),
        eG =
            null != ep &&
            ((t = ep.id),
            (s = (0, lB.Mv)(j, e$?.secrets)),
            (u = l7(j)),
            j.some(
                (e) =>
                    "assistant" === e.role &&
                    e.id !== t &&
                    !!(0, tV.BL)(e) &&
                    ((null != e.secretRequest && "open" === s.get(e.render_id)) ||
                        (null != e.settingsRequest && !u.has(e.id) && !l5(e.settingsRequest, e$, eF.has(e.id)))),
            )),
        ez =
            null != ep &&
            "assistant" === ep.role &&
            null != ep.settingsRequest &&
            null == ep.secretRequest &&
            (0, tV.BL)(ep) &&
            ep.id !== eq &&
            ((n = ep.settingsRequest),
            (o = n.keys ?? []),
            null != e$ &&
                0 !== o.length &&
                o.every((e) => {
                    let t = e$.schema.find((t) => t.key === e);
                    return null != t && lW.has(t.type);
                })) &&
            lX(ep.settingsRequest, e$) &&
            !eG
                ? ep
                : null,
        eB = null == eA.request ? ez : null,
        eK = eB?.settingsRequest ?? null,
        eH = a.useCallback(() => {
            null != ez && eD(ez.id);
        }, [ez]),
        eV = null != eK,
        [eW, eX] = a.useState(null),
        eQ = e$?.secrets,
        eZ = a.useMemo(() => (0, lB.Qr)(j, (0, lB.Mv)(j, eQ)), [j, eQ]),
        eJ = null != eZ && eZ.render_id !== eW ? eZ : null,
        e0 = null != eI || null != eN || A ? null : eJ,
        e2 = a.useCallback(() => {
            null != eJ && eX(eJ.render_id);
        }, [eJ]),
        [e7, e5] = a.useState(null),
        e8 = eI?.id ?? eN?.id ?? e0?.render_id ?? eB?.id ?? (A ? "scope-setup" : void 0),
        e6 = null != ey || null != eN || null != eJ || null != ez || A;
    a.useLayoutEffect(() => {
        let e = I.current?.getScrollerNode(),
            t = e7?.firstElementChild;
        if (null == e7 || null == e || !(0, e1.vq)(t, HTMLElement) || null == e8) return;
        function n() {
            P.current && I.current?.scrollToBottom();
        }
        let l = new ResizeObserver(() => {
            let l = e.getBoundingClientRect().bottom - e7.getBoundingClientRect().top - t.offsetTop;
            (e.style.setProperty("--custom-conjure-docked-card-inset", `${Math.max(0, Math.round(l))}px`), n());
        });
        return (
            l.observe(t),
            l.observe(e, { box: "border-box" }),
            () => {
                (l.disconnect(), e.style.removeProperty("--custom-conjure-docked-card-inset"), n());
            }
        );
    }, [e7, e8, I, P]);
    let te = (0, c.bG)([lR.A], () => lR.A.hasLoadedHistory(m), [m]),
        tt = (function (e) {
            let t = lP(e),
                n = (0, c.bG)([eR.Ay], () => null != eR.Ay.getProject(e), [e]),
                l = (0, c.bG)([lR.A], () => lR.A.hasLoadedHistory(e), [e]),
                r = (0, c.bG)([lR.A], () => lR.A.getMessages(e), [e]),
                i = (0, c.bG)([eO.Ay], () => eO.Ay.getConnState(e), [e]),
                [s, u] = a.useState(0);
            return (
                a.useLayoutEffect(() => {
                    (0, lT.Iy)(e, () => u((e) => e + 1));
                }, [e, n, l, r, t, i]),
                s
            );
        })(m),
        tn = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: te,
            historyUnavailable: (0, c.bG)([lR.A], () => lR.A.isHistoryUnavailable(m), [m]),
            connState: b,
        }),
        tl = !(0, tV.i_)(j),
        tr = "loading" === tn && tl,
        ta = a.useMemo(() => {
            let e = 0;
            for (let t = 0; t < m.length; t++) e = (31 * e + m.charCodeAt(t)) % 0x7fffffff;
            return cb[e % cb.length];
        }, [m]),
        ts = ex ? T.intl.string(R.default.Zc7gML) : "greeting" === tn && tl ? ta : null,
        tu = a.useMemo(() => {
            for (let e = j.length - 1; e >= 0; e--) {
                let t = j[e];
                if ("assistant" === t.role && !(0, tV.BL)(t)) return t;
            }
        }, [j]),
        to = null != tu,
        tc = a.useMemo(() => j.filter((e) => "user" === e.role && "queued" === e.disposition), [j]),
        td = null != tu ? (0, rr.S)(tu) : void 0,
        tm = ex && eg ? ef : void 0,
        tf = a.useCallback(() => (0, nf.RQ)(m, T.intl.string(R.default.EMgIuY)), [m]),
        [th, tg] = a.useState(null),
        [tp, tx] = a.useState(to);
    (tp !== to && (tx(to), to || tg(null)),
        a.useEffect(() => {
            if (!to) return;
            let e = I.current?.getScrollerNode(),
                t = e?.querySelector('[data-conjure-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let n = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? tg(null)
                        : tg(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (n.observe(t), () => n.disconnect());
        }, [to, tu?.steps, F]));
    let tv = F ? th : "bottom",
        tj = a.useMemo(() => (null != tu ? (0, tX.b9)(tu.steps) : ""), [tu]),
        tb = a.useMemo(() => (null != tu ? ((0, tH.lt)(tu.steps) ?? tu.todos) : void 0), [tu]),
        ty = tu?.provisionalTodo,
        tk = null != tu && tW(tu),
        tw = a.useMemo(() => {
            var e;
            return null != tu ? ((e = tu.steps), rA((0, tH.Jf)(e, !0).tasks)) : void 0;
        }, [tu]);
    return (0, i.jsxs)("section", {
        ref: N,
        "data-conjure-chat": !0,
        className: cj.TE,
        children: [
            eg
                ? (0, i.jsx)(tB.A, {
                      title: T.intl.string(R.default.gy7byi),
                      description: T.intl.string(R.default["dkv/WO"]),
                      icons: cv.ir,
                      onDrop: em,
                  })
                : null,
            (0, i.jsx)(na, {
                onJumpToActivity: B,
                line: tj,
                placement: to && "top" === tv ? "top" : null,
                todos: tb,
                todosLive: tk,
                provisionalTodo: ty,
                agents: tw,
            }),
            (0, i.jsxs)("div", {
                className: cj.JX,
                children: [
                    (0, i.jsx)(tz.Ch, {
                        ref: I,
                        onScroll: K,
                        scrollbarGutter: tr ? "both-edges" : "stable",
                        className: [cj.N$, $ ? null : cj.hB, eV ? cj.J9 : null].filter(Boolean).join(" "),
                        children: (0, i.jsx)(ri.Fu.Provider, {
                            value: m,
                            children: (0, i.jsx)(o3, {
                                projectId: m,
                                messages: j,
                                emptyState: tn,
                                floatingSettingsMessageId: ez?.id,
                                floatingSecretRenderId: e0?.render_id,
                                liveClarificationId: eI?.id,
                                onPickIdea: eg ? ei : void 0,
                                onAskForIdeas: eg ? eu : void 0,
                                draftHasText: ea,
                                onApprovePlan: eg ? tf : void 0,
                                onRestoreVersion: eh || to ? void 0 : h,
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
                        className: cj.NJ,
                        children: (0, i.jsx)(cx, {
                            projectId: m,
                            thinking: to,
                            turnStartedAt: td,
                            restoring: eh,
                            remixStartedAt: et,
                            recalling: tr,
                            thinkingActivity: k,
                            compacting: w,
                            saving: S,
                            projectUsage: y,
                            connState: b,
                            queued: tc,
                        }),
                    }),
                    A
                        ? (0, i.jsx)("div", { ref: e5, className: cj.B5, children: (0, i.jsx)(lz, { projectId: m }) })
                        : null,
                    null == eI
                        ? null
                        : (0, i.jsx)("div", {
                              ref: e5,
                              className: eV ? `${cj.B5} ${cj.J9}` : cj.B5,
                              children:
                                  null != eI.install_scope_switch
                                      ? (0, i.jsx)(
                                            lU,
                                            {
                                                projectId: m,
                                                clarification: eI,
                                                offer: eI.install_scope_switch,
                                                onKept: ek,
                                            },
                                            eI.id,
                                        )
                                      : (0, i.jsx)(
                                            lC,
                                            {
                                                projectId: m,
                                                clarification: eI,
                                                onSubmit: eg ? eo : void 0,
                                                onDismiss: ek,
                                            },
                                            eI.id,
                                        ),
                          }),
                    null == eN
                        ? null
                        : (0, i.jsx)("div", {
                              ref: e5,
                              className: cj.B5,
                              children: (0, i.jsx)(
                                  nk,
                                  { projectId: m, request: eN, canSend: eg, onDismiss: eP, onSent: eE ? eL : void 0 },
                                  eN.id,
                              ),
                          }),
                    e0?.secretRequest == null
                        ? null
                        : (0, i.jsx)("div", {
                              ref: e5,
                              className: cj.B5,
                              children: (0, i.jsx)(
                                  lJ,
                                  {
                                      projectId: m,
                                      cardId: e0.render_id,
                                      request: e0.secretRequest,
                                      status: "open",
                                      onDismiss: e2,
                                  },
                                  e0.render_id,
                              ),
                          }),
                    null == eK
                        ? null
                        : (0, i.jsx)("div", {
                              ref: null == eI && null == eN ? e5 : void 0,
                              className: cj.B5,
                              children: (0, i.jsx)(
                                  re,
                                  { askId: eB?.id, projectId: m, request: eK, onDismiss: eH },
                                  eB?.id,
                              ),
                          }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: cj.Jx,
                children: [
                    (0, i.jsx)(na, {
                        onJumpToActivity: B,
                        line: tj,
                        placement: to && "bottom" === tv ? "bottom" : null,
                        todos: tb,
                        todosLive: tk,
                        provisionalTodo: ty,
                        agents: tw,
                    }),
                    0 === W.annotations.length
                        ? null
                        : (0, i.jsxs)("div", {
                              className: cj.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, i.jsx)(v.E, {
                                      variant: "body-sm/medium",
                                      color: "text-default",
                                      children: T.intl.formatToPlainString(R.default["7b49dS"], {
                                          count: W.annotations.length,
                                      }),
                                  }),
                                  (0, i.jsx)(v.E, {
                                      variant: "body-xs/normal",
                                      color: "text-muted",
                                      children: T.intl.string(R.default["5zG+CR"]),
                                  }),
                                  (0, i.jsx)(d.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: T.intl.string(R.default["/zOv9+"]),
                                      onClick: () => (0, G.mB)(m),
                                  }),
                              ],
                          }),
                    null == ee
                        ? null
                        : (0, i.jsx)("div", {
                              className: cj.qB,
                              children: (0, i.jsx)(tU.w, {
                                  type: "critical",
                                  role: "alert",
                                  message: ee.message,
                                  action: ee.retry,
                              }),
                          }),
                    null == Y
                        ? null
                        : (0, i.jsxs)("div", {
                              className: cj.Db,
                              children: [
                                  (0, i.jsx)(tU.w, { type: "warning", role: "status", message: Y.message }),
                                  (0, i.jsx)("div", {
                                      className: cj.jU,
                                      children: (0, i.jsx)(e4.m, {
                                          text: T.intl.string(T.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, i.jsx)(ti.K, {
                                              "aria-label": T.intl.string(T.t.WAI6xu),
                                              icon: eY.XSmallIcon,
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
                              className: cj.qB,
                              children: (0, i.jsx)(tU.w, {
                                  type: J.blocked ? "critical" : "warning",
                                  role: J.blocked ? "alert" : "status",
                                  message: J.message,
                              }),
                          }),
                    (0, i.jsx)(
                        s5,
                        {
                            projectId: m,
                            escapeScopeRef: p,
                            canSend: eg,
                            running: to,
                            restoring: eh,
                            onSend: el,
                            hasPendingContext: W.annotations.length > 0,
                            onInterrupt: eg ? er : void 0,
                            onUploadFile: ed,
                            onImport: g,
                            onSendToOtherProjects: e6 ? void 0 : eA.open,
                            onApprove: tm,
                            suggestion: ts,
                            questionOpen: e6,
                            secretPending: null != e0,
                            modelSettings: C,
                            onModelSettingsChange: ec,
                            onDraftHasTextChange: es,
                            inputLocked: A,
                            aiPaused: J?.blocked === !0,
                            visible: x,
                        },
                        tt,
                    ),
                ],
            }),
        ],
    });
}
var ck = n(761508),
    cw = n(209695),
    cS = n(207438),
    cA = n(683438),
    cC = n(721507);
function cN(e, t) {
    return String(e).padStart(t, "0");
}
function cI(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let n = Date.parse(e);
    if (Number.isNaN(n)) return null;
    let l = new Date(n),
        r = `${cN(l.getHours(), 2)}:${cN(l.getMinutes(), 2)}:${cN(l.getSeconds(), 2)}`;
    return "millis" === t ? `${r}.${cN(l.getMilliseconds(), 3)}` : r;
}
var cE = n(667931);
let c_ = {
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
    cM = { running: "Running", ok: "Done", error: "Failed" };
function cR(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function cT(e) {
    var t;
    return (t = Math.round(e)) < 1e3 ? `${t}ms` : `${(t / 1e3).toFixed(1)}s`;
}
function cP(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function cL(e) {
    return cT(e.count > 1 ? e.totalMs : e.end - e.start);
}
let c$ = ["Arguments", "Result", "Usage", "Details"];
function cq(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function cD(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function cF(e) {
    let t = (0, cE.bM)(e)?.end;
    return null != t ? `${(t / 1e3).toFixed(2)}s` : (0, cE.lp)(e) ? "interrupted" : "still running";
}
function cO(e) {
    return [cI(new Date(e.started_at).toISOString()) ?? "", cP(e.spans.length), (0, cE.Sj)((0, cE.bM)(e)?.attrs)]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function cG(e) {
    let t = (0, cE.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let r of e.spans) {
        let { service: e, category: i } = (0, cE.N5)(r);
        (n.set(i, (n.get(i) ?? 0) + (t.get(r.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += cz(r, "in")),
                (l.output += cz(r, "out")),
                (l.cacheRead += cz(r, "cache_read")),
                (l.cacheWrite += cz(r, "cache_write")),
                (l.costUsd += cz(r, "cost_usd"))));
    }
    let r = cE.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: r, busyMs: r.reduce((e, t) => e + t.ms, 0), model: l };
}
function cz(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
var cU = n(738188),
    cB = n(430993),
    cK = n(364840),
    cH = n(224640),
    cV = n(20742);
let cW = { collapsed: new Set(), revealed: new Set() };
var cX = n(872892);
let cQ = {
    op: cX.Q,
    model: cX.i3,
    tool: cX.dH,
    setup: cX.kc,
    worktree: cX.Qx,
    sandbox: cX.QH,
    build: cX.F1,
    platform: cX.Op,
    other: cX.fv,
};
function cZ(e) {
    let { stats: t } = e,
        n = (function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      cP(t.calls, "model call"),
                      `${cR(t.input)} in`,
                      `${cR(t.output)} out`,
                      `${cR(t.cacheRead)} cache read`,
                      `${cR(t.cacheWrite)} cache write`,
                      cD(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, i.jsxs)("div", {
        className: cX.M1,
        children: [
            (0, i.jsx)("div", {
                className: cX.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, i.jsx)(
                              "div",
                              {
                                  className: `${cX.DJ} ${cQ[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, i.jsx)("div", {
                className: cX.o1,
                children: cE.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${cT(n)}`;
                    return (0, i.jsxs)(
                        "span",
                        {
                            className: cX.fI,
                            children: [
                                (0, i.jsx)("span", { className: `${cX.nf} ${cQ[e]}` }),
                                (0, i.jsx)(v.E, { variant: "body-xs/normal", color: "text-muted", children: c_[e] }),
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
function cY(e) {
    return `conjure-perf-trace-${e}`;
}
function cJ(e) {
    let { start: t, end: n, extent: l, barClass: r, duration: a } = e,
        s = (t / l) * 100,
        u = ((n - t) / l) * 100;
    return (0, i.jsxs)("div", {
        className: cX.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(u) },
        children: [
            (0, i.jsx)("div", { className: r }),
            (0, i.jsx)(v.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${cX.p0} ${s + u > 85 ? cX.EU : cX.jh}`,
                children: a,
            }),
        ],
    });
}
function c0(e) {
    let { node: t, extent: n, collapsed: l, selected: r, onSelect: s, onToggle: u, onExpandSubtree: o } = e,
        c = t.children.length > 0,
        d = l ? t1.ChevronSmallRightIcon : eA.ChevronSmallDownIcon,
        m = a.useCallback(
            (e) => {
                (e.shiftKey && o(t.key), s(t.key));
            },
            [t.key, o, s],
        ),
        f = a.useCallback(
            (e) => {
                (e.stopPropagation(), e.shiftKey ? o(t.key) : u(t.key));
            },
            [t.key, o, u],
        );
    return (0, i.jsxs)(tQ.D, {
        tag: "div",
        role: "treeitem",
        id: cY(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !l : void 0,
        "aria-selected": r,
        className: `${cX.$y} ${r ? cX.wQ : ""}`,
        onClick: m,
        children: [
            (0, i.jsxs)("div", {
                className: cX.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, i.jsx)(tQ.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: cX.ai,
                              onClick: f,
                              children: (0, i.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, i.jsx)("span", { className: cX.YJ }),
                    (0, i.jsx)(v.E, {
                        variant: "body-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: cX.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, i.jsx)("span", { className: `${cX.nf} ${cQ[t.category]}` }),
                    (0, i.jsx)(v.E, {
                        variant: "body-sm/semibold",
                        color: "text-strong",
                        className: cX.eu,
                        children: t.service,
                    }),
                    (0, i.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        className: cX.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, i.jsx)(v.E, {
                              variant: "body-xs/semibold",
                              color: "text-default",
                              className: cX.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, i.jsx)(cU.WarningIcon, { size: "xs", color: "currentColor", className: cX.ik })
                        : null,
                ],
            }),
            (0, i.jsx)(cJ, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${cX.M0} ${cX.Nh}`
                    : t.running
                      ? `${cX.M0} ${cX.rF}`
                      : `${cX.M0} ${cQ[t.category]}`,
                duration: cL(t),
            }),
        ],
    });
}
function c1(e) {
    let { row: t, extent: n, selected: l, onReveal: r } = e;
    return (0, i.jsxs)(tQ.D, {
        tag: "div",
        role: "treeitem",
        id: cY(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": l,
        className: `${cX.$y} ${l ? cX.wQ : ""}`,
        onClick: () => r(t.parentKey),
        children: [
            (0, i.jsxs)("div", {
                className: cX.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, i.jsx)("span", {
                        className: cX.ai,
                        children: (0, i.jsx)(t1.ChevronSmallRightIcon, { size: "xs", color: "currentColor" }),
                    }),
                    (0, i.jsx)("span", { className: cX.U9 }),
                    (0, i.jsx)("span", { className: `${cX.nf} ${cX.dL}` }),
                    (0, i.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        className: cX.MQ,
                        children: cP(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, i.jsx)(cJ, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${cX.M0} ${cX.ab} ${cX.dL}`,
                duration: cT(t.totalMs),
            }),
        ],
    });
}
function c2(e) {
    let { node: t } = e;
    return null == t
        ? (0, i.jsx)(v.E, {
              variant: "body-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, i.jsxs)("div", {
              className: cX._0,
              children: [
                  (0, i.jsxs)("div", {
                      className: cX.TQ,
                      children: [
                          (0, i.jsx)("span", { className: `${cX.nf} ${cQ[t.category]}` }),
                          (0, i.jsx)(v.E, { variant: "body-sm/semibold", color: "text-strong", children: t.service }),
                          (0, i.jsx)(v.E, { variant: "body-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [cq("Start", `+${cT(e.start)}`), cq("Duration", cL(e))];
                      e.count > 1
                          ? t.push(
                                cq("Calls", String(e.count)),
                                cq("Longest call", cT(e.maxMs)),
                                cq("Spread over", cT(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(cq("Self time", cT(e.selfMs)));
                      let n = e.span.waits_on;
                      null != n && t.push(cq("Waited on", `${n.span_name} in ${n.trace_name}`));
                      let l = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      (l.length > 0 && t.push(cq("Notes", l.join(", "))),
                          null != e.span.error && t.push(cq("Error", e.span.error)));
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
                              s = "cost_usd" === t ? cD(Number(n)) : String(n);
                          r.set(l, [...(r.get(l) ?? []), cq(t.replace(/_/g, " "), s)]);
                      }
                      return [
                          { title: null, rows: t },
                          ...c$.flatMap((e) => {
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
                                            className: cX.xd,
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
                                                            className: cX.vl,
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
function c3(e) {
    let { trace: t } = e,
        n = a.useMemo(() => cG(t), [t]);
    return (0, i.jsx)(cZ, { stats: n });
}
function c4(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = a.useMemo(() => (null == e ? null : (0, cE.TK)(e)), [e]),
                [n, l] = a.useState(() => (null == t ? cW : (0, cE.hB)(t))),
                [r, i] = a.useState(null),
                s = a.useRef(null == t ? new Set() : (0, cE.x7)(t));
            a.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, cE.x7)(t)), l((n) => (0, cE._0)(n, t, e)));
            }, [t]);
            let u = a.useMemo(() => (null == t ? [] : (0, cE.wu)(t, n)), [t, n]),
                o = a.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, cE.IE)(t, e);
                        null != n && l((e) => (0, cE.TN)(e, n));
                    },
                    [t],
                ),
                c = a.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = a.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, cE.IE)(t, e);
                        null != n && l((e) => (0, cE.H$)(e, n));
                    },
                    [t],
                ),
                m = a.useCallback(() => {
                    null != t && l((0, cE.vH)(t));
                }, [t]),
                f = a.useCallback(() => {
                    null != t && l((0, cE.rQ)(t));
                }, [t]),
                h = a.useCallback(() => {
                    null != t && l((0, cE.hB)(t));
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
                expandAll: m,
                collapseAll: f,
                reset: h,
            };
        })(t),
        { rows: l, collapsed: r, selected: s, selectedKey: u, select: o, toggle: c, reveal: m, expandSubtree: f } = n,
        h = (0, cE.dj)(t),
        g = a.useMemo(() => (0, cE.nF)(h), [h]),
        p = g.length > 1 ? ((g[1] - g[0]) / h) * 100 : 100,
        x = a.useCallback(
            (e) => {
                let t,
                    n = l.findIndex((e) => e.key === u),
                    i = l[n];
                if ("ArrowDown" === e.key) t = l[Math.min(l.length - 1, n + 1)];
                else if ("ArrowUp" === e.key) t = l[Math.max(0, n - 1)];
                else if (null == i) return;
                else if ("smaller" === i.kind && ("ArrowRight" === e.key || "Enter" === e.key)) m(i.parentKey);
                else if ("node" === i.kind && "ArrowRight" === e.key && e.shiftKey) f(i.key);
                else if ("node" === i.kind && "ArrowRight" === e.key && r.has(i.key)) c(i.key);
                else {
                    if ("node" !== i.kind || "ArrowLeft" !== e.key || !(i.node.children.length > 0) || r.has(i.key))
                        return;
                    c(i.key);
                }
                (e.preventDefault(),
                    null != t && (o(t.key), document.getElementById(cY(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [r, f, m, l, o, u, c],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(cB.c, {
                children: [
                    (0, i.jsxs)("div", {
                        className: cX.z,
                        children: [
                            (0, i.jsx)(v.E, {
                                variant: "body-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: cF(t),
                            }),
                            (0, i.jsx)(v.E, {
                                variant: "body-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: cO(t),
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
                                      children: `${cP(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, i.jsx)(c3, { trace: t }),
                    (0, i.jsxs)("div", {
                        className: cX.KE,
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
                        "aria-activedescendant": null == u ? void 0 : cY(u),
                        className: cX.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(p) },
                        onKeyDown: x,
                        children: [
                            (0, i.jsxs)("div", {
                                className: cX.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: cX.So,
                                        children: (0, i.jsx)(v.E, {
                                            variant: "body-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, i.jsx)("div", {
                                        className: cX.c1,
                                        children: g.map((e) =>
                                            (0, i.jsx)(
                                                v.E,
                                                {
                                                    variant: "body-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${cX.io} ${(e / h) * 100 > 85 ? cX.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / h) * 100),
                                                    },
                                                    children: 0 === e ? "0" : cT(e),
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
                                          c0,
                                          {
                                              node: e.node,
                                              extent: h,
                                              collapsed: r.has(e.key),
                                              selected: e.key === u,
                                              onSelect: o,
                                              onToggle: c,
                                              onExpandSubtree: f,
                                          },
                                          e.key,
                                      )
                                    : (0, i.jsx)(c1, { row: e, extent: h, selected: e.key === u, onReveal: m }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(cK.j, { children: (0, i.jsx)(c2, { node: s }) }),
        ],
    });
}
function c7(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: r } = e,
        a = (0, c.bG)([o$.A], () => o$.A.getTimingTrace(l, r), [l, r]),
        s = a?.name ?? "Perf Trace";
    return (0, i.jsxs)(cH.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, i.jsx)(cV.rQ, { title: s }),
            null == a
                ? (0, i.jsx)(cB.c, {
                      children: (0, i.jsx)(v.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, i.jsx)(c4, { trace: a }),
        ],
    });
}
let c5 = { running: cX.Vf, ok: cX.mo, error: cX.Sr };
function c9(e) {
    let { status: t } = e;
    return (0, i.jsx)("span", { className: `${cX.Om} ${c5[t]}`, role: "img", "aria-label": cM[t] });
}
function c8(e, t) {
    (0, K.qf)((n) => (0, i.jsx)(c7, { ...n, projectId: e, traceId: t }));
}
function c6(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        r = a.useCallback(() => c8(t, n.id), [t, n.id]);
    return (0, i.jsxs)(tQ.D, {
        className: cX.nM,
        onClick: r,
        children: [
            (0, i.jsxs)("div", {
                className: cX.sU,
                children: [
                    (0, i.jsx)(c9, { status: (0, cE.lQ)(n) }),
                    (0, i.jsx)(v.E, {
                        variant: "body-sm/semibold",
                        color: "text-default",
                        className: cX._k,
                        children: n.name,
                    }),
                    (0, i.jsx)(v.E, {
                        variant: "body-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: cF(n),
                    }),
                ],
            }),
            (0, i.jsx)(v.E, { variant: "body-xs/normal", color: "text-muted", tabularNumbers: !0, children: cO(n) }),
            null == l
                ? null
                : (0, i.jsx)(v.E, { variant: "body-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function de(e) {
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
            (0, cC.o)(new Blob([e], { type: "application/json" }), `conjure-traces-${t}.json`).catch((e) => {
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
            return (0, i.jsx)(ti.K, {
                ...e,
                buttonRef: l,
                icon: iY.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "More",
                "aria-haspopup": "menu",
                "aria-expanded": n,
            });
        },
    });
}
function dt(e) {
    let { projectId: t } = e,
        n = (0, c.yK)([o$.A], () => o$.A.getTimingTraces(t), [t]),
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
                    let t = e.map(cG);
                    function n(e) {
                        return t.reduce((t, n) => t + e(n), 0);
                    }
                    return {
                        categories: cE.BF.map((e) => ({
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
              className: cX.Ie,
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
              className: cX.nd,
              children: [
                  (0, i.jsxs)("div", {
                      className: cX.Ko,
                      children: [
                          (0, i.jsx)("div", {
                              className: cX.fH,
                              children: (0, i.jsx)(cA.I, {
                                  query: l,
                                  onChange: r,
                                  onClear: () => r(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, i.jsx)(de, { projectId: t, traces: s }),
                      ],
                  }),
                  (0, i.jsxs)(tz.Ch, {
                      className: cX.XG,
                      children: [
                          (0, i.jsx)(cZ, { stats: o }),
                          0 === u.length
                              ? (0, i.jsx)(v.E, {
                                    variant: "body-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, i.jsx)("ul", {
                                    className: cX.p_,
                                    "aria-label": "Traces",
                                    children: u.map((e) =>
                                        (0, i.jsx)(
                                            "li",
                                            { children: (0, i.jsx)(c6, { projectId: t, trace: e }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function dn(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function dl(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function dr(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function di(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function da(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function ds(e) {
    return T.intl.string("preview" === e ? R.default["2yLYlG"] : R.default.eiAi57);
}
let du = ["all", "preview", "stable", "web"];
function dc(e) {
    switch (e.reason) {
        case "local":
            return T.intl.string(R.default.mUeKML);
        case "unconfigured":
            return T.intl.string(R.default.bGefb5);
        case "unauthorized":
            return T.intl.string(R.default.KLx6Bb);
        default:
            return null != e.detail
                ? T.intl.formatToPlainString(R.default.t09Q6q, { detail: e.detail })
                : T.intl.string(R.default["t+tG59"]);
    }
}
function dd(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : T.intl.formatToPlainString(R.default["XO/bN4"], {
              p50: dn(e.memory_p50_bytes ?? 0),
              p999: dn(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let dm = {
    db: () => R.default["7l+DFG"],
    db_preview: () => R.default.FAuffi,
    runtime: () => R.default["Gkl+ab"],
    runtime_preview: () => R.default.ynpJzv,
    bot: () => R.default["5/i0cj"],
    bot_preview: () => R.default.m2jsnw,
};
var df = n(911608),
    dh = n(177427);
function dg(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, i.jsxs)("div", {
        className: dh.KE,
        children: [
            (0, i.jsx)("div", {
                className: dh.IQ,
                children:
                    "loading" === n
                        ? (0, i.jsx)(j.y, { type: j.t.PULSING_ELLIPSIS })
                        : "failed" === n
                          ? (0, i.jsx)(v.E, {
                                variant: "body-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: T.intl.string(R.default.ZVByPX),
                            })
                          : null != t
                            ? (0, i.jsx)(v.E, {
                                  variant: "body-xs/normal",
                                  color: "text-muted",
                                  children: T.intl.formatToPlainString(R.default.INVO50, { time: di(t) }),
                              })
                            : null,
            }),
            (0, i.jsx)(d.$, { variant: "secondary", size: "sm", text: T.intl.string(R.default.oKEgiu), onClick: l }),
        ],
    });
}
function dp(e) {
    let { title: t, children: n } = e;
    return (0, i.jsxs)("section", {
        className: dh.uW,
        "aria-label": t,
        children: [
            (0, i.jsx)(v.E, { variant: "body-xs/semibold", color: "text-muted", className: dh.Gf, children: t }),
            n,
        ],
    });
}
function dx(e) {
    let { label: t, value: n, hint: l, critical: r = !1, icon: a, state: s } = e;
    return (0, i.jsxs)("div", {
        className: dh.N8,
        children: [
            (0, i.jsxs)("div", {
                className: dh.x7,
                children: [
                    (0, i.jsxs)("span", {
                        className: dh.kS,
                        children: [a, (0, i.jsx)(v.E, { variant: "body-sm/normal", color: "text-muted", children: t })],
                    }),
                    (0, i.jsxs)("span", {
                        className: dh.kS,
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
function dv(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        a = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = a >= 0.9;
    return (0, i.jsxs)("div", {
        className: dh.N8,
        children: [
            (0, i.jsxs)("div", {
                className: dh.x7,
                children: [
                    (0, i.jsx)(v.E, { variant: "body-sm/normal", color: "text-muted", children: t }),
                    (0, i.jsx)(v.E, {
                        variant: "body-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, i.jsx)(df.z, {
                value: 100 * a,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? dh.dh : void 0,
            }),
        ],
    });
}
function dj(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, i.jsx)(dx, {
            label: T.intl.string(R.default.SXP7pD),
            value: T.intl.string(R.default.E5hKVi),
            hint: dc(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, i.jsx)(dx, {
            label: T.intl.string(R.default.SXP7pD),
            value: "\u2014",
            hint: T.intl.string(R.default.AGvoMJ),
        });
    let l = dd(n);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(dx, { label: T.intl.string(R.default["H/X+FI"]), value: dl(n.cpu_ms) }),
            null != l && (0, i.jsx)(dx, { label: T.intl.string(R.default.lmFmMO), value: l }),
        ],
    });
}
function db(e) {
    let { analytics: t } = e,
        n = T.intl.string(R.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, i.jsx)(dp, {
            title: n,
            children: (0, i.jsx)(v.E, { variant: "body-sm/normal", color: "text-muted", children: dc(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? dm[t] : null) ? T.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, i.jsx)(dp, {
        title: n,
        children:
            0 === l.length
                ? (0, i.jsx)(v.E, {
                      variant: "body-sm/normal",
                      color: "text-muted",
                      children: T.intl.string(R.default.AGvoMJ),
                  })
                : l.map((e) => {
                      let { object: t, label: n } = e;
                      return (0, i.jsx)(
                          dx,
                          {
                              label: n,
                              value: T.intl.formatToPlainString(R.default["w/2voO"], { cpu: dl(t.cpu_ms) }),
                              hint: dd(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var dy = n(678708),
    dk = n(414499),
    dw = n(714800),
    dS = n(81466),
    dA = n(424383),
    dC = n(664121),
    dN = n(816943),
    dI = n(268791),
    dE = n(514042),
    d_ = n(872351),
    dM = n(708988),
    dR = n(150934),
    dT = n(417270);
let dP = "Restart Agent",
    dL = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
function d$(e) {
    return null != e && "" !== e ? e.slice(0, 12) : "None";
}
function dq(e, t) {
    return { label: e, value: null != t && "" !== t ? di(t) : "Unknown", icon: "calendar" };
}
function dD(e) {
    for (let [t, n] of [
        ["GB", 1e9],
        ["MB", 1e6],
        ["KB", 1e3],
    ])
        if (e >= n) return `${Number((e / n).toFixed(1))} ${t}`;
    return `${e} B`;
}
function dF(e, t, n, l) {
    let [r, i] = dL[n.status];
    return { label: e, value: `${dD(n.bytes)} of ${dD(n.max)} \xb7 ${r}`, hint: l, icon: t, state: i };
}
function dO(e) {
    if (null == e) return { label: "Last Save", value: "None since this agent instance started", icon: "save" };
    let t = di(e.at);
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
let dG = { main: "Main vs Remote", wip: "WIP vs Remote" };
function dz(e) {
    let t = `container ${d$(e.local)} \xb7 remote ${d$(e.remote)}`,
        n = e.ahead ?? 0,
        l = e.behind ?? 0,
        r = { label: dG[e.ref], icon: "remote", hint: t };
    switch (e.state) {
        case "in_sync":
            return { ...r, value: "In Sync", state: "ok" };
        case "ahead":
            return { ...r, value: `${dr(n)} Ahead`, hint: `${t} \xb7 not pushed yet`, state: "ahead" };
        case "behind":
            return { ...r, value: `${dr(l)} Behind`, state: "behind" };
        case "diverged":
            return { ...r, value: `Diverged (${dr(n)} Ahead, ${dr(l)} Behind)`, state: "error" };
        case "not_fetched":
            return { ...r, value: "Behind", hint: `${t} \xb7 the remote head isn't in the container`, state: "behind" };
        case "missing_remote":
            return { ...r, value: "Missing on Remote", state: "error" };
        case "missing_local":
            return { ...r, value: "Missing in Container", state: "warning" };
    }
}
let dU = ["main", "wip"];
var dB = n(400154);
let dK = {
        checkout: dy.FolderIcon,
        edit: f.PencilIcon,
        remote: dk.CloudIcon,
        commits: dw.ListNumberedIcon,
        calendar: dS.CalendarIcon,
        save: dA.SaveIcon,
        objects: dC.ServerIcon,
        download: dN.CloudDownloadIcon,
        size: dI.SpeedometerIcon,
        file: dE.FileIcon,
    },
    dH = {
        ok: [lV.CircleCheckIcon, tm.A.colors.ICON_FEEDBACK_POSITIVE],
        warning: [cU.WarningIcon, tm.A.colors.ICON_FEEDBACK_WARNING],
        error: [sb.CircleXIcon, tm.A.colors.ICON_FEEDBACK_CRITICAL],
        ahead: [d_.ArrowSmallUpIcon, tm.A.colors.ICON_MUTED],
        behind: [dM.ArrowSmallDownIcon, tm.A.colors.ICON_MUTED],
    };
function dV(e) {
    let { projectId: t } = e,
        { state: n } = {
            state: (0, c.bG)([o$.A], () => o$.A.getGitInfoState(t), [t]),
            load: a.useCallback(() => (0, cS.DK)(t), [t]),
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
                    `Updated ${di(r)}`,
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
    return (0, i.jsxs)(dp, {
        title: "Git",
        children: [
            (0, i.jsx)("div", {
                className: dB.Lj,
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
                    if (!e.running || null != e.localError) return [dO(e.lastSave)];
                    if (!e.checkout)
                        return [
                            { label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" },
                            dO(e.lastSave),
                        ];
                    let l = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
                    void 0 !== e.dirtyFiles &&
                        l.push({
                            label: "Uncommitted Files",
                            value: null == e.dirtyFiles ? "Unknown" : dr(e.dirtyFiles),
                            hint: null == e.dirtyFiles ? "git status didn't finish in time." : void 0,
                            icon: "edit",
                        });
                    let r = dU.flatMap((t) => e.comparisons?.find((e) => e.ref === t) ?? []);
                    (r.length > 0
                        ? l.push(...r.map(dz))
                        : l.push(
                              { label: "Main", value: d$(e.heads.main), icon: "remote" },
                              { label: "WIP", value: d$(e.heads.wip), icon: "remote" },
                          ),
                        l.push(
                            { label: "Commits", value: null != e.commits ? dr(e.commits) : "Unknown", icon: "commits" },
                            dq("Oldest Commit", e.oldest),
                            dq("Newest Commit", e.newest),
                            dO(e.lastSave),
                        ),
                        null != e.objects &&
                            l.push(
                                ((n = 1 === (t = e.objects).packs ? "1 pack" : `${dr(t.packs)} packs`),
                                {
                                    label: "Objects",
                                    value: `${dr(t.loose)} loose (${dn(t.looseBytes)}) \xb7 ${dr(t.packed)} packed in ${n} (${dn(t.packBytes)})`,
                                    hint: t.garbage > 0 ? `${dr(t.garbage)} garbage files` : void 0,
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
                                      value: `Yes \xb7 ${dr(e.missingObjects)} not downloaded`,
                                      hint: "Fetched on demand; this read never fetches.",
                                  }
                            : { ...t, value: "No" };
                    })(e);
                    return (
                        null != i && l.push(i),
                        null != e.localBytes &&
                            l.push(
                                dF(
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
                                  dF("Largest File", "file", e.largestFile, "Largest file version in the local copy."),
                              ),
                        l
                    );
                })(n.info).map((e) => {
                    let { label: t, value: n, hint: l, icon: r, state: a } = e,
                        s = dK[r],
                        [u, o] = null != a ? dH[a] : [null, void 0];
                    return (0, i.jsx)(
                        dx,
                        {
                            label: t,
                            value: n,
                            hint: l,
                            critical: "error" === a,
                            icon: (0, i.jsx)(s, { size: "xs", color: tm.A.colors.ICON_MUTED }),
                            state: null != u ? (0, i.jsx)(u, { size: "xs", color: o }) : void 0,
                        },
                        t,
                    );
                }),
        ],
    });
}
function dW(e) {
    let { projectId: t } = e,
        {
            state: n,
            busy: l,
            clearAlarm: r,
            setClearAlarm: s,
            confirmCopy: u,
            restart: o,
        } = (function (e) {
            let t = (0, c.bG)([o$.A], () => o$.A.getRestartAgentState(e), [e]),
                [n, l] = a.useState(!1),
                r = "restarting" === t.phase ? t.startedAt : null,
                i = "restarted" === t.phase ? t.instanceSince : null,
                s = a.useRef(i);
            (a.useEffect(() => {
                null != i && i !== s.current && ((s.current = i), (0, cS.DK)(e));
            }, [e, i]),
                a.useEffect(() => {
                    if (null == r) return;
                    function t() {
                        let t = o$.A.getInstancePollRequestedAt(e);
                        (null != t && Date.now() - t < 1e4) || (0, cS.gX)(e);
                    }
                    t();
                    let n = setInterval(t, 2e3),
                        l = setTimeout(
                            () =>
                                uJ.h.dispatch({
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
            let u = a.useCallback(() => (0, cS.VW)(e, n), [e, n]);
            return {
                state: t,
                busy: "pending" === t.phase || "restarting" === t.phase,
                clearAlarm: n,
                setClearAlarm: l,
                confirmCopy: {
                    title: "Restart Agent?",
                    body: `Ends this project's agent instance; the next request starts a new one. Lost: in-memory state and any running turn. Kept: saved data (conversation, settings, storage) and the container disk. ${n ? "The pending alarm is cleared, so scheduled wakeups wait until something sets it again." : "The pending alarm is kept."}`,
                    confirm: dP,
                },
                restart: u,
            };
        })(t),
        m = a.useCallback(() => {
            (0, I.A)({ title: u.title, subtitle: u.body, confirmText: u.confirm, variant: "critical", onConfirm: o });
        }, [u, o]);
    return (0, i.jsxs)("div", {
        className: dB.Lj,
        children: [
            (0, i.jsxs)("div", {
                className: dB.nM,
                children: [
                    (0, i.jsx)(dR.S, {
                        label: "Also Clear Alarm",
                        description: "Scheduled wakeups wait until something sets the alarm again.",
                        checked: r,
                        onChange: s,
                        disabled: l,
                    }),
                    (0, i.jsx)(d.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        icon: dT.RetryIcon,
                        text: dP,
                        loading: l,
                        disabled: l,
                        onClick: m,
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
                            return `Restarted \xb7 new instance since ${di(e.instanceSince)}`;
                        case "failed":
                            return `Failed: ${e.reason} \xb7 ${di(e.observedAt)}`;
                    }
                })(n),
            }),
        ],
    });
}
function dX(e, t) {
    return (0, i.jsx)(dx, {
        label: e,
        value: T.intl.formatToPlainString(R.default.yHJxuP, { count: dr((0, ca.aM)(t)) }),
        hint: `${dr(t.input_tokens)} in \xb7 ${dr(t.output_tokens)} out \xb7 ${dr(t.cache_read_input_tokens)} cache read`,
    });
}
function dQ(e) {
    let t,
        n,
        l,
        r,
        s,
        u,
        o,
        m,
        f,
        h,
        { projectId: g, status: p, fetchState: x, onRefresh: j } = e,
        {
            lastTurn: b,
            lastCompaction: y,
            lastDecline: k,
            forceState: w,
            restartState: S,
            turnRunning: A,
            handleForceCompaction: C,
            handleForceCompactionOverride: N,
            handleRestartWorkspace: I,
            lifetime: E,
            limits: _,
            session: M,
            contextCeiling: P,
        } = ((t = (0, c.bG)([o$.A], () => o$.A.getLastTurnUsage(g), [g])),
        (n = (0, c.bG)([o$.A], () => o$.A.getLastCompaction(g), [g])),
        (l = (0, c.bG)([o$.A], () => o$.A.getLastCompactionDecline(g), [g])),
        (r = (0, c.bG)([o$.A], () => o$.A.getForceCompactionState(g), [g])),
        (s = (0, c.bG)([o$.A], () => o$.A.getSandboxRestartState(g), [g])),
        (u = (0, c.bG)([lR.A], () => lR.A.isThinking(g), [g])),
        (o = a.useCallback(() => (0, cS.Lj)(g), [g])),
        (m = a.useCallback(() => (0, cS.Lj)(g, !0), [g])),
        (f = a.useCallback(() => (0, cS.bq)(g), [g])),
        (h = p?.agent?.limits ?? null),
        {
            lastTurn: t,
            lastCompaction: n,
            lastDecline: l,
            forceState: r,
            restartState: s,
            turnRunning: u,
            handleForceCompaction: o,
            handleForceCompactionOverride: m,
            handleRestartWorkspace: f,
            lifetime: p?.agent?.lifetime ?? null,
            limits: h,
            session: p?.agent?.session ?? null,
            contextCeiling: n?.promptCeiling ?? h?.context_window_tokens ?? null,
        });
    return (0, i.jsxs)("div", {
        className: dB.Mf,
        children: [
            (0, i.jsx)(dg, { generatedAt: p?.generated_at ?? null, fetchState: x, onRefresh: j }),
            (0, i.jsx)(dp, {
                title: T.intl.string(R.default.JghNal),
                children:
                    null == E
                        ? (0, i.jsx)(v.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: T.intl.string(R.default.s0U5Fv),
                          })
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(dx, {
                                      label: T.intl.string(R.default["9nqym2"]),
                                      value: dr((0, ca.a7)(E.cost_usd)),
                                      hint: T.intl.formatToPlainString(R.default.NCdUIh, { count: dr(E.turns) }),
                                  }),
                                  dX(T.intl.string(R.default.xtxP0e), E.orchestrator),
                                  dX(T.intl.string(R.default["9Sj3SX"]), E.codegen),
                                  dX(T.intl.string(R.default.ANCEo3), (0, ca.wU)(E.compaction)),
                                  p?.agent?.outcomes != null &&
                                      Object.keys(p.agent.outcomes).length > 0 &&
                                      (0, i.jsx)(dx, {
                                          label: T.intl.string(R.default.SQHm7C),
                                          value: Object.entries(p.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${dr(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, i.jsx)(dp, {
                title: T.intl.string(R.default.dZHPE5),
                children:
                    null == b
                        ? (0, i.jsx)(v.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: T.intl.string(R.default.DfVjal),
                          })
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  dX(T.intl.string(R.default["7X3i9d"]), b.total),
                                  (0, i.jsx)(dx, {
                                      label: T.intl.string(R.default["8OUg09"]),
                                      value: `${Math.round((b.cache_hit_rate ?? (0, ca.CA)(b.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, i.jsxs)(dp, {
                title: T.intl.string(R.default.NbRk9a),
                children: [
                    null != y && null != P
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(dv, {
                                      label: T.intl.string(R.default.Kw5wiQ),
                                      used: y.tokensAfter,
                                      max: P,
                                      formatValue: dr,
                                  }),
                                  (0, i.jsx)(dx, {
                                      label: T.intl.string(R.default.mRbSns),
                                      value: `${dr(y.tokensBefore)} \u{2192} ${dr(y.tokensAfter)}`,
                                      hint: T.intl.formatToPlainString(R.default.Vq3skS, {
                                          count: dr(y.retainedMessages),
                                          time: di(y.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, i.jsx)(v.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children:
                                  null != P
                                      ? T.intl.formatToPlainString(R.default.GMLCNv, { ceiling: dr(P) })
                                      : T.intl.string(R.default.s0U5Fv),
                          }),
                    null != k &&
                        (0, i.jsx)(dx, {
                            label: T.intl.string(R.default["4BX5KK"]),
                            value: `${dr(k.projected)} / ${dr(k.threshold)}`,
                            critical: !0,
                            hint: T.intl.formatToPlainString(R.default["6ngCax"], { time: di(k.observedAt) }),
                        }),
                    (0, i.jsxs)("div", {
                        className: dB.Lj,
                        children: [
                            (0, i.jsx)(d.$, {
                                variant: "secondary",
                                size: "sm",
                                text: T.intl.string(R.default["1EiJeb"]),
                                disabled: "pending" === w,
                                onClick: C,
                            }),
                            (0, i.jsx)(v.E, {
                                variant: "body-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof w && "compacted" !== w.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return T.intl.string(R.default.wox6Ev);
                                    if ("pending" === e) return T.intl.string(R.default.OcPHQ1);
                                    let t = di(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return T.intl.formatToPlainString(R.default.BhRjZZ, { time: t });
                                    let n =
                                        "declined" === e.outcome
                                            ? R.default["o/FKzF"]
                                            : "busy" === e.outcome
                                              ? R.default.YZb4hK
                                              : R.default.ZoUSVK;
                                    return T.intl.formatToPlainString(n, {
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
                                            text: T.intl.string(R.default.ZxG2AI),
                                            onClick: N,
                                        }),
                                        (0, i.jsx)(v.E, {
                                            variant: "body-xs/normal",
                                            color: "text-muted",
                                            children: T.intl.string(R.default.V73vdN),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: dB.Lj,
                        children: [
                            (0, i.jsx)(d.$, {
                                variant: "secondary",
                                size: "sm",
                                text: T.intl.string(R.default["5qCjBu"]),
                                loading: "pending" === S,
                                disabled: "pending" === S || A,
                                onClick: I,
                            }),
                            (0, i.jsx)(v.E, {
                                variant: "body-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof S && "restarted" !== S.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return T.intl.string(R.default.mlok8D);
                                    if ("pending" === e) return T.intl.string(R.default["1ugSyK"]);
                                    let t = di(e.observedAt);
                                    return T.intl.formatToPlainString(
                                        "restarted" === e.outcome ? R.default["76mfqO"] : R.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(S),
                            }),
                        ],
                    }),
                    (0, i.jsx)(dW, { projectId: g }),
                ],
            }),
            (0, i.jsx)(dV, { projectId: g }),
            (null != M || p?.analytics != null) &&
                (0, i.jsxs)(dp, {
                    title: T.intl.string(R.default.EsSzCS),
                    children: [
                        null != M &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(dx, {
                                        label: T.intl.string(R.default.CLXHAs),
                                        value: di(M.instance_since),
                                        hint: T.intl.string(R.default.UCwUEX),
                                    }),
                                    (0, i.jsx)(dx, { label: T.intl.string(R.default["8V8e1Z"]), value: dr(M.sockets) }),
                                    (0, i.jsx)(dx, {
                                        label: T.intl.string(R.default["4pBzYW"]),
                                        value: M.turn_inflight
                                            ? T.intl.string(R.default.Wv025I)
                                            : T.intl.string(R.default["7/lsFY"]),
                                    }),
                                    M.queued_messages > 0 &&
                                        (0, i.jsx)(dx, {
                                            label: T.intl.string(R.default["3oUYnv"]),
                                            value: dr(M.queued_messages),
                                        }),
                                ],
                            }),
                        p?.analytics != null && (0, i.jsx)(dj, { analytics: p.analytics }),
                    ],
                }),
            null != _ &&
                (0, i.jsxs)(dp, {
                    title: T.intl.string(R.default["LEIhp/"]),
                    children: [
                        (0, i.jsx)(dx, {
                            label: T.intl.string(R.default.IlDBN3),
                            value: dr(_.max_subagent_iterations),
                        }),
                        (0, i.jsx)(dx, {
                            label: T.intl.string(R.default["ZdzKR+"]),
                            value: T.intl.formatToPlainString(R.default.yHJxuP, { count: dr(_.context_window_tokens) }),
                        }),
                        (0, i.jsx)(dx, {
                            label: T.intl.string(R.default.cIhN2W),
                            value: T.intl.formatToPlainString(R.default.yHJxuP, {
                                count: dr(_.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, i.jsx)(dx, {
                            label: T.intl.string(R.default["+fOn/q"]),
                            value: dr(_.max_user_message_chars),
                        }),
                        (0, i.jsx)(dx, { label: T.intl.string(R.default.kIHga0), value: dr(_.max_build_attempts) }),
                        (0, i.jsx)(dx, { label: T.intl.string(R.default.Iw03yW), value: dr(_.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var dZ = n(237528),
    dY = n(629584),
    dJ = n(531893);
function d0(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, i.jsx)("div", {
              className: dJ.ut,
              children: (0, i.jsx)(v.E, {
                  variant: "body-xs/normal",
                  color: "text-feedback-critical",
                  children: T.intl.string(R.default.h1SE6R),
              }),
          });
}
function d1(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, i.jsxs)("div", {
              className: dJ.qf,
              children: [
                  (0, i.jsx)(v.E, {
                      variant: "body-sm/medium",
                      color: "text-default",
                      children: T.intl.string(R.default.h1SE6R),
                  }),
                  (0, i.jsx)(v.E, {
                      variant: "body-xs/normal",
                      color: "text-muted",
                      children: T.intl.string(R.default["8SErdg"]),
                  }),
              ],
          })
        : (0, i.jsxs)("div", {
              className: dJ.qf,
              children: [
                  (0, i.jsx)(v.E, { variant: "body-sm/medium", color: "text-default", children: n }),
                  (0, i.jsx)(v.E, { variant: "body-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function d2(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, i.jsx)("div", {
              className: dJ.ps,
              children: (0, i.jsx)(v.E, {
                  variant: "body-xs/normal",
                  color: "text-muted",
                  children: T.intl.string(R.default.V7Ri8H),
              }),
          })
        : null;
}
var d3 = n(109079);
let d4 = a.memo(function (e) {
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
        className: d3.vK,
        children: [
            (0, i.jsx)(v.E, {
                tag: "span",
                variant: "body-xs/normal",
                color: "text-subtle",
                className: d3.Mt,
                selectable: !0,
                children: cI(n.ts) ?? n.ts,
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
                className: d3.dm,
                children: n.level,
            }),
            (0, i.jsxs)("div", {
                className: d3.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, i.jsx)("span", { className: d3.Cq, children: (0, i.jsx)(dZ.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, i.jsx)("span", {
                            className: d3.Cq,
                            title: n.build ?? void 0,
                            children: (0, i.jsx)(dZ.v, { text: T.intl.string(R.default.TrC9c8), variant: "redLight" }),
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
                                  (0, i.jsxs)(tQ.D, {
                                      className: d3.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": u,
                                      "aria-label": T.intl.string(R.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          r
                                              ? (0, i.jsx)(eA.ChevronSmallDownIcon, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, i.jsx)(t1.ChevronSmallRightIcon, {
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
                                                  T.intl.formatToPlainString(
                                                      "[\u2026]" === o.marker ? R.default.kUhyUv : R.default["N+fphl"],
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
                                          className: d3.dF,
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
function d7(e) {
    let { projectId: t } = e,
        n = (0, c.bG)([cw.A], () => cw.A.getLogs(t), [t]),
        l = (0, c.bG)([cw.A], () => cw.A.getHistoryState(t, "logs")),
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
        m = a.useRef(null),
        f = a.useRef(!0);
    a.useEffect(() => {
        f.current && m.current?.scrollToBottom();
    }, [d]);
    let h = a.useCallback(() => {
            let e = m.current;
            null != e && (f.current = 32 > e.getDistanceFromBottom());
        }, []),
        g = a.useMemo(
            () =>
                du.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return ds(e);
                            case "web":
                                return T.intl.string(R.default.IVzfVV);
                            default:
                                return T.intl.string(R.default["Um1/8L"]);
                        }
                    })(e),
                })),
            [],
        );
    return (0, i.jsxs)("div", {
        className: d3.$F,
        children: [
            (0, i.jsxs)("div", {
                className: d3.y4,
                children: [
                    (0, i.jsx)(dY.I, {
                        look: "pill",
                        "aria-label": T.intl.string(R.default.MhvyUU),
                        options: g,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, i.jsx)("div", {
                        className: d3.KT,
                        children: (0, i.jsx)(cA.I, {
                            query: u,
                            onChange: o,
                            onClear: () => o(""),
                            size: "sm",
                            placeholder: T.intl.string(R.default["m2+37Y"]),
                            "aria-label": T.intl.string(R.default["m2+37Y"]),
                        }),
                    }),
                ],
            }),
            n.length > 0 && (0, i.jsx)(d0, { state: l }),
            (0, i.jsxs)(tz.Ch, {
                ref: m,
                onScroll: h,
                overflow: "auto",
                className: d3.sx,
                children: [
                    (0, i.jsx)(d2, { state: l }),
                    0 === n.length
                        ? (0, i.jsx)(d1, {
                              state: l,
                              emptyTitle: T.intl.string(R.default.S7qlPG),
                              emptyBody: T.intl.string(R.default.nD0S9z),
                          })
                        : 0 === d.length
                          ? (0, i.jsx)(v.E, {
                                variant: "body-xs/normal",
                                color: "text-muted",
                                children: T.intl.string(R.default["4SIdrX"]),
                            })
                          : d.map((e) => (0, i.jsx)(d4, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function d5(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, i.jsx)(a.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, i.jsx)(a.Fragment, { children: r("stable", l) }, "stable")),
        (0, i.jsx)(dp, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, i.jsx)(v.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: T.intl.string(R.default.umcjif),
                      }),
        })
    );
}
function d9(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(dx, {
                      label: T.intl.formatToPlainString(R.default["01ZMS4"], { env: ds(n) }),
                      value: ((t = l.connected), T.intl.string(t ? R.default.Wv025I : R.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, i.jsx)(dx, {
                      label: T.intl.string(R.default["z1dh+F"]),
                      value: dr(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${di(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, i.jsx)(dx, { label: T.intl.string(R.default.Iz5GnJ), value: dr(l.guild_count) }),
                  (0, i.jsx)(dx, {
                      label: T.intl.string(R.default["7UqtNv"]),
                      value: dr(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? T.intl.formatToPlainString(R.default.MasSly, {
                                    code: l.last_close_code,
                                    time: di(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, i.jsx)(dx, {
                          label: T.intl.string(R.default["x3+JXJ"]),
                          value: dr(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, i.jsx)(dx, { label: ds(n), value: T.intl.string(R.default.lTHQss) });
}
function d8(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, i.jsx)(dx, {
        label: ds(t),
        value: T.intl.formatToPlainString(R.default["Xq+wHT"], {
            requests: dr(n.requests),
            failures: dr(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? T.intl.formatToPlainString(R.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: di(n.last_failure.at),
                  })
                : T.intl.formatToPlainString(R.default["7KlGT6"], { time: di(n.since) }),
    });
}
function d6(e) {
    let { env: t, runtime: n } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(dx, {
                label: T.intl.formatToPlainString(R.default["92gVTm"], { env: ds(t) }),
                value: dr(n.connections),
            }),
            n.schedules.map((e) =>
                (0, i.jsx)(
                    dx,
                    {
                        label: T.intl.formatToPlainString(R.default.Dafaco, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? T.intl.formatToPlainString(R.default.ologm6, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? T.intl.formatToPlainString(R.default.wxAWNv, { time: di(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function me(e) {
    let { env: t, metrics: n } = e;
    return (0, i.jsx)(dx, {
        label: ds(t),
        value: T.intl.formatToPlainString(R.default.suAOj9, { calls: dr(n.calls), errors: dr(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function mt(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, i.jsx)(dp, {
            title: t,
            children: (0, i.jsx)(v.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children: T.intl.string(R.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        a = n.cpu_ms_total > 0;
    return (0, i.jsxs)(dp, {
        title: t,
        children: [
            (0, i.jsx)(dx, {
                label: T.intl.string(R.default.xtD4Zp),
                value: dr(n.requests),
                hint: T.intl.formatToPlainString(R.default["7KlGT6"], { time: di(n.since) }),
            }),
            (0, i.jsx)(dx, { label: T.intl.string(R.default.gfRhR3), value: dr(n.errors), critical: n.errors > 0 }),
            a
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(dv, {
                              label: T.intl.string(R.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: dl,
                          }),
                          (0, i.jsx)(dx, {
                              label: T.intl.string(R.default.mSKImM),
                              value: dl(r),
                              hint: T.intl.formatToPlainString(R.default.JqMU05, {
                                  total: dl(n.cpu_ms_total),
                                  wall: dl(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, i.jsx)(dx, {
                      label: T.intl.string(R.default.LEJ5r3),
                      value: T.intl.string(R.default["2Ekb2b"]),
                      hint: T.intl.string(R.default.G0aq7i),
                  }),
            !a &&
                n.wall_ms_total > 0 &&
                (0, i.jsx)(dx, { label: T.intl.string(R.default.xvmL1D), value: dl(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, i.jsx)(dx, { label: T.intl.string(R.default["4sQYwH"]), value: dr(n.exceeded_cpu), critical: !0 }),
            (0, i.jsx)(dx, {
                label: T.intl.string(R.default.bQenOy),
                value: dr(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: T.intl.formatToPlainString(R.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, i.jsx)(dx, { label: T.intl.string(R.default.xgpn4Y), value: da(n.build) }),
        ],
    });
}
function mn(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        u = r
            ? [{ key: "shared", label: T.intl.string(R.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: T.intl.string(R.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: T.intl.string(R.default.eiAi57), metrics: n },
              ];
    return (0, i.jsx)(dp, {
        title: T.intl.string(R.default.mRt7MW),
        children: u.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, i.jsx)(dx, { label: n, value: "\u2014" }, t)
                : (0, i.jsxs)(
                      a.Fragment,
                      {
                          children: [
                              (0, i.jsx)(dx, {
                                  label: T.intl.formatToPlainString(R.default.u7kJJ4, { env: n }),
                                  value: dn(l.r2_bytes),
                                  hint: T.intl.formatToPlainString(
                                      l.r2_truncated ? R.default.lH0oQw : R.default.m9h02S,
                                      { count: dr(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, i.jsx)(dv, {
                                      label: T.intl.formatToPlainString(R.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: dn,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function ml(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, i.jsxs)("div", {
        className: dB.Mf,
        children: [
            (0, i.jsx)(dg, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(mt, {
                            title: T.intl.string(R.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, i.jsx)(mt, {
                            title: T.intl.string(R.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, i.jsx)(mn, { status: t }),
                        null != t.bot &&
                            (0, i.jsx)(d5, {
                                title: T.intl.string(R.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, i.jsx)(d9, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, i.jsx)(d5, {
                                title: T.intl.string(R.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, i.jsx)(d8, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, i.jsx)(d5, {
                                title: T.intl.string(R.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, i.jsx)(d6, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, i.jsx)(d5, {
                                title: T.intl.string(R.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, i.jsx)(me, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, i.jsx)(db, { analytics: t.analytics }),
                        (0, i.jsxs)(dp, {
                            title: T.intl.string(R.default.fQMpFp),
                            children: [
                                (0, i.jsx)(dx, {
                                    label: T.intl.string(R.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? da(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, i.jsx)(dx, {
                                    label: T.intl.string(R.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? da(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var mr = n(592465);
function mi(e) {
    let { projectId: t, onClose: n } = e,
        l = F(),
        [r, s] = a.useState(() => (l && $?.projectId === t ? "trace" : "logs")),
        u = (0, c.bG)([o$.A], () => o$.A.getStatus(t), [t]),
        o = (0, c.bG)([o$.A], () => o$.A.getFetchState(t), [t]),
        d = a.useCallback(() => {
            ((0, cS.R7)(t), (0, cS.DK)(t));
        }, [t]);
    (a.useEffect(() => d(), [d]), a.useEffect(() => (0, eO.Rw)(t), [t]));
    let m = a.useCallback(() => {
        if (!l) return !1;
        let e = (function (e) {
            if (null == $ || $.projectId !== e) return null;
            let { traceId: t } = $;
            return (($ = null), t);
        })(t);
        return null != e && (c8(t, e), !0);
    }, [t, l]);
    (a.useEffect(() => {
        m();
    }, [m]),
        q(t, () => {
            m() && s("trace");
        }));
    let f = a.useCallback(() => {
            (0, oh.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: o$.A.getStatus(t),
                        last_turn_usage: o$.A.getLastTurnUsage(t),
                        last_compaction: o$.A.getLastCompaction(t),
                        last_compaction_decline: o$.A.getLastCompactionDecline(t),
                        timing_traces: o$.A.getTimingTraces(t),
                        logs: cw.A.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, E.P0)({ text: T.intl.string(R.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        h = T.intl.string(R.default["Q4FN+H"]);
    return (0, i.jsxs)("section", {
        className: mr.nd,
        "aria-label": h,
        children: [
            (0, i.jsxs)(eX.Ay, {
                "aria-label": h,
                toolbar: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(eX.Ay.Icon, {
                            icon: od.CopyIcon,
                            tooltip: T.intl.string(R.default.TkHqy2),
                            onClick: f,
                        }),
                        (0, i.jsx)(eX.Ay.Icon, { icon: eY.XSmallIcon, tooltip: T.intl.string(T.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, i.jsx)(eX.Ay.ChannelIcon, { icon: of.BugIcon, "aria-hidden": !0 }),
                    (0, i.jsx)(eX.Ay.Title, { children: h }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: mr.rf,
                children: [
                    (0, i.jsxs)(ck.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => s(e),
                        "aria-label": T.intl.string(R.default.RvvWIh),
                        className: mr.vR,
                        children: [
                            (0, i.jsx)(ck.V.Item, { id: "logs", children: T.intl.string(R.default["+VRYCm"]) }),
                            (0, i.jsx)(ck.V.Item, { id: "worker", children: T.intl.string(R.default["50D0FZ"]) }),
                            (0, i.jsx)(ck.V.Item, { id: "agent", children: T.intl.string(R.default.UkbTK1) }),
                            l ? (0, i.jsx)(ck.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, i.jsx)(d7, { projectId: t })
                        : "worker" === r
                          ? (0, i.jsx)(ml, { status: u, fetchState: o, onRefresh: d })
                          : "trace" === r && l
                            ? (0, i.jsx)(dt, { projectId: t })
                            : (0, i.jsx)(dQ, { projectId: t, status: u, fetchState: o, onRefresh: d }),
                ],
            }),
        ],
    });
}
var ma = n(365912),
    ms = n(873715);
function mu(e) {
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
let mo = Object.freeze({ x: -1, y: -1 });
function mc(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = mu(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var md = n(192888);
function mm(e, t) {
    return (0, md.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(mc, () => ({ status: "failed" }));
}
var mf = n(108308);
let mh = { x: 25, y: 21 };
function mg(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function mp(e, t, n, l) {
    let r = mg(e, n, l);
    return { x: r.left + r.width * t.x, y: r.top + r.height * t.y };
}
function mx(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function mv(e) {
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
function mj(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: s } = e,
        u = null != n && n === l ? t : null,
        { active: o, annotations: m } = (0, G.rt)(u),
        f = (0, O.Zv)(u),
        h = (0, K.Rv)(),
        g = (0, c.bG)([nC.default], () => nC.default.getCurrentUser()),
        p = g?.id ?? null,
        [x, j] = a.useState(null),
        [b, y] = a.useState(!1),
        [k, w] = a.useState(!1),
        [S, A] = a.useState(null),
        [C, I] = a.useState(!1),
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
        Q = o && !f && !h;
    null == D || (Q && D.projectId === u) || F(null);
    let Z = D?.projectId ?? null;
    a.useEffect(() => {
        if (null != Z) return () => (0, nf.xJ)(Z, "design");
    }, [Z]);
    let Y = tn(r, Q);
    a.useEffect(() => {
        if (!Q || null == u) return;
        let e = !0,
            t = r();
        if (null == t) return void w(!0);
        (y(!0), w(!1));
        let n = `design-feedback-${crypto.randomUUID()}`;
        return (
            (0, ms.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                (t) => {
                    if (!e) return;
                    y(!1);
                    let n = "completed" === t.status ? mv(t.response) : null;
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
        if (tt(J.current, Y)) return;
        let e = window.setTimeout(() => {
            let e = r();
            if (null == e) return;
            J.current = Y;
            let t = [];
            for (let e = 0; e < m.length; e += 24) t.push(m.slice(e, e + 24));
            (0 === t.length && t.push([]),
                t.forEach((t, n) => {
                    let l = t.map((e) => ({
                        action: "locate",
                        target: { ref: e.target.ref, selector: e.target.path },
                    }));
                    (0, ms.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        if ("completed" !== e.status || !el.current) return;
                        let n = mv(e.response);
                        null != n && (j(n), (0, G.F5)(u, { url: n.url, title: n.title, viewport: n.viewport }));
                        let l = new Map();
                        (e.response.results.forEach((e, n) => {
                            let r = t[n];
                            if (null == r || "locate" !== e.action || !e.ok) return;
                            let i = mu(e.element);
                            null != i && l.set(r.id, i);
                        }),
                            (0, G.AW)(u, l));
                    });
                }));
        }, 200);
        return () => window.clearTimeout(e);
    }, [Q, Y, x, m, u, r]),
        a.useEffect(() => {
            if (!Q)
                return () => {
                    (A(null), F(null), X(null), j(null));
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
                    mm(n, t).then((t) => {
                        if (((en.current = !1), el.current)) {
                            if ("picked" !== t.status || mA(t.target, eo.current.rect, eo.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? A(null)
                                    : "unsupported" === t.status && q(!0);
                            else {
                                let e = (0, lN.Sk)(t.target);
                                (L((t) => (mS(t, e) ? t : e)),
                                    A((e) => {
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
            let e = setTimeout(() => U(null), mk);
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
                    ((0, nf.xJ)(u, "design"),
                    X(null),
                    (B.current = !1),
                    F({ projectId: u, target: e, anchor: t, draft: "", at: n, label: (0, lN.Sk)(e) }));
            },
            [u],
        ),
        ed = a.useCallback((e, t) => ({ x: (e.clientX - t.left) / ea, y: (e.clientY - t.top) / ea }), [ea]),
        em = a.useCallback(() => {
            let e = M.current;
            if (null == e) return;
            let t = E.current;
            null != t && (t.style.transform = `translate3d(${e.x + 20}px, ${e.y + 20}px, 0)`);
            let n = _.current;
            null != n && (n.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    a.useLayoutEffect(em);
    let ef = a.useCallback(
            (e) => {
                if (null == Y || null != W) return;
                if (((M.current = { x: e.clientX, y: e.clientY }), em(), I(!0), null != D)) {
                    (Math.abs(e.clientX - D.at.x) > mw || Math.abs(e.clientY - D.at.y) > mw) && (B.current = !0);
                    return;
                }
                if (!es) return void A(null);
                let t = ed(e, Y);
                if ($) {
                    let e = (0, lN.CZ)(eu, t.x, t.y),
                        n = null != e && mA(e, Y, ea) ? null : e;
                    if (null != n) {
                        let e = (0, lN.Sk)(n);
                        L((t) => (mS(t, e) ? t : e));
                    }
                    A((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = et.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((et.current = n), (ee.current = n), er());
            },
            [Y, ea, es, ed, $, eu, D, W, em, er],
        ),
        eh = null == W ? null : m.find((e) => e.id === W.id),
        eg = Q && (C || D?.target.marker != null || eh?.target.marker != null);
    a.useEffect(() => {
        if (eg)
            return () => {
                let e = r();
                null != e && mm(e, mo);
            };
    }, [eg, r]);
    let ep = a.useCallback(() => {
        (I(!1), A(null), (et.current = null), (ee.current = null));
    }, []);
    a.useEffect(() => {
        if (!Q || !C || !es || $ || null != D || null != W) return;
        let e = M.current,
            { rect: t, scale: n } = eo.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((et.current = l), (ee.current = l), er());
    }, [Q, C, es, $, D, W, er]);
    let ex = a.useCallback(
            (e) => {
                if (null != D || null != W) {
                    (ei(), X(null));
                    return;
                }
                if (null == S || null == Y) return;
                let t = ed(e, Y);
                ec(S, (0, lN.Hm)(S, t.x, t.y), { x: e.clientX, y: e.clientY });
            },
            [S, Y, ed, D, W, ec, ei],
        ),
        ev = a.useCallback(() => {
            null != u && (A(null), (0, N.K7)(u)?.active === !0 ? (0, N.V9)(u) : (0, G.mB)(u));
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
                e2.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        e2.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), eb.current());
        }
        function t(e) {
            let t = e.target;
            !(0, e1.vq)(t) ||
                ew.current?.contains(t) === !0 ||
                s?.current?.contains(t) === !0 ||
                (function (e) {
                    try {
                        return ((0, ma.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) ||
                ((null == ey.current || (0, N.K7)(ey.current)?.active !== !0) && ek.current());
        }
    }, [Q, s]);
    let eS = a.useCallback(
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
                    let n = null == S ? -1 : eu.findIndex((e) => e.ref === S.ref);
                    A(eu[(n + (t ? 1 : -1) + eu.length) % eu.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != S &&
                    (e.preventDefault(),
                    ec(S, lN.QU, { x: (Y?.left ?? 0) + S.rect.x * ea, y: (Y?.top ?? 0) + S.rect.y * ea }));
            },
            [u, D, W, eu, S, ec, ej, Y, ea],
        ),
        eA = a.useCallback(
            (e) => {
                null == u ||
                    null == D ||
                    (((0, lN.Ch)(D.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, eO.dv)(u, (0, lN.Q9)(D.target, D.draft), e), ei(), A(null)));
            },
            [u, D, ei],
        ),
        eC = a.useCallback((e) => (null == u ? Promise.reject(Error("no project")) : (0, e3.vX)(u, e)), [u]),
        eN = a.useCallback(() => {
            null == u ||
                null == W ||
                null == p ||
                ((0, lN.Ch)(W.draft) && ((0, G.pV)(u, p, W.id, W.draft.trim()), X({ ...W, editing: !1 })));
        }, [u, W, p]),
        eI = a.useCallback(() => {
            null != u && null != W && null != p && ((0, G.aC)(u, p, W.id), X(null));
        }, [u, W, p]),
        eE = o
            ? b
                ? T.intl.string(R.default["Eb/YV9"])
                : k
                  ? T.intl.string(R.default.FD30bh)
                  : T.intl.formatToPlainString(R.default.dTSqLF, { count: m.length })
            : "",
        e_ = Q && null != Y,
        eM = C && null == W,
        eR = D?.target ?? eh?.target ?? null,
        eT = D ?? z,
        eP = D ?? (z?.instant === !0 ? null : z),
        eL =
            null != eh && null != Y
                ? (function (e, t) {
                      let { left: n, top: l } = mx(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(mp(eh.target, eh.anchor, Y, ea), Y)
                : null;
    return (
        a.useEffect(() => {
            let e = r();
            if (eh?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = eh;
            mm(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [eh, r]),
        (0, e0.createPortal)(
            (0, i.jsxs)("div", {
                ref: ew,
                className: mf.Li,
                children: [
                    (0, i.jsx)(t0.A, {
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
                                      className: mf.MT,
                                      style: { left: Y.left, top: Y.top, width: Y.width, height: Y.height },
                                      "data-plain-cursor": eM ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": T.intl.string(R.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: ef,
                                      onMouseLeave: ep,
                                      onClick: ex,
                                      onKeyDown: eS,
                                  }),
                                  null != S && null == S.marker && null == D && null == W
                                      ? (0, i.jsx)(mC, { box: mg(S, Y, ea) })
                                      : null,
                                  (0, i.jsx)("div", {
                                      ref: E,
                                      className: mf.aZ,
                                      children: (0, i.jsx)("div", {
                                          className: mf.xz,
                                          "data-shown": null != S && null == W && null == D ? "" : void 0,
                                          "data-instant": H ? "" : void 0,
                                          children: (0, i.jsxs)(v.E, {
                                              variant: "body-xs/medium",
                                              className: mf.Ux,
                                              children: [
                                                  null == P
                                                      ? null
                                                      : (0, i.jsx)("span", { className: mf.Tl, children: P.kind }),
                                                  null == P || "" === P.name
                                                      ? null
                                                      : (0, i.jsxs)("span", {
                                                            className: mf.kh,
                                                            children: [" ", P.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, i.jsx)("div", {
                                      ref: _,
                                      className: mf.Y,
                                      children: eM ? (0, i.jsx)("div", { className: mf.u }) : null,
                                  }),
                                  null == eP
                                      ? null
                                      : (0, i.jsx)("div", {
                                            className: mf.aZ,
                                            style: {
                                                transform: `translate3d(${eP.at.x + 20}px, ${eP.at.y + 20}px, 0)`,
                                            },
                                            children: (0, i.jsx)("div", {
                                                className: mf.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == D ? "" : void 0,
                                                children: (0, i.jsxs)(v.E, {
                                                    variant: "body-xs/medium",
                                                    className: mf.Ux,
                                                    children: [
                                                        (0, i.jsx)("span", {
                                                            className: mf.Tl,
                                                            children: eP.label.kind,
                                                        }),
                                                        "" === eP.label.name
                                                            ? null
                                                            : (0, i.jsxs)("span", {
                                                                  className: mf.kh,
                                                                  children: [" ", eP.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eR && null == eR.marker
                                      ? (0, i.jsx)("div", { className: mf.D0, style: mg(eR, Y, ea), "aria-hidden": !0 })
                                      : null,
                                  m.map((e, t) => {
                                      let n = mp(e.target, e.anchor, Y, ea),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, i.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: mf.xL,
                                              style: { ...mx(n, Y), width: 24, height: 24 },
                                              "aria-label": T.intl.formatToPlainString(R.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: (0, lN.Bx)(e.target),
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
                                              children: (0, i.jsx)(mb, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eT || null == u
                                      ? null
                                      : (0, i.jsx)(e6, {
                                            projectId: u,
                                            at: { x: eT.at.x + 20, y: eT.at.y + 20 },
                                            bounds: Y,
                                            kind: eT.label.kind,
                                            value: eT.draft,
                                            canSubmit: null != D && (0, lN.Ch)(eT.draft),
                                            onChange: (e) => {
                                                null != D && F({ ...D, draft: e });
                                            },
                                            onSubmit: eA,
                                            onDismiss: ei,
                                            onUploadFile: eC,
                                            closing: null == D,
                                        }),
                                  null != eh && null != W && null != eL
                                      ? (0, i.jsxs)(my, {
                                            point: eL,
                                            frame: Y,
                                            authorId: eh.authorId,
                                            title: (0, lN.Bx)(eh.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                W.confirmingRemove ? X({ ...W, confirmingRemove: !1 }) : X(null);
                                            },
                                            onMouseLeave: () => {
                                                W.editing || W.confirmingRemove || X(null);
                                            },
                                            children: [
                                                W.editing
                                                    ? (0, i.jsx)(nj.f, {
                                                          autoFocus: !0,
                                                          label: T.intl.string(R.default.KCYqWL),
                                                          hideLabel: !0,
                                                          value: W.draft,
                                                          maxLength: 1e3,
                                                          rows: 3,
                                                          onChange: (e) => X({ ...W, draft: e }),
                                                          onKeyDown: (e) => {
                                                              "Enter" !== e.key ||
                                                                  e.shiftKey ||
                                                                  (e.preventDefault(), eN());
                                                          },
                                                      })
                                                    : (0, i.jsx)(v.E, {
                                                          variant: "body-sm/normal",
                                                          color: "text-default",
                                                          className: mf.aC,
                                                          children: eh.comment,
                                                      }),
                                                (0, G.It)(eh, p)
                                                    ? (0, i.jsx)("div", {
                                                          className: mf.eB,
                                                          children: W.confirmingRemove
                                                              ? (0, i.jsxs)(i.Fragment, {
                                                                    children: [
                                                                        (0, i.jsx)(v.E, {
                                                                            variant: "body-xs/normal",
                                                                            color: "text-muted",
                                                                            className: mf.nv,
                                                                            children: T.intl.string(R.default.wOHvts),
                                                                        }),
                                                                        (0, i.jsx)(d.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: T.intl.string(R.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                X({ ...W, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, i.jsx)(d.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: T.intl.string(R.default.friIzR),
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
                                                                            text: T.intl.string(R.default.friIzR),
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
                                                                                  disabled: !(0, lN.Ch)(W.draft),
                                                                                  text: T.intl.string(R.default.iicRP9),
                                                                                  onClick: eN,
                                                                              })
                                                                            : (0, i.jsx)(d.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: T.intl.string(
                                                                                      R.default["6eW9lg"],
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
function mb(e) {
    let { authorId: t } = e,
        n = (0, c.bG)([nC.default], () => nC.default.getUser(t), [t]);
    return (0, i.jsx)(iM.eu, {
        src: null == n ? null : iT.Ay.getUserAvatarURL(n),
        size: iR._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function my(e) {
    let t,
        n,
        l,
        r,
        s,
        u,
        { point: o, frame: c, authorId: d, title: m, testId: f, onDismiss: h, onMouseLeave: g, children: p } = e,
        x = a.useRef(null),
        j = a.useRef(null),
        [b, y] = a.useState(mh);
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
            originX: S,
            originY: A,
        } = ((n = Math.max((t = c.left + 8), c.left + c.width - 300 - 8)),
        (r = Math.max((l = c.top + 8), c.top + c.height - 160 - 8)),
        (s = Math.min(Math.max(o.x - b.x, t), n)),
        { left: s, top: (u = Math.min(Math.max(o.y - b.y, l), r)), originX: o.x - s, originY: o.y - u }),
        C = { left: k, top: w, "--custom-conjure-card-origin-x": `${S}px`, "--custom-conjure-card-origin-y": `${A}px` };
    return (0, i.jsxs)("div", {
        ref: x,
        className: mf.Nr,
        style: C,
        "data-testid": f,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, i.jsxs)("div", {
                className: mf.MY,
                children: [
                    (0, i.jsx)("span", { ref: j, className: mf.ip, children: (0, i.jsx)(mb, { authorId: d }) }),
                    (0, i.jsx)(v.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        className: mf.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: mf.zI, children: p }),
        ],
    });
}
let mk = 300,
    mw = 2;
function mS(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function mA(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function mC(e) {
    let { box: t } = e;
    return (0, i.jsx)("div", { className: mf.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var mN = n(318774),
    mI = n(697744),
    mE = n(130324);
function m_(e) {
    let t = (0, mI.c)(),
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
    let r = (0, tK.j)();
    return (
        a.useEffect(() => {
            if (!r) return;
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e, r]),
        t
    );
}
function mM(e) {
    let { className: t } = e,
        { Component: n, events: l } = m_(3e4);
    return (0, i.jsxs)("div", {
        className: o()(t, mE.Ve),
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, i.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, i.jsx)(v.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                className: mE.ol,
                children: T.intl.string(R.default.AyiQEp),
            }),
        ],
    });
}
var mR = n(251363),
    mT = n(944142),
    mP = n(532247),
    mL = n(501628);
function m$(e) {
    let { progress: t } = e,
        { Component: n } = m_(1500),
        l = D.Q_.useSetting();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, i.jsx)(v.E, { variant: "body-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, i.jsx)("div", {
                className: mL.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, i.jsx)(
                        "span",
                        {
                            className: mL.PM,
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
function mq(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        u = (0, c.bG)([mT.A], () => (s ? mT.A.getLiveReload(t) : null), [s, t]),
        o = (0, eP.A)(n, r)?.id ?? null,
        d = u?.phase ?? null,
        m = u?.background === !0,
        f = (function (e, t, n) {
            let l = (0, mP.dv)(e),
                [r, i] = a.useState(null),
                [s, u] = a.useState(l),
                [o, d] = a.useState(t);
            s !== l && (u(l), d(t), i(null != l || o ? null : (0, mP.QP)(e, s)));
            let m = (0, c.bG)(
                    [eh.A],
                    () => {
                        let e = eh.A.getFrame(n);
                        return (0, ej.x1)(e) && e.data.proxyTicketRefreshing;
                    },
                    [n],
                ),
                f = a.useRef(m),
                h = a.useRef(!1);
            return (
                a.useEffect(() => {
                    ((f.current = m), m && (h.current = !0));
                }, [m]),
                a.useEffect(() => {
                    if (null == r) return;
                    function e() {
                        return i(null);
                    }
                    function t(t) {
                        null != t.target && t.target === (0, mR.ow)(null, n) && e();
                    }
                    ((h.current = f.current), document.addEventListener("load", t, !0));
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
        })(d, m, o),
        h = m ? null : (0, mP.h_)(d, u?.step ?? null, f);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(t0.A, { tag: "div", role: "status", "aria-live": "polite", children: h?.title ?? "" }),
            null != h
                ? (0, i.jsx)("div", {
                      className: mL.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, i.jsx)(m$, { progress: h }),
                  })
                : null,
        ],
    });
}
let mD = 0;
var mF = n(782134),
    mO = n(357858),
    mG = n(343030),
    mz = n(11411),
    mU = n(111518),
    mB = n(240666);
let mK = { width: 1 / 0, height: 1 / 0 };
function mH(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mK;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var mV = n(702083);
function mW(e) {
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
        m = n ? mH(l, d ?? void 0) : null;
    return (0, i.jsx)("div", {
        ref: r,
        className: o()(mV.dw, { [mV.PQ]: null != m }),
        children: (0, i.jsx)("div", { className: o()(mV.R9, { [mV.Vg]: null != m }), style: m ?? void 0, children: t }),
    });
}
var mX = n(347927);
function mQ(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, i.jsxs)("div", {
        className: o()(mX.Bf, l && mX.Qx),
        children: [
            (0, i.jsxs)("div", {
                className: mX.Ux,
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
var mZ = n(957272);
function mY(e) {
    let { applicationId: t, surface: n, launch: l, frameOverlay: r } = e,
        { frame: a, state: s } = (0, mU.A)({ applicationId: t, surface: n, launch: l });
    if (((0, mB.A)(t, n), s === mU.n.Launched)) {
        let e = (0, i.jsx)(mz.A, { frameId: a.id, level: mG.A.WithinAppContent, className: mZ.Z7, overlay: r });
        return (0, e$.Q5)(n) ? (0, i.jsx)(mW, { children: e }) : e;
    }
    return (0, i.jsx)(mJ, { state: s });
}
function mJ(e) {
    let { state: t } = e;
    switch (t) {
        case mU.n.RenderingElsewhere:
            return (0, i.jsx)("div", {
                className: mZ.qs,
                children: (0, i.jsx)(mQ, {
                    title: T.intl.string(R.default["9kpdo7"]),
                    body: T.intl.string(R.default.iIA8Nj),
                }),
            });
        case mU.n.NoApplication:
            return (0, i.jsx)(mM, { className: mZ.qs });
        case mU.n.DoesNotSupportSurface:
            return (0, i.jsx)("div", {
                className: mZ.qs,
                children: (0, i.jsx)(mQ, {
                    title: T.intl.string(R.default["7k4GyN"]),
                    body: T.intl.string(R.default.zdIy3R),
                }),
            });
        case mU.n.Error:
            return (0, i.jsxs)("div", {
                className: mZ.qs,
                children: [
                    (0, i.jsx)(x.D, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        children: T.intl.string(R.default.lTPbnG),
                    }),
                    (0, i.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-feedback-critical",
                        className: mZ.tj,
                        children: T.intl.string(R.default.e6GiAZ),
                    }),
                ],
            });
        case mU.n.AwaitingLaunch:
        case mU.n.Loading:
            return (0, i.jsx)("div", { className: mZ.qs, children: (0, i.jsx)(j.y, {}) });
    }
}
var m0 = n(308528),
    m1 = n(334738),
    m2 = n(699344),
    m3 = n(365971),
    m4 = n(703462);
function m7(e) {
    let { message: t } = e;
    return (0, i.jsxs)("div", {
        className: m4.f,
        children: [
            (0, i.jsx)(au.AppsIcon, { size: "lg", color: "var(--icon-muted)" }),
            (0, i.jsx)(v.E, { variant: "body-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function m5() {
    return (0, i.jsx)("div", { className: m4.f, children: (0, i.jsx)(j.y, {}) });
}
function m9(e) {
    let t,
        n,
        { projectId: l, previewApplicationId: r } = e,
        [s, u] = a.useState(null),
        o = s?.previewApplicationId === r ? s.channelId : null,
        d = (0, c.bG)([nS.A], () => (null != o ? nS.A.getChannel(o) : null), [o]);
    ((t = d?.id ?? null),
        a.useEffect(() => {
            null != t && m0.A.preload(ev.ME, t);
        }, [t]),
        (n = (0, c.bG)([or.A], () => or.A.isFocused())),
        a.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, m3.Xg)();
            return (
                (0, m1.yl)(t, e),
                () => {
                    (0, m1.dm)(t, e);
                }
            );
        }, [t, n]));
    let [m, f] = a.useState(null),
        h = m === r;
    return (a.useEffect(() => {
        if (null != d || h) return;
        let e = !1;
        return (
            (0, Y.CN)(l).then(
                (t) => {
                    e || u({ previewApplicationId: r, channelId: t });
                },
                () => {
                    e || f(r);
                },
            ),
            () => {
                e = !0;
            }
        );
    }, [l, r, d, h]),
    h)
        ? (0, i.jsx)(m7, { message: T.intl.string(R.default["VP/O8s"]) })
        : null == d
          ? (0, i.jsx)(m5, {})
          : (0, i.jsx)("div", {
                className: m4.g,
                children: (0, i.jsx)(m2.A, { channel: d, guild: null, chatInputType: sz.oU.SIDEBAR }, d.id),
            });
}
var m8 = n(765671),
    m6 = n(596977),
    fe = n(921853),
    ft = n(582063);
function fn(e) {
    let { projectId: t, captures: n, selected: l } = e,
        r = [...n, null],
        a = null != l ? n.indexOf(l) : n.length;
    function s(e) {
        let n = r[(a + e + r.length) % r.length];
        (0, Y.vX)(t, n?.id ?? null);
    }
    let u = T.intl.string(R.default.Gl3XtE),
        o = T.intl.string(R.default["3FvcrY"]);
    return (0, i.jsxs)("div", {
        className: ft.aF,
        children: [
            (0, i.jsx)(e4.m, {
                text: u,
                position: "top",
                children: (0, i.jsx)(ti.K, {
                    icon: fe.ChevronSmallLeftIcon,
                    size: "sm",
                    variant: "overlay-secondary",
                    "aria-label": u,
                    onClick: () => s(-1),
                }),
            }),
            (0, i.jsx)("div", {
                className: ft.Dn,
                "aria-live": "polite",
                children:
                    null != l
                        ? (0, i.jsx)(v.E, {
                              tag: "span",
                              variant: "body-sm/medium",
                              color: "text-strong",
                              lineClamp: 1,
                              children: T.intl.formatToPlainString(R.default["140n5k"], {
                                  name: l.name,
                                  index: a + 1,
                                  count: n.length,
                              }),
                          })
                        : (0, i.jsx)(v.E, {
                              tag: "span",
                              variant: "body-sm/medium",
                              color: "text-strong",
                              children: T.intl.string(R.default.wVJL0P),
                          }),
            }),
            (0, i.jsx)(e4.m, {
                text: o,
                position: "top",
                children: (0, i.jsx)(ti.K, {
                    icon: t1.ChevronSmallRightIcon,
                    size: "sm",
                    variant: "overlay-secondary",
                    "aria-label": o,
                    onClick: () => s(1),
                }),
            }),
        ],
    });
}
var fl = n(625903),
    fr = n(666476);
let fi = ["image/png", "image/jpeg", "image/gif", "image/webp"];
function fa() {
    (0, E.P0)({ text: T.intl.string(R.default.jj3abP), variant: "critical" });
}
function fs(e) {
    let { projectId: t } = e,
        n = a.useRef(null),
        l = a.useRef(null),
        r = T.intl.string(R.default["xd/1IW"]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(ey.Y, {
                targetElementRef: n,
                align: "left",
                position: "bottom",
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, i.jsx)(fu, { projectId: t, onClose: n, onUpload: () => l.current?.click() });
                },
                children: (e) => {
                    let { onClick: t } = e;
                    return (0, i.jsx)("div", {
                        ref: n,
                        className: ft.m2,
                        children: (0, i.jsx)(e4.m, {
                            position: "bottom",
                            text: r,
                            asContainer: !0,
                            children: (0, i.jsx)(ti.K, {
                                "aria-label": r,
                                icon: fl.SettingsIcon,
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
                accept: fi.join(","),
                hidden: !0,
                "aria-hidden": !0,
                tabIndex: -1,
                onChange: (e) => {
                    let n = e.currentTarget.files?.[0];
                    ((e.currentTarget.value = ""),
                        null != n &&
                            (fi.includes(n.type)
                                ? n.size > fr.aI
                                    ? (0, E.P0)({ text: T.intl.string(R.default.T8Spiu), variant: "critical" })
                                    : (0, rH.M$)(t, n).catch(fa)
                                : (0, E.P0)({ text: T.intl.string(R.default.AO7zpk), variant: "critical" })));
                },
            }),
        ],
    });
}
function fu(e) {
    let { projectId: t, onClose: n, onUpload: l } = e,
        r = (0, c.bG)([rK.A], () => rK.A.getBackground(t)),
        a = r?.blur !== !1,
        s = r?.imageEtag ?? null;
    return (0, i.jsxs)(ek.W, {
        "data-menu-migrated": !0,
        navId: "conjure-overlay-background",
        "aria-label": T.intl.string(R.default["xd/1IW"]),
        onClose: n,
        onSelect: void 0,
        children: [
            (0, i.jsxs)(ew.rX, {
                children: [
                    (0, i.jsx)(ew.Dr, {
                        id: "conjure-overlay-background-upload",
                        label: T.intl.string(R.default.uQpDky),
                        icon: ld.ImagePlusIcon,
                        action: () => {
                            (n(), l());
                        },
                    }),
                    (0, i.jsx)(ew.Dr, {
                        id: "conjure-overlay-background-reset",
                        label: T.intl.string(R.default.AiAz8J),
                        icon: dT.RetryIcon,
                        disabled: null == s,
                        action: () => {
                            (n(), (0, rH.Og)(t).catch(fa));
                        },
                    }),
                ],
            }),
            (0, i.jsx)(ew.rX, {
                children: (0, i.jsx)(ew.fP, {
                    id: "conjure-overlay-background-blur",
                    label: T.intl.string(R.default["hyN+kc"]),
                    checked: a,
                    action: () => {
                        (0, rH.Y1)(t, !a) || fa();
                    },
                }),
            }),
        ],
    });
}
function fo(e) {
    let { applicationId: t, projectId: n, size: l, frameOverlay: r } = e,
        { ref: s, width: u, height: o } = (0, m8.Ay)(),
        { captures: c, selected: d } = rB(n),
        m = (function (e, t, n) {
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
        a.useEffect(() => (0, m6.L0)(), []),
        (0, i.jsxs)("div", {
            className: ft.JH,
            children: [
                (0, i.jsx)(rW, { projectId: n, gameCaptures: !0 }),
                (0, i.jsx)("div", {
                    ref: s,
                    className: ft.dw,
                    children: (0, i.jsx)("div", {
                        className: ft.HL,
                        style: {
                            "--custom-conjure-overlay-widget-width": `${l.width}px`,
                            "--custom-conjure-overlay-widget-height": `${l.height}px`,
                            "--custom-conjure-overlay-widget-top": `${m.top}px`,
                            "--custom-conjure-overlay-widget-end": `${m.end}px`,
                            "--custom-conjure-overlay-widget-scale": String(m.scale),
                        },
                        children: (0, i.jsx)(mY, { applicationId: t, surface: ej.ZN, frameOverlay: r }),
                    }),
                }),
                null != n ? (0, i.jsx)(fs, { projectId: n }) : null,
                null != n && c.length > 0 ? (0, i.jsx)(fn, { projectId: n, captures: c, selected: d }) : null,
            ],
        })
    );
}
function fc(e) {
    let { onAddBot: t, loading: n = !1 } = e;
    return (0, i.jsx)(mQ, {
        title: T.intl.string(R.default.xlEjZ8),
        body: T.intl.string(R.default["4ByPbd"]),
        children: (0, i.jsx)(d.$, {
            size: "sm",
            variant: "primary",
            text: T.intl.string(R.default.RGeB11),
            onClick: t,
            loading: n,
        }),
    });
}
var fd = n(409478),
    fm = n(652227);
function ff(e) {
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
            overlayWidgetSize: m = et,
            projectId: f,
            renderFrameOverlay: h,
            paused: g = !1,
            onResume: p,
        } = e,
        x = (0, c.bG)([l_.A], () => null != f && null != l_.A.getSetupStartedAt(f), [f]);
    return s?.type === "checking"
        ? (0, i.jsx)("div", { className: fm.qs, children: (0, i.jsx)(j.y, {}) })
        : s?.type === "bot_install"
          ? (0, i.jsx)("div", {
                className: fm.qs,
                children: (0, i.jsx)(fc, { onAddBot: s.onAddBot, loading: s.loading }),
            })
          : a
            ? null == t
                ? null
                : (0, i.jsxs)("div", {
                      "data-conjure-entrance": !0,
                      className: fm.RG,
                      children: [
                          (0, ea.yf)(u, o)
                              ? g
                                  ? (0, i.jsx)(fh, { projectId: f, onResume: p })
                                  : (0, i.jsx)(mY, { applicationId: t, surface: l, launch: r, frameOverlay: h?.(l) })
                              : null,
                          "widget" === o && null != d
                              ? "unavailable-authorization-revoked" === u.profileState
                                  ? (0, i.jsx)("div", {
                                        className: fm.qs,
                                        children: (0, i.jsx)(mQ, {
                                            wide: !0,
                                            title: T.intl.string(R.default["08U+YO"]),
                                            body: T.intl.string(R.default.pKBfrc),
                                        }),
                                    })
                                  : (0, i.jsx)(fd.A, { applicationId: d })
                              : null,
                          "overlay" === o && u.modes.includes("overlay")
                              ? (0, i.jsx)(fo, { applicationId: t, projectId: f, size: m, frameOverlay: h?.(ej.ZN) })
                              : null,
                          "bot" === o && null != n && null != f
                              ? (0, i.jsx)(m9, { projectId: f, previewApplicationId: n })
                              : null,
                      ],
                  })
            : x
              ? (0, i.jsx)("div", { className: fm.qs, children: (0, i.jsx)(j.y, {}) })
              : (0, i.jsx)(mM, { className: fm.qs });
}
function fh(e) {
    let { projectId: t, onResume: n } = e;
    return (
        (0, mO.Pu)(t),
        (0, i.jsx)("div", {
            className: fm.qs,
            children: (0, i.jsx)(mQ, {
                wide: !0,
                title: T.intl.string(R.default.MMWEH2),
                body: T.intl.string(R.default.iKSu55),
                children:
                    null != n
                        ? (0, i.jsx)(d.$, {
                              size: "sm",
                              variant: "primary",
                              icon: mF.PlayIcon,
                              text: T.intl.string(R.default.ZKd2Cw),
                              onClick: n,
                          })
                        : null,
            }),
        })
    );
}
var fg = n(750506),
    fp = n(867193),
    fx = n(539197),
    fv = n(977020);
function fj(e) {
    let { projectId: t } = e,
        n = (0, fx.X2)(t),
        l = (function (e) {
            let [t, n] = a.useState(null);
            return (
                a.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, fx.Ie)(e);
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
    function m(e, t) {
        return { "--custom-conjure-cursor-x": `${e * d}px`, "--custom-conjure-cursor-y": `${t * d}px` };
    }
    return (0, i.jsxs)("div", {
        className: fv.$Q,
        style: { left: r, top: s, width: u, height: c, "--custom-conjure-cursor-scale": d },
        "aria-hidden": !0,
        [fx.t$]: "",
        children: [
            n.presses > 0
                ? (0, i.jsxs)(
                      a.Fragment,
                      {
                          children: [
                              (0, i.jsx)("div", { className: o()(fv.hN, fv.vW), style: m(n.pressX, n.pressY) }),
                              (0, i.jsx)("div", { className: o()(fv.hN, fv.A7), style: m(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, i.jsx)("svg", {
                className: o()(fv.UE, { [fv.SP]: n.shown, [fv.Vq]: n.pressed, [fv.GP]: n.dipping }),
                style: m(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, i.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var fb = n(417760);
function fy(e) {
    let { phase: t, projectId: n, compact: l } = e,
        { stop: r, stopping: s } = (function (e) {
            let t = (0, c.bG)([lR.A], () => null != e && lR.A.isThinking(e)),
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
        m = "controlling" === t,
        f = T.intl.string(m ? (u ? R.default["VJW/5P"] : R.default["+hD2Iz"]) : R.default["h+i1r9"]),
        h =
            null != r
                ? (0, i.jsx)(d.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: T.intl.string(R.default.oU59sU),
                      loading: s,
                      onClick: r,
                      "data-testid": "conjure-control-stop",
                  })
                : null;
    return l
        ? (0, i.jsxs)("div", {
              className: o()(fb.M0, fb.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  m
                      ? (0, i.jsx)(o7.i, { size: 12, color: "currentColor" })
                      : (0, i.jsx)(aq.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, i.jsx)(v.E, { variant: "body-sm/semibold", color: "none", className: fb.ID, children: f }),
                  m ? (0, i.jsx)(t0.A, { children: T.intl.string(R.default.fg1sor) }) : null,
                  m ? (0, i.jsx)("div", { className: fb.lC, children: h }) : null,
              ],
          })
        : (0, i.jsxs)("div", {
              className: fb.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, i.jsxs)("div", {
                      className: fb.sp,
                      children: [
                          (0, i.jsx)(aq.SparklesIcon, { size: "sm", color: "currentColor" }),
                          m ? (0, i.jsx)(o7.i, { size: 12, color: "currentColor" }) : null,
                          (0, i.jsxs)("div", {
                              className: fb.f4,
                              children: [
                                  (0, i.jsx)(v.E, {
                                      variant: "body-sm/semibold",
                                      color: "none",
                                      className: fb.w9,
                                      children: f,
                                  }),
                                  m
                                      ? (0, i.jsx)(v.E, {
                                            variant: "body-xs/medium",
                                            color: "none",
                                            className: fb.Rb,
                                            children: T.intl.string(R.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  m ? (0, i.jsx)("div", { className: fb.lC, children: h }) : null,
              ],
          });
}
function fk(e) {
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
    let [m, f] = a.useState(null),
        [h, g] = a.useState(null),
        [p, x] = a.useState(null),
        v = "idle" !== o;
    a.useEffect(() => {
        if (!v) return;
        function e() {
            let e = te(r());
            f((t) => (tt(t, e) ? t : e));
            let t = null == h ? null : te(h);
            (x((e) => (tt(e, t) ? e : t)), null != h && (0, fp.C)(h.getBoundingClientRect().height));
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
                    null != h && (0, fp.C)(0));
            }
        );
    }, [v, r, h]);
    let j = "idle" !== o && null != m,
        b = j && "controlling" === o && !c,
        y = null != m && m.width < 420,
        k = null == m ? void 0 : { left: m.left, top: m.top, width: m.width, height: m.height },
        w =
            null == m
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
                  })(m, p),
        S = (function () {
            let [e] = a.useContext(fg.uY),
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
                      className: fb.D,
                      "data-phase": o,
                      children: (0, i.jsx)("div", {
                          className: fb.QF,
                          children: (0, i.jsx)(fy, { phase: o, projectId: t, compact: y }),
                      }),
                  })
                : null,
            (0, e0.createPortal)(
                (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(t0.A, {
                        tag: "div",
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-control-announcer",
                        children:
                            "controlling" === o
                                ? T.intl.string(R.default.oWcemF)
                                : "handoff" === o
                                  ? T.intl.string(R.default["h+i1r9"])
                                  : "",
                    }),
                }),
                document.body,
            ),
            b
                ? (0, e0.createPortal)(
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", {
                                  className: fb.ys,
                                  style: w,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)("div", {
                                  className: fb.om,
                                  style: k,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)(fj, { projectId: t }),
                          ],
                      }),
                      S,
                  )
                : null,
        ],
    });
}
var fw = n(399503),
    fS = n(853555),
    fA = n(944100),
    fC = n(327152),
    fN = n(187645);
let fI = { width: 1280, height: 720 },
    fE = new Map(),
    f_ = !1;
function fM() {
    let e = new Map();
    for (let t of new Set([...lR.A.getActivityOrderedProjectIds(), ...(0, O.T7)()])) {
        if (!(lR.A.isThinking(t) || (0, O.wK)(t)) || J.A.isPaused(t)) continue;
        let n = (function (e) {
            let t = eR.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = [(0, e$.Rc)(t), (0, e$.Th)(t)].find(ej.x1);
            return n?.id ?? null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [l, r] of [...fE]) {
        var t, n;
        e.get(l) !== r.frameId &&
            ((t = l),
            (n = r),
            fE.delete(t),
            n.unregisterLookup(),
            fA.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove(),
            (0, fC.Pn)(n.frameId, null));
    }
    for (let [t, n] of e)
        fE.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = fN.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    fR(n, e, t),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (fE.set(e, l),
                    (l.unregisterLookup = (0, fS.Ng)(e, () => (0, mR.n5)(n, t))),
                    fA.A.registerFrameTarget(t, n, mG.A.Backstage, void 0));
            })(t, n);
    for (let [e, t] of fE) fR(t.element, e, t.frameId);
}
function fR(e, t, n) {
    if (eh.A.getFrame(n)?.surface.type === es.U.OVERLAY) {
        let l = er(eR.Ay.getProject(t));
        (e.classList.remove(fN.L),
            (e.style.width = `${l.width}px`),
            (e.style.height = `${l.height}px`),
            (0, fC.Pn)(n, l));
        return;
    }
    let l = eL.A.isBuilderPreviewMobile();
    e.classList.toggle(fN.L, !l);
    let r = l ? mH(eL.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != r ? `${r.width}px` : ""),
        (e.style.height = null != r ? `${r.height}px` : ""),
        (0, fC.Pn)(n, r ?? fI));
}
var fT = n(873727),
    fP = n(850333),
    fL = n(418842),
    f$ = n(413599);
let fq = 0;
var fD = n(487887);
let fF = null;
var fO = n(949621);
function fG(e) {
    let { projectId: t } = e,
        n = (0, c.bG)(
            [eR.Ay],
            () => {
                let e = eR.Ay.getProject(t);
                return null == e || null != e.install_scope_setup ? null : e.install_scope;
            },
            [t],
        );
    if (null == n) return null;
    let l = "guild" === n,
        r = T.intl.string(l ? R.default.cAExE8 : R.default["15Y/Yz"]);
    return (0, i.jsx)(tJ.u, {
        title: r,
        body: T.intl.string(l ? R.default.r8rVq1 : R.default.IZMyda),
        position: "bottom",
        children: (0, i.jsx)("span", { className: fO.I, tabIndex: 0, children: (0, i.jsx)(dZ.v, { text: r }) }),
    });
}
var fz = n(541940);
function fU(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            header: u,
            mainClassName: d,
            content: m,
            sidebar: f,
            showsFrame: h,
            paused: g,
        } = e,
        [p, x] = a.useState(null),
        v = (0, eP.A)(l, s),
        j = v?.id ?? null;
    (!(function (e, t) {
        let n = (0, c.bG)([f$.A], () => (0, fT.x4)(f$.A.theme)),
            l = (0, c.bG)([fP.A], () => fP.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: i,
                highContrast: s,
                forcedColors: u,
                underlineLinks: o,
            } = (0, c.cf)([iE.Ay], () => ({
                reducedMotion: iE.Ay.useReducedMotion,
                fontScale: (0, fT.U0)(),
                highContrast: iE.Ay.isHighContrastModeEnabled,
                forcedColors: iE.Ay.useForcedColors,
                underlineLinks: iE.Ay.alwaysShowLinkDecorations,
            })),
            d = D.hH.useSetting(),
            m = (0, fL.C)(),
            f = (0, c.bG)(
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
                let l = (0, mR.n5)(e, t);
                if (null == l) return;
                p.current = l;
                let a = {
                    revision: ++fq,
                    baseTheme: n,
                    customTheme: (0, fT.Lq)(),
                    uiDensity: m,
                    messageDisplayCompact: d,
                    fontScale: i,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: u,
                    underlineLinks: o,
                    formFactor: f,
                };
                (0, md.W)(l, "set-env", a, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [n, u, i, f, t, s, d, e, r, m, o]),
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
                let n = (0, mR.n5)(e, t);
                null != n && n !== p.current && j();
            }),
            a.useEffect(() => {
                function n(n) {
                    n.target === (0, mR.n5)(e, t) && ((p.current = null), j());
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
            if (null != t) return (0, fS.Ng)(t, () => (0, mR.n5)(p, j));
        }, [t, p, j]));
    let b = a.useCallback(() => (0, mR.ow)(p, j), [p, j]),
        y = a.useCallback(() => (h ? (0, mR.ow)(p, j) : p), [h, p, j]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: o()(fz.Mh, d),
                children: [
                    u,
                    g
                        ? null
                        : (0, i.jsx)(fk, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveTarget: y,
                              frameId: j,
                          }),
                    (0, i.jsx)("div", { ref: x, className: fz.fm, children: m }),
                ],
            }),
            f,
            g
                ? null
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(mj, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveIframe: b,
                              toggleRef: n,
                          }),
                          (0, i.jsx)(tF, { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: b }),
                      ],
                  }),
        ],
    });
}
function fB(e) {
    let t,
        {
            projectId: n,
            designFeedbackToggleRef: l,
            applicationId: r,
            previewApplicationId: s,
            surface: u,
            frameLaunchParams: d,
            header: m,
            chatOpen: f,
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
            activeMode: S,
            widgetApplicationId: A,
            overlayWidgetSize: C,
            previewPaused: N = !1,
            onResumePreview: I,
        } = e;
    (0, fw.k)(n, A);
    let E = u.type === es.U.MAIN || (0, e$.Q5)(u);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, c.cf)([eL.A], () => ({
            mobile: eL.A.isBuilderPreviewMobile(),
            landscape: eL.A.isBuilderPreviewLandscape(),
        }));
        a.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? fD.aX.LANDSCAPE : fD.aX.PORTRAIT), (fF = e));
                else {
                    if (fF !== e) return;
                    ((l = fD.aX.UNHANDLED), (fF = null));
                }
                uJ.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(E ? r : null);
    let _ = a.useRef(null),
        [M, P] = a.useState(0);
    (a.useEffect(() => {
        if (null == n) return;
        (0, tG.T)(n);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, tG.T)(n);
        }, 3e3);
        return () => clearInterval(e);
    }, [n]),
        (t = a.useRef(0)),
        a.useLayoutEffect(() => {
            E && ((t.current = ++mD), (0, Y.HV)(r));
        }, [r, E]),
        a.useEffect(() => {
            if (!E) return;
            let e = t.current;
            return () => {
                e === mD && (0, Y.HV)(null);
            };
        }, [r, E]),
        a.useEffect(() => {
            null != n &&
                ((0, eO.ensureConnection)(n),
                f_ ||
                    ((f_ = !0),
                    lR.A.addChangeListener(fM),
                    eR.Ay.addChangeListener(fM),
                    eh.A.addChangeListener(fM),
                    eL.A.addChangeListener(fM),
                    J.A.addChangeListener(fM),
                    (0, O.W3)(fM),
                    fM()));
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
        $ = f || E;
    return (0, i.jsx)("div", {
        ref: _,
        className: fz.LB,
        children: (0, i.jsx)(fU, {
            projectId: n,
            designFeedbackToggleRef: l,
            applicationId: r,
            previewApplicationId: s,
            surface: u,
            header: m,
            showsFrame: (0, ea.yf)(w, S),
            paused: N,
            mainClassName: null == m ? void 0 : o()(fz.ez, { [fz.zt]: f }),
            content: (0, i.jsx)(ff, {
                applicationId: r,
                previewApplicationId: s,
                surface: u,
                frameLaunchParams: d,
                previewReady: y,
                previewGate: k,
                availability: w,
                activeMode: S,
                widgetApplicationId: A,
                overlayWidgetSize: C,
                projectId: n,
                paused: N,
                onResume: I,
                renderFrameOverlay: (e) =>
                    (0, i.jsx)(mq, { projectId: n, applicationId: r, previewApplicationId: s, surface: e }),
            }),
            sidebar:
                null != n && $
                    ? (0, i.jsx)("div", {
                          className: f ? fz.v7 : fz.LL,
                          children: (0, i.jsx)(eJ.A, {
                              sidebarType: eJ.X.CallChatSidebar,
                              maxWidth: L,
                              capturePointer: !0,
                              children: (0, i.jsx)("div", {
                                  className: fz.cO,
                                  children: v
                                      ? (0, i.jsx)(mi, { projectId: n, onClose: j ?? (() => {}) }, n)
                                      : (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(mN.Ay, { projectId: n }),
                                                (0, i.jsxs)(eX.Ay, {
                                                    "aria-label": T.intl.string(T.t["/VQax8"]),
                                                    toolbar: (0, i.jsxs)(i.Fragment, {
                                                        children: [
                                                            g,
                                                            null == h
                                                                ? null
                                                                : (0, i.jsx)(eX.Ay.Icon, {
                                                                      icon: eY.XSmallIcon,
                                                                      tooltip: T.intl.string(R.default.JD6Oit),
                                                                      onClick: h,
                                                                  }),
                                                        ],
                                                    }),
                                                    children: [
                                                        (0, i.jsx)(eX.Ay.Title, {
                                                            children: T.intl.string(T.t["/VQax8"]),
                                                        }),
                                                        (0, i.jsx)(fG, { projectId: n }),
                                                    ],
                                                }),
                                                (0, i.jsx)("div", {
                                                    className: fz.cb,
                                                    children: (0, i.jsx)(
                                                        cy,
                                                        {
                                                            projectId: n,
                                                            restoreState: b,
                                                            onRestoreVersion: p,
                                                            onImportProject: x,
                                                            escapeScopeRef: _,
                                                            visible: f,
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
var fK = n(705427),
    fH = n(606128),
    fV = n(323140);
function fW(e) {
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
        { restoreState: em, handleRestoreVersion: ef } = (function (e, t) {
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
                                                        text: T.intl.formatToPlainString(R.default.Z4n6LX, {
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
                                                    text: T.intl.string(R.default["PSdo+w"]),
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
                    [eR.Ay, eM.A],
                    () => (null == l ? null : (eR.Ay.getIntegrationStatus(l) ?? eM.A.getIntegrationStatus(l))),
                    [l],
                ),
                u = e?.preview_application_id ?? null,
                { isLoading: o } = (0, eE.YY)(u ?? void 0),
                d = null != l && t !== l,
                m = s?.preview_ready === !0,
                f = s?.has_activity === !0,
                h = s?.bot_permissions_changed === !0,
                g = (0, ea.Qg)({
                    installScope: e?.install_scope ?? null,
                    previewReady: m,
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
                    previewReady: m,
                    hasFrame: f,
                }
            );
        })(s),
        ek =
            (0, c.bG)([eG.A], () => (null == eh ? void 0 : eG.A.getPublishStatus(eh)?.previewAppChannels), [eh]) ??
            eg?.preview_app_channels,
        {
            availability: ew,
            activeMode: eS,
            setMode: eA,
            frameSurface: eC,
            frameSurfaceOptions: eW,
            setFrameSurface: eX,
            appChannel: eQ,
            setAppChannel: eY,
            frameLaunchParams: eJ,
            widgetApplicationId: e0,
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
        e1 = er(s);
    ((0, ei.x)(eh, (e) => {
        ew.modes.includes(e) && eA(e);
    }),
        q(eh, () => {
            ($(!0), et(!0));
        }));
    let e2 = ew.modes.includes("frame"),
        e3 = (0, c.bG)([J.A], () => J.A.isPaused(eh), [eh]),
        {
            previewTargetOptions: e4,
            handleSelectPreviewTarget: e7,
            mobilePreview: e5,
            mobilePreviewLabel: e9,
            handleToggleMobilePreview: e8,
            landscapePreview: e6,
            rotatePreviewLabel: te,
            handleRotatePreview: tt,
            previewSurface: tn,
            previewFrame: tl,
            refreshFrame: tr,
            isRefreshing: ti,
            handleRefresh: ta,
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
                m = a.useMemo(
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
                f = a.useCallback(
                    (e) => {
                        ("frame" === e.mode && (o(e.surface), null != e.appChannel && d?.(e.appChannel)), u(e.mode));
                    },
                    [d, o, u],
                ),
                h = (0, c.bG)([eL.A], () => eL.A.isBuilderPreviewMobile()),
                g = T.intl.string(h ? R.default.tKGF0Q : R.default.peqEOY),
                p = a.useCallback(() => (0, Y.GG)(!h), [h]),
                x = (0, c.bG)([eL.A], () => eL.A.isBuilderPreviewLandscape()),
                v = T.intl.string(x ? R.default.tunI2l : R.default.DoNdjA),
                j = a.useCallback(() => (0, Y.Lw)(!x), [x]),
                b = (0, e$.jS)(t),
                y = a.useMemo(() => (0, e$.Op)(b, r), [b, r]),
                k = (0, eP.A)(t?.preview_application_id ?? null, y),
                w = (0, eP.A)(t?.preview_application_id ?? null, ej.ZN),
                S = "overlay" === l ? w : k,
                A = (0, ej.x1)(S) && S.data.proxyTicketRefreshing,
                C = a.useCallback(() => {
                    null == S || A || eT.A.refreshProxyTicket(S.id);
                }, [S, A]);
            return {
                previewTargetOptions: m,
                handleSelectPreviewTarget: f,
                mobilePreview: h,
                mobilePreviewLabel: g,
                handleToggleMobilePreview: p,
                landscapePreview: x,
                rotatePreviewLabel: v,
                handleRotatePreview: j,
                previewSurface: y,
                previewFrame: k,
                refreshFrame: S,
                isRefreshing: A,
                handleRefresh: C,
            };
        })({
            project: s,
            modes: ew.modes,
            activeMode: eS,
            frameSurface: eC,
            frameSurfaceOptions: eW,
            previewAppChannels: ek,
            setMode: eA,
            setFrameSurface: eX,
            setAppChannel: eY,
        }),
        ts = (0, S.A)(tl),
        tu = e2 && !e3,
        to = (0, N.lQ)(eh),
        tc = ts.isPoppedOut ? R.default.pmkK8i : e3 ? R.default.Yet11p : null,
        td = null != tc;
    function tm(e) {
        return null == tc ? e : T.intl.formatToPlainString(tc, { label: e });
    }
    let tf = L && !D,
        th = T.intl.string(tf ? R.default.JD6Oit : R.default.xjJAQm),
        tg = a.useCallback(() => {
            if (D) {
                (et(!1), $(!0));
                return;
            }
            $((e) => !e);
        }, [D]),
        tp = a.useCallback(() => $(!1), []),
        {
            designFeedbackActive: tx,
            designFeedbackToggleRef: tv,
            agentDrivingPreview: tj,
            designFeedbackLabel: tb,
            handleToggleDesignFeedback: ty,
        } = (function (e, t, n) {
            let { active: l } = (0, G.rt)(e);
            a.useEffect(() => {
                null != e && l && !t && (0, G.mB)(e);
            }, [e, l, t]);
            let r = a.useRef(null),
                i = (0, O.Zv)(e),
                s = T.intl.string(i ? R.default.Sme0T0 : l ? R.default.vn5Rzu : R.default["cl/Jyl"]),
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
        })(eh, tu && (!ts.isPoppedOut || to), ec),
        [tk] = a.useState(() => C.isPlatformEmbedded && (0, eI.qM)());
    a.useEffect(() => {
        null != eh && to && !tu && (0, N.It)(eh);
    }, [eh, to, tu]);
    let tw = a.useCallback(() => {
            null != eh && (ec(), (0, N.c$)(eh), (0, N.rC)(eh, "marker"));
        }, [eh, ec]),
        tS = a.useCallback(() => {
            null != eh && (0, N.V9)(eh);
        }, [eh]),
        tA =
            td && !to
                ? tm(T.intl.string(R.default["XWU+XF"]))
                : T.intl.string(to ? R.default.tuQ5f3 : tj ? R.default.agwlrD : R.default["XWU+XF"]),
        tC = td ? tm(T.intl.string(R.default["cl/Jyl"])) : tb,
        tN = tm(e9),
        tI = tm(te),
        tE = a.useCallback(() => {
            et((e) => !e && ($(!0), !0));
        }, []),
        t_ = a.useCallback(() => et(!1), []),
        tM = a.useCallback(() => {
            null != eh && (0, Y._j)(eh);
        }, [eh]),
        tR = a.useCallback(() => {
            null != eh && (e3 ? (0, Y._j)(eh) : (0, Y.di)(eh, tl?.id));
        }, [eh, e3, tl?.id]),
        tT = a.useCallback(() => {
            var e, t;
            (null != s && ((e = s.id), (t = tl?.id), (0, eO.Bn)(e), (0, eF.r)(t)), j());
        }, [s, tl?.id, j]),
        tP =
            ((t = (0, M.z)(s)),
            (l = a.useCallback(
                (e) => {
                    if (null == s) return;
                    let t = s.id,
                        n = (0, _.vt)(e);
                    null != n
                        ? (0, E.P0)({ text: n, variant: "critical" })
                        : (0, I.A)({
                              title: T.intl.formatToPlainString(R.default["Gm+u1+"], { name: s.name }),
                              subtitle: T.intl.string(R.default.M7H3sJ),
                              confirmText: T.intl.string(R.default.gFHykw),
                              variant: "critical",
                              onConfirm: async () => {
                                  eo();
                                  try {
                                      await (0, _.Hj)(t, e, T.intl.string(R.default.Owerd3));
                                  } catch {
                                      (0, E.P0)({ text: T.intl.string(R.default["Q+l4Hv"]), variant: "critical" });
                                  }
                              },
                          });
                },
                [s, eo],
            )),
            { onExport: t, onImport: (r = (0, _.yN)(l)).open, importInput: r.input }),
        tL = a.useCallback(() => {
            null != s && (0, eH.A)(s, b);
        }, [s, b]),
        t$ = a.useCallback(async () => {
            null != eh && (await (0, eU.vL)(eh, b));
        }, [b, eh]),
        tq = (0, ea.aN)(eS, {
            installScope: s?.install_scope ?? null,
            previewReady: ev,
            integrationInstalled: eg?.integration_installed ?? null,
        })
            ? { type: "bot_install", onAddBot: t$, loading: ep }
            : ex && null == eg
              ? { type: "checking" }
              : void 0,
        tD = (0, c.bG)([eR.Ay], () => null != eh && eR.Ay.isProjectDeleting(eh), [eh]);
    a.useEffect(() => {
        ((null == s && u) || tD) && j();
    }, [s, u, tD, j]);
    let {
            publishOptions: tF,
            publish: tO,
            publishing: tG,
            confirmation: tz,
            variant: tU,
            text: tB,
        } = (0, eB.A)(eh, b, ex || ep),
        tK = (0, eK.A)(eh, tO, tF),
        tH = "frame" === eS && !e3 && (0, ej.x1)(tl) && (ts.isPoppedOut || ts.canPopout),
        tV = a.useCallback(() => {
            if (null != s) {
                var e;
                ((e = {
                    projectId: s.id,
                    restoreDisabled: em?.status === "restoring",
                    onRestoreVersion: (e, t) => ef(e, t, !0),
                }),
                    (0, K.mM)(async () => {
                        let { default: t } = await Promise.all([
                            n.e(323079),
                            n.e(437655),
                            n.e(420238),
                            n.e(795807),
                            n.e(231782),
                            n.e(213925),
                            n.e(701348),
                        ]).then(n.bind(n, 817231));
                        return (n) => (0, i.jsx)(t, { ...n, ...e });
                    }));
            }
        }, [s, em?.status, ef]);
    (0, B.z)(eh, tV);
    let tW = null == s ? void 0 : () => (0, eV.A)(s.id, { guildId: b, isPreview: !0, publishOptions: tF }),
        tX =
            null == s
                ? null
                : (0, i.jsx)(eD.A, {
                      ...(0, eq.A)(s, b),
                      onOpenProjectSettings: tW,
                      onTogglePreviewPaused: "frame" === eS ? tR : void 0,
                      previewPaused: e3,
                      previewPauseDisabled: !e3 && tj,
                      onTogglePopout: tH ? (ts.isPoppedOut ? ts.popIn : ts.popOut) : void 0,
                      poppedOut: ts.isPoppedOut,
                      onToggleDebug: el ? tE : void 0,
                      debugOpen: D,
                      onExport: tP.onExport,
                      onImport: tP.onImport,
                      onRemix: tL,
                      onConnectTool: eu ? () => (0, U.A)(s.id) : void 0,
                      onHistory: tV,
                      refreshApplicationId:
                          ew.modes.includes("widget") && "unavailable-authorization-revoked" !== ew.profileState
                              ? e0
                              : null,
                      previewProjectId: s.id,
                  }),
        tQ =
            null == tO || null == s
                ? null
                : (0, i.jsx)("div", {
                      className: fV.As,
                      onMouseDown:
                          null == eh || tO.disabled || tG
                              ? void 0
                              : (e) => {
                                    0 === e.button && (0, ez.dx)(eh);
                                },
                      children: (0, i.jsx)(d.$, {
                          size: "sm",
                          variant: tU,
                          icon: tG ? fX : null != tz ? m.CheckmarkSmallIcon : void 0,
                          text: tB,
                          onClick: () => tK("header"),
                      }),
                  }),
        tZ = (0, i.jsx)(fK.A, {
            title: s?.name ?? T.intl.string(R.default.G1WwgK),
            project: s,
            onOpenProjectSettings: tW,
            onBack: y,
            hideShareTarget: null != y,
            actions:
                null == s
                    ? null
                    : (0, i.jsxs)("div", {
                          className: fV.FO,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: fV.QQ,
                                  children: [
                                      (0, i.jsx)(eN, {
                                          targets: e4,
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
                                          })(eS, eC, eQ),
                                          onChange: e7,
                                      }),
                                      e2
                                          ? (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    "frame" === eS
                                                        ? (0, i.jsx)(A.A.Icon, {
                                                              icon: e5 ? fY : fZ,
                                                              tooltip: tN,
                                                              "aria-label": tN,
                                                              selected: e5,
                                                              disabled: td,
                                                              onClick: e8,
                                                          })
                                                        : null,
                                                    e5 && "frame" === eS
                                                        ? (0, i.jsx)(A.A.Icon, {
                                                              icon: fJ,
                                                              tooltip: tI,
                                                              "aria-label": tI,
                                                              selected: e6,
                                                              disabled: td,
                                                              onClick: tt,
                                                          })
                                                        : null,
                                                    tk
                                                        ? (0, i.jsx)(A.A.Icon, {
                                                              icon: f.PencilIcon,
                                                              tooltip: tA,
                                                              "aria-label": tA,
                                                              selected: to,
                                                              disabled: (td || tj) && !to,
                                                              onClick: to ? tS : tw,
                                                          })
                                                        : (0, i.jsx)(A.A.Icon, {
                                                              ref: tv,
                                                              icon: h.ExperimentalDirectSelectIcon,
                                                              iconClassName: fV.D8,
                                                              tooltip: tC,
                                                              "aria-label": tC,
                                                              selected: tx,
                                                              disabled: td || tj,
                                                              onClick: ty,
                                                          }),
                                                ],
                                            })
                                          : null,
                                      "frame" !== eS || e3
                                          ? null
                                          : (0, i.jsx)(eb, { frame: tl, controlProjectId: s.id }),
                                      (0, ej.x1)(tr)
                                          ? (0, i.jsx)(A.A.Icon, {
                                                icon: g.RefreshIcon,
                                                tooltip: T.intl.string(R.default.FZIHQN),
                                                "aria-label": T.intl.string(R.default.FZIHQN),
                                                disabled: ti,
                                                onClick: ta,
                                            })
                                          : null,
                                  ],
                              }),
                              (0, i.jsx)("div", { className: fV.YJ }),
                              (0, i.jsx)(P.A, { frame: tl }),
                              (0, i.jsx)(A.A.Icon, {
                                  icon: p.DoorExitIcon,
                                  tooltip: T.intl.string(R.default["/TlGcK"]),
                                  "aria-label": T.intl.string(R.default["/TlGcK"]),
                                  onClick: tT,
                              }),
                              (0, i.jsx)(A.A.Icon, {
                                  icon: fQ,
                                  tooltip: th,
                                  "aria-label": th,
                                  selected: tf,
                                  onClick: tg,
                              }),
                              tX,
                          ],
                      }),
        });
    return (0, i.jsxs)("div", {
        className: o()(fV.nj, fH.T),
        children: [
            tP.importInput,
            (0, i.jsx)("main", {
                className: fV.JX,
                children:
                    null == s
                        ? (0, i.jsxs)("div", {
                              className: fV.j5,
                              children: [
                                  tZ,
                                  (0, i.jsxs)("div", {
                                      className: fV.sD,
                                      children: [
                                          (0, i.jsx)(x.D, {
                                              variant: "heading-lg/semibold",
                                              children: T.intl.string(R.default.G1WwgK),
                                          }),
                                          (0, i.jsx)(v.E, {
                                              variant: "body-md/normal",
                                              color: "text-muted",
                                              children: T.intl.string(R.default.fINulo),
                                          }),
                                          (0, i.jsx)(d.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: T.intl.string(R.default["WFJ/vb"]),
                                              onClick: () => (0, e_.listProjects)(b),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, i.jsx)(eU.bI.Provider, {
                              value: tF,
                              children: (0, i.jsx)(
                                  fB,
                                  {
                                      projectId: s.id,
                                      designFeedbackToggleRef: tv,
                                      applicationId: s.preview_application_id,
                                      previewApplicationId: s.preview_application_id,
                                      surface: tn,
                                      frameLaunchParams: eJ,
                                      header: tZ,
                                      chatOpen: L,
                                      onCloseChat: tp,
                                      chatHeaderAction: (0, i.jsxs)(i.Fragment, {
                                          children: [(0, i.jsx)(eZ, { projectId: s.id }), tQ],
                                      }),
                                      debugOpen: el && D,
                                      onCloseDebug: t_,
                                      onRestoreVersion: ef,
                                      onImportProject: (0, eR.PV)(s) ? tP.onImport : void 0,
                                      restoreState: em,
                                      previewReady: ev,
                                      previewGate: tq,
                                      availability: ew,
                                      activeMode: eS,
                                      widgetApplicationId: e0,
                                      overlayWidgetSize: e1,
                                      previewPaused: e3,
                                      onResumePreview: tM,
                                  },
                                  s.id,
                              ),
                          }),
            }),
        ],
    });
}
function fX() {
    return (0, i.jsx)(j.y, { type: j.t.SPINNING_CIRCLE_SIMPLE, className: fV.Hv, itemClassName: fV.C5 });
}
function fQ(e) {
    return (0, i.jsx)(b.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function fZ(e) {
    return (0, i.jsx)(y.MobilePhoneIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function fY(e) {
    return (0, i.jsx)(k.ScreenIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function fJ(e) {
    return (0, i.jsx)(w.RotateIcon, { ...e, size: "custom", width: 20, height: 20 });
}
