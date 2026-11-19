n.d(t, { A: () => f8 });
var l,
    r,
    a = n(477900),
    i = n(582128),
    s = n.t(i, 2),
    o = n(503698),
    u = n.n(o),
    c = n(855986),
    d = n(858899),
    m = n(821609),
    f = n(478016),
    h = n(663417),
    g = n(70688),
    p = n(22231),
    x = n(604525),
    v = n(625903),
    j = n(259730),
    b = n(534514),
    y = n(834730),
    k = n(289873),
    w = n(646270),
    C = n(31300),
    A = n(831453),
    S = n(646973),
    N = n(742589),
    I = n(723702),
    E = n(171691),
    _ = n(314116),
    M = n(949757),
    R = n(800202),
    P = n(191850),
    T = n(792996),
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
    eo = n(991690),
    eu = n(696645);
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
                ? (0, eu.X)(e.surface)
                : T.intl.formatToPlainString(P.default["6xVl+N"], {
                      surface: (0, eu.X)(e.surface),
                      channel: e.appChannel,
                  });
        case "widget":
            return T.intl.string(P.default.y5GiL1);
        case "overlay":
            return T.intl.string(P.default["2940LX"]);
        case "bot":
            return T.intl.string(P.default.tjpaGN);
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
        r = (0, G.Zv)(n),
        i = (0, c.bG)(
            [ex.A, eg.A],
            () => null != t && ex.A.getWindowOpen(ej.MLl.ACTIVITY_POPOUT) && eg.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, eb.x1)(t) || i || r) return null;
    let s = (0, ep.fl)(t.id);
    if (null == s || !(0, ev.Ub)(s)) return null;
    let o = T.intl.string(l ? T.t.Z7MyNB : T.t.OIDkcp);
    return (0, a.jsx)(N.A.Icon, {
        tooltip: o,
        icon: l ? ef.FullscreenExitIcon : eh.FullscreenEnterIcon,
        "aria-label": o,
        role: "switch",
        "aria-checked": l,
        selected: l,
        onClick: () => (0, ep.U8)(t.id),
    });
}
var ek = n(265872),
    ew = n(165862),
    eC = n(477782),
    eA = n(559106),
    eS = n(847374),
    eN = n(704745);
function eI(e) {
    let { targets: t, target: n, onChange: l } = e,
        [r, s] = i.useState(!1),
        o = null != n && t.length > 1;
    r && !o && s(!1);
    let u = i.useCallback(() => s(!1), []),
        c = i.useCallback(() => s((e) => !e), []),
        d = i.useRef(null);
    if (!o) return null;
    let m = T.intl.string(P.default.I2ucou);
    return (0, a.jsx)(ek.Y, {
        targetElementRef: d,
        shouldShow: r,
        onRequestClose: u,
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
                children: (0, a.jsx)(eC.rX, {
                    label: m,
                    children: t.map((e) => {
                        let t = ec(e);
                        return (0, a.jsx)(
                            eC.iD,
                            {
                                id: `preview-target-${t}`,
                                group: "conjure-preview-target",
                                label: ed(e),
                                checked: t === ec(n),
                                action: () => {
                                    (l(e), u());
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
            return (0, a.jsx)(eA.vN, {
                children: (0, a.jsxs)("button", {
                    ...r,
                    ref: d,
                    type: "button",
                    className: eN.h,
                    "aria-haspopup": "menu",
                    "aria-expanded": i,
                    onClick: c,
                    children: [
                        (0, a.jsx)(y.E, {
                            tag: "span",
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: T.intl.string(P.default["N+VA1J"]),
                        }),
                        (0, a.jsx)(y.E, {
                            tag: "span",
                            variant: "body-sm/medium",
                            color: "none",
                            lineClamp: 1,
                            children: ed(n),
                        }),
                        (0, a.jsx)(eS.ChevronSmallDownIcon, { size: "xs", color: "currentColor" }),
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
    eP = n(260498),
    eT = n(625180),
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
            [eP.Ay, ez.A],
            () => {
                let e = eP.Ay.getProject(t),
                    n = ez.A.getPublishStatus(t)?.publishState,
                    l = null != e && (0, eP.PV)(e),
                    r = null != e && null != n && (l ? "nothing_built" !== n : (0, eZ.lE)(n));
                return { canShare: r, firstShare: r && l && "user" === e.install_scope };
            },
            [t],
        ),
        o = i.useRef(null);
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
                          void (0, H.mM)(async () => {
                              let { default: t } = await Promise.all([
                                  n.e(943832),
                                  n.e(159957),
                                  n.e(441532),
                                  n.e(500704),
                                  n.e(322408),
                                  n.e(788064),
                                  n.e(970902),
                              ]).then(n.bind(n, 214645));
                              return (n) => (0, a.jsx)(t, { ...n, ...e });
                          })
                      );
                  },
              })
            : (0, a.jsx)(ek.Q, {
                  targetElementRef: o,
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
                          ref: o,
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
var eJ = n(450030),
    e0 = n(812771),
    e1 = n(58736);
(n(743898), n(134528), n(947204));
var e2 = n(333007),
    e3 = n(621466),
    e4 = n(775121),
    e5 = n(989145),
    e7 = n(866665),
    e8 = n(81369),
    e9 = n(826745),
    e6 = n(34595),
    te = n(470779);
function tt(e) {
    let {
            projectId: t,
            at: n,
            bounds: l,
            kind: r,
            value: s,
            onChange: o,
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
            takeRefs: C,
        } = (0, e6.FM)({ projectId: t, surface: "design", onUploadFile: h }),
        A = i.useRef(null),
        S = (m || j.length > 0) && w && !f,
        N = i.useCallback(() => {
            if (!S) return;
            let e = C();
            c(e.length > 0 ? e : void 0);
        }, [S, C, c]),
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
        className: u()(te.M0, { [te.ho]: I && !f, [te.ET]: f }),
        style: { left: q, top: F },
        "data-testid": "conjure-design-compose-bar",
        children: [
            p
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)("input", {
                              ref: A,
                              type: "file",
                              multiple: !0,
                              className: te.Fg,
                              tabIndex: -1,
                              "aria-hidden": !0,
                              onChange: (e) => {
                                  (b(Array.from(e.target.files ?? [])), (e.target.value = ""));
                              },
                          }),
                          (0, a.jsx)(e7.m, {
                              position: "bottom",
                              text: T.intl.string(P.default.lgvqSB),
                              ariaHidden: !0,
                              children: (0, a.jsx)("button", {
                                  type: "button",
                                  className: te.tY,
                                  onClick: () => A.current?.click(),
                                  "aria-label": T.intl.string(P.default.lgvqSB),
                                  children: (0, a.jsx)(e8.FileUpIcon, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: te.WW,
                                  }),
                              }),
                          }),
                      ],
                  })
                : null,
            (0, a.jsx)(e9.y, {
                autoFocus: !0,
                rows: 1,
                className: te.hF,
                value: s,
                placeholder: x ?? ("" === r ? T.intl.string(P.default.MPPV1Q) : `Edit ${r}`),
                "aria-label": v ?? T.intl.string(P.default.KCYqWL),
                onChange: (e) => o(e.target.value),
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
                      className: te.ZO,
                      children: j.map((e) => (0, a.jsx)(e6.Nl, { draft: e, onRemove: k }, e.localId)),
                  })
                : null,
        ],
    });
}
function tn(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function tl(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function tr(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [n, l] = i.useState(() => (t ? tn(e()) : null));
    return (
        i.useEffect(() => {
            if (!t) return;
            function n() {
                let t = tn(e());
                l((e) => (tl(e, t) ? e : t));
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
var ta = n(46676),
    ti = n(876798),
    ts = n(408278),
    to = n(48507),
    tu = n(193885),
    tc = n(744898),
    td = n(803656),
    tm = n(241326),
    tf = n(972213),
    th = n(646514);
function tg(e) {
    return e.resolve({ saturation: 1 }).hex();
}
function tp(e, t, n) {
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
let tx = tp("red", tg(th.A.unsafe_rawColors.RED_400), () => T.intl.string(P.default.tvXfjt)),
    tv = [
        tx,
        tp("yellow", tg(th.A.unsafe_rawColors.YELLOW_300), () => T.intl.string(P.default.FYuaJ1)),
        tp("green", tg(th.A.unsafe_rawColors.GREEN_360), () => T.intl.string(P.default["Vv+paS"])),
        tp("blue", tg(th.A.unsafe_rawColors.BLUE_345), () => T.intl.string(P.default.k9b1QJ)),
        tp("white", tg(th.A.unsafe_rawColors.WHITE), () => T.intl.string(P.default["1sOXwH"])),
    ];
function tj(e) {
    return tv.find((t) => t.id === e) ?? tx;
}
var tb = n(39416);
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
            d: "M12 3v18M3 12h18M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3",
            stroke: "currentColor",
            strokeWidth: 1.8,
            strokeLinecap: "round",
            strokeLinejoin: "round",
        }),
    });
}
function tk(e) {
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
function tw(e) {
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
function tC(e) {
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
let tA = E.ck.map((e) => tC(Math.min(16, e + 3))),
    tS = E.Cw.map((e) => tC(Math.min(16, e / 2.5))),
    tN = [P.default.jZtZUr, P.default.cTQdD0, P.default.J3ucEg],
    tI = {
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
            label: () => T.intl.string(P.default.oIZQbm),
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
            label: () => T.intl.string(P.default.ARNVr7),
        },
    };
function tE(e) {
    let { icon: t, label: n, pressed: l, onClick: r } = e;
    return (0, a.jsx)(e7.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)("span", {
            className: tb.z6,
            "data-active": l ? "" : void 0,
            children: (0, a.jsx)(ti.k, {
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
function t_(e) {
    let { icon: t, label: n, disabled: l, onClick: r } = e;
    return (0, a.jsx)(e7.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)(ts.K, {
            icon: t,
            size: "sm",
            variant: "icon-only",
            disabled: l,
            "aria-label": n,
            onClick: r,
        }),
    });
}
function tM(e) {
    let { label: t, trigger: n, children: l, direction: r } = e,
        [s, o] = i.useState(!1),
        u = i.useCallback(() => o(!1), []),
        c = i.useCallback(() => o((e) => !e), []);
    return (0, a.jsxs)("div", {
        className: tb.pr,
        onMouseEnter: () => o(!0),
        onMouseLeave: u,
        children: [
            n(c),
            s
                ? (0, a.jsx)("div", {
                      className: tb.mz,
                      "data-direction": r,
                      role: "group",
                      "aria-label": t,
                      children: l(u),
                  })
                : null,
        ],
    });
}
function tR(e) {
    let { projectId: t, state: n, onExit: l, onUndo: r, onRedo: i, onClear: s } = e,
        { tool: o, lastShape: u, markerSize: c, eraserSize: d, history: m } = n,
        f = tj(n.colorId);
    function h(e) {
        return (0, E.rC)(t, e);
    }
    let g = tI[u],
        p = T.intl.string(P.default.hUm825),
        x = T.intl.string(P.default.n5IA3a),
        v = T.intl.string(P.default.r5dX6t),
        j = T.intl.string(P.default.VfYqDq);
    return (0, a.jsxs)("div", {
        className: tb.t$,
        children: [
            (0, a.jsx)("div", {
                className: tb.NT,
                children: (0, a.jsx)(tE, {
                    icon: tk,
                    label: T.intl.string(P.default.YtyKcM),
                    pressed: "pick" === o,
                    onClick: () => h("pick"),
                }),
            }),
            (0, a.jsxs)("div", {
                className: tb.H$,
                role: "toolbar",
                "aria-orientation": "vertical",
                "aria-label": T.intl.string(P.default["0IAEFf"]),
                children: [
                    (0, a.jsx)(tE, {
                        icon: ty,
                        label: T.intl.string(P.default.qTOXqb),
                        pressed: "move" === o,
                        onClick: () => h("move"),
                    }),
                    (0, a.jsx)(tE, {
                        icon: to.LettersIcon,
                        label: T.intl.string(P.default.AGb8aK),
                        pressed: "text" === o,
                        onClick: () => h("text"),
                    }),
                    (0, a.jsx)(tM, {
                        label: p,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(tE, {
                                icon: tu.PaintbrushThinIcon,
                                label: p,
                                pressed: "marker" === o,
                                onClick: () => {
                                    (h("marker"), e());
                                },
                            }),
                        children: (e) =>
                            tA.map((n, l) =>
                                (0, a.jsx)(
                                    tE,
                                    {
                                        icon: n,
                                        label: T.intl.string(tN[l]),
                                        pressed: "marker" === o && c === l,
                                        onClick: () => {
                                            ((0, E.KZ)(t, l), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(tM, {
                        label: v,
                        direction: "row",
                        trigger: (e) =>
                            (0, a.jsx)(tE, {
                                icon: g.icon,
                                label: v,
                                pressed: "circle" === o || "square" === o,
                                onClick: () => {
                                    (h(u), e());
                                },
                            }),
                        children: (e) =>
                            Object.keys(tI).map((t) =>
                                (0, a.jsx)(
                                    tE,
                                    {
                                        icon: tI[t].icon,
                                        label: tI[t].label(),
                                        pressed: o === t,
                                        onClick: () => {
                                            (h(t), e());
                                        },
                                    },
                                    t,
                                ),
                            ),
                    }),
                    (0, a.jsx)(tM, {
                        label: x,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(tE, {
                                icon: tw,
                                label: x,
                                pressed: "eraser" === o,
                                onClick: () => {
                                    (h("eraser"), e());
                                },
                            }),
                        children: (e) =>
                            tS.map((n, l) =>
                                (0, a.jsx)(
                                    tE,
                                    {
                                        icon: n,
                                        label: T.intl.string(tN[l]),
                                        pressed: "eraser" === o && d === l,
                                        onClick: () => {
                                            ((0, E._A)(t, l), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(tM, {
                        label: j,
                        direction: "row",
                        trigger: (e) => (0, a.jsx)(t_, { icon: f.icon, label: j, onClick: e }),
                        children: (e) =>
                            tv.map((n) =>
                                (0, a.jsx)(
                                    tE,
                                    {
                                        icon: n.icon,
                                        label: n.label(),
                                        pressed: n.id === f.id,
                                        onClick: () => {
                                            ((0, E.Yx)(t, n.id), e());
                                        },
                                    },
                                    n.id,
                                ),
                            ),
                    }),
                    (0, a.jsx)("div", { className: tb.Gz, role: "separator" }),
                    (0, a.jsx)(t_, {
                        icon: tc.UndoIcon,
                        label: T.intl.string((0, I.cX)() ? P.default["j/XmBQ"] : P.default.AeHDE6),
                        disabled: 0 === m.past.length,
                        onClick: r,
                    }),
                    (0, a.jsx)(t_, {
                        icon: td.RedoIcon,
                        label: T.intl.string((0, I.cX)() ? P.default.C7jhpn : P.default.pp16iB),
                        disabled: 0 === m.future.length,
                        onClick: i,
                    }),
                    (0, a.jsx)(t_, {
                        icon: tm.TrashIcon,
                        label: T.intl.string(P.default.wo5a0i),
                        disabled: 0 === m.present.length,
                        onClick: s,
                    }),
                    (0, a.jsx)("div", { className: tb.Gz, role: "separator" }),
                    (0, a.jsx)(t_, { icon: tf.XLargeIcon, label: T.intl.string(P.default.tuQ5f3), onClick: l }),
                ],
            }),
        ],
    });
}
let tP = th.A.unsafe_rawColors.WHITE.resolve({ saturation: 1 }).hex(),
    tT = th.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex(),
    tL = th.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex();
function t$(e, t, n) {
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
                    (e.strokeStyle = tL),
                    e.strokeText(n.text, l(n.at.x), r(n.at.y)),
                    e.fillText(n.text, l(n.at.x), r(n.at.y)));
            }
        }
    e.globalCompositeOperation = "source-over";
}
function tD(e) {
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
let tq = { dx: 0, dy: 0 },
    tF = { v: "move", p: "pick", t: "text", m: "marker", o: "circle", r: "square", e: "eraser" },
    tO = 1;
function tG(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r } = e,
        s = null != n && n === l ? t : null,
        o = (0, E.d5)(s),
        { active: u } = (0, z.rt)(s),
        c = (0, H.Rv)(),
        [d, m] = i.useState(!1);
    i.useEffect(() => {
        if (null != s)
            return () => {
                (0, E.K7)(s)?.active === !0 && (0, E.It)(s);
            };
    }, [s]);
    let f = o?.active === !0 && "pick" === o.tool;
    i.useEffect(() => {
        null != s && f && !u && (0, z.w4)(s);
    }, [s, f, u]);
    let h = i.useCallback(async () => {
        let e = r();
        if (null == e) return null;
        let t = await (0, eE.wn)(e);
        if (null != t) return t;
        function n() {
            m(!1);
        }
        (0, e2.flushSync)(() => m(!0));
        try {
            await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e())));
            let t = new Promise((e) => window.setTimeout(() => e(null), 5e3));
            return await Promise.race([(0, eE.fs)(e, n), t]);
        } finally {
            n();
        }
    }, [r]);
    return (i.useEffect(() => {
        if (null != s) return ((0, E.j5)(s, h), () => (0, E.j5)(s, null));
    }, [s, h]),
    null == s || null == o || !o.active || c)
        ? null
        : (0, a.jsx)(tz, { projectId: s, state: o, capturing: d, resolveIframe: r });
}
function tz(e) {
    let { projectId: t, state: n, capturing: l, resolveIframe: r } = e,
        s = tr(r),
        [o, u] = i.useState(null),
        [c, d] = i.useState(0),
        [m, f] = i.useState(null),
        [h, g] = i.useState(tq),
        p = i.useRef(null),
        x = i.useRef(null),
        v = i.useRef(null),
        j = i.useRef(null),
        b = i.useRef(null),
        { tool: y, history: k } = n,
        w = tj(n.colorId),
        C = "pick" !== y,
        A = (0, E.Qq)(n),
        S = "eraser" === y ? null : w.value,
        N = i.useMemo(
            () =>
                null == A
                    ? void 0
                    : (function (e, t) {
                          let n = Math.ceil(Math.max(e, 24) / 2),
                              l = 2 * n + 4;
                          if (l > 128) return "crosshair";
                          let r = l / 2,
                              a = (e, t) => `<circle cx="${r}" cy="${r}" r="${e}" ${t}/>`,
                              i = [
                                  `<svg xmlns="http://www.w3.org/2000/svg" width="${l}" height="${l}" viewBox="0 0 ${l} ${l}">`,
                                  a(n, `fill="none" stroke="${tT}" stroke-width="4"`),
                                  a(n, `fill="none" stroke="${tP}" stroke-width="2"`),
                                  a(3, `fill="${t ?? tP}" stroke="${tT}" stroke-width="1"`),
                                  "</svg>",
                              ].join("");
                          return `url("data:image/svg+xml,${encodeURIComponent(i)}") ${r} ${r}, crosshair`;
                      })(A, S),
            [A, S],
        ),
        I = "move" === y ? (k.present.find((e) => e.id === m) ?? null) : null,
        _ = null != s;
    (i.useLayoutEffect(() => {
        d(x.current?.offsetWidth ?? 0);
    }, [_]),
        i.useLayoutEffect(() => {
            b.current = o;
        }, [o]));
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
            i = null == a ? k.present : k.present.map((e) => (e.id === a.id ? (0, ta.y)(e, h.dx, h.dy) : e)),
            o = v.current;
        t$(r, null == o ? i : [...i, o], { width: s.width, height: s.height });
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
                id: `mark-${tO++}`,
                kind: "text",
                color: w.value,
                size: 20 / s.width,
                at: e.at,
                text: e.value.trim(),
            };
            ((0, ta.oy)(n, s) && (0, E.tD)(t, { type: "commit", shape: n }), u(null), (0, E.QP)(t));
        }, [t, w, s]),
        $ = i.useCallback(() => {
            ((b.current = null), u(null), (0, E.QP)(t));
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
                            l = null == I ? null : (0, ta.k_)(I, s),
                            r =
                                null != l && n.x >= l.x && n.x <= l.x + l.width && n.y >= l.y && n.y <= l.y + l.height
                                    ? I
                                    : (0, ta.WF)(k.present, t, s, 6);
                        if ((f(r?.id ?? null), null == r)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            e.currentTarget.toggleAttribute("data-dragging", !0),
                            (j.current = { id: r.id, origin: t }));
                        return;
                    }
                    case "text":
                        u({ at: t, value: "" });
                        return;
                    case "eraser":
                        if (!(0, ta.jG)(k.present)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (v.current = {
                                id: `mark-${tO++}`,
                                kind: "erase",
                                width: E.Cw[n.eraserSize] / s.width,
                                points: [t],
                            }));
                        break;
                    case "marker":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (v.current = {
                                id: `mark-${tO++}`,
                                kind: "marker",
                                color: w.value,
                                width: E.ck[n.markerSize] / s.width,
                                points: [t],
                            }));
                        break;
                    case "circle":
                    case "square":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (v.current = {
                                id: `mark-${tO++}`,
                                kind: y,
                                color: w.value,
                                width: 4 / s.width,
                                from: t,
                                to: t,
                            }));
                }
                M();
            },
            [s, y, w, I, k.present, n.markerSize, n.eraserSize, R, L, M],
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
                ((j.current = null), g(tq), (0, E.tD)(t, { type: "move", id: e.id, dx: h.dx, dy: h.dy }));
                return;
            }
            let n = v.current;
            ((v.current = null),
                null != n && null != s && (0, ta.oy)(n, s)
                    ? ((0, E.tD)(t, { type: "commit", shape: n }), (0, E.QP)(t))
                    : M());
        }, [t, s, h, M]),
        O = i.useCallback(() => (0, E.V9)(t), [t]),
        G = i.useCallback(() => (0, E.tD)(t, { type: "undo" }), [t]),
        z = i.useCallback(() => (0, E.tD)(t, { type: "redo" }), [t]),
        U = i.useCallback(() => (0, E.tD)(t, { type: "clear" }), [t]),
        B = i.useRef({ tool: y, selected: I, exit: O, undo: G, redo: z });
    if (
        (i.useLayoutEffect(() => {
            B.current = { tool: y, selected: I, exit: O, undo: G, redo: z };
        }),
        i.useEffect(() => {
            function e(e) {
                if (
                    e.defaultPrevented ||
                    (0, e3.Cw)((0, e3.vq)(e.target, HTMLElement) ? e.target : null) ||
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
                    (e.preventDefault(), (0, E.tD)(t, { type: "remove", id: l.id }), f(null));
                    return;
                }
                if (e.shiftKey) return;
                let o = tF[s];
                null != o && (e.preventDefault(), (0, E.rC)(t, o));
            }
            return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
        }, [t]),
        i.useEffect(() => {
            if (C) return (e4.A.disable(), () => e4.A.enable());
        }, [C]),
        null == s)
    )
        return null;
    let K = Math.max(8, s.left - c - 8),
        H = null == I ? null : (0, ta.k_)(null == j.current ? I : (0, ta.y)(I, h.dx, h.dy), s);
    return (0, e2.createPortal)(
        (0, a.jsxs)("div", {
            children: [
                (0, a.jsx)("div", {
                    className: tb.qe,
                    style: { left: s.left, top: s.top, width: s.width, height: s.height },
                    "aria-hidden": !0,
                }),
                (0, a.jsxs)("div", {
                    className: tb.Pw,
                    style: { left: s.left, top: s.top, width: s.width, height: s.height },
                    "data-testid": "conjure-edit-ink",
                    children: [
                        (0, a.jsx)("canvas", {
                            ref: p,
                            className: tb.Ji,
                            "data-tool": y,
                            "data-interactive": C && !l ? "" : void 0,
                            "aria-label": T.intl.string(P.default["qlgN+X"]),
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
                                  className: tb.r1,
                                  style: { left: H.x, top: H.y, width: H.width, height: H.height },
                                  "aria-hidden": !0,
                                  children: [
                                      (0, a.jsx)("span", { className: tb.p$, "data-corner": "nw" }),
                                      (0, a.jsx)("span", { className: tb.p$, "data-corner": "ne" }),
                                      (0, a.jsx)("span", { className: tb.p$, "data-corner": "sw" }),
                                      (0, a.jsx)("span", { className: tb.p$, "data-corner": "se" }),
                                  ],
                              }),
                    ],
                }),
                null == o
                    ? null
                    : (0, a.jsx)(tt, {
                          projectId: t,
                          anchor: "point",
                          at: { x: s.left + o.at.x * s.width, y: s.top + o.at.y * s.height },
                          bounds: s,
                          kind: "",
                          placeholder: T.intl.string(P.default["8gX1lw"]),
                          label: T.intl.string(P.default["5W7SSZ"]),
                          allowAttachments: !1,
                          value: o.value,
                          onChange: (e) => u((t) => (null == t ? null : { ...t, value: e })),
                          onSubmit: L,
                          onUploadFile: (e) => (0, e5.vX)(t, e),
                          onDismiss: $,
                          canSubmit: "" !== o.value.trim(),
                          closing: !1,
                      }),
                (0, a.jsx)("div", {
                    ref: x,
                    className: tb.ej,
                    style: { left: K, top: s.top },
                    "data-conjure-edit-rail": "",
                    children: (0, a.jsx)(tR, { projectId: t, state: n, onExit: O, onUndo: G, onRedo: z, onClear: U }),
                }),
            ],
        }),
        document.body,
    );
}
var tU = n(308081),
    tB = n(516521),
    tK = n(683071),
    tH = n(789645),
    tV = n(65593),
    tW = n(218394),
    tX = n(115982),
    tQ = n(886540);
function tZ(e) {
    return !(0, tQ.BL)(e) && !0 !== e.stopRequested;
}
var tY = n(104317),
    tJ = n(939249),
    t0 = n(643278),
    t1 = n(566424),
    t2 = n(683063),
    t3 = n(140735),
    t4 = n(320448),
    t5 = n(138212);
function t7(e) {
    let { title: t, trailing: n, children: l, className: r, headerClassName: i, ...s } = e;
    return (0, a.jsxs)("section", {
        className: u()(t5.Nr, r),
        ...s,
        children: [
            (0, a.jsxs)("header", {
                className: u()(t5.wx, null != n && t5.o5, i),
                children: [
                    (0, a.jsx)(y.E, { tag: "span", variant: "body-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var t8 = n(148590);
function t9(e) {
    let { children: t } = e;
    return (0, a.jsx)(y.E, { variant: "body-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function t6(e) {
    let {
            title: t,
            meta: n,
            superseded: l = !1,
            showLabel: r,
            hideLabel: s,
            bodyClassName: o,
            beforeBody: c,
            children: d,
            ...m
        } = e,
        f = i.useId(),
        [h, g] = i.useState(!l),
        [p, x] = i.useState(l);
    p !== l && (x(l), g(!l));
    let v = i.useCallback(() => g((e) => !e), []),
        j = h ? eS.ChevronSmallDownIcon : t4.ChevronSmallRightIcon,
        b = null != n || l;
    return (0, a.jsxs)(t7, {
        ...m,
        title: t,
        trailing: b
            ? (0, a.jsxs)("span", {
                  className: t8.ZY,
                  children: [
                      n,
                      l
                          ? (0, a.jsx)(tJ.D, {
                                className: t8.L$,
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
        headerClassName: h ? void 0 : t8.RG,
        "data-superseded": l ? "true" : void 0,
        children: [c, (0, a.jsx)("div", { id: f, className: u()(t8.rf, o), hidden: !h, children: d })],
    });
}
n(321073);
var ne = n(883646);
let nt = [];
function nn(e) {
    let { status: t } = e;
    return (0, a.jsxs)("span", {
        className: u()(ne.xL, {
            [ne.Vb]: "in_progress" === t,
            [ne.cT]: "completed" === t,
            [ne.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return T.intl.string(P.default.KvBdun);
                case "in_progress":
                    return T.intl.string(P.default["m5G9+S"]);
                case "unfinished":
                    return T.intl.string(P.default.lRpwhD);
                default:
                    return T.intl.string(P.default.sPGeWi);
            }
        })(t),
        children: [
            (0, a.jsx)(k.y, {
                type: k.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: ne.Qd,
                itemClassName: ne.xB,
                "aria-hidden": !0,
            }),
            (0, a.jsx)("svg", {
                className: ne.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, a.jsx)("path", { className: ne.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function nl(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : nt), [n, t]),
        r = i.useMemo(() => new Set(l.map((e) => e.key)), [l]),
        s = l.map((e) => e.key).join("\0"),
        [o, u] = i.useState(l),
        [c, d] = i.useState(s),
        [m, f] = i.useState(!1);
    c !== s && (d(s), u([...l, ...o.filter((e) => !r.has(e.key))]), 0 === l.length && f(!1));
    let h = o.some((e) => !r.has(e.key));
    if (
        (i.useEffect(() => {
            if (!h) return;
            let e = setTimeout(() => u(l), n ? 200 : 250);
            return () => clearTimeout(e);
        }, [h, l, n]),
        i.useEffect(() => {
            if (!n || 0 === o.length) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => f(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [n, o.length]),
        0 === o.length)
    )
        return null;
    let g = o.slice(0, 3),
        p = o.length - g.length;
    return (0, a.jsxs)("span", {
        className: ne.X6,
        "data-shown": n && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: s } = n;
                return (0, a.jsx)(
                    t2.u,
                    {
                        asset: (0, a.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: ne.MA,
                            "data-leaving": r.has(t) ? void 0 : "true",
                            children: (0, a.jsx)(s, { size: 16, alt: l, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            p > 0
                ? (0, a.jsx)(y.E, {
                      tag: "span",
                      variant: "body-xs/medium",
                      color: "text-muted",
                      className: ne.qA,
                      children: `+${p}`,
                  })
                : null,
        ],
    });
}
function nr(e) {
    let t,
        { todos: n, provisional: l, agents: r, live: s = !0 } = e,
        o = (function (e) {
            let t = e.join("\0"),
                [n, l] = i.useState(() => new Set(e)),
                [r, a] = i.useState(t),
                [s, o] = i.useState(() => new Set());
            return (
                r !== t && (a(t), l(new Set(e)), o(0 === n.size ? new Set() : new Set(e.filter((e) => !n.has(e))))),
                i.useEffect(() => {
                    if (0 === s.size) return;
                    let e = 0,
                        t = requestAnimationFrame(() => {
                            e = requestAnimationFrame(() => o(new Set()));
                        });
                    return () => {
                        (cancelAnimationFrame(t), cancelAnimationFrame(e));
                    };
                }, [s]),
                s
            );
        })(i.useMemo(() => n.map((e) => e.id), [n])),
        c =
            ((t = (r ?? nt).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
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
                    })(r ?? nt),
                [t],
            ));
    return (0, a.jsxs)("ul", {
        className: ne.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, a.jsxs)(
                    "li",
                    {
                        className: u()(ne.AS, { [ne.J1]: "completed" === n }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(nn, { status: n }),
                            (0, a.jsx)(y.E, {
                                variant: "body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: ne.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", {
                                    className: ne.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, a.jsx)(nl, { agents: c.get(e.id) ?? nt, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, a.jsxs)("li", {
                      className: ne.AS,
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(nn, { status: "pending" }),
                          (0, a.jsx)(y.E, {
                              variant: "body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: ne.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: ne.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function na(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: r = !0, live: i = !0, superseded: s = !1 } = e,
        { completed: o, total: u } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === u) return null;
    let c = T.intl.formatToPlainString(P.default["P/I+JW"], { completed: o, total: u }),
        d = T.intl.formatToPlainString(P.default["7tzwKB"], { completed: o, total: u });
    return (0, a.jsx)(t6, {
        title: T.intl.string(P.default.RtzECX),
        meta: (0, a.jsx)(t9, { children: c }),
        superseded: s,
        showLabel: T.intl.string(P.default.RKyN9q),
        hideLabel: T.intl.string(P.default.xydHoj),
        className: ne.Nr,
        bodyClassName: ne.rf,
        beforeBody: r && !s ? (0, a.jsx)(t3.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, a.jsx)(nr, { todos: t, provisional: n, agents: l, live: i }),
    });
}
var ni = n(308665),
    ns = n(59678),
    no = n(903847);
function nu(e) {
    let { line: t, placement: n, todos: l, todosLive: r = !0, provisionalTodo: s, agents: o, onJumpToActivity: c } = e,
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
        [C, A] = i.useState(!1),
        [S, N] = i.useState(v);
    (S !== v && (N(v), v ? w(!0) : A(!1)),
        i.useEffect(() => {
            if (v || !k) return;
            let e = setTimeout(() => w(!1), 150);
            return () => clearTimeout(e);
        }, [v, k]),
        i.useEffect(() => {
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
        E = i.useCallback(() => j((e) => !e), []);
    return h
        ? (0, a.jsxs)("div", {
              className: no.qd,
              "data-placement": m,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: u()(no.vK, { [no.ho]: p && d, [no.ET]: !d }),
                      children: [
                          null == c
                              ? (0, a.jsx)("ol", {
                                    className: u()(no.Rk, ns.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(t1.A, {
                                        glyph: (0, a.jsx)(ni.A, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(tJ.D, {
                                    className: no.pZ,
                                    onClick: c,
                                    "aria-label": T.intl.string(P.default.hEK6qu),
                                    children: (0, a.jsx)("ol", {
                                        className: u()(no.Rk, ns.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(t1.A, {
                                            glyph: (0, a.jsx)(ni.A, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          I
                              ? (0, a.jsx)(e7.m, {
                                    text: T.intl.string(P.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, a.jsx)(tJ.D, {
                                        className: no.BO,
                                        onClick: E,
                                        "aria-expanded": v,
                                        "aria-label": T.intl.string(P.default.RtzECX),
                                        children: (0, a.jsx)(t0.ClipboardListIcon, {
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
                            className: u()(no.vB, { [no.pg]: v && C, [no.ui]: !v }),
                            children: (0, a.jsx)(na, {
                                todos: l,
                                provisional: s,
                                agents: o,
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
var nc = n(839214),
    nd = n(78564);
let nm = new Map(),
    nf = (0, nc.D)(() => ({ byMessageKey: {} }));
function nh(e, t) {
    let { [e]: n, ...l } = nf.getState().byMessageKey;
    nf.setState({ byMessageKey: null == t ? l : { ...l, [e]: t } });
}
var ng = n(195880),
    np = n(287111),
    nx = n(16619);
function nv(e) {
    let t = (0, nx.qh)("ConjureClarificationProjectPicker");
    return i.useMemo(
        () =>
            t
                .filter((t) => t.projectId !== e)
                .map((e) => ({ projectId: e.projectId, name: e.name, serverName: e.guildName })),
        [t, e],
    );
}
var nj = n(736553),
    nb = n(382541),
    ny = n(890497),
    nk = n(103557),
    nw = n(29073),
    nC = n(590077);
function nA(e) {
    let { projectId: t, request: n, canSend: l, onDismiss: r, onSent: s } = e,
        o = (function (e, t, n, l, r) {
            let a = nv(e),
                [s, o] = i.useState(null),
                [u, c] = i.useState([]),
                [d, m] = i.useState(t.prompt),
                [f, h] = i.useState(!1),
                [g, p] = i.useState(!1),
                x = i.useRef(new Map()),
                v = i.useRef(!1),
                j = i.useRef(!1),
                b = i.useMemo(() => a.filter((e) => !u.some((t) => t.target.projectId === e.projectId)), [a, u]),
                y = i.useMemo(
                    () => (null != t.project_ids ? t.project_ids : null != t.project_id ? [t.project_id] : []),
                    [t],
                ),
                k = i.useMemo(() => {
                    let e = s ?? y;
                    return b.filter((t) => e.includes(t.projectId)).map((e) => e.projectId);
                }, [s, y, b]),
                w = i.useMemo(() => b.filter((e) => k.includes(e.projectId)), [b, k]),
                C = i.useCallback((e) => {
                    o(e.slice(0, 10));
                }, []),
                A = d.trim(),
                S = n && !f && (w.length > 0 ? "" !== A : u.length > 0),
                N = i.useCallback(
                    (t) => {
                        j.current ||
                            ((j.current = !0),
                            h(!0),
                            null != r
                                ? r(t.map((e) => e.target))
                                : (0, np.RQ)(
                                      e,
                                      (function (e) {
                                          let t = new Map();
                                          for (let { target: n, prompt: l } of e) t.set(l, [...(t.get(l) ?? []), n]);
                                          return Array.from(t, (e) => {
                                              let [t, n] = e,
                                                  l = n
                                                      .map((e) =>
                                                          T.intl.formatToPlainString(P.default.tcDZw9, {
                                                              name: e.name,
                                                              projectId: e.projectId,
                                                          }),
                                                      )
                                                      .join(", "),
                                                  r = T.intl.formatToPlainString(P.default.jZlNst, { targets: l });
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
                    if (0 === w.length) return void N(u);
                    (h(!0), p(!1));
                    let l =
                        ((t = eP.Ay.getProject(e)?.name ?? e),
                        (n = T.intl.formatToPlainString(P.default.ScoZLp, { name: t, projectId: e })),
                        `${A}

${n}`);
                    Promise.allSettled(
                        w.map((e) => {
                            let t = x.current.get(e.projectId);
                            return (
                                t?.content !== l &&
                                    ((t = { content: l, nonce: (0, ng.m)() }), x.current.set(e.projectId, t)),
                                (async function (e, t, n) {
                                    let l,
                                        { ticket: r, baseUrl: a } = await (0, nb.dv)(e),
                                        i = new nj.u();
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
                            n = [...u, ...t.map((e) => ({ target: e, prompt: A }))];
                        if (t.length === w.length || v.current) {
                            n.length > 0 && N(n);
                            return;
                        }
                        (c(n), o(w.filter((e) => !t.includes(e)).map((e) => e.projectId)), h(!1), p(!0));
                    });
                }, [S, N, u, e, w, A]),
                E = i.useCallback(() => {
                    ((v.current = !0), u.length > 0 && !f && N(u), l());
                }, [N, u, l, f]);
            return {
                projects: b,
                targetIds: k,
                setTargetIds: C,
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
                o.projects.map((e) => ({
                    id: e.projectId,
                    label: e.name,
                    value: e.projectId,
                    ...(null == e.serverName ? {} : { description: e.serverName }),
                })),
            [o.projects],
        ),
        d = `${n.id}-heading`;
    return (0, a.jsxs)("section", {
        className: u()(nw.nd, nw.jx),
        "aria-labelledby": d,
        "data-conjure-app-build-request": n.id,
        children: [
            (0, a.jsxs)("div", {
                className: nw.wx,
                children: [
                    (0, a.jsx)(y.E, {
                        tag: "span",
                        id: d,
                        variant: "body-sm/medium",
                        color: "text-subtle",
                        className: nw.TK,
                        children: n.summary,
                    }),
                    (0, a.jsx)(ts.K, {
                        icon: tH.XSmallIcon,
                        size: "sm",
                        variant: "icon-only",
                        onClick: o.dismiss,
                        "aria-label": T.intl.string(P.default.KQUuAZ),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: nC.r,
                children: [
                    0 === c.length
                        ? (0, a.jsx)(y.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: T.intl.string(P.default.TbbzW5),
                          })
                        : (0, a.jsx)(ny.Z, {
                              label: T.intl.string(P.default["29gr8j"]),
                              placeholder: T.intl.string(P.default.twlOb6),
                              options: c,
                              selectionMode: "multiple",
                              wrapTags: !0,
                              value: [...o.targetIds],
                              onSelectionChange: o.setTargetIds,
                              disabled: o.sending,
                              maxOptionsVisible: 4,
                              fullWidth: !0,
                          }),
                    (0, a.jsx)(nk.f, {
                        label: T.intl.string(P.default.XZNsDA),
                        value: o.prompt,
                        onChange: o.setPrompt,
                        maxLength: 4e3,
                        disabled: o.sending,
                        autosize: !0,
                        rows: 3,
                        maxRows: 8,
                        error: o.failed ? T.intl.string(P.default.kMZz8G) : null,
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: nw.qr,
                children: (0, a.jsx)("div", {
                    className: nw.zt,
                    children: (0, a.jsx)(m.$, {
                        variant: "primary",
                        size: "sm",
                        text: T.intl.string(P.default.gG4j6o),
                        disabled: !o.canSubmit,
                        loading: o.sending,
                        onClick: o.submit,
                    }),
                }),
            }),
        ],
    });
}
var nS = n(47167),
    nN = n(734057),
    nI = n(994500),
    nE = n(287809),
    n_ = n(360047);
function nM(e, t, n) {
    let l = n[0]?.id;
    return null == l
        ? null
        : !0 === t.link
          ? { target: l, caller: e, key: `${l}:${e}` }
          : "incoming" === t.link
            ? { target: e, caller: l, key: `${e}:${l}` }
            : null;
}
function nR(e) {
    return 0 === e.options.length && null == e.input;
}
function nP(e) {
    return !1 !== e.allow_custom && !0 !== e.link && "incoming" !== e.link;
}
function nT(e, t, n) {
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
function nL(e, t) {
    return e.questions
        .map((e, n) => ({ question: e, index: n, answer: t[e.id] }))
        .filter((e) => null != e.answer && "" !== e.answer.text.trim())
        .map((e) => {
            let { question: t, index: n, answer: l } = e;
            return `${n + 1}. ${t.question} \u{2192} ${l.text.trim()}`;
        })
        .join("\n");
}
function n$(e, t, n, l) {
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
let nD = {
    [ej.rbe.GUILD_TEXT]: "text",
    [ej.rbe.GUILD_VOICE]: "voice",
    [ej.rbe.GUILD_ANNOUNCEMENT]: "announcement",
    [ej.rbe.GUILD_STAGE_VOICE]: "stage",
    [ej.rbe.GUILD_FORUM]: "forum",
    [ej.rbe.GUILD_MEDIA]: "media",
};
function nq(e, t, n, l) {
    return t.slice(0, 10).map((t) => ({
        id: t,
        name: n(t) ?? l.find((e) => e.id === t)?.name ?? t,
        ...(function (e, t) {
            if ("channel" === e) {
                var n;
                let l = null == (n = nN.A.getChannel(t)?.type) ? void 0 : nD[n];
                return { kind: e, ...(null == l ? {} : { channel_type: l }) };
            }
            if ("user" === e) {
                let n = nE.default.getUser(t)?.username;
                return { kind: e, ...(null == n ? {} : { username: n }) };
            }
            return { kind: e };
        })(e, t),
    }));
}
let nF = { channel: "#", role: "@", user: "@", project: "", server: "" },
    nO = {
        channel: [P.default["9+dfPT"], P.default.pGSJqE],
        role: [P.default["2VkCoD"], P.default.c8YlX8],
        user: [P.default.GZIAxl, P.default["4bptbQ"]],
        project: [P.default.twlOb6, P.default.twlOb6],
        server: [P.default.ZWXDeI, P.default.ZWXDeI],
    };
function nG(e, t) {
    return T.intl.string(nO[e][+!!t]);
}
var nz = n(658675),
    nU = n(123292),
    nB = n(900797),
    nK = n(331322),
    nH = n(771871),
    nV = n(700915),
    nW = n(985965),
    nX = n(831819);
function nQ(e) {
    let { link: t, disabled: n } = e,
        l = i.useId(),
        [r, s] = i.useState(!1),
        o = i.useRef(null),
        { sentence: u, options: c } = t.data,
        d = c.length > 1,
        m = i.useMemo(() => c.map((e) => ({ name: e.label, value: e.build })), [c]);
    return (
        i.useEffect(() => {
            r && o.current?.querySelector("input:checked")?.focus();
        }, [r]),
        (0, a.jsx)("div", {
            className: nX.Nz,
            children: (0, a.jsxs)(nK.B, {
                gap: 4,
                children: [
                    (0, a.jsx)(nV.A, {
                        caller: t.sides.caller,
                        target: t.sides.target,
                        callerProject: t.callerProject,
                        targetProject: t.targetProject,
                        flow: t.flow,
                    }),
                    null != t.purpose ? (0, a.jsx)(nW.A, { purpose: t.purpose }) : null,
                    null != u
                        ? (0, a.jsxs)("div", {
                              className: nX.em,
                              children: [
                                  (0, a.jsx)(y.E, { variant: "body-sm/normal", color: "text-subtle", children: u }),
                                  d && !r
                                      ? (0, a.jsxs)(a.Fragment, {
                                            children: [
                                                (0, a.jsx)(y.E, {
                                                    variant: "body-sm/normal",
                                                    color: "text-muted",
                                                    "aria-hidden": !0,
                                                    children: "\xb7",
                                                }),
                                                (0, a.jsx)(nU.Q, {
                                                    text: T.intl.string(P.default.I5F6YX),
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
                              ref: o,
                              className: nX.zM,
                              children: [
                                  (0, a.jsx)("span", { id: l, hidden: !0, children: t.aria }),
                                  (0, a.jsx)(nH.z, {
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
var nZ = n(344587),
    nY = n(155078);
function nJ(e) {
    return !0 === e.upload || e.options.some((e) => null != e.image);
}
let n0 = [];
function n1(e) {
    return !0 !== e.upload
        ? null
        : 0 === e.options.length
          ? T.intl.string(P.default.ZZ641e)
          : T.intl.string(1 === e.options.length ? P.default["2g3gk9"] : P.default.dkzChE);
}
var n2 = n(762026);
function n3(e) {
    return e?.kind === "image" || (e?.kind === "multi" && null != e.attachment);
}
function n4(e, t) {
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
var n5 = n(682163),
    n7 = n(300344),
    n8 = n(614733),
    n9 = n(904363),
    n6 = n(950902),
    le = n(136722),
    lt = n(778858),
    ln = n(808728),
    ll = n(696451),
    lr = n(71393),
    la = n(488926),
    li = n(426035),
    ls = n(246338);
let lo = le.kg(ej.xBc.VIEW_CHANNEL, ej.xBc.SEND_MESSAGES);
var lu = n(384017);
function lc(e) {
    let {
            guildId: t,
            question: n,
            value: l,
            disabled: r,
            onChange: i,
            onFocus: s,
            onBlur: o,
            options: u,
            placeholder: c,
            onQueryChange: d,
            matchSorterOptions: m,
        } = e,
        f = !0 === n.multi_select,
        h = l.map((e) => e.id);
    function g(e) {
        return nq(n.input ?? "channel", e, (e) => u.find((t) => t.value === e)?.label, l);
    }
    let p = {
        options: u,
        placeholder: c,
        disabled: r,
        onQueryChange: d,
        matchSorterOptions: m,
        onFocus: s,
        onBlur: o,
        fullWidth: !0,
        maxOptionsVisible: 4,
        label: n.question,
        hideLabel: !0,
    };
    return (0, a.jsx)("div", {
        className: lu.YX,
        "data-conjure-clarification-picker": n.input,
        children: f
            ? (0, a.jsx)(ny.Z, {
                  ...p,
                  selectionMode: "multiple",
                  wrapTags: !0,
                  value: h,
                  onSelectionChange: (e) => i(g(e), t),
              })
            : (0, a.jsx)(ny.Z, {
                  ...p,
                  selectionMode: "single",
                  clearable: !0,
                  value: h[0] ?? null,
                  onSelectionChange: (e) => i(null == e ? [] : g([e]), t),
              }),
    });
}
function ld(e) {
    let { projectId: t, guildId: n, fallback: l, ...r } = e,
        s = (0, n7.A)(n, r.question.channel_filter);
    return (!(function (e) {
        let t,
            n,
            { projectId: l, guildId: r, question: a, value: s, disabled: o, onChange: u } = e,
            d =
                ((t = null != r && "channel" === a.input && "safety_alerts_channel" === a.default),
                (n = (0, c.bG)(
                    [eP.Ay],
                    () => {
                        let e = t ? eP.Ay.getProject(l) : null;
                        return null == e ? null : (0, li.ug)(e);
                    },
                    [l, t],
                )),
                i.useEffect(() => {
                    null == r || null == n || ll.Ay.isMember(r, n) || lt.A.requestMembersById(r, [n]);
                }, [r, n]),
                (0, c.bG)(
                    [ln.A, ll.Ay, lr.A],
                    () => {
                        if (!t || null == r) return null;
                        let e = lr.A.getGuild(r)?.safetyAlertsChannelId,
                            l = ln.A.getChannels(r);
                        if (null == e || null == l) return null;
                        let i = (0, ls.Lp)(l, a.channel_filter).find((t) => t.id === e);
                        if (null == i) return null;
                        if (null != n && ll.Ay.isMember(r, n))
                            return la.$3({ permission: lo, user: n, context: i }) ? i : null;
                        let s = i.permissionOverwrites[r]?.deny ?? le.BY;
                        return le.X8(s, lo) ? null : i;
                    },
                    [r, n, t, a.channel_filter],
                )),
            m = i.useRef(null),
            f = i.useRef(!1);
        i.useEffect(() => {
            if (!f.current && !o && null != r) {
                if (null == m.current) {
                    if (s.length > 0) f.current = !0;
                    else if (null != d) {
                        var e;
                        ((m.current = d.id),
                            u(((e = []), nq("channel", [d.id], () => (0, nS.m1)(d, nE.default, nI.A), e)), r));
                    }
                    return;
                }
                1 !== s.length || s[0].id !== m.current ? (f.current = !0) : null == d && ((f.current = !0), u([], r));
            }
        }, [d, o, r, u, s]);
    })({ projectId: t, guildId: n, ...r }),
    null == s)
        ? l
        : (0, a.jsx)(lc, { ...r, guildId: n, options: s, placeholder: nG("channel", !0 === r.question.multi_select) });
}
function lm(e) {
    let { guildId: t, ...n } = e,
        l = (0, n9.A)(t);
    return (0, a.jsx)(lc, { ...n, guildId: t, options: l, placeholder: nG("role", !0 === n.question.multi_select) });
}
function lf(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: i } = (0, n8.A)(t);
    return (0, a.jsx)(lc, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: r,
        matchSorterOptions: i,
        placeholder: nG("user", !0 === n.question.multi_select),
    });
}
function lh(e) {
    let { projectId: t, fallback: n, ...l } = e,
        r = nv(t),
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
    return 0 === s.length ? n : (0, a.jsx)(lc, { ...l, options: s, placeholder: nG("project", !1) });
}
function lg(e) {
    let t = e.target;
    (0, e3.vq)(t, HTMLInputElement) && requestAnimationFrame(() => t.select());
}
function lp(e) {
    let { fallback: t, ...n } = e,
        l = (0, nx.z9)("ConjureClarificationEntityPicker"),
        r = i.useMemo(
            () =>
                l.map((e) => ({
                    id: `conjure-target-${e.id}`,
                    value: e.id,
                    label: e.name,
                    leading: (0, a.jsx)(n5.Ay, { guild: e, size: n5.Ay.Sizes.MINI, active: !0 }),
                })),
            [l],
        );
    return 0 === r.length
        ? t
        : (0, a.jsx)("div", {
              onFocus: lg,
              onMouseUp: lg,
              children: (0, a.jsx)(lc, { ...n, options: r, placeholder: nG("server", !1) }),
          });
}
function lx(e) {
    let { projectId: t, fallback: n = null, ...l } = e,
        r = (0, n6.Tj)(t, !0);
    if ("project" === l.question.input) return (0, a.jsx)(lh, { projectId: t, fallback: n, ...l }, l.question.id);
    if ("server" === l.question.input) return (0, a.jsx)(lp, { fallback: n, ...l }, l.question.id);
    if (null == r) return n;
    switch (l.question.input) {
        case "channel":
            return (0, a.jsx)(ld, { projectId: t, guildId: r, fallback: n, ...l }, l.question.id);
        case "role":
            return (0, a.jsx)(lm, { guildId: r, ...l }, l.question.id);
        case "user":
            return (0, a.jsx)(lf, { guildId: r, ...l }, l.question.id);
        default:
            return n;
    }
}
var lv = n(87221),
    lj = n(26430),
    lb = n(750943),
    ly = n(173936),
    lk = n(95477),
    lw = n(256905),
    lC = n(490707),
    lA = n(907702);
function lS(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: s, gone: o, handleError: c } = (0, lC._)(t, n),
        [d, m] = i.useState(null),
        f = null != s && d === s;
    return o
        ? (0, a.jsxs)("span", {
              className: u()(lA.Gt, lA.b6),
              children: [
                  (0, a.jsx)(lv.ImageWarningIcon, { size: "md", color: "currentColor" }),
                  (0, a.jsx)(y.E, {
                      tag: "span",
                      variant: "body-xs/medium",
                      color: "text-muted",
                      children: T.intl.string(P.default.lhgD88),
                  }),
              ],
          })
        : (0, a.jsx)("span", {
              className: u()(lA.Gt, { [lA.iP]: !f }),
              children:
                  null != s
                      ? (0, a.jsx)("img", {
                            src: s,
                            alt: l,
                            className: lA.Sl,
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
function lN(e) {
    let t,
        n,
        {
            projectId: l,
            option: r,
            multi: i,
            selected: s,
            disabled: o,
            reachable: c,
            tabbable: d,
            onPick: m,
            onView: f,
            onArrow: h,
            onMeasured: g,
            onRemove: p,
        } = e,
        x = T.intl.formatToPlainString(P.default.JGjZMs, { answer: r.label });
    return (0, a.jsxs)("div", {
        className: u()(lA.Vs, { [lA.Q9]: s, [lA.RX]: o }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, a.jsxs)(tJ.D, {
                className: u()(lA.Up, { [lA.XF]: null != r.image }),
                "data-conjure-image-option-pick": !0,
                onClick: o ? (null != r.image ? () => f(r) : void 0) : () => m(r),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), h(r, t));
                },
                role: i ? "checkbox" : "radio",
                "aria-checked": s,
                "aria-label": T.intl.formatToPlainString(P.default.AQbxhf, { answer: r.label }),
                "aria-disabled": o,
                tabIndex: c && d ? 0 : -1,
                children: [
                    (0, a.jsxs)("span", {
                        className: lA.$_,
                        children: [
                            null != r.image
                                ? (0, a.jsx)(lS, {
                                      projectId: l,
                                      attachmentId: r.image.attachment_id,
                                      alt: r.label,
                                      onMeasured: g,
                                  })
                                : (0, a.jsx)("span", { className: lA.Gt }),
                            (0, a.jsx)("span", {
                                className: lA.q3,
                                "aria-hidden": !0,
                                children: i
                                    ? (0, a.jsx)(nz.P, { checked: s, disabled: o })
                                    : (0, a.jsx)(nH.T, { checked: s, disabled: o }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(y.E, {
                        tag: "span",
                        variant: "body-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: lA.pG,
                        children:
                            "" !== (n = null != (t = r.image?.page_url ?? r.image?.url) ? (0, nY.E)(t) : "")
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
                      className: lA.B4,
                      children: (0, a.jsx)(e7.m, {
                          text: T.intl.string(P.default.HQEXJM),
                          children: (0, a.jsx)(ts.K, {
                              icon: tm.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: p,
                              disabled: o,
                              "aria-label": T.intl.string(P.default.HQEXJM),
                              tabIndex: c ? 0 : -1,
                          }),
                      }),
                  })
                : null != r.image
                  ? (0, a.jsx)("span", {
                        className: lA.B4,
                        children: (0, a.jsx)(e7.m, {
                            text: T.intl.string(P.default["4/eeDD"]),
                            children: (0, a.jsx)(ts.K, {
                                icon: lj.MaximizeIcon,
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
function lI(e) {
    let { projectId: t, question: n, selectedIds: l, disabled: r, reachable: s = !0, onPick: o, own: c } = e,
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
                      label: T.intl.string(P.default.SUdqCQ),
                      image: { attachment_id: e.attachment.id },
                  });
        }, [c.image]),
        b = i.useCallback(
            (e) => {
                let n = (null == j ? m : [...m, j]).flatMap((e) => (null != e.image ? [{ ...e, image: e.image }] : [])),
                    l = n.findIndex((t) => t.id === e.id);
                l < 0 ||
                    Promise.all(n.map((e) => (0, e5.PK)(t, e.image.attachment_id))).then(
                        (e) => {
                            (0, lw.R)({
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
                (x(l.id), h.current?.querySelectorAll("[data-conjure-image-option-pick]")[n]?.focus(), d || r || o(l));
            },
            [r, d, o, m],
        );
    return (0, a.jsxs)("div", {
        className: lA.Nz,
        "data-conjure-image-options": !0,
        children: [
            0 === m.length && null == j
                ? null
                : (0, a.jsxs)("div", {
                      ref: h,
                      className: u()(lA.fF, "gallery" === f ? lA.nV : lA.nM, { [lA.m3]: d }),
                      role: d ? "group" : "radiogroup",
                      "aria-labelledby": `${n.id}-label`,
                      "data-layout": f,
                      "data-count": m.length,
                      children: [
                          m.map((e) =>
                              (0, a.jsx)(
                                  lN,
                                  {
                                      projectId: t,
                                      option: e,
                                      multi: d,
                                      selected: l.includes(e.id),
                                      disabled: r,
                                      reachable: s,
                                      tabbable: d || e.id === v,
                                      onPick: (e) => {
                                          (x(e.id), o(e));
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
                                    lN,
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
            (0, a.jsx)(lE, {
                projectId: t,
                own: c,
                disabled: r,
                reachable: s,
                uploadText: T.intl.string(/\bicons?\b/i.test(n.question) ? P.default.qU4WN6 : P.default.cbMDDB),
            }),
        ],
    });
}
function lE(e) {
    let { projectId: t, own: n, disabled: l, reachable: r, uploadText: s } = e,
        o = i.useRef(null),
        [u, c] = i.useState(!1),
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
        className: lA.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, a.jsxs)("div", {
                className: lA.QJ,
                children: [
                    (0, a.jsx)(m.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: lb.ImagePlusIcon,
                        text: s,
                        loading: "upload" === g,
                        disabled: l || "link" === g,
                        onClick: () => o.current?.click(),
                        tabIndex: h,
                        "data-conjure-own-image-upload": !0,
                    }),
                    u
                        ? null
                        : (0, a.jsx)(m.$, {
                              variant: "secondary",
                              size: "sm",
                              icon: ly.LinkIcon,
                              text: T.intl.string(P.default["1TgOO+"]),
                              disabled: l || "upload" === g,
                              onClick: () => c(!0),
                              tabIndex: h,
                              "data-conjure-own-image-link": !0,
                          }),
                    (0, a.jsx)("input", {
                        ref: o,
                        type: "file",
                        accept: "image/png,image/jpeg,image/gif,image/webp",
                        className: lA.Fg,
                        tabIndex: -1,
                        "aria-hidden": !0,
                        onChange: (e) => {
                            let l = e.currentTarget.files?.[0];
                            ((e.currentTarget.value = ""), null != l && n.onUpload((0, np.rh)(t, l, l.name, l.type)));
                        },
                    }),
                ],
            }),
            u
                ? (0, a.jsxs)("div", {
                      className: lA.vG,
                      children: [
                          (0, a.jsx)("div", {
                              className: lA.Hs,
                              children: (0, a.jsx)(lk.k, {
                                  label: T.intl.string(P.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: T.intl.string(P.default.AVhvn8),
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
                              className: lA.gd,
                              children: [
                                  (0, a.jsx)(m.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: T.intl.string(P.default.FbRbeM),
                                      loading: "link" === g,
                                      disabled: l || "" === d.trim(),
                                      onClick: p,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, a.jsx)(nU.Q, {
                                      variant: "secondary",
                                      textVariant: "body-sm/medium",
                                      text: T.intl.string(P.default.eXZL4X),
                                      onClick: () => c(!1),
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
            n.error?.source === "upload"
                ? (0, a.jsx)(y.E, {
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
function l_(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: o } = e,
        c = i.useId(),
        d = !0 === t.recommended,
        m = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(tJ.D, {
        className: u()(lu.uK, { [lu.ue]: l, [lu.h4]: !0 === o }),
        onClick: l ? void 0 : () => r(t),
        "aria-label": T.intl.formatToPlainString(d ? P.default["2p6UFz"] : P.default.AQbxhf, { answer: t.label }),
        "aria-describedby": m ? c : void 0,
        "aria-disabled": l,
        role: null != o ? "checkbox" : void 0,
        "aria-checked": o,
        tabIndex: s ? 0 : -1,
        "data-conjure-clarification-option": t.id,
        "data-recommended": d ? "true" : void 0,
        children: [
            null != o
                ? (0, a.jsx)("span", { className: lu.dy, children: (0, a.jsx)(nz.P, { checked: o, disabled: l }) })
                : (0, a.jsx)("span", { className: lu.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: lu.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: lu.l8,
                        children: (0, a.jsx)(y.E, {
                            tag: "span",
                            variant: "body-md/medium",
                            color: "none",
                            className: lu.ed,
                            children: t.label,
                        }),
                    }),
                    m
                        ? (0, a.jsx)(y.E, {
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
                ? (0, a.jsx)(y.E, {
                      tag: "span",
                      variant: "body-xs/semibold",
                      color: "text-muted",
                      className: lu.rM,
                      children: T.intl.string(P.default.zku6r1),
                  })
                : null,
        ],
    });
}
function lM(e) {
    let { projectId: t, question: n, selected: l, disabled: r, reachable: i = !0, onPick: s, own: o } = e,
        u = !0 === n.multi_select;
    return nJ(n)
        ? (0, a.jsx)(lI, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: i, onPick: s, own: o })
        : (0, a.jsx)(a.Fragment, {
              children: n.options.map((e, t) =>
                  (0, a.jsx)(
                      l_,
                      {
                          option: e,
                          position: t + 1,
                          disabled: r,
                          selected: u ? l.includes(e.id) : void 0,
                          onPick: s,
                          reachable: i,
                      },
                      e.id,
                  ),
              ),
          });
}
let lR = [],
    lP = [];
function lT(e) {
    let {
            projectId: t,
            question: n,
            draft: l,
            selected: r,
            direction: i,
            disabled: s,
            ownImage: o,
            ownSelected: c,
        } = e,
        d = "" === l.trim() ? null : l,
        m = !0 === n.multi_select ? T.intl.string(P.default.tE8qbz) : n1(n);
    return (0, a.jsxs)("div", {
        className: u()(lu.Ge, lu.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            null == m
                ? null
                : (0, a.jsx)(y.E, {
                      tag: "div",
                      variant: "body-xs/normal",
                      color: "text-muted",
                      className: lu.aK,
                      children: m,
                  }),
            (0, a.jsx)(lM, {
                projectId: t,
                question: n,
                selected: r,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: n4(o, c),
            }),
            !1 === n.allow_custom || (!0 !== n.upload && nJ(n))
                ? null
                : (0, a.jsxs)("div", {
                      className: lu.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: lu.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(p.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == d ? null : (0, a.jsx)("span", { className: u()(lu.Pu, lu.es), children: d }),
                      ],
                  }),
            !0 === n.upload
                ? (0, a.jsx)("div", {
                      className: lu.$0,
                      children: (0, a.jsx)(nU.Q, {
                          variant: "secondary",
                          textVariant: "body-sm/medium",
                          text: T.intl.string(P.default.zxSq2q),
                          disabled: s,
                          tabIndex: -1,
                      }),
                  })
                : null,
        ],
    });
}
function lL(e) {
    var t;
    let {
            projectId: n,
            clarification: l,
            onSubmit: r,
            onDismiss: s,
            submitText: o,
            onBack: d,
            backText: f,
            hideSubmit: h = !1,
            headingLines: g = 5,
        } = e,
        [x, v] = i.useState({}),
        [j, b] = i.useState({}),
        [k, w] = i.useState({}),
        [C, A] = i.useState(() =>
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
                                let l = nM(e, t, n[t.id] ?? []);
                                return null == l ? [] : [[t.id, l]];
                            }),
                        ),
                    [t, n, e],
                ),
                [r, a] = i.useState({}),
                [s, o] = i.useState({}),
                u = i.useRef(new Set());
            i.useEffect(() => {
                for (let e of Object.values(l))
                    u.current.has(e.key) ||
                        (u.current.add(e.key),
                        (async function (e, t, n) {
                            try {
                                let l = await (0, n_.LW)(e, t);
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
                            u = null == i ? null : r[i.key],
                            c = n[a]?.[0]?.name,
                            m = d[e]?.name;
                        if (null == i || null == u || null == c || null == m) return null;
                        let f = i.caller === e,
                            h = d[i.caller],
                            g = {
                                caller: f ? m : c,
                                target: f ? c : m,
                                targetLive: u.live,
                                targetHasPreview: u.hasPreview,
                                callerHasPreview: null == h || (0, et._7)(h),
                                callerLiveOnVibeyard: !1,
                            },
                            p = s[i.key] ?? u.build,
                            x = t.questions.find((e) => e.id === a);
                        return {
                            sides: g,
                            callerProject: h ?? null,
                            targetProject: d[i.target] ?? null,
                            flow: x?.link_flow ?? u.flow,
                            purpose: (0, n2.xP)(x?.link_purpose ?? u.purpose),
                            data: (0, n2.Bw)(g, p),
                            value: p,
                            aria: (0, n2.sr)(g),
                            onChange: (e) => o((t) => ({ ...t, [i.key]: e })),
                        };
                    },
                    [s, t, n, l, e, d, r],
                ),
            };
        })(n, l, C),
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
        en = J.id === Y.id && J.expanded,
        [el, er] = i.useState(null),
        ea = j[Y.id] ?? "",
        ei = !0 === Y.multi_select,
        es = nJ(Y),
        eo = ei ? T.intl.string(P.default.tE8qbz) : n1(Y),
        eu = ei
            ? (k[Y.id] ?? lR)
            : ((t = x[Y.id]), t?.kind === "option" ? [t.optionId] : t?.kind === "multi" ? t.optionIds : n0),
        ec = (function (e, t, n) {
            let [l, r] = i.useState({}),
                [a, s] = i.useState({}),
                [o, u] = i.useState({}),
                c = T.intl.string(P.default.wTsP5l),
                d = i.useCallback((e) => l[e] ?? null, [l]),
                m = i.useCallback(
                    (e) => null != l[e.id] && (!0 === e.multi_select ? !0 === o[e.id] : n3(t[e.id])),
                    [t, l, o],
                ),
                f = i.useCallback(
                    (e) => {
                        let t = l[e.id];
                        return null != t && !0 === o[e.id] ? { attachment: t.attachment, text: c } : void 0;
                    },
                    [c, l, o],
                ),
                h = i.useCallback(
                    (i, o) => {
                        let d = i.id,
                            f = !0 === i.multi_select,
                            h = l[d] ?? null;
                        if (o) return n4(h, m(i));
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
                                    null != l && (0, e5.Vm)(e, l.attachment.id).catch(() => void 0), { ...n, [d]: t }
                                );
                            }),
                                g({ busy: null, error: null }),
                                f ? u((e) => ({ ...e, [d]: !0 })) : n((e) => (e[d] === x ? { ...e, [d]: p(t) } : e)));
                        }
                        return {
                            image: h,
                            selected: m(i),
                            busy: a[d]?.busy ?? null,
                            error: a[d]?.error ?? null,
                            onPick: () => {
                                null != h &&
                                    (f ? u((e) => ({ ...e, [d]: !0 !== e[d] })) : n((e) => ({ ...e, [d]: p(h) })));
                            },
                            onRemove: () => {
                                null != h &&
                                    ((0, e5.Vm)(e, h.attachment.id).catch(() => void 0),
                                    r((e) => {
                                        let { [d]: t, ...n } = e;
                                        return n;
                                    }),
                                    u((e) => ({ ...e, [d]: !1 })),
                                    n((e) => {
                                        if (f || !n3(e[d])) return e;
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
                                                error: { source: "upload", text: T.intl.string(P.default["kUw/b1"]) },
                                            }),
                                    ));
                            },
                            onLink: (t) => (
                                g({ busy: "link", error: null }),
                                (0, e5.gm)(e, t).then(
                                    (e) => (v({ attachment: e }), !0),
                                    (e) => (
                                        g({
                                            busy: null,
                                            error: {
                                                source: "link",
                                                text:
                                                    e instanceof Error && "" !== e.message
                                                        ? e.message
                                                        : T.intl.string(P.default.l79PMc),
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
        { text: ef, phase: eh } = (0, nZ.Q)(Y.question),
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
                        let a = nL(t, n);
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
                                              let r = nM(e, t, [n]);
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
                                              return (0, n_.Ol)(t, n, l);
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
                    F({ question: Y, draft: ea, selected: eu, ownImage: ed, ownSelected: em, direction: t, moves: n }),
                    U(!0),
                    L(e));
            },
            [ea, ed, em, Y, eu],
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
                let t = nT(l, e, Z);
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
        eC = i.useCallback(() => {
            X || 0 === Z || ej(Z - 1, "back");
        }, [X, Z, ej]),
        eA = 0 !== Z || X ? void 0 : d,
        eN = (Z > 0 && !X) || null != eA,
        eI = i.useCallback(
            (e) => {
                b((e) => ({ ...e, [Y.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                es ? X || v((e) => ({ ...e, [Y.id]: t })) : ew(t);
            },
            [X, es, Y.id, ew],
        ),
        eE = i.useCallback(() => {
            (b((e) => ({ ...e, [Y.id]: "" })), ew({ kind: "custom", text: T.intl.string(P.default.zxSq2q) }));
        }, [Y.id, ew]),
        { multiPartFor: e_ } = ec,
        eM = i.useMemo(() => (ei ? n$(Y, eu, ea, e_(Y)) : null), [ea, ei, e_, Y, eu]),
        eR = C[Y.id] ?? lP,
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
                          ...eR.map((t) => (t.name.startsWith(nF[e]) ? t.name : `${nF[e]}${t.name}`)),
                          ...("" === n ? [] : [n]),
                      ].join(", "),
                  })
                : null;
        }, [ea, S, eR, Y.id, Y.input]),
        e$ = i.useCallback(
            (e, t) => {
                (A((t) => ({ ...t, [Y.id]: e })), N((e) => ({ ...e, [Y.id]: t })));
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
                        return { kind: "image", attachment: t.attachment, text: T.intl.string(P.default.wTsP5l) };
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
                        ? n$(Y, [t.optionId], ea)
                        : n$(Y, [], ea, t)
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
                          return null == nT(e, r, n) && "" === nL(e, r) ? null : r;
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
                    (0, e3.vq)(e.target, HTMLTextAreaElement) ||
                    (0, e3.vq)(e.target, HTMLInputElement) ||
                    ((!(0, e3.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && eN
                            ? (e.preventDefault(), (eA ?? eC)())
                            : "ArrowRight" === e.key && eZ && (e.preventDefault(), eJ())));
            },
            [eA, eN, eZ, eC, eJ],
        ),
        e1 =
            es && !0 !== Y.upload
                ? null
                : (0, a.jsxs)("div", {
                      className: lu.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: lu.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(p.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          (0, a.jsx)(e9.y, {
                              value: ea,
                              onChange: (e) => {
                                  let { value: t } = e.currentTarget;
                                  b((e) => ({ ...e, [Y.id]: t }));
                              },
                              onKeyDown: (e) => {
                                  "Enter" !== e.key ||
                                      e.shiftKey ||
                                      e.nativeEvent.isComposing ||
                                      (e.preventDefault(), ez());
                              },
                              placeholder: T.intl.string(nR(Y) ? P.default.yLN1x6 : P.default["tOC+tn"]),
                              "aria-label": T.intl.formatToPlainString(P.default["4JeYPB"], { question: Y.question }),
                              disabled: X,
                              rows: 1,
                              className: lu.Pu,
                              "data-conjure-clarification-other": Y.id,
                          }),
                      ],
                  });
    return (0, a.jsxs)("section", {
        className: u()(lu.$O, { [lu.fI]: eU && !eK, [lu.Oh]: eK }),
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
                className: lu.rf,
                style: null == O ? void 0 : { height: O.heading + O.rows },
                "data-moving": z ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: B,
                        className: lu.wx,
                        children: [
                            (0, a.jsx)(y.E, {
                                ref: H,
                                tag: "span",
                                id: `${Y.id}-label`,
                                variant: "body-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: en ? void 0 : g,
                                className: u()(nw.TK, lu.R_, { [lu.TB]: "exit" === eh, [lu.JU]: "enter" === eh }),
                                children: ef,
                            }),
                            ep || en
                                ? (0, a.jsx)("div", {
                                      className: nw.Q7,
                                      children: (0, a.jsx)(e7.m, {
                                          text: ex,
                                          children: (0, a.jsx)(ts.K, {
                                              icon: en ? nB.ChevronSmallUpIcon : eS.ChevronSmallDownIcon,
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
                                : (0, a.jsx)(tJ.D, {
                                      className: u()(nw.gb, nw.Q7),
                                      onClick: eV,
                                      "aria-label": T.intl.string(P.default.qVXlk0),
                                      "data-conjure-clarification-close": !0,
                                      children: (0, a.jsx)(tH.XSmallIcon, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: lu.Cg,
                        style: null == O ? void 0 : { insetBlockStart: O.heading },
                        children: (0, a.jsxs)("div", {
                            className: lu.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: V,
                                    className: lu.Ge,
                                    role: "group",
                                    "aria-labelledby": `${Y.id}-label`,
                                    "data-direction": $?.direction,
                                    "data-parity": null == $ ? void 0 : $.moves % 2,
                                    children: [
                                        null == eo
                                            ? null
                                            : (0, a.jsx)(y.E, {
                                                  tag: "div",
                                                  variant: "body-xs/normal",
                                                  color: "text-muted",
                                                  className: lu.aK,
                                                  children: eo,
                                              }),
                                        (0, a.jsx)(lM, {
                                            projectId: n,
                                            question: Y,
                                            selected: eu,
                                            disabled: X,
                                            onPick: (e) =>
                                                ei
                                                    ? w((t) => {
                                                          var n, l;
                                                          let r;
                                                          return {
                                                              ...t,
                                                              [Y.id]:
                                                                  ((n = t[Y.id] ?? lR),
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
                                            ? (0, a.jsx)(lx, {
                                                  projectId: n,
                                                  question: Y,
                                                  value: eR,
                                                  disabled: X,
                                                  onChange: e$,
                                                  onFocus: eD,
                                                  onBlur: eq,
                                                  fallback: nP(Y) ? null : e1,
                                              })
                                            : null,
                                        null != eT ? (0, a.jsx)(nQ, { link: eT, disabled: X }) : null,
                                        null != Y.note
                                            ? (0, a.jsx)(y.E, {
                                                  tag: "div",
                                                  variant: "body-xs/normal",
                                                  color: "text-muted",
                                                  className: lu.aK,
                                                  children: Y.note,
                                              })
                                            : null,
                                        nP(Y) ? e1 : null,
                                        !0 === Y.upload
                                            ? (0, a.jsx)("div", {
                                                  className: lu.$0,
                                                  children: (0, a.jsx)(nU.Q, {
                                                      variant: "secondary",
                                                      textVariant: "body-sm/medium",
                                                      text: T.intl.string(P.default.zxSq2q),
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
                                          lT,
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
            Q > 1 || ei || es || null != Y.input || null != d || !0 === Y.optional || nR(Y)
                ? (0, a.jsxs)("div", {
                      className: nw.qr,
                      children: [
                          (0, a.jsx)(y.E, {
                              tag: "span",
                              variant: "body-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  Q > 1
                                      ? T.intl.formatToPlainString(P.default.yzYUjq, { index: Z + 1, total: Q })
                                      : null,
                          }),
                          (0, a.jsxs)("div", {
                              className: nw.zt,
                              children: [
                                  eN
                                      ? (0, a.jsx)(nU.Q, {
                                            variant: "secondary",
                                            textVariant: "body-sm/medium",
                                            text: f ?? T.intl.string(P.default.Pk5lfA),
                                            onClick: eA ?? eC,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  h
                                      ? null
                                      : (0, a.jsx)(m.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: eY
                                                ? (o ?? T.intl.string(T.t.geKm7t))
                                                : T.intl.string(eQ ? P.default.ZcrbKz : P.default.w1nRmT),
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
var l$ = n(71637),
    lD = n(557744),
    lq = n(223347),
    lF = n(27232),
    lO = n(505930),
    lG = n(506774),
    lz = n(385081);
let lU = "conjurePublishRatings",
    lB = "conjurePublishRatingViews",
    lK = [1, 2, 3, 4, 5],
    lH = { 1: P.default.GhbsGA, 2: P.default.cm0nwU, 3: P.default.kGvlh2, 4: P.default.dVBSUg, 5: P.default.DKlgF7 };
function lV(e) {
    return T.intl.string(lH[e]);
}
let lW = new Set(),
    lX = 0;
function lQ() {
    return lG.w.get(lU) ?? {};
}
function lZ(e, t) {
    return lQ()[e]?.[t] ?? null;
}
function lY(e) {
    return (lW.add(e), () => lW.delete(e));
}
function lJ(e) {
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
var l0 = n(693654);
function l1(e) {
    let { dimension: t, value: n, disabled: l, onChange: r } = e,
        s = i.useId(),
        o = i.useId();
    return (0, a.jsxs)("div", {
        className: l0.zm,
        children: [
            (0, a.jsx)(y.E, { id: s, variant: "body-sm/medium", color: "text-default", children: (0, eV.wy)(t) }),
            (0, a.jsx)("div", {
                role: "radiogroup",
                "aria-labelledby": s,
                "aria-required": !0,
                className: l0.uf,
                children: lK.map((e) => {
                    let i = null != n && e <= n,
                        s = i ? lF.StarIcon : lO.StarOutlineIcon;
                    return (0, a.jsxs)(
                        "label",
                        {
                            className: l0.uK,
                            children: [
                                (0, a.jsx)("input", {
                                    type: "radio",
                                    name: o,
                                    value: e,
                                    checked: n === e,
                                    disabled: l,
                                    onChange: () => r(e),
                                    className: l0.hF,
                                    "aria-label": (0, eV.MF)(t, e),
                                }),
                                (0, a.jsx)("span", {
                                    className: u()(l0.d4, { [l0.cO]: i }),
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
function l2(e) {
    let { pending: t } = e,
        n = (0, eV.PM)(t),
        l = i.useId();
    return (0, a.jsx)("section", {
        className: l0.Nr,
        "aria-labelledby": l,
        children: (0, a.jsxs)(nK.B, {
            gap: 12,
            children: [
                (0, a.jsxs)(nK.B, {
                    gap: 4,
                    children: [
                        (0, a.jsx)(b.D, {
                            id: l,
                            variant: "heading-md/semibold",
                            children: T.intl.string(P.default.GVLtfq),
                        }),
                        (0, a.jsx)(y.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: T.intl.string(P.default["Zj4E+A"]),
                        }),
                    ],
                }),
                (0, a.jsxs)(nK.B, {
                    gap: 4,
                    children: [
                        n.dimensions.map((e) =>
                            (0, a.jsx)(
                                l1,
                                {
                                    dimension: e,
                                    value: n.scores[e],
                                    disabled: n.submitting,
                                    onChange: (t) => n.setScore(e, t),
                                },
                                e,
                            ),
                        ),
                        (0, a.jsx)(y.E, {
                            variant: "body-xs/normal",
                            color: "text-muted",
                            children: T.intl.string(P.default.BvaFUc),
                        }),
                    ],
                }),
                (0, a.jsx)(nk.f, {
                    label: T.intl.string(P.default.d28g0o),
                    placeholder: T.intl.string(P.default.EBB7lL),
                    value: n.feedback,
                    onChange: n.setFeedback,
                    rows: 3,
                    maxLength: 2e3,
                    disabled: n.submitting,
                }),
                null != n.error
                    ? (0, a.jsx)(y.E, {
                          variant: "body-sm/normal",
                          color: "text-feedback-critical",
                          role: "alert",
                          children: n.error,
                      })
                    : null,
                (0, a.jsx)(nK.B, {
                    direction: "horizontal",
                    justify: "end",
                    children: (0, a.jsx)(m.$, {
                        variant: "primary",
                        size: "sm",
                        text: T.intl.string(P.default.CYQood),
                        disabled: !n.canSubmit,
                        loading: n.submitting,
                        onClick: n.submit,
                    }),
                }),
            ],
        }),
    });
}
var l3 = n(894443),
    l4 = n(525530),
    l5 = n(564963),
    l7 = n(530557),
    l8 = n(431527),
    l9 = n(628284);
let l6 = new Set(["select", "channel", "role", "user"]);
function re(e, t) {
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
function rt(e, t) {
    let n = e.keys ?? [];
    return n.length > 0 ? n : t.schema.map((e) => e.key);
}
var rn = n(914250),
    rl = n(202723);
function rr(e) {
    let { projectId: t, cardId: l, request: r, status: s, awaiting: o, onDismiss: c } = e,
        d = i.useCallback(() => {
            (0, H.mM)(async () => {
                let { default: e } = await Promise.all([n.e(291953), n.e(197826)]).then(n.bind(n, 644441));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        f = i.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: l7.KeyIcon })), [r.fields]),
        h = (0, l5.bB)(l, s),
        g = u()(rl.Lo, { [rl.jY]: h });
    if ("superseded" === s)
        return (0, a.jsx)(
            "article",
            {
                className: g,
                children: (0, a.jsx)(y.E, {
                    variant: "body-xs/semibold",
                    color: "text-muted",
                    tag: "span",
                    children: T.intl.string(P.default.CTxtdV),
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
                    (0, a.jsx)(y.E, {
                        variant: "body-xs/semibold",
                        color: "text-muted",
                        tag: "span",
                        children: T.intl.string(P.default.HCQvpO),
                    }),
                    (0, a.jsx)(l8.C, { label: T.intl.string(P.default.HCQvpO), size: "xs", items: f }),
                ],
            },
            s,
        );
    if ("pending" === s)
        return (0, a.jsx)(
            "article",
            {
                className: rl.Lo,
                children: (0, a.jsx)(l8.C, { label: T.intl.string(P.default.HCQvpO), size: "xs", items: f }),
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
                        className: rl.$h,
                        children: [
                            (0, a.jsx)("span", {
                                className: rl.c9,
                                "aria-hidden": !0,
                                children: (0, a.jsx)(l9.CircleCheckIcon, {
                                    size: "xs",
                                    color: th.A.colors.ICON_FEEDBACK_POSITIVE,
                                }),
                            }),
                            (0, a.jsx)(y.E, {
                                variant: "body-xs/semibold",
                                color: "text-feedback-positive",
                                tag: "span",
                                children: T.intl.string(P.default.sfp7Up),
                            }),
                        ],
                    }),
                    (0, a.jsx)(y.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: r.fields
                            .map((e) => e.label)
                            .map((e) =>
                                T.intl.formatToPlainString(P.default["Z+FC3j"], {
                                    label: e,
                                    value: T.intl.string(P.default.CJq1rY),
                                }),
                            )
                            .join(" \xb7 "),
                    }),
                ],
            },
            s,
        );
    let p = null != r.note && "" !== r.note ? r.note : T.intl.string(P.default.MPGSHL),
        x = (0, a.jsx)(m.$, { variant: "primary", size: "sm", onClick: d, text: T.intl.string(P.default.EK8tKY) });
    return null != c
        ? (0, a.jsxs)("section", {
              className: u()(nw.nd, rl.fw),
              "aria-label": T.intl.string(P.default.O0QIqj),
              children: [
                  (0, a.jsxs)("div", {
                      className: nw.wx,
                      children: [
                          (0, a.jsx)(l7.KeyIcon, { size: "xs", color: th.A.colors.TEXT_BRAND, "aria-hidden": !0 }),
                          (0, a.jsx)(y.E, {
                              tag: "span",
                              variant: "body-sm/semibold",
                              color: "text-brand",
                              className: nw.TK,
                              children: T.intl.string(P.default.O0QIqj),
                          }),
                          (0, a.jsx)(tJ.D, {
                              className: u()(nw.gb, nw.Q7),
                              onClick: c,
                              "aria-label": T.intl.string(P.default.Hl7rif),
                              children: (0, a.jsx)(tH.XSmallIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                      ],
                  }),
                  (0, a.jsxs)("div", {
                      className: rl.DQ,
                      children: [
                          (0, a.jsx)(rn.A, { text: p, variant: "body-sm/normal", color: "text-default" }),
                          (0, a.jsx)(l8.C, { label: T.intl.string(P.default.HCQvpO), size: "xs", items: f }),
                      ],
                  }),
                  (0, a.jsxs)("div", {
                      className: nw.qr,
                      children: [
                          (0, a.jsx)(y.E, {
                              variant: "body-xs/normal",
                              color: "text-muted",
                              className: rl.xE,
                              children: T.intl.string(P.default["2OdXdn"]),
                          }),
                          (0, a.jsx)("div", { className: nw.zt, children: x }),
                      ],
                  }),
              ],
          })
        : (0, a.jsxs)("article", {
              className: rl.Lo,
              children: [
                  (0, a.jsx)(y.E, {
                      variant: "body-xs/semibold",
                      color: null != o ? "text-brand" : "text-muted",
                      tag: "span",
                      children: T.intl.string(null != o ? P.default.O0QIqj : P.default.HCQvpO),
                  }),
                  (0, a.jsx)(rn.A, { text: p, variant: "body-sm/normal", color: "text-default" }),
                  (0, a.jsx)(l8.C, { label: T.intl.string(P.default.HCQvpO), size: "xs", items: f }),
                  (0, a.jsx)("div", { className: rl.sq, children: x }),
              ],
          });
}
var ra = n(442331),
    ri = n(513425);
let rs = new Set(),
    ro = new Set();
function ru(e) {
    return (
        ro.add(e),
        () => {
            ro.delete(e);
        }
    );
}
function rc() {
    return i.useSyncExternalStore(ru, () => rs);
}
function rd(e) {
    let t = new Set(),
        n = new Set(),
        l = !1,
        r = !1;
    for (let a = e.length - 1; a >= 0; a--) {
        let i = e[a];
        if (null == i || "assistant" !== i.role || null == i.settingsRequest || !(0, tQ.BL)(i)) continue;
        let s = i.settingsRequest.keys ?? [];
        for (let e of ((r || (0 === s.length ? l : s.some((e) => n.has(e)))) && t.add(i.id), s)) n.add(e);
        ((l = !0), (r = r || 0 === s.length));
    }
    return t;
}
function rm(e, t, n) {
    if (!n || null == t) return !1;
    let l = rt(e, t);
    return l.length > 0 && !re({ keys: l }, t);
}
var rf = n(782973),
    rh = n(290713),
    rg = n(411236);
function rp(e) {
    let { projectId: t, request: n, askId: l, onDismiss: r, notifyAgent: s = !0 } = e,
        {
            done: o,
            superseded: d,
            summary: f,
            markSaved: h,
        } = (function (e, t, n) {
            let l = rc(),
                [r, a] = i.useState(!1),
                s = null != n ? l.has(n) : r,
                o = i.useCallback(() => {
                    if (null != n) {
                        if (!rs.has(n)) for (let e of ((rs = new Set([...rs, n])), ro)) e();
                    } else a(!0);
                }, [n]),
                u = (0, c.bG)([ra.A], () => rm(t, ra.A.getSettings(e), s), [e, t, s]);
            return {
                done: u,
                superseded: (0, c.bG)([ri.A], () => null != n && rd(ri.A.getMessages(e)).has(n), [e, n]),
                summary: (0, c.yK)(
                    [ra.A, nN.A],
                    () => {
                        var n;
                        let l = ra.A.getSettings(e);
                        return null == l
                            ? []
                            : ((n = (e) => nN.A.getChannel(e)?.name ?? null),
                              rt(t, l).flatMap((e) => {
                                  let t = l.schema.find((t) => t.key === e);
                                  if (null == t) return [];
                                  let r = "secret" === t.type || l.values[e];
                                  return [
                                      {
                                          key: e,
                                          text: T.intl.formatToPlainString(P.default["Z+FC3j"], {
                                              label: t.label,
                                              value: (function (e, t, n) {
                                                  let l = Array.isArray(t) ? t.map(String) : [String(t)];
                                                  switch (e.type) {
                                                      case "secret":
                                                          return T.intl.string(P.default.CJq1rY);
                                                      case "checkbox":
                                                          return T.intl.string(
                                                              !0 === t ? P.default.nXtpn3 : P.default["0vfaMW"],
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
                                                                      : T.intl.string(P.default.Fw9G9A);
                                                              })
                                                              .join(", ");
                                                      case "game":
                                                          return 0 === l.length
                                                              ? T.intl.string(P.default.nEv677)
                                                              : T.intl.string(P.default.Fw9G9A);
                                                      case "role":
                                                      case "user":
                                                          return T.intl.string(P.default.Fw9G9A);
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
                markSaved: o,
            };
        })(t, n, l),
        g = null == r && o;
    if (d && !g)
        return (0, a.jsx)("article", {
            className: rg.Mk,
            children: (0, a.jsx)(y.E, {
                variant: "body-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: T.intl.string(P.default["+uXDk+"]),
            }),
        });
    if (g)
        return (0, a.jsxs)("article", {
            className: rg.Mk,
            children: [
                (0, a.jsxs)("div", {
                    className: rg.Ol,
                    children: [
                        (0, a.jsx)(l9.CircleCheckIcon, {
                            size: "xs",
                            color: th.A.colors.ICON_FEEDBACK_POSITIVE,
                            "aria-hidden": !0,
                        }),
                        (0, a.jsx)(y.E, {
                            variant: "body-xs/semibold",
                            color: "text-feedback-positive",
                            tag: "span",
                            children: T.intl.string(P.default.AxBLLy),
                        }),
                    ],
                }),
                f.length > 0
                    ? (0, a.jsx)(y.E, {
                          variant: "body-sm/normal",
                          color: "text-default",
                          selectable: !0,
                          children: f.join(" \xb7 "),
                      })
                    : null,
            ],
        });
    let p = n.keys?.length === 1 && n.keys[0] === rf.B,
        x = null != n.note && "" !== n.note ? n.note : p ? null : T.intl.string(P.default.XuOf5s);
    return (0, a.jsx)(rh.A, {
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
            let o = (0, a.jsx)(m.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: l,
                disabled: !n,
                text: T.intl.string(P.default.A7dQd9),
            });
            return null == r
                ? (0, a.jsxs)("form", {
                      className: rg.Mk,
                      onSubmit: s,
                      children: [
                          (0, a.jsx)(y.E, {
                              variant: "body-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: T.intl.string(P.default["jZjP+I"]),
                          }),
                          null != x
                              ? (0, a.jsx)(rn.A, { text: x, variant: "body-sm/normal", color: "text-default" })
                              : null,
                          t,
                          (0, a.jsx)("div", { className: rg.p0, children: o }),
                      ],
                  })
                : (0, a.jsxs)("form", {
                      className: u()(nw.nd, nw.jx),
                      "aria-label": T.intl.string(P.default["jZjP+I"]),
                      onSubmit: s,
                      children: [
                          (0, a.jsxs)("div", {
                              className: nw.wx,
                              children: [
                                  (0, a.jsx)(y.E, {
                                      tag: "span",
                                      variant: "body-sm/medium",
                                      color: "text-subtle",
                                      className: nw.TK,
                                      children: T.intl.string(P.default["jZjP+I"]),
                                  }),
                                  (0, a.jsx)(tJ.D, {
                                      className: u()(nw.gb, nw.Q7),
                                      onClick: r,
                                      "aria-label": T.intl.string(P.default["iq+Pte"]),
                                      children: (0, a.jsx)(tH.XSmallIcon, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: rg.DQ,
                              children: [
                                  null != x
                                      ? (0, a.jsx)(rn.A, { text: x, variant: "body-sm/normal", color: "text-default" })
                                      : null,
                                  t,
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: nw.qr,
                              children: [
                                  (0, a.jsx)(y.E, {
                                      variant: "body-xs/normal",
                                      color: "text-muted",
                                      className: rg.xE,
                                      children: T.intl.string(P.default["1w0jMk"]),
                                  }),
                                  (0, a.jsxs)("div", {
                                      className: nw.zt,
                                      children: [
                                          (0, a.jsx)(m.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              onClick: r,
                                              text: T.intl.string(P.default["9J3OG8"]),
                                          }),
                                          o,
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    });
}
var rx = n(975571),
    rv = n(427123);
let rj = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
var rb = n(874421),
    ry = n(932111),
    rk = n(940874),
    rw = n(404373),
    rC = n(89222);
function rA(e) {
    return "" !== rC.A.getDraft(e).trim();
}
var rS = n(29080);
function rN(e) {
    var t;
    let n,
        l,
        { steps: r, content: a, hasProposal: i, hasLiveClarification: s = !1, hasAttachments: o } = e,
        u = (0, tX.B4)(r),
        c = u.filter((e) => "message" === e.type).at(-1),
        d =
            !i &&
            null != c &&
            ((t = c.content),
            (n = t.trim()),
            (l = a.trim()),
            "" !== n && "" !== l && (n === l || (t.length >= 16e3 && l.startsWith(n))))
                ? c
                : null,
        m = u.filter((e) => e !== d),
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
        })({ hasAttachments: o, showsClosingMessage: h, endsOnStreamedMessage: (0, tX.Lf)(r) }),
    };
}
var rI = n(62617),
    rE = n(182368);
let r_ = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    rM = {
        snail: () => P.default.ABeVsS,
        goat: () => P.default.dhXay8,
        frog: () => P.default.SHeweG,
        bunny: () => P.default.FytFE1,
        cat: () => P.default["5c+sHs"],
        caterpillar: () => P.default["/FYcne"],
        butterfly: () => P.default["Ib/AxK"],
        dog: () => P.default.zDjBR1,
        spider: () => P.default["6sxyrN"],
        bee: () => P.default.cVtefg,
        bot: () => P.default.MjCw0v,
    },
    rR = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, rI.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    className: (0, rI.Z)(),
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
                    o = i.useMemo(
                        () => (0, rI.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    className: (0, rI.Z)(),
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
                    o = i.useMemo(
                        () => (0, rI.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    className: (0, rI.Z)(),
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
                    o = i.useMemo(
                        () => (0, rI.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    className: (0, rI.Z)(),
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
                    o = i.useMemo(
                        () => (0, rI.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    className: (0, rI.Z)(),
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
                    o = i.useMemo(
                        () => (0, rI.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    className: (0, rI.Z)(),
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
                    o = i.useMemo(
                        () => (0, rI.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    className: (0, rI.Z)(),
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
                    o = i.useMemo(
                        () => (0, rI.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    className: (0, rI.Z)(),
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
                    o = i.useMemo(
                        () => (0, rI.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    className: (0, rI.Z)(),
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
                    o = i.useMemo(
                        () => (0, rI.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    className: (0, rI.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        bot: { Illocon: rE.u, tint: "var(--illo-purple-40)" },
    };
function rP(e) {
    return { ...rR[e], name: T.intl.string(rM[e]()) };
}
function rT(e) {
    return r_.includes(e) ? rP(e) : void 0;
}
function rL(e) {
    let t = new Map();
    for (let [n, l] of (function (e) {
        let t = 0,
            n = e[0] ?? "";
        for (let e = 0; e < n.length; e++) t = (31 * t + n.charCodeAt(e)) % r_.length;
        let l = new Map();
        return (
            e.forEach((e, n) => {
                l.set(e, r_[(t + n) % r_.length]);
            }),
            l
        );
    })(e))
        t.set(n, rP(l));
    return t;
}
var r$ = n(615839);
function rD(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : T.intl.string(P.default.KcFvbo);
}
var rq = n(60160),
    rF = n(101147);
function rO(e) {
    let t = (0, tX.SY)(e.steps);
    return null != t ? (0, tX.WQ)(t) : rD(e.task);
}
function rG(e) {
    let t = rL(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? rT(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: rD(e.task),
                      todoId: e.task.todoId,
                      line: rO(e),
                  },
              ];
    });
}
function rz(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: i, connectsDown: s } = e,
        o = n.task,
        u = "running" === o.status,
        c = (0, tX.SY)(n.steps),
        d = u
            ? rO(n)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(rD(e));
                  switch (e.status) {
                      case "failed":
                          return T.intl.formatToPlainString(P.default.YrVgOf, { task: t });
                      case "cancelled":
                          return T.intl.formatToPlainString(P.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.resultText && "" !== e.resultText) return e.resultText;
                          if (null != e.durationMs)
                              return T.intl.formatToPlainString(P.default["++9woZ"], {
                                  task: t,
                                  duration: (0, r$.MB)(e.durationMs),
                              });
                          return T.intl.formatToPlainString(P.default.nmI9Uh, { task: t });
                      default:
                          return T.intl.formatToPlainString(P.default.nmI9Uh, { task: t });
                  }
              })(o),
        m = u ? c : void 0,
        f =
            o.detail.length > 0 ||
            n.steps.some((e) => {
                var t;
                return e !== m || (t = e).detail.length > 0 || t.screenshots.length > 0 || t.attachments.length > 0;
            })
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          n.steps.length > 0
                              ? (0, a.jsx)("ol", {
                                    className: ns.dO,
                                    children: n.steps.map((e) =>
                                        (0, a.jsx)(
                                            rF.A,
                                            { projectId: t, node: e, presentation: "detail", active: u && e === c },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          o.detail.map((e, t) =>
                              (0, a.jsx)(
                                  "div",
                                  {
                                      className: ns.iq,
                                      children: (0, a.jsx)(rq.A, { text: e, variant: "body-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, a.jsx)(t1.A, {
        glyph: (0, a.jsx)(t2.u, {
            asset: (0, a.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: rD(o),
            position: "left",
            children: (0, a.jsx)("span", {
                className: ns.nC,
                children: (0, a.jsx)(l, { size: 24, alt: "", ariaHidden: !0 }),
            }),
        }),
        line: d,
        live: u,
        settled: !u,
        tint: r,
        detail: f,
        connected: !0,
        connectsDown: s,
    });
}
var rU = n(998445),
    rB = n(643210),
    rK = n(648127),
    rH = n(372795),
    rV = n(163897);
let rW = "conjure-browser-viewer";
function rX(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, c.yK)(
            [rB.A],
            () =>
                n.flatMap((e) => {
                    let n = rB.A.getTab(t, e);
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
        className: rV.kR,
        "aria-label": T.intl.string(P.default.Uvkr1G),
        children: l.map((e) =>
            (0, a.jsx)("li", { children: (0, a.jsx)(rQ, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function rQ(e) {
    let { projectId: t, tab: l, sessionIds: r } = e,
        [s, o] = (function () {
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
        c = (0, H.Ry)(rW),
        [d, m] = i.useState(!1),
        f = i.useCallback((e, t) => m(t), []),
        { ended: h } = l,
        g = (0, rK.i)(l.session);
    return (0, a.jsxs)(tJ.D, {
        innerRef: s,
        className: u()(rV.Nr, h && rV.Xj),
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
                    { modalKey: rW },
                )
            );
        },
        "aria-label": T.intl.formatToPlainString(P.default.G3a822, { title: g }),
        children: [
            (0, a.jsxs)("div", {
                className: rV.Gt,
                children: [
                    (0, a.jsx)(rH.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !o || c || h,
                        className: rV.Ji,
                        "aria-label": T.intl.formatToPlainString(P.default.rnwqXb, { name: g }),
                        onStateChange: f,
                    }),
                    d
                        ? null
                        : (0, a.jsx)("div", {
                              className: rV.qf,
                              children: (0, a.jsx)(rU.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    h
                        ? (0, a.jsx)("div", {
                              className: rV.HS,
                              children: (0, a.jsx)(y.E, {
                                  variant: "body-xs/medium",
                                  color: "text-strong",
                                  children: T.intl.string(P.default.ocRH08),
                              }),
                          })
                        : null,
                ],
            }),
            (0, a.jsxs)("span", {
                className: rV.pG,
                children: [
                    (0, a.jsx)("span", { className: u()(rV.W9, h && rV.oM) }),
                    (0, a.jsx)(y.E, {
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
var rZ = n(268409);
let rY = new WeakMap(),
    rJ = new WeakMap();
function r0(e) {
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
        o = (0, c.yK)(
            [ri.A],
            () => {
                if (0 === s.length) return s;
                let e = (function (e) {
                    let t = rY.get(e);
                    if (null != t) return t;
                    let n = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = rJ.get(e);
                            if (null == t) {
                                let n = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) n.push(e);
                                ((t = n), rJ.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            n.set(e, t.steps);
                    return (rY.set(e, n), n);
                })(ri.A.getMessages(t));
                return s.filter((t) => e.get(t) === n);
            },
            [s, t, n],
        );
    return 0 === o.length
        ? null
        : (0, a.jsx)("li", { className: rZ.h, children: (0, a.jsx)(rX, { projectId: t, sessionIds: o }) });
}
var r1 = n(469393);
function r2(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, V.lG)(t.authored_at);
    return (0, a.jsx)(t7, {
        title: T.intl.string(P.default["t+b0rz"]),
        children: (0, a.jsxs)("div", {
            className: r1.r,
            children: [
                (0, a.jsxs)("div", {
                    className: r1.z,
                    children: [
                        (0, a.jsx)(y.E, { variant: "body-md/medium", children: t.subject }),
                        null != l.relative
                            ? (0, a.jsx)(y.E, {
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
                          text: T.intl.string(P.default.H8Jfhu),
                          onClick: n,
                      })
                    : null,
            ],
        }),
    });
}
var r3 = n(493490),
    r4 = n(17742);
let r5 = [];
function r7(e) {
    let t = (0, c.bG)([r3.A], () => (null != e ? r3.A.getCaptures(e) : r5)),
        n = (0, c.bG)([r3.A], () => (null != e ? r3.A.getSelectedCapture(e) : null)),
        [l, r] = i.useState(null),
        a = null != n ? `${n.id}:${n.image_etag}` : null;
    return (
        i.useEffect(() => {
            if (null == e || null == n || null == a) return;
            let t = !1;
            return (
                (async () => {
                    try {
                        let l = await (0, r4._F)(e, n);
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
    r9 = n(463660),
    r6 = n(970211);
function ae(e) {
    let { projectId: t, gameCaptures: n = !1 } = e,
        {
            src: l,
            blurred: r,
            handleError: s,
        } = (function (e, t) {
            let n = (0, c.bG)([r8.A], () => (null != e ? r8.A.getBackground(e) : null)),
                l = n?.imageEtag ?? null,
                [r, a] = i.useState(null),
                [s, o] = i.useState(null),
                [u, d] = i.useState(!1);
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
                                r = await (0, r9.Mg)(e, l);
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
                    f === m && o(m);
                }, [f, m]);
            return { src: null == e || null != n || u ? f : null, blurred: n?.blur !== !1, handleError: h };
        })(t, "/assets/7cec34541705c795.webp"),
        o = r7(n ? t : null);
    return null != o.selected
        ? null != o.src
            ? (0, a.jsx)("img", { className: r6.F1, src: o.src, alt: "", "aria-hidden": !0 })
            : null
        : null == l
          ? null
          : (0, a.jsx)("img", {
                className: u()(r6.LO, { [r6.Ty]: r }),
                src: l,
                alt: "",
                "aria-hidden": !0,
                onError: s,
            });
}
var at = n(155718);
function an(e, t) {
    return e.supported_surfaces?.includes(t) === !0;
}
let al = ["command", "user_command", "message_command", "message"],
    ar = new Set([at.kc.CHAT, at.kc.USER, at.kc.MESSAGE]);
function aa(e) {
    return e.type ?? at.kc.CHAT;
}
function ai(e) {
    return ar.has(aa(e));
}
function as(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function ao(e, t) {
    let n = al.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !as(e)), ...n.filter(as)].slice(0, 3);
    for (let r of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(r) || as(r) || l.push(r);
    }
    return al.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
function au(e, t, n) {
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
    let s = e.commands.filter(ai).map((e) =>
            (function (e, t) {
                let n = e.description?.trim() ?? "",
                    l = "" !== n ? n : t.reply;
                switch (aa(e)) {
                    case at.kc.USER:
                        return { kind: "user_command", user: e.name, bot: l };
                    case at.kc.MESSAGE:
                        return { kind: "message_command", user: e.name, bot: l };
                    default:
                        return { kind: "command", user: `/${e.name}`, bot: l };
                }
            })(e, n),
        ),
        o = "messages" === t ? [] : s.filter(as),
        u = a.length > 0 ? ao([...a, ...o], !0) : ao("both" === t ? [...s, i] : s, !1);
    return u.length > 0 ? u : [r];
}
var ac = n(377941),
    ad = n.n(ac);
function am(e) {
    let t = e.split("_").join(" ").toLowerCase();
    return 0 === t.length ? t : t[0].toUpperCase() + t.slice(1);
}
function af(e) {
    return e.type === at.kc.PRIMARY_ENTRY_POINT
        ? "\u21EA /"
        : e.type === at.kc.USER || e.type === at.kc.MESSAGE
          ? ""
          : "/";
}
let ah = {
        [et.q7.APP_CHANNEL]: P.default["3/aHX6"],
        [et.q7.VOICE_CHANNEL]: P.default["3/aHX6"],
        [et.q7.ACTIVITY]: P.default["3/aHX6"],
        [et.q7.OVERLAY]: P.default["rPpf5/"],
        [et.q7.PROFILE_WIDGET]: null,
        [et.q7.AUTOMOD]: null,
        [et.q7.BOT]: null,
        [et.q7.APPLICATION_COMMANDS]: null,
    },
    ag = [et.q7.ACTIVITY, et.q7.APP_CHANNEL, et.q7.VOICE_CHANNEL, et.q7.OVERLAY];
function ap(e) {
    return ag.find((t) => an(e, t)) ?? null;
}
let ax = 1920 / 1018;
function av(e, t) {
    return `${Number(((e / t) * 100).toFixed(3))}%`;
}
let aj = av(24, 1018),
    ab = av(24, 1920);
function ay(e) {
    return null != e.overlay_design_image
        ? e.overlay_design_image
        : e.design_image?.name === "overlay-design-v2.png"
          ? e.design_image
          : null;
}
var ak = n(90947),
    aw = (((l = {}).IMAGE = "image"), l),
    aC = (((r = {}).PRIVATE = "private"), (r.PUBLIC = "public"), r),
    aA = n(598748),
    aS = n(773669);
let aN = [],
    aI = {},
    aE = {};
function a_(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function aM(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: aw.IMAGE,
        visibility: aC.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var aR = n(127258),
    aP = n(803306),
    aT = n(587895),
    aL = n(432005),
    a$ = n(963852),
    aD = n(95701),
    aq = n(619019),
    aF = n(427262);
let aO = new aD.nA({ id: "1337", guild_id: "1337", type: ej.rbe.GUILD_TEXT, name: "preview" });
function aG(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = (0, c.bG)([nE.default], () => nE.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            r && a?.username !== t && (0, aP.nj)(new aq.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, a, e, t, l, n]),
        a
    );
}
let az = /^@\S+/;
var aU = n(775602);
let aB = [P.default["3eTjcV"], P.default.l3j5nS];
var aK = n(97808),
    aH = n(778712),
    aV = n(486020),
    aW = n(46054),
    aX = n(200700);
let aQ = {
        alert: { label: () => T.intl.string(P.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => T.intl.string(P.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => T.intl.string(P.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => T.intl.string(P.default.RGzFNK), blockedStyle: !1 },
    },
    aZ = {
        blocked: { label: () => T.intl.string(P.default.YdnZ8q), tone: "red" },
        alert: { label: () => T.intl.string(P.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => T.intl.string(P.default.RGzFNK), tone: "green" },
    },
    aY = ["blocked", "alert", "allowed"],
    aJ = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
function a0(e) {
    var t, n;
    let l,
        r = [
            "timeout" !== (t = e).outcome || null == t.timeout_seconds
                ? null
                : T.intl.formatToPlainString(T.t["3LYql6"], {
                      duration:
                          ((n = t.timeout_seconds),
                          null != (l = (0, aX.getFriendlyDurationString)(n))
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
var a1 = n(984097),
    a2 = n(13673);
let a3 = { blurple: "text-brand", red: "text-feedback-critical", green: "text-feedback-positive" };
function a4(e) {
    let { example: t } = e,
        n = a0(t);
    return null == n
        ? null
        : (0, a.jsx)(y.E, {
              variant: "body-xs/normal",
              color: "text-muted",
              lineClamp: 2,
              selectable: !0,
              children: n,
          });
}
let a5 = ["glazedgamer", "sprinkles", "donutking"];
function a7(e) {
    var t;
    let { example: n, username: l, showReason: r } = e,
        { label: i, blockedStyle: s } = aQ[n.outcome];
    return (0, a.jsxs)("li", {
        className: u()(a1.nM, { [u()(a1.HV, a2.DX)]: s }),
        children: [
            (0, a.jsx)(t3.A, { children: `${i()}: ` }),
            (0, a.jsx)("span", {
                className: a1.my,
                children: (0, a.jsx)(aK.eu, {
                    src: (0, aV.AE)(void 0, void 0),
                    size: aH._3.SIZE_24,
                    "aria-label": T.intl.string(P.default["1yI0xV"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: a1.fw,
                children: [
                    (0, a.jsx)(y.E, { variant: "body-sm/semibold", color: "text-strong", children: l }),
                    (0, a.jsx)(y.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), aW.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    r ? (0, a.jsx)(a4, { example: n }) : null,
                ],
            }),
        ],
    });
}
function a8(e) {
    let { group: t, firstIndex: n } = e,
        l = i.useId(),
        r = aZ[t.section],
        s = new Set(t.examples.map(a0)),
        o = 1 === s.size ? t.examples.map(a0)[0] : null;
    return (0, a.jsxs)("div", {
        className: a1.UO,
        children: [
            (0, a.jsxs)("div", {
                className: a1.RZ,
                children: [
                    (0, a.jsx)(y.E, {
                        id: l,
                        variant: "body-xs/semibold",
                        color: a3[r.tone],
                        tag: "span",
                        children: r.label(),
                    }),
                    null != o
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(y.E, {
                                      variant: "body-xs/semibold",
                                      color: "text-muted",
                                      tag: "span",
                                      className: a1.IQ,
                                      "aria-hidden": !0,
                                      children: "\xb7",
                                  }),
                                  (0, a.jsx)(y.E, {
                                      variant: "body-xs/semibold",
                                      color: "text-muted",
                                      tag: "span",
                                      children: o,
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, a.jsx)("ul", {
                className: a1.m7,
                "aria-labelledby": l,
                children: t.examples.map((e, t) =>
                    (0, a.jsx)(a7, { example: e, username: a5[(n + t) % a5.length], showReason: s.size > 1 }, t),
                ),
            }),
        ],
    });
}
function a9(e) {
    var t;
    let { automod: n } = e,
        l =
            ((t = n.examples),
            aY
                .map((e) => ({ section: e, examples: t.filter((t) => aJ[t.outcome] === e) }))
                .filter((e) => e.examples.length > 0)),
        r = n.rule_name.trim();
    return (0, a.jsxs)("div", {
        className: a1.Nr,
        children: [
            "" !== r
                ? (0, a.jsx)("div", {
                      className: a1.hk,
                      children: (0, a.jsx)(y.E, {
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
var a6 = n(276293),
    ie = n(460905),
    it = n(110384),
    il = n(365199),
    ir = n(633018),
    ia = n(763754),
    ii = n(267508),
    is = n(194085),
    io = n(20851),
    iu = n(692508),
    ic = n(798819);
function id(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, a.jsxs)("div", {
        className: u()(ic.item, ic.labelContainer, ic.colorDefault, {
            [ic.focused]: !0 === t.highlighted,
            [ic.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, a.jsx)("div", {
                      className: ic.iconContainerLeft,
                      children: (0, a.jsx)(n, { color: "currentColor", className: ic.icon }),
                  })
                : null,
            (0, a.jsx)("div", { className: u()(ic.label, iu.Gy), children: t.label }),
            null != l
                ? (0, a.jsx)("div", {
                      className: ic.iconContainer,
                      children: (0, a.jsx)(l, { color: "currentColor", className: ic.icon }),
                  })
                : null,
        ],
    });
}
function im(e) {
    let { target: t, commandName: n, appIconSrc: l } = e,
        r = i.useMemo(
            () =>
                null != l
                    ? (e) => {
                          let { className: t } = e;
                          return (0, a.jsx)("img", { src: l, alt: "", className: u()(t, iu.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: T.intl.string(T.t["5IEsGx"]), icon: it.ArrowAngleLeftUpIcon, muted: !0 }
                : { label: T.intl.string(T.t.LYju5J), muted: !0 };
    return (0, a.jsx)("div", {
        className: u()(ic.menu, iu.MK),
        "aria-hidden": !0,
        children: (0, a.jsxs)("div", {
            className: ic.scroller,
            children: [
                (0, a.jsx)(id, { item: s }),
                (0, a.jsx)("div", { className: ic.separator }),
                (0, a.jsx)(id, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
function ih() {}
function ig(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        d,
        m,
        f,
        h,
        g,
        { projectId: p, exchanges: x } = e,
        {
            items: v,
            botIcon: j,
            appIconSrc: b,
        } = ((t = (0, c.bG)([nE.default], () => nE.default.getCurrentUser())),
        (n = (0, c.bG)([eP.Ay], () => eP.Ay.getProject(p))),
        (l = n?.preview_application_id ?? n?.application_id),
        (r = (0, c.bG)([aT.A], () => aT.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (s = n?.name ?? T.intl.string(P.default.JEYq8M)),
        (o = (0, c.bG)([nE.default], () => (null != l ? nE.default.getUser(l) : void 0), [l])),
        (m = aG("31337", s, { bot: !0, enabled: !(d = o?.bot === !0) })),
        (f = d ? o : m),
        (h = aG("31338", T.intl.string(P.default["9iAOsw"]), { discriminator: "0003" })),
        (g = aG("31339", (0, aF.mG)(t) ?? "", { enabled: null != t })),
        {
            items: i.useMemo(
                () =>
                    null == t || null == g || null == f || null == h
                        ? []
                        : (function (e, t, n) {
                              var l, r, a;
                              let { bot: i, currentUser: s, viewer: o, member: u } = t,
                                  c = [];
                              function d(e, t) {
                                  let {
                                          interactionName: n,
                                          messageType: l,
                                          menu: r,
                                      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                      a = String(c.length + 1),
                                      i = (0, aL.rh)({
                                          ...(0, a$.Ay)({
                                              channelId: aO.id,
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
                                                        type: aR.G.APPLICATION_COMMAND,
                                                        user: (0, a$.Vi)(s),
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
                                          (d(e ? n.memberMessage : n.targetMessage, e ? u : s, {
                                              menu: { target: e ? "user" : "message", commandName: t.user },
                                          }),
                                              d(t.bot, i, {
                                                  interactionName: t.user,
                                                  messageType: ej.lAJ.CONTEXT_MENU_COMMAND,
                                              }));
                                          break;
                                      }
                                      case "message":
                                          (d(((l = t.user), l.trim().replace(az, `<@${i.id}>`)), s),
                                              d(((r = t.bot), r.includes("<@") ? r : `<@${o.id}> ${r}`), i));
                                          break;
                                      case "event":
                                          d(((a = t.bot), a.split(`@${u.username}`).join(`<@${u.id}>`)), i);
                                  }
                              return c;
                          })(
                              x,
                              { bot: f, currentUser: t, viewer: g, member: h },
                              {
                                  targetMessage: T.intl.string(P.default["y+QYes"]),
                                  memberMessage: T.intl.string(P.default.BUTRDc),
                              },
                          ),
                [x, f, t, g, h],
            ),
            botIcon: r,
            appIconSrc: r ?? f?.getAvatarURL(void 0, 80),
        });
    if (0 === v.length) return null;
    let k = aO.name;
    return (0, a.jsxs)("div", {
        className: iu.Ix,
        children: [
            (0, a.jsxs)("div", {
                className: iu.ZO,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(a6.TextIcon, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(y.E, { variant: "body-sm/semibold", color: "text-strong", tag: "span", children: k }),
                ],
            }),
            (0, a.jsx)("ol", {
                className: u()(iu.TE, "group-spacing-16"),
                children: v.map((e) => {
                    let { key: t, record: n, isCommandReply: l, menu: r } = e;
                    return (0, a.jsxs)(
                        "li",
                        {
                            className: null != r ? iu.Rz : void 0,
                            children: [
                                (0, a.jsx)(io.A, {
                                    message: n,
                                    channel: aO,
                                    author: (0, ia.FT)(n.author, aO),
                                    isGroupStart: !0,
                                    avatarOverride: n.author.bot ? (j ?? void 0) : void 0,
                                    childrenExecutedCommand: l ? (0, a.jsx)(ii.A, { message: n, channel: aO }) : void 0,
                                    usernameClassName: r?.target === "user" ? iu.Ct : void 0,
                                    disableInteraction: !0,
                                }),
                                r?.target === "message"
                                    ? (0, a.jsx)("div", {
                                          className: iu.S3,
                                          inert: !0,
                                          "aria-hidden": !0,
                                          children: (0, a.jsxs)(is.Ay, {
                                              children: [
                                                  (0, a.jsx)(is.qv, {
                                                      label: T.intl.string(T.t.lfIHs4),
                                                      icon: ie.ReactionIcon,
                                                      onClick: ih,
                                                  }),
                                                  (0, a.jsx)(is.qv, {
                                                      label: T.intl.string(T.t["5IEsGx"]),
                                                      icon: it.ArrowAngleLeftUpIcon,
                                                      onClick: ih,
                                                  }),
                                                  (0, a.jsx)(is.qv, {
                                                      label: T.intl.string(T.t["UKOtz+"]),
                                                      icon: il.MoreHorizontalIcon,
                                                      selected: !0,
                                                      onClick: ih,
                                                  }),
                                              ],
                                          }),
                                      })
                                    : null,
                                null != r
                                    ? (0, a.jsx)("div", {
                                          className: "user" === r.target ? iu.ET : iu.je,
                                          inert: !0,
                                          children: (0, a.jsx)(im, {
                                              target: r.target,
                                              commandName: r.commandName,
                                              appIconSrc: b,
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
                className: iu.DA,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(ir.SlashBoxIcon, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(y.E, {
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
var ip = n(332173);
function ix(e) {
    let { name: t } = e;
    return (0, a.jsxs)(ip.A, { children: ["/", t] });
}
function iv(e) {
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
                        let t = [...e].sort((e, t) => t.length - e.length).map(ad());
                        return RegExp(`(^|[\\s("'\u{201C}\u{2018}])/(${t.join("|")})(?![\\w-])`, "gu");
                    })(n),
                [n],
            ),
        );
    return null == l ? t : l.map((e) => ("command" === e.kind ? (0, a.jsx)(ix, { name: e.name }, e.start) : e.text));
}
n(827669);
var ij = n(687966),
    ib = n(757789),
    iy = n(26137),
    ik = n(430392),
    iw = n(231483),
    iC = n(323384);
let iA = { frame: P.default.Z2bt4u, bot: P.default.EbvC13, commands: P.default.EbvC13, automod: P.default.tiMvei },
    iS = {
        user_widget: { server: P.default.VlI3et, personal: P.default.njJ4YL },
        overlay_widget: { server: P.default.nUcjJ1, personal: P.default.RDpKqP },
    };
function iN(e) {
    return "frame" === e.kind && !0 !== e.game;
}
var iI = n(573634);
let iE = {
    frame: ij.GameControllerIcon,
    overlay_widget: ib.WindowTopIcon,
    user_widget: iy.UserCircleIcon,
    bot: ik.RobotIcon,
    commands: ik.RobotIcon,
    automod: iw.ShieldIcon,
};
function i_(e) {
    let { caption: t, children: n, className: l } = e;
    return (0, a.jsxs)("div", {
        className: u()(iI.e7, l),
        children: [(0, a.jsx)(y.E, { variant: "body-sm/normal", color: "text-muted", children: t }), n],
    });
}
function iM(e) {
    let { labels: t } = e;
    return (0, a.jsx)("ul", {
        className: iI.Ip,
        children: t.map((e) =>
            (0, a.jsx)(
                "li",
                {
                    className: iI.jw,
                    children: (0, a.jsx)(y.E, {
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
function iR(e) {
    let { name: t, description: n } = e;
    return (0, a.jsxs)("li", {
        className: iI.lj,
        children: [
            (0, a.jsx)("span", {
                className: u()(iI.Vo, iI.G),
                children: (0, a.jsx)(iC.AppsIcon, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
            }),
            (0, a.jsxs)("div", {
                className: iI.aV,
                children: [
                    (0, a.jsx)(y.E, { variant: "body-md/normal", color: "text-default", lineClamp: 1, children: t }),
                    (0, a.jsx)(y.E, { variant: "body-sm/normal", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
}
function iP(e) {
    let { commands: t } = e;
    return (0, a.jsx)("ul", {
        className: iI.wZ,
        children: t.map((e, t) => {
            let n = af(e),
                l = e.description?.trim() ?? "";
            return (0, a.jsx)(
                "li",
                {
                    children: (0, a.jsxs)(y.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        selectable: !0,
                        children: [
                            "/" === n
                                ? (0, a.jsx)(ix, { name: e.name })
                                : (0, a.jsx)(ip.A, { children: `${n}${e.name}` }),
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
        className: iI.p_,
        children: t.map((e, t) =>
            (0, a.jsx)(
                "li",
                {
                    className: iI.Aw,
                    children: (0, a.jsx)(y.E, {
                        variant: "body-md/normal",
                        color: "text-default",
                        tag: "span",
                        selectable: !0,
                        children: (0, a.jsx)(iv, { text: e, commandNames: n }),
                    }),
                },
                t,
            ),
        ),
    });
}
function iL(e) {
    let { experience: t, inServer: n, bullets: l, preview: r, blocks: i, commandNames: s } = e,
        o = iN(t) ? iC.AppsIcon : iE[t.kind],
        u = (function (e, t) {
            if (iN(e)) return T.intl.string(P.default.BM4Ymz);
            if ("user_widget" === e.kind || "overlay_widget" === e.kind) {
                let n = iS[e.kind];
                return T.intl.string(t ? n.server : n.personal);
            }
            return T.intl.string(iA[e.kind]);
        })(t, n),
        c = n && t.kind in iS ? T.intl.string(P.default.UXJCSG) : null;
    return (0, a.jsxs)("section", {
        className: iI.s9,
        "aria-label": u,
        children: [
            (0, a.jsxs)("div", {
                className: iI.JQ,
                children: [
                    (0, a.jsx)("span", {
                        className: iI.Vo,
                        children: (0, a.jsx)(o, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    (0, a.jsx)(y.E, { variant: "body-md/medium", color: "text-strong", tag: "span", children: u }),
                ],
            }),
            null != c ? (0, a.jsx)(y.E, { variant: "body-sm/normal", color: "text-muted", children: c }) : null,
            null != r ? (0, a.jsx)("div", { className: iI.VH, children: r }) : null,
            "automod" === t.kind && 1 === l.length
                ? (0, a.jsx)(y.E, {
                      variant: "body-md/normal",
                      color: "text-default",
                      selectable: !0,
                      children: (0, a.jsx)(iv, { text: l[0], commandNames: s }),
                  })
                : l.length > 0
                  ? (0, a.jsx)(iT, { bullets: l, commandNames: s })
                  : null,
            i.length > 0 ? (0, a.jsx)("div", { className: iI.PG, children: i }) : null,
        ],
    });
}
function i$(e) {
    var t;
    let n,
        l,
        r,
        { appName: s, inServer: o, intro: u, proposal: c, renderPreview: d, commandNames: m } = e,
        f =
            ((t = c.experiences ?? []),
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
                                let n = t.map(ad()).join("|");
                                return RegExp(`(?<![\\p{L}\\p{N}/.:])/(?:${n})(?![\\p{L}\\p{N}_-])`, "iu").test(e);
                            })(e, m),
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
        h =
            ((r =
                f.find((e) => {
                    let { experience: t } = e;
                    return "bot" === t.kind || "commands" === t.kind;
                }) ?? f[0]),
            r?.experience.id);
    return (0, a.jsxs)("div", {
        className: iI.aN,
        children: [
            (0, a.jsxs)("div", {
                className: iI.Lv,
                children: [(0, a.jsx)(b.D, { variant: "heading-lg/semibold", color: "text-strong", children: s }), u],
            }),
            f.map((e) => {
                let { experience: t, bullets: n } = e;
                return (0, a.jsxs)(
                    i.Fragment,
                    {
                        children: [
                            (0, a.jsx)("div", { className: iI.yF, role: "separator" }),
                            (0, a.jsx)(iL, {
                                experience: t,
                                inServer: o,
                                bullets: n,
                                preview: d(t),
                                blocks: (function (e, t, n) {
                                    let l = n
                                        ? [
                                              {
                                                  key: "permissions",
                                                  caption: P.default["2UbW6r"],
                                                  names: e.bot_permissions,
                                              },
                                              {
                                                  key: "intents",
                                                  caption: P.default["7TKfpj"],
                                                  names: e.privileged_intents,
                                              },
                                          ]
                                              .flatMap((e) => {
                                                  let { key: t, caption: n, names: l } = e;
                                                  return null != l && l.length > 0
                                                      ? [{ key: t, caption: T.intl.string(n), labels: l.map(am) }]
                                                      : [];
                                              })
                                              .map((e) => {
                                                  let { key: t, caption: n, labels: l } = e;
                                                  return (0, a.jsx)(
                                                      i_,
                                                      { caption: n, children: (0, a.jsx)(iM, { labels: l }) },
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
                                                        let n = T.intl.string(P.default["6/3tGY"]),
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
                                                                i_,
                                                                {
                                                                    className: iI.Iw,
                                                                    caption: T.intl.formatToPlainString(
                                                                        P.default.w8F5sy,
                                                                        { count: n.channels.length },
                                                                    ),
                                                                    children: (0, a.jsx)("ul", {
                                                                        className: iI.wZ,
                                                                        "data-conjure-plan-channels": "",
                                                                        children: n.channels.map((e) => {
                                                                            let { name: t, description: n } = e;
                                                                            return (0, a.jsx)(
                                                                                iR,
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
                                                            ? [T.intl.string(P.default["4oGg2h"])]
                                                            : []),
                                                        ...(n.launchableAnywhere
                                                            ? [T.intl.string(P.default.BTGCfR)]
                                                            : []),
                                                    ];
                                                    return (
                                                        r.length > 0 &&
                                                            l.push(
                                                                (0, a.jsx)(
                                                                    i_,
                                                                    {
                                                                        caption: T.intl.string(P.default.MY6UGJ),
                                                                        children: (0, a.jsx)(iM, { labels: r }),
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
                                                              i_,
                                                              {
                                                                  caption: T.intl.string(T.t["0hKkS+"]),
                                                                  children: (0, a.jsx)(iP, { commands: e.commands }),
                                                              },
                                                              "commands",
                                                          ),
                                                      ]),
                                                ...l,
                                            ];
                                        default:
                                            return l;
                                    }
                                })(c, t, t.id === h),
                                commandNames: m,
                            }),
                        ],
                    },
                    t.id,
                );
            }),
        ],
    });
}
var iD = n(633075),
    iq = n(591410),
    iF = n(27399);
function iO(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, c.bG)([nE.default], () => nE.default.getCurrentUser()),
        r = i.useMemo(() => new iD.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, a.jsx)("div", {
              className: iF.H,
              children: (0, a.jsx)(iq.A, {
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
var iG = n(443863);
function iz(e) {
    let t,
        { projectId: n, src: l, alt: r, size: i, onError: s } = e,
        o =
            ((t = Math.min(1, 1872 / i.width, 970 / i.height)),
            { width: av(i.width * t, 1920), height: av(i.height * t, 1018) });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(ae, { projectId: n }),
            (0, a.jsx)("div", {
                className: iG.nk,
                style: {
                    "--custom-conjure-plan-overlay-widget-top": aj,
                    "--custom-conjure-plan-overlay-widget-end": ab,
                    "--custom-conjure-plan-overlay-widget-width": o.width,
                    "--custom-conjure-plan-overlay-widget-height": o.height,
                },
                children: (0, a.jsx)("img", { src: l, alt: r, className: iG.M7, onError: s }),
            }),
        ],
    });
}
function iU(e, t, n) {
    Promise.all(
        t.map((t) => {
            let { id: n } = t;
            return (0, e5.PK)(e, n);
        }),
    ).then(
        (e) => {
            (0, lw.R)({
                items: e.map((e, n) => ({ type: "IMAGE", url: e, alt: t[n].alt })),
                startingIndex: n,
                shouldHideMediaOptions: !0,
                location: "ConjureChat",
            });
        },
        () => {},
    );
}
function iB(e) {
    let { projectId: t, design: n, alt: l } = e,
        { id: r } = n,
        { src: i, gone: s, handleError: o } = (0, lC._)(t, r);
    return s
        ? null
        : (0, a.jsx)(tJ.D, {
              className: iG.xX,
              onClick: () => iU(t, [{ id: r, alt: l }], 0),
              "aria-label": T.intl.string(P.default.TvAPIm),
              children: null == i ? null : (0, a.jsx)("img", { src: i, alt: l, className: iG.sN, onError: o }),
          });
}
function iK(e) {
    let { projectId: t, design: n, size: l } = e,
        { id: r } = n,
        { src: s, gone: o, handleError: d } = (0, lC._)(t, r),
        [m, f] = i.useState(!1),
        [h, g] = i.useState(!1),
        {
            slide: p,
            labels: x,
            pick: v,
        } = (function (e) {
            let { ready: t, paused: n = !1 } = e,
                l = (0, c.bG)([aU.Ay], () => aU.Ay.useReducedMotion),
                [r, a] = i.useState(0),
                [s, o] = i.useState(!1),
                u = t && !l && !n && !s,
                d = l && !s ? 0 : r;
            i.useEffect(() => {
                if (!u) return;
                let e = setInterval(() => a((e) => (e + 1) % aB.length), 4e3);
                return () => clearInterval(e);
            }, [u]);
            let m = i.useCallback((e) => {
                    (o(!0), a(e));
                }, []),
                f = i.useCallback(() => m(d), [m, d]);
            return { slide: d, labels: aB.map((e) => T.intl.string(e)), pick: m, hold: f };
        })({ ready: null != s, paused: m || h });
    if (o) return null;
    let j = T.intl.string(P.default.mjryK4),
        b = T.intl.string(P.default["rPpf5/"]);
    return (0, a.jsxs)("div", {
        className: iG.RM,
        onMouseEnter: () => f(!0),
        onMouseLeave: () => f(!1),
        onFocus: () => g(!0),
        onBlur: (e) => {
            e.currentTarget.contains(e.relatedTarget) || g(!1);
        },
        children: [
            (0, a.jsx)(tJ.D, {
                className: u()(iG.xX, iG.nj, { [iG.qQ]: 0 === p }),
                style: { "--custom-conjure-plan-overlay-scene-aspect": String(ax) },
                onClick: () => iU(t, [{ id: r, alt: j }], 0),
                "aria-label": T.intl.string(P.default.TvAPIm),
                children:
                    null == s
                        ? null
                        : 0 === p
                          ? (0, a.jsx)("img", { src: s, alt: j, className: iG.Ac, onError: d })
                          : (0, a.jsx)(iz, { projectId: t, src: s, alt: b, size: l, onError: d }),
            }),
            (0, a.jsx)("div", {
                className: iG._4,
                role: "group",
                "aria-label": T.intl.string(P.default.EH36X6),
                children: x.map((e, t) =>
                    (0, a.jsx)(
                        tJ.D,
                        {
                            className: u()(iG.c, { [iG.Cw]: p === t }),
                            "aria-pressed": p === t,
                            onClick: () => v(t),
                            children: (0, a.jsx)(y.E, {
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
function iH(e) {
    let { projectId: t, id: n, alt: l, onOpen: r } = e,
        { src: i, gone: s, handleError: o } = (0, lC._)(t, n);
    return s
        ? null
        : (0, a.jsx)("li", {
              children: (0, a.jsx)(tJ.D, {
                  className: iG.ir,
                  onClick: r,
                  "aria-label": l,
                  children: null == i ? null : (0, a.jsx)("img", { src: i, alt: "", className: iG.rA, onError: o }),
              }),
          });
}
function iV(e) {
    let { projectId: t, proposal: n } = e,
        l = (n.reference_images ?? []).map((e, t) => {
            let { id: n } = e;
            return { id: n, alt: T.intl.formatToPlainString(P.default.xFgQ8L, { number: t + 1 }) };
        });
    return 0 === l.length
        ? null
        : (0, a.jsx)("section", {
              className: iG.Op,
              children: (0, a.jsxs)("div", {
                  className: iG.uW,
                  children: [
                      (0, a.jsx)(y.E, {
                          variant: "body-xs/medium",
                          color: "text-muted",
                          tag: "span",
                          children: T.intl.string(P.default.ubBJcy),
                      }),
                      (0, a.jsx)("ul", {
                          className: iG.Ft,
                          children: l.map((e, n) => {
                              let { id: r, alt: i } = e;
                              return (0, a.jsx)(iH, { projectId: t, id: r, alt: i, onOpen: () => iU(t, l, n) }, r);
                          }),
                      }),
                  ],
              }),
          });
}
function iW(e) {
    var t;
    let n,
        l,
        r,
        s,
        o,
        u,
        d,
        f,
        h,
        g,
        { projectId: p, proposal: x, version: v, onApprove: j } = e,
        { botExchanges: b } =
            ((n = an(x, et.q7.APPLICATION_COMMANDS)),
            (l =
                an(x, et.q7.BOT) || n
                    ? null != x.bot
                        ? x.bot.interaction
                        : n && x.commands.some(ai)
                          ? "commands"
                          : null
                    : null),
            (r = i.useMemo(
                () =>
                    null == l
                        ? []
                        : au(x, l, {
                              message: T.intl.string(P.default.J7qggf),
                              reply: T.intl.string(P.default.nqYtiy),
                              event: T.intl.string(P.default["05lU9W"]),
                          }),
                [x, l],
            )),
            { botInteraction: l, botExchanges: r }),
        k = (function (e, t) {
            let { widget_config: n, widget_preview: l = aE } = t,
                r = (0, c.bG)([aS.default], () => aS.default.locale),
                a = (0, c.bG)([eP.Ay], () => {
                    let t = eP.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [n, l] = i.useState(aI);
                    return (
                        i.useEffect(() => {
                            let n = Object.entries(t ?? {});
                            if (0 === n.length) return;
                            let r = !1;
                            return (
                                Promise.all(
                                    n.map((t) => {
                                        let [n, l] = t;
                                        return (0, e5.PK)(e, l.id).then(
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
                o = i.useMemo(
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
                                                          ...a_(n),
                                                          ...(null != n.fallback ? { fallback: a_(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let a = ak.uW.safeParse(r);
                                  if (!a.success) return null;
                                  let i = a.data;
                                  return null == i[aA.m.WIDGET_TOP] || null == i[aA.m.WIDGET_BOTTOM]
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
                                                                    type: ak.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof a
                                                                ? (r[e] = { type: ak.oG.NUMBER, value: a })
                                                                : (r[e] = { type: ak.oG.STRING, value: a });
                                                    return r;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(aM),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: aN,
                                            },
                                        };
                              })(n, l, s, r),
                    [n, l, s, r],
                );
            return i.useMemo(() => (null == a || null == o ? null : { applicationId: a, rendererProps: o }), [a, o]);
        })(p, x),
        w = v?.superseded === !0,
        C = x.what_changed?.trim() ?? "",
        A =
            ((t = x.commands),
            i.useMemo(
                () =>
                    t
                        .filter((e) => "/" === af(e))
                        .map((e) => {
                            let { name: t } = e;
                            return t;
                        }),
                [t],
            )),
        S =
            ((o =
                null == (s = ap(x))
                    ? null
                    : (x.experiences?.find((e) => {
                          let { surfaces: t } = e;
                          return t.includes(s);
                      })?.id ?? null)),
            (d = null != (u = x.design_image) && u.id !== ay(x)?.id ? u : null),
            (f = ay(x)),
            (h =
                x.experiences?.find((e) => {
                    let { kind: t } = e;
                    return "frame" === t;
                })?.id ?? o),
            (g =
                x.experiences?.find((e) => {
                    let { kind: t } = e;
                    return "overlay_widget" === t;
                })?.id ?? o),
            {
                ui: null != d && null != h ? { experienceId: h, design: d } : null,
                overlay:
                    null != f && null != g ? { experienceId: g, design: f, size: el(x.overlay_widget ?? null) } : null,
            }),
        N = i.useMemo(
            () =>
                x.commands.some(ai)
                    ? au({ ...x, bot: void 0 }, "commands", {
                          message: T.intl.string(P.default.J7qggf),
                          reply: T.intl.string(P.default.nqYtiy),
                          event: T.intl.string(P.default["05lU9W"]),
                      })
                    : [],
            [x],
        ),
        I = (0, c.bG)([eP.Ay], () => eP.Ay.getProject(p)?.name, [p]),
        E = (0, c.bG)([eP.Ay], () => eP.Ay.getProject(p)?.install_scope === "guild", [p]),
        _ =
            w && null != v
                ? T.intl.formatToPlainString(P.default.YZ3qJs, { version: v.version })
                : T.intl.string(P.default["3b6e7o"]),
        M = w ? (0, a.jsx)(t9, { children: T.intl.string(P.default.hF2c41) }) : null;
    return (0, a.jsxs)(t6, {
        title: _,
        meta: M,
        superseded: w,
        showLabel: T.intl.string(P.default.yD8EJS),
        hideLabel: T.intl.string(P.default.nSPGNb),
        bodyClassName: iG.rf,
        "data-conjure-plan-card": !0,
        children: [
            (0, a.jsx)("div", {
                className: iG.Qs,
                children: (0, a.jsx)(i$, {
                    appName: I ?? x.experiences?.[0]?.name ?? "",
                    inServer: E,
                    intro: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(y.E, {
                                variant: "body-md/normal",
                                color: "text-default",
                                selectable: !0,
                                children: (0, a.jsx)(iv, { text: x.summary, commandNames: A }),
                            }),
                            (0, a.jsx)(iV, { projectId: p, proposal: x }),
                            "" !== C
                                ? (0, a.jsxs)("section", {
                                      className: iG.uW,
                                      children: [
                                          (0, a.jsx)(y.E, {
                                              variant: "body-xs/medium",
                                              color: "text-muted",
                                              tag: "span",
                                              children: T.intl.string(P.default.iNS4dl),
                                          }),
                                          (0, a.jsx)(y.E, {
                                              variant: "body-md/normal",
                                              color: "text-default",
                                              selectable: !0,
                                              children: (0, a.jsx)(iv, { text: C, commandNames: A }),
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
                                            ? (0, a.jsx)(iB, {
                                                  projectId: p,
                                                  design: S.ui.design,
                                                  alt: T.intl.string(null == (t = ap(x)) ? P.default["3/aHX6"] : ah[t]),
                                              })
                                            : null,
                                    l =
                                        e.id === S.overlay?.experienceId
                                            ? (0, a.jsx)(iK, {
                                                  projectId: p,
                                                  design: S.overlay.design,
                                                  size: S.overlay.size,
                                              })
                                            : null;
                                return null == n && null == l ? null : (0, a.jsxs)(a.Fragment, { children: [n, l] });
                            }
                            case "user_widget":
                                return null != k ? (0, a.jsx)(iO, { ...k }) : null;
                            case "automod":
                                return null != x.automod && x.automod.examples.length > 0
                                    ? (0, a.jsx)(a9, { automod: x.automod })
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
                                        (r = l.some((e) => "command" === e.kind || as(e))),
                                        0 === n.length || r ? l.slice(0, 3) : [...l.slice(0, 2), n[0]]
                                    );
                                })(e, b, N);
                                return t.length > 0 ? (0, a.jsx)(ig, { projectId: p, exchanges: t }) : null;
                            }
                        }
                    },
                    commandNames: A,
                }),
            }),
            null == j || w
                ? null
                : (0, a.jsxs)("div", {
                      className: iG.qr,
                      children: [
                          (0, a.jsx)(m.$, {
                              variant: "primary",
                              size: "sm",
                              text: T.intl.string(P.default["6S+wRM"]),
                              onClick: j,
                          }),
                          (0, a.jsx)(y.E, {
                              variant: "body-sm/normal",
                              color: "text-subtle",
                              tag: "span",
                              children: T.intl.string(P.default.IZoqbR),
                          }),
                      ],
                  }),
        ],
    });
}
var iX = n(289565);
function iQ(e) {
    let { onDismiss: t, children: n } = e;
    return null == t
        ? (0, a.jsx)("div", { className: iX.m, children: n })
        : (0, a.jsxs)("div", {
              className: iX.Z,
              children: [
                  n,
                  (0, a.jsx)(e7.m, {
                      text: T.intl.string(T.t.WAI6xu),
                      asContainer: !0,
                      children: (0, a.jsx)(ts.K, {
                          "aria-label": T.intl.string(T.t.WAI6xu),
                          icon: tH.XSmallIcon,
                          variant: "icon-only",
                          size: "sm",
                          onClick: t,
                      }),
                  }),
              ],
          });
}
function iZ(e, t) {
    return null != t && ("new_ui" === e.reason ? !0 === t.newUiUnpublished : "not_live" === t.publishState);
}
function iY(e, t) {
    return null != e && iZ(t, e.status);
}
let iJ = new WeakMap();
var i0 = n(175841),
    i1 = n(189213);
function i2(e) {
    let { rating: t, ...n } = e,
        {
            text: l,
            setText: r,
            canSend: s,
            send: o,
        } = (function (e) {
            let [t, n] = i.useState("");
            return {
                text: t,
                setText: n,
                canSend: "" !== t.trim(),
                send: () => {
                    let n;
                    "" !== (n = t.trim().slice(0, 256)) && (0, lz.Fz)(e, n);
                },
            };
        })(t),
        u = T.intl.string(P.default.IqkF07);
    return (0, a.jsx)(i1.a, {
        ...n,
        title: u,
        actions: [
            {
                variant: "primary",
                text: T.intl.string(P.default["sr+mUC"]),
                disabled: !s,
                onClick: () => {
                    (o(), n.onClose());
                },
            },
        ],
        children: (0, a.jsx)(nk.f, {
            label: u,
            hideLabel: !0,
            placeholder: T.intl.string(P.default.HMGKAV),
            value: l,
            onChange: r,
            rows: 4,
            maxLength: 256,
            showRemainingCharacterCount: !0,
        }),
    });
}
var i3 = n(54100);
function i4(e) {
    let { rating: t } = e;
    return (0, a.jsxs)("div", {
        className: i3.mo,
        role: "status",
        children: [
            (0, a.jsx)(i0.SparklesIcon, { size: "xs", color: "currentColor", className: i3.dQ, "aria-hidden": !0 }),
            (0, a.jsx)(y.E, {
                variant: "body-xs/medium",
                color: "text-muted",
                children:
                    t <= 2
                        ? T.intl.string(P.default["nIc9/M"])
                        : 3 === t
                          ? T.intl.string(P.default.ausj8U)
                          : T.intl.string(P.default.HilSjw),
            }),
        ],
    });
}
function i5(e) {
    let { projectId: t, turnId: n, cta: l, status: r, placement: s } = e,
        { rating: o, rate: c } = (function (e) {
            let { projectId: t, turnId: n } = e;
            i.useSyncExternalStore(lY, () => lX);
            let { publishReason: l, surface: r, placement: a, publishState: s } = lJ(e);
            return (
                i.useEffect(() => {
                    !(function (e) {
                        if (null != lZ(e.projectId, e.turnId)) return;
                        let t = lG.w.get(lB) ?? {};
                        t[e.projectId]?.[e.turnId] !== !0 &&
                            ((0, lz.rv)(e),
                            lG.w.set(lB, { ...t, [e.projectId]: { ...t[e.projectId], [e.turnId]: !0 } }));
                    })({ projectId: t, turnId: n, publishReason: l, surface: r, placement: a, publishState: s });
                }, [t, n, l, r, a, s]),
                {
                    rating: lZ(t, n),
                    rate(t) {
                        let n = (function (e) {
                            let { rating: t, ...n } = e,
                                { projectId: l, turnId: r } = n;
                            if (null != lZ(l, r)) return null;
                            let a = { ...lJ(n), rating: t };
                            (0, lz.gw)(a);
                            let i = lQ();
                            return (lG.w.set(lU, { ...i, [l]: { ...i[l], [r]: t } }), lX++, lW.forEach((e) => e()), a);
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
        j = i.useRef(!1);
    if (
        (i.useEffect(() => {
            if (!g) return;
            let e = setTimeout(() => p(!1), 420);
            return () => clearTimeout(e);
        }, [g]),
        null != o && !g)
    )
        return (0, a.jsx)(i4, { rating: o });
    let b = null != o,
        k = b ? o : (f ?? d),
        w = b || (null == f && null != d);
    function C(e) {
        if (b) return;
        (m(e), h(null), p(!0));
        let t = c(e);
        null != t && (0, H.qf)((e) => (0, a.jsx)(i2, { ...e, rating: t }));
    }
    return (0, a.jsxs)("div", {
        className: i3.nM,
        onMouseLeave: () => h(null),
        children: [
            (0, a.jsxs)("span", {
                className: i3.WD,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(y.E, {
                        id: v,
                        variant: "body-xs/medium",
                        color: "text-muted",
                        className: u()(i3.Pf, { [i3.KH]: null == k }),
                        children: T.intl.string(P.default.mTV326),
                    }),
                    lK.map((e) =>
                        (0, a.jsx)(
                            y.E,
                            {
                                variant: "body-xs/medium",
                                color: "text-default",
                                className: u()(i3.Pf, { [i3.KH]: k === e }),
                                children: lV(e),
                            },
                            e,
                        ),
                    ),
                ],
            }),
            (0, a.jsx)("div", {
                role: "radiogroup",
                "aria-labelledby": v,
                className: i3.uf,
                children: lK.map((e) => {
                    let t = null != k && e <= k,
                        n = t ? lF.StarIcon : lO.StarOutlineIcon;
                    return (0, a.jsxs)(
                        "label",
                        {
                            className: i3.uK,
                            onMouseEnter: () => {
                                b || h(e);
                            },
                            children: [
                                (0, a.jsx)("input", {
                                    type: "radio",
                                    name: x,
                                    value: e,
                                    checked: !1,
                                    onChange: () => {
                                        j.current ? m(e) : C(e);
                                    },
                                    onKeyDown: (t) => {
                                        ((j.current = t.key.startsWith("Arrow")),
                                            "Enter" === t.key && (t.preventDefault(), C(e)));
                                    },
                                    onKeyUp: () => {
                                        j.current = !1;
                                    },
                                    className: i3.hF,
                                    "aria-label": T.intl.formatToPlainString(P.default.NU7Dex, {
                                        rating: e,
                                        label: lV(e),
                                    }),
                                }),
                                (0, a.jsx)(
                                    "span",
                                    {
                                        className: u()(i3.d4, { [i3.cO]: t, [i3.Ng]: t && w }),
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
function i7(e) {
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
function i8(e) {
    let { projectId: t, turnId: n, cta: l } = e,
        r = (0, eB.Ay)(t),
        i = (0, eV.CF)();
    return null != r && iY(r, l)
        ? (0, a.jsx)(iQ, {
              children: (0, a.jsxs)(nK.B, {
                  gap: 12,
                  align: "start",
                  children: [
                      (0, a.jsx)(i7, { projectId: t, publish: r }),
                      null != r.failure
                          ? (0, a.jsx)(y.E, {
                                variant: "body-sm/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: r.failure,
                            })
                          : null,
                      null == n || i
                          ? null
                          : (0, a.jsx)(i5, {
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
    i6 = n(44255),
    se = n(416473),
    st = n(289830);
function sn(e) {
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
                [s, o] = i.useState(null),
                u = i.useCallback(async () => {
                    (a("sending"), o(null));
                    try {
                        (await (0, se.Du)(e, t.trigger), a("on"));
                    } catch (e) {
                        (o(e instanceof i9.A ? e.message : T.intl.string(P.default.EXceox)), a("error"));
                    }
                }, [e, t.trigger]),
                [d] = i.useState(() => Date.now()),
                m =
                    t.next_run_at > d
                        ? T.intl.formatToPlainString(P.default.orZDqY, { time: (0, i6.TP)(t.next_run_at) })
                        : null;
            return {
                summary: (0, i6.lD)(t.trigger),
                firstPublish: m,
                status: r,
                error: s,
                onTurnOn: l && n && "on" !== r ? u : void 0,
            };
        })(t, n, l);
    return (0, a.jsx)(t7, {
        title: T.intl.string(P.default.ZtfX9V),
        children: (0, a.jsxs)("div", {
            className: st.r,
            children: [
                (0, a.jsxs)("div", {
                    className: st.z,
                    children: [
                        (0, a.jsx)(y.E, { variant: "body-md/medium", children: r.summary }),
                        null != r.firstPublish
                            ? (0, a.jsx)(y.E, {
                                  variant: "body-sm/normal",
                                  color: "text-muted",
                                  children: r.firstPublish,
                              })
                            : null,
                        (0, a.jsx)(y.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: T.intl.string(P.default.cxNHma),
                        }),
                        "on" === r.status
                            ? (0, a.jsx)(y.E, {
                                  variant: "body-sm/normal",
                                  role: "status",
                                  children: T.intl.string(P.default.k4IRsm),
                              })
                            : null,
                        "error" === r.status
                            ? (0, a.jsx)(y.E, {
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
                          text: T.intl.string(P.default.EuhBSG),
                          loading: "sending" === r.status,
                          disabled: "sending" === r.status,
                          onClick: r.onTurnOn,
                      })
                    : null,
            ],
        }),
    });
}
var sl = n(989271);
function sr(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = i.useId(),
        s = null == l;
    return (0, a.jsxs)(tJ.D, {
        className: u()(sl.nM, { [sl.f1]: s, [sl.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": T.intl.formatToPlainString(P.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: sl.jo,
                children: [
                    n
                        ? (0, a.jsx)(f.CheckmarkSmallIcon, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: sl.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(y.E, {
                        tag: "div",
                        variant: "body-md/medium",
                        color: "none",
                        className: sl.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, a.jsx)(y.E, {
                      tag: "div",
                      id: r,
                      variant: "body-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function sa(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, a.jsx)(t7, {
        title: T.intl.string(P.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                sr,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var si = n(313537),
    ss = n(125372);
let so = {
        add_to_server: P.default["7SD3ul"],
        remove_from_server: P.default.j1NMdG,
        change_server: P.default["1E5/ay"],
    },
    su = { add_to_server: P.default["Wy+mGW"], remove_from_server: P.default.wBUA8n, change_server: P.default.MfnSEe };
var sc = n(831913),
    sd = n(618785);
function sm(e) {
    var t;
    let n,
        l,
        r,
        i,
        s,
        o,
        u,
        d,
        f,
        h,
        g,
        p,
        { projectId: x, change: v, current: j, onReply: b } = e,
        {
            project: k,
            action: w,
            done: C,
            note: A,
        } = ((n = (0, c.bG)([eP.Ay], () => eP.Ay.getProject(x), [x])),
        (l = (0, si.fL)(n)),
        (r = n?.install_scope === "guild"),
        (t = "remove_from_server" === v.action ? v.guild_id : l),
        (i = (0, c.bG)([lr.A], () => lr.A.getGuild(t)?.name, [t]) ?? T.intl.string(P.default["6bhivN"])),
        (s = (0, ss.Y)(x).length > 0),
        (o =
            (0, c.bG)(
                [ri.A],
                () =>
                    (function (e, t, n) {
                        let l = e.findIndex((e) => e.serverChange === t);
                        if (-1 === l) return !1;
                        let r = [];
                        for (let t of e.slice(l + 1)) {
                            if (null != t.serverChange) return !1;
                            t.projectEvent?.type === "app_removed" && r.push(t.projectEvent);
                        }
                        if ("add_to_server" === t.action) return 0 === r.length;
                        if ("remove_from_server" === t.action && 0 === r.length) return !0;
                        if (1 !== r.length) return !1;
                        let [a] = r;
                        return "change_server" === t.action
                            ? null != n &&
                                  a.moved_to_guild_id === n &&
                                  (null == t.guild_id || a.guild_id === t.guild_id)
                            : null == a.moved_to_guild_id && a.guild_id === t.guild_id;
                    })(ri.A.getMessages(x), v, l),
                [x, v, l],
            ) &&
            null != n &&
            ("remove_from_server" === v.action ? !r : r)),
        (u = "change_server" !== v.action || null == v.guild_id || l === v.guild_id),
        (d = null != n && ("add_to_server" === v.action ? !r : r) && u && !o),
        (f = null != n && (0, eP.PV)(n)),
        (h = "remove_from_server" !== v.action),
        (g = d && f ? { kind: v.action, label: T.intl.string(so[v.action]), disabled: h && !s } : null),
        (p = null),
        d && !f ? (p = T.intl.string(P.default.Kt9exT)) : g?.disabled === !0 && (p = T.intl.string(P.default.NXvmoQ)),
        { project: n, action: g, done: o ? T.intl.formatToPlainString(su[v.action], { server: i }) : null, note: p }),
        S = v.keep_label,
        N = j && null != w,
        I = N && null != S && null != b,
        E = C ?? (j ? A : null);
    return null != E || N
        ? (0, a.jsxs)(nK.B, {
              gap: 8,
              children: [
                  N
                      ? (0, a.jsxs)(nK.B, {
                            direction: "horizontal",
                            gap: 8,
                            wrap: !0,
                            children: [
                                (0, a.jsx)(m.$, {
                                    variant: "remove_from_server" === w.kind ? "critical-secondary" : "primary",
                                    size: "sm",
                                    text: w.label,
                                    disabled: w.disabled,
                                    onClick: () => {
                                        null != k &&
                                            (w?.kind === "remove_from_server"
                                                ? (0, sc.A)({ project: k })
                                                : (0, sd.A)({ projectId: x }));
                                    },
                                }),
                                I
                                    ? (0, a.jsx)(m.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: S,
                                          onClick: () => b(S),
                                      })
                                    : null,
                            ],
                        })
                      : null,
                  null != E ? (0, a.jsx)(y.E, { variant: "body-sm/normal", color: "text-muted", children: E }) : null,
              ],
          })
        : null;
}
var sf = n(919790),
    sh = n(908492),
    sg = n(971824),
    sp = n(162052),
    sx = n(165648);
function sv(e) {
    let {
            projectId: t,
            steps: n,
            active: l = !1,
            turnActive: r = l,
            checklistSuperseded: s = !1,
            durationMs: o,
            interrupted: u = !1,
            todos: c,
            provisionalTodo: d,
            segment: m,
            hostsChecklist: f = !0,
            reportsDuration: h = !0,
            closed: g = !1,
            segmentDurationMs: p,
        } = e,
        x = i.useMemo(() => (0, tX.Jf)(n, l), [n, l]),
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
    if (u)
        return (0, a.jsx)("ol", {
            className: ns.pj,
            "data-live": !1,
            children: (0, a.jsx)(t1.A, {
                glyph: (0, a.jsx)(rS.StopIcon, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: T.intl.string(P.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = l ? void 0 : (p ?? (h ? (x.turn?.durationMs ?? o) : void 0)),
        b = f ? ((0, tX.lt)(n) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        w = rL(k.map((e) => e.taskId)),
        C = !g && (l || k.some((e) => "running" === e.task.status)),
        A = rG(k);
    return (0, a.jsxs)("ol", {
        className: ns.pj,
        "data-live": C,
        children: [
            (0, a.jsx)(tY.Ay, {
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
                let l = null != e.task.helperMark ? rT(e.task.helperMark) : void 0,
                    r = l ?? w.get(e.taskId);
                return null == r
                    ? null
                    : (0, a.jsx)(
                          rz,
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
            (0, a.jsx)(r0, { projectId: t, steps: n, tree: x, segment: m }),
            y
                ? (0, a.jsx)("li", {
                      className: ns.YO,
                      children: (0, a.jsx)(na, { todos: b, provisional: d, agents: A, live: r, superseded: s }),
                  })
                : null,
        ],
    });
}
function sj(e) {
    let {
            projectId: t,
            steps: n,
            content: l,
            proposal: r,
            planVersion: s,
            ideas: o,
            attachments: c,
            secretRequest: d,
            secretRequestId: m,
            secretRequestAwaiting: f,
            secretRequestStatus: h = "open",
            settingsRequest: g,
            settingsAskId: p,
            publishCta: x,
            turnId: v,
            onPickIdea: j,
            pickedIdeaIds: b,
            onApprovePlan: k,
            sideReply: w = !1,
            sideReplyAcknowledges: C,
            hoistedProse: A = !1,
            hoistedAttachmentsHost: S,
            restoreProposal: N,
            onRestoreProposal: I,
            publishScheduleProposal: E,
            publishScheduleProposalCurrent: _ = !1,
            serverChange: M,
            serverChangeCurrent: R = !1,
            onCardReply: L,
        } = e,
        $ = i.useMemo(
            () => rN({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != c && c.length > 0 }),
            [n, l, r, c],
        ),
        { streamed: D, lastStreamedMessage: q, showsClosingMessage: F, closingContent: O } = $,
        G = (A ? S : void 0) ?? $.attachmentsHost,
        z = F && !A,
        U = null == c ? null : (0, a.jsx)(sf.A, { projectId: t, attachments: c }),
        B = null == U ? null : (0, a.jsx)("div", { className: ns.MT, children: U }),
        K = w
            ? (0, a.jsx)(y.E, {
                  variant: "body-xs/normal",
                  color: "text-muted",
                  children: (function (e) {
                      switch (e) {
                          case "steered":
                              return T.intl.string(P.default.Mv5OmK);
                          case "queued":
                              return T.intl.string(P.default["Po/2mi"]);
                          case "restarting":
                              return T.intl.string(P.default.Vj0woh);
                          default:
                              return T.intl.string(P.default.gY3L8p);
                      }
                  })(C),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: ns.ue,
        children: [
            D.length > 0 && !A
                ? (0, a.jsx)("ol", {
                      className: ns.dO,
                      children: D.filter((e) => "todos" !== e.type).map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: ns.DV,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: sx.PT,
                                          children: (0, sh.U)(e.content, !0, {
                                              allowList: !0,
                                              allowHeading: !0,
                                              allowLinks: !0,
                                          }),
                                      }),
                                      "streamed" === G && e === q ? B : null,
                                  ],
                              },
                              e.key,
                          ),
                      ),
                  })
                : null,
            null != r
                ? (0, a.jsx)(iW, { projectId: t, proposal: r, version: s, onApprove: k })
                : z
                  ? (0, a.jsxs)("div", {
                        className: u()(ns.ky, sp.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: u()(sx.PT, ns.cW),
                                children: (0, sh.U)(O, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === G ? B : null,
                            K,
                        ],
                    })
                  : null,
            null != d
                ? (0, a.jsx)("div", {
                      className: u()(ns.ky, ns.k1, sp.XR, { [sg.O]: null != f && "open" === h }),
                      children: (0, a.jsx)(rr, {
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
                      className: u()(ns.ky, ns.k1, sp.XR),
                      children: (0, a.jsx)(rp, { projectId: t, request: g, askId: p }),
                  })
                : null,
            "standalone" !== G && ("closing" !== G || z) ? null : U,
            null != x ? (0, a.jsx)(i8, { projectId: t, turnId: v ?? null, cta: x }) : null,
            null != o && o.length > 0 ? (0, a.jsx)(sa, { ideas: o, pickedIdeaIds: b, onPick: j }) : null,
            null != N ? (0, a.jsx)(r2, { proposal: N, onRestore: I }) : null,
            null != M ? (0, a.jsx)(sm, { projectId: t, change: M, current: R, onReply: L }) : null,
            null != E ? (0, a.jsx)(sn, { projectId: t, proposal: E, current: _ }) : null,
            z ? null : K,
        ],
    });
}
var sb = n(286251),
    sy = n(146806),
    sk = n(475358),
    sw = n(783977),
    sC = n(559647),
    sA = n(787564),
    sS = n(339200),
    sN = n(234320),
    sI = n(191023),
    sE = n(285796),
    s_ = n(922329),
    sM = n(153171);
function sR(e) {
    let { projectId: t } = e;
    return (0, a.jsx)(s_.p, {
        name: T.intl.string(P.default.xhFsEP),
        thumb: (0, a.jsxs)("span", {
            className: tb.PA,
            "aria-hidden": !0,
            children: [
                (0, a.jsx)(sI.ImageIcon, { size: "sm", color: "currentColor" }),
                (0, a.jsx)("span", {
                    className: tb.OY,
                    children: (0, a.jsx)(p.PencilIcon, {
                        size: "custom",
                        width: 10,
                        height: 10,
                        color: "currentColor",
                    }),
                }),
            ],
        }),
        subText: (0, a.jsx)(y.E, {
            variant: "body-xs/normal",
            color: "text-muted",
            children: T.intl.string(P.default["9y+Dae"]),
        }),
        children: (0, a.jsx)("button", {
            type: "button",
            className: sM.o1,
            onClick: () => (0, E.xU)(t),
            "aria-label": T.intl.string(P.default.N852dj),
            children: (0, a.jsx)(sE.CircleXIcon, { size: "xs", color: "currentColor" }),
        }),
    });
}
function sP(e) {
    let { send: t } = e;
    return (0, a.jsxs)(s_.p, {
        compact: !0,
        name: T.intl.string(P.default.xhFsEP),
        thumbSrc: t.thumbUrl,
        subText:
            "failed" === t.status
                ? (0, a.jsx)(y.E, {
                      variant: "body-xs/normal",
                      color: "text-feedback-critical",
                      children: T.intl.string(P.default["3PeGo2"]),
                  })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(k.y, { type: k.t.SPINNING_CIRCLE_SIMPLE, className: sM.Rk }) : null,
            "failed" === t.status
                ? (0, a.jsx)(nU.Q, {
                      variant: "secondary",
                      textVariant: "body-sm/medium",
                      text: T.intl.string(P.default["WFJ/vb"]),
                      onClick: t.retry,
                  })
                : null,
        ],
    });
}
var sT = n(587157),
    sL = n(347111),
    s$ = n(120234),
    sD = n(901173),
    sq = n(161431),
    sF = n(46653),
    sO = n(695184),
    sG = n(811091),
    sz = n(475458),
    sU = n(957071),
    sB = n(927659),
    sK = n(351906),
    sH = n(407653),
    sV = n(322915);
function sW(e) {
    let { id: t, projectId: n, suggestions: l, selectedIndex: r, onHover: i, onSelect: s } = e,
        o = (0, c.bG)([sK.A], () => sK.A.hidePersonalInformation ?? !1),
        u = `${t}-users`,
        d = `${t}-files`;
    if (0 === l.length) return null;
    let m = l.map((e, t) =>
            "user" === e.kind
                ? (0, a.jsx)(
                      sB.Ay.User,
                      {
                          index: t,
                          user: e.user,
                          nick: null,
                          status: null,
                          hidePersonalInformation: o,
                          selected: t === r,
                          onHover: i,
                          onClick: s,
                      },
                      e.user.id,
                  )
                : (0, a.jsx)(
                      sB.Ay.Generic,
                      {
                          index: t,
                          text: e.file.name,
                          icon: (0, a.jsx)(sH.A, { projectId: n, file: e.file, className: sV.Vk }),
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
    return (0, a.jsx)(sB.Ay, {
        id: t,
        className: sV.nx,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, a.jsxs)("div", {
            id: t,
            role: "listbox",
            "aria-label": T.intl.string(P.default.Vb3sUg),
            children: [
                h.length > 0
                    ? (0, a.jsx)(sX, { titleId: u, title: T.intl.string(P.default.Vb3sUg), children: h })
                    : null,
                g.length > 0
                    ? (0, a.jsx)(sX, { titleId: d, title: T.intl.string(P.default.zA5KLM), children: g })
                    : null,
            ],
        }),
    });
}
function sX(e) {
    let { titleId: t, title: n, children: l } = e;
    return (0, a.jsxs)("div", {
        role: "group",
        "aria-labelledby": t,
        children: [
            (0, a.jsx)(y.E, { id: t, variant: "body-xs/semibold", color: "text-muted", className: sV.Gf, children: n }),
            l,
        ],
    });
}
var sQ = n(719442),
    sZ = n(355622),
    sY = n(408018),
    sJ = n(186306),
    s0 = n(323350),
    s1 = n(35277),
    s2 = n(68059),
    s3 = n(267102),
    s4 = n(259691);
let s5 = (0, aD.createChannelRecord)({ id: "1", type: ej.rbe.DM });
function s7(e) {
    let t = sS.VW.end(e, []);
    return { anchor: t, focus: t };
}
function s8(e) {
    return (0, s0.WO)(sS.VW.richValue(e), { mode: "raw" });
}
function s9(e, t) {
    ((e.children = (0, sY.x7)(t)), (e.selection = s7(e)), e.onChange());
}
function s6(e) {
    let { attributes: t, children: n, element: l } = e;
    if ("hostInlineVoid" !== l.type) return null;
    let r = new RegExp(ry.$c.source).exec(l.raw)?.[1];
    return null == r
        ? null
        : (0, a.jsxs)("span", { ...t, contentEditable: !1, children: [(0, a.jsx)(s4.A, { attachmentId: r }), n] });
}
var oe = n(366811);
function ot(e, t) {
    return e.split("/").some((e, n, l) => e === t && "conjure" === l[n - 1]);
}
function on(e) {
    let t = oe.A.getState().path;
    return ot(window.location.pathname, e) && (null == t || ot(t, e));
}
function ol(e, t) {
    return null != t && (0, e3.vq)(e) && t.contains(e);
}
var or = n(497437),
    oa = n(465410);
let oi = "body-md/normal",
    os = null;
function oo(e) {
    let { text: t, offering: n, typed: l } = e,
        [r, s] = i.useState(t),
        o = i.useRef(null),
        d = i.useRef(null),
        m = i.useRef(0),
        [f, h] = i.useState(0),
        [g, p] = i.useState(0),
        [x, v] = i.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
    (i.useLayoutEffect(() => {
        let e = o.current,
            t = e?.parentElement;
        if (null == e || null == t) return;
        let n = m.current;
        function l() {
            let e = o.current,
                t = e?.parentElement;
            if (null == e || null == t) return;
            let l = d.current;
            if (null == l) return;
            let r = parseFloat(getComputedStyle(t).columnGap),
                a = Number.isNaN(r) ? 0 : r,
                i = e.offsetWidth,
                s = l.offsetWidth + a;
            (p(i + a), h(s));
            let u = s + i,
                c = Math.max(n, l.offsetWidth) + a + i,
                m = 0 === c ? 1 : s / c,
                f = 0 === c ? 1 : u / c;
            v({
                frontFrom: 1e3 * (0, sy._R)(m),
                frontTo: 1e3 * (0, sy._R)(f),
                backFrom: 1e3 * (0, sy.T)(m),
                backTo: 1e3 * (0, sy.T)(f),
            });
        }
        let r = new ResizeObserver(l);
        return (l(), r.observe(e), r.observe(t), null != d.current && r.observe(d.current), () => r.disconnect());
    }, [t]),
        i.useEffect(() => {
            m.current = d.current?.offsetWidth ?? 0;
        }, [t]));
    let [j, b] = i.useState(0),
        [k, w] = i.useState(null),
        C = i.useRef(!1),
        A = i.useCallback(() => {
            (w(C.current ? (n ? "through" : "out") : n ? "in" : null), b((e) => e + 1));
        }, [n]);
    i.useEffect(() => {
        C.current = n;
    }, [n, t]);
    let S = "in" === k ? x.backFrom : x.frontFrom,
        N = "out" === k ? x.frontTo : x.backTo,
        I = (0, c.bG)([aU.Ay], () => aU.Ay.useReducedMotion),
        E = t === T.intl.string(P.default.Zc7gML),
        _ = r === t && E;
    function M(e, t, n) {
        let l = null != n;
        return (0, a.jsx)("span", {
            ref: n,
            className: u()(or.VT, { [or.qk]: l }),
            style: l
                ? {
                      insetInlineStart: f,
                      "--custom-cap-wipe-delay": `${S}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, N - S)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": l && j > 0 && null != k ? j % 2 : void 0,
            "data-wipe-kind": l ? (k ?? void 0) : void 0,
            children: (0, a.jsx)(sk.e, { shortcut: "tab", className: or.xT, keyClassName: e }),
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(sb.o, {
                text: t,
                variant: oi,
                delay: null,
                duration: 1e3,
                trailingWidth: g,
                className: u()(or.xM, { [or.s2]: l }),
                onStart: A,
                onComplete: () => s(t),
            }),
            M(or.IS, n || (!I && "out" === k), o),
            (0, a.jsx)("span", {
                ref: d,
                className: or.QI,
                "aria-hidden": !0,
                children: (0, a.jsx)(y.E, { variant: oi, tag: "span", children: t }),
            }),
            _
                ? (0, a.jsxs)("span", {
                      className: or.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, a.jsx)(y.E, { variant: oi, tag: "span", className: or.xM, children: t }),
                          M(or.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let ou = i.memo(function (e) {
        let {
                projectId: t,
                canSend: n,
                aiPaused: l = !1,
                running: r,
                restoring: s = !1,
                onSend: o,
                onInterrupt: d,
                escapeScopeRef: m,
                onUploadFile: f,
                onApprove: h,
                onImport: g,
                onSendToOtherProjects: p,
                suggestion: x,
                questionOpen: v = !1,
                secretPending: j = !1,
                hasPendingContext: b = !1,
                onDraftHasTextChange: y,
                modelSettings: k,
                onModelSettingsChange: w,
                visible: C = !0,
            } = e,
            A = n && !l,
            S = (function (e) {
                let t = i.useContext(s3.Ay),
                    [n] = i.useState(() => {
                        let n = (0, sQ.ie)();
                        return (
                            (n.children = (0, sY.x7)(e)),
                            (n.selection = s7(n)),
                            (0, s2.a)({
                                editor: n,
                                chatInputType: sZ.oU.GENERIC_RICH_TEXTAREA,
                                channel: s5,
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
                                    for (let [t, l] of sS.VW.nodes(e, { at: [], match: sS.l5.isText }))
                                        for (let e of t.text.matchAll(ry.$c)) {
                                            let t = e.index ?? 0;
                                            n.push({ raw: e[0], path: l, start: t, end: t + e[0].length });
                                        }
                                    (n.length > 0 &&
                                        sJ.o.withMergedEntry(e, () =>
                                            sS.VW.withoutNormalizing(e, () => {
                                                for (let { raw: t, path: l, start: r, end: a } of n.reverse())
                                                    s1.b.textToVoid(
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
            })(rC.A.getDraft(t)),
            [N, I] = i.useState(() => s8(S));
        (0, s$.N$)(N);
        let _ = i.useRef(N),
            [M, R] = i.useState(null),
            L = i.useCallback(() => {
                let e = s8(S);
                (e !== _.current && ((_.current = e), (0, sL.I)(t, e), I(e)),
                    R(
                        (function (e) {
                            let { selection: t } = e;
                            if (null == t || !sS.ZF.isCollapsed(t)) return null;
                            let [n] = sS.VW.node(e, t.anchor.path);
                            return sS.l5.isText(n) ? n.text.slice(0, t.anchor.offset) : null;
                        })(S),
                    ));
            }, [S, t]),
            $ = i.useCallback((e) => s9(S, e), [S]),
            D = "" !== N.trim();
        i.useEffect(() => y?.(D), [D, y]);
        let q = i.useRef(t);
        i.useLayoutEffect(() => {
            q.current !== t && ((q.current = t), s9(S, rC.A.getDraft(t)));
        }, [S, t]);
        let F = (0, c.bG)([aU.Ay], () => aU.Ay.isSubmitButtonEnabled),
            [O, G] = i.useState(!1),
            [U, B] = i.useState(!1);
        (i.useEffect(() => {
            r ? B(!1) : (O && B(!0), G(!1));
        }, [r, O]),
            i.useEffect(() => {
                if (!U) return;
                let e = setTimeout(() => B(!1), od);
                return () => clearTimeout(e);
            }, [U]));
        let {
                drafts: K,
                addFiles: H,
                pasteFiles: V,
                removeDraft: W,
                settled: X,
                takeRefs: Q,
            } = (0, e6.FM)({ projectId: t, surface: "chat", onUploadFile: f }),
            Z = (0, E.fc)(t),
            Y = (0, E.bE)(t),
            J = i.useRef(Y);
        i.useEffect(() => {
            let e = J.current;
            ((J.current = Y), A && null != e && null != Y && Y !== e && sS.VW.focus(S));
        }, [Y, A, S]);
        let ee = "" !== N.trim() || K.length > 0 || b || Z,
            en = A && ee && X,
            [el, er] = i.useState(null);
        i.useEffect(() => {
            if (null == el) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => er(null));
                });
            return () => {
                (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
            };
        }, [el]);
        let ea = (0, sq.rU)(t),
            [ei, es] = i.useState(null),
            [eo, eu] = i.useState(0),
            ec = i.useMemo(() => (null != M && A ? (0, sD.OG)(M, M.length) : null), [M, A]),
            ed = ec?.start ?? null;
        i.useEffect(() => {
            null == ed ? es(null) : (0, sq.IP)(t);
        }, [ed, t]);
        let em = ed === ei ? null : ec,
            ef = (function (e, t) {
                let n = (0, c.bG)([eP.Ay], () => eP.Ay.getProject(e), [e]),
                    { creator: l, collaborators: r } = (0, sz.yv)(n),
                    a = (0, c.bG)([sF.default], () => sF.default.getId()),
                    s = null != n && (0, et.pL)(n) ? n.guild_id : void 0,
                    o = t?.toLowerCase() ?? null;
                return (
                    i.useEffect(() => {
                        null != s && null != o && sO.A.requestMembers(s, o, 100);
                    }, [s, o]),
                    (0, c.yK)(
                        [ll.Ay, lr.A, nE.default],
                        () => {
                            if (null == o) return [];
                            let e = null != s ? lr.A.getGuild(s) : null,
                                t = (t) => (0, sD.mO)(t, o, null != e ? ll.Ay.getNick(e.id, t.id) : null),
                                i = new Set(n?.collaborator_role_ids ?? []),
                                u = null != e && i.has(sG.default.castGuildIdAsEveryoneGuildRoleId(e.id)),
                                c =
                                    null == e
                                        ? []
                                        : ll.Ay.getMemberIds(e.id)
                                              .map((e) => nE.default.getUser(e))
                                              .filter(
                                                  (n) =>
                                                      null != n &&
                                                      t(n) &&
                                                      (u ||
                                                          (ll.Ay.getMember(e.id, n.id)?.roles ?? []).some((e) =>
                                                              i.has(e),
                                                          ) ||
                                                          la.$3({
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
                        [n, s, o, l, r, a],
                    )
                );
            })(t, em?.text ?? null),
            eh = i.useMemo(() => (null == em ? [] : (0, sD.l$)(ef, ea, em.text)), [em, ef, ea]),
            eg = em?.text;
        i.useEffect(() => eu(0), [eg]);
        let ep = eh.length > 0,
            ex = Math.min(eo, Math.max(0, eh.length - 1)),
            ev = i.useId(),
            eb = i.useCallback(
                (e) => {
                    let t = eh[e];
                    null != em &&
                        null != t &&
                        (function (e, t, n) {
                            let { selection: l } = e;
                            if (null == l) return;
                            let { path: r, offset: a } = l.anchor;
                            (s1.b.select(e, { anchor: { path: r, offset: t }, focus: { path: r, offset: a } }),
                                s1.b.insertText(e, `${n} `));
                        })(S, em.start, "user" === t.kind ? `<@${t.user.id}>` : `<file:${t.file.id}>`);
                },
                [eh, em, S],
            ),
            ey = i.useCallback(() => {
                if (!en) return;
                let e = Q(),
                    n = Z
                        ? (function (e) {
                              let t = (0, E.K7)(e);
                              if (null == t || !(0, nd.C)(t)) return null;
                              let n = t.history.present,
                                  l = t.keptStill ?? (0, E.C)(e);
                              return (
                                  (0, E.My)(e),
                                  function (t) {
                                      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                          { nonce: a, messageKey: i } = (0, eG.Wx)(e, t, r),
                                          s = { projectId: e, nonce: a, job: null, thumbUrl: null };
                                      (nm.set(i, s),
                                          (s.job = (0, nd.B)({
                                              capture: (t) => (0 === t ? l : (0, E.C)(e)),
                                              composite: (e) =>
                                                  (async function (e, t) {
                                                      let n = await createImageBitmap(e);
                                                      try {
                                                          let e = { width: n.width, height: n.height },
                                                              l = tD(e),
                                                              r = tD(e);
                                                          if (null == l || null == r) return null;
                                                          return (
                                                              t$(r.ctx, t, e),
                                                              l.ctx.drawImage(n, 0, 0),
                                                              l.ctx.drawImage(r.canvas, 0, 0),
                                                              await l.toBlob()
                                                          );
                                                      } finally {
                                                          n.close();
                                                      }
                                                  })(e, n),
                                              upload: (t) =>
                                                  (0, e5.vX)(e, new File([t], "sketch.webp", { type: t.type })),
                                              isStaged: (t) => (0, e5.n6)(e, t.id),
                                              send: (n) => (0, eG.dv)(e, t, [...r, n], { nonce: a }),
                                              update: (e, t) => {
                                                  (null != t &&
                                                      null == s.thumbUrl &&
                                                      (s.thumbUrl = URL.createObjectURL(t)),
                                                      nh(i, {
                                                          status: e,
                                                          thumbUrl: s.thumbUrl,
                                                          retry: () => s.job?.retry(),
                                                      }),
                                                      "sent" === e &&
                                                          (nm.delete(i),
                                                          window.setTimeout(() => {
                                                              (nh(i, null),
                                                                  null != s.thumbUrl &&
                                                                      URL.revokeObjectURL(s.thumbUrl));
                                                          }, 6e4)));
                                              },
                                          })));
                                  }
                              );
                          })(t)
                        : null;
                o(N, e.length > 0 ? e : void 0, n ?? void 0);
                let l = (function (e, t, n) {
                    let l,
                        r,
                        a = n.split("\n", 1)[0] ?? "";
                    if (null == e || "" === a) return a;
                    null == os && (os = document.createElement("canvas").getContext("2d"));
                    let i = os;
                    if (null == i) return a;
                    let s = getComputedStyle(e);
                    i.font = "" !== s.font ? s.font : `${s.fontWeight} ${s.fontSize} ${s.fontFamily}`;
                    let o =
                        t > 0
                            ? t
                            : ((l = parseFloat(s.paddingInlineStart)),
                              (r = parseFloat(s.paddingInlineEnd)),
                              e.clientWidth - (Number.isNaN(l) ? 0 : l) - (Number.isNaN(r) ? 0 : r));
                    if (o <= 0 || i.measureText(a).width <= o) return a;
                    let u = 0,
                        c = a.length;
                    for (; u < c;) {
                        let e = Math.ceil((u + c) / 2);
                        i.measureText(a.slice(0, e)).width <= o ? (u = e) : (c = e - 1);
                    }
                    let d = a.slice(0, u),
                        m = d.lastIndexOf(" ");
                    return (m > 0 ? d.slice(0, m) : d).trimEnd();
                })(of(eI.current), eq.current, (0, sD.Lj)(N));
                ("" !== l && er(l), $(""), es(null));
            }, [en, Z, t, N, o, Q, $]),
            ek = i.useCallback(
                (e) => {
                    (e.preventDefault(), ey());
                },
                [ey],
            ),
            ew = i.useCallback(() => {
                null != d && !O && (G(!0), d(), A && sS.VW.focus(S));
            }, [d, O, A, S]);
        !(function (e) {
            let { active: t, projectId: n, scopeRef: l, onEscape: r } = e,
                a = i.useRef(r);
            (i.useEffect(() => {
                a.current = r;
            }),
                i.useEffect(() => {
                    if (!t) return;
                    let e = ol(document.activeElement, l?.current);
                    function r(t) {
                        e = ol(t.target, l?.current);
                    }
                    function i(t) {
                        var r, i, s;
                        "Escape" === t.key &&
                            !t.isComposing &&
                            on(n) &&
                            (0, E.K7)(n)?.active !== !0 &&
                            !(0, z._c)(n).active &&
                            ((r = t.target),
                            (i = l?.current),
                            (s = e),
                            ((0, e3.vq)(r) && r !== document.body && r !== document.documentElement
                                ? !!ol(r, i) && null == r.closest('input, textarea, [contenteditable="true"]')
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
        })({ active: r && null != d && C, projectId: t, scopeRef: m, onEscape: ew });
        let eC = (r && null != d) || U,
            eA = null == x || "" !== N || !A || s || b ? null : x,
            eS = i.useCallback(
                (e) => {
                    if (ep && !e.shiftKey && !e.metaKey && !e.ctrlKey && !e.altKey) {
                        let t = eh.length;
                        if ("ArrowDown" === e.key || "ArrowUp" === e.key) {
                            (e.preventDefault(), eu((ex + ("ArrowDown" === e.key ? 1 : t - 1)) % t));
                            return;
                        }
                        if ("Enter" === e.key || "Tab" === e.key) {
                            (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), eb(ex));
                            return;
                        }
                        if ("Escape" === e.key) {
                            (e.preventDefault(), e.stopPropagation(), es(em?.start ?? null));
                            return;
                        }
                    }
                    if ("Escape" === e.key && (0, E.K7)(t)?.active === !0) {
                        (e.preventDefault(), e.stopPropagation(), (0, E.V9)(t));
                        return;
                    }
                    if ("Escape" === e.key && r && null != d && on(t)) {
                        (e.preventDefault(), e.stopPropagation(), ew());
                        return;
                    }
                    if ("Tab" === e.key && !e.shiftKey && null != eA) {
                        (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), $(eA));
                        return;
                    }
                    if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                        null != h && (e.preventDefault(), h());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), ey());
                },
                [ey, h, r, d, ew, eA, $, ep, eh.length, ex, eb, em, t],
            ),
            eN = i.useCallback(
                (e) => {
                    A && V(e);
                },
                [A, V],
            );
        (0, sN.Vo)({
            event: ej.jej.GLOBAL_CLIPBOARD_PASTE,
            handler: (e) => {
                let { event: t } = e;
                return eN(t);
            },
        });
        let eI = i.useRef(null),
            eE = i.useCallback(() => {
                let e = _.current;
                p?.((0, sD.Lj)(e), () => {
                    _.current === e && $("");
                });
            }, [p, $]),
            [e_, eM] = i.useState(0),
            [eR, eT] = i.useState(!1);
        i.useEffect(() => {
            if (0 === N.length) return void eT(!1);
            let e = of(eI.current);
            if (null != e) {
                let t = (function (e) {
                    let t = e.ownerDocument.getSelection(),
                        n = e.closest("form");
                    if (null == n || null == t || 0 === t.rangeCount || !e.contains(t.anchorNode)) return null;
                    let l = t.getRangeAt(0).getBoundingClientRect();
                    return 0 === l.height ? null : l.left - n.getBoundingClientRect().left;
                })(e);
                null != t && eM(t);
            }
            eT(!0);
            let t = setTimeout(() => eT(!1), oc);
            return () => clearTimeout(t);
        }, [N]);
        let eL = i.useMemo(() => ({ "--custom-glow-x": `${e_}px` }), [e_]),
            e$ = eR ? ` ${or.EB}` : "",
            eD = s
                ? T.intl.string(P.default.qqlUiW)
                : l
                  ? T.intl.string(P.default.Z0hyNL)
                  : A
                    ? b
                        ? T.intl.string(P.default.knUjL3)
                        : Z
                          ? T.intl.string(P.default["6rXxwa"])
                          : j
                            ? T.intl.string(P.default.VxH5vv)
                            : v
                              ? T.intl.string(P.default.IevBEw)
                              : T.intl.string(r ? P.default["0BJa/0"] : P.default.TEeU7z)
                    : T.intl.string(P.default.zZ9NgM),
            eq = i.useRef(0),
            eF = i.useRef(null),
            eO = i.useCallback((e) => {
                if ((eF.current?.disconnect(), null == e)) return;
                eq.current = e.clientWidth;
                let t = new ResizeObserver(() => {
                    eq.current = e.clientWidth;
                });
                (t.observe(e), (eF.current = t));
            }, []),
            ez = i.useId(),
            eU = i.useId(),
            eB = null != eA,
            eK = el ?? eA ?? eD,
            eH = "" === N && "" !== eK;
        return (0, a.jsxs)("form", {
            onSubmit: ek,
            className: or.DA,
            children: [
                ep
                    ? (0, a.jsx)(sW, {
                          id: ev,
                          projectId: t,
                          suggestions: eh,
                          selectedIndex: ex,
                          onHover: eu,
                          onSelect: eb,
                      })
                    : null,
                K.length > 0 || Z
                    ? (0, a.jsxs)("div", {
                          className: or.lN,
                          children: [
                              K.map((e) => (0, a.jsx)(e6.Nl, { draft: e, onRemove: W }, e.localId)),
                              Z ? (0, a.jsx)(sR, { projectId: t }) : null,
                          ],
                      })
                    : null,
                (0, a.jsx)("span", { className: `${or.wg} ${or.LP}${e$}`, style: eL, "aria-hidden": !0 }),
                (0, a.jsx)("span", { className: `${or.wg} ${or.L3}${e$}`, style: eL, "aria-hidden": !0 }),
                (0, a.jsxs)("div", {
                    className: or.VA,
                    ref: eI,
                    children: [
                        (0, a.jsx)(sU.A, {
                            navId: "conjure-composer-attach",
                            disabled: !A,
                            buttonClassName: `${or.Y0} ${or.nu}`,
                            iconClassName: or.Qu,
                            onAddFiles: H,
                            onImport: g,
                            onSendToOtherProjects: null != p ? eE : void 0,
                        }),
                        eH
                            ? (0, a.jsx)("div", {
                                  ref: eO,
                                  className: or.ar,
                                  "aria-hidden": "true",
                                  children: (0, a.jsx)(
                                      oo,
                                      { text: eK, offering: eB && null == el, typed: null != el },
                                      C ? "visible" : "hidden",
                                  ),
                              })
                            : null,
                        (0, a.jsx)(t3.A, { id: eU, children: T.intl.string(P.default.ldNl9x) }),
                        (0, a.jsx)(ry.Fu.Provider, {
                            value: t,
                            children: (0, a.jsx)(sA.A, {
                                editor: S,
                                containerClassName: u()(or.sq, oa.dv),
                                className: or.jp,
                                readOnly: !A,
                                canFocus: A,
                                onChange: L,
                                onBlur: () => R(null),
                                onKeyDown: eS,
                                onPaste: eN,
                                renderExtraElement: s6,
                                "aria-labelledby": eU,
                                "aria-describedby": eH ? ez : void 0,
                                "aria-autocomplete": "list",
                                "aria-haspopup": "listbox",
                                "aria-expanded": ep,
                                "aria-controls": ep ? ev : void 0,
                                "aria-activedescendant": ep ? ((0, sB.aI)(ex) ?? void 0) : void 0,
                            }),
                        }),
                        eH ? (0, a.jsx)(t3.A, { id: ez, children: eD }) : null,
                        (0, a.jsx)("div", {
                            className: or.Sz,
                            onMouseDown: eC ? om : void 0,
                            children: eC
                                ? (0, a.jsx)(e7.m, {
                                      text: T.intl.string(P.default.wiguT0),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)("button", {
                                          type: "button",
                                          className: `${or.Y0} ${or.$E} ${or.PG}`,
                                          disabled: O || !r,
                                          onClick: ew,
                                          "aria-label": T.intl.string(P.default.wiguT0),
                                          children: (0, a.jsx)(rS.StopIcon, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : k?.tierSettings != null && null != w
                                  ? (0, a.jsx)(sT.A, {
                                        settings: k.tierSettings,
                                        tiers: k.tiers,
                                        choices: k.choices,
                                        disabled: !A,
                                        onChange: w,
                                        className: `${or.Y0} ${or.$E}`,
                                        icon: (0, a.jsx)(sw.FiltersHorizontalIcon, {
                                            size: "custom",
                                            width: 20,
                                            height: 20,
                                            color: "currentColor",
                                        }),
                                    })
                                  : null,
                        }),
                        F
                            ? (0, a.jsxs)("div", {
                                  className: or.fF,
                                  children: [
                                      (0, a.jsx)("div", { className: or.MT }),
                                      (0, a.jsx)("button", {
                                          type: "submit",
                                          className: or.rt,
                                          disabled: !en,
                                          "aria-label": T.intl.string(P.default.rxW2cl),
                                          children: (0, a.jsx)(sC.SendMessageIcon, {
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
    oc = 1500,
    od = 1e3;
function om(e) {
    e.preventDefault();
}
function of(e) {
    return e?.querySelector("[data-slate-editor]") ?? null;
}
var oh = n(709753),
    og = n(540338);
function op(e) {
    if (e.at(-1)?.role !== "assistant") return null;
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if ("assistant" === n.role) {
            if (!(0, tQ.BL)(n) || "plan_implemented" === n.kind) return null;
            if (null != n.proposal) return n.render_id;
        }
    }
    return null;
}
var ox = n(986109);
let ov = i.createContext(null);
function oj(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: r,
            highlighted: s = !1,
            continuation: o = !1,
            onContextMenu: c,
        } = e,
        d = i.useContext(ov),
        [m, f] = i.useState(() => aU.Ay.useReducedMotion || (null != l && d?.current.has(l) === !0)),
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
        className: u()(ox.xk, { [ox.g5]: m, [ox.Qo]: s, [ox.q3]: o }),
        children: n,
    });
}
let ob = new Map();
function oy(e, t, n) {
    let l = 0;
    for (let r = e.length - 1; r >= 0 && e[r].created_at > t; r--) {
        let t = e[r];
        "user" === t.role && (null == t.user_id || t.user_id === n) && l++;
    }
    return l;
}
let ok = "live_behind",
    ow = "conjureTipDismissals",
    oC = new Set(),
    oA = new Set(),
    oS = 0;
function oN() {
    let e = lG.w.get(ow);
    return { forever: e?.forever ?? [], app: e?.app ?? {}, anchor: e?.anchor ?? {} };
}
function oI(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    switch (e.dismissal) {
        case void 0:
            return !1;
        case "session":
            var l;
            return oC.has(((l = e.id), `${t}:${l}`));
        case "anchor":
            return null != n && oN().anchor[t]?.[e.id] === n;
        case "app":
            return oN().app[t]?.includes(e.id) === !0;
        case "forever":
            return oN().forever.includes(e.id);
    }
}
function oE(e) {
    return (oA.add(e), () => oA.delete(e));
}
function o_(e, t) {
    let n = t?.type === "remixed" ? t.settings_keys : void 0;
    return (0, c.bG)([ra.A], () => null != n && n.length > 0 && re({ keys: n }, ra.A.getSettings(e)), [n, e]) &&
        null != n
        ? { keys: n, note: T.intl.string(P.default.F2yVHg) }
        : null;
}
function oM(e) {
    return (
        null != e.awaitingUser ||
        null != e.secretRequest ||
        null != e.settingsRequest ||
        (e.intake?.questions.length ?? 0) > 0 ||
        null != e.clarification ||
        null != e.appBuildRequest ||
        null != e.restoreProposal ||
        null != e.serverChange ||
        null != e.publishScheduleProposal
    );
}
let oR = [12e4];
var oP = n(292771);
function oT(e) {
    let { presentation: t, render: n } = e,
        l = (0, c.bG)([aU.Ay], () => aU.Ay.useReducedMotion),
        [r, s] = i.useState([{ presentation: t, leaving: !1 }]),
        o = r.find((e) => !e.leaving)?.presentation;
    o !== t &&
        s([
            ...r.filter((e) => e.presentation !== t).map((e) => ({ ...e, leaving: !0 })),
            { presentation: t, leaving: !1 },
        ]);
    let d = i.useRef(null),
        m = i.useRef(null),
        f = i.useRef(null),
        h = i.useRef(o);
    i.useLayoutEffect(() => {
        let e,
            t,
            n = d.current;
        if (null == n) return;
        let r = n.querySelector('[data-tip-layer="active"]'),
            a = r?.querySelector("[data-conjure-tip-icon]"),
            i = m.current,
            s = f.current,
            u = r?.offsetHeight ?? 0,
            c =
                null != a
                    ? ((e = n.getBoundingClientRect()),
                      { left: (t = a.getBoundingClientRect()).left - e.left, top: t.top - e.top, width: t.width })
                    : null;
        ((m.current = c), (f.current = u));
        let g = h.current !== o;
        if (((h.current = o), !g || l || null == s || null == i || null == a || null == c)) return;
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
            n.animate([{ height: `${s}px` }, { height: `${u}px` }], {
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
            className: oP.wg,
            children: r.map((e) =>
                (0, a.jsx)(
                    "div",
                    {
                        "data-tip-layer": e.leaving ? "leaving" : "active",
                        "aria-hidden": e.leaving || void 0,
                        className: u()(oP.qd, e.leaving ? oP.dv : oP.Hu),
                        children: n(e.presentation),
                    },
                    e.presentation,
                ),
            ),
        })
    );
}
function oL(e) {
    return null != e && !e.publishing && "review_permissions" === e.action;
}
var o$ = n(247171);
function oD(e) {
    let { icon: t, tone: n, firstLine: l, className: r, children: i } = e;
    return (0, a.jsxs)("div", {
        className: u()(o$.row, r),
        children: [
            (0, a.jsx)(y.E, {
                tag: "span",
                variant: l,
                color: "none",
                className: u()(o$.gutter, o$[n]),
                "aria-hidden": !0,
                children: (0, a.jsx)(t, { size: "sm", color: "currentColor", "data-conjure-tip-icon": !0 }),
            }),
            (0, a.jsx)("div", { className: o$.content, children: i }),
        ],
    });
}
var oq = n(830205);
function oF(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(oD, {
        icon: t,
        tone: "muted",
        firstLine: "body-sm/normal",
        className: oq.aK,
        children: (0, a.jsxs)("div", {
            className: oq.n8,
            children: [
                (0, a.jsx)(y.E, {
                    tag: "div",
                    variant: "body-sm/normal",
                    color: "text-muted",
                    className: oq.Qq,
                    children: l,
                }),
                null != n
                    ? (0, a.jsx)("div", {
                          className: oq.X8,
                          children: (0, a.jsx)(e7.m, {
                              text: T.intl.string(T.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(ts.K, {
                                  "aria-label": T.intl.string(T.t.WAI6xu),
                                  icon: tH.XSmallIcon,
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
function oO(e) {
    let { projectId: t } = e,
        n = i.useContext(eB.bI);
    return (0, a.jsx)(oF, {
        icon: iw.ShieldIcon,
        children: T.intl.format(P.default["0S9HY8"], {
            onReview: async () => {
                null != n && (await (0, eB.vL)(t, n.guildId));
            },
        }),
    });
}
var oG = n(443865),
    oz = n(716502);
function oU(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(oD, {
        icon: t,
        tone: "brand",
        firstLine: "body-md/semibold",
        className: oz.Nr,
        children: (0, a.jsxs)("section", {
            className: oz.Qs,
            children: [
                l,
                null != n
                    ? (0, a.jsx)("div", {
                          className: oz.X8,
                          children: (0, a.jsx)(e7.m, {
                              text: T.intl.string(T.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(ts.K, {
                                  "aria-label": T.intl.string(T.t.WAI6xu),
                                  icon: tH.XSmallIcon,
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
function oB(e) {
    let { children: t } = e;
    return (0, a.jsx)(y.E, {
        tag: "div",
        variant: "body-md/semibold",
        color: "text-strong",
        className: oz.DD,
        children: t,
    });
}
function oK(e) {
    let { children: t } = e;
    return (0, a.jsx)(y.E, {
        tag: "div",
        variant: "body-sm/normal",
        color: "text-muted",
        className: oz.rf,
        children: t,
    });
}
function oH(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: oz.o1, children: t });
}
var oV = n(95635);
function oW(e) {
    let { projectId: t, publish: n, onDismiss: l } = e,
        r = (0, eK.A)(t, n);
    return (0, a.jsx)(oF, {
        icon: oV.UploadIcon,
        onDismiss: l,
        children: T.intl.format(P.default.fWfeZ8, { onPublish: () => r("outdated_notice") }),
    });
}
let oX = [
    {
        id: "bot_permissions",
        priority: 3,
        resolve: function (e) {
            let { turn: t, publish: n } = e;
            return null != t && oL(n) ? "hint" : null;
        },
        render: (e, t) => {
            let {
                context: { projectId: n },
            } = t;
            return (0, a.jsx)(oO, { projectId: n });
        },
    },
    {
        id: ok,
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
                (null != n.publishCta && iY(l, n.publishCta))
                ? null
                : null != (t = e.messagesSinceShown(ok)) && t > 0 && t < 10
                  ? null
                  : "hint";
        },
        dismissal: "session",
        render: (e, t) => {
            let {
                context: { projectId: n, publish: l },
                dismiss: r,
            } = t;
            return null != l ? (0, a.jsx)(oW, { projectId: n, publish: l, onDismiss: r }) : null;
        },
    },
    {
        id: "ideas_intro",
        priority: 1,
        resolve: function (e) {
            let { turn: t, agentIdle: n, publish: l, justRemixed: r, noTurnsYet: a, ideasIntroAnchorId: i } = e;
            return !n || null == i || oL(l) ? null : null != t || r || a ? "card" : null;
        },
        dismissal: "anchor",
        render: (e, t) => {
            let {
                context: { onAskForIdeas: n },
                dismiss: l,
            } = t;
            return (0, a.jsxs)(oU, {
                icon: oG.LightbulbIcon,
                onDismiss: l,
                children: [
                    (0, a.jsx)(oB, { children: T.intl.string(P.default.OJlbhX) }),
                    (0, a.jsx)(oK, { children: T.intl.string(P.default["3vJBni"]) }),
                    (0, a.jsx)(oH, {
                        children: (0, a.jsx)(m.$, {
                            variant: "primary",
                            size: "sm",
                            text: T.intl.string(P.default["U/bLzU"]),
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
var oQ = n(817921);
function oZ(e) {
    let { projectId: t, messages: n, draftHasText: l, onAskForIdeas: r } = e,
        s = (function (e, t, n, l, r) {
            let a = (function (e, t, n, l, r) {
                let a,
                    s = (0, eB.Ay)(e),
                    o = (0, c.bG)([nE.default], () => nE.default.getCurrentUser()?.id),
                    u = t.at(-1),
                    d = null != u ? Math.max(u.created_at, u.finished_at ?? 0, u.settled_at ?? 0) : null,
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
                                if ((0, tQ.BL)(n)) return n;
                                if (!(0, tQ.B0)(e, t)) break;
                            }
                        }
                        return null;
                    })(t),
                    h = null == f || oM(f) ? null : f,
                    g = (function (e) {
                        for (let t = e.length - 1; t >= 0; t--) {
                            let n = e[t];
                            if ("publish_notice" === n.kind && n.publishNotice?.commands_failed !== !0) return n;
                        }
                        return null;
                    })(t),
                    p = g?.publishNotice?.update === !1 && 0 === oy(t, g.created_at, o) ? g.id : null,
                    x = u?.projectEvent?.type === "remixed" ? u.projectEvent : null,
                    v = x?.id ?? p,
                    j = o_(e, x),
                    b = x?.settings_keys?.length ?? 0,
                    y = (0, c.bG)([ra.A], () => b > 0 && null == ra.A.getSettings(e), [b, e]),
                    k = (0, oh.WT)(e);
                return {
                    projectId: e,
                    turn: h,
                    publish: s,
                    draftHasText: n,
                    agentIdle:
                        (null == (a = (0, tQ.Ji)(t)) || !!(0, tQ.B0)(t, t.lastIndexOf(a))) &&
                        (null == f || !oM(f)) &&
                        null == op(t) &&
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
                        let l = ob.get(`${e}:${n}`);
                        return null != l ? oy(t, l, o) : null;
                    },
                    isDismissed: (t) => oI(t, e, v),
                    onAskForIdeas: l,
                };
            })(t, n, l, r, oR);
            i.useSyncExternalStore(oE, () => oS);
            let { callout: s, hint: o } = (function (e, t, n) {
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
                u = [s, o].filter((e) => null != e);
            return (
                i.useEffect(() => {
                    let e = Date.now();
                    for (let { tip: n } of u)
                        0 !== a.messagesSinceShown(n.id) &&
                            (function (e, t, n) {
                                ob.set(`${e}:${t}`, n);
                            })(t, n.id, e);
                }),
                u.map((e) => ({
                    ...e,
                    options: {
                        context: a,
                        dismiss:
                            null != e.tip.dismissal
                                ? () =>
                                      (function (e, t) {
                                          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                                          if (null == e.dismissal || oI(e, t, n)) return;
                                          let l = oN();
                                          switch (e.dismissal) {
                                              case "session":
                                                  var r;
                                                  oC.add(((r = e.id), `${t}:${r}`));
                                                  break;
                                              case "anchor":
                                                  if (null == n) return;
                                                  lG.w.set(ow, {
                                                      ...l,
                                                      anchor: { ...l.anchor, [t]: { ...l.anchor[t], [e.id]: n } },
                                                  });
                                                  break;
                                              case "app":
                                                  lG.w.set(ow, {
                                                      ...l,
                                                      app: { ...l.app, [t]: [...(l.app[t] ?? []), e.id] },
                                                  });
                                                  break;
                                              case "forever":
                                                  lG.w.set(ow, { ...l, forever: [...l.forever, e.id] });
                                          }
                                          (oS++, oA.forEach((e) => e()));
                                      })(e.tip, t, a.ideasIntroAnchorId)
                                : void 0,
                    },
                }))
            );
        })(oX, t, n, l, r);
    return 0 === s.length
        ? null
        : (0, a.jsx)(oj, {
              role: "assistant",
              continuation: !0,
              children: (0, a.jsx)("div", {
                  className: oQ.X,
                  children: s.map((e) => {
                      let { tip: t, presentation: n, options: l } = e;
                      return (0, a.jsx)(oT, { presentation: n, render: (e) => t.render(e, l) }, t.id);
                  }),
              }),
          });
}
var oY = n(52133),
    oJ = n(732159),
    o0 = n(888366),
    o1 = n(862026),
    o2 = n(291192);
function o3(e) {
    let { projectId: t, contextSwitch: n } = e,
        l = i.useId(),
        r = (0, o1.L)(t, n);
    if (null == r) return null;
    let { action: s } = r;
    return (0, a.jsxs)("div", {
        className: o2.Ac,
        role: "group",
        "aria-labelledby": l,
        children: [
            (0, a.jsxs)("div", {
                className: o2.Sp,
                children: [
                    (0, a.jsx)("span", { className: o2.q3 }),
                    (0, a.jsxs)("span", {
                        className: o2.g8,
                        children: [
                            (0, a.jsx)(o0.ChatPlusIcon, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, a.jsx)(y.E, {
                                id: l,
                                tag: "span",
                                variant: "body-xs/semibold",
                                color: "text-default",
                                children: r.label,
                            }),
                        ],
                    }),
                    (0, a.jsx)("span", { className: o2.q3 }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: o2.nM,
                role: "status",
                children: [
                    (0, a.jsxs)(y.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: [
                            r.body,
                            null != s
                                ? (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          " ",
                                          (0, a.jsx)(nU.Q, {
                                              text: s.text,
                                              textVariant: "body-sm/medium",
                                              disabled: s.disabled,
                                              onClick: () => {
                                                  var e;
                                                  return s.confirm
                                                      ? ((e = s.onPress),
                                                        void (0, H.mM)(() =>
                                                            Promise.resolve((t) =>
                                                                (0, a.jsx)(oJ.u, {
                                                                    ...t,
                                                                    title: T.intl.string(P.default["i+xjZM"]),
                                                                    subtitle: T.intl.string(P.default.fMBZmD),
                                                                    confirmText: T.intl.string(P.default.i5f3Uo),
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
                        ? (0, a.jsx)(y.E, { variant: "body-xs/normal", color: "text-muted", children: r.note })
                        : null,
                ],
            }),
        ],
    });
}
var o4 = n(345942),
    o5 = n(727419),
    o7 = n(576705);
function o8(e) {
    let { guildId: t, update: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            " ",
            T.intl.format(n ? P.default.esEGL5 : P.default["XrN+Bg"], {
                onOpen: () => o5.A.open(t, ej.BEX.GUILD_AUTOMOD),
            }),
        ],
    });
}
var o9 = n(976860);
function o6(e) {
    return (0, c.bG)([eP.Ay, aT.A], () => {
        let t = eP.Ay.getProject(e);
        return null == t ? "" : (aT.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
var ue = n(951465),
    ut = n(369455);
function un(e) {
    var t, n, l;
    let r,
        i,
        { projectId: s, notice: o } = e,
        u = o6(s),
        d =
            null ==
            (i = (0, c.bG)([eP.Ay, lr.A], () => {
                let e = eP.Ay.getProject(s);
                return null == e || "guild" !== e.install_scope || null == e.guild_id
                    ? null
                    : (lr.A.getGuild(e.guild_id) ?? null);
            }))
                ? null
                : { guildId: i.id, name: i.name },
        m = (0, c.cf)([eP.Ay, ez.A, lr.A, o7.A], () => {
            let e = eP.Ay.getProject(s);
            if (null == e || "guild" !== e.install_scope || null == e.guild_id) return { automod: !1, guildId: null };
            let t =
                    e.supported_surfaces?.includes(et.q7.AUTOMOD) === !0 ||
                    ez.A.getPublishStatus(s)?.surface === "automod",
                n = lr.A.getGuild(e.guild_id),
                l = null != n && o7.A.can(ej.xBc.MANAGE_GUILD, n);
            return { automod: t, guildId: t && l ? e.guild_id : null };
        });
    return (0, a.jsxs)(y.E, {
        variant: "body-md/normal",
        color: "text-default",
        children: [
            T.intl.format(
                ((t = o),
                (n = d?.name ?? null),
                (l = m.automod),
                (r = null != n),
                !0 === t.commands_failed
                    ? r
                        ? P.default.ESu5eZ
                        : P.default["PrQg+B"]
                    : !0 === t.channel_skipped
                      ? r
                          ? P.default.ZnQW4S
                          : P.default.ev23Cw
                      : t.update
                        ? r
                            ? P.default["LuS8a/"]
                            : P.default.gQzuLC
                        : l
                          ? P.default.KORRGl
                          : r
                            ? P.default["/npn7F"]
                            : P.default.MOrR29),
                {
                    name: u,
                    server: d?.name ?? "",
                    onOpenServer: () => {
                        null != d && (0, o4.u)(d.guildId);
                    },
                },
            ),
            null != m.guildId
                ? (0, a.jsx)(o8, { guildId: m.guildId, update: o.update })
                : !m.automod && o.update && null != o.published_revision
                  ? (0, a.jsx)(ul, { projectId: s, notice: o })
                  : null,
        ],
    });
}
function ul(e) {
    let { projectId: t, notice: n } = e,
        l = (function (e, t) {
            let n = s.useContext(eB.bI)?.guildId ?? null,
                l = t.published_revision ?? null,
                { sent: r, canOffer: a } = (0, c.cf)(
                    [ez.A, eP.Ay],
                    () => {
                        let r = ez.A.getPublishStatus(e),
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
                      ? T.intl.format(P.default["35VEu5"], {
                            sentHook: (e, t) =>
                                (0, a.jsx)(
                                    tJ.D,
                                    {
                                        tag: "a",
                                        role: "link",
                                        className: ut.Z,
                                        onClick: () =>
                                            (function (e) {
                                                let { guildId: t, channelId: n, messageId: l } = e;
                                                (0, o9.pX)(ej.BVt.CHANNEL(t, n, l));
                                            })(l.sent),
                                        children: e,
                                    },
                                    t,
                                ),
                        })
                      : T.intl.format(P.default["6/zJpD"], {
                            onSend: () => {
                                let e = (function (e, t) {
                                    let { publishedRevision: n, fallbackGuildId: l } = t,
                                        r = eP.Ay.getProject(e),
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
                                null != e && (0, ue.A)(e);
                            },
                        }),
              ],
          });
}
var ur = n(73153),
    ua = n(505527),
    ui = n(367790),
    us = n(354777),
    uo = n(491182),
    uu = n(74096),
    uc = n(549587),
    ud = n(448368),
    um = n(21299),
    uf = n(538355),
    uh = n(715628),
    ug = n(752636),
    up = n(9842),
    ux = n(589022),
    uv = n(967198),
    uj = n(531685),
    ub = n(503275);
let uy = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function uk(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function uw(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function uC(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let r = uw(e, t),
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
    if (uk(r) && uk(a)) {
        let n = 0,
            l = t;
        for (; n < 32 && uk(uw(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function uA(e, t) {
    let { streaming: n } = t,
        l = (0, c.bG)([aU.Ay], () => aU.Ay.useReducedMotion),
        r = n && !l,
        [a, s] = i.useState(() => ({ target: e, length: e.length })),
        o = a;
    (o.target !== e &&
        (o = {
            target: e,
            length: r
                ? (function (e, t, n) {
                      let l = Math.min(Math.max(n, 0), e.length);
                      if (0 === l) return 0;
                      if (t.length >= l && t.startsWith(e.slice(0, l))) return l;
                      let r = Math.min(l, t.length),
                          a = 0;
                      for (; a < r && e.charCodeAt(a) === t.charCodeAt(a);) a++;
                      for (; a > 0 && uC(t, a);) a--;
                      return a;
                  })(o.target, e, o.length)
                : e.length,
        }),
        r || o.length === e.length || (o = { target: e, length: e.length }),
        o !== a && s(o));
    let u = r && o.length < e.length,
        d = i.useRef(o);
    i.useLayoutEffect(() => {
        d.current = o;
    });
    let m = i.useRef(0),
        f = i.useRef(0);
    (i.useEffect(() => {
        if (u)
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
                                    for (; l > t + 1 && n - l < 12 && uy.has(e.charAt(l - 1));) l--;
                                    return uy.has(e.charAt(l - 1)) ? n : l;
                                })(t, r, Math.min(t.length, r + i));
                                let o = s;
                                for (; o < t.length && o - s < 32 && uC(t, o);) o++;
                                return o;
                            })({ target: e.target, revealed: e.length, elapsedMs: n });
                        l !== e.length && s({ target: e.target, length: l });
                    }
                    m.current = requestAnimationFrame(e);
                })),
                () => cancelAnimationFrame(m.current)
            );
    }, [u]),
        i.useEffect(() => {
            if (u)
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
        }, [u]));
    let h = Math.min(o.length, e.length);
    return { text: h >= e.length ? e : e.slice(0, h), revealing: r && h < e.length };
}
var uS = n(624479),
    uN = n(890377),
    uI = n(92446),
    uE = n(957565),
    u_ = n(180227);
function uM(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)("div", {
              className: u()(u_.QE, { [u_.Rn]: t }),
              children: (0, a.jsx)(is.Ay, {
                  children: n.map((e) =>
                      (0, a.jsx)(
                          is.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function uR(e) {
    return uE.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: T.intl.string(T.t.JrGD7E), icon: uS.CopyIcon, onClick: () => (0, uE.C)(e) }]
        : [];
}
function uP(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: T.intl.string(P.default.CXtLD2),
                          tooltip: T.intl.string(P.default.DOb1HM),
                          icon: uN.DoubleChevronSmallRightIcon,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: T.intl.string(P.default.urZwpN),
                          icon: tH.XSmallIcon,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, a.jsx)(uM, { groupStart: n, actions: [...r, ...uR(t)] });
}
function uT(e) {
    let { content: t, groupStart: n, onRestoreVersion: l, onViewTrace: r } = e,
        i =
            null == l
                ? []
                : [{ id: "restore-version", label: T.intl.string(P.default.H8Jfhu), icon: tc.UndoIcon, onClick: l }],
        s = null == r ? [] : [{ id: "view-trace", label: "View Trace", icon: uI.BugIcon, onClick: r }];
    return (0, a.jsx)(uM, { groupStart: n, actions: [...i, ...uR(t), ...s] });
}
let uL = (0, aD.createChannelRecord)({ id: "conjure-builder", type: ej.rbe.DM }),
    u$ = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function uD(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: u()(u_.Yq, { [u_.x1]: t }), children: e });
}
function uq(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
let uF = { hideSimpleEmbedContent: !0, allowList: !0, allowHeading: !0, allowLinks: !0, previewLinkTarget: !0 };
function uO(e, t, n) {
    let { content: l } = (0, uf.A)(e, uF),
        r = i.useMemo(() => ((0, ry.aW)(e.content) ? (0, us.z2)(sh.U, e, uF).content : null), [e]) ?? l,
        s = i.useMemo(() => ({ message: e, channel: uL, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(uu.Ay, { className: n, message: e, content: r, compact: !1 })
          : (0, uh.A)(s, r);
}
function uG(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, um.m)(e, uL, t.usernameProfile, l),
        o = (0, um.Jo)(t.avatarProfile, l),
        u = (0, c.bG)([uv.A], () => uv.A.getGuildId()),
        d = (0, c.bG)([nE.default], () => nE.default.getCurrentUser()),
        m = i.useCallback(
            (t) => {
                let n = nE.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, a.jsx)(ux.A, { ...t, user: n, currentUser: d, guildId: u ?? void 0 });
            },
            [d, u, e.author],
        );
    return {
        showAvatarPopout: t.avatarProfile,
        showUsernamePopout: t.usernameProfile,
        onClickAvatar: o,
        onClickUsername: s,
        onPopoutRequestClose: r,
        renderPopout: m,
        guildId: u ?? void 0,
    };
}
let uz = { formatInline: !0, allowGameMentions: !0 };
function uU(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        { content: s } = (0, uf.A)(n, uz),
        o = i.useMemo(() => {
            let e = "" === n.content ? null : (0, ry.aW)(n.content) ? (0, us.z2)(sh.U, n, uz).content : s;
            return null == l
                ? e
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("span", {
                              className: u_.GV,
                              children: [
                                  (0, a.jsx)(x.ExperimentalDirectSelectIcon, {
                                      className: u_.Rj,
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
        { isReplyAuthorBlocked: u, isReplyAuthorIgnored: d } = (0, c.cf)(
            [nI.A],
            () => ({
                isReplyAuthorBlocked: nI.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: nI.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        m = (0, ia.X4)(n),
        f = (0, ia.X4)(t),
        h = uG(n);
    return (0, a.jsx)(ud.A, {
        repliedAuthor: m,
        baseAuthor: f,
        baseMessage: t,
        channel: uL,
        referencedMessage: { state: up.a.LOADED, message: n },
        content: o,
        compact: !1,
        isReplyAuthorBlocked: u,
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
function uB(e) {
    let { message: t, author: n } = e,
        l = uG(t);
    return (0, a.jsx)(uc.Ay, {
        message: t,
        channel: uL,
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
function uK(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, groupStart: s, onQueuedAction: o } = e,
        u = (0, ub.vm)(l),
        c = i.useMemo(() => (0, ia.FT)(u, null), [u]),
        d = i.useMemo(() => (0, l$.W1)(t), [t]),
        m = d?.body ?? t,
        f = (0, sD.Qu)(m),
        h = i.useMemo(() => {
            if (null == u) return null;
            let e = (0, a$.Ay)({ channelId: uL.id, content: m, author: u });
            return (0, aL.rh)({ ...e, timestamp: uq(n, e.timestamp), state: ej.cmJ.SENT });
        }, [m, u, n]);
    return null == h
        ? null
        : (0, a.jsx)(
              uH,
              {
                  message: h,
                  author: c,
                  content: m,
                  selected: d?.label,
                  accessories: r,
                  groupStart: s,
                  onQueuedAction: o,
              },
              f,
          );
}
function uH(e) {
    let { message: t, author: n, content: l, selected: r, accessories: i, groupStart: s = !0, onQueuedAction: o } = e,
        u = uO(t, l);
    return (0, a.jsx)(uo.A, {
        className: u_.yE,
        author: n,
        childrenHeader: s ? (0, a.jsx)(uB, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? u
                : (0, a.jsxs)("div", {
                      className: u_.zq,
                      children: [
                          (0, a.jsxs)("span", {
                              className: u_.GV,
                              children: [
                                  (0, a.jsx)(x.ExperimentalDirectSelectIcon, {
                                      className: u_.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  r,
                              ],
                          }),
                          (0, a.jsx)("span", { className: u_.WO, children: u }),
                      ],
                  }),
        childrenAccessories: uD(i, "" !== l),
        childrenButtons: (0, a.jsx)(uP, { content: l, groupStart: s, onQueuedAction: o }),
    });
}
function uV(e) {
    let {
            content: t,
            createdAt: n,
            accessories: l,
            replyTo: r,
            onJumpToReplied: s,
            groupStart: o = !0,
            streaming: u = !1,
            buttons: d,
        } = e,
        { text: m, revealing: f } = uA(t, { streaming: (0, c.bG)([uj.A], () => u && uj.A.isFocused(), [u]) }),
        h = i.useMemo(() => (0, ia.FT)(null, null), []),
        g = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        p = r?.userId,
        x = (0, ub.vm)(p),
        v = i.useMemo(() => (null == r ? null : (0, l$.W1)(r.content)), [r]),
        j = i.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, a$.Ay)({ channelId: uL.id, content: v?.body ?? r.content, author: x });
            return (0, aL.rh)({ ...e, id: r.id, timestamp: uq(r.createdAt, e.timestamp), state: ej.cmJ.SENT });
        }, [r, v, x]),
        b = i.useMemo(() => (null == r ? void 0 : { channel_id: uL.id, message_id: r.id }), [r]),
        [y] = i.useState(() => (0, a$.Ay)({ channelId: uL.id, content: "", author: u$ })),
        k = i.useMemo(
            () =>
                (0, aL.rh)({
                    ...y,
                    timestamp: uq(n, y.timestamp),
                    state: ej.cmJ.SENT,
                    ...(null != b ? { type: ej.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, n, b],
        ),
        w = i.useMemo(() => k.set("content", m), [k, m]),
        C = i.useMemo(
            () => (0, ug.A)({ message: k, channel: uL, author: g, guildId: void 0, isGroupStart: o }),
            [k, g, o],
        ),
        A = uO(w, m, u_.OS);
    return (0, a.jsxs)("div", {
        className: u_.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": f ? "true" : void 0,
        children: [
            (0, a.jsx)(uo.A, {
                className: u_.yE,
                author: g,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, a.jsx)(uU, { baseMessage: k, referenced: j, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: C,
                childrenMessageContent: A,
                childrenAccessories: uD(l, "" !== m),
                disableInteraction: !0,
            }),
            d,
            o ? (0, a.jsx)("img", { className: u_.st, src: "/assets/c07664a29f3ee5ed.svg", alt: "" }) : null,
        ],
    });
}
var uW = n(981879);
function uX(e) {
    let { messageId: t, reaction: n } = e,
        l = i.useMemo(
            () =>
                (0, aL.rh)(
                    { ...(0, a$.Ay)({ channelId: uL.id, content: "" }), id: `conjure:${t}`, state: ej.cmJ.SENT },
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
                (ur.h.dispatch({
                    type: "MESSAGE_REACTION_ADD_USERS",
                    channelId: uL.id,
                    messageId: l.id,
                    users: [u$],
                    emoji: e,
                    reactionType: ua.v6.NORMAL,
                }),
                    ur.h.dispatch({
                        type: "MESSAGE_REACTION_SET_FETCHED",
                        channelId: uL.id,
                        messageId: l.id,
                        emoji: e,
                        reactionType: ua.v6.NORMAL,
                    }));
            }
            return (
                t(),
                ur.h.subscribe("CONNECTION_OPEN", t),
                () => {
                    ur.h.unsubscribe("CONNECTION_OPEN", t);
                }
            );
        }, [l.id, n.emojiId, n.emoji]),
        (0, a.jsx)("div", {
            className: uW.H,
            children: (0, a.jsx)(ui.A, {
                message: l,
                channel: uL,
                disableReactionCreates: !0,
                disableReactionUpdates: !0,
                useChatFontScaling: !0,
                showTooltipWhenReadOnly: !0,
            }),
        })
    );
}
var uQ = n(442433);
n(775443);
var uZ = n(990779),
    uY = n(155899);
function uJ(e) {
    let { onSelect: t, onClose: n = uQ.Z_, onRestoreVersion: l, onViewTrace: r } = e;
    return (0, a.jsx)(ew.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: n,
        "aria-label": T.intl.string(T.t.ogxXGq),
        onSelect: t,
        children: (0, a.jsxs)(eC.rX, {
            children: [
                null != l
                    ? (0, a.jsx)(eC.Dr, {
                          id: "restore-version",
                          label: T.intl.string(P.default.H8Jfhu),
                          icon: tc.UndoIcon,
                          action: l,
                      })
                    : null,
                null != r
                    ? (0, a.jsx)(eC.Dr, { id: "view-trace", label: "View Trace", icon: uI.BugIcon, action: r })
                    : null,
            ],
        }),
    });
}
function u0(e) {
    let t,
        {
            row: n,
            projectId: l,
            replyTo: r,
            onJumpTo: i,
            planVersion: s,
            pickedIdeaIds: o,
            secretRequestAwaiting: u,
            secretRequestStatus: d,
            settingsFloating: m = !1,
            secretFloating: f = !1,
            isNewest: h = !1,
            onPickIdea: g,
            onApprovePlan: p,
            onRestoreVersion: x,
            onCardReply: v,
        } = e,
        j = n.message,
        b =
            null != x
                ? "assistant" !== j.role || null == j.sourceSha
                    ? null
                    : {
                          sha: j.sourceSha,
                          authorName: "",
                          authorEmail: "",
                          authoredAt: new Date(j.created_at).toISOString(),
                          subject: j.content,
                      }
                : null,
        y = null != b && null != x ? () => u1(b, x) : void 0,
        k =
            ((t =
                O() && "assistant" === j.role && (0, tQ.BL)(j)
                    ? (j.turn_id ?? j.steps.find((e) => null != e.turn_id)?.turn_id ?? j.id.replace(/^turn:/, ""))
                    : null),
            (0, c.bG)(
                [uZ.A],
                () => {
                    let e =
                        null == t
                            ? null
                            : uZ.A.getTimingTraces(l).findLast((e) => {
                                  let { name: n, spans: l } = e;
                                  return "turn" === n && l.find((e) => null == e.parent)?.attrs?.turn_id === t;
                              });
                    return null == e || e.live ? null : e.id;
                },
                [l, t],
            )),
        w =
            null != k
                ? () =>
                      (function (e, t) {
                          for (let n of ((D = { projectId: e, traceId: t }), [...$])) n(e);
                      })(l, k)
                : void 0,
        C = j.in_reply_to,
        A = j.restoreProposal;
    return (0, a.jsx)(oj, {
        rowKey: n.key,
        role: "assistant",
        continuation: !n.groupStart,
        onContextMenu:
            null != y || null != w
                ? (e) => {
                      var t, n, l;
                      return (
                          (t = e),
                          (n = y),
                          (l = w),
                          void (0, uQ.jA)(t, (e) => (0, a.jsx)(uJ, { ...e, onRestoreVersion: n, onViewTrace: l }))
                      );
                  }
                : void 0,
        children: (0, a.jsx)(uV, {
            groupStart: n.groupStart,
            buttons: (0, a.jsx)(uT, {
                groupStart: n.groupStart,
                content: n.content,
                onRestoreVersion: y,
                onViewTrace: w,
            }),
            content: n.content,
            createdAt: j.created_at,
            replyTo: r,
            onJumpToReplied: null != C && null != i ? () => i(C) : void 0,
            accessories: (0, a.jsx)(sj, {
                projectId: l,
                steps: j.steps,
                content: "",
                proposal: j.proposal,
                planVersion: s,
                interrupted: !0 === j.interrupted,
                hoistedProse: !0,
                hoistedAttachmentsHost: n.attachmentsHost,
                sideReply: n.sideReply,
                sideReplyAcknowledges: j.acknowledges,
                active: n.active,
                ideas: n.active ? void 0 : j.ideas,
                pickedIdeaIds: null == j.ideas ? void 0 : o,
                attachments: j.attachments,
                secretRequest: n.active || f ? void 0 : j.secretRequest,
                secretRequestId: j.render_id,
                secretRequestAwaiting: u,
                secretRequestStatus: d,
                settingsRequest: n.active || m ? void 0 : j.settingsRequest,
                settingsAskId: j.id,
                publishCta: n.active ? null : j.publishCta,
                turnId: (0, tQ.lb)(j) ?? void 0,
                onPickIdea: g,
                onApprovePlan: p,
                restoreProposal: A,
                publishScheduleProposal: j.publishScheduleProposal,
                publishScheduleProposalCurrent: h,
                serverChange: n.active ? void 0 : j.serverChange,
                serverChangeCurrent: h,
                onCardReply: v,
                onRestoreProposal:
                    null != A && null != x && h
                        ? () =>
                              u1(
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
function u1(e, t) {
    (0, uY.F)({ onConfirm: () => t(e) });
}
var u2 = n(288539),
    u3 = n(677683),
    u4 = n(677690),
    u5 = n(159711);
function u7(e) {
    let t,
        n,
        { projectId: l } = e,
        { outcome: r, pinnedName: i } =
            ((t = (0, c.bG)([u3.A], () => u3.A.getOutcome(l))),
            (n = (0, c.bG)(
                [nN.A, nE.default, nI.A],
                () => {
                    let e = t?.status === "pinned" ? nN.A.getChannel(t.channelId) : null;
                    return null == e ? null : (0, nS.m1)(e, nE.default, nI.A);
                },
                [t],
            )),
            { outcome: t, pinnedName: n }),
        s = T.intl.string(P.default.UGAfl9);
    return null != r
        ? (0, a.jsx)(t7, {
              title: s,
              children: (0, a.jsx)(y.E, {
                  className: u5.r,
                  variant: "body-sm/normal",
                  color: "text-muted",
                  children:
                      "pinned" === r.status
                          ? T.intl.formatToPlainString(P.default.gKe6Lw, { channelName: i ?? "" })
                          : T.intl.string(P.default["+kpQ3v"]),
              }),
          })
        : (0, a.jsx)(t7, { title: s, children: (0, a.jsx)(u8, { projectId: l }) });
}
function u8(e) {
    let { projectId: t } = e,
        {
            guildId: n,
            channels: l,
            selected: r,
            setPicked: s,
            pinning: o,
            failed: u,
            pin: d,
            skip: f,
        } = (function (e) {
            var t;
            let n = (0, c.bG)([eP.Ay], () => eP.Ay.getProject(e), [e]),
                l =
                    ((t = n?.guild_id ?? null),
                    (0, c.yK)(
                        [ln.A, o7.A],
                        () =>
                            null == t
                                ? []
                                : ln.A.getChannels(t)
                                      .VOCAL.map((e) => {
                                          let { channel: t } = e;
                                          return t;
                                      })
                                      .filter(
                                          (e) => e.type === ej.rbe.GUILD_VOICE && o7.A.can(ej.xBc.MANAGE_CHANNELS, e),
                                      ),
                        [t],
                    )),
                [r, a] = i.useState(null),
                [s, o] = i.useState(!1),
                [u, d] = i.useState(!1),
                m = l.find((e) => e.id === r) ?? null,
                f = n?.application_id,
                h = i.useCallback(async () => {
                    if (null == m || null == f) return;
                    (o(!0), d(!1));
                    let t = await (0, u4.pk)(m.id, f);
                    (o(!1), t ? (0, u4.tg)(e, { status: "pinned", channelId: m.id }) : d(!0));
                }, [f, e, m]),
                g = i.useCallback(() => (0, u4.tg)(e, { status: "skipped" }), [e]);
            return {
                guildId: n?.guild_id ?? null,
                channels: l,
                selected: m,
                setPicked: a,
                pinning: s,
                failed: u,
                pin: h,
                skip: g,
            };
        })(t),
        h = (0, n7.A)(n, "voice"),
        g = i.useMemo(() => {
            let e = new Set(l.map((e) => e.id));
            return (h ?? []).filter((t) => e.has(t.value));
        }, [l, h]);
    return (0, a.jsx)("div", {
        className: u5.r,
        children: (0, a.jsxs)(nK.B, {
            gap: 12,
            children: [
                (0, a.jsx)(y.E, {
                    variant: "body-md/normal",
                    color: "text-default",
                    children: T.intl.string(P.default["1vVBAw"]),
                }),
                g.length > 0
                    ? (0, a.jsx)(ny.Z, {
                          selectionMode: "single",
                          label: T.intl.string(P.default.peOi1H),
                          placeholder: T.intl.string(P.default["9+dfPT"]),
                          options: g,
                          value: r?.id ?? null,
                          onSelectionChange: (e) => s(e),
                          errorMessage: u ? T.intl.string(P.default.d7EeAm) : void 0,
                          disabled: o,
                          maxOptionsVisible: 4,
                          fullWidth: !0,
                      })
                    : (0, a.jsx)(y.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: T.intl.string(P.default.JVUsIY),
                      }),
                (0, a.jsxs)("div", {
                    className: u5.o,
                    children: [
                        (0, a.jsx)(m.$, {
                            variant: "secondary",
                            size: "sm",
                            text: T.intl.string(P.default.Iw0l8o),
                            disabled: o,
                            onClick: f,
                        }),
                        g.length > 0
                            ? (0, a.jsx)(m.$, {
                                  variant: "primary",
                                  size: "sm",
                                  text: T.intl.string(P.default.FYI3qr),
                                  disabled: null == r,
                                  loading: o,
                                  onClick: d,
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function u9(e, t, n) {
    return (0, a.jsx)(u2.A, { userId: e, content: `@${t}` }, n);
}
function u6(e) {
    let { projectId: t, event: n } = e,
        l = (function (e, t, n) {
            let l = t.actor_user_id;
            i.useEffect(() => {
                (0, ub.Y_)(l);
            }, [l]);
            let r = (0, c.bG)([nE.default], () => (null == l ? null : nE.default.getUser(l)), [l]),
                a = (0, aF.tx)(r),
                s = o6(e),
                o =
                    (0, c.bG)([lr.A], () => (null == t.guild_id ? null : lr.A.getGuild(t.guild_id)?.name), [
                        t.guild_id,
                    ]) ??
                    ("app_removed" === t.type ? t.guild_name : null) ??
                    T.intl.string(P.default.R1tPlP),
                u = "app_removed" === t.type ? t.moved_to_guild_id : void 0,
                d = (0, c.bG)([lr.A], () => (null == u ? null : lr.A.getGuild(u)?.name), [u]),
                m = null == r || null == a ? null : { user: a, userHook: (e, t) => n(r.id, a, t) };
            switch (t.type) {
                case "app_removed":
                    if (null != u) {
                        let e = d ?? t.moved_to_guild_name ?? T.intl.string(P.default.R1tPlP);
                        return null == m
                            ? T.intl.format(P.default.NVM0sD, { app: s, server: o, newServer: e })
                            : T.intl.format(P.default["/hlliy"], { app: s, server: o, newServer: e, ...m });
                    }
                    return null == m
                        ? T.intl.format(P.default.Lwsrhg, { app: s, server: o })
                        : T.intl.format(P.default.qqePfT, { app: s, server: o, ...m });
                case "bot_removed":
                    return null == m
                        ? T.intl.format(P.default.mT7EQG, { app: s, server: o })
                        : T.intl.format(P.default["lA/crI"], { app: s, server: o, ...m });
                case "preview_bot_removed":
                    return null == m
                        ? T.intl.format(P.default["4LVIeo"], { app: s, server: o })
                        : T.intl.format(P.default.YJOV6D, { app: s, server: o, ...m });
                case "app_channel_deleted": {
                    let e = t.channel_name ?? "";
                    return null == m
                        ? T.intl.format(P.default["4VQfid"], { channel: e, server: o })
                        : T.intl.format(P.default.RlMIJN, { channel: e, server: o, ...m });
                }
                case "remixed":
                    return T.intl.format(P.default.mHCXtm, { source: t.source_name });
                case "voice_channel_pin":
                    return T.intl.string(P.default.UGAfl9);
                case "staff_notice":
                    return t.message;
            }
        })(t, n, u9),
        r = o_(t, n);
    return "voice_channel_pin" === n.type
        ? (0, a.jsx)(u7, { projectId: t })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(y.E, { variant: "body-md/normal", color: "text-default", children: l }),
                  null != r ? (0, a.jsx)(rp, { projectId: t, request: r, notifyAgent: !1 }) : null,
              ],
          });
}
let ce = i.memo(
        function (e) {
            var t;
            let { row: n, projectId: l, highlighted: r, currentUserId: i, ...s } = e,
                o = n.message,
                u =
                    ((t = "user" === n.kind ? o.id : null),
                    nf.useState((e) => (null == t ? null : (e.byMessageKey[t] ?? null))));
            switch (n.kind) {
                case "user": {
                    let e = (0, ry.DW)(o.attachments, o.content),
                        t = null != e && e.length > 0 ? e : null;
                    return (0, a.jsx)(oj, {
                        rowKey: n.key,
                        role: "user",
                        anchorId: o.id,
                        highlighted: r,
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(uK, {
                            groupStart: n.groupStart,
                            content: o.content,
                            createdAt: o.created_at,
                            userId: o.user_id,
                            accessories:
                                null != t || null != u || null != o.agentReaction
                                    ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              null != t ? (0, a.jsx)(sf.A, { projectId: l, attachments: t }) : null,
                                              null != u ? (0, a.jsx)(sP, { send: u }) : null,
                                              null != o.agentReaction
                                                  ? (0, a.jsx)(uX, { messageId: o.id, reaction: o.agentReaction })
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
                                    return (n) => (0, rk.tp)(e, t.id, n);
                            })(l, o, i),
                        }),
                    });
                }
                case "prose":
                    return (0, a.jsx)(oj, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(uV, {
                            groupStart: n.groupStart,
                            content: n.content,
                            streaming: n.streaming,
                            createdAt: o.created_at,
                            accessories:
                                n.hostsAttachments && null != o.attachments
                                    ? (0, a.jsx)(sf.A, { projectId: l, attachments: o.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, a.jsx)(oj, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(sv, {
                            projectId: l,
                            steps: o.steps,
                            segment: n.segment,
                            active: n.active,
                            closed: n.closed,
                            segmentDurationMs: n.segmentDurationMs,
                            reportsDuration: n.reportsDuration,
                            hostsChecklist: n.hostsChecklist,
                            turnActive: n.turnActive,
                            checklistSuperseded: n.checklistSuperseded,
                            durationMs: null != o.finished_at ? o.finished_at - o.created_at : void 0,
                            todos: o.todos,
                            provisionalTodo: o.provisionalTodo,
                        }),
                    });
                case "publishNotice":
                    return (0, a.jsx)(oj, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(uV, {
                            groupStart: n.groupStart,
                            content: null == o.publishNotice ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.publishNotice
                                    ? void 0
                                    : (0, a.jsx)(un, { projectId: l, notice: o.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, a.jsx)(oj, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(uV, {
                            groupStart: n.groupStart,
                            content: null == o.projectEvent ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.projectEvent
                                    ? void 0
                                    : (0, a.jsx)(u6, { projectId: l, event: o.projectEvent }),
                        }),
                    });
                case "contextBoundary":
                    return (0, a.jsx)(oj, {
                        rowKey: n.key,
                        role: "assistant",
                        children:
                            null == o.contextSwitch
                                ? null
                                : (0, a.jsx)(o3, { projectId: l, contextSwitch: o.contextSwitch }),
                    });
                case "interrupted":
                    return (0, a.jsx)(oj, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(sv, { projectId: l, interrupted: !0, steps: o.steps }),
                    });
                case "legacyTodos":
                    return (0, a.jsx)(oj, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(sv, {
                            projectId: l,
                            steps: ct,
                            active: !1,
                            checklistSuperseded: n.checklistSuperseded,
                            todos: o.todos,
                            provisionalTodo: o.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, a.jsx)(u0, { row: n, projectId: l, ...s });
            }
        },
        function (e, t) {
            return (
                (0, oY.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, oY.A)(e.row, t.row, ["message"]) &&
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
                (0, oY.A)(e.replyTo, t.replyTo) &&
                (0, oY.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let n of e) if (!t.has(n)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    ct = [],
    cn = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    cl = new WeakMap();
function cr(e, t, n) {
    let l = Math.max(0, Math.min(e.length, n)),
        r = Math.max(0, Math.min(l, t));
    return { start: r, end: l, startKey: e[r] ?? null, endKey: l >= e.length ? null : (e[l - 1] ?? null) };
}
function ca(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
let ci = ["wheel", "touchstart", "pointerdown", "keydown"];
function cs(e) {
    let t = e?.querySelectorAll("[data-conjure-plan-card]");
    return t?.[t.length - 1]?.closest("[data-conjure-row-key]") ?? null;
}
let co = i.memo(function (e) {
    let {
            projectId: t,
            messages: n,
            emptyState: l,
            onPickIdea: r,
            onAskForIdeas: s,
            draftHasText: o,
            onApprovePlan: d,
            floatingSettingsMessageId: m,
            floatingSecretRenderId: f,
            liveClarificationId: h,
            onRestoreVersion: g,
            onCardReply: p,
            scrollerRef: x,
            stickToBottomRef: v,
            pinned: j,
            onUnpin: b,
            handleRef: w,
            onShowsLatestChange: C,
        } = e,
        A = i.useRef(null),
        [S, N] = i.useState(null),
        I = i.useCallback((e) => {
            ((A.current = e), N(e));
        }, []),
        [E, _] = i.useState(null),
        M = i.useRef(0);
    i.useEffect(() => () => window.clearTimeout(M.current), []);
    let R = i.useCallback((e) => {
            (_(e), window.clearTimeout(M.current), (M.current = window.setTimeout(() => _(null), 1600)));
        }, []),
        L = (0, c.bG)([ez.A], () => ez.A.getPublishStatus(t)),
        $ = (0, c.bG)([nE.default], () => nE.default.getCurrentUser()?.id),
        D = i.useMemo(() => {
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
                                        let t = (0, tX.lt)(e.steps);
                                        return null != t ? t : null != e.todos && e.todos.length > 0 ? e.todos : null;
                                    })(r) &&
                                (n && t.add(r.render_id), (n = !0));
                        }
                        return t;
                    })(e);
                for (let r of e) {
                    let e = l.has(r.render_id),
                        a = null != r.clarification && r.clarification.id === t,
                        i = cl.get(r);
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
                                (0, tQ.ST)(e) ||
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
                        let a = !(0, tQ.BL)(e),
                            i = rN({
                                steps: e.steps,
                                content: e.content,
                                hasProposal: null != e.proposal,
                                hasLiveClarification: n,
                                hasAttachments: (e.attachments?.length ?? 0) > 0,
                            }),
                            s = i.lastStreamedMessage?.key,
                            o = (0, tX.C6)(e.steps, { turnActive: a }),
                            { lastWork: u, open: c } = (0, tX.CT)(o, { turnActive: a }),
                            d = o.at(-1)?.index,
                            m = !1;
                        for (let n of o) {
                            if (null != n.prose && cn.test(n.prose.content)) m = !0;
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
                                        reportsDuration: n.index === u,
                                        hostsChecklist: n.hasTodos,
                                        turnActive: tZ(e),
                                        checklistSuperseded: n.hasTodos && t,
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        let f = cn.test(e.content ?? "");
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
                                : o.every((e) => !e.hasTodos) &&
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
                                        null != e.settingsRequest ||
                                        null != e.serverChange)) ||
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
                    (cl.set(r, { superseded: e, liveCard: a, planned: s }), n.push(...s));
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
                        if (null != l) return iZ(l, t) ? e[n].id : null;
                    }
                    return null;
                })(n, L)),
                n.every((t) => null == t.publishCta || t.id === e)
                    ? n
                    : n.map((t) => {
                          if (null == t.publishCta || t.id === e) return t;
                          let n = iJ.get(t);
                          return (null == n && ((n = { ...t, publishCta: null }), iJ.set(t, n)), n);
                      })),
                h,
            );
        }, [n, L, h]),
        q = i.useMemo(() => D.map((e) => e.key), [D]),
        [F, O] = i.useState(null),
        G = (function (e, t, n) {
            if (null == t) return cr(e, e.length - 60, e.length);
            let l = null == t.endKey,
                r = l ? e.length : ca(e, t.endKey, t.end - 1) + 1,
                a = ca(e, t.startKey, t.start);
            return (l && n && r - a > 120 && (a = r - 60), cr(e, a, r));
        })(q, F, j),
        z = i.useRef(G),
        U = i.useRef(q),
        B = i.useRef(D),
        K = i.useRef(null),
        H = i.useRef(null),
        V = i.useRef(new Set()),
        W = i.useRef(null),
        X = i.useRef(!1),
        Q = i.useCallback(() => {
            let e = x.current?.getScrollerNode(),
                t = X.current ? cs(A.current) : null;
            if (null == e || null == t) return;
            let n = new DOMMatrixReadOnly(getComputedStyle(t).transform).m42,
                l = t.getBoundingClientRect().top - n - e.getBoundingClientRect().top - 8;
            Math.abs(l) >= 1 && (e.scrollTop += l);
        }, [x]);
    i.useLayoutEffect(() => {
        let e = x.current?.getScrollerNode();
        if (null == e) return;
        let t = () => {
            X.current = !1;
        };
        for (let n of ci) e.addEventListener(n, t, { passive: !0 });
        return () => {
            for (let n of ci) e.removeEventListener(n, t);
        };
    }, [x]);
    let Z = i.useCallback(() => {
            let e = x.current?.getScrollerNode(),
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
            K.current = null != i && null != s ? { key: s, offset: i.getBoundingClientRect().top - n } : null;
        }, [x]),
        Y = i.useCallback(() => {
            let e = x.current?.getScrollerNode();
            if (null == e) return;
            let n = (function (e, t, n) {
                let { nearTop: l, nearBottom: r, pinned: a } = n;
                if (r && null != t.endKey) {
                    let n;
                    return ((n = Math.min(e.length, t.end + 30)), cr(e, Math.max(t.start, n - 120), n));
                }
                if (!l) return null;
                if (0 === t.start) return "older";
                if (!a && !r) {
                    let n, l;
                    return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), cr(e, n, l));
                }
                let i = Math.max(t.start - 30, t.end - 120);
                return i < t.start ? cr(e, i, t.end) : null;
            })(U.current, z.current, {
                nearTop: e.scrollTop < 600,
                nearBottom: e.scrollHeight - e.clientHeight - e.scrollTop < 600,
                pinned: v.current,
            });
            "older" === n ? (0, eG.P6)(t) : null != n && O(n);
        }, [x, v, t]);
    i.useImperativeHandle(
        w,
        () => ({
            handleScroll() {
                (Z(),
                    O((e) => {
                        let t = z.current;
                        return null != e && e.startKey === t.startKey && e.endKey === t.endKey ? e : t;
                    }),
                    Y());
            },
            recordAnchor: Z,
            showLatest(e) {
                ((X.current = !1), (H.current = e ?? null), O(null));
            },
            snapshot() {
                let e = K.current;
                return null == e ? null : { window: z.current, anchor: e };
            },
            restore(e) {
                let { window: t, anchor: n } = e;
                if (!U.current.includes(n.key)) return !1;
                (b(), (K.current = n));
                let l = z.current;
                if (l.startKey === t.startKey && l.endKey === t.endKey) {
                    let e = x.current?.getScrollerNode(),
                        t = A.current?.querySelector(`[data-conjure-row-key="${CSS.escape(n.key)}"]`);
                    null != e &&
                        null != t &&
                        (e.scrollTop += t.getBoundingClientRect().top - e.getBoundingClientRect().top - n.offset);
                } else O(t);
                return !0;
            },
        }),
        [Z, Y, b, x],
    );
    let J = i.useRef(null),
        ee = i.useCallback(
            (e) => {
                var n;
                let l;
                ((J.current = null), (X.current = !1));
                let r = A.current?.querySelector(`[data-conjure-message="${e}"]`);
                if (null != r) {
                    (b(), O(z.current), r.scrollIntoView({ block: "center", behavior: "smooth" }), R(e));
                    return;
                }
                let a = B.current.findIndex((t) => "user" === t.kind && t.message.id === e);
                if (-1 === a) {
                    (0, eG.P6)(t) && (J.current = e);
                    return;
                }
                (b(),
                    (H.current = () => {
                        (A.current?.querySelector(`[data-conjure-message="${e}"]`)?.scrollIntoView({ block: "center" }),
                            R(e));
                    }),
                    O(((n = U.current), cr(n, (l = Math.max(0, a - 30)), l + 60))));
            },
            [R, b, t],
        );
    (i.useEffect(() => {
        let e = J.current;
        null != e && ee(e);
    }, [D, ee]),
        i.useLayoutEffect(() => {
            if (null == S) return;
            let e = S.getBoundingClientRect().height,
                t = new ResizeObserver((t) => {
                    let [n] = t,
                        l = n?.contentRect.height;
                    if (null != l && l !== e) {
                        if (((e = l), v.current)) return void x.current?.scrollToBottom();
                        (Q(), Z());
                    }
                });
            return (t.observe(S), () => t.disconnect());
        }, [S, Q, Z, x, v]));
    let et = null == G.endKey;
    (i.useEffect(() => C?.(et), [et, C]),
        i.useLayoutEffect(() => {
            ((z.current = G), (U.current = q), (B.current = D));
        }),
        i.useLayoutEffect(() => {
            let e = x.current?.getScrollerNode(),
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
                    })(W, t, n);
            if (null != e && null != l) {
                let t = K.current;
                if (r && v.current && null != cs(l)) (b(), O(z.current), (X.current = !0), Q());
                else if (v.current) x.current?.scrollToBottom();
                else if (X.current) Q();
                else if (null != t) {
                    let n = Array.from(l.querySelectorAll("[data-conjure-row-key]")).find(
                            (e) => e.dataset.conjureRowKey === t.key,
                        ),
                        r = null == n ? 0 : n.getBoundingClientRect().top - e.getBoundingClientRect().top - t.offset;
                    0 !== r && (e.scrollTop += r);
                }
                let n = H.current;
                ((H.current = null), n?.(), Z(), Y());
            }
            V.current = new Set(q);
        }, [t, n, D, q, G.start, G.end, x, v, b, Q, Z, Y]));
    let en = i.useMemo(() => op(n), [n]),
        el = i.useMemo(
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
        er = i.useMemo(
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
        ea = i.useMemo(
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
        es =
            (ei?.role !== "assistant" || null == ei.awaitingUser || null == ei.secretRequest
                ? null
                : (0, tQ.BL)(ei)
                  ? ei.awaitingUser
                  : null) ?? void 0,
        eo = (0, c.bG)([ra.A], () => ra.A.getSettings(t)?.secrets, [t]),
        eu = (0, oh.WT)(t),
        ec = i.useMemo(() => (0, l5.Mv)(n, eo), [n, eo]);
    if (!(0, tQ.i_)(n)) {
        if ("loading" === l)
            return (0, a.jsx)("ol", {
                className: u()(ox.x7, ox.jH),
                "aria-busy": !0,
                children: (0, a.jsx)("li", { className: ox.Ub, children: (0, a.jsx)(k.y, {}) }),
            });
        let e = "unavailable" === l ? P.default.Td4Sf4 : P.default.V1QiNz;
        return (0, a.jsx)("ol", {
            className: ox.x7,
            children: (0, a.jsx)(oj, { role: "assistant", children: (0, a.jsx)(uV, { content: T.intl.string(e) }) }),
        });
    }
    return (0, a.jsx)(ov.Provider, {
        value: V,
        children: (0, a.jsxs)("ol", {
            ref: I,
            className: ox.x7,
            children: [
                D.slice(G.start, G.end).map((e) => {
                    let n = e.message;
                    if ("closing" !== e.kind)
                        return (0, a.jsx)(
                            ce,
                            {
                                row: e,
                                projectId: t,
                                highlighted: "user" === e.kind && E === n.id,
                                currentUserId: "user" === e.kind ? $ : void 0,
                            },
                            e.key,
                        );
                    let l = n === ei;
                    return (0, a.jsx)(
                        ce,
                        {
                            row: e,
                            projectId: t,
                            highlighted: !1,
                            replyTo: null != n.in_reply_to ? ea.get(n.in_reply_to) : void 0,
                            onJumpTo: ee,
                            planVersion: el.get(n.render_id),
                            pickedIdeaIds: er.get(n.render_id),
                            secretRequestAwaiting: l ? es : void 0,
                            secretRequestStatus: ec.get(n.render_id),
                            settingsFloating: n.id === m,
                            secretFloating: n.render_id === f,
                            isNewest: l,
                            onPickIdea: r,
                            onApprovePlan: n.render_id === en ? d : void 0,
                            onRestoreVersion: g,
                            onCardReply: p,
                        },
                        e.key,
                    );
                }),
                et
                    ? eu.map((e) =>
                          (0, a.jsx)(
                              oj,
                              {
                                  role: "assistant",
                                  continuation: !0,
                                  children: (0, a.jsx)(uV, {
                                      groupStart: !1,
                                      content: "",
                                      accessories: (0, a.jsx)(og.K, { projectId: t, approval: e }),
                                  }),
                              },
                              e.id,
                          ),
                      )
                    : null,
                null != es && et
                    ? (0, a.jsx)(oj, {
                          role: "assistant",
                          continuation: !0,
                          children: (0, a.jsx)(uV, {
                              groupStart: !1,
                              content: "",
                              accessories: (0, a.jsx)(y.E, {
                                  variant: "body-xs/normal",
                                  color: "text-muted",
                                  children: T.intl.string(P.default.YR8A2v),
                              }),
                          }),
                      })
                    : null,
                et ? (0, a.jsx)(oZ, { projectId: t, messages: n, draftHasText: !0 === o, onAskForIdeas: s }) : null,
            ],
        }),
    });
});
var cu = n(731084),
    cc = n(336288),
    cd = n(187447);
function cm(e) {
    let { activity: t, id: n } = e,
        l = (0, tW.j)(),
        { text: r, revealing: s } = uA(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
        o = i.useRef(null),
        c = i.useRef(!0),
        d = i.useRef(0),
        m = i.useCallback(() => {
            let e = o.current,
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
            let e = o.current;
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
            className: cd.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, a.jsx)(tB.Ch, {
                ref: o,
                onScroll: m,
                className: cd.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: u()(sx.PT, cd.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: aW.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var cf = n(53659);
function ch(e) {
    let {
            activity: t,
            compacting: n = !1,
            saving: l = !1,
            restoring: r = !1,
            remixing: s = !1,
            recalling: o = !1,
            controlling: c = !1,
            publishPending: d = !1,
            publishing: m = !1,
            spoken: f,
            onSpokenChange: h,
        } = e,
        g = i.useRef(null),
        p = i.useId(),
        [x, v] = i.useState(null),
        j = (0, cu.xu)({
            activity: t,
            compacting: n,
            saving: l,
            restoring: r,
            remixing: s,
            recalling: o,
            controlling: c,
            publishPending: d,
            publishing: m,
        }),
        b = T.intl.string(j),
        k = j === cu.kx["0"],
        [w, C] = i.useState(f ?? b),
        A = (0, tW.j)();
    (l || (0, cu.E4)(b, w) || (!A && !k)) && w !== b && C(b);
    let S = i.useRef(b);
    (i.useEffect(() => {
        S.current = b;
    }, [b]),
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
        ((E.current = k), !k && (0, cu.E8)(I.current) && C(S.current));
    }, [k]),
        i.useEffect(() => {
            if (!A) return;
            let e = 0,
                t = 0;
            function n() {
                E.current
                    ? ((_.current = (0, cu.E8)(I.current) ? _.current + 1 : 0), C((0, cu.Ov)(_.current)))
                    : S.current !== I.current
                      ? C(S.current)
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
        R = t?.session ?? null,
        L = M && null != R && x === R,
        $ = i.useCallback(() => {
            M && null != R && v((e) => (e === R ? null : R));
        }, [M, R]),
        D = i.useCallback(() => v(null), []);
    return (0, a.jsx)(ek.Y, {
        targetElementRef: g,
        position: "top",
        align: "left",
        shouldShow: L,
        onRequestClose: D,
        renderPopout: () => (0, a.jsx)(cm, { id: p, activity: t }),
        children: () =>
            (0, a.jsxs)(tJ.D, {
                innerRef: g,
                className: u()(cf.hF, M && cf.Xd),
                "aria-label": T.intl.string(
                    r
                        ? P.default.qqlUiW
                        : j === P.default.j8tmjK
                          ? P.default.j8tmjK
                          : k
                            ? cu.kx["0"]
                            : P.default["Uuj/gh"],
                ),
                "aria-expanded": L,
                "aria-describedby": L ? p : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": T.intl.string(j),
                onClick: $,
                children: [
                    (0, a.jsx)("span", {
                        className: cf.bl,
                        children: (0, a.jsx)(cc.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", {
                        className: cf.xu,
                        "aria-hidden": !!c || !!k || void 0,
                        children: A
                            ? (0, a.jsx)(sb.o, {
                                  ref: N,
                                  text: w,
                                  variant: "body-xs/medium",
                                  color: "text-subtle",
                                  duration: 1e3,
                                  delay: null,
                                  className: cf.yE,
                              })
                            : (0, a.jsx)(y.E, {
                                  tag: "span",
                                  variant: "body-xs/medium",
                                  color: "text-subtle",
                                  className: cf.yE,
                                  children: w,
                              }),
                    }),
                ],
            }),
    });
}
let cg = { second: 1e3, minute: 6e4 };
function cp(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [n, l] = i.useState(() => Date.now());
    return (
        i.useEffect(() => {
            let n;
            if (null == e) return;
            let r = cg[t];
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
var cx = n(719374);
function cv(e) {
    let { startedAt: t, variant: n = "body-xs/medium" } = e,
        l = cp(t);
    return (0, a.jsx)(y.E, {
        tag: "span",
        variant: n,
        color: "text-muted",
        "aria-hidden": !0,
        className: cx.$,
        "data-conjure-turn-timer": !0,
        children: (0, r$.C7)(l),
    });
}
function cj(e) {
    let { startedAt: t } = e,
        n = cp(t, "minute");
    return (0, a.jsx)(t3.A, { role: "timer", children: (0, r$.Us)(n) });
}
var cb = n(885574),
    cy = n(242779),
    ck = n(436804);
function cw(e) {
    return e.toLocaleString();
}
function cC(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, a.jsxs)("div", {
        className: ck.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: ck.mf,
                children: [
                    (0, a.jsx)(y.E, { variant: "body-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(y.E, {
                        variant: "body-sm/medium",
                        color: "text-muted",
                        children: [cw((0, cy.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(y.E, {
                tag: "div",
                variant: "body-xs/normal",
                color: "text-muted",
                children: [
                    cw(n.input_tokens),
                    " in \xb7 ",
                    cw(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${cw(n.cache_creation_input_tokens)} cache write \xb7 ${cw(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function cA(e) {
    let { project: t } = e,
        n = (0, cy.wU)(t.compaction),
        l = (0, cy.wU)(t.classifier),
        r = (0, cy.wU)(t.image),
        i = (0, cy.wV)(t.orchestrator, t.codegen),
        s = (0, cy.wV)(i, n);
    return (0, a.jsxs)("div", {
        className: ck.si,
        role: "dialog",
        "aria-label": T.intl.string(P.default.p5EGzq),
        children: [
            (0, a.jsx)("div", {
                className: ck.Q$,
                children: (0, a.jsxs)("div", {
                    className: ck.mf,
                    children: [
                        (0, a.jsxs)(y.E, {
                            variant: "body-md/semibold",
                            color: "text-default",
                            children: [cw((0, cy.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(y.E, {
                            variant: "body-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(cC, { label: T.intl.string(P.default["9Sj3SX"]), usage: i }),
            (0, a.jsx)(cC, { label: T.intl.string(P.default.ANCEo3), usage: n }),
            (0, a.jsx)(cC, { label: T.intl.string(P.default.ugL6D4), usage: l, cached: !1 }),
            (0, a.jsx)(cC, { label: T.intl.string(P.default.DHr5On), usage: r, cached: !1 }),
            (0, a.jsxs)("div", {
                className: ck.mf,
                children: [
                    (0, a.jsx)(y.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: T.intl.string(P.default["8OUg09"]),
                    }),
                    (0, a.jsx)(y.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        children: 0 === (0, cy.sj)(s) ? "\u2014" : `${Math.round(100 * (0, cy.CA)(s))}%`,
                    }),
                ],
            }),
        ],
    });
}
function cS(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(ek.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(cA, { project: t }),
        children: (e) =>
            (0, a.jsx)(tJ.D, {
                innerRef: n,
                className: ck.Y$,
                "aria-label": T.intl.string(P.default.Z96gxQ),
                ...e,
                children: (0, a.jsx)(cb.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var cN = n(990250);
function cI(e) {
    let { queued: t } = e,
        n = T.intl.string(P.default.hzgPbZ);
    return (0, a.jsxs)("div", {
        className: cN.nd,
        role: "dialog",
        "aria-label": n,
        "data-testid": "conjure-queued-card",
        children: [
            (0, a.jsxs)("div", {
                className: cN.wx,
                children: [
                    (0, a.jsx)(y.E, { variant: "body-md/semibold", color: "text-default", children: n }),
                    (0, a.jsx)(y.E, { variant: "body-xs/normal", color: "text-muted", children: t.length }),
                ],
            }),
            (0, a.jsx)(tB.Ch, {
                className: cN.XG,
                children: (0, a.jsx)("ul", {
                    className: cN.p_,
                    children: t.map((e) => (0, a.jsx)(cE, { content: e.content }, e.render_id)),
                }),
            }),
        ],
    });
}
function cE(e) {
    let { content: t } = e,
        n = i.useRef(null),
        [l, r] = i.useState(!1),
        [s, o] = i.useState(!1);
    return (i.useLayoutEffect(() => {
        let e = n.current;
        null == e || l || o(e.scrollHeight > e.clientHeight);
    }, [t, l]),
    "" === t)
        ? (0, a.jsx)("li", {
              className: cN.AS,
              children: (0, a.jsx)(y.E, {
                  variant: "body-sm/normal",
                  color: "text-muted",
                  children: T.intl.string(P.default["07XimM"]),
              }),
          })
        : (0, a.jsxs)("li", {
              className: cN.AS,
              children: [
                  (0, a.jsx)(y.E, {
                      ref: n,
                      variant: "body-sm/normal",
                      color: "text-default",
                      lineClamp: l ? void 0 : 3,
                      className: cN.Qs,
                      children: t,
                  }),
                  s
                      ? (0, a.jsx)(nU.Q, {
                            variant: "secondary",
                            textVariant: "body-xs/medium",
                            text: T.intl.string(l ? P.default.nEMoeN : P.default["W+la29"]),
                            "aria-expanded": l,
                            onClick: () => r((e) => !e),
                        })
                      : null,
              ],
          });
}
function c_(e) {
    let { queued: t, className: n } = e,
        l = i.useRef(null);
    return (0, a.jsx)(ek.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(cI, { queued: t }),
        children: (e) =>
            (0, a.jsx)(tJ.D, {
                innerRef: l,
                className: n,
                "data-testid": "conjure-queued-pill",
                ...e,
                children: (0, a.jsx)(y.E, {
                    tag: "span",
                    variant: "body-xs/medium",
                    color: "text-muted",
                    children: T.intl.formatToPlainString(P.default.REnNUn, { count: t.length }),
                }),
            }),
    });
}
var cM = n(997421);
function cR(e) {
    let {
            projectId: t,
            thinking: n,
            turnStartedAt: l,
            restoring: r = !1,
            remixStartedAt: s,
            recalling: o = !1,
            thinkingActivity: d,
            compacting: m,
            saving: f,
            projectUsage: h,
            connState: g,
            queued: p,
        } = e,
        x = (0, G.Zv)(t),
        v = (0, c.bG)([ez.A], () => ez.A.getPublishStatus(t)?.publishing === !0, [t]),
        [j, b] = i.useState(null),
        k = i.useCallback(
            (e) =>
                b(
                    (0, cu.E8)(e) || e === T.intl.string(P.default.mKK6wB) || e === T.intl.string(P.default.j8tmjK)
                        ? null
                        : e,
                ),
            [],
        ),
        w = null == h ? null : (0, cu.uc)(h),
        C = null != s,
        A = s ?? (n ? l : void 0),
        S = n || r || C || !0 === f;
    return (0, a.jsxs)("div", {
        className: cM.jf,
        children: [
            (0, a.jsxs)("div", {
                className: cM.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    S || o || x || v
                        ? (0, a.jsx)(ch, {
                              activity: d,
                              compacting: m,
                              saving: f,
                              restoring: r,
                              remixing: C,
                              recalling: o,
                              controlling: x,
                              publishPending: v && S,
                              publishing: v,
                              spoken: j,
                              onSpokenChange: k,
                          })
                        : null,
                    null != A ? (0, a.jsx)(cv, { startedAt: A }) : null,
                ],
            }),
            null != A ? (0, a.jsx)(cj, { startedAt: A }) : null,
            0 === p.length ? null : (0, a.jsx)(c_, { queued: p, className: u()(cM.BP, cM.A1) }),
            null == h || null == w
                ? null
                : (0, a.jsxs)("span", {
                      className: cM.BP,
                      children: [
                          (0, a.jsx)(y.E, {
                              tag: "span",
                              variant: "body-xs/medium",
                              color: "text-muted",
                              "aria-label": w.aria,
                              children: w.text,
                          }),
                          (0, a.jsx)(cS, { project: h }),
                      ],
                  }),
            "open" === g
                ? null
                : (0, a.jsx)(y.E, {
                      tag: "span",
                      variant: "body-xs/medium",
                      color: "failed" === g ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": T.intl.formatToPlainString(P.default["tCo+ZM"], { status: (0, cu.Db)(g) }),
                      "data-conjure-conn": !0,
                      "data-state": g,
                      className: cM.XF,
                      children: (0, cu.Db)(g),
                  }),
        ],
    });
}
var cP = n(698638),
    cT = n(608711);
let cL = [T.intl.string(P.default["9w+Chc"]), T.intl.string(P.default.WAvmdq), T.intl.string(P.default.SKsrzl)];
function c$(e) {
    var t, n;
    let l,
        r,
        s,
        o,
        u,
        {
            projectId: f,
            restoreState: h,
            onRestoreVersion: g,
            onImportProject: p,
            escapeScopeRef: x,
            visible: v = !0,
        } = e,
        j = (0, c.bG)([ri.A], () => ri.A.getMessages(f), [f]),
        b = (0, c.bG)([eG.Ay], () => eG.Ay.getConnState(f), [f]),
        k = (0, c.bG)([ri.A], () => ri.A.getProjectUsage(f), [f]),
        w = (0, c.bG)([ri.A], () => ri.A.getThinkingActivity(f), [f]),
        C = (0, c.bG)([ri.A], () => ri.A.isCompacting(f), [f]),
        A = (0, c.bG)([ri.A], () => ri.A.isSaving(f), [f]),
        S = (0, c.bG)([lD.A], () => lD.A.getModelSettings(f), [f]),
        N = i.useRef(null),
        I = i.useRef(null),
        E = i.useRef(null),
        _ = i.useRef(null),
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
                o = i.useCallback(() => {
                    ((s.current = !0), (t.current = !1), l(!1));
                }, []),
                u = i.useCallback(() => {
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
                    for (let e of ci) t.addEventListener(e, u, { passive: !0 });
                    return () => {
                        for (let e of ci) t.removeEventListener(e, u);
                    };
                }
            }, [e, u]);
            let h = i.useCallback(() => {
                let n = e.current;
                if (null == n) return;
                let r = n.getDistanceFromBottom(),
                    i = !s.current && r < 32 && m.current;
                t.current = i;
                let o = r > 1 || !m.current;
                (a((e) => (!o === e ? e : !o)), l((e) => (e === i ? e : i)));
            }, [e]);
            return {
                stickToBottomRef: t,
                pinned: n,
                atBottom: r,
                unpin: o,
                releasePinHold: u,
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
            (G(), E.current?.handleScroll());
            let e = _.current;
            null != e && (e.position = M.current ? null : (E.current?.snapshot() ?? null));
        }, [G, M]),
        K = i.useContext(Q.A) === f;
    i.useLayoutEffect(() => {
        if (!K) return;
        let e = { position: Y.A.getProjectView(f).chatScroll };
        return ((_.current = e), () => (0, Z.g7)(f, { chatScroll: e.position }));
    }, [K, f]);
    let H = i.useRef(!K);
    (i.useLayoutEffect(() => {
        if (H.current || !(0, tQ.i_)(j)) return;
        H.current = !0;
        let e = Y.A.getProjectView(f).chatScroll;
        null != e && E.current?.restore(e) !== !0 && null != _.current && (_.current.position = null);
    }, [j, f]),
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
        (0, rw.E1)(f, (0, tW.j)()));
    let V = (0, z.rt)(f),
        W = (function (e) {
            let t = (0, eB.Ay)(e),
                n = t?.guildId ?? null,
                l = (0, c.bG)([lr.A], () => (null == n ? null : (lr.A.getGuild(n)?.name ?? null))),
                [r, a] = i.useState(null),
                s = t?.missingSurface ?? null;
            return null == s || r === e
                ? null
                : {
                      message: T.intl.format("channel" === s ? P.default["1cm4fj"] : P.default.Lm7IRC, {
                          server: l ?? "",
                      }),
                      onDismiss: () => a(e),
                  };
        })(f),
        X = (function (e) {
            let t = (0, c.bG)([rv.A], () => rv.A.getSpendLimit(e), [e]);
            if (null == t) return null;
            let n = null == t.limitUsd ? null : rj.format(t.limitUsd);
            if ("blocked" === t.state) {
                let e = rx.A.getSubmitRequestURL();
                return {
                    blocked: !0,
                    message:
                        null == n
                            ? T.intl.format(P.default["bw/n4C"], { helpdeskURL: e })
                            : T.intl.format(P.default.GYqJXH, { limit: n, helpdeskURL: e }),
                };
            }
            if (null == t.limitUsd || null == n || t.limitUsd <= 0) return null;
            let l = Math.min(99, Math.floor((t.spentUsd / t.limitUsd) * 100));
            return { blocked: !1, message: T.intl.formatToPlainString(P.default.GHgG2B, { percent: l, limit: n }) };
        })(f),
        J =
            ((l = (0, c.bG)([l3.A], () => l3.A.getFailure(f))),
            (r = i.useCallback(() => (0, l4.CM)(f), [f])),
            null == l
                ? null
                : {
                      message: T.intl.format(P.default.Up6Ssw, { reason: l }),
                      retry: { text: T.intl.string(P.default["ywA+ET"]), onClick: r },
                  }),
        ee = (0, eV.E8)(f),
        et = (0, c.bG)([l3.A], () => l3.A.getSetupStartedAt(f), [f]),
        en = i.useCallback(
            (e, t) => {
                (0, eG.dv)(f, e, t);
            },
            [f],
        ),
        el = i.useCallback(
            (e, t, n) => {
                let l = n ?? en;
                0 === V.annotations.length
                    ? l(e, t)
                    : (l((0, l$.BL)({ annotations: V.annotations, metaComment: e, context: V.context }), t),
                      (0, z.mB)(f));
            },
            [V, en, f],
        ),
        er = i.useCallback(() => {
            (!(function (e) {
                let t = !1;
                for (let [n, l] of nm)
                    l.projectId === e &&
                        (l.job?.cancel(),
                        (0, eG.re)(e, l.nonce),
                        (function (e) {
                            let t = nm.get(e);
                            (nm.delete(e), nh(e, null), t?.thumbUrl != null && URL.revokeObjectURL(t.thumbUrl));
                        })(n),
                        (t = !0));
                return t;
            })(f) ||
                ri.A.isThinking(f)) &&
                (0, eG.fu)(f);
        }, [f]),
        ea = i.useCallback((e) => (0, np.RQ)(f, e.implementation_prompt), [f]),
        ei = i.useCallback((e) => (0, np.RQ)(f, e), [f]),
        [es, eo] = (function (e) {
            let [t, n] = i.useState(() => rA(e)),
                [l, r] = i.useState(e),
                a = l !== e,
                s = a ? rA(e) : t;
            return (a && (r(e), n(s)), [s, n]);
        })(f),
        eu = i.useCallback(() => en(T.intl.string(P.default["t5CN3+"])), [en]),
        ec = i.useCallback((e, t, n) => (0, np.RQ)(f, e, { clarificationAnswers: t, attachments: n }), [f]),
        ed = i.useCallback((e) => (0, lq.X)(f, e), [f]),
        em = i.useCallback((e) => (0, e5.vX)(f, e), [f]),
        ef = i.useCallback((e) => (0, e6.gn)(f, "chat", Array.from(e), em), [f, em]),
        eh = i.useCallback(() => (0, np.RQ)(f, T.intl.string(P.default.Zc7gML)), [f]),
        eg = h?.status === "restoring",
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
        [eC, eA] = i.useState(null),
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
                                summary: T.intl.string(P.default["o2++BO"]),
                                prompt: t.trim().slice(0, 4e3),
                            },
                            clearComposer: n,
                        }),
                    [e, r],
                ),
                o = i.useCallback(() => r(null), [r]),
                u = i.useCallback(
                    (e) => {
                        let t = l.current;
                        t?.request.id === e && (t.clearComposer(), r(null));
                    },
                    [r],
                );
            return { request: a?.request ?? null, open: s, close: o, sent: u };
        })(f),
        eN = ex?.appBuildRequest != null && (0, tQ.BL)(ex) && ex.appBuildRequest.id !== eC ? ex.appBuildRequest : null,
        eI = eS.request ?? (null == ek ? eN : null),
        eE = null == eS.request ? ek : null,
        e_ = null != eI && eI === eS.request,
        { close: eM, sent: eR } = eS,
        eP = eS.request?.id,
        eT = i.useCallback(() => {
            e_ ? eM() : null != eI && eA(eI.id);
        }, [eI, e_, eM]),
        eL = i.useCallback(
            (e) => {
                (null != eP && eR(eP),
                    (0, d.P0)({
                        text: T.intl.formatToPlainString(P.default.RZO35O, { names: e.map((e) => e.name).join(", ") }),
                        variant: "success",
                    }));
            },
            [eP, eR],
        ),
        e$ = (0, c.bG)([ra.A], () => ra.A.getSettings(f), [f]),
        [eD, eq] = i.useState(null),
        eF = rc(),
        eO =
            null != ex &&
            ((t = ex.id),
            (s = (0, l5.Mv)(j, e$?.secrets)),
            (o = rd(j)),
            j.some(
                (e) =>
                    "assistant" === e.role &&
                    e.id !== t &&
                    !!(0, tQ.BL)(e) &&
                    ((null != e.secretRequest && "open" === s.get(e.render_id)) ||
                        (null != e.settingsRequest && !o.has(e.id) && !rm(e.settingsRequest, e$, eF.has(e.id)))),
            )),
        ez =
            null != ex &&
            "assistant" === ex.role &&
            null != ex.settingsRequest &&
            null == ex.secretRequest &&
            (0, tQ.BL)(ex) &&
            ex.id !== eD &&
            ((n = ex.settingsRequest),
            (u = n.keys ?? []),
            null != e$ &&
                0 !== u.length &&
                u.every((e) => {
                    let t = e$.schema.find((t) => t.key === e);
                    return null != t && l6.has(t.type);
                })) &&
            re(ex.settingsRequest, e$) &&
            !eO
                ? ex
                : null,
        eU = null == eS.request ? ez : null,
        eK = eU?.settingsRequest ?? null,
        eH = i.useCallback(() => {
            null != ez && eq(ez.id);
        }, [ez]),
        eW = null != eK,
        [eX, eQ] = i.useState(null),
        eZ = e$?.secrets,
        eY = i.useMemo(() => (0, l5.Qr)(j, (0, l5.Mv)(j, eZ)), [j, eZ]),
        eJ = null != eY && eY.render_id !== eX ? eY : null,
        e0 = null == eE && null == eI ? eJ : null,
        e1 = i.useCallback(() => {
            null != eJ && eQ(eJ.render_id);
        }, [eJ]),
        [e2, e4] = i.useState(null),
        e8 = eE?.id ?? eI?.id ?? e0?.render_id ?? eU?.id,
        e9 = null != ek || null != eI || null != eJ || null != ez;
    i.useLayoutEffect(() => {
        let e = I.current?.getScrollerNode(),
            t = e2?.firstElementChild;
        if (null == e2 || null == e || !(0, e3.vq)(t, HTMLElement) || null == e8) return;
        function n() {
            M.current && I.current?.scrollToBottom();
        }
        let l = new ResizeObserver(() => {
            let l = e.getBoundingClientRect().bottom - e2.getBoundingClientRect().top - t.offsetTop;
            (e.style.setProperty("--custom-conjure-docked-card-inset", `${Math.max(0, Math.round(l))}px`), n());
        });
        return (
            l.observe(t),
            l.observe(e, { box: "border-box" }),
            () => {
                (l.disconnect(), e.style.removeProperty("--custom-conjure-docked-card-inset"), n());
            }
        );
    }, [e2, e8, I, M]);
    let te = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: (0, c.bG)([ri.A], () => ri.A.hasLoadedHistory(f), [f]),
            historyUnavailable: (0, c.bG)([ri.A], () => ri.A.isHistoryUnavailable(f), [f]),
            connState: b,
        }),
        tt = !(0, tQ.i_)(j),
        tn = "loading" === te && tt,
        tl = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < f.length; t++) e = (31 * e + f.charCodeAt(t)) % 0x7fffffff;
            return cL[e % cL.length];
        }, [f]),
        tr = ev ? T.intl.string(P.default.Zc7gML) : "greeting" === te && tt ? tl : null,
        ta = i.useMemo(() => {
            for (let e = j.length - 1; e >= 0; e--) {
                let t = j[e];
                if ("assistant" === t.role && !(0, tQ.BL)(t)) return t;
            }
        }, [j]),
        ti = null != ta,
        to = i.useMemo(() => j.filter((e) => "user" === e.role && "queued" === e.disposition), [j]),
        tu = null != ta ? (0, rb.S)(ta) : void 0,
        tc = ev && ep ? eh : void 0,
        td = i.useCallback(() => (0, np.RQ)(f, T.intl.string(P.default.EMgIuY)), [f]),
        [tm, tf] = i.useState(null),
        [th, tg] = i.useState(ti);
    (th !== ti && (tg(ti), ti || tf(null)),
        i.useEffect(() => {
            if (!ti) return;
            let e = I.current?.getScrollerNode(),
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
        tx = i.useMemo(() => (null != ta ? (0, tY.b9)(ta.steps) : ""), [ta]),
        tv = i.useMemo(() => (null != ta ? ((0, tX.lt)(ta.steps) ?? ta.todos) : void 0), [ta]),
        tj = ta?.provisionalTodo,
        tb = null != ta && tZ(ta),
        ty = i.useMemo(() => {
            var e;
            return null != ta ? ((e = ta.steps), rG((0, tX.Jf)(e, !0).tasks)) : void 0;
        }, [ta]);
    return (0, a.jsxs)("section", {
        ref: N,
        "data-conjure-chat": !0,
        className: cT.TE,
        children: [
            ep
                ? (0, a.jsx)(tV.A, {
                      title: T.intl.string(P.default.gy7byi),
                      description: T.intl.string(P.default["dkv/WO"]),
                      icons: cP.ir,
                      onDrop: ef,
                  })
                : null,
            (0, a.jsx)(nu, {
                onJumpToActivity: U,
                line: tx,
                placement: ti && "top" === tp ? "top" : null,
                todos: tv,
                todosLive: tb,
                provisionalTodo: tj,
                agents: ty,
            }),
            (0, a.jsxs)("div", {
                className: cT.JX,
                children: [
                    (0, a.jsx)(tB.Ch, {
                        ref: I,
                        onScroll: B,
                        scrollbarGutter: tn ? "both-edges" : "stable",
                        className: [cT.N$, L ? null : cT.hB, eW ? cT.J9 : null].filter(Boolean).join(" "),
                        children: (0, a.jsx)(ry.Fu.Provider, {
                            value: f,
                            children: (0, a.jsx)(co, {
                                projectId: f,
                                messages: j,
                                emptyState: te,
                                floatingSettingsMessageId: ez?.id,
                                floatingSecretRenderId: e0?.render_id,
                                liveClarificationId: eE?.id,
                                onPickIdea: ep ? ea : void 0,
                                onAskForIdeas: ep ? eu : void 0,
                                draftHasText: es,
                                onApprovePlan: ep ? td : void 0,
                                onRestoreVersion: eg || ti ? void 0 : g,
                                onCardReply: ep ? ei : void 0,
                                scrollerRef: I,
                                stickToBottomRef: M,
                                pinned: R,
                                onUnpin: $,
                                handleRef: E,
                                onShowsLatestChange: O,
                            }),
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: cT.NJ,
                        children: (0, a.jsx)(cR, {
                            projectId: f,
                            thinking: ti,
                            turnStartedAt: tu,
                            restoring: eg,
                            remixStartedAt: et,
                            recalling: tn,
                            thinkingActivity: w,
                            compacting: C,
                            saving: A,
                            projectUsage: k,
                            connState: b,
                            queued: to,
                        }),
                    }),
                    null == eE
                        ? null
                        : (0, a.jsx)("div", {
                              ref: e4,
                              className: eW ? `${cT.B5} ${cT.J9}` : cT.B5,
                              children: (0, a.jsx)(
                                  lL,
                                  { projectId: f, clarification: eE, onSubmit: ep ? ec : void 0, onDismiss: ew },
                                  eE.id,
                              ),
                          }),
                    null == eI
                        ? null
                        : (0, a.jsx)("div", {
                              ref: e4,
                              className: cT.B5,
                              children: (0, a.jsx)(
                                  nA,
                                  { projectId: f, request: eI, canSend: ep, onDismiss: eT, onSent: e_ ? eL : void 0 },
                                  eI.id,
                              ),
                          }),
                    e0?.secretRequest == null
                        ? null
                        : (0, a.jsx)("div", {
                              ref: e4,
                              className: cT.B5,
                              children: (0, a.jsx)(
                                  rr,
                                  {
                                      projectId: f,
                                      cardId: e0.render_id,
                                      request: e0.secretRequest,
                                      status: "open",
                                      onDismiss: e1,
                                  },
                                  e0.render_id,
                              ),
                          }),
                    null == eK
                        ? null
                        : (0, a.jsx)("div", {
                              ref: null == eE && null == eI ? e4 : void 0,
                              className: cT.B5,
                              children: (0, a.jsx)(
                                  rp,
                                  { askId: eU?.id, projectId: f, request: eK, onDismiss: eH },
                                  eU?.id,
                              ),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: cT.Jx,
                children: [
                    (0, a.jsx)(nu, {
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
                              className: cT.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, a.jsx)(y.E, {
                                      variant: "body-sm/medium",
                                      color: "text-default",
                                      children: T.intl.formatToPlainString(P.default["7b49dS"], {
                                          count: V.annotations.length,
                                      }),
                                  }),
                                  (0, a.jsx)(y.E, {
                                      variant: "body-xs/normal",
                                      color: "text-muted",
                                      children: T.intl.string(P.default["5zG+CR"]),
                                  }),
                                  (0, a.jsx)(m.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: T.intl.string(P.default["/zOv9+"]),
                                      onClick: () => (0, z.mB)(f),
                                  }),
                              ],
                          }),
                    null == ee ? null : (0, a.jsx)(l2, { pending: ee }, ee.publishTurnId),
                    null == J
                        ? null
                        : (0, a.jsx)("div", {
                              className: cT.qB,
                              children: (0, a.jsx)(tK.w, {
                                  type: "critical",
                                  role: "alert",
                                  message: J.message,
                                  action: J.retry,
                              }),
                          }),
                    null == W
                        ? null
                        : (0, a.jsxs)("div", {
                              className: cT.Db,
                              children: [
                                  (0, a.jsx)(tK.w, { type: "warning", role: "status", message: W.message }),
                                  (0, a.jsx)("div", {
                                      className: cT.jU,
                                      children: (0, a.jsx)(e7.m, {
                                          text: T.intl.string(T.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, a.jsx)(ts.K, {
                                              "aria-label": T.intl.string(T.t.WAI6xu),
                                              icon: tH.XSmallIcon,
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
                              className: cT.qB,
                              children: (0, a.jsx)(tK.w, {
                                  type: X.blocked ? "critical" : "warning",
                                  role: X.blocked ? "alert" : "status",
                                  message: X.message,
                              }),
                          }),
                    (0, a.jsx)(ou, {
                        projectId: f,
                        escapeScopeRef: x,
                        canSend: ep,
                        running: ti,
                        restoring: eg,
                        onSend: el,
                        hasPendingContext: V.annotations.length > 0,
                        onInterrupt: ep ? er : void 0,
                        onUploadFile: em,
                        onImport: p,
                        onSendToOtherProjects: e9 ? void 0 : eS.open,
                        onApprove: tc,
                        suggestion: tr,
                        questionOpen: e9,
                        secretPending: null != e0,
                        modelSettings: S,
                        onModelSettingsChange: ed,
                        onDraftHasTextChange: eo,
                        aiPaused: X?.blocked === !0,
                        visible: v,
                    }),
                ],
            }),
        ],
    });
}
var cD = n(761508),
    cq = n(209695),
    cF = n(207438),
    cO = n(683438),
    cG = n(721507);
function cz(e, t) {
    return String(e).padStart(t, "0");
}
function cU(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let n = Date.parse(e);
    if (Number.isNaN(n)) return null;
    let l = new Date(n),
        r = `${cz(l.getHours(), 2)}:${cz(l.getMinutes(), 2)}:${cz(l.getSeconds(), 2)}`;
    return "millis" === t ? `${r}.${cz(l.getMilliseconds(), 3)}` : r;
}
var cB = n(667931);
let cK = {
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
    cH = { running: "Running", ok: "Done", error: "Failed" };
function cV(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function cW(e) {
    var t;
    return (t = Math.round(e)) < 1e3 ? `${t}ms` : `${(t / 1e3).toFixed(1)}s`;
}
function cX(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function cQ(e) {
    return cW(e.count > 1 ? e.totalMs : e.end - e.start);
}
let cZ = ["Arguments", "Result", "Usage", "Details"];
function cY(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function cJ(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function c0(e) {
    let t = (0, cB.bM)(e)?.end;
    return null != t ? `${(t / 1e3).toFixed(2)}s` : (0, cB.lp)(e) ? "interrupted" : "still running";
}
function c1(e) {
    return [cU(new Date(e.started_at).toISOString()) ?? "", cX(e.spans.length), (0, cB.Sj)((0, cB.bM)(e)?.attrs)]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function c2(e) {
    let t = (0, cB.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let r of e.spans) {
        let { service: e, category: a } = (0, cB.N5)(r);
        (n.set(a, (n.get(a) ?? 0) + (t.get(r.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += c3(r, "in")),
                (l.output += c3(r, "out")),
                (l.cacheRead += c3(r, "cache_read")),
                (l.cacheWrite += c3(r, "cache_write")),
                (l.costUsd += c3(r, "cost_usd"))));
    }
    let r = cB.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: r, busyMs: r.reduce((e, t) => e + t.ms, 0), model: l };
}
function c3(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
var c4 = n(738188),
    c5 = n(430993),
    c7 = n(364840),
    c8 = n(224640),
    c9 = n(20742);
let c6 = { collapsed: new Set(), revealed: new Set() };
var de = n(872892);
let dt = {
    op: de.Q,
    model: de.i3,
    tool: de.dH,
    setup: de.kc,
    worktree: de.Qx,
    sandbox: de.QH,
    build: de.F1,
    platform: de.Op,
    other: de.fv,
};
function dn(e) {
    let { stats: t } = e,
        n = (function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      cX(t.calls, "model call"),
                      `${cV(t.input)} in`,
                      `${cV(t.output)} out`,
                      `${cV(t.cacheRead)} cache read`,
                      `${cV(t.cacheWrite)} cache write`,
                      cJ(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, a.jsxs)("div", {
        className: de.M1,
        children: [
            (0, a.jsx)("div", {
                className: de.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, a.jsx)(
                              "div",
                              {
                                  className: `${de.DJ} ${dt[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, a.jsx)("div", {
                className: de.o1,
                children: cB.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${cW(n)}`;
                    return (0, a.jsxs)(
                        "span",
                        {
                            className: de.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${de.nf} ${dt[e]}` }),
                                (0, a.jsx)(y.E, { variant: "body-xs/normal", color: "text-muted", children: cK[e] }),
                                null == l
                                    ? null
                                    : (0, a.jsx)(y.E, {
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
                : (0, a.jsx)(y.E, {
                      variant: "body-sm/normal",
                      color: "text-default",
                      tabularNumbers: !0,
                      children: n,
                  }),
        ],
    });
}
function dl(e) {
    return `conjure-perf-trace-${e}`;
}
function dr(e) {
    let { start: t, end: n, extent: l, barClass: r, duration: i } = e,
        s = (t / l) * 100,
        o = ((n - t) / l) * 100;
    return (0, a.jsxs)("div", {
        className: de.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(o) },
        children: [
            (0, a.jsx)("div", { className: r }),
            (0, a.jsx)(y.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${de.p0} ${s + o > 85 ? de.EU : de.jh}`,
                children: i,
            }),
        ],
    });
}
function da(e) {
    let { node: t, extent: n, collapsed: l, selected: r, onSelect: s, onToggle: o, onExpandSubtree: u } = e,
        c = t.children.length > 0,
        d = l ? t4.ChevronSmallRightIcon : eS.ChevronSmallDownIcon,
        m = i.useCallback(
            (e) => {
                (e.shiftKey && u(t.key), s(t.key));
            },
            [t.key, u, s],
        ),
        f = i.useCallback(
            (e) => {
                (e.stopPropagation(), e.shiftKey ? u(t.key) : o(t.key));
            },
            [t.key, u, o],
        );
    return (0, a.jsxs)(tJ.D, {
        tag: "div",
        role: "treeitem",
        id: dl(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !l : void 0,
        "aria-selected": r,
        className: `${de.$y} ${r ? de.wQ : ""}`,
        onClick: m,
        children: [
            (0, a.jsxs)("div", {
                className: de.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, a.jsx)(tJ.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: de.ai,
                              onClick: f,
                              children: (0, a.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, a.jsx)("span", { className: de.YJ }),
                    (0, a.jsx)(y.E, {
                        variant: "body-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: de.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, a.jsx)("span", { className: `${de.nf} ${dt[t.category]}` }),
                    (0, a.jsx)(y.E, {
                        variant: "body-sm/semibold",
                        color: "text-strong",
                        className: de.eu,
                        children: t.service,
                    }),
                    (0, a.jsx)(y.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        className: de.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, a.jsx)(y.E, {
                              variant: "body-xs/semibold",
                              color: "text-default",
                              className: de.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, a.jsx)(c4.WarningIcon, { size: "xs", color: "currentColor", className: de.ik })
                        : null,
                ],
            }),
            (0, a.jsx)(dr, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${de.M0} ${de.Nh}`
                    : t.running
                      ? `${de.M0} ${de.rF}`
                      : `${de.M0} ${dt[t.category]}`,
                duration: cQ(t),
            }),
        ],
    });
}
function di(e) {
    let { row: t, extent: n, selected: l, onReveal: r } = e;
    return (0, a.jsxs)(tJ.D, {
        tag: "div",
        role: "treeitem",
        id: dl(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": l,
        className: `${de.$y} ${l ? de.wQ : ""}`,
        onClick: () => r(t.parentKey),
        children: [
            (0, a.jsxs)("div", {
                className: de.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, a.jsx)("span", {
                        className: de.ai,
                        children: (0, a.jsx)(t4.ChevronSmallRightIcon, { size: "xs", color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", { className: de.U9 }),
                    (0, a.jsx)("span", { className: `${de.nf} ${de.dL}` }),
                    (0, a.jsx)(y.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        className: de.MQ,
                        children: cX(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, a.jsx)(dr, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${de.M0} ${de.ab} ${de.dL}`,
                duration: cW(t.totalMs),
            }),
        ],
    });
}
function ds(e) {
    let { node: t } = e;
    return null == t
        ? (0, a.jsx)(y.E, {
              variant: "body-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, a.jsxs)("div", {
              className: de._0,
              children: [
                  (0, a.jsxs)("div", {
                      className: de.TQ,
                      children: [
                          (0, a.jsx)("span", { className: `${de.nf} ${dt[t.category]}` }),
                          (0, a.jsx)(y.E, { variant: "body-sm/semibold", color: "text-strong", children: t.service }),
                          (0, a.jsx)(y.E, { variant: "body-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [cY("Start", `+${cW(e.start)}`), cY("Duration", cQ(e))];
                      e.count > 1
                          ? t.push(
                                cY("Calls", String(e.count)),
                                cY("Longest call", cW(e.maxMs)),
                                cY("Spread over", cW(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(cY("Self time", cW(e.selfMs)));
                      let n = e.span.waits_on;
                      null != n && t.push(cY("Waited on", `${n.span_name} in ${n.trace_name}`));
                      let l = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      (l.length > 0 && t.push(cY("Notes", l.join(", "))),
                          null != e.span.error && t.push(cY("Error", e.span.error)));
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
                              s = "cost_usd" === t ? cJ(Number(n)) : String(n);
                          r.set(l, [...(r.get(l) ?? []), cY(t.replace(/_/g, " "), s)]);
                      }
                      return [
                          { title: null, rows: t },
                          ...cZ.flatMap((e) => {
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
                                      : (0, a.jsx)(y.E, {
                                            variant: "body-xs/semibold",
                                            color: "text-strong",
                                            className: de.xd,
                                            children: t,
                                        }),
                                  n.map((e) => {
                                      let { label: t, value: n, block: l } = e;
                                      return (0, a.jsxs)(
                                          i.Fragment,
                                          {
                                              children: [
                                                  (0, a.jsx)(y.E, {
                                                      variant: "body-xs/semibold",
                                                      color: "text-muted",
                                                      children: t,
                                                  }),
                                                  l
                                                      ? (0, a.jsx)(y.E, {
                                                            variant: "mono-md/bold",
                                                            color: "text-default",
                                                            selectable: !0,
                                                            className: de.vl,
                                                            children: n,
                                                        })
                                                      : (0, a.jsx)(y.E, {
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
function du(e) {
    let { trace: t } = e,
        n = i.useMemo(() => c2(t), [t]);
    return (0, a.jsx)(dn, { stats: n });
}
function dc(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = i.useMemo(() => (null == e ? null : (0, cB.TK)(e)), [e]),
                [n, l] = i.useState(() => (null == t ? c6 : (0, cB.hB)(t))),
                [r, a] = i.useState(null),
                s = i.useRef(null == t ? new Set() : (0, cB.x7)(t));
            i.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, cB.x7)(t)), l((n) => (0, cB._0)(n, t, e)));
            }, [t]);
            let o = i.useMemo(() => (null == t ? [] : (0, cB.wu)(t, n)), [t, n]),
                u = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, cB.IE)(t, e);
                        null != n && l((e) => (0, cB.TN)(e, n));
                    },
                    [t],
                ),
                c = i.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, cB.IE)(t, e);
                        null != n && l((e) => (0, cB.H$)(e, n));
                    },
                    [t],
                ),
                m = i.useCallback(() => {
                    null != t && l((0, cB.vH)(t));
                }, [t]),
                f = i.useCallback(() => {
                    null != t && l((0, cB.rQ)(t));
                }, [t]),
                h = i.useCallback(() => {
                    null != t && l((0, cB.hB)(t));
                }, [t]),
                g = o.find((e) => e.key === r);
            return {
                rows: o,
                collapsed: n.collapsed,
                selectedKey: r,
                selected: g?.kind === "node" ? g.node : null,
                toggle: u,
                reveal: c,
                expandSubtree: d,
                select: a,
                expandAll: m,
                collapseAll: f,
                reset: h,
            };
        })(t),
        { rows: l, collapsed: r, selected: s, selectedKey: o, select: u, toggle: c, reveal: d, expandSubtree: f } = n,
        h = (0, cB.dj)(t),
        g = i.useMemo(() => (0, cB.nF)(h), [h]),
        p = g.length > 1 ? ((g[1] - g[0]) / h) * 100 : 100,
        x = i.useCallback(
            (e) => {
                let t,
                    n = l.findIndex((e) => e.key === o),
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
                    null != t && (u(t.key), document.getElementById(dl(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [r, f, d, l, u, o, c],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(c5.c, {
                children: [
                    (0, a.jsxs)("div", {
                        className: de.z,
                        children: [
                            (0, a.jsx)(y.E, {
                                variant: "body-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: c0(t),
                            }),
                            (0, a.jsx)(y.E, {
                                variant: "body-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: c1(t),
                            }),
                            null == t.started_by
                                ? null
                                : (0, a.jsx)(y.E, {
                                      variant: "body-sm/normal",
                                      color: "text-muted",
                                      children: `Started by ${t.started_by.trace_name}`,
                                  }),
                            0 === t.dropped
                                ? null
                                : (0, a.jsx)(y.E, {
                                      variant: "body-sm/normal",
                                      color: "text-feedback-warning",
                                      children: `${cX(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, a.jsx)(du, { trace: t }),
                    (0, a.jsxs)("div", {
                        className: de.KE,
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
                            (0, a.jsx)(y.E, {
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
                        "aria-activedescendant": null == o ? void 0 : dl(o),
                        className: de.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(p) },
                        onKeyDown: x,
                        children: [
                            (0, a.jsxs)("div", {
                                className: de.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: de.So,
                                        children: (0, a.jsx)(y.E, {
                                            variant: "body-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: de.c1,
                                        children: g.map((e) =>
                                            (0, a.jsx)(
                                                y.E,
                                                {
                                                    variant: "body-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${de.io} ${(e / h) * 100 > 85 ? de.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / h) * 100),
                                                    },
                                                    children: 0 === e ? "0" : cW(e),
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
                                          da,
                                          {
                                              node: e.node,
                                              extent: h,
                                              collapsed: r.has(e.key),
                                              selected: e.key === o,
                                              onSelect: u,
                                              onToggle: c,
                                              onExpandSubtree: f,
                                          },
                                          e.key,
                                      )
                                    : (0, a.jsx)(di, { row: e, extent: h, selected: e.key === o, onReveal: d }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(c7.j, { children: (0, a.jsx)(ds, { node: s }) }),
        ],
    });
}
function dd(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: r } = e,
        i = (0, c.bG)([uZ.A], () => uZ.A.getTimingTrace(l, r), [l, r]),
        s = i?.name ?? "Perf Trace";
    return (0, a.jsxs)(c8.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, a.jsx)(c9.rQ, { title: s }),
            null == i
                ? (0, a.jsx)(c5.c, {
                      children: (0, a.jsx)(y.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, a.jsx)(dc, { trace: i }),
        ],
    });
}
let dm = { running: de.Vf, ok: de.mo, error: de.Sr };
function df(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", { className: `${de.Om} ${dm[t]}`, role: "img", "aria-label": cH[t] });
}
function dh(e, t) {
    (0, H.qf)((n) => (0, a.jsx)(dd, { ...n, projectId: e, traceId: t }));
}
function dg(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        r = i.useCallback(() => dh(t, n.id), [t, n.id]);
    return (0, a.jsxs)(tJ.D, {
        className: de.nM,
        onClick: r,
        children: [
            (0, a.jsxs)("div", {
                className: de.sU,
                children: [
                    (0, a.jsx)(df, { status: (0, cB.lQ)(n) }),
                    (0, a.jsx)(y.E, {
                        variant: "body-sm/semibold",
                        color: "text-default",
                        className: de._k,
                        children: n.name,
                    }),
                    (0, a.jsx)(y.E, {
                        variant: "body-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: c0(n),
                    }),
                ],
            }),
            (0, a.jsx)(y.E, { variant: "body-xs/normal", color: "text-muted", tabularNumbers: !0, children: c1(n) }),
            null == l
                ? null
                : (0, a.jsx)(y.E, { variant: "body-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function dp(e) {
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
            (0, cG.o)(new Blob([e], { type: "application/json" }), `conjure-traces-${t}.json`).catch((e) => {
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
            return (0, a.jsx)(ts.K, {
                ...e,
                buttonRef: l,
                icon: il.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "More",
                "aria-haspopup": "menu",
                "aria-expanded": n,
            });
        },
    });
}
function dx(e) {
    let { projectId: t } = e,
        n = (0, c.yK)([uZ.A], () => uZ.A.getTimingTraces(t), [t]),
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
        o = i.useMemo(() => [...s].reverse(), [s]),
        u = i.useMemo(
            () =>
                (function (e) {
                    let t = e.map(c2);
                    function n(e) {
                        return t.reduce((t, n) => t + e(n), 0);
                    }
                    return {
                        categories: cB.BF.map((e) => ({
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
              className: de.Ie,
              children: [
                  (0, a.jsx)(y.E, { variant: "body-sm/medium", color: "text-default", children: "No traces yet" }),
                  (0, a.jsx)(y.E, {
                      variant: "body-sm/normal",
                      color: "text-muted",
                      children:
                          "Turns and project operations over 100ms show up here as they run. Periodic checks and live preview requests show up only when they take a second or fail.",
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: de.nd,
              children: [
                  (0, a.jsxs)("div", {
                      className: de.Ko,
                      children: [
                          (0, a.jsx)("div", {
                              className: de.fH,
                              children: (0, a.jsx)(cO.I, {
                                  query: l,
                                  onChange: r,
                                  onClear: () => r(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, a.jsx)(dp, { projectId: t, traces: s }),
                      ],
                  }),
                  (0, a.jsxs)(tB.Ch, {
                      className: de.XG,
                      children: [
                          (0, a.jsx)(dn, { stats: u }),
                          0 === o.length
                              ? (0, a.jsx)(y.E, {
                                    variant: "body-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, a.jsx)("ul", {
                                    className: de.p_,
                                    "aria-label": "Traces",
                                    children: o.map((e) =>
                                        (0, a.jsx)(
                                            "li",
                                            { children: (0, a.jsx)(dg, { projectId: t, trace: e }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function dv(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function dj(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function db(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function dy(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function dk(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function dw(e) {
    return T.intl.string("preview" === e ? P.default["2yLYlG"] : P.default.eiAi57);
}
let dC = ["all", "preview", "stable", "web"];
function dA(e) {
    switch (e.reason) {
        case "local":
            return T.intl.string(P.default.mUeKML);
        case "unconfigured":
            return T.intl.string(P.default.bGefb5);
        case "unauthorized":
            return T.intl.string(P.default.KLx6Bb);
        default:
            return null != e.detail
                ? T.intl.formatToPlainString(P.default.t09Q6q, { detail: e.detail })
                : T.intl.string(P.default["t+tG59"]);
    }
}
function dS(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : T.intl.formatToPlainString(P.default["XO/bN4"], {
              p50: dv(e.memory_p50_bytes ?? 0),
              p999: dv(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let dN = {
    db: () => P.default["7l+DFG"],
    db_preview: () => P.default.FAuffi,
    runtime: () => P.default["Gkl+ab"],
    runtime_preview: () => P.default.ynpJzv,
    bot: () => P.default["5/i0cj"],
    bot_preview: () => P.default.m2jsnw,
};
var dI = n(911608),
    dE = n(177427);
function d_(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: dE.KE,
        children: [
            (0, a.jsx)("div", {
                className: dE.IQ,
                children:
                    "loading" === n
                        ? (0, a.jsx)(k.y, { type: k.t.PULSING_ELLIPSIS })
                        : "failed" === n
                          ? (0, a.jsx)(y.E, {
                                variant: "body-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: T.intl.string(P.default.ZVByPX),
                            })
                          : null != t
                            ? (0, a.jsx)(y.E, {
                                  variant: "body-xs/normal",
                                  color: "text-muted",
                                  children: T.intl.formatToPlainString(P.default.INVO50, { time: dy(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(m.$, { variant: "secondary", size: "sm", text: T.intl.string(P.default.oKEgiu), onClick: l }),
        ],
    });
}
function dM(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: dE.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(y.E, { variant: "body-xs/semibold", color: "text-muted", className: dE.Gf, children: t }),
            n,
        ],
    });
}
function dR(e) {
    let { label: t, value: n, hint: l, critical: r = !1, icon: i, state: s } = e;
    return (0, a.jsxs)("div", {
        className: dE.N8,
        children: [
            (0, a.jsxs)("div", {
                className: dE.x7,
                children: [
                    (0, a.jsxs)("span", {
                        className: dE.kS,
                        children: [i, (0, a.jsx)(y.E, { variant: "body-sm/normal", color: "text-muted", children: t })],
                    }),
                    (0, a.jsxs)("span", {
                        className: dE.kS,
                        children: [
                            s,
                            (0, a.jsx)(y.E, {
                                variant: "body-sm/medium",
                                color: r ? "text-feedback-critical" : "text-default",
                                children: n,
                            }),
                        ],
                    }),
                ],
            }),
            null != l && (0, a.jsx)(y.E, { variant: "body-xs/normal", color: "text-muted", children: l }),
        ],
    });
}
function dP(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        i = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = i >= 0.9;
    return (0, a.jsxs)("div", {
        className: dE.N8,
        children: [
            (0, a.jsxs)("div", {
                className: dE.x7,
                children: [
                    (0, a.jsx)(y.E, { variant: "body-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(y.E, {
                        variant: "body-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, a.jsx)(dI.z, {
                value: 100 * i,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? dE.dh : void 0,
            }),
        ],
    });
}
function dT(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, a.jsx)(dR, {
            label: T.intl.string(P.default.SXP7pD),
            value: T.intl.string(P.default.E5hKVi),
            hint: dA(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, a.jsx)(dR, {
            label: T.intl.string(P.default.SXP7pD),
            value: "\u2014",
            hint: T.intl.string(P.default.AGvoMJ),
        });
    let l = dS(n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(dR, { label: T.intl.string(P.default["H/X+FI"]), value: dj(n.cpu_ms) }),
            null != l && (0, a.jsx)(dR, { label: T.intl.string(P.default.lmFmMO), value: l }),
        ],
    });
}
function dL(e) {
    let { analytics: t } = e,
        n = T.intl.string(P.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, a.jsx)(dM, {
            title: n,
            children: (0, a.jsx)(y.E, { variant: "body-sm/normal", color: "text-muted", children: dA(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? dN[t] : null) ? T.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, a.jsx)(dM, {
        title: n,
        children:
            0 === l.length
                ? (0, a.jsx)(y.E, {
                      variant: "body-sm/normal",
                      color: "text-muted",
                      children: T.intl.string(P.default.AGvoMJ),
                  })
                : l.map((e) => {
                      let { object: t, label: n } = e;
                      return (0, a.jsx)(
                          dR,
                          {
                              label: n,
                              value: T.intl.formatToPlainString(P.default["w/2voO"], { cpu: dj(t.cpu_ms) }),
                              hint: dS(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var d$ = n(678708),
    dD = n(414499),
    dq = n(714800),
    dF = n(81466),
    dO = n(424383),
    dG = n(664121),
    dz = n(816943),
    dU = n(268791),
    dB = n(514042),
    dK = n(872351),
    dH = n(708988),
    dV = n(150934),
    dW = n(417270);
let dX = "Restart Agent",
    dQ = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
function dZ(e) {
    return null != e && "" !== e ? e.slice(0, 12) : "None";
}
function dY(e, t) {
    return { label: e, value: null != t && "" !== t ? dy(t) : "Unknown", icon: "calendar" };
}
function dJ(e) {
    for (let [t, n] of [
        ["GB", 1e9],
        ["MB", 1e6],
        ["KB", 1e3],
    ])
        if (e >= n) return `${Number((e / n).toFixed(1))} ${t}`;
    return `${e} B`;
}
function d0(e, t, n, l) {
    let [r, a] = dQ[n.status];
    return { label: e, value: `${dJ(n.bytes)} of ${dJ(n.max)} \xb7 ${r}`, hint: l, icon: t, state: a };
}
function d1(e) {
    if (null == e) return { label: "Last Save", value: "None since this agent instance started", icon: "save" };
    let t = dy(e.at);
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
let d2 = { main: "Main vs Remote", wip: "WIP vs Remote" };
function d3(e) {
    let t = `container ${dZ(e.local)} \xb7 remote ${dZ(e.remote)}`,
        n = e.ahead ?? 0,
        l = e.behind ?? 0,
        r = { label: d2[e.ref], icon: "remote", hint: t };
    switch (e.state) {
        case "in_sync":
            return { ...r, value: "In Sync", state: "ok" };
        case "ahead":
            return { ...r, value: `${db(n)} Ahead`, hint: `${t} \xb7 not pushed yet`, state: "ahead" };
        case "behind":
            return { ...r, value: `${db(l)} Behind`, state: "behind" };
        case "diverged":
            return { ...r, value: `Diverged (${db(n)} Ahead, ${db(l)} Behind)`, state: "error" };
        case "not_fetched":
            return { ...r, value: "Behind", hint: `${t} \xb7 the remote head isn't in the container`, state: "behind" };
        case "missing_remote":
            return { ...r, value: "Missing on Remote", state: "error" };
        case "missing_local":
            return { ...r, value: "Missing in Container", state: "warning" };
    }
}
let d4 = ["main", "wip"];
var d5 = n(400154);
let d7 = {
        checkout: d$.FolderIcon,
        edit: p.PencilIcon,
        remote: dD.CloudIcon,
        commits: dq.ListNumberedIcon,
        calendar: dF.CalendarIcon,
        save: dO.SaveIcon,
        objects: dG.ServerIcon,
        download: dz.CloudDownloadIcon,
        size: dU.SpeedometerIcon,
        file: dB.FileIcon,
    },
    d8 = {
        ok: [l9.CircleCheckIcon, th.A.colors.ICON_FEEDBACK_POSITIVE],
        warning: [c4.WarningIcon, th.A.colors.ICON_FEEDBACK_WARNING],
        error: [sE.CircleXIcon, th.A.colors.ICON_FEEDBACK_CRITICAL],
        ahead: [dK.ArrowSmallUpIcon, th.A.colors.ICON_MUTED],
        behind: [dH.ArrowSmallDownIcon, th.A.colors.ICON_MUTED],
    };
function d9(e) {
    let { projectId: t } = e,
        { state: n } = {
            state: (0, c.bG)([uZ.A], () => uZ.A.getGitInfoState(t), [t]),
            load: i.useCallback(() => (0, cF.DK)(t), [t]),
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
                    `Updated ${dy(r)}`,
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
    return (0, a.jsxs)(dM, {
        title: "Git",
        children: [
            (0, a.jsx)("div", {
                className: d5.Lj,
                children:
                    "" !== l.line &&
                    (0, a.jsx)(y.E, {
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
                    if (!e.running || null != e.localError) return [d1(e.lastSave)];
                    if (!e.checkout)
                        return [
                            { label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" },
                            d1(e.lastSave),
                        ];
                    let l = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
                    void 0 !== e.dirtyFiles &&
                        l.push({
                            label: "Uncommitted Files",
                            value: null == e.dirtyFiles ? "Unknown" : db(e.dirtyFiles),
                            hint: null == e.dirtyFiles ? "git status didn't finish in time." : void 0,
                            icon: "edit",
                        });
                    let r = d4.flatMap((t) => e.comparisons?.find((e) => e.ref === t) ?? []);
                    (r.length > 0
                        ? l.push(...r.map(d3))
                        : l.push(
                              { label: "Main", value: dZ(e.heads.main), icon: "remote" },
                              { label: "WIP", value: dZ(e.heads.wip), icon: "remote" },
                          ),
                        l.push(
                            { label: "Commits", value: null != e.commits ? db(e.commits) : "Unknown", icon: "commits" },
                            dY("Oldest Commit", e.oldest),
                            dY("Newest Commit", e.newest),
                            d1(e.lastSave),
                        ),
                        null != e.objects &&
                            l.push(
                                ((n = 1 === (t = e.objects).packs ? "1 pack" : `${db(t.packs)} packs`),
                                {
                                    label: "Objects",
                                    value: `${db(t.loose)} loose (${dv(t.looseBytes)}) \xb7 ${db(t.packed)} packed in ${n} (${dv(t.packBytes)})`,
                                    hint: t.garbage > 0 ? `${db(t.garbage)} garbage files` : void 0,
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
                                      value: `Yes \xb7 ${db(e.missingObjects)} not downloaded`,
                                      hint: "Fetched on demand; this read never fetches.",
                                  }
                            : { ...t, value: "No" };
                    })(e);
                    return (
                        null != a && l.push(a),
                        null != e.localBytes &&
                            l.push(
                                d0(
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
                                  d0("Largest File", "file", e.largestFile, "Largest file version in the local copy."),
                              ),
                        l
                    );
                })(n.info).map((e) => {
                    let { label: t, value: n, hint: l, icon: r, state: i } = e,
                        s = d7[r],
                        [o, u] = null != i ? d8[i] : [null, void 0];
                    return (0, a.jsx)(
                        dR,
                        {
                            label: t,
                            value: n,
                            hint: l,
                            critical: "error" === i,
                            icon: (0, a.jsx)(s, { size: "xs", color: th.A.colors.ICON_MUTED }),
                            state: null != o ? (0, a.jsx)(o, { size: "xs", color: u }) : void 0,
                        },
                        t,
                    );
                }),
        ],
    });
}
function d6(e) {
    let { projectId: t } = e,
        {
            state: n,
            busy: l,
            clearAlarm: r,
            setClearAlarm: s,
            confirmCopy: o,
            restart: u,
        } = (function (e) {
            let t = (0, c.bG)([uZ.A], () => uZ.A.getRestartAgentState(e), [e]),
                [n, l] = i.useState(!1),
                r = "restarting" === t.phase ? t.startedAt : null,
                a = "restarted" === t.phase ? t.instanceSince : null,
                s = i.useRef(a);
            (i.useEffect(() => {
                null != a && a !== s.current && ((s.current = a), (0, cF.DK)(e));
            }, [e, a]),
                i.useEffect(() => {
                    if (null == r) return;
                    function t() {
                        let t = uZ.A.getInstancePollRequestedAt(e);
                        (null != t && Date.now() - t < 1e4) || (0, cF.gX)(e);
                    }
                    t();
                    let n = setInterval(t, 2e3),
                        l = setTimeout(
                            () =>
                                ur.h.dispatch({
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
            let o = i.useCallback(() => (0, cF.VW)(e, n), [e, n]);
            return {
                state: t,
                busy: "pending" === t.phase || "restarting" === t.phase,
                clearAlarm: n,
                setClearAlarm: l,
                confirmCopy: {
                    title: "Restart Agent?",
                    body: `Ends this project's agent instance; the next request starts a new one. Lost: in-memory state and any running turn. Kept: saved data (conversation, settings, storage) and the container disk. ${n ? "The pending alarm is cleared, so scheduled wakeups wait until something sets it again." : "The pending alarm is kept."}`,
                    confirm: dX,
                },
                restart: o,
            };
        })(t),
        d = i.useCallback(() => {
            (0, _.A)({ title: o.title, subtitle: o.body, confirmText: o.confirm, variant: "critical", onConfirm: u });
        }, [o, u]);
    return (0, a.jsxs)("div", {
        className: d5.Lj,
        children: [
            (0, a.jsxs)("div", {
                className: d5.nM,
                children: [
                    (0, a.jsx)(dV.S, {
                        label: "Also Clear Alarm",
                        description: "Scheduled wakeups wait until something sets the alarm again.",
                        checked: r,
                        onChange: s,
                        disabled: l,
                    }),
                    (0, a.jsx)(m.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        icon: dW.RetryIcon,
                        text: dX,
                        loading: l,
                        disabled: l,
                        onClick: d,
                    }),
                ],
            }),
            (0, a.jsx)(y.E, {
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
                            return `Restarted \xb7 new instance since ${dy(e.instanceSince)}`;
                        case "failed":
                            return `Failed: ${e.reason} \xb7 ${dy(e.observedAt)}`;
                    }
                })(n),
            }),
        ],
    });
}
function me(e, t) {
    return (0, a.jsx)(dR, {
        label: e,
        value: T.intl.formatToPlainString(P.default.yHJxuP, { count: db((0, cy.aM)(t)) }),
        hint: `${db(t.input_tokens)} in \xb7 ${db(t.output_tokens)} out \xb7 ${db(t.cache_read_input_tokens)} cache read`,
    });
}
function mt(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        u,
        d,
        f,
        h,
        { projectId: g, status: p, fetchState: x, onRefresh: v } = e,
        {
            lastTurn: j,
            lastCompaction: b,
            lastDecline: k,
            forceState: w,
            restartState: C,
            turnRunning: A,
            handleForceCompaction: S,
            handleForceCompactionOverride: N,
            handleRestartWorkspace: I,
            lifetime: E,
            limits: _,
            session: M,
            contextCeiling: R,
        } = ((t = (0, c.bG)([uZ.A], () => uZ.A.getLastTurnUsage(g), [g])),
        (n = (0, c.bG)([uZ.A], () => uZ.A.getLastCompaction(g), [g])),
        (l = (0, c.bG)([uZ.A], () => uZ.A.getLastCompactionDecline(g), [g])),
        (r = (0, c.bG)([uZ.A], () => uZ.A.getForceCompactionState(g), [g])),
        (s = (0, c.bG)([uZ.A], () => uZ.A.getSandboxRestartState(g), [g])),
        (o = (0, c.bG)([ri.A], () => ri.A.isThinking(g), [g])),
        (u = i.useCallback(() => (0, cF.Lj)(g), [g])),
        (d = i.useCallback(() => (0, cF.Lj)(g, !0), [g])),
        (f = i.useCallback(() => (0, cF.bq)(g), [g])),
        (h = p?.agent?.limits ?? null),
        {
            lastTurn: t,
            lastCompaction: n,
            lastDecline: l,
            forceState: r,
            restartState: s,
            turnRunning: o,
            handleForceCompaction: u,
            handleForceCompactionOverride: d,
            handleRestartWorkspace: f,
            lifetime: p?.agent?.lifetime ?? null,
            limits: h,
            session: p?.agent?.session ?? null,
            contextCeiling: n?.promptCeiling ?? h?.context_window_tokens ?? null,
        });
    return (0, a.jsxs)("div", {
        className: d5.Mf,
        children: [
            (0, a.jsx)(d_, { generatedAt: p?.generated_at ?? null, fetchState: x, onRefresh: v }),
            (0, a.jsx)(dM, {
                title: T.intl.string(P.default.JghNal),
                children:
                    null == E
                        ? (0, a.jsx)(y.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: T.intl.string(P.default.s0U5Fv),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(dR, {
                                      label: T.intl.string(P.default["9nqym2"]),
                                      value: db((0, cy.a7)(E.cost_usd)),
                                      hint: T.intl.formatToPlainString(P.default.NCdUIh, { count: db(E.turns) }),
                                  }),
                                  me(T.intl.string(P.default.xtxP0e), E.orchestrator),
                                  me(T.intl.string(P.default["9Sj3SX"]), E.codegen),
                                  me(T.intl.string(P.default.ANCEo3), (0, cy.wU)(E.compaction)),
                                  p?.agent?.outcomes != null &&
                                      Object.keys(p.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(dR, {
                                          label: T.intl.string(P.default.SQHm7C),
                                          value: Object.entries(p.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${db(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, a.jsx)(dM, {
                title: T.intl.string(P.default.dZHPE5),
                children:
                    null == j
                        ? (0, a.jsx)(y.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: T.intl.string(P.default.DfVjal),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  me(T.intl.string(P.default["7X3i9d"]), j.total),
                                  (0, a.jsx)(dR, {
                                      label: T.intl.string(P.default["8OUg09"]),
                                      value: `${Math.round((j.cache_hit_rate ?? (0, cy.CA)(j.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(dM, {
                title: T.intl.string(P.default.NbRk9a),
                children: [
                    null != b && null != R
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(dP, {
                                      label: T.intl.string(P.default.Kw5wiQ),
                                      used: b.tokensAfter,
                                      max: R,
                                      formatValue: db,
                                  }),
                                  (0, a.jsx)(dR, {
                                      label: T.intl.string(P.default.mRbSns),
                                      value: `${db(b.tokensBefore)} \u{2192} ${db(b.tokensAfter)}`,
                                      hint: T.intl.formatToPlainString(P.default.Vq3skS, {
                                          count: db(b.retainedMessages),
                                          time: dy(b.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(y.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children:
                                  null != R
                                      ? T.intl.formatToPlainString(P.default.GMLCNv, { ceiling: db(R) })
                                      : T.intl.string(P.default.s0U5Fv),
                          }),
                    null != k &&
                        (0, a.jsx)(dR, {
                            label: T.intl.string(P.default["4BX5KK"]),
                            value: `${db(k.projected)} / ${db(k.threshold)}`,
                            critical: !0,
                            hint: T.intl.formatToPlainString(P.default["6ngCax"], { time: dy(k.observedAt) }),
                        }),
                    (0, a.jsxs)("div", {
                        className: d5.Lj,
                        children: [
                            (0, a.jsx)(m.$, {
                                variant: "secondary",
                                size: "sm",
                                text: T.intl.string(P.default["1EiJeb"]),
                                disabled: "pending" === w,
                                onClick: S,
                            }),
                            (0, a.jsx)(y.E, {
                                variant: "body-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof w && "compacted" !== w.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return T.intl.string(P.default.wox6Ev);
                                    if ("pending" === e) return T.intl.string(P.default.OcPHQ1);
                                    let t = dy(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return T.intl.formatToPlainString(P.default.BhRjZZ, { time: t });
                                    let n =
                                        "declined" === e.outcome
                                            ? P.default["o/FKzF"]
                                            : "busy" === e.outcome
                                              ? P.default.YZb4hK
                                              : P.default.ZoUSVK;
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
                                            text: T.intl.string(P.default.ZxG2AI),
                                            onClick: N,
                                        }),
                                        (0, a.jsx)(y.E, {
                                            variant: "body-xs/normal",
                                            color: "text-muted",
                                            children: T.intl.string(P.default.V73vdN),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: d5.Lj,
                        children: [
                            (0, a.jsx)(m.$, {
                                variant: "secondary",
                                size: "sm",
                                text: T.intl.string(P.default["5qCjBu"]),
                                loading: "pending" === C,
                                disabled: "pending" === C || A,
                                onClick: I,
                            }),
                            (0, a.jsx)(y.E, {
                                variant: "body-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof C && "restarted" !== C.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return T.intl.string(P.default.mlok8D);
                                    if ("pending" === e) return T.intl.string(P.default["1ugSyK"]);
                                    let t = dy(e.observedAt);
                                    return T.intl.formatToPlainString(
                                        "restarted" === e.outcome ? P.default["76mfqO"] : P.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(C),
                            }),
                        ],
                    }),
                    (0, a.jsx)(d6, { projectId: g }),
                ],
            }),
            (0, a.jsx)(d9, { projectId: g }),
            (null != M || p?.analytics != null) &&
                (0, a.jsxs)(dM, {
                    title: T.intl.string(P.default.EsSzCS),
                    children: [
                        null != M &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(dR, {
                                        label: T.intl.string(P.default.CLXHAs),
                                        value: dy(M.instance_since),
                                        hint: T.intl.string(P.default.UCwUEX),
                                    }),
                                    (0, a.jsx)(dR, { label: T.intl.string(P.default["8V8e1Z"]), value: db(M.sockets) }),
                                    (0, a.jsx)(dR, {
                                        label: T.intl.string(P.default["4pBzYW"]),
                                        value: M.turn_inflight
                                            ? T.intl.string(P.default.Wv025I)
                                            : T.intl.string(P.default["7/lsFY"]),
                                    }),
                                    M.queued_messages > 0 &&
                                        (0, a.jsx)(dR, {
                                            label: T.intl.string(P.default["3oUYnv"]),
                                            value: db(M.queued_messages),
                                        }),
                                ],
                            }),
                        p?.analytics != null && (0, a.jsx)(dT, { analytics: p.analytics }),
                    ],
                }),
            null != _ &&
                (0, a.jsxs)(dM, {
                    title: T.intl.string(P.default["LEIhp/"]),
                    children: [
                        (0, a.jsx)(dR, {
                            label: T.intl.string(P.default.IlDBN3),
                            value: db(_.max_subagent_iterations),
                        }),
                        (0, a.jsx)(dR, {
                            label: T.intl.string(P.default["ZdzKR+"]),
                            value: T.intl.formatToPlainString(P.default.yHJxuP, { count: db(_.context_window_tokens) }),
                        }),
                        (0, a.jsx)(dR, {
                            label: T.intl.string(P.default.cIhN2W),
                            value: T.intl.formatToPlainString(P.default.yHJxuP, {
                                count: db(_.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(dR, {
                            label: T.intl.string(P.default["+fOn/q"]),
                            value: db(_.max_user_message_chars),
                        }),
                        (0, a.jsx)(dR, { label: T.intl.string(P.default.kIHga0), value: db(_.max_build_attempts) }),
                        (0, a.jsx)(dR, { label: T.intl.string(P.default.Iw03yW), value: db(_.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var mn = n(237528),
    ml = n(629584),
    mr = n(531893);
function ma(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: mr.ut,
              children: (0, a.jsx)(y.E, {
                  variant: "body-xs/normal",
                  color: "text-feedback-critical",
                  children: T.intl.string(P.default.h1SE6R),
              }),
          });
}
function mi(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: mr.qf,
              children: [
                  (0, a.jsx)(y.E, {
                      variant: "body-sm/medium",
                      color: "text-default",
                      children: T.intl.string(P.default.h1SE6R),
                  }),
                  (0, a.jsx)(y.E, {
                      variant: "body-xs/normal",
                      color: "text-muted",
                      children: T.intl.string(P.default["8SErdg"]),
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: mr.qf,
              children: [
                  (0, a.jsx)(y.E, { variant: "body-sm/medium", color: "text-default", children: n }),
                  (0, a.jsx)(y.E, { variant: "body-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function ms(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: mr.ps,
              children: (0, a.jsx)(y.E, {
                  variant: "body-xs/normal",
                  color: "text-muted",
                  children: T.intl.string(P.default.V7Ri8H),
              }),
          })
        : null;
}
var mo = n(109079);
let mu = i.memo(function (e) {
    var t;
    let { entry: n, showSource: l } = e,
        [r, s] = i.useState(!1),
        o = i.useId(),
        u = i.useMemo(
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
        className: mo.vK,
        children: [
            (0, a.jsx)(y.E, {
                tag: "span",
                variant: "body-xs/normal",
                color: "text-subtle",
                className: mo.Mt,
                selectable: !0,
                children: cU(n.ts) ?? n.ts,
            }),
            (0, a.jsx)(y.E, {
                tag: "span",
                variant: "footnote/semibold",
                color:
                    "error" === (t = n.level)
                        ? "text-feedback-critical"
                        : "warn" === t
                          ? "text-feedback-warning"
                          : "text-muted",
                className: mo.dm,
                children: n.level,
            }),
            (0, a.jsxs)("div", {
                className: mo.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, a.jsx)("span", { className: mo.Cq, children: (0, a.jsx)(mn.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, a.jsx)("span", {
                            className: mo.Cq,
                            title: n.build ?? void 0,
                            children: (0, a.jsx)(mn.v, { text: T.intl.string(P.default.TrC9c8), variant: "redLight" }),
                        }),
                    null != u
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  "" !== u.prefix &&
                                      (0, a.jsxs)(y.E, {
                                          tag: "span",
                                          variant: "body-xs/normal",
                                          color: c,
                                          selectable: !0,
                                          children: [u.prefix, " "],
                                      }),
                                  (0, a.jsxs)(tJ.D, {
                                      className: mo.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": o,
                                      "aria-label": T.intl.string(P.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          r
                                              ? (0, a.jsx)(eS.ChevronSmallDownIcon, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, a.jsx)(t4.ChevronSmallRightIcon, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                }),
                                          (0, a.jsxs)(y.E, {
                                              tag: "span",
                                              variant: "body-xs/medium",
                                              color: "none",
                                              children: [
                                                  u.marker,
                                                  " ",
                                                  T.intl.formatToPlainString(
                                                      "[\u2026]" === u.marker ? P.default.kUhyUv : P.default["N+fphl"],
                                                      { count: u.size },
                                                  ),
                                              ],
                                          }),
                                      ],
                                  }),
                                  r &&
                                      (0, a.jsx)(y.E, {
                                          tag: "div",
                                          variant: "body-xs/normal",
                                          color: c,
                                          className: mo.dF,
                                          selectable: !0,
                                          id: o,
                                          children: u.pretty,
                                      }),
                              ],
                          })
                        : (0, a.jsx)(y.E, {
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
function mc(e) {
    let { projectId: t } = e,
        n = (0, c.bG)([cq.A], () => cq.A.getLogs(t), [t]),
        l = (0, c.bG)([cq.A], () => cq.A.getHistoryState(t, "logs")),
        [r, s] = i.useState("all"),
        [o, u] = i.useState(""),
        d = i.useMemo(() => {
            let e;
            return (
                (e = o.trim().toLowerCase()),
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
        }, [n, r, o]),
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
                dC.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return dw(e);
                            case "web":
                                return T.intl.string(P.default.IVzfVV);
                            default:
                                return T.intl.string(P.default["Um1/8L"]);
                        }
                    })(e),
                })),
            [],
        );
    return (0, a.jsxs)("div", {
        className: mo.$F,
        children: [
            (0, a.jsxs)("div", {
                className: mo.y4,
                children: [
                    (0, a.jsx)(ml.I, {
                        look: "pill",
                        "aria-label": T.intl.string(P.default.MhvyUU),
                        options: g,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: mo.KT,
                        children: (0, a.jsx)(cO.I, {
                            query: o,
                            onChange: u,
                            onClear: () => u(""),
                            size: "sm",
                            placeholder: T.intl.string(P.default["m2+37Y"]),
                            "aria-label": T.intl.string(P.default["m2+37Y"]),
                        }),
                    }),
                ],
            }),
            n.length > 0 && (0, a.jsx)(ma, { state: l }),
            (0, a.jsxs)(tB.Ch, {
                ref: m,
                onScroll: h,
                overflow: "auto",
                className: mo.sx,
                children: [
                    (0, a.jsx)(ms, { state: l }),
                    0 === n.length
                        ? (0, a.jsx)(mi, {
                              state: l,
                              emptyTitle: T.intl.string(P.default.S7qlPG),
                              emptyBody: T.intl.string(P.default.nD0S9z),
                          })
                        : 0 === d.length
                          ? (0, a.jsx)(y.E, {
                                variant: "body-xs/normal",
                                color: "text-muted",
                                children: T.intl.string(P.default["4SIdrX"]),
                            })
                          : d.map((e) => (0, a.jsx)(mu, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function md(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, a.jsx)(i.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, a.jsx)(i.Fragment, { children: r("stable", l) }, "stable")),
        (0, a.jsx)(dM, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, a.jsx)(y.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: T.intl.string(P.default.umcjif),
                      }),
        })
    );
}
function mm(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(dR, {
                      label: T.intl.formatToPlainString(P.default["01ZMS4"], { env: dw(n) }),
                      value: ((t = l.connected), T.intl.string(t ? P.default.Wv025I : P.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(dR, {
                      label: T.intl.string(P.default["z1dh+F"]),
                      value: db(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${dy(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(dR, { label: T.intl.string(P.default.Iz5GnJ), value: db(l.guild_count) }),
                  (0, a.jsx)(dR, {
                      label: T.intl.string(P.default["7UqtNv"]),
                      value: db(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? T.intl.formatToPlainString(P.default.MasSly, {
                                    code: l.last_close_code,
                                    time: dy(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(dR, {
                          label: T.intl.string(P.default["x3+JXJ"]),
                          value: db(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(dR, { label: dw(n), value: T.intl.string(P.default.lTHQss) });
}
function mf(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, a.jsx)(dR, {
        label: dw(t),
        value: T.intl.formatToPlainString(P.default["Xq+wHT"], {
            requests: db(n.requests),
            failures: db(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? T.intl.formatToPlainString(P.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: dy(n.last_failure.at),
                  })
                : T.intl.formatToPlainString(P.default["7KlGT6"], { time: dy(n.since) }),
    });
}
function mh(e) {
    let { env: t, runtime: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(dR, {
                label: T.intl.formatToPlainString(P.default["92gVTm"], { env: dw(t) }),
                value: db(n.connections),
            }),
            n.schedules.map((e) =>
                (0, a.jsx)(
                    dR,
                    {
                        label: T.intl.formatToPlainString(P.default.Dafaco, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? T.intl.formatToPlainString(P.default.ologm6, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? T.intl.formatToPlainString(P.default.wxAWNv, { time: dy(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function mg(e) {
    let { env: t, metrics: n } = e;
    return (0, a.jsx)(dR, {
        label: dw(t),
        value: T.intl.formatToPlainString(P.default.suAOj9, { calls: db(n.calls), errors: db(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function mp(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, a.jsx)(dM, {
            title: t,
            children: (0, a.jsx)(y.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children: T.intl.string(P.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        i = n.cpu_ms_total > 0;
    return (0, a.jsxs)(dM, {
        title: t,
        children: [
            (0, a.jsx)(dR, {
                label: T.intl.string(P.default.xtD4Zp),
                value: db(n.requests),
                hint: T.intl.formatToPlainString(P.default["7KlGT6"], { time: dy(n.since) }),
            }),
            (0, a.jsx)(dR, { label: T.intl.string(P.default.gfRhR3), value: db(n.errors), critical: n.errors > 0 }),
            i
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(dP, {
                              label: T.intl.string(P.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: dj,
                          }),
                          (0, a.jsx)(dR, {
                              label: T.intl.string(P.default.mSKImM),
                              value: dj(r),
                              hint: T.intl.formatToPlainString(P.default.JqMU05, {
                                  total: dj(n.cpu_ms_total),
                                  wall: dj(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(dR, {
                      label: T.intl.string(P.default.LEJ5r3),
                      value: T.intl.string(P.default["2Ekb2b"]),
                      hint: T.intl.string(P.default.G0aq7i),
                  }),
            !i &&
                n.wall_ms_total > 0 &&
                (0, a.jsx)(dR, { label: T.intl.string(P.default.xvmL1D), value: dj(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, a.jsx)(dR, { label: T.intl.string(P.default["4sQYwH"]), value: db(n.exceeded_cpu), critical: !0 }),
            (0, a.jsx)(dR, {
                label: T.intl.string(P.default.bQenOy),
                value: db(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: T.intl.formatToPlainString(P.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, a.jsx)(dR, { label: T.intl.string(P.default.xgpn4Y), value: dk(n.build) }),
        ],
    });
}
function mx(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        o = r
            ? [{ key: "shared", label: T.intl.string(P.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: T.intl.string(P.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: T.intl.string(P.default.eiAi57), metrics: n },
              ];
    return (0, a.jsx)(dM, {
        title: T.intl.string(P.default.mRt7MW),
        children: o.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, a.jsx)(dR, { label: n, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)(dR, {
                                  label: T.intl.formatToPlainString(P.default.u7kJJ4, { env: n }),
                                  value: dv(l.r2_bytes),
                                  hint: T.intl.formatToPlainString(
                                      l.r2_truncated ? P.default.lH0oQw : P.default.m9h02S,
                                      { count: db(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, a.jsx)(dP, {
                                      label: T.intl.formatToPlainString(P.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: dv,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function mv(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: d5.Mf,
        children: [
            (0, a.jsx)(d_, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(mp, {
                            title: T.intl.string(P.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(mp, {
                            title: T.intl.string(P.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(mx, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(md, {
                                title: T.intl.string(P.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(mm, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(md, {
                                title: T.intl.string(P.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(mf, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(md, {
                                title: T.intl.string(P.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(mh, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(md, {
                                title: T.intl.string(P.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(mg, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, a.jsx)(dL, { analytics: t.analytics }),
                        (0, a.jsxs)(dM, {
                            title: T.intl.string(P.default.fQMpFp),
                            children: [
                                (0, a.jsx)(dR, {
                                    label: T.intl.string(P.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? dk(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(dR, {
                                    label: T.intl.string(P.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? dk(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var mj = n(592465);
function mb(e) {
    let { projectId: t, onClose: n } = e,
        l = O(),
        [r, s] = i.useState(() => (l && D?.projectId === t ? "trace" : "logs")),
        o = (0, c.bG)([uZ.A], () => uZ.A.getStatus(t), [t]),
        u = (0, c.bG)([uZ.A], () => uZ.A.getFetchState(t), [t]),
        m = i.useCallback(() => {
            ((0, cF.R7)(t), (0, cF.DK)(t));
        }, [t]);
    (i.useEffect(() => m(), [m]), i.useEffect(() => (0, eG.Rw)(t), [t]));
    let f = i.useCallback(() => {
        if (!l) return !1;
        let e = (function (e) {
            if (null == D || D.projectId !== e) return null;
            let { traceId: t } = D;
            return ((D = null), t);
        })(t);
        return null != e && (dh(t, e), !0);
    }, [t, l]);
    (i.useEffect(() => {
        f();
    }, [f]),
        q(t, () => {
            f() && s("trace");
        }));
    let h = i.useCallback(() => {
            (0, uE.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: uZ.A.getStatus(t),
                        last_turn_usage: uZ.A.getLastTurnUsage(t),
                        last_compaction: uZ.A.getLastCompaction(t),
                        last_compaction_decline: uZ.A.getLastCompactionDecline(t),
                        timing_traces: uZ.A.getTimingTraces(t),
                        logs: cq.A.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, d.P0)({ text: T.intl.string(P.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        g = T.intl.string(P.default["Q4FN+H"]);
    return (0, a.jsxs)("section", {
        className: mj.nd,
        "aria-label": g,
        children: [
            (0, a.jsxs)(e1.Ay, {
                "aria-label": g,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(e1.Ay.Icon, {
                            icon: uS.CopyIcon,
                            tooltip: T.intl.string(P.default.TkHqy2),
                            onClick: h,
                        }),
                        (0, a.jsx)(e1.Ay.Icon, { icon: tH.XSmallIcon, tooltip: T.intl.string(T.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, a.jsx)(e1.Ay.ChannelIcon, { icon: uI.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(e1.Ay.Title, { children: g }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: mj.rf,
                children: [
                    (0, a.jsxs)(cD.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => s(e),
                        "aria-label": T.intl.string(P.default.RvvWIh),
                        className: mj.vR,
                        children: [
                            (0, a.jsx)(cD.V.Item, { id: "logs", children: T.intl.string(P.default["+VRYCm"]) }),
                            (0, a.jsx)(cD.V.Item, { id: "worker", children: T.intl.string(P.default["50D0FZ"]) }),
                            (0, a.jsx)(cD.V.Item, { id: "agent", children: T.intl.string(P.default.UkbTK1) }),
                            l ? (0, a.jsx)(cD.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, a.jsx)(mc, { projectId: t })
                        : "worker" === r
                          ? (0, a.jsx)(mv, { status: o, fetchState: u, onRefresh: m })
                          : "trace" === r && l
                            ? (0, a.jsx)(dx, { projectId: t })
                            : (0, a.jsx)(mt, { projectId: t, status: o, fetchState: u, onRefresh: m }),
                ],
            }),
        ],
    });
}
var my = n(365912),
    mk = n(873715);
function mw(e) {
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
let mC = Object.freeze({ x: -1, y: -1 });
function mA(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = mw(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var mS = n(192888);
function mN(e, t) {
    return (0, mS.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(mA, () => ({ status: "failed" }));
}
var mI = n(108308);
let mE = { x: 25, y: 21 };
function m_(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function mM(e, t, n, l) {
    let r = m_(e, n, l);
    return { x: r.left + r.width * t.x, y: r.top + r.height * t.y };
}
function mR(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function mP(e) {
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
function mT(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: s } = e,
        o = null != n && n === l ? t : null,
        { active: u, annotations: d } = (0, z.rt)(o),
        f = (0, G.Zv)(o),
        h = (0, H.Rv)(),
        g = (0, c.bG)([nE.default], () => nE.default.getCurrentUser()),
        p = g?.id ?? null,
        [x, v] = i.useState(null),
        [j, b] = i.useState(!1),
        [k, w] = i.useState(!1),
        [C, A] = i.useState(null),
        [S, N] = i.useState(!1),
        I = i.useRef(null),
        _ = i.useRef(null),
        M = i.useRef(null),
        [R, L] = i.useState(null),
        [$, D] = i.useState(!1),
        [q, F] = i.useState(null),
        [O, U] = i.useState(null),
        B = i.useRef(!1),
        [K, V] = i.useState(!1),
        [W, X] = i.useState(null),
        Q = u && !f && !h;
    null == q || (Q && q.projectId === o) || F(null);
    let Z = q?.projectId ?? null;
    i.useEffect(() => {
        if (null != Z) return () => (0, np.xJ)(Z, "design");
    }, [Z]);
    let Y = tr(r, Q);
    i.useEffect(() => {
        if (!Q || null == o) return;
        let e = !0,
            t = r();
        if (null == t) return void w(!0);
        (b(!0), w(!1));
        let n = `design-feedback-${crypto.randomUUID()}`;
        return (
            (0, mk.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                (t) => {
                    if (!e) return;
                    b(!1);
                    let n = "completed" === t.status ? mP(t.response) : null;
                    null == n ? w(!0) : (v(n), (0, z.F5)(o, { url: n.url, title: n.title, viewport: n.viewport }));
                },
                () => {
                    e && (b(!1), w(!0));
                },
            ),
            () => {
                e = !1;
            }
        );
    }, [Q, r, o]);
    let J = i.useRef(null);
    (i.useEffect(() => {
        if (!Q || null == Y || null == o) return;
        if (null == x) {
            J.current = Y;
            return;
        }
        if (tl(J.current, Y)) return;
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
                    (0, mk.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        if ("completed" !== e.status || !el.current) return;
                        let n = mP(e.response);
                        null != n && (v(n), (0, z.F5)(o, { url: n.url, title: n.title, viewport: n.viewport }));
                        let l = new Map();
                        (e.response.results.forEach((e, n) => {
                            let r = t[n];
                            if (null == r || "locate" !== e.action || !e.ok) return;
                            let a = mw(e.element);
                            null != a && l.set(r.id, a);
                        }),
                            (0, z.AW)(o, l));
                    });
                }));
        }, 200);
        return () => window.clearTimeout(e);
    }, [Q, Y, x, d, o, r]),
        i.useEffect(() => {
            if (!Q)
                return () => {
                    (A(null), F(null), X(null), v(null));
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
                    mN(n, t).then((t) => {
                        if (((en.current = !1), el.current)) {
                            if ("picked" !== t.status || mO(t.target, eu.current.rect, eu.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? A(null)
                                    : "unsupported" === t.status && D(!0);
                            else {
                                let e = (0, l$.Sk)(t.target);
                                (L((t) => (mF(t, e) ? t : e)),
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
            let e = setTimeout(() => U(null), mD);
            return () => clearTimeout(e);
        }, [O]));
    let ei = null == x || null == Y || x.viewport.width < 1 ? 1 : Y.width / x.viewport.width,
        es = null != x || k,
        eo = i.useMemo(() => x?.elements ?? [], [x]),
        eu = i.useRef({ rect: null, scale: 1 });
    i.useLayoutEffect(() => {
        eu.current = { rect: Y, scale: ei };
    }, [Y, ei]);
    let ec = i.useCallback(
            (e, t, n) => {
                null != o &&
                    ((0, np.xJ)(o, "design"),
                    X(null),
                    (B.current = !1),
                    F({ projectId: o, target: e, anchor: t, draft: "", at: n, label: (0, l$.Sk)(e) }));
            },
            [o],
        ),
        ed = i.useCallback((e, t) => ({ x: (e.clientX - t.left) / ei, y: (e.clientY - t.top) / ei }), [ei]),
        em = i.useCallback(() => {
            let e = M.current;
            if (null == e) return;
            let t = I.current;
            null != t && (t.style.transform = `translate3d(${e.x + 20}px, ${e.y + 20}px, 0)`);
            let n = _.current;
            null != n && (n.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    i.useLayoutEffect(em);
    let ef = i.useCallback(
            (e) => {
                if (null == Y || null != W) return;
                if (((M.current = { x: e.clientX, y: e.clientY }), em(), N(!0), null != q)) {
                    (Math.abs(e.clientX - q.at.x) > mq || Math.abs(e.clientY - q.at.y) > mq) && (B.current = !0);
                    return;
                }
                if (!es) return void A(null);
                let t = ed(e, Y);
                if ($) {
                    let e = (0, l$.CZ)(eo, t.x, t.y),
                        n = null != e && mO(e, Y, ei) ? null : e;
                    if (null != n) {
                        let e = (0, l$.Sk)(n);
                        L((t) => (mF(t, e) ? t : e));
                    }
                    A((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = et.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((et.current = n), (ee.current = n), er());
            },
            [Y, ei, es, ed, $, eo, q, W, em, er],
        ),
        eh = null == W ? null : d.find((e) => e.id === W.id),
        eg = Q && (S || q?.target.marker != null || eh?.target.marker != null);
    i.useEffect(() => {
        if (eg)
            return () => {
                let e = r();
                null != e && mN(e, mC);
            };
    }, [eg, r]);
    let ep = i.useCallback(() => {
        (N(!1), A(null), (et.current = null), (ee.current = null));
    }, []);
    i.useEffect(() => {
        if (!Q || !S || !es || $ || null != q || null != W) return;
        let e = M.current,
            { rect: t, scale: n } = eu.current;
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
                if (null == C || null == Y) return;
                let t = ed(e, Y);
                ec(C, (0, l$.Hm)(C, t.x, t.y), { x: e.clientX, y: e.clientY });
            },
            [C, Y, ed, q, W, ec, ea],
        ),
        ev = i.useCallback(() => {
            null != o && (A(null), (0, E.K7)(o)?.active === !0 ? (0, E.V9)(o) : (0, z.mB)(o));
        }, [o]),
        ej = i.useCallback(() => {
            null != o &&
                (null != q
                    ? ea()
                    : W?.confirmingRemove === !0
                      ? X({ ...W, confirmingRemove: !1 })
                      : null != W
                        ? X(null)
                        : ev());
        }, [o, q, W, ea, ev]),
        eb = i.useRef(ej),
        ey = i.useRef(o),
        ek = i.useRef(ev);
    i.useLayoutEffect(() => {
        ((eb.current = ej), (ey.current = o), (ek.current = ev));
    });
    let ew = i.useRef(null);
    i.useEffect(() => {
        if (Q)
            return (
                e4.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        e4.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), eb.current());
        }
        function t(e) {
            let t = e.target;
            !(0, e3.vq)(t) ||
                ew.current?.contains(t) === !0 ||
                s?.current?.contains(t) === !0 ||
                (function (e) {
                    try {
                        return ((0, my.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) ||
                ((null == ey.current || (0, E.K7)(ey.current)?.active !== !0) && ek.current());
        }
    }, [Q, s]);
    let eC = i.useCallback(
            (e) => {
                if (null == o) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), ej());
                    return;
                }
                if (null != q || null != W || 0 === eo.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    n = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || n) {
                    e.preventDefault();
                    let n = null == C ? -1 : eo.findIndex((e) => e.ref === C.ref);
                    A(eo[(n + (t ? 1 : -1) + eo.length) % eo.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != C &&
                    (e.preventDefault(),
                    ec(C, l$.QU, { x: (Y?.left ?? 0) + C.rect.x * ei, y: (Y?.top ?? 0) + C.rect.y * ei }));
            },
            [o, q, W, eo, C, ec, ej, Y, ei],
        ),
        eA = i.useCallback(
            (e) => {
                null == o ||
                    null == q ||
                    (((0, l$.Ch)(q.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, eG.dv)(o, (0, l$.Q9)(q.target, q.draft), e), ea(), A(null)));
            },
            [o, q, ea],
        ),
        eS = i.useCallback((e) => (null == o ? Promise.reject(Error("no project")) : (0, e5.vX)(o, e)), [o]),
        eN = i.useCallback(() => {
            null == o ||
                null == W ||
                null == p ||
                ((0, l$.Ch)(W.draft) && ((0, z.pV)(o, p, W.id, W.draft.trim()), X({ ...W, editing: !1 })));
        }, [o, W, p]),
        eI = i.useCallback(() => {
            null != o && null != W && null != p && ((0, z.aC)(o, p, W.id), X(null));
        }, [o, W, p]),
        eE = u
            ? j
                ? T.intl.string(P.default["Eb/YV9"])
                : k
                  ? T.intl.string(P.default.FD30bh)
                  : T.intl.formatToPlainString(P.default.dTSqLF, { count: d.length })
            : "",
        e_ = Q && null != Y,
        eM = S && null == W,
        eR = q?.target ?? eh?.target ?? null,
        eP = q ?? O,
        eT = q ?? (O?.instant === !0 ? null : O),
        eL =
            null != eh && null != Y
                ? (function (e, t) {
                      let { left: n, top: l } = mR(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(mM(eh.target, eh.anchor, Y, ei), Y)
                : null;
    return (
        i.useEffect(() => {
            let e = r();
            if (eh?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = eh;
            mN(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [eh, r]),
        (0, e2.createPortal)(
            (0, a.jsxs)("div", {
                ref: ew,
                className: mI.Li,
                children: [
                    (0, a.jsx)(t3.A, {
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
                                      className: mI.MT,
                                      style: { left: Y.left, top: Y.top, width: Y.width, height: Y.height },
                                      "data-plain-cursor": eM ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": T.intl.string(P.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: ef,
                                      onMouseLeave: ep,
                                      onClick: ex,
                                      onKeyDown: eC,
                                  }),
                                  null != C && null == C.marker && null == q && null == W
                                      ? (0, a.jsx)(mG, { box: m_(C, Y, ei) })
                                      : null,
                                  (0, a.jsx)("div", {
                                      ref: I,
                                      className: mI.aZ,
                                      children: (0, a.jsx)("div", {
                                          className: mI.xz,
                                          "data-shown": null != C && null == W && null == q ? "" : void 0,
                                          "data-instant": K ? "" : void 0,
                                          children: (0, a.jsxs)(y.E, {
                                              variant: "body-xs/medium",
                                              className: mI.Ux,
                                              children: [
                                                  null == R
                                                      ? null
                                                      : (0, a.jsx)("span", { className: mI.Tl, children: R.kind }),
                                                  null == R || "" === R.name
                                                      ? null
                                                      : (0, a.jsxs)("span", {
                                                            className: mI.kh,
                                                            children: [" ", R.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, a.jsx)("div", {
                                      ref: _,
                                      className: mI.Y,
                                      children: eM ? (0, a.jsx)("div", { className: mI.u }) : null,
                                  }),
                                  null == eT
                                      ? null
                                      : (0, a.jsx)("div", {
                                            className: mI.aZ,
                                            style: {
                                                transform: `translate3d(${eT.at.x + 20}px, ${eT.at.y + 20}px, 0)`,
                                            },
                                            children: (0, a.jsx)("div", {
                                                className: mI.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == q ? "" : void 0,
                                                children: (0, a.jsxs)(y.E, {
                                                    variant: "body-xs/medium",
                                                    className: mI.Ux,
                                                    children: [
                                                        (0, a.jsx)("span", {
                                                            className: mI.Tl,
                                                            children: eT.label.kind,
                                                        }),
                                                        "" === eT.label.name
                                                            ? null
                                                            : (0, a.jsxs)("span", {
                                                                  className: mI.kh,
                                                                  children: [" ", eT.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eR && null == eR.marker
                                      ? (0, a.jsx)("div", { className: mI.D0, style: m_(eR, Y, ei), "aria-hidden": !0 })
                                      : null,
                                  d.map((e, t) => {
                                      let n = mM(e.target, e.anchor, Y, ei),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, a.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: mI.xL,
                                              style: { ...mR(n, Y), width: 24, height: 24 },
                                              "aria-label": T.intl.formatToPlainString(P.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: (0, l$.Bx)(e.target),
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
                                              children: (0, a.jsx)(mL, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eP || null == o
                                      ? null
                                      : (0, a.jsx)(tt, {
                                            projectId: o,
                                            at: { x: eP.at.x + 20, y: eP.at.y + 20 },
                                            bounds: Y,
                                            kind: eP.label.kind,
                                            value: eP.draft,
                                            canSubmit: null != q && (0, l$.Ch)(eP.draft),
                                            onChange: (e) => {
                                                null != q && F({ ...q, draft: e });
                                            },
                                            onSubmit: eA,
                                            onDismiss: ea,
                                            onUploadFile: eS,
                                            closing: null == q,
                                        }),
                                  null != eh && null != W && null != eL
                                      ? (0, a.jsxs)(m$, {
                                            point: eL,
                                            frame: Y,
                                            authorId: eh.authorId,
                                            title: (0, l$.Bx)(eh.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                W.confirmingRemove ? X({ ...W, confirmingRemove: !1 }) : X(null);
                                            },
                                            onMouseLeave: () => {
                                                W.editing || W.confirmingRemove || X(null);
                                            },
                                            children: [
                                                W.editing
                                                    ? (0, a.jsx)(nk.f, {
                                                          autoFocus: !0,
                                                          label: T.intl.string(P.default.KCYqWL),
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
                                                    : (0, a.jsx)(y.E, {
                                                          variant: "body-sm/normal",
                                                          color: "text-default",
                                                          className: mI.aC,
                                                          children: eh.comment,
                                                      }),
                                                (0, z.It)(eh, p)
                                                    ? (0, a.jsx)("div", {
                                                          className: mI.eB,
                                                          children: W.confirmingRemove
                                                              ? (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(y.E, {
                                                                            variant: "body-xs/normal",
                                                                            color: "text-muted",
                                                                            className: mI.nv,
                                                                            children: T.intl.string(P.default.wOHvts),
                                                                        }),
                                                                        (0, a.jsx)(m.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: T.intl.string(P.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                X({ ...W, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, a.jsx)(m.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: T.intl.string(P.default.friIzR),
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
                                                                            text: T.intl.string(P.default.friIzR),
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
                                                                                  disabled: !(0, l$.Ch)(W.draft),
                                                                                  text: T.intl.string(P.default.iicRP9),
                                                                                  onClick: eN,
                                                                              })
                                                                            : (0, a.jsx)(m.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: T.intl.string(
                                                                                      P.default["6eW9lg"],
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
function mL(e) {
    let { authorId: t } = e,
        n = (0, c.bG)([nE.default], () => nE.default.getUser(t), [t]);
    return (0, a.jsx)(aK.eu, {
        src: null == n ? null : aV.Ay.getUserAvatarURL(n),
        size: aH._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function m$(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        { point: u, frame: c, authorId: d, title: m, testId: f, onDismiss: h, onMouseLeave: g, children: p } = e,
        x = i.useRef(null),
        v = i.useRef(null),
        [j, b] = i.useState(mE);
    i.useLayoutEffect(() => {
        let e = x.current?.getBoundingClientRect(),
            t = v.current?.getBoundingClientRect();
        if (null == e || null == t || e.width < 1 || t.width < 1) return;
        let n = { x: t.left + t.width / 2 - e.left, y: t.top + t.height / 2 - e.top };
        b((e) => (0.5 > Math.abs(e.x - n.x) && 0.5 > Math.abs(e.y - n.y) ? e : n));
    }, []);
    let {
            left: k,
            top: w,
            originX: C,
            originY: A,
        } = ((n = Math.max((t = c.left + 8), c.left + c.width - 300 - 8)),
        (r = Math.max((l = c.top + 8), c.top + c.height - 160 - 8)),
        (s = Math.min(Math.max(u.x - j.x, t), n)),
        { left: s, top: (o = Math.min(Math.max(u.y - j.y, l), r)), originX: u.x - s, originY: u.y - o }),
        S = { left: k, top: w, "--custom-conjure-card-origin-x": `${C}px`, "--custom-conjure-card-origin-y": `${A}px` };
    return (0, a.jsxs)("div", {
        ref: x,
        className: mI.Nr,
        style: S,
        "data-testid": f,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, a.jsxs)("div", {
                className: mI.MY,
                children: [
                    (0, a.jsx)("span", { ref: v, className: mI.ip, children: (0, a.jsx)(mL, { authorId: d }) }),
                    (0, a.jsx)(y.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        className: mI.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: mI.zI, children: p }),
        ],
    });
}
let mD = 300,
    mq = 2;
function mF(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function mO(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function mG(e) {
    let { box: t } = e;
    return (0, a.jsx)("div", { className: mI.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var mz = n(318774),
    mU = n(697744),
    mB = n(130324);
function mK(e) {
    let t = (0, mU.c)(),
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
    let r = (0, tW.j)();
    return (
        i.useEffect(() => {
            if (!r) return;
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e, r]),
        t
    );
}
function mH(e) {
    let { className: t } = e,
        { Component: n, events: l } = mK(3e4);
    return (0, a.jsxs)("div", {
        className: u()(t, mB.Ve),
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(y.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                className: mB.ol,
                children: T.intl.string(P.default.AyiQEp),
            }),
        ],
    });
}
var mV = n(251363),
    mW = n(944142),
    mX = n(532247),
    mQ = n(501628);
function mZ(e) {
    let { progress: t } = e,
        { Component: n } = mK(1500),
        l = F.Q_.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, a.jsx)(y.E, { variant: "body-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, a.jsx)("div", {
                className: mQ.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: mQ.PM,
                            "data-state": n < t.stepIndex ? "done" : n === t.stepIndex ? "current" : "todo",
                        },
                        n,
                    ),
                ),
            }),
            l && null != t.stepLabel
                ? (0, a.jsx)(y.E, { variant: "body-xs/normal", color: "text-overlay-light", children: t.stepLabel })
                : null,
        ],
    });
}
function mY(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        o = (0, c.bG)([mW.A], () => (s ? mW.A.getLiveReload(t) : null), [s, t]),
        u = (0, eL.A)(n, r)?.id ?? null,
        d = o?.phase ?? null,
        m = o?.background === !0,
        f = (function (e, t, n) {
            let l = (0, mX.dv)(e),
                [r, a] = i.useState(null),
                [s, o] = i.useState(l),
                [u, d] = i.useState(t);
            s !== l && (o(l), d(t), a(null != l || u ? null : (0, mX.QP)(e, s)));
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
                        null != t.target && t.target === (0, mV.ow)(null, n) && e();
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
        })(d, m, u),
        h = m ? null : (0, mX.h_)(d, o?.step ?? null, f);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(t3.A, { tag: "div", role: "status", "aria-live": "polite", children: h?.title ?? "" }),
            null != h
                ? (0, a.jsx)("div", {
                      className: mQ.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, a.jsx)(mZ, { progress: h }),
                  })
                : null,
        ],
    });
}
let mJ = 0;
var m0 = n(782134),
    m1 = n(357858),
    m2 = n(343030),
    m3 = n(11411),
    m4 = n(111518),
    m5 = n(240666);
let m7 = { width: 1 / 0, height: 1 / 0 };
function m8(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m7;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var m9 = n(702083);
function m6(e) {
    let { children: t } = e,
        { mobile: n, landscape: l } = (0, c.cf)([e$.A], () => ({
            mobile: e$.A.isBuilderPreviewMobile(),
            landscape: e$.A.isBuilderPreviewLandscape(),
        })),
        r = i.useRef(null),
        [s, o] = i.useState(null);
    i.useLayoutEffect(() => {
        let e = r.current;
        if (null == e) return;
        function t() {
            if (null == e) return;
            let t = { width: e.clientWidth, height: e.clientHeight };
            o((e) => (e?.width === t.width && e.height === t.height ? e : t));
        }
        t();
        let n = new ResizeObserver(t);
        return (n.observe(e), () => n.disconnect());
    }, []);
    let d = null != s && s.width > 0 ? s : null,
        m = n ? m8(l, d ?? void 0) : null;
    return (0, a.jsx)("div", {
        ref: r,
        className: u()(m9.dw, { [m9.PQ]: null != m }),
        children: (0, a.jsx)("div", { className: u()(m9.R9, { [m9.Vg]: null != m }), style: m ?? void 0, children: t }),
    });
}
var fe = n(347927);
function ft(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, a.jsxs)("div", {
        className: u()(fe.Bf, l && fe.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: fe.Ux,
                children: [
                    (0, a.jsx)(b.D, { variant: "heading-sm/semibold", color: "text-default", children: t }),
                    null != n
                        ? (0, a.jsx)(y.E, { variant: "body-md/medium", color: "text-subtle", children: n })
                        : null,
                ],
            }),
            r,
        ],
    });
}
var fn = n(957272);
function fl(e) {
    let { applicationId: t, surface: n, launch: l, frameOverlay: r } = e,
        { frame: i, state: s } = (0, m4.A)({ applicationId: t, surface: n, launch: l });
    if (((0, m5.A)(t, n), s === m4.n.Launched)) {
        let e = (0, a.jsx)(m3.A, { frameId: i.id, level: m2.A.WithinAppContent, className: fn.Z7, overlay: r });
        return (0, eD.Q5)(n) ? (0, a.jsx)(m6, { children: e }) : e;
    }
    return (0, a.jsx)(fr, { state: s });
}
function fr(e) {
    let { state: t } = e;
    switch (t) {
        case m4.n.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: fn.qs,
                children: (0, a.jsx)(ft, {
                    title: T.intl.string(P.default["9kpdo7"]),
                    body: T.intl.string(P.default.iIA8Nj),
                }),
            });
        case m4.n.NoApplication:
            return (0, a.jsx)(mH, { className: fn.qs });
        case m4.n.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: fn.qs,
                children: (0, a.jsx)(ft, {
                    title: T.intl.string(P.default["7k4GyN"]),
                    body: T.intl.string(P.default.zdIy3R),
                }),
            });
        case m4.n.Error:
            return (0, a.jsxs)("div", {
                className: fn.qs,
                children: [
                    (0, a.jsx)(b.D, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        children: T.intl.string(P.default.lTPbnG),
                    }),
                    (0, a.jsx)(y.E, {
                        variant: "body-sm/normal",
                        color: "text-feedback-critical",
                        className: fn.tj,
                        children: T.intl.string(P.default.e6GiAZ),
                    }),
                ],
            });
        case m4.n.AwaitingLaunch:
        case m4.n.Loading:
            return (0, a.jsx)("div", { className: fn.qs, children: (0, a.jsx)(k.y, {}) });
    }
}
var fa = n(308528),
    fi = n(334738),
    fs = n(699344),
    fo = n(365971),
    fu = n(703462);
function fc(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: fu.f,
        children: [
            (0, a.jsx)(iC.AppsIcon, { size: "lg", color: "var(--icon-muted)" }),
            (0, a.jsx)(y.E, { variant: "body-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function fd() {
    return (0, a.jsx)("div", { className: fu.f, children: (0, a.jsx)(k.y, {}) });
}
function fm(e) {
    let t,
        n,
        { projectId: l, previewApplicationId: r } = e,
        [s, o] = i.useState(null),
        u = s?.previewApplicationId === r ? s.channelId : null,
        d = (0, c.bG)([nN.A], () => (null != u ? nN.A.getChannel(u) : null), [u]);
    ((t = d?.id ?? null),
        i.useEffect(() => {
            null != t && fa.A.preload(ej.ME, t);
        }, [t]),
        (n = (0, c.bG)([uj.A], () => uj.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, fo.Xg)();
            return (
                (0, fi.yl)(t, e),
                () => {
                    (0, fi.dm)(t, e);
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
                    e || o({ previewApplicationId: r, channelId: t });
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
        ? (0, a.jsx)(fc, { message: T.intl.string(P.default["VP/O8s"]) })
        : null == d
          ? (0, a.jsx)(fd, {})
          : (0, a.jsx)("div", {
                className: fu.g,
                children: (0, a.jsx)(fs.A, { channel: d, guild: null, chatInputType: sZ.oU.SIDEBAR }, d.id),
            });
}
var ff = n(765671),
    fh = n(596977),
    fg = n(921853),
    fp = n(582063);
function fx(e) {
    let { projectId: t, captures: n, selected: l } = e,
        r = [...n, null],
        i = null != l ? n.indexOf(l) : n.length;
    function s(e) {
        let n = r[(i + e + r.length) % r.length];
        (0, J.vX)(t, n?.id ?? null);
    }
    let o = T.intl.string(P.default.Gl3XtE),
        u = T.intl.string(P.default["3FvcrY"]);
    return (0, a.jsxs)("div", {
        className: fp.aF,
        children: [
            (0, a.jsx)(e7.m, {
                text: o,
                position: "top",
                children: (0, a.jsx)(ts.K, {
                    icon: fg.ChevronSmallLeftIcon,
                    size: "sm",
                    variant: "overlay-secondary",
                    "aria-label": o,
                    onClick: () => s(-1),
                }),
            }),
            (0, a.jsx)("div", {
                className: fp.Dn,
                "aria-live": "polite",
                children:
                    null != l
                        ? (0, a.jsx)(y.E, {
                              tag: "span",
                              variant: "body-sm/medium",
                              color: "text-strong",
                              lineClamp: 1,
                              children: T.intl.formatToPlainString(P.default["140n5k"], {
                                  name: l.name,
                                  index: i + 1,
                                  count: n.length,
                              }),
                          })
                        : (0, a.jsx)(y.E, {
                              tag: "span",
                              variant: "body-sm/medium",
                              color: "text-strong",
                              children: T.intl.string(P.default.wVJL0P),
                          }),
            }),
            (0, a.jsx)(e7.m, {
                text: u,
                position: "top",
                children: (0, a.jsx)(ts.K, {
                    icon: t4.ChevronSmallRightIcon,
                    size: "sm",
                    variant: "overlay-secondary",
                    "aria-label": u,
                    onClick: () => s(1),
                }),
            }),
        ],
    });
}
var fv = n(666476);
let fj = ["image/png", "image/jpeg", "image/gif", "image/webp"];
function fb() {
    (0, d.P0)({ text: T.intl.string(P.default.jj3abP), variant: "critical" });
}
function fy(e) {
    let { projectId: t } = e,
        n = i.useRef(null),
        l = i.useRef(null),
        r = T.intl.string(P.default["xd/1IW"]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(ek.Y, {
                targetElementRef: n,
                align: "left",
                position: "bottom",
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, a.jsx)(fk, { projectId: t, onClose: n, onUpload: () => l.current?.click() });
                },
                children: (e) => {
                    let { onClick: t } = e;
                    return (0, a.jsx)("div", {
                        ref: n,
                        className: fp.m2,
                        children: (0, a.jsx)(e7.m, {
                            position: "bottom",
                            text: r,
                            asContainer: !0,
                            children: (0, a.jsx)(ts.K, {
                                "aria-label": r,
                                icon: v.SettingsIcon,
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
                accept: fj.join(","),
                hidden: !0,
                "aria-hidden": !0,
                tabIndex: -1,
                onChange: (e) => {
                    let n = e.currentTarget.files?.[0];
                    ((e.currentTarget.value = ""),
                        null != n &&
                            (fj.includes(n.type)
                                ? n.size > fv.aI
                                    ? (0, d.P0)({ text: T.intl.string(P.default.T8Spiu), variant: "critical" })
                                    : (0, r9.M$)(t, n).catch(fb)
                                : (0, d.P0)({ text: T.intl.string(P.default.AO7zpk), variant: "critical" })));
                },
            }),
        ],
    });
}
function fk(e) {
    let { projectId: t, onClose: n, onUpload: l } = e,
        r = (0, c.bG)([r8.A], () => r8.A.getBackground(t)),
        i = r?.blur !== !1,
        s = r?.imageEtag ?? null;
    return (0, a.jsxs)(ew.W, {
        "data-menu-migrated": !0,
        navId: "conjure-overlay-background",
        "aria-label": T.intl.string(P.default["xd/1IW"]),
        onClose: n,
        onSelect: void 0,
        children: [
            (0, a.jsxs)(eC.rX, {
                children: [
                    (0, a.jsx)(eC.Dr, {
                        id: "conjure-overlay-background-upload",
                        label: T.intl.string(P.default.uQpDky),
                        icon: lb.ImagePlusIcon,
                        action: () => {
                            (n(), l());
                        },
                    }),
                    (0, a.jsx)(eC.Dr, {
                        id: "conjure-overlay-background-reset",
                        label: T.intl.string(P.default.AiAz8J),
                        icon: dW.RetryIcon,
                        disabled: null == s,
                        action: () => {
                            (n(), (0, r9.Og)(t).catch(fb));
                        },
                    }),
                ],
            }),
            (0, a.jsx)(eC.rX, {
                children: (0, a.jsx)(eC.fP, {
                    id: "conjure-overlay-background-blur",
                    label: T.intl.string(P.default["hyN+kc"]),
                    checked: i,
                    action: () => {
                        (0, r9.Y1)(t, !i) || fb();
                    },
                }),
            }),
        ],
    });
}
function fw(e) {
    let { applicationId: t, projectId: n, size: l, frameOverlay: r } = e,
        { ref: s, width: o, height: u } = (0, ff.Ay)(),
        { captures: c, selected: d } = r7(n),
        m = (function (e, t, n) {
            let { width: l, height: r } = e;
            if (null == l || null == r || l <= 0 || r <= 0) return { top: 24, end: 24, scale: 1 };
            if (null == t || t.width <= 0 || t.height <= 0)
                return { top: 24, end: 24, scale: er({ width: l - 48, height: r - 48 }, n) };
            let a = t.width / t.height,
                i = Math.min(l, r * a),
                s = i / 1920,
                o = er({ width: 1872, height: 1920 / a - 48 }, n);
            return { top: (r - i / a) / 2 + 24 * s, end: (l - i) / 2 + 24 * s, scale: o * s };
        })({ width: o, height: u }, d, l);
    return (
        i.useEffect(() => (0, fh.L0)(), []),
        (0, a.jsxs)("div", {
            className: fp.JH,
            children: [
                (0, a.jsx)(ae, { projectId: n, gameCaptures: !0 }),
                (0, a.jsx)("div", {
                    ref: s,
                    className: fp.dw,
                    children: (0, a.jsx)("div", {
                        className: fp.HL,
                        style: {
                            "--custom-conjure-overlay-widget-width": `${l.width}px`,
                            "--custom-conjure-overlay-widget-height": `${l.height}px`,
                            "--custom-conjure-overlay-widget-top": `${m.top}px`,
                            "--custom-conjure-overlay-widget-end": `${m.end}px`,
                            "--custom-conjure-overlay-widget-scale": String(m.scale),
                        },
                        children: (0, a.jsx)(fl, { applicationId: t, surface: eD.p$, frameOverlay: r }),
                    }),
                }),
                null != n ? (0, a.jsx)(fy, { projectId: n }) : null,
                null != n && c.length > 0 ? (0, a.jsx)(fx, { projectId: n, captures: c, selected: d }) : null,
            ],
        })
    );
}
function fC(e) {
    let { onAddBot: t, loading: n = !1 } = e;
    return (0, a.jsx)(ft, {
        title: T.intl.string(P.default.xlEjZ8),
        body: T.intl.string(P.default["4ByPbd"]),
        children: (0, a.jsx)(m.$, {
            size: "sm",
            variant: "primary",
            text: T.intl.string(P.default.RGeB11),
            onClick: t,
            loading: n,
        }),
    });
}
var fA = n(409478),
    fS = n(652227);
function fN(e) {
    let {
            applicationId: t,
            previewApplicationId: n,
            surface: l,
            frameLaunchParams: r,
            previewReady: i,
            previewGate: s,
            availability: o,
            activeMode: u,
            widgetApplicationId: d,
            overlayWidgetSize: m = en,
            projectId: f,
            renderFrameOverlay: h,
            paused: g = !1,
            onResume: p,
        } = e,
        x = (0, c.bG)([l3.A], () => null != f && null != l3.A.getSetupStartedAt(f), [f]);
    return s?.type === "checking"
        ? (0, a.jsx)("div", { className: fS.qs, children: (0, a.jsx)(k.y, {}) })
        : s?.type === "bot_install"
          ? (0, a.jsx)("div", {
                className: fS.qs,
                children: (0, a.jsx)(fC, { onAddBot: s.onAddBot, loading: s.loading }),
            })
          : i
            ? null == t
                ? null
                : (0, a.jsxs)("div", {
                      "data-conjure-entrance": !0,
                      className: fS.RG,
                      children: [
                          (0, es.yf)(o, u)
                              ? g
                                  ? (0, a.jsx)(fI, { projectId: f, onResume: p })
                                  : (0, a.jsx)(fl, { applicationId: t, surface: l, launch: r, frameOverlay: h?.(l) })
                              : null,
                          "widget" === u && null != d
                              ? "unavailable-authorization-revoked" === o.profileState
                                  ? (0, a.jsx)("div", {
                                        className: fS.qs,
                                        children: (0, a.jsx)(ft, {
                                            wide: !0,
                                            title: T.intl.string(P.default["08U+YO"]),
                                            body: T.intl.string(P.default.pKBfrc),
                                        }),
                                    })
                                  : (0, a.jsx)(fA.A, { applicationId: d })
                              : null,
                          "overlay" === u && o.modes.includes("overlay")
                              ? (0, a.jsx)(fw, { applicationId: t, projectId: f, size: m, frameOverlay: h?.(eb.ZN) })
                              : null,
                          "bot" === u && null != n && null != f
                              ? (0, a.jsx)(fm, { projectId: f, previewApplicationId: n })
                              : null,
                      ],
                  })
            : x
              ? (0, a.jsx)("div", { className: fS.qs, children: (0, a.jsx)(k.y, {}) })
              : (0, a.jsx)(mH, { className: fS.qs });
}
function fI(e) {
    let { projectId: t, onResume: n } = e;
    return (
        (0, m1.Pu)(t),
        (0, a.jsx)("div", {
            className: fS.qs,
            children: (0, a.jsx)(ft, {
                wide: !0,
                title: T.intl.string(P.default.MMWEH2),
                body: T.intl.string(P.default.iKSu55),
                children:
                    null != n
                        ? (0, a.jsx)(m.$, {
                              size: "sm",
                              variant: "primary",
                              icon: m0.PlayIcon,
                              text: T.intl.string(P.default.ZKd2Cw),
                              onClick: n,
                          })
                        : null,
            }),
        })
    );
}
var fE = n(750506),
    f_ = n(867193),
    fM = n(539197),
    fR = n(977020);
function fP(e) {
    let { projectId: t } = e,
        n = (0, fM.X2)(t),
        l = (function (e) {
            let [t, n] = i.useState(null);
            return (
                i.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, fM.Ie)(e);
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
    let { left: r, top: s, width: o, height: c, scale: d } = l;
    function m(e, t) {
        return { "--custom-conjure-cursor-x": `${e * d}px`, "--custom-conjure-cursor-y": `${t * d}px` };
    }
    return (0, a.jsxs)("div", {
        className: fR.$Q,
        style: { left: r, top: s, width: o, height: c, "--custom-conjure-cursor-scale": d },
        "aria-hidden": !0,
        [fM.t$]: "",
        children: [
            n.presses > 0
                ? (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)("div", { className: u()(fR.hN, fR.vW), style: m(n.pressX, n.pressY) }),
                              (0, a.jsx)("div", { className: u()(fR.hN, fR.A7), style: m(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, a.jsx)("svg", {
                className: u()(fR.UE, { [fR.SP]: n.shown, [fR.Vq]: n.pressed, [fR.GP]: n.dipping }),
                style: m(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, a.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var fT = n(417760);
function fL(e) {
    let { phase: t, projectId: n, compact: l } = e,
        { stop: r, stopping: s } = (function (e) {
            let t = (0, c.bG)([ri.A], () => null != e && ri.A.isThinking(e)),
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
        o = (0, G.CU)(n),
        d = "controlling" === t,
        f = T.intl.string(d ? (o ? P.default["VJW/5P"] : P.default["+hD2Iz"]) : P.default["h+i1r9"]),
        h =
            null != r
                ? (0, a.jsx)(m.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: T.intl.string(P.default.oU59sU),
                      loading: s,
                      onClick: r,
                      "data-testid": "conjure-control-stop",
                  })
                : null;
    return l
        ? (0, a.jsxs)("div", {
              className: u()(fT.M0, fT.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  d
                      ? (0, a.jsx)(cc.i, { size: 12, color: "currentColor" })
                      : (0, a.jsx)(i0.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, a.jsx)(y.E, { variant: "body-sm/semibold", color: "none", className: fT.ID, children: f }),
                  d ? (0, a.jsx)(t3.A, { children: T.intl.string(P.default.fg1sor) }) : null,
                  d ? (0, a.jsx)("div", { className: fT.lC, children: h }) : null,
              ],
          })
        : (0, a.jsxs)("div", {
              className: fT.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, a.jsxs)("div", {
                      className: fT.sp,
                      children: [
                          (0, a.jsx)(i0.SparklesIcon, { size: "sm", color: "currentColor" }),
                          d ? (0, a.jsx)(cc.i, { size: 12, color: "currentColor" }) : null,
                          (0, a.jsxs)("div", {
                              className: fT.f4,
                              children: [
                                  (0, a.jsx)(y.E, {
                                      variant: "body-sm/semibold",
                                      color: "none",
                                      className: fT.w9,
                                      children: f,
                                  }),
                                  d
                                      ? (0, a.jsx)(y.E, {
                                            variant: "body-xs/medium",
                                            color: "none",
                                            className: fT.Rb,
                                            children: T.intl.string(P.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  d ? (0, a.jsx)("div", { className: fT.lC, children: h }) : null,
              ],
          });
}
function f$(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveTarget: r, frameId: s } = e,
        o = (0, G.Zv)(null != n && n === l ? t : null),
        u = (function (e) {
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
        })(o),
        c = (0, H.Rv)(),
        d = (0, ep.cR)(s);
    i.useEffect(() => {
        o && d && null != s && (0, ep.BL)(s);
    }, [o, d, s]);
    let [m, f] = i.useState(null),
        [h, g] = i.useState(null),
        [p, x] = i.useState(null),
        v = "idle" !== u;
    i.useEffect(() => {
        if (!v) return;
        function e() {
            let e = tn(r());
            f((t) => (tl(t, e) ? t : e));
            let t = null == h ? null : tn(h);
            (x((e) => (tl(e, t) ? e : t)), null != h && (0, f_.C)(h.getBoundingClientRect().height));
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
                    null != h && (0, f_.C)(0));
            }
        );
    }, [v, r, h]);
    let j = "idle" !== u && null != m,
        b = j && "controlling" === u && !c,
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
        C = (function () {
            let [e] = i.useContext(fE.uY),
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
                      className: fT.D,
                      "data-phase": u,
                      children: (0, a.jsx)("div", {
                          className: fT.QF,
                          children: (0, a.jsx)(fL, { phase: u, projectId: t, compact: y }),
                      }),
                  })
                : null,
            (0, e2.createPortal)(
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(t3.A, {
                        tag: "div",
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-control-announcer",
                        children:
                            "controlling" === u
                                ? T.intl.string(P.default.oWcemF)
                                : "handoff" === u
                                  ? T.intl.string(P.default["h+i1r9"])
                                  : "",
                    }),
                }),
                document.body,
            ),
            b
                ? (0, e2.createPortal)(
                      (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: fT.ys,
                                  style: w,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", {
                                  className: fT.om,
                                  style: k,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)(fP, { projectId: t }),
                          ],
                      }),
                      C,
                  )
                : null,
        ],
    });
}
var fD = n(399503),
    fq = n(853555),
    fF = n(944100),
    fO = n(327152),
    fG = n(187645);
let fz = { width: 1280, height: 720 },
    fU = new Map(),
    fB = !1;
function fK() {
    let e = new Map();
    for (let t of new Set([...ri.A.getActivityOrderedProjectIds(), ...(0, G.T7)()])) {
        if (!(ri.A.isThinking(t) || (0, G.wK)(t)) || ee.A.isPaused(t)) continue;
        let n = (function (e) {
            let t = eP.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = [(0, eD.Rc)(t), (0, eD.Th)(t)].find(eb.x1);
            return n?.id ?? null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [l, r] of [...fU]) {
        var t, n;
        e.get(l) !== r.frameId &&
            ((t = l),
            (n = r),
            fU.delete(t),
            n.unregisterLookup(),
            fF.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove(),
            (0, fO.Pn)(n.frameId, null));
    }
    for (let [t, n] of e)
        fU.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = fG.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    fH(n, e, t),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (fU.set(e, l),
                    (l.unregisterLookup = (0, fq.Ng)(e, () => (0, mV.n5)(n, t))),
                    fF.A.registerFrameTarget(t, n, m2.A.Backstage, void 0));
            })(t, n);
    for (let [e, t] of fU) fH(t.element, e, t.frameId);
}
function fH(e, t, n) {
    if (eg.A.getFrame(n)?.surface.type === eo.U.OVERLAY) {
        let l = ea(eP.Ay.getProject(t));
        (e.classList.remove(fG.L),
            (e.style.width = `${l.width}px`),
            (e.style.height = `${l.height}px`),
            (0, fO.Pn)(n, l));
        return;
    }
    let l = e$.A.isBuilderPreviewMobile();
    e.classList.toggle(fG.L, !l);
    let r = l ? m8(e$.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != r ? `${r.width}px` : ""),
        (e.style.height = null != r ? `${r.height}px` : ""),
        (0, fO.Pn)(n, r ?? fz));
}
var fV = n(873727),
    fW = n(47671),
    fX = n(418842),
    fQ = n(413599);
let fZ = 0;
var fY = n(487887);
let fJ = null;
var f0 = n(541940);
function f1(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            mainClassName: o,
            content: d,
            sidebar: m,
            showsFrame: f,
            paused: h,
        } = e,
        [g, p] = i.useState(null),
        x = (0, eL.A)(l, s),
        v = x?.id ?? null;
    (!(function (e, t) {
        let n = (0, c.bG)([fQ.A], () => (0, fV.x4)(fQ.A.theme)),
            l = (0, c.bG)([fW.A], () => fW.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: a,
                highContrast: s,
                forcedColors: o,
                underlineLinks: u,
            } = (0, c.cf)([aU.Ay], () => ({
                reducedMotion: aU.Ay.useReducedMotion,
                fontScale: (0, fV.U0)(),
                highContrast: aU.Ay.isHighContrastModeEnabled,
                forcedColors: aU.Ay.useForcedColors,
                underlineLinks: aU.Ay.alwaysShowLinkDecorations,
            })),
            d = F.hH.useSetting(),
            m = (0, c.bG)([sK.A], () => sK.A.hidePersonalInformation),
            f = (0, fX.C)(),
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
                let l = (0, mV.n5)(e, t);
                if (null == l) return;
                x.current = l;
                let i = {
                    revision: ++fZ,
                    baseTheme: n,
                    customTheme: (0, fV.Lq)(),
                    uiDensity: f,
                    messageDisplayCompact: d,
                    fontScale: a,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: o,
                    underlineLinks: u,
                    formFactor: h,
                    hidePersonalInformation: m,
                };
                (0, mS.W)(l, "set-env", i, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [n, o, a, h, t, m, s, d, e, r, f, u]),
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
                let n = (0, mV.n5)(e, t);
                null != n && n !== x.current && b();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, mV.n5)(e, t) && ((x.current = null), b());
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
            if (null != t) return (0, fq.Ng)(t, () => (0, mV.n5)(g, v));
        }, [t, g, v]));
    let j = i.useCallback(() => (0, mV.ow)(g, v), [g, v]),
        b = i.useCallback(() => (f ? (0, mV.ow)(g, v) : g), [f, g, v]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: u()(f0.Mh, o),
                children: [
                    h
                        ? null
                        : (0, a.jsx)(f$, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveTarget: b,
                              frameId: v,
                          }),
                    (0, a.jsx)("div", { ref: p, className: f0.fm, children: d }),
                ],
            }),
            m,
            h
                ? null
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(mT, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveIframe: j,
                              toggleRef: n,
                          }),
                          (0, a.jsx)(tG, { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: j }),
                      ],
                  }),
        ],
    });
}
function f2(e) {
    let t,
        {
            projectId: n,
            designFeedbackToggleRef: l,
            applicationId: r,
            previewApplicationId: s,
            surface: o,
            frameLaunchParams: d,
            header: m,
            chatOpen: f,
            onCloseChat: h,
            onRestoreVersion: g,
            onImportProject: p,
            debugOpen: x = !1,
            onCloseDebug: v,
            restoreState: j,
            previewReady: b,
            previewGate: y,
            availability: k,
            activeMode: w,
            widgetApplicationId: C,
            overlayWidgetSize: A,
            previewPaused: S = !1,
            onResumePreview: N,
        } = e;
    (0, fD.k)(n, C);
    let I = o.type === eo.U.MAIN || (0, eD.Q5)(o);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, c.cf)([e$.A], () => ({
            mobile: e$.A.isBuilderPreviewMobile(),
            landscape: e$.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? fY.aX.LANDSCAPE : fY.aX.PORTRAIT), (fJ = e));
                else {
                    if (fJ !== e) return;
                    ((l = fY.aX.UNHANDLED), (fJ = null));
                }
                ur.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(I ? r : null);
    let E = i.useRef(null),
        [_, M] = i.useState(0);
    (i.useEffect(() => {
        if (null == n) return;
        (0, tU.T)(n);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, tU.T)(n);
        }, 3e3);
        return () => clearInterval(e);
    }, [n]),
        (t = i.useRef(0)),
        i.useLayoutEffect(() => {
            I && ((t.current = ++mJ), (0, J.HV)(r));
        }, [r, I]),
        i.useEffect(() => {
            if (!I) return;
            let e = t.current;
            return () => {
                e === mJ && (0, J.HV)(null);
            };
        }, [r, I]),
        i.useEffect(() => {
            null != n &&
                ((0, eG.ensureConnection)(n),
                fB ||
                    ((fB = !0),
                    ri.A.addChangeListener(fK),
                    eP.Ay.addChangeListener(fK),
                    eg.A.addChangeListener(fK),
                    e$.A.addChangeListener(fK),
                    ee.A.addChangeListener(fK),
                    (0, G.W3)(fK),
                    fK()));
        }, [n]),
        i.useLayoutEffect(() => {
            let e = E.current;
            if (null == e) return;
            function t() {
                null != e && M(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return (n.observe(e), () => n.disconnect());
        }, []));
    let R = Math.max(450, _ - 320),
        P = f || I;
    return (0, a.jsxs)("div", {
        className: f0.cL,
        children: [
            m,
            (0, a.jsx)("div", {
                ref: E,
                className: f0.LB,
                children: (0, a.jsx)(f1, {
                    projectId: n,
                    designFeedbackToggleRef: l,
                    applicationId: r,
                    previewApplicationId: s,
                    surface: o,
                    showsFrame: (0, es.yf)(k, w),
                    paused: S,
                    mainClassName: null == m ? void 0 : u()(f0.ez, { [f0.zt]: f }),
                    content: (0, a.jsx)(fN, {
                        applicationId: r,
                        previewApplicationId: s,
                        surface: o,
                        frameLaunchParams: d,
                        previewReady: b,
                        previewGate: y,
                        availability: k,
                        activeMode: w,
                        widgetApplicationId: C,
                        overlayWidgetSize: A,
                        projectId: n,
                        paused: S,
                        onResume: N,
                        renderFrameOverlay: (e) =>
                            (0, a.jsx)(mY, { projectId: n, applicationId: r, previewApplicationId: s, surface: e }),
                    }),
                    sidebar:
                        null != n && P
                            ? (0, a.jsx)("div", {
                                  className: f ? f0.v7 : f0.LL,
                                  children: (0, a.jsx)(e0.A, {
                                      sidebarType: e0.X.CallChatSidebar,
                                      maxWidth: R,
                                      capturePointer: !0,
                                      children: (0, a.jsx)("div", {
                                          className: f0.cO,
                                          children: x
                                              ? (0, a.jsx)(mb, { projectId: n, onClose: v ?? (() => {}) }, n)
                                              : (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                        (0, a.jsx)(mz.Ay, { projectId: n }),
                                                        (0, a.jsx)(f3, { onClose: h }),
                                                        (0, a.jsx)("div", {
                                                            className: f0.cb,
                                                            children: (0, a.jsx)(
                                                                c$,
                                                                {
                                                                    projectId: n,
                                                                    restoreState: j,
                                                                    onRestoreVersion: g,
                                                                    onImportProject: p,
                                                                    escapeScopeRef: E,
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
function f3(e) {
    let { onClose: t } = e,
        n = T.intl.string(P.default.vLoFRs),
        l = T.intl.string(P.default.JD6Oit);
    return (0, a.jsx)(e1.Ay, {
        "aria-label": n,
        toolbar: (0, a.jsx)(e1.Ay.Icon, { icon: eJ.PanelClosedIcon, tooltip: l, "aria-label": l, onClick: t }),
        children: (0, a.jsx)(e1.Ay.Title, { children: n }),
    });
}
var f4 = n(563339),
    f5 = n(606128),
    f7 = n(323140);
function f8(e) {
    let t,
        l,
        r,
        { project: s, projectsLoaded: o, onBack: k, guildId: w, inServer: C = !1 } = e,
        A = i.useContext(Q.A),
        [$] = i.useState(() => (null != A ? Y.A.getProjectView(A) : null)),
        [D, F] = i.useState($?.chatOpen ?? !0),
        [en, el] = i.useState($?.debugOpen ?? !1);
    i.useEffect(() => {
        null != A && (0, Z.g7)(A, { chatOpen: D, debugOpen: en });
    }, [A, D, en]);
    let er = i.useCallback(
            (e) => {
                null != A && (0, Z.g7)(A, { previewSelection: e });
            },
            [A],
        ),
        eu = O(),
        ec = (0, U.f)("ConjureSelectedProjectScreen"),
        ed = i.useCallback(() => F(!0), []),
        ef = i.useCallback(() => {
            (el(!1), F(!0));
        }, []),
        { restoreState: eh, handleRestoreVersion: eg } = (function (e, t) {
            let [n, l] = i.useState(null),
                r = e?.id ?? null,
                a = i.useRef(r),
                s = i.useRef(!0),
                o = i.useRef(!1);
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
                            if (null == e || o.current) return;
                            let u = e.id;
                            function c() {
                                return s.current && a.current === u;
                            }
                            ((o.current = !0),
                                t(),
                                l({ entry: n, status: "restoring" }),
                                (0, W.oB)(u, n.sha)
                                    .then(
                                        async () => {
                                            if (
                                                (i &&
                                                    c() &&
                                                    (0, d.P0)({
                                                        text: T.intl.formatToPlainString(P.default.Z4n6LX, {
                                                            title: (0, V.T4)(n.subject).short,
                                                        }),
                                                        variant: "success",
                                                    }),
                                                null != r)
                                            ) {
                                                let e = await (0, X.c)(u, r);
                                                null != e && (0, d.P0)({ text: e, variant: "critical" });
                                            }
                                            c() && l({ entry: n, status: "restored" });
                                        },
                                        (e) => {
                                            c() &&
                                                (l({ entry: n, status: "failed" }),
                                                console.error("[conjure] version restore failed", u, e),
                                                (0, d.P0)({
                                                    text: T.intl.string(P.default["PSdo+w"]),
                                                    variant: "critical",
                                                }));
                                        },
                                    )
                                    .finally(() => {
                                        c() && (o.current = !1);
                                    }));
                        },
                        [e, t],
                    ),
                }
            );
        })(s, ef),
        ep = s?.id ?? null,
        ex = null != (0, eV.E8)(ep),
        ev = D || ex,
        ej = en && !ex,
        {
            integrationStatus: ek,
            isPreviewApplicationLoading: ew,
            checkingIntegration: eC,
            previewReady: eA,
            hasFrame: eS,
        } = (function (e) {
            let [t, n] = i.useState(null),
                l = e?.id ?? null,
                r = i.useRef(l),
                a = i.useRef(null);
            r.current = l;
            let s = (0, c.bG)(
                    [eP.Ay, eR.A],
                    () => (null == l ? null : (eP.Ay.getIntegrationStatus(l) ?? eR.A.getIntegrationStatus(l))),
                    [l],
                ),
                o = e?.preview_application_id ?? null,
                { isLoading: u } = (0, e_.YY)(o ?? void 0),
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
                    null != o &&
                    (async function (e) {
                        try {
                            await (0, e_.TA)(e);
                        } catch {}
                    })(o);
            }, [h, d, g, o]);
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
                    isPreviewApplicationLoading: u,
                    checkingIntegration: d,
                    previewReady: m,
                    hasFrame: f,
                }
            );
        })(s),
        eN =
            (0, c.bG)([ez.A], () => (null == ep ? void 0 : ez.A.getPublishStatus(ep)?.previewAppChannels), [ep]) ??
            ek?.preview_app_channels,
        {
            availability: eQ,
            activeMode: eZ,
            setMode: eJ,
            frameSurface: e0,
            frameSurfaceOptions: e1,
            setFrameSurface: e2,
            appChannel: e3,
            setAppChannel: e4,
            frameLaunchParams: e5,
            widgetApplicationId: e7,
        } = (0, em.p)({
            applicationId: s?.preview_application_id ?? null,
            previewApplicationId: s?.preview_application_id ?? null,
            declaredActivity: eS,
            previewSupportedSurfaces: s?.preview_supported_surfaces,
            installScope: s?.install_scope ?? null,
            ownerAuthorizationRevoked: ek?.owner_authorization_revoked === !0,
            supportsOverlay: s?.preview_supported_surfaces?.includes(et.q7.OVERLAY) === !0,
            previewAppChannels: eN,
            initialSelection: $?.previewSelection,
            onSelectionChange: er,
        }),
        e8 = ea(s);
    ((0, ei.x)(ep, (e) => {
        eQ.modes.includes(e) && eJ(e);
    }),
        q(ep, () => {
            (F(!0), el(!0));
        }));
    let e9 = eQ.modes.includes("frame"),
        e6 = (0, c.bG)([ee.A], () => ee.A.isPaused(ep), [ep]),
        {
            previewTargetOptions: te,
            handleSelectPreviewTarget: tt,
            mobilePreview: tn,
            mobilePreviewLabel: tl,
            handleToggleMobilePreview: tr,
            landscapePreview: ta,
            rotatePreviewLabel: ti,
            handleRotatePreview: ts,
            previewSurface: to,
            previewFrame: tu,
            refreshFrame: tc,
            isRefreshing: td,
            handleRefresh: tm,
        } = (function (e) {
            let {
                    project: t,
                    modes: n,
                    activeMode: l,
                    frameSurface: r,
                    frameSurfaceOptions: a,
                    previewAppChannels: s,
                    setMode: o,
                    setFrameSurface: u,
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
                        ("frame" === e.mode && (u(e.surface), null != e.appChannel && d?.(e.appChannel)), o(e.mode));
                    },
                    [d, u, o],
                ),
                h = (0, c.bG)([e$.A], () => e$.A.isBuilderPreviewMobile()),
                g = T.intl.string(h ? P.default.tKGF0Q : P.default.peqEOY),
                p = i.useCallback(() => (0, J.GG)(!h), [h]),
                x = (0, c.bG)([e$.A], () => e$.A.isBuilderPreviewLandscape()),
                v = T.intl.string(x ? P.default.tunI2l : P.default.DoNdjA),
                j = i.useCallback(() => (0, J.Lw)(!x), [x]),
                b = (0, eD.jS)(t),
                y = i.useMemo(() => (0, eD.Op)(b, r), [b, r]),
                k = (0, eL.A)(t?.preview_application_id ?? null, y),
                w = (0, eL.A)(t?.preview_application_id ?? null, eb.ZN),
                C = "overlay" === l ? w : k,
                A = (0, eb.x1)(C) && C.data.proxyTicketRefreshing,
                S = i.useCallback(() => {
                    null == C || A || eT.A.refreshProxyTicket(C.id);
                }, [C, A]);
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
                refreshFrame: C,
                isRefreshing: A,
                handleRefresh: S,
            };
        })({
            project: s,
            modes: eQ.modes,
            activeMode: eZ,
            frameSurface: e0,
            frameSurfaceOptions: e1,
            previewAppChannels: eN,
            setMode: eJ,
            setFrameSurface: e2,
            setAppChannel: e4,
        }),
        tf = (0, S.A)(tu),
        th = e9 && !e6,
        tg = (0, E.lQ)(ep),
        tp = tf.isPoppedOut ? P.default.pmkK8i : e6 ? P.default.Yet11p : null,
        tx = null != tp;
    function tv(e) {
        return null == tp ? e : T.intl.formatToPlainString(tp, { label: e });
    }
    let tj = i.useCallback(() => {
            ex ? (0, d.P0)({ text: T.intl.string(P.default["PyD/rD"]), variant: "critical" }) : F(!1);
        }, [ex]),
        {
            designFeedbackActive: tb,
            designFeedbackToggleRef: ty,
            agentDrivingPreview: tk,
            designFeedbackLabel: tw,
            handleToggleDesignFeedback: tC,
        } = (function (e, t, n) {
            let { active: l } = (0, z.rt)(e);
            i.useEffect(() => {
                null != e && l && !t && (0, z.mB)(e);
            }, [e, l, t]);
            let r = i.useRef(null),
                a = (0, G.Zv)(e),
                s = T.intl.string(a ? P.default.Sme0T0 : l ? P.default.vn5Rzu : P.default["cl/Jyl"]),
                o = i.useCallback(() => {
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
                handleToggleDesignFeedback: o,
            };
        })(ep, th && (!tf.isPoppedOut || tg), ef),
        [tA] = i.useState(() => I.isPlatformEmbedded && (0, eE.qM)());
    i.useEffect(() => {
        null != ep && tg && !th && (0, E.It)(ep);
    }, [ep, tg, th]);
    let tS = i.useCallback(() => {
            null != ep && (ef(), (0, E.c$)(ep), (0, E.rC)(ep, "marker"));
        }, [ep, ef]),
        tN = i.useCallback(() => {
            null != ep && (0, E.V9)(ep);
        }, [ep]),
        tI =
            tx && !tg
                ? tv(T.intl.string(P.default["XWU+XF"]))
                : T.intl.string(tg ? P.default.tuQ5f3 : tk ? P.default.agwlrD : P.default["XWU+XF"]),
        tE = tx ? tv(T.intl.string(P.default["cl/Jyl"])) : tw,
        t_ = tv(tl),
        tM = tv(ti),
        tR = i.useCallback(() => {
            el((e) => !e && (F(!0), !0));
        }, []),
        tP = i.useCallback(() => el(!1), []),
        tT = i.useCallback(() => {
            null != ep && (0, J._j)(ep);
        }, [ep]),
        tL = i.useCallback(() => {
            null != ep && (e6 ? (0, J._j)(ep) : (0, J.di)(ep, tu?.id));
        }, [ep, e6, tu?.id]),
        t$ = i.useCallback(() => {
            var e, t;
            (null != s && ((e = s.id), (t = tu?.id), (0, eG.Bn)(e), (0, eO.r)(t)), k());
        }, [s, tu?.id, k]),
        tD =
            ((t = (0, R.z)(s)),
            (l = i.useCallback(
                (e) => {
                    if (null == s) return;
                    let t = s.id,
                        n = (0, M.vt)(e);
                    null != n
                        ? (0, d.P0)({ text: n, variant: "critical" })
                        : (0, _.A)({
                              title: T.intl.formatToPlainString(P.default["Gm+u1+"], { name: s.name }),
                              subtitle: T.intl.string(P.default.M7H3sJ),
                              confirmText: T.intl.string(P.default.gFHykw),
                              variant: "critical",
                              onConfirm: async () => {
                                  ed();
                                  try {
                                      await (0, M.Hj)(t, e, T.intl.string(P.default.Owerd3));
                                  } catch {
                                      (0, d.P0)({ text: T.intl.string(P.default["Q+l4Hv"]), variant: "critical" });
                                  }
                              },
                          });
                },
                [s, ed],
            )),
            { onExport: t, onImport: (r = (0, M.yN)(l)).open, importInput: r.input }),
        tq = i.useCallback(() => {
            null != s && (0, eW.A)(s, w);
        }, [s, w]),
        tF = i.useCallback(async () => {
            null != ep && (await (0, eB.vL)(ep, w));
        }, [w, ep]),
        tO = (0, es.aN)(eZ, {
            installScope: s?.install_scope ?? null,
            previewReady: eA,
            integrationInstalled: ek?.integration_installed ?? null,
        })
            ? { type: "bot_install", onAddBot: tF, loading: ew }
            : eC && null == ek
              ? { type: "checking" }
              : void 0,
        tG = (0, c.bG)([eP.Ay], () => null != ep && eP.Ay.isProjectDeleting(ep), [ep]);
    i.useEffect(() => {
        ((null == s && o) || tG) && k();
    }, [s, o, tG, k]);
    let {
            publishOptions: tz,
            publish: tU,
            publishing: tB,
            confirmation: tK,
            variant: tH,
            text: tV,
            pendingChanges: tW,
        } = (0, eH.A)(ep, w, eC || ew),
        tX = (0, eK.A)(ep, tU, tz),
        tQ = "frame" === eZ && !e6 && (0, eb.x1)(tu) && (tf.isPoppedOut || tf.canPopout),
        tZ = i.useCallback(() => {
            if (null != s) {
                var e;
                ((e = {
                    projectId: s.id,
                    restoreDisabled: eh?.status === "restoring",
                    onRestoreVersion: (e, t) => eg(e, t, !0),
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
        }, [s, eh?.status, eg]);
    (0, K.z)(ep, tZ);
    let tY = null == s ? void 0 : () => (0, eX.A)(s.id, { guildId: w, isPreview: !0, publishOptions: tz }),
        tJ =
            null == s
                ? null
                : (0, a.jsx)(eF.A, {
                      ...(0, eq.A)(s, w),
                      hideProjectSettings: !0,
                      onTogglePreviewPaused: "frame" === eZ ? tL : void 0,
                      previewPaused: e6,
                      previewPauseDisabled: !e6 && tk,
                      onTogglePopout: tQ ? (tf.isPoppedOut ? tf.popIn : tf.popOut) : void 0,
                      poppedOut: tf.isPoppedOut,
                      onToggleDebug: eu ? tR : void 0,
                      debugOpen: ej,
                      onExport: tD.onExport,
                      onImport: tD.onImport,
                      onRemix: tq,
                      onConnectTool: ec ? () => (0, B.A)(s.id) : void 0,
                      onHistory: tZ,
                      refreshApplicationId:
                          eQ.modes.includes("widget") && "unavailable-authorization-revoked" !== eQ.profileState
                              ? e7
                              : null,
                      previewProjectId: s.id,
                  }),
        t0 = null != tU && null != s && ("primary" === tH || tB || null != tK),
        t1 = t0
            ? (0, a.jsx)("div", {
                  className: f7.As,
                  onMouseDown:
                      null == ep || tU.disabled || tB
                          ? void 0
                          : (e) => {
                                0 === e.button && (0, eU.dx)(ep);
                            },
                  children: (0, a.jsx)(m.$, {
                      size: "sm",
                      variant: "primary",
                      icon: tB ? f9 : null != tK ? f.CheckmarkSmallIcon : void 0,
                      text: tV,
                      onClick: () => tX("header"),
                  }),
              })
            : null,
        t2 = T.intl.string(P.default.FzfmQ8),
        t3 = T.intl.string(P.default.xjJAQm),
        t4 = (0, a.jsx)(f4.A, {
            title: s?.name ?? T.intl.string(P.default.G1WwgK),
            project: s,
            onOpenProjectSettings: tY,
            hideShareTarget: C,
            draft: tW,
            actions:
                null == s
                    ? null
                    : (0, a.jsxs)("div", {
                          className: f7.FO,
                          children: [
                              (0, a.jsx)(eI, {
                                  targets: te,
                                  target: (function (e, t) {
                                      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                                      return null == e
                                          ? null
                                          : "frame" !== e
                                            ? { mode: e }
                                            : null == n
                                              ? { mode: e, surface: t }
                                              : { mode: e, surface: t, appChannel: n };
                                  })(eZ, e0, e3),
                                  onChange: tt,
                              }),
                              e9 && "frame" === eZ
                                  ? (0, a.jsx)(N.A.Icon, {
                                        icon: tn ? he : f6,
                                        tooltip: t_,
                                        "aria-label": t_,
                                        selected: tn,
                                        disabled: tx,
                                        onClick: tr,
                                    })
                                  : null,
                              e9 && tn && "frame" === eZ
                                  ? (0, a.jsx)(N.A.Icon, {
                                        icon: ht,
                                        tooltip: tM,
                                        "aria-label": tM,
                                        selected: ta,
                                        disabled: tx,
                                        onClick: ts,
                                    })
                                  : null,
                              "frame" !== eZ || e6 ? null : (0, a.jsx)(ey, { frame: tu, controlProjectId: s.id }),
                              (0, eb.x1)(tc)
                                  ? (0, a.jsx)(N.A.Icon, {
                                        icon: h.RefreshIcon,
                                        tooltip: T.intl.string(P.default.FZIHQN),
                                        "aria-label": T.intl.string(P.default.FZIHQN),
                                        disabled: td,
                                        onClick: tm,
                                    })
                                  : null,
                              (0, a.jsx)(L.A, { frame: tu }),
                              (0, a.jsx)(N.A.Icon, {
                                  icon: g.DoorExitIcon,
                                  tooltip: T.intl.string(P.default["/TlGcK"]),
                                  "aria-label": T.intl.string(P.default["/TlGcK"]),
                                  onClick: t$,
                              }),
                              (0, a.jsx)("div", { className: f7.YJ, "aria-hidden": !0 }),
                              (0, a.jsxs)("div", {
                                  className: f7.w7,
                                  children: [
                                      t1,
                                      (0, a.jsx)(eY, { projectId: s.id, variant: t0 ? "secondary" : "primary" }),
                                  ],
                              }),
                              e9
                                  ? tA
                                      ? (0, a.jsx)(N.A.Icon, {
                                            icon: p.PencilIcon,
                                            tooltip: tI,
                                            "aria-label": tI,
                                            selected: tg,
                                            disabled: (tx || tk) && !tg,
                                            onClick: tg ? tN : tS,
                                        })
                                      : (0, a.jsx)(N.A.Icon, {
                                            ref: ty,
                                            icon: x.ExperimentalDirectSelectIcon,
                                            iconClassName: f7.D8,
                                            tooltip: tE,
                                            "aria-label": tE,
                                            selected: tb,
                                            disabled: tx || tk,
                                            onClick: tC,
                                        })
                                  : null,
                              (0, a.jsx)(N.A.Icon, {
                                  icon: v.SettingsIcon,
                                  tooltip: t2,
                                  "aria-label": t2,
                                  onClick: tY,
                              }),
                              tJ,
                              ev
                                  ? null
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)("div", { className: f7.YJ, "aria-hidden": !0 }),
                                            (0, a.jsx)(N.A.Icon, {
                                                icon: j.PanelOpenIcon,
                                                tooltip: t3,
                                                "aria-label": t3,
                                                onClick: ed,
                                            }),
                                        ],
                                    }),
                          ],
                      }),
        });
    return (0, a.jsxs)("div", {
        className: u()(f7.nj, f5.T),
        children: [
            tD.importInput,
            (0, a.jsx)("main", {
                className: f7.JX,
                children:
                    null == s
                        ? (0, a.jsxs)("div", {
                              className: f7.j5,
                              children: [
                                  t4,
                                  (0, a.jsxs)("div", {
                                      className: f7.sD,
                                      children: [
                                          (0, a.jsx)(b.D, {
                                              variant: "heading-lg/semibold",
                                              children: T.intl.string(P.default.G1WwgK),
                                          }),
                                          (0, a.jsx)(y.E, {
                                              variant: "body-md/normal",
                                              color: "text-muted",
                                              children: T.intl.string(P.default.fINulo),
                                          }),
                                          (0, a.jsx)(m.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: T.intl.string(P.default["WFJ/vb"]),
                                              onClick: () => (0, eM.listProjects)(w),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, a.jsx)(eB.bI.Provider, {
                              value: tz,
                              children: (0, a.jsx)(
                                  f2,
                                  {
                                      projectId: s.id,
                                      designFeedbackToggleRef: ty,
                                      applicationId: s.preview_application_id,
                                      previewApplicationId: s.preview_application_id,
                                      surface: to,
                                      frameLaunchParams: e5,
                                      header: t4,
                                      chatOpen: ev,
                                      onCloseChat: tj,
                                      debugOpen: eu && ej,
                                      onCloseDebug: tP,
                                      onRestoreVersion: eg,
                                      onImportProject: (0, eP.PV)(s) ? tD.onImport : void 0,
                                      restoreState: eh,
                                      previewReady: eA,
                                      previewGate: tO,
                                      availability: eQ,
                                      activeMode: eZ,
                                      widgetApplicationId: e7,
                                      overlayWidgetSize: e8,
                                      previewPaused: e6,
                                      onResumePreview: tT,
                                  },
                                  s.id,
                              ),
                          }),
            }),
        ],
    });
}
function f9() {
    return (0, a.jsx)(k.y, { type: k.t.SPINNING_CIRCLE_SIMPLE, className: f7.Hv, itemClassName: f7.C5 });
}
function f6(e) {
    return (0, a.jsx)(w.MobilePhoneIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function he(e) {
    return (0, a.jsx)(C.ScreenIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function ht(e) {
    return (0, a.jsx)(A.RotateIcon, { ...e, size: "custom", width: 20, height: 20 });
}
