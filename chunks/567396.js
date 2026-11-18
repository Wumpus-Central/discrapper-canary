n.d(t, { A: () => fQ });
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
    S = n(831453),
    A = n(646973),
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
var ea = n(855859),
    ei = n(238490),
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
        i = (0, c.bG)(
            [ep.A, eh.A],
            () => null != t && ep.A.getWindowOpen(ev.MLl.ACTIVITY_POPOUT) && eh.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, ej.x1)(t) || i || r) return null;
    let s = (0, eg.fl)(t.id);
    if (null == s || !(0, ex.Ub)(s)) return null;
    let u = T.intl.string(l ? T.t.Z7MyNB : T.t.OIDkcp);
    return (0, a.jsx)(C.A.Icon, {
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
        [r, s] = i.useState(!1),
        u = null != n && t.length > 1;
    r && !u && s(!1);
    let o = i.useCallback(() => s(!1), []),
        c = i.useCallback(() => s((e) => !e), []),
        d = i.useRef(null);
    if (!u) return null;
    let m = T.intl.string(R.default.I2ucou);
    return (0, a.jsx)(ey.Y, {
        targetElementRef: d,
        shouldShow: r,
        onRequestClose: o,
        position: "bottom",
        align: "right",
        animation: ey.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, a.jsx)(ek.W, {
                "data-menu-migrated": !0,
                navId: "conjure-preview-target",
                "aria-label": m,
                onClose: r,
                onSelect: r,
                children: (0, a.jsx)(ew.rX, {
                    label: m,
                    children: t.map((e) => {
                        let t = eo(e);
                        return (0, a.jsx)(
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
                { isShown: i } = t;
            return (0, a.jsx)(eS.vN, {
                children: (0, a.jsxs)("button", {
                    ...r,
                    ref: d,
                    type: "button",
                    className: eC.h,
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
                            children: ec(n),
                        }),
                        (0, a.jsx)(eA.ChevronSmallDownIcon, { size: "xs", color: "currentColor" }),
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
    eD = n(174865),
    eq = n(753329),
    eF = n(457827),
    eO = n(540665),
    eG = n(722701),
    ez = n(962998),
    eU = n(826058),
    eB = n(50181),
    eK = n(719593),
    eH = n(890698),
    eV = n(95264),
    eW = n(616334),
    eX = n(405433),
    eQ = n(811587);
function eZ(e) {
    let { projectId: t, variant: l } = e,
        { canShare: r, firstShare: s } = (0, c.cf)(
            [eR.Ay, eG.A],
            () => {
                let e = eR.Ay.getProject(t),
                    n = eG.A.getPublishStatus(t)?.publishState,
                    l = null != e && (0, eR.PV)(e),
                    r = null != e && null != n && (l ? "nothing_built" !== n : (0, eQ.lE)(n));
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
                  icon: eX.ShareIcon,
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
                                  n.e(322408),
                                  n.e(788064),
                                  n.e(970902),
                              ]).then(n.bind(n, 214645));
                              return (n) => (0, a.jsx)(t, { ...n, ...e });
                          })
                      );
                  },
              })
            : (0, a.jsx)(ey.Q, {
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
                              icon: eX.ShareIcon,
                              text: T.intl.string(T.t.RDE0Sc),
                              onClick: t,
                          }),
                      });
                  },
              })
        : null;
}
var eY = n(812771);
(n(743898), n(134528), n(947204));
var eJ = n(333007),
    e0 = n(621466),
    e1 = n(775121),
    e2 = n(989145),
    e3 = n(866665),
    e4 = n(81369),
    e5 = n(826745),
    e7 = n(34595),
    e9 = n(470779);
function e8(e) {
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
        } = (0, e7.FM)({ projectId: t, surface: "design", onUploadFile: h }),
        A = i.useRef(null),
        C = (m || j.length > 0) && w && !f,
        N = i.useCallback(() => {
            if (!C) return;
            let e = S();
            c(e.length > 0 ? e : void 0);
        }, [C, S, c]),
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
        className: o()(e9.M0, { [e9.ho]: I && !f, [e9.ET]: f }),
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
                              className: e9.Fg,
                              tabIndex: -1,
                              "aria-hidden": !0,
                              onChange: (e) => {
                                  (b(Array.from(e.target.files ?? [])), (e.target.value = ""));
                              },
                          }),
                          (0, a.jsx)(e3.m, {
                              position: "bottom",
                              text: T.intl.string(R.default.lgvqSB),
                              ariaHidden: !0,
                              children: (0, a.jsx)("button", {
                                  type: "button",
                                  className: e9.tY,
                                  onClick: () => A.current?.click(),
                                  "aria-label": T.intl.string(R.default.lgvqSB),
                                  children: (0, a.jsx)(e4.FileUpIcon, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: e9.WW,
                                  }),
                              }),
                          }),
                      ],
                  })
                : null,
            (0, a.jsx)(e5.y, {
                autoFocus: !0,
                rows: 1,
                className: e9.hF,
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
                      className: e9.ZO,
                      children: j.map((e) => (0, a.jsx)(e7.Nl, { draft: e, onRemove: k }, e.localId)),
                  })
                : null,
        ],
    });
}
function e6(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function te(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function tt(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [n, l] = i.useState(() => (t ? e6(e()) : null));
    return (
        i.useEffect(() => {
            if (!t) return;
            function n() {
                let t = e6(e());
                l((e) => (te(e, t) ? e : t));
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
var tn = n(46676),
    tl = n(876798),
    tr = n(408278),
    ta = n(48507),
    ti = n(193885),
    ts = n(744898),
    tu = n(803656),
    to = n(241326),
    tc = n(972213),
    td = n(646514);
function tm(e) {
    return e.resolve({ saturation: 1 }).hex();
}
function tf(e, t, n) {
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
let th = tf("red", tm(td.A.unsafe_rawColors.RED_400), () => T.intl.string(R.default.tvXfjt)),
    tg = [
        th,
        tf("yellow", tm(td.A.unsafe_rawColors.YELLOW_300), () => T.intl.string(R.default.FYuaJ1)),
        tf("green", tm(td.A.unsafe_rawColors.GREEN_360), () => T.intl.string(R.default["Vv+paS"])),
        tf("blue", tm(td.A.unsafe_rawColors.BLUE_345), () => T.intl.string(R.default.k9b1QJ)),
        tf("white", tm(td.A.unsafe_rawColors.WHITE), () => T.intl.string(R.default["1sOXwH"])),
    ];
function tp(e) {
    return tg.find((t) => t.id === e) ?? th;
}
var tx = n(39416);
function tv(e) {
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
function tj(e) {
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
function tb(e) {
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
function ty(e) {
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
let tk = I.ck.map((e) => ty(Math.min(16, e + 3))),
    tw = I.Cw.map((e) => ty(Math.min(16, e / 2.5))),
    tS = [R.default.jZtZUr, R.default.cTQdD0, R.default.J3ucEg],
    tA = {
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
function tC(e) {
    let { icon: t, label: n, pressed: l, onClick: r } = e;
    return (0, a.jsx)(e3.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)("span", {
            className: tx.z6,
            "data-active": l ? "" : void 0,
            children: (0, a.jsx)(tl.k, {
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
    return (0, a.jsx)(e3.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)(tr.K, {
            icon: t,
            size: "sm",
            variant: "icon-only",
            disabled: l,
            "aria-label": n,
            onClick: r,
        }),
    });
}
function tI(e) {
    let { label: t, trigger: n, children: l, direction: r } = e,
        [s, u] = i.useState(!1),
        o = i.useCallback(() => u(!1), []),
        c = i.useCallback(() => u((e) => !e), []);
    return (0, a.jsxs)("div", {
        className: tx.pr,
        onMouseEnter: () => u(!0),
        onMouseLeave: o,
        children: [
            n(c),
            s
                ? (0, a.jsx)("div", {
                      className: tx.mz,
                      "data-direction": r,
                      role: "group",
                      "aria-label": t,
                      children: l(o),
                  })
                : null,
        ],
    });
}
function tE(e) {
    let { projectId: t, state: n, onExit: l, onUndo: r, onRedo: i, onClear: s } = e,
        { tool: u, lastShape: o, markerSize: c, eraserSize: d, history: m } = n,
        f = tp(n.colorId);
    function h(e) {
        return (0, I.rC)(t, e);
    }
    let g = tA[o],
        p = T.intl.string(R.default.hUm825),
        x = T.intl.string(R.default.n5IA3a),
        v = T.intl.string(R.default.r5dX6t),
        j = T.intl.string(R.default.VfYqDq);
    return (0, a.jsxs)("div", {
        className: tx.t$,
        children: [
            (0, a.jsx)("div", {
                className: tx.NT,
                children: (0, a.jsx)(tC, {
                    icon: tj,
                    label: T.intl.string(R.default.YtyKcM),
                    pressed: "pick" === u,
                    onClick: () => h("pick"),
                }),
            }),
            (0, a.jsxs)("div", {
                className: tx.H$,
                role: "toolbar",
                "aria-orientation": "vertical",
                "aria-label": T.intl.string(R.default["0IAEFf"]),
                children: [
                    (0, a.jsx)(tC, {
                        icon: tv,
                        label: T.intl.string(R.default.qTOXqb),
                        pressed: "move" === u,
                        onClick: () => h("move"),
                    }),
                    (0, a.jsx)(tC, {
                        icon: ta.LettersIcon,
                        label: T.intl.string(R.default.AGb8aK),
                        pressed: "text" === u,
                        onClick: () => h("text"),
                    }),
                    (0, a.jsx)(tI, {
                        label: p,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(tC, {
                                icon: ti.PaintbrushThinIcon,
                                label: p,
                                pressed: "marker" === u,
                                onClick: () => {
                                    (h("marker"), e());
                                },
                            }),
                        children: (e) =>
                            tk.map((n, l) =>
                                (0, a.jsx)(
                                    tC,
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
                    (0, a.jsx)(tI, {
                        label: v,
                        direction: "row",
                        trigger: (e) =>
                            (0, a.jsx)(tC, {
                                icon: g.icon,
                                label: v,
                                pressed: "circle" === u || "square" === u,
                                onClick: () => {
                                    (h(o), e());
                                },
                            }),
                        children: (e) =>
                            Object.keys(tA).map((t) =>
                                (0, a.jsx)(
                                    tC,
                                    {
                                        icon: tA[t].icon,
                                        label: tA[t].label(),
                                        pressed: u === t,
                                        onClick: () => {
                                            (h(t), e());
                                        },
                                    },
                                    t,
                                ),
                            ),
                    }),
                    (0, a.jsx)(tI, {
                        label: x,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(tC, {
                                icon: tb,
                                label: x,
                                pressed: "eraser" === u,
                                onClick: () => {
                                    (h("eraser"), e());
                                },
                            }),
                        children: (e) =>
                            tw.map((n, l) =>
                                (0, a.jsx)(
                                    tC,
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
                    (0, a.jsx)(tI, {
                        label: j,
                        direction: "row",
                        trigger: (e) => (0, a.jsx)(tN, { icon: f.icon, label: j, onClick: e }),
                        children: (e) =>
                            tg.map((n) =>
                                (0, a.jsx)(
                                    tC,
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
                    (0, a.jsx)("div", { className: tx.Gz, role: "separator" }),
                    (0, a.jsx)(tN, {
                        icon: ts.UndoIcon,
                        label: T.intl.string((0, N.cX)() ? R.default["j/XmBQ"] : R.default.AeHDE6),
                        disabled: 0 === m.past.length,
                        onClick: r,
                    }),
                    (0, a.jsx)(tN, {
                        icon: tu.RedoIcon,
                        label: T.intl.string((0, N.cX)() ? R.default.C7jhpn : R.default.pp16iB),
                        disabled: 0 === m.future.length,
                        onClick: i,
                    }),
                    (0, a.jsx)(tN, {
                        icon: to.TrashIcon,
                        label: T.intl.string(R.default.wo5a0i),
                        disabled: 0 === m.present.length,
                        onClick: s,
                    }),
                    (0, a.jsx)("div", { className: tx.Gz, role: "separator" }),
                    (0, a.jsx)(tN, { icon: tc.XLargeIcon, label: T.intl.string(R.default.tuQ5f3), onClick: l }),
                ],
            }),
        ],
    });
}
let t_ = td.A.unsafe_rawColors.WHITE.resolve({ saturation: 1 }).hex(),
    tM = td.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex(),
    tR = td.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex();
function tT(e, t, n) {
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
                    (e.strokeStyle = tR),
                    e.strokeText(n.text, l(n.at.x), r(n.at.y)),
                    e.fillText(n.text, l(n.at.x), r(n.at.y)));
            }
        }
    e.globalCompositeOperation = "source-over";
}
function tP(e) {
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
let tL = { dx: 0, dy: 0 },
    t$ = { v: "move", p: "pick", t: "text", m: "marker", o: "circle", r: "square", e: "eraser" },
    tD = 1;
function tq(e) {
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
        let t = await (0, eI.wn)(e);
        if (null != t) return t;
        function n() {
            m(!1);
        }
        (0, eJ.flushSync)(() => m(!0));
        try {
            await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e())));
            let t = new Promise((e) => window.setTimeout(() => e(null), 5e3));
            return await Promise.race([(0, eI.fs)(e, n), t]);
        } finally {
            n();
        }
    }, [r]);
    return (i.useEffect(() => {
        if (null != s) return ((0, I.j5)(s, h), () => (0, I.j5)(s, null));
    }, [s, h]),
    null == s || null == u || !u.active || c)
        ? null
        : (0, a.jsx)(tF, { projectId: s, state: u, capturing: d, resolveIframe: r });
}
function tF(e) {
    let { projectId: t, state: n, capturing: l, resolveIframe: r } = e,
        s = tt(r),
        [u, o] = i.useState(null),
        [c, d] = i.useState(0),
        [m, f] = i.useState(null),
        [h, g] = i.useState(tL),
        p = i.useRef(null),
        x = i.useRef(null),
        v = i.useRef(null),
        j = i.useRef(null),
        b = i.useRef(null),
        { tool: y, history: k } = n,
        w = tp(n.colorId),
        S = "pick" !== y,
        A = (0, I.Qq)(n),
        C = "eraser" === y ? null : w.value,
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
                                  a(n, `fill="none" stroke="${tM}" stroke-width="4"`),
                                  a(n, `fill="none" stroke="${t_}" stroke-width="2"`),
                                  a(3, `fill="${t ?? t_}" stroke="${tM}" stroke-width="1"`),
                                  "</svg>",
                              ].join("");
                          return `url("data:image/svg+xml,${encodeURIComponent(i)}") ${r} ${r}, crosshair`;
                      })(A, C),
            [A, C],
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
            i = null == a ? k.present : k.present.map((e) => (e.id === a.id ? (0, tn.y)(e, h.dx, h.dy) : e)),
            u = v.current;
        tT(r, null == u ? i : [...i, u], { width: s.width, height: s.height });
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
                id: `mark-${tD++}`,
                kind: "text",
                color: w.value,
                size: 20 / s.width,
                at: e.at,
                text: e.value.trim(),
            };
            ((0, tn.oy)(n, s) && (0, I.tD)(t, { type: "commit", shape: n }), o(null), (0, I.QP)(t));
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
                            l = null == E ? null : (0, tn.k_)(E, s),
                            r =
                                null != l && n.x >= l.x && n.x <= l.x + l.width && n.y >= l.y && n.y <= l.y + l.height
                                    ? E
                                    : (0, tn.WF)(k.present, t, s, 6);
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
                        if (!(0, tn.jG)(k.present)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (v.current = {
                                id: `mark-${tD++}`,
                                kind: "erase",
                                width: I.Cw[n.eraserSize] / s.width,
                                points: [t],
                            }));
                        break;
                    case "marker":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (v.current = {
                                id: `mark-${tD++}`,
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
                ((j.current = null), g(tL), (0, I.tD)(t, { type: "move", id: e.id, dx: h.dx, dy: h.dy }));
                return;
            }
            let n = v.current;
            ((v.current = null),
                null != n && null != s && (0, tn.oy)(n, s)
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
                    (0, e0.Cw)((0, e0.vq)(e.target, HTMLElement) ? e.target : null) ||
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
                let u = t$[s];
                null != u && (e.preventDefault(), (0, I.rC)(t, u));
            }
            return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
        }, [t]),
        i.useEffect(() => {
            if (S) return (e1.A.disable(), () => e1.A.enable());
        }, [S]),
        null == s)
    )
        return null;
    let K = Math.max(8, s.left - c - 8),
        H = null == E ? null : (0, tn.k_)(null == j.current ? E : (0, tn.y)(E, h.dx, h.dy), s);
    return (0, eJ.createPortal)(
        (0, a.jsxs)("div", {
            children: [
                (0, a.jsx)("div", {
                    className: tx.qe,
                    style: { left: s.left, top: s.top, width: s.width, height: s.height },
                    "aria-hidden": !0,
                }),
                (0, a.jsxs)("div", {
                    className: tx.Pw,
                    style: { left: s.left, top: s.top, width: s.width, height: s.height },
                    "data-testid": "conjure-edit-ink",
                    children: [
                        (0, a.jsx)("canvas", {
                            ref: p,
                            className: tx.Ji,
                            "data-tool": y,
                            "data-interactive": S && !l ? "" : void 0,
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
                                  className: tx.r1,
                                  style: { left: H.x, top: H.y, width: H.width, height: H.height },
                                  "aria-hidden": !0,
                                  children: [
                                      (0, a.jsx)("span", { className: tx.p$, "data-corner": "nw" }),
                                      (0, a.jsx)("span", { className: tx.p$, "data-corner": "ne" }),
                                      (0, a.jsx)("span", { className: tx.p$, "data-corner": "sw" }),
                                      (0, a.jsx)("span", { className: tx.p$, "data-corner": "se" }),
                                  ],
                              }),
                    ],
                }),
                null == u
                    ? null
                    : (0, a.jsx)(e8, {
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
                          onUploadFile: (e) => (0, e2.vX)(t, e),
                          onDismiss: $,
                          canSubmit: "" !== u.value.trim(),
                          closing: !1,
                      }),
                (0, a.jsx)("div", {
                    ref: x,
                    className: tx.ej,
                    style: { left: K, top: s.top },
                    "data-conjure-edit-rail": "",
                    children: (0, a.jsx)(tE, { projectId: t, state: n, onExit: O, onUndo: G, onRedo: z, onClear: U }),
                }),
            ],
        }),
        document.body,
    );
}
var tO = n(308081),
    tG = n(516521),
    tz = n(683071),
    tU = n(789645),
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
    let { title: t, trailing: n, children: l, className: r, headerClassName: i, ...s } = e;
    return (0, a.jsxs)("section", {
        className: o()(t2.Nr, r),
        ...s,
        children: [
            (0, a.jsxs)("header", {
                className: o()(t2.wx, null != n && t2.o5, i),
                children: [
                    (0, a.jsx)(j.E, { tag: "span", variant: "body-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var t4 = n(148590);
function t5(e) {
    let { children: t } = e;
    return (0, a.jsx)(j.E, { variant: "body-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function t7(e) {
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
        j = h ? eA.ChevronSmallDownIcon : t1.ChevronSmallRightIcon,
        b = null != n || l;
    return (0, a.jsxs)(t3, {
        ...m,
        title: t,
        trailing: b
            ? (0, a.jsxs)("span", {
                  className: t4.ZY,
                  children: [
                      n,
                      l
                          ? (0, a.jsx)(tQ.D, {
                                className: t4.L$,
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
        headerClassName: h ? void 0 : t4.RG,
        "data-superseded": l ? "true" : void 0,
        children: [c, (0, a.jsx)("div", { id: f, className: o()(t4.rf, u), hidden: !h, children: d })],
    });
}
n(321073);
var t9 = n(883646);
let t8 = [];
function t6(e) {
    let { status: t } = e;
    return (0, a.jsxs)("span", {
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
            (0, a.jsx)(b.y, {
                type: b.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: t9.Qd,
                itemClassName: t9.xB,
                "aria-hidden": !0,
            }),
            (0, a.jsx)("svg", {
                className: t9.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, a.jsx)("path", { className: t9.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function ne(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : t8), [n, t]),
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
        className: t9.X6,
        "data-shown": n && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: s } = n;
                return (0, a.jsx)(
                    tJ.u,
                    {
                        asset: (0, a.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: t9.MA,
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
            ((t = (r ?? t8).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
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
                    })(r ?? t8),
                [t],
            ));
    return (0, a.jsxs)("ul", {
        className: t9.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, a.jsxs)(
                    "li",
                    {
                        className: o()(t9.AS, { [t9.J1]: "completed" === n }),
                        "data-arriving": u.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(t6, { status: n }),
                            (0, a.jsx)(j.E, {
                                variant: "body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: t9.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", {
                                    className: t9.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, a.jsx)(ne, { agents: c.get(e.id) ?? t8, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, a.jsxs)("li", {
                      className: t9.AS,
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(t6, { status: "pending" }),
                          (0, a.jsx)(j.E, {
                              variant: "body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: t9.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: t9.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function nn(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: r = !0, live: i = !0, superseded: s = !1 } = e,
        { completed: u, total: o } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === o) return null;
    let c = T.intl.formatToPlainString(R.default["P/I+JW"], { completed: u, total: o }),
        d = T.intl.formatToPlainString(R.default["7tzwKB"], { completed: u, total: o });
    return (0, a.jsx)(t7, {
        title: T.intl.string(R.default.RtzECX),
        meta: (0, a.jsx)(t5, { children: c }),
        superseded: s,
        showLabel: T.intl.string(R.default.RKyN9q),
        hideLabel: T.intl.string(R.default.xydHoj),
        className: t9.Nr,
        bodyClassName: t9.rf,
        beforeBody: r && !s ? (0, a.jsx)(t0.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, a.jsx)(nt, { todos: t, provisional: n, agents: l, live: i }),
    });
}
var nl = n(308665),
    nr = n(59678),
    na = n(903847);
function ni(e) {
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
        [S, A] = i.useState(!1),
        [C, N] = i.useState(v);
    (C !== v && (N(v), v ? w(!0) : A(!1)),
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
              className: na.qd,
              "data-placement": m,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: o()(na.vK, { [na.ho]: p && d, [na.ET]: !d }),
                      children: [
                          null == c
                              ? (0, a.jsx)("ol", {
                                    className: o()(na.Rk, nr.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(tY.A, {
                                        glyph: (0, a.jsx)(nl.A, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(tQ.D, {
                                    className: na.pZ,
                                    onClick: c,
                                    "aria-label": T.intl.string(R.default.hEK6qu),
                                    children: (0, a.jsx)("ol", {
                                        className: o()(na.Rk, nr.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(tY.A, {
                                            glyph: (0, a.jsx)(nl.A, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          I
                              ? (0, a.jsx)(e3.m, {
                                    text: T.intl.string(R.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, a.jsx)(tQ.D, {
                                        className: na.BO,
                                        onClick: E,
                                        "aria-expanded": v,
                                        "aria-label": T.intl.string(R.default.RtzECX),
                                        children: (0, a.jsx)(tZ.ClipboardListIcon, {
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
                            className: o()(na.vB, { [na.pg]: v && S, [na.ui]: !v }),
                            children: (0, a.jsx)(nn, {
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
    return i.useMemo(
        () =>
            t
                .filter((t) => t.projectId !== e)
                .map((e) => ({ projectId: e.projectId, name: e.name, serverName: e.guildName })),
        [t, e],
    );
}
var np = n(736553),
    nx = n(382541),
    nv = n(890497),
    nj = n(103557),
    nb = n(29073),
    ny = n(590077);
function nk(e) {
    let { projectId: t, request: n, canSend: l, onDismiss: r, onSent: s } = e,
        u = (function (e, t, n, l, r) {
            let a = ng(e),
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
                S = i.useCallback((e) => {
                    u(e.slice(0, 10));
                }, []),
                A = d.trim(),
                C = n && !f && (w.length > 0 ? "" !== A : o.length > 0),
                N = i.useCallback(
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
                I = i.useCallback(() => {
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
                                        { ticket: r, baseUrl: a } = await (0, nx.dv)(e),
                                        i = new np.u();
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
                            n = [...o, ...t.map((e) => ({ target: e, prompt: A }))];
                        if (t.length === w.length || v.current) {
                            n.length > 0 && N(n);
                            return;
                        }
                        (c(n), u(w.filter((e) => !t.includes(e)).map((e) => e.projectId)), h(!1), p(!0));
                    });
                }, [C, N, o, e, w, A]),
                E = i.useCallback(() => {
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
        className: o()(nb.nd, nb.jx),
        "aria-labelledby": d,
        "data-conjure-app-build-request": n.id,
        children: [
            (0, a.jsxs)("div", {
                className: nb.wx,
                children: [
                    (0, a.jsx)(j.E, {
                        tag: "span",
                        id: d,
                        variant: "body-sm/medium",
                        color: "text-subtle",
                        className: nb.TK,
                        children: n.summary,
                    }),
                    (0, a.jsx)(tr.K, {
                        icon: tU.XSmallIcon,
                        size: "sm",
                        variant: "icon-only",
                        onClick: u.dismiss,
                        "aria-label": T.intl.string(R.default.KQUuAZ),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: ny.r,
                children: [
                    0 === c.length
                        ? (0, a.jsx)(j.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: T.intl.string(R.default.TbbzW5),
                          })
                        : (0, a.jsx)(nv.Z, {
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
                    (0, a.jsx)(nj.f, {
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
                className: nb.qr,
                children: (0, a.jsx)("div", {
                    className: nb.zt,
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
var nw = n(47167),
    nS = n(734057),
    nA = n(994500),
    nC = n(287809),
    nN = n(360047);
function nI(e, t, n) {
    let l = n[0]?.id;
    return null == l
        ? null
        : !0 === t.link
          ? { target: l, caller: e, key: `${l}:${e}` }
          : "incoming" === t.link
            ? { target: e, caller: l, key: `${e}:${l}` }
            : null;
}
function nE(e) {
    return 0 === e.options.length && null == e.input;
}
function n_(e) {
    return !1 !== e.allow_custom && !0 !== e.link && "incoming" !== e.link;
}
function nM(e, t, n) {
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
function nR(e, t) {
    return e.questions
        .map((e, n) => ({ question: e, index: n, answer: t[e.id] }))
        .filter((e) => null != e.answer && "" !== e.answer.text.trim())
        .map((e) => {
            let { question: t, index: n, answer: l } = e;
            return `${n + 1}. ${t.question} \u{2192} ${l.text.trim()}`;
        })
        .join("\n");
}
function nT(e, t, n, l) {
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
let nP = {
    [ev.rbe.GUILD_TEXT]: "text",
    [ev.rbe.GUILD_VOICE]: "voice",
    [ev.rbe.GUILD_ANNOUNCEMENT]: "announcement",
    [ev.rbe.GUILD_STAGE_VOICE]: "stage",
    [ev.rbe.GUILD_FORUM]: "forum",
    [ev.rbe.GUILD_MEDIA]: "media",
};
function nL(e, t, n, l) {
    return t.slice(0, 10).map((t) => ({
        id: t,
        name: n(t) ?? l.find((e) => e.id === t)?.name ?? t,
        ...(function (e, t) {
            if ("channel" === e) {
                var n;
                let l = null == (n = nS.A.getChannel(t)?.type) ? void 0 : nP[n];
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
let n$ = { channel: "#", role: "@", user: "@", project: "", server: "" },
    nD = {
        channel: [R.default["9+dfPT"], R.default.pGSJqE],
        role: [R.default["2VkCoD"], R.default.c8YlX8],
        user: [R.default.GZIAxl, R.default["4bptbQ"]],
        project: [R.default.twlOb6, R.default.twlOb6],
        server: [R.default.ZWXDeI, R.default.ZWXDeI],
    };
function nq(e, t) {
    return T.intl.string(nD[e][+!!t]);
}
var nF = n(658675),
    nO = n(123292),
    nG = n(900797),
    nz = n(331322),
    nU = n(771871),
    nB = n(700915),
    nK = n(985965),
    nH = n(831819);
function nV(e) {
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
            className: nH.Nz,
            children: (0, a.jsxs)(nz.B, {
                gap: 4,
                children: [
                    (0, a.jsx)(nB.A, {
                        caller: t.sides.caller,
                        target: t.sides.target,
                        callerProject: t.callerProject,
                        targetProject: t.targetProject,
                        flow: t.flow,
                    }),
                    null != t.purpose ? (0, a.jsx)(nK.A, { purpose: t.purpose }) : null,
                    null != o
                        ? (0, a.jsxs)("div", {
                              className: nH.em,
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
                                                (0, a.jsx)(nO.Q, {
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
                              className: nH.zM,
                              children: [
                                  (0, a.jsx)("span", { id: l, hidden: !0, children: t.aria }),
                                  (0, a.jsx)(nU.z, {
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
var nW = n(344587),
    nX = n(155078);
function nQ(e) {
    return !0 === e.upload || e.options.some((e) => null != e.image);
}
let nZ = [];
function nY(e) {
    return !0 !== e.upload
        ? null
        : 0 === e.options.length
          ? T.intl.string(R.default.ZZ641e)
          : T.intl.string(1 === e.options.length ? R.default["2g3gk9"] : R.default.dkzChE);
}
var nJ = n(762026);
function n0(e) {
    return e?.kind === "image" || (e?.kind === "multi" && null != e.attachment);
}
function n1(e, t) {
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
var n2 = n(682163),
    n3 = n(300344),
    n4 = n(614733),
    n5 = n(904363),
    n7 = n(950902),
    n9 = n(136722),
    n8 = n(778858),
    n6 = n(808728),
    le = n(696451),
    lt = n(71393),
    ln = n(488926),
    ll = n(426035),
    lr = n(246338);
let la = n9.kg(ev.xBc.VIEW_CHANNEL, ev.xBc.SEND_MESSAGES);
var li = n(384017);
function ls(e) {
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
        return nL(n.input ?? "channel", e, (e) => o.find((t) => t.value === e)?.label, l);
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
        className: li.YX,
        "data-conjure-clarification-picker": n.input,
        children: f
            ? (0, a.jsx)(nv.Z, {
                  ...p,
                  selectionMode: "multiple",
                  wrapTags: !0,
                  value: h,
                  onSelectionChange: (e) => i(g(e), t),
              })
            : (0, a.jsx)(nv.Z, {
                  ...p,
                  selectionMode: "single",
                  clearable: !0,
                  value: h[0] ?? null,
                  onSelectionChange: (e) => i(null == e ? [] : g([e]), t),
              }),
    });
}
function lu(e) {
    let { projectId: t, guildId: n, fallback: l, ...r } = e,
        s = (0, n3.A)(n, r.question.channel_filter);
    return (!(function (e) {
        let t,
            n,
            { projectId: l, guildId: r, question: a, value: s, disabled: u, onChange: o } = e,
            d =
                ((t = null != r && "channel" === a.input && "safety_alerts_channel" === a.default),
                (n = (0, c.bG)(
                    [eR.Ay],
                    () => {
                        let e = t ? eR.Ay.getProject(l) : null;
                        return null == e ? null : (0, ll.ug)(e);
                    },
                    [l, t],
                )),
                i.useEffect(() => {
                    null == r || null == n || le.Ay.isMember(r, n) || n8.A.requestMembersById(r, [n]);
                }, [r, n]),
                (0, c.bG)(
                    [n6.A, le.Ay, lt.A],
                    () => {
                        if (!t || null == r) return null;
                        let e = lt.A.getGuild(r)?.safetyAlertsChannelId,
                            l = n6.A.getChannels(r);
                        if (null == e || null == l) return null;
                        let i = (0, lr.Lp)(l, a.channel_filter).find((t) => t.id === e);
                        if (null == i) return null;
                        if (null != n && le.Ay.isMember(r, n))
                            return ln.$3({ permission: la, user: n, context: i }) ? i : null;
                        let s = i.permissionOverwrites[r]?.deny ?? n9.BY;
                        return n9.X8(s, la) ? null : i;
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
                            o(((e = []), nL("channel", [d.id], () => (0, nw.m1)(d, nC.default, nA.A), e)), r));
                    }
                    return;
                }
                1 !== s.length || s[0].id !== m.current ? (f.current = !0) : null == d && ((f.current = !0), o([], r));
            }
        }, [d, u, r, o, s]);
    })({ projectId: t, guildId: n, ...r }),
    null == s)
        ? l
        : (0, a.jsx)(ls, { ...r, guildId: n, options: s, placeholder: nq("channel", !0 === r.question.multi_select) });
}
function lo(e) {
    let { guildId: t, ...n } = e,
        l = (0, n5.A)(t);
    return (0, a.jsx)(ls, { ...n, guildId: t, options: l, placeholder: nq("role", !0 === n.question.multi_select) });
}
function lc(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: i } = (0, n4.A)(t);
    return (0, a.jsx)(ls, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: r,
        matchSorterOptions: i,
        placeholder: nq("user", !0 === n.question.multi_select),
    });
}
function ld(e) {
    let { projectId: t, fallback: n, ...l } = e,
        r = ng(t),
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
    return 0 === s.length ? n : (0, a.jsx)(ls, { ...l, options: s, placeholder: nq("project", !1) });
}
function lm(e) {
    let t = e.target;
    (0, e0.vq)(t, HTMLInputElement) && requestAnimationFrame(() => t.select());
}
function lf(e) {
    let { fallback: t, ...n } = e,
        l = (0, nh.z9)("ConjureClarificationEntityPicker"),
        r = i.useMemo(
            () =>
                l.map((e) => ({
                    id: `conjure-target-${e.id}`,
                    value: e.id,
                    label: e.name,
                    leading: (0, a.jsx)(n2.Ay, { guild: e, size: n2.Ay.Sizes.MINI, active: !0 }),
                })),
            [l],
        );
    return 0 === r.length
        ? t
        : (0, a.jsx)("div", {
              onFocus: lm,
              onMouseUp: lm,
              children: (0, a.jsx)(ls, { ...n, options: r, placeholder: nq("server", !1) }),
          });
}
function lh(e) {
    let { projectId: t, fallback: n = null, ...l } = e,
        r = (0, n7.Tj)(t, !0);
    if ("project" === l.question.input) return (0, a.jsx)(ld, { projectId: t, fallback: n, ...l }, l.question.id);
    if ("server" === l.question.input) return (0, a.jsx)(lf, { fallback: n, ...l }, l.question.id);
    if (null == r) return n;
    switch (l.question.input) {
        case "channel":
            return (0, a.jsx)(lu, { projectId: t, guildId: r, fallback: n, ...l }, l.question.id);
        case "role":
            return (0, a.jsx)(lo, { guildId: r, ...l }, l.question.id);
        case "user":
            return (0, a.jsx)(lc, { guildId: r, ...l }, l.question.id);
        default:
            return n;
    }
}
var lg = n(87221),
    lp = n(26430),
    lx = n(750943),
    lv = n(173936),
    lj = n(95477),
    lb = n(256905),
    ly = n(490707),
    lk = n(907702);
function lw(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: s, gone: u, handleError: c } = (0, ly._)(t, n),
        [d, m] = i.useState(null),
        f = null != s && d === s;
    return u
        ? (0, a.jsxs)("span", {
              className: o()(lk.Gt, lk.b6),
              children: [
                  (0, a.jsx)(lg.ImageWarningIcon, { size: "md", color: "currentColor" }),
                  (0, a.jsx)(j.E, {
                      tag: "span",
                      variant: "body-xs/medium",
                      color: "text-muted",
                      children: T.intl.string(R.default.lhgD88),
                  }),
              ],
          })
        : (0, a.jsx)("span", {
              className: o()(lk.Gt, { [lk.iP]: !f }),
              children:
                  null != s
                      ? (0, a.jsx)("img", {
                            src: s,
                            alt: l,
                            className: lk.Sl,
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
        className: o()(lk.Vs, { [lk.Q9]: s, [lk.RX]: u }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, a.jsxs)(tQ.D, {
                className: o()(lk.Up, { [lk.XF]: null != r.image }),
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
                        className: lk.$_,
                        children: [
                            null != r.image
                                ? (0, a.jsx)(lw, {
                                      projectId: l,
                                      attachmentId: r.image.attachment_id,
                                      alt: r.label,
                                      onMeasured: g,
                                  })
                                : (0, a.jsx)("span", { className: lk.Gt }),
                            (0, a.jsx)("span", {
                                className: lk.q3,
                                "aria-hidden": !0,
                                children: i
                                    ? (0, a.jsx)(nF.P, { checked: s, disabled: u })
                                    : (0, a.jsx)(nU.T, { checked: s, disabled: u }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(j.E, {
                        tag: "span",
                        variant: "body-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: lk.pG,
                        children:
                            "" !== (n = null != (t = r.image?.page_url ?? r.image?.url) ? (0, nX.E)(t) : "")
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
                      className: lk.B4,
                      children: (0, a.jsx)(e3.m, {
                          text: T.intl.string(R.default.HQEXJM),
                          children: (0, a.jsx)(tr.K, {
                              icon: to.TrashIcon,
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
                        className: lk.B4,
                        children: (0, a.jsx)(e3.m, {
                            text: T.intl.string(R.default["4/eeDD"]),
                            children: (0, a.jsx)(tr.K, {
                                icon: lp.MaximizeIcon,
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
function lA(e) {
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
                    Promise.all(n.map((e) => (0, e2.PK)(t, e.image.attachment_id))).then(
                        (e) => {
                            (0, lb.R)({
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
        className: lk.Nz,
        "data-conjure-image-options": !0,
        children: [
            0 === m.length && null == j
                ? null
                : (0, a.jsxs)("div", {
                      ref: h,
                      className: o()(lk.fF, "gallery" === f ? lk.nV : lk.nM, { [lk.m3]: d }),
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
            (0, a.jsx)(lC, {
                projectId: t,
                own: c,
                disabled: r,
                reachable: s,
                uploadText: T.intl.string(/\bicons?\b/i.test(n.question) ? R.default.qU4WN6 : R.default.cbMDDB),
            }),
        ],
    });
}
function lC(e) {
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
        className: lk.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, a.jsxs)("div", {
                className: lk.QJ,
                children: [
                    (0, a.jsx)(m.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: lx.ImagePlusIcon,
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
                              icon: lv.LinkIcon,
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
                        className: lk.Fg,
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
                ? (0, a.jsxs)("div", {
                      className: lk.vG,
                      children: [
                          (0, a.jsx)("div", {
                              className: lk.Hs,
                              children: (0, a.jsx)(lj.k, {
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
                              className: lk.gd,
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
                                  (0, a.jsx)(nO.Q, {
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
function lN(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: u } = e,
        c = i.useId(),
        d = !0 === t.recommended,
        m = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(tQ.D, {
        className: o()(li.uK, { [li.ue]: l, [li.h4]: !0 === u }),
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
                ? (0, a.jsx)("span", { className: li.dy, children: (0, a.jsx)(nF.P, { checked: u, disabled: l }) })
                : (0, a.jsx)("span", { className: li.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: li.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: li.l8,
                        children: (0, a.jsx)(j.E, {
                            tag: "span",
                            variant: "body-md/medium",
                            color: "none",
                            className: li.ed,
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
                      className: li.rM,
                      children: T.intl.string(R.default.zku6r1),
                  })
                : null,
        ],
    });
}
function lI(e) {
    let { projectId: t, question: n, selected: l, disabled: r, reachable: i = !0, onPick: s, own: u } = e,
        o = !0 === n.multi_select;
    return nQ(n)
        ? (0, a.jsx)(lA, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: i, onPick: s, own: u })
        : (0, a.jsx)(a.Fragment, {
              children: n.options.map((e, t) =>
                  (0, a.jsx)(
                      lN,
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
let lE = [],
    l_ = [];
function lM(e) {
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
        m = !0 === n.multi_select ? T.intl.string(R.default.tE8qbz) : nY(n);
    return (0, a.jsxs)("div", {
        className: o()(li.Ge, li.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            null == m
                ? null
                : (0, a.jsx)(j.E, {
                      tag: "div",
                      variant: "body-xs/normal",
                      color: "text-muted",
                      className: li.aK,
                      children: m,
                  }),
            (0, a.jsx)(lI, {
                projectId: t,
                question: n,
                selected: r,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: n1(u, c),
            }),
            !1 === n.allow_custom || (!0 !== n.upload && nQ(n))
                ? null
                : (0, a.jsxs)("div", {
                      className: li.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: li.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(h.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == d ? null : (0, a.jsx)("span", { className: o()(li.Pu, li.es), children: d }),
                      ],
                  }),
            !0 === n.upload
                ? (0, a.jsx)("div", {
                      className: li.$0,
                      children: (0, a.jsx)(nO.Q, {
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
function lR(e) {
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
        [S, A] = i.useState(() =>
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
                                let l = nI(e, t, n[t.id] ?? []);
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
                                let l = await (0, nN.LW)(e, t);
                                a((e) => ({ ...e, [n]: l }));
                            } catch {}
                        })(e.target, e.caller, e.key));
            }, [l]);
            let d = (0, c.cf)(
                [eR.Ay],
                () =>
                    Object.fromEntries(
                        Object.values(l).flatMap((e) => [e.target, e.caller].map((e) => [e, eR.Ay.getProject(e)])),
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
                                callerHasPreview: null == h || (0, ee._7)(h),
                                callerLiveOnVibeyard: !1,
                            },
                            p = s[i.key] ?? o.build,
                            x = t.questions.find((e) => e.id === a);
                        return {
                            sides: g,
                            callerProject: h ?? null,
                            targetProject: d[i.target] ?? null,
                            flow: x?.link_flow ?? o.flow,
                            purpose: (0, nJ.xP)(x?.link_purpose ?? o.purpose),
                            data: (0, nJ.Bw)(g, p),
                            value: p,
                            aria: (0, nJ.sr)(g),
                            onChange: (e) => u((t) => ({ ...t, [i.key]: e })),
                        };
                    },
                    [s, t, n, l, e, d, r],
                ),
            };
        })(n, l, S),
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
        [J, et] = i.useState({ id: Y.id, expanded: !1 }),
        en = J.id === Y.id && J.expanded,
        [el, er] = i.useState(null),
        ea = b[Y.id] ?? "",
        ei = !0 === Y.multi_select,
        es = nQ(Y),
        eu = ei ? T.intl.string(R.default.tE8qbz) : nY(Y),
        eo = ei
            ? (k[Y.id] ?? lE)
            : ((t = x[Y.id]), t?.kind === "option" ? [t.optionId] : t?.kind === "multi" ? t.optionIds : nZ),
        ec = (function (e, t, n) {
            let [l, r] = i.useState({}),
                [a, s] = i.useState({}),
                [u, o] = i.useState({}),
                c = T.intl.string(R.default.wTsP5l),
                d = i.useCallback((e) => l[e] ?? null, [l]),
                m = i.useCallback(
                    (e) => null != l[e.id] && (!0 === e.multi_select ? !0 === u[e.id] : n0(t[e.id])),
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
                        if (u) return n1(h, m(i));
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
                                    null != l && (0, e2.Vm)(e, l.attachment.id).catch(() => void 0), { ...n, [d]: t }
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
                                    ((0, e2.Vm)(e, h.attachment.id).catch(() => void 0),
                                    r((e) => {
                                        let { [d]: t, ...n } = e;
                                        return n;
                                    }),
                                    o((e) => ({ ...e, [d]: !1 })),
                                    n((e) => {
                                        if (f || !n0(e[d])) return e;
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
                                (0, e2.gm)(e, t).then(
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
        { text: ef, phase: eh } = (0, nW.Q)(Y.question),
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
                        let a = nR(t, n);
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
                                              let r = nI(e, t, [n]);
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
                                              return (0, nN.Ol)(t, n, l);
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
                let t = nM(l, e, Z);
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
        eS = i.useCallback(() => {
            X || 0 === Z || ej(Z - 1, "back");
        }, [X, Z, ej]),
        eC = 0 !== Z || X ? void 0 : d,
        eN = (Z > 0 && !X) || null != eC,
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
        eM = i.useMemo(() => (ei ? nT(Y, eo, ea, e_(Y)) : null), [ea, ei, e_, Y, eo]),
        eT = S[Y.id] ?? l_,
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
                      entities: eT,
                      ...(null == t ? {} : { guildId: t }),
                      ...("" === n ? {} : { custom: n }),
                      text: [
                          ...eT.map((t) => (t.name.startsWith(n$[e]) ? t.name : `${n$[e]}${t.name}`)),
                          ...("" === n ? [] : [n]),
                      ].join(", "),
                  })
                : null;
        }, [ea, C, eT, Y.id, Y.input]),
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
                        ? nT(Y, [t.optionId], ea)
                        : nT(Y, [], ea, t)
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
                          return null == nM(e, r, n) && "" === nR(e, r) ? null : r;
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
        e1 = i.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, e0.vq)(e.target, HTMLTextAreaElement) ||
                    (0, e0.vq)(e.target, HTMLInputElement) ||
                    ((!(0, e0.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && eN
                            ? (e.preventDefault(), (eC ?? eS)())
                            : "ArrowRight" === e.key && eZ && (e.preventDefault(), eJ())));
            },
            [eC, eN, eZ, eS, eJ],
        ),
        e4 =
            es && !0 !== Y.upload
                ? null
                : (0, a.jsxs)("div", {
                      className: li.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: li.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(h.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          (0, a.jsx)(e5.y, {
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
                              placeholder: T.intl.string(nE(Y) ? R.default.yLN1x6 : R.default["tOC+tn"]),
                              "aria-label": T.intl.formatToPlainString(R.default["4JeYPB"], { question: Y.question }),
                              disabled: X,
                              rows: 1,
                              className: li.Pu,
                              "data-conjure-clarification-other": Y.id,
                          }),
                      ],
                  });
    return (0, a.jsxs)("section", {
        className: o()(li.$O, { [li.fI]: eU && !eK, [li.Oh]: eK }),
        role: "dialog",
        "aria-label": Y.question,
        "data-conjure-clarification": l.id,
        "data-state": X ? "inert" : "open",
        "data-question-expanded": en ? "true" : void 0,
        "data-picker-open": _ && !z ? "true" : void 0,
        "data-step": Z,
        tabIndex: -1,
        onKeyDown: e1,
        children: [
            (0, a.jsxs)("div", {
                className: li.rf,
                style: null == O ? void 0 : { height: O.heading + O.rows },
                "data-moving": z ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: B,
                        className: li.wx,
                        children: [
                            (0, a.jsx)(j.E, {
                                ref: H,
                                tag: "span",
                                id: `${Y.id}-label`,
                                variant: "body-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: en ? void 0 : p,
                                className: o()(nb.TK, li.R_, { [li.TB]: "exit" === eh, [li.JU]: "enter" === eh }),
                                children: ef,
                            }),
                            ep || en
                                ? (0, a.jsx)("div", {
                                      className: nb.Q7,
                                      children: (0, a.jsx)(e3.m, {
                                          text: ex,
                                          children: (0, a.jsx)(tr.K, {
                                              icon: en ? nG.ChevronSmallUpIcon : eA.ChevronSmallDownIcon,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => et({ id: Y.id, expanded: !en }),
                                              "aria-label": ex,
                                              "aria-controls": `${Y.id}-label`,
                                              "aria-expanded": en,
                                          }),
                                      }),
                                  })
                                : null,
                            null == s
                                ? null
                                : (0, a.jsx)(tQ.D, {
                                      className: o()(nb.gb, nb.Q7),
                                      onClick: eV,
                                      "aria-label": T.intl.string(R.default.qVXlk0),
                                      "data-conjure-clarification-close": !0,
                                      children: (0, a.jsx)(tU.XSmallIcon, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: li.Cg,
                        style: null == O ? void 0 : { insetBlockStart: O.heading },
                        children: (0, a.jsxs)("div", {
                            className: li.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: V,
                                    className: li.Ge,
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
                                                  className: li.aK,
                                                  children: eu,
                                              }),
                                        (0, a.jsx)(lI, {
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
                                                                  ((n = t[Y.id] ?? lE),
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
                                            ? (0, a.jsx)(lh, {
                                                  projectId: n,
                                                  question: Y,
                                                  value: eT,
                                                  disabled: X,
                                                  onChange: e$,
                                                  onFocus: eD,
                                                  onBlur: eq,
                                                  fallback: n_(Y) ? null : e4,
                                              })
                                            : null,
                                        null != eP ? (0, a.jsx)(nV, { link: eP, disabled: X }) : null,
                                        null != Y.note
                                            ? (0, a.jsx)(j.E, {
                                                  tag: "div",
                                                  variant: "body-xs/normal",
                                                  color: "text-muted",
                                                  className: li.aK,
                                                  children: Y.note,
                                              })
                                            : null,
                                        n_(Y) ? e4 : null,
                                        !0 === Y.upload
                                            ? (0, a.jsx)("div", {
                                                  className: li.$0,
                                                  children: (0, a.jsx)(nO.Q, {
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
                                          lM,
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
            Q > 1 || ei || es || null != Y.input || null != d || !0 === Y.optional || nE(Y)
                ? (0, a.jsxs)("div", {
                      className: nb.qr,
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
                              className: nb.zt,
                              children: [
                                  eN
                                      ? (0, a.jsx)(nO.Q, {
                                            variant: "secondary",
                                            textVariant: "body-sm/medium",
                                            text: f ?? T.intl.string(R.default.Pk5lfA),
                                            onClick: eC ?? eS,
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
var lT = n(71637),
    lP = n(557744),
    lL = n(223347),
    l$ = n(27232),
    lD = n(505930),
    lq = n(506774),
    lF = n(385081);
let lO = "conjurePublishRatings",
    lG = "conjurePublishRatingViews",
    lz = [1, 2, 3, 4, 5],
    lU = { 1: R.default.GhbsGA, 2: R.default.cm0nwU, 3: R.default.kGvlh2, 4: R.default.dVBSUg, 5: R.default.DKlgF7 };
function lB(e) {
    return T.intl.string(lU[e]);
}
let lK = new Set(),
    lH = 0;
function lV() {
    return lq.w.get(lO) ?? {};
}
function lW(e, t) {
    return lV()[e]?.[t] ?? null;
}
function lX(e) {
    return (lK.add(e), () => lK.delete(e));
}
function lQ(e) {
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
var lZ = n(693654);
function lY(e) {
    let { dimension: t, value: n, disabled: l, onChange: r } = e,
        s = i.useId(),
        u = i.useId();
    return (0, a.jsxs)("div", {
        className: lZ.zm,
        children: [
            (0, a.jsx)(j.E, { id: s, variant: "body-sm/medium", color: "text-default", children: (0, eH.wy)(t) }),
            (0, a.jsx)("div", {
                role: "radiogroup",
                "aria-labelledby": s,
                "aria-required": !0,
                className: lZ.uf,
                children: lz.map((e) => {
                    let i = null != n && e <= n,
                        s = i ? l$.StarIcon : lD.StarOutlineIcon;
                    return (0, a.jsxs)(
                        "label",
                        {
                            className: lZ.uK,
                            children: [
                                (0, a.jsx)("input", {
                                    type: "radio",
                                    name: u,
                                    value: e,
                                    checked: n === e,
                                    disabled: l,
                                    onChange: () => r(e),
                                    className: lZ.hF,
                                    "aria-label": (0, eH.MF)(t, e),
                                }),
                                (0, a.jsx)("span", {
                                    className: o()(lZ.d4, { [lZ.cO]: i }),
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
function lJ(e) {
    let { pending: t } = e,
        n = (0, eH.PM)(t),
        l = i.useId();
    return (0, a.jsx)("section", {
        className: lZ.Nr,
        "aria-labelledby": l,
        children: (0, a.jsxs)(nz.B, {
            gap: 12,
            children: [
                (0, a.jsxs)(nz.B, {
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
                (0, a.jsxs)(nz.B, {
                    gap: 4,
                    children: [
                        n.dimensions.map((e) =>
                            (0, a.jsx)(
                                lY,
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
                (0, a.jsx)(nj.f, {
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
                (0, a.jsx)(nz.B, {
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
var l0 = n(894443),
    l1 = n(525530),
    l2 = n(564963),
    l3 = n(530557),
    l4 = n(431527),
    l5 = n(628284);
let l7 = new Set(["select", "channel", "role", "user"]);
function l9(e, t) {
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
function l8(e, t) {
    let n = e.keys ?? [];
    return n.length > 0 ? n : t.schema.map((e) => e.key);
}
var l6 = n(914250),
    re = n(202723);
function rt(e) {
    let { projectId: t, cardId: l, request: r, status: s, awaiting: u, onDismiss: c } = e,
        d = i.useCallback(() => {
            (0, K.mM)(async () => {
                let { default: e } = await Promise.all([n.e(291953), n.e(197826)]).then(n.bind(n, 644441));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        f = i.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: l3.KeyIcon })), [r.fields]),
        h = (0, l2.bB)(l, s),
        g = o()(re.Lo, { [re.jY]: h });
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
                    (0, a.jsx)(l4.C, { label: T.intl.string(R.default.HCQvpO), size: "xs", items: f }),
                ],
            },
            s,
        );
    if ("pending" === s)
        return (0, a.jsx)(
            "article",
            {
                className: re.Lo,
                children: (0, a.jsx)(l4.C, { label: T.intl.string(R.default.HCQvpO), size: "xs", items: f }),
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
                        className: re.$h,
                        children: [
                            (0, a.jsx)("span", {
                                className: re.c9,
                                "aria-hidden": !0,
                                children: (0, a.jsx)(l5.CircleCheckIcon, {
                                    size: "xs",
                                    color: td.A.colors.ICON_FEEDBACK_POSITIVE,
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
              className: o()(nb.nd, re.fw),
              "aria-label": T.intl.string(R.default.O0QIqj),
              children: [
                  (0, a.jsxs)("div", {
                      className: nb.wx,
                      children: [
                          (0, a.jsx)(l3.KeyIcon, { size: "xs", color: td.A.colors.TEXT_BRAND, "aria-hidden": !0 }),
                          (0, a.jsx)(j.E, {
                              tag: "span",
                              variant: "body-sm/semibold",
                              color: "text-brand",
                              className: nb.TK,
                              children: T.intl.string(R.default.O0QIqj),
                          }),
                          (0, a.jsx)(tQ.D, {
                              className: o()(nb.gb, nb.Q7),
                              onClick: c,
                              "aria-label": T.intl.string(R.default.Hl7rif),
                              children: (0, a.jsx)(tU.XSmallIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                      ],
                  }),
                  (0, a.jsxs)("div", {
                      className: re.DQ,
                      children: [
                          (0, a.jsx)(l6.A, { text: p, variant: "body-sm/normal", color: "text-default" }),
                          (0, a.jsx)(l4.C, { label: T.intl.string(R.default.HCQvpO), size: "xs", items: f }),
                      ],
                  }),
                  (0, a.jsxs)("div", {
                      className: nb.qr,
                      children: [
                          (0, a.jsx)(j.E, {
                              variant: "body-xs/normal",
                              color: "text-muted",
                              className: re.xE,
                              children: T.intl.string(R.default["2OdXdn"]),
                          }),
                          (0, a.jsx)("div", { className: nb.zt, children: x }),
                      ],
                  }),
              ],
          })
        : (0, a.jsxs)("article", {
              className: re.Lo,
              children: [
                  (0, a.jsx)(j.E, {
                      variant: "body-xs/semibold",
                      color: null != u ? "text-brand" : "text-muted",
                      tag: "span",
                      children: T.intl.string(null != u ? R.default.O0QIqj : R.default.HCQvpO),
                  }),
                  (0, a.jsx)(l6.A, { text: p, variant: "body-sm/normal", color: "text-default" }),
                  (0, a.jsx)(l4.C, { label: T.intl.string(R.default.HCQvpO), size: "xs", items: f }),
                  (0, a.jsx)("div", { className: re.sq, children: x }),
              ],
          });
}
var rn = n(442331),
    rl = n(513425);
let rr = new Set(),
    ra = new Set();
function ri(e) {
    return (
        ra.add(e),
        () => {
            ra.delete(e);
        }
    );
}
function rs() {
    return i.useSyncExternalStore(ri, () => rr);
}
function ru(e) {
    let t = new Set(),
        n = new Set(),
        l = !1,
        r = !1;
    for (let a = e.length - 1; a >= 0; a--) {
        let i = e[a];
        if (null == i || "assistant" !== i.role || null == i.settingsRequest || !(0, tV.BL)(i)) continue;
        let s = i.settingsRequest.keys ?? [];
        for (let e of ((r || (0 === s.length ? l : s.some((e) => n.has(e)))) && t.add(i.id), s)) n.add(e);
        ((l = !0), (r = r || 0 === s.length));
    }
    return t;
}
function ro(e, t, n) {
    if (!n || null == t) return !1;
    let l = l8(e, t);
    return l.length > 0 && !l9({ keys: l }, t);
}
var rc = n(782973),
    rd = n(290713),
    rm = n(411236);
function rf(e) {
    let { projectId: t, request: n, askId: l, onDismiss: r, notifyAgent: s = !0 } = e,
        {
            done: u,
            superseded: d,
            summary: f,
            markSaved: h,
        } = (function (e, t, n) {
            let l = rs(),
                [r, a] = i.useState(!1),
                s = null != n ? l.has(n) : r,
                u = i.useCallback(() => {
                    if (null != n) {
                        if (!rr.has(n)) for (let e of ((rr = new Set([...rr, n])), ra)) e();
                    } else a(!0);
                }, [n]),
                o = (0, c.bG)([rn.A], () => ro(t, rn.A.getSettings(e), s), [e, t, s]);
            return {
                done: o,
                superseded: (0, c.bG)([rl.A], () => null != n && ru(rl.A.getMessages(e)).has(n), [e, n]),
                summary: (0, c.yK)(
                    [rn.A, nS.A],
                    () => {
                        var n;
                        let l = rn.A.getSettings(e);
                        return null == l
                            ? []
                            : ((n = (e) => nS.A.getChannel(e)?.name ?? null),
                              l8(t, l).flatMap((e) => {
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
            className: rm.Mk,
            children: (0, a.jsx)(j.E, {
                variant: "body-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: T.intl.string(R.default["+uXDk+"]),
            }),
        });
    if (g)
        return (0, a.jsxs)("article", {
            className: rm.Mk,
            children: [
                (0, a.jsxs)("div", {
                    className: rm.Ol,
                    children: [
                        (0, a.jsx)(l5.CircleCheckIcon, {
                            size: "xs",
                            color: td.A.colors.ICON_FEEDBACK_POSITIVE,
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
    let p = n.keys?.length === 1 && n.keys[0] === rc.B,
        x = null != n.note && "" !== n.note ? n.note : p ? null : T.intl.string(R.default.XuOf5s);
    return (0, a.jsx)(rd.A, {
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
                      className: rm.Mk,
                      onSubmit: s,
                      children: [
                          (0, a.jsx)(j.E, {
                              variant: "body-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: T.intl.string(R.default["jZjP+I"]),
                          }),
                          null != x
                              ? (0, a.jsx)(l6.A, { text: x, variant: "body-sm/normal", color: "text-default" })
                              : null,
                          t,
                          (0, a.jsx)("div", { className: rm.p0, children: u }),
                      ],
                  })
                : (0, a.jsxs)("form", {
                      className: o()(nb.nd, nb.jx),
                      "aria-label": T.intl.string(R.default["jZjP+I"]),
                      onSubmit: s,
                      children: [
                          (0, a.jsxs)("div", {
                              className: nb.wx,
                              children: [
                                  (0, a.jsx)(j.E, {
                                      tag: "span",
                                      variant: "body-sm/medium",
                                      color: "text-subtle",
                                      className: nb.TK,
                                      children: T.intl.string(R.default["jZjP+I"]),
                                  }),
                                  (0, a.jsx)(tQ.D, {
                                      className: o()(nb.gb, nb.Q7),
                                      onClick: r,
                                      "aria-label": T.intl.string(R.default["iq+Pte"]),
                                      children: (0, a.jsx)(tU.XSmallIcon, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: rm.DQ,
                              children: [
                                  null != x
                                      ? (0, a.jsx)(l6.A, { text: x, variant: "body-sm/normal", color: "text-default" })
                                      : null,
                                  t,
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: nb.qr,
                              children: [
                                  (0, a.jsx)(j.E, {
                                      variant: "body-xs/normal",
                                      color: "text-muted",
                                      className: rm.xE,
                                      children: T.intl.string(R.default["1w0jMk"]),
                                  }),
                                  (0, a.jsxs)("div", {
                                      className: nb.zt,
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
var rh = n(975571),
    rg = n(427123);
let rp = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
var rx = n(874421),
    rv = n(932111),
    rj = n(940874),
    rb = n(404373),
    ry = n(89222);
function rk(e) {
    return "" !== ry.A.getDraft(e).trim();
}
var rw = n(29080);
function rS(e) {
    var t;
    let n,
        l,
        { steps: r, content: a, hasProposal: i, hasLiveClarification: s = !1, hasAttachments: u } = e,
        o = (0, tH.B4)(r),
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
        })({ hasAttachments: u, showsClosingMessage: h, endsOnStreamedMessage: (0, tH.Lf)(r) }),
    };
}
var rA = n(62617),
    rC = n(182368);
let rN = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    rI = {
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
    rE = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    u = i.useMemo(
                        () => (0, rA.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    className: (0, rA.Z)(),
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
                        () => (0, rA.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    className: (0, rA.Z)(),
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
                        () => (0, rA.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    className: (0, rA.Z)(),
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
                        () => (0, rA.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    className: (0, rA.Z)(),
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
                        () => (0, rA.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    className: (0, rA.Z)(),
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
                        () => (0, rA.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    className: (0, rA.Z)(),
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
                        () => (0, rA.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    className: (0, rA.Z)(),
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
                        () => (0, rA.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    className: (0, rA.Z)(),
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
                        () => (0, rA.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    className: (0, rA.Z)(),
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
                        () => (0, rA.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    className: (0, rA.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        bot: { Illocon: rC.u, tint: "var(--illo-purple-40)" },
    };
function r_(e) {
    return { ...rE[e], name: T.intl.string(rI[e]()) };
}
function rM(e) {
    return rN.includes(e) ? r_(e) : void 0;
}
function rR(e) {
    let t = new Map();
    for (let [n, l] of (function (e) {
        let t = 0,
            n = e[0] ?? "";
        for (let e = 0; e < n.length; e++) t = (31 * t + n.charCodeAt(e)) % rN.length;
        let l = new Map();
        return (
            e.forEach((e, n) => {
                l.set(e, rN[(t + n) % rN.length]);
            }),
            l
        );
    })(e))
        t.set(n, r_(l));
    return t;
}
var rT = n(615839);
function rP(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : T.intl.string(R.default.KcFvbo);
}
var rL = n(60160),
    r$ = n(101147);
function rD(e) {
    let t = (0, tH.SY)(e.steps);
    return null != t ? (0, tH.WQ)(t) : rP(e.task);
}
function rq(e) {
    let t = rR(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? rM(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: rP(e.task),
                      todoId: e.task.todoId,
                      line: rD(e),
                  },
              ];
    });
}
function rF(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: i, connectsDown: s } = e,
        u = n.task,
        o = "running" === u.status,
        c = (0, tH.SY)(n.steps),
        d = o
            ? rD(n)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(rP(e));
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
                                  duration: (0, rT.MB)(e.durationMs),
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
                                    className: nr.dO,
                                    children: n.steps.map((e) =>
                                        (0, a.jsx)(
                                            r$.A,
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
                                      className: nr.iq,
                                      children: (0, a.jsx)(rL.A, { text: e, variant: "body-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, a.jsx)(tY.A, {
        glyph: (0, a.jsx)(tJ.u, {
            asset: (0, a.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: rP(u),
            position: "left",
            children: (0, a.jsx)("span", {
                className: nr.nC,
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
var rO = n(998445),
    rG = n(643210),
    rz = n(648127),
    rU = n(372795),
    rB = n(163897);
let rK = "conjure-browser-viewer";
function rH(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, c.yK)(
            [rG.A],
            () =>
                n.flatMap((e) => {
                    let n = rG.A.getTab(t, e);
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
        className: rB.kR,
        "aria-label": T.intl.string(R.default.Uvkr1G),
        children: l.map((e) =>
            (0, a.jsx)("li", { children: (0, a.jsx)(rV, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function rV(e) {
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
        c = (0, K.Ry)(rK),
        [d, m] = i.useState(!1),
        f = i.useCallback((e, t) => m(t), []),
        { ended: h } = l,
        g = (0, rz.i)(l.session);
    return (0, a.jsxs)(tQ.D, {
        innerRef: s,
        className: o()(rB.Nr, h && rB.Xj),
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
                    { modalKey: rK },
                )
            );
        },
        "aria-label": T.intl.formatToPlainString(R.default.G3a822, { title: g }),
        children: [
            (0, a.jsxs)("div", {
                className: rB.Gt,
                children: [
                    (0, a.jsx)(rU.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !u || c || h,
                        className: rB.Ji,
                        "aria-label": T.intl.formatToPlainString(R.default.rnwqXb, { name: g }),
                        onStateChange: f,
                    }),
                    d
                        ? null
                        : (0, a.jsx)("div", {
                              className: rB.qf,
                              children: (0, a.jsx)(rO.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    h
                        ? (0, a.jsx)("div", {
                              className: rB.HS,
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
                className: rB.pG,
                children: [
                    (0, a.jsx)("span", { className: o()(rB.W9, h && rB.oM) }),
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
var rW = n(268409);
let rX = new WeakMap(),
    rQ = new WeakMap();
function rZ(e) {
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
            [rl.A],
            () => {
                if (0 === s.length) return s;
                let e = (function (e) {
                    let t = rX.get(e);
                    if (null != t) return t;
                    let n = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = rQ.get(e);
                            if (null == t) {
                                let n = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) n.push(e);
                                ((t = n), rQ.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            n.set(e, t.steps);
                    return (rX.set(e, n), n);
                })(rl.A.getMessages(t));
                return s.filter((t) => e.get(t) === n);
            },
            [s, t, n],
        );
    return 0 === u.length
        ? null
        : (0, a.jsx)("li", { className: rW.h, children: (0, a.jsx)(rH, { projectId: t, sessionIds: u }) });
}
var rY = n(469393);
function rJ(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, H.lG)(t.authored_at);
    return (0, a.jsx)(t3, {
        title: T.intl.string(R.default["t+b0rz"]),
        children: (0, a.jsxs)("div", {
            className: rY.r,
            children: [
                (0, a.jsxs)("div", {
                    className: rY.z,
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
var r0 = n(493490),
    r1 = n(17742);
let r2 = [];
function r3(e) {
    let t = (0, c.bG)([r0.A], () => (null != e ? r0.A.getCaptures(e) : r2)),
        n = (0, c.bG)([r0.A], () => (null != e ? r0.A.getSelectedCapture(e) : null)),
        [l, r] = i.useState(null),
        a = null != n ? `${n.id}:${n.image_etag}` : null;
    return (
        i.useEffect(() => {
            if (null == e || null == n || null == a) return;
            let t = !1;
            return (
                (async () => {
                    try {
                        let l = await (0, r1._F)(e, n);
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
var r4 = n(714917),
    r5 = n(463660),
    r7 = n(970211);
function r9(e) {
    let { projectId: t, gameCaptures: n = !1 } = e,
        {
            src: l,
            blurred: r,
            handleError: s,
        } = (function (e, t) {
            let n = (0, c.bG)([r4.A], () => (null != e ? r4.A.getBackground(e) : null)),
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
                                r = await (0, r5.Mg)(e, l);
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
        u = r3(n ? t : null);
    return null != u.selected
        ? null != u.src
            ? (0, a.jsx)("img", { className: r7.F1, src: u.src, alt: "", "aria-hidden": !0 })
            : null
        : null == l
          ? null
          : (0, a.jsx)("img", {
                className: o()(r7.LO, { [r7.Ty]: r }),
                src: l,
                alt: "",
                "aria-hidden": !0,
                onError: s,
            });
}
var r8 = n(155718);
function r6(e, t) {
    return e.supported_surfaces?.includes(t) === !0;
}
let ae = ["command", "user_command", "message_command", "message"],
    at = new Set([r8.kc.CHAT, r8.kc.USER, r8.kc.MESSAGE]);
function an(e) {
    return e.type ?? r8.kc.CHAT;
}
function al(e) {
    return at.has(an(e));
}
function ar(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function aa(e, t) {
    let n = ae.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !ar(e)), ...n.filter(ar)].slice(0, 3);
    for (let r of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(r) || ar(r) || l.push(r);
    }
    return ae.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
function ai(e, t, n) {
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
    let s = e.commands.filter(al).map((e) =>
            (function (e, t) {
                let n = e.description?.trim() ?? "",
                    l = "" !== n ? n : t.reply;
                switch (an(e)) {
                    case r8.kc.USER:
                        return { kind: "user_command", user: e.name, bot: l };
                    case r8.kc.MESSAGE:
                        return { kind: "message_command", user: e.name, bot: l };
                    default:
                        return { kind: "command", user: `/${e.name}`, bot: l };
                }
            })(e, n),
        ),
        u = "messages" === t ? [] : s.filter(ar),
        o = a.length > 0 ? aa([...a, ...u], !0) : aa("both" === t ? [...s, i] : s, !1);
    return o.length > 0 ? o : [r];
}
var as = n(377941),
    au = n.n(as);
function ao(e) {
    let t = e.split("_").join(" ").toLowerCase();
    return 0 === t.length ? t : t[0].toUpperCase() + t.slice(1);
}
function ac(e) {
    return e.type === r8.kc.PRIMARY_ENTRY_POINT
        ? "\u21EA /"
        : e.type === r8.kc.USER || e.type === r8.kc.MESSAGE
          ? ""
          : "/";
}
let ad = {
        [ee.q7.APP_CHANNEL]: R.default["3/aHX6"],
        [ee.q7.VOICE_CHANNEL]: R.default["3/aHX6"],
        [ee.q7.ACTIVITY]: R.default["3/aHX6"],
        [ee.q7.OVERLAY]: R.default["rPpf5/"],
        [ee.q7.PROFILE_WIDGET]: null,
        [ee.q7.AUTOMOD]: null,
        [ee.q7.BOT]: null,
        [ee.q7.APPLICATION_COMMANDS]: null,
    },
    am = [ee.q7.ACTIVITY, ee.q7.APP_CHANNEL, ee.q7.VOICE_CHANNEL, ee.q7.OVERLAY];
function af(e) {
    return am.find((t) => r6(e, t)) ?? null;
}
let ah = 1920 / 1018;
function ag(e, t) {
    return `${Number(((e / t) * 100).toFixed(3))}%`;
}
let ap = ag(24, 1018),
    ax = ag(24, 1920);
function av(e) {
    return null != e.overlay_design_image
        ? e.overlay_design_image
        : e.design_image?.name === "overlay-design-v2.png"
          ? e.design_image
          : null;
}
var aj = n(90947),
    ab = (((l = {}).IMAGE = "image"), l),
    ay = (((r = {}).PRIVATE = "private"), (r.PUBLIC = "public"), r),
    ak = n(598748),
    aw = n(773669);
let aS = [],
    aA = {},
    aC = {};
function aN(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function aI(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: ab.IMAGE,
        visibility: ay.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var aE = n(127258),
    a_ = n(803306),
    aM = n(587895),
    aR = n(432005),
    aT = n(963852),
    aP = n(95701),
    aL = n(619019),
    a$ = n(427262);
let aD = new aP.nA({ id: "1337", guild_id: "1337", type: ev.rbe.GUILD_TEXT, name: "preview" });
function aq(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = (0, c.bG)([nC.default], () => nC.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            r && a?.username !== t && (0, a_.nj)(new aL.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, a, e, t, l, n]),
        a
    );
}
let aF = /^@\S+/;
var aO = n(775602);
let aG = [R.default["3eTjcV"], R.default.l3j5nS];
var az = n(97808),
    aU = n(778712),
    aB = n(486020),
    aK = n(46054),
    aH = n(200700);
let aV = {
        alert: { label: () => T.intl.string(R.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => T.intl.string(R.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => T.intl.string(R.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => T.intl.string(R.default.RGzFNK), blockedStyle: !1 },
    },
    aW = {
        blocked: { label: () => T.intl.string(R.default.YdnZ8q), tone: "red" },
        alert: { label: () => T.intl.string(R.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => T.intl.string(R.default.RGzFNK), tone: "green" },
    },
    aX = ["blocked", "alert", "allowed"],
    aQ = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
function aZ(e) {
    var t, n;
    let l,
        r = [
            "timeout" !== (t = e).outcome || null == t.timeout_seconds
                ? null
                : T.intl.formatToPlainString(T.t["3LYql6"], {
                      duration:
                          ((n = t.timeout_seconds),
                          null != (l = (0, aH.getFriendlyDurationString)(n))
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
var aY = n(984097),
    aJ = n(13673);
let a0 = { blurple: "text-brand", red: "text-feedback-critical", green: "text-feedback-positive" };
function a1(e) {
    let { example: t } = e,
        n = aZ(t);
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
let a2 = ["glazedgamer", "sprinkles", "donutking"];
function a3(e) {
    var t;
    let { example: n, username: l, showReason: r } = e,
        { label: i, blockedStyle: s } = aV[n.outcome];
    return (0, a.jsxs)("li", {
        className: o()(aY.nM, { [o()(aY.HV, aJ.DX)]: s }),
        children: [
            (0, a.jsx)(t0.A, { children: `${i()}: ` }),
            (0, a.jsx)("span", {
                className: aY.my,
                children: (0, a.jsx)(az.eu, {
                    src: (0, aB.AE)(void 0, void 0),
                    size: aU._3.SIZE_24,
                    "aria-label": T.intl.string(R.default["1yI0xV"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: aY.fw,
                children: [
                    (0, a.jsx)(j.E, { variant: "body-sm/semibold", color: "text-strong", children: l }),
                    (0, a.jsx)(j.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), aK.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    r ? (0, a.jsx)(a1, { example: n }) : null,
                ],
            }),
        ],
    });
}
function a4(e) {
    let { group: t, firstIndex: n } = e,
        l = i.useId(),
        r = aW[t.section],
        s = new Set(t.examples.map(aZ)),
        u = 1 === s.size ? t.examples.map(aZ)[0] : null;
    return (0, a.jsxs)("div", {
        className: aY.UO,
        children: [
            (0, a.jsxs)("div", {
                className: aY.RZ,
                children: [
                    (0, a.jsx)(j.E, {
                        id: l,
                        variant: "body-xs/semibold",
                        color: a0[r.tone],
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
                                      className: aY.IQ,
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
                className: aY.m7,
                "aria-labelledby": l,
                children: t.examples.map((e, t) =>
                    (0, a.jsx)(a3, { example: e, username: a2[(n + t) % a2.length], showReason: s.size > 1 }, t),
                ),
            }),
        ],
    });
}
function a5(e) {
    var t;
    let { automod: n } = e,
        l =
            ((t = n.examples),
            aX
                .map((e) => ({ section: e, examples: t.filter((t) => aQ[t.outcome] === e) }))
                .filter((e) => e.examples.length > 0)),
        r = n.rule_name.trim();
    return (0, a.jsxs)("div", {
        className: aY.Nr,
        children: [
            "" !== r
                ? (0, a.jsx)("div", {
                      className: aY.hk,
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
                    a4,
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
var a7 = n(276293),
    a9 = n(460905),
    a8 = n(110384),
    a6 = n(365199),
    ie = n(633018),
    it = n(763754),
    il = n(267508),
    ir = n(194085),
    ia = n(20851),
    ii = n(692508),
    is = n(798819);
function iu(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, a.jsxs)("div", {
        className: o()(is.item, is.labelContainer, is.colorDefault, {
            [is.focused]: !0 === t.highlighted,
            [is.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, a.jsx)("div", {
                      className: is.iconContainerLeft,
                      children: (0, a.jsx)(n, { color: "currentColor", className: is.icon }),
                  })
                : null,
            (0, a.jsx)("div", { className: o()(is.label, ii.Gy), children: t.label }),
            null != l
                ? (0, a.jsx)("div", {
                      className: is.iconContainer,
                      children: (0, a.jsx)(l, { color: "currentColor", className: is.icon }),
                  })
                : null,
        ],
    });
}
function io(e) {
    let { target: t, commandName: n, appIconSrc: l } = e,
        r = i.useMemo(
            () =>
                null != l
                    ? (e) => {
                          let { className: t } = e;
                          return (0, a.jsx)("img", { src: l, alt: "", className: o()(t, ii.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: T.intl.string(T.t["5IEsGx"]), icon: a8.ArrowAngleLeftUpIcon, muted: !0 }
                : { label: T.intl.string(T.t.LYju5J), muted: !0 };
    return (0, a.jsx)("div", {
        className: o()(is.menu, ii.MK),
        "aria-hidden": !0,
        children: (0, a.jsxs)("div", {
            className: is.scroller,
            children: [
                (0, a.jsx)(iu, { item: s }),
                (0, a.jsx)("div", { className: is.separator }),
                (0, a.jsx)(iu, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
function ic() {}
function id(e) {
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
        } = ((t = (0, c.bG)([nC.default], () => nC.default.getCurrentUser())),
        (n = (0, c.bG)([eR.Ay], () => eR.Ay.getProject(p))),
        (l = n?.preview_application_id ?? n?.application_id),
        (r = (0, c.bG)([aM.A], () => aM.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (s = n?.name ?? T.intl.string(R.default.JEYq8M)),
        (u = (0, c.bG)([nC.default], () => (null != l ? nC.default.getUser(l) : void 0), [l])),
        (m = aq("31337", s, { bot: !0, enabled: !(d = u?.bot === !0) })),
        (f = d ? u : m),
        (h = aq("31338", T.intl.string(R.default["9iAOsw"]), { discriminator: "0003" })),
        (g = aq("31339", (0, a$.mG)(t) ?? "", { enabled: null != t })),
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
                                      i = (0, aR.rh)({
                                          ...(0, aT.Ay)({
                                              channelId: aD.id,
                                              content: e,
                                              author: t,
                                              type: l ?? ev.lAJ.DEFAULT,
                                          }),
                                          id: a,
                                          state: ev.cmJ.SENT,
                                          ...(null != n
                                              ? {
                                                    interaction: {
                                                        id: a,
                                                        name: n,
                                                        type: aE.G.APPLICATION_COMMAND,
                                                        user: (0, aT.Vi)(s),
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
                                              messageType: ev.lAJ.CHAT_INPUT_COMMAND,
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
                                                  messageType: ev.lAJ.CONTEXT_MENU_COMMAND,
                                              }));
                                          break;
                                      }
                                      case "message":
                                          (d(((l = t.user), l.trim().replace(aF, `<@${i.id}>`)), s),
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
    let k = aD.name;
    return (0, a.jsxs)("div", {
        className: ii.Ix,
        children: [
            (0, a.jsxs)("div", {
                className: ii.ZO,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(a7.TextIcon, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(j.E, { variant: "body-sm/semibold", color: "text-strong", tag: "span", children: k }),
                ],
            }),
            (0, a.jsx)("ol", {
                className: o()(ii.TE, "group-spacing-16"),
                children: v.map((e) => {
                    let { key: t, record: n, isCommandReply: l, menu: r } = e;
                    return (0, a.jsxs)(
                        "li",
                        {
                            className: null != r ? ii.Rz : void 0,
                            children: [
                                (0, a.jsx)(ia.A, {
                                    message: n,
                                    channel: aD,
                                    author: (0, it.FT)(n.author, aD),
                                    isGroupStart: !0,
                                    avatarOverride: n.author.bot ? (b ?? void 0) : void 0,
                                    childrenExecutedCommand: l ? (0, a.jsx)(il.A, { message: n, channel: aD }) : void 0,
                                    usernameClassName: r?.target === "user" ? ii.Ct : void 0,
                                    disableInteraction: !0,
                                }),
                                r?.target === "message"
                                    ? (0, a.jsx)("div", {
                                          className: ii.S3,
                                          inert: !0,
                                          "aria-hidden": !0,
                                          children: (0, a.jsxs)(ir.Ay, {
                                              children: [
                                                  (0, a.jsx)(ir.qv, {
                                                      label: T.intl.string(T.t.lfIHs4),
                                                      icon: a9.ReactionIcon,
                                                      onClick: ic,
                                                  }),
                                                  (0, a.jsx)(ir.qv, {
                                                      label: T.intl.string(T.t["5IEsGx"]),
                                                      icon: a8.ArrowAngleLeftUpIcon,
                                                      onClick: ic,
                                                  }),
                                                  (0, a.jsx)(ir.qv, {
                                                      label: T.intl.string(T.t["UKOtz+"]),
                                                      icon: a6.MoreHorizontalIcon,
                                                      selected: !0,
                                                      onClick: ic,
                                                  }),
                                              ],
                                          }),
                                      })
                                    : null,
                                null != r
                                    ? (0, a.jsx)("div", {
                                          className: "user" === r.target ? ii.ET : ii.je,
                                          inert: !0,
                                          children: (0, a.jsx)(io, {
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
                className: ii.DA,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(ie.SlashBoxIcon, { size: "sm", color: "currentColor" }),
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
var im = n(332173);
function ih(e) {
    let { name: t } = e;
    return (0, a.jsxs)(im.A, { children: ["/", t] });
}
function ig(e) {
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
                        let t = [...e].sort((e, t) => t.length - e.length).map(au());
                        return RegExp(`(^|[\\s("'\u{201C}\u{2018}])/(${t.join("|")})(?![\\w-])`, "gu");
                    })(n),
                [n],
            ),
        );
    return null == l ? t : l.map((e) => ("command" === e.kind ? (0, a.jsx)(ih, { name: e.name }, e.start) : e.text));
}
n(827669);
var ip = n(687966),
    ix = n(757789),
    iv = n(26137),
    ij = n(430392),
    ib = n(231483),
    iy = n(323384);
let ik = {
    frame: R.default.Z2bt4u,
    overlay_widget: R.default["0mGHfU"],
    user_widget: R.default.Jipr29,
    bot: R.default.EbvC13,
    commands: R.default.EbvC13,
    automod: R.default.tiMvei,
};
var iw = n(573634);
let iS = {
    frame: ip.GameControllerIcon,
    overlay_widget: ix.WindowTopIcon,
    user_widget: iv.UserCircleIcon,
    bot: ij.RobotIcon,
    commands: ij.RobotIcon,
    automod: ib.ShieldIcon,
};
function iA(e) {
    let { caption: t, children: n, className: l } = e;
    return (0, a.jsxs)("div", {
        className: o()(iw.e7, l),
        children: [(0, a.jsx)(j.E, { variant: "body-sm/normal", color: "text-muted", children: t }), n],
    });
}
function iC(e) {
    let { labels: t } = e;
    return (0, a.jsx)("ul", {
        className: iw.Ip,
        children: t.map((e) =>
            (0, a.jsx)(
                "li",
                {
                    className: iw.jw,
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
function iN(e) {
    let { name: t, description: n } = e;
    return (0, a.jsxs)("li", {
        className: iw.lj,
        children: [
            (0, a.jsx)("span", {
                className: o()(iw.Vo, iw.G),
                children: (0, a.jsx)(iy.AppsIcon, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
            }),
            (0, a.jsxs)("div", {
                className: iw.aV,
                children: [
                    (0, a.jsx)(j.E, { variant: "body-md/normal", color: "text-default", lineClamp: 1, children: t }),
                    (0, a.jsx)(j.E, { variant: "body-sm/normal", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
}
function iI(e) {
    let { commands: t } = e;
    return (0, a.jsx)("ul", {
        className: iw.wZ,
        children: t.map((e, t) => {
            let n = ac(e),
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
                                ? (0, a.jsx)(ih, { name: e.name })
                                : (0, a.jsx)(im.A, { children: `${n}${e.name}` }),
                            "" !== l ? ` ${l}` : null,
                        ],
                    }),
                },
                t,
            );
        }),
    });
}
function iE(e) {
    let { bullets: t, commandNames: n } = e;
    return (0, a.jsx)("ul", {
        className: iw.p_,
        children: t.map((e, t) =>
            (0, a.jsx)(
                "li",
                {
                    className: iw.Aw,
                    children: (0, a.jsx)(j.E, {
                        variant: "body-md/normal",
                        color: "text-default",
                        tag: "span",
                        selectable: !0,
                        children: (0, a.jsx)(ig, { text: e, commandNames: n }),
                    }),
                },
                t,
            ),
        ),
    });
}
function i_(e) {
    let { experience: t, bullets: n, preview: l, blocks: r, commandNames: i } = e,
        s = "frame" === t.kind && !0 !== t.game,
        u = s ? iy.AppsIcon : iS[t.kind],
        o = T.intl.string(s ? R.default.BM4Ymz : ik[t.kind]);
    return (0, a.jsxs)("section", {
        className: iw.s9,
        "aria-label": o,
        children: [
            (0, a.jsxs)("div", {
                className: iw.JQ,
                children: [
                    (0, a.jsx)("span", {
                        className: iw.Vo,
                        children: (0, a.jsx)(u, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    (0, a.jsx)(j.E, { variant: "body-md/medium", color: "text-strong", tag: "span", children: o }),
                ],
            }),
            null != l ? (0, a.jsx)("div", { className: iw.VH, children: l }) : null,
            "automod" === t.kind && 1 === n.length
                ? (0, a.jsx)(j.E, {
                      variant: "body-md/normal",
                      color: "text-default",
                      selectable: !0,
                      children: (0, a.jsx)(ig, { text: n[0], commandNames: i }),
                  })
                : n.length > 0
                  ? (0, a.jsx)(iE, { bullets: n, commandNames: i })
                  : null,
            r.length > 0 ? (0, a.jsx)("div", { className: iw.PG, children: r }) : null,
        ],
    });
}
function iM(e) {
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
                                let n = t.map(au()).join("|");
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
        className: iw.aN,
        children: [
            (0, a.jsxs)("div", {
                className: iw.Lv,
                children: [(0, a.jsx)(v.D, { variant: "heading-lg/semibold", color: "text-strong", children: s }), u],
            }),
            m.map((e) => {
                let { experience: t, bullets: n } = e;
                return (0, a.jsxs)(
                    i.Fragment,
                    {
                        children: [
                            (0, a.jsx)("div", { className: iw.yF, role: "separator" }),
                            (0, a.jsx)(i_, {
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
                                                      ? [{ key: t, caption: T.intl.string(n), labels: l.map(ao) }]
                                                      : [];
                                              })
                                              .map((e) => {
                                                  let { key: t, caption: n, labels: l } = e;
                                                  return (0, a.jsx)(
                                                      iA,
                                                      { caption: n, children: (0, a.jsx)(iC, { labels: l }) },
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
                                                            (0, a.jsx)(
                                                                iA,
                                                                {
                                                                    className: iw.Iw,
                                                                    caption: T.intl.formatToPlainString(
                                                                        R.default.w8F5sy,
                                                                        { count: n.channels.length },
                                                                    ),
                                                                    children: (0, a.jsx)("ul", {
                                                                        className: iw.wZ,
                                                                        "data-conjure-plan-channels": "",
                                                                        children: n.channels.map((e) => {
                                                                            let { name: t, description: n } = e;
                                                                            return (0, a.jsx)(
                                                                                iN,
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
                                                                    iA,
                                                                    {
                                                                        caption: T.intl.string(R.default.MY6UGJ),
                                                                        children: (0, a.jsx)(iC, { labels: r }),
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
                                                              iA,
                                                              {
                                                                  caption: T.intl.string(T.t["0hKkS+"]),
                                                                  children: (0, a.jsx)(iI, { commands: e.commands }),
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
var iR = n(633075),
    iT = n(591410),
    iP = n(27399);
function iL(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, c.bG)([nC.default], () => nC.default.getCurrentUser()),
        r = i.useMemo(() => new iR.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, a.jsx)("div", {
              className: iP.H,
              children: (0, a.jsx)(iT.A, {
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
var i$ = n(443863);
function iD(e) {
    let t,
        { projectId: n, src: l, alt: r, size: i, onError: s } = e,
        u =
            ((t = Math.min(1, 1872 / i.width, 970 / i.height)),
            { width: ag(i.width * t, 1920), height: ag(i.height * t, 1018) });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(r9, { projectId: n }),
            (0, a.jsx)("div", {
                className: i$.nk,
                style: {
                    "--custom-conjure-plan-overlay-widget-top": ap,
                    "--custom-conjure-plan-overlay-widget-end": ax,
                    "--custom-conjure-plan-overlay-widget-width": u.width,
                    "--custom-conjure-plan-overlay-widget-height": u.height,
                },
                children: (0, a.jsx)("img", { src: l, alt: r, className: i$.M7, onError: s }),
            }),
        ],
    });
}
function iq(e, t, n) {
    Promise.all(
        t.map((t) => {
            let { id: n } = t;
            return (0, e2.PK)(e, n);
        }),
    ).then(
        (e) => {
            (0, lb.R)({
                items: e.map((e, n) => ({ type: "IMAGE", url: e, alt: t[n].alt })),
                startingIndex: n,
                shouldHideMediaOptions: !0,
                location: "ConjureChat",
            });
        },
        () => {},
    );
}
function iF(e) {
    let { projectId: t, design: n, alt: l } = e,
        { id: r } = n,
        { src: i, gone: s, handleError: u } = (0, ly._)(t, r);
    return s
        ? null
        : (0, a.jsx)(tQ.D, {
              className: i$.xX,
              onClick: () => iq(t, [{ id: r, alt: l }], 0),
              "aria-label": T.intl.string(R.default.TvAPIm),
              children: null == i ? null : (0, a.jsx)("img", { src: i, alt: l, className: i$.sN, onError: u }),
          });
}
function iO(e) {
    let { projectId: t, design: n, size: l } = e,
        { id: r } = n,
        { src: s, gone: u, handleError: d } = (0, ly._)(t, r),
        [m, f] = i.useState(!1),
        [h, g] = i.useState(!1),
        {
            slide: p,
            labels: x,
            pick: v,
        } = (function (e) {
            let { ready: t, paused: n = !1 } = e,
                l = (0, c.bG)([aO.Ay], () => aO.Ay.useReducedMotion),
                [r, a] = i.useState(0),
                [s, u] = i.useState(!1),
                o = t && !l && !n && !s,
                d = l && !s ? 0 : r;
            i.useEffect(() => {
                if (!o) return;
                let e = setInterval(() => a((e) => (e + 1) % aG.length), 4e3);
                return () => clearInterval(e);
            }, [o]);
            let m = i.useCallback((e) => {
                    (u(!0), a(e));
                }, []),
                f = i.useCallback(() => m(d), [m, d]);
            return { slide: d, labels: aG.map((e) => T.intl.string(e)), pick: m, hold: f };
        })({ ready: null != s, paused: m || h });
    if (u) return null;
    let b = T.intl.string(R.default.mjryK4),
        y = T.intl.string(R.default["rPpf5/"]);
    return (0, a.jsxs)("div", {
        className: i$.RM,
        onMouseEnter: () => f(!0),
        onMouseLeave: () => f(!1),
        onFocus: () => g(!0),
        onBlur: (e) => {
            e.currentTarget.contains(e.relatedTarget) || g(!1);
        },
        children: [
            (0, a.jsx)(tQ.D, {
                className: o()(i$.xX, i$.nj, { [i$.qQ]: 0 === p }),
                style: { "--custom-conjure-plan-overlay-scene-aspect": String(ah) },
                onClick: () => iq(t, [{ id: r, alt: b }], 0),
                "aria-label": T.intl.string(R.default.TvAPIm),
                children:
                    null == s
                        ? null
                        : 0 === p
                          ? (0, a.jsx)("img", { src: s, alt: b, className: i$.Ac, onError: d })
                          : (0, a.jsx)(iD, { projectId: t, src: s, alt: y, size: l, onError: d }),
            }),
            (0, a.jsx)("div", {
                className: i$._4,
                role: "group",
                "aria-label": T.intl.string(R.default.EH36X6),
                children: x.map((e, t) =>
                    (0, a.jsx)(
                        tQ.D,
                        {
                            className: o()(i$.c, { [i$.Cw]: p === t }),
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
function iG(e) {
    let { projectId: t, id: n, alt: l, onOpen: r } = e,
        { src: i, gone: s, handleError: u } = (0, ly._)(t, n);
    return s
        ? null
        : (0, a.jsx)("li", {
              children: (0, a.jsx)(tQ.D, {
                  className: i$.ir,
                  onClick: r,
                  "aria-label": l,
                  children: null == i ? null : (0, a.jsx)("img", { src: i, alt: "", className: i$.rA, onError: u }),
              }),
          });
}
function iz(e) {
    let { projectId: t, proposal: n } = e,
        l = (n.reference_images ?? []).map((e, t) => {
            let { id: n } = e;
            return { id: n, alt: T.intl.formatToPlainString(R.default.xFgQ8L, { number: t + 1 }) };
        });
    return 0 === l.length
        ? null
        : (0, a.jsx)("section", {
              className: i$.Op,
              children: (0, a.jsxs)("div", {
                  className: i$.uW,
                  children: [
                      (0, a.jsx)(j.E, {
                          variant: "body-xs/medium",
                          color: "text-muted",
                          tag: "span",
                          children: T.intl.string(R.default.ubBJcy),
                      }),
                      (0, a.jsx)("ul", {
                          className: i$.Ft,
                          children: l.map((e, n) => {
                              let { id: r, alt: i } = e;
                              return (0, a.jsx)(iG, { projectId: t, id: r, alt: i, onOpen: () => iq(t, l, n) }, r);
                          }),
                      }),
                  ],
              }),
          });
}
function iU(e) {
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
            ((n = r6(x, ee.q7.APPLICATION_COMMANDS)),
            (l =
                r6(x, ee.q7.BOT) || n
                    ? null != x.bot
                        ? x.bot.interaction
                        : n && x.commands.some(al)
                          ? "commands"
                          : null
                    : null),
            (r = i.useMemo(
                () =>
                    null == l
                        ? []
                        : ai(x, l, {
                              message: T.intl.string(R.default.J7qggf),
                              reply: T.intl.string(R.default.nqYtiy),
                              event: T.intl.string(R.default["05lU9W"]),
                          }),
                [x, l],
            )),
            { botInteraction: l, botExchanges: r }),
        k = (function (e, t) {
            let { widget_config: n, widget_preview: l = aC } = t,
                r = (0, c.bG)([aw.default], () => aw.default.locale),
                a = (0, c.bG)([eR.Ay], () => {
                    let t = eR.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [n, l] = i.useState(aA);
                    return (
                        i.useEffect(() => {
                            let n = Object.entries(t ?? {});
                            if (0 === n.length) return;
                            let r = !1;
                            return (
                                Promise.all(
                                    n.map((t) => {
                                        let [n, l] = t;
                                        return (0, e2.PK)(e, l.id).then(
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
                                                          ...aN(n),
                                                          ...(null != n.fallback ? { fallback: aN(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let a = aj.uW.safeParse(r);
                                  if (!a.success) return null;
                                  let i = a.data;
                                  return null == i[ak.m.WIDGET_TOP] || null == i[ak.m.WIDGET_BOTTOM]
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
                                                                    type: aj.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof a
                                                                ? (r[e] = { type: aj.oG.NUMBER, value: a })
                                                                : (r[e] = { type: aj.oG.STRING, value: a });
                                                    return r;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(aI),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: aS,
                                            },
                                        };
                              })(n, l, s, r),
                    [n, l, s, r],
                );
            return i.useMemo(() => (null == a || null == u ? null : { applicationId: a, rendererProps: u }), [a, u]);
        })(p, x),
        w = v?.superseded === !0,
        S = x.what_changed?.trim() ?? "",
        A =
            ((t = x.commands),
            i.useMemo(
                () =>
                    t
                        .filter((e) => "/" === ac(e))
                        .map((e) => {
                            let { name: t } = e;
                            return t;
                        }),
                [t],
            )),
        C =
            ((u =
                null == (s = af(x))
                    ? null
                    : (x.experiences?.find((e) => {
                          let { surfaces: t } = e;
                          return t.includes(s);
                      })?.id ?? null)),
            (d = null != (o = x.design_image) && o.id !== av(x)?.id ? o : null),
            (f = av(x)),
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
                    null != f && null != g ? { experienceId: g, design: f, size: en(x.overlay_widget ?? null) } : null,
            }),
        N = i.useMemo(
            () =>
                x.commands.some(al)
                    ? ai({ ...x, bot: void 0 }, "commands", {
                          message: T.intl.string(R.default.J7qggf),
                          reply: T.intl.string(R.default.nqYtiy),
                          event: T.intl.string(R.default["05lU9W"]),
                      })
                    : [],
            [x],
        ),
        I = (0, c.bG)([eR.Ay], () => eR.Ay.getProject(p)?.name, [p]),
        E =
            w && null != v
                ? T.intl.formatToPlainString(R.default.YZ3qJs, { version: v.version })
                : T.intl.string(R.default["3b6e7o"]),
        _ = w ? (0, a.jsx)(t5, { children: T.intl.string(R.default.hF2c41) }) : null;
    return (0, a.jsxs)(t7, {
        title: E,
        meta: _,
        superseded: w,
        showLabel: T.intl.string(R.default.yD8EJS),
        hideLabel: T.intl.string(R.default.nSPGNb),
        bodyClassName: i$.rf,
        "data-conjure-plan-card": !0,
        children: [
            (0, a.jsx)("div", {
                className: i$.Qs,
                children: (0, a.jsx)(iM, {
                    appName: I ?? x.experiences?.[0]?.name ?? "",
                    intro: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(j.E, {
                                variant: "body-md/normal",
                                color: "text-default",
                                selectable: !0,
                                children: (0, a.jsx)(ig, { text: x.summary, commandNames: A }),
                            }),
                            (0, a.jsx)(iz, { projectId: p, proposal: x }),
                            "" !== S
                                ? (0, a.jsxs)("section", {
                                      className: i$.uW,
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
                                              children: (0, a.jsx)(ig, { text: S, commandNames: A }),
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
                                            ? (0, a.jsx)(iF, {
                                                  projectId: p,
                                                  design: C.ui.design,
                                                  alt: T.intl.string(null == (t = af(x)) ? R.default["3/aHX6"] : ad[t]),
                                              })
                                            : null,
                                    l =
                                        e.id === C.overlay?.experienceId
                                            ? (0, a.jsx)(iO, {
                                                  projectId: p,
                                                  design: C.overlay.design,
                                                  size: C.overlay.size,
                                              })
                                            : null;
                                return null == n && null == l ? null : (0, a.jsxs)(a.Fragment, { children: [n, l] });
                            }
                            case "user_widget":
                                return null != k ? (0, a.jsx)(iL, { ...k }) : null;
                            case "automod":
                                return null != x.automod && x.automod.examples.length > 0
                                    ? (0, a.jsx)(a5, { automod: x.automod })
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
                                        (r = l.some((e) => "command" === e.kind || ar(e))),
                                        0 === n.length || r ? l.slice(0, 3) : [...l.slice(0, 2), n[0]]
                                    );
                                })(e, y, N);
                                return t.length > 0 ? (0, a.jsx)(id, { projectId: p, exchanges: t }) : null;
                            }
                        }
                    },
                    commandNames: A,
                }),
            }),
            null == b || w
                ? null
                : (0, a.jsxs)("div", {
                      className: i$.qr,
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
var iB = n(289565);
function iK(e) {
    let { onDismiss: t, children: n } = e;
    return null == t
        ? (0, a.jsx)("div", { className: iB.m, children: n })
        : (0, a.jsxs)("div", {
              className: iB.Z,
              children: [
                  n,
                  (0, a.jsx)(e3.m, {
                      text: T.intl.string(T.t.WAI6xu),
                      asContainer: !0,
                      children: (0, a.jsx)(tr.K, {
                          "aria-label": T.intl.string(T.t.WAI6xu),
                          icon: tU.XSmallIcon,
                          variant: "icon-only",
                          size: "sm",
                          onClick: t,
                      }),
                  }),
              ],
          });
}
function iH(e, t) {
    return null != t && ("new_ui" === e.reason ? !0 === t.newUiUnpublished : "not_live" === t.publishState);
}
function iV(e, t) {
    return null != e && iH(t, e.status);
}
let iW = new WeakMap();
var iX = n(175841),
    iQ = n(189213);
function iZ(e) {
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
                    "" !== (n = t.trim().slice(0, 256)) && (0, lF.Fz)(e, n);
                },
            };
        })(t),
        o = T.intl.string(R.default.IqkF07);
    return (0, a.jsx)(iQ.a, {
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
        children: (0, a.jsx)(nj.f, {
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
var iY = n(54100);
function iJ(e) {
    let { rating: t } = e;
    return (0, a.jsxs)("div", {
        className: iY.mo,
        role: "status",
        children: [
            (0, a.jsx)(iX.SparklesIcon, { size: "xs", color: "currentColor", className: iY.dQ, "aria-hidden": !0 }),
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
function i0(e) {
    let { projectId: t, turnId: n, cta: l, status: r, placement: s } = e,
        { rating: u, rate: c } = (function (e) {
            let { projectId: t, turnId: n } = e;
            i.useSyncExternalStore(lX, () => lH);
            let { publishReason: l, surface: r, placement: a, publishState: s } = lQ(e);
            return (
                i.useEffect(() => {
                    !(function (e) {
                        if (null != lW(e.projectId, e.turnId)) return;
                        let t = lq.w.get(lG) ?? {};
                        t[e.projectId]?.[e.turnId] !== !0 &&
                            ((0, lF.rv)(e),
                            lq.w.set(lG, { ...t, [e.projectId]: { ...t[e.projectId], [e.turnId]: !0 } }));
                    })({ projectId: t, turnId: n, publishReason: l, surface: r, placement: a, publishState: s });
                }, [t, n, l, r, a, s]),
                {
                    rating: lW(t, n),
                    rate(t) {
                        let n = (function (e) {
                            let { rating: t, ...n } = e,
                                { projectId: l, turnId: r } = n;
                            if (null != lW(l, r)) return null;
                            let a = { ...lQ(n), rating: t };
                            (0, lF.gw)(a);
                            let i = lV();
                            return (lq.w.set(lO, { ...i, [l]: { ...i[l], [r]: t } }), lH++, lK.forEach((e) => e()), a);
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
        return (0, a.jsx)(iJ, { rating: u });
    let y = null != u,
        k = y ? u : (f ?? d),
        w = y || (null == f && null != d);
    function S(e) {
        if (y) return;
        (m(e), h(null), p(!0));
        let t = c(e);
        null != t && (0, K.qf)((e) => (0, a.jsx)(iZ, { ...e, rating: t }));
    }
    return (0, a.jsxs)("div", {
        className: iY.nM,
        onMouseLeave: () => h(null),
        children: [
            (0, a.jsxs)("span", {
                className: iY.WD,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(j.E, {
                        id: v,
                        variant: "body-xs/medium",
                        color: "text-muted",
                        className: o()(iY.Pf, { [iY.KH]: null == k }),
                        children: T.intl.string(R.default.mTV326),
                    }),
                    lz.map((e) =>
                        (0, a.jsx)(
                            j.E,
                            {
                                variant: "body-xs/medium",
                                color: "text-default",
                                className: o()(iY.Pf, { [iY.KH]: k === e }),
                                children: lB(e),
                            },
                            e,
                        ),
                    ),
                ],
            }),
            (0, a.jsx)("div", {
                role: "radiogroup",
                "aria-labelledby": v,
                className: iY.uf,
                children: lz.map((e) => {
                    let t = null != k && e <= k,
                        n = t ? l$.StarIcon : lD.StarOutlineIcon;
                    return (0, a.jsxs)(
                        "label",
                        {
                            className: iY.uK,
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
                                        b.current ? m(e) : S(e);
                                    },
                                    onKeyDown: (t) => {
                                        ((b.current = t.key.startsWith("Arrow")),
                                            "Enter" === t.key && (t.preventDefault(), S(e)));
                                    },
                                    onKeyUp: () => {
                                        b.current = !1;
                                    },
                                    className: iY.hF,
                                    "aria-label": T.intl.formatToPlainString(R.default.NU7Dex, {
                                        rating: e,
                                        label: lB(e),
                                    }),
                                }),
                                (0, a.jsx)(
                                    "span",
                                    {
                                        className: o()(iY.d4, { [iY.cO]: t, [iY.Ng]: t && w }),
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
function i1(e) {
    let { projectId: t, publish: n } = e,
        l = (0, eB.A)(t, n);
    return (0, a.jsx)(m.$, {
        variant: "primary",
        size: "sm",
        loading: n.publishing && !n.showsProgress,
        text: n.label,
        onClick: () => l("card"),
    });
}
function i2(e) {
    let { projectId: t, turnId: n, cta: l } = e,
        r = (0, eU.Ay)(t),
        i = (0, eH.CF)();
    return null != r && iV(r, l)
        ? (0, a.jsx)(iK, {
              children: (0, a.jsxs)(nz.B, {
                  gap: 12,
                  align: "start",
                  children: [
                      (0, a.jsx)(i1, { projectId: t, publish: r }),
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
                          : (0, a.jsx)(i0, {
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
var i3 = n(303345),
    i4 = n(44255),
    i5 = n(416473),
    i7 = n(289830);
function i9(e) {
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
                [r, a] = i.useState("idle"),
                [s, u] = i.useState(null),
                o = i.useCallback(async () => {
                    (a("sending"), u(null));
                    try {
                        (await (0, i5.Du)(e, t.trigger), a("on"));
                    } catch (e) {
                        (u(e instanceof i3.A ? e.message : T.intl.string(R.default.EXceox)), a("error"));
                    }
                }, [e, t.trigger]),
                [d] = i.useState(() => Date.now()),
                m =
                    t.next_run_at > d
                        ? T.intl.formatToPlainString(R.default.orZDqY, { time: (0, i4.TP)(t.next_run_at) })
                        : null;
            return {
                summary: (0, i4.lD)(t.trigger),
                firstPublish: m,
                status: r,
                error: s,
                onTurnOn: l && n && "on" !== r ? o : void 0,
            };
        })(t, n, l);
    return (0, a.jsx)(t3, {
        title: T.intl.string(R.default.ZtfX9V),
        children: (0, a.jsxs)("div", {
            className: i7.r,
            children: [
                (0, a.jsxs)("div", {
                    className: i7.z,
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
var i8 = n(989271);
function i6(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = i.useId(),
        s = null == l;
    return (0, a.jsxs)(tQ.D, {
        className: o()(i8.nM, { [i8.f1]: s, [i8.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": T.intl.formatToPlainString(R.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: i8.jo,
                children: [
                    n
                        ? (0, a.jsx)(f.CheckmarkSmallIcon, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: i8.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(j.E, {
                        tag: "div",
                        variant: "body-md/medium",
                        color: "none",
                        className: i8.G9,
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
function se(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = i.useState(() => new Set()),
        u = i.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, a.jsx)(t3, {
        title: T.intl.string(R.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                i6,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : u },
                e.id,
            ),
        ),
    });
}
var st = n(919790),
    sn = n(908492),
    sl = n(971824),
    sr = n(162052),
    sa = n(165648);
function si(e) {
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
        x = i.useMemo(() => (0, tH.Jf)(n, l), [n, l]),
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
            className: nr.pj,
            "data-live": !1,
            children: (0, a.jsx)(tY.A, {
                glyph: (0, a.jsx)(rw.StopIcon, { size: "custom", width: 20, height: 20, color: "currentColor" }),
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
        w = rR(k.map((e) => e.taskId)),
        S = !g && (l || k.some((e) => "running" === e.task.status)),
        A = rq(k);
    return (0, a.jsxs)("ol", {
        className: nr.pj,
        "data-live": S,
        children: [
            (0, a.jsx)(tX.Ay, {
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
                let l = null != e.task.helperMark ? rM(e.task.helperMark) : void 0,
                    r = l ?? w.get(e.taskId);
                return null == r
                    ? null
                    : (0, a.jsx)(
                          rF,
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
            (0, a.jsx)(rZ, { projectId: t, steps: n, tree: x, segment: m }),
            y
                ? (0, a.jsx)("li", {
                      className: nr.YO,
                      children: (0, a.jsx)(nn, { todos: b, provisional: d, agents: A, live: r, superseded: s }),
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
            sideReplyAcknowledges: S,
            hoistedProse: A = !1,
            hoistedAttachmentsHost: C,
            restoreProposal: N,
            onRestoreProposal: I,
            publishScheduleProposal: E,
            publishScheduleProposalCurrent: _ = !1,
        } = e,
        M = i.useMemo(
            () => rS({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != c && c.length > 0 }),
            [n, l, r, c],
        ),
        { streamed: P, lastStreamedMessage: L, showsClosingMessage: $, closingContent: D } = M,
        q = (A ? C : void 0) ?? M.attachmentsHost,
        F = $ && !A,
        O = null == c ? null : (0, a.jsx)(st.A, { projectId: t, attachments: c }),
        G = null == O ? null : (0, a.jsx)("div", { className: nr.MT, children: O }),
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
                  })(S),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: nr.ue,
        children: [
            P.length > 0 && !A
                ? (0, a.jsx)("ol", {
                      className: nr.dO,
                      children: P.filter((e) => "todos" !== e.type).map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: nr.DV,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: sa.PT,
                                          children: (0, sn.U)(e.content, !0, {
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
                ? (0, a.jsx)(iU, { projectId: t, proposal: r, version: s, onApprove: k })
                : F
                  ? (0, a.jsxs)("div", {
                        className: o()(nr.ky, sr.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: o()(sa.PT, nr.cW),
                                children: (0, sn.U)(D, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === q ? G : null,
                            z,
                        ],
                    })
                  : null,
            null != d
                ? (0, a.jsx)("div", {
                      className: o()(nr.ky, nr.k1, sr.XR, { [sl.O]: null != f && "open" === h }),
                      children: (0, a.jsx)(rt, {
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
                      className: o()(nr.ky, nr.k1, sr.XR),
                      children: (0, a.jsx)(rf, { projectId: t, request: g, askId: p }),
                  })
                : null,
            "standalone" !== q && ("closing" !== q || F) ? null : O,
            null != x ? (0, a.jsx)(i2, { projectId: t, turnId: v ?? null, cta: x }) : null,
            null != u && u.length > 0 ? (0, a.jsx)(se, { ideas: u, pickedIdeaIds: y, onPick: b }) : null,
            null != N ? (0, a.jsx)(rJ, { proposal: N, onRestore: I }) : null,
            null != E ? (0, a.jsx)(i9, { projectId: t, proposal: E, current: _ }) : null,
            F ? null : z,
        ],
    });
}
var su = n(286251),
    so = n(146806),
    sc = n(475358),
    sd = n(783977),
    sm = n(559647),
    sf = n(787564),
    sh = n(339200),
    sg = n(234320),
    sp = n(191023),
    sx = n(285796),
    sv = n(922329),
    sj = n(153171);
function sb(e) {
    let { projectId: t } = e;
    return (0, a.jsx)(sv.p, {
        name: T.intl.string(R.default.xhFsEP),
        thumb: (0, a.jsxs)("span", {
            className: tx.PA,
            "aria-hidden": !0,
            children: [
                (0, a.jsx)(sp.ImageIcon, { size: "sm", color: "currentColor" }),
                (0, a.jsx)("span", {
                    className: tx.OY,
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
            className: sj.o1,
            onClick: () => (0, I.xU)(t),
            "aria-label": T.intl.string(R.default.N852dj),
            children: (0, a.jsx)(sx.CircleXIcon, { size: "xs", color: "currentColor" }),
        }),
    });
}
function sy(e) {
    let { send: t } = e;
    return (0, a.jsxs)(sv.p, {
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
            "uploading" === t.status ? (0, a.jsx)(b.y, { type: b.t.SPINNING_CIRCLE_SIMPLE, className: sj.Rk }) : null,
            "failed" === t.status
                ? (0, a.jsx)(nO.Q, {
                      variant: "secondary",
                      textVariant: "body-sm/medium",
                      text: T.intl.string(R.default["WFJ/vb"]),
                      onClick: t.retry,
                  })
                : null,
        ],
    });
}
var sk = n(587157),
    sw = n(347111),
    sS = n(120234),
    sA = n(901173),
    sC = n(161431),
    sN = n(46653),
    sI = n(695184),
    sE = n(811091),
    s_ = n(475458),
    sM = n(957071),
    sR = n(927659),
    sT = n(351906),
    sP = n(407653),
    sL = n(322915);
function s$(e) {
    let { id: t, projectId: n, suggestions: l, selectedIndex: r, onHover: i, onSelect: s } = e,
        u = (0, c.bG)([sT.A], () => sT.A.hidePersonalInformation ?? !1),
        o = `${t}-users`,
        d = `${t}-files`;
    if (0 === l.length) return null;
    let m = l.map((e, t) =>
            "user" === e.kind
                ? (0, a.jsx)(
                      sR.Ay.User,
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
                      sR.Ay.Generic,
                      {
                          index: t,
                          text: e.file.name,
                          icon: (0, a.jsx)(sP.A, { projectId: n, file: e.file, className: sL.Vk }),
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
    return (0, a.jsx)(sR.Ay, {
        id: t,
        className: sL.nx,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, a.jsxs)("div", {
            id: t,
            role: "listbox",
            "aria-label": T.intl.string(R.default.Vb3sUg),
            children: [
                h.length > 0
                    ? (0, a.jsx)(sD, { titleId: o, title: T.intl.string(R.default.Vb3sUg), children: h })
                    : null,
                g.length > 0
                    ? (0, a.jsx)(sD, { titleId: d, title: T.intl.string(R.default.zA5KLM), children: g })
                    : null,
            ],
        }),
    });
}
function sD(e) {
    let { titleId: t, title: n, children: l } = e;
    return (0, a.jsxs)("div", {
        role: "group",
        "aria-labelledby": t,
        children: [
            (0, a.jsx)(j.E, { id: t, variant: "body-xs/semibold", color: "text-muted", className: sL.Gf, children: n }),
            l,
        ],
    });
}
var sq = n(719442),
    sF = n(355622),
    sO = n(408018),
    sG = n(186306),
    sz = n(323350),
    sU = n(35277),
    sB = n(68059),
    sK = n(267102),
    sH = n(259691);
let sV = (0, aP.createChannelRecord)({ id: "1", type: ev.rbe.DM });
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
    let r = new RegExp(rv.$c.source).exec(l.raw)?.[1];
    return null == r
        ? null
        : (0, a.jsxs)("span", { ...t, contentEditable: !1, children: [(0, a.jsx)(sH.A, { attachmentId: r }), n] });
}
var sY = n(366811);
function sJ(e, t) {
    return e.split("/").some((e, n, l) => e === t && "conjure" === l[n - 1]);
}
function s0(e) {
    let t = sY.A.getState().path;
    return sJ(window.location.pathname, e) && (null == t || sJ(t, e));
}
function s1(e, t) {
    return null != t && (0, e0.vq)(e) && t.contains(e);
}
var s2 = n(497437),
    s3 = n(465410);
let s4 = "body-md/normal",
    s5 = null;
function s7(e) {
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
                frontFrom: 1e3 * (0, so._R)(m),
                frontTo: 1e3 * (0, so._R)(f),
                backFrom: 1e3 * (0, so.T)(m),
                backTo: 1e3 * (0, so.T)(f),
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
        S = i.useRef(!1),
        A = i.useCallback(() => {
            (w(S.current ? (n ? "through" : "out") : n ? "in" : null), y((e) => e + 1));
        }, [n]);
    i.useEffect(() => {
        S.current = n;
    }, [n, t]);
    let C = "in" === k ? x.backFrom : x.frontFrom,
        N = "out" === k ? x.frontTo : x.backTo,
        I = (0, c.bG)([aO.Ay], () => aO.Ay.useReducedMotion),
        E = t === T.intl.string(R.default.Zc7gML),
        _ = r === t && E;
    function M(e, t, n) {
        let l = null != n;
        return (0, a.jsx)("span", {
            ref: n,
            className: o()(s2.VT, { [s2.qk]: l }),
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
            children: (0, a.jsx)(sc.e, { shortcut: "tab", className: s2.xT, keyClassName: e }),
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(su.o, {
                text: t,
                variant: s4,
                delay: null,
                duration: 1e3,
                trailingWidth: g,
                className: o()(s2.xM, { [s2.s2]: l }),
                onStart: A,
                onComplete: () => s(t),
            }),
            M(s2.IS, n || (!I && "out" === k), u),
            (0, a.jsx)("span", {
                ref: d,
                className: s2.QI,
                "aria-hidden": !0,
                children: (0, a.jsx)(j.E, { variant: s4, tag: "span", children: t }),
            }),
            _
                ? (0, a.jsxs)("span", {
                      className: s2.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, a.jsx)(j.E, { variant: s4, tag: "span", className: s2.xM, children: t }),
                          M(s2.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let s9 = i.memo(function (e) {
        let {
                projectId: t,
                canSend: n,
                aiPaused: l = !1,
                running: r,
                restoring: s = !1,
                onSend: u,
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
                visible: S = !0,
            } = e,
            A = n && !l,
            C = (function (e) {
                let t = i.useContext(sK.Ay),
                    [n] = i.useState(() => {
                        let n = (0, sq.ie)();
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
                                        for (let e of t.text.matchAll(rv.$c)) {
                                            let t = e.index ?? 0;
                                            n.push({ raw: e[0], path: l, start: t, end: t + e[0].length });
                                        }
                                    (n.length > 0 &&
                                        sG.o.withMergedEntry(e, () =>
                                            sh.VW.withoutNormalizing(e, () => {
                                                for (let { raw: t, path: l, start: r, end: a } of n.reverse())
                                                    sU.b.textToVoid(
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
            })(ry.A.getDraft(t)),
            [N, E] = i.useState(() => sX(C));
        (0, sS.N$)(N);
        let _ = i.useRef(N),
            [M, P] = i.useState(null),
            L = i.useCallback(() => {
                let e = sX(C);
                (e !== _.current && ((_.current = e), (0, sw.I)(t, e), E(e)),
                    P(
                        (function (e) {
                            let { selection: t } = e;
                            if (null == t || !sh.ZF.isCollapsed(t)) return null;
                            let [n] = sh.VW.node(e, t.anchor.path);
                            return sh.l5.isText(n) ? n.text.slice(0, t.anchor.offset) : null;
                        })(C),
                    ));
            }, [C, t]),
            $ = i.useCallback((e) => sQ(C, e), [C]),
            D = "" !== N.trim();
        i.useEffect(() => y?.(D), [D, y]);
        let q = i.useRef(t);
        i.useLayoutEffect(() => {
            q.current !== t && ((q.current = t), sQ(C, ry.A.getDraft(t)));
        }, [C, t]);
        let F = (0, c.bG)([aO.Ay], () => aO.Ay.isSubmitButtonEnabled),
            [O, z] = i.useState(!1),
            [U, B] = i.useState(!1);
        (i.useEffect(() => {
            r ? B(!1) : (O && B(!0), z(!1));
        }, [r, O]),
            i.useEffect(() => {
                if (!U) return;
                let e = setTimeout(() => B(!1), s6);
                return () => clearTimeout(e);
            }, [U]));
        let {
                drafts: K,
                addFiles: H,
                pasteFiles: V,
                removeDraft: W,
                settled: X,
                takeRefs: Q,
            } = (0, e7.FM)({ projectId: t, surface: "chat", onUploadFile: f }),
            Z = (0, I.fc)(t),
            Y = (0, I.bE)(t),
            J = i.useRef(Y);
        i.useEffect(() => {
            let e = J.current;
            ((J.current = Y), A && null != e && null != Y && Y !== e && sh.VW.focus(C));
        }, [Y, A, C]);
        let et = "" !== N.trim() || K.length > 0 || b || Z,
            en = A && et && X,
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
        let ea = (0, sC.rU)(t),
            [ei, es] = i.useState(null),
            [eu, eo] = i.useState(0),
            ec = i.useMemo(() => (null != M && A ? (0, sA.OG)(M, M.length) : null), [M, A]),
            ed = ec?.start ?? null;
        i.useEffect(() => {
            null == ed ? es(null) : (0, sC.IP)(t);
        }, [ed, t]);
        let em = ed === ei ? null : ec,
            ef = (function (e, t) {
                let n = (0, c.bG)([eR.Ay], () => eR.Ay.getProject(e), [e]),
                    { creator: l, collaborators: r } = (0, s_.yv)(n),
                    a = (0, c.bG)([sN.default], () => sN.default.getId()),
                    s = null != n && (0, ee.pL)(n) ? n.guild_id : void 0,
                    u = t?.toLowerCase() ?? null;
                return (
                    i.useEffect(() => {
                        null != s && null != u && sI.A.requestMembers(s, u, 100);
                    }, [s, u]),
                    (0, c.yK)(
                        [le.Ay, lt.A, nC.default],
                        () => {
                            if (null == u) return [];
                            let e = null != s ? lt.A.getGuild(s) : null,
                                t = (t) => (0, sA.mO)(t, u, null != e ? le.Ay.getNick(e.id, t.id) : null),
                                i = new Set(n?.collaborator_role_ids ?? []),
                                o = null != e && i.has(sE.default.castGuildIdAsEveryoneGuildRoleId(e.id)),
                                c =
                                    null == e
                                        ? []
                                        : le.Ay.getMemberIds(e.id)
                                              .map((e) => nC.default.getUser(e))
                                              .filter(
                                                  (n) =>
                                                      null != n &&
                                                      t(n) &&
                                                      (o ||
                                                          (le.Ay.getMember(e.id, n.id)?.roles ?? []).some((e) =>
                                                              i.has(e),
                                                          ) ||
                                                          ln.$3({
                                                              permission: ev.xBc.MANAGE_GUILD,
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
            })(t, em?.text ?? null),
            eh = i.useMemo(() => (null == em ? [] : (0, sA.l$)(ef, ea, em.text)), [em, ef, ea]),
            eg = em?.text;
        i.useEffect(() => eo(0), [eg]);
        let ep = eh.length > 0,
            ex = Math.min(eu, Math.max(0, eh.length - 1)),
            ej = i.useId(),
            eb = i.useCallback(
                (e) => {
                    let t = eh[e];
                    null != em &&
                        null != t &&
                        (function (e, t, n) {
                            let { selection: l } = e;
                            if (null == l) return;
                            let { path: r, offset: a } = l.anchor;
                            (sU.b.select(e, { anchor: { path: r, offset: t }, focus: { path: r, offset: a } }),
                                sU.b.insertText(e, `${n} `));
                        })(C, em.start, "user" === t.kind ? `<@${t.user.id}>` : `<file:${t.file.id}>`);
                },
                [eh, em, C],
            ),
            ey = i.useCallback(() => {
                if (!en) return;
                let e = Q(),
                    n = Z
                        ? (function (e) {
                              let t = (0, I.K7)(e);
                              if (null == t || !(0, nu.C)(t)) return null;
                              let n = t.history.present,
                                  l = t.keptStill ?? (0, I.C)(e);
                              return (
                                  (0, I.My)(e),
                                  function (t) {
                                      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                          { nonce: a, messageKey: i } = (0, eO.Wx)(e, t, r),
                                          s = { projectId: e, nonce: a, job: null, thumbUrl: null };
                                      (no.set(i, s),
                                          (s.job = (0, nu.B)({
                                              capture: (t) => (0 === t ? l : (0, I.C)(e)),
                                              composite: (e) =>
                                                  (async function (e, t) {
                                                      let n = await createImageBitmap(e);
                                                      try {
                                                          let e = { width: n.width, height: n.height },
                                                              l = tP(e),
                                                              r = tP(e);
                                                          if (null == l || null == r) return null;
                                                          return (
                                                              tT(r.ctx, t, e),
                                                              l.ctx.drawImage(n, 0, 0),
                                                              l.ctx.drawImage(r.canvas, 0, 0),
                                                              await l.toBlob()
                                                          );
                                                      } finally {
                                                          n.close();
                                                      }
                                                  })(e, n),
                                              upload: (t) =>
                                                  (0, e2.vX)(e, new File([t], "sketch.webp", { type: t.type })),
                                              isStaged: (t) => (0, e2.n6)(e, t.id),
                                              send: (n) => (0, eO.dv)(e, t, [...r, n], { nonce: a }),
                                              update: (e, t) => {
                                                  (null != t &&
                                                      null == s.thumbUrl &&
                                                      (s.thumbUrl = URL.createObjectURL(t)),
                                                      nd(i, {
                                                          status: e,
                                                          thumbUrl: s.thumbUrl,
                                                          retry: () => s.job?.retry(),
                                                      }),
                                                      "sent" === e &&
                                                          (no.delete(i),
                                                          window.setTimeout(() => {
                                                              (nd(i, null),
                                                                  null != s.thumbUrl &&
                                                                      URL.revokeObjectURL(s.thumbUrl));
                                                          }, 6e4)));
                                              },
                                          })));
                                  }
                              );
                          })(t)
                        : null;
                u(N, e.length > 0 ? e : void 0, n ?? void 0);
                let l = (function (e, t, n) {
                    let l,
                        r,
                        a = n.split("\n", 1)[0] ?? "";
                    if (null == e || "" === a) return a;
                    null == s5 && (s5 = document.createElement("canvas").getContext("2d"));
                    let i = s5;
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
                })(ut(eI.current), eq.current, (0, sA.Lj)(N));
                ("" !== l && er(l), $(""), es(null));
            }, [en, Z, t, N, u, Q, $]),
            ek = i.useCallback(
                (e) => {
                    (e.preventDefault(), ey());
                },
                [ey],
            ),
            ew = i.useCallback(() => {
                null != d && !O && (z(!0), d(), A && sh.VW.focus(C));
            }, [d, O, A, C]);
        !(function (e) {
            let { active: t, projectId: n, scopeRef: l, onEscape: r } = e,
                a = i.useRef(r);
            (i.useEffect(() => {
                a.current = r;
            }),
                i.useEffect(() => {
                    if (!t) return;
                    let e = s1(document.activeElement, l?.current);
                    function r(t) {
                        e = s1(t.target, l?.current);
                    }
                    function i(t) {
                        var r, i, s;
                        "Escape" === t.key &&
                            !t.isComposing &&
                            s0(n) &&
                            (0, I.K7)(n)?.active !== !0 &&
                            !(0, G._c)(n).active &&
                            ((r = t.target),
                            (i = l?.current),
                            (s = e),
                            ((0, e0.vq)(r) && r !== document.body && r !== document.documentElement
                                ? !!s1(r, i) && null == r.closest('input, textarea, [contenteditable="true"]')
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
        })({ active: r && null != d && S, projectId: t, scopeRef: m, onEscape: ew });
        let eS = (r && null != d) || U,
            eA = null == x || "" !== N || !A || s || b ? null : x,
            eC = i.useCallback(
                (e) => {
                    if (ep && !e.shiftKey && !e.metaKey && !e.ctrlKey && !e.altKey) {
                        let t = eh.length;
                        if ("ArrowDown" === e.key || "ArrowUp" === e.key) {
                            (e.preventDefault(), eo((ex + ("ArrowDown" === e.key ? 1 : t - 1)) % t));
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
                    if ("Escape" === e.key && (0, I.K7)(t)?.active === !0) {
                        (e.preventDefault(), e.stopPropagation(), (0, I.V9)(t));
                        return;
                    }
                    if ("Escape" === e.key && r && null != d && s0(t)) {
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
        (0, sg.Vo)({
            event: ev.jej.GLOBAL_CLIPBOARD_PASTE,
            handler: (e) => {
                let { event: t } = e;
                return eN(t);
            },
        });
        let eI = i.useRef(null),
            eE = i.useCallback(() => {
                let e = _.current;
                p?.((0, sA.Lj)(e), () => {
                    _.current === e && $("");
                });
            }, [p, $]),
            [e_, eM] = i.useState(0),
            [eT, eP] = i.useState(!1);
        i.useEffect(() => {
            if (0 === N.length) return void eP(!1);
            let e = ut(eI.current);
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
            eP(!0);
            let t = setTimeout(() => eP(!1), s8);
            return () => clearTimeout(t);
        }, [N]);
        let eL = i.useMemo(() => ({ "--custom-glow-x": `${e_}px` }), [e_]),
            e$ = eT ? ` ${s2.EB}` : "",
            eD = s
                ? T.intl.string(R.default.qqlUiW)
                : l
                  ? T.intl.string(R.default.Z0hyNL)
                  : A
                    ? b
                        ? T.intl.string(R.default.knUjL3)
                        : Z
                          ? T.intl.string(R.default["6rXxwa"])
                          : j
                            ? T.intl.string(R.default.VxH5vv)
                            : v
                              ? T.intl.string(R.default.IevBEw)
                              : T.intl.string(r ? R.default["0BJa/0"] : R.default.TEeU7z)
                    : T.intl.string(R.default.zZ9NgM),
            eq = i.useRef(0),
            eF = i.useRef(null),
            eG = i.useCallback((e) => {
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
            className: s2.DA,
            children: [
                ep
                    ? (0, a.jsx)(s$, {
                          id: ej,
                          projectId: t,
                          suggestions: eh,
                          selectedIndex: ex,
                          onHover: eo,
                          onSelect: eb,
                      })
                    : null,
                K.length > 0 || Z
                    ? (0, a.jsxs)("div", {
                          className: s2.lN,
                          children: [
                              K.map((e) => (0, a.jsx)(e7.Nl, { draft: e, onRemove: W }, e.localId)),
                              Z ? (0, a.jsx)(sb, { projectId: t }) : null,
                          ],
                      })
                    : null,
                (0, a.jsx)("span", { className: `${s2.wg} ${s2.LP}${e$}`, style: eL, "aria-hidden": !0 }),
                (0, a.jsx)("span", { className: `${s2.wg} ${s2.L3}${e$}`, style: eL, "aria-hidden": !0 }),
                (0, a.jsxs)("div", {
                    className: s2.VA,
                    ref: eI,
                    children: [
                        (0, a.jsx)(sM.A, {
                            navId: "conjure-composer-attach",
                            disabled: !A,
                            buttonClassName: `${s2.Y0} ${s2.nu}`,
                            iconClassName: s2.Qu,
                            onAddFiles: H,
                            onImport: g,
                            onSendToOtherProjects: null != p ? eE : void 0,
                        }),
                        eH
                            ? (0, a.jsx)("div", {
                                  ref: eG,
                                  className: s2.ar,
                                  "aria-hidden": "true",
                                  children: (0, a.jsx)(
                                      s7,
                                      { text: eK, offering: eB && null == el, typed: null != el },
                                      S ? "visible" : "hidden",
                                  ),
                              })
                            : null,
                        (0, a.jsx)(t0.A, { id: eU, children: T.intl.string(R.default.ldNl9x) }),
                        (0, a.jsx)(rv.Fu.Provider, {
                            value: t,
                            children: (0, a.jsx)(sf.A, {
                                editor: C,
                                containerClassName: o()(s2.sq, s3.dv),
                                className: s2.jp,
                                readOnly: !A,
                                canFocus: A,
                                onChange: L,
                                onBlur: () => P(null),
                                onKeyDown: eC,
                                onPaste: eN,
                                renderExtraElement: sZ,
                                "aria-labelledby": eU,
                                "aria-describedby": eH ? ez : void 0,
                                "aria-autocomplete": "list",
                                "aria-haspopup": "listbox",
                                "aria-expanded": ep,
                                "aria-controls": ep ? ej : void 0,
                                "aria-activedescendant": ep ? ((0, sR.aI)(ex) ?? void 0) : void 0,
                            }),
                        }),
                        eH ? (0, a.jsx)(t0.A, { id: ez, children: eD }) : null,
                        (0, a.jsx)("div", {
                            className: s2.Sz,
                            onMouseDown: eS ? ue : void 0,
                            children: eS
                                ? (0, a.jsx)(e3.m, {
                                      text: T.intl.string(R.default.wiguT0),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)("button", {
                                          type: "button",
                                          className: `${s2.Y0} ${s2.$E} ${s2.PG}`,
                                          disabled: O || !r,
                                          onClick: ew,
                                          "aria-label": T.intl.string(R.default.wiguT0),
                                          children: (0, a.jsx)(rw.StopIcon, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : k?.tierSettings != null && null != w
                                  ? (0, a.jsx)(sk.A, {
                                        settings: k.tierSettings,
                                        tiers: k.tiers,
                                        choices: k.choices,
                                        disabled: !A,
                                        onChange: w,
                                        className: `${s2.Y0} ${s2.$E}`,
                                        icon: (0, a.jsx)(sd.FiltersHorizontalIcon, {
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
                                  className: s2.fF,
                                  children: [
                                      (0, a.jsx)("div", { className: s2.MT }),
                                      (0, a.jsx)("button", {
                                          type: "submit",
                                          className: s2.rt,
                                          disabled: !en,
                                          "aria-label": T.intl.string(R.default.rxW2cl),
                                          children: (0, a.jsx)(sm.SendMessageIcon, {
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
    s8 = 1500,
    s6 = 1e3;
function ue(e) {
    e.preventDefault();
}
function ut(e) {
    return e?.querySelector("[data-slate-editor]") ?? null;
}
var un = n(709753),
    ul = n(540338);
function ur(e) {
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
var ua = n(986109);
let ui = i.createContext(null);
function us(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: r,
            highlighted: s = !1,
            continuation: u = !1,
            onContextMenu: c,
        } = e,
        d = i.useContext(ui),
        [m, f] = i.useState(() => aO.Ay.useReducedMotion || (null != l && d?.current.has(l) === !0)),
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
        className: o()(ua.xk, { [ua.g5]: m, [ua.Qo]: s, [ua.q3]: u }),
        children: n,
    });
}
let uu = new Map();
function uo(e, t, n) {
    let l = 0;
    for (let r = e.length - 1; r >= 0 && e[r].created_at > t; r--) {
        let t = e[r];
        "user" === t.role && (null == t.user_id || t.user_id === n) && l++;
    }
    return l;
}
let uc = "live_behind",
    ud = "conjureTipDismissals",
    um = new Set(),
    uf = new Set(),
    uh = 0;
function ug() {
    let e = lq.w.get(ud);
    return { forever: e?.forever ?? [], app: e?.app ?? {}, anchor: e?.anchor ?? {} };
}
function up(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    switch (e.dismissal) {
        case void 0:
            return !1;
        case "session":
            var l;
            return um.has(((l = e.id), `${t}:${l}`));
        case "anchor":
            return null != n && ug().anchor[t]?.[e.id] === n;
        case "app":
            return ug().app[t]?.includes(e.id) === !0;
        case "forever":
            return ug().forever.includes(e.id);
    }
}
function ux(e) {
    return (uf.add(e), () => uf.delete(e));
}
function uv(e, t) {
    let n = t?.type === "remixed" ? t.settings_keys : void 0;
    return (0, c.bG)([rn.A], () => null != n && n.length > 0 && l9({ keys: n }, rn.A.getSettings(e)), [n, e]) &&
        null != n
        ? { keys: n, note: T.intl.string(R.default.F2yVHg) }
        : null;
}
function uj(e) {
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
let ub = [12e4];
var uy = n(292771);
function uk(e) {
    let { presentation: t, render: n } = e,
        l = (0, c.bG)([aO.Ay], () => aO.Ay.useReducedMotion),
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
            className: uy.wg,
            children: r.map((e) =>
                (0, a.jsx)(
                    "div",
                    {
                        "data-tip-layer": e.leaving ? "leaving" : "active",
                        "aria-hidden": e.leaving || void 0,
                        className: o()(uy.qd, e.leaving ? uy.dv : uy.Hu),
                        children: n(e.presentation),
                    },
                    e.presentation,
                ),
            ),
        })
    );
}
function uw(e) {
    return null != e && !e.publishing && "review_permissions" === e.action;
}
var uS = n(247171);
function uA(e) {
    let { icon: t, tone: n, firstLine: l, className: r, children: i } = e;
    return (0, a.jsxs)("div", {
        className: o()(uS.row, r),
        children: [
            (0, a.jsx)(j.E, {
                tag: "span",
                variant: l,
                color: "none",
                className: o()(uS.gutter, uS[n]),
                "aria-hidden": !0,
                children: (0, a.jsx)(t, { size: "sm", color: "currentColor", "data-conjure-tip-icon": !0 }),
            }),
            (0, a.jsx)("div", { className: uS.content, children: i }),
        ],
    });
}
var uC = n(830205);
function uN(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(uA, {
        icon: t,
        tone: "muted",
        firstLine: "body-sm/normal",
        className: uC.aK,
        children: (0, a.jsxs)("div", {
            className: uC.n8,
            children: [
                (0, a.jsx)(j.E, {
                    tag: "div",
                    variant: "body-sm/normal",
                    color: "text-muted",
                    className: uC.Qq,
                    children: l,
                }),
                null != n
                    ? (0, a.jsx)("div", {
                          className: uC.X8,
                          children: (0, a.jsx)(e3.m, {
                              text: T.intl.string(T.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(tr.K, {
                                  "aria-label": T.intl.string(T.t.WAI6xu),
                                  icon: tU.XSmallIcon,
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
function uI(e) {
    let { projectId: t } = e,
        n = i.useContext(eU.bI);
    return (0, a.jsx)(uN, {
        icon: ib.ShieldIcon,
        children: T.intl.format(R.default["0S9HY8"], {
            onReview: async () => {
                null != n && (await (0, eU.vL)(t, n.guildId));
            },
        }),
    });
}
var uE = n(443865),
    u_ = n(716502);
function uM(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(uA, {
        icon: t,
        tone: "brand",
        firstLine: "body-md/semibold",
        className: u_.Nr,
        children: (0, a.jsxs)("section", {
            className: u_.Qs,
            children: [
                l,
                null != n
                    ? (0, a.jsx)("div", {
                          className: u_.X8,
                          children: (0, a.jsx)(e3.m, {
                              text: T.intl.string(T.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(tr.K, {
                                  "aria-label": T.intl.string(T.t.WAI6xu),
                                  icon: tU.XSmallIcon,
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
    let { children: t } = e;
    return (0, a.jsx)(j.E, {
        tag: "div",
        variant: "body-md/semibold",
        color: "text-strong",
        className: u_.DD,
        children: t,
    });
}
function uT(e) {
    let { children: t } = e;
    return (0, a.jsx)(j.E, {
        tag: "div",
        variant: "body-sm/normal",
        color: "text-muted",
        className: u_.rf,
        children: t,
    });
}
function uP(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: u_.o1, children: t });
}
var uL = n(95635);
function u$(e) {
    let { projectId: t, publish: n, onDismiss: l } = e,
        r = (0, eB.A)(t, n);
    return (0, a.jsx)(uN, {
        icon: uL.UploadIcon,
        onDismiss: l,
        children: T.intl.format(R.default.fWfeZ8, { onPublish: () => r("outdated_notice") }),
    });
}
let uD = [
    {
        id: "bot_permissions",
        priority: 3,
        resolve: function (e) {
            let { turn: t, publish: n } = e;
            return null != t && uw(n) ? "hint" : null;
        },
        render: (e, t) => {
            let {
                context: { projectId: n },
            } = t;
            return (0, a.jsx)(uI, { projectId: n });
        },
    },
    {
        id: uc,
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
                (null != n.publishCta && iV(l, n.publishCta))
                ? null
                : null != (t = e.messagesSinceShown(uc)) && t > 0 && t < 10
                  ? null
                  : "hint";
        },
        dismissal: "session",
        render: (e, t) => {
            let {
                context: { projectId: n, publish: l },
                dismiss: r,
            } = t;
            return null != l ? (0, a.jsx)(u$, { projectId: n, publish: l, onDismiss: r }) : null;
        },
    },
    {
        id: "ideas_intro",
        priority: 1,
        resolve: function (e) {
            let { turn: t, agentIdle: n, publish: l, justRemixed: r, noTurnsYet: a, ideasIntroAnchorId: i } = e;
            return !n || null == i || uw(l) ? null : null != t || r || a ? "card" : null;
        },
        dismissal: "anchor",
        render: (e, t) => {
            let {
                context: { onAskForIdeas: n },
                dismiss: l,
            } = t;
            return (0, a.jsxs)(uM, {
                icon: uE.LightbulbIcon,
                onDismiss: l,
                children: [
                    (0, a.jsx)(uR, { children: T.intl.string(R.default.OJlbhX) }),
                    (0, a.jsx)(uT, { children: T.intl.string(R.default["3vJBni"]) }),
                    (0, a.jsx)(uP, {
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
var uq = n(817921);
function uF(e) {
    let { projectId: t, messages: n, draftHasText: l, onAskForIdeas: r } = e,
        s = (function (e, t, n, l, r) {
            let a = (function (e, t, n, l, r) {
                let a,
                    s = (0, eU.Ay)(e),
                    u = (0, c.bG)([nC.default], () => nC.default.getCurrentUser()?.id),
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
                                if ((0, tV.BL)(n)) return n;
                                if (!(0, tV.B0)(e, t)) break;
                            }
                        }
                        return null;
                    })(t),
                    h = null == f || uj(f) ? null : f,
                    g = (function (e) {
                        for (let t = e.length - 1; t >= 0; t--) {
                            let n = e[t];
                            if ("publish_notice" === n.kind && n.publishNotice?.commands_failed !== !0) return n;
                        }
                        return null;
                    })(t),
                    p = g?.publishNotice?.update === !1 && 0 === uo(t, g.created_at, u) ? g.id : null,
                    x = o?.projectEvent?.type === "remixed" ? o.projectEvent : null,
                    v = x?.id ?? p,
                    j = uv(e, x),
                    b = x?.settings_keys?.length ?? 0,
                    y = (0, c.bG)([rn.A], () => b > 0 && null == rn.A.getSettings(e), [b, e]),
                    k = (0, un.WT)(e);
                return {
                    projectId: e,
                    turn: h,
                    publish: s,
                    draftHasText: n,
                    agentIdle:
                        (null == (a = (0, tV.Ji)(t)) || !!(0, tV.B0)(t, t.lastIndexOf(a))) &&
                        (null == f || !uj(f)) &&
                        null == ur(t) &&
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
                        let l = uu.get(`${e}:${n}`);
                        return null != l ? uo(t, l, u) : null;
                    },
                    isDismissed: (t) => up(t, e, v),
                    onAskForIdeas: l,
                };
            })(t, n, l, r, ub);
            i.useSyncExternalStore(ux, () => uh);
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
                                uu.set(`${e}:${t}`, n);
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
                                          if (null == e.dismissal || up(e, t, n)) return;
                                          let l = ug();
                                          switch (e.dismissal) {
                                              case "session":
                                                  var r;
                                                  um.add(((r = e.id), `${t}:${r}`));
                                                  break;
                                              case "anchor":
                                                  if (null == n) return;
                                                  lq.w.set(ud, {
                                                      ...l,
                                                      anchor: { ...l.anchor, [t]: { ...l.anchor[t], [e.id]: n } },
                                                  });
                                                  break;
                                              case "app":
                                                  lq.w.set(ud, {
                                                      ...l,
                                                      app: { ...l.app, [t]: [...(l.app[t] ?? []), e.id] },
                                                  });
                                                  break;
                                              case "forever":
                                                  lq.w.set(ud, { ...l, forever: [...l.forever, e.id] });
                                          }
                                          (uh++, uf.forEach((e) => e()));
                                      })(e.tip, t, a.ideasIntroAnchorId)
                                : void 0,
                    },
                }))
            );
        })(uD, t, n, l, r);
    return 0 === s.length
        ? null
        : (0, a.jsx)(us, {
              role: "assistant",
              continuation: !0,
              children: (0, a.jsx)("div", {
                  className: uq.X,
                  children: s.map((e) => {
                      let { tip: t, presentation: n, options: l } = e;
                      return (0, a.jsx)(uk, { presentation: n, render: (e) => t.render(e, l) }, t.id);
                  }),
              }),
          });
}
var uO = n(52133),
    uG = n(732159),
    uz = n(888366),
    uU = n(862026),
    uB = n(291192);
function uK(e) {
    let { projectId: t, contextSwitch: n } = e,
        l = i.useId(),
        r = (0, uU.L)(t, n);
    if (null == r) return null;
    let { action: s } = r;
    return (0, a.jsxs)("div", {
        className: uB.Ac,
        role: "group",
        "aria-labelledby": l,
        children: [
            (0, a.jsxs)("div", {
                className: uB.Sp,
                children: [
                    (0, a.jsx)("span", { className: uB.q3 }),
                    (0, a.jsxs)("span", {
                        className: uB.g8,
                        children: [
                            (0, a.jsx)(uz.ChatPlusIcon, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, a.jsx)(j.E, {
                                id: l,
                                tag: "span",
                                variant: "body-xs/semibold",
                                color: "text-default",
                                children: r.label,
                            }),
                        ],
                    }),
                    (0, a.jsx)("span", { className: uB.q3 }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: uB.nM,
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
                                          (0, a.jsx)(nO.Q, {
                                              text: s.text,
                                              textVariant: "body-sm/medium",
                                              disabled: s.disabled,
                                              onClick: () => {
                                                  var e;
                                                  return s.confirm
                                                      ? ((e = s.onPress),
                                                        void (0, K.mM)(() =>
                                                            Promise.resolve((t) =>
                                                                (0, a.jsx)(uG.u, {
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
var uH = n(345942),
    uV = n(727419),
    uW = n(576705);
function uX(e) {
    let { guildId: t, update: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            " ",
            T.intl.format(n ? R.default.esEGL5 : R.default["XrN+Bg"], {
                onOpen: () => uV.A.open(t, ev.BEX.GUILD_AUTOMOD),
            }),
        ],
    });
}
var uQ = n(976860);
function uZ(e) {
    return (0, c.bG)([eR.Ay, aM.A], () => {
        let t = eR.Ay.getProject(e);
        return null == t ? "" : (aM.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
var uY = n(951465),
    uJ = n(369455);
function u0(e) {
    var t, n, l;
    let r,
        i,
        { projectId: s, notice: u } = e,
        o = uZ(s),
        d =
            null ==
            (i = (0, c.bG)([eR.Ay, lt.A], () => {
                let e = eR.Ay.getProject(s);
                return null == e || "guild" !== e.install_scope || null == e.guild_id
                    ? null
                    : (lt.A.getGuild(e.guild_id) ?? null);
            }))
                ? null
                : { guildId: i.id, name: i.name },
        m = (0, c.cf)([eR.Ay, eG.A, lt.A, uW.A], () => {
            let e = eR.Ay.getProject(s);
            if (null == e || "guild" !== e.install_scope || null == e.guild_id) return { automod: !1, guildId: null };
            let t =
                    e.supported_surfaces?.includes(ee.q7.AUTOMOD) === !0 ||
                    eG.A.getPublishStatus(s)?.surface === "automod",
                n = lt.A.getGuild(e.guild_id),
                l = null != n && uW.A.can(ev.xBc.MANAGE_GUILD, n);
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
                        null != d && (0, uH.u)(d.guildId);
                    },
                },
            ),
            null != m.guildId
                ? (0, a.jsx)(uX, { guildId: m.guildId, update: u.update })
                : !m.automod && u.update && null != u.published_revision
                  ? (0, a.jsx)(u1, { projectId: s, notice: u })
                  : null,
        ],
    });
}
function u1(e) {
    let { projectId: t, notice: n } = e,
        l = (function (e, t) {
            let n = s.useContext(eU.bI)?.guildId ?? null,
                l = t.published_revision ?? null,
                { sent: r, canOffer: a } = (0, c.cf)(
                    [eG.A, eR.Ay],
                    () => {
                        let r = eG.A.getPublishStatus(e),
                            a = eR.Ay.getProject(e);
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
                                (0, eR.jf)(a),
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
                                    tQ.D,
                                    {
                                        tag: "a",
                                        role: "link",
                                        className: uJ.Z,
                                        onClick: () =>
                                            (function (e) {
                                                let { guildId: t, channelId: n, messageId: l } = e;
                                                (0, uQ.pX)(ev.BVt.CHANNEL(t, n, l));
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
                                        a = null == r ? null : (0, eU.KL)(r, l);
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
                                null != e && (0, uY.A)(e);
                            },
                        }),
              ],
          });
}
var u2 = n(73153),
    u3 = n(505527),
    u4 = n(367790),
    u5 = n(354777),
    u7 = n(491182),
    u9 = n(74096),
    u8 = n(549587),
    u6 = n(448368),
    oe = n(21299),
    ot = n(538355),
    on = n(715628),
    ol = n(752636),
    or = n(9842),
    oa = n(589022),
    oi = n(967198),
    os = n(531685),
    ou = n(503275);
let oo = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function oc(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function od(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function om(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let r = od(e, t),
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
    if (oc(r) && oc(a)) {
        let n = 0,
            l = t;
        for (; n < 32 && oc(od(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function of(e, t) {
    let { streaming: n } = t,
        l = (0, c.bG)([aO.Ay], () => aO.Ay.useReducedMotion),
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
                      for (; a > 0 && om(t, a);) a--;
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
                                    for (; l > t + 1 && n - l < 12 && oo.has(e.charAt(l - 1));) l--;
                                    return oo.has(e.charAt(l - 1)) ? n : l;
                                })(t, r, Math.min(t.length, r + i));
                                let u = s;
                                for (; u < t.length && u - s < 32 && om(t, u);) u++;
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
var oh = n(624479),
    og = n(890377),
    op = n(92446),
    ox = n(957565),
    ov = n(180227);
function oj(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)("div", {
              className: o()(ov.QE, { [ov.Rn]: t }),
              children: (0, a.jsx)(ir.Ay, {
                  children: n.map((e) =>
                      (0, a.jsx)(
                          ir.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function ob(e) {
    return ox.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: T.intl.string(T.t.JrGD7E), icon: oh.CopyIcon, onClick: () => (0, ox.C)(e) }]
        : [];
}
function oy(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: T.intl.string(R.default.CXtLD2),
                          tooltip: T.intl.string(R.default.DOb1HM),
                          icon: og.DoubleChevronSmallRightIcon,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: T.intl.string(R.default.urZwpN),
                          icon: tU.XSmallIcon,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, a.jsx)(oj, { groupStart: n, actions: [...r, ...ob(t)] });
}
function ok(e) {
    let { content: t, groupStart: n, onRestoreVersion: l, onViewTrace: r } = e,
        i =
            null == l
                ? []
                : [{ id: "restore-version", label: T.intl.string(R.default.H8Jfhu), icon: ts.UndoIcon, onClick: l }],
        s = null == r ? [] : [{ id: "view-trace", label: "View Trace", icon: op.BugIcon, onClick: r }];
    return (0, a.jsx)(oj, { groupStart: n, actions: [...i, ...ob(t), ...s] });
}
let ow = (0, aP.createChannelRecord)({ id: "conjure-builder", type: ev.rbe.DM }),
    oS = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function oA(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: o()(ov.Yq, { [ov.x1]: t }), children: e });
}
function oC(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
let oN = { hideSimpleEmbedContent: !0, allowList: !0, allowHeading: !0, allowLinks: !0, previewLinkTarget: !0 };
function oI(e, t, n) {
    let { content: l } = (0, ot.A)(e, oN),
        r = i.useMemo(() => ((0, rv.aW)(e.content) ? (0, u5.z2)(sn.U, e, oN).content : null), [e]) ?? l,
        s = i.useMemo(() => ({ message: e, channel: ow, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(u9.Ay, { className: n, message: e, content: r, compact: !1 })
          : (0, on.A)(s, r);
}
function oE(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, oe.m)(e, ow, t.usernameProfile, l),
        u = (0, oe.Jo)(t.avatarProfile, l),
        o = (0, c.bG)([oi.A], () => oi.A.getGuildId()),
        d = (0, c.bG)([nC.default], () => nC.default.getCurrentUser()),
        m = i.useCallback(
            (t) => {
                let n = nC.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, a.jsx)(oa.A, { ...t, user: n, currentUser: d, guildId: o ?? void 0 });
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
let o_ = { formatInline: !0, allowGameMentions: !0 };
function oM(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        { content: s } = (0, ot.A)(n, o_),
        u = i.useMemo(() => {
            let e = "" === n.content ? null : (0, rv.aW)(n.content) ? (0, u5.z2)(sn.U, n, o_).content : s;
            return null == l
                ? e
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("span", {
                              className: ov.GV,
                              children: [
                                  (0, a.jsx)(g.ExperimentalDirectSelectIcon, {
                                      className: ov.Rj,
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
        m = (0, it.X4)(n),
        f = (0, it.X4)(t),
        h = oE(n);
    return (0, a.jsx)(u6.A, {
        repliedAuthor: m,
        baseAuthor: f,
        baseMessage: t,
        channel: ow,
        referencedMessage: { state: or.a.LOADED, message: n },
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
function oR(e) {
    let { message: t, author: n } = e,
        l = oE(t);
    return (0, a.jsx)(u8.Ay, {
        message: t,
        channel: ow,
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
function oT(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, groupStart: s, onQueuedAction: u } = e,
        o = (0, ou.vm)(l),
        c = i.useMemo(() => (0, it.FT)(o, null), [o]),
        d = i.useMemo(() => (0, lT.W1)(t), [t]),
        m = d?.body ?? t,
        f = (0, sA.Qu)(m),
        h = i.useMemo(() => {
            if (null == o) return null;
            let e = (0, aT.Ay)({ channelId: ow.id, content: m, author: o });
            return (0, aR.rh)({ ...e, timestamp: oC(n, e.timestamp), state: ev.cmJ.SENT });
        }, [m, o, n]);
    return null == h
        ? null
        : (0, a.jsx)(
              oP,
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
function oP(e) {
    let { message: t, author: n, content: l, selected: r, accessories: i, groupStart: s = !0, onQueuedAction: u } = e,
        o = oI(t, l);
    return (0, a.jsx)(u7.A, {
        className: ov.yE,
        author: n,
        childrenHeader: s ? (0, a.jsx)(oR, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? o
                : (0, a.jsxs)("div", {
                      className: ov.zq,
                      children: [
                          (0, a.jsxs)("span", {
                              className: ov.GV,
                              children: [
                                  (0, a.jsx)(g.ExperimentalDirectSelectIcon, {
                                      className: ov.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  r,
                              ],
                          }),
                          (0, a.jsx)("span", { className: ov.WO, children: o }),
                      ],
                  }),
        childrenAccessories: oA(i, "" !== l),
        childrenButtons: (0, a.jsx)(oy, { content: l, groupStart: s, onQueuedAction: u }),
    });
}
function oL(e) {
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
        { text: m, revealing: f } = of(t, { streaming: (0, c.bG)([os.A], () => o && os.A.isFocused(), [o]) }),
        h = i.useMemo(() => (0, it.FT)(null, null), []),
        g = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        p = r?.userId,
        x = (0, ou.vm)(p),
        v = i.useMemo(() => (null == r ? null : (0, lT.W1)(r.content)), [r]),
        j = i.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, aT.Ay)({ channelId: ow.id, content: v?.body ?? r.content, author: x });
            return (0, aR.rh)({ ...e, id: r.id, timestamp: oC(r.createdAt, e.timestamp), state: ev.cmJ.SENT });
        }, [r, v, x]),
        b = i.useMemo(() => (null == r ? void 0 : { channel_id: ow.id, message_id: r.id }), [r]),
        [y] = i.useState(() => (0, aT.Ay)({ channelId: ow.id, content: "", author: oS })),
        k = i.useMemo(
            () =>
                (0, aR.rh)({
                    ...y,
                    timestamp: oC(n, y.timestamp),
                    state: ev.cmJ.SENT,
                    ...(null != b ? { type: ev.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, n, b],
        ),
        w = i.useMemo(() => k.set("content", m), [k, m]),
        S = i.useMemo(
            () => (0, ol.A)({ message: k, channel: ow, author: g, guildId: void 0, isGroupStart: u }),
            [k, g, u],
        ),
        A = oI(w, m, ov.OS);
    return (0, a.jsxs)("div", {
        className: ov.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": f ? "true" : void 0,
        children: [
            (0, a.jsx)(u7.A, {
                className: ov.yE,
                author: g,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, a.jsx)(oM, { baseMessage: k, referenced: j, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: S,
                childrenMessageContent: A,
                childrenAccessories: oA(l, "" !== m),
                disableInteraction: !0,
            }),
            d,
            u ? (0, a.jsx)("img", { className: ov.st, src: "/assets/c07664a29f3ee5ed.svg", alt: "" }) : null,
        ],
    });
}
var o$ = n(981879);
function oD(e) {
    let { messageId: t, reaction: n } = e,
        l = i.useMemo(
            () =>
                (0, aR.rh)(
                    { ...(0, aT.Ay)({ channelId: ow.id, content: "" }), id: `conjure:${t}`, state: ev.cmJ.SENT },
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
                (u2.h.dispatch({
                    type: "MESSAGE_REACTION_ADD_USERS",
                    channelId: ow.id,
                    messageId: l.id,
                    users: [oS],
                    emoji: e,
                    reactionType: u3.v6.NORMAL,
                }),
                    u2.h.dispatch({
                        type: "MESSAGE_REACTION_SET_FETCHED",
                        channelId: ow.id,
                        messageId: l.id,
                        emoji: e,
                        reactionType: u3.v6.NORMAL,
                    }));
            }
            return (
                t(),
                u2.h.subscribe("CONNECTION_OPEN", t),
                () => {
                    u2.h.unsubscribe("CONNECTION_OPEN", t);
                }
            );
        }, [l.id, n.emojiId, n.emoji]),
        (0, a.jsx)("div", {
            className: o$.H,
            children: (0, a.jsx)(u4.A, {
                message: l,
                channel: ow,
                disableReactionCreates: !0,
                disableReactionUpdates: !0,
                useChatFontScaling: !0,
                showTooltipWhenReadOnly: !0,
            }),
        })
    );
}
var oq = n(442433);
n(775443);
var oF = n(990779),
    oO = n(155899);
function oG(e) {
    let { onSelect: t, onClose: n = oq.Z_, onRestoreVersion: l, onViewTrace: r } = e;
    return (0, a.jsx)(ek.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: n,
        "aria-label": T.intl.string(T.t.ogxXGq),
        onSelect: t,
        children: (0, a.jsxs)(ew.rX, {
            children: [
                null != l
                    ? (0, a.jsx)(ew.Dr, {
                          id: "restore-version",
                          label: T.intl.string(R.default.H8Jfhu),
                          icon: ts.UndoIcon,
                          action: l,
                      })
                    : null,
                null != r
                    ? (0, a.jsx)(ew.Dr, { id: "view-trace", label: "View Trace", icon: op.BugIcon, action: r })
                    : null,
            ],
        }),
    });
}
function oz(e) {
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
        b = null != j && null != x ? () => oU(j, x) : void 0,
        y =
            ((t =
                F() && "assistant" === v.role && (0, tV.BL)(v)
                    ? (v.turn_id ?? v.steps.find((e) => null != e.turn_id)?.turn_id ?? v.id.replace(/^turn:/, ""))
                    : null),
            (0, c.bG)(
                [oF.A],
                () => {
                    let e =
                        null == t
                            ? null
                            : oF.A.getTimingTraces(l).findLast((e) => {
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
    return (0, a.jsx)(us, {
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
                          void (0, oq.jA)(t, (e) => (0, a.jsx)(oG, { ...e, onRestoreVersion: n, onViewTrace: l }))
                      );
                  }
                : void 0,
        children: (0, a.jsx)(oL, {
            groupStart: n.groupStart,
            buttons: (0, a.jsx)(ok, {
                groupStart: n.groupStart,
                content: n.content,
                onRestoreVersion: b,
                onViewTrace: k,
            }),
            content: n.content,
            createdAt: v.created_at,
            replyTo: r,
            onJumpToReplied: null != w && null != i ? () => i(w) : void 0,
            accessories: (0, a.jsx)(ss, {
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
                              oU(
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
function oU(e, t) {
    (0, oO.F)({ onConfirm: () => t(e) });
}
var oB = n(288539),
    oK = n(677683),
    oH = n(677690),
    oV = n(159711);
function oW(e) {
    let t,
        n,
        { projectId: l } = e,
        { outcome: r, pinnedName: i } =
            ((t = (0, c.bG)([oK.A], () => oK.A.getOutcome(l))),
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
        ? (0, a.jsx)(t3, {
              title: s,
              children: (0, a.jsx)(j.E, {
                  className: oV.r,
                  variant: "body-sm/normal",
                  color: "text-muted",
                  children:
                      "pinned" === r.status
                          ? T.intl.formatToPlainString(R.default.gKe6Lw, { channelName: i ?? "" })
                          : T.intl.string(R.default["+kpQ3v"]),
              }),
          })
        : (0, a.jsx)(t3, { title: s, children: (0, a.jsx)(oX, { projectId: l }) });
}
function oX(e) {
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
            let n = (0, c.bG)([eR.Ay], () => eR.Ay.getProject(e), [e]),
                l =
                    ((t = n?.guild_id ?? null),
                    (0, c.yK)(
                        [n6.A, uW.A],
                        () =>
                            null == t
                                ? []
                                : n6.A.getChannels(t)
                                      .VOCAL.map((e) => {
                                          let { channel: t } = e;
                                          return t;
                                      })
                                      .filter(
                                          (e) => e.type === ev.rbe.GUILD_VOICE && uW.A.can(ev.xBc.MANAGE_CHANNELS, e),
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
                    let t = await (0, oH.pk)(m.id, f);
                    (u(!1), t ? (0, oH.tg)(e, { status: "pinned", channelId: m.id }) : d(!0));
                }, [f, e, m]),
                g = i.useCallback(() => (0, oH.tg)(e, { status: "skipped" }), [e]);
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
        h = (0, n3.A)(n, "voice"),
        g = i.useMemo(() => {
            let e = new Set(l.map((e) => e.id));
            return (h ?? []).filter((t) => e.has(t.value));
        }, [l, h]);
    return (0, a.jsx)("div", {
        className: oV.r,
        children: (0, a.jsxs)(nz.B, {
            gap: 12,
            children: [
                (0, a.jsx)(j.E, {
                    variant: "body-md/normal",
                    color: "text-default",
                    children: T.intl.string(R.default["1vVBAw"]),
                }),
                g.length > 0
                    ? (0, a.jsx)(nv.Z, {
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
                    className: oV.o,
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
function oQ(e, t, n) {
    return (0, a.jsx)(oB.A, { userId: e, content: `@${t}` }, n);
}
function oZ(e) {
    let { projectId: t, event: n } = e,
        l = (function (e, t, n) {
            let l = t.actor_user_id;
            i.useEffect(() => {
                (0, ou.Y_)(l);
            }, [l]);
            let r = (0, c.bG)([nC.default], () => (null == l ? null : nC.default.getUser(l)), [l]),
                a = (0, a$.tx)(r),
                s = uZ(e),
                u =
                    (0, c.bG)([lt.A], () => (null == t.guild_id ? null : lt.A.getGuild(t.guild_id)?.name), [
                        t.guild_id,
                    ]) ??
                    ("app_removed" === t.type ? t.guild_name : null) ??
                    T.intl.string(R.default.R1tPlP),
                o = "app_removed" === t.type ? t.moved_to_guild_id : void 0,
                d = (0, c.bG)([lt.A], () => (null == o ? null : lt.A.getGuild(o)?.name), [o]),
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
        })(t, n, oQ),
        r = uv(t, n);
    return "voice_channel_pin" === n.type
        ? (0, a.jsx)(oW, { projectId: t })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(j.E, { variant: "body-md/normal", color: "text-default", children: l }),
                  null != r ? (0, a.jsx)(rf, { projectId: t, request: r, notifyAgent: !1 }) : null,
              ],
          });
}
let oY = i.memo(
        function (e) {
            var t;
            let { row: n, projectId: l, highlighted: r, currentUserId: i, ...s } = e,
                u = n.message,
                o =
                    ((t = "user" === n.kind ? u.id : null),
                    nc.useState((e) => (null == t ? null : (e.byMessageKey[t] ?? null))));
            switch (n.kind) {
                case "user": {
                    let e = (0, rv.DW)(u.attachments, u.content),
                        t = null != e && e.length > 0 ? e : null;
                    return (0, a.jsx)(us, {
                        rowKey: n.key,
                        role: "user",
                        anchorId: u.id,
                        highlighted: r,
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(oT, {
                            groupStart: n.groupStart,
                            content: u.content,
                            createdAt: u.created_at,
                            userId: u.user_id,
                            accessories:
                                null != t || null != o || null != u.agentReaction
                                    ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              null != t ? (0, a.jsx)(st.A, { projectId: l, attachments: t }) : null,
                                              null != o ? (0, a.jsx)(sy, { send: o }) : null,
                                              null != u.agentReaction
                                                  ? (0, a.jsx)(oD, { messageId: u.id, reaction: u.agentReaction })
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
                                    return (n) => (0, rj.tp)(e, t.id, n);
                            })(l, u, i),
                        }),
                    });
                }
                case "prose":
                    return (0, a.jsx)(us, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(oL, {
                            groupStart: n.groupStart,
                            content: n.content,
                            streaming: n.streaming,
                            createdAt: u.created_at,
                            accessories:
                                n.hostsAttachments && null != u.attachments
                                    ? (0, a.jsx)(st.A, { projectId: l, attachments: u.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, a.jsx)(us, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(si, {
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
                    return (0, a.jsx)(us, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(oL, {
                            groupStart: n.groupStart,
                            content: null == u.publishNotice ? u.content : "",
                            createdAt: u.created_at,
                            accessories:
                                null == u.publishNotice
                                    ? void 0
                                    : (0, a.jsx)(u0, { projectId: l, notice: u.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, a.jsx)(us, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(oL, {
                            groupStart: n.groupStart,
                            content: null == u.projectEvent ? u.content : "",
                            createdAt: u.created_at,
                            accessories:
                                null == u.projectEvent
                                    ? void 0
                                    : (0, a.jsx)(oZ, { projectId: l, event: u.projectEvent }),
                        }),
                    });
                case "contextBoundary":
                    return (0, a.jsx)(us, {
                        rowKey: n.key,
                        role: "assistant",
                        children:
                            null == u.contextSwitch
                                ? null
                                : (0, a.jsx)(uK, { projectId: l, contextSwitch: u.contextSwitch }),
                    });
                case "interrupted":
                    return (0, a.jsx)(us, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(si, { projectId: l, interrupted: !0, steps: u.steps }),
                    });
                case "legacyTodos":
                    return (0, a.jsx)(us, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(si, {
                            projectId: l,
                            steps: oJ,
                            active: !1,
                            checklistSuperseded: n.checklistSuperseded,
                            todos: u.todos,
                            provisionalTodo: u.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, a.jsx)(oz, { row: n, projectId: l, ...s });
            }
        },
        function (e, t) {
            return (
                (0, uO.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, uO.A)(e.row, t.row, ["message"]) &&
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
                (0, uO.A)(e.replyTo, t.replyTo) &&
                (0, uO.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let n of e) if (!t.has(n)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    oJ = [],
    o0 = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    o1 = new WeakMap();
function o2(e, t, n) {
    let l = Math.max(0, Math.min(e.length, n)),
        r = Math.max(0, Math.min(l, t));
    return { start: r, end: l, startKey: e[r] ?? null, endKey: l >= e.length ? null : (e[l - 1] ?? null) };
}
function o3(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
let o4 = ["wheel", "touchstart", "pointerdown", "keydown"];
function o5(e) {
    let t = e?.querySelectorAll("[data-conjure-plan-card]");
    return t?.[t.length - 1]?.closest("[data-conjure-row-key]") ?? null;
}
let o7 = i.memo(function (e) {
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
        S = i.useRef(null),
        [A, C] = i.useState(null),
        N = i.useCallback((e) => {
            ((S.current = e), C(e));
        }, []),
        [I, E] = i.useState(null),
        _ = i.useRef(0);
    i.useEffect(() => () => window.clearTimeout(_.current), []);
    let M = i.useCallback((e) => {
            (E(e), window.clearTimeout(_.current), (_.current = window.setTimeout(() => E(null), 1600)));
        }, []),
        P = (0, c.bG)([eG.A], () => eG.A.getPublishStatus(t)),
        L = (0, c.bG)([nC.default], () => nC.default.getCurrentUser()?.id),
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
                                        let t = (0, tH.lt)(e.steps);
                                        return null != t ? t : null != e.todos && e.todos.length > 0 ? e.todos : null;
                                    })(r) &&
                                (n && t.add(r.render_id), (n = !0));
                        }
                        return t;
                    })(e);
                for (let r of e) {
                    let e = l.has(r.render_id),
                        a = null != r.clarification && r.clarification.id === t,
                        i = o1.get(r);
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
                        let a = !(0, tV.BL)(e),
                            i = rS({
                                steps: e.steps,
                                content: e.content,
                                hasProposal: null != e.proposal,
                                hasLiveClarification: n,
                                hasAttachments: (e.attachments?.length ?? 0) > 0,
                            }),
                            s = i.lastStreamedMessage?.key,
                            u = (0, tH.C6)(e.steps, { turnActive: a }),
                            { lastWork: o, open: c } = (0, tH.CT)(u, { turnActive: a }),
                            d = u.at(-1)?.index,
                            m = !1;
                        for (let n of u) {
                            if (null != n.prose && o0.test(n.prose.content)) m = !0;
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
                                        turnActive: tW(e),
                                        checklistSuperseded: n.hasTodos && t,
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        let f = o0.test(e.content ?? "");
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
                    (o1.set(r, { superseded: e, liveCard: a, planned: s }), n.push(...s));
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
                        if (null != l) return iH(l, t) ? e[n].id : null;
                    }
                    return null;
                })(n, P)),
                n.every((t) => null == t.publishCta || t.id === e)
                    ? n
                    : n.map((t) => {
                          if (null == t.publishCta || t.id === e) return t;
                          let n = iW.get(t);
                          return (null == n && ((n = { ...t, publishCta: null }), iW.set(t, n)), n);
                      })),
                h,
            );
        }, [n, P, h]),
        D = i.useMemo(() => $.map((e) => e.key), [$]),
        [q, F] = i.useState(null),
        O = (function (e, t, n) {
            if (null == t) return o2(e, e.length - 60, e.length);
            let l = null == t.endKey,
                r = l ? e.length : o3(e, t.endKey, t.end - 1) + 1,
                a = o3(e, t.startKey, t.start);
            return (l && n && r - a > 120 && (a = r - 60), o2(e, a, r));
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
                t = W.current ? o5(S.current) : null;
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
        for (let n of o4) e.addEventListener(n, t, { passive: !0 });
        return () => {
            for (let n of o4) e.removeEventListener(n, t);
        };
    }, [p]);
    let Q = i.useCallback(() => {
            let e = p.current?.getScrollerNode(),
                t = S.current;
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
                    return ((n = Math.min(e.length, t.end + 30)), o2(e, Math.max(t.start, n - 120), n));
                }
                if (!l) return null;
                if (0 === t.start) return "older";
                if (!a && !r) {
                    let n, l;
                    return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), o2(e, n, l));
                }
                let i = Math.max(t.start - 30, t.end - 120);
                return i < t.start ? o2(e, i, t.end) : null;
            })(z.current, G.current, {
                nearTop: e.scrollTop < 600,
                nearBottom: e.scrollHeight - e.clientHeight - e.scrollTop < 600,
                pinned: x.current,
            });
            "older" === n ? (0, eO.P6)(t) : null != n && F(n);
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
    let Y = i.useRef(null),
        J = i.useCallback(
            (e) => {
                var n;
                let l;
                ((Y.current = null), (W.current = !1));
                let r = S.current?.querySelector(`[data-conjure-message="${e}"]`);
                if (null != r) {
                    (y(), F(G.current), r.scrollIntoView({ block: "center", behavior: "smooth" }), M(e));
                    return;
                }
                let a = U.current.findIndex((t) => "user" === t.kind && t.message.id === e);
                if (-1 === a) {
                    (0, eO.P6)(t) && (Y.current = e);
                    return;
                }
                (y(),
                    (K.current = () => {
                        (S.current?.querySelector(`[data-conjure-message="${e}"]`)?.scrollIntoView({ block: "center" }),
                            M(e));
                    }),
                    F(((n = z.current), o2(n, (l = Math.max(0, a - 30)), l + 60))));
            },
            [M, y, t],
        );
    (i.useEffect(() => {
        let e = Y.current;
        null != e && J(e);
    }, [$, J]),
        i.useLayoutEffect(() => {
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
    (i.useEffect(() => w?.(ee), [ee, w]),
        i.useLayoutEffect(() => {
            ((G.current = O), (z.current = D), (U.current = $));
        }),
        i.useLayoutEffect(() => {
            let e = p.current?.getScrollerNode(),
                l = S.current,
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
                if (r && x.current && null != o5(l)) (y(), F(G.current), (W.current = !0), X());
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
    let et = i.useMemo(() => ur(n), [n]),
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
                : (0, tV.BL)(ea)
                  ? ea.awaitingUser
                  : null) ?? void 0,
        es = (0, c.bG)([rn.A], () => rn.A.getSettings(t)?.secrets, [t]),
        eu = (0, un.WT)(t),
        eo = i.useMemo(() => (0, l2.Mv)(n, es), [n, es]);
    if (!(0, tV.i_)(n)) {
        if ("loading" === l)
            return (0, a.jsx)("ol", {
                className: o()(ua.x7, ua.jH),
                "aria-busy": !0,
                children: (0, a.jsx)("li", { className: ua.Ub, children: (0, a.jsx)(b.y, {}) }),
            });
        let e = "unavailable" === l ? R.default.Td4Sf4 : R.default.V1QiNz;
        return (0, a.jsx)("ol", {
            className: ua.x7,
            children: (0, a.jsx)(us, { role: "assistant", children: (0, a.jsx)(oL, { content: T.intl.string(e) }) }),
        });
    }
    return (0, a.jsx)(ui.Provider, {
        value: H,
        children: (0, a.jsxs)("ol", {
            ref: N,
            className: ua.x7,
            children: [
                $.slice(O.start, O.end).map((e) => {
                    let n = e.message;
                    if ("closing" !== e.kind)
                        return (0, a.jsx)(
                            oY,
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
                        oY,
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
                              us,
                              {
                                  role: "assistant",
                                  continuation: !0,
                                  children: (0, a.jsx)(oL, {
                                      groupStart: !1,
                                      content: "",
                                      accessories: (0, a.jsx)(ul.K, { projectId: t, approval: e }),
                                  }),
                              },
                              e.id,
                          ),
                      )
                    : null,
                null != ei && ee
                    ? (0, a.jsx)(us, {
                          role: "assistant",
                          continuation: !0,
                          children: (0, a.jsx)(oL, {
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
                ee ? (0, a.jsx)(uF, { projectId: t, messages: n, draftHasText: !0 === u, onAskForIdeas: s }) : null,
            ],
        }),
    });
});
var o9 = n(731084),
    o8 = n(336288),
    o6 = n(187447);
function ce(e) {
    let { activity: t, id: n } = e,
        l = (0, tK.j)(),
        { text: r, revealing: s } = of(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
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
            className: o6.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, a.jsx)(tG.Ch, {
                ref: u,
                onScroll: m,
                className: o6.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: o()(sa.PT, o6.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: aK.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var ct = n(53659);
function cn(e) {
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
        b = (0, o9.xu)({
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
        k = b === o9.kx["0"],
        [w, S] = i.useState(f ?? y),
        A = (0, tK.j)();
    (l || (0, o9.E4)(y, w) || (!A && !k)) && w !== y && S(y);
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
        ((E.current = k), !k && (0, o9.E8)(I.current) && S(C.current));
    }, [k]),
        i.useEffect(() => {
            if (!A) return;
            let e = 0,
                t = 0;
            function n() {
                E.current
                    ? ((_.current = (0, o9.E8)(I.current) ? _.current + 1 : 0), S((0, o9.Ov)(_.current)))
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
        $ = i.useCallback(() => {
            M && null != P && v((e) => (e === P ? null : P));
        }, [M, P]),
        D = i.useCallback(() => v(null), []);
    return (0, a.jsx)(ey.Y, {
        targetElementRef: g,
        position: "top",
        align: "left",
        shouldShow: L,
        onRequestClose: D,
        renderPopout: () => (0, a.jsx)(ce, { id: p, activity: t }),
        children: () =>
            (0, a.jsxs)(tQ.D, {
                innerRef: g,
                className: o()(ct.hF, M && ct.Xd),
                "aria-label": T.intl.string(
                    r
                        ? R.default.qqlUiW
                        : b === R.default.j8tmjK
                          ? R.default.j8tmjK
                          : k
                            ? o9.kx["0"]
                            : R.default["Uuj/gh"],
                ),
                "aria-expanded": L,
                "aria-describedby": L ? p : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": T.intl.string(b),
                onClick: $,
                children: [
                    (0, a.jsx)("span", {
                        className: ct.bl,
                        children: (0, a.jsx)(o8.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", {
                        className: ct.xu,
                        "aria-hidden": !!c || !!k || void 0,
                        children: A
                            ? (0, a.jsx)(su.o, {
                                  ref: N,
                                  text: w,
                                  variant: "body-xs/medium",
                                  color: "text-subtle",
                                  duration: 1e3,
                                  delay: null,
                                  className: ct.yE,
                              })
                            : (0, a.jsx)(j.E, {
                                  tag: "span",
                                  variant: "body-xs/medium",
                                  color: "text-subtle",
                                  className: ct.yE,
                                  children: w,
                              }),
                    }),
                ],
            }),
    });
}
let cl = { second: 1e3, minute: 6e4 };
function cr(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [n, l] = i.useState(() => Date.now());
    return (
        i.useEffect(() => {
            let n;
            if (null == e) return;
            let r = cl[t];
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
var ca = n(719374);
function ci(e) {
    let { startedAt: t, variant: n = "body-xs/medium" } = e,
        l = cr(t);
    return (0, a.jsx)(j.E, {
        tag: "span",
        variant: n,
        color: "text-muted",
        "aria-hidden": !0,
        className: ca.$,
        "data-conjure-turn-timer": !0,
        children: (0, rT.C7)(l),
    });
}
function cs(e) {
    let { startedAt: t } = e,
        n = cr(t, "minute");
    return (0, a.jsx)(t0.A, { role: "timer", children: (0, rT.Us)(n) });
}
var cu = n(885574),
    co = n(242779),
    cc = n(436804);
function cd(e) {
    return e.toLocaleString();
}
function cm(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, a.jsxs)("div", {
        className: cc.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: cc.mf,
                children: [
                    (0, a.jsx)(j.E, { variant: "body-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(j.E, {
                        variant: "body-sm/medium",
                        color: "text-muted",
                        children: [cd((0, co.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(j.E, {
                tag: "div",
                variant: "body-xs/normal",
                color: "text-muted",
                children: [
                    cd(n.input_tokens),
                    " in \xb7 ",
                    cd(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${cd(n.cache_creation_input_tokens)} cache write \xb7 ${cd(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function cf(e) {
    let { project: t } = e,
        n = (0, co.wU)(t.compaction),
        l = (0, co.wU)(t.classifier),
        r = (0, co.wU)(t.image),
        i = (0, co.wV)(t.orchestrator, t.codegen),
        s = (0, co.wV)(i, n);
    return (0, a.jsxs)("div", {
        className: cc.si,
        role: "dialog",
        "aria-label": T.intl.string(R.default.p5EGzq),
        children: [
            (0, a.jsx)("div", {
                className: cc.Q$,
                children: (0, a.jsxs)("div", {
                    className: cc.mf,
                    children: [
                        (0, a.jsxs)(j.E, {
                            variant: "body-md/semibold",
                            color: "text-default",
                            children: [cd((0, co.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(j.E, {
                            variant: "body-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(cm, { label: T.intl.string(R.default["9Sj3SX"]), usage: i }),
            (0, a.jsx)(cm, { label: T.intl.string(R.default.ANCEo3), usage: n }),
            (0, a.jsx)(cm, { label: T.intl.string(R.default.ugL6D4), usage: l, cached: !1 }),
            (0, a.jsx)(cm, { label: T.intl.string(R.default.DHr5On), usage: r, cached: !1 }),
            (0, a.jsxs)("div", {
                className: cc.mf,
                children: [
                    (0, a.jsx)(j.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: T.intl.string(R.default["8OUg09"]),
                    }),
                    (0, a.jsx)(j.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        children: 0 === (0, co.sj)(s) ? "\u2014" : `${Math.round(100 * (0, co.CA)(s))}%`,
                    }),
                ],
            }),
        ],
    });
}
function ch(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(ey.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(cf, { project: t }),
        children: (e) =>
            (0, a.jsx)(tQ.D, {
                innerRef: n,
                className: cc.Y$,
                "aria-label": T.intl.string(R.default.Z96gxQ),
                ...e,
                children: (0, a.jsx)(cu.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var cg = n(990250);
function cp(e) {
    let { queued: t } = e,
        n = T.intl.string(R.default.hzgPbZ);
    return (0, a.jsxs)("div", {
        className: cg.nd,
        role: "dialog",
        "aria-label": n,
        "data-testid": "conjure-queued-card",
        children: [
            (0, a.jsxs)("div", {
                className: cg.wx,
                children: [
                    (0, a.jsx)(j.E, { variant: "body-md/semibold", color: "text-default", children: n }),
                    (0, a.jsx)(j.E, { variant: "body-xs/normal", color: "text-muted", children: t.length }),
                ],
            }),
            (0, a.jsx)(tG.Ch, {
                className: cg.XG,
                children: (0, a.jsx)("ul", {
                    className: cg.p_,
                    children: t.map((e) => (0, a.jsx)(cx, { content: e.content }, e.render_id)),
                }),
            }),
        ],
    });
}
function cx(e) {
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
              className: cg.AS,
              children: (0, a.jsx)(j.E, {
                  variant: "body-sm/normal",
                  color: "text-muted",
                  children: T.intl.string(R.default["07XimM"]),
              }),
          })
        : (0, a.jsxs)("li", {
              className: cg.AS,
              children: [
                  (0, a.jsx)(j.E, {
                      ref: n,
                      variant: "body-sm/normal",
                      color: "text-default",
                      lineClamp: l ? void 0 : 3,
                      className: cg.Qs,
                      children: t,
                  }),
                  s
                      ? (0, a.jsx)(nO.Q, {
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
function cv(e) {
    let { queued: t, className: n } = e,
        l = i.useRef(null);
    return (0, a.jsx)(ey.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(cp, { queued: t }),
        children: (e) =>
            (0, a.jsx)(tQ.D, {
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
var cj = n(997421);
function cb(e) {
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
        v = (0, c.bG)([eG.A], () => eG.A.getPublishStatus(t)?.publishing === !0, [t]),
        [b, y] = i.useState(null),
        k = i.useCallback(
            (e) =>
                y(
                    (0, o9.E8)(e) || e === T.intl.string(R.default.mKK6wB) || e === T.intl.string(R.default.j8tmjK)
                        ? null
                        : e,
                ),
            [],
        ),
        w = null == h ? null : (0, o9.uc)(h),
        S = null != s,
        A = s ?? (n ? l : void 0),
        C = n || r || S || !0 === f;
    return (0, a.jsxs)("div", {
        className: cj.jf,
        children: [
            (0, a.jsxs)("div", {
                className: cj.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    C || u || x || v
                        ? (0, a.jsx)(cn, {
                              activity: d,
                              compacting: m,
                              saving: f,
                              restoring: r,
                              remixing: S,
                              recalling: u,
                              controlling: x,
                              publishPending: v && C,
                              publishing: v,
                              spoken: b,
                              onSpokenChange: k,
                          })
                        : null,
                    null != A ? (0, a.jsx)(ci, { startedAt: A }) : null,
                ],
            }),
            null != A ? (0, a.jsx)(cs, { startedAt: A }) : null,
            0 === p.length ? null : (0, a.jsx)(cv, { queued: p, className: o()(cj.BP, cj.A1) }),
            null == h || null == w
                ? null
                : (0, a.jsxs)("span", {
                      className: cj.BP,
                      children: [
                          (0, a.jsx)(j.E, {
                              tag: "span",
                              variant: "body-xs/medium",
                              color: "text-muted",
                              "aria-label": w.aria,
                              children: w.text,
                          }),
                          (0, a.jsx)(ch, { project: h }),
                      ],
                  }),
            "open" === g
                ? null
                : (0, a.jsx)(j.E, {
                      tag: "span",
                      variant: "body-xs/medium",
                      color: "failed" === g ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": T.intl.formatToPlainString(R.default["tCo+ZM"], { status: (0, o9.Db)(g) }),
                      "data-conjure-conn": !0,
                      "data-state": g,
                      className: cj.XF,
                      children: (0, o9.Db)(g),
                  }),
        ],
    });
}
var cy = n(698638),
    ck = n(608711);
let cw = [T.intl.string(R.default["9w+Chc"]), T.intl.string(R.default.WAvmdq), T.intl.string(R.default.SKsrzl)];
function cS(e) {
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
        b = (0, c.bG)([rl.A], () => rl.A.getMessages(f), [f]),
        y = (0, c.bG)([eO.Ay], () => eO.Ay.getConnState(f), [f]),
        k = (0, c.bG)([rl.A], () => rl.A.getProjectUsage(f), [f]),
        w = (0, c.bG)([rl.A], () => rl.A.getThinkingActivity(f), [f]),
        S = (0, c.bG)([rl.A], () => rl.A.isCompacting(f), [f]),
        A = (0, c.bG)([rl.A], () => rl.A.isSaving(f), [f]),
        C = (0, c.bG)([lP.A], () => lP.A.getModelSettings(f), [f]),
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
                    for (let e of o4) t.addEventListener(e, o, { passive: !0 });
                    return () => {
                        for (let e of o4) t.removeEventListener(e, o);
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
        K = i.useContext(X.A) === f;
    i.useLayoutEffect(() => {
        if (!K) return;
        let e = { position: Z.A.getProjectView(f).chatScroll };
        return ((_.current = e), () => (0, Q.g7)(f, { chatScroll: e.position }));
    }, [K, f]);
    let H = i.useRef(!K);
    (i.useLayoutEffect(() => {
        if (H.current || !(0, tV.i_)(b)) return;
        H.current = !0;
        let e = Z.A.getProjectView(f).chatScroll;
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
            (0, eO.ensureConnection)(f);
        }, [f]),
        (0, rb.E1)(f, (0, tK.j)()));
    let V = (0, G.rt)(f),
        W = (function (e) {
            let t = (0, eU.Ay)(e),
                n = t?.guildId ?? null,
                l = (0, c.bG)([lt.A], () => (null == n ? null : (lt.A.getGuild(n)?.name ?? null))),
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
        Y = (function (e) {
            let t = (0, c.bG)([rg.A], () => rg.A.getSpendLimit(e), [e]);
            if (null == t) return null;
            let n = null == t.limitUsd ? null : rp.format(t.limitUsd);
            if ("blocked" === t.state) {
                let e = rh.A.getSubmitRequestURL();
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
        J =
            ((l = (0, c.bG)([l0.A], () => l0.A.getFailure(f))),
            (r = i.useCallback(() => (0, l1.CM)(f), [f])),
            null == l
                ? null
                : {
                      message: T.intl.format(R.default.Up6Ssw, { reason: l }),
                      retry: { text: T.intl.string(R.default["ywA+ET"]), onClick: r },
                  }),
        ee = (0, eH.E8)(f),
        et = (0, c.bG)([l0.A], () => l0.A.getSetupStartedAt(f), [f]),
        en = i.useCallback(
            (e, t) => {
                (0, eO.dv)(f, e, t);
            },
            [f],
        ),
        el = i.useCallback(
            (e, t, n) => {
                let l = n ?? en;
                0 === V.annotations.length
                    ? l(e, t)
                    : (l((0, lT.BL)({ annotations: V.annotations, metaComment: e, context: V.context }), t),
                      (0, G.mB)(f));
            },
            [V, en, f],
        ),
        er = i.useCallback(() => {
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
            })(f) ||
                rl.A.isThinking(f)) &&
                (0, eO.fu)(f);
        }, [f]),
        ea = i.useCallback((e) => (0, nf.RQ)(f, e.implementation_prompt), [f]),
        [ei, es] = (function (e) {
            let [t, n] = i.useState(() => rk(e)),
                [l, r] = i.useState(e),
                a = l !== e,
                s = a ? rk(e) : t;
            return (a && (r(e), n(s)), [s, n]);
        })(f),
        eu = i.useCallback(() => en(T.intl.string(R.default["t5CN3+"])), [en]),
        eo = i.useCallback((e, t, n) => (0, nf.RQ)(f, e, { clarificationAnswers: t, attachments: n }), [f]),
        ec = i.useCallback((e) => (0, lL.X)(f, e), [f]),
        ed = i.useCallback((e) => (0, e2.vX)(f, e), [f]),
        em = i.useCallback((e) => (0, e7.gn)(f, "chat", Array.from(e), ed), [f, ed]),
        ef = i.useCallback(() => (0, nf.RQ)(f, T.intl.string(R.default.Zc7gML)), [f]),
        eh = h?.status === "restoring",
        eg = "open" === y && !eh,
        ep = b[b.length - 1],
        ex = null != ep && "assistant" === ep.role && null != ep.proposal,
        [ev, ej] = i.useState(null),
        eb = i.useMemo(
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
        ey = null != eb && eb.id !== ev ? eb : null,
        ek = i.useCallback(() => {
            null != ey && ej(ey.id);
        }, [ey]),
        [ew, eS] = i.useState(null),
        eA = (function (e) {
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
        eC = ep?.appBuildRequest != null && (0, tV.BL)(ep) && ep.appBuildRequest.id !== ew ? ep.appBuildRequest : null,
        eN = eA.request ?? (null == ey ? eC : null),
        eI = null == eA.request ? ey : null,
        eE = null != eN && eN === eA.request,
        { close: e_, sent: eM } = eA,
        eR = eA.request?.id,
        eT = i.useCallback(() => {
            eE ? e_() : null != eN && eS(eN.id);
        }, [eN, eE, e_]),
        eP = i.useCallback(
            (e) => {
                (null != eR && eM(eR),
                    (0, d.P0)({
                        text: T.intl.formatToPlainString(R.default.RZO35O, { names: e.map((e) => e.name).join(", ") }),
                        variant: "success",
                    }));
            },
            [eR, eM],
        ),
        eL = (0, c.bG)([rn.A], () => rn.A.getSettings(f), [f]),
        [e$, eD] = i.useState(null),
        eq = rs(),
        eF =
            null != ep &&
            ((t = ep.id),
            (s = (0, l2.Mv)(b, eL?.secrets)),
            (u = ru(b)),
            b.some(
                (e) =>
                    "assistant" === e.role &&
                    e.id !== t &&
                    !!(0, tV.BL)(e) &&
                    ((null != e.secretRequest && "open" === s.get(e.render_id)) ||
                        (null != e.settingsRequest && !u.has(e.id) && !ro(e.settingsRequest, eL, eq.has(e.id)))),
            )),
        eG =
            null != ep &&
            "assistant" === ep.role &&
            null != ep.settingsRequest &&
            null == ep.secretRequest &&
            (0, tV.BL)(ep) &&
            ep.id !== e$ &&
            ((n = ep.settingsRequest),
            (o = n.keys ?? []),
            null != eL &&
                0 !== o.length &&
                o.every((e) => {
                    let t = eL.schema.find((t) => t.key === e);
                    return null != t && l7.has(t.type);
                })) &&
            l9(ep.settingsRequest, eL) &&
            !eF
                ? ep
                : null,
        ez = null == eA.request ? eG : null,
        eB = ez?.settingsRequest ?? null,
        eK = i.useCallback(() => {
            null != eG && eD(eG.id);
        }, [eG]),
        eV = null != eB,
        [eW, eX] = i.useState(null),
        eQ = eL?.secrets,
        eZ = i.useMemo(() => (0, l2.Qr)(b, (0, l2.Mv)(b, eQ)), [b, eQ]),
        eY = null != eZ && eZ.render_id !== eW ? eZ : null,
        eJ = null == eI && null == eN ? eY : null,
        e1 = i.useCallback(() => {
            null != eY && eX(eY.render_id);
        }, [eY]),
        [e4, e5] = i.useState(null),
        e9 = eI?.id ?? eN?.id ?? eJ?.render_id ?? ez?.id,
        e8 = null != ey || null != eN || null != eY || null != eG;
    i.useLayoutEffect(() => {
        let e = I.current?.getScrollerNode(),
            t = e4?.firstElementChild;
        if (null == e4 || null == e || !(0, e0.vq)(t, HTMLElement) || null == e9) return;
        function n() {
            M.current && I.current?.scrollToBottom();
        }
        let l = new ResizeObserver(() => {
            let l = e.getBoundingClientRect().bottom - e4.getBoundingClientRect().top - t.offsetTop;
            (e.style.setProperty("--custom-conjure-docked-card-inset", `${Math.max(0, Math.round(l))}px`), n());
        });
        return (
            l.observe(t),
            l.observe(e, { box: "border-box" }),
            () => {
                (l.disconnect(), e.style.removeProperty("--custom-conjure-docked-card-inset"), n());
            }
        );
    }, [e4, e9, I, M]);
    let e6 = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: (0, c.bG)([rl.A], () => rl.A.hasLoadedHistory(f), [f]),
            historyUnavailable: (0, c.bG)([rl.A], () => rl.A.isHistoryUnavailable(f), [f]),
            connState: y,
        }),
        te = !(0, tV.i_)(b),
        tt = "loading" === e6 && te,
        tn = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < f.length; t++) e = (31 * e + f.charCodeAt(t)) % 0x7fffffff;
            return cw[e % cw.length];
        }, [f]),
        tl = ex ? T.intl.string(R.default.Zc7gML) : "greeting" === e6 && te ? tn : null,
        ta = i.useMemo(() => {
            for (let e = b.length - 1; e >= 0; e--) {
                let t = b[e];
                if ("assistant" === t.role && !(0, tV.BL)(t)) return t;
            }
        }, [b]),
        ti = null != ta,
        ts = i.useMemo(() => b.filter((e) => "user" === e.role && "queued" === e.disposition), [b]),
        tu = null != ta ? (0, rx.S)(ta) : void 0,
        to = ex && eg ? ef : void 0,
        tc = i.useCallback(() => (0, nf.RQ)(f, T.intl.string(R.default.EMgIuY)), [f]),
        [td, tm] = i.useState(null),
        [tf, th] = i.useState(ti);
    (tf !== ti && (th(ti), ti || tm(null)),
        i.useEffect(() => {
            if (!ti) return;
            let e = I.current?.getScrollerNode(),
                t = e?.querySelector('[data-conjure-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let n = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? tm(null)
                        : tm(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (n.observe(t), () => n.disconnect());
        }, [ti, ta?.steps, q]));
    let tg = q ? td : "bottom",
        tp = i.useMemo(() => (null != ta ? (0, tX.b9)(ta.steps) : ""), [ta]),
        tx = i.useMemo(() => (null != ta ? ((0, tH.lt)(ta.steps) ?? ta.todos) : void 0), [ta]),
        tv = ta?.provisionalTodo,
        tj = null != ta && tW(ta),
        tb = i.useMemo(() => {
            var e;
            return null != ta ? ((e = ta.steps), rq((0, tH.Jf)(e, !0).tasks)) : void 0;
        }, [ta]);
    return (0, a.jsxs)("section", {
        ref: N,
        "data-conjure-chat": !0,
        className: ck.TE,
        children: [
            eg
                ? (0, a.jsx)(tB.A, {
                      title: T.intl.string(R.default.gy7byi),
                      description: T.intl.string(R.default["dkv/WO"]),
                      icons: cy.ir,
                      onDrop: em,
                  })
                : null,
            (0, a.jsx)(ni, {
                onJumpToActivity: U,
                line: tp,
                placement: ti && "top" === tg ? "top" : null,
                todos: tx,
                todosLive: tj,
                provisionalTodo: tv,
                agents: tb,
            }),
            (0, a.jsxs)("div", {
                className: ck.JX,
                children: [
                    (0, a.jsx)(tG.Ch, {
                        ref: I,
                        onScroll: B,
                        scrollbarGutter: tt ? "both-edges" : "stable",
                        className: [ck.N$, L ? null : ck.hB, eV ? ck.J9 : null].filter(Boolean).join(" "),
                        children: (0, a.jsx)(rv.Fu.Provider, {
                            value: f,
                            children: (0, a.jsx)(o7, {
                                projectId: f,
                                messages: b,
                                emptyState: e6,
                                floatingSettingsMessageId: eG?.id,
                                floatingSecretRenderId: eJ?.render_id,
                                liveClarificationId: eI?.id,
                                onPickIdea: eg ? ea : void 0,
                                onAskForIdeas: eg ? eu : void 0,
                                draftHasText: ei,
                                onApprovePlan: eg ? tc : void 0,
                                onRestoreVersion: eh || ti ? void 0 : g,
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
                        className: ck.NJ,
                        children: (0, a.jsx)(cb, {
                            projectId: f,
                            thinking: ti,
                            turnStartedAt: tu,
                            restoring: eh,
                            remixStartedAt: et,
                            recalling: tt,
                            thinkingActivity: w,
                            compacting: S,
                            saving: A,
                            projectUsage: k,
                            connState: y,
                            queued: ts,
                        }),
                    }),
                    null == eI
                        ? null
                        : (0, a.jsx)("div", {
                              ref: e5,
                              className: eV ? `${ck.B5} ${ck.J9}` : ck.B5,
                              children: (0, a.jsx)(
                                  lR,
                                  { projectId: f, clarification: eI, onSubmit: eg ? eo : void 0, onDismiss: ek },
                                  eI.id,
                              ),
                          }),
                    null == eN
                        ? null
                        : (0, a.jsx)("div", {
                              ref: e5,
                              className: ck.B5,
                              children: (0, a.jsx)(
                                  nk,
                                  { projectId: f, request: eN, canSend: eg, onDismiss: eT, onSent: eE ? eP : void 0 },
                                  eN.id,
                              ),
                          }),
                    eJ?.secretRequest == null
                        ? null
                        : (0, a.jsx)("div", {
                              ref: e5,
                              className: ck.B5,
                              children: (0, a.jsx)(
                                  rt,
                                  {
                                      projectId: f,
                                      cardId: eJ.render_id,
                                      request: eJ.secretRequest,
                                      status: "open",
                                      onDismiss: e1,
                                  },
                                  eJ.render_id,
                              ),
                          }),
                    null == eB
                        ? null
                        : (0, a.jsx)("div", {
                              ref: null == eI && null == eN ? e5 : void 0,
                              className: ck.B5,
                              children: (0, a.jsx)(
                                  rf,
                                  { askId: ez?.id, projectId: f, request: eB, onDismiss: eK },
                                  ez?.id,
                              ),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: ck.Jx,
                children: [
                    (0, a.jsx)(ni, {
                        onJumpToActivity: U,
                        line: tp,
                        placement: ti && "bottom" === tg ? "bottom" : null,
                        todos: tx,
                        todosLive: tj,
                        provisionalTodo: tv,
                        agents: tb,
                    }),
                    0 === V.annotations.length
                        ? null
                        : (0, a.jsxs)("div", {
                              className: ck.g0,
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
                    null == ee ? null : (0, a.jsx)(lJ, { pending: ee }, ee.publishTurnId),
                    null == J
                        ? null
                        : (0, a.jsx)("div", {
                              className: ck.qB,
                              children: (0, a.jsx)(tz.w, {
                                  type: "critical",
                                  role: "alert",
                                  message: J.message,
                                  action: J.retry,
                              }),
                          }),
                    null == W
                        ? null
                        : (0, a.jsxs)("div", {
                              className: ck.Db,
                              children: [
                                  (0, a.jsx)(tz.w, { type: "warning", role: "status", message: W.message }),
                                  (0, a.jsx)("div", {
                                      className: ck.jU,
                                      children: (0, a.jsx)(e3.m, {
                                          text: T.intl.string(T.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, a.jsx)(tr.K, {
                                              "aria-label": T.intl.string(T.t.WAI6xu),
                                              icon: tU.XSmallIcon,
                                              variant: "color-mix",
                                              size: "md",
                                              onClick: W.onDismiss,
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                    null == Y
                        ? null
                        : (0, a.jsx)("div", {
                              className: ck.qB,
                              children: (0, a.jsx)(tz.w, {
                                  type: Y.blocked ? "critical" : "warning",
                                  role: Y.blocked ? "alert" : "status",
                                  message: Y.message,
                              }),
                          }),
                    (0, a.jsx)(s9, {
                        projectId: f,
                        escapeScopeRef: x,
                        canSend: eg,
                        running: ti,
                        restoring: eh,
                        onSend: el,
                        hasPendingContext: V.annotations.length > 0,
                        onInterrupt: eg ? er : void 0,
                        onUploadFile: ed,
                        onImport: p,
                        onSendToOtherProjects: e8 ? void 0 : eA.open,
                        onApprove: to,
                        suggestion: tl,
                        questionOpen: e8,
                        secretPending: null != eJ,
                        modelSettings: C,
                        onModelSettingsChange: ec,
                        onDraftHasTextChange: es,
                        aiPaused: Y?.blocked === !0,
                        visible: v,
                    }),
                ],
            }),
        ],
    });
}
var cA = n(761508),
    cC = n(58736),
    cN = n(209695),
    cI = n(207438),
    cE = n(683438),
    c_ = n(721507);
function cM(e, t) {
    return String(e).padStart(t, "0");
}
function cR(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let n = Date.parse(e);
    if (Number.isNaN(n)) return null;
    let l = new Date(n),
        r = `${cM(l.getHours(), 2)}:${cM(l.getMinutes(), 2)}:${cM(l.getSeconds(), 2)}`;
    return "millis" === t ? `${r}.${cM(l.getMilliseconds(), 3)}` : r;
}
var cT = n(667931);
let cP = {
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
    cL = { running: "Running", ok: "Done", error: "Failed" };
function c$(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function cD(e) {
    var t;
    return (t = Math.round(e)) < 1e3 ? `${t}ms` : `${(t / 1e3).toFixed(1)}s`;
}
function cq(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function cF(e) {
    return cD(e.count > 1 ? e.totalMs : e.end - e.start);
}
let cO = ["Arguments", "Result", "Usage", "Details"];
function cG(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function cz(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function cU(e) {
    let t = (0, cT.bM)(e)?.end;
    return null != t ? `${(t / 1e3).toFixed(2)}s` : (0, cT.lp)(e) ? "interrupted" : "still running";
}
function cB(e) {
    return [cR(new Date(e.started_at).toISOString()) ?? "", cq(e.spans.length), (0, cT.Sj)((0, cT.bM)(e)?.attrs)]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function cK(e) {
    let t = (0, cT.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let r of e.spans) {
        let { service: e, category: a } = (0, cT.N5)(r);
        (n.set(a, (n.get(a) ?? 0) + (t.get(r.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += cH(r, "in")),
                (l.output += cH(r, "out")),
                (l.cacheRead += cH(r, "cache_read")),
                (l.cacheWrite += cH(r, "cache_write")),
                (l.costUsd += cH(r, "cost_usd"))));
    }
    let r = cT.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: r, busyMs: r.reduce((e, t) => e + t.ms, 0), model: l };
}
function cH(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
var cV = n(738188),
    cW = n(430993),
    cX = n(364840),
    cQ = n(224640),
    cZ = n(20742);
let cY = { collapsed: new Set(), revealed: new Set() };
var cJ = n(872892);
let c0 = {
    op: cJ.Q,
    model: cJ.i3,
    tool: cJ.dH,
    setup: cJ.kc,
    worktree: cJ.Qx,
    sandbox: cJ.QH,
    build: cJ.F1,
    platform: cJ.Op,
    other: cJ.fv,
};
function c1(e) {
    let { stats: t } = e,
        n = (function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      cq(t.calls, "model call"),
                      `${c$(t.input)} in`,
                      `${c$(t.output)} out`,
                      `${c$(t.cacheRead)} cache read`,
                      `${c$(t.cacheWrite)} cache write`,
                      cz(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, a.jsxs)("div", {
        className: cJ.M1,
        children: [
            (0, a.jsx)("div", {
                className: cJ.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, a.jsx)(
                              "div",
                              {
                                  className: `${cJ.DJ} ${c0[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, a.jsx)("div", {
                className: cJ.o1,
                children: cT.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${cD(n)}`;
                    return (0, a.jsxs)(
                        "span",
                        {
                            className: cJ.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${cJ.nf} ${c0[e]}` }),
                                (0, a.jsx)(j.E, { variant: "body-xs/normal", color: "text-muted", children: cP[e] }),
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
function c2(e) {
    return `conjure-perf-trace-${e}`;
}
function c3(e) {
    let { start: t, end: n, extent: l, barClass: r, duration: i } = e,
        s = (t / l) * 100,
        u = ((n - t) / l) * 100;
    return (0, a.jsxs)("div", {
        className: cJ.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(u) },
        children: [
            (0, a.jsx)("div", { className: r }),
            (0, a.jsx)(j.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${cJ.p0} ${s + u > 85 ? cJ.EU : cJ.jh}`,
                children: i,
            }),
        ],
    });
}
function c4(e) {
    let { node: t, extent: n, collapsed: l, selected: r, onSelect: s, onToggle: u, onExpandSubtree: o } = e,
        c = t.children.length > 0,
        d = l ? t1.ChevronSmallRightIcon : eA.ChevronSmallDownIcon,
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
    return (0, a.jsxs)(tQ.D, {
        tag: "div",
        role: "treeitem",
        id: c2(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !l : void 0,
        "aria-selected": r,
        className: `${cJ.$y} ${r ? cJ.wQ : ""}`,
        onClick: m,
        children: [
            (0, a.jsxs)("div", {
                className: cJ.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, a.jsx)(tQ.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: cJ.ai,
                              onClick: f,
                              children: (0, a.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, a.jsx)("span", { className: cJ.YJ }),
                    (0, a.jsx)(j.E, {
                        variant: "body-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: cJ.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, a.jsx)("span", { className: `${cJ.nf} ${c0[t.category]}` }),
                    (0, a.jsx)(j.E, {
                        variant: "body-sm/semibold",
                        color: "text-strong",
                        className: cJ.eu,
                        children: t.service,
                    }),
                    (0, a.jsx)(j.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        className: cJ.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, a.jsx)(j.E, {
                              variant: "body-xs/semibold",
                              color: "text-default",
                              className: cJ.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, a.jsx)(cV.WarningIcon, { size: "xs", color: "currentColor", className: cJ.ik })
                        : null,
                ],
            }),
            (0, a.jsx)(c3, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${cJ.M0} ${cJ.Nh}`
                    : t.running
                      ? `${cJ.M0} ${cJ.rF}`
                      : `${cJ.M0} ${c0[t.category]}`,
                duration: cF(t),
            }),
        ],
    });
}
function c5(e) {
    let { row: t, extent: n, selected: l, onReveal: r } = e;
    return (0, a.jsxs)(tQ.D, {
        tag: "div",
        role: "treeitem",
        id: c2(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": l,
        className: `${cJ.$y} ${l ? cJ.wQ : ""}`,
        onClick: () => r(t.parentKey),
        children: [
            (0, a.jsxs)("div", {
                className: cJ.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, a.jsx)("span", {
                        className: cJ.ai,
                        children: (0, a.jsx)(t1.ChevronSmallRightIcon, { size: "xs", color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", { className: cJ.U9 }),
                    (0, a.jsx)("span", { className: `${cJ.nf} ${cJ.dL}` }),
                    (0, a.jsx)(j.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        className: cJ.MQ,
                        children: cq(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, a.jsx)(c3, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${cJ.M0} ${cJ.ab} ${cJ.dL}`,
                duration: cD(t.totalMs),
            }),
        ],
    });
}
function c7(e) {
    let { node: t } = e;
    return null == t
        ? (0, a.jsx)(j.E, {
              variant: "body-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, a.jsxs)("div", {
              className: cJ._0,
              children: [
                  (0, a.jsxs)("div", {
                      className: cJ.TQ,
                      children: [
                          (0, a.jsx)("span", { className: `${cJ.nf} ${c0[t.category]}` }),
                          (0, a.jsx)(j.E, { variant: "body-sm/semibold", color: "text-strong", children: t.service }),
                          (0, a.jsx)(j.E, { variant: "body-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [cG("Start", `+${cD(e.start)}`), cG("Duration", cF(e))];
                      e.count > 1
                          ? t.push(
                                cG("Calls", String(e.count)),
                                cG("Longest call", cD(e.maxMs)),
                                cG("Spread over", cD(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(cG("Self time", cD(e.selfMs)));
                      let n = e.span.waits_on;
                      null != n && t.push(cG("Waited on", `${n.span_name} in ${n.trace_name}`));
                      let l = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      (l.length > 0 && t.push(cG("Notes", l.join(", "))),
                          null != e.span.error && t.push(cG("Error", e.span.error)));
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
                              s = "cost_usd" === t ? cz(Number(n)) : String(n);
                          r.set(l, [...(r.get(l) ?? []), cG(t.replace(/_/g, " "), s)]);
                      }
                      return [
                          { title: null, rows: t },
                          ...cO.flatMap((e) => {
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
                                            className: cJ.xd,
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
                                                            className: cJ.vl,
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
function c9(e) {
    let { trace: t } = e,
        n = i.useMemo(() => cK(t), [t]);
    return (0, a.jsx)(c1, { stats: n });
}
function c8(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = i.useMemo(() => (null == e ? null : (0, cT.TK)(e)), [e]),
                [n, l] = i.useState(() => (null == t ? cY : (0, cT.hB)(t))),
                [r, a] = i.useState(null),
                s = i.useRef(null == t ? new Set() : (0, cT.x7)(t));
            i.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, cT.x7)(t)), l((n) => (0, cT._0)(n, t, e)));
            }, [t]);
            let u = i.useMemo(() => (null == t ? [] : (0, cT.wu)(t, n)), [t, n]),
                o = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, cT.IE)(t, e);
                        null != n && l((e) => (0, cT.TN)(e, n));
                    },
                    [t],
                ),
                c = i.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, cT.IE)(t, e);
                        null != n && l((e) => (0, cT.H$)(e, n));
                    },
                    [t],
                ),
                m = i.useCallback(() => {
                    null != t && l((0, cT.vH)(t));
                }, [t]),
                f = i.useCallback(() => {
                    null != t && l((0, cT.rQ)(t));
                }, [t]),
                h = i.useCallback(() => {
                    null != t && l((0, cT.hB)(t));
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
        h = (0, cT.dj)(t),
        g = i.useMemo(() => (0, cT.nF)(h), [h]),
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
                    null != t && (o(t.key), document.getElementById(c2(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [r, f, d, l, o, u, c],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(cW.c, {
                children: [
                    (0, a.jsxs)("div", {
                        className: cJ.z,
                        children: [
                            (0, a.jsx)(j.E, {
                                variant: "body-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: cU(t),
                            }),
                            (0, a.jsx)(j.E, {
                                variant: "body-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: cB(t),
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
                                      children: `${cq(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, a.jsx)(c9, { trace: t }),
                    (0, a.jsxs)("div", {
                        className: cJ.KE,
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
                        "aria-activedescendant": null == u ? void 0 : c2(u),
                        className: cJ.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(p) },
                        onKeyDown: x,
                        children: [
                            (0, a.jsxs)("div", {
                                className: cJ.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: cJ.So,
                                        children: (0, a.jsx)(j.E, {
                                            variant: "body-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: cJ.c1,
                                        children: g.map((e) =>
                                            (0, a.jsx)(
                                                j.E,
                                                {
                                                    variant: "body-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${cJ.io} ${(e / h) * 100 > 85 ? cJ.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / h) * 100),
                                                    },
                                                    children: 0 === e ? "0" : cD(e),
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
                                          c4,
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
                                    : (0, a.jsx)(c5, { row: e, extent: h, selected: e.key === u, onReveal: d }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(cX.j, { children: (0, a.jsx)(c7, { node: s }) }),
        ],
    });
}
function c6(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: r } = e,
        i = (0, c.bG)([oF.A], () => oF.A.getTimingTrace(l, r), [l, r]),
        s = i?.name ?? "Perf Trace";
    return (0, a.jsxs)(cQ.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, a.jsx)(cZ.rQ, { title: s }),
            null == i
                ? (0, a.jsx)(cW.c, {
                      children: (0, a.jsx)(j.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, a.jsx)(c8, { trace: i }),
        ],
    });
}
let de = { running: cJ.Vf, ok: cJ.mo, error: cJ.Sr };
function dt(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", { className: `${cJ.Om} ${de[t]}`, role: "img", "aria-label": cL[t] });
}
function dn(e, t) {
    (0, K.qf)((n) => (0, a.jsx)(c6, { ...n, projectId: e, traceId: t }));
}
function dl(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        r = i.useCallback(() => dn(t, n.id), [t, n.id]);
    return (0, a.jsxs)(tQ.D, {
        className: cJ.nM,
        onClick: r,
        children: [
            (0, a.jsxs)("div", {
                className: cJ.sU,
                children: [
                    (0, a.jsx)(dt, { status: (0, cT.lQ)(n) }),
                    (0, a.jsx)(j.E, {
                        variant: "body-sm/semibold",
                        color: "text-default",
                        className: cJ._k,
                        children: n.name,
                    }),
                    (0, a.jsx)(j.E, {
                        variant: "body-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: cU(n),
                    }),
                ],
            }),
            (0, a.jsx)(j.E, { variant: "body-xs/normal", color: "text-muted", tabularNumbers: !0, children: cB(n) }),
            null == l
                ? null
                : (0, a.jsx)(j.E, { variant: "body-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function dr(e) {
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
            (0, c_.o)(new Blob([e], { type: "application/json" }), `conjure-traces-${t}.json`).catch((e) => {
                console.error("[conjure] trace export failed", t, e);
            });
        }, [t, n]);
    return (0, a.jsx)(ey.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: ey.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, a.jsx)(ek.W, {
                "data-menu-migrated": !0,
                navId: `conjure-traces-${t}`,
                "aria-label": "Trace actions",
                onClose: l,
                onSelect: l,
                children: (0, a.jsx)(ew.rX, {
                    children: (0, a.jsx)(ew.Dr, {
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
            return (0, a.jsx)(tr.K, {
                ...e,
                buttonRef: l,
                icon: a6.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "More",
                "aria-haspopup": "menu",
                "aria-expanded": n,
            });
        },
    });
}
function da(e) {
    let { projectId: t } = e,
        n = (0, c.yK)([oF.A], () => oF.A.getTimingTraces(t), [t]),
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
                    let t = e.map(cK);
                    function n(e) {
                        return t.reduce((t, n) => t + e(n), 0);
                    }
                    return {
                        categories: cT.BF.map((e) => ({
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
              className: cJ.Ie,
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
              className: cJ.nd,
              children: [
                  (0, a.jsxs)("div", {
                      className: cJ.Ko,
                      children: [
                          (0, a.jsx)("div", {
                              className: cJ.fH,
                              children: (0, a.jsx)(cE.I, {
                                  query: l,
                                  onChange: r,
                                  onClear: () => r(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, a.jsx)(dr, { projectId: t, traces: s }),
                      ],
                  }),
                  (0, a.jsxs)(tG.Ch, {
                      className: cJ.XG,
                      children: [
                          (0, a.jsx)(c1, { stats: o }),
                          0 === u.length
                              ? (0, a.jsx)(j.E, {
                                    variant: "body-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, a.jsx)("ul", {
                                    className: cJ.p_,
                                    "aria-label": "Traces",
                                    children: u.map((e) =>
                                        (0, a.jsx)(
                                            "li",
                                            { children: (0, a.jsx)(dl, { projectId: t, trace: e }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function di(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function ds(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function du(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function dc(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function dd(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function dm(e) {
    return T.intl.string("preview" === e ? R.default["2yLYlG"] : R.default.eiAi57);
}
let df = ["all", "preview", "stable", "web"];
function dh(e) {
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
function dg(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : T.intl.formatToPlainString(R.default["XO/bN4"], {
              p50: di(e.memory_p50_bytes ?? 0),
              p999: di(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let dp = {
    db: () => R.default["7l+DFG"],
    db_preview: () => R.default.FAuffi,
    runtime: () => R.default["Gkl+ab"],
    runtime_preview: () => R.default.ynpJzv,
    bot: () => R.default["5/i0cj"],
    bot_preview: () => R.default.m2jsnw,
};
var dx = n(911608),
    dv = n(177427);
function dj(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: dv.KE,
        children: [
            (0, a.jsx)("div", {
                className: dv.IQ,
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
                                  children: T.intl.formatToPlainString(R.default.INVO50, { time: dc(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(m.$, { variant: "secondary", size: "sm", text: T.intl.string(R.default.oKEgiu), onClick: l }),
        ],
    });
}
function db(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: dv.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(j.E, { variant: "body-xs/semibold", color: "text-muted", className: dv.Gf, children: t }),
            n,
        ],
    });
}
function dy(e) {
    let { label: t, value: n, hint: l, critical: r = !1, icon: i, state: s } = e;
    return (0, a.jsxs)("div", {
        className: dv.N8,
        children: [
            (0, a.jsxs)("div", {
                className: dv.x7,
                children: [
                    (0, a.jsxs)("span", {
                        className: dv.kS,
                        children: [i, (0, a.jsx)(j.E, { variant: "body-sm/normal", color: "text-muted", children: t })],
                    }),
                    (0, a.jsxs)("span", {
                        className: dv.kS,
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
function dk(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        i = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = i >= 0.9;
    return (0, a.jsxs)("div", {
        className: dv.N8,
        children: [
            (0, a.jsxs)("div", {
                className: dv.x7,
                children: [
                    (0, a.jsx)(j.E, { variant: "body-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(j.E, {
                        variant: "body-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, a.jsx)(dx.z, {
                value: 100 * i,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? dv.dh : void 0,
            }),
        ],
    });
}
function dw(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, a.jsx)(dy, {
            label: T.intl.string(R.default.SXP7pD),
            value: T.intl.string(R.default.E5hKVi),
            hint: dh(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, a.jsx)(dy, {
            label: T.intl.string(R.default.SXP7pD),
            value: "\u2014",
            hint: T.intl.string(R.default.AGvoMJ),
        });
    let l = dg(n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(dy, { label: T.intl.string(R.default["H/X+FI"]), value: ds(n.cpu_ms) }),
            null != l && (0, a.jsx)(dy, { label: T.intl.string(R.default.lmFmMO), value: l }),
        ],
    });
}
function dS(e) {
    let { analytics: t } = e,
        n = T.intl.string(R.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, a.jsx)(db, {
            title: n,
            children: (0, a.jsx)(j.E, { variant: "body-sm/normal", color: "text-muted", children: dh(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? dp[t] : null) ? T.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, a.jsx)(db, {
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
                          dy,
                          {
                              label: n,
                              value: T.intl.formatToPlainString(R.default["w/2voO"], { cpu: ds(t.cpu_ms) }),
                              hint: dg(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var dA = n(678708),
    dC = n(414499),
    dN = n(714800),
    dI = n(81466),
    dE = n(424383),
    d_ = n(664121),
    dM = n(816943),
    dR = n(268791),
    dT = n(514042),
    dP = n(872351),
    dL = n(708988),
    d$ = n(150934),
    dD = n(417270);
let dq = "Restart Agent",
    dF = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
function dO(e) {
    return null != e && "" !== e ? e.slice(0, 12) : "None";
}
function dG(e, t) {
    return { label: e, value: null != t && "" !== t ? dc(t) : "Unknown", icon: "calendar" };
}
function dz(e) {
    for (let [t, n] of [
        ["GB", 1e9],
        ["MB", 1e6],
        ["KB", 1e3],
    ])
        if (e >= n) return `${Number((e / n).toFixed(1))} ${t}`;
    return `${e} B`;
}
function dU(e, t, n, l) {
    let [r, a] = dF[n.status];
    return { label: e, value: `${dz(n.bytes)} of ${dz(n.max)} \xb7 ${r}`, hint: l, icon: t, state: a };
}
function dB(e) {
    if (null == e) return { label: "Last Save", value: "None since this agent instance started", icon: "save" };
    let t = dc(e.at);
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
let dK = { main: "Main vs Remote", wip: "WIP vs Remote" };
function dH(e) {
    let t = `container ${dO(e.local)} \xb7 remote ${dO(e.remote)}`,
        n = e.ahead ?? 0,
        l = e.behind ?? 0,
        r = { label: dK[e.ref], icon: "remote", hint: t };
    switch (e.state) {
        case "in_sync":
            return { ...r, value: "In Sync", state: "ok" };
        case "ahead":
            return { ...r, value: `${du(n)} Ahead`, hint: `${t} \xb7 not pushed yet`, state: "ahead" };
        case "behind":
            return { ...r, value: `${du(l)} Behind`, state: "behind" };
        case "diverged":
            return { ...r, value: `Diverged (${du(n)} Ahead, ${du(l)} Behind)`, state: "error" };
        case "not_fetched":
            return { ...r, value: "Behind", hint: `${t} \xb7 the remote head isn't in the container`, state: "behind" };
        case "missing_remote":
            return { ...r, value: "Missing on Remote", state: "error" };
        case "missing_local":
            return { ...r, value: "Missing in Container", state: "warning" };
    }
}
let dV = ["main", "wip"];
var dW = n(400154);
let dX = {
        checkout: dA.FolderIcon,
        edit: h.PencilIcon,
        remote: dC.CloudIcon,
        commits: dN.ListNumberedIcon,
        calendar: dI.CalendarIcon,
        save: dE.SaveIcon,
        objects: d_.ServerIcon,
        download: dM.CloudDownloadIcon,
        size: dR.SpeedometerIcon,
        file: dT.FileIcon,
    },
    dQ = {
        ok: [l5.CircleCheckIcon, td.A.colors.ICON_FEEDBACK_POSITIVE],
        warning: [cV.WarningIcon, td.A.colors.ICON_FEEDBACK_WARNING],
        error: [sx.CircleXIcon, td.A.colors.ICON_FEEDBACK_CRITICAL],
        ahead: [dP.ArrowSmallUpIcon, td.A.colors.ICON_MUTED],
        behind: [dL.ArrowSmallDownIcon, td.A.colors.ICON_MUTED],
    };
function dZ(e) {
    let { projectId: t } = e,
        { state: n } = {
            state: (0, c.bG)([oF.A], () => oF.A.getGitInfoState(t), [t]),
            load: i.useCallback(() => (0, cI.DK)(t), [t]),
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
                    `Updated ${dc(r)}`,
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
    return (0, a.jsxs)(db, {
        title: "Git",
        children: [
            (0, a.jsx)("div", {
                className: dW.Lj,
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
                    if (!e.running || null != e.localError) return [dB(e.lastSave)];
                    if (!e.checkout)
                        return [
                            { label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" },
                            dB(e.lastSave),
                        ];
                    let l = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
                    void 0 !== e.dirtyFiles &&
                        l.push({
                            label: "Uncommitted Files",
                            value: null == e.dirtyFiles ? "Unknown" : du(e.dirtyFiles),
                            hint: null == e.dirtyFiles ? "git status didn't finish in time." : void 0,
                            icon: "edit",
                        });
                    let r = dV.flatMap((t) => e.comparisons?.find((e) => e.ref === t) ?? []);
                    (r.length > 0
                        ? l.push(...r.map(dH))
                        : l.push(
                              { label: "Main", value: dO(e.heads.main), icon: "remote" },
                              { label: "WIP", value: dO(e.heads.wip), icon: "remote" },
                          ),
                        l.push(
                            { label: "Commits", value: null != e.commits ? du(e.commits) : "Unknown", icon: "commits" },
                            dG("Oldest Commit", e.oldest),
                            dG("Newest Commit", e.newest),
                            dB(e.lastSave),
                        ),
                        null != e.objects &&
                            l.push(
                                ((n = 1 === (t = e.objects).packs ? "1 pack" : `${du(t.packs)} packs`),
                                {
                                    label: "Objects",
                                    value: `${du(t.loose)} loose (${di(t.looseBytes)}) \xb7 ${du(t.packed)} packed in ${n} (${di(t.packBytes)})`,
                                    hint: t.garbage > 0 ? `${du(t.garbage)} garbage files` : void 0,
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
                                      value: `Yes \xb7 ${du(e.missingObjects)} not downloaded`,
                                      hint: "Fetched on demand; this read never fetches.",
                                  }
                            : { ...t, value: "No" };
                    })(e);
                    return (
                        null != a && l.push(a),
                        null != e.localBytes &&
                            l.push(
                                dU(
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
                                  dU("Largest File", "file", e.largestFile, "Largest file version in the local copy."),
                              ),
                        l
                    );
                })(n.info).map((e) => {
                    let { label: t, value: n, hint: l, icon: r, state: i } = e,
                        s = dX[r],
                        [u, o] = null != i ? dQ[i] : [null, void 0];
                    return (0, a.jsx)(
                        dy,
                        {
                            label: t,
                            value: n,
                            hint: l,
                            critical: "error" === i,
                            icon: (0, a.jsx)(s, { size: "xs", color: td.A.colors.ICON_MUTED }),
                            state: null != u ? (0, a.jsx)(u, { size: "xs", color: o }) : void 0,
                        },
                        t,
                    );
                }),
        ],
    });
}
function dY(e) {
    let { projectId: t } = e,
        {
            state: n,
            busy: l,
            clearAlarm: r,
            setClearAlarm: s,
            confirmCopy: u,
            restart: o,
        } = (function (e) {
            let t = (0, c.bG)([oF.A], () => oF.A.getRestartAgentState(e), [e]),
                [n, l] = i.useState(!1),
                r = "restarting" === t.phase ? t.startedAt : null,
                a = "restarted" === t.phase ? t.instanceSince : null,
                s = i.useRef(a);
            (i.useEffect(() => {
                null != a && a !== s.current && ((s.current = a), (0, cI.DK)(e));
            }, [e, a]),
                i.useEffect(() => {
                    if (null == r) return;
                    function t() {
                        let t = oF.A.getInstancePollRequestedAt(e);
                        (null != t && Date.now() - t < 1e4) || (0, cI.gX)(e);
                    }
                    t();
                    let n = setInterval(t, 2e3),
                        l = setTimeout(
                            () =>
                                u2.h.dispatch({
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
            let u = i.useCallback(() => (0, cI.VW)(e, n), [e, n]);
            return {
                state: t,
                busy: "pending" === t.phase || "restarting" === t.phase,
                clearAlarm: n,
                setClearAlarm: l,
                confirmCopy: {
                    title: "Restart Agent?",
                    body: `Ends this project's agent instance; the next request starts a new one. Lost: in-memory state and any running turn. Kept: saved data (conversation, settings, storage) and the container disk. ${n ? "The pending alarm is cleared, so scheduled wakeups wait until something sets it again." : "The pending alarm is kept."}`,
                    confirm: dq,
                },
                restart: u,
            };
        })(t),
        d = i.useCallback(() => {
            (0, E.A)({ title: u.title, subtitle: u.body, confirmText: u.confirm, variant: "critical", onConfirm: o });
        }, [u, o]);
    return (0, a.jsxs)("div", {
        className: dW.Lj,
        children: [
            (0, a.jsxs)("div", {
                className: dW.nM,
                children: [
                    (0, a.jsx)(d$.S, {
                        label: "Also Clear Alarm",
                        description: "Scheduled wakeups wait until something sets the alarm again.",
                        checked: r,
                        onChange: s,
                        disabled: l,
                    }),
                    (0, a.jsx)(m.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        icon: dD.RetryIcon,
                        text: dq,
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
                            return `Restarted \xb7 new instance since ${dc(e.instanceSince)}`;
                        case "failed":
                            return `Failed: ${e.reason} \xb7 ${dc(e.observedAt)}`;
                    }
                })(n),
            }),
        ],
    });
}
function dJ(e, t) {
    return (0, a.jsx)(dy, {
        label: e,
        value: T.intl.formatToPlainString(R.default.yHJxuP, { count: du((0, co.aM)(t)) }),
        hint: `${du(t.input_tokens)} in \xb7 ${du(t.output_tokens)} out \xb7 ${du(t.cache_read_input_tokens)} cache read`,
    });
}
function d0(e) {
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
            restartState: S,
            turnRunning: A,
            handleForceCompaction: C,
            handleForceCompactionOverride: N,
            handleRestartWorkspace: I,
            lifetime: E,
            limits: _,
            session: M,
            contextCeiling: P,
        } = ((t = (0, c.bG)([oF.A], () => oF.A.getLastTurnUsage(g), [g])),
        (n = (0, c.bG)([oF.A], () => oF.A.getLastCompaction(g), [g])),
        (l = (0, c.bG)([oF.A], () => oF.A.getLastCompactionDecline(g), [g])),
        (r = (0, c.bG)([oF.A], () => oF.A.getForceCompactionState(g), [g])),
        (s = (0, c.bG)([oF.A], () => oF.A.getSandboxRestartState(g), [g])),
        (u = (0, c.bG)([rl.A], () => rl.A.isThinking(g), [g])),
        (o = i.useCallback(() => (0, cI.Lj)(g), [g])),
        (d = i.useCallback(() => (0, cI.Lj)(g, !0), [g])),
        (f = i.useCallback(() => (0, cI.bq)(g), [g])),
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
        className: dW.Mf,
        children: [
            (0, a.jsx)(dj, { generatedAt: p?.generated_at ?? null, fetchState: x, onRefresh: v }),
            (0, a.jsx)(db, {
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
                                  (0, a.jsx)(dy, {
                                      label: T.intl.string(R.default["9nqym2"]),
                                      value: du((0, co.a7)(E.cost_usd)),
                                      hint: T.intl.formatToPlainString(R.default.NCdUIh, { count: du(E.turns) }),
                                  }),
                                  dJ(T.intl.string(R.default.xtxP0e), E.orchestrator),
                                  dJ(T.intl.string(R.default["9Sj3SX"]), E.codegen),
                                  dJ(T.intl.string(R.default.ANCEo3), (0, co.wU)(E.compaction)),
                                  p?.agent?.outcomes != null &&
                                      Object.keys(p.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(dy, {
                                          label: T.intl.string(R.default.SQHm7C),
                                          value: Object.entries(p.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${du(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, a.jsx)(db, {
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
                                  dJ(T.intl.string(R.default["7X3i9d"]), b.total),
                                  (0, a.jsx)(dy, {
                                      label: T.intl.string(R.default["8OUg09"]),
                                      value: `${Math.round((b.cache_hit_rate ?? (0, co.CA)(b.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(db, {
                title: T.intl.string(R.default.NbRk9a),
                children: [
                    null != y && null != P
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(dk, {
                                      label: T.intl.string(R.default.Kw5wiQ),
                                      used: y.tokensAfter,
                                      max: P,
                                      formatValue: du,
                                  }),
                                  (0, a.jsx)(dy, {
                                      label: T.intl.string(R.default.mRbSns),
                                      value: `${du(y.tokensBefore)} \u{2192} ${du(y.tokensAfter)}`,
                                      hint: T.intl.formatToPlainString(R.default.Vq3skS, {
                                          count: du(y.retainedMessages),
                                          time: dc(y.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(j.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children:
                                  null != P
                                      ? T.intl.formatToPlainString(R.default.GMLCNv, { ceiling: du(P) })
                                      : T.intl.string(R.default.s0U5Fv),
                          }),
                    null != k &&
                        (0, a.jsx)(dy, {
                            label: T.intl.string(R.default["4BX5KK"]),
                            value: `${du(k.projected)} / ${du(k.threshold)}`,
                            critical: !0,
                            hint: T.intl.formatToPlainString(R.default["6ngCax"], { time: dc(k.observedAt) }),
                        }),
                    (0, a.jsxs)("div", {
                        className: dW.Lj,
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
                                    let t = dc(e.observedAt);
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
                        className: dW.Lj,
                        children: [
                            (0, a.jsx)(m.$, {
                                variant: "secondary",
                                size: "sm",
                                text: T.intl.string(R.default["5qCjBu"]),
                                loading: "pending" === S,
                                disabled: "pending" === S || A,
                                onClick: I,
                            }),
                            (0, a.jsx)(j.E, {
                                variant: "body-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof S && "restarted" !== S.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return T.intl.string(R.default.mlok8D);
                                    if ("pending" === e) return T.intl.string(R.default["1ugSyK"]);
                                    let t = dc(e.observedAt);
                                    return T.intl.formatToPlainString(
                                        "restarted" === e.outcome ? R.default["76mfqO"] : R.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(S),
                            }),
                        ],
                    }),
                    (0, a.jsx)(dY, { projectId: g }),
                ],
            }),
            (0, a.jsx)(dZ, { projectId: g }),
            (null != M || p?.analytics != null) &&
                (0, a.jsxs)(db, {
                    title: T.intl.string(R.default.EsSzCS),
                    children: [
                        null != M &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(dy, {
                                        label: T.intl.string(R.default.CLXHAs),
                                        value: dc(M.instance_since),
                                        hint: T.intl.string(R.default.UCwUEX),
                                    }),
                                    (0, a.jsx)(dy, { label: T.intl.string(R.default["8V8e1Z"]), value: du(M.sockets) }),
                                    (0, a.jsx)(dy, {
                                        label: T.intl.string(R.default["4pBzYW"]),
                                        value: M.turn_inflight
                                            ? T.intl.string(R.default.Wv025I)
                                            : T.intl.string(R.default["7/lsFY"]),
                                    }),
                                    M.queued_messages > 0 &&
                                        (0, a.jsx)(dy, {
                                            label: T.intl.string(R.default["3oUYnv"]),
                                            value: du(M.queued_messages),
                                        }),
                                ],
                            }),
                        p?.analytics != null && (0, a.jsx)(dw, { analytics: p.analytics }),
                    ],
                }),
            null != _ &&
                (0, a.jsxs)(db, {
                    title: T.intl.string(R.default["LEIhp/"]),
                    children: [
                        (0, a.jsx)(dy, {
                            label: T.intl.string(R.default.IlDBN3),
                            value: du(_.max_subagent_iterations),
                        }),
                        (0, a.jsx)(dy, {
                            label: T.intl.string(R.default["ZdzKR+"]),
                            value: T.intl.formatToPlainString(R.default.yHJxuP, { count: du(_.context_window_tokens) }),
                        }),
                        (0, a.jsx)(dy, {
                            label: T.intl.string(R.default.cIhN2W),
                            value: T.intl.formatToPlainString(R.default.yHJxuP, {
                                count: du(_.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(dy, {
                            label: T.intl.string(R.default["+fOn/q"]),
                            value: du(_.max_user_message_chars),
                        }),
                        (0, a.jsx)(dy, { label: T.intl.string(R.default.kIHga0), value: du(_.max_build_attempts) }),
                        (0, a.jsx)(dy, { label: T.intl.string(R.default.Iw03yW), value: du(_.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var d1 = n(237528),
    d2 = n(629584),
    d3 = n(531893);
function d4(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: d3.ut,
              children: (0, a.jsx)(j.E, {
                  variant: "body-xs/normal",
                  color: "text-feedback-critical",
                  children: T.intl.string(R.default.h1SE6R),
              }),
          });
}
function d5(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: d3.qf,
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
              className: d3.qf,
              children: [
                  (0, a.jsx)(j.E, { variant: "body-sm/medium", color: "text-default", children: n }),
                  (0, a.jsx)(j.E, { variant: "body-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function d7(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: d3.ps,
              children: (0, a.jsx)(j.E, {
                  variant: "body-xs/normal",
                  color: "text-muted",
                  children: T.intl.string(R.default.V7Ri8H),
              }),
          })
        : null;
}
var d9 = n(109079);
let d8 = i.memo(function (e) {
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
        className: d9.vK,
        children: [
            (0, a.jsx)(j.E, {
                tag: "span",
                variant: "body-xs/normal",
                color: "text-subtle",
                className: d9.Mt,
                selectable: !0,
                children: cR(n.ts) ?? n.ts,
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
                className: d9.dm,
                children: n.level,
            }),
            (0, a.jsxs)("div", {
                className: d9.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, a.jsx)("span", { className: d9.Cq, children: (0, a.jsx)(d1.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, a.jsx)("span", {
                            className: d9.Cq,
                            title: n.build ?? void 0,
                            children: (0, a.jsx)(d1.v, { text: T.intl.string(R.default.TrC9c8), variant: "redLight" }),
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
                                  (0, a.jsxs)(tQ.D, {
                                      className: d9.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": u,
                                      "aria-label": T.intl.string(R.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          r
                                              ? (0, a.jsx)(eA.ChevronSmallDownIcon, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, a.jsx)(t1.ChevronSmallRightIcon, {
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
                                          className: d9.dF,
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
function d6(e) {
    let { projectId: t } = e,
        n = (0, c.bG)([cN.A], () => cN.A.getLogs(t), [t]),
        l = (0, c.bG)([cN.A], () => cN.A.getHistoryState(t, "logs")),
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
                df.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return dm(e);
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
        className: d9.$F,
        children: [
            (0, a.jsxs)("div", {
                className: d9.y4,
                children: [
                    (0, a.jsx)(d2.I, {
                        look: "pill",
                        "aria-label": T.intl.string(R.default.MhvyUU),
                        options: g,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: d9.KT,
                        children: (0, a.jsx)(cE.I, {
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
            n.length > 0 && (0, a.jsx)(d4, { state: l }),
            (0, a.jsxs)(tG.Ch, {
                ref: m,
                onScroll: h,
                overflow: "auto",
                className: d9.sx,
                children: [
                    (0, a.jsx)(d7, { state: l }),
                    0 === n.length
                        ? (0, a.jsx)(d5, {
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
                          : d.map((e) => (0, a.jsx)(d8, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function me(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, a.jsx)(i.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, a.jsx)(i.Fragment, { children: r("stable", l) }, "stable")),
        (0, a.jsx)(db, {
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
function mt(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(dy, {
                      label: T.intl.formatToPlainString(R.default["01ZMS4"], { env: dm(n) }),
                      value: ((t = l.connected), T.intl.string(t ? R.default.Wv025I : R.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(dy, {
                      label: T.intl.string(R.default["z1dh+F"]),
                      value: du(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${dc(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(dy, { label: T.intl.string(R.default.Iz5GnJ), value: du(l.guild_count) }),
                  (0, a.jsx)(dy, {
                      label: T.intl.string(R.default["7UqtNv"]),
                      value: du(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? T.intl.formatToPlainString(R.default.MasSly, {
                                    code: l.last_close_code,
                                    time: dc(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(dy, {
                          label: T.intl.string(R.default["x3+JXJ"]),
                          value: du(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(dy, { label: dm(n), value: T.intl.string(R.default.lTHQss) });
}
function mn(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, a.jsx)(dy, {
        label: dm(t),
        value: T.intl.formatToPlainString(R.default["Xq+wHT"], {
            requests: du(n.requests),
            failures: du(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? T.intl.formatToPlainString(R.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: dc(n.last_failure.at),
                  })
                : T.intl.formatToPlainString(R.default["7KlGT6"], { time: dc(n.since) }),
    });
}
function ml(e) {
    let { env: t, runtime: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(dy, {
                label: T.intl.formatToPlainString(R.default["92gVTm"], { env: dm(t) }),
                value: du(n.connections),
            }),
            n.schedules.map((e) =>
                (0, a.jsx)(
                    dy,
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
                                  ? T.intl.formatToPlainString(R.default.wxAWNv, { time: dc(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function mr(e) {
    let { env: t, metrics: n } = e;
    return (0, a.jsx)(dy, {
        label: dm(t),
        value: T.intl.formatToPlainString(R.default.suAOj9, { calls: du(n.calls), errors: du(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function ma(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, a.jsx)(db, {
            title: t,
            children: (0, a.jsx)(j.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children: T.intl.string(R.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        i = n.cpu_ms_total > 0;
    return (0, a.jsxs)(db, {
        title: t,
        children: [
            (0, a.jsx)(dy, {
                label: T.intl.string(R.default.xtD4Zp),
                value: du(n.requests),
                hint: T.intl.formatToPlainString(R.default["7KlGT6"], { time: dc(n.since) }),
            }),
            (0, a.jsx)(dy, { label: T.intl.string(R.default.gfRhR3), value: du(n.errors), critical: n.errors > 0 }),
            i
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(dk, {
                              label: T.intl.string(R.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: ds,
                          }),
                          (0, a.jsx)(dy, {
                              label: T.intl.string(R.default.mSKImM),
                              value: ds(r),
                              hint: T.intl.formatToPlainString(R.default.JqMU05, {
                                  total: ds(n.cpu_ms_total),
                                  wall: ds(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(dy, {
                      label: T.intl.string(R.default.LEJ5r3),
                      value: T.intl.string(R.default["2Ekb2b"]),
                      hint: T.intl.string(R.default.G0aq7i),
                  }),
            !i &&
                n.wall_ms_total > 0 &&
                (0, a.jsx)(dy, { label: T.intl.string(R.default.xvmL1D), value: ds(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, a.jsx)(dy, { label: T.intl.string(R.default["4sQYwH"]), value: du(n.exceeded_cpu), critical: !0 }),
            (0, a.jsx)(dy, {
                label: T.intl.string(R.default.bQenOy),
                value: du(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: T.intl.formatToPlainString(R.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, a.jsx)(dy, { label: T.intl.string(R.default.xgpn4Y), value: dd(n.build) }),
        ],
    });
}
function mi(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        u = r
            ? [{ key: "shared", label: T.intl.string(R.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: T.intl.string(R.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: T.intl.string(R.default.eiAi57), metrics: n },
              ];
    return (0, a.jsx)(db, {
        title: T.intl.string(R.default.mRt7MW),
        children: u.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, a.jsx)(dy, { label: n, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)(dy, {
                                  label: T.intl.formatToPlainString(R.default.u7kJJ4, { env: n }),
                                  value: di(l.r2_bytes),
                                  hint: T.intl.formatToPlainString(
                                      l.r2_truncated ? R.default.lH0oQw : R.default.m9h02S,
                                      { count: du(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, a.jsx)(dk, {
                                      label: T.intl.formatToPlainString(R.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: di,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function ms(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: dW.Mf,
        children: [
            (0, a.jsx)(dj, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(ma, {
                            title: T.intl.string(R.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(ma, {
                            title: T.intl.string(R.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(mi, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(me, {
                                title: T.intl.string(R.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(mt, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(me, {
                                title: T.intl.string(R.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(mn, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(me, {
                                title: T.intl.string(R.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(ml, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(me, {
                                title: T.intl.string(R.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(mr, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, a.jsx)(dS, { analytics: t.analytics }),
                        (0, a.jsxs)(db, {
                            title: T.intl.string(R.default.fQMpFp),
                            children: [
                                (0, a.jsx)(dy, {
                                    label: T.intl.string(R.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? dd(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(dy, {
                                    label: T.intl.string(R.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? dd(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var mu = n(592465);
function mo(e) {
    let { projectId: t, onClose: n } = e,
        l = F(),
        [r, s] = i.useState(() => (l && $?.projectId === t ? "trace" : "logs")),
        u = (0, c.bG)([oF.A], () => oF.A.getStatus(t), [t]),
        o = (0, c.bG)([oF.A], () => oF.A.getFetchState(t), [t]),
        m = i.useCallback(() => {
            ((0, cI.R7)(t), (0, cI.DK)(t));
        }, [t]);
    (i.useEffect(() => m(), [m]), i.useEffect(() => (0, eO.Rw)(t), [t]));
    let f = i.useCallback(() => {
        if (!l) return !1;
        let e = (function (e) {
            if (null == $ || $.projectId !== e) return null;
            let { traceId: t } = $;
            return (($ = null), t);
        })(t);
        return null != e && (dn(t, e), !0);
    }, [t, l]);
    (i.useEffect(() => {
        f();
    }, [f]),
        D(t, () => {
            f() && s("trace");
        }));
    let h = i.useCallback(() => {
            (0, ox.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: oF.A.getStatus(t),
                        last_turn_usage: oF.A.getLastTurnUsage(t),
                        last_compaction: oF.A.getLastCompaction(t),
                        last_compaction_decline: oF.A.getLastCompactionDecline(t),
                        timing_traces: oF.A.getTimingTraces(t),
                        logs: cN.A.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, d.P0)({ text: T.intl.string(R.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        g = T.intl.string(R.default["Q4FN+H"]);
    return (0, a.jsxs)("section", {
        className: mu.nd,
        "aria-label": g,
        children: [
            (0, a.jsxs)(cC.Ay, {
                "aria-label": g,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(cC.Ay.Icon, {
                            icon: oh.CopyIcon,
                            tooltip: T.intl.string(R.default.TkHqy2),
                            onClick: h,
                        }),
                        (0, a.jsx)(cC.Ay.Icon, { icon: tU.XSmallIcon, tooltip: T.intl.string(T.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, a.jsx)(cC.Ay.ChannelIcon, { icon: op.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(cC.Ay.Title, { children: g }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: mu.rf,
                children: [
                    (0, a.jsxs)(cA.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => s(e),
                        "aria-label": T.intl.string(R.default.RvvWIh),
                        className: mu.vR,
                        children: [
                            (0, a.jsx)(cA.V.Item, { id: "logs", children: T.intl.string(R.default["+VRYCm"]) }),
                            (0, a.jsx)(cA.V.Item, { id: "worker", children: T.intl.string(R.default["50D0FZ"]) }),
                            (0, a.jsx)(cA.V.Item, { id: "agent", children: T.intl.string(R.default.UkbTK1) }),
                            l ? (0, a.jsx)(cA.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, a.jsx)(d6, { projectId: t })
                        : "worker" === r
                          ? (0, a.jsx)(ms, { status: u, fetchState: o, onRefresh: m })
                          : "trace" === r && l
                            ? (0, a.jsx)(da, { projectId: t })
                            : (0, a.jsx)(d0, { projectId: t, status: u, fetchState: o, onRefresh: m }),
                ],
            }),
        ],
    });
}
var mc = n(365912),
    md = n(873715);
function mm(e) {
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
let mf = Object.freeze({ x: -1, y: -1 });
function mh(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = mm(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var mg = n(192888);
function mp(e, t) {
    return (0, mg.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(mh, () => ({ status: "failed" }));
}
var mx = n(108308);
let mv = { x: 25, y: 21 };
function mj(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function mb(e, t, n, l) {
    let r = mj(e, n, l);
    return { x: r.left + r.width * t.x, y: r.top + r.height * t.y };
}
function my(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function mk(e) {
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
function mw(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: s } = e,
        u = null != n && n === l ? t : null,
        { active: o, annotations: d } = (0, G.rt)(u),
        f = (0, O.Zv)(u),
        h = (0, K.Rv)(),
        g = (0, c.bG)([nC.default], () => nC.default.getCurrentUser()),
        p = g?.id ?? null,
        [x, v] = i.useState(null),
        [b, y] = i.useState(!1),
        [k, w] = i.useState(!1),
        [S, A] = i.useState(null),
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
        if (null != Z) return () => (0, nf.xJ)(Z, "design");
    }, [Z]);
    let Y = tt(r, Q);
    i.useEffect(() => {
        if (!Q || null == u) return;
        let e = !0,
            t = r();
        if (null == t) return void w(!0);
        (y(!0), w(!1));
        let n = `design-feedback-${crypto.randomUUID()}`;
        return (
            (0, md.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                (t) => {
                    if (!e) return;
                    y(!1);
                    let n = "completed" === t.status ? mk(t.response) : null;
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
        if (te(J.current, Y)) return;
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
                    (0, md.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        if ("completed" !== e.status || !el.current) return;
                        let n = mk(e.response);
                        null != n && (v(n), (0, G.F5)(u, { url: n.url, title: n.title, viewport: n.viewport }));
                        let l = new Map();
                        (e.response.results.forEach((e, n) => {
                            let r = t[n];
                            if (null == r || "locate" !== e.action || !e.ok) return;
                            let a = mm(e.element);
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
                    mp(n, t).then((t) => {
                        if (((en.current = !1), el.current)) {
                            if ("picked" !== t.status || mE(t.target, eo.current.rect, eo.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? A(null)
                                    : "unsupported" === t.status && D(!0);
                            else {
                                let e = (0, lT.Sk)(t.target);
                                (L((t) => (mI(t, e) ? t : e)),
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
            let e = setTimeout(() => U(null), mC);
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
                    ((0, nf.xJ)(u, "design"),
                    X(null),
                    (B.current = !1),
                    F({ projectId: u, target: e, anchor: t, draft: "", at: n, label: (0, lT.Sk)(e) }));
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
                    (Math.abs(e.clientX - q.at.x) > mN || Math.abs(e.clientY - q.at.y) > mN) && (B.current = !0);
                    return;
                }
                if (!es) return void A(null);
                let t = ed(e, Y);
                if ($) {
                    let e = (0, lT.CZ)(eu, t.x, t.y),
                        n = null != e && mE(e, Y, ei) ? null : e;
                    if (null != n) {
                        let e = (0, lT.Sk)(n);
                        L((t) => (mI(t, e) ? t : e));
                    }
                    A((e) => (e?.ref === n?.ref ? e : n));
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
                null != e && mp(e, mf);
            };
    }, [eg, r]);
    let ep = i.useCallback(() => {
        (N(!1), A(null), (et.current = null), (ee.current = null));
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
                if (null == S || null == Y) return;
                let t = ed(e, Y);
                ec(S, (0, lT.Hm)(S, t.x, t.y), { x: e.clientX, y: e.clientY });
            },
            [S, Y, ed, q, W, ec, ea],
        ),
        ev = i.useCallback(() => {
            null != u && (A(null), (0, I.K7)(u)?.active === !0 ? (0, I.V9)(u) : (0, G.mB)(u));
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
                e1.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        e1.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), eb.current());
        }
        function t(e) {
            let t = e.target;
            !(0, e0.vq)(t) ||
                ew.current?.contains(t) === !0 ||
                s?.current?.contains(t) === !0 ||
                (function (e) {
                    try {
                        return ((0, mc.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) ||
                ((null == ey.current || (0, I.K7)(ey.current)?.active !== !0) && ek.current());
        }
    }, [Q, s]);
    let eS = i.useCallback(
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
                    let n = null == S ? -1 : eu.findIndex((e) => e.ref === S.ref);
                    A(eu[(n + (t ? 1 : -1) + eu.length) % eu.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != S &&
                    (e.preventDefault(),
                    ec(S, lT.QU, { x: (Y?.left ?? 0) + S.rect.x * ei, y: (Y?.top ?? 0) + S.rect.y * ei }));
            },
            [u, q, W, eu, S, ec, ej, Y, ei],
        ),
        eA = i.useCallback(
            (e) => {
                null == u ||
                    null == q ||
                    (((0, lT.Ch)(q.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, eO.dv)(u, (0, lT.Q9)(q.target, q.draft), e), ea(), A(null)));
            },
            [u, q, ea],
        ),
        eC = i.useCallback((e) => (null == u ? Promise.reject(Error("no project")) : (0, e2.vX)(u, e)), [u]),
        eN = i.useCallback(() => {
            null == u ||
                null == W ||
                null == p ||
                ((0, lT.Ch)(W.draft) && ((0, G.pV)(u, p, W.id, W.draft.trim()), X({ ...W, editing: !1 })));
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
                      let { left: n, top: l } = my(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(mb(eh.target, eh.anchor, Y, ei), Y)
                : null;
    return (
        i.useEffect(() => {
            let e = r();
            if (eh?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = eh;
            mp(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [eh, r]),
        (0, eJ.createPortal)(
            (0, a.jsxs)("div", {
                ref: ew,
                className: mx.Li,
                children: [
                    (0, a.jsx)(t0.A, {
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
                                      className: mx.MT,
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
                                  null != S && null == S.marker && null == q && null == W
                                      ? (0, a.jsx)(m_, { box: mj(S, Y, ei) })
                                      : null,
                                  (0, a.jsx)("div", {
                                      ref: E,
                                      className: mx.aZ,
                                      children: (0, a.jsx)("div", {
                                          className: mx.xz,
                                          "data-shown": null != S && null == W && null == q ? "" : void 0,
                                          "data-instant": H ? "" : void 0,
                                          children: (0, a.jsxs)(j.E, {
                                              variant: "body-xs/medium",
                                              className: mx.Ux,
                                              children: [
                                                  null == P
                                                      ? null
                                                      : (0, a.jsx)("span", { className: mx.Tl, children: P.kind }),
                                                  null == P || "" === P.name
                                                      ? null
                                                      : (0, a.jsxs)("span", {
                                                            className: mx.kh,
                                                            children: [" ", P.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, a.jsx)("div", {
                                      ref: _,
                                      className: mx.Y,
                                      children: eM ? (0, a.jsx)("div", { className: mx.u }) : null,
                                  }),
                                  null == eP
                                      ? null
                                      : (0, a.jsx)("div", {
                                            className: mx.aZ,
                                            style: {
                                                transform: `translate3d(${eP.at.x + 20}px, ${eP.at.y + 20}px, 0)`,
                                            },
                                            children: (0, a.jsx)("div", {
                                                className: mx.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == q ? "" : void 0,
                                                children: (0, a.jsxs)(j.E, {
                                                    variant: "body-xs/medium",
                                                    className: mx.Ux,
                                                    children: [
                                                        (0, a.jsx)("span", {
                                                            className: mx.Tl,
                                                            children: eP.label.kind,
                                                        }),
                                                        "" === eP.label.name
                                                            ? null
                                                            : (0, a.jsxs)("span", {
                                                                  className: mx.kh,
                                                                  children: [" ", eP.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eR && null == eR.marker
                                      ? (0, a.jsx)("div", { className: mx.D0, style: mj(eR, Y, ei), "aria-hidden": !0 })
                                      : null,
                                  d.map((e, t) => {
                                      let n = mb(e.target, e.anchor, Y, ei),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, a.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: mx.xL,
                                              style: { ...my(n, Y), width: 24, height: 24 },
                                              "aria-label": T.intl.formatToPlainString(R.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: (0, lT.Bx)(e.target),
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
                                              children: (0, a.jsx)(mS, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eT || null == u
                                      ? null
                                      : (0, a.jsx)(e8, {
                                            projectId: u,
                                            at: { x: eT.at.x + 20, y: eT.at.y + 20 },
                                            bounds: Y,
                                            kind: eT.label.kind,
                                            value: eT.draft,
                                            canSubmit: null != q && (0, lT.Ch)(eT.draft),
                                            onChange: (e) => {
                                                null != q && F({ ...q, draft: e });
                                            },
                                            onSubmit: eA,
                                            onDismiss: ea,
                                            onUploadFile: eC,
                                            closing: null == q,
                                        }),
                                  null != eh && null != W && null != eL
                                      ? (0, a.jsxs)(mA, {
                                            point: eL,
                                            frame: Y,
                                            authorId: eh.authorId,
                                            title: (0, lT.Bx)(eh.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                W.confirmingRemove ? X({ ...W, confirmingRemove: !1 }) : X(null);
                                            },
                                            onMouseLeave: () => {
                                                W.editing || W.confirmingRemove || X(null);
                                            },
                                            children: [
                                                W.editing
                                                    ? (0, a.jsx)(nj.f, {
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
                                                          className: mx.aC,
                                                          children: eh.comment,
                                                      }),
                                                (0, G.It)(eh, p)
                                                    ? (0, a.jsx)("div", {
                                                          className: mx.eB,
                                                          children: W.confirmingRemove
                                                              ? (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(j.E, {
                                                                            variant: "body-xs/normal",
                                                                            color: "text-muted",
                                                                            className: mx.nv,
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
                                                                                  disabled: !(0, lT.Ch)(W.draft),
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
function mS(e) {
    let { authorId: t } = e,
        n = (0, c.bG)([nC.default], () => nC.default.getUser(t), [t]);
    return (0, a.jsx)(az.eu, {
        src: null == n ? null : aB.Ay.getUserAvatarURL(n),
        size: aU._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function mA(e) {
    let t,
        n,
        l,
        r,
        s,
        u,
        { point: o, frame: c, authorId: d, title: m, testId: f, onDismiss: h, onMouseLeave: g, children: p } = e,
        x = i.useRef(null),
        v = i.useRef(null),
        [b, y] = i.useState(mv);
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
            originX: S,
            originY: A,
        } = ((n = Math.max((t = c.left + 8), c.left + c.width - 300 - 8)),
        (r = Math.max((l = c.top + 8), c.top + c.height - 160 - 8)),
        (s = Math.min(Math.max(o.x - b.x, t), n)),
        { left: s, top: (u = Math.min(Math.max(o.y - b.y, l), r)), originX: o.x - s, originY: o.y - u }),
        C = { left: k, top: w, "--custom-conjure-card-origin-x": `${S}px`, "--custom-conjure-card-origin-y": `${A}px` };
    return (0, a.jsxs)("div", {
        ref: x,
        className: mx.Nr,
        style: C,
        "data-testid": f,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, a.jsxs)("div", {
                className: mx.MY,
                children: [
                    (0, a.jsx)("span", { ref: v, className: mx.ip, children: (0, a.jsx)(mS, { authorId: d }) }),
                    (0, a.jsx)(j.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        className: mx.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: mx.zI, children: p }),
        ],
    });
}
let mC = 300,
    mN = 2;
function mI(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function mE(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function m_(e) {
    let { box: t } = e;
    return (0, a.jsx)("div", { className: mx.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var mM = n(318774),
    mR = n(697744),
    mT = n(130324);
function mP(e) {
    let t = (0, mR.c)(),
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
    let r = (0, tK.j)();
    return (
        i.useEffect(() => {
            if (!r) return;
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e, r]),
        t
    );
}
function mL(e) {
    let { className: t } = e,
        { Component: n, events: l } = mP(3e4);
    return (0, a.jsxs)("div", {
        className: o()(t, mT.Ve),
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(j.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                className: mT.ol,
                children: T.intl.string(R.default.AyiQEp),
            }),
        ],
    });
}
var m$ = n(251363),
    mD = n(944142),
    mq = n(532247),
    mF = n(501628);
function mO(e) {
    let { progress: t } = e,
        { Component: n } = mP(1500),
        l = q.Q_.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, a.jsx)(j.E, { variant: "body-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, a.jsx)("div", {
                className: mF.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: mF.PM,
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
function mG(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        u = (0, c.bG)([mD.A], () => (s ? mD.A.getLiveReload(t) : null), [s, t]),
        o = (0, eP.A)(n, r)?.id ?? null,
        d = u?.phase ?? null,
        m = u?.background === !0,
        f = (function (e, t, n) {
            let l = (0, mq.dv)(e),
                [r, a] = i.useState(null),
                [s, u] = i.useState(l),
                [o, d] = i.useState(t);
            s !== l && (u(l), d(t), a(null != l || o ? null : (0, mq.QP)(e, s)));
            let m = (0, c.bG)(
                    [eh.A],
                    () => {
                        let e = eh.A.getFrame(n);
                        return (0, ej.x1)(e) && e.data.proxyTicketRefreshing;
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
                        null != t.target && t.target === (0, m$.ow)(null, n) && e();
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
        h = m ? null : (0, mq.h_)(d, u?.step ?? null, f);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(t0.A, { tag: "div", role: "status", "aria-live": "polite", children: h?.title ?? "" }),
            null != h
                ? (0, a.jsx)("div", {
                      className: mF.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, a.jsx)(mO, { progress: h }),
                  })
                : null,
        ],
    });
}
let mz = 0;
var mU = n(782134),
    mB = n(357858),
    mK = n(343030),
    mH = n(11411),
    mV = n(111518),
    mW = n(240666);
let mX = { width: 1 / 0, height: 1 / 0 };
function mQ(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mX;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var mZ = n(702083);
function mY(e) {
    let { children: t } = e,
        { mobile: n, landscape: l } = (0, c.cf)([eL.A], () => ({
            mobile: eL.A.isBuilderPreviewMobile(),
            landscape: eL.A.isBuilderPreviewLandscape(),
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
        m = n ? mQ(l, d ?? void 0) : null;
    return (0, a.jsx)("div", {
        ref: r,
        className: o()(mZ.dw, { [mZ.PQ]: null != m }),
        children: (0, a.jsx)("div", { className: o()(mZ.R9, { [mZ.Vg]: null != m }), style: m ?? void 0, children: t }),
    });
}
var mJ = n(347927);
function m0(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, a.jsxs)("div", {
        className: o()(mJ.Bf, l && mJ.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: mJ.Ux,
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
var m1 = n(957272);
function m2(e) {
    let { applicationId: t, surface: n, launch: l, frameOverlay: r } = e,
        { frame: i, state: s } = (0, mV.A)({ applicationId: t, surface: n, launch: l });
    if (((0, mW.A)(t, n), s === mV.n.Launched)) {
        let e = (0, a.jsx)(mH.A, { frameId: i.id, level: mK.A.WithinAppContent, className: m1.Z7, overlay: r });
        return (0, e$.Q5)(n) ? (0, a.jsx)(mY, { children: e }) : e;
    }
    return (0, a.jsx)(m3, { state: s });
}
function m3(e) {
    let { state: t } = e;
    switch (t) {
        case mV.n.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: m1.qs,
                children: (0, a.jsx)(m0, {
                    title: T.intl.string(R.default["9kpdo7"]),
                    body: T.intl.string(R.default.iIA8Nj),
                }),
            });
        case mV.n.NoApplication:
            return (0, a.jsx)(mL, { className: m1.qs });
        case mV.n.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: m1.qs,
                children: (0, a.jsx)(m0, {
                    title: T.intl.string(R.default["7k4GyN"]),
                    body: T.intl.string(R.default.zdIy3R),
                }),
            });
        case mV.n.Error:
            return (0, a.jsxs)("div", {
                className: m1.qs,
                children: [
                    (0, a.jsx)(v.D, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        children: T.intl.string(R.default.lTPbnG),
                    }),
                    (0, a.jsx)(j.E, {
                        variant: "body-sm/normal",
                        color: "text-feedback-critical",
                        className: m1.tj,
                        children: T.intl.string(R.default.e6GiAZ),
                    }),
                ],
            });
        case mV.n.AwaitingLaunch:
        case mV.n.Loading:
            return (0, a.jsx)("div", { className: m1.qs, children: (0, a.jsx)(b.y, {}) });
    }
}
var m4 = n(308528),
    m5 = n(334738),
    m7 = n(699344),
    m9 = n(365971),
    m8 = n(703462);
function m6(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: m8.f,
        children: [
            (0, a.jsx)(iy.AppsIcon, { size: "lg", color: "var(--icon-muted)" }),
            (0, a.jsx)(j.E, { variant: "body-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function fe() {
    return (0, a.jsx)("div", { className: m8.f, children: (0, a.jsx)(b.y, {}) });
}
function ft(e) {
    let t,
        n,
        { projectId: l, previewApplicationId: r } = e,
        [s, u] = i.useState(null),
        o = s?.previewApplicationId === r ? s.channelId : null,
        d = (0, c.bG)([nS.A], () => (null != o ? nS.A.getChannel(o) : null), [o]);
    ((t = d?.id ?? null),
        i.useEffect(() => {
            null != t && m4.A.preload(ev.ME, t);
        }, [t]),
        (n = (0, c.bG)([os.A], () => os.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, m9.Xg)();
            return (
                (0, m5.yl)(t, e),
                () => {
                    (0, m5.dm)(t, e);
                }
            );
        }, [t, n]));
    let [m, f] = i.useState(null),
        h = m === r;
    return (i.useEffect(() => {
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
        ? (0, a.jsx)(m6, { message: T.intl.string(R.default["VP/O8s"]) })
        : null == d
          ? (0, a.jsx)(fe, {})
          : (0, a.jsx)("div", {
                className: m8.g,
                children: (0, a.jsx)(m7.A, { channel: d, guild: null, chatInputType: sF.oU.SIDEBAR }, d.id),
            });
}
var fn = n(765671),
    fl = n(596977),
    fr = n(921853),
    fa = n(582063);
function fi(e) {
    let { projectId: t, captures: n, selected: l } = e,
        r = [...n, null],
        i = null != l ? n.indexOf(l) : n.length;
    function s(e) {
        let n = r[(i + e + r.length) % r.length];
        (0, Y.vX)(t, n?.id ?? null);
    }
    let u = T.intl.string(R.default.Gl3XtE),
        o = T.intl.string(R.default["3FvcrY"]);
    return (0, a.jsxs)("div", {
        className: fa.aF,
        children: [
            (0, a.jsx)(e3.m, {
                text: u,
                position: "top",
                children: (0, a.jsx)(tr.K, {
                    icon: fr.ChevronSmallLeftIcon,
                    size: "sm",
                    variant: "overlay-secondary",
                    "aria-label": u,
                    onClick: () => s(-1),
                }),
            }),
            (0, a.jsx)("div", {
                className: fa.Dn,
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
            (0, a.jsx)(e3.m, {
                text: o,
                position: "top",
                children: (0, a.jsx)(tr.K, {
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
var fs = n(625903),
    fu = n(666476);
let fo = ["image/png", "image/jpeg", "image/gif", "image/webp"];
function fc() {
    (0, d.P0)({ text: T.intl.string(R.default.jj3abP), variant: "critical" });
}
function fd(e) {
    let { projectId: t } = e,
        n = i.useRef(null),
        l = i.useRef(null),
        r = T.intl.string(R.default["xd/1IW"]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(ey.Y, {
                targetElementRef: n,
                align: "left",
                position: "bottom",
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, a.jsx)(fm, { projectId: t, onClose: n, onUpload: () => l.current?.click() });
                },
                children: (e) => {
                    let { onClick: t } = e;
                    return (0, a.jsx)("div", {
                        ref: n,
                        className: fa.m2,
                        children: (0, a.jsx)(e3.m, {
                            position: "bottom",
                            text: r,
                            asContainer: !0,
                            children: (0, a.jsx)(tr.K, {
                                "aria-label": r,
                                icon: fs.SettingsIcon,
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
                accept: fo.join(","),
                hidden: !0,
                "aria-hidden": !0,
                tabIndex: -1,
                onChange: (e) => {
                    let n = e.currentTarget.files?.[0];
                    ((e.currentTarget.value = ""),
                        null != n &&
                            (fo.includes(n.type)
                                ? n.size > fu.aI
                                    ? (0, d.P0)({ text: T.intl.string(R.default.T8Spiu), variant: "critical" })
                                    : (0, r5.M$)(t, n).catch(fc)
                                : (0, d.P0)({ text: T.intl.string(R.default.AO7zpk), variant: "critical" })));
                },
            }),
        ],
    });
}
function fm(e) {
    let { projectId: t, onClose: n, onUpload: l } = e,
        r = (0, c.bG)([r4.A], () => r4.A.getBackground(t)),
        i = r?.blur !== !1,
        s = r?.imageEtag ?? null;
    return (0, a.jsxs)(ek.W, {
        "data-menu-migrated": !0,
        navId: "conjure-overlay-background",
        "aria-label": T.intl.string(R.default["xd/1IW"]),
        onClose: n,
        onSelect: void 0,
        children: [
            (0, a.jsxs)(ew.rX, {
                children: [
                    (0, a.jsx)(ew.Dr, {
                        id: "conjure-overlay-background-upload",
                        label: T.intl.string(R.default.uQpDky),
                        icon: lx.ImagePlusIcon,
                        action: () => {
                            (n(), l());
                        },
                    }),
                    (0, a.jsx)(ew.Dr, {
                        id: "conjure-overlay-background-reset",
                        label: T.intl.string(R.default.AiAz8J),
                        icon: dD.RetryIcon,
                        disabled: null == s,
                        action: () => {
                            (n(), (0, r5.Og)(t).catch(fc));
                        },
                    }),
                ],
            }),
            (0, a.jsx)(ew.rX, {
                children: (0, a.jsx)(ew.fP, {
                    id: "conjure-overlay-background-blur",
                    label: T.intl.string(R.default["hyN+kc"]),
                    checked: i,
                    action: () => {
                        (0, r5.Y1)(t, !i) || fc();
                    },
                }),
            }),
        ],
    });
}
function ff(e) {
    let { applicationId: t, projectId: n, size: l, frameOverlay: r } = e,
        { ref: s, width: u, height: o } = (0, fn.Ay)(),
        { captures: c, selected: d } = r3(n),
        m = (function (e, t, n) {
            let { width: l, height: r } = e;
            if (null == l || null == r || l <= 0 || r <= 0) return { top: 24, end: 24, scale: 1 };
            if (null == t || t.width <= 0 || t.height <= 0)
                return { top: 24, end: 24, scale: el({ width: l - 48, height: r - 48 }, n) };
            let a = t.width / t.height,
                i = Math.min(l, r * a),
                s = i / 1920,
                u = el({ width: 1872, height: 1920 / a - 48 }, n);
            return { top: (r - i / a) / 2 + 24 * s, end: (l - i) / 2 + 24 * s, scale: u * s };
        })({ width: u, height: o }, d, l);
    return (
        i.useEffect(() => (0, fl.L0)(), []),
        (0, a.jsxs)("div", {
            className: fa.JH,
            children: [
                (0, a.jsx)(r9, { projectId: n, gameCaptures: !0 }),
                (0, a.jsx)("div", {
                    ref: s,
                    className: fa.dw,
                    children: (0, a.jsx)("div", {
                        className: fa.HL,
                        style: {
                            "--custom-conjure-overlay-widget-width": `${l.width}px`,
                            "--custom-conjure-overlay-widget-height": `${l.height}px`,
                            "--custom-conjure-overlay-widget-top": `${m.top}px`,
                            "--custom-conjure-overlay-widget-end": `${m.end}px`,
                            "--custom-conjure-overlay-widget-scale": String(m.scale),
                        },
                        children: (0, a.jsx)(m2, { applicationId: t, surface: e$.p$, frameOverlay: r }),
                    }),
                }),
                null != n ? (0, a.jsx)(fd, { projectId: n }) : null,
                null != n && c.length > 0 ? (0, a.jsx)(fi, { projectId: n, captures: c, selected: d }) : null,
            ],
        })
    );
}
function fh(e) {
    let { onAddBot: t, loading: n = !1 } = e;
    return (0, a.jsx)(m0, {
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
var fg = n(409478),
    fp = n(652227);
function fx(e) {
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
            overlayWidgetSize: m = et,
            projectId: f,
            renderFrameOverlay: h,
            paused: g = !1,
            onResume: p,
        } = e,
        x = (0, c.bG)([l0.A], () => null != f && null != l0.A.getSetupStartedAt(f), [f]);
    return s?.type === "checking"
        ? (0, a.jsx)("div", { className: fp.qs, children: (0, a.jsx)(b.y, {}) })
        : s?.type === "bot_install"
          ? (0, a.jsx)("div", {
                className: fp.qs,
                children: (0, a.jsx)(fh, { onAddBot: s.onAddBot, loading: s.loading }),
            })
          : i
            ? null == t
                ? null
                : (0, a.jsxs)("div", {
                      "data-conjure-entrance": !0,
                      className: fp.RG,
                      children: [
                          (0, ei.yf)(u, o)
                              ? g
                                  ? (0, a.jsx)(fv, { projectId: f, onResume: p })
                                  : (0, a.jsx)(m2, { applicationId: t, surface: l, launch: r, frameOverlay: h?.(l) })
                              : null,
                          "widget" === o && null != d
                              ? "unavailable-authorization-revoked" === u.profileState
                                  ? (0, a.jsx)("div", {
                                        className: fp.qs,
                                        children: (0, a.jsx)(m0, {
                                            wide: !0,
                                            title: T.intl.string(R.default["08U+YO"]),
                                            body: T.intl.string(R.default.pKBfrc),
                                        }),
                                    })
                                  : (0, a.jsx)(fg.A, { applicationId: d })
                              : null,
                          "overlay" === o && u.modes.includes("overlay")
                              ? (0, a.jsx)(ff, { applicationId: t, projectId: f, size: m, frameOverlay: h?.(ej.ZN) })
                              : null,
                          "bot" === o && null != n && null != f
                              ? (0, a.jsx)(ft, { projectId: f, previewApplicationId: n })
                              : null,
                      ],
                  })
            : x
              ? (0, a.jsx)("div", { className: fp.qs, children: (0, a.jsx)(b.y, {}) })
              : (0, a.jsx)(mL, { className: fp.qs });
}
function fv(e) {
    let { projectId: t, onResume: n } = e;
    return (
        (0, mB.Pu)(t),
        (0, a.jsx)("div", {
            className: fp.qs,
            children: (0, a.jsx)(m0, {
                wide: !0,
                title: T.intl.string(R.default.MMWEH2),
                body: T.intl.string(R.default.iKSu55),
                children:
                    null != n
                        ? (0, a.jsx)(m.$, {
                              size: "sm",
                              variant: "primary",
                              icon: mU.PlayIcon,
                              text: T.intl.string(R.default.ZKd2Cw),
                              onClick: n,
                          })
                        : null,
            }),
        })
    );
}
var fj = n(750506),
    fb = n(867193),
    fy = n(539197),
    fk = n(977020);
function fw(e) {
    let { projectId: t } = e,
        n = (0, fy.X2)(t),
        l = (function (e) {
            let [t, n] = i.useState(null);
            return (
                i.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, fy.Ie)(e);
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
        className: fk.$Q,
        style: { left: r, top: s, width: u, height: c, "--custom-conjure-cursor-scale": d },
        "aria-hidden": !0,
        [fy.t$]: "",
        children: [
            n.presses > 0
                ? (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)("div", { className: o()(fk.hN, fk.vW), style: m(n.pressX, n.pressY) }),
                              (0, a.jsx)("div", { className: o()(fk.hN, fk.A7), style: m(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, a.jsx)("svg", {
                className: o()(fk.UE, { [fk.SP]: n.shown, [fk.Vq]: n.pressed, [fk.GP]: n.dipping }),
                style: m(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, a.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var fS = n(417760);
function fA(e) {
    let { phase: t, projectId: n, compact: l } = e,
        { stop: r, stopping: s } = (function (e) {
            let t = (0, c.bG)([rl.A], () => null != e && rl.A.isThinking(e)),
                [n, l] = i.useState(!1),
                [r, a] = i.useState(t);
            (t !== r && (a(t), t || l(!1)),
                i.useEffect(() => {
                    if (!n) return;
                    let e = setTimeout(() => l(!1), 5e3);
                    return () => clearTimeout(e);
                }, [n]));
            let s = i.useCallback(() => {
                null != e && (l(!0), (0, eO.fu)(e));
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
              className: o()(fS.M0, fS.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  d
                      ? (0, a.jsx)(o8.i, { size: 12, color: "currentColor" })
                      : (0, a.jsx)(iX.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, a.jsx)(j.E, { variant: "body-sm/semibold", color: "none", className: fS.ID, children: f }),
                  d ? (0, a.jsx)(t0.A, { children: T.intl.string(R.default.fg1sor) }) : null,
                  d ? (0, a.jsx)("div", { className: fS.lC, children: h }) : null,
              ],
          })
        : (0, a.jsxs)("div", {
              className: fS.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, a.jsxs)("div", {
                      className: fS.sp,
                      children: [
                          (0, a.jsx)(iX.SparklesIcon, { size: "sm", color: "currentColor" }),
                          d ? (0, a.jsx)(o8.i, { size: 12, color: "currentColor" }) : null,
                          (0, a.jsxs)("div", {
                              className: fS.f4,
                              children: [
                                  (0, a.jsx)(j.E, {
                                      variant: "body-sm/semibold",
                                      color: "none",
                                      className: fS.w9,
                                      children: f,
                                  }),
                                  d
                                      ? (0, a.jsx)(j.E, {
                                            variant: "body-xs/medium",
                                            color: "none",
                                            className: fS.Rb,
                                            children: T.intl.string(R.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  d ? (0, a.jsx)("div", { className: fS.lC, children: h }) : null,
              ],
          });
}
function fC(e) {
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
        d = (0, eg.cR)(s);
    i.useEffect(() => {
        u && d && null != s && (0, eg.BL)(s);
    }, [u, d, s]);
    let [m, f] = i.useState(null),
        [h, g] = i.useState(null),
        [p, x] = i.useState(null),
        v = "idle" !== o;
    i.useEffect(() => {
        if (!v) return;
        function e() {
            let e = e6(r());
            f((t) => (te(t, e) ? t : e));
            let t = null == h ? null : e6(h);
            (x((e) => (te(e, t) ? e : t)), null != h && (0, fb.C)(h.getBoundingClientRect().height));
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
                    null != h && (0, fb.C)(0));
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
            let [e] = i.useContext(fj.uY),
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
                      className: fS.D,
                      "data-phase": o,
                      children: (0, a.jsx)("div", {
                          className: fS.QF,
                          children: (0, a.jsx)(fA, { phase: o, projectId: t, compact: y }),
                      }),
                  })
                : null,
            (0, eJ.createPortal)(
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(t0.A, {
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
                ? (0, eJ.createPortal)(
                      (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: fS.ys,
                                  style: w,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", {
                                  className: fS.om,
                                  style: k,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)(fw, { projectId: t }),
                          ],
                      }),
                      S,
                  )
                : null,
        ],
    });
}
var fN = n(399503),
    fI = n(853555),
    fE = n(944100),
    f_ = n(327152),
    fM = n(187645);
let fR = { width: 1280, height: 720 },
    fT = new Map(),
    fP = !1;
function fL() {
    let e = new Map();
    for (let t of new Set([...rl.A.getActivityOrderedProjectIds(), ...(0, O.T7)()])) {
        if (!(rl.A.isThinking(t) || (0, O.wK)(t)) || J.A.isPaused(t)) continue;
        let n = (function (e) {
            let t = eR.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = [(0, e$.Rc)(t), (0, e$.Th)(t)].find(ej.x1);
            return n?.id ?? null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [l, r] of [...fT]) {
        var t, n;
        e.get(l) !== r.frameId &&
            ((t = l),
            (n = r),
            fT.delete(t),
            n.unregisterLookup(),
            fE.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove(),
            (0, f_.Pn)(n.frameId, null));
    }
    for (let [t, n] of e)
        fT.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = fM.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    f$(n, e, t),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (fT.set(e, l),
                    (l.unregisterLookup = (0, fI.Ng)(e, () => (0, m$.n5)(n, t))),
                    fE.A.registerFrameTarget(t, n, mK.A.Backstage, void 0));
            })(t, n);
    for (let [e, t] of fT) f$(t.element, e, t.frameId);
}
function f$(e, t, n) {
    if (eh.A.getFrame(n)?.surface.type === es.U.OVERLAY) {
        let l = er(eR.Ay.getProject(t));
        (e.classList.remove(fM.L),
            (e.style.width = `${l.width}px`),
            (e.style.height = `${l.height}px`),
            (0, f_.Pn)(n, l));
        return;
    }
    let l = eL.A.isBuilderPreviewMobile();
    e.classList.toggle(fM.L, !l);
    let r = l ? mQ(eL.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != r ? `${r.width}px` : ""),
        (e.style.height = null != r ? `${r.height}px` : ""),
        (0, f_.Pn)(n, r ?? fR));
}
var fD = n(873727),
    fq = n(47671),
    fF = n(418842),
    fO = n(413599);
let fG = 0;
var fz = n(487887);
let fU = null;
var fB = n(541940);
function fK(e) {
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
        x = (0, eP.A)(l, s),
        v = x?.id ?? null;
    (!(function (e, t) {
        let n = (0, c.bG)([fO.A], () => (0, fD.x4)(fO.A.theme)),
            l = (0, c.bG)([fq.A], () => fq.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: a,
                highContrast: s,
                forcedColors: u,
                underlineLinks: o,
            } = (0, c.cf)([aO.Ay], () => ({
                reducedMotion: aO.Ay.useReducedMotion,
                fontScale: (0, fD.U0)(),
                highContrast: aO.Ay.isHighContrastModeEnabled,
                forcedColors: aO.Ay.useForcedColors,
                underlineLinks: aO.Ay.alwaysShowLinkDecorations,
            })),
            d = q.hH.useSetting(),
            m = (0, c.bG)([sT.A], () => sT.A.hidePersonalInformation),
            f = (0, fF.C)(),
            h = (0, c.bG)(
                [eh.A, eL.A],
                () =>
                    eL.A.isBuilderPreviewMobile() &&
                    eh.A.getFrame(t)?.applicationId === eL.A.getPhoneLensApplicationId()
                        ? "mobile"
                        : "desktop",
                [t],
            ),
            g = i.useRef(!1),
            p = i.useRef(!1),
            x = i.useRef(null),
            v = i.useCallback(() => {
                let l = (0, m$.n5)(e, t);
                if (null == l) return;
                x.current = l;
                let i = {
                    revision: ++fG,
                    baseTheme: n,
                    customTheme: (0, fD.Lq)(),
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
                (0, mg.W)(l, "set-env", i, {
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
                let n = (0, m$.n5)(e, t);
                null != n && n !== x.current && b();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, m$.n5)(e, t) && ((x.current = null), b());
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
            if (null != t) return (0, fI.Ng)(t, () => (0, m$.n5)(g, v));
        }, [t, g, v]));
    let j = i.useCallback(() => (0, m$.ow)(g, v), [g, v]),
        b = i.useCallback(() => (f ? (0, m$.ow)(g, v) : g), [f, g, v]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: o()(fB.Mh, u),
                children: [
                    h
                        ? null
                        : (0, a.jsx)(fC, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveTarget: b,
                              frameId: v,
                          }),
                    (0, a.jsx)("div", { ref: p, className: fB.fm, children: d }),
                ],
            }),
            m,
            h
                ? null
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(mw, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveIframe: j,
                              toggleRef: n,
                          }),
                          (0, a.jsx)(tq, { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: j }),
                      ],
                  }),
        ],
    });
}
function fH(e) {
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
            overlayWidgetSize: S,
            previewPaused: A = !1,
            onResumePreview: C,
        } = e;
    (0, fN.k)(n, w);
    let N = u.type === es.U.MAIN || (0, e$.Q5)(u);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, c.cf)([eL.A], () => ({
            mobile: eL.A.isBuilderPreviewMobile(),
            landscape: eL.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? fz.aX.LANDSCAPE : fz.aX.PORTRAIT), (fU = e));
                else {
                    if (fU !== e) return;
                    ((l = fz.aX.UNHANDLED), (fU = null));
                }
                u2.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(N ? r : null);
    let I = i.useRef(null),
        [E, _] = i.useState(0);
    (i.useEffect(() => {
        if (null == n) return;
        (0, tO.T)(n);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, tO.T)(n);
        }, 3e3);
        return () => clearInterval(e);
    }, [n]),
        (t = i.useRef(0)),
        i.useLayoutEffect(() => {
            N && ((t.current = ++mz), (0, Y.HV)(r));
        }, [r, N]),
        i.useEffect(() => {
            if (!N) return;
            let e = t.current;
            return () => {
                e === mz && (0, Y.HV)(null);
            };
        }, [r, N]),
        i.useEffect(() => {
            null != n &&
                ((0, eO.ensureConnection)(n),
                fP ||
                    ((fP = !0),
                    rl.A.addChangeListener(fL),
                    eR.Ay.addChangeListener(fL),
                    eh.A.addChangeListener(fL),
                    eL.A.addChangeListener(fL),
                    J.A.addChangeListener(fL),
                    (0, O.W3)(fL),
                    fL()));
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
        className: fB.cL,
        children: [
            m,
            (0, a.jsx)("div", {
                ref: I,
                className: fB.LB,
                children: (0, a.jsx)(fK, {
                    projectId: n,
                    designFeedbackToggleRef: l,
                    applicationId: r,
                    previewApplicationId: s,
                    surface: u,
                    showsFrame: (0, ei.yf)(y, k),
                    paused: A,
                    mainClassName: null == m ? void 0 : o()(fB.ez, { [fB.zt]: f }),
                    content: (0, a.jsx)(fx, {
                        applicationId: r,
                        previewApplicationId: s,
                        surface: u,
                        frameLaunchParams: d,
                        previewReady: j,
                        previewGate: b,
                        availability: y,
                        activeMode: k,
                        widgetApplicationId: w,
                        overlayWidgetSize: S,
                        projectId: n,
                        paused: A,
                        onResume: C,
                        renderFrameOverlay: (e) =>
                            (0, a.jsx)(mG, { projectId: n, applicationId: r, previewApplicationId: s, surface: e }),
                    }),
                    sidebar:
                        null != n && R
                            ? (0, a.jsx)("div", {
                                  className: f ? fB.v7 : fB.LL,
                                  children: (0, a.jsx)(eY.A, {
                                      sidebarType: eY.X.CallChatSidebar,
                                      maxWidth: M,
                                      capturePointer: !0,
                                      children: (0, a.jsx)("div", {
                                          className: fB.cO,
                                          children: p
                                              ? (0, a.jsx)(mo, { projectId: n, onClose: x ?? (() => {}) }, n)
                                              : (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                        (0, a.jsx)(mM.Ay, { projectId: n }),
                                                        (0, a.jsx)("div", {
                                                            className: fB.cb,
                                                            children: (0, a.jsx)(
                                                                cS,
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
var fV = n(705427),
    fW = n(606128),
    fX = n(323140);
function fQ(e) {
    let t,
        l,
        r,
        { project: s, projectsLoaded: u, onBack: b, guildId: y, onBackToServer: k } = e,
        w = i.useContext(X.A),
        [S] = i.useState(() => (null != w ? Z.A.getProjectView(w) : null)),
        [L, $] = i.useState(S?.chatOpen ?? !0),
        [q, et] = i.useState(S?.debugOpen ?? !1);
    i.useEffect(() => {
        null != w && (0, Q.g7)(w, { chatOpen: L, debugOpen: q });
    }, [w, L, q]);
    let en = i.useCallback(
            (e) => {
                null != w && (0, Q.g7)(w, { previewSelection: e });
            },
            [w],
        ),
        el = F(),
        eu = (0, z.f)("ConjureSelectedProjectScreen"),
        eo = i.useCallback(() => $(!0), []),
        ec = i.useCallback(() => {
            (et(!1), $(!0));
        }, []),
        { restoreState: em, handleRestoreVersion: ef } = (function (e, t) {
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
        })(s, ec),
        eh = s?.id ?? null,
        eg = null != (0, eH.E8)(eh),
        ep = L || eg,
        ex = q && !eg,
        {
            integrationStatus: ev,
            isPreviewApplicationLoading: ey,
            checkingIntegration: ek,
            previewReady: ew,
            hasFrame: eS,
        } = (function (e) {
            let [t, n] = i.useState(null),
                l = e?.id ?? null,
                r = i.useRef(l),
                a = i.useRef(null);
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
                g = (0, ei.Qg)({
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
                            await (0, eE.TA)(e);
                        } catch {}
                    })(u);
            }, [h, d, g, u]);
            let p = i.useCallback(async () => {
                if (null == l || r.current !== l) return;
                a.current?.abort();
                let e = new AbortController();
                ((a.current = e), n(null));
                try {
                    await ((0, e_.CG)(l)?.catch(() => (0, e_.U1)(l, e.signal)) ?? (0, e_.U1)(l, e.signal));
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
            (0, c.bG)([eG.A], () => (null == eh ? void 0 : eG.A.getPublishStatus(eh)?.previewAppChannels), [eh]) ??
            ev?.preview_app_channels,
        {
            availability: eC,
            activeMode: eX,
            setMode: eQ,
            frameSurface: eY,
            frameSurfaceOptions: eJ,
            setFrameSurface: e0,
            appChannel: e1,
            setAppChannel: e2,
            frameLaunchParams: e3,
            widgetApplicationId: e4,
        } = (0, ed.p)({
            applicationId: s?.preview_application_id ?? null,
            previewApplicationId: s?.preview_application_id ?? null,
            declaredActivity: eS,
            previewSupportedSurfaces: s?.preview_supported_surfaces,
            installScope: s?.install_scope ?? null,
            ownerAuthorizationRevoked: ev?.owner_authorization_revoked === !0,
            supportsOverlay: s?.preview_supported_surfaces?.includes(ee.q7.OVERLAY) === !0,
            previewAppChannels: eA,
            initialSelection: S?.previewSelection,
            onSelectionChange: en,
        }),
        e5 = er(s);
    ((0, ea.x)(eh, (e) => {
        eC.modes.includes(e) && eQ(e);
    }),
        D(eh, () => {
            ($(!0), et(!0));
        }));
    let e7 = eC.modes.includes("frame"),
        e9 = (0, c.bG)([J.A], () => J.A.isPaused(eh), [eh]),
        {
            previewTargetOptions: e8,
            handleSelectPreviewTarget: e6,
            mobilePreview: te,
            mobilePreviewLabel: tt,
            handleToggleMobilePreview: tn,
            landscapePreview: tl,
            rotatePreviewLabel: tr,
            handleRotatePreview: ta,
            previewSurface: ti,
            previewFrame: ts,
            refreshFrame: tu,
            isRefreshing: to,
            handleRefresh: tc,
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
                                          t === es.U.APP_CHANNEL && n.length > 1
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
                h = (0, c.bG)([eL.A], () => eL.A.isBuilderPreviewMobile()),
                g = T.intl.string(h ? R.default.tKGF0Q : R.default.peqEOY),
                p = i.useCallback(() => (0, Y.GG)(!h), [h]),
                x = (0, c.bG)([eL.A], () => eL.A.isBuilderPreviewLandscape()),
                v = T.intl.string(x ? R.default.tunI2l : R.default.DoNdjA),
                j = i.useCallback(() => (0, Y.Lw)(!x), [x]),
                b = (0, e$.jS)(t),
                y = i.useMemo(() => (0, e$.Op)(b, r), [b, r]),
                k = (0, eP.A)(t?.preview_application_id ?? null, y),
                w = (0, eP.A)(t?.preview_application_id ?? null, ej.ZN),
                S = "overlay" === l ? w : k,
                A = (0, ej.x1)(S) && S.data.proxyTicketRefreshing,
                C = i.useCallback(() => {
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
            modes: eC.modes,
            activeMode: eX,
            frameSurface: eY,
            frameSurfaceOptions: eJ,
            previewAppChannels: eA,
            setMode: eQ,
            setFrameSurface: e0,
            setAppChannel: e2,
        }),
        td = (0, A.A)(ts),
        tm = e7 && !e9,
        tf = (0, I.lQ)(eh),
        th = td.isPoppedOut ? R.default.pmkK8i : e9 ? R.default.Yet11p : null,
        tg = null != th;
    function tp(e) {
        return null == th ? e : T.intl.formatToPlainString(th, { label: e });
    }
    let tx = ep && !ex,
        tv = T.intl.string(tx ? R.default.JD6Oit : R.default.xjJAQm),
        tj = i.useCallback(() => {
            if (eg) return void (0, d.P0)({ text: T.intl.string(R.default["PyD/rD"]), variant: "critical" });
            if (q) {
                (et(!1), $(!0));
                return;
            }
            $((e) => !e);
        }, [q, eg]),
        {
            designFeedbackActive: tb,
            designFeedbackToggleRef: ty,
            agentDrivingPreview: tk,
            designFeedbackLabel: tw,
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
        })(eh, tm && (!td.isPoppedOut || tf), ec),
        [tA] = i.useState(() => N.isPlatformEmbedded && (0, eI.qM)());
    i.useEffect(() => {
        null != eh && tf && !tm && (0, I.It)(eh);
    }, [eh, tf, tm]);
    let tC = i.useCallback(() => {
            null != eh && (ec(), (0, I.c$)(eh), (0, I.rC)(eh, "marker"));
        }, [eh, ec]),
        tN = i.useCallback(() => {
            null != eh && (0, I.V9)(eh);
        }, [eh]),
        tI =
            tg && !tf
                ? tp(T.intl.string(R.default["XWU+XF"]))
                : T.intl.string(tf ? R.default.tuQ5f3 : tk ? R.default.agwlrD : R.default["XWU+XF"]),
        tE = tg ? tp(T.intl.string(R.default["cl/Jyl"])) : tw,
        t_ = tp(tt),
        tM = tp(tr),
        tR = i.useCallback(() => {
            et((e) => !e && ($(!0), !0));
        }, []),
        tT = i.useCallback(() => et(!1), []),
        tP = i.useCallback(() => {
            null != eh && (0, Y._j)(eh);
        }, [eh]),
        tL = i.useCallback(() => {
            null != eh && (e9 ? (0, Y._j)(eh) : (0, Y.di)(eh, ts?.id));
        }, [eh, e9, ts?.id]),
        t$ = i.useCallback(() => {
            var e, t;
            (null != s && ((e = s.id), (t = ts?.id), (0, eO.Bn)(e), (0, eF.r)(t)), b());
        }, [s, ts?.id, b]),
        tD =
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
                                  eo();
                                  try {
                                      await (0, _.Hj)(t, e, T.intl.string(R.default.Owerd3));
                                  } catch {
                                      (0, d.P0)({ text: T.intl.string(R.default["Q+l4Hv"]), variant: "critical" });
                                  }
                              },
                          });
                },
                [s, eo],
            )),
            { onExport: t, onImport: (r = (0, _.yN)(l)).open, importInput: r.input }),
        tq = i.useCallback(() => {
            null != s && (0, eV.A)(s, y);
        }, [s, y]),
        tF = i.useCallback(async () => {
            null != eh && (await (0, eU.vL)(eh, y));
        }, [y, eh]),
        tO = (0, ei.aN)(eX, {
            installScope: s?.install_scope ?? null,
            previewReady: ew,
            integrationInstalled: ev?.integration_installed ?? null,
        })
            ? { type: "bot_install", onAddBot: tF, loading: ey }
            : ek && null == ev
              ? { type: "checking" }
              : void 0,
        tG = (0, c.bG)([eR.Ay], () => null != eh && eR.Ay.isProjectDeleting(eh), [eh]);
    i.useEffect(() => {
        ((null == s && u) || tG) && b();
    }, [s, u, tG, b]);
    let {
            publishOptions: tz,
            publish: tU,
            publishing: tB,
            confirmation: tK,
            variant: tH,
            text: tV,
            pendingChanges: tW,
        } = (0, eK.A)(eh, y, ek || ey),
        tX = (0, eB.A)(eh, tU, tz),
        tQ = "frame" === eX && !e9 && (0, ej.x1)(ts) && (td.isPoppedOut || td.canPopout),
        tZ = i.useCallback(() => {
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
                            n.e(587883),
                        ]).then(n.bind(n, 247270));
                        return (n) => (0, a.jsx)(t, { ...n, ...e });
                    }));
            }
        }, [s, em?.status, ef]);
    (0, B.z)(eh, tZ);
    let tY = null == s ? void 0 : () => (0, eW.A)(s.id, { guildId: y, isPreview: !0, publishOptions: tz }),
        tJ =
            null == s
                ? null
                : (0, a.jsx)(eq.A, {
                      ...(0, eD.A)(s, y),
                      onOpenProjectSettings: tY,
                      onTogglePreviewPaused: "frame" === eX ? tL : void 0,
                      previewPaused: e9,
                      previewPauseDisabled: !e9 && tk,
                      onTogglePopout: tQ ? (td.isPoppedOut ? td.popIn : td.popOut) : void 0,
                      poppedOut: td.isPoppedOut,
                      onToggleDebug: el ? tR : void 0,
                      debugOpen: ex,
                      onExport: tD.onExport,
                      onImport: tD.onImport,
                      onRemix: tq,
                      onConnectTool: eu ? () => (0, U.A)(s.id) : void 0,
                      onHistory: tZ,
                      refreshApplicationId:
                          eC.modes.includes("widget") && "unavailable-authorization-revoked" !== eC.profileState
                              ? e4
                              : null,
                      previewProjectId: s.id,
                  }),
        t0 = null != tU && null != s && ("primary" === tH || tB || null != tK),
        t1 = t0
            ? (0, a.jsx)("div", {
                  className: fX.As,
                  onMouseDown:
                      null == eh || tU.disabled || tB
                          ? void 0
                          : (e) => {
                                0 === e.button && (0, ez.dx)(eh);
                            },
                  children: (0, a.jsx)(m.$, {
                      size: "sm",
                      variant: "primary",
                      icon: tB ? fZ : null != tK ? f.CheckmarkSmallIcon : void 0,
                      text: tV,
                      onClick: () => tX("header"),
                  }),
              })
            : null,
        t2 = (0, a.jsx)(fV.A, {
            title: s?.name ?? T.intl.string(R.default.G1WwgK),
            project: s,
            onOpenProjectSettings: tY,
            onBack: k,
            hideShareTarget: null != k,
            preview: null != s,
            draft: tW,
            actions:
                null == s
                    ? null
                    : (0, a.jsxs)("div", {
                          className: fX.FO,
                          children: [
                              (0, a.jsxs)("div", {
                                  className: fX.QQ,
                                  children: [
                                      (0, a.jsx)(eN, {
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
                                          })(eX, eY, e1),
                                          onChange: e6,
                                      }),
                                      e7
                                          ? (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    "frame" === eX
                                                        ? (0, a.jsx)(C.A.Icon, {
                                                              icon: te ? f0 : fJ,
                                                              tooltip: t_,
                                                              "aria-label": t_,
                                                              selected: te,
                                                              disabled: tg,
                                                              onClick: tn,
                                                          })
                                                        : null,
                                                    te && "frame" === eX
                                                        ? (0, a.jsx)(C.A.Icon, {
                                                              icon: f1,
                                                              tooltip: tM,
                                                              "aria-label": tM,
                                                              selected: tl,
                                                              disabled: tg,
                                                              onClick: ta,
                                                          })
                                                        : null,
                                                    tA
                                                        ? (0, a.jsx)(C.A.Icon, {
                                                              icon: h.PencilIcon,
                                                              tooltip: tI,
                                                              "aria-label": tI,
                                                              selected: tf,
                                                              disabled: (tg || tk) && !tf,
                                                              onClick: tf ? tN : tC,
                                                          })
                                                        : (0, a.jsx)(C.A.Icon, {
                                                              ref: ty,
                                                              icon: g.ExperimentalDirectSelectIcon,
                                                              iconClassName: fX.D8,
                                                              tooltip: tE,
                                                              "aria-label": tE,
                                                              selected: tb,
                                                              disabled: tg || tk,
                                                              onClick: tS,
                                                          }),
                                                ],
                                            })
                                          : null,
                                      "frame" !== eX || e9
                                          ? null
                                          : (0, a.jsx)(eb, { frame: ts, controlProjectId: s.id }),
                                      (0, ej.x1)(tu)
                                          ? (0, a.jsx)(C.A.Icon, {
                                                icon: p.RefreshIcon,
                                                tooltip: T.intl.string(R.default.FZIHQN),
                                                "aria-label": T.intl.string(R.default.FZIHQN),
                                                disabled: to,
                                                onClick: tc,
                                            })
                                          : null,
                                  ],
                              }),
                              (0, a.jsx)("div", { className: fX.YJ }),
                              (0, a.jsx)(P.A, { frame: ts }),
                              (0, a.jsx)(C.A.Icon, {
                                  icon: x.DoorExitIcon,
                                  tooltip: T.intl.string(R.default["/TlGcK"]),
                                  "aria-label": T.intl.string(R.default["/TlGcK"]),
                                  onClick: t$,
                              }),
                              (0, a.jsx)(C.A.Icon, {
                                  icon: fY,
                                  tooltip: tv,
                                  "aria-label": tv,
                                  selected: tx,
                                  onClick: tj,
                              }),
                              tJ,
                              (0, a.jsx)(eZ, { projectId: s.id, variant: t0 ? "secondary" : "primary" }),
                              t1,
                          ],
                      }),
        });
    return (0, a.jsxs)("div", {
        className: o()(fX.nj, fW.T),
        children: [
            tD.importInput,
            (0, a.jsx)("main", {
                className: fX.JX,
                children:
                    null == s
                        ? (0, a.jsxs)("div", {
                              className: fX.j5,
                              children: [
                                  t2,
                                  (0, a.jsxs)("div", {
                                      className: fX.sD,
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
                                              onClick: () => (0, e_.listProjects)(y),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, a.jsx)(eU.bI.Provider, {
                              value: tz,
                              children: (0, a.jsx)(
                                  fH,
                                  {
                                      projectId: s.id,
                                      designFeedbackToggleRef: ty,
                                      applicationId: s.preview_application_id,
                                      previewApplicationId: s.preview_application_id,
                                      surface: ti,
                                      frameLaunchParams: e3,
                                      header: t2,
                                      chatOpen: ep,
                                      debugOpen: el && ex,
                                      onCloseDebug: tT,
                                      onRestoreVersion: ef,
                                      onImportProject: (0, eR.PV)(s) ? tD.onImport : void 0,
                                      restoreState: em,
                                      previewReady: ew,
                                      previewGate: tO,
                                      availability: eC,
                                      activeMode: eX,
                                      widgetApplicationId: e4,
                                      overlayWidgetSize: e5,
                                      previewPaused: e9,
                                      onResumePreview: tP,
                                  },
                                  s.id,
                              ),
                          }),
            }),
        ],
    });
}
function fZ() {
    return (0, a.jsx)(b.y, { type: b.t.SPINNING_CIRCLE_SIMPLE, className: fX.Hv, itemClassName: fX.C5 });
}
function fY(e) {
    return (0, a.jsx)(y.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function fJ(e) {
    return (0, a.jsx)(k.MobilePhoneIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function f0(e) {
    return (0, a.jsx)(w.ScreenIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function f1(e) {
    return (0, a.jsx)(S.RotateIcon, { ...e, size: "custom", width: 20, height: 20 });
}
