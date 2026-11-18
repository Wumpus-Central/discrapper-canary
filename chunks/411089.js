n.d(t, { A: () => f0 });
var l,
    r,
    a = n(477900),
    i = n(582128),
    s = n.t(i, 2),
    u = n(503698),
    o = n.n(u),
    c = n(855986),
    d = n(858899),
    m = n(821609),
    f = n(478016),
    h = n(22231),
    g = n(604525),
    p = n(663417),
    x = n(70688),
    v = n(534514),
    j = n(834730),
    b = n(289873),
    y = n(534890),
    k = n(646270),
    w = n(31300),
    A = n(831453),
    S = n(646973),
    C = n(742589),
    N = n(723702),
    I = n(171691),
    E = n(314116),
    _ = n(949757),
    M = n(800202),
    R = n(191850),
    T = n(792996),
    P = n(766367);
let L = new Set(),
    $ = null;
function D(e, t) {
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
                L.add(t),
                () => {
                    L.delete(t);
                }
            );
        }, [e]));
}
var q = n(253932);
function F() {
    return q.Q_.useSetting() || !1;
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
    X = n(60498),
    Q = n(227007),
    Z = n(398773),
    Y = n(735769),
    J = n(513845),
    ee = n(802905),
    et = n(951178);
let en = { width: 320, height: 240 };
function el(e) {
    let t = e?.default_size;
    return null != t && Number.isFinite(t.width) && Number.isFinite(t.height) && t.width > 0 && t.height > 0 ? t : en;
}
function er(e, t) {
    let { width: n, height: l } = e;
    return null == n || null == l || n <= 0 || l <= 0 ? 1 : Math.min(1, n / t.width, l / t.height);
}
function ea(e) {
    return el(e?.preview_overlay_widget ?? null);
}
var ei = n(855859),
    es = n(238490),
    eu = n(991690),
    eo = n(696645);
function ec(e) {
    return "frame" !== e.mode
        ? e.mode
        : null == e.appChannel
          ? `frame-${e.surface}`
          : `frame-${e.surface}-${e.appChannel}`;
}
function ed(e) {
    switch (e.mode) {
        case "frame":
            return null == e.appChannel
                ? (0, eo.X)(e.surface)
                : T.intl.formatToPlainString(R.default["6xVl+N"], {
                      surface: (0, eo.X)(e.surface),
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
var em = n(939398),
    ef = n(86147),
    eh = n(729475),
    eg = n(91242),
    ep = n(156548),
    ex = n(869146),
    ev = n(475815),
    ej = n(652215),
    eb = n(165610);
function ey(e) {
    let { frame: t, controlProjectId: n } = e,
        l = (0, ep.cR)(t?.id ?? null),
        r = (0, O.Zv)(n),
        i = (0, c.bG)(
            [ex.A, eg.A],
            () => null != t && ex.A.getWindowOpen(ej.MLl.ACTIVITY_POPOUT) && eg.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, eb.x1)(t) || i || r) return null;
    let s = (0, ep.fl)(t.id);
    if (null == s || !(0, ev.Ub)(s)) return null;
    let u = T.intl.string(l ? T.t.Z7MyNB : T.t.OIDkcp);
    return (0, a.jsx)(C.A.Icon, {
        tooltip: u,
        icon: l ? ef.FullscreenExitIcon : eh.FullscreenEnterIcon,
        "aria-label": u,
        role: "switch",
        "aria-checked": l,
        selected: l,
        onClick: () => (0, ep.U8)(t.id),
    });
}
var ek = n(265872),
    ew = n(165862),
    eA = n(477782),
    eS = n(559106),
    eC = n(847374),
    eN = n(704745);
function eI(e) {
    let { targets: t, target: n, onChange: l } = e,
        [r, s] = i.useState(!1),
        u = null != n && t.length > 1;
    r && !u && s(!1);
    let o = i.useCallback(() => s(!1), []),
        c = i.useCallback(() => s((e) => !e), []),
        d = i.useRef(null);
    if (!u) return null;
    let m = T.intl.string(R.default.I2ucou);
    return (0, a.jsx)(ek.Y, {
        targetElementRef: d,
        shouldShow: r,
        onRequestClose: o,
        position: "bottom",
        align: "right",
        animation: ek.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, a.jsx)(ew.W, {
                "data-menu-migrated": !0,
                navId: "conjure-preview-target",
                "aria-label": m,
                onClose: r,
                onSelect: r,
                children: (0, a.jsx)(eA.rX, {
                    label: m,
                    children: t.map((e) => {
                        let t = ec(e);
                        return (0, a.jsx)(
                            eA.iD,
                            {
                                id: `preview-target-${t}`,
                                group: "conjure-preview-target",
                                label: ed(e),
                                checked: t === ec(n),
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
                    className: eN.h,
                    "aria-haspopup": "menu",
                    "aria-expanded": i,
                    onClick: c,
                    children: [
                        (0, a.jsx)(j.E, {
                            tag: "span",
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: T.intl.string(R.default["N+VA1J"]),
                        }),
                        (0, a.jsx)(j.E, {
                            tag: "span",
                            variant: "body-sm/medium",
                            color: "none",
                            lineClamp: 1,
                            children: ed(n),
                        }),
                        (0, a.jsx)(eC.ChevronSmallDownIcon, { size: "xs", color: "currentColor" }),
                    ],
                }),
            });
        },
    });
}
var eE = n(27184),
    e_ = n(627363),
    eM = n(233470),
    eR = n(153207),
    eT = n(260498),
    eP = n(625180),
    eL = n(672929),
    e$ = n(111534),
    eD = n(754027),
    eq = n(174865),
    eF = n(753329),
    eO = n(457827),
    eG = n(540665),
    ez = n(722701),
    eU = n(962998),
    eB = n(826058),
    eK = n(50181),
    eH = n(719593),
    eV = n(890698),
    eW = n(95264),
    eX = n(616334),
    eQ = n(405433),
    eZ = n(811587);
function eY(e) {
    let { projectId: t, variant: l } = e,
        { canShare: r, firstShare: s } = (0, c.cf)(
            [eT.Ay, ez.A],
            () => {
                let e = eT.Ay.getProject(t),
                    n = ez.A.getPublishStatus(t)?.publishState,
                    l = null != e && (0, eT.PV)(e),
                    r = null != e && null != n && (l ? "nothing_built" !== n : (0, eZ.lE)(n));
                return { canShare: r, firstShare: r && l && "user" === e.install_scope };
            },
            [t],
        ),
        u = i.useRef(null);
    return r
        ? s
            ? (0, a.jsx)(m.$, {
                  size: "sm",
                  variant: l,
                  icon: eQ.ShareIcon,
                  text: T.intl.string(T.t.RDE0Sc),
                  onClick: () => {
                      var e;
                      return (
                          (e = { projectId: t }),
                          void (0, K.mM)(async () => {
                              let { default: t } = await Promise.all([
                                  n.e(943832),
                                  n.e(159957),
                                  n.e(441532),
                                  n.e(500704),
                                  n.e(801342),
                                  n.e(788064),
                                  n.e(970902),
                              ]).then(n.bind(n, 214645));
                              return (n) => (0, a.jsx)(t, { ...n, ...e });
                          })
                      );
                  },
              })
            : (0, a.jsx)(ek.Q, {
                  targetElementRef: u,
                  position: "bottom",
                  align: "right",
                  ignoreModalClicks: !0,
                  renderPopout: async () => {
                      let { default: e } = await Promise.all([
                          n.e(943832),
                          n.e(159957),
                          n.e(441532),
                          n.e(500704),
                          n.e(751977),
                      ]).then(n.bind(n, 159312));
                      return () => (0, a.jsx)(e, { projectId: t });
                  },
                  children: (e) => {
                      let { onClick: t } = e;
                      return (0, a.jsx)("div", {
                          ref: u,
                          children: (0, a.jsx)(m.$, {
                              size: "sm",
                              variant: l,
                              icon: eQ.ShareIcon,
                              text: T.intl.string(T.t.RDE0Sc),
                              onClick: t,
                          }),
                      });
                  },
              })
        : null;
}
var eJ = n(812771);
(n(743898), n(134528), n(947204));
var e0 = n(333007),
    e1 = n(621466),
    e2 = n(775121),
    e3 = n(989145),
    e4 = n(866665),
    e5 = n(81369),
    e7 = n(826745),
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
            takeRefs: A,
        } = (0, e9.FM)({ projectId: t, surface: "design", onUploadFile: h }),
        S = i.useRef(null),
        C = (m || j.length > 0) && w && !f,
        N = i.useCallback(() => {
            if (!C) return;
            let e = A();
            c(e.length > 0 ? e : void 0);
        }, [C, A, c]),
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
        [M, P] = i.useState(null);
    i.useLayoutEffect(() => {
        let e = _.current;
        if (null == e || "u" < typeof ResizeObserver) return;
        let t = new ResizeObserver(() => P({ height: e.offsetHeight }));
        return (t.observe(e), () => t.disconnect());
    }, []);
    let L = M?.height ?? 44,
        $ = l.left + 8,
        D = l.top + 8,
        q = Math.max(n.x, $),
        F = Math.min(Math.max("point" === g ? n.y : n.y + 32 + 4, D), Math.max(D, l.top + l.height - L - 8));
    return (0, a.jsxs)("div", {
        ref: _,
        className: o()(e8.M0, { [e8.ho]: I && !f, [e8.ET]: f }),
        style: { left: q, top: F },
        "data-testid": "conjure-design-compose-bar",
        children: [
            p
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)("input", {
                              ref: S,
                              type: "file",
                              multiple: !0,
                              className: e8.Fg,
                              tabIndex: -1,
                              "aria-hidden": !0,
                              onChange: (e) => {
                                  (b(Array.from(e.target.files ?? [])), (e.target.value = ""));
                              },
                          }),
                          (0, a.jsx)(e4.m, {
                              position: "bottom",
                              text: T.intl.string(R.default.lgvqSB),
                              ariaHidden: !0,
                              children: (0, a.jsx)("button", {
                                  type: "button",
                                  className: e8.tY,
                                  onClick: () => S.current?.click(),
                                  "aria-label": T.intl.string(R.default.lgvqSB),
                                  children: (0, a.jsx)(e5.FileUpIcon, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: e8.WW,
                                  }),
                              }),
                          }),
                      ],
                  })
                : null,
            (0, a.jsx)(e7.y, {
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
                ? (0, a.jsx)("div", {
                      className: e8.ZO,
                      children: j.map((e) => (0, a.jsx)(e9.Nl, { draft: e, onRemove: k }, e.localId)),
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
        [n, l] = i.useState(() => (t ? te(e()) : null));
    return (
        i.useEffect(() => {
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
    ta = n(408278),
    ti = n(48507),
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
function tb(e) {
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
function ty(e) {
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
function tk(e) {
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
let tw = I.ck.map((e) => tk(Math.min(16, e + 3))),
    tA = I.Cw.map((e) => tk(Math.min(16, e / 2.5))),
    tS = [R.default.jZtZUr, R.default.cTQdD0, R.default.J3ucEg],
    tC = {
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
            label: () => T.intl.string(R.default.oIZQbm),
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
            label: () => T.intl.string(R.default.ARNVr7),
        },
    };
function tN(e) {
    let { icon: t, label: n, pressed: l, onClick: r } = e;
    return (0, a.jsx)(e4.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)("span", {
            className: tv.z6,
            "data-active": l ? "" : void 0,
            children: (0, a.jsx)(tr.k, {
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
    return (0, a.jsx)(e4.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)(ta.K, {
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
        [s, u] = i.useState(!1),
        o = i.useCallback(() => u(!1), []),
        c = i.useCallback(() => u((e) => !e), []);
    return (0, a.jsxs)("div", {
        className: tv.pr,
        onMouseEnter: () => u(!0),
        onMouseLeave: o,
        children: [
            n(c),
            s
                ? (0, a.jsx)("div", {
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
    let { projectId: t, state: n, onExit: l, onUndo: r, onRedo: i, onClear: s } = e,
        { tool: u, lastShape: o, markerSize: c, eraserSize: d, history: m } = n,
        f = tx(n.colorId);
    function h(e) {
        return (0, I.rC)(t, e);
    }
    let g = tC[o],
        p = T.intl.string(R.default.hUm825),
        x = T.intl.string(R.default.n5IA3a),
        v = T.intl.string(R.default.r5dX6t),
        j = T.intl.string(R.default.VfYqDq);
    return (0, a.jsxs)("div", {
        className: tv.t$,
        children: [
            (0, a.jsx)("div", {
                className: tv.NT,
                children: (0, a.jsx)(tN, {
                    icon: tb,
                    label: T.intl.string(R.default.YtyKcM),
                    pressed: "pick" === u,
                    onClick: () => h("pick"),
                }),
            }),
            (0, a.jsxs)("div", {
                className: tv.H$,
                role: "toolbar",
                "aria-orientation": "vertical",
                "aria-label": T.intl.string(R.default["0IAEFf"]),
                children: [
                    (0, a.jsx)(tN, {
                        icon: tj,
                        label: T.intl.string(R.default.qTOXqb),
                        pressed: "move" === u,
                        onClick: () => h("move"),
                    }),
                    (0, a.jsx)(tN, {
                        icon: ti.LettersIcon,
                        label: T.intl.string(R.default.AGb8aK),
                        pressed: "text" === u,
                        onClick: () => h("text"),
                    }),
                    (0, a.jsx)(tE, {
                        label: p,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(tN, {
                                icon: ts.PaintbrushThinIcon,
                                label: p,
                                pressed: "marker" === u,
                                onClick: () => {
                                    (h("marker"), e());
                                },
                            }),
                        children: (e) =>
                            tw.map((n, l) =>
                                (0, a.jsx)(
                                    tN,
                                    {
                                        icon: n,
                                        label: T.intl.string(tS[l]),
                                        pressed: "marker" === u && c === l,
                                        onClick: () => {
                                            ((0, I.KZ)(t, l), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(tE, {
                        label: v,
                        direction: "row",
                        trigger: (e) =>
                            (0, a.jsx)(tN, {
                                icon: g.icon,
                                label: v,
                                pressed: "circle" === u || "square" === u,
                                onClick: () => {
                                    (h(o), e());
                                },
                            }),
                        children: (e) =>
                            Object.keys(tC).map((t) =>
                                (0, a.jsx)(
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
                    (0, a.jsx)(tE, {
                        label: x,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(tN, {
                                icon: ty,
                                label: x,
                                pressed: "eraser" === u,
                                onClick: () => {
                                    (h("eraser"), e());
                                },
                            }),
                        children: (e) =>
                            tA.map((n, l) =>
                                (0, a.jsx)(
                                    tN,
                                    {
                                        icon: n,
                                        label: T.intl.string(tS[l]),
                                        pressed: "eraser" === u && d === l,
                                        onClick: () => {
                                            ((0, I._A)(t, l), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(tE, {
                        label: j,
                        direction: "row",
                        trigger: (e) => (0, a.jsx)(tI, { icon: f.icon, label: j, onClick: e }),
                        children: (e) =>
                            tp.map((n) =>
                                (0, a.jsx)(
                                    tN,
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
                    (0, a.jsx)("div", { className: tv.Gz, role: "separator" }),
                    (0, a.jsx)(tI, {
                        icon: tu.UndoIcon,
                        label: T.intl.string((0, N.cX)() ? R.default["j/XmBQ"] : R.default.AeHDE6),
                        disabled: 0 === m.past.length,
                        onClick: r,
                    }),
                    (0, a.jsx)(tI, {
                        icon: to.RedoIcon,
                        label: T.intl.string((0, N.cX)() ? R.default.C7jhpn : R.default.pp16iB),
                        disabled: 0 === m.future.length,
                        onClick: i,
                    }),
                    (0, a.jsx)(tI, {
                        icon: tc.TrashIcon,
                        label: T.intl.string(R.default.wo5a0i),
                        disabled: 0 === m.present.length,
                        onClick: s,
                    }),
                    (0, a.jsx)("div", { className: tv.Gz, role: "separator" }),
                    (0, a.jsx)(tI, { icon: td.XLargeIcon, label: T.intl.string(R.default.tuQ5f3), onClick: l }),
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
    tD = { v: "move", p: "pick", t: "text", m: "marker", o: "circle", r: "square", e: "eraser" },
    tq = 1;
function tF(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r } = e,
        s = null != n && n === l ? t : null,
        u = (0, I.d5)(s),
        { active: o } = (0, G.rt)(s),
        c = (0, K.Rv)(),
        [d, m] = i.useState(!1);
    i.useEffect(() => {
        if (null != s)
            return () => {
                (0, I.K7)(s)?.active === !0 && (0, I.It)(s);
            };
    }, [s]);
    let f = u?.active === !0 && "pick" === u.tool;
    i.useEffect(() => {
        null != s && f && !o && (0, G.w4)(s);
    }, [s, f, o]);
    let h = i.useCallback(async () => {
        let e = r();
        if (null == e) return null;
        let t = await (0, eE.wn)(e);
        if (null != t) return t;
        function n() {
            m(!1);
        }
        (0, e0.flushSync)(() => m(!0));
        try {
            await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e())));
            let t = new Promise((e) => window.setTimeout(() => e(null), 5e3));
            return await Promise.race([(0, eE.fs)(e, n), t]);
        } finally {
            n();
        }
    }, [r]);
    return (i.useEffect(() => {
        if (null != s) return ((0, I.j5)(s, h), () => (0, I.j5)(s, null));
    }, [s, h]),
    null == s || null == u || !u.active || c)
        ? null
        : (0, a.jsx)(tO, { projectId: s, state: u, capturing: d, resolveIframe: r });
}
function tO(e) {
    let { projectId: t, state: n, capturing: l, resolveIframe: r } = e,
        s = tn(r),
        [u, o] = i.useState(null),
        [c, d] = i.useState(0),
        [m, f] = i.useState(null),
        [h, g] = i.useState(t$),
        p = i.useRef(null),
        x = i.useRef(null),
        v = i.useRef(null),
        j = i.useRef(null),
        b = i.useRef(null),
        { tool: y, history: k } = n,
        w = tx(n.colorId),
        A = "pick" !== y,
        S = (0, I.Qq)(n),
        C = "eraser" === y ? null : w.value,
        N = i.useMemo(
            () =>
                null == S
                    ? void 0
                    : (function (e, t) {
                          let n = Math.ceil(Math.max(e, 24) / 2),
                              l = 2 * n + 4;
                          if (l > 128) return "crosshair";
                          let r = l / 2,
                              a = (e, t) => `<circle cx="${r}" cy="${r}" r="${e}" ${t}/>`,
                              i = [
                                  `<svg xmlns="http://www.w3.org/2000/svg" width="${l}" height="${l}" viewBox="0 0 ${l} ${l}">`,
                                  a(n, `fill="none" stroke="${tR}" stroke-width="4"`),
                                  a(n, `fill="none" stroke="${tM}" stroke-width="2"`),
                                  a(3, `fill="${t ?? tM}" stroke="${tR}" stroke-width="1"`),
                                  "</svg>",
                              ].join("");
                          return `url("data:image/svg+xml,${encodeURIComponent(i)}") ${r} ${r}, crosshair`;
                      })(S, C),
            [S, C],
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
            i = null == a ? k.present : k.present.map((e) => (e.id === a.id ? (0, tl.y)(e, h.dx, h.dy) : e)),
            u = v.current;
        tP(r, null == u ? i : [...i, u], { width: s.width, height: s.height });
    }, [s, k.present, h]);
    i.useLayoutEffect(M, [M]);
    let P = i.useCallback(
            (e) =>
                null == s ? { x: 0, y: 0 } : { x: (e.clientX - s.left) / s.width, y: (e.clientY - s.top) / s.height },
            [s],
        ),
        L = i.useCallback(() => {
            let e = b.current;
            if (null == e || null == s) return;
            b.current = null;
            let n = {
                id: `mark-${tq++}`,
                kind: "text",
                color: w.value,
                size: 20 / s.width,
                at: e.at,
                text: e.value.trim(),
            };
            ((0, tl.oy)(n, s) && (0, I.tD)(t, { type: "commit", shape: n }), o(null), (0, I.QP)(t));
        }, [t, w, s]),
        $ = i.useCallback(() => {
            ((b.current = null), o(null), (0, I.QP)(t));
        }, [t]),
        D = i.useCallback(
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
                                id: `mark-${tq++}`,
                                kind: "erase",
                                width: I.Cw[n.eraserSize] / s.width,
                                points: [t],
                            }));
                        break;
                    case "marker":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (v.current = {
                                id: `mark-${tq++}`,
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
                                id: `mark-${tq++}`,
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
        q = i.useCallback(
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
        F = i.useCallback(() => {
            p.current?.removeAttribute("data-dragging");
            let e = j.current;
            if (null != e) {
                ((j.current = null), g(t$), (0, I.tD)(t, { type: "move", id: e.id, dx: h.dx, dy: h.dy }));
                return;
            }
            let n = v.current;
            ((v.current = null),
                null != n && null != s && (0, tl.oy)(n, s)
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
                    (0, e1.Cw)((0, e1.vq)(e.target, HTMLElement) ? e.target : null) ||
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
                let u = tD[s];
                null != u && (e.preventDefault(), (0, I.rC)(t, u));
            }
            return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
        }, [t]),
        i.useEffect(() => {
            if (A) return (e2.A.disable(), () => e2.A.enable());
        }, [A]),
        null == s)
    )
        return null;
    let K = Math.max(8, s.left - c - 8),
        H = null == E ? null : (0, tl.k_)(null == j.current ? E : (0, tl.y)(E, h.dx, h.dy), s);
    return (0, e0.createPortal)(
        (0, a.jsxs)("div", {
            children: [
                (0, a.jsx)("div", {
                    className: tv.qe,
                    style: { left: s.left, top: s.top, width: s.width, height: s.height },
                    "aria-hidden": !0,
                }),
                (0, a.jsxs)("div", {
                    className: tv.Pw,
                    style: { left: s.left, top: s.top, width: s.width, height: s.height },
                    "data-testid": "conjure-edit-ink",
                    children: [
                        (0, a.jsx)("canvas", {
                            ref: p,
                            className: tv.Ji,
                            "data-tool": y,
                            "data-interactive": A && !l ? "" : void 0,
                            "aria-label": T.intl.string(R.default["qlgN+X"]),
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
                                  className: tv.r1,
                                  style: { left: H.x, top: H.y, width: H.width, height: H.height },
                                  "aria-hidden": !0,
                                  children: [
                                      (0, a.jsx)("span", { className: tv.p$, "data-corner": "nw" }),
                                      (0, a.jsx)("span", { className: tv.p$, "data-corner": "ne" }),
                                      (0, a.jsx)("span", { className: tv.p$, "data-corner": "sw" }),
                                      (0, a.jsx)("span", { className: tv.p$, "data-corner": "se" }),
                                  ],
                              }),
                    ],
                }),
                null == u
                    ? null
                    : (0, a.jsx)(e6, {
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
                (0, a.jsx)("div", {
                    ref: x,
                    className: tv.ej,
                    style: { left: K, top: s.top },
                    "data-conjure-edit-rail": "",
                    children: (0, a.jsx)(t_, { projectId: t, state: n, onExit: O, onUndo: G, onRedo: z, onClear: U }),
                }),
            ],
        }),
        document.body,
    );
}
var tG = n(308081),
    tz = n(516521),
    tU = n(683071),
    tB = n(789645),
    tK = n(65593),
    tH = n(218394),
    tV = n(115982),
    tW = n(886540);
function tX(e) {
    return !(0, tW.BL)(e) && !0 !== e.stopRequested;
}
var tQ = n(104317),
    tZ = n(939249),
    tY = n(643278),
    tJ = n(566424),
    t0 = n(683063),
    t1 = n(140735),
    t2 = n(320448),
    t3 = n(138212);
function t4(e) {
    let { title: t, trailing: n, children: l, className: r, headerClassName: i, ...s } = e;
    return (0, a.jsxs)("section", {
        className: o()(t3.Nr, r),
        ...s,
        children: [
            (0, a.jsxs)("header", {
                className: o()(t3.wx, null != n && t3.o5, i),
                children: [
                    (0, a.jsx)(j.E, { tag: "span", variant: "body-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var t5 = n(148590);
function t7(e) {
    let { children: t } = e;
    return (0, a.jsx)(j.E, { variant: "body-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function t9(e) {
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
        j = h ? eC.ChevronSmallDownIcon : t2.ChevronSmallRightIcon,
        b = null != n || l;
    return (0, a.jsxs)(t4, {
        ...m,
        title: t,
        trailing: b
            ? (0, a.jsxs)("span", {
                  className: t5.ZY,
                  children: [
                      n,
                      l
                          ? (0, a.jsx)(tZ.D, {
                                className: t5.L$,
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
        headerClassName: h ? void 0 : t5.RG,
        "data-superseded": l ? "true" : void 0,
        children: [c, (0, a.jsx)("div", { id: f, className: o()(t5.rf, u), hidden: !h, children: d })],
    });
}
n(321073);
var t8 = n(883646);
let t6 = [];
function ne(e) {
    let { status: t } = e;
    return (0, a.jsxs)("span", {
        className: o()(t8.xL, {
            [t8.Vb]: "in_progress" === t,
            [t8.cT]: "completed" === t,
            [t8.GZ]: "unfinished" === t,
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
            (0, a.jsx)(b.y, {
                type: b.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: t8.Qd,
                itemClassName: t8.xB,
                "aria-hidden": !0,
            }),
            (0, a.jsx)("svg", {
                className: t8.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, a.jsx)("path", { className: t8.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function nt(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : t6), [n, t]),
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
        className: t8.X6,
        "data-shown": n && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: s } = n;
                return (0, a.jsx)(
                    t0.u,
                    {
                        asset: (0, a.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: t8.MA,
                            "data-leaving": r.has(t) ? void 0 : "true",
                            children: (0, a.jsx)(s, { size: 16, alt: l, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            p > 0
                ? (0, a.jsx)(j.E, {
                      tag: "span",
                      variant: "body-xs/medium",
                      color: "text-muted",
                      className: t8.qA,
                      children: `+${p}`,
                  })
                : null,
        ],
    });
}
function nn(e) {
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
            ((t = (r ?? t6).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
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
                    })(r ?? t6),
                [t],
            ));
    return (0, a.jsxs)("ul", {
        className: t8.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, a.jsxs)(
                    "li",
                    {
                        className: o()(t8.AS, { [t8.J1]: "completed" === n }),
                        "data-arriving": u.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(ne, { status: n }),
                            (0, a.jsx)(j.E, {
                                variant: "body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: t8.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", {
                                    className: t8.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, a.jsx)(nt, { agents: c.get(e.id) ?? t6, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, a.jsxs)("li", {
                      className: t8.AS,
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(ne, { status: "pending" }),
                          (0, a.jsx)(j.E, {
                              variant: "body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: t8.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: t8.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function nl(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: r = !0, live: i = !0, superseded: s = !1 } = e,
        { completed: u, total: o } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === o) return null;
    let c = T.intl.formatToPlainString(R.default["P/I+JW"], { completed: u, total: o }),
        d = T.intl.formatToPlainString(R.default["7tzwKB"], { completed: u, total: o });
    return (0, a.jsx)(t9, {
        title: T.intl.string(R.default.RtzECX),
        meta: (0, a.jsx)(t7, { children: c }),
        superseded: s,
        showLabel: T.intl.string(R.default.RKyN9q),
        hideLabel: T.intl.string(R.default.xydHoj),
        className: t8.Nr,
        bodyClassName: t8.rf,
        beforeBody: r && !s ? (0, a.jsx)(t1.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, a.jsx)(nn, { todos: t, provisional: n, agents: l, live: i }),
    });
}
var nr = n(308665),
    na = n(59678),
    ni = n(903847);
function ns(e) {
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
        [A, S] = i.useState(!1),
        [C, N] = i.useState(v);
    (C !== v && (N(v), v ? w(!0) : S(!1)),
        i.useEffect(() => {
            if (v || !k) return;
            let e = setTimeout(() => w(!1), 150);
            return () => clearTimeout(e);
        }, [v, k]),
        i.useEffect(() => {
            if (!k || !v) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => S(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [k, v]));
    let I = null != l && l.length > 0,
        E = i.useCallback(() => j((e) => !e), []);
    return h
        ? (0, a.jsxs)("div", {
              className: ni.qd,
              "data-placement": m,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: o()(ni.vK, { [ni.ho]: p && d, [ni.ET]: !d }),
                      children: [
                          null == c
                              ? (0, a.jsx)("ol", {
                                    className: o()(ni.Rk, na.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(tJ.A, {
                                        glyph: (0, a.jsx)(nr.A, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(tZ.D, {
                                    className: ni.pZ,
                                    onClick: c,
                                    "aria-label": T.intl.string(R.default.hEK6qu),
                                    children: (0, a.jsx)("ol", {
                                        className: o()(ni.Rk, na.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(tJ.A, {
                                            glyph: (0, a.jsx)(nr.A, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          I
                              ? (0, a.jsx)(e4.m, {
                                    text: T.intl.string(R.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, a.jsx)(tZ.D, {
                                        className: ni.BO,
                                        onClick: E,
                                        "aria-expanded": v,
                                        "aria-label": T.intl.string(R.default.RtzECX),
                                        children: (0, a.jsx)(tY.ClipboardListIcon, {
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
                            className: o()(ni.vB, { [ni.pg]: v && A, [ni.ui]: !v }),
                            children: (0, a.jsx)(nl, {
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
var nu = n(839214),
    no = n(78564);
let nc = new Map(),
    nd = (0, nu.D)(() => ({ byMessageKey: {} }));
function nm(e, t) {
    let { [e]: n, ...l } = nd.getState().byMessageKey;
    nd.setState({ byMessageKey: null == t ? l : { ...l, [e]: t } });
}
var nf = n(195880),
    nh = n(287111),
    ng = n(16619);
function np(e) {
    let t = (0, ng.qh)("ConjureClarificationProjectPicker");
    return i.useMemo(
        () =>
            t
                .filter((t) => t.projectId !== e)
                .map((e) => ({ projectId: e.projectId, name: e.name, serverName: e.guildName })),
        [t, e],
    );
}
var nx = n(736553),
    nv = n(382541),
    nj = n(890497),
    nb = n(103557),
    ny = n(29073),
    nk = n(590077);
function nw(e) {
    let { projectId: t, request: n, canSend: l, onDismiss: r, onSent: s } = e,
        u = (function (e, t, n, l, r) {
            let a = np(e),
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
                S = d.trim(),
                C = n && !f && (w.length > 0 ? "" !== S : o.length > 0),
                N = i.useCallback(
                    (t) => {
                        j.current ||
                            ((j.current = !0),
                            h(!0),
                            null != r
                                ? r(t.map((e) => e.target))
                                : (0, nh.RQ)(
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
                I = i.useCallback(() => {
                    let t, n;
                    if (!C) return;
                    if (0 === w.length) return void N(o);
                    (h(!0), p(!1));
                    let l =
                        ((t = eT.Ay.getProject(e)?.name ?? e),
                        (n = T.intl.formatToPlainString(R.default.ScoZLp, { name: t, projectId: e })),
                        `${S}

${n}`);
                    Promise.allSettled(
                        w.map((e) => {
                            let t = x.current.get(e.projectId);
                            return (
                                t?.content !== l &&
                                    ((t = { content: l, nonce: (0, nf.m)() }), x.current.set(e.projectId, t)),
                                (async function (e, t, n) {
                                    let l,
                                        { ticket: r, baseUrl: a } = await (0, nv.dv)(e),
                                        i = new nx.u();
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
                            n = [...o, ...t.map((e) => ({ target: e, prompt: S }))];
                        if (t.length === w.length || v.current) {
                            n.length > 0 && N(n);
                            return;
                        }
                        (c(n), u(w.filter((e) => !t.includes(e)).map((e) => e.projectId)), h(!1), p(!0));
                    });
                }, [C, N, o, e, w, S]),
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
                canSubmit: C,
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
        d = `${n.id}-heading`;
    return (0, a.jsxs)("section", {
        className: o()(ny.nd, ny.jx),
        "aria-labelledby": d,
        "data-conjure-app-build-request": n.id,
        children: [
            (0, a.jsxs)("div", {
                className: ny.wx,
                children: [
                    (0, a.jsx)(j.E, {
                        tag: "span",
                        id: d,
                        variant: "body-sm/medium",
                        color: "text-subtle",
                        className: ny.TK,
                        children: n.summary,
                    }),
                    (0, a.jsx)(ta.K, {
                        icon: tB.XSmallIcon,
                        size: "sm",
                        variant: "icon-only",
                        onClick: u.dismiss,
                        "aria-label": T.intl.string(R.default.KQUuAZ),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: nk.r,
                children: [
                    0 === c.length
                        ? (0, a.jsx)(j.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: T.intl.string(R.default.TbbzW5),
                          })
                        : (0, a.jsx)(nj.Z, {
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
                    (0, a.jsx)(nb.f, {
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
            (0, a.jsx)("div", {
                className: ny.qr,
                children: (0, a.jsx)("div", {
                    className: ny.zt,
                    children: (0, a.jsx)(m.$, {
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
var nA = n(47167),
    nS = n(734057),
    nC = n(994500),
    nN = n(287809),
    nI = n(360047);
function nE(e, t, n) {
    let l = n[0]?.id;
    return null == l
        ? null
        : !0 === t.link
          ? { target: l, caller: e, key: `${l}:${e}` }
          : "incoming" === t.link
            ? { target: e, caller: l, key: `${e}:${l}` }
            : null;
}
function n_(e) {
    return 0 === e.options.length && null == e.input;
}
function nM(e) {
    return !1 !== e.allow_custom && !0 !== e.link && "incoming" !== e.link;
}
function nR(e, t, n) {
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
function nT(e, t) {
    return e.questions
        .map((e, n) => ({ question: e, index: n, answer: t[e.id] }))
        .filter((e) => null != e.answer && "" !== e.answer.text.trim())
        .map((e) => {
            let { question: t, index: n, answer: l } = e;
            return `${n + 1}. ${t.question} \u{2192} ${l.text.trim()}`;
        })
        .join("\n");
}
function nP(e, t, n, l) {
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
let nL = {
    [ej.rbe.GUILD_TEXT]: "text",
    [ej.rbe.GUILD_VOICE]: "voice",
    [ej.rbe.GUILD_ANNOUNCEMENT]: "announcement",
    [ej.rbe.GUILD_STAGE_VOICE]: "stage",
    [ej.rbe.GUILD_FORUM]: "forum",
    [ej.rbe.GUILD_MEDIA]: "media",
};
function n$(e, t, n, l) {
    return t.slice(0, 10).map((t) => ({
        id: t,
        name: n(t) ?? l.find((e) => e.id === t)?.name ?? t,
        ...(function (e, t) {
            if ("channel" === e) {
                var n;
                let l = null == (n = nS.A.getChannel(t)?.type) ? void 0 : nL[n];
                return { kind: e, ...(null == l ? {} : { channel_type: l }) };
            }
            if ("user" === e) {
                let n = nN.default.getUser(t)?.username;
                return { kind: e, ...(null == n ? {} : { username: n }) };
            }
            return { kind: e };
        })(e, t),
    }));
}
let nD = { channel: "#", role: "@", user: "@", project: "", server: "" },
    nq = {
        channel: [R.default["9+dfPT"], R.default.pGSJqE],
        role: [R.default["2VkCoD"], R.default.c8YlX8],
        user: [R.default.GZIAxl, R.default["4bptbQ"]],
        project: [R.default.twlOb6, R.default.twlOb6],
        server: [R.default.ZWXDeI, R.default.ZWXDeI],
    };
function nF(e, t) {
    return T.intl.string(nq[e][+!!t]);
}
var nO = n(658675),
    nG = n(123292),
    nz = n(900797),
    nU = n(331322),
    nB = n(771871),
    nK = n(700915),
    nH = n(985965),
    nV = n(831819);
function nW(e) {
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
            className: nV.Nz,
            children: (0, a.jsxs)(nU.B, {
                gap: 4,
                children: [
                    (0, a.jsx)(nK.A, {
                        caller: t.sides.caller,
                        target: t.sides.target,
                        callerProject: t.callerProject,
                        targetProject: t.targetProject,
                        flow: t.flow,
                    }),
                    null != t.purpose ? (0, a.jsx)(nH.A, { purpose: t.purpose }) : null,
                    null != o
                        ? (0, a.jsxs)("div", {
                              className: nV.em,
                              children: [
                                  (0, a.jsx)(j.E, { variant: "body-sm/normal", color: "text-subtle", children: o }),
                                  d && !r
                                      ? (0, a.jsxs)(a.Fragment, {
                                            children: [
                                                (0, a.jsx)(j.E, {
                                                    variant: "body-sm/normal",
                                                    color: "text-muted",
                                                    "aria-hidden": !0,
                                                    children: "\xb7",
                                                }),
                                                (0, a.jsx)(nG.Q, {
                                                    text: T.intl.string(R.default.I5F6YX),
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
                              className: nV.zM,
                              children: [
                                  (0, a.jsx)("span", { id: l, hidden: !0, children: t.aria }),
                                  (0, a.jsx)(nB.z, {
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
var nX = n(344587),
    nQ = n(155078);
function nZ(e) {
    return !0 === e.upload || e.options.some((e) => null != e.image);
}
let nY = [];
function nJ(e) {
    return !0 !== e.upload
        ? null
        : 0 === e.options.length
          ? T.intl.string(R.default.ZZ641e)
          : T.intl.string(1 === e.options.length ? R.default["2g3gk9"] : R.default.dkzChE);
}
var n0 = n(762026);
function n1(e) {
    return e?.kind === "image" || (e?.kind === "multi" && null != e.attachment);
}
function n2(e, t) {
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
var n3 = n(682163),
    n4 = n(300344),
    n5 = n(614733),
    n7 = n(904363),
    n9 = n(950902),
    n8 = n(136722),
    n6 = n(778858),
    le = n(808728),
    lt = n(696451),
    ln = n(71393),
    ll = n(488926),
    lr = n(426035),
    la = n(246338);
let li = n8.kg(ej.xBc.VIEW_CHANNEL, ej.xBc.SEND_MESSAGES);
var ls = n(384017);
function lu(e) {
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
        return n$(n.input ?? "channel", e, (e) => o.find((t) => t.value === e)?.label, l);
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
        className: ls.YX,
        "data-conjure-clarification-picker": n.input,
        children: f
            ? (0, a.jsx)(nj.Z, {
                  ...p,
                  selectionMode: "multiple",
                  wrapTags: !0,
                  value: h,
                  onSelectionChange: (e) => i(g(e), t),
              })
            : (0, a.jsx)(nj.Z, {
                  ...p,
                  selectionMode: "single",
                  clearable: !0,
                  value: h[0] ?? null,
                  onSelectionChange: (e) => i(null == e ? [] : g([e]), t),
              }),
    });
}
function lo(e) {
    let { projectId: t, guildId: n, fallback: l, ...r } = e,
        s = (0, n4.A)(n, r.question.channel_filter);
    return (!(function (e) {
        let t,
            n,
            { projectId: l, guildId: r, question: a, value: s, disabled: u, onChange: o } = e,
            d =
                ((t = null != r && "channel" === a.input && "safety_alerts_channel" === a.default),
                (n = (0, c.bG)(
                    [eT.Ay],
                    () => {
                        let e = t ? eT.Ay.getProject(l) : null;
                        return null == e ? null : (0, lr.ug)(e);
                    },
                    [l, t],
                )),
                i.useEffect(() => {
                    null == r || null == n || lt.Ay.isMember(r, n) || n6.A.requestMembersById(r, [n]);
                }, [r, n]),
                (0, c.bG)(
                    [le.A, lt.Ay, ln.A],
                    () => {
                        if (!t || null == r) return null;
                        let e = ln.A.getGuild(r)?.safetyAlertsChannelId,
                            l = le.A.getChannels(r);
                        if (null == e || null == l) return null;
                        let i = (0, la.Lp)(l, a.channel_filter).find((t) => t.id === e);
                        if (null == i) return null;
                        if (null != n && lt.Ay.isMember(r, n))
                            return ll.$3({ permission: li, user: n, context: i }) ? i : null;
                        let s = i.permissionOverwrites[r]?.deny ?? n8.BY;
                        return n8.X8(s, li) ? null : i;
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
                            o(((e = []), n$("channel", [d.id], () => (0, nA.m1)(d, nN.default, nC.A), e)), r));
                    }
                    return;
                }
                1 !== s.length || s[0].id !== m.current ? (f.current = !0) : null == d && ((f.current = !0), o([], r));
            }
        }, [d, u, r, o, s]);
    })({ projectId: t, guildId: n, ...r }),
    null == s)
        ? l
        : (0, a.jsx)(lu, { ...r, guildId: n, options: s, placeholder: nF("channel", !0 === r.question.multi_select) });
}
function lc(e) {
    let { guildId: t, ...n } = e,
        l = (0, n7.A)(t);
    return (0, a.jsx)(lu, { ...n, guildId: t, options: l, placeholder: nF("role", !0 === n.question.multi_select) });
}
function ld(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: i } = (0, n5.A)(t);
    return (0, a.jsx)(lu, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: r,
        matchSorterOptions: i,
        placeholder: nF("user", !0 === n.question.multi_select),
    });
}
function lm(e) {
    let { projectId: t, fallback: n, ...l } = e,
        r = np(t),
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
    return 0 === s.length ? n : (0, a.jsx)(lu, { ...l, options: s, placeholder: nF("project", !1) });
}
function lf(e) {
    let t = e.target;
    (0, e1.vq)(t, HTMLInputElement) && requestAnimationFrame(() => t.select());
}
function lh(e) {
    let { fallback: t, ...n } = e,
        l = (0, ng.z9)("ConjureClarificationEntityPicker"),
        r = i.useMemo(
            () =>
                l.map((e) => ({
                    id: `conjure-target-${e.id}`,
                    value: e.id,
                    label: e.name,
                    leading: (0, a.jsx)(n3.Ay, { guild: e, size: n3.Ay.Sizes.MINI, active: !0 }),
                })),
            [l],
        );
    return 0 === r.length
        ? t
        : (0, a.jsx)("div", {
              onFocus: lf,
              onMouseUp: lf,
              children: (0, a.jsx)(lu, { ...n, options: r, placeholder: nF("server", !1) }),
          });
}
function lg(e) {
    let { projectId: t, fallback: n = null, ...l } = e,
        r = (0, n9.Tj)(t, !0);
    if ("project" === l.question.input) return (0, a.jsx)(lm, { projectId: t, fallback: n, ...l }, l.question.id);
    if ("server" === l.question.input) return (0, a.jsx)(lh, { fallback: n, ...l }, l.question.id);
    if (null == r) return n;
    switch (l.question.input) {
        case "channel":
            return (0, a.jsx)(lo, { projectId: t, guildId: r, fallback: n, ...l }, l.question.id);
        case "role":
            return (0, a.jsx)(lc, { guildId: r, ...l }, l.question.id);
        case "user":
            return (0, a.jsx)(ld, { guildId: r, ...l }, l.question.id);
        default:
            return n;
    }
}
var lp = n(87221),
    lx = n(26430),
    lv = n(750943),
    lj = n(173936),
    lb = n(95477),
    ly = n(256905),
    lk = n(490707),
    lw = n(907702);
function lA(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: s, gone: u, handleError: c } = (0, lk._)(t, n),
        [d, m] = i.useState(null),
        f = null != s && d === s;
    return u
        ? (0, a.jsxs)("span", {
              className: o()(lw.Gt, lw.b6),
              children: [
                  (0, a.jsx)(lp.ImageWarningIcon, { size: "md", color: "currentColor" }),
                  (0, a.jsx)(j.E, {
                      tag: "span",
                      variant: "body-xs/medium",
                      color: "text-muted",
                      children: T.intl.string(R.default.lhgD88),
                  }),
              ],
          })
        : (0, a.jsx)("span", {
              className: o()(lw.Gt, { [lw.iP]: !f }),
              children:
                  null != s
                      ? (0, a.jsx)("img", {
                            src: s,
                            alt: l,
                            className: lw.Sl,
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
function lS(e) {
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
        x = T.intl.formatToPlainString(R.default.JGjZMs, { answer: r.label });
    return (0, a.jsxs)("div", {
        className: o()(lw.Vs, { [lw.Q9]: s, [lw.RX]: u }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, a.jsxs)(tZ.D, {
                className: o()(lw.Up, { [lw.XF]: null != r.image }),
                "data-conjure-image-option-pick": !0,
                onClick: u ? (null != r.image ? () => f(r) : void 0) : () => m(r),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), h(r, t));
                },
                role: i ? "checkbox" : "radio",
                "aria-checked": s,
                "aria-label": T.intl.formatToPlainString(R.default.AQbxhf, { answer: r.label }),
                "aria-disabled": u,
                tabIndex: c && d ? 0 : -1,
                children: [
                    (0, a.jsxs)("span", {
                        className: lw.$_,
                        children: [
                            null != r.image
                                ? (0, a.jsx)(lA, {
                                      projectId: l,
                                      attachmentId: r.image.attachment_id,
                                      alt: r.label,
                                      onMeasured: g,
                                  })
                                : (0, a.jsx)("span", { className: lw.Gt }),
                            (0, a.jsx)("span", {
                                className: lw.q3,
                                "aria-hidden": !0,
                                children: i
                                    ? (0, a.jsx)(nO.P, { checked: s, disabled: u })
                                    : (0, a.jsx)(nB.T, { checked: s, disabled: u }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(j.E, {
                        tag: "span",
                        variant: "body-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: lw.pG,
                        children:
                            "" !== (n = null != (t = r.image?.page_url ?? r.image?.url) ? (0, nQ.E)(t) : "")
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
                      className: lw.B4,
                      children: (0, a.jsx)(e4.m, {
                          text: T.intl.string(R.default.HQEXJM),
                          children: (0, a.jsx)(ta.K, {
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
                  ? (0, a.jsx)("span", {
                        className: lw.B4,
                        children: (0, a.jsx)(e4.m, {
                            text: T.intl.string(R.default["4/eeDD"]),
                            children: (0, a.jsx)(ta.K, {
                                icon: lx.MaximizeIcon,
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
function lC(e) {
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
                      label: T.intl.string(R.default.SUdqCQ),
                      image: { attachment_id: e.attachment.id },
                  });
        }, [c.image]),
        b = i.useCallback(
            (e) => {
                let n = (null == j ? m : [...m, j]).flatMap((e) => (null != e.image ? [{ ...e, image: e.image }] : [])),
                    l = n.findIndex((t) => t.id === e.id);
                l < 0 ||
                    Promise.all(n.map((e) => (0, e3.PK)(t, e.image.attachment_id))).then(
                        (e) => {
                            (0, ly.R)({
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
        className: lw.Nz,
        "data-conjure-image-options": !0,
        children: [
            0 === m.length && null == j
                ? null
                : (0, a.jsxs)("div", {
                      ref: h,
                      className: o()(lw.fF, "gallery" === f ? lw.nV : lw.nM, { [lw.m3]: d }),
                      role: d ? "group" : "radiogroup",
                      "aria-labelledby": `${n.id}-label`,
                      "data-layout": f,
                      "data-count": m.length,
                      children: [
                          m.map((e) =>
                              (0, a.jsx)(
                                  lS,
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
                                    lS,
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
            (0, a.jsx)(lN, {
                projectId: t,
                own: c,
                disabled: r,
                reachable: s,
                uploadText: T.intl.string(/\bicons?\b/i.test(n.question) ? R.default.qU4WN6 : R.default.cbMDDB),
            }),
        ],
    });
}
function lN(e) {
    let { projectId: t, own: n, disabled: l, reachable: r, uploadText: s } = e,
        u = i.useRef(null),
        [o, c] = i.useState(!1),
        [d, f] = i.useState(""),
        h = r ? 0 : -1,
        g = n.busy;
    function p() {
        "" !== d.trim() &&
            null == g &&
            n.onLink(d.trim()).then(
                (e) => {
                    e && (c(!1), f(""));
                },
                () => void 0,
            );
    }
    return (0, a.jsxs)("div", {
        className: lw.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, a.jsxs)("div", {
                className: lw.QJ,
                children: [
                    (0, a.jsx)(m.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: lv.ImagePlusIcon,
                        text: s,
                        loading: "upload" === g,
                        disabled: l || "link" === g,
                        onClick: () => u.current?.click(),
                        tabIndex: h,
                        "data-conjure-own-image-upload": !0,
                    }),
                    o
                        ? null
                        : (0, a.jsx)(m.$, {
                              variant: "secondary",
                              size: "sm",
                              icon: lj.LinkIcon,
                              text: T.intl.string(R.default["1TgOO+"]),
                              disabled: l || "upload" === g,
                              onClick: () => c(!0),
                              tabIndex: h,
                              "data-conjure-own-image-link": !0,
                          }),
                    (0, a.jsx)("input", {
                        ref: u,
                        type: "file",
                        accept: "image/png,image/jpeg,image/gif,image/webp",
                        className: lw.Fg,
                        tabIndex: -1,
                        "aria-hidden": !0,
                        onChange: (e) => {
                            let l = e.currentTarget.files?.[0];
                            ((e.currentTarget.value = ""), null != l && n.onUpload((0, nh.rh)(t, l, l.name, l.type)));
                        },
                    }),
                ],
            }),
            o
                ? (0, a.jsxs)("div", {
                      className: lw.vG,
                      children: [
                          (0, a.jsx)("div", {
                              className: lw.Hs,
                              children: (0, a.jsx)(lb.k, {
                                  label: T.intl.string(R.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: T.intl.string(R.default.AVhvn8),
                                  value: d,
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
                              className: lw.gd,
                              children: [
                                  (0, a.jsx)(m.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: T.intl.string(R.default.FbRbeM),
                                      loading: "link" === g,
                                      disabled: l || "" === d.trim(),
                                      onClick: p,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, a.jsx)(nG.Q, {
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
                ? (0, a.jsx)(j.E, {
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
function lI(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: u } = e,
        c = i.useId(),
        d = !0 === t.recommended,
        m = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(tZ.D, {
        className: o()(ls.uK, { [ls.ue]: l, [ls.h4]: !0 === u }),
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
                ? (0, a.jsx)("span", { className: ls.dy, children: (0, a.jsx)(nO.P, { checked: u, disabled: l }) })
                : (0, a.jsx)("span", { className: ls.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: ls.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: ls.l8,
                        children: (0, a.jsx)(j.E, {
                            tag: "span",
                            variant: "body-md/medium",
                            color: "none",
                            className: ls.ed,
                            children: t.label,
                        }),
                    }),
                    m
                        ? (0, a.jsx)(j.E, {
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
                ? (0, a.jsx)(j.E, {
                      tag: "span",
                      variant: "body-xs/semibold",
                      color: "text-muted",
                      className: ls.rM,
                      children: T.intl.string(R.default.zku6r1),
                  })
                : null,
        ],
    });
}
function lE(e) {
    let { projectId: t, question: n, selected: l, disabled: r, reachable: i = !0, onPick: s, own: u } = e,
        o = !0 === n.multi_select;
    return nZ(n)
        ? (0, a.jsx)(lC, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: i, onPick: s, own: u })
        : (0, a.jsx)(a.Fragment, {
              children: n.options.map((e, t) =>
                  (0, a.jsx)(
                      lI,
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
let l_ = [],
    lM = [];
function lR(e) {
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
        m = !0 === n.multi_select ? T.intl.string(R.default.tE8qbz) : nJ(n);
    return (0, a.jsxs)("div", {
        className: o()(ls.Ge, ls.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            null == m
                ? null
                : (0, a.jsx)(j.E, {
                      tag: "div",
                      variant: "body-xs/normal",
                      color: "text-muted",
                      className: ls.aK,
                      children: m,
                  }),
            (0, a.jsx)(lE, {
                projectId: t,
                question: n,
                selected: r,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: n2(u, c),
            }),
            !1 === n.allow_custom || (!0 !== n.upload && nZ(n))
                ? null
                : (0, a.jsxs)("div", {
                      className: ls.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: ls.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(h.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == d ? null : (0, a.jsx)("span", { className: o()(ls.Pu, ls.es), children: d }),
                      ],
                  }),
            !0 === n.upload
                ? (0, a.jsx)("div", {
                      className: ls.$0,
                      children: (0, a.jsx)(nG.Q, {
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
function lT(e) {
    var t;
    let {
            projectId: n,
            clarification: l,
            onSubmit: r,
            onDismiss: s,
            submitText: u,
            onBack: d,
            backText: f,
            hideSubmit: g = !1,
            headingLines: p = 5,
        } = e,
        [x, v] = i.useState({}),
        [b, y] = i.useState({}),
        [k, w] = i.useState({}),
        [A, S] = i.useState(() =>
            Object.fromEntries(
                l.questions.flatMap((e) => (null != e.default_entities ? [[e.id, e.default_entities]] : [])),
            ),
        ),
        [C, N] = i.useState({}),
        { builds: I, linkFor: E } = (function (e, t, n) {
            let l = i.useMemo(
                    () =>
                        Object.fromEntries(
                            t.questions.flatMap((t) => {
                                let l = nE(e, t, n[t.id] ?? []);
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
                                let l = await (0, nI.LW)(e, t);
                                a((e) => ({ ...e, [n]: l }));
                            } catch {}
                        })(e.target, e.caller, e.key));
            }, [l]);
            let d = (0, c.cf)(
                [eT.Ay],
                () =>
                    Object.fromEntries(
                        Object.values(l).flatMap((e) => [e.target, e.caller].map((e) => [e, eT.Ay.getProject(e)])),
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
                                callerHasPreview: null == h || (0, et._7)(h),
                                callerLiveOnVibeyard: !1,
                            },
                            p = s[i.key] ?? o.build,
                            x = t.questions.find((e) => e.id === a);
                        return {
                            sides: g,
                            callerProject: h ?? null,
                            targetProject: d[i.target] ?? null,
                            flow: x?.link_flow ?? o.flow,
                            purpose: (0, n0.xP)(x?.link_purpose ?? o.purpose),
                            data: (0, n0.Bw)(g, p),
                            value: p,
                            aria: (0, n0.sr)(g),
                            onChange: (e) => u((t) => ({ ...t, [i.key]: e })),
                        };
                    },
                    [s, t, n, l, e, d, r],
                ),
            };
        })(n, l, A),
        [_, M] = i.useState(!1),
        [P, L] = i.useState(0),
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
        Z = Math.min(P, Q - 1),
        Y = l.questions[Z],
        [J, ee] = i.useState({ id: Y.id, expanded: !1 }),
        en = J.id === Y.id && J.expanded,
        [el, er] = i.useState(null),
        ea = b[Y.id] ?? "",
        ei = !0 === Y.multi_select,
        es = nZ(Y),
        eu = ei ? T.intl.string(R.default.tE8qbz) : nJ(Y),
        eo = ei
            ? (k[Y.id] ?? l_)
            : ((t = x[Y.id]), t?.kind === "option" ? [t.optionId] : t?.kind === "multi" ? t.optionIds : nY),
        ec = (function (e, t, n) {
            let [l, r] = i.useState({}),
                [a, s] = i.useState({}),
                [u, o] = i.useState({}),
                c = T.intl.string(R.default.wTsP5l),
                d = i.useCallback((e) => l[e] ?? null, [l]),
                m = i.useCallback(
                    (e) => null != l[e.id] && (!0 === e.multi_select ? !0 === u[e.id] : n1(t[e.id])),
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
                        if (u) return n2(h, m(i));
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
                            selected: m(i),
                            busy: a[d]?.busy ?? null,
                            error: a[d]?.error ?? null,
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
                                        if (f || !n1(e[d])) return e;
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
                    [c, t, l, e, m, n, a],
                );
            return { imageFor: d, selectedFor: m, multiPartFor: f, controlsFor: h };
        })(n, x, v),
        ed = ec.imageFor(Y.id),
        em = ec.selectedFor(Y),
        { text: ef, phase: eh } = (0, nX.Q)(Y.question),
        eg = ef === Y.question,
        ep = eg && el?.id === Y.id && el.truncated;
    i.useLayoutEffect(() => {
        if (null == K || en || !eg) return;
        function e() {
            if (null == K) return;
            let e = K.scrollHeight > K.clientHeight + 1;
            er((t) => (t?.id === Y.id && t.truncated === e ? t : { id: Y.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(K), () => t.disconnect());
    }, [eg, K, Y.id, en]);
    let ex = T.intl.string(en ? T.t.iTcuma : T.t.dcl9MQ),
        ev = i.useCallback(
            (e) => {
                null != r &&
                    (function (e, t, n, l, r) {
                        let a = nT(t, n);
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
                                              let r = nE(e, t, [n]);
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
                                              return (0, nI.Ol)(t, n, l);
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
                let t = nR(l, e, Z);
                null == t ? ev(e) : ej(t, t < Z ? "back" : "forward");
            },
            [l, Z, ev, ej],
        ),
        ew = i.useCallback(
            (e) => {
                if (X) return;
                let t = { ...x, [Y.id]: e };
                (v(t), ek(t));
            },
            [ek, x, X, Y.id],
        ),
        eA = i.useCallback(() => {
            X || 0 === Z || ej(Z - 1, "back");
        }, [X, Z, ej]),
        eS = 0 !== Z || X ? void 0 : d,
        eN = (Z > 0 && !X) || null != eS,
        eI = i.useCallback(
            (e) => {
                y((e) => ({ ...e, [Y.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                es ? X || v((e) => ({ ...e, [Y.id]: t })) : ew(t);
            },
            [X, es, Y.id, ew],
        ),
        eE = i.useCallback(() => {
            (y((e) => ({ ...e, [Y.id]: "" })), ew({ kind: "custom", text: T.intl.string(R.default.zxSq2q) }));
        }, [Y.id, ew]),
        { multiPartFor: e_ } = ec,
        eM = i.useMemo(() => (ei ? nP(Y, eo, ea, e_(Y)) : null), [ea, ei, e_, Y, eo]),
        eR = A[Y.id] ?? lM,
        eP = E(Y.id),
        eL = i.useMemo(() => {
            var e, t;
            let n;
            return null != Y.input
                ? ((e = Y.input),
                  (t = C[Y.id]),
                  (n = ea.trim()),
                  {
                      kind: "entities",
                      entities: eR,
                      ...(null == t ? {} : { guildId: t }),
                      ...("" === n ? {} : { custom: n }),
                      text: [
                          ...eR.map((t) => (t.name.startsWith(nD[e]) ? t.name : `${nD[e]}${t.name}`)),
                          ...("" === n ? [] : [n]),
                      ].join(", "),
                  })
                : null;
        }, [ea, C, eR, Y.id, Y.input]),
        e$ = i.useCallback(
            (e, t) => {
                (S((t) => ({ ...t, [Y.id]: e })), N((e) => ({ ...e, [Y.id]: t })));
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
                        return { kind: "image", attachment: t.attachment, text: T.intl.string(R.default.wTsP5l) };
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
                        ? nP(Y, [t.optionId], ea)
                        : nP(Y, [], ea, t)
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
                          return null == nR(e, r, n) && "" === nT(e, r) ? null : r;
                      })(l, x, Z)
                    : null,
            [x, l, Z, eW],
        ),
        eQ = null != eX,
        eZ = (null != eW || eQ) && !X,
        eY = Z === Q - 1,
        eJ = i.useCallback(() => {
            X || (null != eW ? ew(eW) : null != eX && (v(eX), ek(eX)));
        }, [ek, X, eW, ew, eX]),
        e0 = i.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, e1.vq)(e.target, HTMLTextAreaElement) ||
                    (0, e1.vq)(e.target, HTMLInputElement) ||
                    ((!(0, e1.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && eN
                            ? (e.preventDefault(), (eS ?? eA)())
                            : "ArrowRight" === e.key && eZ && (e.preventDefault(), eJ())));
            },
            [eS, eN, eZ, eA, eJ],
        ),
        e2 =
            es && !0 !== Y.upload
                ? null
                : (0, a.jsxs)("div", {
                      className: ls.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: ls.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(h.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          (0, a.jsx)(e7.y, {
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
                              placeholder: T.intl.string(n_(Y) ? R.default.yLN1x6 : R.default["tOC+tn"]),
                              "aria-label": T.intl.formatToPlainString(R.default["4JeYPB"], { question: Y.question }),
                              disabled: X,
                              rows: 1,
                              className: ls.Pu,
                              "data-conjure-clarification-other": Y.id,
                          }),
                      ],
                  });
    return (0, a.jsxs)("section", {
        className: o()(ls.$O, { [ls.fI]: eU && !eK, [ls.Oh]: eK }),
        role: "dialog",
        "aria-label": Y.question,
        "data-conjure-clarification": l.id,
        "data-state": X ? "inert" : "open",
        "data-question-expanded": en ? "true" : void 0,
        "data-picker-open": _ && !z ? "true" : void 0,
        "data-step": Z,
        tabIndex: -1,
        onKeyDown: e0,
        children: [
            (0, a.jsxs)("div", {
                className: ls.rf,
                style: null == O ? void 0 : { height: O.heading + O.rows },
                "data-moving": z ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: B,
                        className: ls.wx,
                        children: [
                            (0, a.jsx)(j.E, {
                                ref: H,
                                tag: "span",
                                id: `${Y.id}-label`,
                                variant: "body-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: en ? void 0 : p,
                                className: o()(ny.TK, ls.R_, { [ls.TB]: "exit" === eh, [ls.JU]: "enter" === eh }),
                                children: ef,
                            }),
                            ep || en
                                ? (0, a.jsx)("div", {
                                      className: ny.Q7,
                                      children: (0, a.jsx)(e4.m, {
                                          text: ex,
                                          children: (0, a.jsx)(ta.K, {
                                              icon: en ? nz.ChevronSmallUpIcon : eC.ChevronSmallDownIcon,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => ee({ id: Y.id, expanded: !en }),
                                              "aria-label": ex,
                                              "aria-controls": `${Y.id}-label`,
                                              "aria-expanded": en,
                                          }),
                                      }),
                                  })
                                : null,
                            null == s
                                ? null
                                : (0, a.jsx)(tZ.D, {
                                      className: o()(ny.gb, ny.Q7),
                                      onClick: eV,
                                      "aria-label": T.intl.string(R.default.qVXlk0),
                                      "data-conjure-clarification-close": !0,
                                      children: (0, a.jsx)(tB.XSmallIcon, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: ls.Cg,
                        style: null == O ? void 0 : { insetBlockStart: O.heading },
                        children: (0, a.jsxs)("div", {
                            className: ls.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: V,
                                    className: ls.Ge,
                                    role: "group",
                                    "aria-labelledby": `${Y.id}-label`,
                                    "data-direction": $?.direction,
                                    "data-parity": null == $ ? void 0 : $.moves % 2,
                                    children: [
                                        null == eu
                                            ? null
                                            : (0, a.jsx)(j.E, {
                                                  tag: "div",
                                                  variant: "body-xs/normal",
                                                  color: "text-muted",
                                                  className: ls.aK,
                                                  children: eu,
                                              }),
                                        (0, a.jsx)(lE, {
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
                                                                  ((n = t[Y.id] ?? l_),
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
                                            ? (0, a.jsx)(lg, {
                                                  projectId: n,
                                                  question: Y,
                                                  value: eR,
                                                  disabled: X,
                                                  onChange: e$,
                                                  onFocus: eD,
                                                  onBlur: eq,
                                                  fallback: nM(Y) ? null : e2,
                                              })
                                            : null,
                                        null != eP ? (0, a.jsx)(nW, { link: eP, disabled: X }) : null,
                                        null != Y.note
                                            ? (0, a.jsx)(j.E, {
                                                  tag: "div",
                                                  variant: "body-xs/normal",
                                                  color: "text-muted",
                                                  className: ls.aK,
                                                  children: Y.note,
                                              })
                                            : null,
                                        nM(Y) ? e2 : null,
                                        !0 === Y.upload
                                            ? (0, a.jsx)("div", {
                                                  className: ls.$0,
                                                  children: (0, a.jsx)(nG.Q, {
                                                      variant: "secondary",
                                                      textVariant: "body-sm/medium",
                                                      text: T.intl.string(R.default.zxSq2q),
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
                                          lR,
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
            Q > 1 || ei || es || null != Y.input || null != d || !0 === Y.optional || n_(Y)
                ? (0, a.jsxs)("div", {
                      className: ny.qr,
                      children: [
                          (0, a.jsx)(j.E, {
                              tag: "span",
                              variant: "body-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  Q > 1
                                      ? T.intl.formatToPlainString(R.default.yzYUjq, { index: Z + 1, total: Q })
                                      : null,
                          }),
                          (0, a.jsxs)("div", {
                              className: ny.zt,
                              children: [
                                  eN
                                      ? (0, a.jsx)(nG.Q, {
                                            variant: "secondary",
                                            textVariant: "body-sm/medium",
                                            text: f ?? T.intl.string(R.default.Pk5lfA),
                                            onClick: eS ?? eA,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  g
                                      ? null
                                      : (0, a.jsx)(m.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: eY
                                                ? (u ?? T.intl.string(T.t.geKm7t))
                                                : T.intl.string(eQ ? R.default.ZcrbKz : R.default.w1nRmT),
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
var lP = n(71637),
    lL = n(77135);
let l$ = { guildId: null, channelId: null };
function lD(e) {
    let { projectId: t } = e,
        n = (0, X.Ay)(t),
        l = n?.sourceApplicationId ?? null,
        r = i.useMemo(
            () =>
                null == l ? void 0 : { text: T.intl.string(R.default.Zlbwxc), onClick: () => (0, lL.default)(l, l$) },
            [l],
        );
    return null == n
        ? null
        : (0, a.jsx)(tU.w, { type: "info", role: "none", message: T.intl.format(R.default.PTo2Qf, {}), action: r });
}
var lq = n(557744),
    lF = n(223347),
    lO = n(27232),
    lG = n(505930),
    lz = n(506774),
    lU = n(385081);
let lB = "conjurePublishRatings",
    lK = "conjurePublishRatingViews",
    lH = [1, 2, 3, 4, 5],
    lV = { 1: R.default.GhbsGA, 2: R.default.cm0nwU, 3: R.default.kGvlh2, 4: R.default.dVBSUg, 5: R.default.DKlgF7 };
function lW(e) {
    return T.intl.string(lV[e]);
}
let lX = new Set(),
    lQ = 0;
function lZ() {
    return lz.w.get(lB) ?? {};
}
function lY(e, t) {
    return lZ()[e]?.[t] ?? null;
}
function lJ(e) {
    return (lX.add(e), () => lX.delete(e));
}
function l0(e) {
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
n(786986);
var l1 = n(693654);
function l2(e) {
    let { dimension: t, value: n, disabled: l, onChange: r } = e,
        s = i.useId(),
        u = i.useId();
    return (0, a.jsxs)("div", {
        className: l1.zm,
        children: [
            (0, a.jsx)(j.E, { id: s, variant: "body-sm/medium", color: "text-default", children: (0, eV.wy)(t) }),
            (0, a.jsx)("div", {
                role: "radiogroup",
                "aria-labelledby": s,
                "aria-required": !0,
                className: l1.uf,
                children: lH.map((e) => {
                    let i = null != n && e <= n,
                        s = i ? lO.StarIcon : lG.StarOutlineIcon;
                    return (0, a.jsxs)(
                        "label",
                        {
                            className: l1.uK,
                            children: [
                                (0, a.jsx)("input", {
                                    type: "radio",
                                    name: u,
                                    value: e,
                                    checked: n === e,
                                    disabled: l,
                                    onChange: () => r(e),
                                    className: l1.hF,
                                    "aria-label": (0, eV.MF)(t, e),
                                }),
                                (0, a.jsx)("span", {
                                    className: o()(l1.d4, { [l1.cO]: i }),
                                    children: (0, a.jsx)(s, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
                                }),
                            ],
                        },
                        e,
                    );
                }),
            }),
        ],
    });
}
function l3(e) {
    let { pending: t } = e,
        n = (0, eV.PM)(t),
        l = i.useId();
    return (0, a.jsx)("section", {
        className: l1.Nr,
        "aria-labelledby": l,
        children: (0, a.jsxs)(nU.B, {
            gap: 12,
            children: [
                (0, a.jsxs)(nU.B, {
                    gap: 4,
                    children: [
                        (0, a.jsx)(v.D, {
                            id: l,
                            variant: "heading-md/semibold",
                            children: T.intl.string(R.default.GVLtfq),
                        }),
                        (0, a.jsx)(j.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: T.intl.string(R.default["Zj4E+A"]),
                        }),
                    ],
                }),
                (0, a.jsxs)(nU.B, {
                    gap: 4,
                    children: [
                        n.dimensions.map((e) =>
                            (0, a.jsx)(
                                l2,
                                {
                                    dimension: e,
                                    value: n.scores[e],
                                    disabled: n.submitting,
                                    onChange: (t) => n.setScore(e, t),
                                },
                                e,
                            ),
                        ),
                        (0, a.jsx)(j.E, {
                            variant: "body-xs/normal",
                            color: "text-muted",
                            children: T.intl.string(R.default.BvaFUc),
                        }),
                    ],
                }),
                (0, a.jsx)(nb.f, {
                    label: T.intl.string(R.default.d28g0o),
                    placeholder: T.intl.string(R.default.EBB7lL),
                    value: n.feedback,
                    onChange: n.setFeedback,
                    rows: 3,
                    maxLength: 2e3,
                    disabled: n.submitting,
                }),
                null != n.error
                    ? (0, a.jsx)(j.E, {
                          variant: "body-sm/normal",
                          color: "text-feedback-critical",
                          role: "alert",
                          children: n.error,
                      })
                    : null,
                (0, a.jsx)(nU.B, {
                    direction: "horizontal",
                    justify: "end",
                    children: (0, a.jsx)(m.$, {
                        variant: "primary",
                        size: "sm",
                        text: T.intl.string(R.default.CYQood),
                        disabled: !n.canSubmit,
                        loading: n.submitting,
                        onClick: n.submit,
                    }),
                }),
            ],
        }),
    });
}
var l4 = n(894443),
    l5 = n(525530),
    l7 = n(564963),
    l9 = n(530557),
    l8 = n(431527),
    l6 = n(628284);
let re = new Set(["select", "channel", "role", "user"]);
function rt(e, t) {
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
function rn(e, t) {
    let n = e.keys ?? [];
    return n.length > 0 ? n : t.schema.map((e) => e.key);
}
var rl = n(914250),
    rr = n(202723);
function ra(e) {
    let { projectId: t, cardId: l, request: r, status: s, awaiting: u, onDismiss: c } = e,
        d = i.useCallback(() => {
            (0, K.mM)(async () => {
                let { default: e } = await Promise.all([n.e(291953), n.e(197826)]).then(n.bind(n, 644441));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        f = i.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: l9.KeyIcon })), [r.fields]),
        h = (0, l7.bB)(l, s),
        g = o()(rr.Lo, { [rr.jY]: h });
    if ("superseded" === s)
        return (0, a.jsx)(
            "article",
            {
                className: g,
                children: (0, a.jsx)(j.E, {
                    variant: "body-xs/semibold",
                    color: "text-muted",
                    tag: "span",
                    children: T.intl.string(R.default.CTxtdV),
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
                    (0, a.jsx)(j.E, {
                        variant: "body-xs/semibold",
                        color: "text-muted",
                        tag: "span",
                        children: T.intl.string(R.default.HCQvpO),
                    }),
                    (0, a.jsx)(l8.C, { label: T.intl.string(R.default.HCQvpO), size: "xs", items: f }),
                ],
            },
            s,
        );
    if ("pending" === s)
        return (0, a.jsx)(
            "article",
            {
                className: rr.Lo,
                children: (0, a.jsx)(l8.C, { label: T.intl.string(R.default.HCQvpO), size: "xs", items: f }),
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
                        className: rr.$h,
                        children: [
                            (0, a.jsx)("span", {
                                className: rr.c9,
                                "aria-hidden": !0,
                                children: (0, a.jsx)(l6.CircleCheckIcon, {
                                    size: "xs",
                                    color: tm.A.colors.ICON_FEEDBACK_POSITIVE,
                                }),
                            }),
                            (0, a.jsx)(j.E, {
                                variant: "body-xs/semibold",
                                color: "text-feedback-positive",
                                tag: "span",
                                children: T.intl.string(R.default.sfp7Up),
                            }),
                        ],
                    }),
                    (0, a.jsx)(j.E, {
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
        x = (0, a.jsx)(m.$, { variant: "primary", size: "sm", onClick: d, text: T.intl.string(R.default.EK8tKY) });
    return null != c
        ? (0, a.jsxs)("section", {
              className: o()(ny.nd, rr.fw),
              "aria-label": T.intl.string(R.default.O0QIqj),
              children: [
                  (0, a.jsxs)("div", {
                      className: ny.wx,
                      children: [
                          (0, a.jsx)(l9.KeyIcon, { size: "xs", color: tm.A.colors.TEXT_BRAND, "aria-hidden": !0 }),
                          (0, a.jsx)(j.E, {
                              tag: "span",
                              variant: "body-sm/semibold",
                              color: "text-brand",
                              className: ny.TK,
                              children: T.intl.string(R.default.O0QIqj),
                          }),
                          (0, a.jsx)(tZ.D, {
                              className: o()(ny.gb, ny.Q7),
                              onClick: c,
                              "aria-label": T.intl.string(R.default.Hl7rif),
                              children: (0, a.jsx)(tB.XSmallIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                      ],
                  }),
                  (0, a.jsxs)("div", {
                      className: rr.DQ,
                      children: [
                          (0, a.jsx)(rl.A, { text: p, variant: "body-sm/normal", color: "text-default" }),
                          (0, a.jsx)(l8.C, { label: T.intl.string(R.default.HCQvpO), size: "xs", items: f }),
                      ],
                  }),
                  (0, a.jsxs)("div", {
                      className: ny.qr,
                      children: [
                          (0, a.jsx)(j.E, {
                              variant: "body-xs/normal",
                              color: "text-muted",
                              className: rr.xE,
                              children: T.intl.string(R.default["2OdXdn"]),
                          }),
                          (0, a.jsx)("div", { className: ny.zt, children: x }),
                      ],
                  }),
              ],
          })
        : (0, a.jsxs)("article", {
              className: rr.Lo,
              children: [
                  (0, a.jsx)(j.E, {
                      variant: "body-xs/semibold",
                      color: null != u ? "text-brand" : "text-muted",
                      tag: "span",
                      children: T.intl.string(null != u ? R.default.O0QIqj : R.default.HCQvpO),
                  }),
                  (0, a.jsx)(rl.A, { text: p, variant: "body-sm/normal", color: "text-default" }),
                  (0, a.jsx)(l8.C, { label: T.intl.string(R.default.HCQvpO), size: "xs", items: f }),
                  (0, a.jsx)("div", { className: rr.sq, children: x }),
              ],
          });
}
var ri = n(442331),
    rs = n(513425);
let ru = new Set(),
    ro = new Set();
function rc(e) {
    return (
        ro.add(e),
        () => {
            ro.delete(e);
        }
    );
}
function rd() {
    return i.useSyncExternalStore(rc, () => ru);
}
function rm(e) {
    let t = new Set(),
        n = new Set(),
        l = !1,
        r = !1;
    for (let a = e.length - 1; a >= 0; a--) {
        let i = e[a];
        if (null == i || "assistant" !== i.role || null == i.settingsRequest || !(0, tW.BL)(i)) continue;
        let s = i.settingsRequest.keys ?? [];
        for (let e of ((r || (0 === s.length ? l : s.some((e) => n.has(e)))) && t.add(i.id), s)) n.add(e);
        ((l = !0), (r = r || 0 === s.length));
    }
    return t;
}
function rf(e, t, n) {
    if (!n || null == t) return !1;
    let l = rn(e, t);
    return l.length > 0 && !rt({ keys: l }, t);
}
var rh = n(782973),
    rg = n(290713),
    rp = n(411236);
function rx(e) {
    let { projectId: t, request: n, askId: l, onDismiss: r, notifyAgent: s = !0 } = e,
        {
            done: u,
            superseded: d,
            summary: f,
            markSaved: h,
        } = (function (e, t, n) {
            let l = rd(),
                [r, a] = i.useState(!1),
                s = null != n ? l.has(n) : r,
                u = i.useCallback(() => {
                    if (null != n) {
                        if (!ru.has(n)) for (let e of ((ru = new Set([...ru, n])), ro)) e();
                    } else a(!0);
                }, [n]),
                o = (0, c.bG)([ri.A], () => rf(t, ri.A.getSettings(e), s), [e, t, s]);
            return {
                done: o,
                superseded: (0, c.bG)([rs.A], () => null != n && rm(rs.A.getMessages(e)).has(n), [e, n]),
                summary: (0, c.yK)(
                    [ri.A, nS.A],
                    () => {
                        var n;
                        let l = ri.A.getSettings(e);
                        return null == l
                            ? []
                            : ((n = (e) => nS.A.getChannel(e)?.name ?? null),
                              rn(t, l).flatMap((e) => {
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
    if (d && !g)
        return (0, a.jsx)("article", {
            className: rp.Mk,
            children: (0, a.jsx)(j.E, {
                variant: "body-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: T.intl.string(R.default["+uXDk+"]),
            }),
        });
    if (g)
        return (0, a.jsxs)("article", {
            className: rp.Mk,
            children: [
                (0, a.jsxs)("div", {
                    className: rp.Ol,
                    children: [
                        (0, a.jsx)(l6.CircleCheckIcon, {
                            size: "xs",
                            color: tm.A.colors.ICON_FEEDBACK_POSITIVE,
                            "aria-hidden": !0,
                        }),
                        (0, a.jsx)(j.E, {
                            variant: "body-xs/semibold",
                            color: "text-feedback-positive",
                            tag: "span",
                            children: T.intl.string(R.default.AxBLLy),
                        }),
                    ],
                }),
                f.length > 0
                    ? (0, a.jsx)(j.E, {
                          variant: "body-sm/normal",
                          color: "text-default",
                          selectable: !0,
                          children: f.join(" \xb7 "),
                      })
                    : null,
            ],
        });
    let p = n.keys?.length === 1 && n.keys[0] === rh.B,
        x = null != n.note && "" !== n.note ? n.note : p ? null : T.intl.string(R.default.XuOf5s);
    return (0, a.jsx)(rg.A, {
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
            let u = (0, a.jsx)(m.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: l,
                disabled: !n,
                text: T.intl.string(R.default.A7dQd9),
            });
            return null == r
                ? (0, a.jsxs)("form", {
                      className: rp.Mk,
                      onSubmit: s,
                      children: [
                          (0, a.jsx)(j.E, {
                              variant: "body-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: T.intl.string(R.default["jZjP+I"]),
                          }),
                          null != x
                              ? (0, a.jsx)(rl.A, { text: x, variant: "body-sm/normal", color: "text-default" })
                              : null,
                          t,
                          (0, a.jsx)("div", { className: rp.p0, children: u }),
                      ],
                  })
                : (0, a.jsxs)("form", {
                      className: o()(ny.nd, ny.jx),
                      "aria-label": T.intl.string(R.default["jZjP+I"]),
                      onSubmit: s,
                      children: [
                          (0, a.jsxs)("div", {
                              className: ny.wx,
                              children: [
                                  (0, a.jsx)(j.E, {
                                      tag: "span",
                                      variant: "body-sm/medium",
                                      color: "text-subtle",
                                      className: ny.TK,
                                      children: T.intl.string(R.default["jZjP+I"]),
                                  }),
                                  (0, a.jsx)(tZ.D, {
                                      className: o()(ny.gb, ny.Q7),
                                      onClick: r,
                                      "aria-label": T.intl.string(R.default["iq+Pte"]),
                                      children: (0, a.jsx)(tB.XSmallIcon, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: rp.DQ,
                              children: [
                                  null != x
                                      ? (0, a.jsx)(rl.A, { text: x, variant: "body-sm/normal", color: "text-default" })
                                      : null,
                                  t,
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: ny.qr,
                              children: [
                                  (0, a.jsx)(j.E, {
                                      variant: "body-xs/normal",
                                      color: "text-muted",
                                      className: rp.xE,
                                      children: T.intl.string(R.default["1w0jMk"]),
                                  }),
                                  (0, a.jsxs)("div", {
                                      className: ny.zt,
                                      children: [
                                          (0, a.jsx)(m.$, {
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
var rv = n(975571),
    rj = n(427123);
let rb = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
var ry = n(874421),
    rk = n(932111),
    rw = n(940874),
    rA = n(404373),
    rS = n(89222);
function rC(e) {
    return "" !== rS.A.getDraft(e).trim();
}
var rN = n(29080);
function rI(e) {
    var t;
    let n,
        l,
        { steps: r, content: a, hasProposal: i, hasLiveClarification: s = !1, hasAttachments: u } = e,
        o = (0, tV.B4)(r),
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
        })({ hasAttachments: u, showsClosingMessage: h, endsOnStreamedMessage: (0, tV.Lf)(r) }),
    };
}
var rE = n(62617),
    r_ = n(182368);
let rM = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    rR = {
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
    rT = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    u = i.useMemo(
                        () => (0, rE.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    className: (0, rE.Z)(),
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
                        () => (0, rE.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    className: (0, rE.Z)(),
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
                        () => (0, rE.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    className: (0, rE.Z)(),
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
                        () => (0, rE.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    className: (0, rE.Z)(),
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
                        () => (0, rE.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    className: (0, rE.Z)(),
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
                        () => (0, rE.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    className: (0, rE.Z)(),
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
                        () => (0, rE.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    className: (0, rE.Z)(),
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
                        () => (0, rE.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    className: (0, rE.Z)(),
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
                        () => (0, rE.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    className: (0, rE.Z)(),
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
                        () => (0, rE.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    className: (0, rE.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        bot: { Illocon: r_.u, tint: "var(--illo-purple-40)" },
    };
function rP(e) {
    return { ...rT[e], name: T.intl.string(rR[e]()) };
}
function rL(e) {
    return rM.includes(e) ? rP(e) : void 0;
}
function r$(e) {
    let t = new Map();
    for (let [n, l] of (function (e) {
        let t = 0,
            n = e[0] ?? "";
        for (let e = 0; e < n.length; e++) t = (31 * t + n.charCodeAt(e)) % rM.length;
        let l = new Map();
        return (
            e.forEach((e, n) => {
                l.set(e, rM[(t + n) % rM.length]);
            }),
            l
        );
    })(e))
        t.set(n, rP(l));
    return t;
}
var rD = n(615839);
function rq(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : T.intl.string(R.default.KcFvbo);
}
var rF = n(60160),
    rO = n(101147);
function rG(e) {
    let t = (0, tV.SY)(e.steps);
    return null != t ? (0, tV.WQ)(t) : rq(e.task);
}
function rz(e) {
    let t = r$(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? rL(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: rq(e.task),
                      todoId: e.task.todoId,
                      line: rG(e),
                  },
              ];
    });
}
function rU(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: i, connectsDown: s } = e,
        u = n.task,
        o = "running" === u.status,
        c = (0, tV.SY)(n.steps),
        d = o
            ? rG(n)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(rq(e));
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
                                  duration: (0, rD.MB)(e.durationMs),
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
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          n.steps.length > 0
                              ? (0, a.jsx)("ol", {
                                    className: na.dO,
                                    children: n.steps.map((e) =>
                                        (0, a.jsx)(
                                            rO.A,
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
                                      className: na.iq,
                                      children: (0, a.jsx)(rF.A, { text: e, variant: "body-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, a.jsx)(tJ.A, {
        glyph: (0, a.jsx)(t0.u, {
            asset: (0, a.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: rq(u),
            position: "left",
            children: (0, a.jsx)("span", {
                className: na.nC,
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
var rB = n(998445),
    rK = n(643210),
    rH = n(648127),
    rV = n(372795),
    rW = n(163897);
let rX = "conjure-browser-viewer";
function rQ(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, c.yK)(
            [rK.A],
            () =>
                n.flatMap((e) => {
                    let n = rK.A.getTab(t, e);
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
        className: rW.kR,
        "aria-label": T.intl.string(R.default.Uvkr1G),
        children: l.map((e) =>
            (0, a.jsx)("li", { children: (0, a.jsx)(rZ, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function rZ(e) {
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
        c = (0, K.Ry)(rX),
        [d, m] = i.useState(!1),
        f = i.useCallback((e, t) => m(t), []),
        { ended: h } = l,
        g = (0, rH.i)(l.session);
    return (0, a.jsxs)(tZ.D, {
        innerRef: s,
        className: o()(rW.Nr, h && rW.Xj),
        onClick: () => {
            var e;
            return (
                (e = l.session.id),
                void (0, K.mM)(
                    async () => {
                        let { default: l } = await Promise.all([
                            n.e(409495),
                            n.e(513843),
                            n.e(501962),
                            n.e(531527),
                        ]).then(n.bind(n, 273594));
                        return (n) => (0, a.jsx)(l, { ...n, projectId: t, sessionId: e, sessionIds: r });
                    },
                    { modalKey: rX },
                )
            );
        },
        "aria-label": T.intl.formatToPlainString(R.default.G3a822, { title: g }),
        children: [
            (0, a.jsxs)("div", {
                className: rW.Gt,
                children: [
                    (0, a.jsx)(rV.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !u || c || h,
                        className: rW.Ji,
                        "aria-label": T.intl.formatToPlainString(R.default.rnwqXb, { name: g }),
                        onStateChange: f,
                    }),
                    d
                        ? null
                        : (0, a.jsx)("div", {
                              className: rW.qf,
                              children: (0, a.jsx)(rB.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    h
                        ? (0, a.jsx)("div", {
                              className: rW.HS,
                              children: (0, a.jsx)(j.E, {
                                  variant: "body-xs/medium",
                                  color: "text-strong",
                                  children: T.intl.string(R.default.ocRH08),
                              }),
                          })
                        : null,
                ],
            }),
            (0, a.jsxs)("span", {
                className: rW.pG,
                children: [
                    (0, a.jsx)("span", { className: o()(rW.W9, h && rW.oM) }),
                    (0, a.jsx)(j.E, {
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
var rY = n(268409);
let rJ = new WeakMap(),
    r0 = new WeakMap();
function r1(e) {
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
            [rs.A],
            () => {
                if (0 === s.length) return s;
                let e = (function (e) {
                    let t = rJ.get(e);
                    if (null != t) return t;
                    let n = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = r0.get(e);
                            if (null == t) {
                                let n = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) n.push(e);
                                ((t = n), r0.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            n.set(e, t.steps);
                    return (rJ.set(e, n), n);
                })(rs.A.getMessages(t));
                return s.filter((t) => e.get(t) === n);
            },
            [s, t, n],
        );
    return 0 === u.length
        ? null
        : (0, a.jsx)("li", { className: rY.h, children: (0, a.jsx)(rQ, { projectId: t, sessionIds: u }) });
}
var r2 = n(469393);
function r3(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, H.lG)(t.authored_at);
    return (0, a.jsx)(t4, {
        title: T.intl.string(R.default["t+b0rz"]),
        children: (0, a.jsxs)("div", {
            className: r2.r,
            children: [
                (0, a.jsxs)("div", {
                    className: r2.z,
                    children: [
                        (0, a.jsx)(j.E, { variant: "body-md/medium", children: t.subject }),
                        null != l.relative
                            ? (0, a.jsx)(j.E, {
                                  variant: "body-sm/normal",
                                  color: "text-muted",
                                  title: l.absolute ?? void 0,
                                  children: l.relative,
                              })
                            : null,
                    ],
                }),
                null != n
                    ? (0, a.jsx)(m.$, {
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
var r4 = n(493490),
    r5 = n(17742);
let r7 = [];
function r9(e) {
    let t = (0, c.bG)([r4.A], () => (null != e ? r4.A.getCaptures(e) : r7)),
        n = (0, c.bG)([r4.A], () => (null != e ? r4.A.getSelectedCapture(e) : null)),
        [l, r] = i.useState(null),
        a = null != n ? `${n.id}:${n.image_etag}` : null;
    return (
        i.useEffect(() => {
            if (null == e || null == n || null == a) return;
            let t = !1;
            return (
                (async () => {
                    try {
                        let l = await (0, r5._F)(e, n);
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
var r8 = n(714917),
    r6 = n(463660),
    ae = n(970211);
function at(e) {
    let { projectId: t, gameCaptures: n = !1 } = e,
        {
            src: l,
            blurred: r,
            handleError: s,
        } = (function (e, t) {
            let n = (0, c.bG)([r8.A], () => (null != e ? r8.A.getBackground(e) : null)),
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
                                r = await (0, r6.Mg)(e, l);
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
        u = r9(n ? t : null);
    return null != u.selected
        ? null != u.src
            ? (0, a.jsx)("img", { className: ae.F1, src: u.src, alt: "", "aria-hidden": !0 })
            : null
        : null == l
          ? null
          : (0, a.jsx)("img", {
                className: o()(ae.LO, { [ae.Ty]: r }),
                src: l,
                alt: "",
                "aria-hidden": !0,
                onError: s,
            });
}
var an = n(155718);
function al(e, t) {
    return e.supported_surfaces?.includes(t) === !0;
}
let ar = ["command", "user_command", "message_command", "message"],
    aa = new Set([an.kc.CHAT, an.kc.USER, an.kc.MESSAGE]);
function ai(e) {
    return e.type ?? an.kc.CHAT;
}
function as(e) {
    return aa.has(ai(e));
}
function au(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function ao(e, t) {
    let n = ar.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !au(e)), ...n.filter(au)].slice(0, 3);
    for (let r of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(r) || au(r) || l.push(r);
    }
    return ar.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
function ac(e, t, n) {
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
    let s = e.commands.filter(as).map((e) =>
            (function (e, t) {
                let n = e.description?.trim() ?? "",
                    l = "" !== n ? n : t.reply;
                switch (ai(e)) {
                    case an.kc.USER:
                        return { kind: "user_command", user: e.name, bot: l };
                    case an.kc.MESSAGE:
                        return { kind: "message_command", user: e.name, bot: l };
                    default:
                        return { kind: "command", user: `/${e.name}`, bot: l };
                }
            })(e, n),
        ),
        u = "messages" === t ? [] : s.filter(au),
        o = a.length > 0 ? ao([...a, ...u], !0) : ao("both" === t ? [...s, i] : s, !1);
    return o.length > 0 ? o : [r];
}
var ad = n(377941),
    am = n.n(ad);
function af(e) {
    let t = e.split("_").join(" ").toLowerCase();
    return 0 === t.length ? t : t[0].toUpperCase() + t.slice(1);
}
function ah(e) {
    return e.type === an.kc.PRIMARY_ENTRY_POINT
        ? "\u21EA /"
        : e.type === an.kc.USER || e.type === an.kc.MESSAGE
          ? ""
          : "/";
}
let ag = {
        [et.q7.APP_CHANNEL]: R.default["3/aHX6"],
        [et.q7.VOICE_CHANNEL]: R.default["3/aHX6"],
        [et.q7.ACTIVITY]: R.default["3/aHX6"],
        [et.q7.OVERLAY]: R.default["rPpf5/"],
        [et.q7.PROFILE_WIDGET]: null,
        [et.q7.AUTOMOD]: null,
        [et.q7.BOT]: null,
        [et.q7.APPLICATION_COMMANDS]: null,
    },
    ap = [et.q7.ACTIVITY, et.q7.APP_CHANNEL, et.q7.VOICE_CHANNEL, et.q7.OVERLAY];
function ax(e) {
    return ap.find((t) => al(e, t)) ?? null;
}
let av = 1920 / 1018;
function aj(e, t) {
    return `${Number(((e / t) * 100).toFixed(3))}%`;
}
let ab = aj(24, 1018),
    ay = aj(24, 1920);
function ak(e) {
    return null != e.overlay_design_image
        ? e.overlay_design_image
        : e.design_image?.name === "overlay-design-v2.png"
          ? e.design_image
          : null;
}
var aw = n(90947),
    aA = (((l = {}).IMAGE = "image"), l),
    aS = (((r = {}).PRIVATE = "private"), (r.PUBLIC = "public"), r),
    aC = n(598748),
    aN = n(773669);
let aI = [],
    aE = {},
    a_ = {};
function aM(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function aR(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: aA.IMAGE,
        visibility: aS.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var aT = n(127258),
    aP = n(803306),
    aL = n(587895),
    a$ = n(432005),
    aD = n(963852),
    aq = n(95701),
    aF = n(619019),
    aO = n(427262);
let aG = new aq.nA({ id: "1337", guild_id: "1337", type: ej.rbe.GUILD_TEXT, name: "preview" });
function az(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = (0, c.bG)([nN.default], () => nN.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            r && a?.username !== t && (0, aP.nj)(new aF.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, a, e, t, l, n]),
        a
    );
}
let aU = /^@\S+/;
var aB = n(775602);
let aK = [R.default["3eTjcV"], R.default.l3j5nS];
var aH = n(97808),
    aV = n(778712),
    aW = n(486020),
    aX = n(46054),
    aQ = n(200700);
let aZ = {
        alert: { label: () => T.intl.string(R.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => T.intl.string(R.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => T.intl.string(R.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => T.intl.string(R.default.RGzFNK), blockedStyle: !1 },
    },
    aY = {
        blocked: { label: () => T.intl.string(R.default.YdnZ8q), tone: "red" },
        alert: { label: () => T.intl.string(R.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => T.intl.string(R.default.RGzFNK), tone: "green" },
    },
    aJ = ["blocked", "alert", "allowed"],
    a0 = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
function a1(e) {
    var t, n;
    let l,
        r = [
            "timeout" !== (t = e).outcome || null == t.timeout_seconds
                ? null
                : T.intl.formatToPlainString(T.t["3LYql6"], {
                      duration:
                          ((n = t.timeout_seconds),
                          null != (l = (0, aQ.getFriendlyDurationString)(n))
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
var a2 = n(984097),
    a3 = n(13673);
let a4 = { blurple: "text-brand", red: "text-feedback-critical", green: "text-feedback-positive" };
function a5(e) {
    let { example: t } = e,
        n = a1(t);
    return null == n
        ? null
        : (0, a.jsx)(j.E, {
              variant: "body-xs/normal",
              color: "text-muted",
              lineClamp: 2,
              selectable: !0,
              children: n,
          });
}
let a7 = ["glazedgamer", "sprinkles", "donutking"];
function a9(e) {
    var t;
    let { example: n, username: l, showReason: r } = e,
        { label: i, blockedStyle: s } = aZ[n.outcome];
    return (0, a.jsxs)("li", {
        className: o()(a2.nM, { [o()(a2.HV, a3.DX)]: s }),
        children: [
            (0, a.jsx)(t1.A, { children: `${i()}: ` }),
            (0, a.jsx)("span", {
                className: a2.my,
                children: (0, a.jsx)(aH.eu, {
                    src: (0, aW.AE)(void 0, void 0),
                    size: aV._3.SIZE_24,
                    "aria-label": T.intl.string(R.default["1yI0xV"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: a2.fw,
                children: [
                    (0, a.jsx)(j.E, { variant: "body-sm/semibold", color: "text-strong", children: l }),
                    (0, a.jsx)(j.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), aX.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    r ? (0, a.jsx)(a5, { example: n }) : null,
                ],
            }),
        ],
    });
}
function a8(e) {
    let { group: t, firstIndex: n } = e,
        l = i.useId(),
        r = aY[t.section],
        s = new Set(t.examples.map(a1)),
        u = 1 === s.size ? t.examples.map(a1)[0] : null;
    return (0, a.jsxs)("div", {
        className: a2.UO,
        children: [
            (0, a.jsxs)("div", {
                className: a2.RZ,
                children: [
                    (0, a.jsx)(j.E, {
                        id: l,
                        variant: "body-xs/semibold",
                        color: a4[r.tone],
                        tag: "span",
                        children: r.label(),
                    }),
                    null != u
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(j.E, {
                                      variant: "body-xs/semibold",
                                      color: "text-muted",
                                      tag: "span",
                                      className: a2.IQ,
                                      "aria-hidden": !0,
                                      children: "\xb7",
                                  }),
                                  (0, a.jsx)(j.E, {
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
                className: a2.m7,
                "aria-labelledby": l,
                children: t.examples.map((e, t) =>
                    (0, a.jsx)(a9, { example: e, username: a7[(n + t) % a7.length], showReason: s.size > 1 }, t),
                ),
            }),
        ],
    });
}
function a6(e) {
    var t;
    let { automod: n } = e,
        l =
            ((t = n.examples),
            aJ
                .map((e) => ({ section: e, examples: t.filter((t) => a0[t.outcome] === e) }))
                .filter((e) => e.examples.length > 0)),
        r = n.rule_name.trim();
    return (0, a.jsxs)("div", {
        className: a2.Nr,
        children: [
            "" !== r
                ? (0, a.jsx)("div", {
                      className: a2.hk,
                      children: (0, a.jsx)(j.E, {
                          variant: "body-sm/normal",
                          color: "text-default",
                          lineClamp: 1,
                          children: r,
                      }),
                  })
                : null,
            l.map((e, t) =>
                (0, a.jsx)(
                    a8,
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
var ie = n(276293),
    it = n(460905),
    il = n(110384),
    ir = n(365199),
    ia = n(633018),
    ii = n(763754),
    is = n(267508),
    iu = n(194085),
    io = n(20851),
    ic = n(692508),
    id = n(798819);
function im(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, a.jsxs)("div", {
        className: o()(id.item, id.labelContainer, id.colorDefault, {
            [id.focused]: !0 === t.highlighted,
            [id.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, a.jsx)("div", {
                      className: id.iconContainerLeft,
                      children: (0, a.jsx)(n, { color: "currentColor", className: id.icon }),
                  })
                : null,
            (0, a.jsx)("div", { className: o()(id.label, ic.Gy), children: t.label }),
            null != l
                ? (0, a.jsx)("div", {
                      className: id.iconContainer,
                      children: (0, a.jsx)(l, { color: "currentColor", className: id.icon }),
                  })
                : null,
        ],
    });
}
function ih(e) {
    let { target: t, commandName: n, appIconSrc: l } = e,
        r = i.useMemo(
            () =>
                null != l
                    ? (e) => {
                          let { className: t } = e;
                          return (0, a.jsx)("img", { src: l, alt: "", className: o()(t, ic.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: T.intl.string(T.t["5IEsGx"]), icon: il.ArrowAngleLeftUpIcon, muted: !0 }
                : { label: T.intl.string(T.t.LYju5J), muted: !0 };
    return (0, a.jsx)("div", {
        className: o()(id.menu, ic.MK),
        "aria-hidden": !0,
        children: (0, a.jsxs)("div", {
            className: id.scroller,
            children: [
                (0, a.jsx)(im, { item: s }),
                (0, a.jsx)("div", { className: id.separator }),
                (0, a.jsx)(im, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
function ig() {}
function ip(e) {
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
            items: v,
            botIcon: b,
            appIconSrc: y,
        } = ((t = (0, c.bG)([nN.default], () => nN.default.getCurrentUser())),
        (n = (0, c.bG)([eT.Ay], () => eT.Ay.getProject(p))),
        (l = n?.preview_application_id ?? n?.application_id),
        (r = (0, c.bG)([aL.A], () => aL.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (s = n?.name ?? T.intl.string(R.default.JEYq8M)),
        (u = (0, c.bG)([nN.default], () => (null != l ? nN.default.getUser(l) : void 0), [l])),
        (m = az("31337", s, { bot: !0, enabled: !(d = u?.bot === !0) })),
        (f = d ? u : m),
        (h = az("31338", T.intl.string(R.default["9iAOsw"]), { discriminator: "0003" })),
        (g = az("31339", (0, aO.mG)(t) ?? "", { enabled: null != t })),
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
                                      i = (0, a$.rh)({
                                          ...(0, aD.Ay)({
                                              channelId: aG.id,
                                              content: e,
                                              author: t,
                                              type: l ?? ej.lAJ.DEFAULT,
                                          }),
                                          id: a,
                                          state: ej.cmJ.SENT,
                                          ...(null != n
                                              ? {
                                                    interaction: {
                                                        id: a,
                                                        name: n,
                                                        type: aT.G.APPLICATION_COMMAND,
                                                        user: (0, aD.Vi)(s),
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
                                              messageType: ej.lAJ.CHAT_INPUT_COMMAND,
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
                                                  messageType: ej.lAJ.CONTEXT_MENU_COMMAND,
                                              }));
                                          break;
                                      }
                                      case "message":
                                          (d(((l = t.user), l.trim().replace(aU, `<@${i.id}>`)), s),
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
                                  targetMessage: T.intl.string(R.default["y+QYes"]),
                                  memberMessage: T.intl.string(R.default.BUTRDc),
                              },
                          ),
                [x, f, t, g, h],
            ),
            botIcon: r,
            appIconSrc: r ?? f?.getAvatarURL(void 0, 80),
        });
    if (0 === v.length) return null;
    let k = aG.name;
    return (0, a.jsxs)("div", {
        className: ic.Ix,
        children: [
            (0, a.jsxs)("div", {
                className: ic.ZO,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(ie.TextIcon, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(j.E, { variant: "body-sm/semibold", color: "text-strong", tag: "span", children: k }),
                ],
            }),
            (0, a.jsx)("ol", {
                className: o()(ic.TE, "group-spacing-16"),
                children: v.map((e) => {
                    let { key: t, record: n, isCommandReply: l, menu: r } = e;
                    return (0, a.jsxs)(
                        "li",
                        {
                            className: null != r ? ic.Rz : void 0,
                            children: [
                                (0, a.jsx)(io.A, {
                                    message: n,
                                    channel: aG,
                                    author: (0, ii.FT)(n.author, aG),
                                    isGroupStart: !0,
                                    avatarOverride: n.author.bot ? (b ?? void 0) : void 0,
                                    childrenExecutedCommand: l ? (0, a.jsx)(is.A, { message: n, channel: aG }) : void 0,
                                    usernameClassName: r?.target === "user" ? ic.Ct : void 0,
                                    disableInteraction: !0,
                                }),
                                r?.target === "message"
                                    ? (0, a.jsx)("div", {
                                          className: ic.S3,
                                          inert: !0,
                                          "aria-hidden": !0,
                                          children: (0, a.jsxs)(iu.Ay, {
                                              children: [
                                                  (0, a.jsx)(iu.qv, {
                                                      label: T.intl.string(T.t.lfIHs4),
                                                      icon: it.ReactionIcon,
                                                      onClick: ig,
                                                  }),
                                                  (0, a.jsx)(iu.qv, {
                                                      label: T.intl.string(T.t["5IEsGx"]),
                                                      icon: il.ArrowAngleLeftUpIcon,
                                                      onClick: ig,
                                                  }),
                                                  (0, a.jsx)(iu.qv, {
                                                      label: T.intl.string(T.t["UKOtz+"]),
                                                      icon: ir.MoreHorizontalIcon,
                                                      selected: !0,
                                                      onClick: ig,
                                                  }),
                                              ],
                                          }),
                                      })
                                    : null,
                                null != r
                                    ? (0, a.jsx)("div", {
                                          className: "user" === r.target ? ic.ET : ic.je,
                                          inert: !0,
                                          children: (0, a.jsx)(ih, {
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
                className: ic.DA,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(ia.SlashBoxIcon, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(j.E, {
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
var ix = n(332173);
function iv(e) {
    let { name: t } = e;
    return (0, a.jsxs)(ix.A, { children: ["/", t] });
}
function ij(e) {
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
                        let t = [...e].sort((e, t) => t.length - e.length).map(am());
                        return RegExp(`(^|[\\s("'\u{201C}\u{2018}])/(${t.join("|")})(?![\\w-])`, "gu");
                    })(n),
                [n],
            ),
        );
    return null == l ? t : l.map((e) => ("command" === e.kind ? (0, a.jsx)(iv, { name: e.name }, e.start) : e.text));
}
n(827669);
var ib = n(687966),
    iy = n(757789),
    ik = n(26137),
    iw = n(430392),
    iA = n(231483),
    iS = n(323384);
let iC = {
    frame: R.default.Z2bt4u,
    overlay_widget: R.default["0mGHfU"],
    user_widget: R.default.Jipr29,
    bot: R.default.EbvC13,
    commands: R.default.EbvC13,
    automod: R.default.tiMvei,
};
var iN = n(573634);
let iI = {
    frame: ib.GameControllerIcon,
    overlay_widget: iy.WindowTopIcon,
    user_widget: ik.UserCircleIcon,
    bot: iw.RobotIcon,
    commands: iw.RobotIcon,
    automod: iA.ShieldIcon,
};
function iE(e) {
    let { caption: t, children: n, className: l } = e;
    return (0, a.jsxs)("div", {
        className: o()(iN.e7, l),
        children: [(0, a.jsx)(j.E, { variant: "body-sm/normal", color: "text-muted", children: t }), n],
    });
}
function i_(e) {
    let { labels: t } = e;
    return (0, a.jsx)("ul", {
        className: iN.Ip,
        children: t.map((e) =>
            (0, a.jsx)(
                "li",
                {
                    className: iN.jw,
                    children: (0, a.jsx)(j.E, {
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
function iM(e) {
    let { name: t, description: n } = e;
    return (0, a.jsxs)("li", {
        className: iN.lj,
        children: [
            (0, a.jsx)("span", {
                className: o()(iN.Vo, iN.G),
                children: (0, a.jsx)(iS.AppsIcon, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
            }),
            (0, a.jsxs)("div", {
                className: iN.aV,
                children: [
                    (0, a.jsx)(j.E, { variant: "body-md/normal", color: "text-default", lineClamp: 1, children: t }),
                    (0, a.jsx)(j.E, { variant: "body-sm/normal", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
}
function iR(e) {
    let { commands: t } = e;
    return (0, a.jsx)("ul", {
        className: iN.wZ,
        children: t.map((e, t) => {
            let n = ah(e),
                l = e.description?.trim() ?? "";
            return (0, a.jsx)(
                "li",
                {
                    children: (0, a.jsxs)(j.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        selectable: !0,
                        children: [
                            "/" === n
                                ? (0, a.jsx)(iv, { name: e.name })
                                : (0, a.jsx)(ix.A, { children: `${n}${e.name}` }),
                            "" !== l ? ` ${l}` : null,
                        ],
                    }),
                },
                t,
            );
        }),
    });
}
function iT(e) {
    let { bullets: t, commandNames: n } = e;
    return (0, a.jsx)("ul", {
        className: iN.p_,
        children: t.map((e, t) =>
            (0, a.jsx)(
                "li",
                {
                    className: iN.Aw,
                    children: (0, a.jsx)(j.E, {
                        variant: "body-md/normal",
                        color: "text-default",
                        tag: "span",
                        selectable: !0,
                        children: (0, a.jsx)(ij, { text: e, commandNames: n }),
                    }),
                },
                t,
            ),
        ),
    });
}
function iP(e) {
    let { experience: t, bullets: n, preview: l, blocks: r, commandNames: i } = e,
        s = "frame" === t.kind && !0 !== t.game,
        u = s ? iS.AppsIcon : iI[t.kind],
        o = T.intl.string(s ? R.default.BM4Ymz : iC[t.kind]);
    return (0, a.jsxs)("section", {
        className: iN.s9,
        "aria-label": o,
        children: [
            (0, a.jsxs)("div", {
                className: iN.JQ,
                children: [
                    (0, a.jsx)("span", {
                        className: iN.Vo,
                        children: (0, a.jsx)(u, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    (0, a.jsx)(j.E, { variant: "body-md/medium", color: "text-strong", tag: "span", children: o }),
                ],
            }),
            null != l ? (0, a.jsx)("div", { className: iN.VH, children: l }) : null,
            "automod" === t.kind && 1 === n.length
                ? (0, a.jsx)(j.E, {
                      variant: "body-md/normal",
                      color: "text-default",
                      selectable: !0,
                      children: (0, a.jsx)(ij, { text: n[0], commandNames: i }),
                  })
                : n.length > 0
                  ? (0, a.jsx)(iT, { bullets: n, commandNames: i })
                  : null,
            r.length > 0 ? (0, a.jsx)("div", { className: iN.PG, children: r }) : null,
        ],
    });
}
function iL(e) {
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
                                let n = t.map(am()).join("|");
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
        className: iN.aN,
        children: [
            (0, a.jsxs)("div", {
                className: iN.Lv,
                children: [(0, a.jsx)(v.D, { variant: "heading-lg/semibold", color: "text-strong", children: s }), u],
            }),
            m.map((e) => {
                let { experience: t, bullets: n } = e;
                return (0, a.jsxs)(
                    i.Fragment,
                    {
                        children: [
                            (0, a.jsx)("div", { className: iN.yF, role: "separator" }),
                            (0, a.jsx)(iP, {
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
                                                      ? [{ key: t, caption: T.intl.string(n), labels: l.map(af) }]
                                                      : [];
                                              })
                                              .map((e) => {
                                                  let { key: t, caption: n, labels: l } = e;
                                                  return (0, a.jsx)(
                                                      iE,
                                                      { caption: n, children: (0, a.jsx)(i_, { labels: l }) },
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
                                                        if (t.surfaces.includes(et.q7.APP_CHANNEL)) {
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
                                                            launchableAnywhere: t.surfaces.includes(et.q7.ACTIVITY),
                                                            usableInVoice: t.surfaces.includes(et.q7.VOICE_CHANNEL),
                                                        };
                                                    })(e, t);
                                                    if (null == n) return [];
                                                    let l = [];
                                                    n.channels.length > 0 &&
                                                        l.push(
                                                            (0, a.jsx)(
                                                                iE,
                                                                {
                                                                    className: iN.Iw,
                                                                    caption: T.intl.formatToPlainString(
                                                                        R.default.w8F5sy,
                                                                        { count: n.channels.length },
                                                                    ),
                                                                    children: (0, a.jsx)("ul", {
                                                                        className: iN.wZ,
                                                                        "data-conjure-plan-channels": "",
                                                                        children: n.channels.map((e) => {
                                                                            let { name: t, description: n } = e;
                                                                            return (0, a.jsx)(
                                                                                iM,
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
                                                                (0, a.jsx)(
                                                                    iE,
                                                                    {
                                                                        caption: T.intl.string(R.default.MY6UGJ),
                                                                        children: (0, a.jsx)(i_, { labels: r }),
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
                                                              iE,
                                                              {
                                                                  caption: T.intl.string(T.t["0hKkS+"]),
                                                                  children: (0, a.jsx)(iR, { commands: e.commands }),
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
var i$ = n(633075),
    iD = n(591410),
    iq = n(27399);
function iF(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, c.bG)([nN.default], () => nN.default.getCurrentUser()),
        r = i.useMemo(() => new i$.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, a.jsx)("div", {
              className: iq.H,
              children: (0, a.jsx)(iD.A, {
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
var iO = n(443863);
function iG(e) {
    let t,
        { projectId: n, src: l, alt: r, size: i, onError: s } = e,
        u =
            ((t = Math.min(1, 1872 / i.width, 970 / i.height)),
            { width: aj(i.width * t, 1920), height: aj(i.height * t, 1018) });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(at, { projectId: n }),
            (0, a.jsx)("div", {
                className: iO.nk,
                style: {
                    "--custom-conjure-plan-overlay-widget-top": ab,
                    "--custom-conjure-plan-overlay-widget-end": ay,
                    "--custom-conjure-plan-overlay-widget-width": u.width,
                    "--custom-conjure-plan-overlay-widget-height": u.height,
                },
                children: (0, a.jsx)("img", { src: l, alt: r, className: iO.M7, onError: s }),
            }),
        ],
    });
}
function iz(e, t, n) {
    Promise.all(
        t.map((t) => {
            let { id: n } = t;
            return (0, e3.PK)(e, n);
        }),
    ).then(
        (e) => {
            (0, ly.R)({
                items: e.map((e, n) => ({ type: "IMAGE", url: e, alt: t[n].alt })),
                startingIndex: n,
                shouldHideMediaOptions: !0,
                location: "ConjureChat",
            });
        },
        () => {},
    );
}
function iU(e) {
    let { projectId: t, design: n, alt: l } = e,
        { id: r } = n,
        { src: i, gone: s, handleError: u } = (0, lk._)(t, r);
    return s
        ? null
        : (0, a.jsx)(tZ.D, {
              className: iO.xX,
              onClick: () => iz(t, [{ id: r, alt: l }], 0),
              "aria-label": T.intl.string(R.default.TvAPIm),
              children: null == i ? null : (0, a.jsx)("img", { src: i, alt: l, className: iO.sN, onError: u }),
          });
}
function iB(e) {
    let { projectId: t, design: n, size: l } = e,
        { id: r } = n,
        { src: s, gone: u, handleError: d } = (0, lk._)(t, r),
        [m, f] = i.useState(!1),
        [h, g] = i.useState(!1),
        {
            slide: p,
            labels: x,
            pick: v,
        } = (function (e) {
            let { ready: t, paused: n = !1 } = e,
                l = (0, c.bG)([aB.Ay], () => aB.Ay.useReducedMotion),
                [r, a] = i.useState(0),
                [s, u] = i.useState(!1),
                o = t && !l && !n && !s,
                d = l && !s ? 0 : r;
            i.useEffect(() => {
                if (!o) return;
                let e = setInterval(() => a((e) => (e + 1) % aK.length), 4e3);
                return () => clearInterval(e);
            }, [o]);
            let m = i.useCallback((e) => {
                    (u(!0), a(e));
                }, []),
                f = i.useCallback(() => m(d), [m, d]);
            return { slide: d, labels: aK.map((e) => T.intl.string(e)), pick: m, hold: f };
        })({ ready: null != s, paused: m || h });
    if (u) return null;
    let b = T.intl.string(R.default.mjryK4),
        y = T.intl.string(R.default["rPpf5/"]);
    return (0, a.jsxs)("div", {
        className: iO.RM,
        onMouseEnter: () => f(!0),
        onMouseLeave: () => f(!1),
        onFocus: () => g(!0),
        onBlur: (e) => {
            e.currentTarget.contains(e.relatedTarget) || g(!1);
        },
        children: [
            (0, a.jsx)(tZ.D, {
                className: o()(iO.xX, iO.nj, { [iO.qQ]: 0 === p }),
                style: { "--custom-conjure-plan-overlay-scene-aspect": String(av) },
                onClick: () => iz(t, [{ id: r, alt: b }], 0),
                "aria-label": T.intl.string(R.default.TvAPIm),
                children:
                    null == s
                        ? null
                        : 0 === p
                          ? (0, a.jsx)("img", { src: s, alt: b, className: iO.Ac, onError: d })
                          : (0, a.jsx)(iG, { projectId: t, src: s, alt: y, size: l, onError: d }),
            }),
            (0, a.jsx)("div", {
                className: iO._4,
                role: "group",
                "aria-label": T.intl.string(R.default.EH36X6),
                children: x.map((e, t) =>
                    (0, a.jsx)(
                        tZ.D,
                        {
                            className: o()(iO.c, { [iO.Cw]: p === t }),
                            "aria-pressed": p === t,
                            onClick: () => v(t),
                            children: (0, a.jsx)(j.E, {
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
function iK(e) {
    let { projectId: t, id: n, alt: l, onOpen: r } = e,
        { src: i, gone: s, handleError: u } = (0, lk._)(t, n);
    return s
        ? null
        : (0, a.jsx)("li", {
              children: (0, a.jsx)(tZ.D, {
                  className: iO.ir,
                  onClick: r,
                  "aria-label": l,
                  children: null == i ? null : (0, a.jsx)("img", { src: i, alt: "", className: iO.rA, onError: u }),
              }),
          });
}
function iH(e) {
    let { projectId: t, proposal: n } = e,
        l = (n.reference_images ?? []).map((e, t) => {
            let { id: n } = e;
            return { id: n, alt: T.intl.formatToPlainString(R.default.xFgQ8L, { number: t + 1 }) };
        });
    return 0 === l.length
        ? null
        : (0, a.jsx)("section", {
              className: iO.Op,
              children: (0, a.jsxs)("div", {
                  className: iO.uW,
                  children: [
                      (0, a.jsx)(j.E, {
                          variant: "body-xs/medium",
                          color: "text-muted",
                          tag: "span",
                          children: T.intl.string(R.default.ubBJcy),
                      }),
                      (0, a.jsx)("ul", {
                          className: iO.Ft,
                          children: l.map((e, n) => {
                              let { id: r, alt: i } = e;
                              return (0, a.jsx)(iK, { projectId: t, id: r, alt: i, onOpen: () => iz(t, l, n) }, r);
                          }),
                      }),
                  ],
              }),
          });
}
function iV(e) {
    var t;
    let n,
        l,
        r,
        s,
        u,
        o,
        d,
        f,
        h,
        g,
        { projectId: p, proposal: x, version: v, onApprove: b } = e,
        { botExchanges: y } =
            ((n = al(x, et.q7.APPLICATION_COMMANDS)),
            (l =
                al(x, et.q7.BOT) || n
                    ? null != x.bot
                        ? x.bot.interaction
                        : n && x.commands.some(as)
                          ? "commands"
                          : null
                    : null),
            (r = i.useMemo(
                () =>
                    null == l
                        ? []
                        : ac(x, l, {
                              message: T.intl.string(R.default.J7qggf),
                              reply: T.intl.string(R.default.nqYtiy),
                              event: T.intl.string(R.default["05lU9W"]),
                          }),
                [x, l],
            )),
            { botInteraction: l, botExchanges: r }),
        k = (function (e, t) {
            let { widget_config: n, widget_preview: l = a_ } = t,
                r = (0, c.bG)([aN.default], () => aN.default.locale),
                a = (0, c.bG)([eT.Ay], () => {
                    let t = eT.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [n, l] = i.useState(aE);
                    return (
                        i.useEffect(() => {
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
                                                          ...aM(n),
                                                          ...(null != n.fallback ? { fallback: aM(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let a = aw.uW.safeParse(r);
                                  if (!a.success) return null;
                                  let i = a.data;
                                  return null == i[aC.m.WIDGET_TOP] || null == i[aC.m.WIDGET_BOTTOM]
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
                                                                    type: aw.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof a
                                                                ? (r[e] = { type: aw.oG.NUMBER, value: a })
                                                                : (r[e] = { type: aw.oG.STRING, value: a });
                                                    return r;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(aR),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: aI,
                                            },
                                        };
                              })(n, l, s, r),
                    [n, l, s, r],
                );
            return i.useMemo(() => (null == a || null == u ? null : { applicationId: a, rendererProps: u }), [a, u]);
        })(p, x),
        w = v?.superseded === !0,
        A = x.what_changed?.trim() ?? "",
        S =
            ((t = x.commands),
            i.useMemo(
                () =>
                    t
                        .filter((e) => "/" === ah(e))
                        .map((e) => {
                            let { name: t } = e;
                            return t;
                        }),
                [t],
            )),
        C =
            ((u =
                null == (s = ax(x))
                    ? null
                    : (x.experiences?.find((e) => {
                          let { surfaces: t } = e;
                          return t.includes(s);
                      })?.id ?? null)),
            (d = null != (o = x.design_image) && o.id !== ak(x)?.id ? o : null),
            (f = ak(x)),
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
                ui: null != d && null != h ? { experienceId: h, design: d } : null,
                overlay:
                    null != f && null != g ? { experienceId: g, design: f, size: el(x.overlay_widget ?? null) } : null,
            }),
        N = i.useMemo(
            () =>
                x.commands.some(as)
                    ? ac({ ...x, bot: void 0 }, "commands", {
                          message: T.intl.string(R.default.J7qggf),
                          reply: T.intl.string(R.default.nqYtiy),
                          event: T.intl.string(R.default["05lU9W"]),
                      })
                    : [],
            [x],
        ),
        I = (0, c.bG)([eT.Ay], () => eT.Ay.getProject(p)?.name, [p]),
        E =
            w && null != v
                ? T.intl.formatToPlainString(R.default.YZ3qJs, { version: v.version })
                : T.intl.string(R.default["3b6e7o"]),
        _ = w ? (0, a.jsx)(t7, { children: T.intl.string(R.default.hF2c41) }) : null;
    return (0, a.jsxs)(t9, {
        title: E,
        meta: _,
        superseded: w,
        showLabel: T.intl.string(R.default.yD8EJS),
        hideLabel: T.intl.string(R.default.nSPGNb),
        bodyClassName: iO.rf,
        "data-conjure-plan-card": !0,
        children: [
            (0, a.jsx)("div", {
                className: iO.Qs,
                children: (0, a.jsx)(iL, {
                    appName: I ?? x.experiences?.[0]?.name ?? "",
                    intro: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(j.E, {
                                variant: "body-md/normal",
                                color: "text-default",
                                selectable: !0,
                                children: (0, a.jsx)(ij, { text: x.summary, commandNames: S }),
                            }),
                            (0, a.jsx)(iH, { projectId: p, proposal: x }),
                            "" !== A
                                ? (0, a.jsxs)("section", {
                                      className: iO.uW,
                                      children: [
                                          (0, a.jsx)(j.E, {
                                              variant: "body-xs/medium",
                                              color: "text-muted",
                                              tag: "span",
                                              children: T.intl.string(R.default.iNS4dl),
                                          }),
                                          (0, a.jsx)(j.E, {
                                              variant: "body-md/normal",
                                              color: "text-default",
                                              selectable: !0,
                                              children: (0, a.jsx)(ij, { text: A, commandNames: S }),
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
                                            ? (0, a.jsx)(iU, {
                                                  projectId: p,
                                                  design: C.ui.design,
                                                  alt: T.intl.string(null == (t = ax(x)) ? R.default["3/aHX6"] : ag[t]),
                                              })
                                            : null,
                                    l =
                                        e.id === C.overlay?.experienceId
                                            ? (0, a.jsx)(iB, {
                                                  projectId: p,
                                                  design: C.overlay.design,
                                                  size: C.overlay.size,
                                              })
                                            : null;
                                return null == n && null == l ? null : (0, a.jsxs)(a.Fragment, { children: [n, l] });
                            }
                            case "user_widget":
                                return null != k ? (0, a.jsx)(iF, { ...k }) : null;
                            case "automod":
                                return null != x.automod && x.automod.examples.length > 0
                                    ? (0, a.jsx)(a6, { automod: x.automod })
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
                                        (r = l.some((e) => "command" === e.kind || au(e))),
                                        0 === n.length || r ? l.slice(0, 3) : [...l.slice(0, 2), n[0]]
                                    );
                                })(e, y, N);
                                return t.length > 0 ? (0, a.jsx)(ip, { projectId: p, exchanges: t }) : null;
                            }
                        }
                    },
                    commandNames: S,
                }),
            }),
            null == b || w
                ? null
                : (0, a.jsxs)("div", {
                      className: iO.qr,
                      children: [
                          (0, a.jsx)(m.$, {
                              variant: "primary",
                              size: "sm",
                              text: T.intl.string(R.default["6S+wRM"]),
                              onClick: b,
                          }),
                          (0, a.jsx)(j.E, {
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
var iW = n(289565);
function iX(e) {
    let { onDismiss: t, children: n } = e;
    return null == t
        ? (0, a.jsx)("div", { className: iW.m, children: n })
        : (0, a.jsxs)("div", {
              className: iW.Z,
              children: [
                  n,
                  (0, a.jsx)(e4.m, {
                      text: T.intl.string(T.t.WAI6xu),
                      asContainer: !0,
                      children: (0, a.jsx)(ta.K, {
                          "aria-label": T.intl.string(T.t.WAI6xu),
                          icon: tB.XSmallIcon,
                          variant: "icon-only",
                          size: "sm",
                          onClick: t,
                      }),
                  }),
              ],
          });
}
function iQ(e, t) {
    return null != t && ("new_ui" === e.reason ? !0 === t.newUiUnpublished : "not_live" === t.publishState);
}
function iZ(e, t) {
    return null != e && iQ(t, e.status);
}
let iY = new WeakMap();
var iJ = n(175841),
    i0 = n(189213);
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
                    "" !== (n = t.trim().slice(0, 256)) && (0, lU.Fz)(e, n);
                },
            };
        })(t),
        o = T.intl.string(R.default.IqkF07);
    return (0, a.jsx)(i0.a, {
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
        children: (0, a.jsx)(nb.f, {
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
var i2 = n(54100);
function i3(e) {
    let { rating: t } = e;
    return (0, a.jsxs)("div", {
        className: i2.mo,
        role: "status",
        children: [
            (0, a.jsx)(iJ.SparklesIcon, { size: "xs", color: "currentColor", className: i2.dQ, "aria-hidden": !0 }),
            (0, a.jsx)(j.E, {
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
function i4(e) {
    let { projectId: t, turnId: n, cta: l, status: r, placement: s } = e,
        { rating: u, rate: c } = (function (e) {
            let { projectId: t, turnId: n } = e;
            i.useSyncExternalStore(lJ, () => lQ);
            let { publishReason: l, surface: r, placement: a, publishState: s } = l0(e);
            return (
                i.useEffect(() => {
                    !(function (e) {
                        if (null != lY(e.projectId, e.turnId)) return;
                        let t = lz.w.get(lK) ?? {};
                        t[e.projectId]?.[e.turnId] !== !0 &&
                            ((0, lU.rv)(e),
                            lz.w.set(lK, { ...t, [e.projectId]: { ...t[e.projectId], [e.turnId]: !0 } }));
                    })({ projectId: t, turnId: n, publishReason: l, surface: r, placement: a, publishState: s });
                }, [t, n, l, r, a, s]),
                {
                    rating: lY(t, n),
                    rate(t) {
                        let n = (function (e) {
                            let { rating: t, ...n } = e,
                                { projectId: l, turnId: r } = n;
                            if (null != lY(l, r)) return null;
                            let a = { ...l0(n), rating: t };
                            (0, lU.gw)(a);
                            let i = lZ();
                            return (lz.w.set(lB, { ...i, [l]: { ...i[l], [r]: t } }), lQ++, lX.forEach((e) => e()), a);
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
        v = i.useId(),
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
        null != t && (0, K.qf)((e) => (0, a.jsx)(i1, { ...e, rating: t }));
    }
    return (0, a.jsxs)("div", {
        className: i2.nM,
        onMouseLeave: () => h(null),
        children: [
            (0, a.jsxs)("span", {
                className: i2.WD,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(j.E, {
                        id: v,
                        variant: "body-xs/medium",
                        color: "text-muted",
                        className: o()(i2.Pf, { [i2.KH]: null == k }),
                        children: T.intl.string(R.default.mTV326),
                    }),
                    lH.map((e) =>
                        (0, a.jsx)(
                            j.E,
                            {
                                variant: "body-xs/medium",
                                color: "text-default",
                                className: o()(i2.Pf, { [i2.KH]: k === e }),
                                children: lW(e),
                            },
                            e,
                        ),
                    ),
                ],
            }),
            (0, a.jsx)("div", {
                role: "radiogroup",
                "aria-labelledby": v,
                className: i2.uf,
                children: lH.map((e) => {
                    let t = null != k && e <= k,
                        n = t ? lO.StarIcon : lG.StarOutlineIcon;
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
                                    "aria-label": T.intl.formatToPlainString(R.default.NU7Dex, {
                                        rating: e,
                                        label: lW(e),
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
        l = (0, eK.A)(t, n);
    return (0, a.jsx)(m.$, {
        variant: "primary",
        size: "sm",
        loading: n.publishing && !n.showsProgress,
        text: n.label,
        onClick: () => l("card"),
    });
}
function i7(e) {
    let { projectId: t, turnId: n, cta: l } = e,
        r = (0, eB.Ay)(t),
        i = (0, eV.CF)();
    return null != r && iZ(r, l)
        ? (0, a.jsx)(iX, {
              children: (0, a.jsxs)(nU.B, {
                  gap: 12,
                  align: "start",
                  children: [
                      (0, a.jsx)(i5, { projectId: t, publish: r }),
                      null != r.failure
                          ? (0, a.jsx)(j.E, {
                                variant: "body-sm/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: r.failure,
                            })
                          : null,
                      null == n || i
                          ? null
                          : (0, a.jsx)(i4, {
                                projectId: t,
                                turnId: n,
                                cta: l,
                                status: r.status,
                                placement: "publish_card",
                            }),
                  ],
              }),
          })
        : null;
}
var i9 = n(303345),
    i8 = n(44255),
    i6 = n(416473),
    se = n(289830);
function st(e) {
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
                [r, a] = i.useState("idle"),
                [s, u] = i.useState(null),
                o = i.useCallback(async () => {
                    (a("sending"), u(null));
                    try {
                        (await (0, i6.Du)(e, t.trigger), a("on"));
                    } catch (e) {
                        (u(e instanceof i9.A ? e.message : T.intl.string(R.default.EXceox)), a("error"));
                    }
                }, [e, t.trigger]),
                [d] = i.useState(() => Date.now()),
                m =
                    t.next_run_at > d
                        ? T.intl.formatToPlainString(R.default.orZDqY, { time: (0, i8.TP)(t.next_run_at) })
                        : null;
            return {
                summary: (0, i8.lD)(t.trigger),
                firstPublish: m,
                status: r,
                error: s,
                onTurnOn: l && n && "on" !== r ? o : void 0,
            };
        })(t, n, l);
    return (0, a.jsx)(t4, {
        title: T.intl.string(R.default.ZtfX9V),
        children: (0, a.jsxs)("div", {
            className: se.r,
            children: [
                (0, a.jsxs)("div", {
                    className: se.z,
                    children: [
                        (0, a.jsx)(j.E, { variant: "body-md/medium", children: r.summary }),
                        null != r.firstPublish
                            ? (0, a.jsx)(j.E, {
                                  variant: "body-sm/normal",
                                  color: "text-muted",
                                  children: r.firstPublish,
                              })
                            : null,
                        (0, a.jsx)(j.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: T.intl.string(R.default.cxNHma),
                        }),
                        "on" === r.status
                            ? (0, a.jsx)(j.E, {
                                  variant: "body-sm/normal",
                                  role: "status",
                                  children: T.intl.string(R.default.k4IRsm),
                              })
                            : null,
                        "error" === r.status
                            ? (0, a.jsx)(j.E, {
                                  variant: "body-sm/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: r.error,
                              })
                            : null,
                    ],
                }),
                null != r.onTurnOn
                    ? (0, a.jsx)(m.$, {
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
var sn = n(989271);
function sl(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = i.useId(),
        s = null == l;
    return (0, a.jsxs)(tZ.D, {
        className: o()(sn.nM, { [sn.f1]: s, [sn.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": T.intl.formatToPlainString(R.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: sn.jo,
                children: [
                    n
                        ? (0, a.jsx)(f.CheckmarkSmallIcon, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: sn.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(j.E, {
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
                : (0, a.jsx)(j.E, {
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
    return (0, a.jsx)(t4, {
        title: T.intl.string(R.default["wx/o8Y"]),
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
        x = i.useMemo(() => (0, tV.Jf)(n, l), [n, l]),
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
            className: na.pj,
            "data-live": !1,
            children: (0, a.jsx)(tJ.A, {
                glyph: (0, a.jsx)(rN.StopIcon, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: T.intl.string(R.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = l ? void 0 : (p ?? (h ? (x.turn?.durationMs ?? u) : void 0)),
        b = f ? ((0, tV.lt)(n) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        w = r$(k.map((e) => e.taskId)),
        A = !g && (l || k.some((e) => "running" === e.task.status)),
        S = rz(k);
    return (0, a.jsxs)("ol", {
        className: na.pj,
        "data-live": A,
        children: [
            (0, a.jsx)(tQ.Ay, {
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
                let l = null != e.task.helperMark ? rL(e.task.helperMark) : void 0,
                    r = l ?? w.get(e.taskId);
                return null == r
                    ? null
                    : (0, a.jsx)(
                          rU,
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
            (0, a.jsx)(r1, { projectId: t, steps: n, tree: x, segment: m }),
            y
                ? (0, a.jsx)("li", {
                      className: na.YO,
                      children: (0, a.jsx)(nl, { todos: b, provisional: d, agents: S, live: r, superseded: s }),
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
            turnId: v,
            onPickIdea: b,
            pickedIdeaIds: y,
            onApprovePlan: k,
            sideReply: w = !1,
            sideReplyAcknowledges: A,
            hoistedProse: S = !1,
            hoistedAttachmentsHost: C,
            restoreProposal: N,
            onRestoreProposal: I,
            publishScheduleProposal: E,
            publishScheduleProposalCurrent: _ = !1,
        } = e,
        M = i.useMemo(
            () => rI({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != c && c.length > 0 }),
            [n, l, r, c],
        ),
        { streamed: P, lastStreamedMessage: L, showsClosingMessage: $, closingContent: D } = M,
        q = (S ? C : void 0) ?? M.attachmentsHost,
        F = $ && !S,
        O = null == c ? null : (0, a.jsx)(sa.A, { projectId: t, attachments: c }),
        G = null == O ? null : (0, a.jsx)("div", { className: na.MT, children: O }),
        z = w
            ? (0, a.jsx)(j.E, {
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
                  })(A),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: na.ue,
        children: [
            P.length > 0 && !S
                ? (0, a.jsx)("ol", {
                      className: na.dO,
                      children: P.filter((e) => "todos" !== e.type).map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: na.DV,
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
                ? (0, a.jsx)(iV, { projectId: t, proposal: r, version: s, onApprove: k })
                : F
                  ? (0, a.jsxs)("div", {
                        className: o()(na.ky, su.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: o()(so.PT, na.cW),
                                children: (0, si.U)(D, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === q ? G : null,
                            z,
                        ],
                    })
                  : null,
            null != d
                ? (0, a.jsx)("div", {
                      className: o()(na.ky, na.k1, su.XR, { [ss.O]: null != f && "open" === h }),
                      children: (0, a.jsx)(ra, {
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
                      className: o()(na.ky, na.k1, su.XR),
                      children: (0, a.jsx)(rx, { projectId: t, request: g, askId: p }),
                  })
                : null,
            "standalone" !== q && ("closing" !== q || F) ? null : O,
            null != x ? (0, a.jsx)(i7, { projectId: t, turnId: v ?? null, cta: x }) : null,
            null != u && u.length > 0 ? (0, a.jsx)(sr, { ideas: u, pickedIdeaIds: y, onPick: b }) : null,
            null != N ? (0, a.jsx)(r3, { proposal: N, onRestore: I }) : null,
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
        name: T.intl.string(R.default.xhFsEP),
        thumb: (0, a.jsxs)("span", {
            className: tv.PA,
            "aria-hidden": !0,
            children: [
                (0, a.jsx)(sb.ImageIcon, { size: "sm", color: "currentColor" }),
                (0, a.jsx)("span", {
                    className: tv.OY,
                    children: (0, a.jsx)(h.PencilIcon, {
                        size: "custom",
                        width: 10,
                        height: 10,
                        color: "currentColor",
                    }),
                }),
            ],
        }),
        subText: (0, a.jsx)(j.E, {
            variant: "body-xs/normal",
            color: "text-muted",
            children: T.intl.string(R.default["9y+Dae"]),
        }),
        children: (0, a.jsx)("button", {
            type: "button",
            className: sw.o1,
            onClick: () => (0, I.xU)(t),
            "aria-label": T.intl.string(R.default.N852dj),
            children: (0, a.jsx)(sy.CircleXIcon, { size: "xs", color: "currentColor" }),
        }),
    });
}
function sS(e) {
    let { send: t } = e;
    return (0, a.jsxs)(sk.p, {
        compact: !0,
        name: T.intl.string(R.default.xhFsEP),
        thumbSrc: t.thumbUrl,
        subText:
            "failed" === t.status
                ? (0, a.jsx)(j.E, {
                      variant: "body-xs/normal",
                      color: "text-feedback-critical",
                      children: T.intl.string(R.default["3PeGo2"]),
                  })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(b.y, { type: b.t.SPINNING_CIRCLE_SIMPLE, className: sw.Rk }) : null,
            "failed" === t.status
                ? (0, a.jsx)(nG.Q, {
                      variant: "secondary",
                      textVariant: "body-sm/medium",
                      text: T.intl.string(R.default["WFJ/vb"]),
                      onClick: t.retry,
                  })
                : null,
        ],
    });
}
var sC = n(587157),
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
            "aria-label": T.intl.string(R.default.Vb3sUg),
            children: [
                h.length > 0
                    ? (0, a.jsx)(sG, { titleId: o, title: T.intl.string(R.default.Vb3sUg), children: h })
                    : null,
                g.length > 0
                    ? (0, a.jsx)(sG, { titleId: d, title: T.intl.string(R.default.zA5KLM), children: g })
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
            (0, a.jsx)(j.E, { id: t, variant: "body-xs/semibold", color: "text-muted", className: sF.Gf, children: n }),
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
let sZ = (0, aq.createChannelRecord)({ id: "1", type: ej.rbe.DM });
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
    let r = new RegExp(rk.$c.source).exec(l.raw)?.[1];
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
    return null != t && (0, e1.vq)(e) && t.contains(e);
}
var s7 = n(497437),
    s9 = n(465410);
let s8 = "body-md/normal",
    s6 = null;
function ue(e) {
    let { text: t, offering: n, typed: l } = e,
        [r, s] = i.useState(t),
        u = i.useRef(null),
        d = i.useRef(null),
        m = i.useRef(0),
        [f, h] = i.useState(0),
        [g, p] = i.useState(0),
        [x, v] = i.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
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
            v({
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
        S = i.useCallback(() => {
            (w(A.current ? (n ? "through" : "out") : n ? "in" : null), y((e) => e + 1));
        }, [n]);
    i.useEffect(() => {
        A.current = n;
    }, [n, t]);
    let C = "in" === k ? x.backFrom : x.frontFrom,
        N = "out" === k ? x.frontTo : x.backTo,
        I = (0, c.bG)([aB.Ay], () => aB.Ay.useReducedMotion),
        E = t === T.intl.string(R.default.Zc7gML),
        _ = r === t && E;
    function M(e, t, n) {
        let l = null != n;
        return (0, a.jsx)("span", {
            ref: n,
            className: o()(s7.VT, { [s7.qk]: l }),
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
            children: (0, a.jsx)(sh.e, { shortcut: "tab", className: s7.xT, keyClassName: e }),
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(sm.o, {
                text: t,
                variant: s8,
                delay: null,
                duration: 1e3,
                trailingWidth: g,
                className: o()(s7.xM, { [s7.s2]: l }),
                onStart: S,
                onComplete: () => s(t),
            }),
            M(s7.IS, n || (!I && "out" === k), u),
            (0, a.jsx)("span", {
                ref: d,
                className: s7.QI,
                "aria-hidden": !0,
                children: (0, a.jsx)(j.E, { variant: s8, tag: "span", children: t }),
            }),
            _
                ? (0, a.jsxs)("span", {
                      className: s7.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, a.jsx)(j.E, { variant: s8, tag: "span", className: s7.xM, children: t }),
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
                visible: S = !0,
            } = e,
            C = n && !l,
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
                                        for (let e of t.text.matchAll(rk.$c)) {
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
            })(rS.A.getDraft(t)),
            [E, _] = i.useState(() => sJ(N));
        (0, sI.N$)(E);
        let M = i.useRef(E),
            [P, L] = i.useState(null),
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
            F.current !== t && ((F.current = t), s0(N, rS.A.getDraft(t)));
        }, [N, t]);
        let O = (0, c.bG)([aB.Ay], () => aB.Ay.isSubmitButtonEnabled),
            [z, U] = i.useState(!1),
            [B, K] = i.useState(!1);
        (i.useEffect(() => {
            s ? K(!1) : (z && K(!0), U(!1));
        }, [s, z]),
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
            } = (0, e9.FM)({ projectId: t, surface: "chat", onUploadFile: h }),
            Y = (0, I.fc)(t),
            J = (0, I.bE)(t),
            ee = i.useRef(J);
        i.useEffect(() => {
            let e = ee.current;
            ((ee.current = J), C && null != e && null != J && J !== e && sv.VW.focus(N));
        }, [J, C, N]);
        let en = "" !== E.trim() || H.length > 0 || y || Y,
            el = C && en && Q,
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
            ed = i.useMemo(() => (null != P && C ? (0, sE.OG)(P, P.length) : null), [P, C]),
            em = ed?.start ?? null;
        i.useEffect(() => {
            null == em ? eu(null) : (0, s_.IP)(t);
        }, [em, t]);
        let ef = em === es ? null : ed,
            eh = (function (e, t) {
                let n = (0, c.bG)([eT.Ay], () => eT.Ay.getProject(e), [e]),
                    { creator: l, collaborators: r } = (0, sP.yv)(n),
                    a = (0, c.bG)([sM.default], () => sM.default.getId()),
                    s = null != n && (0, et.pL)(n) ? n.guild_id : void 0,
                    u = t?.toLowerCase() ?? null;
                return (
                    i.useEffect(() => {
                        null != s && null != u && sR.A.requestMembers(s, u, 100);
                    }, [s, u]),
                    (0, c.yK)(
                        [lt.Ay, ln.A, nN.default],
                        () => {
                            if (null == u) return [];
                            let e = null != s ? ln.A.getGuild(s) : null,
                                t = (t) => (0, sE.mO)(t, u, null != e ? lt.Ay.getNick(e.id, t.id) : null),
                                i = new Set(n?.collaborator_role_ids ?? []),
                                o = null != e && i.has(sT.default.castGuildIdAsEveryoneGuildRoleId(e.id)),
                                c =
                                    null == e
                                        ? []
                                        : lt.Ay.getMemberIds(e.id)
                                              .map((e) => nN.default.getUser(e))
                                              .filter(
                                                  (n) =>
                                                      null != n &&
                                                      t(n) &&
                                                      (o ||
                                                          (lt.Ay.getMember(e.id, n.id)?.roles ?? []).some((e) =>
                                                              i.has(e),
                                                          ) ||
                                                          ll.$3({
                                                              permission: ej.xBc.MANAGE_GUILD,
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
            eb = i.useId(),
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
                              if (null == t || !(0, no.C)(t)) return null;
                              let n = t.history.present,
                                  l = t.keptStill ?? (0, I.C)(e);
                              return (
                                  (0, I.My)(e),
                                  function (t) {
                                      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                          { nonce: a, messageKey: i } = (0, eG.Wx)(e, t, r),
                                          s = { projectId: e, nonce: a, job: null, thumbUrl: null };
                                      (nc.set(i, s),
                                          (s.job = (0, no.B)({
                                              capture: (t) => (0 === t ? l : (0, I.C)(e)),
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
                                              send: (n) => (0, eG.dv)(e, t, [...r, n], { nonce: a }),
                                              update: (e, t) => {
                                                  (null != t &&
                                                      null == s.thumbUrl &&
                                                      (s.thumbUrl = URL.createObjectURL(t)),
                                                      nm(i, {
                                                          status: e,
                                                          thumbUrl: s.thumbUrl,
                                                          retry: () => s.job?.retry(),
                                                      }),
                                                      "sent" === e &&
                                                          (nc.delete(i),
                                                          window.setTimeout(() => {
                                                              (nm(i, null),
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
                null != m && !z && (U(!0), m(), C && sv.VW.focus(N));
            }, [m, z, C, N]);
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
                            !(0, G._c)(n).active &&
                            ((r = t.target),
                            (i = l?.current),
                            (s = e),
                            ((0, e1.vq)(r) && r !== document.body && r !== document.documentElement
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
        })({ active: s && null != m && S, projectId: t, scopeRef: f, onEscape: eA });
        let eS = (s && null != m) || B,
            eC = null == v || "" !== E || !C || u || y ? null : v,
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
                    if ("Tab" === e.key && !e.shiftKey && null != eC) {
                        (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), D(eC));
                        return;
                    }
                    if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                        null != g && (e.preventDefault(), g());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), ek());
                },
                [ek, g, s, m, eA, eC, D, ex, eg.length, ev, ey, ef, t],
            ),
            eI = i.useCallback(
                (e) => {
                    C && W(e);
                },
                [C, W],
            );
        (0, sj.Vo)({
            event: ej.jej.GLOBAL_CLIPBOARD_PASTE,
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
            [eP, eL] = i.useState(!1);
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
            eD = eP ? ` ${s7.EB}` : "",
            eq = u
                ? T.intl.string(R.default.qqlUiW)
                : l
                  ? T.intl.string(R.default.Z0hyNL)
                  : C
                    ? y
                        ? T.intl.string(R.default.knUjL3)
                        : Y
                          ? T.intl.string(R.default["6rXxwa"])
                          : b
                            ? T.intl.string(R.default.VxH5vv)
                            : j
                              ? T.intl.string(R.default.IevBEw)
                              : T.intl.string(s ? R.default["0BJa/0"] : r ? R.default.dDDSuF : R.default.TEeU7z)
                    : T.intl.string(R.default.zZ9NgM),
            eF = i.useRef(0),
            eO = i.useRef(null),
            ez = i.useCallback((e) => {
                if ((eO.current?.disconnect(), null == e)) return;
                eF.current = e.clientWidth;
                let t = new ResizeObserver(() => {
                    eF.current = e.clientWidth;
                });
                (t.observe(e), (eO.current = t));
            }, []),
            eU = i.useId(),
            eB = i.useId(),
            eK = null != eC,
            eH = er ?? eC ?? eq,
            eV = "" === E && "" !== eH;
        return (0, a.jsxs)("form", {
            onSubmit: ew,
            className: s7.DA,
            children: [
                ex
                    ? (0, a.jsx)(sO, {
                          id: eb,
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
                              H.map((e) => (0, a.jsx)(e9.Nl, { draft: e, onRemove: X }, e.localId)),
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
                            disabled: !C,
                            buttonClassName: `${s7.Y0} ${s7.nu}`,
                            iconClassName: s7.Qu,
                            onAddFiles: V,
                            onImport: p,
                            onSendToOtherProjects: null != x ? e_ : void 0,
                        }),
                        eV
                            ? (0, a.jsx)("div", {
                                  ref: ez,
                                  className: s7.ar,
                                  "aria-hidden": "true",
                                  children: (0, a.jsx)(
                                      ue,
                                      { text: eH, offering: eK && null == er, typed: null != er },
                                      S ? "visible" : "hidden",
                                  ),
                              })
                            : null,
                        (0, a.jsx)(t1.A, { id: eB, children: T.intl.string(R.default.ldNl9x) }),
                        (0, a.jsx)(rk.Fu.Provider, {
                            value: t,
                            children: (0, a.jsx)(sx.A, {
                                editor: N,
                                containerClassName: o()(s7.sq, s9.dv),
                                className: s7.jp,
                                readOnly: !C,
                                canFocus: C,
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
                                "aria-controls": ex ? eb : void 0,
                                "aria-activedescendant": ex ? ((0, s$.aI)(ev) ?? void 0) : void 0,
                            }),
                        }),
                        eV ? (0, a.jsx)(t1.A, { id: eU, children: eq }) : null,
                        (0, a.jsx)("div", {
                            className: s7.Sz,
                            onMouseDown: eS ? ur : void 0,
                            children: eS
                                ? (0, a.jsx)(e4.m, {
                                      text: T.intl.string(R.default.wiguT0),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)("button", {
                                          type: "button",
                                          className: `${s7.Y0} ${s7.$E} ${s7.PG}`,
                                          disabled: z || !s,
                                          onClick: eA,
                                          "aria-label": T.intl.string(R.default.wiguT0),
                                          children: (0, a.jsx)(rN.StopIcon, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : w?.tierSettings != null && null != A
                                  ? (0, a.jsx)(sC.A, {
                                        settings: w.tierSettings,
                                        tiers: w.tiers,
                                        choices: w.choices,
                                        disabled: !C,
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
                                          "aria-label": T.intl.string(R.default.rxW2cl),
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
            if (!(0, tW.BL)(n) || "plan_implemented" === n.kind) return null;
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
        [m, f] = i.useState(() => aB.Ay.useReducedMotion || (null != l && d?.current.has(l) === !0)),
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
    let e = lz.w.get(ug);
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
    return (0, c.bG)([ri.A], () => null != n && n.length > 0 && rt({ keys: n }, ri.A.getSettings(e)), [n, e]) &&
        null != n
        ? { keys: n, note: T.intl.string(R.default.F2yVHg) }
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
var uS = n(292771);
function uC(e) {
    let { presentation: t, render: n } = e,
        l = (0, c.bG)([aB.Ay], () => aB.Ay.useReducedMotion),
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
            className: uS.wg,
            children: r.map((e) =>
                (0, a.jsx)(
                    "div",
                    {
                        "data-tip-layer": e.leaving ? "leaving" : "active",
                        "aria-hidden": e.leaving || void 0,
                        className: o()(uS.qd, e.leaving ? uS.dv : uS.Hu),
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
            (0, a.jsx)(j.E, {
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
                (0, a.jsx)(j.E, {
                    tag: "div",
                    variant: "body-sm/normal",
                    color: "text-muted",
                    className: u_.Qq,
                    children: l,
                }),
                null != n
                    ? (0, a.jsx)("div", {
                          className: u_.X8,
                          children: (0, a.jsx)(e4.m, {
                              text: T.intl.string(T.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(ta.K, {
                                  "aria-label": T.intl.string(T.t.WAI6xu),
                                  icon: tB.XSmallIcon,
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
        n = i.useContext(eB.bI);
    return (0, a.jsx)(uM, {
        icon: iA.ShieldIcon,
        children: T.intl.format(R.default["0S9HY8"], {
            onReview: async () => {
                null != n && (await (0, eB.vL)(t, n.guildId));
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
                          children: (0, a.jsx)(e4.m, {
                              text: T.intl.string(T.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(ta.K, {
                                  "aria-label": T.intl.string(T.t.WAI6xu),
                                  icon: tB.XSmallIcon,
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
    return (0, a.jsx)(j.E, {
        tag: "div",
        variant: "body-md/semibold",
        color: "text-strong",
        className: uP.DD,
        children: t,
    });
}
function uD(e) {
    let { children: t } = e;
    return (0, a.jsx)(j.E, {
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
        r = (0, eK.A)(t, n);
    return (0, a.jsx)(uM, {
        icon: uF.UploadIcon,
        onDismiss: l,
        children: T.intl.format(R.default.fWfeZ8, { onPublish: () => r("outdated_notice") }),
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
                (null != n.publishCta && iZ(l, n.publishCta))
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
                    (0, a.jsx)(u$, { children: T.intl.string(R.default.OJlbhX) }),
                    (0, a.jsx)(uD, { children: T.intl.string(R.default["3vJBni"]) }),
                    (0, a.jsx)(uq, {
                        children: (0, a.jsx)(m.$, {
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
var uz = n(817921);
function uU(e) {
    let { projectId: t, messages: n, draftHasText: l, onAskForIdeas: r } = e,
        s = (function (e, t, n, l, r) {
            let a = (function (e, t, n, l, r) {
                let a,
                    s = (0, eB.Ay)(e),
                    u = (0, c.bG)([nN.default], () => nN.default.getCurrentUser()?.id),
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
                                if ((0, tW.BL)(n)) return n;
                                if (!(0, tW.B0)(e, t)) break;
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
                    y = (0, c.bG)([ri.A], () => b > 0 && null == ri.A.getSettings(e), [b, e]),
                    k = (0, ui.WT)(e);
                return {
                    projectId: e,
                    turn: h,
                    publish: s,
                    draftHasText: n,
                    agentIdle:
                        (null == (a = (0, tW.Ji)(t)) || !!(0, tW.B0)(t, t.lastIndexOf(a))) &&
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
                                                  lz.w.set(ug, {
                                                      ...l,
                                                      anchor: { ...l.anchor, [t]: { ...l.anchor[t], [e.id]: n } },
                                                  });
                                                  break;
                                              case "app":
                                                  lz.w.set(ug, {
                                                      ...l,
                                                      app: { ...l.app, [t]: [...(l.app[t] ?? []), e.id] },
                                                  });
                                                  break;
                                              case "forever":
                                                  lz.w.set(ug, { ...l, forever: [...l.forever, e.id] });
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
                      return (0, a.jsx)(uC, { presentation: n, render: (e) => t.render(e, l) }, t.id);
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
                            (0, a.jsx)(j.E, {
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
                    (0, a.jsxs)(j.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: [
                            r.body,
                            null != s
                                ? (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          " ",
                                          (0, a.jsx)(nG.Q, {
                                              text: s.text,
                                              textVariant: "body-sm/medium",
                                              disabled: s.disabled,
                                              onClick: () => {
                                                  var e;
                                                  return s.confirm
                                                      ? ((e = s.onPress),
                                                        void (0, K.mM)(() =>
                                                            Promise.resolve((t) =>
                                                                (0, a.jsx)(uK.u, {
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
                        ? (0, a.jsx)(j.E, { variant: "body-xs/normal", color: "text-muted", children: r.note })
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
            T.intl.format(n ? R.default.esEGL5 : R.default["XrN+Bg"], {
                onOpen: () => uZ.A.open(t, ej.BEX.GUILD_AUTOMOD),
            }),
        ],
    });
}
var u0 = n(976860);
function u1(e) {
    return (0, c.bG)([eT.Ay, aL.A], () => {
        let t = eT.Ay.getProject(e);
        return null == t ? "" : (aL.A.getApplication(t.application_id)?.name ?? t.name);
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
            (i = (0, c.bG)([eT.Ay, ln.A], () => {
                let e = eT.Ay.getProject(s);
                return null == e || "guild" !== e.install_scope || null == e.guild_id
                    ? null
                    : (ln.A.getGuild(e.guild_id) ?? null);
            }))
                ? null
                : { guildId: i.id, name: i.name },
        m = (0, c.cf)([eT.Ay, ez.A, ln.A, uY.A], () => {
            let e = eT.Ay.getProject(s);
            if (null == e || "guild" !== e.install_scope || null == e.guild_id) return { automod: !1, guildId: null };
            let t =
                    e.supported_surfaces?.includes(et.q7.AUTOMOD) === !0 ||
                    ez.A.getPublishStatus(s)?.surface === "automod",
                n = ln.A.getGuild(e.guild_id),
                l = null != n && uY.A.can(ej.xBc.MANAGE_GUILD, n);
            return { automod: t, guildId: t && l ? e.guild_id : null };
        });
    return (0, a.jsxs)(j.E, {
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
            let n = s.useContext(eB.bI)?.guildId ?? null,
                l = t.published_revision ?? null,
                { sent: r, canOffer: a } = (0, c.cf)(
                    [ez.A, eT.Ay],
                    () => {
                        let r = ez.A.getPublishStatus(e),
                            a = eT.Ay.getProject(e);
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
                                (0, eT.jf)(a),
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
                      ? T.intl.format(R.default["35VEu5"], {
                            sentHook: (e, t) =>
                                (0, a.jsx)(
                                    tZ.D,
                                    {
                                        tag: "a",
                                        role: "link",
                                        className: u3.Z,
                                        onClick: () =>
                                            (function (e) {
                                                let { guildId: t, channelId: n, messageId: l } = e;
                                                (0, u0.pX)(ej.BVt.CHANNEL(t, n, l));
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
                                        r = eT.Ay.getProject(e),
                                        a = null == r ? null : (0, eB.KL)(r, l);
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
    u9 = n(505527),
    u8 = n(367790),
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
        l = (0, c.bG)([aB.Ay], () => aB.Ay.useReducedMotion),
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
              children: (0, a.jsx)(iu.Ay, {
                  children: n.map((e) =>
                      (0, a.jsx)(
                          iu.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function oA(e) {
    return oy.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: T.intl.string(T.t.JrGD7E), icon: ov.CopyIcon, onClick: () => (0, oy.C)(e) }]
        : [];
}
function oS(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: T.intl.string(R.default.CXtLD2),
                          tooltip: T.intl.string(R.default.DOb1HM),
                          icon: oj.DoubleChevronSmallRightIcon,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: T.intl.string(R.default.urZwpN),
                          icon: tB.XSmallIcon,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, a.jsx)(ow, { groupStart: n, actions: [...r, ...oA(t)] });
}
function oC(e) {
    let { content: t, groupStart: n, onRestoreVersion: l, onViewTrace: r } = e,
        i =
            null == l
                ? []
                : [{ id: "restore-version", label: T.intl.string(R.default.H8Jfhu), icon: tu.UndoIcon, onClick: l }],
        s = null == r ? [] : [{ id: "view-trace", label: "View Trace", icon: ob.BugIcon, onClick: r }];
    return (0, a.jsx)(ow, { groupStart: n, actions: [...i, ...oA(t), ...s] });
}
let oN = (0, aq.createChannelRecord)({ id: "conjure-builder", type: ej.rbe.DM }),
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
        r = i.useMemo(() => ((0, rk.aW)(e.content) ? (0, u6.z2)(si.U, e, oM).content : null), [e]) ?? l,
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
        d = (0, c.bG)([nN.default], () => nN.default.getCurrentUser()),
        m = i.useCallback(
            (t) => {
                let n = nN.default.getUser(e.author.id) ?? e.author;
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
            let e = "" === n.content ? null : (0, rk.aW)(n.content) ? (0, u6.z2)(si.U, n, oP).content : s;
            return null == l
                ? e
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("span", {
                              className: ok.GV,
                              children: [
                                  (0, a.jsx)(g.ExperimentalDirectSelectIcon, {
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
            [nC.A],
            () => ({
                isReplyAuthorBlocked: nC.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: nC.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        m = (0, ii.X4)(n),
        f = (0, ii.X4)(t),
        h = oT(n);
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
        renderPopout: h.renderPopout,
        showAvatarPopout: h.showAvatarPopout,
        showUsernamePopout: h.showUsernamePopout,
        onClickAvatar: h.onClickAvatar,
        onClickUsername: h.onClickUsername,
        onClickReply: r,
        onPopoutRequestClose: h.onPopoutRequestClose,
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
        c = i.useMemo(() => (0, ii.FT)(o, null), [o]),
        d = i.useMemo(() => (0, lP.W1)(t), [t]),
        m = d?.body ?? t,
        f = (0, sE.Qu)(m),
        h = i.useMemo(() => {
            if (null == o) return null;
            let e = (0, aD.Ay)({ channelId: oN.id, content: m, author: o });
            return (0, a$.rh)({ ...e, timestamp: o_(n, e.timestamp), state: ej.cmJ.SENT });
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
                                  (0, a.jsx)(g.ExperimentalDirectSelectIcon, {
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
        childrenButtons: (0, a.jsx)(oS, { content: l, groupStart: s, onQueuedAction: u }),
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
        h = i.useMemo(() => (0, ii.FT)(null, null), []),
        g = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        p = r?.userId,
        x = (0, om.vm)(p),
        v = i.useMemo(() => (null == r ? null : (0, lP.W1)(r.content)), [r]),
        j = i.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, aD.Ay)({ channelId: oN.id, content: v?.body ?? r.content, author: x });
            return (0, a$.rh)({ ...e, id: r.id, timestamp: o_(r.createdAt, e.timestamp), state: ej.cmJ.SENT });
        }, [r, v, x]),
        b = i.useMemo(() => (null == r ? void 0 : { channel_id: oN.id, message_id: r.id }), [r]),
        [y] = i.useState(() => (0, aD.Ay)({ channelId: oN.id, content: "", author: oI })),
        k = i.useMemo(
            () =>
                (0, a$.rh)({
                    ...y,
                    timestamp: o_(n, y.timestamp),
                    state: ej.cmJ.SENT,
                    ...(null != b ? { type: ej.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, n, b],
        ),
        w = i.useMemo(() => k.set("content", m), [k, m]),
        A = i.useMemo(
            () => (0, os.A)({ message: k, channel: oN, author: g, guildId: void 0, isGroupStart: u }),
            [k, g, u],
        ),
        S = oR(w, m, ok.OS);
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
                childrenMessageContent: S,
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
                (0, a$.rh)(
                    { ...(0, aD.Ay)({ channelId: oN.id, content: "" }), id: `conjure:${t}`, state: ej.cmJ.SENT },
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
                    reactionType: u9.v6.NORMAL,
                }),
                    u7.h.dispatch({
                        type: "MESSAGE_REACTION_SET_FETCHED",
                        channelId: oN.id,
                        messageId: l.id,
                        emoji: e,
                        reactionType: u9.v6.NORMAL,
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
            children: (0, a.jsx)(u8.A, {
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
    return (0, a.jsx)(ew.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: n,
        "aria-label": T.intl.string(T.t.ogxXGq),
        onSelect: t,
        children: (0, a.jsxs)(eA.rX, {
            children: [
                null != l
                    ? (0, a.jsx)(eA.Dr, {
                          id: "restore-version",
                          label: T.intl.string(R.default.H8Jfhu),
                          icon: tu.UndoIcon,
                          action: l,
                      })
                    : null,
                null != r
                    ? (0, a.jsx)(eA.Dr, { id: "view-trace", label: "View Trace", icon: ob.BugIcon, action: r })
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
                F() && "assistant" === v.role && (0, tW.BL)(v)
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
                          for (let n of (($ = { projectId: e, traceId: t }), [...L])) n(e);
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
            buttons: (0, a.jsx)(oC, {
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
                turnId: (0, tW.lb)(v) ?? void 0,
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
                [nS.A, nN.default, nC.A],
                () => {
                    let e = t?.status === "pinned" ? nS.A.getChannel(t.channelId) : null;
                    return null == e ? null : (0, nA.m1)(e, nN.default, nC.A);
                },
                [t],
            )),
            { outcome: t, pinnedName: n }),
        s = T.intl.string(R.default.UGAfl9);
    return null != r
        ? (0, a.jsx)(t4, {
              title: s,
              children: (0, a.jsx)(j.E, {
                  className: oZ.r,
                  variant: "body-sm/normal",
                  color: "text-muted",
                  children:
                      "pinned" === r.status
                          ? T.intl.formatToPlainString(R.default.gKe6Lw, { channelName: i ?? "" })
                          : T.intl.string(R.default["+kpQ3v"]),
              }),
          })
        : (0, a.jsx)(t4, { title: s, children: (0, a.jsx)(oJ, { projectId: l }) });
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
            pin: d,
            skip: f,
        } = (function (e) {
            var t;
            let n = (0, c.bG)([eT.Ay], () => eT.Ay.getProject(e), [e]),
                l =
                    ((t = n?.guild_id ?? null),
                    (0, c.yK)(
                        [le.A, uY.A],
                        () =>
                            null == t
                                ? []
                                : le.A.getChannels(t)
                                      .VOCAL.map((e) => {
                                          let { channel: t } = e;
                                          return t;
                                      })
                                      .filter(
                                          (e) => e.type === ej.rbe.GUILD_VOICE && uY.A.can(ej.xBc.MANAGE_CHANNELS, e),
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
        h = (0, n4.A)(n, "voice"),
        g = i.useMemo(() => {
            let e = new Set(l.map((e) => e.id));
            return (h ?? []).filter((t) => e.has(t.value));
        }, [l, h]);
    return (0, a.jsx)("div", {
        className: oZ.r,
        children: (0, a.jsxs)(nU.B, {
            gap: 12,
            children: [
                (0, a.jsx)(j.E, {
                    variant: "body-md/normal",
                    color: "text-default",
                    children: T.intl.string(R.default["1vVBAw"]),
                }),
                g.length > 0
                    ? (0, a.jsx)(nj.Z, {
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
                    : (0, a.jsx)(j.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: T.intl.string(R.default.JVUsIY),
                      }),
                (0, a.jsxs)("div", {
                    className: oZ.o,
                    children: [
                        (0, a.jsx)(m.$, {
                            variant: "secondary",
                            size: "sm",
                            text: T.intl.string(R.default.Iw0l8o),
                            disabled: u,
                            onClick: f,
                        }),
                        g.length > 0
                            ? (0, a.jsx)(m.$, {
                                  variant: "primary",
                                  size: "sm",
                                  text: T.intl.string(R.default.FYI3qr),
                                  disabled: null == r,
                                  loading: u,
                                  onClick: d,
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
            let r = (0, c.bG)([nN.default], () => (null == l ? null : nN.default.getUser(l)), [l]),
                a = (0, aO.tx)(r),
                s = u1(e),
                u =
                    (0, c.bG)([ln.A], () => (null == t.guild_id ? null : ln.A.getGuild(t.guild_id)?.name), [
                        t.guild_id,
                    ]) ??
                    ("app_removed" === t.type ? t.guild_name : null) ??
                    T.intl.string(R.default.R1tPlP),
                o = "app_removed" === t.type ? t.moved_to_guild_id : void 0,
                d = (0, c.bG)([ln.A], () => (null == o ? null : ln.A.getGuild(o)?.name), [o]),
                m = null == r || null == a ? null : { user: a, userHook: (e, t) => n(r.id, a, t) };
            switch (t.type) {
                case "app_removed":
                    if (null != o) {
                        let e = d ?? t.moved_to_guild_name ?? T.intl.string(R.default.R1tPlP);
                        return null == m
                            ? T.intl.format(R.default.NVM0sD, { app: s, server: u, newServer: e })
                            : T.intl.format(R.default["/hlliy"], { app: s, server: u, newServer: e, ...m });
                    }
                    return null == m
                        ? T.intl.format(R.default.Lwsrhg, { app: s, server: u })
                        : T.intl.format(R.default.qqePfT, { app: s, server: u, ...m });
                case "bot_removed":
                    return null == m
                        ? T.intl.format(R.default.mT7EQG, { app: s, server: u })
                        : T.intl.format(R.default["lA/crI"], { app: s, server: u, ...m });
                case "preview_bot_removed":
                    return null == m
                        ? T.intl.format(R.default["4LVIeo"], { app: s, server: u })
                        : T.intl.format(R.default.YJOV6D, { app: s, server: u, ...m });
                case "app_channel_deleted": {
                    let e = t.channel_name ?? "";
                    return null == m
                        ? T.intl.format(R.default["4VQfid"], { channel: e, server: u })
                        : T.intl.format(R.default.RlMIJN, { channel: e, server: u, ...m });
                }
                case "remixed":
                    return T.intl.format(R.default.mHCXtm, { source: t.source_name });
                case "voice_channel_pin":
                    return T.intl.string(R.default.UGAfl9);
                case "staff_notice":
                    return t.message;
            }
        })(t, n, o0),
        r = uk(t, n);
    return "voice_channel_pin" === n.type
        ? (0, a.jsx)(oY, { projectId: t })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(j.E, { variant: "body-md/normal", color: "text-default", children: l }),
                  null != r ? (0, a.jsx)(rx, { projectId: t, request: r, notifyAgent: !1 }) : null,
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
                    nd.useState((e) => (null == t ? null : (e.byMessageKey[t] ?? null))));
            switch (n.kind) {
                case "user": {
                    let e = (0, rk.DW)(u.attachments, u.content),
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
                                              null != o ? (0, a.jsx)(sS, { send: o }) : null,
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
                                    return (n) => (0, rw.tp)(e, t.id, n);
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
function o9(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
let o8 = ["wheel", "touchstart", "pointerdown", "keydown"];
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
            pinned: v,
            onUnpin: y,
            handleRef: k,
            onShowsLatestChange: w,
        } = e,
        A = i.useRef(null),
        [S, C] = i.useState(null),
        N = i.useCallback((e) => {
            ((A.current = e), C(e));
        }, []),
        [I, E] = i.useState(null),
        _ = i.useRef(0);
    i.useEffect(() => () => window.clearTimeout(_.current), []);
    let M = i.useCallback((e) => {
            (E(e), window.clearTimeout(_.current), (_.current = window.setTimeout(() => E(null), 1600)));
        }, []),
        P = (0, c.bG)([ez.A], () => ez.A.getPublishStatus(t)),
        L = (0, c.bG)([nN.default], () => nN.default.getCurrentUser()?.id),
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
                                        let t = (0, tV.lt)(e.steps);
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
                                (0, tW.ST)(e) ||
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
                        let a = !(0, tW.BL)(e),
                            i = rI({
                                steps: e.steps,
                                content: e.content,
                                hasProposal: null != e.proposal,
                                hasLiveClarification: n,
                                hasAttachments: (e.attachments?.length ?? 0) > 0,
                            }),
                            s = i.lastStreamedMessage?.key,
                            u = (0, tV.C6)(e.steps, { turnActive: a }),
                            { lastWork: o, open: c } = (0, tV.CT)(u, { turnActive: a }),
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
                                        turnActive: tX(e),
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
                        if (null != l) return iQ(l, t) ? e[n].id : null;
                    }
                    return null;
                })(n, P)),
                n.every((t) => null == t.publishCta || t.id === e)
                    ? n
                    : n.map((t) => {
                          if (null == t.publishCta || t.id === e) return t;
                          let n = iY.get(t);
                          return (null == n && ((n = { ...t, publishCta: null }), iY.set(t, n)), n);
                      })),
                h,
            );
        }, [n, P, h]),
        D = i.useMemo(() => $.map((e) => e.key), [$]),
        [q, F] = i.useState(null),
        O = (function (e, t, n) {
            if (null == t) return o7(e, e.length - 60, e.length);
            let l = null == t.endKey,
                r = l ? e.length : o9(e, t.endKey, t.end - 1) + 1,
                a = o9(e, t.startKey, t.start);
            return (l && n && r - a > 120 && (a = r - 60), o7(e, a, r));
        })(D, q, v),
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
        for (let n of o8) e.addEventListener(n, t, { passive: !0 });
        return () => {
            for (let n of o8) e.removeEventListener(n, t);
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
            "older" === n ? (0, eG.P6)(t) : null != n && F(n);
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
                    (0, eG.P6)(t) && (Y.current = e);
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
            if (null == S) return;
            let e = S.getBoundingClientRect().height,
                t = new ResizeObserver((t) => {
                    let [n] = t,
                        l = n?.contentRect.height;
                    if (null != l && l !== e) {
                        if (((e = l), x.current)) return void p.current?.scrollToBottom();
                        (X(), Q());
                    }
                });
            return (t.observe(S), () => t.disconnect());
        }, [S, X, Q, p, x]));
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
                : (0, tW.BL)(ea)
                  ? ea.awaitingUser
                  : null) ?? void 0,
        es = (0, c.bG)([ri.A], () => ri.A.getSettings(t)?.secrets, [t]),
        eu = (0, ui.WT)(t),
        eo = i.useMemo(() => (0, l7.Mv)(n, es), [n, es]);
    if (!(0, tW.i_)(n)) {
        if ("loading" === l)
            return (0, a.jsx)("ol", {
                className: o()(uo.x7, uo.jH),
                "aria-busy": !0,
                children: (0, a.jsx)("li", { className: uo.Ub, children: (0, a.jsx)(b.y, {}) }),
            });
        let e = "unavailable" === l ? R.default.Td4Sf4 : R.default.V1QiNz;
        return (0, a.jsx)("ol", {
            className: uo.x7,
            children: (0, a.jsx)(ud, { role: "assistant", children: (0, a.jsx)(oF, { content: T.intl.string(e) }) }),
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
                              accessories: (0, a.jsx)(j.E, {
                                  variant: "body-xs/normal",
                                  color: "text-muted",
                                  children: T.intl.string(R.default.YR8A2v),
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
        l = (0, tH.j)(),
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
            children: (0, a.jsx)(tz.Ch, {
                ref: u,
                onScroll: m,
                className: cl.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: o()(so.PT, cl.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: aX.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
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
        [x, v] = i.useState(null),
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
        y = T.intl.string(b),
        k = b === ct.kx["0"],
        [w, A] = i.useState(f ?? y),
        S = (0, tH.j)();
    (l || (0, ct.E4)(y, w) || (!S && !k)) && w !== y && A(y);
    let C = i.useRef(y);
    (i.useEffect(() => {
        C.current = y;
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
        ((E.current = k), !k && (0, ct.E8)(I.current) && A(C.current));
    }, [k]),
        i.useEffect(() => {
            if (!S) return;
            let e = 0,
                t = 0;
            function n() {
                E.current
                    ? ((_.current = (0, ct.E8)(I.current) ? _.current + 1 : 0), A((0, ct.Ov)(_.current)))
                    : C.current !== I.current
                      ? A(C.current)
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
        }, [S]));
    let M = null != t && "" !== t.text,
        P = t?.session ?? null,
        L = M && null != P && x === P,
        $ = i.useCallback(() => {
            M && null != P && v((e) => (e === P ? null : P));
        }, [M, P]),
        D = i.useCallback(() => v(null), []);
    return (0, a.jsx)(ek.Y, {
        targetElementRef: g,
        position: "top",
        align: "left",
        shouldShow: L,
        onRequestClose: D,
        renderPopout: () => (0, a.jsx)(cr, { id: p, activity: t }),
        children: () =>
            (0, a.jsxs)(tZ.D, {
                innerRef: g,
                className: o()(ca.hF, M && ca.Xd),
                "aria-label": T.intl.string(
                    r
                        ? R.default.qqlUiW
                        : b === R.default.j8tmjK
                          ? R.default.j8tmjK
                          : k
                            ? ct.kx["0"]
                            : R.default["Uuj/gh"],
                ),
                "aria-expanded": L,
                "aria-describedby": L ? p : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": T.intl.string(b),
                onClick: $,
                children: [
                    (0, a.jsx)("span", {
                        className: ca.bl,
                        children: (0, a.jsx)(cn.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", {
                        className: ca.xu,
                        "aria-hidden": !!c || !!k || void 0,
                        children: S
                            ? (0, a.jsx)(sm.o, {
                                  ref: N,
                                  text: w,
                                  variant: "body-xs/medium",
                                  color: "text-subtle",
                                  duration: 1e3,
                                  delay: null,
                                  className: ca.yE,
                              })
                            : (0, a.jsx)(j.E, {
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
    return (0, a.jsx)(j.E, {
        tag: "span",
        variant: n,
        color: "text-muted",
        "aria-hidden": !0,
        className: co.$,
        "data-conjure-turn-timer": !0,
        children: (0, rD.C7)(l),
    });
}
function cd(e) {
    let { startedAt: t } = e,
        n = cu(t, "minute");
    return (0, a.jsx)(t1.A, { role: "timer", children: (0, rD.Us)(n) });
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
                    (0, a.jsx)(j.E, { variant: "body-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(j.E, {
                        variant: "body-sm/medium",
                        color: "text-muted",
                        children: [cg((0, cf.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(j.E, {
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
        "aria-label": T.intl.string(R.default.p5EGzq),
        children: [
            (0, a.jsx)("div", {
                className: ch.Q$,
                children: (0, a.jsxs)("div", {
                    className: ch.mf,
                    children: [
                        (0, a.jsxs)(j.E, {
                            variant: "body-md/semibold",
                            color: "text-default",
                            children: [cg((0, cf.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(j.E, {
                            variant: "body-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(cp, { label: T.intl.string(R.default["9Sj3SX"]), usage: i }),
            (0, a.jsx)(cp, { label: T.intl.string(R.default.ANCEo3), usage: n }),
            (0, a.jsx)(cp, { label: T.intl.string(R.default.ugL6D4), usage: l, cached: !1 }),
            (0, a.jsx)(cp, { label: T.intl.string(R.default.DHr5On), usage: r, cached: !1 }),
            (0, a.jsxs)("div", {
                className: ch.mf,
                children: [
                    (0, a.jsx)(j.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: T.intl.string(R.default["8OUg09"]),
                    }),
                    (0, a.jsx)(j.E, {
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
    return (0, a.jsx)(ek.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(cx, { project: t }),
        children: (e) =>
            (0, a.jsx)(tZ.D, {
                innerRef: n,
                className: ch.Y$,
                "aria-label": T.intl.string(R.default.Z96gxQ),
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
        n = T.intl.string(R.default.hzgPbZ);
    return (0, a.jsxs)("div", {
        className: cj.nd,
        role: "dialog",
        "aria-label": n,
        "data-testid": "conjure-queued-card",
        children: [
            (0, a.jsxs)("div", {
                className: cj.wx,
                children: [
                    (0, a.jsx)(j.E, { variant: "body-md/semibold", color: "text-default", children: n }),
                    (0, a.jsx)(j.E, { variant: "body-xs/normal", color: "text-muted", children: t.length }),
                ],
            }),
            (0, a.jsx)(tz.Ch, {
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
              children: (0, a.jsx)(j.E, {
                  variant: "body-sm/normal",
                  color: "text-muted",
                  children: T.intl.string(R.default["07XimM"]),
              }),
          })
        : (0, a.jsxs)("li", {
              className: cj.AS,
              children: [
                  (0, a.jsx)(j.E, {
                      ref: n,
                      variant: "body-sm/normal",
                      color: "text-default",
                      lineClamp: l ? void 0 : 3,
                      className: cj.Qs,
                      children: t,
                  }),
                  s
                      ? (0, a.jsx)(nG.Q, {
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
function ck(e) {
    let { queued: t, className: n } = e,
        l = i.useRef(null);
    return (0, a.jsx)(ek.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(cb, { queued: t }),
        children: (e) =>
            (0, a.jsx)(tZ.D, {
                innerRef: l,
                className: n,
                "data-testid": "conjure-queued-pill",
                ...e,
                children: (0, a.jsx)(j.E, {
                    tag: "span",
                    variant: "body-xs/medium",
                    color: "text-muted",
                    children: T.intl.formatToPlainString(R.default.REnNUn, { count: t.length }),
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
        x = (0, O.Zv)(t),
        v = (0, c.bG)([ez.A], () => ez.A.getPublishStatus(t)?.publishing === !0, [t]),
        [b, y] = i.useState(null),
        k = i.useCallback(
            (e) =>
                y(
                    (0, ct.E8)(e) || e === T.intl.string(R.default.mKK6wB) || e === T.intl.string(R.default.j8tmjK)
                        ? null
                        : e,
                ),
            [],
        ),
        w = null == h ? null : (0, ct.uc)(h),
        A = null != s,
        S = s ?? (n ? l : void 0),
        C = n || r || A || !0 === f;
    return (0, a.jsxs)("div", {
        className: cw.jf,
        children: [
            (0, a.jsxs)("div", {
                className: cw.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    C || u || x || v
                        ? (0, a.jsx)(ci, {
                              activity: d,
                              compacting: m,
                              saving: f,
                              restoring: r,
                              remixing: A,
                              recalling: u,
                              controlling: x,
                              publishPending: v && C,
                              publishing: v,
                              spoken: b,
                              onSpokenChange: k,
                          })
                        : null,
                    null != S ? (0, a.jsx)(cc, { startedAt: S }) : null,
                ],
            }),
            null != S ? (0, a.jsx)(cd, { startedAt: S }) : null,
            0 === p.length ? null : (0, a.jsx)(ck, { queued: p, className: o()(cw.BP, cw.A1) }),
            null == h || null == w
                ? null
                : (0, a.jsxs)("span", {
                      className: cw.BP,
                      children: [
                          (0, a.jsx)(j.E, {
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
                : (0, a.jsx)(j.E, {
                      tag: "span",
                      variant: "body-xs/medium",
                      color: "failed" === g ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": T.intl.formatToPlainString(R.default["tCo+ZM"], { status: (0, ct.Db)(g) }),
                      "data-conjure-conn": !0,
                      "data-state": g,
                      className: cw.XF,
                      children: (0, ct.Db)(g),
                  }),
        ],
    });
}
var cS = n(698638),
    cC = n(608711);
let cN = [T.intl.string(R.default["9w+Chc"]), T.intl.string(R.default.WAvmdq), T.intl.string(R.default.SKsrzl)];
function cI(e) {
    var t, n;
    let l,
        r,
        s,
        u,
        o,
        {
            projectId: f,
            restoreState: h,
            onRestoreVersion: g,
            onImportProject: p,
            escapeScopeRef: x,
            visible: v = !0,
        } = e,
        b = (0, c.bG)([rs.A], () => rs.A.getMessages(f), [f]),
        y = (0, c.bG)([eG.Ay], () => eG.Ay.getConnState(f), [f]),
        k = (0, c.bG)([rs.A], () => rs.A.getProjectUsage(f), [f]),
        w = (0, c.bG)([rs.A], () => rs.A.getThinkingActivity(f), [f]),
        A = (0, c.bG)([rs.A], () => rs.A.isCompacting(f), [f]),
        S = (0, c.bG)([rs.A], () => rs.A.isSaving(f), [f]),
        C = (0, c.bG)([lq.A], () => lq.A.getModelSettings(f), [f]),
        N = i.useRef(null),
        I = i.useRef(null),
        E = i.useRef(null),
        _ = i.useRef(null),
        {
            stickToBottomRef: M,
            pinned: P,
            atBottom: L,
            unpin: $,
            releasePinHold: D,
            showsLatest: q,
            showsLatestRef: F,
            handleShowsLatestChange: O,
            updatePin: z,
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
                    for (let e of o8) t.addEventListener(e, o, { passive: !0 });
                    return () => {
                        for (let e of o8) t.removeEventListener(e, o);
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
        })(I),
        U = i.useCallback(() => {
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
            (D(), F.current ? e() : E.current?.showLatest(e));
        }, [D, F]),
        B = i.useCallback(() => {
            (z(), E.current?.handleScroll());
            let e = _.current;
            null != e && (e.position = M.current ? null : (E.current?.snapshot() ?? null));
        }, [z, M]),
        K = i.useContext(Q.A) === f;
    i.useLayoutEffect(() => {
        if (!K) return;
        let e = { position: Y.A.getProjectView(f).chatScroll };
        return ((_.current = e), () => (0, Z.g7)(f, { chatScroll: e.position }));
    }, [K, f]);
    let H = i.useRef(!K);
    (i.useLayoutEffect(() => {
        if (H.current || !(0, tW.i_)(b)) return;
        H.current = !0;
        let e = Y.A.getProjectView(f).chatScroll;
        null != e && E.current?.restore(e) !== !0 && null != _.current && (_.current.position = null);
    }, [b, f]),
        i.useLayoutEffect(() => {
            let e = N.current;
            if (null == e) return;
            let t = I.current?.getScrollerNode(),
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
                    r && (M.current ? I.current?.scrollToBottom() : E.current?.recordAnchor());
                });
            return (r.observe(e), null != t && r.observe(t), () => r.disconnect());
        }, [M]),
        i.useEffect(() => {
            (0, eG.ensureConnection)(f);
        }, [f]),
        (0, rA.E1)(f, (0, tH.j)()));
    let V = (0, G.rt)(f),
        W = (function (e) {
            let t = (0, eB.Ay)(e),
                n = t?.guildId ?? null,
                l = (0, c.bG)([ln.A], () => (null == n ? null : (ln.A.getGuild(n)?.name ?? null))),
                [r, a] = i.useState(null),
                s = t?.missingSurface ?? null;
            return null == s || r === e
                ? null
                : {
                      message: T.intl.format("channel" === s ? R.default["1cm4fj"] : R.default.Lm7IRC, {
                          server: l ?? "",
                      }),
                      onDismiss: () => a(e),
                  };
        })(f),
        J = (function (e) {
            let t = (0, c.bG)([rj.A], () => rj.A.getSpendLimit(e), [e]);
            if (null == t) return null;
            let n = null == t.limitUsd ? null : rb.format(t.limitUsd);
            if ("blocked" === t.state) {
                let e = rv.A.getSubmitRequestURL();
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
        })(f),
        ee =
            ((l = (0, c.bG)([l4.A], () => l4.A.getFailure(f))),
            (r = i.useCallback(() => (0, l5.CM)(f), [f])),
            null == l
                ? null
                : {
                      message: T.intl.format(R.default.Up6Ssw, { reason: l }),
                      retry: { text: T.intl.string(R.default["ywA+ET"]), onClick: r },
                  }),
        et = (0, X.AJ)(f),
        en = (0, eV.E8)(f),
        el = (0, c.bG)([l4.A], () => l4.A.getSetupStartedAt(f), [f]),
        er = i.useCallback(
            (e, t) => {
                (0, eG.dv)(f, e, t);
            },
            [f],
        ),
        ea = i.useCallback(
            (e, t, n) => {
                let l = n ?? er;
                0 === V.annotations.length
                    ? l(e, t)
                    : (l((0, lP.BL)({ annotations: V.annotations, metaComment: e, context: V.context }), t),
                      (0, G.mB)(f));
            },
            [V, er, f],
        ),
        ei = i.useCallback(() => {
            (!(function (e) {
                let t = !1;
                for (let [n, l] of nc)
                    l.projectId === e &&
                        (l.job?.cancel(),
                        (0, eG.re)(e, l.nonce),
                        (function (e) {
                            let t = nc.get(e);
                            (nc.delete(e), nm(e, null), t?.thumbUrl != null && URL.revokeObjectURL(t.thumbUrl));
                        })(n),
                        (t = !0));
                return t;
            })(f) ||
                rs.A.isThinking(f)) &&
                (0, eG.fu)(f);
        }, [f]),
        es = i.useCallback((e) => (0, nh.RQ)(f, e.implementation_prompt), [f]),
        [eu, eo] = (function (e) {
            let [t, n] = i.useState(() => rC(e)),
                [l, r] = i.useState(e),
                a = l !== e,
                s = a ? rC(e) : t;
            return (a && (r(e), n(s)), [s, n]);
        })(f),
        ec = i.useCallback(() => er(T.intl.string(R.default["t5CN3+"])), [er]),
        ed = i.useCallback((e, t, n) => (0, nh.RQ)(f, e, { clarificationAnswers: t, attachments: n }), [f]),
        em = i.useCallback((e) => (0, lF.X)(f, e), [f]),
        ef = i.useCallback((e) => (0, e3.vX)(f, e), [f]),
        eh = i.useCallback((e) => (0, e9.gn)(f, "chat", Array.from(e), ef), [f, ef]),
        eg = i.useCallback(() => (0, nh.RQ)(f, T.intl.string(R.default.Zc7gML)), [f]),
        ep = h?.status === "restoring",
        ex = "open" === y && !ep,
        ev = b[b.length - 1],
        ej = null != ev && "assistant" === ev.role && null != ev.proposal,
        [eb, ey] = i.useState(null),
        ek = i.useMemo(
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
                })(b),
            [b],
        ),
        ew = null != ek && ek.id !== eb ? ek : null,
        eA = i.useCallback(() => {
            null != ew && ey(ew.id);
        }, [ew]),
        [eS, eC] = i.useState(null),
        eN = (function (e) {
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
                                summary: T.intl.string(R.default["o2++BO"]),
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
        })(f),
        eI = ev?.appBuildRequest != null && (0, tW.BL)(ev) && ev.appBuildRequest.id !== eS ? ev.appBuildRequest : null,
        eE = eN.request ?? (null == ew ? eI : null),
        e_ = null == eN.request ? ew : null,
        eM = null != eE && eE === eN.request,
        { close: eR, sent: eT } = eN,
        eP = eN.request?.id,
        eL = i.useCallback(() => {
            eM ? eR() : null != eE && eC(eE.id);
        }, [eE, eM, eR]),
        e$ = i.useCallback(
            (e) => {
                (null != eP && eT(eP),
                    (0, d.P0)({
                        text: T.intl.formatToPlainString(R.default.RZO35O, { names: e.map((e) => e.name).join(", ") }),
                        variant: "success",
                    }));
            },
            [eP, eT],
        ),
        eD = (0, c.bG)([ri.A], () => ri.A.getSettings(f), [f]),
        [eq, eF] = i.useState(null),
        eO = rd(),
        ez =
            null != ev &&
            ((t = ev.id),
            (s = (0, l7.Mv)(b, eD?.secrets)),
            (u = rm(b)),
            b.some(
                (e) =>
                    "assistant" === e.role &&
                    e.id !== t &&
                    !!(0, tW.BL)(e) &&
                    ((null != e.secretRequest && "open" === s.get(e.render_id)) ||
                        (null != e.settingsRequest && !u.has(e.id) && !rf(e.settingsRequest, eD, eO.has(e.id)))),
            )),
        eU =
            null != ev &&
            "assistant" === ev.role &&
            null != ev.settingsRequest &&
            null == ev.secretRequest &&
            (0, tW.BL)(ev) &&
            ev.id !== eq &&
            ((n = ev.settingsRequest),
            (o = n.keys ?? []),
            null != eD &&
                0 !== o.length &&
                o.every((e) => {
                    let t = eD.schema.find((t) => t.key === e);
                    return null != t && re.has(t.type);
                })) &&
            rt(ev.settingsRequest, eD) &&
            !ez
                ? ev
                : null,
        eK = null == eN.request ? eU : null,
        eH = eK?.settingsRequest ?? null,
        eW = i.useCallback(() => {
            null != eU && eF(eU.id);
        }, [eU]),
        eX = null != eH,
        [eQ, eZ] = i.useState(null),
        eY = eD?.secrets,
        eJ = i.useMemo(() => (0, l7.Qr)(b, (0, l7.Mv)(b, eY)), [b, eY]),
        e0 = null != eJ && eJ.render_id !== eQ ? eJ : null,
        e2 = null == e_ && null == eE ? e0 : null,
        e5 = i.useCallback(() => {
            null != e0 && eZ(e0.render_id);
        }, [e0]),
        [e7, e8] = i.useState(null),
        e6 = e_?.id ?? eE?.id ?? e2?.render_id ?? eK?.id,
        te = null != ew || null != eE || null != e0 || null != eU;
    i.useLayoutEffect(() => {
        let e = I.current?.getScrollerNode(),
            t = e7?.firstElementChild;
        if (null == e7 || null == e || !(0, e1.vq)(t, HTMLElement) || null == e6) return;
        function n() {
            M.current && I.current?.scrollToBottom();
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
    }, [e7, e6, I, M]);
    let tt = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: (0, c.bG)([rs.A], () => rs.A.hasLoadedHistory(f), [f]),
            historyUnavailable: (0, c.bG)([rs.A], () => rs.A.isHistoryUnavailable(f), [f]),
            connState: y,
        }),
        tn = !(0, tW.i_)(b),
        tl = "loading" === tt && tn,
        tr = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < f.length; t++) e = (31 * e + f.charCodeAt(t)) % 0x7fffffff;
            return cN[e % cN.length];
        }, [f]),
        ti = ej ? T.intl.string(R.default.Zc7gML) : "greeting" === tt && tn ? tr : null,
        ts = i.useMemo(() => {
            for (let e = b.length - 1; e >= 0; e--) {
                let t = b[e];
                if ("assistant" === t.role && !(0, tW.BL)(t)) return t;
            }
        }, [b]),
        tu = null != ts,
        to = i.useMemo(() => b.filter((e) => "user" === e.role && "queued" === e.disposition), [b]),
        tc = null != ts ? (0, ry.S)(ts) : void 0,
        td = ej && ex ? eg : void 0,
        tm = i.useCallback(() => (0, nh.RQ)(f, T.intl.string(R.default.EMgIuY)), [f]),
        [tf, th] = i.useState(null),
        [tg, tp] = i.useState(tu);
    (tg !== tu && (tp(tu), tu || th(null)),
        i.useEffect(() => {
            if (!tu) return;
            let e = I.current?.getScrollerNode(),
                t = e?.querySelector('[data-conjure-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let n = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? th(null)
                        : th(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (n.observe(t), () => n.disconnect());
        }, [tu, ts?.steps, q]));
    let tx = q ? tf : "bottom",
        tv = i.useMemo(() => (null != ts ? (0, tQ.b9)(ts.steps) : ""), [ts]),
        tj = i.useMemo(() => (null != ts ? ((0, tV.lt)(ts.steps) ?? ts.todos) : void 0), [ts]),
        tb = ts?.provisionalTodo,
        ty = null != ts && tX(ts),
        tk = i.useMemo(() => {
            var e;
            return null != ts ? ((e = ts.steps), rz((0, tV.Jf)(e, !0).tasks)) : void 0;
        }, [ts]);
    return (0, a.jsxs)("section", {
        ref: N,
        "data-conjure-chat": !0,
        className: cC.TE,
        children: [
            ex
                ? (0, a.jsx)(tK.A, {
                      title: T.intl.string(R.default.gy7byi),
                      description: T.intl.string(R.default["dkv/WO"]),
                      icons: cS.ir,
                      onDrop: eh,
                  })
                : null,
            (0, a.jsx)(ns, {
                onJumpToActivity: U,
                line: tv,
                placement: tu && "top" === tx ? "top" : null,
                todos: tj,
                todosLive: ty,
                provisionalTodo: tb,
                agents: tk,
            }),
            (0, a.jsxs)("div", {
                className: cC.JX,
                children: [
                    (0, a.jsx)(tz.Ch, {
                        ref: I,
                        onScroll: B,
                        scrollbarGutter: tl ? "both-edges" : "stable",
                        className: [cC.N$, L ? null : cC.hB, eX ? cC.J9 : null].filter(Boolean).join(" "),
                        children: (0, a.jsx)(rk.Fu.Provider, {
                            value: f,
                            children: (0, a.jsx)(ce, {
                                projectId: f,
                                messages: b,
                                emptyState: tt,
                                floatingSettingsMessageId: eU?.id,
                                floatingSecretRenderId: e2?.render_id,
                                liveClarificationId: e_?.id,
                                onPickIdea: ex ? es : void 0,
                                onAskForIdeas: ex ? ec : void 0,
                                draftHasText: eu,
                                onApprovePlan: ex ? tm : void 0,
                                onRestoreVersion: ep || tu ? void 0 : g,
                                scrollerRef: I,
                                stickToBottomRef: M,
                                pinned: P,
                                onUnpin: $,
                                handleRef: E,
                                onShowsLatestChange: O,
                            }),
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: cC.NJ,
                        children: (0, a.jsx)(cA, {
                            projectId: f,
                            thinking: tu,
                            turnStartedAt: tc,
                            restoring: ep,
                            remixStartedAt: el,
                            recalling: tl,
                            thinkingActivity: w,
                            compacting: A,
                            saving: S,
                            projectUsage: k,
                            connState: y,
                            queued: to,
                        }),
                    }),
                    null == e_
                        ? null
                        : (0, a.jsx)("div", {
                              ref: e8,
                              className: eX ? `${cC.B5} ${cC.J9}` : cC.B5,
                              children: (0, a.jsx)(
                                  lT,
                                  { projectId: f, clarification: e_, onSubmit: ex ? ed : void 0, onDismiss: eA },
                                  e_.id,
                              ),
                          }),
                    null == eE
                        ? null
                        : (0, a.jsx)("div", {
                              ref: e8,
                              className: cC.B5,
                              children: (0, a.jsx)(
                                  nw,
                                  { projectId: f, request: eE, canSend: ex, onDismiss: eL, onSent: eM ? e$ : void 0 },
                                  eE.id,
                              ),
                          }),
                    e2?.secretRequest == null
                        ? null
                        : (0, a.jsx)("div", {
                              ref: e8,
                              className: cC.B5,
                              children: (0, a.jsx)(
                                  ra,
                                  {
                                      projectId: f,
                                      cardId: e2.render_id,
                                      request: e2.secretRequest,
                                      status: "open",
                                      onDismiss: e5,
                                  },
                                  e2.render_id,
                              ),
                          }),
                    null == eH
                        ? null
                        : (0, a.jsx)("div", {
                              ref: null == e_ && null == eE ? e8 : void 0,
                              className: cC.B5,
                              children: (0, a.jsx)(
                                  rx,
                                  { askId: eK?.id, projectId: f, request: eH, onDismiss: eW },
                                  eK?.id,
                              ),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: cC.Jx,
                children: [
                    (0, a.jsx)(ns, {
                        onJumpToActivity: U,
                        line: tv,
                        placement: tu && "bottom" === tx ? "bottom" : null,
                        todos: tj,
                        todosLive: ty,
                        provisionalTodo: tb,
                        agents: tk,
                    }),
                    0 === V.annotations.length
                        ? null
                        : (0, a.jsxs)("div", {
                              className: cC.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, a.jsx)(j.E, {
                                      variant: "body-sm/medium",
                                      color: "text-default",
                                      children: T.intl.formatToPlainString(R.default["7b49dS"], {
                                          count: V.annotations.length,
                                      }),
                                  }),
                                  (0, a.jsx)(j.E, {
                                      variant: "body-xs/normal",
                                      color: "text-muted",
                                      children: T.intl.string(R.default["5zG+CR"]),
                                  }),
                                  (0, a.jsx)(m.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: T.intl.string(R.default["/zOv9+"]),
                                      onClick: () => (0, G.mB)(f),
                                  }),
                              ],
                          }),
                    null == en ? null : (0, a.jsx)(l3, { pending: en }, en.publishTurnId),
                    et ? (0, a.jsx)("div", { className: cC.qB, children: (0, a.jsx)(lD, { projectId: f }) }) : null,
                    null == ee
                        ? null
                        : (0, a.jsx)("div", {
                              className: cC.qB,
                              children: (0, a.jsx)(tU.w, {
                                  type: "critical",
                                  role: "alert",
                                  message: ee.message,
                                  action: ee.retry,
                              }),
                          }),
                    null == W
                        ? null
                        : (0, a.jsxs)("div", {
                              className: cC.Db,
                              children: [
                                  (0, a.jsx)(tU.w, { type: "warning", role: "status", message: W.message }),
                                  (0, a.jsx)("div", {
                                      className: cC.jU,
                                      children: (0, a.jsx)(e4.m, {
                                          text: T.intl.string(T.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, a.jsx)(ta.K, {
                                              "aria-label": T.intl.string(T.t.WAI6xu),
                                              icon: tB.XSmallIcon,
                                              variant: "color-mix",
                                              size: "md",
                                              onClick: W.onDismiss,
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                    null == J
                        ? null
                        : (0, a.jsx)("div", {
                              className: cC.qB,
                              children: (0, a.jsx)(tU.w, {
                                  type: J.blocked ? "critical" : "warning",
                                  role: J.blocked ? "alert" : "status",
                                  message: J.message,
                              }),
                          }),
                    (0, a.jsx)(ut, {
                        projectId: f,
                        escapeScopeRef: x,
                        canSend: ex,
                        running: tu,
                        restoring: ep,
                        onSend: ea,
                        hasPendingContext: V.annotations.length > 0,
                        onInterrupt: ex ? ei : void 0,
                        onUploadFile: ef,
                        onImport: p,
                        onSendToOtherProjects: te ? void 0 : eN.open,
                        onApprove: td,
                        suggestion: ti,
                        questionOpen: te,
                        secretPending: null != e2,
                        modelSettings: C,
                        onModelSettingsChange: em,
                        onDraftHasTextChange: eo,
                        aiPaused: J?.blocked === !0,
                        managedCopy: et,
                        visible: v,
                    }),
                ],
            }),
        ],
    });
}
var cE = n(761508),
    c_ = n(58736),
    cM = n(209695),
    cR = n(207438),
    cT = n(683438),
    cP = n(721507);
function cL(e, t) {
    return String(e).padStart(t, "0");
}
function c$(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let n = Date.parse(e);
    if (Number.isNaN(n)) return null;
    let l = new Date(n),
        r = `${cL(l.getHours(), 2)}:${cL(l.getMinutes(), 2)}:${cL(l.getSeconds(), 2)}`;
    return "millis" === t ? `${r}.${cL(l.getMilliseconds(), 3)}` : r;
}
var cD = n(667931);
let cq = {
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
    cF = { running: "Running", ok: "Done", error: "Failed" };
function cO(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function cG(e) {
    var t;
    return (t = Math.round(e)) < 1e3 ? `${t}ms` : `${(t / 1e3).toFixed(1)}s`;
}
function cz(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function cU(e) {
    return cG(e.count > 1 ? e.totalMs : e.end - e.start);
}
let cB = ["Arguments", "Result", "Usage", "Details"];
function cK(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function cH(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function cV(e) {
    let t = (0, cD.bM)(e)?.end;
    return null != t ? `${(t / 1e3).toFixed(2)}s` : (0, cD.lp)(e) ? "interrupted" : "still running";
}
function cW(e) {
    return [c$(new Date(e.started_at).toISOString()) ?? "", cz(e.spans.length), (0, cD.Sj)((0, cD.bM)(e)?.attrs)]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function cX(e) {
    let t = (0, cD.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let r of e.spans) {
        let { service: e, category: a } = (0, cD.N5)(r);
        (n.set(a, (n.get(a) ?? 0) + (t.get(r.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += cQ(r, "in")),
                (l.output += cQ(r, "out")),
                (l.cacheRead += cQ(r, "cache_read")),
                (l.cacheWrite += cQ(r, "cache_write")),
                (l.costUsd += cQ(r, "cost_usd"))));
    }
    let r = cD.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: r, busyMs: r.reduce((e, t) => e + t.ms, 0), model: l };
}
function cQ(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
var cZ = n(738188),
    cY = n(430993),
    cJ = n(364840),
    c0 = n(224640),
    c1 = n(20742);
let c2 = { collapsed: new Set(), revealed: new Set() };
var c3 = n(872892);
let c4 = {
    op: c3.Q,
    model: c3.i3,
    tool: c3.dH,
    setup: c3.kc,
    worktree: c3.Qx,
    sandbox: c3.QH,
    build: c3.F1,
    platform: c3.Op,
    other: c3.fv,
};
function c5(e) {
    let { stats: t } = e,
        n = (function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      cz(t.calls, "model call"),
                      `${cO(t.input)} in`,
                      `${cO(t.output)} out`,
                      `${cO(t.cacheRead)} cache read`,
                      `${cO(t.cacheWrite)} cache write`,
                      cH(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, a.jsxs)("div", {
        className: c3.M1,
        children: [
            (0, a.jsx)("div", {
                className: c3.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, a.jsx)(
                              "div",
                              {
                                  className: `${c3.DJ} ${c4[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, a.jsx)("div", {
                className: c3.o1,
                children: cD.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${cG(n)}`;
                    return (0, a.jsxs)(
                        "span",
                        {
                            className: c3.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${c3.nf} ${c4[e]}` }),
                                (0, a.jsx)(j.E, { variant: "body-xs/normal", color: "text-muted", children: cq[e] }),
                                null == l
                                    ? null
                                    : (0, a.jsx)(j.E, {
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
                : (0, a.jsx)(j.E, {
                      variant: "body-sm/normal",
                      color: "text-default",
                      tabularNumbers: !0,
                      children: n,
                  }),
        ],
    });
}
function c7(e) {
    return `conjure-perf-trace-${e}`;
}
function c9(e) {
    let { start: t, end: n, extent: l, barClass: r, duration: i } = e,
        s = (t / l) * 100,
        u = ((n - t) / l) * 100;
    return (0, a.jsxs)("div", {
        className: c3.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(u) },
        children: [
            (0, a.jsx)("div", { className: r }),
            (0, a.jsx)(j.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${c3.p0} ${s + u > 85 ? c3.EU : c3.jh}`,
                children: i,
            }),
        ],
    });
}
function c8(e) {
    let { node: t, extent: n, collapsed: l, selected: r, onSelect: s, onToggle: u, onExpandSubtree: o } = e,
        c = t.children.length > 0,
        d = l ? t2.ChevronSmallRightIcon : eC.ChevronSmallDownIcon,
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
    return (0, a.jsxs)(tZ.D, {
        tag: "div",
        role: "treeitem",
        id: c7(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !l : void 0,
        "aria-selected": r,
        className: `${c3.$y} ${r ? c3.wQ : ""}`,
        onClick: m,
        children: [
            (0, a.jsxs)("div", {
                className: c3.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, a.jsx)(tZ.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: c3.ai,
                              onClick: f,
                              children: (0, a.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, a.jsx)("span", { className: c3.YJ }),
                    (0, a.jsx)(j.E, {
                        variant: "body-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: c3.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, a.jsx)("span", { className: `${c3.nf} ${c4[t.category]}` }),
                    (0, a.jsx)(j.E, {
                        variant: "body-sm/semibold",
                        color: "text-strong",
                        className: c3.eu,
                        children: t.service,
                    }),
                    (0, a.jsx)(j.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        className: c3.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, a.jsx)(j.E, {
                              variant: "body-xs/semibold",
                              color: "text-default",
                              className: c3.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, a.jsx)(cZ.WarningIcon, { size: "xs", color: "currentColor", className: c3.ik })
                        : null,
                ],
            }),
            (0, a.jsx)(c9, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${c3.M0} ${c3.Nh}`
                    : t.running
                      ? `${c3.M0} ${c3.rF}`
                      : `${c3.M0} ${c4[t.category]}`,
                duration: cU(t),
            }),
        ],
    });
}
function c6(e) {
    let { row: t, extent: n, selected: l, onReveal: r } = e;
    return (0, a.jsxs)(tZ.D, {
        tag: "div",
        role: "treeitem",
        id: c7(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": l,
        className: `${c3.$y} ${l ? c3.wQ : ""}`,
        onClick: () => r(t.parentKey),
        children: [
            (0, a.jsxs)("div", {
                className: c3.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, a.jsx)("span", {
                        className: c3.ai,
                        children: (0, a.jsx)(t2.ChevronSmallRightIcon, { size: "xs", color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", { className: c3.U9 }),
                    (0, a.jsx)("span", { className: `${c3.nf} ${c3.dL}` }),
                    (0, a.jsx)(j.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        className: c3.MQ,
                        children: cz(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, a.jsx)(c9, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${c3.M0} ${c3.ab} ${c3.dL}`,
                duration: cG(t.totalMs),
            }),
        ],
    });
}
function de(e) {
    let { node: t } = e;
    return null == t
        ? (0, a.jsx)(j.E, {
              variant: "body-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, a.jsxs)("div", {
              className: c3._0,
              children: [
                  (0, a.jsxs)("div", {
                      className: c3.TQ,
                      children: [
                          (0, a.jsx)("span", { className: `${c3.nf} ${c4[t.category]}` }),
                          (0, a.jsx)(j.E, { variant: "body-sm/semibold", color: "text-strong", children: t.service }),
                          (0, a.jsx)(j.E, { variant: "body-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [cK("Start", `+${cG(e.start)}`), cK("Duration", cU(e))];
                      e.count > 1
                          ? t.push(
                                cK("Calls", String(e.count)),
                                cK("Longest call", cG(e.maxMs)),
                                cK("Spread over", cG(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(cK("Self time", cG(e.selfMs)));
                      let n = e.span.waits_on;
                      null != n && t.push(cK("Waited on", `${n.span_name} in ${n.trace_name}`));
                      let l = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      (l.length > 0 && t.push(cK("Notes", l.join(", "))),
                          null != e.span.error && t.push(cK("Error", e.span.error)));
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
                              s = "cost_usd" === t ? cH(Number(n)) : String(n);
                          r.set(l, [...(r.get(l) ?? []), cK(t.replace(/_/g, " "), s)]);
                      }
                      return [
                          { title: null, rows: t },
                          ...cB.flatMap((e) => {
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
                                      : (0, a.jsx)(j.E, {
                                            variant: "body-xs/semibold",
                                            color: "text-strong",
                                            className: c3.xd,
                                            children: t,
                                        }),
                                  n.map((e) => {
                                      let { label: t, value: n, block: l } = e;
                                      return (0, a.jsxs)(
                                          i.Fragment,
                                          {
                                              children: [
                                                  (0, a.jsx)(j.E, {
                                                      variant: "body-xs/semibold",
                                                      color: "text-muted",
                                                      children: t,
                                                  }),
                                                  l
                                                      ? (0, a.jsx)(j.E, {
                                                            variant: "mono-md/bold",
                                                            color: "text-default",
                                                            selectable: !0,
                                                            className: c3.vl,
                                                            children: n,
                                                        })
                                                      : (0, a.jsx)(j.E, {
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
function dt(e) {
    let { trace: t } = e,
        n = i.useMemo(() => cX(t), [t]);
    return (0, a.jsx)(c5, { stats: n });
}
function dn(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = i.useMemo(() => (null == e ? null : (0, cD.TK)(e)), [e]),
                [n, l] = i.useState(() => (null == t ? c2 : (0, cD.hB)(t))),
                [r, a] = i.useState(null),
                s = i.useRef(null == t ? new Set() : (0, cD.x7)(t));
            i.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, cD.x7)(t)), l((n) => (0, cD._0)(n, t, e)));
            }, [t]);
            let u = i.useMemo(() => (null == t ? [] : (0, cD.wu)(t, n)), [t, n]),
                o = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, cD.IE)(t, e);
                        null != n && l((e) => (0, cD.TN)(e, n));
                    },
                    [t],
                ),
                c = i.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, cD.IE)(t, e);
                        null != n && l((e) => (0, cD.H$)(e, n));
                    },
                    [t],
                ),
                m = i.useCallback(() => {
                    null != t && l((0, cD.vH)(t));
                }, [t]),
                f = i.useCallback(() => {
                    null != t && l((0, cD.rQ)(t));
                }, [t]),
                h = i.useCallback(() => {
                    null != t && l((0, cD.hB)(t));
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
        { rows: l, collapsed: r, selected: s, selectedKey: u, select: o, toggle: c, reveal: d, expandSubtree: f } = n,
        h = (0, cD.dj)(t),
        g = i.useMemo(() => (0, cD.nF)(h), [h]),
        p = g.length > 1 ? ((g[1] - g[0]) / h) * 100 : 100,
        x = i.useCallback(
            (e) => {
                let t,
                    n = l.findIndex((e) => e.key === u),
                    a = l[n];
                if ("ArrowDown" === e.key) t = l[Math.min(l.length - 1, n + 1)];
                else if ("ArrowUp" === e.key) t = l[Math.max(0, n - 1)];
                else if (null == a) return;
                else if ("smaller" === a.kind && ("ArrowRight" === e.key || "Enter" === e.key)) d(a.parentKey);
                else if ("node" === a.kind && "ArrowRight" === e.key && e.shiftKey) f(a.key);
                else if ("node" === a.kind && "ArrowRight" === e.key && r.has(a.key)) c(a.key);
                else {
                    if ("node" !== a.kind || "ArrowLeft" !== e.key || !(a.node.children.length > 0) || r.has(a.key))
                        return;
                    c(a.key);
                }
                (e.preventDefault(),
                    null != t && (o(t.key), document.getElementById(c7(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [r, f, d, l, o, u, c],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(cY.c, {
                children: [
                    (0, a.jsxs)("div", {
                        className: c3.z,
                        children: [
                            (0, a.jsx)(j.E, {
                                variant: "body-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: cV(t),
                            }),
                            (0, a.jsx)(j.E, {
                                variant: "body-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: cW(t),
                            }),
                            null == t.started_by
                                ? null
                                : (0, a.jsx)(j.E, {
                                      variant: "body-sm/normal",
                                      color: "text-muted",
                                      children: `Started by ${t.started_by.trace_name}`,
                                  }),
                            0 === t.dropped
                                ? null
                                : (0, a.jsx)(j.E, {
                                      variant: "body-sm/normal",
                                      color: "text-feedback-warning",
                                      children: `${cz(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, a.jsx)(dt, { trace: t }),
                    (0, a.jsxs)("div", {
                        className: c3.KE,
                        children: [
                            (0, a.jsx)(m.$, { size: "sm", variant: "secondary", text: "Time sinks", onClick: n.reset }),
                            (0, a.jsx)(m.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Expand all",
                                onClick: n.expandAll,
                            }),
                            (0, a.jsx)(m.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Collapse all",
                                onClick: n.collapseAll,
                            }),
                            (0, a.jsx)(j.E, {
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
                        "aria-activedescendant": null == u ? void 0 : c7(u),
                        className: c3.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(p) },
                        onKeyDown: x,
                        children: [
                            (0, a.jsxs)("div", {
                                className: c3.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: c3.So,
                                        children: (0, a.jsx)(j.E, {
                                            variant: "body-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: c3.c1,
                                        children: g.map((e) =>
                                            (0, a.jsx)(
                                                j.E,
                                                {
                                                    variant: "body-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${c3.io} ${(e / h) * 100 > 85 ? c3.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / h) * 100),
                                                    },
                                                    children: 0 === e ? "0" : cG(e),
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
                                    : (0, a.jsx)(c6, { row: e, extent: h, selected: e.key === u, onReveal: d }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(cJ.j, { children: (0, a.jsx)(de, { node: s }) }),
        ],
    });
}
function dl(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: r } = e,
        i = (0, c.bG)([oU.A], () => oU.A.getTimingTrace(l, r), [l, r]),
        s = i?.name ?? "Perf Trace";
    return (0, a.jsxs)(c0.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, a.jsx)(c1.rQ, { title: s }),
            null == i
                ? (0, a.jsx)(cY.c, {
                      children: (0, a.jsx)(j.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, a.jsx)(dn, { trace: i }),
        ],
    });
}
let dr = { running: c3.Vf, ok: c3.mo, error: c3.Sr };
function da(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", { className: `${c3.Om} ${dr[t]}`, role: "img", "aria-label": cF[t] });
}
function di(e, t) {
    (0, K.qf)((n) => (0, a.jsx)(dl, { ...n, projectId: e, traceId: t }));
}
function ds(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        r = i.useCallback(() => di(t, n.id), [t, n.id]);
    return (0, a.jsxs)(tZ.D, {
        className: c3.nM,
        onClick: r,
        children: [
            (0, a.jsxs)("div", {
                className: c3.sU,
                children: [
                    (0, a.jsx)(da, { status: (0, cD.lQ)(n) }),
                    (0, a.jsx)(j.E, {
                        variant: "body-sm/semibold",
                        color: "text-default",
                        className: c3._k,
                        children: n.name,
                    }),
                    (0, a.jsx)(j.E, {
                        variant: "body-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: cV(n),
                    }),
                ],
            }),
            (0, a.jsx)(j.E, { variant: "body-xs/normal", color: "text-muted", tabularNumbers: !0, children: cW(n) }),
            null == l
                ? null
                : (0, a.jsx)(j.E, { variant: "body-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function du(e) {
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
            (0, cP.o)(new Blob([e], { type: "application/json" }), `conjure-traces-${t}.json`).catch((e) => {
                console.error("[conjure] trace export failed", t, e);
            });
        }, [t, n]);
    return (0, a.jsx)(ek.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: ek.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, a.jsx)(ew.W, {
                "data-menu-migrated": !0,
                navId: `conjure-traces-${t}`,
                "aria-label": "Trace actions",
                onClose: l,
                onSelect: l,
                children: (0, a.jsx)(eA.rX, {
                    children: (0, a.jsx)(eA.Dr, {
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
            return (0, a.jsx)(ta.K, {
                ...e,
                buttonRef: l,
                icon: ir.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "More",
                "aria-haspopup": "menu",
                "aria-expanded": n,
            });
        },
    });
}
function dc(e) {
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
                    let t = e.map(cX);
                    function n(e) {
                        return t.reduce((t, n) => t + e(n), 0);
                    }
                    return {
                        categories: cD.BF.map((e) => ({
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
              className: c3.Ie,
              children: [
                  (0, a.jsx)(j.E, { variant: "body-sm/medium", color: "text-default", children: "No traces yet" }),
                  (0, a.jsx)(j.E, {
                      variant: "body-sm/normal",
                      color: "text-muted",
                      children:
                          "Turns and project operations over 100ms show up here as they run. Periodic checks and live preview requests show up only when they take a second or fail.",
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: c3.nd,
              children: [
                  (0, a.jsxs)("div", {
                      className: c3.Ko,
                      children: [
                          (0, a.jsx)("div", {
                              className: c3.fH,
                              children: (0, a.jsx)(cT.I, {
                                  query: l,
                                  onChange: r,
                                  onClear: () => r(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, a.jsx)(du, { projectId: t, traces: s }),
                      ],
                  }),
                  (0, a.jsxs)(tz.Ch, {
                      className: c3.XG,
                      children: [
                          (0, a.jsx)(c5, { stats: o }),
                          0 === u.length
                              ? (0, a.jsx)(j.E, {
                                    variant: "body-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, a.jsx)("ul", {
                                    className: c3.p_,
                                    "aria-label": "Traces",
                                    children: u.map((e) =>
                                        (0, a.jsx)(
                                            "li",
                                            { children: (0, a.jsx)(ds, { projectId: t, trace: e }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function dd(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function dm(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function df(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function dh(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function dg(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function dp(e) {
    return T.intl.string("preview" === e ? R.default["2yLYlG"] : R.default.eiAi57);
}
let dx = ["all", "preview", "stable", "web"];
function dv(e) {
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
function dj(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : T.intl.formatToPlainString(R.default["XO/bN4"], {
              p50: dd(e.memory_p50_bytes ?? 0),
              p999: dd(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let db = {
    db: () => R.default["7l+DFG"],
    db_preview: () => R.default.FAuffi,
    runtime: () => R.default["Gkl+ab"],
    runtime_preview: () => R.default.ynpJzv,
    bot: () => R.default["5/i0cj"],
    bot_preview: () => R.default.m2jsnw,
};
var dy = n(911608),
    dk = n(177427);
function dw(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: dk.KE,
        children: [
            (0, a.jsx)("div", {
                className: dk.IQ,
                children:
                    "loading" === n
                        ? (0, a.jsx)(b.y, { type: b.t.PULSING_ELLIPSIS })
                        : "failed" === n
                          ? (0, a.jsx)(j.E, {
                                variant: "body-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: T.intl.string(R.default.ZVByPX),
                            })
                          : null != t
                            ? (0, a.jsx)(j.E, {
                                  variant: "body-xs/normal",
                                  color: "text-muted",
                                  children: T.intl.formatToPlainString(R.default.INVO50, { time: dh(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(m.$, { variant: "secondary", size: "sm", text: T.intl.string(R.default.oKEgiu), onClick: l }),
        ],
    });
}
function dA(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: dk.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(j.E, { variant: "body-xs/semibold", color: "text-muted", className: dk.Gf, children: t }),
            n,
        ],
    });
}
function dS(e) {
    let { label: t, value: n, hint: l, critical: r = !1, icon: i, state: s } = e;
    return (0, a.jsxs)("div", {
        className: dk.N8,
        children: [
            (0, a.jsxs)("div", {
                className: dk.x7,
                children: [
                    (0, a.jsxs)("span", {
                        className: dk.kS,
                        children: [i, (0, a.jsx)(j.E, { variant: "body-sm/normal", color: "text-muted", children: t })],
                    }),
                    (0, a.jsxs)("span", {
                        className: dk.kS,
                        children: [
                            s,
                            (0, a.jsx)(j.E, {
                                variant: "body-sm/medium",
                                color: r ? "text-feedback-critical" : "text-default",
                                children: n,
                            }),
                        ],
                    }),
                ],
            }),
            null != l && (0, a.jsx)(j.E, { variant: "body-xs/normal", color: "text-muted", children: l }),
        ],
    });
}
function dC(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        i = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = i >= 0.9;
    return (0, a.jsxs)("div", {
        className: dk.N8,
        children: [
            (0, a.jsxs)("div", {
                className: dk.x7,
                children: [
                    (0, a.jsx)(j.E, { variant: "body-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(j.E, {
                        variant: "body-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, a.jsx)(dy.z, {
                value: 100 * i,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? dk.dh : void 0,
            }),
        ],
    });
}
function dN(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, a.jsx)(dS, {
            label: T.intl.string(R.default.SXP7pD),
            value: T.intl.string(R.default.E5hKVi),
            hint: dv(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, a.jsx)(dS, {
            label: T.intl.string(R.default.SXP7pD),
            value: "\u2014",
            hint: T.intl.string(R.default.AGvoMJ),
        });
    let l = dj(n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(dS, { label: T.intl.string(R.default["H/X+FI"]), value: dm(n.cpu_ms) }),
            null != l && (0, a.jsx)(dS, { label: T.intl.string(R.default.lmFmMO), value: l }),
        ],
    });
}
function dI(e) {
    let { analytics: t } = e,
        n = T.intl.string(R.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, a.jsx)(dA, {
            title: n,
            children: (0, a.jsx)(j.E, { variant: "body-sm/normal", color: "text-muted", children: dv(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? db[t] : null) ? T.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, a.jsx)(dA, {
        title: n,
        children:
            0 === l.length
                ? (0, a.jsx)(j.E, {
                      variant: "body-sm/normal",
                      color: "text-muted",
                      children: T.intl.string(R.default.AGvoMJ),
                  })
                : l.map((e) => {
                      let { object: t, label: n } = e;
                      return (0, a.jsx)(
                          dS,
                          {
                              label: n,
                              value: T.intl.formatToPlainString(R.default["w/2voO"], { cpu: dm(t.cpu_ms) }),
                              hint: dj(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var dE = n(678708),
    d_ = n(414499),
    dM = n(714800),
    dR = n(81466),
    dT = n(424383),
    dP = n(664121),
    dL = n(816943),
    d$ = n(268791),
    dD = n(514042),
    dq = n(872351),
    dF = n(708988),
    dO = n(150934),
    dG = n(417270);
let dz = "Restart Agent",
    dU = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
function dB(e) {
    return null != e && "" !== e ? e.slice(0, 12) : "None";
}
function dK(e, t) {
    return { label: e, value: null != t && "" !== t ? dh(t) : "Unknown", icon: "calendar" };
}
function dH(e) {
    for (let [t, n] of [
        ["GB", 1e9],
        ["MB", 1e6],
        ["KB", 1e3],
    ])
        if (e >= n) return `${Number((e / n).toFixed(1))} ${t}`;
    return `${e} B`;
}
function dV(e, t, n, l) {
    let [r, a] = dU[n.status];
    return { label: e, value: `${dH(n.bytes)} of ${dH(n.max)} \xb7 ${r}`, hint: l, icon: t, state: a };
}
function dW(e) {
    if (null == e) return { label: "Last Save", value: "None since this agent instance started", icon: "save" };
    let t = dh(e.at);
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
let dX = { main: "Main vs Remote", wip: "WIP vs Remote" };
function dQ(e) {
    let t = `container ${dB(e.local)} \xb7 remote ${dB(e.remote)}`,
        n = e.ahead ?? 0,
        l = e.behind ?? 0,
        r = { label: dX[e.ref], icon: "remote", hint: t };
    switch (e.state) {
        case "in_sync":
            return { ...r, value: "In Sync", state: "ok" };
        case "ahead":
            return { ...r, value: `${df(n)} Ahead`, hint: `${t} \xb7 not pushed yet`, state: "ahead" };
        case "behind":
            return { ...r, value: `${df(l)} Behind`, state: "behind" };
        case "diverged":
            return { ...r, value: `Diverged (${df(n)} Ahead, ${df(l)} Behind)`, state: "error" };
        case "not_fetched":
            return { ...r, value: "Behind", hint: `${t} \xb7 the remote head isn't in the container`, state: "behind" };
        case "missing_remote":
            return { ...r, value: "Missing on Remote", state: "error" };
        case "missing_local":
            return { ...r, value: "Missing in Container", state: "warning" };
    }
}
let dZ = ["main", "wip"];
var dY = n(400154);
let dJ = {
        checkout: dE.FolderIcon,
        edit: h.PencilIcon,
        remote: d_.CloudIcon,
        commits: dM.ListNumberedIcon,
        calendar: dR.CalendarIcon,
        save: dT.SaveIcon,
        objects: dP.ServerIcon,
        download: dL.CloudDownloadIcon,
        size: d$.SpeedometerIcon,
        file: dD.FileIcon,
    },
    d0 = {
        ok: [l6.CircleCheckIcon, tm.A.colors.ICON_FEEDBACK_POSITIVE],
        warning: [cZ.WarningIcon, tm.A.colors.ICON_FEEDBACK_WARNING],
        error: [sy.CircleXIcon, tm.A.colors.ICON_FEEDBACK_CRITICAL],
        ahead: [dq.ArrowSmallUpIcon, tm.A.colors.ICON_MUTED],
        behind: [dF.ArrowSmallDownIcon, tm.A.colors.ICON_MUTED],
    };
function d1(e) {
    let { projectId: t } = e,
        { state: n } = {
            state: (0, c.bG)([oU.A], () => oU.A.getGitInfoState(t), [t]),
            load: i.useCallback(() => (0, cR.DK)(t), [t]),
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
                    `Updated ${dh(r)}`,
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
    return (0, a.jsxs)(dA, {
        title: "Git",
        children: [
            (0, a.jsx)("div", {
                className: dY.Lj,
                children:
                    "" !== l.line &&
                    (0, a.jsx)(j.E, {
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
                    if (!e.running || null != e.localError) return [dW(e.lastSave)];
                    if (!e.checkout)
                        return [
                            { label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" },
                            dW(e.lastSave),
                        ];
                    let l = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
                    void 0 !== e.dirtyFiles &&
                        l.push({
                            label: "Uncommitted Files",
                            value: null == e.dirtyFiles ? "Unknown" : df(e.dirtyFiles),
                            hint: null == e.dirtyFiles ? "git status didn't finish in time." : void 0,
                            icon: "edit",
                        });
                    let r = dZ.flatMap((t) => e.comparisons?.find((e) => e.ref === t) ?? []);
                    (r.length > 0
                        ? l.push(...r.map(dQ))
                        : l.push(
                              { label: "Main", value: dB(e.heads.main), icon: "remote" },
                              { label: "WIP", value: dB(e.heads.wip), icon: "remote" },
                          ),
                        l.push(
                            { label: "Commits", value: null != e.commits ? df(e.commits) : "Unknown", icon: "commits" },
                            dK("Oldest Commit", e.oldest),
                            dK("Newest Commit", e.newest),
                            dW(e.lastSave),
                        ),
                        null != e.objects &&
                            l.push(
                                ((n = 1 === (t = e.objects).packs ? "1 pack" : `${df(t.packs)} packs`),
                                {
                                    label: "Objects",
                                    value: `${df(t.loose)} loose (${dd(t.looseBytes)}) \xb7 ${df(t.packed)} packed in ${n} (${dd(t.packBytes)})`,
                                    hint: t.garbage > 0 ? `${df(t.garbage)} garbage files` : void 0,
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
                                      value: `Yes \xb7 ${df(e.missingObjects)} not downloaded`,
                                      hint: "Fetched on demand; this read never fetches.",
                                  }
                            : { ...t, value: "No" };
                    })(e);
                    return (
                        null != a && l.push(a),
                        null != e.localBytes &&
                            l.push(
                                dV(
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
                                  dV("Largest File", "file", e.largestFile, "Largest file version in the local copy."),
                              ),
                        l
                    );
                })(n.info).map((e) => {
                    let { label: t, value: n, hint: l, icon: r, state: i } = e,
                        s = dJ[r],
                        [u, o] = null != i ? d0[i] : [null, void 0];
                    return (0, a.jsx)(
                        dS,
                        {
                            label: t,
                            value: n,
                            hint: l,
                            critical: "error" === i,
                            icon: (0, a.jsx)(s, { size: "xs", color: tm.A.colors.ICON_MUTED }),
                            state: null != u ? (0, a.jsx)(u, { size: "xs", color: o }) : void 0,
                        },
                        t,
                    );
                }),
        ],
    });
}
function d2(e) {
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
                null != a && a !== s.current && ((s.current = a), (0, cR.DK)(e));
            }, [e, a]),
                i.useEffect(() => {
                    if (null == r) return;
                    function t() {
                        let t = oU.A.getInstancePollRequestedAt(e);
                        (null != t && Date.now() - t < 1e4) || (0, cR.gX)(e);
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
            let u = i.useCallback(() => (0, cR.VW)(e, n), [e, n]);
            return {
                state: t,
                busy: "pending" === t.phase || "restarting" === t.phase,
                clearAlarm: n,
                setClearAlarm: l,
                confirmCopy: {
                    title: "Restart Agent?",
                    body: `Ends this project's agent instance; the next request starts a new one. Lost: in-memory state and any running turn. Kept: saved data (conversation, settings, storage) and the container disk. ${n ? "The pending alarm is cleared, so scheduled wakeups wait until something sets it again." : "The pending alarm is kept."}`,
                    confirm: dz,
                },
                restart: u,
            };
        })(t),
        d = i.useCallback(() => {
            (0, E.A)({ title: u.title, subtitle: u.body, confirmText: u.confirm, variant: "critical", onConfirm: o });
        }, [u, o]);
    return (0, a.jsxs)("div", {
        className: dY.Lj,
        children: [
            (0, a.jsxs)("div", {
                className: dY.nM,
                children: [
                    (0, a.jsx)(dO.S, {
                        label: "Also Clear Alarm",
                        description: "Scheduled wakeups wait until something sets the alarm again.",
                        checked: r,
                        onChange: s,
                        disabled: l,
                    }),
                    (0, a.jsx)(m.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        icon: dG.RetryIcon,
                        text: dz,
                        loading: l,
                        disabled: l,
                        onClick: d,
                    }),
                ],
            }),
            (0, a.jsx)(j.E, {
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
                            return `Restarted \xb7 new instance since ${dh(e.instanceSince)}`;
                        case "failed":
                            return `Failed: ${e.reason} \xb7 ${dh(e.observedAt)}`;
                    }
                })(n),
            }),
        ],
    });
}
function d3(e, t) {
    return (0, a.jsx)(dS, {
        label: e,
        value: T.intl.formatToPlainString(R.default.yHJxuP, { count: df((0, cf.aM)(t)) }),
        hint: `${df(t.input_tokens)} in \xb7 ${df(t.output_tokens)} out \xb7 ${df(t.cache_read_input_tokens)} cache read`,
    });
}
function d4(e) {
    let t,
        n,
        l,
        r,
        s,
        u,
        o,
        d,
        f,
        h,
        { projectId: g, status: p, fetchState: x, onRefresh: v } = e,
        {
            lastTurn: b,
            lastCompaction: y,
            lastDecline: k,
            forceState: w,
            restartState: A,
            turnRunning: S,
            handleForceCompaction: C,
            handleForceCompactionOverride: N,
            handleRestartWorkspace: I,
            lifetime: E,
            limits: _,
            session: M,
            contextCeiling: P,
        } = ((t = (0, c.bG)([oU.A], () => oU.A.getLastTurnUsage(g), [g])),
        (n = (0, c.bG)([oU.A], () => oU.A.getLastCompaction(g), [g])),
        (l = (0, c.bG)([oU.A], () => oU.A.getLastCompactionDecline(g), [g])),
        (r = (0, c.bG)([oU.A], () => oU.A.getForceCompactionState(g), [g])),
        (s = (0, c.bG)([oU.A], () => oU.A.getSandboxRestartState(g), [g])),
        (u = (0, c.bG)([rs.A], () => rs.A.isThinking(g), [g])),
        (o = i.useCallback(() => (0, cR.Lj)(g), [g])),
        (d = i.useCallback(() => (0, cR.Lj)(g, !0), [g])),
        (f = i.useCallback(() => (0, cR.bq)(g), [g])),
        (h = p?.agent?.limits ?? null),
        {
            lastTurn: t,
            lastCompaction: n,
            lastDecline: l,
            forceState: r,
            restartState: s,
            turnRunning: u,
            handleForceCompaction: o,
            handleForceCompactionOverride: d,
            handleRestartWorkspace: f,
            lifetime: p?.agent?.lifetime ?? null,
            limits: h,
            session: p?.agent?.session ?? null,
            contextCeiling: n?.promptCeiling ?? h?.context_window_tokens ?? null,
        });
    return (0, a.jsxs)("div", {
        className: dY.Mf,
        children: [
            (0, a.jsx)(dw, { generatedAt: p?.generated_at ?? null, fetchState: x, onRefresh: v }),
            (0, a.jsx)(dA, {
                title: T.intl.string(R.default.JghNal),
                children:
                    null == E
                        ? (0, a.jsx)(j.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: T.intl.string(R.default.s0U5Fv),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(dS, {
                                      label: T.intl.string(R.default["9nqym2"]),
                                      value: df((0, cf.a7)(E.cost_usd)),
                                      hint: T.intl.formatToPlainString(R.default.NCdUIh, { count: df(E.turns) }),
                                  }),
                                  d3(T.intl.string(R.default.xtxP0e), E.orchestrator),
                                  d3(T.intl.string(R.default["9Sj3SX"]), E.codegen),
                                  d3(T.intl.string(R.default.ANCEo3), (0, cf.wU)(E.compaction)),
                                  p?.agent?.outcomes != null &&
                                      Object.keys(p.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(dS, {
                                          label: T.intl.string(R.default.SQHm7C),
                                          value: Object.entries(p.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${df(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, a.jsx)(dA, {
                title: T.intl.string(R.default.dZHPE5),
                children:
                    null == b
                        ? (0, a.jsx)(j.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: T.intl.string(R.default.DfVjal),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  d3(T.intl.string(R.default["7X3i9d"]), b.total),
                                  (0, a.jsx)(dS, {
                                      label: T.intl.string(R.default["8OUg09"]),
                                      value: `${Math.round((b.cache_hit_rate ?? (0, cf.CA)(b.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(dA, {
                title: T.intl.string(R.default.NbRk9a),
                children: [
                    null != y && null != P
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(dC, {
                                      label: T.intl.string(R.default.Kw5wiQ),
                                      used: y.tokensAfter,
                                      max: P,
                                      formatValue: df,
                                  }),
                                  (0, a.jsx)(dS, {
                                      label: T.intl.string(R.default.mRbSns),
                                      value: `${df(y.tokensBefore)} \u{2192} ${df(y.tokensAfter)}`,
                                      hint: T.intl.formatToPlainString(R.default.Vq3skS, {
                                          count: df(y.retainedMessages),
                                          time: dh(y.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(j.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children:
                                  null != P
                                      ? T.intl.formatToPlainString(R.default.GMLCNv, { ceiling: df(P) })
                                      : T.intl.string(R.default.s0U5Fv),
                          }),
                    null != k &&
                        (0, a.jsx)(dS, {
                            label: T.intl.string(R.default["4BX5KK"]),
                            value: `${df(k.projected)} / ${df(k.threshold)}`,
                            critical: !0,
                            hint: T.intl.formatToPlainString(R.default["6ngCax"], { time: dh(k.observedAt) }),
                        }),
                    (0, a.jsxs)("div", {
                        className: dY.Lj,
                        children: [
                            (0, a.jsx)(m.$, {
                                variant: "secondary",
                                size: "sm",
                                text: T.intl.string(R.default["1EiJeb"]),
                                disabled: "pending" === w,
                                onClick: C,
                            }),
                            (0, a.jsx)(j.E, {
                                variant: "body-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof w && "compacted" !== w.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return T.intl.string(R.default.wox6Ev);
                                    if ("pending" === e) return T.intl.string(R.default.OcPHQ1);
                                    let t = dh(e.observedAt);
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
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(m.$, {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: T.intl.string(R.default.ZxG2AI),
                                            onClick: N,
                                        }),
                                        (0, a.jsx)(j.E, {
                                            variant: "body-xs/normal",
                                            color: "text-muted",
                                            children: T.intl.string(R.default.V73vdN),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: dY.Lj,
                        children: [
                            (0, a.jsx)(m.$, {
                                variant: "secondary",
                                size: "sm",
                                text: T.intl.string(R.default["5qCjBu"]),
                                loading: "pending" === A,
                                disabled: "pending" === A || S,
                                onClick: I,
                            }),
                            (0, a.jsx)(j.E, {
                                variant: "body-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof A && "restarted" !== A.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return T.intl.string(R.default.mlok8D);
                                    if ("pending" === e) return T.intl.string(R.default["1ugSyK"]);
                                    let t = dh(e.observedAt);
                                    return T.intl.formatToPlainString(
                                        "restarted" === e.outcome ? R.default["76mfqO"] : R.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(A),
                            }),
                        ],
                    }),
                    (0, a.jsx)(d2, { projectId: g }),
                ],
            }),
            (0, a.jsx)(d1, { projectId: g }),
            (null != M || p?.analytics != null) &&
                (0, a.jsxs)(dA, {
                    title: T.intl.string(R.default.EsSzCS),
                    children: [
                        null != M &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(dS, {
                                        label: T.intl.string(R.default.CLXHAs),
                                        value: dh(M.instance_since),
                                        hint: T.intl.string(R.default.UCwUEX),
                                    }),
                                    (0, a.jsx)(dS, { label: T.intl.string(R.default["8V8e1Z"]), value: df(M.sockets) }),
                                    (0, a.jsx)(dS, {
                                        label: T.intl.string(R.default["4pBzYW"]),
                                        value: M.turn_inflight
                                            ? T.intl.string(R.default.Wv025I)
                                            : T.intl.string(R.default["7/lsFY"]),
                                    }),
                                    M.queued_messages > 0 &&
                                        (0, a.jsx)(dS, {
                                            label: T.intl.string(R.default["3oUYnv"]),
                                            value: df(M.queued_messages),
                                        }),
                                ],
                            }),
                        p?.analytics != null && (0, a.jsx)(dN, { analytics: p.analytics }),
                    ],
                }),
            null != _ &&
                (0, a.jsxs)(dA, {
                    title: T.intl.string(R.default["LEIhp/"]),
                    children: [
                        (0, a.jsx)(dS, {
                            label: T.intl.string(R.default.IlDBN3),
                            value: df(_.max_subagent_iterations),
                        }),
                        (0, a.jsx)(dS, {
                            label: T.intl.string(R.default["ZdzKR+"]),
                            value: T.intl.formatToPlainString(R.default.yHJxuP, { count: df(_.context_window_tokens) }),
                        }),
                        (0, a.jsx)(dS, {
                            label: T.intl.string(R.default.cIhN2W),
                            value: T.intl.formatToPlainString(R.default.yHJxuP, {
                                count: df(_.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(dS, {
                            label: T.intl.string(R.default["+fOn/q"]),
                            value: df(_.max_user_message_chars),
                        }),
                        (0, a.jsx)(dS, { label: T.intl.string(R.default.kIHga0), value: df(_.max_build_attempts) }),
                        (0, a.jsx)(dS, { label: T.intl.string(R.default.Iw03yW), value: df(_.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var d5 = n(237528),
    d7 = n(629584),
    d9 = n(531893);
function d8(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: d9.ut,
              children: (0, a.jsx)(j.E, {
                  variant: "body-xs/normal",
                  color: "text-feedback-critical",
                  children: T.intl.string(R.default.h1SE6R),
              }),
          });
}
function d6(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: d9.qf,
              children: [
                  (0, a.jsx)(j.E, {
                      variant: "body-sm/medium",
                      color: "text-default",
                      children: T.intl.string(R.default.h1SE6R),
                  }),
                  (0, a.jsx)(j.E, {
                      variant: "body-xs/normal",
                      color: "text-muted",
                      children: T.intl.string(R.default["8SErdg"]),
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: d9.qf,
              children: [
                  (0, a.jsx)(j.E, { variant: "body-sm/medium", color: "text-default", children: n }),
                  (0, a.jsx)(j.E, { variant: "body-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function me(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: d9.ps,
              children: (0, a.jsx)(j.E, {
                  variant: "body-xs/normal",
                  color: "text-muted",
                  children: T.intl.string(R.default.V7Ri8H),
              }),
          })
        : null;
}
var mt = n(109079);
let mn = i.memo(function (e) {
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
        className: mt.vK,
        children: [
            (0, a.jsx)(j.E, {
                tag: "span",
                variant: "body-xs/normal",
                color: "text-subtle",
                className: mt.Mt,
                selectable: !0,
                children: c$(n.ts) ?? n.ts,
            }),
            (0, a.jsx)(j.E, {
                tag: "span",
                variant: "footnote/semibold",
                color:
                    "error" === (t = n.level)
                        ? "text-feedback-critical"
                        : "warn" === t
                          ? "text-feedback-warning"
                          : "text-muted",
                className: mt.dm,
                children: n.level,
            }),
            (0, a.jsxs)("div", {
                className: mt.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, a.jsx)("span", { className: mt.Cq, children: (0, a.jsx)(d5.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, a.jsx)("span", {
                            className: mt.Cq,
                            title: n.build ?? void 0,
                            children: (0, a.jsx)(d5.v, { text: T.intl.string(R.default.TrC9c8), variant: "redLight" }),
                        }),
                    null != o
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  "" !== o.prefix &&
                                      (0, a.jsxs)(j.E, {
                                          tag: "span",
                                          variant: "body-xs/normal",
                                          color: c,
                                          selectable: !0,
                                          children: [o.prefix, " "],
                                      }),
                                  (0, a.jsxs)(tZ.D, {
                                      className: mt.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": u,
                                      "aria-label": T.intl.string(R.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          r
                                              ? (0, a.jsx)(eC.ChevronSmallDownIcon, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, a.jsx)(t2.ChevronSmallRightIcon, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                }),
                                          (0, a.jsxs)(j.E, {
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
                                      (0, a.jsx)(j.E, {
                                          tag: "div",
                                          variant: "body-xs/normal",
                                          color: c,
                                          className: mt.dF,
                                          selectable: !0,
                                          id: u,
                                          children: o.pretty,
                                      }),
                              ],
                          })
                        : (0, a.jsx)(j.E, {
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
function ml(e) {
    let { projectId: t } = e,
        n = (0, c.bG)([cM.A], () => cM.A.getLogs(t), [t]),
        l = (0, c.bG)([cM.A], () => cM.A.getHistoryState(t, "logs")),
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
                dx.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return dp(e);
                            case "web":
                                return T.intl.string(R.default.IVzfVV);
                            default:
                                return T.intl.string(R.default["Um1/8L"]);
                        }
                    })(e),
                })),
            [],
        );
    return (0, a.jsxs)("div", {
        className: mt.$F,
        children: [
            (0, a.jsxs)("div", {
                className: mt.y4,
                children: [
                    (0, a.jsx)(d7.I, {
                        look: "pill",
                        "aria-label": T.intl.string(R.default.MhvyUU),
                        options: g,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: mt.KT,
                        children: (0, a.jsx)(cT.I, {
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
            n.length > 0 && (0, a.jsx)(d8, { state: l }),
            (0, a.jsxs)(tz.Ch, {
                ref: m,
                onScroll: h,
                overflow: "auto",
                className: mt.sx,
                children: [
                    (0, a.jsx)(me, { state: l }),
                    0 === n.length
                        ? (0, a.jsx)(d6, {
                              state: l,
                              emptyTitle: T.intl.string(R.default.S7qlPG),
                              emptyBody: T.intl.string(R.default.nD0S9z),
                          })
                        : 0 === d.length
                          ? (0, a.jsx)(j.E, {
                                variant: "body-xs/normal",
                                color: "text-muted",
                                children: T.intl.string(R.default["4SIdrX"]),
                            })
                          : d.map((e) => (0, a.jsx)(mn, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function mr(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, a.jsx)(i.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, a.jsx)(i.Fragment, { children: r("stable", l) }, "stable")),
        (0, a.jsx)(dA, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, a.jsx)(j.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: T.intl.string(R.default.umcjif),
                      }),
        })
    );
}
function ma(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(dS, {
                      label: T.intl.formatToPlainString(R.default["01ZMS4"], { env: dp(n) }),
                      value: ((t = l.connected), T.intl.string(t ? R.default.Wv025I : R.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(dS, {
                      label: T.intl.string(R.default["z1dh+F"]),
                      value: df(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${dh(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(dS, { label: T.intl.string(R.default.Iz5GnJ), value: df(l.guild_count) }),
                  (0, a.jsx)(dS, {
                      label: T.intl.string(R.default["7UqtNv"]),
                      value: df(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? T.intl.formatToPlainString(R.default.MasSly, {
                                    code: l.last_close_code,
                                    time: dh(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(dS, {
                          label: T.intl.string(R.default["x3+JXJ"]),
                          value: df(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(dS, { label: dp(n), value: T.intl.string(R.default.lTHQss) });
}
function mi(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, a.jsx)(dS, {
        label: dp(t),
        value: T.intl.formatToPlainString(R.default["Xq+wHT"], {
            requests: df(n.requests),
            failures: df(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? T.intl.formatToPlainString(R.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: dh(n.last_failure.at),
                  })
                : T.intl.formatToPlainString(R.default["7KlGT6"], { time: dh(n.since) }),
    });
}
function ms(e) {
    let { env: t, runtime: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(dS, {
                label: T.intl.formatToPlainString(R.default["92gVTm"], { env: dp(t) }),
                value: df(n.connections),
            }),
            n.schedules.map((e) =>
                (0, a.jsx)(
                    dS,
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
                                  ? T.intl.formatToPlainString(R.default.wxAWNv, { time: dh(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function mu(e) {
    let { env: t, metrics: n } = e;
    return (0, a.jsx)(dS, {
        label: dp(t),
        value: T.intl.formatToPlainString(R.default.suAOj9, { calls: df(n.calls), errors: df(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function mo(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, a.jsx)(dA, {
            title: t,
            children: (0, a.jsx)(j.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children: T.intl.string(R.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        i = n.cpu_ms_total > 0;
    return (0, a.jsxs)(dA, {
        title: t,
        children: [
            (0, a.jsx)(dS, {
                label: T.intl.string(R.default.xtD4Zp),
                value: df(n.requests),
                hint: T.intl.formatToPlainString(R.default["7KlGT6"], { time: dh(n.since) }),
            }),
            (0, a.jsx)(dS, { label: T.intl.string(R.default.gfRhR3), value: df(n.errors), critical: n.errors > 0 }),
            i
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(dC, {
                              label: T.intl.string(R.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: dm,
                          }),
                          (0, a.jsx)(dS, {
                              label: T.intl.string(R.default.mSKImM),
                              value: dm(r),
                              hint: T.intl.formatToPlainString(R.default.JqMU05, {
                                  total: dm(n.cpu_ms_total),
                                  wall: dm(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(dS, {
                      label: T.intl.string(R.default.LEJ5r3),
                      value: T.intl.string(R.default["2Ekb2b"]),
                      hint: T.intl.string(R.default.G0aq7i),
                  }),
            !i &&
                n.wall_ms_total > 0 &&
                (0, a.jsx)(dS, { label: T.intl.string(R.default.xvmL1D), value: dm(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, a.jsx)(dS, { label: T.intl.string(R.default["4sQYwH"]), value: df(n.exceeded_cpu), critical: !0 }),
            (0, a.jsx)(dS, {
                label: T.intl.string(R.default.bQenOy),
                value: df(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: T.intl.formatToPlainString(R.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, a.jsx)(dS, { label: T.intl.string(R.default.xgpn4Y), value: dg(n.build) }),
        ],
    });
}
function mc(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        u = r
            ? [{ key: "shared", label: T.intl.string(R.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: T.intl.string(R.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: T.intl.string(R.default.eiAi57), metrics: n },
              ];
    return (0, a.jsx)(dA, {
        title: T.intl.string(R.default.mRt7MW),
        children: u.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, a.jsx)(dS, { label: n, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)(dS, {
                                  label: T.intl.formatToPlainString(R.default.u7kJJ4, { env: n }),
                                  value: dd(l.r2_bytes),
                                  hint: T.intl.formatToPlainString(
                                      l.r2_truncated ? R.default.lH0oQw : R.default.m9h02S,
                                      { count: df(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, a.jsx)(dC, {
                                      label: T.intl.formatToPlainString(R.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: dd,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function md(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: dY.Mf,
        children: [
            (0, a.jsx)(dw, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(mo, {
                            title: T.intl.string(R.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(mo, {
                            title: T.intl.string(R.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(mc, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(mr, {
                                title: T.intl.string(R.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(ma, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(mr, {
                                title: T.intl.string(R.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(mi, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(mr, {
                                title: T.intl.string(R.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(ms, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(mr, {
                                title: T.intl.string(R.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(mu, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, a.jsx)(dI, { analytics: t.analytics }),
                        (0, a.jsxs)(dA, {
                            title: T.intl.string(R.default.fQMpFp),
                            children: [
                                (0, a.jsx)(dS, {
                                    label: T.intl.string(R.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? dg(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(dS, {
                                    label: T.intl.string(R.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? dg(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var mm = n(592465);
function mf(e) {
    let { projectId: t, onClose: n } = e,
        l = F(),
        [r, s] = i.useState(() => (l && $?.projectId === t ? "trace" : "logs")),
        u = (0, c.bG)([oU.A], () => oU.A.getStatus(t), [t]),
        o = (0, c.bG)([oU.A], () => oU.A.getFetchState(t), [t]),
        m = i.useCallback(() => {
            ((0, cR.R7)(t), (0, cR.DK)(t));
        }, [t]);
    (i.useEffect(() => m(), [m]), i.useEffect(() => (0, eG.Rw)(t), [t]));
    let f = i.useCallback(() => {
        if (!l) return !1;
        let e = (function (e) {
            if (null == $ || $.projectId !== e) return null;
            let { traceId: t } = $;
            return (($ = null), t);
        })(t);
        return null != e && (di(t, e), !0);
    }, [t, l]);
    (i.useEffect(() => {
        f();
    }, [f]),
        D(t, () => {
            f() && s("trace");
        }));
    let h = i.useCallback(() => {
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
                        logs: cM.A.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, d.P0)({ text: T.intl.string(R.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        g = T.intl.string(R.default["Q4FN+H"]);
    return (0, a.jsxs)("section", {
        className: mm.nd,
        "aria-label": g,
        children: [
            (0, a.jsxs)(c_.Ay, {
                "aria-label": g,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(c_.Ay.Icon, {
                            icon: ov.CopyIcon,
                            tooltip: T.intl.string(R.default.TkHqy2),
                            onClick: h,
                        }),
                        (0, a.jsx)(c_.Ay.Icon, { icon: tB.XSmallIcon, tooltip: T.intl.string(T.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, a.jsx)(c_.Ay.ChannelIcon, { icon: ob.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(c_.Ay.Title, { children: g }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: mm.rf,
                children: [
                    (0, a.jsxs)(cE.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => s(e),
                        "aria-label": T.intl.string(R.default.RvvWIh),
                        className: mm.vR,
                        children: [
                            (0, a.jsx)(cE.V.Item, { id: "logs", children: T.intl.string(R.default["+VRYCm"]) }),
                            (0, a.jsx)(cE.V.Item, { id: "worker", children: T.intl.string(R.default["50D0FZ"]) }),
                            (0, a.jsx)(cE.V.Item, { id: "agent", children: T.intl.string(R.default.UkbTK1) }),
                            l ? (0, a.jsx)(cE.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, a.jsx)(ml, { projectId: t })
                        : "worker" === r
                          ? (0, a.jsx)(md, { status: u, fetchState: o, onRefresh: m })
                          : "trace" === r && l
                            ? (0, a.jsx)(dc, { projectId: t })
                            : (0, a.jsx)(d4, { projectId: t, status: u, fetchState: o, onRefresh: m }),
                ],
            }),
        ],
    });
}
var mh = n(365912),
    mg = n(873715);
function mp(e) {
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
let mx = Object.freeze({ x: -1, y: -1 });
function mv(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = mp(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var mj = n(192888);
function mb(e, t) {
    return (0, mj.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(mv, () => ({ status: "failed" }));
}
var my = n(108308);
let mk = { x: 25, y: 21 };
function mw(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function mA(e, t, n, l) {
    let r = mw(e, n, l);
    return { x: r.left + r.width * t.x, y: r.top + r.height * t.y };
}
function mS(e, t) {
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
function mN(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: s } = e,
        u = null != n && n === l ? t : null,
        { active: o, annotations: d } = (0, G.rt)(u),
        f = (0, O.Zv)(u),
        h = (0, K.Rv)(),
        g = (0, c.bG)([nN.default], () => nN.default.getCurrentUser()),
        p = g?.id ?? null,
        [x, v] = i.useState(null),
        [b, y] = i.useState(!1),
        [k, w] = i.useState(!1),
        [A, S] = i.useState(null),
        [C, N] = i.useState(!1),
        E = i.useRef(null),
        _ = i.useRef(null),
        M = i.useRef(null),
        [P, L] = i.useState(null),
        [$, D] = i.useState(!1),
        [q, F] = i.useState(null),
        [z, U] = i.useState(null),
        B = i.useRef(!1),
        [H, V] = i.useState(!1),
        [W, X] = i.useState(null),
        Q = o && !f && !h;
    null == q || (Q && q.projectId === u) || F(null);
    let Z = q?.projectId ?? null;
    i.useEffect(() => {
        if (null != Z) return () => (0, nh.xJ)(Z, "design");
    }, [Z]);
    let Y = tn(r, Q);
    i.useEffect(() => {
        if (!Q || null == u) return;
        let e = !0,
            t = r();
        if (null == t) return void w(!0);
        (y(!0), w(!1));
        let n = `design-feedback-${crypto.randomUUID()}`;
        return (
            (0, mg.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                (t) => {
                    if (!e) return;
                    y(!1);
                    let n = "completed" === t.status ? mC(t.response) : null;
                    null == n ? w(!0) : (v(n), (0, G.F5)(u, { url: n.url, title: n.title, viewport: n.viewport }));
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
        if (tt(J.current, Y)) return;
        let e = window.setTimeout(() => {
            let e = r();
            if (null == e) return;
            J.current = Y;
            let t = [];
            for (let e = 0; e < d.length; e += 24) t.push(d.slice(e, e + 24));
            (0 === t.length && t.push([]),
                t.forEach((t, n) => {
                    let l = t.map((e) => ({
                        action: "locate",
                        target: { ref: e.target.ref, selector: e.target.path },
                    }));
                    (0, mg.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        if ("completed" !== e.status || !el.current) return;
                        let n = mC(e.response);
                        null != n && (v(n), (0, G.F5)(u, { url: n.url, title: n.title, viewport: n.viewport }));
                        let l = new Map();
                        (e.response.results.forEach((e, n) => {
                            let r = t[n];
                            if (null == r || "locate" !== e.action || !e.ok) return;
                            let a = mp(e.element);
                            null != a && l.set(r.id, a);
                        }),
                            (0, G.AW)(u, l));
                    });
                }));
        }, 200);
        return () => window.clearTimeout(e);
    }, [Q, Y, x, d, u, r]),
        i.useEffect(() => {
            if (!Q)
                return () => {
                    (S(null), F(null), X(null), v(null));
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
                    mb(n, t).then((t) => {
                        if (((en.current = !1), el.current)) {
                            if ("picked" !== t.status || mT(t.target, eo.current.rect, eo.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? S(null)
                                    : "unsupported" === t.status && D(!0);
                            else {
                                let e = (0, lP.Sk)(t.target);
                                (L((t) => (mR(t, e) ? t : e)),
                                    S((e) => {
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
        if (!H) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => V(!1));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [H]),
        i.useEffect(() => {
            if (null == z) return;
            let e = setTimeout(() => U(null), m_);
            return () => clearTimeout(e);
        }, [z]));
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
                    ((0, nh.xJ)(u, "design"),
                    X(null),
                    (B.current = !1),
                    F({ projectId: u, target: e, anchor: t, draft: "", at: n, label: (0, lP.Sk)(e) }));
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
                    (Math.abs(e.clientX - q.at.x) > mM || Math.abs(e.clientY - q.at.y) > mM) && (B.current = !0);
                    return;
                }
                if (!es) return void S(null);
                let t = ed(e, Y);
                if ($) {
                    let e = (0, lP.CZ)(eu, t.x, t.y),
                        n = null != e && mT(e, Y, ei) ? null : e;
                    if (null != n) {
                        let e = (0, lP.Sk)(n);
                        L((t) => (mR(t, e) ? t : e));
                    }
                    S((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = et.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((et.current = n), (ee.current = n), er());
            },
            [Y, ei, es, ed, $, eu, q, W, em, er],
        ),
        eh = null == W ? null : d.find((e) => e.id === W.id),
        eg = Q && (C || q?.target.marker != null || eh?.target.marker != null);
    i.useEffect(() => {
        if (eg)
            return () => {
                let e = r();
                null != e && mb(e, mx);
            };
    }, [eg, r]);
    let ep = i.useCallback(() => {
        (N(!1), S(null), (et.current = null), (ee.current = null));
    }, []);
    i.useEffect(() => {
        if (!Q || !C || !es || $ || null != q || null != W) return;
        let e = M.current,
            { rect: t, scale: n } = eo.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((et.current = l), (ee.current = l), er());
    }, [Q, C, es, $, q, W, er]);
    let ex = i.useCallback(
            (e) => {
                if (null != q || null != W) {
                    (ea(), X(null));
                    return;
                }
                if (null == A || null == Y) return;
                let t = ed(e, Y);
                ec(A, (0, lP.Hm)(A, t.x, t.y), { x: e.clientX, y: e.clientY });
            },
            [A, Y, ed, q, W, ec, ea],
        ),
        ev = i.useCallback(() => {
            null != u && (S(null), (0, I.K7)(u)?.active === !0 ? (0, I.V9)(u) : (0, G.mB)(u));
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
                        return ((0, mh.J$)(e), !0);
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
                    S(eu[(n + (t ? 1 : -1) + eu.length) % eu.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != A &&
                    (e.preventDefault(),
                    ec(A, lP.QU, { x: (Y?.left ?? 0) + A.rect.x * ei, y: (Y?.top ?? 0) + A.rect.y * ei }));
            },
            [u, q, W, eu, A, ec, ej, Y, ei],
        ),
        eS = i.useCallback(
            (e) => {
                null == u ||
                    null == q ||
                    (((0, lP.Ch)(q.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, eG.dv)(u, (0, lP.Q9)(q.target, q.draft), e), ea(), S(null)));
            },
            [u, q, ea],
        ),
        eC = i.useCallback((e) => (null == u ? Promise.reject(Error("no project")) : (0, e3.vX)(u, e)), [u]),
        eN = i.useCallback(() => {
            null == u ||
                null == W ||
                null == p ||
                ((0, lP.Ch)(W.draft) && ((0, G.pV)(u, p, W.id, W.draft.trim()), X({ ...W, editing: !1 })));
        }, [u, W, p]),
        eI = i.useCallback(() => {
            null != u && null != W && null != p && ((0, G.aC)(u, p, W.id), X(null));
        }, [u, W, p]),
        eE = o
            ? b
                ? T.intl.string(R.default["Eb/YV9"])
                : k
                  ? T.intl.string(R.default.FD30bh)
                  : T.intl.formatToPlainString(R.default.dTSqLF, { count: d.length })
            : "",
        e_ = Q && null != Y,
        eM = C && null == W,
        eR = q?.target ?? eh?.target ?? null,
        eT = q ?? z,
        eP = q ?? (z?.instant === !0 ? null : z),
        eL =
            null != eh && null != Y
                ? (function (e, t) {
                      let { left: n, top: l } = mS(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(mA(eh.target, eh.anchor, Y, ei), Y)
                : null;
    return (
        i.useEffect(() => {
            let e = r();
            if (eh?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = eh;
            mb(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [eh, r]),
        (0, e0.createPortal)(
            (0, a.jsxs)("div", {
                ref: ew,
                className: my.Li,
                children: [
                    (0, a.jsx)(t1.A, {
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
                                      className: my.MT,
                                      style: { left: Y.left, top: Y.top, width: Y.width, height: Y.height },
                                      "data-plain-cursor": eM ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": T.intl.string(R.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: ef,
                                      onMouseLeave: ep,
                                      onClick: ex,
                                      onKeyDown: eA,
                                  }),
                                  null != A && null == A.marker && null == q && null == W
                                      ? (0, a.jsx)(mP, { box: mw(A, Y, ei) })
                                      : null,
                                  (0, a.jsx)("div", {
                                      ref: E,
                                      className: my.aZ,
                                      children: (0, a.jsx)("div", {
                                          className: my.xz,
                                          "data-shown": null != A && null == W && null == q ? "" : void 0,
                                          "data-instant": H ? "" : void 0,
                                          children: (0, a.jsxs)(j.E, {
                                              variant: "body-xs/medium",
                                              className: my.Ux,
                                              children: [
                                                  null == P
                                                      ? null
                                                      : (0, a.jsx)("span", { className: my.Tl, children: P.kind }),
                                                  null == P || "" === P.name
                                                      ? null
                                                      : (0, a.jsxs)("span", {
                                                            className: my.kh,
                                                            children: [" ", P.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, a.jsx)("div", {
                                      ref: _,
                                      className: my.Y,
                                      children: eM ? (0, a.jsx)("div", { className: my.u }) : null,
                                  }),
                                  null == eP
                                      ? null
                                      : (0, a.jsx)("div", {
                                            className: my.aZ,
                                            style: {
                                                transform: `translate3d(${eP.at.x + 20}px, ${eP.at.y + 20}px, 0)`,
                                            },
                                            children: (0, a.jsx)("div", {
                                                className: my.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == q ? "" : void 0,
                                                children: (0, a.jsxs)(j.E, {
                                                    variant: "body-xs/medium",
                                                    className: my.Ux,
                                                    children: [
                                                        (0, a.jsx)("span", {
                                                            className: my.Tl,
                                                            children: eP.label.kind,
                                                        }),
                                                        "" === eP.label.name
                                                            ? null
                                                            : (0, a.jsxs)("span", {
                                                                  className: my.kh,
                                                                  children: [" ", eP.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eR && null == eR.marker
                                      ? (0, a.jsx)("div", { className: my.D0, style: mw(eR, Y, ei), "aria-hidden": !0 })
                                      : null,
                                  d.map((e, t) => {
                                      let n = mA(e.target, e.anchor, Y, ei),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, a.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: my.xL,
                                              style: { ...mS(n, Y), width: 24, height: 24 },
                                              "aria-label": T.intl.formatToPlainString(R.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: (0, lP.Bx)(e.target),
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
                                              children: (0, a.jsx)(mI, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eT || null == u
                                      ? null
                                      : (0, a.jsx)(e6, {
                                            projectId: u,
                                            at: { x: eT.at.x + 20, y: eT.at.y + 20 },
                                            bounds: Y,
                                            kind: eT.label.kind,
                                            value: eT.draft,
                                            canSubmit: null != q && (0, lP.Ch)(eT.draft),
                                            onChange: (e) => {
                                                null != q && F({ ...q, draft: e });
                                            },
                                            onSubmit: eS,
                                            onDismiss: ea,
                                            onUploadFile: eC,
                                            closing: null == q,
                                        }),
                                  null != eh && null != W && null != eL
                                      ? (0, a.jsxs)(mE, {
                                            point: eL,
                                            frame: Y,
                                            authorId: eh.authorId,
                                            title: (0, lP.Bx)(eh.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                W.confirmingRemove ? X({ ...W, confirmingRemove: !1 }) : X(null);
                                            },
                                            onMouseLeave: () => {
                                                W.editing || W.confirmingRemove || X(null);
                                            },
                                            children: [
                                                W.editing
                                                    ? (0, a.jsx)(nb.f, {
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
                                                    : (0, a.jsx)(j.E, {
                                                          variant: "body-sm/normal",
                                                          color: "text-default",
                                                          className: my.aC,
                                                          children: eh.comment,
                                                      }),
                                                (0, G.It)(eh, p)
                                                    ? (0, a.jsx)("div", {
                                                          className: my.eB,
                                                          children: W.confirmingRemove
                                                              ? (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(j.E, {
                                                                            variant: "body-xs/normal",
                                                                            color: "text-muted",
                                                                            className: my.nv,
                                                                            children: T.intl.string(R.default.wOHvts),
                                                                        }),
                                                                        (0, a.jsx)(m.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: T.intl.string(R.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                X({ ...W, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, a.jsx)(m.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: T.intl.string(R.default.friIzR),
                                                                            "data-testid":
                                                                                "conjure-design-remove-confirm",
                                                                            onClick: eI,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(m.$, {
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
                                                                            ? (0, a.jsx)(m.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !(0, lP.Ch)(W.draft),
                                                                                  text: T.intl.string(R.default.iicRP9),
                                                                                  onClick: eN,
                                                                              })
                                                                            : (0, a.jsx)(m.$, {
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
function mI(e) {
    let { authorId: t } = e,
        n = (0, c.bG)([nN.default], () => nN.default.getUser(t), [t]);
    return (0, a.jsx)(aH.eu, {
        src: null == n ? null : aW.Ay.getUserAvatarURL(n),
        size: aV._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function mE(e) {
    let t,
        n,
        l,
        r,
        s,
        u,
        { point: o, frame: c, authorId: d, title: m, testId: f, onDismiss: h, onMouseLeave: g, children: p } = e,
        x = i.useRef(null),
        v = i.useRef(null),
        [b, y] = i.useState(mk);
    i.useLayoutEffect(() => {
        let e = x.current?.getBoundingClientRect(),
            t = v.current?.getBoundingClientRect();
        if (null == e || null == t || e.width < 1 || t.width < 1) return;
        let n = { x: t.left + t.width / 2 - e.left, y: t.top + t.height / 2 - e.top };
        y((e) => (0.5 > Math.abs(e.x - n.x) && 0.5 > Math.abs(e.y - n.y) ? e : n));
    }, []);
    let {
            left: k,
            top: w,
            originX: A,
            originY: S,
        } = ((n = Math.max((t = c.left + 8), c.left + c.width - 300 - 8)),
        (r = Math.max((l = c.top + 8), c.top + c.height - 160 - 8)),
        (s = Math.min(Math.max(o.x - b.x, t), n)),
        { left: s, top: (u = Math.min(Math.max(o.y - b.y, l), r)), originX: o.x - s, originY: o.y - u }),
        C = { left: k, top: w, "--custom-conjure-card-origin-x": `${A}px`, "--custom-conjure-card-origin-y": `${S}px` };
    return (0, a.jsxs)("div", {
        ref: x,
        className: my.Nr,
        style: C,
        "data-testid": f,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, a.jsxs)("div", {
                className: my.MY,
                children: [
                    (0, a.jsx)("span", { ref: v, className: my.ip, children: (0, a.jsx)(mI, { authorId: d }) }),
                    (0, a.jsx)(j.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        className: my.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: my.zI, children: p }),
        ],
    });
}
let m_ = 300,
    mM = 2;
function mR(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function mT(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function mP(e) {
    let { box: t } = e;
    return (0, a.jsx)("div", { className: my.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var mL = n(318774),
    m$ = n(697744),
    mD = n(130324);
function mq(e) {
    let t = (0, m$.c)(),
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
    let r = (0, tH.j)();
    return (
        i.useEffect(() => {
            if (!r) return;
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e, r]),
        t
    );
}
function mF(e) {
    let { className: t } = e,
        { Component: n, events: l } = mq(3e4);
    return (0, a.jsxs)("div", {
        className: o()(t, mD.Ve),
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(j.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                className: mD.ol,
                children: T.intl.string(R.default.AyiQEp),
            }),
        ],
    });
}
var mO = n(251363),
    mG = n(944142),
    mz = n(532247),
    mU = n(501628);
function mB(e) {
    let { progress: t } = e,
        { Component: n } = mq(1500),
        l = q.Q_.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, a.jsx)(j.E, { variant: "body-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, a.jsx)("div", {
                className: mU.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: mU.PM,
                            "data-state": n < t.stepIndex ? "done" : n === t.stepIndex ? "current" : "todo",
                        },
                        n,
                    ),
                ),
            }),
            l && null != t.stepLabel
                ? (0, a.jsx)(j.E, { variant: "body-xs/normal", color: "text-overlay-light", children: t.stepLabel })
                : null,
        ],
    });
}
function mK(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        u = (0, c.bG)([mG.A], () => (s ? mG.A.getLiveReload(t) : null), [s, t]),
        o = (0, eL.A)(n, r)?.id ?? null,
        d = u?.phase ?? null,
        m = u?.background === !0,
        f = (function (e, t, n) {
            let l = (0, mz.dv)(e),
                [r, a] = i.useState(null),
                [s, u] = i.useState(l),
                [o, d] = i.useState(t);
            s !== l && (u(l), d(t), a(null != l || o ? null : (0, mz.QP)(e, s)));
            let m = (0, c.bG)(
                    [eg.A],
                    () => {
                        let e = eg.A.getFrame(n);
                        return (0, eb.x1)(e) && e.data.proxyTicketRefreshing;
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
                        null != t.target && t.target === (0, mO.ow)(null, n) && e();
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
        h = m ? null : (0, mz.h_)(d, u?.step ?? null, f);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(t1.A, { tag: "div", role: "status", "aria-live": "polite", children: h?.title ?? "" }),
            null != h
                ? (0, a.jsx)("div", {
                      className: mU.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, a.jsx)(mB, { progress: h }),
                  })
                : null,
        ],
    });
}
let mH = 0;
var mV = n(782134),
    mW = n(357858),
    mX = n(343030),
    mQ = n(11411),
    mZ = n(111518),
    mY = n(240666);
let mJ = { width: 1 / 0, height: 1 / 0 };
function m0(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mJ;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var m1 = n(702083);
function m2(e) {
    let { children: t } = e,
        { mobile: n, landscape: l } = (0, c.cf)([e$.A], () => ({
            mobile: e$.A.isBuilderPreviewMobile(),
            landscape: e$.A.isBuilderPreviewLandscape(),
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
        m = n ? m0(l, d ?? void 0) : null;
    return (0, a.jsx)("div", {
        ref: r,
        className: o()(m1.dw, { [m1.PQ]: null != m }),
        children: (0, a.jsx)("div", { className: o()(m1.R9, { [m1.Vg]: null != m }), style: m ?? void 0, children: t }),
    });
}
var m3 = n(347927);
function m4(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, a.jsxs)("div", {
        className: o()(m3.Bf, l && m3.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: m3.Ux,
                children: [
                    (0, a.jsx)(v.D, { variant: "heading-sm/semibold", color: "text-default", children: t }),
                    null != n
                        ? (0, a.jsx)(j.E, { variant: "body-md/medium", color: "text-subtle", children: n })
                        : null,
                ],
            }),
            r,
        ],
    });
}
var m5 = n(957272);
function m7(e) {
    let { applicationId: t, surface: n, launch: l, frameOverlay: r } = e,
        { frame: i, state: s } = (0, mZ.A)({ applicationId: t, surface: n, launch: l });
    if (((0, mY.A)(t, n), s === mZ.n.Launched)) {
        let e = (0, a.jsx)(mQ.A, { frameId: i.id, level: mX.A.WithinAppContent, className: m5.Z7, overlay: r });
        return (0, eD.Q5)(n) ? (0, a.jsx)(m2, { children: e }) : e;
    }
    return (0, a.jsx)(m9, { state: s });
}
function m9(e) {
    let { state: t } = e;
    switch (t) {
        case mZ.n.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: m5.qs,
                children: (0, a.jsx)(m4, {
                    title: T.intl.string(R.default["9kpdo7"]),
                    body: T.intl.string(R.default.iIA8Nj),
                }),
            });
        case mZ.n.NoApplication:
            return (0, a.jsx)(mF, { className: m5.qs });
        case mZ.n.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: m5.qs,
                children: (0, a.jsx)(m4, {
                    title: T.intl.string(R.default["7k4GyN"]),
                    body: T.intl.string(R.default.zdIy3R),
                }),
            });
        case mZ.n.Error:
            return (0, a.jsxs)("div", {
                className: m5.qs,
                children: [
                    (0, a.jsx)(v.D, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        children: T.intl.string(R.default.lTPbnG),
                    }),
                    (0, a.jsx)(j.E, {
                        variant: "body-sm/normal",
                        color: "text-feedback-critical",
                        className: m5.tj,
                        children: T.intl.string(R.default.e6GiAZ),
                    }),
                ],
            });
        case mZ.n.AwaitingLaunch:
        case mZ.n.Loading:
            return (0, a.jsx)("div", { className: m5.qs, children: (0, a.jsx)(b.y, {}) });
    }
}
var m8 = n(308528),
    m6 = n(334738),
    fe = n(699344),
    ft = n(365971),
    fn = n(703462);
function fl(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: fn.f,
        children: [
            (0, a.jsx)(iS.AppsIcon, { size: "lg", color: "var(--icon-muted)" }),
            (0, a.jsx)(j.E, { variant: "body-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function fr() {
    return (0, a.jsx)("div", { className: fn.f, children: (0, a.jsx)(b.y, {}) });
}
function fa(e) {
    let t,
        n,
        { projectId: l, previewApplicationId: r } = e,
        [s, u] = i.useState(null),
        o = s?.previewApplicationId === r ? s.channelId : null,
        d = (0, c.bG)([nS.A], () => (null != o ? nS.A.getChannel(o) : null), [o]);
    ((t = d?.id ?? null),
        i.useEffect(() => {
            null != t && m8.A.preload(ej.ME, t);
        }, [t]),
        (n = (0, c.bG)([od.A], () => od.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, ft.Xg)();
            return (
                (0, m6.yl)(t, e),
                () => {
                    (0, m6.dm)(t, e);
                }
            );
        }, [t, n]));
    let [m, f] = i.useState(null),
        h = m === r;
    return (i.useEffect(() => {
        if (null != d || h) return;
        let e = !1;
        return (
            (0, J.CN)(l).then(
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
        ? (0, a.jsx)(fl, { message: T.intl.string(R.default["VP/O8s"]) })
        : null == d
          ? (0, a.jsx)(fr, {})
          : (0, a.jsx)("div", {
                className: fn.g,
                children: (0, a.jsx)(fe.A, { channel: d, guild: null, chatInputType: sU.oU.SIDEBAR }, d.id),
            });
}
var fi = n(765671),
    fs = n(596977),
    fu = n(921853),
    fo = n(582063);
function fc(e) {
    let { projectId: t, captures: n, selected: l } = e,
        r = [...n, null],
        i = null != l ? n.indexOf(l) : n.length;
    function s(e) {
        let n = r[(i + e + r.length) % r.length];
        (0, J.vX)(t, n?.id ?? null);
    }
    let u = T.intl.string(R.default.Gl3XtE),
        o = T.intl.string(R.default["3FvcrY"]);
    return (0, a.jsxs)("div", {
        className: fo.aF,
        children: [
            (0, a.jsx)(e4.m, {
                text: u,
                position: "top",
                children: (0, a.jsx)(ta.K, {
                    icon: fu.ChevronSmallLeftIcon,
                    size: "sm",
                    variant: "overlay-secondary",
                    "aria-label": u,
                    onClick: () => s(-1),
                }),
            }),
            (0, a.jsx)("div", {
                className: fo.Dn,
                "aria-live": "polite",
                children:
                    null != l
                        ? (0, a.jsx)(j.E, {
                              tag: "span",
                              variant: "body-sm/medium",
                              color: "text-strong",
                              lineClamp: 1,
                              children: T.intl.formatToPlainString(R.default["140n5k"], {
                                  name: l.name,
                                  index: i + 1,
                                  count: n.length,
                              }),
                          })
                        : (0, a.jsx)(j.E, {
                              tag: "span",
                              variant: "body-sm/medium",
                              color: "text-strong",
                              children: T.intl.string(R.default.wVJL0P),
                          }),
            }),
            (0, a.jsx)(e4.m, {
                text: o,
                position: "top",
                children: (0, a.jsx)(ta.K, {
                    icon: t2.ChevronSmallRightIcon,
                    size: "sm",
                    variant: "overlay-secondary",
                    "aria-label": o,
                    onClick: () => s(1),
                }),
            }),
        ],
    });
}
var fd = n(625903),
    fm = n(666476);
let ff = ["image/png", "image/jpeg", "image/gif", "image/webp"];
function fh() {
    (0, d.P0)({ text: T.intl.string(R.default.jj3abP), variant: "critical" });
}
function fg(e) {
    let { projectId: t } = e,
        n = i.useRef(null),
        l = i.useRef(null),
        r = T.intl.string(R.default["xd/1IW"]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(ek.Y, {
                targetElementRef: n,
                align: "left",
                position: "bottom",
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, a.jsx)(fp, { projectId: t, onClose: n, onUpload: () => l.current?.click() });
                },
                children: (e) => {
                    let { onClick: t } = e;
                    return (0, a.jsx)("div", {
                        ref: n,
                        className: fo.m2,
                        children: (0, a.jsx)(e4.m, {
                            position: "bottom",
                            text: r,
                            asContainer: !0,
                            children: (0, a.jsx)(ta.K, {
                                "aria-label": r,
                                icon: fd.SettingsIcon,
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
                accept: ff.join(","),
                hidden: !0,
                "aria-hidden": !0,
                tabIndex: -1,
                onChange: (e) => {
                    let n = e.currentTarget.files?.[0];
                    ((e.currentTarget.value = ""),
                        null != n &&
                            (ff.includes(n.type)
                                ? n.size > fm.aI
                                    ? (0, d.P0)({ text: T.intl.string(R.default.T8Spiu), variant: "critical" })
                                    : (0, r6.M$)(t, n).catch(fh)
                                : (0, d.P0)({ text: T.intl.string(R.default.AO7zpk), variant: "critical" })));
                },
            }),
        ],
    });
}
function fp(e) {
    let { projectId: t, onClose: n, onUpload: l } = e,
        r = (0, c.bG)([r8.A], () => r8.A.getBackground(t)),
        i = r?.blur !== !1,
        s = r?.imageEtag ?? null;
    return (0, a.jsxs)(ew.W, {
        "data-menu-migrated": !0,
        navId: "conjure-overlay-background",
        "aria-label": T.intl.string(R.default["xd/1IW"]),
        onClose: n,
        onSelect: void 0,
        children: [
            (0, a.jsxs)(eA.rX, {
                children: [
                    (0, a.jsx)(eA.Dr, {
                        id: "conjure-overlay-background-upload",
                        label: T.intl.string(R.default.uQpDky),
                        icon: lv.ImagePlusIcon,
                        action: () => {
                            (n(), l());
                        },
                    }),
                    (0, a.jsx)(eA.Dr, {
                        id: "conjure-overlay-background-reset",
                        label: T.intl.string(R.default.AiAz8J),
                        icon: dG.RetryIcon,
                        disabled: null == s,
                        action: () => {
                            (n(), (0, r6.Og)(t).catch(fh));
                        },
                    }),
                ],
            }),
            (0, a.jsx)(eA.rX, {
                children: (0, a.jsx)(eA.fP, {
                    id: "conjure-overlay-background-blur",
                    label: T.intl.string(R.default["hyN+kc"]),
                    checked: i,
                    action: () => {
                        (0, r6.Y1)(t, !i) || fh();
                    },
                }),
            }),
        ],
    });
}
function fx(e) {
    let { applicationId: t, projectId: n, size: l, frameOverlay: r } = e,
        { ref: s, width: u, height: o } = (0, fi.Ay)(),
        { captures: c, selected: d } = r9(n),
        m = (function (e, t, n) {
            let { width: l, height: r } = e;
            if (null == l || null == r || l <= 0 || r <= 0) return { top: 24, end: 24, scale: 1 };
            if (null == t || t.width <= 0 || t.height <= 0)
                return { top: 24, end: 24, scale: er({ width: l - 48, height: r - 48 }, n) };
            let a = t.width / t.height,
                i = Math.min(l, r * a),
                s = i / 1920,
                u = er({ width: 1872, height: 1920 / a - 48 }, n);
            return { top: (r - i / a) / 2 + 24 * s, end: (l - i) / 2 + 24 * s, scale: u * s };
        })({ width: u, height: o }, d, l);
    return (
        i.useEffect(() => (0, fs.L0)(), []),
        (0, a.jsxs)("div", {
            className: fo.JH,
            children: [
                (0, a.jsx)(at, { projectId: n, gameCaptures: !0 }),
                (0, a.jsx)("div", {
                    ref: s,
                    className: fo.dw,
                    children: (0, a.jsx)("div", {
                        className: fo.HL,
                        style: {
                            "--custom-conjure-overlay-widget-width": `${l.width}px`,
                            "--custom-conjure-overlay-widget-height": `${l.height}px`,
                            "--custom-conjure-overlay-widget-top": `${m.top}px`,
                            "--custom-conjure-overlay-widget-end": `${m.end}px`,
                            "--custom-conjure-overlay-widget-scale": String(m.scale),
                        },
                        children: (0, a.jsx)(m7, { applicationId: t, surface: eD.p$, frameOverlay: r }),
                    }),
                }),
                null != n ? (0, a.jsx)(fg, { projectId: n }) : null,
                null != n && c.length > 0 ? (0, a.jsx)(fc, { projectId: n, captures: c, selected: d }) : null,
            ],
        })
    );
}
function fv(e) {
    let { onAddBot: t, loading: n = !1 } = e;
    return (0, a.jsx)(m4, {
        title: T.intl.string(R.default.xlEjZ8),
        body: T.intl.string(R.default["4ByPbd"]),
        children: (0, a.jsx)(m.$, {
            size: "sm",
            variant: "primary",
            text: T.intl.string(R.default.RGeB11),
            onClick: t,
            loading: n,
        }),
    });
}
var fj = n(409478),
    fb = n(652227);
function fy(e) {
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
            overlayWidgetSize: m = en,
            projectId: f,
            renderFrameOverlay: h,
            paused: g = !1,
            onResume: p,
        } = e,
        x = (0, c.bG)([l4.A], () => null != f && null != l4.A.getSetupStartedAt(f), [f]);
    return s?.type === "checking"
        ? (0, a.jsx)("div", { className: fb.qs, children: (0, a.jsx)(b.y, {}) })
        : s?.type === "bot_install"
          ? (0, a.jsx)("div", {
                className: fb.qs,
                children: (0, a.jsx)(fv, { onAddBot: s.onAddBot, loading: s.loading }),
            })
          : i
            ? null == t
                ? null
                : (0, a.jsxs)("div", {
                      "data-conjure-entrance": !0,
                      className: fb.RG,
                      children: [
                          (0, es.yf)(u, o)
                              ? g
                                  ? (0, a.jsx)(fk, { projectId: f, onResume: p })
                                  : (0, a.jsx)(m7, { applicationId: t, surface: l, launch: r, frameOverlay: h?.(l) })
                              : null,
                          "widget" === o && null != d
                              ? "unavailable-authorization-revoked" === u.profileState
                                  ? (0, a.jsx)("div", {
                                        className: fb.qs,
                                        children: (0, a.jsx)(m4, {
                                            wide: !0,
                                            title: T.intl.string(R.default["08U+YO"]),
                                            body: T.intl.string(R.default.pKBfrc),
                                        }),
                                    })
                                  : (0, a.jsx)(fj.A, { applicationId: d })
                              : null,
                          "overlay" === o && u.modes.includes("overlay")
                              ? (0, a.jsx)(fx, { applicationId: t, projectId: f, size: m, frameOverlay: h?.(eb.ZN) })
                              : null,
                          "bot" === o && null != n && null != f
                              ? (0, a.jsx)(fa, { projectId: f, previewApplicationId: n })
                              : null,
                      ],
                  })
            : x
              ? (0, a.jsx)("div", { className: fb.qs, children: (0, a.jsx)(b.y, {}) })
              : (0, a.jsx)(mF, { className: fb.qs });
}
function fk(e) {
    let { projectId: t, onResume: n } = e;
    return (
        (0, mW.Pu)(t),
        (0, a.jsx)("div", {
            className: fb.qs,
            children: (0, a.jsx)(m4, {
                wide: !0,
                title: T.intl.string(R.default.MMWEH2),
                body: T.intl.string(R.default.iKSu55),
                children:
                    null != n
                        ? (0, a.jsx)(m.$, {
                              size: "sm",
                              variant: "primary",
                              icon: mV.PlayIcon,
                              text: T.intl.string(R.default.ZKd2Cw),
                              onClick: n,
                          })
                        : null,
            }),
        })
    );
}
var fw = n(750506),
    fA = n(867193),
    fS = n(539197),
    fC = n(977020);
function fN(e) {
    let { projectId: t } = e,
        n = (0, fS.X2)(t),
        l = (function (e) {
            let [t, n] = i.useState(null);
            return (
                i.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, fS.Ie)(e);
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
        [fS.t$]: "",
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
var fI = n(417760);
function fE(e) {
    let { phase: t, projectId: n, compact: l } = e,
        { stop: r, stopping: s } = (function (e) {
            let t = (0, c.bG)([rs.A], () => null != e && rs.A.isThinking(e)),
                [n, l] = i.useState(!1),
                [r, a] = i.useState(t);
            (t !== r && (a(t), t || l(!1)),
                i.useEffect(() => {
                    if (!n) return;
                    let e = setTimeout(() => l(!1), 5e3);
                    return () => clearTimeout(e);
                }, [n]));
            let s = i.useCallback(() => {
                null != e && (l(!0), (0, eG.fu)(e));
            }, [e]);
            return { stop: t ? s : null, stopping: n };
        })(n),
        u = (0, O.CU)(n),
        d = "controlling" === t,
        f = T.intl.string(d ? (u ? R.default["VJW/5P"] : R.default["+hD2Iz"]) : R.default["h+i1r9"]),
        h =
            null != r
                ? (0, a.jsx)(m.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: T.intl.string(R.default.oU59sU),
                      loading: s,
                      onClick: r,
                      "data-testid": "conjure-control-stop",
                  })
                : null;
    return l
        ? (0, a.jsxs)("div", {
              className: o()(fI.M0, fI.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  d
                      ? (0, a.jsx)(cn.i, { size: 12, color: "currentColor" })
                      : (0, a.jsx)(iJ.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, a.jsx)(j.E, { variant: "body-sm/semibold", color: "none", className: fI.ID, children: f }),
                  d ? (0, a.jsx)(t1.A, { children: T.intl.string(R.default.fg1sor) }) : null,
                  d ? (0, a.jsx)("div", { className: fI.lC, children: h }) : null,
              ],
          })
        : (0, a.jsxs)("div", {
              className: fI.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, a.jsxs)("div", {
                      className: fI.sp,
                      children: [
                          (0, a.jsx)(iJ.SparklesIcon, { size: "sm", color: "currentColor" }),
                          d ? (0, a.jsx)(cn.i, { size: 12, color: "currentColor" }) : null,
                          (0, a.jsxs)("div", {
                              className: fI.f4,
                              children: [
                                  (0, a.jsx)(j.E, {
                                      variant: "body-sm/semibold",
                                      color: "none",
                                      className: fI.w9,
                                      children: f,
                                  }),
                                  d
                                      ? (0, a.jsx)(j.E, {
                                            variant: "body-xs/medium",
                                            color: "none",
                                            className: fI.Rb,
                                            children: T.intl.string(R.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  d ? (0, a.jsx)("div", { className: fI.lC, children: h }) : null,
              ],
          });
}
function f_(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveTarget: r, frameId: s } = e,
        u = (0, O.Zv)(null != n && n === l ? t : null),
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
        c = (0, K.Rv)(),
        d = (0, ep.cR)(s);
    i.useEffect(() => {
        u && d && null != s && (0, ep.BL)(s);
    }, [u, d, s]);
    let [m, f] = i.useState(null),
        [h, g] = i.useState(null),
        [p, x] = i.useState(null),
        v = "idle" !== o;
    i.useEffect(() => {
        if (!v) return;
        function e() {
            let e = te(r());
            f((t) => (tt(t, e) ? t : e));
            let t = null == h ? null : te(h);
            (x((e) => (tt(e, t) ? e : t)), null != h && (0, fA.C)(h.getBoundingClientRect().height));
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
                    null != h && (0, fA.C)(0));
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
            let [e] = i.useContext(fw.uY),
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
                      className: fI.D,
                      "data-phase": o,
                      children: (0, a.jsx)("div", {
                          className: fI.QF,
                          children: (0, a.jsx)(fE, { phase: o, projectId: t, compact: y }),
                      }),
                  })
                : null,
            (0, e0.createPortal)(
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(t1.A, {
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
                      (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: fI.ys,
                                  style: w,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", {
                                  className: fI.om,
                                  style: k,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)(fN, { projectId: t }),
                          ],
                      }),
                      A,
                  )
                : null,
        ],
    });
}
var fM = n(399503),
    fR = n(853555),
    fT = n(944100),
    fP = n(327152),
    fL = n(187645);
let f$ = { width: 1280, height: 720 },
    fD = new Map(),
    fq = !1;
function fF() {
    let e = new Map();
    for (let t of new Set([...rs.A.getActivityOrderedProjectIds(), ...(0, O.T7)()])) {
        if (!(rs.A.isThinking(t) || (0, O.wK)(t)) || ee.A.isPaused(t)) continue;
        let n = (function (e) {
            let t = eT.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = [(0, eD.Rc)(t), (0, eD.Th)(t)].find(eb.x1);
            return n?.id ?? null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [l, r] of [...fD]) {
        var t, n;
        e.get(l) !== r.frameId &&
            ((t = l),
            (n = r),
            fD.delete(t),
            n.unregisterLookup(),
            fT.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove(),
            (0, fP.Pn)(n.frameId, null));
    }
    for (let [t, n] of e)
        fD.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = fL.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    fO(n, e, t),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (fD.set(e, l),
                    (l.unregisterLookup = (0, fR.Ng)(e, () => (0, mO.n5)(n, t))),
                    fT.A.registerFrameTarget(t, n, mX.A.Backstage, void 0));
            })(t, n);
    for (let [e, t] of fD) fO(t.element, e, t.frameId);
}
function fO(e, t, n) {
    if (eg.A.getFrame(n)?.surface.type === eu.U.OVERLAY) {
        let l = ea(eT.Ay.getProject(t));
        (e.classList.remove(fL.L),
            (e.style.width = `${l.width}px`),
            (e.style.height = `${l.height}px`),
            (0, fP.Pn)(n, l));
        return;
    }
    let l = e$.A.isBuilderPreviewMobile();
    e.classList.toggle(fL.L, !l);
    let r = l ? m0(e$.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != r ? `${r.width}px` : ""),
        (e.style.height = null != r ? `${r.height}px` : ""),
        (0, fP.Pn)(n, r ?? f$));
}
var fG = n(873727),
    fz = n(47671),
    fU = n(418842),
    fB = n(413599);
let fK = 0;
var fH = n(487887);
let fV = null;
var fW = n(541940);
function fX(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            mainClassName: u,
            content: d,
            sidebar: m,
            showsFrame: f,
            paused: h,
        } = e,
        [g, p] = i.useState(null),
        x = (0, eL.A)(l, s),
        v = x?.id ?? null;
    (!(function (e, t) {
        let n = (0, c.bG)([fB.A], () => (0, fG.x4)(fB.A.theme)),
            l = (0, c.bG)([fz.A], () => fz.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: a,
                highContrast: s,
                forcedColors: u,
                underlineLinks: o,
            } = (0, c.cf)([aB.Ay], () => ({
                reducedMotion: aB.Ay.useReducedMotion,
                fontScale: (0, fG.U0)(),
                highContrast: aB.Ay.isHighContrastModeEnabled,
                forcedColors: aB.Ay.useForcedColors,
                underlineLinks: aB.Ay.alwaysShowLinkDecorations,
            })),
            d = q.hH.useSetting(),
            m = (0, c.bG)([sD.A], () => sD.A.hidePersonalInformation),
            f = (0, fU.C)(),
            h = (0, c.bG)(
                [eg.A, e$.A],
                () =>
                    e$.A.isBuilderPreviewMobile() &&
                    eg.A.getFrame(t)?.applicationId === e$.A.getPhoneLensApplicationId()
                        ? "mobile"
                        : "desktop",
                [t],
            ),
            g = i.useRef(!1),
            p = i.useRef(!1),
            x = i.useRef(null),
            v = i.useCallback(() => {
                let l = (0, mO.n5)(e, t);
                if (null == l) return;
                x.current = l;
                let i = {
                    revision: ++fK,
                    baseTheme: n,
                    customTheme: (0, fG.Lq)(),
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
                (0, mj.W)(l, "set-env", i, {
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
                let n = (0, mO.n5)(e, t);
                null != n && n !== x.current && b();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, mO.n5)(e, t) && ((x.current = null), b());
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
    })(g, v),
        i.useEffect(() => {
            if (null != t) return (0, fR.Ng)(t, () => (0, mO.n5)(g, v));
        }, [t, g, v]));
    let j = i.useCallback(() => (0, mO.ow)(g, v), [g, v]),
        b = i.useCallback(() => (f ? (0, mO.ow)(g, v) : g), [f, g, v]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: o()(fW.Mh, u),
                children: [
                    h
                        ? null
                        : (0, a.jsx)(f_, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveTarget: b,
                              frameId: v,
                          }),
                    (0, a.jsx)("div", { ref: p, className: fW.fm, children: d }),
                ],
            }),
            m,
            h
                ? null
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(mN, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveIframe: j,
                              toggleRef: n,
                          }),
                          (0, a.jsx)(tF, { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: j }),
                      ],
                  }),
        ],
    });
}
function fQ(e) {
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
            onRestoreVersion: h,
            onImportProject: g,
            debugOpen: p = !1,
            onCloseDebug: x,
            restoreState: v,
            previewReady: j,
            previewGate: b,
            availability: y,
            activeMode: k,
            widgetApplicationId: w,
            overlayWidgetSize: A,
            previewPaused: S = !1,
            onResumePreview: C,
        } = e;
    (0, fM.k)(n, w);
    let N = u.type === eu.U.MAIN || (0, eD.Q5)(u);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, c.cf)([e$.A], () => ({
            mobile: e$.A.isBuilderPreviewMobile(),
            landscape: e$.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? fH.aX.LANDSCAPE : fH.aX.PORTRAIT), (fV = e));
                else {
                    if (fV !== e) return;
                    ((l = fH.aX.UNHANDLED), (fV = null));
                }
                u7.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(N ? r : null);
    let I = i.useRef(null),
        [E, _] = i.useState(0);
    (i.useEffect(() => {
        if (null == n) return;
        (0, tG.T)(n);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, tG.T)(n);
        }, 3e3);
        return () => clearInterval(e);
    }, [n]),
        (t = i.useRef(0)),
        i.useLayoutEffect(() => {
            N && ((t.current = ++mH), (0, J.HV)(r));
        }, [r, N]),
        i.useEffect(() => {
            if (!N) return;
            let e = t.current;
            return () => {
                e === mH && (0, J.HV)(null);
            };
        }, [r, N]),
        i.useEffect(() => {
            null != n &&
                ((0, eG.ensureConnection)(n),
                fq ||
                    ((fq = !0),
                    rs.A.addChangeListener(fF),
                    eT.Ay.addChangeListener(fF),
                    eg.A.addChangeListener(fF),
                    e$.A.addChangeListener(fF),
                    ee.A.addChangeListener(fF),
                    (0, O.W3)(fF),
                    fF()));
        }, [n]),
        i.useLayoutEffect(() => {
            let e = I.current;
            if (null == e) return;
            function t() {
                null != e && _(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return (n.observe(e), () => n.disconnect());
        }, []));
    let M = Math.max(450, E - 320),
        R = f || N;
    return (0, a.jsxs)("div", {
        className: fW.cL,
        children: [
            m,
            (0, a.jsx)("div", {
                ref: I,
                className: fW.LB,
                children: (0, a.jsx)(fX, {
                    projectId: n,
                    designFeedbackToggleRef: l,
                    applicationId: r,
                    previewApplicationId: s,
                    surface: u,
                    showsFrame: (0, es.yf)(y, k),
                    paused: S,
                    mainClassName: null == m ? void 0 : o()(fW.ez, { [fW.zt]: f }),
                    content: (0, a.jsx)(fy, {
                        applicationId: r,
                        previewApplicationId: s,
                        surface: u,
                        frameLaunchParams: d,
                        previewReady: j,
                        previewGate: b,
                        availability: y,
                        activeMode: k,
                        widgetApplicationId: w,
                        overlayWidgetSize: A,
                        projectId: n,
                        paused: S,
                        onResume: C,
                        renderFrameOverlay: (e) =>
                            (0, a.jsx)(mK, { projectId: n, applicationId: r, previewApplicationId: s, surface: e }),
                    }),
                    sidebar:
                        null != n && R
                            ? (0, a.jsx)("div", {
                                  className: f ? fW.v7 : fW.LL,
                                  children: (0, a.jsx)(eJ.A, {
                                      sidebarType: eJ.X.CallChatSidebar,
                                      maxWidth: M,
                                      capturePointer: !0,
                                      children: (0, a.jsx)("div", {
                                          className: fW.cO,
                                          children: p
                                              ? (0, a.jsx)(mf, { projectId: n, onClose: x ?? (() => {}) }, n)
                                              : (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                        (0, a.jsx)(mL.Ay, { projectId: n }),
                                                        (0, a.jsx)("div", {
                                                            className: fW.cb,
                                                            children: (0, a.jsx)(
                                                                cI,
                                                                {
                                                                    projectId: n,
                                                                    restoreState: v,
                                                                    onRestoreVersion: h,
                                                                    onImportProject: g,
                                                                    escapeScopeRef: I,
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
            }),
        ],
    });
}
var fZ = n(705427),
    fY = n(606128),
    fJ = n(323140);
function f0(e) {
    let t,
        l,
        r,
        { project: s, projectsLoaded: u, onBack: b, guildId: y, onBackToServer: k } = e,
        w = i.useContext(Q.A),
        [A] = i.useState(() => (null != w ? Y.A.getProjectView(w) : null)),
        [L, $] = i.useState(A?.chatOpen ?? !0),
        [q, en] = i.useState(A?.debugOpen ?? !1);
    i.useEffect(() => {
        null != w && (0, Z.g7)(w, { chatOpen: L, debugOpen: q });
    }, [w, L, q]);
    let el = i.useCallback(
            (e) => {
                null != w && (0, Z.g7)(w, { previewSelection: e });
            },
            [w],
        ),
        er = F(),
        eo = (0, z.f)("ConjureSelectedProjectScreen"),
        ec = i.useCallback(() => $(!0), []),
        ed = i.useCallback(() => {
            (en(!1), $(!0));
        }, []),
        { restoreState: ef, handleRestoreVersion: eh } = (function (e, t) {
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
                                (0, V.oB)(o, n.sha)
                                    .then(
                                        async () => {
                                            if (
                                                (i &&
                                                    c() &&
                                                    (0, d.P0)({
                                                        text: T.intl.formatToPlainString(R.default.Z4n6LX, {
                                                            title: (0, H.T4)(n.subject).short,
                                                        }),
                                                        variant: "success",
                                                    }),
                                                null != r)
                                            ) {
                                                let e = await (0, W.c)(o, r);
                                                null != e && (0, d.P0)({ text: e, variant: "critical" });
                                            }
                                            c() && l({ entry: n, status: "restored" });
                                        },
                                        (e) => {
                                            c() &&
                                                (l({ entry: n, status: "failed" }),
                                                console.error("[conjure] version restore failed", o, e),
                                                (0, d.P0)({
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
        })(s, ed),
        eg = s?.id ?? null,
        ep = null != (0, eV.E8)(eg),
        ex = L || ep,
        ev = q && !ep,
        {
            integrationStatus: ej,
            isPreviewApplicationLoading: ek,
            checkingIntegration: ew,
            previewReady: eA,
            hasFrame: eS,
        } = (function (e) {
            let [t, n] = i.useState(null),
                l = e?.id ?? null,
                r = i.useRef(l),
                a = i.useRef(null);
            r.current = l;
            let s = (0, c.bG)(
                    [eT.Ay, eR.A],
                    () => (null == l ? null : (eT.Ay.getIntegrationStatus(l) ?? eR.A.getIntegrationStatus(l))),
                    [l],
                ),
                u = e?.preview_application_id ?? null,
                { isLoading: o } = (0, e_.YY)(u ?? void 0),
                d = null != l && t !== l,
                m = s?.preview_ready === !0,
                f = s?.has_activity === !0,
                h = s?.bot_permissions_changed === !0,
                g = (0, es.Qg)({
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
                            await (0, e_.TA)(e);
                        } catch {}
                    })(u);
            }, [h, d, g, u]);
            let p = i.useCallback(async () => {
                if (null == l || r.current !== l) return;
                a.current?.abort();
                let e = new AbortController();
                ((a.current = e), n(null));
                try {
                    await ((0, eM.CG)(l)?.catch(() => (0, eM.U1)(l, e.signal)) ?? (0, eM.U1)(l, e.signal));
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
        eC =
            (0, c.bG)([ez.A], () => (null == eg ? void 0 : ez.A.getPublishStatus(eg)?.previewAppChannels), [eg]) ??
            ej?.preview_app_channels,
        {
            availability: eN,
            activeMode: eQ,
            setMode: eZ,
            frameSurface: eJ,
            frameSurfaceOptions: e0,
            setFrameSurface: e1,
            appChannel: e2,
            setAppChannel: e3,
            frameLaunchParams: e4,
            widgetApplicationId: e5,
        } = (0, em.p)({
            applicationId: s?.preview_application_id ?? null,
            previewApplicationId: s?.preview_application_id ?? null,
            declaredActivity: eS,
            previewSupportedSurfaces: s?.preview_supported_surfaces,
            installScope: s?.install_scope ?? null,
            ownerAuthorizationRevoked: ej?.owner_authorization_revoked === !0,
            supportsOverlay: s?.preview_supported_surfaces?.includes(et.q7.OVERLAY) === !0,
            previewAppChannels: eC,
            initialSelection: A?.previewSelection,
            onSelectionChange: el,
        }),
        e7 = ea(s);
    ((0, ei.x)(eg, (e) => {
        eN.modes.includes(e) && eZ(e);
    }),
        D(eg, () => {
            ($(!0), en(!0));
        }));
    let e9 = eN.modes.includes("frame"),
        e8 = (0, c.bG)([ee.A], () => ee.A.isPaused(eg), [eg]),
        {
            previewTargetOptions: e6,
            handleSelectPreviewTarget: te,
            mobilePreview: tt,
            mobilePreviewLabel: tn,
            handleToggleMobilePreview: tl,
            landscapePreview: tr,
            rotatePreviewLabel: ta,
            handleRotatePreview: ti,
            previewSurface: ts,
            previewFrame: tu,
            refreshFrame: to,
            isRefreshing: tc,
            handleRefresh: td,
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
                                          t === eu.U.APP_CHANNEL && n.length > 1
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
                h = (0, c.bG)([e$.A], () => e$.A.isBuilderPreviewMobile()),
                g = T.intl.string(h ? R.default.tKGF0Q : R.default.peqEOY),
                p = i.useCallback(() => (0, J.GG)(!h), [h]),
                x = (0, c.bG)([e$.A], () => e$.A.isBuilderPreviewLandscape()),
                v = T.intl.string(x ? R.default.tunI2l : R.default.DoNdjA),
                j = i.useCallback(() => (0, J.Lw)(!x), [x]),
                b = (0, eD.jS)(t),
                y = i.useMemo(() => (0, eD.Op)(b, r), [b, r]),
                k = (0, eL.A)(t?.preview_application_id ?? null, y),
                w = (0, eL.A)(t?.preview_application_id ?? null, eb.ZN),
                A = "overlay" === l ? w : k,
                S = (0, eb.x1)(A) && A.data.proxyTicketRefreshing,
                C = i.useCallback(() => {
                    null == A || S || eP.A.refreshProxyTicket(A.id);
                }, [A, S]);
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
                isRefreshing: S,
                handleRefresh: C,
            };
        })({
            project: s,
            modes: eN.modes,
            activeMode: eQ,
            frameSurface: eJ,
            frameSurfaceOptions: e0,
            previewAppChannels: eC,
            setMode: eZ,
            setFrameSurface: e1,
            setAppChannel: e3,
        }),
        tm = (0, S.A)(tu),
        tf = e9 && !e8,
        th = (0, I.lQ)(eg),
        tg = tm.isPoppedOut ? R.default.pmkK8i : e8 ? R.default.Yet11p : null,
        tp = null != tg;
    function tx(e) {
        return null == tg ? e : T.intl.formatToPlainString(tg, { label: e });
    }
    let tv = ex && !ev,
        tj = T.intl.string(tv ? R.default.JD6Oit : R.default.xjJAQm),
        tb = i.useCallback(() => {
            if (ep) return void (0, d.P0)({ text: T.intl.string(R.default["PyD/rD"]), variant: "critical" });
            if (q) {
                (en(!1), $(!0));
                return;
            }
            $((e) => !e);
        }, [q, ep]),
        {
            designFeedbackActive: ty,
            designFeedbackToggleRef: tk,
            agentDrivingPreview: tw,
            designFeedbackLabel: tA,
            handleToggleDesignFeedback: tS,
        } = (function (e, t, n) {
            let { active: l } = (0, G.rt)(e);
            i.useEffect(() => {
                null != e && l && !t && (0, G.mB)(e);
            }, [e, l, t]);
            let r = i.useRef(null),
                a = (0, O.Zv)(e),
                s = T.intl.string(a ? R.default.Sme0T0 : l ? R.default.vn5Rzu : R.default["cl/Jyl"]),
                u = i.useCallback(() => {
                    if (null != e) {
                        if (l) return void (0, G.mB)(e);
                        (n(), (0, G.w4)(e));
                    }
                }, [e, l, n]);
            return {
                designFeedbackActive: l,
                designFeedbackToggleRef: r,
                agentDrivingPreview: a,
                designFeedbackLabel: s,
                handleToggleDesignFeedback: u,
            };
        })(eg, tf && (!tm.isPoppedOut || th), ed),
        [tC] = i.useState(() => N.isPlatformEmbedded && (0, eE.qM)());
    i.useEffect(() => {
        null != eg && th && !tf && (0, I.It)(eg);
    }, [eg, th, tf]);
    let tN = i.useCallback(() => {
            null != eg && (ed(), (0, I.c$)(eg), (0, I.rC)(eg, "marker"));
        }, [eg, ed]),
        tI = i.useCallback(() => {
            null != eg && (0, I.V9)(eg);
        }, [eg]),
        tE =
            tp && !th
                ? tx(T.intl.string(R.default["XWU+XF"]))
                : T.intl.string(th ? R.default.tuQ5f3 : tw ? R.default.agwlrD : R.default["XWU+XF"]),
        t_ = tp ? tx(T.intl.string(R.default["cl/Jyl"])) : tA,
        tM = tx(tn),
        tR = tx(ta),
        tT = i.useCallback(() => {
            en((e) => !e && ($(!0), !0));
        }, []),
        tP = i.useCallback(() => en(!1), []),
        tL = i.useCallback(() => {
            null != eg && (0, J._j)(eg);
        }, [eg]),
        t$ = i.useCallback(() => {
            null != eg && (e8 ? (0, J._j)(eg) : (0, J.di)(eg, tu?.id));
        }, [eg, e8, tu?.id]),
        tD = i.useCallback(() => {
            var e, t;
            (null != s && ((e = s.id), (t = tu?.id), (0, eG.Bn)(e), (0, eO.r)(t)), b());
        }, [s, tu?.id, b]),
        tq =
            ((t = (0, M.z)(s)),
            (l = i.useCallback(
                (e) => {
                    if (null == s) return;
                    let t = s.id,
                        n = (0, _.vt)(e);
                    null != n
                        ? (0, d.P0)({ text: n, variant: "critical" })
                        : (0, E.A)({
                              title: T.intl.formatToPlainString(R.default["Gm+u1+"], { name: s.name }),
                              subtitle: T.intl.string(R.default.M7H3sJ),
                              confirmText: T.intl.string(R.default.gFHykw),
                              variant: "critical",
                              onConfirm: async () => {
                                  ec();
                                  try {
                                      await (0, _.Hj)(t, e, T.intl.string(R.default.Owerd3));
                                  } catch {
                                      (0, d.P0)({ text: T.intl.string(R.default["Q+l4Hv"]), variant: "critical" });
                                  }
                              },
                          });
                },
                [s, ec],
            )),
            { onExport: t, onImport: (r = (0, _.yN)(l)).open, importInput: r.input }),
        tF = i.useCallback(() => {
            null != s && (0, eW.A)(s, y);
        }, [s, y]),
        tO = (0, X.AJ)(eg),
        tG = i.useCallback(async () => {
            null != eg && (await (0, eB.vL)(eg, y));
        }, [y, eg]),
        tz = (0, es.aN)(eQ, {
            installScope: s?.install_scope ?? null,
            previewReady: eA,
            integrationInstalled: ej?.integration_installed ?? null,
        })
            ? { type: "bot_install", onAddBot: tG, loading: ek }
            : ew && null == ej
              ? { type: "checking" }
              : void 0,
        tU = (0, c.bG)([eT.Ay], () => null != eg && eT.Ay.isProjectDeleting(eg), [eg]);
    i.useEffect(() => {
        ((null == s && u) || tU) && b();
    }, [s, u, tU, b]);
    let {
            publishOptions: tB,
            publish: tK,
            publishing: tH,
            confirmation: tV,
            variant: tW,
            text: tX,
            pendingChanges: tQ,
        } = (0, eH.A)(eg, y, ew || ek),
        tZ = (0, eK.A)(eg, tK, tB),
        tY = "frame" === eQ && !e8 && (0, eb.x1)(tu) && (tm.isPoppedOut || tm.canPopout),
        tJ = i.useCallback(() => {
            if (null != s) {
                var e;
                ((e = {
                    projectId: s.id,
                    restoreDisabled: ef?.status === "restoring",
                    onRestoreVersion: tO ? void 0 : (e, t) => eh(e, t, !0),
                }),
                    (0, K.mM)(async () => {
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
        }, [s, ef?.status, eh, tO]);
    (0, B.z)(eg, tJ);
    let t0 = null == s ? void 0 : () => (0, eX.A)(s.id, { guildId: y, isPreview: !0, publishOptions: tB }),
        t1 =
            null == s
                ? null
                : (0, a.jsx)(eF.A, {
                      ...(0, eq.A)(s, y),
                      onOpenProjectSettings: t0,
                      onTogglePreviewPaused: "frame" === eQ ? t$ : void 0,
                      previewPaused: e8,
                      previewPauseDisabled: !e8 && tw,
                      onTogglePopout: tY ? (tm.isPoppedOut ? tm.popIn : tm.popOut) : void 0,
                      poppedOut: tm.isPoppedOut,
                      onToggleDebug: er ? tT : void 0,
                      debugOpen: ev,
                      onExport: tq.onExport,
                      onImport: tO ? void 0 : tq.onImport,
                      onRemix: tO ? void 0 : tF,
                      onConnectTool: eo ? () => (0, U.A)(s.id) : void 0,
                      onHistory: tJ,
                      refreshApplicationId:
                          eN.modes.includes("widget") && "unavailable-authorization-revoked" !== eN.profileState
                              ? e5
                              : null,
                      previewProjectId: s.id,
                  }),
        t2 = null != tK && null != s && ("primary" === tW || tH || null != tV),
        t3 = t2
            ? (0, a.jsx)("div", {
                  className: fJ.As,
                  onMouseDown:
                      null == eg || tK.disabled || tH
                          ? void 0
                          : (e) => {
                                0 === e.button && (0, eU.dx)(eg);
                            },
                  children: (0, a.jsx)(m.$, {
                      size: "sm",
                      variant: "primary",
                      icon: tH ? f1 : null != tV ? f.CheckmarkSmallIcon : void 0,
                      text: tX,
                      onClick: () => tZ("header"),
                  }),
              })
            : null,
        t4 = (0, a.jsx)(fZ.A, {
            title: s?.name ?? T.intl.string(R.default.G1WwgK),
            project: s,
            onOpenProjectSettings: t0,
            onBack: k,
            hideShareTarget: null != k,
            preview: null != s,
            draft: tQ,
            actions:
                null == s
                    ? null
                    : (0, a.jsxs)("div", {
                          className: fJ.FO,
                          children: [
                              (0, a.jsxs)("div", {
                                  className: fJ.QQ,
                                  children: [
                                      (0, a.jsx)(eI, {
                                          targets: e6,
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
                                          })(eQ, eJ, e2),
                                          onChange: te,
                                      }),
                                      e9
                                          ? (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    "frame" === eQ
                                                        ? (0, a.jsx)(C.A.Icon, {
                                                              icon: tt ? f4 : f3,
                                                              tooltip: tM,
                                                              "aria-label": tM,
                                                              selected: tt,
                                                              disabled: tp,
                                                              onClick: tl,
                                                          })
                                                        : null,
                                                    tt && "frame" === eQ
                                                        ? (0, a.jsx)(C.A.Icon, {
                                                              icon: f5,
                                                              tooltip: tR,
                                                              "aria-label": tR,
                                                              selected: tr,
                                                              disabled: tp,
                                                              onClick: ti,
                                                          })
                                                        : null,
                                                    tO
                                                        ? null
                                                        : tC
                                                          ? (0, a.jsx)(C.A.Icon, {
                                                                icon: h.PencilIcon,
                                                                tooltip: tE,
                                                                "aria-label": tE,
                                                                selected: th,
                                                                disabled: (tp || tw) && !th,
                                                                onClick: th ? tI : tN,
                                                            })
                                                          : (0, a.jsx)(C.A.Icon, {
                                                                ref: tk,
                                                                icon: g.ExperimentalDirectSelectIcon,
                                                                iconClassName: fJ.D8,
                                                                tooltip: t_,
                                                                "aria-label": t_,
                                                                selected: ty,
                                                                disabled: tp || tw,
                                                                onClick: tS,
                                                            }),
                                                ],
                                            })
                                          : null,
                                      "frame" !== eQ || e8
                                          ? null
                                          : (0, a.jsx)(ey, { frame: tu, controlProjectId: s.id }),
                                      (0, eb.x1)(to)
                                          ? (0, a.jsx)(C.A.Icon, {
                                                icon: p.RefreshIcon,
                                                tooltip: T.intl.string(R.default.FZIHQN),
                                                "aria-label": T.intl.string(R.default.FZIHQN),
                                                disabled: tc,
                                                onClick: td,
                                            })
                                          : null,
                                  ],
                              }),
                              (0, a.jsx)("div", { className: fJ.YJ }),
                              (0, a.jsx)(P.A, { frame: tu }),
                              (0, a.jsx)(C.A.Icon, {
                                  icon: x.DoorExitIcon,
                                  tooltip: T.intl.string(R.default["/TlGcK"]),
                                  "aria-label": T.intl.string(R.default["/TlGcK"]),
                                  onClick: tD,
                              }),
                              (0, a.jsx)(C.A.Icon, {
                                  icon: f2,
                                  tooltip: tj,
                                  "aria-label": tj,
                                  selected: tv,
                                  onClick: tb,
                              }),
                              t1,
                              tO ? null : (0, a.jsx)(eY, { projectId: s.id, variant: t2 ? "secondary" : "primary" }),
                              t3,
                          ],
                      }),
        });
    return (0, a.jsxs)("div", {
        className: o()(fJ.nj, fY.T),
        children: [
            tq.importInput,
            (0, a.jsx)("main", {
                className: fJ.JX,
                children:
                    null == s
                        ? (0, a.jsxs)("div", {
                              className: fJ.j5,
                              children: [
                                  t4,
                                  (0, a.jsxs)("div", {
                                      className: fJ.sD,
                                      children: [
                                          (0, a.jsx)(v.D, {
                                              variant: "heading-lg/semibold",
                                              children: T.intl.string(R.default.G1WwgK),
                                          }),
                                          (0, a.jsx)(j.E, {
                                              variant: "body-md/normal",
                                              color: "text-muted",
                                              children: T.intl.string(R.default.fINulo),
                                          }),
                                          (0, a.jsx)(m.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: T.intl.string(R.default["WFJ/vb"]),
                                              onClick: () => (0, eM.listProjects)(y),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, a.jsx)(eB.bI.Provider, {
                              value: tB,
                              children: (0, a.jsx)(
                                  fQ,
                                  {
                                      projectId: s.id,
                                      designFeedbackToggleRef: tk,
                                      applicationId: s.preview_application_id,
                                      previewApplicationId: s.preview_application_id,
                                      surface: ts,
                                      frameLaunchParams: e4,
                                      header: t4,
                                      chatOpen: ex,
                                      debugOpen: er && ev,
                                      onCloseDebug: tP,
                                      onRestoreVersion: tO ? void 0 : eh,
                                      onImportProject: (0, eT.PV)(s) && !tO ? tq.onImport : void 0,
                                      restoreState: ef,
                                      previewReady: eA,
                                      previewGate: tz,
                                      availability: eN,
                                      activeMode: eQ,
                                      widgetApplicationId: e5,
                                      overlayWidgetSize: e7,
                                      previewPaused: e8,
                                      onResumePreview: tL,
                                  },
                                  s.id,
                              ),
                          }),
            }),
        ],
    });
}
function f1() {
    return (0, a.jsx)(b.y, { type: b.t.SPINNING_CIRCLE_SIMPLE, className: fJ.Hv, itemClassName: fJ.C5 });
}
function f2(e) {
    return (0, a.jsx)(y.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function f3(e) {
    return (0, a.jsx)(k.MobilePhoneIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function f4(e) {
    return (0, a.jsx)(w.ScreenIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function f5(e) {
    return (0, a.jsx)(A.RotateIcon, { ...e, size: "custom", width: 20, height: 20 });
}
