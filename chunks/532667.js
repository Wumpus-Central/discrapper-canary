n.d(t, { A: () => fJ });
var l,
    r,
    a = n(477900),
    i = n(582128),
    s = n.t(i, 2),
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
    j = n(331322),
    b = n(289873),
    y = n(534890),
    k = n(646270),
    w = n(31300),
    A = n(831453),
    C = n(646973),
    S = n(742589),
    N = n(723702),
    I = n(171691),
    E = n(314116),
    _ = n(858899),
    M = n(949757),
    R = n(800202),
    T = n(191850),
    P = n(792996),
    L = n(766367);
let $ = new Set(),
    D = null;
function q(e, t) {
    let n = i.useRef(t);
    (i.useLayoutEffect(() => {
        n.current = t;
    }),
        i.useEffect(() => {
            if (null == e) return;
            let t = (t) => {
                t === e && n.current();
            };
            return (
                $.add(t),
                () => {
                    $.delete(t);
                }
            );
        }, [e]));
}
var F = n(253932);
function O() {
    return F.Q_.useSetting() || !1;
}
var G = n(573083),
    z = n(57570),
    U = n(971079),
    B = n(61577),
    K = n(686507),
    H = n(192308),
    V = n(128761),
    W = n(503922),
    X = n(967008),
    Q = n(60498),
    Z = n(227007),
    Y = n(398773),
    J = n(735769),
    ee = n(513845),
    et = n(802905),
    en = n(951178);
let el = { width: 320, height: 240 };
function er(e) {
    let t = e?.default_size;
    return null != t && Number.isFinite(t.width) && Number.isFinite(t.height) && t.width > 0 && t.height > 0 ? t : el;
}
function ea(e, t) {
    let { width: n, height: l } = e;
    return null == n || null == l || n <= 0 || l <= 0 ? 1 : Math.min(1, n / t.width, l / t.height);
}
function ei(e) {
    return er(e?.preview_overlay_widget ?? null);
}
var es = n(855859),
    eu = n(238490),
    eo = n(991690),
    ec = n(696645);
function ed(e) {
    return "frame" !== e.mode
        ? e.mode
        : null == e.appChannel
          ? `frame-${e.surface}`
          : `frame-${e.surface}-${e.appChannel}`;
}
function em(e) {
    switch (e.mode) {
        case "frame":
            return null == e.appChannel
                ? (0, ec.X)(e.surface)
                : P.intl.formatToPlainString(T.default["6xVl+N"], {
                      surface: (0, ec.X)(e.surface),
                      channel: e.appChannel,
                  });
        case "widget":
            return P.intl.string(T.default.y5GiL1);
        case "overlay":
            return P.intl.string(T.default["2940LX"]);
        case "bot":
            return P.intl.string(T.default.tjpaGN);
    }
}
var ef = n(939398),
    eh = n(86147),
    eg = n(729475),
    ep = n(91242),
    ex = n(156548),
    ev = n(869146),
    ej = n(475815),
    eb = n(652215),
    ey = n(165610);
function ek(e) {
    let { frame: t, controlProjectId: n } = e,
        l = (0, ex.cR)(t?.id ?? null),
        r = (0, G.Zv)(n),
        i = (0, c.bG)(
            [ev.A, ep.A],
            () => null != t && ev.A.getWindowOpen(eb.MLl.ACTIVITY_POPOUT) && ep.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, ey.x1)(t) || i || r) return null;
    let s = (0, ex.fl)(t.id);
    if (null == s || !(0, ej.Ub)(s)) return null;
    let u = P.intl.string(l ? P.t.Z7MyNB : P.t.OIDkcp);
    return (0, a.jsx)(S.A.Icon, {
        tooltip: u,
        icon: l ? eh.FullscreenExitIcon : eg.FullscreenEnterIcon,
        "aria-label": u,
        role: "switch",
        "aria-checked": l,
        selected: l,
        onClick: () => (0, ex.U8)(t.id),
    });
}
var ew = n(265872),
    eA = n(165862),
    eC = n(477782),
    eS = n(559106),
    eN = n(847374),
    eI = n(704745);
function eE(e) {
    let { targets: t, target: n, onChange: l } = e,
        [r, s] = i.useState(!1),
        u = null != n && t.length > 1;
    r && !u && s(!1);
    let o = i.useCallback(() => s(!1), []),
        c = i.useCallback(() => s((e) => !e), []),
        d = i.useRef(null);
    if (!u) return null;
    let m = P.intl.string(T.default.I2ucou);
    return (0, a.jsx)(ew.Y, {
        targetElementRef: d,
        shouldShow: r,
        onRequestClose: o,
        position: "bottom",
        align: "right",
        animation: ew.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, a.jsx)(eA.W, {
                "data-menu-migrated": !0,
                navId: "conjure-preview-target",
                "aria-label": m,
                onClose: r,
                onSelect: r,
                children: (0, a.jsx)(eC.rX, {
                    label: m,
                    children: t.map((e) => {
                        let t = ed(e);
                        return (0, a.jsx)(
                            eC.iD,
                            {
                                id: `preview-target-${t}`,
                                group: "conjure-preview-target",
                                label: em(e),
                                checked: t === ed(n),
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
                { isShown: i } = t;
            return (0, a.jsx)(eS.vN, {
                children: (0, a.jsxs)("button", {
                    ...r,
                    ref: d,
                    type: "button",
                    className: eI.h,
                    "aria-haspopup": "menu",
                    "aria-expanded": i,
                    onClick: c,
                    children: [
                        (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: P.intl.string(T.default["N+VA1J"]),
                        }),
                        (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "body-sm/medium",
                            color: "none",
                            lineClamp: 1,
                            children: em(n),
                        }),
                        (0, a.jsx)(eN.ChevronSmallDownIcon, { size: "xs", color: "currentColor" }),
                    ],
                }),
            });
        },
    });
}
var e_ = n(27184),
    eM = n(627363),
    eR = n(233470),
    eT = n(153207),
    eP = n(260498),
    eL = n(625180),
    e$ = n(672929),
    eD = n(111534),
    eq = n(754027),
    eF = n(174865),
    eO = n(960335),
    eG = n(457827),
    ez = n(540665),
    eU = n(722701),
    eB = n(962998),
    eK = n(826058),
    eH = n(719593),
    eV = n(536468),
    eW = n(95264),
    eX = n(551233),
    eQ = n(564498);
function eZ(e) {
    let { projectId: t, guildId: n, publishOptions: l } = e,
        { available: r } = (0, eX.A)(t, n, null);
    return r
        ? (0, a.jsx)(d.$, {
              size: "sm",
              variant: "secondary",
              text: P.intl.string(T.default["+uQwxA"]),
              onClick: () => (0, eQ.A)({ projectId: t, guildId: n, publishOptions: l }),
          })
        : null;
}
var eY = n(616334),
    eJ = n(405433),
    e0 = n(58736),
    e1 = n(811587);
function e2(e) {
    let { projectId: t } = e;
    return (0, c.bG)(
        [eU.A],
        () => {
            let e = eU.A.getPublishStatus(t)?.publishState;
            return null != e && (0, e1.lE)(e);
        },
        [t],
    )
        ? (0, a.jsx)(e0.Ay.Icon, {
              icon: eJ.ShareIcon,
              tooltip: P.intl.string(P.t.RDE0Sc),
              onClick: () => {
                  (0, H.mM)(async () => {
                      let { default: e } = await Promise.all([n.e(806117), n.e(648695)]).then(n.bind(n, 9514));
                      return (n) => (0, a.jsx)(e, { ...n, projectId: t });
                  });
              },
          })
        : null;
}
var e3 = n(789645),
    e4 = n(812771);
(n(743898), n(134528), n(947204));
var e5 = n(333007),
    e7 = n(621466),
    e8 = n(775121),
    e9 = n(989145),
    e6 = n(866665),
    te = n(81369),
    tt = n(826745),
    tn = n(34595),
    tl = n(470779);
function tr(e) {
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
            takeRefs: A,
        } = (0, tn.FM)({ projectId: t, surface: "design", onUploadFile: h }),
        C = i.useRef(null),
        S = (m || j.length > 0) && w && !f,
        N = i.useCallback(() => {
            if (!S) return;
            let e = A();
            c(e.length > 0 ? e : void 0);
        }, [S, A, c]),
        [I, E] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => E(!0));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, []);
    let _ = i.useRef(null),
        [M, R] = i.useState(null);
    i.useLayoutEffect(() => {
        let e = _.current;
        if (null == e || "u" < typeof ResizeObserver) return;
        let t = new ResizeObserver(() => R({ height: e.offsetHeight }));
        return (t.observe(e), () => t.disconnect());
    }, []);
    let L = M?.height ?? 44,
        $ = l.left + 8,
        D = l.top + 8,
        q = Math.max(n.x, $),
        F = Math.min(Math.max("point" === g ? n.y : n.y + 32 + 4, D), Math.max(D, l.top + l.height - L - 8));
    return (0, a.jsxs)("div", {
        ref: _,
        className: o()(tl.M0, { [tl.ho]: I && !f, [tl.ET]: f }),
        style: { left: q, top: F },
        "data-testid": "conjure-design-compose-bar",
        children: [
            p
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)("input", {
                              ref: C,
                              type: "file",
                              multiple: !0,
                              className: tl.Fg,
                              tabIndex: -1,
                              "aria-hidden": !0,
                              onChange: (e) => {
                                  (b(Array.from(e.target.files ?? [])), (e.target.value = ""));
                              },
                          }),
                          (0, a.jsx)(e6.m, {
                              position: "bottom",
                              text: P.intl.string(T.default.lgvqSB),
                              ariaHidden: !0,
                              children: (0, a.jsx)("button", {
                                  type: "button",
                                  className: tl.tY,
                                  onClick: () => C.current?.click(),
                                  "aria-label": P.intl.string(T.default.lgvqSB),
                                  children: (0, a.jsx)(te.FileUpIcon, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: tl.WW,
                                  }),
                              }),
                          }),
                      ],
                  })
                : null,
            (0, a.jsx)(tt.y, {
                autoFocus: !0,
                rows: 1,
                className: tl.hF,
                value: s,
                placeholder: x ?? ("" === r ? P.intl.string(T.default.MPPV1Q) : `Edit ${r}`),
                "aria-label": v ?? P.intl.string(T.default.KCYqWL),
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
                ? (0, a.jsx)("div", {
                      className: tl.ZO,
                      children: j.map((e) => (0, a.jsx)(tn.Nl, { draft: e, onRemove: k }, e.localId)),
                  })
                : null,
        ],
    });
}
function ta(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function ti(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function ts(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [n, l] = i.useState(() => (t ? ta(e()) : null));
    return (
        i.useEffect(() => {
            if (!t) return;
            function n() {
                let t = ta(e());
                l((e) => (ti(e, t) ? e : t));
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
var tu = n(46676),
    to = n(876798),
    tc = n(408278),
    td = n(48507),
    tm = n(193885),
    tf = n(744898),
    th = n(803656),
    tg = n(241326),
    tp = n(972213),
    tx = n(646514);
function tv(e) {
    return e.resolve({ saturation: 1 }).hex();
}
function tj(e, t, n) {
    return {
        id: e,
        value: t,
        label: n,
        icon: function (e) {
            let { colorClass: n } = e;
            return (0, a.jsx)("svg", {
                className: n,
                width: 20,
                height: 20,
                viewBox: "0 0 24 24",
                "aria-hidden": !0,
                children: (0, a.jsx)("circle", {
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
let tb = tj("red", tv(tx.A.unsafe_rawColors.RED_400), () => P.intl.string(T.default.tvXfjt)),
    ty = [
        tb,
        tj("yellow", tv(tx.A.unsafe_rawColors.YELLOW_300), () => P.intl.string(T.default.FYuaJ1)),
        tj("green", tv(tx.A.unsafe_rawColors.GREEN_360), () => P.intl.string(T.default["Vv+paS"])),
        tj("blue", tv(tx.A.unsafe_rawColors.BLUE_345), () => P.intl.string(T.default.k9b1QJ)),
        tj("white", tv(tx.A.unsafe_rawColors.WHITE), () => P.intl.string(T.default["1sOXwH"])),
    ];
function tk(e) {
    return ty.find((t) => t.id === e) ?? tb;
}
var tw = n(39416);
function tA(e) {
    let { colorClass: t } = e;
    return (0, a.jsx)("svg", {
        className: t,
        width: 20,
        height: 20,
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": !0,
        children: (0, a.jsx)("path", {
            d: "M12 3v18M3 12h18M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3",
            stroke: "currentColor",
            strokeWidth: 1.8,
            strokeLinecap: "round",
            strokeLinejoin: "round",
        }),
    });
}
function tC(e) {
    let { colorClass: t } = e;
    return (0, a.jsxs)("svg", {
        className: t,
        width: 20,
        height: 20,
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": !0,
        children: [
            (0, a.jsx)("path", {
                d: "M10 4H5.5A1.5 1.5 0 0 0 4 5.5V10M4 14v4.5A1.5 1.5 0 0 0 5.5 20H10M14 4h4.5A1.5 1.5 0 0 1 20 5.5V10",
                stroke: "currentColor",
                strokeWidth: 1.8,
                strokeLinecap: "round",
            }),
            (0, a.jsx)("path", { d: "M13 13v8l2.3-2.2 1.6 3.2 1.6-.8-1.6-3.1 3.1-.1L13 13Z", fill: "currentColor" }),
        ],
    });
}
function tS(e) {
    let { colorClass: t } = e;
    return (0, a.jsx)("svg", {
        className: t,
        width: 20,
        height: 20,
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": !0,
        children: (0, a.jsx)("path", {
            d: "M14.5 4.5 20 10l-8.5 8.5H7L4 15.5a1.5 1.5 0 0 1 0-2.1L14.5 4.5ZM9.5 9.5l5.5 5.5M7 18.5h13",
            stroke: "currentColor",
            strokeWidth: 1.8,
            strokeLinejoin: "round",
        }),
    });
}
function tN(e) {
    return function (t) {
        let { colorClass: n } = t;
        return (0, a.jsx)("svg", {
            className: n,
            width: 20,
            height: 20,
            viewBox: "0 0 24 24",
            "aria-hidden": !0,
            children: (0, a.jsx)("circle", { cx: 12, cy: 12, r: e / 2, fill: "currentColor" }),
        });
    };
}
let tI = I.ck.map((e) => tN(Math.min(16, e + 3))),
    tE = I.Cw.map((e) => tN(Math.min(16, e / 2.5))),
    t_ = [T.default.jZtZUr, T.default.cTQdD0, T.default.J3ucEg],
    tM = {
        circle: {
            icon: function (e) {
                let { colorClass: t } = e;
                return (0, a.jsx)("svg", {
                    className: t,
                    width: 20,
                    height: 20,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    "aria-hidden": !0,
                    children: (0, a.jsx)("circle", { cx: 12, cy: 12, r: 8, stroke: "currentColor", strokeWidth: 2 }),
                });
            },
            label: () => P.intl.string(T.default.oIZQbm),
        },
        square: {
            icon: function (e) {
                let { colorClass: t } = e;
                return (0, a.jsx)("svg", {
                    className: t,
                    width: 20,
                    height: 20,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    "aria-hidden": !0,
                    children: (0, a.jsx)("rect", {
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
            label: () => P.intl.string(T.default.ARNVr7),
        },
    };
function tR(e) {
    let { icon: t, label: n, pressed: l, onClick: r } = e;
    return (0, a.jsx)(e6.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)("span", {
            className: tw.z6,
            "data-active": l ? "" : void 0,
            children: (0, a.jsx)(to.k, {
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
function tT(e) {
    let { icon: t, label: n, disabled: l, onClick: r } = e;
    return (0, a.jsx)(e6.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)(tc.K, {
            icon: t,
            size: "sm",
            variant: "icon-only",
            disabled: l,
            "aria-label": n,
            onClick: r,
        }),
    });
}
function tP(e) {
    let { label: t, trigger: n, children: l, direction: r } = e,
        [s, u] = i.useState(!1),
        o = i.useCallback(() => u(!1), []),
        c = i.useCallback(() => u((e) => !e), []);
    return (0, a.jsxs)("div", {
        className: tw.pr,
        onMouseEnter: () => u(!0),
        onMouseLeave: o,
        children: [
            n(c),
            s
                ? (0, a.jsx)("div", {
                      className: tw.mz,
                      "data-direction": r,
                      role: "group",
                      "aria-label": t,
                      children: l(o),
                  })
                : null,
        ],
    });
}
function tL(e) {
    let { projectId: t, state: n, onExit: l, onUndo: r, onRedo: i, onClear: s } = e,
        { tool: u, lastShape: o, markerSize: c, eraserSize: d, history: m } = n,
        f = tk(n.colorId);
    function h(e) {
        return (0, I.rC)(t, e);
    }
    let g = tM[o],
        p = P.intl.string(T.default.hUm825),
        x = P.intl.string(T.default.n5IA3a),
        v = P.intl.string(T.default.r5dX6t),
        j = P.intl.string(T.default.VfYqDq);
    return (0, a.jsxs)("div", {
        className: tw.t$,
        children: [
            (0, a.jsx)("div", {
                className: tw.NT,
                children: (0, a.jsx)(tR, {
                    icon: tC,
                    label: P.intl.string(T.default.YtyKcM),
                    pressed: "pick" === u,
                    onClick: () => h("pick"),
                }),
            }),
            (0, a.jsxs)("div", {
                className: tw.H$,
                role: "toolbar",
                "aria-orientation": "vertical",
                "aria-label": P.intl.string(T.default["0IAEFf"]),
                children: [
                    (0, a.jsx)(tR, {
                        icon: tA,
                        label: P.intl.string(T.default.qTOXqb),
                        pressed: "move" === u,
                        onClick: () => h("move"),
                    }),
                    (0, a.jsx)(tR, {
                        icon: td.LettersIcon,
                        label: P.intl.string(T.default.AGb8aK),
                        pressed: "text" === u,
                        onClick: () => h("text"),
                    }),
                    (0, a.jsx)(tP, {
                        label: p,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(tR, {
                                icon: tm.PaintbrushThinIcon,
                                label: p,
                                pressed: "marker" === u,
                                onClick: () => {
                                    (h("marker"), e());
                                },
                            }),
                        children: (e) =>
                            tI.map((n, l) =>
                                (0, a.jsx)(
                                    tR,
                                    {
                                        icon: n,
                                        label: P.intl.string(t_[l]),
                                        pressed: "marker" === u && c === l,
                                        onClick: () => {
                                            ((0, I.KZ)(t, l), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(tP, {
                        label: v,
                        direction: "row",
                        trigger: (e) =>
                            (0, a.jsx)(tR, {
                                icon: g.icon,
                                label: v,
                                pressed: "circle" === u || "square" === u,
                                onClick: () => {
                                    (h(o), e());
                                },
                            }),
                        children: (e) =>
                            Object.keys(tM).map((t) =>
                                (0, a.jsx)(
                                    tR,
                                    {
                                        icon: tM[t].icon,
                                        label: tM[t].label(),
                                        pressed: u === t,
                                        onClick: () => {
                                            (h(t), e());
                                        },
                                    },
                                    t,
                                ),
                            ),
                    }),
                    (0, a.jsx)(tP, {
                        label: x,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(tR, {
                                icon: tS,
                                label: x,
                                pressed: "eraser" === u,
                                onClick: () => {
                                    (h("eraser"), e());
                                },
                            }),
                        children: (e) =>
                            tE.map((n, l) =>
                                (0, a.jsx)(
                                    tR,
                                    {
                                        icon: n,
                                        label: P.intl.string(t_[l]),
                                        pressed: "eraser" === u && d === l,
                                        onClick: () => {
                                            ((0, I._A)(t, l), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(tP, {
                        label: j,
                        direction: "row",
                        trigger: (e) => (0, a.jsx)(tT, { icon: f.icon, label: j, onClick: e }),
                        children: (e) =>
                            ty.map((n) =>
                                (0, a.jsx)(
                                    tR,
                                    {
                                        icon: n.icon,
                                        label: n.label(),
                                        pressed: n.id === f.id,
                                        onClick: () => {
                                            ((0, I.Yx)(t, n.id), e());
                                        },
                                    },
                                    n.id,
                                ),
                            ),
                    }),
                    (0, a.jsx)("div", { className: tw.Gz, role: "separator" }),
                    (0, a.jsx)(tT, {
                        icon: tf.UndoIcon,
                        label: P.intl.string((0, N.cX)() ? T.default["j/XmBQ"] : T.default.AeHDE6),
                        disabled: 0 === m.past.length,
                        onClick: r,
                    }),
                    (0, a.jsx)(tT, {
                        icon: th.RedoIcon,
                        label: P.intl.string((0, N.cX)() ? T.default.C7jhpn : T.default.pp16iB),
                        disabled: 0 === m.future.length,
                        onClick: i,
                    }),
                    (0, a.jsx)(tT, {
                        icon: tg.TrashIcon,
                        label: P.intl.string(T.default.wo5a0i),
                        disabled: 0 === m.present.length,
                        onClick: s,
                    }),
                    (0, a.jsx)("div", { className: tw.Gz, role: "separator" }),
                    (0, a.jsx)(tT, { icon: tp.XLargeIcon, label: P.intl.string(T.default.tuQ5f3), onClick: l }),
                ],
            }),
        ],
    });
}
let t$ = tx.A.unsafe_rawColors.WHITE.resolve({ saturation: 1 }).hex(),
    tD = tx.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex(),
    tq = tx.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex();
function tF(e, t, n) {
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
                let [t, ...a] = n.points;
                if (null == t) break;
                for (let i of ((e.lineWidth = l(n.width)),
                e.beginPath(),
                e.moveTo(l(t.x), r(t.y)),
                0 === a.length && e.lineTo(l(t.x), r(t.y)),
                a))
                    e.lineTo(l(i.x), r(i.y));
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
                    (e.strokeStyle = tq),
                    e.strokeText(n.text, l(n.at.x), r(n.at.y)),
                    e.fillText(n.text, l(n.at.x), r(n.at.y)));
            }
        }
    e.globalCompositeOperation = "source-over";
}
function tO(e) {
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
let tG = { dx: 0, dy: 0 },
    tz = { v: "move", p: "pick", t: "text", m: "marker", o: "circle", r: "square", e: "eraser" },
    tU = 1;
function tB(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r } = e,
        s = null != n && n === l ? t : null,
        u = (0, I.d5)(s),
        { active: o } = (0, z.rt)(s),
        c = (0, H.Rv)(),
        [d, m] = i.useState(!1);
    i.useEffect(() => {
        if (null != s)
            return () => {
                (0, I.K7)(s)?.active === !0 && (0, I.It)(s);
            };
    }, [s]);
    let f = u?.active === !0 && "pick" === u.tool;
    i.useEffect(() => {
        null != s && f && !o && (0, z.w4)(s);
    }, [s, f, o]);
    let h = i.useCallback(async () => {
        let e = r();
        if (null == e) return null;
        let t = await (0, e_.wn)(e);
        if (null != t) return t;
        function n() {
            m(!1);
        }
        (0, e5.flushSync)(() => m(!0));
        try {
            await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e())));
            let t = new Promise((e) => window.setTimeout(() => e(null), 5e3));
            return await Promise.race([(0, e_.fs)(e, n), t]);
        } finally {
            n();
        }
    }, [r]);
    return (i.useEffect(() => {
        if (null != s) return ((0, I.j5)(s, h), () => (0, I.j5)(s, null));
    }, [s, h]),
    null == s || null == u || !u.active || c)
        ? null
        : (0, a.jsx)(tK, { projectId: s, state: u, capturing: d, resolveIframe: r });
}
function tK(e) {
    let { projectId: t, state: n, capturing: l, resolveIframe: r } = e,
        s = ts(r),
        [u, o] = i.useState(null),
        [c, d] = i.useState(0),
        [m, f] = i.useState(null),
        [h, g] = i.useState(tG),
        p = i.useRef(null),
        x = i.useRef(null),
        v = i.useRef(null),
        j = i.useRef(null),
        b = i.useRef(null),
        { tool: y, history: k } = n,
        w = tk(n.colorId),
        A = "pick" !== y,
        C = (0, I.Qq)(n),
        S = "eraser" === y ? null : w.value,
        N = i.useMemo(
            () =>
                null == C
                    ? void 0
                    : (function (e, t) {
                          let n = Math.ceil(Math.max(e, 24) / 2),
                              l = 2 * n + 4;
                          if (l > 128) return "crosshair";
                          let r = l / 2,
                              a = (e, t) => `<circle cx="${r}" cy="${r}" r="${e}" ${t}/>`,
                              i = [
                                  `<svg xmlns="http://www.w3.org/2000/svg" width="${l}" height="${l}" viewBox="0 0 ${l} ${l}">`,
                                  a(n, `fill="none" stroke="${tD}" stroke-width="4"`),
                                  a(n, `fill="none" stroke="${t$}" stroke-width="2"`),
                                  a(3, `fill="${t ?? t$}" stroke="${tD}" stroke-width="1"`),
                                  "</svg>",
                              ].join("");
                          return `url("data:image/svg+xml,${encodeURIComponent(i)}") ${r} ${r}, crosshair`;
                      })(C, S),
            [C, S],
        ),
        E = "move" === y ? (k.present.find((e) => e.id === m) ?? null) : null,
        _ = null != s;
    (i.useLayoutEffect(() => {
        d(x.current?.offsetWidth ?? 0);
    }, [_]),
        i.useLayoutEffect(() => {
            b.current = u;
        }, [u]));
    let M = i.useCallback(() => {
        let e = p.current;
        if (null == e || null == s) return;
        let t = window.devicePixelRatio,
            n = Math.round(s.width * t),
            l = Math.round(s.height * t);
        (e.width !== n && (e.width = n), e.height !== l && (e.height = l));
        let r = e.getContext("2d");
        if (null == r) return;
        (r.setTransform(1, 0, 0, 1, 0, 0), r.clearRect(0, 0, n, l), r.setTransform(t, 0, 0, t, 0, 0));
        let a = j.current,
            i = null == a ? k.present : k.present.map((e) => (e.id === a.id ? (0, tu.y)(e, h.dx, h.dy) : e)),
            u = v.current;
        tF(r, null == u ? i : [...i, u], { width: s.width, height: s.height });
    }, [s, k.present, h]);
    i.useLayoutEffect(M, [M]);
    let R = i.useCallback(
            (e) =>
                null == s ? { x: 0, y: 0 } : { x: (e.clientX - s.left) / s.width, y: (e.clientY - s.top) / s.height },
            [s],
        ),
        L = i.useCallback(() => {
            let e = b.current;
            if (null == e || null == s) return;
            b.current = null;
            let n = {
                id: `mark-${tU++}`,
                kind: "text",
                color: w.value,
                size: 20 / s.width,
                at: e.at,
                text: e.value.trim(),
            };
            ((0, tu.oy)(n, s) && (0, I.tD)(t, { type: "commit", shape: n }), o(null), (0, I.QP)(t));
        }, [t, w, s]),
        $ = i.useCallback(() => {
            ((b.current = null), o(null), (0, I.QP)(t));
        }, [t]),
        D = i.useCallback(
            (e) => {
                if (0 !== e.button || null == s) return;
                if (null != b.current) return void L();
                let t = R(e);
                switch (y) {
                    case "pick":
                        return;
                    case "move": {
                        let n = { x: t.x * s.width, y: t.y * s.height },
                            l = null == E ? null : (0, tu.k_)(E, s),
                            r =
                                null != l && n.x >= l.x && n.x <= l.x + l.width && n.y >= l.y && n.y <= l.y + l.height
                                    ? E
                                    : (0, tu.WF)(k.present, t, s, 6);
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
                        if (!(0, tu.jG)(k.present)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (v.current = {
                                id: `mark-${tU++}`,
                                kind: "erase",
                                width: I.Cw[n.eraserSize] / s.width,
                                points: [t],
                            }));
                        break;
                    case "marker":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (v.current = {
                                id: `mark-${tU++}`,
                                kind: "marker",
                                color: w.value,
                                width: I.ck[n.markerSize] / s.width,
                                points: [t],
                            }));
                        break;
                    case "circle":
                    case "square":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (v.current = {
                                id: `mark-${tU++}`,
                                kind: y,
                                color: w.value,
                                width: 4 / s.width,
                                from: t,
                                to: t,
                            }));
                }
                M();
            },
            [s, y, w, E, k.present, n.markerSize, n.eraserSize, R, L, M],
        ),
        q = i.useCallback(
            (e) => {
                let t = R(e),
                    n = j.current;
                if (null != n) return void g({ dx: t.x - n.origin.x, dy: t.y - n.origin.y });
                let l = v.current;
                null != l &&
                    ("marker" === l.kind || "erase" === l.kind
                        ? (v.current = { ...l, points: [...l.points, t] })
                        : ("circle" === l.kind || "square" === l.kind) && (v.current = { ...l, to: t }),
                    M());
            },
            [R, M],
        ),
        F = i.useCallback(() => {
            p.current?.removeAttribute("data-dragging");
            let e = j.current;
            if (null != e) {
                ((j.current = null), g(tG), (0, I.tD)(t, { type: "move", id: e.id, dx: h.dx, dy: h.dy }));
                return;
            }
            let n = v.current;
            ((v.current = null),
                null != n && null != s && (0, tu.oy)(n, s)
                    ? ((0, I.tD)(t, { type: "commit", shape: n }), (0, I.QP)(t))
                    : M());
        }, [t, s, h, M]),
        O = i.useCallback(() => (0, I.V9)(t), [t]),
        G = i.useCallback(() => (0, I.tD)(t, { type: "undo" }), [t]),
        z = i.useCallback(() => (0, I.tD)(t, { type: "redo" }), [t]),
        U = i.useCallback(() => (0, I.tD)(t, { type: "clear" }), [t]),
        B = i.useRef({ tool: y, selected: E, exit: O, undo: G, redo: z });
    if (
        (i.useLayoutEffect(() => {
            B.current = { tool: y, selected: E, exit: O, undo: G, redo: z };
        }),
        i.useEffect(() => {
            function e(e) {
                if (
                    e.defaultPrevented ||
                    (0, e7.Cw)((0, e7.vq)(e.target, HTMLElement) ? e.target : null) ||
                    null != b.current
                )
                    return;
                let { tool: n, selected: l, exit: r, undo: a, redo: i } = B.current,
                    s = e.key.toLowerCase();
                if (e.metaKey || e.ctrlKey) {
                    if (e.altKey || ("z" !== s && "y" !== s)) return;
                    (e.preventDefault(), "y" === s || e.shiftKey ? i() : a());
                    return;
                }
                if (e.altKey) return;
                if ("Escape" === e.key) {
                    if ("pick" === n) return;
                    (e.preventDefault(), null != l ? f(null) : r());
                    return;
                }
                if (("Delete" === e.key || "Backspace" === e.key) && null != l) {
                    (e.preventDefault(), (0, I.tD)(t, { type: "remove", id: l.id }), f(null));
                    return;
                }
                if (e.shiftKey) return;
                let u = tz[s];
                null != u && (e.preventDefault(), (0, I.rC)(t, u));
            }
            return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
        }, [t]),
        i.useEffect(() => {
            if (A) return (e8.A.disable(), () => e8.A.enable());
        }, [A]),
        null == s)
    )
        return null;
    let K = Math.max(8, s.left - c - 8),
        H = null == E ? null : (0, tu.k_)(null == j.current ? E : (0, tu.y)(E, h.dx, h.dy), s);
    return (0, e5.createPortal)(
        (0, a.jsxs)("div", {
            children: [
                (0, a.jsx)("div", {
                    className: tw.qe,
                    style: { left: s.left, top: s.top, width: s.width, height: s.height },
                    "aria-hidden": !0,
                }),
                (0, a.jsxs)("div", {
                    className: tw.Pw,
                    style: { left: s.left, top: s.top, width: s.width, height: s.height },
                    "data-testid": "conjure-edit-ink",
                    children: [
                        (0, a.jsx)("canvas", {
                            ref: p,
                            className: tw.Ji,
                            "data-tool": y,
                            "data-interactive": A && !l ? "" : void 0,
                            "aria-label": P.intl.string(T.default["qlgN+X"]),
                            onMouseDown: (e) => e.preventDefault(),
                            style: { cursor: l ? void 0 : N },
                            onPointerDown: D,
                            onPointerMove: q,
                            onPointerUp: F,
                            onPointerCancel: F,
                        }),
                        null == H
                            ? null
                            : (0, a.jsxs)("div", {
                                  className: tw.r1,
                                  style: { left: H.x, top: H.y, width: H.width, height: H.height },
                                  "aria-hidden": !0,
                                  children: [
                                      (0, a.jsx)("span", { className: tw.p$, "data-corner": "nw" }),
                                      (0, a.jsx)("span", { className: tw.p$, "data-corner": "ne" }),
                                      (0, a.jsx)("span", { className: tw.p$, "data-corner": "sw" }),
                                      (0, a.jsx)("span", { className: tw.p$, "data-corner": "se" }),
                                  ],
                              }),
                    ],
                }),
                null == u
                    ? null
                    : (0, a.jsx)(tr, {
                          projectId: t,
                          anchor: "point",
                          at: { x: s.left + u.at.x * s.width, y: s.top + u.at.y * s.height },
                          bounds: s,
                          kind: "",
                          placeholder: P.intl.string(T.default["8gX1lw"]),
                          label: P.intl.string(T.default["5W7SSZ"]),
                          allowAttachments: !1,
                          value: u.value,
                          onChange: (e) => o((t) => (null == t ? null : { ...t, value: e })),
                          onSubmit: L,
                          onUploadFile: (e) => (0, e9.vX)(t, e),
                          onDismiss: $,
                          canSubmit: "" !== u.value.trim(),
                          closing: !1,
                      }),
                (0, a.jsx)("div", {
                    ref: x,
                    className: tw.ej,
                    style: { left: K, top: s.top },
                    "data-conjure-edit-rail": "",
                    children: (0, a.jsx)(tL, { projectId: t, state: n, onExit: O, onUndo: G, onRedo: z, onClear: U }),
                }),
            ],
        }),
        document.body,
    );
}
var tH = n(308081),
    tV = n(516521),
    tW = n(683071),
    tX = n(65593),
    tQ = n(218394),
    tZ = n(115982),
    tY = n(886540);
function tJ(e) {
    return !(0, tY.BL)(e) && !0 !== e.stopRequested;
}
var t0 = n(104317),
    t1 = n(939249),
    t2 = n(643278),
    t3 = n(566424),
    t4 = n(683063),
    t5 = n(140735),
    t7 = n(320448),
    t8 = n(138212);
function t9(e) {
    let { title: t, trailing: n, children: l, className: r, headerClassName: i, ...s } = e;
    return (0, a.jsxs)("section", {
        className: o()(t8.Nr, r),
        ...s,
        children: [
            (0, a.jsxs)("header", {
                className: o()(t8.wx, null != n && t8.o5, i),
                children: [
                    (0, a.jsx)(v.E, { tag: "span", variant: "body-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var t6 = n(148590);
function ne(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, { variant: "body-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function nt(e) {
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
        f = i.useId(),
        [h, g] = i.useState(!l),
        [p, x] = i.useState(l);
    p !== l && (x(l), g(!l));
    let v = i.useCallback(() => g((e) => !e), []),
        j = h ? eN.ChevronSmallDownIcon : t7.ChevronSmallRightIcon,
        b = null != n || l;
    return (0, a.jsxs)(t9, {
        ...m,
        title: t,
        trailing: b
            ? (0, a.jsxs)("span", {
                  className: t6.ZY,
                  children: [
                      n,
                      l
                          ? (0, a.jsx)(t1.D, {
                                className: t6.L$,
                                onClick: v,
                                "aria-expanded": h,
                                "aria-controls": f,
                                "aria-label": h ? s : r,
                                children: (0, a.jsx)(j, { size: "xs", color: "currentColor" }),
                            })
                          : null,
                  ],
              })
            : void 0,
        headerClassName: h ? void 0 : t6.RG,
        "data-superseded": l ? "true" : void 0,
        children: [c, (0, a.jsx)("div", { id: f, className: o()(t6.rf, u), hidden: !h, children: d })],
    });
}
n(321073);
var nn = n(883646);
let nl = [];
function nr(e) {
    let { status: t } = e;
    return (0, a.jsxs)("span", {
        className: o()(nn.xL, {
            [nn.Vb]: "in_progress" === t,
            [nn.cT]: "completed" === t,
            [nn.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return P.intl.string(T.default.KvBdun);
                case "in_progress":
                    return P.intl.string(T.default["m5G9+S"]);
                case "unfinished":
                    return P.intl.string(T.default.lRpwhD);
                default:
                    return P.intl.string(T.default.sPGeWi);
            }
        })(t),
        children: [
            (0, a.jsx)(b.y, {
                type: b.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: nn.Qd,
                itemClassName: nn.xB,
                "aria-hidden": !0,
            }),
            (0, a.jsx)("svg", {
                className: nn.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, a.jsx)("path", { className: nn.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function na(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : nl), [n, t]),
        r = i.useMemo(() => new Set(l.map((e) => e.key)), [l]),
        s = l.map((e) => e.key).join("\0"),
        [u, o] = i.useState(l),
        [c, d] = i.useState(s),
        [m, f] = i.useState(!1);
    c !== s && (d(s), o([...l, ...u.filter((e) => !r.has(e.key))]), 0 === l.length && f(!1));
    let h = u.some((e) => !r.has(e.key));
    if (
        (i.useEffect(() => {
            if (!h) return;
            let e = setTimeout(() => o(l), n ? 200 : 250);
            return () => clearTimeout(e);
        }, [h, l, n]),
        i.useEffect(() => {
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
    return (0, a.jsxs)("span", {
        className: nn.X6,
        "data-shown": n && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: s } = n;
                return (0, a.jsx)(
                    t4.u,
                    {
                        asset: (0, a.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: nn.MA,
                            "data-leaving": r.has(t) ? void 0 : "true",
                            children: (0, a.jsx)(s, { size: 16, alt: l, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            p > 0
                ? (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "body-xs/medium",
                      color: "text-muted",
                      className: nn.qA,
                      children: `+${p}`,
                  })
                : null,
        ],
    });
}
function ni(e) {
    let t,
        { todos: n, provisional: l, agents: r, live: s = !0 } = e,
        u = (function (e) {
            let t = e.join("\0"),
                [n, l] = i.useState(() => new Set(e)),
                [r, a] = i.useState(t),
                [s, u] = i.useState(() => new Set());
            return (
                r !== t && (a(t), l(new Set(e)), u(0 === n.size ? new Set() : new Set(e.filter((e) => !n.has(e))))),
                i.useEffect(() => {
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
        })(i.useMemo(() => n.map((e) => e.id), [n])),
        c =
            ((t = (r ?? nl).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            i.useMemo(
                () =>
                    (function (e) {
                        let t = new Map();
                        for (let n of e) {
                            if (null == n.todoId || "" === n.todoId) continue;
                            let e = t.get(n.todoId);
                            null != e ? e.push(n) : t.set(n.todoId, [n]);
                        }
                        return t;
                    })(r ?? nl),
                [t],
            ));
    return (0, a.jsxs)("ul", {
        className: nn.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, a.jsxs)(
                    "li",
                    {
                        className: o()(nn.AS, { [nn.J1]: "completed" === n }),
                        "data-arriving": u.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(nr, { status: n }),
                            (0, a.jsx)(v.E, {
                                variant: "body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: nn.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", {
                                    className: nn.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, a.jsx)(na, { agents: c.get(e.id) ?? nl, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, a.jsxs)("li", {
                      className: nn.AS,
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(nr, { status: "pending" }),
                          (0, a.jsx)(v.E, {
                              variant: "body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: nn.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: nn.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function ns(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: r = !0, live: i = !0, superseded: s = !1 } = e,
        { completed: u, total: o } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === o) return null;
    let c = P.intl.formatToPlainString(T.default["P/I+JW"], { completed: u, total: o }),
        d = P.intl.formatToPlainString(T.default["7tzwKB"], { completed: u, total: o });
    return (0, a.jsx)(nt, {
        title: P.intl.string(T.default.RtzECX),
        meta: (0, a.jsx)(ne, { children: c }),
        superseded: s,
        showLabel: P.intl.string(T.default.RKyN9q),
        hideLabel: P.intl.string(T.default.xydHoj),
        className: nn.Nr,
        bodyClassName: nn.rf,
        beforeBody: r && !s ? (0, a.jsx)(t5.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, a.jsx)(ni, { todos: t, provisional: n, agents: l, live: i }),
    });
}
var nu = n(308665),
    no = n(59678),
    nc = n(903847);
function nd(e) {
    let { line: t, placement: n, todos: l, todosLive: r = !0, provisionalTodo: s, agents: u, onJumpToActivity: c } = e,
        d = null != n,
        [m, f] = i.useState(n ?? "top"),
        [h, g] = i.useState(d),
        [p, x] = i.useState(!1),
        [v, j] = i.useState(!1),
        [b, y] = i.useState(d);
    (b !== d && (y(d), null != n ? (f(n), g(!0)) : (x(!1), j(!1))),
        i.useEffect(() => {
            if (d || !h) return;
            let e = setTimeout(() => g(!1), 150);
            return () => clearTimeout(e);
        }, [d, h]),
        i.useEffect(() => {
            if (!h || !d) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => x(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [h, d]));
    let [k, w] = i.useState(!1),
        [A, C] = i.useState(!1),
        [S, N] = i.useState(v);
    (S !== v && (N(v), v ? w(!0) : C(!1)),
        i.useEffect(() => {
            if (v || !k) return;
            let e = setTimeout(() => w(!1), 150);
            return () => clearTimeout(e);
        }, [v, k]),
        i.useEffect(() => {
            if (!k || !v) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => C(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [k, v]));
    let I = null != l && l.length > 0,
        E = i.useCallback(() => j((e) => !e), []);
    return h
        ? (0, a.jsxs)("div", {
              className: nc.qd,
              "data-placement": m,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: o()(nc.vK, { [nc.ho]: p && d, [nc.ET]: !d }),
                      children: [
                          null == c
                              ? (0, a.jsx)("ol", {
                                    className: o()(nc.Rk, no.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(t3.A, {
                                        glyph: (0, a.jsx)(nu.A, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(t1.D, {
                                    className: nc.pZ,
                                    onClick: c,
                                    "aria-label": P.intl.string(T.default.hEK6qu),
                                    children: (0, a.jsx)("ol", {
                                        className: o()(nc.Rk, no.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(t3.A, {
                                            glyph: (0, a.jsx)(nu.A, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          I
                              ? (0, a.jsx)(e6.m, {
                                    text: P.intl.string(T.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, a.jsx)(t1.D, {
                                        className: nc.BO,
                                        onClick: E,
                                        "aria-expanded": v,
                                        "aria-label": P.intl.string(T.default.RtzECX),
                                        children: (0, a.jsx)(t2.ClipboardListIcon, {
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
                      ? (0, a.jsx)("div", {
                            className: o()(nc.vB, { [nc.pg]: v && A, [nc.ui]: !v }),
                            children: (0, a.jsx)(ns, {
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
var nm = n(839214),
    nf = n(78564);
let nh = new Map(),
    ng = (0, nm.D)(() => ({ byMessageKey: {} }));
function np(e, t) {
    let { [e]: n, ...l } = ng.getState().byMessageKey;
    ng.setState({ byMessageKey: null == t ? l : { ...l, [e]: t } });
}
var nx = n(195880),
    nv = n(287111),
    nj = n(16619);
function nb(e) {
    let t = (0, nj.qh)("ConjureClarificationProjectPicker");
    return i.useMemo(
        () =>
            t
                .filter((t) => t.projectId !== e)
                .map((e) => ({ projectId: e.projectId, name: e.name, serverName: e.guildName })),
        [t, e],
    );
}
var ny = n(736553),
    nk = n(382541),
    nw = n(890497),
    nA = n(103557),
    nC = n(29073),
    nS = n(590077);
function nN(e) {
    let { projectId: t, request: n, canSend: l, onDismiss: r, onSent: s } = e,
        u = (function (e, t, n, l, r) {
            let a = nb(e),
                [s, u] = i.useState(null),
                [o, c] = i.useState([]),
                [d, m] = i.useState(t.prompt),
                [f, h] = i.useState(!1),
                [g, p] = i.useState(!1),
                x = i.useRef(new Map()),
                v = i.useRef(!1),
                j = i.useRef(!1),
                b = i.useMemo(() => a.filter((e) => !o.some((t) => t.target.projectId === e.projectId)), [a, o]),
                y = i.useMemo(
                    () => (null != t.project_ids ? t.project_ids : null != t.project_id ? [t.project_id] : []),
                    [t],
                ),
                k = i.useMemo(() => {
                    let e = s ?? y;
                    return b.filter((t) => e.includes(t.projectId)).map((e) => e.projectId);
                }, [s, y, b]),
                w = i.useMemo(() => b.filter((e) => k.includes(e.projectId)), [b, k]),
                A = i.useCallback((e) => {
                    u(e.slice(0, 10));
                }, []),
                C = d.trim(),
                S = n && !f && (w.length > 0 ? "" !== C : o.length > 0),
                N = i.useCallback(
                    (t) => {
                        j.current ||
                            ((j.current = !0),
                            h(!0),
                            null != r
                                ? r(t.map((e) => e.target))
                                : (0, nv.RQ)(
                                      e,
                                      (function (e) {
                                          let t = new Map();
                                          for (let { target: n, prompt: l } of e) t.set(l, [...(t.get(l) ?? []), n]);
                                          return Array.from(t, (e) => {
                                              let [t, n] = e,
                                                  l = n
                                                      .map((e) =>
                                                          P.intl.formatToPlainString(T.default.tcDZw9, {
                                                              name: e.name,
                                                              projectId: e.projectId,
                                                          }),
                                                      )
                                                      .join(", "),
                                                  r = P.intl.formatToPlainString(T.default.jZlNst, { targets: l });
                                              return `${r}

${t}`;
                                          }).join("\n\n");
                                      })(t),
                                  ));
                    },
                    [r, e],
                ),
                I = i.useCallback(() => {
                    let t, n;
                    if (!S) return;
                    if (0 === w.length) return void N(o);
                    (h(!0), p(!1));
                    let l =
                        ((t = eP.Ay.getProject(e)?.name ?? e),
                        (n = P.intl.formatToPlainString(T.default.ScoZLp, { name: t, projectId: e })),
                        `${C}

${n}`);
                    Promise.allSettled(
                        w.map((e) => {
                            let t = x.current.get(e.projectId);
                            return (
                                t?.content !== l &&
                                    ((t = { content: l, nonce: (0, nx.m)() }), x.current.set(e.projectId, t)),
                                (async function (e, t, n) {
                                    let l,
                                        { ticket: r, baseUrl: a } = await (0, nk.dv)(e),
                                        i = new ny.u();
                                    try {
                                        await new Promise((e, s) => {
                                            ((l = setTimeout(() => s(Error("Timed out sending the message")), 2e4)),
                                                i.open({
                                                    url: a,
                                                    ticket: r,
                                                    onEvent: (l) => {
                                                        if ("hello" === l.type)
                                                            try {
                                                                i.sendUserMessage(t, n);
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
                                        (clearTimeout(l), i.close());
                                    }
                                })(e.projectId, l, t.nonce)
                            );
                        }),
                    ).then((e) => {
                        let t = w.filter((t, n) => "fulfilled" === e[n].status),
                            n = [...o, ...t.map((e) => ({ target: e, prompt: C }))];
                        if (t.length === w.length || v.current) {
                            n.length > 0 && N(n);
                            return;
                        }
                        (c(n), u(w.filter((e) => !t.includes(e)).map((e) => e.projectId)), h(!1), p(!0));
                    });
                }, [S, N, o, e, w, C]),
                E = i.useCallback(() => {
                    ((v.current = !0), o.length > 0 && !f && N(o), l());
                }, [N, o, l, f]);
            return {
                projects: b,
                targetIds: k,
                setTargetIds: A,
                prompt: d,
                setPrompt: m,
                sending: f,
                failed: g,
                canSubmit: S,
                submit: I,
                dismiss: E,
            };
        })(t, n, l, r, s),
        c = i.useMemo(
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
    return (0, a.jsxs)("section", {
        className: o()(nC.nd, nC.jx),
        "aria-labelledby": m,
        "data-conjure-app-build-request": n.id,
        children: [
            (0, a.jsxs)("div", {
                className: nC.wx,
                children: [
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        id: m,
                        variant: "body-sm/medium",
                        color: "text-subtle",
                        className: nC.TK,
                        children: n.summary,
                    }),
                    (0, a.jsx)(tc.K, {
                        icon: e3.XSmallIcon,
                        size: "sm",
                        variant: "icon-only",
                        onClick: u.dismiss,
                        "aria-label": P.intl.string(T.default.KQUuAZ),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: nS.r,
                children: [
                    0 === c.length
                        ? (0, a.jsx)(v.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: P.intl.string(T.default.TbbzW5),
                          })
                        : (0, a.jsx)(nw.Z, {
                              label: P.intl.string(T.default["29gr8j"]),
                              placeholder: P.intl.string(T.default.twlOb6),
                              options: c,
                              selectionMode: "multiple",
                              wrapTags: !0,
                              value: [...u.targetIds],
                              onSelectionChange: u.setTargetIds,
                              disabled: u.sending,
                              maxOptionsVisible: 4,
                              fullWidth: !0,
                          }),
                    (0, a.jsx)(nA.f, {
                        label: P.intl.string(T.default.XZNsDA),
                        value: u.prompt,
                        onChange: u.setPrompt,
                        maxLength: 4e3,
                        disabled: u.sending,
                        autosize: !0,
                        rows: 3,
                        maxRows: 8,
                        error: u.failed ? P.intl.string(T.default.kMZz8G) : null,
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: nC.qr,
                children: (0, a.jsx)("div", {
                    className: nC.zt,
                    children: (0, a.jsx)(d.$, {
                        variant: "primary",
                        size: "sm",
                        text: P.intl.string(T.default.gG4j6o),
                        disabled: !u.canSubmit,
                        loading: u.sending,
                        onClick: u.submit,
                    }),
                }),
            }),
        ],
    });
}
var nI = n(47167),
    nE = n(734057),
    n_ = n(994500),
    nM = n(287809),
    nR = n(360047);
function nT(e, t, n) {
    let l = n[0]?.id;
    return null == l
        ? null
        : !0 === t.link
          ? { target: l, caller: e, key: `${l}:${e}` }
          : "incoming" === t.link
            ? { target: e, caller: l, key: `${e}:${l}` }
            : null;
}
function nP(e) {
    return 0 === e.options.length && null == e.input;
}
function nL(e) {
    return !1 !== e.allow_custom && !0 !== e.link && "incoming" !== e.link;
}
function n$(e, t, n) {
    return n < e.questions.length - 1
        ? n + 1
        : (function (e, t, n) {
              let { questions: l } = e;
              for (let e = 1; e <= l.length; e++) {
                  var r, a;
                  let i = (n + e) % l.length;
                  if (((r = l[i]), (a = t[l[i].id]), !0 !== r.optional && (null == a || "" === a.text.trim())))
                      return i;
              }
              return null;
          })(e, t, n);
}
function nD(e, t) {
    return e.questions
        .map((e, n) => ({ question: e, index: n, answer: t[e.id] }))
        .filter((e) => null != e.answer && "" !== e.answer.text.trim())
        .map((e) => {
            let { question: t, index: n, answer: l } = e;
            return `${n + 1}. ${t.question} \u{2192} ${l.text.trim()}`;
        })
        .join("\n");
}
function nq(e, t, n, l) {
    let r = n.trim(),
        a = e.options.filter((e) => t.includes(e.id)).map((e) => e.label);
    return {
        kind: "multi",
        optionIds: t,
        ...("" === r ? {} : { custom: r }),
        ...(null == l ? {} : { attachment: l.attachment }),
        text: [...a, ...(null == l ? [] : [l.text]), ...("" === r ? [] : [r])].join(", "),
    };
}
let nF = {
    [eb.rbe.GUILD_TEXT]: "text",
    [eb.rbe.GUILD_VOICE]: "voice",
    [eb.rbe.GUILD_ANNOUNCEMENT]: "announcement",
    [eb.rbe.GUILD_STAGE_VOICE]: "stage",
    [eb.rbe.GUILD_FORUM]: "forum",
    [eb.rbe.GUILD_MEDIA]: "media",
};
function nO(e, t, n, l) {
    return t.slice(0, 10).map((t) => ({
        id: t,
        name: n(t) ?? l.find((e) => e.id === t)?.name ?? t,
        ...(function (e, t) {
            if ("channel" === e) {
                var n;
                let l = null == (n = nE.A.getChannel(t)?.type) ? void 0 : nF[n];
                return { kind: e, ...(null == l ? {} : { channel_type: l }) };
            }
            if ("user" === e) {
                let n = nM.default.getUser(t)?.username;
                return { kind: e, ...(null == n ? {} : { username: n }) };
            }
            return { kind: e };
        })(e, t),
    }));
}
let nG = { channel: "#", role: "@", user: "@", project: "", server: "" },
    nz = {
        channel: [T.default["9+dfPT"], T.default.pGSJqE],
        role: [T.default["2VkCoD"], T.default.c8YlX8],
        user: [T.default.GZIAxl, T.default["4bptbQ"]],
        project: [T.default.twlOb6, T.default.twlOb6],
        server: [T.default.ZWXDeI, T.default.ZWXDeI],
    };
function nU(e, t) {
    return P.intl.string(nz[e][+!!t]);
}
var nB = n(658675),
    nK = n(123292),
    nH = n(900797),
    nV = n(771871),
    nW = n(700915),
    nX = n(985965),
    nQ = n(831819);
function nZ(e) {
    let { link: t, disabled: n } = e,
        l = i.useId(),
        [r, s] = i.useState(!1),
        u = i.useRef(null),
        { sentence: o, options: c } = t.data,
        d = c.length > 1,
        m = i.useMemo(() => c.map((e) => ({ name: e.label, value: e.build })), [c]);
    return (
        i.useEffect(() => {
            r && u.current?.querySelector("input:checked")?.focus();
        }, [r]),
        (0, a.jsx)("div", {
            className: nQ.Nz,
            children: (0, a.jsxs)(j.B, {
                gap: 4,
                children: [
                    (0, a.jsx)(nW.A, {
                        caller: t.sides.caller,
                        target: t.sides.target,
                        callerProject: t.callerProject,
                        targetProject: t.targetProject,
                        flow: t.flow,
                    }),
                    null != t.purpose ? (0, a.jsx)(nX.A, { purpose: t.purpose }) : null,
                    null != o
                        ? (0, a.jsxs)("div", {
                              className: nQ.em,
                              children: [
                                  (0, a.jsx)(v.E, { variant: "body-sm/normal", color: "text-subtle", children: o }),
                                  d && !r
                                      ? (0, a.jsxs)(a.Fragment, {
                                            children: [
                                                (0, a.jsx)(v.E, {
                                                    variant: "body-sm/normal",
                                                    color: "text-muted",
                                                    "aria-hidden": !0,
                                                    children: "\xb7",
                                                }),
                                                (0, a.jsx)(nK.Q, {
                                                    text: P.intl.string(T.default.I5F6YX),
                                                    textVariant: "body-sm/medium",
                                                    disabled: n,
                                                    onClick: () => s(!0),
                                                }),
                                            ],
                                        })
                                      : null,
                              ],
                          })
                        : null,
                    r && d
                        ? (0, a.jsxs)("div", {
                              ref: u,
                              className: nQ.zM,
                              children: [
                                  (0, a.jsx)("span", { id: l, hidden: !0, children: t.aria }),
                                  (0, a.jsx)(nV.z, {
                                      "aria-labelledby": l,
                                      options: m,
                                      value: t.value,
                                      disabled: n,
                                      onChange: t.onChange,
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
        })
    );
}
var nY = n(344587),
    nJ = n(155078);
function n0(e) {
    return !0 === e.upload || e.options.some((e) => null != e.image);
}
let n1 = [];
function n2(e) {
    return !0 !== e.upload
        ? null
        : 0 === e.options.length
          ? P.intl.string(T.default.ZZ641e)
          : P.intl.string(1 === e.options.length ? T.default["2g3gk9"] : T.default.dkzChE);
}
var n3 = n(762026);
function n4(e) {
    return e?.kind === "image" || (e?.kind === "multi" && null != e.attachment);
}
function n5(e, t) {
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
var n7 = n(682163),
    n8 = n(300344),
    n9 = n(614733),
    n6 = n(904363),
    le = n(950902),
    lt = n(136722),
    ln = n(778858),
    ll = n(808728),
    lr = n(696451),
    la = n(71393),
    li = n(488926),
    ls = n(426035),
    lu = n(246338);
let lo = lt.kg(eb.xBc.VIEW_CHANNEL, eb.xBc.SEND_MESSAGES);
var lc = n(384017);
function ld(e) {
    let {
            guildId: t,
            question: n,
            value: l,
            disabled: r,
            onChange: i,
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
        return nO(n.input ?? "channel", e, (e) => o.find((t) => t.value === e)?.label, l);
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
    return (0, a.jsx)("div", {
        className: lc.YX,
        "data-conjure-clarification-picker": n.input,
        children: f
            ? (0, a.jsx)(nw.Z, {
                  ...p,
                  selectionMode: "multiple",
                  wrapTags: !0,
                  value: h,
                  onSelectionChange: (e) => i(g(e), t),
              })
            : (0, a.jsx)(nw.Z, {
                  ...p,
                  selectionMode: "single",
                  clearable: !0,
                  value: h[0] ?? null,
                  onSelectionChange: (e) => i(null == e ? [] : g([e]), t),
              }),
    });
}
function lm(e) {
    let { projectId: t, guildId: n, fallback: l, ...r } = e,
        s = (0, n8.A)(n, r.question.channel_filter);
    return (!(function (e) {
        let t,
            n,
            { projectId: l, guildId: r, question: a, value: s, disabled: u, onChange: o } = e,
            d =
                ((t = null != r && "channel" === a.input && "safety_alerts_channel" === a.default),
                (n = (0, c.bG)(
                    [eP.Ay],
                    () => {
                        let e = t ? eP.Ay.getProject(l) : null;
                        return null == e ? null : (0, ls.ug)(e);
                    },
                    [l, t],
                )),
                i.useEffect(() => {
                    null == r || null == n || lr.Ay.isMember(r, n) || ln.A.requestMembersById(r, [n]);
                }, [r, n]),
                (0, c.bG)(
                    [ll.A, lr.Ay, la.A],
                    () => {
                        if (!t || null == r) return null;
                        let e = la.A.getGuild(r)?.safetyAlertsChannelId,
                            l = ll.A.getChannels(r);
                        if (null == e || null == l) return null;
                        let i = (0, lu.Lp)(l, a.channel_filter).find((t) => t.id === e);
                        if (null == i) return null;
                        if (null != n && lr.Ay.isMember(r, n))
                            return li.$3({ permission: lo, user: n, context: i }) ? i : null;
                        let s = i.permissionOverwrites[r]?.deny ?? lt.BY;
                        return lt.X8(s, lo) ? null : i;
                    },
                    [r, n, t, a.channel_filter],
                )),
            m = i.useRef(null),
            f = i.useRef(!1);
        i.useEffect(() => {
            if (!f.current && !u && null != r) {
                if (null == m.current) {
                    if (s.length > 0) f.current = !0;
                    else if (null != d) {
                        var e;
                        ((m.current = d.id),
                            o(((e = []), nO("channel", [d.id], () => (0, nI.m1)(d, nM.default, n_.A), e)), r));
                    }
                    return;
                }
                1 !== s.length || s[0].id !== m.current ? (f.current = !0) : null == d && ((f.current = !0), o([], r));
            }
        }, [d, u, r, o, s]);
    })({ projectId: t, guildId: n, ...r }),
    null == s)
        ? l
        : (0, a.jsx)(ld, { ...r, guildId: n, options: s, placeholder: nU("channel", !0 === r.question.multi_select) });
}
function lf(e) {
    let { guildId: t, ...n } = e,
        l = (0, n6.A)(t);
    return (0, a.jsx)(ld, { ...n, guildId: t, options: l, placeholder: nU("role", !0 === n.question.multi_select) });
}
function lh(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: i } = (0, n9.A)(t);
    return (0, a.jsx)(ld, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: r,
        matchSorterOptions: i,
        placeholder: nU("user", !0 === n.question.multi_select),
    });
}
function lg(e) {
    let { projectId: t, fallback: n, ...l } = e,
        r = nb(t),
        s = i.useMemo(
            () =>
                r.map((e) => ({
                    id: e.projectId,
                    label: e.name,
                    value: e.projectId,
                    ...(null == e.serverName ? {} : { description: e.serverName }),
                })),
            [r],
        );
    return 0 === s.length ? n : (0, a.jsx)(ld, { ...l, options: s, placeholder: nU("project", !1) });
}
function lp(e) {
    let t = e.target;
    (0, e7.vq)(t, HTMLInputElement) && requestAnimationFrame(() => t.select());
}
function lx(e) {
    let { fallback: t, ...n } = e,
        l = (0, nj.z9)("ConjureClarificationEntityPicker"),
        r = i.useMemo(
            () =>
                l.map((e) => ({
                    id: `conjure-target-${e.id}`,
                    value: e.id,
                    label: e.name,
                    leading: (0, a.jsx)(n7.Ay, { guild: e, size: n7.Ay.Sizes.MINI, active: !0 }),
                })),
            [l],
        );
    return 0 === r.length
        ? t
        : (0, a.jsx)("div", {
              onFocus: lp,
              onMouseUp: lp,
              children: (0, a.jsx)(ld, { ...n, options: r, placeholder: nU("server", !1) }),
          });
}
function lv(e) {
    let { projectId: t, fallback: n = null, ...l } = e,
        r = (0, le.Tj)(t, !0);
    if ("project" === l.question.input) return (0, a.jsx)(lg, { projectId: t, fallback: n, ...l }, l.question.id);
    if ("server" === l.question.input) return (0, a.jsx)(lx, { fallback: n, ...l }, l.question.id);
    if (null == r) return n;
    switch (l.question.input) {
        case "channel":
            return (0, a.jsx)(lm, { projectId: t, guildId: r, fallback: n, ...l }, l.question.id);
        case "role":
            return (0, a.jsx)(lf, { guildId: r, ...l }, l.question.id);
        case "user":
            return (0, a.jsx)(lh, { guildId: r, ...l }, l.question.id);
        default:
            return n;
    }
}
var lj = n(87221),
    lb = n(26430),
    ly = n(750943),
    lk = n(173936),
    lw = n(95477),
    lA = n(256905),
    lC = n(490707),
    lS = n(907702);
function lN(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: s, gone: u, handleError: c } = (0, lC._)(t, n),
        [d, m] = i.useState(null),
        f = null != s && d === s;
    return u
        ? (0, a.jsxs)("span", {
              className: o()(lS.Gt, lS.b6),
              children: [
                  (0, a.jsx)(lj.ImageWarningIcon, { size: "md", color: "currentColor" }),
                  (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "body-xs/medium",
                      color: "text-muted",
                      children: P.intl.string(T.default.lhgD88),
                  }),
              ],
          })
        : (0, a.jsx)("span", {
              className: o()(lS.Gt, { [lS.iP]: !f }),
              children:
                  null != s
                      ? (0, a.jsx)("img", {
                            src: s,
                            alt: l,
                            className: lS.Sl,
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
function lI(e) {
    let t,
        n,
        {
            projectId: l,
            option: r,
            multi: i,
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
        x = P.intl.formatToPlainString(T.default.JGjZMs, { answer: r.label });
    return (0, a.jsxs)("div", {
        className: o()(lS.Vs, { [lS.Q9]: s, [lS.RX]: u }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, a.jsxs)(t1.D, {
                className: o()(lS.Up, { [lS.XF]: null != r.image }),
                "data-conjure-image-option-pick": !0,
                onClick: u ? (null != r.image ? () => f(r) : void 0) : () => m(r),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), h(r, t));
                },
                role: i ? "checkbox" : "radio",
                "aria-checked": s,
                "aria-label": P.intl.formatToPlainString(T.default.AQbxhf, { answer: r.label }),
                "aria-disabled": u,
                tabIndex: c && d ? 0 : -1,
                children: [
                    (0, a.jsxs)("span", {
                        className: lS.$_,
                        children: [
                            null != r.image
                                ? (0, a.jsx)(lN, {
                                      projectId: l,
                                      attachmentId: r.image.attachment_id,
                                      alt: r.label,
                                      onMeasured: g,
                                  })
                                : (0, a.jsx)("span", { className: lS.Gt }),
                            (0, a.jsx)("span", {
                                className: lS.q3,
                                "aria-hidden": !0,
                                children: i
                                    ? (0, a.jsx)(nB.P, { checked: s, disabled: u })
                                    : (0, a.jsx)(nV.T, { checked: s, disabled: u }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        variant: "body-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: lS.pG,
                        children:
                            "" !== (n = null != (t = r.image?.page_url ?? r.image?.url) ? (0, nJ.E)(t) : "")
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
                ? (0, a.jsx)("span", {
                      className: lS.B4,
                      children: (0, a.jsx)(e6.m, {
                          text: P.intl.string(T.default.HQEXJM),
                          children: (0, a.jsx)(tc.K, {
                              icon: tg.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: p,
                              disabled: u,
                              "aria-label": P.intl.string(T.default.HQEXJM),
                              tabIndex: c ? 0 : -1,
                          }),
                      }),
                  })
                : null != r.image
                  ? (0, a.jsx)("span", {
                        className: lS.B4,
                        children: (0, a.jsx)(e6.m, {
                            text: P.intl.string(T.default["4/eeDD"]),
                            children: (0, a.jsx)(tc.K, {
                                icon: lb.MaximizeIcon,
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
function lE(e) {
    let { projectId: t, question: n, selectedIds: l, disabled: r, reachable: s = !0, onPick: u, own: c } = e,
        d = !0 === n.multi_select,
        { options: m } = n,
        f = m.length > 4 ? "gallery" : "row",
        h = i.useRef(null),
        g = i.useRef(new Map()),
        [p, x] = i.useState(null),
        v = null != p && m.some((e) => e.id === p) ? p : (m.find((e) => l.includes(e.id)) ?? m[0])?.id,
        j = i.useMemo(() => {
            var e;
            return null == c.image
                ? null
                : ((e = c.image),
                  {
                      id: `own:${e.attachment.id}`,
                      label: P.intl.string(T.default.SUdqCQ),
                      image: { attachment_id: e.attachment.id },
                  });
        }, [c.image]),
        b = i.useCallback(
            (e) => {
                let n = (null == j ? m : [...m, j]).flatMap((e) => (null != e.image ? [{ ...e, image: e.image }] : [])),
                    l = n.findIndex((t) => t.id === e.id);
                l < 0 ||
                    Promise.all(n.map((e) => (0, e9.PK)(t, e.image.attachment_id))).then(
                        (e) => {
                            (0, lA.R)({
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
        y = i.useCallback(
            (e, t) => {
                let n = (m.findIndex((t) => t.id === e.id) + t + m.length) % m.length,
                    l = m[n];
                (x(l.id), h.current?.querySelectorAll("[data-conjure-image-option-pick]")[n]?.focus(), d || r || u(l));
            },
            [r, d, u, m],
        );
    return (0, a.jsxs)("div", {
        className: lS.Nz,
        "data-conjure-image-options": !0,
        children: [
            0 === m.length && null == j
                ? null
                : (0, a.jsxs)("div", {
                      ref: h,
                      className: o()(lS.fF, "gallery" === f ? lS.nV : lS.nM, { [lS.m3]: d }),
                      role: d ? "group" : "radiogroup",
                      "aria-labelledby": `${n.id}-label`,
                      "data-layout": f,
                      "data-count": m.length,
                      children: [
                          m.map((e) =>
                              (0, a.jsx)(
                                  lI,
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
                              ? (0, a.jsx)(
                                    lI,
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
            (0, a.jsx)(l_, {
                projectId: t,
                own: c,
                disabled: r,
                reachable: s,
                uploadText: P.intl.string(/\bicons?\b/i.test(n.question) ? T.default.qU4WN6 : T.default.cbMDDB),
            }),
        ],
    });
}
function l_(e) {
    let { projectId: t, own: n, disabled: l, reachable: r, uploadText: s } = e,
        u = i.useRef(null),
        [o, c] = i.useState(!1),
        [m, f] = i.useState(""),
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
    return (0, a.jsxs)("div", {
        className: lS.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, a.jsxs)("div", {
                className: lS.QJ,
                children: [
                    (0, a.jsx)(d.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: ly.ImagePlusIcon,
                        text: s,
                        loading: "upload" === g,
                        disabled: l || "link" === g,
                        onClick: () => u.current?.click(),
                        tabIndex: h,
                        "data-conjure-own-image-upload": !0,
                    }),
                    o
                        ? null
                        : (0, a.jsx)(d.$, {
                              variant: "secondary",
                              size: "sm",
                              icon: lk.LinkIcon,
                              text: P.intl.string(T.default["1TgOO+"]),
                              disabled: l || "upload" === g,
                              onClick: () => c(!0),
                              tabIndex: h,
                              "data-conjure-own-image-link": !0,
                          }),
                    (0, a.jsx)("input", {
                        ref: u,
                        type: "file",
                        accept: "image/png,image/jpeg,image/gif,image/webp",
                        className: lS.Fg,
                        tabIndex: -1,
                        "aria-hidden": !0,
                        onChange: (e) => {
                            let l = e.currentTarget.files?.[0];
                            ((e.currentTarget.value = ""), null != l && n.onUpload((0, nv.rh)(t, l, l.name, l.type)));
                        },
                    }),
                ],
            }),
            o
                ? (0, a.jsxs)("div", {
                      className: lS.vG,
                      children: [
                          (0, a.jsx)("div", {
                              className: lS.Hs,
                              children: (0, a.jsx)(lw.k, {
                                  label: P.intl.string(T.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: P.intl.string(T.default.AVhvn8),
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
                          (0, a.jsxs)("div", {
                              className: lS.gd,
                              children: [
                                  (0, a.jsx)(d.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: P.intl.string(T.default.FbRbeM),
                                      loading: "link" === g,
                                      disabled: l || "" === m.trim(),
                                      onClick: p,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, a.jsx)(nK.Q, {
                                      variant: "secondary",
                                      textVariant: "body-sm/medium",
                                      text: P.intl.string(T.default.eXZL4X),
                                      onClick: () => c(!1),
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
            n.error?.source === "upload"
                ? (0, a.jsx)(v.E, {
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
function lM(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: u } = e,
        c = i.useId(),
        d = !0 === t.recommended,
        m = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(t1.D, {
        className: o()(lc.uK, { [lc.ue]: l, [lc.h4]: !0 === u }),
        onClick: l ? void 0 : () => r(t),
        "aria-label": P.intl.formatToPlainString(d ? T.default["2p6UFz"] : T.default.AQbxhf, { answer: t.label }),
        "aria-describedby": m ? c : void 0,
        "aria-disabled": l,
        role: null != u ? "checkbox" : void 0,
        "aria-checked": u,
        tabIndex: s ? 0 : -1,
        "data-conjure-clarification-option": t.id,
        "data-recommended": d ? "true" : void 0,
        children: [
            null != u
                ? (0, a.jsx)("span", { className: lc.dy, children: (0, a.jsx)(nB.P, { checked: u, disabled: l }) })
                : (0, a.jsx)("span", { className: lc.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: lc.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: lc.l8,
                        children: (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "body-md/medium",
                            color: "none",
                            className: lc.ed,
                            children: t.label,
                        }),
                    }),
                    m
                        ? (0, a.jsx)(v.E, {
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
                ? (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "body-xs/semibold",
                      color: "text-muted",
                      className: lc.rM,
                      children: P.intl.string(T.default.zku6r1),
                  })
                : null,
        ],
    });
}
function lR(e) {
    let { projectId: t, question: n, selected: l, disabled: r, reachable: i = !0, onPick: s, own: u } = e,
        o = !0 === n.multi_select;
    return n0(n)
        ? (0, a.jsx)(lE, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: i, onPick: s, own: u })
        : (0, a.jsx)(a.Fragment, {
              children: n.options.map((e, t) =>
                  (0, a.jsx)(
                      lM,
                      {
                          option: e,
                          position: t + 1,
                          disabled: r,
                          selected: o ? l.includes(e.id) : void 0,
                          onPick: s,
                          reachable: i,
                      },
                      e.id,
                  ),
              ),
          });
}
let lT = [],
    lP = [];
function lL(e) {
    let {
            projectId: t,
            question: n,
            draft: l,
            selected: r,
            direction: i,
            disabled: s,
            ownImage: u,
            ownSelected: c,
        } = e,
        d = "" === l.trim() ? null : l,
        m = !0 === n.multi_select ? P.intl.string(T.default.tE8qbz) : n2(n);
    return (0, a.jsxs)("div", {
        className: o()(lc.Ge, lc.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            null == m
                ? null
                : (0, a.jsx)(v.E, {
                      tag: "div",
                      variant: "body-xs/normal",
                      color: "text-muted",
                      className: lc.aK,
                      children: m,
                  }),
            (0, a.jsx)(lR, {
                projectId: t,
                question: n,
                selected: r,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: n5(u, c),
            }),
            !1 === n.allow_custom || (!0 !== n.upload && n0(n))
                ? null
                : (0, a.jsxs)("div", {
                      className: lc.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: lc.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(f.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == d ? null : (0, a.jsx)("span", { className: o()(lc.Pu, lc.es), children: d }),
                      ],
                  }),
            !0 === n.upload
                ? (0, a.jsx)("div", {
                      className: lc.$0,
                      children: (0, a.jsx)(nK.Q, {
                          variant: "secondary",
                          textVariant: "body-sm/medium",
                          text: P.intl.string(T.default.zxSq2q),
                          disabled: s,
                          tabIndex: -1,
                      }),
                  })
                : null,
        ],
    });
}
function l$(e) {
    var t;
    let {
            projectId: n,
            clarification: l,
            onSubmit: r,
            onDismiss: s,
            submitText: u,
            onBack: m,
            backText: h,
            hideSubmit: g = !1,
            headingLines: p = 5,
        } = e,
        [x, j] = i.useState({}),
        [b, y] = i.useState({}),
        [k, w] = i.useState({}),
        [A, C] = i.useState(() =>
            Object.fromEntries(
                l.questions.flatMap((e) => (null != e.default_entities ? [[e.id, e.default_entities]] : [])),
            ),
        ),
        [S, N] = i.useState({}),
        { builds: I, linkFor: E } = (function (e, t, n) {
            let l = i.useMemo(
                    () =>
                        Object.fromEntries(
                            t.questions.flatMap((t) => {
                                let l = nT(e, t, n[t.id] ?? []);
                                return null == l ? [] : [[t.id, l]];
                            }),
                        ),
                    [t, n, e],
                ),
                [r, a] = i.useState({}),
                [s, u] = i.useState({}),
                o = i.useRef(new Set());
            i.useEffect(() => {
                for (let e of Object.values(l))
                    o.current.has(e.key) ||
                        (o.current.add(e.key),
                        (async function (e, t, n) {
                            try {
                                let l = await (0, nR.LW)(e, t);
                                a((e) => ({ ...e, [n]: l }));
                            } catch {}
                        })(e.target, e.caller, e.key));
            }, [l]);
            let d = (0, c.cf)(
                [eP.Ay],
                () =>
                    Object.fromEntries(
                        Object.values(l).flatMap((e) => [e.target, e.caller].map((e) => [e, eP.Ay.getProject(e)])),
                    ),
                [l],
            );
            return {
                builds: i.useMemo(
                    () =>
                        Object.fromEntries(
                            Object.entries(l).flatMap((e) => {
                                let [t, n] = e,
                                    l = s[n.key];
                                return null == l ? [] : [[t, l]];
                            }),
                        ),
                    [s, l],
                ),
                linkFor: i.useCallback(
                    (a) => {
                        let i = l[a],
                            o = null == i ? null : r[i.key],
                            c = n[a]?.[0]?.name,
                            m = d[e]?.name;
                        if (null == i || null == o || null == c || null == m) return null;
                        let f = i.caller === e,
                            h = d[i.caller],
                            g = {
                                caller: f ? m : c,
                                target: f ? c : m,
                                targetLive: o.live,
                                targetHasPreview: o.hasPreview,
                                callerHasPreview: null == h || (0, en._7)(h),
                                callerLiveOnVibeyard: !1,
                            },
                            p = s[i.key] ?? o.build,
                            x = t.questions.find((e) => e.id === a);
                        return {
                            sides: g,
                            callerProject: h ?? null,
                            targetProject: d[i.target] ?? null,
                            flow: x?.link_flow ?? o.flow,
                            purpose: (0, n3.xP)(x?.link_purpose ?? o.purpose),
                            data: (0, n3.Bw)(g, p),
                            value: p,
                            aria: (0, n3.sr)(g),
                            onChange: (e) => u((t) => ({ ...t, [i.key]: e })),
                        };
                    },
                    [s, t, n, l, e, d, r],
                ),
            };
        })(n, l, A),
        [_, M] = i.useState(!1),
        [R, L] = i.useState(0),
        [$, D] = i.useState(null),
        [q, F] = i.useState(null),
        [O, G] = i.useState(null),
        [z, U] = i.useState(!1),
        B = i.useRef(null),
        [K, H] = i.useState(null),
        V = i.useRef(null),
        W = i.useRef(0),
        X = null == r,
        Q = l.questions.length,
        Z = Math.min(R, Q - 1),
        Y = l.questions[Z],
        [J, ee] = i.useState({ id: Y.id, expanded: !1 }),
        et = J.id === Y.id && J.expanded,
        [el, er] = i.useState(null),
        ea = b[Y.id] ?? "",
        ei = !0 === Y.multi_select,
        es = n0(Y),
        eu = ei ? P.intl.string(T.default.tE8qbz) : n2(Y),
        eo = ei
            ? (k[Y.id] ?? lT)
            : ((t = x[Y.id]), t?.kind === "option" ? [t.optionId] : t?.kind === "multi" ? t.optionIds : n1),
        ec = (function (e, t, n) {
            let [l, r] = i.useState({}),
                [a, s] = i.useState({}),
                [u, o] = i.useState({}),
                c = P.intl.string(T.default.wTsP5l),
                d = i.useCallback((e) => l[e] ?? null, [l]),
                m = i.useCallback(
                    (e) => null != l[e.id] && (!0 === e.multi_select ? !0 === u[e.id] : n4(t[e.id])),
                    [t, l, u],
                ),
                f = i.useCallback(
                    (e) => {
                        let t = l[e.id];
                        return null != t && !0 === u[e.id] ? { attachment: t.attachment, text: c } : void 0;
                    },
                    [c, l, u],
                ),
                h = i.useCallback(
                    (i, u) => {
                        let d = i.id,
                            f = !0 === i.multi_select,
                            h = l[d] ?? null;
                        if (u) return n5(h, m(i));
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
                                    null != l && (0, e9.Vm)(e, l.attachment.id).catch(() => void 0), { ...n, [d]: t }
                                );
                            }),
                                g({ busy: null, error: null }),
                                f ? o((e) => ({ ...e, [d]: !0 })) : n((e) => (e[d] === x ? { ...e, [d]: p(t) } : e)));
                        }
                        return {
                            image: h,
                            selected: m(i),
                            busy: a[d]?.busy ?? null,
                            error: a[d]?.error ?? null,
                            onPick: () => {
                                null != h &&
                                    (f ? o((e) => ({ ...e, [d]: !0 !== e[d] })) : n((e) => ({ ...e, [d]: p(h) })));
                            },
                            onRemove: () => {
                                null != h &&
                                    ((0, e9.Vm)(e, h.attachment.id).catch(() => void 0),
                                    r((e) => {
                                        let { [d]: t, ...n } = e;
                                        return n;
                                    }),
                                    o((e) => ({ ...e, [d]: !1 })),
                                    n((e) => {
                                        if (f || !n4(e[d])) return e;
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
                                                error: { source: "upload", text: P.intl.string(T.default["kUw/b1"]) },
                                            }),
                                    ));
                            },
                            onLink: (t) => (
                                g({ busy: "link", error: null }),
                                (0, e9.gm)(e, t).then(
                                    (e) => (v({ attachment: e }), !0),
                                    (e) => (
                                        g({
                                            busy: null,
                                            error: {
                                                source: "link",
                                                text:
                                                    e instanceof Error && "" !== e.message
                                                        ? e.message
                                                        : P.intl.string(T.default.l79PMc),
                                            },
                                        }),
                                        !1
                                    ),
                                )
                            ),
                        };
                    },
                    [c, t, l, e, m, n, a],
                );
            return { imageFor: d, selectedFor: m, multiPartFor: f, controlsFor: h };
        })(n, x, j),
        ed = ec.imageFor(Y.id),
        em = ec.selectedFor(Y),
        { text: ef, phase: eh } = (0, nY.Q)(Y.question),
        eg = ef === Y.question,
        ep = eg && el?.id === Y.id && el.truncated;
    i.useLayoutEffect(() => {
        if (null == K || et || !eg) return;
        function e() {
            if (null == K) return;
            let e = K.scrollHeight > K.clientHeight + 1;
            er((t) => (t?.id === Y.id && t.truncated === e ? t : { id: Y.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(K), () => t.disconnect());
    }, [eg, K, Y.id, et]);
    let ex = P.intl.string(et ? P.t.iTcuma : P.t.dcl9MQ),
        ev = i.useCallback(
            (e) => {
                null != r &&
                    (function (e, t, n, l, r) {
                        let a = nD(t, n);
                        if ("" !== a) {
                            var i;
                            let s;
                            ((i = () => {
                                let e;
                                return r(
                                    a,
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
                                            a = "entities" === t.kind ? t.entities : [],
                                            i = "entities" === t.kind && a.length > 0 ? t.guildId : void 0,
                                            s = "image" === t.kind || "multi" === t.kind ? t.attachment : void 0;
                                        return [
                                            {
                                                question_id: e.id,
                                                option_ids: l,
                                                ...(null != r && "" !== r ? { custom: r } : {}),
                                                ...(null != s ? { attachment_id: s.id } : {}),
                                                ...(a.length > 0 ? { entities: a } : {}),
                                                ...(null != i ? { guild_id: i } : {}),
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
                                (s = t.questions.flatMap((t) => {
                                    let r = n[t.id];
                                    return r?.kind !== "entities"
                                        ? []
                                        : r.entities.flatMap((n) => {
                                              let r = nT(e, t, [n]);
                                              return null == r
                                                  ? []
                                                  : [
                                                        {
                                                            ...r,
                                                            build: l[t.id],
                                                            purpose: t.link_purpose,
                                                            flow: t.link_flow,
                                                        },
                                                    ];
                                          });
                                })).length
                                    ? i()
                                    : Promise.allSettled(
                                          s.map((e) => {
                                              let { target: t, caller: n, ...l } = e;
                                              return (0, nR.Ol)(t, n, l);
                                          }),
                                      ).then(i));
                        }
                    })(n, l, e, I, r);
            },
            [l, I, r, n],
        ),
        ej = i.useCallback(
            (e, t) => {
                W.current += 1;
                let n = W.current;
                (D({ direction: t, moves: n }),
                    F({ question: Y, draft: ea, selected: eo, ownImage: ed, ownSelected: em, direction: t, moves: n }),
                    U(!0),
                    L(e));
            },
            [ea, ed, em, Y, eo],
        ),
        eb = i.useCallback(() => {
            let e = B.current,
                t = V.current;
            null != e && null != t && G({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    i.useLayoutEffect(() => {
        let e = B.current,
            t = V.current;
        if (null == e || null == t) return;
        eb();
        let n = new ResizeObserver(eb);
        return (n.observe(e), n.observe(t), () => n.disconnect());
    }, [eb]);
    let ey = $?.moves;
    i.useEffect(() => {
        if (null == ey) return;
        let e = setTimeout(() => F(null), 400),
            t = setTimeout(() => U(!1), 500);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [ey]);
    let ek = i.useCallback(
            (e) => {
                let t = n$(l, e, Z);
                null == t ? ev(e) : ej(t, t < Z ? "back" : "forward");
            },
            [l, Z, ev, ej],
        ),
        ew = i.useCallback(
            (e) => {
                if (X) return;
                let t = { ...x, [Y.id]: e };
                (j(t), ek(t));
            },
            [ek, x, X, Y.id],
        ),
        eA = i.useCallback(() => {
            X || 0 === Z || ej(Z - 1, "back");
        }, [X, Z, ej]),
        eC = 0 !== Z || X ? void 0 : m,
        eS = (Z > 0 && !X) || null != eC,
        eI = i.useCallback(
            (e) => {
                y((e) => ({ ...e, [Y.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                es ? X || j((e) => ({ ...e, [Y.id]: t })) : ew(t);
            },
            [X, es, Y.id, ew],
        ),
        eE = i.useCallback(() => {
            (y((e) => ({ ...e, [Y.id]: "" })), ew({ kind: "custom", text: P.intl.string(T.default.zxSq2q) }));
        }, [Y.id, ew]),
        { multiPartFor: e_ } = ec,
        eM = i.useMemo(() => (ei ? nq(Y, eo, ea, e_(Y)) : null), [ea, ei, e_, Y, eo]),
        eR = A[Y.id] ?? lP,
        eT = E(Y.id),
        eL = i.useMemo(() => {
            var e, t;
            let n;
            return null != Y.input
                ? ((e = Y.input),
                  (t = S[Y.id]),
                  (n = ea.trim()),
                  {
                      kind: "entities",
                      entities: eR,
                      ...(null == t ? {} : { guildId: t }),
                      ...("" === n ? {} : { custom: n }),
                      text: [
                          ...eR.map((t) => (t.name.startsWith(nG[e]) ? t.name : `${nG[e]}${t.name}`)),
                          ...("" === n ? [] : [n]),
                      ].join(", "),
                  })
                : null;
        }, [ea, S, eR, Y.id, Y.input]),
        e$ = i.useCallback(
            (e, t) => {
                (C((t) => ({ ...t, [Y.id]: e })), N((e) => ({ ...e, [Y.id]: t })));
            },
            [Y.id],
        ),
        eD = i.useCallback(() => M(!0), []),
        eq = i.useCallback(() => M(!1), []),
        eF = ec.controlsFor(Y, X),
        eO = i.useMemo(() => {
            var e;
            let t;
            return (
                (e = x[Y.id]),
                null ==
                (t = (function (e, t) {
                    if (!0 !== e.upload || !0 === e.multi_select || null == t) return null;
                    if ("option" === t.kind || "image" === t.kind) return t;
                    if ("multi" !== t.kind) return null;
                    if (null != t.attachment)
                        return { kind: "image", attachment: t.attachment, text: P.intl.string(T.default.wTsP5l) };
                    let n = e.options.find((e) => {
                        let { id: n } = e;
                        return t.optionIds.includes(n);
                    });
                    return null != n ? { kind: "option", optionId: n.id, text: n.label } : null;
                })(Y, e))
                    ? null
                    : "" === ea.trim()
                      ? e?.kind === "multi"
                          ? t
                          : null
                      : "option" === t.kind
                        ? nq(Y, [t.optionId], ea)
                        : nq(Y, [], ea, t)
            );
        }, [x, ea, Y]),
        eG = i.useMemo(
            () =>
                (function (e, t, n) {
                    if (null != e) return "" !== e.text ? e : null;
                    if (null != t) return "" !== t.text ? t : null;
                    let l = n.trim();
                    return "" !== l ? { kind: "custom", text: l } : null;
                })(eL, eM ?? eO, ea),
            [ea, eM, eO, eL],
        ),
        ez = i.useCallback(() => {
            null != eG && ew(eG);
        }, [eG, ew]),
        [eU, eB] = i.useState(!1),
        [eK, eH] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => eB(!0));
            });
        return () => {
            (cancelAnimationFrame(t), cancelAnimationFrame(e));
        };
    }, []);
    let eV = i.useCallback(() => {
            null != s && (eH(!0), setTimeout(s, 150));
        }, [s]),
        eW = eG ?? (null == eL && null == eM ? (x[Y.id] ?? null) : null),
        eX = i.useMemo(
            () =>
                null == eW
                    ? (function (e, t, n) {
                          let l = e.questions[n];
                          if (l?.optional !== !0) return null;
                          let r = Object.fromEntries(
                              Object.entries(t).filter((e) => {
                                  let [t] = e;
                                  return t !== l.id;
                              }),
                          );
                          return null == n$(e, r, n) && "" === nD(e, r) ? null : r;
                      })(l, x, Z)
                    : null,
            [x, l, Z, eW],
        ),
        eQ = null != eX,
        eZ = (null != eW || eQ) && !X,
        eY = Z === Q - 1,
        eJ = i.useCallback(() => {
            X || (null != eW ? ew(eW) : null != eX && (j(eX), ek(eX)));
        }, [ek, X, eW, ew, eX]),
        e0 = i.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, e7.vq)(e.target, HTMLTextAreaElement) ||
                    (0, e7.vq)(e.target, HTMLInputElement) ||
                    ((!(0, e7.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && eS
                            ? (e.preventDefault(), (eC ?? eA)())
                            : "ArrowRight" === e.key && eZ && (e.preventDefault(), eJ())));
            },
            [eC, eS, eZ, eA, eJ],
        ),
        e1 =
            es && !0 !== Y.upload
                ? null
                : (0, a.jsxs)("div", {
                      className: lc.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: lc.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(f.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          (0, a.jsx)(tt.y, {
                              value: ea,
                              onChange: (e) => {
                                  let { value: t } = e.currentTarget;
                                  y((e) => ({ ...e, [Y.id]: t }));
                              },
                              onKeyDown: (e) => {
                                  "Enter" !== e.key ||
                                      e.shiftKey ||
                                      e.nativeEvent.isComposing ||
                                      (e.preventDefault(), ez());
                              },
                              placeholder: P.intl.string(nP(Y) ? T.default.yLN1x6 : T.default["tOC+tn"]),
                              "aria-label": P.intl.formatToPlainString(T.default["4JeYPB"], { question: Y.question }),
                              disabled: X,
                              rows: 1,
                              className: lc.Pu,
                              "data-conjure-clarification-other": Y.id,
                          }),
                      ],
                  });
    return (0, a.jsxs)("section", {
        className: o()(lc.$O, { [lc.fI]: eU && !eK, [lc.Oh]: eK }),
        role: "dialog",
        "aria-label": Y.question,
        "data-conjure-clarification": l.id,
        "data-state": X ? "inert" : "open",
        "data-question-expanded": et ? "true" : void 0,
        "data-picker-open": _ && !z ? "true" : void 0,
        "data-step": Z,
        tabIndex: -1,
        onKeyDown: e0,
        children: [
            (0, a.jsxs)("div", {
                className: lc.rf,
                style: null == O ? void 0 : { height: O.heading + O.rows },
                "data-moving": z ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: B,
                        className: lc.wx,
                        children: [
                            (0, a.jsx)(v.E, {
                                ref: H,
                                tag: "span",
                                id: `${Y.id}-label`,
                                variant: "body-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: et ? void 0 : p,
                                className: o()(nC.TK, lc.R_, { [lc.TB]: "exit" === eh, [lc.JU]: "enter" === eh }),
                                children: ef,
                            }),
                            ep || et
                                ? (0, a.jsx)("div", {
                                      className: nC.Q7,
                                      children: (0, a.jsx)(e6.m, {
                                          text: ex,
                                          children: (0, a.jsx)(tc.K, {
                                              icon: et ? nH.ChevronSmallUpIcon : eN.ChevronSmallDownIcon,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => ee({ id: Y.id, expanded: !et }),
                                              "aria-label": ex,
                                              "aria-controls": `${Y.id}-label`,
                                              "aria-expanded": et,
                                          }),
                                      }),
                                  })
                                : null,
                            null == s
                                ? null
                                : (0, a.jsx)(t1.D, {
                                      className: o()(nC.gb, nC.Q7),
                                      onClick: eV,
                                      "aria-label": P.intl.string(T.default.qVXlk0),
                                      "data-conjure-clarification-close": !0,
                                      children: (0, a.jsx)(e3.XSmallIcon, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: lc.Cg,
                        style: null == O ? void 0 : { insetBlockStart: O.heading },
                        children: (0, a.jsxs)("div", {
                            className: lc.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: V,
                                    className: lc.Ge,
                                    role: "group",
                                    "aria-labelledby": `${Y.id}-label`,
                                    "data-direction": $?.direction,
                                    "data-parity": null == $ ? void 0 : $.moves % 2,
                                    children: [
                                        null == eu
                                            ? null
                                            : (0, a.jsx)(v.E, {
                                                  tag: "div",
                                                  variant: "body-xs/normal",
                                                  color: "text-muted",
                                                  className: lc.aK,
                                                  children: eu,
                                              }),
                                        (0, a.jsx)(lR, {
                                            projectId: n,
                                            question: Y,
                                            selected: eo,
                                            disabled: X,
                                            onPick: (e) =>
                                                ei
                                                    ? w((t) => {
                                                          var n, l;
                                                          let r;
                                                          return {
                                                              ...t,
                                                              [Y.id]:
                                                                  ((n = t[Y.id] ?? lT),
                                                                  (l = e.id),
                                                                  (r = n.includes(l)
                                                                      ? n.filter((e) => e !== l)
                                                                      : [...n, l]),
                                                                  Y.options
                                                                      .filter((e) => r.includes(e.id))
                                                                      .map((e) => e.id)),
                                                          };
                                                      })
                                                    : eI(e),
                                            own: eF,
                                        }),
                                        null != Y.input
                                            ? (0, a.jsx)(lv, {
                                                  projectId: n,
                                                  question: Y,
                                                  value: eR,
                                                  disabled: X,
                                                  onChange: e$,
                                                  onFocus: eD,
                                                  onBlur: eq,
                                                  fallback: nL(Y) ? null : e1,
                                              })
                                            : null,
                                        null != eT ? (0, a.jsx)(nZ, { link: eT, disabled: X }) : null,
                                        null != Y.note
                                            ? (0, a.jsx)(v.E, {
                                                  tag: "div",
                                                  variant: "body-xs/normal",
                                                  color: "text-muted",
                                                  className: lc.aK,
                                                  children: Y.note,
                                              })
                                            : null,
                                        nL(Y) ? e1 : null,
                                        !0 === Y.upload
                                            ? (0, a.jsx)("div", {
                                                  className: lc.$0,
                                                  children: (0, a.jsx)(nK.Q, {
                                                      variant: "secondary",
                                                      textVariant: "body-sm/medium",
                                                      text: P.intl.string(T.default.zxSq2q),
                                                      disabled: X,
                                                      onClick: eE,
                                                      "data-conjure-no-image": !0,
                                                  }),
                                              })
                                            : null,
                                    ],
                                }),
                                null == q
                                    ? null
                                    : (0, a.jsx)(
                                          lL,
                                          {
                                              projectId: n,
                                              question: q.question,
                                              draft: q.draft,
                                              selected: q.selected,
                                              ownImage: q.ownImage,
                                              ownSelected: q.ownSelected,
                                              direction: q.direction,
                                              disabled: X,
                                          },
                                          q.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            Q > 1 || ei || es || null != Y.input || null != m || !0 === Y.optional || nP(Y)
                ? (0, a.jsxs)("div", {
                      className: nC.qr,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "body-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  Q > 1
                                      ? P.intl.formatToPlainString(T.default.yzYUjq, { index: Z + 1, total: Q })
                                      : null,
                          }),
                          (0, a.jsxs)("div", {
                              className: nC.zt,
                              children: [
                                  eS
                                      ? (0, a.jsx)(nK.Q, {
                                            variant: "secondary",
                                            textVariant: "body-sm/medium",
                                            text: h ?? P.intl.string(T.default.Pk5lfA),
                                            onClick: eC ?? eA,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  g
                                      ? null
                                      : (0, a.jsx)(d.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: eY
                                                ? (u ?? P.intl.string(P.t.geKm7t))
                                                : P.intl.string(eQ ? T.default.ZcrbKz : T.default.w1nRmT),
                                            disabled: !eZ,
                                            onClick: eJ,
                                            "data-conjure-clarification-next": !0,
                                            "data-submits": eY ? "true" : void 0,
                                        }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var lD = n(71637),
    lq = n(77135);
let lF = { guildId: null, channelId: null };
function lO(e) {
    let { projectId: t } = e,
        n = (0, Q.Ay)(t),
        l = n?.sourceApplicationId ?? null,
        r = i.useMemo(
            () =>
                null == l ? void 0 : { text: P.intl.string(T.default.Zlbwxc), onClick: () => (0, lq.default)(l, lF) },
            [l],
        );
    return null == n
        ? null
        : (0, a.jsx)(tW.w, { type: "info", role: "none", message: P.intl.format(T.default.PTo2Qf, {}), action: r });
}
var lG = n(557744),
    lz = n(223347),
    lU = n(894443),
    lB = n(525530),
    lK = n(564963),
    lH = n(530557),
    lV = n(431527),
    lW = n(628284);
let lX = new Set(["select", "channel", "role", "user"]);
function lQ(e, t) {
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
function lZ(e, t) {
    let n = e.keys ?? [];
    return n.length > 0 ? n : t.schema.map((e) => e.key);
}
var lY = n(914250),
    lJ = n(202723);
function l0(e) {
    let { projectId: t, cardId: l, request: r, status: s, awaiting: u, onDismiss: c } = e,
        m = i.useCallback(() => {
            (0, H.mM)(async () => {
                let { default: e } = await Promise.all([n.e(291953), n.e(197826)]).then(n.bind(n, 644441));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        f = i.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: lH.KeyIcon })), [r.fields]),
        h = (0, lK.bB)(l, s),
        g = o()(lJ.Lo, { [lJ.jY]: h });
    if ("superseded" === s)
        return (0, a.jsx)(
            "article",
            {
                className: g,
                children: (0, a.jsx)(v.E, {
                    variant: "body-xs/semibold",
                    color: "text-muted",
                    tag: "span",
                    children: P.intl.string(T.default.CTxtdV),
                }),
            },
            s,
        );
    if ("inactive" === s)
        return (0, a.jsxs)(
            "article",
            {
                className: g,
                children: [
                    (0, a.jsx)(v.E, {
                        variant: "body-xs/semibold",
                        color: "text-muted",
                        tag: "span",
                        children: P.intl.string(T.default.HCQvpO),
                    }),
                    (0, a.jsx)(lV.C, { label: P.intl.string(T.default.HCQvpO), size: "xs", items: f }),
                ],
            },
            s,
        );
    if ("pending" === s)
        return (0, a.jsx)(
            "article",
            {
                className: lJ.Lo,
                children: (0, a.jsx)(lV.C, { label: P.intl.string(T.default.HCQvpO), size: "xs", items: f }),
            },
            s,
        );
    if ("received" === s)
        return (0, a.jsxs)(
            "article",
            {
                className: g,
                children: [
                    (0, a.jsxs)("div", {
                        className: lJ.$h,
                        children: [
                            (0, a.jsx)("span", {
                                className: lJ.c9,
                                "aria-hidden": !0,
                                children: (0, a.jsx)(lW.CircleCheckIcon, {
                                    size: "xs",
                                    color: tx.A.colors.ICON_FEEDBACK_POSITIVE,
                                }),
                            }),
                            (0, a.jsx)(v.E, {
                                variant: "body-xs/semibold",
                                color: "text-feedback-positive",
                                tag: "span",
                                children: P.intl.string(T.default.sfp7Up),
                            }),
                        ],
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: r.fields
                            .map((e) => e.label)
                            .map((e) =>
                                P.intl.formatToPlainString(T.default["Z+FC3j"], {
                                    label: e,
                                    value: P.intl.string(T.default.CJq1rY),
                                }),
                            )
                            .join(" \xb7 "),
                    }),
                ],
            },
            s,
        );
    let p = null != r.note && "" !== r.note ? r.note : P.intl.string(T.default.MPGSHL),
        x = (0, a.jsx)(d.$, { variant: "primary", size: "sm", onClick: m, text: P.intl.string(T.default.EK8tKY) });
    return null != c
        ? (0, a.jsxs)("section", {
              className: o()(nC.nd, lJ.fw),
              "aria-label": P.intl.string(T.default.O0QIqj),
              children: [
                  (0, a.jsxs)("div", {
                      className: nC.wx,
                      children: [
                          (0, a.jsx)(lH.KeyIcon, { size: "xs", color: tx.A.colors.TEXT_BRAND, "aria-hidden": !0 }),
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "body-sm/semibold",
                              color: "text-brand",
                              className: nC.TK,
                              children: P.intl.string(T.default.O0QIqj),
                          }),
                          (0, a.jsx)(t1.D, {
                              className: o()(nC.gb, nC.Q7),
                              onClick: c,
                              "aria-label": P.intl.string(T.default.Hl7rif),
                              children: (0, a.jsx)(e3.XSmallIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                      ],
                  }),
                  (0, a.jsxs)("div", {
                      className: lJ.DQ,
                      children: [
                          (0, a.jsx)(lY.A, { text: p, variant: "body-sm/normal", color: "text-default" }),
                          (0, a.jsx)(lV.C, { label: P.intl.string(T.default.HCQvpO), size: "xs", items: f }),
                      ],
                  }),
                  (0, a.jsxs)("div", {
                      className: nC.qr,
                      children: [
                          (0, a.jsx)(v.E, {
                              variant: "body-xs/normal",
                              color: "text-muted",
                              className: lJ.xE,
                              children: P.intl.string(T.default["2OdXdn"]),
                          }),
                          (0, a.jsx)("div", { className: nC.zt, children: x }),
                      ],
                  }),
              ],
          })
        : (0, a.jsxs)("article", {
              className: lJ.Lo,
              children: [
                  (0, a.jsx)(v.E, {
                      variant: "body-xs/semibold",
                      color: null != u ? "text-brand" : "text-muted",
                      tag: "span",
                      children: P.intl.string(null != u ? T.default.O0QIqj : T.default.HCQvpO),
                  }),
                  (0, a.jsx)(lY.A, { text: p, variant: "body-sm/normal", color: "text-default" }),
                  (0, a.jsx)(lV.C, { label: P.intl.string(T.default.HCQvpO), size: "xs", items: f }),
                  (0, a.jsx)("div", { className: lJ.sq, children: x }),
              ],
          });
}
var l1 = n(442331),
    l2 = n(513425);
let l3 = new Set(),
    l4 = new Set();
function l5(e) {
    return (
        l4.add(e),
        () => {
            l4.delete(e);
        }
    );
}
function l7() {
    return i.useSyncExternalStore(l5, () => l3);
}
function l8(e) {
    let t = new Set(),
        n = new Set(),
        l = !1,
        r = !1;
    for (let a = e.length - 1; a >= 0; a--) {
        let i = e[a];
        if (null == i || "assistant" !== i.role || null == i.settingsRequest || !(0, tY.BL)(i)) continue;
        let s = i.settingsRequest.keys ?? [];
        for (let e of ((r || (0 === s.length ? l : s.some((e) => n.has(e)))) && t.add(i.id), s)) n.add(e);
        ((l = !0), (r = r || 0 === s.length));
    }
    return t;
}
function l9(e, t, n) {
    if (!n || null == t) return !1;
    let l = lZ(e, t);
    return l.length > 0 && !lQ({ keys: l }, t);
}
var l6 = n(782973),
    re = n(290713),
    rt = n(411236);
function rn(e) {
    let { projectId: t, request: n, askId: l, onDismiss: r, notifyAgent: s = !0 } = e,
        {
            done: u,
            superseded: m,
            summary: f,
            markSaved: h,
        } = (function (e, t, n) {
            let l = l7(),
                [r, a] = i.useState(!1),
                s = null != n ? l.has(n) : r,
                u = i.useCallback(() => {
                    if (null != n) {
                        if (!l3.has(n)) for (let e of ((l3 = new Set([...l3, n])), l4)) e();
                    } else a(!0);
                }, [n]),
                o = (0, c.bG)([l1.A], () => l9(t, l1.A.getSettings(e), s), [e, t, s]);
            return {
                done: o,
                superseded: (0, c.bG)([l2.A], () => null != n && l8(l2.A.getMessages(e)).has(n), [e, n]),
                summary: (0, c.yK)(
                    [l1.A, nE.A],
                    () => {
                        var n;
                        let l = l1.A.getSettings(e);
                        return null == l
                            ? []
                            : ((n = (e) => nE.A.getChannel(e)?.name ?? null),
                              lZ(t, l).flatMap((e) => {
                                  let t = l.schema.find((t) => t.key === e);
                                  if (null == t) return [];
                                  let r = "secret" === t.type || l.values[e];
                                  return [
                                      {
                                          key: e,
                                          text: P.intl.formatToPlainString(T.default["Z+FC3j"], {
                                              label: t.label,
                                              value: (function (e, t, n) {
                                                  let l = Array.isArray(t) ? t.map(String) : [String(t)];
                                                  switch (e.type) {
                                                      case "secret":
                                                          return P.intl.string(T.default.CJq1rY);
                                                      case "checkbox":
                                                          return P.intl.string(
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
                                                                      : P.intl.string(T.default.Fw9G9A);
                                                              })
                                                              .join(", ");
                                                      case "game":
                                                          return 0 === l.length
                                                              ? P.intl.string(T.default.nEv677)
                                                              : P.intl.string(T.default.Fw9G9A);
                                                      case "role":
                                                      case "user":
                                                          return P.intl.string(T.default.Fw9G9A);
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
        return (0, a.jsx)("article", {
            className: rt.Mk,
            children: (0, a.jsx)(v.E, {
                variant: "body-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: P.intl.string(T.default["+uXDk+"]),
            }),
        });
    if (g)
        return (0, a.jsxs)("article", {
            className: rt.Mk,
            children: [
                (0, a.jsxs)("div", {
                    className: rt.Ol,
                    children: [
                        (0, a.jsx)(lW.CircleCheckIcon, {
                            size: "xs",
                            color: tx.A.colors.ICON_FEEDBACK_POSITIVE,
                            "aria-hidden": !0,
                        }),
                        (0, a.jsx)(v.E, {
                            variant: "body-xs/semibold",
                            color: "text-feedback-positive",
                            tag: "span",
                            children: P.intl.string(T.default.AxBLLy),
                        }),
                    ],
                }),
                f.length > 0
                    ? (0, a.jsx)(v.E, {
                          variant: "body-sm/normal",
                          color: "text-default",
                          selectable: !0,
                          children: f.join(" \xb7 "),
                      })
                    : null,
            ],
        });
    let p = n.keys?.length === 1 && n.keys[0] === l6.B,
        x = null != n.note && "" !== n.note ? n.note : p ? null : P.intl.string(T.default.XuOf5s);
    return (0, a.jsx)(re.A, {
        projectId: t,
        scopeKeys: n.keys,
        notifyAgent: s,
        onSaved: h,
        isPreview: !0,
        children: (e) => {
            let { fields: t, canSave: n, saving: l, submit: i } = e;
            async function s(e) {
                (e.preventDefault(), await i());
            }
            let u = (0, a.jsx)(d.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: l,
                disabled: !n,
                text: P.intl.string(T.default.A7dQd9),
            });
            return null == r
                ? (0, a.jsxs)("form", {
                      className: rt.Mk,
                      onSubmit: s,
                      children: [
                          (0, a.jsx)(v.E, {
                              variant: "body-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: P.intl.string(T.default["jZjP+I"]),
                          }),
                          null != x
                              ? (0, a.jsx)(lY.A, { text: x, variant: "body-sm/normal", color: "text-default" })
                              : null,
                          t,
                          (0, a.jsx)("div", { className: rt.p0, children: u }),
                      ],
                  })
                : (0, a.jsxs)("form", {
                      className: o()(nC.nd, nC.jx),
                      "aria-label": P.intl.string(T.default["jZjP+I"]),
                      onSubmit: s,
                      children: [
                          (0, a.jsxs)("div", {
                              className: nC.wx,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      tag: "span",
                                      variant: "body-sm/medium",
                                      color: "text-subtle",
                                      className: nC.TK,
                                      children: P.intl.string(T.default["jZjP+I"]),
                                  }),
                                  (0, a.jsx)(t1.D, {
                                      className: o()(nC.gb, nC.Q7),
                                      onClick: r,
                                      "aria-label": P.intl.string(T.default["iq+Pte"]),
                                      children: (0, a.jsx)(e3.XSmallIcon, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: rt.DQ,
                              children: [
                                  null != x
                                      ? (0, a.jsx)(lY.A, { text: x, variant: "body-sm/normal", color: "text-default" })
                                      : null,
                                  t,
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: nC.qr,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "body-xs/normal",
                                      color: "text-muted",
                                      className: rt.xE,
                                      children: P.intl.string(T.default["1w0jMk"]),
                                  }),
                                  (0, a.jsxs)("div", {
                                      className: nC.zt,
                                      children: [
                                          (0, a.jsx)(d.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              onClick: r,
                                              text: P.intl.string(T.default["9J3OG8"]),
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
var rl = n(975571),
    rr = n(427123);
let ra = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
var ri = n(874421),
    rs = n(932111),
    ru = n(940874),
    ro = n(404373),
    rc = n(89222);
function rd(e) {
    return "" !== rc.A.getDraft(e).trim();
}
var rm = n(29080);
function rf(e) {
    var t;
    let n,
        l,
        { steps: r, content: a, hasProposal: i, hasLiveClarification: s = !1, hasAttachments: u } = e,
        o = (0, tZ.B4)(r),
        c = o.filter((e) => "message" === e.type).at(-1),
        d =
            !i &&
            null != c &&
            ((t = c.content),
            (n = t.trim()),
            (l = a.trim()),
            "" !== n && "" !== l && (n === l || (t.length >= 16e3 && l.startsWith(n))))
                ? c
                : null,
        m = o.filter((e) => e !== d),
        f = m.filter((e) => "message" === e.type).at(-1),
        h = !i && !s && "" !== a.trim();
    return {
        streamed: m,
        lastStreamedMessage: f,
        replyKey: d?.key,
        showsClosingMessage: h,
        closingContent: h ? a.trim() : "",
        attachmentsHost: (function (e) {
            let { hasAttachments: t, showsClosingMessage: n, endsOnStreamedMessage: l } = e;
            return t ? (n ? "closing" : l ? "streamed" : "standalone") : "none";
        })({ hasAttachments: u, showsClosingMessage: h, endsOnStreamedMessage: (0, tZ.Lf)(r) }),
    };
}
var rh = n(62617),
    rg = n(182368);
let rp = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    rx = {
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
    rv = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    u = i.useMemo(
                        () => (0, rh.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    className: (0, rh.Z)(),
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
                    u = i.useMemo(
                        () => (0, rh.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    className: (0, rh.Z)(),
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
                    u = i.useMemo(
                        () => (0, rh.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    className: (0, rh.Z)(),
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
                    u = i.useMemo(
                        () => (0, rh.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    className: (0, rh.Z)(),
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
                    u = i.useMemo(
                        () => (0, rh.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    className: (0, rh.Z)(),
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
                    u = i.useMemo(
                        () => (0, rh.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    className: (0, rh.Z)(),
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
                    u = i.useMemo(
                        () => (0, rh.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    className: (0, rh.Z)(),
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
                    u = i.useMemo(
                        () => (0, rh.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    className: (0, rh.Z)(),
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
                    u = i.useMemo(
                        () => (0, rh.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    className: (0, rh.Z)(),
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
                    u = i.useMemo(
                        () => (0, rh.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    className: (0, rh.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        bot: { Illocon: rg.u, tint: "var(--illo-purple-40)" },
    };
function rj(e) {
    return { ...rv[e], name: P.intl.string(rx[e]()) };
}
function rb(e) {
    return rp.includes(e) ? rj(e) : void 0;
}
function ry(e) {
    let t = new Map();
    for (let [n, l] of (function (e) {
        let t = 0,
            n = e[0] ?? "";
        for (let e = 0; e < n.length; e++) t = (31 * t + n.charCodeAt(e)) % rp.length;
        let l = new Map();
        return (
            e.forEach((e, n) => {
                l.set(e, rp[(t + n) % rp.length]);
            }),
            l
        );
    })(e))
        t.set(n, rj(l));
    return t;
}
var rk = n(615839);
function rw(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : P.intl.string(T.default.KcFvbo);
}
var rA = n(60160),
    rC = n(101147);
function rS(e) {
    let t = (0, tZ.SY)(e.steps);
    return null != t ? (0, tZ.WQ)(t) : rw(e.task);
}
function rN(e) {
    let t = ry(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? rb(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: rw(e.task),
                      todoId: e.task.todoId,
                      line: rS(e),
                  },
              ];
    });
}
function rI(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: i, connectsDown: s } = e,
        u = n.task,
        o = "running" === u.status,
        c = (0, tZ.SY)(n.steps),
        d = o
            ? rS(n)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(rw(e));
                  switch (e.status) {
                      case "failed":
                          return P.intl.formatToPlainString(T.default.YrVgOf, { task: t });
                      case "cancelled":
                          return P.intl.formatToPlainString(T.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.resultText && "" !== e.resultText) return e.resultText;
                          if (null != e.durationMs)
                              return P.intl.formatToPlainString(T.default["++9woZ"], {
                                  task: t,
                                  duration: (0, rk.MB)(e.durationMs),
                              });
                          return P.intl.formatToPlainString(T.default.nmI9Uh, { task: t });
                      default:
                          return P.intl.formatToPlainString(T.default.nmI9Uh, { task: t });
                  }
              })(u),
        m = o ? c : void 0,
        f =
            u.detail.length > 0 ||
            n.steps.some((e) => {
                var t;
                return e !== m || (t = e).detail.length > 0 || t.screenshots.length > 0 || t.attachments.length > 0;
            })
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          n.steps.length > 0
                              ? (0, a.jsx)("ol", {
                                    className: no.dO,
                                    children: n.steps.map((e) =>
                                        (0, a.jsx)(
                                            rC.A,
                                            { projectId: t, node: e, presentation: "detail", active: o && e === c },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          u.detail.map((e, t) =>
                              (0, a.jsx)(
                                  "div",
                                  {
                                      className: no.iq,
                                      children: (0, a.jsx)(rA.A, { text: e, variant: "body-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, a.jsx)(t3.A, {
        glyph: (0, a.jsx)(t4.u, {
            asset: (0, a.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: rw(u),
            position: "left",
            children: (0, a.jsx)("span", {
                className: no.nC,
                children: (0, a.jsx)(l, { size: 24, alt: "", ariaHidden: !0 }),
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
var rE = n(998445),
    r_ = n(643210),
    rM = n(648127),
    rR = n(372795),
    rT = n(163897);
let rP = "conjure-browser-viewer";
function rL(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, c.yK)(
            [r_.A],
            () =>
                n.flatMap((e) => {
                    let n = r_.A.getTab(t, e);
                    return null == n ? [] : [n];
                }),
            [t, n],
        );
    if (0 === l.length) return null;
    let r = l.map((e) => {
        let { session: t } = e;
        return t.id;
    });
    return (0, a.jsx)("ul", {
        className: rT.kR,
        "aria-label": P.intl.string(T.default.Uvkr1G),
        children: l.map((e) =>
            (0, a.jsx)("li", { children: (0, a.jsx)(r$, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function r$(e) {
    let { projectId: t, tab: l, sessionIds: r } = e,
        [s, u] = (function () {
            let [e, t] = i.useState(null),
                [n, l] = i.useState(!1);
            return (
                i.useEffect(() => {
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
        c = (0, H.Ry)(rP),
        [d, m] = i.useState(!1),
        f = i.useCallback((e, t) => m(t), []),
        { ended: h } = l,
        g = (0, rM.i)(l.session);
    return (0, a.jsxs)(t1.D, {
        innerRef: s,
        className: o()(rT.Nr, h && rT.Xj),
        onClick: () => {
            var e;
            return (
                (e = l.session.id),
                void (0, H.mM)(
                    async () => {
                        let { default: l } = await Promise.all([
                            n.e(409495),
                            n.e(513843),
                            n.e(501962),
                            n.e(531527),
                        ]).then(n.bind(n, 273594));
                        return (n) => (0, a.jsx)(l, { ...n, projectId: t, sessionId: e, sessionIds: r });
                    },
                    { modalKey: rP },
                )
            );
        },
        "aria-label": P.intl.formatToPlainString(T.default.G3a822, { title: g }),
        children: [
            (0, a.jsxs)("div", {
                className: rT.Gt,
                children: [
                    (0, a.jsx)(rR.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !u || c || h,
                        className: rT.Ji,
                        "aria-label": P.intl.formatToPlainString(T.default.rnwqXb, { name: g }),
                        onStateChange: f,
                    }),
                    d
                        ? null
                        : (0, a.jsx)("div", {
                              className: rT.qf,
                              children: (0, a.jsx)(rE.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    h
                        ? (0, a.jsx)("div", {
                              className: rT.HS,
                              children: (0, a.jsx)(v.E, {
                                  variant: "body-xs/medium",
                                  color: "text-strong",
                                  children: P.intl.string(T.default.ocRH08),
                              }),
                          })
                        : null,
                ],
            }),
            (0, a.jsxs)("span", {
                className: rT.pG,
                children: [
                    (0, a.jsx)("span", { className: o()(rT.W9, h && rT.oM) }),
                    (0, a.jsx)(v.E, {
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
var rD = n(268409);
let rq = new WeakMap(),
    rF = new WeakMap();
function rO(e) {
    let { projectId: t, steps: n, tree: l, segment: r } = e,
        s = i.useMemo(
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
            [l2.A],
            () => {
                if (0 === s.length) return s;
                let e = (function (e) {
                    let t = rq.get(e);
                    if (null != t) return t;
                    let n = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = rF.get(e);
                            if (null == t) {
                                let n = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) n.push(e);
                                ((t = n), rF.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            n.set(e, t.steps);
                    return (rq.set(e, n), n);
                })(l2.A.getMessages(t));
                return s.filter((t) => e.get(t) === n);
            },
            [s, t, n],
        );
    return 0 === u.length
        ? null
        : (0, a.jsx)("li", { className: rD.h, children: (0, a.jsx)(rL, { projectId: t, sessionIds: u }) });
}
var rG = n(469393);
function rz(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, V.lG)(t.authored_at);
    return (0, a.jsx)(t9, {
        title: P.intl.string(T.default["t+b0rz"]),
        children: (0, a.jsxs)("div", {
            className: rG.r,
            children: [
                (0, a.jsxs)("div", {
                    className: rG.z,
                    children: [
                        (0, a.jsx)(v.E, { variant: "body-md/medium", children: t.subject }),
                        null != l.relative
                            ? (0, a.jsx)(v.E, {
                                  variant: "body-sm/normal",
                                  color: "text-muted",
                                  title: l.absolute ?? void 0,
                                  children: l.relative,
                              })
                            : null,
                    ],
                }),
                null != n
                    ? (0, a.jsx)(d.$, {
                          variant: "secondary",
                          size: "sm",
                          text: P.intl.string(T.default.H8Jfhu),
                          onClick: n,
                      })
                    : null,
            ],
        }),
    });
}
var rU = n(493490),
    rB = n(17742);
let rK = [];
function rH(e) {
    let t = (0, c.bG)([rU.A], () => (null != e ? rU.A.getCaptures(e) : rK)),
        n = (0, c.bG)([rU.A], () => (null != e ? rU.A.getSelectedCapture(e) : null)),
        [l, r] = i.useState(null),
        a = null != n ? `${n.id}:${n.image_etag}` : null;
    return (
        i.useEffect(() => {
            if (null == e || null == n || null == a) return;
            let t = !1;
            return (
                (async () => {
                    try {
                        let l = await (0, rB._F)(e, n);
                        t || r({ key: a, url: l });
                    } catch {}
                })(),
                () => {
                    t = !0;
                }
            );
        }, [e, n, a]),
        { captures: t, selected: n, src: null != l && l.key === a ? l.url : null }
    );
}
var rV = n(714917),
    rW = n(463660),
    rX = n(970211);
function rQ(e) {
    let { projectId: t, gameCaptures: n = !1 } = e,
        {
            src: l,
            blurred: r,
            handleError: s,
        } = (function (e, t) {
            let n = (0, c.bG)([rV.A], () => (null != e ? rV.A.getBackground(e) : null)),
                l = n?.imageEtag ?? null,
                [r, a] = i.useState(null),
                [s, u] = i.useState(null),
                [o, d] = i.useState(!1);
            (i.useEffect(() => {
                if (null != n) return;
                let e = setTimeout(() => d(!0), 2e3);
                return () => clearTimeout(e);
            }, [n]),
                i.useEffect(() => {
                    if (null == e || null == l) return;
                    let n = !1;
                    return (
                        !(async function (e, l) {
                            let r;
                            try {
                                r = await (0, rW.Mg)(e, l);
                            } catch {
                                r = t;
                            }
                            n || a(r);
                        })(e, l),
                        () => {
                            n = !0;
                        }
                    );
                }, [e, l, t]));
            let m = null != l ? r : null,
                f = null == l || (null != m && m === s) ? t : m,
                h = i.useCallback(() => {
                    f === m && u(m);
                }, [f, m]);
            return { src: null == e || null != n || o ? f : null, blurred: n?.blur !== !1, handleError: h };
        })(t, "/assets/7cec34541705c795.webp"),
        u = rH(n ? t : null);
    return null != u.selected
        ? null != u.src
            ? (0, a.jsx)("img", { className: rX.F1, src: u.src, alt: "", "aria-hidden": !0 })
            : null
        : null == l
          ? null
          : (0, a.jsx)("img", {
                className: o()(rX.LO, { [rX.Ty]: r }),
                src: l,
                alt: "",
                "aria-hidden": !0,
                onError: s,
            });
}
var rZ = n(155718);
function rY(e, t) {
    return e.supported_surfaces?.includes(t) === !0;
}
let rJ = ["command", "user_command", "message_command", "message"],
    r0 = new Set([rZ.kc.CHAT, rZ.kc.USER, rZ.kc.MESSAGE]);
function r1(e) {
    return e.type ?? rZ.kc.CHAT;
}
function r2(e) {
    return r0.has(r1(e));
}
function r3(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function r4(e, t) {
    let n = rJ.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !r3(e)), ...n.filter(r3)].slice(0, 3);
    for (let r of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(r) || r3(r) || l.push(r);
    }
    return rJ.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
function r5(e, t, n) {
    let l = e.bot?.example_exchanges ?? [],
        r = { kind: "event", user: "", bot: n.event };
    if ("events" === t) {
        let e = l.slice(0, 3).map((e) => {
            let { bot: t } = e;
            return "" !== t.trim() ? { ...r, bot: t } : r;
        });
        return e.length > 0 ? e : [r];
    }
    let a = l.flatMap((e) => {
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
        i = { kind: "message", user: n.message, bot: n.reply };
    if ("messages" === t && 0 === a.length) return [i];
    let s = e.commands.filter(r2).map((e) =>
            (function (e, t) {
                let n = e.description?.trim() ?? "",
                    l = "" !== n ? n : t.reply;
                switch (r1(e)) {
                    case rZ.kc.USER:
                        return { kind: "user_command", user: e.name, bot: l };
                    case rZ.kc.MESSAGE:
                        return { kind: "message_command", user: e.name, bot: l };
                    default:
                        return { kind: "command", user: `/${e.name}`, bot: l };
                }
            })(e, n),
        ),
        u = "messages" === t ? [] : s.filter(r3),
        o = a.length > 0 ? r4([...a, ...u], !0) : r4("both" === t ? [...s, i] : s, !1);
    return o.length > 0 ? o : [r];
}
var r7 = n(377941),
    r8 = n.n(r7);
function r9(e) {
    let t = e.split("_").join(" ").toLowerCase();
    return 0 === t.length ? t : t[0].toUpperCase() + t.slice(1);
}
function r6(e) {
    return e.type === rZ.kc.PRIMARY_ENTRY_POINT
        ? "\u21EA /"
        : e.type === rZ.kc.USER || e.type === rZ.kc.MESSAGE
          ? ""
          : "/";
}
let ae = {
        [en.q7.APP_CHANNEL]: T.default["3/aHX6"],
        [en.q7.VOICE_CHANNEL]: T.default["3/aHX6"],
        [en.q7.ACTIVITY]: T.default["3/aHX6"],
        [en.q7.OVERLAY]: T.default["rPpf5/"],
        [en.q7.PROFILE_WIDGET]: null,
        [en.q7.AUTOMOD]: null,
        [en.q7.BOT]: null,
        [en.q7.APPLICATION_COMMANDS]: null,
    },
    at = [en.q7.ACTIVITY, en.q7.APP_CHANNEL, en.q7.VOICE_CHANNEL, en.q7.OVERLAY];
function an(e) {
    return at.find((t) => rY(e, t)) ?? null;
}
let al = 1920 / 1018;
function ar(e, t) {
    return `${Number(((e / t) * 100).toFixed(3))}%`;
}
let aa = ar(24, 1018),
    ai = ar(24, 1920);
function as(e) {
    return null != e.overlay_design_image
        ? e.overlay_design_image
        : e.design_image?.name === "overlay-design-v2.png"
          ? e.design_image
          : null;
}
var au = n(90947),
    ao = (((l = {}).IMAGE = "image"), l),
    ac = (((r = {}).PRIVATE = "private"), (r.PUBLIC = "public"), r),
    ad = n(598748),
    am = n(773669);
let af = [],
    ah = {},
    ag = {};
function ap(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function ax(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: ao.IMAGE,
        visibility: ac.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var av = n(127258),
    aj = n(803306),
    ab = n(587895),
    ay = n(432005),
    ak = n(963852),
    aw = n(95701),
    aA = n(619019),
    aC = n(427262);
let aS = new aw.nA({ id: "1337", guild_id: "1337", type: eb.rbe.GUILD_TEXT, name: "preview" });
function aN(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = (0, c.bG)([nM.default], () => nM.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            r && a?.username !== t && (0, aj.nj)(new aA.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, a, e, t, l, n]),
        a
    );
}
let aI = /^@\S+/;
var aE = n(775602);
let a_ = [T.default["3eTjcV"], T.default.l3j5nS];
var aM = n(97808),
    aR = n(778712),
    aT = n(486020),
    aP = n(46054),
    aL = n(200700);
let a$ = {
        alert: { label: () => P.intl.string(T.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => P.intl.string(T.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => P.intl.string(T.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => P.intl.string(T.default.RGzFNK), blockedStyle: !1 },
    },
    aD = {
        blocked: { label: () => P.intl.string(T.default.YdnZ8q), tone: "red" },
        alert: { label: () => P.intl.string(T.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => P.intl.string(T.default.RGzFNK), tone: "green" },
    },
    aq = ["blocked", "alert", "allowed"],
    aF = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
function aO(e) {
    var t, n;
    let l,
        r = [
            "timeout" !== (t = e).outcome || null == t.timeout_seconds
                ? null
                : P.intl.formatToPlainString(P.t["3LYql6"], {
                      duration:
                          ((n = t.timeout_seconds),
                          null != (l = (0, aL.getFriendlyDurationString)(n))
                              ? l
                              : n % 604800 == 0
                                ? P.intl.formatToPlainString(P.t.EmoBD2, { weeks: n / 604800 })
                                : n % 86400 == 0
                                  ? P.intl.formatToPlainString(P.t["k2UNz+"], { days: n / 86400 })
                                  : n % 3600 == 0
                                    ? P.intl.formatToPlainString(P.t.xCjYxK, { hours: n / 3600 })
                                    : n % 60 == 0
                                      ? P.intl.formatToPlainString(P.t.opVZ9q, { mins: n / 60 })
                                      : P.intl.formatToPlainString(P.t["4zv/jq"], { secs: n })),
                  }),
            e.reason,
        ]
            .filter((e) => null != e && "" !== e)
            .join(" ");
    return "" === r ? null : r;
}
var aG = n(984097),
    az = n(13673);
let aU = { blurple: "text-brand", red: "text-feedback-critical", green: "text-feedback-positive" };
function aB(e) {
    let { example: t } = e,
        n = aO(t);
    return null == n
        ? null
        : (0, a.jsx)(v.E, {
              variant: "body-xs/normal",
              color: "text-muted",
              lineClamp: 2,
              selectable: !0,
              children: n,
          });
}
let aK = ["glazedgamer", "sprinkles", "donutking"];
function aH(e) {
    var t;
    let { example: n, username: l, showReason: r } = e,
        { label: i, blockedStyle: s } = a$[n.outcome];
    return (0, a.jsxs)("li", {
        className: o()(aG.nM, { [o()(aG.HV, az.DX)]: s }),
        children: [
            (0, a.jsx)(t5.A, { children: `${i()}: ` }),
            (0, a.jsx)("span", {
                className: aG.my,
                children: (0, a.jsx)(aM.eu, {
                    src: (0, aT.AE)(void 0, void 0),
                    size: aR._3.SIZE_24,
                    "aria-label": P.intl.string(T.default["1yI0xV"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: aG.fw,
                children: [
                    (0, a.jsx)(v.E, { variant: "body-sm/semibold", color: "text-strong", children: l }),
                    (0, a.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), aP.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    r ? (0, a.jsx)(aB, { example: n }) : null,
                ],
            }),
        ],
    });
}
function aV(e) {
    let { group: t, firstIndex: n } = e,
        l = i.useId(),
        r = aD[t.section],
        s = new Set(t.examples.map(aO)),
        u = 1 === s.size ? t.examples.map(aO)[0] : null;
    return (0, a.jsxs)("div", {
        className: aG.UO,
        children: [
            (0, a.jsxs)("div", {
                className: aG.RZ,
                children: [
                    (0, a.jsx)(v.E, {
                        id: l,
                        variant: "body-xs/semibold",
                        color: aU[r.tone],
                        tag: "span",
                        children: r.label(),
                    }),
                    null != u
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "body-xs/semibold",
                                      color: "text-muted",
                                      tag: "span",
                                      className: aG.IQ,
                                      "aria-hidden": !0,
                                      children: "\xb7",
                                  }),
                                  (0, a.jsx)(v.E, {
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
            (0, a.jsx)("ul", {
                className: aG.m7,
                "aria-labelledby": l,
                children: t.examples.map((e, t) =>
                    (0, a.jsx)(aH, { example: e, username: aK[(n + t) % aK.length], showReason: s.size > 1 }, t),
                ),
            }),
        ],
    });
}
function aW(e) {
    var t;
    let { automod: n } = e,
        l =
            ((t = n.examples),
            aq
                .map((e) => ({ section: e, examples: t.filter((t) => aF[t.outcome] === e) }))
                .filter((e) => e.examples.length > 0)),
        r = n.rule_name.trim();
    return (0, a.jsxs)("div", {
        className: aG.Nr,
        children: [
            "" !== r
                ? (0, a.jsx)("div", {
                      className: aG.hk,
                      children: (0, a.jsx)(v.E, {
                          variant: "body-sm/normal",
                          color: "text-default",
                          lineClamp: 1,
                          children: r,
                      }),
                  })
                : null,
            l.map((e, t) =>
                (0, a.jsx)(
                    aV,
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
var aX = n(276293),
    aQ = n(460905),
    aZ = n(110384),
    aY = n(365199),
    aJ = n(633018),
    a0 = n(763754),
    a1 = n(267508),
    a2 = n(194085),
    a3 = n(20851),
    a4 = n(692508),
    a5 = n(798819);
function a7(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, a.jsxs)("div", {
        className: o()(a5.item, a5.labelContainer, a5.colorDefault, {
            [a5.focused]: !0 === t.highlighted,
            [a5.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, a.jsx)("div", {
                      className: a5.iconContainerLeft,
                      children: (0, a.jsx)(n, { color: "currentColor", className: a5.icon }),
                  })
                : null,
            (0, a.jsx)("div", { className: o()(a5.label, a4.Gy), children: t.label }),
            null != l
                ? (0, a.jsx)("div", {
                      className: a5.iconContainer,
                      children: (0, a.jsx)(l, { color: "currentColor", className: a5.icon }),
                  })
                : null,
        ],
    });
}
function a8(e) {
    let { target: t, commandName: n, appIconSrc: l } = e,
        r = i.useMemo(
            () =>
                null != l
                    ? (e) => {
                          let { className: t } = e;
                          return (0, a.jsx)("img", { src: l, alt: "", className: o()(t, a4.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: P.intl.string(P.t["5IEsGx"]), icon: aZ.ArrowAngleLeftUpIcon, muted: !0 }
                : { label: P.intl.string(P.t.LYju5J), muted: !0 };
    return (0, a.jsx)("div", {
        className: o()(a5.menu, a4.MK),
        "aria-hidden": !0,
        children: (0, a.jsxs)("div", {
            className: a5.scroller,
            children: [
                (0, a.jsx)(a7, { item: s }),
                (0, a.jsx)("div", { className: a5.separator }),
                (0, a.jsx)(a7, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
function a9() {}
function a6(e) {
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
        } = ((t = (0, c.bG)([nM.default], () => nM.default.getCurrentUser())),
        (n = (0, c.bG)([eP.Ay], () => eP.Ay.getProject(p))),
        (l = n?.preview_application_id ?? n?.application_id),
        (r = (0, c.bG)([ab.A], () => ab.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (s = n?.name ?? P.intl.string(T.default.JEYq8M)),
        (u = (0, c.bG)([nM.default], () => (null != l ? nM.default.getUser(l) : void 0), [l])),
        (m = aN("31337", s, { bot: !0, enabled: !(d = u?.bot === !0) })),
        (f = d ? u : m),
        (h = aN("31338", P.intl.string(T.default["9iAOsw"]), { discriminator: "0003" })),
        (g = aN("31339", (0, aC.mG)(t) ?? "", { enabled: null != t })),
        {
            items: i.useMemo(
                () =>
                    null == t || null == g || null == f || null == h
                        ? []
                        : (function (e, t, n) {
                              var l, r, a;
                              let { bot: i, currentUser: s, viewer: u, member: o } = t,
                                  c = [];
                              function d(e, t) {
                                  let {
                                          interactionName: n,
                                          messageType: l,
                                          menu: r,
                                      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                      a = String(c.length + 1),
                                      i = (0, ay.rh)({
                                          ...(0, ak.Ay)({
                                              channelId: aS.id,
                                              content: e,
                                              author: t,
                                              type: l ?? eb.lAJ.DEFAULT,
                                          }),
                                          id: a,
                                          state: eb.cmJ.SENT,
                                          ...(null != n
                                              ? {
                                                    interaction: {
                                                        id: a,
                                                        name: n,
                                                        type: av.G.APPLICATION_COMMAND,
                                                        user: (0, ak.Vi)(s),
                                                    },
                                                }
                                              : {}),
                                      });
                                  c.push({ key: a, record: i, isCommandReply: null != n, menu: r });
                              }
                              for (let t of e)
                                  switch (t.kind) {
                                      case "command":
                                          d(t.bot, i, {
                                              interactionName: t.user.trim().replace(/^\//, "").split(/\s+/)[0] ?? "",
                                              messageType: eb.lAJ.CHAT_INPUT_COMMAND,
                                          });
                                          break;
                                      case "user_command":
                                      case "message_command": {
                                          let e = "user_command" === t.kind;
                                          (d(e ? n.memberMessage : n.targetMessage, e ? o : s, {
                                              menu: { target: e ? "user" : "message", commandName: t.user },
                                          }),
                                              d(t.bot, i, {
                                                  interactionName: t.user,
                                                  messageType: eb.lAJ.CONTEXT_MENU_COMMAND,
                                              }));
                                          break;
                                      }
                                      case "message":
                                          (d(((l = t.user), l.trim().replace(aI, `<@${i.id}>`)), s),
                                              d(((r = t.bot), r.includes("<@") ? r : `<@${u.id}> ${r}`), i));
                                          break;
                                      case "event":
                                          d(((a = t.bot), a.split(`@${o.username}`).join(`<@${o.id}>`)), i);
                                  }
                              return c;
                          })(
                              x,
                              { bot: f, currentUser: t, viewer: g, member: h },
                              {
                                  targetMessage: P.intl.string(T.default["y+QYes"]),
                                  memberMessage: P.intl.string(T.default.BUTRDc),
                              },
                          ),
                [x, f, t, g, h],
            ),
            botIcon: r,
            appIconSrc: r ?? f?.getAvatarURL(void 0, 80),
        });
    if (0 === j.length) return null;
    let k = aS.name;
    return (0, a.jsxs)("div", {
        className: a4.Ix,
        children: [
            (0, a.jsxs)("div", {
                className: a4.ZO,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(aX.TextIcon, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(v.E, { variant: "body-sm/semibold", color: "text-strong", tag: "span", children: k }),
                ],
            }),
            (0, a.jsx)("ol", {
                className: o()(a4.TE, "group-spacing-16"),
                children: j.map((e) => {
                    let { key: t, record: n, isCommandReply: l, menu: r } = e;
                    return (0, a.jsxs)(
                        "li",
                        {
                            className: null != r ? a4.Rz : void 0,
                            children: [
                                (0, a.jsx)(a3.A, {
                                    message: n,
                                    channel: aS,
                                    author: (0, a0.FT)(n.author, aS),
                                    isGroupStart: !0,
                                    avatarOverride: n.author.bot ? (b ?? void 0) : void 0,
                                    childrenExecutedCommand: l ? (0, a.jsx)(a1.A, { message: n, channel: aS }) : void 0,
                                    usernameClassName: r?.target === "user" ? a4.Ct : void 0,
                                    disableInteraction: !0,
                                }),
                                r?.target === "message"
                                    ? (0, a.jsx)("div", {
                                          className: a4.S3,
                                          inert: !0,
                                          "aria-hidden": !0,
                                          children: (0, a.jsxs)(a2.Ay, {
                                              children: [
                                                  (0, a.jsx)(a2.qv, {
                                                      label: P.intl.string(P.t.lfIHs4),
                                                      icon: aQ.ReactionIcon,
                                                      onClick: a9,
                                                  }),
                                                  (0, a.jsx)(a2.qv, {
                                                      label: P.intl.string(P.t["5IEsGx"]),
                                                      icon: aZ.ArrowAngleLeftUpIcon,
                                                      onClick: a9,
                                                  }),
                                                  (0, a.jsx)(a2.qv, {
                                                      label: P.intl.string(P.t["UKOtz+"]),
                                                      icon: aY.MoreHorizontalIcon,
                                                      selected: !0,
                                                      onClick: a9,
                                                  }),
                                              ],
                                          }),
                                      })
                                    : null,
                                null != r
                                    ? (0, a.jsx)("div", {
                                          className: "user" === r.target ? a4.ET : a4.je,
                                          inert: !0,
                                          children: (0, a.jsx)(a8, {
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
            (0, a.jsxs)("div", {
                className: a4.DA,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(aJ.SlashBoxIcon, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        tag: "span",
                        lineClamp: 1,
                        children: P.intl.formatToPlainString(P.t["8lzR/R"], { channel: `#${k}` }),
                    }),
                ],
            }),
        ],
    });
}
n(381941);
var ie = n(332173);
function it(e) {
    let { name: t } = e;
    return (0, a.jsxs)(ie.A, { children: ["/", t] });
}
function il(e) {
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
            i.useMemo(
                () =>
                    (function (e) {
                        if (0 === e.length) return null;
                        let t = [...e].sort((e, t) => t.length - e.length).map(r8());
                        return RegExp(`(^|[\\s("'\u{201C}\u{2018}])/(${t.join("|")})(?![\\w-])`, "gu");
                    })(n),
                [n],
            ),
        );
    return null == l ? t : l.map((e) => ("command" === e.kind ? (0, a.jsx)(it, { name: e.name }, e.start) : e.text));
}
n(827669);
var ir = n(687966),
    ia = n(757789),
    ii = n(26137),
    is = n(430392),
    iu = n(231483),
    io = n(323384);
let ic = {
    frame: T.default.Z2bt4u,
    overlay_widget: T.default["0mGHfU"],
    user_widget: T.default.Jipr29,
    bot: T.default.EbvC13,
    commands: T.default.EbvC13,
    automod: T.default.tiMvei,
};
var id = n(573634);
let im = {
    frame: ir.GameControllerIcon,
    overlay_widget: ia.WindowTopIcon,
    user_widget: ii.UserCircleIcon,
    bot: is.RobotIcon,
    commands: is.RobotIcon,
    automod: iu.ShieldIcon,
};
function ih(e) {
    let { caption: t, children: n, className: l } = e;
    return (0, a.jsxs)("div", {
        className: o()(id.e7, l),
        children: [(0, a.jsx)(v.E, { variant: "body-sm/normal", color: "text-muted", children: t }), n],
    });
}
function ig(e) {
    let { labels: t } = e;
    return (0, a.jsx)("ul", {
        className: id.Ip,
        children: t.map((e) =>
            (0, a.jsx)(
                "li",
                {
                    className: id.jw,
                    children: (0, a.jsx)(v.E, {
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
function ip(e) {
    let { name: t, description: n } = e;
    return (0, a.jsxs)("li", {
        className: id.lj,
        children: [
            (0, a.jsx)("span", {
                className: o()(id.Vo, id.G),
                children: (0, a.jsx)(io.AppsIcon, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
            }),
            (0, a.jsxs)("div", {
                className: id.aV,
                children: [
                    (0, a.jsx)(v.E, { variant: "body-md/normal", color: "text-default", lineClamp: 1, children: t }),
                    (0, a.jsx)(v.E, { variant: "body-sm/normal", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
}
function ix(e) {
    let { commands: t } = e;
    return (0, a.jsx)("ul", {
        className: id.wZ,
        children: t.map((e, t) => {
            let n = r6(e),
                l = e.description?.trim() ?? "";
            return (0, a.jsx)(
                "li",
                {
                    children: (0, a.jsxs)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        selectable: !0,
                        children: [
                            "/" === n
                                ? (0, a.jsx)(it, { name: e.name })
                                : (0, a.jsx)(ie.A, { children: `${n}${e.name}` }),
                            "" !== l ? ` ${l}` : null,
                        ],
                    }),
                },
                t,
            );
        }),
    });
}
function iv(e) {
    let { bullets: t, commandNames: n } = e;
    return (0, a.jsx)("ul", {
        className: id.p_,
        children: t.map((e, t) =>
            (0, a.jsx)(
                "li",
                {
                    className: id.Aw,
                    children: (0, a.jsx)(v.E, {
                        variant: "body-md/normal",
                        color: "text-default",
                        tag: "span",
                        selectable: !0,
                        children: (0, a.jsx)(il, { text: e, commandNames: n }),
                    }),
                },
                t,
            ),
        ),
    });
}
function ij(e) {
    let { experience: t, bullets: n, preview: l, blocks: r, commandNames: i } = e,
        s = "frame" === t.kind && !0 !== t.game,
        u = s ? io.AppsIcon : im[t.kind],
        o = P.intl.string(s ? T.default.BM4Ymz : ic[t.kind]);
    return (0, a.jsxs)("section", {
        className: id.s9,
        "aria-label": o,
        children: [
            (0, a.jsxs)("div", {
                className: id.JQ,
                children: [
                    (0, a.jsx)("span", {
                        className: id.Vo,
                        children: (0, a.jsx)(u, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    (0, a.jsx)(v.E, { variant: "body-md/medium", color: "text-strong", tag: "span", children: o }),
                ],
            }),
            null != l ? (0, a.jsx)("div", { className: id.VH, children: l }) : null,
            "automod" === t.kind && 1 === n.length
                ? (0, a.jsx)(v.E, {
                      variant: "body-md/normal",
                      color: "text-default",
                      selectable: !0,
                      children: (0, a.jsx)(il, { text: n[0], commandNames: i }),
                  })
                : n.length > 0
                  ? (0, a.jsx)(iv, { bullets: n, commandNames: i })
                  : null,
            r.length > 0 ? (0, a.jsx)("div", { className: id.PG, children: r }) : null,
        ],
    });
}
function ib(e) {
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
                                let n = t.map(r8()).join("|");
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
    return (0, a.jsxs)("div", {
        className: id.aN,
        children: [
            (0, a.jsxs)("div", {
                className: id.Lv,
                children: [(0, a.jsx)(x.D, { variant: "heading-lg/semibold", color: "text-strong", children: s }), u],
            }),
            m.map((e) => {
                let { experience: t, bullets: n } = e;
                return (0, a.jsxs)(
                    i.Fragment,
                    {
                        children: [
                            (0, a.jsx)("div", { className: id.yF, role: "separator" }),
                            (0, a.jsx)(ij, {
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
                                                      ? [{ key: t, caption: P.intl.string(n), labels: l.map(r9) }]
                                                      : [];
                                              })
                                              .map((e) => {
                                                  let { key: t, caption: n, labels: l } = e;
                                                  return (0, a.jsx)(
                                                      ih,
                                                      { caption: n, children: (0, a.jsx)(ig, { labels: l }) },
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
                                                        let n = P.intl.string(T.default["6/3tGY"]),
                                                            l = [];
                                                        if (t.surfaces.includes(en.q7.APP_CHANNEL)) {
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
                                                            launchableAnywhere: t.surfaces.includes(en.q7.ACTIVITY),
                                                            usableInVoice: t.surfaces.includes(en.q7.VOICE_CHANNEL),
                                                        };
                                                    })(e, t);
                                                    if (null == n) return [];
                                                    let l = [];
                                                    n.channels.length > 0 &&
                                                        l.push(
                                                            (0, a.jsx)(
                                                                ih,
                                                                {
                                                                    className: id.Iw,
                                                                    caption: P.intl.formatToPlainString(
                                                                        T.default.w8F5sy,
                                                                        { count: n.channels.length },
                                                                    ),
                                                                    children: (0, a.jsx)("ul", {
                                                                        className: id.wZ,
                                                                        "data-conjure-plan-channels": "",
                                                                        children: n.channels.map((e) => {
                                                                            let { name: t, description: n } = e;
                                                                            return (0, a.jsx)(
                                                                                ip,
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
                                                            ? [P.intl.string(T.default["4oGg2h"])]
                                                            : []),
                                                        ...(n.launchableAnywhere
                                                            ? [P.intl.string(T.default.BTGCfR)]
                                                            : []),
                                                    ];
                                                    return (
                                                        r.length > 0 &&
                                                            l.push(
                                                                (0, a.jsx)(
                                                                    ih,
                                                                    {
                                                                        caption: P.intl.string(T.default.MY6UGJ),
                                                                        children: (0, a.jsx)(ig, { labels: r }),
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
                                                          (0, a.jsx)(
                                                              ih,
                                                              {
                                                                  caption: P.intl.string(P.t["0hKkS+"]),
                                                                  children: (0, a.jsx)(ix, { commands: e.commands }),
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
var iy = n(633075),
    ik = n(591410),
    iw = n(27399);
function iA(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, c.bG)([nM.default], () => nM.default.getCurrentUser()),
        r = i.useMemo(() => new iy.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, a.jsx)("div", {
              className: iw.H,
              children: (0, a.jsx)(ik.A, {
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
var iC = n(443863);
function iS(e) {
    let t,
        { projectId: n, src: l, alt: r, size: i, onError: s } = e,
        u =
            ((t = Math.min(1, 1872 / i.width, 970 / i.height)),
            { width: ar(i.width * t, 1920), height: ar(i.height * t, 1018) });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(rQ, { projectId: n }),
            (0, a.jsx)("div", {
                className: iC.nk,
                style: {
                    "--custom-conjure-plan-overlay-widget-top": aa,
                    "--custom-conjure-plan-overlay-widget-end": ai,
                    "--custom-conjure-plan-overlay-widget-width": u.width,
                    "--custom-conjure-plan-overlay-widget-height": u.height,
                },
                children: (0, a.jsx)("img", { src: l, alt: r, className: iC.M7, onError: s }),
            }),
        ],
    });
}
function iN(e, t, n) {
    Promise.all(
        t.map((t) => {
            let { id: n } = t;
            return (0, e9.PK)(e, n);
        }),
    ).then(
        (e) => {
            (0, lA.R)({
                items: e.map((e, n) => ({ type: "IMAGE", url: e, alt: t[n].alt })),
                startingIndex: n,
                shouldHideMediaOptions: !0,
                location: "ConjureChat",
            });
        },
        () => {},
    );
}
function iI(e) {
    let { projectId: t, design: n, alt: l } = e,
        { id: r } = n,
        { src: i, gone: s, handleError: u } = (0, lC._)(t, r);
    return s
        ? null
        : (0, a.jsx)(t1.D, {
              className: iC.xX,
              onClick: () => iN(t, [{ id: r, alt: l }], 0),
              "aria-label": P.intl.string(T.default.TvAPIm),
              children: null == i ? null : (0, a.jsx)("img", { src: i, alt: l, className: iC.sN, onError: u }),
          });
}
function iE(e) {
    let { projectId: t, design: n, size: l } = e,
        { id: r } = n,
        { src: s, gone: u, handleError: d } = (0, lC._)(t, r),
        [m, f] = i.useState(!1),
        [h, g] = i.useState(!1),
        {
            slide: p,
            labels: x,
            pick: j,
        } = (function (e) {
            let { ready: t, paused: n = !1 } = e,
                l = (0, c.bG)([aE.Ay], () => aE.Ay.useReducedMotion),
                [r, a] = i.useState(0),
                [s, u] = i.useState(!1),
                o = t && !l && !n && !s,
                d = l && !s ? 0 : r;
            i.useEffect(() => {
                if (!o) return;
                let e = setInterval(() => a((e) => (e + 1) % a_.length), 4e3);
                return () => clearInterval(e);
            }, [o]);
            let m = i.useCallback((e) => {
                    (u(!0), a(e));
                }, []),
                f = i.useCallback(() => m(d), [m, d]);
            return { slide: d, labels: a_.map((e) => P.intl.string(e)), pick: m, hold: f };
        })({ ready: null != s, paused: m || h });
    if (u) return null;
    let b = P.intl.string(T.default.mjryK4),
        y = P.intl.string(T.default["rPpf5/"]);
    return (0, a.jsxs)("div", {
        className: iC.RM,
        onMouseEnter: () => f(!0),
        onMouseLeave: () => f(!1),
        onFocus: () => g(!0),
        onBlur: (e) => {
            e.currentTarget.contains(e.relatedTarget) || g(!1);
        },
        children: [
            (0, a.jsx)(t1.D, {
                className: o()(iC.xX, iC.nj, { [iC.qQ]: 0 === p }),
                style: { "--custom-conjure-plan-overlay-scene-aspect": String(al) },
                onClick: () => iN(t, [{ id: r, alt: b }], 0),
                "aria-label": P.intl.string(T.default.TvAPIm),
                children:
                    null == s
                        ? null
                        : 0 === p
                          ? (0, a.jsx)("img", { src: s, alt: b, className: iC.Ac, onError: d })
                          : (0, a.jsx)(iS, { projectId: t, src: s, alt: y, size: l, onError: d }),
            }),
            (0, a.jsx)("div", {
                className: iC._4,
                role: "group",
                "aria-label": P.intl.string(T.default.EH36X6),
                children: x.map((e, t) =>
                    (0, a.jsx)(
                        t1.D,
                        {
                            className: o()(iC.c, { [iC.Cw]: p === t }),
                            "aria-pressed": p === t,
                            onClick: () => j(t),
                            children: (0, a.jsx)(v.E, {
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
function i_(e) {
    let { projectId: t, id: n, alt: l, onOpen: r } = e,
        { src: i, gone: s, handleError: u } = (0, lC._)(t, n);
    return s
        ? null
        : (0, a.jsx)("li", {
              children: (0, a.jsx)(t1.D, {
                  className: iC.ir,
                  onClick: r,
                  "aria-label": l,
                  children: null == i ? null : (0, a.jsx)("img", { src: i, alt: "", className: iC.rA, onError: u }),
              }),
          });
}
function iM(e) {
    let { projectId: t, proposal: n } = e,
        l = (n.reference_images ?? []).map((e, t) => {
            let { id: n } = e;
            return { id: n, alt: P.intl.formatToPlainString(T.default.xFgQ8L, { number: t + 1 }) };
        });
    return 0 === l.length
        ? null
        : (0, a.jsx)("section", {
              className: iC.Op,
              children: (0, a.jsxs)("div", {
                  className: iC.uW,
                  children: [
                      (0, a.jsx)(v.E, {
                          variant: "body-xs/medium",
                          color: "text-muted",
                          tag: "span",
                          children: P.intl.string(T.default.ubBJcy),
                      }),
                      (0, a.jsx)("ul", {
                          className: iC.Ft,
                          children: l.map((e, n) => {
                              let { id: r, alt: i } = e;
                              return (0, a.jsx)(i_, { projectId: t, id: r, alt: i, onOpen: () => iN(t, l, n) }, r);
                          }),
                      }),
                  ],
              }),
          });
}
function iR(e) {
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
            ((n = rY(x, en.q7.APPLICATION_COMMANDS)),
            (l =
                rY(x, en.q7.BOT) || n
                    ? null != x.bot
                        ? x.bot.interaction
                        : n && x.commands.some(r2)
                          ? "commands"
                          : null
                    : null),
            (r = i.useMemo(
                () =>
                    null == l
                        ? []
                        : r5(x, l, {
                              message: P.intl.string(T.default.J7qggf),
                              reply: P.intl.string(T.default.nqYtiy),
                              event: P.intl.string(T.default["05lU9W"]),
                          }),
                [x, l],
            )),
            { botInteraction: l, botExchanges: r }),
        k = (function (e, t) {
            let { widget_config: n, widget_preview: l = ag } = t,
                r = (0, c.bG)([am.default], () => am.default.locale),
                a = (0, c.bG)([eP.Ay], () => {
                    let t = eP.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [n, l] = i.useState(ah);
                    return (
                        i.useEffect(() => {
                            let n = Object.entries(t ?? {});
                            if (0 === n.length) return;
                            let r = !1;
                            return (
                                Promise.all(
                                    n.map((t) => {
                                        let [n, l] = t;
                                        return (0, e9.PK)(e, l.id).then(
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
                u = i.useMemo(
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
                                                          ...ap(n),
                                                          ...(null != n.fallback ? { fallback: ap(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let a = au.uW.safeParse(r);
                                  if (!a.success) return null;
                                  let i = a.data;
                                  return null == i[ad.m.WIDGET_TOP] || null == i[ad.m.WIDGET_BOTTOM]
                                      ? null
                                      : {
                                            locale: l,
                                            surfaceConfigs: i,
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
                                                    for (let [e, a] of Object.entries(t.sample_data ?? {}))
                                                        if ("image" === l.get(e)) {
                                                            let t = n[String(a)];
                                                            null != t &&
                                                                (r[e] = {
                                                                    type: au.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof a
                                                                ? (r[e] = { type: au.oG.NUMBER, value: a })
                                                                : (r[e] = { type: au.oG.STRING, value: a });
                                                    return r;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(ax),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: af,
                                            },
                                        };
                              })(n, l, s, r),
                    [n, l, s, r],
                );
            return i.useMemo(() => (null == a || null == u ? null : { applicationId: a, rendererProps: u }), [a, u]);
        })(p, x),
        w = j?.superseded === !0,
        A = x.what_changed?.trim() ?? "",
        C =
            ((t = x.commands),
            i.useMemo(
                () =>
                    t
                        .filter((e) => "/" === r6(e))
                        .map((e) => {
                            let { name: t } = e;
                            return t;
                        }),
                [t],
            )),
        S =
            ((u =
                null == (s = an(x))
                    ? null
                    : (x.experiences?.find((e) => {
                          let { surfaces: t } = e;
                          return t.includes(s);
                      })?.id ?? null)),
            (m = null != (o = x.design_image) && o.id !== as(x)?.id ? o : null),
            (f = as(x)),
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
                    null != f && null != g ? { experienceId: g, design: f, size: er(x.overlay_widget ?? null) } : null,
            }),
        N = i.useMemo(
            () =>
                x.commands.some(r2)
                    ? r5({ ...x, bot: void 0 }, "commands", {
                          message: P.intl.string(T.default.J7qggf),
                          reply: P.intl.string(T.default.nqYtiy),
                          event: P.intl.string(T.default["05lU9W"]),
                      })
                    : [],
            [x],
        ),
        I = (0, c.bG)([eP.Ay], () => eP.Ay.getProject(p)?.name, [p]),
        E =
            w && null != j
                ? P.intl.formatToPlainString(T.default.YZ3qJs, { version: j.version })
                : P.intl.string(T.default["3b6e7o"]),
        _ = w ? (0, a.jsx)(ne, { children: P.intl.string(T.default.hF2c41) }) : null;
    return (0, a.jsxs)(nt, {
        title: E,
        meta: _,
        superseded: w,
        showLabel: P.intl.string(T.default.yD8EJS),
        hideLabel: P.intl.string(T.default.nSPGNb),
        bodyClassName: iC.rf,
        "data-conjure-plan-card": !0,
        children: [
            (0, a.jsx)("div", {
                className: iC.Qs,
                children: (0, a.jsx)(ib, {
                    appName: I ?? x.experiences?.[0]?.name ?? "",
                    intro: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(v.E, {
                                variant: "body-md/normal",
                                color: "text-default",
                                selectable: !0,
                                children: (0, a.jsx)(il, { text: x.summary, commandNames: C }),
                            }),
                            (0, a.jsx)(iM, { projectId: p, proposal: x }),
                            "" !== A
                                ? (0, a.jsxs)("section", {
                                      className: iC.uW,
                                      children: [
                                          (0, a.jsx)(v.E, {
                                              variant: "body-xs/medium",
                                              color: "text-muted",
                                              tag: "span",
                                              children: P.intl.string(T.default.iNS4dl),
                                          }),
                                          (0, a.jsx)(v.E, {
                                              variant: "body-md/normal",
                                              color: "text-default",
                                              selectable: !0,
                                              children: (0, a.jsx)(il, { text: A, commandNames: C }),
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
                                            ? (0, a.jsx)(iI, {
                                                  projectId: p,
                                                  design: S.ui.design,
                                                  alt: P.intl.string(null == (t = an(x)) ? T.default["3/aHX6"] : ae[t]),
                                              })
                                            : null,
                                    l =
                                        e.id === S.overlay?.experienceId
                                            ? (0, a.jsx)(iE, {
                                                  projectId: p,
                                                  design: S.overlay.design,
                                                  size: S.overlay.size,
                                              })
                                            : null;
                                return null == n && null == l ? null : (0, a.jsxs)(a.Fragment, { children: [n, l] });
                            }
                            case "user_widget":
                                return null != k ? (0, a.jsx)(iA, { ...k }) : null;
                            case "automod":
                                return null != x.automod && x.automod.examples.length > 0
                                    ? (0, a.jsx)(aW, { automod: x.automod })
                                    : null;
                            case "commands":
                            case "bot": {
                                let t = (function (e, t, n) {
                                    var l;
                                    let r;
                                    if ("commands" === e.kind) return n;
                                    let a = (e.example_exchanges ?? [])
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
                                        (l = a.length > 0 ? a : t),
                                        (r = l.some((e) => "command" === e.kind || r3(e))),
                                        0 === n.length || r ? l.slice(0, 3) : [...l.slice(0, 2), n[0]]
                                    );
                                })(e, y, N);
                                return t.length > 0 ? (0, a.jsx)(a6, { projectId: p, exchanges: t }) : null;
                            }
                        }
                    },
                    commandNames: C,
                }),
            }),
            null == b || w
                ? null
                : (0, a.jsxs)("div", {
                      className: iC.qr,
                      children: [
                          (0, a.jsx)(d.$, {
                              variant: "primary",
                              size: "sm",
                              text: P.intl.string(T.default["6S+wRM"]),
                              onClick: b,
                          }),
                          (0, a.jsx)(v.E, {
                              variant: "body-sm/normal",
                              color: "text-subtle",
                              tag: "span",
                              children: P.intl.string(T.default.IZoqbR),
                          }),
                      ],
                  }),
        ],
    });
}
var iT = n(289565);
function iP(e) {
    let { onDismiss: t, children: n } = e;
    return null == t
        ? (0, a.jsx)("div", { className: iT.m, children: n })
        : (0, a.jsxs)("div", {
              className: iT.Z,
              children: [
                  n,
                  (0, a.jsx)(e6.m, {
                      text: P.intl.string(P.t.WAI6xu),
                      asContainer: !0,
                      children: (0, a.jsx)(tc.K, {
                          "aria-label": P.intl.string(P.t.WAI6xu),
                          icon: e3.XSmallIcon,
                          variant: "icon-only",
                          size: "sm",
                          onClick: t,
                      }),
                  }),
              ],
          });
}
function iL(e, t) {
    return null != t && ("new_ui" === e.reason ? !0 === t.newUiUnpublished : "not_live" === t.publishState);
}
function i$(e, t) {
    return null != e && iL(t, e.status);
}
let iD = new WeakMap();
var iq = n(175841),
    iF = n(27232),
    iO = n(505930),
    iG = n(506774),
    iz = n(385081);
let iU = "conjurePublishRatings",
    iB = "conjurePublishRatingViews",
    iK = [1, 2, 3, 4, 5],
    iH = { 1: T.default.GhbsGA, 2: T.default.cm0nwU, 3: T.default.kGvlh2, 4: T.default.dVBSUg, 5: T.default.DKlgF7 };
function iV(e) {
    return P.intl.string(iH[e]);
}
let iW = new Set(),
    iX = 0;
function iQ() {
    return iG.w.get(iU) ?? {};
}
function iZ(e, t) {
    return iQ()[e]?.[t] ?? null;
}
function iY(e) {
    return (iW.add(e), () => iW.delete(e));
}
function iJ(e) {
    let { projectId: t, turnId: n, cta: l, status: r, placement: a } = e;
    return {
        projectId: t,
        turnId: n,
        publishReason: l.reason ?? "first_publish",
        surface: r?.surface ?? l.surface,
        placement: a,
        publishState: r?.publishState ?? null,
    };
}
var i0 = n(189213);
function i1(e) {
    let { rating: t, ...n } = e,
        {
            text: l,
            setText: r,
            canSend: s,
            send: u,
        } = (function (e) {
            let [t, n] = i.useState("");
            return {
                text: t,
                setText: n,
                canSend: "" !== t.trim(),
                send: () => {
                    let n;
                    "" !== (n = t.trim().slice(0, 256)) && (0, iz.Fz)(e, n);
                },
            };
        })(t),
        o = P.intl.string(T.default.IqkF07);
    return (0, a.jsx)(i0.a, {
        ...n,
        title: o,
        actions: [
            {
                variant: "primary",
                text: P.intl.string(T.default["sr+mUC"]),
                disabled: !s,
                onClick: () => {
                    (u(), n.onClose());
                },
            },
        ],
        children: (0, a.jsx)(nA.f, {
            label: o,
            hideLabel: !0,
            placeholder: P.intl.string(T.default.HMGKAV),
            value: l,
            onChange: r,
            rows: 4,
            maxLength: 256,
            showRemainingCharacterCount: !0,
        }),
    });
}
var i2 = n(54100);
function i3(e) {
    let { rating: t } = e;
    return (0, a.jsxs)("div", {
        className: i2.mo,
        role: "status",
        children: [
            (0, a.jsx)(iq.SparklesIcon, { size: "xs", color: "currentColor", className: i2.dQ, "aria-hidden": !0 }),
            (0, a.jsx)(v.E, {
                variant: "body-xs/medium",
                color: "text-muted",
                children:
                    t <= 2
                        ? P.intl.string(T.default["nIc9/M"])
                        : 3 === t
                          ? P.intl.string(T.default.ausj8U)
                          : P.intl.string(T.default.HilSjw),
            }),
        ],
    });
}
function i4(e) {
    let { projectId: t, turnId: n, cta: l, status: r, placement: s } = e,
        { rating: u, rate: c } = (function (e) {
            let { projectId: t, turnId: n } = e;
            i.useSyncExternalStore(iY, () => iX);
            let { publishReason: l, surface: r, placement: a, publishState: s } = iJ(e);
            return (
                i.useEffect(() => {
                    !(function (e) {
                        if (null != iZ(e.projectId, e.turnId)) return;
                        let t = iG.w.get(iB) ?? {};
                        t[e.projectId]?.[e.turnId] !== !0 &&
                            ((0, iz.rv)(e),
                            iG.w.set(iB, { ...t, [e.projectId]: { ...t[e.projectId], [e.turnId]: !0 } }));
                    })({ projectId: t, turnId: n, publishReason: l, surface: r, placement: a, publishState: s });
                }, [t, n, l, r, a, s]),
                {
                    rating: iZ(t, n),
                    rate(t) {
                        let n = (function (e) {
                            let { rating: t, ...n } = e,
                                { projectId: l, turnId: r } = n;
                            if (null != iZ(l, r)) return null;
                            let a = { ...iJ(n), rating: t };
                            (0, iz.gw)(a);
                            let i = iQ();
                            return (iG.w.set(iU, { ...i, [l]: { ...i[l], [r]: t } }), iX++, iW.forEach((e) => e()), a);
                        })({ ...e, rating: t });
                        return null != n && t <= 2 ? n : null;
                    },
                }
            );
        })({ projectId: t, turnId: n, cta: l, status: r, placement: s }),
        [d, m] = i.useState(null),
        [f, h] = i.useState(null),
        [g, p] = i.useState(!1),
        x = i.useId(),
        j = i.useId(),
        b = i.useRef(!1);
    if (
        (i.useEffect(() => {
            if (!g) return;
            let e = setTimeout(() => p(!1), 420);
            return () => clearTimeout(e);
        }, [g]),
        null != u && !g)
    )
        return (0, a.jsx)(i3, { rating: u });
    let y = null != u,
        k = y ? u : (f ?? d),
        w = y || (null == f && null != d);
    function A(e) {
        if (y) return;
        (m(e), h(null), p(!0));
        let t = c(e);
        null != t && (0, H.qf)((e) => (0, a.jsx)(i1, { ...e, rating: t }));
    }
    return (0, a.jsxs)("div", {
        className: i2.nM,
        onMouseLeave: () => h(null),
        children: [
            (0, a.jsxs)("span", {
                className: i2.WD,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(v.E, {
                        id: j,
                        variant: "body-xs/medium",
                        color: "text-muted",
                        className: o()(i2.Pf, { [i2.KH]: null == k }),
                        children: P.intl.string(T.default.mTV326),
                    }),
                    iK.map((e) =>
                        (0, a.jsx)(
                            v.E,
                            {
                                variant: "body-xs/medium",
                                color: "text-default",
                                className: o()(i2.Pf, { [i2.KH]: k === e }),
                                children: iV(e),
                            },
                            e,
                        ),
                    ),
                ],
            }),
            (0, a.jsx)("div", {
                role: "radiogroup",
                "aria-labelledby": j,
                className: i2.uf,
                children: iK.map((e) => {
                    let t = null != k && e <= k,
                        n = t ? iF.StarIcon : iO.StarOutlineIcon;
                    return (0, a.jsxs)(
                        "label",
                        {
                            className: i2.uK,
                            onMouseEnter: () => {
                                y || h(e);
                            },
                            children: [
                                (0, a.jsx)("input", {
                                    type: "radio",
                                    name: x,
                                    value: e,
                                    checked: !1,
                                    onChange: () => {
                                        b.current ? m(e) : A(e);
                                    },
                                    onKeyDown: (t) => {
                                        ((b.current = t.key.startsWith("Arrow")),
                                            "Enter" === t.key && (t.preventDefault(), A(e)));
                                    },
                                    onKeyUp: () => {
                                        b.current = !1;
                                    },
                                    className: i2.hF,
                                    "aria-label": P.intl.formatToPlainString(T.default.NU7Dex, {
                                        rating: e,
                                        label: iV(e),
                                    }),
                                }),
                                (0, a.jsx)(
                                    "span",
                                    {
                                        className: o()(i2.d4, { [i2.cO]: t, [i2.Ng]: t && w }),
                                        children: (0, a.jsx)(n, {
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
function i5(e) {
    let { projectId: t, publish: n } = e,
        l = (0, eV.A)(t, n);
    return (0, a.jsx)(d.$, {
        variant: "primary",
        size: "sm",
        loading: n.publishing && !n.showsProgress,
        text: n.label,
        onClick: () => l("card"),
    });
}
function i7(e) {
    let { projectId: t, turnId: n, cta: l } = e,
        r = (0, eK.Ay)(t);
    return null != r && i$(r, l)
        ? (0, a.jsx)(iP, {
              children: (0, a.jsxs)(j.B, {
                  gap: 12,
                  align: "start",
                  children: [
                      (0, a.jsx)(i5, { projectId: t, publish: r }),
                      null != r.failure
                          ? (0, a.jsx)(v.E, {
                                variant: "body-sm/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: r.failure,
                            })
                          : null,
                      null != n
                          ? (0, a.jsx)(i4, {
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
var i8 = n(303345),
    i9 = n(44255),
    i6 = n(416473),
    se = n(289830);
function st(e) {
    let { projectId: t, proposal: n, current: l } = e,
        r = (function (e, t, n) {
            let l = (0, c.bG)(
                    [eP.Ay],
                    () => {
                        let t = eP.Ay.getProject(e);
                        return null != t && (0, eP.jf)(t);
                    },
                    [e],
                ),
                [r, a] = i.useState("idle"),
                [s, u] = i.useState(null),
                o = i.useCallback(async () => {
                    (a("sending"), u(null));
                    try {
                        (await (0, i6.Du)(e, t.trigger), a("on"));
                    } catch (e) {
                        (u(e instanceof i8.A ? e.message : P.intl.string(T.default.EXceox)), a("error"));
                    }
                }, [e, t.trigger]),
                [d] = i.useState(() => Date.now()),
                m =
                    t.next_run_at > d
                        ? P.intl.formatToPlainString(T.default.orZDqY, { time: (0, i9.TP)(t.next_run_at) })
                        : null;
            return {
                summary: (0, i9.lD)(t.trigger),
                firstPublish: m,
                status: r,
                error: s,
                onTurnOn: l && n && "on" !== r ? o : void 0,
            };
        })(t, n, l);
    return (0, a.jsx)(t9, {
        title: P.intl.string(T.default.ZtfX9V),
        children: (0, a.jsxs)("div", {
            className: se.r,
            children: [
                (0, a.jsxs)("div", {
                    className: se.z,
                    children: [
                        (0, a.jsx)(v.E, { variant: "body-md/medium", children: r.summary }),
                        null != r.firstPublish
                            ? (0, a.jsx)(v.E, {
                                  variant: "body-sm/normal",
                                  color: "text-muted",
                                  children: r.firstPublish,
                              })
                            : null,
                        (0, a.jsx)(v.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: P.intl.string(T.default.cxNHma),
                        }),
                        "on" === r.status
                            ? (0, a.jsx)(v.E, {
                                  variant: "body-sm/normal",
                                  role: "status",
                                  children: P.intl.string(T.default.k4IRsm),
                              })
                            : null,
                        "error" === r.status
                            ? (0, a.jsx)(v.E, {
                                  variant: "body-sm/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: r.error,
                              })
                            : null,
                    ],
                }),
                null != r.onTurnOn
                    ? (0, a.jsx)(d.$, {
                          variant: "secondary",
                          size: "sm",
                          text: P.intl.string(T.default.EuhBSG),
                          loading: "sending" === r.status,
                          disabled: "sending" === r.status,
                          onClick: r.onTurnOn,
                      })
                    : null,
            ],
        }),
    });
}
var sn = n(989271);
function sl(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = i.useId(),
        s = null == l;
    return (0, a.jsxs)(t1.D, {
        className: o()(sn.nM, { [sn.f1]: s, [sn.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": P.intl.formatToPlainString(T.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: sn.jo,
                children: [
                    n
                        ? (0, a.jsx)(m.CheckmarkSmallIcon, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: sn.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(v.E, {
                        tag: "div",
                        variant: "body-md/medium",
                        color: "none",
                        className: sn.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, a.jsx)(v.E, {
                      tag: "div",
                      id: r,
                      variant: "body-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function sr(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = i.useState(() => new Set()),
        u = i.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, a.jsx)(t9, {
        title: P.intl.string(T.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                sl,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : u },
                e.id,
            ),
        ),
    });
}
var sa = n(919790),
    si = n(908492),
    ss = n(971824),
    su = n(162052),
    so = n(165648);
function sc(e) {
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
        x = i.useMemo(() => (0, tZ.Jf)(n, l), [n, l]),
        v = i.useMemo(
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
        return (0, a.jsx)("ol", {
            className: no.pj,
            "data-live": !1,
            children: (0, a.jsx)(t3.A, {
                glyph: (0, a.jsx)(rm.StopIcon, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: P.intl.string(T.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = l ? void 0 : (p ?? (h ? (x.turn?.durationMs ?? u) : void 0)),
        b = f ? ((0, tZ.lt)(n) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        w = ry(k.map((e) => e.taskId)),
        A = !g && (l || k.some((e) => "running" === e.task.status)),
        C = rN(k);
    return (0, a.jsxs)("ol", {
        className: no.pj,
        "data-live": A,
        children: [
            (0, a.jsx)(t0.Ay, {
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
                let l = null != e.task.helperMark ? rb(e.task.helperMark) : void 0,
                    r = l ?? w.get(e.taskId);
                return null == r
                    ? null
                    : (0, a.jsx)(
                          rI,
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
            (0, a.jsx)(rO, { projectId: t, steps: n, tree: x, segment: m }),
            y
                ? (0, a.jsx)("li", {
                      className: no.YO,
                      children: (0, a.jsx)(ns, { todos: b, provisional: d, agents: C, live: r, superseded: s }),
                  })
                : null,
        ],
    });
}
function sd(e) {
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
            sideReplyAcknowledges: A,
            hoistedProse: C = !1,
            hoistedAttachmentsHost: S,
            restoreProposal: N,
            onRestoreProposal: I,
            publishScheduleProposal: E,
            publishScheduleProposalCurrent: _ = !1,
        } = e,
        M = i.useMemo(
            () => rf({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != c && c.length > 0 }),
            [n, l, r, c],
        ),
        { streamed: R, lastStreamedMessage: L, showsClosingMessage: $, closingContent: D } = M,
        q = (C ? S : void 0) ?? M.attachmentsHost,
        F = $ && !C,
        O = null == c ? null : (0, a.jsx)(sa.A, { projectId: t, attachments: c }),
        G = null == O ? null : (0, a.jsx)("div", { className: no.MT, children: O }),
        z = w
            ? (0, a.jsx)(v.E, {
                  variant: "body-xs/normal",
                  color: "text-muted",
                  children: (function (e) {
                      switch (e) {
                          case "steered":
                              return P.intl.string(T.default.Mv5OmK);
                          case "queued":
                              return P.intl.string(T.default["Po/2mi"]);
                          case "restarting":
                              return P.intl.string(T.default.Vj0woh);
                          default:
                              return P.intl.string(T.default.gY3L8p);
                      }
                  })(A),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: no.ue,
        children: [
            R.length > 0 && !C
                ? (0, a.jsx)("ol", {
                      className: no.dO,
                      children: R.filter((e) => "todos" !== e.type).map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: no.DV,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: so.PT,
                                          children: (0, si.U)(e.content, !0, {
                                              allowList: !0,
                                              allowHeading: !0,
                                              allowLinks: !0,
                                          }),
                                      }),
                                      "streamed" === q && e === L ? G : null,
                                  ],
                              },
                              e.key,
                          ),
                      ),
                  })
                : null,
            null != r
                ? (0, a.jsx)(iR, { projectId: t, proposal: r, version: s, onApprove: k })
                : F
                  ? (0, a.jsxs)("div", {
                        className: o()(no.ky, su.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: o()(so.PT, no.cW),
                                children: (0, si.U)(D, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === q ? G : null,
                            z,
                        ],
                    })
                  : null,
            null != d
                ? (0, a.jsx)("div", {
                      className: o()(no.ky, no.k1, su.XR, { [ss.O]: null != f && "open" === h }),
                      children: (0, a.jsx)(l0, {
                          projectId: t,
                          cardId: m ?? "",
                          request: d,
                          status: h,
                          awaiting: "open" === h ? f : void 0,
                      }),
                  })
                : null,
            null != g
                ? (0, a.jsx)("div", {
                      className: o()(no.ky, no.k1, su.XR),
                      children: (0, a.jsx)(rn, { projectId: t, request: g, askId: p }),
                  })
                : null,
            "standalone" !== q && ("closing" !== q || F) ? null : O,
            null != x ? (0, a.jsx)(i7, { projectId: t, turnId: j ?? null, cta: x }) : null,
            null != u && u.length > 0 ? (0, a.jsx)(sr, { ideas: u, pickedIdeaIds: y, onPick: b }) : null,
            null != N ? (0, a.jsx)(rz, { proposal: N, onRestore: I }) : null,
            null != E ? (0, a.jsx)(st, { projectId: t, proposal: E, current: _ }) : null,
            F ? null : z,
        ],
    });
}
var sm = n(286251),
    sf = n(146806),
    sh = n(475358),
    sg = n(783977),
    sp = n(559647),
    sx = n(787564),
    sv = n(339200),
    sj = n(234320),
    sb = n(191023),
    sy = n(285796),
    sk = n(922329),
    sw = n(153171);
function sA(e) {
    let { projectId: t } = e;
    return (0, a.jsx)(sk.p, {
        name: P.intl.string(T.default.xhFsEP),
        thumb: (0, a.jsxs)("span", {
            className: tw.PA,
            "aria-hidden": !0,
            children: [
                (0, a.jsx)(sb.ImageIcon, { size: "sm", color: "currentColor" }),
                (0, a.jsx)("span", {
                    className: tw.OY,
                    children: (0, a.jsx)(f.PencilIcon, {
                        size: "custom",
                        width: 10,
                        height: 10,
                        color: "currentColor",
                    }),
                }),
            ],
        }),
        subText: (0, a.jsx)(v.E, {
            variant: "body-xs/normal",
            color: "text-muted",
            children: P.intl.string(T.default["9y+Dae"]),
        }),
        children: (0, a.jsx)("button", {
            type: "button",
            className: sw.o1,
            onClick: () => (0, I.xU)(t),
            "aria-label": P.intl.string(T.default.N852dj),
            children: (0, a.jsx)(sy.CircleXIcon, { size: "xs", color: "currentColor" }),
        }),
    });
}
function sC(e) {
    let { send: t } = e;
    return (0, a.jsxs)(sk.p, {
        compact: !0,
        name: P.intl.string(T.default.xhFsEP),
        thumbSrc: t.thumbUrl,
        subText:
            "failed" === t.status
                ? (0, a.jsx)(v.E, {
                      variant: "body-xs/normal",
                      color: "text-feedback-critical",
                      children: P.intl.string(T.default["3PeGo2"]),
                  })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(b.y, { type: b.t.SPINNING_CIRCLE_SIMPLE, className: sw.Rk }) : null,
            "failed" === t.status
                ? (0, a.jsx)(nK.Q, {
                      variant: "secondary",
                      textVariant: "body-sm/medium",
                      text: P.intl.string(T.default["WFJ/vb"]),
                      onClick: t.retry,
                  })
                : null,
        ],
    });
}
var sS = n(587157),
    sN = n(347111),
    sI = n(120234),
    sE = n(901173),
    s_ = n(161431),
    sM = n(46653),
    sR = n(695184),
    sT = n(811091),
    sP = n(475458),
    sL = n(957071),
    s$ = n(927659),
    sD = n(351906),
    sq = n(407653),
    sF = n(322915);
function sO(e) {
    let { id: t, projectId: n, suggestions: l, selectedIndex: r, onHover: i, onSelect: s } = e,
        u = (0, c.bG)([sD.A], () => sD.A.hidePersonalInformation ?? !1),
        o = `${t}-users`,
        d = `${t}-files`;
    if (0 === l.length) return null;
    let m = l.map((e, t) =>
            "user" === e.kind
                ? (0, a.jsx)(
                      s$.Ay.User,
                      {
                          index: t,
                          user: e.user,
                          nick: null,
                          status: null,
                          hidePersonalInformation: u,
                          selected: t === r,
                          onHover: i,
                          onClick: s,
                      },
                      e.user.id,
                  )
                : (0, a.jsx)(
                      s$.Ay.Generic,
                      {
                          index: t,
                          text: e.file.name,
                          icon: (0, a.jsx)(sq.A, { projectId: n, file: e.file, className: sF.Vk }),
                          selected: t === r,
                          onHover: i,
                          onClick: s,
                      },
                      e.file.id,
                  ),
        ),
        f = l.findIndex((e) => "file" === e.kind),
        h = -1 === f ? m : m.slice(0, f),
        g = -1 === f ? [] : m.slice(f);
    return (0, a.jsx)(s$.Ay, {
        id: t,
        className: sF.nx,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, a.jsxs)("div", {
            id: t,
            role: "listbox",
            "aria-label": P.intl.string(T.default.Vb3sUg),
            children: [
                h.length > 0
                    ? (0, a.jsx)(sG, { titleId: o, title: P.intl.string(T.default.Vb3sUg), children: h })
                    : null,
                g.length > 0
                    ? (0, a.jsx)(sG, { titleId: d, title: P.intl.string(T.default.zA5KLM), children: g })
                    : null,
            ],
        }),
    });
}
function sG(e) {
    let { titleId: t, title: n, children: l } = e;
    return (0, a.jsxs)("div", {
        role: "group",
        "aria-labelledby": t,
        children: [
            (0, a.jsx)(v.E, { id: t, variant: "body-xs/semibold", color: "text-muted", className: sF.Gf, children: n }),
            l,
        ],
    });
}
var sz = n(719442),
    sU = n(355622),
    sB = n(408018),
    sK = n(186306),
    sH = n(323350),
    sV = n(35277),
    sW = n(68059),
    sX = n(267102),
    sQ = n(259691);
let sZ = (0, aw.createChannelRecord)({ id: "1", type: eb.rbe.DM });
function sY(e) {
    let t = sv.VW.end(e, []);
    return { anchor: t, focus: t };
}
function sJ(e) {
    return (0, sH.WO)(sv.VW.richValue(e), { mode: "raw" });
}
function s0(e, t) {
    ((e.children = (0, sB.x7)(t)), (e.selection = sY(e)), e.onChange());
}
function s1(e) {
    let { attributes: t, children: n, element: l } = e;
    if ("hostInlineVoid" !== l.type) return null;
    let r = new RegExp(rs.$c.source).exec(l.raw)?.[1];
    return null == r
        ? null
        : (0, a.jsxs)("span", { ...t, contentEditable: !1, children: [(0, a.jsx)(sQ.A, { attachmentId: r }), n] });
}
var s2 = n(366811);
function s3(e, t) {
    return e.split("/").some((e, n, l) => e === t && "conjure" === l[n - 1]);
}
function s4(e) {
    let t = s2.A.getState().path;
    return s3(window.location.pathname, e) && (null == t || s3(t, e));
}
function s5(e, t) {
    return null != t && (0, e7.vq)(e) && t.contains(e);
}
var s7 = n(497437),
    s8 = n(465410);
let s9 = "body-md/normal",
    s6 = null;
function ue(e) {
    let { text: t, offering: n, typed: l } = e,
        [r, s] = i.useState(t),
        u = i.useRef(null),
        d = i.useRef(null),
        m = i.useRef(0),
        [f, h] = i.useState(0),
        [g, p] = i.useState(0),
        [x, j] = i.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
    (i.useLayoutEffect(() => {
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
                a = Number.isNaN(r) ? 0 : r,
                i = e.offsetWidth,
                s = l.offsetWidth + a;
            (p(i + a), h(s));
            let o = s + i,
                c = Math.max(n, l.offsetWidth) + a + i,
                m = 0 === c ? 1 : s / c,
                f = 0 === c ? 1 : o / c;
            j({
                frontFrom: 1e3 * (0, sf._R)(m),
                frontTo: 1e3 * (0, sf._R)(f),
                backFrom: 1e3 * (0, sf.T)(m),
                backTo: 1e3 * (0, sf.T)(f),
            });
        }
        let r = new ResizeObserver(l);
        return (l(), r.observe(e), r.observe(t), null != d.current && r.observe(d.current), () => r.disconnect());
    }, [t]),
        i.useEffect(() => {
            m.current = d.current?.offsetWidth ?? 0;
        }, [t]));
    let [b, y] = i.useState(0),
        [k, w] = i.useState(null),
        A = i.useRef(!1),
        C = i.useCallback(() => {
            (w(A.current ? (n ? "through" : "out") : n ? "in" : null), y((e) => e + 1));
        }, [n]);
    i.useEffect(() => {
        A.current = n;
    }, [n, t]);
    let S = "in" === k ? x.backFrom : x.frontFrom,
        N = "out" === k ? x.frontTo : x.backTo,
        I = (0, c.bG)([aE.Ay], () => aE.Ay.useReducedMotion),
        E = t === P.intl.string(T.default.Zc7gML),
        _ = r === t && E;
    function M(e, t, n) {
        let l = null != n;
        return (0, a.jsx)("span", {
            ref: n,
            className: o()(s7.VT, { [s7.qk]: l }),
            style: l
                ? {
                      insetInlineStart: f,
                      "--custom-cap-wipe-delay": `${S}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, N - S)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": l && b > 0 && null != k ? b % 2 : void 0,
            "data-wipe-kind": l ? (k ?? void 0) : void 0,
            children: (0, a.jsx)(sh.e, { shortcut: "tab", className: s7.xT, keyClassName: e }),
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(sm.o, {
                text: t,
                variant: s9,
                delay: null,
                duration: 1e3,
                trailingWidth: g,
                className: o()(s7.xM, { [s7.s2]: l }),
                onStart: C,
                onComplete: () => s(t),
            }),
            M(s7.IS, n || (!I && "out" === k), u),
            (0, a.jsx)("span", {
                ref: d,
                className: s7.QI,
                "aria-hidden": !0,
                children: (0, a.jsx)(v.E, { variant: s9, tag: "span", children: t }),
            }),
            _
                ? (0, a.jsxs)("span", {
                      className: s7.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, a.jsx)(v.E, { variant: s9, tag: "span", className: s7.xM, children: t }),
                          M(s7.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let ut = i.memo(function (e) {
        let {
                projectId: t,
                canSend: n,
                aiPaused: l = !1,
                managedCopy: r = !1,
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
                onModelSettingsChange: A,
                visible: C = !0,
            } = e,
            S = n && !l,
            N = (function (e) {
                let t = i.useContext(sX.Ay),
                    [n] = i.useState(() => {
                        let n = (0, sz.ie)();
                        return (
                            (n.children = (0, sB.x7)(e)),
                            (n.selection = sY(n)),
                            (0, sW.a)({
                                editor: n,
                                chatInputType: sU.oU.GENERIC_RICH_TEXTAREA,
                                channel: sZ,
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
                                    for (let [t, l] of sv.VW.nodes(e, { at: [], match: sv.l5.isText }))
                                        for (let e of t.text.matchAll(rs.$c)) {
                                            let t = e.index ?? 0;
                                            n.push({ raw: e[0], path: l, start: t, end: t + e[0].length });
                                        }
                                    (n.length > 0 &&
                                        sK.o.withMergedEntry(e, () =>
                                            sv.VW.withoutNormalizing(e, () => {
                                                for (let { raw: t, path: l, start: r, end: a } of n.reverse())
                                                    sV.b.textToVoid(
                                                        e,
                                                        { type: "hostInlineVoid", raw: t, children: [{ text: "" }] },
                                                        {
                                                            anchor: { path: l, offset: r },
                                                            focus: { path: l, offset: a },
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
                return (i.useLayoutEffect(() => n.onChange(), [n]), n);
            })(rc.A.getDraft(t)),
            [E, _] = i.useState(() => sJ(N));
        (0, sI.N$)(E);
        let M = i.useRef(E),
            [R, L] = i.useState(null),
            $ = i.useCallback(() => {
                let e = sJ(N);
                (e !== M.current && ((M.current = e), (0, sN.I)(t, e), _(e)),
                    L(
                        (function (e) {
                            let { selection: t } = e;
                            if (null == t || !sv.ZF.isCollapsed(t)) return null;
                            let [n] = sv.VW.node(e, t.anchor.path);
                            return sv.l5.isText(n) ? n.text.slice(0, t.anchor.offset) : null;
                        })(N),
                    ));
            }, [N, t]),
            D = i.useCallback((e) => s0(N, e), [N]),
            q = "" !== E.trim();
        i.useEffect(() => k?.(q), [q, k]);
        let F = i.useRef(t);
        i.useLayoutEffect(() => {
            F.current !== t && ((F.current = t), s0(N, rc.A.getDraft(t)));
        }, [N, t]);
        let O = (0, c.bG)([aE.Ay], () => aE.Ay.isSubmitButtonEnabled),
            [G, U] = i.useState(!1),
            [B, K] = i.useState(!1);
        (i.useEffect(() => {
            s ? K(!1) : (G && K(!0), U(!1));
        }, [s, G]),
            i.useEffect(() => {
                if (!B) return;
                let e = setTimeout(() => K(!1), ul);
                return () => clearTimeout(e);
            }, [B]));
        let {
                drafts: H,
                addFiles: V,
                pasteFiles: W,
                removeDraft: X,
                settled: Q,
                takeRefs: Z,
            } = (0, tn.FM)({ projectId: t, surface: "chat", onUploadFile: h }),
            Y = (0, I.fc)(t),
            J = (0, I.bE)(t),
            ee = i.useRef(J);
        i.useEffect(() => {
            let e = ee.current;
            ((ee.current = J), S && null != e && null != J && J !== e && sv.VW.focus(N));
        }, [J, S, N]);
        let et = "" !== E.trim() || H.length > 0 || y || Y,
            el = S && et && Q,
            [er, ea] = i.useState(null);
        i.useEffect(() => {
            if (null == er) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => ea(null));
                });
            return () => {
                (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
            };
        }, [er]);
        let ei = (0, s_.rU)(t),
            [es, eu] = i.useState(null),
            [eo, ec] = i.useState(0),
            ed = i.useMemo(() => (null != R && S ? (0, sE.OG)(R, R.length) : null), [R, S]),
            em = ed?.start ?? null;
        i.useEffect(() => {
            null == em ? eu(null) : (0, s_.IP)(t);
        }, [em, t]);
        let ef = em === es ? null : ed,
            eh = (function (e, t) {
                let n = (0, c.bG)([eP.Ay], () => eP.Ay.getProject(e), [e]),
                    { creator: l, collaborators: r } = (0, sP.yv)(n),
                    a = (0, c.bG)([sM.default], () => sM.default.getId()),
                    s = null != n && (0, en.pL)(n) ? n.guild_id : void 0,
                    u = t?.toLowerCase() ?? null;
                return (
                    i.useEffect(() => {
                        null != s && null != u && sR.A.requestMembers(s, u, 100);
                    }, [s, u]),
                    (0, c.yK)(
                        [lr.Ay, la.A, nM.default],
                        () => {
                            if (null == u) return [];
                            let e = null != s ? la.A.getGuild(s) : null,
                                t = (t) => (0, sE.mO)(t, u, null != e ? lr.Ay.getNick(e.id, t.id) : null),
                                i = new Set(n?.collaborator_role_ids ?? []),
                                o = null != e && i.has(sT.default.castGuildIdAsEveryoneGuildRoleId(e.id)),
                                c =
                                    null == e
                                        ? []
                                        : lr.Ay.getMemberIds(e.id)
                                              .map((e) => nM.default.getUser(e))
                                              .filter(
                                                  (n) =>
                                                      null != n &&
                                                      t(n) &&
                                                      (o ||
                                                          (lr.Ay.getMember(e.id, n.id)?.roles ?? []).some((e) =>
                                                              i.has(e),
                                                          ) ||
                                                          li.$3({
                                                              permission: eb.xBc.MANAGE_GUILD,
                                                              user: n,
                                                              context: e,
                                                          })),
                                              ),
                                d = new Set();
                            return [...[...(null != l ? [l] : []), ...r].filter(t), ...c].filter(
                                (e) => !(e.id === a || e.bot || d.has(e.id)) && (d.add(e.id), !0),
                            );
                        },
                        [n, s, u, l, r, a],
                    )
                );
            })(t, ef?.text ?? null),
            eg = i.useMemo(() => (null == ef ? [] : (0, sE.l$)(eh, ei, ef.text)), [ef, eh, ei]),
            ep = ef?.text;
        i.useEffect(() => ec(0), [ep]);
        let ex = eg.length > 0,
            ev = Math.min(eo, Math.max(0, eg.length - 1)),
            ej = i.useId(),
            ey = i.useCallback(
                (e) => {
                    let t = eg[e];
                    null != ef &&
                        null != t &&
                        (function (e, t, n) {
                            let { selection: l } = e;
                            if (null == l) return;
                            let { path: r, offset: a } = l.anchor;
                            (sV.b.select(e, { anchor: { path: r, offset: t }, focus: { path: r, offset: a } }),
                                sV.b.insertText(e, `${n} `));
                        })(N, ef.start, "user" === t.kind ? `<@${t.user.id}>` : `<file:${t.file.id}>`);
                },
                [eg, ef, N],
            ),
            ek = i.useCallback(() => {
                if (!el) return;
                let e = Z(),
                    n = Y
                        ? (function (e) {
                              let t = (0, I.K7)(e);
                              if (null == t || !(0, nf.C)(t)) return null;
                              let n = t.history.present,
                                  l = t.keptStill ?? (0, I.C)(e);
                              return (
                                  (0, I.My)(e),
                                  function (t) {
                                      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                          { nonce: a, messageKey: i } = (0, ez.Wx)(e, t, r),
                                          s = { projectId: e, nonce: a, job: null, thumbUrl: null };
                                      (nh.set(i, s),
                                          (s.job = (0, nf.B)({
                                              capture: (t) => (0 === t ? l : (0, I.C)(e)),
                                              composite: (e) =>
                                                  (async function (e, t) {
                                                      let n = await createImageBitmap(e);
                                                      try {
                                                          let e = { width: n.width, height: n.height },
                                                              l = tO(e),
                                                              r = tO(e);
                                                          if (null == l || null == r) return null;
                                                          return (
                                                              tF(r.ctx, t, e),
                                                              l.ctx.drawImage(n, 0, 0),
                                                              l.ctx.drawImage(r.canvas, 0, 0),
                                                              await l.toBlob()
                                                          );
                                                      } finally {
                                                          n.close();
                                                      }
                                                  })(e, n),
                                              upload: (t) =>
                                                  (0, e9.vX)(e, new File([t], "sketch.webp", { type: t.type })),
                                              isStaged: (t) => (0, e9.n6)(e, t.id),
                                              send: (n) => (0, ez.dv)(e, t, [...r, n], { nonce: a }),
                                              update: (e, t) => {
                                                  (null != t &&
                                                      null == s.thumbUrl &&
                                                      (s.thumbUrl = URL.createObjectURL(t)),
                                                      np(i, {
                                                          status: e,
                                                          thumbUrl: s.thumbUrl,
                                                          retry: () => s.job?.retry(),
                                                      }),
                                                      "sent" === e &&
                                                          (nh.delete(i),
                                                          window.setTimeout(() => {
                                                              (np(i, null),
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
                        a = n.split("\n", 1)[0] ?? "";
                    if (null == e || "" === a) return a;
                    null == s6 && (s6 = document.createElement("canvas").getContext("2d"));
                    let i = s6;
                    if (null == i) return a;
                    let s = getComputedStyle(e);
                    i.font = "" !== s.font ? s.font : `${s.fontWeight} ${s.fontSize} ${s.fontFamily}`;
                    let u =
                        t > 0
                            ? t
                            : ((l = parseFloat(s.paddingInlineStart)),
                              (r = parseFloat(s.paddingInlineEnd)),
                              e.clientWidth - (Number.isNaN(l) ? 0 : l) - (Number.isNaN(r) ? 0 : r));
                    if (u <= 0 || i.measureText(a).width <= u) return a;
                    let o = 0,
                        c = a.length;
                    for (; o < c;) {
                        let e = Math.ceil((o + c) / 2);
                        i.measureText(a.slice(0, e)).width <= u ? (o = e) : (c = e - 1);
                    }
                    let d = a.slice(0, o),
                        m = d.lastIndexOf(" ");
                    return (m > 0 ? d.slice(0, m) : d).trimEnd();
                })(ua(eE.current), eF.current, (0, sE.Lj)(E));
                ("" !== l && ea(l), D(""), eu(null));
            }, [el, Y, t, E, d, Z, D]),
            ew = i.useCallback(
                (e) => {
                    (e.preventDefault(), ek());
                },
                [ek],
            ),
            eA = i.useCallback(() => {
                null != m && !G && (U(!0), m(), S && sv.VW.focus(N));
            }, [m, G, S, N]);
        !(function (e) {
            let { active: t, projectId: n, scopeRef: l, onEscape: r } = e,
                a = i.useRef(r);
            (i.useEffect(() => {
                a.current = r;
            }),
                i.useEffect(() => {
                    if (!t) return;
                    let e = s5(document.activeElement, l?.current);
                    function r(t) {
                        e = s5(t.target, l?.current);
                    }
                    function i(t) {
                        var r, i, s;
                        "Escape" === t.key &&
                            !t.isComposing &&
                            s4(n) &&
                            (0, I.K7)(n)?.active !== !0 &&
                            !(0, z._c)(n).active &&
                            ((r = t.target),
                            (i = l?.current),
                            (s = e),
                            ((0, e7.vq)(r) && r !== document.body && r !== document.documentElement
                                ? !!s5(r, i) && null == r.closest('input, textarea, [contenteditable="true"]')
                                : s) && (t.preventDefault(), t.stopPropagation(), a.current()));
                    }
                    return (
                        window.addEventListener("keydown", i, !0),
                        window.addEventListener("pointerdown", r, !0),
                        window.addEventListener("focusin", r, !0),
                        () => {
                            (window.removeEventListener("keydown", i, !0),
                                window.removeEventListener("pointerdown", r, !0),
                                window.removeEventListener("focusin", r, !0));
                        }
                    );
                }, [t, n, l]));
        })({ active: s && null != m && C, projectId: t, scopeRef: f, onEscape: eA });
        let eC = (s && null != m) || B,
            eS = null == v || "" !== E || !S || u || y ? null : v,
            eN = i.useCallback(
                (e) => {
                    if (ex && !e.shiftKey && !e.metaKey && !e.ctrlKey && !e.altKey) {
                        let t = eg.length;
                        if ("ArrowDown" === e.key || "ArrowUp" === e.key) {
                            (e.preventDefault(), ec((ev + ("ArrowDown" === e.key ? 1 : t - 1)) % t));
                            return;
                        }
                        if ("Enter" === e.key || "Tab" === e.key) {
                            (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), ey(ev));
                            return;
                        }
                        if ("Escape" === e.key) {
                            (e.preventDefault(), e.stopPropagation(), eu(ef?.start ?? null));
                            return;
                        }
                    }
                    if ("Escape" === e.key && (0, I.K7)(t)?.active === !0) {
                        (e.preventDefault(), e.stopPropagation(), (0, I.V9)(t));
                        return;
                    }
                    if ("Escape" === e.key && s && null != m && s4(t)) {
                        (e.preventDefault(), e.stopPropagation(), eA());
                        return;
                    }
                    if ("Tab" === e.key && !e.shiftKey && null != eS) {
                        (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), D(eS));
                        return;
                    }
                    if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                        null != g && (e.preventDefault(), g());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), ek());
                },
                [ek, g, s, m, eA, eS, D, ex, eg.length, ev, ey, ef, t],
            ),
            eI = i.useCallback(
                (e) => {
                    S && W(e);
                },
                [S, W],
            );
        (0, sj.Vo)({
            event: eb.jej.GLOBAL_CLIPBOARD_PASTE,
            handler: (e) => {
                let { event: t } = e;
                return eI(t);
            },
        });
        let eE = i.useRef(null),
            e_ = i.useCallback(() => {
                let e = M.current;
                x?.((0, sE.Lj)(e), () => {
                    M.current === e && D("");
                });
            }, [x, D]),
            [eM, eR] = i.useState(0),
            [eT, eL] = i.useState(!1);
        i.useEffect(() => {
            if (0 === E.length) return void eL(!1);
            let e = ua(eE.current);
            if (null != e) {
                let t = (function (e) {
                    let t = e.ownerDocument.getSelection(),
                        n = e.closest("form");
                    if (null == n || null == t || 0 === t.rangeCount || !e.contains(t.anchorNode)) return null;
                    let l = t.getRangeAt(0).getBoundingClientRect();
                    return 0 === l.height ? null : l.left - n.getBoundingClientRect().left;
                })(e);
                null != t && eR(t);
            }
            eL(!0);
            let t = setTimeout(() => eL(!1), un);
            return () => clearTimeout(t);
        }, [E]);
        let e$ = i.useMemo(() => ({ "--custom-glow-x": `${eM}px` }), [eM]),
            eD = eT ? ` ${s7.EB}` : "",
            eq = u
                ? P.intl.string(T.default.qqlUiW)
                : l
                  ? P.intl.string(T.default.Z0hyNL)
                  : S
                    ? y
                        ? P.intl.string(T.default.knUjL3)
                        : Y
                          ? P.intl.string(T.default["6rXxwa"])
                          : b
                            ? P.intl.string(T.default.VxH5vv)
                            : j
                              ? P.intl.string(T.default.IevBEw)
                              : P.intl.string(s ? T.default["0BJa/0"] : r ? T.default.dDDSuF : T.default.TEeU7z)
                    : P.intl.string(T.default.zZ9NgM),
            eF = i.useRef(0),
            eO = i.useRef(null),
            eG = i.useCallback((e) => {
                if ((eO.current?.disconnect(), null == e)) return;
                eF.current = e.clientWidth;
                let t = new ResizeObserver(() => {
                    eF.current = e.clientWidth;
                });
                (t.observe(e), (eO.current = t));
            }, []),
            eU = i.useId(),
            eB = i.useId(),
            eK = null != eS,
            eH = er ?? eS ?? eq,
            eV = "" === E && "" !== eH;
        return (0, a.jsxs)("form", {
            onSubmit: ew,
            className: s7.DA,
            children: [
                ex
                    ? (0, a.jsx)(sO, {
                          id: ej,
                          projectId: t,
                          suggestions: eg,
                          selectedIndex: ev,
                          onHover: ec,
                          onSelect: ey,
                      })
                    : null,
                H.length > 0 || Y
                    ? (0, a.jsxs)("div", {
                          className: s7.lN,
                          children: [
                              H.map((e) => (0, a.jsx)(tn.Nl, { draft: e, onRemove: X }, e.localId)),
                              Y ? (0, a.jsx)(sA, { projectId: t }) : null,
                          ],
                      })
                    : null,
                (0, a.jsx)("span", { className: `${s7.wg} ${s7.LP}${eD}`, style: e$, "aria-hidden": !0 }),
                (0, a.jsx)("span", { className: `${s7.wg} ${s7.L3}${eD}`, style: e$, "aria-hidden": !0 }),
                (0, a.jsxs)("div", {
                    className: s7.VA,
                    ref: eE,
                    children: [
                        (0, a.jsx)(sL.A, {
                            navId: "conjure-composer-attach",
                            disabled: !S,
                            buttonClassName: `${s7.Y0} ${s7.nu}`,
                            iconClassName: s7.Qu,
                            onAddFiles: V,
                            onImport: p,
                            onSendToOtherProjects: null != x ? e_ : void 0,
                        }),
                        eV
                            ? (0, a.jsx)("div", {
                                  ref: eG,
                                  className: s7.ar,
                                  "aria-hidden": "true",
                                  children: (0, a.jsx)(
                                      ue,
                                      { text: eH, offering: eK && null == er, typed: null != er },
                                      C ? "visible" : "hidden",
                                  ),
                              })
                            : null,
                        (0, a.jsx)(t5.A, { id: eB, children: P.intl.string(T.default.ldNl9x) }),
                        (0, a.jsx)(rs.Fu.Provider, {
                            value: t,
                            children: (0, a.jsx)(sx.A, {
                                editor: N,
                                containerClassName: o()(s7.sq, s8.dv),
                                className: s7.jp,
                                readOnly: !S,
                                canFocus: S,
                                onChange: $,
                                onBlur: () => L(null),
                                onKeyDown: eN,
                                onPaste: eI,
                                renderExtraElement: s1,
                                "aria-labelledby": eB,
                                "aria-describedby": eV ? eU : void 0,
                                "aria-autocomplete": "list",
                                "aria-haspopup": "listbox",
                                "aria-expanded": ex,
                                "aria-controls": ex ? ej : void 0,
                                "aria-activedescendant": ex ? ((0, s$.aI)(ev) ?? void 0) : void 0,
                            }),
                        }),
                        eV ? (0, a.jsx)(t5.A, { id: eU, children: eq }) : null,
                        (0, a.jsx)("div", {
                            className: s7.Sz,
                            onMouseDown: eC ? ur : void 0,
                            children: eC
                                ? (0, a.jsx)(e6.m, {
                                      text: P.intl.string(T.default.wiguT0),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)("button", {
                                          type: "button",
                                          className: `${s7.Y0} ${s7.$E} ${s7.PG}`,
                                          disabled: G || !s,
                                          onClick: eA,
                                          "aria-label": P.intl.string(T.default.wiguT0),
                                          children: (0, a.jsx)(rm.StopIcon, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : w?.tierSettings != null && null != A
                                  ? (0, a.jsx)(sS.A, {
                                        settings: w.tierSettings,
                                        tiers: w.tiers,
                                        choices: w.choices,
                                        disabled: !S,
                                        onChange: A,
                                        className: `${s7.Y0} ${s7.$E}`,
                                        icon: (0, a.jsx)(sg.FiltersHorizontalIcon, {
                                            size: "custom",
                                            width: 20,
                                            height: 20,
                                            color: "currentColor",
                                        }),
                                    })
                                  : null,
                        }),
                        O
                            ? (0, a.jsxs)("div", {
                                  className: s7.fF,
                                  children: [
                                      (0, a.jsx)("div", { className: s7.MT }),
                                      (0, a.jsx)("button", {
                                          type: "submit",
                                          className: s7.rt,
                                          disabled: !el,
                                          "aria-label": P.intl.string(T.default.rxW2cl),
                                          children: (0, a.jsx)(sp.SendMessageIcon, {
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
    un = 1500,
    ul = 1e3;
function ur(e) {
    e.preventDefault();
}
function ua(e) {
    return e?.querySelector("[data-slate-editor]") ?? null;
}
var ui = n(709753),
    us = n(540338);
function uu(e) {
    if (e.at(-1)?.role !== "assistant") return null;
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if ("assistant" === n.role) {
            if (!(0, tY.BL)(n) || "plan_implemented" === n.kind) return null;
            if (null != n.proposal) return n.render_id;
        }
    }
    return null;
}
var uo = n(986109);
let uc = i.createContext(null);
function ud(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: r,
            highlighted: s = !1,
            continuation: u = !1,
            onContextMenu: c,
        } = e,
        d = i.useContext(uc),
        [m, f] = i.useState(() => aE.Ay.useReducedMotion || (null != l && d?.current.has(l) === !0)),
        h = i.useCallback((e) => {
            e.target === e.currentTarget && f(!0);
        }, []);
    return (0, a.jsx)("li", {
        onContextMenu: c,
        onAnimationEnd: m ? void 0 : h,
        "data-conjure-entrance": !0,
        "data-role": t,
        "data-conjure-message": r,
        "data-conjure-row-key": l,
        className: o()(uo.xk, { [uo.g5]: m, [uo.Qo]: s, [uo.q3]: u }),
        children: n,
    });
}
let um = new Map();
function uf(e, t, n) {
    let l = 0;
    for (let r = e.length - 1; r >= 0 && e[r].created_at > t; r--) {
        let t = e[r];
        "user" === t.role && (null == t.user_id || t.user_id === n) && l++;
    }
    return l;
}
let uh = "live_behind",
    ug = "conjureTipDismissals",
    up = new Set(),
    ux = new Set(),
    uv = 0;
function uj() {
    let e = iG.w.get(ug);
    return { forever: e?.forever ?? [], app: e?.app ?? {}, anchor: e?.anchor ?? {} };
}
function ub(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    switch (e.dismissal) {
        case void 0:
            return !1;
        case "session":
            var l;
            return up.has(((l = e.id), `${t}:${l}`));
        case "anchor":
            return null != n && uj().anchor[t]?.[e.id] === n;
        case "app":
            return uj().app[t]?.includes(e.id) === !0;
        case "forever":
            return uj().forever.includes(e.id);
    }
}
function uy(e) {
    return (ux.add(e), () => ux.delete(e));
}
function uk(e, t) {
    let n = t?.type === "remixed" ? t.settings_keys : void 0;
    return (0, c.bG)([l1.A], () => null != n && n.length > 0 && lQ({ keys: n }, l1.A.getSettings(e)), [n, e]) &&
        null != n
        ? { keys: n, note: P.intl.string(T.default.F2yVHg) }
        : null;
}
function uw(e) {
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
let uA = [12e4];
var uC = n(292771);
function uS(e) {
    let { presentation: t, render: n } = e,
        l = (0, c.bG)([aE.Ay], () => aE.Ay.useReducedMotion),
        [r, s] = i.useState([{ presentation: t, leaving: !1 }]),
        u = r.find((e) => !e.leaving)?.presentation;
    u !== t &&
        s([
            ...r.filter((e) => e.presentation !== t).map((e) => ({ ...e, leaving: !0 })),
            { presentation: t, leaving: !1 },
        ]);
    let d = i.useRef(null),
        m = i.useRef(null),
        f = i.useRef(null),
        h = i.useRef(u);
    i.useLayoutEffect(() => {
        let e,
            t,
            n = d.current;
        if (null == n) return;
        let r = n.querySelector('[data-tip-layer="active"]'),
            a = r?.querySelector("[data-conjure-tip-icon]"),
            i = m.current,
            s = f.current,
            o = r?.offsetHeight ?? 0,
            c =
                null != a
                    ? ((e = n.getBoundingClientRect()),
                      { left: (t = a.getBoundingClientRect()).left - e.left, top: t.top - e.top, width: t.width })
                    : null;
        ((m.current = c), (f.current = o));
        let g = h.current !== u;
        if (((h.current = u), !g || l || null == s || null == i || null == a || null == c)) return;
        let p = i.width / Math.max(1, c.width);
        (a.animate(
            [
                {
                    transform: `translate(${i.left - c.left}px, ${i.top - c.top}px) scale(${p})`,
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
        i.useEffect(() => {
            if (!g) return;
            let e = setTimeout(() => s((e) => e.filter((e) => !e.leaving)), 260);
            return () => clearTimeout(e);
        }, [g, r]),
        (0, a.jsx)("div", {
            ref: d,
            className: uC.wg,
            children: r.map((e) =>
                (0, a.jsx)(
                    "div",
                    {
                        "data-tip-layer": e.leaving ? "leaving" : "active",
                        "aria-hidden": e.leaving || void 0,
                        className: o()(uC.qd, e.leaving ? uC.dv : uC.Hu),
                        children: n(e.presentation),
                    },
                    e.presentation,
                ),
            ),
        })
    );
}
function uN(e) {
    return null != e && !e.publishing && "review_permissions" === e.action;
}
var uI = n(247171);
function uE(e) {
    let { icon: t, tone: n, firstLine: l, className: r, children: i } = e;
    return (0, a.jsxs)("div", {
        className: o()(uI.row, r),
        children: [
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: l,
                color: "none",
                className: o()(uI.gutter, uI[n]),
                "aria-hidden": !0,
                children: (0, a.jsx)(t, { size: "sm", color: "currentColor", "data-conjure-tip-icon": !0 }),
            }),
            (0, a.jsx)("div", { className: uI.content, children: i }),
        ],
    });
}
var u_ = n(830205);
function uM(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(uE, {
        icon: t,
        tone: "muted",
        firstLine: "body-sm/normal",
        className: u_.aK,
        children: (0, a.jsxs)("div", {
            className: u_.n8,
            children: [
                (0, a.jsx)(v.E, {
                    tag: "div",
                    variant: "body-sm/normal",
                    color: "text-muted",
                    className: u_.Qq,
                    children: l,
                }),
                null != n
                    ? (0, a.jsx)("div", {
                          className: u_.X8,
                          children: (0, a.jsx)(e6.m, {
                              text: P.intl.string(P.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(tc.K, {
                                  "aria-label": P.intl.string(P.t.WAI6xu),
                                  icon: e3.XSmallIcon,
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
function uR(e) {
    let { projectId: t } = e,
        n = i.useContext(eK.bI);
    return (0, a.jsx)(uM, {
        icon: iu.ShieldIcon,
        children: P.intl.format(T.default["0S9HY8"], {
            onReview: async () => {
                null != n && (await (0, eK.vL)(t, n.guildId));
            },
        }),
    });
}
var uT = n(443865),
    uP = n(716502);
function uL(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(uE, {
        icon: t,
        tone: "brand",
        firstLine: "body-md/semibold",
        className: uP.Nr,
        children: (0, a.jsxs)("section", {
            className: uP.Qs,
            children: [
                l,
                null != n
                    ? (0, a.jsx)("div", {
                          className: uP.X8,
                          children: (0, a.jsx)(e6.m, {
                              text: P.intl.string(P.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(tc.K, {
                                  "aria-label": P.intl.string(P.t.WAI6xu),
                                  icon: e3.XSmallIcon,
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
function u$(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, {
        tag: "div",
        variant: "body-md/semibold",
        color: "text-strong",
        className: uP.DD,
        children: t,
    });
}
function uD(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, {
        tag: "div",
        variant: "body-sm/normal",
        color: "text-muted",
        className: uP.rf,
        children: t,
    });
}
function uq(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: uP.o1, children: t });
}
var uF = n(95635);
function uO(e) {
    let { projectId: t, publish: n, onDismiss: l } = e,
        r = (0, eV.A)(t, n);
    return (0, a.jsx)(uM, {
        icon: uF.UploadIcon,
        onDismiss: l,
        children: P.intl.format(T.default.fWfeZ8, { onPublish: () => r("outdated_notice") }),
    });
}
let uG = [
    {
        id: "bot_permissions",
        priority: 3,
        resolve: function (e) {
            let { turn: t, publish: n } = e;
            return null != t && uN(n) ? "hint" : null;
        },
        render: (e, t) => {
            let {
                context: { projectId: n },
            } = t;
            return (0, a.jsx)(uR, { projectId: n });
        },
    },
    {
        id: uh,
        priority: 2,
        resolve: function (e) {
            var t;
            let { turn: n, publish: l, draftHasText: r, idleMs: a } = e;
            return null == n ||
                r ||
                null == l ||
                l.publishing ||
                !l.isUpdate ||
                null != l.disabledReason ||
                a < 12e4 ||
                (null != n.publishCta && i$(l, n.publishCta))
                ? null
                : null != (t = e.messagesSinceShown(uh)) && t > 0 && t < 10
                  ? null
                  : "hint";
        },
        dismissal: "session",
        render: (e, t) => {
            let {
                context: { projectId: n, publish: l },
                dismiss: r,
            } = t;
            return null != l ? (0, a.jsx)(uO, { projectId: n, publish: l, onDismiss: r }) : null;
        },
    },
    {
        id: "ideas_intro",
        priority: 1,
        resolve: function (e) {
            let { turn: t, agentIdle: n, publish: l, justRemixed: r, noTurnsYet: a, ideasIntroAnchorId: i } = e;
            return !n || null == i || uN(l) ? null : null != t || r || a ? "card" : null;
        },
        dismissal: "anchor",
        render: (e, t) => {
            let {
                context: { onAskForIdeas: n },
                dismiss: l,
            } = t;
            return (0, a.jsxs)(uL, {
                icon: uT.LightbulbIcon,
                onDismiss: l,
                children: [
                    (0, a.jsx)(u$, { children: P.intl.string(T.default.OJlbhX) }),
                    (0, a.jsx)(uD, { children: P.intl.string(T.default["3vJBni"]) }),
                    (0, a.jsx)(uq, {
                        children: (0, a.jsx)(d.$, {
                            variant: "primary",
                            size: "sm",
                            text: P.intl.string(T.default["U/bLzU"]),
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
var uz = n(817921);
function uU(e) {
    let { projectId: t, messages: n, draftHasText: l, onAskForIdeas: r } = e,
        s = (function (e, t, n, l, r) {
            let a = (function (e, t, n, l, r) {
                let a,
                    s = (0, eK.Ay)(e),
                    u = (0, c.bG)([nM.default], () => nM.default.getCurrentUser()?.id),
                    o = t.at(-1),
                    d = null != o ? Math.max(o.created_at, o.finished_at ?? 0, o.settled_at ?? 0) : null,
                    m = (function (e, t) {
                        let [n, l] = i.useState(() => Date.now());
                        return (
                            i.useEffect(() => {
                                if (null == e) return;
                                let r = (function (e, t, n, l) {
                                    let r = t.map((t) => e + t);
                                    if (r.some((e) => e > n && e <= l)) return 0;
                                    let a = r.filter((e) => e > l);
                                    return a.length > 0 ? Math.min(...a) - l : null;
                                })(e, t, n, Date.now());
                                if (null == r) return;
                                let a = setTimeout(() => l(Date.now()), r);
                                return () => clearTimeout(a);
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
                                if ((0, tY.BL)(n)) return n;
                                if (!(0, tY.B0)(e, t)) break;
                            }
                        }
                        return null;
                    })(t),
                    h = null == f || uw(f) ? null : f,
                    g = (function (e) {
                        for (let t = e.length - 1; t >= 0; t--) {
                            let n = e[t];
                            if ("publish_notice" === n.kind && n.publishNotice?.commands_failed !== !0) return n;
                        }
                        return null;
                    })(t),
                    p = g?.publishNotice?.update === !1 && 0 === uf(t, g.created_at, u) ? g.id : null,
                    x = o?.projectEvent?.type === "remixed" ? o.projectEvent : null,
                    v = x?.id ?? p,
                    j = uk(e, x),
                    b = x?.settings_keys?.length ?? 0,
                    y = (0, c.bG)([l1.A], () => b > 0 && null == l1.A.getSettings(e), [b, e]),
                    k = (0, ui.WT)(e);
                return {
                    projectId: e,
                    turn: h,
                    publish: s,
                    draftHasText: n,
                    agentIdle:
                        (null == (a = (0, tY.Ji)(t)) || !!(0, tY.B0)(t, t.lastIndexOf(a))) &&
                        (null == f || !uw(f)) &&
                        null == uu(t) &&
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
                        let l = um.get(`${e}:${n}`);
                        return null != l ? uf(t, l, u) : null;
                    },
                    isDismissed: (t) => ub(t, e, v),
                    onAskForIdeas: l,
                };
            })(t, n, l, r, uA);
            i.useSyncExternalStore(uy, () => uv);
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
                })(e, a, a.isDismissed),
                o = [s, u].filter((e) => null != e);
            return (
                i.useEffect(() => {
                    let e = Date.now();
                    for (let { tip: n } of o)
                        0 !== a.messagesSinceShown(n.id) &&
                            (function (e, t, n) {
                                um.set(`${e}:${t}`, n);
                            })(t, n.id, e);
                }),
                o.map((e) => ({
                    ...e,
                    options: {
                        context: a,
                        dismiss:
                            null != e.tip.dismissal
                                ? () =>
                                      (function (e, t) {
                                          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                                          if (null == e.dismissal || ub(e, t, n)) return;
                                          let l = uj();
                                          switch (e.dismissal) {
                                              case "session":
                                                  var r;
                                                  up.add(((r = e.id), `${t}:${r}`));
                                                  break;
                                              case "anchor":
                                                  if (null == n) return;
                                                  iG.w.set(ug, {
                                                      ...l,
                                                      anchor: { ...l.anchor, [t]: { ...l.anchor[t], [e.id]: n } },
                                                  });
                                                  break;
                                              case "app":
                                                  iG.w.set(ug, {
                                                      ...l,
                                                      app: { ...l.app, [t]: [...(l.app[t] ?? []), e.id] },
                                                  });
                                                  break;
                                              case "forever":
                                                  iG.w.set(ug, { ...l, forever: [...l.forever, e.id] });
                                          }
                                          (uv++, ux.forEach((e) => e()));
                                      })(e.tip, t, a.ideasIntroAnchorId)
                                : void 0,
                    },
                }))
            );
        })(uG, t, n, l, r);
    return 0 === s.length
        ? null
        : (0, a.jsx)(ud, {
              role: "assistant",
              continuation: !0,
              children: (0, a.jsx)("div", {
                  className: uz.X,
                  children: s.map((e) => {
                      let { tip: t, presentation: n, options: l } = e;
                      return (0, a.jsx)(uS, { presentation: n, render: (e) => t.render(e, l) }, t.id);
                  }),
              }),
          });
}
var uB = n(52133),
    uK = n(732159),
    uH = n(888366),
    uV = n(862026),
    uW = n(291192);
function uX(e) {
    let { projectId: t, contextSwitch: n } = e,
        l = i.useId(),
        r = (0, uV.L)(t, n);
    if (null == r) return null;
    let { action: s } = r;
    return (0, a.jsxs)("div", {
        className: uW.Ac,
        role: "group",
        "aria-labelledby": l,
        children: [
            (0, a.jsxs)("div", {
                className: uW.Sp,
                children: [
                    (0, a.jsx)("span", { className: uW.q3 }),
                    (0, a.jsxs)("span", {
                        className: uW.g8,
                        children: [
                            (0, a.jsx)(uH.ChatPlusIcon, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, a.jsx)(v.E, {
                                id: l,
                                tag: "span",
                                variant: "body-xs/semibold",
                                color: "text-default",
                                children: r.label,
                            }),
                        ],
                    }),
                    (0, a.jsx)("span", { className: uW.q3 }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: uW.nM,
                role: "status",
                children: [
                    (0, a.jsxs)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: [
                            r.body,
                            null != s
                                ? (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          " ",
                                          (0, a.jsx)(nK.Q, {
                                              text: s.text,
                                              textVariant: "body-sm/medium",
                                              disabled: s.disabled,
                                              onClick: () => {
                                                  var e;
                                                  return s.confirm
                                                      ? ((e = s.onPress),
                                                        void (0, H.mM)(() =>
                                                            Promise.resolve((t) =>
                                                                (0, a.jsx)(uK.u, {
                                                                    ...t,
                                                                    title: P.intl.string(T.default["i+xjZM"]),
                                                                    subtitle: P.intl.string(T.default.fMBZmD),
                                                                    confirmText: P.intl.string(T.default.i5f3Uo),
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
                        ? (0, a.jsx)(v.E, { variant: "body-xs/normal", color: "text-muted", children: r.note })
                        : null,
                ],
            }),
        ],
    });
}
var uQ = n(345942),
    uZ = n(727419),
    uY = n(576705);
function uJ(e) {
    let { guildId: t, update: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            " ",
            P.intl.format(n ? T.default.esEGL5 : T.default["XrN+Bg"], {
                onOpen: () => uZ.A.open(t, eb.BEX.GUILD_AUTOMOD),
            }),
        ],
    });
}
var u0 = n(976860);
function u1(e) {
    return (0, c.bG)([eP.Ay, ab.A], () => {
        let t = eP.Ay.getProject(e);
        return null == t ? "" : (ab.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
var u2 = n(951465),
    u3 = n(369455);
function u4(e) {
    var t, n, l;
    let r,
        i,
        { projectId: s, notice: u } = e,
        o = u1(s),
        d =
            null ==
            (i = (0, c.bG)([eP.Ay, la.A], () => {
                let e = eP.Ay.getProject(s);
                return null == e || "guild" !== e.install_scope || null == e.guild_id
                    ? null
                    : (la.A.getGuild(e.guild_id) ?? null);
            }))
                ? null
                : { guildId: i.id, name: i.name },
        m = (0, c.cf)([eP.Ay, eU.A, la.A, uY.A], () => {
            let e = eP.Ay.getProject(s);
            if (null == e || "guild" !== e.install_scope || null == e.guild_id) return { automod: !1, guildId: null };
            let t =
                    e.supported_surfaces?.includes(en.q7.AUTOMOD) === !0 ||
                    eU.A.getPublishStatus(s)?.surface === "automod",
                n = la.A.getGuild(e.guild_id),
                l = null != n && uY.A.can(eb.xBc.MANAGE_GUILD, n);
            return { automod: t, guildId: t && l ? e.guild_id : null };
        });
    return (0, a.jsxs)(v.E, {
        variant: "body-md/normal",
        color: "text-default",
        children: [
            P.intl.format(
                ((t = u),
                (n = d?.name ?? null),
                (l = m.automod),
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
                        null != d && (0, uQ.u)(d.guildId);
                    },
                },
            ),
            null != m.guildId
                ? (0, a.jsx)(uJ, { guildId: m.guildId, update: u.update })
                : !m.automod && u.update && null != u.published_revision
                  ? (0, a.jsx)(u5, { projectId: s, notice: u })
                  : null,
        ],
    });
}
function u5(e) {
    let { projectId: t, notice: n } = e,
        l = (function (e, t) {
            let n = s.useContext(eK.bI)?.guildId ?? null,
                l = t.published_revision ?? null,
                { sent: r, canOffer: a } = (0, c.cf)(
                    [eU.A, eP.Ay],
                    () => {
                        let r = eU.A.getPublishStatus(e),
                            a = eP.Ay.getProject(e);
                        return {
                            sent:
                                null == l ? null : (r?.patchNotesSent?.find((e) => e.publishedRevision === l) ?? null),
                            canOffer:
                                null != l &&
                                t.update &&
                                l === r?.publishedRevision &&
                                null != n &&
                                null != a &&
                                "guild" === a.install_scope &&
                                (0, eP.jf)(a),
                        };
                    },
                    [e, l, t.update, n],
                );
            return null != r
                ? { state: "sent", sent: r }
                : a && null != l && null != n
                  ? { state: "offer", publishedRevision: l, fallbackGuildId: n }
                  : null;
        })(t, n);
    return null == l
        ? null
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  " ",
                  "sent" === l.state
                      ? P.intl.format(T.default["35VEu5"], {
                            sentHook: (e, t) =>
                                (0, a.jsx)(
                                    t1.D,
                                    {
                                        tag: "a",
                                        role: "link",
                                        className: u3.Z,
                                        onClick: () =>
                                            (function (e) {
                                                let { guildId: t, channelId: n, messageId: l } = e;
                                                (0, u0.pX)(eb.BVt.CHANNEL(t, n, l));
                                            })(l.sent),
                                        children: e,
                                    },
                                    t,
                                ),
                        })
                      : P.intl.format(T.default["6/zJpD"], {
                            onSend: () => {
                                let e = (function (e, t) {
                                    let { publishedRevision: n, fallbackGuildId: l } = t,
                                        r = eP.Ay.getProject(e),
                                        a = null == r ? null : (0, eK.KL)(r, l);
                                    return null == r || null == a
                                        ? null
                                        : {
                                              projectId: e,
                                              guildId: a,
                                              applicationId: r.application_id,
                                              projectName: r.name,
                                              publishedRevision: n,
                                          };
                                })(t, l);
                                null != e && (0, u2.A)(e);
                            },
                        }),
              ],
          });
}
var u7 = n(73153),
    u8 = n(505527),
    u9 = n(367790),
    u6 = n(354777),
    oe = n(491182),
    ot = n(74096),
    on = n(549587),
    ol = n(448368),
    or = n(21299),
    oa = n(538355),
    oi = n(715628),
    os = n(752636),
    ou = n(9842),
    oo = n(589022),
    oc = n(967198),
    od = n(531685),
    om = n(503275);
let of = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function oh(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function og(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function op(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let r = og(e, t),
        a = e.codePointAt(t);
    if (
        (null != a &&
            (8205 === a ||
                (a >= 65024 && a <= 65039) ||
                (a >= 127995 && a <= 127999) ||
                (a >= 768 && a <= 879) ||
                (a >= 8400 && a <= 8447) ||
                (a >= 65056 && a <= 65071) ||
                (a >= 917536 && a <= 917631))) ||
        8205 === r
    )
        return !0;
    if (oh(r) && oh(a)) {
        let n = 0,
            l = t;
        for (; n < 32 && oh(og(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function ox(e, t) {
    let { streaming: n } = t,
        l = (0, c.bG)([aE.Ay], () => aE.Ay.useReducedMotion),
        r = n && !l,
        [a, s] = i.useState(() => ({ target: e, length: e.length })),
        u = a;
    (u.target !== e &&
        (u = {
            target: e,
            length: r
                ? (function (e, t, n) {
                      let l = Math.min(Math.max(n, 0), e.length);
                      if (0 === l) return 0;
                      if (t.length >= l && t.startsWith(e.slice(0, l))) return l;
                      let r = Math.min(l, t.length),
                          a = 0;
                      for (; a < r && e.charCodeAt(a) === t.charCodeAt(a);) a++;
                      for (; a > 0 && op(t, a);) a--;
                      return a;
                  })(u.target, e, u.length)
                : e.length,
        }),
        r || u.length === e.length || (u = { target: e, length: e.length }),
        u !== a && s(u));
    let o = r && u.length < e.length,
        d = i.useRef(u);
    i.useLayoutEffect(() => {
        d.current = u;
    });
    let m = i.useRef(0),
        f = i.useRef(0);
    (i.useEffect(() => {
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
                                    a = t.length - r;
                                if (a <= 0) return r;
                                if (a > 900) return t.length;
                                let i = Math.min(
                                    120,
                                    Math.max(1, Math.round(Math.max(0.16, a / 280) * Math.max(l, 0))),
                                );
                                var s = (function (e, t, n) {
                                    if (n >= e.length) return n;
                                    let l = n;
                                    for (; l > t + 1 && n - l < 12 && of.has(e.charAt(l - 1));) l--;
                                    return of.has(e.charAt(l - 1)) ? n : l;
                                })(t, r, Math.min(t.length, r + i));
                                let u = s;
                                for (; u < t.length && u - s < 32 && op(t, u);) u++;
                                return u;
                            })({ target: e.target, revealed: e.length, elapsedMs: n });
                        l !== e.length && s({ target: e.target, length: l });
                    }
                    m.current = requestAnimationFrame(e);
                })),
                () => cancelAnimationFrame(m.current)
            );
    }, [o]),
        i.useEffect(() => {
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
var ov = n(624479),
    oj = n(890377),
    ob = n(92446),
    oy = n(957565),
    ok = n(180227);
function ow(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)("div", {
              className: o()(ok.QE, { [ok.Rn]: t }),
              children: (0, a.jsx)(a2.Ay, {
                  children: n.map((e) =>
                      (0, a.jsx)(
                          a2.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function oA(e) {
    return oy.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: P.intl.string(P.t.JrGD7E), icon: ov.CopyIcon, onClick: () => (0, oy.C)(e) }]
        : [];
}
function oC(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: P.intl.string(T.default.CXtLD2),
                          tooltip: P.intl.string(T.default.DOb1HM),
                          icon: oj.DoubleChevronSmallRightIcon,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: P.intl.string(T.default.urZwpN),
                          icon: e3.XSmallIcon,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, a.jsx)(ow, { groupStart: n, actions: [...r, ...oA(t)] });
}
function oS(e) {
    let { content: t, groupStart: n, onRestoreVersion: l, onViewTrace: r } = e,
        i =
            null == l
                ? []
                : [{ id: "restore-version", label: P.intl.string(T.default.H8Jfhu), icon: tf.UndoIcon, onClick: l }],
        s = null == r ? [] : [{ id: "view-trace", label: "View Trace", icon: ob.BugIcon, onClick: r }];
    return (0, a.jsx)(ow, { groupStart: n, actions: [...i, ...oA(t), ...s] });
}
let oN = (0, aw.createChannelRecord)({ id: "conjure-builder", type: eb.rbe.DM }),
    oI = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function oE(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: o()(ok.Yq, { [ok.x1]: t }), children: e });
}
function o_(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
let oM = { hideSimpleEmbedContent: !0, allowList: !0, allowHeading: !0, allowLinks: !0, previewLinkTarget: !0 };
function oR(e, t, n) {
    let { content: l } = (0, oa.A)(e, oM),
        r = i.useMemo(() => ((0, rs.aW)(e.content) ? (0, u6.z2)(si.U, e, oM).content : null), [e]) ?? l,
        s = i.useMemo(() => ({ message: e, channel: oN, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(ot.Ay, { className: n, message: e, content: r, compact: !1 })
          : (0, oi.A)(s, r);
}
function oT(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, or.m)(e, oN, t.usernameProfile, l),
        u = (0, or.Jo)(t.avatarProfile, l),
        o = (0, c.bG)([oc.A], () => oc.A.getGuildId()),
        d = (0, c.bG)([nM.default], () => nM.default.getCurrentUser()),
        m = i.useCallback(
            (t) => {
                let n = nM.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, a.jsx)(oo.A, { ...t, user: n, currentUser: d, guildId: o ?? void 0 });
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
let oP = { formatInline: !0, allowGameMentions: !0 };
function oL(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        { content: s } = (0, oa.A)(n, oP),
        u = i.useMemo(() => {
            let e = "" === n.content ? null : (0, rs.aW)(n.content) ? (0, u6.z2)(si.U, n, oP).content : s;
            return null == l
                ? e
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("span", {
                              className: ok.GV,
                              children: [
                                  (0, a.jsx)(h.ExperimentalDirectSelectIcon, {
                                      className: ok.Rj,
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
            [n_.A],
            () => ({
                isReplyAuthorBlocked: n_.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: n_.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        m = (0, a0.X4)(n),
        f = (0, a0.X4)(t),
        g = oT(n);
    return (0, a.jsx)(ol.A, {
        repliedAuthor: m,
        baseAuthor: f,
        baseMessage: t,
        channel: oN,
        referencedMessage: { state: ou.a.LOADED, message: n },
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
function o$(e) {
    let { message: t, author: n } = e,
        l = oT(t);
    return (0, a.jsx)(on.Ay, {
        message: t,
        channel: oN,
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
function oD(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, groupStart: s, onQueuedAction: u } = e,
        o = (0, om.vm)(l),
        c = i.useMemo(() => (0, a0.FT)(o, null), [o]),
        d = i.useMemo(() => (0, lD.W1)(t), [t]),
        m = d?.body ?? t,
        f = (0, sE.Qu)(m),
        h = i.useMemo(() => {
            if (null == o) return null;
            let e = (0, ak.Ay)({ channelId: oN.id, content: m, author: o });
            return (0, ay.rh)({ ...e, timestamp: o_(n, e.timestamp), state: eb.cmJ.SENT });
        }, [m, o, n]);
    return null == h
        ? null
        : (0, a.jsx)(
              oq,
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
function oq(e) {
    let { message: t, author: n, content: l, selected: r, accessories: i, groupStart: s = !0, onQueuedAction: u } = e,
        o = oR(t, l);
    return (0, a.jsx)(oe.A, {
        className: ok.yE,
        author: n,
        childrenHeader: s ? (0, a.jsx)(o$, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? o
                : (0, a.jsxs)("div", {
                      className: ok.zq,
                      children: [
                          (0, a.jsxs)("span", {
                              className: ok.GV,
                              children: [
                                  (0, a.jsx)(h.ExperimentalDirectSelectIcon, {
                                      className: ok.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  r,
                              ],
                          }),
                          (0, a.jsx)("span", { className: ok.WO, children: o }),
                      ],
                  }),
        childrenAccessories: oE(i, "" !== l),
        childrenButtons: (0, a.jsx)(oC, { content: l, groupStart: s, onQueuedAction: u }),
    });
}
function oF(e) {
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
        { text: m, revealing: f } = ox(t, { streaming: (0, c.bG)([od.A], () => o && od.A.isFocused(), [o]) }),
        h = i.useMemo(() => (0, a0.FT)(null, null), []),
        g = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        p = r?.userId,
        x = (0, om.vm)(p),
        v = i.useMemo(() => (null == r ? null : (0, lD.W1)(r.content)), [r]),
        j = i.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, ak.Ay)({ channelId: oN.id, content: v?.body ?? r.content, author: x });
            return (0, ay.rh)({ ...e, id: r.id, timestamp: o_(r.createdAt, e.timestamp), state: eb.cmJ.SENT });
        }, [r, v, x]),
        b = i.useMemo(() => (null == r ? void 0 : { channel_id: oN.id, message_id: r.id }), [r]),
        [y] = i.useState(() => (0, ak.Ay)({ channelId: oN.id, content: "", author: oI })),
        k = i.useMemo(
            () =>
                (0, ay.rh)({
                    ...y,
                    timestamp: o_(n, y.timestamp),
                    state: eb.cmJ.SENT,
                    ...(null != b ? { type: eb.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, n, b],
        ),
        w = i.useMemo(() => k.set("content", m), [k, m]),
        A = i.useMemo(
            () => (0, os.A)({ message: k, channel: oN, author: g, guildId: void 0, isGroupStart: u }),
            [k, g, u],
        ),
        C = oR(w, m, ok.OS);
    return (0, a.jsxs)("div", {
        className: ok.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": f ? "true" : void 0,
        children: [
            (0, a.jsx)(oe.A, {
                className: ok.yE,
                author: g,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, a.jsx)(oL, { baseMessage: k, referenced: j, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: A,
                childrenMessageContent: C,
                childrenAccessories: oE(l, "" !== m),
                disableInteraction: !0,
            }),
            d,
            u ? (0, a.jsx)("img", { className: ok.st, src: "/assets/c07664a29f3ee5ed.svg", alt: "" }) : null,
        ],
    });
}
var oO = n(981879);
function oG(e) {
    let { messageId: t, reaction: n } = e,
        l = i.useMemo(
            () =>
                (0, ay.rh)(
                    { ...(0, ak.Ay)({ channelId: oN.id, content: "" }), id: `conjure:${t}`, state: eb.cmJ.SENT },
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
        i.useEffect(() => {
            let e = { id: n.emojiId, name: n.emoji };
            function t() {
                (u7.h.dispatch({
                    type: "MESSAGE_REACTION_ADD_USERS",
                    channelId: oN.id,
                    messageId: l.id,
                    users: [oI],
                    emoji: e,
                    reactionType: u8.v.NORMAL,
                }),
                    u7.h.dispatch({
                        type: "MESSAGE_REACTION_SET_FETCHED",
                        channelId: oN.id,
                        messageId: l.id,
                        emoji: e,
                        reactionType: u8.v.NORMAL,
                    }));
            }
            return (
                t(),
                u7.h.subscribe("CONNECTION_OPEN", t),
                () => {
                    u7.h.unsubscribe("CONNECTION_OPEN", t);
                }
            );
        }, [l.id, n.emojiId, n.emoji]),
        (0, a.jsx)("div", {
            className: oO.H,
            children: (0, a.jsx)(u9.A, {
                message: l,
                channel: oN,
                disableReactionCreates: !0,
                disableReactionUpdates: !0,
                useChatFontScaling: !0,
                showTooltipWhenReadOnly: !0,
            }),
        })
    );
}
var oz = n(442433);
n(775443);
var oU = n(990779),
    oB = n(155899);
function oK(e) {
    let { onSelect: t, onClose: n = oz.Z_, onRestoreVersion: l, onViewTrace: r } = e;
    return (0, a.jsx)(eA.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: n,
        "aria-label": P.intl.string(P.t.ogxXGq),
        onSelect: t,
        children: (0, a.jsxs)(eC.rX, {
            children: [
                null != l
                    ? (0, a.jsx)(eC.Dr, {
                          id: "restore-version",
                          label: P.intl.string(T.default.H8Jfhu),
                          icon: tf.UndoIcon,
                          action: l,
                      })
                    : null,
                null != r
                    ? (0, a.jsx)(eC.Dr, { id: "view-trace", label: "View Trace", icon: ob.BugIcon, action: r })
                    : null,
            ],
        }),
    });
}
function oH(e) {
    let t,
        {
            row: n,
            projectId: l,
            replyTo: r,
            onJumpTo: i,
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
        b = null != j && null != x ? () => oV(j, x) : void 0,
        y =
            ((t =
                O() && "assistant" === v.role && (0, tY.BL)(v)
                    ? (v.turn_id ?? v.steps.find((e) => null != e.turn_id)?.turn_id ?? v.id.replace(/^turn:/, ""))
                    : null),
            (0, c.bG)(
                [oU.A],
                () => {
                    let e =
                        null == t
                            ? null
                            : oU.A.getTimingTraces(l).findLast((e) => {
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
                          for (let n of ((D = { projectId: e, traceId: t }), [...$])) n(e);
                      })(l, y)
                : void 0,
        w = v.in_reply_to,
        A = v.restoreProposal;
    return (0, a.jsx)(ud, {
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
                          void (0, oz.jA)(t, (e) => (0, a.jsx)(oK, { ...e, onRestoreVersion: n, onViewTrace: l }))
                      );
                  }
                : void 0,
        children: (0, a.jsx)(oF, {
            groupStart: n.groupStart,
            buttons: (0, a.jsx)(oS, {
                groupStart: n.groupStart,
                content: n.content,
                onRestoreVersion: b,
                onViewTrace: k,
            }),
            content: n.content,
            createdAt: v.created_at,
            replyTo: r,
            onJumpToReplied: null != w && null != i ? () => i(w) : void 0,
            accessories: (0, a.jsx)(sd, {
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
                turnId: (0, tY.lb)(v) ?? void 0,
                onPickIdea: g,
                onApprovePlan: p,
                restoreProposal: A,
                publishScheduleProposal: v.publishScheduleProposal,
                publishScheduleProposalCurrent: h,
                onRestoreProposal:
                    null != A && null != x && h
                        ? () =>
                              oV(
                                  {
                                      sha: A.sha,
                                      authorName: "",
                                      authorEmail: "",
                                      authoredAt: A.authored_at,
                                      subject: A.subject,
                                  },
                                  x,
                              )
                        : void 0,
            }),
        }),
    });
}
function oV(e, t) {
    (0, oB.F)({ onConfirm: () => t(e) });
}
var oW = n(288539),
    oX = n(677683),
    oQ = n(677690),
    oZ = n(159711);
function oY(e) {
    let t,
        n,
        { projectId: l } = e,
        { outcome: r, pinnedName: i } =
            ((t = (0, c.bG)([oX.A], () => oX.A.getOutcome(l))),
            (n = (0, c.bG)(
                [nE.A, nM.default, n_.A],
                () => {
                    let e = t?.status === "pinned" ? nE.A.getChannel(t.channelId) : null;
                    return null == e ? null : (0, nI.m1)(e, nM.default, n_.A);
                },
                [t],
            )),
            { outcome: t, pinnedName: n }),
        s = P.intl.string(T.default.UGAfl9);
    return null != r
        ? (0, a.jsx)(t9, {
              title: s,
              children: (0, a.jsx)(v.E, {
                  className: oZ.r,
                  variant: "body-sm/normal",
                  color: "text-muted",
                  children:
                      "pinned" === r.status
                          ? P.intl.formatToPlainString(T.default.gKe6Lw, { channelName: i ?? "" })
                          : P.intl.string(T.default["+kpQ3v"]),
              }),
          })
        : (0, a.jsx)(t9, { title: s, children: (0, a.jsx)(oJ, { projectId: l }) });
}
function oJ(e) {
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
            let n = (0, c.bG)([eP.Ay], () => eP.Ay.getProject(e), [e]),
                l =
                    ((t = n?.guild_id ?? null),
                    (0, c.yK)(
                        [ll.A, uY.A],
                        () =>
                            null == t
                                ? []
                                : ll.A.getChannels(t)
                                      .VOCAL.map((e) => {
                                          let { channel: t } = e;
                                          return t;
                                      })
                                      .filter(
                                          (e) => e.type === eb.rbe.GUILD_VOICE && uY.A.can(eb.xBc.MANAGE_CHANNELS, e),
                                      ),
                        [t],
                    )),
                [r, a] = i.useState(null),
                [s, u] = i.useState(!1),
                [o, d] = i.useState(!1),
                m = l.find((e) => e.id === r) ?? null,
                f = n?.application_id,
                h = i.useCallback(async () => {
                    if (null == m || null == f) return;
                    (u(!0), d(!1));
                    let t = await (0, oQ.pk)(m.id, f);
                    (u(!1), t ? (0, oQ.tg)(e, { status: "pinned", channelId: m.id }) : d(!0));
                }, [f, e, m]),
                g = i.useCallback(() => (0, oQ.tg)(e, { status: "skipped" }), [e]);
            return {
                guildId: n?.guild_id ?? null,
                channels: l,
                selected: m,
                setPicked: a,
                pinning: s,
                failed: o,
                pin: h,
                skip: g,
            };
        })(t),
        h = (0, n8.A)(n, "voice"),
        g = i.useMemo(() => {
            let e = new Set(l.map((e) => e.id));
            return (h ?? []).filter((t) => e.has(t.value));
        }, [l, h]);
    return (0, a.jsx)("div", {
        className: oZ.r,
        children: (0, a.jsxs)(j.B, {
            gap: 12,
            children: [
                (0, a.jsx)(v.E, {
                    variant: "body-md/normal",
                    color: "text-default",
                    children: P.intl.string(T.default["1vVBAw"]),
                }),
                g.length > 0
                    ? (0, a.jsx)(nw.Z, {
                          selectionMode: "single",
                          label: P.intl.string(T.default.peOi1H),
                          placeholder: P.intl.string(T.default["9+dfPT"]),
                          options: g,
                          value: r?.id ?? null,
                          onSelectionChange: (e) => s(e),
                          errorMessage: o ? P.intl.string(T.default.d7EeAm) : void 0,
                          disabled: u,
                          maxOptionsVisible: 4,
                          fullWidth: !0,
                      })
                    : (0, a.jsx)(v.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: P.intl.string(T.default.JVUsIY),
                      }),
                (0, a.jsxs)("div", {
                    className: oZ.o,
                    children: [
                        (0, a.jsx)(d.$, {
                            variant: "secondary",
                            size: "sm",
                            text: P.intl.string(T.default.Iw0l8o),
                            disabled: u,
                            onClick: f,
                        }),
                        g.length > 0
                            ? (0, a.jsx)(d.$, {
                                  variant: "primary",
                                  size: "sm",
                                  text: P.intl.string(T.default.FYI3qr),
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
function o0(e, t, n) {
    return (0, a.jsx)(oW.A, { userId: e, content: `@${t}` }, n);
}
function o1(e) {
    let { projectId: t, event: n } = e,
        l = (function (e, t, n) {
            let l = t.actor_user_id;
            i.useEffect(() => {
                (0, om.Y_)(l);
            }, [l]);
            let r = (0, c.bG)([nM.default], () => (null == l ? null : nM.default.getUser(l)), [l]),
                a = (0, aC.tx)(r),
                s = u1(e),
                u =
                    (0, c.bG)([la.A], () => (null == t.guild_id ? null : la.A.getGuild(t.guild_id)?.name), [
                        t.guild_id,
                    ]) ??
                    ("app_removed" === t.type ? t.guild_name : null) ??
                    P.intl.string(T.default.R1tPlP),
                o = null == r || null == a ? null : { user: a, userHook: (e, t) => n(r.id, a, t) };
            switch (t.type) {
                case "app_removed":
                    return null == o
                        ? P.intl.format(T.default.Lwsrhg, { app: s, server: u })
                        : P.intl.format(T.default.qqePfT, { app: s, server: u, ...o });
                case "bot_removed":
                    return null == o
                        ? P.intl.format(T.default.mT7EQG, { app: s, server: u })
                        : P.intl.format(T.default["lA/crI"], { app: s, server: u, ...o });
                case "preview_bot_removed":
                    return null == o
                        ? P.intl.format(T.default["4LVIeo"], { app: s, server: u })
                        : P.intl.format(T.default.YJOV6D, { app: s, server: u, ...o });
                case "app_channel_deleted": {
                    let e = t.channel_name ?? "";
                    return null == o
                        ? P.intl.format(T.default["4VQfid"], { channel: e, server: u })
                        : P.intl.format(T.default.RlMIJN, { channel: e, server: u, ...o });
                }
                case "remixed":
                    return P.intl.format(T.default.mHCXtm, { source: t.source_name });
                case "voice_channel_pin":
                    return P.intl.string(T.default.UGAfl9);
                case "staff_notice":
                    return t.message;
            }
        })(t, n, o0),
        r = uk(t, n);
    return "voice_channel_pin" === n.type
        ? (0, a.jsx)(oY, { projectId: t })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(v.E, { variant: "body-md/normal", color: "text-default", children: l }),
                  null != r ? (0, a.jsx)(rn, { projectId: t, request: r, notifyAgent: !1 }) : null,
              ],
          });
}
let o2 = i.memo(
        function (e) {
            var t;
            let { row: n, projectId: l, highlighted: r, currentUserId: i, ...s } = e,
                u = n.message,
                o =
                    ((t = "user" === n.kind ? u.id : null),
                    ng.useState((e) => (null == t ? null : (e.byMessageKey[t] ?? null))));
            switch (n.kind) {
                case "user": {
                    let e = (0, rs.DW)(u.attachments, u.content),
                        t = null != e && e.length > 0 ? e : null;
                    return (0, a.jsx)(ud, {
                        rowKey: n.key,
                        role: "user",
                        anchorId: u.id,
                        highlighted: r,
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(oD, {
                            groupStart: n.groupStart,
                            content: u.content,
                            createdAt: u.created_at,
                            userId: u.user_id,
                            accessories:
                                null != t || null != o || null != u.agentReaction
                                    ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              null != t ? (0, a.jsx)(sa.A, { projectId: l, attachments: t }) : null,
                                              null != o ? (0, a.jsx)(sC, { send: o }) : null,
                                              null != u.agentReaction
                                                  ? (0, a.jsx)(oG, { messageId: u.id, reaction: u.agentReaction })
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
                                    return (n) => (0, ru.tp)(e, t.id, n);
                            })(l, u, i),
                        }),
                    });
                }
                case "prose":
                    return (0, a.jsx)(ud, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(oF, {
                            groupStart: n.groupStart,
                            content: n.content,
                            streaming: n.streaming,
                            createdAt: u.created_at,
                            accessories:
                                n.hostsAttachments && null != u.attachments
                                    ? (0, a.jsx)(sa.A, { projectId: l, attachments: u.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, a.jsx)(ud, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(sc, {
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
                    return (0, a.jsx)(ud, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(oF, {
                            groupStart: n.groupStart,
                            content: null == u.publishNotice ? u.content : "",
                            createdAt: u.created_at,
                            accessories:
                                null == u.publishNotice
                                    ? void 0
                                    : (0, a.jsx)(u4, { projectId: l, notice: u.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, a.jsx)(ud, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(oF, {
                            groupStart: n.groupStart,
                            content: null == u.projectEvent ? u.content : "",
                            createdAt: u.created_at,
                            accessories:
                                null == u.projectEvent
                                    ? void 0
                                    : (0, a.jsx)(o1, { projectId: l, event: u.projectEvent }),
                        }),
                    });
                case "contextBoundary":
                    return (0, a.jsx)(ud, {
                        rowKey: n.key,
                        role: "assistant",
                        children:
                            null == u.contextSwitch
                                ? null
                                : (0, a.jsx)(uX, { projectId: l, contextSwitch: u.contextSwitch }),
                    });
                case "interrupted":
                    return (0, a.jsx)(ud, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(sc, { projectId: l, interrupted: !0, steps: u.steps }),
                    });
                case "legacyTodos":
                    return (0, a.jsx)(ud, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(sc, {
                            projectId: l,
                            steps: o3,
                            active: !1,
                            checklistSuperseded: n.checklistSuperseded,
                            todos: u.todos,
                            provisionalTodo: u.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, a.jsx)(oH, { row: n, projectId: l, ...s });
            }
        },
        function (e, t) {
            return (
                (0, uB.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, uB.A)(e.row, t.row, ["message"]) &&
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
                (0, uB.A)(e.replyTo, t.replyTo) &&
                (0, uB.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let n of e) if (!t.has(n)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    o3 = [],
    o4 = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    o5 = new WeakMap();
function o7(e, t, n) {
    let l = Math.max(0, Math.min(e.length, n)),
        r = Math.max(0, Math.min(l, t));
    return { start: r, end: l, startKey: e[r] ?? null, endKey: l >= e.length ? null : (e[l - 1] ?? null) };
}
function o8(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
let o9 = ["wheel", "touchstart", "pointerdown", "keydown"];
function o6(e) {
    let t = e?.querySelectorAll("[data-conjure-plan-card]");
    return t?.[t.length - 1]?.closest("[data-conjure-row-key]") ?? null;
}
let ce = i.memo(function (e) {
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
            pinned: j,
            onUnpin: y,
            handleRef: k,
            onShowsLatestChange: w,
        } = e,
        A = i.useRef(null),
        [C, S] = i.useState(null),
        N = i.useCallback((e) => {
            ((A.current = e), S(e));
        }, []),
        [I, E] = i.useState(null),
        _ = i.useRef(0);
    i.useEffect(() => () => window.clearTimeout(_.current), []);
    let M = i.useCallback((e) => {
            (E(e), window.clearTimeout(_.current), (_.current = window.setTimeout(() => E(null), 1600)));
        }, []),
        R = (0, c.bG)([eU.A], () => eU.A.getPublishStatus(t)),
        L = (0, c.bG)([nM.default], () => nM.default.getCurrentUser()?.id),
        $ = i.useMemo(() => {
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
                                        let t = (0, tZ.lt)(e.steps);
                                        return null != t ? t : null != e.todos && e.todos.length > 0 ? e.todos : null;
                                    })(r) &&
                                (n && t.add(r.render_id), (n = !0));
                        }
                        return t;
                    })(e);
                for (let r of e) {
                    let e = l.has(r.render_id),
                        a = null != r.clarification && r.clarification.id === t,
                        i = o5.get(r);
                    if (null != i && i.superseded === e && i.liveCard === a) {
                        n.push(...i.planned);
                        continue;
                    }
                    let s = (function (e, t, n) {
                        let l = [];
                        function r(e, t) {
                            l.push({ row: e, groupable: { key: e.key, ...t } });
                        }
                        if ("user" === e.role)
                            return (
                                (0, tY.ST)(e) ||
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
                        let a = !(0, tY.BL)(e),
                            i = rf({
                                steps: e.steps,
                                content: e.content,
                                hasProposal: null != e.proposal,
                                hasLiveClarification: n,
                                hasAttachments: (e.attachments?.length ?? 0) > 0,
                            }),
                            s = i.lastStreamedMessage?.key,
                            u = (0, tZ.C6)(e.steps, { turnActive: a }),
                            { lastWork: o, open: c } = (0, tZ.CT)(u, { turnActive: a }),
                            d = u.at(-1)?.index,
                            m = !1;
                        for (let n of u) {
                            if (null != n.prose && o4.test(n.prose.content)) m = !0;
                            else if (null != n.prose && n.prose.key !== i.replyKey) {
                                let t = `${e.render_id}:${n.key}`;
                                r(
                                    {
                                        kind: "prose",
                                        key: t,
                                        message: e,
                                        groupStart: !1,
                                        content: n.prose.content,
                                        hostsAttachments:
                                            "streamed" === i.attachmentsHost &&
                                            n.prose.key === s &&
                                            null != e.attachments,
                                        streaming: a && n.index === d && !n.hasWork,
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
                                        turnActive: tJ(e),
                                        checklistSuperseded: n.hasTodos && t,
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        let f = o4.test(e.content ?? "");
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
                            (i.showsClosingMessage && !f) ||
                                null != e.proposal ||
                                (null != e.clarification && !n) ||
                                null != e.restoreProposal ||
                                null != e.publishScheduleProposal ||
                                (!a &&
                                    (null != e.ideas ||
                                        null != e.publishCta ||
                                        null != e.secretRequest ||
                                        null != e.settingsRequest)) ||
                                "standalone" === i.attachmentsHost)
                        ) {
                            let t = `${e.render_id}:closing`;
                            r(
                                {
                                    kind: "closing",
                                    key: t,
                                    message: e,
                                    groupStart: !1,
                                    active: a,
                                    attachmentsHost: i.attachmentsHost,
                                    content: i.closingContent,
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
                    })(r, e, a);
                    (o5.set(r, { superseded: e, liveCard: a, planned: s }), n.push(...s));
                }
                let r = (function (e) {
                    let t,
                        n,
                        l = [],
                        r = null,
                        a = !1,
                        i = !1;
                    for (let s of e) {
                        if (null == s.actor) {
                            (l.push(!1), (r = null), (t = void 0), (a = !1), (i = !1), (n = void 0));
                            continue;
                        }
                        let e = !a || r !== s.actor || t !== s.authorId || s.boundary !== n || !0 === s.separate || i;
                        (e && ((r = s.actor), (t = s.authorId), (a = !0), (i = !0 === s.separate), (n = s.boundary)),
                            l.push(e));
                    }
                    return l;
                })(n.map((e) => e.groupable));
                return n.map((e, t) => ({ ...e.row, groupStart: r[t] ?? !0 }));
            })(
                ((e = (function (e, t) {
                    for (let n = e.length - 1; n >= 0; n--) {
                        let l = e[n].publishCta;
                        if (null != l) return iL(l, t) ? e[n].id : null;
                    }
                    return null;
                })(n, R)),
                n.every((t) => null == t.publishCta || t.id === e)
                    ? n
                    : n.map((t) => {
                          if (null == t.publishCta || t.id === e) return t;
                          let n = iD.get(t);
                          return (null == n && ((n = { ...t, publishCta: null }), iD.set(t, n)), n);
                      })),
                h,
            );
        }, [n, R, h]),
        D = i.useMemo(() => $.map((e) => e.key), [$]),
        [q, F] = i.useState(null),
        O = (function (e, t, n) {
            if (null == t) return o7(e, e.length - 60, e.length);
            let l = null == t.endKey,
                r = l ? e.length : o8(e, t.endKey, t.end - 1) + 1,
                a = o8(e, t.startKey, t.start);
            return (l && n && r - a > 120 && (a = r - 60), o7(e, a, r));
        })(D, q, j),
        G = i.useRef(O),
        z = i.useRef(D),
        U = i.useRef($),
        B = i.useRef(null),
        K = i.useRef(null),
        H = i.useRef(new Set()),
        V = i.useRef(null),
        W = i.useRef(!1),
        X = i.useCallback(() => {
            let e = p.current?.getScrollerNode(),
                t = W.current ? o6(A.current) : null;
            if (null == e || null == t) return;
            let n = new DOMMatrixReadOnly(getComputedStyle(t).transform).m42,
                l = t.getBoundingClientRect().top - n - e.getBoundingClientRect().top - 8;
            Math.abs(l) >= 1 && (e.scrollTop += l);
        }, [p]);
    i.useLayoutEffect(() => {
        let e = p.current?.getScrollerNode();
        if (null == e) return;
        let t = () => {
            W.current = !1;
        };
        for (let n of o9) e.addEventListener(n, t, { passive: !0 });
        return () => {
            for (let n of o9) e.removeEventListener(n, t);
        };
    }, [p]);
    let Q = i.useCallback(() => {
            let e = p.current?.getScrollerNode(),
                t = A.current;
            if (null == e || null == t) return;
            let n = e.getBoundingClientRect().top,
                l = t.querySelectorAll("[data-conjure-row-key]"),
                r = 0,
                a = l.length - 1,
                i = null;
            for (; r <= a;) {
                let e = (r + a) >> 1;
                l[e].getBoundingClientRect().bottom > n ? ((i = l[e]), (a = e - 1)) : (r = e + 1);
            }
            let s = i?.dataset.conjureRowKey;
            B.current = null != i && null != s ? { key: s, offset: i.getBoundingClientRect().top - n } : null;
        }, [p]),
        Z = i.useCallback(() => {
            let e = p.current?.getScrollerNode();
            if (null == e) return;
            let n = (function (e, t, n) {
                let { nearTop: l, nearBottom: r, pinned: a } = n;
                if (r && null != t.endKey) {
                    let n;
                    return ((n = Math.min(e.length, t.end + 30)), o7(e, Math.max(t.start, n - 120), n));
                }
                if (!l) return null;
                if (0 === t.start) return "older";
                if (!a && !r) {
                    let n, l;
                    return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), o7(e, n, l));
                }
                let i = Math.max(t.start - 30, t.end - 120);
                return i < t.start ? o7(e, i, t.end) : null;
            })(z.current, G.current, {
                nearTop: e.scrollTop < 600,
                nearBottom: e.scrollHeight - e.clientHeight - e.scrollTop < 600,
                pinned: x.current,
            });
            "older" === n ? (0, ez.P6)(t) : null != n && F(n);
        }, [p, x, t]);
    i.useImperativeHandle(
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
                        t = A.current?.querySelector(`[data-conjure-row-key="${CSS.escape(n.key)}"]`);
                    null != e &&
                        null != t &&
                        (e.scrollTop += t.getBoundingClientRect().top - e.getBoundingClientRect().top - n.offset);
                } else F(t);
                return !0;
            },
        }),
        [Q, Z, y, p],
    );
    let Y = i.useRef(null),
        J = i.useCallback(
            (e) => {
                var n;
                let l;
                ((Y.current = null), (W.current = !1));
                let r = A.current?.querySelector(`[data-conjure-message="${e}"]`);
                if (null != r) {
                    (y(), F(G.current), r.scrollIntoView({ block: "center", behavior: "smooth" }), M(e));
                    return;
                }
                let a = U.current.findIndex((t) => "user" === t.kind && t.message.id === e);
                if (-1 === a) {
                    (0, ez.P6)(t) && (Y.current = e);
                    return;
                }
                (y(),
                    (K.current = () => {
                        (A.current?.querySelector(`[data-conjure-message="${e}"]`)?.scrollIntoView({ block: "center" }),
                            M(e));
                    }),
                    F(((n = z.current), o7(n, (l = Math.max(0, a - 30)), l + 60))));
            },
            [M, y, t],
        );
    (i.useEffect(() => {
        let e = Y.current;
        null != e && J(e);
    }, [$, J]),
        i.useLayoutEffect(() => {
            if (null == C) return;
            let e = C.getBoundingClientRect().height,
                t = new ResizeObserver((t) => {
                    let [n] = t,
                        l = n?.contentRect.height;
                    if (null != l && l !== e) {
                        if (((e = l), x.current)) return void p.current?.scrollToBottom();
                        (X(), Q());
                    }
                });
            return (t.observe(C), () => t.disconnect());
        }, [C, X, Q, p, x]));
    let ee = null == O.endKey;
    (i.useEffect(() => w?.(ee), [ee, w]),
        i.useLayoutEffect(() => {
            ((G.current = O), (z.current = D), (U.current = $));
        }),
        i.useLayoutEffect(() => {
            let e = p.current?.getScrollerNode(),
                l = A.current,
                r =
                    null !=
                    (function (e, t, n) {
                        if (0 === n.length) return null;
                        let l = n[n.length - 1],
                            r = "assistant" === l.role && null != l.proposal ? l.render_id : null,
                            a = e.current;
                        return (
                            (e.current = { projectId: t, planId: r }),
                            a?.projectId === t && null != r && r !== a.planId ? r : null
                        );
                    })(V, t, n);
            if (null != e && null != l) {
                let t = B.current;
                if (r && x.current && null != o6(l)) (y(), F(G.current), (W.current = !0), X());
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
            H.current = new Set(D);
        }, [t, n, $, D, O.start, O.end, p, x, y, X, Q, Z]));
    let et = i.useMemo(() => uu(n), [n]),
        en = i.useMemo(
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
        el = i.useMemo(
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
                        let a = new Set();
                        for (let e of r.ideas) n.has(e.implementation_prompt.trim()) && a.add(e.id);
                        t.set(r.render_id, a);
                    }
                    return t;
                })(n),
            [n],
        ),
        er = i.useMemo(
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
        ea = n.at(-1),
        ei =
            (ea?.role !== "assistant" || null == ea.awaitingUser || null == ea.secretRequest
                ? null
                : (0, tY.BL)(ea)
                  ? ea.awaitingUser
                  : null) ?? void 0,
        es = (0, c.bG)([l1.A], () => l1.A.getSettings(t)?.secrets, [t]),
        eu = (0, ui.WT)(t),
        eo = i.useMemo(() => (0, lK.Mv)(n, es), [n, es]);
    if (!(0, tY.i_)(n)) {
        if ("loading" === l)
            return (0, a.jsx)("ol", {
                className: o()(uo.x7, uo.jH),
                "aria-busy": !0,
                children: (0, a.jsx)("li", { className: uo.Ub, children: (0, a.jsx)(b.y, {}) }),
            });
        let e = "unavailable" === l ? T.default.Td4Sf4 : T.default.V1QiNz;
        return (0, a.jsx)("ol", {
            className: uo.x7,
            children: (0, a.jsx)(ud, { role: "assistant", children: (0, a.jsx)(oF, { content: P.intl.string(e) }) }),
        });
    }
    return (0, a.jsx)(uc.Provider, {
        value: H,
        children: (0, a.jsxs)("ol", {
            ref: N,
            className: uo.x7,
            children: [
                $.slice(O.start, O.end).map((e) => {
                    let n = e.message;
                    if ("closing" !== e.kind)
                        return (0, a.jsx)(
                            o2,
                            {
                                row: e,
                                projectId: t,
                                highlighted: "user" === e.kind && I === n.id,
                                currentUserId: "user" === e.kind ? L : void 0,
                            },
                            e.key,
                        );
                    let l = n === ea;
                    return (0, a.jsx)(
                        o2,
                        {
                            row: e,
                            projectId: t,
                            highlighted: !1,
                            replyTo: null != n.in_reply_to ? er.get(n.in_reply_to) : void 0,
                            onJumpTo: J,
                            planVersion: en.get(n.render_id),
                            pickedIdeaIds: el.get(n.render_id),
                            secretRequestAwaiting: l ? ei : void 0,
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
                          (0, a.jsx)(
                              ud,
                              {
                                  role: "assistant",
                                  continuation: !0,
                                  children: (0, a.jsx)(oF, {
                                      groupStart: !1,
                                      content: "",
                                      accessories: (0, a.jsx)(us.K, { projectId: t, approval: e }),
                                  }),
                              },
                              e.id,
                          ),
                      )
                    : null,
                null != ei && ee
                    ? (0, a.jsx)(ud, {
                          role: "assistant",
                          continuation: !0,
                          children: (0, a.jsx)(oF, {
                              groupStart: !1,
                              content: "",
                              accessories: (0, a.jsx)(v.E, {
                                  variant: "body-xs/normal",
                                  color: "text-muted",
                                  children: P.intl.string(T.default.YR8A2v),
                              }),
                          }),
                      })
                    : null,
                ee ? (0, a.jsx)(uU, { projectId: t, messages: n, draftHasText: !0 === u, onAskForIdeas: s }) : null,
            ],
        }),
    });
});
var ct = n(731084),
    cn = n(336288),
    cl = n(187447);
function cr(e) {
    let { activity: t, id: n } = e,
        l = (0, tQ.j)(),
        { text: r, revealing: s } = ox(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
        u = i.useRef(null),
        c = i.useRef(!0),
        d = i.useRef(0),
        m = i.useCallback(() => {
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
        i.useLayoutEffect(() => {
            if (!c.current) return;
            let e = u.current;
            e?.scrollToBottom({
                callback: () => {
                    let t = e.getScrollerNode();
                    null != t && (d.current = t.scrollTop);
                },
            });
        }, [r]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: cl.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, a.jsx)(tV.Ch, {
                ref: u,
                onScroll: m,
                className: cl.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: o()(so.PT, cl.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: aP.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var ca = n(53659);
function ci(e) {
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
        g = i.useRef(null),
        p = i.useId(),
        [x, j] = i.useState(null),
        b = (0, ct.xu)({
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
        y = P.intl.string(b),
        k = b === ct.kx["0"],
        [w, A] = i.useState(f ?? y),
        C = (0, tQ.j)();
    (l || (0, ct.E4)(y, w) || (!C && !k)) && w !== y && A(y);
    let S = i.useRef(y);
    (i.useEffect(() => {
        S.current = y;
    }, [y]),
        i.useEffect(() => {
            h?.(w);
        }, [w, h]));
    let N = i.useRef(null),
        I = i.useRef(w);
    i.useEffect(() => {
        I.current = w;
    }, [w]);
    let E = i.useRef(k),
        _ = i.useRef(0);
    (i.useEffect(() => {
        ((E.current = k), !k && (0, ct.E8)(I.current) && A(S.current));
    }, [k]),
        i.useEffect(() => {
            if (!C) return;
            let e = 0,
                t = 0;
            function n() {
                E.current
                    ? ((_.current = (0, ct.E8)(I.current) ? _.current + 1 : 0), A((0, ct.Ov)(_.current)))
                    : S.current !== I.current
                      ? A(S.current)
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
        }, [C]));
    let M = null != t && "" !== t.text,
        R = t?.session ?? null,
        L = M && null != R && x === R,
        $ = i.useCallback(() => {
            M && null != R && j((e) => (e === R ? null : R));
        }, [M, R]),
        D = i.useCallback(() => j(null), []);
    return (0, a.jsx)(ew.Y, {
        targetElementRef: g,
        position: "top",
        align: "left",
        shouldShow: L,
        onRequestClose: D,
        renderPopout: () => (0, a.jsx)(cr, { id: p, activity: t }),
        children: () =>
            (0, a.jsxs)(t1.D, {
                innerRef: g,
                className: o()(ca.hF, M && ca.Xd),
                "aria-label": P.intl.string(
                    r
                        ? T.default.qqlUiW
                        : b === T.default.j8tmjK
                          ? T.default.j8tmjK
                          : k
                            ? ct.kx["0"]
                            : T.default["Uuj/gh"],
                ),
                "aria-expanded": L,
                "aria-describedby": L ? p : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": P.intl.string(b),
                onClick: $,
                children: [
                    (0, a.jsx)("span", {
                        className: ca.bl,
                        children: (0, a.jsx)(cn.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", {
                        className: ca.xu,
                        "aria-hidden": !!c || !!k || void 0,
                        children: C
                            ? (0, a.jsx)(sm.o, {
                                  ref: N,
                                  text: w,
                                  variant: "body-xs/medium",
                                  color: "text-subtle",
                                  duration: 1e3,
                                  delay: null,
                                  className: ca.yE,
                              })
                            : (0, a.jsx)(v.E, {
                                  tag: "span",
                                  variant: "body-xs/medium",
                                  color: "text-subtle",
                                  className: ca.yE,
                                  children: w,
                              }),
                    }),
                ],
            }),
    });
}
let cs = { second: 1e3, minute: 6e4 };
function cu(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [n, l] = i.useState(() => Date.now());
    return (
        i.useEffect(() => {
            let n;
            if (null == e) return;
            let r = cs[t];
            return (
                !(function t() {
                    let a = Date.now();
                    (l(a), (n = setTimeout(t, r - ((((a - e) % r) + r) % r))));
                })(),
                () => clearTimeout(n)
            );
        }, [e, t]),
        null == e ? void 0 : Math.max(0, n - e)
    );
}
var co = n(719374);
function cc(e) {
    let { startedAt: t, variant: n = "body-xs/medium" } = e,
        l = cu(t);
    return (0, a.jsx)(v.E, {
        tag: "span",
        variant: n,
        color: "text-muted",
        "aria-hidden": !0,
        className: co.$,
        "data-conjure-turn-timer": !0,
        children: (0, rk.C7)(l),
    });
}
function cd(e) {
    let { startedAt: t } = e,
        n = cu(t, "minute");
    return (0, a.jsx)(t5.A, { role: "timer", children: (0, rk.Us)(n) });
}
var cm = n(885574),
    cf = n(242779),
    ch = n(436804);
function cg(e) {
    return e.toLocaleString();
}
function cp(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, a.jsxs)("div", {
        className: ch.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: ch.mf,
                children: [
                    (0, a.jsx)(v.E, { variant: "body-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(v.E, {
                        variant: "body-sm/medium",
                        color: "text-muted",
                        children: [cg((0, cf.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(v.E, {
                tag: "div",
                variant: "body-xs/normal",
                color: "text-muted",
                children: [
                    cg(n.input_tokens),
                    " in \xb7 ",
                    cg(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${cg(n.cache_creation_input_tokens)} cache write \xb7 ${cg(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function cx(e) {
    let { project: t } = e,
        n = (0, cf.wU)(t.compaction),
        l = (0, cf.wU)(t.classifier),
        r = (0, cf.wU)(t.image),
        i = (0, cf.wV)(t.orchestrator, t.codegen),
        s = (0, cf.wV)(i, n);
    return (0, a.jsxs)("div", {
        className: ch.si,
        role: "dialog",
        "aria-label": P.intl.string(T.default.p5EGzq),
        children: [
            (0, a.jsx)("div", {
                className: ch.Q$,
                children: (0, a.jsxs)("div", {
                    className: ch.mf,
                    children: [
                        (0, a.jsxs)(v.E, {
                            variant: "body-md/semibold",
                            color: "text-default",
                            children: [cg((0, cf.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(v.E, {
                            variant: "body-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(cp, { label: P.intl.string(T.default["9Sj3SX"]), usage: i }),
            (0, a.jsx)(cp, { label: P.intl.string(T.default.ANCEo3), usage: n }),
            (0, a.jsx)(cp, { label: P.intl.string(T.default.ugL6D4), usage: l, cached: !1 }),
            (0, a.jsx)(cp, { label: P.intl.string(T.default.DHr5On), usage: r, cached: !1 }),
            (0, a.jsxs)("div", {
                className: ch.mf,
                children: [
                    (0, a.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: P.intl.string(T.default["8OUg09"]),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        children: 0 === (0, cf.sj)(s) ? "\u2014" : `${Math.round(100 * (0, cf.CA)(s))}%`,
                    }),
                ],
            }),
        ],
    });
}
function cv(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(ew.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(cx, { project: t }),
        children: (e) =>
            (0, a.jsx)(t1.D, {
                innerRef: n,
                className: ch.Y$,
                "aria-label": P.intl.string(T.default.Z96gxQ),
                ...e,
                children: (0, a.jsx)(cm.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var cj = n(990250);
function cb(e) {
    let { queued: t } = e,
        n = P.intl.string(T.default.hzgPbZ);
    return (0, a.jsxs)("div", {
        className: cj.nd,
        role: "dialog",
        "aria-label": n,
        "data-testid": "conjure-queued-card",
        children: [
            (0, a.jsxs)("div", {
                className: cj.wx,
                children: [
                    (0, a.jsx)(v.E, { variant: "body-md/semibold", color: "text-default", children: n }),
                    (0, a.jsx)(v.E, { variant: "body-xs/normal", color: "text-muted", children: t.length }),
                ],
            }),
            (0, a.jsx)(tV.Ch, {
                className: cj.XG,
                children: (0, a.jsx)("ul", {
                    className: cj.p_,
                    children: t.map((e) => (0, a.jsx)(cy, { content: e.content }, e.render_id)),
                }),
            }),
        ],
    });
}
function cy(e) {
    let { content: t } = e,
        n = i.useRef(null),
        [l, r] = i.useState(!1),
        [s, u] = i.useState(!1);
    return (i.useLayoutEffect(() => {
        let e = n.current;
        null == e || l || u(e.scrollHeight > e.clientHeight);
    }, [t, l]),
    "" === t)
        ? (0, a.jsx)("li", {
              className: cj.AS,
              children: (0, a.jsx)(v.E, {
                  variant: "body-sm/normal",
                  color: "text-muted",
                  children: P.intl.string(T.default["07XimM"]),
              }),
          })
        : (0, a.jsxs)("li", {
              className: cj.AS,
              children: [
                  (0, a.jsx)(v.E, {
                      ref: n,
                      variant: "body-sm/normal",
                      color: "text-default",
                      lineClamp: l ? void 0 : 3,
                      className: cj.Qs,
                      children: t,
                  }),
                  s
                      ? (0, a.jsx)(nK.Q, {
                            variant: "secondary",
                            textVariant: "body-xs/medium",
                            text: P.intl.string(l ? T.default.nEMoeN : T.default["W+la29"]),
                            "aria-expanded": l,
                            onClick: () => r((e) => !e),
                        })
                      : null,
              ],
          });
}
function ck(e) {
    let { queued: t, className: n } = e,
        l = i.useRef(null);
    return (0, a.jsx)(ew.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(cb, { queued: t }),
        children: (e) =>
            (0, a.jsx)(t1.D, {
                innerRef: l,
                className: n,
                "data-testid": "conjure-queued-pill",
                ...e,
                children: (0, a.jsx)(v.E, {
                    tag: "span",
                    variant: "body-xs/medium",
                    color: "text-muted",
                    children: P.intl.formatToPlainString(T.default.REnNUn, { count: t.length }),
                }),
            }),
    });
}
var cw = n(997421);
function cA(e) {
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
        x = (0, G.Zv)(t),
        j = (0, c.bG)([eU.A], () => eU.A.getPublishStatus(t)?.publishing === !0, [t]),
        [b, y] = i.useState(null),
        k = i.useCallback(
            (e) =>
                y(
                    (0, ct.E8)(e) || e === P.intl.string(T.default.mKK6wB) || e === P.intl.string(T.default.j8tmjK)
                        ? null
                        : e,
                ),
            [],
        ),
        w = null == h ? null : (0, ct.uc)(h),
        A = null != s,
        C = s ?? (n ? l : void 0),
        S = n || r || A || !0 === f;
    return (0, a.jsxs)("div", {
        className: cw.jf,
        children: [
            (0, a.jsxs)("div", {
                className: cw.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    S || u || x || j
                        ? (0, a.jsx)(ci, {
                              activity: d,
                              compacting: m,
                              saving: f,
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
                    null != C ? (0, a.jsx)(cc, { startedAt: C }) : null,
                ],
            }),
            null != C ? (0, a.jsx)(cd, { startedAt: C }) : null,
            0 === p.length ? null : (0, a.jsx)(ck, { queued: p, className: o()(cw.BP, cw.A1) }),
            null == h || null == w
                ? null
                : (0, a.jsxs)("span", {
                      className: cw.BP,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "body-xs/medium",
                              color: "text-muted",
                              "aria-label": w.aria,
                              children: w.text,
                          }),
                          (0, a.jsx)(cv, { project: h }),
                      ],
                  }),
            "open" === g
                ? null
                : (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "body-xs/medium",
                      color: "failed" === g ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": P.intl.formatToPlainString(T.default["tCo+ZM"], { status: (0, ct.Db)(g) }),
                      "data-conjure-conn": !0,
                      "data-state": g,
                      className: cw.XF,
                      children: (0, ct.Db)(g),
                  }),
        ],
    });
}
var cC = n(698638),
    cS = n(608711);
let cN = [P.intl.string(T.default["9w+Chc"]), P.intl.string(T.default.WAvmdq), P.intl.string(T.default.SKsrzl)];
function cI(e) {
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
        j = (0, c.bG)([l2.A], () => l2.A.getMessages(m), [m]),
        b = (0, c.bG)([ez.Ay], () => ez.Ay.getConnState(m), [m]),
        y = (0, c.bG)([l2.A], () => l2.A.getProjectUsage(m), [m]),
        k = (0, c.bG)([l2.A], () => l2.A.getThinkingActivity(m), [m]),
        w = (0, c.bG)([l2.A], () => l2.A.isCompacting(m), [m]),
        A = (0, c.bG)([l2.A], () => l2.A.isSaving(m), [m]),
        C = (0, c.bG)([lG.A], () => lG.A.getModelSettings(m), [m]),
        S = i.useRef(null),
        N = i.useRef(null),
        I = i.useRef(null),
        E = i.useRef(null),
        {
            stickToBottomRef: M,
            pinned: R,
            atBottom: L,
            unpin: $,
            releasePinHold: D,
            showsLatest: q,
            showsLatestRef: F,
            handleShowsLatestChange: O,
            updatePin: G,
        } = (function (e) {
            let t = i.useRef(!0),
                [n, l] = i.useState(!0),
                [r, a] = i.useState(!0),
                s = i.useRef(!1),
                u = i.useCallback(() => {
                    ((s.current = !0), (t.current = !1), l(!1));
                }, []),
                o = i.useCallback(() => {
                    s.current = !1;
                }, []),
                [c, d] = i.useState(!0),
                m = i.useRef(!0),
                f = i.useCallback((e) => {
                    ((m.current = e), d(e));
                }, []);
            i.useLayoutEffect(() => {
                let t = e.current?.getScrollerNode();
                if (null != t) {
                    for (let e of o9) t.addEventListener(e, o, { passive: !0 });
                    return () => {
                        for (let e of o9) t.removeEventListener(e, o);
                    };
                }
            }, [e, o]);
            let h = i.useCallback(() => {
                let n = e.current;
                if (null == n) return;
                let r = n.getDistanceFromBottom(),
                    i = !s.current && r < 32 && m.current;
                t.current = i;
                let u = r > 1 || !m.current;
                (a((e) => (!u === e ? e : !u)), l((e) => (e === i ? e : i)));
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
        })(N),
        U = i.useCallback(() => {
            function e() {
                let e = S.current;
                if (null == e) return;
                let t = e.querySelector('[data-conjure-turn-status="true"][data-live="true"]'),
                    n = e.querySelectorAll('[data-conjure-turn-status="true"]'),
                    l = t ?? n[n.length - 1];
                if (null == l) return;
                let r = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
                l.scrollIntoView({ block: "center", behavior: r ? "auto" : "smooth" });
            }
            (D(), F.current ? e() : I.current?.showLatest(e));
        }, [D, F]),
        B = i.useCallback(() => {
            (G(), I.current?.handleScroll());
            let e = E.current;
            null != e && (e.position = M.current ? null : (I.current?.snapshot() ?? null));
        }, [G, M]),
        K = i.useContext(Z.A) === m;
    i.useLayoutEffect(() => {
        if (!K) return;
        let e = { position: J.A.getProjectView(m).chatScroll };
        return ((E.current = e), () => (0, Y.g7)(m, { chatScroll: e.position }));
    }, [K, m]);
    let H = i.useRef(!K);
    (i.useLayoutEffect(() => {
        if (H.current || !(0, tY.i_)(j)) return;
        H.current = !0;
        let e = J.A.getProjectView(m).chatScroll;
        null != e && I.current?.restore(e) !== !0 && null != E.current && (E.current.position = null);
    }, [j, m]),
        i.useLayoutEffect(() => {
            let e = S.current;
            if (null == e) return;
            let t = N.current?.getScrollerNode(),
                n = e.getBoundingClientRect().width,
                l = t?.getBoundingClientRect().height,
                r = new ResizeObserver((t) => {
                    let r = !1;
                    for (let a of t)
                        if (a.target === e) {
                            let e = a.contentRect.width;
                            if (e === n) continue;
                            ((n = e), (r = !0));
                        } else {
                            let e = a.contentRect.height;
                            if (e === l) continue;
                            ((l = e), (r = !0));
                        }
                    r && (M.current ? N.current?.scrollToBottom() : I.current?.recordAnchor());
                });
            return (r.observe(e), null != t && r.observe(t), () => r.disconnect());
        }, [M]),
        i.useEffect(() => {
            (0, ez.ensureConnection)(m);
        }, [m]),
        (0, ro.E1)(m, (0, tQ.j)()));
    let V = (0, z.rt)(m),
        W = (function (e) {
            let t = (0, eK.Ay)(e),
                n = t?.guildId ?? null,
                l = (0, c.bG)([la.A], () => (null == n ? null : (la.A.getGuild(n)?.name ?? null))),
                [r, a] = i.useState(null),
                s = t?.missingSurface ?? null;
            return null == s || r === e
                ? null
                : {
                      message: P.intl.format("channel" === s ? T.default["1cm4fj"] : T.default.Lm7IRC, {
                          server: l ?? "",
                      }),
                      onDismiss: () => a(e),
                  };
        })(m),
        X = (function (e) {
            let t = (0, c.bG)([rr.A], () => rr.A.getSpendLimit(e), [e]);
            if (null == t) return null;
            let n = null == t.limitUsd ? null : ra.format(t.limitUsd);
            if ("blocked" === t.state) {
                let e = rl.A.getSubmitRequestURL();
                return {
                    blocked: !0,
                    message:
                        null == n
                            ? P.intl.format(T.default["bw/n4C"], { helpdeskURL: e })
                            : P.intl.format(T.default.GYqJXH, { limit: n, helpdeskURL: e }),
                };
            }
            if (null == t.limitUsd || null == n || t.limitUsd <= 0) return null;
            let l = Math.min(99, Math.floor((t.spentUsd / t.limitUsd) * 100));
            return { blocked: !1, message: P.intl.formatToPlainString(T.default.GHgG2B, { percent: l, limit: n }) };
        })(m),
        ee =
            ((l = (0, c.bG)([lU.A], () => lU.A.getFailure(m))),
            (r = i.useCallback(() => (0, lB.CM)(m), [m])),
            null == l
                ? null
                : {
                      message: P.intl.format(T.default.Up6Ssw, { reason: l }),
                      retry: { text: P.intl.string(T.default["ywA+ET"]), onClick: r },
                  }),
        et = (0, Q.AJ)(m),
        en = (0, c.bG)([lU.A], () => lU.A.getSetupStartedAt(m), [m]),
        el = i.useCallback(
            (e, t) => {
                (0, ez.dv)(m, e, t);
            },
            [m],
        ),
        er = i.useCallback(
            (e, t, n) => {
                let l = n ?? el;
                0 === V.annotations.length
                    ? l(e, t)
                    : (l((0, lD.BL)({ annotations: V.annotations, metaComment: e, context: V.context }), t),
                      (0, z.mB)(m));
            },
            [V, el, m],
        ),
        ea = i.useCallback(() => {
            (!(function (e) {
                let t = !1;
                for (let [n, l] of nh)
                    l.projectId === e &&
                        (l.job?.cancel(),
                        (0, ez.re)(e, l.nonce),
                        (function (e) {
                            let t = nh.get(e);
                            (nh.delete(e), np(e, null), t?.thumbUrl != null && URL.revokeObjectURL(t.thumbUrl));
                        })(n),
                        (t = !0));
                return t;
            })(m) ||
                l2.A.isThinking(m)) &&
                (0, ez.fu)(m);
        }, [m]),
        ei = i.useCallback((e) => (0, nv.RQ)(m, e.implementation_prompt), [m]),
        [es, eu] = (function (e) {
            let [t, n] = i.useState(() => rd(e)),
                [l, r] = i.useState(e),
                a = l !== e,
                s = a ? rd(e) : t;
            return (a && (r(e), n(s)), [s, n]);
        })(m),
        eo = i.useCallback(() => el(P.intl.string(T.default["t5CN3+"])), [el]),
        ec = i.useCallback((e, t, n) => (0, nv.RQ)(m, e, { clarificationAnswers: t, attachments: n }), [m]),
        ed = i.useCallback((e) => (0, lz.X)(m, e), [m]),
        em = i.useCallback((e) => (0, e9.vX)(m, e), [m]),
        ef = i.useCallback((e) => (0, tn.gn)(m, "chat", Array.from(e), em), [m, em]),
        eh = i.useCallback(() => (0, nv.RQ)(m, P.intl.string(T.default.Zc7gML)), [m]),
        eg = f?.status === "restoring",
        ep = "open" === b && !eg,
        ex = j[j.length - 1],
        ev = null != ex && "assistant" === ex.role && null != ex.proposal,
        [ej, eb] = i.useState(null),
        ey = i.useMemo(
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
        ek = null != ey && ey.id !== ej ? ey : null,
        ew = i.useCallback(() => {
            null != ek && eb(ek.id);
        }, [ek]),
        [eA, eC] = i.useState(null),
        eS = (function (e) {
            let [t, n] = i.useState(null),
                l = i.useRef(null),
                r = i.useCallback((e) => {
                    ((l.current = e), n(e));
                }, []),
                a = t?.projectId === e ? t : null,
                s = i.useCallback(
                    (t, n) =>
                        r({
                            projectId: e,
                            request: {
                                id: `manual:${e}:${Date.now()}`,
                                summary: P.intl.string(T.default["o2++BO"]),
                                prompt: t.trim().slice(0, 4e3),
                            },
                            clearComposer: n,
                        }),
                    [e, r],
                ),
                u = i.useCallback(() => r(null), [r]),
                o = i.useCallback(
                    (e) => {
                        let t = l.current;
                        t?.request.id === e && (t.clearComposer(), r(null));
                    },
                    [r],
                );
            return { request: a?.request ?? null, open: s, close: u, sent: o };
        })(m),
        eN = ex?.appBuildRequest != null && (0, tY.BL)(ex) && ex.appBuildRequest.id !== eA ? ex.appBuildRequest : null,
        eI = eS.request ?? (null == ek ? eN : null),
        eE = null == eS.request ? ek : null,
        e_ = null != eI && eI === eS.request,
        { close: eM, sent: eR } = eS,
        eT = eS.request?.id,
        eP = i.useCallback(() => {
            e_ ? eM() : null != eI && eC(eI.id);
        }, [eI, e_, eM]),
        eL = i.useCallback(
            (e) => {
                (null != eT && eR(eT),
                    (0, _.P0)({
                        text: P.intl.formatToPlainString(T.default.RZO35O, { names: e.map((e) => e.name).join(", ") }),
                        variant: "success",
                    }));
            },
            [eT, eR],
        ),
        e$ = (0, c.bG)([l1.A], () => l1.A.getSettings(m), [m]),
        [eD, eq] = i.useState(null),
        eF = l7(),
        eO =
            null != ex &&
            ((t = ex.id),
            (s = (0, lK.Mv)(j, e$?.secrets)),
            (u = l8(j)),
            j.some(
                (e) =>
                    "assistant" === e.role &&
                    e.id !== t &&
                    !!(0, tY.BL)(e) &&
                    ((null != e.secretRequest && "open" === s.get(e.render_id)) ||
                        (null != e.settingsRequest && !u.has(e.id) && !l9(e.settingsRequest, e$, eF.has(e.id)))),
            )),
        eG =
            null != ex &&
            "assistant" === ex.role &&
            null != ex.settingsRequest &&
            null == ex.secretRequest &&
            (0, tY.BL)(ex) &&
            ex.id !== eD &&
            ((n = ex.settingsRequest),
            (o = n.keys ?? []),
            null != e$ &&
                0 !== o.length &&
                o.every((e) => {
                    let t = e$.schema.find((t) => t.key === e);
                    return null != t && lX.has(t.type);
                })) &&
            lQ(ex.settingsRequest, e$) &&
            !eO
                ? ex
                : null,
        eU = null == eS.request ? eG : null,
        eB = eU?.settingsRequest ?? null,
        eH = i.useCallback(() => {
            null != eG && eq(eG.id);
        }, [eG]),
        eV = null != eB,
        [eW, eX] = i.useState(null),
        eQ = e$?.secrets,
        eZ = i.useMemo(() => (0, lK.Qr)(j, (0, lK.Mv)(j, eQ)), [j, eQ]),
        eY = null != eZ && eZ.render_id !== eW ? eZ : null,
        eJ = null == eE && null == eI ? eY : null,
        e0 = i.useCallback(() => {
            null != eY && eX(eY.render_id);
        }, [eY]),
        [e1, e2] = i.useState(null),
        e4 = eE?.id ?? eI?.id ?? eJ?.render_id ?? eU?.id,
        e5 = null != ek || null != eI || null != eY || null != eG;
    i.useLayoutEffect(() => {
        let e = N.current?.getScrollerNode(),
            t = e1?.firstElementChild;
        if (null == e1 || null == e || !(0, e7.vq)(t, HTMLElement) || null == e4) return;
        function n() {
            M.current && N.current?.scrollToBottom();
        }
        let l = new ResizeObserver(() => {
            let l = e.getBoundingClientRect().bottom - e1.getBoundingClientRect().top - t.offsetTop;
            (e.style.setProperty("--custom-conjure-docked-card-inset", `${Math.max(0, Math.round(l))}px`), n());
        });
        return (
            l.observe(t),
            l.observe(e, { box: "border-box" }),
            () => {
                (l.disconnect(), e.style.removeProperty("--custom-conjure-docked-card-inset"), n());
            }
        );
    }, [e1, e4, N, M]);
    let e8 = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: (0, c.bG)([l2.A], () => l2.A.hasLoadedHistory(m), [m]),
            historyUnavailable: (0, c.bG)([l2.A], () => l2.A.isHistoryUnavailable(m), [m]),
            connState: b,
        }),
        te = !(0, tY.i_)(j),
        tt = "loading" === e8 && te,
        tl = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < m.length; t++) e = (31 * e + m.charCodeAt(t)) % 0x7fffffff;
            return cN[e % cN.length];
        }, [m]),
        tr = ev ? P.intl.string(T.default.Zc7gML) : "greeting" === e8 && te ? tl : null,
        ta = i.useMemo(() => {
            for (let e = j.length - 1; e >= 0; e--) {
                let t = j[e];
                if ("assistant" === t.role && !(0, tY.BL)(t)) return t;
            }
        }, [j]),
        ti = null != ta,
        ts = i.useMemo(() => j.filter((e) => "user" === e.role && "queued" === e.disposition), [j]),
        tu = null != ta ? (0, ri.S)(ta) : void 0,
        to = ev && ep ? eh : void 0,
        td = i.useCallback(() => (0, nv.RQ)(m, P.intl.string(T.default.EMgIuY)), [m]),
        [tm, tf] = i.useState(null),
        [th, tg] = i.useState(ti);
    (th !== ti && (tg(ti), ti || tf(null)),
        i.useEffect(() => {
            if (!ti) return;
            let e = N.current?.getScrollerNode(),
                t = e?.querySelector('[data-conjure-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let n = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? tf(null)
                        : tf(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (n.observe(t), () => n.disconnect());
        }, [ti, ta?.steps, q]));
    let tp = q ? tm : "bottom",
        tx = i.useMemo(() => (null != ta ? (0, t0.b9)(ta.steps) : ""), [ta]),
        tv = i.useMemo(() => (null != ta ? ((0, tZ.lt)(ta.steps) ?? ta.todos) : void 0), [ta]),
        tj = ta?.provisionalTodo,
        tb = null != ta && tJ(ta),
        ty = i.useMemo(() => {
            var e;
            return null != ta ? ((e = ta.steps), rN((0, tZ.Jf)(e, !0).tasks)) : void 0;
        }, [ta]);
    return (0, a.jsxs)("section", {
        ref: S,
        "data-conjure-chat": !0,
        className: cS.TE,
        children: [
            ep
                ? (0, a.jsx)(tX.A, {
                      title: P.intl.string(T.default.gy7byi),
                      description: P.intl.string(T.default["dkv/WO"]),
                      icons: cC.ir,
                      onDrop: ef,
                  })
                : null,
            (0, a.jsx)(nd, {
                onJumpToActivity: U,
                line: tx,
                placement: ti && "top" === tp ? "top" : null,
                todos: tv,
                todosLive: tb,
                provisionalTodo: tj,
                agents: ty,
            }),
            (0, a.jsxs)("div", {
                className: cS.JX,
                children: [
                    (0, a.jsx)(tV.Ch, {
                        ref: N,
                        onScroll: B,
                        scrollbarGutter: tt ? "both-edges" : "stable",
                        className: [cS.N$, L ? null : cS.hB, eV ? cS.J9 : null].filter(Boolean).join(" "),
                        children: (0, a.jsx)(rs.Fu.Provider, {
                            value: m,
                            children: (0, a.jsx)(ce, {
                                projectId: m,
                                messages: j,
                                emptyState: e8,
                                floatingSettingsMessageId: eG?.id,
                                floatingSecretRenderId: eJ?.render_id,
                                liveClarificationId: eE?.id,
                                onPickIdea: ep ? ei : void 0,
                                onAskForIdeas: ep ? eo : void 0,
                                draftHasText: es,
                                onApprovePlan: ep ? td : void 0,
                                onRestoreVersion: eg || ti ? void 0 : h,
                                scrollerRef: N,
                                stickToBottomRef: M,
                                pinned: R,
                                onUnpin: $,
                                handleRef: I,
                                onShowsLatestChange: O,
                            }),
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: cS.NJ,
                        children: (0, a.jsx)(cA, {
                            projectId: m,
                            thinking: ti,
                            turnStartedAt: tu,
                            restoring: eg,
                            remixStartedAt: en,
                            recalling: tt,
                            thinkingActivity: k,
                            compacting: w,
                            saving: A,
                            projectUsage: y,
                            connState: b,
                            queued: ts,
                        }),
                    }),
                    null == eE
                        ? null
                        : (0, a.jsx)("div", {
                              ref: e2,
                              className: eV ? `${cS.B5} ${cS.J9}` : cS.B5,
                              children: (0, a.jsx)(
                                  l$,
                                  { projectId: m, clarification: eE, onSubmit: ep ? ec : void 0, onDismiss: ew },
                                  eE.id,
                              ),
                          }),
                    null == eI
                        ? null
                        : (0, a.jsx)("div", {
                              ref: e2,
                              className: cS.B5,
                              children: (0, a.jsx)(
                                  nN,
                                  { projectId: m, request: eI, canSend: ep, onDismiss: eP, onSent: e_ ? eL : void 0 },
                                  eI.id,
                              ),
                          }),
                    eJ?.secretRequest == null
                        ? null
                        : (0, a.jsx)("div", {
                              ref: e2,
                              className: cS.B5,
                              children: (0, a.jsx)(
                                  l0,
                                  {
                                      projectId: m,
                                      cardId: eJ.render_id,
                                      request: eJ.secretRequest,
                                      status: "open",
                                      onDismiss: e0,
                                  },
                                  eJ.render_id,
                              ),
                          }),
                    null == eB
                        ? null
                        : (0, a.jsx)("div", {
                              ref: null == eE && null == eI ? e2 : void 0,
                              className: cS.B5,
                              children: (0, a.jsx)(
                                  rn,
                                  { askId: eU?.id, projectId: m, request: eB, onDismiss: eH },
                                  eU?.id,
                              ),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: cS.Jx,
                children: [
                    (0, a.jsx)(nd, {
                        onJumpToActivity: U,
                        line: tx,
                        placement: ti && "bottom" === tp ? "bottom" : null,
                        todos: tv,
                        todosLive: tb,
                        provisionalTodo: tj,
                        agents: ty,
                    }),
                    0 === V.annotations.length
                        ? null
                        : (0, a.jsxs)("div", {
                              className: cS.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "body-sm/medium",
                                      color: "text-default",
                                      children: P.intl.formatToPlainString(T.default["7b49dS"], {
                                          count: V.annotations.length,
                                      }),
                                  }),
                                  (0, a.jsx)(v.E, {
                                      variant: "body-xs/normal",
                                      color: "text-muted",
                                      children: P.intl.string(T.default["5zG+CR"]),
                                  }),
                                  (0, a.jsx)(d.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: P.intl.string(T.default["/zOv9+"]),
                                      onClick: () => (0, z.mB)(m),
                                  }),
                              ],
                          }),
                    et ? (0, a.jsx)("div", { className: cS.qB, children: (0, a.jsx)(lO, { projectId: m }) }) : null,
                    null == ee
                        ? null
                        : (0, a.jsx)("div", {
                              className: cS.qB,
                              children: (0, a.jsx)(tW.w, {
                                  type: "critical",
                                  role: "alert",
                                  message: ee.message,
                                  action: ee.retry,
                              }),
                          }),
                    null == W
                        ? null
                        : (0, a.jsxs)("div", {
                              className: cS.Db,
                              children: [
                                  (0, a.jsx)(tW.w, { type: "warning", role: "status", message: W.message }),
                                  (0, a.jsx)("div", {
                                      className: cS.jU,
                                      children: (0, a.jsx)(e6.m, {
                                          text: P.intl.string(P.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, a.jsx)(tc.K, {
                                              "aria-label": P.intl.string(P.t.WAI6xu),
                                              icon: e3.XSmallIcon,
                                              variant: "color-mix",
                                              size: "md",
                                              onClick: W.onDismiss,
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                    null == X
                        ? null
                        : (0, a.jsx)("div", {
                              className: cS.qB,
                              children: (0, a.jsx)(tW.w, {
                                  type: X.blocked ? "critical" : "warning",
                                  role: X.blocked ? "alert" : "status",
                                  message: X.message,
                              }),
                          }),
                    (0, a.jsx)(ut, {
                        projectId: m,
                        escapeScopeRef: p,
                        canSend: ep,
                        running: ti,
                        restoring: eg,
                        onSend: er,
                        hasPendingContext: V.annotations.length > 0,
                        onInterrupt: ep ? ea : void 0,
                        onUploadFile: em,
                        onImport: g,
                        onSendToOtherProjects: e5 ? void 0 : eS.open,
                        onApprove: to,
                        suggestion: tr,
                        questionOpen: e5,
                        secretPending: null != eJ,
                        modelSettings: C,
                        onModelSettingsChange: ed,
                        onDraftHasTextChange: eu,
                        aiPaused: X?.blocked === !0,
                        managedCopy: et,
                        visible: x,
                    }),
                ],
            }),
        ],
    });
}
var cE = n(761508),
    c_ = n(209695),
    cM = n(207438),
    cR = n(683438),
    cT = n(721507);
function cP(e, t) {
    return String(e).padStart(t, "0");
}
function cL(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let n = Date.parse(e);
    if (Number.isNaN(n)) return null;
    let l = new Date(n),
        r = `${cP(l.getHours(), 2)}:${cP(l.getMinutes(), 2)}:${cP(l.getSeconds(), 2)}`;
    return "millis" === t ? `${r}.${cP(l.getMilliseconds(), 3)}` : r;
}
var c$ = n(667931);
let cD = {
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
    cq = { running: "Running", ok: "Done", error: "Failed" };
function cF(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function cO(e) {
    var t;
    return (t = Math.round(e)) < 1e3 ? `${t}ms` : `${(t / 1e3).toFixed(1)}s`;
}
function cG(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function cz(e) {
    return cO(e.count > 1 ? e.totalMs : e.end - e.start);
}
let cU = ["Arguments", "Result", "Usage", "Details"];
function cB(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function cK(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function cH(e) {
    let t = (0, c$.bM)(e)?.end;
    return null != t ? `${(t / 1e3).toFixed(2)}s` : (0, c$.lp)(e) ? "interrupted" : "still running";
}
function cV(e) {
    return [cL(new Date(e.started_at).toISOString()) ?? "", cG(e.spans.length), (0, c$.Sj)((0, c$.bM)(e)?.attrs)]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function cW(e) {
    let t = (0, c$.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let r of e.spans) {
        let { service: e, category: a } = (0, c$.N5)(r);
        (n.set(a, (n.get(a) ?? 0) + (t.get(r.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += cX(r, "in")),
                (l.output += cX(r, "out")),
                (l.cacheRead += cX(r, "cache_read")),
                (l.cacheWrite += cX(r, "cache_write")),
                (l.costUsd += cX(r, "cost_usd"))));
    }
    let r = c$.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: r, busyMs: r.reduce((e, t) => e + t.ms, 0), model: l };
}
function cX(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
var cQ = n(738188),
    cZ = n(430993),
    cY = n(364840),
    cJ = n(224640),
    c0 = n(20742);
let c1 = { collapsed: new Set(), revealed: new Set() };
var c2 = n(872892);
let c3 = {
    op: c2.Q,
    model: c2.i3,
    tool: c2.dH,
    setup: c2.kc,
    worktree: c2.Qx,
    sandbox: c2.QH,
    build: c2.F1,
    platform: c2.Op,
    other: c2.fv,
};
function c4(e) {
    let { stats: t } = e,
        n = (function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      cG(t.calls, "model call"),
                      `${cF(t.input)} in`,
                      `${cF(t.output)} out`,
                      `${cF(t.cacheRead)} cache read`,
                      `${cF(t.cacheWrite)} cache write`,
                      cK(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, a.jsxs)("div", {
        className: c2.M1,
        children: [
            (0, a.jsx)("div", {
                className: c2.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, a.jsx)(
                              "div",
                              {
                                  className: `${c2.DJ} ${c3[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, a.jsx)("div", {
                className: c2.o1,
                children: c$.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${cO(n)}`;
                    return (0, a.jsxs)(
                        "span",
                        {
                            className: c2.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${c2.nf} ${c3[e]}` }),
                                (0, a.jsx)(v.E, { variant: "body-xs/normal", color: "text-muted", children: cD[e] }),
                                null == l
                                    ? null
                                    : (0, a.jsx)(v.E, {
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
                : (0, a.jsx)(v.E, {
                      variant: "body-sm/normal",
                      color: "text-default",
                      tabularNumbers: !0,
                      children: n,
                  }),
        ],
    });
}
function c5(e) {
    return `conjure-perf-trace-${e}`;
}
function c7(e) {
    let { start: t, end: n, extent: l, barClass: r, duration: i } = e,
        s = (t / l) * 100,
        u = ((n - t) / l) * 100;
    return (0, a.jsxs)("div", {
        className: c2.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(u) },
        children: [
            (0, a.jsx)("div", { className: r }),
            (0, a.jsx)(v.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${c2.p0} ${s + u > 85 ? c2.EU : c2.jh}`,
                children: i,
            }),
        ],
    });
}
function c8(e) {
    let { node: t, extent: n, collapsed: l, selected: r, onSelect: s, onToggle: u, onExpandSubtree: o } = e,
        c = t.children.length > 0,
        d = l ? t7.ChevronSmallRightIcon : eN.ChevronSmallDownIcon,
        m = i.useCallback(
            (e) => {
                (e.shiftKey && o(t.key), s(t.key));
            },
            [t.key, o, s],
        ),
        f = i.useCallback(
            (e) => {
                (e.stopPropagation(), e.shiftKey ? o(t.key) : u(t.key));
            },
            [t.key, o, u],
        );
    return (0, a.jsxs)(t1.D, {
        tag: "div",
        role: "treeitem",
        id: c5(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !l : void 0,
        "aria-selected": r,
        className: `${c2.$y} ${r ? c2.wQ : ""}`,
        onClick: m,
        children: [
            (0, a.jsxs)("div", {
                className: c2.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, a.jsx)(t1.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: c2.ai,
                              onClick: f,
                              children: (0, a.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, a.jsx)("span", { className: c2.YJ }),
                    (0, a.jsx)(v.E, {
                        variant: "body-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: c2.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, a.jsx)("span", { className: `${c2.nf} ${c3[t.category]}` }),
                    (0, a.jsx)(v.E, {
                        variant: "body-sm/semibold",
                        color: "text-strong",
                        className: c2.eu,
                        children: t.service,
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        className: c2.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, a.jsx)(v.E, {
                              variant: "body-xs/semibold",
                              color: "text-default",
                              className: c2.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, a.jsx)(cQ.WarningIcon, { size: "xs", color: "currentColor", className: c2.ik })
                        : null,
                ],
            }),
            (0, a.jsx)(c7, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${c2.M0} ${c2.Nh}`
                    : t.running
                      ? `${c2.M0} ${c2.rF}`
                      : `${c2.M0} ${c3[t.category]}`,
                duration: cz(t),
            }),
        ],
    });
}
function c9(e) {
    let { row: t, extent: n, selected: l, onReveal: r } = e;
    return (0, a.jsxs)(t1.D, {
        tag: "div",
        role: "treeitem",
        id: c5(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": l,
        className: `${c2.$y} ${l ? c2.wQ : ""}`,
        onClick: () => r(t.parentKey),
        children: [
            (0, a.jsxs)("div", {
                className: c2.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, a.jsx)("span", {
                        className: c2.ai,
                        children: (0, a.jsx)(t7.ChevronSmallRightIcon, { size: "xs", color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", { className: c2.U9 }),
                    (0, a.jsx)("span", { className: `${c2.nf} ${c2.dL}` }),
                    (0, a.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        className: c2.MQ,
                        children: cG(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, a.jsx)(c7, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${c2.M0} ${c2.ab} ${c2.dL}`,
                duration: cO(t.totalMs),
            }),
        ],
    });
}
function c6(e) {
    let { node: t } = e;
    return null == t
        ? (0, a.jsx)(v.E, {
              variant: "body-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, a.jsxs)("div", {
              className: c2._0,
              children: [
                  (0, a.jsxs)("div", {
                      className: c2.TQ,
                      children: [
                          (0, a.jsx)("span", { className: `${c2.nf} ${c3[t.category]}` }),
                          (0, a.jsx)(v.E, { variant: "body-sm/semibold", color: "text-strong", children: t.service }),
                          (0, a.jsx)(v.E, { variant: "body-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [cB("Start", `+${cO(e.start)}`), cB("Duration", cz(e))];
                      e.count > 1
                          ? t.push(
                                cB("Calls", String(e.count)),
                                cB("Longest call", cO(e.maxMs)),
                                cB("Spread over", cO(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(cB("Self time", cO(e.selfMs)));
                      let n = e.span.waits_on;
                      null != n && t.push(cB("Waited on", `${n.span_name} in ${n.trace_name}`));
                      let l = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      (l.length > 0 && t.push(cB("Notes", l.join(", "))),
                          null != e.span.error && t.push(cB("Error", e.span.error)));
                      let r = new Map();
                      for (let [t, n] of Object.entries({
                          ...e.span.attrs,
                          ...(1 === e.count ? e.span.details : null),
                      })) {
                          var a, i;
                          let l =
                                  ((a = e),
                                  "args" === (i = t) || i.startsWith("arg ")
                                      ? "Arguments"
                                      : "result" === i || "result_chars" === i
                                        ? "Result"
                                        : "model" === a.service
                                          ? "Usage"
                                          : "Details"),
                              s = "cost_usd" === t ? cK(Number(n)) : String(n);
                          r.set(l, [...(r.get(l) ?? []), cB(t.replace(/_/g, " "), s)]);
                      }
                      return [
                          { title: null, rows: t },
                          ...cU.flatMap((e) => {
                              let t = r.get(e);
                              return null == t ? [] : [{ title: e, rows: t }];
                          }),
                      ];
                  })(t).map((e) => {
                      let { title: t, rows: n } = e;
                      return (0, a.jsxs)(
                          i.Fragment,
                          {
                              children: [
                                  null == t
                                      ? null
                                      : (0, a.jsx)(v.E, {
                                            variant: "body-xs/semibold",
                                            color: "text-strong",
                                            className: c2.xd,
                                            children: t,
                                        }),
                                  n.map((e) => {
                                      let { label: t, value: n, block: l } = e;
                                      return (0, a.jsxs)(
                                          i.Fragment,
                                          {
                                              children: [
                                                  (0, a.jsx)(v.E, {
                                                      variant: "body-xs/semibold",
                                                      color: "text-muted",
                                                      children: t,
                                                  }),
                                                  l
                                                      ? (0, a.jsx)(v.E, {
                                                            variant: "mono-md/bold",
                                                            color: "text-default",
                                                            selectable: !0,
                                                            className: c2.vl,
                                                            children: n,
                                                        })
                                                      : (0, a.jsx)(v.E, {
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
function de(e) {
    let { trace: t } = e,
        n = i.useMemo(() => cW(t), [t]);
    return (0, a.jsx)(c4, { stats: n });
}
function dt(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = i.useMemo(() => (null == e ? null : (0, c$.TK)(e)), [e]),
                [n, l] = i.useState(() => (null == t ? c1 : (0, c$.hB)(t))),
                [r, a] = i.useState(null),
                s = i.useRef(null == t ? new Set() : (0, c$.x7)(t));
            i.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, c$.x7)(t)), l((n) => (0, c$._0)(n, t, e)));
            }, [t]);
            let u = i.useMemo(() => (null == t ? [] : (0, c$.wu)(t, n)), [t, n]),
                o = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, c$.IE)(t, e);
                        null != n && l((e) => (0, c$.TN)(e, n));
                    },
                    [t],
                ),
                c = i.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, c$.IE)(t, e);
                        null != n && l((e) => (0, c$.H$)(e, n));
                    },
                    [t],
                ),
                m = i.useCallback(() => {
                    null != t && l((0, c$.vH)(t));
                }, [t]),
                f = i.useCallback(() => {
                    null != t && l((0, c$.rQ)(t));
                }, [t]),
                h = i.useCallback(() => {
                    null != t && l((0, c$.hB)(t));
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
                select: a,
                expandAll: m,
                collapseAll: f,
                reset: h,
            };
        })(t),
        { rows: l, collapsed: r, selected: s, selectedKey: u, select: o, toggle: c, reveal: m, expandSubtree: f } = n,
        h = (0, c$.dj)(t),
        g = i.useMemo(() => (0, c$.nF)(h), [h]),
        p = g.length > 1 ? ((g[1] - g[0]) / h) * 100 : 100,
        x = i.useCallback(
            (e) => {
                let t,
                    n = l.findIndex((e) => e.key === u),
                    a = l[n];
                if ("ArrowDown" === e.key) t = l[Math.min(l.length - 1, n + 1)];
                else if ("ArrowUp" === e.key) t = l[Math.max(0, n - 1)];
                else if (null == a) return;
                else if ("smaller" === a.kind && ("ArrowRight" === e.key || "Enter" === e.key)) m(a.parentKey);
                else if ("node" === a.kind && "ArrowRight" === e.key && e.shiftKey) f(a.key);
                else if ("node" === a.kind && "ArrowRight" === e.key && r.has(a.key)) c(a.key);
                else {
                    if ("node" !== a.kind || "ArrowLeft" !== e.key || !(a.node.children.length > 0) || r.has(a.key))
                        return;
                    c(a.key);
                }
                (e.preventDefault(),
                    null != t && (o(t.key), document.getElementById(c5(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [r, f, m, l, o, u, c],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(cZ.c, {
                children: [
                    (0, a.jsxs)("div", {
                        className: c2.z,
                        children: [
                            (0, a.jsx)(v.E, {
                                variant: "body-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: cH(t),
                            }),
                            (0, a.jsx)(v.E, {
                                variant: "body-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: cV(t),
                            }),
                            null == t.started_by
                                ? null
                                : (0, a.jsx)(v.E, {
                                      variant: "body-sm/normal",
                                      color: "text-muted",
                                      children: `Started by ${t.started_by.trace_name}`,
                                  }),
                            0 === t.dropped
                                ? null
                                : (0, a.jsx)(v.E, {
                                      variant: "body-sm/normal",
                                      color: "text-feedback-warning",
                                      children: `${cG(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, a.jsx)(de, { trace: t }),
                    (0, a.jsxs)("div", {
                        className: c2.KE,
                        children: [
                            (0, a.jsx)(d.$, { size: "sm", variant: "secondary", text: "Time sinks", onClick: n.reset }),
                            (0, a.jsx)(d.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Expand all",
                                onClick: n.expandAll,
                            }),
                            (0, a.jsx)(d.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Collapse all",
                                onClick: n.collapseAll,
                            }),
                            (0, a.jsx)(v.E, {
                                variant: "body-xs/normal",
                                color: "text-muted",
                                children: "Shift-click a span to expand everything under it.",
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        role: "tree",
                        tabIndex: 0,
                        "aria-label": "Spans",
                        "aria-activedescendant": null == u ? void 0 : c5(u),
                        className: c2.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(p) },
                        onKeyDown: x,
                        children: [
                            (0, a.jsxs)("div", {
                                className: c2.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: c2.So,
                                        children: (0, a.jsx)(v.E, {
                                            variant: "body-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: c2.c1,
                                        children: g.map((e) =>
                                            (0, a.jsx)(
                                                v.E,
                                                {
                                                    variant: "body-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${c2.io} ${(e / h) * 100 > 85 ? c2.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / h) * 100),
                                                    },
                                                    children: 0 === e ? "0" : cO(e),
                                                },
                                                e,
                                            ),
                                        ),
                                    }),
                                ],
                            }),
                            l.map((e) =>
                                "node" === e.kind
                                    ? (0, a.jsx)(
                                          c8,
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
                                    : (0, a.jsx)(c9, { row: e, extent: h, selected: e.key === u, onReveal: m }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(cY.j, { children: (0, a.jsx)(c6, { node: s }) }),
        ],
    });
}
function dn(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: r } = e,
        i = (0, c.bG)([oU.A], () => oU.A.getTimingTrace(l, r), [l, r]),
        s = i?.name ?? "Perf Trace";
    return (0, a.jsxs)(cJ.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, a.jsx)(c0.rQ, { title: s }),
            null == i
                ? (0, a.jsx)(cZ.c, {
                      children: (0, a.jsx)(v.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, a.jsx)(dt, { trace: i }),
        ],
    });
}
let dl = { running: c2.Vf, ok: c2.mo, error: c2.Sr };
function dr(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", { className: `${c2.Om} ${dl[t]}`, role: "img", "aria-label": cq[t] });
}
function da(e, t) {
    (0, H.qf)((n) => (0, a.jsx)(dn, { ...n, projectId: e, traceId: t }));
}
function di(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        r = i.useCallback(() => da(t, n.id), [t, n.id]);
    return (0, a.jsxs)(t1.D, {
        className: c2.nM,
        onClick: r,
        children: [
            (0, a.jsxs)("div", {
                className: c2.sU,
                children: [
                    (0, a.jsx)(dr, { status: (0, c$.lQ)(n) }),
                    (0, a.jsx)(v.E, {
                        variant: "body-sm/semibold",
                        color: "text-default",
                        className: c2._k,
                        children: n.name,
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "body-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: cH(n),
                    }),
                ],
            }),
            (0, a.jsx)(v.E, { variant: "body-xs/normal", color: "text-muted", tabularNumbers: !0, children: cV(n) }),
            null == l
                ? null
                : (0, a.jsx)(v.E, { variant: "body-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function ds(e) {
    let { projectId: t, traces: n } = e,
        l = i.useRef(null),
        r = i.useCallback(() => {
            let e = JSON.stringify({
                kind: "conjure.timing_traces",
                version: 1,
                project_id: t,
                exported_at: new Date().toISOString(),
                traces: n,
            });
            (0, cT.o)(new Blob([e], { type: "application/json" }), `conjure-traces-${t}.json`).catch((e) => {
                console.error("[conjure] trace export failed", t, e);
            });
        }, [t, n]);
    return (0, a.jsx)(ew.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: ew.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, a.jsx)(eA.W, {
                "data-menu-migrated": !0,
                navId: `conjure-traces-${t}`,
                "aria-label": "Trace actions",
                onClose: l,
                onSelect: l,
                children: (0, a.jsx)(eC.rX, {
                    children: (0, a.jsx)(eC.Dr, {
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
            return (0, a.jsx)(tc.K, {
                ...e,
                buttonRef: l,
                icon: aY.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "More",
                "aria-haspopup": "menu",
                "aria-expanded": n,
            });
        },
    });
}
function du(e) {
    let { projectId: t } = e,
        n = (0, c.yK)([oU.A], () => oU.A.getTimingTraces(t), [t]),
        [l, r] = i.useState(""),
        s = i.useMemo(() => {
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
        u = i.useMemo(() => [...s].reverse(), [s]),
        o = i.useMemo(
            () =>
                (function (e) {
                    let t = e.map(cW);
                    function n(e) {
                        return t.reduce((t, n) => t + e(n), 0);
                    }
                    return {
                        categories: c$.BF.map((e) => ({
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
        ? (0, a.jsxs)("div", {
              className: c2.Ie,
              children: [
                  (0, a.jsx)(v.E, { variant: "body-sm/medium", color: "text-default", children: "No traces yet" }),
                  (0, a.jsx)(v.E, {
                      variant: "body-sm/normal",
                      color: "text-muted",
                      children:
                          "Turns and project operations over 100ms show up here as they run. Periodic checks and live preview requests show up only when they take a second or fail.",
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: c2.nd,
              children: [
                  (0, a.jsxs)("div", {
                      className: c2.Ko,
                      children: [
                          (0, a.jsx)("div", {
                              className: c2.fH,
                              children: (0, a.jsx)(cR.I, {
                                  query: l,
                                  onChange: r,
                                  onClear: () => r(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, a.jsx)(ds, { projectId: t, traces: s }),
                      ],
                  }),
                  (0, a.jsxs)(tV.Ch, {
                      className: c2.XG,
                      children: [
                          (0, a.jsx)(c4, { stats: o }),
                          0 === u.length
                              ? (0, a.jsx)(v.E, {
                                    variant: "body-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, a.jsx)("ul", {
                                    className: c2.p_,
                                    "aria-label": "Traces",
                                    children: u.map((e) =>
                                        (0, a.jsx)(
                                            "li",
                                            { children: (0, a.jsx)(di, { projectId: t, trace: e }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function dc(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function dd(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function dm(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function df(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function dh(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function dg(e) {
    return P.intl.string("preview" === e ? T.default["2yLYlG"] : T.default.eiAi57);
}
let dp = ["all", "preview", "stable", "web"];
function dx(e) {
    switch (e.reason) {
        case "local":
            return P.intl.string(T.default.mUeKML);
        case "unconfigured":
            return P.intl.string(T.default.bGefb5);
        case "unauthorized":
            return P.intl.string(T.default.KLx6Bb);
        default:
            return null != e.detail
                ? P.intl.formatToPlainString(T.default.t09Q6q, { detail: e.detail })
                : P.intl.string(T.default["t+tG59"]);
    }
}
function dv(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : P.intl.formatToPlainString(T.default["XO/bN4"], {
              p50: dc(e.memory_p50_bytes ?? 0),
              p999: dc(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let dj = {
    db: () => T.default["7l+DFG"],
    db_preview: () => T.default.FAuffi,
    runtime: () => T.default["Gkl+ab"],
    runtime_preview: () => T.default.ynpJzv,
    bot: () => T.default["5/i0cj"],
    bot_preview: () => T.default.m2jsnw,
};
var db = n(911608),
    dy = n(177427);
function dk(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: dy.KE,
        children: [
            (0, a.jsx)("div", {
                className: dy.IQ,
                children:
                    "loading" === n
                        ? (0, a.jsx)(b.y, { type: b.t.PULSING_ELLIPSIS })
                        : "failed" === n
                          ? (0, a.jsx)(v.E, {
                                variant: "body-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: P.intl.string(T.default.ZVByPX),
                            })
                          : null != t
                            ? (0, a.jsx)(v.E, {
                                  variant: "body-xs/normal",
                                  color: "text-muted",
                                  children: P.intl.formatToPlainString(T.default.INVO50, { time: df(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(d.$, { variant: "secondary", size: "sm", text: P.intl.string(T.default.oKEgiu), onClick: l }),
        ],
    });
}
function dw(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: dy.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(v.E, { variant: "body-xs/semibold", color: "text-muted", className: dy.Gf, children: t }),
            n,
        ],
    });
}
function dA(e) {
    let { label: t, value: n, hint: l, critical: r = !1, icon: i, state: s } = e;
    return (0, a.jsxs)("div", {
        className: dy.N8,
        children: [
            (0, a.jsxs)("div", {
                className: dy.x7,
                children: [
                    (0, a.jsxs)("span", {
                        className: dy.kS,
                        children: [i, (0, a.jsx)(v.E, { variant: "body-sm/normal", color: "text-muted", children: t })],
                    }),
                    (0, a.jsxs)("span", {
                        className: dy.kS,
                        children: [
                            s,
                            (0, a.jsx)(v.E, {
                                variant: "body-sm/medium",
                                color: r ? "text-feedback-critical" : "text-default",
                                children: n,
                            }),
                        ],
                    }),
                ],
            }),
            null != l && (0, a.jsx)(v.E, { variant: "body-xs/normal", color: "text-muted", children: l }),
        ],
    });
}
function dC(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        i = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = i >= 0.9;
    return (0, a.jsxs)("div", {
        className: dy.N8,
        children: [
            (0, a.jsxs)("div", {
                className: dy.x7,
                children: [
                    (0, a.jsx)(v.E, { variant: "body-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(v.E, {
                        variant: "body-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, a.jsx)(db.z, {
                value: 100 * i,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? dy.dh : void 0,
            }),
        ],
    });
}
function dS(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, a.jsx)(dA, {
            label: P.intl.string(T.default.SXP7pD),
            value: P.intl.string(T.default.E5hKVi),
            hint: dx(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, a.jsx)(dA, {
            label: P.intl.string(T.default.SXP7pD),
            value: "\u2014",
            hint: P.intl.string(T.default.AGvoMJ),
        });
    let l = dv(n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(dA, { label: P.intl.string(T.default["H/X+FI"]), value: dd(n.cpu_ms) }),
            null != l && (0, a.jsx)(dA, { label: P.intl.string(T.default.lmFmMO), value: l }),
        ],
    });
}
function dN(e) {
    let { analytics: t } = e,
        n = P.intl.string(T.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, a.jsx)(dw, {
            title: n,
            children: (0, a.jsx)(v.E, { variant: "body-sm/normal", color: "text-muted", children: dx(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? dj[t] : null) ? P.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, a.jsx)(dw, {
        title: n,
        children:
            0 === l.length
                ? (0, a.jsx)(v.E, {
                      variant: "body-sm/normal",
                      color: "text-muted",
                      children: P.intl.string(T.default.AGvoMJ),
                  })
                : l.map((e) => {
                      let { object: t, label: n } = e;
                      return (0, a.jsx)(
                          dA,
                          {
                              label: n,
                              value: P.intl.formatToPlainString(T.default["w/2voO"], { cpu: dd(t.cpu_ms) }),
                              hint: dv(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var dI = n(678708),
    dE = n(414499),
    d_ = n(714800),
    dM = n(81466),
    dR = n(424383),
    dT = n(664121),
    dP = n(816943),
    dL = n(268791),
    d$ = n(514042),
    dD = n(872351),
    dq = n(708988),
    dF = n(150934),
    dO = n(417270);
let dG = "Restart Agent",
    dz = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
function dU(e) {
    return null != e && "" !== e ? e.slice(0, 12) : "None";
}
function dB(e, t) {
    return { label: e, value: null != t && "" !== t ? df(t) : "Unknown", icon: "calendar" };
}
function dK(e) {
    for (let [t, n] of [
        ["GB", 1e9],
        ["MB", 1e6],
        ["KB", 1e3],
    ])
        if (e >= n) return `${Number((e / n).toFixed(1))} ${t}`;
    return `${e} B`;
}
function dH(e, t, n, l) {
    let [r, a] = dz[n.status];
    return { label: e, value: `${dK(n.bytes)} of ${dK(n.max)} \xb7 ${r}`, hint: l, icon: t, state: a };
}
function dV(e) {
    if (null == e) return { label: "Last Save", value: "None since this agent instance started", icon: "save" };
    let t = df(e.at);
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
let dW = { main: "Main vs Remote", wip: "WIP vs Remote" };
function dX(e) {
    let t = `container ${dU(e.local)} \xb7 remote ${dU(e.remote)}`,
        n = e.ahead ?? 0,
        l = e.behind ?? 0,
        r = { label: dW[e.ref], icon: "remote", hint: t };
    switch (e.state) {
        case "in_sync":
            return { ...r, value: "In Sync", state: "ok" };
        case "ahead":
            return { ...r, value: `${dm(n)} Ahead`, hint: `${t} \xb7 not pushed yet`, state: "ahead" };
        case "behind":
            return { ...r, value: `${dm(l)} Behind`, state: "behind" };
        case "diverged":
            return { ...r, value: `Diverged (${dm(n)} Ahead, ${dm(l)} Behind)`, state: "error" };
        case "not_fetched":
            return { ...r, value: "Behind", hint: `${t} \xb7 the remote head isn't in the container`, state: "behind" };
        case "missing_remote":
            return { ...r, value: "Missing on Remote", state: "error" };
        case "missing_local":
            return { ...r, value: "Missing in Container", state: "warning" };
    }
}
let dQ = ["main", "wip"];
var dZ = n(400154);
let dY = {
        checkout: dI.FolderIcon,
        edit: f.PencilIcon,
        remote: dE.CloudIcon,
        commits: d_.ListNumberedIcon,
        calendar: dM.CalendarIcon,
        save: dR.SaveIcon,
        objects: dT.ServerIcon,
        download: dP.CloudDownloadIcon,
        size: dL.SpeedometerIcon,
        file: d$.FileIcon,
    },
    dJ = {
        ok: [lW.CircleCheckIcon, tx.A.colors.ICON_FEEDBACK_POSITIVE],
        warning: [cQ.WarningIcon, tx.A.colors.ICON_FEEDBACK_WARNING],
        error: [sy.CircleXIcon, tx.A.colors.ICON_FEEDBACK_CRITICAL],
        ahead: [dD.ArrowSmallUpIcon, tx.A.colors.ICON_MUTED],
        behind: [dq.ArrowSmallDownIcon, tx.A.colors.ICON_MUTED],
    };
function d0(e) {
    let { projectId: t } = e,
        { state: n } = {
            state: (0, c.bG)([oU.A], () => oU.A.getGitInfoState(t), [t]),
            load: i.useCallback(() => (0, cM.DK)(t), [t]),
        },
        l = (function (e) {
            let { pending: t, error: n, info: l, observedAt: r } = e;
            if (t) return { line: "Reading the repository", critical: !1 };
            if (null != n) return { line: n, critical: !0 };
            if (null == r) return { line: "", critical: !1 };
            let a = [];
            if (null != l) {
                l.running
                    ? null != l.localError
                        ? a.push([`Workspace unreadable: ${l.localError}`, !0])
                        : null != l.localWarning && a.push(["Read stopped early; some rows were not read", !0])
                    : a.push(["Workspace not running", !1]);
                let { status: e, error: t } = l.remote;
                ("missing" === e && a.push(["Remote repository missing", !0]),
                    "error" === e && a.push([`Remote read failed: ${t ?? "unknown error"}`, !0]),
                    "disabled" === e && a.push(["Source repositories are off", !1]));
            }
            return {
                line: [
                    `Updated ${df(r)}`,
                    ...a.map((e) => {
                        let [t] = e;
                        return t;
                    }),
                ].join(" \xb7 "),
                critical: a.some((e) => {
                    let [, t] = e;
                    return t;
                }),
            };
        })(n);
    return (0, a.jsxs)(dw, {
        title: "Git",
        children: [
            (0, a.jsx)("div", {
                className: dZ.Lj,
                children:
                    "" !== l.line &&
                    (0, a.jsx)(v.E, {
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
                    if (!e.running || null != e.localError) return [dV(e.lastSave)];
                    if (!e.checkout)
                        return [
                            { label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" },
                            dV(e.lastSave),
                        ];
                    let l = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
                    void 0 !== e.dirtyFiles &&
                        l.push({
                            label: "Uncommitted Files",
                            value: null == e.dirtyFiles ? "Unknown" : dm(e.dirtyFiles),
                            hint: null == e.dirtyFiles ? "git status didn't finish in time." : void 0,
                            icon: "edit",
                        });
                    let r = dQ.flatMap((t) => e.comparisons?.find((e) => e.ref === t) ?? []);
                    (r.length > 0
                        ? l.push(...r.map(dX))
                        : l.push(
                              { label: "Main", value: dU(e.heads.main), icon: "remote" },
                              { label: "WIP", value: dU(e.heads.wip), icon: "remote" },
                          ),
                        l.push(
                            { label: "Commits", value: null != e.commits ? dm(e.commits) : "Unknown", icon: "commits" },
                            dB("Oldest Commit", e.oldest),
                            dB("Newest Commit", e.newest),
                            dV(e.lastSave),
                        ),
                        null != e.objects &&
                            l.push(
                                ((n = 1 === (t = e.objects).packs ? "1 pack" : `${dm(t.packs)} packs`),
                                {
                                    label: "Objects",
                                    value: `${dm(t.loose)} loose (${dc(t.looseBytes)}) \xb7 ${dm(t.packed)} packed in ${n} (${dc(t.packBytes)})`,
                                    hint: t.garbage > 0 ? `${dm(t.garbage)} garbage files` : void 0,
                                    icon: "objects",
                                }),
                            ));
                    let a = (function (e) {
                        if (null == e.partialClone) return null;
                        let t = { label: "Partial Clone", icon: "download" };
                        return e.partialClone
                            ? null == e.missingObjects
                                ? { ...t, value: "Yes", hint: "Counting objects not downloaded didn't finish in time." }
                                : {
                                      ...t,
                                      value: `Yes \xb7 ${dm(e.missingObjects)} not downloaded`,
                                      hint: "Fetched on demand; this read never fetches.",
                                  }
                            : { ...t, value: "No" };
                    })(e);
                    return (
                        null != a && l.push(a),
                        null != e.localBytes &&
                            l.push(
                                dH(
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
                                  dH("Largest File", "file", e.largestFile, "Largest file version in the local copy."),
                              ),
                        l
                    );
                })(n.info).map((e) => {
                    let { label: t, value: n, hint: l, icon: r, state: i } = e,
                        s = dY[r],
                        [u, o] = null != i ? dJ[i] : [null, void 0];
                    return (0, a.jsx)(
                        dA,
                        {
                            label: t,
                            value: n,
                            hint: l,
                            critical: "error" === i,
                            icon: (0, a.jsx)(s, { size: "xs", color: tx.A.colors.ICON_MUTED }),
                            state: null != u ? (0, a.jsx)(u, { size: "xs", color: o }) : void 0,
                        },
                        t,
                    );
                }),
        ],
    });
}
function d1(e) {
    let { projectId: t } = e,
        {
            state: n,
            busy: l,
            clearAlarm: r,
            setClearAlarm: s,
            confirmCopy: u,
            restart: o,
        } = (function (e) {
            let t = (0, c.bG)([oU.A], () => oU.A.getRestartAgentState(e), [e]),
                [n, l] = i.useState(!1),
                r = "restarting" === t.phase ? t.startedAt : null,
                a = "restarted" === t.phase ? t.instanceSince : null,
                s = i.useRef(a);
            (i.useEffect(() => {
                null != a && a !== s.current && ((s.current = a), (0, cM.DK)(e));
            }, [e, a]),
                i.useEffect(() => {
                    if (null == r) return;
                    function t() {
                        let t = oU.A.getInstancePollRequestedAt(e);
                        (null != t && Date.now() - t < 1e4) || (0, cM.gX)(e);
                    }
                    t();
                    let n = setInterval(t, 2e3),
                        l = setTimeout(
                            () =>
                                u7.h.dispatch({
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
            let u = i.useCallback(() => (0, cM.VW)(e, n), [e, n]);
            return {
                state: t,
                busy: "pending" === t.phase || "restarting" === t.phase,
                clearAlarm: n,
                setClearAlarm: l,
                confirmCopy: {
                    title: "Restart Agent?",
                    body: `Ends this project's agent instance; the next request starts a new one. Lost: in-memory state and any running turn. Kept: saved data (conversation, settings, storage) and the container disk. ${n ? "The pending alarm is cleared, so scheduled wakeups wait until something sets it again." : "The pending alarm is kept."}`,
                    confirm: dG,
                },
                restart: u,
            };
        })(t),
        m = i.useCallback(() => {
            (0, E.A)({ title: u.title, subtitle: u.body, confirmText: u.confirm, variant: "critical", onConfirm: o });
        }, [u, o]);
    return (0, a.jsxs)("div", {
        className: dZ.Lj,
        children: [
            (0, a.jsxs)("div", {
                className: dZ.nM,
                children: [
                    (0, a.jsx)(dF.S, {
                        label: "Also Clear Alarm",
                        description: "Scheduled wakeups wait until something sets the alarm again.",
                        checked: r,
                        onChange: s,
                        disabled: l,
                    }),
                    (0, a.jsx)(d.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        icon: dO.RetryIcon,
                        text: dG,
                        loading: l,
                        disabled: l,
                        onClick: m,
                    }),
                ],
            }),
            (0, a.jsx)(v.E, {
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
                            return `Restarted \xb7 new instance since ${df(e.instanceSince)}`;
                        case "failed":
                            return `Failed: ${e.reason} \xb7 ${df(e.observedAt)}`;
                    }
                })(n),
            }),
        ],
    });
}
function d2(e, t) {
    return (0, a.jsx)(dA, {
        label: e,
        value: P.intl.formatToPlainString(T.default.yHJxuP, { count: dm((0, cf.aM)(t)) }),
        hint: `${dm(t.input_tokens)} in \xb7 ${dm(t.output_tokens)} out \xb7 ${dm(t.cache_read_input_tokens)} cache read`,
    });
}
function d3(e) {
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
            restartState: A,
            turnRunning: C,
            handleForceCompaction: S,
            handleForceCompactionOverride: N,
            handleRestartWorkspace: I,
            lifetime: E,
            limits: _,
            session: M,
            contextCeiling: R,
        } = ((t = (0, c.bG)([oU.A], () => oU.A.getLastTurnUsage(g), [g])),
        (n = (0, c.bG)([oU.A], () => oU.A.getLastCompaction(g), [g])),
        (l = (0, c.bG)([oU.A], () => oU.A.getLastCompactionDecline(g), [g])),
        (r = (0, c.bG)([oU.A], () => oU.A.getForceCompactionState(g), [g])),
        (s = (0, c.bG)([oU.A], () => oU.A.getSandboxRestartState(g), [g])),
        (u = (0, c.bG)([l2.A], () => l2.A.isThinking(g), [g])),
        (o = i.useCallback(() => (0, cM.Lj)(g), [g])),
        (m = i.useCallback(() => (0, cM.Lj)(g, !0), [g])),
        (f = i.useCallback(() => (0, cM.bq)(g), [g])),
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
    return (0, a.jsxs)("div", {
        className: dZ.Mf,
        children: [
            (0, a.jsx)(dk, { generatedAt: p?.generated_at ?? null, fetchState: x, onRefresh: j }),
            (0, a.jsx)(dw, {
                title: P.intl.string(T.default.JghNal),
                children:
                    null == E
                        ? (0, a.jsx)(v.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: P.intl.string(T.default.s0U5Fv),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(dA, {
                                      label: P.intl.string(T.default["9nqym2"]),
                                      value: dm((0, cf.a7)(E.cost_usd)),
                                      hint: P.intl.formatToPlainString(T.default.NCdUIh, { count: dm(E.turns) }),
                                  }),
                                  d2(P.intl.string(T.default.xtxP0e), E.orchestrator),
                                  d2(P.intl.string(T.default["9Sj3SX"]), E.codegen),
                                  d2(P.intl.string(T.default.ANCEo3), (0, cf.wU)(E.compaction)),
                                  p?.agent?.outcomes != null &&
                                      Object.keys(p.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(dA, {
                                          label: P.intl.string(T.default.SQHm7C),
                                          value: Object.entries(p.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${dm(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, a.jsx)(dw, {
                title: P.intl.string(T.default.dZHPE5),
                children:
                    null == b
                        ? (0, a.jsx)(v.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: P.intl.string(T.default.DfVjal),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  d2(P.intl.string(T.default["7X3i9d"]), b.total),
                                  (0, a.jsx)(dA, {
                                      label: P.intl.string(T.default["8OUg09"]),
                                      value: `${Math.round((b.cache_hit_rate ?? (0, cf.CA)(b.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(dw, {
                title: P.intl.string(T.default.NbRk9a),
                children: [
                    null != y && null != R
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(dC, {
                                      label: P.intl.string(T.default.Kw5wiQ),
                                      used: y.tokensAfter,
                                      max: R,
                                      formatValue: dm,
                                  }),
                                  (0, a.jsx)(dA, {
                                      label: P.intl.string(T.default.mRbSns),
                                      value: `${dm(y.tokensBefore)} \u{2192} ${dm(y.tokensAfter)}`,
                                      hint: P.intl.formatToPlainString(T.default.Vq3skS, {
                                          count: dm(y.retainedMessages),
                                          time: df(y.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(v.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children:
                                  null != R
                                      ? P.intl.formatToPlainString(T.default.GMLCNv, { ceiling: dm(R) })
                                      : P.intl.string(T.default.s0U5Fv),
                          }),
                    null != k &&
                        (0, a.jsx)(dA, {
                            label: P.intl.string(T.default["4BX5KK"]),
                            value: `${dm(k.projected)} / ${dm(k.threshold)}`,
                            critical: !0,
                            hint: P.intl.formatToPlainString(T.default["6ngCax"], { time: df(k.observedAt) }),
                        }),
                    (0, a.jsxs)("div", {
                        className: dZ.Lj,
                        children: [
                            (0, a.jsx)(d.$, {
                                variant: "secondary",
                                size: "sm",
                                text: P.intl.string(T.default["1EiJeb"]),
                                disabled: "pending" === w,
                                onClick: S,
                            }),
                            (0, a.jsx)(v.E, {
                                variant: "body-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof w && "compacted" !== w.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return P.intl.string(T.default.wox6Ev);
                                    if ("pending" === e) return P.intl.string(T.default.OcPHQ1);
                                    let t = df(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return P.intl.formatToPlainString(T.default.BhRjZZ, { time: t });
                                    let n =
                                        "declined" === e.outcome
                                            ? T.default["o/FKzF"]
                                            : "busy" === e.outcome
                                              ? T.default.YZb4hK
                                              : T.default.ZoUSVK;
                                    return P.intl.formatToPlainString(n, {
                                        reason: e.reason ?? "no reason given",
                                        time: t,
                                    });
                                })(w),
                            }),
                            "object" == typeof w &&
                                !0 === w.pendingTurn &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(d.$, {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: P.intl.string(T.default.ZxG2AI),
                                            onClick: N,
                                        }),
                                        (0, a.jsx)(v.E, {
                                            variant: "body-xs/normal",
                                            color: "text-muted",
                                            children: P.intl.string(T.default.V73vdN),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: dZ.Lj,
                        children: [
                            (0, a.jsx)(d.$, {
                                variant: "secondary",
                                size: "sm",
                                text: P.intl.string(T.default["5qCjBu"]),
                                loading: "pending" === A,
                                disabled: "pending" === A || C,
                                onClick: I,
                            }),
                            (0, a.jsx)(v.E, {
                                variant: "body-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof A && "restarted" !== A.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return P.intl.string(T.default.mlok8D);
                                    if ("pending" === e) return P.intl.string(T.default["1ugSyK"]);
                                    let t = df(e.observedAt);
                                    return P.intl.formatToPlainString(
                                        "restarted" === e.outcome ? T.default["76mfqO"] : T.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(A),
                            }),
                        ],
                    }),
                    (0, a.jsx)(d1, { projectId: g }),
                ],
            }),
            (0, a.jsx)(d0, { projectId: g }),
            (null != M || p?.analytics != null) &&
                (0, a.jsxs)(dw, {
                    title: P.intl.string(T.default.EsSzCS),
                    children: [
                        null != M &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(dA, {
                                        label: P.intl.string(T.default.CLXHAs),
                                        value: df(M.instance_since),
                                        hint: P.intl.string(T.default.UCwUEX),
                                    }),
                                    (0, a.jsx)(dA, { label: P.intl.string(T.default["8V8e1Z"]), value: dm(M.sockets) }),
                                    (0, a.jsx)(dA, {
                                        label: P.intl.string(T.default["4pBzYW"]),
                                        value: M.turn_inflight
                                            ? P.intl.string(T.default.Wv025I)
                                            : P.intl.string(T.default["7/lsFY"]),
                                    }),
                                    M.queued_messages > 0 &&
                                        (0, a.jsx)(dA, {
                                            label: P.intl.string(T.default["3oUYnv"]),
                                            value: dm(M.queued_messages),
                                        }),
                                ],
                            }),
                        p?.analytics != null && (0, a.jsx)(dS, { analytics: p.analytics }),
                    ],
                }),
            null != _ &&
                (0, a.jsxs)(dw, {
                    title: P.intl.string(T.default["LEIhp/"]),
                    children: [
                        (0, a.jsx)(dA, {
                            label: P.intl.string(T.default.IlDBN3),
                            value: dm(_.max_subagent_iterations),
                        }),
                        (0, a.jsx)(dA, {
                            label: P.intl.string(T.default["ZdzKR+"]),
                            value: P.intl.formatToPlainString(T.default.yHJxuP, { count: dm(_.context_window_tokens) }),
                        }),
                        (0, a.jsx)(dA, {
                            label: P.intl.string(T.default.cIhN2W),
                            value: P.intl.formatToPlainString(T.default.yHJxuP, {
                                count: dm(_.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(dA, {
                            label: P.intl.string(T.default["+fOn/q"]),
                            value: dm(_.max_user_message_chars),
                        }),
                        (0, a.jsx)(dA, { label: P.intl.string(T.default.kIHga0), value: dm(_.max_build_attempts) }),
                        (0, a.jsx)(dA, { label: P.intl.string(T.default.Iw03yW), value: dm(_.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var d4 = n(237528),
    d5 = n(629584),
    d7 = n(531893);
function d8(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: d7.ut,
              children: (0, a.jsx)(v.E, {
                  variant: "body-xs/normal",
                  color: "text-feedback-critical",
                  children: P.intl.string(T.default.h1SE6R),
              }),
          });
}
function d9(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: d7.qf,
              children: [
                  (0, a.jsx)(v.E, {
                      variant: "body-sm/medium",
                      color: "text-default",
                      children: P.intl.string(T.default.h1SE6R),
                  }),
                  (0, a.jsx)(v.E, {
                      variant: "body-xs/normal",
                      color: "text-muted",
                      children: P.intl.string(T.default["8SErdg"]),
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: d7.qf,
              children: [
                  (0, a.jsx)(v.E, { variant: "body-sm/medium", color: "text-default", children: n }),
                  (0, a.jsx)(v.E, { variant: "body-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function d6(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: d7.ps,
              children: (0, a.jsx)(v.E, {
                  variant: "body-xs/normal",
                  color: "text-muted",
                  children: P.intl.string(T.default.V7Ri8H),
              }),
          })
        : null;
}
var me = n(109079);
let mt = i.memo(function (e) {
    var t;
    let { entry: n, showSource: l } = e,
        [r, s] = i.useState(!1),
        u = i.useId(),
        o = i.useMemo(
            () =>
                (function (e) {
                    let t;
                    if (e.length > 16e3) return null;
                    let n = e.indexOf("{"),
                        l = e.indexOf("["),
                        r = -1 === n ? l : -1 === l ? n : Math.min(n, l);
                    if (-1 === r) return null;
                    let a = e.slice(r).trim();
                    if (a.length < 2) return null;
                    try {
                        t = JSON.parse(a);
                    } catch {
                        return null;
                    }
                    if ("object" != typeof t || null == t) return null;
                    let i = e.slice(0, r).trim(),
                        s = JSON.stringify(t, null, 2);
                    return Array.isArray(t)
                        ? { prefix: i, pretty: s, marker: "[\u2026]", size: t.length }
                        : { prefix: i, pretty: s, marker: "{\u2026}", size: Object.keys(t).length };
                })(n.message),
            [n.message],
        ),
        c = "error" === n.level ? "text-feedback-critical" : "text-default";
    return (0, a.jsxs)("div", {
        className: me.vK,
        children: [
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: "body-xs/normal",
                color: "text-subtle",
                className: me.Mt,
                selectable: !0,
                children: cL(n.ts) ?? n.ts,
            }),
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: "footnote/semibold",
                color:
                    "error" === (t = n.level)
                        ? "text-feedback-critical"
                        : "warn" === t
                          ? "text-feedback-warning"
                          : "text-muted",
                className: me.dm,
                children: n.level,
            }),
            (0, a.jsxs)("div", {
                className: me.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, a.jsx)("span", { className: me.Cq, children: (0, a.jsx)(d4.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, a.jsx)("span", {
                            className: me.Cq,
                            title: n.build ?? void 0,
                            children: (0, a.jsx)(d4.v, { text: P.intl.string(T.default.TrC9c8), variant: "redLight" }),
                        }),
                    null != o
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  "" !== o.prefix &&
                                      (0, a.jsxs)(v.E, {
                                          tag: "span",
                                          variant: "body-xs/normal",
                                          color: c,
                                          selectable: !0,
                                          children: [o.prefix, " "],
                                      }),
                                  (0, a.jsxs)(t1.D, {
                                      className: me.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": u,
                                      "aria-label": P.intl.string(T.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          r
                                              ? (0, a.jsx)(eN.ChevronSmallDownIcon, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, a.jsx)(t7.ChevronSmallRightIcon, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                }),
                                          (0, a.jsxs)(v.E, {
                                              tag: "span",
                                              variant: "body-xs/medium",
                                              color: "none",
                                              children: [
                                                  o.marker,
                                                  " ",
                                                  P.intl.formatToPlainString(
                                                      "[\u2026]" === o.marker ? T.default.kUhyUv : T.default["N+fphl"],
                                                      { count: o.size },
                                                  ),
                                              ],
                                          }),
                                      ],
                                  }),
                                  r &&
                                      (0, a.jsx)(v.E, {
                                          tag: "div",
                                          variant: "body-xs/normal",
                                          color: c,
                                          className: me.dF,
                                          selectable: !0,
                                          id: u,
                                          children: o.pretty,
                                      }),
                              ],
                          })
                        : (0, a.jsx)(v.E, {
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
function mn(e) {
    let { projectId: t } = e,
        n = (0, c.bG)([c_.A], () => c_.A.getLogs(t), [t]),
        l = (0, c.bG)([c_.A], () => c_.A.getHistoryState(t, "logs")),
        [r, s] = i.useState("all"),
        [u, o] = i.useState(""),
        d = i.useMemo(() => {
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
        m = i.useRef(null),
        f = i.useRef(!0);
    i.useEffect(() => {
        f.current && m.current?.scrollToBottom();
    }, [d]);
    let h = i.useCallback(() => {
            let e = m.current;
            null != e && (f.current = 32 > e.getDistanceFromBottom());
        }, []),
        g = i.useMemo(
            () =>
                dp.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return dg(e);
                            case "web":
                                return P.intl.string(T.default.IVzfVV);
                            default:
                                return P.intl.string(T.default["Um1/8L"]);
                        }
                    })(e),
                })),
            [],
        );
    return (0, a.jsxs)("div", {
        className: me.$F,
        children: [
            (0, a.jsxs)("div", {
                className: me.y4,
                children: [
                    (0, a.jsx)(d5.I, {
                        look: "pill",
                        "aria-label": P.intl.string(T.default.MhvyUU),
                        options: g,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: me.KT,
                        children: (0, a.jsx)(cR.I, {
                            query: u,
                            onChange: o,
                            onClear: () => o(""),
                            size: "sm",
                            placeholder: P.intl.string(T.default["m2+37Y"]),
                            "aria-label": P.intl.string(T.default["m2+37Y"]),
                        }),
                    }),
                ],
            }),
            n.length > 0 && (0, a.jsx)(d8, { state: l }),
            (0, a.jsxs)(tV.Ch, {
                ref: m,
                onScroll: h,
                overflow: "auto",
                className: me.sx,
                children: [
                    (0, a.jsx)(d6, { state: l }),
                    0 === n.length
                        ? (0, a.jsx)(d9, {
                              state: l,
                              emptyTitle: P.intl.string(T.default.S7qlPG),
                              emptyBody: P.intl.string(T.default.nD0S9z),
                          })
                        : 0 === d.length
                          ? (0, a.jsx)(v.E, {
                                variant: "body-xs/normal",
                                color: "text-muted",
                                children: P.intl.string(T.default["4SIdrX"]),
                            })
                          : d.map((e) => (0, a.jsx)(mt, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function ml(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, a.jsx)(i.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, a.jsx)(i.Fragment, { children: r("stable", l) }, "stable")),
        (0, a.jsx)(dw, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, a.jsx)(v.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: P.intl.string(T.default.umcjif),
                      }),
        })
    );
}
function mr(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(dA, {
                      label: P.intl.formatToPlainString(T.default["01ZMS4"], { env: dg(n) }),
                      value: ((t = l.connected), P.intl.string(t ? T.default.Wv025I : T.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(dA, {
                      label: P.intl.string(T.default["z1dh+F"]),
                      value: dm(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${df(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(dA, { label: P.intl.string(T.default.Iz5GnJ), value: dm(l.guild_count) }),
                  (0, a.jsx)(dA, {
                      label: P.intl.string(T.default["7UqtNv"]),
                      value: dm(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? P.intl.formatToPlainString(T.default.MasSly, {
                                    code: l.last_close_code,
                                    time: df(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(dA, {
                          label: P.intl.string(T.default["x3+JXJ"]),
                          value: dm(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(dA, { label: dg(n), value: P.intl.string(T.default.lTHQss) });
}
function ma(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, a.jsx)(dA, {
        label: dg(t),
        value: P.intl.formatToPlainString(T.default["Xq+wHT"], {
            requests: dm(n.requests),
            failures: dm(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? P.intl.formatToPlainString(T.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: df(n.last_failure.at),
                  })
                : P.intl.formatToPlainString(T.default["7KlGT6"], { time: df(n.since) }),
    });
}
function mi(e) {
    let { env: t, runtime: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(dA, {
                label: P.intl.formatToPlainString(T.default["92gVTm"], { env: dg(t) }),
                value: dm(n.connections),
            }),
            n.schedules.map((e) =>
                (0, a.jsx)(
                    dA,
                    {
                        label: P.intl.formatToPlainString(T.default.Dafaco, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? P.intl.formatToPlainString(T.default.ologm6, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? P.intl.formatToPlainString(T.default.wxAWNv, { time: df(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function ms(e) {
    let { env: t, metrics: n } = e;
    return (0, a.jsx)(dA, {
        label: dg(t),
        value: P.intl.formatToPlainString(T.default.suAOj9, { calls: dm(n.calls), errors: dm(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function mu(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, a.jsx)(dw, {
            title: t,
            children: (0, a.jsx)(v.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children: P.intl.string(T.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        i = n.cpu_ms_total > 0;
    return (0, a.jsxs)(dw, {
        title: t,
        children: [
            (0, a.jsx)(dA, {
                label: P.intl.string(T.default.xtD4Zp),
                value: dm(n.requests),
                hint: P.intl.formatToPlainString(T.default["7KlGT6"], { time: df(n.since) }),
            }),
            (0, a.jsx)(dA, { label: P.intl.string(T.default.gfRhR3), value: dm(n.errors), critical: n.errors > 0 }),
            i
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(dC, {
                              label: P.intl.string(T.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: dd,
                          }),
                          (0, a.jsx)(dA, {
                              label: P.intl.string(T.default.mSKImM),
                              value: dd(r),
                              hint: P.intl.formatToPlainString(T.default.JqMU05, {
                                  total: dd(n.cpu_ms_total),
                                  wall: dd(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(dA, {
                      label: P.intl.string(T.default.LEJ5r3),
                      value: P.intl.string(T.default["2Ekb2b"]),
                      hint: P.intl.string(T.default.G0aq7i),
                  }),
            !i &&
                n.wall_ms_total > 0 &&
                (0, a.jsx)(dA, { label: P.intl.string(T.default.xvmL1D), value: dd(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, a.jsx)(dA, { label: P.intl.string(T.default["4sQYwH"]), value: dm(n.exceeded_cpu), critical: !0 }),
            (0, a.jsx)(dA, {
                label: P.intl.string(T.default.bQenOy),
                value: dm(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: P.intl.formatToPlainString(T.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, a.jsx)(dA, { label: P.intl.string(T.default.xgpn4Y), value: dh(n.build) }),
        ],
    });
}
function mo(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        u = r
            ? [{ key: "shared", label: P.intl.string(T.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: P.intl.string(T.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: P.intl.string(T.default.eiAi57), metrics: n },
              ];
    return (0, a.jsx)(dw, {
        title: P.intl.string(T.default.mRt7MW),
        children: u.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, a.jsx)(dA, { label: n, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)(dA, {
                                  label: P.intl.formatToPlainString(T.default.u7kJJ4, { env: n }),
                                  value: dc(l.r2_bytes),
                                  hint: P.intl.formatToPlainString(
                                      l.r2_truncated ? T.default.lH0oQw : T.default.m9h02S,
                                      { count: dm(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, a.jsx)(dC, {
                                      label: P.intl.formatToPlainString(T.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: dc,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function mc(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: dZ.Mf,
        children: [
            (0, a.jsx)(dk, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(mu, {
                            title: P.intl.string(T.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(mu, {
                            title: P.intl.string(T.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(mo, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(ml, {
                                title: P.intl.string(T.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(mr, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(ml, {
                                title: P.intl.string(T.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(ma, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(ml, {
                                title: P.intl.string(T.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(mi, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(ml, {
                                title: P.intl.string(T.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(ms, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, a.jsx)(dN, { analytics: t.analytics }),
                        (0, a.jsxs)(dw, {
                            title: P.intl.string(T.default.fQMpFp),
                            children: [
                                (0, a.jsx)(dA, {
                                    label: P.intl.string(T.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? dh(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(dA, {
                                    label: P.intl.string(T.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? dh(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var md = n(592465);
function mm(e) {
    let { projectId: t, onClose: n } = e,
        l = O(),
        [r, s] = i.useState(() => (l && D?.projectId === t ? "trace" : "logs")),
        u = (0, c.bG)([oU.A], () => oU.A.getStatus(t), [t]),
        o = (0, c.bG)([oU.A], () => oU.A.getFetchState(t), [t]),
        d = i.useCallback(() => {
            ((0, cM.R7)(t), (0, cM.DK)(t));
        }, [t]);
    (i.useEffect(() => d(), [d]), i.useEffect(() => (0, ez.Rw)(t), [t]));
    let m = i.useCallback(() => {
        if (!l) return !1;
        let e = (function (e) {
            if (null == D || D.projectId !== e) return null;
            let { traceId: t } = D;
            return ((D = null), t);
        })(t);
        return null != e && (da(t, e), !0);
    }, [t, l]);
    (i.useEffect(() => {
        m();
    }, [m]),
        q(t, () => {
            m() && s("trace");
        }));
    let f = i.useCallback(() => {
            (0, oy.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: oU.A.getStatus(t),
                        last_turn_usage: oU.A.getLastTurnUsage(t),
                        last_compaction: oU.A.getLastCompaction(t),
                        last_compaction_decline: oU.A.getLastCompactionDecline(t),
                        timing_traces: oU.A.getTimingTraces(t),
                        logs: c_.A.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, _.P0)({ text: P.intl.string(T.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        h = P.intl.string(T.default["Q4FN+H"]);
    return (0, a.jsxs)("section", {
        className: md.nd,
        "aria-label": h,
        children: [
            (0, a.jsxs)(e0.Ay, {
                "aria-label": h,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(e0.Ay.Icon, {
                            icon: ov.CopyIcon,
                            tooltip: P.intl.string(T.default.TkHqy2),
                            onClick: f,
                        }),
                        (0, a.jsx)(e0.Ay.Icon, { icon: e3.XSmallIcon, tooltip: P.intl.string(P.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, a.jsx)(e0.Ay.ChannelIcon, { icon: ob.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(e0.Ay.Title, { children: h }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: md.rf,
                children: [
                    (0, a.jsxs)(cE.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => s(e),
                        "aria-label": P.intl.string(T.default.RvvWIh),
                        className: md.vR,
                        children: [
                            (0, a.jsx)(cE.V.Item, { id: "logs", children: P.intl.string(T.default["+VRYCm"]) }),
                            (0, a.jsx)(cE.V.Item, { id: "worker", children: P.intl.string(T.default["50D0FZ"]) }),
                            (0, a.jsx)(cE.V.Item, { id: "agent", children: P.intl.string(T.default.UkbTK1) }),
                            l ? (0, a.jsx)(cE.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, a.jsx)(mn, { projectId: t })
                        : "worker" === r
                          ? (0, a.jsx)(mc, { status: u, fetchState: o, onRefresh: d })
                          : "trace" === r && l
                            ? (0, a.jsx)(du, { projectId: t })
                            : (0, a.jsx)(d3, { projectId: t, status: u, fetchState: o, onRefresh: d }),
                ],
            }),
        ],
    });
}
var mf = n(365912),
    mh = n(873715);
function mg(e) {
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
let mp = Object.freeze({ x: -1, y: -1 });
function mx(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = mg(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var mv = n(192888);
function mj(e, t) {
    return (0, mv.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(mx, () => ({ status: "failed" }));
}
var mb = n(108308);
let my = { x: 25, y: 21 };
function mk(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function mw(e, t, n, l) {
    let r = mk(e, n, l);
    return { x: r.left + r.width * t.x, y: r.top + r.height * t.y };
}
function mA(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function mC(e) {
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
function mS(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: s } = e,
        u = null != n && n === l ? t : null,
        { active: o, annotations: m } = (0, z.rt)(u),
        f = (0, G.Zv)(u),
        h = (0, H.Rv)(),
        g = (0, c.bG)([nM.default], () => nM.default.getCurrentUser()),
        p = g?.id ?? null,
        [x, j] = i.useState(null),
        [b, y] = i.useState(!1),
        [k, w] = i.useState(!1),
        [A, C] = i.useState(null),
        [S, N] = i.useState(!1),
        E = i.useRef(null),
        _ = i.useRef(null),
        M = i.useRef(null),
        [R, L] = i.useState(null),
        [$, D] = i.useState(!1),
        [q, F] = i.useState(null),
        [O, U] = i.useState(null),
        B = i.useRef(!1),
        [K, V] = i.useState(!1),
        [W, X] = i.useState(null),
        Q = o && !f && !h;
    null == q || (Q && q.projectId === u) || F(null);
    let Z = q?.projectId ?? null;
    i.useEffect(() => {
        if (null != Z) return () => (0, nv.xJ)(Z, "design");
    }, [Z]);
    let Y = ts(r, Q);
    i.useEffect(() => {
        if (!Q || null == u) return;
        let e = !0,
            t = r();
        if (null == t) return void w(!0);
        (y(!0), w(!1));
        let n = `design-feedback-${crypto.randomUUID()}`;
        return (
            (0, mh.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                (t) => {
                    if (!e) return;
                    y(!1);
                    let n = "completed" === t.status ? mC(t.response) : null;
                    null == n ? w(!0) : (j(n), (0, z.F5)(u, { url: n.url, title: n.title, viewport: n.viewport }));
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
    let J = i.useRef(null);
    (i.useEffect(() => {
        if (!Q || null == Y || null == u) return;
        if (null == x) {
            J.current = Y;
            return;
        }
        if (ti(J.current, Y)) return;
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
                    (0, mh.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        if ("completed" !== e.status || !el.current) return;
                        let n = mC(e.response);
                        null != n && (j(n), (0, z.F5)(u, { url: n.url, title: n.title, viewport: n.viewport }));
                        let l = new Map();
                        (e.response.results.forEach((e, n) => {
                            let r = t[n];
                            if (null == r || "locate" !== e.action || !e.ok) return;
                            let a = mg(e.element);
                            null != a && l.set(r.id, a);
                        }),
                            (0, z.AW)(u, l));
                    });
                }));
        }, 200);
        return () => window.clearTimeout(e);
    }, [Q, Y, x, m, u, r]),
        i.useEffect(() => {
            if (!Q)
                return () => {
                    (C(null), F(null), X(null), j(null));
                };
        }, [Q]));
    let ee = i.useRef(null),
        et = i.useRef(null),
        en = i.useRef(!1),
        el = i.useRef(!1);
    i.useEffect(() => {
        ((el.current = Q), Q || ((ee.current = null), (et.current = null), (M.current = null), N(!1)));
    }, [Q]);
    let er = i.useCallback(
            function e() {
                if (en.current) return;
                let t = ee.current;
                if (null == t) return;
                ee.current = null;
                let n = r();
                null != n &&
                    ((en.current = !0),
                    mj(n, t).then((t) => {
                        if (((en.current = !1), el.current)) {
                            if ("picked" !== t.status || mR(t.target, eo.current.rect, eo.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? C(null)
                                    : "unsupported" === t.status && D(!0);
                            else {
                                let e = (0, lD.Sk)(t.target);
                                (L((t) => (mM(t, e) ? t : e)),
                                    C((e) => {
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
        ea = i.useCallback(() => {
            if (null == q) return;
            let e = !B.current;
            (U({ at: q.at, label: q.label, draft: q.draft, instant: e }), V(e), F(null));
        }, [q]);
    (i.useEffect(() => {
        if (!K) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => V(!1));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [K]),
        i.useEffect(() => {
            if (null == O) return;
            let e = setTimeout(() => U(null), mE);
            return () => clearTimeout(e);
        }, [O]));
    let ei = null == x || null == Y || x.viewport.width < 1 ? 1 : Y.width / x.viewport.width,
        es = null != x || k,
        eu = i.useMemo(() => x?.elements ?? [], [x]),
        eo = i.useRef({ rect: null, scale: 1 });
    i.useLayoutEffect(() => {
        eo.current = { rect: Y, scale: ei };
    }, [Y, ei]);
    let ec = i.useCallback(
            (e, t, n) => {
                null != u &&
                    ((0, nv.xJ)(u, "design"),
                    X(null),
                    (B.current = !1),
                    F({ projectId: u, target: e, anchor: t, draft: "", at: n, label: (0, lD.Sk)(e) }));
            },
            [u],
        ),
        ed = i.useCallback((e, t) => ({ x: (e.clientX - t.left) / ei, y: (e.clientY - t.top) / ei }), [ei]),
        em = i.useCallback(() => {
            let e = M.current;
            if (null == e) return;
            let t = E.current;
            null != t && (t.style.transform = `translate3d(${e.x + 20}px, ${e.y + 20}px, 0)`);
            let n = _.current;
            null != n && (n.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    i.useLayoutEffect(em);
    let ef = i.useCallback(
            (e) => {
                if (null == Y || null != W) return;
                if (((M.current = { x: e.clientX, y: e.clientY }), em(), N(!0), null != q)) {
                    (Math.abs(e.clientX - q.at.x) > m_ || Math.abs(e.clientY - q.at.y) > m_) && (B.current = !0);
                    return;
                }
                if (!es) return void C(null);
                let t = ed(e, Y);
                if ($) {
                    let e = (0, lD.CZ)(eu, t.x, t.y),
                        n = null != e && mR(e, Y, ei) ? null : e;
                    if (null != n) {
                        let e = (0, lD.Sk)(n);
                        L((t) => (mM(t, e) ? t : e));
                    }
                    C((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = et.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((et.current = n), (ee.current = n), er());
            },
            [Y, ei, es, ed, $, eu, q, W, em, er],
        ),
        eh = null == W ? null : m.find((e) => e.id === W.id),
        eg = Q && (S || q?.target.marker != null || eh?.target.marker != null);
    i.useEffect(() => {
        if (eg)
            return () => {
                let e = r();
                null != e && mj(e, mp);
            };
    }, [eg, r]);
    let ep = i.useCallback(() => {
        (N(!1), C(null), (et.current = null), (ee.current = null));
    }, []);
    i.useEffect(() => {
        if (!Q || !S || !es || $ || null != q || null != W) return;
        let e = M.current,
            { rect: t, scale: n } = eo.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((et.current = l), (ee.current = l), er());
    }, [Q, S, es, $, q, W, er]);
    let ex = i.useCallback(
            (e) => {
                if (null != q || null != W) {
                    (ea(), X(null));
                    return;
                }
                if (null == A || null == Y) return;
                let t = ed(e, Y);
                ec(A, (0, lD.Hm)(A, t.x, t.y), { x: e.clientX, y: e.clientY });
            },
            [A, Y, ed, q, W, ec, ea],
        ),
        ev = i.useCallback(() => {
            null != u && (C(null), (0, I.K7)(u)?.active === !0 ? (0, I.V9)(u) : (0, z.mB)(u));
        }, [u]),
        ej = i.useCallback(() => {
            null != u &&
                (null != q
                    ? ea()
                    : W?.confirmingRemove === !0
                      ? X({ ...W, confirmingRemove: !1 })
                      : null != W
                        ? X(null)
                        : ev());
        }, [u, q, W, ea, ev]),
        eb = i.useRef(ej),
        ey = i.useRef(u),
        ek = i.useRef(ev);
    i.useLayoutEffect(() => {
        ((eb.current = ej), (ey.current = u), (ek.current = ev));
    });
    let ew = i.useRef(null);
    i.useEffect(() => {
        if (Q)
            return (
                e8.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        e8.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), eb.current());
        }
        function t(e) {
            let t = e.target;
            !(0, e7.vq)(t) ||
                ew.current?.contains(t) === !0 ||
                s?.current?.contains(t) === !0 ||
                (function (e) {
                    try {
                        return ((0, mf.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) ||
                ((null == ey.current || (0, I.K7)(ey.current)?.active !== !0) && ek.current());
        }
    }, [Q, s]);
    let eA = i.useCallback(
            (e) => {
                if (null == u) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), ej());
                    return;
                }
                if (null != q || null != W || 0 === eu.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    n = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || n) {
                    e.preventDefault();
                    let n = null == A ? -1 : eu.findIndex((e) => e.ref === A.ref);
                    C(eu[(n + (t ? 1 : -1) + eu.length) % eu.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != A &&
                    (e.preventDefault(),
                    ec(A, lD.QU, { x: (Y?.left ?? 0) + A.rect.x * ei, y: (Y?.top ?? 0) + A.rect.y * ei }));
            },
            [u, q, W, eu, A, ec, ej, Y, ei],
        ),
        eC = i.useCallback(
            (e) => {
                null == u ||
                    null == q ||
                    (((0, lD.Ch)(q.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, ez.dv)(u, (0, lD.Q9)(q.target, q.draft), e), ea(), C(null)));
            },
            [u, q, ea],
        ),
        eS = i.useCallback((e) => (null == u ? Promise.reject(Error("no project")) : (0, e9.vX)(u, e)), [u]),
        eN = i.useCallback(() => {
            null == u ||
                null == W ||
                null == p ||
                ((0, lD.Ch)(W.draft) && ((0, z.pV)(u, p, W.id, W.draft.trim()), X({ ...W, editing: !1 })));
        }, [u, W, p]),
        eI = i.useCallback(() => {
            null != u && null != W && null != p && ((0, z.aC)(u, p, W.id), X(null));
        }, [u, W, p]),
        eE = o
            ? b
                ? P.intl.string(T.default["Eb/YV9"])
                : k
                  ? P.intl.string(T.default.FD30bh)
                  : P.intl.formatToPlainString(T.default.dTSqLF, { count: m.length })
            : "",
        e_ = Q && null != Y,
        eM = S && null == W,
        eR = q?.target ?? eh?.target ?? null,
        eT = q ?? O,
        eP = q ?? (O?.instant === !0 ? null : O),
        eL =
            null != eh && null != Y
                ? (function (e, t) {
                      let { left: n, top: l } = mA(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(mw(eh.target, eh.anchor, Y, ei), Y)
                : null;
    return (
        i.useEffect(() => {
            let e = r();
            if (eh?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = eh;
            mj(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [eh, r]),
        (0, e5.createPortal)(
            (0, a.jsxs)("div", {
                ref: ew,
                className: mb.Li,
                children: [
                    (0, a.jsx)(t5.A, {
                        tag: "div",
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-design-announcer",
                        children: eE,
                    }),
                    e_
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)("div", {
                                      className: mb.MT,
                                      style: { left: Y.left, top: Y.top, width: Y.width, height: Y.height },
                                      "data-plain-cursor": eM ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": P.intl.string(T.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: ef,
                                      onMouseLeave: ep,
                                      onClick: ex,
                                      onKeyDown: eA,
                                  }),
                                  null != A && null == A.marker && null == q && null == W
                                      ? (0, a.jsx)(mT, { box: mk(A, Y, ei) })
                                      : null,
                                  (0, a.jsx)("div", {
                                      ref: E,
                                      className: mb.aZ,
                                      children: (0, a.jsx)("div", {
                                          className: mb.xz,
                                          "data-shown": null != A && null == W && null == q ? "" : void 0,
                                          "data-instant": K ? "" : void 0,
                                          children: (0, a.jsxs)(v.E, {
                                              variant: "body-xs/medium",
                                              className: mb.Ux,
                                              children: [
                                                  null == R
                                                      ? null
                                                      : (0, a.jsx)("span", { className: mb.Tl, children: R.kind }),
                                                  null == R || "" === R.name
                                                      ? null
                                                      : (0, a.jsxs)("span", {
                                                            className: mb.kh,
                                                            children: [" ", R.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, a.jsx)("div", {
                                      ref: _,
                                      className: mb.Y,
                                      children: eM ? (0, a.jsx)("div", { className: mb.u }) : null,
                                  }),
                                  null == eP
                                      ? null
                                      : (0, a.jsx)("div", {
                                            className: mb.aZ,
                                            style: {
                                                transform: `translate3d(${eP.at.x + 20}px, ${eP.at.y + 20}px, 0)`,
                                            },
                                            children: (0, a.jsx)("div", {
                                                className: mb.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == q ? "" : void 0,
                                                children: (0, a.jsxs)(v.E, {
                                                    variant: "body-xs/medium",
                                                    className: mb.Ux,
                                                    children: [
                                                        (0, a.jsx)("span", {
                                                            className: mb.Tl,
                                                            children: eP.label.kind,
                                                        }),
                                                        "" === eP.label.name
                                                            ? null
                                                            : (0, a.jsxs)("span", {
                                                                  className: mb.kh,
                                                                  children: [" ", eP.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eR && null == eR.marker
                                      ? (0, a.jsx)("div", { className: mb.D0, style: mk(eR, Y, ei), "aria-hidden": !0 })
                                      : null,
                                  m.map((e, t) => {
                                      let n = mw(e.target, e.anchor, Y, ei),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, a.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: mb.xL,
                                              style: { ...mA(n, Y), width: 24, height: 24 },
                                              "aria-label": P.intl.formatToPlainString(T.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: (0, lD.Bx)(e.target),
                                              }),
                                              "aria-expanded": W?.id === e.id,
                                              "data-testid": "conjure-design-marker",
                                              onMouseEnter: () => {
                                                  null == q && X(l);
                                              },
                                              onFocus: () => {
                                                  null == q && X(l);
                                              },
                                              onClick: (e) => {
                                                  (e.stopPropagation(), ea(), X(l));
                                              },
                                              children: (0, a.jsx)(mN, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eT || null == u
                                      ? null
                                      : (0, a.jsx)(tr, {
                                            projectId: u,
                                            at: { x: eT.at.x + 20, y: eT.at.y + 20 },
                                            bounds: Y,
                                            kind: eT.label.kind,
                                            value: eT.draft,
                                            canSubmit: null != q && (0, lD.Ch)(eT.draft),
                                            onChange: (e) => {
                                                null != q && F({ ...q, draft: e });
                                            },
                                            onSubmit: eC,
                                            onDismiss: ea,
                                            onUploadFile: eS,
                                            closing: null == q,
                                        }),
                                  null != eh && null != W && null != eL
                                      ? (0, a.jsxs)(mI, {
                                            point: eL,
                                            frame: Y,
                                            authorId: eh.authorId,
                                            title: (0, lD.Bx)(eh.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                W.confirmingRemove ? X({ ...W, confirmingRemove: !1 }) : X(null);
                                            },
                                            onMouseLeave: () => {
                                                W.editing || W.confirmingRemove || X(null);
                                            },
                                            children: [
                                                W.editing
                                                    ? (0, a.jsx)(nA.f, {
                                                          autoFocus: !0,
                                                          label: P.intl.string(T.default.KCYqWL),
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
                                                    : (0, a.jsx)(v.E, {
                                                          variant: "body-sm/normal",
                                                          color: "text-default",
                                                          className: mb.aC,
                                                          children: eh.comment,
                                                      }),
                                                (0, z.It)(eh, p)
                                                    ? (0, a.jsx)("div", {
                                                          className: mb.eB,
                                                          children: W.confirmingRemove
                                                              ? (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(v.E, {
                                                                            variant: "body-xs/normal",
                                                                            color: "text-muted",
                                                                            className: mb.nv,
                                                                            children: P.intl.string(T.default.wOHvts),
                                                                        }),
                                                                        (0, a.jsx)(d.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: P.intl.string(T.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                X({ ...W, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, a.jsx)(d.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: P.intl.string(T.default.friIzR),
                                                                            "data-testid":
                                                                                "conjure-design-remove-confirm",
                                                                            onClick: eI,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(d.$, {
                                                                            variant: "critical-secondary",
                                                                            size: "sm",
                                                                            text: P.intl.string(T.default.friIzR),
                                                                            onClick: () =>
                                                                                X({
                                                                                    ...W,
                                                                                    editing: !1,
                                                                                    confirmingRemove: !0,
                                                                                }),
                                                                        }),
                                                                        W.editing
                                                                            ? (0, a.jsx)(d.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !(0, lD.Ch)(W.draft),
                                                                                  text: P.intl.string(T.default.iicRP9),
                                                                                  onClick: eN,
                                                                              })
                                                                            : (0, a.jsx)(d.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: P.intl.string(
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
function mN(e) {
    let { authorId: t } = e,
        n = (0, c.bG)([nM.default], () => nM.default.getUser(t), [t]);
    return (0, a.jsx)(aM.eu, {
        src: null == n ? null : aT.Ay.getUserAvatarURL(n),
        size: aR._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function mI(e) {
    let t,
        n,
        l,
        r,
        s,
        u,
        { point: o, frame: c, authorId: d, title: m, testId: f, onDismiss: h, onMouseLeave: g, children: p } = e,
        x = i.useRef(null),
        j = i.useRef(null),
        [b, y] = i.useState(my);
    i.useLayoutEffect(() => {
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
            originY: C,
        } = ((n = Math.max((t = c.left + 8), c.left + c.width - 300 - 8)),
        (r = Math.max((l = c.top + 8), c.top + c.height - 160 - 8)),
        (s = Math.min(Math.max(o.x - b.x, t), n)),
        { left: s, top: (u = Math.min(Math.max(o.y - b.y, l), r)), originX: o.x - s, originY: o.y - u }),
        S = { left: k, top: w, "--custom-conjure-card-origin-x": `${A}px`, "--custom-conjure-card-origin-y": `${C}px` };
    return (0, a.jsxs)("div", {
        ref: x,
        className: mb.Nr,
        style: S,
        "data-testid": f,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, a.jsxs)("div", {
                className: mb.MY,
                children: [
                    (0, a.jsx)("span", { ref: j, className: mb.ip, children: (0, a.jsx)(mN, { authorId: d }) }),
                    (0, a.jsx)(v.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        className: mb.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: mb.zI, children: p }),
        ],
    });
}
let mE = 300,
    m_ = 2;
function mM(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function mR(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function mT(e) {
    let { box: t } = e;
    return (0, a.jsx)("div", { className: mb.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var mP = n(318774),
    mL = n(697744),
    m$ = n(130324);
function mD(e) {
    let t = (0, mL.c)(),
        { events: n, getDuration: l } = t;
    i.useEffect(() => {
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
    let r = (0, tQ.j)();
    return (
        i.useEffect(() => {
            if (!r) return;
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e, r]),
        t
    );
}
function mq(e) {
    let { className: t } = e,
        { Component: n, events: l } = mD(3e4);
    return (0, a.jsxs)("div", {
        className: o()(t, m$.Ve),
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                className: m$.ol,
                children: P.intl.string(T.default.AyiQEp),
            }),
        ],
    });
}
var mF = n(251363),
    mO = n(944142),
    mG = n(532247),
    mz = n(501628);
function mU(e) {
    let { progress: t } = e,
        { Component: n } = mD(1500),
        l = F.Q_.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, a.jsx)(v.E, { variant: "body-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, a.jsx)("div", {
                className: mz.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: mz.PM,
                            "data-state": n < t.stepIndex ? "done" : n === t.stepIndex ? "current" : "todo",
                        },
                        n,
                    ),
                ),
            }),
            l && null != t.stepLabel
                ? (0, a.jsx)(v.E, { variant: "body-xs/normal", color: "text-overlay-light", children: t.stepLabel })
                : null,
        ],
    });
}
function mB(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        u = (0, c.bG)([mO.A], () => (s ? mO.A.getLiveReload(t) : null), [s, t]),
        o = (0, e$.A)(n, r)?.id ?? null,
        d = u?.phase ?? null,
        m = u?.background === !0,
        f = (function (e, t, n) {
            let l = (0, mG.dv)(e),
                [r, a] = i.useState(null),
                [s, u] = i.useState(l),
                [o, d] = i.useState(t);
            s !== l && (u(l), d(t), a(null != l || o ? null : (0, mG.QP)(e, s)));
            let m = (0, c.bG)(
                    [ep.A],
                    () => {
                        let e = ep.A.getFrame(n);
                        return (0, ey.x1)(e) && e.data.proxyTicketRefreshing;
                    },
                    [n],
                ),
                f = i.useRef(m),
                h = i.useRef(!1);
            return (
                i.useEffect(() => {
                    ((f.current = m), m && (h.current = !0));
                }, [m]),
                i.useEffect(() => {
                    if (null == r) return;
                    function e() {
                        return a(null);
                    }
                    function t(t) {
                        null != t.target && t.target === (0, mF.ow)(null, n) && e();
                    }
                    ((h.current = f.current), document.addEventListener("load", t, !0));
                    let l = window.setTimeout(() => {
                            h.current || e();
                        }, 4e3),
                        i = window.setTimeout(e, 15e3);
                    return () => {
                        (document.removeEventListener("load", t, !0), window.clearTimeout(l), window.clearTimeout(i));
                    };
                }, [r, n]),
                r
            );
        })(d, m, o),
        h = m ? null : (0, mG.h_)(d, u?.step ?? null, f);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(t5.A, { tag: "div", role: "status", "aria-live": "polite", children: h?.title ?? "" }),
            null != h
                ? (0, a.jsx)("div", {
                      className: mz.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, a.jsx)(mU, { progress: h }),
                  })
                : null,
        ],
    });
}
let mK = 0;
var mH = n(782134),
    mV = n(357858),
    mW = n(343030),
    mX = n(11411),
    mQ = n(111518),
    mZ = n(240666);
let mY = { width: 1 / 0, height: 1 / 0 };
function mJ(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mY;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var m0 = n(702083);
function m1(e) {
    let { children: t } = e,
        { mobile: n, landscape: l } = (0, c.cf)([eD.A], () => ({
            mobile: eD.A.isBuilderPreviewMobile(),
            landscape: eD.A.isBuilderPreviewLandscape(),
        })),
        r = i.useRef(null),
        [s, u] = i.useState(null);
    i.useLayoutEffect(() => {
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
        m = n ? mJ(l, d ?? void 0) : null;
    return (0, a.jsx)("div", {
        ref: r,
        className: o()(m0.dw, { [m0.PQ]: null != m }),
        children: (0, a.jsx)("div", { className: o()(m0.R9, { [m0.Vg]: null != m }), style: m ?? void 0, children: t }),
    });
}
var m2 = n(347927);
function m3(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, a.jsxs)("div", {
        className: o()(m2.Bf, l && m2.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: m2.Ux,
                children: [
                    (0, a.jsx)(x.D, { variant: "heading-sm/semibold", color: "text-default", children: t }),
                    null != n
                        ? (0, a.jsx)(v.E, { variant: "body-md/medium", color: "text-subtle", children: n })
                        : null,
                ],
            }),
            r,
        ],
    });
}
var m4 = n(957272);
function m5(e) {
    let { applicationId: t, surface: n, launch: l, frameOverlay: r } = e,
        { frame: i, state: s } = (0, mQ.A)({ applicationId: t, surface: n, launch: l });
    if (((0, mZ.A)(t, n), s === mQ.n.Launched)) {
        let e = (0, a.jsx)(mX.A, { frameId: i.id, level: mW.A.WithinAppContent, className: m4.Z7, overlay: r });
        return (0, eq.Q5)(n) ? (0, a.jsx)(m1, { children: e }) : e;
    }
    return (0, a.jsx)(m7, { state: s });
}
function m7(e) {
    let { state: t } = e;
    switch (t) {
        case mQ.n.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: m4.qs,
                children: (0, a.jsx)(m3, {
                    title: P.intl.string(T.default["9kpdo7"]),
                    body: P.intl.string(T.default.iIA8Nj),
                }),
            });
        case mQ.n.NoApplication:
            return (0, a.jsx)(mq, { className: m4.qs });
        case mQ.n.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: m4.qs,
                children: (0, a.jsx)(m3, {
                    title: P.intl.string(T.default["7k4GyN"]),
                    body: P.intl.string(T.default.zdIy3R),
                }),
            });
        case mQ.n.Error:
            return (0, a.jsxs)("div", {
                className: m4.qs,
                children: [
                    (0, a.jsx)(x.D, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        children: P.intl.string(T.default.lTPbnG),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-feedback-critical",
                        className: m4.tj,
                        children: P.intl.string(T.default.e6GiAZ),
                    }),
                ],
            });
        case mQ.n.AwaitingLaunch:
        case mQ.n.Loading:
            return (0, a.jsx)("div", { className: m4.qs, children: (0, a.jsx)(b.y, {}) });
    }
}
var m8 = n(308528),
    m9 = n(334738),
    m6 = n(699344),
    fe = n(365971),
    ft = n(703462);
function fn(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: ft.f,
        children: [
            (0, a.jsx)(io.AppsIcon, { size: "lg", color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, { variant: "body-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function fl() {
    return (0, a.jsx)("div", { className: ft.f, children: (0, a.jsx)(b.y, {}) });
}
function fr(e) {
    let t,
        n,
        { projectId: l, previewApplicationId: r } = e,
        [s, u] = i.useState(null),
        o = s?.previewApplicationId === r ? s.channelId : null,
        d = (0, c.bG)([nE.A], () => (null != o ? nE.A.getChannel(o) : null), [o]);
    ((t = d?.id ?? null),
        i.useEffect(() => {
            null != t && m8.A.preload(eb.ME, t);
        }, [t]),
        (n = (0, c.bG)([od.A], () => od.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, fe.Xg)();
            return (
                (0, m9.yl)(t, e),
                () => {
                    (0, m9.dm)(t, e);
                }
            );
        }, [t, n]));
    let [m, f] = i.useState(null),
        h = m === r;
    return (i.useEffect(() => {
        if (null != d || h) return;
        let e = !1;
        return (
            (0, ee.CN)(l).then(
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
        ? (0, a.jsx)(fn, { message: P.intl.string(T.default["VP/O8s"]) })
        : null == d
          ? (0, a.jsx)(fl, {})
          : (0, a.jsx)("div", {
                className: ft.g,
                children: (0, a.jsx)(m6.A, { channel: d, guild: null, chatInputType: sU.oU.SIDEBAR }, d.id),
            });
}
var fa = n(765671),
    fi = n(596977),
    fs = n(921853),
    fu = n(582063);
function fo(e) {
    let { projectId: t, captures: n, selected: l } = e,
        r = [...n, null],
        i = null != l ? n.indexOf(l) : n.length;
    function s(e) {
        let n = r[(i + e + r.length) % r.length];
        (0, ee.vX)(t, n?.id ?? null);
    }
    let u = P.intl.string(T.default.Gl3XtE),
        o = P.intl.string(T.default["3FvcrY"]);
    return (0, a.jsxs)("div", {
        className: fu.aF,
        children: [
            (0, a.jsx)(e6.m, {
                text: u,
                position: "top",
                children: (0, a.jsx)(tc.K, {
                    icon: fs.ChevronSmallLeftIcon,
                    size: "sm",
                    variant: "overlay-secondary",
                    "aria-label": u,
                    onClick: () => s(-1),
                }),
            }),
            (0, a.jsx)("div", {
                className: fu.Dn,
                "aria-live": "polite",
                children:
                    null != l
                        ? (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "body-sm/medium",
                              color: "text-strong",
                              lineClamp: 1,
                              children: P.intl.formatToPlainString(T.default["140n5k"], {
                                  name: l.name,
                                  index: i + 1,
                                  count: n.length,
                              }),
                          })
                        : (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "body-sm/medium",
                              color: "text-strong",
                              children: P.intl.string(T.default.wVJL0P),
                          }),
            }),
            (0, a.jsx)(e6.m, {
                text: o,
                position: "top",
                children: (0, a.jsx)(tc.K, {
                    icon: t7.ChevronSmallRightIcon,
                    size: "sm",
                    variant: "overlay-secondary",
                    "aria-label": o,
                    onClick: () => s(1),
                }),
            }),
        ],
    });
}
var fc = n(625903),
    fd = n(666476);
let fm = ["image/png", "image/jpeg", "image/gif", "image/webp"];
function ff() {
    (0, _.P0)({ text: P.intl.string(T.default.jj3abP), variant: "critical" });
}
function fh(e) {
    let { projectId: t } = e,
        n = i.useRef(null),
        l = i.useRef(null),
        r = P.intl.string(T.default["xd/1IW"]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(ew.Y, {
                targetElementRef: n,
                align: "left",
                position: "bottom",
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, a.jsx)(fg, { projectId: t, onClose: n, onUpload: () => l.current?.click() });
                },
                children: (e) => {
                    let { onClick: t } = e;
                    return (0, a.jsx)("div", {
                        ref: n,
                        className: fu.m2,
                        children: (0, a.jsx)(e6.m, {
                            position: "bottom",
                            text: r,
                            asContainer: !0,
                            children: (0, a.jsx)(tc.K, {
                                "aria-label": r,
                                icon: fc.SettingsIcon,
                                variant: "overlay-secondary",
                                size: "sm",
                                onClick: t,
                            }),
                        }),
                    });
                },
            }),
            (0, a.jsx)("input", {
                ref: l,
                type: "file",
                accept: fm.join(","),
                hidden: !0,
                "aria-hidden": !0,
                tabIndex: -1,
                onChange: (e) => {
                    let n = e.currentTarget.files?.[0];
                    ((e.currentTarget.value = ""),
                        null != n &&
                            (fm.includes(n.type)
                                ? n.size > fd.aI
                                    ? (0, _.P0)({ text: P.intl.string(T.default.T8Spiu), variant: "critical" })
                                    : (0, rW.M$)(t, n).catch(ff)
                                : (0, _.P0)({ text: P.intl.string(T.default.AO7zpk), variant: "critical" })));
                },
            }),
        ],
    });
}
function fg(e) {
    let { projectId: t, onClose: n, onUpload: l } = e,
        r = (0, c.bG)([rV.A], () => rV.A.getBackground(t)),
        i = r?.blur !== !1,
        s = r?.imageEtag ?? null;
    return (0, a.jsxs)(eA.W, {
        "data-menu-migrated": !0,
        navId: "conjure-overlay-background",
        "aria-label": P.intl.string(T.default["xd/1IW"]),
        onClose: n,
        onSelect: void 0,
        children: [
            (0, a.jsxs)(eC.rX, {
                children: [
                    (0, a.jsx)(eC.Dr, {
                        id: "conjure-overlay-background-upload",
                        label: P.intl.string(T.default.uQpDky),
                        icon: ly.ImagePlusIcon,
                        action: () => {
                            (n(), l());
                        },
                    }),
                    (0, a.jsx)(eC.Dr, {
                        id: "conjure-overlay-background-reset",
                        label: P.intl.string(T.default.AiAz8J),
                        icon: dO.RetryIcon,
                        disabled: null == s,
                        action: () => {
                            (n(), (0, rW.Og)(t).catch(ff));
                        },
                    }),
                ],
            }),
            (0, a.jsx)(eC.rX, {
                children: (0, a.jsx)(eC.fP, {
                    id: "conjure-overlay-background-blur",
                    label: P.intl.string(T.default["hyN+kc"]),
                    checked: i,
                    action: () => {
                        (0, rW.Y1)(t, !i) || ff();
                    },
                }),
            }),
        ],
    });
}
function fp(e) {
    let { applicationId: t, projectId: n, size: l, frameOverlay: r } = e,
        { ref: s, width: u, height: o } = (0, fa.Ay)(),
        { captures: c, selected: d } = rH(n),
        m = (function (e, t, n) {
            let { width: l, height: r } = e;
            if (null == l || null == r || l <= 0 || r <= 0) return { top: 24, end: 24, scale: 1 };
            if (null == t || t.width <= 0 || t.height <= 0)
                return { top: 24, end: 24, scale: ea({ width: l - 48, height: r - 48 }, n) };
            let a = t.width / t.height,
                i = Math.min(l, r * a),
                s = i / 1920,
                u = ea({ width: 1872, height: 1920 / a - 48 }, n);
            return { top: (r - i / a) / 2 + 24 * s, end: (l - i) / 2 + 24 * s, scale: u * s };
        })({ width: u, height: o }, d, l);
    return (
        i.useEffect(() => (0, fi.L0)(), []),
        (0, a.jsxs)("div", {
            className: fu.JH,
            children: [
                (0, a.jsx)(rQ, { projectId: n, gameCaptures: !0 }),
                (0, a.jsx)("div", {
                    ref: s,
                    className: fu.dw,
                    children: (0, a.jsx)("div", {
                        className: fu.HL,
                        style: {
                            "--custom-conjure-overlay-widget-width": `${l.width}px`,
                            "--custom-conjure-overlay-widget-height": `${l.height}px`,
                            "--custom-conjure-overlay-widget-top": `${m.top}px`,
                            "--custom-conjure-overlay-widget-end": `${m.end}px`,
                            "--custom-conjure-overlay-widget-scale": String(m.scale),
                        },
                        children: (0, a.jsx)(m5, { applicationId: t, surface: ey.ZN, frameOverlay: r }),
                    }),
                }),
                null != n ? (0, a.jsx)(fh, { projectId: n }) : null,
                null != n && c.length > 0 ? (0, a.jsx)(fo, { projectId: n, captures: c, selected: d }) : null,
            ],
        })
    );
}
function fx(e) {
    let { onAddBot: t, loading: n = !1 } = e;
    return (0, a.jsx)(m3, {
        title: P.intl.string(T.default.xlEjZ8),
        body: P.intl.string(T.default["4ByPbd"]),
        children: (0, a.jsx)(d.$, {
            size: "sm",
            variant: "primary",
            text: P.intl.string(T.default.RGeB11),
            onClick: t,
            loading: n,
        }),
    });
}
var fv = n(409478),
    fj = n(652227);
function fb(e) {
    let {
            applicationId: t,
            previewApplicationId: n,
            surface: l,
            frameLaunchParams: r,
            previewReady: i,
            previewGate: s,
            availability: u,
            activeMode: o,
            widgetApplicationId: d,
            overlayWidgetSize: m = el,
            projectId: f,
            renderFrameOverlay: h,
            paused: g = !1,
            onResume: p,
        } = e,
        x = (0, c.bG)([lU.A], () => null != f && null != lU.A.getSetupStartedAt(f), [f]);
    return s?.type === "checking"
        ? (0, a.jsx)("div", { className: fj.qs, children: (0, a.jsx)(b.y, {}) })
        : s?.type === "bot_install"
          ? (0, a.jsx)("div", {
                className: fj.qs,
                children: (0, a.jsx)(fx, { onAddBot: s.onAddBot, loading: s.loading }),
            })
          : i
            ? null == t
                ? null
                : (0, a.jsxs)("div", {
                      "data-conjure-entrance": !0,
                      className: fj.RG,
                      children: [
                          (0, eu.yf)(u, o)
                              ? g
                                  ? (0, a.jsx)(fy, { projectId: f, onResume: p })
                                  : (0, a.jsx)(m5, { applicationId: t, surface: l, launch: r, frameOverlay: h?.(l) })
                              : null,
                          "widget" === o && null != d
                              ? "unavailable-authorization-revoked" === u.profileState
                                  ? (0, a.jsx)("div", {
                                        className: fj.qs,
                                        children: (0, a.jsx)(m3, {
                                            wide: !0,
                                            title: P.intl.string(T.default["08U+YO"]),
                                            body: P.intl.string(T.default.pKBfrc),
                                        }),
                                    })
                                  : (0, a.jsx)(fv.A, { applicationId: d })
                              : null,
                          "overlay" === o && u.modes.includes("overlay")
                              ? (0, a.jsx)(fp, { applicationId: t, projectId: f, size: m, frameOverlay: h?.(ey.ZN) })
                              : null,
                          "bot" === o && null != n && null != f
                              ? (0, a.jsx)(fr, { projectId: f, previewApplicationId: n })
                              : null,
                      ],
                  })
            : x
              ? (0, a.jsx)("div", { className: fj.qs, children: (0, a.jsx)(b.y, {}) })
              : (0, a.jsx)(mq, { className: fj.qs });
}
function fy(e) {
    let { projectId: t, onResume: n } = e;
    return (
        (0, mV.Pu)(t),
        (0, a.jsx)("div", {
            className: fj.qs,
            children: (0, a.jsx)(m3, {
                wide: !0,
                title: P.intl.string(T.default.MMWEH2),
                body: P.intl.string(T.default.iKSu55),
                children:
                    null != n
                        ? (0, a.jsx)(d.$, {
                              size: "sm",
                              variant: "primary",
                              icon: mH.PlayIcon,
                              text: P.intl.string(T.default.ZKd2Cw),
                              onClick: n,
                          })
                        : null,
            }),
        })
    );
}
var fk = n(750506),
    fw = n(867193),
    fA = n(539197),
    fC = n(977020);
function fS(e) {
    let { projectId: t } = e,
        n = (0, fA.X2)(t),
        l = (function (e) {
            let [t, n] = i.useState(null);
            return (
                i.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, fA.Ie)(e);
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
    return (0, a.jsxs)("div", {
        className: fC.$Q,
        style: { left: r, top: s, width: u, height: c, "--custom-conjure-cursor-scale": d },
        "aria-hidden": !0,
        [fA.t$]: "",
        children: [
            n.presses > 0
                ? (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)("div", { className: o()(fC.hN, fC.vW), style: m(n.pressX, n.pressY) }),
                              (0, a.jsx)("div", { className: o()(fC.hN, fC.A7), style: m(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, a.jsx)("svg", {
                className: o()(fC.UE, { [fC.SP]: n.shown, [fC.Vq]: n.pressed, [fC.GP]: n.dipping }),
                style: m(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, a.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var fN = n(417760);
function fI(e) {
    let { phase: t, projectId: n, compact: l } = e,
        { stop: r, stopping: s } = (function (e) {
            let t = (0, c.bG)([l2.A], () => null != e && l2.A.isThinking(e)),
                [n, l] = i.useState(!1),
                [r, a] = i.useState(t);
            (t !== r && (a(t), t || l(!1)),
                i.useEffect(() => {
                    if (!n) return;
                    let e = setTimeout(() => l(!1), 5e3);
                    return () => clearTimeout(e);
                }, [n]));
            let s = i.useCallback(() => {
                null != e && (l(!0), (0, ez.fu)(e));
            }, [e]);
            return { stop: t ? s : null, stopping: n };
        })(n),
        u = (0, G.CU)(n),
        m = "controlling" === t,
        f = P.intl.string(m ? (u ? T.default["VJW/5P"] : T.default["+hD2Iz"]) : T.default["h+i1r9"]),
        h =
            null != r
                ? (0, a.jsx)(d.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: P.intl.string(T.default.oU59sU),
                      loading: s,
                      onClick: r,
                      "data-testid": "conjure-control-stop",
                  })
                : null;
    return l
        ? (0, a.jsxs)("div", {
              className: o()(fN.M0, fN.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  m
                      ? (0, a.jsx)(cn.i, { size: 12, color: "currentColor" })
                      : (0, a.jsx)(iq.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, a.jsx)(v.E, { variant: "body-sm/semibold", color: "none", className: fN.ID, children: f }),
                  m ? (0, a.jsx)(t5.A, { children: P.intl.string(T.default.fg1sor) }) : null,
                  m ? (0, a.jsx)("div", { className: fN.lC, children: h }) : null,
              ],
          })
        : (0, a.jsxs)("div", {
              className: fN.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, a.jsxs)("div", {
                      className: fN.sp,
                      children: [
                          (0, a.jsx)(iq.SparklesIcon, { size: "sm", color: "currentColor" }),
                          m ? (0, a.jsx)(cn.i, { size: 12, color: "currentColor" }) : null,
                          (0, a.jsxs)("div", {
                              className: fN.f4,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "body-sm/semibold",
                                      color: "none",
                                      className: fN.w9,
                                      children: f,
                                  }),
                                  m
                                      ? (0, a.jsx)(v.E, {
                                            variant: "body-xs/medium",
                                            color: "none",
                                            className: fN.Rb,
                                            children: P.intl.string(T.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  m ? (0, a.jsx)("div", { className: fN.lC, children: h }) : null,
              ],
          });
}
function fE(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveTarget: r, frameId: s } = e,
        u = (0, G.Zv)(null != n && n === l ? t : null),
        o = (function (e) {
            let [t, n] = i.useState(e),
                [l, r] = i.useState(!1);
            return (e !== t && (n(e), r(!e)),
            i.useEffect(() => {
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
        c = (0, H.Rv)(),
        d = (0, ex.cR)(s);
    i.useEffect(() => {
        u && d && null != s && (0, ex.BL)(s);
    }, [u, d, s]);
    let [m, f] = i.useState(null),
        [h, g] = i.useState(null),
        [p, x] = i.useState(null),
        v = "idle" !== o;
    i.useEffect(() => {
        if (!v) return;
        function e() {
            let e = ta(r());
            f((t) => (ti(t, e) ? t : e));
            let t = null == h ? null : ta(h);
            (x((e) => (ti(e, t) ? e : t)), null != h && (0, fw.C)(h.getBoundingClientRect().height));
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
                    null != h && (0, fw.C)(0));
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
        A = (function () {
            let [e] = i.useContext(fk.uY),
                [t] = i.useState(() => document.createElement("div"));
            return (
                i.useLayoutEffect(() => {
                    if (null != e) return (e.prepend(t), () => t.remove());
                }, [e, t]),
                null == e ? document.body : t
            );
        })();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            j
                ? (0, a.jsx)("div", {
                      ref: g,
                      className: fN.D,
                      "data-phase": o,
                      children: (0, a.jsx)("div", {
                          className: fN.QF,
                          children: (0, a.jsx)(fI, { phase: o, projectId: t, compact: y }),
                      }),
                  })
                : null,
            (0, e5.createPortal)(
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(t5.A, {
                        tag: "div",
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-control-announcer",
                        children:
                            "controlling" === o
                                ? P.intl.string(T.default.oWcemF)
                                : "handoff" === o
                                  ? P.intl.string(T.default["h+i1r9"])
                                  : "",
                    }),
                }),
                document.body,
            ),
            b
                ? (0, e5.createPortal)(
                      (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: fN.ys,
                                  style: w,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", {
                                  className: fN.om,
                                  style: k,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)(fS, { projectId: t }),
                          ],
                      }),
                      A,
                  )
                : null,
        ],
    });
}
var f_ = n(399503),
    fM = n(853555),
    fR = n(944100),
    fT = n(327152),
    fP = n(187645);
let fL = { width: 1280, height: 720 },
    f$ = new Map(),
    fD = !1;
function fq() {
    let e = new Map();
    for (let t of new Set([...l2.A.getActivityOrderedProjectIds(), ...(0, G.T7)()])) {
        if (!(l2.A.isThinking(t) || (0, G.wK)(t)) || et.A.isPaused(t)) continue;
        let n = (function (e) {
            let t = eP.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = [(0, eq.Rc)(t), (0, eq.Th)(t)].find(ey.x1);
            return n?.id ?? null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [l, r] of [...f$]) {
        var t, n;
        e.get(l) !== r.frameId &&
            ((t = l),
            (n = r),
            f$.delete(t),
            n.unregisterLookup(),
            fR.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove(),
            (0, fT.Pn)(n.frameId, null));
    }
    for (let [t, n] of e)
        f$.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = fP.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    fF(n, e, t),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (f$.set(e, l),
                    (l.unregisterLookup = (0, fM.Ng)(e, () => (0, mF.n5)(n, t))),
                    fR.A.registerFrameTarget(t, n, mW.A.Backstage, void 0));
            })(t, n);
    for (let [e, t] of f$) fF(t.element, e, t.frameId);
}
function fF(e, t, n) {
    if (ep.A.getFrame(n)?.surface.type === eo.U.OVERLAY) {
        let l = ei(eP.Ay.getProject(t));
        (e.classList.remove(fP.L),
            (e.style.width = `${l.width}px`),
            (e.style.height = `${l.height}px`),
            (0, fT.Pn)(n, l));
        return;
    }
    let l = eD.A.isBuilderPreviewMobile();
    e.classList.toggle(fP.L, !l);
    let r = l ? mJ(eD.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != r ? `${r.width}px` : ""),
        (e.style.height = null != r ? `${r.height}px` : ""),
        (0, fT.Pn)(n, r ?? fL));
}
var fO = n(873727),
    fG = n(47671),
    fz = n(418842),
    fU = n(413599);
let fB = 0;
var fK = n(487887);
let fH = null;
var fV = n(541940);
function fW(e) {
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
        [p, x] = i.useState(null),
        v = (0, e$.A)(l, s),
        j = v?.id ?? null;
    (!(function (e, t) {
        let n = (0, c.bG)([fU.A], () => (0, fO.x4)(fU.A.theme)),
            l = (0, c.bG)([fG.A], () => fG.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: a,
                highContrast: s,
                forcedColors: u,
                underlineLinks: o,
            } = (0, c.cf)([aE.Ay], () => ({
                reducedMotion: aE.Ay.useReducedMotion,
                fontScale: (0, fO.U0)(),
                highContrast: aE.Ay.isHighContrastModeEnabled,
                forcedColors: aE.Ay.useForcedColors,
                underlineLinks: aE.Ay.alwaysShowLinkDecorations,
            })),
            d = F.hH.useSetting(),
            m = (0, c.bG)([sD.A], () => sD.A.hidePersonalInformation),
            f = (0, fz.C)(),
            h = (0, c.bG)(
                [ep.A, eD.A],
                () =>
                    eD.A.isBuilderPreviewMobile() &&
                    ep.A.getFrame(t)?.applicationId === eD.A.getPhoneLensApplicationId()
                        ? "mobile"
                        : "desktop",
                [t],
            ),
            g = i.useRef(!1),
            p = i.useRef(!1),
            x = i.useRef(null),
            v = i.useCallback(() => {
                let l = (0, mF.n5)(e, t);
                if (null == l) return;
                x.current = l;
                let i = {
                    revision: ++fB,
                    baseTheme: n,
                    customTheme: (0, fO.Lq)(),
                    uiDensity: f,
                    messageDisplayCompact: d,
                    fontScale: a,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: u,
                    underlineLinks: o,
                    formFactor: h,
                    hidePersonalInformation: m,
                };
                (0, mv.W)(l, "set-env", i, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [n, u, a, h, t, m, s, d, e, r, f, o]),
            j = i.useRef(v);
        i.useLayoutEffect(() => {
            j.current = v;
        });
        let b = i.useCallback(() => {
            g.current ||
                ((g.current = !0),
                queueMicrotask(() => {
                    ((g.current = !1), p.current || j.current());
                }));
        }, []);
        (i.useEffect(
            () => (
                (p.current = !1),
                () => {
                    p.current = !0;
                }
            ),
            [],
        ),
            i.useEffect(() => {
                b();
            }, [l, b]),
            i.useLayoutEffect(() => {
                (v(), b());
            }, [b, v]),
            i.useLayoutEffect(() => {
                let n = (0, mF.n5)(e, t);
                null != n && n !== x.current && b();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, mF.n5)(e, t) && ((x.current = null), b());
                }
                return (document.addEventListener("load", n, !0), () => document.removeEventListener("load", n, !0));
            }, [t, e, b]),
            i.useEffect(() => {
                let e = new MutationObserver(b);
                return (
                    e.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "style"] }),
                    e.observe(document.head, { childList: !0, subtree: !0, characterData: !0 }),
                    () => e.disconnect()
                );
            }, [b]));
    })(p, j),
        i.useEffect(() => {
            if (null != t) return (0, fM.Ng)(t, () => (0, mF.n5)(p, j));
        }, [t, p, j]));
    let b = i.useCallback(() => (0, mF.ow)(p, j), [p, j]),
        y = i.useCallback(() => (h ? (0, mF.ow)(p, j) : p), [h, p, j]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: o()(fV.Mh, d),
                children: [
                    u,
                    g
                        ? null
                        : (0, a.jsx)(fE, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveTarget: y,
                              frameId: j,
                          }),
                    (0, a.jsx)("div", { ref: x, className: fV.fm, children: m }),
                ],
            }),
            f,
            g
                ? null
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(mS, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveIframe: b,
                              toggleRef: n,
                          }),
                          (0, a.jsx)(tB, { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: b }),
                      ],
                  }),
        ],
    });
}
function fX(e) {
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
            activeMode: A,
            widgetApplicationId: C,
            overlayWidgetSize: S,
            previewPaused: N = !1,
            onResumePreview: I,
        } = e;
    (0, f_.k)(n, C);
    let E = u.type === eo.U.MAIN || (0, eq.Q5)(u);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, c.cf)([eD.A], () => ({
            mobile: eD.A.isBuilderPreviewMobile(),
            landscape: eD.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? fK.aX.LANDSCAPE : fK.aX.PORTRAIT), (fH = e));
                else {
                    if (fH !== e) return;
                    ((l = fK.aX.UNHANDLED), (fH = null));
                }
                u7.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(E ? r : null);
    let _ = i.useRef(null),
        [M, R] = i.useState(0);
    (i.useEffect(() => {
        if (null == n) return;
        (0, tH.T)(n);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, tH.T)(n);
        }, 3e3);
        return () => clearInterval(e);
    }, [n]),
        (t = i.useRef(0)),
        i.useLayoutEffect(() => {
            E && ((t.current = ++mK), (0, ee.HV)(r));
        }, [r, E]),
        i.useEffect(() => {
            if (!E) return;
            let e = t.current;
            return () => {
                e === mK && (0, ee.HV)(null);
            };
        }, [r, E]),
        i.useEffect(() => {
            null != n &&
                ((0, ez.ensureConnection)(n),
                fD ||
                    ((fD = !0),
                    l2.A.addChangeListener(fq),
                    eP.Ay.addChangeListener(fq),
                    ep.A.addChangeListener(fq),
                    eD.A.addChangeListener(fq),
                    et.A.addChangeListener(fq),
                    (0, G.W3)(fq),
                    fq()));
        }, [n]),
        i.useLayoutEffect(() => {
            let e = _.current;
            if (null == e) return;
            function t() {
                null != e && R(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return (n.observe(e), () => n.disconnect());
        }, []));
    let L = Math.max(450, M - 320),
        $ = f || E;
    return (0, a.jsx)("div", {
        ref: _,
        className: fV.LB,
        children: (0, a.jsx)(fW, {
            projectId: n,
            designFeedbackToggleRef: l,
            applicationId: r,
            previewApplicationId: s,
            surface: u,
            header: m,
            showsFrame: (0, eu.yf)(w, A),
            paused: N,
            mainClassName: null == m ? void 0 : o()(fV.ez, { [fV.zt]: f }),
            content: (0, a.jsx)(fb, {
                applicationId: r,
                previewApplicationId: s,
                surface: u,
                frameLaunchParams: d,
                previewReady: y,
                previewGate: k,
                availability: w,
                activeMode: A,
                widgetApplicationId: C,
                overlayWidgetSize: S,
                projectId: n,
                paused: N,
                onResume: I,
                renderFrameOverlay: (e) =>
                    (0, a.jsx)(mB, { projectId: n, applicationId: r, previewApplicationId: s, surface: e }),
            }),
            sidebar:
                null != n && $
                    ? (0, a.jsx)("div", {
                          className: f ? fV.v7 : fV.LL,
                          children: (0, a.jsx)(e4.A, {
                              sidebarType: e4.X.CallChatSidebar,
                              maxWidth: L,
                              capturePointer: !0,
                              children: (0, a.jsx)("div", {
                                  className: fV.cO,
                                  children: v
                                      ? (0, a.jsx)(mm, { projectId: n, onClose: j ?? (() => {}) }, n)
                                      : (0, a.jsxs)(a.Fragment, {
                                            children: [
                                                (0, a.jsx)(mP.Ay, { projectId: n }),
                                                (0, a.jsx)(e0.Ay, {
                                                    "aria-label": P.intl.string(P.t["/VQax8"]),
                                                    toolbar: (0, a.jsxs)(a.Fragment, {
                                                        children: [
                                                            g,
                                                            null == h
                                                                ? null
                                                                : (0, a.jsx)(e0.Ay.Icon, {
                                                                      icon: e3.XSmallIcon,
                                                                      tooltip: P.intl.string(T.default.JD6Oit),
                                                                      onClick: h,
                                                                  }),
                                                        ],
                                                    }),
                                                    children: (0, a.jsx)(e0.Ay.Title, {
                                                        children: P.intl.string(P.t["/VQax8"]),
                                                    }),
                                                }),
                                                (0, a.jsx)("div", {
                                                    className: fV.cb,
                                                    children: (0, a.jsx)(
                                                        cI,
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
var fQ = n(705427),
    fZ = n(606128),
    fY = n(323140);
function fJ(e) {
    let t,
        l,
        r,
        { project: s, projectsLoaded: u, onBack: b, guildId: y, onBackToServer: k } = e,
        w = i.useContext(Z.A),
        [A] = i.useState(() => (null != w ? J.A.getProjectView(w) : null)),
        [$, D] = i.useState(A?.chatOpen ?? !0),
        [F, el] = i.useState(A?.debugOpen ?? !1);
    i.useEffect(() => {
        null != w && (0, Y.g7)(w, { chatOpen: $, debugOpen: F });
    }, [w, $, F]);
    let er = i.useCallback(
            (e) => {
                null != w && (0, Y.g7)(w, { previewSelection: e });
            },
            [w],
        ),
        ea = O(),
        ec = (0, U.f)("ConjureSelectedProjectScreen"),
        ed = i.useCallback(() => D(!0), []),
        em = i.useCallback(() => {
            (el(!1), D(!0));
        }, []),
        { restoreState: eh, handleRestoreVersion: eg } = (function (e, t) {
            let [n, l] = i.useState(null),
                r = e?.id ?? null,
                a = i.useRef(r),
                s = i.useRef(!0),
                u = i.useRef(!1);
            return (
                (a.current = r),
                i.useEffect(
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
                    handleRestoreVersion: i.useCallback(
                        function (n) {
                            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            if (null == e || u.current) return;
                            let o = e.id;
                            function c() {
                                return s.current && a.current === o;
                            }
                            ((u.current = !0),
                                t(),
                                l({ entry: n, status: "restoring" }),
                                (0, W.oB)(o, n.sha)
                                    .then(
                                        async () => {
                                            if (
                                                (i &&
                                                    c() &&
                                                    (0, _.P0)({
                                                        text: P.intl.formatToPlainString(T.default.Z4n6LX, {
                                                            title: (0, V.T4)(n.subject).short,
                                                        }),
                                                        variant: "success",
                                                    }),
                                                null != r)
                                            ) {
                                                let e = await (0, X.c)(o, r);
                                                null != e && (0, _.P0)({ text: e, variant: "critical" });
                                            }
                                            c() && l({ entry: n, status: "restored" });
                                        },
                                        (e) => {
                                            c() &&
                                                (l({ entry: n, status: "failed" }),
                                                console.error("[conjure] version restore failed", o, e),
                                                (0, _.P0)({
                                                    text: P.intl.string(T.default["PSdo+w"]),
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
        })(s, em),
        ep = s?.id ?? null,
        {
            integrationStatus: ex,
            isPreviewApplicationLoading: ev,
            checkingIntegration: ej,
            previewReady: eb,
            hasFrame: ew,
        } = (function (e) {
            let [t, n] = i.useState(null),
                l = e?.id ?? null,
                r = i.useRef(l),
                a = i.useRef(null);
            r.current = l;
            let s = (0, c.bG)(
                    [eP.Ay, eT.A],
                    () => (null == l ? null : (eP.Ay.getIntegrationStatus(l) ?? eT.A.getIntegrationStatus(l))),
                    [l],
                ),
                u = e?.preview_application_id ?? null,
                { isLoading: o } = (0, eM.YY)(u ?? void 0),
                d = null != l && t !== l,
                m = s?.preview_ready === !0,
                f = s?.has_activity === !0,
                h = s?.bot_permissions_changed === !0,
                g = (0, eu.Qg)({
                    installScope: e?.install_scope ?? null,
                    previewReady: m,
                    integrationInstalled: s?.integration_installed ?? null,
                    botPermissionsChanged: h,
                });
            i.useEffect(() => {
                g &&
                    !d &&
                    null != u &&
                    (async function (e) {
                        try {
                            await (0, eM.TA)(e);
                        } catch {}
                    })(u);
            }, [h, d, g, u]);
            let p = i.useCallback(async () => {
                if (null == l || r.current !== l) return;
                a.current?.abort();
                let e = new AbortController();
                ((a.current = e), n(null));
                try {
                    await ((0, eR.CG)(l)?.catch(() => (0, eR.U1)(l, e.signal)) ?? (0, eR.U1)(l, e.signal));
                } catch {
                } finally {
                    e.signal.aborted || a.current !== e || r.current !== l || n(l);
                }
            }, [l]);
            return (
                i.useEffect(
                    () => (
                        p(),
                        () => {
                            (a.current?.abort(), (a.current = null));
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
        eA =
            (0, c.bG)([eU.A], () => (null == ep ? void 0 : eU.A.getPublishStatus(ep)?.previewAppChannels), [ep]) ??
            ex?.preview_app_channels,
        {
            availability: eC,
            activeMode: eS,
            setMode: eN,
            frameSurface: eI,
            frameSurfaceOptions: eX,
            setFrameSurface: eQ,
            appChannel: eJ,
            setAppChannel: e0,
            frameLaunchParams: e1,
            widgetApplicationId: e3,
        } = (0, ef.p)({
            applicationId: s?.preview_application_id ?? null,
            previewApplicationId: s?.preview_application_id ?? null,
            declaredActivity: ew,
            previewSupportedSurfaces: s?.preview_supported_surfaces,
            installScope: s?.install_scope ?? null,
            ownerAuthorizationRevoked: ex?.owner_authorization_revoked === !0,
            supportsOverlay: s?.preview_supported_surfaces?.includes(en.q7.OVERLAY) === !0,
            previewAppChannels: eA,
            initialSelection: A?.previewSelection,
            onSelectionChange: er,
        }),
        e4 = ei(s);
    ((0, es.x)(ep, (e) => {
        eC.modes.includes(e) && eN(e);
    }),
        q(ep, () => {
            (D(!0), el(!0));
        }));
    let e5 = eC.modes.includes("frame"),
        e7 = (0, c.bG)([et.A], () => et.A.isPaused(ep), [ep]),
        {
            previewTargetOptions: e8,
            handleSelectPreviewTarget: e9,
            mobilePreview: e6,
            mobilePreviewLabel: te,
            handleToggleMobilePreview: tt,
            landscapePreview: tn,
            rotatePreviewLabel: tl,
            handleRotatePreview: tr,
            previewSurface: ta,
            previewFrame: ti,
            refreshFrame: ts,
            isRefreshing: tu,
            handleRefresh: to,
        } = (function (e) {
            let {
                    project: t,
                    modes: n,
                    activeMode: l,
                    frameSurface: r,
                    frameSurfaceOptions: a,
                    previewAppChannels: s,
                    setMode: u,
                    setFrameSurface: o,
                    setAppChannel: d,
                } = e,
                m = i.useMemo(
                    () =>
                        (function (e, t) {
                            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                            return e.flatMap((e) =>
                                "frame" === e
                                    ? t.flatMap((t) =>
                                          t === eo.U.APP_CHANNEL && n.length > 1
                                              ? n.map((n) => ({ mode: e, surface: t, appChannel: n }))
                                              : [{ mode: e, surface: t }],
                                      )
                                    : [{ mode: e }],
                            );
                        })(n, a, s),
                    [n, a, s],
                ),
                f = i.useCallback(
                    (e) => {
                        ("frame" === e.mode && (o(e.surface), null != e.appChannel && d?.(e.appChannel)), u(e.mode));
                    },
                    [d, o, u],
                ),
                h = (0, c.bG)([eD.A], () => eD.A.isBuilderPreviewMobile()),
                g = P.intl.string(h ? T.default.tKGF0Q : T.default.peqEOY),
                p = i.useCallback(() => (0, ee.GG)(!h), [h]),
                x = (0, c.bG)([eD.A], () => eD.A.isBuilderPreviewLandscape()),
                v = P.intl.string(x ? T.default.tunI2l : T.default.DoNdjA),
                j = i.useCallback(() => (0, ee.Lw)(!x), [x]),
                b = (0, eq.jS)(t),
                y = i.useMemo(() => (0, eq.Op)(b, r), [b, r]),
                k = (0, e$.A)(t?.preview_application_id ?? null, y),
                w = (0, e$.A)(t?.preview_application_id ?? null, ey.ZN),
                A = "overlay" === l ? w : k,
                C = (0, ey.x1)(A) && A.data.proxyTicketRefreshing,
                S = i.useCallback(() => {
                    null == A || C || eL.A.refreshProxyTicket(A.id);
                }, [A, C]);
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
                refreshFrame: A,
                isRefreshing: C,
                handleRefresh: S,
            };
        })({
            project: s,
            modes: eC.modes,
            activeMode: eS,
            frameSurface: eI,
            frameSurfaceOptions: eX,
            previewAppChannels: eA,
            setMode: eN,
            setFrameSurface: eQ,
            setAppChannel: e0,
        }),
        tc = (0, C.A)(ti),
        td = e5 && !e7,
        tm = (0, I.lQ)(ep),
        tf = tc.isPoppedOut ? T.default.pmkK8i : e7 ? T.default.Yet11p : null,
        th = null != tf;
    function tg(e) {
        return null == tf ? e : P.intl.formatToPlainString(tf, { label: e });
    }
    let tp = $ && !F,
        tx = P.intl.string(tp ? T.default.JD6Oit : T.default.xjJAQm),
        tv = i.useCallback(() => {
            if (F) {
                (el(!1), D(!0));
                return;
            }
            D((e) => !e);
        }, [F]),
        tj = i.useCallback(() => D(!1), []),
        {
            designFeedbackActive: tb,
            designFeedbackToggleRef: ty,
            agentDrivingPreview: tk,
            designFeedbackLabel: tw,
            handleToggleDesignFeedback: tA,
        } = (function (e, t, n) {
            let { active: l } = (0, z.rt)(e);
            i.useEffect(() => {
                null != e && l && !t && (0, z.mB)(e);
            }, [e, l, t]);
            let r = i.useRef(null),
                a = (0, G.Zv)(e),
                s = P.intl.string(a ? T.default.Sme0T0 : l ? T.default.vn5Rzu : T.default["cl/Jyl"]),
                u = i.useCallback(() => {
                    if (null != e) {
                        if (l) return void (0, z.mB)(e);
                        (n(), (0, z.w4)(e));
                    }
                }, [e, l, n]);
            return {
                designFeedbackActive: l,
                designFeedbackToggleRef: r,
                agentDrivingPreview: a,
                designFeedbackLabel: s,
                handleToggleDesignFeedback: u,
            };
        })(ep, td && (!tc.isPoppedOut || tm), em),
        [tC] = i.useState(() => N.isPlatformEmbedded && (0, e_.qM)());
    i.useEffect(() => {
        null != ep && tm && !td && (0, I.It)(ep);
    }, [ep, tm, td]);
    let tS = i.useCallback(() => {
            null != ep && (em(), (0, I.c$)(ep), (0, I.rC)(ep, "marker"));
        }, [ep, em]),
        tN = i.useCallback(() => {
            null != ep && (0, I.V9)(ep);
        }, [ep]),
        tI =
            th && !tm
                ? tg(P.intl.string(T.default["XWU+XF"]))
                : P.intl.string(tm ? T.default.tuQ5f3 : tk ? T.default.agwlrD : T.default["XWU+XF"]),
        tE = th ? tg(P.intl.string(T.default["cl/Jyl"])) : tw,
        t_ = tg(te),
        tM = tg(tl),
        tR = i.useCallback(() => {
            el((e) => !e && (D(!0), !0));
        }, []),
        tT = i.useCallback(() => el(!1), []),
        tP = i.useCallback(() => {
            null != ep && (0, ee._j)(ep);
        }, [ep]),
        tL = i.useCallback(() => {
            null != ep && (e7 ? (0, ee._j)(ep) : (0, ee.di)(ep, ti?.id));
        }, [ep, e7, ti?.id]),
        t$ = i.useCallback(() => {
            var e, t;
            (null != s && ((e = s.id), (t = ti?.id), (0, ez.Bn)(e), (0, eG.r)(t)), b());
        }, [s, ti?.id, b]),
        tD =
            ((t = (0, R.z)(s)),
            (l = i.useCallback(
                (e) => {
                    if (null == s) return;
                    let t = s.id,
                        n = (0, M.vt)(e);
                    null != n
                        ? (0, _.P0)({ text: n, variant: "critical" })
                        : (0, E.A)({
                              title: P.intl.formatToPlainString(T.default["Gm+u1+"], { name: s.name }),
                              subtitle: P.intl.string(T.default.M7H3sJ),
                              confirmText: P.intl.string(T.default.gFHykw),
                              variant: "critical",
                              onConfirm: async () => {
                                  ed();
                                  try {
                                      await (0, M.Hj)(t, e, P.intl.string(T.default.Owerd3));
                                  } catch {
                                      (0, _.P0)({ text: P.intl.string(T.default["Q+l4Hv"]), variant: "critical" });
                                  }
                              },
                          });
                },
                [s, ed],
            )),
            { onExport: t, onImport: (r = (0, M.yN)(l)).open, importInput: r.input }),
        tq = i.useCallback(() => {
            null != s && (0, eW.A)(s, y);
        }, [s, y]),
        tF = (0, Q.AJ)(ep),
        tO = i.useCallback(async () => {
            null != ep && (await (0, eK.vL)(ep, y));
        }, [y, ep]),
        tG = (0, eu.aN)(eS, {
            installScope: s?.install_scope ?? null,
            previewReady: eb,
            integrationInstalled: ex?.integration_installed ?? null,
        })
            ? { type: "bot_install", onAddBot: tO, loading: ev }
            : ej && null == ex
              ? { type: "checking" }
              : void 0,
        tz = (0, c.bG)([eP.Ay], () => null != ep && eP.Ay.isProjectDeleting(ep), [ep]);
    i.useEffect(() => {
        ((null == s && u) || tz) && b();
    }, [s, u, tz, b]);
    let {
            publishOptions: tU,
            publish: tB,
            publishing: tK,
            confirmation: tH,
            variant: tV,
            text: tW,
        } = (0, eH.A)(ep, y, ej || ev),
        tX = (0, eV.A)(ep, tB, tU),
        tQ = "frame" === eS && !e7 && (0, ey.x1)(ti) && (tc.isPoppedOut || tc.canPopout),
        tZ = i.useCallback(() => {
            if (null != s) {
                var e;
                ((e = {
                    projectId: s.id,
                    restoreDisabled: eh?.status === "restoring",
                    onRestoreVersion: tF ? void 0 : (e, t) => eg(e, t, !0),
                }),
                    (0, H.mM)(async () => {
                        let { default: t } = await Promise.all([
                            n.e(323079),
                            n.e(437655),
                            n.e(420238),
                            n.e(795807),
                            n.e(231782),
                            n.e(587883),
                        ]).then(n.bind(n, 247270));
                        return (n) => (0, a.jsx)(t, { ...n, ...e });
                    }));
            }
        }, [s, eh?.status, eg, tF]);
    (0, K.z)(ep, tZ);
    let tY = null == s ? void 0 : () => (0, eY.A)(s.id, { guildId: y, isPreview: !0, publishOptions: tU }),
        tJ =
            null == s
                ? null
                : (0, a.jsx)(eO.A, {
                      ...(0, eF.A)(s, y),
                      onOpenProjectSettings: tY,
                      onTogglePreviewPaused: "frame" === eS ? tL : void 0,
                      previewPaused: e7,
                      previewPauseDisabled: !e7 && tk,
                      onTogglePopout: tQ ? (tc.isPoppedOut ? tc.popIn : tc.popOut) : void 0,
                      poppedOut: tc.isPoppedOut,
                      onToggleDebug: ea ? tR : void 0,
                      debugOpen: F,
                      onExport: tD.onExport,
                      onImport: tF ? void 0 : tD.onImport,
                      onRemix: tF ? void 0 : tq,
                      onConnectTool: ec ? () => (0, B.A)(s.id) : void 0,
                      onHistory: tZ,
                      refreshApplicationId:
                          eC.modes.includes("widget") && "unavailable-authorization-revoked" !== eC.profileState
                              ? e3
                              : null,
                      previewProjectId: s.id,
                  }),
        t0 =
            null == tB || null == s
                ? null
                : (0, a.jsx)("div", {
                      className: fY.As,
                      onMouseDown:
                          null == ep || tB.disabled || tK
                              ? void 0
                              : (e) => {
                                    0 === e.button && (0, eB.dx)(ep);
                                },
                      children: (0, a.jsx)(d.$, {
                          size: "sm",
                          variant: tV,
                          icon: tK ? f0 : null != tH ? m.CheckmarkSmallIcon : void 0,
                          text: tW,
                          onClick: () => tX("header"),
                      }),
                  }),
        t1 = (0, a.jsx)(fQ.A, {
            title: s?.name ?? P.intl.string(T.default.G1WwgK),
            project: s,
            onOpenProjectSettings: tY,
            onBack: k,
            hideShareTarget: null != k,
            preview: null != s,
            actions:
                null == s
                    ? null
                    : (0, a.jsxs)("div", {
                          className: fY.FO,
                          children: [
                              (0, a.jsxs)("div", {
                                  className: fY.QQ,
                                  children: [
                                      (0, a.jsx)(eE, {
                                          targets: e8,
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
                                          })(eS, eI, eJ),
                                          onChange: e9,
                                      }),
                                      e5
                                          ? (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    "frame" === eS
                                                        ? (0, a.jsx)(S.A.Icon, {
                                                              icon: e6 ? f3 : f2,
                                                              tooltip: t_,
                                                              "aria-label": t_,
                                                              selected: e6,
                                                              disabled: th,
                                                              onClick: tt,
                                                          })
                                                        : null,
                                                    e6 && "frame" === eS
                                                        ? (0, a.jsx)(S.A.Icon, {
                                                              icon: f4,
                                                              tooltip: tM,
                                                              "aria-label": tM,
                                                              selected: tn,
                                                              disabled: th,
                                                              onClick: tr,
                                                          })
                                                        : null,
                                                    tF
                                                        ? null
                                                        : tC
                                                          ? (0, a.jsx)(S.A.Icon, {
                                                                icon: f.PencilIcon,
                                                                tooltip: tI,
                                                                "aria-label": tI,
                                                                selected: tm,
                                                                disabled: (th || tk) && !tm,
                                                                onClick: tm ? tN : tS,
                                                            })
                                                          : (0, a.jsx)(S.A.Icon, {
                                                                ref: ty,
                                                                icon: h.ExperimentalDirectSelectIcon,
                                                                iconClassName: fY.D8,
                                                                tooltip: tE,
                                                                "aria-label": tE,
                                                                selected: tb,
                                                                disabled: th || tk,
                                                                onClick: tA,
                                                            }),
                                                ],
                                            })
                                          : null,
                                      "frame" !== eS || e7
                                          ? null
                                          : (0, a.jsx)(ek, { frame: ti, controlProjectId: s.id }),
                                      (0, ey.x1)(ts)
                                          ? (0, a.jsx)(S.A.Icon, {
                                                icon: g.RefreshIcon,
                                                tooltip: P.intl.string(T.default.FZIHQN),
                                                "aria-label": P.intl.string(T.default.FZIHQN),
                                                disabled: tu,
                                                onClick: to,
                                            })
                                          : null,
                                  ],
                              }),
                              (0, a.jsx)("div", { className: fY.YJ }),
                              (0, a.jsx)(L.A, { frame: ti }),
                              (0, a.jsx)(S.A.Icon, {
                                  icon: p.DoorExitIcon,
                                  tooltip: P.intl.string(T.default["/TlGcK"]),
                                  "aria-label": P.intl.string(T.default["/TlGcK"]),
                                  onClick: t$,
                              }),
                              (0, a.jsx)(S.A.Icon, {
                                  icon: f1,
                                  tooltip: tx,
                                  "aria-label": tx,
                                  selected: tp,
                                  onClick: tv,
                              }),
                              tJ,
                          ],
                      }),
        });
    return (0, a.jsxs)("div", {
        className: o()(fY.nj, fZ.T),
        children: [
            tD.importInput,
            (0, a.jsx)("main", {
                className: fY.JX,
                children:
                    null == s
                        ? (0, a.jsxs)("div", {
                              className: fY.j5,
                              children: [
                                  t1,
                                  (0, a.jsxs)("div", {
                                      className: fY.sD,
                                      children: [
                                          (0, a.jsx)(x.D, {
                                              variant: "heading-lg/semibold",
                                              children: P.intl.string(T.default.G1WwgK),
                                          }),
                                          (0, a.jsx)(v.E, {
                                              variant: "body-md/normal",
                                              color: "text-muted",
                                              children: P.intl.string(T.default.fINulo),
                                          }),
                                          (0, a.jsx)(d.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: P.intl.string(T.default["WFJ/vb"]),
                                              onClick: () => (0, eR.listProjects)(y),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, a.jsx)(eK.bI.Provider, {
                              value: tU,
                              children: (0, a.jsx)(
                                  fX,
                                  {
                                      projectId: s.id,
                                      designFeedbackToggleRef: ty,
                                      applicationId: s.preview_application_id,
                                      previewApplicationId: s.preview_application_id,
                                      surface: ta,
                                      frameLaunchParams: e1,
                                      header: t1,
                                      chatOpen: $,
                                      onCloseChat: tj,
                                      chatHeaderAction: (0, a.jsxs)(j.B, {
                                          direction: "horizontal",
                                          gap: 8,
                                          align: "center",
                                          children: [
                                              tF ? null : (0, a.jsx)(e2, { projectId: s.id }),
                                              (0, a.jsx)(eZ, { projectId: s.id, guildId: y, publishOptions: tU }),
                                              t0,
                                          ],
                                      }),
                                      debugOpen: ea && F,
                                      onCloseDebug: tT,
                                      onRestoreVersion: tF ? void 0 : eg,
                                      onImportProject: (0, eP.PV)(s) && !tF ? tD.onImport : void 0,
                                      restoreState: eh,
                                      previewReady: eb,
                                      previewGate: tG,
                                      availability: eC,
                                      activeMode: eS,
                                      widgetApplicationId: e3,
                                      overlayWidgetSize: e4,
                                      previewPaused: e7,
                                      onResumePreview: tP,
                                  },
                                  s.id,
                              ),
                          }),
            }),
        ],
    });
}
function f0() {
    return (0, a.jsx)(b.y, { type: b.t.SPINNING_CIRCLE_SIMPLE, className: fY.Hv, itemClassName: fY.C5 });
}
function f1(e) {
    return (0, a.jsx)(y.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function f2(e) {
    return (0, a.jsx)(k.MobilePhoneIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function f3(e) {
    return (0, a.jsx)(w.ScreenIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function f4(e) {
    return (0, a.jsx)(A.RotateIcon, { ...e, size: "custom", width: 20, height: 20 });
}
